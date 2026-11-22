/* ===== Views ===== */
'use strict';
/* English term under a French title; hidden in English, where the title already is the English term */
function enSub(en) { return en && !(window.I18N && I18N.lang === 'en') ? '<div class="en">' + U.esc(en) + '</div>' : ''; }
function crumbs(items) { return '<div class="crumbs">' + items.map(function (it, i) { return (i ? '<span aria-hidden="true">›</span>' : '') + (it[1] ? '<a href="#' + it[1] + '">' + U.esc(it[0]) + '</a>' : '<span>' + U.esc(it[0]) + '</span>'); }).join('') + '</div>'; }
function secH(k, title, id) { return '<div class="section-h"' + (id ? ' id="' + id + '"' : '') + '><span class="k">' + k + '</span><h2>' + U.esc(title) + '</h2></div>'; }
function photosFor(key) { var seen = {}; return ((OPH.photos && OPH.photos[key]) || []).filter(function (p) { if (!p || seen[p.id]) return false; seen[p.id] = 1; return true; }); }
function pairsFor(key) { return (OPH.photoPairs || []).filter(function (p) { return p.key === key; }); }
function pairHtml(p) {
  var n = D.cat(p.normal), q = D.cat(p.patho); if (!n || !q) return '';
  var find = function (id) { var all = []; Object.keys(OPH.photos || {}).forEach(function (k) { (OPH.photos[k] || []).forEach(function (x) { if (x.id === id) all.push(x); }); }); return all[0] || { id: id, caption: D.cat(id).title, look: '', reveal: [] }; };
  return '<div class="stack"><div class="pair"><div><div class="lab n">Normal</div>' + Photo.card(Object.assign({}, find(p.normal), { reveal: [] })) + '</div><div><div class="lab p">Pathologique</div>' + Photo.card(find(p.patho)) + '</div></div><p class="small muted">' + U.md(p.note) + '</p></div>';
}
function quizIds(filter) { return OPH.quiz.filter(filter).sort(function (a, b) { return a.level - b.level; }).map(function (q) { return q.id; }); }
function lockHtml(m) {
  var prev = m === 'B' ? 'A' : 'B', s = Prog.stat(prev);
  return '<div class="lockbox"><div class="eyebrow">' + t('lock.h', { m: m }) + '</div><p>' + t('lock.p', { p: prev, a: s.answered, pct: Math.round(s.acc * 100) }) + '</p>' +
    '<div class="row"><a class="btn primary" href="#quiz">' + t('lock.quiz', { p: prev }) + '</a><button class="btn" data-act="unlock" data-m="' + m + '">' + t('lock.enter') + '</button></div></div>';
}
Actions.unlock = function (el) { Store.p.unlocked[el.getAttribute('data-m')] = true; Store.touch(); Router.refresh(); U.toast(t('lock.opened', { m: el.getAttribute('data-m') })); };
Actions['mark-read'] = function (el) { var id = el.getAttribute('data-id'), on = !Prog.ficheDone(id); Store.markRead(id, on); el.setAttribute('aria-pressed', String(on)); el.textContent = on ? t('read.on') : t('read.off'); Shell.render(); };
function readBtn(id) { var on = Prog.ficheDone(id); return '<button type="button" class="btn ' + (on ? '' : 'primary') + '" data-act="mark-read" data-id="' + id + '" aria-pressed="' + on + '">' + (on ? t('read.on') : t('read.off')) + '</button>'; }
function miniQuiz(id, ids, title) { if (!ids.length) return ''; return '<div class="sec"><div class="section-h"><span class="k">QCM</span><h2>' + U.esc(title || t('mini.title')) + '</h2><span class="small muted">' + t('rev.nq', { n: ids.length }) + '</span></div><div data-miniquiz="' + id + '" data-ids="' + ids.join(',') + '"></div></div>'; }
function readMin(f) {
  if (f._mins) return f._mins;
  var vis = [f.definition, f.oneLiner, f.anatomy.text].concat(f.risk, f.presentation, f.redFlags, [f.cat.local]);
  f.causal.steps.forEach(function (s) { vis.push(s.label, s.detail); });
  f.exam.signs.forEach(function (s) { vis.push(s.sign, s.why); }); f.exam.tests.forEach(function (s) { vis.push(s.test, s.when, s.read); });
  f.ddx.forEach(function (d) { vis.push(d.dx, d.clue); }); f.cat.algo.forEach(function (a) { vis.push(a.q, a.yes, a.no); });
  f.cat.phases.forEach(function (p) { vis = vis.concat(p.items); }); f.pearls.forEach(function (p) { vis.push(p.q); });
  var t0 = f.treatments[0]; if (t0) vis.push(t0.name, t0.how, t0.why, t0.pros, t0.cons, t0.cx);
  f._mins = Math.max(2, Math.round(U.words(vis.join(' ')) / 250));
  return f._mins;
}
function readMinAt(f, d) {
  var h = HY.get(f.id), vis = [f.definition, f.oneLiner].concat(h ? h.essentials : [], f.redFlags);
  f.causal.steps.forEach(function (s) { vis.push(s.label); if (d >= 2) vis.push(s.detail); });
  f.cat.algo.forEach(function (a) { vis.push(a.q, a.yes, a.no); }); f.pearls.forEach(function (p) { vis.push(p.q); });
  if (d >= 2) { vis = vis.concat(f.risk, f.presentation, [f.anatomy.text]); f.exam.signs.forEach(function (s) { vis.push(s.sign, s.why); }); f.exam.tests.forEach(function (s) { vis.push(s.test, s.when, s.read); }); f.ddx.forEach(function (x) { vis.push(x.dx, x.clue); }); f.cat.phases.forEach(function (p) { vis = vis.concat(p.items); }); }
  if (d >= 3) { vis.push(f.cat.local); f.treatments.forEach(function (t) { vis.push(t.how, t.why, t.pros, t.cons, t.cx); }); }
  return Math.max(1, Math.round(U.words(vis.join(' ')) / 230));
}
function readRange(m) {
  var dd = Settings.get().depth, a = D.ordered(m).map(function (f) { return readMinAt(f, dd); }); if (!a.length) return t('range.to', { a: 3, b: 5 });
  var lo = Math.min.apply(null, a), hi = Math.max.apply(null, a);
  return lo === hi ? String(lo) : t('range.to', { a: lo, b: hi });
}
function mountMinis(host) { U.$$('[data-miniquiz]', host).forEach(function (el) { var ids = el.getAttribute('data-ids').split(',').filter(Boolean); el.innerHTML = '<button class="btn primary" data-startmini>' + t('mini.start', { n: ids.length }) + '</button>'; el.addEventListener('click', function (ev) { if (ev.target.closest('[data-startmini]')) Quiz.mount(el, ids, { title: t('mini.title') }); }); }); }

/* ---------- study plan ---------- */
var Plan = {
  tasks: function () {
    var B = D.ordered('B'), C = D.ordered('C'), hb = Math.ceil(B.length / 2), hc = Math.ceil(C.length / 2);
    var ids = function (list, a, b) { return list.slice(a, b).map(function (f) { return f.id; }); };
    return {
      pre1: [
        { t: t('plan.t1'), ids: ['a-anatomie', 'a-physiologie'] },
        { t: t('plan.t2'), ids: ['a-examen', 'a-imagerie', 'a-retine'], quiz: 'A' },
        { t: t('plan.t3', { n: hb }), ids: ['b-bases'].concat(ids(B, 0, hb)) },
        { t: t('plan.t4', { a: hb + 1, b: B.length }), ids: ids(B, hb, B.length), quiz: 'B' }
      ],
      pre2: [
        { t: t('plan.t5', { n: hc }), ids: ['c-bases'].concat(ids(C, 0, hc)) },
        { t: t('plan.t6', { a: hc + 1, b: C.length }), ids: ids(C, hc, C.length) },
        { t: t('plan.t7'), ids: [], quiz: 'C', cases: 'C' },
        { t: t('plan.t8'), ids: [], review: true }
      ]
    };
  },
  done: function (task) {
    var ok = task.ids.every(function (id) { return Prog.ficheDone(id) || (!D.fiche(id) && Prog.ficheSeen(id)); });
    if (task.quiz) { var s = Prog.stat(task.quiz); ok = ok && s.answered >= Math.min(15, s.total); }
    if (task.cases) ok = ok && OPH.cases.filter(function (c) { return c.module === task.cases; }).every(function (c) { return Store.p.cases[c.id]; });
    if (task.review) ok = Prog.stat().wrong === 0 && Prog.stat().answered > 30;
    return ok && (task.ids.length || task.quiz || task.cases || task.review);
  },
  spread: function (tasks, start, end) { // dates (Date) start inclusive, end exclusive
    var days = []; for (var d = new Date(start); d < end; d.setDate(d.getDate() + 1)) days.push(new Date(d));
    if (!days.length) return [{ day: null, tasks: tasks }];
    var out = days.map(function (d) { return { day: d, tasks: [] }; });
    tasks.forEach(function (t, i) { out[Math.min(out.length - 1, Math.floor(i * out.length / tasks.length))].tasks.push(t); });
    return out.filter(function (o) { return o.tasks.length; });
  },
  html: function () {
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var d1 = Dates.parse(Dates.get('cornee')), d2 = Dates.parse(Dates.get('glaucome')), T2 = Plan.tasks();
    var rows = [];
    Plan.spread(T2.pre1, today, d1).forEach(function (r) { rows.push(r); });
    if (Dates.custom()) rows.push({ day: d1, stage: t('plan.stageC') });
    var after = new Date(d1); after.setDate(after.getDate() + 1);
    Plan.spread(T2.pre2, after > today ? after : today, d2).forEach(function (r) { rows.push(r); });
    if (Dates.custom()) rows.push({ day: d2, stage: t('plan.stageG') });
    return '<ul class="plan">' + rows.map(function (r) {
      if (r.stage) return '<li><span class="ck on" aria-hidden="true">★</span><div><div class="when">' + U.esc(r.day ? Dates.short(r.day) : '') + '</div><b>' + U.esc(r.stage) + '</b></div></li>';
      return r.tasks.map(function (tk, i) { var ok = Plan.done(tk); return '<li><span class="ck ' + (ok ? 'on' : '') + '" aria-label="' + (ok ? t('plan.done') : t('plan.todo')) + '">' + (ok ? '✓' : '') + '</span><div>' + (i === 0 ? '<div class="when">' + U.esc(r.day ? Dates.short(r.day) : t('plan.asap')) + '</div>' : '') + U.esc(tk.t) + '</div></li>'; }).join('');
    }).join('') + '</ul>';
  }
};

/* ---------- home ---------- */
function eyeSvg() {
  /* hero art: a marker draws the ocellus (fluorescein dot lights up), then circles the sign on a tilted photo card (open licence, never filtered) */
  var oc = window.Motion ? Motion.loop(230, 232, 150, 134, 7, { tilt: -.18, over: .42, drift: .12 }) : 'M80 232a150 134 0 1 0 300 0a150 134 0 1 0-300 0';
  var e = D.cat('IMG3-035'), credit = e ? (Photo.owner(e) + ' · ' + (e.license_url ? '<a href="' + U.esc(e.license_url) + '" target="_blank" rel="noopener">' + U.esc(e.license) + '</a>' : U.esc(e.license)) + (Photo.srcUrl(e) ? ' · <a href="' + U.esc(Photo.srcUrl(e)) + '" target="_blank" rel="noopener">Wikimedia Commons</a>' : '') + ' · ' + t('hero.annot')) : '';
  return '<svg class="hero-ocellus" viewBox="0 0 460 460" aria-hidden="true" focusable="false"><path class="mo-path draw" pathLength="1" d="' + oc + '" style="--mo-delay:.15s;--mo-dur:.85s"/><circle cx="240" cy="222" r="46"/></svg>' +
    '<div class="hero-art"><figure class="hero-photo" style="margin:0"><div class="hero-img" data-loop="53.5,32,23,17"><img src="' + Photo.src('IMG3-035') + '" width="853" height="788" alt="' + U.esc(t('hero.photoAlt')) + '" decoding="async"></div>' +
    '<figcaption>' + credit + '</figcaption><span class="mo-sticker" aria-hidden="true" style="--mo-delay:1.75s">' + U.esc(t('hero.sticker')) + '</span></figure></div>';
}
Plan.next = function () { var T2 = Plan.tasks(), all = T2.pre1.concat(T2.pre2); for (var i = 0; i < all.length; i++) if (!Plan.done(all[i])) return all[i]; return null; };
Views.accueil = {
  title: t('home.title'),
  render: function () {
    var dc = Dates.get('cornee'), dg = Dates.get('glaucome'), d = Settings.get().depth;
    var cd = '<div class="hero-cd"><span><b>' + L.modules.B + '</b> ' + U.esc(Dates.rel(dc)) + '</span><span><b>' + L.modules.C + '</b> ' + U.esc(Dates.rel(dg)) + '</span></div>';
    if (!Dates.custom()) cd = '';
    var last = Store.p.last && Store.p.last !== 'accueil' && D.title(Store.p.last) ? '<a class="btn hero-btn" href="#' + Store.p.last + (D.fiche(Store.p.last) ? '/' + ficheStep(Store.p.last) : '') + '">' + U.esc(t('home.resume', { t: D.title(Store.p.last) })) + '</a>' : '<a class="btn hero-btn" href="#a-anatomie">' + t('home.start') + '</a>';
    var q = SRS.queue(DAILY, '', 15), nx = Plan.next();
    var nxt = nx ? (function () { var id = nx.ids.filter(function (x) { return !Prog.ficheDone(x); })[0] || (nx.quiz ? 'quiz' : nx.cases ? 'cas' : 'reviser'); return '<a class="next-step" href="#' + id + '"><span class="eyebrow">' + t('home.next') + '</span><b>' + U.esc(nx.t) + '</b><span class="small">' + U.esc(t('home.open', { t: D.title(id) || t('nav.review') })) + '</span></a>'; })() : '<div class="next-step"><span class="eyebrow">' + t('home.plan') + '</span><b>' + t('home.plandone') + '</b></div>';
    var levels = [1, 2, 3].map(function (k) { return '<button type="button" class="level-card' + (d === k ? ' on' : '') + '" data-act="depth" data-v="' + k + '" aria-pressed="' + (d === k) + '"><span class="lvl-n">' + k + '</span><b>' + DEPTHS[k].t + '</b><span class="xs muted">' + DEPTHS[k].en + '</span><span class="small">' + U.esc(DEPTHS[k].d) + '</span></button>'; }).join('');
    var mods = [['A', 'module-a', L.modules.A, t('home.modA.d')], ['B', 'module-b', L.modules.B, (Dates.custom() ? t('home.mod.d', { n: D.ordered('B').length, d: Dates.fmt(dc) }) : t('home.mod.d0', { n: D.ordered('B').length }))], ['C', 'module-c', L.modules.C, (Dates.custom() ? t('home.mod.d', { n: D.ordered('C').length, d: Dates.fmt(dg) }) : t('home.mod.d0', { n: D.ordered('C').length }))]].map(function (x) {
      var st = Prog.stat(x[0]), unl = Prog.unlocked(x[0]);
      return '<a class="mod-card" href="#' + x[1] + '"><span class="mod-img" style="background-image:url(' + Photo.src(COVER[x[0]]) + ')"></span><span class="stack" style="gap:4px;padding:12px 14px 14px"><span class="eyebrow">Module ' + x[0] + (unl ? '' : t('home.tounlock')) + '</span><b class="mod-t">' + x[2] + '</b><span class="small muted">' + x[3] + '</span><span class="pbar"><i style="width:' + (100 * st.mastery).toFixed(0) + '%"></i></span><span class="xs mono">' + t('learn.mastered', { a: st.mastered, b: st.total }) + '</span></span></a>';
    }).join('');
    return '<div class="hero2"><div class="hero2-in"><div class="stack hero-text"><div class="eyebrow">' + t('home.eyebrow') + '</div><h1>' + t('home.h1') + '</h1><p class="hero-lead">' + t('home.lead') + '</p>' + cd +
      '<div class="row">' + last + '<a class="btn hero-btn ghost" href="#reviser">' + t('home.today', { n: q.length }) + '</a></div></div><div class="hero-eye">' + eyeSvg() + '</div></div></div>' +
      '<div class="page">' +
      // level choice lives in Progression and the « Niveau » chip (home ≤ 2.5 screens)
      '<div class="today-grid">' + Daily.card() + nxt + (Views.investigations ? '<a class="next-step alt2" href="#investigations"><span class="eyebrow">' + t('brand.method') + '</span><b>' + t('nav.inv') + '</b><span class="small">' + t('home.inv.d', { n: ((window.OPH && OPH.invPractice) || []).length }) + '</span></a>' : '<a class="next-step alt2" href="#jeu-images"><span class="eyebrow">' + t('home.game') + '</span><b>' + t('game.img') + '</b><span class="small">' + t('home.game.d', { n: ImgGame.pool('').length }) + '</span></a>') + '</div>' +
      '<div class="sec"><div class="section-h"><span class="k">1</span><h2>' + t('home.mod.h') + '</h2></div><div class="mod-grid">' + mods + '</div></div>' +
      '<p class="xs muted disclaimer">' + t('disclaimer') + ' · <a href="#sources">' + t('nav.sources') + '</a></p></div>';
  }
};
Actions['save-dates'] = function () { var c = U.$('#d-c').value, g = U.$('#d-g').value; if (!c || !g) { U.toast(t('dates.invalid')); return; } Store.p.settings = Object.assign({}, Store.p.settings || {}, { cornee: c, glaucome: g, t: Date.now() }); Store.touch(); Router.refresh(); U.toast(t('dates.saved')); };
Actions['reset-ask'] = function () { U.$('[data-reset]').innerHTML = '<span class="small">' + t('reset.ask') + '</span><button class="btn sm" data-act="reset-yes">' + t('reset.yes') + '</button> <button class="btn sm ghost" data-act="reset-no">' + t('common.cancel') + '</button>'; };
Actions['reset-yes'] = function () { Store.reset(); Router.refresh(); U.toast(t('reset.done')); };
Actions['reset-no'] = function () { U.$('[data-reset]').innerHTML = ''; };

