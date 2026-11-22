// English overlay for module A bodies (G.OPH.A.recog / exam / physio), merged by id via src/i18n.js
// (applyContent, k === 'A': for each array sub-key, I18N._byId(cur[sub], over[sub]) with over[sub] keyed by item id).
// Only text fields are overlaid; id, order, group, urgency and en stay from data/module-a.js and data/ext-a5-*.js.
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH_EN = G.OPH_EN || {};
G.OPH_EN.A = G.OPH_EN.A || {};
G.OPH_EN.A.recog = G.OPH_EN.A.recog || {};
G.OPH_EN.A.exam = G.OPH_EN.A.exam || {};
G.OPH_EN.A.physio = G.OPH_EN.A.physio || {};

Object.assign(G.OPH_EN.A.recog, {
  "cataracte-nucleaire": {
    card: {
      lead: "The nucleus yellows and hardens with age; the thicker lens narrows the angle.",
      keys: [
        "Nucleus yellow then brown at the slit lamp.",
        "Myopic shift: the presbyope reads without glasses (**second sight**).",
        "Dulled red reflex; reduced contrast and colors.",
        "We operate for functional impairment, not for the grade."
      ],
      ask: { q: "Why does he read better without glasses at 75?", a: "Nuclear sclerosis increases the refractive index of the nucleus: the eye becomes more myopic and the presbyope regains near vision, the \"second sight\". It is a sign of nuclear cataract, not an improvement of the eye." }
    },
    title: "Nuclear sclerosis and nuclear cataract",
    what: "With age, the center of the lens (the nucleus) compacts, yellows and hardens: this is **nuclear sclerosis**. When the nucleus becomes yellow-brown and opaque enough to reduce vision, it is called a nuclear cataract, then a brunescent cataract when it is dark brown.",
    look: [
      "Thin, oblique slit through the lens, pupil dilated: the central nucleus looks milky, yellow then brown, more opaque than the surrounding cortex.",
      "Density and color: pale yellow (mild), amber, then dark brown (brunescent); graded qualitatively (trace to 4+) or with a standardized scale, LOCS III (comparison with reference photos).",
      "Red reflex still present but dulled centrally; fundus view blurrier and yellowish.",
      "Refraction: progressive myopic shift; a presbyope sometimes reads again without glasses, the **second sight**.",
      "Blurred distance vision, reduced contrast, dulled colors (blues look darker); often bilateral and asymmetric."
    ],
    why: "In cornea, a hard nucleus requires more ultrasound energy during phacoemulsification (phaco): more energy means more endothelial cell loss, which can decompensate a Fuchs cornea (see the fiche \"Fuchs endothelial dystrophy and corneal edema\"). In glaucoma, the lens that thickens with age pushes the iris forward and narrows the angle: lens extraction is a true treatment for angle closure (EAGLE).",
    action: [
      "Document nuclear color and density, best-corrected VA and functional impairment; we operate for impairment, not for the grade alone.",
      "Guttae or a thick cornea: specular microscopy and pachymetry before surgery; discuss with cornea an endothelium-protective phaco, or even a combined or staged endothelial keratoplasty (DMEK).",
      "Narrow angle or primary angle closure with cataract: gonioscopy and biometry; lens extraction is often preferred to iridotomy (EAGLE: primary angle closure, PAC, with IOP ≥ 30 mmHg, or primary angle-closure glaucoma, PACG, from age 50).",
      "Rapid unexplained myopic shift: also think of hyperglycemia and anterior lens subluxation (weak zonules in pseudoexfoliation, PXF), then repeat the refraction."
    ],
    pitfalls: [
      "Attributing all the vision loss to the cataract: check the disc, macula (OCT) and visual field before promising a gain.",
      "A brunescent nucleus depresses the visual field diffusely (total deviation depressed, pattern deviation normal): do not mistake it for glaucoma progression.",
      "Judging density with diffuse light only: the nucleus is assessed with a thin, oblique slit."
    ],
    pearl: {
      q: "Why does your 75-year-old patient say he has been reading better without glasses for a few months?",
      a: "Nuclear sclerosis increases the refractive index of the nucleus: the eye becomes more myopic and the presbyope regains near vision, the \"second sight\". It is a sign of nuclear cataract, not an improvement of the eye."
    }
  },
  "cataracte-corticale-scp": {
    card: {
      lead: "Cortical: white peripheral spokes. Posterior subcapsular (PSC): a central plaque, very disabling, typical of steroids.",
      keys: [
        "Use **retroillumination**.",
        "Cortical: spokes from the periphery toward the center.",
        "PSC: granular plaque at the center of the posterior surface.",
        "PSC: look for steroids, diabetes, uveitis; measure IOP."
      ],
      ask: { q: "Why does a PSC bother in bright sun?", a: "The plaque is central and posterior. In bright light and during accommodation (near miosis), the pupil constricts and all the light must pass through the plaque." }
    },
    title: "Cortical, posterior subcapsular, sutural and mixed cataracts",
    what: "A cortical cataract forms white spokes, like the spokes of a wheel, in the outer layer of the lens (the cortex). A **posterior subcapsular cataract** (PSC) is a granular plaque at the center, just in front of the posterior capsule: small, yet very disabling.",
    look: [
      "**Retroillumination**: pupil dilated, the fundus is lit to obtain the red reflex; opacities stand out in shadow or relief against an orange background.",
      "Cortical: spokes or wedges (cortical spokes) running from the periphery toward the center; often hidden behind the iris if the pupil is not dilated.",
      "PSC: granular, glistening plaque at the center of the posterior surface; at the slit lamp, focus behind the nucleus to see it.",
      "Sutural (often congenital): Y-shaped opacity along the embryonic sutures of the lens, sometimes with small dots; usually stable and minimally bothersome.",
      "Mixed: several types together (e.g. anterior polar, PSC and cortical); describe each component separately."
    ],
    why: "PSC is the cataract of corticosteroids: corneal graft and uveitis patients on long-term steroid drops, the same patients who develop steroid-induced ocular hypertension (see the fiche \"Steroid-induced and uveitic glaucomas\"). It also explains glare in a young patient, and a central PSC can skew the acuity, refraction and visual field of a glaucoma patient.",
    action: [
      "Look for the cause of a PSC: steroids (drops, oral, inhaled), diabetes, radiotherapy, uveitis, trauma, retinitis pigmentosa; measure IOP if on steroids.",
      "Measure VA under glare conditions (glare test) or in bright light when the complaint is out of proportion to chart VA.",
      "Refer for cataract surgery when functional impairment warrants it; in a graft patient, coordinate with cornea (graft protection, perioperative steroids)."
    ],
    pitfalls: [
      "A young patient at 6/7.5 on the chart but unable to drive at night: a small central PSC is enough; look for it on retroillumination.",
      "Examining without dilating: peripheral cortical spokes are missed and a PSC is underestimated.",
      "A stable congenital sutural cataract is not, on its own, an indication for surgery."
    ],
    pearl: {
      q: "Why is a PSC most bothersome at near and in bright sunlight?",
      a: "The plaque is central and posterior. In bright light and during accommodation (near miosis), the pupil constricts and all the light must pass through the plaque."
    }
  },
  "cataracte-mature": {
    card: {
      lead: "Lens opaque edge to edge, with no red reflex. The fundus can no longer be seen, and the lens can cause phacomorphic or phacolytic glaucoma.",
      keys: [
        "White or amber pupil, no red reflex.",
        "Vision CF, HM or LP: test projection and RAPD.",
        "**B-scan** before surgery; biometry often ultrasonic.",
        "Closed angle = phacomorphic; open + white particles = phacolytic."
      ],
      ask: { q: "Why trypan blue in a white cataract, and where do you find it again in cornea?", a: "Without a red reflex, the anterior capsule is almost invisible: the dye stains it blue to guide the capsulorhexis. In cornea, it is also used to stain the DMEK graft to see its orientation in the anterior chamber." }
    },
    title: "Mature, white and Morgagnian cataract",
    what: "A mature cataract is opaque from edge to edge: white (cortex) or dark brown (brunescent nucleus), with no red reflex. When the cortex liquefies and the nucleus sinks to the bottom of the capsular bag, it is a **Morgagnian cataract**, a hypermature stage.",
    look: [
      "White or amber pupil visible to the naked eye (leukocoria in an adult); no red reflex on retroillumination.",
      "White: pearly white cortex, sometimes with visible spokes; lens often swollen (intumescent) and anterior chamber shallower than in the fellow eye.",
      "Mature brunescent: very dense brown-amber nucleus filling the whole pupil.",
      "Morgagnian: brown nucleus resting at the bottom of the bag, with milky liquefied or resorbed cortex above it.",
      "Vision often reduced to counting fingers (CF), hand motions (HM) or light perception (LP): test light projection in all 4 quadrants and look for a relative afferent pupillary defect (RAPD) to judge the retina and nerve."
    ],
    why: "Without a fundus view, you do not know whether the retina is detached or whether there is a tumor: a B-scan is mandatory before surgery. In glaucoma, an intumescent cataract can close the angle (**phacomorphic glaucoma**) and a hypermature cataract can leak proteins that clog the trabecular meshwork (**phacolytic glaucoma**): see the fiche on lens-related glaucomas. In cornea, a long, difficult surgery threatens the endothelium.",
    action: [
      "B-scan before surgery: retina, choroid, mass; optical biometry often fails, so plan ultrasound biometry.",
      "Measure IOP, perform gonioscopy and compare the anterior chamber with the fellow eye: closed angle and flat chamber = phacomorphic; open angle and white particles in the anterior chamber = phacolytic.",
      "Refer for cataract surgery within a few weeks, sooner if IOP is elevated or there is inflammation; in the OR, **trypan blue** stains the anterior capsule to complete the capsulorhexis.",
      "Phacomorphic or phacolytic glaucoma: lower IOP, control inflammation, then extract the lens promptly (relative emergency)."
    ],
    pitfalls: [
      "Operating without a B-scan and discovering an old retinal detachment or a choroidal tumor after surgery.",
      "Swollen white cataract: the capsule under tension can tear toward the periphery as soon as it is opened (Argentinian flag sign); hence dye and decompression.",
      "Mistaking phacolytic glaucoma (open angle, deep chamber) for uveitis and treating it with steroids only."
    ],
    pearl: {
      q: "Why trypan blue in a white cataract, and where do you find it again in cornea?",
      a: "Without a red reflex, the anterior capsule is almost invisible: the dye stains it blue to guide the capsulorhexis. In cornea, it is also used to stain the DMEK graft to see its orientation in the anterior chamber."
    }
  },
});
Object.assign(G.OPH_EN.A.recog, {
  "opacification-capsulaire": {
    card: {
      lead: "The capsule clouds behind the IOL. YAG treats it but can raise IOP.",
      keys: [
        "Haze months or years after surgery.",
        "Retroillumination: haze or Elschnig pearls.",
        "Rule out macular edema (OCT) before YAG capsulotomy.",
        "Glaucoma patient: apraclonidine or brimonidine, minimal energy, IOP rechecked."
      ],
      ask: { q: "YAG and advanced glaucoma: before and after?", a: "I instill an alpha-agonist before or right after the laser, use minimal energy and remeasure IOP within the following hours. If a spike occurs, I adjust treatment and see the patient again promptly." }
    },
    title: "Posterior capsule opacification",
    what: "After cataract surgery, the IOL sits in the capsular bag; lens cells left behind regrow and haze the posterior capsule behind the IOL: this is **posterior capsule opacification**, sometimes called a \"secondary cataract\". It is treated with a laser in a few minutes.",
    look: [
      "Months or years after surgery: vision that slowly clouds and glare, like a cataract that \"comes back\".",
      "Slit lamp and retroillumination: gray-white haze, fibrotic plaques or small bubbles (Elschnig pearls) behind the IOL optic.",
      "Irregular red reflex, blurred fundus view even though the IOL itself is clear and well centered.",
      "Note whether the capsule is already open and whether the IOL is stable: this changes management."
    ],
    why: "Many glaucoma and cornea patients are pseudophakic (have an IOL). Nd:YAG laser capsulotomy (a laser that opens the capsule with tiny micro-explosions) can raise IOP in the following hours, which is dangerous for an already badly damaged optic nerve; capsular haze can also mimic progression on the visual field or degrade OCT quality.",
    action: [
      "Confirm that the capsule explains the vision loss (VA, retroillumination, macular OCT to rule out macular edema) before offering a **YAG capsulotomy**.",
      "Glaucoma patient: an alpha-agonist pressure-lowering drop (apraclonidine or brimonidine) before or right after the laser, minimal energy, then IOP rechecked within the following hours according to local protocol.",
      "Explain the rare but serious risks: cystoid macular edema, retinal detachment (especially in high myopes), IOL pitting; return urgently for flashes, floaters or a curtain.",
      "If an IOL exchange or refixation is being considered, discuss it before the laser: an intact capsule makes surgery easier."
    ],
    pitfalls: [
      "Doing a YAG in an advanced glaucoma patient without prophylaxis or an IOP check: a spike can wipe out what little field remains.",
      "Attributing the vision loss to the capsule when it is macular edema, AMD or glaucoma progression.",
      "Automatically blaming new vision loss after a well-done YAG on a \"recurrence\": the opening rarely closes in adults; look for another cause first (macula, retina, glaucoma)."
    ],
    pearl: {
      q: "What do you do before and after a YAG in a patient with advanced glaucoma?",
      a: "I instill an alpha-agonist before or right after the laser, use minimal energy and remeasure IOP within the following hours. If a spike occurs, I adjust treatment and see the patient again promptly."
    }
  },
  "bscan": {
    card: {
      lead: "Ultrasound showing the inside of the eye when the fundus is hidden. Never on an open globe.",
      keys: [
        "Probe on the closed lid; marker = top of the image.",
        "High gain to see, low to compare.",
        "Thin, mobile = vitreous; tethered to the nerve = retina.",
        "Smooth, thick, barely mobile dome = choroid."
      ],
      ask: { q: "On B-scan: detached vitreous, retina or choroid?", a: "Detached vitreous is thin, weakly reflective and very mobile. Detached retina is thicker, highly reflective, attached to the optic nerve and the ora serrata, often V-shaped. Detached choroid forms smooth, thick, minimally mobile domes that do not attach to the optic nerve." }
    },
    title: "B-scan ultrasonography: technique and reading",
    what: "The **B-scan** is a two-dimensional ultrasound that shows the inside of the eye when the fundus cannot be seen: white cataract, vitreous hemorrhage, opaque cornea. The probe is placed on the closed lid (with gel) and the screen shows a fan-shaped section of the globe.",
    look: [
      "Orientation: the probe is on the left of the screen, the posterior wall on the right; the probe marker (line or dot) corresponds to the top of the image.",
      "Clock-hour naming: the scan is named for the meridian examined, opposite the probe (to see 12 o'clock, probe at 6 o'clock with the patient looking up); sliding from the limbus toward the fornix sweeps from the posterior pole to the periphery.",
      "Transverse scan: marker parallel to the limbus, shows several clock hours of the same band; longitudinal scan: marker perpendicular to the limbus, shows one meridian from the posterior pole to the periphery.",
      "Gain: high (near the device maximum) to see weak echoes (hemorrhage, posterior vitreous detachment); lower it to compare membrane reflectivity and to measure.",
      "Dynamic exam: have the eye move; thin, very mobile membrane = vitreous; thick membrane attached to the optic nerve = retina; smooth, thick, minimally mobile dome = choroid."
    ],
    why: "In glaucoma and cornea, the B-scan comes up often: mature cataract before surgery, vitreous hemorrhage in a diabetic with high IOP, hypotony after trabeculectomy (choroidal detachment), an opaque cornea before grafting (is the posterior segment viable?). It also helps recognize **nanophthalmos** (a very short eye with thick sclera), which predisposes to angle closure and to uveal effusions during surgery.",
    action: [
      "Order a B-scan whenever the fundus cannot be seen: before cataract surgery or a graft, and after trauma only if the globe is not open.",
      "Describe: meridian and scan type, shape, thickness, attachment to the optic nerve, mobility and content (anechoic = clear fluid; echogenic = blood, clot, tissue).",
      "Very short eye with high hyperopia and a thick wall: think nanophthalmos, perform gonioscopy and warn the surgeon of the risk of uveal effusion and angle closure.",
      "Any image of retinal detachment or a mass: refer to retina the same day or promptly depending on the macula and the context."
    ],
    pitfalls: [
      "Gain too low: a posterior vitreous detachment or a mild hemorrhage disappears; gain too high: noise mimics a membrane.",
      "Mistaking a thick (or blood-laden) detached vitreous for detached retina: look for attachment to the optic nerve and for mobility.",
      "Pressing on a possibly open globe: at the slightest doubt, no contact ultrasound."
    ],
    pearl: {
      q: "How do you tell a posterior vitreous detachment, a retinal detachment and a choroidal detachment apart on B-scan?",
      a: "Detached vitreous is thin, weakly reflective and very mobile. Detached retina is thicker, highly reflective, attached to the optic nerve and the ora serrata, often V-shaped. Detached choroid forms smooth, thick, minimally mobile domes that do not attach to the optic nerve."
    }
  },
  "decollement-retine": {
    card: {
      lead: "A tear lets fluid under the retina. Macula on: retina the same day.",
      keys: [
        "Flashes, floaters, then a curtain.",
        "**Shafer sign**: tobacco dust in the anterior vitreous.",
        "Gray, elevated, mobile retina; horseshoe tear.",
        "Macula off: VA collapsed; also refer the same day."
      ],
      ask: { q: "What is the Shafer sign and why do you look for it?", a: "It is pigment granules in the anterior vitreous, seen with the slit behind the lens. They come from pigment epithelium released through a tear: in a patient with flashes and floaters, this sign means you must look for a tear or a detachment." }
    },
    title: "Rhegmatogenous and tractional retinal detachment",
    what: "In **rhegmatogenous** retinal detachment, a tear lets vitreous fluid pass under the retina, which lifts like peeling wallpaper. In tractional retinal detachment, fibrovascular membranes, for example from proliferative diabetic retinopathy, pull on the retina without a tear.",
    look: [
      "Symptoms: flashes (photopsias), new floaters, then an advancing shadow or curtain; the shadow is on the side opposite the detachment (superior detachment = shadow below).",
      "**Shafer sign**: fine pigment granules, like tobacco dust, in the anterior vitreous behind the lens; strongly associated with a tear.",
      "Dilated fundus exam: grayish, elevated, undulating retina that moves with the eye; a horseshoe tear, often in the superior periphery.",
      "Macula-on: central VA preserved; macula-off: central VA collapsed, often very low.",
      "Tractional: white-yellow membranes along the vascular arcades, retina tented up, concave and minimally mobile, in a poorly controlled diabetic."
    ],
    why: "At-risk patients are dilated: high myopes, pseudophakic patients, patients recently treated with YAG and patients on pilocarpine (miotics have been associated with tears and detachments). In glaucoma, the proliferative diabetic retinopathy that causes tractional detachment is the same one that causes neovascular glaucoma; after detachment surgery (gas, silicone oil, scleral buckle), IOP can also rise.",
    action: [
      "Macula-on, especially if the detachment is superior or bullous: call retina the same day; this is the true emergency, central vision can still be saved.",
      "Macula-off: also refer the same day; repair is usually done within the following days and the prognosis depends on how long the macula has been detached.",
      "Recent flashes or floaters without a visible detachment: dilated exam of the whole periphery with scleral depression; a Shafer sign or vitreous hemorrhage means the tear must be found or the patient referred.",
      "Diabetic tractional detachment: refer to retina and examine the iris and angle for new vessels."
    ],
    pitfalls: [
      "Believing that macula-off is the most urgent situation: it is the still-attached macula that must be protected first.",
      "Examining without dilation or scleral depression: tears are peripheral.",
      "Starting pilocarpine in a high myope without a dilated fundus exam or an explanation of the warning symptoms."
    ],
    pearl: {
      q: "What is the Shafer sign and why do you look for it?",
      a: "It is pigment granules in the anterior vitreous, seen with the slit behind the lens. They come from pigment epithelium released through a tear: in a patient with flashes and floaters, this sign means you must look for a tear or a detachment."
    }
  },
});
Object.assign(G.OPH_EN.A.recog, {
  "decollement-choroidien": {
    card: {
      lead: "Fluid or blood under the choroid after glaucoma surgery. Serous or hemorrhagic: everything changes.",
      keys: [
        "Smooth, brown, immobile domes.",
        "Serous: low IOP, little pain.",
        "Hemorrhagic: sudden pain, high IOP: emergency.",
        "B-scan: domes not attached to the nerve; black = serous, gray = blood."
      ],
      ask: { q: "Post-trabeculectomy, IOP 3 mmHg, brown domes: serous?", a: "Low IOP, little pain and anechoic content on B-scan suggest a serous detachment from hypotony. A suprachoroidal hemorrhage instead gives sudden pain, high IOP and echogenic content." }
    },
    title: "Serous and hemorrhagic choroidal detachment",
    what: "A **choroidal detachment** is an elevation of the choroid by fluid (serous form, or effusion) or blood (hemorrhagic form) accumulated between the choroid and the sclera. It forms large, smooth brown domes in the periphery; when two domes touch centrally, they are said to be \"kissing\" (kissing choroidals).",
    look: [
      "Fundus: smooth, firm brown or gray-orange domes that do not move with the eye; often several lobes; the ora serrata is visible without scleral depression.",
      "Serous setting: low IOP (hypotony) after trabeculectomy, a tube or a wound leak; inflammation; posterior scleritis; drug-induced ciliochoroidal effusion.",
      "Hemorrhagic setting (**suprachoroidal hemorrhage**): sudden, severe pain, often elevated IOP, flat anterior chamber, vision loss, during or shortly after surgery.",
      "B-scan: thick, convex, dome-shaped membranes, minimally mobile, not attached to the optic nerve; anechoic (black) content if serous, echogenic (gray, clot) if hemorrhagic.",
      "Shallow anterior chamber from forward shift of the iris-lens diaphragm: think of choroidal detachment in any flat postoperative chamber."
    ],
    why: "It is a typical complication in patients after glaucoma surgery (see the fiche \"Postoperative patient: trabeculectomy, tubes, MIGS\"): overfiltration or a leak, hypotony, then choroidal effusion. Distinguishing serous (low IOP, little pain) from hemorrhagic (pain, high IOP) changes the whole management. Risk factors for hemorrhage: anticoagulants, systemic hypertension, high myopia, glaucoma, prior vitreoretinal surgery.",
    action: [
      "Serous effusion with hypotony: find and correct the cause (Seidel test, overfiltering bleb, inflammation); cycloplegic and topical steroid; notify the glaucoma specialist the same day.",
      "Acute pain, high IOP and a flat chamber after surgery: suspect suprachoroidal hemorrhage, lower IOP, relieve pain, notify the surgeon urgently.",
      "Kissing domes, lens or IOL touching the cornea, massive hemorrhage: discuss drainage; for blood, the B-scan helps choose the timing (liquefied clot, often after 1 to 2 weeks).",
      "Effusion without surgery: think of posterior scleritis (pain, **T sign** on B-scan), drug-induced effusion (topiramate) or nanophthalmos."
    ],
    pitfalls: [
      "Confusing choroidal and retinal detachment: detached choroid is brown, smooth, firm and does not attach to the optic nerve.",
      "Flat postoperative chamber with high IOP: think of suprachoroidal hemorrhage or aqueous misdirection, not only overfiltration.",
      "Giving pilocarpine in a chamber flattened by effusion: it worsens the forward shift."
    ],
    pearl: {
      q: "After a trabeculectomy, IOP is 3 mmHg with brown domes in the periphery: serous or hemorrhagic?",
      a: "Low IOP, little pain and anechoic content on B-scan suggest a serous detachment from hypotony. A suprachoroidal hemorrhage instead gives sudden pain, high IOP and echogenic content."
    }
  },
  "dmla": {
    card: {
      lead: "After 50: drusen and atrophy (dry) or leaking new vessels (wet), with rapid loss.",
      keys: [
        "Drusen: yellow dots around the fovea.",
        "Wet: blood or fluid under the retina.",
        "Recent metamorphopsia: retina within a few days (anti-VEGF).",
        "Repeated anti-VEGF: monitor IOP in glaucoma patients."
      ],
      ask: { q: "Wavy door frame for 4 days: what do you do?", a: "I test each eye with the Amsler grid, dilate and do a macular OCT. Recent metamorphopsia suggests neovascular AMD: referral to retina within a few days for anti-VEGF, because the delay matters for the final vision." }
    },
    title: "Dry and neovascular age-related macular degeneration (AMD)",
    what: "**AMD** (age-related macular degeneration) is wear of the macula after age 50. In the dry form, yellow deposits (drusen) accumulate under the pigment epithelium and then the retina slowly atrophies (geographic atrophy at the advanced stage); in the neovascular or \"wet\" form, abnormal vessels grow under the macula, bleed and leak, and central vision can drop within days.",
    look: [
      "**Drusen**: yellow dots or spots around the fovea; small and few (early form) or large, numerous, sometimes confluent (intermediate form).",
      "**Geographic atrophy**: a sharply demarcated pale area through which large choroidal vessels are visible; drusenoid pigment epithelial detachment (drusenoid PED): a large yellow elevation formed by confluent drusen.",
      "Neovascular form: dark red subretinal hemorrhage, subretinal fluid, exudates, grayish elevation of the macula; recent metamorphopsia (straight lines look bent).",
      "**Amsler grid**, one eye at a time: wavy lines or a missing central area.",
      "Macular OCT: drusen = bumps under the pigment epithelium; atrophy = thinned outer retina and signal penetrating deeper into the choroid; new vessels = intraretinal or subretinal fluid."
    ],
    why: "Older patients in glaucoma clinic often have AMD: it skews acuity, the central visual field and the analysis of macular ganglion cells (GCIPL) on OCT. Repeated intravitreal **anti-VEGF** injections (drugs that block VEGF, vascular endothelial growth factor, the signal that makes new vessels grow and leak) raise IOP transiently after each injection, sometimes in a sustained way: to be monitored in glaucoma patients. In cornea, the povidone-iodine applied at each injection irritates an already fragile epithelium.",
    action: [
      "Recent metamorphopsia or central vision loss, subretinal hemorrhage or fluid: refer to retina within a few days for anti-VEGF injections.",
      "Dry form: baseline macular OCT, Amsler grid at home, smoking cessation; supplements following the AREDS2 formula (Age-Related Eye Disease Study 2: vitamins C and E, zinc, copper, lutein, zeaxanthin) are offered at the intermediate stage or if one eye is at the advanced stage, not for early forms.",
      "Glaucoma patient on anti-VEGF: note the injection dates, measure IOP and discuss with the retina specialist if it rises in a sustained way.",
      "Before cataract surgery: macular OCT to set realistic expectations and to spot an active form that needs treatment first."
    ],
    pitfalls: [
      "Attributing recent vision loss to the cataract or glaucoma without looking at the macula: a subretinal hemorrhage must be treated promptly.",
      "Reading a thinned macular GCIPL in a patient with AMD as glaucoma progression.",
      "Prescribing supplements to every patient with a few small drusen: they target more advanced stages."
    ],
    pearl: {
      q: "Your glaucoma patient has seen his door frame as wavy for 4 days. What do you do?",
      a: "I test each eye with the Amsler grid, dilate and do a macular OCT. Recent metamorphopsia suggests neovascular AMD: referral to retina within a few days for anti-VEGF, because the delay matters for the final vision."
    }
  },
  "retinopathie-diabetique": {
    card: {
      lead: "Capillaries leak and close; ischemia releases VEGF: new vessels.",
      keys: [
        "Microaneurysms, hemorrhages, exudates, cotton-wool spots.",
        "Severe: the **4-2-1** rule.",
        "Proliferative: retina within days.",
        "High IOP: iris before dilation and gonioscopy (angle new vessels)."
      ],
      ask: { q: "NVD and IOP 26 mmHg: why gonioscopy?", a: "Angle new vessels can appear before iris new vessels visible at the slit lamp. Seeing them early allows the ischemia to be treated (PRP, anti-VEGF) before the fibrovascular membrane closes the angle permanently." }
    },
    title: "Diabetic retinopathy and diabetic macular edema",
    what: "Diabetes damages the small vessels of the retina: they leak (exudates, edema) and close off (ischemia). The ischemic retina releases VEGF, which makes new vessels grow: the disease then moves from the nonproliferative form (NPDR) to the proliferative form (PDR).",
    look: [
      "Nonproliferative: **microaneurysms** (small red dots), dot-blot hemorrhages, yellow hard exudates, white cotton-wool spots.",
      "Severity: **venous beading** and **IRMA** (intraretinal microvascular abnormalities); the **4-2-1 rule** for the severe form: numerous hemorrhages in all 4 quadrants, beading in 2 quadrants or definite IRMA in 1 (one criterion is enough).",
      "Proliferative: new vessels on the disc (**NVD**) or elsewhere on the retina (**NVE**), fine networks on the retinal surface; then vitreous hemorrhage and tractional detachment.",
      "**Diabetic macular edema** on OCT: thickened retina with dark intraretinal cysts, sometimes subretinal fluid and hyperreflective dots (exudates).",
      "Fluorescein angiography: new vessels leak (fuzzy white blotches) and the nonperfused periphery looks dark, without capillaries."
    ],
    why: "The ischemia that makes new vessels grow on the disc also makes them grow on the iris and in the angle: this is neovascular glaucoma (see the fiche \"Neovascular glaucoma\"). Hence examining the iris before dilation and gonioscopy in any diabetic with advanced retinopathy or elevated IOP. In cornea and cataract: the diabetic epithelium heals slowly, and cataract surgery can worsen diabetic macular edema.",
    action: [
      "PDR (NVD, NVE, vitreous hemorrhage): refer to retina within a few days for panretinal photocoagulation (PRP: laser to the ischemic peripheral retina to reduce VEGF) and/or anti-VEGF.",
      "Severe retinopathy, elevated IOP or vitreous hemorrhage: examine the iris at high magnification before dilating and perform gonioscopy to look for angle new vessels (NVA).",
      "Center-involving macular edema: refer to retina (anti-VEGF); before cataract surgery, treat or stabilize the edema first and plan close OCT follow-up.",
      "Reinforce with the family physician the importance of glucose, blood pressure and lipid control."
    ],
    pitfalls: [
      "Dilating before looking at the iris: fine new vessels at the pupillary margin become harder to see.",
      "Confusing IRMA (within the retina, leak little) with new vessels (on the surface, leak heavily on angiography).",
      "Attributing to glaucoma the peripheral field defects of a diabetic treated with PRP: the laser itself leaves defects."
    ],
    pearl: {
      q: "Why do you perform gonioscopy in a diabetic with NVD and an IOP of 26 mmHg?",
      a: "Angle new vessels can appear before iris new vessels visible at the slit lamp. Seeing them early allows the ischemia to be treated (PRP, anti-VEGF) before the fibrovascular membrane closes the angle permanently."
    }
  },
});
Object.assign(G.OPH_EN.A.recog, {
  "occlusions-retiniennes": {
    card: {
      lead: "Arterial occlusion: a stroke of the eye. Venous occlusion: hemorrhages, macular edema, sometimes ischemia.",
      keys: [
        "CRAO: **cherry-red spot**. Emergency: immediately (the same day), like a stroke.",
        "CRAO ≥ 50: ESR, CRP (arteritis).",
        "CRVO: hemorrhages in 4 quadrants, dilated veins.",
        "Ischemic CRVO: gonioscopy ≈ monthly (90-day glaucoma)."
      ],
      ask: { q: "Why does the fovea stay red in a CRAO?", a: "The fovea has no inner layers and no retinal vessels: it stays transparent and lets the red choroid show through, while the ischemic inner retina around it whitens." }
    },
    title: "Retinal artery and vein occlusions",
    what: "An arterial occlusion blocks blood flow into the retina (**CRAO** for the central artery, **BRAO** for a branch): the inner retina dies within hours; it is a stroke of the eye. A venous occlusion blocks blood outflow (**CRVO** for the central vein, **BRVO** for a branch): blood backs up and causes hemorrhages, macular edema and sometimes retinal ischemia.",
    look: [
      "CRAO (central retinal artery occlusion): pale, opaque retina at the posterior pole, **cherry-red spot** at the center of the macula, attenuated arterioles.",
      "BRAO (branch retinal artery occlusion): whitening limited to one sector; look for a bright yellow embolus at an arteriolar bifurcation (**Hollenhorst plaque**, cholesterol from the carotid).",
      "CRVO (central retinal vein occlusion): hemorrhages in all 4 quadrants, dilated and tortuous veins, swollen disc; \"blood and thunder\" appearance if severe.",
      "Ischemic CRVO: very low VA, definite RAPD, numerous **cotton-wool spots**, extensive capillary nonperfusion on angiography; the non-ischemic form is milder, but can worsen.",
      "BRVO (branch retinal vein occlusion): fan-shaped hemorrhages limited to the territory of one vein, at an arteriovenous crossing (the rigid arteriole compresses the vein).",
      "Before dilating, after any CRVO: iris exam and gonioscopy to look for iris (NVI) and angle (NVA) new vessels."
    ],
    why: "Glaucoma and elevated IOP are risk factors for CRVO, and ischemic CRVO can cause neovascular glaucoma, typically in the first 3 months (**90-day glaucoma**): in glaucoma clinic, you are the one doing the surveillance gonioscopy. And the older patient in your waiting room who \"sees black in one eye\" may be having a retinal stroke: he must go to the ED immediately.",
    action: [
      "Acute CRAO or BRAO: send IMMEDIATELY to the ED of a stroke center for a stroke workup (brain imaging, carotids, cardiac rhythm); time matters, and thrombolysis may be discussed there within the first hours (practice still under study).",
      "CRAO at age 50 or older: rule out **giant cell arteritis** (headache, jaw claudication): urgent erythrocyte sedimentation rate (ESR), C-reactive protein (CRP) and platelets, and steroids without waiting if suspicion is strong.",
      "CRVO or BRVO: refer to ophthalmology within the week for macular edema (intravitreal anti-VEGF injections; a dexamethasone implant can raise IOP); blood pressure (BP), glucose and lipids to the family physician.",
      "Ischemic CRVO: undilated iris exam and gonioscopy about monthly during the first months; panretinal photocoagulation (PRP) as soon as NVI or NVA appears rather than as prevention (CVOS, Central Vein Occlusion Study)."
    ],
    pitfalls: [
      "Increasing the drops of a glaucoma patient whose vision is dropping without dilating: the occlusion goes unnoticed.",
      "Reading the RNFL OCT of the affected eye: the disc edema of a CRVO falsely thickens it (green disease), then atrophy thins it; no glaucoma conclusion is possible for months.",
      "Ignoring an incidental Hollenhorst plaque: even without symptoms, it is a vascular warning sign to pass on to the family physician (carotid workup)."
    ],
    pearl: {
      q: "Why does the fovea stay red in a CRAO?",
      a: "The fovea has no inner layers and no retinal vessels: it stays transparent and lets the red choroid show through, while the ischemic inner retina around it whitens. If a **cilioretinal artery** (arising from the ciliary circulation, that of the choroid) is present, a tongue of retina between the disc and the macula stays pink and central vision can be spared."
    }
  },
  "retinopathie-hypertensive": {
    card: {
      lead: "Hypertension narrows arterioles; a surge makes blood and lipid leak. Swollen disc: emergency.",
      keys: [
        "Narrow arterioles, abnormal arteriovenous crossings.",
        "Flame hemorrhages, cotton-wool spots, hard exudates.",
        "New signs: take the BP on the spot.",
        "Disc edema + very high BP: immediate emergency, gradual lowering."
      ],
      ask: { q: "Cotton-wool spots at 45: first step?", a: "I take the BP and look at the disc: very high BP with a swollen disc = malignant hypertension, immediate transfer to the ED. If BP is normal, I look for diabetes, HIV or systemic disease." }
    },
    title: "Hypertensive retinopathy and malignant hypertension",
    what: "Chronic systemic hypertension thickens and narrows the retinal arterioles; a severe flare damages their walls and makes blood, plasma and lipids leak. When the disc also swells, it is **malignant hypertension**, a medical emergency that also threatens the brain, heart and kidneys.",
    look: [
      "Diffuse or focal arteriolar narrowing: arterioles clearly thinner than the veins (normal artery/vein ratio about 2/3).",
      "**AV nicking**: the vein looks pinched or interrupted on either side of the arteriole that crosses it.",
      "Flame hemorrhages (in the nerve fiber layer) and cotton-wool spots: small fluffy white patches, infarcts of that layer.",
      "Bright yellow hard exudates (lipids), sometimes arranged in a star around the fovea.",
      "A swollen disc with blurred margins in addition to these signs = malignant hypertension."
    ],
    why: "The glaucoma clinic patient is often older and hypertensive: you will see these signs at almost every dilated fundus exam. Hypertension is the main risk factor for BRVO, and the AAO glaucoma PPP (2026) adds low BP as a risk factor for glaucoma: you need to know your patient's BP in both directions.",
    action: [
      "Chronic signs only (narrowing, crossings): take the BP, record it in the chart and notify the family physician.",
      "New hemorrhages, cotton-wool spots or exudates: measure BP on site; if it is very high or with symptoms (headache, chest pain, confusion, shortness of breath), immediate transfer to the ED.",
      "Disc edema + very high BP = malignant hypertension: an immediate medical emergency; BP is lowered gradually in the ED, because a sudden drop can cause optic nerve or brain ischemia.",
      "Cotton-wool spots without hypertension: look for another cause (diabetes, HIV, connective tissue disease, emboli)."
    ],
    pitfalls: [
      "Concluding intracranial hypertension in front of two swollen discs without taking the BP: always measure BP in disc edema.",
      "Confusing a cotton-wool spot with a hard exudate: the first is fluffy white with blurred edges (ischemia), the second bright yellow with sharp edges (lipids)."
    ],
    pearl: {
      q: "Facing cotton-wool spots and flame hemorrhages in a 45-year-old man, what do you do before talking about the eye?",
      a: "I take the BP and look at the disc: very high BP with a swollen disc = malignant hypertension, immediate transfer to the ED. If BP is normal, I look for diabetes, HIV or systemic disease."
    }
  },
  "macula-chirurgicale": {
    card: {
      lead: "Macula wrinkled, holed or lifted (CSC): distorted central vision; OCT settles it.",
      keys: [
        "**Metamorphopsia**: Amsler grid, one eye at a time.",
        "Recent macular hole: retina within weeks.",
        "CSC: look for ALL steroids.",
        "Epiretinal membrane: skews ganglion cell OCT (green disease)."
      ],
      ask: { q: "On prednisolone, wavy lines in one eye: your hypothesis?", a: "CSCR promoted by the corticosteroid: I confirm it on macular OCT (fluid under the retina), plan a cautious steroid reduction under antiviral cover and refer to retina if the fluid persists. I also check the IOP (steroid response)." }
    },
    title: "Epiretinal membrane, macular holes and CSCR",
    what: "The macula (the center of fine vision) can be wrinkled by an **epiretinal membrane** (a fibrous film on its surface), perforated by a **macular hole**, or lifted by fluid in **CSCR** (central serous chorioretinopathy). All three cause blurred, distorted central vision, and macular OCT distinguishes them in seconds.",
    look: [
      "**Metamorphopsia** (straight lines seen as wavy): screen for it with the **Amsler grid**, one eye at a time, at reading distance.",
      "Epiretinal membrane: shiny \"cellophane\" reflex and folds around the macula; on OCT, a hyperreflective line on the surface that wrinkles the retina and effaces the foveal pit.",
      "Full-thickness macular hole: small round red lesion at the center; on OCT, a defect through all layers down to the pigment epithelium.",
      "Lamellar hole: an irregularly hollowed fovea, with splitting of the layers but an intact outer layer; often stable. Traumatic hole: after blunt trauma, with other lesions.",
      "CSCR: round blister of clear fluid under the macula (serous elevation of the neurosensory retina on OCT); on angiography, \"ink-blot\" or \"smokestack\" leakage."
    ],
    why: "In cornea, you prescribe corticosteroids every day (graft rejection, herpetic stromal keratitis, after surgery): CSCR is promoted by steroids by ALL routes, including drops, creams, inhalers and nasal sprays. In glaucoma, an epiretinal membrane thickens the macula and skews the ganglion cell OCT (green disease), and central vision loss in a glaucoma patient is not necessarily glaucoma.",
    action: [
      "New metamorphopsia or central vision loss: macular OCT the same day if possible, then referral to retina depending on the finding.",
      "Recent full-thickness macular hole: retina within a few weeks (vitrectomy, gas, positioning); results are better when the hole is recent.",
      "Epiretinal membrane: surgery (vitrectomy with peeling) only if symptoms are significant; otherwise Amsler and follow-up; take it into account when planning cataract surgery.",
      "CSCR: inventory of ALL corticosteroids, reduction discussed with the prescribers if safe; spontaneous resolution within a few months is common; retina if it persists or recurs."
    ],
    pitfalls: [
      "Abruptly stopping a graft's steroid because of CSCR: risk of rejection; reduce in a planned way with the cornea team.",
      "Concluding \"vision loss = glaucoma progression\" without a macular OCT: a membrane or a hole often explains the loss and the depressed central field.",
      "Confusing a lamellar hole (observation) with a full-thickness hole (surgery): the OCT settles it."
    ],
    pearl: {
      q: "A 40-year-old man on prednisolone acetate for herpetic stromal keratitis sees wavy lines in one eye. What do you suspect?",
      a: "CSCR promoted by the corticosteroid: I confirm it on macular OCT (fluid under the retina), plan a cautious steroid reduction under antiviral cover and refer to retina if the fluid persists. I also check the IOP (steroid response)."
    }
  },
});
Object.assign(G.OPH_EN.A.recog, {
  "peripherie-vitre": {
    card: {
      lead: "The vitreous detaches with age and can tear a fragile retina.",
      keys: [
        "**Weiss ring** in front of the disc: proof of a PVD.",
        "New flashes or floaters: dilated periphery.",
        "Flashes + curtain or vision loss: retina the same day.",
        "Before pilocarpine in a myope: examine the periphery."
      ],
      ask: { q: "Young myope: why the periphery before pilocarpine?", a: "Pilocarpine contracts the ciliary muscle, which pulls on the vitreous base and the peripheral retina: pre-existing lattice or a tear can progress to a retinal detachment. I dilate, examine the periphery and teach the warning symptoms (flashes, floaters, curtain)." }
    },
    title: "Periphery and vitreous: lattice, retinoschisis, Weiss ring, asteroid hyalosis",
    what: "With age, the vitreous (the gel that fills the eye) liquefies and detaches from the retina: this is **PVD** (posterior vitreous detachment), which can tear a fragile peripheral retina and cause a retinal detachment. Some peripheral findings are areas at risk (**lattice degeneration**), others are benign but misleading (**retinoschisis**, **asteroid hyalosis**).",
    look: [
      "**Weiss ring**: a grayish ring floating in front of the disc, the trace of the vitreous that has detached from the optic nerve: proof of a PVD.",
      "Lattice degeneration: bands of thinned retina in the periphery, parallel to the ora serrata, with crisscrossing white lines (sclerosed vessels), pigment and sometimes small holes.",
      "Retinoschisis (splitting of the retina into two layers): a smooth, transparent, immobile dome, often inferotemporal and bilateral.",
      "Retinal detachment, by comparison: an undulating, mobile elevation, pigment in the vitreous (\"tobacco dust\"), a tear to look for.",
      "Asteroid hyalosis: a myriad of small bright yellow-white particles suspended in the vitreous, moving with the eye; vision usually normal."
    ],
    why: "Pilocarpine (pigment dispersion, angle closure) contracts the ciliary muscle and pulls on the vitreous base: in a myope with lattice, it increases the risk of retinal detachment, hence the dilated peripheral exam before prescribing it (fiche \"Pigment dispersion and pigmentary glaucoma\"). Asteroid hyalosis can degrade disc photos and OCT, and therefore your glaucoma follow-up.",
    action: [
      "New flashes or floaters (or a new Weiss ring): dilated exam of the whole periphery without delay, ideally with scleral depression.",
      "Flashes with a curtain, shadow or vision loss: retinal detachment until proven otherwise, urgent retina the same day.",
      "Asymptomatic lattice: generally observation and teaching of warning symptoms; dilated peripheral exam before pilocarpine in every myope.",
      "Asteroid hyalosis interfering with imaging: repeat the OCT (often possible), rely more on the visual field; B-scan if the fundus cannot be seen."
    ],
    pitfalls: [
      "Mistaking retinoschisis for a retinal detachment, or vice versa: schisis gives an absolute scotoma and does not move; at the slightest doubt, refer to retina.",
      "Confusing asteroid hyalosis with hemorrhage or inflammation of the vitreous (**vitritis**): asteroids are bright and sharp, without pain or vision loss.",
      "Reassuring a patient with a PVD without examining the dilated periphery: the associated tear is the real danger."
    ],
    pearl: {
      q: "Why do you examine the periphery before prescribing pilocarpine to a young myope with pigment dispersion?",
      a: "Pilocarpine contracts the ciliary muscle, which pulls on the vitreous base and the peripheral retina: pre-existing lattice or a tear can progress to a retinal detachment. I dilate, examine the periphery and teach the warning symptoms (flashes, floaters, curtain)."
    }
  },
  "inflammation-infection": {
    card: {
      lead: "Uveitis inflames the uvea. **Endophthalmitis** destroys vision within hours: same-day treatment.",
      keys: [
        "Anterior uveitis: AC cells and flare, posterior synechiae.",
        "Cycloplegic + steroid, infection excluded; IOP.",
        "Endophthalmitis: pain, hypopyon: same-day tap.",
        "Intravitreal vancomycin 1 mg/0.1 mL + ceftazidime 2.25 mg/0.1 mL."
      ],
      ask: { q: "Why is a cycloplegic given in anterior uveitis?", a: "It relaxes the ciliary muscle (less pain) and dilates the pupil, which moves the iris away from the lens and prevents posterior synechiae. Without it, 360° synechiae can create iris bombé and secondary angle closure." }
    },
    title: "Uveitis and posterior segment infections",
    what: "Uveitis is inflammation of the uvea (iris, ciliary body, choroid), autoimmune or infectious. Some infections of the retina or of the whole inside of the eye (**endophthalmitis**) destroy vision within hours or days and are treated the same day.",
    look: [
      "Anterior uveitis: painful red eye, photophobia, cells and flare in the anterior chamber; **posterior synechiae** (iris stuck to the lens) that make the pupil irregular on dilation.",
      "**CMV retinitis**, in immunosuppressed patients: granular white patches of necrosis with hemorrhages along the vessels, little vitreous inflammation.",
      "Ocular toxoplasmosis: an active white focus at the edge of an old pigmented scar, under dense vitritis: the \"headlight in the fog\".",
      "**Acute retinal necrosis** (due to varicella-zoster virus, VZV, or herpes simplex, HSV): confluent white patches in the periphery that advance quickly, occlusive vasculitis, marked vitritis.",
      "Endophthalmitis: pain, vision loss, hypopyon, vitritis, loss of the red reflex; **panophthalmitis** if the infection spreads to the sclera and orbit (swollen lids, chemosis, proptosis)."
    ],
    why: "In glaucoma, 360° posterior synechiae (seclusio pupillae) block aqueous flow: iris bombé closes the angle secondarily, and the steroids used for uveitis can themselves raise IOP (fiche \"Steroid-induced and uveitic glaucomas\"). A patient with a trabeculectomy bleb carries a lifelong risk of bleb-related endophthalmitis (fiche \"Postoperative patient\"), and a corneal wound or ulcer can seed the inside of the eye.",
    action: [
      "Anterior uveitis: cycloplegic (relieves pain, prevents synechiae) + topical steroid after ruling out an infectious cause; IOP at every visit; iris bombé → laser iridotomy or surgical iridectomy.",
      "Endophthalmitis (after surgery, bleb-related, after trauma): tap and inject the same day, with intravitreal **vancomycin 1 mg/0.1 mL and ceftazidime 2.25 mg/0.1 mL**; vitrectomy discussed, especially if vision is reduced to light perception (EVS, after cataract surgery).",
      "Acute retinal necrosis: urgent antivirals (IV acyclovir or high-dose oral valacyclovir, ± intravitreal antiviral) with retina; monitor for retinal detachment and the other eye.",
      "CMV retinitis or toxoplasmosis near the macula or nerve: retina/uveitis promptly (antiviral or antiparasitic depending on the agent); unexpected CMV → look for immunosuppression (HIV)."
    ],
    pitfalls: [
      "Giving a steroid alone for a \"uveitis\" that is actually an infection (herpes, toxoplasmosis, low-grade endophthalmitis): think infection before immunosuppressing.",
      "Mistaking bleb-related endophthalmitis for conjunctivitis: milky white bleb + anterior chamber cells = emergency, even years after surgery.",
      "Forgetting the IOP: often low during inflammation (\"stunned\" ciliary body), it can rise abruptly as the inflammation settles or on steroids; some uveitides (herpetic ones in particular) raise it from the start."
    ],
    pearl: {
      q: "Why is a cycloplegic given in anterior uveitis?",
      a: "It relaxes the ciliary muscle (less pain) and dilates the pupil, which moves the iris away from the lens and prevents posterior synechiae. Without it, 360° synechiae can create iris bombé and secondary angle closure."
    }
  },
  "papille-oedeme": {
    card: {
      lead: "A swollen disc is never glaucoma. True edema or drusen? Then same-day imaging or steroids.",
      keys: [
        "True edema: vessels obscured at the margin.",
        "Bilateral: BP, then same-day imaging.",
        "AION ≥ 50: ESR, CRP (arteritis).",
        "Disc drusen: confirm (autofluorescence, OCT, B-scan) before reassuring."
      ],
      ask: { q: "True edema or pseudo-edema: how do you decide?", a: "True edema obscures the vessels at the disc margin and is often accompanied by hyperemia, flame hemorrhages and cotton-wool spots. The pseudo-edema of drusen keeps crisp vessels, a lumpy contour with refractile bodies and no hemorrhage; autofluorescence, OCT or B-scan confirm it." }
    },
    title: "Swollen disc: papilledema, AION, drusen, neuroretinitis",
    what: "A swollen disc (blurred, elevated margins) can come from raised intracranial pressure (**papilledema** in the strict sense), an infarct of the nerve (**AION**, anterior ischemic optic neuropathy), inflammation (**neuroretinitis**) or a false swelling (pseudo-edema) such as **optic disc drusen**. First distinguish true edema from pseudo-edema, then spot the cases that require same-day imaging or steroids.",
    look: [
      "True edema: vessels obscured at the disc margin by swollen fibers, hyperemia, peripapillary flame hemorrhages, cotton-wool spots, engorged veins, retinal folds.",
      "Papilledema (intracranial hypertension): bilateral, VA preserved early on, enlarged blind spot, transient visual obscurations, headaches, pulsatile tinnitus, horizontal diplopia (CN VI, abducens, palsy).",
      "Nonarteritic AION (NAION): sudden painless loss in one eye, often sectoral edema, altitudinal defect, RAPD; the other disc small and crowded (\"disc at risk\").",
      "Arteritic AION (giant cell arteritis): pale \"chalky white\" edema, severe vision loss, age 50 or older, systemic signs; an emergency for both eyes.",
      "Optic disc drusen: a lumpy disc with yellowish refractile bodies, crisp vessels; confirm with autofluorescence, OCT or B-scan (hyperechoic, persisting at low gain).",
      "Neuroretinitis: a swollen disc followed by a **macular star** of exudates, often after a few days; a common cause: Bartonella henselae (cat-scratch disease)."
    ],
    why: "In glaucoma clinic, you examine dozens of discs a day: a swollen disc is never glaucomatous and can herald a brain tumor, cerebral venous thrombosis or arteritis that will blind the other eye. Conversely, optic disc drusen cause field defects and a thinned RNFL that mimic glaucoma, and any edema makes the RNFL OCT falsely thick.",
    action: [
      "Bilateral disc swelling: take the BP, then same-day neuroimaging (MRI with venography, otherwise computed tomography, CT, with venography) BEFORE the lumbar puncture (opening pressure, fluid analysis).",
      "AION at age 50 or older: first rule out arteritis (ESR, CRP, platelets, symptoms); if suspected, high-dose steroids the same day, without waiting for the temporal artery biopsy.",
      "Nonarteritic AION: vascular factors (BP, diabetes, sleep apnea), monitoring of the other eye; no treatment has been proven to restore vision.",
      "Probable pseudo-edema: confirm the drusen before reassuring; at the slightest doubt, treat as true edema. Neuroretinitis: Bartonella serology and neuro-ophthalmology."
    ],
    pitfalls: [
      "Lumbar puncture before imaging: risk of brain herniation if there is a mass.",
      "Being reassured by a VA of 6/6 (20/20): in intracranial hypertension, VA stays good until an advanced stage.",
      "Labeling field defects caused by optic disc drusen as \"normal-tension glaucoma\": look for drusen on autofluorescence or B-scan."
    ],
    pearl: {
      q: "How do you tell true disc edema from pseudo-edema on fundus exam?",
      a: "True edema obscures the vessels at the disc margin and is often accompanied by hyperemia, flame hemorrhages and cotton-wool spots. The pseudo-edema of drusen keeps crisp vessels, a lumpy contour with refractile bodies and no hemorrhage; autofluorescence, OCT or B-scan confirm it."
    }
  },
});
Object.assign(G.OPH_EN.A.recog, {
  "pupilles-neuro": {
    card: {
      lead: "Anisocoria is often normal, sometimes Horner. Homonymous hemianopia: a brain lesion.",
      keys: [
        "Worse in the dark: Horner; in light: the large pupil.",
        "Large pupil + ptosis: CN III, same-day imaging.",
        "Painful Horner: dissection, same-day imaging.",
        "Defect bounded by the **vertical** meridian: urgent brain imaging."
      ],
      ask: { q: "Horner: what does apraclonidine show?", a: "The pupil deprived of its sympathetic innervation becomes hypersensitive (denervation hypersensitivity): apraclonidine, a weak alpha agonist with almost no effect on a normal pupil, dilates it. The anisocoria reverses, the small pupil becoming the larger one, and the ptosis decreases." }
    },
    title: "Pupils and visual pathways: anisocoria, Horner, homonymous hemianopia",
    what: "Pupils of different sizes (anisocoria) are often normal, but can reveal **Horner syndrome** (damage to the sympathetic pathway that dilates the pupil and lifts the lid). A **homonymous hemianopia** (loss of the same half of the field in both eyes) indicates brain damage behind the chiasm, not glaucoma.",
    look: [
      "**Physiologic anisocoria**: a difference of 1 mm or less, about the same in dark and light, no ptosis, normal reflexes.",
      "Horner: small pupil (miosis) and mild ptosis on the same side, sometimes loss of sweating; anisocoria greater IN THE DARK, with dilation lag of the small pupil.",
      "**Apraclonidine test** (one drop in each eye): in Horner, after 30 to 60 min, the small pupil dilates and the lid rises: the anisocoria reverses.",
      "Homonymous hemianopia: a defect on the same side in both eyes, bounded by the **vertical meridian** (glaucoma respects the horizontal meridian); the more congruous the defects, the more posterior the lesion.",
      "Link with module A (Pupil exam): an RAPD indicates damage to the optic nerve or to a large area of retina; neither Horner nor occipital hemianopia causes one."
    ],
    why: "Apraclonidine is an alpha-agonist glaucoma drug (prevention of IOP spikes after YAG laser or iridotomy, acute attacks): you can also use it to confirm a Horner. And faced with a visual field that is \"getting worse\" in a glaucoma patient, you must recognize a defect that respects the vertical meridian: it is not progression, it is a stroke or a mass to investigate.",
    action: [
      "Anisocoria: compare in dark and light; greater in the dark → the small pupil is abnormal (Horner); greater in the light → the large pupil is abnormal (CN III palsy, tonic pupil, dilating drops).",
      "Large pupil with ptosis or diplopia: CN III (oculomotor nerve) palsy from an aneurysm until proven otherwise → urgent CT angiography or MR angiography, the same day.",
      "Acute painful Horner (neck, face, head): carotid dissection until proven otherwise → same-day emergency for CT angiography or MR angiography of head and neck (stroke risk).",
      "New painless Horner: prompt imaging of the whole sympathetic pathway (brain, neck, lung apex); in children, think of neuroblastoma.",
      "New homonymous hemianopia: urgent brain imaging; check the SAAQ standard (binocular field of at least 30° on each side of the vertical meridian): a complete hemianopia does not meet it."
    ],
    pitfalls: [
      "A falsely negative apraclonidine test in a very recent Horner (hypersensitivity takes a few days to develop): never delay imaging of a painful Horner to do the test.",
      "Blaming glaucoma for a field defect that respects the vertical meridian because the patient is a \"known glaucoma patient\"."
    ],
    pearl: {
      q: "How does the apraclonidine test confirm Horner syndrome?",
      a: "The pupil deprived of its sympathetic innervation becomes hypersensitive (denervation hypersensitivity): apraclonidine, a weak alpha agonist with almost no effect on a normal pupil, dilates it. The anisocoria reverses, the small pupil becoming the larger one, and the ptosis decreases."
    }
  },
  "tumeurs-toxicite-trauma": {
    card: {
      lead: "Choroidal nevus: common and benign, but spot melanoma.",
      keys: [
        "Nevus: slate gray, flat (< 2 mm), surface drusen.",
        "Melanoma: > 2 mm, fluid, **orange pigment**.",
        "Hydroxychloroquine ≤ 5 mg/kg/day; yearly screening after 5 years.",
        "After blunt trauma: dilated periphery and gonioscopy (angle recession)."
      ],
      ask: { q: "Nevus or melanoma: which signs?", a: "Thickness > 2 mm, subretinal fluid, symptoms, orange pigment, a margin 3 mm or less from the disc, acoustic hollowness on ultrasound, absence of halo and of drusen. The more these signs add up, the greater the risk of growth: I refer to ocular oncology." }
    },
    title: "Nevus or melanoma, hydroxychloroquine toxicity, commotio retinae",
    what: "A **choroidal nevus** (a flat \"mole\" under the retina) is common and benign, but the signs of **choroidal melanoma**, the most common primary intraocular malignancy in adults, must be recognized. Two other macular findings to know: retinal toxicity from antimalarials (hydroxychloroquine, chloroquine) and **commotio retinae** (retinal whitening after a blow).",
    look: [
      "Nevus: slate-gray lesion, flat (less than 2 mm thick), often with surface drusen or a pale halo around it, without fluid or orange pigment.",
      "Melanoma, the \"To Find Small Ocular Melanoma Using Helpful Hints Daily\" rule (Shields): Thickness > 2 mm, subretinal Fluid, Symptoms, **Orange pigment**, Margin ≤ 3 mm from the disc, Ultrasound Hollowness, absence of Halo, absence of Drusen.",
      "Shields' imaging-based update (2019, \"To Find Small Ocular Melanoma Doing IMaging\"): thickness > 2 mm, subretinal fluid, symptoms, orange pigment, acoustic hollowness and diameter > 5 mm.",
      "Hydroxychloroquine or chloroquine toxicity: invisible early on; OCT first shows parafoveal thinning of the outer layers; late, a \"bull's-eye\" maculopathy.",
      "Commotio retinae: grayish whitening of the outer retina after blunt trauma (Berlin edema at the posterior pole), sometimes with hemorrhages; resolves within days or weeks."
    ],
    why: "These findings turn up on routine dilated fundus exams in glaucoma clinic or in the preoperative cataract workup. The paracentral 10-2 defects and macular thinning of hydroxychloroquine toxicity can be mistaken for glaucoma (and vice versa), and the blow that causes commotio retinae can also cause a hyphema and angle recession, hence glaucoma years later.",
    action: [
      "Pigmented choroidal lesion: color photo, OCT (fluid?) and ultrasound (thickness, acoustic hollowness); at least one risk factor or documented growth → ocular oncology opinion, promptly if several factors.",
      "Nevus without risk factors: baseline photo, a first short-interval check, then annually if stable; teach the symptoms (vision loss, flashes, a spot).",
      "Hydroxychloroquine (revised AAO recommendations, 2016): target dose ≤ 5 mg/kg/day of real body weight; baseline exam in the first year, then annual screening after 5 years (earlier if high dose, renal insufficiency, tamoxifen or macular disease); 10-2 field and macular OCT.",
      "After blunt trauma: dilated peripheral exam (tears), gonioscopy once the eye is quiet (angle recession), then IOP monitored for life."
    ],
    pitfalls: [
      "Reassuring about a nevus that has been \"known forever\" without a baseline photo: without comparison, it is impossible to prove it has not grown.",
      "Waiting for the bull's eye to talk about toxicity: at that stage the loss is irreversible and can progress despite stopping the drug.",
      "After a blow, looking only at the hyphema: commotio retinae, macular hole, choroidal rupture and angle recession must also be looked for.",
      "Screening with the 10-2 only in a patient of Asian descent: involvement is often more peripheral, hence adding a 24-2."
    ],
    pearl: {
      q: "Which signs of a pigmented choroidal lesion make you think of melanoma rather than nevus?",
      a: "Thickness > 2 mm, subretinal fluid, symptoms, orange pigment, a margin 3 mm or less from the disc, acoustic hollowness on ultrasound, absence of halo and of drusen. The more these signs add up, the greater the risk of growth: I refer to ocular oncology."
    }
  },
});

