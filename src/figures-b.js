/* ===== Figures — part B: gonioscopy, disc, visual field, OCT RNFL, topography, fluorescein, slit lamp, Van Herick ===== */
'use strict';
function ring(x, y, r, txt, tx, ty) {
  return '<circle class="reveal-ring" cx="' + x + '" cy="' + y + '" r="' + r + '"/>' + (txt ? '<text class="reveal-txt" x="' + (tx != null ? tx : x + r + 6) + '" y="' + (ty != null ? ty : y + 4) + '">' + U.esc(txt) + '</text>' : '');
}

/* ---------- Gonioscopy (view through the mirror) ---------- */
Figures.gonio = function (fig, opts) {
  opts = opts || {};
  var grade = fig.grade != null ? fig.grade : 4, pas = !!fig.pas, pig = fig.pigment || 'light', nv = !!fig.nv, rec = !!fig.recession;
  var indent = !!opts.indent, hit = !!opts.interactive, hl = opts.highlight || [];
  var eff = indent && !pas ? Math.min(4, grade + 2) : (indent && pas ? Math.min(4, grade + 2) : grade);
  var Y = { corneaB: 76, schw: [76, 82], tmn: [82, 108], tmp: [108, 140], spur: [140, 152], cbb: [152, rec ? 214 : 188] };
  var irisTop = { 4: Y.cbb[1] + 2, 3: 151, 2: 137, 1: 100, 0: 78 }[eff]; // Shaffer 3: spur is the deepest visible structure; 2: TM only; 1: Schwalbe/anterior TM
  function band(id, y0, y1, fill, extra) {
    var inner = '<rect x="20" y="' + y0 + '" width="440" height="' + (y1 - y0) + '" fill="' + fill + '"/>' + (extra || '');
    return grp(id, inner, hl, hit).replace('data-anat=', 'data-angle=');
  }
  var s = [];
  s.push('<rect x="0" y="0" width="640" height="300" fill="#0d1018"/>');
  s.push('<rect x="20" y="16" width="440" height="60" fill="#3d4a5e"/>');
  s.push('<path d="M20,30 L440,72 M20,60 L440,76" stroke="#9fb1c9" stroke-width="1.2" opacity=".8"/>'); // corneal wedge
  s.push(fx('<text class="lbl-sm lbl-white" x="28" y="34">cornée (prisme cornéen)</text>'));
  if (pig === 'sampaolesi') s.push('<path d="M20,72 Q60,66 100,72 T180,72 T260,72 T340,72 T420,72 L460,72" stroke="#4a2c16" stroke-width="3" fill="none"/>');
  var tmpFill = pig === 'heavy' ? '#3b2212' : (pig === 'sampaolesi' ? '#5a3a22' : '#a5835e');
  s.push(band('schwalbe', Y.schw[0], Y.schw[1], '#f3efe4'));
  s.push(band('trab-nonpig', Y.tmn[0], Y.tmn[1], '#8f8a80'));
  var patch = pig === 'sampaolesi' ? (function () { var g = '', r = U.rng(5); for (var i = 0; i < 14; i++) g += '<ellipse cx="' + (30 + r() * 420).toFixed(0) + '" cy="' + (112 + r() * 24).toFixed(0) + '" rx="' + (6 + r() * 12).toFixed(0) + '" ry="5" fill="#2a170b"/>'; return g; })() : '';
  s.push(band('trab-pig', Y.tmp[0], Y.tmp[1], tmpFill, patch));
  s.push(band('eperon', Y.spur[0], Y.spur[1], '#ece6d8'));
  s.push(band('bande-ciliaire', Y.cbb[0], Y.cbb[1], '#4b3a33', rec ? '<path d="M60,190 l8,22 M150,186 l-6,26 M300,192 l10,20 M380,188 l-8,24" stroke="#7b6153" stroke-width="2"/>' : ''));
  if (nv) {
    var v = '<g stroke="#e0322c" stroke-width="1.6" fill="none">';
    [70, 170, 250, 350, 420].forEach(function (x, i) { v += '<path d="M' + x + ',200 C ' + (x + 6) + ',170 ' + (x - 8) + ',150 ' + (x + 4) + ',120 M' + (x + 4) + ',140 l14,-10 M' + (x - 2) + ',160 l-12,-12"/>'; });
    s.push(v + '</g>');
  }
  // iris
  var irisPath = 'M20,300 L20,' + (irisTop + 4) + ' C 120,' + (irisTop - 1) + ' 340,' + (irisTop - 1) + ' 460,' + (irisTop + 4) + ' L460,300 Z';
  var irisG = '<path d="' + irisPath + '" fill="#6a4630"/>';
  for (var x = 30; x < 460; x += 18) irisG += '<path d="M' + x + ',300 L' + (x + 6) + ',' + (irisTop + 12) + '" stroke="#8c6243" stroke-width="2"/>';
  irisG += '<path d="M20,' + (irisTop + 4) + ' C 120,' + (irisTop - 1) + ' 340,' + (irisTop - 1) + ' 460,' + (irisTop + 4) + '" stroke="#a87b55" stroke-width="3" fill="none"/>';
  if (pas) {
    [[110, 34], [300, 40]].forEach(function (p) { irisG += '<path d="M' + (p[0] - p[1]) + ',' + (irisTop + 8) + ' L' + p[0] + ',' + Math.min(irisTop, 96) + ' L' + (p[0] + p[1]) + ',' + (irisTop + 8) + ' Z" fill="#6a4630"/>'; });
  }
  s.push(grp('iris-racine', irisG, hl, hit).replace('data-anat=', 'data-angle='));
  // labels (right)
  var lb = '';
  var vis = { schwalbe: irisTop > Y.schw[1] - 1, 'trab-nonpig': irisTop > Y.tmn[0] + 4, 'trab-pig': irisTop > Y.tmp[0] + 4, eperon: irisTop > Y.spur[0] + 3, 'bande-ciliaire': irisTop > Y.cbb[0] + 4 };
  [['schwalbe', fx('Ligne de Schwalbe'), 79], ['trab-nonpig', fx('Trabéculum non pigmenté'), 95], ['trab-pig', fx('Trabéculum pigmenté'), 124], ['eperon', fx('Éperon scléral'), 146], ['bande-ciliaire', fx('Bande ciliaire'), (Y.cbb[0] + Y.cbb[1]) / 2], ['iris-racine', fx('Iris (dernier pli)'), Math.min(282, Math.max(irisTop + 22, (Y.cbb[0] + Y.cbb[1]) / 2 + 18))]].forEach(function (r) {
    var isVis = r[0] === 'iris-racine' ? true : vis[r[0]];
    lb += label(476, r[2], r[1] + (isVis ? '' : fx(' — caché')), 458, r[2], 'start', r[0], isVis ? 'lbl-sm lbl-white' : 'lbl-sm lbl-muted');
  });
  s.push('<g class="g-labels">' + lb + '</g>');
  if (opts.reveal) {
    if (pig === 'sampaolesi') s.push(ring(240, 72, 18, 'ligne de Sampaolesi', 262, 64));
    if (nv) s.push(ring(250, 150, 30, fx('néovaisseaux franchissant l’éperon'), 210, 108));
    if (pas) s.push(ring(110, 110, 30, fx('synéchie (PAS)'), 146, 100));
    if (rec) s.push(ring(240, 200, 26, fx('bande ciliaire élargie'), 270, 230));
    if (pig === 'heavy') s.push(ring(240, 124, 22, 'pigment dense 360°', 268, 130));
  }
  var shaffer = [fx('0 : fermé'), '1 : ≤ 10°', '2 : ≈ 20°', '3 : 20–35°', '4 : 35–45°'][eff];
  return { svg: '<svg viewBox="0 0 640 300" role="img" aria-label="Vue gonioscopique schématique">' + s.join('') + '</svg>', cap: fx('Vue au miroir de gonioscopie — Shaffer ') + shaffer + (indent ? fx(' (avec indentation)') : '') };
};

