#!/usr/bin/env node
/* Search index for « Demande à Ocelle » (src/chat.js), built from Ocelle's own content.
   Called by tools/build_web.py ONLY when the chat is enabled (CHAT_ENDPOINT set in src/chat.js).

     node tools/build_chat_index.js <out_dir>     → <out_dir>/chat-index-fr.json, chat-index-en.json

   Sources: fiches (cornée, glaucome, rétine; 4 screens each), module A micro-fiches (physiology, exam, imaging, A5),
   foundation capsules, Investigations, glossary. EN = the same data with the data-en overlays merged by the real
   I18N.applyContent() (src/i18n.js run in a sandbox), so the index follows what the site shows.
   Passage = { r: route (e.g. "g-crise/decider"), t: page title · screen, x: text (≤ ~90 words), e: English topic (PubMed hint) }. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const OUT = process.argv[2] || path.join(ROOT, 'site');

function dataOrder() {
  const py = fs.readFileSync(path.join(ROOT, 'tools', 'build.py'), 'utf8');
  const m = /data_order\s*=\s*\[([\s\S]*?)\]/.exec(py);
  return m[1].split(',').map(s => s.trim().replace(/^'|'$/g, '')).filter(Boolean);
}

function load(lang) {
  const store = { 'oph-lang': lang };
  const ctx = {
    console, Object, Array, JSON, Math, String, Number, RegExp, Date, URLSearchParams,
    location: { search: '?lang=' + lang, hash: '', href: 'https://ocelle.net/?lang=' + lang, hostname: 'ocelle.net' },
    localStorage: { getItem: k => store[k] == null ? null : store[k], setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; } },
    navigator: { languages: [lang], language: lang },
    document: { documentElement: { lang: lang, classList: { add() { }, contains() { return false; } }, setAttribute() { } }, querySelector() { return null; } }
  };
  ctx.window = ctx; ctx.globalThis = ctx; ctx.self = ctx;
  vm.createContext(ctx);
  const run = (p) => { try { vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: path.basename(p) }); } catch (e) { console.warn('chat-index: skipped ' + path.relative(ROOT, p) + ' (' + e.message + ')'); } };
  for (const n of dataOrder()) { if (n === 'catalog') continue; const p = path.join(ROOT, 'data', n + '.js'); if (fs.existsSync(p)) run(p); }
  if (lang === 'en') for (const f of fs.readdirSync(path.join(ROOT, 'data-en')).filter(f => f.endsWith('.js')).sort()) run(path.join(ROOT, 'data-en', f));
  run(path.join(ROOT, 'src', 'i18n.js')); // defines I18N + t() and applies the EN overlays (I18N.applyContent) at load
  return ctx;
}

const SKIP = /^(id|_en|photo|photos|img|image|images|figure|figures|media|type|pattern|kind|src|url|page_url|n|nk|order|module|tags|x|y|r|level|answer|tool|practice|group|urgency|full|topic|phase|thumb|svg|hotspots|credit|sources|levers|cont|yesGo|noGo|decisive|en)$/;
function clean(s) {
  return String(s).replace(/<[^>]+>/g, ' ').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim();
}
/* every human-readable string under o (depth-first, document order), keys in SKIP ignored */
function texts(o, lang, out) {
  out = out || [];
  if (o == null) return out;
  if (typeof o === 'string') { const c = clean(o); if (c && /[A-Za-zÀ-ÿ]/.test(c)) out.push(c); return out; }
  if (typeof o !== 'object') return out;
  if (Array.isArray(o)) { o.forEach(v => texts(v, lang, out)); return out; }
  if (('fr' in o || 'en' in o) && Object.keys(o).every(k => k === 'fr' || k === 'en')) return texts(o[lang] != null ? o[lang] : o.fr, lang, out);
  for (const k of Object.keys(o)) if (!SKIP.test(k)) texts(o[k], lang, out);
  return out;
}
const words = s => s.split(/\s+/).filter(Boolean).length;
/* group consecutive strings into passages of ≤ MAX words (a long single string is cut on sentence ends) */
const MAX = 90;
function chunks(list) {
  const out = []; let cur = [], n = 0;
  const flush = () => { if (cur.length) out.push(cur.join(' · ')); cur = []; n = 0; };
  for (let s of list) {
    let w = words(s);
    if (w > MAX) {
      flush();
      const parts = s.split(/(?<=[.;!?])\s+/); let buf = '';
      for (const p of parts) { if (buf && words(buf + ' ' + p) > MAX) { out.push(buf); buf = p; } else buf = buf ? buf + ' ' + p : p; }
      if (buf) out.push(buf);
      continue;
    }
    if (n + w > MAX) flush();
    cur.push(s); n += w;
  }
  flush();
  return out;
}

