#!/usr/bin/env node
// Validate content data files for the ophthalmology class app.
// Usage: node tools/validate.js data/file.js [more files...]   (or no args = all data/*.js)
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const FICHE_IDS = {
  B: ['c-secheresse','c-bacterienne','c-atypiques','c-herpes','c-keratocone','c-fuchs','c-erosion','c-pterygion','c-greffe','c-brulure','c-surface','c-peripherie','c-depots','c-dystrophies'],
  C: ['g-gpao','g-hto','g-gpn','g-fermeture','g-crise','g-pxf','g-pigmentaire','g-neovasculaire','g-secondaires','g-postop','g-papille','g-cristallin','g-dev'],
  D: ['r-decollement','r-oacr','r-ovr'], // module D (rétine): fiches present so far, in the order they were written
};
const A_TOPICS = ['a-anatomie','a-physiologie','a-examen','a-imagerie','a-retine'];
const ANAT_IDS = ['cornee','limbe','sclere','conjonctive','chambre-anterieure','angle','trabeculum','schlemm','iris','pupille','corps-ciliaire','proces-ciliaires','chambre-posterieure','zonules','cristallin','vitre','retine','macula','fovea','papille','nerf-optique','choroide','ora-serrata','acr','vcr','arteres-ciliaires-post','arteres-ciliaires-ant','veines-vortiqueuses','nerfs-ciliaires-longs','nerfs-ciliaires-courts','lame-criblee','muscles-droits'];
const CORNEA_LAYERS = ['film','epithelium','bowman','stroma','dua','descemet','endothelium'];
const ANGLE_IDS = ['iris-racine','bande-ciliaire','eperon','trab-pig','trab-nonpig','schwalbe','schlemm'];
const DISC_IDS = ['rim','cup','vessels','ppa','lame-criblee','rnfl'];
const ANNEX_IDS = ['glande-lacrymale','meibomius','caliciformes','points-lacrymaux','canalicules','sac-lacrymal','canal-lacrymonasal'];
const PHYSIO_IDS = ['aqueuse','pio','film-lacrymal','transparence','refraction','pupille'];
const EXAM_IDS = ['av','pupilles','lampe','fluoresceine','tonometrie','gonioscopie','pachymetrie','papille','oct','topographie','champs-visuels','speculaire'];
const IMAGE_EXTRA = ['a-lampe','a-fluoresceine','a-gonioscopie','a-papille','a-oct','a-topographie','a-champs-visuels','a-speculaire'];
const TAGS = ['urgent','frequent','highyield','piege'];
let CATALOG = {};
for (const cf of [['imgsrc', 'catalog.json'], ['imgsrc2', 'catalog2.json'], ['imgsrc3', 'catalog3.json']]) { try { for (const e of JSON.parse(fs.readFileSync(path.join(__dirname, '..', cf[0], cf[1]), 'utf8'))) CATALOG[e.id] = e; } catch (e) { /* no catalog */ } }
delete CATALOG['OPH-185']; delete CATALOG['OPH-186'];
const PHOTO_KEYS_EXTRA = ['b-bases','c-bases','bonus-B','bonus-C','a-anatomie','a-physiologie','a-av','a-pupilles','a-lampe','a-fluoresceine','a-tonometrie','a-gonioscopie','a-pachymetrie','a-papille','a-oct','a-topographie','a-champs-visuels','a-speculaire'];
const KINDS = ['cause','mecanisme','lesion','signe','complication'];
const PHASES = ['observation','medical','laser','chirurgie','suivi','escalade'];
const QTYPES = ['anatomie','physiopathologie','diagnostic','image','cat'];

const FIG = {
  mechcap: { id: v => ['b-familles', 'qc-path', 'b-outils', 'c-outils', 'pio', 'pupille', 'av'].includes(v) }, // static schematics in src/figures-mech.js
  eye: { highlight: v => Array.isArray(v) && v.every(x => ANAT_IDS.includes(x)) },
  cornea: { highlight: v => Array.isArray(v) && v.every(x => CORNEA_LAYERS.includes(x)), edema: v => ['none','stromal','epithelial','both'].includes(v), guttae: b => typeof b === 'boolean', scar: b => typeof b === 'boolean' },
  gonio: { grade: v => Number.isInteger(v) && v >= 0 && v <= 4, pas: b => typeof b === 'boolean', pigment: v => ['light','heavy','sampaolesi'].includes(v), nv: b => typeof b === 'boolean', recession: b => typeof b === 'boolean' },
  disc: { cd: v => typeof v === 'number' && v >= 0.2 && v <= 0.95, notch: v => ['none','inf','sup'].includes(v), heme: b => typeof b === 'boolean', ppa: b => typeof b === 'boolean', pallor: b => typeof b === 'boolean' },
  vf: { pattern: v => ['normal','sup-arcuate','inf-arcuate','sup-nasal-step','inf-nasal-step','sup-paracentral','inf-paracentral','double-arcuate','generalized','temporal-wedge','bitemporal','homonymous-right','homonymous-left','altitudinal-inf','altitudinal-sup','central','blind-spot'].includes(v), eye: v => ['OD','OS'].includes(v), map: v => ['pd','td','gray'].includes(v), md: v => typeof v === 'number' && v <= 2 && v >= -35 },
  fluo: { pattern: v => ['normal','spk-inferior','spk-interpalpebral','spk-superior','dendrite','geographic','pseudodendrite','abrasion','fb-tracking','ulcer','seidel','negative'].includes(v) },
  topo: { pattern: v => ['normal','wtr','atr','kc-inferior','kc-central','pmd'].includes(v) },
  oct: { pattern: v => ['normal','inf-thin','sup-thin','bi-arcuate','diffuse','red-disease','green-disease'].includes(v) },
  vanherick: { grade: v => Number.isInteger(v) && v >= 0 && v <= 4 },
  slit: { pattern: v => ['normal','hypopyon','pxf','krukenberg','nvi','tid','aacc','bleb','kp'].includes(v) },
  photo: { id: v => !!CATALOG[v] },
};