/* ---------- Optic disc (fundus close-up) ---------- */
Figures.disc = function (fig, opts) {
  opts = opts || {};
  var cd = U.clamp(fig.cd != null ? fig.cd : 0.3, 0.1, 0.97), notch = fig.notch || 'none', heme = !!fig.heme, ppa = !!fig.ppa, pallor = !!fig.pallor;
  var hit = !!opts.interactive, hl = opts.highlight || [];
  var cx = 200, cy = 200, rx = 72, ry = 82, id = Figures.next();
  function D2(name, inner) { return grp(name, inner, hl, hit).replace('data-anat=', 'data-disc='); }
  var s = ['<defs><radialGradient id="' + id + 'bg" cx="50%" cy="50%" r="65%"><stop offset="0" stop-color="var(--t-fundus)"/><stop offset="1" stop-color="var(--t-fundus-2)"/></radialGradient>' +
    '<radialGradient id="' + id + 'rim" cx="50%" cy="50%" r="55%"><stop offset=".6" stop-color="' + (pallor ? '#f1e2cc' : 'var(--t-disc-rim)') + '"/><stop offset="1" stop-color="' + (pallor ? '#e6cfb2' : '#dc8a62') + '"/></radialGradient></defs>'];
  s.push('<rect width="400" height="400" fill="url(#' + id + 'bg)"/>');
  // RNFL striations
  var rn = '';
  for (var a = 0; a < 360; a += 7) { var p0 = pol(cx, cy, 92, a), p1 = pol(cx, cy, 190, a + (a < 180 ? 8 : -8)); rn += '<path d="M' + pt(p0) + ' L' + pt(p1) + '" stroke="#e9806a" stroke-width="1" opacity=".35"/>'; }
  if (notch !== 'none') { var na = notch === 'inf' ? 118 : 242; rn += '<path d="M' + pt(pol(cx, cy, 86, na - 9)) + ' L' + pt(pol(cx, cy, 196, na - 16)) + ' L' + pt(pol(cx, cy, 196, na + 16)) + ' L' + pt(pol(cx, cy, 86, na + 9)) + ' Z" fill="#8e2f20" opacity=".35"/>'; }
  s.push(D2('rnfl', rn));
  if (ppa) s.push(D2('ppa', '<path d="M' + pt(pol(cx, cy, 84, 140)) + ' A84 90 0 0 1 ' + pt(pol(cx, cy, 84, 220)) + ' L' + pt(pol(cx, cy, 104, 214)) + ' A104 108 0 0 0 ' + pt(pol(cx, cy, 104, 146)) + ' Z" fill="#e8e2d6"/><path d="M' + pt(pol(cx, cy, 104, 146)) + ' A104 108 0 0 1 ' + pt(pol(cx, cy, 104, 214)) + '" stroke="#5a3624" stroke-width="5" fill="none" opacity=".7"/>'));
  s.push(D2('rim', '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="url(#' + id + 'rim)"/>'));
  // cup outline with optional notch
  var pts = [], cdH = cd * 0.86;
  for (var i = 0; i < 72; i++) {
    var th = i * 5, rad = th * Math.PI / 180;
    var r = 1 / Math.sqrt(Math.pow(Math.cos(rad) / (rx * cdH), 2) + Math.pow(Math.sin(rad) / (ry * cd), 2));
    if (notch !== 'none') { var cen = notch === 'inf' ? 118 : 242, d = Math.min(Math.abs(th - cen), 360 - Math.abs(th - cen)); var rimR = 1 / Math.sqrt(Math.pow(Math.cos(rad) / rx, 2) + Math.pow(Math.sin(rad) / ry, 2)); r = r + (rimR * 0.96 - r) * Math.exp(-Math.pow(d / 16, 2)); }
    pts.push(pol(cx - 4, cy, r, th));
  }
  s.push(D2('cup', '<path d="' + smooth(pts, true) + '" fill="var(--t-cup)"/>' + (cd > 0.65 ? (function () { var g = '', r2 = U.rng(2); for (var k = 0; k < 16; k++) { var q = pol(cx - 4, cy, r2() * rx * cdH * 0.6, r2() * 360); g += '<ellipse cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" rx="2.6" ry="3.4" fill="#c9b08a" opacity=".8"/>'; } return g; })() : '')));
  if (cd > 0.65) s.push(D2('lame-criblee', '<ellipse cx="' + (cx - 4) + '" cy="' + cy + '" rx="' + (rx * cdH * 0.55).toFixed(1) + '" ry="' + (ry * cd * 0.55).toFixed(1) + '" fill="none" stroke="#c9b08a" stroke-dasharray="2 4"/>'));
  // vessels: arcades curving around the macula (temporal = left for OD)
  var tx = cx + (cd > 0.6 ? 14 : 6);
  function arc(dir, nasal, art) {
    var sy = dir, o = art ? -5 : 5, cupY = ry * cd * 0.95, kink = cd >= 0.7 ? 10 : 0;
    var x0 = tx + o * 0.4, y0 = cy;
    var x1 = (nasal ? tx + 14 : tx - 10) + o, y1 = cy + sy * (cupY);
    var xk = x1 + (nasal ? kink : -kink), yk = y1 + sy * 4;
    var p = 'M' + x0.toFixed(1) + ',' + y0.toFixed(1) + ' L' + x1.toFixed(1) + ',' + y1.toFixed(1) + (kink ? ' L' + xk.toFixed(1) + ',' + yk.toFixed(1) : '');
    var up = cy + sy * (nasal ? 104 : 112);
    p += ' L' + (xk + (nasal ? 6 : -6)).toFixed(1) + ',' + up.toFixed(1);
    p += nasal ? ' C ' + (xk + 26).toFixed(1) + ',' + (cy + sy * 148).toFixed(1) + ' ' + (xk + 110).toFixed(1) + ',' + (cy + sy * 170).toFixed(1) + ' 396,' + (cy + sy * 176).toFixed(1)
               : ' C ' + (xk - 30).toFixed(1) + ',' + (cy + sy * 150).toFixed(1) + ' ' + (xk - 120).toFixed(1) + ',' + (cy + sy * 158).toFixed(1) + ' 4,' + (cy + sy * 146).toFixed(1);
    return '<path d="' + p + '" stroke="' + (art ? '#e8735c' : '#9c2a20') + '" stroke-width="' + (art ? 4 : 5.5) + '" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  var vs = '';
  [-1, 1].forEach(function (dir) { [false, true].forEach(function (nas) { vs += arc(dir, nas, false) + arc(dir, nas, true); }); });
  vs += '<path d="M' + (tx - 8) + ',' + cy + ' C ' + (tx - 40) + ',' + (cy - 8) + ' ' + (tx - 70) + ',' + (cy + 4) + ' 70,' + (cy - 6) + '" stroke="#e8735c" stroke-width="2.2" fill="none" opacity=".8"/>';
  s.push(D2('vessels', vs));
  if (heme) { var hp = pol(cx, cy, 80, notch === 'sup' ? 238 : 122); s.push('<ellipse cx="' + hp[0].toFixed(1) + '" cy="' + hp[1].toFixed(1) + '" rx="5" ry="16" transform="rotate(' + (notch === 'sup' ? 58 : -58) + ' ' + hp[0].toFixed(1) + ' ' + hp[1].toFixed(1) + ')" fill="#7d0f0b" opacity=".95"/>'); }
  if (opts.isnt) {
    var g2 = '<g stroke="#fff" stroke-width="2" fill="#fff">';
    [['I', 90], ['S', 270], ['N', 0], ['T', 180]].forEach(function (q) { var o = pol(cx, cy, (q[1] === 90 || q[1] === 270 ? ry : rx), q[1]), ii = pol(cx - 4, cy, (q[1] === 90 || q[1] === 270 ? ry * cd : rx * cdH), q[1]); g2 += '<path d="M' + pt(o) + ' L' + pt(ii) + '"/><text x="' + (pol(cx, cy, 110, q[1])[0]).toFixed(0) + '" y="' + (pol(cx, cy, 110, q[1])[1] + 5).toFixed(0) + '" class="lbl lbl-b" style="fill:#fff" stroke="none" text-anchor="middle">' + q[0] + '</text>'; });
    s.push(g2 + '</g>');
  }
  s.push('<text class="lbl-sm" x="12" y="392" style="fill:#fff">temporal</text><text class="lbl-sm" x="388" y="392" text-anchor="end" style="fill:#fff">nasal (OD)</text>');
  if (opts.reveal) {
    if (notch !== 'none') { var nn = pol(cx, cy, 70, notch === 'inf' ? 118 : 242); s.push(ring(nn[0].toFixed(0), nn[1].toFixed(0), 18, fx('encoche du bord'), 20, notch === 'inf' ? 360 : 40)); }
    if (heme) { var h2 = pol(cx, cy, 80, notch === 'sup' ? 238 : 122); s.push(ring(h2[0].toFixed(0), h2[1].toFixed(0), 20, fx('hémorragie (Drance)'), 230, notch === 'sup' ? 60 : 350)); }
    if (ppa) s.push(ring(108, 200, 22, fx('APP zone bêta'), 20, 290));
    if (pallor) s.push(ring(200, 200, 86, fx('pâleur > excavation'), 210, 316));
    if (cd >= 0.7) s.push(ring(196, 200, Math.round(ry * cd * 0.9), 'C/D ≈ ' + cd.toFixed(1), 250, 40));
  }
  return { svg: '<svg viewBox="0 0 400 400" role="img" aria-label="Papille schématique">' + s.join('') + '</svg>', cap: fx('Papille (OD) — C/D vertical ≈ ') + cd.toFixed(2).replace('.', ',') };
};

/* ---------- Visual field 24-2 ---------- */
Figures.vfPoints = (function () {
  var rows = { 21: [-9, -3, 3, 9], 15: [-15, -9, -3, 3, 9, 15], 9: [-21, -15, -9, -3, 3, 9, 15, 21], 3: [-27, -21, -15, -9, -3, 3, 9, 15, 21] };
  var out = [];
  [21, 15, 9, 3, -3, -9, -15, -21].forEach(function (y) { rows[Math.abs(y)].forEach(function (x) { out.push([x, y]); }); });
  return out; // OD orientation with nasal = negative x (nasal step side has x = -27)
})();
Figures.vfLevel = function (pattern, x, y, eye) {
  // x,y in OD coordinates (temporal = +x). Return deficit level 0-4 for PD ("localized") and a generalized TD offset.
  var r = Math.sqrt(x * x + y * y), lvl = 0;
  var sup = y > 0, inf = y < 0, nasal = x < 0;
  function arcuate(isSup) {
    if ((isSup && !sup) || (!isSup && !inf)) return 0;
    if (r < 7 || x > 16) return 0;
    if (Math.abs(y) === 3 && x > 0) return 0;
    var base = nasal ? 4 : (x <= 9 ? 3 : 1);
    if (r > 22 && !nasal) base = 1;
    return base;
  }
  switch (pattern) {
    case 'sup-arcuate': lvl = arcuate(true); break;
    case 'inf-arcuate': lvl = arcuate(false); break;
    case 'double-arcuate': lvl = Math.max(arcuate(true), Math.min(3, arcuate(false))); break;
    case 'sup-nasal-step': lvl = (sup && x <= -15) ? (x <= -21 ? 4 : 2) : 0; break;
    case 'inf-nasal-step': lvl = (inf && x <= -15) ? (x <= -21 ? 4 : 2) : 0; break;
    case 'sup-paracentral': lvl = (sup && r < 13 && x <= 3) ? (r < 7 ? 4 : 3) : 0; break;
    case 'inf-paracentral': lvl = (inf && r < 13 && x <= 3) ? (r < 7 ? 4 : 3) : 0; break;
    case 'temporal-wedge': lvl = (x >= 21 && Math.abs(y) <= 9) ? (Math.abs(y) === 3 ? 4 : 2) : 0; break;
    case 'bitemporal': { var temporal = eye === 'OS' ? x < 0 : x > 0; lvl = temporal ? (sup ? 4 : 3) : 0; break; }
    case 'homonymous-right': lvl = x > 0 ? 4 : 0; break;
    case 'homonymous-left': lvl = x < 0 ? 4 : 0; break;
    case 'altitudinal-inf': lvl = inf ? (r < 26 ? 4 : 3) : 0; break;
    case 'altitudinal-sup': lvl = sup ? (r < 26 ? 4 : 3) : 0; break;
    case 'central': lvl = r < 5 ? 4 : (r < 10 ? 3 : 0); break;
    case 'blind-spot': lvl = ((x === 9 || x === 21) && Math.abs(y) === 3) || (x === 15 && Math.abs(y) === 9) ? 3 : 0; break;
    default: lvl = 0;
  }
  return lvl;
};
Figures.vf = function (fig, opts) {
  opts = opts || {};
  var pattern = fig.pattern || 'normal', eye = fig.eye || 'OD', map = fig.map || 'pd', id = Figures.next();
  var gen = pattern === 'generalized';
  var S = 26, cx = 180, cy = 176;
  var s = [];
  s.push('<defs>' +
    '<pattern id="' + id + 'p1" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="var(--surface)"/><circle cx="3" cy="3" r="1" fill="var(--ink)"/></pattern>' +
    '<pattern id="' + id + 'p2" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="var(--surface)"/><circle cx="2" cy="2" r="1.1" fill="var(--ink)"/></pattern>' +
    '<pattern id="' + id + 'p3" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="var(--ink)"/><rect x="1" y="1" width="2" height="2" fill="var(--surface)"/></pattern></defs>');
  s.push('<rect x="0" y="0" width="360" height="380" fill="var(--surface)"/>');
  s.push('<path d="M' + (cx - 8 * S / 1.6) + ',' + cy + ' H' + (cx + 8 * S / 1.6) + ' M' + cx + ',' + (cy - 8 * S / 1.8) + ' V' + (cy + 8 * S / 1.8) + '" stroke="var(--ink-3)" stroke-width="1"/>');
  var mdSum = 0, n = 0, maxL = 0;
  Figures.vfPoints.forEach(function (p) {
    var x = p[0], y = p[1];
    var xd = eye === 'OS' ? -x : x; // OS displayed mirrored (temporal on the left)
    var lvl = Figures.vfLevel(pattern, x, y, eye);
    var bs = (x === 15 && y === -3);
    var px = cx + xd / 6 * S, py = cy - y / 6 * S;
    var v = lvl;
    if (map === 'td' && gen) v = Math.max(v, 2 + ((x + y) % 2 === 0 ? 1 : 0) * (Math.abs(x) > 15 ? 1 : 0));
    if (map === 'pd' && gen) v = 0;
    if (!bs) { mdSum += [0, 3, 6, 12, 24][Math.max(lvl, gen ? 2 : 0)]; n++; maxL = Math.max(maxL, v); }
    if (map === 'gray') {
      var shade = bs ? 0.92 : [0.04, 0.22, 0.42, 0.68, 0.9][Math.max(v, gen ? 1 : 0)];
      var col = Math.round(255 * (1 - shade));
      s.push('<rect x="' + (px - S / 2).toFixed(1) + '" y="' + (py - S / 2).toFixed(1) + '" width="' + S + '" height="' + S + '" fill="rgb(' + col + ',' + col + ',' + col + ')"/>');
    } else if (bs) {
      s.push('<rect x="' + (px - 7) + '" y="' + (py - 7) + '" width="14" height="14" fill="none" stroke="var(--ink-3)" stroke-dasharray="2 2"/>');
    } else if (v === 0) {
      s.push('<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="1.8" fill="var(--ink)"/>');
    } else {
      var fill = v === 1 ? 'url(#' + id + 'p1)' : v === 2 ? 'url(#' + id + 'p2)' : v === 3 ? 'url(#' + id + 'p3)' : 'var(--ink)';
      s.push('<rect x="' + (px - 8).toFixed(1) + '" y="' + (py - 8).toFixed(1) + '" width="16" height="16" fill="' + fill + '" stroke="var(--ink)" stroke-width=".6"/>');
    }
  });
  var md = fig.md != null && !isNaN(+fig.md) ? +fig.md : (n ? -(mdSum / n) : 0);
  s.push('<text class="lbl-sm lbl-muted" x="' + cx + '" y="18" text-anchor="middle">' + (map === 'pd' ? fx('Déviation corrigée (pattern deviation)') : map === 'td' ? fx('Déviation totale (total deviation)') : fx('Échelle de gris')) + ' · ' + eye + '</text>');
  s.push('<text class="lbl-sm lbl-muted" x="' + (eye === 'OS' ? 20 : 340) + '" y="' + (cy - 6) + '" text-anchor="' + (eye === 'OS' ? 'start' : 'end') + '">temporal</text><text class="lbl-sm lbl-muted" x="' + (eye === 'OS' ? 340 : 20) + '" y="' + (cy - 6) + '" text-anchor="' + (eye === 'OS' ? 'end' : 'start') + '">nasal</text>');
  if (map !== 'gray') s.push('<g transform="translate(24,338)"><circle cx="4" cy="6" r="1.8" fill="var(--ink)"/><text class="lbl-sm" x="12" y="10">normal</text><rect x="62" y="0" width="12" height="12" fill="url(#' + id + 'p1)" stroke="var(--ink)" stroke-width=".6"/><text class="lbl-sm" x="78" y="10">p&lt;5 %</text><rect x="122" y="0" width="12" height="12" fill="url(#' + id + 'p2)" stroke="var(--ink)" stroke-width=".6"/><text class="lbl-sm" x="138" y="10">p&lt;2 %</text><rect x="182" y="0" width="12" height="12" fill="url(#' + id + 'p3)" stroke="var(--ink)" stroke-width=".6"/><text class="lbl-sm" x="198" y="10">p&lt;1 %</text><rect x="242" y="0" width="12" height="12" fill="var(--ink)"/><text class="lbl-sm" x="258" y="10">p&lt;0,5 %</text></g>');
  if (opts.reveal && pattern !== 'normal' && !(map === 'pd' && gen)) {
    var rv = { 'sup-arcuate': [140, 110, fx('arciforme supérieur')], 'inf-arcuate': [140, 240, fx('arciforme inférieur')], 'sup-nasal-step': [70, 150, 'ressaut nasal'], 'inf-nasal-step': [70, 200, 'ressaut nasal'], 'sup-paracentral': [165, 150, 'paracentral'], 'inf-paracentral': [165, 205, 'paracentral'], 'double-arcuate': [140, 176, 'double arciforme'], 'temporal-wedge': [280, 176, 'coin temporal'], 'bitemporal': [260, 140, fx('respecte le méridien vertical')], 'homonymous-right': [260, 176, fx('hémianopsie')], 'homonymous-left': [100, 176, fx('hémianopsie')], 'altitudinal-inf': [180, 240, 'altitudinal'], 'altitudinal-sup': [180, 110, 'altitudinal'], central: [180, 176, 'scotome central'], 'blind-spot': [245, 176, fx('tache aveugle élargie')], generalized: [180, 176, fx('dépression diffuse')] }[pattern];
    if (rv) { var rx2 = eye === 'OS' ? 360 - rv[0] : rv[0]; s.push(ring(rx2, rv[1], 40, rv[2], Math.min(250, rx2 + 10), rv[1] > 176 ? rv[1] + 56 : rv[1] - 46)); }
  }
  var cap = fx('Champ 24-2 schématique (') + eye + ') — MD ' + (fig.md != null ? '' : 'illustratif ') + '≈ ' + md.toFixed(1).replace('.', ',').replace('-', '−') + ' dB';
  return { svg: '<svg viewBox="0 0 360 362" role="img" aria-label="Champ visuel schématique">' + s.join('') + '</svg>', cap: cap, md: md };
};

/* ---------- OCT RNFL (TSNIT) ---------- */
Figures.rnflNorm = function (t) {
  function g(m, sd) { var d = Math.abs(t - m); d = Math.min(d, 360 - d); return Math.exp(-d * d / (2 * sd * sd)); }
  return 68 + 67 * g(92, 38) + 77 * g(268, 36) + 8 * g(180, 30);
};
Figures.rnflPatient = function (pattern, t) {
  var N = Figures.rnflNorm(t);
  function g(m, sd) { var d = Math.abs(t - m); d = Math.min(d, 360 - d); return Math.exp(-d * d / (2 * sd * sd)); }
  var wig = 3 * Math.sin(t / 9) + 2 * Math.sin(t / 4.3);
  switch (pattern) {
    case 'inf-thin': return N - 52 * g(292, 24) + wig;
    case 'sup-thin': return N - 48 * g(68, 24) + wig;
    case 'bi-arcuate': return N - 50 * g(292, 24) - 44 * g(68, 24) + wig;
    case 'diffuse': return N * 0.66 + wig;
    case 'red-disease': { var tt = t; var shifted = 68 + 67 * Math.exp(-Math.pow(Math.min(Math.abs(tt - 62), 360 - Math.abs(tt - 62)), 2) / (2 * 30 * 30)) + 77 * Math.exp(-Math.pow(Math.min(Math.abs(tt - 298), 360 - Math.abs(tt - 298)), 2) / (2 * 30 * 30)) + 8 * g(180, 30); return shifted + wig; }
    case 'green-disease': return N - 14 * g(292, 18) + wig;
    default: return N + wig;
  }
};
Figures.oct = function (fig, opts) {
  opts = opts || {};
  var pattern = fig.pattern || 'normal';
  var X = function (t) { return 46 + t / 360 * 460; }, Y = function (v) { return 250 - v / 200 * 200; };
  var s = ['<rect x="0" y="0" width="540" height="330" fill="var(--surface)"/>'];
  function band(lo, hi, fill) { var top = [], bot = []; for (var t = 0; t <= 360; t += 4) { var N = Figures.rnflNorm(t); top.push([X(t), Y(hi(N))]); bot.push([X(t), Y(lo(N))]); } return '<path d="M' + top.map(pt).join(' L') + ' L' + bot.reverse().map(pt).join(' L') + ' Z" fill="' + fill + '"/>'; }
  s.push(band(function (N) { return N + 18; }, function (N) { return N + 40; }, '#f4f4f4'));
  s.push(band(function (N) { return N - 18; }, function (N) { return N + 18; }, '#8fd18f'));
  s.push(band(function (N) { return N - 26; }, function (N) { return N - 18; }, '#f2df6b'));
  s.push(band(function () { return 0; }, function (N) { return N - 26; }, '#ef8f8f'));
  [0, 50, 100, 150, 200].forEach(function (v) { s.push('<path d="M46,' + Y(v) + ' H506" stroke="var(--line)" stroke-width="1"/><text class="lbl-sm lbl-muted" x="40" y="' + (Y(v) + 4) + '" text-anchor="end">' + v + '</text>'); });
  ['T', 'S', 'N', 'I', 'T'].forEach(function (l, i) { s.push('<text class="lbl lbl-b" x="' + X(i * 90) + '" y="272" text-anchor="middle">' + l + '</text>'); });
  var pts = []; for (var t = 0; t <= 360; t += 3) pts.push([X(t), Y(Figures.rnflPatient(pattern, t))]);
  s.push('<path d="M' + pts.map(pt).join(' L') + '" stroke="#111" stroke-width="2.6" fill="none"/>');
  var avg = 0, k = 0; for (var t2 = 0; t2 < 360; t2 += 2) { avg += Figures.rnflPatient(pattern, t2); k++; } avg /= k;
  // quadrant pie
  var q = [['T', 315, 45], ['S', 45, 135], ['N', 135, 225], ['I', 225, 315]].map(function (Q) {
    var a0 = Q[1], sum = 0, sumN = 0, c = 0; for (var tt = 0; tt < 90; tt += 3) { var th = (a0 + tt) % 360; sum += Figures.rnflPatient(pattern, th); sumN += Figures.rnflNorm(th); c++; }
    var v = sum / c, nv = sumN / c, col = v < nv - 26 ? '#ef8f8f' : v < nv - 18 ? '#f2df6b' : v > nv + 18 ? '#f4f4f4' : '#8fd18f';
    return { l: Q[0], v: Math.round(v), col: col, a0: a0 };
  });
  var pie = '<g transform="translate(470,300)">';
  var pos = { T: [-1, 0], S: [0, -1], N: [1, 0], I: [0, 1] };
  q.forEach(function (Q) {
    var mid = Q.l === 'T' ? 180 : Q.l === 'S' ? 270 : Q.l === 'N' ? 0 : 90;
    pie += '<path d="M0,0 L' + pt(pol(0, 0, 24, mid - 45)) + ' A24 24 0 0 1 ' + pt(pol(0, 0, 24, mid + 45)) + ' Z" fill="' + Q.col + '" stroke="#fff" stroke-width="1"/>';
    pie += '<text class="lbl-sm" x="' + (pos[Q.l][0] * 13) + '" y="' + (pos[Q.l][1] * 13 + 4) + '" text-anchor="middle" style="fill:#111">' + Q.v + '</text>';
  });
  pie += '</g>';
  s.push(pie);
  s.push(fx('<text class="lbl" x="46" y="300">RNFL moyen : <tspan class="lbl-b">') + Math.round(avg) + fx(' µm</tspan> (illustratif)</text>'));
  s.push(fx('<text class="lbl-sm lbl-muted" x="46" y="320">vert 5–95 % · jaune 1–5 % · rouge &lt; 1 % · blanc &gt; 95 %</text>'));
  if (opts.reveal) {
    var rv = { 'inf-thin': [292, fx('pic inférieur effondré')], 'sup-thin': [68, fx('pic supérieur aminci')], 'bi-arcuate': [180, 'deux pics amincis'], diffuse: [180, 'amincissement diffus'], 'red-disease': [120, fx('pics décalés vers T (myopie) : faux positif')], 'green-disease': [292, fx('dans le vert malgré une atteinte')] }[pattern];
    if (rv) s.push(ring(X(rv[0]).toFixed(0), Y(Figures.rnflPatient(pattern, rv[0])).toFixed(0), 26, rv[1], Math.min(330, X(rv[0]) - 100), 40));
  }
  return { svg: '<svg viewBox="0 0 540 340" role="img" aria-label="OCT RNFL schématique">' + s.join('') + '</svg>', cap: fx('Courbe TSNIT de l’épaisseur RNFL péripapillaire vs base normative (schéma).') };
};

/* ---------- Corneal topography (axial curvature) ---------- */
Figures.topoK = function (pattern, x, y) { // x,y in mm (OD: temporal = -x), returns diopters
  var r = Math.sqrt(x * x + y * y), th = Math.atan2(y, x);
  var base = 43.5 - 0.18 * r * r * 0.1, K;
  function tor(amp, axisDeg) { return amp / 2 * Math.cos(2 * (th - axisDeg * Math.PI / 180)); }
  function bump(x0, y0, amp, sd) { return amp * Math.exp(-((x - x0) * (x - x0) + (y - y0) * (y - y0)) / (2 * sd * sd)); }
  switch (pattern) {
    case 'wtr': K = base + tor(3, 90); break;
    case 'atr': K = base + tor(3, 0); break;
    case 'kc-inferior': K = 44.5 + tor(1.6, 70) + bump(-0.6, -1.6, 7.5, 1.25); break;
    case 'kc-central': K = 45 + tor(1, 90) + bump(0, -0.3, 8, 1.05); break;
    case 'pmd': { K = 42.5 + tor(2.6, 0) - 0.4 * r; var band = Math.exp(-Math.pow((r - 3.3) / 0.8, 2)) * (y < 0 ? Math.pow(-y / Math.max(r, 0.01), 1.4) : 0); K += 6.5 * band; break; }
    default: K = base + tor(0.6, 90);
  }
  return K;
};
Figures.topoColor = function (K) {
  var stops = [[36, [30, 40, 150]], [39, [40, 90, 200]], [41, [60, 160, 220]], [42.5, [70, 190, 150]], [44, [120, 200, 80]], [45.5, [230, 220, 60]], [47, [245, 160, 40]], [49, [235, 90, 40]], [52, [200, 30, 40]], [56, [140, 20, 90]]];
  if (K <= stops[0][0]) return stops[0][1];
  for (var i = 1; i < stops.length; i++) if (K <= stops[i][0]) { var a = stops[i - 1], b = stops[i], f = (K - a[0]) / (b[0] - a[0]); return [0, 1, 2].map(function (j) { return Math.round(a[1][j] + (b[1][j] - a[1][j]) * f); }); }
  return stops[stops.length - 1][1];
};
Figures.topo = function (fig, opts) {
  var pattern = fig.pattern || 'normal';
  var kmax = 0, ks = 0, ki = 0, kmin = 99;
  for (var yy = -4.4; yy <= 4.4; yy += 0.2) for (var xx = -4.4; xx <= 4.4; xx += 0.2) { if (xx * xx + yy * yy > 19.4) continue; var K = Figures.topoK(pattern, xx, yy); if (K > kmax) kmax = K; if (K < kmin) kmin = K; }
  for (var a = 0; a < 360; a += 10) { var p = pol(0, 0, 1.5, a); var K2 = Figures.topoK(pattern, p[0], p[1]); if (p[1] > 0) ks += K2; else ki += K2; }
  var isd = (ki - ks) / 18;
  var sim = [Figures.topoK(pattern, 1.5, 0), Figures.topoK(pattern, 0, 1.5)];
  var legend = '';
  [36, 40, 44, 48, 52, 56].forEach(function (k, i) { var c = Figures.topoColor(k); legend += '<rect x="292" y="' + (40 + i * 30) + '" width="18" height="30" fill="rgb(' + c.join(',') + ')"/><text class="lbl-sm" x="316" y="' + (60 + i * 30) + '">' + k + ' D</text>'; });
  var svg = '<div style="position:relative;max-width:420px;margin:0 auto;background:var(--surface)">' +
    '<canvas data-topo="' + pattern + '" width="220" height="220" style="position:absolute;left:5.556%;top:7.692%;width:61.11%;height:84.62%;border-radius:50%"></canvas>' +
    '<svg viewBox="0 0 360 260" role="img" aria-label="Carte topographique schématique" style="position:relative">' +
    '<circle cx="130" cy="130" r="110" fill="none" stroke="var(--ink-3)"/><path d="M20,130 H240 M130,20 V240" stroke="#fff" stroke-width=".8" opacity=".7"/>' +
    '<text class="lbl-sm" x="130" y="14" text-anchor="middle">90°</text><text class="lbl-sm" x="246" y="134">0°</text><text class="lbl-sm lbl-muted" x="6" y="252">T</text><text class="lbl-sm lbl-muted" x="246" y="252">N (OD)</text>' + legend + '</svg></div>' +
    '<div class="row small" style="padding:6px 12px;justify-content:center;gap:16px"><span>Kmax <b class="mono">' + kmax.toFixed(1).replace('.', ',') + ' D</b></span><span>SimK <b class="mono">' + Math.max(sim[0], sim[1]).toFixed(1).replace('.', ',') + ' / ' + Math.min(sim[0], sim[1]).toFixed(1).replace('.', ',') + '</b></span><span>I–S <b class="mono">' + isd.toFixed(1).replace('.', ',') + ' D</b></span></div>';
  return { svg: svg, cap: fx('Carte de courbure axiale schématique (couleurs chaudes = cornée cambrée) — valeurs illustratives.') };
};
Figures.drawTopo = function (cv, pattern) {
  var ctx = cv.getContext('2d'); if (!ctx) return;
  var W = cv.width, img = ctx.createImageData(W, W);
  for (var j = 0; j < W; j++) for (var i = 0; i < W; i++) {
    var x = (i - W / 2) / (W / 2) * 4.5, y = -(j - W / 2) / (W / 2) * 4.5, k = (j * W + i) * 4;
    if (x * x + y * y > 20.25) { img.data[k + 3] = 0; continue; }
    var c = Figures.topoColor(Figures.topoK(pattern, x, y)); img.data[k] = c[0]; img.data[k + 1] = c[1]; img.data[k + 2] = c[2]; img.data[k + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
};

/* ---------- Fluorescein (cobalt blue) ---------- */
Figures.fluo = function (fig, opts) {
  opts = opts || {};
  var pattern = fig.pattern || 'normal', id = Figures.next(), cx = 160, cy = 150, R = 118;
  var s = ['<defs><radialGradient id="' + id + 'g" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1c3a8a"/><stop offset="1" stop-color="#0b1a52"/></radialGradient><filter id="' + id + 'b"><feGaussianBlur stdDeviation="1.1"/></filter><clipPath id="' + id + 'c"><circle cx="' + cx + '" cy="' + cy + '" r="' + R + '"/></clipPath></defs>'];
  s.push('<rect width="320" height="300" fill="#050a22"/><circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="url(#' + id + 'g)"/>');
  s.push('<g clip-path="url(#' + id + 'c)"><circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="#9be15d" opacity=".10"/><path d="M40,262 Q160,250 280,262" stroke="#b5f04b" stroke-width="7" opacity=".55" fill="none"/>');
  var G = '#b5f04b', rnd = U.rng(U.hash(pattern)), dots = function (n, fx, fy) { var o = ''; for (var i = 0; i < n; i++) { var p = fx(rnd(), rnd()); o += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="' + (1.2 + rnd() * 1.3).toFixed(1) + '" fill="' + G + '"/>'; } return o; };
  var g = '';
  switch (pattern) {
    case 'spk-inferior': g = dots(90, function (a, b) { return [cx - 95 + a * 190, cy + 40 + b * 70]; }); break;
    case 'spk-interpalpebral': g = dots(110, function (a, b) { return [cx - 115 + a * 230, cy - 25 + b * 50]; }); break;
    case 'spk-superior': g = dots(80, function (a, b) { return [cx - 80 + a * 160, cy - 110 + b * 55]; }); break;
    case 'dendrite': g = '<path d="M95,170 C 120,150 140,160 160,138 C 175,122 195,128 215,110 M160,138 C 165,160 182,168 190,186 M135,155 C 128,140 130,128 122,116" stroke="' + G + '" stroke-width="5" fill="none" stroke-linecap="round" filter="url(#' + id + 'b)"/>' + [[95, 170], [215, 110], [190, 186], [122, 116]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="6" fill="' + G + '"/>'; }).join(''); break;
    case 'geographic': g = '<path d="M110,120 C 140,100 190,108 205,130 C 222,150 212,182 185,190 C 160,200 120,196 108,172 C 98,155 100,132 110,120 Z" fill="' + G + '" opacity=".85" filter="url(#' + id + 'b)"/><path d="M205,130 l22,-14 M108,172 l-20,10 M185,190 l10,22" stroke="' + G + '" stroke-width="4" stroke-linecap="round"/>'; break;
    case 'pseudodendrite': g = '<path d="M100,160 C 125,150 145,152 165,140 C 185,128 200,132 220,124" stroke="#8fbf4a" stroke-width="7" fill="none" stroke-linecap="round" opacity=".55"/><path d="M165,140 C 170,158 176,168 186,176" stroke="#8fbf4a" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>'; break;
    case 'abrasion': g = '<path d="M120,118 L205,104 L222,160 L150,182 Z" fill="' + G + '" opacity=".9"/>'; break;
    case 'fb-tracking': g = [100, 128, 150, 172, 196, 222].map(function (x, i) { return '<path d="M' + x + ',' + (52 + i % 2 * 8) + ' L' + (x + 3) + ',' + (120 + (i % 3) * 14) + '" stroke="' + G + '" stroke-width="3" stroke-linecap="round"/>'; }).join(''); break;
    case 'ulcer': g = '<circle cx="165" cy="150" r="36" fill="#e9eef2" opacity=".55"/><circle cx="165" cy="150" r="22" fill="' + G + '" opacity=".95" filter="url(#' + id + 'b)"/><path d="M60,250 Q160,232 260,250 L260,268 L60,268 Z" fill="#f4f6ef" opacity=".85"/>'; break;
    case 'seidel': g = '<circle cx="165" cy="140" r="58" fill="#b8620f" opacity=".9"/><circle cx="165" cy="140" r="58" fill="none" stroke="#7a3f08" stroke-width="4" opacity=".7"/>' +
      '<path d="M165,140 C 161,172 170,212 160,264" stroke="' + G + '" stroke-width="9" fill="none" stroke-linecap="round" filter="url(#' + id + 'b)"/><path d="M165,140 C 161,172 170,212 160,264" stroke="#effcc4" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="165" cy="139" r="4.5" fill="#effcc4"/>'; break;
    case 'negative': g = '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="#9be15d" opacity=".28"/><path d="M90,120 C 120,110 130,135 160,126 C 185,118 200,140 232,132 M110,170 C 140,160 150,182 190,176 M130,92 C 150,100 170,88 196,98" stroke="#0b1a52" stroke-width="4" fill="none" stroke-linecap="round"/>' + dots(10, function (a, b) { return [cx - 60 + a * 120, cy - 10 + b * 70]; }).replace(/fill="#b5f04b"/g, 'fill="#0b1a52"'); break;
    default: g = '';
  }
  s.push(g + '</g>');
  s.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#2f4fa8" stroke-width="2"/>');
  if (opts.reveal) {
    var rv = { 'spk-inferior': [160, 222, fx('KPS inférieure')], 'spk-interpalpebral': [160, 150, fx('bande interpalpébrale')], 'spk-superior': [160, 70, fx('KPS supérieure')], dendrite: [160, 140, 'bulbes terminaux'], geographic: [160, 150, fx('ulcère à bords dendritiques')], pseudodendrite: [160, 145, fx('pas de bulbes, prend peu')], abrasion: [170, 140, fx('défaut net, géométrique')], 'fb-tracking': [160, 95, 'stries verticales'], ulcer: [165, 150, fx('infiltrat + défaut')], seidel: [165, 196, 'filet vert vif = fuite'], negative: [160, 130, fx('coloration négative')] }[pattern];
    if (rv) s.push(ring(rv[0], rv[1], 44, rv[2], 40, rv[1] < 150 ? rv[1] + 70 : rv[1] - 56));
  }
  return { svg: '<svg viewBox="0 0 320 300" role="img" aria-label="' + fx('Cornée à la fluorescéine, schéma') + '">' + s.join('') + '</svg>', cap: fx('Fluorescéine sous lumière bleu cobalt (schéma).') };
};

/* ---------- Slit lamp (anterior segment front view) ---------- */
Figures.slit = function (fig, opts) {
  opts = opts || {};
  var pattern = fig.pattern || 'normal', id = Figures.next();
  var cx = 240, cy = 150, ir = 74, pr = pattern === 'pxf' ? 40 : (pattern === 'aacc' ? 34 : 18);
  var s = ['<defs><clipPath id="' + id + 'eye"><path d="M30,150 C 110,40 370,40 450,150 C 370,252 110,252 30,150 Z"/></clipPath><radialGradient id="' + id + 'ir" cx="50%" cy="50%" r="50%"><stop offset=".25" stop-color="#9a6a45"/><stop offset="1" stop-color="#5a3a24"/></radialGradient><filter id="' + id + 'bl"><feGaussianBlur stdDeviation="' + (pattern === 'aacc' ? 2.2 : 0) + '"/></filter></defs>'];
  s.push('<rect width="480" height="300" class="t-skin"/>');
  s.push('<g clip-path="url(#' + id + 'eye)"><rect width="480" height="300" fill="#f8f6f0"/>');
  // conjunctival vessels / injection
  var inj = pattern === 'hypopyon' || pattern === 'aacc' || pattern === 'kp';
  var vs = ''; var r = U.rng(9);
  for (var i = 0; i < (inj ? 40 : 12); i++) { var a = r() * 360, p0 = pol(cx, cy, 200, a), p1 = pol(cx, cy, inj ? 82 : 120, a + (r() - 0.5) * 20); vs += '<path d="M' + pt(p0) + ' Q' + pt(pol(cx, cy, 140, a + 6)) + ' ' + pt(p1) + '" stroke="#d24b45" stroke-width="' + (inj ? 2.2 : 1) + '" fill="none" opacity="' + (inj ? .8 : .45) + '"/>'; }
  if (pattern === 'aacc') vs += '<circle cx="' + cx + '" cy="' + cy + '" r="92" fill="none" stroke="#d9473f" stroke-width="16" opacity=".55"/>';
  s.push(vs);
  if (pattern === 'bleb') s.push('<ellipse cx="' + cx + '" cy="58" rx="74" ry="26" fill="#f4f1ea" stroke="#d9d1c3"/>' + [[220, 54], [244, 50], [262, 60], [232, 64]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#fff" stroke="#d9d1c3"/>'; }).join(''));
  // iris
  s.push('<g filter="url(#' + id + 'bl)"><circle cx="' + cx + '" cy="' + cy + '" r="' + ir + '" fill="url(#' + id + 'ir)"/>');
  var st = ''; for (var k = 0; k < 64; k++) { var aa = k * 360 / 64; st += '<path d="M' + pt(pol(cx, cy, pr + 6, aa)) + ' L' + pt(pol(cx, cy, ir - 4, aa + 3)) + '" stroke="#7a5236" stroke-width="1.3" opacity=".7"/>'; }
  s.push(st);
  if (pattern === 'tid') { s.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + ir + '" fill="#1a0d06" opacity=".85"/>'); for (var t2 = 0; t2 < 26; t2++) { var at = t2 * 360 / 26 + 4; s.push('<path d="M' + pt(pol(cx, cy, 40, at)) + ' L' + pt(pol(cx, cy, 62, at + 1)) + '" stroke="#ff8a3d" stroke-width="3.2" stroke-linecap="round" opacity=".9"/>'); } }
  // pupil / lens
  if (pattern === 'pxf') {
    s.push('<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + pr + '" ry="' + pr + '" fill="#2a2a2a"/>');
    s.push('<circle cx="' + cx + '" cy="' + cy + '" r="17" fill="#e7ece9" opacity=".8"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (pr - 3) + '" fill="none" stroke="#e7ece9" stroke-width="7" stroke-dasharray="3 2" opacity=".85"/>');
    for (var f = 0; f < 10; f++) { var fp = pol(cx, cy, pr + 2, f * 36 + 10); s.push('<circle cx="' + fp[0].toFixed(1) + '" cy="' + fp[1].toFixed(1) + '" r="2" fill="#fff"/>'); }
  } else if (pattern === 'tid') {
    s.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + pr + '" fill="#ff7a2e"/>');
  } else {
    s.push('<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + pr + '" ry="' + (pattern === 'aacc' ? pr + 8 : pr) + '" fill="#0c0c0c"/>');
  }
  if (pattern === 'nvi') { s.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + (pr + 4) + '" fill="none" stroke="#3b1c0c" stroke-width="5"/>'); var nv = '<g stroke="#e3342f" stroke-width="1.4" fill="none">'; for (var v2 = 0; v2 < 18; v2++) { var av = v2 * 20; nv += '<path d="M' + pt(pol(cx, cy, pr + 3, av)) + ' q4,6 ' + (Math.cos(av) * 10).toFixed(1) + ',' + (Math.sin(av) * 12).toFixed(1) + ' t' + (Math.cos(av * 2) * 8).toFixed(1) + ',' + (Math.sin(av) * 10).toFixed(1) + '"/>'; } s.push(nv + '</g>'); }
  if (pattern === 'bleb') s.push('<path d="M' + (cx - 8) + ',' + (cy - ir + 2) + ' L' + (cx + 8) + ',' + (cy - ir + 2) + ' L' + cx + ',' + (cy - ir + 18) + ' Z" fill="#111"/>');
  s.push('</g>');
  // cornea overlays
  if (pattern === 'aacc') s.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + (ir + 6) + '" fill="#e8eef0" opacity=".55"/>');
  if (pattern === 'krukenberg') s.push('<ellipse cx="' + cx + '" cy="' + (cy + 6) + '" rx="7" ry="44" fill="#6b4524" opacity=".75"/>');
  if (pattern === 'kp') { var kp = ''; var r3 = U.rng(4); for (var q = 0; q < 28; q++) { var ky = cy + 10 + r3() * 55, spread = (ky - cy) * 0.9; kp += '<circle cx="' + (cx + (r3() - 0.5) * spread * 1.6).toFixed(1) + '" cy="' + ky.toFixed(1) + '" r="' + (1.5 + r3() * 2.5).toFixed(1) + '" fill="#f6f1e4" stroke="#c9bfa9" stroke-width=".6"/>'; } s.push(kp); }
  if (pattern === 'hypopyon') s.push('<path d="M' + (cx - 56) + ',' + (cy + 52) + ' L' + (cx + 56) + ',' + (cy + 52) + ' A76 76 0 0 1 ' + (cx - 56) + ',' + (cy + 52) + ' Z" fill="#fbf8ee"/><circle cx="' + (cx + 8) + '" cy="' + (cy - 12) + '" r="20" fill="#f1efe6" opacity=".85"/>');
  s.push('<ellipse cx="' + (cx - 26) + '" cy="' + (cy - 30) + '" rx="10" ry="6" fill="#fff" opacity=".9"/>');
  s.push('</g><path d="M30,150 C 110,40 370,40 450,150 C 370,252 110,252 30,150 Z" fill="none" stroke="#8a5a40" stroke-width="3"/>');
  if (opts.reveal) {
    var rv = { hypopyon: [cx, cy + 58, 'niveau de pus (hypopyon)'], pxf: [cx, cy, fx('dépôts en cible sur la capsule')], krukenberg: [cx, cy + 6, 'fuseau pigmentaire vertical'], nvi: [cx, cy, fx('néovaisseaux au rebord pupillaire')], tid: [cx, cy, fx('défects radiaires de transillumination')], aacc: [cx, cy, fx('cornée œdémateuse, pupille semi-dilatée')], bleb: [cx, 58, fx('bulle filtrante supérieure')], kp: [cx, cy + 40, fx('précipités rétrocornéens inférieurs')] }[pattern];
    if (rv) s.push(ring(rv[0], rv[1], pattern === 'bleb' ? 40 : 46, rv[2], 300, rv[1] > 150 ? 280 : 30));
  }
  return { svg: '<svg viewBox="0 0 480 300" role="img" aria-label="' + fx('Segment antérieur à la lampe à fente, schéma') + '">' + s.join('') + '</svg>', cap: fx('Segment antérieur, vue de face (schéma).') };
};

/* ---------- Van Herick ---------- */
Figures.vanherick = function (fig, opts) {
  opts = opts || {};
  var g = fig.grade != null ? fig.grade : 4, CT = 26, gap = [0, 4, 7, 12, 30][g];
  var s = ['<rect width="420" height="230" fill="#05070d"/>'];
  s.push('<path d="M150,10 C 175,70 186,140 190,220" stroke="#e9f0ff" stroke-width="' + CT + '" fill="none" opacity=".85"/>');
  s.push('<path d="M150,10 C 175,70 186,140 190,220" stroke="#ffffff" stroke-width="3" fill="none"/>');
  var ix = 190 + CT / 2 + gap;
  s.push('<path d="M' + ix + ',90 L' + (ix + 6) + ',220" stroke="#c99a6b" stroke-width="14" stroke-linecap="round"/>');
  s.push('<path d="M' + (ix + 7) + ',90 L' + (ix + 13) + ',220" stroke="#7a5236" stroke-width="12"/>');
  s.push(fx('<text class="lbl-sm" x="14" y="26" style="fill:#c9d6f5">fente fine à 60°,</text><text class="lbl-sm" x="14" y="42" style="fill:#c9d6f5">au limbe temporal</text>'));
  s.push(fx('<text class="lbl-sm" x="262" y="104" style="fill:#c9d6f5">EC = épaisseur cornéenne</text><text class="lbl-sm" x="262" y="122" style="fill:#c9d6f5">PCA = profondeur</text><text class="lbl-sm" x="262" y="138" style="fill:#c9d6f5">périphérique de la chambre</text>'));
  s.push('<text class="lbl lbl-b" x="262" y="176" style="fill:#fff">Grade ' + g + ' : ' + [fx('fermé (contact)'), '< 1/4 EC', '= 1/4 EC', '1/4–1/2 EC', '≥ 1 EC'][g] + '</text>');
  if (opts.reveal) s.push(ring(190 + CT / 2 + gap / 2, 175, 22, fx('PCA'), 120, 210));
  return { svg: '<svg viewBox="0 0 420 230" role="img" aria-label="Technique de Van Herick, schéma">' + s.join('') + '</svg>', cap: fx('Van Herick : comparer la chambre périphérique à l’épaisseur de la cornée.') };
};

/* accessibility: a diagram whose structures are buttons is a group, not an image (axe nested-interactive) */
(function () {
  Object.keys(Figures).forEach(function (k) {
    var f = Figures[k]; if (typeof f !== 'function' || k === 'render' || k === 'hydrate' || f._grp) return;
    var w = function () { var r = f.apply(this, arguments); if (r && typeof r.svg === 'string' && r.svg.indexOf('role="button"') > 0) r.svg = r.svg.replace('role="img"', 'role="group"'); return r; };
    w._grp = true; Object.keys(f).forEach(function (p) { w[p] = f[p]; }); Figures[k] = w;
  });
})();
