/* Hybrid system: A « Lampe à fente » (dark navy, cobalt slit beam, snap reveal, glowing fluo sign) owns all motion;
   E « Quiz show » becomes a HUD layer (question card, A/B/C buttons, timer, score) restyled as glowing cobalt/fluo UI.
   Safe zones: text stays inside x 72–948, y 140–1680 (1080×1920). */
var H = (function () {
  var H = {}, EZ = K.EZ;
  H.X0 = 72; H.X1 = 948; H.W = 876;
  H.lang = 'fr';
  H.t = function (o) { var v = o == null ? '' : (typeof o === 'string' ? o : (o[H.lang] != null ? o[H.lang] : o.fr)); return String(v).replace(/ ([?!:;»])/g, '&nbsp;$1').replace(/« /g, '«&nbsp;'); };

  H.scene = function (S, h) {
    S.style.height = (h || 1920) + 'px';
    S.style.background = 'radial-gradient(120% 80% at 50% 48%, #10184a 0%, #060a2a 62%, #03051a 100%)';
    var tok = { '--surface': '#0e1440', '--sunk': '#151c52', '--paper': '#060a2a', '--ink': '#eef0ff', '--ink-2': '#7d84c2', '--ink-3': '#8e94c4', '--line': '#2a3170', '--cobalt': '#4a57ff', '--cobalt-wash': '#1a2266', '--edge': '#000', '--t-label': '#c9ceff', '--urgent': '#ff6b5e' };
    Object.keys(tok).forEach(function (k) { S.style.setProperty(k, tok[k]); });
    K.div(S, 'width:0;height:0', '<svg width="0" height="0"><defs>' +
      '<filter id="glowA" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
      '<filter id="glowL" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
      '<filter id="glowM" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>' +
      '<style>.hud{position:absolute;background:rgba(14,20,64,.74);border:2px solid rgba(90,104,255,.95);border-radius:22px;box-shadow:0 0 0 1px rgba(74,87,255,.25),0 0 34px rgba(74,87,255,.42),inset 0 0 22px rgba(74,87,255,.16)}' +
      '.lbl-sm{font-size:12px!important;font-weight:700}.mono{font-family:var(--mono);font-weight:700;letter-spacing:.12em;text-transform:uppercase}' +
      '.eyb{font:700 26px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--fluo);text-shadow:0 0 14px rgba(216,255,58,.45)}' +
      '.gl{text-shadow:0 0 22px rgba(216,255,58,.55)}' +
      '.tile{display:inline-grid;place-items:center;width:68px;height:68px;border-radius:16px;border:3px solid var(--fluo);color:var(--fluo);font:800 40px var(--display);box-shadow:0 0 18px rgba(216,255,58,.35),inset 0 0 12px rgba(216,255,58,.2);text-shadow:0 0 12px rgba(216,255,58,.7);flex:none}' +
      '.sticker{color:#0a0f40!important}.sticker.dk{border-color:#000;box-shadow:7px 7px 0 #000}</style>');
  };
  /* slit beam + halo following keys [[t, x], ...]; visible in [t0, t1) */
  H.beam = function (S, keys, top, h, t0, t1, op) {
    var beam = K.div(S, 'left:0;top:' + top + 'px;width:90px;height:' + h + 'px;mix-blend-mode:screen;filter:blur(5px);background:linear-gradient(90deg,transparent,rgba(74,87,255,.55) 32%,#dfe3ff 50%,rgba(74,87,255,.55) 68%,transparent)');
    var halo = K.div(S, 'left:0;top:' + (top - 100) + 'px;width:520px;height:' + (h + 200) + 'px;mix-blend-mode:screen;background:radial-gradient(closest-side,rgba(74,87,255,.34),rgba(74,87,255,.1) 60%,transparent)');
    K.track(beam, keys.map(function (k) { return [k[0], { transform: 'translateX(' + (k[1] - 45) + 'px)' }, EZ.slow]; }));
    K.track(halo, keys.map(function (k) { return [k[0], { transform: 'translateX(' + (k[1] - 260) + 'px)' }, EZ.slow]; }));
    [beam, halo].forEach(function (e) { var k = [[0, { opacity: 0 }], [t0, { opacity: 0 }], [t0 + .15, { opacity: op || 1 }]]; if (t1 != null) k.push([t1 - .2, { opacity: op || 1 }], [t1, { opacity: 0 }]); K.track(e, k); });
  };
  H.flash = function (S, t, op) { var f = K.div(S, 'left:0;top:0;width:1080px;height:' + S.offsetHeight + 'px;background:#4a57ff;mix-blend-mode:screen;z-index:40'); K.track(f, [[0, { opacity: 0 }], [t, { opacity: 0 }], [t, { opacity: op || .65 }, EZ.out], [t + .35, { opacity: 0 }]]); };

  /* figure spec {html, vb:[w,h], sign:[x,y,rx,ry]} fitted in a box; dim copy + a copy lit inside the beam until tSnap */
  H.figure = function (S, spec, box, beamKeys, tSnap, o) {
    o = o || {}; var sc = Math.min(box[2] / spec.vb[0], box[3] / spec.vb[1]), w = spec.vb[0] * sc, h = spec.vb[1] * sc, x = box[0] + (box[2] - w) / 2, y = box[1] + (box[3] - h) / 2;
    var wrap = K.div(S, 'left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;height:' + h + 'px', '', 'fig');
    var dim = K.div(wrap, 'inset:0;filter:brightness(.62) saturate(.8)', spec.html);
    var lit = K.div(wrap, 'inset:0', spec.html);
    if (beamKeys) {
      var kk = beamKeys.map(function (k) { var l = k[1] - x - 34, r = w - (k[1] - x + 34); return [k[0], { clipPath: 'inset(0px ' + r.toFixed(0) + 'px 0px ' + l.toFixed(0) + 'px)' }, EZ.slow]; });
      kk.push([tSnap - .001, kk[kk.length - 1][1]], [tSnap, { clipPath: 'inset(0px 0px 0px 0px)' }]);
      K.track(lit, kk);
    }
    var ov = K.svgBox(wrap, 'left:0;top:0;width:100%;height:100%', spec.view || ('0 0 ' + spec.vb[0] + ' ' + spec.vb[1]));
    var vx = spec.view ? +spec.view.split(' ')[0] : 0, vy = spec.view ? +spec.view.split(' ')[1] : 0;
    return { wrap: wrap, ov: ov, sc: sc, x: x, y: y, w: w, h: h, px: function (a, b) { return [x + (a - vx) * sc, y + (b - vy) * sc]; } };
  };
  H.signLoop = function (F, spec, t0, seed) {
    var g = spec.sign; return K.loop(F.ov, g[0], g[1], g[2], g[3], seed || 11, t0, .55, { filter: 'url(#glowA)', tilt: -.1, w: 6.5 / F.sc, hw: 10 / F.sc });
  };
  H.burst = function (S, x, y, t0, n, seed) { // restrained fluo burst + ring
    var R = K.rng(seed || 3); n = n || 14;
    for (var i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2 + R() * .5, d = 90 + R() * 110, sz = 8 + R() * 8;
      var e = K.div(S, 'left:' + (x - sz / 2) + 'px;top:' + (y - sz / 2) + 'px;width:' + sz + 'px;height:' + sz + 'px;border-radius:' + (i % 2 ? '50%' : '3px') + ';background:#d8ff3a;box-shadow:0 0 12px rgba(216,255,58,.8);z-index:45');
      K.track(e, [[0, { opacity: 0, transform: 'translate(0px,0px) scale(.4)' }], [t0, { opacity: 0, transform: 'translate(0px,0px) scale(.4)' }], [t0 + .01, { opacity: 1, transform: 'translate(0px,0px) scale(1)' }, 'cubic-bezier(.15,.7,.3,1)'], [t0 + .75, { opacity: 0, transform: 'translate(' + (Math.cos(a) * d).toFixed(0) + 'px,' + (Math.sin(a) * d).toFixed(0) + 'px) scale(.6)' }]]);
    }
    var ring = K.div(S, 'left:' + (x - 60) + 'px;top:' + (y - 60) + 'px;width:120px;height:120px;border-radius:50%;border:4px solid #d8ff3a;box-shadow:0 0 22px rgba(216,255,58,.7);z-index:44');
    K.track(ring, [[0, { opacity: 0, transform: 'scale(.3)' }], [t0, { opacity: 0, transform: 'scale(.3)' }], [t0 + .01, { opacity: 1, transform: 'scale(.4)' }, EZ.out], [t0 + .6, { opacity: 0, transform: 'scale(2.4)' }]]);
  };
  /* A end card: fade through black, beam sweep, the ocellus draws in glowing fluorescein */
  /* reading registry: every readable text logs its fully-visible window (after its entrance) → check_reading.py */
  H.texts = [];
  H.words = function (str) { return (String(str).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').match(/[\p{L}\p{N}][\p{L}\p{N}'’\-]*/gu) || []).length; };
  H.reg = function (id, text, start, end, kind) { H.texts.push({ id: id, text: String(text).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim(), words: H.words(text), start: +start.toFixed(3), end: +end.toFixed(3), kind: kind || 'card' }); };
  H.need = function (w) { return Math.max(2.5, 1.5 + .35 * w); };
  /* A end card (4 s): fade through black, the ocellus draws in glowing fluorescein; date + CTA read as one group */
  H.END = 5.5;
  H.endCard = function (S, t0) {
    var hh = S.offsetHeight, k = hh / 1920;
    var blk = K.div(S, 'left:0;top:0;width:1080px;height:' + hh + 'px;background:radial-gradient(90% 60% at 50% 45%,#0e1440,#03051a);z-index:80'); K.fade(blk, t0, .25);
    var z = K.div(S, 'left:0;top:0;width:1080px;height:' + hh + 'px;z-index:81');
    var sweep = K.div(z, 'left:0;top:' + (420 * k) + 'px;width:120px;height:' + (1100 * k) + 'px;mix-blend-mode:screen;filter:blur(18px);background:linear-gradient(90deg,transparent,rgba(74,87,255,.45),transparent)');
    K.track(sweep, [[0, { opacity: 0, transform: 'translateX(-200px)' }], [t0 + .2, { opacity: 0, transform: 'translateX(-200px)' }], [t0 + .25, { opacity: 1, transform: 'translateX(-200px)' }, EZ.slow], [t0 + 1.4, { opacity: 1, transform: 'translateX(1200px)' }]]);
    var y0 = 470 * k;
    K.mark(z, 'left:350px;top:' + y0 + 'px;width:380px;height:357px', { t0: t0 + .15, dur: .6, sw: 70, filter: 'url(#glowM)' });
    var wm = K.wordmark(z, 'left:270px;top:' + (y0 + 420) + 'px;width:540px;color:#fff', '#ffffff'); K.rise(wm, t0 + .3, .35, 30);
    var dsx = H.t({ fr: 'L’ophtalmo en images', en: 'Ophthalmology in images' }), dtx = H.t({ fr: '· Décembre 2026 ·', en: 'Coming December 2026' }), ctx = H.t({ fr: 'Abonne-toi', en: 'Follow' });
    var ds = K.div(z, 'left:72px;top:' + (y0 + 610) + 'px;width:876px;text-align:center;color:#ffffff;font:600 50px/1.2 var(--body)', dsx); K.rise(ds, t0 + .3, .35, 20);
    var dt = K.div(z, 'left:72px;top:' + (y0 + 700) + 'px;width:876px;text-align:center;color:#c9ceff;font:700 60px var(--display);letter-spacing:-.02em', dtx); K.rise(dt, t0 + .35, .35, 24);
    var cta = K.div(z, 'left:72px;top:' + (y0 + 820) + 'px;width:876px;text-align:center;font-size:76px', '<span class="sticker dk">' + ctx + '</span>'); K.pop(cta, t0 + .4, -5, .4);
    H.reg('end', 'ocelle ' + dsx + ' ' + dtx + ' ' + ctx, t0 + .8, K.T, 'card');
    return z;
  };
  H.eyebrow = function (S, txt, t0, t1) { var e = K.div(S, 'left:72px;top:142px;z-index:30', '<span class="eyb">' + txt + '</span>'); K.fade(e, t0, .3, t1, .2); return e; };

  /* ---------- the quiz reel (A+E) ----------
     cfg: { num, spec, hook, q, opts[3], ok, sign, stk:[x,y], dx, why, prompt }   mode: 'same' | 'demain' | 'recap' */
  /* quiz timeline (120 BPM, 0.5-s grid). Hook read alone (≥2.9 s), question + options read as one block over the
     calm hold + the 8-s answer window, labels (sign, « Bien vu ! ») at the reveal, then one answer card, then the end card. */
  /* ≤ 20 s (40 beats): hook 3 s, question + options (≤ 13 words) read over a 6-s answer window, answer card = one line at the reveal, end card 5.5 s */
  H.QUIZ_T = {
    same: { snap: 3, btn: [3, 3.25, 3.5], tm: 4, tmd: 6, rev: 10, dx: 10, end: 14.5 },
    demain: { snap: 3, btn: [3, 3.25, 3.5], tm: 4, tmd: 6, rev: 10, dx: null, end: 14.5 },
    recap: { snap: 3, btn: [3, 3, 3], tm: 3.5, tmd: 6, rev: 9.5, dx: 9.5, end: 14.5 }
  };
  H.quiz = function (S, cfg, mode) {
    var Q = H.QUIZ_T[mode]; Q.T = Q.end + H.END; K.T = Q.T; H.scene(S);
    var ST = Q.snap, FB = [40, 470, 1000, 620];
    var BK = [[0, 120], [.1, 120], [2.8, 960]];
    H.beam(S, BK, 380, 860, 0, ST + .05);
    var F = H.figure(S, cfg.spec, FB, BK, ST);
    K.track(F.wrap, [[0, { transform: 'scale(1)' }, EZ.lin], [ST, { transform: 'scale(1.05)' }], [ST, { transform: 'scale(1.14)' }, EZ.out], [ST + .7, { transform: 'scale(1)' }], [Q.end, { transform: 'scale(1)' }]]);
    H.flash(S, ST);
    var hookTxt = mode === 'recap' ? H.t({ fr: 'La réponse<br><span style="color:var(--fluo)" class="gl">d’hier</span>', en: 'Yesterday’s<br><span style="color:var(--fluo)" class="gl">answer</span>' }) : H.t(cfg.hook);
    var hook = K.div(S, 'left:72px;top:200px;width:876px;color:#fff;font-size:140px', '<div class="dsp">' + hookTxt + '</div>');
    K.rise(hook, 0, .25, 40, ST - .1, .1); H.reg('hook', hookTxt, .25, ST - .1);
    var eyb = H.t({ fr: 'Défi du jour · Ocelle', en: 'Daily challenge · Ocelle' });
    H.eyebrow(S, eyb, .05, Q.end - .2); H.reg('eyebrow', eyb, .35, Q.end - .2, 'label');
    // question card + options (one reading block)
    var qx = H.t(cfg.q), card = K.div(S, 'left:72px;top:198px;width:876px;padding:26px 32px 30px;z-index:20', '<div class="eyb" style="margin-bottom:12px">' + H.t({ fr: 'Question', en: 'Question' }) + '</div><div style="color:#fff;font:600 44px/1.22 var(--body)">' + qx + '</div>', 'hud');
    var qOut = Q.dx ? Q.rev : Q.end;
    K.rise(card, ST, .4, 24, qOut, .25);
    var bs = [], BY = 1112, otx = [];
    cfg.opts.forEach(function (op, i) {
      var b = K.div(S, 'left:72px;top:' + (BY + i * 130) + 'px;width:876px;height:112px;display:flex;align-items:center;gap:26px;padding:0 24px;color:#fff;font:600 44px/1.1 var(--body);z-index:20', '<span class="tile">' + 'ABC'[i] + '</span><span>' + H.t(op) + '</span>', 'hud');
      b.style.display = 'flex'; bs.push(b); otx.push(H.t(op));
      K.track(b, [[0, { opacity: 0, transform: 'translateY(30px)' }], [Q.btn[i], { opacity: 0, transform: 'translateY(30px)' }, EZ.out], [Q.btn[i] + .35, { opacity: 1, transform: 'translateY(0px)' }],
        [Q.rev, { opacity: 1, transform: 'translateY(0px)' }], [Q.rev + .01, { opacity: (Q.dx && i !== cfg.ok) ? .32 : 1, transform: 'translateY(0px)' }],
        [qOut, { opacity: (Q.dx && i !== cfg.ok) ? .32 : 1, transform: 'translateY(0px)' }, EZ.in],
        (Q.dx && i === cfg.ok) ? [qOut + .4, { opacity: 1, transform: 'translateY(' + (-i * 130) + 'px)' }] : [qOut + .3, { opacity: 0, transform: 'translateY(24px)' }]].concat((Q.dx && i === cfg.ok) ? [[Q.end, { opacity: 1, transform: 'translateY(' + (-i * 130) + 'px)' }]] : []));
    });
    H.reg('question+options', qx + ' ' + otx.join(' '), Math.max(ST + .4, Q.btn[2] + .35), Q.rev);
    // timer bar + open prompt (no call to comment on screen)
    var tb = K.div(S, 'left:72px;top:1508px;width:740px;height:22px;border-radius:12px;background:rgba(74,87,255,.22);border:2px solid rgba(90,104,255,.9);box-shadow:0 0 18px rgba(74,87,255,.4);overflow:hidden;z-index:20');
    var tf = K.div(tb, 'left:0;top:0;width:100%;height:100%;background:#d8ff3a;box-shadow:0 0 16px rgba(216,255,58,.9);transform-origin:0 50%');
    K.track(tf, [[Q.tm, { transform: 'scaleX(1)' }, EZ.lin], [Q.tm + Q.tmd, { transform: 'scaleX(0)' }]]);
    K.fade(tb, Q.tm - .25, .25, Q.rev, .15);
    var nd = Math.round(Q.tmd);
    for (var s = 0; s < nd; s++) { var dg = K.div(S, 'left:836px;top:1484px;width:112px;text-align:right;color:#d8ff3a;font:700 64px/1 var(--mono);text-shadow:0 0 16px rgba(216,255,58,.7);z-index:20', String(nd - s)); var a0 = Q.tm + s * (Q.tmd / nd); K.cut(dg, a0, a0 + Q.tmd / nd); K.track(dg, [[a0, { transform: 'scale(1.3)' }, EZ.out], [a0 + .2, { transform: 'scale(1)' }]]); }
    var ptx = mode === 'recap' ? H.t({ fr: 'Tu avais vu juste ?', en: 'Did you get it?' }) : H.t(cfg.prompt);
    var pr = K.div(S, 'left:72px;top:1556px;width:876px;color:#fff;font:800 66px/1 var(--display);letter-spacing:-.03em;z-index:20', ptx);
    K.rise(pr, Q.tm, .4, 16, Q.rev, .2); H.reg('prompt', ptx, Q.tm + .4, Q.rev, 'label');
    H.beam(S, [[Q.tm, 60], [Q.tm + Q.tmd, 1000]], 440, 700, Q.tm, Q.rev, .45);

    if (Q.dx) { // reveal in the same video
      H.flash(S, Q.rev, .55);
      H.signLoop(F, cfg.spec, Q.rev + .02, cfg.num * 7);
      var bo = bs[cfg.ok], hi = K.div(bo, 'inset:-2px;border-radius:22px;background:#d8ff3a;display:flex;align-items:center;gap:26px;padding:0 24px;color:#0a0f40;font:800 44px/1.1 var(--body);box-shadow:0 0 44px rgba(216,255,58,.55)', '<span class="tile" style="background:#0a0f40;box-shadow:none">' + 'ABC'[cfg.ok] + '</span><span>' + H.t(cfg.opts[cfg.ok]) + '</span>');
      K.cut(hi, Q.rev);
      K.track(hi, [[Q.rev, { transform: 'scale(1)' }, EZ.pop], [Q.rev + .14, { transform: 'scale(1.04)' }], [Q.rev + .4, { transform: 'scale(1)' }]]);
      H.burst(S, 72 + 24 + 34, BY + 56, Q.rev + .45, 14, cfg.num);
      var sg = H.t(cfg.sign), st = K.div(S, 'left:' + cfg.stk[0] + 'px;top:' + cfg.stk[1] + 'px;font-size:54px;z-index:30', '<span class="sticker dk">' + sg + '</span>'); st.style.transformOrigin = '20% 50%';
      K.pop(st, Q.rev + .35, -5, .5); H.reg('sign-sticker', sg, Q.rev + .85, Q.end, 'label');
      var bv = H.t({ fr: 'Réponse ', en: 'Answer ' }) + 'ABC'[cfg.ok], ok = K.div(bo, 'right:-12px;top:-44px;font-size:44px;z-index:31', '<span class="sticker dk">' + bv + '</span>');
      K.pop(ok, Q.rev + .2, 6, .5); H.reg('answer-letter', bv, Q.rev + .7, Q.end, 'label');
      // the answer: one card, diagnosis and action merged in one short line
      var dxt = H.t(cfg.dx);
      var dx = K.div(S, 'left:72px;top:196px;width:876px;color:#fff;font-size:84px;z-index:20', '<div class="dsp">' + dxt + '</div>'); K.rise(dx, Q.dx + .3, .45, 36);
      H.reg('answer', dxt, Q.dx + .75, Q.end);
    } else { // answer tomorrow
      H.flash(S, Q.rev, .4);
      var dmt = H.t({ fr: 'Réponse demain', en: 'Answer tomorrow' }), dm = K.div(S, 'left:72px;top:440px;width:876px;text-align:center;font-size:104px;z-index:30', '<span class="sticker dk">' + dmt + '</span>');
      K.pop(dm, Q.rev + .05, -5, .55); H.reg('answer-tomorrow', dmt, Q.rev + .6, Q.end, 'label');
      var sbt = H.t({ fr: 'Abonne-toi pour la voir', en: 'Follow to see it' }), sub = K.div(S, 'left:72px;top:1556px;width:876px;color:#fff;font:800 60px/1 var(--display);letter-spacing:-.03em;z-index:20', sbt);
      K.rise(sub, Q.rev + .3, .4, 16); H.reg('follow-line', sbt, Q.rev + .7, Q.end);
    }
    H.endCard(S, Q.end);
    return { F: F, cuts: H.cutsQuiz(mode) };
  };
  H.cutsQuiz = function (mode) { var Q = H.QUIZ_T[mode], c = [0, Q.snap].concat(Q.btn, [Q.tm], Q.dx ? [Q.rev, Q.dx] : [Q.rev], [Q.end, Q.end + H.END]); return c.filter(function (v, i) { return c.indexOf(v) === i; }); };
  return H;
})();
