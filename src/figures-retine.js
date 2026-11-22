/* ===== Retina mechanism figures (module D) — drawn SVG, learner-paced, same registry and look as src/figures-mech.js =====
   Registry: OPH.mech[ficheId] = { steps: [{ svg, label }] } — rendered and stepped by Mech.html / Mech.go (figures-mech.js).
   Palette: identity tokens (cobalt, ink, paper/surface/sunk); semantic red only for blood; fluo = the decisive element of each step.
   Original schematics, labelled « Schéma » by Mech.html. Kits: globe (sagittal eye + patient's view), fundus (en face), layers (outer retina). */
(function () {
  'use strict';
  var W = typeof window !== 'undefined' ? window : globalThis;
  W.OPH = W.OPH || {}; W.OPH.mech = W.OPH.mech || {};
  function fx0(s) { return W.fx ? W.fx(s) : s; }
  function addEN(map) { try { if (W.I18N && I18N.fx) Object.keys(map).forEach(function (k) { if (I18N.fx[k] == null) I18N.fx[k] = map[k]; }); } catch (e) { } }

  addEN({ 'Macula': 'Macula', 'Ce que voit le patient': 'What the patient sees', 'Papille': 'Disc', 'Fovéa': 'Fovea', 'Carotide : plaque': 'Carotid: plaque', 'vers l’œil': 'to the eye',
    'Même source : AVC': 'Same source: stroke', 'VS, CRP': 'ESR, CRP', 'plaquettes': 'platelets', 'Artérite temporale ?': 'Temporal arteritis?', 'Croisement artère-veine': 'Artery–vein crossing',
    'Veine': 'Vein', 'Artère': 'Artery', 'OCT : macula épaissie': 'OCT: thickened macula', 'OCT : fovéa normale': 'OCT: normal fovea', 'Rétine interne': 'Inner retina', 'Photorécepteurs': 'Photoreceptors',
    'Membrane de Bruch': 'Bruch’s membrane', 'Choroïde': 'Choroid', 'Grille d’Amsler': 'Amsler grid' });

  /* ---------- tokens and primitives (same conventions as figures-mech.js) ---------- */
  var C = 'var(--cobalt)', CW = 'var(--cobalt-wash)', INK = 'var(--ink)', I2 = 'var(--ink-2)', I3 = 'var(--ink-3)', SUNK = 'var(--sunk)', SURF = 'var(--surface)', LN = 'var(--line)', FL = 'var(--fluo)', EDGE = 'var(--edge)', RED = 'var(--urgent)', HY = 'var(--hy)';
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function n1(v) { return Math.round(v * 10) / 10; }
  function at(o) { var s = ''; for (var k in o) if (o[k] != null && o[k] !== false) s += ' ' + k + '="' + o[k] + '"'; return s; }
  function P(d, fill, stroke, sw, x) { return '<path d="' + d + '"' + at({ fill: fill || 'none', stroke: stroke, 'stroke-width': stroke ? (sw || 1.5) : null }) + (x || '') + '/>'; }
  function O(cx, cy, r, fill, stroke, sw, x) { return '<circle' + at({ cx: n1(cx), cy: n1(cy), r: r, fill: fill || 'none', stroke: stroke, 'stroke-width': stroke ? (sw || 1.5) : null }) + (x || '') + '/>'; }
  function E(cx, cy, rx, ry, fill, stroke, sw, x) { return '<ellipse' + at({ cx: n1(cx), cy: n1(cy), rx: rx, ry: ry, fill: fill || 'none', stroke: stroke, 'stroke-width': stroke ? (sw || 1.5) : null }) + (x || '') + '/>'; }
  function R(x, y, w, h, fill, stroke, sw, rx, xx) { return '<rect' + at({ x: n1(x), y: n1(y), width: n1(w), height: n1(h), rx: rx, fill: fill || 'none', stroke: stroke, 'stroke-width': stroke ? (sw || 1.5) : null }) + (xx || '') + '/>'; }
  function Ln(x1, y1, x2, y2, stroke, sw, x) { return '<line' + at({ x1: n1(x1), y1: n1(y1), x2: n1(x2), y2: n1(y2), stroke: stroke || I3, 'stroke-width': sw || 1.5, 'stroke-linecap': 'round' }) + (x || '') + '/>'; }
  function T(x, y, s, anchor, cls) { return '<text class="' + (cls || 'lbl-sm') + '" x="' + n1(x) + '" y="' + n1(y) + '" text-anchor="' + (anchor || 'middle') + '">' + esc(fx0(s)) + '</text>'; }
  function Tb(x, y, s, anchor) { var t = fx0(s), w = t.length * 5.6 + 8, x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w + 4 : x - 4; return R(x0, y - 11, w, 15, SURF, null, 0, 3, ' fill-opacity=".9"') + T(x, y, s, anchor || 'start'); }
  function head(x, y, ang, col, sz) { sz = sz || 7; var a = ang * Math.PI / 180, b = 0.5; var p1 = [x - sz * Math.cos(a - b), y - sz * Math.sin(a - b)], p2 = [x - sz * Math.cos(a + b), y - sz * Math.sin(a + b)]; return '<path d="M' + n1(x) + ',' + n1(y) + ' L' + n1(p1[0]) + ',' + n1(p1[1]) + ' L' + n1(p2[0]) + ',' + n1(p2[1]) + ' Z" fill="' + (col || C) + '"/>'; }
  function Ar(d, x, y, ang, col, sw, dash) { return P(d, 'none', col || C, sw || 2, ' stroke-linecap="round"' + (dash ? ' stroke-dasharray="' + dash + '"' : '')) + head(x, y, ang, col || C, (sw || 2) * 3.4); }
  function arL(x1, y1, x2, y2, col, sw, dash) { return Ar('M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2, x2, y2, Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI, col, sw, dash); }
  function flP(d, sw) { return P(d, 'none', EDGE, (sw || 3) + 3, ' stroke-linecap="round" stroke-linejoin="round"') + P(d, 'none', FL, sw || 3, ' stroke-linecap="round" stroke-linejoin="round"'); }
  function flO(cx, cy, r) { return O(cx, cy, r, 'none', EDGE, 5.5) + O(cx, cy, r, 'none', FL, 3); }
  function svg(inner, label) { return '<svg viewBox="0 0 360 200" role="img" aria-label="' + esc(label) + '" focusable="false">' + inner + '</svg>'; }
  function pol(cx, cy, r, deg) { var a = deg * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
  function pt(p) { return n1(p[0]) + ',' + n1(p[1]); }

  /* ---------- kit R1: eye in sagittal section (cornea left, optic nerve right) + what the patient sees ---------- */
  var GX = 132, GY = 100, GR = 80, RR = 74; // globe centre, sclera radius, retina radius
  function arcPath(r, a0, a1, bulge, h) { // polyline along the retina from angle a0 to a1; bulge pulls it inward by up to h px
    var d = '', n = 28;
    for (var i = 0; i <= n; i++) { var a = a0 + (a1 - a0) * i / n, rr = r - (bulge ? h * Math.sin(Math.PI * i / n) : 0); d += (i ? ' L' : 'M') + pt(pol(GX, GY, rr, a)); }
    return d;
  }
  function globe(o) {
    o = o || {}; var s = '';
    s += O(GX, GY, GR, SURF, I3, 1.6); // sclera
    s += O(GX, GY, RR - 2, CW, null, 0, ' fill-opacity="' + (o.pvd ? '.35' : '.8') + '"'); // vitreous gel
    if (o.pvd) { var g = arcPath(RR - 18, -118, 118, false); s += P(g + ' Q80,100 ' + pt(pol(GX, GY, RR - 18, -118)) + ' Z', CW, null, 0, ' fill-opacity=".9"') + P(g, 'none', C, 1.4, ' stroke-dasharray="5 4"'); } // shrunken gel, posterior hyaloid
    s += P('M62,64 Q34,100 62,136', 'none', C, 2.6, ' stroke-linecap="round"'); // cornea
    s += E(74, 100, 8, 22, SURF, C, 1.4); // lens
    s += Ln(64, 74, 70, 82, I2, 2.4) + Ln(64, 126, 70, 118, I2, 2.4); // iris
    s += P('M' + pt(pol(GX, GY, GR, 8)) + ' L250,108 L250,128 L' + pt(pol(GX, GY, GR, 20)), SUNK, I3, 1.2); // optic nerve
    var a0 = -128, a1 = 128, det = o.rd ? o.rd : null; // retina, attached or not
    if (det) {
      s += P(arcPath(RR, a0, det[0], false), 'none', INK, 2.2) + P(arcPath(RR, det[1], a1, false), 'none', INK, 2.2);
      var fluid = arcPath(RR, det[0], det[1], false) + ' L' + arcPath(RR, det[1], det[0], true, det[2]).slice(1) + ' Z';
      s += P(fluid, o.hl === 'fluid' ? FL : 'var(--frequent-wash)', o.hl === 'fluid' ? EDGE : null, 1);
      s += o.hl === 'rd' ? flP(arcPath(RR, det[0], det[1], true, det[2]), 3) : P(arcPath(RR, det[0], det[1], true, det[2]), 'none', INK, 2.2);
    } else s += P(arcPath(RR, a0, a1, false), 'none', INK, 2.2);
    var mac = pol(GX, GY, RR - (o.macOff ? 14 : 0), 0); // macula at the posterior pole
    s += O(mac[0], mac[1], 3, INK) + (o.hl === 'mac' ? flO(mac[0], mac[1], 9) : '');
    s += Tb(mac[0] - 2, mac[1] - 12, 'Macula', 'end');
    if (o.tear) { // horseshoe tear at the superior periphery, flap pulled inward by the vitreous
      var t0 = pol(GX, GY, RR, -102), t1 = pol(GX, GY, RR, -88), tip = pol(GX, GY, RR - 16, -96);
      var d = 'M' + pt(t0) + ' Q' + pt(pol(GX, GY, RR - 6, -104)) + ' ' + pt(tip) + ' Q' + pt(pol(GX, GY, RR - 6, -86)) + ' ' + pt(t1);
      s += o.hl === 'tear' ? flP(d, 3) : P(d, 'none', INK, 2.2);
      if (o.pvd) s += P('M' + pt(tip) + ' L' + pt(pol(GX, GY, RR - 18, -96)), 'none', C, 1.4, ' stroke-dasharray="3 3"');
      if (o.pull) s += arL(tip[0] + 2, tip[1] + 6, tip[0] + 10, tip[1] + 26, C, 2);
      if (o.inflow) s += Ar('M' + n1(tip[0] + 18) + ',' + n1(tip[1] + 18) + ' Q' + n1(t1[0] + 12) + ',' + n1(t1[1] + 4) + ' ' + n1(t1[0] + 16) + ',' + n1(t1[1] - 2), t1[0] + 16, t1[1] - 2, -20, C, 2);
      if (o.laser) for (var k = 0; k < 7; k++) { var lp = pol(GX, GY, RR + 1, -112 + k * 5.5); s += O(lp[0], lp[1], 2.6, o.hl === 'laser' ? FL : INK, o.hl === 'laser' ? EDGE : null, 1); }
    }
    if (o.view) s += view(o.view, o.hl === 'view');
    return s;
  }
  function view(v, hl) { // what the patient sees (right eye, field circle): flashes, floaters, curtain, central loss
    var cx = 304, cy = 96, r = 44, s = O(cx, cy, r, SURF, hl ? EDGE : I3, hl ? 2 : 1.4);
    if (v.curtain != null) { // shadow rising from below = detachment above
      var yc = cy + r - v.curtain * 2 * r, dy = yc - cy, dx = Math.sqrt(Math.max(0, r * r - dy * dy));
      s += P('M' + n1(cx - dx) + ',' + n1(yc) + ' A' + r + ',' + r + ' 0 ' + (yc < cy ? 1 : 0) + ' 0 ' + n1(cx + dx) + ',' + n1(yc) + ' Z', INK, hl ? FL : null, hl ? 3 : 0, ' fill-opacity=".72"');
    }
    if (v.central) s += O(cx, cy, 13, INK, hl ? FL : null, hl ? 3 : 0, ' fill-opacity=".6"');
    if (v.flash) s += flP('M' + (cx + 22) + ',' + (cy - 30) + ' l-8,10 l8,2 l-8,12', 2.4);
    if (v.floaters) [[-14, -10], [6, -18], [-4, 8], [14, 2]].forEach(function (q, i) { s += P('M' + (cx + q[0]) + ',' + (cy + q[1]) + ' q4,' + (i % 2 ? 4 : -4) + ' 8,0 t8,0', 'none', INK, 1.8, ' stroke-linecap="round"'); });
    return s + T(cx, cy + r + 15, 'Ce que voit le patient', 'middle');
  }

  /* ---------- kit R2: fundus en face (disc left, macula centre) ---------- */
  var FX = 118, FY = 100, FR = 86, DX = 64, DY = 100, MX = 128, MY = 102;
  function vessels(o) {
    var s = '', nar = o.narrow ? 1.1 : 1.7, art = o.artCol || RED, vn = o.veinCol || C, vw = o.dilate ? 3.6 : 2.6;
    // arcades: superior / inferior temporal artery (thin, red) and vein (thicker, cobalt), plus nasal branches
    var arc = function (sy, k) { return 'M' + DX + ',' + (DY + sy * 4) + ' C' + (DX + 26) + ',' + (DY + sy * (40 + k)) + ' ' + (DX + 92) + ',' + (DY + sy * (52 + k)) + ' ' + (DX + 134) + ',' + (DY + sy * (40 + k)); };
    var nas = function (sy, k) { return 'M' + DX + ',' + (DY + sy * 4) + ' C' + (DX - 14) + ',' + (DY + sy * (28 + k)) + ' ' + (DX - 30) + ',' + (DY + sy * (46 + k)) + ' ' + (DX - 36) + ',' + (DY + sy * (66 + k)); };
    [-1, 1].forEach(function (sy) {
      var vd = arc(sy, 6); if (o.tortuous && (o.tortuous === 'all' || (o.tortuous === 'inf' && sy > 0))) vd = 'M' + DX + ',' + (DY + sy * 4) + ' C' + (DX + 18) + ',' + (DY + sy * 44) + ' ' + (DX + 40) + ',' + (DY + sy * 30) + ' ' + (DX + 60) + ',' + (DY + sy * 56) + ' S' + (DX + 104) + ',' + (DY + sy * 44) + ' ' + (DX + 134) + ',' + (DY + sy * 50);
      s += P(vd, 'none', vn, vw, ' stroke-linecap="round"') + P(nas(sy, 4), 'none', vn, vw - 0.6, ' stroke-linecap="round"');
      s += P(arc(sy, -6), 'none', art, nar, ' stroke-linecap="round"') + P(nas(sy, -6), 'none', art, nar - 0.2, ' stroke-linecap="round"');
      s += P('M' + (DX + 70) + ',' + (DY + sy * 46) + ' Q' + (DX + 80) + ',' + (DY + sy * 22) + ' ' + (DX + 92) + ',' + (DY + sy * 12), 'none', art, nar - 0.4, ' stroke-linecap="round"');
    });
    return s;
  }
  function fundus(o) {
    o = o || {}; var s = '';
    s += '<defs><clipPath id="oph-fclip"><circle cx="' + FX + '" cy="' + FY + '" r="' + (FR - 1) + '"/></clipPath></defs>';
    s += O(FX, FY, FR, CW, C, 1.2) + '<g clip-path="url(#oph-fclip)">';
    if (o.pale) s += O(FX, FY, FR - 1, SURF, null, 0, ' fill-opacity=".72"'); // whitened (oedematous) inner retina
    if (o.sector) s += P('M' + DX + ',' + (DY + 6) + ' L' + (FX + 80) + ',' + (FY + 30) + ' A' + FR + ',' + FR + ' 0 0 1 ' + (DX + 6) + ',' + (FY + FR - 2) + ' Z', 'var(--urgent-wash)', null, 0, ' fill-opacity=".9"');
    if (o.ischemia) s += E(FX + 44, FY - 44, 26, 18, SUNK, I3, 1, ' stroke-dasharray="3 3"');
    // macula / fovea
    s += O(MX, MY, 14, 'none', I3, 1, ' stroke-dasharray="2 3"');
    if (o.cherry) s += O(MX, MY, 6, RED) + (o.hl === 'cherry' ? flO(MX, MY, 12) : '');
    else s += O(MX, MY, 2.6, I2);
    s += vessels(o);
    // disc
    s += O(DX, DY, o.swell ? 15 : 11, SURF, o.swell ? (o.hl === 'disc' ? EDGE : I2) : I3, o.swell ? 2.4 : 1.4) + (o.swell ? O(DX, DY, 15, 'none', I3, 1, ' stroke-dasharray="2 2"') : '') + O(DX + 2, DY, 4, SUNK);
    if (o.swell && o.hl === 'disc') s += flO(DX, DY, 20);
    if (o.embolus) s += R(DX + 15, DY - 13, 6, 4, o.hl === 'emb' ? FL : HY, o.hl === 'emb' ? EDGE : INK, 1, 1) + (o.hl === 'emb' ? flO(DX + 18, DY - 11, 9) : '');
    if (o.ma) [[150, 70], [160, 128], [100, 136], [176, 92], [140, 150], [104, 62], [186, 118]].forEach(function (p) { s += O(p[0], p[1], 2.2, RED, o.hl === 'ma' ? EDGE : null, 1); });
    if (o.ma && o.hl === 'ma') s += flO(160, 128, 8) + flO(176, 92, 8);
    if (o.hem) (o.hem === 'sector' ? [[100, 132, 30], [124, 146, 40], [92, 150, 60], [140, 132, 20], [112, 164, 50], [150, 156, 34]] : o.hem === 'all' ? [[86, 60, -30], [120, 56, -10], [150, 72, 10], [92, 142, 40], [124, 148, 20], [160, 132, -20], [40, 74, -60], [44, 128, 60], [178, 100, 0]] : [[150, 68, 20], [90, 140, 40], [170, 126, -30], [46, 80, -50]]).forEach(function (h) {
      s += '<g transform="rotate(' + h[2] + ' ' + h[0] + ' ' + h[1] + ')">' + E(h[0], h[1], o.hem === 'all' ? 7 : 6, 2.4, RED, o.hl === 'hem' ? EDGE : null, 0.8) + '</g>';
    });
    if (o.cws) [[96, 70], [150, 136], [176, 80]].forEach(function (p, i) { s += P('M' + (p[0] - 6) + ',' + p[1] + ' q2,-6 7,-4 q6,-2 6,4 q2,5 -5,5 q-6,2 -8,-5 Z', SURF, o.hl === 'cws' ? EDGE : I3, o.hl === 'cws' ? 1.6 : 1); if (o.hl === 'cws' && i === 0) s += flO(p[0], p[1], 11); });
    if (o.exu) for (var i = 0; i < 12; i++) { var a = -150 + i * 26 + (o.exu === 'star' ? 0 : 10), rr = o.exu === 'star' ? 12 + (i % 3) * 3 : 18 + (i % 2) * 4, p = pol(MX, MY, rr, a); s += o.exu === 'star' ? P('M' + pt(pol(MX, MY, rr - 6, a)) + ' L' + pt(p), 'none', HY, 2.6, ' stroke-linecap="round"') : O(p[0], p[1], 2.4, HY); }
    if (o.exu && o.hl === 'exu') s += flO(MX, MY, 26);
    if (o.nvd) { var nv = ''; for (var j = 0; j < 9; j++) { var aa = -80 + j * 20, q1 = pol(DX, DY, 10, aa), q2 = pol(DX, DY, 20, aa + 12), q3 = pol(DX, DY, 26, aa - 8); nv += 'M' + pt(q1) + ' Q' + pt(q2) + ' ' + pt(q3) + ' '; } s += o.hl === 'nvd' ? flP(nv, 1.6) : P(nv, 'none', RED, 1.2); }
    if (o.vh) s += P('M' + (FX - 30) + ',' + (FY + FR - 4) + ' Q' + FX + ',' + (FY + 30) + ' ' + (FX + 58) + ',' + (FY + FR - 24) + ' A' + FR + ',' + FR + ' 0 0 1 ' + (FX - 30) + ',' + (FY + FR - 4) + ' Z', RED, o.hl === 'vh' ? FL : null, o.hl === 'vh' ? 3 : 0, ' fill-opacity=".55"');
    if (o.nick) { s += O(DX + 52, DY - 36, 6, 'none', o.hl === 'nick' ? EDGE : I3, 1); if (o.hl === 'nick') s += flO(DX + 52, DY - 36, 9); }
    s += '</g>';
    if (o.label !== false) s += Tb(DX, DY + 32, 'Papille', 'middle') + Tb(MX, MY + 28, 'Fovéa', 'middle');
    if (o.side) s += o.side;
    return s;
  }
  // side panels for the fundus kit (right third)
  function sideAV(hl) { // artery crossing over a vein: the vein is pinched downstream
    var s = R(232, 34, 116, 120, SURF, I3, 1.2, 8);
    s += P('M240,118 C266,104 280,96 304,92 C318,90 332,94 342,104', 'none', C, 6, ' stroke-linecap="round"');
    s += P('M296,70 L296,140', 'none', RED, 3, ' stroke-linecap="round"');
    s += hl ? flO(296, 93, 13) : O(296, 93, 11, 'none', I3, 1, ' stroke-dasharray="2 2"');
    return s + T(290, 168, 'Croisement artère-veine', 'middle') + T(250, 82, 'Veine', 'start') + T(300, 64, 'Artère', 'start');
  }
  function sideSource(hl) { // carotid / heart → embolus → eye
    var s = R(232, 30, 116, 130, SURF, I3, 1.2, 8);
    s += P('M300,150 L300,98 Q300,80 284,72 L262,60', 'none', RED, 5, ' stroke-linecap="round"') + P('M300,98 Q312,82 326,72', 'none', RED, 4, ' stroke-linecap="round"');
    s += E(300, 112, 6, 10, hl ? FL : HY, hl ? EDGE : INK, 1.2) + Ar('M290,108 Q270,90 262,66', 262, 66, -110, C, 2);
    return s + T(290, 178, 'Carotide : plaque', 'middle') + T(246, 52, 'vers l’œil', 'start');
  }
  function sideBrain(hl) {
    var s = R(232, 30, 116, 130, SURF, I3, 1.2, 8);
    s += P('M252,100 C250,64 290,52 314,62 C340,72 342,108 326,122 C312,136 280,138 262,126 C254,120 252,110 252,100 Z', CW, C, 1.6);
    s += P('M270,84 q10,-8 20,0 t20,0 M266,104 q12,-8 24,0 t22,0', 'none', C, 1.2);
    s += hl ? flO(306, 96, 12) : O(306, 96, 8, RED);
    return s + T(290, 178, 'Même source : AVC', 'middle');
  }
  function sideGCA(hl) { // temporal artery, thick and tender
    var s = R(232, 30, 116, 130, SURF, I3, 1.2, 8);
    s += P('M262,150 C258,126 278,118 270,96 C262,74 290,66 286,46', 'none', hl ? EDGE : RED, hl ? 9 : 5, ' stroke-linecap="round"') + (hl ? P('M262,150 C258,126 278,118 270,96 C262,74 290,66 286,46', 'none', FL, 5, ' stroke-linecap="round"') : '');
    return s + T(318, 70, 'VS, CRP', 'middle', 'lbl-sm lbl-b') + T(318, 86, 'plaquettes', 'middle') + T(290, 178, 'Artérite temporale ?', 'middle');
  }
  function sideOCT(fluid, hl) { // macular OCT profile: normal foveal dip or thickened with cysts
    var s = R(232, 34, 116, 110, SURF, I3, 1.2, 8), y = 100;
    s += fluid ? P('M240,' + (y - 6) + ' C270,' + (y - 18) + ' 310,' + (y - 18) + ' 340,' + (y - 6), 'none', INK, 2) : P('M240,' + (y - 6) + ' C270,' + (y - 8) + ' 280,' + (y + 4) + ' 290,' + (y + 4) + ' C300,' + (y + 4) + ' 310,' + (y - 8) + ' 340,' + (y - 6), 'none', INK, 2);
    s += Ln(240, y + 14, 340, y + 14, C, 3);
    if (fluid) [[276, y - 2, 6, 5], [292, y - 4, 8, 7], [308, y - 2, 6, 5]].forEach(function (c) { s += E(c[0], c[1], c[2], c[3], hl ? FL : SUNK, hl ? EDGE : I3, 1); });
    return s + T(290, 160, fluid ? 'OCT : macula épaissie' : 'OCT : fovéa normale', 'middle');
  }

  /* ---------- kit R3: outer retina in section (photoreceptors, RPE, Bruch, choroid) + Amsler grid ---------- */
  function layers(o) {
    o = o || {}; var s = '', x0 = 14, x1 = 222, yR = 66, yRPE = 116, yB = 124, yCh = 150;
    s += R(x0, 40, x1 - x0, 26, CW, null, 0, 0) + T(x0 + 4, 56, 'Rétine interne', 'start');
    // photoreceptors (lifted by fluid, missing over atrophy)
    var lift = o.fluid ? 1 : 0;
    for (var x = x0 + 4; x < x1; x += 7) {
      var inAtro = o.atrophy && x > 96 && x < 146, inLift = lift && x > 84 && x < 164, dy = inLift ? -18 * Math.sin(Math.PI * (x - 84) / 80) : 0;
      if (!inAtro) s += Ln(x, yR + 4 + dy, x, yRPE - 8 + dy, I2, 2.2);
    }
    if (o.fluid) s += P('M84,' + (yRPE - 4) + ' Q124,' + (yRPE - 34) + ' 164,' + (yRPE - 4) + ' Z', o.hl === 'fluid' ? FL : 'var(--frequent-wash)', o.hl === 'fluid' ? EDGE : I3, 1);
    // RPE (cobalt band), interrupted over atrophy, humped over drusen
    var rpe = 'M' + x0 + ',' + yRPE, dr = o.drusen ? [[60, 9], [176, 7]] : [];
    if (o.drusen && !o.atrophy) dr.push([120, 10]);
    var segs = [[x0, x1]]; if (o.atrophy) segs = [[x0, 96], [146, x1]];
    segs.forEach(function (sg) { var d = 'M' + sg[0] + ',' + yRPE; dr.forEach(function (q) { if (q[0] > sg[0] && q[0] < sg[1]) d += ' L' + (q[0] - 12) + ',' + yRPE + ' Q' + q[0] + ',' + (yRPE - q[1] * 2) + ' ' + (q[0] + 12) + ',' + yRPE; }); d += ' L' + sg[1] + ',' + yRPE; s += P(d, 'none', C, 5, ' stroke-linecap="butt"'); });
    dr.forEach(function (q) { s += P('M' + (q[0] - 11) + ',' + (yRPE + 2) + ' Q' + q[0] + ',' + (yRPE - q[1] * 2 + 6) + ' ' + (q[0] + 11) + ',' + (yRPE + 2) + ' Z', o.hl === 'drusen' ? FL : HY, o.hl === 'drusen' ? EDGE : null, 1); });
    if (o.atrophy && o.hl === 'atro') s += flP('M96,' + yRPE + ' L146,' + yRPE, 3.5);
    s += Ln(x0, yB, x1, yB, INK, 1.4, ' stroke-dasharray="6 3"');
    s += R(x0, yB + 16, x1 - x0, yCh - yB + 10, SUNK, null, 0, 0) + T(x0 + 4, yCh + 20, 'Choroïde', 'start');
    for (var k = 0; k < 6; k++) s += E(x0 + 22 + k * 34, yCh + 2, 10, 4, 'none', RED, 1.4);
    if (o.cnv) { var d2 = 'M110,' + (yCh + 2) + ' C112,' + (yB + 4) + ' 118,' + (yRPE + 6) + ' 116,' + (yRPE - 6) + ' M126,' + (yCh + 2) + ' C126,' + (yB) + ' 132,' + (yRPE + 4) + ' 134,' + (yRPE - 8) + ' M118,' + (yRPE + 2) + ' q8,-6 14,0'; s += o.hl === 'cnv' ? flP(d2, 2.2) : P(d2, 'none', RED, 2, ' stroke-linecap="round"'); }
    if (o.blood) s += E(124, yRPE - 6, 16, 5, RED, null, 0, ' fill-opacity=".75"');
    s += Tb(x0 + 4, yR + 22, 'Photorécepteurs', 'start') + Ln(x1 - 44, yCh + 9, x1 - 44, yB + 2, I3, 1) + T(x1 - 2, yCh + 20, 'Membrane de Bruch', 'end');
    if (o.amsler) s += amsler(o.amsler, o.hl === 'amsler');
    return s;
  }
  function amsler(kind, hl) { // 'normal' | 'wavy' | 'scotoma'
    var x = 240, y = 34, w = 108, s = R(x, y, w, w, SURF, hl ? EDGE : I3, hl ? 2 : 1.2, 4), n = 9, st = w / n, cx = x + w / 2, cy = y + w / 2;
    for (var i = 1; i < n; i++) {
      var vx = x + i * st, hy = y + i * st;
      if (kind === 'wavy') {
        var dv = Math.abs(vx - cx) < 30 ? (vx - cx) * 0.5 : 0, dh = Math.abs(hy - cy) < 30 ? (hy - cy) * 0.5 : 0;
        s += P('M' + n1(vx) + ',' + y + ' Q' + n1(vx + dv) + ',' + cy + ' ' + n1(vx) + ',' + (y + w), 'none', I2, 1) + P('M' + x + ',' + n1(hy) + ' Q' + cx + ',' + n1(hy + dh) + ' ' + (x + w) + ',' + n1(hy), 'none', I2, 1);
      } else s += Ln(vx, y, vx, y + w, I2, 1) + Ln(x, hy, x + w, hy, I2, 1);
    }
    if (kind === 'scotoma') s += O(cx, cy, 16, INK, null, 0, ' fill-opacity=".7"');
    s += O(cx, cy, 2.6, INK);
    if (hl) s += flO(cx, cy, 26);
    return s + T(cx, y + w + 16, 'Grille d’Amsler', 'middle');
  }

  function reg(id, steps, en) { if (en) addEN(en); W.OPH.mech[id] = { steps: steps.map(function (st) { var lab = fx0(st[1]); return { svg: svg(st[0], lab), label: st[1] }; }) }; }

  /* ===== D1 · Décollement de rétine rhegmatogène ===== */
  reg('r-decollement', [
    [globe({ pvd: true, hl: 'view', view: { flash: true, floaters: true } }), 'Le vitré se décolle : éclairs et corps flottants'],
    [globe({ pvd: true, tear: true, pull: true, hl: 'tear', view: { flash: true, floaters: true } }), 'Il tire sur la rétine périphérique : déchirure'],
    [globe({ pvd: true, tear: true, inflow: true, rd: [-122, -60, 14], hl: 'fluid', view: { floaters: true, curtain: 0.22 } }), 'Le liquide passe sous la rétine par la déchirure'],
    [globe({ pvd: true, tear: true, rd: [-124, -18, 22], hl: 'view', view: { curtain: 0.42 } }), 'Décollement : un rideau monte du côté opposé'],
    [globe({ pvd: true, tear: true, rd: [-126, 14, 26], macOff: true, hl: 'mac', view: { curtain: 0.55, central: true } }), 'Macula décollée : la vision centrale tombe']
  ], {
    'Le vitré se décolle : éclairs et corps flottants': 'The vitreous detaches: flashes and floaters',
    'Il tire sur la rétine périphérique : déchirure': 'It pulls on the peripheral retina: a tear',
    'Le liquide passe sous la rétine par la déchirure': 'Fluid passes under the retina through the tear',
    'Décollement : un rideau monte du côté opposé': 'Detachment: a curtain rises from the opposite side',
    'Macula décollée : la vision centrale tombe': 'Macula off: central vision drops',
    'Macula': 'Macula', 'Ce que voit le patient': 'What the patient sees'
  });

  /* ===== D2 · Occlusion de l'artère centrale de la rétine ===== */
  reg('r-oacr', [
    [fundus({ embolus: true, hl: 'emb', side: sideSource(true) }), 'Un embole (carotide, cœur) bouche l’artère centrale'],
    [fundus({ embolus: true, pale: true, narrow: true, side: sideSource(false) }), 'Sans oxygène, la rétine interne blanchit en minutes'],
    [fundus({ embolus: true, pale: true, narrow: true, cherry: true, hl: 'cherry' }), 'Fovéa sans rétine interne : tache rouge cerise'],
    [fundus({ embolus: true, pale: true, narrow: true, cherry: true, side: sideBrain(true) }), 'Même source d’emboles : risque d’AVC dans les jours suivants'],
    [fundus({ pale: true, narrow: true, cherry: true, side: sideGCA(true) }), 'Après 50 ans : éliminer l’artérite à cellules géantes']
  ], {
    'Un embole (carotide, cœur) bouche l’artère centrale': 'An embolus (carotid, heart) blocks the central artery',
    'Sans oxygène, la rétine interne blanchit en minutes': 'Without oxygen, the inner retina turns white within minutes',
    'Fovéa sans rétine interne : tache rouge cerise': 'The fovea has no inner retina: cherry-red spot',
    'Même source d’emboles : risque d’AVC dans les jours suivants': 'Same embolic source: stroke risk in the following days',
    'Après 50 ans : éliminer l’artérite à cellules géantes': 'Over 50: rule out giant cell arteritis',
    'Papille': 'Disc', 'Fovéa': 'Fovea', 'Carotide : plaque': 'Carotid: plaque', 'vers l’œil': 'to the eye', 'Même source : AVC': 'Same source: stroke',
    'VS, CRP': 'ESR, CRP', 'plaquettes': 'platelets', 'Artérite temporale ?': 'Temporal arteritis?'
  });

  /* ===== D3 · Occlusions veineuses rétiniennes ===== */
  reg('r-ovr', [
    [fundus({ side: sideAV(true) }), 'L’artère rigide comprime la veine au croisement'],
    [fundus({ tortuous: 'inf', dilate: true, side: sideAV(false) }), 'Thrombus : en amont, la veine se dilate et serpente'],
    [fundus({ tortuous: 'inf', dilate: true, sector: true, hem: 'sector', hl: 'hem' }), 'Hémorragies en flammèches dans le secteur drainé'],
    [fundus({ tortuous: 'inf', dilate: true, sector: true, hem: 'sector', side: sideOCT(true, true) }), 'Œdème maculaire : la vision baisse'],
    [fundus({ tortuous: 'all', dilate: true, hem: 'all', cws: true, nvd: true, hl: 'nvd' }), 'Rétine ischémique : VEGF, néovaisseaux, glaucome']
  ], {
    'L’artère rigide comprime la veine au croisement': 'The stiff artery compresses the vein at the crossing',
    'Thrombus : en amont, la veine se dilate et serpente': 'Thrombus: upstream, the vein dilates and twists',
    'Hémorragies en flammèches dans le secteur drainé': 'Flame haemorrhages in the drained sector',
    'Œdème maculaire : la vision baisse': 'Macular oedema: vision drops',
    'Rétine ischémique : VEGF, néovaisseaux, glaucome': 'Ischaemic retina: VEGF, new vessels, glaucoma',
    'Croisement artère-veine': 'Artery–vein crossing', 'Veine': 'Vein', 'Artère': 'Artery', 'OCT : macula épaissie': 'OCT: thickened macula', 'OCT : fovéa normale': 'OCT: normal fovea'
  });

  /* ===== D4 · Rétinopathie diabétique ===== */
  reg('r-diabete', [
    [fundus({ ma: true, hl: 'ma' }), 'Hyperglycémie : les capillaires s’abîment, microanévrismes'],
    [fundus({ ma: true, hem: 'dots', exu: 'ring', hl: 'exu', side: sideOCT(true, false) }), 'Ils fuient : exsudats et œdème maculaire'],
    [fundus({ ma: true, hem: 'dots', cws: true, ischemia: true, hl: 'cws' }), 'Capillaires fermés : rétine ischémique, nodules cotonneux'],
    [fundus({ ma: true, hem: 'dots', cws: true, ischemia: true, nvd: true, hl: 'nvd' }), 'VEGF : néovaisseaux sur la papille ou la rétine'],
    [fundus({ ma: true, cws: true, nvd: true, vh: true, hl: 'vh' }), 'Ils saignent dans le vitré ou tirent la rétine']
  ], {
    'Hyperglycémie : les capillaires s’abîment, microanévrismes': 'Hyperglycaemia damages capillaries: microaneurysms',
    'Ils fuient : exsudats et œdème maculaire': 'They leak: exudates and macular oedema',
    'Capillaires fermés : rétine ischémique, nodules cotonneux': 'Closed capillaries: ischaemic retina, cotton-wool spots',
    'VEGF : néovaisseaux sur la papille ou la rétine': 'VEGF: new vessels on the disc or retina',
    'Ils saignent dans le vitré ou tirent la rétine': 'They bleed into the vitreous or pull on the retina'
  });

  /* ===== D5 · DMLA ===== */
  reg('r-dmla', [
    [layers({ drusen: true, hl: 'drusen', amsler: 'normal' }), 'Drusens : dépôts sous l’épithélium pigmentaire'],
    [layers({ drusen: true, atrophy: true, hl: 'atro', amsler: 'scotoma' }), 'Forme sèche : l’épithélium et les cônes s’atrophient'],
    [layers({ drusen: true, cnv: true, hl: 'cnv', amsler: 'normal' }), 'Forme humide : des néovaisseaux franchissent la membrane de Bruch'],
    [layers({ drusen: true, cnv: true, fluid: true, blood: true, hl: 'amsler', amsler: 'wavy' }), 'Liquide et sang soulèvent la macula : lignes ondulées'],
    [layers({ drusen: true, cnv: true, amsler: 'normal' }), 'Anti-VEGF intravitréen : le liquide se résorbe']
  ], {
    'Drusens : dépôts sous l’épithélium pigmentaire': 'Drusen: deposits under the pigment epithelium',
    'Forme sèche : l’épithélium et les cônes s’atrophient': 'Dry form: the pigment epithelium and cones waste away',
    'Forme humide : des néovaisseaux franchissent la membrane de Bruch': 'Wet form: new vessels break through Bruch’s membrane',
    'Liquide et sang soulèvent la macula : lignes ondulées': 'Fluid and blood lift the macula: wavy lines',
    'Anti-VEGF intravitréen : le liquide se résorbe': 'Intravitreal anti-VEGF: the fluid resolves',
    'Rétine interne': 'Inner retina', 'Photorécepteurs': 'Photoreceptors', 'Membrane de Bruch': 'Bruch’s membrane', 'Choroïde': 'Choroid', 'Grille d’Amsler': 'Amsler grid'
  });

  /* ===== D6 · Rétinopathie hypertensive ===== */
  reg('r-hta', [
    [fundus({ narrow: true, nick: true, hl: 'nick', side: sideAV(true) }), 'HTA chronique : artérioles fines, croisements pincés'],
    [fundus({ narrow: true, nick: true, hem: 'dots', hl: 'hem' }), 'Poussée sévère : la paroi lâche, hémorragies en flammèches'],
    [fundus({ narrow: true, hem: 'dots', cws: true, hl: 'cws' }), 'Nodules cotonneux : micro-infarctus des fibres nerveuses'],
    [fundus({ narrow: true, hem: 'dots', cws: true, exu: 'star', swell: true, hl: 'disc' }), 'Papille gonflée, étoile maculaire : urgence hypertensive'],
    [fundus({ narrow: true, nick: true }), 'TA baissée sans brusquerie : les lésions régressent en semaines']
  ], {
    'HTA chronique : artérioles fines, croisements pincés': 'Chronic hypertension: thin arterioles, nipped crossings',
    'Poussée sévère : la paroi lâche, hémorragies en flammèches': 'Severe surge: the wall gives way, flame haemorrhages',
    'Nodules cotonneux : micro-infarctus des fibres nerveuses': 'Cotton-wool spots: micro-infarcts of the nerve fibres',
    'Papille gonflée, étoile maculaire : urgence hypertensive': 'Swollen disc, macular star: hypertensive emergency',
    'TA baissée sans brusquerie : les lésions régressent en semaines': 'BP lowered without haste: the lesions fade over weeks'
  });

  W.MechRetine = { kit: { globe: globe, fundus: fundus, layers: layers, svg: svg } };
})();
