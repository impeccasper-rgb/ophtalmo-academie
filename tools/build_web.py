#!/usr/bin/env python3
"""Build the standalone bilingual static site into site/ (GitHub Pages, Capacitor webDir).

  python3 tools/build_web.py            # → site/index.html, app.css, js/*.js, img/, sw.js, 404.html, manifest, icons
Env (optional): SITE_URL=https://user.github.io/repo/  (absolute Open Graph URLs)
                SITE_BASE=/repo/                        (404.html redirect base; guessed on *.github.io otherwise)
"""
import ast, glob, hashlib, json, os, re, shutil, struct, zlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC, DATA, DATA_EN, BRAND = (os.path.join(ROOT, d) for d in ('src', 'data', 'data-en', 'brand'))
import sys as _sys
COMMERCIAL_SAFE = '--commercial-safe' in _sys.argv  # local study build only, written to site-commercial-safe/ (never deployed)
OUT = os.path.join(ROOT, 'site-commercial-safe' if COMMERCIAL_SAFE else 'site')
SITE_URL = os.environ.get('SITE_URL', '').rstrip('/') + ('/' if os.environ.get('SITE_URL') else '')
SITE_BASE = os.environ.get('SITE_BASE', '')

RESTRICTED_IDS = ['OPH-%03d' % i for i in list(range(12, 16)) + list(range(114, 131)) + list(range(187, 192)) + list(range(200, 210)) + [211, 212, 213, 215, 216, 227, 292, 293]]
# Content-Security-Policy (meta): everything is local; the only third parties are GoatCounter (off until GOATCOUNTER_CODE is set
# in src/privacy.js) and the Google Fonts fallback (used only when fonts/ is missing).
CSP_POLICY = ("default-src 'self'; script-src 'self' 'unsafe-inline' https://gc.zgo.at; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
              "font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob: https://*.goatcounter.com; connect-src 'self' https://*.goatcounter.com; "
              "media-src 'self' data: blob:; worker-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'")
RIGHTS_FILTER_JS = r"""(function () {
  var G = window, O = G.OPH || {}, R = {}; __IDS__.forEach(function (id) { R[id] = 1; });
  var KEYS = /^(id|photo|img|image|normal|patho|figure|src|pic)$/;
  function bad(o) {
    if (typeof o === 'string') return !!R[o];
    if (!o || typeof o !== 'object' || Array.isArray(o)) return false;
    for (var k in o) { var v = o[k];
      if (typeof v === 'string' && R[v] && KEYS.test(k)) return true;
      if (v && typeof v === 'object' && !Array.isArray(v) && /^(img|image|figure|photo|media)$/.test(k) && bad(v)) return true; }
    return false;
  }
  function walk(x, d) {
    if (d > 9 || !x || typeof x !== 'object') return;
    if (Array.isArray(x)) { for (var i = x.length - 1; i >= 0; i--) { if (bad(x[i])) x.splice(i, 1); else walk(x[i], d + 1); } return; }
    for (var k in x) if (k !== 'catalog') walk(x[k], d + 1);
  }
  G.OPH_RESTRICTED = R;
  [O, G.OPH_EN].forEach(function (root) { if (root) walk(root, 0); });
  if (O.invMedia) { Object.keys(O.invMedia).forEach(function (k) { var m = O.invMedia[k]; if (m && (R[m.photo] || m.restricted)) delete O.invMedia[k]; }); }
  if (O.imageCasesMedia) { var cm = O.imageCasesMedia; Object.keys(cm).forEach(function (k) { var m = cm[k]; if (m && (R[m.photo] || m.restricted)) delete cm[k]; });
    ['imageCases', 'openCases'].forEach(function (n) { if (O[n]) O[n] = O[n].filter(function (c) { return !c.media || cm[c.media] || (O.invMedia && O.invMedia[c.media]); }); }); }
  if (O.invPractice && O.invMedia) { O.invPractice = O.invPractice.filter(function (p) { return !p.media || O.invMedia[p.media]; });
    var ok = {}; O.invPractice.forEach(function (p) { ok[p.id] = 1; });
    (O.inv || []).forEach(function (e) { if (e.practice) e.practice = e.practice.filter(function (id) { return ok[id]; }); }); }
})();
"""
SRC_ORDER = ['core', 'i18n', 'figures-a', 'figures-b', 'sims', 'quiz', 'learn', 'investigations', 'motion', 'tree', 'figures-mech', 'figures-retine', 'privacy', 'views', 'web']
CSS_ORDER = ['styles', 'investigations', 'tree', 'web']
THEME_LIGHT, THEME_DARK, COBALT, BRAND_BG = '#1f2cff', '#1a23d9', '#1f2cff', '#1F2CFF'
TITLE = {'fr': 'Ocelle · ophtalmologie pour externes et R1', 'en': 'Ocelle · ophthalmology for clerks and R1s'}
DESC = {'fr': 'Apprends à voir le signe qui compte : cornée, glaucome et examens, en images, cas et jeux. Gratuit, sans pub.',
        'en': 'Learn to see the sign that matters: cornea, glaucoma and eye investigations through images, cases and games. Free, no ads.'}


