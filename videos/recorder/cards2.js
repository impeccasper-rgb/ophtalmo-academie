// v2 « Fluorescéine »: backgrounds (cobalt band + logo) as PNG; end cards as short recorded animations (marker draws, sticker pops)
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');
const BR = '/home/claude/ophtalmo-academie/brand/', FO = '/home/claude/ophtalmo-academie/fonts/';
const { loopPath } = require('./loop');
const strip = s => s.replace(/<title>.*?<\/title>/, '');
const loopMark = strip(fs.readFileSync(BR + 'mark-loop.svg', 'utf8'));
const wm = strip(fs.readFileSync(BR + 'wordmark.svg', 'utf8'));
const ff = (fam, file) => `@font-face{font-family:'${fam}';font-weight:200 800;src:url(data:font/woff2;base64,${fs.readFileSync(FO + file).toString('base64')}) format('woff2')}`;
const CSS = ff('Bric', 'bricolage-grotesque-latin-wght-normal.woff2') + ff('Atk', 'atkinson-hyperlegible-next-latin-wght-normal.woff2') +
  '*{box-sizing:border-box}body{margin:0;overflow:hidden;background:#1F2CFF;color:#fff;font-family:Atk}';
const T = {
  fr: { a: 'Apprends à voir le ', s: 'signe', b: ' qui compte.', sub: 'Gratuit · sans pub · français et anglais' },
  en: { a: 'Learn to see the ', s: 'sign', b: ' that matters.', sub: 'Free · no ads · English and French' }
};
const V = { cas: { fr: ['Essaie le cas vedette', '?lang=fr#cas-vedette'], en: ['Try the featured case', '?lang=en#cas-vedette'] },
  ascan: { fr: ['Essaie le simulateur A-scan', '?lang=fr#inv-ascan'], en: ['Try the A-scan simulator', '?lang=en#inv-ascan'] },
  daily: { fr: ['Ton image du jour t’attend', '?lang=fr#image-du-jour'], en: ['Your image of the day is waiting', '?lang=en#image-du-jour'] },
  social: { fr: ['Comprends, puis décide', '?lang=fr#c-herpes/comprendre'], en: ['Understand, then decide', '?lang=en#c-herpes/comprendre'] } };