/* ---------- Module A ---------- */
Views['module-a'] = {
  title: 'Module A',
  render: function () {
    return '<div class="page">' + crumbs([[t('nav.home'), 'accueil'], ['Module A', null]]) + '<div class="phead"><div class="eyebrow">' + t('modA.eyebrow') + '</div><h1>' + L.modules.A + '</h1><p class="muted" style="max-width:62ch">' + t('modA.lead') + '</p></div>' +
      '<div class="grid2">' + A_SECTIONS.map(function (s) { return '<a class="card link" href="#' + s.id + '"><span class="eyebrow">' + s.n + (Prog.ficheDone(s.id) ? ' · ' + t('st.read') : '') + '</span><h3>' + U.esc(s.title) + '</h3><span class="small muted">' + U.esc(s.blurb) + '</span></a>'; }).join('') + '</div>' +
      '<div class="row"><a class="btn primary" href="#a-anatomie">' + t('modA.start') + '</a><button class="btn" data-act="quiz-module" data-m="A">' + t('mod.quiz', { m: 'A' }) + '</button></div></div>';
  }
};
Actions['quiz-module'] = function (el) { var m = el.getAttribute('data-m'); Quiz.start({ modules: [m], adaptive: true, n: 10, back: 'quiz' }, t('mod.adaptive', { m: m })); };
function aNav(cur) { var i = A_SECTIONS.map(function (s) { return s.id; }).indexOf(cur); var prev = A_SECTIONS[i - 1], next = A_SECTIONS[i + 1]; return '<details class="acc src-acc"><summary>' + t('aside.reviewreport') + '</summary><div style="padding:0 14px 14px">' + reviewMeta(cur) + '</div></details>' + '<div class="row" style="justify-content:space-between">' + (prev ? '<a class="btn ghost" href="#' + prev.id + '">← ' + U.esc(prev.title) + '</a>' : '<span></span>') + readBtn(cur) + (next ? '<a class="btn" href="#' + next.id + '">' + U.esc(next.title) + ' →</a>' : '<a class="btn" href="#module-b">' + t('nav.module', { m: 'B', name: L.modules.B }) + ' →</a>') + '</div>'; }
function aHead(id) { var s = A_SECTIONS.filter(function (x) { return x.id === id; })[0]; return crumbs([[t('nav.home'), 'accueil'], ['Module A', 'module-a'], [s.n, null]]) + '<div class="phead"><div class="eyebrow">' + s.n + ' · Module A</div><h1>' + U.esc(s.title) + '</h1>' + enSub(s.en) + '<p class="muted" style="max-width:64ch">' + U.esc(s.blurb) + '</p></div>'; }
function aTools() { return '<div class="row depth-row"><span class="xs muted">' + t('f.level') + '</span>' + depthSeg(true) + mvMore(2, t('a.showall')) + '</div>'; }
function missing(what) { return '<div class="empty">' + U.esc(t('missing', { what: what })) + '</div>'; }

Views['a-anatomie'] = {
  title: t('a1.title'), render: function () {
    var ph = photosFor('a-anatomie');
    return '<div class="page">' + aHead('a-anatomie') +
      '<div class="sec">' + secH('1', t('a1.s1')) + '<p class="read">' + t('a1.p1') + '</p><div data-sim="anatomy"></div></div>' +
      '<div class="sec">' + secH('2', t('a1.s2')) + '<p class="read">' + t('a1.p2') + '</p><div data-sim="corneaLayers"></div></div>' +
      '<div class="sec">' + secH('3', t('a1.s3')) + '<p class="read">' + t('a1.p3') + '</p><div data-sim="angleExplorer"></div></div>' +
      '<div class="sec">' + secH('4', t('a1.s4')) + '<div data-sim="discAnatomy"></div></div>' +
      '<div class="sec">' + secH('5', t('a1.s5')) + '<div data-sim="annexes"></div></div>' +
      (ph.length ? '<div class="sec">' + secH('6', t('a.photos')) + Photo.gallery(ph) + '</div>' : '') +
      miniQuiz('a-anatomie', quizIds(function (q) { return q.topic === 'a-anatomie'; }), t('a.mini', { t: t('a1.title') })) + aNav('a-anatomie') + '</div>';
  }, after: mountMinis
};
var PHYSIO_SIM = { aqueuse: 'aqueous', 'film-lacrymal': 'tbut', transparence: 'edema', refraction: 'refraction' };
Views['a-physiologie'] = {
  title: t('a2.title'), render: function () {
    var P = (OPH.A && OPH.A.physio) || [], scope = Gloss.scope();
    var nav = '<div class="chips">' + P.map(function (p) { return '<button class="chip" data-act="goto" data-target="ph-' + p.id + '">' + U.esc(I18N.title(p)) + '</button>'; }).join('') + '</div>';
    var body = P.map(function (p, i) {
      var sim = PHYSIO_SIM[p.id];
      return '<div class="sec" id="ph-' + p.id + '">' + secH('A2.' + (i + 1), I18N.title(p)) + enSub(p.en).replace('class="en"', 'class="en small"') + '<p class="read">' + T(p.intro, scope) + '</p>' +
        (p.numbers && p.numbers.length ? '<div class="grid3">' + p.numbers.map(function (n) { return '<div class="readout"><span class="u">' + U.esc(n.label) + '</span><span class="small mono" style="font-weight:700">' + U.esc(n.value) + '</span></div>'; }).join('') + '</div>' : '') +
        HY.essentials('phy-' + p.id, t('hy.title')) +
        '<ul class="blist read" data-dz="2">' + p.points.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul>' +
        '<div class="callout amber"><span class="eyebrow">' + t('a.pearl') + '</span><span>' + T(p.pearl, scope) + '</span></div>' +
        (sim ? '<details class="acc" open><summary>' + t('a.sim') + '</summary><div style="padding:0 14px 14px"><div data-sim="' + sim + '"></div></div></details>' : '') +
        '<details class="acc"><summary>' + t('a.train') + '</summary><div class="stack" style="padding:0 14px 14px">' + trainBlock('phy-' + p.id) + '</div></details>' + '</div>';
    }).join('');
    return '<div class="page mv">' + aHead('a-physiologie') + aTools() + nav + (P.length ? body : missing(t('a2.title'))) + miniQuiz('a-physiologie', quizIds(function (q) { return q.topic === 'a-physiologie'; }), t('a.mini', { t: t('a2.title') })) + aNav('a-physiologie') + '</div>';
  }, after: function (host) { mountMinis(host); mountTrainers(host); }
};
var EXAM_TOOL = { av: ['acuity'], pupilles: ['rapd'], lampe: ['vanherick', 'patterns:slit'], fluoresceine: ['patterns:fluo:compare'], tonometrie: ['goldmann'], gonioscopie: ['gonio'], papille: ['structure'], oct: ['patterns:oct'], topographie: ['patterns:topo:compare'], 'champs-visuels': ['vf'], speculaire: ['specular'] };
function examBlock(p, i, prefix, scope) {
  var tools = (EXAM_TOOL[p.id] || []).map(function (t) { var parts = t.split(':'); return parts[0] === 'patterns' ? '<div data-sim="patterns" data-kind="' + parts[1] + '"' + (parts[2] ? ' data-compare="1"' : '') + '></div>' : '<div data-sim="' + parts[0] + '"></div>'; }).join('');
  var ph = photosFor('a-' + p.id);
  return '<div class="sec" id="ex-' + p.id + '">' + secH(prefix + (i + 1), I18N.title(p)) + enSub(p.en).replace('class="en"', 'class="en small"') + '<div class="callout"><span class="eyebrow">' + t('a.why') + '</span><span>' + T(p.why, scope) + '</span></div>' +
    HY.essentials('ex-' + p.id, t('hy.title')) + (ph.length ? Photo.carousel(ph) : '') +
    '<div class="twocol" data-dz="2"><div class="stack"><h3 class="h4">' + t('a.how') + '</h3><ol class="read">' + p.how.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ol></div><div class="stack"><h3 class="h4">' + t('a.pitfalls') + '</h3><ul class="blist red">' + p.pitfalls.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div></div>' +
    '<div class="twocol"><div class="panel-sunk stack"><h3 class="h4" style="color:var(--ok)">' + t('f.normal') + '</h3><ul class="blist ok">' + p.normal.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div><div class="panel-sunk stack"><h3 class="h4" style="color:var(--urgent)">' + t('f.patho') + '</h3><ul class="blist red">' + p.patho.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div></div>' +
    '<div class="callout amber"><span class="eyebrow">' + t('a.asks') + '</span><span>' + T(p.pearl, scope) + '</span></div>' +
    (tools ? '<details class="acc" open><summary>' + t('a.practice') + '</summary><div class="stack" style="padding:0 14px 14px">' + tools + '</div></details>' : '') +
    (HY.get('ex-' + p.id) ? '<details class="acc"><summary>' + t('a.train') + '</summary><div class="stack" style="padding:0 14px 14px">' + trainBlock('ex-' + p.id) + '</div></details>' : '') + '</div>';
}
var EXAM_CLIN = ['av', 'pupilles', 'lampe', 'fluoresceine', 'tonometrie', 'gonioscopie', 'pachymetrie', 'papille'], EXAM_IMG = ['oct', 'topographie', 'champs-visuels', 'speculaire'];
Views['a-examen'] = {
  title: t('a3.title'), render: function () {
    var E = ((OPH.A && OPH.A.exam) || []).filter(function (p) { return EXAM_CLIN.indexOf(p.id) >= 0; }), scope = Gloss.scope();
    var nav = '<div class="chips">' + E.map(function (p) { return '<button class="chip" data-act="goto" data-target="ex-' + p.id + '">' + U.esc(I18N.title(p)) + '</button>'; }).join('') + '</div>';
    return '<div class="page mv">' + aHead('a-examen') + aTools() + nav + (E.length ? E.map(function (p, i) { return examBlock(p, i, 'A3.', scope); }).join('') : missing(t('a3.title'))) +
      miniQuiz('a-examen', quizIds(function (q) { return q.topic === 'a-examen'; }), t('a.mini', { t: t('a3.title') })) + aNav('a-examen') + '</div>';
  }, after: function (host) { mountMinis(host); mountTrainers(host); }
};
Views['a-imagerie'] = {
  title: t('a4.title'), render: function () {
    var E = ((OPH.A && OPH.A.exam) || []).filter(function (p) { return EXAM_IMG.indexOf(p.id) >= 0; }), scope = Gloss.scope();
    var nav = '<div class="chips"><button class="chip" data-act="goto" data-target="im-sf">' + t('a4.sfchip') + '</button>' + E.map(function (p) { return '<button class="chip" data-act="goto" data-target="ex-' + p.id + '">' + U.esc(I18N.title(p)) + '</button>'; }).join('') + '</div>';
    return '<div class="page mv">' + aHead('a-imagerie') + aTools() + nav +
      '<div class="sec" id="im-sf">' + secH('A4.0', t('a4.sf')) + '<p class="read">' + t('a4.sfp') + '</p><div data-sim="structure"></div></div>' +
      (E.length ? E.map(function (p, i) { return examBlock(p, i, 'A4.', scope); }).join('') : missing(t('a4.title'))) +
      miniQuiz('a-imagerie', quizIds(function (q) { return q.topic === 'a-imagerie'; }), t('a.mini', { t: t('a4.title') })) + aNav('a-imagerie') + '</div>';
  }, after: function (host) { mountMinis(host); mountTrainers(host); }
};