def read(p):
    return open(p, encoding='utf-8').read()


def data_order():
    """Reuse the data list of tools/build.py so both builds stay in sync."""
    tree = ast.parse(read(os.path.join(ROOT, 'tools', 'build.py')))
    for node in ast.walk(tree):
        if isinstance(node, ast.Assign) and any(getattr(t, 'id', None) == 'data_order' for t in node.targets):
            return ast.literal_eval(node.value)
    raise SystemExit('data_order not found in tools/build.py')


def catalog():
    """Same slim catalog as tools/build.py (kept in memory: data/ is not written here)."""
    cat = json.load(open(os.path.join(ROOT, 'imgsrc', 'catalog.json'), encoding='utf-8'))
    slim = [dict({k: e.get(k) for k in ('id', 'title', 'caption', 'page_url', 'module', 'kind', 'tw', 'th')}, src='imgsrc') for e in cat if e['id'] not in ('OPH-185', 'OPH-186')]
    p2 = os.path.join(ROOT, 'imgsrc2', 'catalog2.json')
    if os.path.exists(p2):
        for e in json.load(open(p2, encoding='utf-8')):
            tw = 440; th = round(e['fh'] * tw / e['fw'])
            d = {'id': e['id'], 'title': e['title'], 'caption': e['caption'], 'page_url': e['page_url'], 'module': e['module'], 'kind': 'clinical', 'tw': tw, 'th': th, 'dossier': e.get('dossier', ''), 'src': 'imgsrc2'}
            if not e.get('cc'): d['cc'] = False
            slim.append(d)
    slim += catalog3(ROOT)
    for e in slim: e['lc'] = licence_class(e)
    return slim


NC_RE = re.compile(r'(^|[^A-Z])NC([^A-Z]|$)|NON-?COMMERCIAL|NONCOMMERCIAL', re.I)
OPEN_RE = re.compile(r'^(CC0|PUBLIC DOMAIN|PD|CC BY(-SA)? \d(\.\d)?)', re.I)


def licence_class(e):
    """Licence class of a catalog image: 'nc' (EyeRounds CC BY-NC-ND or any NC licence) or 'open' (CC0, public domain, CC BY, CC BY-SA).
    Original SVG schematics are class 'own' (inline in src/figures-*.js and data/*media*.js, never in the catalog)."""
    if e.get('src') in ('imgsrc', 'imgsrc2'): return 'nc'  # EyeRounds / University of Iowa (docs/RIGHTS.md)
    lic = str(e.get('license') or '').strip()
    if lic and not NC_RE.search(lic) and OPEN_RE.match(lic): return 'open'
    return 'nc'  # unknown or NC: treat as non-commercial (safe side)


def jpeg_size(path):
    """(w, h) of a JPEG without Pillow; None if unreadable."""
    try:
        with open(path, 'rb') as f:
            if f.read(2) != b'\xff\xd8': return None
            while True:
                b = f.read(1)
                while b and b != b'\xff': b = f.read(1)
                while b == b'\xff': b = f.read(1)
                if not b: return None
                m = b[0]
                if m in (0xD8, 0x01) or 0xD0 <= m <= 0xD7: continue
                ln = int.from_bytes(f.read(2), 'big')
                if 0xC0 <= m <= 0xCF and m not in (0xC4, 0xC8, 0xCC):
                    d = f.read(5); return int.from_bytes(d[3:5], 'big'), int.from_bytes(d[1:3], 'big')
                f.seek(ln - 2, 1)
    except Exception:
        return None


