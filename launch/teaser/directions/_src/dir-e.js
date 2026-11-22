/* E · « Quiz show » — game-show energy: sunburst, timer bar, score, answer buttons popping, confetti on the right answer. */
K.dirs.E = function (S) {
  var EZ = K.EZ, INK = '#0a0f40', FLU = '#d8ff3a', COB = '#1f2cff';
  S.style.background = COB;
  // rotating sunburst
  var sun = K.div(S, 'left:-900px;top:-500px;width:2880px;height:2880px;background:repeating-conic-gradient(from 0deg at 50% 50%,#1f2cff 0deg 9deg,#1a24d6 9deg 18deg)');
  K.track(sun, [[0, { transform: 'rotate(0deg)' }, EZ.lin], [5, { transform: 'rotate(40deg)' }]]);
  K.div(S, 'inset:0;background:radial-gradient(70% 45% at 50% 42%,rgba(31,44,255,0) 0%,rgba(10,15,64,.45) 100%)');

  // top bar: question pill + score
  var bar = K.div(S, 'left:60px;top:140px;width:900px;height:90px');
  K.div(bar, 'left:0;top:0;padding:14px 26px;background:' + INK + ';color:' + FLU + ';border-radius:18px;font:700 36px var(--mono);letter-spacing:.06em', 'QUESTION 1/1');
  var sc = K.div(bar, 'right:0;top:0;padding:14px 26px;background:#fff;color:' + INK + ';border:5px solid ' + INK + ';border-radius:18px;box-shadow:6px 6px 0 ' + INK + ';font:700 36px var(--mono);letter-spacing:.06em;width:330px;height:76px', '');
  K.div(sc, 'left:22px;top:12px', 'SCORE');
  ['0000', '0025', '0050', '0075', '0100'].forEach(function (v, i, a) {
    var n = K.div(sc, 'right:22px;top:12px;color:' + (i === a.length - 1 ? COB : INK), v);
    var t0 = 2.1 + i * .08; K.cut(n, i ? t0 : 0, i < a.length - 1 ? t0 + .08 : null);
  });
  K.track(bar, [[0, { opacity: 0, transform: 'translateY(-40px)' }, EZ.pop], [.3, { opacity: 1, transform: 'translateY(0px)' }], [3.3, { opacity: 1, transform: 'translateY(0px)' }], [3.45, { opacity: 0, transform: 'translateY(-40px)' }]]);
  K.track(sc, [[2.1, { transform: 'scale(1)' }, EZ.pop], [2.25, { transform: 'scale(1.14)' }], [2.5, { transform: 'scale(1)' }]]);

  // timer bar
  var tb = K.div(S, 'left:60px;top:262px;width:900px;height:34px;background:rgba(255,255,255,.22);border:4px solid ' + INK + ';border-radius:20px;overflow:hidden');
  var tf = K.div(tb, 'left:0;top:0;width:100%;height:100%;background:' + FLU + ';transform-origin:0 50%');
  K.track(tf, [[.3, { transform: 'scaleX(1)', background: FLU }, EZ.lin], [1.4, { transform: 'scaleX(.35)', background: FLU }], [1.4, { background: '#ff5a4f' }], [1.9, { transform: 'scaleX(0)', background: '#ff5a4f' }]]);
  K.track(tb, [[0, { opacity: 0 }], [.25, { opacity: 1 }], [3.3, { opacity: 1 }], [3.45, { opacity: 0 }]]);

  var q = K.div(S, 'left:60px;top:330px;width:900px;color:#fff;font-size:108px;text-shadow:6px 6px 0 ' + INK, '<div class="dsp">Tu vois le <span style="color:' + FLU + '">signe</span>&nbsp;?</div>');
  K.track(q, [[.1, { opacity: 0, transform: 'scale(.6)' }, EZ.pop], [.45, { opacity: 1, transform: 'scale(1)' }], [3.3, { opacity: 1, transform: 'scale(1)' }], [3.45, { opacity: 0, transform: 'scale(.9)' }]]);
  q.style.transformOrigin = '0 50%';

  // the figure on a game card
  var card = K.div(S, 'left:70px;top:560px;width:880px;height:500px;background:#fff;border:6px solid ' + INK + ';border-radius:34px;box-shadow:12px 12px 0 ' + INK + ';overflow:hidden');
  var fig = K.figure(card, 'left:10px;top:4px;width:850px');
  K.pop(card, .2, -2, .55, 3.3);
  var A = K.ANG;
  K.loop(fig.ov, A.L[0], A.L[1], 24, 22, 11, 2.05, .4, { tilt: -.1, w: 2.6, hw: 4 });
  K.loop(fig.ov, A.R[0], A.R[1], 24, 22, 29, 2.15, .4, { tilt: .1, w: 2.6, hw: 4 });

  // answers, 2 × 2
  var ans = [['A', 'Angle ouvert'], ['B', 'Iris bombé, angle fermé'], ['C', 'Cristallin luxé'], ['D', 'Hypopion']];
  var pos = [[60, 1110], [510, 1110], [60, 1370], [510, 1370]], btnB;
  ans.forEach(function (a, i) {
    var b = K.div(S, 'left:' + pos[i][0] + 'px;top:' + pos[i][1] + 'px;width:420px;height:220px;background:#fff;border:6px solid ' + INK + ';border-radius:28px;box-shadow:9px 9px 0 ' + INK + ';padding:24px 26px;color:' + INK + ';font:700 44px/1.08 var(--body)',
      '<span style="display:inline-grid;place-items:center;width:66px;height:66px;border-radius:16px;background:' + COB + ';color:#fff;font:800 42px var(--display);transform:rotate(-5deg);margin-bottom:14px">' + a[0] + '</span><br>' + a[1]);
    K.pop(b, .55 + i * .15, i % 2 ? 2 : -2, .45);
    if (a[0] === 'B') btnB = b;
    else K.track(b, [[0, { filter: 'saturate(1)' }], [2.0, { filter: 'brightness(1)' }], [2.15, { filter: 'brightness(.62)' }], [3.3, { filter: 'brightness(.62)' }], [3.45, { filter: 'brightness(.62) opacity(0)' }]]);
  });
  // B lights up fluo (overlay on the button), sticker, confetti, tap
  var hi = K.div(btnB, 'inset:-6px;border-radius:28px;background:' + FLU + ';border:6px solid ' + INK + ';padding:24px 26px;color:' + INK + ';font:800 44px/1.08 var(--body)', '<span style="display:inline-grid;place-items:center;width:66px;height:66px;border-radius:16px;background:' + INK + ';color:' + FLU + ';font:800 42px var(--display);transform:rotate(-5deg);margin-bottom:14px">B</span><br>Iris bombé, angle fermé');
  K.cut(hi, 1.98);
  K.tap(S, 760, 1250, 1.85, '#fff');
  var ok = K.div(S, 'left:600px;top:1060px;font-size:58px;z-index:30', '<span class="sticker">Bien vu !</span>'); K.pop(ok, 2.12, 6, .5, 2.55);
  K.burst(S, 720, 1220, 2.02, 34, 9, 340);
  K.track(btnB, [[.85, { filter: 'opacity(1)' }], [3.3, { filter: 'opacity(1)' }], [3.45, { filter: 'opacity(0)' }]]);

  // banner: the diagnosis slides across
  var ban = K.div(S, 'left:-40px;top:965px;width:1160px;padding:22px 100px 28px;background:' + INK + ';color:#fff;font:800 70px/1 var(--display);letter-spacing:-.03em;z-index:25;box-shadow:0 10px 0 rgba(10,15,64,.35)', 'Crise de <span style="color:' + FLU + '">fermeture de l’angle</span>');
  K.track(ban, [[0, { transform: 'translateX(1200px) rotate(-4deg)' }], [2.6, { transform: 'translateX(1200px) rotate(-4deg)' }, EZ.out], [2.9, { transform: 'translateX(0px) rotate(-4deg)' }], [3.3, { transform: 'translateX(0px) rotate(-4deg)' }, EZ.in], [3.45, { transform: 'translateX(-1300px) rotate(-4deg)' }]]);

  /* ---- end card: arcade "next level" ---- */
  var lvl = K.div(S, 'left:0;top:380px;width:1080px;text-align:center;color:' + FLU + ';font:700 40px var(--mono);letter-spacing:.2em', 'NIVEAU SUIVANT'); K.pop(lvl, 3.5, 0, .4);
  var mk = K.mark(S, 'left:390px;top:480px;width:300px;height:300px', { square: true, bg: INK, t0: 3.55, dur: .6 });
  K.pop(mk, 3.5, -6, .45);
  var wm = K.wordmark(S, 'left:240px;top:860px;width:600px', '#ffffff'); K.pop(wm, 3.75, 0, .45);
  var dt = K.div(S, 'left:0;top:1060px;width:1080px;text-align:center;color:#fff;font:800 92px var(--display);letter-spacing:-.03em;text-shadow:6px 6px 0 ' + INK, 'Décembre 2026'); K.pop(dt, 3.95, -2, .45);
  var cta = K.div(S, 'left:0;top:1250px;width:1080px;text-align:center', '<span style="display:inline-block;padding:26px 60px 32px;border-radius:30px;background:' + FLU + ';color:' + INK + ';border:7px solid ' + INK + ';box-shadow:12px 12px 0 ' + INK + ';font:800 92px var(--display);letter-spacing:-.03em">Abonne-toi</span>');
  K.pop(cta, 4.2, 3, .45);
  K.tap(S, 700, 1340, 4.6, '#fff');
  K.burst(S, 540, 1330, 4.25, 26, 3, 300);
};
