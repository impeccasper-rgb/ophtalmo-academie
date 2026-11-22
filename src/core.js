/* ===== Core: utilities, progress store, glossary, router, shell ===== */
'use strict';
var OPH = window.OPH = window.OPH || {};
OPH.fiches = OPH.fiches || []; OPH.quiz = OPH.quiz || []; OPH.cases = OPH.cases || [];
OPH.capsules = OPH.capsules || []; OPH.glossary = OPH.glossary || {}; OPH.photos = OPH.photos || {};
OPH.photoPairs = OPH.photoPairs || []; OPH.images = OPH.images || {}; OPH.bonus = OPH.bonus || {};
OPH.catalog = OPH.catalog || [];

var U = {
  esc: function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); },
  md: function (s) { return U.esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'); },
  $: function (sel, root) { return (root || document).querySelector(sel); },
  $$: function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); },
  clamp: function (v, a, b) { return Math.max(a, Math.min(b, v)); },
  shuffle: function (a, seed) { a = a.slice(); var r = seed == null ? Math.random : U.rng(seed); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; },
  rng: function (seed) { var s = seed >>> 0 || 1; return function () { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 1e9) / 1e9; }; },
  hash: function (str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; },
  reduced: function () { if (document.documentElement.classList.contains('no-motion')) return true; try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } },
  words: function (s) { return String(s || '').split(/\s+/).filter(Boolean).length; },
  /* words a learner actually sees in a region: skips closed <details> bodies, hidden nodes, SVG labels and decision trees (STYLE-PEDAGO budgets) */
  wordsVisible: function (root) {
    root = root || document.querySelector('[data-step-body]') || document.getElementById('view'); if (!root) return 0;
    var n = 0, w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), node;
    while ((node = w.nextNode())) {
      var el = node.parentElement, skip = false;
      for (var e = el; e && e !== root.parentElement; e = e.parentElement) {
        // prose only: controls, credits/licences, eyebrows and diagram labels are not counted
        if (e.hidden || e.getAttribute('aria-hidden') === 'true' || e.namespaceURI === 'http://www.w3.org/2000/svg' || e.hasAttribute('data-tree') || /(^| )(tree|credit|eyebrow|lab|tag|car-nav|kbd)( |$)/.test(e.getAttribute('class') || '') || /^(BUTTON|SUMMARY|NAV|SELECT|LABEL)$/.test(e.tagName)) { skip = true; break; }
        if (e.tagName === 'DETAILS' && !e.open && !(el.closest('summary') && el.closest('summary').parentElement === e)) { skip = true; break; }
      }
      if (skip || !el || (el.offsetParent === null && getComputedStyle(el).position !== 'fixed')) continue;
      n += U.words(node.textContent);
    }
    return n;
  },
  wordsDev: function () { try { return /^(localhost|127\.0\.0\.1)$/.test(location.hostname) || /[?&]dev=1/.test(location.search); } catch (e) { return false; } },
  plural: function (n, one, many) { return n + ' ' + (n > 1 ? many : one); },
  debounce: function (fn, ms) { var t; return function () { var a = arguments, self = this; clearTimeout(t); t = setTimeout(function () { fn.apply(self, a); }, ms); }; },
  toast: function (msg) { var el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); el.textContent = msg; document.body.appendChild(el); setTimeout(function () { el.remove(); }, 2600); }
};

/* ---------- labels ---------- */
var L = {
  tags: { urgent: 'Urgent', frequent: 'Fréquent', highyield: 'High yield', piege: 'Piège' },
  kinds: { cause: 'Cause', mecanisme: 'Mécanisme', lesion: 'Lésion', signe: 'Signe', complication: 'Complication' },
  phases: { observation: 'Observation', medical: 'Médical', laser: 'Laser', chirurgie: 'Chirurgie', suivi: 'Suivi', escalade: 'Escalade' },
  qtypes: { anatomie: 'Anatomie', physiopathologie: 'Physiopathologie', diagnostic: 'Diagnostic', image: 'Interprétation d’image', cat: 'Conduite à tenir' },
  modules: { A: 'Ophtalmologie générale', B: 'Cornée', C: 'Glaucome' },
  tag: function (t) { return '<span class="tag ' + t + '">' + (L.tags[t] || t) + '</span>'; }
};

/* Pedagogical order (never skip steps): foundations first, then simple → complex */
var ORDER = {
  B: ['c-secheresse', 'c-surface', 'c-erosion', 'c-bacterienne', 'c-atypiques', 'c-herpes', 'c-peripherie', 'c-pterygion', 'c-depots', 'c-keratocone', 'c-dystrophies', 'c-fuchs', 'c-greffe', 'c-brulure'],
  C: ['g-gpao', 'g-hto', 'g-gpn', 'g-papille', 'g-fermeture', 'g-crise', 'g-pxf', 'g-pigmentaire', 'g-neovasculaire', 'g-secondaires', 'g-cristallin', 'g-dev', 'g-postop']
};
var PREREQ = {
  'c-secheresse': ['b-bases', 'a-physiologie'], 'c-erosion': ['b-bases', 'c-secheresse'], 'c-bacterienne': ['b-bases', 'c-erosion'],
  'c-atypiques': ['c-bacterienne'], 'c-herpes': ['c-bacterienne'], 'c-pterygion': ['b-bases'], 'c-keratocone': ['b-bases', 'a-examen'],
  'c-fuchs': ['b-bases', 'a-physiologie'], 'c-greffe': ['c-fuchs', 'c-keratocone'], 'c-brulure': ['b-bases', 'c-erosion'],
  'g-gpao': ['c-bases', 'a-physiologie', 'a-imagerie'], 'g-hto': ['g-gpao'], 'g-gpn': ['g-gpao'], 'g-fermeture': ['c-bases', 'a-examen'],
  'g-crise': ['g-fermeture'], 'g-pxf': ['g-gpao'], 'g-pigmentaire': ['g-gpao'], 'g-neovasculaire': ['g-gpao', 'g-fermeture'],
  'g-secondaires': ['g-gpao'], 'g-postop': ['c-bases', 'g-gpao'],
  'c-surface': ['b-bases', 'c-secheresse'], 'c-peripherie': ['c-bacterienne', 'c-herpes'], 'c-depots': ['b-bases', 'a-examen'], 'c-dystrophies': ['c-erosion', 'c-fuchs'],
  'g-papille': ['g-gpao', 'a-imagerie'], 'g-cristallin': ['g-fermeture', 'g-secondaires', 'a-retine'], 'g-dev': ['g-gpao', 'g-fermeture']
};
var A_SECTIONS = [
  { id: 'a-anatomie', n: 'A1', title: 'Anatomie interactive', en: 'Ocular anatomy', blurb: 'Coupe de l’œil zoomable, couches de la cornée, angle, papille, annexes.' },
  { id: 'a-physiologie', n: 'A2', title: 'Physiologie et simulations', en: 'Physiology', blurb: 'Humeur aqueuse et PIO, film lacrymal, transparence cornéenne, réfraction, pupille.' },
  { id: 'a-examen', n: 'A3', title: 'Examen ophtalmologique', en: 'Eye examination', blurb: 'AV, pupilles et RAPD, lampe à fente, fluorescéine, tonométrie, gonioscopie…' },
  { id: 'a-imagerie', n: 'A4', title: 'Imagerie et interprétation', en: 'Imaging', blurb: 'Champs visuels, OCT, papille, topographie : normal vs pathologique.' },
  { id: 'a-retine', n: 'A5', title: 'Rétine, nerf optique et cristallin', en: 'Recognizing lens, retina and optic nerve findings', blurb: 'Cataractes, B-scan, décollements, DMLA, rétine vasculaire, papille œdémateuse, pupilles : reconnaître et savoir quoi faire.' }
];