def catalog3(root):
    """imgsrc3/catalog3.json: openly licensed images (Wikimedia / PMC). Skipped when absent."""
    p = os.path.join(root, 'imgsrc3', 'catalog3.json')
    if not os.path.exists(p): return []
    out = []
    for e in json.load(open(p, encoding='utf-8')):
        if not e.get('id') or not os.path.exists(os.path.join(root, 'imgsrc3', 'web', e['id'] + '.jpg')): continue
        w, h = e.get('w') or e.get('width'), e.get('h') or e.get('height')
        if not (w and h): w, h = jpeg_size(os.path.join(root, 'imgsrc3', 'web', e['id'] + '.jpg')) or (440, 330)
        tw = 440; th = round(h * tw / w)
        # title/caption may be bilingual {fr, en}: i18n.js picks the language at load
        d = {'id': e['id'], 'title': e.get('title', ''), 'caption': e.get('caption', ''), 'page_url': e.get('page_url') or e.get('source_url', ''), 'module': e.get('module', ''), 'kind': e.get('kind', 'clinical'),
             'tw': tw, 'th': th, 'license': e.get('license', ''), 'license_url': e.get('license_url', ''), 'author': e.get('author', ''), 'source_url': e.get('source_url', ''),
             'share_alike': bool(e.get('share_alike')) or '-SA' in e.get('license', '').upper().replace(' ', '-'), 'exam': e.get('exam', ''), 'src': 'imgsrc3'}
        out.append(d)
    return out


# ---------- placeholder icons (pure Python PNG, no Pillow needed in CI) ----------
def png(size, rounded, path):
    bg = tuple(int(COBALT[i:i + 2], 16) for i in (1, 3, 5))
    s = size / 34.0
    pad = 0 if rounded else 0  # full-bleed icons: the E is scaled down around the centre instead
    k = 1.0 if rounded else 0.72
    rects = [(9, 9, 25, 13), (9, 9, 13, 25), (13, 15, 23, 19), (9, 21, 25, 25)]
    rects = [tuple(17 + (v - 17) * k for v in r) for r in rects]
    rows = []
    r_px, x0, x1 = 8 * s, 1 * s, 33 * s
    for y in range(size):
        row = bytearray([0])
        for x in range(size):
            cx, cy = x + .5, y + .5
            inside = True
            if rounded:
                if cx < x0 or cx > x1 or cy < x0 or cy > x1: inside = False
                else:
                    dx = max(x0 + r_px - cx, 0, cx - (x1 - r_px)); dy = max(x0 + r_px - cy, 0, cy - (x1 - r_px))
                    inside = dx * dx + dy * dy <= r_px * r_px
            if not inside:
                row += bytes((0, 0, 0, 0)); continue
            ux, uy = cx / s, cy / s
            white = any(a <= ux < c and b <= uy < d for a, b, c, d in rects)
            row += bytes((255, 255, 255, 255)) if white else bytes(bg + (255,))
        rows.append(bytes(row))
    raw = zlib.compress(b''.join(rows), 9)
    def chunk(t, d): return struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    open(path, 'wb').write(b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0)) + chunk(b'IDAT', raw) + chunk(b'IEND', b''))


LOGO_SVG = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><rect x="1" y="1" width="32" height="32" rx="8" fill="%s"/>'
            '<path d="M9 9h16v4H13v2h10v4H13v2h12v4H9z" fill="#fff"/></svg>' % COBALT)


def icons():
    """Use brand/ assets when present, else generate placeholders. Returns dict of published names."""
    os.makedirs(os.path.join(OUT, 'icons'), exist_ok=True)
    out = {}
    def first(*names):
        for n in names:
            p = os.path.join(BRAND, n)
            if os.path.exists(p): return p
        return None
    svg = first('mark.svg', 'icon.svg', 'favicon.svg')
    out['brand'] = bool(first('icon-512.png'))
    shutil.copy2(svg, os.path.join(OUT, 'icons', 'icon.svg')) if svg else open(os.path.join(OUT, 'icons', 'icon.svg'), 'w').write(LOGO_SVG)
    out['svg'] = 'icons/icon.svg'
    for name, size, rounded, cands in [('icon-192.png', 192, True, ('icon-192.png',)), ('icon-512.png', 512, True, ('icon-512.png', 'icon.png')),
                                       ('maskable-512.png', 512, False, ('maskable-512.png', 'icon-maskable.png', 'icon-512.png')), ('apple-touch-icon.png', 180, False, ('apple-touch-icon-180.png', 'apple-touch-icon.png')), ('favicon-32.png', 32, True, ('favicon-32.png',))]:
        src = first(*cands)
        dst = os.path.join(OUT, 'icons', name)
        if src: shutil.copy2(src, dst)
        else: png(size, rounded, dst)
        out[name] = 'icons/' + name
    og = first('og.png', 'og-image.png', 'og.jpg', 'social.png')
    if og:
        ext = os.path.splitext(og)[1]; shutil.copy2(og, os.path.join(OUT, 'og' + ext)); out['og'] = 'og' + ext
    else:
        out['og'] = out['icon-512.png']
    return out


