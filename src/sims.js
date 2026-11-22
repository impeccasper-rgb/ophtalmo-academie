/* ===== Interactive simulations and explorers ===== */
'use strict';
var Sims = {
  live: [],
  defs: {},
  hydrate: function (root) {
    U.$$('[data-sim]', root).forEach(function (el) {
      var name = el.getAttribute('data-sim'), def = Sims.defs[name];
      if (!def || el.getAttribute('data-ready')) return;
      el.setAttribute('data-ready', '1');
      try { var d = def(el); if (d) Sims.live.push(d); } catch (e) { console.error('sim ' + name, e); el.innerHTML = fx('<div class="callout red small">Cette simulation n’a pas pu démarrer.</div>'); }
    });
  },
  teardown: function () { Sims.live.forEach(function (d) { try { d(); } catch (e) { } }); Sims.live = []; },
  on: function (el, type, sel, fn) { el.addEventListener(type, function (ev) { var t = ev.target.closest(sel); if (t && el.contains(t)) fn(t, ev); }); }
};
function info(entry, fallback) {
  if (!entry) return '<div class="info"><h3 class="h4">' + U.esc(fallback || fx('Sélectionne une structure')) + fx('</h3><p class="small muted">Touche une structure sur le schéma pour afficher sa description.</p></div>');
  var sc = Gloss.scope([entry.t]);
  return '<div class="info" aria-live="polite"><h3 class="h4">' + U.esc(entry.t) + '</h3>' + (entry.en && entry.en !== entry.t ? '<div class="en">' + U.esc(entry.en) + '</div>' : '') + '<p>' + T(entry.d, sc) + '</p>' + (entry.c ? fx('<div class="pearl"><b>En clinique : </b>') + T(entry.c, sc) + '</div>' : '') + '</div>';
}
function chipRow(items, cur, attr) { return '<div class="chips" role="group">' + items.map(function (it) { return '<button type="button" class="chip" ' + attr + '="' + it[0] + '" aria-pressed="' + (it[0] === cur) + '">' + U.esc(it[1]) + '</button>'; }).join('') + '</div>'; }
function sliderHtml(id, label, min, max, step, val, unit) { return '<div class="slider"><label for="' + id + '"><span>' + label + '</span><output id="' + id + '-o">' + val + (unit || '') + '</output></label><input type="range" id="' + id + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"></div>'; }

/* ---------- anatomy explorer (zoom / pan / layers) ---------- */
Sims.defs.anatomy = function (el) {
  var st = { vb: [0, 0, 1000, 720], labels: true, vasc: false, nerv: false, flow: false, tunics: false, sel: null };
  var names = Object.keys((OPH.A && OPH.A.anatomy) || {});
  el.innerHTML = '<div class="explorer"><div class="fig"><div class="fig-tools">' +
    fx('<button class="btn sm" data-z="in" aria-label="Zoom avant">Zoom +</button><button class="btn sm" data-z="out" aria-label="Zoom arrière">Zoom −</button><button class="btn sm" data-z="reset">Vue entière</button>') +
    fx('<button class="btn sm" data-z="angle">Angle</button><button class="btn sm" data-z="seg">Segment antérieur</button><button class="btn sm" data-z="pole">Pôle postérieur</button></div>') +
    '<div class="fig-tools">' + [['labels', fx('Étiquettes'), true], ['tunics', fx('Tuniques')], ['vasc', fx('Vascularisation')], ['nerv', fx('Innervation')], ['flow', fx('Humeur aqueuse')]].map(function (t) { return '<label class="toggle"><input type="checkbox" data-layer="' + t[0] + '"' + (t[2] ? ' checked' : '') + '> ' + t[1] + '</label>'; }).join('') + '</div>' +
    fx('<div class="fig-body zoomwrap" data-pan></div><div class="fig-cap"><span>Glisser pour déplacer · pincer ou Ctrl + molette pour zoomer · toucher une structure</span><span class="schema-badge">Schéma pédagogique</span></div></div>') +
    fx('<div class="side stack"><label class="small" for="anat-pick">Aller à une structure</label><select id="anat-pick"><option value="">— choisir —</option>') + names.map(function (n) { return '<option value="' + n + '">' + U.esc(OPH.A.anatomy[n].t) + '</option>'; }).join('') + '</select><div data-info>' + info(null) + '</div>' +
    fx('<div class="panel-sunk small" data-tunic-legend hidden><b>Tuniques :</b> <span style="color:#5d84d6">■</span> fibreuse (cornée + sclère) · <span style="color:#d88a5a">■</span> vasculaire = uvée (iris, corps ciliaire, choroïde) · <span style="color:#c9a62f">■</span> nerveuse (rétine)</div></div></div>');
  var wrap = U.$('[data-pan]', el);
  function draw() {
    wrap.innerHTML = Figures.eye({ highlight: st.sel ? [st.sel] : [] }, { interactive: true, labels: st.labels, vasc: st.vasc, nerv: st.nerv, flow: st.flow, tunics: st.tunics, viewBox: st.vb.join(' ') }).svg;
    U.$('[data-tunic-legend]', el).hidden = !st.tunics;
  }
  function setVB(v) { var w = U.clamp(v[2], 120, 1000), h = w * 0.72; var x = U.clamp(v[0], -100, 1100 - w), y = U.clamp(v[1], -80, 800 - h); st.vb = [x, y, w, h]; var svg = U.$('svg', wrap); if (svg) svg.setAttribute('viewBox', st.vb.join(' ')); }
  function zoom(f, cx, cy) { var v = st.vb; cx = cx == null ? v[0] + v[2] / 2 : cx; cy = cy == null ? v[1] + v[3] / 2 : cy; var w = v[2] * f; setVB([cx - (cx - v[0]) * f, cy - (cy - v[1]) * f, w]); }
  function select(id) {
    st.sel = id; draw();
    U.$('[data-info]', el).innerHTML = info(OPH.A && OPH.A.anatomy && OPH.A.anatomy[id], Figures.anatName(id));
    U.$('#anat-pick', el).value = id || '';
  }
  draw();
  Sims.on(el, 'click', '[data-z]', function (b) {
    var z = b.getAttribute('data-z');
    if (z === 'in') zoom(0.7); else if (z === 'out') zoom(1 / 0.7); else if (z === 'reset') setVB([0, 0, 1000]);
    else if (z === 'angle') setVB([300, 180, 160]); else if (z === 'seg') setVB([230, 150, 360]); else if (z === 'pole') setVB([600, 200, 420]);
  });
  Sims.on(el, 'change', '[data-layer]', function (c) { st[c.getAttribute('data-layer')] = c.checked; draw(); });
  U.$('#anat-pick', el).addEventListener('change', function (e) { if (e.target.value) select(e.target.value); });
  // pan / pinch / click
  var drag = null, pts = {}, moved = false;
  function toSvg(evx, evy) { var r = wrap.getBoundingClientRect(); return [st.vb[0] + (evx - r.left) / r.width * st.vb[2], st.vb[1] + (evy - r.top) / r.height * st.vb[3]]; }
  wrap.addEventListener('pointerdown', function (e) { pts[e.pointerId] = [e.clientX, e.clientY]; moved = false; drag = { x: e.clientX, y: e.clientY, vb: st.vb.slice() }; try { wrap.setPointerCapture(e.pointerId); } catch (er) { } });
  wrap.addEventListener('pointermove', function (e) {
    if (!pts[e.pointerId]) return;
    var ids = Object.keys(pts);
    if (ids.length === 2) {
      var a = pts[ids[0]], b = pts[ids[1]], d0 = Math.hypot(a[0] - b[0], a[1] - b[1]);
      pts[e.pointerId] = [e.clientX, e.clientY]; a = pts[ids[0]]; b = pts[ids[1]];
      var d1 = Math.hypot(a[0] - b[0], a[1] - b[1]); if (d0 > 0) { var c = toSvg((a[0] + b[0]) / 2, (a[1] + b[1]) / 2); zoom(d0 / d1, c[0], c[1]); }
      moved = true; return;
    }
    pts[e.pointerId] = [e.clientX, e.clientY];
    if (!drag) return;
    var r = wrap.getBoundingClientRect(), dx = (e.clientX - drag.x) / r.width * st.vb[2], dy = (e.clientY - drag.y) / r.height * st.vb[3];
    if (Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y) > 6) moved = true;
    if (moved) setVB([drag.vb[0] - dx, drag.vb[1] - dy, drag.vb[2]]);
  });
  function up(e) {
    var wasMoved = moved; delete pts[e.pointerId]; drag = null;
    if (!wasMoved && e.type === 'pointerup') { var t = document.elementFromPoint(e.clientX, e.clientY); var g = t && t.closest && t.closest('[data-anat], .lbl-g[data-for]'); if (g && wrap.contains(g)) select(g.getAttribute('data-anat') || g.getAttribute('data-for')); }
  }
  wrap.addEventListener('pointerup', up); wrap.addEventListener('pointercancel', up);
  wrap.addEventListener('wheel', function (e) { if (!(e.ctrlKey || e.metaKey)) return; e.preventDefault(); var c = toSvg(e.clientX, e.clientY); zoom(e.deltaY > 0 ? 1.15 : 0.87, c[0], c[1]); }, { passive: false });
  wrap.addEventListener('dblclick', function (e) { var c = toSvg(e.clientX, e.clientY); zoom(0.6, c[0], c[1]); });
  wrap.addEventListener('keydown', function (e) { var g = e.target.closest && e.target.closest('[data-anat]'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); select(g.getAttribute('data-anat')); } });
};

/* ---------- generic clickable explorer (cornea layers, angle, disc, adnexa) ---------- */
function makeExplorer(el, figFn, attr, data, extraTools, figOpts) {
  var st = { sel: null, opt: Object.assign({}, figOpts || {}) };
  el.innerHTML = '<div class="explorer"><div class="fig">' + (extraTools ? '<div class="fig-tools">' + extraTools + '</div>' : '') + fx('<div class="fig-body" data-fig></div><div class="fig-cap"><span>Toucher une couche ou une structure</span><span class="schema-badge">Schéma pédagogique</span></div></div><div class="side" data-info>') + info(null) + '</div></div>';
  function draw() { U.$('[data-fig]', el).innerHTML = figFn(st).svg; }
  draw();
  el.addEventListener('click', function (e) {
    var g = e.target.closest('[' + attr + '], .lbl-g[data-for]'); if (!g || !el.contains(g)) return;
    var id = g.getAttribute(attr) || g.getAttribute('data-for'); st.sel = id; draw(); U.$('[data-info]', el).innerHTML = info(data && data[id], id);
  });
  el.addEventListener('keydown', function (e) { var g = e.target.closest('[' + attr + ']'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); g.dispatchEvent(new MouseEvent('click', { bubbles: true })); } });
  return { st: st, draw: draw };
}
Sims.defs.corneaLayers = function (el) {
  var ex = makeExplorer(el, function (st) { return Figures.cornea({ highlight: st.sel ? [st.sel] : [] }, { interactive: true, proportional: st.opt.prop }); }, 'data-layer', OPH.A && OPH.A.cornea,
    fx('<label class="toggle"><input type="checkbox" data-prop> Proportions réelles (stroma ≈ 90 %)</label>'));
  el.addEventListener('change', function (e) { if (e.target.hasAttribute('data-prop')) { ex.st.opt.prop = e.target.checked; ex.draw(); } });
};
Sims.defs.angleExplorer = function (el) {
  var st = { sel: null };
  el.innerHTML = fx('<div class="explorer"><div class="stack"><div class="fig"><div class="fig-body" data-a1></div><div class="fig-cap"><span>Coupe de l’angle</span><span class="schema-badge">Schéma pédagogique</span></div></div>') +
    fx('<div class="fig"><div class="fig-body" data-a2></div><div class="fig-cap"><span>Les mêmes structures vues au gonioscope (angle ouvert, Shaffer 4)</span><span class="schema-badge">Schéma pédagogique</span></div></div></div><div class="side" data-info>') + info(null) + '</div></div>';
  function draw() { var h = st.sel ? [st.sel] : []; U.$('[data-a1]', el).innerHTML = Figures.angleSection({ highlight: h }, { interactive: true }).svg; U.$('[data-a2]', el).innerHTML = Figures.gonio({ grade: 4 }, { interactive: true, highlight: h }).svg; }
  draw();
  el.addEventListener('click', function (e) { var g = e.target.closest('[data-angle], .lbl-g[data-for]'); if (!g) return; st.sel = g.getAttribute('data-angle') || g.getAttribute('data-for'); draw(); U.$('[data-info]', el).innerHTML = info(OPH.A && OPH.A.angle && OPH.A.angle[st.sel], st.sel); });
};
Sims.defs.discAnatomy = function (el) {
  var ex = makeExplorer(el, function (st) { return Figures.disc({ cd: st.opt.cd, ppa: true }, { interactive: true, highlight: st.sel ? [st.sel] : [], isnt: st.opt.isnt }); }, 'data-disc', OPH.A && OPH.A.disc,
    fx('<label class="toggle"><input type="checkbox" data-isnt> Afficher la règle ISNT</label><label class="toggle"><input type="checkbox" data-big> Excavation glaucomateuse (C/D 0,8)</label>'), { cd: 0.35 });
  el.addEventListener('change', function (e) { if (e.target.hasAttribute('data-isnt')) { ex.st.opt.isnt = e.target.checked; ex.draw(); } if (e.target.hasAttribute('data-big')) { ex.st.opt.cd = e.target.checked ? 0.8 : 0.35; ex.draw(); } });
};
Sims.defs.annexes = function (el) { makeExplorer(el, function (st) { return Figures.annexes({ highlight: st.sel ? [st.sel] : [] }, { interactive: true }); }, 'data-annex', OPH.A && OPH.A.annexes); };

