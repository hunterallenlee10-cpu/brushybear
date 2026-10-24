"""Cut the Brushy Bear logo out of its white background, keeping its sticker border.

The source files are the artwork on flat white, wrapped in a white "sticker"
border (about 37 px wide at 2048 px) with a soft gray drop shadow. The sticker
border is white on white, so in most places it can't be told apart from the
background by color. Instead we:

1. Find the artwork: everything inside its black outline.
2. Rebuild the sticker as the artwork grown outward by the measured border
   width. That border is flat white in the original, so this matches it.
3. Paint the border pure white, which drops the gray shadow (the site adds
   its own with CSS).

Pixels of the artwork itself are never changed. With --part bear or
--part wordmark, only that part's artwork is kept and the sticker is rebuilt
around it, so the crop never slices through the border.

Needs ImageMagick (`convert`) for the round-brush dilation.

Usage:
  python3 -I scripts/brand/process-logo.py <input.png> <output.png>
      [--part full|bear|wordmark] [--max 1200]
"""
import argparse
import subprocess
import tempfile
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

BORDER_PX = 37  # measured on the 2048 px masters
MIN_SHAPE_PX = 1000  # ignore specks smaller than this


def flood_from_edges(passable: np.ndarray) -> np.ndarray:
    """Pixels reachable from the image edges through `passable` pixels."""
    h, w = passable.shape
    seen = np.zeros((h, w), dtype=bool)
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            if passable[y, x] and not seen[y, x]:
                seen[y, x] = True
                q.append((y, x))
    for y in range(h):
        for x in (0, w - 1):
            if passable[y, x] and not seen[y, x]:
                seen[y, x] = True
                q.append((y, x))
    while q:
        y, x = q.popleft()
        for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= ny < h and 0 <= nx < w and passable[ny, nx] and not seen[ny, nx]:
                seen[ny, nx] = True
                q.append((ny, nx))
    return seen


def shapes(mask: np.ndarray) -> list[np.ndarray]:
    """Split a mask into connected shapes, largest first, dropping specks."""
    h, w = mask.shape
    label = np.zeros((h, w), dtype=np.int32)
    found = []
    n = 0
    for y0, x0 in zip(*np.nonzero(mask)):
        if label[y0, x0]:
            continue
        n += 1
        label[y0, x0] = n
        q = deque([(y0, x0)])
        count = 0
        while q:
            y, x = q.popleft()
            count += 1
            for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
                if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not label[ny, nx]:
                    label[ny, nx] = n
                    q.append((ny, nx))
        found.append((count, n))
    found.sort(reverse=True)
    return [label == n for count, n in found if count >= MIN_SHAPE_PX]


def dilate(mask: np.ndarray, radius: int) -> np.ndarray:
    """Grow a mask outward by `radius` px with a round brush (ImageMagick)."""
    with tempfile.TemporaryDirectory() as tmp:
        src, dst = Path(tmp, "in.png"), Path(tmp, "out.png")
        Image.fromarray(np.where(mask, 255, 0).astype(np.uint8), "L").save(src)
        subprocess.run(
            ["convert", str(src), "-morphology", "Dilate", f"Disk:{radius}", str(dst)],
            check=True,
        )
        return np.array(Image.open(dst).convert("L")) > 127


def cut_out(src: str, dst: str, part: str, max_side: int | None) -> None:
    rgb = np.array(Image.open(src).convert("RGB"))
    px = rgb.astype(np.int16)
    lum = px.mean(axis=2)
    tint = px.max(axis=2) - px.min(axis=2)

    # 1. The artwork: dark outline or colored fill, with enclosed holes filled.
    art = (lum < 150) | (tint > 25)
    silhouette = ~flood_from_edges(~art)

    # The bear is the largest connected shape; the lettering is the rest.
    parts = shapes(silhouette)
    bear = parts[0]
    lettering = np.zeros_like(bear)
    for p in parts[1:]:
        lettering |= p
    chosen = {"full": silhouette, "bear": bear, "wordmark": lettering}[part]
    other = silhouette & ~chosen

    # 2. Sticker = chosen artwork grown by the border width, gaps filled.
    keep = dilate(chosen, BORDER_PX)
    keep = ~flood_from_edges(~keep)

    # 3. Paint the sticker ring white (this also covers any piece of the other
    #    part that falls inside the new border).
    near_chosen = dilate(chosen, 4)
    ring = keep & ~near_chosen
    if other.any():
        ring |= keep & dilate(other, 4) & ~chosen
    rgb[ring] = 255

    # Smooth the outer edge only; the inside stays fully opaque.
    alpha = Image.fromarray(np.where(keep, 255, 0).astype(np.uint8), "L")
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.9))
    a = np.array(alpha)
    a[keep & ~dilate(~keep, 2)] = 255

    out = Image.fromarray(np.dstack([rgb, a]), "RGBA")
    out = out.crop(out.getbbox())
    if max_side and max(out.size) > max_side:
        scale = max_side / max(out.size)
        out = out.resize((round(out.width * scale), round(out.height * scale)), Image.LANCZOS)
    out.save(dst, optimize=True)
    print(f"{dst}: {out.size[0]}x{out.size[1]}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("dst")
    ap.add_argument("--part", choices=["full", "bear", "wordmark"], default="full")
    ap.add_argument("--max", type=int, default=None, help="longest side in px")
    args = ap.parse_args()
    cut_out(args.src, args.dst, args.part, args.max)
