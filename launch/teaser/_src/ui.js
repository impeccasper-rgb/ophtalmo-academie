/* R5 · « Touche le signe » — the real Voir card (built site, Playwright), photo slot fed our own CRAO schematic.
   Frames from ui_capture.py (animations slowed ×5 via CDP, stamped in animation time), composed in A's scene. */
var UI = (function () {
  var U = {}, EZ = K.EZ;
  U.reel = async function (S) {
    K.T = 18 + H.END; H.scene(S);
    var lang = H.lang, base = 'ui-frames/' + lang + '/', idx = await (await fetch(base + 'index.json')).json();
    var PX = 200, PY = 404, SC = 680 / 432, PW = 680, PH = 1290, IH = 1511;
    var segT = { idle: 0, miss: 4.5, hit: 8, name: 12 }, list = [];
    idx.segs.forEach(function (sg) { sg.frames.forEach(function (f) { list.push({ t: segT[sg.name] + f.t, f: f.f }); }); });
    list.sort(function (a, b) { return a.t - b.t; });
    // phone frame with cobalt glow
    var ph = K.div(S, 'left:' + (PX - 14) + 'px;top:' + (PY - 14) + 'px;width:' + (PW + 28) + 'px;height:' + (PH + 28) + 'px;border-radius:60px;background:#0b1038;border:3px solid rgba(90,104,255,.95);box-shadow:0 0 50px rgba(74,87,255,.5),0 30px 80px rgba(0,0,0,.6)');
    var scr = K.div(S, 'left:' + PX + 'px;top:' + PY + 'px;width:' + PW + 'px;height:' + PH + 'px;border-radius:46px 46px 30px 30px;overflow:hidden;background:#060a2a');
    var dim = document.createElement('img'), live = document.createElement('img');
    [dim, live].forEach(function (im) { im.style.cssText = 'position:absolute;left:0;top:0;width:' + PW + 'px;height:' + IH + 'px'; scr.appendChild(im); });
    dim.src = base + 's/' + list[0].f; await dim.decode(); dim.style.filter = 'brightness(.25) saturate(.5)';
    var BK = [[0, 160], [.2, 160], [1.9, 920]];
    K.track(live, BK.map(function (k) { var l = k[1] - PX - 34, r = PW - (k[1] - PX + 34); return [k[0], { clipPath: 'inset(0px ' + Math.max(-10, r).toFixed(0) + 'px 0px ' + Math.max(-10, l).toFixed(0) + 'px)' }, EZ.slow]; }).concat([[1.999, { clipPath: 'inset(0px -10px 0px 900px)' }], [2, { clipPath: 'inset(0px 0px 0px 0px)' }]]));
    H.beam(S, BK, 380, 1340, 0, 2.05);
    H.flash(S, 2);
    K.track(ph, [[0, { transform: 'scale(1)' }, EZ.lin], [2, { transform: 'scale(1.03)' }], [2, { transform: 'scale(1.06)' }, EZ.out], [2.6, { transform: 'scale(1)' }]]);
    K.track(scr, [[0, { transform: 'scale(1)' }, EZ.lin], [2, { transform: 'scale(1.03)' }], [2, { transform: 'scale(1.06)' }, EZ.out], [2.6, { transform: 'scale(1)' }]]);
    var cur = null;
    K.hooks.push(async function (t) {
      var f = list[0].f; for (var i = 0; i < list.length; i++) { if (list[i].t <= t + 1e-6) f = list[i].f; else break; }
      if (f !== cur) { cur = f; live.src = base + 's/' + f; await live.decode(); }
    });
    // finger taps (CSS px of the capture → stage px)
    function P(c) { return [PX + c[0] * SC, PY + c[1] * SC]; }
    [['miss', 4.5], ['hit', 8], ['name', 12]].forEach(function (tp) { var c = idx.taps[tp[0]]; if (!c) return; var p = P(c);
      var dot = K.div(S, 'left:' + (p[0] - 34) + 'px;top:' + (p[1] - 34) + 'px;width:68px;height:68px;border-radius:50%;background:rgba(255,255,255,.55);border:4px solid #fff;box-shadow:0 0 0 4px rgba(10,15,64,.5);z-index:50');
      K.track(dot, [[0, { opacity: 0, transform: 'scale(1.5)' }], [tp[1] - .35, { opacity: 0, transform: 'scale(1.5)' }, EZ.out], [tp[1] - .05, { opacity: 1, transform: 'scale(1)' }], [tp[1] + .05, { opacity: 1, transform: 'scale(.85)' }], [tp[1] + .35, { opacity: 0, transform: 'scale(1)' }]]);
      K.tap(S, p[0], p[1], tp[1], '#ffffff'); });
    var eb = H.t({ fr: 'Vraie interface · schéma', en: 'Real interface · diagram' }); H.eyebrow(S, eb, .05, 17.8); H.reg('eyebrow', eb, .35, 17.8, 'label');
    var caps = [[0, 4, { fr: 'Touche le signe<br>qui <span style="color:var(--fluo)" class="gl">compte</span>.', en: 'Tap the sign<br>that <span style="color:var(--fluo)" class="gl">matters</span>.' }],
      [4, 7.5, { fr: 'Raté :<br>« pas ici ».', en: 'Miss:<br>“not here”.' }],
      [7.5, 11.5, { fr: 'Touché : le marqueur<br><span style="color:var(--fluo)" class="gl">entoure</span> le signe.', en: 'Hit: the marker<br><span style="color:var(--fluo)" class="gl">circles</span> the sign.' }],
      [11.5, 15, { fr: 'Puis tu le<br><span style="color:var(--fluo)" class="gl">nommes</span>.', en: 'Then you<br><span style="color:var(--fluo)" class="gl">name</span> it.' }],
      [15, 18, { fr: 'Observe. Réponds.<br><span style="color:var(--fluo)" class="gl">Révèle.</span>', en: 'Observe. Answer.<br><span style="color:var(--fluo)" class="gl">Reveal.</span>' }]];
    caps.forEach(function (c, i) { var tx = H.t(c[2]), e = K.div(S, 'left:72px;top:186px;width:876px;color:#fff;font-size:80px', '<div class="dsp">' + tx + '</div>'); K.cut(e, c[0], c[1]); K.track(e, [[c[0], { transform: 'translateY(22px)' }, EZ.out], [c[0] + .3, { transform: 'translateY(0px)' }]]); H.reg('caption-' + (i + 1), tx, c[0] + .3, c[1]); });
    H.endCard(S, 18);
    return { cuts: [0, 2, 4, 4.5, 7.5, 8, 11.5, 12, 15, 18, K.T] };
  };
  return U;
})();