/* ---------- aqueous humor & IOP simulator ---------- */
Sims.aq = {
  scen: {
    normal: { F: 2.5, C: 0.28, U: 0.5, Pv: 9, t: fx('Œil normal'), d: fx('Production ≈ 2,5 µL/min, facilité d’écoulement normale.') },
    gpao: { F: 2.5, C: 0.15, U: 0.45, Pv: 9, t: fx('GPAO'), d: fx('La résistance trabéculaire (tissu juxtacanaliculaire) augmente : la facilité C diminue.') },
    pxf: { F: 2.5, C: 0.11, U: 0.4, Pv: 9, t: fx('Pseudo-exfoliation'), d: fx('Le matériel fibrillaire et le pigment encombrent le trabéculum : C chute encore plus.') },
    bloc: { F: 2.5, C: 0.28, U: 0.5, Pv: 9, block: true, t: fx('Bloc pupillaire'), d: fx('L’humeur aqueuse passe mal entre l’iris et le cristallin : elle pousse l’iris vers l’avant (iris bombé), qui ferme l’angle.') },
    nvg: { F: 2.4, C: 0.05, U: 0.15, Pv: 9, nv: true, t: fx('Néovasculaire'), d: fx('Une membrane fibrovasculaire recouvre l’angle puis le ferme (synéchies) : drainage quasi nul.') },
    pv: { F: 2.5, C: 0.28, U: 0.5, Pv: 18, t: fx('Pv épisclérale ↑'), d: fx('Fistule carotido-caverneuse ou Sturge-Weber : la pression veineuse d’aval monte, la PIO suit.') },
    nuit: { F: 1.4, C: 0.28, U: 0.45, Pv: 10.5, night: true, t: fx('Nuit, couché'), d: fx('La production baisse la nuit, mais la position couchée élève la pression veineuse épisclérale.') }
  },
  drugs: [
    ['pga', fx('Analogue des prostaglandines')], ['timolol', fx('Timolol')], ['dorzo', fx('Dorzolamide')], ['brimo', fx('Brimonidine')], ['acz', fx('Acétazolamide PO')],
    ['pilo', fx('Pilocarpine')], ['netar', fx('Netarsudil*')], ['slt', fx('SLT')], ['lpi', fx('Iridotomie (LPI)')], ['trab', fx('Trabéculectomie')]
  ],
  compute: function (scKey, on, manual) {
    var sc = Sims.aq.scen[scKey], F = sc.F, C = sc.C, Uu = sc.U, Pv = sc.Pv, Cb = 0, Ps = 1, notes = [], block = !!sc.block, blockOpen = 0.08;
    if (manual) { F = manual.F; C = manual.C; Uu = manual.U; Pv = manual.Pv; }
    var F0 = F, U0 = Uu, C0 = C, Pv0 = Pv;
    if (on.pga) { Uu *= 2.5; C *= 1.1; notes.push([fx('Analogue des prostaglandines'), fx('remodèle la matrice du muscle ciliaire → **voie uvéosclérale ↑** (U ') + U0.toFixed(2) + ' → ' + Uu.toFixed(2) + ' µL/min).']); }
    if (on.timolol) { var k = sc.night ? 0.93 : 0.7; F *= k; notes.push([fx('Timolol'), sc.night ? fx('la nuit, la production est déjà basse et le tonus adrénergique faible : **effet minime**.') : fx('bloque les récepteurs β du corps ciliaire → **production ↓** (≈ 30 %).')]); }
    if (on.dorzo) { F *= 0.78; notes.push([fx('Dorzolamide'), fx('inhibe l’anhydrase carbonique de l’épithélium ciliaire → **production ↓**.')]); }
    if (on.brimo) { F *= 0.8; Uu *= 1.3; notes.push([fx('Brimonidine'), fx('agoniste α2 : **production ↓** et voie uvéosclérale ↑.')]); }
    if (on.acz) { F *= 0.55; notes.push([fx('Acétazolamide PO'), fx('inhibition systémique de l’anhydrase carbonique → **production ↓↓** (attention sulfa, rein, potassium).')]); }
    if (on.netar) { C *= 1.25; Pv = Math.max(4, Pv - 1.5); F *= 0.92; notes.push([fx('Netarsudil*'), fx('inhibe la Rho kinase : **trabéculum plus perméable** et Pv épisclérale ↓ (*disponibilité canadienne à vérifier).')]); }
    if (on.slt) { if (block || sc.nv) notes.push([fx('SLT'), fx('**sans effet** : le laser agit sur un trabéculum qu’il faut voir — ici l’angle est fermé.')]); else { C *= 1.6; notes.push([fx('SLT'), fx('le laser stimule le remodelage du trabéculum pigmenté → **facilité C ↑**.')]); } }
    if (on.lpi) { if (block) { block = false; C = C * 0.85; notes.push([fx('Iridotomie'), fx('un trou dans l’iris égalise les pressions des deux chambres : l’iris recule, **l’angle se rouvre**.')]); } else notes.push([fx('Iridotomie'), fx('aucun bloc pupillaire ici : **pas d’effet** sur la PIO.')]); }
    function iop(Cx, Ux, Fx) { var Ue = Math.min(Ux, 0.85 * Fx); return (Fx - Ue + Cx * Pv + Cb * Ps) / (Cx + Cb); }
    var Ceff = C, Ueff = Uu;
    if (block) { Ceff = C * blockOpen; Ueff = Uu * 0.3; }
    if (sc.nv) { Ueff = Uu * 0.6; }
    if (on.pilo) {
      if (sc.nv) notes.push([fx('Pilocarpine'), fx('**contre-indiquée** : aggrave l’inflammation et ne rouvre pas un angle synéchié.')]);
      else if (block) {
        var pre = iop(Ceff, Ueff, F);
        if (pre > 45) notes.push([fx('Pilocarpine'), fx('**inefficace** à PIO > 40–50 mmHg : le sphincter irien est ischémique. Abaisser d’abord la PIO.')]);
        else { Ceff = C * 0.35; notes.push([fx('Pilocarpine'), fx('myosis : tire l’iris hors de l’angle → **réouverture partielle**.')]); }
      } else { Ceff *= 1.6; Ueff *= 0.7; notes.push([fx('Pilocarpine'), fx('contracte le muscle ciliaire qui tire l’éperon → **trabéculum ouvert**, mais voie uvéosclérale ↓.')]); }
    }
    if (on.trab) { Cb = sc.nv ? 0.15 : 0.25; notes.push([fx('Trabéculectomie'), fx('nouvelle voie vers une bulle sous-conjonctivale qui **contourne la Pv épisclérale**') + (sc.nv ? fx(' (échec fréquent si les néovaisseaux ne sont pas traités).') : '.')]); }
    var P = iop(Ceff, Ueff, F);
    var hyp = P < 6; if (P < 3) P = 3;
    if (!on.trab && P - Pv < 4) notes.push([fx('Plancher'), fx('la PIO ne peut pas descendre sous la **pression veineuse épisclérale** (≈ ') + Pv.toFixed(0) + fx(' mmHg) par les voies naturelles.')]);
    if (hyp) notes.push([fx('Hypotonie'), fx('PIO < 6 mmHg : risque de maculopathie d’hypotonie et de décollements choroïdiens.')]);
    return { iop: P, F: F, U: Math.min(Ueff, 0.85 * F), C: Ceff, Pv: Pv, Cb: Cb, block: block, notes: notes, F0: F0 };
  }
};
Sims.defs.aqueous = function (el) {
  var st = { sc: 'normal', on: {}, manual: null, raf: 0, parts: [], last: 0, acc: 0 };
  var reduced = U.reduced();
  el.innerHTML = '<div class="simgrid"><div class="stack"><div class="fig"><div class="fig-body"><svg viewBox="0 0 600 380" data-aqsvg role="img" aria-label="Circulation de l’humeur aqueuse"></svg></div>' +
    fx('<div class="fig-cap"><span>Particules : humeur aqueuse (bleu = voie trabéculaire, vert = uvéosclérale, jaune = bulle)</span><span class="schema-badge">Simulation pédagogique</span></div></div>') +
    '<div class="eqn" data-eqn></div></div>' +
    fx('<div class="stack"><div class="eyebrow">Situation</div>') + chipRow(Object.keys(Sims.aq.scen).map(function (k) { return [k, Sims.aq.scen[k].t]; }), 'normal', 'data-sc') +
    fx('<p class="small muted" data-scd></p><div class="eyebrow">Traitements (cumulables)</div><div class="chips">') + Sims.aq.drugs.map(function (d) { return '<button type="button" class="chip" data-drug="' + d[0] + '" aria-pressed="false">' + U.esc(d[1]) + '</button>'; }).join('') + '</div>' +
    fx('<div class="grid2" style="grid-template-columns:repeat(2,minmax(0,1fr))"><div class="readout" data-iopbox><span class="u">PIO calculée</span><span class="v" data-iop>—</span><span class="u" data-iopst></span></div><div class="readout"><span class="u">Débits</span><span class="small mono" data-flows></span></div></div>') +
    '<ul class="blist small" data-notes></ul>' +
    fx('<details class="acc"><summary>Réglages manuels (F, C, U, Pv)</summary><div class="acc-b" style="grid-template-columns:1fr">') + sliderHtml('aq-F', fx('Production F (µL/min)'), 0.8, 3.5, 0.1, 2.5) + sliderHtml('aq-C', fx('Facilité C (µL/min/mmHg)'), 0.02, 0.4, 0.01, 0.28) + sliderHtml('aq-U', fx('Uvéosclérale U (µL/min)'), 0, 1.5, 0.05, 0.5) + sliderHtml('aq-Pv', fx('Pv épisclérale (mmHg)'), 5, 25, 0.5, 9) +
    fx('<label class="toggle"><input type="checkbox" data-manual> Utiliser ces valeurs à la place de la situation</label></div></details></div></div>');
  var svg = U.$('[data-aqsvg]', el);
  // geometry (upper half of anterior segment, magnified)
  function scene(r) {
    var bombe = r.block;
    var irisF = bombe ? 'M276,74 C 230,150 232,236 286,300' : 'M276,74 C 280,150 282,236 286,300';
    var iris = bombe ? 'M276,74 C 230,150 232,236 286,300 L306,302 C 258,236 258,152 292,78 Z' : 'M276,74 C 280,150 282,236 286,300 L306,302 C 304,236 302,152 292,78 Z';
    var tint = U.clamp((r.iop - 16) / 45, 0, 0.55);
    var s = '<rect width="600" height="380" fill="var(--surface)"/>' +
      '<path class="t-vitreous" d="M300,380 L300,120 L600,100 L600,380 Z"/>' +
      '<path class="t-aqueous" d="M64,380 Q96,140 252,52 L272,70 ' + irisF.replace('M276,74', 'L276,74') + ' Q300,330 306,380 Z"/>' +
      '<path d="M64,380 Q96,140 252,52 L272,70 ' + irisF.replace('M276,74', 'L276,74') + ' Q300,330 306,380 Z" fill="#e5484d" opacity="' + tint.toFixed(2) + '"/>' +
      '<path class="t-aqueous" d="M292,78 C ' + (bombe ? '258,152 258,236' : '302,152 304,236') + ' 306,302 C 306,250 320,190 356,160 L 352,112 L 300,82 Z"/>' +
      '<path class="t-cornea" d="M40,380 Q70,120 240,30 L252,52 Q96,140 64,380 Z"/>' +
      '<path class="t-sclera" d="M240,30 L600,0 L600,40 L300,58 L272,66 L252,52 Z"/>' +
      '<path class="t-ciliary" d="M272,66 L300,58 L600,40 L600,104 C 520,100 440,104 380,112 C 372,100 362,96 352,108 C 346,96 334,92 326,102 C 318,90 306,86 298,80 L289,76 Z"/>' +
      '<path class="t-lens" d="M308,380 C 302,300 318,196 356,160 C 374,144 402,146 416,166 C 444,214 456,300 456,380 Z"/>' +
      '<circle cx="334" cy="104" r="7" class="t-ciliary2"/><circle cx="352" cy="110" r="8" class="t-ciliary2"/><circle cx="372" cy="114" r="7" class="t-ciliary2"/>' +
      '<path class="t-zonule" d="M352,116 L366,154 M334,110 L358,158 M372,120 L384,150"/>' +
      '<path class="t-iris" d="' + iris + '"/>' +
      '<path d="M252,52 L272,66 L268,72 L250,60 Z" class="t-tm"/><ellipse cx="262" cy="50" rx="4" ry="7" transform="rotate(-50 262 50)" class="t-schlemm"/>' +
      '<path d="M264,46 L276,24 C 320,16 460,8 600,2" stroke="var(--t-vein)" stroke-width="4" fill="none"/>' +
      (r.Cb ? '<ellipse cx="225" cy="14" rx="58" ry="13" fill="#f2c535" opacity=".35"/><path d="M252,58 L246,30 L236,18" stroke="#c9a227" stroke-width="2" stroke-dasharray="3 3" fill="none"/>' : '') +
      fx('<text class="lbl-sm" x="110" y="250">Chambre antérieure</text><text class="lbl-sm" x="56" y="372">cornée</text><text class="lbl-sm" x="248" y="250" text-anchor="end">iris</text>') +
      fx('<text class="lbl-sm" x="390" y="300">cristallin</text><text class="lbl-sm" x="430" y="80">corps ciliaire (production)</text><text class="lbl-sm" x="420" y="22">veine épisclérale</text>') +
      fx('<text class="lbl-sm" x="196" y="92" text-anchor="end">trabéculum → Schlemm</text><text class="lbl-sm" x="520" y="140" text-anchor="middle">voie uvéosclérale →</text>') +
      (bombe ? fx('<text class="lbl-sm lbl-b" x="120" y="150" style="fill:var(--urgent)">iris bombé : angle fermé</text>') : '');
    return s + '<g data-parts></g>';
  }
  var paths = {
    prod: [[356, 112], [332, 128], [310, 168], [303, 250], [300, 304]],
    prodBlock: [[356, 112], [332, 128], [312, 170], [304, 240]],
    trab: [[300, 304], [240, 330], [150, 300], [128, 210], [180, 120], [236, 78], [256, 60], [262, 50], [272, 28], [330, 18], [600, 3]],
    uveo: [[300, 304], [222, 300], [160, 236], [200, 140], [258, 90], [282, 76], [320, 78], [420, 70], [600, 62]],
    bleb: [[300, 304], [220, 300], [150, 220], [196, 120], [246, 64], [246, 34], [228, 16]]
  };
  function plen(p) { var L = [0]; for (var i = 1; i < p.length; i++) L.push(L[i - 1] + Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1])); return L; }
  var lens = {}; Object.keys(paths).forEach(function (k) { lens[k] = plen(paths[k]); });
  function at(k, d) { var p = paths[k], L = lens[k]; if (d >= L[L.length - 1]) return null; for (var i = 1; i < L.length; i++) if (d <= L[i]) { var f = (d - L[i - 1]) / (L[i] - L[i - 1]); return [p[i - 1][0] + (p[i][0] - p[i - 1][0]) * f, p[i - 1][1] + (p[i][1] - p[i - 1][1]) * f]; } return null; }
  var R = null;
  function update() {
    R = Sims.aq.compute(st.sc, st.on, st.manual);
    svg.innerHTML = scene(R);
    var v = R.iop, box = U.$('[data-iopbox]', el);
    U.$('[data-iop]', el).textContent = v.toFixed(1).replace('.', ',') + ' mmHg';
    var stt = v < 6 ? ['bad', fx('hypotonie')] : v <= 21 ? ['good', fx('zone normale')] : v <= 30 ? ['warn', fx('élevée')] : v <= 45 ? ['bad', fx('très élevée')] : ['bad', 'niveau de crise'];
    box.className = 'readout ' + stt[0]; U.$('[data-iopst]', el).textContent = stt[1];
    U.$('[data-flows]', el).innerHTML = 'F ' + R.F.toFixed(2) + ' · U ' + R.U.toFixed(2) + '<br>C ' + R.C.toFixed(3) + ' · Pv ' + R.Pv.toFixed(1);
    U.$('[data-eqn]', el).textContent = fx('PIO = (F − U) / C + Pv = (') + R.F.toFixed(2) + ' − ' + R.U.toFixed(2) + ') / ' + R.C.toFixed(3) + ' + ' + R.Pv.toFixed(1) + (R.Cb ? fx('  [avec dérivation vers la bulle]') : '') + ' ≈ ' + v.toFixed(1) + ' mmHg';
    U.$('[data-scd]', el).textContent = st.manual ? fx('Valeurs manuelles.') : Sims.aq.scen[st.sc].d;
    U.$('[data-notes]', el).innerHTML = R.notes.map(function (n) { return '<li><b>' + U.esc(n[0]) + '</b> : ' + U.md(n[1]) + '</li>'; }).join('') || fx('<li>Aucun traitement : essaie d’ajouter une goutte ou un laser.</li>');
    st.parts = [];
    if (reduced) drawStatic();
  }
  function drawStatic() {
    var g = U.$('[data-parts]', svg), h = '';
    ['trab', 'uveo'].concat(R.Cb ? ['bleb'] : []).forEach(function (k) { if (R.block && k !== 'bleb') return; h += '<path d="M' + paths[k].map(pt).join(' L') + '" stroke="' + (k === 'trab' ? '#7d97ff' : k === 'uveo' ? '#a6e34f' : '#f2c535') + '" stroke-width="2" stroke-dasharray="5 5" fill="none"/>'; });
    if (R.block) h += '<path d="M' + paths.prodBlock.map(pt).join(' L') + '" stroke="#7d97ff" stroke-width="2" stroke-dasharray="5 5" fill="none"/>';
    g.innerHTML = h;
  }
  function frame(ts) {
    if (!st.last) st.last = ts; var dt = Math.min(0.05, (ts - st.last) / 1000); st.last = ts;
    var rate = R.F * 14; st.acc += rate * dt;
    while (st.acc >= 1 && st.parts.length < 220) {
      st.acc -= 1;
      var share = R.F > 0 ? R.U / R.F : 0, bShare = R.Cb ? (R.Cb * Math.max(0, R.iop - 1)) / R.F : 0, x = Math.random(), route;
      if (R.block) route = 'prodBlock'; else if (x < bShare) route = 'bleb'; else if (x < bShare + share) route = 'uveo'; else route = 'trab';
      st.parts.push({ k: R.block ? 'prodBlock' : 'prod', next: route, d: 0, sp: 40 + Math.random() * 20 });
    }
    var slow = U.clamp(R.C / 0.28, 0.15, 1.4), out = '';
    st.parts = st.parts.filter(function (p) {
      var sp = p.sp; if (p.k === 'trab') { if (p.d > lens.trab[5] && p.d < lens.trab[7]) sp *= slow; }
      if (p.k === 'prodBlock' && p.d > lens.prodBlock[lens.prodBlock.length - 1] - 2) { sp = 0; p.life = (p.life || 0) + dt; if (p.life > 3.5) return false; }
      p.d += sp * dt;
      var q = at(p.k, p.d);
      if (!q) { if (p.k === 'prod') { p.k = p.next; p.d = 0; q = at(p.k, 0); } else if (p.k === 'prodBlock') { q = paths.prodBlock[paths.prodBlock.length - 1]; } else return false; }
      var col = p.k === 'uveo' ? '#6fbf2a' : p.k === 'bleb' ? '#e0b21b' : '#3f63e0';
      out += '<circle cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r="3.2" fill="' + col + '" stroke="#0b1220" stroke-width=".6"/>';
      return true;
    });
    var g = U.$('[data-parts]', svg); if (g) g.innerHTML = out;
    st.raf = requestAnimationFrame(frame);
  }
  Sims.on(el, 'click', '[data-sc]', function (b) { st.sc = b.getAttribute('data-sc'); U.$$('[data-sc]', el).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); update(); });
  Sims.on(el, 'click', '[data-drug]', function (b) { var k = b.getAttribute('data-drug'); st.on[k] = !st.on[k]; b.setAttribute('aria-pressed', String(!!st.on[k])); update(); });
  function readManual() { st.manual = U.$('[data-manual]', el).checked ? { F: +U.$('#aq-F', el).value, C: +U.$('#aq-C', el).value, U: +U.$('#aq-U', el).value, Pv: +U.$('#aq-Pv', el).value } : null; ['F', 'C', 'U', 'Pv'].forEach(function (k) { U.$('#aq-' + k + '-o', el).textContent = U.$('#aq-' + k, el).value; }); update(); }
  el.addEventListener('input', function (e) { if (e.target.matches('input[type=range],[data-manual]')) readManual(); });
  el.addEventListener('change', function (e) { if (e.target.matches('[data-manual]')) readManual(); });
  update();
  if (!reduced) st.raf = requestAnimationFrame(frame);
  return function () { cancelAnimationFrame(st.raf); };
};

