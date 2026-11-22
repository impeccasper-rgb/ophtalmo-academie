#!/usr/bin/env python3
"""Contact sheet: the 5 hook frames side by side, labelled A–E (2376 px wide). Run after render.py."""
import io, os
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
HERE = os.path.dirname(os.path.abspath(__file__)); OUT = os.path.dirname(HERE); F = os.path.join(HERE, '../../../../fonts/')
def ttf(path, wght):
    t = TTFont(path); t.flavor = None
    t = instancer.instantiateVariableFont(t, {a.axisTag: (wght if a.axisTag == 'wght' else a.defaultValue) for a in t['fvar'].axes})
    b = io.BytesIO(); t.save(b); b.seek(0); return b
big = ImageFont.truetype(ttf(F + 'bricolage-grotesque-latin-wght-normal.woff2', 800), 46)
mid = ImageFont.truetype(ttf(F + 'bricolage-grotesque-latin-wght-normal.woff2', 700), 30)
sm = ImageFont.truetype(ttf(F + 'atkinson-hyperlegible-mono-latin-wght-normal.woff2', 700), 22)
names = [('A', 'a-lampe-a-fente', 'Lampe à fente'), ('B', 'b-carnet-externe', 'Carnet d’externe'), ('C', 'c-kinetic-type', 'Kinetic type'), ('D', 'd-schema-vivant', 'Schéma vivant'), ('E', 'e-quiz-show', 'Quiz show')]
w, h, g, pad, top = 440, 782, 24, 40, 140
sheet = Image.new('RGB', (pad * 2 + 5 * w + 4 * g, top + h + 100), '#060a2a'); d = ImageDraw.Draw(sheet)
d.text((pad, 36), 'Ocelle · 5 directions artistiques · image d’accroche', font=mid, fill='#ffffff')
d.text((pad, 82), 'Même contenu : crise de fermeture de l’angle (schéma original). Choisis une lettre.', font=sm, fill='#c9ceff')
for i, (L, slug, t) in enumerate(names):
    x = pad + i * (w + g)
    sheet.paste(Image.open(os.path.join(OUT, slug + '-1-hook.png')).convert('RGB').resize((w, h), Image.LANCZOS), (x, top))
    y = top + h + 20
    d.rounded_rectangle([x, y, x + 62, y + 62], radius=14, fill='#d8ff3a', outline='#0a0f40', width=3)
    bb = d.textbbox((0, 0), L, font=big); d.text((x + 31 - (bb[2] - bb[0]) / 2 - bb[0], y + 31 - (bb[3] - bb[1]) / 2 - bb[1]), L, font=big, fill='#0a0f40')
    d.text((x + 78, y + 12), t, font=mid, fill='#ffffff')
sheet.save(os.path.join(OUT, 'contact-sheet-directions.png'), optimize=True)
