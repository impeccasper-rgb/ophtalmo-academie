/* Original schematics for the teasers (no photo, no tracing). Each returns an SVG string.
   Fundus: viewBox 0 0 440 400 (right eye, disc on the right). Front eye: viewBox 0 0 900 560. */
var ART = (function () {
  var A = {};
  var uid = 0; function id(p) { return p + (++uid); }

  /* --- fundus (right eye) --- */
  function vessels(art, vein, wA, wV) {
    var s = '';
    var arcs = [ // [path, kind]
      ['M352,184 C320,128 250,96 170,104 C120,110 70,130 40,160', 'v'], ['M352,210 C318,272 250,300 168,294 C118,290 72,268 42,240', 'v'],
      ['M356,182 C330,136 262,112 186,118 C132,124 86,142 52,170', 'a'], ['M356,212 C328,262 262,284 186,280 C134,276 88,258 54,232', 'a'],
      ['M360,184 C372,140 380,100 392,60', 'v'], ['M362,212 C372,256 382,300 394,340', 'v'], ['M364,186 C378,150 392,120 410,92', 'a'], ['M364,210 C378,246 392,276 410,304', 'a'],
      ['M250,104 C246,140 250,170 238,196', 'a'], ['M248,292 C246,262 250,236 238,224', 'a'], ['M196,112 C190,150 196,170 186,190', 'v'], ['M196,286 C190,254 196,236 186,222', 'v']
    ];
    arcs.forEach(function (a) { s += '<path d="' + a[0] + '" fill="none" stroke="' + (a[1] === 'a' ? art : vein) + '" stroke-width="' + (a[1] === 'a' ? wA : wV) + '" stroke-linecap="round"/>'; });
    return s;
  }
  function disc(cx, cy) { return '<circle cx="' + cx + '" cy="' + cy + '" r="30" fill="#f1cf98"/><circle cx="' + cx + '" cy="' + cy + '" r="30" fill="none" stroke="#e3a873" stroke-width="5"/><circle cx="' + (cx + 3) + '" cy="' + (cy - 2) + '" r="12" fill="#fbecd0"/>'; }
  /* o.kind: 'crao' | 'rd' | 'normal'; o.bg: colour outside the fundus circle */
  A.fundus = function (o) {
    o = o || {}; var g = id('fg'), b = id('fb'), c = id('fc'), v = id('fv'), s = '';
    var crao = o.kind === 'crao', rd = o.kind === 'rd';
    s += '<svg viewBox="0 0 440 400" xmlns="http://www.w3.org/2000/svg"><defs>' +
      '<radialGradient id="' + g + '" cx="' + (crao ? '51%' : '50%') + '" cy="' + (crao ? '54%' : '52%') + '" r="60%">' +
      (crao ? '<stop offset="0" stop-color="#f7e6da"/><stop offset=".38" stop-color="#f0cdb7"/><stop offset=".72" stop-color="#d98a62"/><stop offset="1" stop-color="#a94b33"/>'
            : '<stop offset="0" stop-color="#e48a5e"/><stop offset=".55" stop-color="#cf5f40"/><stop offset="1" stop-color="#8e3b2e"/>') + '</radialGradient>' +
      '<radialGradient id="' + v + '" cx="50%" cy="50%" r="50%"><stop offset=".78" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></radialGradient>' +
      '<filter id="' + b + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14"/></filter>' +
      '<filter id="' + b + 's" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2"/></filter>' +
      '<clipPath id="' + c + '"><circle cx="220" cy="200" r="196"/></clipPath></defs>';
    s += (o.bg === 'none' ? '' : '<rect width="440" height="400" fill="' + (o.bg || '#000') + '"/>') + '<g clip-path="url(#' + c + ')"><rect width="440" height="400" fill="url(#' + g + ')"/>';
    if (crao) {
      s += '<ellipse cx="262" cy="204" rx="150" ry="122" fill="#fbf1ea" opacity=".55" filter="url(#' + b + ')"/>';
      s += vessels('#c64434', '#8a2a38', 1.6, 3);
      s += disc(352, 197);
      s += '<circle cx="224" cy="216" r="30" fill="#fffaf4" opacity=".75" filter="url(#' + b + 's)"/><circle cx="224" cy="216" r="13" fill="#b3172a" filter="url(#' + b + 's)"/><circle cx="224" cy="216" r="7" fill="#8a0d1d"/>';
      s += '<ellipse cx="268" cy="112" rx="13" ry="8" fill="#fffdf8" opacity=".85" filter="url(#' + b + 's)"/>';
    } else {
      s += vessels('#c23a2c', '#7a2230', 2.6, 4.2);
      s += disc(352, 197);
      s += '<circle cx="224" cy="214" r="18" fill="#9b3524" opacity=".7" filter="url(#' + b + 's)"/>';
      if (rd) {
        var det = 'M18,214 C14,120 80,36 196,10 L262,8 C244,52 226,96 186,130 C150,160 100,180 60,196 C44,204 30,210 18,214 Z';
        s += '<path d="' + det + '" fill="#d8d2cc" opacity=".92"/><path d="' + det + '" fill="none" stroke="#efe9e3" stroke-width="10" opacity=".5" filter="url(#' + b + 's)"/>';
        ['M34,182 C70,150 110,130 150,112', 'M30,150 C70,120 112,98 160,82', 'M44,112 C86,88 130,66 190,48', 'M70,74 C110,56 150,40 214,24', 'M58,200 C94,176 140,152 176,132'].forEach(function (d) { s += '<path d="' + d + '" fill="none" stroke="#a79e96" stroke-width="3" stroke-linecap="round"/><path d="' + d + '" fill="none" stroke="#f4efea" stroke-width="1.5" transform="translate(0,-4)" stroke-linecap="round"/>'; });
        s += '<path d="M46,166 C80,132 120,112 168,106 C190,104 210,110 232,118" fill="none" stroke="#5e2430" stroke-width="4" stroke-linecap="round"/><path d="M64,120 C100,92 140,82 180,90" fill="none" stroke="#7d2f2f" stroke-width="2.4" stroke-linecap="round"/>';
        s += '<path d="M98,52 Q118,26 142,50 Q138,80 120,84 Q102,80 98,52 Z" fill="#a8321f" stroke="#f4efea" stroke-width="3.5"/><path d="M102,56 Q120,40 138,54" fill="none" stroke="#f4efea" stroke-width="2"/>';
      }
    }
    s += '<rect width="440" height="400" fill="url(#' + v + ')"/></g></svg>';
    return s;
  };
  A.FUNDUS_SIGN = { crao: [224, 216], rd: [120, 70] };

  /* --- front view of the eye --- */
  var LID = 'M30,280 Q450,-60 870,280 Q450,620 30,280 Z';
  A.DENDRITE = (function () { // c-herpes geometry (360×200 frame) scaled onto the cornea
    var P = function (x, y) { return [(450 + (x - 180) * 2.7).toFixed(1), (280 + (y - 100) * 2.7).toFixed(1)]; };
    var segs = [[[126, 92], [141, 90], [156, 86]], [[156, 86], [163, 79], [170, 72]], [[156, 86], [172, 92], [188, 98]], [[188, 98], [199, 91], [210, 84]], [[188, 98], [196, 107], [204, 116]], [[204, 116], [217, 117], [230, 120]]];
    var d = segs.map(function (sg) { var a = P(sg[0][0], sg[0][1]), m = P(sg[1][0], sg[1][1] + 3), z = P(sg[2][0], sg[2][1]); return 'M' + a.join(',') + ' Q' + m.join(',') + ' ' + z.join(','); }).join(' ');
    return { d: d, bulbs: [[126, 92], [170, 72], [210, 84], [230, 120]].map(function (p) { return P(p[0], p[1]); }), c: P(178, 96) };
  })();
  /* o: { mode: 'normal'|'cobalt', red, flush, hypopyon, dendrite, patch, dots, pupil, haze } */
  A.eye = function (o) {
    o = o || {}; var cob = o.mode === 'cobalt', cl = id('ec'), gl = id('eg'), fl = id('ef'), s = '';
    var C = cob ? { sc: '#1c2590', ve: '#2a37b8', ir: '#131a6a', ir2: '#1f2890', pu: '#03051a', lid: '#0c1150', edge: '#3a47d0' }
                : { sc: '#f3eee4', ve: '#c8423a', ir: '#6d4630', ir2: '#9a6b47', pu: '#05060f', lid: '#c48c70', edge: '#8a5a44' };
    s += '<svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="' + cl + '"><path d="' + LID + '"/></clipPath>' +
      '<radialGradient id="' + gl + '" cx="50%" cy="50%" r="50%"><stop offset=".55" stop-color="#c8302a" stop-opacity="0"/><stop offset=".72" stop-color="#c8302a" stop-opacity=".62"/><stop offset="1" stop-color="#c8302a" stop-opacity="0"/></radialGradient>' +
      '<filter id="' + fl + '" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
      '<filter id="' + fl + 'h"><feGaussianBlur stdDeviation="3"/></filter></defs>';
    s += '<g clip-path="url(#' + cl + ')"><rect width="900" height="560" fill="' + C.sc + '"/>';
    if (o.red && !cob) {
      var R = K.rng(17);
      for (var i = 0; i < 26; i++) { var left = i % 2, y0 = 150 + R() * 260, x0 = left ? 40 + R() * 60 : 860 - R() * 60, x1 = left ? 290 - R() * 30 : 610 + R() * 30, y1 = 280 + (y0 - 280) * .45;
        s += '<path d="M' + x0.toFixed(0) + ',' + y0.toFixed(0) + ' Q' + ((x0 + x1) / 2).toFixed(0) + ',' + (y0 + (R() - .5) * 60).toFixed(0) + ' ' + x1.toFixed(0) + ',' + y1.toFixed(0) + '" stroke="' + C.ve + '" stroke-width="' + (1.4 + R() * 2.4).toFixed(1) + '" fill="none" opacity=".85"/>'; }
      s += '<rect width="900" height="560" fill="#d9574d" opacity=".16"/>';
    }
    if (o.flush && !cob) s += '<circle cx="450" cy="280" r="215" fill="url(#' + gl + ')"/>';
    s += '<circle cx="450" cy="280" r="150" fill="' + C.ir + '"/>';
    for (var a = 0; a < 360; a += 10) { var r = a * Math.PI / 180; s += '<line x1="' + (450 + Math.cos(r) * 66).toFixed(1) + '" y1="' + (280 + Math.sin(r) * 66).toFixed(1) + '" x2="' + (450 + Math.cos(r) * 144).toFixed(1) + '" y2="' + (280 + Math.sin(r) * 144).toFixed(1) + '" stroke="' + C.ir2 + '" stroke-width="4" opacity=".6"/>'; }
    s += '<circle cx="450" cy="280" r="150" fill="none" stroke="' + C.edge + '" stroke-width="7"/>' + (o.pupil === 0 ? '' : '<circle cx="450" cy="280" r="' + (o.pupil || 56) + '" fill="' + C.pu + '"/>');
    if (o.haze) s += '<circle cx="450" cy="280" r="152" fill="#e9eef5" opacity="' + o.haze + '"/>';
    if (o.hypopyon) s += '<g><clipPath id="' + cl + 'h"><circle cx="450" cy="280" r="146"/></clipPath><g clip-path="url(#' + cl + 'h)"><rect x="300" y="372" width="300" height="80" fill="#f4efdd"/><rect x="300" y="372" width="300" height="6" fill="#fffdf3"/><rect x="300" y="395" width="300" height="60" fill="#e6dcc0" opacity=".6"/></g></g>';
    if (cob) s += '<circle cx="450" cy="280" r="162" fill="#3a48ff" opacity=".12"/>';
    if (o.patch) s += '<path d="M392,236 C420,214 476,220 500,246 C516,268 498,300 470,306 C440,312 404,300 392,280 C384,266 384,248 392,236 Z" fill="#d8ff3a" opacity=".92" filter="url(#' + fl + ')"/>';
    if (o.dots) { var Rr = K.rng(5); for (var k = 0; k < 70; k++) { var aa = Rr() * Math.PI * 2, rr = Math.sqrt(Rr()) * 132; s += '<circle cx="' + (450 + Math.cos(aa) * rr).toFixed(1) + '" cy="' + (290 + Math.sin(aa) * rr * .9).toFixed(1) + '" r="' + (2.4 + Rr() * 2.2).toFixed(1) + '" fill="#d8ff3a" filter="url(#' + fl + ')"/>'; } }
    if (o.pseudo) s += '<g opacity=".9"><path d="' + A.PSEUDO + '" fill="none" stroke="#d8ff3a" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" opacity=".62"/><path d="' + A.PSEUDO + '" fill="none" stroke="#f4ffd1" stroke-width="5" stroke-linecap="round" transform="translate(-3,-6)" opacity=".7"/></g>';
    if (o.kp) { var Rk = K.rng(12); for (var q = 0; q < 26; q++) { var kx = 450 + (Rk() - .5) * 150 * (1 - q / 40), ky = 330 + Rk() * 80; s += '<circle cx="' + kx.toFixed(0) + '" cy="' + ky.toFixed(0) + '" r="' + (3 + Rk() * 3.5).toFixed(1) + '" fill="#e8e4d8" opacity=".9"/>'; } }
    if (o.lensRing) s += '<circle cx="450" cy="280" r="196" fill="#9da5ff" fill-opacity=".08" stroke="#dfe3ff" stroke-width="4" stroke-opacity=".75"/>';
    if (o.dendrite) s += '<g filter="url(#' + fl + ')"><path d="' + A.DENDRITE.d + '" fill="none" stroke="#d8ff3a" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>' + A.DENDRITE.bulbs.map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="12" fill="#d8ff3a"/>'; }).join('') + '</g>';
    s += '<path d="M380,160 Q450,138 520,160" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" opacity="' + (cob ? .35 : .75) + '"/></g>';
    s += '<path d="' + LID + '" fill="none" stroke="' + C.lid + '" stroke-width="16"/><path d="M30,280 Q450,-60 870,280" fill="none" stroke="' + (cob ? '#02030f' : '#2a1a14') + '" stroke-width="6"/>';
    return s + '</svg>';
  };
  /* sectoral injection overlays (same 900×560 frame as A.eye): superficial episcleral vessels (blanch with phenylephrine)
     and the deep plexus of scleritis (does not blanch). layer: 'wash' | 'sup' | 'deep' */
  A.sector = function (kind, layer) {
    var cl = id('sc'), s = '<svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="' + cl + '"><path d="' + LID + '"/></clipPath>' +
      '<radialGradient id="' + cl + 'g" cx="78%" cy="50%" r="34%"><stop offset="0" stop-color="' + (kind === 'scl' ? '#7d2a63' : '#ec5b4f') + '" stop-opacity="' + (kind === 'scl' ? .75 : .55) + '"/><stop offset="1" stop-color="#ec5b4f" stop-opacity="0"/></radialGradient></defs><g clip-path="url(#' + cl + ')">';
    var R = K.rng(kind === 'scl' ? 41 : 23);
    if (layer === 'wash') s += '<rect width="900" height="560" fill="url(#' + cl + 'g)"/>';
    if (layer === 'sup') for (var i = 0; i < 16; i++) { var y0 = 170 + R() * 220, x0 = 880 - R() * 40, x1 = 612 + R() * 20; s += '<path d="M' + x0.toFixed(0) + ',' + y0.toFixed(0) + ' L' + x1.toFixed(0) + ',' + (280 + (y0 - 280) * .55).toFixed(0) + '" stroke="#e8463c" stroke-width="' + (2.5 + R() * 2.5).toFixed(1) + '" fill="none" stroke-linecap="round"/>'; }
    if (layer === 'deep') for (var j = 0; j < 9; j++) { var yy = 190 + R() * 190, xa = 860 - R() * 30; s += '<path d="M' + xa.toFixed(0) + ',' + yy.toFixed(0) + ' q-40,' + ((R() - .5) * 60).toFixed(0) + ' -80,' + ((R() - .5) * 30).toFixed(0) + ' t-80,' + ((R() - .5) * 30).toFixed(0) + ' t-60,' + ((R() - .5) * 20).toFixed(0) + '" stroke="#5a1846" stroke-width="' + (5 + R() * 3).toFixed(1) + '" fill="none" stroke-linecap="round" opacity=".9"/>'; }
    return s + '</g></svg>';
  };
  /* zoster pseudodendrite: thick, wavy, « painted-on », no terminal bulbs, faint staining */
  A.PSEUDO = 'M318,262 C350,240 372,288 404,268 S452,232 486,262 S534,300 566,276 M404,268 C412,300 438,312 456,330';
  /* slit-lamp optical section: cornea, lens, anterior vitreous (Weiss ring floater; o.dust = Shafer « tobacco dust ») — viewBox 0 0 420 460 */
  A.vitreous = function (o) {
    o = o || {}; var g = id('vt'), s = '<svg viewBox="0 0 420 460" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="' + g + '" x1="0" x2="1"><stop offset="0" stop-color="#9da5ff" stop-opacity="0"/><stop offset=".5" stop-color="#dfe3ff" stop-opacity=".55"/><stop offset="1" stop-color="#9da5ff" stop-opacity="0"/></linearGradient>' +
      '<filter id="' + g + 'b"><feGaussianBlur stdDeviation="3"/></filter></defs><rect width="420" height="460" fill="#02041a"/>';
    s += '<path d="M60,40 Q30,230 60,420" stroke="#9da5ff" stroke-width="5" fill="none" opacity=".8"/>';
    s += '<ellipse cx="150" cy="230" rx="52" ry="150" fill="#3a46b8" opacity=".55"/><ellipse cx="150" cy="230" rx="52" ry="150" fill="none" stroke="#c9ceff" stroke-width="3"/>';
    s += '<rect x="40" y="200" width="380" height="60" fill="url(#' + g + ')" filter="url(#' + g + 'b)" transform="rotate(-8 230 230)"/>';
    var R = K.rng(9); for (var i = 0; i < 9; i++) { var y = 90 + i * 34; s += '<path d="M215,' + y + ' C260,' + (y - 18 + R() * 36).toFixed(0) + ' 320,' + (y - 18 + R() * 36).toFixed(0) + ' 405,' + (y - 10 + R() * 20).toFixed(0) + '" stroke="#8e94c4" stroke-width="1.6" fill="none" opacity=".55"/>'; }
    s += '<ellipse cx="320" cy="150" rx="34" ry="28" fill="none" stroke="#b9bee6" stroke-width="7" opacity=".85"/>';
    if (o.dust) { var Rd = K.rng(4); for (var k = 0; k < 46; k++) { var x = 222 + Rd() * 120, yy = 200 + Rd() * 120; s += '<circle cx="' + x.toFixed(0) + '" cy="' + yy.toFixed(0) + '" r="' + (3 + Rd() * 3).toFixed(1) + '" fill="' + (k % 3 ? '#b8702e' : '#7a4318') + '"/>'; } }
    return s + '</svg>';
  };
  /* stylised eye of direction A (for the brand reveal) */
  A.eyeA = function (lit) {
    var sc = lit ? '#aab2ff' : '#121a48', ed = lit ? '#e6e9ff' : '#222a66', ir = lit ? '#5d69ff' : '#1a2266', st = lit ? '#c9ceff' : '#28307a', pu = lit ? '#060a2a' : '#02040f';
    var s = '<svg viewBox="0 0 900 560"><path d="' + LID + '" fill="' + sc + '" stroke="' + ed + '" stroke-width="5"/><circle cx="450" cy="280" r="150" fill="' + ir + '"/>';
    for (var a = 0; a < 360; a += 12) { var r = a * Math.PI / 180; s += '<line x1="' + (450 + Math.cos(r) * 70).toFixed(1) + '" y1="' + (280 + Math.sin(r) * 70).toFixed(1) + '" x2="' + (450 + Math.cos(r) * 144).toFixed(1) + '" y2="' + (280 + Math.sin(r) * 144).toFixed(1) + '" stroke="' + st + '" stroke-width="3" opacity=".55"/>'; }
    s += '<circle cx="450" cy="280" r="150" fill="none" stroke="' + ed + '" stroke-width="4"/><circle cx="450" cy="280" r="66" fill="' + pu + '"/>';
    if (lit) s += '<path d="M380,150 Q450,128 520,150" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>';
    return s + '</svg>';
  };
  /* acuity chart (rows of E in four orientations) */
  A.chart = function () {
    var s = '<svg viewBox="0 0 400 300"><rect x="60" y="10" width="280" height="280" rx="14" fill="#eef0ff"/>', R = K.rng(3), rows = [[60, 1], [38, 2], [26, 3], [18, 4], [12, 5]], y = 30;
    rows.forEach(function (rw) { var sz = rw[0], n = rw[1], w = n * sz * 1.6, x0 = 200 - w / 2;
      for (var i = 0; i < n; i++) { var rot = [0, 90, 180, 270][Math.floor(R() * 4)], x = x0 + i * sz * 1.6 + sz * .3, u = sz / 5;
        s += '<g transform="rotate(' + rot + ' ' + (x + sz / 2) + ' ' + (y + sz / 2) + ')" fill="#0a0f40"><rect x="' + x + '" y="' + y + '" width="' + u + '" height="' + sz + '"/>' + [0, 2, 4].map(function (k) { return '<rect x="' + x + '" y="' + (y + k * u) + '" width="' + sz + '" height="' + u + '"/>'; }).join('') + '</g>'; }
      y += sz + 14; });
    return s + '</svg>';
  };
  return A;
})();
