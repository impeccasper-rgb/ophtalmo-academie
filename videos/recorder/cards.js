// backgrounds (with brand band) and end cards, per format and language
const { chromium } = require('playwright'); const fs = require('fs');
const BR = '/home/claude/ophtalmo-academie/brand/';
const logoD = fs.readFileSync(BR + 'logo-dark.svg', 'utf8').replace(/<title>.*?<\/title>/, '');
const icon = fs.readFileSync(BR + 'icon.svg', 'utf8').replace(/<title>.*?<\/title>/, '');
const fontCss = f => `@font-face{font-family:Lexend;font-weight:100 900;src:url(data:font/woff2;base64,${fs.readFileSync(__dirname + '/lexend-latin-wght-normal.woff2').toString('base64')})}@font-face{font-family:Atk;font-weight:200 800;src:url(data:font/woff2;base64,${fs.readFileSync(__dirname + '/atkinson-hyperlegible-next-latin-wght-normal.woff2').toString('base64')})}`;
const T = {
  fr: { tag: 'Apprends à voir le signe qui compte.', sub: 'Gratuit · sans pub · français et anglais', cta: 'Essaie le cas vedette', q: '?lang=fr#cas-vedette' },
  en: { tag: 'Learn to see the sign that matters.', sub: 'Free · no ads · English and French', cta: 'Try the featured case', q: '?lang=en#cas-vedette' }
};
const bgGrad = 'radial-gradient(120% 90% at 80% 15%, #16478A 0%, #0A2547 48%, #05101F 100%)';
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  const shot = async (w, h, html, file) => { await p.setViewportSize({ width: w, height: h }); await p.setContent(`<style>${fontCss()}*{box-sizing:border-box}body{margin:0;width:${w}px;height:${h}px;overflow:hidden;background:${bgGrad};color:#E9F4FF;font-family:Atk,sans-serif}</style>${html}`); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(150); await p.screenshot({ path: __dirname + '/' + file }); };
  // backgrounds
  await shot(1080, 1920, `<div style="position:absolute;left:56px;top:44px;height:66px">${logoD.replace(/width="432" height="96"/, 'height="66" width="297"')}</div>`, 'bg-9x16.png');
  await shot(1920, 1080, `<div style="position:absolute;left:184px;top:28px;width:1552px;height:880px;border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.55);background:#0A2547"></div><div style="position:absolute;left:64px;top:960px;height:58px">${logoD.replace(/width="432" height="96"/, 'height="58" width="261"')}</div>`, 'bg-16x9.png');
  const V = { cas: { fr: ['Essaie le cas vedette', '?lang=fr#cas-vedette'], en: ['Try the featured case', '?lang=en#cas-vedette'] },
    ascan: { fr: ['Essaie le simulateur A-scan', '?lang=fr#inv-ascan'], en: ['Try the A-scan simulator', '?lang=en#inv-ascan'] },
    daily: { fr: ['Ton image du jour t’attend', '?lang=fr#image-du-jour'], en: ['Your image of the day is waiting', '?lang=en#image-du-jour'] } };
  for (const v of Object.keys(V)) for (const lang of ['fr', 'en']) {
    const t = Object.assign({}, T[lang], { cta: V[v][lang][0], q: V[v][lang][1] });
    const card = (w, h, big) => `<div style="position:absolute;inset:0;display:grid;place-items:center;text-align:center"><div style="display:grid;justify-items:center;gap:${big ? 34 : 26}px;padding:0 70px">
      <div style="width:${big ? 300 : 220}px;height:${big ? 300 : 220}px;border-radius:${big ? 68 : 50}px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.5)">${icon.replace(/width="1024" height="1024"/, 'width="100%" height="100%"')}</div>
      <div>${logoD.replace('viewBox="0 0 432 96"', 'viewBox="118 0 312 96"').replace(/width="432" height="96"/, `height="${big ? 110 : 90}" width="${big ? 357 : 293}"`).replace(/<g clip-path[\s\S]*?<\/g><\/g>|<g transform="scale\(\.09375\)">[\s\S]*?<\/g>/, '')}</div>
      <div style="font-family:Lexend;font-weight:600;font-size:${big ? 62 : 54}px;line-height:1.15;letter-spacing:-.02em;text-wrap:balance;max-width:${big ? 900 : 1300}px">${t.tag}</div>
      <div style="font-size:${big ? 34 : 28}px;color:#CFE0F2">${t.sub}</div>
      <div style="margin-top:${big ? 26 : 10}px;display:grid;gap:12px;justify-items:center"><div style="background:#B6F04E;color:#0B1A30;font-family:Lexend;font-weight:700;font-size:${big ? 40 : 34}px;padding:18px 36px;border-radius:999px">${t.cta}</div>
      <div style="font-size:${big ? 30 : 28}px;color:#E9F4FF;font-weight:600">impeccasper-rgb.github.io/ophtalmo-academie</div><div style="font-size:${big ? 26 : 24}px;color:#9FB2D0;font-family:monospace">${t.q}</div></div></div></div>`;
    await shot(1080, 1920, card(1080, 1920, true), `end-${v}-${lang}-9x16.png`);
    await shot(1920, 1080, card(1920, 1080, false), `end-${v}-${lang}-16x9.png`);
  }
  await b.close();
})();
