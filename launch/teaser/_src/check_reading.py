#!/usr/bin/env python3
"""Reading-time check for every teaser reel (FR + EN).
Rule 1: each text stays fully visible, after its entrance, for >= max(2.5 s, 1.5 s + 0.35 s per word).
Rule 2: two texts the viewer must read ('card') never compete: a card may only enter once the previous card
        has had its full reading time (labels such as stickers, eyebrows and prompts accompany a card and are exempt from rule 2 only).
Rule 3: the reel length is a whole number of beats at 120 BPM (multiple of 0.5 s).
Source: videos/cuts.json (written by render.py from the timeline registry H.reg); --live reads the timeline directly from harness.html.
Exit code 1 if any reel fails."""
import json, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
def need(w): return max(2.5, 1.5 + 0.35 * w)
def load_live():
    sys.path.insert(0, HERE); import render
    from playwright.sync_api import sync_playwright
    os.environ.setdefault('PORT', '8799'); render.PORT = int(os.environ['PORT'])
    srv = render.serve(); out = {}
    with sync_playwright() as p:
        b = p.chromium.launch(args=['--no-sandbox'])
        for stem, r in render.REELS:
            for lang in ('fr', 'en'):
                pg = render.open_page(b, r, lang); o = pg.evaluate('window.OUT'); pg.close()
                out['ocelle-teaser-%s-%s' % (stem, lang)] = {'T': o['T'], 'cuts': o['cuts'], 'texts': o['texts']}
        b.close()
    srv.shutdown(); return out
def main():
    reels = load_live() if '--live' in sys.argv else json.load(open(os.path.join(HERE, '..', 'videos', 'cuts.json')))['reels']
    fails = 0
    for name in sorted(reels):
        R = reels[name]; T = R['T']; bad = []
        if abs(T * 2 - round(T * 2)) > 1e-6: bad.append('length %.2f s is not on the 0.5-s grid' % T)
        texts = R.get('texts') or []
        if not texts: bad.append('no text timings recorded')
        for t in texts:
            vis, req = t['end'] - t['start'], need(t['words'])
            if vis + 1e-6 < req: bad.append('rule 1: "%s" (%d words) visible %.2f s < %.2f s' % (t['text'][:48], t['words'], vis, req))
        cards = sorted([t for t in texts if t['kind'] == 'card'], key=lambda t: t['start'])
        for a, c in zip(cards, cards[1:]):
            if c['start'] + 1e-6 < a['start'] + need(a['words']):
                bad.append('rule 2: "%s" enters at %.2f s while "%s" still needs reading until %.2f s' % (c['text'][:30], c['start'], a['text'][:30], a['start'] + need(a['words'])))
        tight = min([(t['end'] - t['start']) - need(t['words']) for t in texts] or [0])
        print('%-4s %-52s %5.1f s  %2d texts  min margin %+.2f s%s' % ('OK' if not bad else 'FAIL', name, T, len(texts), tight, '' if not bad else ''))
        for x in bad: print('      - ' + x)
        fails += bool(bad)
    print('\n%d reels checked, %d failing' % (len(reels), fails))
    sys.exit(1 if fails else 0)
main()