var A5_GROUPS = [['cristallin', t('a5.g.cristallin')], ['echo', t('a5.g.echo')], ['retine', t('a5.g.retine')], ['nerf', t('a5.g.nerf')], ['neuro', t('a5.g.neuro')]];
var A5_URG = { urgent: ['urgent', t('urg.urgent')], rapide: ['highyield', t('urg.rapide')], routine: ['frequent', t('urg.routine')] };
Views['a-retine'] = {
  title: t('a5.title'), render: function () {
    var R = ((OPH.A && OPH.A.recog) || []).slice().sort(function (a, b) { return (a.order || 99) - (b.order || 99); }), scope = Gloss.scope();
    var nav = '<div class="chips">' + R.map(function (r) { return '<button class="chip" data-act="goto" data-target="rc-' + r.id + '">' + U.esc(I18N.title(r)) + '</button>'; }).join('') + '</div>';
    var legend = '<div class="row small muted" style="gap:10px;flex-wrap:wrap">' + Object.keys(A5_URG).map(function (k) { return '<span class="tag ' + A5_URG[k][0] + '">' + A5_URG[k][1] + '</span>'; }).join('') + '</div>';
    var intro = '<p class="read">' + t('a5.intro') + '</p>';
    var n = 0, body = A5_GROUPS.map(function (g) {
      var list = R.filter(function (r) { return r.group === g[0]; }); if (!list.length) return '';
      return '<div class="sec"><div class="eyebrow" style="margin:8px 0 4px">' + U.esc(g[1]) + '</div>' + list.map(function (r) {
        n++; var u = A5_URG[r.urgency] || A5_URG.routine, ph = photosFor('a5-' + r.id);
        return '<div class="sec" id="rc-' + r.id + '">' + secH('A5.' + n, I18N.title(r)) + '<div class="row tight">' + (I18N.lang === 'en' ? '' : '<span class="en small">' + U.esc(r.en) + '</span>') + '<span class="tag ' + u[0] + '">' + u[1] + '</span></div>' +
          '<div class="callout"><span class="eyebrow">' + t('caps.what') + '</span><span>' + T(r.what, scope) + '</span></div>' +
          (ph.length ? Photo.carousel(ph) : '') +
          HY.essentials('a5-' + r.id, t('hy.title')) +
          '<div class="twocol"><div class="stack"><h3 class="h4">' + t('a.look') + '</h3><ul class="blist">' + r.look.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div><div class="stack" data-dz="2"><h3 class="h4">' + t('a.pitfalls') + '</h3><ul class="blist red">' + r.pitfalls.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div></div>' +
          '<div class="callout violet" data-dz="2"><span class="eyebrow">' + t('a5.why') + '</span><span>' + T(r.why, scope) + '</span></div>' +
          '<div class="panel-sunk stack"' + (HY.get('a5-' + r.id) ? ' data-dz="2"' : '') + '><h3 class="h4">' + t('a5.action') + '</h3><ul class="blist">' + r.action.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div>' +
          '<details class="acc"><summary>' + t('a.asks') + ' : ' + U.md(r.pearl.q) + '</summary><div style="padding:0 14px 14px">' + T(r.pearl.a, scope) + '</div></details>' +
          (HY.get('a5-' + r.id) ? '<details class="acc"><summary>' + t('a.train') + '</summary><div class="stack" style="padding:0 14px 14px">' + trainBlock('a5-' + r.id) + '</div></details>' : '') + '</div>';
      }).join('') + '</div>';
    }).join('');
    return '<div class="page mv">' + aHead('a-retine') + aTools() + intro + legend + nav + (R.length ? body : missing(t('a5.title'))) +
      miniQuiz('a-retine', quizIds(function (q) { return q.topic === 'a-retine'; }), t('a.mini', { t: t('a5.title') })) + aNav('a-retine') + '</div>';
  }, after: function (host) { mountMinis(host); mountTrainers(host); }
};

/* ---------- Module A as micro-fiches: one screen per entry, list page + stepper (#a-<section>/<entry>) ---------- */
function aItems(page) {
  var A = OPH.A || {}, it = [];
  if (page === 'a-anatomie') {
    [['globe', 'a1.s1', 'a1.p1', 'anatomy'], ['cornee', 'a1.s2', 'a1.p2', 'corneaLayers'], ['angle', 'a1.s3', 'a1.p3', 'angleExplorer'], ['papille', 'a1.s4', null, 'discAnatomy'], ['annexes', 'a1.s5', null, 'annexes']].forEach(function (x) {
      it.push({ id: x[0], title: t(x[1]), body: function () { return (x[2] ? '<p class="read">' + t(x[2]) + '</p>' : '') + '<div data-sim="' + x[3] + '"></div>'; } });
    });
    var ph = photosFor('a-anatomie'); if (ph.length) it.push({ id: 'photos', title: t('a.photos'), thumb: ph[0].id, body: function () { return Photo.carousel(ph, { voir: 'a-anatomie' }); } });
  } else if (page === 'a-physiologie') {
    (A.physio || []).forEach(function (p) {
      it.push({ id: p.id, title: I18N.title(p), en: p.en, body: function (scope) {
        var sim = PHYSIO_SIM[p.id], h = HY.get('phy-' + p.id), ess = (h && h.essentials) || [];
        var main = '<p class="read">' + T(p.intro, scope) + '</p>' + hyList(ess.slice(0, 5), t('hy.title'));
        return (sim ? '<div data-sim="' + sim + '"></div>' : '') + (p.card ? aCard(p.card, scope) : main) +
          levelBlocks([
            { lvl: 1, title: t('f.more'), html: (p.card ? aCardRest(p.card, scope) + main : '') + (p.numbers && p.numbers.length ? '<div class="grid3">' + p.numbers.map(function (n) { return '<div class="readout"><span class="u">' + U.esc(n.label) + '</span><span class="small mono" style="font-weight:700">' + U.esc(n.value) + '</span></div>'; }).join('') + '</div>' : '') + '<ul class="blist read">' + (p.points || []).map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul>' + (p.pearl ? '<div class="callout amber"><span class="eyebrow">' + t('a.pearl') + '</span><span>' + T(p.pearl, scope) + '</span></div>' : '') },
            { lvl: 2, title: t('a.train'), html: trainBlock('phy-' + p.id) }
          ]);
      } });
    });
  } else if (page === 'a-examen' || page === 'a-imagerie') {
    var ids = page === 'a-examen' ? EXAM_CLIN : EXAM_IMG;
    if (page === 'a-imagerie') it.push({ id: 'structure', title: t('a4.sfchip'), body: function () { return '<p class="read">' + t('a4.sfp') + '</p><div data-sim="structure"></div>'; } });
    (A.exam || []).filter(function (p) { return ids.indexOf(p.id) >= 0; }).forEach(function (p) {
      var ph = photosFor('a-' + p.id);
      it.push({ id: p.id, title: I18N.title(p), en: p.en, thumb: ph[0] && ph[0].id, body: function (scope) {
        var toolL = (EXAM_TOOL[p.id] || []).map(function (x) { var parts = x.split(':'); return parts[0] === 'patterns' ? '<div data-sim="patterns" data-kind="' + parts[1] + '"' + (parts[2] ? ' data-compare="1"' : '') + '></div>' : '<div data-sim="' + parts[0] + '"></div>'; });
        var tools = toolL.slice(0, 1).join(''), extra = p.card ? toolL.slice(1).join('') : ''; if (!p.card) tools = toolL.join('');
        var h = HY.get('ex-' + p.id), ess = (h && h.essentials) || [];
        var main = '<div class="callout"><span class="eyebrow">' + t('a.why') + '</span><span>' + T(p.why, scope) + '</span></div>' + hyList(ess.slice(0, 5), t('hy.title'));
        return (tools || (ph.length ? Photo.carousel(ph, { voir: 'a-' + p.id }) : '')) + (p.card ? aCard(p.card, scope) : main) +
          levelBlocks([
            { lvl: 1, title: p.card ? t('f.more') : t('a.normpatho'), html: (p.card ? aCardRest(p.card, scope) + extra + main + '<h3 class="h4">' + t('a.normpatho') + '</h3>' : '') + '<div class="twocol"><div class="panel-sunk stack"><h3 class="h4" style="color:var(--ok)">' + t('f.normal') + '</h3><ul class="blist ok">' + (p.normal || []).map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div><div class="panel-sunk stack"><h3 class="h4" style="color:var(--urgent)">' + t('f.patho') + '</h3><ul class="blist red">' + (p.patho || []).map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div></div>' + (tools && ph.length ? Photo.carousel(ph, { voir: 'a-' + p.id }) : '') },
            { lvl: 2, title: t('a.howpit'), html: '<h3 class="h4">' + t('a.how') + '</h3><ol class="read">' + (p.how || []).map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ol><h3 class="h4">' + t('a.pitfalls') + '</h3><ul class="blist red">' + (p.pitfalls || []).map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul>' },
            { lvl: 2, title: t('a.asks.train'), html: (p.pearl ? '<div class="callout amber"><span class="eyebrow">' + t('a.asks') + '</span><span>' + T(p.pearl, scope) + '</span></div>' : '') + (HY.get('ex-' + p.id) ? trainBlock('ex-' + p.id) : '') }
          ]);
      } });
    });
  } else if (page === 'a-retine') {
    ((A.recog || []).slice().sort(function (a, b) { return (a.order || 99) - (b.order || 99); })).forEach(function (r) {
      var ph = photosFor('a5-' + r.id), u = A5_URG[r.urgency] || A5_URG.routine;
      it.push({ id: r.id, title: I18N.title(r), en: r.en, thumb: ph[0] && ph[0].id, tag: '<span class="tag ' + u[0] + '">' + u[1] + '</span>', body: function (scope) {
        var h = HY.get('a5-' + r.id), ess = (h && h.essentials) || [];
        var main = '<div class="callout"><span class="eyebrow">' + t('caps.what') + '</span><span>' + T(r.what, scope) + '</span></div>' + hyList(ess.slice(0, 5), t('hy.title'));
        return (ph.length ? Photo.carousel(ph, { voir: r.id }) : '') + (r.card ? aCard(r.card, scope) : main) +
          levelBlocks([
            { lvl: 1, title: r.card ? t('f.more') : t('a5.lookact'), html: (r.card ? aCardRest(r.card, scope) + main : '') + '<h3 class="h4">' + t('a.look') + '</h3><ul class="blist">' + (r.look || []).map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul><h3 class="h4">' + t('a5.action') + '</h3><ul class="blist">' + (r.action || []).map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul>' },
            { lvl: 2, title: t('a5.pitwhy'), html: '<ul class="blist red">' + (r.pitfalls || []).map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul><div class="callout violet"><span class="eyebrow">' + t('a5.why') + '</span><span>' + T(r.why, scope) + '</span></div>' },
            { lvl: 2, title: t('a.asks.train'), html: (r.pearl ? '<p><b>' + U.md(r.pearl.q) + '</b></p><p>' + T(r.pearl.a, scope) + '</p>' : '') + (HY.get('a5-' + r.id) ? trainBlock('a5-' + r.id) : '') }
          ]);
      } });
    });
  }
  return it;
}
/* default micro-fiche card (content editors: card = { lead, keys[3–4], ask: { q, a } }) */
function aCardRest(card, scope) { var k = (card && card.keys || []).slice(3); return k.length ? '<ul class="blist">' + k.map(function (x) { return '<li>' + T(I18N.pick(x), scope) + '</li>'; }).join('') + '</ul>' : ''; }
function aCard(card, scope) {
  if (!card) return '';
  var c = I18N.pick(card.lead) ? card : card;
  return '<p class="read a-lead">' + T(I18N.pick(c.lead), scope) + '</p>' + (c.keys && c.keys.length ? '<ul class="blist a-keys">' + c.keys.slice(0, 3).map(function (k) { return '<li>' + T(I18N.pick(k), scope) + '</li>'; }).join('') + '</ul>' : '') +
    (c.ask && c.ask.q ? '<div class="pearls"><div class="pearl-card" role="button" tabindex="0" data-pearl="0" aria-expanded="false"><span class="who">' + t('f.asks') + '</span><span class="q">' + U.md(I18N.pick(c.ask.q)) + '</span><span class="hint">' + t('f.think') + '</span><span class="a" hidden>' + T(I18N.pick(c.ask.a), scope) + '</span></div></div>' : '');
}
function aThumb(page, it) {
  var id = it.thumb || (page === 'a-retine' ? (photosFor('a5-' + it.id)[0] || {}).id : page === 'a-physiologie' ? null : (photosFor('a-' + it.id)[0] || {}).id);
  var R = window.OPH_RESTRICTED || {};
  return id && D.cat(id) && !R[id] ? '<img loading="lazy" src="' + Photo.src(id) + '" alt="">' : '<span class="a-ico" aria-hidden="true">' + U.esc((it.title || '?').charAt(0)) + '</span>';
}
function aListView(page) {
  return { title: (A_SECTIONS.filter(function (x) { return x.id === page; })[0] || {}).title, render: function () {
    var items = aItems(page), q = quizIds(function (x) { return x.topic === page; });
    return '<div class="page">' + aHead(page) + '<div class="a-list">' + items.map(function (it, i) {
      return '<a class="lrow" href="#' + page + '/' + it.id + '"><span class="lthumb">' + aThumb(page, it) + '</span><span class="stack" style="gap:2px;min-width:0"><span class="xs mono muted">' + (A_SECTIONS.filter(function (x) { return x.id === page; })[0] || {}).n + '.' + (i + 1) + '</span><b>' + U.esc(it.title) + '</b>' + (it.tag || '') + '</span></a>';
    }).join('') + '</div>' + miniQuiz(page, q, t('a.mini', { t: (A_SECTIONS.filter(function (x) { return x.id === page; })[0] || {}).title })) + aNav(page) + '</div>';
  }, after: function (host) { mountMinis(host); } };
}
function aItemView(page, id) {
  var sec = A_SECTIONS.filter(function (x) { return x.id === page; })[0] || { n: 'A', title: page };
  return { title: sec.title, trackId: page, render: function () {
    var items = aItems(page), i = items.map(function (x) { return x.id; }).indexOf(id), it = items[i];
    if (!it) return '<div class="page"><div class="empty">' + t('view.notfound') + '</div><a class="btn primary" href="#' + page + '">' + U.esc(sec.title) + '</a></div>';
    var scope = Gloss.scope([it.title, it.en]), prev = items[i - 1], next = items[i + 1], dpt = Settings.get().depth;
    var nextSec = A_SECTIONS[A_SECTIONS.map(function (x) { return x.id; }).indexOf(page) + 1];
    return '<div class="page fiche-page a-item">' + crumbs([[t('nav.home'), 'accueil'], ['Module A', 'module-a'], [sec.n, page], [sec.n + '.' + (i + 1), null]]) +
      '<div class="fiche-bar"><div class="fb-top"><a class="eyebrow" href="#' + page + '">' + sec.n + ' · ' + U.esc(sec.title) + '</a>' + (it.tag || '') + '<span class="xs mono muted">' + (i + 1) + ' / ' + items.length + '</span><button type="button" class="chip lvl-chip" data-act="lvl-open" aria-expanded="false" aria-controls="lvl-pop">' + t('f.level.chip', { l: DEPTHS[dpt].t }) + '</button></div>' +
      '<h1 class="fb-title">' + U.esc(it.title) + '</h1><div class="lvl-pop" id="lvl-pop" hidden><span class="xs muted">' + t('f.level') + '</span>' + depthSeg(true) + '</div>' +
      '<div class="a-dots" aria-hidden="true">' + items.map(function (x, k) { return '<i class="' + (k === i ? 'on' : k < i ? 'done' : '') + '"></i>'; }).join('') + '</div></div>' +
      '<section class="mv fstep-body" data-step-body="' + U.esc(id) + '">' + it.body(scope) + '</section>' +
      '<nav class="row fstep-nav" aria-label="' + U.esc(sec.title) + '"><a class="btn ghost" data-fprev href="#' + (prev ? page + '/' + prev.id : page) + '">← ' + U.esc(prev ? prev.title : t('a.list')) + '</a><a class="btn primary" data-fnext href="#' + (next ? page + '/' + next.id : (nextSec ? nextSec.id : 'module-b')) + '">' + U.esc(next ? next.title : (nextSec ? nextSec.title : t('nav.module', { m: 'B', name: L.modules.B }))) + ' →</a></nav></div>';
  }, after: function (host) {
    mountMinis(host); mountTrainers(host);
    var go = function (sel) { var a = U.$(sel, host); if (a) location.hash = a.getAttribute('href').slice(1); };
    var arrows = function (ev) { var pc0 = ev.target.closest && ev.target.closest('[data-pearl]'); if (pc0 && (ev.key === 'Enter' || ev.key === ' ') && ev.target === pc0) { ev.preventDefault(); pc0.click(); return; } if (ev.defaultPrevented || ev.altKey || ev.ctrlKey || ev.metaKey || /input|select|textarea/i.test(ev.target.tagName || '')) return; if (U.$('#lightbox:not([hidden])') || U.$('#drawer:not([hidden])')) return; if (ev.key === 'ArrowRight') go('[data-fnext]'); else if (ev.key === 'ArrowLeft') go('[data-fprev]'); };
    var pearl = function (ev) { var pc = !ev.target.closest('.gt, #gt-pop') && ev.target.closest('[data-pearl]'); if (!pc) return; var a = U.$('.a', pc), hint = U.$('.hint', pc); a.hidden = !a.hidden; if (hint) hint.hidden = !a.hidden; pc.setAttribute('aria-expanded', String(!a.hidden)); };
    host.addEventListener('click', pearl);
    document.addEventListener('keydown', arrows);
    if (U.wordsDev()) console.info('[words] ' + page + '/' + id + ': ' + U.wordsVisible(U.$('[data-step-body]', host)) + ' visible words');
    return function () { document.removeEventListener('keydown', arrows); host.removeEventListener('click', pearl); };
  } };
}
['a-anatomie', 'a-physiologie', 'a-examen', 'a-imagerie', 'a-retine'].forEach(function (pg) { Views[pg] = aListView(pg); });

/* ---------- capsules B0/C0 as cards (#b-bases/<n>) ---------- */
function capsuleCards(c, m) {
  var cards = [];
  var scope0 = Gloss.scope(), h = HY.get(c.id);
  cards.push({ title: c.title, body: function (scope) { var ph = photosFor(c.id); return (ph.length ? Photo.carousel(ph, { voir: c.id }) : '') + '<p class="read">' + T(c.intro, scope) + '</p>' + levelBlocks([{ lvl: 1, title: t('caps.hy'), html: hyList(((h && h.essentials) || []).slice(0, 5), t('caps.hy')) }]); } });
  (c.sections || []).forEach(function (s2) {
    cards.push({ title: s2.title, body: function (scope) {
      var media = (s2.figure ? '<div class="cm-fig">' + Figures.render(s2.figure) + '</div>' : '') + (s2.photo && D.cat(s2.photo) ? '<div class="cm-ph">' + Photo.card({ id: s2.photo, caption: D.cat(s2.photo).title, look: '', reveal: [] }) + '</div>' : '');
      return (media ? '<div class="cap-media">' + media + '</div>' : '') + '<p class="read">' + T(s2.text, scope) + '</p>' + levelBlocks([{ lvl: 2, title: t('f.more'), html: s2.bullets && s2.bullets.length ? '<ul class="blist read">' + s2.bullets.map(function (b) { return '<li>' + T(b, scope) + '</li>'; }).join('') + '</ul>' : '' }]);
    } });
  });
  if ((c.toolbox || []).length) cards.push({ title: t('caps.tools.h'), body: function (scope) { // compact chips: one tool open at a time
    return '<p class="small muted">' + t('caps.tools.tap') + '</p><div class="chips tool-chips">' + c.toolbox.map(function (tl, k) { return '<button type="button" class="chip" data-tool="' + k + '" aria-pressed="false">' + U.esc(tl.name) + '</button>'; }).join('') + '</div>' +
      c.toolbox.map(function (tl, k) { return '<div class="card tool-panel" data-toolp="' + k + '" hidden><b>' + U.esc(tl.name) + '</b><div class="kv"><span class="k">' + t('caps.what') + '</span><span>' + T(tl.what, scope) + '</span></div><div class="kv"><span class="k">' + t('caps.how') + '</span><span>' + T(tl.how, scope) + '</span></div><div class="kv"><span class="k">' + t('caps.when') + '</span><span>' + T(tl.when, scope) + '</span></div><div class="kv" data-dz="2"><span class="k">' + t('caps.cx') + '</span><span>' + T(tl.cx, scope) + '</span></div></div>'; }).join(''); } });
  if ((c.vocab || []).length) cards.push({ title: t('caps.vocab'), body: function () { return '<details class="acc"><summary>' + t('caps.vocab') + ' (' + c.vocab.length + ')</summary><div class="tbl-wrap acc-b"><table class="tbl"><tbody>' + c.vocab.map(function (v) { return '<tr><td>' + U.esc(v.term) + '</td><td>' + U.md(v.def) + '</td></tr>'; }).join('') + '</tbody></table></div></details>' + (h ? '<div class="stack">' + trainBlock(c.id) + '</div>' : ''); } });
  return cards;
}
function capsuleCardView(id, n) {
  var m = id === 'b-bases' ? 'B' : 'C';
  return { title: t('nav.foundations'), trackId: id, render: function () {
    var c = D.capsule(id); if (!c) return '<div class="page">' + missing(t('caps.this')) + '</div>';
    var cards = capsuleCards(c, m), i = Math.max(0, Math.min(cards.length - 1, (n || 1) - 1)), cd = cards[i], scope = Gloss.scope(), first = D.ordered(m)[0], dpt = Settings.get().depth;
    var href = function (k) { return '#' + id + (k > 0 ? '/' + (k + 1) : ''); };
    return '<div class="page fiche-page mv">' + crumbs([[t('nav.learn'), 'apprendre'], ['Module ' + m, 'module-' + m.toLowerCase()], [m + '0', null]]) +
      '<div class="fiche-bar"><div class="fb-top"><span class="eyebrow">' + t('caps.eyebrow', { m: m }) + '</span><span class="xs mono muted">' + (i + 1) + ' / ' + cards.length + '</span><button type="button" class="chip lvl-chip" data-act="lvl-open" aria-expanded="false" aria-controls="lvl-pop">' + t('f.level.chip', { l: DEPTHS[dpt].t }) + '</button></div>' +
      '<h1 class="fb-title">' + U.esc(i === 0 ? c.title : cd.title) + (i === 0 && window.I18N ? I18N.badge(c) : '') + '</h1><div class="lvl-pop" id="lvl-pop" hidden><span class="xs muted">' + t('f.level') + '</span>' + depthSeg(true) + '</div>' +
      '<div class="a-dots" aria-hidden="true">' + cards.map(function (x, k) { return '<i class="' + (k === i ? 'on' : k < i ? 'done' : '') + '"></i>'; }).join('') + '</div></div>' +
      '<section class="fstep-body" data-step-body="' + (i + 1) + '">' + cd.body(scope) + '</section>' +
      (i === cards.length - 1 ? '<details class="acc src-acc"><summary>' + t('aside.reviewreport') + '</summary><div style="padding:0 14px 14px">' + reviewMeta(id) + '</div></details><div class="row">' + readBtn(id) + '</div>' : '') +
      '<nav class="row fstep-nav"><a class="btn ghost" data-fprev href="' + (i > 0 ? href(i - 1) : '#module-' + m.toLowerCase()) + '">← ' + U.esc(i > 0 ? (i - 1 === 0 ? c.title : cards[i - 1].title) : 'Module ' + m) + '</a><a class="btn primary" data-fnext href="' + (i < cards.length - 1 ? href(i + 1) : (first ? '#' + first.id + '/voir' : '#module-' + m.toLowerCase())) + '">' + U.esc(i < cards.length - 1 ? cards[i + 1].title : (first ? I18N.title(first) : 'Module ' + m)) + ' →</a></nav></div>';
  }, after: function (host) {
    mountTrainers(host);
    var tool = function (ev) { var b = ev.target.closest('[data-tool]'); if (!b) return; var k = b.getAttribute('data-tool'), on = b.getAttribute('aria-pressed') !== 'true'; U.$$('[data-tool]', host).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b && on)); }); U.$$('[data-toolp]', host).forEach(function (pn) { pn.hidden = !(on && pn.getAttribute('data-toolp') === k); }); };
    host.addEventListener('click', tool);
    var go = function (sel) { var a = U.$(sel, host); if (a) location.hash = a.getAttribute('href').slice(1); };
    var arrows = function (ev) { if (ev.defaultPrevented || ev.altKey || ev.ctrlKey || ev.metaKey || /input|select|textarea/i.test(ev.target.tagName || '')) return; if (U.$('#lightbox:not([hidden])') || U.$('#drawer:not([hidden])')) return; if (ev.key === 'ArrowRight') go('[data-fnext]'); else if (ev.key === 'ArrowLeft') go('[data-fprev]'); };
    document.addEventListener('keydown', arrows);
    if (U.wordsDev()) console.info('[words] ' + id + '/' + (n || 1) + ': ' + U.wordsVisible(U.$('[data-step-body]', host)) + ' visible words');
    return function () { document.removeEventListener('keydown', arrows); host.removeEventListener('click', tool); };
  } };
}