Object.assign(G.OPH_EN.A.exam, {
  "av": {
    card: {
      lead: "The vital sign of the eye: it measures central vision, guides urgency and is the legal reference for driving (SAAQ).",
      keys: [
        "One eye at a time, with distance correction, at 6 m.",
        "< 6/6: repeat with the **pinhole** (corrects optical blur).",
        "No line read: CF, HM, LP with projection, NLP.",
        "Always first, before drops, tonometry or dilation."
      ],
      ask: { q: "VA goes from 6/18 to 6/7.5 with pinhole: your conclusion?", a: "The loss is mainly optical: I do a refraction (or try a rigid lens if the cornea is irregular) before looking for macular or optic nerve disease." }
    },
    title: "Visual acuity",
    why: "It is the vital sign of the eye: it measures central function, guides urgency (central keratitis, angle-closure attack) and serves as a legal reference, notably for driving (Société de l'assurance automobile du Québec, SAAQ).",
    how: [
      "Each eye separately, the other well covered without pressing, with the usual distance correction, at 6 m (or an equivalent distance with a mirror or screen).",
      "Record the smallest line read in metric notation, e.g. 6/6 (20/20); \"6/9 −2\" = the 6/9 line with 2 letters missed.",
      "If VA is < 6/6: repeat with the pinhole, which largely corrects optical blur.",
      "If no line is read: bring the chart closer, then CF (counting fingers, record the distance), HM (hand motions), LP (light perception, with projection in all 4 quadrants), NLP (no light perception).",
      "Near vision with a card at ≈ 40 cm and the add in presbyopes."
    ],
    normal: [
      "6/6 (20/20) = logMAR 0.0 (logMAR: logarithm of the minimum angle of resolution; the higher it is, the worse the vision); young adults often read better (6/4.5).",
      "Equivalents: 6/12 = 20/40 = logMAR 0.3; 6/60 = 20/200 = logMAR 1.0.",
      "SAAQ class 5: binocular VA ≥ 6/15 (20/50); heavy vehicles: 6/9."
    ],
    patho: [
      "Improved with pinhole → optical cause: refractive error or irregular cornea (keratoconus, scar).",
      "Not improved → macula, optic nerve, dense opacity (cataract, central scar) or amblyopia (a \"lazy\" eye since childhood).",
      "Sudden loss with a red, painful eye → keratitis, uveitis (intraocular inflammation) or angle-closure attack (colored halos): an emergency.",
      "Glaucoma: VA preserved until an advanced stage (central vision spared); unexplained loss calls for another cause or fixation involvement (10-2 field).",
      "Vision that fluctuates with blinking → unstable tear film (dry eye)."
    ],
    pitfalls: [
      "Measuring without the distance glasses, or with reading glasses: falsely low VA.",
      "An occluder that presses on the eye (transient blur) or lets the patient peek between the fingers.",
      "Forgetting the pinhole: a refractive loss is attributed to disease, or vice versa.",
      "Measuring after dilation, tonometry or gonioscopy (gel, anesthetic, fluorescein): falsely low VA. Always measure VA first."
    ],
    pearl: "Attending: \"VA goes from 6/18 to 6/7.5 with pinhole: your conclusion?\" The loss is mainly optical: I do a refraction (or try a rigid lens if the cornea is irregular) before looking for macular or optic nerve disease."
  },
  "pupilles": {
    card: {
      lead: "The swinging light finds an asymmetric optic neuropathy in 30 s. Before any dilation.",
      keys: [
        "Dim room, distance fixation.",
        "2–3 s per eye, same intensity.",
        "**RAPD**: both pupils dilate when the light reaches the affected eye.",
        "Poorly reactive mid-dilated pupil, painful red eye, high IOP: angle closure."
      ],
      ask: { q: "Left RAPD and a dense left cataract: does the cataract explain it?", a: "No: a cataract scatters light but does not cause a significant RAPD. Before operating, I look for an optic neuropathy (advanced glaucoma, compression) or extensive retinal disease (OCT, visual field, ultrasound if the fundus cannot be seen)." }
    },
    title: "Pupil examination",
    why: "The swinging flashlight test detects an asymmetric optic neuropathy (e.g. advanced glaucoma on one side) in 30 seconds, and a fixed mid-dilated pupil points to an angle-closure attack: do it before any dilation.",
    how: [
      "Dim room, patient fixating at distance (near fixation constricts the pupils).",
      "Compare size and shape in the dark, then in the light: is an anisocoria (unequal pupils) greater in the dark or in the light?",
      "Direct (lit eye) and consensual (other eye) reflexes, for each eye.",
      "Swinging flashlight test: light one eye for 2–3 s, move quickly to the other, several back-and-forths, same intensity and same angle.",
      "If there is an RAPD: grade it or measure it with neutral density filters; if the light reaction is weak, test the near reaction (convergence)."
    ],
    normal: [
      "Round pupils, ≈ 2–4 mm in the light; physiologic anisocoria ≤ 1 mm (≈ 20% of people), roughly the same in dark and light.",
      "Equal direct and consensual reflexes.",
      "On the swinging flashlight test, each pupil constricts (or stays stable) when the light reaches its eye."
    ],
    patho: [
      "**RAPD** (relative afferent pupillary defect, Marcus Gunn pupil): both pupils dilate when the light moves to the affected eye → asymmetric optic neuropathy (glaucoma, neuritis, ischemia, compression) or severely damaged retina.",
      "Grading: from 1+ (weak initial constriction then redilation) to 3+ (immediate dilation); at the maximum (4+), amaurotic pupil (no direct reaction).",
      "**Reverse RAPD**: one pupil is fixed (trauma, synechiae, mydriatic); only the mobile pupil is watched: if it dilates when the eye with the fixed pupil is lit, the RAPD is on the fixed side.",
      "Anisocoria greater in the dark → the small pupil is abnormal (Horner syndrome: miosis, ptosis, ± anhidrosis).",
      "Anisocoria greater in the light → the large pupil is abnormal: CN III palsy with pupil involvement (aneurysm until proven otherwise: urgent vascular imaging, even without pain), Adie pupil, mydriatic, damaged sphincter.",
      "Oval, poorly reactive mid-dilated pupil + painful red eye + high IOP → acute angle-closure attack (ischemic sphincter)."
    ],
    pitfalls: [
      "A cataract, refractive error or corneal scar does not cause a significant RAPD: finding one means looking at the optic nerve or the retina.",
      "Symmetric bilateral glaucoma → no RAPD, because the test compares the two eyes.",
      "Patient fixating the light or a near object → accommodative constriction that skews the test.",
      "Lighting one eye longer or from a different angle → false RAPD."
    ],
    pearl: "Attending: \"Your patient has a left RAPD and a dense left cataract: does the cataract explain it?\" No: a cataract scatters light but does not cause a significant RAPD. Before operating, I look for an optic neuropathy (advanced glaucoma, compression) or extensive retinal disease (OCT, visual field, ultrasound if the fundus cannot be seen)."
  },
});
Object.assign(G.OPH_EN.A.exam, {
  "lampe": {
    card: {
      lead: "The central tool in cornea and glaucoma: every layer is examined, from the lids to the anterior vitreous.",
      keys: [
        "Always front to back, low then high magnification.",
        "Optic section: depth of a lesion; retroillumination: guttae, transillumination.",
        "AC cells: 1 × 1 mm beam, dark room.",
        "**Van Herick ≤ 2** (≤ 1/4 CT): gonioscopy mandatory."
      ],
      ask: { q: "How do you confirm guttae at the slit lamp?", a: "With specular reflection (dark spots in the endothelial mosaic) and retroillumination (droplets); I then quantify with specular microscopy and pachymetry, and ask whether vision is worse in the morning (edema)." }
    },
    title: "Slit-lamp biomicroscopy",
    why: "It is the central tool of both clinics: each corneal layer, the anterior chamber, the iris and the lens are examined with it, then the angle and the disc with lenses.",
    how: [
      "Adjust the eyepieces and interpupillary distance; patient well positioned (chin, forehead), canthus at the mark; lamp and microscope coupled on the same point.",
      "Systematic exam from front to back (lids and lid margin → conjunctiva → cornea → anterior chamber (AC) → iris → lens → anterior vitreous), low then high magnification.",
      "Diffuse illumination: overview. Optic section (very thin slit at ≈ 45°): depth of a lesion in the cornea. Parallelepiped (1–2 mm slit): volume and texture of the cornea.",
      "Retroillumination (light reflected from the iris or fundus): guttae, microcysts, iris transillumination defects. Sclerotic scatter (beam on the limbus, the cornea lights up from within): subtle edema and scars. Specular reflection (lamp and microscope at equal angles): endothelial mosaic. Cobalt blue: fluorescein.",
      "AC cells: 1 × 1 mm beam, maximum intensity and magnification, dark room.",
      "Van Herick: thin slit at ≈ 60°, at the temporal limbus; compare peripheral AC depth with corneal thickness (CT)."
    ],
    normal: [
      "Clear, smooth cornea, without guttae; deep, quiet AC (no cells or flare).",
      "Van Herick 4 (peripheral AC ≥ 1 CT) or 3 (1/4 to 1/2 CT).",
      "Iris without transillumination defects or new vessels; clear lens or age-appropriate cataract."
    ],
    patho: [
      "Van Herick ≤ 2 (≤ 1/4 CT) → gonioscopy mandatory (possibly narrow angle); 0 = iris touching the cornea.",
      "AC cells and flare → inflammation (uveitis); hypopyon (layered white blood cells) → severe keratitis or endophthalmitis.",
      "Keratic precipitates (KP: clumps of inflammatory cells on the endothelium) → uveitis; Krukenberg spindle (vertical pigment on the endothelium) → pigment dispersion.",
      "Whitish target-pattern deposits on the lens (often visible only after dilation) → pseudoexfoliation (PXF: age-related fibrillar material, aggressive glaucoma).",
      "New vessels at the pupillary margin (rubeosis) → retinal ischemia: gonioscopy and fundus exam the same day.",
      "Guttae (a \"beaten-metal\" appearance on specular reflection) → Fuchs dystrophy."
    ],
    pitfalls: [
      "Looking at the cornea only with diffuse illumination: guttae, microcysts and mild edema go unnoticed.",
      "Looking for cells with weak light or in a lit room: false negative.",
      "A normal Van Herick ≠ an angle open everywhere (plateau iris, narrower superior angle): it does not replace gonioscopy.",
      "Instilling fluorescein or anesthetic before looking at the intact cornea and measuring VA."
    ],
    pearl: "Attending: \"How do you confirm guttae at the slit lamp?\" With specular reflection (dark spots in the endothelial mosaic) and retroillumination (droplets); I then quantify with specular microscopy and pachymetry, and ask whether vision is worse in the morning (edema)."
  },
  "fluoresceine": {
    card: {
      lead: "They reveal epithelial lesions, dry eye and aqueous humor leaks (Seidel).",
      keys: [
        "Read under cobalt blue within 1–3 min.",
        "Inferior SPK: dry eye; superior: contact lenses.",
        "Dendrite with terminal bulbs: herpes simplex.",
        "**Positive Seidel**: a stream diluting the dye = wound or bleb leak."
      ],
      ask: { q: "After trabeculectomy: IOP 4 mmHg, flat AC. First test?", a: "A Seidel on the bleb: a stream diluting the fluorescein confirms a leak, to be closed (bandage contact lens, suture, revision) to prevent hypotony, a flat chamber and infection." }
    },
    title: "Vital dyes: fluorescein, lissamine, Seidel",
    why: "They reveal epithelial lesions (abrasion, keratitis, dendrite), dry eye and aqueous leaks (Seidel): a basic exam in cornea and after filtering surgery.",
    how: [
      "Fluorescein: a strip moistened with saline touched to the inferior conjunctiva (or a fluorescein-anesthetic drop), then have the patient blink.",
      "Observe under cobalt blue (± yellow filter) within 1–3 minutes, before the dye diffuses into the stroma.",
      "TBUT: seconds between the last blink and the first dark dry spot in the film.",
      "Lissamine green (or rose bengal): under white light, after 1–4 min; stains devitalized cells of the conjunctiva and lid margin.",
      "Seidel: concentrated fluorescein (strip applied directly) on the wound or bleb, then look under cobalt blue for a stream diluting the dye."
    ],
    normal: [
      "No dye uptake (a few isolated dots possible); a uniform film that breaks up after > 10 s.",
      "Negative Seidel: the dye stays uniform over the wound."
    ],
    patho: [
      "Superficial punctate keratitis (SPK: small stained dots) **inferior** → dry eye, blepharitis, lagophthalmos (lids that close poorly), drop toxicity; **interpalpebral** → dry eye or exposure; **superior** → contact lenses, superior limbic keratoconjunctivitis.",
      "**Dendrite** (branching ulcer with terminal bulbs) → herpes simplex; **pseudodendrite** (no bulbs, faint staining) → zoster, Acanthamoeba, healing epithelium; **geographic ulcer** → enlarged herpes, often on corticosteroids.",
      "Abrasion with sharp edges; vertical linear staining → foreign body under the upper lid (evert it).",
      "**Positive Seidel** (stream) → wound or filtering bleb leak: risk of hypotony and infection.",
      "**Negative staining** (dark area on a green background) → an elevation lifting the film: basement membrane dystrophy (map-like lines), nodule, raised scar.",
      "Lissamine: > 9 conjunctival spots or lid margin staining ≥ 2 mm long and ≥ 25% wide (lid wiper) = signs of dry eye per DEWS III; > 5 corneal fluorescein spots too."
    ],
    pitfalls: [
      "Too much dye or late reading: skewed TBUT, fine lesions masked, stromal diffusion.",
      "Anesthetic, tonometry or gonioscopy before the surface exam: iatrogenic SPK.",
      "Fluorescein stains soft contact lenses: remove them first.",
      "Vertical linear staining without everting the upper lid: a missed foreign body."
    ],
    pearl: "Attending: \"After a trabeculectomy, IOP is 4 mmHg and the AC is shallow: first test?\" A Seidel on the bleb: a stream diluting the fluorescein confirms a leak, to be closed (bandage contact lens, suture, revision) to prevent hypotony, a flat chamber and infection."
  },
  "tonometrie": {
    card: {
      lead: "The only glaucoma risk factor we treat: the measurement must be reliable.",
      keys: [
        "Goldmann: inner edges of the mires touching.",
        "Dial reading × 10 = mmHg.",
        "Thick mires, pressed lids, Valsalva: IOP overestimated.",
        "Thin cornea, edema, post-LASIK: IOP underestimated."
      ],
      ask: { q: "Post-LASIK, IOP 13 mmHg, growing cup: reassured?", a: "No: the thinned cornea makes Goldmann underestimate IOP. I look at the pre-surgery IOP, the trend, and above all structure and function (OCT, visual field); a tonometer less dependent on the cornea can help." }
    },
    title: "Tonometry",
    why: "IOP is the only glaucoma risk factor whose treatment has proven effective: a reliable, reproducible measurement guides diagnosis, the target IOP and follow-up.",
    how: [
      "Goldmann (reference): anesthetic + fluorescein, cobalt blue at maximum, lamp at ≈ 60°, prism centered on the cornea, lids held without pressing on the globe.",
      "On contact, two green semicircles (mires) appear: turn the dial until their inner edges touch; dial × 10 = mmHg (the prism flattens a 3.06 mm disc).",
      "Astigmatism > 3 D: rotate the prism to place the minus-cylinder axis at 43° on the red mark.",
      "iCare (rebound): no anesthesia, probe brought close to the cornea, a series of automatic readings; useful in children and uncooperative patients. Tono-Pen (small handheld applanation device): irregular or edematous cornea, supine patient. NCT (non-contact tonometer: air puff): screening.",
      "Record the time and the device; measure before gonioscopy and dilation."
    ],
    normal: [
      "10–21 mmHg (mean ≈ 15–16), symmetric between the two eyes.",
      "24-hour variation of 2–6 mmHg, often higher at night and early in the morning.",
      "Fine, regular mires of equal size and well centered."
    ],
    patho: [
      "IOP > 21 mmHg without nerve or field damage = ocular hypertension; with damage = glaucoma. Damage with IOP always ≤ 21 mmHg = normal-tension glaucoma.",
      "Very high IOP + painful red eye + steamy cornea + mid-dilated pupil → acute angle-closure attack.",
      "IOP elevated in one eye only → look for a secondary cause: pseudoexfoliation, pigment dispersion, uveitis, angle recession, new vessels, corticosteroids.",
      "Very low IOP (hypotony) after filtering surgery → overfiltration, leak (Seidel), choroidal detachment; after trauma → occult globe rupture or cyclodialysis."
    ],
    pitfalls: [
      "Mires too thick (too much fluorescein) → overestimation; too thin → underestimation.",
      "Pressure on the lids, breath-holding or Valsalva, a tight tie or collar → overestimation.",
      "Thin cornea, edema, post-LASIK → underestimation; thick cornea → overestimation (do not correct with a formula).",
      "Comparing different devices from one visit to the next: the values are not interchangeable."
    ],
    pearl: "Attending: \"Your patient who had LASIK has an IOP of 13 mmHg but her cupping is increasing: reassured?\" No: the thinned cornea makes Goldmann underestimate IOP. I look at the pre-surgery IOP, the trend, and above all structure and function (OCT, visual field); a tonometer less dependent on the cornea can help."
  },
});
Object.assign(G.OPH_EN.A.exam, {
  "gonioscopie": {
    card: {
      lead: "The only test that shows the angle: open, narrow, closed, apposition or synechiae.",
      keys: [
        "Dark room, short beam off the pupil.",
        "Posterior to anterior: iris, ciliary body band, spur, meshwork, Schwalbe.",
        "Meshwork hidden over ≥ 180°: contact.",
        "**Indentation**: the angle opens (apposition) or stays stuck (synechiae)."
      ],
      ask: { q: "How do you tell apposition from synechiae?", a: "With indentation: using a 4-mirror lens, I press centrally; aqueous pushes the iris back and the angle opens if it is apposition, whereas PAS stay stuck. This separates PACS from PAC and points toward LPI (laser iridotomy) or lens extraction." }
    },
    title: "Gonioscopy",
    why: "It is the only exam that shows the angle directly: it distinguishes open, narrow or closed angles, apposition or synechiae, and identifies secondary causes (PXF, recession, new vessels) before any glaucoma treatment.",
    how: [
      "Dark room and a small, short beam (≈ 1 mm) that does not enter the pupil (AAO, Preferred Practice Pattern): light constricts the pupil, which tightens the iris and falsely opens the angle.",
      "4-mirror lens (Zeiss, Posner, Sussman: no gel, allows indentation) or 3-mirror Goldmann lens (gel, stable image).",
      "Examine all 4 quadrants (start with the inferior one, the widest and most pigmented); the mirror shows the opposite angle (mirror at 12 o'clock → 6 o'clock angle; the image is inverted top to bottom, but not left to right).",
      "Find Schwalbe line at the corneal wedge (where the two slit reflections meet), then move down: \"I Can't See Til Schwalbe\" = Iris, Ciliary body band, Scleral spur, Trabecular meshwork, Schwalbe (from posterior to anterior).",
      "Dynamic (indentation) gonioscopy: press centrally with the 4-mirror lens → aqueous pushes the peripheral iris back → the angle opens (simple apposition) or stays stuck (synechiae).",
      "Record by quadrant: most posterior visible structure, Shaffer grade, iris profile, pigment, synechiae, vessels."
    ],
    normal: [
      "Shaffer 4 (35–45°, ciliary body band visible) or 3 (20–35°, spur visible) in all 4 quadrants.",
      "Light to moderate trabecular pigment, more marked inferiorly; fine iris processes possible (normal).",
      "No vessel crosses the scleral spur; no synechiae."
    ],
    patho: [
      "Shaffer 2 (≈ 20°, trabecular meshwork only), 1 (≤ 10°, Schwalbe only), 0 (closed). Pigmented trabecular meshwork not visible over ≥ 180° = iridotrabecular contact.",
      "Classification: PACS (angle-closure suspect: contact ≥ 180°, normal IOP, no synechiae or neuropathy); PAC (angle closure: contact + synechiae and/or ↑ IOP); PACG (angle-closure glaucoma: PAC + optic neuropathy).",
      "PAS (peripheral anterior synechiae: iris adhesions that persist on indentation) → chronic closure, previous attack, uveitis.",
      "Sampaolesi line (pigment anterior to Schwalbe) and patchy pigment → pseudoexfoliation; dense, homogeneous 360° pigment → pigment dispersion.",
      "Angle new vessels (NVA: vessels crossing the spur and arborizing over the trabecular meshwork) → early neovascular glaucoma: look for retinal ischemia urgently.",
      "Widened ciliary body band and torn iris processes, asymmetric → angle recession (old trauma)."
    ],
    pitfalls: [
      "Lit room or beam in the pupil → pupil constriction → falsely open angle.",
      "Inadvertent pressure with the 4-mirror lens → artificially opened angle (unintended indentation, corneal folds).",
      "Iris bombé: ask the patient to look toward the mirror to see \"over the hill\" before concluding the angle is closed.",
      "Confusing iris processes (fine, the angle is visible between them) with PAS (broad, hide the angle); or a pigmented Schwalbe line with the trabecular meshwork."
    ],
    pearl: "Attending: \"How do you tell apposition from synechiae?\" With indentation: using a 4-mirror lens, I press centrally; aqueous pushes the iris back and the angle opens if it is apposition, whereas PAS stay stuck. This separates PACS from PAC and points toward LPI (laser iridotomy) or lens extraction."
  },
  "pachymetrie": {
    card: {
      lead: "Central corneal thickness changes how IOP is read and the glaucoma risk; in cornea, it tracks edema and thinning.",
      keys: [
        "Normal ≈ 540–550 µm centrally, ≈ 650–700 µm peripherally.",
        "OHTS: ≤ 555 µm ≈ 3 × more conversion than > 588 µm.",
        "Rising CCT: edema (Fuchs, graft rejection).",
        "Keratoconus: thinnest point getting thinner = progression, think CXL."
      ],
      ask: { q: "Why does a thin cornea increase the risk in OHTS?", a: "First because the true IOP is underestimated; second, a thin cornea may reflect a more fragile ocular structure (low hysteresis is also a risk factor). It is integrated into the risk calculation rather than used to correct the number." }
    },
    title: "Pachymetry",
    why: "Central corneal thickness (CCT) influences the IOP reading and the risk that ocular hypertension becomes glaucoma; in cornea, it tracks edema (Fuchs) and thinning (keratoconus).",
    how: [
      "Ultrasound (contact): anesthetic, probe perpendicular to the center of the cornea, average of several readings.",
      "Optical (non-contact): Scheimpflug, anterior segment OCT or specular microscope; gives a full map and the thinnest point.",
      "Glaucoma: measure both eyes at baseline (repeat after refractive surgery, grafting or edema).",
      "Cornea: follow CCT and the thinnest point over time, on the same device."
    ],
    normal: [
      "CCT ≈ 540–550 µm; periphery ≈ 650–700 µm; thinnest point close to the center.",
      "Symmetric between the two eyes; slightly thicker on waking (lids closed overnight)."
    ],
    patho: [
      "Thin cornea: in OHTS (Ocular Hypertension Treatment Study), CCT ≤ 555 µm ≈ 3 times more conversion to glaucoma than CCT > 588 µm; IOP is also underestimated.",
      "Thick cornea: IOP overestimated on Goldmann (an \"apparent\" ocular hypertension may be mostly due to thickness).",
      "CCT increasing over time, or clearly thicker than the fellow eye → edema (Fuchs, decompensated endothelium, graft rejection).",
      "Keratoconus: a displaced thinnest point (often inferior) that thins from one visit to the next = a marker of progression that prompts cross-linking (CXL)."
    ],
    pitfalls: [
      "Probe not perpendicular or decentered → thickness overestimated.",
      "Applying an IOP \"correction\" formula: none is validated; CCT is integrated into the overall risk.",
      "After laser refractive surgery (LASIK, PRK), the low CCT reflects the ablation: IOP remains underestimated, but the OHTS risk thresholds do not apply.",
      "Comparing different devices (ultrasound vs optical)."
    ],
    pearl: "Attending: \"Why does a thin cornea increase the risk in OHTS?\" First because the true IOP is underestimated; second, a thin cornea may reflect a more fragile ocular structure (low hysteresis is also a risk factor). It is integrated into the risk calculation rather than used to correct the number."
  },
  "papille": {
    card: {
      lead: "Glaucoma is an optic neuropathy: describe the disc in the same order every time.",
      keys: [
        "1. Disc size first.",
        "2. Rim: ISNT rule, notch.",
        "3. Vertical C/D > 0.6 or asymmetry ≥ 0.2.",
        "Drance hemorrhage: active disease; pallor > cupping: another cause."
      ],
      ask: { q: "What is the first thing to describe on a disc?", a: "Its size: a C/D of 0.7 can be normal on a large disc and pathological on a small one. Then the rim (ISNT, notch), hemorrhage, PPA and color; a pale remaining rim makes me think of a non-glaucomatous cause." }
    },
    title: "Optic disc examination",
    why: "Glaucoma is a characteristic optic neuropathy: describing a disc systematically is the foundation of glaucoma clinic and of the attending's questions.",
    how: [
      "Slit lamp + non-contact lens (78 D or 90 D), pupil dilated if possible; stereoscopic viewing to judge contour.",
      "**1. Disc size**: vertical height measured with the slit, multiplied by the lens factor (≈ 1.1 for 78 D, ≈ 1.3 for 90 D); normal ≈ 1.5–2 mm.",
      "**2. Neuroretinal rim**: thickness in each sector (ISNT rule), notches, color.",
      "**3. Cup**: vertical C/D (margin identified by the bend of the small vessels), shape, depth, asymmetry between the eyes.",
      "**4. Associated signs**: disc hemorrhage, beta-zone peripapillary atrophy (PPA), vessels, RNFL defects in red-free (green) light.",
      "**5. Compare** with previous photos and OCT: a documented change is worth more than an isolated measurement."
    ],
    normal: [
      "Disc ≈ 1.5–2 mm, slightly vertically oval; pink rim that often follows the ISNT rule (I ≥ S ≥ N ≥ T).",
      "Vertical C/D usually ≤ 0.6, proportional to disc size, asymmetry < 0.2.",
      "No hemorrhage; alpha-zone PPA is common and benign."
    ],
    patho: [
      "Vertical C/D > 0.6 or asymmetry ≥ 0.2 → suspicious (to be interpreted according to disc size).",
      "Inferotemporal or superotemporal notch, a rim that violates ISNT, vertically oval cupping → glaucomatous axonal loss at the poles.",
      "Drance hemorrhage (a small flame crossing the disc margin) → active disease, risk of progression (AAO, Preferred Practice Pattern).",
      "Beta-zone PPA, bayoneting or nasalized vessels, a bared circumlinear vessel, visible lamina cribrosa pores → signs associated with glaucoma.",
      "**Pallor > cupping**, band pallor, a swollen disc → think of a non-glaucomatous cause (compression, ischemia, inflammation) → workup, often imaging."
    ],
    pitfalls: [
      "Judging C/D without disc size: a normal large disc labeled glaucoma, a small glaucomatous disc missed.",
      "Outlining the cup by pallor rather than contour: C/D underestimated.",
      "Tilted myopic disc with large PPA: cupping hard to judge, OCT also misleading.",
      "Direct ophthalmoscope without stereopsis: depth poorly assessed."
    ],
    pearl: "Attending: \"What is the first thing to describe on a disc?\" Its size: a C/D of 0.7 can be normal on a large disc and pathological on a small one. Then the rim (ISNT, notch), hemorrhage, PPA and color; a pale remaining rim makes me think of a non-glaucomatous cause."
  },
});
Object.assign(G.OPH_EN.A.exam, {
  "oct": {
    card: {
      lead: "OCT measures the RNFL and ganglion cells, at baseline and follow-up.",
      keys: [
        "Check signal and segmentation before colors.",
        "Inferotemporal thinning first ↔ superior field defect.",
        "Floor effect ≈ 50–60 µm in advanced disease.",
        "**Red disease**: false red (high myopia, tilted disc, segmentation)."
      ],
      ask: { q: "All-red OCT, −9 D myope, normal field: glaucoma?", a: "Probably red disease (tilted disc, unsuitable normative database, doubtful segmentation). I check the segmentation, correlate with the field (including a 10-2) and follow progression over time rather than the colors." }
    },
    title: "OCT: RNFL, ganglion cells and anterior segment",
    why: "OCT objectively measures the RNFL and the macular ganglion cells: the AAO, Preferred Practice Pattern recommends both at baseline and at follow-up, combined with the visual field; anterior segment OCT (AS-OCT) assesses the angle and the cornea.",
    how: [
      "Patient fixating the internal target; dilate if the pupil is small or the cataract dense; check quality (signal strength, centering, segmentation) before reading the colors.",
      "Peripapillary RNFL: measurement circle around the disc → average thickness, by quadrant and by clock hour, TSNIT curve, compared with a normative database (green, yellow, red).",
      "Macular GCIPL (ganglion cell and inner plexiform layers): thickness and deviation maps; valuable at the early stage (central involvement) and the advanced stage.",
      "Progression: guided analysis on the same device, against baseline exams.",
      "AS-OCT: AC depth, angle opening, iridotrabecular contact, corneal and epithelial thickness."
    ],
    normal: [
      "Average RNFL ≈ 90–100 µm in adults (varies with the device and age); \"double-hump\" TSNIT curve (superior and inferior poles thicker).",
      "Sectors in the green, symmetry between the two eyes and between the superior and inferior hemispheres.",
      "Symmetric GCIPL, without an arc of thinning."
    ],
    patho: [
      "Inferotemporal thinning (the most common), then superotemporal: inferior RNFL damage ↔ superior field defect.",
      "GCIPL: an arc of inferior thinning that stops at the horizontal raphe (macular vulnerability zone) ↔ inferotemporal pole of the disc.",
      "Floor effect: the RNFL no longer falls below ≈ 50–60 µm (vessels and supporting tissue) → at the advanced stage, follow the visual field and the GCIPL.",
      "\"Red disease\" (red without disease, false positive): high myopia, small or tilted disc, segmentation error, weak signal.",
      "\"Green disease\" (green despite disease, false negative): early damage, disc edema, an epiretinal membrane that artificially thickens the measurement.",
      "AS-OCT: iridotrabecular contact, even if gonioscopy looks open, can predict closure (AAO, Preferred Practice Pattern); UBM is superior for plateau iris."
    ],
    pitfalls: [
      "Reading the colors without checking scan quality and segmentation.",
      "Normative databases are often poor in high myopes: red ≠ glaucoma.",
      "Comparing different devices: values are not interchangeable.",
      "Ignoring the macula: early central damage can spare the average RNFL."
    ],
    pearl: "Attending: \"OCT all red in a −9 D myope with a normal visual field: glaucoma?\" Probably red disease (tilted disc, unsuitable normative database, doubtful segmentation). I check the segmentation, correlate with the field (including a 10-2) and follow progression over time rather than the colors."
  },
  "topographie": {
    card: {
      lead: "They detect and follow keratoconus: the basis for cross-linking and pre-LASIK screening.",
      keys: [
        "4 maps: curvature, elevations, pachymetry.",
        "Keratoconus: inferior steepening, asymmetric bow tie.",
        "Screening: central K > 47.2 D or I-S value > 1.4 D.",
        "**Progression** on the same device = main criterion for CXL."
      ],
      ask: { q: "What is the difference between topography and tomography?", a: "Placido topography measures only the curvature of the anterior surface, through the tear film. Tomography (Scheimpflug or OCT) reconstructs the cornea in 3D (anterior and posterior elevation, pachymetry) and detects keratoconus earlier: posterior elevation and a displaced thinnest point." }
    },
    title: "Corneal topography and tomography",
    why: "They detect and follow ectasias (keratoconus: a cornea that thins and bulges into a cone; pellucid marginal degeneration) and irregular astigmatism; they are the basis for the cross-linking indication and for screening before refractive surgery.",
    how: [
      "Placido-disc topography: light rings reflected by the tear film → curvature map of the anterior surface (axial or tangential); warm = steep, cool = flat.",
      "Tomography (rotating Scheimpflug or OCT): sections of the cornea → anterior and posterior elevation (deviation from a reference sphere), pachymetry map, BAD-D index (Belin-Ambrósio).",
      "Before measuring: a good-quality tear film (artificial tears, blinking); contact lenses stopped long enough (longer for rigid lenses).",
      "Read 4 maps: anterior axial curvature, anterior elevation, posterior elevation, pachymetry (value and location of the thinnest point).",
      "Compare over time on the same device: progression is the main criterion for CXL."
    ],
    normal: [
      "Fairly uniform curvature (≈ 43 D centrally) that flattens toward the periphery.",
      "Regular astigmatism = symmetric bowtie: vertical if with-the-rule, horizontal if against-the-rule.",
      "Thinnest point near the center; elevations within normal limits."
    ],
    patho: [
      "Keratoconus: inferior steepening, asymmetric bowtie with skewed axes, ↑ posterior elevation, displaced and thinned thinnest point.",
      "Screening landmarks (Rabinowitz): central K > 47.2 D or inferior–superior asymmetry (I-S value) > 1.4 D → suspicion of keratoconus, to be confirmed on tomography.",
      "Central keratoconus: isolated central steepening.",
      "Pellucid marginal degeneration (PMD: an inferior band of thinning 1–2 mm from the limbus): \"crab-claw\" pattern with marked against-the-rule astigmatism.",
      "Progression (Gomes 2015: ≥ 2 criteria among anterior steepening, posterior steepening, thinning or an accelerating pachymetric change) → CXL; in children, CXL at diagnosis (2025 global consensus).",
      "Forme fruste (abnormal posterior elevation or BAD-D, near-normal anterior topography) → contraindicates LASIK (risk of ectasia)."
    ],
    pitfalls: [
      "Dry or irregular tear film → falsely irregular map, even a false cone: repeat after lubrication.",
      "Recently worn contact lenses (warpage) → pseudokeratoconus.",
      "Comparing different color scales (absolute vs normalized) or different devices.",
      "Placido sees neither the posterior surface nor the thickness: a normal anterior topography does not rule out early keratoconus."
    ],
    pearl: "Attending: \"What is the difference between topography and tomography?\" Placido topography measures only the curvature of the anterior surface, through the tear film. Tomography (Scheimpflug or OCT) reconstructs the cornea in 3D (anterior and posterior elevation, pachymetry) and detects keratoconus earlier: posterior elevation and a displaced thinnest point."
  },
  "champs-visuels": {
    card: {
      lead: "It measures function: it confirms, stages and follows glaucomatous neuropathy.",
      keys: [
        "24-2 routinely; 10-2 if fixation is threatened.",
        "Reliability first: false positives ≤ 15%.",
        "Glaucoma respects the **horizontal** meridian; vertical → neuroimaging.",
        "Stages: early MD > −6 dB; advanced < −12 dB."
      ],
      ask: { q: "Right superior arcuate defect: where do you look on the disc?", a: "At the inferior pole, especially inferotemporally: notch, hemorrhage, thinned RNFL. If the defect respected the vertical meridian, I would think instead of the chiasm or the retrochiasmal pathways." }
    },
    title: "Automated visual field (Humphrey)",
    why: "It measures function: it confirms glaucomatous neuropathy, stages it and detects progression; it is also used to assess fitness to drive (SAAQ).",
    how: [
      "Humphrey SITA Standard (or Fast/Faster): 24-2 (54 points, 6° grid) for diagnosis and follow-up; 10-2 (central 10°) at baseline and if damage threatens fixation; 24-2C = 24-2 + a few central points.",
      "Age-appropriate near correction, pupil of at least ≈ 3 mm, clear instructions, one eye at a time, the other covered.",
      "Reliability first: false positives (FP), false negatives, fixation losses, gaze tracking.",
      "Then read: grayscale map (overview), total deviation (TD) and pattern deviation (PD) with probabilities, the indices MD (mean deviation, global), PSD (localized loss), VFI (% of remaining function) and GHT (glaucoma hemifield test: compares the superior and inferior hemifields).",
      "Correlate with the disc and OCT; for progression, the same strategy, ≥ 2 baseline exams and clustered fields."
    ],
    normal: [
      "FP ≤ 15%; MD close to 0 dB; low PSD; VFI ≈ 100%; GHT \"within normal limits\".",
      "Physiologic blind spot ≈ 15° temporal to fixation.",
      "TD and PD without clusters of significant points."
    ],
    patho: [
      "Glaucomatous defects (nasal step, arcuate, paracentral) that respect the **horizontal** meridian; superior defect ↔ inferior disc and RNFL.",
      "Minimal glaucomatous defect (Anderson criteria): GHT outside normal limits, or PSD at p < 5%, or ≥ 3 contiguous non-edge points at p < 5% on the PD, one of them at p < 1%; to be confirmed on a second exam.",
      "A defect respecting the **vertical** meridian (bitemporal = chiasm; homonymous = retrochiasmal pathways) → neuroimaging.",
      "TD depressed everywhere but normal PD → generalized depression (cataract, small pupil, poor correction), not a localized glaucomatous defect.",
      "Hodapp-Parrish-Anderson stages: early MD > −6 dB; moderate −6 to −12 dB; advanced < −12 dB.",
      "Progression: fast if ≥ −2 dB/year; Chauhan 2008 (a Canadian team): ≈ 3 fields/year for 2 years to identify a fast progressor.",
      "SAAQ class 5: binocular field ≥ 100° horizontally (≥ 30° on each side), continuous 10° above and 20° below fixation; if abnormal, a signed binocular field (Esterman or Goldmann III/4e)."
    ],
    pitfalls: [
      "FP > 15% = unreliable test: the patient presses too often (\"trigger-happy\") → a falsely good field, MD too good.",
      "Fixation losses > 20% with unstable gaze tracking = doubtful reliability; high false negatives = fatigue or inattention, but also common in an already badly damaged field.",
      "Learning effect: a first abnormal field must be confirmed before concluding.",
      "Ptosis, spectacle frame, poor correction or small pupil → artifactual defects (superior, ring-shaped).",
      "Mixing strategies (SITA Standard vs Fast) in a series: progression analysis uninterpretable."
    ],
    pearl: "Attending: \"Superior arcuate defect in the right eye: where do you look on the disc?\" At the inferior pole, especially inferotemporally: notch, hemorrhage, thinned RNFL. If the defect respected the vertical meridian, I would think instead of the chiasm or the retrochiasmal pathways."
  },
  "speculaire": {
    card: {
      lead: "It counts endothelial cells: before surgery (Fuchs), after a graft or an attack.",
      keys: [
        "≈ 3000 cells/mm² young, ≈ 2500 at 70.",
        "Guttae = dark spots in the mosaic: Fuchs dystrophy.",
        "Decompensation usually < 400–500 cells/mm².",
        "CV ↑ and hexagons ↓: stressed endothelium, sometimes before the drop."
      ],
      ask: { q: "Guttae and cataract surgery planned: what do you order?", a: "Specular microscopy, pachymetry and the history of morning vision: low density, a thick cornea or morning edema prompt discussion of combined cataract + DMEK (endothelial keratoplasty) rather than cataract surgery alone." }
    },
    title: "Specular microscopy",
    why: "It counts and describes endothelial cells: it helps decide on and plan surgery in Fuchs patients, and monitors grafts, tubes and implants, and the eye after an angle-closure attack (AAO, Preferred Practice Pattern).",
    how: [
      "Usually a non-contact device: light reflected by the endothelium–aqueous interface outlines the cell mosaic.",
      "Measure centrally (± peripherally or near a tube) and compare the two eyes.",
      "Automatic analysis, to be reviewed: density (ECD, cells/mm²), coefficient of variation of cell size (CV: polymegathism), percentage of hexagonal cells (pleomorphism).",
      "Repeat over time on the same device."
    ],
    normal: [
      "Density ≈ 3000–3500 cells/mm² in young adults, ≈ 2500 around age 60–70 (loss ≈ 0.6%/year).",
      "Regular cells of similar size, mostly hexagonal: CV ≈ 0.30 or less and ≈ 60% hexagons or more (usual landmarks, varying with the device).",
      "No guttae."
    ],
    patho: [
      "Guttae = dark areas (excrescences of Descemet that do not reflect light) → Fuchs dystrophy; when confluent, they make counting difficult.",
      "Low density: a fragile cornea, risk of decompensation after surgery; decompensation generally < 400–500 cells/mm².",
      "↑ CV (unequal sizes) and ↓ hexagonality → stressed endothelium (contact lenses, surgery, high IOP), sometimes before density falls.",
      "↓ density after an angle-closure attack and in angle-closure glaucoma, after repeated surgeries, with a tube too close to the cornea or repeated intracameral implants (AAO, Preferred Practice Pattern caution)."
    ],
    pitfalls: [
      "Automatic counting on a blurred image or one full of guttae: falsely high or low density → check the cells counted.",
      "Edematous cornea: imaging impossible, which does not mean normal.",
      "Measuring only centrally: a tube or a bubble can damage the endothelium peripherally."
    ],
    pearl: "Attending: \"A patient with guttae wants cataract surgery: what do you order?\" Specular microscopy, pachymetry and the history of morning vision: low density, a thick cornea or morning edema prompt discussion of combined cataract + DMEK (endothelial keratoplasty) rather than cataract surgery alone."
  },
});

