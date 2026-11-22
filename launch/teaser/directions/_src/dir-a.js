/* A · « Lampe à fente » — cinematic, dark. A cobalt slit beam sweeps a drawn eye; snap to the optical section; the sign glows. */
K.dirs.A = function (S) {
  var EZ = K.EZ;
  S.style.background = 'radial-gradient(120% 80% at 50% 52%, #10184a 0%, #060a2a 62%, #03051a 100%)';
  S.style.setProperty('--surface', '#0e1440'); S.style.setProperty('--sunk', '#151c52'); S.style.setProperty('--paper', '#060a2a');
  S.style.setProperty('--ink', '#eef0ff'); S.style.setProperty('--ink-2', '#7d84c2'); S.style.setProperty('--ink-3', '#8e94c4'); S.style.setProperty('--line', '#2a3170');
  S.style.setProperty('--cobalt', '#4a57ff'); S.style.setProperty('--cobalt-wash', '#1a2266'); S.style.setProperty('--edge', '#000'); S.style.setProperty('--t-label', '#c9ceff');
  K.div(S, 'width:0;height:0', '<svg width="0" height="0"><defs>' +
    '<filter id="glowA" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
    '<filter id="glowM" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>');

  /* ---- hook: drawn eye in the dark, swept by the slit beam ---- */
  function eye(lit) {
    var sc = lit ? '#aab2ff' : '#121a48', ed = lit ? '#e6e9ff' : '#222a66', ir = lit ? '#5d69ff' : '#1a2266', st = lit ? '#c9ceff' : '#28307a', pu = lit ? '#060a2a' : '#02040f';
    var s = '<svg viewBox="0 0 900 560"><path d="M30,280 Q450,-60 870,280 Q450,620 30,280 Z" fill="' + sc + '" stroke="' + ed + '" stroke-width="5"/>' +
      '<circle cx="450" cy="280" r="150" fill="' + ir + '"/>';
    for (var a = 0; a < 360; a += 12) { var r = a * Math.PI / 180; s += '<line x1="' + (450 + Math.cos(r) * 70).toFixed(1) + '" y1="' + (280 + Math.sin(r) * 70).toFixed(1) + '" x2="' + (450 + Math.cos(r) * 144).toFixed(1) + '" y2="' + (280 + Math.sin(r) * 144).toFixed(1) + '" stroke="' + st + '" stroke-width="3" opacity=".55"/>'; }
    s += '<circle cx="450" cy="280" r="150" fill="none" stroke="' + ed + '" stroke-width="4"/><circle cx="450" cy="280" r="66" fill="' + pu + '"/>';
    if (lit) s += '<path d="M380,150 Q450,128 520,150" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>';
    return s + '</svg>';
  }
  var EX = 90, EY = 760;
  var dim = K.div(S, 'left:' + EX + 'px;top:' + EY + 'px;width:900px;height:560px', eye(false));
  var lit = K.div(S, 'left:' + EX + 'px;top:' + EY + 'px;width:900px;height:560px', eye(true));
  var beam = K.div(S, 'left:0;top:520px;width:90px;height:1040px;mix-blend-mode:screen;filter:blur(5px);background:linear-gradient(90deg,transparent,rgba(74,87,255,.55) 32%,#dfe3ff 50%,rgba(74,87,255,.55) 68%,transparent)');
  var halo = K.div(S, 'left:0;top:420px;width:520px;height:1240px;mix-blend-mode:screen;background:radial-gradient(closest-side,rgba(74,87,255,.34),rgba(74,87,255,.1) 60%,transparent)');
  var BX = [[0, 150], [.2, 150], [1.85, 690]];
  K.track(beam, BX.map(function (k) { return [k[0], { transform: 'translateX(' + (k[1] - 45) + 'px)' }, EZ.slow]; }));
  K.track(halo, BX.map(function (k) { return [k[0], { transform: 'translateX(' + (k[1] - 260) + 'px)' }, EZ.slow]; }));
  K.track(lit, BX.map(function (k) { var l = k[1] - EX - 30, r = 900 - (k[1] - EX + 30); return [k[0], { clipPath: 'inset(0px ' + r + 'px 0px ' + l + 'px)' }, EZ.slow]; }));
  [dim, lit, beam, halo].forEach(function (e) { K.cut(e, 0, 2.0); });
  K.track(dim, [[0, { transform: 'scale(1)' }, EZ.lin], [2, { transform: 'scale(1.06)' }]]);

  var hook = K.div(S, 'left:72px;top:200px;width:880px;color:#fff;font-size:150px', '<div class="dsp">Tu vois<br>le <span style="color:var(--fluo)">signe</span>&nbsp;?</div>');
  K.rise(hook, .15, .6, 50, 1.85, .15);

  /* ---- snap: the optical section (app figure, dark tokens), the sign glows ---- */
  var FX = 40, FY = 660, FW = 1000, k = FW / 360;
  var fig = K.figure(S, 'left:' + FX + 'px;top:' + FY + 'px;width:' + FW + 'px;transform-origin:14% 60%');
  K.track(fig, [[0, { opacity: 0, transform: 'scale(1.18)' }], [2.0, { opacity: 0, transform: 'scale(1.18)' }], [2.0, { opacity: 1, transform: 'scale(1.18)' }, EZ.out], [2.7, { opacity: 1, transform: 'scale(1)' }], [3.3, { opacity: 1, transform: 'scale(1)' }], [3.5, { opacity: 0, transform: 'scale(.98)' }]]);
  var A = K.ANG;
  K.loop(fig.ov, A.L[0], A.L[1], 24, 22, 11, 2.08, .5, { filter: 'url(#glowA)', tilt: -.1 });
  K.loop(fig.ov, A.R[0], A.R[1], 24, 22, 29, 2.22, .5, { filter: 'url(#glowA)', tilt: .12 });
  var flash = K.div(S, 'left:0;top:0;width:1080px;height:1920px;background:#4a57ff;mix-blend-mode:screen');
  K.track(flash, [[0, { opacity: 0 }], [2.0, { opacity: 0 }], [2.0, { opacity: .7 }, EZ.out], [2.35, { opacity: 0 }]]);

  // leader + labels
  var ld = K.svgBox(S, 'left:0;top:0;width:1080px;height:1920px', '0 0 1080 1920');
  var ix = FX + A.IRIS[0] * k, iy = FY + A.IRIS[1] * k;
  var l1 = K.svgEl('path', { d: 'M' + ix + ',' + iy + ' L' + (ix + 70) + ',' + (iy - 190) + ' L' + (ix + 150) + ',' + (iy - 190), stroke: '#c9ceff', 'stroke-width': 3, fill: 'none' }, ld);
  K.draw(l1, 2.45, .3, EZ.out); K.fade(ld, 2.4, .05, 3.3, .2);
  var lab = K.div(S, 'left:' + (ix + 165) + 'px;top:' + (iy - 222) + 'px;color:#eef0ff;font:600 44px var(--body)', 'iris bombé');
  K.rise(lab, 2.55, .35, 16, 3.3, .2);
  var st = K.div(S, 'left:72px;top:' + (FY + A.L[1] * k + 150) + 'px;font-size:64px', '<span class="sticker" style="border-color:#000;box-shadow:6px 6px 0 #000">angle fermé</span>');
  st.style.transformOrigin = '30% 50%'; K.pop(st, 2.55, -6, .55, 3.3);

  var dx = K.div(S, 'left:72px;top:190px;width:880px;color:#fff;font-size:118px', '<div class="dsp">Crise de<br><span style="color:var(--fluo)">fermeture</span><br>de l’angle</div>');
  K.rise(dx, 2.75, .5, 40, 3.3, .2);
  var chain = K.div(S, 'left:72px;top:1360px;width:880px;color:#9da5ff;font:700 34px/1.35 var(--mono)', 'bloc pupillaire → iris bombé<br>→ angle fermé → PIO ↑↑');
  K.rise(chain, 2.95, .4, 14, 3.3, .2);

  /* ---- end card: fade through black, the ocellus draws in fluorescein ---- */
  var blk = K.div(S, 'left:0;top:0;width:1080px;height:1920px;background:radial-gradient(90% 60% at 50% 45%,#0e1440,#03051a)');
  K.fade(blk, 3.3, .25);
  var sweep = K.div(S, 'left:0;top:420px;width:120px;height:1100px;mix-blend-mode:screen;filter:blur(18px);background:linear-gradient(90deg,transparent,rgba(74,87,255,.4),transparent)');
  K.track(sweep, [[0, { opacity: 0, transform: 'translateX(-200px)' }], [3.5, { opacity: 0, transform: 'translateX(-200px)' }], [3.55, { opacity: 1, transform: 'translateX(-200px)' }, EZ.slow], [4.7, { opacity: 1, transform: 'translateX(1200px)' }]]);
  K.mark(S, 'left:330px;top:560px;width:420px;height:395px', { t0: 3.55, dur: .8, sw: 70, filter: 'url(#glowM)' });
  var wm = K.wordmark(S, 'left:270px;top:1030px;width:540px;color:#fff', '#ffffff'); K.rise(wm, 4.1, .5, 30);
  var dt = K.div(S, 'left:0;top:1230px;width:1080px;text-align:center;color:#c9ceff;font:700 60px var(--display);letter-spacing:-.02em', '· Décembre 2026 ·'); K.rise(dt, 4.25, .45, 24);
  var cta = K.div(S, 'left:0;top:1360px;width:1080px;text-align:center;font-size:76px', '<span class="sticker" style="border-color:#000;box-shadow:7px 7px 0 #000">Abonne-toi</span>'); K.pop(cta, 4.45, -5);
};