(async () => {
  const b = await chromium.launch({ args: ['--force-device-scale-factor=1'] });
  const p = await b.newPage();
  // backgrounds
  await p.setViewportSize({ width: 1080, height: 1920 });
  await p.setContent(`<style>${CSS}</style><div style="position:absolute;left:52px;top:40px;display:flex;align-items:center;gap:14px"><div style="width:70px;height:66px">${loopMark.replace(/width="96" height="90"/, 'width="70" height="66"')}</div><div style="width:190px;color:#fff">${wm.replace(/width="\d+" height="78"/, 'width="190" height="60"')}</div></div>`);
  await p.evaluate(() => document.fonts.ready); await p.screenshot({ path: path.join(__dirname, 'bg2-9x16.png') });
  await p.setViewportSize({ width: 1920, height: 1080 });
  await p.setContent(`<style>${CSS}</style><div style="position:absolute;left:184px;top:28px;width:1552px;height:880px;border-radius:16px;background:#0A0F40;box-shadow:0 12px 0 #0A0F40"></div><div style="position:absolute;left:60px;top:948px;display:flex;align-items:center;gap:12px"><div style="width:62px;height:58px">${loopMark.replace(/width="96" height="90"/, 'width="62" height="58"')}</div><div style="width:170px">${wm.replace(/width="\d+" height="78"/, 'width="170" height="53"')}</div></div>`);
  await p.screenshot({ path: path.join(__dirname, 'bg2-16x9.png') });
  // animated end cards
  for (const fmt of ['9x16', '16x9']) for (const v of Object.keys(V)) for (const lang of ['fr', 'en']) {
    const big = fmt === '9x16', w = big ? 1080 : 1920, h = big ? 1920 : 1080, t = T[lang], cta = V[v][lang];
    const mk = loopPath(230, 232, 150, 134, 7, { tilt: -.18, over: .42, drift: .12 }), wl = loopPath(150, 52, 160, 50, 11, { tilt: -.05, over: .5, drift: .08 });
    await p.setViewportSize({ width: w, height: h });
    await p.setContent(`<style>${CSS}
      .wrap{position:absolute;inset:0;display:grid;place-items:center;text-align:center}.col{display:grid;justify-items:center;gap:${big ? 30 : 20}px;padding:0 70px}
      .mk{width:${big ? 330 : 230}px;height:${big ? 330 : 230}px}.mk path{fill:none;stroke:#D8FF3A;stroke-width:26;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1;animation:d .9s cubic-bezier(.65,.05,.36,1) .15s forwards}
      .mk circle{fill:#D8FF3A;transform-box:fill-box;transform-origin:center;animation:pop .5s cubic-bezier(.34,1.56,.64,1) .95s both}
      .wm{width:${big ? 330 : 260}px;color:#fff;animation:up .5s cubic-bezier(.2,.8,.2,1) .5s both}.wm svg{width:100%;height:auto}
      h1{margin:0;font:800 ${big ? 78 : 66}px/0.98 Bric;letter-spacing:-.04em;max-width:${big ? 900 : 1300}px;text-wrap:balance;animation:up .5s cubic-bezier(.2,.8,.2,1) .7s both}
      .hl{position:relative;display:inline-block;color:#D8FF3A}.hl svg{position:absolute;left:-24px;top:-4px;width:calc(100% + 48px);height:calc(100% + 10px);overflow:visible}
      .hl path{fill:none;stroke:#D8FF3A;stroke-width:6;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1;animation:d .7s cubic-bezier(.65,.05,.36,1) 1.25s forwards}
      .sub{font:600 ${big ? 32 : 28}px Atk;color:#C9CEFF;animation:up .5s ease .9s both}
      .st{background:#D8FF3A;color:#0A0F40;font:800 ${big ? 42 : 36}px Bric;padding:16px 34px 18px;border-radius:999px;border:3px solid #0A0F40;box-shadow:0 6px 0 #0A0F40;transform:rotate(-4deg);animation:stk .6s cubic-bezier(.34,1.56,.64,1) 1.7s both}
      .url{font:700 ${big ? 30 : 28}px Atk;color:#fff;animation:up .5s ease 1.9s both}.q{font:600 ${big ? 26 : 24}px ui-monospace,monospace;color:#C9CEFF;margin-top:-10px;animation:up .5s ease 2s both}
      @keyframes d{to{stroke-dashoffset:0}}@keyframes pop{0%{opacity:0;transform:scale(.3)}60%{opacity:1;transform:scale(1.15)}100%{transform:scale(1)}}
      @keyframes up{from{opacity:0;transform:translateY(16px)}}@keyframes stk{0%{opacity:0;transform:scale(.3) rotate(-30deg)}60%{opacity:1;transform:scale(1.1) rotate(0)}100%{transform:scale(1) rotate(-4deg)}}
      </style><div class="wrap"><div class="col"><svg class="mk" viewBox="60 70 340 330"><path pathLength="1" d="${mk}"/><circle cx="240" cy="222" r="44"/></svg>
      <div class="wm">${wm}</div><h1>${t.a}<span class="hl">${t.s}<svg viewBox="0 0 300 104" preserveAspectRatio="none"><path pathLength="1" d="${wl}"/></svg></span>${t.b}</h1>
      <div class="sub">${t.sub}</div><div class="st">${cta[0]}</div><div class="url">impeccasper-rgb.github.io/ophtalmo-academie</div><div class="q">${cta[1]}</div></div></div>`);
    await p.evaluate(() => document.fonts.ready);
    // record ~3.6 s with the CDP screencast (same pipeline as the scenes)
    const out = path.join(__dirname, 'rec', `end-${v}-${lang}-${fmt}`); fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });
    await p.evaluate(() => document.getAnimations().forEach(a => { a.pause(); a.currentTime = 0; }));
    const cdp = await p.context().newCDPSession(p); const frames = [], pend = []; let n = 0;
    cdp.on('Page.screencastFrame', f => { cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {}); const file = 'f' + String(n++).padStart(5, '0') + '.jpg'; frames.push({ file, t: f.metadata.timestamp }); pend.push(fs.promises.writeFile(path.join(out, file), Buffer.from(f.data, 'base64'))); });
    await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 88, maxWidth: w, maxHeight: h });
    await p.waitForTimeout(250); const t0 = Date.now() / 1000;
    await p.evaluate(() => document.getAnimations().forEach(a => a.play()));
    await p.waitForTimeout(3600); const t1 = Date.now() / 1000; await cdp.send('Page.stopScreencast'); await Promise.all(pend); await cdp.detach();
    const fr = frames.filter(f => f.t <= t1); let si = 0; fr.forEach((f, i) => { if (f.t <= t0) si = i; }); const use = fr.slice(si), L = [];
    use.forEach((f, i) => { const a = Math.max(f.t, t0), e = i + 1 < use.length ? use[i + 1].t : t1; L.push(`file '${f.file}'`, `duration ${Math.max(.001, e - a).toFixed(4)}`); });
    L.push(`file '${use[use.length - 1].file}'`); fs.writeFileSync(path.join(out, 'list.txt'), L.join('\n') + '\n');
    console.log(fmt, v, lang, use.length);
  }
  await b.close();
})();