/* ---------- corneal edema simulator ---------- */
Sims.edemaModel = function (ecd, iop, morning, nacl) {
  var f = 1 / (1 + Math.exp(-(ecd - 550) / 90));
  var hyd = U.clamp((1 - f) + (morning ? 0.12 * (1 - f) + 0.02 : 0), 0, 1);
  var cct = 540 + hyd * 350 - (nacl ? 12 : 0);
  var sp = 55 * (1 - 0.8 * hyd);
  var ip = iop - sp;
  var epi = U.clamp((ip + 1) / 14, 0, 1) * (nacl ? 0.6 : 1);
  return { pump: f, hyd: hyd, cct: cct, sp: sp, ip: ip, epi: epi };
};
Sims.defs.edema = function (el) {
  var st = { ecd: 2600, iop: 15, morning: false, nacl: false, gut: false };
  var presets = [['n', fx('Adulte normal'), 2600, 15, false], ['f1', fx('Fuchs débutant'), 1500, 15, true], ['f2', fx('Fuchs avancé'), 480, 15, true], ['pbk', fx('Kératopathie bulleuse pseudophaque'), 360, 16, false], ['aacc', fx('Crise aiguë (PIO 60)'), 2500, 60, false], ['dmek', fx('Après DMEK réussie'), 1800, 15, false]];
  el.innerHTML = fx('<div class="simgrid"><div class="stack"><div class="fig"><div class="fig-body" data-cfig></div><div class="fig-cap"><span>Cornée en coupe : le stroma gonfle quand la pompe endothéliale faiblit ; l’épithélium se remplit quand la PIO dépasse la pression d’imbibition.</span><span class="schema-badge">Simulation pédagogique</span></div></div>') +
    fx('<div class="stack"><div class="eyebrow">Ce que voit le patient</div><div class="mini-vision" data-vision>E F P T O Z</div></div></div>') +
    fx('<div class="stack"><div class="eyebrow">Préréglages</div><div class="chips">') + presets.map(function (p) { return '<button type="button" class="chip" data-pre="' + p[0] + '">' + U.esc(p[1]) + '</button>'; }).join('') + '</div>' +
    sliderHtml('ed-ecd', fx('Densité endothéliale (cell/mm²)'), 200, 3500, 50, st.ecd) + sliderHtml('ed-iop', fx('PIO (mmHg)'), 8, 70, 1, st.iop) +
    fx('<div class="row"><label class="toggle"><input type="checkbox" data-k="morning"> Au réveil (paupières fermées la nuit)</label><label class="toggle"><input type="checkbox" data-k="nacl"> NaCl 5 % (hypertonique)</label><label class="toggle"><input type="checkbox" data-k="gut"> Guttae</label></div>') +
    fx('<div class="grid2" style="grid-template-columns:repeat(2,minmax(0,1fr))"><div class="readout" data-cctbox><span class="u">Pachymétrie centrale</span><span class="v" data-cct></span></div><div class="readout"><span class="u">Pompe endothéliale</span><span class="v" data-pump></span></div>') +
    fx('<div class="readout"><span class="u">Pression d’imbibition (PIO − gonflement)</span><span class="v" data-ip></span></div><div class="readout" data-stbox><span class="u">État</span><span class="small" data-state style="font-weight:700"></span></div></div>') +
    '<p class="small muted" data-explain></p></div></div>';
  function upd() {
    var m = Sims.edemaModel(st.ecd, st.iop, st.morning, st.nacl);
    U.$('[data-cfig]', el).innerHTML = Figures.cornea({ guttae: st.gut }, { stromaGain: U.clamp((m.cct - 540) / 300, 0, 1.1), epiEdema: m.epi }).svg;
    U.$('[data-cct]', el).textContent = Math.round(m.cct) + ' µm';
    U.$('[data-cctbox]', el).className = 'readout ' + (m.cct < 600 ? 'good' : m.cct < 650 ? 'warn' : 'bad');
    U.$('[data-pump]', el).textContent = Math.round(m.pump * 100) + ' %';
    U.$('[data-ip]', el).textContent = (m.ip > 0 ? '+' : '') + Math.round(m.ip) + ' mmHg';
    var state, expl;
    if (m.epi > 0.15 && m.hyd < 0.2) { state = fx('Œdème épithélial (halos)'); expl = fx('L’endothélium est sain mais la PIO dépasse la pression de gonflement du stroma : l’eau est poussée dans l’épithélium (microkystes). Typique de la crise aiguë de fermeture de l’angle.'); }
    else if (m.epi > 0.15) { state = fx('Œdème stromal + bulles (douleur)'); expl = fx('Pompe insuffisante : le stroma gonfle, sa pression de gonflement chute et l’épithélium se remplit même à PIO normale. Bulles qui crèvent = douleur. Baisser la PIO et le NaCl 5 % aident ; la solution durable est la greffe endothéliale.'); }
    else if (m.cct > 600) { state = fx('Œdème stromal (brouillard)'); expl = fx('La pompe ne suffit plus : le stroma s’hydrate, les lamelles se désorganisent et diffusent la lumière. Vision floue, souvent pire au réveil (moins d’évaporation pendant la nuit).'); }
    else { state = fx('Cornée transparente'); expl = fx('La pompe Na⁺/K⁺-ATPase et la barrière endothéliale gardent le stroma déshydraté (≈ 78 % d’eau) : les fibres restent régulièrement espacées et la cornée transparente. Il existe une grande réserve : la décompensation survient surtout sous 400–500 cell/mm².'); }
    U.$('[data-state]', el).textContent = state; U.$('[data-stbox]', el).className = 'readout ' + (state === fx('Cornée transparente') ? 'good' : 'bad');
    U.$('[data-explain]', el).textContent = expl;
    var blur = U.clamp((m.cct - 560) / 60, 0, 4) + m.epi * 2.5;
    var vis = U.$('[data-vision]', el); vis.style.filter = 'blur(' + blur.toFixed(1) + 'px)'; vis.style.textShadow = m.epi > 0.2 ? '0 0 14px rgba(120,120,255,.9)' : 'none';
    U.$('#ed-ecd-o', el).textContent = st.ecd; U.$('#ed-iop-o', el).textContent = st.iop;
  }
  el.addEventListener('input', function (e) { if (e.target.id === 'ed-ecd') st.ecd = +e.target.value; if (e.target.id === 'ed-iop') st.iop = +e.target.value; upd(); });
  el.addEventListener('change', function (e) { var k = e.target.getAttribute('data-k'); if (k) { st[k] = e.target.checked; upd(); } });
  Sims.on(el, 'click', '[data-pre]', function (b) { var p = presets.filter(function (x) { return x[0] === b.getAttribute('data-pre'); })[0]; st.ecd = p[2]; st.iop = p[3]; st.gut = p[4]; U.$('#ed-ecd', el).value = st.ecd; U.$('#ed-iop', el).value = st.iop; U.$('[data-k="gut"]', el).checked = st.gut; upd(); });
  upd();
};

