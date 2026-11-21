const { session } = require('./lib');
const phone = fmt => fmt === '9x16';

async function cas(opts) {
  const social = opts.scene === 'social';
  const s = await session(opts); const P = phone(opts.fmt), top = P ? 64 : 16;
  await s.goto('accueil');
  await s.page.evaluate(h => { location.hash = h; }, social ? 'cas-images/oc-10' : 'cas-vedette'); await s.wait(1100);
  await s.start();
  s.cue('Tu vois le signe ?', 'Can you spot the sign?');
  await s.wait(1300);
  await s.scrollTo('.inv-run', 'start', top, 1000);
  s.mark('observe');
  await s.wait(2600);                                   // 3 s look at the image
  if (P) await s.scrollTo('[data-ip="ready"]', 'center', 0, 800);
  s.cue('Observe. Réponds. Révèle.', 'Observe. Answer. Reveal.');
  await s.tap('[data-ip="ready"]');
  await s.wait(500);
  if (P) await s.scrollTo('.opts', 'center', 0, 900);
  await s.wait(1300);
  const ans = await s.page.evaluate(soc => soc ? ((OPH.imageCases || []).find(x => x.id === 'oc-10') || {}).answer : FEATURED.item.answer, social);
  s.mark('answer');
  await s.tap('.opt[data-k="' + ans + '"]', 550);
  await s.wait(250);
  s.cue(social ? 'Le signe décisif s’allume :\\Nune dendrite à la fluorescéine' : 'Le signe décisif s’allume :\\Nla tache rouge cerise',
        social ? 'The decisive sign lights up:\\Na fluorescein-stained dendrite' : 'The decisive sign lights up:\\Nthe cherry-red spot');
  if (P) await s.scrollTo('.inv-media', 'start', top, 700); else await s.scrollTo('.inv-run', 'start', top, 500);
  s.mark('reveal');
  await s.wait(3800);
  s.cue('Puis pourquoi chaque autre choix est faux', 'Then why each other choice is wrong');
  await s.scrollTo(P ? '.opt.correct' : '.feedback', P ? 'start' : 'center', top + 10, 1000);
  await s.wait(P ? 1600 : 2600);
  if (P) { await s.scrollTo('.feedback', 'center', 0, 1000); await s.wait(1600); }
  return s.stop();
}

async function ascan(opts) {
  const s = await session(opts); const P = phone(opts.fmt), top = P ? 64 : 16;
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
  if (P) await s.scrollTo('[data-a="check"]', 'center', 0, 800);
  await s.tap('[data-a="check"]');
  s.mark('ok1');
  await s.wait(P ? 400 : 1800);
  if (P) { await s.scrollTo('[data-out]', 'center', 0, 900); await s.wait(1700); }
  s.cue('Œil long ? Myopie axiale.', 'Long eye? Axial myopia.');
  if (P) await s.scrollTo('[data-eye="long"]', 'start', top + 10, 900);
  await s.tap('[data-eye="long"]');
  await s.wait(600);
  const c2 = await s.page.evaluate(() => +document.querySelector('[data-rng="c2"]').value);
  await s.drag(await svgPos(c2), await svgPos(26.5), 30, 1100);
  await s.wait(400);
  if (P) await s.scrollTo('[data-a="check"]', 'center', 0, 700);
  await s.tap('[data-a="check"]');
  s.mark('ok2');
  await s.wait(P ? 400 : 2400);
  if (P) { await s.scrollTo('[data-out]', 'center', 0, 900); await s.wait(2600); }
  return s.stop();
}

async function daily(opts) {
  const iso = d => { const p = n => (n < 10 ? '0' : '') + n; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); };
  const today = new Date(), days = {}; for (let i = 1; i <= 6; i++) { const d = new Date(today); d.setDate(d.getDate() - i); days[iso(d)] = 1; }
  const y = new Date(today); y.setDate(y.getDate() - 1);
  const progress = { streak: { n: 6, best: 6, last: iso(y), freeze: {}, days, t: Date.now() } };
  const s = await session(Object.assign({ storage: { 'oph-r1-progress-v1': JSON.stringify(progress) } }, opts)); const P = phone(opts.fmt), top = P ? 64 : 16;
  await s.goto('accueil');
  await s.page.evaluate(id => {
    const cards = SRS.all().filter(c => c.deck === 'images' && c.img);
    const c = cards.find(c => c.id === id) || cards[0];
    Daily.today = () => ({ kind: 'card', id: c.id, card: c }); Router.refresh();
  }, opts.card || '');
  await s.wait(500);
  await s.jump('.daily-card', P ? 140 : 160);
  await s.start();
  s.cue('Une image par jour', 'One image a day');
  await s.wait(2000);
  await s.tap('.daily-card');
  await s.wait(900);
  s.cue('Regarde, devine, retourne la carte', 'Look, guess, flip the card');
  if (P) await s.scrollTo('[data-flip]', 'center', 0, 900);
  await s.wait(1800);
  await s.tap('[data-flip]');
  await s.wait(700);
  if (P) await s.scrollTo('.fc-rate', 'center', 0, 900);
  await s.wait(2000);
  s.cue('Évalue-toi : la carte revient\\Nau bon moment', 'Rate yourself: the card comes\\Nback at the right time');
  await s.tap('.fc-rate [data-g="2"]');
  await s.wait(500);
  s.cue('Ta série continue :\\Nun gel par semaine si tu rates un jour', 'Keep your streak:\\None freeze a week if you miss a day');
  await s.scrollTo('[data-dailyend]', 'center', 0, 1000);
  s.mark('streak');
  await s.wait(3300);
  return s.stop();
}
module.exports = { cas, social: cas, ascan, daily };
