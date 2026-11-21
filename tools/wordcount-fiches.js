#!/usr/bin/env node
// Words visible at the default level (« Fondamentaux », depth 1) per fiche and per screen,
// mirroring src/views.js (ficheView) : text outside data-dz="2|3" and outside « Pour aller plus loin ».
// Usage : node tools/wordcount-fiches.js [C|B] [--en] [--json]
// Screens (STYLE-PEDAGO.md §2) : Voir ≤ 60 · Comprendre ≤ 120 · Décider ≤ 180 hors arbre.
//   « tap » = texte révélé au toucher au niveau 1 (contenu d’un traitement, réponse d’une perle,
//   liste « révéler les anomalies »). Le traitement est compté dans Décider (bloc « Traitement »).
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const R = path.join(__dirname, '..');
const args = process.argv.slice(2), MOD = (args.find(a => /^[ABC]$/.test(a)) || 'C'), EN = args.includes('--en'), JSONOUT = args.includes('--json');
const FILES = { B: ['data/fiches-cornee.js', 'data/fiches-cornee-2.js', 'data/ext-cornee-a.js', 'data/ext-cornee-b.js'], C: ['data/fiches-glaucome.js', 'data/ext-glaucome-a.js', 'data/ext-glaucome-b.js'] };
const ctx = {}; ctx.globalThis = ctx; vm.createContext(ctx);
for (const f of FILES[MOD].concat(['data/hy-glaucome.js', 'data/hy-cornee.js', 'data/photos.js', 'data/ext-photos.js'], EN ? ['data-en/fiches-glaucome.js', 'data-en/fiches-cornee.js', 'data-en/hy.js'] : []))
  if (fs.existsSync(path.join(R, f))) vm.runInContext(fs.readFileSync(path.join(R, f), 'utf8'), ctx, { filename: f });
const OPH = ctx.OPH;
function merge(a, b) { // same rule as I18N.applyContent : deep merge, arrays replaced
  if (Array.isArray(b) || typeof b !== 'object' || b === null) return b;
  const o = Object.assign({}, a); for (const k of Object.keys(b)) o[k] = (a && typeof a[k] === 'object' && !Array.isArray(a[k])) ? merge(a[k], b[k]) : b[k]; return o;
}
const W = s => String(s || '').replace(/\*\*/g, '').split(/\s+/).filter(Boolean).length;
const sum = a => a.reduce((n, s) => n + W(s), 0);
const rows = [];
for (let f of OPH.fiches.filter(x => x.module === MOD).sort((a, b) => a.order - b.order)) {
  let hy = OPH.hy[f.id] || {};
  if (EN) { f = merge(f, (ctx.OPH_EN.fiches || {})[f.id] || {}); hy = merge(hy, ((ctx.OPH_EN.hy || {})[f.id]) || {}); }
  const photos = ((OPH.photos || {})[f.id] || []).length > 0;
  const cp = f.compare;
  const voir = [].concat(photos ? [f.definition] : [], cp ? [cp.title, cp.normal.caption, cp.patho.caption] : []);
  const comp = [].concat(photos ? [] : [f.definition], hy.essentials || [], [f.causal.title], f.causal.levers.map(l => l.label), f.causal.steps.map(s => s.label), f.mnemonic ? [f.mnemonic.title, f.mnemonic.text] : []);
  const card = t => (t.dose || t.refer || t.pitfall) ? [t.dose, t.refer, t.pitfall, t.qc] : [t.how, t.why]; // carte courte (cycle 7) sinon how/why (rendu actuel)
  const dec = [].concat(f.redFlags, f.treatments.map(t => t.name));
  const decTap = [].concat(...f.treatments.map(card));
  const algo = [].concat(...f.cat.algo.map(a => [a.q, a.yes, a.no]));
  const train = f.pearls.map(p => p.q);
  const r = {
    id: f.id, oneLiner: W(f.oneLiner), voir: sum(voir), comp: sum(comp), dec: sum(dec) + sum(decTap), algo: sum(algo), train: sum(train),
    tap: sum(decTap) + sum(f.pearls.map(p => p.a)) + (cp ? sum(cp.patho.reveal) : 0),
    algoMaxQ: Math.max(...f.cat.algo.map(a => W(a.q))), algoMaxA: Math.max(...f.cat.algo.map(a => Math.max(W(a.yes), W(a.no)))),
    hyN: (hy.essentials || []).length, hyMax: Math.max(0, ...(hy.essentials || []).map(W)), rf: f.redFlags.length,
  };
  r.total = r.oneLiner + r.voir + r.comp + r.dec + r.algo + r.train;
  rows.push(r);
}
if (JSONOUT) { console.log(JSON.stringify(rows)); process.exit(0); }
const H = ['id', 'oneLiner', 'voir', 'comp', 'dec', 'algo', 'train', 'total', 'tap', 'algoMaxQ', 'algoMaxA', 'hyN', 'hyMax', 'rf'];
console.log(H.join('\t'));
for (const r of rows) console.log(H.map(k => r[k]).join('\t'));
const flag = rows.filter(r => r.oneLiner > 40 || r.voir > 60 || r.comp > 120 || r.dec > 180 || r.algoMaxQ > 8 || r.algoMaxA > 12 || r.rf > 3 || r.hyN > 5);
console.log('\nOver budget (oneLiner>40, voir>60, comp>120, dec>180, q>8, yes/no>12, redFlags>3, essentials>5): ' + (flag.map(r => r.id).join(', ') || 'none'));
