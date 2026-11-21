/* ===== Learning layer: reading depth & display settings, high-yield cards, spaced repetition, games, progression ===== */
'use strict';

/* ---------- reading depth & display settings ---------- */
var DEPTHS = {
  1: { t: t('depth.1'), en: t('depth.1.en'), d: t('depth.1.d') },
  2: { t: t('depth.2'), en: t('depth.2.en'), d: t('depth.2.d') },
  3: { t: t('depth.3'), en: t('depth.3.en'), d: t('depth.3.d') }
};
var Settings = {
  hostTheme: undefined,
  get: function () {
    var s = Store.p.settings || {};
    return { depth: +s.depth || 1, size: s.size || 'm', theme: s.theme || 'auto', motion: s.motion !== false, mod: s.mod || '' };
  },
  set: function (k, v) {
    var s = Object.assign({}, Store.p.settings || {}); s[k] = v; s.t = Date.now();
    Store.p.settings = s; Settings.apply(); Store.touch();
  },
  apply: function () {
    var s = Settings.get(), r = document.documentElement;
    if (Settings.hostTheme === undefined) Settings.hostTheme = r.getAttribute('data-theme');
    r.setAttribute('data-depth', String(s.depth));
    r.setAttribute('data-size', s.size);
    if (s.theme === 'auto') { if (Settings.hostTheme) r.setAttribute('data-theme', Settings.hostTheme); else r.removeAttribute('data-theme'); }
    else r.setAttribute('data-theme', s.theme);
    r.classList.toggle('no-motion', !s.motion);
  }
};
function depthSeg(small) {
  var d = Settings.get().depth;
  return '<div class="seg depth-seg' + (small ? ' sm' : '') + '" role="radiogroup" aria-label="' + t('depth.aria') + '">' + [1, 2, 3].map(function (k) {
    return '<button type="button" role="radio" data-act="depth" data-v="' + k + '" aria-checked="' + (d === k) + '" aria-pressed="' + (d === k) + '" title="' + U.esc(DEPTHS[k].d) + '">' + DEPTHS[k].t + '</button>';
  }).join('') + '</div>';
}
Actions.depth = function (el) { Settings.set('depth', +el.getAttribute('data-v')); var y = window.scrollY; Router.refresh(true); Shell.render(); U.$$('[data-act="depth"]').forEach(function (b) { var on = b.getAttribute('data-v') === String(Settings.get().depth); b.setAttribute('aria-checked', on); b.setAttribute('aria-pressed', on); }); window.scrollTo(0, y); };
Actions.size = function (el) { Settings.set('size', el.getAttribute('data-v')); Router.refresh(true); };
Actions.theme = function (el) { Settings.set('theme', el.getAttribute('data-v')); Router.refresh(true); };
Actions.motion = function (el) { Settings.set('motion', el.getAttribute('data-v') === 'on'); Router.refresh(true); };
Actions['mv-open'] = function (el) { var mv = el.closest('.mv'); if (!mv) return; var on = !mv.classList.contains('open'); mv.classList.toggle('open', on); el.setAttribute('aria-expanded', String(on)); el.textContent = on ? t('mv.hide') : el.getAttribute('data-label'); Figures.hydrate(mv); };
function mvMore(need, label) { return '<button type="button" class="btn sm ghost mv-more" data-need="' + need + '" data-act="mv-open" data-label="' + U.esc(label) + '" aria-expanded="false">' + U.esc(label) + '</button>'; }
function dz(level, html) { return html ? (level > 1 ? '<div data-dz="' + level + '">' + html + '</div>' : html) : ''; }

/* ---------- high-yield helpers ---------- */
var HY = {
  get: function (id) { return (OPH.hy && OPH.hy[id]) || null; },
  title: function (id) {
    if (/^a5-/.test(id)) { var r = HY.recog(id.slice(3)); return r ? r.title : id; }
    if (/^phy-/.test(id)) { var p = ((OPH.A && OPH.A.physio) || []).filter(function (x) { return x.id === id.slice(4); })[0]; return p ? p.title : id; }
    if (/^ex-/.test(id)) { var e = ((OPH.A && OPH.A.exam) || []).filter(function (x) { return x.id === id.slice(3); })[0]; return e ? e.title : id; }
    return D.title(id);
  },
  href: function (id) { if (/^a5-/.test(id)) return 'a-retine'; if (/^phy-/.test(id)) return 'a-physiologie'; if (/^ex-/.test(id)) { var x = id.slice(3); return ['oct', 'topographie', 'champs-visuels', 'speculaire'].indexOf(x) >= 0 ? 'a-imagerie' : 'a-examen'; } return id; },
  mod: function (id) { if (/^(a5|phy|ex)-/.test(id)) return 'A'; if (id === 'b-bases' || /^c-/.test(id) && id !== 'c-bases') return 'B'; return 'C'; },
  recog: function (rid) { return ((OPH.A && OPH.A.recog) || []).filter(function (r) { return r.id === rid; })[0] || null; },
  keys: function (mod) { return Object.keys(OPH.hy || {}).filter(function (k) { return !mod || HY.mod(k) === mod; }); },
  essentials: function (id, title) {
    var h = HY.get(id); if (!h || !h.essentials) return '';
    return '<div class="hy-box"><div class="hy-h"><span class="hy-badge">High yield</span><b>' + U.esc(title || t('hy.title')) + '</b></div><ul class="hy-list">' + h.essentials.map(function (s) { return '<li>' + U.md(s) + '</li>'; }).join('') + '</ul></div>';
  },
  parseCloze: function (s) {
    var m = s.match(/\[\[([^\]]+)\]\]/); if (!m) return null;
    var parts = m[1].split('|').map(function (x) { return x.trim(); });
    return { before: s.slice(0, m.index), after: s.slice(m.index + m[0].length), answer: parts[0], ok: parts.map(function (x) { return x.toLowerCase(); }) };
  }
};

/* ---------- generic one-at-a-time runner ---------- */
function Runner(host, items, opts) {
  var st = { i: 0, ok: 0, done: [] };
  function head() { return '<div class="run-head"><span class="eyebrow">' + U.esc(opts.title) + '</span><span class="mono small">' + Math.min(st.i + 1, items.length) + ' / ' + items.length + '</span></div><div class="pbar"><i style="width:' + (100 * st.i / Math.max(1, items.length)) + '%"></i></div>'; }
  function draw() {
    if (st.i >= items.length) {
      var pct = items.length ? Math.round(100 * st.ok / items.length) : 0;
      host.innerHTML = '<div class="card stack run-end"><div class="eyebrow">' + U.esc(t('run.done', { t: opts.title })) + '</div><div class="acuity-big">' + st.ok + ' / ' + items.length + '</div><p class="small muted">' + (pct >= 80 ? t('run.p80') : pct >= 50 ? t('run.p50') : t('run.p0')) + '</p>' +
        (st.done.filter(function (d) { return !d.ok && d.ref; }).length ? '<div class="small"><b>' + t('run.torev') + '</b> ' + st.done.filter(function (d) { return !d.ok && d.ref; }).map(function (d) { return '<a href="#' + HY.href(d.ref) + '">' + U.esc(HY.title(d.ref)) + '</a>'; }).filter(function (v, k, a) { return a.indexOf(v) === k; }).join(' · ') + '</div>' : '') +
        '<div class="row"><button class="btn primary" data-again>' + t('run.again') + '</button>' + (opts.back ? '<a class="btn ghost" href="#' + opts.back + '">' + t('common.back') + '</a>' : '') + '</div></div>';
      if (opts.onEnd) opts.onEnd(st);
      return;
    }
    host.innerHTML = '<div class="run card">' + head() + '<div data-body></div></div>';
    opts.render(items[st.i], U.$('[data-body]', host), function (ok, ref) { st.done.push({ ok: ok, ref: ref }); if (ok) st.ok++; }, function () { st.i++; draw(); });
  }
  host.onclick = function (ev) { if (ev.target.closest('[data-again]')) { if (opts.reload) items = opts.reload(); st = { i: 0, ok: 0, done: [] }; draw(); } };
  draw();
}
function nextBtn(label) { return '<div class="row"><button type="button" class="btn primary" data-next>' + (label || t('common.next')) + '</button></div>'; }

