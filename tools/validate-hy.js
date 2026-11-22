#!/usr/bin/env node
// Validate high-yield layer files (G.OPH.hy). Usage: node tools/validate-hy.js data/hy-*.js
'use strict';
const fs = require('fs'), vm = require('vm');
const files = process.argv.slice(2);
const sb = { console }; sb.globalThis = sb; vm.createContext(sb);
const errors = [], warns = [];
for (const f of files) { try { vm.runInContext(fs.readFileSync(f, 'utf8'), sb, { filename: f }); } catch (e) { errors.push(f + ': JS ERROR ' + e.message); } }
const HY = (sb.OPH && sb.OPH.hy) || {};
const isStr = s => typeof s === 'string' && s.trim().length > 0;
const words = s => (s || '').replace(/\*\*/g, '').split(/\s+/).filter(Boolean).length;
let n = { keys: 0, ess: 0, cloze: 0, triage: 0, cues: 0 };
for (const [k, v] of Object.entries(HY)) {
  n.keys++;
  const c = 'hy.' + k;
  if (!/^(c-|g-|r-|a5-|phy-|ex-|b-bases|c-bases)/.test(k)) errors.push(c + ': unexpected key');
  if (!Array.isArray(v.essentials) || v.essentials.length < 3 || v.essentials.length > 5) errors.push(c + ': essentials 3–5');
  else v.essentials.forEach((s, i) => { if (!isStr(s)) errors.push(`${c}.essentials[${i}] empty`); else if (words(s) > 22) warns.push(`${c}.essentials[${i}] > 22 words`); if (/\[\[/.test(s)) errors.push(`${c}.essentials[${i}] contains [[ ]]`); });
  if (!Array.isArray(v.cloze) || v.cloze.length < 4 || v.cloze.length > 6) errors.push(c + ': cloze 4–6');
  else v.cloze.forEach((s, i) => {
    const m = (s || '').match(/\[\[([^\]]+)\]\]/g) || [];
    if (m.length !== 1) errors.push(`${c}.cloze[${i}] needs exactly one [[answer]]`);
    else { const ans = m[0].slice(2, -2).split('|')[0].trim(); if (!ans || ans.split(/\s+/).length > 4) errors.push(`${c}.cloze[${i}] answer must be 1–4 words`); }
    if (/\*\*/.test(s)) errors.push(`${c}.cloze[${i}] no bold allowed`);
    if (words(s) > 30) warns.push(`${c}.cloze[${i}] > 30 words`);
  });
  if (!Array.isArray(v.triage) || v.triage.length < 2 || v.triage.length > 3) errors.push(c + ': triage 2–3');
  else v.triage.forEach((t, i) => { if (!t || !isStr(t.s) || !isStr(t.why) || !['urgent', 'rapide', 'routine'].includes(t.u)) errors.push(`${c}.triage[${i}] needs s, u (urgent|rapide|routine), why`); else if (words(t.s) > 30) warns.push(`${c}.triage[${i}].s > 30 words`); });
  if (!Array.isArray(v.cues) || v.cues.length < 2 || v.cues.length > 3) errors.push(c + ': cues 2–3');
  else v.cues.forEach((s, i) => { if (!isStr(s)) errors.push(`${c}.cues[${i}] empty`); else if (words(s) > 9) warns.push(`${c}.cues[${i}] > 9 words`); });
  n.ess += (v.essentials || []).length; n.cloze += (v.cloze || []).length; n.triage += (v.triage || []).length; n.cues += (v.cues || []).length;
}
console.log('HY keys', n.keys, '| essentials', n.ess, '| cloze', n.cloze, '| triage', n.triage, '| cues', n.cues);
if (warns.length) { console.log(warns.length + ' warning(s):'); warns.forEach(w => console.log('  - ' + w)); }
if (errors.length) { console.log(errors.length + ' ERROR(s):'); errors.forEach(e => console.log('  ✗ ' + e)); process.exit(1); }
console.log('OK');