/* ---------- RAPD (swinging flashlight) ---------- */
Sims.defs.rapd = function (el) {
  var lesions = { none: [fx('Aucune lésion'), 1, 1, 1, 1], no: [fx('Névrite optique gauche'), 1, 0.35, 1, 1], glau: [fx('Glaucome asymétrique (OD plus atteint)'), 0.7, 1, 1, 1], cat: [fx('Cataracte dense OD'), 0.97, 1, 1, 1], rd: [fx('Décollement de rétine étendu OS'), 1, 0.6, 1, 1], amau: [fx('Nerf optique gauche sectionné'), 1, 0, 1, 1], iii: [fx('Paralysie du NC III droit (efférent)'), 1, 1, 0, 1] };
  var st = { les: 'none', light: null, swing: false, timer: 0, prev: null, msg: fx('Allume une lampe sur un œil, puis balance-la d’un œil à l’autre.') };
  el.innerHTML = fx('<div class="simgrid"><div class="stack"><div class="fig" style="background:#0b0f1a"><div class="fig-body"><svg viewBox="0 0 520 220" data-rsvg role="img" aria-label="Pupilles du patient"></svg></div><div class="fig-cap" style="background:var(--surface)"><span>Tu fais face au patient : son œil droit (OD) est à ta gauche.</span><span class="schema-badge">Simulation pédagogique</span></div></div><div class="callout" data-rmsg aria-live="polite"></div></div>') +
    fx('<div class="stack"><label class="small" for="rapd-les">Situation clinique</label><select id="rapd-les">') + Object.keys(lesions).map(function (k) { return '<option value="' + k + '">' + U.esc(lesions[k][0]) + '</option>'; }).join('') + '</select>' +
    fx('<div class="row"><button class="btn" data-l="OD">Éclairer OD</button><button class="btn" data-l="OS">Éclairer OS</button><button class="btn" data-l="off">Éteindre</button><button class="btn primary" data-l="swing" aria-pressed="false">Balancement automatique</button></div>') +
    fx('<div class="readout"><span class="u">Lecture</span><span class="small" data-rread></span></div><p class="small muted">Règle : un défaut afférent ne crée pas d’anisocorie, car chaque œil commande les deux pupilles (réflexe consensuel). Si une pupille est fixe (lésion efférente), observe l’autre pupille : c’est le RAPD « inverse ».</p></div></div>');
  var svg = U.$('[data-rsvg]', el);
  function diam(eye) { var L = lesions[st.les]; var drive = st.light ? (st.light === 'OD' ? L[1] : L[2]) : 0; var eff = eye === 'OD' ? L[3] : L[4]; return eff ? 7 - 4.2 * drive : 7.2; }
  function draw() {
    var h = '';
    [['OD', 150], ['OS', 370]].forEach(function (e) {
      var d = diam(e[0]), k = d / 7.2;
      h += '<g><path d="M' + (e[1] - 110) + ',110 C ' + (e[1] - 60) + ',40 ' + (e[1] + 60) + ',40 ' + (e[1] + 110) + ',110 C ' + (e[1] + 60) + ',172 ' + (e[1] - 60) + ',172 ' + (e[1] - 110) + ',110 Z" fill="#f4f1ea"/>' +
        '<circle cx="' + e[1] + '" cy="110" r="46" fill="#5d7f9e"/><g style="transform-box:fill-box;transform-origin:center;transform:scale(' + k.toFixed(3) + ');transition:transform .45s ease"><circle cx="' + e[1] + '" cy="110" r="30" fill="#0a0a0a"/></g>' +
        '<circle cx="' + (e[1] - 14) + '" cy="96" r="5" fill="#fff" opacity=".8"/><text x="' + e[1] + '" y="200" text-anchor="middle" class="lbl lbl-b" style="fill:#e6ecf8">' + e[0] + ' · ' + d.toFixed(1).replace('.', ',') + ' mm</text>' +
        (st.light === e[0] ? '<path d="M' + (e[1] - 30) + ',8 L' + (e[1] + 30) + ',8 L' + (e[1] + 10) + ',70 L' + (e[1] - 10) + ',70 Z" fill="#fff6c2" opacity=".55"/>' : '') + '</g>';
    });
    svg.innerHTML = h;
    var L = lesions[st.les], a = Math.min(L[1], L[2]) / Math.max(L[1], L[2]), worse = L[1] < L[2] ? 'OD' : 'OS';
    var grade = a > 0.9 ? fx('pas de RAPD significatif') : a > 0.7 ? fx('RAPD ') + worse + ' 1+' : a > 0.5 ? fx('RAPD ') + worse + ' 2+' : a > 0.3 ? fx('RAPD ') + worse + ' 3+' : a > 0 ? fx('RAPD ') + worse + ' 4+' : 'pupille amaurotique ' + worse;
    if (L[3] === 0) grade = fx('pupille OD fixe (efférent) — juger le RAPD sur la pupille OS');
    U.$('[data-rread]', el).textContent = grade + ' (gradation illustrative)';
    U.$('[data-rmsg]', el).innerHTML = U.md(st.msg);
  }
  function light(eye) {
    var L = lesions[st.les], prev = st.light; st.light = eye;
    if (eye && prev && prev !== eye) {
      var dPrev = prev === 'OD' ? L[1] : L[2], dNew = eye === 'OD' ? L[1] : L[2];
      st.msg = dNew < dPrev - 0.08 ? fx('En passant sur **') + eye + fx('**, les deux pupilles se **dilatent** : l’influx afférent de ') + eye + fx(' est plus faible → **RAPD ') + eye + '**.' : dNew > dPrev + 0.08 ? fx('En revenant sur **') + eye + fx('**, les deux pupilles se contractent : cet œil transmet mieux la lumière.') : fx('Les pupilles restent stables : influx afférent symétrique.');
      if (L[3] === 0) st.msg += fx(' La pupille OD ne bouge pas (paralysie efférente) : regarde la pupille OS.');
    } else if (eye) st.msg = fx('Lumière sur **') + eye + fx('** : réflexe direct et consensuel. Balance maintenant vers l’autre œil (2–3 s par œil).');
    else st.msg = fx('Pénombre : pupilles en mydriase relative.');
    draw();
  }
  function stopSwing() { st.swing = false; clearInterval(st.timer); var b = U.$('[data-l="swing"]', el); if (b) b.setAttribute('aria-pressed', 'false'); }
  Sims.on(el, 'click', '[data-l]', function (b) {
    var l = b.getAttribute('data-l');
    if (l === 'swing') { if (st.swing) { stopSwing(); return; } st.swing = true; b.setAttribute('aria-pressed', 'true'); light(st.light === 'OD' ? 'OS' : 'OD'); st.timer = setInterval(function () { light(st.light === 'OD' ? 'OS' : 'OD'); }, 2600); return; }
    stopSwing(); light(l === 'off' ? null : l);
  });
  U.$('#rapd-les', el).addEventListener('change', function (e) { st.les = e.target.value; st.msg = fx('Situation : **') + lesions[st.les][0] + fx('**. Fais le test.'); draw(); });
  draw();
  return function () { clearInterval(st.timer); };
};