let errors = [], warnings = [];
const E = (ctx, msg) => errors.push(`${ctx}: ${msg}`);
const W = (ctx, msg) => warnings.push(`${ctx}: ${msg}`);
const isStr = s => typeof s === 'string' && s.trim().length > 0;
const words = s => (typeof s === 'string' ? s.split(/\s+/).filter(Boolean).length : 0);
function textOf(o) { if (o == null) return ''; if (typeof o === 'string') return o + ' '; if (Array.isArray(o)) return o.map(textOf).join(' '); if (typeof o === 'object') return Object.entries(o).filter(([k]) => !['figure','id','type','kind','phase','at','module','order','tags','sources'].includes(k)).map(([, v]) => textOf(v)).join(' '); return ''; }
function checkStrings(ctx, o) {
  const t = textOf(o);
  if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(t)) E(ctx, 'contains emoji');
  if (/<[a-z][^>]*>/i.test(t)) E(ctx, 'contains HTML tags');
  if (/(^|\s)\*[^*\s][^*]*\*(?!\*)/.test(t.replace(/\*\*[^*]+\*\*/g, ''))) W(ctx, 'single-asterisk emphasis found (only **bold** is rendered)');
  if (/undefined|null|TODO|lorem/i.test(t)) W(ctx, 'suspicious placeholder text (undefined/null/TODO/lorem)');
}
function checkFigure(ctx, f) {
  if (f == null) return;
  if (typeof f !== 'object' || !FIG[f.type]) { E(ctx, `unknown figure type ${f && f.type}`); return; }
  for (const [k, v] of Object.entries(f)) {
    if (k === 'type') continue;
    if (!FIG[f.type][k]) { E(ctx, `figure ${f.type}: unknown param "${k}"`); continue; }
    if (!FIG[f.type][k](v)) E(ctx, `figure ${f.type}: invalid value for ${k}: ${JSON.stringify(v)}`);
  }
  if (f.type === 'vf' && !f.pattern) E(ctx, 'vf figure needs pattern');
  if (['fluo','topo','oct','slit'].includes(f.type) && !f.pattern) E(ctx, `${f.type} figure needs pattern`);
  if (f.type === 'photo' && !f.id) E(ctx, 'photo figure needs id');
}
function arr(ctx, v, min, max, name) {
  if (!Array.isArray(v)) { E(ctx, `${name} must be an array`); return false; }
  if (v.length < min || v.length > max) E(ctx, `${name} length ${v.length} not in [${min},${max}]`);
  return true;
}

