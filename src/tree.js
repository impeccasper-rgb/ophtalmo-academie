/* ===== Tree — visual decision tree for fiche algorithms (owner: exercices interactifs) =====
   Data: algo = [{ q, yes, no, cont? }]  (a chain of questions)
     cont: 'yes' | 'no' → that branch continues to the next question; the other branch ends on an action leaf.
     cont missing      → both leaves are shown and a neutral « puis » connector links the step to the next one.
     yes / no may also be objects { t: '…', urgent: true } (urgent is otherwise detected from keywords).
   API:
     Tree.render(algo, opts) → HTML string (static, works without JS: top-down flowchart + hidden ordered list)
       opts.fmt(text)  formats a content string (default U.md; views can pass T for glossary links)
       opts.title      accessible name of the tree (default « Algorithme »)
       opts.mode       'overview' (default) | 'walk'
     Tree.mount(host) → hydrates every [data-tree] inside host (connectors, walk mode); returns a cleanup function.
   Learner-paced only: nothing advances by itself (docs/STYLE-PEDAGO.md §4). */
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
  function plain(s) { var d = document.createElement('div'); d.innerHTML = s; return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
  var URGENT = /\b(urgent|urgence|urgente|sans délai|tout de suite|immédiat\w*|stat|emergency|urgently|immediate\w*|right away|without delay|same[- ]day|même jour)\b/i;
  function leaf(v) { if (v && typeof v === 'object') return { t: v.t || v.text || '', urgent: !!v.urgent }; return { t: String(v || ''), urgent: URGENT.test(String(v || '')) }; }
  function reduced() { if (document.documentElement.classList.contains('no-motion')) return true; try { return W.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }

  function render(algo, opts) {
    opts = opts || {};
    algo = (algo || []).filter(function (a) { return a && a.q; });
    if (!algo.length) return '';
    var fmt = opts.fmt || function (s) { return (W.U && U.md) ? U.md(s) : esc(s); };
    var id = 'tree-' + (++uid), yes = TT('yes', 'Oui', 'Yes'), no = TT('no', 'Non', 'No'), urgentTag = TT('urgent', 'Urgent', 'Urgent'), then = TT('then', 'puis', 'then');
    var mode = opts.mode === 'walk' ? 'walk' : 'overview';
    var h = '<div class="tree" data-tree data-mode="' + mode + '" id="' + id + '">';
    h += '<div class="tree-bar"><div class="seg tree-seg" role="group" aria-label="' + esc(TT('modes', 'Affichage de l’algorithme', 'Algorithm view')) + '">' +
      '<button type="button" data-tmode="overview" aria-pressed="' + (mode === 'overview') + '">' + esc(TT('overview', 'Vue d’ensemble', 'Overview')) + '</button>' +
      '<button type="button" data-tmode="walk" aria-pressed="' + (mode === 'walk') + '">' + esc(TT('walk', 'Pas à pas', 'Step by step')) + '</button></div>' +
      '<button type="button" class="btn sm tree-restart" data-trestart>' + esc(TT('restart', 'Recommencer', 'Start again')) + '</button></div>';
    h += '<p class="tree-hint small muted">' + esc(TT('hint', 'Réponds Oui ou Non à chaque question : le chemin choisi s’allume.', 'Answer Yes or No to each question: your path lights up.')) + '</p>';
    h += '<div class="tree-box"><div class="tree-flow" aria-hidden="false"><svg class="tree-wires" aria-hidden="true" focusable="false"></svg>';
    algo.forEach(function (a, i) {
      var ly = leaf(a.yes), ln = leaf(a.no), cont = (a.cont === 'yes' || a.cont === 'no') && i < algo.length - 1 ? a.cont : '';
      var qtxt = plain(fmt(a.q));
      h += '<section class="tree-step" data-i="' + i + '" data-cont="' + cont + '"' + (i === algo.length - 1 ? ' data-last="1"' : '') + '>' +
        '<div class="tree-q"><span class="tree-qn" aria-hidden="true">' + (i + 1) + '</span><p class="tree-qt" aria-hidden="true">' + fmt(a.q) + '</p>' +
        '<div class="tree-yn" role="group" aria-label="' + esc(TT('q', 'Question', 'Question') + ' ' + (i + 1) + ' : ' + qtxt) + '">' +
        '<button type="button" class="btn sm" data-tyn="yes">' + esc(yes) + '</button><button type="button" class="btn sm" data-tyn="no">' + esc(no) + '</button></div></div>' +
        '<div class="tree-br">' + [['yes', ly, yes], ['no', ln, no]].map(function (x) {
          var ends = cont && cont !== x[0], goes = cont === x[0];
          return '<div class="tree-leaf ' + x[0] + (x[1].urgent ? ' urgent' : '') + (ends ? ' end' : '') + (goes ? ' cont' : '') + '" data-leaf="' + x[0] + '" aria-hidden="true">' +
            '<span class="tree-edge">' + esc(x[2]) + '</span>' + (x[1].urgent ? '<span class="tree-tag">' + esc(urgentTag) + '</span>' : '') +
            '<p>' + fmt(x[1].t) + '</p>' + (goes ? '<span class="tree-go">↓ ' + esc(TT('next', 'question suivante', 'next question')) + '</span>' : '') + '</div>';
        }).join('') + '</div>' +
        (cont ? '' : (i < algo.length - 1 ? '<span class="tree-then" aria-hidden="true">' + esc(then) + '</span>' : '')) +
        '<div class="tree-stepnav"><button type="button" class="btn sm" data-tnext>' + esc(TT('nextq', 'Question suivante', 'Next question')) + ' ↓</button></div>' +
        '</section>';
    });
    h += '<div class="tree-end" tabindex="-1"><b>' + esc(TT('end', 'Fin du parcours', 'End of path')) + '</b><span class="small" data-tendtxt></span><button type="button" class="btn sm" data-trestart>' + esc(TT('restart', 'Recommencer', 'Start again')) + '</button></div>';
    h += '</div></div>';
    // screen-reader version with the same logic
    h += '<div class="tree-sr"><p>' + esc(opts.title || TT('title', 'Algorithme', 'Algorithm')) + '</p><ol>' + algo.map(function (a, i) {
      var ly = leaf(a.yes), ln = leaf(a.no), cont = (a.cont === 'yes' || a.cont === 'no') && i < algo.length - 1 ? a.cont : '';
      var item = function (lab, l, k) { return '<li>' + esc(lab) + ' : ' + (l.urgent ? esc(urgentTag) + ' — ' : '') + fmt(l.t) + (cont === k ? ' ' + esc(TT('srnext', '(puis question suivante)', '(then next question)')) : cont ? ' ' + esc(TT('srend', '(fin)', '(end)')) : '') + '</li>'; };
      return '<li>' + fmt(a.q) + '<ul>' + item(yes, ly, 'yes') + item(no, ln, 'no') + '</ul></li>';
    }).join('') + '</ol></div>';
    h += '<div class="tree-live tree-sr" aria-live="polite"></div></div>';
    return h;
  }

  /* ---------- connectors ---------- */
  function rel(el, base) { var r = el.getBoundingClientRect(); return { l: r.left - base.left, t: r.top - base.top, r: r.right - base.left, b: r.bottom - base.top, w: r.width, h: r.height, cx: r.left - base.left + r.width / 2 }; }
  function shown(el) { return el && el.offsetParent !== null && getComputedStyle(el).visibility !== 'hidden'; }
  function curve(x1, y1, x2, y2) { var m = (y1 + y2) / 2; return 'M' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' C' + x1.toFixed(1) + ' ' + m.toFixed(1) + ' ' + x2.toFixed(1) + ' ' + m.toFixed(1) + ' ' + x2.toFixed(1) + ' ' + y2.toFixed(1); }
  function elbow(x1, y1, x2, y2) { var r = Math.min(10, Math.abs(y2 - y1) / 2); return 'M' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' V' + (y2 - r).toFixed(1) + ' Q' + x1.toFixed(1) + ' ' + y2.toFixed(1) + ' ' + (x1 + r).toFixed(1) + ' ' + y2.toFixed(1) + ' H' + x2.toFixed(1); }
  function wires(tree, animateChoice) {
    var flow = tree.querySelector('.tree-flow'), svg = flow.querySelector('.tree-wires'); if (!flow || !svg) return;
    var base = flow.getBoundingClientRect(), Wd = flow.scrollWidth, Ht = flow.scrollHeight;
    svg.setAttribute('viewBox', '0 0 ' + Wd + ' ' + Ht); svg.setAttribute('width', Wd); svg.setAttribute('height', Ht);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var marks = [], steps = Array.prototype.slice.call(flow.querySelectorAll('.tree-step')).filter(shown);
    function path(d, cls) { var p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); p.setAttribute('class', 'tree-wire ' + (cls || '')); svg.appendChild(p); return p; }
    steps.forEach(function (st, k) {
      var q = rel(st.querySelector('.tree-q'), base), leaves = Array.prototype.slice.call(st.querySelectorAll('.tree-leaf')).filter(shown);
      var sameRow = leaves.length === 2 && Math.abs(leaves[0].getBoundingClientRect().top - leaves[1].getBoundingClientRect().top) < 4;
      var spine = q.l + 18;
      leaves.forEach(function (lf) {
        var L = rel(lf, base), cls = lf.getAttribute('data-leaf') + (lf.classList.contains('on') ? ' on' : '') + (lf.classList.contains('dim') ? ' dim' : '');
        var d = sameRow ? curve(q.cx + (lf.getAttribute('data-leaf') === 'yes' ? -14 : 14), q.b, L.cx, L.t) : elbow(spine, q.b, L.l, L.t + 16);
        path(d, cls); if (lf.classList.contains('on')) marks.push({ d: d, anim: animateChoice && lf.classList.contains('just') });
      });
      var next = steps[k + 1]; if (!next) return;
      var nq = rel(next.querySelector('.tree-q'), base), cont = st.getAttribute('data-cont'), d2;
      var contLeaf = cont ? st.querySelector('.tree-leaf[data-leaf="' + cont + '"]') : null;
      if (sameRow) { var C = contLeaf && shown(contLeaf) ? rel(contLeaf, base) : null; d2 = C ? curve(C.cx, C.b, nq.cx, nq.t) : 'M' + q.cx.toFixed(1) + ' ' + q.b.toFixed(1) + ' V' + nq.t.toFixed(1); }
      else d2 = 'M' + spine.toFixed(1) + ' ' + q.b.toFixed(1) + ' V' + nq.t.toFixed(1);   // narrow: one spine on the left, leaves branch off it
      var onPath = contLeaf ? contLeaf.classList.contains('on') : st.classList.contains('passed');
      path(d2, 'cont' + (onPath ? ' on' : '') + (cont ? '' : ' then'));
      if (onPath) marks.push({ d: d2, anim: false });
    });
    // chosen path in the brand marker style (src/motion.js) when available, else the .on stroke highlight
    if (W.Motion && typeof Motion.marker === 'function') marks.forEach(function (m) { Motion.marker(svg, m.d, 'tree-mark', 0, .55, m.anim && !reduced()); });
  }

  /* ---------- interaction ---------- */
  function hydrate(tree) {
    if (tree.getAttribute('data-ready')) return null;
    tree.setAttribute('data-ready', '1');
    var steps = Array.prototype.slice.call(tree.querySelectorAll('.tree-step')), live = tree.querySelector('.tree-live'), endBox = tree.querySelector('.tree-end');
    var st = { cur: 0, done: false };
    function leafText(step, k) { var l = step.querySelector('.tree-leaf[data-leaf="' + k + '"] p'); return l ? l.textContent.trim() : ''; }
    function reset() {
      st = { cur: 0, done: false };
      steps.forEach(function (s, i) {
        s.classList.remove('passed', 'current', 'future', 'answered', 'await');
        s.querySelectorAll('.tree-leaf').forEach(function (l) { l.classList.remove('on', 'dim', 'just'); });
        s.querySelectorAll('[data-tyn]').forEach(function (b) { b.disabled = false; b.setAttribute('aria-pressed', 'false'); });
      });
      endBox.classList.remove('show'); tree.querySelector('[data-tendtxt]').textContent = ''; live.textContent = '';
      layout();
    }
    function layout(animate) {
      var walk = tree.getAttribute('data-mode') === 'walk';
      steps.forEach(function (s, i) {
        s.classList.toggle('future', walk && i > st.cur);
        s.classList.toggle('current', walk && i === st.cur && !st.done);
      });
      wires(tree, animate);
    }
    function choose(step, k) {
      var i = +step.getAttribute('data-i'); if (i !== st.cur || st.done || step.classList.contains('answered')) return;
      step.classList.add('answered');
      step.querySelectorAll('.tree-leaf').forEach(function (l) { var on = l.getAttribute('data-leaf') === k; l.classList.toggle('on', on); l.classList.toggle('just', on); l.classList.toggle('dim', !on); });
      step.querySelectorAll('[data-tyn]').forEach(function (b) { b.disabled = true; b.setAttribute('aria-pressed', String(b.getAttribute('data-tyn') === k)); });
      var cont = step.getAttribute('data-cont'), last = step.getAttribute('data-last') === '1', txt = leafText(step, k);
      live.textContent = (k === 'yes' ? TT('yes', 'Oui', 'Yes') : TT('no', 'Non', 'No')) + ' : ' + txt;
      var focusEl = null;
      if (!last && cont === k) { step.classList.add('passed'); st.cur = i + 1; focusEl = steps[st.cur].querySelector('[data-tyn="yes"]'); }
      else if (!last && !cont) { step.classList.add('await'); focusEl = step.querySelector('[data-tnext]'); }
      else { st.done = true; endBox.classList.add('show'); tree.querySelector('[data-tendtxt]').textContent = txt; focusEl = endBox.querySelector('[data-trestart]'); }
      layout(true);
      steps.forEach(function (s) { s.querySelectorAll('.tree-leaf').forEach(function (l) { l.classList.remove('just'); }); });
      if (focusEl) focusEl.focus({ preventScroll: false });
    }
    function onClick(ev) {
      var t = ev.target, b;
      if ((b = t.closest('[data-tmode]'))) { tree.setAttribute('data-mode', b.getAttribute('data-tmode')); tree.querySelectorAll('[data-tmode]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); reset(); if (b.getAttribute('data-tmode') === 'walk') { var f = steps[0].querySelector('[data-tyn="yes"]'); if (f) f.focus({ preventScroll: true }); } return; }
      if ((b = t.closest('[data-trestart]'))) { reset(); var f0 = steps[0].querySelector('[data-tyn="yes"]'); if (f0) f0.focus({ preventScroll: true }); return; }
      if ((b = t.closest('[data-tnext]'))) { var s = b.closest('.tree-step'); s.classList.remove('await'); s.classList.add('passed'); st.cur = +s.getAttribute('data-i') + 1; layout(); var f1 = steps[st.cur] && steps[st.cur].querySelector('[data-tyn="yes"]'); if (f1) f1.focus({ preventScroll: false }); return; }
      if ((b = t.closest('[data-tyn]'))) choose(b.closest('.tree-step'), b.getAttribute('data-tyn'));
    }
    tree.addEventListener('click', onClick);
    var ro = W.ResizeObserver ? new ResizeObserver(function () { W.requestAnimationFrame(function () { wires(tree, false); }); }) : null;
    if (ro) ro.observe(tree.querySelector('.tree-flow')); else W.addEventListener('resize', onResize);
    function onResize() { wires(tree, false); }
    reset();
    // fonts can change the layout after the first paint
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { wires(tree, false); });
    return function () { tree.removeEventListener('click', onClick); if (ro) ro.disconnect(); else W.removeEventListener('resize', onResize); tree.removeAttribute('data-ready'); };
  }
  function mount(host) {
    var cleans = Array.prototype.slice.call((host || document).querySelectorAll('[data-tree]')).map(hydrate).filter(Boolean);
    return function () { cleans.forEach(function (c) { try { c(); } catch (e) { } }); };
  }
  return { render: render, mount: mount, keys: KEYS };
})();
window.Tree = Tree;
