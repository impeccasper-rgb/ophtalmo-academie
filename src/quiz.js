/* ===== Quiz engine (sessions, inline mini-quizzes) and case player ===== */
'use strict';
var Quiz = {
  session: null,
  pick: function (opts) {
    var list = OPH.quiz.filter(function (q) {
      if (opts.modules && opts.modules.indexOf(q.module) < 0) return false;
      if (opts.topic && q.topic !== opts.topic) return false;
      if (opts.types && opts.types.length && opts.types.indexOf(q.type) < 0) return false;
      if (opts.levels && opts.levels.length && opts.levels.indexOf(q.level) < 0) return false;
      if (opts.trap && !q.trap) return false;
      if (opts.wrong) { var a = Store.p.answers[q.id]; if (!a || (a.last && a.conf !== 'unsure')) return false; }
      return true;
    });
    if (opts.adaptive) {
      var unseen = [], wrong = [], right = [];
      list.forEach(function (q) { var a = Store.p.answers[q.id]; if (!a) unseen.push(q); else if (!a.last || a.conf === 'unsure') wrong.push(q); else right.push(q); });
      list = U.shuffle(wrong).concat(U.shuffle(unseen)).concat(U.shuffle(right));
      // keep progressive difficulty inside the series
      list = list.slice(0, opts.n || 10).sort(function (a, b) { return a.level - b.level; });
    } else if (opts.shuffle !== false) {
      list = U.shuffle(list);
      if (opts.n) list = list.slice(0, opts.n);
      if (opts.sortLevel) list.sort(function (a, b) { return a.level - b.level; });
    }
    return list;
  },
  start: function (opts, title) {
    var list = Quiz.pick(opts);
    if (!list.length) { U.toast(t('quiz.none')); return; }
    Quiz.session = { title: title || t('quiz.series'), ids: list.map(function (q) { return q.id; }), back: opts.back || 'quiz' };
    Router.go('quiz-run');
  },
  byId: function (id) { if (!Quiz._m) { Quiz._m = {}; OPH.quiz.forEach(function (q) { Quiz._m[q.id] = q; }); } return Quiz._m[id]; },
  // mount an interactive quiz in a container
  mount: function (host, ids, opts) {
    opts = opts || {};
    var st = { i: 0, res: [], order: {}, answered: false };
    function q() { return Quiz.byId(ids[st.i]); }
    function orderFor(qq) { if (!st.order[qq.id]) st.order[qq.id] = U.shuffle(qq.options.map(function (_, k) { return k; })); return st.order[qq.id]; }
    function head() {
      var done = st.res.length, ok = st.res.filter(Boolean).length;
      return '<div class="qhead"><div class="small muted">' + (opts.title ? U.esc(opts.title) + ' · ' : '') + t('quiz.qn', { i: st.i + 1, n: ids.length }) + '</div><div class="small mono">' + t('quiz.okn', { ok: ok, n: done }) + '</div></div><div class="pbar"><i style="width:' + (100 * st.i / ids.length).toFixed(1) + '%"></i></div>';
    }
    function render() {
      if (st.i >= ids.length) return end();
      var qq = q(); if (!qq) { st.i++; return render(); }
      var ord = orderFor(qq), scope = Gloss.scope();
      var meta = '<div class="qmeta"><span class="tag plain">' + (qq.module === 'A' ? t('quiz.moduleA') : L.modules[qq.module]) + '</span><span class="tag plain">' + U.esc(L.qtypes[qq.type] || qq.type) + '</span><span class="tag plain">' + t('quiz.level', { n: qq.level }) + '</span>' + (qq.trap ? L.tag('piege') : '') + (window.I18N ? I18N.badge(qq) : '') + '</div>';
      var fig = qq.figure ? Figures.render(qq.figure, qq.figure.type === 'photo' ? { caption: t('quiz.photo.hidden'), hideCaption: true, quiz: true } : { caption: t('quiz.schema.hidden') }) : '';
      host.innerHTML = '<div class="quiz card">' + head() + meta + '<div class="qstem">' + T(qq.stem, scope) + '</div>' + (fig ? '<div class="qfig" data-qfig>' + fig + '</div>' : '') +
        '<div class="conf" role="radiogroup" aria-label="' + t('quiz.conf.aria') + '"><span class="small muted">' + t('quiz.conf.lead') + '</span><button type="button" data-conf="sure" aria-pressed="' + (st.conf !== 'unsure') + '">' + t('quiz.conf.sure') + '</button><button type="button" data-conf="unsure" aria-pressed="' + (st.conf === 'unsure') + '">' + t('quiz.conf.unsure') + '</button></div>' +
        '<div class="opts" role="group" aria-label="' + t('quiz.opts.aria') + '">' + ord.map(function (k, j) { return '<button type="button" class="opt" data-k="' + k + '"><span class="key">' + (j + 1) + '</span><span>' + U.md(qq.options[k]) + '</span></button>'; }).join('') + '<button type="button" class="opt idk" data-k="-1"><span class="key">?</span><span>' + t('quiz.idk') + '</span></button></div><div data-fb></div></div>';
      st.answered = false;
      Figures.hydrate(host);
    }
    function answer(k) {
      if (st.answered) return; st.answered = true;
      var qq = q(), ok = k === qq.answer, ord = orderFor(qq), scope = Gloss.scope(), conf = k === -1 ? 'idk' : (st.conf === 'unsure' ? 'unsure' : 'sure');
      Store.answer(qq.id, ok, conf); st.res.push(ok && conf === 'sure');
      U.$$('.opt', host).forEach(function (b) {
        var kk = +b.getAttribute('data-k'); b.disabled = true; if (kk === -1) { b.hidden = true; return; }
        if (kk === qq.answer) b.classList.add('correct'); else if (kk === k) b.classList.add('wrong');
        b.insertAdjacentHTML('beforeend', '<span class="why">' + (kk === qq.answer ? '<b>' + t('quiz.right') + '</b> ' : '<b>' + t('quiz.whynot') + '</b> ') + U.md(qq.why[kk]) + '</span>');
      });
      if (qq.figure) { var fh = U.$('[data-qfig]', host); if (fh) { fh.innerHTML = qq.figure.type === 'photo' ? Figures.render(qq.figure, { caption: (D.cat(qq.figure.id) || {}).title, look: t('quiz.srcap') + ((D.cat(qq.figure.id) || {}).caption || '') }) : Figures.render(qq.figure, { reveal: true }); Figures.hydrate(fh); } }
      var link = qq.topic && D.fiche(qq.topic) ? '<a href="#' + qq.topic + '">' + U.esc(t('quiz.revfiche', { t: D.fiche(qq.topic).title })) + '</a>' : (qq.topic && /^a-/.test(qq.topic) ? '<a href="#' + (qq.topic === 'a-anatomie' || qq.topic === 'a-physiologie' || qq.topic === 'a-examen' || qq.topic === 'a-imagerie' ? qq.topic : 'module-a') + '">' + t('quiz.revsection') + '</a>' : (qq.topic && /-bonus$/.test(qq.topic) ? '<a href="#' + (qq.module === 'B' ? 'module-b' : 'module-c') + '">' + t('quiz.revbonus') + '</a>' : (qq.topic && /-bases$/.test(qq.topic) ? '<a href="#' + qq.topic + '">' + t('quiz.revbases') + '</a>' : '')));
      U.$('[data-fb]', host).innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'bad') + '" role="status"><div class="verdict">' + (ok ? (conf === 'unsure' ? t('quiz.v.okunsure') : t('quiz.v.ok')) : (conf === 'idk' ? t('quiz.v.idk') : t('quiz.v.bad'))) + '</div><div>' + T(qq.explain, scope) + '</div>' + (qq.deep ? '<details class="acc more qdeep"><summary>' + t('f.more') + '</summary><div class="acc-b small">' + T(qq.deep, scope) + '</div></details>' : '') + '<div class="row small">' + link + '</div>' +
        '<div class="row"><button type="button" class="btn primary" data-next>' + (st.i + 1 < ids.length ? t('quiz.nextq') : t('quiz.result')) + '</button></div></div>';
      var nb = U.$('[data-next]', host); if (nb) nb.focus({ preventScroll: true });
      if (opts.onAnswer) opts.onAnswer();
    }
    function end() {
      var ok = st.res.filter(Boolean).length, n = st.res.length, wrongIds = ids.filter(function (id, i) { return st.res[i] === false; });
      host.innerHTML = '<div class="card scorecard"><div class="eyebrow">' + (opts.title ? U.esc(opts.title) : t('quiz.done')) + '</div><div class="acuity-big">' + ok + ' / ' + n + '</div><div class="pbar ' + (ok / Math.max(1, n) >= 0.6 ? 'ok' : '') + '"><i style="width:' + (100 * ok / Math.max(1, n)).toFixed(0) + '%"></i></div>' +
        (wrongIds.length ? '<div class="small">' + t('quiz.torev') + wrongIds.map(function (id) { var qq = Quiz.byId(id), f = D.fiche(qq.topic); return f ? '<a href="#' + f.id + '">' + U.esc(f.title) + '</a>' : U.esc(D.title(qq.topic)); }).filter(function (v, i, a) { return a.indexOf(v) === i; }).join(' · ') + '</div>' : '<div class="small">' + t('quiz.perfect') + '</div>') +
        '<div class="row">' + (wrongIds.length ? '<button type="button" class="btn primary" data-retry>' + t('quiz.retry') + '</button>' : '') + '<button type="button" class="btn" data-again>' + t('quiz.again') + '</button>' + (opts.backHref ? '<a class="btn ghost" href="#' + opts.backHref + '">' + t('common.back') + '</a>' : '') + '</div></div>';
      st.wrongIds = wrongIds;
      if (opts.onEnd) opts.onEnd(ok, n);
    }
    host.onclick = function (ev) {
      var cf = ev.target.closest('[data-conf]'); if (cf && !st.answered) { st.conf = cf.getAttribute('data-conf'); U.$$('[data-conf]', host).forEach(function (b) { b.setAttribute('aria-pressed', String(b === cf)); }); return; }
      var o = ev.target.closest('.opt'); if (o && host.contains(o) && !o.disabled) { answer(+o.getAttribute('data-k')); return; }
      if (ev.target.closest('[data-next]')) { st.i++; render(); host.scrollIntoView({ block: 'nearest', behavior: U.reduced() ? 'auto' : 'smooth' }); return; }
      if (ev.target.closest('[data-retry]')) { ids = st.wrongIds.slice(); st = { i: 0, res: [], order: {}, answered: false, conf: st.conf }; render(); return; }
      if (ev.target.closest('[data-again]')) { st = { i: 0, res: [], order: {}, answered: false, conf: st.conf }; render(); }
    };
    host.onkeydown = function (ev) {
      if (/^[1-5]$/.test(ev.key) && !st.answered) { var b = U.$$('.opt:not(.idk)', host)[+ev.key - 1]; if (b) { ev.preventDefault(); answer(+b.getAttribute('data-k')); } }
    };
    host.tabIndex = -1;
    render();
  }
};
// keyboard shortcuts for the full-page quiz
document.addEventListener('keydown', function (ev) {
  if (Router.cur !== 'quiz-run' || /input|select|textarea/i.test((ev.target.tagName || ''))) return;
  var host = U.$('#quiz-host'); if (!host) return;
  if (/^[1-5]$/.test(ev.key) && host.onkeydown) host.onkeydown(ev);
  if (ev.key === 'Enter') { var n = U.$('[data-next]', host); if (n) { ev.preventDefault(); n.click(); } }
});