function checkFiches(list, OPH) {
  const seen = new Set();
  for (const f of list) {
    const ctx = `fiche ${f && f.id}`;
    if (!f || typeof f !== 'object') { E('fiche', 'not an object'); continue; }
    if (seen.has(f.id)) E(ctx, 'duplicate id'); seen.add(f.id);
    if (!['B','C','D'].includes(f.module)) E(ctx, 'module must be B, C or D');
    else if (!FICHE_IDS[f.module].includes(f.id)) E(ctx, 'id not in imposed list for module ' + f.module);
    if (!Number.isInteger(f.order) || f.order < 1 || f.order > 20) E(ctx, 'order must be 1..20');
    for (const k of ['title','en','oneLiner','definition']) if (!isStr(f[k])) E(ctx, `missing ${k}`);
    if (isStr(f.definition)) { const n = (f.definition.match(/[.!?](\s|$)/g) || []).length; if (n !== 2) W(ctx, `definition has ${n} sentences (expected 2)`); }
    if (words(f.oneLiner) > 26) W(ctx, 'oneLiner > 26 words');
    if (!Array.isArray(f.tags) || !f.tags.length || !f.tags.every(t => TAGS.includes(t))) E(ctx, 'tags invalid');
    if (!f.anatomy || !isStr(f.anatomy.text)) E(ctx, 'anatomy.text missing'); else checkFigure(ctx + ' anatomy', f.anatomy.figure);
    const c = f.causal;
    if (!c || !isStr(c.title)) E(ctx, 'causal.title missing');
    else {
      if (arr(ctx, c.steps, 4, 7, 'causal.steps')) c.steps.forEach((s, i) => { if (!isStr(s.label) || !isStr(s.detail)) E(ctx, `causal step ${i} label/detail`); if (!KINDS.includes(s.kind)) E(ctx, `causal step ${i} kind ${s.kind}`); if (words(s.label) > 7) W(ctx, `causal step ${i} label > 7 words`); });
      if (arr(ctx, c.levers, 2, 4, 'causal.levers')) c.levers.forEach((l, i) => { if (!Number.isInteger(l.at) || l.at < 0 || l.at >= (c.steps || []).length) E(ctx, `lever ${i} at out of range`); if (!isStr(l.label) || !isStr(l.detail)) E(ctx, `lever ${i} label/detail`); });
    }
    if (arr(ctx, f.risk, 3, 7, 'risk')) f.risk.forEach((r, i) => { if (!isStr(r)) E(ctx, `risk ${i}`); });
    if (arr(ctx, f.presentation, 3, 6, 'presentation')) f.presentation.forEach((r, i) => { if (!isStr(r)) E(ctx, `presentation ${i}`); });
    if (!f.exam) E(ctx, 'exam missing'); else {
      if (arr(ctx, f.exam.signs, 3, 6, 'exam.signs')) f.exam.signs.forEach((s, i) => { if (!isStr(s.sign) || !isStr(s.why)) E(ctx, `exam.signs ${i}`); });
      if (arr(ctx, f.exam.tests, 2, 5, 'exam.tests')) f.exam.tests.forEach((s, i) => { if (!isStr(s.test) || !isStr(s.when) || !isStr(s.read)) E(ctx, `exam.tests ${i}`); });
    }
    if (arr(ctx, f.ddx, 3, 6, 'ddx')) f.ddx.forEach((d, i) => { if (!isStr(d.dx) || !isStr(d.clue)) E(ctx, `ddx ${i}`); });
    if (arr(ctx, f.redFlags, 2, 5, 'redFlags')) f.redFlags.forEach((d, i) => { if (!isStr(d)) E(ctx, `redFlags ${i}`); });
    if (!f.cat) E(ctx, 'cat missing'); else {
      if (arr(ctx, f.cat.algo, 3, 6, 'cat.algo')) {
        // tree v2 (STYLE-PEDAGO §8): yes/no = text, '' (only if the branch goes on) or {t, urgent}; yesGo/noGo = index of a LATER node (acyclic)
        const al = f.cat.algo, txt = v => (v && typeof v === 'object') ? v.t : v, reach = new Set([0]);
        al.forEach((a, i) => {
          if (!isStr(a.q)) E(ctx, `cat.algo ${i} q`);
          for (const [b, g] of [['yes', 'yesGo'], ['no', 'noGo']]) {
            const has = a[g] != null || (a.cont === b && i < al.length - 1);
            if (a[g] != null && (!Number.isInteger(a[g]) || a[g] <= i || a[g] >= al.length)) E(ctx, `cat.algo ${i} ${g} must point to a later node`);
            if (!isStr(txt(a[b])) && !has) E(ctx, `cat.algo ${i} ${b}: empty leaf (needs text or ${g})`);
            if (/^(question suivante|continuer|next question|continue)\.?$/i.test(String(txt(a[b]) || '').trim())) W(ctx, `cat.algo ${i} ${b}: filler leaf`);
            if (reach.has(i) && has) reach.add(a[g] != null ? a[g] : i + 1);
          }
        });
        al.forEach((a, i) => { if (!reach.has(i)) E(ctx, `cat.algo ${i} unreachable from the root`); });
      }
      if (arr(ctx, f.cat.phases, 2, 6, 'cat.phases')) { let last = -1; f.cat.phases.forEach((p, i) => { const k = PHASES.indexOf(p.phase); if (k < 0) E(ctx, `phase ${i} invalid ${p.phase}`); else { if (k <= last) E(ctx, 'phases out of order or duplicated'); last = k; } if (!Array.isArray(p.items) || !p.items.length || !p.items.every(isStr)) E(ctx, `phase ${p.phase} items`); }); }
      if (!isStr(f.cat.local)) E(ctx, 'cat.local missing');
    }
    if (arr(ctx, f.treatments, 3, 6, 'treatments')) f.treatments.forEach((t, i) => { for (const k of ['name','how','why','pros','cons','cx']) if (!isStr(t[k])) E(ctx, `treatment ${i} missing ${k}`); });
    if (arr(ctx, f.pearls, 3, 3, 'pearls')) f.pearls.forEach((p, i) => { if (!isStr(p.q) || !isStr(p.a)) E(ctx, `pearl ${i}`); });
    if (f.mnemonic && (!isStr(f.mnemonic.title) || !isStr(f.mnemonic.text))) E(ctx, 'mnemonic incomplete');
    if (f.compare) {
      const cp = f.compare;
      if (!isStr(cp.title) || !cp.normal || !cp.patho) E(ctx, 'compare incomplete');
      else { checkFigure(ctx + ' compare.normal', cp.normal.figure); checkFigure(ctx + ' compare.patho', cp.patho.figure); if (!cp.normal.figure || !cp.patho.figure) E(ctx, 'compare needs both figures'); if (!Array.isArray(cp.patho.reveal) || !cp.patho.reveal.length) E(ctx, 'compare.patho.reveal needed'); if (cp.normal.figure && cp.patho.figure && cp.normal.figure.type !== cp.patho.figure.type) W(ctx, 'compare figures of different types'); }
    } else W(ctx, 'no compare block');
    if (arr(ctx, f.sources, 2, 6, 'sources')) f.sources.forEach((s, i) => { if (!isStr(s)) E(ctx, `source ${i}`); });
    checkStrings(ctx, f);
    const visible = words(textOf({ d: f.definition, o: f.oneLiner, a: f.anatomy && f.anatomy.text, c: f.causal && f.causal.steps, r: f.risk, p: f.presentation, e: f.exam, dd: f.ddx, rf: f.redFlags, cat: f.cat, t: f.treatments, pe: f.pearls }));
    if (visible > 1150) W(ctx, `long fiche: ~${visible} words (target 450–900)`);
    if (visible < 380) W(ctx, `short fiche: ~${visible} words`);
  }
  if (PARTIAL) return;
  for (const m of ['B','C','D']) {
    const present = list.filter(f => f.module === m).map(f => f.id);
    if (present.length) for (const id of FICHE_IDS[m]) if (!present.includes(id)) E('fiches ' + m, 'missing fiche ' + id);
    if (present.length) {
      const b = OPH.bonus && OPH.bonus[m];
      if (!Array.isArray(b) || b.length < 6 || b.length > 8) E('bonus ' + m, 'needs 6–8 items');
      else b.forEach((x, i) => { for (const k of ['title','en','clue','action']) if (!isStr(x[k])) E('bonus ' + m, `item ${i} missing ${k}`); });
    }
  }
}