/* ---------- Modules B and C ---------- */
var COMPARE = {
  B: { title: 'Kératites infectieuses : les distinguer d’un coup d’œil', note: 'Toute kératite chez un porteur de lentilles est infectieuse jusqu’à preuve du contraire. Ce tableau se lit après les fiches B3 à B5.',
    cols: ['', 'Bactérienne', 'Fongique', 'Acanthamoeba', 'HSV épithéliale'],
    rows: [
      ['Terrain', 'Lentilles cornéennes, trauma, surface malade', 'Trauma végétal, lentilles, stéroïdes', 'Lentilles + eau (douche, piscine, rinçage au robinet)', 'Antécédent d’herpès, stress, immunosuppression'],
      ['Douleur', 'Importante', 'Modérée, progressive', '**Disproportionnée** par rapport aux signes', 'Modérée ; sensibilité cornéenne diminuée'],
      ['Aspect', 'Infiltrat dense blanc-jaune, bords nets, réaction de chambre, parfois hypopyon', 'Infiltrat sec, bords plumeux, lésions satellites, plaque endothéliale', 'Début : épithéliopathie, pseudodendrites, périnévrite radiaire ; tard : anneau', 'Dendrite avec bulbes terminaux qui prend la fluorescéine'],
      ['Évolution', 'Rapide (heures à jours)', 'Lente (jours à semaines)', 'Lente, chronique, souvent prise pour un HSV', 'Récidives'],
      ['Examen clé', 'Grattage et cultures (Gram)', 'KOH ou calcofluor, Sabouraud, microscopie confocale', 'Microscopie confocale, PCR, culture sur gélose non nutritive', 'Clinique (± PCR)'],
      ['Traitement', 'Fluoroquinolone ou gouttes fortifiées aux heures', 'Natamycine 5 % (filamenteux), voriconazole', 'Biguanide ± diamidine pendant des mois', 'Antiviral oral ou topique'],
      ['Stéroïde ?', 'Pas d’emblée ; aucun bénéfice global (SCUT, SCUT II)', 'Non', 'Pas au début', 'Contre-indiqué en épithéliale ; utile en stromale immune sous antiviral']
    ] },
  C: { title: 'Glaucomes secondaires : qui, quoi, quel piège', note: '« Secondaire » veut dire qu’une autre maladie gêne le drainage. Ce tableau se lit après les fiches C6 à C9.',
    cols: ['', 'Pseudo-exfoliatif', 'Pigmentaire', 'Cortisonique', 'Uvéitique', 'Néovasculaire'],
    rows: [
      ['Qui', 'Personne âgée, souvent un œil d’abord', 'Jeune homme myope', 'Toute personne sous corticostéroïde (« répondeurs »)', 'Uvéite active ou chronique', 'Ischémie rétinienne : OVCR, rétinopathie diabétique, ischémie carotidienne'],
      ['Signe clé', 'Dépôts en cible sur la capsule, ligne de Sampaolesi', 'Fuseau de Krukenberg, transillumination radiaire, pigment dense 360°', 'PIO qui monte quelques semaines après le début', 'Précipités rétrocornéens, cellules, synéchies', 'Néovaisseaux au rebord pupillaire et dans l’angle'],
      ['Mécanisme', 'Matériel fibrillaire et pigment bouchent le trabéculum', 'Pigment arraché par frottement iris-zonules', 'Matrice trabéculaire épaissie', 'Trabéculite, débris, synéchies, bloc pupillaire', 'Membrane fibrovasculaire puis fermeture de l’angle'],
      ['Piège', 'Zonules fragiles à la chirurgie de cataracte', 'Pics de PIO à l’effort ; SLT à énergie réduite', 'Glaucome iatrogène : toujours demander les stéroïdes (même inhalés ou cutanés)', 'La PIO peut monter quand l’inflammation se calme', 'Traiter l’ischémie (anti-VEGF + PRP) avant la PIO seule'],
      ['Traitement typique', 'Comme le GPAO mais cible plus basse ; bonne réponse à la SLT', 'Prostaglandine, SLT douce', 'Arrêter ou changer le stéroïde, gouttes, SLT', 'Contrôler l’inflammation ; éviter la pilocarpine', 'Anti-VEGF + PRP, gouttes ; tube si angle fermé']
    ] }
};
/* English version of the comparison tables (same rows and order as COMPARE) */
var COMPARE_EN = {
  B: { title: 'Infectious keratitis: tell them apart at a glance', note: 'Any keratitis in a contact lens wearer is infectious until proven otherwise. Read this table after topics B3 to B5.',
    cols: ['', 'Bacterial', 'Fungal', 'Acanthamoeba', 'HSV epithelial'],
    rows: [
      ['Setting', 'Contact lenses, trauma, diseased ocular surface', 'Plant-matter trauma, contact lenses, steroids', 'Contact lenses + water (shower, pool, rinsing with tap water)', 'History of herpes, stress, immunosuppression'],
      ['Pain', 'Severe', 'Moderate, progressive', '**Out of proportion** to the signs', 'Moderate; reduced corneal sensation'],
      ['Appearance', 'Dense white-yellow infiltrate, sharp edges, anterior chamber reaction, sometimes hypopyon', 'Dry infiltrate, feathery edges, satellite lesions, endothelial plaque', 'Early: epitheliopathy, pseudodendrites, radial perineuritis; late: ring infiltrate', 'Dendrite with terminal bulbs that stains with fluorescein'],
      ['Course', 'Fast (hours to days)', 'Slow (days to weeks)', 'Slow, chronic, often mistaken for HSV', 'Recurrences'],
      ['Key test', 'Scraping and cultures (Gram)', 'KOH or calcofluor, Sabouraud, confocal microscopy', 'Confocal microscopy, PCR, culture on non-nutrient agar', 'Clinical (± PCR)'],
      ['Treatment', 'Fluoroquinolone or hourly fortified drops', 'Natamycin 5% (filamentous), voriconazole', 'Biguanide ± diamidine for months', 'Oral or topical antiviral'],
      ['Steroid?', 'Not at first; no overall benefit (SCUT, SCUT II)', 'No', 'Not early on', 'Contraindicated in epithelial disease; useful in immune stromal disease under antiviral cover']
    ] },
  C: { title: 'Secondary glaucomas: who, what, which pitfall', note: '“Secondary” means another disease is blocking outflow. Read this table after topics C6 to C9.',
    cols: ['', 'Pseudoexfoliation', 'Pigmentary', 'Steroid-induced', 'Uveitic', 'Neovascular'],
    rows: [
      ['Who', 'Older person, often one eye first', 'Young myopic man', 'Anyone on corticosteroids (“responders”)', 'Active or chronic uveitis', 'Retinal ischemia: CRVO, diabetic retinopathy, carotid ischemia'],
      ['Key sign', 'Target-pattern deposits on the lens capsule, Sampaolesi line', 'Krukenberg spindle, radial transillumination defects, dense 360° angle pigment', 'IOP rising a few weeks after starting the steroid', 'Keratic precipitates, cells, synechiae', 'New vessels at the pupil margin and in the angle'],
      ['Mechanism', 'Fibrillar material and pigment clog the trabecular meshwork', 'Pigment rubbed off by iris–zonule contact', 'Thickened trabecular matrix', 'Trabeculitis, debris, synechiae, pupillary block', 'Fibrovascular membrane, then angle closure'],
      ['Pitfall', 'Fragile zonules at cataract surgery', 'IOP spikes with exercise; SLT at reduced energy', 'Iatrogenic glaucoma: always ask about steroids (even inhaled or skin)', 'IOP can rise as the inflammation settles', 'Treat the ischemia (anti-VEGF + PRP), not the IOP alone'],
      ['Typical treatment', 'As for POAG but with a lower target; good response to SLT', 'Prostaglandin, gentle SLT', 'Stop or change the steroid, drops, SLT', 'Control the inflammation; avoid pilocarpine', 'Anti-VEGF + PRP, drops; tube if the angle is closed']
    ] }
};
function compareTable(m) {
  var c = (I18N.lang === 'en' && COMPARE_EN[m]) || COMPARE[m]; if (!c) return '';
  return '<div class="sec">' + secH('⇄', c.title) + '<p class="small muted">' + U.esc(c.note) + '</p><div class="tbl-wrap"><table class="tbl"><thead><tr>' + c.cols.map(function (h) { return '<th>' + U.esc(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
    c.rows.map(function (r) { return '<tr>' + r.map(function (x) { return '<td>' + U.md(x) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div></div>';
}
var TAG_LEGEND = '<div class="row tight small">' + L.tag('urgent') + '<span class="muted">' + t('legend.urgent') + '</span>' + L.tag('frequent') + '<span class="muted">' + t('legend.frequent') + '</span>' + L.tag('highyield') + '<span class="muted">' + t('legend.highyield') + '</span>' + L.tag('piege') + '<span class="muted">' + t('legend.piege') + '</span></div>';
function moduleView(m) {
  return {
    title: L.modules[m], render: function () {
      var unl = Prog.unlocked(m), list = D.ordered(m), cap = m === 'B' ? 'b-bases' : 'c-bases', capD = D.capsule(cap);
      var dateK = m === 'B' ? 'cornee' : 'glaucome';
      var cards = list.map(function (f, i) {
        var st = Prog.ficheDone(f.id) ? t('st.read') : Prog.ficheSeen(f.id) ? t('st.started') : '';
        return '<a class="card link fcard" href="#' + f.id + '"><span class="fcard-img">' + thumbFor(f.id) + '</span><span class="eyebrow">' + m + (i + 1) + (st ? ' · ' + st : '') + '</span><h3>' + U.esc(I18N.title(f)) + '</h3><span class="row tight">' + (f.tags || []).filter(function (x) { return x === 'urgent' || x === 'frequent'; }).slice(0, 1).map(L.tag).join('') + '</span></a>'; // micro-card: photo + title + one tag
      }).join('');
      var bonus = (OPH.bonus[m] || []).map(function (b) { return '<div class="card stack"><h3 class="h4">' + U.esc(I18N.title(b)) + '</h3>' + (I18N.lang === 'en' ? '' : '<span class="small muted"><i>' + U.esc(b.en) + '</i></span>') + '<span class="small"><b>' + t('mod.clue') + '</b>' + U.md(b.clue) + '</span><span class="small"><b>' + t('mod.action') + '</b>' + U.md(b.action) + '</span></div>'; }).join('');
      var bph = photosFor('bonus-' + m);
      return '<div class="page">' + crumbs([[t('nav.learn'), 'apprendre'], ['Module ' + m, null]]) +
        '<div class="phead"><div class="eyebrow">' + U.esc(Dates.custom() ? t('mod.eyebrow', { m: m, d: Dates.fmt(Dates.get(dateK)), r: Dates.rel(Dates.get(dateK)) }) : 'Module ' + m) + '</div><h1>' + L.modules[m] + '</h1><p class="muted" style="max-width:62ch">' + t('mod.lead2') + '</p></div>' +
        (unl ? '' : lockHtml(m)) +
        '<a class="card link" href="#' + cap + '" style="border-color:var(--cobalt)"><span class="eyebrow">' + t('mod.first', { m: m }) + (Prog.ficheDone(cap) ? ' · ' + t('st.read') : '') + '</span><h3>' + U.esc(capD ? capD.title : t('nav.foundations')) + '</h3><span class="small muted">' + t('mod.caps.d') + '</span></a>' +
        '<div class="grid2 micro-grid">' + (cards || missing(t('mod.fiches'))) + '</div>' +
        (COMPARE[m] ? '<details class="acc"><summary>' + U.esc(((I18N.lang === 'en' && COMPARE_EN[m]) || COMPARE[m]).title) + '</summary><div class="acc-b">' + compareTable(m) + '</div></details>' : '') +
        (bonus ? '<details class="acc"><summary>' + t('mod.bonus') + '</summary><div class="acc-b stack"><div class="grid3">' + bonus + '</div>' + (bph.length ? Photo.gallery(bph) : '') + '</div></details>' : '') +
        '<div class="row"><button class="btn primary" data-act="quiz-module" data-m="' + m + '">' + t('mod.quiz', { m: m }) + '</button><a class="btn" href="#express-' + m.toLowerCase() + '">' + t('mod.express') + '</a><a class="btn" href="#cas">' + t('mod.cases') + '</a></div></div>';
    }
  };
}
Views['module-b'] = moduleView('B');
Views['module-c'] = moduleView('C');

/* ---------- capsules ---------- */
function capsuleView(id) {
  return {
    title: t('nav.foundations'), render: function () {
      var c = D.capsule(id), m = id === 'b-bases' ? 'B' : 'C';
      if (!c) return '<div class="page">' + missing(t('caps.this')) + '</div>';
      var scope = Gloss.scope(), first = D.ordered(m)[0];
      var sections = c.sections.map(function (s, i) {
        return '<div class="sec">' + secH(m + '0.' + (i + 1), s.title) + '<p class="read">' + T(s.text, scope) + '</p>' + (s.bullets && s.bullets.length ? '<ul class="blist read" data-dz="2">' + s.bullets.map(function (b) { return '<li>' + T(b, scope) + '</li>'; }).join('') + '</ul>' : '') +
          ((s.figure || (s.photo && D.cat(s.photo))) ? '<div class="cap-media">' + (s.figure ? '<div class="cm-fig">' + Figures.render(s.figure) + '</div>' : '') + (s.photo && D.cat(s.photo) ? '<div class="cm-ph">' + Photo.card({ id: s.photo, caption: D.cat(s.photo).title, look: '', reveal: [] }) + '</div>' : '') + '</div>' : '') + '</div>';
      }).join('');
      var tools = '<div class="sec">' + secH(t('caps.tools'), t('caps.tools.h')) + '<p class="small muted">' + t('caps.tools.d') + '</p>' + c.toolbox.map(function (tl) {
        return '<details class="acc"><summary>' + U.esc(tl.name) + ' <span class="small muted" style="font-weight:400"><i>' + U.esc(tl.en) + '</i></span></summary><div class="acc-b"><div class="kv"><span class="k">' + t('caps.what') + '</span><span>' + T(tl.what, scope) + '</span></div><div class="kv"><span class="k">' + t('caps.how') + '</span><span>' + T(tl.how, scope) + '</span></div><div class="kv"><span class="k">' + t('caps.when') + '</span><span>' + T(tl.when, scope) + '</span></div><div class="kv"><span class="k">' + t('caps.cx') + '</span><span>' + T(tl.cx, scope) + '</span></div></div></details>';
      }).join('') + '</div>';
      var vocab = '<div class="sec" data-dz="2">' + secH(t('caps.words'), t('caps.vocab')) + '<div class="tbl-wrap"><table class="tbl"><tbody>' + c.vocab.map(function (v) { return '<tr><td>' + U.esc(v.term) + '</td><td>' + U.md(v.def) + '</td></tr>'; }).join('') + '</tbody></table></div></div>';
      var ph = photosFor(id);
      return '<div class="page mv">' + crumbs([[t('nav.learn'), 'apprendre'], ['Module ' + m, 'module-' + m.toLowerCase()], [m + '0', null]]) + (Prog.unlocked(m) ? '' : lockHtml(m)) +
        '<div class="phead"><div class="eyebrow">' + t('caps.eyebrow', { m: m }) + '</div><h1>' + U.esc(c.title) + (window.I18N ? I18N.badge(c) : '') + '</h1>' + enSub(c.en) + '<p class="read">' + T(c.intro, scope) + '</p>' + aTools() + '</div>' +
        HY.essentials(id, t('caps.hy')) + (ph.length ? '<div class="sec">' + secH(t('caps.see'), t('caps.realimg')) + Photo.carousel(ph) + '</div>' : '') +
        sections + tools + vocab + (HY.get(id) ? '<div class="sec">' + secH(t('caps.game'), t('f.train')) + trainBlock(id) + '</div>' : '') +
        '<details class="acc src-acc"><summary>' + t('aside.reviewreport') + '</summary><div style="padding:0 14px 14px">' + reviewMeta(id) + '</div></details>' +
        '<div class="row" style="justify-content:space-between"><a class="btn ghost" href="#module-' + m.toLowerCase() + '">← Module ' + m + '</a>' + readBtn(id) + (first ? '<a class="btn" href="#' + first.id + '">' + U.esc(first.title) + ' →</a>' : '') + '</div></div>';
    }, after: function (host) { mountTrainers(host); }
  };
}
Views['b-bases'] = capsuleCardView('b-bases', 1);
Views['c-bases'] = capsuleCardView('c-bases', 1);

/* ---------- fiche ---------- */
/* ---------- fiche: 4 screens (Voir → Comprendre → Décider → S'entraîner), one per route #<id>/<step> ---------- */
var FSTEPS = ['voir', 'comprendre', 'decider', 'entrainer'];
var FSTEP_KEY = { voir: 'f.see', comprendre: 'f.understand', decider: 'f.decide', entrainer: 'f.train' };
function ficheStep(id) { var s = (Store.p.fstep || {})[id]; return s && FSTEPS.indexOf(s.s) >= 0 ? s.s : 'voir'; }
/* collapsed overflow block (open by default from level 2) */
Actions['lvl-open'] = function (el) { var pop = U.$('#lvl-pop'); if (!pop) return; pop.hidden = !pop.hidden; el.setAttribute('aria-expanded', String(!pop.hidden)); };
/* level-tagged collapsed blocks: level 1 ≤ 1 block, level 2 adds ≤ 2, level 3 adds the rest; never opened automatically */
function levelBlocks(list) {
  var d = Settings.get().depth;
  return list.filter(function (b) { return b.html && b.lvl <= d; }).map(function (b) { return '<details class="acc more lvl-' + b.lvl + '"><summary>' + U.esc(b.title) + (b.lvl > 1 ? ' <span class="tag plain">' + t('f.lvl.tag', { n: b.lvl }) + '</span>' : '') + '</summary><div class="acc-b stack">' + b.html + '</div></details>'; }).join('');
}
function moreBlock(html) { return html ? '<details class="acc more"' + (Settings.get().depth >= 2 ? ' open' : '') + '><summary>' + t('f.more') + '</summary><div class="acc-b stack">' + html + '</div></details>' : ''; }
function hyList(items, title) { return items && items.length ? '<div class="hy-box"><div class="hy-h"><span class="hy-badge">High yield</span><b>' + U.esc(title) + '</b></div><ul class="hy-list">' + items.map(function (s) { return '<li>' + U.md(s) + '</li>'; }).join('') + '</ul></div>' : ''; }
function txList(f, scope) {
  // full treatment list; every field is optional (how, why, dose, pros, cons, cx, refer, pitfall, qc)
  var F = [['how', 'f.how', 0], ['why', 'f.why', 0], ['dose', 'tx.dose', 0], ['refer', 'tx.refer', 0], ['pitfall', 'tx.trap', 0], ['pros', 'f.pros', 3], ['cons', 'f.cons', 3], ['cx', 'f.cx', 2], ['qc', 'tx.qc', 0]];
  return (f.treatments || []).map(function (tr) {
    return '<details class="acc"><summary>' + U.md(tr.name) + '</summary><div class="acc-b">' + F.map(function (k) { var v = tr[k[0]]; return v ? '<div class="kv"' + (k[2] ? ' data-dz="' + k[2] + '"' : '') + '><span class="k">' + t(k[1]) + '</span><span>' + T(v, scope) + '</span></div>' : ''; }).join('') + '</div></details>';
  }).join('');
}
function txBlock(f, scope) {
  // compact card group when the content provides it (first line / when to refer / pitfall / Quebec) + the full list collapsed
  var c = f.treatment || f.txCard || null;
  if (c && (c.first || c.refer || c.pitfall || c.trap)) {
    var card = function (k, cls, v) { return v ? '<div class="tx-card ' + cls + '"><span class="eyebrow">' + t(k) + '</span><div>' + (Array.isArray(v) ? '<ul class="blist">' + v.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul>' : T(v, scope)) + '</div></div>' : ''; };
    return '<div class="stack tx-block"><h2 class="h3">' + t('f.tx') + '</h2><div class="tx-grid">' + card('tx.first', 'first', c.first) + card('tx.refer', 'refer', c.refer) + card('tx.trap', 'trap', c.pitfall || c.trap) + card('tx.qc', 'qc', c.qc || c.quebec) + '</div>' +
      '</div>'; // the full list is offered from level 2, in the Décider level blocks
  }
  return '<div class="stack tx-block"><h2 class="h3">' + t('f.tx') + '</h2><p class="xs muted">' + t('f.tx.d') + '</p>' + txList(f, scope) + '</div>';
}
function algoHtml(f, scope) {
  if (window.Tree && typeof Tree.render === 'function') { try { return '<div class="stack"><h2 class="h3">' + t('f.algo') + '</h2><div class="tree-wrap">' + Tree.render(f.cat.algo, { fmt: function (x) { return T(x, scope); }, title: t('f.algo') }) + '</div></div>'; } catch (e) { console.error('Tree.render', e); } }
  return '<div class="stack"><div class="row"><h2 class="h3" style="margin:0">' + t('f.algo') + '</h2><button class="btn sm" data-walk>' + t('f.walk') + '</button></div><div class="algo" data-algo>' +
    f.cat.algo.map(function (a, i) { return '<div class="anode" data-node="' + i + '"><div class="q">' + T(a.q, scope) + '</div><div class="yn"><div class="yes" data-yn="yes"><span class="lab">' + t('f.yes') + '</span><span>' + T(a.yes, scope) + '</span></div><div class="no" data-yn="no"><span class="lab">' + t('f.no') + '</span><span>' + T(a.no, scope) + '</span></div></div></div>'; }).join('') + '</div></div>';
}
function ficheView(f, step) {
  step = FSTEPS.indexOf(step) >= 0 ? step : 'voir';
  var si = FSTEPS.indexOf(step);
  return {
    title: I18N.title(f) + ' · ' + t(FSTEP_KEY[step]), trackId: f.id, render: function () {
      var m = f.module, list = D.ordered(m), idx = list.map(function (x) { return x.id; }).indexOf(f.id), prev = list[idx - 1], next = list[idx + 1];
      var scope = Gloss.scope([f.title, f.en]);
      var dpt = Settings.get().depth, hy = HY.get(f.id);
      var ph = photosFor(f.id), pairs = pairsFor(f.id);
      var pre = (PREREQ[f.id] || []).map(function (p) { return '<a href="#' + p + '">' + U.esc(D.title(p)) + (Prog.ficheDone(p) ? ' ✓' : '') + '</a>'; }).join('');
      var h = [];
      h.push(crumbs([[t('nav.learn'), 'apprendre'], ['Module ' + m + ' · ' + L.modules[m], 'module-' + m.toLowerCase()], [m + (idx + 1), null]]));
      // compact header (≤ 25 % of a phone screen): module code + one tag + level chip, one-line title, 4 pips
      var tag1 = si === 0 ? ((f.tags || []).filter(function (x) { return x === 'urgent'; })[0] || (f.tags || []).filter(function (x) { return x === 'frequent'; })[0] || '') : '';
      h.push('<div class="fiche-bar"><div class="fb-top"><span class="eyebrow">' + m + (idx + 1) + ' · ' + L.modules[m] + '</span>' + (tag1 ? L.tag(tag1) : '') + '<button type="button" class="chip lvl-chip" data-act="lvl-open" aria-expanded="false" aria-controls="lvl-pop">' + t('f.level.chip', { l: DEPTHS[dpt].t }) + '</button></div>' +
        '<h1 class="fb-title' + (I18N.title(f).length > 38 ? ' long' : '') + '">' + U.esc(I18N.title(f)) + (window.I18N ? I18N.badge(f) : '') + '</h1>' +
        '<div class="lvl-pop" id="lvl-pop" hidden><span class="xs muted">' + t('f.level') + '</span>' + depthSeg(true) + '</div>' +
        '<nav class="fsteps" aria-label="' + t('f.steps.aria') + '"><ol>' + FSTEPS.map(function (s2, k) { return '<li class="' + (k === si ? 'on' : k < si ? 'done' : '') + '"><a href="#' + f.id + '/' + s2 + '"' + (k === si ? ' aria-current="step"' : '') + '><span class="pip" aria-hidden="true">' + (k + 1) + '</span><span class="lab">' + t(FSTEP_KEY[s2]) + '</span></a></li>'; }).join('') + '</ol></nav></div>');
      var body = '';
      var cmpFig = function () { // normal vs pathological schematic, with the learner revealing the abnormalities
        if (!f.compare) return f.anatomy && f.anatomy.figure ? '<div class="mech-fig">' + Figures.render(f.anatomy.figure) + '</div>' : '';
        return '<div class="stack mech-fig"><div class="pair"><div><div class="lab n">' + t('f.normal') + '</div>' + Figures.render(f.compare.normal.figure, { caption: f.compare.normal.caption }) + '</div><div><div class="lab p">' + t('f.patho') + '</div><div data-cmp>' + Figures.render(f.compare.patho.figure, { caption: f.compare.patho.caption }) + '</div></div></div>' +
          '<div><button class="btn sm" data-cmpreveal aria-expanded="false">' + t('f.revealanom') + '</button><ul class="reveal-list" data-cmplist hidden>' + f.compare.patho.reveal.map(function (r) { return '<li>' + T(r, scope) + '</li>'; }).join('') + '</ul></div></div>';
      };
      if (step === 'voir') {
        var two = '<div class="callout"><span class="eyebrow">' + t('f.twosent') + '</span><span class="def-text">' + T(f.definition, scope) + '</span></div>';
        body = (ph.length ? '<div class="voir-grid"><div class="stack">' + Photo.carousel(ph, { voir: f.id }) + '</div><div class="stack voir-side">' + two + '</div></div>' : cmpFig() + two) +
          levelBlocks([
            { lvl: 1, title: t('f.more'), html: (enSub(f.en)) + (f.oneLiner ? '<p class="oneliner">' + T(f.oneLiner, scope) + '</p>' : '') + (pre ? '<div class="prereq"><span class="small muted">' + t('f.prereq') + '</span>' + pre + '</div>' : '') },
            { lvl: 2, title: t('f.pairs'), html: pairs.length ? pairs.map(pairHtml).join('') : '' },
            { lvl: 2, title: t('f.anat'), html: '<p class="read">' + T(f.anatomy.text, scope) + '</p>' + (f.anatomy.figure && f.compare ? '<div style="max-width:680px">' + Figures.render(f.anatomy.figure) + '</div>' : '') }
          ]);
      } else if (step === 'comprendre') {
        var ess = (hy && hy.essentials) || [];
        var steps = f.causal.steps;
        var nEss = f.compare ? 4 : 5; // the mechanism figure takes the room of one key point (≤ 120 words)
        body = cmpFig() +
          '<div class="stack mech-chain"><h2 class="h3">' + U.esc(t('f.mech', { t: f.causal.title })) + '</h2>' +
          '<div class="chain paced" data-chain data-shown="1">' + steps.map(function (s, i) { return '<div class="cstep k-' + s.kind + (i > 0 ? ' pending' : '') + '" data-step="' + i + '"><div class="node">' + (i + 1) + '</div><div class="body"><span class="k">' + (L.kinds[s.kind] || s.kind) + '</span><b>' + U.md(s.label) + '</b><span class="small" data-dz="3">' + T(s.detail, scope) + '</span><div class="cutslot"></div></div></div>'; }).join('') + '</div>' +
          '<div class="row"><button type="button" class="btn primary sm" data-causal="next">' + t('f.next.link', { i: 2, n: steps.length }) + '</button><button type="button" class="btn ghost sm" data-causal="all">' + t('f.all.links') + '</button></div>' +
          '<div class="stack" data-levers hidden><span class="small muted">' + t('f.levers') + '</span><div class="chips">' + f.causal.levers.map(function (l, i) { return '<button class="chip" data-lever="' + i + '" aria-pressed="false">' + U.esc(l.label) + '</button>'; }).join('') + '</div></div></div>' + hyList(ess.slice(0, nEss), t('f.hy')) +
          levelBlocks([
            { lvl: 1, title: t('f.more'), html: hyList(ess.slice(nEss), t('f.hy.more')) + (f.mnemonic ? '<div class="callout green"><span class="eyebrow">' + U.esc(t('f.mnemo', { t: f.mnemonic.title })) + '</span><span>' + T(f.mnemonic.text, scope) + '</span></div>' : '') },
            { lvl: 2, title: t('f.riskpres'), html: '<div class="twocol"><div class="stack"><h3 class="h4">' + t('f.risk') + '</h3><ul class="blist">' + f.risk.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div><div class="stack"><h3 class="h4">' + t('f.pres') + '</h3><ul class="blist">' + f.presentation.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div></div>' }
          ]);
      } else if (step === 'decider') {
        var rf = f.redFlags || [];
        var tbl = function (head, rows) { return '<div class="tbl-wrap"><table class="tbl"><thead><tr>' + head.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr></thead><tbody>' + rows.map(function (r) { return '<tr>' + r.map(function (x) { return '<td>' + T(x, scope) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>'; };
        body = '<div class="callout red"><span class="eyebrow">' + t('f.redflags') + '</span><ul class="blist red">' + rf.slice(0, 3).map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div>' +
          algoHtml(f, scope) + txBlock(f, scope) +
          levelBlocks([
            { lvl: 1, title: t('f.redflags.more'), html: rf.length > 3 ? '<ul class="blist red">' + rf.slice(3).map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul>' : '' },
            { lvl: 2, title: t('f.examddx'), html: '<h3 class="h4">' + t('f.signs') + '</h3>' + tbl([t('f.sign'), t('f.signwhy')], f.exam.signs.map(function (x) { return [x.sign, x.why]; })) + '<h3 class="h4">' + t('f.tests') + '</h3>' + tbl([t('f.test'), t('f.when'), t('f.read')], f.exam.tests.map(function (x) { return [x.test, x.when, x.read]; })) + '<h3 class="h4">' + t('f.ddx') + '</h3>' + tbl([t('f.dx'), t('f.clue')], f.ddx.map(function (d) { return [d.dx, d.clue]; })) },
            { lvl: 2, title: t('f.tx.more'), html: (f.treatment || f.txCard) ? txList(f, scope) : '' },
            { lvl: 3, title: t('f.phases.qc'), html: '<div class="phases">' + f.cat.phases.map(function (p) { return '<div class="phase p-' + p.phase + '"><div class="ph"><i></i>' + (L.phases[p.phase] || p.phase) + '</div><ul class="blist">' + p.items.map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div>'; }).join('') + '</div>' + (f.cat.local ? '<div class="callout violet"><span class="eyebrow">' + t('f.local') + '</span><span>' + T(f.cat.local, scope) + '</span></div>' : '') }
          ]);
      } else {
        var qids = quizIds(function (q) { return q.topic === f.id; }), pearls = f.pearls || [];
        var pcard = function (p, i) { return '<div class="pearl-card" role="button" tabindex="0" data-pearl="' + i + '" aria-expanded="false"><span class="who">' + t('f.asks') + '</span><span class="q">' + U.md(p.q) + '</span><span class="hint">' + t('f.think') + '</span><span class="a" hidden>' + T(p.a, scope) + '</span></div>'; };
        var game = qids.length ? miniQuiz(f.id, qids, t('mini.fiche')) : trainBlock(f.id);
        var links = (OPH.images && OPH.images[f.id]) || [];
        body = '<div class="stack"><h2 class="h3">' + t('f.pearls') + '</h2><div class="pearls">' + pearls.slice(0, 3).map(pcard).join('') + '</div></div>' + game +
          levelBlocks([
            { lvl: 1, title: t('f.more'), html: pearls.length > 3 ? '<div class="pearls">' + pearls.slice(3).map(function (p, i) { return pcard(p, i + 3); }).join('') + '</div>' : '' },
            { lvl: 2, title: t('f.othergame'), html: qids.length ? trainBlock(f.id) : '' }
          ]) +
          '<details class="acc src-acc"><summary>' + t('f.sources') + '</summary><div style="padding:0 14px 14px">' + (links.length ? '<ul class="src-list">' + links.map(function (l) { return '<li><a href="' + U.esc(l.url) + '" target="_blank" rel="noopener">' + U.esc(l.title) + '</a> <span class="muted">· ' + U.esc(l.site) + '</span><div class="small muted">' + U.md(l.look) + '</div></li>'; }).join('') + '</ul>' : '') +
          '<ul class="src-list">' + f.sources.map(function (x) { return '<li class="small">' + U.md(x) + '</li>'; }).join('') + '</ul>' + reviewMeta(f.id) + '</div></details>';
      }
      var ids = { voir: 'mv-voir', comprendre: 'mv-comp', decider: 'mv-dec', entrainer: 'mv-train' };
      h.push('<section class="mv fstep-body" id="' + ids[step] + '" data-step-body="' + step + '">' + body + '</section>');
      // previous / next
      var prevHref = si > 0 ? '#' + f.id + '/' + FSTEPS[si - 1] : (prev ? '#' + prev.id + '/' + 'entrainer' : '#' + (m === 'B' ? 'b-bases' : 'c-bases'));
      var prevLab = si > 0 ? t(FSTEP_KEY[FSTEPS[si - 1]]) : (prev ? I18N.title(prev) : t('nav.foundations'));
      var nextHref = si < 3 ? '#' + f.id + '/' + FSTEPS[si + 1] : (next ? '#' + next.id + '/voir' : '#module-' + m.toLowerCase());
      var nextLab = si < 3 ? t(FSTEP_KEY[FSTEPS[si + 1]]) : (next ? I18N.title(next) : t('f.backmod'));
      h.push('<nav class="row fstep-nav" aria-label="' + t('f.steps.aria') + '"><a class="btn ghost" data-fprev href="' + prevHref + '">← ' + U.esc(prevLab) + '</a><a class="btn' + (si === 3 ? '' : ' primary') + '" data-fnext' + (si === 3 ? ' data-markread="' + f.id + '"' : '') + ' href="' + nextHref + '">' + U.esc(nextLab) + ' →</a></nav>');
      return '<div class="page fiche-page">' + h.join('') + '</div>';
    },
    after: function (host) {
      var fs = Store.p.fstep = Store.p.fstep || {}; fs[f.id] = { s: step, t: Date.now() }; Store.saveLocal();
      mountMinis(host); mountTrainers(host);
      var treeClean = null; if (U.$('[data-tree]', host) && window.Tree && typeof Tree.mount === 'function') { try { treeClean = Tree.mount(host); } catch (e) { console.error('Tree.mount', e); } }
      var onClick = function (ev) {
        var tg = ev.target;
        var mr = tg.closest('[data-markread]'); if (mr && !Prog.ficheDone(f.id)) Store.markRead(f.id, true);
        var cz = tg.closest('[data-causal]');
        if (cz) {
          var chain = U.$('[data-chain]', host), steps = U.$$('[data-step]', chain), shown = +chain.getAttribute('data-shown') || 1;
          if (cz.getAttribute('data-causal') === 'all') shown = steps.length; else if (shown >= steps.length) shown = 1; else shown++;
          steps.forEach(function (s, k) { s.classList.toggle('pending', k >= shown); s.classList.toggle('on', k === shown - 1 && shown < steps.length); });
          chain.setAttribute('data-shown', String(shown));
          var nb = U.$('[data-causal="next"]', host);
          if (nb) nb.textContent = shown >= steps.length ? I18N.t('f.restart.links') : I18N.t('f.next.link', { i: shown + 1, n: steps.length });
          var lv0 = U.$('[data-levers]', host); if (lv0) lv0.hidden = shown < steps.length;
          var cur = steps[shown - 1]; if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest', behavior: U.reduced() ? 'auto' : 'smooth' });
          return;
        }
        var lv = tg.closest('[data-lever]');
        if (lv) {
          var li = +lv.getAttribute('data-lever'), L2 = f.causal.levers[li], on = lv.getAttribute('aria-pressed') !== 'true';
          U.$$('[data-lever]', host).forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
          U.$$('[data-step]', host).forEach(function (s) { s.classList.remove('cut', 'after', 'on'); U.$('.cutslot', s).innerHTML = ''; });
          if (on) {
            lv.setAttribute('aria-pressed', 'true');
            U.$$('[data-step]', host).forEach(function (s, k) { if (k === L2.at) { s.classList.add('cut'); U.$('.cutslot', s).innerHTML = '<div class="cutnote"><b>' + U.esc(L2.label) + '</b> ' + I18N.t('f.cutat') + U.md(L2.detail) + '</div>'; } else if (k > L2.at) s.classList.add('after'); });
          }
          return;
        }
        var pc = !tg.closest('.gt, #gt-pop') && tg.closest('[data-pearl]');
        if (pc) { var a = U.$('.a', pc), hint = U.$('.hint', pc); a.hidden = !a.hidden; hint.hidden = !a.hidden ? true : false; pc.setAttribute('aria-expanded', String(!a.hidden)); return; }
        if (tg.closest('[data-cmpreveal]')) {
          var b = tg.closest('[data-cmpreveal]'), lst = U.$('[data-cmplist]', host), on2 = lst.hidden;
          lst.hidden = !on2; b.setAttribute('aria-expanded', String(on2)); b.textContent = on2 ? I18N.t('f.hideanom') : I18N.t('f.revealanom');
          U.$('[data-cmp]', host).innerHTML = Figures.render(f.compare.patho.figure, { caption: f.compare.patho.caption, reveal: on2 }); Figures.hydrate(host); return;
        }
        if (tg.closest('[data-walk]')) {
          var nodes = U.$$('[data-node]', host); nodes.forEach(function (n, k) { n.classList.add('walk'); n.classList.remove('chosen-yes', 'chosen-no'); n.classList.toggle('dim', k > 0); }); return;
        }
        var yn = tg.closest('[data-yn]');
        if (yn) {
          var node = yn.closest('[data-node]'); if (!node.classList.contains('walk')) return;
          node.classList.remove('chosen-yes', 'chosen-no', 'dim'); node.classList.add('chosen-' + yn.getAttribute('data-yn'));
          var nx = node.nextElementSibling; if (nx) nx.classList.remove('dim');
        }
      };
      var go = function (sel) { var a = U.$(sel, host); if (a) location.hash = a.getAttribute('href').slice(1); };
      var kd = function (ev) {
        var pc = ev.target.closest && ev.target.closest('[data-pearl]'); if (pc && (ev.key === 'Enter' || ev.key === ' ') && ev.target === pc) { ev.preventDefault(); pc.click(); return; }
      };
      var arrows = function (ev) {
        if (ev.defaultPrevented || ev.altKey || ev.ctrlKey || ev.metaKey || /input|select|textarea/i.test(ev.target.tagName || '') || ev.target.isContentEditable) return;
        if (U.$('#lightbox:not([hidden])') || U.$('#drawer:not([hidden])')) return;
        if (ev.key === 'ArrowRight') go('[data-fnext]'); else if (ev.key === 'ArrowLeft') go('[data-fprev]');
      };
      var x0 = null, y0 = 0;
      var ts = function (ev) { if (ev.touches.length !== 1 || ev.target.closest('.carousel, .zoomwrap, input, .tbl-wrap, svg')) { x0 = null; return; } x0 = ev.touches[0].clientX; y0 = ev.touches[0].clientY; };
      var te = function (ev) { if (x0 == null) return; var dx = ev.changedTouches[0].clientX - x0, dy = ev.changedTouches[0].clientY - y0; x0 = null; if (Math.abs(dx) > 70 && Math.abs(dy) < 45) go(dx < 0 ? '[data-fnext]' : '[data-fprev]'); };
      host.addEventListener('click', onClick); host.addEventListener('keydown', kd); document.addEventListener('keydown', arrows);
      host.addEventListener('touchstart', ts, { passive: true }); host.addEventListener('touchend', te, { passive: true });
      if (U.wordsDev()) console.info('[words] ' + f.id + '/' + step + ': ' + U.wordsVisible(U.$('[data-step-body]', host)) + ' visible words');
      return function () { if (typeof treeClean === 'function') { try { treeClean(); } catch (e) { } } host.removeEventListener('click', onClick); host.removeEventListener('keydown', kd); document.removeEventListener('keydown', arrows); host.removeEventListener('touchstart', ts); host.removeEventListener('touchend', te); };
    }
  };
}

/* ---------- quiz hub & run ---------- */
Views.quiz = {
  title: t('qh.title'), render: function () {
    var mods = ['A', 'B', 'C'].map(function (m) {
      var s = Prog.stat(m), a = Prog.acuity(s.mastery);
      return '<div class="card stack"><div class="eyebrow">Module ' + m + ' · ' + L.modules[m] + '</div><div class="row" style="justify-content:space-between"><span class="acuity-big" style="font-size:var(--fs-xl)">' + a.m + '</span><span class="small mono">' + t('qh.okn', { a: s.correct, b: s.total, c: s.wrong + s.shaky }) + '</span></div><div class="pbar"><i style="width:' + (100 * s.mastery).toFixed(0) + '%"></i></div>' +
        '<div class="row"><button class="btn primary" data-q="adaptive" data-m="' + m + '">' + t('qh.set10') + '</button><button class="btn" data-q="all" data-m="' + m + '">' + t('qh.all') + '</button><button class="btn" data-q="wrong" data-m="' + m + '"' + (s.wrong + s.shaky ? '' : ' disabled') + '>' + t('rev.wrong') + '</button></div></div>';
    }).join('');
    var wrong = OPH.quiz.filter(function (q) { var a = Store.p.answers[q.id]; return a && (!a.last || a.conf === 'unsure'); });
    var byTopic = {}; wrong.forEach(function (q) { (byTopic[q.topic] = byTopic[q.topic] || []).push(q); });
    var review = Object.keys(byTopic).length ? '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>' + t('qh.topic') + '</th><th>' + t('qh.errors') + '</th><th></th></tr></thead><tbody>' + Object.keys(byTopic).map(function (tp) { return '<tr><td><a href="#' + tp + '">' + U.esc(D.title(tp)) + '</a></td><td class="mono">' + byTopic[tp].length + '</td><td><button class="btn sm" data-q="topic-wrong" data-t="' + tp + '">' + t('qh.review') + '</button></td></tr>'; }).join('') + '</tbody></table></div>' : '<div class="empty">' + t('qh.noerr') + '</div>';
    var total = OPH.quiz.length;
    return '<div class="page">' + crumbs([[t('nav.home'), 'accueil'], [t('qh.title'), null]]) + '<div class="phead"><div class="eyebrow">' + t('qh.eyebrow', { n: total }) + '</div><h1>' + t('qh.h1') + '</h1><p class="muted" style="max-width:62ch">' + t('qh.lead') + '</p></div>' +
      '<div class="grid3">' + mods + '</div>' +
      '<div class="card stack"><div class="eyebrow">' + t('qh.special') + '</div><div class="row"><button class="btn" data-q="exam">' + t('qh.exam') + '</button><button class="btn" data-q="trap">' + t('qh.trap') + '</button><button class="btn" data-q="image">' + t('qh.image') + '</button><button class="btn" data-q="allwrong"' + (wrong.length ? '' : ' disabled') + '>' + t('qh.allwrong', { n: wrong.length }) + '</button></div>' +
      '<div class="row"><span class="small muted">' + t('qh.bytype') + '</span><div class="chips" data-types>' + Object.keys(L.qtypes).map(function (k) { return '<button class="chip" data-type="' + k + '" aria-pressed="false">' + U.esc(L.qtypes[k]) + '</button>'; }).join('') + '</div></div>' +
      '<div class="row"><span class="small muted">' + t('qh.level') + '</span><div class="chips" data-levels>' + [1, 2, 3].map(function (k) { return '<button class="chip" data-level="' + k + '" aria-pressed="false">' + t('quiz.level', { n: k }) + '</button>'; }).join('') + '</div><button class="btn sm" data-q="filtered">' + t('qh.go') + '</button></div></div>' +
      '<div class="sec">' + secH('↺', t('qh.targeted')) + review + '</div></div>';
  },
  after: function (host) {
    host.addEventListener('click', function (ev) {
      var ty = ev.target.closest('[data-type]'), lv = ev.target.closest('[data-level]');
      if (ty) { ty.setAttribute('aria-pressed', String(ty.getAttribute('aria-pressed') !== 'true')); return; }
      if (lv) { lv.setAttribute('aria-pressed', String(lv.getAttribute('aria-pressed') !== 'true')); return; }
      var b = ev.target.closest('[data-q]'); if (!b) return;
      var q = b.getAttribute('data-q'), m = b.getAttribute('data-m');
      var types = U.$$('[data-type][aria-pressed="true"]', host).map(function (x) { return x.getAttribute('data-type'); });
      var levels = U.$$('[data-level][aria-pressed="true"]', host).map(function (x) { return +x.getAttribute('data-level'); });
      if (q === 'adaptive') Quiz.start({ modules: [m], adaptive: true, n: 10 }, t('mod.adaptive', { m: m }));
      else if (q === 'all') Quiz.start({ modules: [m], sortLevel: true }, t('qs.all', { m: m }));
      else if (q === 'wrong') Quiz.start({ modules: [m], wrong: true }, t('qs.wrong', { m: m }));
      else if (q === 'exam') Quiz.start({ n: 20, sortLevel: true }, t('qs.exam'));
      else if (q === 'trap') Quiz.start({ trap: true }, t('qh.trap'));
      else if (q === 'image') Quiz.start({ types: ['image'] }, t('qh.image'));
      else if (q === 'allwrong') Quiz.start({ wrong: true }, t('qs.allwrong'));
      else if (q === 'topic-wrong') Quiz.start({ topic: b.getAttribute('data-t'), wrong: true }, t('qs.topic', { t: D.title(b.getAttribute('data-t')) }));
      else if (q === 'filtered') Quiz.start({ types: types, levels: levels, sortLevel: true }, t('qs.filtered'));
    });
  }
};
Views['quiz-run'] = {
  title: t('qr.title'), track: false, render: function () {
    if (!Quiz.session) return '<div class="page"><div class="empty">' + t('qr.none') + '</div><a class="btn primary" href="#quiz">' + t('qr.choose') + '</a></div>';
    return '<div class="page read" style="margin:0 auto;width:100%">' + crumbs([[t('qh.title'), 'quiz'], [Quiz.session.title, null]]) + '<h1 class="sr-only">' + U.esc(Quiz.session.title) + '</h1><div id="quiz-host"></div><p class="xs muted">' + t('qr.keys') + '</p></div>';
  },
  after: function (host) { if (Quiz.session) Quiz.mount(U.$('#quiz-host', host), Quiz.session.ids, { title: Quiz.session.title, backHref: 'quiz' }); }
};

/* ---------- cases ---------- */
function caseThumb(c) {
  var fig = (c.steps || []).map(function (st) { return st.figure; }).filter(function (f) { return f && f.type !== 'photo' && typeof Figures[f.type] === 'function'; })[0];
  if (fig) { try { return '<span class="thumb-svg" aria-hidden="true">' + Figures[fig.type](fig, {}).svg.replace(/ role="(img|group)"/, '').replace(/ aria-label="[^"]*"/, '') + '</span>'; } catch (e) { } }
  return '<img loading="lazy" src="' + Photo.src(COVER[c.module] || COVER.B) + '" alt="">';
}
Views.cas = {
  title: t('cas.title'), render: function () {
    // ≤ 150 words: picture + title per case; the image cases (Investigations) are a section of the same tab
    var R0 = window.OPH_RESTRICTED || {}, ic = (OPH.imageCases || []).length + (OPH.openCases || []).length;
    var media = OPH.imageCasesMedia || {}, pics = Object.keys(media).map(function (k) { return media[k] && media[k].photo; }).filter(function (id) { return id && D.cat(id) && !R0[id]; }).slice(0, 3);
    var imgSec = ic ? '<a class="card link ic-strip" href="#cas-images"><span class="ic-pics">' + pics.map(function (id) { return '<img loading="lazy" src="' + Photo.src(id) + '" alt="">'; }).join('') + '</span><span class="stack" style="gap:2px"><b>' + t('cas.img.h') + '</b><span class="small muted">' + t('cas.img.d', { n: ic }) + '</span></span></a>' : '';
    var cards = OPH.cases.map(function (c) { var r = Store.p.cases[c.id]; return '<a class="lrow" href="#' + c.id + '"><span class="lthumb">' + caseThumb(c) + '</span><span class="stack" style="gap:2px;min-width:0"><span class="xs mono muted">' + c.module + ' · ' + (r ? t('cas.done', { n: r.score }) : t('cas.todo')) + '</span><b>' + U.esc(c.title) + '</b></span></a>'; }).join('');
    return '<div class="page">' + crumbs([[t('nav.home'), 'accueil'], [t('cas.title'), null]]) + '<div class="phead"><h1>' + t('cas.title') + '</h1><p class="muted">' + t('cas.lead2') + '</p></div>' + imgSec +
      '<div class="sec">' + secH('➜', t('cas.clin')) + '<div class="a-list">' + (cards || missing(t('cas.the'))) + '</div></div></div>';
  }
};
function caseView(c) { return { title: c.title, render: function () { return '<div class="page read" style="margin:0 auto;width:100%">' + crumbs([[t('cas.title'), 'cas'], [c.title, null]]) + '<div class="phead"><div class="eyebrow">' + t('cas.eyebrow1', { m: c.module }) + '</div><h1>' + U.esc(c.title) + '</h1><div class="row tight">' + (c.tags || []).map(L.tag).join('') + (window.I18N ? I18N.badge(c) : '') + '</div></div><div id="case-host"></div></div>'; }, after: function (host) { Case.mount(U.$('#case-host', host), c); } }; }

/* ---------- atlas ---------- */
Views.atlas = {
  title: t('atlas.title'), render: function () {
    var R = window.OPH_RESTRICTED || {}, n = OPH.catalog.filter(function (e) { return !R[e.id]; }).length, hasI = OPH.catalog.some(function (e) { return e.module === 'I'; });
    var segs = [['', t('modseg.all')], ['A', L.modules.A], ['B', L.modules.B], ['C', L.modules.C]].concat(hasI ? [['I', t('atlas.inv')]] : []);
    return '<div class="page">' + crumbs([[t('nav.home'), 'accueil'], [t('atlas.title'), null]]) + '<div class="phead"><div class="eyebrow">' + t('atlas.eyebrow', { n: n }) + '</div><h1>' + t('atlas.title') + '</h1><p class="muted" style="max-width:64ch">' + t('atlas.lead') + '</p></div>' +
      '<div class="row atlas-filters"><div class="seg" data-amod>' + segs.map(function (x, i) { return '<button data-am="' + x[0] + '" aria-pressed="' + (i === 0) + '">' + U.esc(x[1]) + '</button>'; }).join('') + '</div><input type="text" id="atlas-q" placeholder="' + U.esc(t('atlas.q')) + '" aria-label="' + U.esc(t('atlas.q')) + '"></div><div data-atlas></div></div>';
  },
  after: function (host) {
    var st = { m: '', q: '' }, R = window.OPH_RESTRICTED || {};
    function draw() {
      var q = st.q.toLowerCase(), groups = {};
      OPH.catalog.forEach(function (e) {
        if (R[e.id] || e.id === 'OPH-185' || e.id === 'OPH-186') return;
        if (st.m && e.module !== st.m) return;
        if (q && (e.title + ' ' + e.caption + ' ' + e.id + ' ' + (e.author || '')).toLowerCase().indexOf(q) < 0) return;
        (groups[e.title] = groups[e.title] || []).push(e);
      });
      var keys = Object.keys(groups);
      U.$('[data-atlas]', host).innerHTML = keys.length ? keys.map(function (k) { return '<div class="sec"><h2 class="atlas-h">' + U.esc(k) + ' <span class="small muted">(' + groups[k].length + ')</span></h2>' + Photo.gallery(groups[k].map(function (e) { return { id: e.id, caption: e.title, look: t('lb.srccap') + e.caption, reveal: [] }; })) + '</div>'; }).join('') : '<div class="empty">' + t('atlas.none') + '</div>';
    }
    host.addEventListener('click', function (ev) { var b = ev.target.closest('[data-am]'); if (!b) return; st.m = b.getAttribute('data-am'); U.$$('[data-am]', host).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); draw(); });
    U.$('#atlas-q', host).addEventListener('input', U.debounce(function (e) { st.q = e.target.value.trim(); draw(); }, 200));
    draw();
  }
};


/* ---------- sources ---------- */
Views.sources = {
  title: t('nav.sources'), render: function () {
    var S = [
      [t('src.g.glau'), [
        ['AAO PPP Primary Open-Angle Glaucoma (Gedde SJ et al., Ophthalmology, en ligne 9 févr. 2026)', 'https://www.reviewofoptometry.com/news/article/aaos-updated-ppp-for-poag-emphasizes-individualized-monitoring', 'SLT en première intention renforcée, OCT RNFL + GCIPL, champs groupés, nouveaux facteurs de risque (TA basse, hystérésis).'],
        ['AAO PPP Primary Angle-Closure Disease (Gedde SJ, Chopra V, Vinod K et al., Ophthalmology, en ligne 9 févr. 2026)', 'https://www.reviewofoptometry.com/news/article/updated-ppp-for-angleclosure-disease-stresses-gonioscopy-imagingbased-monitoring', 'Gonioscopie dynamique en pièce sombre, LPI prophylactique individualisée, extraction du cristallin (EAGLE).'],
        ['Société canadienne d’ophtalmologie — lignes directrices glaucome de l’adulte (Can J Ophthalmol 2009;44 Suppl 1)', 'https://doi.org/10.3129/cjo44s1', 'Référence canadienne (antérieure aux mises à jour AAO 2026).'],
        ['Guide canadien GPAO pour optométristes (MacIver, MacDonald, Prokopich, Can J Optom 2017)', 'https://openjournals.uwaterloo.ca/index.php/cjo/article/download/1606/1989', 'Fiabilité des champs, bilan des suspects, crise aiguë.'],
        ['LiGHT — résultats à 6 ans (Gazzard G et al., Ophthalmology 2023)', 'https://www.reviewofoptometry.com/news/article/new-data-strengthens-the-case-for-slt-as-firstline-therapy', '']
      ]],
      [t('src.g.cornea'), [
        ['TFOS DEWS III : méthodologie diagnostique (Wolffsohn JS et al., Am J Ophthalmol 2025;279:387-450)', 'https://doi.org/10.1016/j.ajo.2025.05.033', 'Définition révisée, OSDI-6 ≥ 4, seuils NIBUT/osmolarité/coloration.'],
        ['AAO PPP Bacterial Keratitis (2023)', 'https://www.aao.org/education/preferred-practice-pattern/bacterial-keratitis-ppp-2023', ''],
        ['SCUT II — résultats à 12 mois (Prajna NV et al., JAMA Ophthalmol, en ligne 8 oct. 2026)', 'https://www.reviewofoptometry.com/news/article/steroids-cxl-show-no-added-benefit-for-bacterial-keratitis-at-12-months', 'Ni difluprednate ni CXL n’ajoutent de bénéfice à la moxifloxacine.'],
        ['ZEDS — valacyclovir à faible dose après zona ophtalmique (Cohen EJ et al., JAMA Ophthalmol 2025)', 'https://nyulangone.org/news/long-term-low-dose-antiviral-treatment-benefits-patients-eye-disease-pain-shingles', 'Critère principal à 12 mois non significatif ; bénéfice à 18 mois.'],
        ['2e consensus mondial sur le kératocône (ESCRS 2025)', 'https://www.healio.com/news/ophthalmology/20251105/pediatric-cxl-progression-criteria-highlighted-in-second-global-consensus-on-keratoconus', 'CXL dès le diagnostic chez l’enfant.'],
        ['Epioxa (CXL epithelium-on) — approbation FDA (oct. 2025)', 'https://investors.glaukos.com/news/news-details/2025/Glaukos-Announces-FDA-Approval-of-Epioxa/default.aspx', 'Disponibilité canadienne à vérifier.'],
        ['Oxervate (cénégermine) — décision de Santé Canada', 'https://dhpp.hpfb-dgpsa.ca/review-documents/resource/RDS00483', '']
      ]],
      [t('src.g.qc'), [
        ['Normes visuelles SAAQ — guide de l’Ordre des optométristes du Québec (2026)', 'https://ooq.org/sites/default/files/2026-03/20260630_Guide%20soutien%20SAAQ.pdf', 'Classe 5 : AV binoculaire ≥ 6/15 ; champ binoculaire ≥ 100° horizontal.'],
        ['Règlement sur les médicaments qu’un optométriste peut administrer ou prescrire (O-7, r. 11.1)', 'https://www.legisquebec.gouv.qc.ca/en/document/cr/o-7,%20r.%2011.1', 'Glaucome suspect, débutant ou cortisonique, puis orientation en ophtalmologie.']
      ]]
    ];
    var R = window.OPH_RESTRICTED || {}, cat = (OPH.catalog || []).filter(function (e) { return !R[e.id]; });
    var nOpen = cat.filter(function (e) { return e.license; }).length;
    var rows = cat.map(function (e) { var u = Photo.srcUrl(e); return '<tr><td class="mono">' + U.esc(e.id) + '</td><td>' + U.esc(e.title || '') + '</td><td>' + Photo.owner(e) + '</td><td>' + Photo.lic(e) + '</td><td>' + (u ? '<a href="' + U.esc(u) + '" target="_blank" rel="noopener">' + t('photo.source') + '</a>' : '') + '</td></tr>'; }).join('');
    var im = OPH.invMedia || {}, mrows = Object.keys(im).filter(function (k) { var m = im[k]; return m && (m.license || m.source || m.credit) && !(m.photo && R[m.photo]); }).map(function (k) { var m = im[k];
      return '<tr><td class="mono">' + U.esc(m.photo || k) + '</td><td>' + U.esc(I18N.pick(m.alt) || '') + '</td><td>' + U.esc(I18N.pick(m.credit) || (m.kind === 'photo' ? '' : t('src.schema'))) + '</td><td>' + U.esc(I18N.pick(m.license) || '') + '</td><td>' + (m.source ? '<a href="' + U.esc(m.source) + '" target="_blank" rel="noopener">' + t('photo.source') + '</a>' : '') + '</td></tr>'; }).join('');
    var th = '<thead><tr><th>' + t('src.id') + '</th><th>' + t('src.title') + '</th><th>' + t('src.author') + '</th><th>' + t('src.lic') + '</th><th>' + t('src.link') + '</th></tr></thead>';
    return '<div class="page read" style="margin:0 auto;width:100%">' + crumbs([[t('nav.home'), 'accueil'], [t('nav.sources'), null]]) + '<div class="phead"><div class="eyebrow">' + t('src.eyebrow') + '</div><h1>' + t('nav.sources') + '</h1></div>' +
      '<div class="callout red" id="about"><span class="eyebrow">' + t('src.about') + '</span><span><b>' + t('disclaimer') + '</b></span><span class="small">' + t('disclaimer.long') + '</span></div>' +
      S.map(function (g) { return '<div class="sec">' + secH('•', g[0]) + '<ul class="src-list">' + g[1].map(function (s) { return '<li><a href="' + U.esc(s[1]) + '" target="_blank" rel="noopener">' + U.esc(s[0]) + '</a>' + (s[2] ? '<div class="small muted">' + U.esc(s[2]) + '</div>' : '') + '</li>'; }).join('') + '</ul></div>'; }).join('') +
      '<div class="sec">' + secH('•', t('src.images')) + '<p class="small">' + t('src.images.p') + '</p>' + (nOpen ? '<p class="small">' + t('src.open.p', { n: nOpen }) + ' ' + t('src.mod.p') + '</p>' : '') +
      '<div class="callout"><span class="small">' + t('src.cc') + '</span></div>' +
      '<p class="xs muted">' + t('src.fonts') + '</p>' +
      '<details class="acc"><summary>' + t('src.perimg', { n: cat.length }) + '</summary><div class="tbl-wrap" style="padding:0 14px 14px"><table class="tbl credits">' + th + '<tbody>' + rows + '</tbody></table></div></details>' +
      (mrows ? '<details class="acc"><summary>' + t('src.invmedia') + '</summary><div class="tbl-wrap" style="padding:0 14px 14px"><table class="tbl credits">' + th + '<tbody>' + mrows + '</tbody></table></div></details>' : '') + '</div>' +
      '<div class="callout amber"><span class="eyebrow">' + t('src.keep') + '</span><span class="small">' + t('src.keep.p') + '</span></div></div>';
  }
};

/* ---------- express review (clinic morning) ---------- */
function expressView(m) {
  return {
    title: t('mod.express'), render: function () {
      var list = D.ordered(m), scope = Gloss.scope();
      var items = list.map(function (f, i) {
        var t0 = f.treatments && f.treatments[0];
        return '<div class="card stack" id="x-' + f.id + '"><div class="row" style="justify-content:space-between"><h3><a href="#' + f.id + '" style="color:inherit;text-decoration:none">' + m + (i + 1) + ' · ' + U.esc(f.title) + '</a></h3><span class="row tight">' + (f.tags || []).map(L.tag).join('') + '</span></div>' +
          '<p class="oneliner" style="font-size:var(--fs-md)">' + T(f.oneLiner, scope) + '</p>' +
          '<div class="twocol"><div class="stack"><h3 class="h4">' + t('a.look') + '</h3><ul class="blist">' + f.exam.signs.slice(0, 3).map(function (s) { return '<li>' + T(s.sign, scope) + '</li>'; }).join('') + '</ul></div>' +
          '<div class="stack"><h3 class="h4" style="color:var(--urgent)">' + t('f.redflags') + '</h3><ul class="blist red">' + f.redFlags.slice(0, 3).map(function (x) { return '<li>' + T(x, scope) + '</li>'; }).join('') + '</ul></div></div>' +
          '<div class="phases">' + f.cat.phases.map(function (p) { return '<div class="phase p-' + p.phase + '"><div class="ph"><i></i>' + (L.phases[p.phase] || p.phase) + '</div><span class="small">' + T(p.items[0], scope) + '</span></div>'; }).join('') + '</div>' +
          '<details class="acc"><summary>' + t('x.pearls') + '</summary><div style="padding:0 14px 14px" class="stack">' + f.pearls.map(function (p) { return '<div class="small"><b>' + U.md(p.q) + '</b><br>' + T(p.a, scope) + '</div>'; }).join('') + '</div></details></div>';
      }).join('');
      var dk = m === 'B' ? 'cornee' : 'glaucome';
      return '<div class="page read" style="margin:0 auto;width:100%">' + crumbs([['Module ' + m, 'module-' + m.toLowerCase()], [t('mod.express'), null]]) +
        '<div class="phead"><div class="eyebrow">' + (Dates.custom() ? t('x.eyebrow', { d: U.esc(Dates.fmt(Dates.get(dk))) }) : t('x.eyebrow0')) + '</div><h1>' + t('x.h1', { m: L.modules[m].toLowerCase() }) + '</h1><p class="muted">' + t('x.lead') + '</p></div>' +
        (items || missing(t('mod.fiches'))) + '<div class="row"><a class="btn primary" href="#quiz">' + t('x.last') + '</a></div></div>';
    }
  };
}
Views['express-b'] = expressView('B');
Views['express-c'] = expressView('C');

/* ---------- search ---------- */
Views.recherche = {
  title: t('nav.search'), track: false, render: function () {
    return '<div class="page read" style="margin:0 auto;width:100%">' + crumbs([[t('nav.home'), 'accueil'], [t('nav.search'), null]]) + '<div class="phead"><h1>' + t('nav.search') + '</h1><p class="muted">' + t('s.lead') + '</p></div>' +
      '<input type="text" id="srch" placeholder="' + U.esc(t('s.ph')) + '" aria-label="' + U.esc(t('nav.search')) + '" autocomplete="off" style="width:100%;font-size:var(--fs-md)"><div data-sres class="stack"></div></div>';
  },
  after: function (host) {
    var inp = U.$('#srch', host), out = U.$('[data-sres]', host);
    function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
    function run() {
      var q = norm(inp.value.trim()); if (q.length < 2) { out.innerHTML = '<div class="empty">' + t('s.min') + '</div>'; return; }
      var gl = Object.keys(OPH.glossary).filter(function (k) { return norm(k).indexOf(q) >= 0 || norm(OPH.glossary[k]).indexOf(q) >= 0; }).slice(0, 8);
      var fi = OPH.fiches.map(function (f) { var txt = norm(JSON.stringify(f)); var n = txt.split(q).length - 1; return [f, n + (norm(f.title).indexOf(q) >= 0 ? 50 : 0)]; }).filter(function (x) { return x[1] > 0; }).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 8);
      var ca = OPH.capsules.filter(function (c) { return norm(JSON.stringify(c)).indexOf(q) >= 0; });
      var qs = OPH.quiz.filter(function (x) { return norm(x.stem + ' ' + x.explain).indexOf(q) >= 0; }).slice(0, 6);
      var ph = OPH.catalog.filter(function (e) { return norm(e.title + ' ' + e.caption).indexOf(q) >= 0; }).slice(0, 6);
      var h = '';
      if (gl.length) h += '<div class="card stack"><div class="eyebrow">' + t('s.gloss') + '</div>' + gl.map(function (k) { return '<div><b>' + U.esc(k) + '</b> — ' + U.md(OPH.glossary[k]) + '</div>'; }).join('') + '</div>';
      if (fi.length || ca.length) h += '<div class="card stack"><div class="eyebrow">' + t('s.fiches') + '</div>' + ca.map(function (c) { return '<a href="#' + c.id + '">' + U.esc(c.title) + '</a>'; }).concat(fi.map(function (x) { return '<a href="#' + x[0].id + '">' + U.esc(x[0].title) + '</a> <span class="small muted">' + t('s.mentions', { n: x[1] % 50 || 1 }) + '</span>'; })).join('<br>') + '</div>';
      if (qs.length) h += '<div class="card stack"><div class="eyebrow">' + t('s.qs') + '</div><button class="btn sm" data-sq="' + qs.map(function (x) { return x.id; }).join(',') + '">' + t('s.train', { n: qs.length }) + '</button></div>';
      if (ph.length) h += '<div class="stack"><div class="eyebrow">' + t('src.images') + '</div>' + Photo.gallery(ph.map(function (e) { return { id: e.id, caption: e.title, look: t('lb.srccap') + e.caption, reveal: [] }; })) + '</div>';
      out.innerHTML = h || '<div class="empty">' + t('s.none') + '</div>';
    }
    inp.addEventListener('input', U.debounce(run, 180));
    out.addEventListener('click', function (ev) { var b = ev.target.closest('[data-sq]'); if (b) { Quiz.session = { title: t('nav.search') + ' : ' + inp.value, ids: b.getAttribute('data-sq').split(','), back: 'recherche' }; Router.go('quiz-run'); } });
    setTimeout(function () { inp.focus(); }, 30);
  }
};

/* ---------- resolver ---------- */
Views.resolve = function (name) {
  if (Views[name] && typeof Views[name] === 'object' && Views[name].render) return Views[name];
  if (!Views._f) Views._f = {};
  var am = /^(a-anatomie|a-physiologie|a-examen|a-imagerie|a-retine)\/([^/]+)$/.exec(name);
  if (am) return (Views._f[name] = Views._f[name] || aItemView(am[1], am[2]));
  var cm = /^(b-bases|c-bases)\/(\d+)$/.exec(name);
  if (cm) return (Views._f[name] = Views._f[name] || capsuleCardView(cm[1], +cm[2]));
  var fm = /^([^/]+)\/(voir|comprendre|decider|entrainer)$/.exec(name), f = D.fiche(fm ? fm[1] : name);
  if (f) {
    var stp = fm ? fm[2] : 'voir', key = f.id + '/' + stp;
    if (!fm) { try { history.replaceState(null, '', '#' + key); } catch (e) { } } // bare #<fiche> opens the first screen
    if (!Views._f) Views._f = {};
    return (Views._f[key] = Views._f[key] || ficheView(f, stp));
  }
  var c = D.caseById(name); if (c) return caseView(c);
  return { title: t('view.notfound.t'), track: false, render: function () { return '<div class="page"><div class="empty">' + t('view.notfound') + '</div><a class="btn primary" href="#accueil">' + t('view.backhome') + '</a></div>'; } };
};

/* ---------- boot ---------- */
(function boot() {
  try { document.documentElement.lang = window.I18N ? I18N.lang : 'fr'; } catch (e) { }
  Gloss.build();
  Store.init();
  Settings.apply();
  // view "after" hooks may return cleanup functions
  var origRefresh = Router.refresh;
  Router.refresh = function (soft) {
    if (Router._cleanup) { try { Router._cleanup(); } catch (e) { } Router._cleanup = null; }
    var v = Views.resolve(Router.parse());
    var after = v.after;
    if (after && !after._wrapped) { v.after = function (host) { var r = after(host); if (typeof r === 'function') Router._cleanup = r; }; v.after._wrapped = true; }
    origRefresh(soft);
  };
  Shell.render();
  Router.refresh();
})();
