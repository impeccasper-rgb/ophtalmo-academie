/* ===== Figures (schematic SVG) — part A: helpers, eye cross-section, cornea layers, angle section, adnexa ===== */
'use strict';
var Figures = {
  uid: 0,
  next: function () { return 'f' + (++Figures.uid); },
  // public: wrapped figure with caption
  render: function (fig, opts) {
    opts = opts || {};
    if (!fig || !fig.type) return '';
    if (fig.type === 'photo') {
      var e = D.cat(fig.id); if (!e) return '';
      return '<div class="qfig">' + Photo.card({ id: fig.id, caption: opts.caption || e.title, look: opts.look || '', reveal: [] }, { hideCaption: !!opts.hideCaption, quiz: !!opts.quiz }) + '</div>';
    }
    var fn = Figures[fig.type];
    if (typeof fn !== 'function') return '';
    var out = fn(fig, opts);
    return '<figure class="fig" style="margin:0" data-figtype="' + fig.type + '">' +
      (opts.tools ? '<div class="fig-tools">' + opts.tools + '</div>' : '') +
      '<div class="fig-body">' + out.svg + '</div>' +
      '<figcaption class="fig-cap"><span>' + (opts.caption ? U.md(opts.caption) : U.esc(out.cap || '')) + fx('</span><span class="fig-cap-r"><span class="schema-badge">Schéma pédagogique — pas une photographie</span>') + (opts.nozoom ? '' : fx('<button type="button" class="btn xs" data-act="figzoom">Agrandir</button>')) + '</span></figcaption></figure>';
  },
  hydrate: function (root) {
    U.$$('canvas[data-topo]', root).forEach(function (cv) { Figures.drawTopo(cv, cv.getAttribute('data-topo')); });
    U.$$('canvas[data-spec]', root).forEach(function (cv) { if (window.Sims && Sims.drawSpec) Sims.drawSpec(cv); });
  }
};
function pol(cx, cy, r, deg) { var a = deg * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
function pt(p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }
function mirrorY(points, cy) { return points.map(function (p) { return [p[0], 2 * cy - p[1]]; }); }
function poly(points) { return 'M' + points.map(pt).join(' L') + ' Z'; }
function smooth(points, closed) {
  // Catmull-Rom → cubic Bézier
  var p = points, n = p.length, d = 'M' + pt(p[0]);
  for (var i = 0; i < (closed ? n : n - 1); i++) {
    var p0 = p[(i - 1 + n) % n], p1 = p[i], p2 = p[(i + 1) % n], p3 = p[(i + 2) % n];
    if (!closed) { if (i === 0) p0 = p1; if (i === n - 2) p3 = p2; }
    var c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ' C' + pt(c1) + ' ' + pt(c2) + ' ' + pt(p2);
  }
  return d + (closed ? ' Z' : '');
}
function ringSector(cx, cy, r0, r1, a0, a1) { // clockwise from a0 to a1 (deg)
  var span = ((a1 - a0) % 360 + 360) % 360, large = span > 180 ? 1 : 0;
  var A = pol(cx, cy, r1, a0), B = pol(cx, cy, r1, a1), C = pol(cx, cy, r0, a1), Dd = pol(cx, cy, r0, a0);
  return 'M' + pt(A) + ' A' + r1 + ' ' + r1 + ' 0 ' + large + ' 1 ' + pt(B) + ' L' + pt(C) + ' A' + r0 + ' ' + r0 + ' 0 ' + large + ' 0 ' + pt(Dd) + ' Z';
}
function arcD(cx, cy, r, a0, a1, cw) { var span = Math.abs(a1 - a0), large = span > 180 ? 1 : 0; return 'M' + pt(pol(cx, cy, r, a0)) + ' A' + r + ' ' + r + ' 0 ' + large + ' ' + (cw ? 1 : 0) + ' ' + pt(pol(cx, cy, r, a1)); }
function label(x, y, text, tx, ty, anchor, id, cls) {
  var lead = (tx != null) ? '<path class="lead" d="M' + x.toFixed(1) + ',' + y.toFixed(1) + ' L' + tx.toFixed(1) + ',' + ty.toFixed(1) + '"/><circle cx="' + tx.toFixed(1) + '" cy="' + ty.toFixed(1) + '" r="2.2" fill="var(--ink-3)"/>' : '';
  return '<g class="lbl-g"' + (id ? ' data-for="' + id + '"' : '') + '>' + lead + '<text class="' + (cls || 'lbl') + '" x="' + x.toFixed(1) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="' + (anchor || 'start') + '">' + U.esc(text) + '</text></g>';
}
/* tiny structures get an invisible 24 px (screen) stroke around their shapes so the tap target is at least 24 px */
var SMALL_HIT = { fovea: 1, macula: 1, papille: 1, 'lame-criblee': 1, 'ora-serrata': 1, acr: 1, vcr: 1, schlemm: 1, zonules: 1, limbe: 1, schwalbe: 1, eperon: 1, 'points-lacrymaux': 1, canalicules: 1 };
function grp(id, inner, hl, hit, extraCls) {
  var cls = (hit ? 'hit ' : '') + (hl && hl.indexOf(id) >= 0 ? 'hl ' : '') + (extraCls || '');
  var pad = hit && SMALL_HIT[id] ? '<g class="hit-pad" aria-hidden="true">' + inner + '</g>' : '';
  return '<g data-anat="' + id + '" class="' + cls.trim() + '"' + (hit ? ' role="button" tabindex="0" aria-label="' + U.esc(Figures.anatName(id)) + '"' : '') + '>' + pad + inner + '</g>';
}
Figures.anatName = function (id) {
  var A = (typeof OPH !== 'undefined' && OPH.A) || {}, keys = ['anatomy', 'cornea', 'angle', 'disc', 'annexes'];
  for (var i = 0; i < keys.length; i++) { var e = A[keys[i]] && A[keys[i]][id]; if (e && e.t) return e.t; }
  return String(id).replace(/-/g, ' ');
};

/* ---------- Eye cross-section ---------- */
Figures.eyeGeom = (function () {
  var cx = 560, cy = 360;
  var g = { cx: cx, cy: cy, Ro: 240, Ri: 226, Rch: 219, Rre: 211 };
  g.limbO = [349.4, 245]; g.limbI = [370.5, 250]; g.spur = [381, 236]; g.root = [392, 241];
  g.disc = 12; // optic disc angle (deg, below axis)
  return g;
})();
Figures.eye = function (fig, opts) {
  opts = opts || {};
  var G = Figures.eyeGeom, cx = G.cx, cy = G.cy, hl = fig.highlight || [], hit = !!opts.interactive;
  var cls = 'eye-svg' + (opts.labels === false ? ' no-labels' : '') + (opts.vasc ? ' show-vasc' : '') + (opts.nerv ? ' show-nerv' : '') + (opts.flow ? ' show-flow' : '') + (opts.tunics ? ' tunics' : '');
  var s = [];
  // vitreous background
  s.push(grp('vitre', '<circle class="t-vitreous" cx="' + cx + '" cy="' + cy + '" r="' + G.Rre + '"/>', hl, hit));
  // retina & choroid (ora 254.6° → 105.4°, through the back)
  var ora = 254.6, oraB = 105.4;
  s.push(grp('choroide', '<path class="t-choroid tun-v" d="' + ringSector(cx, cy, G.Rch, G.Ri, ora, oraB) + '"/>', hl, hit));
  s.push(grp('retine', '<path class="t-retina tun-n" d="' + ringSector(cx, cy, G.Rre, G.Rch, ora, oraB) + '"/>', hl, hit));
  // macula & fovea
  s.push(grp('macula', '<path d="' + arcD(cx, cy, G.Rre + 3, -9, 6, true) + '" stroke="#e9c44a" stroke-width="5" fill="none" stroke-linecap="round"/>', hl, hit));
  var fv = pol(cx, cy, G.Rre, 0);
  s.push(grp('fovea', '<path d="M' + (fv[0] - 12).toFixed(1) + ',' + (fv[1] - 7) + ' Q' + (fv[0] + 7).toFixed(1) + ',' + fv[1] + ' ' + (fv[0] - 12).toFixed(1) + ',' + (fv[1] + 7) + '" fill="var(--t-vitreous)" stroke="#c9a33a" stroke-width="1.5"/>', hl, hit));
  // sclera
  var oT = G.limbO, oB = [oT[0], 2 * cy - oT[1]], iT = G.limbI, iB = [iT[0], 2 * cy - iT[1]];
  var spT = G.spur, spB = [spT[0], 2 * cy - spT[1]];
  var inT = [380, cy - Math.sqrt(G.Ri * G.Ri - 180 * 180)], inB = [380, cy + Math.sqrt(G.Ri * G.Ri - 180 * 180)];
  var scl = 'M' + pt(oT) + ' A240 240 0 1 1 ' + pt(oB) + ' L' + pt(iB) + ' L' + pt(spB) + ' L' + pt(inB) + ' A226 226 0 1 0 ' + pt(inT) + ' L' + pt(spT) + ' L' + pt(iT) + ' Z';
  s.push(grp('sclere', '<path class="t-sclera tun-f" d="' + scl + '"/>', hl, hit));
  // ciliary body (top half then mirror)
  var cbTop = [spT];
  for (var a = 217.6; a <= 254.6; a += 3) cbTop.push(pol(cx, cy, G.Ri - 1, a));
  var inner = [pol(cx, cy, 216, 254.6), pol(cx, cy, 214, 246), pol(cx, cy, 211, 238), pol(cx, cy, 206, 233), pol(cx, cy, 198, 230.5), pol(cx, cy, 205, 228), pol(cx, cy, 196, 225.5), pol(cx, cy, 203, 223), pol(cx, cy, 197, 220.5), pol(cx, cy, 205, 218), G.root];
  var cb = cbTop.concat(inner);
  var cbB = mirrorY(cb, cy);
  s.push(grp('corps-ciliaire', '<path class="t-ciliary tun-v" d="' + smooth(cb, true) + '"/><path class="t-ciliary tun-v" d="' + smooth(cbB, true) + '"/>', hl, hit));
  // ciliary processes highlight (tips)
  var procT = [pol(cx, cy, 206, 233), pol(cx, cy, 198, 230.5), pol(cx, cy, 205, 228), pol(cx, cy, 196, 225.5), pol(cx, cy, 203, 223), pol(cx, cy, 197, 220.5), pol(cx, cy, 205, 218)];
  s.push(grp('proces-ciliaires', '<path d="' + smooth(procT, false) + '" stroke="var(--t-ciliary-2)" stroke-width="5" fill="none" stroke-linecap="round"/><path d="' + smooth(mirrorY(procT, cy), false) + '" stroke="var(--t-ciliary-2)" stroke-width="5" fill="none" stroke-linecap="round"/>', hl, hit));
  // posterior chamber + anterior chamber (aqueous)
  var irisFrontT = [G.root, [388.5, 245], [380, 270], [371, 300], [366.5, 322], [367, 330]];
  var irisBackT = [[371.5, 330], [373.5, 322], [378.5, 300], [387, 272], [394, 248], G.root];
  var lensFront = function (y) { return 570 - Math.sqrt(200 * 200 - (y - cy) * (y - cy)); };
  var pcT = [[371.5, 330], [373.5, 322], [378.5, 300], [387, 272], [394, 248], pol(cx, cy, 205, 218), pol(cx, cy, 197, 220.5), [400, 263], [391.4, 270], [lensFront(300), 300], [lensFront(330), 330]];
  s.push(grp('chambre-posterieure', '<path class="t-aqueous" d="' + poly(pcT) + '"/><path class="t-aqueous" d="' + poly(mirrorY(pcT, cy)) + '"/>', hl, hit));
  var acPts = [iT].concat(irisFrontT.slice(1)).concat([[lensFront(345), 345], [lensFront(360), 360]]);
  var acPath = 'M' + pt(iT) + ' A130 130 0 0 0 ' + pt(iB) + ' L' + mirrorY(acPts.slice(1), cy).reverse().map(pt).join(' L') + ' L' + acPts.slice(1).map(pt).join(' L') + ' Z';
  s.push(grp('chambre-anterieure', '<path class="t-aqueous" d="' + acPath + '"/>', hl, hit));
  // lens + zonules
  var lens = 'M391.4,270 Q400.4,261 409.4,270 A120 120 0 0 1 409.4,450 Q400.4,459 391.4,450 A200 200 0 0 1 391.4,270 Z';
  s.push(grp('cristallin', '<path class="t-lens" d="' + lens + '"/><ellipse cx="410" cy="360" rx="20" ry="52" fill="var(--t-lens-edge)" opacity=".18"/>', hl, hit));
  var zon = '';
  [[pol(cx, cy, 198, 230.5), [392, 271]], [pol(cx, cy, 196, 225.5), [398, 265]], [pol(cx, cy, 197, 220.5), [405, 266]], [pol(cx, cy, 203, 223), [409, 271]], [pol(cx, cy, 205, 228), [395, 268]]].forEach(function (z) {
    zon += '<path class="t-zonule" d="M' + pt(z[0]) + ' L' + pt(z[1]) + '"/><path class="t-zonule" d="M' + pt([z[0][0], 2 * cy - z[0][1]]) + ' L' + pt([z[1][0], 2 * cy - z[1][1]]) + '"/>';
  });
  s.push(grp('zonules', zon, hl, hit));
  // iris
  var irisT = irisFrontT.concat(irisBackT.slice(0, -1));
  s.push(grp('iris', '<path class="t-iris tun-v" d="' + smooth(irisT, true) + '"/><path class="t-iris tun-v" d="' + smooth(mirrorY(irisT, cy), true) + '"/>' +
    '<path d="' + smooth(irisBackT, false) + '" stroke="#2c1a10" stroke-width="2" fill="none"/><path d="' + smooth(mirrorY(irisBackT, cy), false) + '" stroke="#2c1a10" stroke-width="2" fill="none"/>', hl, hit));
  s.push(grp('pupille', '<rect x="362" y="331" width="12" height="58" rx="5" fill="none" stroke="var(--ink-3)" stroke-dasharray="3 3"/>', hl, hit));
  // cornea
  var corn = 'M' + pt(oT) + ' A156 156 0 0 0 ' + pt(oB) + ' L' + pt(iB) + ' A130 130 0 0 1 ' + pt(iT) + ' Z';
  s.push(grp('cornee', '<path class="t-cornea tun-f" d="' + corn + '"/>', hl, hit));
  // angle region, trabeculum, Schlemm
  s.push(grp('trabeculum', '<path d="M370.5,250 L381,236.5 L384.5,240 L373.5,252.5 Z" class="t-tm"/><path d="M370.5,470 L381,483.5 L384.5,480 L373.5,467.5 Z" class="t-tm"/>', hl, hit));
  s.push(grp('schlemm', '<ellipse cx="379" cy="243" rx="2.6" ry="5" transform="rotate(38 379 243)" class="t-schlemm"/><ellipse cx="379" cy="477" rx="2.6" ry="5" transform="rotate(-38 379 477)" class="t-schlemm"/>', hl, hit));
  s.push(grp('angle', '<circle cx="377" cy="245" r="12" fill="none" stroke="var(--cobalt)" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="377" cy="475" r="12" fill="none" stroke="var(--cobalt)" stroke-width="1.5" stroke-dasharray="3 3"/>', hl, hit));
  s.push(grp('limbe', '<path d="M' + pt(oT) + ' L' + pt(iT) + '" stroke="var(--t-sclera-edge)" stroke-width="3"/><path d="M' + pt(oB) + ' L' + pt(iB) + '" stroke="var(--t-sclera-edge)" stroke-width="3"/>', hl, hit));
  // conjunctiva
  s.push(grp('conjonctive', '<path class="t-conj" d="' + arcD(cx, cy, 245, 208.6, 246, true) + '"/><path class="t-conj" d="' + arcD(cx, cy, 245, 151.4, 114, false) + '"/>', hl, hit));
  // optic nerve (sheath + nerve), lamina, papilla
  var d0 = pol(cx, cy, G.Rre - 2, G.disc), d1 = pol(cx, cy, 246, G.disc);
  var nerveD = 'M' + pt(d0) + ' L' + pt(d1) + ' C 850,418 900,404 992,392';
  s.push(grp('nerf-optique', '<path d="' + nerveD + '" stroke="var(--t-nerve-edge)" stroke-width="66" fill="none" stroke-linecap="butt" opacity=".55"/><path d="' + nerveD + '" stroke="var(--t-nerve)" stroke-width="52" fill="none" stroke-linecap="butt"/>' +
    '<path d="M' + pt(d0) + ' L' + pt(pol(cx, cy, 236, G.disc)) + '" stroke="var(--t-nerve)" stroke-width="34" fill="none"/>', hl, hit));
  var lam = ''; for (var k = -2; k <= 2; k++) { var c0 = pol(cx, cy, 228 + k * 3, G.disc), nx = -Math.sin(G.disc * Math.PI / 180), ny = Math.cos(G.disc * Math.PI / 180); lam += '<path d="M' + (c0[0] - nx * 16).toFixed(1) + ',' + (c0[1] - ny * 16).toFixed(1) + ' L' + (c0[0] + nx * 16).toFixed(1) + ',' + (c0[1] + ny * 16).toFixed(1) + '" stroke="var(--t-nerve-edge)" stroke-width="1.6"/>'; }
  s.push(grp('lame-criblee', lam, hl, hit));
  s.push(grp('papille', '<path d="M' + pt(pol(cx, cy, G.Rre - 1, G.disc - 4.2)) + ' Q' + pt(pol(cx, cy, G.Rre + 10, G.disc)) + ' ' + pt(pol(cx, cy, G.Rre - 1, G.disc + 4.2)) + '" stroke="#f6d9a8" stroke-width="6" fill="none"/>', hl, hit));
  // extraocular muscles
  var mT = [pol(cx, cy, 252, 236), pol(cx, cy, 257, 262), pol(cx, cy, 263, 285), [930, 228], [975, 318], [975, 333], [922, 246], pol(cx, cy, 245, 285), pol(cx, cy, 242, 262), pol(cx, cy, 241, 236)];
  s.push(grp('muscles-droits', '<path class="t-muscle" d="' + smooth(mT, true) + '" opacity=".9"/><path class="t-muscle" d="' + smooth(mirrorY(mT, cy).map(function (p) { return [p[0], p[1] + (p[0] > 900 ? 40 : 0)]; }), true) + '" opacity=".9"/>', hl, hit));
  // vascular group
  var v = '';
  v += grp('acr', '<path class="t-artery" stroke-width="3.2" d="M' + pt(pol(cx, cy, G.Rre, G.disc)) + ' L' + pt(pol(cx, cy, 246, G.disc - 1.2)) + ' C 850,412 870,410 880,412 C 892,415 900,440 905,468"/>', hl, hit);
  v += grp('vcr', '<path class="t-vein" stroke-width="3.6" d="M' + pt(pol(cx, cy, G.Rre, G.disc + 1.6)) + ' L' + pt(pol(cx, cy, 246, G.disc + 1.4)) + ' C 850,424 864,424 872,424 C 884,428 888,446 890,470"/>', hl, hit);
  v += grp('arteres-ciliaires-post', '<path class="t-artery" stroke-width="2.4" d="' + arcD(cx, cy, 222.5, 352, 222, false) + '"/><path class="t-artery" stroke-width="2.4" d="' + arcD(cx, cy, 222.5, 30, 138, true) + '"/>' +
    '<path class="t-artery" stroke-width="2.2" d="M' + pt(pol(cx, cy, 256, 3)) + ' L' + pt(pol(cx, cy, 224, 3)) + '"/><path class="t-artery" stroke-width="2.2" d="M' + pt(pol(cx, cy, 256, 22)) + ' L' + pt(pol(cx, cy, 224, 22)) + '"/>', hl, hit);
  v += grp('arteres-ciliaires-ant', '<path class="t-artery" stroke-width="2.2" d="M' + pt(pol(cx, cy, 254, 236)) + ' Q' + pt(pol(cx, cy, 246, 226)) + ' ' + pt(pol(cx, cy, 222, 222)) + '"/><path class="t-artery" stroke-width="2.2" d="M' + pt(pol(cx, cy, 254, 124)) + ' Q' + pt(pol(cx, cy, 246, 134)) + ' ' + pt(pol(cx, cy, 222, 138)) + '"/>', hl, hit);
  v += grp('veines-vortiqueuses', '<path class="t-vein" stroke-width="3" d="M' + pt(pol(cx, cy, 219, 278)) + ' L' + pt(pol(cx, cy, 258, 287)) + '"/><path class="t-vein" stroke-width="3" d="M' + pt(pol(cx, cy, 219, 82)) + ' L' + pt(pol(cx, cy, 258, 73)) + '"/>', hl, hit);
  s.push('<g class="g-vasc">' + v + '</g>');
  // nerves group
  var n = '';
  n += grp('nerfs-ciliaires-longs', '<path class="t-nfib" stroke-width="2.2" stroke-dasharray="1 0" d="' + arcD(cx, cy, 224.5, 356, 213, false) + '"/><path class="t-nfib" stroke-width="2.2" d="' + arcD(cx, cy, 224.5, 26, 147, true) + '"/>', hl, hit);
  n += grp('nerfs-ciliaires-courts', '<ellipse cx="880" cy="336" rx="11" ry="7" fill="var(--t-nervefib)"/><path class="t-nfib" stroke-width="2" d="M870,334 Q830,320 ' + pt(pol(cx, cy, 246, 352)) + '"/><path class="t-nfib" stroke-width="2" d="M870,338 Q830,345 ' + pt(pol(cx, cy, 246, 3)) + '"/><path class="t-nfib" stroke-width="1.6" d="M890,333 L960,325"/>', hl, hit);
  s.push('<g class="g-nerv">' + n + '</g>');
  // aqueous flow
  s.push('<g class="g-flow"><path class="flow" d="M' + pt(pol(cx, cy, 200, 226)) + ' Q 392,262 380,300 Q 370,326 362,336 Q 330,330 330,300 Q 336,268 372,252"/><path class="flow-u" d="M374,256 Q 388,250 ' + pt(pol(cx, cy, 214, 232)) + ' Q ' + pt(pol(cx, cy, 222, 246)) + ' ' + pt(pol(cx, cy, 222, 262)) + '"/></g>');
  // labels
  var lb = [];
  function Lb(id, text, x, y, tx, ty, anchor) { lb.push(label(x, y, text, tx, ty, anchor, id)); }
  Lb('conjonctive', fx('Conjonctive'), 250, 160, 372, 204, 'end');
  Lb('limbe', fx('Limbe'), 250, 205, 351, 246, 'end');
  Lb('angle', fx('Angle iridocornéen'), 250, 248, 371, 249, 'end');
  Lb('cornee', fx('Cornée'), 250, 292, 302, 318, 'end');
  Lb('chambre-anterieure', fx('Chambre antérieure'), 250, 340, 334, 345, 'end');
  Lb('pupille', fx('Pupille'), 250, 384, 366, 360, 'end');
  Lb('iris', fx('Iris'), 250, 428, 376, 420, 'end');
  Lb('trabeculum', fx('Trabéculum'), 250, 470, 377, 473, 'end');
  Lb('schlemm', fx('Canal de Schlemm'), 250, 512, 379, 478, 'end');
  Lb('chambre-posterieure', fx('Chambre postérieure'), 250, 554, 389, 440, 'end');
  Lb('zonules', fx('Zonules'), 250, 596, 403, 456, 'end');
  Lb('cristallin', fx('Cristallin'), 330, 680, 420, 420, 'middle');
  Lb('corps-ciliaire', fx('Corps ciliaire'), 300, 52, 420, 202, 'start');
  Lb('proces-ciliaires', fx('Procès ciliaires'), 300, 82, 412, 236, 'start');
  Lb('ora-serrata', fx('Ora serrata'), 450, 34, 503, 152, 'start');
  Lb('muscles-droits', fx('Muscle droit'), 560, 66, 600, 108, 'start');
  Lb('veines-vortiqueuses', fx('Veine vortiqueuse'), 640, 34, 595, 136, 'start');
  Lb('sclere', fx('Sclère'), 740, 92, 690, 158, 'start');
  Lb('choroide', fx('Choroïde'), 820, 150, 735, 215, 'start');
  Lb('retine', fx('Rétine'), 845, 200, 756, 270, 'start');
  Lb('nerfs-ciliaires-courts', fx('Nerfs ciliaires courts (ganglion ciliaire)'), 990, 300, 884, 333, 'end');
  Lb('macula', fx('Macula'), 845, 252, 772, 330, 'start');
  Lb('fovea', fx('Fovéa'), 690, 300, 768, 360, 'start');
  Lb('vitre', fx('Vitré'), 600, 372, null, null, 'middle');
  Lb('papille', fx('Papille'), 700, 470, 764, 403, 'start');
  Lb('lame-criblee', fx('Lame criblée'), 690, 506, 784, 412, 'start');
  Lb('nerf-optique', fx('Nerf optique'), 985, 450, 960, 400, 'end');
  Lb('acr', fx('Artère centrale de la rétine'), 985, 500, 902, 462, 'end');
  Lb('vcr', fx('Veine centrale de la rétine'), 985, 528, 889, 470, 'end');
  Lb('arteres-ciliaires-post', fx('Artères ciliaires postérieures'), 985, 596, 775, 442, 'end');
  Lb('arteres-ciliaires-ant', fx('Artères ciliaires antérieures'), 540, 690, 450, 584, 'middle');
  Lb('nerfs-ciliaires-longs', fx('Nerfs ciliaires longs'), 760, 690, 672, 557, 'middle');
  s.push('<g class="g-labels">' + lb.join('') + '</g>');
  var vb = opts.viewBox || '0 0 1000 720';
  return { svg: '<svg class="' + cls + '" viewBox="' + vb + fx('" role="img" aria-label="Coupe schématique de l’œil" data-vb="0 0 1000 720">') + s.join('') + '</svg>', cap: fx('Coupe horizontale schématique du globe (antérieur à gauche).') };
};

/* ---------- Cornea layers ---------- */
Figures.cornea = function (fig, opts) {
  opts = opts || {};
  var hl = fig.highlight || [], hit = !!opts.interactive;
  var edema = fig.edema || 'none', gut = !!fig.guttae, scar = !!fig.scar;
  var stromaGain = opts.stromaGain != null ? opts.stromaGain : (edema === 'stromal' || edema === 'both' ? 0.55 : 0);
  var epiE = opts.epiEdema != null ? opts.epiEdema : (edema === 'epithelial' || edema === 'both' ? 0.8 : 0);
  var prop = !!opts.proportional;
  // layer heights (px)
  var H = prop ? { film: 4, epithelium: 22, bowman: 3, stroma: 196, dua: 3, descemet: 5, endothelium: 3 } : { film: 10, epithelium: 64, bowman: 9, stroma: 150, dua: 7, descemet: 16, endothelium: 14 };
  H.stroma = H.stroma * (1 + stromaGain);
  H.epithelium = H.epithelium * (1 + epiE * 0.35);
  var W = 500, x0 = 20, y = 18, s = [], yy = {};
  var order = ['film', 'epithelium', 'bowman', 'stroma', 'dua', 'descemet', 'endothelium'];
  order.forEach(function (k) { yy[k] = [y, y + H[k]]; y += H[k]; });
  var total = y + 18;
  function L(id, inner) { return grp(id, inner, hl, hit).replace('data-anat=', 'data-layer='); }
  // film
  s.push(L('film', '<rect x="' + x0 + '" y="' + yy.film[0] + '" width="' + W + '" height="' + H.film + '" fill="#9fd8f0" opacity=".7"/>'));
  // epithelium: cell rows
  var e = '<rect x="' + x0 + '" y="' + yy.epithelium[0] + '" width="' + W + '" height="' + H.epithelium + '" fill="#f4d7cf"/>';
  if (!prop) {
    var rows = 5, rh = H.epithelium / rows;
    for (var r = 0; r < rows; r++) {
      var cw = r === rows - 1 ? 12 : (r === 0 ? 36 : 22), ch = rh - 2, yo = yy.epithelium[0] + r * rh + 1;
      for (var cxp = x0 + (r % 2 ? cw / 2 : 0); cxp < x0 + W - 2; cxp += cw) {
        var w2 = Math.min(cw - 2, x0 + W - cxp - 1); if (w2 < 3) continue;
        e += '<rect x="' + cxp.toFixed(1) + '" y="' + yo.toFixed(1) + '" width="' + w2.toFixed(1) + '" height="' + ch.toFixed(1) + '" rx="' + Math.min(5, ch / 2).toFixed(1) + '" fill="none" stroke="#d29a8d" stroke-width="1"/>';
      }
    }
  }
  if (epiE > 0.05) {
    var rnd = U.rng(7), nb = Math.round(6 + epiE * 18);
    for (var b = 0; b < nb; b++) { var bx = x0 + 20 + rnd() * (W - 40), by = yy.epithelium[0] + H.epithelium * (0.55 + rnd() * 0.35), br = 3 + rnd() * (4 + epiE * 8); e += '<circle cx="' + bx.toFixed(1) + '" cy="' + by.toFixed(1) + '" r="' + br.toFixed(1) + '" fill="#e9f6fb" stroke="#9cc6d8" stroke-width="1"/>'; }
    if (epiE > 0.6) e += '<path d="M' + (x0 + 300) + ',' + yy.epithelium[0] + ' q30,-14 60,0" fill="#e9f6fb" stroke="#9cc6d8"/>';
  }
  s.push(L('epithelium', e));
  // Bowman
  var bw = '<rect x="' + x0 + '" y="' + yy.bowman[0] + '" width="' + W + '" height="' + H.bowman + '" fill="#e6c9a8"/>';
  if (scar) bw += '<rect x="' + (x0 + 190) + '" y="' + (yy.bowman[0] - 1) + '" width="46" height="' + (H.bowman + 2) + '" fill="#f4d7cf"/>';
  s.push(L('bowman', bw));
  // stroma: lamellae + keratocytes
  var st = '<rect x="' + x0 + '" y="' + yy.stroma[0] + '" width="' + W + '" height="' + H.stroma + '" fill="' + (stromaGain > 0.05 ? '#e8eef3' : '#f6efe3') + '"/>';
  var nl = prop ? 18 : 14, lh = H.stroma / nl, rr = U.rng(3);
  for (var i = 1; i < nl; i++) {
    var ly = yy.stroma[0] + i * lh, wav = stromaGain * 6;
    st += '<path d="M' + x0 + ',' + ly.toFixed(1) + ' C ' + (x0 + 120) + ',' + (ly - wav).toFixed(1) + ' ' + (x0 + 260) + ',' + (ly + wav).toFixed(1) + ' ' + (x0 + W) + ',' + ly.toFixed(1) + '" stroke="#d8c9ae" stroke-width="1" fill="none"/>';
    if (i % 2 === 0) for (var kx = 0; kx < 5; kx++) { var kxx = x0 + 30 + rr() * (W - 60); st += '<path d="M' + kxx.toFixed(1) + ',' + (ly + lh / 2).toFixed(1) + ' q8,-3 16,0 q-8,3 -16,0" fill="#b89f7c"/>'; }
  }
  if (stromaGain > 0.05) { for (var q = 0; q < Math.round(stromaGain * 14); q++) st += '<ellipse cx="' + (x0 + 30 + rr() * (W - 60)).toFixed(1) + '" cy="' + (yy.stroma[0] + 10 + rr() * (H.stroma - 20)).toFixed(1) + '" rx="' + (8 + rr() * 12).toFixed(1) + '" ry="3" fill="#cfe6f2" opacity=".9"/>'; }
  if (scar) st += '<path d="M' + (x0 + 170) + ',' + yy.stroma[0] + ' C ' + (x0 + 160) + ',' + (yy.stroma[0] + 40) + ' ' + (x0 + 270) + ',' + (yy.stroma[0] + 50) + ' ' + (x0 + 255) + ',' + yy.stroma[0] + ' Z" fill="#ffffff" opacity=".92"/>';
  s.push(L('stroma', st));
  s.push(L('dua', '<rect x="' + x0 + '" y="' + yy.dua[0] + '" width="' + W + '" height="' + H.dua + '" fill="#d9c7a0"/>'));
  var de = '<rect x="' + x0 + '" y="' + yy.descemet[0] + '" width="' + W + '" height="' + H.descemet + '" fill="#c9b1d9"/>';
  if (stromaGain > 0.3) for (var f2 = 0; f2 < 4; f2++) de += '<path d="M' + (x0 + 80 + f2 * 110) + ',' + yy.descemet[0] + ' l12,' + H.descemet + '" stroke="#7a5e93" stroke-width="1.5"/>';
  s.push(L('descemet', de));
  // endothelium + guttae
  var en = '<rect x="' + x0 + '" y="' + yy.endothelium[0] + '" width="' + W + '" height="' + H.endothelium + '" fill="#f1cfa1"/>';
  var cellW = gut ? 46 : 26;
  for (var c = x0; c < x0 + W - 4; c += cellW) en += '<rect x="' + (c + 1).toFixed(1) + '" y="' + (yy.endothelium[0] + 1).toFixed(1) + '" width="' + (Math.min(cellW, x0 + W - c) - 2).toFixed(1) + '" height="' + (H.endothelium - 2).toFixed(1) + '" rx="3" fill="none" stroke="#c99b5c" stroke-width="1"/>';
  if (gut) { var gx = [60, 125, 175, 240, 300, 345, 410, 465]; gx.forEach(function (g) { en += '<path d="M' + (x0 + g - 9) + ',' + yy.descemet[1] + ' q9,' + (H.endothelium + 10) + ' 18,0" fill="#c9b1d9" stroke="#7a5e93" stroke-width="1"/>'; }); }
  s.push(L('endothelium', en));
  // aqueous below
  s.push('<rect x="' + x0 + '" y="' + yy.endothelium[1] + '" width="' + W + '" height="14" fill="var(--t-aqueous)"/>');
  // labels
  var names = { film: fx('Film lacrymal'), epithelium: fx('Épithélium'), bowman: fx('Couche de Bowman'), stroma: fx('Stroma'), dua: fx('Couche de Dua'), descemet: fx('Membrane de Descemet'), endothelium: fx('Endothélium') };
  var labs = '';
  var minGap = 15, lastY = -99;
  order.forEach(function (k) {
    var mid = (yy[k][0] + yy[k][1]) / 2, ly = Math.max(mid, lastY + minGap); lastY = ly;
    labs += label(x0 + W + 20, ly, names[k], x0 + W - 4, mid, 'start', k);
  });
  labs += '<text class="lbl-sm lbl-muted" x="' + (x0 + W / 2) + '" y="' + (yy.endothelium[1] + 30) + fx('" text-anchor="middle">Humeur aqueuse (chambre antérieure)</text>');
  s.push('<g class="g-labels">' + labs + '</g>');
  var hgt = total + 26;
  return { svg: '<svg viewBox="0 0 700 ' + hgt.toFixed(0) + fx('" role="img" aria-label="Couches de la cornée">') + s.join('') + '</svg>', cap: prop ? fx('Couches de la cornée — proportions réelles approximatives (stroma ≈ 90 %).') : fx('Couches de la cornée — épaisseurs non proportionnelles pour la lisibilité.') };
};

/* ---------- Angle cross-section (anatomy detail) ---------- */
Figures.angleSection = function (fig, opts) {
  opts = opts || {};
  var hl = fig.highlight || [], hit = !!opts.interactive;
  function A(id, inner) { return grp(id, inner, hl, hit).replace('data-anat=', 'data-angle='); }
  var s = [];
  s.push('<rect x="0" y="0" width="640" height="420" fill="var(--t-aqueous)"/>');
  // sclera block (top-right) and cornea (top-left)
  s.push('<path class="t-sclera" d="M300,0 L640,0 L640,420 L560,420 C 520,330 470,260 412,214 L388,196 L360,140 L330,118 Z"/>');
  s.push('<path class="t-cornea" d="M0,0 L300,0 L330,118 L300,124 C 200,112 100,104 0,100 Z"/>');
  // descemet end = Schwalbe
  s.push(A('schwalbe', '<path d="M284,121 L306,127" stroke="transparent" stroke-width="16" stroke-linecap="round"/><path d="M292,123 L304,126" stroke="#f8f4ea" stroke-width="6" stroke-linecap="round"/><path d="M0,100 C 100,104 200,112 296,124" stroke="#9c86c0" stroke-width="2.5" fill="none"/>'));
  // trabecular meshwork (non-pigmented anterior, pigmented posterior)
  s.push(A('trab-nonpig', '<path d="M304,127 L332,124 L352,150 L318,160 Z" fill="#d9c4a6"/>' + '<path d="M308,134 L338,131 M312,143 L344,139 M316,152 L348,147" stroke="#a88a62" stroke-width="1"/>'));
  s.push(A('trab-pig', '<path d="M318,160 L352,150 L376,182 L342,196 Z" class="t-tm"/>' + '<path d="M324,170 L358,161 M330,180 L364,171 M336,190 L370,180" stroke="#7a5534" stroke-width="1.2"/>'));
  s.push(A('schlemm', '<ellipse cx="362" cy="146" rx="9" ry="20" transform="rotate(-38 362 146)" class="t-schlemm"/>' + '<path d="M368,132 C 380,110 400,80 430,40 L470,22" stroke="var(--t-vein)" stroke-width="3" fill="none"/><path d="M470,22 C 520,14 560,18 620,12" stroke="var(--t-vein)" stroke-width="4" fill="none"/>'));
  s.push(A('eperon', '<path d="M376,182 L412,214 L392,222 L360,194 Z" fill="#fbf7ef" stroke="var(--t-sclera-edge)" stroke-width="1"/>'));
  // ciliary body & muscle
  s.push(A('bande-ciliaire', '<path d="M360,194 L392,222 L384,256 L346,234 Z" fill="#7a4b3c"/>' + '<path d="M392,222 C 440,250 500,320 540,420 L380,420 C 380,360 370,300 384,256 Z" class="t-ciliary"/>' +
    '<path d="M400,240 C 440,270 480,330 505,410 M392,262 C 420,300 450,350 470,415" stroke="#5e2f26" stroke-width="1.4" fill="none"/>'));
  // iris
  s.push(A('iris-racine', '<path d="M346,234 L384,256 C 376,262 368,266 356,270 L0,288 L0,240 C 120,246 240,246 346,234 Z" class="t-iris"/>' + '<path d="M0,286 L356,270 L384,262" stroke="#2c1a10" stroke-width="3" fill="none"/>'));
  // flows
  s.push('<path class="flow" d="M130,190 C 220,178 280,165 314,150 C 334,140 350,140 360,140"/>');
  s.push('<path class="flow-u" d="M250,228 C 300,226 340,224 368,236 C 400,262 430,310 452,380"/>');
  s.push(fx('<text class="lbl-sm" x="120" y="176" fill="var(--cobalt-ink)" style="fill:var(--cobalt-ink)">voie trabéculaire (conventionnelle)</text>'));
  s.push(fx('<text class="lbl-sm" x="150" y="222" style="fill:var(--fluo-ink)">voie uvéosclérale</text>'));
  s.push(fx('<text class="lbl-sm lbl-muted" x="16" y="150">Chambre antérieure</text><text class="lbl-sm lbl-muted" x="16" y="40">Cornée</text><text class="lbl-sm lbl-muted" x="575" y="300">Sclère</text><text class="lbl-sm lbl-muted" x="500" y="30">Veine épisclérale</text>'));
  var lb = '';
  lb += label(150, 330, fx('Racine de l’iris'), 300, 262, 'end', 'iris-racine');
  lb += label(470, 226, fx('Bande ciliaire'), 366, 232, 'start', 'bande-ciliaire');
  lb += label(470, 200, fx('Éperon scléral'), 388, 202, 'start', 'eperon');
  lb += label(470, 174, fx('Trabéculum pigmenté'), 348, 176, 'start', 'trab-pig');
  lb += label(470, 148, fx('Trabéculum non pigmenté'), 328, 142, 'start', 'trab-nonpig');
  lb += label(150, 120, fx('Ligne de Schwalbe'), 298, 124, 'end', 'schwalbe');
  lb += label(470, 120, fx('Canal de Schlemm'), 366, 146, 'start', 'schlemm');
  s.push('<g class="g-labels">' + lb + '</g>');
  return { svg: '<svg viewBox="0 0 640 420" role="img" aria-label="Coupe de l’angle iridocornéen">' + s.join('') + '</svg>', cap: fx('Coupe schématique de l’angle et des deux voies d’évacuation de l’humeur aqueuse.') };
};

/* ---------- Adnexa: lacrimal system and meibomian glands ---------- */
Figures.annexes = function (fig, opts) {
  opts = opts || {};
  var hl = fig.highlight || [], hit = !!opts.interactive;
  function A(id, inner) { return grp(id, inner, hl, hit).replace('data-anat=', 'data-annex='); }
  var s = [];
  s.push('<rect x="0" y="0" width="660" height="400" class="t-skin"/>');
  // eye opening
  s.push('<path d="M120,210 C 200,120 420,120 500,210 C 420,282 200,282 120,210 Z" fill="#fbfbf8" stroke="#8a5a40" stroke-width="2"/>');
  s.push('<circle cx="310" cy="208" r="58" fill="#6d4a33"/><circle cx="310" cy="208" r="22" fill="#111"/><circle cx="296" cy="194" r="7" fill="#fff" opacity=".8"/>');
  // lids (tarsal plates shown with meibomian glands)
  s.push(A('meibomius', '<g opacity=".85">' + (function () { var g = ''; for (var x = 150; x <= 470; x += 14) { var top = 130 + Math.pow((x - 310) / 160, 2) * 40; g += '<path d="M' + x + ',' + (top - 34).toFixed(0) + ' L' + x + ',' + (top + 4).toFixed(0) + '" stroke="#e3b14a" stroke-width="5" stroke-linecap="round"/>'; var bot = 286 - Math.pow((x - 310) / 160, 2) * 40; g += '<path d="M' + x + ',' + (bot - 4).toFixed(0) + ' L' + x + ',' + (bot + 18).toFixed(0) + '" stroke="#e3b14a" stroke-width="5" stroke-linecap="round"/>'; } return g; })() + '</g>'));
  // lacrimal gland superotemporal (viewer left for a right eye)
  s.push(A('glande-lacrymale', '<path d="M70,70 C 95,40 165,40 190,70 C 200,95 170,118 130,115 C 92,112 60,98 70,70 Z" fill="#e9a3a0" stroke="#b56c69" stroke-width="1.5"/><path d="M120,112 L150,150 M140,110 L172,148 M100,108 L130,150" stroke="#b56c69" stroke-width="1.4"/>'));
  // goblet cells (conjunctiva dots in fornix)
  s.push(A('caliciformes', (function () { var g = ''; var r = U.rng(11); for (var i = 0; i < 26; i++) { var x = 160 + r() * 300, y = 150 + r() * 10 + (i % 2 ? 108 : 0); g += '<circle cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" r="2.4" fill="#5d8fc9"/>'; } return g; })()));
  // puncta, canaliculi, sac, duct (medial = viewer right)
  s.push(A('points-lacrymaux', '<circle cx="488" cy="190" r="4.5" fill="#3b2418"/><circle cx="490" cy="230" r="4.5" fill="#3b2418"/>'));
  s.push(A('canalicules', '<path d="M490,190 L494,170 L560,168" stroke="#d98a7c" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M492,230 L496,250 L560,246" stroke="#d98a7c" stroke-width="6" fill="none" stroke-linecap="round"/>'));
  s.push(A('sac-lacrymal', '<rect x="556" y="140" width="34" height="118" rx="16" fill="#e7a6a0" stroke="#b56c69" stroke-width="1.5"/>'));
  s.push(A('canal-lacrymonasal', fx('<path d="M573,256 L580,372" stroke="#e7a6a0" stroke-width="22" stroke-linecap="round"/><text class="lbl-sm lbl-muted" x="604" y="380">nez</text>')));
  // tear flow arrows
  s.push('<path class="flow" d="M150,150 C 220,160 300,170 470,205"/>');
  var lb = '';
  lb += label(30, 26, fx('Glande lacrymale (phase aqueuse)'), 120, 52, 'start', 'glande-lacrymale');
  lb += label(200, 330, fx('Glandes de Meibomius (lipides)'), 230, 292, 'start', 'meibomius');
  lb += label(20, 300, fx('Cellules caliciformes (mucines)'), 180, 262, 'start', 'caliciformes');
  lb += label(420, 110, fx('Points lacrymaux'), 488, 188, 'start', 'points-lacrymaux');
  lb += label(440, 300, fx('Canalicules'), 520, 248, 'start', 'canalicules');
  lb += label(600, 120, fx('Sac lacrymal'), 584, 150, 'middle', 'sac-lacrymal');
  lb += label(520, 360, fx('Canal lacrymonasal'), 576, 330, 'end', 'canal-lacrymonasal');
  s.push('<g class="g-labels">' + lb + '</g>');
  return { svg: '<svg viewBox="0 0 660 400" role="img" aria-label="' + fx('Voies lacrymales et glandes de Meibomius (œil droit, vue de face)') + '">' + s.join('') + '</svg>', cap: fx('Œil droit vu de face : production (glande lacrymale, Meibomius, cellules caliciformes) et drainage des larmes.') };
};
