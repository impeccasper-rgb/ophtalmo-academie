// Scenes recorded on the real UI (site/ served on 127.0.0.1:8766). Captions: s.cue(fr, en). Marks: s.mark(name) for posters/loops.
const { session } = require('./lib');
const phone = fmt => fmt === '9x16';
const TOP = P => P ? 60 : 16;

/* #cas-vedette — Observe → Réponds → Révèle on the featured CRAO fundus (EyeRounds: site/App Store only) */
async function cas(opts) {
  const s = await session(opts); const P = phone(opts.fmt), top = TOP(P);
  await s.goto('accueil');
  await s.page.evaluate(() => { location.hash = 'cas-vedette'; }); await s.wait(1200);
  await s.jump('.inv-run, [data-feat]', top);
  await s.start();
  s.cue('Tu vois le signe ?', 'Can you spot the sign?');
  s.mark('observe');
  await s.wait(2800);                                    // freeze: look at the fundus
  s.cue('Observe. Réponds. Révèle.', 'Observe. Answer. Reveal.');
  await s.scrollTo('.opts', P ? 'center' : 'center', 0, 900);
  await s.wait(1100);
  const ans = await s.page.evaluate(() => FEATURED.item.answer);
  s.mark('answer');
  await s.tap('.opt[data-k="' + ans + '"]', 600);
  await s.wait(200);
  s.cue('Le signe décisif s’allume :\\Nla tache rouge cerise', 'The decisive sign lights up:\\Nthe cherry-red spot');
  await s.scrollTo('.inv-media', 'start', top, 800);
  s.mark('reveal');
  await s.wait(3600);
  s.cue('Puis pourquoi chaque autre choix est faux', 'Then why each other choice is wrong');
  await s.scrollTo('.feedback', P ? 'start' : 'center', top + 10, 1100);
  await s.wait(3000);
  return s.stop();
}

/* A-scan simulator (own schematic) */
async function ascan(opts) {
  const s = await session(opts); const P = phone(opts.fmt), top = TOP(P);
  await s.goto('inv-ascan');
  await s.jump('#inv-tool', top);
  await s.start();
  s.cue('Mesure une longueur axiale', 'Measure an axial length');
  await s.wait(1500);
  const svgPos = async mm => s.page.evaluate(mm => { const svg = document.querySelector('[data-svg] svg'); const r = svg.getBoundingClientRect(), vb = svg.viewBox.baseVal; return [r.left + (34 + 18 * mm - vb.x) * r.width / vb.width, r.top + r.height * 0.55]; }, mm);
  s.cue('Du pic cornéen au pic rétinien', 'From the corneal spike to the retinal spike');
  await s.drag(await svgPos(1.5), await svgPos(0), 24, 700);
  await s.wait(300);
  await s.drag(await svgPos(12), await svgPos(23.5), 40, 1500);
  await s.wait(500);
  await s.tap('[data-a="check"]');
  s.mark('ok1');
  await s.wait(P ? 400 : 1800);
  if (P) { await s.scrollTo('[data-out]', 'center', 0, 900); await s.wait(1700); }
  s.cue('Œil long ? Myopie axiale.', 'Long eye? Axial myopia.');
  await s.tap('[data-eye="long"]');
  await s.wait(600);
  const c2 = await s.page.evaluate(() => +document.querySelector('[data-rng="c2"]').value);
  if (P) await s.jump('#inv-tool', top);
  await s.drag(await svgPos(c2), await svgPos(26.5), 30, 1100);
  await s.wait(400);
  await s.tap('[data-a="check"]');
  s.mark('ok2');
  await s.wait(P ? 400 : 2400);
  if (P) { await s.scrollTo('[data-out]', 'center', 0, 900); await s.wait(2400); }
  return s.stop();
}

