/* ===== Mechanism figures (owner: mécanismes) — drawn SVG, learner-paced (tap to advance, nothing plays by itself) =====
   Registry: OPH.mech[ficheId] = { steps: [{ svg, label }] }   (label ≤ 10 words; FR source, EN through I18N.fx)
   API: Mech.html(id) → figure HTML ('' if none) · Mech.ids() → registered ids.
   Palette: identity tokens only (cobalt, ink, paper/surface/sunk); fluo is reserved for the decisive element of each step.
   Every colour is a CSS variable, so light and dark themes both work. Original schematics, labelled « Schéma ». */
var Mech = (function () {
  'use strict';
  var W = window, G = W;
  G.OPH = G.OPH || {}; G.OPH.mech = G.OPH.mech || {};

  /* ---------- EN for every label and SVG word (merged into I18N.fx, read with fx) ---------- */
  var EN = {
    'Schéma': 'Diagram', 'Étape suivante': 'Next step', 'Recommencer': 'Start again', 'Mécanisme dessiné, étape {i} sur {n}. Touche pour avancer.': 'Drawn mechanism, step {i} of {n}. Tap to go on.',
    'PIO': 'IOP', 'Cornée': 'Cornea', 'Iris': 'Iris', 'Cristallin': 'Lens', 'Trabéculum': 'Meshwork', 'Angle': 'Angle', 'Aqueuse': 'Aqueous',
    'Épithélium': 'Epithelium', 'Stroma': 'Stroma', 'Endothélium': 'Endothelium', 'Descemet': 'Descemet', 'Chambre antérieure': 'Anterior chamber',
    'Lame criblée': 'Lamina cribrosa', 'Champ visuel': 'Visual field', 'Papille': 'Optic disc', 'Ganglion trigéminal': 'Trigeminal ganglion', 'V1': 'V1',
    'Lentille': 'Lens (contact)', 'Hypopion': 'Hypopyon', 'Pigment': 'Pigment', 'LPI': 'LPI', 'Bactéries': 'Bacteria', 'Neutrophiles': 'Neutrophils', 'Greffon': 'Graft', 'Guttae': 'Guttae', 'Excavation': 'Cup', 'Encoche': 'Notch'
  };
  function fx0(s) { return W.fx ? W.fx(s) : s; }
  try { if (W.I18N && I18N.fx) Object.keys(EN).forEach(function (k) { if (I18N.fx[k] == null) I18N.fx[k] = EN[k]; }); } catch (e) { }
  function addEN(map) { try { if (W.I18N && I18N.fx) Object.keys(map).forEach(function (k) { if (I18N.fx[k] == null) I18N.fx[k] = map[k]; }); } catch (e) { } }

  /* ---------- tokens and primitives ---------- */
  var C = 'var(--cobalt)', CW = 'var(--cobalt-wash)', INK = 'var(--ink)', I2 = 'var(--ink-2)', I3 = 'var(--ink-3)', SUNK = 'var(--sunk)', SURF = 'var(--surface)', PAP = 'var(--paper)', LN = 'var(--line)', FL = 'var(--fluo)', EDGE = 'var(--edge)';
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function n1(v) { return Math.round(v * 10) / 10; }
  function at(o) { var s = ''; for (var k in o) if (o[k] != null && o[k] !== false) s += ' ' + k + '="' + o[k] + '"'; return s; }
  function P(d, fill, stroke, sw, x) { return '<path d="' + d + '"' + at({ fill: fill || 'none', stroke: stroke, 'stroke-width': stroke ? (sw || 1.5) : null }) + (x || '') + '/>'; }
  function O(cx, cy, r, fill, stroke, sw, x) { return '<circle' + at({ cx: n1(cx), cy: n1(cy), r: r, fill: fill || 'none', stroke: stroke, 'stroke-width': stroke ? (sw || 1.5) : null }) + (x || '') + '/>'; }
  function E(cx, cy, rx, ry, fill, stroke, sw, x) { return '<ellipse' + at({ cx: n1(cx), cy: n1(cy), rx: rx, ry: ry, fill: fill || 'none', stroke: stroke, 'stroke-width': stroke ? (sw || 1.5) : null }) + (x || '') + '/>'; }
  function R(x, y, w, h, fill, stroke, sw, rx, xx) { return '<rect' + at({ x: n1(x), y: n1(y), width: n1(w), height: n1(h), rx: rx, fill: fill || 'none', stroke: stroke, 'stroke-width': stroke ? (sw || 1.5) : null }) + (xx || '') + '/>'; }
  function Ln(x1, y1, x2, y2, stroke, sw, x) { return '<line' + at({ x1: n1(x1), y1: n1(y1), x2: n1(x2), y2: n1(y2), stroke: stroke || I3, 'stroke-width': sw || 1.5, 'stroke-linecap': 'round' }) + (x || '') + '/>'; }
  function T(x, y, s, anchor, cls) { return '<text class="' + (cls || 'lbl-sm') + '" x="' + n1(x) + '" y="' + n1(y) + '" text-anchor="' + (anchor || 'middle') + '">' + esc(fx0(s)) + '</text>'; }
  function Tb(x, y, s, anchor) { var t = fx0(s), w = t.length * 5.6 + 8, x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w + 4 : x - 4; return R(x0, y - 11, w, 15, SURF, null, 0, 3, ' fill-opacity=".88"') + T(x, y, s, anchor || 'start'); }
  function bez(a, b, c, d, t) { var u = 1 - t; return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d; }
  function head(x, y, ang, col, sz) { // arrowhead with its tip at (x,y), pointing along ang (degrees)
    sz = sz || 7; var a = ang * Math.PI / 180, b = 0.5;
    var p1 = [x - sz * Math.cos(a - b), y - sz * Math.sin(a - b)], p2 = [x - sz * Math.cos(a + b), y - sz * Math.sin(a + b)];
    return '<path d="M' + n1(x) + ',' + n1(y) + ' L' + n1(p1[0]) + ',' + n1(p1[1]) + ' L' + n1(p2[0]) + ',' + n1(p2[1]) + ' Z" fill="' + (col || C) + '"/>';
  }
  function Ar(d, x, y, ang, col, sw, dash) { return P(d, 'none', col || C, sw || 2, ' stroke-linecap="round"' + (dash ? ' stroke-dasharray="' + dash + '"' : '')) + head(x, y, ang, col || C, (sw || 2) * 3.4); }
  function arL(x1, y1, x2, y2, col, sw, dash) { return Ar('M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2, x2, y2, Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI, col, sw, dash); }
  function flP(d, sw) { return P(d, 'none', EDGE, (sw || 3) + 3, ' stroke-linecap="round" stroke-linejoin="round"') + P(d, 'none', FL, sw || 3, ' stroke-linecap="round" stroke-linejoin="round"'); } // fluo line on a dark halo
  function flO(cx, cy, r) { return O(cx, cy, r, 'none', EDGE, 5.5) + O(cx, cy, r, 'none', FL, 3); } // fluo ring around the decisive spot
  function cross(x, y, s) { s = s || 6; return flP('M' + (x - s) + ',' + (y - s) + ' L' + (x + s) + ',' + (y + s) + ' M' + (x + s) + ',' + (y - s) + ' L' + (x - s) + ',' + (y + s), 3); }
  function mir(inner) { return '<g transform="translate(360,0) scale(-1,1)">' + inner + '</g>'; }
  function svg(inner, label) { return '<svg viewBox="0 0 360 200" role="img" aria-label="' + esc(label) + '" focusable="false">' + inner + '</svg>'; }
  function gauge(lvl, hl, x, y) { // IOP bar gauge (0..1), top-left by default
    x = x == null ? 10 : x; y = y == null ? 10 : y; var h = 60, f = Math.max(4, lvl * h);
    return '<g class="mech-gauge">' + R(x, y, 14, h, SURF, I3, 1.2, 3) + R(x + 2, y + h - f + 2, 10, f - 4 < 2 ? 2 : f - 4, hl ? FL : C, hl ? EDGE : null, 1.2, 2) +
      Ln(x + 14, y + h * 0.62, x + 19, y + h * 0.62, I3, 1) + T(x + 7, y + h + 13, 'PIO', 'middle', 'lbl-sm lbl-b') + '</g>';
  }

  /* ---------- kit 1: anterior segment section (cornea, angle, iris, lens; aqueous path) ---------- */
  var IRIS = {
    flat: 'M34,176 Q96,160 162,158 L162,164 Q96,168 34,184 Z',
    bombe: 'M33,160 Q70,112 162,156 L162,163 Q76,128 34,180 Z',
    concave: 'M34,176 Q100,200 162,160 L162,166 Q100,208 34,184 Z',
    pushed: 'M33,161 Q88,128 160,140 L160,147 Q90,138 34,180 Z',
    thick: 'M34,174 Q96,156 162,157 L162,165 Q96,170 34,186 Z'
  };
  function ant(o) {
    o = o || {}; var ir = o.iris || 'flat', hl = o.hl || '', L = '';
    var lensY = o.lens === 'forward' ? 168 : 184, lensRy = o.lens === 'thick' ? 26 : 22, lensRx = o.lens === 'thick' ? 68 : 72;
    // left half (mirrored for the right): sclera wall, Schlemm, meshwork, ciliary body, zonules, iris
    L += R(6, 150, 26, 50, SUNK, LN, 1);
    L += E(20, 167, 3, 6, CW, C, 1);
    var tmFill = o.tm === 'pig' ? INK : o.tm === 'clog' ? (hl === 'tm' ? FL : I3) : (hl === 'tm' ? FL : PAP);
    L += R(30, 160, 6, 14, tmFill, hl === 'tm' ? EDGE : INK, 1.2, 1);
    if (!o.tm || o.tm === 'ok') L += Ln(31, 164, 35, 164, I3, .8) + Ln(31, 168, 35, 168, I3, .8);
    L += P('M32,178 L66,186 L58,194 L32,198 Z', I3);
    L += Ln(60, 188, 108, lensY, I3, .7) + Ln(62, 191, 110, lensY + 4, I3, .7);
    if (o.pas) L += P('M33,160 Q38,166 36,176', 'none', I2, 5, ' stroke-linecap="round"');
    var irisD = IRIS[ir] || IRIS.flat;
    L += P(irisD, hl === 'iris' ? FL : I2, hl === 'iris' ? EDGE : null, 1.2);
    if (o.nv) L += P('M40,178 q8,-6 14,-2 q6,-6 14,-1 M80,166 q6,-5 12,-1 q6,-5 12,0 M120,160 q6,-4 12,0', 'none', hl === 'nv' ? FL : 'var(--urgent)', hl === 'nv' ? 2.2 : 1.4) + (o.nvAngle ? P('M33,164 q4,4 2,9', 'none', hl === 'nv' ? FL : 'var(--urgent)', 2) : '');
    if (o.lpi) L += O(72, 170, 3.2, SURF, INK, 1);
    var left = L;
    var s = '', g0 = o.iop != null ? gauge(o.iop, hl === 'iop') : '';
    // cornea (full width) and lens
    s += P('M18,158 C30,54 330,54 342,158 L328,158 C316,72 44,72 32,158 Z', o.edema ? SUNK : CW, C, 1.5);
    if (o.edema) for (var i = 1; i < 10; i++) { var tt = i / 10; s += O((bez(18, 30, 330, 342, tt) + bez(32, 44, 316, 328, tt)) / 2, (bez(158, 54, 54, 158, tt) + bez(158, 72, 72, 158, tt)) / 2, 2.8, SURF, I3, .8); }
    if (o.pig) s += [[120, 92], [150, 104], [205, 98], [232, 112], [178, 118], [96, 120], [262, 126], [140, 132], [214, 130]].map(function (p) { return O(p[0], p[1], 1.8, INK); }).join('') + [[150, 98], [165, 96], [180, 95.5], [195, 96], [210, 98]].map(function (p) { return O(p[0], p[1], 2, INK); }).join('');
    s += E(180, lensY, lensRx, lensRy, o.lens === 'pxf' ? SUNK : SUNK, hl === 'lens' ? EDGE : I3, hl === 'lens' ? 2 : 1.2);
    if (o.lens === 'pxf') s += P('M140,' + (lensY - 14) + ' q40,-12 80,0', 'none', hl === 'flakes' ? FL : I2, 4, ' stroke-dasharray="3 4" stroke-linecap="round"') + P('M128,' + (lensY - 6) + ' q52,-16 104,0', 'none', hl === 'flakes' ? FL : I2, 2, ' stroke-dasharray="2 6" stroke-linecap="round"');
    if (hl === 'lens') s += E(180, lensY, lensRx, lensRy, 'none', FL, 3);
    s += left + mir(left);
    // aqueous path (left side only)
    var fl = o.flow;
    if (fl === 'normal' || fl === 'reduced') {
      s += Ar('M64,192 Q120,186 160,168 Q176,150 160,134 Q104,124 44,156', 44, 156, 145, C, 2, '5 4');
      s += fl === 'reduced' ? Ar('M30,168 L24,168', 24, 168, 180, I3, 1.2, '2 2') : Ar('M30,168 L24,168', 24, 168, 180, C, 2);
    } else if (fl === 'block') {
      s += Ar('M64,192 Q120,186 152,172', 152, 172, -20, C, 2, '5 4');
      s += arL(92, 182, 92, 166, C, 2) + arL(122, 176, 122, 162, C, 2) + mir(arL(92, 182, 92, 166, C, 2) + arL(122, 176, 122, 162, C, 2));
    } else if (fl === 'lpi') {
      s += Ar('M64,192 Q76,186 72,152', 72, 152, -95, C, 2, '5 4') + Ar('M66,146 Q52,144 44,156', 44, 156, 125, C, 2) + Ar('M30,168 L24,168', 24, 168, 180, C, 2);
    } else if (fl === 'reverse') {
      s += Ar('M180,106 L180,128', 180, 128, 90, C, 2) + Ar('M122,118 Q114,140 106,158', 106, 158, 105, C, 2) + mir(Ar('M122,118 Q114,140 106,158', 106, 158, 105, C, 2));
    }
    // decisive marks
    if (hl === 'pupil') s += flO(163, 162, 9);
    if (hl === 'angle') s += flO(36, 164, 11) + mir(flO(36, 164, 11));
    if (hl === 'block') s += cross(160, 168, 6);
    if (hl === 'rub') s += flO(104, 186, 10) + mir(flO(104, 186, 10));
    if (hl === 'hole') s += flO(72, 170, 8);
    if (o.tags) s += o.tags.map(function (t) { return T(t[0], t[1], t[2], t[3]); }).join('');
    return g0 + '<g transform="translate(0,-24)">' + s + '</g>';
  }

  /* ---------- kit 2: cornea in section (epithelium → endothelium) ---------- */
  function cor(o) {
    o = o || {}; var s = '', x0 = 20, x1 = 340, sh = o.thick ? 96 : 70, top = 50;
    var eT = top, eB = top + 20, bw = eB + 2, sT = eB + 4, sB = sT + sh, dY = sB + 2, nT = dY + 3, nB = nT + 10;
    if (o.thin) { sh = 30; sB = sT + sh; dY = sB + 2; nT = dY + 3; nB = nT + 10; }
    if (o.tears) s += R(x0, eT - 8, x1 - x0, 7, o.hl === 'tears' ? FL : CW, o.hl === 'tears' ? EDGE : C, 1, 3) + (o.tearsThin ? R(x0 + 120, eT - 8, 120, 7, PAP, I3, 1, 3, ' stroke-dasharray="3 3"') : '');
    if (o.lens) s += P('M' + x0 + ',' + (eT - 6) + ' Q180,' + (eT - 30) + ' ' + x1 + ',' + (eT - 6), 'none', I3, 4, ' stroke-linecap="round" opacity=".6"');
    // stroma
    s += R(x0, sT, x1 - x0, sh, o.hl === 'stroma' ? FL : (o.haze ? SUNK : CW), o.hl === 'stroma' ? EDGE : C, 1);
    for (var y = sT + 8; y < sB - 3; y += o.thick ? 12 : 9) s += Ln(x0 + 4, y, x1 - 4, y, C, .7, ' stroke-opacity=".35"');
    if (o.nerves) s += P('M30,' + (sT + 10) + ' q30,-6 60,0 t60,0 t60,0 t60,0 t60,0', 'none', o.nervesCut ? I3 : C, 1.4, o.nervesCut ? ' stroke-dasharray="6 10"' : '');
    // epithelium (with an optional defect)
    var d0 = o.defect ? o.defect[0] : -1, d1 = o.defect ? o.defect[1] : -1;
    if (o.defect) {
      s += R(x0, eT, d0 - x0, 20, SURF, LN, 1) + R(d1, eT, x1 - d1, 20, SURF, LN, 1);
      if (o.hl === 'defect') s += P('M' + d0 + ',' + eT + ' L' + d0 + ',' + (eB + 2) + ' L' + d1 + ',' + (eB + 2) + ' L' + d1 + ',' + eT + ' Z', FL, EDGE, 1.5);
    } else s += R(x0, eT, x1 - x0, 20, o.hl === 'epi' ? FL : SURF, o.hl === 'epi' ? EDGE : LN, 1);
    for (var x = x0 + 10; x < x1; x += 12) if (!(x > d0 - 2 && x < d1 + 2)) s += Ln(x, eT + 2, x, eB - 2, I3, .6, ' stroke-opacity=".5"');
    if (o.bullae) [[90, 50], [150, 48], [210, 51], [262, 49]].forEach(function (b) { s += o.hl === 'bullae' ? O(b[0], b[1], 7, FL, EDGE, 1.2) : O(b[0], b[1], 7, PAP, I3, 1); });
    if (o.dendrite) s += o.hl === 'epi-d' ? P('M' + (d0 + 4) + ',' + (eB) + ' L' + (d1 - 4) + ',' + eB, 'none', FL, 4) : '';
    // Bowman, Descemet
    s += Ln(x0, bw, (o.defect && o.bowmanGap) ? d0 : x1, bw, I3, 1.4);
    if (o.defect && o.bowmanGap) s += Ln(d1, bw, x1, bw, I3, 1.4);
    s += Ln(x0, dY, x1, dY, INK, 1.8);
    // endothelium
    var step = o.sparse ? 34 : 16, cw = o.sparse ? 28 : 13;
    if (o.dmek) s += R(x0, dY + 1, x1 - x0, 3, FL, EDGE, 1);
    for (var cx = x0 + 2; cx + cw <= x1; cx += step) s += R(cx, nT, cw, nB - nT, o.hl === 'endo' || o.dmek ? FL : SUNK, o.hl === 'endo' || o.dmek ? EDGE : I3, 1, 2);
    if (o.guttae) for (var g = x0 + 24; g < x1 - 10; g += 38) s += P('M' + g + ',' + (dY + 1) + ' a6,7 0 0 0 12,0 Z', o.hl === 'guttae' ? FL : I2, o.hl === 'guttae' ? EDGE : null, 1.2);
    // pump / leak arrows across the endothelium
    if (o.pump) [70, 150, 230, 300].slice(0, o.pump).forEach(function (px) { s += arL(px, sB - 16, px, Math.min(nB + 22, 197), C, 2.2); });
    if (o.leak) [110, 190, 270].slice(0, o.leak).forEach(function (px) { s += arL(px, Math.min(nB + 26, 199), px, sB - 10, I3, 1.6, '3 3'); });
    // infection / inflammation
    if (o.crater) s += P(o.crater, PAP, o.hl === 'crater' ? null : I3, 1.2) + (o.hl === 'crater' ? flP(o.crater.replace(/ Z$/, ''), 3) : '');
    if (o.infil) s += E(o.infil[0], o.infil[1], o.infil[2], o.infil[3], o.hl === 'infil' ? FL : I3, o.hl === 'infil' ? EDGE : null, 1.2, o.hl === 'infil' ? ' fill-opacity=".85"' : ' fill-opacity=".45"');
    if (o.scar) s += R(o.scar[0], sT + 2, o.scar[1] - o.scar[0], o.scar[2] || 22, o.hl === 'scar' ? FL : I2, o.hl === 'scar' ? EDGE : null, 1, 6, o.hl === 'scar' ? '' : ' fill-opacity=".7"');
    if (o.bugs) o.bugs.forEach(function (b) { s += R(b[0] - 5, b[1] - 2, 10, 4.5, o.hl === 'bugs' ? FL : INK, o.hl === 'bugs' ? EDGE : null, 1, 2.2, ' transform="rotate(' + (b[2] || 0) + ' ' + b[0] + ' ' + b[1] + ')"'); });
    if (o.wbc) o.wbc.forEach(function (w) { s += O(w[0], w[1], 4.6, o.hl === 'wbc' ? FL : SURF, o.hl === 'wbc' ? EDGE : INK, 1.2) + O(w[0] - 1.4, w[1], 1.3, INK) + O(w[0] + 1.6, w[1] + .8, 1.3, INK); });
    if (o.vessel) s += P('M' + x0 + ',' + (sT + 14) + ' q22,-8 46,2', 'none', 'var(--urgent)', 2.2) + P('M' + x0 + ',' + (sT + 30) + ' q18,6 36,-2', 'none', 'var(--urgent)', 1.6);
    if (o.ac) s += T(180, 196, 'Chambre antérieure', 'middle');
    if (o.virus) o.virus.forEach(function (v) { s += O(v[0], v[1], 3.4, FL, EDGE, 1.2); });
    if (o.hypopyon) s += P('M120,200 L120,' + (200 - o.hypopyon) + ' L240,' + (200 - o.hypopyon) + ' L240,200 Z', SURF, I3, 1);
    if (o.hl === 'thick') s += flP('M' + (x1 - 6) + ',' + sT + ' L' + (x1 - 6) + ',' + sB, 3) + flP('M' + (x1 - 12) + ',' + sT + ' L' + x1 + ',' + sT + ' M' + (x1 - 12) + ',' + sB + ' L' + x1 + ',' + sB, 2.5);
    if (o.ring) s += flO(o.ring[0], o.ring[1], o.ring[2] || 12);
    if (o.tags) s += o.tags.map(function (t) { return Tb(t[0], t[1], t[2], t[3] || 'start'); }).join('');
    return s;
  }
  var CORL = { e: [26, 65, 'Épithélium'], s: [26, 130, 'Stroma'], n: [26, 186, 'Endothélium'] };

  /* ---------- kit 3: optic nerve head — section (lamina) and en face (disc + field) ---------- */
  function onhCut(o) { // sagittal section of the optic nerve head
    o = o || {}; var s = '', bow = o.bow || 0, cup = o.cup || 0;
    s += R(20, 112, 128, 40, SUNK, LN, 1) + R(212, 112, 128, 40, SUNK, LN, 1);
    s += R(20, 50, 128, 14, CW, C, 1) + R(212, 50, 128, 14, CW, C, 1);
    s += T(84, 132, 'Lame criblée', 'middle');
    var ly = 128 + bow;
    // axons: from the retina into the canal, through the lamina
    for (var i = 0; i < 4; i++) {
      var sx = 34 + i * 26, ex = 153 + i * 7, lyx = 124 + 4 * bow * ((ex - 148) / 64) * (1 - (ex - 148) / 64), lost = o.loss && i < o.loss;
      var ax = P('M' + sx + ',' + (56 + i * 1.5) + ' Q' + (140 + i * 4) + ',' + (58 + i) + ' ' + ex + ',' + (96 + cup * 0.3) + ' L' + ex + ',196', 'none', lost ? I3 : C, 2, lost ? ' stroke-dasharray="3 5"' : '');
      s += ax + mir(ax);
      if (bow > 8 && o.hl === 'pinch') s += O(ex, lyx, 3.6, FL, EDGE, 1.2) + mir(O(ex, lyx, 3.6, FL, EDGE, 1.2));
    }
    s += P('M148,124 Q180,' + (124 + bow * 2) + ' 212,124', 'none', o.hl === 'lamina' ? FL : I2, 6, ' stroke-dasharray="8 3"' + (o.hl === 'lamina' ? '' : ''));
    if (o.hl === 'lamina') s = s.replace('stroke-dasharray="8 3"', 'stroke-dasharray="8 3" stroke-linecap="butt"');
    // disc surface (cup)
    s += P('M140,58 Q180,' + (64 + cup) + ' 220,58', 'none', INK, 1.4);
    if (o.press) s += arL(180, 18, 180, 46 + cup * 0.6, C, 2.4) + arL(150, 24, 158, 50, C, 2) + arL(210, 24, 202, 50, C, 2);
    if (o.iop != null) s += gauge(o.iop, o.hl === 'iop', 330, 120);
    return s;
  }
  function disc(o) { // en face disc at (100,100); optional visual field on the right
    o = o || {}; var s = '', cd = o.cd || 0.3, cx = 100, cy = 100, rx = 52, ry = 60;
    s += E(cx, cy, rx, ry, CW, C, 1.6);
    var crx = rx * cd, cry = ry * (o.cdv || cd), nb = o.notch ? 16 : 0;
    s += P('M' + (cx - crx) + ',' + cy + ' A' + crx + ',' + cry + ' 0 0 1 ' + (cx + crx) + ',' + cy + ' A' + crx + ',' + (cry + nb) + ' 0 0 1 ' + (cx - crx) + ',' + cy + ' Z', PAP, I3, 1.2);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (q) { var sx = q[0], sy = q[1];
      s += P('M' + (cx + sx * 3) + ',' + (cy + sy * 6) + ' C' + (cx + sx * 5) + ',' + (cy + sy * 46) + ' ' + (cx + sx * 26) + ',' + (cy + sy * 62) + ' ' + (cx + sx * 66) + ',' + (cy + sy * 70), 'none', I2, 1.8, ' stroke-linecap="round"'); });
    if (o.notch && o.hl === 'notch') s += flP('M' + (cx - 20) + ',' + (cy + ry - 6) + ' Q' + cx + ',' + (cy + ry + 6) + ' ' + (cx + 20) + ',' + (cy + ry - 6), 3.5);
    if (o.heme) s += P('M' + (cx + 22) + ',' + (cy + ry - 10) + ' l10,16', 'none', o.hl === 'heme' ? FL : 'var(--urgent)', 5, ' stroke-linecap="round"') + (o.hl === 'heme' ? '' : '');
    if (o.pale) s += E(cx, cy, rx - 4, ry - 4, SURF, null, 0, ' fill-opacity=".75"') + (o.hl === 'pale' ? E(cx, cy, rx + 2, ry + 2, 'none', FL, 3) : '');
    if (o.swell) s += E(cx, cy, rx + 10, ry + 10, 'none', o.hl === 'swell' ? FL : I3, o.hl === 'swell' ? 4 : 2, ' stroke-dasharray="4 3"');
    s += T(cx, 190, o.label || 'Papille', 'middle');
    if (o.field) s += vf(o.field, o.hl === 'field');
    return s;
  }
  function vf(kind, hl) { // visual field panel (right half): 'normal' | 'arc' (superior arcuate) | 'para' (paracentral) | 'tunnel' | 'step'
    var s = '', x = 210, y = 30, w = 130, h = 130, mx = x + w / 2, my = y + h / 2;
    s += R(x, y, w, h, SURF, I3, 1.2, 6) + Ln(x + 8, my, x + w - 8, my, LN, 1) + Ln(mx, y + 8, mx, y + h - 8, LN, 1);
    for (var i = 0; i < 7; i++) for (var j = 0; j < 7; j++) { var px = x + 15 + i * 16.7, py = y + 15 + j * 16.7; if (Math.hypot(px - mx, py - my) < 58) s += O(px, py, 1.4, I3); }
    s += E(mx + 26, my + 2, 5, 7, INK); // blind spot
    var d = kind === 'arc' ? 'M' + (mx + 26) + ',' + (my - 6) + ' C' + (mx + 20) + ',' + (my - 46) + ' ' + (mx - 40) + ',' + (my - 46) + ' ' + (mx - 52) + ',' + (my - 4) + ' L' + (mx - 40) + ',' + (my - 4) + ' C' + (mx - 30) + ',' + (my - 32) + ' ' + (mx + 10) + ',' + (my - 32) + ' ' + (mx + 18) + ',' + (my - 6) + ' Z'
      : kind === 'para' ? 'M' + (mx - 4) + ',' + (my - 24) + ' a12,10 0 1 0 24,0 a12,10 0 1 0 -24,0 Z'
        : kind === 'step' ? 'M' + (mx - 58) + ',' + (my - 3) + ' L' + (mx - 34) + ',' + (my - 3) + ' L' + (mx - 34) + ',' + (my - 22) + ' L' + (mx - 52) + ',' + (my - 22) + ' Z'
          : kind === 'tunnel' ? 'M' + x + ',' + y + ' H' + (x + w) + ' V' + (y + h) + ' H' + x + ' Z M' + mx + ',' + (my - 16) + ' a16,16 0 1 0 0.1,0 Z' : '';
    if (d) s += P(d, INK, hl ? FL : null, hl ? 3 : 0, kind === 'tunnel' ? ' fill-rule="evenodd" fill-opacity=".85"' : ' fill-opacity=".85"');
    s += T(mx, y + h + 16, 'Champ visuel', 'middle');
    return s;
  }

  /* ---------- kit 4: eye seen from the front ---------- */
  function front(o) {
    o = o || {}; var s = '', cx = o.cx || 180, cy = o.cy || 100, k = o.k || 1;
    function X(v) { return cx + v * k; } function Y(v) { return cy + v * k; }
    s += P('M' + X(-150) + ',' + Y(0) + ' Q' + X(0) + ',' + Y(-110) + ' ' + X(150) + ',' + Y(0) + ' Q' + X(0) + ',' + Y(110) + ' ' + X(-150) + ',' + Y(0) + ' Z', o.red ? 'var(--urgent-wash, ' + SURF + ')' : SURF, I3, 1.4);
    if (o.vessels) s += P('M' + X(-140) + ',' + Y(-6) + ' q30,-10 58,-4 M' + X(-136) + ',' + Y(12) + ' q34,6 62,0 M' + X(140) + ',' + Y(-6) + ' q-30,-10 -58,-4 M' + X(136) + ',' + Y(12) + ' q-34,6 -62,0', 'none', o.hl === 'vessels' ? FL : 'var(--urgent)', 1.6);
    s += O(cx, cy, 62 * k, o.irisFill || I3, null, 0, ' fill-opacity=".55"');
    s += O(cx, cy, 62 * k, 'none', o.hl === 'limbus' ? FL : C, o.hl === 'limbus' ? 5 : 1.6);
    s += O(cx, cy, (o.pupil || 20) * k, EDGE);
    if (o.haze) s += O(cx, cy, 60 * k, SURF, null, 0, ' fill-opacity="' + o.haze + '"');
    return s;
  }

  /* ---------- kit 5: nerve route (ganglion → V1 → eye) ---------- */
  function nerve(o) {
    o = o || {}; var s = '';
    s += E(70, 120, 40, 26, SUNK, I2, 1.4) + T(70, 166, 'Ganglion trigéminal');
    [[56, 114], [78, 110], [66, 130], [88, 126]].forEach(function (p) { s += O(p[0], p[1], 6, SURF, I3, 1); });
    s += P('M106,112 C160,70 220,64 270,84', 'none', I2, 3.5, ' stroke-linecap="round"') + T(186, 64, 'V1');
    s += front({ cx: 300, cy: 104, k: 0.34 });
    if (o.dormant) [[56, 114], [78, 110], [66, 130], [88, 126]].forEach(function (p) { s += O(p[0], p[1], 2.4, o.hl === 'virus' ? FL : INK, o.hl === 'virus' ? EDGE : null, 1); });
    if (o.travel) { [[130, 96], [168, 78], [206, 70], [244, 74]].forEach(function (p) { s += O(p[0], p[1], 3.6, FL, EDGE, 1.2); }); s += Ar('M120,128 C170,96 220,90 258,98', 258, 98, 15, C, 2, '5 4'); }
    return s;
  }

  /* ---------- registry ---------- */
  function reg(id, steps, en) { if (en) addEN(en); G.OPH.mech[id] = { steps: steps.map(function (st) { var lab = fx0(st[1]); return { svg: svg(st[0], lab), label: st[1] }; }) }; }

  /* ===== Glaucome ===== */
  reg('g-crise', [
    [ant({ iris: 'flat', lens: 'thick', flow: 'normal', iop: 0.3, hl: 'pupil' }), 'Pupille mi-dilatée : l’iris frotte sur un cristallin épais'],
    [ant({ iris: 'flat', lens: 'thick', flow: 'block', iop: 0.45, hl: 'block' }), 'Bloc pupillaire : l’aqueuse reste coincée derrière l’iris'],
    [ant({ iris: 'bombe', lens: 'thick', flow: 'block', iop: 0.7, hl: 'angle' }), 'L’iris bombe en avant et ferme l’angle'],
    [ant({ iris: 'bombe', lens: 'thick', flow: 'block', iop: 0.97, hl: 'iop', edema: true }), 'Plus rien ne sort : PIO très haute, cornée œdémateuse'],
    [ant({ iris: 'flat', lens: 'thick', flow: 'lpi', lpi: true, iop: 0.3, hl: 'hole' }), 'L’iridotomie ouvre un passage : l’angle se rouvre']
  ], {
    'Pupille mi-dilatée : l’iris frotte sur un cristallin épais': 'Mid-dilated pupil: the iris rubs on a thick lens',
    'Bloc pupillaire : l’aqueuse reste coincée derrière l’iris': 'Pupillary block: aqueous is trapped behind the iris',
    'L’iris bombe en avant et ferme l’angle': 'The iris bows forward and closes the angle',
    'Plus rien ne sort : PIO très haute, cornée œdémateuse': 'Nothing drains: very high IOP, oedematous cornea',
    'L’iridotomie ouvre un passage : l’angle se rouvre': 'Iridotomy opens a bypass: the angle reopens'
  });
  reg('g-gpao', [
    [ant({ iris: 'flat', flow: 'normal', iop: 0.3, hl: 'tm' }), 'L’aqueuse sort par le trabéculum, le filtre de l’angle'],
    [ant({ iris: 'flat', flow: 'reduced', tm: 'clog', iop: 0.68, hl: 'tm' }), 'Trabéculum rigidifié : la sortie freine, la PIO monte'],
    [onhCut({ bow: 14, cup: 22, press: true, hl: 'pinch' }), 'La lame criblée recule et pince les axones'],
    [disc({ cd: 0.62, cdv: 0.7, notch: true, hl: 'notch' }), 'La papille se creuse ; le rebord inférieur s’amincit'],
    [disc({ cd: 0.62, cdv: 0.7, notch: true, field: 'arc', hl: 'field' }), 'Défaut arciforme supérieur, longtemps sans symptôme']
  ], {
    'L’aqueuse sort par le trabéculum, le filtre de l’angle': 'Aqueous leaves through the meshwork, the angle’s filter',
    'Trabéculum rigidifié : la sortie freine, la PIO monte': 'Stiff meshwork: outflow slows, IOP rises',
    'La lame criblée recule et pince les axones': 'The lamina cribrosa bows back and pinches axons',
    'La papille se creuse ; le rebord inférieur s’amincit': 'The disc cups; the inferior rim thins',
    'Défaut arciforme supérieur, longtemps sans symptôme': 'Superior arcuate defect, silent for years'
  });
  reg('g-pigmentaire', [
    [ant({ iris: 'concave', flow: 'normal', iop: 0.3, hl: 'rub' }), 'Myope : iris concave qui frotte sur les zonules'],
    [ant({ iris: 'concave', flow: 'reverse', iop: 0.35, hl: 'iris' }), 'Bloc inversé : l’aqueuse pousse l’iris vers l’arrière'],
    [ant({ iris: 'concave', flow: 'normal', pig: true, iop: 0.4, hl: 'rub' }), 'Le pigment arraché flotte et se dépose sur l’endothélium'],
    [ant({ iris: 'concave', flow: 'reduced', tm: 'pig', pig: true, iop: 0.75, hl: 'angle' }), 'Trabéculum chargé de pigment : la PIO monte']
  ], {
    'Myope : iris concave qui frotte sur les zonules': 'Myope: a concave iris rubs on the zonules',
    'Bloc inversé : l’aqueuse pousse l’iris vers l’arrière': 'Reverse block: aqueous pushes the iris backwards',
    'Le pigment arraché flotte et se dépose sur l’endothélium': 'Shed pigment floats and settles on the endothelium',
    'Trabéculum chargé de pigment : la PIO monte': 'Pigment-laden meshwork: IOP rises'
  });

  /* ===== Cornée ===== */
  reg('c-herpes', [
    [nerve({ dormant: true, hl: 'virus' }), 'Le VHS dort dans le ganglion trigéminal'],
    [nerve({ travel: true }), 'Stress, fièvre ou UV : le virus descend le nerf'],
    [front({ pupil: 18 }) + flP('M126,92 L156,86 L170,72 M156,86 L188,98 L210,84 M188,98 L204,116 L230,120', 4) + [[126, 92], [170, 72], [210, 84], [230, 120]].map(function (p) { return O(p[0], p[1], 4.4, FL, EDGE, 1.4); }).join(''), 'Il détruit l’épithélium : dendrite à bulbes terminaux'],
    [cor({ infil: [180, 106, 70, 22], wbc: [[130, 102], [168, 114], [214, 100], [236, 114]], hl: 'infil', tags: [CORL.s] }), 'Récidives : la réaction immunitaire voile le stroma'],
    [cor({ scar: [120, 240, 26], nerves: true, nervesCut: true, hl: 'scar', tags: [CORL.s] }), 'Nerfs détruits, cicatrices : cornée insensible et opaque']
  ], {
    'Le VHS dort dans le ganglion trigéminal': 'HSV sleeps in the trigeminal ganglion',
    'Stress, fièvre ou UV : le virus descend le nerf': 'Stress, fever or UV: the virus travels down the nerve',
    'Il détruit l’épithélium : dendrite à bulbes terminaux': 'It destroys the epithelium: dendrite with terminal bulbs',
    'Récidives : la réaction immunitaire voile le stroma': 'Recurrences: the immune reaction clouds the stroma',
    'Nerfs détruits, cicatrices : cornée insensible et opaque': 'Nerves destroyed, scars: a numb, hazy cornea'
  });
  var CRATER = 'M150,74 Q156,114 180,118 Q204,114 210,74 Z', PERF = 'M156,74 Q160,138 180,142 Q200,138 204,74 Z';
  reg('c-bacterienne', [
    [cor({ lens: true, defect: [150, 210], hl: 'defect', tags: [CORL.e] }), 'Brèche de l’épithélium, souvent sous une lentille'],
    [cor({ defect: [150, 210], bowmanGap: true, bugs: [[160, 84, 20], [178, 92, -10], [196, 86, 30], [170, 102, 0], [190, 106, -30]], hl: 'bugs', tags: [CORL.s] }), 'Les bactéries entrent et envahissent le stroma'],
    [cor({ defect: [150, 210], bowmanGap: true, vessel: true, infil: [180, 96, 52, 18], bugs: [[170, 92, 20], [190, 98, -10]], wbc: [[70, 86], [96, 94], [124, 90], [140, 102]], hl: 'infil' }), 'Les neutrophiles affluent du limbe : infiltrat blanc'],
    [cor({ defect: [150, 210], bowmanGap: true, crater: CRATER, infil: [180, 126, 46, 10], hl: 'crater' }), 'Leurs enzymes font fondre le stroma : ulcère'],
    [cor({ defect: [150, 210], bowmanGap: true, crater: PERF, ring: [180, 144, 10] }) + arL(180, 178, 180, 154, C, 2.4), 'Sans traitement : perforation, ou cicatrice qui voile l’axe']
  ], {
    'Brèche de l’épithélium, souvent sous une lentille': 'A break in the epithelium, often under a contact lens',
    'Les bactéries entrent et envahissent le stroma': 'Bacteria get in and invade the stroma',
    'Les neutrophiles affluent du limbe : infiltrat blanc': 'Neutrophils pour in from the limbus: white infiltrate',
    'Leurs enzymes font fondre le stroma : ulcère': 'Their enzymes melt the stroma: an ulcer',
    'Sans traitement : perforation, ou cicatrice qui voile l’axe': 'Untreated: perforation, or a scar across the visual axis'
  });
  reg('c-fuchs', [
    [cor({ pump: 4, leak: 3, hl: 'endo', tags: [CORL.n] }), 'L’endothélium pompe l’eau hors du stroma'],
    [cor({ guttae: true, sparse: true, pump: 3, leak: 3, hl: 'guttae', tags: [CORL.n] }), 'Guttae : excroissances de Descemet, cellules qui meurent'],
    [cor({ thick: true, guttae: true, sparse: true, pump: 1, leak: 3, hl: 'thick', tags: [CORL.s] }), 'Pompe débordée : le stroma se gorge d’eau'],
    [cor({ thick: true, guttae: true, sparse: true, bullae: true, pump: 1, leak: 3, hl: 'bullae', tags: [CORL.e] }), 'Bulles épithéliales : halos, flou pire au réveil'],
    [cor({ dmek: true, pump: 4, leak: 3 }), 'La greffe endothéliale (DMEK) remet une pompe neuve']
  ], {
    'L’endothélium pompe l’eau hors du stroma': 'The endothelium pumps water out of the stroma',
    'Guttae : excroissances de Descemet, cellules qui meurent': 'Guttae: Descemet outgrowths, dying cells',
    'Pompe débordée : le stroma se gorge d’eau': 'The pump is overwhelmed: the stroma swells',
    'Bulles épithéliales : halos, flou pire au réveil': 'Epithelial bullae: halos, blur worst on waking',
    'La greffe endothéliale (DMEK) remet une pompe neuve': 'An endothelial graft (DMEK) brings a new pump'
  });

  /* ---------- rendering + learner-paced stepping ---------- */
  function html(id) {
    var m = G.OPH.mech[id]; if (!m || !m.steps || !m.steps.length) return '';
    var n = m.steps.length;
    return '<figure class="fig mech" data-mech="' + esc(id) + '" data-i="0" style="margin:0">' +
      '<div class="mech-stage" role="button" tabindex="0" data-mech-next aria-label="' + esc(fx0('Mécanisme dessiné, étape {i} sur {n}. Touche pour avancer.').replace('{i}', 1).replace('{n}', n)) + '">' +
      m.steps.map(function (s, i) { return '<div class="mech-s" data-s="' + i + '"' + (i ? ' hidden' : '') + '>' + s.svg + '</div>'; }).join('') + '</div>' +
      '<figcaption class="mech-cap"><p class="mech-lab" aria-live="polite"><span class="mech-n">1/' + n + '</span> <span data-mech-lab>' + esc(fx0(m.steps[0].label)) + '</span></p>' +
      '<div class="mech-row"><ol class="mech-dots" aria-hidden="true">' + m.steps.map(function (_, i) { return '<li' + (i ? '' : ' class="on"') + '></li>'; }).join('') + '</ol>' +
      '<span class="schema-badge">' + esc(fx0('Schéma')) + '</span><button type="button" class="btn sm" data-mech-next>' + esc(fx0('Étape suivante')) + ' →</button></div></figcaption></figure>';
  }
  function go(fig, i) {
    var m = G.OPH.mech[fig.getAttribute('data-mech')]; if (!m) return; var n = m.steps.length; i = ((i % n) + n) % n;
    fig.setAttribute('data-i', String(i));
    Array.prototype.forEach.call(fig.querySelectorAll('.mech-s'), function (el, k) { el.hidden = k !== i; if (k === i) { el.classList.remove('mech-in'); void el.offsetWidth; el.classList.add('mech-in'); } });
    Array.prototype.forEach.call(fig.querySelectorAll('.mech-dots li'), function (el, k) { el.className = k === i ? 'on' : k < i ? 'done' : ''; });
    var lab = fig.querySelector('[data-mech-lab]'); if (lab) lab.textContent = fx0(m.steps[i].label);
    var nn = fig.querySelector('.mech-n'); if (nn) nn.textContent = (i + 1) + '/' + n;
    var st = fig.querySelector('.mech-stage'); if (st) st.setAttribute('aria-label', fx0('Mécanisme dessiné, étape {i} sur {n}. Touche pour avancer.').replace('{i}', i + 1).replace('{n}', n));
    var b = fig.querySelector('button[data-mech-next]'); if (b) b.textContent = (i === n - 1 ? fx0('Recommencer') : fx0('Étape suivante')) + (i === n - 1 ? ' ↺' : ' →');
  }
  function advance(el) { var fig = el.closest('[data-mech]'); if (fig) go(fig, (+fig.getAttribute('data-i') || 0) + 1); }
  if (typeof document !== 'undefined') {
    document.addEventListener('click', function (ev) { var t = ev.target && ev.target.closest ? ev.target.closest('[data-mech-next]') : null; if (t) advance(t); });
    document.addEventListener('keydown', function (ev) { var t = ev.target; if (t && t.classList && t.classList.contains('mech-stage') && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); advance(t); } });
  }
  return { html: html, go: go, ids: function () { return Object.keys(G.OPH.mech); }, kit: { ant: ant, cor: cor, onhCut: onhCut, disc: disc, front: front, nerve: nerve, svg: svg } };
})();
