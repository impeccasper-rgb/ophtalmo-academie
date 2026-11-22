/* « X ou Y ? » series — two look-alikes, one discriminating sign. A+E look, ≤ 20 s (40 beats at 120 BPM).
   Layout: eyebrow · hook « X ou Y ? » with both drawings visible from frame 1 · question + 2 options over a 6-s answer window ·
   reveal of the ONE sign (animated, marker loop) · one short « pourquoi » line · end card.
   Drawings: our own SVG (art.js) and the site's own kits (figures-retine.js fundus, Motion.loop). */
var XY = (function () {
  var X = {}, EZ = K.EZ;
  var GL = function (w) { return '<span style="color:var(--fluo)" class="gl">' + w + '</span>'; };
  var PW = 876, PH = 350, PXS = [72, 72], PYS = [478, 846];
  function SX(k) { return PXS[k] + 30; } function SY(k) { return PYS[k] + PH - 78; }
  /* place an SVG string (viewBox vb) inside a panel box [x, y, w, h] (panel px); returns vb → panel px mapper */
  function place(panel, html, vb, box, css) {
    var sc = Math.min(box[2] / vb[2], box[3] / vb[3]), w = vb[2] * sc, h = vb[3] * sc, x = box[0] + (box[2] - w) / 2, y = box[1] + (box[3] - h) / 2;
    var e = K.div(panel, 'left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;height:' + h + 'px;' + (css || ''), html, 'fig');
    var sv = e.querySelector('svg'); if (sv) { sv.setAttribute('viewBox', vb.join(' ')); sv.style.width = '100%'; sv.style.height = '100%'; }
    e.map = function (vx, vy) { return [x + (vx - vb[0]) * sc, y + (vy - vb[1]) * sc]; }; e.sc = sc; return e;
  }
  function eyeIn(panel, o, box) { return place(panel, ART.eye(o), [0, 0, 900, 560], box || [200, 18, PW - 400, PH - 36]); }
  function fundusIn(panel, o) { return place(panel, '<svg viewBox="0 0 360 200">' + MechRetine.kit.fundus(Object.assign({ label: false }, o)) + '</svg>', [30, 12, 176, 176], [250, 10, PW - 500, PH - 20]); }
  function loopPx(panel, cx, cy, rx, ry, t0, seed) {
    var ov = panel.ov; return K.loop(ov, cx, cy, rx, ry, seed || 7, t0, .55, { filter: 'url(#glowA)', tilt: -.1, w: 6.5, hw: 10 });
  }
  function sticker(S, x, y, txt, t0, rot, fs) { var e = K.div(S, 'left:' + x + 'px;top:' + y + 'px;font-size:' + (fs || 42) + 'px;z-index:35', '<span class="sticker dk">' + txt + '</span>'); e.style.transformOrigin = '20% 50%'; K.pop(e, t0, rot == null ? -5 : rot, .45); return e; }

  /* ---------- the 8 topics (FR / EN) ---------- */
  X.TOPICS = {
    episclerite: { hook: { fr: 'Épisclérite<br>ou ' + GL('sclérite') + '&nbsp;?', en: 'Episcleritis<br>or ' + GL('scleritis') + '?' },
      labels: [{ fr: 'Épisclérite', en: 'Episcleritis' }, { fr: 'Sclérite', en: 'Scleritis' }],
      q: { fr: 'Qu’est-ce qui les départage ?', en: 'What tells them apart?' }, opts: [{ fr: 'Une goutte de phényléphrine', en: 'A drop of phenylephrine' }, { fr: 'La fluorescéine', en: 'Fluorescein' }], ok: 0,
      why: { fr: GL('Sclérite') + ' : douleur profonde, bilan systémique', en: GL('Scleritis') + ': deep pain, systemic work-up' },
      draw: function (P) {
        P.forEach(function (p, i) { var k = i ? 'scl' : 'epi', box = [200, 18, PW - 400, PH - 36];
          p.base = eyeIn(p, { red: false }, box); p.wash = place(p, ART.sector(k, 'wash'), [0, 0, 900, 560], box); p.sup = place(p, ART.sector(k, 'sup'), [0, 0, 900, 560], box);
          if (i) p.deep = place(p, ART.sector('scl', 'deep'), [0, 0, 900, 560], box); });
      },
      reveal: function (S, P, t) {
        P.forEach(function (p, i) { // phenylephrine drop, then the superficial vessels blanch (episcleritis) — the deep plexus stays (scleritis)
          var d = p.base.map(700, 120), drop = K.div(p, 'left:' + (d[0] - 14) + 'px;top:0;width:28px;height:40px;border-radius:50% 50% 50% 50%/60% 60% 40% 40%;background:#dfe3ff;box-shadow:0 0 14px #9da5ff;z-index:5');
          K.track(drop, [[0, { opacity: 0, transform: 'translateY(-20px)' }], [t, { opacity: 0, transform: 'translateY(-20px)' }], [t + .05, { opacity: 1, transform: 'translateY(-20px)' }, EZ.in], [t + .45, { opacity: 1, transform: 'translateY(' + (d[1] - 20) + 'px)' }], [t + .55, { opacity: 0, transform: 'translateY(' + (d[1] - 20) + 'px)' }]]);
          K.track(p.sup, [[t + .5, { opacity: 1 }, EZ.out], [t + 1.4, { opacity: i ? .45 : .06 }]]);
          K.track(p.wash, [[t + .5, { opacity: 1 }, EZ.out], [t + 1.4, { opacity: i ? 1 : .15 }]]);
        });
        var c = P[1].base.map(735, 280); loopPx(P[1], c[0], c[1], 95, 120, t + 1.3, 31);
        sticker(S, SX(0), SY(0), H.t({ fr: 'blanchit', en: 'blanches' }), t + 1.4, -4);
        sticker(S, SX(1), SY(1), H.t({ fr: 'reste rouge', en: 'stays red' }), t + 1.5, 4);
        return [['sticker-1', H.t({ fr: 'blanchit', en: 'blanches' }), t + 1.85], ['sticker-2', H.t({ fr: 'reste rouge', en: 'stays red' }), t + 1.95]];
      } },
    herpes: { hook: { fr: 'Herpès<br>ou ' + GL('zona') + '&nbsp;?', en: 'Herpes<br>or ' + GL('shingles') + '?' },
      labels: [{ fr: 'Herpès (VHS)', en: 'Herpes (HSV)' }, { fr: 'Zona (VZV)', en: 'Shingles (VZV)' }],
      q: { fr: 'Quel signe trahit le VHS ?', en: 'Which sign gives HSV away?' }, opts: [{ fr: 'Lésion surélevée', en: 'Raised lesion' }, { fr: 'Bulbes terminaux', en: 'Terminal bulbs' }], ok: 1,
      why: { fr: GL('VHS') + ' : vrai ulcère, prend la fluorescéine', en: GL('HSV') + ': a true ulcer that stains' },
      draw: function (P) { P[0].e = eyeIn(P[0], { mode: 'cobalt', dendrite: true }); P[1].e = eyeIn(P[1], { mode: 'cobalt', pseudo: true }); },
      reveal: function (S, P, t) {
        ART.DENDRITE.bulbs.forEach(function (b, k) { var c = P[0].e.map(+b[0], +b[1]); var r = K.div(P[0], 'left:' + (c[0] - 14) + 'px;top:' + (c[1] - 14) + 'px;width:28px;height:28px;border-radius:50%;border:4px solid #d8ff3a;box-shadow:0 0 14px #d8ff3a;z-index:6');
          K.track(r, [[0, { opacity: 0, transform: 'scale(.3)' }], [t + k * .12, { opacity: 0, transform: 'scale(.3)' }, EZ.pop], [t + .3 + k * .12, { opacity: 1, transform: 'scale(1.3)' }], [t + .6 + k * .12, { opacity: 1, transform: 'scale(1)' }]]); });
        var c = P[0].e.map(446, 268); loopPx(P[0], c[0], c[1], 110, 76, t + .6, 12);
        sticker(S, SX(0), SY(0), H.t({ fr: 'bulbes', en: 'bulbs' }), t + .9, -4);
        sticker(S, SX(1), SY(1), H.t({ fr: 'sans bulbes', en: 'no bulbs' }), t + 1.0, 4);
        return [['sticker-1', H.t({ fr: 'bulbes', en: 'bulbs' }), t + 1.35], ['sticker-2', H.t({ fr: 'sans bulbes', en: 'no bulbs' }), t + 1.45]];
      } },
    dpv: { hook: { fr: 'DPV simple<br>ou ' + GL('déchirure') + '&nbsp;?', en: 'Simple PVD<br>or ' + GL('tear') + '?' },
      labels: [{ fr: 'DPV simple', en: 'Simple PVD' }, { fr: 'DPV + déchirure', en: 'PVD + tear' }],
      q: { fr: 'Quel signe annonce la déchirure ?', en: 'Which sign points to the tear?' }, opts: [{ fr: 'Poussière de tabac', en: 'Tobacco dust' }, { fr: 'Anneau de Weiss', en: 'Weiss ring' }], ok: 0,
      why: { fr: GL('Signe de Shafer') + ' : rétine en urgence', en: GL('Shafer sign') + ': urgent retina referral' },
      draw: function (P) { P[0].e = place(P[0], ART.vitreous({}), [0, 0, 420, 460], [250, 6, PW - 500, PH - 12]); P[1].e = place(P[1], ART.vitreous({ dust: true }), [0, 0, 420, 460], [250, 6, PW - 500, PH - 12]); },
      reveal: function (S, P, t) {
        var c = P[1].e.map(282, 260); loopPx(P[1], c[0], c[1], 90, 88, t + .1, 18);
        var w = P[0].e.map(320, 150); loopPx(P[0], w[0], w[1], 40, 36, t + .5, 5);
        sticker(S, SX(1), SY(1), H.t({ fr: 'signe de Shafer', en: 'Shafer sign' }), t + .5, 4);
        sticker(S, SX(0), SY(0), H.t({ fr: 'Weiss seul', en: 'Weiss only' }), t + .7, -4);
        return [['sticker-1', H.t({ fr: 'signe de Shafer', en: 'Shafer sign' }), t + .95], ['sticker-2', H.t({ fr: 'Weiss seul', en: 'Weiss only' }), t + 1.15]];
      } },
    anisocorie: { hook: { fr: 'Grande<br>ou ' + GL('petite') + '&nbsp;?', en: 'Large<br>or ' + GL('small') + '?' },
      labels: [{ fr: 'Lumière', en: 'Light' }, { fr: 'Obscurité', en: 'Dark' }],
      q: { fr: 'L’écart grandit à l’obscurité. Laquelle est anormale ?', en: 'Bigger gap in the dark. Which is abnormal?' }, opts: [{ fr: 'La grande', en: 'Large pupil' }, { fr: 'La petite', en: 'Small pupil' }], ok: 1,
      why: { fr: 'Écart à l’obscurité : la petite, ' + GL('Horner'), en: 'Bigger in the dark: small pupil, ' + GL('Horner') },
      draw: function (P) {
        [[26, 21], [66, 30]].forEach(function (r, i) { var p = P[i];
          p.r = eyeIn(p, { pupil: r[0] }, [150, 40, 320, 270]); p.l = eyeIn(p, { pupil: r[1] }, [490, 40, 320, 270]);
          var ic = i ? '<svg viewBox="0 0 60 60"><path d="M40,8 A24,24 0 1,0 52,40 A18,18 0 1,1 40,8 Z" fill="#c9ceff"/></svg>' : '<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="12" fill="#d8ff3a"/>' + [0, 45, 90, 135, 180, 225, 270, 315].map(function (a) { var r2 = a * Math.PI / 180; return '<line x1="' + (30 + Math.cos(r2) * 18).toFixed(1) + '" y1="' + (30 + Math.sin(r2) * 18).toFixed(1) + '" x2="' + (30 + Math.cos(r2) * 27).toFixed(1) + '" y2="' + (30 + Math.sin(r2) * 27).toFixed(1) + '" stroke="#d8ff3a" stroke-width="4" stroke-linecap="round"/>'; }).join('') + '</svg>';
          K.div(p, 'left:40px;top:139px;width:72px;height:72px', ic); });
      },
      reveal: function (S, P, t) {
        var c = P[1].l.map(450, 280); loopPx(P[1], c[0], c[1], 58, 56, t + .1, 9);
        sticker(S, SX(1) + 440, SY(1) - 34, H.t({ fr: 'ne se dilate pas', en: 'won’t dilate' }), t + .5, 4, 38);
        return [['sticker-2', H.t({ fr: 'ne se dilate pas', en: 'won’t dilate' }), t + .95]];
      } },
    occlusions: { hook: { fr: 'Artère ou veine<br>' + GL('bouchée') + '&nbsp;?', en: 'Artery or vein<br>' + GL('blocked') + '?' },
      labels: [{ fr: 'Patient 1', en: 'Patient 1' }, { fr: 'Patient 2', en: 'Patient 2' }],
      q: { fr: 'Lequel est un AVC de l’œil ?', en: 'Which one is an eye stroke?' }, opts: [{ fr: 'Tache rouge cerise', en: 'Cherry-red spot' }, { fr: 'Sang partout', en: 'Blood everywhere' }], ok: 0,
      why: { fr: GL('OACR') + ' : centre d’AVC, tout de suite', en: GL('CRAO') + ': stroke centre, right now' },
      draw: function (P) { P[0].e = place(P[0], ART.fundus({ kind: 'crao', bg: 'none' }), [0, 0, 440, 400], [250, 6, PW - 500, PH - 12]); P[1].e = place(P[1], ART.fundus({ kind: 'crvo', bg: 'none' }), [0, 0, 440, 400], [250, 6, PW - 500, PH - 12]); },
      reveal: function (S, P, t) {
        var c = P[0].e.map(224, 216); loopPx(P[0], c[0], c[1], 44, 40, t + .1, 21);
        sticker(S, SX(0), SY(0), H.t({ fr: 'OACR', en: 'CRAO' }), t + .5, -4);
        sticker(S, SX(1), SY(1), H.t({ fr: 'sang et tonnerre', en: 'blood and thunder' }), t + .7, 4, 36);
        return [['sticker-1', H.t({ fr: 'OACR', en: 'CRAO' }), t + .95], ['sticker-2', H.t({ fr: 'sang et tonnerre', en: 'blood and thunder' }), t + 1.15]];
      } },
    lentille: { hook: { fr: 'Lentille<br>ou ' + GL('pas') + '&nbsp;?', en: 'Contact lens<br>or ' + GL('not') + '?' },
      labels: [{ fr: 'Avec lentilles', en: 'Lens wearer' }, { fr: 'Sans lentilles', en: 'No lenses' }],
      q: { fr: 'Lequel exige une fluoroquinolone ?', en: 'Which one needs a fluoroquinolone?' }, opts: [{ fr: 'Non-porteur', en: 'Non-wearer' }, { fr: 'Porteur de lentilles', en: 'Lens wearer' }], ok: 1,
      why: { fr: 'Aucun pansement ; lentilles : ' + GL('fluoroquinolone'), en: 'No patch; lens wearer: ' + GL('fluoroquinolone') },
      draw: function (P) { P[0].e = eyeIn(P[0], { mode: 'cobalt', patch: true, lensRing: true }); P[1].e = eyeIn(P[1], { mode: 'cobalt', scratch: true });
        K.div(P[0], 'left:' + (PW - 170) + 'px;top:' + (PH / 2 - 60) + 'px;width:130px;height:120px', '<svg viewBox="0 0 130 120"><path d="M10,84 Q65,4 120,84" fill="#dfe3ff" fill-opacity=".25" stroke="#ffffff" stroke-width="6"/><path d="M10,84 Q65,96 120,84" fill="none" stroke="#ffffff" stroke-width="4" opacity=".7"/></svg>'); },
      reveal: function (S, P, t) {
        var c = P[0].e.map(446, 264); loopPx(P[0], c[0], c[1], 70, 58, t + .1, 14);
        var pt = K.div(P[0], 'left:' + (PW - 250) + 'px;top:30px;width:220px;height:150px;z-index:7', '<svg viewBox="0 0 220 150"><path d="M10,40 L60,60 M210,40 L160,60" stroke="#c9ceff" stroke-width="6"/><ellipse cx="110" cy="75" rx="60" ry="44" fill="#eef0ff" stroke="#0a0f40" stroke-width="5"/><path class="x" d="M70,40 L150,110 M150,40 L70,110" stroke="#ff5a4f" stroke-width="14" stroke-linecap="round" fill="none"/></svg>');
        K.track(pt, [[0, { opacity: 0, transform: 'translateY(-30px)' }], [t + .5, { opacity: 0, transform: 'translateY(-30px)' }, EZ.out], [t + .8, { opacity: 1, transform: 'translateY(0px)' }]]);
        K.draw(pt.querySelector('.x'), t + .85, .35, EZ.out);
        sticker(S, SX(0), SY(0), H.t({ fr: 'Pseudomonas', en: 'Pseudomonas' }), t + 1.1, -4, 38);
        return [['sticker-1', 'Pseudomonas', t + 1.55]];
      } },
    uveite: { hook: { fr: 'Uvéite<br>ou ' + GL('crise') + '&nbsp;?', en: 'Uveitis<br>or ' + GL('AACG') + '?' },
      labels: [{ fr: 'Patient 1', en: 'Patient 1' }, { fr: 'Patient 2', en: 'Patient 2' }],
      q: { fr: 'Œil rouge, vision floue. Quel signe tranche ?', en: 'Red eye, blurry vision. Which sign decides?' }, opts: [{ fr: 'La pupille', en: 'The pupil' }, { fr: 'La rougeur', en: 'The redness' }], ok: 0,
      tree: true,
      draw: function (P) { P[0].e = eyeIn(P[0], { red: true, flush: true, pupil: 30, kp: true }); P[1].e = eyeIn(P[1], { red: true, flush: true, pupil: 84, haze: .32 }); },
      reveal: function (S, P, t) {
        var a = P[0].e.map(450, 280), b = P[1].e.map(450, 280);
        loopPx(P[0], a[0], a[1], 40, 38, t + .1, 3); loopPx(P[1], b[0], b[1], 62, 58, t + .25, 8);
        sticker(S, SX(0), SY(0), H.t({ fr: 'uvéite', en: 'uveitis' }), t + .5, -4);
        sticker(S, SX(1), SY(1), H.t({ fr: 'crise d’angle', en: 'angle closure' }), t + .6, 4);
        return [['sticker-1', H.t({ fr: 'uvéite', en: 'uveitis' }), t + .95], ['sticker-2', H.t({ fr: 'crise d’angle', en: 'angle closure' }), t + 1.05]];
      } },
    dpar: { hook: { fr: 'Droit<br>ou ' + GL('gauche') + '&nbsp;?', en: 'Right<br>or ' + GL('left') + '?' },
      labels: [{ fr: 'Œil droit', en: 'Right eye' }, { fr: 'Œil gauche', en: 'Left eye' }],
      q: { fr: 'Lumière qui balance : où est le DPAR ?', en: 'Swinging light: where is the RAPD?' }, opts: [{ fr: 'Œil droit', en: 'Right eye' }, { fr: 'Œil gauche', en: 'Left eye' }], ok: 1,
      why: { fr: GL('DPAR') + ' : la pupille éclairée se dilate', en: GL('RAPD') + ': the lit pupil dilates' },
      draw: function (P, Tm) {
        // both eyes drawn without a pupil; the pupils are animated overlays (consensual: both change together)
        P.forEach(function (p) { p.e = eyeIn(p, { pupil: 0 }); var c = p.e.map(450, 280), r0 = 60 * p.e.sc;
          p.pu = K.div(p, 'left:' + (c[0] - r0) + 'px;top:' + (c[1] - r0) + 'px;width:' + (2 * r0) + 'px;height:' + (2 * r0) + 'px;border-radius:50%;background:#000;box-shadow:0 0 0 3px #05060f;z-index:40'); });
        // light schedule: on the right eye (pupils small), swing, on the left eye (pupils widen): RAPD OS. Ends on the left eye.
        var keysL = [], keysP = [], t = 0, rev = Tm.rev, on = 0;
        var beam = K.div(P[0].parentNode, 'left:0;top:0;width:300px;height:300px;border-radius:50%;background:radial-gradient(closest-side,transparent 0%,transparent 38%,rgba(255,250,210,.55) 52%,rgba(255,250,210,.2) 72%,transparent);mix-blend-mode:screen;z-index:30');
        var xs = [0, 1].map(function (k) { return 'translate(' + (PXS[k] + PW / 2 - 150) + 'px,' + (PYS[k] + PH / 2 - 150) + 'px)'; });
        while (t < rev) { var side = on % 2; keysL.push([t, { transform: xs[side] }], [Math.min(t + 1.2, rev), { transform: xs[side] }, EZ.io]);
          keysP.push([t, { transform: 'scale(' + (side ? .95 : .55) + ')' }], [Math.min(t + 1.2, rev), { transform: 'scale(' + (side ? .95 : .55) + ')' }]); t += 1.5; on++; }
        keysL.push([rev + .3, { transform: xs[1] }]); keysP.push([rev + .3, { transform: 'scale(.95)' }]);
        K.track(beam, keysL); P.forEach(function (p) { K.track(p.pu, keysP); });
      },
      reveal: function (S, P, t) {
        var c = P[1].e.map(450, 280); loopPx(P[1], c[0], c[1], 70, 66, t + .35, 6);
        sticker(S, SX(1), SY(1), H.t({ fr: 'se dilate', en: 'dilates' }), t + .7, 4);
        return [['sticker-2', H.t({ fr: 'se dilate', en: 'dilates' }), t + 1.15]];
      } }
  };
  X.ORDER = ['episclerite', 'herpes', 'dpv', 'anisocorie', 'occlusions', 'lentille', 'uveite', 'dpar'];

  /* mini tree for « uvéite ou crise » (the sorting questions), A look */
  function tree(S, t0) { // the sorting questions: vision, pupil, fluorescein (keratitis, lens wearer)
    var T = H.t, w = K.div(S, 'left:72px;top:176px;width:876px;height:290px;z-index:20');
    var dot = function (d, fill) { return ' <span style="display:inline-block;width:' + d + 'px;height:' + d + 'px;border-radius:50%;background:' + fill + ';vertical-align:middle;box-shadow:0 0 0 3px #c9ceff"></span>'; };
    var n = function (x, y, wd, txt, hl, fs) { return K.div(w, 'left:' + x + 'px;top:' + y + 'px;width:' + wd + 'px;padding:8px 8px;text-align:center;white-space:nowrap;font:700 ' + (fs || 36) + 'px/1.1 var(--body);color:' + (hl ? '#0a0f40' : '#fff') + ';' + (hl ? 'background:#d8ff3a;border-color:#d8ff3a;box-shadow:0 0 30px rgba(216,255,58,.5)' : ''), txt, 'hud'); };
    var lines = K.svgBox(w, 'left:0;top:0;width:876px;height:290px', '0 0 876 290');
    ['M438,56 L170,104', 'M438,56 L660,104', 'M660,160 L167,206', 'M660,160 L441,206', 'M660,160 L712,206'].forEach(function (d) { K.svgEl('path', { d: d, stroke: '#9da5ff', 'stroke-width': 4, fill: 'none' }, lines); });
    K.svgEl('text', { x: 268, y: 92, fill: '#ff8a80', 'font-size': 40, 'font-weight': 800, 'font-family': 'Atkinson Hyperlegible Next' }, lines).textContent = '✗';
    K.svgEl('text', { x: 560, y: 92, fill: '#d8ff3a', 'font-size': 40, 'font-weight': 800, 'font-family': 'Atkinson Hyperlegible Next' }, lines).textContent = '✓';
    n(258, 0, 360, T({ fr: 'Vision ↓ ?', en: 'Vision ↓?' }));
    n(20, 104, 320, T({ fr: 'Conjonctivite', en: 'Conjunctivitis' }));
    n(520, 104, 280, T({ fr: 'Pupille ?', en: 'Pupil?' }));
    n(0, 206, 334, T({ fr: 'Kératite · lentille', en: 'Keratitis · lens' }) + ' <span style="display:inline-block;width:26px;height:26px;border-radius:50%;background:#1f2cff;box-shadow:inset 0 0 0 6px #1f2cff,inset 0 0 0 13px #d8ff3a;vertical-align:middle"></span>', false, 32);
    n(348, 206, 186, T({ fr: 'Uvéite', en: 'Uveitis' }) + dot(12, '#000'), false, 32);
    n(548, 206, 328, T({ fr: 'Crise', en: 'Angle closure' }) + dot(24, '#000'), true, 32);
    K.rise(w, t0, .3, 20);
    return T({ fr: 'Vision Conjonctivite Pupille Kératite lentille Uvéite Crise', en: 'Vision Conjunctivitis Pupil Keratitis lens Uveitis Angle closure' });
  }

  X.reel = function (S, key) {
    var C = X.TOPICS[key]; H.scene(S);
    var hookTxt = H.t(C.hook), hw = H.words(hookTxt), snap = Math.ceil((.35 + H.need(hw)) * 2) / 2;
    var Q = { snap: snap, tm: snap + .5, rev: snap + 6.5, end: 14.5 }; K.T = Q.end + H.END;
    var eyb = H.t({ fr: 'Défi du jour · Ocelle', en: 'Daily challenge · Ocelle' }); H.eyebrow(S, eyb, .05, Q.end - .2); H.reg('eyebrow', eyb, .35, Q.end - .2, 'label');
    // two panels, lit from frame 1; the slit beam sweeps across as an accent
    var P = PXS.map(function (x, i) { var p = K.div(S, 'left:' + x + 'px;top:' + PYS[i] + 'px;width:' + PW + 'px;height:' + PH + 'px;overflow:hidden', '', 'hud'); p.ov = null; return p; });
    C.draw(P, Q);
    P.forEach(function (p) { var o = K.svgBox(p, 'left:0;top:0;width:100%;height:100%;z-index:10', '0 0 ' + PW + ' ' + PH); p.ov = o; });
    H.beam(S, [[0, 80], [.1, 80], [snap - .2, 1000]], PYS[0] - 40, PYS[1] + PH - PYS[0] + 80, 0, snap + .05, .7);
    H.flash(S, snap, .4);
    C.labels.forEach(function (l, i) { var tx = H.t(l), e = K.div(S, 'left:' + (PXS[i] + 24) + 'px;top:' + (PYS[i] + 16) + 'px;color:#c9ceff;font:700 36px var(--body);z-index:12', tx); K.fade(e, 0, .25, Q.end - .2, .2); H.reg('panel-' + (i + 1), tx, .25, Q.end - .2, 'label'); });
    var hook = K.div(S, 'left:72px;top:190px;width:876px;color:#fff;font-size:126px', '<div class="dsp">' + hookTxt + '</div>');
    K.rise(hook, 0, .25, 30, snap - .1, .1); H.reg('hook', hookTxt, .25, snap - .1);
    // question + 2 options, 6-s answer window
    var qx = H.t(C.q), card = K.div(S, 'left:72px;top:190px;width:876px;padding:24px 30px 28px;z-index:20', '<div class="eyb" style="margin-bottom:10px">' + H.t({ fr: 'Question', en: 'Question' }) + '</div><div style="color:#fff;font:600 46px/1.2 var(--body)">' + qx + '</div>', 'hud');
    K.rise(card, snap, .4, 24, Q.rev, .25);
    var BY = 1226, bs = [], otx = [];
    C.opts.forEach(function (op, i) {
      var b = K.div(S, 'left:72px;top:' + (BY + i * 128) + 'px;width:876px;height:106px;display:flex;align-items:center;gap:26px;padding:0 24px;color:#fff;font:600 46px/1.1 var(--body);z-index:20', '<span class="tile">' + 'AB'[i] + '</span><span>' + H.t(op) + '</span>', 'hud');
      b.style.top = (BY + i * 124) + 'px'; b.style.display = 'flex'; bs.push(b); otx.push(H.t(op));
      K.track(b, [[0, { opacity: 0, transform: 'translateY(30px)' }], [snap + i * .25, { opacity: 0, transform: 'translateY(30px)' }, EZ.out], [snap + i * .25 + .35, { opacity: 1, transform: 'translateY(0px)' }],
        [Q.rev, { opacity: 1, transform: 'translateY(0px)' }], [Q.rev + .01, { opacity: i === C.ok ? 1 : .3, transform: 'translateY(0px)' }], [Q.rev + .6, { opacity: i === C.ok ? 1 : 0, transform: 'translateY(0px)' }]]);
    });
    H.reg('question+options', qx + ' ' + otx.join(' '), snap + .6, Q.rev);
    var tb = K.div(S, 'left:72px;top:1482px;width:740px;height:22px;border-radius:12px;background:rgba(74,87,255,.22);border:2px solid rgba(90,104,255,.9);box-shadow:0 0 18px rgba(74,87,255,.4);overflow:hidden;z-index:20');
    var tf = K.div(tb, 'left:0;top:0;width:100%;height:100%;background:#d8ff3a;box-shadow:0 0 16px rgba(216,255,58,.9);transform-origin:0 50%');
    K.track(tf, [[Q.tm, { transform: 'scaleX(1)' }, EZ.lin], [Q.rev, { transform: 'scaleX(0)' }]]); K.fade(tb, Q.tm - .25, .25, Q.rev, .15);
    for (var s = 0; s < 6; s++) { var dg = K.div(S, 'left:836px;top:1458px;width:112px;text-align:right;color:#d8ff3a;font:700 64px/1 var(--mono);text-shadow:0 0 16px rgba(216,255,58,.7);z-index:20', String(6 - s)); K.cut(dg, Q.tm + s, Q.tm + s + 1); K.track(dg, [[Q.tm + s, { transform: 'scale(1.3)' }, EZ.out], [Q.tm + s + .2, { transform: 'scale(1)' }]]); }
    var ptx = H.t({ fr: 'Ton choix ?', en: 'Your pick?' }), pr = K.div(S, 'left:72px;top:1530px;width:876px;color:#fff;font:800 64px/1 var(--display);letter-spacing:-.03em;z-index:20', ptx);
    K.rise(pr, Q.tm, .4, 16, Q.rev, .2); H.reg('prompt', ptx, Q.tm + .4, Q.rev, 'label');
    // reveal: the one sign, marker loop, then the « pourquoi » line
    H.flash(S, Q.rev, .5);
    var bo = bs[C.ok], hi = K.div(bo, 'inset:-2px;border-radius:22px;background:#d8ff3a;display:flex;align-items:center;gap:26px;padding:0 24px;color:#0a0f40;font:800 46px/1.1 var(--body);box-shadow:0 0 44px rgba(216,255,58,.55)', '<span class="tile" style="background:#0a0f40;box-shadow:none">' + 'AB'[C.ok] + '</span><span>' + H.t(C.opts[C.ok]) + '</span>');
    K.cut(hi, Q.rev);
    if (C.ok === 1) K.track(bo, [[Q.rev + .4, { transform: 'translateY(0px)' }, EZ.io], [Q.rev + .8, { transform: 'translateY(-124px)' }]].concat([]));
    var lt = H.t({ fr: 'Réponse ', en: 'Answer ' }) + 'AB'[C.ok], al = K.div(bo, 'right:-12px;top:-44px;font-size:44px;z-index:31', '<span class="sticker dk">' + lt + '</span>');
    K.pop(al, Q.rev + .2, 6, .45); H.reg('answer-letter', lt, Q.rev + .65, Q.end, 'label');
    H.burst(S, 72 + 24 + 34, BY + 55, Q.rev + .45, 12, 3);
    var labs = C.reveal(S, P, Q.rev) || [];
    labs.forEach(function (l) { H.reg(l[0], l[1], l[2], Q.end, 'label'); });
    if (C.tree) { var tt = tree(S, Q.rev + .3); H.reg('tree', tt, Q.rev + .6, Q.end); }
    else { var why = H.t(C.why), wy = K.div(S, 'left:72px;top:190px;width:876px;color:#fff;font-size:78px;z-index:20', '<div class="dsp">' + why + '</div>'); K.rise(wy, Q.rev + .3, .45, 30); H.reg('why', why, Q.rev + .75, Q.end); }
    H.endCard(S, Q.end);
    return { cuts: [0, snap, Q.tm, Q.rev, Q.end, K.T] };
  };
  return X;
})();