/* ---------- gonioscopy simulator ---------- */
Sims.defs.gonio = function (el) {
  var st = { grade: 3, indent: false, pas: false, nv: false, rec: false, pig: 'light', reveal: false };
  el.innerHTML = fx('<div class="simgrid"><div class="fig"><div class="fig-body" data-gfig></div><div class="fig-cap"><span data-gcap></span><span class="schema-badge">Simulation pédagogique</span></div></div>') +
    '<div class="stack">' + sliderHtml('g-grade', fx('Ouverture de l’angle (Shaffer)'), 0, 4, 1, st.grade) +
    fx('<div class="row"><label class="toggle"><input type="checkbox" data-k="indent"> Indentation (verre à 4 miroirs)</label><label class="toggle"><input type="checkbox" data-k="pas"> Synéchies (PAS)</label></div>') +
    fx('<div class="row"><label class="toggle"><input type="checkbox" data-k="nv"> Néovaisseaux</label><label class="toggle"><input type="checkbox" data-k="rec"> Récession traumatique</label><label class="toggle"><input type="checkbox" data-k="reveal"> Révéler les anomalies</label></div>') +
    fx('<label class="small" for="g-pig">Pigmentation du trabéculum</label><select id="g-pig"><option value="light">Légère</option><option value="heavy">Dense, homogène (dispersion pigmentaire)</option><option value="sampaolesi">Irrégulière + ligne de Sampaolesi (pseudo-exfoliation)</option></select>') +
    fx('<div class="readout"><span class="u">Interprétation</span><span class="small" data-gint></span></div></div></div>');
  function upd() {
    var out = Figures.gonio({ grade: st.grade, pas: st.pas, pigment: st.pig, nv: st.nv, recession: st.rec }, { indent: st.indent, reveal: st.reveal });
    U.$('[data-gfig]', el).innerHTML = out.svg; U.$('[data-gcap]', el).textContent = out.cap;
    var eff = st.indent ? Math.min(4, st.grade + 2) : st.grade, txt;
    if (st.grade <= 1 && st.indent && !st.pas) txt = fx('Fermeture **appositionnelle** : l’indentation rouvre l’angle (pas de synéchies). Angle à risque : iridotomie à discuter selon le contexte (PACS vs PAC).');
    else if (st.grade <= 1 && st.indent && st.pas) txt = fx('Fermeture **synéchiale** par endroits : l’indentation rouvre l’angle sauf aux PAS. Les synéchies classent au moins en PAC.');
    else if (eff >= 3) txt = fx('Angle **ouvert** : éperon scléral visible. On cherche alors une cause secondaire (pigment, PXF, néovaisseaux, récession).');
    else if (eff === 2) txt = fx('Angle **étroit** : trabéculum visible mais pas l’éperon. Surveiller, gonioscopie dynamique, AS-OCT au besoin.');
    else txt = fx('Trabéculum postérieur **non visible** : contact iridotrabéculaire. ≥ 180° = au moins un PACS (ISGEO). Indenter pour distinguer apposition et synéchies.');
    if (st.nv) txt += fx(' Néovaisseaux qui franchissent l’éperon = **NVA** : urgence (anti-VEGF + PRP).');
    if (st.rec) txt += fx(' Bande ciliaire élargie et irrégulière = **récession** : risque de glaucome à vie, suivi annuel.');
    if (st.pig === 'heavy') txt += fx(' Pigment dense homogène 360° : pense **dispersion pigmentaire**.');
    if (st.pig === 'sampaolesi') txt += fx(' Pigment irrégulier + ligne de Sampaolesi : pense **pseudo-exfoliation**.');
    U.$('[data-gint]', el).innerHTML = Gloss.link(U.md(txt), Gloss.scope());
    U.$('#g-grade-o', el).textContent = st.grade;
  }
  el.addEventListener('input', function (e) { if (e.target.id === 'g-grade') { st.grade = +e.target.value; upd(); } });
  el.addEventListener('change', function (e) { var k = e.target.getAttribute('data-k'); if (k) { st[k] = e.target.checked; upd(); } if (e.target.id === 'g-pig') { st.pig = e.target.value; upd(); } });
  upd();
};

/* ---------- tear break-up time ---------- */
Sims.defs.tbut = function (el) {
  var st = { q: 80, t0: 0, raf: 0, run: false }; // the timer starts only when the learner blinks (no auto-paced animation)
  var reduced = U.reduced();
  el.innerHTML = fx('<div class="simgrid"><div class="fig dark-bg"><div class="fig-body"><svg viewBox="0 0 320 300" data-tsvg role="img" aria-label="Film lacrymal à la fluorescéine"></svg></div><div class="fig-cap" style="background:var(--surface)"><span>Fluorescéine + bleu cobalt : les taches sombres marquent la rupture du film.</span><span class="schema-badge">Simulation pédagogique</span></div></div>') +
    '<div class="stack">' + sliderHtml('t-q', fx('Qualité de la couche lipidique (glandes de Meibomius)'), 0, 100, 5, st.q, ' %') +
    fx('<button class="btn primary" data-blink>Cligner des yeux</button><div class="grid2" style="grid-template-columns:repeat(2,minmax(0,1fr))"><div class="readout"><span class="u">Depuis le clignement</span><span class="v" data-tt>0,0 s</span></div><div class="readout" data-tbox><span class="u">TBUT attendu</span><span class="v" data-tb></span></div></div>') +
    fx('<p class="small muted">Un TBUT &lt; 10 s est anormal. Une couche lipidique pauvre (dysfonction meibomienne) laisse la phase aqueuse s’évaporer vite : c’est la sécheresse évaporative. Mesure sans anesthésique, sans tenir les paupières, et avant tout autre colorant.</p></div></div>');
  var svg = U.$('[data-tsvg]', el);
  function tbut() { return 3 + st.q / 100 * 12; }
  function draw(t) {
    var T = tbut(), spots = '';
    if (t > T) { var r = U.rng(21), n = 9, grow = Math.min(1, (t - T) / 3); for (var i = 0; i < n; i++) { var x = 70 + r() * 180, y = 90 + r() * 140, rad = (6 + r() * 14) * grow; spots += '<ellipse cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" rx="' + rad.toFixed(1) + '" ry="' + (rad * 0.7).toFixed(1) + '" fill="#06103a"/>'; } }
    svg.innerHTML = '<rect width="320" height="300" fill="#050a22"/><circle cx="160" cy="150" r="118" fill="#173278"/><circle cx="160" cy="150" r="118" fill="#9be15d" opacity="' + (0.42 - Math.min(0.15, t / 60)).toFixed(2) + '"/>' + spots + '<path d="M40,262 Q160,250 280,262" stroke="#b5f04b" stroke-width="' + (4 + st.q / 25).toFixed(1) + '" opacity=".6" fill="none"/>';
    U.$('[data-tt]', el).textContent = t.toFixed(1).replace('.', ',') + ' s';
    U.$('[data-tb]', el).textContent = T.toFixed(0) + ' s'; U.$('[data-tbox]', el).className = 'readout ' + (T < 10 ? 'bad' : 'good');
  }
  function frame(ts) { var t = (ts - st.t0) / 1000; draw(Math.min(t, 30)); if (t < 30) st.raf = requestAnimationFrame(frame); else st.run = false; }
  Sims.on(el, 'click', '[data-blink]', function () { st.t0 = performance.now(); if (reduced) { draw(tbut() + 2); return; } cancelAnimationFrame(st.raf); st.run = true; st.raf = requestAnimationFrame(frame); });
  el.addEventListener('input', function (e) { if (e.target.id === 't-q') { st.q = +e.target.value; U.$('#t-q-o', el).textContent = st.q + ' %'; if (reduced) draw(tbut() + 2); else if (!st.run) draw(0); } });
  draw(0);
  return function () { cancelAnimationFrame(st.raf); };
};

