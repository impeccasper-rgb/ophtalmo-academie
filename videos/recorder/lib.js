const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const DIR = __dirname, BASE = 'http://127.0.0.1:8766/index.html';
const FONT_CSS = `
@font-face{font-family:"Lexend";font-weight:100 900;font-display:block;src:url(https://fonts.gstatic.com/x/lexend-latin-wght-normal.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:"Lexend";font-weight:100 900;font-display:block;src:url(https://fonts.gstatic.com/x/lexend-latin-ext-wght-normal.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:"Atkinson Hyperlegible Next";font-weight:200 800;font-display:block;src:url(https://fonts.gstatic.com/x/atkinson-hyperlegible-next-latin-wght-normal.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:"Atkinson Hyperlegible Next";font-weight:200 800;font-display:block;src:url(https://fonts.gstatic.com/x/atkinson-hyperlegible-next-latin-ext-wght-normal.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+A720-A7FF}
@font-face{font-family:"Atkinson Hyperlegible Mono";font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/x/atkinson-hyperlegible-mono-latin-400-normal.woff2) format("woff2")}
@font-face{font-family:"Atkinson Hyperlegible Mono";font-weight:600;font-display:block;src:url(https://fonts.gstatic.com/x/atkinson-hyperlegible-mono-latin-600-normal.woff2) format("woff2")}`;

const FORMATS = {
  '9x16': { css: { width: 432, height: 640 }, dsf: 2.5, canvas: [1080, 1920], at: [0, 320] },
  '16x9': { css: { width: 1280, height: 720 }, dsf: 1.2, canvas: [1920, 1080], at: [192, 36] },
};

async function route(ctx) {
  await ctx.route('**/*', async r => {
    const u = r.request().url();
    if (u.startsWith('http://127.0.0.1:8766/')) return r.continue();
    if (u.startsWith('https://fonts.googleapis.com/css2')) return r.fulfill({ status: 200, contentType: 'text/css', body: FONT_CSS });
    if (u.startsWith('https://fonts.gstatic.com/x/')) return r.fulfill({ status: 200, contentType: 'font/woff2', path: path.join(DIR, path.basename(u)) });
    return r.abort();
  });
}

const INIT = () => {
  addEventListener('DOMContentLoaded', () => {
    const st = document.createElement('style');
    st.textContent = 'html{scrollbar-width:none}::-webkit-scrollbar{display:none}' +
      '.rec-dot{position:fixed;left:0;top:0;z-index:2147483647;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;background:rgba(255,255,255,.28);border:3px solid rgba(255,255,255,.95);box-shadow:0 0 0 2px rgba(5,14,29,.5),0 6px 18px rgba(0,0,0,.28);pointer-events:none;transition:transform .16s ease,opacity .22s ease,background-color .16s;transform:scale(.5);opacity:0}' +
      '.rec-dot.on{opacity:1;transform:scale(1)}.rec-dot.press{transform:scale(.8);background:rgba(182,240,78,.55)}';
    document.head.appendChild(st);
    const d = document.createElement('div'); d.className = 'rec-dot'; document.body.appendChild(d);
    window.__dot = {
      move(x, y) { d.style.left = x + 'px'; d.style.top = y + 'px'; },
      show(x, y) { this.move(x, y); d.classList.add('on'); },
      press() { d.classList.add('press'); }, release() { d.classList.remove('press'); }, hide() { d.classList.remove('on', 'press'); }
    };
  });
};