Object.assign(G.OPH_EN.A.physio, {
  "aqueuse": {
    card: {
      lead: "The ciliary processes secrete aqueous; it leaves through the meshwork. Slowed outflow: IOP rises.",
      keys: [
        "Production ≈ 2.5 µL/min by day, lower at night.",
        "Trabecular pathway: most of the outflow.",
        "Uveoscleral pathway: 5–30% of outflow, ↑ by prostaglandins.",
        "**IOP = (F − U) / C + Pv**, with Pv ≈ 8–10 mmHg."
      ],
      ask: { q: "Why does timolol work poorly at night?", a: "Timolol reduces aqueous production, which is already low during sleep (less sympathetic tone); prostaglandins increase uveoscleral outflow, which works day and night." }
    },
    title: "Aqueous humor: production and drainage",
    intro: "Aqueous humor nourishes the lens and cornea, which have no blood vessels, and maintains the shape of the globe. Intraocular pressure (IOP) depends on the balance between its production and the resistance to its outflow: if outflow is impeded, IOP rises.",
    points: [
      "**Production**: the non-pigmented epithelium of the ciliary processes secretes aqueous by active transport (Na⁺/K⁺-ATPase, carbonic anhydrase) from plasma filtered into the ciliary stroma; ≈ 2.5 µL/min during the day, less at night.",
      "**Pathway**: posterior chamber → pupil → anterior chamber → trabecular meshwork → Schlemm canal → collector channels → aqueous and episcleral veins. In the anterior chamber, vertical convection currents explain the deposit of pigment as a vertical spindle on the endothelium (Krukenberg spindle) in pigment dispersion (pigment released by iris rubbing on the zonules).",
      "**Conventional (trabecular) outflow**: passive and pressure-dependent, it carries most of the outflow. Resistance lies mainly in the juxtacanalicular trabecular meshwork; in open-angle glaucoma, this resistance increases → aqueous drains less well → IOP rises.",
      "**Uveoscleral (unconventional) outflow**: aqueous crosses the ciliary body band and the ciliary muscle toward the suprachoroidal space; 5–30% of outflow, less with age, largely pressure-independent. Prostaglandins (latanoprost) increase it; pilocarpine decreases it by contracting the ciliary muscle.",
      "**Goldmann equation**: IOP = (F − U) / C + Pv. F = production, U = uveoscleral outflow, C = trabecular outflow facility, Pv = episcleral venous pressure. Example: (2.5 − 0.5) / 0.25 + 9 = 17 mmHg.",
      "**Treatment levers**: ↓ F (beta-blockers, carbonic anhydrase inhibitors, alpha-2 agonists); ↑ U (prostaglandins, alpha-2 agonists in part); ↑ C (pilocarpine, SLT = a laser that stimulates the trabecular meshwork, trabecular MIGS = small surgeries on the meshwork and Schlemm canal). Through the trabecular pathway, IOP cannot fall below Pv; filtering surgery (trabeculectomy, tube or subconjunctival implant such as XEN or PreserFlo: a new outflow route to the space under the conjunctiva) bypasses Pv, hence its role when the IOP target is very low."
    ],
    numbers: [
      { label: "Aqueous production", value: "≈ 2–3 µL/min (≈ 2.5 during the day), ↓ at night" },
      { label: "Outflow facility (C)", value: "≈ 0.2–0.3 µL/min/mmHg" },
      { label: "Episcleral venous pressure (Pv)", value: "≈ 8–10 mmHg" },
      { label: "Uveoscleral outflow", value: "5–30% of outflow (↓ with age)" },
      { label: "Anterior / posterior chamber volume", value: "≈ 250 µL / ≈ 60 µL" }
    ],
    pearl: "Attending: \"Why does timolol lower IOP little at night, while prostaglandins remain effective?\" Timolol reduces aqueous production, which is already low during sleep (less sympathetic tone); prostaglandins increase uveoscleral outflow, which works day and night."
  },
  "pio": {
    card: {
      lead: "The only modifiable glaucoma risk factor whose lowering slows the disease. A normal IOP does not rule out glaucoma.",
      keys: [
        "Normal 10–21 mmHg: 21 is a statistical limit, not a threshold.",
        "Varies 2–6 mmHg over 24 h; peak at night or early morning.",
        "Thin or post-LASIK cornea: IOP underestimated; thick cornea: overestimated.",
        "IOP > 21 mmHg without nerve damage = ocular hypertension."
      ],
      ask: { q: "IOP of 23 mmHg with a 600 µm cornea: is it glaucoma?", a: "No: without optic nerve or visual field damage, it is at most ocular hypertension, and the thick cornea probably makes IOP read too high. Overall risk is assessed with the OHTS predictors (age, IOP, corneal thickness, vertical C/D, PSD) rather than by correcting the number." }
    },
    title: "Intraocular pressure (IOP)",
    intro: "IOP is the pressure of the intraocular fluid on the wall of the globe. It is the only modifiable risk factor whose lowering has been proven to slow glaucoma, but a \"normal\" IOP does not rule out glaucoma and an elevated IOP is not glaucoma on its own.",
    points: [
      "**Values**: normal 10–21 mmHg (mean ≈ 15–16). 21 mmHg is a statistical limit (≈ mean + 2 standard deviations), not a danger threshold: there is normal-tension glaucoma (glaucomatous damage with IOP always ≤ 21 mmHg) and ocular hypertension (IOP > 21 mmHg without nerve or field damage).",
      "**Diurnal variation** (over 24 h): 2–6 mmHg in normal subjects, more in glaucoma; the peak often occurs at night or early in the morning, partly because of the supine position (episcleral venous pressure rises). A single clinic reading can miss the peak.",
      "**Measurement and the cornea**: the Goldmann tonometer is calibrated for a cornea of ≈ 520 µm. Thin cornea → the cornea flattens more easily → IOP underestimated; thick cornea → overestimated. Corneal edema or a cornea thinned by LASIK (laser refractive surgery that removes stroma) → underestimated (edema thickens the cornea but softens it). Do not correct mechanically with a formula.",
      "**Corneal hysteresis** (the cornea's ability to dampen a deformation, measured with a dynamic air puff): low hysteresis is associated with a higher risk of glaucoma progression; it is a key factor in the AAO, Preferred Practice Pattern update, useful as an adjunct.",
      "**Ocular perfusion pressure** ≈ blood pressure − IOP. Low blood pressure reduces perfusion of the optic nerve head: a risk factor emphasized by the AAO, Preferred Practice Pattern; nocturnal hypotension (antihypertensive taken in the evening) is also a concern, often raised in normal-tension glaucoma.",
      "**What raises IOP**: supine position, Valsalva, breath-holding, squeezed lids, a tight tie, corticosteroids in \"responders\" (steroid response: IOP rise on corticosteroids, especially topical). Aerobic exercise lowers it transiently."
    ],
    numbers: [
      { label: "Normal IOP", value: "10–21 mmHg (mean ≈ 15–16)" },
      { label: "24-hour variation", value: "2–6 mmHg (more in glaucoma)" },
      { label: "Central corneal thickness", value: "≈ 540–550 µm" },
      { label: "OHTS (Ocular Hypertension Treatment Study): thin cornea", value: "central thickness ≤ 555 µm ≈ 3 × more conversion to glaucoma than > 588 µm" },
      { label: "Floor of the trabecular pathway", value: "Pv ≈ 8–10 mmHg" }
    ],
    pearl: "Attending: \"IOP of 23 mmHg with a 600 µm cornea: is it glaucoma?\" No: without optic nerve or visual field damage, it is at most ocular hypertension, and the thick cornea probably makes IOP read too high. Overall risk is assessed with the OHTS predictors (age, IOP, corneal thickness, vertical C/D, PSD) rather than by correcting the number."
  },
  "film-lacrymal": {
    card: {
      lead: "The tear film smooths the optical surface. If it fails: the vicious circle of dry eye.",
      keys: [
        "Lipids (meibomian glands), muco-aqueous phase, epithelial glycocalyx.",
        "Normal TBUT > 10 s.",
        "Osmolarity ≥ 308 mOsm/L or a difference > 8 between eyes.",
        "Instability → evaporation → hyperosmolarity → inflammation → instability."
      ],
      ask: { q: "Glaucoma patient on 3 drops: burning, fluctuating vision. Why?", a: "Probably ocular surface disease worsened by the preservative in the drops (benzalkonium chloride, BAK): it hurts adherence and skews VA, topography and the visual field. Options: preservative-free drops, fixed combinations (fewer drops), SLT, treatment of meibomian gland dysfunction." }
    },
    title: "Tear film and ocular surface",
    intro: "The tear film smooths the eye's first optical surface, nourishes and protects the corneal epithelium and is renewed with every blink. When its balance breaks down, a vicious circle sets in: this is dry eye disease.",
    points: [
      "**Components**: lipids on the surface (meibomian glands: slow evaporation); muco-aqueous phase (main lacrimal gland and accessory glands: water, electrolytes, antimicrobial proteins such as lysozyme and lactoferrin, MUC5AC mucin from goblet cells); epithelial glycocalyx (MUC1/4/16) that makes the cornea wettable.",
      "**Blinking**: ≈ 15–20 times/min at rest; it spreads the film, expresses meibum and pumps tears toward the lacrimal drainage system. It drops sharply in front of a screen or while reading → ↑ evaporation → end-of-day symptoms.",
      "**Stability**: the film normally breaks up after more than 10 s (TBUT, tear breakup time, measured with fluorescein); the dye-free version (NIBUT, non-invasive breakup time) < 10 s is a sign of dry eye. Schirmer I without anesthesia < 5 mm in 5 min = severe aqueous deficiency.",
      "**Osmolarity**: ≥ 308 mOsm/L in one eye or a difference > 8 mOsm/L between the two eyes = a sign of dry eye (DEWS III). Hyperosmolarity \"dehydrates\" and inflames surface cells.",
      "**Vicious circle**: unstable film → ↑ evaporation → hyperosmolarity → inflammation, goblet cell loss and epithelial damage → an even less stable film. Irritated corneal nerves sustain the pain, sometimes without visible signs (neuropathic pain).",
      "**TFOS DEWS III definition (2025)**: a multifactorial, **symptomatic** disease, with loss of homeostasis of the tear film and/or ocular surface; tear film instability and hyperosmolarity, surface inflammation and damage, and neurosensory abnormalities are its drivers. Screening: OSDI-6 questionnaire (Ocular Surface Disease Index, 6-question version) ≥ 4, then at least one sign (NIBUT, osmolarity or staining)."
    ],
    numbers: [
      { label: "Normal TBUT", value: "> 10 s" },
      { label: "Osmolarity (DEWS III threshold)", value: "≥ 308 mOsm/L or difference > 8 mOsm/L" },
      { label: "Schirmer I without anesthesia", value: "< 5 mm/5 min = severe aqueous deficiency" },
      { label: "Staining (DEWS III thresholds)", value: "> 5 corneal spots (fluorescein) or > 9 conjunctival spots (lissamine)" },
      { label: "Blinking at rest", value: "≈ 15–20 times/min" }
    ],
    pearl: "Attending: \"Your glaucoma patient on 3 drops complains of burning and fluctuating vision: what do you think?\" Probably ocular surface disease worsened by the preservative in the drops (benzalkonium chloride, BAK): it hurts adherence and skews VA, topography and the visual field. Options: preservative-free drops, fixed combinations (fewer drops), SLT, treatment of meibomian gland dysfunction."
  },
});
Object.assign(G.OPH_EN.A.physio, {
  "transparence": {
    card: {
      lead: "Regular collagen and a dehydrating endothelium keep the cornea clear. Otherwise it swells and greys.",
      keys: [
        "“Pump-leak” endothelium: stroma at ≈ 78% water.",
        "Stromal edema: thickened, grayish cornea, Descemet folds.",
        "Epithelial edema: bullae, colored halos.",
        "IOP nearing 50–60 mmHg (angle-closure attack): hazy epithelium, healthy endothelium."
      ],
      ask: { q: "Angle-closure attack: why does the cornea fog up?", a: "Because IOP exceeds the stromal swelling pressure: water is pushed forward and the epithelium becomes edematous (colored halos). The cornea clears when IOP is lowered; specular microscopy afterward is useful, because the attack causes endothelial cell loss." }
    },
    title: "Corneal transparency",
    intro: "The cornea is transparent because its collagen fibers are arranged with perfect regularity and because the endothelium keeps it permanently dehydrated (corneal deturgescence). If either mechanism weakens, the cornea swells and turns grayish.",
    points: [
      "**Architecture**: fine collagen fibrils (≈ 30 nm), of uniform diameter and regularly spaced, at a distance smaller than the wavelength of light → light scattered by each fibril cancels out by interference → light passes through. Added to this: no vessels, unmyelinated nerves and a regular epithelium.",
      "**Deturgescence (pump-leak)**: the stroma attracts water (proteoglycans, swelling pressure ≈ 50–60 mmHg). The endothelium lets a little aqueous in (a deliberately \"leaky\" barrier that nourishes the cornea) and actively pumps the excess back into the anterior chamber (Na⁺/K⁺-ATPase, bicarbonate transport) → stroma stable at ≈ 78% water.",
      "**Stromal edema**: the endothelium fails (Fuchs dystrophy = an inherited endothelial disease with guttae; surgical trauma; graft rejection) → water accumulates between the fibrils → spacing becomes irregular → a thickened, grayish cornea, Descemet folds. Vision drops moderately.",
      "**Epithelial edema**: water passes through to the epithelium (microcysts, bullae) → irregular surface → marked vision loss, colored halos around lights; if a bulla ruptures, pain (bullous keratopathy). The epithelium swells when IOP exceeds the stromal swelling pressure: water is pushed forward.",
      "**Acute angle-closure attack**: very high IOP (often > 40 mmHg, sometimes 60–80) → when it approaches or exceeds the stromal swelling pressure (≈ 50–60 mmHg), water is pushed toward the epithelium → epithelial edema even if the endothelium is healthy → a \"steamy\" cornea and halos. The edema regresses when IOP falls; conversely, in a patient with a fragile endothelium, lowering IOP helps the cornea dehydrate.",
      "**Fuchs in the morning**: lids closed at night → no evaporation → tears become less concentrated and the cornea swells → vision worse on waking, improving over the day. Hypertonic saline drops or ointments draw water out of the epithelium (supportive treatment); endothelial keratoplasty (DMEK, DSAEK) replaces the diseased endothelium."
    ],
    numbers: [
      { label: "Water in the stroma", value: "≈ 78%" },
      { label: "Normal central thickness", value: "≈ 540–550 µm" },
      { label: "Endothelial density (young adult)", value: "≈ 3000–3500 cells/mm²" },
      { label: "Decompensation threshold", value: "generally < 400–500 cells/mm²" },
      { label: "Stromal swelling pressure", value: "≈ 50–60 mmHg" }
    ],
    pearl: "Attending: \"Why is the cornea steamy in an acute angle-closure attack when the endothelium is healthy?\" Because IOP exceeds the stromal swelling pressure: water is pushed forward and the epithelium becomes edematous (colored halos). The cornea clears when IOP is lowered; specular microscopy afterward is useful, because the attack causes endothelial cell loss."
  },
  "refraction": {
    card: {
      lead: "The eye (≈ 60 D) must focus the image on the retina. A refractive error occurs when its length does not match its power.",
      keys: [
        "Cornea ≈ 43 D (≈ 2/3 of the total); lens ≈ 20 D.",
        "Myope: eye too long (or too strong), blurred distance vision, minus lens.",
        "Hyperope: short eye, shallow chamber, **risk of angle closure**.",
        "Pinhole: improved VA = optical cause; otherwise macula, nerve."
      ],
      ask: { q: "A 65-year-old woman, hyperopic at +4 D, saw very well at distance when young: why examine her angle?", a: "Her short eye has a shallow anterior chamber, and her lens, thickened with age, pushes the iris forward: risk of angle closure. Van Herick then gonioscopy before dilating her; if the angle is narrow, discuss LPI or lens extraction." }
    },
    title: "Refraction and the optics of the eye",
    intro: "The eye is an optical system of ≈ 60 D that must focus the image exactly on the retina. A refractive error occurs when the length of the eye does not match its optical power.",
    points: [
      "**Powers**: cornea ≈ 43 D (≈ 2/3 of the total), because the index jump between air (1.000) and cornea (≈ 1.376) is the largest in the eye; lens ≈ 20 D, variable through accommodation. One diopter = 1 / focal length in meters.",
      "**Myopia**: an eye too long or too powerful → image in front of the retina → blurred distance vision; corrected with a concave (minus) lens. High myopes have a tilted disc and peripapillary atrophy that complicate the diagnosis of glaucoma (falsely \"red\" OCT). Pigment dispersion mainly affects young myopes.",
      "**Hyperopia**: an eye too short → image behind the retina; young people compensate by accommodating (latent hyperopia), hence often good vision before age 40; corrected with a convex (plus) lens. **Risk of angle closure**: short eye → small anterior segment and shallow chamber → the lens, which thickens with age, pushes the iris forward and presses on it at the pupil (pupillary block) → the peripheral iris bows forward and closes the angle.",
      "**Astigmatism**: the cornea (or lens) does not have the same curvature in all meridians → two foci. Regular: perpendicular meridians, corrected with glasses; with-the-rule (vertical meridian steeper, common in the young) or against-the-rule (horizontal steeper, more common with age). Irregular (keratoconus, scar): poorly corrected by glasses → a rigid lens, which creates a new smooth surface.",
      "**Presbyopia**: the lens loses its flexibility → accommodation decreases → near vision becomes blurred around age 40–45 → a near add (reading glasses, progressive lenses).",
      "**Pinhole**: it lets only central rays through, which barely need to be refracted → blur from a refractive error decreases. VA improved = optical cause (refraction, irregular cornea); not improved = look at the macula, optic nerve or a dense opacity. A nuclear cataract makes the eye more myopic: the presbyope sometimes reads again without glasses (\"second sight\")."
    ],
    numbers: [
      { label: "Total power of the eye", value: "≈ 60 D" },
      { label: "Cornea", value: "≈ 43 D (≈ 2/3 of the total)" },
      { label: "Lens", value: "≈ 20 D" },
      { label: "Mean axial length (adult)", value: "≈ 23–24 mm" },
      { label: "Onset of presbyopia", value: "≈ 40–45 years" }
    ],
    pearl: "Attending: \"A 65-year-old woman, hyperopic at +4 D, saw very well at distance when young: why examine her angle?\" Her short eye has a shallow anterior chamber, and her lens, thickened with age, pushes the iris forward: risk of angle closure. Van Herick then gonioscopy before dilating her; if the angle is narrow, discuss LPI or lens extraction."
  },
  "pupille": {
    card: {
      lead: "The pupillary light reflex compares the light carried by each optic nerve. It separates an afferent lesion (retina, nerve) from an efferent one (CN III, sympathetic, iris).",
      keys: [
        "Each pretectal nucleus drives both pupils: direct and consensual reflexes.",
        "**RAPD**: both pupils dilate when the affected eye is lit.",
        "Requires asymmetric damage; an RAPD causes no anisocoria.",
        "Anisocoria worse in the dark: Horner; in light: CN III, Adie."
      ],
      ask: { q: "Your patient has a right RAPD: which pupil is larger?", a: "Neither: the pupils stay equal, because each pretectal nucleus drives both Edinger-Westphal nuclei. An associated anisocoria indicates a second problem (efferent or iris); an RAPD points to the optic nerve or a severely damaged retina, never to a cataract or a refractive error." }
    },
    title: "Pupillary light reflex and RAPD",
    intro: "The pupillary light reflex compares the light information transmitted by each optic nerve. It distinguishes damage to the afferent pathway (retina, optic nerve) from damage to the efferent pathway (CN III, sympathetic, iris).",
    points: [
      "**Afferent pathway**: retina (ganglion cells, some of them light-sensitive through melanopsin) → optic nerve → chiasm (nasal fibers cross) → optic tract → pupillary fibers leave the visual pathway before the lateral geniculate body → pretectal nuclei of the midbrain.",
      "**Double crossing**: each pretectal nucleus sends fibers to **both** Edinger-Westphal nuclei. Light in one eye therefore constricts both pupils equally: direct reflex (lit eye) and consensual reflex (other eye).",
      "**Parasympathetic efferent pathway (constriction)**: Edinger-Westphal nucleus → CN III (pupillary fibers on the surface of the nerve, hence a dilated pupil when an aneurysm compresses CN III) → ciliary ganglion (synapse) → short ciliary nerves → iris sphincter (and ciliary muscle for accommodation).",
      "**Sympathetic pathway (dilation)**: 3 neurons: hypothalamus → spinal cord (C8–T2) → superior cervical ganglion (the second-order neuron passes over the lung apex) → along the internal carotid → nasociliary nerve → long ciliary nerves → iris dilator; other third-order fibers reach Müller muscle (lid). Damage gives Horner syndrome: small pupil, mild ptosis, anhidrosis depending on the level; a recent painful Horner requires ruling out carotid dissection (urgent imaging).",
      "**RAPD (relative afferent pupillary defect)**: one optic nerve transmits less light than the other (asymmetric glaucoma, optic neuritis, ischemic or compressive neuropathy, large retinal detachment) → when the light moves from the good eye to the affected eye, the total signal drops → **both** pupils dilate. Asymmetric damage is required: symmetric glaucoma does not cause one.",
      "**Why there is no anisocoria**: since both Edinger-Westphal nuclei receive the same signal from both eyes, the constriction command is identical for both pupils, even if one optic nerve is destroyed. Anisocoria therefore indicates an efferent or iris problem: greater in the dark → the small pupil is abnormal (Horner); greater in the light → the large one is abnormal (CN III, Adie pupil, mydriatic, sphincter damaged after an angle-closure attack)."
    ],
    numbers: [
      { label: "Pupil size", value: "≈ 2–4 mm in light; ≈ 4–8 mm in the dark" },
      { label: "Physiologic anisocoria", value: "≤ 1 mm, in ≈ 20% of people" },
      { label: "Sympathetic pathway", value: "3 neurons (C8–T2 relay, then superior cervical ganglion)" },
      { label: "Parasympathetic pathway", value: "synapse in the ciliary ganglion" }
    ],
    pearl: "Attending: \"Your patient has a right RAPD: which pupil is larger?\" Neither: the pupils stay equal, because each pretectal nucleus drives both Edinger-Westphal nuclei. An associated anisocoria indicates a second problem (efferent or iris); an RAPD points to the optic nerve or a severely damaged retina, never to a cataract or a refractive error."
  },
});