/* ---------- Goldmann applanation ---------- */
Sims.defs.goldmann = function (el) {
  var st = { dial: 10, truth: 18, cct: 550, thick: false, lid: false, done: false, raf: 0, t0: performance.now() };
  var reduced = U.reduced();
  el.innerHTML = fx('<div class="simgrid"><div class="fig dark-bg"><div class="fig-body"><svg viewBox="0 0 320 240" data-gsvg role="img" aria-label="Mires de Goldmann"></svg></div><div class="fig-cap" style="background:var(--surface)"><span>Ajuste le cadran jusqu’à ce que les bords INTERNES des deux demi-cercles se touchent (au milieu de la pulsation).</span><span class="schema-badge">Simulation pédagogique</span></div></div>') +
    '<div class="stack">' + sliderHtml('gm-d', fx('Cadran (× 10 = mmHg)'), 4, 50, 1, st.dial, ' mmHg') +
    fx('<label class="small" for="gm-cct">Épaisseur cornéenne centrale</label><select id="gm-cct"><option value="480">Mince (480 µm)</option><option value="550" selected>Moyenne (550 µm)</option><option value="620">Épaisse (620 µm)</option></select>') +
    fx('<div class="row"><label class="toggle"><input type="checkbox" data-k="thick"> Trop de fluorescéine (mires épaisses)</label><label class="toggle"><input type="checkbox" data-k="lid"> Pression sur les paupières</label></div>') +
    fx('<div class="row"><button class="btn primary" data-v>Valider ma lecture</button><button class="btn" data-new>Nouveau patient</button></div><div class="readout"><span class="u">Résultat</span><span class="small" data-gres>Lis la PIO puis valide.</span></div></div></div>');
  var svg = U.$('[data-gsvg]', el);
  function bias() { return (st.cct === 480 ? -2 : st.cct === 620 ? 2 : 0) + (st.thick ? 2 : 0) + (st.lid ? 3 : 0); }
  function draw(t) {
    var reading = st.truth + bias(), pulse = reduced ? 0 : Math.sin(t * 2 * Math.PI * 1.1) * 1.2;
    var Dd = 64, w = st.thick ? 12 : 6, rin = Dd / 2 * Math.sqrt(Math.max(0.15, st.dial) / Math.max(1, reading + pulse));
    var r = rin + w / 2, cx = 160, cy = 120, ux = cx + Dd / 2, lx = cx - Dd / 2;
    svg.innerHTML = '<rect width="320" height="240" fill="#050a22"/><circle cx="160" cy="120" r="96" fill="#0d1d5a"/>' +
      '<path d="M' + (ux - r).toFixed(1) + ',' + cy + ' A' + r.toFixed(1) + ' ' + r.toFixed(1) + ' 0 0 1 ' + (ux + r).toFixed(1) + ',' + cy + '" stroke="#b5f04b" stroke-width="' + w + '" fill="none"/>' +
      '<path d="M' + (lx - r).toFixed(1) + ',' + cy + ' A' + r.toFixed(1) + ' ' + r.toFixed(1) + ' 0 0 0 ' + (lx + r).toFixed(1) + ',' + cy + '" stroke="#b5f04b" stroke-width="' + w + '" fill="none"/>' +
      '<path d="M40,' + cy + ' H280" stroke="#2a3c86" stroke-width="1"/>';
  }
  function frame(ts) { draw((ts - st.t0) / 1000); st.raf = requestAnimationFrame(frame); }
  el.addEventListener('input', function (e) { if (e.target.id === 'gm-d') { st.dial = +e.target.value; U.$('#gm-d-o', el).textContent = st.dial + ' mmHg'; if (reduced) draw(0); } });
  el.addEventListener('change', function (e) { var k = e.target.getAttribute('data-k'); if (k) st[k] = e.target.checked; if (e.target.id === 'gm-cct') st.cct = +e.target.value; if (reduced) draw(0); });
  Sims.on(el, 'click', '[data-v]', function () {
    var reading = st.truth + bias(), diff = st.dial - reading, ok = Math.abs(diff) <= 1;
    var why = [];
    if (st.cct === 480) why.push(fx('cornée mince → le Goldmann **sous-estime** la vraie PIO'));
    if (st.cct === 620) why.push(fx('cornée épaisse → **surestimation**'));
    if (st.thick) why.push(fx('mires trop épaisses → **surestimation**'));
    if (st.lid) why.push(fx('pression sur les paupières → **surestimation**'));
    U.$('[data-gres]', el).innerHTML = (ok ? fx('<b style="color:var(--ok)">Bonne lecture</b> : ') : fx('<b style="color:var(--bad)">Lecture à ') + (diff > 0 ? '+' : '') + diff + fx(' mmHg</b> du point d’aplanation : ')) + fx('l’instrument affiche ≈ ') + reading + fx(' mmHg ; PIO « réelle » du scénario : ') + st.truth + ' mmHg.' + (why.length ? ' ' + U.md(why.join(' ; ')) + fx('. Ne corrige pas par une formule : interprète.') : '');
  });
  Sims.on(el, 'click', '[data-new]', function () { st.truth = 12 + Math.floor(Math.random() * 20); U.$('[data-gres]', el).textContent = fx('Nouveau patient : lis la PIO puis valide.'); if (reduced) draw(0); });
  if (reduced) draw(0); else st.raf = requestAnimationFrame(frame);
  return function () { cancelAnimationFrame(st.raf); };
};

/* ---------- refraction ---------- */
Sims.defs.refraction = function (el) {
  var st = { al: 23.5, corr: false };
  el.innerHTML = fx('<div class="simgrid"><div class="fig"><div class="fig-body"><svg viewBox="0 0 560 260" data-fsvg role="img" aria-label="Réfraction schématique"></svg></div><div class="fig-cap"><span>Rayons parallèles venant de l’infini ; le point focal se place devant, sur ou derrière la rétine.</span><span class="schema-badge">Schéma pédagogique</span></div></div>') +
    '<div class="stack">' + sliderHtml('rf-al', fx('Longueur axiale (mm)'), 20, 28, 0.1, st.al, ' mm') + fx('<label class="toggle"><input type="checkbox" data-corr> Ajouter la lentille correctrice</label>') +
    fx('<div class="readout"><span class="u">Erreur réfractive (≈ 3 D par mm)</span><span class="v" data-rx></span></div><p class="small" data-rtxt></p></div></div>');
  function upd() {
    var err = -(st.al - 23.5) * 3, eyeL = 140 + (st.al - 20) / 8 * 260, cx0 = 120, retX = cx0 + eyeL;
    var focal = cx0 + 230 + (st.corr ? (retX - (cx0 + 230)) : 0);
    var s = '<rect width="560" height="260" fill="var(--surface)"/>';
    s += '<ellipse cx="' + ((cx0 + retX) / 2) + '" cy="130" rx="' + ((retX - cx0) / 2) + '" ry="95" fill="var(--t-vitreous)" stroke="var(--t-sclera-edge)" stroke-width="3"/>';
    s += '<path d="M' + cx0 + ',70 Q' + (cx0 - 22) + ',130 ' + cx0 + ',190" stroke="var(--t-cornea-edge)" stroke-width="5" fill="none"/><ellipse cx="' + (cx0 + 34) + '" cy="130" rx="14" ry="38" class="t-lens"/>';
    s += '<path d="M' + (retX - 4) + ',60 Q' + (retX + 4) + ',130 ' + (retX - 4) + ',200" stroke="var(--t-retina)" stroke-width="6" fill="none"/>';
    if (st.corr && Math.abs(err) > 0.25) s += err < 0 ? '<path d="M60,80 Q70,130 60,180 L76,180 Q66,130 76,80 Z" fill="#9fd0ff" opacity=".8"/>' : '<path d="M66,80 Q50,130 66,180 Q82,130 66,80 Z" fill="#9fd0ff" opacity=".8"/>';
    [-40, -20, 0, 20, 40].forEach(function (y0) { var y1 = 130 + y0; s += '<path d="M10,' + y1 + ' L' + cx0 + ',' + y1 + ' L' + focal + ',130' + (focal < retX ? ' L' + retX + ',' + (130 - (y0 * (retX - focal) / (focal - cx0))).toFixed(1) : '') + '" stroke="var(--cobalt)" stroke-width="1.6" fill="none"/>'; });
    s += '<circle cx="' + Math.min(focal, retX + 60) + '" cy="130" r="4" fill="var(--urgent)"/>';
    U.$('[data-fsvg]', el).innerHTML = s;
    U.$('[data-rx]', el).textContent = (st.corr ? 0 : err).toFixed(1).replace('.', ',') + ' D';
    var t = Math.abs(err) < 0.5 ? fx('Emmétropie : l’image se forme sur la rétine.') : err < 0 ? fx('Myopie axiale : œil trop long, foyer **devant** la rétine. Corrigée par une lentille divergente (négative). Risques associés : dispersion pigmentaire, décollement de rétine, glaucome.') : fx('Hypermétropie : œil court, foyer **derrière** la rétine. Lentille convergente (positive). Œil court = segment antérieur encombré : **risque de fermeture de l’angle**.');
    U.$('[data-rtxt]', el).innerHTML = Gloss.link(U.md(t), Gloss.scope());
    U.$('#rf-al-o', el).textContent = st.al.toFixed(1) + ' mm';
  }
  el.addEventListener('input', function (e) { if (e.target.id === 'rf-al') { st.al = +e.target.value; upd(); } });
  el.addEventListener('change', function (e) { if (e.target.hasAttribute('data-corr')) { st.corr = e.target.checked; upd(); } });
  upd();
};

/* ---------- visual field trainer ---------- */
Sims.vfPatterns = [['normal', fx('Normal')], ['sup-arcuate', fx('Arciforme supérieur')], ['inf-nasal-step', fx('Ressaut nasal inférieur')], ['sup-paracentral', fx('Paracentral supérieur')], ['double-arcuate', fx('Double arciforme')], ['temporal-wedge', fx('Coin temporal')], ['generalized', fx('Dépression diffuse (cataracte)')], ['bitemporal', fx('Bitemporal (chiasma)')], ['homonymous-left', fx('Hémianopsie homonyme gauche')], ['altitudinal-inf', fx('Altitudinal inférieur')], ['central', fx('Scotome central')], ['blind-spot', fx('Tache aveugle élargie')]];
Sims.vfText = {
  normal: fx('Aucun point anormal sur la déviation corrigée. Vérifie d’abord la fiabilité (faux positifs < 15 %).'),
  'sup-arcuate': fx('Défaut **arciforme** qui part de la tache aveugle et s’arrête au méridien horizontal nasal : faisceau de fibres **inférieur** (encoche inférotemporale de la papille). Typique du glaucome.'),
  'inf-nasal-step': fx('Perte limitée au champ nasal inférieur qui « respecte » le méridien horizontal : ressaut nasal, souvent le premier signe glaucomateux.'),
  'sup-paracentral': fx('Points profonds près du point de fixation : fréquent dans le glaucome à pression normale. Faire un **10-2** pour bien le mesurer.'),
  'double-arcuate': fx('Atteinte des deux hémichamps : glaucome avancé. Protéger la vision centrale.'),
  'temporal-wedge': fx('Coin temporal = atteinte des fibres nasales de la papille. Moins fréquent dans le glaucome.'),
  generalized: fx('La déviation totale est abaissée partout mais la déviation corrigée est normale : **dépression diffuse**, souvent une cataracte ou une petite pupille. Ce n’est pas une progression glaucomateuse.'),
  bitemporal: fx('Défaut qui respecte le **méridien vertical** : lésion du chiasma (adénome hypophysaire). Piège : ce n’est pas un glaucome → IRM.'),
  'homonymous-left': fx('Hémianopsie homonyme : lésion rétrochiasmatique droite. Respecte le méridien vertical → neuro-imagerie.'),
  'altitudinal-inf': fx('Perte de tout l’hémichamp inférieur, respectant le méridien horizontal : typique de la neuropathie optique ischémique antérieure (penser à l’artérite à cellules géantes après 50 ans).'),
  central: fx('Scotome central : maladie maculaire ou névrite optique. Pas un profil glaucomateux précoce.'),
  'blind-spot': fx('Tache aveugle élargie : œdème papillaire, fibres myélinisées, syndromes des taches blanches.')
};
Sims.defs.vf = function (el) {
  var st = { p: 'sup-arcuate', eye: 'OD', reveal: false, quiz: null };
  el.innerHTML = fx('<div class="stack"><div class="row"><div class="seg" role="group" aria-label="Œil"><button data-eye="OD" aria-pressed="true">OD</button><button data-eye="OS" aria-pressed="false">OS</button></div><label class="toggle"><input type="checkbox" data-rev> Révéler l’anomalie</label><button class="btn" data-quiz>Mode quiz : identifie le défaut</button></div>') +
    chipRow(Sims.vfPatterns, st.p, 'data-p') + '<div class="grid3" data-vfmaps></div><div class="callout" data-vft></div><div data-vfq></div></div>';
  function upd() {
    var p = st.quiz ? st.quiz.p : st.p, rv = st.reveal && !st.quiz;
    U.$('[data-vfmaps]', el).innerHTML = ['gray', 'td', 'pd'].map(function (m) { return Figures.render({ type: 'vf', pattern: p, eye: st.eye, map: m }, { reveal: rv && m === 'pd' }); }).join('');
    U.$('[data-vft]', el).innerHTML = st.quiz ? fx('Observe les trois cartes. Quel est le défaut ?') : Gloss.link(U.md(Sims.vfText[p] || ''), Gloss.scope());
  }
  function newQuiz() {
    var pool = Sims.vfPatterns.map(function (x) { return x[0]; }), p = pool[Math.floor(Math.random() * pool.length)];
    var opts = U.shuffle([p].concat(U.shuffle(pool.filter(function (x) { return x !== p; })).slice(0, 3)));
    st.quiz = { p: p, opts: opts };
    U.$('[data-vfq]', el).innerHTML = '<div class="opts">' + opts.map(function (o) { return '<button class="opt" data-qa="' + o + '"><span class="key">?</span><span>' + U.esc(Sims.vfPatterns.filter(function (x) { return x[0] === o; })[0][1]) + '</span></button>'; }).join('') + '</div>';
    upd();
  }
  Sims.on(el, 'click', '[data-p]', function (b) { st.quiz = null; U.$('[data-vfq]', el).innerHTML = ''; st.p = b.getAttribute('data-p'); U.$$('[data-p]', el).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); upd(); });
  Sims.on(el, 'click', '[data-eye]', function (b) { st.eye = b.getAttribute('data-eye'); U.$$('[data-eye]', el).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); upd(); });
  Sims.on(el, 'click', '[data-quiz]', function () { newQuiz(); });
  Sims.on(el, 'click', '[data-qa]', function (b) {
    if (!st.quiz) return; var ok = b.getAttribute('data-qa') === st.quiz.p;
    U.$$('[data-qa]', el).forEach(function (x) { x.disabled = true; if (x.getAttribute('data-qa') === st.quiz.p) x.classList.add('correct'); else if (x === b) x.classList.add('wrong'); });
    var p = st.quiz.p; st.quiz = null; st.p = p;
    U.$('[data-vfq]', el).insertAdjacentHTML('beforeend', '<div class="feedback ' + (ok ? 'ok' : 'bad') + '"><div class="verdict">' + (ok ? fx('Exact') : fx('Pas tout à fait')) + '</div><div>' + Gloss.link(U.md(Sims.vfText[p]), Gloss.scope()) + fx('</div><button class="btn sm" data-quiz>Autre champ</button></div>'));
    st.reveal = true; U.$('[data-rev]', el).checked = true; upd();
  });
  el.addEventListener('change', function (e) { if (e.target.hasAttribute('data-rev')) { st.reveal = e.target.checked; upd(); } });
  upd();
};

