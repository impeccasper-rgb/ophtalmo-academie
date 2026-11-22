/* ===== B-scan simulator (prototype) — route #inv-bscan-sim =====
   Owner: exercices interactifs. Spec: docs/bscan/SPEC-SIMULATEUR.md ; method taught: docs/bscan/CONSENSUS.md.
   three.js is a pinned local copy (vendor/three-0.159.0), loaded on demand with import(): no CDN (CSP 'self', offline, iOS).
   The B image is PROCEDURAL (fragment shader evaluated on the probe plane): a teaching simulation, never shown as a real scan.
   Conventions (right eye, examiner facing the patient): +x = 3 o'clock = nasal, +y = 12 o'clock, +z = anterior. Units: mm. */
(function () {
  'use strict';
  var W = window, THREE = null, ROUTE = 'inv-bscan-sim', VENDOR = 'vendor/three-0.159.0/three.module.min.js';
  var DEG = Math.PI / 180, R = 12, HALF = 0.48, RANGE = 40, STANDOFF = 3;
  var DISC = [Math.sin(15 * DEG), 0, -Math.cos(15 * DEG)], NDIR = [Math.sin(25 * DEG), 0, -Math.cos(25 * DEG)];

  /* ---------- i18n (same pattern as src/investigations.js: keys collected in KEYS for src/i18n.js) ---------- */
  var KEYS = {};
  function lang() { return (W.I18N && W.I18N.lang) || 'fr'; }
  function S(key, fr, en) {
    KEYS['bs3.' + key] = { fr: fr, en: en };
    var L = lang();
    try { var d = W.I18N && W.I18N.dict && W.I18N.dict[L]; if (d && d['bs3.' + key] != null) return d['bs3.' + key]; } catch (e) { }
    return L === 'en' ? en : fr;
  }
  function P(v) { return v[lang()] || v.fr; }
  function E(s) { return U.esc(s); }

  /* ---------- small vector maths (plain arrays: usable without three.js, e.g. for the readout and tests) ---------- */
  function add(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function mul(a, k) { return [a[0] * k, a[1] * k, a[2] * k]; }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function len(a) { return Math.sqrt(dot(a, a)); }
  function norm(a) { var l = len(a) || 1; return mul(a, 1 / l); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function sstep(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
  function rotAxis(v, k, ang) { var c = Math.cos(ang), s = Math.sin(ang); return add(add(mul(v, c), mul(cross(k, v), s)), mul(k, dot(k, v) * (1 - c))); }
  function rotX(v, g) { var c = Math.cos(g), s = Math.sin(g); return [v[0], c * v[1] - s * v[2], s * v[1] + c * v[2]]; }

  /* ---------- probe geometry ----------
     theta: clock angle of the contact point (0 = 12 h, clockwise for the examiner); phi: eccentricity from the corneal apex.
     The beam is aimed the way an examiner does: at the limbus it goes "straight back" to the optic nerve (every scan starts by
     finding the nerve), and it reaches the anterior periphery as the probe slides to the fornix (limbus-to-fornix sweep). */
  function aimDir(theta, phi) {
    var d = phi / DEG, lam = (d <= 8 ? d : d <= 30 ? 8 : 8 + (d - 30) * 2.5) * DEG, k = sstep(12, 26, d) * (1 - sstep(34, 46, d));
    var mer = [-Math.sin(lam) * Math.sin(theta), -Math.sin(lam) * Math.cos(theta), -Math.cos(lam)];
    return norm(add(mul(mer, 1 - k), mul(DISC, k)));
  }
  function probePlane(st) {
    var th = st.theta, ph = st.phi, u = [Math.sin(ph) * Math.sin(th), Math.sin(ph) * Math.cos(th), Math.cos(ph)], C = mul(u, R);
    var fd = aimDir(th, ph), lam = Math.acos(clamp(-fd[2], -1, 1)), a = norm(sub(mul(fd, R), C));
    var eT = [Math.cos(th), -Math.sin(th), 0], eF = [Math.cos(ph) * Math.sin(th), Math.cos(ph) * Math.cos(th), -Math.sin(ph)], m;
    if (ph < 9 * DEG) m = st.axV ? [0, 1, 0] : [1, 0, 0];                                  // axial: marker nasal (horizontal) or superior (vertical)
    else if (st.mode === 'L') m = mul(eF, -1);                                                // longitudinal: marker toward the cornea
    else m = Math.abs(eT[1]) > 0.5 ? mul(eT, eT[1] > 0 ? 1 : -1) : mul(eT, eT[0] > 0 ? 1 : -1); // transverse: superior, or nasal at 12 h / 6 h
    m = norm(sub(m, mul(a, dot(m, a))));
    if (st.rot) m = rotAxis(m, a, st.rot * DEG);
    if (st.flip) m = mul(m, -1);
    return { u: u, C: C, a: a, m: m, apex: sub(C, mul(a, STANDOFF)), eT: eT, eF: eF, lam: lam };
  }
  function hourOf(theta) { var h = Math.round(((theta / DEG) % 360 + 360) % 360 / 30) % 12; return h === 0 ? 12 : h; }
  function classify(st, pl) {
    var phd = st.phi / DEG, hP = hourOf(st.theta), hE = ((hP + 5) % 12) + 1, kind, label, mk;
    var side = function (v) { return Math.abs(v[1]) > Math.abs(v[0]) ? (v[1] > 0 ? 'sup' : 'inf') : (v[0] > 0 ? 'nas' : 'tem'); };
    if (phd < 9) { kind = 'A'; mk = side(pl.m); label = (mk === 'nas' || mk === 'tem') ? 'HAX' : 'VAX'; }
    else {
      var c = Math.abs(dot(pl.m, pl.eT));
      if (c > 0.906) { kind = 'T'; mk = side(pl.m); label = 'T' + hE; }
      else if (c < 0.423) { kind = 'L'; mk = dot(pl.m, pl.eF) < 0 ? 'cor' : 'for'; label = (hE === 9 ? 'LMAC · L9' : 'L' + hE); }
      else { kind = 'O'; mk = side(pl.m); label = ''; }
    }
    var ld = pl.lam / DEG;
    return { kind: kind, hP: hP, hE: hE, marker: mk, label: label, where: phd < 12 ? 'cornea' : phd < 24 ? 'near' : phd <= 40 ? 'limbus' : 'fornix', zone: ld < 22 ? 'pole' : ld < 60 ? 'mid' : ld < 85 ? 'equator' : 'ant' };
  }
  /* static membrane height above the wall, mirror of the shader (used to place the decisive-sign ring) */
  function hStatic(cid, X) {
    var d = len(X), n = mul(X, 1 / d), lam = Math.acos(clamp(-n[2], -1, 1)), az = Math.atan2(n[1], n[0]);
    if (cid === 'pvd') return (4.6 + 1.3 * Math.sin(2.2 * n[0] + 1) + 0.8 * Math.sin(5 * lam + 2.6 * n[1])) * (1 - sstep(1.35, 1.95, lam));
    if (cid === 'cd') return 5.4 * sstep(0.85, 1.25, lam) * (1 - sstep(2.2, 2.5, lam)) * Math.pow(Math.abs(Math.cos(az)), 0.8);
    return 0;
  }
  function toImage(pl, X) { var q = sub(X, pl.apex), x = dot(q, pl.a), y = dot(q, pl.m); return { x: x, y: y, off: Math.abs(dot(q, cross(pl.a, pl.m))), inside: x > 0 && Math.abs(Math.atan2(y, x)) < HALF - 0.03 && Math.sqrt(x * x + y * y) < RANGE - 2 }; }
  function findMembrane(cid, pl) {
    var best = null, bs = -1e9;
    for (var x = 8; x <= 40; x += 0.5) for (var y = -20; y <= 20; y += 0.5) {
      if (Math.abs(Math.atan2(y, x)) > HALF - 0.05) continue;
      var X = add(pl.apex, add(mul(pl.a, x), mul(pl.m, y))), h = hStatic(cid, X);
      if (h < 2 || Math.abs((R - len(X)) - h) > 0.3) continue;
      var sc = cid === 'cd' ? h - Math.abs(y) * 0.15 : -Math.abs(y);
      if (sc > bs) { bs = sc; best = { x: x, y: y }; }
    }
    return best;
  }

  /* ---------- cases (5 for the prototype) ---------- */
  var OPTS = [
    { id: 'pvd', t: { fr: 'Décollement postérieur du vitré', en: 'Posterior vitreous detachment' }, why: { fr: 'Un DPV est une membrane fine et pâle, très mobile, qui disparaît à gain bas.', en: 'A PVD is a thin, faint, very mobile membrane that vanishes at low gain.' } },
    { id: 'rd', t: { fr: 'Décollement de rétine', en: 'Retinal detachment' }, why: { fr: 'Une rétine décollée est épaisse, brillante, fixée à la papille, et persiste à gain bas.', en: 'A detached retina is thick, bright, tethered to the disc, and persists at low gain.' } },
    { id: 'vh', t: { fr: 'Hémorragie du vitré, rétine à plat', en: 'Vitreous hemorrhage, retina flat' }, why: { fr: 'Une hémorragie donne des points fins et mobiles dans le vitré, visibles à gain élevé.', en: 'A hemorrhage gives fine mobile dots in the vitreous, seen at high gain.' } },
    { id: 'cd', t: { fr: 'Décollement choroïdien', en: 'Choroidal detachment' }, why: { fr: 'Un décollement choroïdien forme des dômes lisses, immobiles, sans attache à la papille.', en: 'A choroidal detachment forms smooth, immobile domes with no disc attachment.' } },
    { id: 'normal', t: { fr: 'Examen normal', en: 'Normal scan' }, why: { fr: 'Un œil normal a un vitré noir et une paroi lisse, sans membrane ni points.', en: 'A normal eye has a black vitreous and a smooth wall, no membrane, no dots.' } }
  ];
  var CASES = [
    { id: 'pvd', n: 1, stem: { fr: '68 ans. Corps flottants et éclairs depuis hier. Cataracte dense : fond mal vu.', en: 'Age 68. Floaters and flashes since yesterday. Dense cataract: poor fundus view.' },
      reveal: { fr: 'Membrane fine et pâle, non fixée à la papille. Elle ondule longtemps après le mouvement et disparaît à gain bas : décollement postérieur du vitré.', en: 'Thin, faint membrane, not tethered to the disc. It keeps waving after the eye stops and vanishes at low gain: posterior vitreous detachment.' },
      next: { fr: 'Suite : examen de la périphérie rétinienne, à la recherche d’une déchirure.', en: 'Next: examine the peripheral retina for a tear.' },
      view: { theta: 180, phi: 32, mode: 'T', gain: 88 }, kin: { amp: 2.4, tau: 1.1, f: 1.2 } },
    { id: 'rd', n: 2, stem: { fr: '61 ans. Voile noir qui progresse depuis 3 jours. Cataracte blanche : fond invisible.', en: 'Age 61. Dark curtain spreading for 3 days. White cataract: no fundus view.' },
      reveal: { fr: 'Membrane épaisse, aussi brillante que la paroi, fixée à la papille. Elle bouge peu, raide, et persiste à gain bas : décollement de rétine.', en: 'Thick membrane, as bright as the wall, tethered to the disc. It moves little, stiffly, and persists at low gain: retinal detachment.' },
      next: { fr: 'Suite : référence urgente en ophtalmologie.', en: 'Next: urgent ophthalmology referral.' }, val: 'disc',
      view: { theta: 90, phi: 34, mode: 'L', gain: 64 }, kin: { amp: 0.55, tau: 0.28, f: 2.6 } },
    { id: 'normal', n: 3, stem: { fr: '70 ans. Cataracte blanche, bilan avant la chirurgie. Aucun autre symptôme.', en: 'Age 70. White cataract, work-up before surgery. No other symptom.' },
      reveal: { fr: 'Vitré noir, paroi lisse et concave partout, ombre du nerf optique : examen normal. Les points qui apparaissent au gain maximal sont du bruit.', en: 'Black vitreous, smooth concave wall everywhere, optic nerve shadow: normal scan. Dots that appear at maximum gain are noise.' },
      next: { fr: 'Suite : la chirurgie peut être planifiée.', en: 'Next: surgery can be planned.' },
      view: { theta: 90, phi: 34, mode: 'L', gain: 76 }, kin: { amp: 0, tau: 1, f: 1 } },
    { id: 'vh', n: 4, stem: { fr: '58 ans, diabétique. Baisse brutale de vision ce matin. Fond d’œil : lueur rouge, aucun détail.', en: 'Age 58, diabetic. Sudden vision loss this morning. Fundus: red glow, no detail.' },
      reveal: { fr: 'Points fins dans le vitré, visibles à gain élevé, qui tourbillonnent au mouvement. La paroi reste lisse partout : hémorragie du vitré, rétine à plat.', en: 'Fine dots in the vitreous, seen at high gain, swirling with eye movement. The wall stays smooth everywhere: vitreous hemorrhage, retina flat.' },
      next: { fr: 'Suite : référence urgente en ophtalmologie ; refaire l’échographie si le fond reste invisible.', en: 'Next: urgent ophthalmology referral; repeat the scan if the fundus stays hidden.' },
      view: { theta: 0, phi: 32, mode: 'T', gain: 92 }, kin: { amp: 0, tau: 1.3, f: 0.55, swirl: 0.55 } },
    { id: 'cd', n: 5, stem: { fr: '74 ans. Douleur et baisse de vision au jour 2 d’une chirurgie du glaucome. Chambre antérieure étroite.', en: 'Age 74. Pain and vision loss on day 2 after glaucoma surgery. Shallow anterior chamber.' },
      reveal: { fr: 'Dômes lisses et épais, immobiles, qui s’arrêtent avant la papille : décollement choroïdien. Les points sous le dôme sont du sang.', en: 'Smooth, thick, immobile domes that stop short of the disc: choroidal detachment. The dots under the dome are blood.' },
      next: { fr: 'Suite : appel au chirurgien le jour même.', en: 'Next: call the surgeon the same day.' },
      view: { theta: 0, phi: 0, mode: 'A', gain: 74 }, kin: { amp: 0, tau: 1, f: 1 } }
  ];
  var CASE_IX = { normal: 0, pvd: 1, rd: 2, vh: 3, cd: 4 };
  var PRESETS = [['T12', 180, 32, 'T'], ['T6', 0, 32, 'T'], ['T3', 270, 32, 'T'], ['T9', 90, 32, 'T'], ['LMAC', 90, 34, 'L'], ['HAX', 0, 0, 'T']];

  /* ---------- shaders ---------- */
  var VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';
  var FRAG = [
    'varying vec2 vUv;',
    'uniform vec3 uP; uniform vec3 uA; uniform vec3 uM;',
    'uniform float uGain; uniform float uSeed; uniform float uKin; uniform float uKinPh; uniform float uSwirl;',
    'uniform int uCase;',
    'const float R = 12.0;',
    'const vec3 DISC = vec3(0.258819, 0.0, -0.965926);',
    'const vec3 NDIR = vec3(0.422618, 0.0, -0.906308);',
    'float h1(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }',
    'float h3(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }',
    'float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);',
    '  return mix(mix(h1(i), h1(i + vec2(1.0, 0.0)), f.x), mix(h1(i + vec2(0.0, 1.0)), h1(i + vec2(1.0, 1.0)), f.x), f.y); }',
    'float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);',
    '  float a = mix(mix(h3(i), h3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(h3(i + vec3(0.0, 1.0, 0.0)), h3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y);',
    '  float b = mix(mix(h3(i + vec3(0.0, 0.0, 1.0)), h3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(h3(i + vec3(0.0, 1.0, 1.0)), h3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y);',
    '  return mix(a, b, f.z); }',
    'float lg(float x){ return log(max(x, 0.0001)) * 0.4343; }',
    'void main(){',
    '  vec2 q = vec2(vUv.x * 40.0, (vUv.y - 0.5) * 40.0);',
    '  float r = length(q), al = atan(q.y, q.x);',
    '  if (abs(al) > 0.48 || r > 39.4) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }',
    '  vec3 rd = normalize(q.x * uA + q.y * uM);',
    '  vec3 X = uP + q.x * uA + q.y * uM;',
    '  float d = length(X); vec3 n = X / max(d, 0.001);',
    '  float inc = abs(dot(n, rd));',
    /* speckle lives in probe polar coordinates: it swims with the probe and widens with depth */
    '  float sp = n2(vec2(r * 3.3 + uSeed * 7.0, al * 44.0 + uSeed * 3.0)) * 0.55 + n2(vec2(r * 8.0 - uSeed * 5.0, al * 105.0)) * 0.45;',
    '  sp = (sp - 0.5) * 1.55 + 0.5;',
    '  float spk = 20.0 * lg(sqrt(-2.0 * log(1.0 - clamp(sp, 0.1, 0.97))) / 1.18);',   /* Rayleigh-like, in dB: about -13 .. +7 */
    '  float dB = -47.0 + h1(q * 9.0 + uSeed) * 9.0;',                                     /* electronic noise floor */
    '  float w = d - R, inner = R - d;',
    '  float lam = acos(clamp(-n.z, -1.0, 1.0)), az = atan(n.y, n.x);',
    '  vec3 qd = X - DISC * R; float tt = dot(qd, NDIR); float pr = length(qd - tt * NDIR);',
    /* ocular wall (retina + choroid + sclera): specular, fades when hit obliquely */
    '  float wallA = 8.0 + 16.0 * lg(max(inc, 0.06)) + spk * 0.3 - 5.0 * (1.0 - smoothstep(0.9, 1.8, pr)) * step(-1.0, tt);',
    '  float band = smoothstep(-0.25, 0.0, w) * (1.0 - smoothstep(0.8, 2.0, w));',
    '  dB = max(dB, mix(-60.0, wallA, band));',
    /* orbital fat, with the dark optic nerve */
    '  float fat = smoothstep(0.2, 1.0, w) * smoothstep(6.0, 12.0, q.x);',
    '  float nerve = (1.0 - smoothstep(1.6 + 0.05 * tt, 2.3 + 0.08 * tt, pr)) * step(0.0, tt);',
    '  dB = max(dB, mix(-60.0, mix(-1.5 - 0.6 * w + spk + 6.0 * (n2(vec2(r * 0.8, al * 20.0)) - 0.5), -40.0 + spk * 0.4, nerve), fat));',
    /* initial echo and probe-face reverberation */
    '  dB = max(dB, mix(-60.0, 12.0 - max(r - 4.0, 0.0) * 5.0, 1.0 - smoothstep(4.5, 7.5, r + spk * 0.1)));',
    '  dB = max(dB, mix(-60.0, -12.0 - (r - 6.5) * 3.0 + 5.0 * sin(r * 5.0), step(6.5, r) * step(r, 12.0)));',
    /* lens capsule and iris (seen on axial and far-peripheral scans) */
    '  vec3 lq = (X - vec3(0.0, 0.0, 6.4)) / vec3(4.6, 4.6, 1.9); float le = length(lq) - 1.0;',
    '  float lin = abs(dot(normalize(lq / vec3(4.6, 4.6, 1.9)), rd));',
    '  dB = max(dB, mix(-60.0, (X.z < 6.4 ? -2.0 : -12.0) + 14.0 * lg(max(lin, 0.08)) + spk * 0.3, 1.0 - smoothstep(0.0, 0.07, abs(le))));',
    '  float rho = length(X.xy);',
    '  dB = max(dB, mix(-60.0, -13.0 + spk * 0.5, (1.0 - smoothstep(0.15, 0.4, abs(X.z - 8.7))) * step(2.2, rho) * step(rho, 6.0)));',
    '  float vit = smoothstep(0.4, 1.4, inner) * step(0.0, le);',
    '  float mi = 8.0 * lg(max(inc, 0.15));',
    '  if (uCase == 1) {',                                                                  /* PVD: thin, faint, free of the disc */
    '    float att = 1.0 - smoothstep(1.35, 1.95, lam);',
    '    float h = (4.6 + 1.3 * sin(2.2 * n.x + 1.0) + 0.8 * sin(5.0 * lam + 2.6 * n.y)) * att;',
    '    h += uKin * sin(3.6 * lam + 2.5 * n.x + 1.7 * n.y - uKinPh) * att;',
    '    float mem = (1.0 - smoothstep(0.12, 0.34, abs(inner - h))) * smoothstep(0.3, 0.9, h);',
    '    dB = max(dB, mix(-60.0, -17.0 + spk * 0.45 + mi, mem));',
    '  } else if (uCase == 2) {',                                                           /* RD: thick, bright, tethered at the disc and the ora */
    '    float dl = acos(clamp(dot(n, DISC), -1.0, 1.0));',
    '    float att = (1.0 - exp(-dl * 4.2)) * (1.0 - smoothstep(1.5, 2.02, lam));',
    '    float h = (5.2 + 2.0 * (0.71 * n.y - 0.71 * n.x)) * att * (1.0 + 0.11 * sin(9.0 * n.x + 5.0 * lam) + 0.06 * sin(14.0 * n.y));',
    '    h += uKin * sin(7.0 * lam + 4.0 * n.x - uKinPh) * att;',
    '    float mem = (1.0 - smoothstep(0.3, 0.62, abs(inner - h))) * smoothstep(0.15, 0.6, h);',
    '    dB = max(dB, mix(-60.0, 7.0 + spk * 0.3 + mi * 0.6, mem));',
    '  } else if (uCase == 3) {',                                                           /* vitreous hemorrhage: fine mobile dots, denser inferiorly */
    '    float sw = uSwirl * (1.0 - 0.4 * d / R); float cs = cos(sw), sn = sin(sw);',
    '    vec3 Y = vec3(X.x, cs * X.y - sn * X.z, sn * X.y + cs * X.z);',
    '    float v = n3(Y * 3.4 + 3.1) * 0.45 + n3(Y * 8.0) * 0.4 + sp * 0.15;',
    '    float thr = 0.50 + 0.07 * smoothstep(-6.0, 5.0, Y.y) - 0.05 * n3(Y * 0.45);',
    '    dB = max(dB, mix(-60.0, -31.0 + 34.0 * (v - thr) + spk * 0.5, smoothstep(thr, thr + 0.06, v) * vit));',
    '  } else if (uCase == 4) {',                                                           /* choroidal detachment: two smooth domes (nasal, temporal) between the ora and the vortex veins */
    '    float h = 5.4 * smoothstep(0.85, 1.25, lam) * (1.0 - smoothstep(2.2, 2.5, lam)) * pow(abs(cos(az)), 0.8);',
    '    float mem = (1.0 - smoothstep(0.35, 0.75, abs(inner - h + 0.4))) * smoothstep(0.3, 1.0, h);',
    '    dB = max(dB, mix(-60.0, 5.0 + spk * 0.3 + mi, mem));',
    '    float v = n3(X * 2.4 + 9.0);',
    '    dB = max(dB, mix(-60.0, -27.0 + v * 9.0 + spk * 0.6, smoothstep(0.6, 1.0, inner) * smoothstep(0.9, 1.4, h - inner) * smoothstep(0.38, 0.6, v)));',
    '  }',
    '  float g = clamp((dB + uGain - 50.0) / 36.0, 0.0, 1.0);',
    '  g = pow(g, 0.85) * (0.97 + 0.03 * sin(al * 400.0));',
    '  g *= (1.0 - smoothstep(0.455, 0.48, abs(al))) * (1.0 - smoothstep(38.2, 39.4, r));',
    '  gl_FragColor = vec4(vec3(g), 1.0);',
    '}'
  ].join('\n');

  /* ---------- view ---------- */
  function badge(txt) {
    var lab = S('val', 'À valider par un échographiste', 'To be validated by an echographer');
    return '<details class="bs3-val"><summary aria-label="' + E(lab) + '" title="' + E(lab) + '">i</summary><span><b>' + E(lab) + '.</b> ' + E(txt) + '</span></details>';
  }
  function render() {
    var crumbs = typeof W.crumbs === 'function' ? W.crumbs([[S('hub', 'Investigations', 'Investigations'), 'investigations'], [S('bscan', 'Échographie B', 'B-scan ultrasound'), 'inv-bscan'], [S('title', 'Tiens la sonde', 'Hold the probe'), null]]) : '';
    return '<div class="page inv-page bs3-page">' + crumbs +
      '<div class="phead inv-phead"><div class="eyebrow">' + E(S('eyebrow', 'Échographie B · simulateur', 'B-scan · simulator')) + '</div><h1>' + E(S('title', 'Tiens la sonde', 'Hold the probe')) + '</h1>' +
      '<p class="muted bs3-lead">' + E(S('lead', 'Glisse la sonde sur l’œil. L’image se recalcule à chaque mouvement.', 'Drag the probe over the eye. The image is recomputed with every move.')) + '</p></div>' +
      '<div class="bs3" data-bs3><div class="bs3-load small muted" role="status">' + E(S('loading', 'Chargement du simulateur…', 'Loading the simulator…')) + '</div></div></div>';
  }
  function shell() {
    var seg = function (name, list, cur, label) { return '<div class="seg inv-seg bs3-seg" role="group" aria-label="' + E(label) + '">' + list.map(function (x) { return '<button type="button" data-' + name + '="' + x[0] + '" aria-pressed="' + (x[0] === cur) + '">' + E(x[1]) + '</button>'; }).join('') + '</div>'; };
    return '<div class="bs3-grid">' +
      '<figure class="inv-fig bs3-fig"><div class="bs3-eye" data-eye><canvas data-c3 tabindex="0" role="application" aria-label="' + E(S('eye.aria', 'Œil droit en 3D. Flèches : déplacer la sonde. R : tourner. F : retourner le marqueur.', 'Right eye in 3D. Arrows: move the probe. R: rotate. F: flip the marker.')) + '"></canvas><div class="bs3-labs" data-labs aria-hidden="true"></div><span class="bs3-snap" data-snap aria-hidden="true"></span><button type="button" class="btn sm bs3-view" data-a="view">' + E(S('view', 'Changer de vue', 'Change view')) + '</button></div>' +
      '<figcaption><span>' + E(S('eye.cap', 'Œil droit, vu par l’examinateur. Trait fluo : marqueur.', 'Right eye, examiner’s view. Fluo stripe: marker.')) + '</span></figcaption></figure>' +
      '<figure class="inv-fig bs3-fig"><div class="bs3-img" data-img><canvas data-cb aria-label="' + E(S('img.aria', 'Image d’échographie B simulée', 'Simulated B-scan image')) + '" role="img"></canvas>' +
      '<span class="bs3-top" aria-hidden="true">' + E(S('top', 'marqueur', 'marker')) + '</span><span class="bs3-hud mono" data-hud aria-hidden="true"></span><span class="bs3-mhz mono" aria-hidden="true">10 MHz · 40 mm</span><span class="bs3-sim">' + E(S('sim', 'Simulation pédagogique', 'Teaching simulation')) + '</span><span class="bs3-ring" data-ring hidden></span></div>' +
      '<figcaption><span class="inv-schema">' + E(S('simshort', 'simulation', 'simulation')) + '</span><span>' + E(S('img.cap', 'Sonde à gauche, profondeur vers la droite, côté du marqueur en haut.', 'Probe on the left, depth to the right, marker side on top.')) + '</span></figcaption></figure></div>' +
      '<p class="bs3-read small" data-read aria-live="polite"></p>' +
      '<div class="bs3-ctl">' +
      '<div class="bs3-row"><span class="bs3-k">' + E(S('scan', 'Coupe', 'Scan')) + '</span>' + seg('mode', [['T', S('m.t', 'Transverse', 'Transverse')], ['L', S('m.l', 'Longitudinale', 'Longitudinal')], ['A', S('m.a', 'Axiale', 'Axial')]], 'T', S('scan', 'Coupe', 'Scan')) +
      '<button type="button" class="btn sm" data-a="flip" aria-pressed="false">' + E(S('flip', 'Retourner le marqueur', 'Flip the marker')) + '</button></div>' +
      '<div class="bs3-row"><span class="bs3-k">' + E(S('snap', 'Positions', 'Positions')) + '</span><div class="bs3-chips">' + PRESETS.map(function (p) { return '<button type="button" class="btn sm" data-preset="' + p[0] + '">' + p[0] + '</button>'; }).join('') + '</div>' +
      badge(S('val.seq', 'L’ordre et le nombre de coupes de dépistage varient selon les sources (4 transverses puis coupe maculaire, ou 6 positions), tout comme la place de la coupe axiale.', 'The order and number of screening scans differ between sources (4 transverse scans then the macular scan, or 6 positions), as does the place of the axial scan.')) + '</div>' +
      '<div class="bs3-row"><label class="bs3-k" for="bs3-gain">' + E(S('gain', 'Gain', 'Gain')) + '</label><input id="bs3-gain" type="range" min="50" max="100" step="1" value="76" data-gain><output class="mono small bs3-gv" data-gv for="bs3-gain"></output>' +
      badge(S('val.gain', 'Les valeurs en dB sont indicatives : elles dépendent de l’appareil.', 'The dB values are indicative: they depend on the machine.')) + '</div>' +
      '<div class="bs3-row"><span class="bs3-k">' + E(S('kin', 'Cinétique', 'Kinetic')) + '</span><button type="button" class="btn sm" data-kin="1">' + E(S('up', 'Regarde en haut', 'Look up')) + '</button><button type="button" class="btn sm" data-kin="-1">' + E(S('down', 'Regarde en bas', 'Look down')) + '</button>' +
      badge(S('val.kin', 'L’amplitude et la durée des mouvements résiduels ne sont pas chiffrées dans les sources : elles sont réglées à l’œil.', 'The amplitude and duration of after-movements are not quantified in the sources: they are tuned by eye.')) + '</div>' +
      '</div>' +
      '<section class="card bs3-case" data-case aria-live="polite"></section>';
  }

  function mount(host) {
    var root = U.$('[data-bs3]', host); if (!root) return;
    var alive = true, st = { theta: 180 * DEG, phi: 32 * DEG, mode: 'T', axV: false, rot: 0, flip: false, gain: 76, step: 0, view: 0, answered: null, gaze: 0 };
    var seen = { nerve: false, T: false, L: false, gLow: false, gHigh: false }, used = {}, kin = { on: false, t0: 0, dir: 1, still: false }, raf = 0, dirty = true, tgt = null, visible = true, pending = false, results = {}, score = null, io = null;
    var r3, rb, scene, cam, eye, probe, fan, edge, bmat, bscene, bcam, labs = [], disposables = [];
    function fail(msg) {
      root.innerHTML = '<div class="callout amber"><p class="small">' + E(msg) + '</p><p><a class="btn sm" href="#inv-bscan">' + E(S('fallback.go', 'Ouvrir l’outil 2D', 'Open the 2D tool')) + '</a></p></div>';
    }
    function curCase() { return st.step ? CASES[st.step - 1] : null; }
    function dirOf(th, ph) { return [Math.sin(ph) * Math.sin(th), Math.sin(ph) * Math.cos(th), Math.cos(ph)]; }
    function angle(a, b) { return Math.acos(clamp(dot(a, b), -1, 1)); }
    function plane() { return probePlane(st); }
    function globePlane(pl) { var g = st.gaze; return g ? { apex: rotX(pl.apex, g), a: rotX(pl.a, g), m: rotX(pl.m, g) } : pl; }

    /* ----- three.js scene ----- */
    function build() {
      var c3 = U.$('[data-c3]', root), cb = U.$('[data-cb]', root), T = THREE;
      r3 = new T.WebGLRenderer({ canvas: c3, antialias: true, alpha: true, powerPreference: 'low-power' });
      rb = new T.WebGLRenderer({ canvas: cb, antialias: false, alpha: false, powerPreference: 'low-power' });
      scene = new T.Scene(); cam = new T.PerspectiveCamera(30, 4 / 3, 1, 400);
      scene.add(new T.AmbientLight(0xffffff, 1.9)); var dl = new T.DirectionalLight(0xffffff, 2.2); dl.position.set(30, 50, 80); scene.add(dl);
      eye = new T.Group(); scene.add(eye);
      var mesh = function (geo, mat, parent) { var m = new T.Mesh(geo, mat); (parent || eye).add(m); disposables.push(geo, mat); return m; };
      mesh(new T.SphereGeometry(R, 28, 18), new T.MeshLambertMaterial({ color: 0xf3efe6, transparent: true, opacity: 0.7, depthWrite: false })).renderOrder = 2;
      mesh(new T.SphereGeometry(R * 1.025, 28, 18), new T.MeshBasicMaterial({ color: 0x0a0f40, side: T.BackSide, transparent: true, opacity: 0.3 })).renderOrder = 0;
      var z0 = Math.sqrt(R * R - 5.9 * 5.9);
      mesh(new T.CircleGeometry(5.9, 28), new T.MeshLambertMaterial({ color: 0x1f2cff })).position.z = z0;
      mesh(new T.CircleGeometry(2.1, 20), new T.MeshBasicMaterial({ color: 0x0a0f40 })).position.z = z0 + 0.06;
      var cor = mesh(new T.SphereGeometry(7.8, 20, 8, 0, Math.PI * 2, 0, 0.86), new T.MeshLambertMaterial({ color: 0xcfe8f5, transparent: true, opacity: 0.35, depthWrite: false }));
      cor.rotation.x = Math.PI / 2; cor.position.z = z0 - 7.8 * Math.cos(0.86); cor.renderOrder = 3;
      mesh(new T.TorusGeometry(5.95, 0.14, 6, 36), new T.MeshBasicMaterial({ color: 0x0a0f40 })).position.z = z0;
      var nv = mesh(new T.CylinderGeometry(1.7, 1.7, 9, 12), new T.MeshLambertMaterial({ color: 0xe0b458 }));
      nv.position.set(DISC[0] * R + NDIR[0] * 4.5, 0, DISC[2] * R + NDIR[2] * 4.5); nv.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), new T.Vector3(NDIR[0], NDIR[1], NDIR[2]));
      mesh(new T.SphereGeometry(0.7, 10, 8), new T.MeshBasicMaterial({ color: 0xb4552d })).position.set(0, 0, -R + 0.4);
      probe = new T.Group(); probe.matrixAutoUpdate = false; scene.add(probe);
      /* ophthalmic B probe (local y = body axis, tip at y = 0, +x = marker side): rounded transducer tip, cobalt collar,
         slim light body with an ink outline, fluo marker line, cable */
      var ink = new T.MeshLambertMaterial({ color: 0x0a0f40 }), shellM = new T.MeshLambertMaterial({ color: 0xf2f3fa }), fluo = new T.MeshBasicMaterial({ color: 0xd8ff3a }), cob = new T.MeshLambertMaterial({ color: 0x1f2cff }), rim = new T.MeshBasicMaterial({ color: 0x0a0f40, side: T.BackSide });
      disposables.push(ink, shellM, fluo, cob, rim);
      var part = function (geo, mat, y, x) { var m = new T.Mesh(geo, mat); m.position.set(x || 0, y, 0); probe.add(m); disposables.push(geo); return m; };
      part(new T.SphereGeometry(2.2, 18, 12), ink, 2.2);
      part(new T.CylinderGeometry(2.4, 2.4, 1.7, 20), cob, 4.1);
      part(new T.CylinderGeometry(1.95, 2.3, 21, 20), shellM, 15.4);
      part(new T.CylinderGeometry(2.2, 2.55, 21.3, 20), rim, 15.4);
      part(new T.SphereGeometry(1.95, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), shellM, 25.9);
      part(new T.CylinderGeometry(0.65, 0.65, 8, 8), ink, 31.5);
      part(new T.BoxGeometry(1.0, 19.5, 1.4), fluo, 15.2, 1.95);
      part(new T.SphereGeometry(1.0, 10, 8), fluo, 4.1, 2.45);
      /* standard contact points at the limbus (snap targets) */
      for (var sh = 0; sh < 4; sh++) { var sd = dirOf(sh * 90 * DEG, 32 * DEG); mesh(new T.SphereGeometry(0.55, 10, 8), cob).position.set(sd[0] * R * 1.01, sd[1] * R * 1.01, sd[2] * R * 1.01); }
      var fg = new T.BufferGeometry(), N = 14; fg.setAttribute('position', new T.BufferAttribute(new Float32Array((N + 2) * 3), 3));
      var idx = []; for (var i = 1; i <= N; i++) idx.push(0, i, i + 1); fg.setIndex(idx);
      fan = new T.Mesh(fg, new T.MeshBasicMaterial({ color: 0x1f2cff, transparent: true, opacity: 0.26, side: T.DoubleSide, depthWrite: false })); fan.renderOrder = 4; fan.frustumCulled = false; scene.add(fan);
      var eg = new T.BufferGeometry(); eg.setAttribute('position', new T.BufferAttribute(new Float32Array(6), 3));
      edge = new T.Line(eg, new T.LineBasicMaterial({ color: 0xd8ff3a })); edge.frustumCulled = false; scene.add(edge);
      disposables.push(fg, fan.material, eg, edge.material);
      bscene = new T.Scene(); bcam = new T.Camera();
      bmat = new T.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, depthTest: false, uniforms: { uP: { value: new T.Vector3() }, uA: { value: new T.Vector3() }, uM: { value: new T.Vector3() }, uGain: { value: 76 }, uSeed: { value: 0 }, uKin: { value: 0 }, uKinPh: { value: 0 }, uSwirl: { value: 0 }, uCase: { value: 0 } } });
      var quad = new T.Mesh(new T.PlaneGeometry(2, 2), bmat); quad.frustumCulled = false; bscene.add(quad); disposables.push(quad.geometry, bmat);
      var L = U.$('[data-labs]', root);
      [['12', [0, 8.6, z0]], ['3 · ' + S('nas', 'nasal', 'nasal'), [9.2, 0, z0]], ['6', [0, -8.6, z0]], ['9 · ' + S('tem', 'temporal', 'temporal'), [-9.2, 0, z0]], [S('nerve', 'nerf optique', 'optic nerve'), [DISC[0] * R + NDIR[0] * 9 + 2, 7, DISC[2] * R + NDIR[2] * 9]]].forEach(function (d) {
        var s = document.createElement('span'); s.textContent = d[0]; L.appendChild(s); labs.push({ el: s, p: new T.Vector3(d[1][0], d[1][1], d[1][2]) });
      });
    }
    function resize() {
      var eb = U.$('[data-eye]', root).getBoundingClientRect(), dpr = Math.min(W.devicePixelRatio || 1, 2);
      if (eb.width < 2) return;
      r3.setPixelRatio(dpr); r3.setSize(eb.width, eb.height, false); cam.aspect = eb.width / eb.height;
      var coarse = false; try { coarse = W.matchMedia('(pointer: coarse)').matches || eb.width < 420; } catch (e) { }
      var px = coarse ? 256 : 384; rb.setPixelRatio(1); rb.setSize(px, px, false);
      setView(); dirty = true;
    }
    function setView() {
      var v = [[11, 5, 72], [-72, 6, 20], [4, 76, 14]][st.view % 3], k = cam.aspect < 1.2 ? 1.12 : 1;
      cam.position.set(v[0] * k, v[1] * k, v[2] * k); cam.up.set(0, st.view % 3 === 2 ? 0 : 1, st.view % 3 === 2 ? -1 : 0); cam.lookAt(0, st.view % 3 ? 0 : -4.5, 4); cam.updateProjectionMatrix();
    }
    function kinState(now) {
      var c = curCase(), k = c ? c.kin : { amp: 0, tau: 1, f: 1 }, out = { gaze: 0, kin: 0, ph: 0, swirl: 0, done: true };
      if (kin.still) { out.kin = k.amp * 0.85 * kin.dir; out.ph = 1.2; out.swirl = (k.swirl || 0) * 0.8 * kin.dir; return out; }
      if (!kin.on) return out;
      var t = (now - kin.t0) / 1000, G = 13 * DEG * kin.dir;
      out.gaze = t < 0.22 ? G * sstep(0, 0.22, t) : t < 0.45 ? G : G * (1 - sstep(0.45, 0.7, t));
      var s = t - 0.25;
      if (s > 0) { var env = (1 - Math.exp(-s / 0.12)) * Math.exp(-s / k.tau); out.kin = k.amp * env * kin.dir; out.ph = 2 * Math.PI * k.f * s; out.swirl = (k.swirl || 0) * kin.dir * (1 - Math.exp(-s / 0.15)) * Math.exp(-s / 1.3) * Math.cos(2 * Math.PI * (k.f || 0.55) * s * 0.6); }
      out.done = t > 3.3; return out;
    }
    function draw(now) {
      raf = 0; if (!alive) return;
      if (!root.isConnected) { dispose(); return; }
      if (tgt) {
        var cu = dirOf(st.theta, st.phi), tu = dirOf(tgt.theta, tgt.phi);
        if (angle(cu, tu) < 0.6 * DEG || U.reduced()) { st.theta = tgt.theta; st.phi = tgt.phi; tgt = null; }
        else { var nd = norm(add(mul(cu, 0.66), mul(tu, 0.34))); st.phi = Math.acos(clamp(nd[2], -1, 1)); st.theta = st.phi < 0.02 ? tgt.theta : Math.atan2(nd[0], nd[1]); }
        dirty = true;
      }
      var ks = kinState(now || performance.now());
      if (kin.on && ks.done) { kin.on = false; ks = kinState(now); }
      st.gaze = ks.gaze;
      var pl = plane(), gp = globePlane(pl), T = THREE, u = bmat.uniforms, c = curCase();
      eye.rotation.x = -st.gaze;
      var mz = cross(pl.m, mul(pl.a, -1));
      probe.matrix.set(pl.m[0], -pl.a[0], mz[0], pl.apex[0], pl.m[1], -pl.a[1], mz[1], pl.apex[1], pl.m[2], -pl.a[2], mz[2], pl.apex[2], 0, 0, 0, 1); probe.matrixWorldNeedsUpdate = true;
      var fp = fan.geometry.attributes.position, N = fp.count - 2, i, al, pt;
      fp.setXYZ(0, pl.apex[0], pl.apex[1], pl.apex[2]);
      for (i = 0; i <= N; i++) { al = -HALF + 2 * HALF * i / N; pt = add(pl.apex, add(mul(pl.a, 30 * Math.cos(al)), mul(pl.m, 30 * Math.sin(al)))); fp.setXYZ(i + 1, pt[0], pt[1], pt[2]); }
      fp.needsUpdate = true;
      var ep = edge.geometry.attributes.position; ep.setXYZ(0, pl.apex[0], pl.apex[1], pl.apex[2]); pt = add(pl.apex, add(mul(pl.a, 30 * Math.cos(HALF)), mul(pl.m, 30 * Math.sin(HALF)))); ep.setXYZ(1, pt[0], pt[1], pt[2]); ep.needsUpdate = true;
      r3.render(scene, cam);
      var bb = r3.domElement.getBoundingClientRect();
      labs.forEach(function (l) { var v = l.p.clone().applyMatrix4(eye.matrixWorld).project(cam); l.el.style.transform = 'translate(-50%,-50%) translate(' + ((v.x + 1) / 2 * bb.width).toFixed(1) + 'px,' + ((1 - v.y) / 2 * bb.height).toFixed(1) + 'px)'; });
      u.uP.value.set(gp.apex[0], gp.apex[1], gp.apex[2]); u.uA.value.set(gp.a[0], gp.a[1], gp.a[2]); u.uM.value.set(gp.m[0], gp.m[1], gp.m[2]);
      u.uGain.value = st.gain; u.uCase.value = c ? CASE_IX[c.id] : 0; u.uKin.value = ks.kin; u.uKinPh.value = ks.ph; u.uSwirl.value = ks.swirl;
      u.uSeed.value = ((kin.on || dragging) && !U.reduced()) ? Math.floor((now || 0) / 110) % 13 : 0;
      rb.render(bscene, bcam);
      if (dirty) { dirty = false; readout(pl); }
      if (kin.on || tgt) invalidate();
    }
    function invalidate() { if (!alive) return; if (!visible || document.hidden) { pending = true; return; } if (!raf) raf = requestAnimationFrame(draw); }
    function onVis() { if (!document.hidden && pending) { pending = false; invalidate(); } }
    function touch() { dirty = true; invalidate(); }

    /* ----- readout: says in words what the plane shows ----- */
    function readout(pl) {
      var c = classify(st, pl), el = U.$('[data-read]', root), parts = [];
      var kinds = { T: S('k.t', 'Coupe transverse', 'Transverse scan'), L: S('k.l', 'Coupe longitudinale', 'Longitudinal scan'), A: S('k.a', 'Coupe axiale', 'Axial scan'), O: S('k.o', 'Coupe oblique', 'Oblique scan') };
      var mk = { nas: S('mk.nas', 'marqueur nasal', 'marker nasal'), tem: S('mk.tem', 'marqueur temporal', 'marker temporal'), sup: S('mk.sup', 'marqueur supérieur', 'marker superior'), inf: S('mk.inf', 'marqueur inférieur', 'marker inferior'), cor: S('mk.cor', 'marqueur vers la cornée', 'marker toward the cornea'), 'for': S('mk.for', 'marqueur vers le fornix', 'marker toward the fornix') };
      var where = { cornea: S('w.cornea', 'sur la cornée', 'on the cornea'), near: S('w.near', 'près du limbe', 'near the limbus'), limbus: S('w.limbus', 'au limbe', 'at the limbus'), fornix: S('w.fornix', 'vers le fornix', 'toward the fornix') };
      var zone = { pole: S('z.pole', 'pôle postérieur', 'posterior pole'), mid: S('z.mid', 'moyenne périphérie', 'mid-periphery'), equator: S('z.eq', 'équateur', 'equator'), ant: S('z.ant', 'périphérie antérieure', 'anterior periphery') };
      var h = lang() === 'en' ? ' o’clock' : ' h';
      parts.push('<b>' + E(kinds[c.kind]) + (c.label ? ' · ' + E(c.label) : '') + '</b>');
      if (c.kind === 'A') parts.push(E(S('r.ax', 'Sonde sur la cornée', 'Probe on the cornea')) + ', ' + E(mk[c.marker]) + '.');
      else {
        parts.push(E(S('r.probe', 'Sonde à', 'Probe at')) + ' ' + c.hP + h + ', ' + E(where[c.where]) + ', ' + E(mk[c.marker]) + '.');
        parts.push(E(S('r.see', 'Tu regardes', 'You are looking at')) + ' ' + c.hE + h + ', ' + E(zone[c.zone]) + '.');
        parts.push(E(S('r.gaze', 'Le patient regarde vers', 'The patient looks toward')) + ' ' + c.hE + h + '.');
      }
      if (c.kind === 'L' && c.marker === 'cor') parts.push(E(S('r.long', 'À l’écran : périphérie en haut, pôle postérieur en bas.', 'On screen: periphery on top, posterior pole at the bottom.')));
      if (c.kind === 'A' && c.marker === 'nas') parts.push(E(S('r.hax', 'À l’écran : papille au-dessus de la macula.', 'On screen: disc above the macula.')));
      el.innerHTML = parts.join(' ');
      setP('mode', c.kind === 'A' ? 'A' : st.mode);
      var u0 = dirOf(st.theta, st.phi), pre = '';
      if (!st.flip && !st.rot && !st.axV) PRESETS.forEach(function (p) { if (angle(u0, dirOf(p[1] * DEG, p[2] * DEG)) < 1.2 * DEG && (p[2] === 0 ? c.kind === 'A' : c.kind === p[3])) pre = p[0]; });
      setP('preset', pre);
      var sl = U.$('[data-snap]', root), std = !!pre || (st.snapped && !st.flip && !st.rot && c.kind !== 'O');
      sl.textContent = std ? (pre || c.label) + ' · ' + S('snap.std', 'position standard', 'standard position') : (c.label ? c.label + ' · ' : '') + S('snap.free', 'position libre', 'free position');
      sl.classList.toggle('on', std);
      var d = toImage(globePlane(pl), mul(DISC, R)), was = seen.nerve && seen.T && seen.L;
      if (d.inside && d.off < 1.7) seen.nerve = true;
      if (c.kind === 'T') seen.T = true; if (c.kind === 'L') seen.L = true;
      if (!st.step && !was && seen.nerve && seen.T && seen.L) panel(); else if (!st.step) ticks();
    }
    function setP(attr, val) { U.$$('[data-' + attr + ']', root).forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-' + attr) === val)); }); }
    function gainLabel() {
      var g = st.gain; U.$('[data-hud]', root).textContent = 'G ' + g + ' dB'; U.$('[data-gv]', root).textContent = g + ' dB · ' + (g < 66 ? S('g.low', 'bas', 'low') : g > 84 ? S('g.high', 'élevé', 'high') : S('g.mid', 'moyen', 'medium'));
      if (g < 64) seen.gLow = true; if (g > 88) seen.gHigh = true;
    }

    /* ----- side panel: normal eye first, then Observe → Réponds → Révèle ----- */
    function ticks() {
      var el = U.$('[data-ticks]', root); if (!el) return;
      var rows = [[seen.nerve, S('t.nerve', 'Trouve l’ombre du nerf optique.', 'Find the optic nerve shadow.')], [seen.T && seen.L, S('t.tl', 'Passe d’une coupe transverse à une longitudinale.', 'Switch from a transverse to a longitudinal scan.')], [seen.gLow && seen.gHigh, S('t.gain', 'Baisse le gain, puis monte-le au maximum.', 'Lower the gain, then raise it to the maximum.')]];
      el.innerHTML = rows.map(function (r) { return '<li class="' + (r[0] ? 'ok' : '') + '"><span aria-hidden="true">' + (r[0] ? '✓' : '○') + '</span> ' + E(r[1]) + (r[0] ? ' <span class="sr-only">' + E(S('done', 'fait', 'done')) + '</span>' : '') + '</li>'; }).join('');
    }
    function panel() {
      var el = U.$('[data-case]', root), c = curCase(), h;
      root.classList.toggle('answered', !!c && st.answered != null);
      if (!c) {
        h = (score != null ? '<p class="bs3-score" role="status"><b>' + score + ' / ' + CASES.length + '</b> ' + E(S('n.score', 'Série terminée. Refais-la quand tu veux.', 'Series done. Run it again any time.')) + '</p>' : '') +
          '<div class="eyebrow">' + E(S('n.eye', 'Œil normal · repères', 'Normal eye · landmarks')) + '</div><ul class="bs3-ticks small" data-ticks></ul>' +
          '<p class="small muted">' + E(S('n.norm', 'Vitré noir, paroi lisse et brillante, graisse orbitaire blanche, nerf optique sombre.', 'Black vitreous, smooth bright wall, white orbital fat, dark optic nerve.')) + '</p>' +
          '<button type="button" class="btn primary" data-a="next">' + E(score != null ? S('n.again', 'Refaire les 5 cas', 'Run the 5 cases again') : S('n.go', 'Commencer les 5 cas', 'Start the 5 cases')) + '</button>';
        el.innerHTML = h; ticks(); return;
      }
      h = '<div class="run-head"><span class="eyebrow">' + E(S('c.case', 'Cas', 'Case')) + ' ' + st.step + ' / ' + CASES.length + '</span><span class="tag plain">' + E(S('c.od', 'Œil droit', 'Right eye')) + '</span></div><p class="bs3-stem">' + E(P(c.stem)) + '</p>';
      if (st.answered == null) {
        h += '<p class="small muted">' + E(S('c.hint', 'Explore, règle le gain, fais bouger l’œil. Puis réponds.', 'Explore, set the gain, move the eye. Then answer.')) + '</p>' +
          '<div class="opts" role="group" aria-label="' + E(S('c.q', 'Que montre l’échographie ?', 'What does the scan show?')) + '"><div class="bs3-q">' + E(S('c.q', 'Que montre l’échographie ?', 'What does the scan show?')) + '</div>' +
          OPTS.map(function (o, j) { return '<button type="button" class="opt" data-ans="' + o.id + '"><span class="key">' + (j + 1) + '</span><span>' + E(P(o.t)) + '</span></button>'; }).join('') +
          '<button type="button" class="opt idk" data-ans="idk"><span class="key">?</span><span>' + E(S('c.idk', 'Je ne sais pas', 'I don’t know')) + '</span></button></div>';
      } else {
        var ok = st.answered === c.id, right = OPTS.filter(function (o) { return o.id === c.id; })[0], mine = OPTS.filter(function (o) { return o.id === st.answered; })[0];
        h += '<div class="feedback ' + (ok ? 'ok' : 'bad') + '" role="status"><div class="verdict">' + E(ok ? S('c.ok', 'Exact', 'Correct') : S('c.no', 'Réponse : ', 'Answer: ') + P(right.t)) + '</div>' +
          (!ok && mine ? '<p class="small">' + E(P(mine.why)) + '</p>' : '') + '</div>' +
          '<div class="callout bs3-rev"><div class="eyebrow">' + E(S('c.sign', 'Signe décisif', 'Decisive sign')) + '</div><p>' + E(P(c.reveal)) + '</p><p class="small">' + E(P(c.next)) + '</p>' +
          (c.val === 'disc' ? badge(S('val.disc', 'L’attache à la papille ne suffit pas seule : un DPV incomplet peut y rester attaché. La règle « attache, gain bas, mobilité » reste à confirmer.', 'Disc attachment alone is not enough: an incomplete PVD can stay attached there. The “attachment, low gain, mobility” rule still needs confirmation.')) : '') + '</div>' +
          '<p class="small bs3-gest">' + E(S('c.gest', 'Tes gestes :', 'Your moves:')) + ' <span class="tag ' + (used.gain ? 'plain ok' : 'plain') + '">' + E((used.gain ? '✓ ' : '○ ') + S('c.g1', 'gain modifié', 'gain changed')) + '</span> <span class="tag ' + (used.kin ? 'plain ok' : 'plain') + '">' + E((used.kin ? '✓ ' : '○ ') + S('c.g2', 'cinétique faite', 'kinetic done')) + '</span></p>' +
          '<button type="button" class="btn primary" data-a="next">' + E(st.step < CASES.length ? S('c.next', 'Cas suivant', 'Next case') : S('c.end', 'Voir mon résultat', 'See my result')) + '</button>';
      }
      el.innerHTML = h;
    }
    function ring(show) {
      var el = U.$('[data-ring]', root), c = curCase(); el.hidden = true; if (!show || !c) return;
      var gp = globePlane(plane()), p = null, q;
      if (c.id === 'rd') { q = toImage(gp, mul(DISC, R - 0.6)); p = { x: q.x, y: q.y }; }
      else if (c.id === 'normal') { q = toImage(gp, add(mul(DISC, R), mul(NDIR, 5))); p = { x: q.x, y: q.y }; }
      else if (c.id === 'vh') p = { x: 17, y: -3 };
      else p = findMembrane(c.id, gp);
      if (!p) return;
      el.style.left = (p.x / RANGE * 100).toFixed(1) + '%'; el.style.top = ((0.5 - p.y / RANGE) * 100).toFixed(1) + '%'; el.hidden = false;
    }
    function goView(v, instant) { if (instant || U.reduced()) { tgt = null; st.theta = v.theta * DEG; st.phi = v.phi * DEG; } else tgt = { theta: v.theta * DEG, phi: v.phi * DEG }; st.snapped = true; st.mode = v.mode; st.rot = 0; st.flip = false; st.axV = false; if (v.gain) { st.gain = v.gain; U.$('[data-gain]', root).value = v.gain; gainLabel(); } U.$('[data-a="flip"]', root).setAttribute('aria-pressed', 'false'); }
    function toStage() { try { if (root.getBoundingClientRect().top < 0) root.scrollIntoView({ block: 'start', behavior: 'auto' }); } catch (e) { } }
    function answer(id) {
      var c = curCase(); if (!c || st.answered != null) return;
      st.answered = id; kin.on = false; kin.still = false; results[c.id] = id === c.id;
      try { if (W.Store && Store.p) { (Store.p.inv = Store.p.inv || {})['bs3-' + c.id] = { ok: id === c.id ? 1 : 0, conf: id === 'idk' ? 'idk' : 'sure', t: Date.now() }; Store.touch(); } } catch (e) { }
      goView(c.view, true); panel(); dirty = true; draw(performance.now()); ring(true); toStage();
      var nb = U.$('[data-a="next"]', root); if (nb) nb.focus({ preventScroll: true });
    }
    function nextStep() {
      if (st.step >= CASES.length) { score = CASES.filter(function (x) { return results[x.id]; }).length; results = {}; st.step = 0; } else { st.step++; score = null; }
      st.answered = null; used = {}; kin.on = false; kin.still = false; ring(false); goView({ theta: 180, phi: 32, mode: 'T', gain: 76 }, true); panel(); touch();
      toStage();
    }

    /* ----- input ----- */
    function pick(ev) {
      var bb = r3.domElement.getBoundingClientRect(), T = THREE;
      var v = new T.Vector3((ev.clientX - bb.left) / bb.width * 2 - 1, -((ev.clientY - bb.top) / bb.height * 2 - 1), 0.5).unproject(cam), o = cam.position, d = v.sub(o).normalize();
      var b = o.dot(d), cc = o.dot(o) - R * R, disc = b * b - cc, t = disc > 0 ? -b - Math.sqrt(disc) : -b, hit = [o.x + d.x * t, o.y + d.y * t, o.z + d.z * t], n = norm(hit);
      st.phi = clamp(Math.acos(clamp(n[2], -1, 1)), 0, 66 * DEG); st.theta = Math.atan2(n[0], n[1]); tgt = null;
      if (st.mode === 'A' && st.phi > 10 * DEG) st.mode = 'T';
      var phL = (st.mode === 'L' ? 34 : 32) * DEG, cu = dirOf(st.theta, st.phi), best = null, bd = 7.5 * DEG, i, d;
      for (i = 0; i < 5; i++) { d = angle(cu, i < 4 ? dirOf(i * 90 * DEG, phL) : [0, 0, 1]); if (d < bd) { bd = d; best = i < 4 ? { theta: i * 90 * DEG, phi: phL } : { theta: st.theta, phi: 0 }; } }
      if (best) { st.theta = best.theta; st.phi = best.phi; if (!st.snapped) { try { if (navigator.vibrate) navigator.vibrate(8); } catch (e) { } } }
      st.snapped = !!best;
      kin.still = false; ring(false); touch();
    }
    var dragging = false;
    function onDown(ev) { if (kin.on) return; dragging = true; try { r3.domElement.setPointerCapture(ev.pointerId); } catch (e) { } pick(ev); ev.preventDefault(); }
    function onMove(ev) { if (dragging) { pick(ev); ev.preventDefault(); } }
    function onUp() { dragging = false; }
    function onKey(ev) {
      var k = ev.key, done = true;
      if (k === 'ArrowLeft') st.theta -= 15 * DEG; else if (k === 'ArrowRight') st.theta += 15 * DEG;
      else if (k === 'ArrowUp') st.phi = clamp(st.phi - 4 * DEG, 0, 66 * DEG); else if (k === 'ArrowDown') st.phi = clamp(st.phi + 4 * DEG, 0, 66 * DEG);
      else if (k === 'r' || k === 'R') st.rot = (st.rot + (ev.shiftKey ? 345 : 15)) % 360; else if (k === 'f' || k === 'F') flip(); else done = false;
      if (done) { ev.preventDefault(); tgt = null; st.snapped = false; ring(false); touch(); }
    }
    function flip() { if (st.phi < 9 * DEG) st.axV = !st.axV; else st.flip = !st.flip; U.$('[data-a="flip"]', root).setAttribute('aria-pressed', String(st.flip || st.axV)); }
    function onClick(ev) {
      var t = ev.target, b;
      if ((b = t.closest('[data-mode]'))) { var m = b.getAttribute('data-mode'); st.rot = 0; st.flip = false; st.axV = false; tgt = null; if (m === 'A') { st.mode = 'A'; goView({ theta: st.theta / DEG, phi: 0, mode: 'A' }); } else { if (st.phi < 12 * DEG || st.snapped) goView({ theta: Math.round(st.theta / DEG / 90) * 90, phi: st.phi < 12 * DEG || st.snapped ? (m === 'L' ? 34 : 32) : st.phi / DEG, mode: m }); st.mode = m; } U.$('[data-a="flip"]', root).setAttribute('aria-pressed', 'false'); ring(false); touch(); return; }
      if ((b = t.closest('[data-preset]'))) { var p = PRESETS.filter(function (x) { return x[0] === b.getAttribute('data-preset'); })[0]; goView({ theta: p[1], phi: p[2], mode: p[3] }); ring(false); touch(); return; }
      if ((b = t.closest('[data-kin]'))) {
        if (st.answered == null) used.kin = true;
        kin.dir = +b.getAttribute('data-kin');
        if (U.reduced()) { kin.still = !kin.still; kin.on = false; say(kin.still ? S('rm', 'Mouvement réduit : image figée au déplacement maximal.', 'Reduced motion: image frozen at maximum displacement.') : ''); }
        else { kin.still = false; kin.on = true; kin.t0 = performance.now(); say(''); }
        ring(false); touch(); return;
      }
      if ((b = t.closest('[data-a="flip"]'))) { flip(); ring(false); touch(); return; }
      if ((b = t.closest('[data-a="view"]'))) { st.view = (st.view + 1) % 3; setView(); touch(); return; }
      if ((b = t.closest('[data-ans]'))) { answer(b.getAttribute('data-ans')); return; }
      if ((b = t.closest('[data-a="next"]'))) { nextStep(); return; }
    }
    function say(msg) { var el = U.$('[data-read]', root); if (msg) { el.textContent = msg; dirty = false; } else dirty = true; }
    function onInput(ev) { if (ev.target.hasAttribute('data-gain')) { st.gain = +ev.target.value; if (st.answered == null) used.gain = true; gainLabel(); if (!st.step) ticks(); invalidate(); } }
    function onResize() { if (alive && root.isConnected) { resize(); invalidate(); } }
    function onLost(ev) { ev.preventDefault(); dispose(); fail(S('lost', 'L’affichage 3D s’est interrompu. Recharge la page pour relancer le simulateur.', '3D rendering stopped. Reload the page to restart the simulator.')); }
    function dispose() {
      if (!alive) return; alive = false; cancelAnimationFrame(raf);
      W.removeEventListener('resize', onResize); W.removeEventListener('hashchange', onHash); document.removeEventListener('visibilitychange', onVis);
      try { if (io) io.disconnect(); } catch (e) { }
      disposables.forEach(function (d) { try { d.dispose(); } catch (e) { } });
      [r3, rb].forEach(function (r) { try { if (r) { r.dispose(); r.forceContextLoss(); } } catch (e) { } });
      if (W.__bs3 && W.__bs3.root === root) W.__bs3 = null;
    }
    function onHash() { if (location.hash.replace(/^#/, '').split('?')[0] !== ROUTE) dispose(); }

    function start() {
      if (!alive || !root.isConnected) return;
      root.innerHTML = shell();
      try { if (!hasWebGL()) throw new Error('no webgl'); build(); } catch (e) { alive = false; fail(S('nowebgl', 'Ce navigateur ne peut pas afficher la 3D (WebGL indisponible). L’outil 2D reste disponible.', 'This browser cannot display 3D (WebGL unavailable). The 2D tool is still available.')); return; }
      var c3 = r3.domElement;
      c3.addEventListener('pointerdown', onDown); c3.addEventListener('pointermove', onMove); c3.addEventListener('pointerup', onUp); c3.addEventListener('pointercancel', onUp); c3.addEventListener('keydown', onKey);
      c3.addEventListener('webglcontextlost', onLost); rb.domElement.addEventListener('webglcontextlost', onLost);
      root.addEventListener('click', onClick); root.addEventListener('input', onInput);
      W.addEventListener('resize', onResize); W.addEventListener('hashchange', onHash); document.addEventListener('visibilitychange', onVis);
      /* no rendering while the stage is off-screen (battery): frames resume when it comes back */
      if ('IntersectionObserver' in W) { io = new IntersectionObserver(function (es) { visible = es[es.length - 1].isIntersecting; if (visible && pending) { pending = false; invalidate(); } }); io.observe(U.$('.bs3-grid', root)); }
      resize(); gainLabel(); seen.gLow = seen.gHigh = false; panel(); draw(performance.now());
      /* test hook (tests/run.py): read back the B image */
      W.__bs3 = {
        root: root, ready: true, state: st, paused: function () { return !visible; }, classify: function () { return classify(st, plane()); }, kin: function () { return { on: kin.on, still: kin.still }; },
        snapshot: function () {
          if (tgt) { st.theta = tgt.theta; st.phi = tgt.phi; tgt = null; } dirty = true; draw(performance.now()); var gl = rb.getContext(), w = gl.drawingBufferWidth, h = gl.drawingBufferHeight, buf = new Uint8Array(w * h * 4), sum = 0, sig = '', i, j;
          rb.render(bscene, bcam); gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf);
          for (i = 0; i < w * h; i++) sum += buf[i * 4];
          for (j = 0; j < 16; j++) for (i = 0; i < 16; i++) sig += (buf[(Math.floor((j + 0.5) * h / 16) * w + Math.floor((i + 0.5) * w / 16)) * 4] >> 4).toString(16);
          return { mean: sum / (w * h), sig: sig, w: w, h: h };
        }
      };
    }
    root.setAttribute('aria-busy', 'true');
    if (!hasWebGL()) { alive = false; root.removeAttribute('aria-busy'); fail(S('nowebgl', 'Ce navigateur ne peut pas afficher la 3D (WebGL indisponible). L’outil 2D reste disponible.', 'This browser cannot display 3D (WebGL unavailable). The 2D tool is still available.')); return dispose; }
    load().then(function (mod) { THREE = mod; root.removeAttribute('aria-busy'); start(); }, function () { alive = false; fail(S('noload', 'Le simulateur 3D n’a pas pu se charger ici. L’outil 2D reste disponible.', 'The 3D simulator could not load here. The 2D tool is still available.')); });
    return dispose;
  }
  var _gl = null;
  function hasWebGL() { if (_gl != null) return _gl; return (_gl = probeGL()); }
  function probeGL() { try { var c = document.createElement('canvas'), g = c.getContext('webgl2') || c.getContext('webgl'); if (!g) return false; var x = g.getExtension('WEBGL_lose_context'); if (x) x.loseContext(); return true; } catch (e) { return false; } }
  var _mod = null;
  function load() { if (!_mod) { _mod = import(new URL(VENDOR, document.baseURI).href); _mod.catch(function () { _mod = null; }); } return _mod; }

  /* ---------- links from the hub and from the B-scan page ---------- */
  function hubCard() {
    return '<a class="card link inv-card bs3-hubcard" href="#' + ROUTE + '"><div class="inv-card-top"><span class="tag plain">' + E(S('new', 'Simulateur 3D', '3D simulator')) + '</span></div><b class="inv-card-t">' + E(S('hub.t', 'Échographie B : tiens la sonde', 'B-scan: hold the probe')) + '</b><span class="small muted">' + E(S('hub.d', 'Œil 3D, image en direct, 5 cas.', '3D eye, live image, 5 cases.')) + '</span></a>';
  }
  function promo() {
    return '<a class="bs3-promo" href="#' + ROUTE + '"><b>' + E(S('promo.t', 'Simulateur 3D : tiens la sonde', '3D simulator: hold the probe')) + '</b><span class="small">' + E(S('promo.d', 'Pose la sonde sur l’œil et regarde l’image changer.', 'Place the probe on the eye and watch the image change.')) + '</span></a>';
  }

  if (typeof Views !== 'undefined') Views[ROUTE] = { get title() { return S('view.title', 'Simulateur d’échographie B', 'B-scan simulator'); }, render: render, after: function (host) { return mount(host); } };
  W.BscanSim = { route: ROUTE, hubCard: hubCard, promo: promo, keys: KEYS, cases: CASES, probePlane: probePlane, classify: classify, vendor: VENDOR };
})();