/* ---------- dates ---------- */
var Dates = {
  defaults: { cornee: '2026-11-04', glaucome: '2026-11-09' },
  get: function (k) { return (Store.p.settings && Store.p.settings[k]) || Dates.defaults[k]; },
  parse: function (iso) { var p = iso.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); },
  custom: function () { var s = Store.p.settings || {}; return !!(s.cornee || s.glaucome); }, // learner entered rotation dates (public site: no countdown otherwise)
  daysTo: function (iso) { var t = new Date(); t.setHours(0, 0, 0, 0); return Math.round((Dates.parse(iso) - t) / 864e5); },
  fmt: function (iso) { try { return Dates.parse(iso).toLocaleDateString(Dates.loc(), { weekday: 'long', day: 'numeric', month: 'long' }); } catch (e) { return iso; } },
  short: function (d) { try { return d.toLocaleDateString(Dates.loc(), { weekday: 'short', day: 'numeric', month: 'short' }); } catch (e) { return ''; } },
  loc: function () { return window.I18N ? I18N.locale() : 'fr-CA'; },
  rel: function (iso) { var n = Dates.daysTo(iso); return n > 1 ? t('date.in', { n: n }) : n === 1 ? t('date.tomorrow') : n === 0 ? t('date.today') : t('date.past'); }
};

/* ---------- progress store (localStorage + per-user db document) ---------- */
var Store = {
  key: 'oph-r1-progress-v1',
  p: null,
  status: 'local',
  blank: function () { return { v: 1, answers: {}, visited: {}, read: {}, cases: {}, srs: {}, cloze: {}, games: {}, reports: [], unlocked: {}, settings: {}, last: '', t: 0 }; },
  init: function () {
    var p = null;
    try { var raw = localStorage.getItem(Store.key); if (raw) p = JSON.parse(raw); Store.status = 'local'; } catch (e) { Store.status = 'none'; }
    Store.p = Object.assign(Store.blank(), p || {});
    Store.remote();
  },
  merge: function (a, b) {
    var out = JSON.parse(JSON.stringify(a));
    ['answers', 'visited', 'read', 'cases', 'srs', 'cloze', 'games', 'inv', 'fstep'].forEach(function (k) {
      var src = b[k] || {}; out[k] = out[k] || {};
      Object.keys(src).forEach(function (id) {
        var x = out[k][id], y = src[id];
        var tx = typeof x === 'number' ? x : (x && x.t) || 0, ty = typeof y === 'number' ? y : (y && y.t) || 0;
        if (x == null || ty > tx) out[k][id] = y;
      });
    });
    var seenR = {}; out.reports = (a.reports || []).concat(b.reports || []).filter(function (r) { var k = r.t + '|' + r.where; if (seenR[k]) return false; seenR[k] = 1; return true; }).sort(function (x, y) { return x.t - y.t; }).slice(-50);
    out.unlocked = Object.assign({}, b.unlocked || {}, a.unlocked || {});
    Object.keys(b.unlocked || {}).forEach(function (m) { if (b.unlocked[m]) out.unlocked[m] = true; });
    if ((b.settings && b.settings.t || 0) > (a.settings && a.settings.t || 0)) out.settings = b.settings;
    if ((b.t || 0) > (a.t || 0) && b.last) out.last = b.last;
    if (b.streak && (!a.streak || (b.streak.t || 0) > (a.streak.t || 0))) out.streak = b.streak;
    out.t = Math.max(a.t || 0, b.t || 0);
    return out;
  },
  saveLocal: function () { try { localStorage.setItem(Store.key, JSON.stringify(Store.p)); if (Store.status === 'none') Store.status = 'local'; } catch (e) { Store.status = Store.ref ? Store.status : 'none'; } },
  touch: function () { Store.p.t = Date.now(); Store.saveLocal(); Store.pushSoon(); Shell.sync(); },
  ref: null, busy: false, dirty: false,
  remote: function () {
    if (!window.claude || typeof window.claude.use !== 'function') return;
    Promise.all([window.claude.use('db'), window.claude.use('user')]).then(function (r) {
      var db = r[0], user = r[1];
      if (!db || !user) return;
      return user.id().then(function (uid) {
        if (!uid) return;
        Store.db = db; Store.uid = uid;
        Store.ref = db.doc('data/users/' + uid + '/progress');
        return Store.ref.get().then(function (snap) {
          var d = snap.exists ? snap.data() : null, rp = d && d.p ? d.p : null;
          if (rp) { Store.p = Store.merge(Store.p, rp); Store.saveLocal(); if (window.Settings) Settings.apply(); }
          Store.status = 'sync'; Shell.render();
          if (['accueil', 'quiz', 'cas', 'module-a', 'module-b', 'module-c'].indexOf(Router.cur) >= 0) Router.refresh();
          // write only when this device holds progress the saved copy lacks
          if (Store.canon(Store.p) !== Store.canon(rp ? Object.assign(Store.blank(), rp) : Store.blank())) Store.push();
        });
      });
    }).catch(function () { Shell.sync(); });
  },
  canon: function (o) {
    if (o === null || typeof o !== 'object') return JSON.stringify(o);
    if (Array.isArray(o)) return '[' + o.map(Store.canon).join(',') + ']';
    return '{' + Object.keys(o).sort().map(function (k) { return JSON.stringify(k) + ':' + Store.canon(o[k]); }).join(',') + '}';
  },
  pushSoon: U.debounce(function () { Store.push(); }, 1500),
  push: function () {
    if (!Store.ref) return;
    if (Store.busy) { Store.dirty = true; return; }
    Store.busy = true; Store.dirty = false;
    Store.ref.set({ p: Store.p, t: Date.now(), v: 1 }).then(function () { Store.status = 'sync'; }).catch(function () { Store.status = 'local'; }).then(function () {
      Store.busy = false; Shell.sync(); if (Store.dirty) Store.push();
    });
  },
  answer: function (qid, ok, conf) {
    var a = Store.p.answers[qid] || { n: 0, c: 0 };
    a.n += 1; if (ok) a.c += 1; a.last = ok ? 1 : 0; a.conf = conf || 'sure'; a.t = Date.now();
    Store.p.answers[qid] = a; Store.touch();
  },
  visit: function (id) { Store.p.visited[id] = Date.now(); Store.p.last = id; Store.touch(); },
  markRead: function (id, on) { if (on) Store.p.read[id] = Date.now(); else delete Store.p.read[id]; Store.touch(); },
  reset: function () { Store.p = Store.blank(); Store.touch(); }
};

