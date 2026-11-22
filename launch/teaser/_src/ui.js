/* R5 · « Touche le signe » — the real Voir card (built site, Playwright), photo slot fed our own CRAO schematic,
   secondary ring hidden. A virtual camera zooms into the capture so the UI text you must read is ≥ 44 px at 1080 wide;
   « pas ici » also gets a large overlay sticker. Frames from ui_capture.py (animations slowed ×5, stamped in animation time). */
var UI = (function () {
  var U = {}, EZ = K.EZ;
  U.reel = async function (S) {
    var END = 14; K.T = END + H.END; H.scene(S);
    var lang = H.lang, base = 'ui-frames/' + lang + '/', idx = await (await fetch(base + 'index.json')).json();
    var WX = 72, WY = 410, WW = 876, WH = 1250, m = idx.rects.media, op = idx.rects.opts;
    var segT = { idle: 0, miss: 3.5, hit: 6.5, name: 10 }, list = [];
    idx.segs.forEach(function (sg) { sg.frames.forEach(function (f) { list.push({ t: segT[sg.name] + f.t, f: f.f }); }); });
    list.sort(function (a, b) { return a.t - b.t; });
    // camera views: [cx, cy, scale] in CSS px of the capture
    var VH = [216, 300, WW / 432], VM = [216, m[1] + m[3] / 2, WW / 400], VN = [216, op[1] + op[3] / 2 + 60, WW / 384];
    function tf(v) { return 'translate(' + (WW / 2 - v[0] * v[2]).toFixed(1) + 'px,' + (WH / 2 - v[1] * v[2]).toFixed(1) + 'px) scale(' + v[2].toFixed(4) + ')'; }
    var CAM = [[0, VH], [3, VH], [3.4, VM], [9.5, VM], [9.9, VN], [END, VN]];
    function camAt(t) { var v = CAM[0][1]; for (var i = 0; i < CAM.length; i++) if (CAM[i][0] <= t) v = CAM[i][1]; return v; }
    var frame = K.div(S, 'left:' + (WX - 6) + 'px;top:' + (WY - 6) + 'px;width:' + (WW + 12) + 'px;height:' + (WH + 12) + 'px;border-radius:42px;border:3px solid rgba(90,104,255,.95);box-shadow:0 0 50px rgba(74,87,255,.5),0 30px 80px rgba(0,0,0,.6);background:#0b1038');
    var win = K.div(S, 'left:' + WX + 'px;top:' + WY + 'px;width:' + WW + 'px;height:' + WH + 'px;border-radius:36px;overflow:hidden;background:#060a2a');
    var cam = K.div(win, 'left:0;top:0;width:432px;height:960px;transform-origin:0 0');
    K.track(cam, CAM.map(function (c, i) { return [c[0], { transform: tf(c[1]) }, EZ.io]; }));
    var dim = document.createElement('img'), live = document.createElement('img');
    [dim, live].forEach(function (im) { im.style.cssText = 'position:absolute;left:0;top:0;width:432px;height:960px'; cam.appendChild(im); });
    dim.src = base + list[0].f; await dim.decode(); dim.style.filter = 'brightness(.62) saturate(.8)';
    var BK = [[0, 120], [.1, 120], [1.9, 960]];
    K.track(live, BK.map(function (k) { return [k[0], { opacity: 1, clipPath: 'inset(0px ' + Math.max(0, 432 - (k[1] - WX + 30) / VH[2]).toFixed(0) + 'px 0px ' + Math.max(0, (k[1] - WX - 30) / VH[2]).toFixed(0) + 'px)' }, EZ.slow]; }).concat([[1.999, { clipPath: 'inset(0px 0px 0px 400px)' }], [2, { clipPath: 'inset(0px 0px 0px 0px)' }]]));
    H.beam(S, BK, 380, 1340, 0, 2.05);
    H.flash(S, 2);
    var cur = null;
    K.hooks.push(async function (t) {
      var f = list[0].f; for (var i = 0; i < list.length; i++) { if (list[i].t <= t + 1e-6) f = list[i].f; else break; }
      if (f !== cur) { cur = f; live.src = base + f; await live.decode(); }
    });
    function P(c, t) { var v = camAt(t); return [WX + WW / 2 + (c[0] - v[0]) * v[2], WY + WH / 2 + (c[1] - v[1]) * v[2]]; }
    [['miss', 3.5], ['hit', 6.5], ['name', 10]].forEach(function (tp) { var c = idx.taps[tp[0]]; if (!c) return; var p = P(c, tp[1]);
      var dot = K.div(S, 'left:' + (p[0] - 34) + 'px;top:' + (p[1] - 34) + 'px;width:68px;height:68px;border-radius:50%;background:rgba(255,255,255,.55);border:4px solid #fff;box-shadow:0 0 0 4px rgba(10,15,64,.5);z-index:50');
      K.track(dot, [[0, { opacity: 0, transform: 'scale(1.5)' }], [tp[1] - .35, { opacity: 0, transform: 'scale(1.5)' }, EZ.out], [tp[1] - .05, { opacity: 1, transform: 'scale(1)' }], [tp[1] + .05, { opacity: 1, transform: 'scale(.85)' }], [tp[1] + .35, { opacity: 0, transform: 'scale(1)' }]]);
      K.tap(S, p[0], p[1], tp[1], '#ffffff'); });
    // large overlay on the UI's own « pas ici »
    var mp = P(idx.taps.miss, 3.6), pit = H.t({ fr: 'pas ici', en: 'not here' });
    var pi = K.div(S, 'left:' + Math.min(640, mp[0] + 40) + 'px;top:' + (mp[1] - 120) + 'px;font-size:60px;z-index:55', '<span class="sticker dk">' + pit + '</span>');
    K.pop(pi, 3.5, -6, .4, 6.5); H.reg('pas-ici', pit, 3.9, 6.5, 'label');
    // large overlays for what must be read in the naming step: the chosen sign, then the verdict
    var np = P(idx.taps.name, 10.2), nt = H.t({ fr: 'Tache rouge cerise', en: 'Cherry-red spot' });
    var nl = K.div(S, 'left:110px;top:' + (WY + 34) + 'px;font-size:56px;z-index:55', '<span class="sticker dk" style="background:#fff">' + nt + '</span>');
    K.pop(nl, 10.3, -4, .4, 13.9); H.reg('chosen-sign', nt, 10.7, 13.9, 'label');
    var vt = H.t({ fr: 'Exact !', en: 'Nailed it!' }), vy = P([0, idx.rects.verdict[1] + idx.rects.verdict[3]], 10.2)[1], vl = K.div(S, 'left:520px;top:' + (vy + 14) + 'px;font-size:64px;z-index:55', '<span class="sticker dk">' + vt + '</span>');
    K.pop(vl, 10.5, 6, .4, 13.9); H.reg('verdict', vt, 10.9, 13.9, 'label');
    var eb = H.t({ fr: 'Vraie interface · schéma', en: 'Real interface · diagram' }); H.eyebrow(S, eb, .05, 13.8); H.reg('eyebrow', eb, .35, 13.8, 'label');
    var caps = [[0, 3, { fr: 'Touche le<br><span style="color:var(--fluo)" class="gl">signe</span>.', en: 'Tap the<br><span style="color:var(--fluo)" class="gl">sign</span>.' }],
      [3, 6, { fr: 'Raté :<br>« pas ici ».', en: 'Miss:<br>“not here”.' }],
      [6, 9.5, { fr: 'Touché : le marqueur<br><span style="color:var(--fluo)" class="gl">l’entoure</span>.', en: 'Hit: the<br><span style="color:var(--fluo)" class="gl">loop appears</span>.' }],
      [9.5, END, { fr: 'Puis tu le<br><span style="color:var(--fluo)" class="gl">nommes</span>.', en: 'Then you<br><span style="color:var(--fluo)" class="gl">name</span> it.' }]];
    caps.forEach(function (c, i) { var tx = H.t(c[2]), e = K.div(S, 'left:72px;top:186px;width:876px;color:#fff;font-size:80px', '<div class="dsp">' + tx + '</div>'); K.cut(e, c[0], c[1]); K.track(e, [[c[0], { transform: 'translateY(22px)' }, EZ.out], [c[0] + .25, { transform: 'translateY(0px)' }]]); H.reg('caption-' + (i + 1), tx, c[0] + .25, c[1]); });
    H.endCard(S, END);
    return { cuts: [0, 2, 3, 3.5, 6, 6.5, 9.5, 10, END, K.T] };
  };
  return U;
})();