async function session(opts) {
  const F = FORMATS[opts.fmt];
  const b = await chromium.launch({ args: ['--force-device-scale-factor=' + F.dsf] });
  const ctx = await b.newContext({ viewport: F.css, deviceScaleFactor: F.dsf, colorScheme: opts.scheme || 'light', locale: opts.lang === 'en' ? 'en-CA' : 'fr-CA', hasTouch: false });
  await route(ctx);
  if (opts.storage) await ctx.addInitScript(s => { try { if (!localStorage.getItem('__seeded')) { for (const k in s) localStorage.setItem(k, s[k]); localStorage.setItem('__seeded', '1'); } } catch (e) {} }, opts.storage);
  await ctx.addInitScript(INIT);
  const page = await ctx.newPage();
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  const out = path.join(DIR, 'rec', opts.name); fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });
  const frames = [], pending = []; let cdp = null, t0 = 0, n = 0;
  const cues = [];
  const api = {
    page, F, errs, out,
    async goto(hash) { await page.goto(BASE + '?lang=' + opts.lang + '#' + hash); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(600); },
    async start() {
      cdp = await ctx.newCDPSession(page);
      cdp.on('Page.screencastFrame', async f => {
        cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {});
        const file = 'f' + String(n++).padStart(5, '0') + '.jpg';
        frames.push({ file, t: f.metadata.timestamp });
        pending.push(fs.promises.writeFile(path.join(out, file), Buffer.from(f.data, 'base64')));
      });
      await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 85, maxWidth: F.css.width * F.dsf, maxHeight: F.css.height * F.dsf, everyNthFrame: 1 });
      // force an initial frame
      await page.evaluate(() => { document.body.style.outline = '0px solid transparent'; });
      await page.waitForTimeout(300);
      t0 = Date.now() / 1000;
      if (opts.guard !== false) { const tick = async () => { if (!api._stop) { await api.guard(); setTimeout(tick, 120); } }; tick(); }
    },
    now() { return Date.now() / 1000 - t0; },
    rasters: new Set(),
    async guard() { // every visible raster image or CSS background-image in the viewport (frame-source check)
      const seen = await page.evaluate(() => { const out = []; const vis = el => { const r = el.getBoundingClientRect(); return r.width > 8 && r.height > 8 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth && getComputedStyle(el).visibility !== 'hidden' && el.offsetParent !== null; };
        document.querySelectorAll('img').forEach(i => { if (vis(i) && !/\.svg(\?|$)|^data:image\/svg/.test(i.currentSrc || i.src)) out.push((i.currentSrc || i.src).split('/').pop()); });
        document.querySelectorAll('#view *').forEach(e => { const bg = getComputedStyle(e).backgroundImage; if (bg && bg.includes('url(') && !bg.includes('svg') && vis(e)) out.push('bg:' + bg.slice(0, 80)); });
        return out; }).catch(() => []);
      seen.forEach(x => api.rasters.add(x));
    },
    cue(fr, en) { cues.push({ t: api.now(), text: opts.lang === 'en' ? en : fr }); },
    mark(name) { cues.push({ t: api.now(), mark: name }); },
    wait(ms) { return page.waitForTimeout(ms); },
    async center(sel) { const bb = await page.locator(sel).first().boundingBox(); return [bb.x + bb.width / 2, bb.y + bb.height / 2]; },
    async tap(sel, pre = 420) {
      const vis = await page.evaluate(sel => { const r = document.querySelector(sel).getBoundingClientRect(); return r.top >= 70 && r.bottom <= innerHeight - 70; }, sel);
      if (!vis) await api.scrollTo(sel, 'center', 0, 800);
      const [x, y] = await api.center(sel);
      await page.evaluate(([x, y]) => __dot.show(x, y), [x, y]); await page.waitForTimeout(pre);
      await page.evaluate(() => __dot.press()); await page.mouse.click(x, y); await page.waitForTimeout(140);
      await page.evaluate(() => { __dot.release(); setTimeout(() => __dot.hide(), 180); });
    },
    async drag(from, to, steps = 30, dur = 900) {
      await page.evaluate(([x, y]) => __dot.show(x, y), from); await page.waitForTimeout(350);
      await page.mouse.move(from[0], from[1]); await page.evaluate(() => __dot.press()); await page.mouse.down();
      for (let i = 1; i <= steps; i++) { const k = i / steps, e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; const x = from[0] + (to[0] - from[0]) * e, y = from[1] + (to[1] - from[1]) * e; await page.mouse.move(x, y); await page.evaluate(([x, y]) => __dot.move(x, y), [x, y]); await page.waitForTimeout(dur / steps); }
      await page.mouse.up(); await page.evaluate(() => { __dot.release(); setTimeout(() => __dot.hide(), 200); });
    },
    async scrollTo(sel, block = 'start', offset = 0, wait = 900) {
      await page.evaluate(([sel, block, offset]) => { const el = document.querySelector(sel); if (!el) return; const r = el.getBoundingClientRect(); let y = window.scrollY + r.top - offset; if (block === 'center') y -= (innerHeight - r.height) / 2; if (block === 'end') y -= innerHeight - r.height; window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' }); }, [sel, block, offset]);
      await page.waitForTimeout(wait);
    },
    async jump(sel, offset = 0) { await page.evaluate(([sel, offset]) => { const el = document.querySelector(sel); if (el) window.scrollTo(0, window.scrollY + el.getBoundingClientRect().top - offset); }, [sel, offset]); await page.waitForTimeout(250); },
    async stop() {
      const tEnd = Date.now() / 1000; api._stop = true; await page.waitForTimeout(150);
      await cdp.send('Page.stopScreencast'); await Promise.all(pending);
      // concat list: frames relative to t0, last held to tEnd
      const fr = frames.filter(f => f.t <= tEnd).sort((a, b) => a.t - b.t);
      let startIdx = 0; for (let i = 0; i < fr.length; i++) if (fr[i].t <= t0) startIdx = i;
      const use = fr.slice(startIdx); const lines = [];
      for (let i = 0; i < use.length; i++) {
        const a = Math.max(use[i].t, t0), b2 = i + 1 < use.length ? use[i + 1].t : tEnd;
        const d = Math.max(0.001, b2 - a); lines.push(`file '${use[i].file}'`, `duration ${d.toFixed(4)}`);
      }
      lines.push(`file '${use[use.length - 1].file}'`);
      fs.writeFileSync(path.join(out, 'list.txt'), lines.join('\n') + '\n');
      const meta = { name: opts.name, lang: opts.lang, fmt: opts.fmt, duration: tEnd - t0, cues, frames: use.length, errs, rasters: [...api.rasters] };
      fs.writeFileSync(path.join(out, 'meta.json'), JSON.stringify(meta, null, 1));
      await b.close();
      return meta;
    }
  };
  return api;
}
module.exports = { session, FORMATS };