/* Image of the day + streak, then « Voir : touche le signe » on the same HSV dendrite (EyeRounds OPH-059: site/App Store only) */
async function daily(opts) {
  const iso = d => { const p = n => (n < 10 ? '0' : '') + n; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); };
  const today = new Date(), days = {}; for (let i = 1; i <= 6; i++) { const d = new Date(today); d.setDate(d.getDate() - i); days[iso(d)] = 1; }
  const y = new Date(today); y.setDate(y.getDate() - 1);
  const progress = { streak: { n: 6, best: 6, last: iso(y), freeze: {}, days, t: Date.now() } };
  const s = await session(Object.assign({ storage: { 'oph-r1-progress-v1': JSON.stringify(progress) } }, opts)); const P = phone(opts.fmt), top = TOP(P);
  const pin = () => s.page.evaluate(id => { const cards = SRS.all().filter(c => c.deck === 'images' && c.img); const c = cards.find(c => c.id === id) || cards.find(c => c.img === 'OPH-059') || cards[0]; Daily.today = () => ({ kind: 'card', id: c.id, card: c }); }, 'i:c-herpes:OPH-059');
  await s.goto('accueil'); await pin(); await s.page.evaluate(() => Router.refresh());
  await s.wait(500);
  await s.jump('.daily-card', P ? 130 : 160);
  await s.start();
  s.cue('Une image par jour', 'One image a day');
  await s.wait(1600);
  await s.tap('.daily-card');
  await s.wait(700); await pin(); await s.page.evaluate(() => Router.refresh()); await s.wait(300);
  s.cue('Regarde, devine, retourne la carte', 'Look, guess, flip the card');
  await s.scrollTo('[data-flip]', 'center', 0, 800);
  await s.wait(1400);
  await s.tap('[data-flip]');
  await s.wait(600);
  await s.scrollTo('.fc-rate', 'center', 0, 800);
  await s.wait(900);
  await s.tap('.fc-rate [data-g="2"]');
  await s.wait(300);
  s.cue('Ta série continue', 'Keep your streak going');
  await s.scrollTo('[data-dailyend]', 'center', 0, 900);
  s.mark('streak');
  await s.wait(2200);
  // Voir: touch the sign
  await s.page.evaluate(() => { location.hash = 'c-herpes/voir'; }); await s.wait(900);
  await s.jump('[data-slide="0"] .voir-media', top);
  s.cue('Dans chaque fiche : touche le signe', 'In every topic: tap the sign');
  await s.wait(1900);
  const hs = await s.page.evaluate(() => OPH.voirHotspots['c-herpes']); const h = Array.isArray(hs) ? hs[0] : hs;
  const bb = await s.page.locator('[data-slide="0"] [data-act="voir-tap"] img').boundingBox();
  const x = bb.x + bb.width * h.x / 100, yy = bb.y + bb.height * h.y / 100;
  await s.page.evaluate(([x, y]) => __dot.show(x, y), [x, yy]); await s.wait(450);
  await s.page.evaluate(() => __dot.press()); await s.page.mouse.click(x, yy); await s.wait(140);
  await s.page.evaluate(() => { __dot.release(); setTimeout(() => __dot.hide(), 180); });
  s.mark('voir');
  await s.wait(1500);
  s.cue('Puis nomme-le', 'Then name it');
  await s.scrollTo('[data-slide="0"] [data-act="voir-opt"][data-ok="1"]', 'center', 0, 800);
  await s.wait(700);
  await s.tap('[data-slide="0"] [data-act="voir-opt"][data-ok="1"]', 500);
  s.cue('Bien vu !', 'Nice catch!');
  await s.wait(300);
  await s.scrollTo('[data-slide="0"] .voir-media', 'start', top, 700);
  s.mark('bienvu');
  await s.wait(2600);
  return s.stop();
}

/* Social: own SVG schematics only — HSV dendrite schematic reveal, drawn mechanism stepped, decision tree (#c-herpes/comprendre → /decider) */
async function social(opts) {
  const s = await session(opts); const P = phone(opts.fmt), top = TOP(P);
  await s.goto('c-herpes/comprendre');
  await s.jump('.fstep-nav, [data-cmpreveal]', 0);
  await s.jump('#view .page', 0);
  await s.page.evaluate(() => window.scrollTo(0, 0));
  const cmpTop = await s.page.evaluate(() => { const b = document.querySelector('[data-cmpreveal]'); const fig = b && b.closest('.stack, .sec, div'); return 0; });
  await s.jump('.cmp, .compare, [data-cmpreveal]', P ? 250 : 330);
  await s.start();
  s.cue('Tu vois le signe ?', 'Can you spot the sign?');
  s.mark('observe');
  await s.wait(2600);                                    // freeze: normal vs pathological schematic
  s.mark('answer');
  await s.tap('[data-cmpreveal]', 450);
  s.cue('Une dendrite à bulbes terminaux', 'A dendrite with terminal bulbs');
  s.mark('reveal');
  await s.wait(3000);
  s.cue('Comprends le mécanisme,\\Nétape par étape', 'Understand the mechanism,\\Nstep by step');
  await s.scrollTo('.mech-stage', 'start', top + 4, 1000);
  await s.wait(900);
  for (let i = 0; i < 4; i++) { await s.tap('button[data-mech-next]', 380); await s.wait(i === 3 ? 1400 : 1000); }
  s.mark('mech');
  // Décider
  await s.page.evaluate(() => { location.hash = 'c-herpes/decider'; }); await s.wait(800);
  await s.jump('[data-tmode]', top + 4);
  s.cue('Puis décide :\\Nl’arbre décisionnel', 'Then decide:\\Nthe decision tree');
  await s.wait(1400);
  const ans = await s.page.evaluate(() => { const v = D.fiche('c-herpes').cat.vignette; const a = v && v.answers; return Array.isArray(a) ? a : a ? Object.keys(a).sort((x, y) => x - y).map(k => a[k]) : []; });
  for (let i = 0; i < Math.min(ans.length, 3); i++) {
    const sel = await s.page.evaluate(k => { const bs = [...document.querySelectorAll('[data-tyn="' + k + '"]')].filter(b => !b.disabled && b.offsetParent); const b = bs[bs.length - 1]; if (!b) return null; b.setAttribute('data-rec', 'tyn'); document.querySelectorAll('[data-rec]').forEach(x => { if (x !== b) x.removeAttribute('data-rec'); }); return '[data-rec="tyn"]'; }, ans[i]);
    if (!sel) break;
    await s.tap(sel, 450); await s.wait(1300);
  }
  s.mark('tree');
  await s.wait(1500);
  return s.stop();
}
module.exports = { cas, ascan, daily, social };
