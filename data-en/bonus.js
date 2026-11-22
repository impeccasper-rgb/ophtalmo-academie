// English overlay for the « à reconnaître » lists of modules B and C (G.OPH.bonus.B / .C, data/fiches-cornee.js and data/fiches-glaucome.js).
// Arrays are merged by position (same length and order as the French lists); the English title is the `en` field of the French item.
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH_EN = G.OPH_EN || {};
G.OPH_EN.bonus = Object.assign(G.OPH_EN.bonus || {}, {
  B: [
    { clue: "Epithelial defect with smooth, rolled edges and little pain, on an insensate cornea (herpes, zoster, diabetes, surgery on the trigeminal nerve); Mackie stages 1 (punctate keratitis) to 3 (ulcer, melt).",
      action: "Test corneal sensation, stop toxic drops, lubricate with preservative-free products, bandage lens or amniotic membrane, and cenegermin (Oxervate) for stage 2–3 in adults." },
    { clue: "Crescent-shaped ulcer at the limbus, with no clear interval, thinning and often scleritis, in a patient with rheumatoid arthritis or vasculitis; Mooren ulcer, which is very painful, is a diagnosis of exclusion with no systemic disease.",
      action: "Urgent systemic workup with rheumatology or internal medicine (PUK can reveal life-threatening vasculitis), then systemic immunosuppression." },
    { clue: "White peripheral infiltrates where the lid touches the cornea, separated from the limbus by a clear interval, with blepharitis and little epithelial involvement.",
      action: "Treat the blepharitis and give a short course of a mild topical steroid, after ruling out infection (no excavated ulcer, no hypopyon)." },
    { clue: "Red, tearing eye that often spreads to the second eye, follicles, preauricular node, infectious contacts, then subepithelial infiltrates 1–2 weeks later that blur vision.",
      action: "Hand hygiene, disinfection of equipment and time off work depending on the setting (highly contagious for about 2 weeks); supportive care, steroid only for bothersome infiltrates or membranes." },
    { clue: "Gray-white band of calcium at the level of Bowman layer, in the interpalpebral zone, starting at 3 and 9 o’clock with a clear interval at the limbus, in chronic uveitis, hypercalcemia or kidney failure.",
      action: "Look for the cause (calcium, phosphate, kidney function, uveitis) and, if vision or comfort is affected, EDTA chelation after scraping the epithelium." },
    { clue: "Punctate keratitis or an ulcer of the inferior third in a patient whose eye closes poorly (lagophthalmos: facial palsy, thyroid proptosis, sedation in intensive care, ectropion).",
      action: "Frequent lubricant and ointment, lid closure at night (tape, moisture chamber), tarsorrhaphy or a lid weight if severe, and urgent care if there is an ulcer." },
    { clue: "Pellucid: a band of inferior thinning 1–2 mm from the limbus with the cornea bulging above it, a crab-claw topography and against-the-rule astigmatism. Terrien: slow, painless peripheral thinning, often superior, with vessels and a lipid line.",
      action: "Topography and tomography, optical correction (scleral lens) and CXL if it progresses; for Terrien, protect against trauma, with no immunosuppression (there is no inflammation)." },
    { clue: "Bilateral inherited stromal opacities: granular (breadcrumbs, hyaline), lattice (refractile amyloid lines, recurrent erosions) and macular (diffuse spots out to the limbus, thin cornea, autosomal recessive).",
      action: "Remember “Marilyn Monroe Always Gets Her Men in LA City” (Macular – Mucopolysaccharide – Alcian blue; Granular – Hyaline – Masson; Lattice – Amyloid – Congo red); laser PTK for superficial opacities, graft if vision is affected (it can recur in the graft)." }
  ],
  C: [
    { clue: "An infant with the triad of epiphora, photophobia and blepharospasm, a hazy, enlarged cornea (buphthalmos) and Haab striae (breaks in Descemet membrane).",
      action: "Surgical emergency: examination under anesthesia, then goniotomy or trabeculotomy (surgical opening of the meshwork); drops are only a bridge, and never brimonidine before age 2." },
    { clue: "An old blow to the eye, a widened, irregular ciliary body band on gonioscopy, torn iris processes, one eye only; glaucoma can appear years later.",
      action: "Comparative gonioscopy of both eyes and lifelong IOP follow-up; drops, then filtering surgery if they fail." },
    { clue: "Deep central chamber, flat iris, an angle that stays closed despite a patent iridotomy; double hump on indentation.",
      action: "UBM (high-frequency ultrasound) to see the anterior ciliary processes, then iridoplasty (laser that shrinks the peripheral iris), low-dose pilocarpine or lens extraction." },
    { clue: "After surgery, often in a short eye: a chamber that is flat centrally AND peripherally, high (sometimes normal) IOP despite a patent iridotomy, with no choroidal elevation.",
      action: "Atropine and IOP-lowering drugs, never pilocarpine, then Nd:YAG laser opening of the anterior hyaloid in pseudophakic eyes, or vitrectomy." },
    { clue: "A middle-aged woman, one eye only: beaten-metal endothelium, displaced pupil (corectopia), iris holes, synechiae extending beyond Schwalbe line.",
      action: "Specular microscopy (ICE cells) and IOP control; a tube is often needed, and endothelial keratoplasty if there is corneal edema." },
    { clue: "Recurrent unilateral attacks of very high IOP with few cells, a few fine keratic precipitates and an open angle.",
      action: "Topical steroid and IOP-lowering drops without pilocarpine; anterior chamber tap with CMV PCR if it recurs." },
    { clue: "A hypermature cataract leaking its proteins into an open angle (phacolytic), or a swollen cataract closing the angle, with an asymmetric chamber (phacomorphic).",
      action: "Lower the IOP and settle the inflammation, then remove the lens promptly." },
    { clue: "Dilated, tortuous episcleral vessels, blood in Schlemm canal: Sturge-Weber (facial port-wine stain) or carotid-cavernous fistula (bruit, proptosis, chemosis).",
      action: "Vascular imaging if a fistula is suspected; prefer drops that ↓ aqueous production; filtering surgery carries a risk of choroidal effusion or hemorrhage." }
  ]
});