function checkQuiz(list) {
  const seen = new Set(); const pos = [0,0,0,0,0]; const lv = {1:0,2:0,3:0}; let traps = 0; const byMod = {};
  for (const q of list) {
    const ctx = `quiz ${q && q.id}`;
    if (seen.has(q.id)) E(ctx, 'duplicate id'); seen.add(q.id);
    if (!/^[ABCD]-\d{3}$/.test(q.id || '')) E(ctx, 'id format must be X-000');
    if (!['A','B','C','D'].includes(q.module)) E(ctx, 'module'); else if (!q.id.startsWith(q.module + '-')) E(ctx, 'id prefix != module');
    byMod[q.module] = (byMod[q.module] || 0) + 1;
    if (q.module === 'A' && !A_TOPICS.includes(q.topic)) E(ctx, 'topic must be one of ' + A_TOPICS.join(','));
    if ((q.module === 'B' || q.module === 'C' || q.module === 'D') && !(FICHE_IDS[q.module].includes(q.topic) || q.topic === ({ B: 'c-bonus', C: 'g-bonus', D: 'r-bonus' })[q.module])) E(ctx, 'topic must be a fiche id of its module (or c-bonus/g-bonus/r-bonus)');
    if (!QTYPES.includes(q.type)) E(ctx, 'type invalid');
    if (![1,2,3].includes(q.level)) E(ctx, 'level invalid'); else lv[q.level]++;
    if (typeof q.trap !== 'boolean') E(ctx, 'trap must be boolean'); else if (q.trap) traps++;
    if (!isStr(q.stem)) E(ctx, 'stem');
    if (q.type === 'image' && !q.figure) E(ctx, 'image question needs a figure');
    checkFigure(ctx, q.figure);
    if (!Array.isArray(q.options) || q.options.length < 4 || q.options.length > 5 || !q.options.every(isStr)) E(ctx, 'options must be 4–5 strings');
    else {
      if (new Set(q.options.map(o => o.trim().toLowerCase())).size !== q.options.length) E(ctx, 'duplicate options');
      if (q.options.some(o => /^\s*[A-Ea-e][).:-]\s/.test(o))) E(ctx, 'option has letter prefix');
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) E(ctx, 'answer index out of range'); else pos[q.answer]++;
      if (!Array.isArray(q.why) || q.why.length !== q.options.length || !q.why.every(isStr)) E(ctx, 'why must have one explanation per option');
      const lens = q.options.map(o => o.length); const mx = Math.max(...lens), mn = Math.min(...lens);
      if (mx > 3.5 * Math.max(mn, 8) && mx > 60) W(ctx, 'option lengths very uneven (cue to answer?)');
    }
    if (!isStr(q.explain)) E(ctx, 'explain');
    if (/\b(option|choix|réponse) [A-E]\b/.test(textOf({ s: q.stem, e: q.explain, w: q.why }))) E(ctx, 'refers to option letters');
    if (/toutes ces réponses|aucune de ces réponses|all of the above|none of the above/i.test((q.options || []).join(' '))) W(ctx, '"all/none of the above" option (breaks with shuffling)');
    checkStrings(ctx, q);
  }
  return { pos, lv, traps, byMod };
}

