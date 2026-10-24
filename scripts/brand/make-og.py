"""1200x630 social-sharing image: the hero still with the real logo on top.

Usage: python3 -I scripts/brand/make-og.py <out.png> [hero-still]  (then convert to public/og-image.jpg)
With no hero still, falls back to a flat cream/forest layout. The logo and
bear are the real brand files, never AI-redrawn text.
"""
import sys

from PIL import Image, ImageDraw, ImageFilter

W, H = 1200, 630
CREAM = (0xF4, 0xED, 0xE1, 255)
FOREST = (0x1F, 0x4D, 0x3A, 255)
GOLD = (0xE9, 0xA9, 0x3B, 255)


def cover(im: Image.Image, w: int, h: int) -> Image.Image:
    s = max(w / im.width, h / im.height)
    im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    x, y = (im.width - w) // 2, (im.height - h) // 2
    return im.crop((x, y, x + w, y + h))


def main(out: str, hero: str | None) -> None:
    if hero:
        og = cover(Image.open(hero).convert("RGBA"), W, H)
        # Soft forest wash on the left so the logo pops.
        wash = Image.new("L", (W, H), 0)
        ImageDraw.Draw(wash).rectangle([0, 0, 620, H], fill=170)
        wash = wash.filter(ImageFilter.GaussianBlur(120))
        og = Image.composite(Image.new("RGBA", (W, H), FOREST), og, wash)
    else:
        og = Image.new("RGBA", (W, H), CREAM)
        d = ImageDraw.Draw(og)
        d.rounded_rectangle([-40, 430, W + 40, H + 60], radius=60, fill=FOREST)
        d.rounded_rectangle([-40, 418, W + 40, 436], radius=9, fill=GOLD)

    word = Image.open("src/assets/brand/logo-wordmark.png")
    word = word.resize((600, round(600 * word.height / word.width)), Image.LANCZOS)
    og.alpha_composite(word, (56, (H - word.height) // 2 - 20))

    bear = Image.open("src/assets/brand/bear-wave.png" if hero else "src/assets/brand/bear-brush.png")
    bh = 330 if hero else 560
    bear = bear.resize((round(bh * bear.width / bear.height), bh), Image.LANCZOS)
    og.alpha_composite(bear, (W - bear.width - 40, H - bear.height - 24))

    og.convert("RGB").save(out, optimize=True)
    print("wrote", out)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
