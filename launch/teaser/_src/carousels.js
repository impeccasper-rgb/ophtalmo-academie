/* 3 carousels, 1080×1350, A look (navy, slit-beam glow, fluo sign) + one quiz slide whose answer is on the last slide. */
var CAR = (function () {
  var C = {};
  function mech(i) { return { html: window.OPH.mech['g-crise'].steps[i].svg, vb: [360, 200] }; }
  function eye(o, sign) { return { html: ART.eye(o), vb: [900, 560], sign: sign }; }
  var RED = { red: true }, END = { fr: 'Abonne-toi', en: 'Follow' };
  C.DATA = {
    c1: { eyb: { fr: 'Œil rouge', en: 'Red eye' }, slides: [
      { type: 'cover', title: { fr: '3 signes d’<span class="fl">urgence</span> devant un œil rouge', en: '3 <span class="fl">red flags</span> in a red eye' }, fig: function () { return eye(RED); } },
      { title: { fr: '1 · La vision <span class="fl">baisse</span>', en: '1 · Vision <span class="fl">drops</span>' }, body: { fr: 'Un œil rouge qui voit moins bien n’est pas une simple conjonctivite. Mesure l’acuité, à chaque fois.', en: 'A red eye that sees less is not a simple conjunctivitis. Check visual acuity, every time.' }, fig: function () { return { html: ART.chart(), vb: [400, 300] }; } },
      { title: { fr: '2 · Vraie douleur, <span class="fl">photophobie</span>', en: '2 · Real pain, <span class="fl">photophobia</span>' }, body: { fr: 'Du sable dans l’œil, ça va. Une douleur profonde ou la lumière qui fait mal : cornée, uvéite ou glaucome aigu.', en: 'Grittiness is fine. Deep pain or light that hurts: cornea, uveitis or acute glaucoma.' }, fig: function () { return eye({ red: true, flush: true }, [450, 280, 212, 196]); } },
      { title: { fr: '3 · Pupille ou cornée <span class="fl">anormale</span>', en: '3 · Abnormal <span class="fl">pupil or cornea</span>' }, body: { fr: 'Pupille mi-dilatée et fixe, cornée trouble ou qui prend la fluorescéine : on ne renvoie pas à la maison.', en: 'Mid-dilated fixed pupil, hazy cornea or a cornea that stains: do not send home.' }, fig: function () { return eye({ red: true, flush: true, pupil: 84, haze: .32 }, [450, 280, 120, 112]); } },
      { type: 'quiz', title: { fr: 'Qui part aux urgences ophtalmo <span class="fl">aujourd’hui</span> ?', en: 'Who goes to eye emergency <span class="fl">today</span>?' }, ok: 1,
        opts: [{ fr: 'Sécrétions collantes, vision 6/6, pas de douleur', en: 'Sticky discharge, 20/20 vision, no pain' }, { fr: 'Halos, douleur, pupille mi-dilatée, PIO 54', en: 'Halos, pain, mid-dilated pupil, IOP 54' }, { fr: 'Tache rouge vif sur le blanc de l’œil, indolore', en: 'Bright red patch on the white of the eye, painless' }] },
      { type: 'answer', ok: 1, title: { fr: 'Réponse : <span class="fl">B</span>', en: 'Answer: <span class="fl">B</span>' }, fig: function () { return eye({ red: true, flush: true, pupil: 84, haze: .32 }, [450, 280, 120, 112]); }, body: { fr: 'B : crise de fermeture de l’angle. A : conjonctivite probable. C : hémorragie sous-conjonctivale, bénigne si elle est isolée.', en: 'B: acute angle closure. A: likely conjunctivitis. C: subconjunctival hemorrhage, benign when isolated.' } }
    ] },
    c2: { eyb: { fr: 'Fluorescéine · bleu cobalt', en: 'Fluorescein · cobalt blue' }, slides: [
      { type: 'cover', title: { fr: 'Fluorescéine : <span class="fl">lis le dessin</span>', en: 'Fluorescein: <span class="fl">read the pattern</span>' }, fig: function () { return eye({ mode: 'cobalt', dendrite: true }); } },
      { title: { fr: 'Une plage <span class="fl">nette</span>', en: 'A <span class="fl">sharp</span> patch' }, body: { fr: 'Abrasion : défaut net à bords lisses, souvent après un traumatisme ou une lentille.', en: 'Abrasion: a sharp defect with smooth edges, often after trauma or a contact lens.' }, fig: function () { return eye({ mode: 'cobalt', patch: true }, [446, 264, 96, 76]); } },
      { title: { fr: 'Des branches <span class="fl">à bulbes</span>', en: 'Branches <span class="fl">with bulbs</span>' }, body: { fr: 'Dendrite : kératite herpétique. Antiviral ; jamais de corticoïde seul.', en: 'Dendrite: herpes simplex keratitis. Antiviral; never a steroid alone.' }, fig: function () { return eye({ mode: 'cobalt', dendrite: true }, [446, 268, 175, 104]); } },
      { title: { fr: 'Une poussière <span class="fl">de points</span>', en: 'A dusting <span class="fl">of dots</span>' }, body: { fr: 'Kératite ponctuée : sécheresse, lentilles, toxicité des gouttes.', en: 'Punctate keratitis: dry eye, contact lenses, drop toxicity.' }, fig: function () { return eye({ mode: 'cobalt', dots: true }); } },
      { type: 'quiz', title: { fr: 'Lequel demande un <span class="fl">antiviral</span> ?', en: 'Which one needs an <span class="fl">antiviral</span>?' }, ok: 2, minis: [{ mode: 'cobalt', dots: true }, { mode: 'cobalt', patch: true }, { mode: 'cobalt', dendrite: true }],
        opts: [{ fr: 'Points diffus', en: 'Diffuse dots' }, { fr: 'Plage nette', en: 'Sharp patch' }, { fr: 'Branches à bulbes', en: 'Branches with bulbs' }] },
      { type: 'answer', ok: 2, title: { fr: 'Réponse : <span class="fl">C</span>', en: 'Answer: <span class="fl">C</span>' }, fig: function () { return eye({ mode: 'cobalt', dendrite: true }, [446, 268, 175, 104]); }, body: { fr: 'Les bulbes au bout des branches signent le virus herpès simplex. Pas de corticoïde seul : il peut aggraver l’ulcère.', en: 'Bulbs at the branch tips point to herpes simplex. No steroid alone: it can worsen the ulcer.' } }
    ] },
    c3: { eyb: { fr: 'Mécanisme dessiné', en: 'Drawn mechanism' }, slides: [
      { type: 'cover', title: { fr: 'Crise d’angle : <span class="fl">4 étapes</span>', en: 'Angle closure: <span class="fl">4 steps</span>' }, fig: function () { return mech(2); } },
      { title: { fr: '1 · Bloc <span class="fl">pupillaire</span>', en: '1 · Pupillary <span class="fl">block</span>' }, body: 1, fig: function () { return mech(1); } },
      { title: { fr: '2 · L’angle <span class="fl">se ferme</span>', en: '2 · The angle <span class="fl">closes</span>' }, body: 2, fig: function () { return mech(2); } },
      { title: { fr: '3 · La PIO <span class="fl">flambe</span>', en: '3 · IOP <span class="fl">spikes</span>' }, body: 3, fig: function () { return mech(3); } },
      { type: 'quiz', title: { fr: 'Quel geste ouvre un <span class="fl">passage</span> à l’aqueuse ?', en: 'Which move opens a <span class="fl">bypass</span> for aqueous?' }, ok: 1,
        opts: [{ fr: 'Dilater la pupille', en: 'Dilate the pupil' }, { fr: 'Iridotomie laser', en: 'Laser iridotomy' }, { fr: 'Corticoïde en gouttes', en: 'Steroid drops' }] },
      { type: 'answer', ok: 1, title: { fr: 'Réponse : <span class="fl">B</span>', en: 'Answer: <span class="fl">B</span>' }, fig: function () { return mech(4); }, body: { fr: 'L’iridotomie perce un petit trou dans l’iris : l’aqueuse passe, l’iris retombe, l’angle se rouvre. Dilater aggraverait le blocage.', en: 'Iridotomy makes a small hole in the iris: aqueous flows through, the iris falls back, the angle reopens. Dilating would worsen the block.' } }
    ] }
  };
  function fig(S, spec, box, beamX) {
    var sc = Math.min(box[2] / spec.vb[0], box[3] / spec.vb[1]), w = spec.vb[0] * sc, h = spec.vb[1] * sc, x = box[0] + (box[2] - w) / 2, y = box[1] + (box[3] - h) / 2;
    var wr = K.div(S, 'left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;height:' + h + 'px', spec.html, 'fig');
    if (spec.sign) { var ov = K.svgBox(wr, 'left:0;top:0;width:100%;height:100%', '0 0 ' + spec.vb[0] + ' ' + spec.vb[1]); var g = spec.sign; K.loop(ov, g[0], g[1], g[2], g[3], 13, null, 0, { filter: 'url(#glowA)', tilt: -.1, w: 6.5 / sc, hw: 10 / sc }); }
    return wr;
  }
  function btn(S, i, txt, y, lit) {
    var b = K.div(S, 'left:72px;top:' + y + 'px;width:936px;min-height:104px;display:flex;align-items:center;gap:24px;padding:16px 24px;font:' + (lit ? 800 : 600) + ' 40px/1.15 var(--body);color:' + (lit ? '#0a0f40' : '#fff'), '<span class="tile"' + (lit ? ' style="background:#0a0f40;box-shadow:none"' : '') + '>' + 'ABC'[i] + '</span><span>' + H.t(txt) + '</span>', 'hud');
    b.style.display = 'flex'; if (lit) { b.style.background = '#d8ff3a'; b.style.borderColor = '#d8ff3a'; b.style.boxShadow = '0 0 44px rgba(216,255,58,.5)'; }
    return b;
  }
  C.slide = function (S, id, n) {
    var D = C.DATA[id], s = D.slides[n - 1], N = D.slides.length; K.T = 1; H.scene(S, 1350); S.style.width = '1080px';
    K.div(S, 'width:0;height:0', '<style>.fl{color:#d8ff3a;text-shadow:0 0 22px rgba(216,255,58,.5)}</style>');
    // static slit-beam glow
    K.div(S, 'left:' + (s.type === 'cover' ? 700 : 820) + 'px;top:0;width:110px;height:1350px;mix-blend-mode:screen;filter:blur(8px);opacity:.5;background:linear-gradient(90deg,transparent,rgba(74,87,255,.5) 35%,rgba(223,227,255,.65) 50%,rgba(74,87,255,.5) 65%,transparent)');
    K.div(S, 'left:72px;top:64px', '<span class="eyb">' + H.t(D.eyb) + '</span>');
    K.div(S, 'right:72px;top:64px;color:#8e94c4;font:700 26px var(--mono);letter-spacing:.1em', n + '/' + N);
    var ty = 118, title = K.div(S, 'left:72px;top:' + ty + 'px;width:936px;color:#fff;font-size:' + (s.type === 'cover' ? 104 : 80) + 'px', '<div class="dsp">' + H.t(s.title) + '</div>');
    var tb = ty + title.offsetHeight;
    if (s.type === 'quiz') {
      var y = tb + 50;
      if (s.minis) { s.minis.forEach(function (o, i) { var x = 72 + i * 320; var t = K.div(S, 'left:' + x + 'px;top:' + y + 'px;width:296px;height:250px;overflow:hidden', '', 'hud'); fig(t, { html: ART.eye(o), vb: [900, 560] }, [-90, 10, 476, 230]); K.div(t, 'left:14px;top:14px', '<span class="tile" style="width:54px;height:54px;font-size:32px">' + 'ABC'[i] + '</span>'); }); y += 290; }
      s.opts.forEach(function (o, i) { var b = btn(S, i, o, y, false); y += b.offsetHeight + 20; });
      K.div(S, 'left:72px;top:' + (y + 26) + 'px;width:936px;color:#d8ff3a;font:800 54px var(--display);letter-spacing:-.02em', H.t({ fr: 'Ta réponse ? Elle est sur la dernière diapo →', en: 'Your answer? It’s on the last slide →' }));
    } else if (s.type === 'answer') {
      var D5 = D.slides[N - 2], y2 = tb + 36;
      D5.opts.forEach(function (o, i) { if (i === s.ok) { var b = btn(S, i, o, y2, true); y2 += b.offsetHeight + 24; } });
      if (s.fig) { fig(S, s.fig(), [72, y2, 936, 400]); y2 += 416; }
      var p = K.div(S, 'left:72px;top:' + y2 + 'px;width:936px;padding:26px 30px 30px;color:#fff;font:600 38px/1.28 var(--body)', H.t(s.body), 'hud');
      // end lockup
      var L = K.div(S, 'left:72px;top:1090px;width:936px;height:170px;display:flex;align-items:center;gap:28px');
      L.style.display = 'flex';
      var mk = K.div(L, 'position:relative;width:150px;height:150px;flex:none'); K.mark(mk, 'left:0;top:0;width:150px;height:150px', { square: true });
      var tx = K.div(L, 'position:relative;flex:1'); K.wordmark(tx, 'position:relative;width:300px', '#ffffff');
      K.div(tx, 'position:relative;margin-top:10px;color:#c9ceff;font:700 40px var(--display);letter-spacing:-.02em', H.t({ fr: 'Décembre 2026', en: 'Coming December 2026' }));
      K.div(L, 'position:relative;font-size:56px;flex:none', '<span class="sticker dk" style="transform:rotate(-5deg);display:inline-flex">' + H.t(END) + '</span>');
    } else {
      var fy = tb + 40, fh = s.type === 'cover' ? 1170 - fy : 900 - fy;
      fig(S, s.fig(), [40, fy, 1000, fh]);
      if (s.body) { var bt = typeof s.body === 'number' ? fx(window.OPH.mech['g-crise'].steps[s.body].label) : H.t(s.body);
        K.div(S, 'left:72px;top:950px;width:936px;padding:26px 30px 30px;color:#fff;font:600 40px/1.28 var(--body)', bt, 'hud'); }
      if (s.type === 'cover') K.div(S, 'right:72px;top:1196px;color:#d8ff3a;font:800 46px var(--display);letter-spacing:-.02em', H.t({ fr: 'Glisse →', en: 'Swipe →' }));
      K.div(S, 'left:72px;top:1270px;color:#8e94c4;font:700 22px var(--mono);letter-spacing:.14em;text-transform:uppercase', H.t({ fr: 'Schéma · Ocelle', en: 'Diagram · Ocelle' }));
    }
    if (s.type !== 'answer') { var lk = K.div(S, 'right:72px;top:1262px;width:150px'); K.wordmark(lk, 'position:relative;width:150px', '#c9ceff'); }
    return {};
  };
  return C;
})();