// Quiz audit (2026-11-22): the right option must not be the single longest in more than 35 % of the questions, in French
// and in the English overlay (data-en/quiz.js); `explain` stays ≤ 45 words (about 3 lines), the longer text goes to `deep`.
function checkQuizBias(list) {
  const MAX = 0.35, WORDS = 45, en = {};
  try { const sb = {}; sb.globalThis = sb; vm.createContext(sb); vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'data-en', 'quiz.js'), 'utf8'), sb); Object.assign(en, (sb.OPH_EN && sb.OPH_EN.quiz) || {}); }
  catch (e) { W('quiz EN', 'data-en/quiz.js not readable: English overlay not checked'); }
  for (const [L, get] of [['FR', q => q], ['EN', q => en[q.id]]]) {
    let n = 0, longest = 0; const long = [];
    for (const q of list) {
      const o = get(q); if (!o || !Array.isArray(o.options) || !Array.isArray(q.options) || !Number.isInteger(q.answer)) continue; n++;
      if (o.options.length !== q.options.length || (Array.isArray(o.why) && o.why.length !== q.options.length)) E(`quiz ${q.id} ${L}`, 'options / why count differs from the French question');
      if (o.deep != null && !isStr(o.deep)) E(`quiz ${q.id} ${L}`, 'deep must be a non-empty string');
      const len = o.options.map(x => String(x).length), mx = Math.max(...len);
      if (len[q.answer] === mx && len.filter(v => v === mx).length === 1) longest++;
      if (words(o.explain) > WORDS) long.push(q.id);
    }
    if (!n) continue;
    console.log(`Quiz ${L}: right option is the single longest in ${longest}/${n} (${Math.round(100 * longest / n)} %, max 35 %) · explanations > ${WORDS} words: ${long.length}`);
    if (longest / n > MAX) E('quiz ' + L, `right option is the single longest in ${Math.round(100 * longest / n)} % of the questions (> 35 %): rebalance option lengths`);
    if (long.length) W('quiz ' + L, `explain > ${WORDS} words (keep 3 lines, move the detail to deep): ${long.slice(0, 15).join(', ')}${long.length > 15 ? '…' : ''}`);
  }
}

function checkCases(list) {
  const seen = new Set();
  for (const c of list) {
    const ctx = `case ${c && c.id}`;
    if (seen.has(c.id)) E(ctx, 'duplicate id'); seen.add(c.id);
    if (!/^cas-[abc]\d+$/.test(c.id || '')) E(ctx, 'id format cas-b1');
    if (!['A','B','C'].includes(c.module)) E(ctx, 'module');
    for (const k of ['title','intro']) if (!isStr(c[k])) E(ctx, 'missing ' + k);
    if (!Array.isArray(c.tags)) E(ctx, 'tags array'); else if (!c.tags.every(t => TAGS.includes(t))) E(ctx, 'tags invalid');
    if (!Array.isArray(c.steps) || c.steps.length < 4) { E(ctx, 'needs ≥ 4 steps'); continue; }
    let nEx = 0, nCh = 0, nIn = 0;
    c.steps.forEach((s, i) => {
      const sc = `${ctx} step ${i}`;
      if (s.kind === 'exams') { nEx++; if (!isStr(s.prompt)) E(sc, 'prompt'); if (!Array.isArray(s.options) || s.options.length < 5 || s.options.length > 8) E(sc, 'exams needs 5–8 options'); else { s.options.forEach((o, j) => { if (!isStr(o.label) || !isStr(o.result) || !isStr(o.note) || ![2,1,0,-1].includes(o.value)) E(sc, `option ${j} incomplete`); }); if (!Number.isInteger(s.pick) || s.pick < 1 || s.pick > s.options.length) E(sc, 'pick invalid'); if (!s.options.some(o => o.value === 2)) E(sc, 'no essential exam'); } }
      else if (s.kind === 'choice') { nCh++; if (!isStr(s.prompt)) E(sc, 'prompt'); if (!Array.isArray(s.options) || s.options.length < 3 || s.options.length > 5) E(sc, 'choice needs 3–5 options'); else { const nc = s.options.filter(o => o.correct === true).length; if (nc !== 1) E(sc, `exactly one correct option needed (${nc})`); s.options.forEach((o, j) => { if (!isStr(o.label) || !isStr(o.note) || typeof o.correct !== 'boolean') E(sc, `option ${j} incomplete`); }); } }
      else if (s.kind === 'info') { nIn++; if (!isStr(s.text)) E(sc, 'text'); checkFigure(sc, s.figure); }
      else E(sc, 'kind invalid ' + s.kind);
    });
    if (nEx < 1) E(ctx, 'needs an exams step'); if (nCh < 3) E(ctx, 'needs ≥ 3 choice steps'); if (nIn < 1) E(ctx, 'needs ≥ 1 info step');
    if (!Array.isArray(c.debrief) || c.debrief.length < 3 || c.debrief.length > 5 || !c.debrief.every(isStr)) E(ctx, 'debrief 3–5 strings');
    checkStrings(ctx, c);
  }
}