LATIN = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
LATIN_EXT = 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF'


def self_hosted_fonts():
    """fonts/*.woff2 (Fontsource variable builds, SIL OFL 1.1) → site/fonts + @font-face rules. Returns (css, published paths)."""
    src = os.path.join(ROOT, 'fonts')
    if not os.path.isdir(src): return '', []
    dst = os.path.join(OUT, 'fonts'); os.makedirs(dst, exist_ok=True)
    rules, pub = [], []
    for fam, slug, w in [('Bricolage Grotesque', 'bricolage-grotesque', '200 800'), ('Atkinson Hyperlegible Next', 'atkinson-hyperlegible-next', '200 800'), ('Atkinson Hyperlegible Mono', 'atkinson-hyperlegible-mono', '200 800')]:
        for sub, rng in [('latin-ext', LATIN_EXT), ('latin', LATIN)]:
            for style in ('normal', 'italic'):
                fn = '%s-%s-wght-%s.woff2' % (slug, sub, style)
                if not os.path.exists(os.path.join(src, fn)): continue
                shutil.copy2(os.path.join(src, fn), os.path.join(dst, fn)); pub.append('fonts/' + fn)
                rules.append("@font-face{font-family:'%s';font-style:%s;font-display:swap;font-weight:%s;src:url(fonts/%s) format('woff2-variations'),url(fonts/%s) format('woff2');unicode-range:%s}" % (fam, style, w, fn, fn, rng))
    for lic in glob.glob(os.path.join(src, 'OFL-*.txt')): shutil.copy2(lic, os.path.join(dst, os.path.basename(lic)))
    return '/* self-hosted fonts (SIL Open Font License 1.1, see fonts/OFL-*.txt) */\n' + '\n'.join(rules) + '\n', pub


def js(s):
    return re.sub(r'</(script)', r'<\\/\1', s, flags=re.I)


