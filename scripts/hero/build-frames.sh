#!/usr/bin/env bash
# Builds the scroll-hero assets from the three transition clips per format.
#
#   scripts/hero/build-frames.sh <clips-dir> [version]
#
# <clips-dir> holds desktop-1.mp4 desktop-2.mp4 desktop-3.mp4 (16:9) and
# mobile-1.mp4 mobile-2.mp4 mobile-3.mp4 (9:16): beat 1→2, 2→3, 3→4.
# Writes public/hero/<version>/{desktop,mobile}/f-NNN.webp, hero.mp4, and
# the poster/final stills to src/assets/hero/scroll/. Desktop frames are
# 1920 px wide and the set stays under 15,000,000 bytes. Real foliage compresses poorly (about 150 KB a frame), so to
# stay under the 15 MB desktop budget we cut 120 frames, not 240, and the
# canvas blends neighbouring frames while scrubbing. Quality steps down
# from 34 until the set fits; a light denoise removes video grain first.
set -euo pipefail

CLIPS=${1:?clips dir}
VERSION=${2:-v1}
ROOT=$(cd "$(dirname "$0")/../.." && pwd)
OUT="$ROOT/public/hero/$VERSION"
STILLS="$ROOT/src/assets/hero/scroll"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

DESKTOP_FRAMES=120
MOBILE_FRAMES=96
BUDGET=15000000

join() { # $1 = desktop|mobile
  printf "file '%s'\n" "$CLIPS/$1-1.mp4" "$CLIPS/$1-2.mp4" "$CLIPS/$1-3.mp4" > "$TMP/$1.txt"
  # Re-encode while joining so differing clip timebases can't break the cut.
  ffmpeg -hide_banner -loglevel error -y -f concat -safe 0 -i "$TMP/$1.txt" -an -c:v libx264 -crf 14 -preset medium -pix_fmt yuv420p "$TMP/$1.mp4"
}

frames() { # $1 = name, $2 = count, $3 = scale filter, $4 = quality
  local dur fps
  dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$TMP/$1.mp4")
  fps=$(python3 -c "print($2 / $dur)")
  rm -rf "$OUT/$1" && mkdir -p "$OUT/$1"
  ffmpeg -hide_banner -loglevel error -y -i "$TMP/$1.mp4" -vf "fps=$fps,hqdn3d=4:4:6:6,$3" -frames:v "$2" \
    -c:v libwebp -quality "$4" -preset photo -compression_level 4 "$OUT/$1/f-%03d.webp"
}

join desktop
join mobile

for q in 26 22 18; do
  frames desktop $DESKTOP_FRAMES "scale=1920:-2:flags=lanczos" $q
  size=$(du -cb "$OUT"/desktop/*.webp | tail -1 | cut -f1)
  echo "desktop q=$q: $size bytes"
  [ "$size" -lt "$BUDGET" ] && break
done
frames mobile $MOBILE_FRAMES "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280" 20

# Short muted fallback loop for slow connections (the whole story, small).
ffmpeg -hide_banner -loglevel error -y -i "$TMP/desktop.mp4" -an -vf "scale=1280:-2" -c:v libx264 -crf 30 -preset medium \
  -pix_fmt yuv420p -movflags +faststart "$OUT/hero.mp4"

# Poster (first frame) and final still, through next/image.
mkdir -p "$STILLS"
ffmpeg -hide_banner -loglevel error -y -i "$TMP/desktop.mp4" -vf "select=eq(n\,0),scale=1920:-2" -frames:v 1 -q:v 3 "$STILLS/poster-wide.jpg"
ffmpeg -hide_banner -loglevel error -y -i "$TMP/mobile.mp4" -vf "select=eq(n\,0),scale=1080:-2" -frames:v 1 -q:v 3 "$STILLS/poster-tall.jpg"
ffmpeg -hide_banner -loglevel error -y -sseof -0.1 -i "$TMP/desktop.mp4" -vf "scale=1920:-2" -frames:v 1 -update 1 -q:v 3 "$STILLS/final-wide.jpg"
ffmpeg -hide_banner -loglevel error -y -sseof -0.1 -i "$TMP/mobile.mp4" -vf "scale=1080:-2" -frames:v 1 -update 1 -q:v 3 "$STILLS/final-tall.jpg"
cp "$STILLS/poster-wide.jpg" "$OUT/poster.jpg"

du -sh "$OUT"/desktop "$OUT"/mobile "$OUT"/hero.mp4
ls "$OUT"/desktop | wc -l
