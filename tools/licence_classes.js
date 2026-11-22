#!/usr/bin/env node
/* Licence classes of every image used on the site, and what a commercial-safe build (no `nc`) would lose.
   Called by `python3 tools/build_web.py --commercial-safe-report` (reads the catalog JSON on stdin, prints JSON).
   Classes: nc = EyeRounds CC BY-NC-ND or any NC licence · open = CC0, public domain, CC BY, CC BY-SA · own = original SVG schematic.
   Ownership units: fiche (and its screens), Module A / capsule photo sets, MCQ, clinical case, image case, investigation practice item,
   plus fixed screens (home module covers, cas vedette, image of the day). */
'use strict';
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.dirname(__dirname);
const input = JSON.parse(fs.readFileSync(0, 'utf8'));          // { catalog: [{id, lc, restricted}], data_order: [...] }
const LC = {}; input.catalog.forEach(e => { LC[e.id] = e.lc; });
const RESTRICTED = new Set(input.restricted || []);

const sandbox = { window: {}, console };
sandbox.window.window = sandbox.window; sandbox.window.globalThis = sandbox.window;
vm.createContext(sandbox.window);
for (const n of input.data_order) {
  if (n === 'catalog') continue;
  const p = path.join(ROOT, 'data', n + '.js');
  if (!fs.existsSync(p)) continue;
  try { vm.runInContext(fs.readFileSync(p, 'utf8'), sandbox.window, { filename: p }); } catch (e) { console.error('skip ' + n + ': ' + e.message); }
}
const O = sandbox.window.OPH || {};
const ID = /\b(OPH-\d{3}|IMG3-\d{3})\b/g;
const ids = x => [...new Set((JSON.stringify(x || '').match(ID) || []).filter(id => LC[id] && !RESTRICTED.has(id)))];
const cls = id => LC[id] || 'unknown';
const pick = v => (v && typeof v === 'object' && !Array.isArray(v)) ? (v.fr || v.en || '') : (v || '');
const units = [];
function unit(kind, id, title, photos, ownSvg, href, note) {
  const p = photos.filter(Boolean);
  const nc = p.filter(i => cls(i) === 'nc'), open = p.filter(i => cls(i) === 'open');
  if (!p.length && !ownSvg) return;
  units.push({ kind, id, title: String(pick(title)).slice(0, 90), href, nc, open, own: !!ownSvg, note: note || '' });
}

/* --- fiches: Voir (photos carousel, voir hotspots, pairs) + Comprendre/Décider (own SVG schematics, drawn mechanism, tree) --- */
const photosByKey = O.photos || {};
const pairsByKey = {}; (O.photoPairs || []).forEach(p => { (pairsByKey[p.key] = pairsByKey[p.key] || []).push(p.normal, p.patho); });
const voir = O.voirHotspots || {};
const ficheIds = new Set();
(O.fiches || []).forEach(f => {
  ficheIds.add(f.id);
  const ph = ids([photosByKey[f.id], pairsByKey[f.id], voir[f.id], f]);
  const svg = true; // every fiche has its own drawn mechanism (src/figures-mech.js), schematics and decision tree
  unit('fiche', f.id, f.title, ph, svg, '#' + f.id + '/voir', 'Voir: ' + ids([photosByKey[f.id], voir[f.id]]).length + ' photo(s)');
});
/* --- Module A pages, capsules and other photo sets keyed by topic --- */
Object.keys(photosByKey).forEach(k => { if (ficheIds.has(k)) return; unit('photo-set', k, k, ids([photosByKey[k], pairsByKey[k], voir[k]]), false, '#' + k); });
(O.capsules || []).forEach(c => unit('capsule', c.id, c.title, ids(c), false, '#' + c.id));
/* --- MCQ with a photo figure --- */
(O.quiz || []).forEach(q => { const ph = ids(q.figure || q.img || q.photo); if (ph.length) unit('quiz', q.id, q.stem, ph, false, '#quiz', ''); });
/* --- clinical cases --- */
(O.cases || []).forEach(c => unit('case', c.id, c.title, ids(c), false, '#' + c.id));
/* --- image cases (cas-images) and open cases --- */
const media = Object.assign({}, O.imageCasesMedia || {});
[].concat(O.imageCases || [], O.openCases || []).forEach(c => {
  const m = media[c.media] || (O.invMedia || {})[c.media];
  const own = m && m.kind === 'svg';
  unit('image-case', c.id, c.q, ids(m), own, '#cas-images/' + c.id);
});
/* --- investigations practice --- */
const inv = O.invMedia || {};
(O.invPractice || []).forEach(p => { const m = inv[p.media]; unit('inv-practice', p.id, p.q, ids(m), m && m.kind === 'svg', '#inv-' + p.inv); });
/* --- fixed screens --- */
unit('screen', 'accueil (couvertures des modules)', 'Accueil — couvertures des modules A/B/C', ['OPH-192', 'OPH-001', 'OPH-131'].filter(i => LC[i]), false, '#accueil', 'COVER in src/learn.js');
const feat = (O.invPractice || []).find(p => p.id === 'p-fondoeil-6');
if (feat) unit('screen', 'cas-vedette', 'Cas vedette (lien de campagne)', ids(inv[feat.media]), false, '#cas-vedette', 'FEATURED = p-fondoeil-6 in src/learn.js');

/* --- counts --- */
const used = new Set(); units.forEach(u => u.nc.concat(u.open).forEach(i => used.add(i)));
const count = { nc: 0, open: 0 }; used.forEach(i => { count[cls(i)] = (count[cls(i)] || 0) + 1; });
const allCat = { nc: 0, open: 0 }; input.catalog.filter(e => !RESTRICTED.has(e.id)).forEach(e => { allCat[e.lc] = (allCat[e.lc] || 0) + 1; });
const svgMedia = Object.keys(inv).filter(k => inv[k] && inv[k].kind === 'svg').length + Object.keys(media).filter(k => media[k] && media[k].kind === 'svg').length;
const lose = units.filter(u => u.nc.length);
const noRepl = lose.filter(u => !u.open.length && !u.own);
process.stdout.write(JSON.stringify({ fiches: ficheIds.size, count, catalog: allCat, svgMedia, units: units.length, lose, noRepl: noRepl.map(u => u.kind + ':' + u.id) }));