// ---- Interactive anatomy (object-shaped: G.OPH.A.anatomy / cornea / angle / disc / annexes) ----
// src/i18n.js deep-merges these objects (k === 'A', object sub-keys → I18N._merge). Each entry {t, en, d, c}:
// in English, t becomes the English term and en is blanked (it would only repeat t in the explorer's info panel).
G.OPH_EN.A.cornea = Object.assign(G.OPH_EN.A.cornea || {}, {
  "film": { t: "Tear film", en: "", d: "Thin layer (≈ 3 µm) covering the epithelium and forming the eye's first optical surface. Three components: lipids on the surface (meibomian glands, slow evaporation), a muco-aqueous phase (main lacrimal gland and the accessory glands of Krause and Wolfring; MUC5AC mucin from goblet cells) and the epithelial glycocalyx (membrane mucins MUC1/4/16), which makes the cornea wettable. It normally breaks up after more than 10 s (TBUT, tear breakup time).", c: "An unstable film gives vision that fluctuates with blinking and skews keratometry, topography and biometry. The surface is therefore treated (artificial tears, meibomian gland dysfunction) before measuring: before cataract surgery or to follow a keratoconus (a cornea that thins and bulges into a cone)." },
  "epithelium": { t: "Epithelium", en: "", d: "Non-keratinized stratified squamous epithelium of ≈ 50 µm (5–7 cell layers), entirely renewed in ≈ 7 days from limbal stem cells. Its tight junctions make it a barrier against water and microbes; its basement membrane and hemidesmosomes anchor it to Bowman layer.", c: "It heals quickly and without a trace: an abrasion (traumatic loss of epithelium) closes in 24–72 h and stains with fluorescein. When poorly anchored (basement membrane dystrophy, an old fingernail scratch), it peels off on waking: recurrent erosion (sharp pain on opening the eyes). If it swells (microcysts, bullae), water is crossing the cornea: very high IOP (angle-closure attack) or a failing endothelium." },
  "bowman": { t: "Bowman layer", en: "", d: "Acellular 8–12 µm layer of packed collagen fibrils, just beneath the epithelial basement membrane. It does not regenerate: once breached, it is replaced by scar tissue.", c: "A lesion limited to the epithelium heals without a trace; a lesion that breaches Bowman (infectious ulcer, deep foreign body, surface surgery) leaves a permanent opacity (nebula or leukoma depending on its density). When central, it reduces visual acuity (VA): one reason to treat bacterial keratitis quickly, before the ulcer deepens." },
  "stroma": { t: "Stroma", en: "", d: "≈ 90% of corneal thickness (≈ 450–500 µm): type I collagen fibrils of uniform diameter, arranged in very regular parallel lamellae, between which the keratocytes live; ≈ 78% water. Transparency depends on this regular spacing, maintained by proteoglycans and by the endothelium, which pumps water out of the stroma.", c: "If it takes on water (stromal edema), the spacing becomes irregular → light scatters → a thickened, grayish cornea. It heals in a disorganized way (opacity). It is the layer infiltrated in keratitis, thinned in keratoconus and reinforced by cross-linking (CXL: riboflavin + UVA, which create bonds between collagen fibers to slow ectasia, i.e. progressive bulging)." },
  "dua": { t: "Dua layer (pre-Descemet layer)", en: "", d: "Very strong acellular layer of ≈ 10–15 µm, between the posterior stroma and Descemet membrane, described in 2013. It resists air injected under pressure, which distinguishes it from the stroma.", c: "In DALK (deep anterior lamellar keratoplasty: the diseased stroma is replaced, for example in keratoconus, while keeping the patient's Descemet and endothelium, hence no risk of endothelial rejection), the surgeon injects a big air bubble that separates the stroma at the plane of this layer." },
  "descemet": { t: "Descemet membrane", en: "", d: "Elastic basement membrane of the endothelium that thickens throughout life (≈ 3 µm at birth → 10–15 µm in adults). Once detached, it curls up on itself: this is the \"scroll\" of a DMEK graft.", c: "Descemet folds (striae) = edematous stroma or a hypotonous eye (IOP too low, e.g. after filtering surgery). Breaks: Haab striae in congenital glaucoma (cornea stretched by IOP), acute hydrops in keratoconus (water suddenly enters the stroma). Guttae = excrescences of Descemet secreted by a diseased endothelium (Fuchs dystrophy). DMEK (endothelial keratoplasty that replaces only Descemet + endothelium) treats Fuchs dystrophy and other endothelial failures." },
  "endothelium": { t: "Endothelium", en: "", d: "Monolayer of hexagonal cells (≈ 5 µm) lining the posterior surface of the cornea that does not divide in humans. Density ≈ 3000–3500 cells/mm² in young adults, ≈ 2500 around age 60–70 (loss ≈ 0.6%/year); when a cell dies, its neighbors spread out to cover the gap. It keeps the cornea dehydrated (deturgescence) through its barrier and its Na⁺/K⁺-ATPase pump.", c: "Below ≈ 400–500 cells/mm², the pump can no longer keep up: stromal then epithelial edema (decompensation). In Fuchs dystrophy (an inherited endothelial disease with guttae and progressive cell loss), vision is worse on waking: lids closed → no evaporation → the cornea swells overnight. Repeated surgeries, an angle-closure attack, a drainage tube too close to the cornea or repeated intracameral implants (sustained-release drug in the anterior chamber) can also exhaust it: it is measured by specular microscopy." }
});

