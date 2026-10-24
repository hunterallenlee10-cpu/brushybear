"""Build the site icons from the bear cut-out (head and cap on a forest tile).

Usage: python3 -I scripts/brand/make-icons.py <bear-cutout.png> <out-dir>
The bear cut-out comes from process-logo.py --part bear (full resolution).
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw

FOREST = (0x1F, 0x4D, 0x3A, 255)
HEAD_BOX = (170, 10, 790, 630)  # head + cap, in the 1267x1549 bear cut-out


def tile(size: int, rounded: bool, head: Image.Image) -> Image.Image:
    im = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    bg = Image.new("RGBA", (size, size), FOREST)
    mask = Image.new("L", (size, size), 0)
    radius = int(size * 0.22) if rounded else 0
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    h = head.resize((int(size * 0.96), int(size * 0.96)), Image.LANCZOS)
    bg.alpha_composite(h, ((size - h.width) // 2, size - h.height + int(size * 0.06)))
    im.paste(bg, (0, 0), mask)
    return im


def main(src: str, out_dir: str) -> None:
    out = Path(out_dir)
    head = Image.open(src).convert("RGBA").crop(HEAD_BOX)
    tile(512, True, head).save(out / "icon.png", optimize=True)
    tile(180, False, head).convert("RGB").save(out / "apple-icon.png", optimize=True)
    ico = tile(256, True, head)
    ico.save(out / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("wrote icon.png, apple-icon.png, favicon.ico to", out)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