function checkEntry(ctx, e) { if (!e || !isStr(e.t) || !isStr(e.en) || !isStr(e.d) || !isStr(e.c)) E(ctx, 'needs t, en, d, c'); }
function checkModuleA(A) {
  if (!A) return;
  if (PARTIAL && !A.anatomy && A.recog) { /* recog-only file */ } else
  for (const [grp, ids] of [['anatomy', ANAT_IDS], ['cornea', CORNEA_LAYERS], ['angle', ANGLE_IDS], ['disc', DISC_IDS], ['annexes', ANNEX_IDS]]) {
    if (!A[grp]) { E('A', 'missing ' + grp); continue; }
    for (const id of ids) checkEntry(`A.${grp}.${id}`, A[grp][id]);
    for (const k of Object.keys(A[grp])) if (!ids.includes(k)) W('A.' + grp, 'extra key ' + k);
  }
  if (PARTIAL && !A.anatomy) { /* skip */ } else if (!Array.isArray(A.physio)) E('A', 'physio array'); else {
    const got = A.physio.map(p => p.id); if (JSON.stringify(got) !== JSON.stringify(PHYSIO_IDS)) E('A.physio', 'ids/order must be ' + PHYSIO_IDS.join(','));
    A.physio.forEach(p => { const c = 'A.physio.' + p.id; for (const k of ['title','en','intro','pearl']) if (!isStr(p[k])) E(c, 'missing ' + k); if (!Array.isArray(p.points) || p.points.length < 3) E(c, 'points ≥ 3'); if (!Array.isArray(p.numbers)) E(c, 'numbers array'); else p.numbers.forEach((n, i) => { if (!isStr(n.label) || !isStr(String(n.value))) E(c, 'number ' + i); }); });
  }
  if (PARTIAL && !A.anatomy) { /* skip */ } else if (!Array.isArray(A.exam)) E('A', 'exam array'); else {
    const got = A.exam.map(p => p.id); if (JSON.stringify(got) !== JSON.stringify(EXAM_IDS)) E('A.exam', 'ids/order must be ' + EXAM_IDS.join(','));
    A.exam.forEach(p => { const c = 'A.exam.' + p.id; for (const k of ['title','en','why','pearl']) if (!isStr(p[k])) E(c, 'missing ' + k); for (const k of ['how','normal','patho','pitfalls']) if (!Array.isArray(p[k]) || p[k].length < 2 || !p[k].every(isStr)) E(c, k + ' needs ≥ 2 strings'); });
  }
  if (A.recog) {
    const seen = new Set();
    A.recog.forEach((r, i) => { const c = 'A.recog.' + (r.id || i);
      if (!/^[a-z0-9-]+$/.test(r.id || '')) E(c, 'id'); if (seen.has(r.id)) E(c, 'duplicate id'); seen.add(r.id);
      if (!['cristallin','echo','retine','nerf','neuro'].includes(r.group)) E(c, 'group'); if (!['urgent','rapide','routine'].includes(r.urgency)) E(c, 'urgency');
      for (const k of ['title','en','what','why']) if (!isStr(r[k])) E(c, 'missing ' + k);
      for (const [k, lo, hi] of [['look',3,6],['action',2,5],['pitfalls',1,4]]) if (!Array.isArray(r[k]) || r[k].length < lo || r[k].length > hi || !r[k].every(isStr)) E(c, k + ` needs ${lo}–${hi} strings`);
      if (!r.pearl || !isStr(r.pearl.q) || !isStr(r.pearl.a)) E(c, 'pearl {q,a}');
      if (typeof r.order !== 'number') W(c, 'order missing'); });
  }
  if (!PARTIAL || A.anatomy) checkStrings('A', A);
}

function checkImages(I) {
  if (!I) return;
  const keys = [...FICHE_IDS.B, ...FICHE_IDS.C, ...IMAGE_EXTRA];
  for (const k of keys) if (!I[k]) W('images', 'missing key ' + k);
  for (const [k, list] of Object.entries(I)) {
    if (!keys.includes(k)) E('images', 'unknown key ' + k);
    if (!Array.isArray(list) || list.length < 1 || list.length > 3) { E('images.' + k, '1–3 links'); continue; }
    list.forEach((l, i) => { if (!isStr(l.title) || !isStr(l.site) || !isStr(l.look) || !/^https:\/\/[^\s]+$/.test(l.url || '')) E(`images.${k}[${i}]`, 'needs title, site, https url, look'); });
  }
}