G.OPH_EN.A.angle = Object.assign(G.OPH_EN.A.angle || {}, {
  "iris-racine": { t: "Iris root", en: "", d: "The most posterior structure of the angle: the insertion of the iris on the ciliary body. It does not filter anything, but its position and profile (flat, bowed, concave, plateau) determine whether the angle is open.", c: "Bowed profile = pupillary block; concave = pigment dispersion (the hollowed iris rubs on the zonules and loses its pigment); plateau = root lifted by the ciliary processes. Iris processes (fine, normal lacework) must not be confused with peripheral anterior synechiae (PAS: broad, permanent adhesions of the iris to the angle that persist on indentation)." },
  "bande-ciliaire": { t: "Ciliary body band", en: "", d: "Gray-brown band between the iris root and the scleral spur: the anterior face of the ciliary muscle. Seeing it means a wide-open angle (Shaffer 4, ≈ 35–45°); aqueous in the uveoscleral pathway passes between its fibers.", c: "An abnormally wide ciliary body band, especially compared with the fellow eye, with torn iris processes = angle recession (a tear in the ciliary muscle after a blow): glaucoma can appear years later, hence lifelong follow-up. A dark cleft between the ciliary body band and the sclera = cyclodialysis (ciliary body detached from the spur → very low IOP)." },
  "eperon": { t: "Scleral spur", en: "", d: "White line between the ciliary body band and the pigmented trabecular meshwork: a projection of sclera where the longitudinal ciliary muscle inserts. A key landmark: if the spur is visible, the angle is open in that quadrant (Shaffer ≥ 3, ≈ 20–35° or more).", c: "Pilocarpine contracts the ciliary muscle, which pulls on the spur and opens the meshes of the trabecular meshwork (↑ outflow). Vessels that cross the spur and arborize over the trabecular meshwork = angle new vessels (NVA, abnormal vessels driven by retinal ischemia): an emergency. On AS-OCT (anterior segment tomography), the spur is the reference point for measuring angle opening." },
  "trab-pig": { t: "Pigmented (posterior) trabecular meshwork", en: "", d: "Brownish band just anterior to the spur, lying over Schlemm canal: the part that actually filters aqueous. Its pigment increases with age and predominates inferiorly.", c: "Dense, homogeneous 360° pigment = pigment dispersion (pigment rubbed off the iris against the zonules); irregular, patchy pigment = pseudoexfoliation (age-related fibrillar deposits that also clog the meshwork). It is the target of SLT (selective laser trabeculoplasty): the more pigmented it is, the more energy it absorbs, so the energy is reduced to avoid an IOP spike after the laser." },
  "trab-nonpig": { t: "Non-pigmented (anterior) trabecular meshwork", en: "", d: "Whitish, translucent band between the pigmented trabecular meshwork and Schwalbe line. It filters little; if the trabecular meshwork is the most posterior visible structure (spur hidden), the angle is narrow (Shaffer 2, ≈ 20°).", c: "In young patients, the lightly pigmented angle makes the meshwork hard to locate: first find Schwalbe line with the corneal wedge technique, then move down. If the spur stays hidden in several quadrants: a narrow angle at risk of closure; indent to look for PAS." },
  "schwalbe": { t: "Schwalbe line", en: "", d: "The most anterior structure of the angle: a fine white ridge marking the end of Descemet membrane. It is found where the two slit reflections (anterior and posterior corneal surfaces) meet; seeing only it = Shaffer 1 (≤ 10°).", c: "Pigment deposited on or anterior to Schwalbe = Sampaolesi line, typical of pseudoexfoliation. A thickened, anteriorly displaced Schwalbe line visible at the slit lamp = posterior embryotoxon (often a normal variant; with iris adhesions = Axenfeld-Rieger syndrome, at risk of glaucoma). PAS reaching up to Schwalbe = complete, permanent closure of that sector." },
  "schlemm": { t: "Schlemm canal", en: "", d: "Normally invisible, behind the pigmented trabecular meshwork; it collects the filtered aqueous and drains it through the collector channels into the episcleral veins. It appears as a pink or red band when blood refluxes into it.", c: "Blood reflux = most often pressure from the lens on the episcleral veins, otherwise low IOP or elevated episcleral venous pressure. It is the target of MIGS (minimally invasive glaucoma surgeries from inside the eye: trabecular stent, goniotomy, trabeculotomy), which bypass the resistance of the trabecular meshwork." }
});