/* ---------- derived progress ---------- */
var Prog = {
  qs: function (m) { return OPH.quiz.filter(function (q) { return !m || q.module === m; }); },
  stat: function (m) {
    var list = Prog.qs(m), ans = 0, ok = 0, wrong = 0, shaky = 0;
    list.forEach(function (q) { var a = Store.p.answers[q.id]; if (a) { ans++; if (a.last) { ok++; if (a.conf === 'unsure') shaky++; } else wrong++; } });
    return { total: list.length, answered: ans, correct: ok, mastered: ok - shaky, shaky: shaky, wrong: wrong, acc: ans ? ok / ans : 0, mastery: list.length ? (ok - shaky) / list.length : 0 };
  },
  passed: function (m) { var s = Prog.stat(m); return s.answered >= Math.min(15, s.total) && s.acc >= 0.6; },
  unlocked: function (m) {
    return true; // public web/iOS product: every module open; the plan and quiz scores still suggest an order
    if (m === 'A') return true;
    if (Store.p.unlocked[m]) return true;
    return m === 'B' ? Prog.passed('A') : Prog.passed('B');
  },
  acuity: function (mastery) {
    var steps = [['6/60', '20/200'], ['6/48', '20/160'], ['6/38', '20/125'], ['6/30', '20/100'], ['6/24', '20/80'], ['6/19', '20/63'], ['6/15', '20/50'], ['6/12', '20/40'], ['6/9,5', '20/32'], ['6/7,5', '20/25'], ['6/6', '20/20']];
    var i = U.clamp(Math.floor(mastery * 10 + 1e-9), 0, 10); return { m: steps[i][0], i: steps[i][1], logmar: ((10 - i) / 10).toFixed(1) };
  },
  ficheDone: function (id) { return !!Store.p.read[id]; },
  ficheSeen: function (id) { return !!Store.p.visited[id]; },
  /* progress marker: shape + label, never colour alone (ring = not seen, half = started, check = done) */
  dot: function (st) { var lab = st === 'done' ? t('dot.done') : st === 'seen' ? t('dot.seen') : t('dot.none'); return '<i class="dot ' + (st || '') + '" role="img" aria-label="' + lab + '" title="' + lab + '"></i>'; }
};

/* ---------- data access ---------- */
var D = {
  fiche: function (id) { for (var i = 0; i < OPH.fiches.length; i++) if (OPH.fiches[i].id === id) return OPH.fiches[i]; return null; },
  ordered: function (m) { var ids = ORDER[m]; var byId = {}; OPH.fiches.forEach(function (f) { byId[f.id] = f; }); var out = ids.map(function (id) { return byId[id]; }).filter(Boolean); OPH.fiches.forEach(function (f) { if (f.module === m && ids.indexOf(f.id) < 0) out.push(f); }); return out; },
  capsule: function (id) { for (var i = 0; i < OPH.capsules.length; i++) if (OPH.capsules[i].id === id) return OPH.capsules[i]; return null; },
  cat: function (id) { if (!D._cat) { D._cat = {}; OPH.catalog.forEach(function (e) { D._cat[e.id] = e; }); } return D._cat[id] || null; },
  caseById: function (id) { for (var i = 0; i < OPH.cases.length; i++) if (OPH.cases[i].id === id) return OPH.cases[i]; return null; },
  title: function (id) {
    var f = D.fiche(id); if (f) return I18N.title(f);
    var c = D.capsule(id); if (c) return I18N.title(c);
    if (id === 'b-bases') return t('title.bbases'); if (id === 'c-bases') return t('title.cbases');
    for (var i = 0; i < A_SECTIONS.length; i++) if (A_SECTIONS[i].id === id) return A_SECTIONS[i].title;
    return id;
  }
};