function checkCapsules(list) {
  const seen = new Set();
  for (const c of list) {
    const ctx = 'capsule ' + (c && c.id);
    if (!['b-bases','c-bases'].includes(c.id)) E(ctx, 'id must be b-bases or c-bases');
    if (seen.has(c.id)) E(ctx, 'duplicate'); seen.add(c.id);
    if (!['B','C'].includes(c.module)) E(ctx, 'module');
    for (const k of ['title','en','intro']) if (!isStr(c[k])) E(ctx, 'missing ' + k);
    if (arr(ctx, c.sections, 4, 9, 'sections')) c.sections.forEach((x, i) => { if (!isStr(x.title) || !isStr(x.text)) E(ctx, `section ${i} title/text`); if (x.bullets && (!Array.isArray(x.bullets) || !x.bullets.every(isStr))) E(ctx, `section ${i} bullets`); if (x.figure) checkFigure(ctx + ` section ${i}`, x.figure); if (x.photo && !CATALOG[x.photo]) E(ctx, `section ${i} unknown photo ${x.photo}`); if (words(x.text) > 130) W(ctx, `section ${i} text > 130 words`); });
    if (arr(ctx, c.toolbox, 8, 20, 'toolbox')) c.toolbox.forEach((t, i) => { for (const k of ['name','en','what','how','when','cx']) if (!isStr(t[k])) E(ctx, `tool ${i} missing ${k}`); });
    if (arr(ctx, c.vocab, 10, 35, 'vocab')) c.vocab.forEach((v, i) => { if (!isStr(v.term) || !isStr(v.def)) E(ctx, `vocab ${i}`); });
    checkStrings(ctx, c);
  }
}
function checkGlossary(g) {
  const n = Object.keys(g).length;
  if (n < 40) W('glossary', `only ${n} terms`);
  for (const [k, v] of Object.entries(g)) { if (!isStr(k) || !isStr(v)) E('glossary', 'bad entry ' + k); else if (words(v) > 40) W('glossary', `long definition for ${k}`); if (k.length < 2) E('glossary', 'term too short ' + k); }
}
function checkPhotos(P, pairs) {
  const keys = [...FICHE_IDS.B, ...FICHE_IDS.C, ...FICHE_IDS.D, ...PHOTO_KEYS_EXTRA, 'bonus-D'];
  const used = new Set();
  for (const [k, list] of Object.entries(P)) {
    if (!keys.includes(k) && !(/^a5-[a-z0-9-]+$/.test(k))) E('photos', 'unknown key ' + k);
    if (!Array.isArray(list) || !list.length) { E('photos.' + k, 'non-empty array'); continue; }
    list.forEach((p, i) => { const c = `photos.${k}[${i}]`; if (!CATALOG[p.id]) E(c, 'unknown id ' + p.id); if (!isStr(p.caption) || !isStr(p.look)) E(c, 'caption/look'); if (!Array.isArray(p.reveal) || !p.reveal.length || !p.reveal.every(isStr)) E(c, 'reveal list'); used.add(p.id); });
  }
  if (pairs) pairs.forEach((p, i) => { const c = `photoPairs[${i}]`; if (!keys.includes(p.key) && !/^a5-/.test(p.key)) E(c, 'key'); if (!CATALOG[p.normal] || !CATALOG[p.patho]) E(c, 'unknown ids'); if (!isStr(p.note)) E(c, 'note'); });
  console.log('Photos: keys', Object.keys(P).length, 'distinct images used', used.size);
}

// « Voir » hotspots (cycle 10): reward must be earned. Right zones ≤ 8 % of the image area (r as authored, % of width);
// a tap at the centre (50 %, 50 %, + 3 % tolerance) must miss unless the entry is `central` (then `choices` = 2nd gesture);
// choices = 3 short sign names (≤ 6 words, no « source / légende / photo de gauche »).
function checkVoirHotspots(H) {
  const stats = { n: 0, hot: 0, central: 0, choiceOnly: 0, maxArea: 0, centreWins: 0 };
  const BAN = /\b(source|légende|legend|caption|photo de gauche|left photo)\b/i;
  const DIM = {}; // shipped image size (data/catalog.js tw × th), else the source catalogs
  try { const sb = {}; sb.globalThis = sb; vm.createContext(sb); vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'data', 'catalog.js'), 'utf8'), sb); for (const e of (sb.OPH && sb.OPH.catalog) || []) DIM[e.id] = e; } catch (e) { W('voirHotspots', 'data/catalog.js not readable: aspect ratios from source catalogs'); }
  for (const [k, h] of Object.entries(H)) {
    const c = 'voirHotspots.' + k; stats.n++;
    if (!CATALOG[h.photo]) E(c, 'unknown photo ' + h.photo);
    const e = DIM[h.photo] || CATALOG[h.photo] || {}, ratio = (e.tw || e.w || 3) / (e.th || e.h || 2);
    if (h.choices) {
      if (!Array.isArray(h.choices) || h.choices.length !== 3) E(c, 'choices: exactly 3 ({fr,en}, first = right)');
      else h.choices.forEach((o, i) => { for (const L of ['fr', 'en']) { if (!isStr(o && o[L])) E(c, `choice ${i} missing ${L}`); else { if (words(o[L]) > 6) E(c, `choice ${i} ${L} > 6 words`); if (BAN.test(o[L])) E(c, `choice ${i} ${L} recycles caption wording`); } } });
      const fr = (h.choices || []).map(o => o && o.fr); if (new Set(fr).size !== fr.length) E(c, 'duplicate choices');
    }
    if (h.skip) { if (!h.choices) E(c, 'skip needs authored choices'); else stats.choiceOnly++; continue; }
    stats.hot++;
    const zs = [h].concat((h.alt || []).filter(a => a.hit));
    if (!zs.every(z => typeof z.x === 'number' && typeof z.y === 'number' && typeof z.r === 'number' && z.r > 0)) { E(c, 'x, y, r numbers'); continue; }
    const area = zs.reduce((s, z) => s + Math.PI * z.r * z.r * ratio / 1e4, 0); stats.maxArea = Math.max(stats.maxArea, area);
    if (area > 0.08) E(c, `right zones cover ${(area * 100).toFixed(1)} % of the image (max 8 %)`);
    const centre = zs.some(z => Math.hypot(50 - z.x, (50 - z.y) / ratio) <= z.r + 3);
    if (centre) { stats.centreWins++; if (!h.central) E(c, 'a tap at the centre wins: shrink/move the zone or mark central (with choices)'); else if (!h.choices) E(c, 'central needs choices (2nd gesture)'); }
    if (h.central) stats.central++;
  }
  console.log(`Voir hotspots: ${stats.n} entries · ${stats.hot} tap targets (max area ${(stats.maxArea * 100).toFixed(1)} %) · centre tap wins on ${stats.centreWins} (all central → named 2nd) · ${stats.choiceOnly} name-only`);
}