G.OPH_EN.A.disc = Object.assign(G.OPH_EN.A.disc || {}, {
  "rim": { t: "Neuroretinal rim", en: "", d: "Pink-orange tissue between the disc margin and the edge of the cup: the ganglion cell axons diving into the optic nerve. Normally it is thickest inferiorly, then superiorly, nasally and temporally: the ISNT rule (Inferior ≥ Superior ≥ Nasal ≥ Temporal), useful but imperfect, since many normal eyes do not follow it.", c: "Glaucoma thins the rim first at the poles (inferotemporal, then superotemporal, where the lamina cribrosa is weakest): a localized thinning is called a notch and breaks the ISNT rule; at an advanced stage, the rim disappears all the way around. The remaining rim keeps its pink color: a pale rim (pallor > cupping) points to a non-glaucomatous neuropathy (compression, ischemia)." },
  "cup": { t: "Cup", en: "", d: "Central depression of the disc, devoid of axons; its height is compared with that of the disc: the vertical cup-to-disc ratio (C/D). Its size follows that of the disc: for the same number of axons, a large disc has a large cup. It is outlined by the bend of the small vessels at its edge (contour), not by the pale area, which is often smaller.", c: "Suspicious: vertical C/D > 0.6 or an asymmetry ≥ 0.2 between the two eyes, interpreted according to disc size. Glaucomatous signs: a cup that elongates vertically (loss at the poles), that deepens until the lamina cribrosa pores show, or that enlarges from one visit to the next; a documented change (photos, OCT) is worth more than an isolated measurement." },
  "vessels": { t: "Optic disc vessels", en: "", d: "The central retinal artery and vein emerge on the nasal side of the cup, run along the edge of the rim and then divide into superior and inferior arcades. Normally they cross the rim without an abrupt bend.", c: "Glaucomatous signs: nasalized vessels (pushed nasally by the enlarging cup); bayoneting (the vessel dives steeply into a deep cup and then turns at a right angle); a bared circumlinear vessel (it runs along a vanished rim). A Drance disc hemorrhage (a small flame-shaped hemorrhage crossing the disc margin, often inferotemporal) signals active axonal loss and an increased risk of progression (AAO, Preferred Practice Pattern); more common in normal-tension glaucoma (glaucomatous damage with IOP always ≤ 21 mmHg), it disappears within a few weeks to a few months, hence looking for it at every visit." },
  "ppa": { t: "Peripapillary atrophy", en: "", d: "Pale crescent around the disc, in two zones. Alpha zone, peripherally: irregular pigmentation, common in normal subjects. Beta zone, against the disc margin: sclera and large choroidal vessels visible, because the pigment epithelium and choriocapillaris have disappeared.", c: "The beta zone is more frequent and wider in glaucoma; it often lies opposite the thinned rim and is associated with progression. In high myopes, the tilted disc and the large peripapillary crescent (different from the beta zone) make the exam and OCT misleading (false positives, \"red disease\")." },
  "lame-criblee": { t: "Lamina cribrosa", en: "", d: "At the floor of a wide, deep cup, its pores appear as gray dots (laminar dot sign). Normally it is barely visible, hidden by the rim and supporting tissue.", c: "Visible, vertically elongated pores indicate that the axons covering it have disappeared and that the lamina has bowed backward (glaucomatous remodeling). The sign is not specific (a large physiologic disc): it prompts confirmation with OCT and the visual field." },
  "rnfl": { t: "Retinal nerve fiber layer (RNFL)", en: "", d: "Ganglion cell axons on their way to the disc, visible as bright striations in red-free light (green filter). Temporal fibers arc around the macula and meet, without crossing, at the horizontal raphe; the thickest bundles arrive at the inferotemporal and superotemporal poles (\"double-hump\" curve on OCT). Average peripapillary thickness ≈ 90–100 µm in adults (varies with the device).", c: "Wedge defect: a dark arcuate band starting at the disc, often inferotemporal, wider than a vessel, reflecting the loss of a bundle of axons. Because the fibers do not cross the raphe, the corresponding field defect stops sharply at the horizontal meridian (nasal step) and lies in the opposite hemifield: inferior RNFL damage = superior arcuate field defect." }
});

