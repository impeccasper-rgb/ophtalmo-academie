// English overlay for photo captions (G.OPH.photos[key] = [{id, caption, look, reveal}]).
// src/i18n.js merges keyed objects of arrays by photo id: G.OPH_EN.photos[key][photoId] = {caption}.
// Cycle 4: captions only for all 201 entries; `look` and `reveal` are still French.
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH_EN = G.OPH_EN || {};
G.OPH_EN.photos = G.OPH_EN.photos || {};
(function (P) {
  var add = function (key, o) { P[key] = P[key] || {}; Object.keys(o).forEach(function (id) { P[key][id] = Object.assign(P[key][id] || {}, { caption: o[id] }); }); };
  add("c-secheresse", {
    "OPH-029": "Diffuse punctate epithelial erosions in severe dry eye (fluorescein, cobalt blue)",
    "OPH-022": "Tear breakup time: dark lines in the fluorescein (cobalt blue)",
    "OPH-023": "Lissamine green: diffuse conjunctival staining, nasal gaze (slit lamp)",
    "OPH-018": "Meibomian gland dysfunction: thick secretion expressed from a gland orifice (slit lamp)",
    "OPH-019": "Infrared meibography of the upper lid: shortened and missing glands",
    "OPH-016": "Anterior blepharitis: scales and crusts at the base of the lashes (slit lamp)"
  });
  add("c-bacterienne", {
    "OPH-070": "Pseudomonas keratitis: dense central infiltrate and intense injection (diffuse illumination)",
    "OPH-072": "Ulcerative bacterial keratitis: stained epithelial defect and infiltrate (fluorescein, white light)",
    "OPH-071": "Pseudomonas keratitis seen with a thin slit (slit lamp)",
    "OPH-333": "Central ulcer with satellite infiltrates in Gram-negative bacterial keratitis",
    "OPH-334": "Same case, different lighting: central ulcer surrounded by rounded satellite infiltrates"
  });
  add("c-atypiques", {
    "OPH-067": "Acanthamoeba keratitis: paracentral ring-shaped stromal infiltrate (diffuse illumination)",
    "OPH-065": "Recurrent fungal keratitis in a penetrating graft: infiltrate and hypopyon (diffuse illumination)",
    "OPH-066": "Same patient on confocal microscopy: branching fungal filaments (Fusarium)",
    "OPH-069": "Early Acanthamoeba in a contact lens wearer: subtle concentric rings (diffuse illumination)",
    "OPH-128": "Confocal microscopy: Acanthamoeba cysts as very bright round dots",
    "OPH-129": "Confocal in a contact lens wearer: Acanthamoeba and fungal elements (panels A to C)"
  });
  add("c-herpes", {
    "OPH-059": "Herpetic (HSV) epithelial keratitis: branching ulcer stained with fluorescein (cobalt blue)",
    "OPH-057": "Herpetic dendrite in white light: terminal bulbs, high magnification (slit lamp)",
    "OPH-061": "Disciform keratitis: disc-shaped central stromal edema (diffuse illumination)",
    "OPH-058": "Same patient as OPH-059 with sclerotic scatter: ulcer and intense ciliary injection",
    "OPH-060": "Same patient after healing: \"ghost\" scar beneath the old ulcer (slit lamp)",
    "OPH-064": "Zoster (VZV) pseudodendrites: elevated branching lesions without terminal bulbs",
    "OPH-343": "Ghost dendrites: branching scars after herpetic epithelial keratitis (slit lamp)",
    "OPH-369": "Herpes zoster ophthalmicus: vesicles and crusts on the forehead, lid and nose"
  });
  add("c-keratocone", {
    "OPH-034": "Keratoconus in profile: cone-shaped bulging cornea (slit lamp, side view)",
    "OPH-120": "Keratoconus on Pentacam: curvature, anterior and posterior elevation, pachymetry (four maps)",
    "OPH-039": "Fleischer ring around the base of the cone (advanced keratoconus, slit lamp)",
    "OPH-041": "Vogt striae: fine parallel lines in the deep stroma of the cone (close-up)",
    "OPH-035": "Munson sign: lower lid deformed by the cone on downgaze",
    "OPH-043": "Acute hydrops: bluish-white apical corneal edema (slit lamp, oblique view)",
    "OPH-371": "Intracorneal ring segments: two arcs implanted in the midperipheral stroma"
  });
  add("c-fuchs", {
    "OPH-049": "Guttae: fine dots on the posterior surface of the cornea (wide beam)",
    "OPH-051": "Guttae close-up: irregular relief of Descemet (slit lamp)",
    "OPH-050": "Fuchs after cataract surgery: corneal haze from edema and scarring (slit lamp)",
    "OPH-126": "Confocal microscopy of the endothelium: guttae as dark areas (Fuchs dystrophy)",
    "OPH-052": "Older specular microscopy: endothelial cell loss in Fuchs dystrophy",
    "OPH-053": "Pseudophakic bullous keratopathy: epithelial microcysts and bullae (slit lamp)",
    "OPH-322": "Honeycomb corneal edema on a Rho-kinase inhibitor (4-view plate)",
    "OPH-354": "Dexamethasone implant (Ozurdex) migrated into the anterior chamber of an aphakic eye"
  });
  add("c-erosion", {
    "OPH-030": "Corneal abrasion: epithelial defect stained with fluorescein (white light)",
    "OPH-031": "Corneal abrasion under cobalt blue light: sharp edges of the defect",
    "OPH-055": "Epithelial basement membrane dystrophy: map lines on retroillumination",
    "OPH-054": "Basement membrane dystrophy: epithelial lines and dots (slit lamp)",
    "OPH-032": "Central metallic corneal foreign body (diffuse illumination)",
    "OPH-033": "Same foreign body with a thin slit: depth in the stroma (slit lamp)"
  });
  add("c-pterygion", {
    "OPH-073": "Nasal pterygium reaching the pupillary area (diffuse illumination)",
    "OPH-074": "Pterygium invading the limbus and peripheral cornea at 3 o'clock (diffuse illumination)",
    "OPH-353": "Ocular surface squamous cell carcinoma: gelatinous limbal mass invading the cornea",
    "OPH-356": "Pinguecula: elevated yellowish deposit of the bulbar conjunctiva near the limbus"
  });
  add("c-greffe", {
    "OPH-104": "Endothelial rejection of a penetrating graft: Khodadoust line (sclerotic scatter)",
    "OPH-105": "Same patient: edematous stroma and Descemet folds behind the rejection line",
    "OPH-107": "Interface fluid after rejection of a DSAEK endothelial graft (slit lamp)",
    "OPH-108": "Same patient with a thin slit: dark crescent of fluid between graft and cornea",
    "OPH-096": "Detachment of the peripheral edge of a DMEK graft (slit lamp)",
    "OPH-097": "Same patient on anterior segment OCT: detached graft edge",
    "OPH-338": "Donor cornea in its storage medium, ready for penetrating keratoplasty",
    "OPH-348": "Kaye dots: fine white epithelial dots in front of graft sutures",
    "OPH-335": "Candida in a DSAEK interface, three months after the graft (slit lamp)",
    "OPH-370": "Infectious crystalline keratopathy in a penetrating graft (slit lamp)"
  });
  add("c-brulure", {
    "OPH-086": "Alkali burn, 6 months later: opaque, vascularized cornea (diffuse illumination)",
    "OPH-087": "Sequelae of an alkali burn: opacity, vessels and inflamed conjunctiva (diffuse illumination)",
    "OPH-112": "Limbal stem cell deficiency: whorled epithelium (slit lamp)",
    "OPH-113": "Limbal deficiency: whorl-like epithelial pattern (slit lamp)"
  });
  add("g-gpao", {
    "OPH-133": "Open-angle glaucoma: inferior rim notch and nerve fiber loss (fundus photograph)",
    "OPH-134": "Same patient: disc and RNFL OCT of both eyes (Cirrus report)",
    "OPH-190": "Humphrey visual field: superior arcuate defect with a nasal step",
    "OPH-191": "RNFL OCT: superior and inferior thinning, with matching disc and field",
    "OPH-131": "Bilateral advanced glaucoma: deep cupping and bayoneting vessels (fundus photographs)",
    "OPH-136": "Deep cupping: lamina cribrosa pores visible at the floor (magnified fundus photograph)"
  });
  add("g-hto", {
    "OPH-116": "Scheimpflug pachymetry (Pentacam): central thickness, a key element in a glaucoma suspect",
    "OPH-187": "C/D ratios from 0.2 to 0.9 on four different discs (fundus photographs)",
    "OPH-139": "Temporal gray crescent: false rim thinning in a 34-year-old man"
  });
  add("g-gpn", {
    "OPH-137": "Normal-tension glaucoma: disc hemorrhage at the inferotemporal margin (fundus photograph)",
    "OPH-138": "Same patient, close-up: flame hemorrhage crossing the disc margin",
    "OPH-294": "Normal-tension glaucoma: large cup and rim thinned at the poles (fundus photograph)",
    "OPH-296": "Same case: Humphrey field with dense defects near fixation",
    "OPH-298": "Same case: nerve fiber OCT, thinning in both eyes, mainly on the left"
  });
  add("g-fermeture", {
    "OPH-142": "Very shallow peripheral anterior chamber on a thin slit (Van Herick principle)",
    "OPH-121": "Normal anterior segment OCT (Visante): deep chamber and open angles",
    "OPH-147": "Anterior segment OCT: iris-cornea contact, closed angles (after DMEK)",
    "OPH-146": "Laser peripheral iridotomy in the temporal position (diffuse illumination)"
  });
  add("g-crise", {
    "OPH-140": "Acute angle-closure attack in the right eye: redness and hazy cornea",
    "OPH-141": "Same case at the slit lamp: congested eye and shallow chamber",
    "OPH-143": "Glaukomflecken: small white spots under the anterior capsule (slit lamp)",
    "OPH-145": "Glaukomflecken close-up: central white opacities of the anterior lens",
    "OPH-144": "Iris atrophy after an attack: sectoral transillumination on retroillumination"
  });
  add("g-pxf", {
    "OPH-153": "Pseudoexfoliation: target-pattern deposit on the anterior capsule (dilated pupil)",
    "OPH-155": "Bull's-eye lesion on the anterior capsule (pseudoexfoliation glaucoma)",
    "OPH-154": "Pseudoexfoliation material at the pupillary margin (slit lamp)",
    "OPH-156": "Gonioscopy: Sampaolesi line, wavy pigment anterior to Schwalbe",
    "OPH-151": "Pseudoexfoliation: decentered intraocular lens visible in the pupil (slit lamp)",
    "OPH-152": "Another view of the same case: displaced IOL visible in the pupil",
    "OPH-321": "Pseudoexfoliation: lens subluxated downward, upper edge visible in the pupil",
    "OPH-324": "Pseudoexfoliation on retroillumination: deposits on the anterior lens capsule"
  });
  add("g-pigmentaire", {
    "OPH-157": "Pigment dispersion: radial iris transillumination defects in a ring",
    "OPH-158": "Krukenberg spindle: vertical pigment on the corneal endothelium (slit lamp)",
    "OPH-161": "Scheie line on retroillumination: pigment at the lens periphery",
    "OPH-160": "Scheie line, dilated pupil: pigmented stripe at the lens periphery",
    "OPH-159": "Pigment on the lens capsule on retroillumination (pigment dispersion)"
  });
  add("g-neovasculaire", {
    "OPH-162": "Diabetic rubeosis iridis, left eye: fine new vessels on the iris",
    "OPH-164": "Same patient, right eye: irregular vessels on the iris surface",
    "OPH-163": "Same patient, right eye: subtle new vessels on the iris (slit lamp)",
    "OPH-165": "Extensive rubeosis in an ischemic eye with neovascular glaucoma (slit lamp)",
    "OPH-166": "Same eye, close-up: tortuous vessels on the iris and a hazy pupil",
    "OPH-319": "Subtle iris neovascularization three months after a central retinal artery occlusion",
    "OPH-320": "Iris new vessels at high magnification: arrows on their peripheral front"
  });
  add("g-secondaires", {
    "OPH-150": "Iris bombé from chronic uveitis with posterior synechiae (diffuse illumination)",
    "OPH-148": "Same patient with a thin slit: convex profile of the iris bombé (slit lamp)",
    "OPH-149": "Iris bombé in another patient: convex iris and shallow peripheral chamber (slit lamp)",
    "OPH-177": "Pigmented precipitates on the trabecular meshwork (Grant syndrome) on gonioscopy",
    "OPH-349": "Fine keratic precipitates in anterior uveitis associated with juvenile idiopathic arthritis",
    "OPH-351": "Mutton-fat keratic precipitates: large rounded deposits on the inferior cornea"
  });
  add("g-postop", {
    "OPH-181": "Gonioscopy: iStent trabecular micro-bypass in the trabecular meshwork",
    "OPH-182": "\"Kissing\" choroidal detachments one week after an Ahmed tube (slit lamp)",
    "OPH-315": "Retracting hyphema two weeks after an attempted iStent",
    "OPH-340": "Dense fibrinous reaction in the anterior chamber the day after a drainage tube"
  });
  add("b-bases", {
    "OPH-103": "Penetrating graft with a running suture (diffuse illumination)",
    "OPH-101": "Penetrating graft with interrupted sutures (diffuse illumination)",
    "OPH-093": "DMEK at 1 week: residual gas bubble in the superior anterior chamber",
    "OPH-099": "Clear deep anterior lamellar keratoplasty (DALK), 3 years later, sutures removed",
    "OPH-092": "Cyanoacrylate glue on a perforation from peripheral ulcerative keratitis (diffuse illumination)",
    "OPH-007": "Extensive subconjunctival hemorrhage, clear cornea (diffuse illumination)"
  });
  add("c-bases", {
    "OPH-187": "Estimating the C/D ratio: four discs from 0.2 to 0.9 (fundus photographs)",
    "OPH-013": "Annotated Humphrey 24-2 report: where to read reliability, indices and maps",
    "OPH-134": "Reading a disc and RNFL OCT report for both eyes (Cirrus)",
    "OPH-146": "Recognizing a laser peripheral iridotomy (temporal position, diffuse illumination)",
    "OPH-183": "Prostaglandin-associated periorbitopathy: deepened upper lid sulcus in the left eye",
    "OPH-184": "Same patient one year after stopping the prostaglandin: marked improvement"
  });
  add("bonus-B", {
    "OPH-082": "Neurotrophic ulcer: oval defect with raised greyish edges (diffuse illumination)",
    "OPH-083": "Peripheral ulcerative keratitis: corneal melt near the superior limbus (diffuse illumination)",
    "OPH-075": "Adenoviral keratoconjunctivitis: multiple subepithelial infiltrates in the visual axis",
    "OPH-077": "Thygeson superficial punctate keratitis: small epithelial opacities in a white eye",
    "OPH-109": "Epithelial ingrowth under a LASIK flap: whitish islands near the visual axis",
    "OPH-089": "Descemetocele: cornea thinned down to Descemet, on a thin slit (slit lamp)"
  });
  add("bonus-C", {
    "OPH-167": "Congenital glaucoma: bilateral buphthalmos in an 11-year-old boy",
    "OPH-170": "Haab striae: horizontal breaks in Descemet (congenital glaucoma)",
    "OPH-172": "Gonioscopy after blunt trauma: angle recession and a cyclodialysis cleft",
    "OPH-178": "ICE syndrome: high peripheral anterior synechia up to Schwalbe line (gonioscopy)",
    "OPH-176": "Blood in Schlemm canal: elevated episcleral venous pressure (gonioscopy)",
    "OPH-177": "Grant syndrome: pigmented precipitates on the anterior trabecular meshwork (gonioscopy)",
    "OPH-325": "Primary congenital glaucoma: Haab striae in the cornea (slit lamp)"
  });
  add("a-anatomie", {
    "OPH-121": "Anterior segment anatomy on OCT (Visante), structures labeled",
    "OPH-124": "Corneal layers on in vivo confocal microscopy (panels 1 to 10)",
    "OPH-001": "Normal cornea on a thin slit: thin, transparent optical section",
    "OPH-003": "Normal fundus of a child (not an adult reference)"
  });
  add("a-lampe", {
    "OPH-001": "Thin slit (optical section) on a normal cornea (slit lamp)",
    "OPH-033": "Thin slit: localizing the depth of a corneal foreign body",
    "OPH-076": "Wide beam: subepithelial opacities of adenoviral keratoconjunctivitis",
    "OPH-058": "Sclerotic scatter: light placed at the limbus that makes opacities stand out",
    "OPH-056": "Retroillumination against the red reflex: raised epithelial irregularities",
    "OPH-157": "Iris transillumination: light from the fundus passes through the thinned iris"
  });
  add("a-fluoresceine", {
    "OPH-031": "Fluorescein under cobalt blue: sharp-edged epithelial defect of an abrasion",
    "OPH-028": "Fluorescein: inferior punctate erosions from exposure (cobalt blue)",
    "OPH-020": "Fluorescein-stained tear film after a blink (cobalt blue)",
    "OPH-004": "Ring-shaped epithelial imprint after applanation tonometry (fluorescein)",
    "OPH-085": "Fluorescein in peripheral ulcerative keratitis: crescent-shaped epithelial defect",
    "OPH-026": "Rose bengal, another vital dye: inferior conjunctiva stained in Sjögren syndrome"
  });
  add("a-tonometrie", {
    "OPH-004": "Applanation tonometry: ring-shaped imprint of the tip on the epithelium (fluorescein)",
    "OPH-200": "Goldmann applanation tonometry: tip placed on the cornea at the slit lamp"
  });
  add("a-gonioscopie", {
    "OPH-181": "Gonioscopy of an open angle with an iStent in the trabecular meshwork",
    "OPH-156": "Gonioscopy: Sampaolesi line anterior to Schwalbe line",
    "OPH-172": "Gonioscopy: widened ciliary body band (recession) and a cyclodialysis cleft",
    "OPH-180": "Gonioscopy in ICE syndrome: high synechia and visible ciliary processes",
    "OPH-174": "Gonioscopy: nasal cyclodialysis cleft after cataract surgery (two views)",
    "OPH-176": "Gonioscopy: blood in Schlemm canal (red line over the trabecular meshwork)",
    "OPH-292": "Gonioscopy: contact lens held on the eye, patient seated at the slit lamp",
    "OPH-312": "Gonioscopy: iris processes, fine strands between the iris and the angle wall"
  });
  add("a-papille", {
    "OPH-187": "Vertical C/D ratio from 0.2 to 0.9 on four discs (fundus photographs)",
    "OPH-189": "Inferior notch of the neuroretinal rim, marked by an arrow (fundus photograph)",
    "OPH-136": "Lamina cribrosa visible at the floor of a deep cup (magnified fundus photograph)",
    "OPH-139": "Disc trap: temporal gray crescent mimicking a thinned rim",
    "OPH-008": "Myelinated nerve fibers: white striated patches obscuring the vessels (fundus photograph)",
    "OPH-202": "Normal disc: C/D ratio 0.3 according to the source, thick pink rim",
    "OPH-203": "Glaucomatous disc: C/D ratio 0.9 according to the source, rim nearly gone",
    "OPH-204": "Flame-shaped disc hemorrhage at the inferior disc margin (arrow)"
  });
  add("a-oct", {
    "OPH-134": "Disc and RNFL OCT of both eyes: inferior defect on the left (Cirrus)",
    "OPH-191": "RNFL OCT: thinning at both poles, with matching disc and field",
    "OPH-132": "Disc OCT and macular ganglion cells markedly thinned in both eyes (advanced glaucoma)",
    "OPH-011": "Macular OCT: vitreomacular traction with cystoid macular edema",
    "OPH-122": "Anterior segment OCT (Visante): poorly attached DMEK graft on four sections"
  });
  add("a-topographie", {
    "OPH-038": "Topography: with-the-rule astigmatism, vertical bowtie (curvature map)",
    "OPH-037": "Topography: against-the-rule astigmatism, horizontal bowtie (curvature map)",
    "OPH-114": "Zeiss Atlas topography report: four windows to read (with-the-rule astigmatism)",
    "OPH-117": "Pentacam \"4 maps\" without visible signs of ectasia: a reading reference",
    "OPH-118": "Axial map: pellucid marginal degeneration (A) versus keratoconus (B)",
    "OPH-036": "Scheimpflug image of keratoconus: section of the bulging, thinned cornea"
  });
  add("a-champs-visuels", {
    "OPH-013": "Normal, reliable Humphrey 24-2, annotated report (SITA Standard)",
    "OPH-190": "Humphrey: superior arcuate defect respecting the horizontal meridian",
    "OPH-014": "Goldmann field: regular concentric isopters annotated \"OK\"",
    "OPH-009": "Goldmann: depressed central isopters corresponding to myelinated fibers",
    "OPH-293": "Humphrey: normal blind spot, then a glaucomatous arcuate defect and nasal step",
    "OPH-283": "Goldmann: left homonymous hemianopia, a defect respecting the vertical meridian"
  });
  add("a-speculaire", {
    "OPH-052": "Specular microscopy: guttae and cell loss in Fuchs dystrophy",
    "OPH-125": "Normal endothelium on confocal microscopy, with cell count (2564 cells/mm²)",
    "OPH-126": "Confocal: guttae, dark areas interrupting the endothelial mosaic (Fuchs)",
    "OPH-127": "Confocal of a decompensated penetrating graft: no identifiable endothelial cells"
  });
  add("a-pachymetrie", {
    "OPH-116": "Pentacam pachymetry map: central thickness and thinnest point",
    "OPH-123": "OCT after LASIK: total thickness and residual stromal bed under the flap",
    "OPH-045": "Hydrops on Pentacam: pachymetry map markedly thickened by edema",
    "OPH-201": "Ultrasound pachymetry: handheld probe placed on the center of the cornea"
  });
})(G.OPH_EN.photos);