/* ---------- mots troués (cloze) ---------- */
var Cloze = {
  pool: function (mod, onlyKey) {
    var out = [];
    HY.keys(mod).forEach(function (k) { if (onlyKey && k !== onlyKey) return; (OPH.hy[k].cloze || []).forEach(function (s, i) { var c = HY.parseCloze(s); if (c) out.push({ id: k + '#' + i, key: k, c: c }); }); });
    return out;
  },
  distractors: function (item, n) {
    var mod = HY.mod(item.key), all = Cloze.pool(mod).map(function (x) { return x.c.answer; }), seen = {}, ans = item.c.answer.toLowerCase();
    var cands = all.filter(function (a) { var l = a.toLowerCase(); if (seen[l] || item.c.ok.indexOf(l) >= 0 || l === ans) return false; seen[l] = 1; return true; });
    var isNum = /\d/.test(item.c.answer);
    cands.sort(function (a, b) { var sa = (/\d/.test(a) === isNum ? 0 : 10) + Math.abs(a.length - item.c.answer.length) / 4, sb = (/\d/.test(b) === isNum ? 0 : 10) + Math.abs(b.length - item.c.answer.length) / 4; return sa - sb; });
    return U.shuffle(cands.slice(0, 10)).slice(0, n);
  },
  render: function (item, body, record, next) {
    var opts = U.shuffle([item.c.answer].concat(Cloze.distractors(item, 3)));
    body.innerHTML = '<p class="cloze-s">' + U.esc(item.c.before) + '<span class="blank" data-blank>______</span>' + U.esc(item.c.after) + '</p>' +
      '<div class="chips cloze-opts">' + opts.map(function (o) { return '<button type="button" class="chip big" data-o="' + U.esc(o) + '">' + U.esc(o) + '</button>'; }).join('') + '<button type="button" class="chip big ghost" data-o="">' + t('quiz.idk') + '</button></div><div data-fb></div>';
    body.onclick = function (ev) {
      var b = ev.target.closest('[data-o]'); if (b && !body._done) {
        body._done = true; var v = b.getAttribute('data-o'), ok = !!v && item.c.ok.indexOf(v.toLowerCase()) >= 0;
        U.$$('[data-o]', body).forEach(function (x) { x.disabled = true; var xv = x.getAttribute('data-o'); if (xv && item.c.ok.indexOf(xv.toLowerCase()) >= 0) x.classList.add('correct'); else if (x === b) x.classList.add('wrong'); });
        var bl = U.$('[data-blank]', body); bl.textContent = item.c.answer; bl.classList.add(ok ? 'ok' : 'bad');
        Store.p.cloze = Store.p.cloze || {}; Store.p.cloze[item.id] = { ok: ok ? 1 : 0, t: Date.now() }; Store.touch();
        record(ok, item.key);
        U.$('[data-fb]', body).innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><div class="verdict">' + (ok ? t('quiz.v.ok') : U.esc(t('cloze.answer', { a: item.c.answer }))) + '</div><div class="small"><a href="#' + HY.href(item.key) + '">' + U.esc(HY.title(item.key)) + '</a></div>' + nextBtn() + '</div>';
        var nb = U.$('[data-next]', body); if (nb) nb.focus({ preventScroll: true });
        return;
      }
      if (ev.target.closest('[data-next]')) { body._done = false; next(); }
    };
  },
  start: function (host, mod, n, onlyKey, back) {
    var make = function () {
      var pool = Cloze.pool(mod, onlyKey), score = function (x) { var r = Store.p.cloze && Store.p.cloze[x.id]; return r ? (r.ok ? 2 : 0) : 1; };
      pool = U.shuffle(pool).sort(function (a, b) { return score(a) - score(b); });
      return pool.slice(0, n || 10);
    };
    var items = make();
    if (!items.length) { host.innerHTML = '<div class="empty">' + t('cloze.soon') + '</div>'; return; }
    Runner(host, items, { title: t('game.cloze'), render: Cloze.render, reload: make, back: back });
  }
};

