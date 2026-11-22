/* B · « Carnet d'externe » — warm paper, felt marker, highlighter, tape and stickers. Playful. */
K.dirs.B = function (S) {
  var EZ = K.EZ, R = K.rng(5);
  S.style.background = '#f4eedf';
  // notebook ruling + margin + paper grain (feTurbulence, original)
  K.div(S, 'inset:0;background-image:repeating-linear-gradient(0deg,rgba(31,44,255,.10) 0 2px,transparent 2px 64px),repeating-linear-gradient(90deg,rgba(31,44,255,.05) 0 2px,transparent 2px 64px)');
  K.div(S, 'left:104px;top:0;width:3px;height:1920px;background:rgba(180,35,35,.35)');
  K.div(S, 'inset:0;mix-blend-mode:multiply;opacity:.55', '<svg width="1080" height="1920"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" seed="4"/><feColorMatrix values="0 0 0 0 .55  0 0 0 0 .48  0 0 0 0 .36  0 0 0 .55 0"/></filter><rect width="1080" height="1920" filter="url(#grain)"/></svg>');
  K.div(S, 'width:0;height:0', '<svg width="0" height="0"><defs><filter id="rough"><feTurbulence type="fractalNoise" baseFrequency=".04" numOctaves="2" seed="2"/><feDisplacementMap in="SourceGraphic" scale="3"/></filter></defs></svg>');

  function hand(txt, seed) { // letters jitter a little, like handwriting
    var r = K.rng(seed || 1), out = '';
    for (var i = 0; i < txt.length; i++) { var c = txt[i]; out += c === ' ' ? ' ' : '<span style="display:inline-block;transform:translateY(' + ((r() - .5) * 6).toFixed(1) + 'px) rotate(' + ((r() - .5) * 7).toFixed(1) + 'deg)">' + c + '</span>'; }
    return out;
  }
  function highlight(parent, x, y, w, h, t0, dur, rot) { // fluo highlighter stroke (multiply), swiped left → right
    var e = K.div(parent, 'left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;height:' + h + 'px;mix-blend-mode:multiply;background:#d8ff3a;border-radius:' + (h * .45) + 'px ' + (h * .3) + 'px ' + (h * .5) + 'px ' + (h * .25) + 'px;transform-origin:0 50%');
    K.track(e, [[0, { transform: 'rotate(' + (rot || -2) + 'deg) scaleX(0)' }], [t0, { transform: 'rotate(' + (rot || -2) + 'deg) scaleX(0)' }, EZ.out], [t0 + (dur || .35), { transform: 'rotate(' + (rot || -2) + 'deg) scaleX(1)' }]]);
    return e;
  }
  function writeOn(el, t0, dur) { K.track(el, [[0, { clipPath: 'inset(-20% 100% -20% 0%)' }], [t0, { clipPath: 'inset(-20% 100% -20% 0%)' }, 'cubic-bezier(.4,.1,.6,.9)'], [t0 + dur, { clipPath: 'inset(-20% -5% -20% 0%)' }]]); }
  function arrow(svg, d, head, t0, col, w) {
    var p = K.svgEl('path', { d: d, stroke: col || '#1a24d6', 'stroke-width': w || 7, fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', filter: 'url(#rough)' }, svg);
    var h = K.svgEl('path', { d: head, stroke: col || '#1a24d6', 'stroke-width': w || 7, fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, svg);
    K.draw(p, t0, .35, EZ.out); K.draw(h, t0 + .3, .15, EZ.out); return [p, h];
  }

  /* ---- hook ---- */
  var hook = K.div(S, 'left:140px;top:210px;width:820px;color:#0a0f40;font-size:146px;transform:rotate(-3deg)', '');
  var l1 = K.div(hook, 'left:0;top:0;white-space:nowrap', '<div class="dsp">' + hand('Tu vois', 3) + '</div>');
  highlight(hook, 150, 168, 400, 96, .75, .3, -2);
  var l2 = K.div(hook, 'left:0;top:140px;white-space:nowrap', '<div class="dsp">' + hand('le signe ?', 9) + '</div>');
  writeOn(l1, .1, .45); writeOn(l2, .45, .5);
  K.track(hook, [[0, { opacity: 1 }], [1.95, { opacity: 1 }], [2.1, { opacity: 0 }]]);

  // the "polaroid" with the app's figure, taped to the page
  var card = K.div(S, 'left:70px;top:650px;width:940px;height:600px;background:#fff;border-radius:6px;box-shadow:0 22px 40px rgba(10,15,64,.18),0 2px 0 rgba(10,15,64,.08)');
  var fig = K.figure(card, 'left:20px;top:22px;width:900px');
  K.div(card, 'left:28px;bottom:18px;font:700 26px var(--mono);color:#5b6188;letter-spacing:.04em', 'SCHÉMA · ANGLE IRIDOCORNÉEN');
  K.div(card, 'left:-36px;top:-26px;width:190px;height:58px;background:rgba(201,206,255,.75);transform:rotate(-24deg)');
  K.div(card, 'right:-30px;top:-22px;width:190px;height:58px;background:rgba(201,206,255,.75);transform:rotate(18deg)');
  K.track(card, [[0, { opacity: 0, transform: 'translateY(-90px) rotate(-9deg) scale(1.06)' }, EZ.pop], [.45, { opacity: 1, transform: 'translateY(0px) rotate(-2.5deg) scale(1)' }],
    [3.25, { opacity: 1, transform: 'translateY(0px) rotate(-2.5deg) scale(1)' }, EZ.in], [3.6, { opacity: 1, transform: 'translateX(-1300px) rotate(-16deg) scale(1)' }]]);

  // hint, handwritten in cobalt felt pen
  var hint = K.div(S, 'left:520px;top:1330px;width:440px;color:#1a24d6;font:600 58px/1.05 var(--display);letter-spacing:-.02em;transform:rotate(3deg)', hand('indice :', 4) + '<br>' + hand('regarde', 6) + '<br>' + hand('l’angle', 8));
  writeOn(hint, 1.0, .45);
  var as = K.svgBox(S, 'left:0;top:0;width:1080px;height:1920px', '0 0 1080 1920');
  var hintArrow = arrow(as, 'M520,1400 C420,1420 300,1380 220,1240', 'M222,1290 L218,1236 L268,1256', 1.3);
  K.track(as, [[0, { opacity: 1 }], [1.95, { opacity: 1 }], [2.05, { opacity: 0 }]]);
  K.track(hint, [[0, { opacity: 1 }], [1.95, { opacity: 1 }], [2.05, { opacity: 0 }]]);

  /* ---- reveal ---- */
  var A = K.ANG;
  K.loop(fig.ov, A.L[0], A.L[1], 26, 24, 11, 2.0, .6, { tilt: -.1, w: 3, hw: 4.6 });
  var st = K.div(S, 'left:96px;top:1180px;font-size:70px;z-index:5', '<span class="sticker">angle fermé !</span>'); st.style.transformOrigin = '20% 50%';
  K.pop(st, 2.35, -8, .55, 3.25);
  var as2 = K.svgBox(S, 'left:0;top:0;width:1080px;height:1920px', '0 0 1080 1920');
  arrow(as2, 'M640,560 C560,600 420,640 330,880', 'M318,826 L328,884 L372,846', 2.4);
  K.track(as2, [[0, { opacity: 1 }], [3.2, { opacity: 1 }], [3.35, { opacity: 0 }]]);
  var lab = K.div(S, 'left:650px;top:470px;color:#1a24d6;font:600 64px var(--display);letter-spacing:-.02em;transform:rotate(-4deg)', hand('iris bombé', 12));
  writeOn(lab, 2.3, .35); K.track(lab, [[0, { opacity: 1 }], [3.2, { opacity: 1 }], [3.35, { opacity: 0 }]]);

  var dx = K.div(S, 'left:140px;top:180px;width:820px;color:#0a0f40;font-size:104px;transform:rotate(-2deg)', '');
  var d1 = K.div(dx, 'left:0;top:0;white-space:nowrap', '<div class="dsp">' + hand('Crise de', 21) + '</div>');
  highlight(dx, -10, 96, 520, 92, 2.85, .3, -1);
  var d2 = K.div(dx, 'left:0;top:100px;white-space:nowrap', '<div class="dsp">' + hand('fermeture', 22) + '</div>');
  var d3 = K.div(dx, 'left:0;top:200px;white-space:nowrap', '<div class="dsp">' + hand('de l’angle', 23) + '</div>');
  // the dx block appears only after the hook is gone
  writeOn(d1, 2.5, .25); writeOn(d2, 2.65, .25); writeOn(d3, 2.8, .25);
  K.track(dx, [[0, { opacity: 1 }], [3.25, { opacity: 1 }], [3.45, { opacity: 0 }]]);

  /* ---- end card: stickers slapped on the page ---- */
  var s1 = K.div(S, 'left:190px;top:600px;width:700px;height:260px;background:#1f2cff;border:6px solid #0a0f40;border-radius:44px;box-shadow:10px 10px 0 #0a0f40');
  K.mark(s1, 'left:40px;top:44px;width:180px;height:170px', {});
  K.wordmark(s1, 'left:240px;top:72px;width:400px', '#ffffff');
  K.pop(s1, 3.6, -4, .5);
  var s2 = K.div(S, 'left:260px;top:950px;font-size:72px', '<span class="sticker" style="background:#fff">Décembre 2026</span>'); K.pop(s2, 3.85, 3, .5);
  var s3 = K.div(S, 'left:300px;top:1160px;font-size:96px', '<span class="sticker">Abonne-toi</span>'); K.pop(s3, 4.1, -6, .5);
  var es = K.svgBox(S, 'left:0;top:0;width:1080px;height:1920px', '0 0 1080 1920');
  var lp = K.svgEl('path', { d: Motion.loop(560, 1228, 330, 118, 77, { tilt: -.08, over: .4 }), stroke: '#1a24d6', 'stroke-width': 9, fill: 'none', 'stroke-linecap': 'round', filter: 'url(#rough)' }, es);
  K.draw(lp, 4.4, .55, EZ.mk);
  // doodles
  [[180, 1480], [880, 560], [860, 1420]].forEach(function (p, i) {
    var d = 'M' + p[0] + ',' + (p[1] - 30) + ' L' + p[0] + ',' + (p[1] + 30) + ' M' + (p[0] - 30) + ',' + p[1] + ' L' + (p[0] + 30) + ',' + p[1] + ' M' + (p[0] - 20) + ',' + (p[1] - 20) + ' L' + (p[0] + 20) + ',' + (p[1] + 20) + ' M' + (p[0] + 20) + ',' + (p[1] - 20) + ' L' + (p[0] - 20) + ',' + (p[1] + 20);
    var q = K.svgEl('path', { d: d, stroke: i === 1 ? '#0a0f40' : '#1a24d6', 'stroke-width': 6, 'stroke-linecap': 'round', fill: 'none' }, es); K.draw(q, 4.3 + i * .12, .25, EZ.out);
  });
};
