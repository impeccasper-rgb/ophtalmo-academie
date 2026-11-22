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
    'Lentille': 'Lens (contact)', 'Hypopion': 'Hypopyon', 'Pigment': 'Pigment', 'LPI': 'LPI', 'Bactéries': 'Bacteria', 'Neutrophiles': 'Neutrophils', 'Greffon': 'Graft', 'Guttae': 'Guttae', 'Excavation': 'Cup', 'Encoche': 'Notch', 'Normal': 'Normal', 'Buphtalmie': 'Buphthalmos', 'pH 7': 'pH 7'
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
    var lx = o.sublux ? 124 : 108, zc = o.zonWeak ? (hl === 'zon' ? FL : I3) : I3, zd = o.zonWeak ? ' stroke-dasharray="2 4"' : '';
    if (!o.sublux) L += Ln(60, 188, lx, lensY, zc, o.zonWeak && hl === 'zon' ? 2.4 : .7, zd) + Ln(62, 191, lx + 2, lensY + 4, zc, o.zonWeak && hl === 'zon' ? 2.4 : .7, zd);
    if (o.tmCover) L += hl === 'tm' ? flP('M38,158 L38,176', 3) : Ln(38, 158, 38, 176, I2, 3);
    var irisD = IRIS[ir] || IRIS.flat;
    L += P(irisD, hl === 'iris' ? FL : I2, hl === 'iris' ? EDGE : null, 1.2);
    if (o.nv) L += P('M40,178 q8,-6 14,-2 q6,-6 14,-1 M80,166 q6,-5 12,-1 q6,-5 12,0 M120,160 q6,-4 12,0', 'none', hl === 'nv' ? FL : 'var(--urgent)', hl === 'nv' ? 2.2 : 1.4) + (o.nvAngle ? P('M33,164 q4,4 2,9', 'none', hl === 'nv' ? FL : 'var(--urgent)', 2) : '');
    if (o.lpi) L += O(72, 170, 3.2, SURF, INK, 1);
    if (o.pas) L += hl === 'pas' ? flP('M34,158 Q42,164 40,178', 4) : P('M34,158 Q42,164 40,178', 'none', INK, 4, ' stroke-linecap="round"');
    var left = L;
    var s = '', g0 = o.iop != null ? gauge(o.iop, hl === 'iop') : '';
    // cornea (full width) and lens
    s += P('M18,158 C30,54 330,54 342,158 L328,158 C316,72 44,72 32,158 Z', o.edema ? SUNK : CW, C, 1.5);
    if (o.edema) for (var i = 1; i < 10; i++) { var tt = i / 10; s += O((bez(18, 30, 330, 342, tt) + bez(32, 44, 316, 328, tt)) / 2, (bez(158, 54, 54, 158, tt) + bez(158, 72, 72, 158, tt)) / 2, 2.8, SURF, I3, .8); }
    if (o.pig) s += [[120, 92], [150, 104], [205, 98], [232, 112], [178, 118], [96, 120], [262, 126], [140, 132], [214, 130]].map(function (p) { return O(p[0], p[1], 1.8, INK); }).join('') + [[150, 98], [165, 96], [180, 95.5], [195, 96], [210, 98]].map(function (p) { return O(p[0], p[1], 2, INK); }).join('');
    var lcx = o.sublux ? 200 : 180;
    s += E(lcx, lensY, lensRx, lensRy, SUNK, hl === 'lens' ? EDGE : I3, hl === 'lens' ? 2 : 1.2, o.sublux ? ' transform="rotate(-8 200 ' + lensY + ')"' : '');
    if (o.sublux) s += Ln(298, 190, 268, lensY + 2, I3, .7) + Ln(296, 193, 266, lensY + 6, I3, .7) + Ln(62, 191, 80, 188, I3, .7, ' stroke-dasharray="2 3"');
    if (o.cells) [[120, 120], [150, 132], [204, 126], [236, 140], [176, 112], [100, 140], [260, 120], [140, 146], [220, 110]].forEach(function (c) { s += hl === 'cells' ? O(c[0], c[1], 2.6, FL, EDGE, 1) : O(c[0], c[1], 2, SURF, I2, 1); });
    if (o.lens === 'pxf') s += P('M140,' + (lensY - 14) + ' q40,-12 80,0', 'none', hl === 'flakes' ? FL : I2, 4, ' stroke-dasharray="3 4" stroke-linecap="round"') + P('M128,' + (lensY - 6) + ' q52,-16 104,0', 'none', hl === 'flakes' ? FL : I2, 2, ' stroke-dasharray="2 6" stroke-linecap="round"');
    if (hl === 'lens') s += E(lcx, lensY, lensRx, lensRy, 'none', FL, 3, o.sublux ? ' transform="rotate(-8 200 ' + lensY + ')"' : '');
    if (o.bleb) { var bh = o.bleb === 'big' ? 86 : o.bleb === 'flat' ? 144 : 104;
      var bd = 'M2,158 Q16,' + bh + ' 46,150'; s += P(bd + ' Z', o.bleb === 'flat' ? I3 : CW, o.bleb === 'flat' ? I2 : C, o.bleb === 'flat' ? 3 : 1.4);
      if (o.bleb === 'leak') s += O(12, bh + 26, 2.2, C) + O(20, bh + 18, 2.2, C) + O(8, bh + 34, 2.2, C);
      if (hl === 'bleb') s += flP(bd, 3); }
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
    } else if (fl === 'bleb' || fl === 'blebBlock') {
      s += Ar('M64,192 Q120,186 160,168 Q176,150 160,134 Q104,124 46,150', 46, 150, 160, C, 2, '5 4');
      s += fl === 'bleb' ? Ar('M38,152 Q30,140 22,132', 22, 132, 235, C, 2) : cross(28, 144, 5);
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
    if (o.guttae) for (var g = x0 + 24; g < x1 - 10; g += 38) s += P('M' + g + ',' + (dY + 1) + ' a6,7 0 0 0 12,0 Z', (o.hl === 'guttae' || o.hl === 'layers') ? FL : I2, (o.hl === 'guttae' || o.hl === 'layers') ? EDGE : null, 1.2);
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
    if (o.evap) { [150, 180, 210].forEach(function (x) { s += arL(x, eT - 10, x, eT - 30, C, 2); }); if (o.hl === 'evap') s += flP('M140,' + (eT - 9) + ' H240 V' + (eT - 1) + ' H140 Z', 2.5); }
    if (o.punct) [[96, eT + 3], [128, eT + 2], [150, eT + 4], [176, eT + 2], [204, eT + 3], [226, eT + 2], [250, eT + 4], [118, eT + 6], [190, eT + 6]].forEach(function (d) { s += O(d[0], d[1], 3, o.hl === 'punct' ? FL : I3, o.hl === 'punct' ? EDGE : null, 1); });
    if (o.nerves && o.hl === 'nerves') s += flP('M30,' + (sT + 10) + ' q30,-6 60,0 t60,0 t60,0 t60,0 t60,0', 2.5);
    if (o.cysts) [[176, sT + 18], [196, sT + 34], [160, sT + 40]].forEach(function (c) { s += O(c[0], c[1], 6, o.hl === 'org' ? FL : SURF, o.hl === 'org' ? EDGE : INK, 1.2) + O(c[0], c[1], 3, 'none', INK, 1); });
    if (o.hyphae) s += (o.hl === 'org' ? flP : function (d) { return P(d, 'none', INK, 1.6); })('M210,' + (sT + 12) + ' l14,12 l-4,14 M224,' + (sT + 24) + ' l16,6 M218,' + (sT + 34) + ' l10,16', 2);
    if (o.anchors) for (var ax = x0 + 14; ax < x1; ax += 22) { var weak = o.anchors === 'weak' && (ax % 44 < 22); if (!weak) s += Ln(ax, eB - 1, ax, bw + 1, o.hl === 'anchors' && o.anchors === 'ok' ? FL : INK, o.hl === 'anchors' && o.anchors === 'ok' ? 3 : 1.6); else if (o.hl === 'anchors') s += cross(ax, eB + 1, 3.5); }
    if (o.lid === 'stuck') s += R(60, eT - 26, 240, 24, I2, null, 0, 10) + flP('M70,' + (eT - 1) + ' H290', 2.5);
    if (o.lid === 'lift') s += R(60, eT - 46, 240, 22, I2, null, 0, 10) + R(140, eT - 25, 80, 16, SURF, LN, 1);
    if (o.descBreak) { s += R(170, dY - 2, 22, 5, o.thick ? SUNK : CW, null, 0) + P('M170,' + dY + ' q-6,8 2,10 M192,' + dY + ' q6,8 -2,10', 'none', INK, 1.6); if (o.hl === 'desc') s += flO(181, dY + 3, 12); }
    if (o.penetrate) [120, 180, 240].forEach(function (x) { s += flP('M' + x + ',' + (eT - 18) + ' L' + x + ',' + (nB + 12), 2.5) + head(x, nB + 18, 90, FL, 9); });
    if (o.granular) [[90, sT + 14], [130, sT + 26], [176, sT + 12], [214, sT + 30], [260, sT + 16], [150, sT + 44], [240, sT + 48]].forEach(function (g) { s += R(g[0] - 6, g[1] - 3, 12, 6, (o.hl === 'gran' || o.hl === 'layers') ? FL : I2, (o.hl === 'gran' || o.hl === 'layers') ? EDGE : null, 1, 2); });
    if (o.mapdot) [[110, eT + 10], [170, eT + 12], [230, eT + 9], [280, eT + 11]].forEach(function (g) { s += O(g[0], g[1], 3, o.hl === 'layers' ? FL : I2, o.hl === 'layers' ? EDGE : null, 1); });
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
          : kind === 'bitemp' ? 'M' + mx + ',' + (y + 6) + ' H' + (x + w - 6) + ' V' + (y + h - 6) + ' H' + mx + ' Z'
          : kind === 'tunnel' ? 'M' + x + ',' + y + ' H' + (x + w) + ' V' + (y + h) + ' H' + x + ' Z M' + mx + ',' + (my - 16) + ' a16,16 0 1 0 0.1,0 Z' : '';
    if (d) s += P(d, INK, hl ? FL : null, hl ? 3 : 0, kind === 'tunnel' ? ' fill-rule="evenodd" fill-opacity=".85"' : ' fill-opacity=".85"');
    s += T(mx, y + h + 16, 'Champ visuel', 'middle');
    return s;
  }

  /* ---------- kit 4: eye seen from the front ---------- */
  function front(o) {
    o = o || {}; var s = '', cx = o.cx || 180, cy = o.cy || 100, k = o.k || 1;
    function X(v) { return cx + v * k; } function Y(v) { return cy + v * k; }
    function ringSeg(cx0, cy0, r0, r1, a0, a1) { var A = function (r, a) { return n1(cx0 + Math.cos(a * Math.PI / 180) * r) + ',' + n1(cy0 + Math.sin(a * Math.PI / 180) * r); }; return 'M' + A(r1, a0) + ' A' + r1 + ',' + r1 + ' 0 0 1 ' + A(r1, a1) + ' L' + A(r0, a1) + ' A' + r0 + ',' + r0 + ' 0 0 0 ' + A(r0, a0) + ' Z'; }
    function arcSeg(cx0, cy0, r, a0, a1) { var A = function (a) { return n1(cx0 + Math.cos(a * Math.PI / 180) * r) + ',' + n1(cy0 + Math.sin(a * Math.PI / 180) * r); }; return 'M' + A(a0) + ' A' + r + ',' + r + ' 0 0 1 ' + A(a1); }
    s += P('M' + X(-150) + ',' + Y(0) + ' Q' + X(0) + ',' + Y(-110) + ' ' + X(150) + ',' + Y(0) + ' Q' + X(0) + ',' + Y(110) + ' ' + X(-150) + ',' + Y(0) + ' Z', o.red ? 'var(--urgent-wash, ' + SURF + ')' : SURF, I3, 1.4);
    if (o.vessels) s += (o.hl === 'vessels' ? function (d) { return flP(d, 2.2); } : function (d, a, b, c) { return P(d, a, b, c); })('M' + X(-140) + ',' + Y(-6) + ' q30,-10 58,-4 M' + X(-136) + ',' + Y(12) + ' q34,6 62,0 M' + X(140) + ',' + Y(-6) + ' q-30,-10 -58,-4 M' + X(136) + ',' + Y(12) + ' q-34,6 -62,0', 'none', o.hl === 'vessels' ? FL : 'var(--urgent)', 1.6);
    s += O(cx, cy, 62 * k, o.irisFill || I3, null, 0, ' fill-opacity=".55"');
    s += o.hl === 'limbus' ? O(cx, cy, 62 * k, 'none', EDGE, 7) + O(cx, cy, 62 * k, 'none', FL, 4.5) : O(cx, cy, 62 * k, 'none', C, 1.6);
    s += O(cx, cy, (o.pupil || 20) * k, EDGE);
    if (o.haze) s += O(cx, cy, 60 * k, SURF, null, 0, ' fill-opacity="' + o.haze + '"');
    var H = o.hl;
    function fl(d, w) { return flP(d, w || 3); }
    if (o.radial) for (var a = 0; a < 360; a += 45) { var r0 = 18 * k, r1 = 58 * k, ca = Math.cos(a * Math.PI / 180), sa = Math.sin(a * Math.PI / 180); s += H === 'radial' ? fl('M' + n1(cx + ca * r0) + ',' + n1(cy + sa * r0) + ' L' + n1(cx + ca * r1) + ',' + n1(cy + sa * r1), 2.4) : Ln(cx + ca * r0, cy + sa * r0, cx + ca * r1, cy + sa * r1, SURF, 2); }
    if (o.ringInf) s += H === 'ringInf' ? O(cx, cy, 34 * k, 'none', EDGE, 9) + O(cx, cy, 34 * k, 'none', FL, 6) : O(cx, cy, 34 * k, 'none', SURF, 6);
    if (o.satellite) [[-48, -10], [44, -26], [36, 40]].forEach(function (d) { s += O(cx + d[0] * k, cy + d[1] * k, 4.5 * k, FL, EDGE, 1.2); });
    if (o.sun) { s += O(40, 30, 12, 'none', I2, 2); for (var b = 0; b < 8; b++) { var aa = b * 45 * Math.PI / 180; s += Ln(40 + Math.cos(aa) * 16, 30 + Math.sin(aa) * 16, 40 + Math.cos(aa) * 22, 30 + Math.sin(aa) * 22, I2, 1.6); } s += arL(58, 42, cx - 66 * k, cy - 8, C, 2, '5 4'); }
    if (H === 'limbN') s += fl('M' + n1(cx - 60 * k) + ',' + n1(cy - 24 * k) + ' Q' + n1(cx - 70 * k) + ',' + cy + ' ' + n1(cx - 60 * k) + ',' + n1(cy + 24 * k));
    if (o.wedge) { var tip = cx - 62 * k + o.wedge * 46 * k, wd = 'M' + n1(cx - 146 * k) + ',' + n1(cy - 22 * k) + ' L' + n1(tip) + ',' + cy + ' L' + n1(cx - 146 * k) + ',' + n1(cy + 22 * k) + ' Z';
      s += P(wd, I2, null, 0, ' fill-opacity=".5"') + P('M' + n1(cx - 140 * k) + ',' + n1(cy - 10 * k) + ' L' + n1(tip - 6) + ',' + n1(cy - 2) + ' M' + n1(cx - 140 * k) + ',' + n1(cy + 10 * k) + ' L' + n1(tip - 6) + ',' + n1(cy + 2), 'none', 'var(--urgent)', 1.2);
      if (H === 'wedge') s += fl(wd.replace(' Z', ''), 2.5); if (H === 'head') s += flO(tip, cy, 9); }
    if (o.graft) { s += O(cx, cy, 40 * k, 'none', H === 'graft' ? EDGE : I2, H === 'graft' ? 5 : 1.4); if (H === 'graft') s += O(cx, cy, 40 * k, 'none', FL, 3); for (var u = 0; u < 16; u++) { var ua = u * 22.5 * Math.PI / 180; s += Ln(cx + Math.cos(ua) * 36 * k, cy + Math.sin(ua) * 36 * k, cx + Math.cos(ua) * 44 * k, cy + Math.sin(ua) * 44 * k, INK, 1); } }
    if (o.ingrowth) { var gd = 'M' + n1(cx - 62 * k) + ',' + n1(cy - 14 * k) + ' q12,2 22,8 M' + n1(cx - 60 * k) + ',' + n1(cy + 22 * k) + ' q12,-2 22,-10 M' + n1(cx + 58 * k) + ',' + n1(cy - 28 * k) + ' q-12,4 -20,12'; s += H === 'ingrowth' ? fl(gd, 2.4) : P(gd, 'none', 'var(--urgent)', 1.6); }
    if (o.kp) for (var q = 0; q < 6; q++) s += O(cx - 30 * k + q * 12 * k, cy - 26 * k + q * 10 * k, 3.2, FL, EDGE, 1);
    if (o.limbal) for (var v = 0; v < 360; v += 15) { if (o.isch && v >= 200 && v <= 320) continue; var va = v * Math.PI / 180; s += Ln(cx + Math.cos(va) * 64 * k, cy + Math.sin(va) * 64 * k, cx + Math.cos(va) * 76 * k, cy + Math.sin(va) * 76 * k, 'var(--urgent)', 1.4); }
    if (o.isch) { s += P(ringSeg(cx, cy, 63 * k, 78 * k, 200, 320), SURF, null, 0); if (H === 'isch') s += fl(arcSeg(cx, cy, 70 * k, 200, 320), 3); }
    if (o.conjVess) { var cvd = 'M' + n1(cx - 76 * k) + ',' + n1(cy - 20 * k) + ' C' + n1(cx - 40 * k) + ',' + n1(cy - 30 * k) + ' ' + n1(cx - 20 * k) + ',' + n1(cy - 6 * k) + ' ' + n1(cx + 6 * k) + ',' + n1(cy - 14 * k) + ' M' + n1(cx - 74 * k) + ',' + n1(cy + 24 * k) + ' C' + n1(cx - 40 * k) + ',' + n1(cy + 14 * k) + ' ' + n1(cx - 10 * k) + ',' + n1(cy + 34 * k) + ' ' + n1(cx + 20 * k) + ',' + n1(cy + 20 * k) + ' M' + n1(cx + 76 * k) + ',' + n1(cy + 4 * k) + ' C' + n1(cx + 50 * k) + ',' + n1(cy + 10 * k) + ' ' + n1(cx + 40 * k) + ',' + cy + ' ' + n1(cx + 24 * k) + ',' + n1(cy + 6 * k); s += O(cx, cy, 60 * k, SURF, null, 0, ' fill-opacity=".55"') + (H === 'conjVess' ? fl(cvd, 2.4) : P(cvd, 'none', 'var(--urgent)', 1.6)); }
    if (o.irrig) { s += R(cx - 16, 4, 32, 18, CW, C, 1.4, 4); [-8, 0, 8].forEach(function (d) { s += fl('M' + (cx + d) + ',24 Q' + (cx + d * 2) + ',' + (cy - 40) + ' ' + (cx + d * 3) + ',' + (cy - 20), 2.4); }); s += T(cx + 34, 18, 'pH 7', 'start', 'lbl-sm lbl-b'); }
    if (o.dots) [[-14, -10], [10, -16], [16, 8], [-8, 14], [0, 0], [-22, 4], [22, -4]].forEach(function (d) { s += O(cx + d[0] * k * 1.6, cy + d[1] * k * 1.6, 3.4 * k * 1.6, H === 'dots' ? FL : SURF, H === 'dots' ? EDGE : I2, 1); });
    if (o.arcus) { s += O(cx, cy, 55 * k, 'none', SURF, 7 * k, ' stroke-opacity=".9"'); if (H === 'arcus') s += O(cx, cy, 55 * k, 'none', EDGE, 4) + O(cx, cy, 55 * k, 'none', FL, 2); }
    if (o.kf) { s += O(cx, cy, 59 * k, 'none', 'var(--t-pigment)', 6 * k); if (H === 'kf') s += O(cx, cy, 59 * k, 'none', EDGE, 4) + O(cx, cy, 59 * k, 'none', FL, 2); }
    if (o.whorl) { var wd2 = 'M' + cx + ',' + n1(cy + 6 * k) + ' C' + n1(cx - 30 * k) + ',' + n1(cy + 20 * k) + ' ' + n1(cx - 40 * k) + ',' + n1(cy + 40 * k) + ' ' + n1(cx - 30 * k) + ',' + n1(cy + 54 * k) + ' M' + cx + ',' + n1(cy + 6 * k) + ' C' + n1(cx + 24 * k) + ',' + n1(cy + 22 * k) + ' ' + n1(cx + 40 * k) + ',' + n1(cy + 36 * k) + ' ' + n1(cx + 34 * k) + ',' + n1(cy + 52 * k) + ' M' + cx + ',' + n1(cy + 6 * k) + ' C' + n1(cx - 4 * k) + ',' + n1(cy + 30 * k) + ' ' + n1(cx + 8 * k) + ',' + n1(cy + 44 * k) + ' ' + cx + ',' + n1(cy + 58 * k); s += H === 'whorl' ? fl(wd2, 2.2) : P(wd2, 'none', I2, 1.6); }
    if (o.band) { var bd2 = 'M' + n1(cx - 58 * k) + ',' + n1(cy - 12 * k) + ' H' + n1(cx + 58 * k) + ' V' + n1(cy + 12 * k) + ' H' + n1(cx - 58 * k) + ' Z'; s += P(bd2, SURF, null, 0, ' fill-opacity=".9"') + [-36, -12, 14, 38].map(function (d) { return O(cx + d * k, cy + (d % 24 ? 3 : -3) * k, 3, I3); }).join('') + (H === 'band' ? fl(bd2, 2.4) : ''); }
    if (o.allergen) [[30, 30], [62, 18], [90, 40], [300, 26], [330, 44], [270, 16]].forEach(function (d, i) { s += O(d[0], d[1], 5, H === 'allergen' ? FL : I3, H === 'allergen' ? EDGE : null, 1.2) + (i % 3 === 0 ? arL(d[0] + 6, d[1] + 6, d[0] < 180 ? d[0] + 30 : d[0] - 30, d[1] + 28, C, 1.6) : ''); });
    if (o.conjInj && H !== 'vessels') s += P('M' + X(-120) + ',' + Y(-24) + ' q24,12 50,8 M' + X(120) + ',' + Y(-24) + ' q-24,12 -50,8', 'none', 'var(--urgent)', 1.4);
    if (o.punctF) [[-20, -12], [8, -24], [24, 10], [-6, 22], [-30, 16], [30, -10]].forEach(function (d) { s += O(cx + d[0] * k, cy + d[1] * k, 2.6, FL, EDGE, 1); });
    if (o.symbl) { var sd = 'M' + X(-40) + ',' + Y(72) + ' L' + X(-30) + ',' + Y(56) + ' M' + X(0) + ',' + Y(78) + ' L' + X(0) + ',' + Y(60) + ' M' + X(40) + ',' + Y(72) + ' L' + X(30) + ',' + Y(56); s += H === 'symbl' ? fl(sd, 4) : P(sd, 'none', I2, 4); }
    if (o.ic) for (var w = 0; w < 360; w += 30) { var wa = w * Math.PI / 180; s += O(cx + Math.cos(wa) * 62 * k, cy + Math.sin(wa) * 62 * k, 3.2, H === 'ic' ? FL : I2, H === 'ic' ? EDGE : null, 1); }
    if (o.crescent) { var cd2 = ringSeg(cx, cy, 50 * k, 60 * k, 140, 220); s += P(cd2, SURF, null, 0) + (H === 'crescent' ? fl(cd2.replace(' Z', ''), 2.4) : ''); }
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

  /* ---------- kit 6: cornea in profile (keratoconus) ---------- */
  function profile(o) {
    o = o || {}; var s = '', c = o.cone || 0, N = 40, out = [], inn = [];
    function g(t, m, w) { return Math.exp(-Math.pow((t - m) / w, 2)); }
    function xo(t) { return 186 - 86 * Math.pow(Math.max(0, 1 - Math.pow(2 * t - 1, 2)), 0.55) - c * 34 * g(t, 0.62, 0.15); }
    function th(t) { return 13 - c * 8 * g(t, 0.62, 0.12); }
    for (var i = 0; i <= N; i++) { var t = i / N, y = 22 + 158 * t; out.push([xo(t), y]); inn.push([xo(t) + th(t), y]); }
    var pl = function (pts) { return 'M' + pts.map(function (q) { return n1(q[0]) + ',' + n1(q[1]); }).join(' L'); };
    s += P(pl(out) + ' L' + pl(inn.slice().reverse()).slice(1) + ' Z', CW, null, 0);
    s += P(pl(out), 'none', C, 2) + P(pl(inn), 'none', C, 2);
    for (var k = 1; k < 9; k++) { var tk = k / 9, yk = 22 + 158 * tk, a = xo(tk) + 2.5, b = xo(tk) + th(tk) - 2.5;
      s += o.links === 'cxl' ? Ln(a, yk, b, yk, EDGE, 4.5) + Ln(a, yk, b, yk, FL, 2.5) : Ln(a, yk, b, yk, INK, 1.4, o.links === 'broken' ? ' stroke-dasharray="1.5 3"' : ''); }
    var ta = 0.6, apx = xo(ta), apy = 22 + 158 * ta;
    if (c > .5 && o.hl === 'cone') s += flO(apx + 4, apy, 13);
    if (o.rub) s += P('M40,60 q-14,16 0,30 q14,16 0,30', 'none', I2, 3, ' stroke-linecap="round"') + arL(30, 40, 52, 58, C, 2) + arL(52, 130, 30, 150, C, 2);
    if (o.rays) [60, 82, 104, 126, 146].forEach(function (y, k) {
      var hx = xo((y - 22) / 158), tx = o.rays === 'blur' ? [300, 318, 344, 312, 336][k] : 330, ty = o.rays === 'blur' ? [86, 112, 98, 124, 104][k] : 100;
      s += Ln(10, y, hx, y, I3, 1.2) + Ln(hx, y, tx, ty, I3, 1.2) + (o.rays === 'blur' ? O(tx, ty, 3.2, FL, EDGE, 1) : '');
    });
    if (o.rays === 'sharp') s += O(330, 100, 4, C);
    return s;
  }

  /* ---------- kit 7: retina with ischaemia (neovascular glaucoma) ---------- */
  function retina(o) {
    o = o || {}; var s = '';
    s += R(14, 30, 190, 140, CW, C, 1.2, 10) + O(54, 100, 16, SURF, I3, 1.2);
    s += P('M68,94 C110,70 150,62 196,52 M68,106 C110,130 150,138 196,148 M70,98 C120,92 160,96 196,100', 'none', 'var(--urgent)', 2, ' stroke-linecap="round"');
    s += P('M120,40 h80 v120 h-80 Z', I3, null, 0, ' fill-opacity=".35"') + P('M150,96 h50', 'none', I3, 2, ' stroke-dasharray="3 3"');
    if (o.vegf) [[150, 70], [172, 110], [188, 64], [160, 138], [196, 124], [228, 84], [252, 104], [236, 128]].forEach(function (p) { s += O(p[0], p[1], 3.6, FL, EDGE, 1); });
    if (o.vegf) s += arL(214, 100, 300, 100, C, 2.4);
    s += front({ cx: 316, cy: 100, k: 0.26 });
    return s;
  }

  /* ---------- kit 8: globe size (child) ---------- */
  function globes(big, hl) {
    var s = O(90, 104, 46, SURF, I3, 1.6) + P('M58,72 Q90,50 122,72', 'none', C, 3);
    s += O(250, 104, big ? 70 : 46, SURF, hl ? EDGE : I3, hl ? 2 : 1.6) + P(big ? 'M200,56 Q250,22 300,56' : 'M218,72 Q250,50 282,72', 'none', C, 3);
    if (hl) s += O(250, 104, 70, 'none', FL, 3.5);
    return s + T(90, 172, 'Normal') + T(250, 192, 'Buphtalmie');
  }

  /* ===== remaining glaucoma figures ===== */
  reg('g-hto', [
    [ant({ iris: 'flat', flow: 'reduced', iop: 0.58, hl: 'iop' }), 'PIO au-dessus de 21 mmHg, sans atteinte du nerf'],
    [disc({ cd: 0.3, field: 'normal' }), 'Papille saine et champ normal : pas encore un glaucome'],
    [cor({ thin: true, hl: 'thick', tags: [[26, 100, 'Stroma']] }), 'Cornée mince, âge, famille : risque de conversion accru'],
    [disc({ cd: 0.5, cdv: 0.58, notch: true, field: 'step', hl: 'field' }), 'Premières fibres perdues : conversion en glaucome']
  ], {
    'PIO au-dessus de 21 mmHg, sans atteinte du nerf': 'IOP above 21 mmHg, with no nerve damage',
    'Papille saine et champ normal : pas encore un glaucome': 'Healthy disc and normal field: not glaucoma yet',
    'Cornée mince, âge, famille : risque de conversion accru': 'Thin cornea, age, family: higher risk of conversion',
    'Premières fibres perdues : conversion en glaucome': 'First fibres lost: conversion to glaucoma'
  });
  reg('g-gpn', [
    [onhCut({ iop: 0.3 }), 'PIO normale, mais nerf optique vulnérable'],
    [onhCut({ iop: 0.3 }) + P('M150,190 C158,166 162,150 164,134 M210,190 C202,166 198,150 196,134', 'none', 'var(--urgent)', 2.4, ' stroke-dasharray="5 4"') + flO(180, 150, 22), 'Perfusion insuffisante : hypotension nocturne, vasospasme'],
    [disc({ cd: 0.45, cdv: 0.5, heme: true, hl: 'heme' }), 'Hémorragie au bord de la papille : maladie active'],
    [disc({ cd: 0.5, cdv: 0.6, notch: true, field: 'para', hl: 'field' }), 'Défaut paracentral précoce, près du point de fixation']
  ], {
    'PIO normale, mais nerf optique vulnérable': 'Normal IOP, but a vulnerable optic nerve',
    'Perfusion insuffisante : hypotension nocturne, vasospasme': 'Poor perfusion: nocturnal hypotension, vasospasm',
    'Hémorragie au bord de la papille : maladie active': 'Haemorrhage at the disc margin: active disease',
    'Défaut paracentral précoce, près du point de fixation': 'Early paracentral defect, close to fixation'
  });
  reg('g-fermeture', [
    [ant({ iris: 'flat', lens: 'thick', flow: 'normal', iop: 0.3, hl: 'lens' }), 'Œil court, gros cristallin : chambre antérieure peu profonde'],
    [ant({ iris: 'flat', lens: 'thick', flow: 'normal', iop: 0.35, hl: 'pupil' }), 'Bloc pupillaire relatif : l’aqueuse passe mal à la pupille'],
    [ant({ iris: 'bombe', lens: 'thick', flow: 'block', iop: 0.5, hl: 'angle' }), 'L’iris touche le trabéculum : l’angle se ferme'],
    [ant({ iris: 'bombe', lens: 'thick', flow: 'block', pas: true, iop: 0.62, hl: 'pas' }), 'Synéchies : l’iris reste collé à l’angle'],
    [disc({ cd: 0.66, cdv: 0.72, notch: true, hl: 'notch' }), 'PIO haute, lente ou brutale : neuropathie (PACG)']
  ], {
    'Œil court, gros cristallin : chambre antérieure peu profonde': 'Short eye, big lens: a shallow anterior chamber',
    'Bloc pupillaire relatif : l’aqueuse passe mal à la pupille': 'Relative pupillary block: aqueous struggles through the pupil',
    'L’iris touche le trabéculum : l’angle se ferme': 'The iris touches the meshwork: the angle closes',
    'Synéchies : l’iris reste collé à l’angle': 'Synechiae: the iris stays stuck in the angle',
    'PIO haute, lente ou brutale : neuropathie (PACG)': 'High IOP, slow or sudden: neuropathy (PACG)'
  });
  reg('g-pxf', [
    [ant({ iris: 'flat', lens: 'pxf', flow: 'normal', iop: 0.3, hl: 'flakes' }), 'Flocons de pseudo-exfoliation sur la capsule du cristallin'],
    [ant({ iris: 'flat', lens: 'pxf', flow: 'normal', pig: true, iop: 0.4, hl: 'pupil' }), 'L’iris frotte sur les flocons et perd du pigment'],
    [ant({ iris: 'flat', lens: 'pxf', flow: 'reduced', tm: 'clog', iop: 0.78, hl: 'tm' }), 'Flocons et pigment bouchent le trabéculum : PIO haute'],
    [ant({ iris: 'flat', lens: 'pxf', flow: 'reduced', tm: 'clog', zonWeak: true, iop: 0.6, hl: 'zon' }), 'Zonules fragiles : chirurgie de cataracte plus risquée']
  ], {
    'Flocons de pseudo-exfoliation sur la capsule du cristallin': 'Pseudoexfoliation flakes on the lens capsule',
    'L’iris frotte sur les flocons et perd du pigment': 'The iris rubs on the flakes and sheds pigment',
    'Flocons et pigment bouchent le trabéculum : PIO haute': 'Flakes and pigment clog the meshwork: high IOP',
    'Zonules fragiles : chirurgie de cataracte plus risquée': 'Weak zonules: riskier cataract surgery'
  });
  reg('g-neovasculaire', [
    [retina({ vegf: true }), 'Rétine ischémique (diabète, occlusion) : elle libère du VEGF'],
    [ant({ iris: 'flat', flow: 'normal', nv: true, iop: 0.35, hl: 'nv' }), 'Néovaisseaux au bord de la pupille et dans l’angle'],
    [ant({ iris: 'flat', flow: 'reduced', nv: true, nvAngle: true, tm: 'clog', iop: 0.6, hl: 'tm' }), 'Membrane fibrovasculaire sur un angle encore ouvert'],
    [ant({ iris: 'flat', flow: 'reduced', nv: true, nvAngle: true, pas: true, tm: 'clog', iop: 0.97, hl: 'iop' }), 'La membrane se rétracte : angle fermé, PIO très haute']
  ], {
    'Rétine ischémique (diabète, occlusion) : elle libère du VEGF': 'Ischaemic retina (diabetes, occlusion) releases VEGF',
    'Néovaisseaux au bord de la pupille et dans l’angle': 'New vessels at the pupil margin and in the angle',
    'Membrane fibrovasculaire sur un angle encore ouvert': 'Fibrovascular membrane over a still-open angle',
    'La membrane se rétracte : angle fermé, PIO très haute': 'The membrane contracts: angle closed, very high IOP'
  });
  reg('g-secondaires', [
    [ant({ iris: 'flat', flow: 'reduced', tm: 'clog', iop: 0.62, hl: 'tm' }), 'Cortisone : le trabéculum se rigidifie, la PIO monte'],
    [ant({ iris: 'flat', flow: 'reduced', tm: 'clog', cells: true, iop: 0.55, hl: 'cells' }), 'Uvéite : cellules et protéines encombrent le filtre'],
    [ant({ iris: 'bombe', flow: 'block', iop: 0.75, hl: 'pupil' }), 'Iris collé au cristallin : bloc pupillaire, angle fermé'],
    [disc({ cd: 0.66, cdv: 0.72, notch: true, field: 'arc', hl: 'field' }), 'PIO élevée prolongée : neuropathie glaucomateuse']
  ], {
    'Cortisone : le trabéculum se rigidifie, la PIO monte': 'Steroids: the meshwork stiffens, IOP rises',
    'Uvéite : cellules et protéines encombrent le filtre': 'Uveitis: cells and protein clog the filter',
    'Iris collé au cristallin : bloc pupillaire, angle fermé': 'Iris stuck to the lens: pupillary block, closed angle',
    'PIO élevée prolongée : neuropathie glaucomateuse': 'Sustained high IOP: glaucomatous neuropathy'
  });
  reg('g-postop', [
    [ant({ iris: 'flat', flow: 'bleb', bleb: 'ok', iop: 0.3, hl: 'bleb' }), 'Trabéculectomie : nouvelle sortie vers une bulle sous la conjonctive'],
    [ant({ iris: 'pushed', flow: 'bleb', bleb: 'big', iop: 0.06, hl: 'iop' }), 'Trop de débit : PIO basse, chambre antérieure plate'],
    [ant({ iris: 'flat', flow: 'blebBlock', bleb: 'flat', iop: 0.72, hl: 'bleb' }), 'Pas assez : la bulle cicatrise, la PIO remonte'],
    [ant({ iris: 'flat', flow: 'bleb', bleb: 'leak', cells: true, iop: 0.2, hl: 'bleb' }), 'Bulle mince qui suinte : risque d’infection (blébite)']
  ], {
    'Trabéculectomie : nouvelle sortie vers une bulle sous la conjonctive': 'Trabeculectomy: a new exit into a bleb under the conjunctiva',
    'Trop de débit : PIO basse, chambre antérieure plate': 'Too much flow: low IOP, flat anterior chamber',
    'Pas assez : la bulle cicatrise, la PIO remonte': 'Too little: the bleb scars, IOP climbs back',
    'Bulle mince qui suinte : risque d’infection (blébite)': 'Thin, leaking bleb: risk of infection (blebitis)'
  });
  reg('g-papille', [
    [disc({ cd: 0.3 }), 'Papille normale : anneau rose, petite excavation centrale'],
    [disc({ cd: 0.66, cdv: 0.74, notch: true, hl: 'notch' }), 'Glaucome : l’excavation grandit, encoches aux pôles'],
    [disc({ cd: 0.3, pale: true, hl: 'pale' }), 'Autre cause : la pâleur dépasse l’excavation'],
    [disc({ cd: 0.3, pale: true, field: 'bitemp', hl: 'field' }), 'Défaut qui respecte le méridien vertical : IRM']
  ], {
    'Papille normale : anneau rose, petite excavation centrale': 'Normal disc: pink rim, small central cup',
    'Glaucome : l’excavation grandit, encoches aux pôles': 'Glaucoma: the cup grows, notches at the poles',
    'Autre cause : la pâleur dépasse l’excavation': 'Another cause: pallor exceeds cupping',
    'Défaut qui respecte le méridien vertical : IRM': 'Defect respecting the vertical meridian: MRI'
  });
  reg('g-cristallin', [
    [ant({ iris: 'pushed', lens: 'forward', flow: 'block', iop: 0.7, hl: 'lens' }), 'Cataracte gonflée : elle pousse l’iris et ferme l’angle'],
    [ant({ iris: 'flat', flow: 'reduced', tm: 'clog', cells: true, iop: 0.65, hl: 'tm' }), 'Protéines du cristallin : elles bouchent un angle ouvert'],
    [ant({ iris: 'flat', flow: 'normal', sublux: true, iop: 0.5, hl: 'lens' }), 'Cristallin luxé ou trauma : angle déplacé ou cicatriciel'],
    [ant({ iris: 'pushed', lens: 'forward', flow: 'block', edema: true, iop: 0.95, hl: 'iop' }), 'PIO très haute : nerf et cornée abîmés']
  ], {
    'Cataracte gonflée : elle pousse l’iris et ferme l’angle': 'Swollen cataract: it pushes the iris and closes the angle',
    'Protéines du cristallin : elles bouchent un angle ouvert': 'Lens proteins clog an open angle',
    'Cristallin luxé ou trauma : angle déplacé ou cicatriciel': 'Dislocated lens or trauma: shifted or scarred angle',
    'PIO très haute : nerf et cornée abîmés': 'Very high IOP: nerve and cornea damaged'
  });
  reg('g-dev', [
    [ant({ iris: 'flat', flow: 'normal', tmCover: true, iop: 0.35, hl: 'tm' }), 'Angle mal formé : un tissu recouvre le trabéculum'],
    [ant({ iris: 'flat', flow: 'reduced', tmCover: true, iop: 0.75, hl: 'iop' }), 'L’aqueuse sort mal : la PIO monte'],
    [globes(true, true), 'Globe élastique de l’enfant : il s’étire (buphtalmie)'],
    [cor({ thick: true, haze: true, descBreak: true, hl: 'desc', tags: [[26, 196, 'Descemet']] }), 'Descemet rompue (stries de Haab) : cornée œdémateuse']
  ], {
    'Angle mal formé : un tissu recouvre le trabéculum': 'Malformed angle: tissue covers the meshwork',
    'L’aqueuse sort mal : la PIO monte': 'Aqueous drains poorly: IOP rises',
    'Globe élastique de l’enfant : il s’étire (buphtalmie)': 'A child’s elastic globe stretches (buphthalmos)',
    'Descemet rompue (stries de Haab) : cornée œdémateuse': 'Broken Descemet (Haab striae): oedematous cornea'
  });

  /* ===== remaining cornea figures ===== */
  reg('c-secheresse', [
    [cor({ tears: true, hl: 'tears', tags: [[26, 38, 'Larmes']] }), 'Film lacrymal : lipides, eau et mucus couvrent l’épithélium'],
    [cor({ tears: true, tearsThin: true, evap: true, hl: 'evap' }), 'Glandes de Meibomius bouchées : les larmes s’évaporent'],
    [cor({ tears: true, tearsThin: true, wbc: [[150, 56], [196, 62], [232, 56]], hl: 'wbc' }), 'Larmes trop salées : la surface s’enflamme'],
    [cor({ tears: true, tearsThin: true, punct: true, hl: 'punct' }), 'Kératite ponctuée : points qui prennent la fluorescéine'],
    [cor({ tears: true, tearsThin: true, punct: true, nerves: true, hl: 'nerves' }), 'Nerfs irrités : brûlure et larmoiement réflexe']
  ], {
    'Larmes': 'Tears',
    'Film lacrymal : lipides, eau et mucus couvrent l’épithélium': 'Tear film: lipid, water and mucin cover the epithelium',
    'Glandes de Meibomius bouchées : les larmes s’évaporent': 'Blocked meibomian glands: tears evaporate',
    'Larmes trop salées : la surface s’enflamme': 'Over-salty tears: the surface becomes inflamed',
    'Kératite ponctuée : points qui prennent la fluorescéine': 'Punctate keratitis: dots that take up fluorescein',
    'Nerfs irrités : brûlure et larmoiement réflexe': 'Irritated nerves: burning and reflex tearing'
  });
  reg('c-atypiques', [
    [cor({ lens: true, defect: [170, 194], hl: 'defect', tags: [CORL.e] }), 'Microlésion : lentille, eau du robinet ou végétal'],
    [cor({ defect: [170, 194], bowmanGap: true, cysts: true, hyphae: true, hl: 'org', tags: [CORL.s] }), 'Amibe ou champignon : lent, résistant, il creuse'],
    [front({ radial: true, hl: 'radial' }), 'Amibe : elle longe les nerfs, douleur hors de proportion'],
    [front({ ringInf: true, satellite: true, hl: 'ringInf' }), 'Anneau ou lésions satellites : penser atypique'],
    [cor({ defect: [150, 210], bowmanGap: true, crater: PERF, ring: [180, 144, 10] }), 'Diagnostic tardif : ulcère profond, perforation']
  ], {
    'Microlésion : lentille, eau du robinet ou végétal': 'Micro-injury: contact lens, tap water or plant matter',
    'Amibe ou champignon : lent, résistant, il creuse': 'Amoeba or fungus: slow, resistant, it burrows',
    'Amibe : elle longe les nerfs, douleur hors de proportion': 'Amoeba follows the nerves: pain out of proportion',
    'Anneau ou lésions satellites : penser atypique': 'Ring or satellite lesions: think atypical',
    'Diagnostic tardif : ulcère profond, perforation': 'Late diagnosis: deep ulcer, perforation'
  });
  reg('c-keratocone', [
    [profile({ cone: 0, links: 'ok', rays: 'sharp' }), 'Collagène bien lié : cornée ferme, image nette'],
    [profile({ cone: 0.2, links: 'broken', rub: true }), 'Frottement et terrain : les liens du collagène lâchent'],
    [profile({ cone: 1, links: 'broken', hl: 'cone' }), 'Le stroma s’amincit et bombe en cône, vers le bas'],
    [profile({ cone: 1, links: 'broken', rays: 'blur' }), 'Astigmatisme irrégulier : image floue et déformée'],
    [profile({ cone: 0.8, links: 'cxl' }), 'Le crosslinking rigidifie le collagène et freine l’évolution']
  ], {
    'Collagène bien lié : cornée ferme, image nette': 'Well-linked collagen: firm cornea, sharp image',
    'Frottement et terrain : les liens du collagène lâchent': 'Rubbing and predisposition: collagen links give way',
    'Le stroma s’amincit et bombe en cône, vers le bas': 'The stroma thins and bulges into a cone, inferiorly',
    'Astigmatisme irrégulier : image floue et déformée': 'Irregular astigmatism: blurred, distorted image',
    'Le crosslinking rigidifie le collagène et freine l’évolution': 'Crosslinking stiffens collagen and slows progression'
  });
  reg('c-erosion', [
    [cor({ anchors: 'ok', hl: 'anchors', tags: [CORL.e] }), 'L’épithélium s’accroche à sa membrane basale'],
    [cor({ anchors: 'weak', hl: 'anchors', tags: [CORL.e] }), 'Ancrage faible : dystrophie ou ancienne égratignure'],
    [cor({ anchors: 'weak', lid: 'stuck', hl: 'lid' }), 'La nuit, l’épithélium colle à la paupière'],
    [cor({ anchors: 'weak', lid: 'lift', defect: [140, 220], hl: 'defect' }), 'Au réveil, la paupière l’arrache : douleur vive'],
    [cor({ anchors: 'weak' }) + Ar('M300,26 A16,12 0 1 1 268,26', 268, 26, 200, C, 2), 'Il repousse mal ancré : le cycle recommence']
  ], {
    'L’épithélium s’accroche à sa membrane basale': 'The epithelium anchors to its basement membrane',
    'Ancrage faible : dystrophie ou ancienne égratignure': 'Weak anchoring: dystrophy or an old scratch',
    'La nuit, l’épithélium colle à la paupière': 'At night, the epithelium sticks to the lid',
    'Au réveil, la paupière l’arrache : douleur vive': 'On waking, the lid tears it off: sharp pain',
    'Il repousse mal ancré : le cycle recommence': 'It regrows poorly anchored: the cycle repeats'
  });
  reg('c-pterygion', [
    [front({ sun: true, hl: 'limbN' }), 'UV, vent et poussière lèsent le limbe nasal'],
    [front({ wedge: 0.3, hl: 'wedge' }), 'Barrière du limbe ouverte : la conjonctive avance'],
    [front({ wedge: 0.65, hl: 'wedge' }), 'Aile fibrovasculaire qui envahit la cornée'],
    [front({ wedge: 1, hl: 'head' }), 'Elle tire la cornée : astigmatisme, puis axe visuel']
  ], {
    'UV, vent et poussière lèsent le limbe nasal': 'UV, wind and dust injure the nasal limbus',
    'Barrière du limbe ouverte : la conjonctive avance': 'Limbal barrier open: the conjunctiva advances',
    'Aile fibrovasculaire qui envahit la cornée': 'A fibrovascular wing invades the cornea',
    'Elle tire la cornée : astigmatisme, puis axe visuel': 'It pulls the cornea: astigmatism, then the visual axis'
  });
  reg('c-greffe', [
    [front({ graft: true, hl: 'graft' }), 'Greffon sans vaisseaux : privilège immunitaire'],
    [front({ graft: true, vessels: true, ingrowth: true, hl: 'ingrowth' }), 'Vaisseaux ou inflammation : le privilège se perd'],
    [front({ graft: true, ingrowth: true, kp: true, hl: 'kp' }), 'Attaque de l’endothélium : ligne de précipités'],
    [cor({ thick: true, sparse: true, leak: 3, pump: 1, haze: true, hl: 'thick', tags: [[26, 196, 'Greffon']] }), 'Endothélium détruit : le greffon gonfle et s’opacifie']
  ], {
    'Greffon sans vaisseaux : privilège immunitaire': 'An avascular graft: immune privilege',
    'Vaisseaux ou inflammation : le privilège se perd': 'Vessels or inflammation: privilege is lost',
    'Attaque de l’endothélium : ligne de précipités': 'Endothelial attack: a line of precipitates',
    'Endothélium détruit : le greffon gonfle et s’opacifie': 'Endothelium destroyed: the graft swells and clouds'
  });
  reg('c-brulure', [
    [cor({ penetrate: true, hl: 'pen', tags: [CORL.s] }), 'Base : elle dissout les membranes et pénètre en profondeur'],
    [front({ limbal: true, isch: true, hl: 'isch' }), 'Limbe blanc : vaisseaux thrombosés, cellules souches détruites'],
    [cor({ defect: [40, 320], wbc: [[90, 90], [130, 100], [230, 96], [270, 88]], crater: CRATER, hl: 'crater' }), 'Neutrophiles et collagénases : le stroma fond'],
    [front({ limbal: true, conjVess: true, hl: 'conjVess' }), 'Sans cellules souches, la conjonctive recouvre la cornée'],
    [front({ irrig: true, hl: 'irrig' }), 'Irriguer tout de suite, jusqu’au pH neutre']
  ], {
    'Base : elle dissout les membranes et pénètre en profondeur': 'Alkali dissolves membranes and penetrates deep',
    'Limbe blanc : vaisseaux thrombosés, cellules souches détruites': 'White limbus: thrombosed vessels, stem cells destroyed',
    'Neutrophiles et collagénases : le stroma fond': 'Neutrophils and collagenases: the stroma melts',
    'Sans cellules souches, la conjonctive recouvre la cornée': 'Without stem cells, conjunctiva covers the cornea',
    'Irriguer tout de suite, jusqu’au pH neutre': 'Irrigate at once, until the pH is neutral'
  });
  reg('c-dystrophies', [
    [cor({ granular: true, hl: 'gran', tags: [CORL.s] }), 'Mutation héréditaire : une substance s’accumule dans une couche'],
    [cor({ mapdot: true, granular: true, guttae: true, hl: 'layers', tags: [CORL.e, CORL.s, CORL.n] }), 'Chaque dystrophie a sa couche : épithélium, stroma, endothélium'],
    [front({ cx: 92, k: 0.5, dots: true, hl: 'dots' }) + front({ cx: 268, k: 0.5, dots: true, hl: 'dots' }), 'Deux yeux, opacités symétriques, sans vaisseaux'],
    [cor({ granular: true, defect: [150, 210], hl: 'defect' }), 'Surface fragilisée : érosions récidivantes']
  ], {
    'Mutation héréditaire : une substance s’accumule dans une couche': 'Inherited mutation: a substance builds up in one layer',
    'Chaque dystrophie a sa couche : épithélium, stroma, endothélium': 'Each dystrophy has its layer: epithelium, stroma, endothelium',
    'Deux yeux, opacités symétriques, sans vaisseaux': 'Both eyes, symmetric opacities, no vessels',
    'Surface fragilisée : érosions récidivantes': 'Fragile surface: recurrent erosions'
  });
  reg('c-depots', [
    [front({ arcus: true, hl: 'arcus' }), 'Arc sénile : lipides en périphérie, bande claire au limbe'],
    [front({ kf: true, hl: 'kf' }), 'Anneau de Kayser-Fleischer : cuivre dans Descemet (Wilson)'],
    [front({ whorl: true, hl: 'whorl' }), 'Cornée verticillée : tourbillon (amiodarone, Fabry)'],
    [front({ band: true, hl: 'band' }), 'Kératopathie en bandelette : calcium dans la couche de Bowman']
  ], {
    'Arc sénile : lipides en périphérie, bande claire au limbe': 'Arcus: peripheral lipid, clear band at the limbus',
    'Anneau de Kayser-Fleischer : cuivre dans Descemet (Wilson)': 'Kayser-Fleischer ring: copper in Descemet (Wilson)',
    'Cornée verticillée : tourbillon (amiodarone, Fabry)': 'Cornea verticillata: whorl (amiodarone, Fabry)',
    'Kératopathie en bandelette : calcium dans la couche de Bowman': 'Band keratopathy: calcium in Bowman layer'
  });
  reg('c-surface', [
    [front({ allergen: true, hl: 'allergen' }), 'Agression : allergène, virus, bactérie ou auto-immunité'],
    [front({ vessels: true, conjInj: true, hl: 'vessels' }), 'Réponse immune : conjonctive rouge, follicules ou papilles'],
    [front({ vessels: true, conjInj: true, punctF: true, hl: 'limbus' }), 'Le limbe et la cornée sont touchés : vision menacée'],
    [front({ vessels: true, conjVess: true, symbl: true, hl: 'symbl' }), 'Cicatrices : symblépharon, cornée vascularisée']
  ], {
    'Agression : allergène, virus, bactérie ou auto-immunité': 'Insult: allergen, virus, bacteria or autoimmunity',
    'Réponse immune : conjonctive rouge, follicules ou papilles': 'Immune response: red conjunctiva, follicles or papillae',
    'Le limbe et la cornée sont touchés : vision menacée': 'Limbus and cornea involved: vision at risk',
    'Cicatrices : symblépharon, cornée vascularisée': 'Scarring: symblepharon, vascularised cornea'
  });
  var EDGEC = 'M24,74 Q30,112 56,116 Q76,110 80,74 Z', EDGEP = 'M24,74 Q28,138 50,142 Q70,136 76,74 Z';
  reg('c-peripherie', [
    [front({ limbal: true, ic: true, hl: 'ic' }), 'Vasculite : complexes immuns déposés au limbe'],
    [cor({ vessel: true, wbc: [[60, 94], [84, 100], [104, 92]], crater: EDGEC, hl: 'crater' }), 'Neutrophiles et collagénases dissolvent le stroma périphérique'],
    [front({ crescent: true, hl: 'crescent' }), 'Ulcère en croissant, collé au limbe'],
    [cor({ vessel: true, crater: EDGEP, ring: [50, 144, 10] }), 'Descémétocèle, puis perforation : urgence']
  ], {
    'Vasculite : complexes immuns déposés au limbe': 'Vasculitis: immune complexes deposit at the limbus',
    'Neutrophiles et collagénases dissolvent le stroma périphérique': 'Neutrophils and collagenases dissolve the peripheral stroma',
    'Ulcère en croissant, collé au limbe': 'A crescent ulcer hugging the limbus',
    'Descémétocèle, puis perforation : urgence': 'Descemetocele, then perforation: an emergency'
  });

  /* ---------- small static figures for screens that had none (capsules B0/C0, module A) ---------- */
  function box(x, y, w, h, label, hl, sub) { return R(x, y, w, h, hl ? FL : SURF, hl ? EDGE : C, 1.4, 8) + T(x + w / 2, y + h / 2 + (sub ? -2 : 4), label, 'middle', 'lbl-sm lbl-b') + (sub ? T(x + w / 2, y + h / 2 + 12, sub, 'middle') : ''); }
  var CAP = {
    'b-familles': function () { // families of corneal disease mapped onto the layers
      var s = cor({ tags: [] });
      [[300, 61, 'Surface, sécheresse'], [300, 100, 'Infection, cicatrice'], [300, 128, 'Dystrophie, ectasie'], [300, 156, 'Œdème, Fuchs, greffe']].forEach(function (t, i) { s += O(t[0], t[1] - 4, 9, i === 1 ? FL : C, i === 1 ? EDGE : null, 1) + T(t[0], t[1], String(i + 1), 'middle', 'lbl-sm lbl-b' + (i === 1 ? '' : ' lbl-white')); });
      return s + Tb(26, 190, '1 Surface · 2 Infection · 3 Stroma · 4 Endothélium', 'start');
    },
    'qc-path': function () { // where a Quebec patient goes
      var s = box(8, 70, 76, 46, 'Patient') + box(102, 22, 92, 46, 'Urgence', false, 'ou omni') + box(102, 118, 92, 46, 'Optométriste') + box(222, 70, 128, 46, 'Ophtalmologiste', true, 'de garde ou clinique');
      s += arL(84, 86, 100, 54, C, 2) + arL(84, 100, 100, 136, C, 2) + arL(194, 46, 220, 82, C, 2) + arL(194, 140, 220, 106, C, 2);
      return s + T(180, 194, 'Appeler avant de transférer ; noter le délai voulu', 'middle');
    },
    'b-outils': function () { return stairs(['Lubrifier', 'Traiter la cause', 'Calmer (stéroïde surveillé)', 'Réparer, greffer'], 1); },
    'c-outils': function () { return stairs(['Gouttes', 'Laser (SLT)', 'MIGS', 'Trabéculectomie, tube'], 0); },
    'pio': function () { // production vs outflow balance with the normal band
      var s = box(8, 30, 132, 46, 'Production', false, 'procès ciliaires') + box(8, 120, 132, 46, 'Sortie', true, 'trabéculum, uvéosclérale');
      s += P('M150,40 L150,170', 'none', I3, 1.2) + R(176, 30, 30, 140, SURF, I3, 1.2, 6) + R(178, 90, 26, 56, CW, null, 0, 4);
      [[10, 146], [21, 90], [30, 58]].forEach(function (v) { s += Ln(206, v[1], 214, v[1], I3, 1.2) + T(218, v[1] + 4, v[0] + ' mmHg', 'start'); });
      s += R(180, 70, 22, 4, FL, EDGE, 1, 2) + arL(140, 53, 172, 70, C, 2) + arL(172, 74, 140, 143, C, 2, '4 3');
      return s + T(191, 188, 'normale 10–21', 'middle') + T(312, 112, 'Sortie freinée', 'middle', 'lbl-sm lbl-b') + T(312, 128, '→ PIO ↑', 'middle');
    },
    'pupille': function () { // light reflex: afferent II, both efferent III
      var s = front({ cx: 60, cy: 64, k: 0.28, pupil: 20 }) + front({ cx: 60, cy: 150, k: 0.28, pupil: 20 });
      s += box(200, 86, 96, 42, 'Mésencéphale', false, 'prétectum, EW');
      s += flP('M102,64 C150,64 170,92 198,100', 3) + T(150, 56, 'Afférent : nerf II', 'middle', 'lbl-sm lbl-b');
      s += Ar('M200,118 C160,140 130,150 104,150', 104, 150, 180, C, 2.2) + Ar('M200,112 C170,96 140,78 104,70', 104, 70, 190, C, 2.2, '5 4') + T(150, 176, 'Efférent : nerf III, deux yeux', 'middle');
      return s + T(320, 40, 'Lumière', 'end') + arL(330, 46, 104, 60, I3, 1.2, '2 4');
    },
    'av': function () { // Snellen chart and pinhole
      var s = R(20, 14, 150, 176, SURF, I3, 1.2, 6), rows = [['E', 30, 44], ['F P', 20, 76], ['T O Z', 14, 102], ['L P E D', 10, 124], ['P E C F D', 7.5, 142]];
      rows.forEach(function (r) { s += '<text x="95" y="' + r[2] + '" text-anchor="middle" font-size="' + r[1] + '" font-weight="700" fill="var(--ink)" font-family="var(--font-mono)">' + r[0] + '</text>'; });
      s += R(28, 150, 134, 16, FL, EDGE, 1, 3) + T(95, 162, '6/9 : ligne lue', 'middle', 'lbl-sm lbl-b');
      s += O(262, 86, 40, I2) + O(262, 86, 6, SURF, EDGE, 1.2) + T(262, 146, 'Trou sténopéique', 'middle', 'lbl-sm lbl-b') + T(262, 162, 'mieux = cause optique', 'middle');
      return s;
    }
  };
  function stairs(labels, hlIdx) {
    var s = '';
    labels.forEach(function (l, i) { var x = 14 + i * 84, y = 150 - i * 34; s += R(x, y, 84, 196 - y, i === hlIdx ? FL : (i % 2 ? CW : SURF), i === hlIdx ? EDGE : C, 1.2, 4) + T(x + 6, y + 16, String(i + 1), 'start', 'lbl-sm lbl-b'); s += '<foreignObject x="' + (x + 2) + '" y="' + (y + 20) + '" width="80" height="40"><div xmlns="http://www.w3.org/1999/xhtml" class="mech-fo">' + esc(fx0(l)) + '</div></foreignObject>'; });
    return s + arL(30, 40, 300, 12, C, 2, '5 4');
  }
  addEN({ 'Surface, sécheresse': 'Surface, dry eye', 'Infection, cicatrice': 'Infection, scar', 'Dystrophie, ectasie': 'Dystrophy, ectasia', 'Œdème, Fuchs, greffe': 'Oedema, Fuchs, graft',
    '1 Surface · 2 Infection · 3 Stroma · 4 Endothélium': '1 Surface · 2 Infection · 3 Stroma · 4 Endothelium', 'Patient': 'Patient', 'Urgence': 'ER', 'ou omni': 'or GP', 'Optométriste': 'Optometrist', 'Ophtalmologiste': 'Ophthalmologist', 'de garde ou clinique': 'on call or clinic',
    'Appeler avant de transférer ; noter le délai voulu': 'Call before transferring; state the timeframe', 'Lubrifier': 'Lubricate', 'Traiter la cause': 'Treat the cause', 'Calmer (stéroïde surveillé)': 'Calm (monitored steroid)', 'Réparer, greffer': 'Repair, graft',
    'Gouttes': 'Drops', 'Laser (SLT)': 'Laser (SLT)', 'MIGS': 'MIGS', 'Trabéculectomie, tube': 'Trabeculectomy, tube', 'Production': 'Production', 'procès ciliaires': 'ciliary processes', 'Sortie': 'Outflow', 'trabéculum, uvéosclérale': 'meshwork, uveoscleral',
    'normale 10–21': 'normal 10–21', 'Sortie freinée': 'Slowed outflow', '→ PIO ↑': '→ IOP ↑', 'Mésencéphale': 'Midbrain', 'prétectum, EW': 'pretectum, EW', 'Afférent : nerf II': 'Afferent: CN II', 'Efférent : nerf III, deux yeux': 'Efferent: CN III, both eyes', 'Lumière': 'Light',
    '6/9 : ligne lue': '6/9: line read', 'Trou sténopéique': 'Pinhole', 'mieux = cause optique': 'better = optical cause',
    'Les familles de maladies, couche par couche': 'Disease families, layer by layer', 'Le parcours du patient au Québec': 'The patient’s path in Quebec', 'L’escalier thérapeutique': 'The treatment ladder', 'La PIO : un équilibre entre production et sortie': 'IOP: a balance of production and outflow',
    'Le réflexe photomoteur : un afférent, deux efférents': 'The light reflex: one afferent, two efferents', 'Mesurer l’acuité, puis le trou sténopéique': 'Measure acuity, then the pinhole' });
  var CAPCAP = { 'b-familles': 'Les familles de maladies, couche par couche', 'qc-path': 'Le parcours du patient au Québec', 'b-outils': 'L’escalier thérapeutique', 'c-outils': 'L’escalier thérapeutique', pio: 'La PIO : un équilibre entre production et sortie', pupille: 'Le réflexe photomoteur : un afférent, deux efférents', av: 'Mesurer l’acuité, puis le trou sténopéique' };
  if (W.Figures) Figures.mechcap = function (fig) { var f = CAP[fig.id]; return { svg: f ? svg(f(), fx0(CAPCAP[fig.id] || '')) : '', cap: fx0(CAPCAP[fig.id] || '') }; };
  // module A: screens without a figure get a static schematic through the sims hook (views.js PHYSIO_SIM / acuity)
  if (W.Sims && Sims.defs) {
    ['pio', 'pupille'].forEach(function (k) { Sims.defs['mfig-' + k] = function (el) { el.innerHTML = Figures.render({ type: 'mechcap', id: k }, { nozoom: true }); }; });
    var acu = Sims.defs.acuity;
    if (acu && !acu._mech) { Sims.defs.acuity = function (el) { var d = document.createElement('div'); d.className = 'mech-pre'; d.innerHTML = Figures.render({ type: 'mechcap', id: 'av' }, { nozoom: true }); if (el.parentNode) el.parentNode.insertBefore(d, el); return acu(el); }; Sims.defs.acuity._mech = 1; }
  }
  // views.js declares PHYSIO_SIM after this file: catch its assignment and add the two figure screens
  function patchPS(v) { if (v && typeof v === 'object') { if (!v.pio) v.pio = 'mfig-pio'; if (!v.pupille) v.pupille = 'mfig-pupille'; } return v; }
  if (typeof PHYSIO_SIM !== 'undefined') patchPS(PHYSIO_SIM);
  else try { var psv; Object.defineProperty(W, 'PHYSIO_SIM', { configurable: true, enumerable: true, get: function () { return psv; }, set: function (v) { psv = patchPS(v); } }); } catch (e) { }

  /* ---------- rendering + learner-paced stepping ---------- */
  /* opts.sub: optional HTML caption per step (e.g. the causal-chain detail mapped onto this step), shown with its step */
  function html(id, opts) {
    var m = G.OPH.mech[id]; if (!m || !m.steps || !m.steps.length) return '';
    var n = m.steps.length, sub = (opts && opts.sub) || [];
    return '<figure class="fig mech" data-mech="' + esc(id) + '" data-i="0" style="margin:0">' +
      '<div class="mech-stage" role="button" tabindex="0" data-mech-next aria-label="' + esc(fx0('Mécanisme dessiné, étape {i} sur {n}. Touche pour avancer.').replace('{i}', 1).replace('{n}', n)) + '">' +
      m.steps.map(function (s, i) { return '<div class="mech-s" data-s="' + i + '"' + (i ? ' hidden' : '') + '>' + s.svg + '</div>'; }).join('') + '</div>' +
      '<figcaption class="mech-cap"><p class="mech-lab" aria-live="polite"><span class="mech-n">1/' + n + '</span> <span data-mech-lab>' + esc(fx0(m.steps[0].label)) + '</span></p>' +
      (sub.length ? m.steps.map(function (_, i) { return sub[i] ? '<p class="mech-sub small" data-sub="' + i + '"' + (i ? ' hidden' : '') + '>' + sub[i] + '</p>' : ''; }).join('') : '') +
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
    Array.prototype.forEach.call(fig.querySelectorAll('[data-sub]'), function (el) { el.hidden = +el.getAttribute('data-sub') !== i; });
    try { fig.dispatchEvent(new CustomEvent('mech:step', { bubbles: true, detail: { i: i, n: n } })); } catch (e) { }
  }
  function advance(el) { var fig = el.closest('[data-mech]'); if (fig) go(fig, (+fig.getAttribute('data-i') || 0) + 1); }
  if (typeof document !== 'undefined') {
    document.addEventListener('click', function (ev) { var t = ev.target && ev.target.closest ? ev.target.closest('[data-mech-next]') : null; if (t) advance(t); });
    document.addEventListener('keydown', function (ev) { var t = ev.target; if (t && t.classList && t.classList.contains('mech-stage') && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); advance(t); } });
  }
  return { html: html, go: go, ids: function () { return Object.keys(G.OPH.mech); }, kit: { ant: ant, cor: cor, onhCut: onhCut, disc: disc, front: front, nerve: nerve, profile: profile, retina: retina, svg: svg } };
})();
