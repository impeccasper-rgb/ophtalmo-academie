/* C · « Kinetic type » — huge condensed type, hard cuts on a 120 BPM grid (every 0.5 s), solid cobalt / fluo / ink blocks. */
K.dirs.C = function (S) {
  var EZ = K.EZ;
  S.style.background = '#1f2cff';
  var COB = '#1f2cff', FLU = '#d8ff3a', INK = '#0a0f40', PAP = '#fbfbf8';
  // a frame = full-bleed colour block, visible [t0, t1)
  function frame(bg, t0, t1) { var f = K.div(S, 'inset:0;background:' + bg); K.cut(f, t0, t1); return f; }
  // slam: type lands big and settles (scale 1.22 → 1 in 0.14 s), with a 2-frame skew
  function slam(el, t0) { K.track(el, [[t0, { transform: 'scale(1.22) skewX(-6deg)' }, EZ.out], [t0 + .14, { transform: 'scale(1) skewX(0deg)' }]]); }
  // type(..., fit): the widest line is scaled to fill the 888-px text column (60 → 948, clear of the right safe zone)
  function type(parent, css, html, t0, fit) {
    var e = K.div(parent, 'left:72px;width:888px;font-family:var(--display);font-weight:800;font-stretch:75%;letter-spacing:-.035em;line-height:.86;transform-origin:0% 50%;' + css, '<span style="display:inline-block;white-space:nowrap">' + html + '</span>');
    if (fit) {
      var sp = e.firstChild, fs = parseFloat(e.style.fontSize); fs = fs * 850 / sp.offsetWidth; e.style.fontSize = Math.floor(fs) + 'px';
      if (fit !== 'keep') { if (e.offsetHeight > 1180) e.style.fontSize = Math.floor(fs * 1180 / e.offsetHeight) + 'px'; e.style.top = Math.round(140 + (1540 - e.offsetHeight) / 2) + 'px'; }
    }
    slam(e, t0); return e;
  }

  // 0.0 TU VOIS (cobalt)
  var f0 = frame(COB, 0, .5);
  type(f0, 'top:420px;color:#fff;font-size:420px', 'TU<br>VOIS', 0, true);
  // 0.5 LE SIGNE ? (fluo)
  var f1 = frame(FLU, .5, 1.0);
  type(f1, 'top:430px;color:' + INK + ';font-size:330px', 'LE<br>SIGNE<span style="color:' + COB + '">?</span>', .5, true);
  // 1.0–2.0 the figure on paper, a big countdown in a cobalt block, ticking on the beat
  var f2 = frame(PAP, 1.0, 2.5);
  var fig = K.figure(f2, 'left:40px;top:500px;width:1500px');
  K.track(fig, [[1.0, { transform: 'scale(1)' }, EZ.lin], [2.0, { transform: 'scale(1.04)' }], [2.0, { transform: 'scale(1.18) translate(120px,40px)' }, EZ.out], [2.5, { transform: 'scale(1.2) translate(120px,40px)' }]]);
  fig.style.transformOrigin = '17% 70%';
  var q = type(f2, 'top:170px;color:' + INK + ';font-size:200px', 'TU&nbsp;VOIS<br>LE&nbsp;SIGNE&nbsp;?', 1.0);
  K.cut(q, 1.0, 2.0);
  [['2', 1.0, 1.5], ['1', 1.5, 2.0]].forEach(function (n) {
    var b = K.div(f2, 'left:72px;top:1260px;width:300px;height:400px;background:' + COB + ';color:' + FLU + ';font:800 380px/400px var(--display);font-stretch:75%;text-align:center;letter-spacing:-.04em', n[0]);
    K.cut(b, n[1], n[2]); slam(b, n[1]);
  });
  // 2.0 snap: loop (fast) + IRIS BOMBÉ block
  var A = K.ANG;
  K.loop(fig.ov, A.L[0], A.L[1], 22, 20, 11, 2.0, .16, { tilt: -.1, w: 2.6, hw: 4, ez: EZ.out });
  var blk = K.div(f2, 'left:72px;top:170px;padding:26px 34px 30px;background:' + INK + ';color:' + FLU + ';font:800 190px/.86 var(--display);font-stretch:75%;letter-spacing:-.035em;transform-origin:0% 50%', 'IRIS<br>BOMBÉ');
  K.cut(blk, 2.0, 2.5); slam(blk, 2.0);
  // 2.5 ANGLE FERMÉ (ink)
  var f3 = frame(INK, 2.5, 3.0);
  type(f3, 'top:460px;color:#fff;font-size:330px', 'ANGLE<br><span style="color:' + FLU + '">FERMÉ</span>', 2.5, true);
  // 3.0 CRISE DE FERMETURE DE L'ANGLE (cobalt), word by word on the off-beats
  var f4 = frame(COB, 3.0, 3.5);
  var w1 = type(f4, 'top:330px;color:#fff;font-size:250px', 'CRISE DE', 3.0);
  var w2 = type(f4, 'top:560px;color:' + FLU + ';font-size:250px', 'FERMETURE', 3.12); K.cut(w2, 3.12);
  var w3 = type(f4, 'top:790px;color:#fff;font-size:250px', 'DE L’ANGLE', 3.25); K.cut(w3, 3.25);
  // 3.5 end card (fluo), building on the beat: 3.5 mark + OCELLE, 4.0 date, 4.5 ABONNE-TOI
  var f5 = frame(FLU, 3.5, null);
  var mk = K.mark(f5, 'left:72px;top:330px;width:250px;height:250px', { square: true }); slam(mk, 3.5); mk.style.transformOrigin = '0 50%';
  var oc = type(f5, 'top:620px;color:' + INK + ';font-size:300px', 'OCELLE', 3.5, 'keep');
  var dt = type(f5, 'top:930px;color:' + INK + ';font-size:150px', 'DÉCEMBRE 2026', 4.0, 'keep'); K.cut(dt, 4.0); dt.style.top = (oc.offsetTop + oc.offsetHeight + 24) + 'px';
  var cta = K.div(f5, 'left:72px;top:1250px;padding:24px 40px 34px;background:' + COB + ';color:#fff;font:800 150px/.9 var(--display);font-stretch:75%;letter-spacing:-.03em;box-shadow:12px 12px 0 ' + INK + ';transform-origin:0 50%', 'ABONNE-TOI');
  K.cut(cta, 4.5); slam(cta, 4.5); cta.style.top = (dt.offsetTop + dt.offsetHeight + 70) + 'px';
};
