#!/usr/bin/env node
// Referral-delay consistency per fiche (CRITIQUE-SEVERE passage 2, N3).
// Extracts the delays written in 3 places — redFlags, tree leaves (cat.algo yes/no), treatment.refer —
// and flags: (a) a red flag or tree leaf more urgent than anything in treatment.refer;
//            (b) a red flag / leaf that tells the reader to call or refer only after a wait ("après 1 h", "if not down after…");
//            (c) treatment.refer without any recognised delay;
//            (d) a delay in a red flag or leaf that refer does not name (refer may name several levels, each with its criterion).
// Usage : node tools/check-delays.js [--en] [--all]   (--all prints every fiche, not only problems)
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const R = path.join(__dirname, '..'), EN = process.argv.includes('--en'), ALL = process.argv.includes('--all');
const FILES = ['data/fiches-cornee.js', 'data/fiches-cornee-2.js', 'data/ext-cornee-a.js', 'data/ext-cornee-b.js', 'data/fiches-glaucome.js', 'data/ext-glaucome-a.js', 'data/ext-glaucome-b.js'].concat(EN ? ['data-en/fiches-cornee.js', 'data-en/fiches-glaucome.js'] : []);
const ctx = {}; ctx.globalThis = ctx; vm.createContext(ctx);
for (const f of FILES) if (fs.existsSync(path.join(R, f))) vm.runInContext(fs.readFileSync(path.join(R, f), 'utf8'), ctx, { filename: f });
function merge(a, b) { if (Array.isArray(b) || typeof b !== 'object' || b === null) return b; const o = Object.assign({}, a); for (const k of Object.keys(b)) o[k] = (a && typeof a[k] === 'object' && !Array.isArray(a[k])) ? merge(a[k], b[k]) : b[k]; return o; }
// urgency rank: 5 immediate, 4 same day, 3 ≤ 24–48 h, 2 this week / days, 1 weeks, 0 routine
const LEVELS = [
  [5, /immédiat|maintenant|sans délai|tout de suite|au chevet|\bimmediate(ly)?\b|\bnow\b|right away|without delay|at the bedside|emergency|\burgence\b(?! ophtalmologique d)|appel(er|le)? .{0,30}garde|on-call/i],
  [4, /le jour même|même jour|same[- ]day|ce jour|today/i],
  [3, /24\s?(–|-|à)?\s?(48\s?)?h|dans les 24|within 24|48 h|lendemain|next day/i],
  [2, /cette semaine|this week|dans la semaine|quelques jours|within (a few )?days|en jours/i],
  [1, /quelques semaines|few weeks|semaines|weeks/i],
  [0, /suivi régulier|regular follow|routine|habituel/i]
];
const NAMES = { 5: 'immédiat', 4: 'jour même', 3: '24–48 h', 2: 'semaine', 1: 'semaines', 0: 'régulier' };
const txt = v => (v && typeof v === 'object') ? (v.t || '') : (v || '');
// not referral delays: re-check intervals, clinical criteria (« plus de 24 h », « aggravation après 48 h »)
const NOT_DELAY = /(revoir|recontrôler|réévaluer|re-?check|review|see (again|back)|reassess)[^.;]{0,12}(à |at |in )?\d|plus de \d+\s?h|more than \d+\s?h|over \d+\s?h|(aggravation|worsening|worse|pire) (après|after) \d+\s?h/gi;
const clean = s => String(s).replace(NOT_DELAY, ' ');
const rank0 = s => { let best = -1; for (const [r, re] of LEVELS) if (re.test(s)) best = Math.max(best, r); return best; };
const rank = s => rank0(clean(s));
const levels = s => LEVELS.filter(([, re]) => re.test(clean(s))).map(([r]) => r);
const WAIT = /(après|after|au bout de|si .{0,40}(inchangée|pas|non) .{0,20}(après|à)\s?\d|if .{0,40}not .{0,20}after)\s?\d+\s?(h|min|heure|hour)/i;
const CALL = /(appel|appeler|référ|diriger|call|refer|ophtalmolog|ophthalmolog)/i;
let problems = 0;
for (let f of ctx.OPH.fiches.slice().sort((a, b) => (a.module + a.order).localeCompare(b.module + b.order))) {
  if (EN) f = merge(f, ((ctx.OPH_EN || {}).fiches || {})[f.id] || {});
  const tc = f.treatment || {}, refer = [].concat(tc.refer || []).join(' ');
  const rf = (f.redFlags || []).map(s => ({ s, r: rank(s) }));
  const leaves = []; (f.cat.algo || []).forEach((a, i) => ['yes', 'no'].forEach(b => { const s = txt(a[b]); if (s) leaves.push({ s, r: Math.max(rank(s), a[b] && a[b].urgent ? 5 : -1), at: i + b[0] }); }));
  const rRefer = rank(refer), inRefer = levels(refer);
  const msgs = [];
  if (!refer) msgs.push('no treatment.refer');
  else if (rRefer < 0) msgs.push('treatment.refer has no recognised delay');
  for (const x of rf) { if (x.r > rRefer) msgs.push(`red flag more urgent (${NAMES[x.r]}) than refer (${NAMES[rRefer] || '?'}) : « ${x.s} »`); if (WAIT.test(x.s) && CALL.test(x.s)) msgs.push(`red flag delays the call : « ${x.s} »`); }
  for (const x of rf.concat(leaves)) if (x.r > 0 && x.r < rRefer && !inRefer.includes(x.r) && rRefer >= 0) msgs.push(`${x.at ? 'tree ' + x.at : 'red flag'} gives a delay (${NAMES[x.r]}) not named in refer : « ${x.s} »`);
  for (const x of leaves) { if (x.r > rRefer) msgs.push(`tree ${x.at} more urgent (${NAMES[x.r]}) than refer (${NAMES[rRefer] || '?'}) : « ${x.s} »`); if (WAIT.test(x.s) && CALL.test(x.s)) msgs.push(`tree ${x.at} delays the call : « ${x.s} »`); }
  if (msgs.length || ALL) {
    console.log(`\n${f.id}  refer=${NAMES[rRefer] || '—'}  flags=[${rf.map(x => NAMES[x.r] || '·').join(', ')}]  tree max=${NAMES[Math.max(-1, ...leaves.map(x => x.r))] || '·'}`);
    console.log('  refer: ' + refer);
    msgs.forEach(m => console.log('  ✗ ' + m));
  }
  problems += msgs.length;
}
console.log(`\n${problems} problem(s)`);
process.exitCode = problems ? 1 : 0;
