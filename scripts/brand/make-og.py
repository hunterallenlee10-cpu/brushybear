"""Interim 1200x630 social-sharing image from the brand files (no AI).

Usage: python3 -I scripts/brand/make-og.py <out.png>
Replaced by the Higgsfield version in build Phase 7.
"""
import sys

from PIL import Image, ImageDraw

CREAM = (0xF4, 0xED, 0xE1, 255)
FOREST = (0x1F, 0x4D, 0x3A, 255)
GOLD = (0xE9, 0xA9, 0x3B, 255)

W, H = 1200, 630
og = Image.new("RGBA", (W, H), CREAM)
d = ImageDraw.Draw(og)
# A forest "paint swipe" across the lower third, with a gold edge.
d.rounded_rectangle([-40, 430, W + 40, H + 60], radius=60, fill=FOREST)
d.rounded_rectangle([-40, 418, W + 40, 436], radius=9, fill=GOLD)

word = Image.open("src/assets/brand/logo-wordmark.png")
word = word.resize((640, round(640 * word.height / word.width)), Image.LANCZOS)
og.alpha_composite(word, (60, 140))

bear = Image.open("src/assets/brand/bear-brush.png")
bear = bear.resize((round(560 * bear.width / bear.height), 560), Image.LANCZOS)
og.alpha_composite(bear, (W - bear.width - 50, 40))

og.convert("RGB").save(sys.argv[1], optimize=True)
print("wrote", sys.argv[1])