/* ---------- disc + OCT + field: structure-function explorer ---------- */
Sims.defs.structure = function (el) {
  var st = { cd: 0.4, notch: 'none', heme: false, ppa: false, pallor: false, reveal: false };
  el.innerHTML = '<div class="stack"><div class="grid2"><div class="stack">' + sliderHtml('st-cd', fx('Excavation (C/D vertical)'), 0.2, 0.95, 0.05, st.cd) +
    fx('<div class="row"><label class="small" for="st-n">Encoche</label><select id="st-n"><option value="none">Aucune</option><option value="inf">Inférieure</option><option value="sup">Supérieure</option></select></div>') +
    fx('<div class="row"><label class="toggle"><input type="checkbox" data-k="heme"> Hémorragie papillaire</label><label class="toggle"><input type="checkbox" data-k="ppa"> Atrophie péripapillaire</label><label class="toggle"><input type="checkbox" data-k="pallor"> Pâleur du bord</label><label class="toggle"><input type="checkbox" data-k="reveal"> Révéler</label></div>') +
    '<div class="callout" data-sti></div></div><div data-disc></div></div><div class="grid2"><div data-oct></div><div data-vfs></div></div></div>';
  function upd() {
    var octP = st.pallor ? 'diffuse' : st.cd >= 0.85 ? 'bi-arcuate' : st.notch === 'inf' ? 'inf-thin' : st.notch === 'sup' ? 'sup-thin' : st.cd >= 0.7 ? 'inf-thin' : 'normal';
    var vfP = st.pallor ? 'central' : st.cd >= 0.85 ? 'double-arcuate' : st.notch === 'inf' ? 'sup-arcuate' : st.notch === 'sup' ? 'inf-arcuate' : st.cd >= 0.7 ? 'sup-nasal-step' : 'normal';
    U.$('[data-disc]', el).innerHTML = Figures.render({ type: 'disc', cd: st.cd, notch: st.notch, heme: st.heme, ppa: st.ppa, pallor: st.pallor }, { reveal: st.reveal });
    U.$('[data-oct]', el).innerHTML = Figures.render({ type: 'oct', pattern: octP }, { reveal: st.reveal, caption: fx('OCT RNFL correspondant (schéma)') });
    U.$('[data-vfs]', el).innerHTML = Figures.render({ type: 'vf', pattern: vfP, eye: 'OD', map: 'pd' }, { reveal: st.reveal, caption: fx('Champ visuel correspondant (schéma)') });
    var t = [];
    if (st.pallor) t.push(fx('**Pâleur > excavation** : pense à une neuropathie non glaucomateuse (compressive, ischémique, inflammatoire). Vision des couleurs, RAPD, champ qui respecte le méridien vertical → imagerie.'));
    else if (st.cd >= 0.7 || st.notch !== 'none') t.push(fx('Excavation suspecte') + (st.notch !== 'none' ? fx(' avec **encoche ') + (st.notch === 'inf' ? fx('inférieure') : fx('supérieure')) + '**' : '') + fx('. Correspondance structure-fonction : l’atteinte **') + (st.notch === 'sup' ? fx('supérieure') : fx('inférieure')) + fx('** de la papille donne un défaut **') + (st.notch === 'sup' ? fx('inférieur') : fx('supérieur')) + fx('** du champ.'));
    else t.push(fx('Papille dans les limites : bord neurorétinien qui suit la règle ISNT. Toujours estimer la **taille du disque** avant de juger le C/D.'));
    if (st.heme) t.push(fx('**Hémorragie papillaire (Drance)** : marqueur de progression, fréquente dans le glaucome à pression normale. Elle disparaît en quelques semaines : à documenter.'));
    if (st.ppa) t.push(fx('Atrophie péripapillaire zone bêta : associée au glaucome et à sa progression (aussi fréquente en myopie).'));
    U.$('[data-sti]', el).innerHTML = Gloss.link(U.md(t.join(' ')), Gloss.scope());
    U.$('#st-cd-o', el).textContent = st.cd.toFixed(2).replace('.', ',');
  }
  el.addEventListener('input', function (e) { if (e.target.id === 'st-cd') { st.cd = +e.target.value; upd(); } });
  el.addEventListener('change', function (e) { var k = e.target.getAttribute('data-k'); if (k) { st[k] = e.target.checked; upd(); } if (e.target.id === 'st-n') { st.notch = e.target.value; upd(); } });
  upd();
};

/* ---------- pattern explorers (fluorescein, slit lamp, topography, OCT) ---------- */
Sims.explorerData = {
  fluo: { label: fx('Coloration à la fluorescéine'), items: [['normal', fx('Normal')], ['spk-inferior', fx('KPS inférieure')], ['spk-interpalpebral', fx('KPS interpalpébrale')], ['spk-superior', fx('KPS supérieure')], ['dendrite', fx('Dendrite')], ['geographic', fx('Ulcère géographique')], ['pseudodendrite', fx('Pseudodendrite')], ['abrasion', fx('Abrasion')], ['fb-tracking', fx('Stries de corps étranger')], ['ulcer', fx('Ulcère infectieux')], ['seidel', fx('Seidel positif')], ['negative', fx('Coloration négative')]],
    text: { normal: fx('Film uniforme, ménisque lacrymal net, aucune prise de colorant.'), 'spk-inferior': fx('Kératite ponctuée inférieure : exposition (lagophtalmie), blépharite, toxicité des gouttes (agent de conservation).'), 'spk-interpalpebral': fx('Bande horizontale entre les paupières : sécheresse (zone exposée à l’évaporation).'), 'spk-superior': fx('Prise supérieure : kératoconjonctivite limbique supérieure, lentille serrée, kératoconjonctivite vernale.'), dendrite: fx('Ulcère ramifié avec **bulbes terminaux** : kératite épithéliale à HSV. Pas de stéroïde ; antiviral.'), geographic: fx('Grand ulcère à bords festonnés : HSV, souvent après un stéroïde. Antiviral.'), pseudodendrite: fx('Lésion surélevée, sans bulbes, qui prend peu la fluorescéine : zona ou Acanthamoeba au début.'), abrasion: fx('Défaut épithélial net et géométrique : abrasion. Chez le porteur de lentilles : couverture anti-Pseudomonas, pas de pansement occlusif.'), 'fb-tracking': fx('Stries verticales : corps étranger sous la paupière supérieure → **éverser la paupière**.'), ulcer: fx('Défaut épithélial sur un infiltrat blanc : ulcère infectieux. Mesurer, cultiver si critères, traiter intensément.'), seidel: fx('On applique de la fluorescéine concentrée (orange foncé, peu fluorescente) sur la zone suspecte ; si de l’humeur aqueuse fuit, elle la dilue en un **filet vert vif** qui coule : **Seidel positif** = fuite (perforation, plaie, bulle de filtration qui fuit).'), negative: fx('Zones sombres dans le film coloré : relief épithélial sous-jacent (dystrophie de la membrane basale, « map-dot-fingerprint »).') } },
  slit: { label: fx('Segment antérieur'), items: [['normal', fx('Normal')], ['hypopyon', fx('Hypopyon')], ['kp', fx('Précipités rétrocornéens')], ['aacc', fx('Crise aiguë')], ['krukenberg', fx('Fuseau de Krukenberg')], ['tid', fx('Transillumination irienne')], ['pxf', fx('Pseudo-exfoliation')], ['nvi', fx('Rubéose')], ['bleb', fx('Bulle filtrante')]],
    text: { normal: fx('Œil blanc, cornée claire, chambre calme, iris aux cryptes nettes.'), hypopyon: fx('Niveau de globules blancs dans la chambre : kératite infectieuse sévère, endophtalmite, uvéite sévère (HLA-B27, Behçet).'), kp: fx('Dépôts de cellules inflammatoires sur l’endothélium, surtout en bas (triangle d’Arlt) : uvéite antérieure, rejet de greffe, kératite herpétique.'), aacc: fx('Injection périkératique, cornée œdémateuse, pupille semi-dilatée aréactive : crise aiguë de fermeture de l’angle — urgence.'), krukenberg: fx('Pigment déposé en fuseau vertical sur l’endothélium par les courants de convection : dispersion pigmentaire.'), tid: fx('En rétro-illumination, défects radiaires de la périphérie moyenne de l’iris : frottement iris-zonules de la dispersion pigmentaire.'), pxf: fx('Dépôts blanchâtres en cible sur la capsule (disque central, zone claire, bande périphérique) : pseudo-exfoliation. Mieux vu pupille dilatée.'), nvi: fx('Fins vaisseaux au rebord pupillaire puis sur l’iris : rubéose (ischémie rétinienne : OVCR, rétinopathie diabétique). Faire la gonioscopie.'), bleb: fx('Bulle filtrante supérieure après trabéculectomie : on note hauteur, étendue, vascularisation et on fait un Seidel.') } },
  topo: { label: fx('Topographie (courbure axiale)'), items: [['normal', fx('Normale')], ['wtr', fx('Astigmatisme direct')], ['atr', fx('Astigmatisme inverse')], ['kc-inferior', fx('Kératocône inférieur')], ['kc-central', fx('Kératocône central')], ['pmd', fx('Dégénérescence marginale pellucide')]],
    text: { normal: fx('Courbure régulière ≈ 43–44 D, légère symétrie verticale.'), wtr: fx('Nœud papillon vertical symétrique : méridien vertical le plus cambré (astigmatisme direct, fréquent chez le jeune et avec le ptérygion).'), atr: fx('Nœud papillon horizontal : astigmatisme inverse (fréquent avec l’âge).'), 'kc-inferior': fx('Cambrure inférieure, nœud papillon asymétrique aux axes déviés, Kmax élevé et asymétrie inférieure-supérieure > 1,4 D : kératocône. Confirmer à la tomographie (élévation postérieure, pachymétrie).'), 'kc-central': fx('Cône central (« nipple ») : Kmax élevé au centre.'), pmd: fx('Cambrure en bande inférieure qui remonte des deux côtés (« pince de crabe ») avec astigmatisme inverse : dégénérescence marginale pellucide (amincissement à 1–2 mm du limbe inférieur).') } },
  oct: { label: fx('OCT RNFL'), items: [['normal', fx('Normal')], ['inf-thin', fx('Amincissement inférieur')], ['sup-thin', fx('Amincissement supérieur')], ['bi-arcuate', fx('Deux pôles')], ['diffuse', fx('Diffus')], ['red-disease', '« Red disease »'], ['green-disease', '« Green disease »']],
    text: { normal: fx('Double bosse (S et I) dans le vert : épaisseur normale pour l’âge.'), 'inf-thin': fx('Pic inférieur effondré : glaucome débutant classique → cherche un défaut **supérieur** du champ.'), 'sup-thin': fx('Pic supérieur aminci → défaut **inférieur** du champ.'), 'bi-arcuate': fx('Les deux pics sont touchés : glaucome modéré à avancé.'), diffuse: fx('Amincissement global : glaucome avancé ou neuropathie non glaucomateuse ; corréler à la papille.'), 'red-disease': fx('Faux positif : la courbe « sort » de la norme parce que les pics sont déplacés (myopie forte, papille inclinée) ou mal segmentés. Regarde l’image et la qualité.'), 'green-disease': fx('Faux négatif : courbe dans le vert malgré une atteinte réelle (débutante, ou épaississement par œdème/membrane). Le champ et la papille priment.') } }
};
Sims.defs.patterns = function (el) {
  var kind = el.getAttribute('data-kind'), D2 = Sims.explorerData[kind], st = { p: D2.items[0][0], reveal: false };
  var normal = el.getAttribute('data-compare') === '1';
  el.innerHTML = '<div class="stack">' + chipRow(D2.items, st.p, 'data-p') + fx('<label class="toggle"><input type="checkbox" data-rev> Révéler les anomalies (cercles)</label><div class="') + (normal ? 'pair' : '') + '" data-pf></div><div class="callout" data-pt></div></div>';
  function upd() {
    var fig = { type: kind, pattern: st.p };
    var html = normal && st.p !== 'normal' ? fx('<div><div class="pair-h lab n">Normal</div>') + Figures.render({ type: kind, pattern: 'normal' }) + fx('</div><div><div class="lab p">Pathologique</div>') + Figures.render(fig, { reveal: st.reveal }) + '</div>' : Figures.render(fig, { reveal: st.reveal });
    U.$('[data-pf]', el).innerHTML = html; Figures.hydrate(el);
    U.$('[data-pt]', el).innerHTML = Gloss.link(U.md(D2.text[st.p] || ''), Gloss.scope());
  }
  Sims.on(el, 'click', '[data-p]', function (b) { st.p = b.getAttribute('data-p'); U.$$('[data-p]', el).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); upd(); });
  el.addEventListener('change', function (e) { if (e.target.hasAttribute('data-rev')) { st.reveal = e.target.checked; upd(); } });
  upd();
};

