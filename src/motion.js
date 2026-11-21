/* ===== Motion — Ocelle v2 « Fluorescéine »: marker loops, stickers, feedback, page wipe, rewards =====
   Purely decorative overlays: the DOM the other modules render is never re-laid out (absolute SVG / stickers),
   photos are never filtered or redrawn (CC BY-NC-ND), and everything animated uses transform, opacity or stroke only.
   With prefers-reduced-motion or html.no-motion the annotations still appear, fully drawn and without animation
   (CSS gates every animation); the page wipe, bursts and count-ups are skipped. */
var Motion = (function () {
  var W = window, D = document, NS = 'http://www.w3.org/2000/svg';
  function reduced() {
    if (D.documentElement.classList.contains('no-motion')) return true;
    try { return W.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; }
  }
  function lang() { return (W.I18N && I18N.lang === 'en') ? 'en' : 'fr'; }
  var TXT = { ok: { fr: ['Bien vu !', 'Dans le mille !', 'Exact !'], en: ['Nice catch!', 'Spot on!', 'Nailed it!'] } };
  function rng(seed) { var s = (seed >>> 0) || 1; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  function hash(str) { var h = 2166136261; str = String(str || ''); for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

  /* hand-drawn marker loop: an irregular ellipse drawn clockwise that overshoots its own start
     (same generator as the brand mark, brand/BRAND.md §6) → SVG path string */
  function loop(cx, cy, rx, ry, seed, o) {
    o = o || {}; var R = rng(seed), tilt = o.tilt != null ? o.tilt : (R() - .5) * .5, over = o.over != null ? o.over : .32 + R() * .18;
    var a0 = -Math.PI * (.62 + R() * .2), n = 26, p1 = R() * 6.3, p2 = R() * 6.3, k1 = .035 + R() * .03, k2 = .02 + R() * .02, drift = o.drift != null ? o.drift : .1 + R() * .05, pts = [];
    for (var i = 0; i <= n; i++) {
      var u = i / n, a = a0 + u * (Math.PI * 2 + over), r = 1 + k1 * Math.sin(2 * a + p1) + k2 * Math.sin(3 * a + p2) - drift * (u - .5);
      var x = rx * r * Math.cos(a), y = ry * r * Math.sin(a);
      pts.push([cx + x * Math.cos(tilt) - y * Math.sin(tilt), cy + x * Math.sin(tilt) + y * Math.cos(tilt)]);
    }
    var f = function (v) { return v.toFixed(1); }, d = 'M' + f(pts[0][0]) + ' ' + f(pts[0][1]);
    for (var j = 0; j < pts.length - 1; j++) {
      var q0 = pts[j - 1] || pts[j], q1 = pts[j], q2 = pts[j + 1], q3 = pts[j + 2] || q2;
      d += 'C' + f(q1[0] + (q2[0] - q0[0]) / 6) + ' ' + f(q1[1] + (q2[1] - q0[1]) / 6) + ' ' + f(q2[0] - (q3[0] - q1[0]) / 6) + ' ' + f(q2[1] - (q3[1] - q1[1]) / 6) + ' ' + f(q2[0]) + ' ' + f(q2[1]);
    }
    return d;
  }
  function el(tag, attrs) { var e = D.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); return e; }
  /* one marker stroke = dark halo + coloured stroke, drawn together (stroke-dashoffset) */
  function marker(svg, d, cls, delay, dur, animate) {
    ['halo', ''].forEach(function (h) {
      var a = { d: d, 'class': 'mo-path ' + (animate ? 'draw ' : '') + (cls || '') + (h ? ' halo' : '') };
      if (cls !== 'minor' || h) a.pathLength = '1';
      var p = el('path', a); p.style.setProperty('--mo-delay', delay.toFixed(2) + 's'); if (dur) p.style.setProperty('--mo-dur', dur + 's');
      svg.appendChild(p);
    });
  }
  function overlay(host, cls) { var b = host.getBoundingClientRect(); if (!b.width || !b.height) return null; return { svg: el('svg', { 'class': cls || 'mo-marks', viewBox: '0 0 ' + b.width.toFixed(1) + ' ' + b.height.toFixed(1), 'aria-hidden': 'true', focusable: 'false' }), w: b.width, h: b.height }; }

  /* Investigations / image cases: a loop around each hotspot once the answer is revealed */
  function markHots(hots, animate) {
    var o = overlay(hots); if (!o) return;
    var k = 0, all = hots.querySelectorAll('.inv-hot'), dec = hots.querySelectorAll('.inv-hot.dec');
    // the marker circles the decisive sign(s) only; the other landmarks keep their quiet rings
    var targets = dec.length ? dec : Array.prototype.filter.call(all, function (h) { return !h.classList.contains('minor'); }).slice(0, 1);
    Array.prototype.forEach.call(all, function (h) { h.classList.toggle('mo-loop', Array.prototype.indexOf.call(targets, h) >= 0); });
    Array.prototype.forEach.call(targets, function (h, i) {
      var x = parseFloat(h.style.left) / 100 * o.w, y = parseFloat(h.style.top) / 100 * o.h, r = (parseFloat(h.style.getPropertyValue('--r')) || 8) / 100 * o.w;
      if (isNaN(x) || isNaN(y)) return;
      var rx = Math.max(r * 1.8, 28), ry = Math.max(r * 1.5, 22);
      marker(o.svg, loop(x, y, rx, ry, hash((h.textContent || '') + '|' + i)), '', .12 + k * .25, .7, animate); k++;
    });
    var old = hots.querySelector(':scope > .mo-marks'); if (old) old.remove();
    hots.insertBefore(o.svg, hots.firstChild); hots.classList.add('mo-marked');
  }
  /* home hero: loop around the sign on the photo card (data-loop="cx,cy,rx,ry" in % of the image box) */
  function markHero(box, animate) {
    var o = overlay(box); if (!o) return;
    var v = (box.getAttribute('data-loop') || '50,50,20,20').split(',').map(Number);
    marker(o.svg, loop(v[0] / 100 * o.w, v[1] / 100 * o.h, v[2] / 100 * o.w, v[3] / 100 * o.h, 21, { tilt: -.12, over: .45 }), '', 1.05, .8, animate);
    var old = box.querySelector(':scope > .mo-marks'); if (old) old.remove();
    box.appendChild(o.svg); box.classList.add('mo-marked');
  }
  /* correct answer: fluorescein sticker on the verdict box */
  function sticker(fb) {
    if (fb.querySelector(':scope > .mo-sticker')) return;
    var list = TXT.ok[lang()], s = D.createElement('span');
    s.className = 'mo-sticker'; s.setAttribute('aria-hidden', 'true'); s.textContent = list[hash(fb.textContent) % list.length];
    s.style.setProperty('--rot', (hash(fb.textContent + 'r') % 2 ? 5 : -6) + 'deg'); s.style.setProperty('--mo-delay', '.12s');
    fb.appendChild(s);
  }
  /* wrong answer: scribbled underline under the chosen option (the CSS adds a small shake) */
  function scribble(opt) {
    if (opt.querySelector(':scope > .mo-scribble')) return;
    var R = rng(hash(opt.textContent)), d = 'M2 7', x = 2;
    while (x < 96) { x += 6 + R() * 5; d += ' L' + Math.min(x, 98).toFixed(1) + ' ' + (R() < .5 ? 2 + R() * 3 : 8 + R() * 3).toFixed(1); }
    var svg = el('svg', { 'class': 'mo-scribble', viewBox: '0 0 100 12', preserveAspectRatio: 'none', 'aria-hidden': 'true', focusable: 'false' });
    svg.appendChild(el('path', { d: d, pathLength: '1', 'vector-effect': 'non-scaling-stroke' }));
    opt.appendChild(svg);
  }
  /* rewards: end of a series / streak — count-up + burst (skipped under reduced motion) */
  function countUp(node) {
    var tn = null, w = D.createTreeWalker(node, NodeFilter.SHOW_TEXT, null);
    while (w.nextNode()) if (/\d/.test(w.currentNode.nodeValue)) { tn = w.currentNode; break; }
    if (!tn) return;
    var m = tn.nodeValue.match(/\d+/), n = +m[0]; if (!n || n > 999) return;
    var pre = tn.nodeValue.slice(0, m.index), post = tn.nodeValue.slice(m.index + m[0].length), t0 = null, dur = Math.min(900, 240 + n * 60);
    function step(ts) { if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - k, 3); tn.nodeValue = pre + Math.round(n * e) + post; if (k < 1) W.requestAnimationFrame(step); }
    tn.nodeValue = pre + '0' + post; W.requestAnimationFrame(step);
  }
  function burst(host, at) {
    var b = D.createElement('span'), hb = host.getBoundingClientRect(), ab = (at || host).getBoundingClientRect(), R = rng(hash(host.textContent) + 7);
    b.className = 'mo-burst'; b.setAttribute('aria-hidden', 'true');
    b.style.left = (ab.left - hb.left + Math.min(ab.width, 120) / 2).toFixed(0) + 'px'; b.style.top = (ab.top - hb.top + ab.height / 2).toFixed(0) + 'px';
    for (var i = 0; i < 14; i++) {
      var a = (i / 14) * Math.PI * 2 + R() * .4, dist = 46 + R() * 46, s = D.createElement('i');
      s.style.setProperty('--dx', (Math.cos(a) * dist).toFixed(0) + 'px'); s.style.setProperty('--dy', (Math.sin(a) * dist * .8).toFixed(0) + 'px');
      s.style.setProperty('--r', ((R() - .5) * 540).toFixed(0) + 'deg'); s.style.setProperty('--d', (R() * .12).toFixed(2) + 's');
      b.appendChild(s);
    }
    host.appendChild(b); W.setTimeout(function () { b.remove(); }, 1400);
  }
  function reward(card) {
    if (reduced()) return;
    var num = card.querySelector('.today-n, .acuity-big'); if (!num) return;
    countUp(num); burst(card, num);
  }

  /* page change: cobalt wipe with a fluorescein trailing edge, over the freshly rendered view */
  var lastRoute = null;
  function routeKey() { return (location.hash || '#accueil').replace(/^#/, '').split('?')[0] || 'accueil'; }
  function wipe() {
    var k = routeKey(); if (lastRoute === null) { lastRoute = k; return; }
    if (k === lastRoute) return; lastRoute = k;
    if (reduced()) return;
    var w = D.createElement('div'); w.className = 'mo-wipe'; w.setAttribute('aria-hidden', 'true');
    D.body.appendChild(w); W.setTimeout(function () { w.remove(); }, 700);
  }

  /* scan after every DOM change (batched per frame); guards keep each overlay single */
  var queued = false;
  function scan() {
    queued = false;
    var anim = !reduced();
    Array.prototype.forEach.call(D.querySelectorAll('.inv-media.revealed .inv-hots:not(.mo-marked)'), function (h) { markHots(h, anim); });
    Array.prototype.forEach.call(D.querySelectorAll('.hero-img[data-loop]:not(.mo-marked)'), function (b) { markHero(b, anim); });
    Array.prototype.forEach.call(D.querySelectorAll('.feedback.ok:not([data-mo])'), function (f) { f.setAttribute('data-mo', '1'); sticker(f); });
    Array.prototype.forEach.call(D.querySelectorAll('.opt.wrong:not([data-mo])'), function (o) { o.setAttribute('data-mo', '1'); scribble(o); });
    Array.prototype.forEach.call(D.querySelectorAll('.daily-end:not([data-mo]), .run-end:not([data-mo])'), function (c) { c.setAttribute('data-mo', '1'); reward(c); });
  }
  function queue() { if (!queued) { queued = true; W.requestAnimationFrame(scan); } }
  var rt = null;
  function relayout() { // keep loops on their signs after a resize, without replaying the drawing
    W.clearTimeout(rt); rt = W.setTimeout(function () {
      Array.prototype.forEach.call(D.querySelectorAll('.inv-hots.mo-marked'), function (h) { markHots(h, false); });
      Array.prototype.forEach.call(D.querySelectorAll('.hero-img.mo-marked'), function (b) { markHero(b, false); });
    }, 160);
  }
  function init() {
    if (!W.MutationObserver) return;
    new MutationObserver(queue).observe(D.body, { childList: true, subtree: true });
    W.addEventListener('hashchange', wipe);
    W.addEventListener('resize', relayout, { passive: true });
    wipe(); queue();
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', init); else init();
  return { loop: loop, hash: hash, reduced: reduced, scan: queue, marker: marker };
})();