// Choice bias (critique passe 4, N3): the right option (choices[0]) must not be the longest in more than ~1/3 of the sets
// (error above 40 %), and must not be the only option sharing a significant word with the fiche / A5 entry title.
function checkChoiceBias(H, O) {
  const STOP = new Set(['avec', 'dans', 'pour', 'entre', 'autres', 'leurs', 'chez', 'selon', 'apres', 'aprés', 'sans']);
  const stems = s => new Set(String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').split(/[^a-z]+/).filter(w => w.length >= 5 && !STOP.has(w)).map(w => w.slice(0, 6)));
  const title = k => { const f = (O.fiches || []).find(x => x.id === k); if (f) return f.title; const r = ((O.A && O.A.recog) || []).find(x => x.id === k); return r ? r.title : ''; };
  const n = { sets: 0, fr: 0, en: 0 };
  for (const [k, h] of Object.entries(H)) {
    const c = h.choices; if (!Array.isArray(c) || c.length !== 3) continue; n.sets++;
    for (const L of ['fr', 'en']) { const len = c.map(o => String(o && o[L] || '').length); if (len[0] > len[1] && len[0] > len[2]) n[L]++; }
    const T = stems(title(k)), hit = o => [...stems(o && o.fr)].some(w => T.has(w));
    if (T.size && hit(c[0]) && !hit(c[1]) && !hit(c[2])) E('voirHotspots.' + k, `right choice « ${c[0].fr} » repeats a word of the title « ${title(k)} »`);
  }
  if (!n.sets) return;
  const pct = L => Math.round(100 * n[L] / n.sets);
  console.log(`Voir choices: right option is the longest in ${n.fr}/${n.sets} sets FR (${pct('fr')} %), ${n.en}/${n.sets} EN (${pct('en')} %) · target ≤ 1/3`);
  for (const L of ['fr', 'en']) if (n[L] / n.sets > 0.4) E('voirHotspots', `right option is the longest in ${pct(L)} % of ${L.toUpperCase()} choice sets (> 40 %): rebalance lengths`);
}

const PARTIAL = process.argv.includes('--partial');
const ARGS = process.argv.slice(2).filter(a => a !== '--partial');
const files = ARGS.length ? ARGS : fs.readdirSync(path.join(__dirname, '..', 'data')).filter(f => f.endsWith('.js')).sort((a, b) => (a.startsWith('ext-') - b.startsWith('ext-')) || a.localeCompare(b)).map(f => path.join('data', f));
const sandbox = { console }; sandbox.globalThis = sandbox; vm.createContext(sandbox);
for (const f of files) {
  const code = fs.readFileSync(f, 'utf8');
  try { vm.runInContext(code, sandbox, { filename: f }); }
  catch (e) { E(f, 'JS ERROR: ' + e.message); }
}
const OPH = sandbox.OPH || {};
if (OPH.fiches) checkFiches(OPH.fiches, OPH);
let qs = null; if (OPH.quiz) qs = checkQuiz(OPH.quiz);
if (OPH.quiz) checkQuizBias(OPH.quiz);
if (OPH.cases) checkCases(OPH.cases);
if (OPH.A) checkModuleA(OPH.A);
if (OPH.images) checkImages(OPH.images);
if (OPH.capsules) checkCapsules(OPH.capsules);
if (OPH.glossary) checkGlossary(OPH.glossary);
if (OPH.photos) checkPhotos(OPH.photos, OPH.photoPairs);
if (OPH.voirHotspots) checkVoirHotspots(OPH.voirHotspots);
if (OPH.voirHotspots) checkChoiceBias(OPH.voirHotspots, OPH);

console.log('Files:', files.join(', '));
if (OPH.fiches) console.log('Fiches:', OPH.fiches.length);
if (qs) console.log('Quiz:', OPH.quiz.length, 'by module', JSON.stringify(qs.byMod), '| answer positions', qs.pos.join('/'), '| levels', JSON.stringify(qs.lv), '| traps', qs.traps);
if (OPH.cases) console.log('Cases:', OPH.cases.length);
if (warnings.length) { console.log(`\n${warnings.length} warning(s):`); warnings.forEach(w => console.log('  - ' + w)); }
if (errors.length) { console.log(`\n${errors.length} ERROR(s):`); errors.forEach(e => console.log('  ✗ ' + e)); process.exit(1); }
console.log('\nOK');
