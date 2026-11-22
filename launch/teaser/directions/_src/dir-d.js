/* D · « Schéma vivant / blueprint » — precise line art that draws itself, calm, white space, one fluo accent. */
K.dirs.D = function (S) {
  var EZ = K.EZ;
  S.style.background = '#fbfbf8';
  S.style.setProperty('--surface', '#ffffff'); S.style.setProperty('--sunk', '#f5f6fb'); S.style.setProperty('--cobalt-wash', '#eef0ff');
  S.style.setProperty('--ink-2', '#dfe2fb'); S.style.setProperty('--ink-3', '#b7bce0'); S.style.setProperty('--paper', '#ffffff'); S.style.setProperty('--line', '#d5d8ee');
  K.div(S, 'width:0;height:0', '<style>.bp-lines svg > g:not(.ov) *:not(text){fill:none!important;stroke:#1f2cff!important;stroke-width:.9px!important}.bp-lines .mech-gauge text,.bp-fill text{display:none}.bp-fill svg > g:not(.ov) *{stroke:none!important}</style>');
  // faint blueprint grid, top-right and bottom only (keeps the white space)
  K.div(S, 'inset:0;background-image:radial-gradient(circle,rgba(31,44,255,.16) 1.6px,transparent 1.8px);background-size:48px 48px;-webkit-mask-image:linear-gradient(180deg,transparent 0%,#000 40%,#000 70%,transparent 100%);opacity:.6');

  var FX = 90, FY = 860, FW = 900, k = FW / 360, A = K.ANG;
  var fill = K.figure(S, 'left:' + FX + 'px;top:' + FY + 'px;width:' + FW + 'px'); fill.classList.add('bp-fill');
  K.track(fill, [[1.1, { opacity: 0 }, EZ.out], [1.9, { opacity: 1 }], [3.3, { opacity: 1 }], [3.55, { opacity: 0 }]]);
  var lines = K.figure(S, 'left:' + FX + 'px;top:' + FY + 'px;width:' + FW + 'px'); lines.classList.add('bp-lines');
  var els = Array.prototype.slice.call(lines.svg.querySelectorAll('g:not(.ov) path, g:not(.ov) ellipse, g:not(.ov) rect, g:not(.ov) line, g:not(.ov) circle'));
  els.forEach(function (e, i) { K.draw(e, .05 + i * (1.35 / els.length), .55, EZ.slow); });
  K.track(lines, [[0, { opacity: 1 }], [3.3, { opacity: 1 }], [3.55, { opacity: 0 }]]);

  var tag = K.div(S, 'left:90px;top:196px;color:#1f2cff;font:700 26px var(--mono);letter-spacing:.12em', 'FIG. 01 — ANGLE IRIDOCORNÉEN');
  K.fade(tag, .1, .5, 3.3, .25);
  var h = K.div(S, 'left:90px;top:258px;width:860px;color:#0a0f40;font-family:var(--display);font-weight:740;font-size:112px;letter-spacing:-.04em;line-height:.98', 'Tu vois<br>le signe&nbsp;?');
  K.rise(h, .3, .9, 30, 2.5, .3);

  // measuring guides on the angle, then the one fluo accent
  var ov = K.svgBox(S, 'left:0;top:0;width:1080px;height:1920px', '0 0 1080 1920');
  var ax = FX + A.L[0] * k, ay = FY + A.L[1] * k, ix = FX + A.IRIS[0] * k, iy = FY + A.IRIS[1] * k;
  var g1 = K.svgEl('path', { d: 'M' + (ax - 70) + ',' + ay + ' H' + (ax + 220), stroke: '#1f2cff', 'stroke-width': 1.5, 'stroke-dasharray': '6 8', fill: 'none' }, ov);
  var g2 = K.svgEl('path', { d: 'M' + ax + ',' + (ay - 200) + ' V' + (ay + 90), stroke: '#1f2cff', 'stroke-width': 1.5, 'stroke-dasharray': '6 8', fill: 'none' }, ov);
  K.track(g1, [[1.5, { opacity: 0 }], [1.8, { opacity: .7 }], [2.0, { opacity: .7 }], [2.4, { opacity: 0 }]]);
  K.track(g2, [[1.6, { opacity: 0 }], [1.9, { opacity: .7 }], [2.0, { opacity: .7 }], [2.4, { opacity: 0 }]]);
  K.loop(lines.ov, A.L[0], A.L[1], 24, 22, 11, 2.0, .7, { tilt: -.1, w: 2.4, hw: 3.8 });

  var l1 = K.svgEl('path', { d: 'M' + ax + ',' + (ay + 64) + ' V1440 H' + (ax + 80), stroke: '#0a0f40', 'stroke-width': 2, fill: 'none' }, ov);
  var l2 = K.svgEl('path', { d: 'M' + ix + ',' + (iy - 6) + ' V' + (FY - 60) + ' H' + (ix + 70), stroke: '#0a0f40', 'stroke-width': 2, fill: 'none' }, ov);
  K.draw(l1, 2.35, .45, EZ.slow); K.draw(l2, 2.5, .45, EZ.slow);
  K.track(ov, [[0, { opacity: 1 }], [3.3, { opacity: 1 }], [3.55, { opacity: 0 }]]);
  var t1 = K.div(S, 'left:' + (ax + 96) + 'px;top:1418px;color:#0a0f40;font:600 42px var(--body)', '<span style="font:700 28px var(--mono);color:#1f2cff;margin-right:14px">01</span>Angle fermé');
  var t2 = K.div(S, 'left:' + (ix + 86) + 'px;top:' + (FY - 84) + 'px;color:#0a0f40;font:600 42px var(--body)', '<span style="font:700 28px var(--mono);color:#1f2cff;margin-right:14px">02</span>Iris bombé');
  K.fade(t1, 2.7, .35, 3.3, .25); K.fade(t2, 2.85, .35, 3.3, .25);

  var dx = K.div(S, 'left:90px;top:258px;width:860px;color:#0a0f40;font-family:var(--display);font-weight:740;font-size:88px;letter-spacing:-.04em;line-height:1', 'Crise de fermeture<br>de l’angle');
  K.rise(dx, 2.75, .6, 24, 3.3, .25);
  var ch = K.div(S, 'left:90px;top:1560px;width:860px;color:#5b6188;font:700 24px/1.5 var(--mono);letter-spacing:0', 'Bloc pupillaire → iris bombé → angle fermé → PIO ↑');
  K.fade(ch, 2.8, .3, 3.3, .25);

  /* ---- end card: white space, the mark draws itself ---- */
  var mk = K.mark(S, 'left:430px;top:640px;width:220px;height:220px', { square: true, t0: 3.6, dur: .8 }); K.rise(mk, 3.5, .45, 16);
  var wm = K.wordmark(S, 'left:320px;top:930px;width:440px;color:#0a0f40', '#0a0f40'); K.rise(wm, 4.0, .6, 20);
  var dt = K.div(S, 'left:0;top:1100px;width:1080px;text-align:center;color:#5b6188;font:700 34px var(--mono);letter-spacing:.16em', 'DÉCEMBRE 2026'); K.rise(dt, 4.15, .5, 14);
  var cta = K.div(S, 'left:0;top:1190px;width:1080px;text-align:center', '<span style="display:inline-block;padding:18px 44px 22px;border-radius:999px;background:#1f2cff;color:#fff;font:700 46px var(--display);letter-spacing:-.01em">Abonne-toi</span>');
  K.rise(cta, 4.3, .5, 14);
};