/* ---------- flashcards with spaced repetition (Leitner) ---------- */
var SRS = {
  INT: [0, 0.5, 1, 2, 4, 8].map(function (d) { return d * 864e5; }),
  decks: { patron: t('deck.patron'), images: t('deck.images'), essentiel: t('deck.essentiel'), drapeaux: t('deck.drapeaux'), mnemo: t('deck.mnemo'), vocab: t('deck.vocab') },
  all: function () {
    if (SRS._all) return SRS._all;
    var out = [];
    OPH.fiches.forEach(function (f) {
      f.pearls.forEach(function (p, i) { out.push({ id: 'p:' + f.id + ':' + i, deck: 'patron', mod: f.module, ref: f.id, front: p.q, back: p.a }); });
      out.push({ id: 'r:' + f.id, deck: 'drapeaux', mod: f.module, ref: f.id, front: t('srs.redflags', { t: f.title }), list: f.redFlags });
      if (f.mnemonic) out.push({ id: 'm:' + f.id, deck: 'mnemo', mod: f.module, ref: f.id, front: f.mnemonic.title + ' (' + f.title + ')', back: f.mnemonic.text });
    });
    ((OPH.A && OPH.A.recog) || []).forEach(function (r) { if (r.pearl) out.push({ id: 'p:a5-' + r.id, deck: 'patron', mod: 'A', ref: 'a5-' + r.id, front: r.pearl.q, back: r.pearl.a }); });
    Object.keys(OPH.hy || {}).forEach(function (k) { var h = OPH.hy[k]; if (h.essentials) out.push({ id: 'e:' + k, deck: 'essentiel', mod: HY.mod(k), ref: k, front: t('srs.essential', { t: HY.title(k) }), list: h.essentials }); });
    var keyTitle = function (k) { return /^a5-/.test(k) ? HY.title(k) : D.fiche(k) ? D.fiche(k).title : null; };
    Object.keys(OPH.photos || {}).forEach(function (k) {
      var tt = keyTitle(k); if (!tt) return;
      (OPH.photos[k] || []).forEach(function (p) { if (D.cat(p.id)) out.push({ id: 'i:' + k + ':' + p.id, deck: 'images', mod: /^a5-/.test(k) ? 'A' : D.fiche(k).module, ref: k, img: p.id, front: t('srs.whatimg'), hint: p.look, back: '**' + tt + '** : ' + p.caption, list: p.reveal }); });
    });
    var gl = OPH.glossary || {};
    Object.keys(gl).forEach(function (term) { out.push({ id: 'v:' + term, deck: 'vocab', mod: '', ref: null, front: term, back: gl[term] }); });
    SRS._all = out; return out;
  },
  state: function (id) { return (Store.p.srs || {})[id] || null; },
  due: function (c, now) { var s = SRS.state(c.id); return s && s.due <= now; },
  queue: function (decks, mod, newLimit) {
    var now = Date.now(), cards = SRS.all().filter(function (c) { return decks.indexOf(c.deck) >= 0 && (!mod || !c.mod || c.mod === mod); });
    var due = cards.filter(function (c) { return SRS.due(c, now); }).sort(function (a, b) { return SRS.state(a.id).due - SRS.state(b.id).due; });
    var fresh = U.shuffle(cards.filter(function (c) { return !SRS.state(c.id); })).slice(0, newLimit == null ? 15 : newLimit);
    return due.concat(fresh);
  },
  counts: function (decks, mod) {
    var now = Date.now(), cards = SRS.all().filter(function (c) { return decks.indexOf(c.deck) >= 0 && (!mod || !c.mod || c.mod === mod); });
    var r = { total: cards.length, seen: 0, due: 0, known: 0 };
    cards.forEach(function (c) { var s = SRS.state(c.id); if (s) { r.seen++; if (s.due <= now) r.due++; if (s.b >= 3) r.known++; } });
    return r;
  },
  rate: function (c, g) { // g: 0 = je ne savais pas, 1 = hésitant, 2 = je savais
    Store.p.srs = Store.p.srs || {};
    var s = Store.p.srs[c.id] || { b: 0, n: 0 };
    if (g === 0) s.b = 0; else if (g === 1) s.b = Math.max(1, s.b); else s.b = Math.min(5, s.b + 1);
    s.n++; s.t = Date.now(); s.due = s.t + (g === 0 ? 2 * 60e3 : g === 1 ? Math.max(6 * 36e5, SRS.INT[s.b] / 2) : SRS.INT[s.b]);
    Store.p.srs[c.id] = s; Store.touch();
  },
  face: function (c, back) {
    var scope = Gloss.scope();
    var img = c.img && D.cat(c.img) ? '<button type="button" class="fc-img" data-act="lightbox" data-id="' + c.img + '" data-cap="' + (back ? U.esc(D.cat(c.img).title) : t('img.hiddencap')) + '"' + (back ? '' : ' data-quiz="1"') + '><img src="' + Photo.src(c.img) + '" alt="' + t('img.clin') + '"></button>' : '';
    if (!back) return img + '<div class="fc-q">' + U.md(c.front) + '</div>' + (c.hint ? '<details class="fc-hint"><summary>' + t('srs.hint') + '</summary><span class="small">' + U.md(c.hint) + '</span></details>' : '');
    return img + '<div class="fc-q small muted">' + U.md(c.front) + '</div>' + (c.back ? '<div class="fc-a">' + T(c.back, scope) + '</div>' : '') + (c.list ? '<ul class="blist fc-list">' + c.list.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul>' : '') +
      (c.img && D.cat(c.img) ? Photo.credit(D.cat(c.img)) : '') + (c.ref ? '<div class="small"><a href="#' + HY.href(c.ref) + '">' + U.esc(t('srs.open', { t: HY.title(c.ref) })) + '</a></div>' : '');
  },
  run: function (host, cards, title, back) {
    if (!cards.length) { host.innerHTML = '<div class="card stack"><b>' + t('srs.empty') + '</b><span class="small muted">' + t('srs.empty.d') + '</span>' + (back ? '<a class="btn" href="#' + back + '">' + t('common.back') + '</a>' : '') + '</div>'; return; }
    var q = cards.slice(), st = { flipped: false, n: 0, known: 0, total: cards.length };
    function draw() {
      if (!q.length) { host.innerHTML = '<div class="card stack run-end"><div class="eyebrow">' + U.esc(t('srs.session.done', { t: title })) + '</div><div class="acuity-big">' + st.known + ' / ' + st.total + '</div><p class="small muted">' + t('srs.session.d') + '</p><div class="row">' + (back ? '<a class="btn primary" href="#' + back + '">' + t('srs.finish') + '</a>' : '') + '</div></div>'; return; }
      var c = q[0];
      host.innerHTML = '<div class="run card"><div class="run-head"><span class="eyebrow">' + U.esc(title) + ' · ' + U.esc(SRS.decks[c.deck] || '') + '</span><span class="mono small">' + t('srs.left', { n: q.length }) + '</span></div><div class="pbar"><i style="width:' + (100 * (st.total - q.length) / Math.max(1, st.total)) + '%"></i></div>' +
        '<div class="fc' + (st.flipped ? ' flipped' : '') + '" data-fc><div class="fc-face">' + SRS.face(c, st.flipped) + '</div></div>' +
        (st.flipped ? '<div class="fc-rate" role="group" aria-label="' + t('srs.rate.aria') + '"><button type="button" class="btn rate0" data-g="0"><kbd>1</kbd> ' + t('srs.r0') + '</button><button type="button" class="btn rate1" data-g="1"><kbd>2</kbd> ' + t('srs.r1') + '</button><button type="button" class="btn rate2" data-g="2"><kbd>3</kbd> ' + t('srs.r2') + '</button></div>' : '<div class="row"><button type="button" class="btn primary" data-flip><kbd>' + t('srs.space') + '</kbd> ' + t('srs.flip') + '</button></div>') + '</div>';
    }
    function rate(g) { var c = q.shift(); SRS.rate(c, g); if (g === 2) st.known++; if (g === 0) q.push(c); st.flipped = false; draw(); }
    host.onclick = function (ev) {
      if (ev.target.closest('[data-act="lightbox"]')) return;
      if (ev.target.closest('[data-flip]') || (!st.flipped && ev.target.closest('[data-fc]') && !ev.target.closest('details'))) { st.flipped = true; draw(); return; }
      var g = ev.target.closest('[data-g]'); if (g) rate(+g.getAttribute('data-g'));
    };
    var key = function (ev) { if (!document.body.contains(host) || /input|textarea|select/i.test((ev.target.tagName || ''))) return; if (!st.flipped && (ev.key === ' ' || ev.key === 'Enter')) { ev.preventDefault(); st.flipped = true; draw(); } else if (st.flipped && /^[123]$/.test(ev.key)) rate(+ev.key - 1); };
    document.addEventListener('keydown', key); host._cleanup = function () { document.removeEventListener('keydown', key); };
    draw();
    return host._cleanup;
  }
};

/* ---------- game: quel diagnostic ? (authentic images) ---------- */
var ImgGame = {
  pool: function (mod) {
    var out = [], byPhoto = {};
    Object.keys(OPH.photos || {}).forEach(function (k) {
      var m = /^a5-/.test(k) ? 'A' : (D.fiche(k) ? D.fiche(k).module : null); if (!m) return;
      (OPH.photos[k] || []).forEach(function (p) { (byPhoto[p.id] = byPhoto[p.id] || []).push(k); if (!mod || m === mod) out.push({ key: k, p: p, mod: m }); });
    });
    out.forEach(function (x) { x.keys = byPhoto[x.p.id]; });
    return out;
  },
  render: function (it, body, record, next) {
    var keys = Object.keys(OPH.photos).filter(function (k) { return (/^a5-/.test(k) ? 'A' : (D.fiche(k) ? D.fiche(k).module : null)) === it.mod && it.keys.indexOf(k) < 0; });
    var opts = U.shuffle([it.key].concat(U.shuffle(keys).slice(0, 3)));
    body.innerHTML = '<div class="game-img"><button type="button" class="ph-img" data-act="lightbox" data-id="' + it.p.id + '" data-cap="' + t('img.hiddencap') + '" data-quiz="1"><img src="' + Photo.src(it.p.id) + '" alt="' + t('img.toid') + '"></button></div><p class="small muted">' + t('game.img.q') + '</p>' +
      '<div class="opts">' + opts.map(function (k, j) { return '<button type="button" class="opt" data-k="' + k + '"><span class="key">' + (j + 1) + '</span><span>' + U.esc(HY.title(/^a5-/.test(k) ? k : k)) + '</span></button>'; }).join('') + '</div><div data-fb></div>';
    body.onclick = function (ev) {
      var b = ev.target.closest('[data-k]'); if (b && !body._done) {
        body._done = true; var k = b.getAttribute('data-k'), ok = it.keys.indexOf(k) >= 0;
        U.$$('[data-k]', body).forEach(function (x) { x.disabled = true; if (it.keys.indexOf(x.getAttribute('data-k')) >= 0) x.classList.add('correct'); else if (x === b) x.classList.add('wrong'); });
        record(ok, it.key);
        Store.p.games = Store.p.games || {}; var g = Store.p.games.img || { best: 0, cur: 0 }; g.cur = ok ? g.cur + 1 : 0; g.best = Math.max(g.best, g.cur); g.t = Date.now(); Store.p.games.img = g; Store.touch();
        U.$('[data-fb]', body).innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><div class="verdict">' + (ok ? t('quiz.v.ok') : U.esc(t('game.img.was', { t: HY.title(it.key) }))) + (g.cur > 1 ? t('game.streak', { n: g.cur }) : '') + '</div>' + Photo.card(it.p) + '<div class="small"><a href="#' + HY.href(it.key) + '">' + t('game.openfiche') + '</a> · ' + t('game.best', { n: g.best }) + '</div>' + nextBtn() + '</div>';
        return;
      }
      if (ev.target.closest('[data-next]')) { body._done = false; next(); }
    };
  },
  start: function (host, mod, n, back) {
    var make = function () { return U.shuffle(ImgGame.pool(mod)).slice(0, n || 10); };
    var items = make(); if (!items.length) { host.innerHTML = '<div class="empty">' + t('game.img.none') + '</div>'; return; }
    Runner(host, items, { title: t('game.img'), render: ImgGame.render, reload: make, back: back });
  }
};

/* ---------- game: urgent ou pas ? (triage) ---------- */
var URG = { urgent: t('urg.urgent'), rapide: t('urg.rapide'), routine: t('urg.routine') };
var Triage = {
  pool: function (mod) { var out = []; HY.keys(mod).forEach(function (k) { (OPH.hy[k].triage || []).forEach(function (t, i) { out.push({ id: k + '#' + i, key: k, t: t }); }); }); return out; },
  render: function (it, body, record, next) {
    body.innerHTML = '<p class="triage-s">' + U.esc(it.t.s) + '</p><p class="small muted">' + t('tri.q') + '</p><div class="triage-btns">' + ['urgent', 'rapide', 'routine'].map(function (u) { return '<button type="button" class="btn tri-' + u + '" data-u="' + u + '">' + URG[u] + '</button>'; }).join('') + '</div><div data-fb></div>';
    body.onclick = function (ev) {
      var b = ev.target.closest('[data-u]'); if (b && !body._done) {
        body._done = true; var ok = b.getAttribute('data-u') === it.t.u;
        U.$$('[data-u]', body).forEach(function (x) { x.disabled = true; if (x.getAttribute('data-u') === it.t.u) x.classList.add('correct'); else if (x === b) x.classList.add('wrong'); });
        record(ok, it.key);
        U.$('[data-fb]', body).innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><div class="verdict">' + (ok ? t('tri.ok') : t('tri.answer', { a: URG[it.t.u] })) + '</div><div>' + T(it.t.why, Gloss.scope()) + '</div><div class="small"><a href="#' + HY.href(it.key) + '">' + U.esc(HY.title(it.key)) + '</a></div>' + nextBtn() + '</div>';
        return;
      }
      if (ev.target.closest('[data-next]')) { body._done = false; next(); }
    };
  },
  start: function (host, mod, n, onlyKey, back) {
    var make = function () { var p = Triage.pool(mod).filter(function (x) { return !onlyKey || x.key === onlyKey; }); return U.shuffle(p).slice(0, n || 10); };
    var items = make(); if (!items.length) { host.innerHTML = '<div class="empty">' + t('tri.soon') + '</div>'; return; }
    Runner(host, items, { title: t('game.tri'), render: Triage.render, reload: make, back: back });
  }
};

/* ---------- game: associe (tap-to-match cues ↔ diagnoses) ---------- */
var Match = {
  start: function (host, mod, back) {
    function round() {
      var keys = U.shuffle(HY.keys(mod).filter(function (k) { return (OPH.hy[k].cues || []).length; })).slice(0, 5);
      if (keys.length < 3) { host.innerHTML = '<div class="empty">' + t('match.few') + '</div>'; return; }
      var left = U.shuffle(keys.map(function (k) { var c = OPH.hy[k].cues; return { k: k, t: c[Math.floor(Math.random() * c.length)] }; })), right = U.shuffle(keys.slice());
      var st = { sel: null, done: 0, miss: 0, t0: Date.now() };
      host.innerHTML = '<div class="run card"><div class="run-head"><span class="eyebrow">' + t('match.h') + '</span><span class="mono small" data-score>0 / ' + keys.length + '</span></div><p class="small muted">' + t('match.d') + '</p><div class="match"><div class="mcol">' +
        left.map(function (x) { return '<button type="button" class="mcard cue" data-cue="' + x.k + '">' + U.esc(x.t) + '</button>'; }).join('') + '</div><div class="mcol">' +
        right.map(function (k) { return '<button type="button" class="mcard dx" data-dx="' + k + '">' + U.esc(HY.title(k)) + '</button>'; }).join('') + '</div></div><div data-fb></div></div>';
      host.onclick = function (ev) {
        var c = ev.target.closest('[data-cue]'), d = ev.target.closest('[data-dx]');
        if (c && !c.disabled) { U.$$('[data-cue]', host).forEach(function (x) { x.classList.remove('sel'); }); c.classList.add('sel'); st.sel = c; return; }
        if (d && !d.disabled) {
          if (!st.sel) { U.toast(t('match.first')); return; }
          if (st.sel.getAttribute('data-cue') === d.getAttribute('data-dx')) { st.sel.disabled = d.disabled = true; st.sel.classList.remove('sel'); st.sel.classList.add('matched'); d.classList.add('matched'); st.sel = null; st.done++; }
          else { st.miss++; d.classList.add('nope'); setTimeout(function () { d.classList.remove('nope'); }, 450); }
          U.$('[data-score]', host).textContent = st.done + ' / ' + keys.length;
          if (st.done === keys.length) {
            var sec = Math.round((Date.now() - st.t0) / 1000);
            Store.p.games = Store.p.games || {}; var g = Store.p.games.match || { n: 0 }; g.n++; g.last = { miss: st.miss, sec: sec }; g.t = Date.now(); Store.p.games.match = g; Store.touch();
            U.$('[data-fb]', host).innerHTML = '<div class="feedback ok"><div class="verdict">' + t('match.done', { k: keys.length, s: sec, n: st.miss }) + '</div><div class="row"><button class="btn primary" data-round>' + t('match.new') + '</button>' + (back ? '<a class="btn ghost" href="#' + back + '">' + t('common.back') + '</a>' : '') + '</div></div>';
          }
          return;
        }
        if (ev.target.closest('[data-round]')) round();
      };
    }
    round();
  }
};

/* ---------- error reports ---------- */
var Report = {
  html: function (where) {
    return '<div class="report" data-report="' + U.esc(where) + '"><button type="button" class="btn sm ghost" data-act="report-open">' + t('rep.open') + '</button><div data-rform hidden><label class="small" for="rp-' + U.esc(where) + '">' + t('rep.q') + '</label><textarea id="rp-' + U.esc(where) + '" rows="3" maxlength="1200"></textarea><div class="row"><button type="button" class="btn sm primary" data-act="report-send">' + t('rep.save') + '</button><button type="button" class="btn sm ghost" data-act="report-cancel">' + t('common.cancel') + '</button></div></div></div>';
  },
  save: function (where, text) {
    var rec = { where: where, text: text, t: Date.now() };
    Store.p.reports = (Store.p.reports || []).concat([rec]).slice(-50); Store.touch();
    if (Store.db && Store.uid) { try { Store.db.collection('data/users/' + Store.uid).doc('report-' + rec.t).set(rec).catch(function () { }); } catch (e) { } }
  }
};
Actions['report-open'] = function (el) { var f = U.$('[data-rform]', el.closest('[data-report]')); f.hidden = false; el.hidden = true; U.$('textarea', f).focus(); };
Actions['report-cancel'] = function (el) { var r = el.closest('[data-report]'); U.$('[data-rform]', r).hidden = true; U.$('[data-act="report-open"]', r).hidden = false; };
Actions['report-send'] = function (el) { var r = el.closest('[data-report]'), ta = U.$('textarea', r), v = (ta.value || '').trim(); if (!v) { U.toast(t('rep.empty')); return; } Report.save(r.getAttribute('data-report'), v); ta.value = ''; Actions['report-cancel'](el); U.toast(t('rep.saved')); };
function reviewMeta(where) {
  return '<div class="meta-box"><div class="small">' + t('meta.review') + '</div>' + Report.html(where) + '</div>';
}

/* ---------- views: réviser hub and game routes ---------- */
function modSeg(cur) { return '<div class="seg" data-modseg role="radiogroup" aria-label="Module">' + [['', t('modseg.all')], ['A', t('modseg.A')], ['B', t('modseg.B')], ['C', t('modseg.C')]].map(function (x) { return '<button type="button" data-act="setmod" data-v="' + x[0] + '" aria-pressed="' + (cur === x[0]) + '">' + x[1] + '</button>'; }).join('') + '</div>'; }
Actions['quiz-wrong'] = function () { var mod = Settings.get().mod; Quiz.start(mod ? { modules: [mod], wrong: true } : { wrong: true }, t('rev.wrong')); };
Actions.setmod = function (el) { Settings.set('mod', el.getAttribute('data-v')); Router.refresh(true); };
var DAILY = ['patron', 'images', 'drapeaux', 'essentiel'];
Views.reviser = {
  title: t('nav.review'), render: function () {
    var mod = Settings.get().mod, c = SRS.counts(DAILY, mod), q = SRS.queue(DAILY, mod, 15);
    var nCloze = Cloze.pool(mod).length, nTri = Triage.pool(mod).length, nImg = ImgGame.pool(mod).length;
    var nErr = Prog.qs(mod).filter(function (qq) { var a = Store.p.answers[qq.id]; return a && (!a.last || a.conf === 'unsure'); }).length;
    var errTile = nErr ? '<button type="button" class="mode-tile err-tile" data-act="quiz-wrong"><span class="mode-ic" aria-hidden="true">↺</span><span class="stack" style="gap:2px"><b>' + t('rev.wrong') + '</b><span class="small muted">' + t('rev.wrong.d') + '</span><span class="xs mono">' + t('rev.nq', { n: nErr }) + '</span></span></button>' : '';
    var tile = function (href, k, ttl, d, n) { return '<a class="mode-tile" href="#' + href + '"><span class="mode-ic" aria-hidden="true">' + k + '</span><span class="stack" style="gap:2px"><b>' + ttl + '</b><span class="small muted">' + d + '</span>' + (n != null ? '<span class="xs mono">' + n + '</span>' : '') + '</span></a>'; };
    return '<div class="page">' + crumbs([[t('nav.home'), 'accueil'], [t('nav.review'), null]]) + '<div class="phead"><div class="eyebrow">' + t('rev.eyebrow') + '</div><h1>' + t('rev.h1') + '</h1><p class="muted" style="max-width:62ch">' + t('rev.lead') + '</p></div>' + modSeg(mod) +
      '<div class="today card"><div class="stack" style="gap:4px"><div class="eyebrow">' + t('rev.today') + '</div><b class="today-n">' + t('rev.ncards', { n: q.length }) + '</b><span class="small muted">' + t('rev.today.d', { due: c.due, fresh: Math.max(0, q.length - c.due), known: c.known, total: c.total }) + '</span></div><a class="btn primary" href="#cartes">' + t('rev.start') + '</a></div>' +
      '<div class="mode-grid">' + errTile +
      tile('cartes', '▤', t('game.cards'), t('rev.cards.d'), t('rev.ncards2', { n: c.total })) +
      tile('mots-troues', '▁', t('game.cloze'), t('rev.cloze.d'), t('rev.nphr', { n: nCloze })) +
      tile('jeu-images', '◉', t('game.img'), t('rev.img.d'), t('rev.nimg', { n: nImg })) +
      tile('triage', '⚑', t('game.tri'), t('rev.tri.d'), t('rev.nvig', { n: nTri })) +
      tile('associe', '⇄', t('game.match'), t('rev.match.d'), null) +
      tile('quiz', '✓', t('rev.mcq'), t('rev.mcq.d'), t('rev.nq', { n: OPH.quiz.length })) +
      tile('cas', '➜', t('rev.cases'), t('rev.cases.d'), t('rev.ncases', { n: OPH.cases.length })) +
      tile('cartes-vocab', 'Aa', t('deck.vocab'), t('rev.vocab.d'), t('rev.nterms', { n: Object.keys(OPH.glossary || {}).length })) +
      '</div></div>';
  }
};
function gameView(title, starter) { return { title: title, keep: false, render: function () { return '<div class="page">' + crumbs([[t('nav.review'), 'reviser'], [title, null]]) + modSeg(Settings.get().mod) + '<div data-game></div></div>'; }, after: function (host) { return starter(U.$('[data-game]', host), Settings.get().mod); } }; }
Views.cartes = gameView(t('game.cards'), function (el, mod) {
  var decks = DAILY.slice(), sel = '<div class="chips deck-chips">' + DAILY.map(function (d) { return '<button type="button" class="chip" data-deck="' + d + '" aria-pressed="true">' + SRS.decks[d] + '</button>'; }).join('') + '</div><div data-run></div>';
  el.innerHTML = sel; var run = U.$('[data-run]', el), cleanup = null;
  function go() { if (cleanup) cleanup(); cleanup = SRS.run(run, SRS.queue(decks, mod, 15), t('game.cards'), 'reviser'); }
  el.addEventListener('click', function (ev) { var b = ev.target.closest('[data-deck]'); if (!b) return; var d = b.getAttribute('data-deck'), i = decks.indexOf(d); if (i >= 0 && decks.length > 1) decks.splice(i, 1); else if (i < 0) decks.push(d); b.setAttribute('aria-pressed', String(decks.indexOf(d) >= 0)); go(); });
  go(); return function () { if (cleanup) cleanup(); };
});
Views['cartes-vocab'] = gameView(t('deck.vocab'), function (el, mod) { return SRS.run(el, SRS.queue(['vocab'], '', 20), t('deck.vocab'), 'reviser'); });
Views['mots-troues'] = gameView(t('game.cloze'), function (el, mod) { Cloze.start(el, mod, 10, null, 'reviser'); });
Views['jeu-images'] = gameView(t('game.img'), function (el, mod) { ImgGame.start(el, mod, 10, 'reviser'); });
Views.triage = gameView(t('game.tri'), function (el, mod) { Triage.start(el, mod, 10, null, 'reviser'); });
Views.associe = gameView(t('game.match'), function (el, mod) { Match.start(el, mod, 'reviser'); });

/* ---------- inline trainers inside a fiche / section ---------- */
function trainBlock(key, opts) {
  opts = opts || {};
  var h = HY.get(key), parts = [];
  if (h && h.triage && h.triage.length && opts.triage !== false) parts.push('<div class="stack"><h4>' + t('train.tri') + '</h4><div data-inline-triage="' + key + '"></div></div>');
  if (h && h.cloze && h.cloze.length) parts.push('<div class="stack"><h4>' + t('train.cloze') + '</h4><div data-inline-cloze="' + key + '"></div></div>');
  return parts.join('');
}
function mountTrainers(host) {
  U.$$('[data-inline-cloze]', host).forEach(function (el) { Cloze.start(el, '', 5, el.getAttribute('data-inline-cloze')); });
  U.$$('[data-inline-triage]', host).forEach(function (el) { Triage.start(el, '', 3, el.getAttribute('data-inline-triage')); });
}

/* ---------- photo carousel (big image first) ---------- */
Photo.carousel = function (list, opts) {
  opts = opts || {};
  if (!list || !list.length) return '';
  var id = 'car' + Math.floor(Math.random() * 1e7);
  return '<div class="carousel" data-car="' + id + '" data-i="0">' + list.map(function (p, i) { return '<div class="car-slide"' + (i ? ' hidden' : '') + ' data-slide="' + i + '">' + Photo.card(p) + '</div>'; }).join('') +
    (list.length > 1 ? '<div class="car-nav"><button type="button" class="btn sm" data-car-step="-1" aria-label="' + t('car.prev') + '">‹</button><span class="mono small" data-car-count>1 / ' + list.length + '</span><button type="button" class="btn sm" data-car-step="1" aria-label="' + t('car.next') + '">›</button></div><div class="car-thumbs">' +
      list.map(function (p, i) { return '<button type="button" class="car-th' + (i ? '' : ' on') + '" data-car-go="' + i + '" aria-label="' + t('car.n', { n: i + 1 }) + '"><img loading="lazy" src="' + Photo.src(p.id) + '" alt=""></button>'; }).join('') + '</div>' : '') + '</div>';
};
document.addEventListener('click', function (ev) {
  var b = ev.target.closest && ev.target.closest('[data-car-step],[data-car-go]'); if (!b) return;
  var car = b.closest('[data-car]'), slides = U.$$('[data-slide]', car), i = +car.getAttribute('data-i');
  var n = b.hasAttribute('data-car-go') ? +b.getAttribute('data-car-go') : (i + (+b.getAttribute('data-car-step')) + slides.length) % slides.length;
  slides.forEach(function (s, k) { s.hidden = k !== n; }); car.setAttribute('data-i', n);
  var cnt = U.$('[data-car-count]', car); if (cnt) cnt.textContent = (n + 1) + ' / ' + slides.length;
  U.$$('[data-car-go]', car).forEach(function (t, k) { t.classList.toggle('on', k === n); });
});

/* ---------- progression view ---------- */
Views.progression = {
  title: t('nav.progress'), render: function () {
    var all = Prog.stat(), ac = Prog.acuity(all.mastery), s = Settings.get();
    var lines = [['A', 'l1', L.modules.A, 'module-a'], ['B', 'l2', L.modules.B, 'module-b'], ['C', 'l3', L.modules.C, 'module-c']].map(function (l) {
      var st = Prog.stat(l[0]), a = Prog.acuity(st.mastery), opto = l[0] === 'A' ? 'A' : l[0] === 'B' ? 'B&nbsp;F' : 'C&nbsp;P&nbsp;Z';
      return '<a class="chart-line ' + l[1] + '" href="#' + l[3] + '"><span class="opto">' + opto + '<small>Module ' + l[0] + ' · ' + l[2] + '</small></span><span class="acu">' + a.m + '<br><span class="xs">' + t('prog.line', { a: st.mastered, b: st.shaky, c: st.wrong }) + '</span></span></a>';
    }).join('');
    var c = SRS.counts(Object.keys(SRS.decks), ''), cl = Store.p.cloze || {}, clN = Object.keys(cl).length, clOk = Object.keys(cl).filter(function (k) { return cl[k].ok; }).length;
    var reps = (Store.p.reports || []).slice().reverse();
    var opt = function (act, v, label, cur) { return '<button type="button" data-act="' + act + '" data-v="' + v + '" aria-pressed="' + (cur === v) + '">' + label + '</button>'; };
    return '<div class="page">' + crumbs([[t('nav.home'), 'accueil'], [t('nav.progress'), null]]) + '<div class="phead"><div class="eyebrow">' + t('nav.progress') + '</div><h1>' + t('prog.h1') + '</h1></div>' +
      '<div class="chart" aria-label="' + t('prog.chart.aria') + '">' + lines + '<div class="chart-foot"><span>' + t('prog.acuity') + '<b class="mono">' + ac.m + ' (' + ac.i + ')</b></span><span class="muted">' + t('prog.acuity.d') + '</span></div></div>' +
      '<div class="grid3"><div class="card stack"><div class="eyebrow">' + t('game.cards') + '</div><b class="today-n">' + c.known + ' / ' + c.total + '</b><span class="small muted">' + t('prog.cards.d', { seen: c.seen, due: c.due }) + '</span><a class="btn sm" href="#cartes">' + t('prog.review') + '</a></div>' +
      '<div class="card stack"><div class="eyebrow">' + t('game.cloze') + '</div><b class="today-n">' + clOk + ' / ' + clN + '</b><span class="small muted">' + t('prog.cloze.d') + '</span><a class="btn sm" href="#mots-troues">' + t('prog.continue') + '</a></div>' +
      '<div class="card stack"><div class="eyebrow">' + t('prog.mcq') + '</div><b class="today-n">' + all.answered + ' / ' + all.total + '</b><span class="small muted">' + t('prog.mcq.d', { w: all.wrong, s: all.shaky }) + '</span><a class="btn sm" href="#quiz">' + t('prog.mcq.btn') + '</a></div></div>' +
      '<div class="card stack"><div class="eyebrow">' + t('prog.plan') + '</div>' + Plan.html() + '</div>' +
      '<div class="card stack"><div class="eyebrow">' + t('prog.display') + '</div>' +
      (window.I18N ? '<div class="row"><span class="small" style="min-width:9rem">' + t('i18n.lang') + '</span>' + I18N.switchHtml() + '</div>' : '') +
      '<div class="row"><span class="small" style="min-width:9rem">' + t('depth.aria') + '</span>' + depthSeg(true) + '</div>' +
      '<div class="row"><span class="small" style="min-width:9rem">' + t('prog.size') + '</span><div class="seg sm">' + opt('size', 's', 'A−', s.size) + opt('size', 'm', 'A', s.size) + opt('size', 'l', 'A+', s.size) + opt('size', 'xl', 'A++', s.size) + '</div></div>' +
      '<div class="row"><span class="small" style="min-width:9rem">' + t('prog.theme') + '</span><div class="seg sm">' + opt('theme', 'auto', t('prog.auto'), s.theme) + opt('theme', 'light', t('prog.light'), s.theme) + opt('theme', 'dark', t('prog.dark'), s.theme) + '</div></div>' +
      '<div class="row"><span class="small" style="min-width:9rem">' + t('prog.motion') + '</span><div class="seg sm">' + opt('motion', 'on', t('prog.on'), s.motion ? 'on' : 'off') + opt('motion', 'off', t('prog.off'), s.motion ? 'on' : 'off') + '</div></div></div>' +
      '<div class="card stack"><div class="eyebrow">' + t('prog.dates') + '</div><p class="small muted">' + t('prog.dates.d') + '</p><div class="row"><label class="small" for="d-c">' + t('prog.dateC') + '</label><input type="date" id="d-c" value="' + Dates.get('cornee') + '"><label class="small" for="d-g">' + t('prog.dateG') + '</label><input type="date" id="d-g" value="' + Dates.get('glaucome') + '"><button class="btn" data-act="save-dates">' + t('prog.savedates') + '</button></div>' +
      '<div class="row"><button class="btn" data-act="reset-ask">' + t('prog.reset') + '</button><span data-reset></span></div></div>' +
      (reps.length ? '<div class="card stack"><div class="eyebrow">' + t('prog.reports', { n: reps.length }) + '</div><ul class="blist small">' + reps.slice(0, 10).map(function (r) { return '<li><b>' + U.esc(HY.title(r.where) || r.where) + '</b> : ' + U.esc(r.text) + '</li>'; }).join('') + '</ul><span class="xs muted">' + t('prog.reports.d') + '</span><div class="row"><button type="button" class="btn sm" data-act="reports-copy">' + t('rep.copy') + '</button></div></div>' : '') +
      '</div>';
  }
};

/* ---------- apprendre hub (all modules, visual) ---------- */
var COVER = { A: 'OPH-192', B: 'OPH-001', C: 'OPH-298' };
var THUMB_ALIAS = { 'a-physiologie': 'a-gonioscopie', 'a-examen': 'a-lampe', 'a-imagerie': 'a-oct', 'a-retine': 'a5-retinopathie-diabetique' };
function thumbFor(key) { var p = photosFor(key)[0] || (THUMB_ALIAS[key] && photosFor(THUMB_ALIAS[key])[0]); return p && D.cat(p.id) ? '<img loading="lazy" src="' + Photo.src(p.id) + '" alt="">' : '<span class="nothumb" aria-hidden="true"></span>'; }
Views.apprendre = {
  title: t('nav.learn'), render: function () {
    var row = function (id, n, title, sub) { var dot = Prog.ficheDone(id) ? 'done' : (Prog.ficheSeen(id) ? 'seen' : ''); return '<a class="lrow" href="#' + id + '"><span class="lthumb">' + thumbFor(id) + '</span><span class="stack" style="gap:2px;min-width:0"><span class="xs mono muted">' + n + '</span><b>' + U.esc(title) + '</b>' + (sub ? '<span class="xs muted">' + U.esc(sub) + '</span>' : '') + '</span>' + Prog.dot(dot) + '</a>'; };
    var A = A_SECTIONS.map(function (s) { return row(s.id, s.n, s.title, s.blurb); }).join('');
    var mod = function (m) { var cap = m === 'B' ? 'b-bases' : 'c-bases'; return row(cap, m + '0', t('nav.foundations'), t('learn.first')) + D.ordered(m).map(function (f, i) { return row(f.id, m + (i + 1), f.title, f.en); }).join(''); };
    var col = function (m, title, html) { var s = Prog.stat(m); return '<section class="lcol"><div class="lcover" style="background-image:url(' + Photo.src(COVER[m]) + ')"><span class="eyebrow">Module ' + m + '</span><b>' + title + '</b><span class="xs">' + t('learn.mastered', { a: s.mastered, b: s.total }) + '</span></div><div class="stack" style="gap:6px">' + html + '</div></section>'; };
    return '<div class="page">' + crumbs([[t('nav.home'), 'accueil'], [t('nav.learn'), null]]) + '<div class="phead"><div class="eyebrow">' + t('learn.eyebrow') + '</div><h1>' + t('learn.h1') + '</h1><p class="muted">' + t('learn.lead') + '</p>' + depthSeg() + '</div>' +
      (Views.investigations ? '<a class="card link inv-banner" href="#investigations"><span class="eyebrow">' + t('brand.method') + '</span><h3>' + t('nav.inv') + '</h3><span class="small muted">' + t('learn.inv.d') + '</span></a>' : '') + '<div class="lgrid">' + col('A', L.modules.A, A) + col('B', L.modules.B, mod('B')) + col('C', L.modules.C, mod('C')) + '</div></div>';
  }
};

/* ---------- image du jour + série (streak) avec un gel par semaine ---------- */
var Streak = {
  iso: function (d) { d = d || new Date(); var p = function (n) { return (n < 10 ? '0' : '') + n; }; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); },
  add: function (iso, n) { var d = Dates.parse(iso); d.setDate(d.getDate() + n); return Streak.iso(d); },
  week: function (iso) { var d = Dates.parse(iso); d.setDate(d.getDate() - (d.getDay() + 6) % 7); return Streak.iso(d); }, // Monday of that week
  get: function () { var s = Store.p.streak || {}; return { n: s.n || 0, best: s.best || 0, last: s.last || '', freeze: s.freeze || {}, days: s.days || {}, t: s.t || 0 }; },
  current: function () {
    var s = Streak.get(), td = Streak.iso(); if (!s.last) return 0;
    if (s.last === td || s.last === Streak.add(td, -1)) return s.n;
    if (s.last === Streak.add(td, -2) && !s.freeze[Streak.week(Streak.add(td, -1))]) return s.n; // yesterday missed: today's image still saves the series with the weekly freeze
    return 0;
  },
  doneToday: function () { return Streak.get().last === Streak.iso(); },
  freezeLeft: function () { return Streak.get().freeze[Streak.week(Streak.iso())] ? 0 : 1; },
  complete: function () {
    var s = Streak.get(), td = Streak.iso(), y = Streak.add(td, -1), used = false;
    if (s.last === td) return s;
    if (s.last === y) s.n++;
    else if (s.last === Streak.add(td, -2) && !s.freeze[Streak.week(y)]) { s.freeze[Streak.week(y)] = y; s.n++; used = true; }
    else s.n = 1;
    s.last = td; s.best = Math.max(s.best, s.n); s.days[td] = 1;
    Object.keys(s.days).sort().slice(0, -60).forEach(function (k) { delete s.days[k]; });
    Object.keys(s.freeze).sort().slice(0, -8).forEach(function (k) { delete s.freeze[k]; });
    s.t = Date.now(); Store.p.streak = s; Store.touch();
    s.usedFreeze = used; return s;
  },
  html: function () {
    var n = Streak.current(), fl = Streak.freezeLeft();
    return '<span class="streak" title="' + U.esc(t('streak.best', { n: Streak.get().best })) + '"><b class="mono">' + n + '</b> ' + t('streak.days', { n: n }) + '</span><span class="xs muted">' + (fl ? t('streak.freeze1') : t('streak.freeze0')) + '</span>';
  }
};
var Daily = {
  pool: function () {
    var out = [];
    ((window.OPH && OPH.invPractice) || []).forEach(function (p) { if (p && p.options && p.options.length > 1) out.push({ kind: 'inv', id: p.id, item: p }); });
    SRS.all().forEach(function (c) { if (c.deck === 'images' && c.img) out.push({ kind: 'card', id: c.id, card: c }); });
    return out.sort(function (a, b) { return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; });
  },
  today: function () { var p = Daily.pool(); return p.length ? p[U.hash('ocelle-' + Streak.iso()) % p.length] : null; },
  photoOf: function (d) {
    if (!d) return null;
    if (d.kind === 'card') return d.card.img;
    var m = OPH.invMedia && OPH.invMedia[d.item.media]; return m && m.kind === 'photo' && m.photo && D.cat(m.photo) ? m.photo : null;
  },
  card: function () {
    var d = Daily.today(); if (!d) return '';
    var ph = Daily.photoOf(d), done = Streak.doneToday();
    return '<a class="next-step daily-card' + (done ? ' done' : '') + '" href="#image-du-jour">' + (ph ? '<span class="daily-th"><img loading="lazy" src="' + Photo.src(ph) + '" alt=""></span>' : '') +
      '<span class="eyebrow">' + t('daily.title') + '</span><b>' + (done ? t('daily.done') : t('daily.cta')) + '</b><span class="small daily-streak">' + Streak.html() + '</span></a>';
  },
  finish: function (host) {
    var before = Streak.doneToday(), s = Streak.complete(), box = U.$('[data-dailyend]', host);
    if (box) { box.hidden = false; box.innerHTML = '<div class="card stack daily-end"><div class="eyebrow">' + t('daily.title') + '</div><b class="today-n">' + t('streak.days.n', { n: Streak.current() }) + '</b>' +
      '<span class="small muted">' + (before ? t('daily.again') : s.usedFreeze ? t('streak.used') : t('daily.back')) + '</span><div class="row"><a class="btn primary" href="#investigations">' + t('feat.more') + '</a><a class="btn" href="#reviser">' + t('nav.review') + '</a></div></div>'; }
    Shell.render();
  }
};
Views['image-du-jour'] = {
  title: t('daily.title'), render: function () {
    var d = Daily.today();
    return '<div class="page read" style="margin:0 auto;width:100%">' + crumbs([[t('nav.home'), 'accueil'], [t('daily.title'), null]]) +
      '<div class="phead"><div class="eyebrow">' + U.esc(Dates.fmt(Streak.iso())) + '</div><h1>' + t('daily.title') + '</h1><p class="muted">' + t('daily.lead') + '</p><div class="row daily-streak">' + Streak.html() + '</div></div>' +
      (d ? '<div data-daily></div><div data-dailyend hidden></div>' : '<div class="empty">' + t('daily.none') + '</div>') + '</div>';
  },
  after: function (host) {
    var d = Daily.today(), el = U.$('[data-daily]', host); if (!d || !el) return;
    if (d.kind === 'inv' && window.Inv) return Inv.practice(el, [d.item], { title: t('daily.title'), onEnd: function () { Daily.finish(host); } });
    var c = d.card, flipped = false;
    function draw() {
      el.innerHTML = '<div class="run card"><div class="fc' + (flipped ? ' flipped' : '') + '" data-fc><div class="fc-face">' + SRS.face(c, flipped) + '</div></div>' +
        (flipped ? '<div class="fc-rate" role="group" aria-label="' + t('srs.rate.aria') + '"><button type="button" class="btn rate0" data-g="0">' + t('srs.r0') + '</button><button type="button" class="btn rate1" data-g="1">' + t('srs.r1') + '</button><button type="button" class="btn rate2" data-g="2">' + t('srs.r2') + '</button></div>'
          : '<div class="row"><button type="button" class="btn primary" data-flip>' + t('srs.flip') + '</button></div>') + '</div>';
    }
    el.onclick = function (ev) {
      if (ev.target.closest('[data-act="lightbox"]')) return;
      if (!flipped && (ev.target.closest('[data-flip]') || (ev.target.closest('[data-fc]') && !ev.target.closest('details')))) { flipped = true; draw(); return; }
      var g = ev.target.closest('[data-g]'); if (g) { SRS.rate(c, +g.getAttribute('data-g')); U.$$('[data-g]', el).forEach(function (b) { b.disabled = true; }); Daily.finish(host); }
    };
    draw();
  }
};