/* ---------- Van Herick ---------- */
Sims.defs.vanherick = function (el) {
  var st = { g: 4 };
  el.innerHTML = '<div class="simgrid"><div data-vh></div><div class="stack">' + sliderHtml('vh-g', fx('Grade de Van Herick'), 0, 4, 1, 4) + '<p class="small" data-vht></p></div></div>';
  function upd() {
    U.$('[data-vh]', el).innerHTML = Figures.render({ type: 'vanherick', grade: st.g }, { reveal: true });
    U.$('[data-vht]', el).innerHTML = U.md(st.g >= 3 ? fx('Chambre périphérique profonde : fermeture peu probable, mais la gonioscopie reste l’examen de référence.') : fx('Grade ≤ 2 : angle possiblement étroit → **gonioscopie** avant toute dilatation répétée et pour classer (PACS/PAC/PACG).'));
    U.$('#vh-g-o', el).textContent = st.g;
  }
  el.addEventListener('input', function (e) { if (e.target.id === 'vh-g') { st.g = +e.target.value; upd(); } });
  upd();
};

/* ---------- specular microscopy ---------- */
Sims.drawSpec = function (cv) {
  var ecd = +cv.getAttribute('data-ecd'), poly = +cv.getAttribute('data-poly'), gut = cv.getAttribute('data-gut') === '1';
  var ctx = cv.getContext('2d'); if (!ctx) return; var W = cv.width, H = cv.height, ppm = 2; // px per µm
  ctx.fillStyle = '#2b2b2b'; ctx.fillRect(0, 0, W, H);
  var area = 1e6 / ecd, s = Math.sqrt(2 * area / (3 * Math.sqrt(3))) * ppm, r = U.rng(31);
  ctx.strokeStyle = '#e9e9e9'; ctx.lineWidth = 1.4;
  var dx = s * Math.sqrt(3), dy = s * 1.5;
  for (var row = -1; row * dy < H + s; row++) for (var col = -1; col * dx < W + dx; col++) {
    var cx = col * dx + (row % 2 ? dx / 2 : 0), cy = row * dy, k = 1 + (r() - 0.5) * poly / 100 * 0.9;
    ctx.beginPath();
    for (var i = 0; i < 6; i++) { var a = Math.PI / 6 + i * Math.PI / 3 + (r() - 0.5) * poly / 100 * 0.5, rr = s * k * (1 + (r() - 0.5) * poly / 100 * 0.35); var x = cx + rr * Math.cos(a), y = cy + rr * Math.sin(a); if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
    ctx.closePath(); var gv = 140 + Math.floor(r() * 45); ctx.fillStyle = 'rgb(' + gv + ',' + gv + ',' + gv + ')'; ctx.fill(); ctx.stroke();
  }
  if (gut) { for (var g = 0; g < 14; g++) { ctx.beginPath(); ctx.fillStyle = '#0b0b0b'; ctx.arc(r() * W, r() * H, (8 + r() * 16) * ppm / 2, 0, Math.PI * 2); ctx.fill(); } }
};
Sims.defs.specular = function (el) {
  var st = { ecd: 2600, poly: 15, gut: false };
  el.innerHTML = fx('<div class="simgrid"><div class="fig" style="background:#2b2b2b"><div class="fig-body"><canvas data-spec width="500" height="340" style="width:100%;height:auto;display:block"></canvas></div><div class="fig-cap" style="background:var(--surface)"><span>Champ ≈ 250 × 170 µm de mosaïque endothéliale</span><span class="schema-badge">Simulation pédagogique</span></div></div>') +
    '<div class="stack">' + sliderHtml('sp-e', fx('Densité (cell/mm²)'), 400, 3500, 50, st.ecd) + sliderHtml('sp-p', fx('Variabilité de taille et de forme'), 0, 100, 5, st.poly, ' %') + fx('<label class="toggle"><input type="checkbox" data-gut> Guttae</label>') +
    fx('<div class="grid2" style="grid-template-columns:repeat(3,minmax(0,1fr))"><div class="readout"><span class="u">Densité</span><span class="v" data-se></span></div><div class="readout"><span class="u">CV</span><span class="v" data-scv></span></div><div class="readout"><span class="u">% hexagonales</span><span class="v" data-shx></span></div></div><p class="small" data-st></p></div></div>');
  function upd() {
    var cv = U.$('[data-spec]', el); cv.setAttribute('data-ecd', st.ecd); cv.setAttribute('data-poly', st.poly); cv.setAttribute('data-gut', st.gut ? '1' : '0'); Sims.drawSpec(cv);
    var cvv = 0.22 + st.poly / 100 * 0.4, hex = Math.round(72 - st.poly / 100 * 40);
    U.$('[data-se]', el).textContent = st.ecd; U.$('[data-scv]', el).textContent = cvv.toFixed(2).replace('.', ','); U.$('[data-shx]', el).textContent = hex + ' %';
    var t = st.ecd < 500 ? fx('Densité critique : décompensation probable (œdème). Discuter d’une greffe endothéliale.') : st.ecd < 1000 ? fx('Réserve faible : prudence avant une chirurgie de cataracte (protection endothéliale, discuter d’une chirurgie combinée).') : fx('Densité suffisante pour maintenir la déturgescence.');
    if (cvv > 0.4) t += fx(' CV élevé = **polymégathisme** (stress endothélial : lentilles, diabète, chirurgie).');
    if (hex < 50) t += fx(' Peu d’hexagones = **pléomorphisme**.');
    if (st.gut) t += ' Zones noires = **guttae** (Fuchs).';
    U.$('[data-st]', el).innerHTML = U.md(t);
    U.$('#sp-e-o', el).textContent = st.ecd; U.$('#sp-p-o', el).textContent = st.poly + ' %';
  }
  el.addEventListener('input', function (e) { if (e.target.id === 'sp-e') st.ecd = +e.target.value; if (e.target.id === 'sp-p') st.poly = +e.target.value; upd(); });
  el.addEventListener('change', function (e) { if (e.target.hasAttribute('data-gut')) { st.gut = e.target.checked; upd(); } });
  upd();
};

/* ---------- visual acuity converter ---------- */
Sims.defs.acuity = function (el) {
  el.innerHTML = fx('<div class="grid2"><div class="stack"><label class="small" for="va-in">Acuité (ex. 6/12, 20/40 ou logMAR 0,3)</label><input type="text" id="va-in" value="6/12" inputmode="decimal" autocomplete="off"><div class="readout"><span class="u">Équivalences</span><span class="small mono" data-va></span></div></div><div class="callout small" data-vas></div></div>');
  function upd() {
    var v = U.$('#va-in', el).value.trim().replace(',', '.'), lm = null, m;
    if ((m = v.match(/^(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/))) lm = Math.log10(+m[2] / +m[1]);
    else if (/^-?\d+(\.\d+)?$/.test(v)) lm = +v;
    if (lm == null || !isFinite(lm)) { U.$('[data-va]', el).textContent = fx('Format non reconnu : écris 6/12, 20/40 ou 0,3.'); U.$('[data-vas]', el).textContent = ''; return; }
    var mden = 6 * Math.pow(10, lm), fden = 20 * Math.pow(10, lm);
    U.$('[data-va]', el).innerHTML = fx('Métrique 6/') + mden.toFixed(mden < 10 ? 1 : 0).replace('.', ',') + fx(' · Pieds 20/') + Math.round(fden) + '<br>logMAR ' + lm.toFixed(2).replace('.', ',') + fx(' · décimale ') + Math.pow(10, -lm).toFixed(2).replace('.', ',');
    U.$('[data-vas]', el).innerHTML = U.md(lm <= 0.4 + 1e-9 ? fx('Si c’est l’AV **binoculaire**, la norme SAAQ classe 5 (≥ 6/15) est respectée ; il faut aussi un champ binoculaire suffisant (≥ 100° horizontal).') : fx('Sous **6/15 binoculaire** : ne respecte pas la norme SAAQ pour la classe 5.'));
  }
  U.$('#va-in', el).addEventListener('input', upd); upd();
};
