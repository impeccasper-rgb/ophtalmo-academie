/* The 8 reels + countdown template. FR/EN strings live here. Cuts sit on a 120 BPM grid (0.5 s). */
var REELS = (function () {
  var EZ = K.EZ, R = {};
  function ant(o) { return '<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">' + Mech.kit.ant(o) + '</svg>'; }
  var SPEC = {
    angle: function () { // cropped on the left angle, labelled (cornea, iris, lens), view in figure coordinates
      var h = ant({ iris: 'bombe', lens: 'thick', flow: 'block', tags: [[150, 70, 'Cornée', 'middle'], [118, 132, 'Iris', 'middle'], [196, 190, 'Cristallin', 'middle']] }).replace('viewBox="0 0 360 200"', 'viewBox="0 28 250 150"');
      return { html: h, vb: [250, 150], view: '0 28 250 150', sign: [36, 140, 24, 22] }; },
    dendrite: function () { return { html: ART.eye({ mode: 'cobalt', dendrite: true }), vb: [900, 560], sign: [446, 268, 175, 104] }; },
    rd: function () { return { html: ART.fundus({ kind: 'rd', bg: 'none' }), vb: [440, 400], sign: [120, 62, 44, 40] }; },
    crao: function () { return { html: ART.fundus({ kind: 'crao', bg: 'none' }), vb: [440, 400], sign: [224, 216, 34, 32] }; },
    hypopyon: function () { return { html: ART.eye({ red: true, flush: true, hypopyon: true }), vb: [900, 560], sign: [450, 398, 140, 50] }; }
  };
  R.SPEC = SPEC;
  function hook(fr, en) { return { fr: fr, en: en }; }
  var GL = function (w) { return '<span style="color:var(--fluo)" class="gl">' + w + '</span>'; };
  var P_DX = { fr: 'Ton diagnostic ?', en: 'Your diagnosis?' }, P_SIGN = { fr: 'C’est quoi le signe ?', en: 'What’s the sign?' }, P_SEE = { fr: 'Qu’est-ce que tu vois ?', en: 'What do you see?' };
  /* every option differs by a sign the drawing settles; the question never gives the answer away */
  R.QUIZ = {
    angle: { num: 1, spec: 'angle', hook: hook('Ouvert<br>ou ' + GL('fermé') + '&nbsp;?', 'Open<br>or ' + GL('closed') + '?'), prompt: P_DX, ok: 2, stk: [90, 990],
      q: { fr: 'Œil rouge et flou. Diagnostic ?', en: 'Red, blurry eye. Diagnosis?' },
      opts: [{ fr: 'Conjonctivite', en: 'Conjunctivitis' }, { fr: 'Uvéite antérieure', en: 'Anterior uveitis' }, { fr: 'Fermeture de l’angle', en: 'Angle closure' }],
      sign: { fr: 'angle fermé', en: 'closed angle' },
      dx: { fr: GL('Fermeture de l’angle') + ' : baisser la PIO', en: GL('Angle closure') + ': lower the IOP' } },
    dendrite: { num: 2, spec: 'dendrite', hook: hook('Qu’est-ce<br>qui ' + GL('s’allume') + '&nbsp;?', 'What<br>' + GL('lights up') + '?'), prompt: P_SIGN, ok: 2, stk: [560, 520],
      q: { fr: 'Fluorescéine, bleu cobalt. Quel signe ?', en: 'Fluorescein, cobalt light. Which sign?' },
      opts: [{ fr: 'Ulcère bactérien', en: 'Bacterial ulcer' }, { fr: 'Kératite ponctuée', en: 'Punctate keratitis' }, { fr: 'Dendrite à bulbes', en: 'Dendrite with bulbs' }],
      sign: { fr: 'dendrite', en: 'dendrite' },
      dx: { fr: 'Kératite ' + GL('herpétique') + ' : antiviral, pas de corticoïde', en: GL('Herpes') + ' keratitis: antiviral, no steroids' } },
    rd: { num: 3, spec: 'rd', hook: hook('Urgence<br>ou ' + GL('pas') + '&nbsp;?', 'Emergency<br>or ' + GL('not') + '?'), prompt: P_SEE, ok: 0, stk: [72, 650],
      q: { fr: 'Baisse de vision. Fond d’œil ?', en: 'Vision loss. What’s on the fundus?' },
      opts: [{ fr: 'Décollement de rétine', en: 'Retinal detachment' }, { fr: 'Occlusion veineuse', en: 'Vein occlusion' }, { fr: 'Rétinopathie diabétique', en: 'Diabetic retinopathy' }],
      sign: { fr: 'déchirure en fer à cheval', en: 'horseshoe tear' },
      dx: { fr: GL('Décollement de rétine') + ' : ophtalmo aujourd’hui', en: GL('Retinal detachment') + ': same-day ophthalmology' } },
    crao: { num: 4, spec: 'crao', hook: hook('Soudain,<br>' + GL('plus rien'), 'Suddenly,<br>' + GL('nothing')), prompt: P_SIGN, ok: 2, stk: [110, 1000],
      q: { fr: 'Brutal, indolore. Quel signe ?', en: 'Sudden, painless. Which sign?' },
      opts: [{ fr: 'Hémorragies diffuses', en: 'Diffuse hemorrhages' }, { fr: 'Papille gonflée', en: 'Swollen disc' }, { fr: 'Tache rouge cerise', en: 'Cherry-red spot' }],
      sign: { fr: 'tache rouge cerise', en: 'cherry-red spot' },
      dx: { fr: 'Occlusion de l’artère ' + GL('centrale') + ' de la rétine', en: 'Central retinal ' + GL('artery') + ' occlusion: eye stroke' } },
    hypopyon: { num: 5, spec: 'hypopyon', hook: hook('Ce niveau<br>' + GL('blanc') + '&nbsp;?', 'That white<br>' + GL('layer') + '?'), prompt: P_DX, ok: 1, stk: [110, 990],
      q: { fr: 'Douleur après une cataracte. Que vois-tu ?', en: 'Pain after cataract surgery. What do you see?' },
      opts: [{ fr: 'Hyphéma', en: 'Hyphema' }, { fr: 'Hypopyon', en: 'Hypopyon' }, { fr: 'Œdème cornéen', en: 'Corneal edema' }],
      sign: { fr: 'hypopyon', en: 'hypopyon' },
      dx: { fr: GL('Endophtalmie') + ' : ophtalmo le jour même', en: GL('Endophthalmitis') + ': same-day ophthalmology' } }
  };
  R.quiz = function (S, key, mode) { var c = Object.assign({}, R.QUIZ[key]); c.spec = SPEC[c.spec](); return H.quiz(S, c, mode); };

  /* ---------- R1 · brand reveal « Ocelle arrive » (14.5 s) ---------- */
  R.brand = function (S) {
    K.T = 11 + H.END; H.scene(S);
    var BK = [[0, 120], [.2, 120], [2.3, 960]];
    H.beam(S, BK, 420, 820, 0, 2.55);
    var spec = { html: ART.eyeA(true), vb: [900, 560] };
    var F = H.figure(S, spec, [90, 760, 900, 560], BK, 2.5);
    F.wrap.querySelector('div').innerHTML = ART.eyeA(false); F.wrap.querySelector('div').style.filter = 'none';
    K.track(F.wrap, [[0, { transform: 'scale(1)', opacity: 1 }, EZ.lin], [2.5, { transform: 'scale(1.05)', opacity: 1 }], [2.5, { transform: 'scale(1.14)', opacity: 1 }, EZ.out], [3.1, { transform: 'scale(1)', opacity: 1 }], [6.0, { transform: 'scale(1)', opacity: 1 }, EZ.io], [6.5, { transform: 'scale(2.4)', opacity: 1 }], [6.5, { transform: 'scale(2.4)', opacity: 0 }]]);
    K.loop(F.ov, 450, 280, 104, 98, 21, 5.0, .5, { filter: 'url(#glowA)', w: 6, hw: 9, tilt: -.12, over: .45 });
    H.flash(S, 2.5); H.flash(S, 6.5, .5);
    var eb = H.t({ fr: 'Bientôt · Ocelle', en: 'Coming soon · Ocelle' }); H.eyebrow(S, eb, .05, 10.8); H.reg('eyebrow', eb, .35, 10.8, 'label');
    // three words, stacked, each read alone for ≥ 2.5 s
    [[{ fr: 'Observe.', en: 'Observe.' }, 0], [{ fr: 'Réponds.', en: 'Answer.' }, 2.5], [{ fr: '<span style="color:var(--fluo)" class="gl">Révèle.</span>', en: '<span style="color:var(--fluo)" class="gl">Reveal.</span>' }, 5]].forEach(function (w, i) {
      var tx = H.t(w[0]), e = K.div(S, 'left:72px;top:' + (200 + i * 160) + 'px;width:876px;color:#fff;font-size:150px', '<div class="dsp">' + tx + '</div>');
      K.rise(e, w[1], .3, 26, 8.0, .15); H.reg('word-' + (i + 1), tx, w[1] + .3, 8.0);
    });
    // the loop becomes the brand mark, then « ocelle arrive »
    K.mark(S, 'left:330px;top:690px;width:420px;height:395px', { t0: 6.5, dur: .7, sw: 70, filter: 'url(#glowM)' });
    var wm = K.wordmark(S, 'left:250px;top:1120px;width:580px;color:#fff', '#ffffff'); K.rise(wm, 7.5, .45, 30);
    var art = H.t({ fr: 'arrive', en: 'is coming' }), ar = K.div(S, 'left:72px;top:1325px;width:876px;text-align:center;font-size:120px', '<span class="dsp gl" style="color:var(--fluo)">' + art + '</span>'); K.rise(ar, 7.5, .45, 24);
    H.reg('ocelle-arrive', 'ocelle ' + art, 7.95, 11);
    H.endCard(S, 11);
    return { cuts: [0, 2.5, 5, 6.5, 7.5, 11, K.T] };
  };

  /* ---------- R3 · drawn mechanism stepping (g-crise steps 2–5), 4 short captions, 3 s each ---------- */
  var MECH_LAB = [{ fr: 'Bloc pupillaire', en: 'Pupillary block' }, { fr: 'L’angle se ferme', en: 'The angle closes' }, { fr: 'La PIO flambe', en: 'IOP spikes' }, { fr: 'L’iridotomie rouvre', en: 'Iridotomy reopens' }];
  R.mech = function (S) {
    var T0 = [0, 3, 6, 9], END = 12; K.T = END + H.END; H.scene(S);
    var steps = window.OPH.mech['g-crise'].steps.slice(1), BOX = [40, 560, 1000, 620];
    var BK = [[0, 120], [.1, 120], [2.6, 960]];
    H.beam(S, BK, 470, 760, 0, 3.05);
    var eb = H.t({ fr: 'Mécanisme · crise d’angle', en: 'Mechanism · angle closure' }); H.eyebrow(S, eb, .05, END - .2); H.reg('eyebrow', eb, .35, END - .2, 'label');
    steps.forEach(function (st, i) {
      var F = H.figure(S, { html: st.svg, vb: [360, 200] }, BOX, i === 0 ? BK : null, 3.0);
      var t0 = T0[i], t1 = i < 3 ? T0[i + 1] : END;
      K.track(F.wrap, [[0, { opacity: i ? 0 : 1, transform: 'scale(1)' }], [t0, { opacity: i ? 0 : 1, transform: 'scale(1.06)' }], [t0, { opacity: 1, transform: 'scale(1.06)' }, EZ.out], [t0 + .5, { opacity: 1, transform: 'scale(1)' }, EZ.lin], [t1, { opacity: 1, transform: 'scale(1.02)' }], [t1, { opacity: i < 3 ? 0 : 1, transform: 'scale(1.02)' }]]);
      if (i) H.flash(S, t0, .32);
      var n = K.div(S, 'left:72px;top:200px;color:#d8ff3a;font:700 120px/1 var(--mono);text-shadow:0 0 22px rgba(216,255,58,.6)', (i + 1) + '<span style="color:#7d84c2;font-size:60px">/4</span>');
      K.cut(n, t0, t1); K.track(n, [[t0, { transform: 'translateY(20px)' }, EZ.out], [t0 + .25, { transform: 'translateY(0px)' }]]);
      var lt = H.t(MECH_LAB[i]), lb = K.div(S, 'left:72px;top:1260px;width:876px;padding:30px 34px 34px;color:#fff;font:700 72px/1.1 var(--display);letter-spacing:-.02em', lt, 'hud');
      K.cut(lb, t0, t1); K.track(lb, [[t0, { transform: 'translateY(24px)' }, EZ.out], [t0 + .25, { transform: 'translateY(0px)' }]]);
      H.reg('step-' + (i + 1), lt, t0 + .25, t1);
    });
    for (var i = 0; i < 4; i++) { var sg = K.div(S, 'left:' + (72 + i * 224) + 'px;top:1560px;width:204px;height:12px;border-radius:8px;background:rgba(74,87,255,.3);border:1px solid rgba(90,104,255,.8)');
      var on = K.div(sg, 'inset:0;border-radius:8px;background:#d8ff3a;box-shadow:0 0 14px rgba(216,255,58,.8)'); K.cut(on, T0[i]); }
    H.endCard(S, END);
    return { cuts: [0].concat(T0.slice(1), [END, K.T]) };
  };

  /* ---------- countdown template (J-30 / J-14 / J-7 / J-1), 13 s ---------- */
  var LINE = { 30: { fr: 'Le compte à rebours<br>commence.', en: 'The countdown<br>starts.' }, 14: { fr: 'Deux semaines.<br>Les signes sont prêts.', en: 'Two weeks.<br>The signs are ready.' }, 7: { fr: 'Une semaine.<br>Entraîne ton œil.', en: 'One week.<br>Train your eye.' }, 1: { fr: 'Demain,<br>tu vois le signe.', en: 'Tomorrow,<br>you see the sign.' } };
  R.countdown = function (S, n) {
    n = +n || 30; var END = 9.5; K.T = END + H.END; H.scene(S);
    var BK = [[0, 100], [.2, 100], [1.9, 980]], big = H.lang === 'fr' ? 'J-' + n : String(n), fs = H.lang === 'fr' ? (n > 9 ? 330 : 400) : 520;
    H.beam(S, BK, 420, 820, 0, 2.05);
    var eb = H.t({ fr: 'Compte à rebours', en: 'Countdown' }); H.eyebrow(S, eb, .05, END - .2); H.reg('eyebrow', eb, .35, END - .2, 'label');
    var box = 'left:0;top:520px;width:1080px;text-align:center;font-family:var(--display);font-weight:800;letter-spacing:-.05em;line-height:1;font-size:' + fs + 'px';
    var dim = K.div(S, box + ';color:#c9ceff', big), lit = K.div(S, box + ';color:#eef0ff;text-shadow:0 0 30px rgba(170,178,255,.8)', big);
    K.track(lit, BK.map(function (k) { return [k[0], { clipPath: 'inset(0px ' + (1080 - k[1] - 40) + 'px 0px ' + (k[1] - 40) + 'px)' }, EZ.slow]; }));
    K.cut(lit, 0, 2);
    var glow = K.div(S, box + ';color:#d8ff3a;text-shadow:0 0 40px rgba(216,255,58,.6),0 0 90px rgba(216,255,58,.3)', big);
    K.track(glow, [[0, { opacity: 0, transform: 'scale(1.1)' }], [2, { opacity: 0, transform: 'scale(1.1)' }], [2, { opacity: 1, transform: 'scale(1.1)' }, EZ.out], [2.6, { opacity: 1, transform: 'scale(1)' }]]);
    K.cut(dim, 0, 2); H.flash(S, 2); H.reg('number', big, 2.6, END, 'label');
    var sbt = H.t({ fr: 'avant Ocelle', en: (n === 1 ? 'day' : 'days') + ' until Ocelle' });
    var sub = K.div(S, 'left:72px;top:' + (520 + fs * 1.02) + 'px;width:876px;text-align:center;color:#c9ceff;font:700 52px var(--display);letter-spacing:-.02em', sbt);
    K.rise(sub, 2.5, .4, 18); H.reg('sub', sbt, 2.9, END);
    var tk = K.div(S, 'left:72px;top:1290px;width:876px;height:70px;padding:0 18px;display:flex;align-items:center;justify-content:space-between', '', 'hud'); tk.style.display = 'flex'; K.fade(tk, 3, .3);
    for (var i = 0; i < 30; i++) { var on = i >= 30 - n, t = K.div(tk, 'position:relative;width:16px;height:34px;border-radius:5px;background:' + (on ? '#d8ff3a;box-shadow:0 0 10px rgba(216,255,58,.8)' : 'rgba(74,87,255,.35)'));
      if (on) K.track(t, [[0, { opacity: .15 }], [3 + (i - 30 + n) * (0.8 / Math.max(n, 1)), { opacity: .15 }], [3.05 + (i - 30 + n) * (0.8 / Math.max(n, 1)), { opacity: 1 }]]); }
    var lnt = H.t(LINE[n] || LINE[30]), ln = K.div(S, 'left:72px;top:1420px;width:876px;text-align:center;color:#fff;font:800 70px/1.05 var(--display);letter-spacing:-.03em', lnt);
    K.rise(ln, 5, .45, 20); H.reg('line', lnt, 5.45, END);
    H.endCard(S, END);
    return { cuts: [0, 2, 2.5, 3, 5, END, K.T] };
  };
  return R;
})();
