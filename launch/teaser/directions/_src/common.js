/* Ocelle teaser harness — shared kit. Every animation is one paused Web Animation spanning the whole timeline,
   so seek(t) renders any frame deterministically. Figures come from a snapshot copy of src/figures-mech.js (Mech.kit.ant),
   marker loops from a snapshot of src/motion.js (Motion.loop). Original SVG only, no photos. */
var K = (function () {
  var D = document, NS = 'http://www.w3.org/2000/svg';
  var K = { T: 5, dirs: {} };
  K.EZ = { out: 'cubic-bezier(.2,.8,.2,1)', pop: 'cubic-bezier(.34,1.56,.64,1)', mk: 'cubic-bezier(.65,.05,.36,1)', io: 'cubic-bezier(.7,0,.3,1)', lin: 'linear', slow: 'cubic-bezier(.45,0,.2,1)', in: 'cubic-bezier(.6,0,.9,.4)' };
  K.stage = function () { return D.getElementById('stage'); };
  K.rng = function (seed) { var s = (seed >>> 0) || 1; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; };

  /* track(el, [[t, {css}, easing], ...]): one animation over [0, T]; values carry forward, jumps allowed (same t twice) */
  K.track = function (el, keys) {
    var T = K.T; keys = keys.slice().sort(function (a, b) { return a[0] - b[0]; });
    var names = {}; keys.forEach(function (k) { Object.keys(k[1]).forEach(function (n) { names[n] = 1; }); });
    var first = {}; Object.keys(names).forEach(function (n) { for (var i = 0; i < keys.length; i++) if (n in keys[i][1]) { first[n] = keys[i][1][n]; break; } });
    var cur = Object.assign({}, first), fr = [];
    keys.forEach(function (k) { cur = Object.assign({}, cur, k[1]); fr.push(Object.assign({}, cur, { offset: Math.max(0, Math.min(1, k[0] / T)), easing: k[2] || 'linear' })); });
    if (fr[0].offset > 0) fr.unshift(Object.assign({}, fr[0], { offset: 0, easing: 'linear' }));
    if (fr[fr.length - 1].offset < 1) fr.push(Object.assign({}, fr[fr.length - 1], { offset: 1 }));
    var a = el.animate(fr, { duration: T * 1000, fill: 'both' }); a.pause(); return a;
  };
  /* visible only in [t0, t1) — a hard cut */
  K.cut = function (el, t0, t1) { var k = [[0, { opacity: 0 }], [t0, { opacity: 0 }], [t0, { opacity: 1 }]]; if (t1 != null) k.push([t1, { opacity: 1 }], [t1, { opacity: 0 }]); return K.track(el, k); };
  K.fade = function (el, t0, d, t1, d1) { var k = [[t0, { opacity: 0 }], [t0 + d, { opacity: 1 }, ]]; if (t1 != null) k.push([t1, { opacity: 1 }], [t1 + (d1 || d), { opacity: 0 }]); return K.track(el, k); };
  /* stroke draw: pathLength 1, dash offset 1 → 0 */
  K.draw = function (p, t0, dur, ez, t1, d1) {
    p.setAttribute('pathLength', '1'); p.style.strokeDasharray = '1 2';
    var k = [[t0, { strokeDashoffset: 1 }, ez || K.EZ.mk], [t0 + dur, { strokeDashoffset: 0 }]];
    if (t1 != null) k.push([t1, { strokeDashoffset: 0 }], [t1 + (d1 || .01), { strokeDashoffset: 0 }]);
    return K.track(p, k);
  };
  /* brand sticker pop: scale .3 → 1.12 → 1 with a rotation settle (styles.css @keyframes mo-sticker) */
  K.pop = function (el, t0, rot, dur, t1) {
    rot = rot == null ? -6 : rot; dur = dur || .55;
    var k = [[0, { opacity: 0, transform: 'scale(.3) rotate(' + (rot - 28) + 'deg)' }], [t0, { opacity: 0, transform: 'scale(.3) rotate(' + (rot - 28) + 'deg)' }, 'cubic-bezier(.2,.7,.3,1)'],
      [t0 + dur * .6, { opacity: 1, transform: 'scale(1.12) rotate(' + (rot + 4) + 'deg)' }, K.EZ.out], [t0 + dur, { opacity: 1, transform: 'scale(1) rotate(' + rot + 'deg)' }]];
    if (t1 != null) k.push([t1, { opacity: 1, transform: 'scale(1) rotate(' + rot + 'deg)' }], [t1 + .18, { opacity: 0, transform: 'scale(.8) rotate(' + rot + 'deg)' }]);
    return K.track(el, k);
  };
  K.rise = function (el, t0, dur, dy, t1, d1) {
    dy = dy == null ? 40 : dy; dur = dur || .5;
    var k = [[t0, { opacity: 0, transform: 'translateY(' + dy + 'px)' }, K.EZ.out], [t0 + dur, { opacity: 1, transform: 'translateY(0px)' }]];
    if (t1 != null) k.push([t1, { opacity: 1, transform: 'translateY(0px)' }, K.EZ.in], [t1 + (d1 || .3), { opacity: 0, transform: 'translateY(' + (-dy / 2) + 'px)' }]);
    return K.track(el, k);
  };

  /* DOM helpers */
  K.div = function (parent, css, html, cls) { var e = D.createElement('div'); if (cls) e.className = cls; e.style.cssText = 'position:absolute;' + (css || ''); if (html != null) e.innerHTML = html; (parent || K.stage()).appendChild(e); return e; };
  K.svgEl = function (tag, attrs, parent) { var e = D.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; };
  K.svgBox = function (parent, css, vb) { var s = K.svgEl('svg', { viewBox: vb, width: '100%', height: '100%' }); s.style.cssText = 'position:absolute;overflow:visible;' + (css || ''); (parent || K.stage()).appendChild(s); return s; };

  /* the angle-closure figure, from the app's own kit (g-crise step 3: iris bombé, closed angle) */
  K.ANG = { L: [36, 140], R: [324, 140], IRIS: [84, 111], IOP: [17, 40], VB: '0 0 360 200' };
  K.figure = function (parent, css, opts) {
    var w = K.div(parent, css, '', 'fig');
    w.innerHTML = '<svg viewBox="0 0 360 200" focusable="false" aria-hidden="true">' + Mech.kit.ant(Object.assign({ iris: 'bombe', lens: 'thick', flow: 'block', iop: .7 }, opts || {})) + '<g class="ov"></g></svg>';
    w.svg = w.querySelector('svg'); w.ov = w.querySelector('.ov'); return w;
  };
  /* marker loop (Motion.loop): halo + fluo, drawn together */
  K.loop = function (g, cx, cy, rx, ry, seed, t0, dur, o) {
    o = o || {}; var d = Motion.loop(cx, cy, rx, ry, seed, { tilt: o.tilt, over: o.over });
    var h = K.svgEl('path', { d: d, fill: 'none', stroke: o.halo || 'rgba(10,15,64,.72)', 'stroke-width': o.hw || 3.6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
    var p = K.svgEl('path', { d: d, fill: 'none', stroke: o.color || 'var(--fluo)', 'stroke-width': o.w || 2.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
    if (o.filter) p.setAttribute('filter', o.filter);
    if (o.noHalo) h.remove(); else K.draw(h, t0, dur || .7, o.ez);
    K.draw(p, t0, dur || .7, o.ez); return { p: p, h: h };
  };
  /* the brand ocellus (mark-loop.svg path) */
  K.MARK = 'M302.4 302.8C314.8 296.5 351.2 274.4 377.2 264.8C403.2 255.3 431.3 248.9 458.3 245.5C485.4 242.2 513.4 242.1 539.7 244.8C566.0 247.6 592.3 253.6 616.1 262.0C639.9 270.4 662.7 282.0 682.7 295.3C702.7 308.6 720.6 324.7 735.9 341.7C751.1 358.7 763.8 377.8 774.2 397.3C784.6 416.8 792.5 437.6 798.2 458.8C803.8 480.0 807.4 502.1 808.0 524.5C808.6 546.9 807.2 570.3 801.9 593.1C796.5 615.9 788.3 639.8 775.9 661.2C763.5 682.6 746.9 704.3 727.5 721.8C708.0 739.3 683.9 755.1 659.2 766.0C634.6 776.9 606.2 784.1 579.6 787.2C553.0 790.2 524.9 788.5 499.7 784.4C474.5 780.4 450.2 772.0 428.2 762.9C406.3 753.8 386.5 741.9 368.0 729.8C349.5 717.6 332.8 704.3 317.2 690.0C301.5 675.7 286.7 660.7 273.9 644.1C261.0 627.5 248.8 609.6 240.1 590.2C231.3 570.8 224.2 549.4 221.6 527.9C219.1 506.3 219.8 482.8 224.9 460.8C230.0 438.9 239.7 416.1 252.4 396.2C265.1 376.4 282.5 357.3 301.3 341.5C320.1 325.8 342.6 312.2 365.1 301.7C387.7 291.2 424.8 282.5 436.7 278.7';
  /* mark(parent, css, {square, t0, dur, stroke}) → animated ocellus (loop drawn, then the dot pops) */
  K.mark = function (parent, css, o) {
    o = o || {}; var s = K.svgBox(parent, css, o.square ? '0 0 1024 1024' : '150 180 724 680');
    if (o.square) K.svgEl('rect', { width: 1024, height: 1024, rx: 236, fill: o.bg || '#1F2CFF' }, s);
    var p = K.svgEl('path', { d: K.MARK, fill: 'none', stroke: o.stroke || '#D8FF3A', 'stroke-width': o.sw || 76, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, s);
    if (o.filter) p.setAttribute('filter', o.filter);
    var c = K.svgEl('circle', { cx: 530, cy: 500, r: 96, fill: o.dot || o.stroke || '#D8FF3A' }, s);
    c.style.transformBox = 'fill-box'; c.style.transformOrigin = 'center';
    if (o.t0 != null) {
      K.draw(p, o.t0, o.dur || .7, K.EZ.mk);
      K.track(c, [[o.t0 + (o.dur || .7) - .1, { opacity: 0, transform: 'scale(.4)' }, K.EZ.pop], [o.t0 + (o.dur || .7) + .25, { opacity: 1, transform: 'scale(1)' }]]);
    }
    return s;
  };
  K.wordmark = function (parent, css, fill) {
    var e = K.div(parent, css, window.WORDMARK || 'ocelle');
    var s = e.querySelector('svg'); if (s) { s.removeAttribute('width'); s.removeAttribute('height'); s.style.cssText = 'width:100%;height:auto;display:block'; s.querySelectorAll('path').forEach(function (p) { p.setAttribute('fill', fill || 'currentColor'); }); var t = s.querySelector('title'); if (t) t.remove(); }
    return e;
  };
  /* tap ring (finger) */
  K.tap = function (parent, x, y, t0, color) {
    var r = K.div(parent, 'left:' + (x - 60) + 'px;top:' + (y - 60) + 'px;width:120px;height:120px;border-radius:50%;border:8px solid ' + (color || '#fff') + ';box-shadow:0 0 0 4px rgba(10,15,64,.5);z-index:50');
    K.track(r, [[t0, { opacity: 0, transform: 'scale(1.6)' }, K.EZ.out], [t0 + .12, { opacity: 1, transform: 'scale(.8)' }, K.EZ.out], [t0 + .42, { opacity: 0, transform: 'scale(1.4)' }]]);
    return r;
  };
  /* confetti burst (motion.js reward, larger) */
  K.burst = function (parent, x, y, t0, n, seed, spread) {
    var R = K.rng(seed || 7), cols = ['#D8FF3A', '#1F2CFF', '#0A0F40', '#FFFFFF'];
    for (var i = 0; i < (n || 28); i++) {
      var a = (i / n) * Math.PI * 2 + R() * .4, dist = (spread || 260) * (.5 + R() * .7), w = i % 4 === 3 ? 14 : 22, h = i % 4 === 3 ? 34 : 22;
      var e = K.div(parent, 'left:' + (x - w / 2) + 'px;top:' + (y - h / 2) + 'px;width:' + w + 'px;height:' + h + 'px;border-radius:' + (i % 3 === 0 ? '50%' : '5px') + ';background:' + cols[i % cols.length] + ';z-index:60;' + (cols[i % cols.length] === '#FFFFFF' ? 'box-shadow:0 0 0 3px #0A0F40' : ''));
      var dx = Math.cos(a) * dist, dy = Math.sin(a) * dist * .85, rot = (R() - .5) * 720, dd = R() * .1;
      K.track(e, [[t0 + dd, { opacity: 1, transform: 'translate(0px,0px) rotate(0deg) scale(.6)' }, 'cubic-bezier(.15,.7,.3,1)'], [t0 + dd + .9, { opacity: 0, transform: 'translate(' + dx.toFixed(0) + 'px,' + (dy + 120).toFixed(0) + 'px) rotate(' + rot.toFixed(0) + 'deg) scale(1)' }]]);
      K.track(e, [[0, { visibility: 'hidden' }], [t0 + dd, { visibility: 'hidden' }], [t0 + dd, { visibility: 'visible' }]]);
    }
  };
  K.guides = function () { var s = K.stage(); K.div(s, 'left:0;top:0;width:1080px;height:120px', '', 'guide'); K.div(s, 'left:0;bottom:0;width:1080px;height:220px', '', 'guide'); K.div(s, 'right:0;top:0;width:120px;height:1920px', '', 'guide'); };
  K.build = function (d) { K.dirs[d](K.stage()); };
  K.seek = function (t) { var ms = Math.max(0, Math.min(K.T * 1000 - 1, t * 1000)); D.getAnimations().forEach(function (a) { a.currentTime = ms; }); };
  return K;
})();