/* ---------- glossary auto-linking ---------- */
var Gloss = {
  re: null, map: {},
  build: function () {
    var keys = Object.keys(OPH.glossary || {});
    OPH.capsules.forEach(function (c) { (c.vocab || []).forEach(function (v) { if (!OPH.glossary[v.term]) OPH.glossary[v.term] = v.def; }); });
    keys = Object.keys(OPH.glossary).filter(function (k) { return k && k.length >= 2; });
    if (!keys.length) return;
    var variants = [];
    keys.forEach(function (k) {
      Gloss.map[k.toLowerCase()] = k;
      variants.push(k);
      if (k !== k.toUpperCase() && /^[a-zàâçéèêëîïôûùüÿœ]/.test(k)) variants.push(k.charAt(0).toUpperCase() + k.slice(1));
    });
    variants.sort(function (a, b) { return b.length - a.length; });
    var body = variants.map(function (v) { return v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|');
    try { Gloss.re = new RegExp('(^|[^\\p{L}\\p{N}])(' + body + ')(?![\\p{L}\\p{N}])', 'gu'); } catch (e) { Gloss.re = null; }
  },
  // link first occurrence of each term within a render scope
  link: function (html, scope) {
    if (!Gloss.re || !scope) return html;
    return html.split(/(<[^>]+>)/).map(function (part) {
      if (!part || part.charAt(0) === '<') return part;
      return part.replace(Gloss.re, function (m, pre, term) {
        var key = Gloss.map[term.toLowerCase()] || term;
        if (scope.has(key) || (scope.self && scope.self.indexOf(key.toLowerCase()) >= 0)) return m;
        scope.add(key);
        return pre + '<button type="button" class="gt" data-gt="' + U.esc(key) + '">' + term + '</button>';
      });
    }).join('');
  },
  scope: function (selfTerms) { var s = new Set(); s.self = (selfTerms || []).map(function (t) { return String(t).toLowerCase(); }); return s; },
  show: function (btn) {
    Gloss.hide(); Gloss.t0 = Date.now();
    var key = btn.getAttribute('data-gt'), def = OPH.glossary[key]; if (!def) return;
    var pop = document.createElement('div'); pop.className = 'pop'; pop.id = 'gt-pop'; pop.setAttribute('role', 'dialog');
    pop.innerHTML = '<b>' + U.esc(key) + '</b><div>' + U.md(def) + '</div><div class="xs muted">' + t('gloss.foot') + '</div>';
    document.body.appendChild(pop);
    var r = btn.getBoundingClientRect(), pw = pop.offsetWidth, ph = pop.offsetHeight;
    var x = U.clamp(r.left, 12, window.innerWidth - pw - 12), y = r.bottom + 8;
    if (y + ph > window.innerHeight - 12) y = Math.max(12, r.top - ph - 8);
    pop.style.left = x + 'px'; pop.style.top = y + 'px';
  },
  hide: function () { var p = document.getElementById('gt-pop'); if (p) p.remove(); }
};
// shorthand: markdown + glossary in scope
function T(s, scope) { return Gloss.link(U.md(s), scope); }

/* ---------- photos & lightbox ---------- */
var Photo = {
  src: function (id) { return 'img/' + id + '.jpg'; },
  /* licence: openly licensed sources (catalog3: license/author/source_url) or EyeRounds (CC BY-NC-ND 3.0 atlas, tutorials under EyeRounds terms) */
  licUrl: function (l) {
    var m = /^CC[ -]?(BY(?:[- ](?:NC|SA|ND))*)[ -]?(\d\.\d)?/i.exec(String(l || '').trim()); if (!m) return /^CC0|public domain|domaine public/i.test(l || '') ? 'https://creativecommons.org/publicdomain/zero/1.0/' : '';
    return 'https://creativecommons.org/licenses/' + m[1].toLowerCase().replace(/ /g, '-') + '/' + (m[2] || '4.0') + '/';
  },
  lic: function (e) {
    if (e.license) { var u = e.license_url || Photo.licUrl(e.license), sa = e.share_alike || /-SA\b|\bSA\b/i.test(e.license) ? ' (' + t('lic.sa') + ')' : ''; return (u ? '<a href="' + U.esc(u) + '" target="_blank" rel="noopener">' + U.esc(e.license) + '</a>' : U.esc(e.license)) + sa + (/^IMG3-/.test(e.id || '') ? ' · ' + t('lic.mod') : ''); }
    return e.cc === false ? t('photo.lic.eyerounds') : '<a href="https://creativecommons.org/licenses/by-nc-nd/3.0/" target="_blank" rel="noopener">CC BY-NC-ND 3.0</a>';
  },
  owner: function (e) { return e.license ? (e.author ? U.esc(e.author) : t('photo.author.unknown')) : '© EyeRounds.org, University of Iowa'; },
  srcUrl: function (e) { return e.page_url || e.source_url || ''; },
  credit: function (e, quiz) {
    return '<div class="credit">' + (quiz ? '' : U.esc(e.id) + ' · ') + Photo.owner(e) + ' · ' + Photo.lic(e) +
      (Photo.srcUrl(e) && !quiz ? ' · <a href="' + U.esc(Photo.srcUrl(e)) + '" target="_blank" rel="noopener">' + t('photo.source') + '</a>' : '') + '</div>';
  },
  card: function (p, opts) {
    opts = opts || {}; var e = D.cat(p.id); if (!e) return '';
    if (opts.brief && p.look) p = Object.assign({}, p, { look: '', reveal: [p.look].concat(p.reveal || []) }); // brief: the observation prompt sits behind « Révéler »
    if (opts.voir) return Photo.voirCard(p, e, opts.voir);
    var rid = 'rv-' + p.id + '-' + Math.floor(Math.random() * 1e6);
    // in English, an untranslated photo caption falls back to the translated catalogue title
    var cap = (window.I18N && I18N.lang === 'en' && p.caption && !p._en && e._en) ? e.title : (p.caption || e.title);
    return '<figure class="ph-card" style="margin:0">' +
      '<button type="button" class="ph-img" data-act="lightbox" data-id="' + e.id + '" data-cap="' + U.esc(cap) + '"' + (opts.quiz ? ' data-quiz="1"' : '') + ' aria-label="' + U.esc(t('photo.enlarge', { c: cap })) + '">' +
      '<img loading="lazy" decoding="async" src="' + Photo.src(e.id) + '" width="' + (e.tw || 440) + '" height="' + (e.th || 300) + '" alt="' + U.esc(cap) + '"></button>' +
      '<figcaption class="ph-b">' + (opts.hideCaption ? '' : '<div class="cap">' + U.md(cap) + '</div>') +
      (p.look ? '<div class="muted">' + U.md(p.look) + '</div>' : '') +
      (p.reveal && p.reveal.length ? '<div><button type="button" class="btn sm" data-act="reveal" data-target="' + rid + '" aria-expanded="false">' + t('photo.reveal') + '</button>' +
        '<ul class="reveal-list" id="' + rid + '" hidden>' + p.reveal.map(function (r) { return '<li>' + U.md(r) + '</li>'; }).join('') + '</ul></div>' : '') +
      Photo.credit(e, opts.quiz) + '</figcaption></figure>';
  },
  /* fiche « Voir » / module A5: a real Observe → Réponds → Révèle loop on the photo.
     With a hotspot (OPH.voirHotspots[photoId] = { x, y, r, label, alt[] } in % of the image): « Touche le signe qui compte »,
     hit-test → loop + sticker; miss → « pas ici », 2nd miss → hint area, 3rd miss or « Je ne trouve pas » → reveal without reward.
     Without a hotspot: a 3-option « Quel est le signe ? » built from this photo's sign and two other photos' signs. */
  voirHot: function (key, pid) { var O = window.OPH || {}; if (O.voirHotspot) return O.voirHotspot(key, pid); var h = (O.voirHotspots || {})[key]; return h && !h.skip && h.x != null && (!pid || h.photo === pid) ? h : null; },
  voirSign: function (p) { return p.sign || (p.reveal || [])[0] || p.look || ''; },
  voirOthers: function (p) {
    var me = Photo.voirSign(p), all = [], seen = {};
    Object.keys(OPH.photos || {}).forEach(function (k) { (OPH.photos[k] || []).forEach(function (q) { var s = Photo.voirSign(q); if (q.id !== p.id && s && s !== me && !seen[s] && U.words(s) <= 25) { seen[s] = 1; all.push(s); } }); });
    return U.shuffle(all, U.hash(p.id)).slice(0, 2);
  },
  voirCard: function (p, e, key) {
    var cap = (window.I18N && I18N.lang === 'en' && p.caption && !p._en && e._en) ? e.title : (p.caption || e.title);
    var hot = typeof key === 'string' ? Photo.voirHot(key, e.id) : null, sign = hot && I18N.pick(hot.label) || Photo.voirSign(p) || cap, rest = [p.look].concat(p.reveal || []).filter(function (x) { return x && x !== sign; });
    var w = String(sign).split(/\s+/); if (w.length > 25) { rest.unshift(sign); sign = w.slice(0, 25).join(' ') + '…'; }
    var hots = hot ? '<div class="inv-hots" hidden>' + [hot].concat(hot.alt || []).map(function (z, k) { return '<span class="inv-hot dec' + (k && !z.hit ? ' minor' : '') + '" style="left:' + z.x + '%;top:' + z.y + '%;--r:' + (z.r || hot.r || 8) + '"><i></i></span>'; }).join('') + '</div>' : '';
    var ask = hot
      ? '<div class="voir-ask"><span class="eyebrow">' + t('voir.observe') + '</span><b>' + t('voir.tap') + '</b><button type="button" class="btn ghost sm" data-act="voir-idk">' + t('voir.idk') + '</button></div>'
      : (function () { var opts = U.shuffle([sign].concat(Photo.voirOthers(p)), U.hash(p.id + 's')); return '<div class="voir-ask"><span class="eyebrow">' + t('voir.observe') + '</span><b>' + t('voir.which') + '</b><div class="opts">' + opts.map(function (o, k) { return '<button type="button" class="opt" data-act="voir-opt" data-ok="' + (o === sign ? 1 : 0) + '"><span class="key">' + (k + 1) + '</span><span>' + U.md(o) + '</span></button>'; }).join('') + '<button type="button" class="opt idk" data-act="voir-idk"><span class="key">?</span><span>' + t('voir.idk') + '</span></button></div></div>'; })();
    return '<figure class="ph-card voir-card" style="margin:0" data-voir data-photo="' + e.id + '"' + (hot ? ' data-hot="' + [hot.x, hot.y, hot.r || 8].join(',') + '" data-alt="' + U.esc(JSON.stringify(hot.alt || [])) + '"' : '') + '>' +
      '<div class="voir-media inv-media"' + (hot ? ' data-act="voir-tap" role="button" tabindex="0" aria-label="' + U.esc(t('voir.tap')) + '"' : '') + '>' +
      '<img loading="lazy" decoding="async" src="' + Photo.src(e.id) + '" width="' + (e.tw || 440) + '" height="' + (e.th || 300) + '" alt="' + U.esc(t('img.toid')) + '">' + hots + '</div>' +
      '<figcaption class="ph-b">' + ask +
      '<div class="voir-ans" hidden><div class="cap">' + U.md(cap) + '</div><div class="voir-sign" role="status"><div class="verdict"></div><div><b>' + t('voir.sign') + ' :</b> ' + U.md(sign) + '</div></div>' +
      (rest.length ? '<details class="acc"><summary>' + t('voir.more') + '</summary><ul class="reveal-list">' + rest.map(function (r) { return '<li>' + U.md(r) + '</li>'; }).join('') + '</ul></details>' : '') +
      '<button type="button" class="btn ghost xs" data-act="lightbox" data-id="' + e.id + '" data-cap="' + U.esc(cap) + '">' + t('lb.zoomin') + '</button></div>' +
      Photo.credit(e, true) + '</figcaption></figure>';
  },
  /* reveal: ok = answered right (sticker via .feedback.ok), otherwise no reward */
  voirReveal: function (vc, ok) {
    if (!vc || vc.getAttribute('data-done')) return; vc.setAttribute('data-done', ok ? 'ok' : 'shown');
    var ask = U.$('.voir-ask', vc), ans = U.$('.voir-ans', vc), hw = U.$('.inv-hots', vc), sg = U.$('.voir-sign', vc);
    U.$$('[data-act="voir-opt"], [data-act="voir-idk"]', vc).forEach(function (b) { b.disabled = true; });
    if (ask && !U.$('.opts', ask)) ask.hidden = true;
    if (ans) ans.hidden = false;
    if (sg) { sg.className = 'voir-sign feedback ' + (ok ? 'ok' : 'neutral'); U.$('.verdict', sg).textContent = ok ? t('voir.ok') : t('voir.shown'); }
    U.$$('.voir-hint, .voir-miss', vc).forEach(function (x) { x.remove(); });
    if (hw) { hw.hidden = false; hw.parentNode.classList.add('revealed'); }
    var m = U.$('.voir-media', vc); if (m) { m.removeAttribute('role'); m.removeAttribute('tabindex'); m.removeAttribute('data-act'); }
  },
  voirTap: function (media, ev) {
    var vc = media.closest('[data-voir]'); if (!vc || vc.getAttribute('data-done')) return;
    var img = U.$('img', media), b = img.getBoundingClientRect(); if (!b.width) return;
    var px, py; if (ev && ev.clientX != null && (ev.clientX || ev.clientY)) { px = 100 * (ev.clientX - b.left) / b.width; py = 100 * (ev.clientY - b.top) / b.height; } else return;
    var h = vc.getAttribute('data-hot').split(',').map(Number), alt = []; try { alt = JSON.parse(vc.getAttribute('data-alt') || '[]'); } catch (e) { }
    var hit = function (x, y, r) { var dx = px - x, dy = (py - y) * b.height / b.width; return Math.sqrt(dx * dx + dy * dy) <= Math.max(r * 1.3, 6); };
    if (hit(h[0], h[1], h[2]) || alt.some(function (a) { return a && a.hit && hit(a.x, a.y, a.r || h[2]); })) { Photo.voirReveal(vc, true); return; }
    var sec = alt.filter(function (a) { return a && !a.hit && hit(a.x, a.y, a.r || h[2]); })[0];
    if (sec) { U.toast((sec.label ? I18N.pick(sec.label) + ' — ' : '') + t('voir.sec')); return; } // secondary finding: neutral, no miss counted
    var n = (+vc.getAttribute('data-miss') || 0) + 1; vc.setAttribute('data-miss', n);
    var mk = document.createElement('span'); mk.className = 'voir-miss'; mk.setAttribute('aria-hidden', 'true'); mk.textContent = t('voir.miss'); mk.style.left = px + '%'; mk.style.top = py + '%';
    U.$$('.voir-miss', media).forEach(function (x) { x.remove(); }); media.appendChild(mk);
    if (n === 2 && !U.$('.voir-hint', media)) { var hr = Math.max(h[2] * 3, 14), off = (U.hash(vc.getAttribute('data-photo')) % 2 ? 1 : -1) * h[2]; var hc = document.createElement('span'); hc.className = 'voir-hint'; hc.setAttribute('aria-hidden', 'true'); hc.style.left = (h[0] + off) + '%'; hc.style.top = (h[1] - off / 2) + '%'; hc.style.setProperty('--r', hr); media.appendChild(hc); U.toast(t('voir.hint')); }
    if (n >= 3) Photo.voirReveal(vc, false);
  },
  gallery: function (list, opts) { if (!list || !list.length) return ''; return '<div class="gallery">' + list.map(function (p) { return Photo.card(p, opts); }).join('') + '</div>'; },
  opener: null,
  open: function (id, cap, quiz) {
    Photo.opener = document.activeElement;
    var e = D.cat(id); if (!e) return;
    var lb = U.$('#lightbox');
    lb.innerHTML = '<div class="lb-top"><span>' + U.md(cap || e.title) + '</span><button type="button" class="btn sm" data-act="lb-close">' + t('lb.close') + '</button></div>' +
      '<div class="lb-img"><img src="' + Photo.src(id) + '" alt="' + U.esc(cap || e.title) + '"></div>' +
      '<div class="lb-bot"><span class="xs">' + (quiz ? t('lb.hidden') : U.esc(e.id) + ' · ' + t('lb.srccap') + U.esc(e.caption) + (e.dossier ? ' · ' + t('lb.srccase') + U.esc(e.dossier) : '')) + '</span><span class="xs">' + Photo.owner(e) + ' · ' + Photo.lic(e) + (Photo.srcUrl(e) && !quiz ? ' · <a href="' + U.esc(Photo.srcUrl(e)) + '" target="_blank" rel="noopener">' + t('photo.source') + '</a>' : '') + '</span></div>';
    lb.hidden = false; U.$('[data-act="lb-close"]', lb).focus();
  },
  openFig: function (fig) {
    Photo.opener = document.activeElement;
    if (!fig) return;
    var body = U.$('.fig-body', fig), cap = U.$('.fig-cap > span', fig); if (!body) return;
    var lb = U.$('#lightbox');
    lb.innerHTML = '<div class="lb-top"><span>' + (cap ? cap.innerHTML : '') + '</span><span class="row" style="gap:6px"><button type="button" class="btn sm" data-act="lb-zoom" data-z="-1" aria-label="' + t('lb.zoomout') + '">−</button><button type="button" class="btn sm" data-act="lb-zoom" data-z="1" aria-label="' + t('lb.zoomin') + '">+</button><button type="button" class="btn sm" data-act="lb-close">' + t('lb.close') + '</button></span></div>' +
      '<div class="lb-fig"><div class="lb-fig-in">' + body.innerHTML + '</div></div>' +
      '<div class="lb-bot"><span class="xs">' + t('lb.schema') + '</span><span class="xs">' + t('lb.help') + '</span></div>';
    lb.hidden = false;
    Photo.zoom(window.innerWidth < 700 ? 2 : 1);
    try { Figures.hydrate(lb); } catch (e) { }
    U.$('[data-act="lb-close"]', lb).focus();
  },
  zoom: function (z) {
    var lb = U.$('#lightbox'), inner = U.$('.lb-fig-in', lb); if (!inner) return;
    z = Math.max(1, Math.min(4, z)); lb.setAttribute('data-z', String(z));
    inner.style.width = (z * 100) + '%';
  },
  close: function () { var lb = U.$('#lightbox'); if (!lb || lb.hidden) return; lb.hidden = true; lb.innerHTML = ''; var o = Photo.opener; Photo.opener = null; if (o && document.body.contains(o) && o.focus) { try { o.focus({ preventScroll: true }); } catch (e) { } } }
};

/* ---------- router ---------- */
var Views = {};
var Router = {
  cur: '',
  alias: { home: 'accueil', learn: 'apprendre', cases: 'cas', 'case': 'cas', review: 'reviser', progress: 'progression', flashcards: 'cartes', search: 'recherche', mcq: 'quiz' },
  parse: function () {
    var h = (location.hash || '').replace(/^#/, ''); try { h = decodeURIComponent(h); } catch (e) { }
    h = h.split('?')[0].replace(/\/+$/, '');
    if (Router.alias[h]) return Router.alias[h];
    var m = /^(?:cas|case|cases)[-\/](.+)$/.exec(h); // campaign deep links: #cas/b1, #case-b1, #cas-cas-b1
    if (m && !Views[h] && !D.caseById(h)) { var id = m[1].replace(/^cas-/, ''); if (D.caseById('cas-' + id)) return 'cas-' + id; if (D.caseById(id)) return id; }
    m = /^(?:fiche|topic)[-\/](.+)$/.exec(h); if (m && D.fiche(m[1])) return m[1];
    return h || 'accueil';
  },
  go: function (name) { if (location.hash === '#' + name) Router.refresh(); else location.hash = name; },
  tables: function (root) {
    U.$$('table.tbl', root).forEach(function (t) {
      var ths = U.$$('thead th', t).map(function (th) { return th.textContent.trim(); });
      if (ths.length < 3) return;
      t.classList.add('stackable');
      U.$$('tbody tr', t).forEach(function (tr) { U.$$('td', tr).forEach(function (td, i) { if (ths[i]) td.setAttribute('data-l', ths[i]); }); });
    });
  },
  refresh: function (soft) {
    var name = Router.parse();
    var view = Views.resolve(name);
    name = Router.parse(); // the resolver may canonicalise the route (bare fiche → #<fiche>/voir)
    Router.base = view.trackId || name;
    var host = U.$('#view');
    if (soft && name === Router.cur && host.getAttribute('data-keep') === '1') { Shell.render(); return; }
    Gloss.hide();
    Sims.teardown();
    var html = '';
    try { html = view.render(); } catch (e) { console.error(e); html = '<div class="page"><div class="callout red"><b>' + t('view.error') + '</b><span class="small">' + U.esc(e.message) + '</span></div></div>'; }
    host.innerHTML = html;
    host.setAttribute('data-keep', view.keep ? '1' : '0');
    if (name !== Router.cur) { window.scrollTo(0, 0); }
    Router.cur = name;
    Shell.render();
    Shell.close();
    try { Figures.hydrate(host); Sims.hydrate(host); if (view.after) view.after(host); } catch (e) { console.error(e); }
    Router.tables(host);
    if (view.track !== false && name !== 'accueil') Store.visit(view.trackId || name);
    document.title = (view.title ? view.title + ' · ' : '') + t('app.title');
  }
};

/* ---------- shell (rail, drawer, sync note) ---------- */
/* line icons for the four main entries (stroke = currentColor) */
var ICO = (function () {
  function svg(d) { return '<svg viewBox="0 0 20 20" width="20" height="20" focusable="false">' + d + '</svg>'; }
  return {
    home: svg('<path d="M3.5 9.5 10 3.8l6.5 5.7V16a1 1 0 0 1-1 1H12v-4.5H8V17H4.5a1 1 0 0 1-1-1z"/>'),
    book: svg('<path d="M10 5.6C8.6 4.5 6.5 4.1 3.5 4.1v10.7c3 0 5.1.4 6.5 1.6 1.4-1.2 3.5-1.6 6.5-1.6V4.1c-3 0-5.1.4-6.5 1.5zM10 5.6v10.8"/>'),
    cas: svg('<rect x="4.5" y="3.8" width="11" height="13.4" rx="1.6"/><path d="M7.8 3.8V2.9h4.4v.9M7.5 8.5h5M7.5 11.3h5M7.5 14.1h3"/>'),
    cards: svg('<rect x="3.2" y="6.2" width="9.8" height="11" rx="1.5"/><path d="M6.8 3.2h8.5a1.5 1.5 0 0 1 1.5 1.5v9.1"/>'),
    bars: svg('<path d="M4.5 16.5v-5M10 16.5V4.5M15.5 16.5v-8M3 17h14"/>'),
    scan: svg('<path d="M2.8 10s2.7-4.6 7.2-4.6 7.2 4.6 7.2 4.6-2.7 4.6-7.2 4.6S2.8 10 2.8 10z"/><circle cx="10" cy="10" r="2.3"/><path d="M3 3.5v-1h2M15 2.5h2v1M17 16.5v1h-2M5 17.5H3v-1"/>')
  };
})();

var Shell = {
  logo: function () {
    return '<svg class="logo" viewBox="0 0 1024 1024" aria-hidden="true"><rect width="1024" height="1024" rx="236" fill="#1F2CFF"/><path d="M302.4 302.8C314.8 296.5 351.2 274.4 377.2 264.8C403.2 255.3 431.3 248.9 458.3 245.5C485.4 242.2 513.4 242.1 539.7 244.8C566.0 247.6 592.3 253.6 616.1 262.0C639.9 270.4 662.7 282.0 682.7 295.3C702.7 308.6 720.6 324.7 735.9 341.7C751.1 358.7 763.8 377.8 774.2 397.3C784.6 416.8 792.5 437.6 798.2 458.8C803.8 480.0 807.4 502.1 808.0 524.5C808.6 546.9 807.2 570.3 801.9 593.1C796.5 615.9 788.3 639.8 775.9 661.2C763.5 682.6 746.9 704.3 727.5 721.8C708.0 739.3 683.9 755.1 659.2 766.0C634.6 776.9 606.2 784.1 579.6 787.2C553.0 790.2 524.9 788.5 499.7 784.4C474.5 780.4 450.2 772.0 428.2 762.9C406.3 753.8 386.5 741.9 368.0 729.8C349.5 717.6 332.8 704.3 317.2 690.0C301.5 675.7 286.7 660.7 273.9 644.1C261.0 627.5 248.8 609.6 240.1 590.2C231.3 570.8 224.2 549.4 221.6 527.9C219.1 506.3 219.8 482.8 224.9 460.8C230.0 438.9 239.7 416.1 252.4 396.2C265.1 376.4 282.5 357.3 301.3 341.5C320.1 325.8 342.6 312.2 365.1 301.7C387.7 291.2 424.8 282.5 436.7 278.7" fill="none" stroke="#D8FF3A" stroke-width="76" stroke-linecap="round" stroke-linejoin="round"/><circle cx="530" cy="500" r="96" fill="#D8FF3A"/></svg>';
  },
  navHtml: function () {
    var cur = Router.base || Router.cur;
    function a(id, label, extra, n) {
      var dot = Prog.ficheDone(id) ? 'done' : (Prog.ficheSeen(id) ? 'seen' : '');
      return '<a href="#' + id + '" class="' + (cur === id ? 'on' : '') + '"' + (cur === id ? ' aria-current="page"' : '') + '>' + (n ? '<span class="n">' + n + '</span>' : '') + '<span>' + label + '</span>' + (extra || Prog.dot(dot)) + '</a>';
    }
    function p(id, ic, label, also) { var on = cur === id || (also || []).indexOf(cur) >= 0; return '<a href="#' + id + '" class="prim' + (on ? ' on' : '') + '"' + (on ? ' aria-current="page"' : '') + '><span class="ic" aria-hidden="true">' + ic + '</span><span>' + label + '</span></a>'; }
    var games = ['cartes', 'cartes-vocab', 'mots-troues', 'jeu-images', 'triage', 'associe', 'quiz', 'quiz-run'];
    var h = '<a class="brand" href="#accueil">' + Shell.logo() + '<span><b>' + t('brand.name') + '</b><span>' + t('brand.sub') + '</span></span></a>';
    h += '<nav class="nav" aria-label="' + t('nav.main') + '">';
    h += '<div class="prims">' + p('accueil', ICO.home, t('nav.home')) + p('apprendre', ICO.book, t('nav.learn')) + p('cas', ICO.cas, t('nav.cases')) + p('reviser', ICO.cards, t('nav.review'), games) + (Views.investigations ? p('investigations', ICO.scan, t('nav.inv'), Shell.invRoutes()) : '') + p('progression', ICO.bars, t('nav.progress')) + '</div>';
    var inA = A_SECTIONS.some(function (x) { return x.id === cur; }) || cur === 'module-a';
    h += '<details class="grp"' + (inA ? ' open' : '') + '><summary class="grp-h">' + t('nav.module', { m: 'A', name: L.modules.A }) + '</summary>';
    A_SECTIONS.forEach(function (x) { h += a(x.id, x.title, null, x.n); });
    h += '</details>';
    ['B', 'C'].forEach(function (m) {
      var unl = Prog.unlocked(m), cap = m === 'B' ? 'b-bases' : 'c-bases', list = D.ordered(m);
      var inM = cur === cap || cur === 'module-' + m.toLowerCase() || list.some(function (f) { return f.id === cur; });
      h += '<details class="grp"' + (inM ? ' open' : '') + '><summary class="grp-h">' + t('nav.module', { m: m, name: L.modules[m] }) + '</summary>' + (unl ? '' : '<div class="xs muted" style="padding:0 8px 4px">' + t('nav.locked', { p: m === 'B' ? 'A' : 'B' }) + '</div>');
      h += a('module-' + m.toLowerCase(), t('nav.overview'), ' ');
      h += a(cap, t('nav.foundations'), null, m + '0');
      list.forEach(function (f, i) { h += a(f.id, f.title, null, m + (i + 1)); });
      h += '</details>';
    });
    h += '<details class="grp"><summary class="grp-h">' + t('nav.more') + '</summary>' + a('atlas', t('nav.atlas'), ' ') + a('recherche', t('nav.search'), ' ') + a('express-b', t('nav.expressB'), ' ') + a('express-c', t('nav.expressC'), ' ') + a('image-du-jour', t('daily.title'), ' ') + a('sources', t('nav.sources'), ' ') + '</details>';
    h += '</nav>';
    h += '<div class="syncnote" id="syncnote"></div>';
    if (window.I18N) h += '<div class="lang-row">' + I18N.switchHtml() + '</div>';
    h += '<p class="xs muted disclaimer"><a href="#sources">' + t('disclaimer') + '</a></p>';
    return h;
  },
  tabHtml: function () {
    var cur = Router.base || Router.cur, games = ['cartes', 'cartes-vocab', 'mots-troues', 'jeu-images', 'triage', 'associe', 'quiz', 'quiz-run'];
    var tb = function (id, ic, label, also) { var on = cur === id || (also || []).indexOf(cur) >= 0 || (id === 'apprendre' && (D.fiche(cur) || /^(a-|b-bases|c-bases|module-)/.test(cur))); return '<a href="#' + id + '" class="' + (on ? 'on' : '') + '"' + (on ? ' aria-current="page"' : '') + '><span class="ic" aria-hidden="true">' + ic + '</span><span>' + label + '</span></a>'; };
    return tb('apprendre', ICO.book, t('nav.learn')) + tb('cas', ICO.cas, t('nav.cases')) + (Views.investigations ? tb('investigations', ICO.scan, t('nav.inv.short'), Shell.invRoutes()) : '') + tb('reviser', ICO.cards, t('nav.review'), games) + tb('progression', ICO.bars, t('nav.progress'));
  },
  invRoutes: function () { return Object.keys(Views).filter(function (k) { return /^(inv-|cas-images(\/|$))/.test(k); }).concat(['image-du-jour', 'cas-vedette']);
  },
  render: function () {
    U.$('#rail').innerHTML = Shell.navHtml();
    var tb = U.$('#tabbar'); if (tb) { tb.innerHTML = Shell.tabHtml(); tb.setAttribute('data-n', String(tb.children.length)); }
    var dp = U.$('#drawer .panel'); if (dp) dp.innerHTML = Shell.navHtml();
    Shell.top();
    Shell.sync();
  },
  /* translate the static topbar once (skeleton text is French) and add the language switch */
  top: function () {
    var tb = U.$('.topbar'); if (!tb || tb.getAttribute('data-i18n') === '1') return; tb.setAttribute('data-i18n', '1');
    var mb = U.$('[data-act="menu"]', tb); if (mb) { mb.textContent = t('nav.menu'); mb.setAttribute('aria-label', t('nav.menu.open')); mb.setAttribute('aria-expanded', 'false'); }
    var pnl = U.$('#drawer .panel'); if (pnl) { pnl.setAttribute('aria-modal', 'true'); pnl.setAttribute('aria-label', t('nav.menu')); }
    var lbx0 = U.$('#lightbox'); if (lbx0) lbx0.setAttribute('aria-modal', 'true');
    var sk = U.$('.skip-link'); if (sk) sk.textContent = t('a11y.skip');
    var br = U.$('.brand > span', tb); if (br) br.innerHTML = '<b>' + t('brand.name') + '</b><span>' + t('brand.sub') + '</span>';
    var tbar = U.$('#tabbar'); if (tbar) tbar.setAttribute('aria-label', t('nav.quick'));
    var lbx = U.$('#lightbox'); if (lbx) lbx.setAttribute('aria-label', t('lb.aria'));
    if (window.I18N && !U.$('.langsw', tb)) tb.insertAdjacentHTML('beforeend', I18N.switchHtml('top'));
  },
  sync: function () {
    var txt = Store.status === 'sync' ? ['ok', t('sync.sync')] : Store.status === 'local' ? ['ok', t('sync.local')] : ['warn', t('sync.none')];
    U.$$('#syncnote').forEach(function (el) { el.className = 'syncnote ' + txt[0]; el.innerHTML = '<i></i>' + txt[1]; });
  },
  open: function () { var d = U.$('#drawer'); d.hidden = false; U.$$('[data-act="menu"]').forEach(function (b) { b.setAttribute('aria-expanded', 'true'); }); var f = U.$('#drawer a'); if (f) f.focus(); },
  close: function () { var d = U.$('#drawer'); if (!d || d.hidden) return; d.hidden = true; var mb = U.$('.topbar [data-act="menu"]'); if (mb) { mb.setAttribute('aria-expanded', 'false'); if (d.contains(document.activeElement) || document.activeElement === document.body) mb.focus({ preventScroll: true }); } }
};

/* ---------- global events ---------- */
var Actions = {};
document.addEventListener('click', function (ev) {
  var t = ev.target;
  var gt = t.closest && t.closest('.gt');
  if (gt) { ev.preventDefault(); if (U.$('#gt-pop') && U.$('#gt-pop').getAttribute('data-for') === gt.getAttribute('data-gt')) { Gloss.hide(); return; } Gloss.show(gt); var p = U.$('#gt-pop'); if (p) p.setAttribute('data-for', gt.getAttribute('data-gt')); return; }
  if (!(t.closest && t.closest('#gt-pop'))) Gloss.hide();
  var el = t.closest && t.closest('[data-act]');
  if (!el) return;
  var act = el.getAttribute('data-act');
  if (act === 'skip') { ev.preventDefault(); var vw = U.$('#view'); if (vw) { vw.focus({ preventScroll: true }); vw.scrollIntoView({ block: 'start' }); } return; }
  if (act === 'menu') { Shell.open(); return; }
  if (act === 'close-drawer') { Shell.close(); return; }
  if (act === 'lightbox') { Photo.open(el.getAttribute('data-id'), el.getAttribute('data-cap'), el.getAttribute('data-quiz') === '1'); return; }
  if (act === 'lb-close') { Photo.close(); return; }
  if (act === 'voir-tap') { Photo.voirTap(el, ev); return; }
  if (act === 'voir-idk') { Photo.voirReveal(el.closest('[data-voir]'), false); return; }
  if (act === 'voir-opt') { var vc2 = el.closest('[data-voir]'), okk = el.getAttribute('data-ok') === '1'; U.$$('[data-act="voir-opt"]', vc2).forEach(function (b) { if (b.getAttribute('data-ok') === '1') b.classList.add('correct'); }); if (!okk) el.classList.add('wrong'); Photo.voirReveal(vc2, okk); return; }
  if (act === 'ph-reveal') { var vc = el.closest('[data-voir]'); if (vc) { var ask = U.$('.voir-ask', vc), ans = U.$('.voir-ans', vc), hw = U.$('.inv-hots', vc); if (ask) ask.hidden = true; if (ans) ans.hidden = false; if (hw) { hw.hidden = false; hw.parentNode.classList.add('revealed'); } var lb = U.$('[data-act="lightbox"]', vc); if (lb) { lb.removeAttribute('data-quiz'); var cp = U.$('.cap', vc); lb.setAttribute('data-cap', cp ? cp.textContent : ''); } } return; }
  if (act === 'figzoom') { Photo.openFig(el.closest('figure')); return; }
  if (act === 'lb-zoom') { var lbx = U.$('#lightbox'); Photo.zoom((+lbx.getAttribute('data-z') || 1) + (+el.getAttribute('data-z')) * 0.5); return; }
  if (act === 'reveal') { var tg = document.getElementById(el.getAttribute('data-target')); if (tg) { tg.hidden = !tg.hidden; el.setAttribute('aria-expanded', String(!tg.hidden)); el.textContent = tg.hidden ? I18N.t('photo.reveal') : I18N.t('photo.hide'); } return; }
  if (act === 'goto') { var sel = document.getElementById(el.getAttribute('data-target')); if (sel) sel.scrollIntoView({ behavior: U.reduced() ? 'auto' : 'smooth', block: 'start' }); return; }
  if (Actions[act]) Actions[act](el, ev);
});
document.addEventListener('keydown', function (ev) {
  if (ev.key === 'Escape') { Gloss.hide(); Photo.close(); Shell.close(); return; }
  // SVG structures with role=button (cornea layers, angle, disc, adnexa): Enter/Space act like a click (the eye explorer has its own handler)
  if ((ev.key === 'Enter' || ev.key === ' ') && ev.target && ev.target.namespaceURI === 'http://www.w3.org/2000/svg' && ev.target.getAttribute('role') === 'button' && !ev.target.hasAttribute('data-anat')) { ev.preventDefault(); ev.target.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true })); return; }
  // focus trap inside the open modal (lightbox, then drawer)
  if (ev.key === 'Tab') {
    var lb = U.$('#lightbox'), dr = U.$('#drawer'), box = lb && !lb.hidden ? lb : (dr && !dr.hidden ? U.$('.panel', dr) : null); if (!box) return;
    var f = U.$$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', box).filter(function (x) { return x.offsetParent !== null; }); if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (!box.contains(document.activeElement)) { ev.preventDefault(); first.focus(); }
    else if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
    else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
  }
});
window.addEventListener('hashchange', function () { Router.refresh(); });
window.addEventListener('scroll', function () { if (Date.now() - (Gloss.t0 || 0) > 400) Gloss.hide(); }, { passive: true }); // ignore the scroll caused by the tap itself