def main():
    if os.path.isdir(OUT):
        for n in os.listdir(OUT):  # keep img/ to avoid recopying 27 MB each build
            p = os.path.join(OUT, n)
            if n != 'img': shutil.rmtree(p) if os.path.isdir(p) else os.remove(p)
    os.makedirs(OUT, exist_ok=True)
    slim = catalog()
    # Rights (docs/RIGHTS.md): images without a CC licence stay out of the public site/app until EyeRounds grants written permission
    restricted = {e['id'] for e in slim if e.get('cc') is False} | set(RESTRICTED_IDS)
    if COMMERCIAL_SAFE: restricted |= {e['id'] for e in slim if e['lc'] == 'nc'}  # --commercial-safe: NEVER deploy (docs/COMMERCIAL-SAFE.md)
    slim = [e for e in slim if e['id'] not in restricted]

    # ---- JS: data FR → data-en overlays → src (PLATFORM.md order); one file each (keeps 'use strict' per file and isolates load errors) ----
    jsdir = os.path.join(OUT, 'js'); os.makedirs(jsdir, exist_ok=True)
    files, missing = [], []
    def emit(name, text):
        h = hashlib.sha1(text.encode()).hexdigest()[:10]
        open(os.path.join(jsdir, name), 'w', encoding='utf-8').write(text)
        files.append('js/%s?v=%s' % (name, h))
    emit('catalog.js', "var G = (typeof window !== 'undefined') ? window : globalThis;\nG.OPH = G.OPH || {};\nG.OPH.catalog = " +
         json.dumps([{k: v for k, v in e.items() if k != 'src'} for e in slim], ensure_ascii=False) + ";\n")
    for name in data_order():
        if name == 'catalog': continue
        p = os.path.join(DATA, name + '.js')
        if os.path.exists(p): emit('d-' + name + '.js', read(p))
        else: missing.append('data/' + name)
    en_files = sorted(glob.glob(os.path.join(DATA_EN, '*.js')))
    for p in en_files: emit('en-' + os.path.basename(p), read(p))
    emit('rights-filter.js', RIGHTS_FILTER_JS.replace('__IDS__', json.dumps(sorted(restricted))))
    for name in SRC_ORDER:
        p = os.path.join(SRC, name + '.js')
        if os.path.exists(p): emit(name + '.js', read(p))
        else: missing.append('src/' + name)
    font_css, font_files = self_hosted_fonts()
    css = font_css + '\n'.join('/* src/%s.css */\n' % n + read(os.path.join(SRC, n + '.css')) for n in CSS_ORDER if os.path.exists(os.path.join(SRC, n + '.css')))
    hcss = hashlib.sha1(css.encode()).hexdigest()[:10]
    hjs = hashlib.sha1(''.join(files).encode()).hexdigest()[:10]
    open(os.path.join(OUT, 'app.css'), 'w', encoding='utf-8').write(css)

    ic = icons()
    abs_ = lambda p: (SITE_URL + p) if SITE_URL else p
    # Google Fonts only when fonts/ is missing (self-hosted fonts work offline and inside the iOS app)
    fonts = '' if font_files else ('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' + '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Atkinson+Hyperlegible+Next:wght@400;500;600;700&family=Atkinson+Hyperlegible+Mono:wght@400;600&display=swap">')
    preload = ''.join('<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' % f for f in font_files if f.endswith('-latin-wght-normal.woff2') and 'mono' not in f)
    CSP = '<meta http-equiv="Content-Security-Policy" content="%s">' % CSP_POLICY
    esc = lambda s: s.replace('&', '&amp;').replace('"', '&quot;').replace('<', '&lt;')
    head = f'''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
{CSP}
<title>{esc(TITLE['fr'])}</title>
<meta name="description" content="{esc(DESC['fr'])}" data-en="{esc(DESC['en'])}">
<meta name="theme-color" content="{THEME_LIGHT}" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="{THEME_DARK}" media="(prefers-color-scheme: dark)">
<meta name="color-scheme" content="light dark">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Ocelle">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="format-detection" content="telephone=no">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_CA">
<meta property="og:locale:alternate" content="en_CA">
<meta property="og:site_name" content="Ocelle">
<meta property="og:title" content="{esc(TITLE['fr'])}">
<meta property="og:description" content="{esc(DESC['fr'])}">
<meta property="og:image" content="{abs_(ic['og'])}">
{('<meta property="og:url" content="' + SITE_URL + '">') if SITE_URL else ''}
<meta name="twitter:card" content="summary">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="{ic['svg']}" type="image/svg+xml">
<link rel="icon" href="{ic['favicon-32.png']}" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="{ic['apple-touch-icon.png']}">
{preload}{fonts}
<link rel="stylesheet" href="app.css?v={hcss}">
<style>:root{{color-scheme:light dark}}body{{margin:0}}img{{max-width:100%}}[hidden]{{display:none!important}}</style>
</head>
<body>
'''
    body = '''<a class="skip-link" href="#view" data-act="skip">Aller au contenu</a>
<div class="shell">
<aside class="rail" id="rail" aria-label="Navigation"></aside>
<div style="min-width:0">
<header class="topbar"><button type="button" class="btn sm" data-act="menu" aria-label="Ouvrir le menu" aria-controls="drawer">Menu</button><a class="brand" href="#accueil"><svg class="logo" viewBox="0 0 1024 1024" aria-hidden="true"><rect width="1024" height="1024" rx="236" fill="#1F2CFF"/><path d="M302.4 302.8C314.8 296.5 351.2 274.4 377.2 264.8C403.2 255.3 431.3 248.9 458.3 245.5C485.4 242.2 513.4 242.1 539.7 244.8C566.0 247.6 592.3 253.6 616.1 262.0C639.9 270.4 662.7 282.0 682.7 295.3C702.7 308.6 720.6 324.7 735.9 341.7C751.1 358.7 763.8 377.8 774.2 397.3C784.6 416.8 792.5 437.6 798.2 458.8C803.8 480.0 807.4 502.1 808.0 524.5C808.6 546.9 807.2 570.3 801.9 593.1C796.5 615.9 788.3 639.8 775.9 661.2C763.5 682.6 746.9 704.3 727.5 721.8C708.0 739.3 683.9 755.1 659.2 766.0C634.6 776.9 606.2 784.1 579.6 787.2C553.0 790.2 524.9 788.5 499.7 784.4C474.5 780.4 450.2 772.0 428.2 762.9C406.3 753.8 386.5 741.9 368.0 729.8C349.5 717.6 332.8 704.3 317.2 690.0C301.5 675.7 286.7 660.7 273.9 644.1C261.0 627.5 248.8 609.6 240.1 590.2C231.3 570.8 224.2 549.4 221.6 527.9C219.1 506.3 219.8 482.8 224.9 460.8C230.0 438.9 239.7 416.1 252.4 396.2C265.1 376.4 282.5 357.3 301.3 341.5C320.1 325.8 342.6 312.2 365.1 301.7C387.7 291.2 424.8 282.5 436.7 278.7" fill="none" stroke="#D8FF3A" stroke-width="76" stroke-linecap="round" stroke-linejoin="round"/><circle cx="530" cy="500" r="96" fill="#D8FF3A"/></svg><span><b>Ocelle</b><span>Ophtalmo · externat et R1</span></span></a></header>
<main class="main" id="view" tabindex="-1"><div class="page"><p class="muted">Chargement… / Loading…</p></div></main>
</div></div>
<nav class="tabbar" id="tabbar" aria-label="Navigation rapide"></nav>
<div class="drawer" id="drawer" hidden><div class="scrim" data-act="close-drawer"></div><div class="panel" role="dialog" aria-label="Menu"></div></div>
<div class="lightbox" id="lightbox" hidden role="dialog" aria-label="Image agrandie"></div>
<noscript><p>Cette classe interactive a besoin de JavaScript. / This interactive course needs JavaScript.</p></noscript>
'''
    html = head + body + ''.join('<script src="%s"></script>\n' % f for f in files) + '</body>\n</html>\n'
    open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write(html)

    # ---- manifest ----
    man = {'name': 'Ocelle', 'short_name': 'Ocelle', 'description': DESC['fr'], 'lang': 'fr-CA',
           'start_url': './', 'scope': './', 'display': 'standalone', 'background_color': BRAND_BG, 'theme_color': BRAND_BG, 'categories': ['education', 'medical'],
           'icons': ([{'src': ic['icon-192.png'], 'sizes': '192x192', 'type': 'image/png', 'purpose': 'any maskable'}, {'src': ic['icon-512.png'], 'sizes': '512x512', 'type': 'image/png', 'purpose': 'any maskable'}] if ic.get('brand') else
                     [{'src': ic['icon-192.png'], 'sizes': '192x192', 'type': 'image/png'}, {'src': ic['icon-512.png'], 'sizes': '512x512', 'type': 'image/png'},
                      {'src': ic['maskable-512.png'], 'sizes': '512x512', 'type': 'image/png', 'purpose': 'maskable'}]) + [{'src': ic['svg'], 'sizes': 'any', 'type': 'image/svg+xml'}]}
    json.dump(man, open(os.path.join(OUT, 'manifest.webmanifest'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

    # ---- images ----
    img = os.path.join(OUT, 'img'); os.makedirs(img, exist_ok=True)
    want, nimg, absent = set(), 0, []
    for e in slim:
        fn = e['id'] + '.jpg'; want.add(fn)
        src = next((p for p in (os.path.join(ROOT, 'dist', 'img', fn), os.path.join(ROOT, e['src'], 'web', fn)) if os.path.exists(p)), None)
        if not src: absent.append(e['id']); continue
        dst = os.path.join(img, fn)
        if not os.path.exists(dst) or os.path.getmtime(dst) < os.path.getmtime(src) or os.path.getsize(dst) != os.path.getsize(src): shutil.copy2(src, dst)
        nimg += 1
    for extra in glob.glob(os.path.join(ROOT, 'dist', 'img', '*')):  # any other supporting image the artifact build ships (e.g. inv media)
        b = os.path.basename(extra)
        if b not in want and os.path.splitext(b)[0] not in restricted and os.path.isfile(extra): shutil.copy2(extra, os.path.join(img, b)); want.add(b)
    for n in os.listdir(img):
        if n not in want: os.remove(os.path.join(img, n))

    # ---- service worker ----
    version = hashlib.sha1((hjs + hcss).encode()).hexdigest()[:10]
    sw = '''/* offline cache: network-first for pages, cache-first for images, fonts and versioned assets */
const V = '%s', CORE = 'oph-core-' + V, IMG = 'oph-img-v1', FONT = 'oph-font-v1';
const PRE = ['./', 'index.html', 'app.css?v=%s', 'manifest.webmanifest', '%s', '%s'].concat(%s);
self.addEventListener('install', e => { e.waitUntil(caches.open(CORE).then(c => c.addAll(PRE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('oph-core-') && k !== CORE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
const cacheFirst = (req, name) => caches.open(name).then(c => c.match(req).then(hit => hit || fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()); return r; })));
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.hostname === 'gc.zgo.at' || u.hostname.endsWith('.goatcounter.com')) return; // audience counter: never cached, fails silently offline
  if (u.origin === location.origin) {
    if (req.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('index.html')) {
      e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CORE).then(c => c.put('index.html', cp)); return r; }).catch(() => caches.match('index.html', { ignoreSearch: true })));
    } else if (u.pathname.includes('/img/') || u.pathname.includes('/icons/')) e.respondWith(cacheFirst(req, IMG));
    else if (u.pathname.includes('/fonts/')) e.respondWith(cacheFirst(req, FONT));
    else e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok) { const cp = r.clone(); caches.open(CORE).then(c => c.put(req, cp)); } return r; })));
  } else if (u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com') e.respondWith(cacheFirst(req, FONT));
});
''' % (version, hcss, ic['svg'], ic['icon-192.png'], json.dumps(files + [f for f in font_files if '-latin-wght-normal' in f]))
    open(os.path.join(OUT, 'sw.js'), 'w', encoding='utf-8').write(sw)

    # ---- 404: send unknown paths back to the SPA (/repo/cas-b1 → /repo/#cas-b1) ----
    base = json.dumps(SITE_BASE)
    open(os.path.join(OUT, '404.html'), 'w', encoding='utf-8').write('''<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Redirection…</title><meta name="robots" content="noindex"><script>
(function () {
  var base = %s, p = location.pathname;
  if (!base) { var seg = p.split('/').filter(Boolean); base = /\\.github\\.io$/.test(location.hostname) && seg.length > 1 ? '/' + seg[0] + '/' : (/\\.github\\.io$/.test(location.hostname) && seg.length === 1 && !/^(cas|fiche|case)/.test(seg[0]) ? '/' + seg[0] + '/' : '/'); }
  var rest = p.indexOf(base) === 0 ? p.slice(base.length) : p.replace(/^\\//, '');
  rest = rest.replace(/\\/+$/, '').replace(/^index\\.html$/, '');
  location.replace(base + location.search + (rest ? '#' + rest : location.hash));
})();
</script></head><body><p><a href="./">Retour à l’accueil / Back to home</a></p></body></html>
''' % base)
    open(os.path.join(OUT, '.nojekyll'), 'w').write('')
    open(os.path.join(OUT, 'robots.txt'), 'w').write('User-agent: *\nAllow: /\n')

    size = sum(os.path.getsize(os.path.join(jsdir, f)) for f in os.listdir(jsdir))
    imgbytes = sum(os.path.getsize(os.path.join(img, f)) for f in os.listdir(img))
    print(os.path.basename(OUT) + '/ js %d files %.0f KB · app.css %.0f KB · images %d (%.1f MB) · data-en %d file(s) · missing: %s%s' % (
        len(files), size / 1024, os.path.getsize(os.path.join(OUT, 'app.css')) / 1024, nimg, imgbytes / 1e6, len(en_files), ', '.join(missing) or 'none',
        (' · images absent: ' + ', '.join(absent[:8])) if absent else ''))


def commercial_safe_report():
    """docs/COMMERCIAL-SAFE.md: images per licence class and what a build without 'nc' would lose (nothing is removed from the site)."""
    import subprocess, datetime
    slim = catalog()
    restricted = sorted({e['id'] for e in slim if e.get('cc') is False} | set(RESTRICTED_IDS))
    payload = json.dumps({'catalog': [{'id': e['id'], 'lc': e['lc']} for e in slim], 'restricted': restricted, 'data_order': data_order()})
    r = subprocess.run(['node', os.path.join(ROOT, 'tools', 'licence_classes.js')], input=payload, capture_output=True, text=True, check=True)
    if r.stderr.strip(): print(r.stderr.strip())
    d = json.loads(r.stdout)
    K = {'fiche': 'Fiches', 'photo-set': 'Pages du module A et séries de photos', 'capsule': 'Capsules', 'quiz': 'QCM avec photo', 'case': 'Cas cliniques',
         'image-case': 'Cas en images', 'inv-practice': 'Investigations (items de pratique)', 'screen': 'Écrans fixes'}
    lose, norep = d['lose'], set(d['noRepl'])
    L = ['# Build « commercial-safe » — ce qui disparaîtrait sans les images NC', '',
         'Généré par `python3 tools/build_web.py --commercial-safe-report` le %s. **Rien n’est retiré du site en ligne** : ce rapport sert seulement à chiffrer un éventuel passage payant (politique : site gratuit avec le plus d’images possible, EyeRounds CC BY-NC-ND compris ; retrait des images NC seulement si le site devient payant).' % datetime.date.today().isoformat(), '',
         '## Classes de licence', '',
         '| Classe | Définition | Images au catalogue publié | Images réellement utilisées |', '|---|---|---|---|',
         '| `nc` | EyeRounds CC BY-NC-ND 3.0, ou toute licence NC | %d | %d |' % (d['catalog'].get('nc', 0), d['count'].get('nc', 0)),
         '| `open` | CC0, domaine public, CC BY, CC BY-SA (imgsrc3) | %d | %d |' % (d['catalog'].get('open', 0), d['count'].get('open', 0)),
         '| `own` | Schéma SVG original (figures des fiches, mécanismes dessinés, arbres, médias SVG des investigations et des cas) | — | %d médias SVG + les schémas, mécanismes et arbres des %d fiches |' % (d['svgMedia'], d['fiches']), '',
         'Où est la classe : champ `lc` de chaque entrée de `OPH.catalog` (calculé par `licence_class()` dans `tools/build_web.py` : `imgsrc`/`imgsrc2` = EyeRounds → `nc` ; `imgsrc3` → `open` si la licence est CC0/PD/CC BY/CC BY-SA sans NC, sinon `nc`). Les médias `kind: \'svg\'` et les figures dessinées sont `own`.', '',
         '## Retirer les images NC à peu de frais', '',
         '`python3 tools/build_web.py --commercial-safe` construit dans `site-commercial-safe/` (ignoré par git, **jamais déployé**) en ajoutant toutes les images `nc` à la liste exclue du filtre de droits existant (`rights-filter.js`) : les photos disparaissent des carrousels, et les QCM, cas et items qui en dépendent sont retirés automatiquement.', '',
         '## Ce qui perdrait au moins une image (%d éléments, dont %d sans remplaçant)' % (len(lose), len(norep)), '',
         '« Sans remplaçant » = il ne resterait ni image `open` ni schéma `own` : l’élément disparaît (QCM, cas, item) ou l’écran n’a plus d’image.', '']
    for k in K:
        us = [u for u in lose if u['kind'] == k]
        if not us: continue
        nr = sum(1 for u in us if (u['kind'] + ':' + u['id']) in norep)
        L += ['### %s — %d touché(s), %d sans remplaçant' % (K[k], len(us), nr), '', '| Élément | Titre | Images `nc` perdues | Reste `open` | Schéma `own` | Remplaçant ? |', '|---|---|---|---|---|---|']
        for u in us:
            t = u['title'].replace('|', '/').replace('\n', ' ')
            L.append('| `%s` | %s | %s | %d | %s | %s |' % (u['id'], t, ', '.join(u['nc']), len(u['open']), 'oui' if u['own'] else 'non', '**non**' if (u['kind'] + ':' + u['id']) in norep else 'oui'))
        L.append('')
        if k == 'fiche': L += ['Les fiches gardent leurs schémas, leur mécanisme dessiné et leur arbre ; l’écran **Voir** retombe sur le schéma comparatif, mais l’exercice « touche le signe » (photos + zones `voirHotspots`) disparaît. Pour le garder : une photo `open` ou un schéma avec zones par fiche.', '']
        if k == 'photo-set': L += ['« Sans remplaçant » ici = plus aucune photo dans le carrousel ; le texte et les éventuels schémas de la page restent.', '']
    L += ['## Sans remplaçant, en bref', '', ', '.join('`%s`' % x for x in sorted(norep)) or 'aucun', '']
    out = os.path.join(ROOT, 'docs', 'COMMERCIAL-SAFE.md'); open(out, 'w', encoding='utf-8').write('\n'.join(L))
    print('docs/COMMERCIAL-SAFE.md · nc %d / open %d used · %d elements lose an image · %d without replacement' % (d['count'].get('nc', 0), d['count'].get('open', 0), len(lose), len(norep)))


if __name__ == '__main__':
    import sys
    if '--commercial-safe-report' in sys.argv: commercial_safe_report()
    else: main()