G.OPH_EN.A.annexes = Object.assign(G.OPH_EN.A.annexes || {}, {
  "glande-lacrymale": { t: "Main lacrimal gland", en: "", d: "Serous gland in the superotemporal orbit, divided into orbital and palpebral lobes by the levator aponeurosis; its ducts open into the superotemporal fornix. With the accessory glands of Krause and Wolfring (in the conjunctiva), it produces the aqueous phase, basal and reflex. Parasympathetic control via the facial nerve (CN VII) and the pterygopalatine ganglion.", c: "Aqueous deficiency, less common than meibomian gland dysfunction, suggests Sjögren syndrome (an autoimmune disease of the lacrimal and salivary glands: dry eyes and mouth) or anticholinergic drugs. Schirmer I without anesthesia < 5 mm in 5 min = severe aqueous deficiency. A dry eye can paradoxically tear: the irritated surface triggers reflex tearing." },
  "meibomius": { t: "Meibomian glands", en: "", d: "Vertical sebaceous glands embedded in the tarsal plates (more numerous above than below), opening at the lid margin behind the lashes. Their lipid secretion (meibum) forms the superficial layer of the tear film: it slows evaporation and stabilizes the film.", c: "Meibomian gland dysfunction (MGD: plugged orifices, thick secretions, lid margin telangiectasias, often with rosacea) is the most common cause of dry eye: fewer lipids → ↑ evaporation → an unstable, hyperosmolar film → irritation and inflammation. It is treated with warm compresses, massage and lid hygiene, sometimes oral doxycycline; a chalazion is a plugged gland that has become a granuloma. Chronic glaucoma drops, especially preserved ones, often make it worse." },
  "caliciformes": { t: "Goblet cells", en: "", d: "Secretory cells of the conjunctival epithelium, densest in the fornices and nasally. They release the gel-forming mucin MUC5AC, which spreads and holds the aqueous phase; the epithelium also bears a glycocalyx (membrane mucins MUC1/4/16) that makes the surface wettable.", c: "They disappear after a chemical burn, Stevens-Johnson syndrome (a severe drug reaction of skin and mucous membranes), mucous membrane pemphigoid (a scarring autoimmune disease) or vitamin A deficiency. The BAK preservative in drops is also toxic to them. Less mucin → the film no longer adheres to the cornea → short TBUT, even if aqueous production (Schirmer) is normal." },
  "points-lacrymaux": { t: "Lacrimal puncta", en: "", d: "Two small openings (≈ 0.3 mm) at the apex of the lacrimal papillae, on the medial lid margin of the upper and lower lids. Normally turned toward the globe, they dip into the tear lake and draw tears in with each blink.", c: "Punctal plugs (small plugs that close the puncta) keep tears on the eye longer in aqueous deficiency. Pressing on the punctum or closing the eyes for a few minutes after a drop (punctal occlusion) reduces systemic absorption and prolongs the local effect; the AAO, Preferred Practice Pattern recommends it for pregnant or breastfeeding women on glaucoma drops. An everted punctum (ectropion: a lid turned outward) causes tearing." },
  "canalicules": { t: "Lacrimal canaliculi", en: "", d: "Small ducts (≈ 2 mm vertical, then ≈ 8 mm horizontal) that run from each punctum and usually join into a common canaliculus before entering the lacrimal sac. With each blink, the orbicularis muscle creates a lacrimal pump that propels the tears.", c: "Canaliculitis (a chronic infection, often with Actinomyces: a red, pouting punctum, yellowish concretions on expression) mimics a chronic unilateral conjunctivitis that does not heal with drops; a punctal plug that has migrated into the canaliculus can be the cause. A medial lid laceration that cuts a canaliculus is repaired with silicone intubation." },
  "sac-lacrymal": { t: "Lacrimal sac", en: "", d: "A reservoir of ≈ 12–15 mm lying in the lacrimal fossa, between the anterior and posterior lacrimal crests, under the medial canthal tendon. It collects tears from the canaliculi and empties into the nasolacrimal duct.", c: "A downstream obstruction lets the sac fill up and become infected (dacryocystitis: a painful swelling below the medial canthus). Pressure on the sac that refluxes pus through the puncta indicates chronic dacryocystitis, a reservoir of bacteria (e.g. pneumococcus): it is treated, often with dacryocystorhinostomy (DCR: a new route between the sac and the nose), before any intraocular surgery or corneal graft, because of the risk of keratitis and endophthalmitis." },
  "canal-lacrymonasal": { t: "Nasolacrimal duct", en: "", d: "Bony and membranous duct (≈ 12–18 mm) that descends from the lacrimal sac to the inferior meatus of the nose, under the inferior turbinate, where it ends at the valve of Hasner. Its congenital obstruction (imperforate valve) is common in infants and often resolves on its own; acquired obstruction mainly affects older women.", c: "A drop that runs down this duct is absorbed by the nasal mucosa and enters the circulation without first being broken down by the liver, like a small intravenous injection. That is why topical timolol can cause bradycardia, bronchospasm or fatigue: ask about asthma, COPD (chronic obstructive pulmonary disease) and bradycardia before prescribing it, and teach punctal occlusion." }
});

