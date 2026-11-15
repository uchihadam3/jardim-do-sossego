#!/usr/bin/env python3
"""Desenha o ícone do jogo (flor sobre fundo verde) em PNG e ICO."""
import math, pathlib
from PIL import Image, ImageDraw, ImageFilter
out = pathlib.Path(__file__).resolve().parent.parent / "instalador"; out.mkdir(exist_ok=True)
S = 1024
img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
bg = Image.new("RGBA", (S, S)); px = bg.load()
for y in range(S):
    t = y / S
    for x in range(S): px[x, y] = (int(150 - 60 * t), int(200 - 52 * t), int(120 - 44 * t), 255)
mask = Image.new("L", (S, S), 0); ImageDraw.Draw(mask).rounded_rectangle([24, 24, S - 24, S - 24], radius=230, fill=255)
img.paste(bg, (0, 0), mask)
d = ImageDraw.Draw(img)
cx, cy = S / 2, S * 0.47
# stem + leaves
d.line([(cx, cy + 120), (cx - 20, S - 120)], fill=(52, 110, 60, 255), width=44)
for sx in (-1, 1):
    leaf = Image.new("RGBA", (S, S), (0, 0, 0, 0)); ImageDraw.Draw(leaf).ellipse([cx - 60, S - 330, cx + 200, S - 210], fill=(70, 140, 74, 255))
    leaf = leaf.rotate(sx * 28, center=(cx - 10, S - 190)); leaf = leaf if sx > 0 else leaf.transpose(Image.FLIP_LEFT_RIGHT)
    img.alpha_composite(leaf)
# soft shadow under the petals
sh = Image.new("RGBA", (S, S), (0, 0, 0, 0)); ImageDraw.Draw(sh).ellipse([cx - 300, cy - 270, cx + 300, cy + 330], fill=(30, 70, 40, 90))
img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(30)))
d = ImageDraw.Draw(img)
for ring, (r, pr, col) in enumerate([(190, 150, (240, 122, 164, 255)), (120, 120, (248, 160, 192, 255))]):
    n = 6 if ring == 0 else 5
    for i in range(n):
        a = i / n * math.tau - math.pi / 2 + ring * 0.5
        x, y = cx + math.cos(a) * r, cy + math.sin(a) * r
        d.ellipse([x - pr, y - pr, x + pr, y + pr], fill=col)
d.ellipse([cx - 105, cy - 105, cx + 105, cy + 105], fill=(246, 190, 60, 255))
d.ellipse([cx - 72, cy - 78, cx + 60, cy + 54], fill=(255, 220, 110, 255))
big = img.resize((512, 512), Image.LANCZOS)
big.save(out / "icone.png")
big.resize((256, 256), Image.LANCZOS).save(out / "icone.ico", sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
big.resize((64, 64), Image.LANCZOS).save(out / "icone64.png")
print("icone ok")
