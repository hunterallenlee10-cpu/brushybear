#!/usr/bin/env bash
# Optimize Higgsfield originals from assets-src/ (git-ignored) for the site.
#
#   scripts/optimize-media.sh hero  <intro.mp4> <loop.mp4> <still.png>
#   scripts/optimize-media.sh image <in.png> <out-name> [max-width]
#
# Videos: muted H.264 MP4 + VP9 WebM, 1280 px wide, no audio track, sized
# so intro + loop stay under ~2.5 MB together. Images: a 2400 px-max PNG/JPEG
# source for next/image, which serves AVIF/WebP at each screen size.
set -euo pipefail
mode="${1:?hero|image}"
shift

if [[ "$mode" == "hero" ]]; then
  intro="$1"; loop="$2"; still="$3"
  out=public/media/hero; mkdir -p "$out" src/assets/hero
  for name in intro loop; do
    src=$([[ $name == intro ]] && echo "$intro" || echo "$loop")
    ffmpeg -y -loglevel error -i "$src" -an -vf "scale=1280:-2,fps=24" -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -movflags +faststart "$out/$name.mp4"
    ffmpeg -y -loglevel error -i "$src" -an -vf "scale=1280:-2,fps=24" -c:v libvpx-vp9 -b:v 0 -crf 40 -row-mt 1 "$out/$name.webm"
  done
  convert "$still" -resize '2400x2400>' -strip -quality 88 src/assets/hero/still.jpg
  du -ch "$out"/* | tail -1
elif [[ "$mode" == "image" ]]; then
  in="$1"; name="$2"; max="${3:-2400}"
  mkdir -p src/assets/media
  if convert "$in" -format '%[opaque]' info: | grep -qi false; then
    convert "$in" -resize "${max}x${max}>" -strip src/assets/media/"$name".png
  else
    convert "$in" -resize "${max}x${max}>" -strip -quality 86 src/assets/media/"$name".jpg
  fi
  ls -la src/assets/media/"$name".*
fi