G.OPH_EN.A.anatomy = Object.assign(G.OPH_EN.A.anatomy || {}, {
  "cornee": { t: "Cornea", en: "", d: "Transparent, avascular front window of the eye, providing ≈ 2/3 of its optical power (≈ 43 diopters [D] out of ≈ 60 D). Central thickness ≈ 540–550 µm (periphery ≈ 650–700 µm), horizontal diameter ≈ 11.5–12 mm. Innervated by V1, the ophthalmic branch of the trigeminal nerve (nasociliary nerve → long ciliary nerves), it is the most densely innervated tissue in the body.", c: "A hypoesthetic cornea (decreased sensation on cotton-wisp testing) points to herpetic keratitis (herpes simplex or herpes zoster ophthalmicus) or neurotrophic keratitis (an ulcer that heals poorly for lack of innervation). Conversely, pain out of proportion to the signs in a contact lens wearer suggests Acanthamoeba (an ameba that infects the cornea)." },
  "limbe": { t: "Limbus", en: "", d: "1–2 mm transition zone between the cornea, sclera and conjunctiva. It houses the corneal epithelial stem cells (in the palisades of Vogt) and overlies the angle, the trabecular meshwork and Schlemm canal.", c: "A chemical burn that blanches the limbus (ischemia) destroys these stem cells: the corneal epithelium is no longer renewed, then the conjunctiva and vessels invade the cornea (limbal stem cell deficiency). That is why the extent of limbal ischemia is measured to grade the severity of a burn." },
  "sclere": { t: "Sclera", en: "", d: "White, opaque shell of disorganized collagen, continuous with the cornea at the limbus and with the dura of the optic nerve posteriorly. Thickness ≈ 1 mm at the posterior pole, ≈ 0.3 mm just behind the rectus muscle insertions.", c: "Posteriorly, the sclera becomes the lamina cribrosa, a sieve through which the optic nerve axons pass: the weak point where an elevated intraocular pressure (IOP) deforms them. Anteriorly, the surgeon cuts the trabeculectomy flap into it (a covered fistula that lets aqueous humor out under the conjunctiva); the tension of the flap sutures regulates the flow." },
  "conjonctive": { t: "Conjunctiva", en: "", d: "Transparent mucous membrane lining the inside of the lids (tarsal conjunctiva), the fornices and the sclera (bulbar conjunctiva) up to the limbus. Its non-keratinized epithelium contains goblet cells (tear film mucus); its stroma is vascularized and rich in immune cells.", c: "A trabeculectomy creates a filtering bleb (a reservoir of aqueous humor under the conjunctiva) that fails if the conjunctiva scars too much. Years of preserved drops (benzalkonium chloride, BAK) inflame the conjunctiva → more fibrosis → a less durable bleb." },
  "chambre-anterieure": { t: "Anterior chamber", en: "", d: "Space between the corneal endothelium and the iris/lens, filled with aqueous humor (≈ 250 µL). Its central depth (≈ 3 mm) decreases in hyperopes (short eye) and with age (the lens thickens).", c: "Look here for cells and flare (proteins that scatter light: inflammation), a hypopyon (a level of white blood cells: severe keratitis, endophthalmitis = infection inside the eye) and shallow depth (risk of angle closure: the iris comes to block the trabecular meshwork). After a trabeculectomy, a flat chamber suggests overfiltration (too much aqueous drained through the bleb), a bleb leak or aqueous misdirection (aqueous diverted into the vitreous)." },
  "angle": { t: "Iridocorneal angle", en: "", d: "Peripheral recess of the anterior chamber, between the cornea and the iris root, where aqueous humor leaves the eye through the trabecular meshwork. It cannot be seen directly (light coming from it undergoes total internal reflection at the corneal surface, at the tear–air interface): a gonioscopy lens, which eliminates this interface, is needed.", c: "Open-angle glaucoma (a progressive optic neuropathy, often IOP-related, in which the angle is open but filters poorly) is diagnosed only after gonioscopy, to rule out a closed angle or a secondary cause: pseudoexfoliation (age-related whitish fibrillar deposits), angle recession (a tear in the ciliary body after a blow) or angle new vessels (abnormal vessels driven by retinal ischemia)." },
  "trabeculum": { t: "Trabecular meshwork", en: "", d: "Spongy filter of collagen lamellae lined by trabecular cells, in three layers: uveal, corneoscleral and juxtacanalicular. The juxtacanalicular layer, adjacent to the inner wall of Schlemm canal, provides most of the outflow resistance; this conventional pathway drains ≈ 70–95% of aqueous humor.", c: "It is the target of pilocarpine (which pulls on the scleral spur and opens the meshes), SLT (selective laser trabeculoplasty, which stimulates the meshwork) and trabecular MIGS (small implants or incisions that bypass the resistance). It becomes clogged with pigment or pseudoexfoliation material → ↑ resistance → ↑ IOP: secondary open-angle glaucomas." },
  "schlemm": { t: "Schlemm canal", en: "", d: "Endothelium-lined circular canal (≈ 36 mm in circumference), located behind the pigmented trabecular meshwork, just anterior to the scleral spur. It drains through ≈ 25–35 collector channels into the aqueous and then episcleral veins, whose pressure (≈ 8–10 mmHg) sets a floor for IOP.", c: "Blood in the canal on gonioscopy often comes from lens pressure on the episcleral veins (reflux), but can signal elevated episcleral venous pressure: carotid-cavernous fistula (an abnormal communication between the carotid and the cavernous sinus) or Sturge-Weber syndrome (a congenital facial angioma). Canal-based MIGS (minimally invasive surgeries: stent, dilation or opening of the canal) act here." },
  "iris": { t: "Iris", en: "", d: "Colored diaphragm made of a stroma, two muscles (sphincter: parasympathetic; dilator: sympathetic) and a posterior pigment epithelium. Its very thin root inserts on the ciliary body: it is the root that comes to close the angle.", c: "An iris bowed forward suggests pupillary block (aqueous passes poorly between iris and lens and pushes the iris). Radial midperipheral transillumination defects suggest pigment dispersion (the iris rubs on the zonules and loses its pigment); new vessels at the pupillary margin = rubeosis (neovascularization from retinal ischemia)." },
  "pupille": { t: "Pupil", en: "", d: "Central opening of the iris (≈ 2–4 mm in light, wider in the dark and in young people). The sphincter, driven by the parasympathetic system (CN III, ciliary ganglion), constricts it; the dilator, driven by the sympathetic system, enlarges it.", c: "Mid-dilated pupil (moderately dilated, ≈ 4–6 mm), oval and poorly reactive + painful red eye + edematous cornea = acute angle-closure attack (the very high IOP makes the sphincter ischemic). In mid-dilation, pupillary block is maximal and the relaxed peripheral iris thickens in the angle: that is why dilation can trigger an attack in a narrow angle." },
  "corps-ciliaire": { t: "Ciliary body", en: "", d: "A ring of ≈ 6 mm between the iris root and the ora serrata: pars plicata anteriorly (≈ 2 mm, bears the ciliary processes) and pars plana posteriorly (≈ 4 mm, the entry route for intravitreal injections). It contains the ciliary muscle (accommodation, opening of the trabecular meshwork) and the epithelium that secretes aqueous humor.", c: "In refractory glaucoma, part of the ciliary body is destroyed with a laser (cyclophotocoagulation) to reduce aqueous production. If it rotates forward, it pushes the iris against the angle and closes it without pupillary block: topiramate-induced choroidal effusion (an idiosyncratic reaction: fluid under the choroid, often bilateral) or plateau iris (an anteriorly placed ciliary body that lifts the iris root). Iridotomy is then not enough." },
  "proces-ciliaires": { t: "Ciliary processes", en: "", d: "≈ 70 highly vascular folds of the pars plicata, covered by a two-layer epithelium (outer pigmented, inner non-pigmented). The non-pigmented epithelium secretes aqueous humor (≈ 2–3 µL/min) by active transport (Na⁺/K⁺-ATPase) with the help of carbonic anhydrase.", c: "Three classes of drops slow production here: beta-blockers (timolol), carbonic anhydrase inhibitors (dorzolamide; oral acetazolamide) and alpha-2 agonists (brimonidine). In plateau iris, UBM (high-frequency ultrasound) shows these processes positioned too far forward: they prop up the iris root and efface the ciliary sulcus." },
  "chambre-posterieure": { t: "Posterior chamber", en: "", d: "Small space (≈ 60 µL) between the posterior surface of the iris and the lens, where aqueous humor is produced before passing through the pupil. The ciliary sulcus (the groove between iris and ciliary body) can hold an intraocular lens or a drainage tube.", c: "In pupillary block, aqueous accumulates here → its pressure exceeds that of the anterior chamber → the peripheral iris bows forward and closes the angle. Laser iridotomy (LPI: a small hole in the peripheral iris) opens a bypass and equalizes the pressures." },
  "zonules": { t: "Zonules (of Zinn)", en: "", d: "Fibrillin fibers connecting the ciliary body to the lens equator and keeping the lens centered. When the ciliary muscle contracts, they relax and the lens becomes rounder (accommodation).", c: "Pseudoexfoliation (age-related fibrillar deposits) weakens the zonules: a trembling lens (phacodonesis), riskier cataract surgery and sometimes angle closure from a forward-displaced lens. In pigment dispersion, it is iris rubbing against the zonules that releases the pigment." },
  "cristallin": { t: "Crystalline lens", en: "", d: "Avascular biconvex lens (≈ 20 D), suspended by the zonules, that thickens throughout life (≈ 3.5–4 mm in young adults → ≈ 4.5–5 mm in the elderly). Its loss of flexibility causes presbyopia around age 40–45, its opacification cataract.", c: "As it grows, the lens pushes the iris forward and narrows the angle: a major driver of primary angle closure. The EAGLE study showed that removing a clear lens controls IOP better than iridotomy (primary angle closure with IOP ≥ 30 mmHg or angle-closure glaucoma, patients ≥ 50 years)." },
  "vitre": { t: "Vitreous", en: "", d: "Transparent gel (≈ 4 mL, ≈ 99% water, collagen and hyaluronic acid) occupying ≈ 80% of the volume of the globe. It adheres firmly at the vitreous base (near the ora serrata), the disc, the macula and along the vessels.", c: "In aqueous misdirection, aqueous is diverted into the vitreous → the vitreous swells → it pushes the lens and iris forward. Result: an anterior chamber flat centrally as well as peripherally and high IOP despite a patent iridotomy, typically after filtering surgery." }
});

Object.assign(G.OPH_EN.A.anatomy, {
  "retine": { t: "Retina", en: "", d: "Neural tissue lining the back of the eye: photoreceptors (cones, rods) on the outside, bipolar cells in the middle, ganglion cells on the inside. The ganglion cell axons form the retinal nerve fiber layer (RNFL), which converges on the disc. The inner 2/3 are supplied by the central retinal artery, the outer 1/3 by the choriocapillaris.", c: "Glaucoma selectively kills the ganglion cells and their axons, without affecting the photoreceptors. That is why OCT (optical coherence tomography) measures two structures: the RNFL around the disc (the axons) and the macular ganglion cells (GCIPL, ganglion cell–inner plexiform layer: their cell bodies and dendrites)." },
  "macula": { t: "Macula", en: "", d: "Central zone ≈ 5.5 mm in diameter between the temporal vascular arcades, responsible for fine vision and color. It contains the highest density of ganglion cells in the retina (several layers of cell bodies).", c: "Macular GCIPL on OCT and the 10-2 visual field (test of the central 10°) detect central glaucomatous damage that a 24-2 can miss. The inferior macula is the most vulnerable (macular vulnerability zone): its fibers reach the inferotemporal pole of the disc, the one most often affected." },
  "fovea": { t: "Fovea", en: "", d: "Central depression of the macula (≈ 1.5 mm) whose center (foveal avascular zone, ≈ 0.5 mm) has no vessels; cones are packed most tightly here and the other layers are pushed to the periphery. It gives the best visual acuity.", c: "Glaucoma spares central vision until an advanced stage: a visual acuity (VA) of 6/6 (20/20) therefore does not rule out severe glaucoma. Unexplained VA loss in a glaucoma patient calls for another cause (cataract, maculopathy, non-glaucomatous neuropathy)." },
  "papille": { t: "Optic disc (optic nerve head)", en: "", d: "Exit point of the ganglion cell axons and entry/exit point of the central vessels, ≈ 1.5–2 mm in diameter (slightly taller than wide). Lacking photoreceptors, it creates the physiologic blind spot, ≈ 15° temporal to fixation. The neuroretinal rim (the axonal tissue) and the cup (the central hollow without axons) are described here.", c: "Always estimate disc size first: a large disc physiologically has a large cup (macrocupping), a small disc can hide axonal loss. The cup-to-disc ratio (C/D) only makes sense relative to that size." },
  "nerf-optique": { t: "Optic nerve", en: "", d: "Bundle of ≈ 1.2 million ganglion cell axons, ≈ 50 mm long, from the disc to the chiasm. Segments: intraocular (≈ 1 mm), intraorbital (≈ 25 mm), intracanalicular and intracranial. The axons become myelinated only behind the lamina cribrosa, which keeps the retina transparent.", c: "Rim pallor more marked than the cupping, early loss of color vision or a field defect respecting the vertical meridian suggest a non-glaucomatous neuropathy (compression, ischemia, inflammation): consider imaging. Asymmetric glaucoma can cause a relative afferent pupillary defect (RAPD: both pupils constrict less when the affected eye is lit) on the more affected side." },
  "choroide": { t: "Choroid", en: "", d: "Vascular layer between the retina and the sclera, with a very high blood flow. Its inner layer, the choriocapillaris, nourishes the pigment epithelium and the photoreceptors across Bruch membrane. The suprachoroidal space, between choroid and sclera, receives part of the aqueous humor (uveoscleral pathway).", c: "After filtering surgery, an IOP that is too low (hypotony) can let fluid accumulate under the choroid (choroidal detachment or effusion); the dreaded complication is suprachoroidal hemorrhage (massive bleeding under the choroid, during or after surgery). Beta-zone peripapillary atrophy corresponds to loss of the pigment epithelium and choriocapillaris around the disc." },
  "ora-serrata": { t: "Ora serrata", en: "", d: "Serrated edge where the retina ends and joins the pars plana of the ciliary body, ≈ 6–7 mm behind the limbus. The vitreous base adheres firmly to it.", c: "Intravitreal injections go through the pars plana, ≈ 3.5–4 mm from the limbus: anterior to the ora, so without piercing the retina, and posterior to the lens. In glaucoma clinic, anti-VEGF (a drug that blocks the vessel growth factor) is injected here in neovascular glaucoma, in which new vessels cover and then close the angle: the vessels regress within days." },
  "acr": { t: "Central retinal artery", en: "", d: "Branch of the ophthalmic artery (itself from the internal carotid) that enters the optic nerve ≈ 10–12 mm behind the globe and divides on the disc. It supplies the inner 2/3 of the retina; it is an end artery, with no collateral supply.", c: "A visible arterial pulsation on the disc is abnormal: IOP is reaching the artery's diastolic pressure (e.g. acute angle-closure attack) and inner retinal perfusion is threatened. Its occlusion (CRAO) causes sudden, painless vision loss with a \"cherry-red\" macula: it is an ocular stroke requiring an urgent vascular workup (and, after age 50, exclusion of giant cell arteritis: erythrocyte sedimentation rate, CRP). A cilioretinal artery (from the ciliary circulation), present in some patients, can spare the macula." },
  "vcr": { t: "Central retinal vein", en: "", d: "Drains the inner retina, leaves through the optic nerve with the artery and joins the cavernous sinus, directly or via the superior ophthalmic vein. It shares an adventitial sheath with the artery at the level of the lamina cribrosa.", c: "Central retinal vein occlusion (CRVO) is promoted by elevated IOP or glaucoma. An ischemic CRVO creates retinal ischemia → secretion of VEGF (vascular endothelial growth factor) → iris and angle new vessels → neovascular glaucoma, classically within the first 3 months (\"100-day glaucoma\"): gonioscopy and IOP at follow-up visits." },
  "arteres-ciliaires-post": { t: "Posterior ciliary arteries", en: "", d: "Branches of the ophthalmic artery. The short ones (≈ 10–20) pierce the sclera around the optic nerve and supply the choroid and the optic nerve head (circle of Zinn-Haller). The 2 long ones run at 3 and 9 o'clock to the ciliary body and, with the anterior ciliary arteries, form the major arterial circle of the iris.", c: "The optic nerve head depends on these arteries: poor perfusion contributes to glaucoma (vascular theory). Hence risk factors recognized by the AAO: low blood pressure (emphasized in 2026) and low ocular perfusion pressure; nocturnal hypotension (antihypertensive taken in the evening) is also a concern. Their acute occlusion causes anterior ischemic optic neuropathy (swollen, then pale disc); after age 50, urgently rule out the arteritic form (giant cell arteritis)." },
  "arteres-ciliaires-ant": { t: "Anterior ciliary arteries", en: "", d: "Arising from the muscular arteries of the rectus muscles (2 per muscle except the lateral rectus, 1), they pierce the sclera near the limbus. They supply the anterior segment and the major arterial circle of the iris, and form the perilimbal episcleral network.", c: "Their dilation produces ciliary flush (violaceous redness maximal around the limbus, a perikeratic ring): it signals disease of the cornea or of the inside of the eye: keratitis, uveitis (inflammation of the iris, ciliary body or choroid) or angle-closure attack. Conjunctivitis rather gives redness maximal in the periphery, in the fornices." },
  "veines-vortiqueuses": { t: "Vortex veins", en: "", d: "Usually 4 to 7 veins (at least 1 per quadrant) that drain the choroid, ciliary body and iris. They cross the sclera obliquely behind the equator and join the superior and inferior ophthalmic veins.", c: "In nanophthalmos (a very small eye with thick sclera), the sclera compresses the vortex veins → choroidal blood drains poorly → fluid accumulates under the choroid (uveal effusion) → the ciliary body rotates and closes the angle. These eyes are also at high risk of surgical complications." },
  "nerfs-ciliaires-longs": { t: "Long ciliary nerves", en: "", d: "Two branches of the nasociliary nerve (V1) running at 3 and 9 o'clock between choroid and sclera. They carry sensation from the cornea, iris and ciliary body, and the sympathetic fibers destined for the iris dilator muscle (these fibers do not synapse in the ciliary ganglion).", c: "Zoster vesicles on the tip of the nose (Hutchinson sign) signal involvement of the nasociliary nerve, hence a high risk of corneal and ocular involvement. In transscleral cyclophotocoagulation (laser applied through the sclera to destroy part of the ciliary body), 3 and 9 o'clock are spared so as not to burn these nerves and the long ciliary arteries." },
  "nerfs-ciliaires-courts": { t: "Short ciliary nerves", en: "", d: "6 to 10 nerves arising from the ciliary ganglion (in the orbit, behind the globe). They carry the postganglionic parasympathetic fibers (from the Edinger-Westphal nucleus via CN III, synapsing in the ganglion) to the iris sphincter and ciliary muscle, as well as sensory and vasomotor fibers.", c: "Damage to the ganglion or the short ciliary nerves produces the Adie tonic pupil: a dilated pupil that reacts poorly to light but better to accommodation (light-near dissociation), and constricts with dilute pilocarpine (≈ 0.1%) through denervation hypersensitivity." },
  "lame-criblee": { t: "Lamina cribrosa", en: "", d: "Perforated collagen plates that extend the sclera across the back of the disc and through which the axons and central vessels pass. Its pores are larger and its supporting tissue thinner at the superior and inferior poles.", c: "Under an IOP too high for that eye, the lamina deforms backward → the pores deform and compress the axons → axonal transport is blocked → the ganglion cell dies. The poles give way first, hence the inferior/superior rim notches and the arcuate visual field defects." },
  "muscles-droits": { t: "Rectus muscles", en: "", d: "Four muscles (medial, inferior, lateral, superior) that insert on the sclera progressively farther from the limbus (spiral of Tillaux ≈ 5.5; 6.5; 6.9; 7.7 mm). CN III innervates the medial, inferior and superior recti, CN VI the lateral rectus.", c: "The plate of drainage tubes (devices that divert aqueous to a reservoir behind the equator, e.g. Ahmed, Baerveldt) is fixed between two rectus muscles, often superotemporally: diplopia (double vision) is a known complication. The sclera, very thin behind the insertions, is easily perforated." }
});
