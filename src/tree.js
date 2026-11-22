/* ===== Tree v2 — visual decision tree for fiche algorithms (owner: exercices interactifs) =====
   Data (docs/STYLE-PEDAGO.md §8): algo = [{ q, yes, no, yesGo?, noGo? }]
     yes / no : action text (or { t, urgent:true }); may be empty when the branch only leads to another question.
     yesGo / noGo : 0-based index of the next question on that branch; absent = the branch ends.
     Back-compat: cont:'yes'|'no' = yesGo/noGo = i+1 on that branch. A chain with no go/cont at all
     (legacy) is drawn with a neutral dashed « puis » link between consecutive questions.
     Filler leaves (« Question suivante. », « Continuer »…) are treated as empty: a labelled arrow replaces them.
   API:
     Tree.render(algo, opts) → HTML string. opts.fmt(text) formats content (default U.md; views pass T for glossary);
       opts.title accessible name; opts.mode 'walk' (default: one question per card, learner-paced) | 'overview'.
       opts.vignette (or algo.vignette / algo[0].vignette; views pass f.cat.vignette): one-line clinical case shown above the walk.
         string, or { t: '…', answers: ['yes','no',…] | { 0:'yes', 2:'no' } } — with answers, each choice is checked, the right
         answer is always shown, and the walk follows the correct branch for this patient.
     Tree.mount(host) → hydrates every [data-tree] in host; returns a cleanup function.
   Overview: semantic ordered list of questions with Oui/Non leaves; SVG connectors; 3 columns (Oui | question | Non)
   in boxes ≥ 700 px, question + 2 small columns below on phones. Nothing advances by itself (§4). */