function build(lang) {
  const C = load(lang), O = C.OPH || {}, t = C.t || (k => k), pick = v => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[lang] != null ? v[lang] : v.fr) : v;
  const title = o => lang === 'en' && !o._en && o.en ? o.en : (pick(o.title) || o.id);
  const P = [];
  const add = (route, ttl, list, en) => { chunks(list).forEach(x => P.push({ r: route, t: ttl, x, e: en || '' })); };
  const hy = k => (O.hy && O.hy[k]) || null;
  const SCREEN = { voir: t('f.see'), comprendre: t('f.understand'), decider: t('f.decide'), entrainer: t('f.train') };
  // fiches: one route per screen (#<id>/voir …), fields grouped as rendered by src/views.js
  (O.fiches || []).forEach(f => {
    const T = title(f), en = f.en || '';
    const h = hy(f.id) || {};
    add(f.id + '/voir', T + ' · ' + SCREEN.voir, [T + (en && lang === 'fr' ? ' (' + en + ')' : '')].concat(texts([f.definition, f.oneLiner, f.anatomy && f.anatomy.text, f.compare], lang)), en);
    add(f.id + '/comprendre', T + ' · ' + SCREEN.comprendre, texts([f.causal, h.essentials, f.mnemonic, f.risk, f.presentation], lang), en);
    add(f.id + '/decider', T + ' · ' + SCREEN.decider, texts([f.redFlags, f.cat, f.treatment, f.txCard, f.treatments, f.exam, f.ddx], lang), en);
    add(f.id + '/entrainer', T + ' · ' + SCREEN.entrainer, texts([f.pearls, h.triage, h.cues], lang), en);
  });
  // foundation capsules (#b-bases, #c-bases)
  (O.capsules || []).forEach(c => { if (c && c.id) add(c.id, title(c), texts(c, lang), c.en || ''); });
  // module A micro-fiches (#a-<section>/<entry>)
  const A = O.A || {};
  const EXAM_IMG = ['oct', 'topographie', 'champs-visuels', 'speculaire'];
  (A.physio || []).forEach(p => add('a-physiologie/' + p.id, title(p), texts([p, hy('phy-' + p.id) && hy('phy-' + p.id).essentials], lang), p.en));
  (A.exam || []).forEach(p => add((EXAM_IMG.indexOf(p.id) >= 0 ? 'a-imagerie/' : 'a-examen/') + p.id, title(p), texts([p, hy('ex-' + p.id) && hy('ex-' + p.id).essentials], lang), p.en));
  (A.recog || []).forEach(r => add('a-retine/' + r.id, title(r), texts([r, hy('a5-' + r.id) && hy('a5-' + r.id).essentials], lang), r.en));
  // Investigations (#inv-<id>)
  (O.inv || []).forEach(e => add('inv-' + e.id, pick(e.title), texts([e.why, e.how, e.normal, e.keys, e.pitfalls], lang), e.en_term || pick(e.title)));
  // glossary: each term links to the first fiche screen that uses it (else the search page)
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const fichePs = P.filter(p => /\/(voir|comprendre|decider)$/.test(p.r)).map(p => [p.r, norm(p.x)]);
  Object.keys(O.glossary || {}).forEach(term => {
    const nt = norm(term), hit = nt.length > 3 ? fichePs.find(p => p[1].indexOf(nt) >= 0) : null;
    P.push({ r: hit ? hit[0] : 'recherche', t: (lang === 'en' ? 'Glossary · ' : 'Glossaire · ') + term, x: term + ' : ' + clean(O.glossary[term]), e: '' });
  });
  return P;
}

fs.mkdirSync(OUT, { recursive: true });
for (const lang of ['fr', 'en']) {
  const P = build(lang);
  const body = JSON.stringify({ v: 1, lang, built: new Date().toISOString().slice(0, 10), p: P });
  fs.writeFileSync(path.join(OUT, 'chat-index-' + lang + '.json'), body);
  console.log('chat-index-' + lang + '.json: ' + P.length + ' passages, ' + Math.round(body.length / 1024) + ' KB');
}
