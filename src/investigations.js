/* ===== Investigations: hub, pages, practice engine (Observe → Réponds → Révèle), interactive tools =====
   Owner: exercices interactifs. Contract: docs/PLATFORM.md (routes #investigations, #inv-<id>).
   Public API: window.Inv = { render(id), mount(host, id), practice(host, items, opts), tools, gen(spec), keys }
   All drawings are ORIGINAL SCHEMATICS (labelled « schéma »), never presented as real images. */
(function () {
  'use strict';
  var W = window;
  W.OPH = W.OPH || {};

  /* ---------- i18n helpers (I18N may not exist yet) ---------- */
  function lang() { return (W.I18N && W.I18N.lang) || 'fr'; }
  function pick(v) {
    if (W.I18N && typeof W.I18N.pick === 'function') return W.I18N.pick(v);
    return v && typeof v === 'object' ? (v[lang()] || v.fr || v.en || '') : (v == null ? '' : v);
  }
  var KEYS = {};   // every UI string used here, so the web agent can copy them into src/i18n.js
  function S(key, fr, en) {
    KEYS['inv.' + key] = { fr: fr, en: en || '' };
    var L = lang();
    try { var d = W.I18N && W.I18N.dict && W.I18N.dict[L]; if (d && d['inv.' + key] != null) return d['inv.' + key]; } catch (e) { }
    if (L !== 'fr' && typeof W.t === 'function') { var tv = W.t('inv.' + key, null); if (tv && tv !== 'inv.' + key) return tv; }
    return L === 'en' && en ? en : fr;
  }
  function B(fr, en) { return lang() === 'en' ? en : fr; }          // inline bilingual clinical text inside tools
  function E(s) { return U.esc(s); }
  function PE(v) { return U.esc(pick(v)); }
  function PM(v) { return U.md(pick(v)); }
  function num(n, d) { var s = (+n).toFixed(d == null ? 1 : d); return lang() === 'fr' ? s.replace('.', ',') : s; }
  function sgn(n, d) { return (n > 0 ? '+' : n < 0 ? '−' : '') + num(Math.abs(n), d); }
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  function gray(l) { var g = Math.round(clamp(l, 0, 1) * 255); return 'rgb(' + g + ',' + g + ',' + g + ')'; }
  function bump(x, c, w) { var d = (x - c) / w; return Math.exp(-d * d); }
  function P2(x, y) { return x.toFixed(1) + ',' + y.toFixed(1); }
  var _uid = 0; function nid(p) { return (p || 'inv') + '-' + (++_uid); }
  function reduced() { return U.reduced(); }
  function svgPt(svg, ev) { var pt = svg.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY; var m = svg.getScreenCTM(); return m ? pt.matrixTransform(m.inverse()) : { x: 0, y: 0 }; }
  function schemaBadge() { return '<span class="inv-schema">' + S('schema', 'schéma', 'schematic') + '</span>'; }
  function seg(name, list, cur, label) {
    return '<div class="seg inv-seg" role="group" aria-label="' + E(label) + '">' + list.map(function (x) { return '<button type="button" data-' + name + '="' + x[0] + '" aria-pressed="' + (x[0] === cur) + '">' + E(x[1]) + '</button>'; }).join('') + '</div>';
  }
  function setPressed(root, attr, val) { U.$$('[data-' + attr + ']', root).forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-' + attr) === val)); }); }
  function pctHot(x, y, r, vw, vh, label, decisive, ox, oy) { ox = ox || 0; oy = oy || 0; return { x: 100 * (x - ox) / vw, y: 100 * (y - oy) / vh, r: 100 * r / vw, label: label, decisive: decisive !== false }; }

  /* ======================================================================
     FALLBACK FIXTURE — TEST ONLY. Used only when G.OPH.inv is missing
     (data/investigations.js and data/inv-media.js not delivered yet).
     ====================================================================== */
  var FIX = {
    inv: [
      { id: 'bscan', n: 'I1', title: { fr: 'Échographie B', en: 'B-scan ultrasonography' }, en_term: 'B-scan ultrasonography',
        why: { fr: 'Voir le segment postérieur quand le fond d’œil est invisible (cataracte dense, hémorragie du vitré).', en: 'Image the posterior segment when the fundus cannot be seen (dense cataract, vitreous haemorrhage).' },
        how: [{ fr: 'Sonde sur la paupière fermée avec du gel.', en: 'Probe on the closed lid with gel.' }, { fr: 'Coupes transverses, longitudinales puis axiales; étude dynamique (faire bouger l’œil).', en: 'Transverse, longitudinal then axial scans; dynamic study (ask the patient to move the eye).' }],
        normal: [{ fr: 'Vitré anéchogène, paroi postérieure régulière, ombre du nerf optique.', en: 'Echo-free vitreous, smooth posterior wall, optic nerve shadow.' }],
        keys: [{ fr: 'Décollement de rétine : membrane très réflective attachée à la papille.', en: 'Retinal detachment: highly reflective membrane attached at the disc.' }],
        pitfalls: [{ fr: 'Gain trop bas : on manque une hémorragie ou une DPV.', en: 'Gain too low: haemorrhage or PVD can be missed.' }],
        tool: 'bscan-probe', practice: ['fx-bscan-1'] },
      { id: 'ascan', n: 'I2', title: { fr: 'Échographie A (biométrie)', en: 'A-scan (biometry)' }, en_term: 'A-scan biometry',
        why: { fr: 'Mesurer la longueur axiale pour calculer la puissance de l’implant de cataracte.', en: 'Measure axial length to calculate cataract IOL power.' },
        how: [{ fr: 'Sonde perpendiculaire, alignée sur l’axe visuel; pics hauts et nets.', en: 'Probe perpendicular, aligned with the visual axis; tall, sharp spikes.' }],
        normal: [{ fr: 'Longueur axiale adulte ≈ 23–24 mm.', en: 'Adult axial length ≈ 23–24 mm.' }],
        keys: [{ fr: '1 mm d’erreur ≈ 2,5–3 D d’erreur réfractive.', en: '1 mm error ≈ 2.5–3 D refractive error.' }],
        pitfalls: [{ fr: 'Compression cornéenne (contact) : longueur faussement courte.', en: 'Corneal compression (contact): falsely short axial length.' }],
        tool: 'ascan-sim', practice: ['fx-ascan-1'] },
      { id: 'oct', n: 'I3', title: { fr: 'OCT maculaire', en: 'Macular OCT' }, en_term: 'Optical coherence tomography',
        why: { fr: 'Coupe « histologique » de la rétine : liquide, épaisseur, couches.', en: 'An “optical biopsy” of the retina: fluid, thickness, layers.' },
        how: [{ fr: 'Lire de haut en bas : vitré, rétine interne, externe, EPR, choroïde.', en: 'Read top to bottom: vitreous, inner retina, outer retina, RPE, choroid.' }],
        normal: [{ fr: 'Dépression fovéolaire, couches internes absentes au centre.', en: 'Foveal pit, inner layers absent centrally.' }],
        keys: [{ fr: 'Où est le liquide : dans la rétine, sous la rétine ou sous l’EPR ?', en: 'Where is the fluid: within the retina, under it, or under the RPE?' }],
        pitfalls: [{ fr: 'Une seule coupe peut manquer une lésion : regarder tout le cube.', en: 'One B-scan can miss a lesion: review the whole volume.' }],
        tool: 'oct-layers', practice: ['fx-oct-1', 'fx-oct-2'] },
      { id: 'gonio', n: 'I4', title: { fr: 'Gonioscopie', en: 'Gonioscopy' }, en_term: 'Gonioscopy',
        why: { fr: 'Voir l’angle irido-cornéen : ouvert, étroit, fermé ou anormal.', en: 'View the iridocorneal angle: open, narrow, closed or abnormal.' },
        how: [{ fr: 'Pièce sombre, fente courte pour ne pas faire contracter la pupille.', en: 'Dark room, short slit so the pupil does not constrict.' }],
        normal: [{ fr: 'De l’iris vers la cornée : bande ciliaire, éperon scléral, trabéculum, ligne de Schwalbe.', en: 'From iris to cornea: ciliary body band, scleral spur, trabecular meshwork, Schwalbe line.' }],
        keys: [{ fr: 'Structure la plus postérieure visible = degré d’ouverture.', en: 'Most posterior visible structure = how open the angle is.' }],
        pitfalls: [{ fr: 'Trop de lumière ouvre artificiellement l’angle.', en: 'Too much light artificially opens the angle.' }],
        tool: 'gonio-grader', practice: ['fx-gonio-1'] },
      { id: 'fondoeil', n: 'I5', title: { fr: 'Fond d’œil', en: 'Fundus examination' }, en_term: 'Fundoscopy',
        why: { fr: 'Examiner papille, macula, vaisseaux et périphérie.', en: 'Examine disc, macula, vessels and periphery.' },
        how: [{ fr: 'Papille → vaisseaux → macula → périphérie, toujours dans le même ordre.', en: 'Disc → vessels → macula → periphery, always in the same order.' }],
        normal: [{ fr: 'C/D ≈ 0,3, anneau rose respectant la règle ISNT.', en: 'C/D ≈ 0.3, pink rim following the ISNT rule.' }],
        keys: [{ fr: 'Hémorragie papillaire : signe de progression glaucomateuse.', en: 'Disc haemorrhage: sign of glaucoma progression.' }],
        pitfalls: [{ fr: 'Un petit disque peut cacher une excavation pathologique.', en: 'A small disc can hide a pathological cup.' }],
        tool: 'fundus-explorer', practice: ['fx-fo-1'] },
      { id: 'cv', n: 'I6', title: { fr: 'Champ visuel', en: 'Visual field' }, en_term: 'Automated perimetry',
        why: { fr: 'Mesurer la fonction : localiser une atteinte du nerf, du chiasma ou des voies.', en: 'Measure function: localise damage to the nerve, chiasm or pathways.' },
        how: [{ fr: 'Fiabilité d’abord, puis indices, puis forme du défaut.', en: 'Reliability first, then indices, then defect shape.' }],
        normal: [{ fr: 'Tache aveugle à ~15° temporal, légèrement sous l’horizontale.', en: 'Blind spot ~15° temporal, slightly below horizontal.' }],
        keys: [{ fr: 'Méridien horizontal respecté = nerf optique/rétine; vertical = chiasma ou après.', en: 'Horizontal meridian respected = optic nerve/retina; vertical = chiasm or beyond.' }],
        pitfalls: [{ fr: 'Faux positifs élevés : champ faussement « trop bon ».', en: 'High false positives: falsely “too good” field.' }],
        tool: 'vf-reader', practice: ['fx-cv-1'] }
    ],
    practice: [
      { id: 'fx-bscan-1', inv: 'bscan', media: 'fx-m-bscan-rd', level: 1,
        q: { fr: 'Coupe axiale, gain moyen. Quel diagnostic ?', en: 'Axial scan, medium gain. Diagnosis?' },
        options: [{ fr: 'Décollement de rétine', en: 'Retinal detachment' }, { fr: 'Décollement postérieur du vitré', en: 'Posterior vitreous detachment' }, { fr: 'Décollement choroïdien', en: 'Choroidal detachment' }, { fr: 'Hémorragie du vitré', en: 'Vitreous haemorrhage' }],
        answer: 0,
        why: [{ fr: 'Membrane épaisse, très réflective, en V, insérée à la papille.', en: 'Thick, highly reflective V-shaped membrane inserting at the disc.' }, { fr: 'Une DPV est fine et peu réflective.', en: 'A PVD is thin and weakly reflective.' }, { fr: 'Un décollement choroïdien forme des dômes qui n’atteignent pas la papille.', en: 'A choroidal detachment forms domes that do not reach the disc.' }, { fr: 'Une hémorragie donne des échos ponctués, sans membrane.', en: 'Haemorrhage gives dot-like echoes, no membrane.' }],
        reveal: { fr: 'Insertion à la papille + réflectivité élevée = rétine.', en: 'Insertion at the disc + high reflectivity = retina.' } },
      { id: 'fx-ascan-1', inv: 'ascan', media: 'fx-m-ascan-long', level: 2,
        q: { fr: 'Les calipers mesurent 26,5 mm. Quel profil ?', en: 'Calipers read 26.5 mm. Which profile?' },
        options: [{ fr: 'Myopie axiale', en: 'Axial myopia' }, { fr: 'Hypermétropie axiale', en: 'Axial hyperopia' }, { fr: 'Œil de longueur normale', en: 'Normal-length eye' }],
        answer: 0,
        why: [{ fr: '> 25–26 mm : œil long, myope.', en: '> 25–26 mm: long, myopic eye.' }, { fr: 'Un œil hypermétrope est court (< 22 mm).', en: 'A hyperopic eye is short (< 22 mm).' }, { fr: 'Normal ≈ 23–24 mm.', en: 'Normal ≈ 23–24 mm.' }],
        reveal: { fr: 'Le pic rétinien est loin : longueur axiale augmentée.', en: 'The retinal spike is far away: increased axial length.' } },
      { id: 'fx-oct-1', inv: 'oct', media: 'fx-m-oct-srf', level: 1,
        q: { fr: 'Où se trouve l’espace hyporéflectif ?', en: 'Where is the hyporeflective space?' },
        options: [{ fr: 'Dans la rétine (liquide intrarétinien)', en: 'Within the retina (intraretinal fluid)' }, { fr: 'Sous la rétine, au-dessus de l’EPR (liquide sous-rétinien)', en: 'Under the retina, above the RPE (subretinal fluid)' }, { fr: 'Sous l’EPR (décollement de l’EPR)', en: 'Under the RPE (pigment epithelial detachment)' }],
        answer: 1,
        why: [{ fr: 'Les couches internes ne contiennent pas de kystes.', en: 'The inner layers contain no cysts.' }, { fr: 'La rétine neurosensorielle est soulevée, l’EPR reste plat.', en: 'The neurosensory retina is lifted, the RPE stays flat.' }, { fr: 'L’EPR n’est pas soulevé.', en: 'The RPE is not elevated.' }],
        reveal: { fr: 'EPR plat sous un dôme hyporéflectif = liquide sous-rétinien.', en: 'Flat RPE under a hyporeflective dome = subretinal fluid.' } },
      { id: 'fx-oct-2', inv: 'oct', media: 'fx-m-oct-ped', level: 2,
        q: { fr: 'Quelle structure est soulevée ?', en: 'Which structure is elevated?' },
        options: [{ fr: 'La couche des fibres nerveuses', en: 'The nerve fibre layer' }, { fr: 'La rétine neurosensorielle seule', en: 'The neurosensory retina alone' }, { fr: 'L’épithélium pigmentaire (DEP)', en: 'The pigment epithelium (PED)' }],
        answer: 2,
        why: [{ fr: 'Les couches internes suivent simplement le soulèvement.', en: 'Inner layers just follow the elevation.' }, { fr: 'Ici l’EPR lui-même forme le dôme.', en: 'Here the RPE itself forms the dome.' }, { fr: 'La bande EPR est soulevée au-dessus de la membrane de Bruch restée plate.', en: 'The RPE band is lifted above a flat Bruch membrane.' }],
        reveal: { fr: 'L’EPR forme le toit du dôme; la membrane de Bruch reste en place.', en: 'The RPE forms the roof of the dome; Bruch membrane stays in place.' } },
      { id: 'fx-gonio-1', inv: 'gonio', media: 'fx-m-gonio-2', level: 2,
        q: { fr: 'Quelle est la structure la plus postérieure visible ?', en: 'What is the most posterior visible structure?' },
        options: [{ fr: 'Ligne de Schwalbe', en: 'Schwalbe line' }, { fr: 'Trabéculum', en: 'Trabecular meshwork' }, { fr: 'Éperon scléral', en: 'Scleral spur' }, { fr: 'Bande ciliaire', en: 'Ciliary body band' }],
        answer: 1,
        why: [{ fr: 'On voit plus que la ligne de Schwalbe.', en: 'More than the Schwalbe line is visible.' }, { fr: 'Le trabéculum est visible, l’éperon est caché par l’iris : Shaffer 2.', en: 'Meshwork visible, spur hidden by the iris: Shaffer 2.' }, { fr: 'La bande blanche de l’éperon est cachée.', en: 'The white spur band is hidden.' }, { fr: 'La bande ciliaire n’est pas visible.', en: 'The ciliary band is not visible.' }],
        reveal: { fr: 'Iris convexe juste sous le trabéculum : angle étroit (Shaffer 2).', en: 'Convex iris just below the meshwork: narrow angle (Shaffer 2).' } },
      { id: 'fx-fo-1', inv: 'fondoeil', media: 'fx-m-fo-dh', level: 2,
        q: { fr: 'Quel signe voit-on au bord de la papille ?', en: 'What sign is at the disc margin?' },
        options: [{ fr: 'Hémorragie papillaire', en: 'Disc haemorrhage' }, { fr: 'Nodule cotonneux', en: 'Cotton wool spot' }, { fr: 'Drusen', en: 'Drusen' }],
        answer: 0,
        why: [{ fr: 'Petite hémorragie en flammèche au bord inférotemporal du disque.', en: 'Small flame haemorrhage at the inferotemporal disc margin.' }, { fr: 'Un nodule cotonneux est blanc et flou.', en: 'A cotton wool spot is white and fluffy.' }, { fr: 'Les drusen sont jaunes, maculaires.', en: 'Drusen are yellow and macular.' }],
        reveal: { fr: 'Hémorragie en flammèche au bord du disque = signe de progression glaucomateuse.', en: 'Flame haemorrhage at the disc margin = glaucoma progression sign.' } },
      { id: 'fx-cv-1', inv: 'cv', media: 'fx-m-cv-bt', level: 1,
        q: { fr: 'Champs fiables. Où est la lésion ?', en: 'Reliable fields. Where is the lesion?' },
        options: [{ fr: 'Nerf optique', en: 'Optic nerve' }, { fr: 'Chiasma', en: 'Chiasm' }, { fr: 'Bandelette optique droite', en: 'Right optic tract' }],
        answer: 1,
        why: [{ fr: 'Une atteinte du nerf respecte le méridien horizontal, sur un œil.', en: 'Nerve damage respects the horizontal meridian, in one eye.' }, { fr: 'Pertes temporales aux deux yeux respectant le méridien vertical.', en: 'Temporal loss in both eyes respecting the vertical meridian.' }, { fr: 'Une lésion rétrochiasmatique donne une hémianopsie homonyme.', en: 'A retrochiasmal lesion gives a homonymous hemianopia.' }],
        reveal: { fr: 'Hémianopsie bitemporale : chiasma.', en: 'Bitemporal hemianopia: chiasm.' } }
    ],
    media: {
      'fx-m-bscan-rd': { kind: 'gen', gen: 'bscan:rd:axial', alt: { fr: 'Schéma d’échographie B', en: 'B-scan schematic' } },
      'fx-m-ascan-long': { kind: 'gen', gen: 'ascan:long', alt: { fr: 'Schéma d’A-scan', en: 'A-scan schematic' } },
      'fx-m-oct-srf': { kind: 'gen', gen: 'oct:srf', alt: { fr: 'Schéma d’OCT maculaire', en: 'Macular OCT schematic' } },
      'fx-m-oct-ped': { kind: 'gen', gen: 'oct:ped', alt: { fr: 'Schéma d’OCT maculaire', en: 'Macular OCT schematic' } },
      'fx-m-gonio-2': { kind: 'gen', gen: 'gonio:2', alt: { fr: 'Schéma de gonioscopie', en: 'Gonioscopy schematic' } },
      'fx-m-fo-dh': { kind: 'gen', gen: 'fundus:dischem', alt: { fr: 'Schéma de fond d’œil droit', en: 'Right fundus schematic' } },
      'fx-m-cv-bt': { kind: 'gen', gen: 'vf:bitemporal', alt: { fr: 'Schéma de champs visuels', en: 'Visual field schematic' } }
    }
  };
  /* ===================== end FALLBACK FIXTURE ===================== */

  var ORDER = ['bscan', 'ascan', 'oct', 'gonio', 'fondoeil', 'cv'];
  function usingFixture() { return !(W.OPH.inv && W.OPH.inv.length); }
  function invList() {
    var l = usingFixture() ? FIX.inv : W.OPH.inv;
    return l.slice().sort(function (a, b) { var ia = ORDER.indexOf(a.id), ib = ORDER.indexOf(b.id); return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib); });
  }
  function invById(id) { return invList().filter(function (x) { return x.id === id; })[0] || null; }
  function practicePool() { return (W.OPH.invPractice && W.OPH.invPractice.length) ? W.OPH.invPractice : (usingFixture() ? FIX.practice : []); }
  function mediaById(id) {
    if (id && typeof id === 'object') return id;
    var m = (W.OPH.invMedia && W.OPH.invMedia[id]) || (W.OPH.imageCasesMedia && W.OPH.imageCasesMedia[id]) || FIX.media[id] || null;
    return m;
  }
  function practiceFor(inv) {
    var pool = practicePool(), byId = {};
    pool.forEach(function (p) { byId[p.id] = p; });
    var list = [];
    if (inv.practice && inv.practice.length) inv.practice.forEach(function (pid) {
      if (byId[pid]) list.push(byId[pid]);
      else { var m = W.OPH.invMedia && W.OPH.invMedia[pid]; if (m && m.q) list.push(Object.assign({ id: pid, inv: inv.id, media: pid }, m)); }
    });
    if (!list.length) list = pool.filter(function (p) { return p.inv === inv.id; });
    return list.filter(function (p) { return p && p.options && p.options.length; }).sort(function (a, b) { return (a.level || 1) - (b.level || 1); });
  }
  function invStore() { if (!Store.p.inv) Store.p.inv = {}; return Store.p.inv; }
  function progressFor(inv) {
    var items = practiceFor(inv), st = (Store.p && Store.p.inv) || {}, ok = 0, seen = 0;
    items.forEach(function (it) { var r = st[it.id]; if (r) { seen++; if (r.ok) ok++; } });
    return { n: items.length, ok: ok, seen: seen };
  }

  /* ======================================================================
     GENERATORS — pure SVG schematics, reused by tools and by practice media
     (media { kind:'gen', gen:'oct:srf' } etc.). Each returns { svg, hot:[…] }.
     ====================================================================== */
  var Gen = {};

  /* ---------- A-scan ---------- */
  var EYES = { normal: { al: 23.5, acd: 3.2, lt: 4.0 }, short: { al: 21.0, acd: 2.6, lt: 4.6 }, long: { al: 26.5, acd: 3.6, lt: 3.8 } };
  var ASX = function (mm) { return 34 + mm * 18; }, ASB = 190, ASH = 160;
  function ascanSpikes(eye) {
    var e = EYES[eye] || EYES.normal, r = U.rng(eye.length * 97 + 13), sp = [
      { id: 'cornea', mm: 0, h: .96, w: .12 }, { id: 'cornea2', mm: .55, h: .82, w: .12 },
      { id: 'lensA', mm: e.acd, h: .78, w: .14 }, { id: 'lensP', mm: e.acd + e.lt, h: .66, w: .14 },
      { id: 'retina', mm: e.al, h: 1, w: .12 }, { id: 'sclera', mm: e.al + .6, h: .9, w: .12 }
    ];
    for (var k = 0; k < 16; k++) { var mm = e.al + 2 + k * .3 + r() * .2; sp.push({ id: k === 0 ? 'orbit' : 'orbitx', mm: mm, h: (.55 - k * .03) * (.6 + .4 * r()), w: .12 }); }
    return sp;
  }
  var SPIKE_NAMES = {
    cornea: { fr: 'Cornée', en: 'Cornea' }, lensA: { fr: 'Capsule antérieure du cristallin', en: 'Anterior lens capsule' },
    lensP: { fr: 'Capsule postérieure du cristallin', en: 'Posterior lens capsule' }, retina: { fr: 'Rétine', en: 'Retina' },
    sclera: { fr: 'Sclère', en: 'Sclera' }, orbit: { fr: 'Graisse orbitaire', en: 'Orbital fat' }
  };
  Gen.ascan = function (o) {
    o = o || {}; var eye = o.eye || 'normal', sp = ascanSpikes(eye), r = U.rng(7), pts = [];
    for (var mm = -0.6; mm <= 32; mm += .04) {
      var v = 0; sp.forEach(function (s) { var d = Math.abs(mm - s.mm); if (d < s.w) v = Math.max(v, s.h * (1 - d / s.w)); });
      if (v < .02) v = .01 + r() * .015;
      pts.push(P2(ASX(Math.max(mm, -.6)), ASB - v * ASH));
    }
    var ticks = '';
    for (var t = 0; t <= 30; t += 5) ticks += '<line x1="' + ASX(t) + '" y1="' + ASB + '" x2="' + ASX(t) + '" y2="' + (ASB + 5) + '" stroke="#5f8f6a"/><text x="' + ASX(t) + '" y="' + (ASB + 17) + '" text-anchor="middle" class="inv-ax">' + t + '</text>';
    var lab = '';
    if (o.labels) [['cornea', 5, 40, 'start'], ['lensA', 5, 56, 'start'], ['lensP', 5, 76, 'start'], ['retina', -5, 40, 'end'], ['sclera', 5, 40, 'start'], ['orbit', 5, 118, 'start']].forEach(function (p) {
      var s = sp.filter(function (q) { return q.id === p[0]; })[0];
      lab += '<text x="' + (ASX(s.mm) + p[1]) + '" y="' + p[2] + '" text-anchor="' + p[3] + '" class="inv-alab">' + E(pick(SPIKE_NAMES[p[0]])) + '</text>';
    });
    var svg = '<svg viewBox="0 0 640 214" class="inv-svg inv-ascan" role="img" aria-label="' + E(S('ascan.aria', 'Schéma de tracé A-scan', 'A-scan trace schematic')) + '">' +
      '<rect width="640" height="214" fill="#07140c"/>' +
      '<g stroke="#12301c" stroke-width="1">' + [30, 70, 110, 150].map(function (y) { return '<line x1="34" x2="620" y1="' + y + '" y2="' + y + '"/>'; }).join('') + '</g>' +
      '<line x1="34" x2="620" y1="' + ASB + '" y2="' + ASB + '" stroke="#2f6b3e"/>' + ticks +
      '<text x="620" y="' + (ASB + 17) + '" text-anchor="end" class="inv-ax">mm</text>' +
      '<polyline points="' + pts.join(' ') + '" fill="none" stroke="#7dff9a" stroke-width="1.6" stroke-linejoin="round"/>' + lab +
      (o.inner || '') + '</svg>';
    var ret = sp.filter(function (q) { return q.id === 'retina'; })[0];
    return { svg: svg, sp: sp, hot: [pctHot(ASX(ret.mm), ASB - ASH * .5, 16, 640, 214, { fr: 'Pic rétinien : ' + num(EYES[eye].al) + ' mm', en: 'Retinal spike: ' + num(EYES[eye].al) + ' mm' })] };
  };

  /* ---------- B-scan ---------- */
  var BA = { x: 20, y: 150 }, BC = { x: 205, y: 150 }, BR = 150, BSPAN = 26;
  function bRay(aDeg) { var a = aDeg * Math.PI / 180, d = { x: Math.cos(a), y: Math.sin(a) }, vd = (BA.x - BC.x) * d.x + (BA.y - BC.y) * d.y, vv = (BA.x - BC.x) * (BA.x - BC.x) + (BA.y - BC.y) * (BA.y - BC.y); var t = -vd + Math.sqrt(vd * vd - (vv - BR * BR)); return { d: d, t: t }; }
  function bPt(aDeg, off) { var r = bRay(aDeg); return { x: BA.x + (r.t - off) * r.d.x, y: BA.y + (r.t - off) * r.d.y }; }
  var BSCAN_DISC = { axial: 0, long: 22, trans: 0 };   // transverse = posterior section (probe near the limbus): nerve shadow is the landmark
  function bPath(fn, a0, a1, step) { var out = [], s = step || 1; if (a1 < a0) s = -s; for (var a = a0; s > 0 ? a <= a1 + 1e-6 : a >= a1 - 1e-6; a += s) { var p = bPt(a, fn(a)); out.push(P2(p.x, p.y)); } return 'M' + out.join(' L'); }
  function bscanMembranes(path, ori, phase) {
    phase = phase || 0; var disc = BSCAN_DISC[ori], out = [];
    if (path === 'rd') {
      var amp = 6 * phase;
      if (disc == null) out.push({ d: bPath(function (a) { return 34 + 7 * Math.sin(a * .35) + amp * Math.sin(a * .25 + 1); }, -BSPAN, BSPAN), w: 3.2, r: 1 });
      else (ori === 'long' ? [[disc, -BSPAN]] : [[disc, -BSPAN], [disc, BSPAN]]).forEach(function (arm) {
        out.push({ d: bPath(function (a) { var u = Math.min(1, Math.abs(a - arm[0]) / 15); u = u * u * (3 - 2 * u); return u * (44 + 6 * Math.sin(Math.abs(a - arm[0]) * .5)) + amp * u * Math.sin(Math.abs(a - arm[0]) * .3); }, arm[0], arm[1]), w: 3.2, r: 1 });
      });
    } else if (path === 'cd') {
      var domes = ori === 'axial' ? [[-BSPAN, -5], [BSPAN, 5]] : ori === 'long' ? [[-BSPAN, 6]] : [[-BSPAN, -2], [BSPAN, 2]];
      domes.forEach(function (dm) { out.push({ d: bPath(function (a) { var u = (a - dm[0]) / (dm[1] - dm[0]), v = u < .25 ? (.25 - u) / .25 * .55 : (u - .25) / .75; return 58 * Math.pow(Math.max(0, 1 - v * v), .65); }, dm[0], dm[1]), w: 5, r: .92 }); });
    } else if (path === 'pvd') {
      out.push({ d: bPath(function (a) { return 66 + 9 * Math.sin(a * .13) + 16 * phase * Math.sin(a * .22 + .5); }, -23, 23), w: 1.8, r: .45 });
    }
    return out;
  }
  Gen.bscan = function (o) {
    o = o || {}; var path = o.path || 'normal', ori = o.ori || 'axial', gain = o.gain == null ? 70 : o.gain, phase = o.phase || 0;
    var f = .35 + gain / 70, op = function (r) { return clamp(r * f, 0, 1).toFixed(2); }, cid = nid('bs'), r = U.rng(31), h = '';
    var e1 = bPt(-BSPAN, -80), e2 = bPt(BSPAN, -80);
    h += '<defs><clipPath id="' + cid + '"><path d="M' + BA.x + ',' + BA.y + ' L' + P2(e1.x, e1.y) + ' L' + P2(e2.x, e2.y) + ' Z"/></clipPath>' +
      '<linearGradient id="' + cid + 'g" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>';
    h += '<rect width="400" height="300" fill="#000"/><g clip-path="url(#' + cid + ')"><rect width="400" height="300" fill="#060606"/>';
    // initial echo
    h += '<rect x="20" y="0" width="34" height="300" fill="url(#' + cid + 'g)" opacity="' + op(.75) + '"/>';
    if (ori === 'axial') h += '<path d="M66,108 Q56,150 66,192" fill="none" stroke="#fff" stroke-width="2.4" opacity="' + op(.7) + '"/><path d="M104,112 Q116,150 104,188" fill="none" stroke="#fff" stroke-width="2.4" opacity="' + op(.62) + '"/>';
    // orbital fat (bright, speckled) behind the wall
    var fat = []; for (var a = -BSPAN - 2; a <= BSPAN + 2; a += 1) { var p = bPt(a, -2); fat.push(P2(p.x, p.y)); }
    for (a = BSPAN + 2; a >= -BSPAN - 2; a -= 1) { p = bPt(a, -70); fat.push(P2(p.x, p.y)); }
    h += '<polygon points="' + fat.join(' ') + '" fill="#9a9a9a" opacity="' + op(.5) + '"/>';
    var dots = ''; for (var k = 0; k < 220; k++) { var aa = -BSPAN + r() * BSPAN * 2, q = bPt(aa, -4 - r() * 62); dots += '<circle cx="' + q.x.toFixed(1) + '" cy="' + q.y.toFixed(1) + '" r="' + (1 + r() * 1.6).toFixed(1) + '"/>'; }
    h += '<g fill="#fff" opacity="' + op(.45) + '">' + dots + '</g>';
    // optic nerve shadow
    var disc = BSCAN_DISC[ori];
    if (disc != null) { var n1 = bPt(disc - 3, -1), n2 = bPt(disc + 3, -1), n3 = bPt(disc + 4.5, -75), n4 = bPt(disc - 4.5, -75); h += '<polygon points="' + [n1, n2, n3, n4].map(function (z) { return P2(z.x, z.y); }).join(' ') + '" fill="#050505"/>'; }
    // posterior wall
    h += '<path d="' + bPath(function () { return 0; }, -BSPAN - 2, BSPAN + 2) + '" fill="none" stroke="#f2f2f2" stroke-width="5" opacity="' + op(1) + '"/>';
    // high-gain noise in the vitreous
    if (gain > 55) { var nz = ''; for (k = 0; k < 120; k++) { var ab = -BSPAN + r() * BSPAN * 2, qq = bPt(ab, 20 + r() * 220); nz += '<circle cx="' + qq.x.toFixed(1) + '" cy="' + qq.y.toFixed(1) + '" r=".8"/>'; } h += '<g fill="#fff" opacity="' + ((gain - 55) / 45 * .28).toFixed(2) + '">' + nz + '</g>'; }
    // pathology
    var mem = bscanMembranes(path, ori, phase);
    if (o.ghost && (path === 'pvd' || path === 'rd')) bscanMembranes(path, ori, 1).forEach(function (m) { h += '<path d="' + m.d + '" fill="none" stroke="#7fd3ff" stroke-width="1.4" stroke-dasharray="4 4" opacity=".75"/>'; });
    mem.forEach(function (m) { h += '<path d="' + m.d + '" fill="none" stroke="#fff" stroke-width="' + m.w + '" stroke-linecap="round" opacity="' + op(m.r) + '"/>'; });
    if (path === 'vh') {
      var vh = '', r2 = U.rng(77); for (k = 0; k < 150; k++) {
        var av = -BSPAN + 2 + r2() * (BSPAN * 2 - 4); if (r2() < .45) av = 6 + r2() * 19;            // layering inferiorly
        var off = 14 + r2() * (bRay(av).t - 90), qv = bPt(av, off);
        vh += '<circle cx="' + (qv.x + phase * 9 * Math.sin(k)).toFixed(1) + '" cy="' + (qv.y + phase * 9 * Math.cos(k * 1.3)).toFixed(1) + '" r="' + (1 + r2() * 1.5).toFixed(1) + '"/>';
      }
      h += '<g fill="#fff" opacity="' + op(.3) + '">' + vh + '</g>';
    }
    h += '</g>';
    h += '<text x="390" y="290" text-anchor="end" class="inv-ax" fill="#9ab">' + E({ axial: S('bs.o.axial', 'axiale', 'axial'), long: S('bs.o.long', 'longitudinale', 'longitudinal'), trans: S('bs.o.trans', 'transverse', 'transverse') }[ori]) + '</text>';
    h += '<circle cx="12" cy="20" r="4" fill="#ffd34d"/><text x="20" y="24" class="inv-ax" fill="#ffd34d">' + E(S('bs.marker', 'repère', 'marker')) + '</text>';
    var hot = [], lab;
    if (path === 'rd') {
      if (disc != null) { var pd = bPt(disc, 3); hot.push(pctHot(pd.x, pd.y, 16, 400, 300, { fr: 'Insertion à la papille', en: 'Inserts at the disc' })); }
      else { var pm = bPt(0, 34); hot.push(pctHot(pm.x, pm.y, 18, 400, 300, { fr: 'Membrane très réflective', en: 'Highly reflective membrane' })); }
    } else if (path === 'cd') { var pc = bPt(ori === 'long' ? -18 : -BSPAN + 8, 55); hot.push(pctHot(pc.x, pc.y, 20, 400, 300, { fr: 'Dôme lisse et épais, sans insertion papillaire', en: 'Smooth thick dome, no disc insertion' })); }
    else if (path === 'pvd') { var pp = bPt(0, 66); hot.push(pctHot(pp.x, pp.y, 18, 400, 300, { fr: 'Membrane fine, peu réflective', en: 'Thin, weakly reflective membrane' })); }
    else if (path === 'vh') { var pv = bPt(14, 120); hot.push(pctHot(pv.x, pv.y, 26, 400, 300, { fr: 'Échos ponctués mobiles; rétine à plat', en: 'Mobile dot echoes; retina flat' })); }
    else if (disc != null) { lab = bPt(disc, -30); hot.push(pctHot(lab.x, lab.y, 14, 400, 300, { fr: 'Ombre du nerf optique', en: 'Optic nerve shadow' })); }
    return { svg: '<svg viewBox="0 0 400 300" class="inv-svg inv-bscan" role="img" aria-label="' + E(S('bscan.aria', 'Schéma d’échographie B', 'B-scan schematic')) + '">' + h + '</svg>', hot: hot };
  };

  /* ---------- OCT ---------- */
  var OCT_LAYERS = [
    { id: 'ilm', l: .93, thin: 1, n: { fr: 'Membrane limitante interne (MLI)', en: 'Internal limiting membrane (ILM)' }, d: { fr: 'Surface interne de la rétine, au contact du vitré; plan de clivage des membranes épirétiniennes (pelage).', en: 'Inner surface of the retina, against the vitreous; cleavage plane for epiretinal membranes (peeling).' } },
    { id: 'rnfl', l: .8, n: { fr: 'Couche des fibres nerveuses (CFNR)', en: 'Retinal nerve fibre layer (RNFL)' }, d: { fr: 'Hyperréflective. Axones des cellules ganglionnaires; plus épaisse côté papille, absente à la fovéa. S’amincit dans le glaucome.', en: 'Hyperreflective. Ganglion cell axons; thicker towards the disc, absent at the fovea. Thins in glaucoma.' } },
    { id: 'gcl', l: .47, n: { fr: 'Couche des cellules ganglionnaires (CCG)', en: 'Ganglion cell layer (GCL)' }, d: { fr: 'Moyennement réflective. Corps des cellules ganglionnaires, plus épaisse autour de la fovéa.', en: 'Moderately reflective. Ganglion cell bodies, thickest around the fovea.' } },
    { id: 'ipl', l: .63, n: { fr: 'Couche plexiforme interne (CPI)', en: 'Inner plexiform layer (IPL)' }, d: { fr: 'Hyperréflective. Synapses bipolaires–ganglionnaires.', en: 'Hyperreflective. Bipolar–ganglion cell synapses.' } },
    { id: 'inl', l: .25, n: { fr: 'Couche nucléaire interne (CNI)', en: 'Inner nuclear layer (INL)' }, d: { fr: 'Hyporéflective. Noyaux des cellules bipolaires, amacrines, horizontales et de Müller; site fréquent de kystes.', en: 'Hyporeflective. Nuclei of bipolar, amacrine, horizontal and Müller cells; common site of cysts.' } },
    { id: 'opl', l: .57, n: { fr: 'Couche plexiforme externe (CPE)', en: 'Outer plexiform layer (OPL)' }, d: { fr: 'Hyperréflective. Synapses photorécepteurs–bipolaires.', en: 'Hyperreflective. Photoreceptor–bipolar synapses.' } },
    { id: 'onl', l: .13, n: { fr: 'Couche nucléaire externe (CNE)', en: 'Outer nuclear layer (ONL)' }, d: { fr: 'Hyporéflective. Noyaux des photorécepteurs; la plus épaisse au centre de la fovéa.', en: 'Hyporeflective. Photoreceptor nuclei; thickest at the foveal centre.' } },
    { id: 'elm', l: .5, thin: 1, n: { fr: 'Membrane limitante externe (MLE)', en: 'External limiting membrane (ELM)' }, d: { fr: 'Fine ligne hyperréflective (jonctions Müller–photorécepteurs).', en: 'Thin hyperreflective line (Müller–photoreceptor junctions).' } },
    { id: 'gap1', l: .1, gap: 1 },
    { id: 'ez', l: .87, n: { fr: 'Zone ellipsoïde (ZE)', en: 'Ellipsoid zone (EZ)' }, d: { fr: 'Hyperréflective. Mitochondries des segments internes; son interruption signe une atteinte des photorécepteurs.', en: 'Hyperreflective. Inner segment mitochondria; disruption means photoreceptor damage.' } },
    { id: 'gap2', l: .38, gap: 1 },
    { id: 'rpe', l: .96, n: { fr: 'Complexe EPR–membrane de Bruch', en: 'RPE–Bruch membrane complex' }, d: { fr: 'Bande hyperréflective la plus externe de la rétine. Soulevée en dôme dans un décollement de l’EPR.', en: 'Outermost hyperreflective retinal band. Lifted into a dome in a pigment epithelial detachment.' } },
    { id: 'cho', l: .43, n: { fr: 'Choroïde', en: 'Choroid' }, d: { fr: 'Couche vasculaire sous l’EPR (lumières vasculaires sombres). Épaisseur variable : mince chez le myope fort.', en: 'Vascular layer under the RPE (dark vessel lumens). Variable thickness: thin in high myopia.' } }
  ];
  var OCT_CX = 320, OCT_ELM = 178;
  function octThick(id, x, fluid) {
    var g = bump(x, OCT_CX, 76), irf = fluid === 'irf' ? bump(x, OCT_CX, 80) : 0;
    switch (id) {
      case 'ilm': return 2.5;
      case 'rnfl': return (4 + 10 * (1 - x / 640)) * (1 - .95 * g);
      case 'gcl': return 14 * (1 - .92 * g) + 4 * (bump(x, 250, 40) + bump(x, 390, 40));
      case 'ipl': return 10 * (1 - .9 * g);
      case 'inl': return 13 * (1 - .85 * g) + 12 * irf;
      case 'opl': return 9 * (1 - .5 * g) + 4 * irf;
      case 'onl': return 24 + 20 * g + 20 * irf;
      case 'elm': return 4; case 'gap1': return 4; case 'ez': return 7; case 'gap2': return 4; case 'rpe': return 9; case 'cho': return 62;
    }
    return 0;
  }
  function octLift(id, x, fluid) {
    var ids = OCT_LAYERS.map(function (l) { return l.id; }), idx = ids.indexOf(id), u;
    if (fluid === 'srf' && idx <= ids.indexOf('gap2')) { u = (x - OCT_CX) / 95; return Math.abs(u) < 1 ? -30 * Math.pow(1 - u * u, 1.5) : 0; }
    if (fluid === 'ped' && idx <= ids.indexOf('rpe')) { u = (x - OCT_CX - 20) / 72; return Math.abs(u) < 1 ? -38 * Math.pow(1 - u * u, .8) : 0; }
    return 0;
  }
  function octGeom(fluid) {
    var xs = []; for (var x = 0; x <= 640; x += 4) xs.push(x);   // finer sampling = smoother bands
    var L = OCT_LAYERS, iElm = OCT_LAYERS.map(function (l) { return l.id; }).indexOf('elm'), geo = {};
    xs.forEach(function (x, xi) {
      var y = OCT_ELM;
      for (var i = iElm - 1; i >= 0; i--) { var th = octThick(L[i].id, x, fluid); (geo[L[i].id] = geo[L[i].id] || { top: [], bot: [] }); geo[L[i].id].bot[xi] = y; y -= th; geo[L[i].id].top[xi] = y; }
      y = OCT_ELM;
      for (i = iElm; i < L.length; i++) { th = octThick(L[i].id, x, fluid); (geo[L[i].id] = geo[L[i].id] || { top: [], bot: [] }); geo[L[i].id].top[xi] = y; y += th; geo[L[i].id].bot[xi] = y; }
      L.forEach(function (l) { var lf = octLift(l.id, x, fluid); geo[l.id].top[xi] += lf; geo[l.id].bot[xi] += lf; });
    });
    geo.xs = xs; return geo;
  }
  function octAt(arr, xs, x) { var i = clamp(Math.floor(x / 4), 0, xs.length - 2), f = (x - xs[i]) / 4; return arr[i] * (1 - f) + arr[i + 1] * f; }
  Gen.oct = function (o) {
    o = o || {}; var fluid = o.fluid || 'none', geo = octGeom(fluid), xs = geo.xs, cid = nid('oct'), r = U.rng(5), h = '', hl = o.hl;
    h += '<rect x="0" y="0" width="640" height="300" fill="#000"/>';
    // sclera fade
    var bot = geo.cho.bot.map(function (y, i) { return P2(xs[i], y); });
    h += '<defs><linearGradient id="' + cid + 's" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a5a5a"/><stop offset="1" stop-color="#000"/></linearGradient><clipPath id="' + cid + 'c"><polygon points="' + geo.cho.top.map(function (y, i) { return P2(xs[i], y); }).concat(geo.cho.bot.map(function (y, i) { return P2(xs[i], y); }).reverse()).join(' ') + '"/></clipPath></defs>';
    h += '<polygon points="' + bot.join(' ') + ' 640,300 0,300" fill="url(#' + cid + 's)"/>';
    h += '<defs><filter id="' + cid + 'b" x="-2%" y="-10%" width="104%" height="120%"><feGaussianBlur stdDeviation=".55"/></filter>' +
      '<filter id="' + cid + 'v"><feGaussianBlur stdDeviation="1.4"/></filter>' +
      '<filter id="' + cid + 'nd" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="1.15 .5" numOctaves="2" seed="7"/><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1.7 0 0 0 -.8"/></filter>' +
      '<filter id="' + cid + 'nl" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="1.3 .6" numOctaves="2" seed="11"/><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 1.7 0 0 -.95"/></filter>' +
      '<clipPath id="' + cid + 'r"><polygon points="' + geo.ilm.top.map(function (y, i) { return P2(xs[i], y); }).concat(geo.cho.bot.map(function (y, i) { return P2(xs[i], y + 14); }).reverse()).join(' ') + '"/></clipPath></defs>';
    h += '<g filter="url(#' + cid + 'b)">';
    OCT_LAYERS.forEach(function (l) {
      var g = geo[l.id], poly = g.top.map(function (y, i) { return P2(xs[i], y); }).concat(g.bot.map(function (y, i) { return P2(xs[i], y); }).reverse()).join(' ');
      h += '<polygon points="' + poly + '" fill="' + gray(l.l) + '"' + (l.gap ? '' : (o.hitU ? ' data-vl="' : ' data-layer="') + l.id + '"') + (hl === l.id ? ' class="inv-hl"' : '') + '/>';
    });
    h += '</g>';
    var hitsH = '';
    if (o.hitU) {   // invisible enlarged hit areas: each tappable layer gets a band at least hitU units tall around its centre line
      var half = o.hitU / 2;
      OCT_LAYERS.filter(function (l) { return !l.gap; }).map(function (l) {
        var g = geo[l.id], th = 0; g.top.forEach(function (y, i) { th += g.bot[i] - y; }); return { l: l, th: th / g.top.length };
      }).sort(function (a, b) { return b.th - a.th; }).forEach(function (x) {
        var g = geo[x.l.id], top = [], bot = [];
        g.top.forEach(function (y, i) { var c = (y + g.bot[i]) / 2, hh = Math.max((g.bot[i] - y) / 2, half); top.push(P2(xs[i], c - hh)); bot.push(P2(xs[i], c + hh)); });
        hitsH += '<polygon class="inv-hit" data-layer="' + x.l.id + '" points="' + top.concat(bot.reverse()).join(' ') + '" fill="#000" fill-opacity="0"/>';
      });
    }
    // choroidal vessel lumens
    var ves = ''; for (var k = 0; k < 70; k++) { var vx = r() * 640, deep = r(), ty = octAt(geo.cho.top, xs, vx), by = octAt(geo.cho.bot, xs, vx), vy = ty + 10 + deep * (by - ty - 16); ves += '<ellipse cx="' + vx.toFixed(1) + '" cy="' + vy.toFixed(1) + '" rx="' + (3 + deep * deep * 12).toFixed(1) + '" ry="' + (1.6 + deep * deep * 6).toFixed(1) + '"/>'; }
    h += '<g clip-path="url(#' + cid + 'c)" fill="#262626" filter="url(#' + cid + 'v)" pointer-events="none">' + ves + '</g>';
    // OCT speckle (dark and light grain) over retina and choroid only
    h += '<g clip-path="url(#' + cid + 'r)" pointer-events="none" opacity=".5"><rect x="0" y="0" width="640" height="300" filter="url(#' + cid + 'nd)"/><rect x="0" y="0" width="640" height="300" filter="url(#' + cid + 'nl)"/></g>';
    if (fluid === 'ped') { var br = geo.rpe.bot.map(function (y, i) { var x = xs[i]; return P2(x, y - octLift('rpe', x, 'ped')); }); h += '<polyline points="' + br.join(' ') + '" fill="none" stroke="' + gray(.82) + '" stroke-width="2.2" data-layer="rpe"/>'; }
    if (fluid === 'irf') {
      var cy = '';
      [[262, 'onl', 12, 10], [292, 'onl', 15, 12], [322, 'onl', 13, 13], [352, 'onl', 14, 11], [380, 'onl', 10, 8], [248, 'inl', 8, 5], [300, 'inl', 9, 6], [345, 'inl', 9, 6], [398, 'inl', 8, 5]].forEach(function (c) {
        var t = octAt(geo[c[1]].top, xs, c[0]), b = octAt(geo[c[1]].bot, xs, c[0]); cy += '<ellipse cx="' + c[0] + '" cy="' + ((t + b) / 2).toFixed(1) + '" rx="' + c[2] + '" ry="' + Math.min(c[3], (b - t) / 2 - .5).toFixed(1) + '"/>';
      });
      h += '<g fill="#050505" pointer-events="none">' + cy + '</g>';
    }
    if (o.label) { var lg = geo[o.label.id]; if (lg) { var lx = o.label.x || 470, ly = (octAt(lg.top, xs, lx) + octAt(lg.bot, xs, lx)) / 2; h += '<g pointer-events="none"><line x1="' + lx + '" y1="' + ly + '" x2="' + (lx + 18) + '" y2="' + (ly - 18) + '" stroke="#ffd34d" stroke-width="1.5"/><text x="' + (lx + 20) + '" y="' + (ly - 21) + '" class="inv-olab">' + E(o.label.text) + '</text></g>'; } }
    h += hitsH;
    h += '<text x="16" y="74" class="inv-ax" fill="#8aa">' + E(S('oct.nasal', 'nasal (papille)', 'nasal (disc)')) + '</text><text x="624" y="74" text-anchor="end" class="inv-ax" fill="#8aa">' + E(S('oct.temporal', 'temporal', 'temporal')) + '</text>';
    var hot = [], vb = o.crop ? [140, 60, 360, 220] : [0, 50, 640, 240];
    if (fluid === 'srf') hot.push(pctHot(OCT_CX, (octAt(geo.gap2.bot, xs, OCT_CX) + octAt(geo.rpe.top, xs, OCT_CX)) / 2, 30, vb[2], vb[3], { fr: 'Liquide entre rétine et EPR (EPR plat)', en: 'Fluid between retina and RPE (flat RPE)' }, true, vb[0], vb[1]));
    if (fluid === 'ped') hot.push(pctHot(OCT_CX + 20, (octAt(geo.rpe.bot, xs, OCT_CX + 20) + OCT_ELM + 24) / 2, 30, vb[2], vb[3], { fr: 'EPR soulevé au-dessus de Bruch', en: 'RPE lifted above Bruch' }, true, vb[0], vb[1]));
    if (fluid === 'irf') hot.push(pctHot(OCT_CX, octAt(geo.onl.top, xs, OCT_CX) + 18, 34, vb[2], vb[3], { fr: 'Kystes dans la rétine', en: 'Cysts within the retina' }, true, vb[0], vb[1]));
    if (fluid === 'none') hot.push(pctHot(OCT_CX, octAt(geo.ilm.top, xs, OCT_CX), 22, vb[2], vb[3], { fr: 'Dépression fovéolaire normale', en: 'Normal foveal pit' }, true, vb[0], vb[1]));
    return { svg: '<svg viewBox="' + vb.join(' ') + '" class="inv-svg inv-oct" role="img" aria-label="' + E(S('oct.aria', 'Schéma de coupe OCT maculaire', 'Macular OCT B-scan schematic')) + '">' + h + '</svg>', hot: hot, geo: geo };
  };

  /* ---------- Gonioscopy ---------- */
  var GONIO_BANDS = [
    { id: 'cornea', y0: 0, y1: 44, c: '#bcd3dc', n: { fr: 'Cornée (face postérieure)', en: 'Cornea (posterior surface)' }, d: { fr: 'Au-dessus de la ligne de Schwalbe.', en: 'Above the Schwalbe line.' } },
    { id: 'sl', y0: 44, y1: 51, c: '#f6f3ea', n: { fr: 'Ligne de Schwalbe', en: 'Schwalbe line' }, d: { fr: 'Fin bord blanchâtre : fin de la membrane de Descemet, limite antérieure de l’angle.', en: 'Thin whitish ridge: end of Descemet membrane, anterior limit of the angle.' } },
    { id: 'tm', y0: 51, y1: 86, c: '#a88a6c', n: { fr: 'Trabéculum', en: 'Trabecular meshwork' }, d: { fr: 'Partie antérieure peu pigmentée, partie postérieure pigmentée (filtrante).', en: 'Anterior part lightly pigmented, posterior part pigmented (filtering).' } },
    { id: 'ss', y0: 86, y1: 98, c: '#efe9dc', n: { fr: 'Éperon scléral', en: 'Scleral spur' }, d: { fr: 'Bande blanche entre trabéculum et bande ciliaire; insertion du muscle ciliaire.', en: 'White band between meshwork and ciliary band; ciliary muscle insertion.' } },
    { id: 'cbb', y0: 98, y1: 126, c: '#5a4943', n: { fr: 'Bande ciliaire', en: 'Ciliary body band' }, d: { fr: 'Bande gris-brun la plus postérieure : visible seulement si l’angle est largement ouvert.', en: 'Most posterior grey-brown band: visible only in a wide-open angle.' } }
  ];
  var GONIO_LEVEL = { 4: 126, 3: 98, 2: 86, 1: 53, 0: 36 };
  function gC(x) { var u = (x - 200) / 200; return 16 * u * u; }
  function gBand(y0, y1, wav) { var top = [], bot = []; for (var x = 0; x <= 400; x += 10) { top.push(P2(x, y0 + gC(x))); bot.push(P2(x, y1 + gC(x) + (wav ? wav(x) : 0))); } return top.concat(bot.reverse()).join(' '); }
  Gen.gonio = function (o) {
    o = o || {}; var v = o.variant || 'none', grade = v === 'none' ? (o.grade == null ? 4 : o.grade) : (v === 'pas' ? 3 : 4), h = '', cid = nid('go'), level = GONIO_LEVEL[grade];
    var rec = v === 'rec', wav = rec ? function (x) { return 30 + 6 * Math.sin(x / 23) + 4 * Math.sin(x / 9); } : null;
    if (rec) level = 162;
    h += '<defs><linearGradient id="' + cid + 'i" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9a6a47"/><stop offset=".25" stop-color="#7a5236"/><stop offset="1" stop-color="#4b301f"/></linearGradient>' +
      '<linearGradient id="' + cid + 't" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cdbfae"/><stop offset=".45" stop-color="#b19a83"/><stop offset="1" stop-color="#6e4f37"/></linearGradient></defs>';
    h += '<rect width="400" height="240" fill="#101418"/>';
    GONIO_BANDS.forEach(function (b) { h += '<polygon data-vband="' + b.id + '" points="' + gBand(b.y0, b.id === 'cbb' && rec ? b.y1 : b.y1, b.id === 'cbb' ? wav : null) + '" fill="' + (b.id === 'tm' ? 'url(#' + cid + 't)' : b.c) + '"/>'; });
    h += '<polygon points="' + gBand(0, 44) + '" fill="#e8f4f8" opacity=".25" pointer-events="none"/>';
    // iris (rises to hide posterior structures)
    var it = [], x; for (x = 0; x <= 400; x += 10) it.push(P2(x, level + gC(x) + 2 * Math.sin(x / 17)));
    h += '<polyline points="' + it.join(' ') + '" fill="none" stroke="#120a05" stroke-width="5" opacity=".55" pointer-events="none"/>';
    h += '<polygon data-band="iris" points="' + it.join(' ') + ' 400,240 0,240" fill="url(#' + cid + 'i)"/>';
    var stri = ''; for (x = 6; x < 400; x += 9) { var yt = level + gC(x) + 8; stri += '<path d="M' + x + ',' + yt.toFixed(1) + ' l' + ((x % 3) - 1) + ',' + (18 + (x % 5) * 3) + '"/>'; }
    h += '<g stroke="#d49a62" stroke-width="1.2" opacity=".35" pointer-events="none">' + stri + '</g>';
    h += '<polyline points="' + it.map(function (p) { var q = p.split(','); return q[0] + ',' + (+q[1] + 5).toFixed(1); }).join(' ') + '" fill="none" stroke="#c48c60" stroke-width="2" opacity=".55" pointer-events="none"/>';
    var cr = ''; for (var k = 0; k < 14; k++) { var cx = 15 + k * 28 + (k % 3) * 5, cy = level + gC(cx) + 30 + (k % 4) * 14; if (cy < 236) cr += '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (6 + k % 3 * 2) + '" ry="3.2"/>'; }
    h += '<g fill="#3a2416" opacity=".7" pointer-events="none">' + cr + '</g>';
    var hu = o.hitU || 0;
    GONIO_BANDS.slice().sort(function (a, b) { return (b.y1 - b.y0) - (a.y1 - a.y0); }).forEach(function (b) {
      var y1 = b.id === 'cbb' && rec ? b.y1 + 30 : b.y1; if (b.y0 >= level - 2) return;      // hidden behind the iris: not tappable
      var pad = Math.max(0, (hu - (y1 - b.y0)) / 2), a0 = Math.max(0, b.y0 - pad), a1 = Math.min(level, y1 + pad);
      h += '<polygon class="inv-hit" data-band="' + b.id + '" points="' + gBand(a0, a1) + '" fill="#000" fill-opacity="0"/>';
    });
    var hot = [];
    if (v === 'pas') {
      [120, 268].forEach(function (px, i) { var base = level + gC(px), tip = (i ? 56 : 49) + gC(px); h += '<polygon data-band="pas" points="' + P2(px - 34, base + 4) + ' ' + P2(px - 12, tip + 4) + ' ' + P2(px + 3, tip) + ' ' + P2(px + 16, tip + 5) + ' ' + P2(px + 36, base + 4) + '" fill="url(#' + cid + 'i)"/>'; });
      hot.push(pctHot(120, 58 + gC(120), 22, 400, 240, { fr: 'Synéchie : l’iris adhère jusqu’au trabéculum', en: 'Synechia: iris adherent up to the meshwork' }));
    } else if (v === 'nv') {
      var vs = '';
      [[90, 1], [170, -1], [250, 1], [320, -1]].forEach(function (p) { var x0 = p[0], y0 = level + gC(x0) + 18; vs += '<path d="M' + x0 + ',' + y0 + ' C' + (x0 + 8 * p[1]) + ',' + (y0 - 40) + ' ' + (x0 - 6 * p[1]) + ',' + (90 + gC(x0)) + ' ' + (x0 + 4 * p[1]) + ',' + (62 + gC(x0)) + ' M' + (x0 + 2 * p[1]) + ',' + (88 + gC(x0)) + ' l' + (14 * p[1]) + ',-14 M' + (x0 + 3) + ',' + (70 + gC(x0)) + ' l' + (-10 * p[1]) + ',-8"/>'; });
      h += '<g data-band="nv" fill="none" stroke="#d0322b" stroke-width="1.6" stroke-linecap="round">' + vs + '</g>';
      hot.push(pctHot(170, 92 + gC(170), 18, 400, 240, { fr: 'Vaisseaux qui croisent l’éperon scléral', en: 'Vessels crossing the scleral spur' }));
    } else if (rec) {
      var pr = ''; [60, 150, 230, 330].forEach(function (px) { pr += '<path d="M' + px + ',' + (level + gC(px) + 2) + ' l3,-22 M' + (px + 8) + ',' + (level + gC(px) + 2) + ' l-2,-14"/>'; });
      h += '<g stroke="#8a6142" stroke-width="2" fill="none" pointer-events="none">' + pr + '</g>';
      hot.push(pctHot(200, 128, 28, 400, 240, { fr: 'Bande ciliaire anormalement large et irrégulière', en: 'Abnormally wide, irregular ciliary band' }));
    } else {
      var cue = { 4: ['cbb', { fr: 'Bande ciliaire visible : Shaffer 4', en: 'Ciliary band visible: Shaffer 4' }], 3: ['ss', { fr: 'Éperon scléral visible : Shaffer 3', en: 'Scleral spur visible: Shaffer 3' }], 2: ['tm', { fr: 'Trabéculum visible, éperon caché : Shaffer 2', en: 'Meshwork visible, spur hidden: Shaffer 2' }], 1: ['sl', { fr: 'Seule la ligne de Schwalbe : Shaffer 1', en: 'Schwalbe line only: Shaffer 1' }], 0: [null, { fr: 'Contact irido-cornéen : angle fermé', en: 'Iridocorneal contact: closed angle' }] }[grade];
      var band = GONIO_BANDS.filter(function (b) { return b.id === cue[0]; })[0], yy = band ? (band.y0 + Math.min(band.y1, level) ) / 2 : 38;
      hot.push(pctHot(200, yy, 20, 400, 240, cue[1]));
    }
    return { svg: '<svg viewBox="0 0 400 240" class="inv-svg inv-gonio" role="img" aria-label="' + E(S('gonio.aria', 'Schéma de vue gonioscopique de l’angle', 'Gonioscopic angle view schematic')) + '">' + h + '</svg>', hot: hot, grade: grade };
  };

  /* ---------- Visual field (24-2-like) ---------- */
  var VF_ROWS = { 21: [-9, -3, 3, 9], 15: [-15, -9, -3, 3, 9, 15], 9: [-21, -15, -9, -3, 3, 9, 15, 21], 3: [-27, -21, -15, -9, -3, 3, 9, 15, 21] };
  function vfPoints(eye) {
    var out = [];
    Object.keys(VF_ROWS).forEach(function (yk) { var y = +yk; VF_ROWS[yk].forEach(function (x) { [y, -y].forEach(function (yy) { var sx = eye === 'OS' ? -x : x; if (Math.abs(sx) === 15 && Math.abs(yy) === 3 && (eye === 'OS' ? sx < 0 : sx > 0)) return; out.push([sx, yy]); }); }); });
    return out;
  }
  var VF_CASES = {
    normal: { eyes: ['OD'], rel: 'ok', ans: 'normal', idx: { OD: { fl: [1, 14], fp: 2, fn: 3, md: -0.6, psd: 1.6, ght: 'wnl' } }, f: function (x, y, e, r) { return r() < .03 ? 1 : 0; } },
    fp: { eyes: ['OD'], rel: 'bad', ans: 'uninterp', idx: { OD: { fl: [0, 13], fp: 27, fn: 0, md: 3.4, psd: 1.2, ght: 'high' } }, f: function () { return 0; } },
    fl: { eyes: ['OD'], rel: 'bad', ans: 'uninterp', idx: { OD: { fl: [7, 15], fp: 4, fn: 9, md: -2.0, psd: 3.1, ght: 'bl' } }, f: function (x, y, e, r) { return r() < .16 ? 1 + Math.floor(r() * 2) : 0; } },
    nasal: { eyes: ['OD'], rel: 'ok', ans: 'nasal', merid: 'h', idx: { OD: { fl: [1, 15], fp: 1, fn: 4, md: -2.2, psd: 3.8, ght: 'onl' } }, f: function (x, y) { return (x <= -15 && (y === 3 || y === 9)) ? (x === -27 || x === -21 ? 4 : 3) : 0; } },
    arcuate: { eyes: ['OD'], rel: 'ok', ans: 'arcuate', merid: 'h', idx: { OD: { fl: [2, 16], fp: 3, fn: 6, md: -7.9, psd: 10.4, ght: 'onl' } }, f: function (x, y) { var rr = Math.sqrt(x * x + y * y); if (y > 0 && rr > 9.4 && rr < 23 && x <= 9) return rr < 13 ? 3 : 4; if (y === 3 && x <= -21) return 4; return 0; } },
    paracentral: { eyes: ['OD'], rel: 'ok', ans: 'paracentral', merid: 'h', idx: { OD: { fl: [0, 14], fp: 2, fn: 2, md: -2.8, psd: 6.1, ght: 'onl' } }, f: function (x, y) { return (x === -3 && y === 3) ? 4 : ((x === -9 && y === 3) || (x === -3 && y === 9)) ? 3 : 0; } },
    altitudinal: { eyes: ['OD'], rel: 'ok', ans: 'altitudinal', merid: 'h', idx: { OD: { fl: [1, 15], fp: 1, fn: 5, md: -15.6, psd: 13.2, ght: 'onl' } }, f: function (x, y) { return y < 0 ? (Math.abs(x) > 20 ? 3 : 4) : 0; } },
    bitemporal: { eyes: ['OS', 'OD'], rel: 'ok', ans: 'bitemporal', merid: 'v', idx: { OS: { fl: [1, 15], fp: 2, fn: 4, md: -9.7, psd: 12.0, ght: 'na' }, OD: { fl: [1, 14], fp: 1, fn: 3, md: -10.1, psd: 11.8, ght: 'na' } }, f: function (x, y, e) { return (e === 'OD' ? x > 0 : x < 0) ? (Math.abs(x) > 3 ? 4 : 3) : 0; } },
    homonymous: { eyes: ['OS', 'OD'], rel: 'ok', ans: 'homonymous', merid: 'v', idx: { OS: { fl: [0, 14], fp: 1, fn: 3, md: -11.2, psd: 12.9, ght: 'na' }, OD: { fl: [1, 15], fp: 2, fn: 4, md: -10.8, psd: 12.5, ght: 'na' } }, f: function (x) { return x < 0 ? 4 : 0; } }
  };
  var VF_SHADE = ['', '#cfcfcf', '#8c8c8c', '#474747', '#0d0d0d'];
  Gen.vf = function (o) {
    o = o || {}; var c = typeof o === 'string' ? VF_CASES[o] : VF_CASES[o.case || 'normal'], key = typeof o === 'string' ? o : (o.case || 'normal');
    var eyes = c.eyes, pw = 260, gap = 16, Wd = eyes.length * pw + (eyes.length - 1) * gap, h = '', hot = [], r = U.rng(key.length * 31 + 3);
    eyes.forEach(function (eye, ei) {
      var ox = ei * (pw + gap), cx = ox + 130, cy = 136, sc = 3.9, sum = { x: 0, y: 0, n: 0, minx: 1e9, maxx: -1e9, miny: 1e9, maxy: -1e9 };
      h += '<g data-eye="' + eye + '"><rect x="' + ox + '" y="0" width="' + pw + '" height="272" rx="6" fill="#fff" stroke="#c9c9c9"/>';
      h += '<text x="' + (ox + 10) + '" y="18" class="inv-vfh">' + eye + '</text>';
      var hc = o.reveal && c.merid === 'h' ? '#2346d4' : '#9a9a9a', vc = o.reveal && c.merid === 'v' ? '#2346d4' : '#9a9a9a';
      h += '<line x1="' + (cx - 122) + '" x2="' + (cx + 122) + '" y1="' + cy + '" y2="' + cy + '" stroke="' + hc + '" stroke-width="' + (o.reveal && c.merid === 'h' ? 2.2 : 1) + '"' + (o.reveal && c.merid === 'h' ? ' stroke-dasharray="6 4"' : '') + '/>';
      h += '<line y1="' + (cy - 118) + '" y2="' + (cy + 118) + '" x1="' + cx + '" x2="' + cx + '" stroke="' + vc + '" stroke-width="' + (o.reveal && c.merid === 'v' ? 2.2 : 1) + '"' + (o.reveal && c.merid === 'v' ? ' stroke-dasharray="6 4"' : '') + '/>';
      vfPoints(eye).forEach(function (p) {
        var lv = c.f(p[0], p[1], eye, r), px = cx + p[0] * sc, py = cy - p[1] * sc;
        if (lv) { h += '<rect x="' + (px - 5.5).toFixed(1) + '" y="' + (py - 5.5).toFixed(1) + '" width="11" height="11" fill="' + VF_SHADE[lv] + '" stroke="#222" stroke-width=".6"/>'; if (lv >= 3) { sum.x += px; sum.y += py; sum.n++; sum.minx = Math.min(sum.minx, px); sum.maxx = Math.max(sum.maxx, px); sum.miny = Math.min(sum.miny, py); sum.maxy = Math.max(sum.maxy, py); } }
        else h += '<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="1.7" fill="#333"/>';
      });
      h += '<text x="' + (ox + pw - 10) + '" y="18" text-anchor="end" class="inv-vfs">' + E(S('vf.pd', 'déviation (schéma)', 'deviation (schematic)')) + '</text></g>';
      if (sum.n) { var hr = Math.max(14, Math.max(sum.maxx - sum.minx, sum.maxy - sum.miny) / 2 + 8); hot.push(pctHot(sum.x / sum.n, sum.y / sum.n, Math.min(hr, 46), Wd, 272, ei === eyes.length - 1 || eyes.length === 1 ? VF_ANS_REVEAL(c.ans) : '', ei === eyes.length - 1)); }
    });
    return { svg: '<svg viewBox="0 0 ' + Wd + ' 272" class="inv-svg inv-vf" role="img" aria-label="' + E(S('vf.aria', 'Schéma de champ visuel 24-2 (carte des déviations)', '24-2 visual field schematic (deviation map)')) + '">' + h + '</svg>', hot: hot, c: c };
  };
  function VF_ANS_REVEAL(a) {
    return { nasal: { fr: 'S’arrête au méridien horizontal', en: 'Stops at the horizontal meridian' }, arcuate: { fr: 'Arc qui respecte le méridien horizontal', en: 'Arc respecting the horizontal meridian' }, paracentral: { fr: 'Paracentral, < 10° de la fixation', en: 'Paracentral, < 10° from fixation' }, altitudinal: { fr: 'Hémichamp entier, méridien horizontal', en: 'Whole hemifield, horizontal meridian' }, bitemporal: { fr: 'Respecte le méridien vertical', en: 'Respects the vertical meridian' }, homonymous: { fr: 'Même côté aux deux yeux', en: 'Same side in both eyes' } }[a] || '';
  }

  /* ---------- Fundus (right eye) ---------- */
  var FUNDUS_REG = {
    disc: { n: { fr: 'Papille et anneau neurorétinien', en: 'Optic disc and neuroretinal rim' }, d: { fr: 'Disque ≈ 1,5–2 mm, bords nets, anneau rose-orangé. Règle ISNT : anneau Inférieur ≥ Supérieur ≥ Nasal ≥ Temporal.', en: 'Disc ≈ 1.5–2 mm, sharp margins, pink-orange rim. ISNT rule: rim Inferior ≥ Superior ≥ Nasal ≥ Temporal.' } },
    cup: { n: { fr: 'Excavation', en: 'Cup' }, d: { fr: 'Dépression centrale pâle sans axones. C/D vertical souvent ≤ 0,5 (dépend de la taille du disque); une asymétrie ≥ 0,2 entre les yeux est suspecte.', en: 'Pale central depression without axons. Vertical C/D often ≤ 0.5 (depends on disc size); asymmetry ≥ 0.2 between eyes is suspicious.' } },
    macula: { n: { fr: 'Macula', en: 'Macula' }, d: { fr: 'Zone plus sombre entre les arcades temporales, ~2,5 diamètres papillaires en temporal de la papille.', en: 'Darker area between the temporal arcades, ~2.5 disc diameters temporal to the disc.' } },
    fovea: { n: { fr: 'Fovéa', en: 'Fovea' }, d: { fr: 'Centre de la macula avec reflet fovéolaire; vision la plus fine (cônes).', en: 'Centre of the macula with foveal reflex; finest vision (cones).' } },
    art: { n: { fr: 'Artériole', en: 'Arteriole' }, d: { fr: 'Plus fine et plus claire que la veinule, avec reflet pariétal; rapport A/V normal ≈ 2/3.', en: 'Thinner and lighter than the venule, with a light reflex; normal A/V ratio ≈ 2/3.' } },
    vein: { n: { fr: 'Veinule', en: 'Venule' }, d: { fr: 'Plus large et plus foncée que l’artériole.', en: 'Wider and darker than the arteriole.' } },
    pole: { n: { fr: 'Pôle postérieur', en: 'Posterior pole' }, d: { fr: 'Zone entre les arcades temporales : papille et macula.', en: 'Area between the temporal arcades: disc and macula.' } },
    periph: { n: { fr: 'Périphérie', en: 'Periphery' }, d: { fr: 'Au-delà des arcades jusqu’à l’ora serrata : ophtalmoscopie indirecte après dilatation (± indentation) pour les déchirures.', en: 'Beyond the arcades to the ora serrata: indirect ophthalmoscopy after dilation (± indentation) to find tears.' } }
  };
  var FUNDUS_OV = {
    cup: { n: { fr: 'Excavation agrandie', en: 'Enlarged cup' }, d: { fr: 'C/D ~0,8 avec anneau aminci en inférieur : règle ISNT non respectée, évoque une neuropathie glaucomateuse.', en: 'C/D ~0.8 with inferior rim thinning: ISNT rule broken, suggests glaucomatous optic neuropathy.' } },
    dischem: { n: { fr: 'Hémorragie papillaire', en: 'Disc haemorrhage' }, d: { fr: 'Hémorragie en flammèche au bord du disque, souvent inférotemporale : associée à la progression du glaucome.', en: 'Flame haemorrhage at the disc margin, often inferotemporal: associated with glaucoma progression.' } },
    cws: { n: { fr: 'Nodules cotonneux', en: 'Cotton wool spots' }, d: { fr: 'Taches blanches floues = infarctus de la couche des fibres nerveuses (ischémie : diabète, HTA, occlusion veineuse…).', en: 'Fluffy white patches = nerve fibre layer infarcts (ischaemia: diabetes, hypertension, vein occlusion…).' } },
    drusen: { n: { fr: 'Drusen', en: 'Drusen' }, d: { fr: 'Dépôts jaunâtres entre l’EPR et la membrane de Bruch. Petits (≤ 63 µm) fréquents avec l’âge; moyens (63–125 µm) = DMLA précoce; grands (> 125 µm) = DMLA intermédiaire.', en: 'Yellowish deposits between RPE and Bruch membrane. Small (≤ 63 µm) common with age; medium (63–125 µm) = early AMD; large (> 125 µm) = intermediate AMD.' } }
  };
  var FD = { x: 278, y: 190, r: 22 }, FF = { x: 166, y: 203 };
  Gen.fundus = function (o) {
    o = o || {}; var ov = o.ov || {}, cid = nid('fu'), h = '', r = U.rng(11), hot = [];
    if (typeof o === 'string') { ov = {}; ov[o] = true; }
    h += '<defs><radialGradient id="' + cid + 'b" cx="45%" cy="50%" r="60%"><stop offset="0" stop-color="#d4673f"/><stop offset=".7" stop-color="#b9492d"/><stop offset="1" stop-color="#7c2a18"/></radialGradient>' +
      '<radialGradient id="' + cid + 'm"><stop offset="0" stop-color="#5a1a0e" stop-opacity=".75"/><stop offset=".55" stop-color="#7a2614" stop-opacity=".35"/><stop offset="1" stop-color="#7a2614" stop-opacity="0"/></radialGradient>' +
      '<radialGradient id="' + cid + 'd"><stop offset="0" stop-color="#f8d7a6"/><stop offset="1" stop-color="#e9a173"/></radialGradient>' +
      '<clipPath id="' + cid + 'c"><circle cx="200" cy="200" r="186"/></clipPath><filter id="' + cid + 'f" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.6"/></filter></defs>';
    h += '<rect width="400" height="400" fill="#000"/><g clip-path="url(#' + cid + 'c)">';
    h += '<circle cx="200" cy="200" r="186" fill="url(#' + cid + 'b)" data-reg="periph"/>';
    h += '<ellipse cx="200" cy="200" rx="150" ry="112" fill="#fff" fill-opacity="0" data-reg="pole"/>';
    h += '<circle cx="' + FF.x + '" cy="' + FF.y + '" r="52" fill="url(#' + cid + 'm)" data-reg="macula"/>';
    h += '<circle cx="' + FF.x + '" cy="' + FF.y + '" r="17" fill="#fff" fill-opacity="0" data-reg="fovea"/><ellipse cx="' + FF.x + '" cy="' + FF.y + '" rx="2.6" ry="2" fill="#fff" opacity=".8" pointer-events="none"/>';
    // vessels: [path, kind, width]; the first 8 (four arcades, artery + vein) are tap targets, small branches (index >= 8) are decorative
    var V = [
      ['M276,181 C252,148 210,118 150,111 S70,120 34,152', 'art', 3.2], ['M278,179 C258,138 206,103 146,99 S64,108 30,136', 'vein', 4.6],
      ['M276,199 C252,232 210,263 150,270 S70,262 34,234', 'art', 3.2], ['M278,201 C258,242 206,279 146,285 S64,276 30,252', 'vein', 4.6],
      ['M284,183 C302,150 332,116 362,86', 'art', 2.6], ['M287,184 C309,148 342,119 374,98', 'vein', 3.6],
      ['M284,198 C302,232 332,268 362,300', 'art', 2.6], ['M287,197 C309,236 342,266 374,288', 'vein', 3.6],
      ['M300,190 C330,191 352,192 380,194', 'art', 2], ['M300,186 C330,182 354,178 382,174', 'vein', 2.6],
      ['M205,118 C196,140 190,156 186,170', 'art', 1.5], ['M200,258 C194,240 190,228 186,220', 'art', 1.5], ['M188,104 C182,126 178,150 182,166', 'vein', 2]
    ];
    V.forEach(function (v, vi) { h += (vi >= 8 ? '' : '<path d="' + v[0] + '" fill="none" stroke="transparent" stroke-width="12" data-reg="' + v[1] + '"/>') + '<path d="' + v[0] + '" fill="none" stroke="' + (v[1] === 'art' ? '#e4583c' : '#8a1d29') + '" stroke-width="' + v[2] + '" stroke-linecap="round" pointer-events="none"/>' + (v[1] === 'art' ? '<path d="' + v[0] + '" fill="none" stroke="#ffd1bf" stroke-width=".7" opacity=".7" pointer-events="none"/>' : ''); });
    // disc
    h += '<circle cx="' + FD.x + '" cy="' + FD.y + '" r="' + FD.r + '" fill="url(#' + cid + 'd)" data-reg="disc"/>';
    if (ov.cup) h += '<ellipse cx="' + (FD.x + 1) + '" cy="' + (FD.y + 2.5) + '" rx="15.5" ry="18.5" fill="#fbf0dc" data-reg="ov-cup"/>';
    else h += '<circle cx="' + (FD.x + 1) + '" cy="' + FD.y + '" r="7" fill="#fbf0dc" pointer-events="none"/><circle class="inv-hit" cx="' + (FD.x + 1) + '" cy="' + FD.y + '" r="17" fill="#fff" fill-opacity="0" data-reg="cup"/>';
    h += '<path d="M' + (FD.x - 2) + ',' + (FD.y - FD.r + 2) + ' L' + (FD.x - 2) + ',' + (FD.y + FD.r - 2) + '" stroke="#c84a35" stroke-width="2" pointer-events="none" opacity=".8"/>';
    if (ov.dischem) { h += '<path d="M' + (FD.x - 12) + ',' + (FD.y + 15) + ' q-6,8 -9,16 q2,1 4,0 q4,-8 8,-14 z" fill="#9c0f18" pointer-events="none"/><circle class="inv-hit" cx="' + (FD.x - 15) + '" cy="' + (FD.y + 23) + '" r="14" fill="#fff" fill-opacity="0" data-reg="ov-dischem"/>'; hot.push(Object.assign(pctHot(FD.x - 15, FD.y + 23, 13, 400, 400, FUNDUS_OV.dischem.n), { k: 'dischem' })); }
    if (ov.cup) hot.push(Object.assign(pctHot(FD.x, FD.y + 2, 26, 400, 400, { fr: 'C/D ~0,8, anneau inférieur aminci', en: 'C/D ~0.8, thin inferior rim' }), { k: 'cup' }));
    if (ov.cws) { var cw = ''; [[206, 148, 11, 6, -20], [140, 140, 9, 5, 15], [216, 260, 10, 6, 25], [128, 262, 8, 5, -10], [236, 172, 7, 4, 0]].forEach(function (c) { cw += '<ellipse cx="' + c[0] + '" cy="' + c[1] + '" rx="' + c[2] + '" ry="' + c[3] + '" transform="rotate(' + c[4] + ' ' + c[0] + ' ' + c[1] + ')"/>'; }); h += '<g fill="#f7f1e4" opacity=".92" filter="url(#' + cid + 'f)" data-reg="ov-cws">' + cw + '</g>'; hot.push(Object.assign(pctHot(206, 148, 18, 400, 400, FUNDUS_OV.cws.n), { k: 'cws' })); }
    if (ov.drusen) { var dr = ''; for (var k = 0; k < 34; k++) { var a = r() * Math.PI * 2, d = 9 + r() * 32; dr += '<circle cx="' + (FF.x + Math.cos(a) * d).toFixed(1) + '" cy="' + (FF.y + Math.sin(a) * d * .85).toFixed(1) + '" r="' + (1.6 + r() * 2.2).toFixed(1) + '"/>'; } h += '<g fill="#f2d36a" opacity=".9" data-reg="ov-drusen">' + dr + '</g>'; hot.push(Object.assign(pctHot(FF.x, FF.y, 30, 400, 400, FUNDUS_OV.drusen.n), { k: 'drusen' })); }
    h += '</g><text x="8" y="394" class="inv-ax" fill="#bbb">' + E(S('fo.od', 'œil droit (OD)', 'right eye (OD)')) + '</text>';
    if (!hot.length) hot.push(pctHot(FD.x, FD.y, 26, 400, 400, FUNDUS_REG.disc.n));
    return { svg: '<svg viewBox="0 0 400 400" class="inv-svg inv-fundus" role="img" aria-label="' + E(S('fo.aria', 'Schéma de fond d’œil droit', 'Right fundus schematic')) + '">' + h + '</svg>', hot: hot };
  };

  /* spec string → generator: 'oct:srf', 'bscan:rd:axial[:gain]', 'gonio:2' | 'gonio:pas', 'vf:arcuate', 'fundus:cup+dischem', 'ascan:long' */
  function genFrom(spec) {
    var p = String(spec || '').split(':'), k = p[0];
    try {
      if (k === 'oct') return Gen.oct({ fluid: p[1] || 'none' });
      if (k === 'bscan') return Gen.bscan({ path: p[1] || 'normal', ori: p[2] || 'axial', gain: p[3] ? +p[3] : 70 });
      if (k === 'gonio') return /^\d$/.test(p[1] || '4') ? Gen.gonio({ grade: +(p[1] || 4) }) : Gen.gonio({ variant: p[1] });
      if (k === 'vf') return Gen.vf({ case: p[1] || 'normal' });
      if (k === 'fundus') { var ov = {}; (p[1] || '').split('+').forEach(function (x) { if (x) ov[x] = true; }); return Gen.fundus({ ov: ov }); }
      if (k === 'ascan') return Gen.ascan({ eye: p[1] || 'normal' });
    } catch (e) { console.error('inv gen ' + spec, e); }
    return null;
  }

  /* ======================================================================
     PRACTICE ENGINE — Observe → Réponds → Révèle
     ====================================================================== */
  function hotInline(hots) { var lab = (hots || []).filter(function (h) { return pick(h.label); }); return lab.length <= 1 && (!lab.length || String(pick(lab[0].label)).length <= 48); }
  function hotsHtml(hots) {
    hots = hots || []; var inline = hotInline(hots);
    return '<div class="inv-hots" aria-hidden="true">' + hots.map(function (hs, k) {
      var lab = pick(hs.label), side = hs.x > 68 ? ' r' : hs.x < 32 ? ' l' : '', below = hs.y > 78 ? ' up' : '';
      return '<span class="inv-hot' + (hs.decisive === false ? ' minor' : hs.decisive ? ' dec' : '') + side + below + (k % 2 ? ' alt' : '') + '" style="left:' + hs.x + '%;top:' + hs.y + '%;--r:' + (hs.r || 8) + ';--d:' + (k * 0.18).toFixed(2) + 's"><i></i>' + (!lab ? '' : inline ? '<b>' + E(lab) + '</b>' : '<em>' + (k + 1) + '</em>') + '</span>';
    }).join('') + '</div>';
  }
  function hotsLegend(hots) {
    if (!hots || !hots.length || hotInline(hots)) return '';
    return '<ol class="inv-hlist">' + hots.map(function (hs, k) { var lab = pick(hs.label); return lab ? '<li class="' + (hs.decisive === false ? '' : 'dec') + '"><span>' + (k + 1) + '</span>' + E(lab) + '</li>' : ''; }).join('') + '</ol>';
  }
  function resolveMedia(id) {
    var m = mediaById(id);
    if (!m && typeof id === 'string') { var rq = W.OPH.invMediaRequests && W.OPH.invMediaRequests[id]; if (rq && rq.photo && W.D && D.cat && D.cat(rq.photo)) m = { kind: 'photo', photo: rq.photo, alt: null, hotspots: [] }; }
    return m;
  }
  /* give a schematic svg string exactly one accessible name: role="img" + aria-label on the root <svg>, inner <title> removed */
  function svgNamed(svg, name) {
    if (!svg) return '';
    return svg.replace(/<svg\b([^>]*)>/i, function (all, attrs) {
      attrs = attrs.replace(/\s(role|aria-label|aria-labelledby|aria-hidden)="[^"]*"/gi, '');
      return '<svg' + attrs + ' role="img" aria-label="' + E(name) + '" focusable="false">';
    }).replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, '');
  }
  function mediaBlock(m, revealed) {
    if (!m) return '<div class="inv-media empty">' + E(S('media.soon', 'Image à venir', 'Image coming soon')) + '</div>';
    var body = '', hots = m.hotspots, foot = '', zoom = '', alt = revealed && m.alt ? pick(m.alt) : S('media.hidden', 'Image d’examen (légende masquée)', 'Investigation image (caption hidden)');
    if (m.kind === 'photo' && m.photo) {
      var e = W.D && D.cat ? D.cat(m.photo) : null;
      body = '<img src="' + Photo.src(m.photo) + '" alt="' + E(alt) + '"' + (e ? ' width="' + (e.tw || 440) + '" height="' + (e.th || 300) + '"' : '') + ' decoding="async">';
      // openly licensed catalogue images (IMG3-*, catalog3: author + licence) always use the catalogue credit line
      if (e && e.license) foot = Photo.credit(e, !revealed);
      else foot = m.credit ? '<div class="credit">' + PE(m.credit) + (revealed && m.source ? ' · <a href="' + E(m.source) + '" target="_blank" rel="noopener">' + E(S('media.src', 'page source', 'source page')) + '</a>' : '') + '</div>' : (e ? Photo.credit(e, !revealed) : '');
      if (e) zoom = '<button type="button" class="btn xs inv-zoom" data-act="lightbox" data-id="' + E(m.photo) + '" data-cap="' + E(revealed && m.alt ? pick(m.alt) : S('media.hidden', 'Image d’examen (légende masquée)', 'Investigation image (caption hidden)')) + '"' + (revealed ? '' : ' data-quiz="1"') + '>' + E(S('media.zoom', 'Agrandir', 'Enlarge')) + '</button>';
    } else {
      var g = (m.kind === 'gen' || m.gen) ? genFrom(m.gen) : null;
      body = svgNamed(g ? g.svg : (m.svg || ''), revealed && m.alt ? pick(m.alt) : S('media.hiddensch', 'Schéma d’examen (légende masquée)', 'Investigation schematic (caption hidden)'));
      // labels that answer the question stay hidden until the reveal (the « schéma » mark is kept)
      if (!revealed && m.labelsAnswer) body = body.replace(/<text\b[^>]*>([\s\S]*?)<\/text>/gi, function (all, inner) { return /sch[ée]ma|schematic/i.test(inner) ? all : ''; });
      if ((!hots || !hots.length) && g) hots = g.hot;
      foot = '<div class="credit">' + schemaBadge() + ' ' + (m.credit ? PE(m.credit) : E(S('media.orig', 'Schéma pédagogique original — pas une image de patient', 'Original teaching schematic — not a patient image'))) + '</div>';
    }
    return '<figure class="inv-media' + (revealed ? ' revealed' : '') + '"><div class="inv-media-in">' + body + (revealed ? hotsHtml(hots) : '') + zoom + '</div><figcaption>' + (revealed ? hotsLegend(hots) : '') + (revealed && m.alt ? '<span class="small">' + PE(m.alt) + '</span>' : (revealed ? '' : '<span class="xs muted">' + E(S('media.caphidden', 'Légende masquée jusqu’à ta réponse', 'Caption hidden until you answer')) + '</span>')) + foot + '</figcaption></figure>';
  }

  function practice(host, items, opts) {
    opts = opts || {};
    var st = { i: 0, res: [], conf: 'sure', phase: 'answer', order: {} };   // S-8: image and choices shown together (no 'ready' tap)
    var src = items.slice();
    function orderFor(it) { if (!st.order[it.id]) st.order[it.id] = U.shuffle(it.options.map(function (_, k) { return k; }), U.hash(it.id)); return st.order[it.id]; }
    function steps() {
      var ph = ['answer', 'reveal'], lab = [S('ph.obsans', 'Observe et réponds', 'Observe and answer'), S('ph.rev', 'Révèle', 'Reveal')];
      return '<ol class="inv-steps" aria-label="' + E(S('ph.aria', 'Étapes', 'Steps')) + '">' + ph.map(function (p, k) { var cur = ph.indexOf(st.phase); return '<li class="' + (k === cur ? 'on' : k < cur ? 'done' : '') + '"' + (k === cur ? ' aria-current="step"' : '') + '><span>' + (k + 1) + '</span>' + E(lab[k]) + '</li>'; }).join('') + '</ol>';
    }
    function head() {
      return '<div class="run-head"><span class="eyebrow">' + E(opts.title || S('pr.title', 'Pratique', 'Practice')) + '</span><span class="mono small">' + Math.min(st.i + 1, src.length) + ' / ' + src.length + '</span></div><div class="pbar"><i style="width:' + (100 * st.i / Math.max(1, src.length)).toFixed(1) + '%"></i></div>';
    }
    function draw(focusSel) {
      if (st.i >= src.length) return end();
      var it = src[st.i], m = resolveMedia(it.media), lvl = it.level ? '<span class="tag plain">' + E(S('pr.level', 'Niveau', 'Level')) + ' ' + it.level + '</span>' : '';
      var h = '<div class="inv-run card">' + head() + steps() + '<div class="inv-pgrid"><div class="inv-pmedia">' + mediaBlock(m, st.phase === 'reveal') + '</div><div class="inv-pside stack">' +
        '<div class="row tight">' + lvl + '</div><p class="inv-q">' + PM(it.q) + '</p>';
      if (st.phase === 'observe') {
        h += '<p class="small muted">' + E(S('pr.observe', 'Prends 10 secondes : nomme ce que tu vois avant de regarder les choix.', 'Take 10 seconds: name what you see before looking at the choices.')) + '</p><div class="row"><button type="button" class="btn primary" data-ip="ready">' + E(S('pr.ready', 'Je suis prêt à répondre', 'Ready to answer')) + '</button></div>';
      } else {
        var ord = orderFor(it), done = st.phase === 'reveal', last = st.last || {};
        h += '<div class="conf" role="group" aria-label="' + E(S('pr.conf', 'Ton niveau de confiance', 'Your confidence')) + '"><span class="small muted">' + E(S('pr.confl', 'Je réponds :', 'I answer:')) + '</span><button type="button" data-ic="sure" aria-pressed="' + (st.conf === 'sure') + '"' + (done ? ' disabled' : '') + '>' + E(S('pr.sure', 'avec assurance', 'confidently')) + '</button><button type="button" data-ic="unsure" aria-pressed="' + (st.conf === 'unsure') + '"' + (done ? ' disabled' : '') + '>' + E(S('pr.unsure', 'en hésitant', 'unsure')) + '</button></div>';
        h += '<div class="opts" tabindex="-1" role="group" aria-label="' + E(S('pr.opts', 'Choix de réponse', 'Answer choices')) + '">' + ord.map(function (k, j) {
          var cls = !done ? '' : k === it.answer ? ' correct' : k === last.k ? ' wrong' : '';
          return '<button type="button" class="opt' + cls + '" data-k="' + k + '"' + (done ? ' disabled' : '') + '><span class="key">' + (j + 1) + '</span><span>' + PM(it.options[k]) + '</span>' +
            (done && it.why && it.why[k] ? '<span class="why">' + (k === it.answer ? '<b>' + E(S('pr.right', 'Bonne réponse.', 'Correct answer.')) + '</b> ' : '<b>' + E(S('pr.whynot', 'Pourquoi pas :', 'Why not:')) + '</b> ') + PM(it.why[k]) + '</span>' : '') + '</button>';
        }).join('') + (done ? '' : '<button type="button" class="opt idk" data-k="-1"><span class="key">?</span><span>' + E(S('pr.idk', 'Je ne sais pas', 'I don’t know')) + '</span></button>') + '</div>';
        if (done) {
          var ok = last.ok, conf = last.conf;
          h += '<div class="feedback ' + (ok ? 'ok' : 'bad') + '" role="status"><div class="verdict">' + E(ok ? (conf === 'unsure' ? S('pr.okunsure', 'Exact, mais tu hésitais : à consolider', 'Correct, but you were unsure: consolidate') : S('pr.ok', 'Exact', 'Correct')) : (conf === 'idk' ? S('pr.idkfb', 'Bonne décision de ne pas deviner : voici la réponse', 'Good call not to guess: here is the answer') : S('pr.bad', 'Pas tout à fait', 'Not quite'))) + '</div>' +
            (it.reveal ? '<div><b>' + E(S('pr.decisive', 'Signe décisif :', 'Decisive sign:')) + '</b> ' + PM(it.reveal) + '</div>' : '') +
            '<div class="row"><button type="button" class="btn primary" data-ip="next">' + E(st.i + 1 < src.length ? S('pr.next', 'Image suivante', 'Next image') : S('pr.result', 'Voir mon résultat', 'See my result')) + '</button></div></div>';
        }
      }
      h += '</div></div></div>';
      host.innerHTML = h;
      var f = focusSel && U.$(focusSel, host); if (f) f.focus({ preventScroll: true });
    }
    function answer(k) {
      if (st.phase !== 'answer') return;
      var it = src[st.i], ok = k === it.answer, conf = k === -1 ? 'idk' : st.conf;
      st.last = { k: k, ok: ok, conf: conf }; st.res.push({ id: it.id, ok: ok, conf: conf });
      try { invStore()[it.id] = { ok: ok ? 1 : 0, conf: conf, t: Date.now() }; Store.touch(); } catch (e) { }
      st.phase = 'reveal'; draw('[data-ip="next"]');
      if (opts.onAnswer) opts.onAnswer(it, ok, conf);
    }
    function end() {
      var n = st.res.length, ok = st.res.filter(function (r) { return r.ok; }).length, sure = st.res.filter(function (r) { return r.ok && r.conf === 'sure'; }).length, wrong = st.res.filter(function (r) { return !r.ok || r.conf !== 'sure'; }).map(function (r) { return r.id; });
      host.innerHTML = '<div class="card stack run-end inv-end"><div class="eyebrow">' + E(opts.title || S('pr.title', 'Pratique', 'Practice')) + ' · ' + E(S('pr.done', 'terminé', 'done')) + '</div><div class="acuity-big">' + ok + ' / ' + n + '</div>' +
        '<div class="pbar ' + (ok / Math.max(1, n) >= .6 ? 'ok' : '') + '"><i style="width:' + (100 * ok / Math.max(1, n)).toFixed(0) + '%"></i></div>' +
        '<p class="small muted">' + E(sure + ' ' + S('pr.surecount', 'justes avec assurance. Les hésitations comptent comme à revoir.', 'correct with confidence. Unsure answers count as to review.')) + '</p>' +
        '<div class="row">' + (wrong.length ? '<button type="button" class="btn primary" data-ip="retry">' + E(S('pr.retry', 'Refaire les ratés et hésitations', 'Redo misses and unsure')) + ' (' + wrong.length + ')</button>' : '') + '<button type="button" class="btn" data-ip="again">' + E(S('pr.again', 'Recommencer', 'Start again')) + '</button></div></div>';
      st.wrongIds = wrong;
      var b = U.$('[data-ip]', host); if (b) b.focus({ preventScroll: true });
      if (opts.onEnd) opts.onEnd(ok, n);
    }
    function onClick(ev) {
      var t = ev.target;
      var ip = t.closest('[data-ip]');
      if (ip) {
        var a = ip.getAttribute('data-ip');
        if (a === 'next') { st.i++; st.phase = 'answer'; st.last = null; draw('.opts'); var top = host.getBoundingClientRect().top; if (top < 0) host.scrollIntoView({ block: 'start', behavior: reduced() ? 'auto' : 'smooth' }); }
        else if (a === 'retry') { var ids = st.wrongIds || []; src = items.filter(function (x) { return ids.indexOf(x.id) >= 0; }); st = { i: 0, res: [], conf: st.conf, phase: 'answer', order: st.order }; draw('.opts'); }
        else if (a === 'again') { src = items.slice(); st = { i: 0, res: [], conf: st.conf, phase: 'answer', order: {} }; draw('.opts'); }
        return;
      }
      var c = t.closest('[data-ic]'); if (c && st.phase === 'answer') { st.conf = c.getAttribute('data-ic'); setPressed(host, 'ic', st.conf); return; }
      var o = t.closest('.opt[data-k]'); if (o && !o.disabled) answer(+o.getAttribute('data-k'));
    }
    function onKey(ev) {
      if (ev.altKey || ev.ctrlKey || ev.metaKey) return;
      var tag = (ev.target.tagName || '').toLowerCase(); if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if (st.phase === 'answer') {
        if (/^[1-9]$/.test(ev.key)) { var it = src[st.i], ord = orderFor(it), j = +ev.key - 1; if (j < ord.length) { ev.preventDefault(); answer(ord[j]); } }
        else if (ev.key === '0' || ev.key === '?') { ev.preventDefault(); answer(-1); }
      }
    }
    if (!src.length) { host.innerHTML = '<div class="empty">' + E(S('pr.none', 'Les images de pratique de cet examen arrivent bientôt.', 'Practice images for this test are coming soon.')) + '</div>'; return function () { }; }
    host.addEventListener('click', onClick); host.addEventListener('keydown', onKey);
    draw();
    return function () { host.removeEventListener('click', onClick); host.removeEventListener('keydown', onKey); };
  }

  /* ======================================================================
     TOOLS — each tools[name](el) renders into el and returns a cleanup fn
     ====================================================================== */
  var tools = {};
  function chipsHtml(attr, list, extra) { return '<div class="chips inv-chips">' + list.map(function (x) { return '<button type="button" class="chip" data-' + attr + '="' + x[0] + '"' + (extra || '') + '>' + E(x[1]) + '</button>'; }).join('') + '</div>'; }
  function figWrap(svgHost, cap) { return '<figure class="inv-fig"><div class="inv-fig-in" ' + svgHost + '></div><figcaption>' + schemaBadge() + '<span>' + E(cap) + '</span></figcaption></figure>'; }
  function narrow(el) { return (el.getBoundingClientRect().width || 800) < 560; }

  /* ---------- A-scan simulator ---------- */
  tools['ascan-sim'] = function (el) {
    var st = { eye: 'normal', mode: 'measure', c1: 1.5, c2: 12, labels: false, quiz: null, score: [0, 0] }, drag = null;
    el.innerHTML = '<div class="inv-tool">' +
      '<div class="inv-bar">' + seg('eye', [['normal', S('as.normal', 'Œil normal', 'Normal eye')], ['short', S('as.short', 'Œil court', 'Short eye')], ['long', S('as.long', 'Œil long', 'Long eye')]], st.eye, S('as.eyel', 'Type d’œil', 'Eye type')) +
      seg('mode', [['measure', S('as.measure', 'Mesurer', 'Measure')], ['quiz', S('as.quiz', 'Quel pic ?', 'Which spike?')]], st.mode, S('mode', 'Mode', 'Mode')) + '</div>' +
      figWrap('data-svg', S('as.cap2', 'A-scan en immersion, œil phaque — vitesse moyenne ≈ 1 550 m/s', 'Immersion A-scan, phakic eye — average velocity ≈ 1550 m/s')) +
      '<div data-panel></div><div class="inv-out" data-out aria-live="polite"></div></div>';
    var svgHost = U.$('[data-svg]', el), panel = U.$('[data-panel]', el), out = U.$('[data-out]', el);
    function cal(mm, id, col) { var x = ASX(mm); return '<g data-cal="' + id + '"><line x1="' + x + '" x2="' + x + '" y1="14" y2="' + ASB + '" stroke="' + col + '" stroke-width="1.6" stroke-dasharray="5 3"/><rect x="' + (x - 9) + '" y="4" width="18" height="16" rx="4" fill="' + col + '"/><text x="' + x + '" y="16" text-anchor="middle" class="inv-calt">' + id + '</text><rect x="' + (x - 12) + '" y="0" width="24" height="' + ASB + '" fill="transparent" style="cursor:ew-resize"/></g>'; }
    function inner() {
      var s = '';
      if (st.mode === 'measure') {
        var a = Math.min(st.c1, st.c2), b = Math.max(st.c1, st.c2);
        s += '<line x1="' + ASX(a) + '" x2="' + ASX(b) + '" y1="204" y2="204" stroke="#ffd34d" stroke-width="1.4"/><text x="' + ((ASX(a) + ASX(b)) / 2) + '" y="200" text-anchor="middle" class="inv-calv">' + num(b - a, 2) + ' mm</text>';
        s += cal(st.c1, '1', '#ffd34d') + cal(st.c2, '2', '#5fd0ff');
      } else if (st.quiz) {
        var sp = st.quiz.sp, x = ASX(sp.mm), y = ASB - sp.h * ASH - 10;
        s += '<path d="M' + x + ',' + y + ' l-7,-12 h14 z" fill="#ffd34d"/><text x="' + x + '" y="' + (y - 16) + '" text-anchor="middle" class="inv-calv">?</text>';
      }
      return s;
    }
    function drawSvg() { svgHost.innerHTML = Gen.ascan({ eye: st.eye, labels: st.labels, inner: inner() }).svg; }
    function drawPanel() {
      if (st.mode === 'measure') {
        panel.innerHTML = '<div class="inv-ctl"><label>' + E(S('as.c1', 'Caliper 1 (avant)', 'Caliper 1 (front)')) + ' <input type="range" min="-0.5" max="32" step="0.05" value="' + st.c1 + '" data-rng="c1"></label>' +
          '<label>' + E(S('as.c2', 'Caliper 2 (arrière)', 'Caliper 2 (back)')) + ' <input type="range" min="-0.5" max="32" step="0.05" value="' + st.c2 + '" data-rng="c2"></label></div>' +
          '<p class="small muted">' + E(S('as.help', 'Glisse les calipers sur le tracé (ou utilise les curseurs) : de la cornée jusqu’au pic rétinien.', 'Drag the calipers on the trace (or use the sliders): from the cornea to the retinal spike.')) + '</p>' +
          '<div class="row"><button type="button" class="btn primary" data-a="check">' + E(S('as.check', 'Vérifier ma mesure', 'Check my measurement')) + '</button><button type="button" class="btn" data-a="labels" aria-pressed="' + st.labels + '">' + E(S('as.labels', 'Nommer les pics', 'Label spikes')) + '</button></div>';
      } else {
        var ids = ['cornea', 'lensA', 'lensP', 'retina', 'sclera', 'orbit'];
        panel.innerHTML = '<p class="small">' + E(S('as.qwhich', 'Quel est le pic marqué d’une flèche ?', 'Which spike is marked by the arrow?')) + ' <span class="mono xs">' + st.score[0] + ' / ' + st.score[1] + '</span></p>' + chipsHtml('sp', ids.map(function (i) { return [i, pick(SPIKE_NAMES[i])]; }));
      }
    }
    function newQuiz() { var ids = ['cornea', 'lensA', 'lensP', 'retina', 'sclera', 'orbit'], prev = st.quiz && st.quiz.id, id; do { id = ids[Math.floor(Math.random() * ids.length)]; } while (id === prev); st.quiz = { id: id, sp: ascanSpikes(st.eye).filter(function (s) { return s.id === id; })[0], done: false }; }
    function setCal(which, mm) { st[which] = Math.round(clamp(mm, -0.5, 32) * 20) / 20; drawSvg(); var r = U.$('[data-rng="' + which + '"]', panel); if (r) r.value = st[which]; }
    function check() {
      var e = EYES[st.eye], a = Math.min(st.c1, st.c2), b = Math.max(st.c1, st.c2), okA = Math.abs(a) <= .3, okB = Math.abs(b - e.al) <= .3, msg, cls = 'bad';
      if (okA && okB) {
        cls = 'ok';
        msg = '<div class="verdict">' + E(S('as.ok', 'Mesure correcte', 'Correct measurement')) + ' : ' + num(e.al) + ' mm</div><div>' + E(S('as.normalv', 'Normal adulte ≈ 23–24 mm.', 'Normal adult ≈ 23–24 mm.')) + ' ' +
          E({ normal: B('Longueur moyenne : pas d’amétropie axiale.', 'Average length: no axial ametropia.'), short: B('Œil court (< 22 mm) : hypermétropie axiale, chambre antérieure souvent étroite (risque de fermeture de l’angle), implant plus puissant.', 'Short eye (< 22 mm): axial hyperopia, often shallow anterior chamber (angle-closure risk), stronger IOL.'), long: B('Œil long (> 25–26 mm) : myopie axiale, risque accru de décollement de rétine, implant moins puissant.', 'Long eye (> 25–26 mm): axial myopia, higher retinal detachment risk, weaker IOL.') }[st.eye]) +
          '</div><div class="small muted">' + E(S('as.err', '1 mm d’erreur sur la longueur axiale ≈ 2,5–3 D d’erreur réfractive après chirurgie.', '1 mm axial length error ≈ 2.5–3 D postoperative refractive error.')) + '</div>';
      } else {
        var hint = [];
        if (!okA) hint.push(S('as.h1', 'Le caliper avant se place sur le premier pic (cornée).', 'The front caliper goes on the first spike (cornea).'));
        if (!okB) {
          if (Math.abs(b - (e.al + .6)) < .28) hint.push(S('as.hscl', 'Tu es sur le pic scléral : la mesure s’arrête au pic rétinien, juste devant.', 'You are on the scleral spike: measure to the retinal spike, just in front.'));
          else if (Math.abs(b - (e.acd + e.lt)) < .5 || Math.abs(b - e.acd) < .5) hint.push(S('as.hlens', 'C’est un écho du cristallin : continue jusqu’au grand pic après le vitré silencieux.', 'That is a lens echo: go on to the tall spike after the silent vitreous.'));
          else hint.push(S('as.hret', 'Place le caliper arrière sur le pic rétinien (grand pic net après le vitré).', 'Put the back caliper on the retinal spike (tall sharp spike after the vitreous).'));
        }
        msg = '<div class="verdict">' + E(S('as.notyet', 'Pas encore', 'Not yet')) + ' : ' + num(b - a, 2) + ' mm</div><div>' + hint.map(E).join(' ') + '</div>';
      }
      out.innerHTML = '<div class="feedback ' + cls + '">' + msg + '</div>';
    }
    function onClick(ev) {
      var t = ev.target, b;
      if ((b = t.closest('[data-eye]'))) { st.eye = b.getAttribute('data-eye'); setPressed(el, 'eye', st.eye); if (st.mode === 'quiz') newQuiz(); drawSvg(); drawPanel(); out.innerHTML = ''; return; }
      if ((b = t.closest('[data-mode]'))) { st.mode = b.getAttribute('data-mode'); setPressed(el, 'mode', st.mode); if (st.mode === 'quiz') newQuiz(); drawSvg(); drawPanel(); out.innerHTML = ''; return; }
      if ((b = t.closest('[data-a="check"]'))) { check(); return; }
      if ((b = t.closest('[data-a="labels"]'))) { st.labels = !st.labels; b.setAttribute('aria-pressed', String(st.labels)); drawSvg(); return; }
      if ((b = t.closest('[data-a="qnext"]'))) { newQuiz(); drawSvg(); drawPanel(); out.innerHTML = ''; var c = U.$('[data-sp]', panel); if (c) c.focus(); return; }
      if ((b = t.closest('[data-sp]')) && st.quiz && !st.quiz.done) {
        var ok = b.getAttribute('data-sp') === st.quiz.id; st.quiz.done = true; st.score[1]++; if (ok) st.score[0]++;
        U.$$('[data-sp]', panel).forEach(function (x) { x.disabled = true; if (x.getAttribute('data-sp') === st.quiz.id) x.classList.add('correct'); else if (x === b) x.classList.add('wrong'); });
        var why = { cornea: B('Premier pic, double : faces antérieure et postérieure de la cornée.', 'First spike, double: anterior and posterior corneal surfaces.'), lensA: B('Après la chambre antérieure silencieuse.', 'After the silent anterior chamber.'), lensP: B('Ferme le cristallin; ensuite le vitré est silencieux.', 'Closes the lens; then the vitreous is silent.'), retina: B('Grand pic net à pente raide après le vitré : c’est là que finit la longueur axiale.', 'Tall, steep spike after the vitreous: this is where axial length ends.'), sclera: B('Juste derrière la rétine, encore très haut.', 'Just behind the retina, still very tall.'), orbit: B('Échos décroissants et irréguliers de la graisse orbitaire.', 'Decaying, irregular echoes from orbital fat.') }[st.quiz.id];
        out.innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><div class="verdict">' + E(ok ? S('ok', 'Exact', 'Correct') : pick(SPIKE_NAMES[st.quiz.id])) + '</div><div>' + E(why) + '</div><div class="row"><button type="button" class="btn primary sm" data-a="qnext">' + E(S('as.qnext', 'Autre pic', 'Another spike')) + '</button></div></div>';
        drawPanel(); U.$$('[data-sp]', panel).forEach(function (x) { x.disabled = true; if (x.getAttribute('data-sp') === st.quiz.id) x.classList.add('correct'); else if (x.getAttribute('data-sp') === b.getAttribute('data-sp')) x.classList.add('wrong'); });
        var nb = U.$('[data-a="qnext"]', out); if (nb) nb.focus({ preventScroll: true });
      }
    }
    function onInput(ev) { var r = ev.target.closest('[data-rng]'); if (r) setCal(r.getAttribute('data-rng'), +r.value); }
    function mmFrom(ev) { var svg = U.$('svg', svgHost); var p = svgPt(svg, ev); return (p.x - 34) / 18; }
    function onDown(ev) {
      if (st.mode !== 'measure' || !ev.target.closest('svg')) return;
      var mm = mmFrom(ev), d1 = Math.abs(mm - st.c1), d2 = Math.abs(mm - st.c2);
      if (Math.min(d1, d2) > 1.2) return;
      drag = d1 <= d2 ? 'c1' : 'c2'; ev.preventDefault();
      try { svgHost.setPointerCapture(ev.pointerId); } catch (e) { }
    }
    function onMove(ev) { if (!drag) return; setCal(drag, mmFrom(ev)); }
    function onUp() { drag = null; }
    el.addEventListener('click', onClick); el.addEventListener('input', onInput);
    svgHost.addEventListener('pointerdown', onDown); svgHost.addEventListener('pointermove', onMove); svgHost.addEventListener('pointerup', onUp); svgHost.addEventListener('pointercancel', onUp);
    drawSvg(); drawPanel();
    return function () { el.removeEventListener('click', onClick); el.removeEventListener('input', onInput); };
  };

  /* ---------- B-scan probe ---------- */
  var BS_INFO = {
    normal: { n: { fr: 'Normal', en: 'Normal' }, s: [{ fr: 'Vitré anéchogène (noir).', en: 'Echo-free (black) vitreous.' }, { fr: 'Paroi postérieure régulière et très réflective.', en: 'Smooth, highly reflective posterior wall.' }, { fr: 'Ombre du nerf optique derrière la paroi (coupes axiale et longitudinale).', en: 'Optic nerve shadow behind the wall (axial and longitudinal scans).' }] },
    rd: { n: { fr: 'Décollement de rétine', en: 'Retinal detachment' }, s: [{ fr: 'Forme : membrane épaisse, plissée, en V ou en entonnoir.', en: 'Shape: thick, folded membrane, V- or funnel-shaped.' }, { fr: 'Insertion : attachée à la papille (et à l’ora serrata).', en: 'Insertion: attached at the disc (and the ora serrata).' }, { fr: 'Réflectivité élevée : persiste à faible gain (pic ~100 % en A-scan).', en: 'High reflectivity: persists at low gain (~100% spike on A-scan).' }, { fr: 'Mobilité modérée si récent; rigide si chronique (PVR).', en: 'Moderate aftermovement if recent; stiff if chronic (PVR).' }] },
    vh: { n: { fr: 'Hémorragie du vitré', en: 'Vitreous haemorrhage' }, s: [{ fr: 'Échos ponctués de faible réflectivité, mieux vus à gain élevé.', en: 'Low-reflectivity dot echoes, best seen at high gain.' }, { fr: 'Mobiles, se déposent en déclive.', en: 'Mobile, layering inferiorly.' }, { fr: 'But de l’examen : vérifier que la rétine est à plat derrière.', en: 'Purpose of the scan: confirm the retina is flat behind it.' }] },
    pvd: { n: { fr: 'Décollement postérieur du vitré', en: 'Posterior vitreous detachment' }, s: [{ fr: 'Membrane fine, lisse, peu réflective : disparaît quand on baisse le gain.', en: 'Thin, smooth, weakly reflective membrane: fades when gain is lowered.' }, { fr: 'Mouvement ample et ondulant à l’étude dynamique.', en: 'Wide, undulating aftermovement on dynamic study.' }, { fr: 'DPV complète : non attachée à la papille (une DPV incomplète peut l’être : réflectivité et mobilité tranchent).', en: 'Complete PVD: not attached at the disc (an incomplete PVD may be: reflectivity and mobility decide).' }] },
    cd: { n: { fr: 'Décollement choroïdien', en: 'Choroidal detachment' }, s: [{ fr: 'Dôme(s) lisse(s), épais, convexe(s), en périphérie.', en: 'Smooth, thick, convex dome(s) in the periphery.' }, { fr: 'Ne s’insère pas à la papille.', en: 'Does not insert at the disc.' }, { fr: 'Peu ou pas de mobilité; dômes qui se touchent = « kissing ».', en: 'Little or no aftermovement; domes touching = “kissing”.' }] }
  };
  var BS_ORI = {
    trans: { fr: 'Transverse : sonde parallèle au limbe. Montre l’étendue latérale (circonférentielle) d’une lésion; l’ombre du nerf optique n’apparaît que dans les coupes postérieures (sonde près du limbe) et sert alors de repère.', en: 'Transverse: probe parallel to the limbus. Shows the lateral (circumferential) extent of a lesion; the optic nerve shadow appears only on posterior sections (probe near the limbus) and is then used as a landmark.' },
    long: { fr: 'Longitudinale : sonde perpendiculaire au limbe (radiale). Le nerf optique est en bas de l’écran : idéale pour voir l’insertion papillaire.', en: 'Longitudinal: probe perpendicular to the limbus (radial). The optic nerve is at the bottom of the screen: ideal to see insertion at the disc.' },
    axial: { fr: 'Axiale : sonde sur la cornée, faisceau à travers le cristallin jusqu’à la papille (centrée). Repérage facile mais le cristallin atténue le signal.', en: 'Axial: probe on the cornea, beam through the lens to the disc (centred). Easy orientation but the lens attenuates the signal.' }
  };
  function probeMini(ori) {
    var s = '<svg viewBox="0 0 120 120" class="inv-mini" aria-hidden="true"><circle cx="60" cy="60" r="50" fill="var(--t-sclera)" stroke="var(--t-sclera-edge)"/><circle cx="60" cy="60" r="22" fill="var(--t-iris)"/><circle cx="60" cy="60" r="8" fill="#111"/>';
    if (ori === 'axial') s += '<rect x="52" y="52" width="16" height="16" rx="4" fill="var(--cobalt)" opacity=".85"/><circle cx="60" cy="48" r="3" fill="#ffd34d"/>';
    else if (ori === 'trans') s += '<rect x="36" y="88" width="48" height="12" rx="4" fill="var(--cobalt)" opacity=".9"/><circle cx="36" cy="94" r="3" fill="#ffd34d"/>';
    else s += '<rect x="54" y="76" width="12" height="40" rx="4" fill="var(--cobalt)" opacity=".9"/><circle cx="60" cy="80" r="3" fill="#ffd34d"/>';
    return s + '</svg>';
  }
  tools['bscan-probe'] = function (el) {
    var st = { ori: 'axial', path: 'rd', gain: 70, marks: false }, raf = 0, t0 = 0;
    el.innerHTML = '<div class="inv-tool">' +
      '<div class="inv-bar">' + seg('ori', [['trans', S('bs.trans', 'Transverse', 'Transverse')], ['long', S('bs.long', 'Longitudinale', 'Longitudinal')], ['axial', S('bs.axial', 'Axiale', 'Axial')]], st.ori, S('bs.oril', 'Orientation de la sonde', 'Probe orientation')) + '</div>' +
      '<div class="inv-bar">' + seg('path', ['normal', 'rd', 'vh', 'pvd', 'cd'].map(function (k) { return [k, pick(BS_INFO[k].n)]; }), st.path, S('bs.pathl', 'Image', 'Image')) + '</div>' +
      '<div class="inv-two"><div>' + figWrap('data-svg', S('bs.cap', 'Échographie B : sonde à gauche, paroi postérieure à droite', 'B-scan: probe on the left, posterior wall on the right')) + '</div>' +
      '<div class="stack"><div class="inv-probe"><div data-mini></div><p class="small" data-oriinfo></p></div>' +
      '<label class="inv-gain">' + E(S('bs.gain', 'Gain', 'Gain')) + ' <input type="range" min="0" max="100" step="5" value="' + st.gain + '" data-gain> <span class="mono xs" data-gv></span></label>' +
      '<div class="row"><button type="button" class="btn" data-a="move">' + E(S('bs.move', 'Faire bouger l’œil (cinétique)', 'Move the eye (kinetic)')) + '</button><button type="button" class="btn" data-a="marks" aria-pressed="false">' + E(S('bs.marks', 'Signe clé', 'Key sign')) + '</button></div>' +
      '<div class="inv-info" data-info aria-live="polite"></div></div></div></div>';
    var svgHost = U.$('[data-svg]', el);
    function draw(phase, ghost) {
      var g = Gen.bscan({ path: st.path, ori: st.ori, gain: st.gain, phase: phase || 0, ghost: ghost });
      svgHost.innerHTML = g.svg + (st.marks ? hotsHtml(g.hot) : '');
      svgHost.classList.toggle('marks', st.marks);
    }
    function info() {
      U.$('[data-mini]', el).innerHTML = probeMini(st.ori);
      U.$('[data-oriinfo]', el).textContent = pick(BS_ORI[st.ori]);
      U.$('[data-gv]', el).textContent = st.gain < 40 ? S('bs.low', 'faible', 'low') : st.gain > 75 ? S('bs.high', 'élevé', 'high') : S('bs.mid', 'moyen', 'medium');
      var i = BS_INFO[st.path], extra = '';
      if (st.ori === 'trans') extra = '<p class="small callout amber">' + E(B('Coupe transverse postérieure : l’ombre du nerf optique sert de repère. Sur une coupe transverse plus antérieure, elle disparaît.', 'Posterior transverse section: the optic nerve shadow is the landmark. On a more anterior transverse section it disappears.')) + '</p>';
      if (st.gain < 40 && (st.path === 'vh' || st.path === 'pvd')) extra += '<p class="small callout amber">' + E(B('Gain faible : les échos peu réflectifs disparaissent. Monte le gain pour les voir.', 'Low gain: weak echoes vanish. Raise the gain to see them.')) + '</p>';
      U.$('[data-info]', el).innerHTML = '<h3>' + PE(i.n) + '</h3><ul class="small">' + i.s.map(function (x) { return '<li>' + PE(x) + '</li>'; }).join('') + '</ul>' + extra;
    }
    function move() {
      cancelAnimationFrame(raf);
      if (st.path === 'cd' || st.path === 'normal') { draw(0); U.$('[data-info]', el).insertAdjacentHTML('beforeend', '<p class="small"><b>' + E(B('Étude dynamique :', 'Dynamic study:')) + '</b> ' + E(st.path === 'cd' ? B('les dômes choroïdiens ne bougent presque pas.', 'choroidal domes barely move.') : B('rien ne bouge dans un vitré normal.', 'nothing moves in a normal vitreous.')) + '</p>'); return; }
      if (reduced()) { draw(0, true); U.$('[data-info]', el).insertAdjacentHTML('beforeend', '<p class="small">' + E(B('Mouvement réduit : le tracé pointillé montre l’amplitude du mouvement.', 'Reduced motion: the dashed outline shows the movement amplitude.')) + '</p>'); return; }
      t0 = performance.now();
      (function step(now) { var t = (now - t0) / 1000, ph = Math.exp(-t / .9) * Math.sin(2 * Math.PI * 1.4 * t); draw(ph); if (t < 3) raf = requestAnimationFrame(step); else draw(0); })(t0);
    }
    function onClick(ev) {
      var b, t = ev.target;
      if ((b = t.closest('[data-ori]'))) { st.ori = b.getAttribute('data-ori'); setPressed(el, 'ori', st.ori); cancelAnimationFrame(raf); draw(); info(); return; }
      if ((b = t.closest('[data-path]'))) { st.path = b.getAttribute('data-path'); setPressed(el, 'path', st.path); cancelAnimationFrame(raf); draw(); info(); return; }
      if ((b = t.closest('[data-a="move"]'))) { info(); move(); return; }
      if ((b = t.closest('[data-a="marks"]'))) { st.marks = !st.marks; b.setAttribute('aria-pressed', String(st.marks)); draw(); }
    }
    function onInput(ev) { if (ev.target.hasAttribute('data-gain')) { st.gain = +ev.target.value; draw(); info(); } }
    el.addEventListener('click', onClick); el.addEventListener('input', onInput);
    draw(); info();
    return function () { cancelAnimationFrame(raf); el.removeEventListener('click', onClick); el.removeEventListener('input', onInput); };
  };

  /* ---------- OCT layers ---------- */
  var OCT_FLUID = {
    irf: { n: { fr: 'Liquide intrarétinien', en: 'Intraretinal fluid' }, d: { fr: 'Espaces kystiques hyporéflectifs DANS la rétine (CNI, CPE/CNE), rétine épaissie : œdème maculaire (diabète, occlusion veineuse, post-opératoire, néovaisseaux).', en: 'Hyporeflective cystoid spaces WITHIN the retina (INL, OPL/ONL), thickened retina: macular oedema (diabetes, vein occlusion, postoperative, neovascularisation).' } },
    srf: { n: { fr: 'Liquide sous-rétinien', en: 'Subretinal fluid' }, d: { fr: 'Dôme hyporéflectif ENTRE la rétine neurosensorielle et l’EPR, qui reste plat : choriorétinopathie séreuse centrale, néovaisseaux, décollement de rétine.', en: 'Hyporeflective dome BETWEEN the neurosensory retina and the RPE, which stays flat: central serous chorioretinopathy, neovascularisation, retinal detachment.' } },
    ped: { n: { fr: 'Décollement de l’EPR (DEP)', en: 'Pigment epithelial detachment (PED)' }, d: { fr: 'L’EPR lui-même est soulevé en dôme au-dessus de la membrane de Bruch : DMLA (séreux, drusénoïde, fibrovasculaire), CRSC.', en: 'The RPE itself is lifted into a dome above Bruch membrane: AMD (serous, drusenoid, fibrovascular), CSC.' } }
  };
  tools['oct-layers'] = function (el) {
    var st = { mode: 'explore', sel: null, q: null, fluid: 'none', fq: null, score: [0, 0] }, layers = OCT_LAYERS.filter(function (l) { return !l.gap; }), geo = octGeom('none');
    el.innerHTML = '<div class="inv-tool"><div class="inv-bar">' + seg('mode', [['explore', S('oct.explore', 'Explorer', 'Explore')], ['label', S('oct.label', 'Étiqueter', 'Label')], ['fluid', S('oct.fluid', 'Trouver le liquide', 'Find the fluid')]], st.mode, S('mode', 'Mode', 'Mode')) + '</div>' +
      figWrap('data-svg', S('oct.cap', 'Coupe OCT horizontale passant par la fovéa (œil droit), niveaux de gris', 'Horizontal OCT B-scan through the fovea (right eye), greyscale')) +
      '<div data-panel></div><div class="inv-out" data-out aria-live="polite"></div></div>';
    var svgHost = U.$('[data-svg]', el), panel = U.$('[data-panel]', el), out = U.$('[data-out]', el);
    function draw() {
      var lab = null;
      if (st.mode === 'explore' && st.sel) lab = { id: st.sel, text: pick(layers.filter(function (l) { return l.id === st.sel; })[0].n).replace(/\s*\(.*\)$/, ''), x: narrow(el) ? 400 : 470 };
      var crop = narrow(el), wpx = svgHost.getBoundingClientRect().width || 640, hitU = st.mode === 'fluid' ? 0 : 24 / (wpx / (crop ? 360 : 640));
      var g = Gen.oct({ fluid: st.mode === 'fluid' ? st.fluid : 'none', hl: st.mode !== 'fluid' ? st.sel : null, label: lab, crop: crop, hitU: hitU });
      geo = g.geo;
      svgHost.innerHTML = g.svg + (st.mode === 'fluid' && st.fq && st.fq.done ? hotsHtml(g.hot) : '');
      var svgEl = U.$('svg', svgHost);
      if (st.mode !== 'fluid' && svgEl) {
        svgEl.setAttribute('role', 'group');
        svgEl.setAttribute('aria-label', S('oct.grp', 'Coupe OCT : couches à toucher (de haut en bas)', 'OCT scan: tappable layers (top to bottom)'));
        var seen = {};
        U.$$('[data-layer]', svgHost).forEach(function (p) {
          var id = p.getAttribute('data-layer'), k = layers.map(function (l) { return l.id; }).indexOf(id), l = layers[k];
          if (seen[id]) { p.setAttribute('aria-hidden', 'true'); return; } seen[id] = 1;
          p.setAttribute('tabindex', '0'); p.setAttribute('role', 'button');
          p.setAttribute('aria-label', st.mode === 'explore' ? pick(l.n) : S('oct.layern', 'Couche', 'Layer') + ' ' + (k + 1));
        });
      }
    }
    function layerInfo(id) { var l = layers.filter(function (x) { return x.id === id; })[0]; return '<div class="inv-info"><h3>' + PE(l.n) + '</h3><p class="small">' + PE(l.d) + '</p></div>'; }
    function drawPanel() {
      if (st.mode === 'explore') panel.innerHTML = '<p class="small muted">' + E(S('oct.ehelp', 'Touche une couche sur le schéma, ou choisis-la ici :', 'Tap a layer on the schematic, or pick it here:')) + '</p>' + chipsHtml('ly', layers.map(function (l) { return [l.id, pick(l.n).replace(/^.*\((.*)\)$/, '$1')]; }));
      else if (st.mode === 'label') panel.innerHTML = st.q ? '<p class="inv-prompt">' + E(S('oct.tap', 'Touche :', 'Tap:')) + ' <b>' + PE(st.q.layer.n) + '</b> <span class="mono xs">' + (st.q.i + 1) + ' / ' + st.q.list.length + ' · ' + st.score[0] + ' ✓</span></p>' +
        '<p class="xs muted">' + E(S('oct.numhelp', 'Ou choisis le numéro de la couche, de haut (1) en bas :', 'Or pick the layer number, from top (1) down:')) + '</p>' +
        '<div class="chips inv-chips inv-num" role="group" aria-label="' + E(S('oct.numl', 'Couches numérotées de haut en bas', 'Layers numbered top to bottom')) + '">' + layers.map(function (l, k) { return '<button type="button" class="chip" data-lyn="' + l.id + '" aria-label="' + E(S('oct.layern', 'Couche', 'Layer') + ' ' + (k + 1)) + '"' + (st.q.answered ? ' disabled' : '') + '>' + (k + 1) + '</button>'; }).join('') + '</div>' : '';
      else panel.innerHTML = '<p class="small">' + E(S('oct.fq', 'Où est le liquide ?', 'Where is the fluid?')) + '</p>' + chipsHtml('fl', ['irf', 'srf', 'ped'].map(function (k) { return [k, pick(OCT_FLUID[k].n)]; }));
      if (st.mode === 'explore') U.$$('[data-ly]', panel).forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-ly') === st.sel)); });
    }
    function hit(x, y) {
      var best = null, bd = 1e9;
      layers.forEach(function (l) { var t = octAt(geo[l.id].top, geo.xs, x), b = octAt(geo[l.id].bot, geo.xs, x), d = y < t ? t - y : y > b ? y - b : 0; if (l.thin && d < 3.5) d = -1; if (d < bd) { bd = d; best = l.id; } });
      return bd <= 6 ? best : null;
    }
    function startLabel() { st.q = { list: U.shuffle(layers), i: 0 }; st.q.layer = st.q.list[0]; st.score = [0, 0]; st.sel = null; }
    function startFluid() { var prev = st.fluid; do { st.fluid = ['irf', 'srf', 'ped'][Math.floor(Math.random() * 3)]; } while (st.fq && st.fluid === prev); st.fq = { done: false }; }
    function choose(id) {
      if (!id) return;
      if (st.mode === 'explore') { st.sel = id; draw(); drawPanel(); out.innerHTML = layerInfo(id); return; }
      if (st.mode === 'label' && st.q) {
        var want = st.q.layer, ok = id === want.id, iw = layers.indexOf(want), ig = layers.map(function (l) { return l.id; }).indexOf(id);
        st.score[1]++; if (ok) st.score[0]++;
        st.sel = want.id; draw();
        out.innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><div class="verdict">' + E(ok ? S('ok', 'Exact', 'Correct') : S('oct.thisis', 'Tu as touché :', 'You tapped:') + ' ' + pick(layers[ig].n)) + '</div>' +
          (ok ? '<div class="small">' + PE(want.d) + '</div>' : '<div class="small">' + E(iw < ig ? S('oct.higher', 'La couche cherchée est plus haut (plus interne), surlignée en jaune.', 'The target layer is higher (more inner), highlighted in yellow.') : S('oct.lower', 'La couche cherchée est plus bas (plus externe), surlignée en jaune.', 'The target layer is lower (more outer), highlighted in yellow.')) + '</div>') +
          '<div class="row"><button type="button" class="btn primary sm" data-a="lnext">' + E(st.q.i + 1 < st.q.list.length ? S('oct.nextl', 'Couche suivante', 'Next layer') : S('oct.endl', 'Terminer', 'Finish')) + '</button></div></div>';
        st.q.answered = true;
        var nb = U.$('[data-a="lnext"]', out); if (nb) nb.focus({ preventScroll: true });
      }
    }
    function onClick(ev) {
      var t = ev.target, b;
      if ((b = t.closest('[data-mode]'))) {
        st.mode = b.getAttribute('data-mode'); setPressed(el, 'mode', st.mode); out.innerHTML = ''; st.sel = null;
        if (st.mode === 'label') startLabel(); if (st.mode === 'fluid') startFluid();
        draw(); drawPanel(); return;
      }
      if ((b = t.closest('[data-ly]'))) { choose(b.getAttribute('data-ly')); return; }
      if ((b = t.closest('[data-lyn]')) && st.q && !st.q.answered) { choose(b.getAttribute('data-lyn')); U.$$('[data-lyn]', panel).forEach(function (x) { x.disabled = true; }); return; }
      if ((b = t.closest('[data-a="lnext"]'))) {
        st.q.i++; st.q.answered = false; st.sel = null;
        if (st.q.i >= st.q.list.length) { out.innerHTML = '<div class="feedback ok"><div class="verdict">' + st.score[0] + ' / ' + st.score[1] + '</div><div class="row"><button type="button" class="btn sm" data-a="lagain">' + E(S('pr.again', 'Recommencer', 'Start again')) + '</button></div></div>'; st.q = null; }
        else { st.q.layer = st.q.list[st.q.i]; out.innerHTML = ''; }
        draw(); drawPanel(); return;
      }
      if ((b = t.closest('[data-a="lagain"]'))) { startLabel(); out.innerHTML = ''; draw(); drawPanel(); return; }
      if ((b = t.closest('[data-a="fnext"]'))) { startFluid(); out.innerHTML = ''; draw(); drawPanel(); return; }
      if ((b = t.closest('[data-fl]')) && st.fq && !st.fq.done) {
        var ok = b.getAttribute('data-fl') === st.fluid; st.fq.done = true;
        U.$$('[data-fl]', panel).forEach(function (x) { x.disabled = true; if (x.getAttribute('data-fl') === st.fluid) x.classList.add('correct'); else if (x === b) x.classList.add('wrong'); });
        draw();
        out.innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><div class="verdict">' + PE(OCT_FLUID[st.fluid].n) + '</div><div class="small">' + PE(OCT_FLUID[st.fluid].d) + '</div><div class="row"><button type="button" class="btn primary sm" data-a="fnext">' + E(S('oct.fnext', 'Autre coupe', 'Another scan')) + '</button></div></div>';
        return;
      }
      if (t.closest('svg') && st.mode !== 'fluid' && !(st.mode === 'label' && (!st.q || st.q.answered))) { var hl = t.closest('[data-layer]'); if (hl) { choose(hl.getAttribute('data-layer')); return; } var p = svgPt(U.$('svg', svgHost), ev); choose(hit(p.x, p.y)); }
    }
    function onKey(ev) { var l = ev.target.closest && ev.target.closest('[data-layer]'); if (l && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); if (st.mode === 'explore' || (st.mode === 'label' && st.q && !st.q.answered)) choose(l.getAttribute('data-layer')); } }
    var onResize = U.debounce(function () { draw(); }, 200);
    el.addEventListener('click', onClick); el.addEventListener('keydown', onKey); window.addEventListener('resize', onResize);
    draw(); drawPanel();
    return function () { el.removeEventListener('click', onClick); el.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  };

  /* ---------- Gonioscopy grader ---------- */
  var SHAFFER = {
    4: { fr: 'Shaffer 4 : 35–45°, bande ciliaire visible. Fermeture improbable.', en: 'Shaffer 4: 35–45°, ciliary band visible. Closure unlikely.' },
    3: { fr: 'Shaffer 3 : 20–35°, éperon scléral visible. Fermeture improbable.', en: 'Shaffer 3: 20–35°, scleral spur visible. Closure unlikely.' },
    2: { fr: 'Shaffer 2 : ~20°, trabéculum visible. Fermeture possible.', en: 'Shaffer 2: ~20°, meshwork visible. Closure possible.' },
    1: { fr: 'Shaffer 1 : ≤ 10°, seule la ligne de Schwalbe. Fermeture probable.', en: 'Shaffer 1: ≤ 10°, Schwalbe line only. Closure likely.' },
    0: { fr: 'Shaffer 0 : contact irido-cornéen, angle fermé.', en: 'Shaffer 0: iridocorneal contact, closed angle.' }
  };
  var GONIO_VAR = {
    none: { fr: 'Angle normal', en: 'Normal angle' },
    pas: { n: { fr: 'Synéchies antérieures périphériques', en: 'Peripheral anterior synechiae' }, d: { fr: 'Adhérences de l’iris qui montent au-dessus de l’éperon, souvent jusqu’au trabéculum. L’indentation les distingue d’une simple apposition (qui s’ouvre).', en: 'Iris adhesions rising above the spur, often to the meshwork. Indentation separates them from simple apposition (which opens).' } },
    nv: { n: { fr: 'Néovaisseaux de l’angle', en: 'Angle neovascularisation' }, d: { fr: 'Fins vaisseaux qui croisent l’éperon scléral vers le trabéculum (les vaisseaux normaux ne le croisent pas) : ischémie rétinienne (diabète, occlusion veineuse).', en: 'Fine vessels crossing the scleral spur onto the meshwork (normal vessels do not cross it): retinal ischaemia (diabetes, vein occlusion).' } },
    rec: { n: { fr: 'Récession de l’angle', en: 'Angle recession' }, d: { fr: 'Bande ciliaire anormalement large et irrégulière après un traumatisme contusif; comparer à l’autre œil. Risque de glaucome à long terme.', en: 'Abnormally wide, irregular ciliary band after blunt trauma; compare with the other eye. Long-term glaucoma risk.' } }
  };
  var GONIO_POST = [['none', { fr: 'Aucune', en: 'None' }], ['sl', GONIO_BANDS[1].n], ['tm', GONIO_BANDS[2].n], ['ss', GONIO_BANDS[3].n], ['cbb', GONIO_BANDS[4].n]];
  var GRADE_POST = { 0: 'none', 1: 'sl', 2: 'tm', 3: 'ss', 4: 'cbb' };
  tools['gonio-grader'] = function (el) {
    var st = { mode: 'explore', grade: 4, variant: 'none', sel: null, cases: null, ci: 0, step: 0, score: [0, 0] };
    el.innerHTML = '<div class="inv-tool"><div class="inv-bar">' + seg('mode', [['explore', S('go.explore', 'Explorer', 'Explore')], ['quiz', S('go.quiz', 'Défi : grader', 'Challenge: grade')]], st.mode, S('mode', 'Mode', 'Mode')) + '</div>' +
      figWrap('data-svg', S('go.cap', 'Vue de l’angle au verre de gonioscopie : cornée en haut, iris en bas', 'Angle seen through a gonioscopy lens: cornea at top, iris at bottom')) +
      '<div data-panel></div><div class="inv-out" data-out aria-live="polite"></div></div>';
    var svgHost = U.$('[data-svg]', el), panel = U.$('[data-panel]', el), out = U.$('[data-out]', el);
    function cur() { return st.mode === 'quiz' && st.cases ? st.cases[st.ci] : { grade: st.grade, variant: st.variant }; }
    function draw(reveal) {
      var c = cur(), g = Gen.gonio({ grade: c.grade, variant: c.variant, hitU: 24 / ((svgHost.getBoundingClientRect().width || 400) / 400) });
      svgHost.innerHTML = g.svg + (reveal ? hotsHtml(g.hot) : '');
      if (st.sel) { var p = U.$('[data-vband="' + st.sel + '"]', svgHost) || U.$('[data-band="' + st.sel + '"]', svgHost); if (p) p.classList.add('inv-hl'); }
    }
    function bandInfo(id) {
      var b = GONIO_BANDS.filter(function (x) { return x.id === id; })[0];
      if (b) return '<div class="inv-info"><h3>' + PE(b.n) + '</h3><p class="small">' + PE(b.d) + '</p></div>';
      if (id === 'iris') return '<div class="inv-info"><h3>' + E(B('Iris (racine)', 'Iris (root)')) + '</h3><p class="small">' + E(B('Plus l’iris est convexe et haut, plus il cache de structures : l’angle se ferme.', 'The more convex and high the iris, the more structures it hides: the angle narrows.')) + '</p></div>';
      if (GONIO_VAR[id]) return '<div class="inv-info"><h3>' + PE(GONIO_VAR[id].n) + '</h3><p class="small">' + PE(GONIO_VAR[id].d) + '</p></div>';
      return '';
    }
    function drawPanel() {
      if (st.mode === 'explore') {
        panel.innerHTML = '<label class="inv-gain">' + E(S('go.grade', 'Ouverture (Shaffer)', 'Opening (Shaffer)')) + ' <input type="range" min="0" max="4" step="1" value="' + st.grade + '" data-grade' + (st.variant !== 'none' ? ' disabled' : '') + '> <b class="mono">' + (st.variant === 'none' ? st.grade : (st.variant === 'pas' ? 3 : 4)) + '</b></label>' +
          '<p class="small">' + PE(SHAFFER[st.variant === 'none' ? st.grade : (st.variant === 'pas' ? 3 : 4)]) + '</p>' +
          seg('var', [['none', pick(GONIO_VAR.none)], ['pas', pick(GONIO_VAR.pas.n)], ['nv', pick(GONIO_VAR.nv.n)], ['rec', pick(GONIO_VAR.rec.n)]], st.variant, S('go.varl', 'Variante', 'Variant')) +
          '<p class="small muted">' + E(S('go.ehelp', 'Touche une bande ou choisis une structure :', 'Tap a band or pick a structure:')) + '</p>' + chipsHtml('bd', GONIO_BANDS.slice(1).map(function (b) { return [b.id, pick(b.n)]; }).concat([['iris', B('Iris', 'Iris')]]));
        return;
      }
      var c = cur();
      var hdr = '<p class="inv-prompt"><span class="mono xs">' + E(S('go.case', 'Cas', 'Case')) + ' ' + (st.ci + 1) + ' / ' + st.cases.length + ' · ' + st.score[0] + ' / ' + st.score[1] + '</span></p>';
      if (c.variant !== 'none') panel.innerHTML = hdr + '<p class="small"><b>' + E(S('go.qvar', 'Quelle anomalie vois-tu ?', 'What abnormality do you see?')) + '</b></p>' + chipsHtml('gv', [['none', pick(GONIO_VAR.none)], ['pas', pick(GONIO_VAR.pas.n)], ['nv', pick(GONIO_VAR.nv.n)], ['rec', pick(GONIO_VAR.rec.n)]]);
      else if (st.step === 0) panel.innerHTML = hdr + '<p class="small"><b>' + E(S('go.qpost', '1. Structure la plus postérieure visible ?', '1. Most posterior visible structure?')) + '</b></p>' + chipsHtml('gp', GONIO_POST.map(function (x) { return [x[0], pick(x[1])]; }));
      else panel.innerHTML = hdr + '<p class="small"><b>' + E(S('go.qgrade', '2. Grade de Shaffer ?', '2. Shaffer grade?')) + '</b></p>' + chipsHtml('gg', [[0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4']]);
    }
    function startQuiz() { st.cases = U.shuffle([0, 1, 2, 3, 4].map(function (g) { return { grade: g, variant: 'none' }; }).concat([{ grade: 3, variant: 'pas' }, { grade: 4, variant: 'nv' }, { grade: 4, variant: 'rec' }])); st.ci = 0; st.step = 0; st.score = [0, 0]; }
    function verdict(ok, body, next) { out.innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><div class="verdict">' + E(ok ? S('ok', 'Exact', 'Correct') : S('pr.bad', 'Pas tout à fait', 'Not quite')) + '</div><div class="small">' + body + '</div>' + (next ? '<div class="row"><button type="button" class="btn primary sm" data-a="' + next + '">' + E(S('go.next', 'Continuer', 'Continue')) + '</button></div>' : '') + '</div>'; var nb = U.$('[data-a]', out); if (nb) nb.focus({ preventScroll: true }); }
    function mark(attr, right, chosen) { U.$$('[data-' + attr + ']', panel).forEach(function (x) { x.disabled = true; var v = x.getAttribute('data-' + attr); if (v === String(right)) x.classList.add('correct'); else if (v === String(chosen)) x.classList.add('wrong'); }); }
    function onClick(ev) {
      var t = ev.target, b;
      if ((b = t.closest('[data-mode]'))) { st.mode = b.getAttribute('data-mode'); setPressed(el, 'mode', st.mode); st.sel = null; out.innerHTML = ''; if (st.mode === 'quiz') startQuiz(); draw(); drawPanel(); return; }
      if ((b = t.closest('[data-var]'))) { st.variant = b.getAttribute('data-var'); st.sel = null; draw(st.variant !== 'none'); drawPanel(); out.innerHTML = st.variant !== 'none' ? bandInfo(st.variant) : ''; return; }
      if ((b = t.closest('[data-bd]'))) { st.sel = b.getAttribute('data-bd'); draw(); out.innerHTML = bandInfo(st.sel); return; }
      if ((b = t.closest('[data-gp]'))) {
        var c = cur(), right = GRADE_POST[c.grade], ch = b.getAttribute('data-gp'), ok = ch === right; st.score[1]++; if (ok) st.score[0]++; mark('gp', right, ch);
        verdict(ok, E(ok ? B('Maintenant, donne le grade.', 'Now give the grade.') : B('La plus postérieure visible était : ', 'The most posterior visible was: ') + pick(GONIO_POST.filter(function (x) { return x[0] === right; })[0][1]) + '.'), 'gstep'); return;
      }
      if ((b = t.closest('[data-a="gstep"]'))) { st.step = 1; out.innerHTML = ''; drawPanel(); var f = U.$('[data-gg]', panel); if (f) f.focus(); return; }
      if ((b = t.closest('[data-gg]'))) {
        var c2 = cur(), g = +b.getAttribute('data-gg'), ok2 = g === c2.grade; st.score[1]++; if (ok2) st.score[0]++; mark('gg', c2.grade, g); draw(true);
        verdict(ok2, PE(SHAFFER[c2.grade]), 'gnext'); return;
      }
      if ((b = t.closest('[data-gv]'))) {
        var c3 = cur(), v = b.getAttribute('data-gv'), ok3 = v === c3.variant; st.score[1]++; if (ok3) st.score[0]++; mark('gv', c3.variant, v); draw(true);
        verdict(ok3, PE(GONIO_VAR[c3.variant].d), 'gnext'); return;
      }
      if ((b = t.closest('[data-a="gnext"]'))) {
        st.ci++; st.step = 0; out.innerHTML = '';
        if (st.ci >= st.cases.length) { out.innerHTML = '<div class="feedback ok"><div class="verdict">' + st.score[0] + ' / ' + st.score[1] + '</div><div class="row"><button type="button" class="btn sm" data-a="gagain">' + E(S('pr.again', 'Recommencer', 'Start again')) + '</button></div></div>'; st.ci = st.cases.length - 1; panel.innerHTML = ''; return; }
        draw(); drawPanel(); var f2 = U.$('.chip', panel); if (f2) f2.focus(); return;
      }
      if ((b = t.closest('[data-a="gagain"]'))) { startQuiz(); out.innerHTML = ''; draw(); drawPanel(); return; }
      var band = t.closest('[data-band]'); if (band && st.mode === 'explore') { st.sel = band.getAttribute('data-band'); draw(st.variant !== 'none'); out.innerHTML = bandInfo(st.sel); }
    }
    function onInput(ev) { if (ev.target.hasAttribute('data-grade')) { st.grade = +ev.target.value; draw(); drawPanel(); var r = U.$('[data-grade]', panel); if (r) r.focus(); } }
    el.addEventListener('click', onClick); el.addEventListener('input', onInput);
    draw(); drawPanel();
    return function () { el.removeEventListener('click', onClick); el.removeEventListener('input', onInput); };
  };

  /* ---------- Visual field reader ---------- */
  var VF_DEF = [
    ['normal', { fr: 'Normal', en: 'Normal' }], ['nasal', { fr: 'Ressaut nasal', en: 'Nasal step' }], ['arcuate', { fr: 'Scotome arciforme', en: 'Arcuate scotoma' }],
    ['paracentral', { fr: 'Scotome paracentral', en: 'Paracentral scotoma' }], ['altitudinal', { fr: 'Défaut altitudinal', en: 'Altitudinal defect' }],
    ['bitemporal', { fr: 'Hémianopsie bitemporale', en: 'Bitemporal hemianopia' }], ['homonymous', { fr: 'Hémianopsie homonyme', en: 'Homonymous hemianopia' }], ['uninterp', { fr: 'Non interprétable', en: 'Not interpretable' }]
  ];
  var VF_EXPL = {
    normal: { fr: 'Fiable, MD et PSD dans les limites, GHT normal : pas de défaut.', en: 'Reliable, MD and PSD within limits, normal GHT: no defect.' },
    fp: { fr: 'Faux positifs 27 % (> 15 %) : le patient répond sans stimulus. Champ trop « blanc », MD positif, GHT « sensibilité anormalement élevée » : non interprétable.', en: 'False positives 27% (> 15%): the patient responds without a stimulus. Field too “white”, positive MD, GHT “abnormally high sensitivity”: not interpretable.' },
    fl: { fr: 'Pertes de fixation 47 % (> 20 %) : fiabilité douteuse. Vérifier la position de la tache aveugle, réexpliquer, refaire l’examen.', en: 'Fixation losses 47% (> 20%): doubtful reliability. Check blind spot position, re-instruct, repeat the test.' },
    nasal: { fr: 'Ressaut nasal : la perte s’arrête net au méridien horizontal nasal (les fibres arciformes ne croisent pas le raphé). Signe précoce de glaucome.', en: 'Nasal step: loss stops sharply at the nasal horizontal meridian (arcuate fibres do not cross the raphe). Early glaucoma sign.' },
    arcuate: { fr: 'Scotome arciforme (Bjerrum) : de la tache aveugle vers le méridien horizontal nasal, en respectant ce méridien : fibres arciformes, typique du glaucome.', en: 'Arcuate (Bjerrum) scotoma: from the blind spot to the nasal horizontal meridian, respecting it: arcuate fibres, typical of glaucoma.' },
    paracentral: { fr: 'Scotome paracentral (< 10° de la fixation) : possible tôt dans le glaucome; compléter par un 10-2.', en: 'Paracentral scotoma (< 10° from fixation): can be early in glaucoma; add a 10-2 test.' },
    altitudinal: { fr: 'Défaut altitudinal : tout un hémichamp, limité par le méridien horizontal : nerf optique (ex. NOIA, surtout non artéritique) ou occlusion artérielle de branche.', en: 'Altitudinal defect: a whole hemifield bounded by the horizontal meridian: optic nerve (e.g., AION, mostly non-arteritic) or branch artery occlusion.' },
    bitemporal: { fr: 'Hémianopsie bitemporale : pertes temporales aux deux yeux, limitées par le méridien vertical : chiasma (ex. adénome hypophysaire). Imagerie cérébrale.', en: 'Bitemporal hemianopia: temporal loss in both eyes, bounded by the vertical meridian: chiasm (e.g. pituitary adenoma). Brain imaging.' },
    homonymous: { fr: 'Hémianopsie homonyme gauche : même côté aux deux yeux, limitée par le méridien vertical : lésion rétrochiasmatique droite (ex. AVC). Imagerie cérébrale.', en: 'Left homonymous hemianopia: same side in both eyes, bounded by the vertical meridian: right retrochiasmal lesion (e.g. stroke). Brain imaging.' }
  };
  var VF_IDX = {
    fl: { n: { fr: 'Pertes de fixation', en: 'Fixation losses' }, d: { fr: 'Réponses à des stimuli projetés dans la tache aveugle. > 20 % : fiabilité douteuse.', en: 'Responses to stimuli shown in the blind spot. > 20%: doubtful reliability.' } },
    fp: { n: { fr: 'Faux positifs', en: 'False positives' }, d: { fr: 'Réponses sans stimulus. > 15 % (SITA) : non fiable; le champ paraît trop bon.', en: 'Responses without a stimulus. > 15% (SITA): unreliable; the field looks too good.' } },
    fn: { n: { fr: 'Faux négatifs', en: 'False negatives' }, d: { fr: 'Absence de réponse à un stimulus plus fort qu’un stimulus déjà vu. > 33 % : douteux (fatigue, inattention; souvent plus élevé si le champ est très atteint).', en: 'No response to a stimulus brighter than one already seen. > 33%: doubtful (fatigue, inattention; often higher in badly damaged fields).' } },
    md: { n: { fr: 'MD (déviation moyenne)', en: 'MD (mean deviation)' }, d: { fr: 'Écart moyen à la normale pour l’âge, en dB. Négatif = perte; reflète surtout une perte diffuse ou étendue (ex. cataracte).', en: 'Average difference from age-normal, in dB. Negative = loss; mostly reflects diffuse or widespread loss (e.g. cataract).' } },
    psd: { n: { fr: 'PSD (déviation standard du modèle)', en: 'PSD (pattern standard deviation)' }, d: { fr: 'Irrégularité du champ. Élevée = perte localisée (scotome) plutôt que diffuse.', en: 'Irregularity of the field. High = localised loss (scotoma) rather than diffuse.' } },
    ght: { n: { fr: 'GHT (test de l’hémichamp glaucomateux)', en: 'GHT (glaucoma hemifield test)' }, d: { fr: 'Compare des zones miroirs supérieures et inférieures. « Hors limites normales » = asymétrie évocatrice de glaucome. Peu utile pour un défaut qui respecte le méridien vertical.', en: 'Compares mirror zones above and below the horizontal meridian. “Outside normal limits” = asymmetry suggestive of glaucoma. Of little use for defects respecting the vertical meridian.' } }
  };
  var GHT_TXT = { wnl: { fr: 'Dans les limites normales', en: 'Within normal limits' }, onl: { fr: 'Hors limites normales', en: 'Outside normal limits' }, bl: { fr: 'Limite', en: 'Borderline' }, high: { fr: 'Sensibilité anormalement élevée', en: 'Abnormally high sensitivity' }, na: { fr: '— (voir note)', en: '— (see note)' } };
  function vfPrintout(key, reveal) {
    var c = VF_CASES[key], g = Gen.vf({ case: key, reveal: reveal }), flag = function (bad) { return bad ? ' class="inv-bad"' : ''; };
    var idx = '<div class="inv-vfidx">' + c.eyes.map(function (e) {
      var x = c.idx[e], flp = x.fl[0] / x.fl[1];
      return '<div class="inv-vfcol"><b>' + e + '</b><dl>' +
        '<dt><button type="button" class="inv-term" data-ix="fl">' + PE(VF_IDX.fl.n) + '</button></dt><dd' + flag(flp > .2) + '>' + x.fl[0] + '/' + x.fl[1] + '</dd>' +
        '<dt><button type="button" class="inv-term" data-ix="fp">' + PE(VF_IDX.fp.n) + '</button></dt><dd' + flag(x.fp > 15) + '>' + x.fp + ' %</dd>' +
        '<dt><button type="button" class="inv-term" data-ix="fn">' + PE(VF_IDX.fn.n) + '</button></dt><dd' + flag(x.fn > 33) + '>' + x.fn + ' %</dd>' +
        '<dt><button type="button" class="inv-term" data-ix="md">MD</button></dt><dd>' + sgn(x.md) + ' dB</dd>' +
        '<dt><button type="button" class="inv-term" data-ix="psd">PSD</button></dt><dd>' + num(x.psd) + ' dB</dd>' +
        '<dt><button type="button" class="inv-term" data-ix="ght">GHT</button></dt><dd>' + PE(GHT_TXT[x.ght]) + '</dd></dl></div>';
    }).join('') + '</div>';
    return { html: '<div class="inv-vfp"><div class="inv-vfhead"><span class="mono xs">24-2 · SITA · ' + E(S('vf.sch', 'schéma', 'schematic')) + '</span><span class="xs muted">' + E(S('vf.legend', '■ plus foncé = plus déprimé · · = normal', '■ darker = more depressed · · = normal')) + '</span></div>' + idx + '<div class="inv-vfmap" style="max-width:' + (c.eyes.length > 1 ? 600 : 340) + 'px">' + g.svg + (reveal ? hotsHtml(g.hot) : '') + '</div>' + (c.eyes.length > 1 ? '<p class="xs muted">' + E(S('vf.note', 'Note : le GHT compare haut et bas; il n’aide pas pour un défaut qui respecte le méridien vertical.', 'Note: the GHT compares upper and lower halves; it does not help for a defect respecting the vertical meridian.')) + '</p>' : '') + '</div>' };
  }
  tools['vf-reader'] = function (el) {
    var order = ['normal', 'fp', 'nasal', 'arcuate', 'paracentral', 'fl', 'altitudinal', 'bitemporal', 'homonymous'], st = { list: null, i: 0, step: 0, score: [0, 0], rel: null };
    function start() { st.list = U.shuffle(order); st.i = 0; st.step = 0; st.score = [0, 0]; }
    el.innerHTML = '<div class="inv-tool"><p class="small muted">' + E(S('vf.intro', 'Lis comme un examinateur : 1) fiabilité, 2) indices, 3) forme du défaut et méridien respecté. Touche un indice pour sa définition.', 'Read like an examiner: 1) reliability, 2) indices, 3) defect shape and which meridian is respected. Tap an index for its definition.')) + '</p>' +
      '<div data-print></div><div data-panel></div><div class="inv-out" data-out aria-live="polite"></div><div class="inv-info" data-ixinfo aria-live="polite"></div></div>';
    var pr = U.$('[data-print]', el), panel = U.$('[data-panel]', el), out = U.$('[data-out]', el), ixi = U.$('[data-ixinfo]', el);
    function key() { return st.list[st.i]; }
    function draw(reveal) {
      pr.innerHTML = '<figure class="inv-fig"><div class="inv-fig-in">' + vfPrintout(key(), reveal).html + '</div><figcaption>' + schemaBadge() + '<span>' + E(S('vf.cap', 'Impression type Humphrey simplifiée (valeurs illustratives)', 'Simplified Humphrey-style printout (illustrative values)')) + '</span></figcaption></figure>';
    }
    function drawPanel() {
      var hdr = '<p class="inv-prompt"><span class="mono xs">' + E(S('go.case', 'Cas', 'Case')) + ' ' + (st.i + 1) + ' / ' + st.list.length + ' · ' + st.score[0] + ' / ' + st.score[1] + '</span></p>';
      if (st.step === 0) panel.innerHTML = hdr + '<p class="small"><b>' + E(S('vf.q1', '1. L’examen est-il fiable ?', '1. Is the test reliable?')) + '</b></p>' + chipsHtml('rl', [['ok', S('vf.rel', 'Fiable', 'Reliable')], ['bad', S('vf.unrel', 'Non fiable', 'Unreliable')]]);
      else panel.innerHTML = hdr + '<p class="small"><b>' + E(S('vf.q2', '2. Quel défaut ?', '2. Which defect?')) + '</b></p>' + chipsHtml('df', VF_DEF.map(function (d) { return [d[0], pick(d[1])]; }));
    }
    function mark(attr, right, chosen) { U.$$('[data-' + attr + ']', panel).forEach(function (x) { x.disabled = true; var v = x.getAttribute('data-' + attr); if (v === right) x.classList.add('correct'); else if (v === chosen) x.classList.add('wrong'); }); }
    function onClick(ev) {
      var t = ev.target, b;
      if ((b = t.closest('[data-ix]'))) { var ix = VF_IDX[b.getAttribute('data-ix')]; ixi.innerHTML = '<h3>' + PE(ix.n) + '</h3><p class="small">' + PE(ix.d) + '</p>'; return; }
      var c = VF_CASES[key()];
      if ((b = t.closest('[data-rl]'))) {
        var v = b.getAttribute('data-rl'), ok = v === c.rel; st.score[1]++; if (ok) st.score[0]++; mark('rl', c.rel, v);
        var why = c.rel === 'bad' ? pick(VF_EXPL[key()]) : B('Pertes de fixation ≤ 20 %, faux positifs ≤ 15 %, faux négatifs ≤ 33 % : on peut interpréter.', 'Fixation losses ≤ 20%, false positives ≤ 15%, false negatives ≤ 33%: interpretable.');
        out.innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><div class="verdict">' + E(ok ? S('ok', 'Exact', 'Correct') : S('pr.bad', 'Pas tout à fait', 'Not quite')) + '</div><div class="small">' + E(why) + '</div><div class="row"><button type="button" class="btn primary sm" data-a="vstep">' + E(S('go.next', 'Continuer', 'Continue')) + '</button></div></div>';
        U.$('[data-a="vstep"]', out).focus({ preventScroll: true }); return;
      }
      if ((b = t.closest('[data-a="vstep"]'))) { st.step = 1; out.innerHTML = ''; drawPanel(); var f = U.$('[data-df]', panel); if (f) f.focus({ preventScroll: true }); return; }
      if ((b = t.closest('[data-df]'))) {
        var d = b.getAttribute('data-df'), ok2 = d === c.ans; st.score[1]++; if (ok2) st.score[0]++; mark('df', c.ans, d); draw(true);
        var mer = c.merid === 'h' ? B('Méridien horizontal respecté → rétine / nerf optique.', 'Horizontal meridian respected → retina / optic nerve.') : c.merid === 'v' ? B('Méridien vertical respecté → chiasma ou voies rétrochiasmatiques.', 'Vertical meridian respected → chiasm or retrochiasmal pathway.') : '';
        out.innerHTML = '<div class="feedback ' + (ok2 ? 'ok' : 'bad') + '"><div class="verdict">' + PE(VF_DEF.filter(function (x) { return x[0] === c.ans; })[0][1]) + '</div><div class="small">' + PE(VF_EXPL[key()]) + '</div>' + (mer ? '<div class="small"><b>' + E(mer) + '</b></div>' : '') + '<div class="row"><button type="button" class="btn primary sm" data-a="vnext">' + E(st.i + 1 < st.list.length ? S('vf.next', 'Champ suivant', 'Next field') : S('oct.endl', 'Terminer', 'Finish')) + '</button></div></div>';
        U.$('[data-a="vnext"]', out).focus({ preventScroll: true }); return;
      }
      if ((b = t.closest('[data-a="vnext"]'))) {
        if (st.i + 1 >= st.list.length) { out.innerHTML = '<div class="feedback ok"><div class="verdict">' + st.score[0] + ' / ' + st.score[1] + '</div><div class="row"><button type="button" class="btn sm" data-a="vagain">' + E(S('pr.again', 'Recommencer', 'Start again')) + '</button></div></div>'; panel.innerHTML = ''; return; }
        st.i++; st.step = 0; out.innerHTML = ''; ixi.innerHTML = ''; draw(); drawPanel(); var f2 = U.$('[data-rl]', panel); if (f2) f2.focus({ preventScroll: true }); return;
      }
      if ((b = t.closest('[data-a="vagain"]'))) { start(); out.innerHTML = ''; ixi.innerHTML = ''; draw(); drawPanel(); }
    }
    el.addEventListener('click', onClick);
    start(); draw(); drawPanel();
    return function () { el.removeEventListener('click', onClick); };
  };

  /* ---------- Fundus explorer ---------- */
  tools['fundus-explorer'] = function (el) {
    var st = { mode: 'explore', ov: {}, sel: null, q: null, score: [0, 0] }, targets = ['disc', 'cup', 'fovea', 'macula', 'art', 'vein', 'periph'];
    el.innerHTML = '<div class="inv-tool"><div class="inv-bar">' + seg('mode', [['explore', S('fo.explore', 'Explorer', 'Explore')], ['find', S('fo.find', 'Trouve-le', 'Find it')]], st.mode, S('mode', 'Mode', 'Mode')) + '</div>' +
      '<div class="inv-two"><div>' + figWrap('data-svg', S('fo.cap', 'Fond d’œil droit : papille à droite (nasal), macula à gauche (temporal)', 'Right fundus: disc on the right (nasal), macula on the left (temporal)')) + '</div>' +
      '<div class="stack"><div><p class="small muted">' + E(S('fo.ovl', 'Superposer une anomalie :', 'Overlay an abnormality:')) + '</p><div class="chips inv-chips">' + Object.keys(FUNDUS_OV).map(function (k) { return '<button type="button" class="chip" data-ov="' + k + '" aria-pressed="false">' + PE(FUNDUS_OV[k].n) + '</button>'; }).join('') + '</div></div>' +
      '<div data-panel></div><div class="inv-out" data-out aria-live="polite"></div></div></div></div>';
    var svgHost = U.$('[data-svg]', el), panel = U.$('[data-panel]', el), out = U.$('[data-out]', el);
    function draw(showKey) {
      var g = Gen.fundus({ ov: st.ov });
      svgHost.innerHTML = g.svg + (showKey ? hotsHtml(g.hot.filter(function (h) { return h.k === showKey; })) : '');
      if (st.sel) U.$$('[data-reg="' + st.sel + '"]', svgHost).forEach(function (p) { p.classList.add('inv-hl'); });
      var fsv = U.$('svg', svgHost); if (fsv) { fsv.setAttribute('role', 'group'); fsv.setAttribute('aria-label', S('fo.grp', 'Fond d’œil droit (schéma) : zones à toucher', 'Right fundus (schematic): tappable areas')); }
      U.$$('[data-reg]', svgHost).forEach(function (p, i) { var r = p.getAttribute('data-reg'), info = FUNDUS_REG[r] || (r.indexOf('ov-') === 0 ? FUNDUS_OV[r.slice(3)] : null); p.setAttribute('tabindex', '0'); p.setAttribute('role', 'button'); p.setAttribute('aria-label', st.mode === 'explore' && info ? pick(info.n) : S('fo.zone', 'Zone', 'Zone') + ' ' + (i + 1)); });
    }
    function regInfo(id) {
      var r = FUNDUS_REG[id] || (id.indexOf('ov-') === 0 ? FUNDUS_OV[id.slice(3)] : null); if (!r) return '';
      return '<div class="inv-info"><h3>' + PE(r.n) + '</h3><p class="small">' + PE(r.d) + '</p></div>';
    }
    function drawPanel() {
      if (st.mode === 'explore') panel.innerHTML = '<p class="small muted">' + E(S('fo.ehelp', 'Touche une zone du schéma, ou choisis :', 'Tap an area of the schematic, or pick:')) + '</p>' + chipsHtml('rg', targets.concat(['pole']).map(function (k) { return [k, pick(FUNDUS_REG[k].n)]; }));
      else panel.innerHTML = st.q ? '<p class="inv-prompt">' + E(S('oct.tap', 'Touche :', 'Tap:')) + ' <b>' + PE(FUNDUS_REG[st.q.list[st.q.i]].n) + '</b> <span class="mono xs">' + (st.q.i + 1) + ' / ' + st.q.list.length + ' · ' + st.score[0] + ' ✓</span></p>' : '';
    }
    function normReg(id) { if (id === 'ov-cup') return 'cup'; if (id && id.indexOf('ov-') === 0) return id; return id; }
    function tap(id) {
      id = normReg(id); if (!id) return;
      if (st.mode === 'explore') { st.sel = id; draw(); out.innerHTML = regInfo(id); return; }
      if (!st.q || st.q.answered) return;
      var want = st.q.list[st.q.i], ok = id === want || (want === 'macula' && id === 'fovea') || (want === 'disc' && id === 'cup' && false);
      st.score[1]++; if (ok) st.score[0]++; st.q.answered = true; st.sel = want; draw();
      out.innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><div class="verdict">' + E(ok ? S('ok', 'Exact', 'Correct') : S('fo.was', 'C’était ici (surligné)', 'It was here (highlighted)')) + '</div><div class="small">' + PE(FUNDUS_REG[want].d) + '</div><div class="row"><button type="button" class="btn primary sm" data-a="fnext">' + E(S('go.next', 'Continuer', 'Continue')) + '</button></div></div>';
      U.$('[data-a="fnext"]', out).focus({ preventScroll: true });
    }
    function onClick(ev) {
      var t = ev.target, b;
      if ((b = t.closest('[data-mode]'))) { st.mode = b.getAttribute('data-mode'); setPressed(el, 'mode', st.mode); st.sel = null; out.innerHTML = ''; if (st.mode === 'find') { st.q = { list: U.shuffle(targets), i: 0 }; st.score = [0, 0]; } draw(); drawPanel(); return; }
      if ((b = t.closest('[data-ov]'))) { var k = b.getAttribute('data-ov'); st.ov[k] = !st.ov[k]; b.setAttribute('aria-pressed', String(!!st.ov[k])); st.sel = null; draw(st.ov[k] ? k : null); out.innerHTML = st.ov[k] ? '<div class="inv-info"><h3>' + PE(FUNDUS_OV[k].n) + '</h3><p class="small">' + PE(FUNDUS_OV[k].d) + '</p></div>' : ''; return; }
      if ((b = t.closest('[data-rg]'))) { tap(b.getAttribute('data-rg')); return; }
      if ((b = t.closest('[data-a="fnext"]'))) {
        st.q.i++; st.q.answered = false; st.sel = null; out.innerHTML = '';
        if (st.q.i >= st.q.list.length) { out.innerHTML = '<div class="feedback ok"><div class="verdict">' + st.score[0] + ' / ' + st.score[1] + '</div><div class="row"><button type="button" class="btn sm" data-a="fagain">' + E(S('pr.again', 'Recommencer', 'Start again')) + '</button></div></div>'; st.q = null; }
        draw(); drawPanel(); return;
      }
      if ((b = t.closest('[data-a="fagain"]'))) { st.q = { list: U.shuffle(targets), i: 0 }; st.score = [0, 0]; out.innerHTML = ''; draw(); drawPanel(); return; }
      var r = t.closest('[data-reg]'); if (r) tap(r.getAttribute('data-reg'));
    }
    function onKey(ev) { var r = ev.target.closest && ev.target.closest('[data-reg]'); if (r && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); tap(r.getAttribute('data-reg')); } }
    el.addEventListener('click', onClick); el.addEventListener('keydown', onKey);
    draw(); drawPanel();
    return function () { el.removeEventListener('click', onClick); el.removeEventListener('keydown', onKey); };
  };


  /* ======================================================================
     CAS EN IMAGES — #cas-images (hub, filters, series of 10) and #cas-images/<id> (one case, full screen)
     Data: G.OPH.imageCases (same item schema as invPractice + topic, featured); media in imageCasesMedia or invMedia.
     ====================================================================== */
  var IC_TOPICS = [['', { fr: 'Tous', en: 'All' }], ['cornee', { fr: 'Cornée', en: 'Cornea' }], ['glaucome', { fr: 'Glaucome', en: 'Glaucoma' }], ['general', { fr: 'Général', en: 'General' }]];
  var IC_PAGE = 12, icState = { topic: '', level: 0, run: null, shown: IC_PAGE };
  function icList() { return ((W.OPH.imageCases) || []).filter(function (c) { return c && c.options && c.options.length && resolveMedia(c.media); }); }
  function icById(id) { return icList().filter(function (c) { return c.id === id; })[0] || null; }
  function icFiltered() { return icList().filter(function (c) { return (!icState.topic || c.topic === icState.topic) && (!icState.level || +c.level === icState.level); }); }
  function icStatus(c) { var r = Store.p && Store.p.inv && Store.p.inv[c.id]; return !r ? 'new' : (r.ok && r.conf === 'sure') ? 'ok' : r.ok ? 'shaky' : 'bad'; }
  function icTopicName(k) { var x = IC_TOPICS.filter(function (t) { return t[0] === k; })[0]; return x ? pick(x[1]) : k; }
  function icSeries(pool, n) {
    var rank = { bad: 0, shaky: 1, 'new': 2, ok: 3 };
    return U.shuffle(pool).sort(function (a, b) { return rank[icStatus(a)] - rank[icStatus(b)]; }).slice(0, n || 10)
      .sort(function (a, b) { return (a.level || 1) - (b.level || 1); });
  }
  function icNum(c) { return icList().indexOf(c) + 1; }
  function icHubHtml() {
    var all = icList(), list = icFiltered(), done = all.filter(function (c) { return icStatus(c) !== 'new'; }).length, ok = all.filter(function (c) { return icStatus(c) === 'ok'; }).length;
    var st = { 'new': S('ic.new', 'Nouveau', 'New'), ok: S('ic.ok', 'Réussi', 'Done'), shaky: S('ic.shaky', 'À consolider', 'Consolidate'), bad: S('ic.bad', 'À revoir', 'Review') };
    var h = '<div class="page inv-page ic-page">' + crumbsH([[S('home', 'Accueil', 'Home'), 'accueil'], [S('hub', 'Investigations', 'Investigations'), 'investigations'], [S('ic.title', 'Cas en images', 'Image cases'), null]]) +
      '<div class="phead"><div class="eyebrow">' + E(S('ic.eye', 'Cas en images · observe, réponds, révèle', 'Image cases · observe, answer, reveal')) + '</div><h1>' + E(S('ic.h1', 'Cas en images', 'Image cases')) + '</h1>' +
      '<p class="muted" style="max-width:62ch">' + E(S('ic.lead', 'Une photo clinique, une courte mise en situation, une décision. La légende reste cachée jusqu’à ta réponse; le signe décisif est ensuite entouré.', 'One clinical photo, a short scenario, one decision. The caption stays hidden until you answer; the decisive sign is then circled.')) + '</p></div>';
    if (!all.length) return h + '<div class="empty">' + E(S('ic.none', 'Les cas en images arrivent bientôt.', 'Image cases are coming soon.')) + '</div></div>';
    h += '<div class="card ic-prog"><div class="stack" style="gap:4px"><span class="eyebrow">' + E(S('ic.progress', 'Ta progression', 'Your progress')) + '</span><b class="ic-big">' + ok + ' / ' + all.length + '</b><span class="small muted">' + E(done + ' ' + S('ic.seen', 'cas tentés · réussis = justes avec assurance', 'cases tried · done = correct with confidence')) + '</span></div>' +
      '<div class="pbar' + (ok / all.length >= .6 ? ' ok' : '') + '"><i style="width:' + Math.round(100 * ok / all.length) + '%"></i></div></div>';
    h += '<div class="ic-filters">' + seg('ict', IC_TOPICS.map(function (t) { return [t[0], pick(t[1])]; }), icState.topic, S('ic.topic', 'Thème', 'Topic')) +
      seg('icl', [['0', S('ic.alllv', 'Tous niveaux', 'All levels')], ['1', S('ic.l1', 'Niveau 1', 'Level 1')], ['2', S('ic.l2', 'Niveau 2', 'Level 2')], ['3', S('ic.l3', 'Niveau 3', 'Level 3')]], String(icState.level), S('pr.level', 'Niveau', 'Level')) + '</div>';
    h += '<div class="row"><button type="button" class="btn primary" data-icgo="10"' + (list.length ? '' : ' disabled') + '>' + E(S('ic.series', 'Série de 10', 'Series of 10')) + (list.length < 10 ? ' (' + list.length + ')' : '') + '</button>' +
      '<span class="small muted">' + E(S('ic.serieshint', 'Les cas ratés et hésitants passent en premier.', 'Missed and unsure cases come first.')) + '</span></div>';
    h += '<div data-icrun></div>';
    h += '<div data-iclist><p class="small muted ic-count" aria-live="polite">' + E(Math.min(icState.shown, list.length) + ' / ' + list.length + ' ' + S('ic.cases', 'cas', 'cases')) + '</p><div class="ic-grid">' + list.slice(0, icState.shown).map(function (c) {
      var s2 = icStatus(c);
      return '<a class="card link ic-card" href="#cas-images/' + E(c.id) + '"><span class="row tight"><span class="mono xs muted">#' + icNum(c) + '</span><span class="tag plain">' + E(icTopicName(c.topic)) + '</span><span class="tag plain">' + E(S('pr.level', 'Niveau', 'Level')) + ' ' + (c.level || 1) + '</span><span class="ic-st ' + s2 + '">' + E(st[s2]) + '</span></span>' +
        '<span class="small ic-q">' + PE(c.q) + '</span></a>';
    }).join('') + (list.length ? '' : '<div class="empty">' + E(S('ic.nomatch', 'Aucun cas pour ces filtres.', 'No case for these filters.')) + '</div>') + '</div>' +
      (list.length > icState.shown ? '<div class="row ic-more"><button type="button" class="btn" data-icmore>' + E(S('ic.more', 'Afficher plus', 'Show more')) + ' (' + Math.min(IC_PAGE, list.length - icState.shown) + ')</button></div>' : '') + '</div></div>';
    return h;
  }
  function icHubAfter(host) {
    var clean = null;
    function stopRun() { if (typeof clean === 'function') clean(); clean = null; }
    function onClick(ev) {
      var b, t = ev.target;
      if ((b = t.closest('[data-ict]'))) { icState.topic = b.getAttribute('data-ict'); icState.shown = IC_PAGE; stopRun(); Router.refresh(true); var f1 = U.$('[data-ict="' + icState.topic + '"]'); if (f1) f1.focus({ preventScroll: true }); return; }
      if ((b = t.closest('[data-icl]'))) { icState.level = +b.getAttribute('data-icl'); icState.shown = IC_PAGE; stopRun(); Router.refresh(true); var f2 = U.$('[data-icl="' + icState.level + '"]'); if (f2) f2.focus({ preventScroll: true }); return; }
      if ((b = t.closest('[data-icmore]'))) {
        var before = icState.shown; icState.shown += IC_PAGE; var y = window.scrollY; Router.refresh(true); window.scrollTo(0, y);
        var cards = U.$$('.ic-card', host.ownerDocument); if (cards[before]) cards[before].focus({ preventScroll: true }); return;
      }
      if ((b = t.closest('[data-icgo]'))) {
        var items = icSeries(icFiltered(), 10), run = U.$('[data-icrun]', host), lst = U.$('[data-iclist]', host);
        if (!items.length) return;
        stopRun(); lst.hidden = true;
        run.innerHTML = '<div class="row ic-runbar"><button type="button" class="btn ghost sm" data-icstop>← ' + E(S('ic.backlist', 'Retour à la liste', 'Back to the list')) + '</button></div><div data-icp></div>';
        clean = practice(U.$('[data-icp]', run), items, { title: S('ic.title', 'Cas en images', 'Image cases') });
        var r = U.$('.inv-run', run); if (r) r.scrollIntoView({ block: 'start', behavior: reduced() ? 'auto' : 'smooth' });
        var f = U.$('.opts', run); if (f) f.focus({ preventScroll: true });
        return;
      }
      if (t.closest('[data-icstop]')) { stopRun(); Router.refresh(true); }
    }
    host.addEventListener('click', onClick);
    return function () { stopRun(); host.removeEventListener('click', onClick); };
  }
  function icCaseView(id) {
    return {
      get title() { return S('ic.title', 'Cas en images', 'Image cases'); },
      render: function () {
        var c = icById(id);
        if (!c) return '<div class="page"><div class="empty">' + E(S('ic.missing', 'Ce cas n’existe pas.', 'This case does not exist.')) + '</div><a class="btn primary" href="#cas-images">' + E(S('ic.all', 'Tous les cas en images', 'All image cases')) + '</a></div>';
        var all = icList(), i = all.indexOf(c), next = all[i + 1] || all[0];
        return '<div class="page inv-page featured ic-one">' + crumbsH([[S('hub', 'Investigations', 'Investigations'), 'investigations'], [S('ic.title', 'Cas en images', 'Image cases'), 'cas-images'], [S('ic.case', 'Cas', 'Case') + ' ' + (i + 1), null]]) +
          '<div data-icone></div>' +
          '<div class="card stack ic-cta"><div class="row"><a class="btn primary" href="#cas-images/' + E(next.id) + '">' + E(S('ic.next', 'Cas suivant', 'Next case')) + ' →</a><a class="btn" href="#cas-images">' + E(S('ic.all', 'Tous les cas en images', 'All image cases')) + '</a><a class="btn ghost" href="#investigations">' + E(S('allinv', 'Toutes les investigations', 'All investigations')) + '</a></div></div></div>';
      },
      after: function (host) {
        var c = icById(id), el = U.$('[data-icone]', host), clean = null;
        document.documentElement.classList.add('focus-view');
        if (c && el) clean = practice(el, [c], { title: S('ic.title', 'Cas en images', 'Image cases') + ' · ' + icTopicName(c.topic), onEnd: function () { var cta = U.$('.ic-cta', host); if (cta) { cta.classList.add('ok-pop'); var a = U.$('a', cta); if (a) a.focus({ preventScroll: true }); } } });
        return function () { document.documentElement.classList.remove('focus-view'); if (typeof clean === 'function') clean(); };
      }
    };
  }
  function icHubCard() {
    var all = icList(); if (!all.length) return '';
    var ok = all.filter(function (c) { return icStatus(c) === 'ok'; }).length;
    return '<a class="card link ic-hubcard" href="#cas-images"><span class="stack" style="gap:4px"><span class="eyebrow">' + E(S('ic.eye2', 'Nouveau · cas cliniques', 'New · clinical cases')) + '</span><b class="inv-card-t">' + E(S('ic.h1', 'Cas en images', 'Image cases')) + '</b>' +
      '<span class="small muted">' + E(S('ic.cardd', 'Photos cliniques : cornée, glaucome et ophtalmologie générale. Séries de 10, filtres par thème et niveau.', 'Clinical photos: cornea, glaucoma and general ophthalmology. Series of 10, filters by topic and level.')) + '</span></span>' +
      '<span class="row tight"><span class="tag plain">' + all.length + ' ' + E(S('ic.cases', 'cas', 'cases')) + '</span><span class="tag plain">' + ok + ' ' + E(S('ic.okn', 'réussis', 'done')) + '</span><span class="btn primary sm" aria-hidden="true">' + E(S('ic.open', 'Ouvrir', 'Open')) + ' →</span></span></a>';
  }

  /* ======================================================================
     VIEWS — hub + one page per investigation
     ====================================================================== */
  var ICONS = {
    bscan: '<path d="M4 16 L16 6 M4 16 L16 26 M4 16 C14 10 24 10 28 16 C24 22 14 22 4 16" fill="none"/>',
    ascan: '<path d="M3 26 H6 L7 8 L8 26 H11 L12 14 L13 26 H20 L21 5 L22 26 L23 10 L24 26 H29" fill="none"/>',
    oct: '<path d="M3 9 H12 Q16 15 20 9 H29 M3 14 H12 Q16 19 20 14 H29 M3 20 H29 M3 24 H29" fill="none"/>',
    gonio: '<path d="M3 8 H29 M3 12 H29 M3 16 H29 M3 26 Q16 14 29 26" fill="none"/>',
    fondoeil: '<circle cx="16" cy="16" r="12" fill="none"/><circle cx="21" cy="15" r="3" fill="none"/><path d="M19 13 C14 8 8 9 5 12 M19 17 C14 22 8 22 5 19" fill="none"/>',
    cv: '<circle cx="16" cy="16" r="12" fill="none"/><path d="M4 16 H28 M16 4 V28" fill="none"/><rect x="18" y="6" width="5" height="5"/><rect x="20" y="11" width="4" height="4"/>'
  };
  var TOOL_NAMES = { 'ascan-sim': { fr: 'Simulateur A-scan', en: 'A-scan simulator' }, 'bscan-probe': { fr: 'Sonde B-scan', en: 'B-scan probe' }, 'oct-layers': { fr: 'Couches OCT', en: 'OCT layers' }, 'gonio-grader': { fr: 'Grader l’angle', en: 'Angle grader' }, 'vf-reader': { fr: 'Lire un champ visuel', en: 'Read a visual field' }, 'fundus-explorer': { fr: 'Explorer le fond d’œil', en: 'Fundus explorer' } };
  function crumbsH(items) { return typeof W.crumbs === 'function' ? W.crumbs(items) : '<div class="crumbs">' + items.map(function (it, i) { return (i ? '<span aria-hidden="true">›</span>' : '') + (it[1] ? '<a href="#' + it[1] + '">' + E(it[0]) + '</a>' : '<span>' + E(it[0]) + '</span>'); }).join('') + '</div>'; }
  function secHead(k, title) { return '<div class="section-h"><span class="k">' + E(k) + '</span><h2>' + E(title) + '</h2></div>'; }

  function hubThumb(id) {
    var g = null;
    try {
      g = id === 'bscan' ? Gen.bscan({ path: 'rd', ori: 'axial' }) : id === 'ascan' ? Gen.ascan({ eye: 'normal' }) : id === 'oct' ? Gen.oct({ fluid: 'srf', crop: true }) :
        id === 'gonio' ? Gen.gonio({ grade: 3 }) : id === 'fondoeil' ? Gen.fundus({ ov: { cup: true } }) : id === 'cv' ? Gen.vf({ case: 'arcuate' }) : null;
    } catch (e) { g = null; }
    if (!g) return '';
    var svg = g.svg.replace(/<svg\b([^>]*)>/i, function (all, a) { return '<svg' + a.replace(/\s(role|aria-label)="[^"]*"/g, '') + ' aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">'; });
    return '<div class="inv-thumb inv-thumb-' + id + '">' + svg + '<span class="inv-schema">' + E(S('schema', 'schéma', 'schematic')) + '</span></div>';
  }
  function hubHtml() {
    var list = invList();
    return '<div class="page inv-page">' + crumbsH([[S('home', 'Accueil', 'Home'), 'accueil'], [S('hub', 'Investigations', 'Investigations'), null]]) +
      '<div class="phead"><div class="eyebrow">' + E(S('hub.eye', 'Investigations · observe, réponds, révèle', 'Investigations · observe, answer, reveal')) + '</div><h1>' + E(S('hub.h1', 'Lire les examens en ophtalmologie', 'Reading eye investigations')) + '</h1>' +
      '<p class="muted" style="max-width:62ch">' + E(S('hub.lead2', 'Un outil à manipuler, puis des images où tu trouves le signe.', 'A hands-on tool, then images where you find the sign.')) + '</p></div>' +
      (usingFixture() ? '<div class="callout amber small">' + E(S('fixture', 'Contenu de démonstration (le contenu pédagogique complet arrive bientôt).', 'Demo content (full teaching content coming soon).')) + '</div>' : '') +
      '<div class="inv-hub">' + list.map(function (inv) {
        var p = progressFor(inv), pct = p.n ? Math.round(100 * p.ok / p.n) : 0;
        return '<a class="card link inv-card" href="#inv-' + E(inv.id) + '">' + hubThumb(inv.id) + '<div class="inv-card-top"><svg viewBox="0 0 32 32" class="inv-ic" aria-hidden="true">' + (ICONS[inv.id] || ICONS.oct) + '</svg><span class="mono xs muted">' + E(inv.n || '') + '</span></div>' +
          '<b class="inv-card-t">' + PE(inv.title) + '</b>' + // one line per card (hub ≤ 120 words); the purpose is on the exam page
          '<span class="row tight"><span class="tag plain">' + p.n + ' ' + E(S('hub.imgs', 'images', 'images')) + '</span></span>' +
          (p.n ? '<span class="pbar' + (pct >= 60 ? ' ok' : '') + '" aria-label="' + E(p.ok + ' / ' + p.n) + '"><i style="width:' + pct + '%"></i></span>' : '') + '</a>';
      }).join('') + (W.BscanSim ? W.BscanSim.hubCard() : '') + '</div>' + icHubCard() + '</div>';
  }
  function listBlock(title, arr, cls) {
    if (!arr || !arr.length) return '';
    return '<div class="card inv-blk' + (cls ? ' ' + cls : '') + '"><div class="eyebrow">' + E(title) + '</div><ul class="small">' + arr.map(function (x) { return '<li>' + PM(x) + '</li>'; }).join('') + '</ul></div>';
  }
  function render(id) {
    var inv = invById(id);
    if (!inv) return '<div class="page"><div class="empty">' + E(S('missing', 'Cet examen n’existe pas.', 'This test does not exist.')) + '</div><a class="btn primary" href="#investigations">' + E(S('back', 'Retour aux investigations', 'Back to investigations')) + '</a></div>';
    var list = invList(), ix = list.indexOf(inv), prev = list[ix - 1], next = list[ix + 1], items = practiceFor(inv);
    // MUST-FIX 2: tool and practice first; reference text folded into compact chips below
    function chip(key, title, arr, ordered, extra) {
      if (!arr || (Array.isArray(arr) && !arr.length)) return '';
      var body = Array.isArray(arr) ? '<' + (ordered ? 'ol' : 'ul') + ' class="small">' + arr.map(function (x) { return '<li>' + PM(x) + '</li>'; }).join('') + '</' + (ordered ? 'ol' : 'ul') + '>' : '<p class="small">' + PM(arr) + '</p>';
      return '<details class="inv-fold' + (extra ? ' ' + extra : '') + '" data-fold="' + key + '"><summary>' + E(title) + '</summary><div class="inv-fold-b">' + body + '</div></details>';
    }
    var hasTool = inv.tool && tools[inv.tool];
    return '<div class="page inv-page inv-page2">' + crumbsH([[S('hub', 'Investigations', 'Investigations'), 'investigations'], [pick(inv.title), null]]) +
      '<div class="phead inv-phead"><h1>' + PE(inv.title) + '</h1>' + (inv.en_term && lang() !== 'en' ? '<div class="en">' + E(inv.en_term) + '</div>' : '') + '</div>' +
      (usingFixture() ? '<div class="callout amber small">' + E(S('fixture', 'Contenu de démonstration (le contenu pédagogique complet arrive bientôt).', 'Demo content (full teaching content coming soon).')) + '</div>' : '') +
      (hasTool ? '<section class="stack inv-sec" id="inv-tool" aria-label="' + E(pick(TOOL_NAMES[inv.tool]) || S('tool', 'Outil interactif', 'Interactive tool')) + '"><h2 class="sr-only">' + E(pick(TOOL_NAMES[inv.tool]) || S('tool', 'Outil interactif', 'Interactive tool')) + '</h2><div data-invtool="' + E(inv.tool) + '"></div>' + (id === 'bscan' && W.BscanSim ? W.BscanSim.promo() : '') + '</section>' : '') +
      '<section class="stack inv-sec" id="inv-practice">' + secHead(S('k.practice', 'Pratique', 'Practice'), S('practice.h', 'Observe, réponds, révèle', 'Observe, answer, reveal') + ' · ' + items.length) + '<div data-invpractice></div></section>' +
      '<section class="inv-ref" aria-label="' + E(S('ref', 'Fiche de l’examen', 'Test summary')) + '"><h2 class="inv-ref-h">' + E(S('ref', 'Fiche de l’examen', 'Test summary')) + '</h2><div class="inv-folds">' +
      chip('why', S('why', 'À quoi ça sert', 'What it is for'), inv.why) + chip('how', S('how', 'Comment faire et lire', 'How to do and read it'), inv.how, true) +
      chip('normal', S('normal', 'Repères normaux', 'Normal landmarks'), inv.normal) + chip('keys', S('keys', 'Signes clés', 'Key signs'), inv.keys, false, 'key') + chip('pitfalls', S('pitfalls', 'Pièges', 'Pitfalls'), inv.pitfalls, false, 'trap') +
      '</div></section>' +
      '<nav class="row inv-nav" aria-label="' + E(S('nav', 'Autres examens', 'Other tests')) + '">' + (prev ? '<a class="btn sm" href="#inv-' + E(prev.id) + '">← ' + PE(prev.title) + '</a>' : '') + (next ? '<a class="btn sm" href="#inv-' + E(next.id) + '">' + PE(next.title) + ' →</a>' : '') + '</nav></div>';
  }
  function mount(host, id) {
    var inv = invById(id), clean = [];
    if (!inv) return function () { };
    var th = U.$('[data-invtool]', host);
    if (th && tools[inv.tool]) { try { clean.push(tools[inv.tool](th)); } catch (e) { console.error('inv tool ' + inv.tool, e); th.innerHTML = '<div class="callout red small">' + E(S('toolerr', 'Cet outil n’a pas pu démarrer.', 'This tool could not start.')) + '</div>'; } }
    var ph = U.$('[data-invpractice]', host);
    if (ph) clean.push(practice(ph, practiceFor(inv), { title: S('pr.title', 'Pratique', 'Practice') + ' · ' + pick(inv.title) }));
    var folds = U.$$('.inv-fold', host), onToggle = function (ev) { var d = ev.target; if (d.open) folds.forEach(function (o) { if (o !== d) o.open = false; }); };
    folds.forEach(function (d) { d.addEventListener('toggle', onToggle); });
    clean.push(function () { folds.forEach(function (d) { d.removeEventListener('toggle', onToggle); }); });
    return function () { clean.forEach(function (f) { try { if (f) f(); } catch (e) { } }); };
  }

  if (typeof Views !== 'undefined') {
    Views.investigations = { title: S('hub', 'Investigations', 'Investigations'), render: hubHtml };
    var ids = ORDER.slice(); try { invList().forEach(function (x) { if (ids.indexOf(x.id) < 0) ids.push(x.id); }); } catch (e) { }
    Views['cas-images'] = { title: S('ic.title', 'Cas en images', 'Image cases'), render: icHubHtml, after: icHubAfter };
    try { icList().forEach(function (c) { Views['cas-images/' + c.id] = icCaseView(c.id); }); } catch (e) { console.error('inv cas-images', e); }
    ids.forEach(function (id) {
      Views['inv-' + id] = { get title() { var i = invById(id); return i ? pick(i.title) : S('hub', 'Investigations', 'Investigations'); }, render: function () { return render(id); }, after: function (host) { return mount(host, id); } };
    });
  }

  W.Inv = { imageCases: icList, render: render, mount: mount, practice: practice, tools: tools, gen: genFrom, Gen: Gen, keys: KEYS, hub: hubHtml, usingFixture: usingFixture };
})();
