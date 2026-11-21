#!/usr/bin/env python3
"""Generate the iOS app icon (single 1024 px AppIcon) and the launch/splash images.

Source of truth, in order:
  1. brand/icon-1024.png      (brand agent; any size >= 1024, square; alpha is flattened)
  2. a generated PLACEHOLDER  (cobalt square + white glyph of the current logo) -> replace before App Store submission

Splash: solid #0A2547 (brand night) with brand/splash-logo.png centred if present, else the brand mark drawn from
brand/mark.svg's geometry (brand/HANDOFF.md section 6).
Colours follow src/styles.css (--paper light #f4f6fa / dark #0b1220, --cobalt #2346d4).
Run: python3 ios/scripts/make_assets.py   (needs Pillow; also run in CI before xcodebuild)
"""
import json, os, sys
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
XC = os.path.join(ROOT, 'ios', 'App', 'App', 'Assets.xcassets')
BRAND = os.path.join(ROOT, 'brand')
COBALT, PAPER_L, PAPER_D, COBALT_D = (0x23, 0x46, 0xd4), (0xf4, 0xf6, 0xfa), (0x0b, 0x12, 0x20), (0x7d, 0x97, 0xff)
# glyph of the current logo (viewBox 0 0 34 34, tile = rect 1..33)
GLYPH = [(9, 9), (25, 9), (25, 13), (13, 13), (13, 15), (23, 15), (23, 19), (13, 19), (13, 21), (25, 21), (25, 25), (9, 25)]


def glyph_tile(size, bg, fg, radius=0):
    """Logo tile: bg square (optionally rounded) with the white glyph, supersampled for smooth edges."""
    ss = 4
    S = size * ss
    im = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    if radius:
        d.rounded_rectangle([0, 0, S - 1, S - 1], radius=radius * ss, fill=bg + (255,))
    else:
        d.rectangle([0, 0, S, S], fill=bg + (255,))
    k = S / 32.0
    d.polygon([((x - 1) * k, (y - 1) * k) for x, y in GLYPH], fill=fg + (255,))
    return im.resize((size, size), Image.LANCZOS)


def rounded(im, r):
    """Apply an iOS-like rounded mask (supersampled) to a square RGBA image."""
    ss = 4
    m = Image.new('L', (im.width * ss, im.height * ss), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, m.width - 1, m.height - 1], radius=int(r * ss), fill=255)
    m = m.resize(im.size, Image.LANCZOS)
    out = im.copy()
    out.putalpha(Image.composite(im.split()[3], Image.new('L', im.size, 0), m))
    return out


def write_icon():
    out_dir = os.path.join(XC, 'AppIcon.appiconset')
    src = os.path.join(BRAND, 'icon-1024.png')
    if os.path.exists(src):
        im = Image.open(src).convert('RGBA')
        if im.width != im.height:
            sys.exit('brand/icon-1024.png must be square (got %dx%d)' % im.size)
        im = im.resize((1024, 1024), Image.LANCZOS)
        flat = Image.new('RGB', im.size, PAPER_L)
        flat.paste(im, mask=im.split()[3])  # App Store icons must not have alpha
        origin = 'brand/icon-1024.png'
    else:
        flat = glyph_tile(1024, COBALT, (255, 255, 255)).convert('RGB')
        origin = 'PLACEHOLDER (generated)'
    for f in os.listdir(out_dir):
        if f.endswith('.png'):
            os.remove(os.path.join(out_dir, f))
    flat.save(os.path.join(out_dir, 'AppIcon-1024.png'), optimize=True)
    json.dump({'images': [{'filename': 'AppIcon-1024.png', 'idiom': 'universal', 'platform': 'ios', 'size': '1024x1024'}],
               'info': {'author': 'xcode', 'version': 1}}, open(os.path.join(out_dir, 'Contents.json'), 'w'), indent=2)
    return origin


NIGHT = (0x0A, 0x25, 0x47)  # brand --night-2 (BRAND.md / HANDOFF.md: splash = solid #0A2547 + centred mark)


def mark_on(canvas, box, ss=3):
    """Draw brand/mark.svg's content (iris, pupil, slit-lamp crescent, fluorescein sign) into `canvas`.
    `box` = side in px of the mark's 1024-unit square, centred on the canvas. The mark's own background is #0A2547,
    identical to the splash background, so only the content is drawn."""
    S = box * ss
    layer = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    k = S / 1024.0
    def circle(cx, cy, r, fill):
        d.ellipse([(cx - r) * k, (cy - r) * k, (cx + r) * k, (cy + r) * k], fill=fill)
    circle(512, 512, 282, (0x2F, 0x4E, 0xE6, 255))
    circle(512, 512, 116, (0x05, 0x0E, 0x1D, 255))
    circle(660, 364, 64, (0xB6, 0xF0, 0x4E, 255))
    # crescent: SVG arc M336 236 A330 330 0 0 0 336 788, stroke 34, round caps, opacity .85
    arc = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    a = ImageDraw.Draw(arc)
    cx, cy, r, w = 516.9, 512, 330, 34
    R = r + w / 2  # Pillow grows the stroke inwards from the bounding box: centre it on r like SVG
    a.arc([(cx - R) * k, (cy - R) * k, (cx + R) * k, (cy + R) * k], start=123.2, end=236.8, fill=(0xEA, 0xF3, 0xFF, 217), width=int(w * k))
    for ex, ey in ((336, 236), (336, 788)):
        a.ellipse([(ex - w / 2) * k, (ey - w / 2) * k, (ex + w / 2) * k, (ey + w / 2) * k], fill=(0xEA, 0xF3, 0xFF, 217))
    layer = Image.alpha_composite(layer, arc).resize((box, box), Image.LANCZOS)
    canvas.paste(layer, ((canvas.width - box) // 2, (canvas.height - box) // 2), layer)


def write_splash():
    """2732 px square, aspect-filled by LaunchScreen.storyboard and the SplashScreen plugin: the centre is always visible."""
    out_dir = os.path.join(XC, 'Splash.imageset')
    logo_src = os.path.join(BRAND, 'splash-logo.png')
    size = 2732
    canvas = Image.new('RGB', (size, size), NIGHT)
    if os.path.exists(logo_src):
        logo = Image.open(logo_src).convert('RGBA')
        logo.thumbnail((460, 460), Image.LANCZOS)
        canvas.paste(logo, ((size - logo.width) // 2, (size - logo.height) // 2), logo)
        origin = 'brand/splash-logo.png on #0A2547'
    else:
        mark_on(canvas, 720)  # mark content ~ 440 px: ~35 % of a phone's width, ~22 % of an iPad's short side
        origin = 'brand mark (mark.svg geometry) on #0A2547'
    for f in os.listdir(out_dir):
        if f.endswith('.png'):
            os.remove(os.path.join(out_dir, f))
    canvas.save(os.path.join(out_dir, 'splash.png'), optimize=True)
    json.dump({'images': [
        {'idiom': 'universal', 'filename': 'splash.png', 'scale': '1x'},
        {'idiom': 'universal', 'scale': '2x'},
        {'idiom': 'universal', 'scale': '3x'}],
        'info': {'author': 'xcode', 'version': 1}}, open(os.path.join(out_dir, 'Contents.json'), 'w'), indent=2)
    return origin


if __name__ == '__main__':
    print('AppIcon:', write_icon())
    print('Splash :', write_splash())