/* ---------- cas vedette (lien de campagne #cas-vedette) ---------- */
var FEATURED = { id: 'p-fondoeil-6' };
Views['cas-vedette'] = {
  title: t('feat.title'), render: function () {
    var pr = (window.OPH && OPH.invPractice) || [], it = pr.filter(function (p) { return p.id === FEATURED.id; })[0] || pr.filter(function (p) { var m = OPH.invMedia && OPH.invMedia[p.media]; return m && m.kind === 'photo'; })[0];
    FEATURED.item = it;
    return '<div class="page featured">' + '<div class="phead"><div class="eyebrow">' + t('feat.title') + ' · ' + t('brand.name') + '</div><h1>' + t('feat.h1') + '</h1><p class="muted">' + t('brand.method') + ' ' + t('feat.lead') + '</p></div>' +
      (it && window.Inv ? '<div data-feat></div>' : '<div class="empty">' + t('daily.none') + '</div>') +
      '<div class="card stack feat-cta"><b>' + t('brand.tagline') + '</b><span class="small muted">' + t('feat.cta.d') + '</span><div class="row"><a class="btn primary" href="#investigations">' + t('feat.more') + '</a><a class="btn" href="#cas">' + t('cas.title') + '</a><a class="btn ghost" href="#accueil">' + t('feat.home') + '</a></div></div>' +
      '<p class="xs muted">' + t('disclaimer') + '</p></div>';
  },
  after: function (host) {
    document.documentElement.classList.add('focus-view');
    var el = U.$('[data-feat]', host), clean = null;
    if (el && FEATURED.item) clean = Inv.practice(el, [FEATURED.item], { title: t('feat.title'), onEnd: function () { var c = U.$('.feat-cta', host); if (c) { c.classList.add('ok-pop'); c.scrollIntoView({ block: 'nearest', behavior: U.reduced() ? 'auto' : 'smooth' }); } } });
    return function () { document.documentElement.classList.remove('focus-view'); if (typeof clean === 'function') clean(); };
  }
};

/* ---------- copier mes signalements ---------- */
Actions['reports-copy'] = function () {
  var txt = (Store.p.reports || []).map(function (r) { return '[' + new Date(r.t).toISOString().slice(0, 10) + '] ' + (HY.title(r.where) || r.where) + ' (' + r.where + ') : ' + r.text; }).join('\n');
  if (!txt) return;
  var ok = function () { U.toast(t('rep.copied')); }, fallback = function () { var ta = document.createElement('textarea'); ta.value = txt; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); ok(); } catch (e) { U.toast(t('rep.copyfail')); } ta.remove(); };
  try { if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(ok, fallback); else fallback(); } catch (e) { fallback(); }
};