/* ---------- clinical case player ---------- */
var Case = {
  mount: function (host, cs) {
    var st = { i: 0, score: 0, max: 0, log: [], sel: [], phase: 'ask' };
    var scope = Gloss.scope();
    function stepHtml() {
      var s = cs.steps[st.i];
      if (!s) return endHtml();
      if (s.kind === 'info') return '<div class="case-step card"><div class="eyebrow">' + t('case.evol') + '</div><div>' + T(s.text, scope) + '</div>' + (s.figure ? '<div class="qfig">' + Figures.render(s.figure) + '</div>' : '') + '<div class="row"><button class="btn primary" data-cnext>' + t('case.continue') + '</button></div></div>';
      if (s.kind === 'exams') {
        var revealed = st.phase === 'shown';
        var opts = s.options.map(function (o, k) {
          var on = st.sel.indexOf(k) >= 0, vtxt = { 2: t('case.v2'), 1: t('case.v1'), 0: t('case.v0'), '-1': t('case.vm1') }[o.value];
          return '<button type="button" class="exam-opt" data-ex="' + k + '" aria-pressed="' + on + '"' + (revealed ? ' disabled' : '') + '><span class="bx">' + (on ? '✓' : '') + '</span><span><b>' + U.md(o.label) + '</b>' +
            (revealed && (on || o.value === 2) ? '<span class="exam-res"><span class="val v' + o.value + '">' + vtxt + (on ? '' : t('case.notasked')) + '</span><span>' + U.md(o.result) + '</span><span class="muted">' + U.md(o.note) + '</span></span>' : '') + '</span></button>';
        }).join('');
        return '<div class="case-step card"><div class="eyebrow">' + t('case.step.exams', { n: st.i + 1 }) + '</div><div><b>' + U.md(s.prompt) + '</b></div><div class="small muted">' + (revealed ? t('case.exres') : t('case.pick', { n: s.pick })) + '</div><div class="stack">' + opts + '</div>' +
          '<div class="row">' + (revealed ? '<button class="btn primary" data-cnext>' + t('case.continue') + '</button>' : '<button class="btn primary" data-cshow' + (st.sel.length ? '' : ' disabled') + '>' + t('case.show') + '</button><span class="small muted">' + st.sel.length + ' / ' + s.pick + '</span>') + '</div></div>';
      }
      // choice
      var answered = st.phase === 'answered';
      return '<div class="case-step card"><div class="eyebrow">' + t('case.step.choice', { n: st.i + 1 }) + '</div><div><b>' + T(s.prompt, scope) + '</b></div><div class="opts">' +
        s.options.map(function (o, k) { var cls = answered ? (o.correct ? ' correct' : (st.choice === k ? ' wrong' : '')) : ''; return '<button type="button" class="opt' + cls + '" data-ch="' + k + '"' + (answered ? ' disabled' : '') + '><span class="key">' + (k + 1) + '</span><span>' + U.md(o.label) + (answered && (o.correct || st.choice === k) ? '<span class="why">' + U.md(o.note) + '</span>' : '') + '</span></button>'; }).join('') +
        '</div>' + (answered ? '<div class="row"><button class="btn primary" data-cnext>' + t('case.continue') + '</button></div>' : '') + '</div>';
    }
    function endHtml() {
      var pct = st.max ? Math.round(100 * Math.max(0, st.score) / st.max) : 0;
      Store.p.cases[cs.id] = { done: true, score: pct, t: Date.now() }; Store.touch();
      return '<div class="card stack"><div class="eyebrow">' + t('case.debrief') + '</div><div class="acuity-big">' + pct + ' %</div><ul class="blist">' + cs.debrief.map(function (d) { return '<li>' + T(d, scope) + '</li>'; }).join('') + '</ul><div class="row"><button class="btn" data-crestart>' + t('case.restart') + '</button><a class="btn ghost" href="#cas">' + t('case.others') + '</a></div></div>';
    }
    function logHtml() { return st.log.length ? '<div class="timeline">' + st.log.map(function (l) { return '<div class="done-step">' + l + '</div>'; }).join('') + '</div>' : ''; }
    function render() {
      scope = Gloss.scope(); // fresh scope each render so glossary links survive re-rendering
      host.innerHTML = '<div class="stack"><div class="card"><div class="eyebrow">' + t('case.intro') + '</div><div>' + T(cs.intro, scope) + '</div></div>' + logHtml() + '<div data-cur>' + stepHtml() + '</div></div>';
      Figures.hydrate(host);
    }
    host.onclick = function (ev) {
      var s = cs.steps[st.i];
      var ex = ev.target.closest('[data-ex]');
      if (ex && s && s.kind === 'exams' && st.phase === 'ask') { var k = +ex.getAttribute('data-ex'), i = st.sel.indexOf(k); if (i >= 0) st.sel.splice(i, 1); else if (st.sel.length < s.pick) st.sel.push(k); else U.toast(t('case.max', { n: s.pick })); render(); return; }
      if (ev.target.closest('[data-cshow]')) {
        st.phase = 'shown';
        var best = s.options.map(function (o) { return o.value; }).sort(function (a, b) { return b - a; }).slice(0, s.pick).reduce(function (a, b) { return a + Math.max(0, b); }, 0);
        var got = st.sel.reduce(function (a, k) { return a + s.options[k].value; }, 0);
        st.score += got; st.max += best;
        st.log.push(t('case.log.exams') + st.sel.map(function (k) { return U.esc(s.options[k].label); }).join(', '));
        render(); return;
      }
      var ch = ev.target.closest('[data-ch]');
      if (ch && s && s.kind === 'choice' && st.phase !== 'answered') {
        st.choice = +ch.getAttribute('data-ch'); st.phase = 'answered'; st.max += 2;
        var o = s.options[st.choice]; if (o.correct) st.score += 2;
        st.log.push((o.correct ? '✓ ' : '✗ ') + U.esc(s.prompt.replace(/\*\*/g, '')) + ' → ' + U.esc(o.label.replace(/\*\*/g, '')));
        render(); return;
      }
      if (ev.target.closest('[data-cnext]')) { st.i++; st.phase = 'ask'; st.sel = []; st.choice = null; render(); var cur = U.$('[data-cur]', host); if (cur) cur.scrollIntoView({ block: 'start', behavior: U.reduced() ? 'auto' : 'smooth' }); return; }
      if (ev.target.closest('[data-crestart]')) { st = { i: 0, score: 0, max: 0, log: [], sel: [], phase: 'ask' }; render(); }
    };
    render();
  }
};