var Tree = (function () {
  'use strict';
  var W = window, NS = 'http://www.w3.org/2000/svg', uid = 0;
  function lang() { return (W.I18N && W.I18N.lang) || 'fr'; }
  var KEYS = {};
  function TT(key, fr, en) {
    KEYS['tree.' + key] = { fr: fr, en: en };
    try { var d = W.I18N && W.I18N.dict && W.I18N.dict[lang()]; if (d && d['tree.' + key] != null) return d['tree.' + key]; } catch (e) { }
    return lang() === 'en' ? en : fr;
  }
  function esc(s) { return (W.U && U.esc) ? U.esc(s) : String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var URGENT = /\b(urgent|urgence|urgente|sans délai|tout de suite|immédiat\w*|stat|emergency|urgently|immediate\w*|right away|without delay|same[- ]day|même jour)\b/i;
  var FILLER = /^\s*(question suivante|next question|continuer|continue|couche suivante|next layer|suite|passer à la suite|go on)\s*\.?\s*$/i;
  function reduced() { if (document.documentElement.classList.contains('no-motion')) return true; try { return W.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function isIdx(v, n, i) { return typeof v === 'number' && v >= 0 && v < n && v !== i && Math.floor(v) === v; }

  /* normalise to { q, b: { yes: {t, urgent, go}, no: {...} } } + legacy flag */
  function norm(algo) {
    algo = (algo || []).filter(function (a) { return a && a.q; });
    var n = algo.length, anyGo = algo.some(function (a) { return a.yesGo != null || a.noGo != null || a.cont === 'yes' || a.cont === 'no' || (a.yes && a.yes.go != null) || (a.no && a.no.go != null); });
    var nodes = algo.map(function (a, i) {
      function br(k) {
        var v = a[k], t = '', urgent = false, go = a[k + 'Go'];
        if (v && typeof v === 'object') { t = v.t || v.text || ''; urgent = !!v.urgent; if (go == null && v.go != null) go = v.go; } else t = String(v == null ? '' : v);
        if (go == null && a.cont === k) go = i + 1;
        if (FILLER.test(t)) t = '';
        if (!urgent && t) urgent = URGENT.test(t);
        return { t: t, urgent: urgent, go: isIdx(go, n, i) ? go : null };
      }
      return { q: a.q, b: { yes: br('yes'), no: br('no') } };
    });
    return { nodes: nodes, legacy: !anyGo && n > 1 };
  }

  function render(algo, opts) {
    opts = opts || {};
    var N = norm(algo), nodes = N.nodes; if (!nodes.length) return '';
    var fmt = opts.fmt || function (s) { return (W.U && U.md) ? U.md(s) : esc(s); };
    var id = 'tree-' + (++uid), YES = TT('yes', 'Oui', 'Yes'), NO = TT('no', 'Non', 'No'), urgentTag = TT('urgent', 'Urgent', 'Urgent');
    var mode = opts.mode === 'overview' ? 'overview' : 'walk', title = opts.title || TT('title', 'Algorithme', 'Algorithm');
    var vg = opts.vignette || (algo && algo.vignette) || (algo && algo[0] && algo[0].vignette) || null, vig = null;
    if (vg) {
      var vt = typeof vg === 'string' ? vg : (vg.t || vg.text || ''), va = {};
      if (vg && typeof vg === 'object' && vg.answers) Object.keys(vg.answers).forEach(function (k) { var v = String(vg.answers[k]).toLowerCase(); v = (v === 'oui' || v === 'yes' || v === 'true') ? 'yes' : (v === 'non' || v === 'no' || v === 'false') ? 'no' : ''; if (v) va[k] = v; });
      if (vt) vig = { h: fmt(vt), ans: va };
    }
    var data = nodes.map(function (nd) { return { q: fmt(nd.q), yes: { h: nd.b.yes.t ? fmt(nd.b.yes.t) : '', u: nd.b.yes.urgent, go: nd.b.yes.go }, no: { h: nd.b.no.t ? fmt(nd.b.no.t) : '', u: nd.b.no.urgent, go: nd.b.no.go } }; });
    var h = '<div class="tree" data-tree data-mode="' + mode + '"' + (N.legacy ? ' data-legacy="1"' : '') + ' id="' + id + '">';
    h += '<div class="tree-bar"><div class="seg tree-seg" role="group" aria-label="' + esc(TT('modes', 'Affichage de l’algorithme', 'Algorithm view')) + '">' +
      '<button type="button" data-tmode="walk" aria-pressed="' + (mode === 'walk') + '">' + esc(TT('walk', 'Pas à pas', 'Step by step')) + '</button>' +
      '<button type="button" data-tmode="overview" aria-pressed="' + (mode === 'overview') + '">' + esc(TT('overview', 'Vue d’ensemble', 'Overview')) + '</button></div>' +
      '<button type="button" class="btn sm tree-restart" data-trestart>' + esc(TT('restart', 'Recommencer', 'Start again')) + '</button></div>';
    // ---- walk mode (filled by mount)
    h += '<div class="tree-walk">' + (vig ? '<p class="tw-vig"><b>' + esc(TT('case', 'Cas', 'Case')) + ' :</b> ' + vig.h + '</p>' : '') + '<ol class="tw-dots" aria-hidden="true">' + nodes.map(function (_, i) { return '<li data-d="' + i + '">' + (i + 1) + '</li>'; }).join('') + '</ol>' +
      '<ol class="tw-trail" aria-label="' + esc(TT('trail', 'Ton chemin', 'Your path')) + '"></ol><div class="tw-stage"></div><div class="tree-live tree-sr" aria-live="polite"></div></div>';
    // ---- overview mode (static, semantic)
    h += '<div class="tree-box"><div class="tree-canvas"><svg class="tree-wires" aria-hidden="true" focusable="false"></svg><ol class="tree-flow" aria-label="' + esc(title) + '">';
    nodes.forEach(function (nd, i) {
      h += '<li class="tree-step" data-i="' + i + '" id="' + id + '-q' + i + '"><div class="tree-q"><span class="tree-qn" aria-hidden="true">' + (i + 1) + '</span><p class="tree-qt"><span class="tree-sr">' + esc(TT('q', 'Question', 'Question') + ' ' + (i + 1) + ' : ') + '</span>' + data[i].q + '</p></div>' +
        '<ul class="tree-br">' + ['yes', 'no'].map(function (k) {
          var b = nd.b[k], lab = k === 'yes' ? YES : NO, go = b.go, adj = go === i + 1;
          var arrow = go != null ? '<a class="tree-go" href="#' + id + '-q' + go + '" data-tgo="' + go + '">→ ' + esc(TT('qn', 'question', 'question') + ' ' + (go + 1)) + '</a>' : (N.legacy ? '' : '<span class="tree-sr">' + esc(TT('srend', '(fin)', '(end)')) + '</span>');
          return '<li class="tree-leaf ' + k + (b.urgent ? ' urgent' : '') + (b.t ? '' : ' pass') + (go == null && !N.legacy ? ' end' : '') + '" data-leaf="' + k + '"' + (go != null ? ' data-go="' + go + '"' : '') + (adj ? ' data-adj="1"' : '') + '>' +
            '<span class="tree-edge">' + esc(lab) + '<span class="tree-sr"> : </span></span>' + (b.urgent ? '<span class="tree-tag">' + esc(urgentTag) + '<span class="tree-sr"> — </span></span>' : '') +
            (b.t ? '<p>' + data[i][k].h + '</p>' : '') + arrow + '</li>';
        }).join('') + '</ul>' + (N.legacy && i < nodes.length - 1 ? '<span class="tree-then" aria-hidden="true">' + esc(TT('then', 'puis', 'then')) + '</span>' : '') + '</li>';
    });
    h += '</ol></div></div>';
    h += '<script type="application/json" class="tree-data">' + JSON.stringify({ n: data, legacy: N.legacy, ans: vig ? vig.ans : null }).replace(/</g, '\\u003c') + '</script></div>';
    return h;
  }

  /* ---------- overview connectors ---------- */
  function rel(el, base) { var r = el.getBoundingClientRect(); return { l: r.left - base.left, t: r.top - base.top, r: r.right - base.left, b: r.bottom - base.top, cx: r.left - base.left + r.width / 2, cy: r.top - base.top + r.height / 2 }; }
  function f(v) { return v.toFixed(1); }
  function curveV(x1, y1, x2, y2) { var m = (y1 + y2) / 2; return 'M' + f(x1) + ' ' + f(y1) + ' C' + f(x1) + ' ' + f(m) + ' ' + f(x2) + ' ' + f(m) + ' ' + f(x2) + ' ' + f(y2); }
  function wires(tree) {
    var canvas = tree.querySelector('.tree-canvas'), svg = canvas && canvas.querySelector('.tree-wires');
    if (!svg || tree.getAttribute('data-mode') !== 'overview' || !canvas.offsetParent) return;
    var base = canvas.getBoundingClientRect(), Wd = canvas.scrollWidth, Ht = canvas.scrollHeight;
    svg.setAttribute('viewBox', '0 0 ' + Wd + ' ' + Ht); svg.setAttribute('width', Wd); svg.setAttribute('height', Ht);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    function path(d, cls) { var p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); p.setAttribute('class', 'tree-wire ' + (cls || '')); svg.appendChild(p); }
    var steps = Array.prototype.slice.call(canvas.querySelectorAll('.tree-step')), legacy = tree.getAttribute('data-legacy') === '1';
    steps.forEach(function (st, i) {
      var qEl = st.querySelector('.tree-q'), q = rel(qEl, base), leaves = st.querySelectorAll('.tree-leaf');
      var yesL = rel(leaves[0], base), noL = rel(leaves[1], base), wide = yesL.r <= q.l + 2 && noL.l >= q.r - 2;
      [[leaves[0], yesL, 'yes'], [leaves[1], noL, 'no']].forEach(function (x) {
        var L = x[1];
        if (wide) path(x[2] === 'yes' ? 'M' + f(q.l) + ' ' + f(q.cy) + ' H' + f(L.r) : 'M' + f(q.r) + ' ' + f(q.cy) + ' H' + f(L.l), x[2]);
        else path(curveV(q.cx + (x[2] === 'yes' ? -16 : 16), q.b, L.cx, L.t), x[2]);
        if (x[0].getAttribute('data-adj') === '1' && steps[i + 1]) { var nq = rel(steps[i + 1].querySelector('.tree-q'), base); path(curveV(L.cx, L.b, nq.cx + (x[2] === 'yes' ? -10 : 10), nq.t), x[2] + ' next'); }
      });
      if (legacy && steps[i + 1]) { var nq2 = rel(steps[i + 1].querySelector('.tree-q'), base), y0 = Math.max(yesL.b, noL.b); path('M' + f(q.cx) + ' ' + f(wide ? q.b : y0) + ' V' + f(nq2.t), 'then'); }
    });
  }

  /* ---------- walk mode ---------- */
  function hydrate(tree) {
    if (tree.getAttribute('data-ready')) return null;
    var dEl = tree.querySelector('.tree-data'); if (!dEl) return null;
    tree.setAttribute('data-ready', '1');
    var D = JSON.parse(dEl.textContent), nodes = D.n, YES = TT('yes', 'Oui', 'Yes'), NO = TT('no', 'Non', 'No');
    var trail = tree.querySelector('.tw-trail'), stage = tree.querySelector('.tw-stage'), live = tree.querySelector('.tree-live'), dots = tree.querySelectorAll('.tw-dots li');
    var st = { cur: 0, path: [], seen: {} };
    function leafHtml(b, k, final) {
      return '<div class="tw-act ' + k + (b.u ? ' urgent' : '') + (final ? ' final' : '') + '"><span class="tree-edge">' + esc(k === 'yes' ? YES : NO) + '</span>' + (b.u ? '<span class="tree-tag">' + esc(TT('urgent', 'Urgent', 'Urgent')) + '</span>' : '') + (b.h ? '<p>' + b.h + '</p>' : '') + '</div>';
    }
    function draw(focusSel, animate) {
      // trail of answered questions: compact, chosen branch only
      trail.innerHTML = st.path.map(function (p, j) {
        var nd = nodes[p.i], b = nd[p.k];
        var chk = p.right ? (p.chose === p.k ? '<span class="tw-ok">✓ ' + esc(TT('right', 'juste', 'right')) + '</span>' : '<span class="tw-bad">' + esc(TT('youchose', 'Tu as dit', 'You said')) + ' ' + esc(p.chose === 'yes' ? YES : NO) + ' · ' + esc(TT('forthis', 'pour ce patient', 'for this patient')) + ' :</span> ') : '';
        return '<li class="tw-step' + (animate && j === st.path.length - 1 ? ' just' : '') + (p.right && p.chose !== p.k ? ' miss' : '') + '"><span class="tw-n" aria-hidden="true">' + (p.i + 1) + '</span><div class="tw-body"><p class="tw-q">' + nd.q + '</p><p class="tw-a">' + (p.right && p.chose !== p.k ? chk : '') + '<b>' + esc(p.k === 'yes' ? YES : NO) + '</b>' + (p.right && p.chose === p.k ? ' ' + chk : '') + (b.h ? ' — ' + b.h : '') + '</p></div></li>';
      }).join('');
      Array.prototype.forEach.call(dots, function (d, i) { d.className = (st.seen[i] ? 'on' : '') + (i === st.cur && !st.done ? ' cur' : ''); });
      if (st.done) {
        var last = st.path[st.path.length - 1], lb = nodes[last.i][last.k];
        stage.innerHTML = '<div class="tw-end" tabindex="-1"><b>' + esc(TT('end', 'Fin du parcours', 'End of path')) + (st.n ? ' · ' + st.ok + ' / ' + st.n + ' ' + esc(TT('gooddec', 'bonnes décisions', 'right decisions')) : '') + '</b>' + leafHtml(lb, last.k, true) + '<div class="row"><button type="button" class="btn sm" data-trestart>' + esc(TT('restart', 'Recommencer', 'Start again')) + '</button><button type="button" class="btn sm ghost" data-tmode="overview">' + esc(TT('seeall', 'Voir tout l’arbre', 'See the whole tree')) + '</button></div></div>';
      } else {
        var nd = nodes[st.cur], nextBtn = D.legacy && st.await;
        stage.innerHTML = '<div class="tw-card' + (animate ? ' just' : '') + '"><span class="tw-qn">' + esc(TT('q', 'Question', 'Question') + ' ' + (st.cur + 1)) + '</span><p class="tw-qt">' + nd.q + '</p>' +
          (nextBtn ? '' : '<div class="tree-yn" role="group" aria-label="' + esc(TT('q', 'Question', 'Question') + ' ' + (st.cur + 1)) + '"><button type="button" class="btn" data-tyn="yes">' + esc(YES) + '</button><button type="button" class="btn" data-tyn="no">' + esc(NO) + '</button></div>') + '</div>' +
          (nextBtn ? '<div class="row"><button type="button" class="btn" data-tnext>' + esc(TT('nextq', 'Question suivante', 'Next question')) + ' ↓</button></div>' : '');
      }
      var fe = focusSel && tree.querySelector(focusSel); if (fe) fe.focus({ preventScroll: true });
      if (animate) {   // keep the current question (and its answer buttons) fully visible, above the bottom tab bar
        var cardEl = stage.firstChild, tb = document.getElementById('tabbar'), tbH = tb && tb.offsetParent ? tb.getBoundingClientRect().height : 0;
        if (cardEl) { var r = cardEl.getBoundingClientRect(); var dy = r.bottom > W.innerHeight - tbH - 8 ? r.bottom - (W.innerHeight - tbH - 16) : r.top < 70 ? r.top - 80 : 0; if (dy) W.scrollBy({ top: dy, behavior: reduced() ? 'auto' : 'smooth' }); }
      }
    }
    function answer(chose) {
      var right = D.ans && D.ans[st.cur] ? D.ans[st.cur] : null, k = right || chose, nd = nodes[st.cur], b = nd[k];
      st.path.push({ i: st.cur, k: k, chose: chose, right: right }); st.seen[st.cur] = 1;
      if (right) { st.n = (st.n || 0) + 1; if (chose === right) st.ok = (st.ok || 0) + 1; }
      live.textContent = (right ? (chose === right ? TT('right', 'juste', 'right') + '. ' : TT('forthis', 'pour ce patient', 'for this patient') + ' : ') : '') + (k === 'yes' ? YES : NO) + (b.h ? ' : ' + b.h.replace(/<[^>]+>/g, '') : '');
      if (b.go != null && !st.seen[b.go]) { st.cur = b.go; draw('[data-tyn="yes"]', true); }
      else if (D.legacy && st.cur < nodes.length - 1) { st.await = true; st.path[st.path.length - 1].legacy = 1; draw('[data-tnext]', true); }
      else { st.done = true; draw('.tw-end [data-trestart]', true); }
    }
    function reset(focus) { st = { cur: 0, path: [], seen: {}, ok: 0, n: 0 }; live.textContent = ''; draw(focus ? '[data-tyn="yes"]' : null); }
    function setMode(m) { tree.setAttribute('data-mode', m); tree.querySelectorAll('.tree-seg [data-tmode]').forEach(function (x) { x.setAttribute('aria-pressed', String(x.getAttribute('data-tmode') === m)); }); if (m === 'overview') W.requestAnimationFrame(function () { wires(tree); }); }
    function onClick(ev) {
      var t = ev.target, b;
      if ((b = t.closest('[data-tmode]'))) { setMode(b.getAttribute('data-tmode')); if (b.getAttribute('data-tmode') === 'walk') reset(true); else { var s0 = tree.querySelector('.tree-seg [data-tmode="overview"]'); if (s0) s0.focus({ preventScroll: true }); } return; }
      if ((b = t.closest('[data-trestart]'))) { reset(true); return; }
      if ((b = t.closest('[data-tnext]'))) { st.await = false; st.cur++; draw('[data-tyn="yes"]', true); return; }
      if ((b = t.closest('[data-tyn]'))) { answer(b.getAttribute('data-tyn')); return; }
      if ((b = t.closest('[data-tgo]'))) { ev.preventDefault(); var q = tree.querySelector('.tree-step[data-i="' + b.getAttribute('data-tgo') + '"] .tree-q'); if (q) { q.setAttribute('tabindex', '-1'); q.focus({ preventScroll: true }); q.scrollIntoView({ block: 'nearest', behavior: reduced() ? 'auto' : 'smooth' }); q.classList.add('flash'); W.setTimeout(function () { q.classList.remove('flash'); }, 900); } }
    }
    tree.addEventListener('click', onClick);
    var box = tree.querySelector('.tree-canvas');
    var ro = W.ResizeObserver ? new ResizeObserver(function () { W.requestAnimationFrame(function () { wires(tree); }); }) : null;
    function onResize() { wires(tree); }
    if (ro) ro.observe(box); else W.addEventListener('resize', onResize);
    reset(false); wires(tree);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { wires(tree); });
    return function () { tree.removeEventListener('click', onClick); if (ro) ro.disconnect(); else W.removeEventListener('resize', onResize); tree.removeAttribute('data-ready'); };
  }
  function mount(host) {
    var cleans = Array.prototype.slice.call((host || document).querySelectorAll('[data-tree]')).map(hydrate).filter(Boolean);
    return function () { cleans.forEach(function (c) { try { c(); } catch (e) { } }); };
  }
  return { render: render, mount: mount, norm: norm, keys: KEYS };
})();
window.Tree = Tree;
