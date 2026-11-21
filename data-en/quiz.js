// English overlay for quiz items (G.OPH.quiz), keyed by id. Only text fields are overlaid:
// stem, options, explain, why. answer, type, level, topic and figure stay from the FR source.
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH_EN = G.OPH_EN || {};
G.OPH_EN.quiz = G.OPH_EN.quiz || {};

// ---- data/quiz-a.js ----
Object.assign(G.OPH_EN.quiz, {
  "A-001": {
    stem: "You are doing ultrasound pachymetry (measuring corneal thickness with a small probe) on a healthy 24-year-old student. Your attending asks which layer makes up most of the corneal thickness and what central value you expect to read.",
    options: [
      "The stroma (≈ 90 % of the thickness); center ≈ 540–550 µm",
      "The epithelium (≈ 50 % of the thickness); center ≈ 540–550 µm",
      "The stroma (≈ 90 % of the thickness); center ≈ 650–700 µm",
      "Descemet membrane (≈ 30 %); center ≈ 450 µm"
    ],
    explain: "Reasoning: 1) from front to back, the cornea has the epithelium (≈ 50 µm), Bowman layer (8–12 µm), the stroma, Dua layer, Descemet membrane and the endothelium (a single cell layer); 2) all these layers are thin except the stroma, made of type I collagen lamellae and about 78 % water, which therefore makes up ≈ 90 % of the thickness; 3) the cornea is thinner centrally (≈ 540–550 µm) than peripherally (≈ 650–700 µm), and the central value is the one we measure, because it is used to interpret IOP.",
    why: [
      "Correct: the stroma makes up ≈ 90 % of the thickness, and the center measures ≈ 540–550 µm in adults.",
      "The epithelium is only ≈ 50 µm (5–7 cell layers), about 10 % of the thickness, not half.",
      "Right layer, but 650–700 µm is the peripheral value; the center is thinner.",
      "Descemet (the endothelial basement membrane) is only 10–15 µm in adults; 450 µm would be a markedly thin cornea."
    ]
  },
  "A-002": {
    stem: "On gonioscopy (examining the iridocorneal angle with a mirrored lens placed on the cornea) of a wide-open angle, you describe from the iris root toward the cornea: a grey-brown band, a whitish line, then a pigmented band. Your attending points to the pigmented band: what structure is it?",
    options: [
      "The ciliary body band, the anterior face of the ciliary body",
      "Schwalbe line, the termination of Descemet membrane",
      "The pigmented trabecular meshwork, the main filtering portion",
      "Schlemm canal, visible when it fills with blood"
    ],
    explain: "Reasoning: 1) structures are named from posterior to anterior with \"I Can't See Til Schwalbe\": Iris root, Ciliary body band (grey-brown), Scleral spur (white line), Trabecular meshwork, Schwalbe line; 2) the pigmented band following the white line (the spur) is therefore the pigmented trabecular meshwork; 3) it is the filtering portion, located in front of Schlemm canal, and pigment deposits there precisely because aqueous flows through it.",
    why: [
      "The ciliary body band is the most posterior grey-brown band: the anterior face of the ciliary body, between the iris root and the spur.",
      "Schwalbe line is the most anterior structure, a thin whitish ridge: the end of Descemet membrane, beyond the trabecular meshwork.",
      "Correct: just anterior to the scleral spur, this is the zone that filters aqueous toward Schlemm canal.",
      "Schlemm canal is normally not visible; it appears as a red line only if blood refluxes into it (lens compressing the episcleral veins or elevated episcleral venous pressure)."
    ]
  },
  "A-003": {
    stem: "A 64-year-old woman has a narrow angle from relative pupillary block (aqueous has difficulty passing between the iris and the lens). Your attending performs a laser peripheral iridotomy (LPI: a small hole in the peripheral iris) and asks you why this hole is enough to deepen the angle.",
    options: [
      "It directly increases trabecular outflow facility",
      "It lets aqueous pass from the posterior to the anterior chamber",
      "It creates a drainage fistula to the subconjunctival space",
      "It decreases aqueous production by the ciliary processes"
    ],
    explain: "Reasoning: 1) aqueous humor is produced in the posterior chamber (behind the iris) by the ciliary processes; 2) it must pass through the pupil to reach the anterior chamber and then the angle; 3) if this passage is impeded, pressure builds behind the iris, which bows forward and closes the angle. The LPI opening provides an alternative route: pressures equalize, the iris flattens and the angle opens.",
    why: [
      "The trabecular meshwork (the angle's filter) is not changed; the effect comes from equalizing the pressure on either side of the iris.",
      "Correct: aqueous bypasses the pupil through the hole, which removes the push that was bowing the iris forward.",
      "That describes a trabeculectomy (surgery creating a fistula that drains aqueous under the conjunctiva); an LPI does not communicate with that space.",
      "An LPI does not touch the ciliary body: the amount of aqueous produced stays the same."
    ]
  },
  "A-004": {
    stem: "Before an intravitreal injection (drug injected into the vitreous, the gel filling the back of the eye) in a phakic patient (who still has their natural lens), your attending enters about 4 mm behind the limbus. They ask why at that spot, and which portion of the ciliary body produces aqueous humor.",
    options: [
      "You go through the pars plicata; aqueous comes from the pars plana",
      "You go through the ora serrata; aqueous comes from the iris epithelium",
      "You go through the pars plana; aqueous comes from the ciliary muscle",
      "You go through the pars plana; aqueous comes from the pars plicata"
    ],
    explain: "Reasoning: 1) the ciliary body has two portions: anteriorly, the pars plicata bears the ciliary processes, whose non-pigmented epithelium secretes aqueous; posteriorly, the pars plana is flat, poorly vascularized and has no retina; 2) the retina begins further back, at the ora serrata (the serrated anterior edge of the retina); 3) by entering through the pars plana, you avoid both the lens and the ciliary processes in front, and the retina behind.",
    why: [
      "Reversed: the pars plicata (ciliary processes) is vascular and produces aqueous; you do not inject through it.",
      "The ora serrata marks the start of the retina: entering there risks a tear; the iris epithelium does not secrete aqueous.",
      "Right site, but the ciliary muscle serves accommodation (near focusing) and the uveoscleral pathway (aqueous exiting between its fibers), not secretion.",
      "Correct: you enter through the pars plana; aqueous comes from the non-pigmented epithelium of the pars plicata."
    ]
  },
  "A-005": {
    stem: "Your attending shows you the optic disc of a patient with glaucoma. The neuroretinal rim (the pink ring of nerve fibers around the cup) is thinning mainly at the superior and inferior poles. They ask why glaucoma affects these sectors first, in relation to the lamina cribrosa.",
    options: [
      "The axons there are already myelinated, so stiffer and more fragile",
      "These sectors depend solely on the central retinal artery",
      "The pores there are larger and less supported, so more deformable",
      "The papillomacular bundle passes there, hence early central loss"
    ],
    explain: "Glaucoma is an optic neuropathy that gradually destroys optic nerve fibers, often under the effect of IOP. Reasoning: 1) retinal ganglion cell axons leave the eye through the lamina cribrosa, a collagen sieve stretched across the sclera; 2) at the superior and inferior poles, its pores are larger and the supporting tissue thinner; 3) under IOP, these zones deform more, pinch the axons and block their internal transport (axoplasmic flow), which eventually kills them. Result: polar rim thinning and arcuate visual field defects.",
    why: [
      "Axons are not myelinated inside the eye: myelin begins behind the lamina cribrosa, which is why the optic nerve is wider posteriorly.",
      "The lamina cribrosa region is supplied by the short posterior ciliary arteries, via the circle of Zinn-Haller (arterial ring around the optic nerve), not by the central retinal artery.",
      "Correct: larger polar pores and weaker support, hence compression of the axons under IOP.",
      "The papillomacular bundle (fibers from the macula) enters on the temporal side and is spared for a long time: central vision is lost late in glaucoma."
    ]
  },
  "A-006": {
    stem: "A 72-year-old man has sudden painless vision loss OD. On fundus exam: whitish retina with a central cherry-red spot, typical of a central retinal artery occlusion (CRAO: a clot blocking the main artery of the retina). A small area between the disc and the fovea remains pink and he still reads 6/9 (20/30). What is the anatomical explanation?",
    options: [
      "A cilioretinal artery, of ciliary origin, perfuses this area",
      "The central retinal vein, still patent, supplies this area",
      "The vortex veins provide collateral supply to the macula",
      "The choriocapillaris nourishes the full retinal thickness at this spot"
    ],
    explain: "Reasoning: 1) the retina has two blood supplies: the central retinal artery, a branch of the ophthalmic artery, nourishes the inner retina; the choroid, supplied by the posterior ciliary arteries, nourishes the outer retina (photoreceptors); 2) in CRAO, the inner retina deprived of blood turns white (ischemic edema); the fovea, which has no inner retina, lets the red choroid show through: this is the cherry-red spot; 3) in some patients, a cilioretinal artery, arising from the ciliary circulation and not from the central artery, supplies the area between the disc and the fovea: it remains perfused and preserves central vision.",
    why: [
      "Correct: this vessel comes from the ciliary circulation, independent of the blocked central artery.",
      "A vein drains blood, it does not supply it; a central retinal vein occlusion (a clot blocking blood outflow) would instead produce hemorrhages scattered throughout the retina.",
      "The vortex veins (about one per quadrant, behind the equator) drain the choroid into the orbit; they do not deliver arterial blood.",
      "The choriocapillaris (fine choroidal capillaries) nourishes only the outer retina; the inner retina depends on the central artery."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "A-007": {
    stem: "A 70-year-old man has herpes zoster ophthalmicus (reactivation of the chickenpox virus in the V1 branch of the trigeminal nerve): vesicles on the forehead and on the tip of the nose (Hutchinson sign). Your attending says this sign predicts eye involvement. What anatomical explanation do they give?",
    options: [
      "The lacrimal nerve (V1) supplies both the tip of the nose and the cornea",
      "The ciliary ganglion sends fibers to the tip of the nose and the cornea",
      "The maxillary nerve (V2) supplies both the tip of the nose and the cornea",
      "The nasociliary nerve (V1) supplies the tip of the nose and also the cornea"
    ],
    explain: "Reasoning: 1) the ophthalmic branch of the trigeminal nerve (V1) divides into the frontal, lacrimal and nasociliary nerves; 2) the nasociliary gives off the long ciliary nerves, which carry corneal sensation (the most densely innervated tissue in the body), and branches that supply the dorsum and tip of the nose; 3) vesicles on the tip of the nose therefore prove that the virus has reached the nasociliary nerve, the same pathway as the cornea. Hutchinson sign thus predicts a high risk of eye involvement (keratitis: inflammation of the cornea; uveitis: inflammation inside the eye).",
    why: [
      "The lacrimal nerve supplies the lacrimal gland and the lateral upper lid, not the tip of the nose or the cornea.",
      "The ciliary ganglion is the parasympathetic relay (from CN III, the oculomotor nerve) to the iris sphincter and ciliary muscle via the short ciliary nerves; sensory nasociliary fibers pass through it without synapsing, but it does not supply the skin of the nose.",
      "V2 supplies the cheek and upper lip; the cornea and the tip of the nose belong to V1.",
      "Correct: the same nerve (nasociliary) for the tip of the nose and the cornea, hence the ocular risk."
    ]
  },
  "A-008": {
    stem: "A 35-year-old man, 3 months after a severe alkali chemical burn (a strong base splashed into the eye): the cornea is covered by a dull, vascularized epithelium coming from the conjunctiva, with an epithelial defect that will not heal. Your attending explains that the stem cells that renew the corneal epithelium have been destroyed. Where are these cells normally located?",
    options: [
      "In the central corneal endothelium, on Descemet membrane",
      "In the basal layer of the limbal epithelium (palisades of Vogt)",
      "In the anterior corneal stroma, just beneath Bowman layer",
      "In the goblet cells of the bulbar conjunctiva"
    ],
    explain: "Reasoning: 1) the corneal epithelium renews itself about every week; its new cells arise from stem cells located in the basal layer of the limbus (the junction between cornea and sclera), in folds called the palisades of Vogt; 2) the limbus also acts as a barrier that keeps the conjunctiva from growing over the cornea; 3) if a burn destroys these cells, the cornea can no longer repair itself (persistent epithelial defects) and the conjunctiva, with its vessels, invades the cornea (conjunctivalization), making it opaque: this is limbal stem cell deficiency.",
    why: [
      "The endothelium is the posterior layer, which does not regenerate; it does not supply the surface epithelium.",
      "Correct: basal layer of the limbal epithelium, in the palisades of Vogt.",
      "The stroma contains keratocytes (cells that maintain the collagen), not the epithelial stem cells.",
      "Goblet cells produce the mucus of the tear film; they do not regenerate the corneal epithelium."
    ]
  },
  "A-009": {
    stem: "A 30-year-old pregnant woman with glaucoma treated with timolol (a beta-blocker drop). Your attending shows her punctal occlusion (pressing on the inner corner of the lids for a few minutes after the drop) to reduce passage of the drug into the bloodstream. Which anatomical pathway does this maneuver block?",
    options: [
      "Puncta → canaliculi → lacrimal sac → nasolacrimal duct → inferior meatus",
      "Puncta → canaliculi → lacrimal sac → nasolacrimal duct → middle meatus",
      "Puncta → lacrimal sac → canaliculi → nasolacrimal duct → inferior meatus",
      "Puncta → canaliculi → lacrimal sac → nasolacrimal duct → maxillary sinus"
    ],
    explain: "Reasoning: 1) tears, and drops, enter through the puncta at the medial lid margins, then pass through the canaliculi to the lacrimal sac; 2) the nasolacrimal duct then carries them into the nose, under the inferior turbinate (inferior meatus); 3) the highly vascular nasal mucosa absorbs the drug directly into the bloodstream, without first passing through the liver, which would have partly broken it down (hepatic first-pass): a beta-blocker can then slow the heart or constrict the bronchi. Pressing on the puncta and closing the eyes keeps the drop on the eye longer and reduces this absorption; the AAO (2026) recommends this occlusion in women who are pregnant or breastfeeding.",
    why: [
      "Correct: this is the normal pathway, which ends in the inferior meatus of the nose.",
      "The middle meatus receives drainage from most of the sinuses, not tears.",
      "Order reversed: the canaliculi connect the puncta to the sac; they do not come after it.",
      "Tears do not pass through the sinuses; the nasolacrimal duct opens directly into the nasal cavity."
    ]
  },
  "A-010": {
    stem: "A 66-year-old man with primary open-angle glaucoma (the angle is open, but the trabecular filter drains poorly), treated with latanoprost (a prostaglandin analog) and timolol (a beta-blocker). Your attending writes the Goldmann equation: IOP = (F − U) / C + Pv, where F = aqueous production, U = uveoscleral outflow, C = trabecular outflow facility and Pv = episcleral venous pressure. Which parameter does each drug mainly act on?",
    options: [
      "Latanoprost: increases C; timolol: decreases Pv",
      "Latanoprost: decreases F; timolol: increases U",
      "Latanoprost: increases U; timolol: decreases F",
      "Latanoprost: decreases Pv; timolol: increases C"
    ],
    explain: "Reasoning: 1) the equation says IOP rises if the eye produces more aqueous (F) and falls if aqueous drains better, either through the uveoscleral pathway (U, between the fibers of the ciliary muscle) or through the trabecular meshwork (C); Pv is the pressure in the veins into which the meshwork drains; 2) prostaglandin analogs (latanoprost) remodel the tissue of the ciliary muscle and mainly increase U; 3) beta-blockers (timolol), like carbonic anhydrase inhibitors (dorzolamide, acetazolamide), decrease F by acting on the ciliary epithelium. Also remember: alpha-2 agonists (brimonidine) decrease F and increase U; pilocarpine increases C.",
    why: [
      "Latanoprost acts mainly on the uveoscleral pathway, not the trabecular meshwork; neither drug truly lowers Pv.",
      "Reversed: timolol reduces production (F) and latanoprost increases uveoscleral outflow (U).",
      "Correct: prostaglandin = more uveoscleral outflow; beta-blocker = less production.",
      "Neither drug changes Pv significantly, and timolol does not act on the trabecular meshwork."
    ]
  },
  "A-011": {
    stem: "A 68-year-old man with advanced glaucoma progressing despite three classes of drops, IOP 13 mmHg. Your attending is aiming for about 10 mmHg and proposes a trabeculectomy (filtering surgery: a fistula that drains aqueous under the conjunctiva) rather than another drop. Using the Goldmann equation, IOP = (F − U) / C + Pv, they ask you why drops quickly reach a \"floor\".",
    options: [
      "Aqueous production cannot fall below about 2 µL/min, even on drops",
      "Through the trabecular meshwork, IOP cannot fall below episcleral venous pressure",
      "The uveoscleral pathway stops once IOP falls below about 12 mmHg",
      "The trabecular meshwork becomes impermeable to drugs after three classes of drops"
    ],
    explain: "Reasoning: 1) in the equation, the term (F − U) / C is the part of IOP used to push aqueous through the trabecular meshwork; 2) after the meshwork, aqueous passes into Schlemm canal and then into the episcleral veins, where the pressure (Pv) is about 8–10 mmHg; 3) most drops only reduce the first term: even if it approached zero, IOP would remain at least equal to Pv. Trabeculectomy sends aqueous under the conjunctiva, where the pressure is close to zero: it bypasses Pv and allows lower IOPs.",
    why: [
      "Production does fall on drops (and at night); the floor comes from Pv, not from a production limit.",
      "Correct: the trabecular pathway drains into the episcleral veins, so IOP stays at least equal to Pv; filtration bypasses this floor.",
      "The uveoscleral pathway is largely pressure-independent: it does not stop below an IOP threshold.",
      "The meshwork does not become \"impermeable\"; each added drop yields less, partly precisely because of the Pv floor."
    ]
  },
  "A-012": {
    stem: "A 78-year-old woman on latanoprost (a prostaglandin analog that increases aqueous outflow through the uveoscleral pathway). A resident wants to add pilocarpine (a muscarinic agonist that contracts the ciliary muscle and the pupil) \"to open all the outflow pathways\". Your attending asks what pilocarpine actually does to the uveoscleral pathway, and how this pathway changes with age.",
    options: [
      "Pilocarpine decreases it; its share of outflow decreases with age",
      "Pilocarpine increases it; its share of outflow decreases with age",
      "Pilocarpine decreases it; its share of outflow increases with age",
      "Pilocarpine increases it; its share of outflow increases with age"
    ],
    explain: "Reasoning: 1) aqueous exits by two pathways: the trabecular pathway (meshwork → Schlemm canal → episcleral veins), which is pressure-dependent, and the uveoscleral pathway, which passes posteriorly between the ciliary muscle fibers and is largely pressure-independent; 2) pilocarpine contracts the ciliary muscle: its fibers pull on the scleral spur and open the meshwork (C increases), but they also tighten and close the uveoscleral spaces (U decreases); 3) the uveoscleral pathway accounts for 5–30 % of outflow and decreases with age. In theory, pilocarpine therefore partly opposes latanoprost, which relies precisely on this pathway.",
    why: [
      "Correct: more trabecular outflow, less uveoscleral outflow; and this pathway loses importance with age.",
      "Trap: pilocarpine opens the trabecular meshwork, but closes the uveoscleral pathway by contracting the ciliary muscle.",
      "Right effect of pilocarpine, but the uveoscleral pathway decreases with age, it does not increase.",
      "Double error: pilocarpine decreases the uveoscleral pathway, and this pathway declines with age."
    ]
  },
  "A-013": {
    stem: "A 78-year-old man whose specular microscopy (a photo of the endothelium that counts cells per mm²) showed 600 cells/mm² before his cataract surgery. The next day, the cornea is thickened and cloudy, with Descemet folds. Your attending asks you what mechanism normally keeps the cornea relatively dehydrated and transparent.",
    options: [
      "The epithelium, which actively pumps water from the stroma into the tear film",
      "Stromal keratocytes, which reabsorb and eliminate excess water",
      "Bowman layer, which is impermeable and blocks the entry of aqueous",
      "The endothelium, a barrier and Na⁺/K⁺-ATPase pump that removes water from the stroma"
    ],
    explain: "Reasoning: 1) the stroma contains glycosaminoglycans that attract water: left to itself, it swells, its collagen fibers lose their regular spacing and light scatters; 2) the endothelium, a single layer of hexagonal cells, lets a little aqueous in (an imperfect barrier) but pumps ions into the anterior chamber via Na⁺/K⁺-ATPase, and water follows: this is deturgescence; 3) these cells do not divide in adults (≈ 3000–3500 cells/mm² in young adults, loss ≈ 0.6 %/year); below ≈ 400–500 cells/mm², the pump can no longer keep up and the cornea swells (stromal edema, Descemet folds), especially after the stress of surgery.",
    why: [
      "The epithelium mainly serves as a barrier against tears; its pump role is minor compared with that of the endothelium.",
      "Keratocytes make and maintain the collagen; they do not remove water from the stroma.",
      "Bowman layer is an acellular collagen layer in front of the stroma; it does not contact the aqueous.",
      "Correct: the endothelial pump, together with its barrier, keeps the stroma at about 78 % water."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "A-014": {
    stem: "A 65-year-old woman in an acute angle-closure attack (the iris suddenly blocks the angle's filter and IOP rises within hours): IOP 58 mmHg, colored halos around lights, dull cornea with fine surface microbullae. Her endothelium is normal. Your attending asks why it is the epithelium that becomes edematous.",
    options: [
      "The high IOP destroys the limbal stem cells, hence a fragile epithelium",
      "The very high IOP pushes water through the stroma into the epithelium",
      "The high IOP blocks tear secretion, which dries out the epithelium",
      "The high IOP mainly swells the stroma, which crushes the epithelial cells"
    ],
    explain: "Reasoning: 1) normally, the endothelial pump removes water from the stroma at least as fast as it enters; 2) when IOP rises very high and fast, it pushes water from the anterior chamber through the cornea faster than the pump can remove it; 3) the water crosses the stroma, which thickens little, and accumulates between the epithelial cells, because the tight junctions at the surface prevent it from passing into the tears: this is epithelial edema (microcysts), which scatters light and produces the halos. Conversely, when the endothelium fails at normal IOP, it is the stroma that swells first.",
    why: [
      "The limbal stem cells are not destroyed by an IOP rise; the problem is a shift of water.",
      "Correct: the pressure pushes water forward, where the epithelial barrier holds it back.",
      "Tear secretion is not involved; the epithelium is waterlogged, not dried out.",
      "In an acute IOP rise, the stroma thickens little; water crosses it and accumulates further forward, in the epithelium."
    ]
  },
  "A-015": {
    stem: "A 58-year-old woman with eyes that burn at the end of the day. The lid margins are thickened and expressing the meibomian glands (small lid glands that secrete an oily film) yields a secretion as thick as toothpaste. The tear breakup time (TBUT) is 4 s. Which layer of the tear film is lacking, and what happens to tear osmolarity?",
    options: [
      "Aqueous phase; reduced production and decreasing osmolarity",
      "Mucins; increased evaporation and decreasing osmolarity",
      "Lipid layer; increased evaporation and increasing osmolarity",
      "Lipid layer; reduced evaporation and decreasing osmolarity"
    ],
    explain: "Reasoning: 1) the tear film has an outer lipid layer (meibomian glands) that slows evaporation, and a muco-aqueous phase: water from the main lacrimal gland and the accessory glands (Krause, Wolfring), mucins from goblet cells and the glycocalyx of the epithelial cells; 2) when the meibomian glands are blocked (meibomian gland dysfunction), the lipid layer is lacking: water evaporates quickly and the film breaks up quickly (short TBUT; normal > 10 s); 3) less water for the same amount of salt = more concentrated tears (hyperosmolarity), which irritates and inflames the ocular surface.",
    why: [
      "The meibomian glands do not produce the water of tears; and a lack of water would raise osmolarity, not lower it.",
      "Mucins come from goblet cells and the epithelium; and increased evaporation concentrates the tears.",
      "Correct: fewer lipids, more evaporation, more concentrated tears (hyperosmolarity).",
      "Right layer, but without lipids evaporation increases, which concentrates the salts."
    ]
  },
  "A-016": {
    stem: "A 52-year-old woman with burning and a gritty sensation in her eyes; her score on the OSDI-6 symptom questionnaire (Ocular Surface Disease Index, short 6-question version) is 6. Tear osmolarity: 300 mOsm/L in each eye. Non-invasive tear breakup time (NIBUT: measured without fluorescein, by watching light rings reflected on the cornea distort): 7 s. No significant staining. According to TFOS DEWS III (2025), what do you conclude?",
    options: [
      "Not confirmed: osmolarity must also be ≥ 308 mOsm/L",
      "Not confirmed: at least two abnormal signs are needed",
      "Confirmed only if the Schirmer test is under 5 mm",
      "Confirmed: symptoms are present and a single abnormal sign is enough"
    ],
    explain: "Reasoning: 1) DEWS III defines dry eye as a symptomatic disease: symptoms come first, screened by an OSDI-6 ≥ 4 (here 6, so positive); 2) then a single sign is enough, among: NIBUT < 10 s; osmolarity ≥ 308 mOsm/L in one eye or an inter-eye difference of more than 8 mOsm/L; or staining beyond the thresholds (more than 5 corneal fluorescein spots, more than 9 conjunctival lissamine green spots, or fairly extensive lid margin staining); 3) here, the NIBUT of 7 s is enough, even though osmolarity (300, with no inter-eye difference) is normal.",
    why: [
      "Osmolarity is only one of the possible signs; a single abnormal sign is enough.",
      "DEWS III requires a single sign from the list, not two.",
      "The Schirmer test (a paper strip that measures tear production over 5 minutes) is not a DEWS III diagnostic sign; it rather points to aqueous deficiency.",
      "Correct: symptoms (OSDI-6 ≥ 4) + one sign (NIBUT < 10 s) = dry eye disease."
    ]
  },
  "A-017": {
    stem: "A 62-year-old Inuit woman, hyperopic at +4.00 D. On biomicroscopy, the anterior chamber looks shallow. Your attending reminds you that older hyperopes are at higher risk of angle closure (the iris comes to block the angle's filter). What anatomical link explains this risk?",
    options: [
      "A short eye with a crowded anterior segment, where the lens thickens with age",
      "A cornea that is too steep, focusing the image in front of the retina and narrowing the angle",
      "A more pigmented trabecular meshwork in hyperopes, which clogs and eventually closes the angle",
      "Higher aqueous production in hyperopes, pushing the iris forward"
    ],
    explain: "Reasoning: 1) in hyperopia, rays focus behind the retina, most often because the eye is short (short axial length); 2) a short eye also has a crowded anterior segment: small corneal diameter, shallow anterior chamber, narrow angle; 3) the lens grows throughout life: in an already crowded eye, it pushes the iris forward and impedes aqueous flow through the pupil (pupillary block), which can close the angle. The AAO (2026) emphasizes these biometric factors; Inuit and East Asian populations are among the most affected.",
    why: [
      "Correct: short eye, crowded anterior segment, lens that grows with age.",
      "A cornea that is too steep and focuses in front of the retina describes myopia, not hyperopia.",
      "A heavily pigmented trabecular meshwork rather suggests pigment dispersion (iris pigment released into the aqueous), typical of young myopes with an open angle.",
      "Hyperopes do not produce more aqueous; the problem is too little space, not excess production."
    ]
  },
  "A-018": {
    stem: "A 30-year-old man with left optic neuritis (inflammation of the optic nerve, often associated with multiple sclerosis). On the swinging flashlight test, both pupils dilate when the light moves from the right eye to the left eye: this is a relative afferent pupillary defect (RAPD). A medical student claims that in ambient light, the left pupil will be larger. Your attending asks you whether this is true.",
    options: [
      "Yes: the left pupil is larger, because its eye captures less light",
      "No: the pupils stay equal, because each side drives both pupils",
      "Yes: the left pupil is larger, but only in bright light",
      "No: the left pupil is smaller, from denervation hypersensitivity"
    ],
    explain: "Reasoning: 1) the afferent pathway (retina → optic nerve) carries light information to the midbrain; thanks to crossings at the chiasm and in the midbrain, each side sends the signal to both Edinger-Westphal nuclei (the parasympathetic nuclei of CN III); 2) the efferent command (CN III → ciliary ganglion → short ciliary nerves → iris sphincter) is therefore the same for both pupils: light in one eye constricts both (direct and consensual reflexes); 3) in a left RAPD, the brain receives less signal when the left eye is lit, and both pupils dilate together; in ambient light, they remain equal. Anisocoria (pupils of different sizes) points to an efferent problem (CN III, Horner syndrome, a dilating drop, the iris), not an afferent defect.",
    why: [
      "Trap: a pupil's size does not depend on the light captured by its own eye, but on the common command sent to both pupils.",
      "Correct: common efferent command, so the pupils are equal despite the RAPD.",
      "Even in bright light, both pupils receive the same command and stay equal.",
      "Denervation hypersensitivity occurs with an efferent lesion (e.g. Adie pupil: a dilated pupil from ciliary ganglion damage); the optic nerve is afferent."
    ]
  },
  "A-019": {
    stem: "Your patient reads the 6/12 (20/40) line on the Snellen chart. Your attending, who is preparing a table for a research project, wants this acuity in logMAR (logarithm of the minimum angle of resolution). What value do you enter, and why is logMAR preferred in research?",
    options: [
      "0.5; the Snellen scale is already regular, logMAR merely inverts it",
      "0.2; logMAR mainly avoids having to test near vision",
      "1.0; a higher logMAR indicates better vision, easier to track",
      "0.3; lines of 0.1 log on a regular scale, which allows averaging"
    ],
    explain: "Reasoning: 1) 6/12 means the patient reads at 6 m what a normal eye reads at 12 m; 2) the minimum angle of resolution (MAR) is 12/6 = 2 minutes of arc, and the log of 2 ≈ 0.3; landmarks: 6/6 = 0.0; 6/12 = 0.3; 6/60 = 1.0; 3) on a logMAR chart (ETDRS type), each line has 5 letters and is worth 0.1 log, with regular spacing: you can compute means and differences, which is impossible with Snellen fractions. Caution: the higher the logMAR, the worse the vision.",
    why: [
      "0.5 corresponds to about 6/18; and it is the Snellen scale that is irregular.",
      "0.2 corresponds to about 6/9; the value of logMAR lies in the regularity of the scale, not in near vision.",
      "1.0 corresponds to 6/60 (20/200); and a higher logMAR means worse vision.",
      "Correct: 6/12 = 20/40 = logMAR 0.3, on a regular scale suited to calculations."
    ]
  },
  "A-020": {
    stem: "A 55-year-old woman who forgot her glasses: VA OD 6/24 (20/80). With the pinhole (a card pierced with small holes held in front of the eye), she reads 6/9 (20/30). Your attending asks what you conclude.",
    options: [
      "The loss is mainly due to macular or optic nerve disease",
      "The pinhole improves optical defects and macular disease equally",
      "The loss is mainly due to a refractive error, correctable with glasses",
      "The pinhole mainly corrects presbyopia, so near vision must be tested"
    ],
    explain: "Reasoning: 1) a small hole lets only central rays through, nearly parallel to the eye's axis: they form a sharp image on the retina even if the cornea or lens focus poorly; 2) if acuity improves, the cause is therefore mainly optical: myopia, hyperopia, astigmatism (unequal corneal curvature), sometimes an early cataract or an irregular cornea; 3) if acuity does not improve, or worsens, look for macular or optic nerve disease or a dense opacity. Here, the gain from 6/24 to 6/9 points to a refractive error: refraction is the next step.",
    why: [
      "Macular or optic nerve disease is not improved by the pinhole; vision may even worsen.",
      "The pinhole compensates for optical defects, not macular disease.",
      "Correct: improvement with pinhole indicates a mainly refractive cause.",
      "Acuity is measured at distance; presbyopia (age-related loss of near focusing) does not explain a distance loss."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "A-021": {
    stem: "A 70-year-old man with trauma to the right eye: the right pupil is fixed and dilated (torn iris sphincter). You are also worried about damage to the right optic nerve. Your attending asks whether you can still look for a relative afferent pupillary defect (RAPD) with the swinging flashlight test, and how.",
    options: [
      "Yes: by watching only the left pupil while alternating the light",
      "No: two reactive pupils are needed for the swinging flashlight test",
      "No: both pupils must first be dilated to make them comparable",
      "Yes: by watching the right pupil, which retains some reaction to light"
    ],
    explain: "Reasoning: 1) the swinging flashlight test compares the signal transmitted by each optic nerve: you light one eye for 2–3 s, then the other, while watching the pupils; 2) pupillary control is shared by both eyes (consensual reflex): the left pupil therefore reacts to light received by the right eye as well as by the left eye; 3) you watch only the left pupil: if it constricts well when the left eye is lit but dilates when the light moves to the right eye, the right optic nerve transmits less: right RAPD. This is the reverse RAPD.",
    why: [
      "Correct: the left pupil reflects the signal coming from each eye; you watch it while alternating.",
      "A single reactive pupil is enough, thanks to the consensual reflex.",
      "Dilating the pupils would abolish the reflex: the RAPD is sought before any dilation.",
      "The right pupil is fixed: it cannot show anything; you watch the reactive pupil."
    ]
  },
  "A-022": {
    stem: "A 35-year-old myopic man in whom your attending suspects pigment dispersion syndrome (iris pigment detaches and deposits inside the eye). They ask you to demonstrate the iris transillumination defects (thinned areas of the iris that let light through in spokes). Which slit-lamp illumination technique do you choose?",
    options: [
      "Sclerotic scatter: beam directed at the limbus, with the cornea conducting the light",
      "Specular reflection: beam and observation at equal angles, on the endothelium",
      "Broad diffuse beam, at low magnification, aimed straight at the iris",
      "Retroillumination: beam aligned with the axis, reflected back from the fundus"
    ],
    explain: "Reasoning: 1) in retroillumination, the beam is aligned almost with the eye's axis, through the pupil: light is reflected by the fundus (red reflex) and illuminates the iris from behind; 2) where the iris pigment epithelium is missing, light passes through: you see bright slit-like spokes; 3) each technique has its use: sclerotic scatter makes subtle corneal edema or opacity glow; specular reflection shows the endothelial mosaic and guttae; the diffuse beam gives an overview.",
    why: [
      "Sclerotic scatter is used to spot a subtle corneal opacity or edema, not the iris.",
      "Specular reflection shows the endothelium (cells, guttae), not iris transillumination.",
      "Lighting from the front hides precisely these defects: the iris must be lit from behind.",
      "Correct: light reflected from the fundus passes through the depigmented areas of the iris."
    ]
  },
  "A-023": {
    stem: "A 68-year-old woman, routine exam. You place a thin slit at about 60° at the temporal limbus: the dark space between the posterior corneal surface and the iris equals one quarter of the corneal thickness (CT). What Van Herick grade, and what do you do next?",
    options: [
      "Grade 4; open angle, no further testing",
      "Grade 2; confirm with gonioscopy",
      "Grade 1; laser iridotomy right away",
      "Grade 3; simple recheck in one year"
    ],
    explain: "Reasoning: 1) the Van Herick technique estimates the angle without a contact lens: thin slit at about 60° at the temporal limbus, comparing the dark space (peripheral anterior chamber) with corneal thickness; 2) grades: 4 = at least 1 CT; 3 = 1/4 to 1/2 CT; 2 = 1/4 CT; 1 = less than 1/4 CT; 0 = closed; 3) grade 2 or less suggests a narrow angle, to be confirmed with gonioscopy, the reference exam. One never treats on the basis of Van Herick alone.",
    why: [
      "Grade 4 requires a space at least equal to one corneal thickness; here it is only a quarter.",
      "Correct: 1/4 CT = grade 2, and grade 2 or less leads to gonioscopy.",
      "Grade 1 corresponds to less than a quarter; and no laser is done without gonioscopy.",
      "Grade 3 corresponds to more than a quarter (1/4 to 1/2 CT); here the space equals a quarter, so grade 2."
    ]
  },
  "A-024": {
    stem: "A 40-year-old man was hammering metal 2 hours ago: pain and tearing OD, small corneal wound. You paint the wound with concentrated fluorescein (an orange dye that turns fluorescent green under cobalt blue light): a pale, bright green stream flows from the wound. What does this sign mean, and what do you do?",
    options: [
      "Simple abrasion: pressure patch and recheck the next day",
      "Negative Seidel: watertight wound, IOP can be measured by applanation",
      "Positive Seidel: full-thickness wound, rigid shield and urgent repair",
      "Punctate keratitis: artificial tears and return to work the same day"
    ],
    explain: "Reasoning: 1) the Seidel test consists of painting the wound with concentrated fluorescein and observing it under cobalt blue light; 2) if aqueous humor leaks from the wound, it dilutes the dye, which turns pale bright green and flows like a stream: the test is positive; 3) a leak proves that the wound goes through the full thickness of the cornea (open globe): protect the eye with a rigid shield, avoid any pressure (no pressure patch, no tonometry) and arrange urgent surgical repair. A negative Seidel does not rule out a small wound that has self-sealed.",
    why: [
      "A pressure patch is contraindicated over a leaking wound: pressure could extrude the eye's contents.",
      "The pale green stream indicates a leak (positive test); and no tonometer is applied to an open globe.",
      "Correct: aqueous leak = full-thickness wound; with a hammer on metal, also look for an intraocular foreign body with CT.",
      "Punctate keratitis (small surface erosions) gives fixed green dots, without flow; that is not what is described."
    ]
  },
  "A-025": {
    stem: "A 50-year-old woman who had myopic LASIK 10 years ago (laser that removes stroma to flatten the cornea). Central pachymetry: 470 µm. On Goldmann applanation tonometry, IOP is 15 mmHg in both eyes, but the optic disc cupping is increasing. Your attending asks how to interpret this IOP.",
    options: [
      "Probably underestimated: thin, softened cornea, easier to flatten",
      "Probably overestimated: a thin cornea lets the prism push in further",
      "Reliable: LASIK only changes the epithelium, with no effect on the reading",
      "Reliable, provided a standard correction formula is applied"
    ],
    explain: "Reasoning: 1) the Goldmann tonometer measures the force needed to flatten a 3.06 mm disc of cornea; it was calibrated for a cornea of \"standard\" thickness (≈ 520 µm); 2) a thin or softened cornea (after LASIK, which removes stroma) resists less: the reading is lower than the true pressure (underestimation); a thick cornea gives the opposite; 3) the true IOP is therefore probably higher than 15 mmHg, which is consistent with a disc that is cupping; this is taken into account qualitatively, without a correction formula. Other errors: mires too thick → overestimation, too thin → underestimation; astigmatism > 3 D → rotate the prism; corneal edema → underestimation.",
    why: [
      "Correct: thin, softened cornea after LASIK = IOP underestimated; the true IOP is probably higher.",
      "Classic trap: it is the reverse; a thin cornea resists less, so the reading is too low.",
      "LASIK removes stroma under a flap, not just epithelium: the cornea becomes thinner and more flexible.",
      "No correction formula is reliable; IOP is interpreted taking the cornea into account, without mechanical calculation."
    ]
  },
  "A-026": {
    stem: "A 60-year-old man with a narrow angle on Van Herick. Your first gonioscopy, done in ambient light with a wide, bright slit, seems to show an open angle. Your attending asks you to repeat the exam with a 4-mirror lens (a small lens that allows indentation: gently pressing on the cornea to push aqueous into the angle), then to distinguish apposition (iris simply touching the trabecular meshwork) from peripheral anterior synechiae (PAS: scar-like adhesions of the iris to the angle). What do you do?",
    options: [
      "Dark room, short beam off the pupil; on indentation, synechiae open and apposition remains",
      "Bright light and a wide slit to see well; on indentation, apposition opens and synechiae remain",
      "After dilating the pupil to see better; on indentation, synechiae open and apposition remains",
      "Dark room, short beam off the pupil; on indentation, apposition opens and synechiae remain"
    ],
    explain: "Reasoning: 1) light entering the pupil causes miosis: the iris tightens and pulls away from the angle, which looks falsely open; so you work in a dark room, with a small short beam placed off the pupil (AAO 2026: dynamic gonioscopy in a dark room, small beam); 2) indentation pushes aqueous toward the periphery and displaces the iris posteriorly; 3) an iris that is merely apposed lifts away and reveals the trabecular meshwork, whereas a synechia, being stuck, stays in place. The distinction matters: synechiae (or elevated IOP) move a case from simple iridotrabecular contact (PACS) to established angle closure (PAC).",
    why: [
      "Right lighting technique, but the interpretation is reversed: it is the adherent synechiae that stay closed.",
      "Trap: bright light causes miosis, which falsely opens the angle; that is exactly the error of the first exam.",
      "Gonioscopy is done before dilating: dilation changes the angle and can even trigger an attack; and the interpretation is reversed.",
      "Correct: no induced miosis, then indentation separates apposition (which opens) from synechiae (which remain)."
    ]
  },
  "A-027": {
    stem: "Gonioscopy of the right eye of a 70-year-old woman: in the inferior quadrant, you see Schwalbe line and the trabecular meshwork, but neither the scleral spur nor the ciliary body band. The opening is estimated at about 20°. What Shaffer grade do you assign?",
    options: [
      "Grade 4: wide-open angle, closure impossible",
      "Grade 3: open angle, closure unlikely",
      "Grade 2: narrow angle, closure possible",
      "Grade 1: very narrow angle, closure probable"
    ],
    explain: "Reasoning: 1) identify the most posterior visible structure (\"I Can't See Til Schwalbe\": Iris root, Ciliary body band, Scleral spur, Trabecular meshwork, Schwalbe line); 2) Shaffer: 4 = 35–45°, ciliary body band visible; 3 = 20–35°, spur visible; 2 = about 20°, trabecular meshwork visible; 1 = 10° or less, Schwalbe only; 0 = closed; 3) here, the most posterior structure seen is the trabecular meshwork, without the spur: grade 2, a narrow angle in which closure is possible.",
    why: [
      "Grade 4 requires seeing the ciliary body band, absent here.",
      "Grade 3 requires seeing the scleral spur, absent here.",
      "Correct: trabecular meshwork visible without the spur, about 20° = grade 2.",
      "Grade 1 corresponds to 10° or less, with only Schwalbe line; here the trabecular meshwork is visible."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "A-028": {
    stem: "A 67-year-old man with advanced glaucoma in both eyes holds a class 5 (passenger car) driver's licence. Binocular VA 6/9 (20/30). He asks whether he can keep driving. According to SAAQ (Société de l'assurance automobile du Québec) standards, what must your attending check?",
    options: [
      "Only VA: glaucoma automatically suspends the licence if VA is below 6/6",
      "A binocular field (Esterman): ≥ 100° horizontally, ≥ 30° on each side",
      "A 24-2 field in each eye, with an MD better than −6 dB in each eye",
      "Nothing more: a binocular VA of 6/9 is sufficient on its own for class 5"
    ],
    explain: "Reasoning: 1) for class 5, the SAAQ requires a binocular VA of at least 6/15 (20/50): he exceeds it; 2) it also requires a continuous binocular visual field of at least 100° along the horizontal, including at least 30° on each side of the vertical meridian, and 10° above and 20° below fixation; 3) advanced glaucoma can fail the field despite good VA: when a field abnormality is known, the SAAQ requires a signed binocular field, of the Esterman type (test done with both eyes open, designed for driving) or Goldmann III/4e. Glaucoma does not lead to automatic suspension; the physician may, however, recommend stopping or a restriction (e.g. at night).",
    why: [
      "Glaucoma does not automatically suspend the licence, and the VA threshold for class 5 is 6/15 (20/50), not 6/6.",
      "Correct: with advanced glaucoma, the binocular field is decisive, in addition to a VA of at least 6/15.",
      "The SAAQ judges the binocular field (both eyes open), not the MD (mean deviation of the field) of each eye separately.",
      "VA is not enough: advanced glaucoma can constrict the field despite good central vision."
    ]
  },
  "A-029": {
    stem: "This Humphrey 24-2 visual field diagram (total deviation map, OD) belongs to a 74-year-old man with a dense cataract; his pattern deviation map is almost normal. IOP 16 mmHg, healthy disc. How do you interpret this field?",
    options: [
      "Early glaucomatous arcuate defect, warranting treatment",
      "Generalized depression from media opacity, with no localized defect",
      "Chiasmal lesion, to be confirmed with brain MRI",
      "Unreliable test from excessive false positives, not to be interpreted"
    ],
    explain: "Reasoning: 1) the total deviation (TD) map compares each point with age-matched normals: a media opacity (cataract, small pupil) depresses all points, hence diffuse depression; 2) the pattern deviation (PD) map removes this general depression to keep only localized defects; 3) TD depressed everywhere + normal PD = generalized depression due to cataract, with no localized glaucomatous defect. If the PD showed an arc, you would suspect glaucoma hidden behind the cataract.",
    why: [
      "A glaucomatous defect is localized (arc, nasal step) and persists on the PD; here the PD is almost normal.",
      "Correct: the cataract, a media opacity (transparent structures that light passes through), depresses the whole field (TD); the PD, which removes this global depression, stays normal.",
      "A chiasmal lesion gives a defect respecting the vertical meridian that persists on the PD; nothing of the sort here.",
      "A patient who presses without a stimulus (false positives) makes the field look falsely too good, not diffusely depressed."
    ]
  },
  "A-030": {
    stem: "This visual field diagram (grayscale, OD) belongs to a 52-year-old man referred for \"normal-tension glaucoma\" (glaucomatous damage despite normal IOP): IOP 15 mmHg, somewhat pale discs. The left eye's field shows a similar, mirror-image defect. What do you conclude?",
    options: [
      "Normal-tension glaucoma: the defect respects the horizontal meridian",
      "Advanced normal-tension glaucoma: lower IOP by about 30 %",
      "Corrective lens artifact: repeat the field before concluding",
      "Chiasmal lesion: the defect respects the vertical meridian, order an MRI"
    ],
    explain: "Reasoning: 1) retinal fibers are arranged on either side of a horizontal raphe: glaucoma, which damages these bundles at the disc, produces defects that stop at the horizontal meridian (arcs, nasal step); 2) at the chiasm, fibers from the nasal retina of each eye (which see the temporal field) cross: compression at that site (e.g. pituitary adenoma, a benign tumor of that gland) removes the temporal field of both eyes, with a sharp border on the vertical meridian; 3) a temporal defect in both eyes respecting the vertical meridian, with pallor more marked than cupping, is not glaucoma: order a brain MRI and a neuro-ophthalmology assessment.",
    why: [
      "Trap: here it is the vertical meridian that is respected; glaucoma respects the horizontal meridian.",
      "Lowering IOP is useless if the cause is chiasmal compression; it must be found first.",
      "A corrective lens artifact rather gives a ring of peripheral loss, not a mirror-image temporal defect in both eyes.",
      "Correct: temporal defect in both eyes bounded by the vertical meridian = chiasm until proven otherwise; MRI."
    ]
  },
  "A-031": {
    stem: "This optic disc diagram (OD) belongs to a 66-year-old woman followed for glaucoma. Your attending asks you to name the two signs that worry them, and the visual field defect you expect.",
    options: [
      "Inferior notch and disc hemorrhage; superior arcuate defect",
      "Superior notch and disc hemorrhage; inferior arcuate defect",
      "Inferior notch and peripapillary atrophy; inferior arcuate defect",
      "Inferior pallor and disc edema; superior altitudinal defect"
    ],
    explain: "Reasoning: 1) a notch is a localized thinning of the neuroretinal rim, here at the inferior pole; a disc hemorrhage (Drance hemorrhage) is a small flame-shaped hemorrhage on the disc margin; 2) fibers passing through the inferior pole of the disc come from the inferior retina, which sees the superior field (the image is inverted on the retina): a superior arcuate defect is expected; 3) a disc hemorrhage is a risk factor for progression (AAO 2026): it warrants closer follow-up and a review of the target IOP.",
    why: [
      "Correct: inferior notch and hemorrhage → superior arcuate defect; the hemorrhage signals a risk of progression.",
      "Wrong pole: the signs are inferior, and inferior damage gives a superior defect.",
      "No marked peripapillary atrophy here, and inferior damage gives a superior defect, not an inferior one.",
      "The rim is thinned, not pale, and the disc is not swollen (edema); the hemorrhage sits at the edge of a notch."
    ]
  },
  "A-032": {
    stem: "This peripapillary retinal nerve fiber layer OCT diagram (RNFL: TSNIT curve and sectors) belongs to the OD of a 59-year-old glaucoma suspect. His 24-2 field is normal. Your attending asks where the damage is and which test to add.",
    options: [
      "Superior thinning; repeat the same 24-2 in a year, with no other test",
      "Inferior thinning; add a 30-2 field, wider in the periphery",
      "Inferior thinning; add a 10-2 field and macular OCT",
      "Temporal thinning; papillomacular bundle involved, no other test"
    ],
    explain: "Reasoning: 1) on the TSNIT (Temporal–Superior–Nasal–Inferior–Temporal) curve, the inferior hump is depressed and the inferior sector is outside normal limits: inferior thinning, the most common site in glaucoma (inferotemporal); 2) the inferotemporal pole of the disc receives fibers from the inferior macula (macular vulnerability zone), which sees the superior central field; 3) the 24-2 has only a few points spaced 6° apart centrally and can miss these small paracentral defects: add a 10-2 field (central, tightly spaced points) and macular ganglion cell OCT, as recommended by the AAO (2026).",
    why: [
      "Wrong pole; and a normal 24-2 does not rule out a small central defect that the OCT predicts.",
      "Right pole, but the 30-2 adds periphery, whereas the likely defect is central (paracentral).",
      "Correct: inferotemporal damage → possible superior paracentral defect, best seen on the 10-2 and macular OCT.",
      "The diagram shows inferior damage, not temporal; the papillomacular bundle is spared for a long time in glaucoma."
    ]
  },
  "A-033": {
    stem: "This RNFL OCT diagram (OD) belongs to a 26-year-old student, myopic at −8.00 D, referred because the device shows sectors in red. IOP 15 mmHg, normal visual field, tilted (oblique) disc with a wide crescent of atrophy. How do you interpret this result?",
    options: [
      "Early glaucoma confirmed by OCT: start drops",
      "Probable \"red disease\": red without disease, follow over time",
      "Probable \"green disease\": a false negative masking damage",
      "Compressive optic neuropathy: urgent brain MRI"
    ],
    explain: "Reasoning: 1) OCT compares RNFL thickness with a normative database, made up mostly of eyes without high myopia; 2) in a very myopic, long eye with a tilted disc, the fiber bundles are displaced and the device segments poorly: it may color sectors red that are normal for that eye; 3) with normal IOP, a normal field and a typical myopic disc, this is probably a false positive (\"red disease\": red without disease): document a baseline and follow over time rather than treat. The decision rests on disc + field + change over time, not on a color.",
    why: [
      "An isolated red color is not enough to diagnose glaucoma; it must agree with the disc and the field.",
      "Correct: high myopia and a tilted disc skew the normative comparison; follow over time.",
      "\"Green disease\" is the opposite: a falsely normal (green) OCT despite damage, for example with edema or an epiretinal membrane (a thin membrane on the retinal surface).",
      "Nothing suggests compression (no pallor, normal field); the appearance is that of a myopic disc."
    ]
  },
  "A-034": {
    stem: "This corneal topography diagram (axial curvature map: warm colors = steep zones) belongs to the OD of a 45-year-old man whose vision is slowly declining. Pachymetry shows a central cornea of normal thickness. What is the most likely diagnosis?",
    options: [
      "Regular with-the-rule astigmatism: vertical, symmetric bowtie",
      "Keratoconus: inferior steepening, asymmetric bowtie with skewed axes",
      "Regular against-the-rule astigmatism: horizontal, symmetric bowtie",
      "Pellucid marginal degeneration: \"crab-claw\" steepening"
    ],
    explain: "Reasoning: 1) on an axial curvature map, warm colors show steep zones; a symmetric vertical bowtie = with-the-rule astigmatism, horizontal = against-the-rule astigmatism (regular, a simple optical defect); 2) an ectasia (a thinned cornea that bulges) gives irregular steepening: keratoconus (central or inferior paracentral cornea that thins and bulges into a cone) produces an asymmetric bowtie, steeper inferiorly, with skewed axes; 3) pellucid marginal degeneration (band-shaped thinning 1–2 mm from the inferior limbus) produces a \"crab claw\": inferior peripheral steepening that curves up into two arms, with against-the-rule astigmatism centrally. A central cornea of normal thickness supports this.",
    why: [
      "With-the-rule astigmatism gives a symmetric vertical bowtie, not an arc of inferior steepening.",
      "Keratoconus thins and steepens the central or inferior paracentral cornea; here the center is of normal thickness and the steepening is peripheral, claw-shaped.",
      "There is indeed against-the-rule astigmatism centrally, but with inferior peripheral steepening: this is not simple regular astigmatism.",
      "Correct: inferior peripheral \"crab-claw\" steepening with against-the-rule astigmatism = pellucid marginal degeneration."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "A-035": {
    stem: "This cross-sectional corneal diagram belongs to a 72-year-old woman whose vision is blurred mainly in the morning, then improves during the day. Which layer is diseased, and why is vision worse on waking?",
    options: [
      "Epithelium; the closed lids dry it out overnight",
      "Stroma; scar collagen is laid down during sleep",
      "Endothelium; at night, tears evaporate less and the cornea swells",
      "Bowman layer; it tears on waking when the lids open"
    ],
    explain: "Reasoning: 1) the diagram shows guttae, small excrescences of Descemet membrane beneath the endothelium, typical of Fuchs endothelial dystrophy (an inherited disease in which endothelial cells are gradually lost), and a stroma thickened by edema; 2) the diseased endothelium pumps water out of the stroma less effectively, so the stroma swells and loses its transparency; 3) at night, with the lids closed, tears no longer evaporate: being less concentrated, they draw less water out of the cornea by osmosis, hence maximal edema on waking; during the day, evaporation concentrates the tears and \"dries\" the cornea a little. Endothelial density is measured by specular microscopy, where guttae appear as dark areas.",
    why: [
      "At night, the epithelium is not dried out; on the contrary, excess water is what clouds the cornea.",
      "A scar does not vary over the day; morning blur that improves suggests edema.",
      "Correct: failing endothelium (guttae); less evaporation at night, hence more edema on waking.",
      "Bowman layer does not tear; pain on waking would rather suggest recurrent erosion (poorly attached epithelium that peels off when the lids open)."
    ]
  },
  "A-036": {
    stem: "This gonioscopy diagram belongs to the OD of a 76-year-old woman in whom the slit lamp shows whitish \"target-pattern\" deposits on the anterior lens capsule; IOP 28 mmHg. What sign do you see in the angle?",
    options: [
      "Sampaolesi line: wavy pigment deposited anterior to Schwalbe line",
      "Angle new vessels: fine red vessels crossing the scleral spur",
      "Angle recession: abnormally wide ciliary body band, torn iris processes",
      "Peripheral anterior synechiae: iris tented and stuck onto the trabecular meshwork"
    ],
    explain: "Reasoning: 1) pseudoexfoliation (PXF) is an age-related disease in which white fibrillar material deposits on the lens and in the angle; friction of the iris over these deposits also releases pigment; 2) this pigment and material clog the trabecular meshwork, which becomes irregularly pigmented, and IOP rises; 3) some of the pigment deposits as a wavy line anterior to Schwalbe line: this is the Sampaolesi line. It can also be seen, less often, in pigment dispersion.",
    why: [
      "Correct: wavy pigment anterior to Schwalbe; with the target-pattern deposits on the lens, this is pseudoexfoliation.",
      "Angle new vessels (abnormal vessels that grow when the retina lacks oxygen, e.g. diabetes) cross the spur; the diagram does not show any.",
      "Angle recession (a tear in the ciliary body after blunt trauma) widens the ciliary body band; here the sign is a pigment deposit anterior to Schwalbe.",
      "Synechiae would hide the angle structures; here the angle is open and its structures are visible."
    ]
  },

  // ---- data/quiz-b.js ----
  "B-001": {
    stem: "A 58-year-old woman with burning eyes and vision that fluctuates at the screen; OSDI-6 score of 7. According to TFOS DEWS III (2025), which of these results is enough, on its own, to confirm dry eye disease?",
    options: [
      "Schirmer I without anesthesia at 8 mm in 5 minutes",
      "Osmolarity of 302 mOsm/L OD and 298 mOsm/L OS",
      "Non-invasive tear breakup time (NIBUT) of 6 seconds",
      "Four fluorescein spots on the cornea"
    ],
    explain: "**What it is**: according to TFOS DEWS III, dry eye is a **symptomatic** disease in which the tear film loses its balance (instability, hyperosmolarity, inflammation). **Why it matters**: the diagnosis requires symptoms (OSDI-6 ≥ 4) **and a single sign** among: NIBUT < 10 s, osmolarity ≥ 308 mOsm/L in one eye or an inter-eye difference > 8 mOsm/L, > 5 corneal fluorescein spots, > 9 conjunctival lissamine green spots (a dye for damaged cells) or lid margin staining. **What to do**: here, the NIBUT of 6 s confirms the diagnosis; then look for the drivers (meibomian glands, aqueous deficiency, toxic drops).",
    why: [
      "The Schirmer test (a paper strip slipped under the lid that measures tears produced in 5 minutes) is not one of the DEWS III signs; less than 5 mm would indicate severe aqueous deficiency.",
      "Osmolarity measures tear concentration: ≥ 308 mOsm/L in one eye or an inter-eye difference > 8 mOsm/L is required; here, both values are below the threshold and the difference is only 4.",
      "Correct: a NIBUT (time until the film breaks up, measured without dye) < 10 s is enough in a symptomatic patient.",
      "Fluorescein stains damaged surface cells; the threshold is more than 5 corneal spots, so 4 spots are not enough."
    ]
  },
  "B-002": {
    stem: "A 71-year-old woman, upper blepharoplasty 6 months ago, gritty sensation mostly on waking. This fluorescein diagram under cobalt blue light shows the distribution of her corneal epithelial lesions. Which mechanism best explains this distribution?",
    options: [
      "Nocturnal exposure from incomplete lid closure (lagophthalmos)",
      "Superior limbic keratoconjunctivitis associated with thyroid disease",
      "Severe aqueous deficiency from early Sjögren syndrome",
      "A foreign body lodged under the upper lid rubbing the cornea"
    ],
    explain: "**What it is**: superficial punctate keratitis consists of small dots of damaged epithelium that take up fluorescein; here, they occupy the inferior third. **Why it matters**: the location of the dots points to the cause (inferior = meibomian gland dysfunction, exposure or drop toxicity; interpalpebral = aqueous deficiency; superior = contact lenses or superior limbic keratoconjunctivitis), and symptoms worse on waking after a blepharoplasty (cosmetic eyelid surgery) point to lagophthalmos, lids that no longer close completely at night. **What to do**: lubricating ointment at bedtime, preservative-free tears during the day, and assess lid closure (correction if severe).",
    why: [
      "Correct: inferior involvement and symptoms on waking fit lagophthalmos.",
      "Superior limbic keratoconjunctivitis (inflammation of the upper bulbar conjunctiva, often thyroid-related) stains the **superior** part.",
      "Sjögren syndrome (an autoimmune disease that dries out the lacrimal and salivary glands) gives aqueous deficiency with mostly **interpalpebral** staining and symptoms worse at the end of the day, unrelated to surgery.",
      "A foreign body stuck under the upper lid leaves **vertical** linear marks in the upper half of the cornea, with each blink."
    ]
  },
  "B-003": {
    stem: "A 52-year-old man with ocular rosacea: thickened lid margins, plugged meibomian orifices and toothpaste-like secretions. In this meibomian gland dysfunction, which layer of the tear film is mainly deficient, and where does it normally come from?",
    options: [
      "The aqueous phase, produced by the accessory glands of Krause and Wolfring",
      "The secretory mucins MUC5AC, produced by goblet cells",
      "The MUC1/4/16 glycocalyx, produced by the main lacrimal gland",
      "The lipid layer, produced by the meibomian glands of the tarsus"
    ],
    explain: "**What it is**: the meibomian glands, housed in the tarsal plate of the lids, secrete the lipid layer that covers the film and slows evaporation; rosacea (an inflammatory skin disease of the face) often plugs them. **Why it matters**: without good oil, the film evaporates, becomes unstable and hyperosmolar — the most common cause of dry eye. **What to do**: warm compresses for 5–10 min and lid massage 1–2 times daily, lid margin hygiene, low-dose oral doxycycline (an antibiotic given here for its anti-inflammatory effect) for rosacea; omega-3s are not a baseline treatment (DREAM trial: no better than an olive oil placebo).",
    why: [
      "The accessory glands of Krause and Wolfring (small conjunctival glands) do produce aqueous, but that is not the layer affected in meibomian gland dysfunction.",
      "Goblet cells (conjunctival cells that secrete mucus) do produce MUC5AC, but that is not the main deficiency here.",
      "The glycocalyx (mucins anchored to the cell surface) comes from the corneal and conjunctival epithelium, not from the lacrimal gland.",
      "Correct: lipid layer of meibomian origin."
    ]
  },
  "B-004": {
    stem: "A 24-year-old man who wears soft contact lenses overnight, pain and photophobia for 2 days; VA 6/30. White 3 mm infiltrate located 2 mm from the center, anterior chamber reaction 2+. This fluorescein diagram under cobalt blue light shows the appearance of the lesion. What is the appropriate management?",
    options: [
      "Moxifloxacin 0.5 % four times daily, stop the lenses and recheck in one week",
      "Scraping for smears and cultures, then fortified drops alternating hourly",
      "Tobramycin-dexamethasone right away to limit scarring",
      "Remove the lenses, preservative-free artificial tears, recheck as needed"
    ],
    explain: "**What it is**: a white infiltrate with an ulcer that takes up fluorescein and an anterior chamber reaction in a contact lens wearer is bacterial keratitis until proven otherwise. **Why it matters**: the **1-2-3** rule (reaction ≥ 1+, infiltrate ≥ 2 mm, ≤ 3 mm from the center) identifies the sight-threatening ulcer, and it is met here. **What to do**: scraping for smears and cultures (including lenses and case), then fortified drops (custom-compounded concentrated antibiotics): vancomycin 25 mg/mL or cefazolin 50 mg/mL against gram-positives and tobramycin 14 mg/mL against gram-negatives, including Pseudomonas (an aggressive bacterium typical of contact lens wearers), alternating hourly, day and night, for 24 to 48 h, with daily follow-up.",
    why: [
      "Moxifloxacin (an antibiotic of the fluoroquinolone family) is useful, but 4 times daily and a one-week follow-up are insufficient for this ulcer.",
      "Correct: the 1-2-3 rule is met.",
      "Tobramycin-dexamethasone combines an antibiotic and a steroid; a steroid from the outset, before the infection is controlled, is to be avoided (SCUT trial, a randomized study of steroids in bacterial keratitis: no overall benefit).",
      "Removing the lenses is necessary, but an infiltrate with an anterior chamber reaction requires intensive antibiotics, not just tears."
    ]
  },
  "B-005": {
    stem: "You are with an attending in an outpatient clinic outside a hospital center. A 60-year-old man has a 4 mm central ulcer with a hypopyon. What is the best management?",
    options: [
      "Take samples if possible, start hourly moxifloxacin and send the patient to a center the same day",
      "Prescribe fortified vancomycin and tobramycin at the neighborhood pharmacy and see the patient again in a week",
      "Give no antibiotic until culture results are back, so as not to skew identification of the organism",
      "Start a topical steroid while waiting for a place at a center, to limit stromal melting"
    ],
    explain: "**What it is**: a central ulcer with a hypopyon (white blood cells layered at the bottom of the anterior chamber) is severe bacterial keratitis. **Why it matters**: it requires fortified drops (custom-compounded concentrated antibiotics) and daily follow-up; in Québec, these drops come from hospital pharmacies, hence transfer to the ophthalmology emergency service of a center (CHUM, HMR, MUHC, Jewish General Hospital, CHU de Québec…). **What to do**: take samples if possible, start a fourth-generation fluoroquinolone (a broad-spectrum antibiotic, such as moxifloxacin 0.5 %) hourly without delay, with a loading dose (one drop every 5–15 min for the first hour), and refer the same day.",
    why: [
      "Correct: immediate treatment and same-day transfer to a center that compounds fortified drops.",
      "Fortified drops are compounded in hospital pharmacies, and one-week follow-up is dangerous for a severe ulcer.",
      "Samples are taken before treating, but the antibiotic is never delayed while awaiting cultures: the ulcer can progress and perforate.",
      "A topical steroid before the infection is controlled can worsen melting (destruction of the stroma); the SCUT trial, a randomized study of steroids in bacterial keratitis, showed no overall benefit."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "B-006": {
    stem: "A 23-year-old man who sleeps in his soft contact lenses and rinses the case with tap water; ulcer with mucopurulent discharge spreading rapidly, 36 h after the pain began. Why does overnight lens wear lead to this type of keratitis, often due to Pseudomonas aeruginosa?",
    options: [
      "The lens reduces corneal sensation, which delays consultation until perforation",
      "An allergy to the solutions destroys Bowman layer, exposing the stroma to bacteria",
      "Bacteria arrive through the bloodstream and settle in the avascular stroma",
      "Hypoxia cracks the epithelium, where bacteria from the lens and case biofilm adhere"
    ],
    explain: "**What it is**: at night, the lens reduces the oxygen reaching the cornea; the hypoxic epithelium thins and cracks, and bacteria from the biofilm (a slimy layer of microbes on the lens and case) adhere to it. **Why it matters**: Pseudomonas secretes proteases (enzymes that digest proteins) that destroy the stroma, so the ulcer can spread very fast, sometimes to perforation. **What to do**: cultures (including lenses and case), intensive antibiotic covering Pseudomonas (fortified drops or hourly fluoroquinolone), and teaching: never tap water, never sleep in lenses.",
    why: [
      "Lenses may slightly reduce sensation, but the main mechanism is hypoxia with bacterial adherence.",
      "Reactions to solutions rather cause toxic keratitis or giant papillary conjunctivitis (large papillae under the lid), not destruction of Bowman layer.",
      "Bacterial keratitis comes from the surface, not the blood: the cornea is avascular.",
      "Correct: hypoxia, an epithelial break and biofilm."
    ]
  },
  "B-007": {
    stem: "A 50-year-old man with culture-positive central bacterial keratitis, improving on moxifloxacin 0.5 % after 72 h. A colleague suggests adding difluprednate (a potent topical steroid) and corneal cross-linking (CXL) to reduce scarring. What did the SCUT and SCUT II trials show?",
    options: [
      "SCUT: clear overall benefit of topical steroids on final VA, for all ulcers",
      "SCUT II: added CXL clearly reduced scar size at 12 months",
      "SCUT II: no benefit of difluprednate, with or without CXL, on VA or scarring",
      "SCUT: steroids especially useful when the organism isolated is Nocardia"
    ],
    explain: "**What it is**: SCUT (2012) and SCUT II (2026) are randomized trials that tested, in bacterial keratitis, adding a topical steroid to the antibiotic, and in SCUT II adding CXL (riboflavin activated by UVA that stiffens the collagen). **Why it matters**: SCUT II showed **no benefit** of difluprednate 0.05 %, alone or with CXL, on VA and scarring at 6 and 12 months (analysis possibly underpowered at 12 months), and SCUT had shown no overall benefit, except perhaps for a severe central ulcer treated early. **What to do**: the antibiotic remains the treatment; a steroid is considered only once the infection is controlled, and never with Nocardia.",
    why: [
      "SCUT showed no overall benefit; a possible effect was limited to severe central ulcers treated early.",
      "In SCUT II, added CXL neither reduced scarring nor improved VA.",
      "Correct: the main result of SCUT II.",
      "It is the reverse: Nocardia (a rare filamentous bacterium, often after soil-contaminated trauma) is precisely the case in which SCUT advises against steroids."
    ]
  },
  "B-008": {
    stem: "A 29-year-old woman who rinses her soft contact lenses with tap water and swims with them in. Intense pain for 3 weeks despite a topical antiviral prescribed for \"herpetic keratitis\". Slit lamp: subtle irregular epithelium and linear infiltrates along the corneal nerves; the pain seems out of proportion to the exam. Which diagnosis should be considered first?",
    options: [
      "Acyclovir-resistant HSV epithelial keratitis",
      "Acanthamoeba keratitis",
      "Early Pseudomonas bacterial keratitis",
      "Post-herpetic neurotrophic keratopathy"
    ],
    explain: "**What it is**: Acanthamoeba is a water-borne ameba (tap water, pools, lakes) that infects the cornea mainly in contact lens wearers; infiltrates along the nerves (radial keratoneuritis or perineuritis) are typical. **Why it matters**: pain **out of proportion** to the exam is the warning sign, and the diagnosis is often delayed because it is first mistaken for herpes. **What to do**: scraping for culture and PCR (a test that detects the organism's DNA), ± confocal microscopy (a microscope that shows cysts within the cornea without a biopsy), compounded biguanides (antiseptics such as PHMB or chlorhexidine), and never prescribe topical anesthetics for the pain.",
    why: [
      "HSV epithelial keratitis forms a dendrite (a branching ulcer with swellings at the ends of the branches) and reduces corneal sensation; it does not explain infiltrates along the nerves with disproportionate pain.",
      "Correct: lenses and water, disproportionate pain and radial keratoneuritis.",
      "Pseudomonas (an aggressive bacterium in contact lens wearers) gives a suppurative infiltrate that enlarges within 24 to 48 h, not subtle involvement over 3 weeks.",
      "Neurotrophic keratopathy (a cornea that has lost its innervation and heals poorly) is not very painful, precisely because the cornea is insensate."
    ]
  },
  "B-009": {
    stem: "A 54-year-old farmer from Montérégie scratched his eye on a branch 10 days ago. A walk-in clinic prescribed tobramycin-dexamethasone (an antibiotic plus a steroid). Greyish infiltrate with feathery edges surrounded by small satellite lesions. What is the most appropriate management?",
    options: [
      "Continue the steroid to limit scarring and add oral voriconazole",
      "Switch to topical voriconazole 1 %, superior to natamycin for Fusarium",
      "Double the frequency of tobramycin-dexamethasone and recheck in a week",
      "Stop the steroid, scrape for fungal cultures and start natamycin 5 %"
    ],
    explain: "**What it is**: vegetative trauma followed by an infiltrate with feathery edges and satellite lesions suggests filamentous fungal keratitis, often due to Fusarium. **Why it matters**: the steroid weakens local immune defense and lets the fungus grow deeper; it must be **stopped**. **What to do**: scraping for smears and fungal cultures, then natamycin 5 % (a topical antifungal), which outperformed voriconazole 1 % in the randomized MUTT I trial, especially for Fusarium; MUTT II showed no benefit of adding oral voriconazole.",
    why: [
      "The steroid worsens fungal keratitis, and adding oral voriconazole (an azole antifungal) showed no benefit in MUTT II.",
      "MUTT I showed the reverse: natamycin does better than topical voriconazole, especially for Fusarium.",
      "Increasing the steroid accelerates fungal progression and delays proper treatment.",
      "Correct: stop the steroid, take samples, then natamycin."
    ]
  },
  "B-010": {
    stem: "PCR of a corneal scraping confirms Acanthamoeba keratitis in a 31-year-old contact lens wearer. Which first-line topical treatment is appropriate, and how is it usually obtained in Canada?",
    options: [
      "Biguanide (PHMB 0.02 % or chlorhexidine 0.02 %), ± propamidine, as a compounded preparation",
      "Commercial natamycin 5 % hourly, the reference antifungal in atypical keratitis",
      "Moxifloxacin 0.5 % hourly, since the ameba is sensitive to fluoroquinolones",
      "Oral acyclovir 400 mg 5 times daily for 10 days, then a preventive dose"
    ],
    explain: "**What it is**: biguanides (PHMB, or polyhexamethylene biguanide, and chlorhexidine) are antiseptics that kill the active form of the ameba and its cysts, a highly resistant dormant form. **Why it matters**: in Canada, they are made in pharmacies (compounded preparations), sometimes with propamidine (another antiseptic active against the ameba); polihexanide 0.08 % (Akantior), approved by the European Commission in 2024 as monotherapy, has Canadian availability that should be checked. **What to do**: intensive then prolonged treatment, often over several months, with close follow-up at a cornea center and pain control without topical anesthetics.",
    why: [
      "Correct: compounded biguanide, ± propamidine.",
      "Natamycin is an antifungal, useful against filamentous fungi; it does not treat the ameba.",
      "Fluoroquinolones are antibiotics; they do not kill Acanthamoeba, let alone its cysts.",
      "Acyclovir is an antiviral against herpes; it is often the treatment wrongly given when Acanthamoeba is mistaken for HSV."
    ]
  },
  "B-011": {
    stem: "A 45-year-old man with a red eye, tearing and slightly blurred vision for 3 days; he often gets cold sores. This fluorescein diagram under cobalt blue light shows his epithelial lesion. An ED physician prescribed prednisolone drops. What is the appropriate management?",
    options: [
      "Continue prednisolone and add an oral antiviral to block replication",
      "Stop prednisolone; acyclovir 400 mg PO 5×/day or valacyclovir 500 mg PO TID",
      "Hourly moxifloxacin, because a linear ulceration first suggests a bacterium",
      "Artificial tears alone and recheck in a month, because the lesion heals on its own"
    ],
    explain: "**What it is**: a dendrite is a branching epithelial ulcer, with swellings at the ends of the branches (terminal bulbs), that takes up fluorescein; it is HSV (herpes simplex virus) epithelial keratitis, hence active viral replication. **Why it matters**: steroids stimulate replication and can turn the dendrite into a geographic ulcer (a large ulcer with scalloped edges), hence the danger of prednisolone here. **What to do**: stop the steroid and give an antiviral for 7 to 10 days (acyclovir 400 mg PO 5×/day or valacyclovir 500 mg PO TID; or trifluridine 1 % drops 9×/day, toxic to the epithelium if prolonged), ± debridement (gentle removal of the infected epithelium), then check corneal sensation, often decreased after recurrences.",
    why: [
      "Steroids are contraindicated in active epithelial disease: even with an antiviral, they promote a geographic ulcer.",
      "Correct: stop the steroid and give a treatment-dose antiviral for 7 to 10 days.",
      "A branching ulceration with terminal bulbs is viral; an antibiotic such as moxifloxacin does not treat HSV.",
      "Some dendrites heal on their own, but the antiviral speeds healing and limits spread; treat as soon as it is diagnosed."
    ]
  },
  "B-012": {
    stem: "A 74-year-old woman with a painful vesicular rash on the forehead and tip of the nose for 2 days. This fluorescein diagram under cobalt blue light shows her epithelial lesion. Which interpretation and management are correct?",
    options: [
      "HSV dendrite: topical trifluridine alone, without an oral antiviral",
      "Zoster pseudodendrite: acyclovir 400 mg PO 5 times daily × 7 days",
      "Zoster pseudodendrite: valacyclovir 1 g TID × 7 days right away",
      "Amebic keratitis: hourly compounded biguanide"
    ],
    explain: "**What it is**: herpes zoster ophthalmicus is reactivation of varicella-zoster virus in V1; its pseudodendrite is an elevated plaque of swollen cells, without ulceration or terminal bulbs, that stains poorly with fluorescein. **Why it matters**: vesicles on the tip of the nose (Hutchinson sign, the territory of the nasociliary nerve, which also supplies the eye) predict ocular involvement, and mistaking the pseudodendrite for an HSV dendrite leads to the wrong treatment. **What to do**: valacyclovir 1 g TID × 7 days (or acyclovir 800 mg 5×/day, double the herpes simplex dose), ideally within 72 h and adjusted to renal function, a complete exam (keratitis, uveitis or intraocular inflammation, IOP) and a reminder about the recombinant vaccine (Shingrix), recommended from age 50 by NACI (National Advisory Committee on Immunization).",
    why: [
      "The HSV dendrite is ulcerated, with terminal bulbs, and stains well with fluorescein; here, the rash and the lesion's appearance point to zoster.",
      "The diagnosis is right, but 400 mg 5 times daily is the herpes simplex dose; zoster requires a higher dose (acyclovir 800 mg 5×/day or valacyclovir 1 g TID).",
      "Correct: zoster pseudodendrite, high-dose oral antiviral.",
      "Amebic keratitis (infection by a water-borne ameba, treated with antiseptics such as biguanides) occurs mainly in contact lens wearers exposed to water, without a skin rash."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "B-013": {
    stem: "A 41-year-old woman with a history of herpetic epithelial keratitis. For one week, blurred vision: whitish stromal opacity with edema, intact epithelium (no fluorescein uptake), no ulcer. Why is this condition treated with a topical steroid, when steroids are avoided with a dendrite?",
    options: [
      "It is mainly an immune reaction against viral antigens, without significant active replication",
      "The virus replicates mainly in the stroma, and the steroid destroys it directly there",
      "The steroid replaces the antiviral, which is no longer needed once the epithelium has closed",
      "The steroid regenerates corneal nerves destroyed by previous herpetic recurrences"
    ],
    explain: "**What it is**: HSV immune stromal keratitis is inflammation of the stroma triggered by viral antigens remaining in the cornea, whereas the dendrite is an active infection of the epithelium. **Why it matters**: the HEDS trial (Herpetic Eye Disease Study) showed that a topical steroid, given with an antiviral, speeds resolution of stromal disease; without an antiviral, it can reactivate an epithelial infection. **What to do**: prednisolone acetate 1 % with a slow taper, under oral antiviral cover (for example acyclovir 400 mg BID or valacyclovir 500 mg daily), and monitor IOP, because steroids can raise the pressure in the eye.",
    why: [
      "Correct: an immune mechanism, hence the steroid, always with an antiviral.",
      "Steroids do not kill the virus; they calm inflammation and may even promote replication if the antiviral is omitted.",
      "An oral antiviral is kept throughout the steroid course: without it, an epithelial recurrence (dendrite) can occur.",
      "Steroids do not regenerate nerves; loss of sensation after recurrences rather leads to neurotrophic keratopathy (an insensate cornea that heals poorly)."
    ]
  },
  "B-014": {
    stem: "A 66-year-old man with herpes zoster ophthalmicus with keratitis, treated with valacyclovir 1 g TID for 7 days. He asks whether he should continue an antiviral long term. What did the ZEDS trial (Zoster Eye Disease Study, 2025) show?",
    options: [
      "A significant benefit on the primary outcome from 12 months, with valacyclovir 1 g TID",
      "Primary outcome not significant at 12 months, but less eye disease at 18 months",
      "No effect on flares or neuropathic pain, hence abandonment of suppression",
      "Acyclovir 400 mg BID for 12 months reduces ocular zoster recurrences by about 45 %"
    ],
    explain: "**What it is**: ZEDS compared valacyclovir **1 g daily for 1 year** with placebo after herpes zoster ophthalmicus. **Why it matters**: the primary outcome at 12 months was not significant (HR 0.77; p = 0.09), but at 18 months there was 27 % less new or worsening eye disease (HR 0.73; p = 0.03), fewer multiple flares and less use of medication for neuropathic pain (nerve pain that persists after shingles). **What to do**: the authors recommend adding this suppression; it is individualized according to renal function and adherence.",
    why: [
      "The primary outcome at 12 months did not reach significance (p = 0.09), and the dose studied was 1 g once daily, not TID.",
      "Correct: ZEDS results at 12 and 18 months.",
      "It is the reverse: fewer multiple flares and less neuropathic pain medication in the valacyclovir group.",
      "That figure comes from HEDS (Herpetic Eye Disease Study) and concerns herpes simplex (HSV), not zoster."
    ]
  },
  "B-015": {
    stem: "A 16-year-old with eczema and seasonal allergies who often rubs his eyes and does not wear contact lenses. His myopia and astigmatism increase at each visit and his corrected VA is declining. This topography diagram shows his axial curvature map. What is the most likely diagnosis?",
    options: [
      "Regular with-the-rule astigmatism",
      "Pellucid marginal degeneration",
      "Rigid lens-induced corneal warpage",
      "Progressive keratoconus"
    ],
    explain: "**What it is**: keratoconus is progressive thinning of the cornea, which bulges into a cone, usually below the center; on the axial curvature map (warm colors = steeper zone), there is inferior steepening with an asymmetric bowtie and skewed axes. **Why it matters**: young age, eye rubbing, atopy and increasing astigmatism with loss of corrected VA are typical, and early diagnosis allows the cornea to be stabilized before significant vision loss. **What to do**: tomography (Scheimpflug: anterior and posterior elevation, pachymetry map, thinnest point), stop the rubbing and refer without delay for corneal cross-linking (CXL).",
    why: [
      "Regular with-the-rule astigmatism gives a symmetric vertical bowtie, without isolated inferior steepening.",
      "Pellucid marginal degeneration (band-shaped thinning 1–2 mm from the inferior limbus) gives a \"crab-claw\" pattern with against-the-rule astigmatism.",
      "Rigid lens warpage (a cornea molded by a poorly fitted lens) requires lens wear and regresses when lenses are stopped; this young man does not wear any.",
      "Correct: asymmetric inferior steepening in a young atopic patient who rubs his eyes."
    ]
  },
  "B-016": {
    stem: "A 14-year-old boy with newly diagnosed keratoconus OD (typical topography and tomography), corrected VA 6/9. His mother prefers to wait: \"He'll stop rubbing his eyes first, then we'll see in a year whether it progresses.\" According to the 2nd Global Consensus on Keratoconus (2025), what is the best recommendation?",
    options: [
      "Wait 6 to 12 months to document progression before any cross-linking",
      "Prescribe vitamin D supplements and reassess at the annual visit",
      "Offer cross-linking (CXL) now, while also stopping the rubbing",
      "Perform prophylactic epi-on CXL on the left eye, even without keratoconus"
    ],
    explain: "**What it is**: corneal cross-linking (CXL) combines riboflavin and UVA light to create bonds between collagen fibers and stiffen the cornea, which slows progression. **Why it matters**: in children, keratoconus often progresses quickly; the 2nd Global Consensus (2025) recommends CXL **at diagnosis, without waiting for documented progression**, and specifies that eye rubbing must stop but that this must **never delay CXL**. **What to do**: refer to a center that offers CXL (Dresden protocol 3 mW/cm² × 30 min or accelerated 9 mW/cm² × 10 min); in Québec, access and public coverage vary and should be checked locally.",
    why: [
      "Waiting for progression is precisely the approach to avoid in children: the 2025 consensus recommends CXL at diagnosis.",
      "Supplements (vitamin D, etc.) are only adjuncts according to the consensus; they neither replace nor delay CXL.",
      "Correct: CXL without delay, with cessation of rubbing in parallel.",
      "The consensus advises against prophylactic epi-on CXL (done without removing the epithelium) without progression, even more so on an eye without keratoconus."
    ]
  },
  "B-017": {
    stem: "A 27-year-old woman with keratoconus. At the slit lamp, under cobalt blue light, a brown-green ring partially surrounds the base of the cone. What does this ring represent and where is it located?",
    options: [
      "Copper deposited in Descemet membrane in the periphery",
      "Iron deposited in the basal layers of the epithelium",
      "Folds in the posterior stroma that disappear with pressure",
      "A Bowman layer scar after hydrops"
    ],
    explain: "**What it is**: the Fleischer ring is a deposit of **iron** in the basal epithelium around the base of the cone, best seen under cobalt blue light. **Why it matters**: it is a classic slit-lamp sign of keratoconus, along with Vogt striae (fine vertical lines in the posterior stroma that disappear with gentle pressure on the eye); externally, look for Munson sign (V-shaped lower lid on downgaze) and Rizzuti sign (a conical light reflex near the nasal limbus when light is shone from the temporal side). **What to do**: document these signs, then confirm and follow the disease with topography and tomography.",
    why: [
      "Copper in peripheral Descemet forms the Kayser-Fleischer ring of Wilson disease (a genetic disease in which copper accumulates in the liver and brain).",
      "Correct: Fleischer ring, iron in the basal epithelium.",
      "These are Vogt striae, another sign of keratoconus; they are lines, not a colored ring.",
      "Bowman scars are whitish opacities; acute hydrops (a rupture of Descemet) rather leaves a central stromal scar."
    ]
  },
  "B-018": {
    stem: "A 23-year-old man with advanced keratoconus and Down syndrome who rubs his eyes a lot. Suddenly, vision loss and tearing OD: milky opacity and thickening of the central cornea, without infiltrate or discharge, anterior chamber of normal depth. What mechanism explains this picture?",
    options: [
      "A tear in Descemet membrane lets aqueous humor soak into the stroma",
      "A deep bacterial infection melts the stroma at the apex of the cone",
      "A full-thickness perforation lets aqueous humor leak out of the eye",
      "An associated Fuchs dystrophy suddenly decompensates the central endothelium"
    ],
    explain: "**What it is**: acute corneal hydrops occurs when Descemet membrane, stretched at the apex of the cone, tears; aqueous humor enters the stroma, which swells and turns white within hours. **Why it matters**: it is dramatic, but it is not a perforation (the Seidel test, in which concentrated fluorescein reveals an aqueous leak, is negative), and the edema usually regresses over a few weeks to a few months, leaving a scar. **What to do**: conservative treatment (hypertonic 5 % saline, cycloplegic for pain, ± topical steroid, protection against rubbing), intracameral gas injection to be discussed at a center to speed resorption, then a contact lens or graft depending on the scar.",
    why: [
      "Correct: rupture of Descemet and soaking of the stroma (hydrops).",
      "An infection would give an infiltrate, an anterior chamber reaction and often discharge, absent here.",
      "A perforation would give a shallow anterior chamber and a positive Seidel (leak visible with fluorescein); in hydrops, the cornea remains watertight.",
      "Fuchs dystrophy (progressive loss of endothelial cells, mostly after age 50) gives gradual edema with guttae, not a sudden opacity in a young person."
    ]
  },
  "B-019": {
    stem: "A 67-year-old woman with no prior eye surgery, blurred vision with halos on waking that clears by the end of the day; her mother had a corneal transplant. This cross-sectional corneal diagram shows what is seen in her deep layers at the slit lamp. What is the most likely diagnosis?",
    options: [
      "Epithelial basement membrane dystrophy (map-dot-fingerprint)",
      "Pseudophakic bullous keratopathy",
      "Fuchs endothelial corneal dystrophy",
      "Lattice corneal dystrophy"
    ],
    explain: "**What it is**: Fuchs dystrophy is an inherited disease in which the endothelium (the single cell layer that pumps water out of the cornea) becomes sparse and deposits excrescences, guttae, on Descemet, which appear as dark droplets. **Why it matters**: when too few cells remain (generally fewer than 400–500 cells/mm²), the pump can no longer keep up and the stroma swells, especially on waking; specular microscopy shows guttae as dark areas and pachymetry tracks the thickening. **What to do**: hypertonic 5 % saline at first, then endothelial keratoplasty (DMEK, which replaces only Descemet and the endothelium) when vision becomes limiting.",
    why: [
      "Epithelial basement membrane dystrophy affects the surface (maps, dots, fingerprints) and causes erosions, not guttae or stromal edema.",
      "Pseudophakic bullous keratopathy (corneal edema after cataract surgery that damaged the endothelium) requires prior surgery, absent here.",
      "Correct: guttae and stromal edema worse on waking, with a family history.",
      "Lattice dystrophy (amyloid deposits in branching lines in the stroma) causes erosions and stromal opacities, not guttae."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "B-020": {
    stem: "A patient with Fuchs dystrophy asks why her vision is blurrier on waking and improves over the afternoon. Which explanation is correct?",
    options: [
      "At night, intraocular pressure rises and pushes water into the cornea",
      "At night, the guttae swell with water and then empty during the day",
      "During the day, light stimulates endothelial pumps that rest at night",
      "With the lids closed, tears no longer evaporate: the cornea retains more water"
    ],
    explain: "**What it is**: the cornea stays clear thanks to the endothelial pump (Na⁺/K⁺-ATPase) and to evaporation of the tear film, which makes tears slightly hypertonic and draws water out of the cornea. **Why it matters**: with the lids closed at night, evaporation stops; an already deficient pump can no longer keep up, so edema is maximal on waking and then decreases as the film evaporates. **What to do**: hypertonic saline (NaCl 5 %) drops or ointment, or warm air from a hair dryer held at arm's length in the morning; morning symptoms that last longer and longer point toward endothelial keratoplasty.",
    why: [
      "IOP varies a little at night, but this is not the cause of the morning edema of Fuchs (a very high IOP can, however, worsen edema).",
      "Guttae are excrescences of Descemet; they do not fill with water.",
      "The endothelial pump works day and night; what changes is evaporation of the film.",
      "Correct: without evaporation at night, edema accumulates."
    ]
  },
  "B-021": {
    stem: "A 70-year-old man with symptomatic Fuchs dystrophy (morning edema) and cataract. A combined procedure is planned: phacoemulsification and DMEK (Descemet membrane endothelial keratoplasty). How should the refractive target of the intraocular lens be chosen?",
    options: [
      "Aim for emmetropia, because DMEK does not change the refraction",
      "Aim for slight myopia, because DMEK induces a hyperopic shift",
      "Aim for slight hyperopia, because DMEK makes the cornea steeper",
      "Aim for high myopia, to read without glasses after the graft"
    ],
    explain: "**What it is**: after DMEK, the deswelling cornea mainly changes the curvature of its posterior surface, producing a hyperopic shift in the refraction. **Why it matters**: aiming for emmetropia often leaves the patient slightly hyperopic and dissatisfied; moreover, keratometry measured on an edematous cornea is less reliable. **What to do**: aim for slight myopia in a combined procedure, according to the usual target of the center's cornea team.",
    why: [
      "Trap: DMEK does change the refraction, with a hyperopic shift.",
      "Correct: a slightly myopic target to offset the hyperopic shift.",
      "The expected shift is hyperopic; aiming for hyperopia would make it worse.",
      "Deliberate high myopia would create anisometropia (a large, poorly tolerated difference in refraction between the eyes); that is not the standard strategy."
    ]
  },
  "B-022": {
    stem: "A 32-year-old soft contact lens wearer with pain and tearing since this morning after sleeping in his lenses. No infiltrate or anterior chamber reaction. This fluorescein diagram under cobalt blue light shows the lesion. What is the most appropriate management?",
    options: [
      "Topical fluoroquinolone without a patch, stop the lenses and recheck in 24 h",
      "Occlusive patch for 24 h with antibiotic ointment, then resume lenses",
      "Tetracaine prescribed for pain and artificial tears as needed",
      "Tobramycin-dexamethasone four times daily to calm the inflammation"
    ],
    explain: "**What it is**: a corneal abrasion is a loss of epithelium that takes up fluorescein; in a contact lens wearer, it is a portal of entry for Pseudomonas, a bacterium that can destroy the cornea within 24 to 48 h. **Why it matters**: an occlusive patch creates a warm, moist, oxygen-poor environment that favors this infection, and a topical anesthetic used repeatedly blocks epithelial healing and can melt the cornea. **What to do**: topical fluoroquinolone (covers Pseudomonas), **never a patch**, no lenses until fully healed, oral analgesia ± a cycloplegic (a drop that relaxes the ciliary muscle and relieves pain), and recheck in 24 h.",
    why: [
      "Correct: Pseudomonas coverage, no patch, follow-up in 24 h.",
      "Classic trap: the patch favors Pseudomonas infection in contact lens wearers, and lens wear must wait until healing.",
      "Topical anesthetics (tetracaine) are never prescribed: repeated use delays healing and can lead to severe toxic keratopathy.",
      "Steroids slow healing and promote infection; an abrasion does not need them."
    ]
  },
  "B-023": {
    stem: "A 35-year-old woman woken several times this month by sharp pain on opening her eyes, with tearing for a few hours. Four months ago, her baby scratched her cornea with a fingernail. This morning: small area of irregular epithelium taking up fluorescein in the inferior third. What is the most likely diagnosis?",
    options: [
      "Recurrent herpes simplex epithelial keratitis",
      "Dry eye from meibomian gland dysfunction",
      "Early-stage Acanthamoeba keratitis",
      "Post-traumatic recurrent corneal erosion"
    ],
    explain: "**What it is**: in recurrent corneal erosion, the epithelium adheres poorly to its basement membrane after sharp trauma (fingernail, paper, branch) or basement membrane dystrophy; at night, the lid sticks to the epithelium and tears it off when the eyes open. **Why it matters**: the typical history (pain on waking, fingernail scratch weeks or months earlier) makes the diagnosis, even if the exam is almost normal later in the day. **What to do**: lubricating ointment at bedtime for several months (often hypertonic, NaCl 5 %), treat the acute episode like an abrasion, then, if recurrences persist, a bandage contact lens, anterior stromal puncture, debridement or phototherapeutic keratectomy (PTK, a laser that smooths the surface).",
    why: [
      "Herpetic keratitis forms a dendrite (a branching ulcer with terminal bulbs) and is related neither to waking nor to fingernail trauma.",
      "Dry eye causes burning and grittiness, worse at the end of the day, not sharp pain on waking after trauma.",
      "Acanthamoeba keratitis (a water-borne ameba) affects mainly contact lens wearers, with continuous, increasing pain.",
      "Correct: pain on waking after a fingernail scratch."
    ]
  },
  "B-024": {
    stem: "A 66-year-old woman referred for cataract surgery; keratometry varies from one measurement to the next and topography shows irregular astigmatism. This fluorescein diagram under cobalt blue light shows the appearance of her corneal surface. What should be done before the final biometry?",
    options: [
      "Take the current biometry and implant a toric lens for the astigmatism",
      "Prescribe a topical steroid for two weeks to smooth the epithelium",
      "Treat the surface (superficial keratectomy), then remeasure once stable",
      "Abandon phacoemulsification in favor of a penetrating keratoplasty"
    ],
    explain: "**What it is**: epithelial basement membrane dystrophy (EBMD, or map-dot-fingerprint) lifts the epithelium in places; these elevated areas do not hold fluorescein and appear dark (negative staining). **Why it matters**: this irregular surface skews keratometry and topography, and therefore the calculation of the lens power and axis, especially for a toric lens, with a risk of refractive surprise. **What to do**: treat the surface first (debridement or superficial keratectomy ± PTK), wait a few weeks for stabilization, then repeat biometry and topography before choosing the lens.",
    why: [
      "Trap: on an irregular surface, the measured astigmatism is wrong, and a toric lens would be miscalculated and misaligned.",
      "Steroids do not correct an abnormal basement membrane; removing the abnormal epithelium is what regularizes the surface.",
      "Correct: the surface first, the measurements second.",
      "Penetrating keratoplasty (replacing the full thickness of the cornea) is disproportionate for superficial disease that is simple to treat."
    ]
  },
  "B-025": {
    stem: "A 48-year-old fisherman from the Îles-de-la-Madeleine with a fleshy triangular lesion of the nasal conjunctiva whose apex extends 2 mm onto the cornea. What is the most likely diagnosis?",
    options: [
      "Inflamed pinguecula",
      "Nasal pterygium",
      "Ocular surface squamous neoplasia (OSSN)",
      "Pseudopterygium after a burn"
    ],
    explain: "**What it is**: a pterygium is a triangular fibrovascular growth of the conjunctiva, almost always nasal, that **crosses the limbus** and advances onto the cornea; it is related to ultraviolet light (outdoor work, reflection off water). **Why it matters**: it can induce astigmatism and threaten the visual axis, whereas a pinguecula (a small yellowish elevation of the conjunctiva, with the same cause) stays on the conjunctiva. **What to do**: UV protection (sunglasses, hat), artificial tears for irritation, and surgery if it advances toward the visual axis, induces astigmatism, limits eye movements or is very bothersome.",
    why: [
      "A pinguecula does not cross the limbus; it stays on the conjunctiva and can become inflamed (pingueculitis).",
      "Correct: a triangular nasal lesion crossing the limbus in a UV-exposed worker.",
      "OSSN (ocular surface squamous neoplasia, an epithelial tumor) is rather gelatinous or whitish with large feeder vessels, and grows faster.",
      "A pseudopterygium (a fold of conjunctiva stuck onto an already damaged cornea) follows a burn, ulcer or trauma, can occur anywhere, and a probe passes under its neck."
    ]
  },
  "B-026": {
    stem: "A 52-year-old woman with a nasal pterygium extending 4 mm onto the cornea, approaching the visual axis and inducing increasing astigmatism. Which surgical technique best reduces the risk of recurrence?",
    options: [
      "Excision leaving bare sclera, with nothing else",
      "Phototherapeutic laser keratectomy on the pterygium head",
      "Cautery of the feeder vessels without excising the lesion",
      "Excision with a healthy conjunctival autograft, glued or sutured"
    ],
    explain: "**What it is**: a conjunctival autograft covers the bared sclera with a flap of healthy conjunctiva harvested from the patient, usually superiorly. **Why it matters**: excision alone with bare sclera often recurs, sometimes more aggressively than the original lesion; the autograft, ± mitomycin C (a drug that inhibits fibrous healing), markedly reduces this risk. **What to do**: operate when the pterygium threatens the visual axis, induces astigmatism or is very bothersome, then protect against UV and treat postoperative inflammation.",
    why: [
      "Bare sclera alone often recurs; it is no longer done without a graft or adjunct.",
      "PTK (a laser that smooths the corneal surface) does not remove the fibrovascular conjunctival tissue and does not prevent recurrence.",
      "Cauterizing the vessels without excising the lesion does not make it regress and does not correct the astigmatism.",
      "Correct: excision with conjunctival autograft."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "B-027": {
    stem: "A 63-year-old kidney transplant recipient on immunosuppressants, with a gelatinous lesion at the temporal limbus, whitish on the surface, crossed by large feeder vessels, that has grown over 3 months. What is the most appropriate management?",
    options: [
      "Suspect ocular surface neoplasia (OSSN): high-resolution OCT and biopsy at a center",
      "Atypical pterygium: artificial tears and recheck in a year to judge growth",
      "Pingueculitis: a short course of topical steroid, then UV protection",
      "Nodular viral conjunctivitis: cold compresses and tears, resolution in 2 weeks"
    ],
    explain: "**What it is**: ocular surface squamous neoplasia (OSSN) encompasses dysplasia and carcinoma of the conjunctival and corneal epithelium; it is gelatinous, papillomatous or whitish (leukoplakia), with feeder vessels. **Why it matters**: an atypical location (temporal or outside the palpebral fissure), rapid growth and immunosuppression (transplant, HIV) are red flags that distinguish it from pterygium. **What to do**: refer to a cornea center for high-resolution anterior segment OCT (thickened, hyperreflective epithelium) and confirmation by biopsy or complete excision with cryotherapy, or topical chemotherapy as appropriate.",
    why: [
      "Correct: red flags for OSSN, tissue confirmation is needed.",
      "A pterygium is nasal and triangular within the palpebral fissure; waiting a year with these red flags delays a cancer diagnosis.",
      "Pingueculitis (inflammation of a pinguecula) is a small yellowish elevation that does not grow quickly; a steroid would mask a tumor.",
      "Viral conjunctivitis gives a diffusely red eye with discharge, not a vascularized limbal mass that grows over 3 months."
    ]
  },
  "B-028": {
    stem: "A 44-year-old man, penetrating keratoplasty (PK) for keratoconus 3 years ago; he stopped his steroid drops 2 months ago. For 2 days: redness, photophobia and blurrier vision. This slit-lamp diagram shows what is seen on the posterior surface of the graft. What is the management?",
    options: [
      "Artificial tears and recheck at the usual appointment in 3 months",
      "Oral antiviral alone, because any redness after a graft is herpetic",
      "Intensive topical steroid (prednisolone 1 % hourly) the same day",
      "Urgent repeat penetrating keratoplasty before the end of the week"
    ],
    explain: "**What it is**: endothelial rejection is an immune attack on the donor endothelium; it shows as keratic precipitates (clumps of white blood cells stuck on the endothelium), sometimes lined up as a Khodadoust line, and graft edema. **Why it matters**: each episode destroys endothelial cells that do not regenerate, and rejection treated late leads to graft failure; **RSVP** symptoms (Redness, Sensitivity to light, Vision loss, Pain) require a same-day visit. **What to do**: prednisolone acetate 1 % hourly ± periocular or oral steroid depending on severity, IOP check, then a very slow taper; remind the patient never to stop the drops without advice.",
    why: [
      "Untreated rejection destroys the graft endothelium; RSVP symptoms require same-day treatment.",
      "Herpes can cause redness after a graft, especially if it was done for herpetic keratitis; here, keratic precipitates after stopping the steroid point to rejection.",
      "Correct: endothelial rejection, intensive steroid the same day.",
      "Rejection caught early often responds to steroids; regrafting is done only if the graft stays decompensated despite treatment."
    ]
  },
  "B-029": {
    stem: "During DMEK (Descemet membrane endothelial keratoplasty) for Fuchs dystrophy, the surgeon unfolds in the anterior chamber a graft that spontaneously curls up like a scroll. Which layers does this graft contain?",
    options: [
      "The full thickness of the cornea, from epithelium to endothelium",
      "The epithelium, Bowman layer and anterior stroma",
      "The posterior stroma, Descemet membrane and endothelium",
      "Only Descemet membrane and the endothelium"
    ],
    explain: "**What it is**: DMEK replaces only Descemet membrane (10–15 µm in adults, elastic, hence the scroll) and the diseased endothelium; DSAEK (Descemet stripping automated endothelial keratoplasty) adds a thin layer of posterior stroma, and PK replaces the full thickness. **Why it matters**: the less tissue grafted, the faster the visual recovery and the lower the risk of rejection (order PK > DSAEK > DMEK), at the cost of more delicate surgery. **What to do**: after DMEK, the patient lies supine so that the air or gas bubble presses the graft against the stroma, and detachment is monitored, which may require reinjecting air (rebubbling).",
    why: [
      "Full thickness corresponds to penetrating keratoplasty (PK).",
      "These anterior layers correspond to an anterior lamellar graft, used when the endothelium is healthy.",
      "Adding posterior stroma corresponds to DSAEK, whose thicker graft does not scroll.",
      "Correct: Descemet and endothelium only."
    ]
  },
  "B-030": {
    stem: "A 72-year-old woman, DMEK for Fuchs 7 days ago. The cornea has cleared superiorly, but stromal edema persists in the inferior third; the air bubble has resorbed. No keratic precipitates or significant inflammatory reaction. Anterior segment OCT shows a fluid space between the graft and the stroma inferiorly. What is the diagnosis and next step?",
    options: [
      "Early endothelial rejection: prednisolone 1 % hourly and recheck in a week",
      "Partial graft detachment: reinjection of air or gas (rebubbling)",
      "Primary graft failure: immediate repeat DMEK with another donor",
      "Reactivated herpetic keratitis: oral valacyclovir and stop the steroid"
    ],
    explain: "**What it is**: after DMEK, the graft stays attached to the stroma thanks to the air or gas bubble of the first few days; if it partly detaches, the unattached area has no endothelial pump and stays edematous, and anterior segment OCT (cross-sectional imaging of the front of the eye) shows the space between graft and stroma. **Why it matters**: this is the most common complication of DMEK; a small detachment can reattach on its own, but an extensive or progressing detachment compromises the graft. **What to do**: reinject air or gas into the anterior chamber (rebubbling), supine positioning, then check attachment; rejection, by contrast, would produce keratic precipitates.",
    why: [
      "Rejection is rare in the first week and would produce keratic precipitates with inflammation; here the OCT shows a mechanical cause.",
      "Correct: partial detachment, the graft is reattached with a bubble.",
      "Primary failure (a graft that never clears) gives diffuse edema from the outset; here, the cornea clears where the graft is attached.",
      "Herpetic keratitis would produce a dendrite or inflammation, absent here, and stopping the steroid would risk rejection."
    ]
  },
  "B-031": {
    stem: "A 38-year-old worker got fresh mortar (lime) in his right eye on a construction site 15 minutes ago; he arrives in the ED holding his eye. What is the first action?",
    options: [
      "Instill an anesthetic and irrigate immediately until a pH of 7.0–7.5",
      "Measure each eye's VA before touching the eye, for the medicolegal record",
      "Neutralize the alkali with an acidic solution to return to neutral pH faster",
      "Do the full slit-lamp exam to grade severity before treating"
    ],
    explain: "**What it is**: a chemical burn, especially from an alkali such as the lime in mortar or concrete, is the emergency in which every minute counts, because the product keeps penetrating as long as it remains on the eye. **Why it matters**: irrigation comes before everything, including VA and the exam, and you never neutralize with an acid (the reaction releases heat and worsens the burn). **What to do**: topical anesthetic, copious irrigation (at least 30 minutes or several liters) with lid eversion and removal of particles, until a pH of 7.0–7.5 rechecked 5–10 minutes after stopping; only then VA, the exam and grading, without forgetting the CNESST paperwork for a workplace injury.",
    why: [
      "Correct: irrigate first, measure afterward.",
      "Classic trap: VA can wait; every minute without irrigation lets the product penetrate further.",
      "Never neutralize with an acid: the reaction releases heat and adds a thermal burn; irrigate with a neutral solution.",
      "Grading is done after irrigation; examining first delays the eye-saving maneuver."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "B-032": {
    stem: "Two workers present with chemical burns: one was splashed with sulfuric acid (car battery), the other with sodium hydroxide (oven cleaner). Why is the alkali burn usually more severe?",
    options: [
      "Alkali is always more concentrated than acids sold to the public",
      "Alkali coagulates surface proteins, which holds the product in the epithelium",
      "Alkali saponifies membrane lipids and penetrates deeply and quickly",
      "Alkali releases strong heat on contact with tears, which burns mainly the epithelium"
    ],
    explain: "**What it is**: alkali dissolves the lipids of cell membranes (saponification) and causes liquefactive necrosis, which lets it pass through the cornea into the anterior chamber, iris, lens and trabecular meshwork. **Why it matters**: acid, by contrast, coagulates surface proteins, forming a barrier that limits its penetration (exception: hydrofluoric acid, which penetrates like an alkali); alkali therefore poses a greater threat to the limbus, transparency and IOP. **What to do**: the same immediate management for all agents (irrigation to neutral pH), but with alkali, anticipate limbal ischemia, an IOP rise and stromal melting.",
    why: [
      "Severity comes from the mechanism of action, not just concentration: at equal concentration, alkali penetrates more.",
      "That is the mechanism of acid: protein coagulation forms a barrier that limits penetration.",
      "Correct: saponification and liquefactive necrosis.",
      "Heat is not the main mechanism; chemical destruction of membranes is what allows deep penetration."
    ]
  },
  "B-033": {
    stem: "After 40 minutes of irrigation, the pH of an alkali-burned eye is 7.2. You note a white, avascular area at the limbus over 4 clock hours. Why is this limbal ischemia the key prognostic factor?",
    options: [
      "The limbus contains the glands that produce the lipid layer of the tears",
      "The limbus contains the endothelium, the only layer that pumps water out of the cornea",
      "The limbus contains the goblet cells that secrete tear mucus",
      "The limbus houses the stem cells that renew the corneal epithelium"
    ],
    explain: "**What it is**: corneal epithelial stem cells live at the limbus, in the palisades of Vogt; a white avascular zone means this limbus is ischemic and its stem cells are threatened. **Why it matters**: the more extensive the limbal ischemia (Roper-Hall and Dua classifications), the higher the risk of limbal stem cell deficiency: the conjunctiva then invades the cornea, which becomes vascularized and opaque, with a persistent epithelial defect. **What to do**: intensive topical steroid for ≤ 10–14 days then a rapid taper (risk of melting), oral ascorbate 1–2 g/day, doxycycline 100 mg BID, cycloplegic, preservative-free topical antibiotic, and early amniotic membrane from grade II.",
    why: [
      "The meibomian glands, which produce the lipid layer, are in the lids, not at the limbus.",
      "The endothelium lines the posterior surface of the whole cornea; it is not specific to the limbus.",
      "Goblet cells (mucus cells) are in the conjunctiva, mostly in the fornices; their loss worsens dryness after a burn, but does not determine the corneal prognosis.",
      "Correct: limbal stem cells of the palisades of Vogt."
    ]
  },
  "B-034": {
    stem: "A 69-year-old man, herpes zoster ophthalmicus one year ago. Central epithelial defect with smooth, rolled edges for 4 weeks, without infiltrate, despite preservative-free tears; corneal sensation is absent. Which option is appropriate at this stage?",
    options: [
      "Cenegermin 0.002 % (Oxervate), 1 drop 6 times daily every 2 h for 8 weeks",
      "Tetracaine drops as needed to relieve discomfort during healing",
      "Prednisolone 1 % hourly to speed closure of the epithelial defect",
      "Hourly moxifloxacin day and night, then fortified drops if no response"
    ],
    explain: "**What it is**: neurotrophic keratopathy occurs when the corneal nerves (V1) are destroyed, for example after zoster or herpes; without these nerves, the epithelium heals poorly, hence a persistent epithelial defect with smooth, rolled edges (moderate stage), which can progress to ulceration, melting and perforation (severe stage). **Why it matters**: cenegermin (Oxervate, recombinant human nerve growth factor) is approved by Health Canada for the **moderate or severe form in adults**, at 1 drop 6 times daily every 2 h for 8 weeks. **What to do**: stop toxic drops, lubricate without preservatives, discuss cenegermin with the cornea team, and consider amniotic membrane or tarsorrhaphy (partial closure of the lids) if the defect persists.",
    why: [
      "Correct: approved indication (persistent epithelial defect, moderate form) and dosing.",
      "A repeated topical anesthetic is toxic to the epithelium and would worsen the defect; besides, this patient has no sensation left.",
      "Intensive steroids slow epithelial healing and increase the risk of melting; they do not treat neurotrophic keratopathy.",
      "Without an infiltrate, there is no infection to treat intensively; an infrequent prophylactic antibiotic is enough if needed."
    ]
  },
  "B-035": {
    stem: "A 66-year-old woman with rheumatoid arthritis. Very painful red eye, crescent-shaped peripheral ulcer hugging the limbus with marked stromal thinning, and adjacent scleritis. Which diagnosis and management are most appropriate?",
    options: [
      "Staphylococcal marginal keratitis: lid hygiene and a weak topical steroid",
      "PUK (peripheral ulcerative keratitis): systemic workup, urgent immunosuppression",
      "Terrien marginal degeneration: observation and correction of astigmatism",
      "Mooren ulcer: no workup, since no systemic disease is associated"
    ],
    explain: "**What it is**: peripheral ulcerative keratitis (PUK) is an inflammatory melt of the peripheral stroma, crescent-shaped against the limbus, often associated with systemic vasculitis (rheumatoid arthritis, granulomatosis with polyangiitis). **Why it matters**: it can perforate and sometimes signals a life-threatening active vasculitis; by contrast, marginal keratitis (an immune reaction to staphylococcal toxins from blepharitis) leaves a clear zone between the infiltrate and the limbus, with little thinning. **What to do**: systemic workup (including ANCA, the antibodies of vasculitis, and rheumatoid factor), urgent systemic immunosuppression with rheumatology, surface protection and close follow-up of the perforation risk.",
    why: [
      "Marginal keratitis leaves a clear interval with the limbus, with little thinning and no scleritis; here, the thinning and scleritis point to PUK.",
      "Correct: PUK associated with rheumatoid arthritis, systemic treatment.",
      "Terrien degeneration (slow, minimally inflammatory, minimally painful marginal thinning) does not give a painful red eye with scleritis.",
      "Mooren ulcer (painful peripheral melt without systemic disease) is a diagnosis of exclusion; with rheumatoid arthritis, look for systemic PUK."
    ]
  },
  "B-036": {
    stem: "A 46-year-old man with high, increasing against-the-rule astigmatism on refraction, without eye rubbing or atopy. This topography diagram shows his axial curvature map. What is the diagnosis, and which slit-lamp or pachymetry finding confirms it?",
    options: [
      "Keratoconus with inferior steepening; maximal thinning at the apex of the cone",
      "Regular against-the-rule astigmatism; normal corneal thickness throughout",
      "Pellucid marginal degeneration; band of thinning near the inferior limbus",
      "Terrien marginal degeneration; superior thinning with lipid deposits"
    ],
    explain: "**What it is**: pellucid marginal degeneration is an ectasia (a thinned cornea that deforms) in which the thinning forms an inferior band 1–2 mm from the limbus; the cornea bulges just above it, hence the \"crab-claw\" image with against-the-rule astigmatism on the axial map. **Why it matters**: in keratoconus, maximal thinning coincides with the apex of the cone, which is more central, whereas here the steepest zone lies above the thinnest zone; tomography (pachymetry map) makes the distinction, and any ectasia contraindicates laser refractive surgery. **What to do**: confirm with tomography, correct with glasses or contact lenses (often scleral), and discuss CXL at a specialized center if the ectasia progresses.",
    why: [
      "In keratoconus, the most marked thinning coincides with the apex of the cone, and the map shows an asymmetric bowtie rather than a crab claw.",
      "Regular against-the-rule astigmatism gives a symmetric horizontal bowtie, without thinning.",
      "Correct: crab claw, against-the-rule astigmatism and an inferior band of thinning.",
      "Terrien degeneration (slow, minimally inflammatory marginal thinning) is usually superior, with a lipid line at the leading edge of the thinning."
    ]
  },

  // ---- data/quiz-c.js ----
  "C-001": {
    stem: "A 58-year-old man, IOP 24 mmHg OD, open angle on gonioscopy. The diagram shows the peripapillary retinal nerve fiber layer (RNFL) OCT of the OD, with the TSNIT curve and sectors. Which visual field defect is most consistent with this damage?",
    options: [
      "Inferior arcuate defect or inferior nasal step",
      "Bitemporal hemianopia respecting the vertical meridian",
      "Isolated enlargement of the blind spot",
      "Superior arcuate defect or superior nasal step"
    ],
    explain: "**What the OCT (optical coherence tomography: cross-sectional imaging) shows:** the RNFL (the axons of ganglion cells converging on the disc) is thinned at the inferior pole, the site most often affected first in glaucoma (especially inferotemporally). **Why:** the image is inverted on the retina, so the inferior fibers carry information from the superior hemifield, and they stop at the horizontal raphe. **Consequence:** a superior arcuate defect or superior nasal step (a step at the nasal edge of the field, along the horizontal meridian) is expected; always check that structure (OCT, disc) and function (field) agree.",
    why: [
      "It is the reverse: an inferior field defect comes from superior damage to the disc or RNFL.",
      "A bitemporal hemianopia (loss of both temporal fields) comes from chiasmal compression, not from inferior RNFL loss in one eye.",
      "The blind spot (the projection of the disc in the field) enlarges mainly with disc edema (a swollen disc) or peripapillary damage, not with focal inferior thinning.",
      "Correct: thinned inferior RNFL → superior field defect respecting the horizontal meridian."
    ]
  },
  "C-002": {
    stem: "A 63-year-old asthmatic woman referred by her optometrist. Diagnosis of early primary open-angle glaucoma (POAG) OD: IOP 26 mmHg, inferior notch of the disc, superior nasal step on the visual field, open angle on gonioscopy. She would prefer to avoid daily drops. According to the AAO POAG Preferred Practice Pattern (PPP) published in 2026, what is the best first option?",
    options: [
      "Selective laser trabeculoplasty (SLT) as first-line treatment",
      "Timolol 0.5 %, inexpensive and well tolerated on the ocular surface",
      "Trabeculectomy right away to avoid any long-term medication",
      "Observation without treatment until progression is documented"
    ],
    explain: "**Reminder:** POAG is a slow, painless optic nerve disease with an open drainage angle, often related to an IOP too high for that nerve. **What it is:** SLT (selective laser trabeculoplasty) is a gentle laser done in clinic, through a lens, on the trabecular meshwork (the angle's filter); it triggers remodeling of the filter, whose layer adjacent to Schlemm canal (juxtacanalicular tissue) is the main site of outflow resistance in POAG. **Why first:** the 2026 PPP more strongly supports first-line SLT on the basis of the LiGHT trial (SLT vs drops as first-line therapy): at 6 years, 69.8 % of SLT-treated eyes were at target without further treatment, with less progression (19.6 % vs 26.8 %) and about 3 times fewer trabeculectomies. **What to do:** set an individualized target IOP (starting point ≈ 20–30 % below baseline IOP), perform SLT, then check IOP and follow OCT and visual fields.",
    why: [
      "Correct: effective, with no daily drops or systemic side effects, ideal for this asthmatic patient.",
      "Timolol (a beta-blocker drop that reduces aqueous production) enters the circulation and can trigger bronchospasm (sudden narrowing of the airways): it is contraindicated in asthma.",
      "Trabeculectomy (surgery that creates a fistula to a pocket under the conjunctiva, the bleb) carries more risk; it is reserved for failure of laser and drops or for advanced disease.",
      "Glaucoma with disc and field damage is treated: in EMGT (Early Manifest Glaucoma Trial), treatment reduced progression (45 % vs 62 %)."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "C-003": {
    stem: "A 74-year-old man with POAG stable for 6 years (IOP 14–15 mmHg on latanoprost). He complains of glare at night and his VA has dropped from 6/7.5 (20/25) to 6/15 (20/50); the MD (mean deviation) of the 24-2 field has fallen by 3 dB in one year. The diagram shows the total deviation map of the OD; the pattern deviation map is unchanged from previous exams. What is the most accurate interpretation?",
    options: [
      "Rapid glaucomatous progression: add a second medication",
      "Diffuse neurological damage: order a brain MRI",
      "Diffuse depression due to cataract: no progression demonstrated",
      "Unreliable exam: repeat the field with the SITA Fast strategy"
    ],
    explain: "**What the maps show:** the MD summarizes the overall field loss; total deviation (TD) compares each point with age-matched normals, whereas pattern deviation (PD) first removes the general depression to keep only localized defects. **Why it matters:** a media opacity such as cataract dims the whole field uniformly: TD and MD worsen, but the PD stays stable, which is not glaucomatous progression (that creates or deepens localized defects). **What to do:** confirm stability on OCT and disc exam, refer for cataract surgery, then repeat a baseline field after the operation.",
    why: [
      "Trap: the MD falls from diffuse depression, with no new localized defect; adding a drop is not justified.",
      "Neurological damage gives localized defects that respect the vertical meridian, not uniform depression with a stable PD.",
      "Correct: depressed TD and stable PD = cataract effect, consistent with the glare and the VA loss.",
      "Nothing indicates unreliability (false positives, fixation losses); switching to SITA Fast (a shorter but less precise strategy) would also prevent progression analysis against previous exams."
    ]
  },
  "C-004": {
    stem: "A 71-year-old man with advanced POAG in both eyes, VA 6/7.5 (20/25) in each eye. The diagram shows the pattern deviation map of the 24-2 field of his OD; the OS shows a similar but less extensive defect. He asks whether he can keep driving his car (class 5 licence). What is the most appropriate course of action?",
    options: [
      "Tell him to stop driving: advanced glaucoma automatically suspends the licence",
      "Do a binocular field (Esterman) and compare it with SAAQ standards",
      "Reassure him: with VA of 6/7.5 in both eyes, he meets the standards",
      "Rely on the 24-2 field of each eye, which is enough to complete the SAAQ report"
    ],
    explain: "**What it is:** for class 5, the SAAQ requires binocular VA ≥ 6/15 (20/50) and a continuous binocular field of at least 100° along the horizontal meridian (including ≥ 30° on each side of the vertical meridian), 10° above and 20° below fixation. **Why:** the 24-2 tests one eye at a time and only the central 24°; the two eyes together can fill in each other's gaps, hence the requirement for a signed binocular field as soon as a defect exists (Esterman: a screening test done with both eyes open, or Goldmann III/4e). **What to do:** order the Esterman, complete the report and counsel the patient; glaucoma does not lead to automatic suspension, but a restriction (e.g. night driving) or a recommendation to stop remains possible.",
    why: [
      "False: there is no automatic suspension; everything depends on the measured VA and binocular field.",
      "Correct: only a binocular field can verify the 100° horizontal threshold and the limits above and below fixation.",
      "VA is not enough: advanced glaucoma can leave good central vision with a field too narrow for driving.",
      "The monocular 24-2 covers only the central 24° of one eye; the SAAQ requires a signed binocular field (Esterman or Goldmann III/4e)."
    ]
  },
  "C-005": {
    stem: "A 61-year-old man: IOP 27 mmHg in both eyes at three visits, open angles, normal discs, normal 24-2 visual field and OCT. Pachymetry (measurement of central corneal thickness) gives 520 µm in both eyes. Why is this result important?",
    options: [
      "Goldmann overestimates his IOP: the true IOP is probably normal",
      "Goldmann underestimates his IOP, and a thin cornea increases the risk",
      "It matters only after laser refractive surgery (LASIK)",
      "His IOP must be corrected with a fixed formula and treated according to that number"
    ],
    explain: "**What it is:** the central cornea measures 540–550 µm on average; the Goldmann tonometer flattens the cornea assuming an average thickness. **Why it matters:** a thin cornea flattens more easily, so the IOP read is lower than the true IOP; moreover, in the Ocular Hypertension Treatment Study (OHTS), a cornea ≤ 555 µm carried about 3 times the risk of conversion to glaucoma compared with a cornea > 588 µm. **What to do:** do not apply a correction formula mechanically, but integrate the thin cornea into the overall risk; in this ocular hypertensive (elevated IOP without nerve damage), treatment is offered, which reduced 5-year conversion from 9.5 % to 4.4 % in OHTS.",
    why: [
      "It is the reverse: a thick cornea causes IOP to be overestimated, a thin cornea causes it to be underestimated.",
      "Correct: the true IOP is probably higher than 27 mmHg and the risk of conversion is higher (OHTS).",
      "LASIK thins the cornea and causes IOP to be underestimated, but a naturally thin cornea also matters, as OHTS showed.",
      "Correction formulas are imprecise, because corneal rigidity varies from person to person; thickness is integrated into the overall risk instead."
    ]
  },
  "C-006": {
    stem: "A 34-year-old woman, myopic at −8.00 D, referred for \"glaucoma\" because of an OCT done at her optometrist's. IOP 15 mmHg in both eyes, open angles, tilted discs surrounded by peripapillary atrophy, normal and reliable 24-2 visual field. The diagram shows her retinal nerve fiber layer (RNFL) OCT. What is the most appropriate course of action?",
    options: [
      "Recognize a probable false positive and establish a baseline for follow-up",
      "Confirm early glaucoma and prescribe a prostaglandin analog",
      "Offer SLT right away, because high myopia is a risk factor",
      "Repeat the OCT in a week: a second red result will confirm glaucoma"
    ],
    explain: "**What the OCT shows:** sectors in red, meaning an RNFL thinner than the device's normative database. **Why to be wary of it:** this database contains few high myopes; a tilted disc (an oval, oblique disc, common in high myopia), peripapillary atrophy (a pale zone where retina and pigment epithelium are thinned around the disc) or a segmentation error produce red without disease: this is \"red disease\", a false positive. **What to do:** without agreement with the disc and the visual field, the diagnosis is not made; document a baseline (photos, RNFL and macular OCT, field) and judge on change over time.",
    why: [
      "Correct: structure-function discordance in a high myope; follow the trend rather than labeling.",
      "The diagnosis of glaucoma requires a consistent optic neuropathy (disc, visual field), not an isolated color code; a prostaglandin analog (an evening drop that increases outflow) would be premature.",
      "Myopia increases the risk, but without demonstrated neuropathy or elevated IOP, SLT (laser applied to the angle's filter) is not indicated.",
      "Repeating the exam will reproduce the same artifact; what counts is loss documented over time, not the color."
    ]
  },
  "C-007": {
    stem: "An optometrist from Laval calls you: she is following a 56-year-old woman who is a glaucoma suspect (IOP 25 mmHg, questionable discs, normal visual field) and started latanoprost 2 months ago; IOP is now 18 mmHg. Under the Québec regulation governing optometrists' prescription of these drops (Regulation O-7, r. 11.1), what is the expected next step?",
    options: [
      "She can follow the patient on her own long term, since IOP is controlled",
      "She should have referred the patient before starting any drop",
      "She must stop latanoprost, because only a physician can prescribe it",
      "She must refer the patient to an ophthalmologist for medical follow-up"
    ],
    explain: "**What it is:** in Québec, an optometrist who has the required instruments may initiate glaucoma treatment for a glaucoma suspect (a questionable finding, without proof of nerve damage), early glaucoma or steroid-induced glaucoma (caused by corticosteroids). **Why:** the regulation then requires her to refer the patient to an ophthalmologist for medical follow-up, and then to comply with the ophthalmologist's plan; for other glaucomas, she needs a physician's consent, and she must refer the patient if the response is inadequate. **What to do:** accept the consultation request, do the full workup (gonioscopy, pachymetry, OCT, visual field) and agree on a clear shared follow-up plan.",
    why: [
      "The regulation requires referral to the ophthalmologist for medical follow-up, even if IOP is well controlled.",
      "False: for a glaucoma suspect or early glaucoma, an equipped optometrist may initiate treatment before referring.",
      "False: latanoprost (a prostaglandin analog, an evening drop that increases outflow) is among the glaucoma drugs permitted in these situations.",
      "Correct: treatment can be started, then referral to the ophthalmologist for medical follow-up is mandatory."
    ]
  },
  "C-008": {
    stem: "A 66-year-old woman, IOP between 13 and 16 mmHg without treatment, open angles on gonioscopy. The diagram shows her OS disc on fundus exam. What is the significance of the small red flame-shaped lesion at the inferior disc margin?",
    options: [
      "A diabetic retinopathy hemorrhage, unrelated to glaucoma",
      "A sign of intracranial hypertension: urgent brain imaging",
      "Disc hemorrhage: a marker of active damage and progression",
      "An unimportant artifact: IOP is normal, so there is no glaucoma"
    ],
    explain: "**What it is:** a disc hemorrhage (Drance hemorrhage) is a small flame-shaped hemorrhage at the disc margin, often inferotemporal, here next to a notch (focal loss of the neuroretinal rim). **Why it matters:** it signals ongoing damage; it is common in normal-tension glaucoma (NTG: glaucomatous neuropathy with IOP always ≤ 21 mmHg), and the AAO (2026) lists it as a risk factor for progression. **What to do:** photograph it (it resorbs), check agreement with OCT and visual field (expected defect: superior), tighten follow-up and consider lowering IOP.",
    why: [
      "Diabetic hemorrhages are retinal (dots, blots) and scattered; a flame at the edge of a notch points to glaucoma.",
      "Intracranial hypertension produces disc edema: elevated discs with blurred margins, on both sides, with no notch or enlarged cup.",
      "Correct: hemorrhage at the disc margin + notch = active glaucoma that warrants closer follow-up.",
      "A normal IOP does not rule out glaucoma: that is precisely the definition of normal-tension glaucoma."
    ]
  },
  "C-009": {
    stem: "A 64-year-old woman followed for early normal-tension glaucoma (NTG): IOP 14 mmHg, inferotemporal notch of the disc OD. The diagram shows the pattern deviation map of her 24-2 visual field OD. Which test will best characterize this damage and its course?",
    options: [
      "A 10-2 visual field, which finely tests the central 10°",
      "A Goldmann kinetic field focused on the far periphery",
      "An Esterman binocular field, as for a driver's licence",
      "A brain MRI to rule out damage to the optic chiasm"
    ],
    explain: "**What the field shows:** a superior paracentral scotoma, i.e. depressed points a few degrees above fixation, respecting the horizontal meridian; it matches the inferotemporal notch (focal loss of the disc rim). **Why it matters:** NTG (glaucoma in which the nerve cups while IOP stays ≤ 21 mmHg) often affects the area near fixation early, and the 24-2 grid, with points spaced 6° apart, places only a few points in this zone: it can underestimate the defect. **What to do:** add a 10-2 field (dense grid over the central 10°) at baseline and at follow-up, with RNFL and macular ganglion cell OCT; a defect threatening fixation prompts treatment without delay.",
    why: [
      "Correct: the 10-2 maps paracentral defects that the 24-2 grid can miss or underestimate.",
      "Goldmann kinetic perimetry (a light target moved from the periphery toward the center) is mainly used for very constricted fields; it measures a small defect near fixation poorly.",
      "The Esterman (a screening field done with both eyes open) assesses fitness to drive, not a small central defect in one eye.",
      "Chiasmal damage (where the optic nerves cross) respects the vertical meridian; this defect, matching the notch, respects the horizontal meridian, typical of glaucoma."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "C-010": {
    stem: "A 69-year-old woman of Vietnamese origin, hyperopic at +3.50 D, asymptomatic. Cupped OD disc (C/D 0.8) with a matching arcuate field defect; IOP 16 to 19 mmHg at three daytime visits; cornea 548 µm. A colleague proposes concluding normal-tension glaucoma and starting drops. Which exam is essential before accepting this diagnosis?",
    options: [
      "Brain and orbit MRI to rule out nerve compression",
      "ESR and CRP to rule out temporal arteritis",
      "Gonioscopy to rule out intermittent angle closure",
      "24-hour ambulatory blood pressure monitoring"
    ],
    explain: "**What it is:** NTG (a nerve that cups with IOP always ≤ 21 mmHg) is a diagnosis of exclusion: first rule out a missed elevated IOP, angle closure and non-glaucomatous nerve damage. **Why gonioscopy:** this hyperopic woman (short eye) of East Asian origin has the profile of primary angle closure; if the iris intermittently blocks the filter, often in the evening in dim light, IOP rises between visits and looks normal in clinic, mimicking NTG. Gonioscopy (examination of the angle with a mirrored lens, in a dark room with a small beam) then shows iridotrabecular contact or synechiae (adhesions). **What to do:** perform gonioscopy in every patient labeled NTG; if the angle is narrow, treatment changes (laser iridotomy or lens extraction) instead of simple drops.",
    why: [
      "MRI is ordered for an atypical sign (age < 50, pallor more marked than cupping, loss of VA or color vision, defect respecting the vertical meridian); none of these is present here.",
      "ESR and CRP (inflammatory markers) look for giant cell arteritis in a patient ≥ 50 with headache or jaw pain on chewing; they do not replace examination of the angle.",
      "Correct: a classic trap; an angle that closes intermittently causes IOP spikes invisible in clinic and changes the whole treatment.",
      "Nocturnal hypotension (a drop in blood pressure at night) can worsen NTG, but it is sought once the diagnosis is established; it does not rule out angle closure."
    ]
  },
  "C-011": {
    stem: "During your first gonioscopy (examination of the iridocorneal angle with a mirrored lens), your attending asks which structure lies just behind the pigmented trabecular meshwork and serves as a landmark: if it is seen over 360°, the whole functional filter is uncovered. What do you answer?",
    options: [
      "Schwalbe line, the end of Descemet membrane",
      "The non-pigmented trabecular meshwork, the anterior part of the filter",
      "The scleral spur, a whitish projection of the sclera",
      "The ciliary body band, the visible part of the ciliary body"
    ],
    explain: "**What it is:** from posterior to anterior, you see the iris root, the ciliary body band, the scleral spur, the trabecular meshwork (pigmented posteriorly, the part that filters the most; non-pigmented anteriorly) and Schwalbe line: \"I Can't See Til Schwalbe\". **Why it matters:** the scleral spur marks the posterior limit of the trabecular meshwork; if it is visible, the filter just in front of it is not hidden by the iris. **What to do:** look for the spur in all 4 quadrants; if it is hidden over at least 180°, this is iridotrabecular contact (iris applied against the filter), the basis for diagnosing primary angle closure.",
    why: [
      "Schwalbe line is the most anterior structure; if it alone is visible, the angle is very narrow (Shaffer 1, on a scale from 0 = closed to 4 = wide open).",
      "The non-pigmented meshwork lies in front of the pigmented meshwork; seeing it does not guarantee that the filtering part, further back, is uncovered.",
      "Correct: a scleral spur visible over 360° confirms that the angle is open.",
      "The ciliary body band is even further back, behind the spur; it is seen only in a wide-open angle (Shaffer 4)."
    ]
  },
  "C-012": {
    stem: "A 62-year-old man from Nunavik, referred to Montréal for narrow angles. IOP 27 mmHg OD; healthy OD disc (C/D 0.3), normal RNFL OCT and visual field. The diagram shows gonioscopy of his OD after indentation (pressing the lens on the cornea). How do you classify the OD?",
    options: [
      "Primary angle-closure suspect (PACS)",
      "Primary angle closure (PAC)",
      "Primary angle-closure glaucoma (PACG)",
      "Primary open-angle glaucoma (POAG)"
    ],
    explain: "**What the diagram shows:** only Schwalbe line (at best with the anterior, non-pigmented meshwork) is visible (Shaffer 1); the pigmented meshwork and the spur are hidden and the iris stays stuck to the filter despite indentation: these are peripheral anterior synechiae (PAS: permanent adhesions between iris and trabecular meshwork). **Why this stage:** the ISGEO classification distinguishes PACS (iridotrabecular contact ≥ 180°, normal IOP, no PAS and no nerve damage), PAC (contact with PAS and/or elevated IOP, healthy nerve) and PACG (PAC with glaucomatous optic neuropathy); here, PAS and IOP of 27 mmHg with a healthy nerve = PAC. The Inuit of Nunavik have some of the highest rates of primary angle closure in the world. **What to do:** open the angle with a laser iridotomy (LPI: a small hole in the peripheral iris), or with lens extraction if ≥ 50 years with IOP ≥ 30 mmHg (EAGLE); drops if IOP remains elevated; follow gonioscopy, OCT and field.",
    why: [
      "PACS requires normal IOP, without PAS; here, PAS and elevated IOP move the case to the next stage.",
      "Correct: PAS and elevated IOP, but normal optic nerve and visual field.",
      "PACG requires glaucomatous optic neuropathy (cupping, RNFL loss, field defect); the nerve is healthy here.",
      "POAG requires an open angle, with the scleral spur visible over 360°; here the angle is closed and stuck."
    ]
  },
  "C-013": {
    stem: "A 34-year-old woman, normally emmetropic, who started topiramate for migraines 10 days ago. Since yesterday, blurred vision in both eyes and a dull ache. VA 6/30 (20/100) OU, improving to 6/7.5 (20/25) with −4.00 D; IOP 44 mmHg OD and 42 mmHg OS; anterior chambers very shallow centrally as well as peripherally. What is the best management?",
    options: [
      "Laser iridotomy in both eyes the same day",
      "Pilocarpine 2 % QID to pull the iris out of the angle",
      "Urgent clear lens extraction in both eyes",
      "Stop topiramate, cycloplegic, steroid and pressure-lowering drops"
    ],
    explain: "**What it is:** topiramate (like some sulfonamides) can cause ciliochoroidal effusion: fluid accumulates around the ciliary body, which rotates forward and pushes the lens and iris against the angle, in both eyes, with acute myopia. **Why it is different:** there is no pupillary block (impeded aqueous flow between iris and lens), so laser iridotomy (a small hole in the iris) does not open the angle, and pilocarpine (a drop that constricts the pupil and the ciliary muscle) moves the lens further forward and worsens the closure. **What to do:** stop topiramate with the prescriber, cycloplegic (a drop that relaxes the ciliary muscle and moves the lens back), topical steroid and pressure-lowering drops; the condition usually improves within a few days of stopping.",
    why: [
      "Iridotomy treats pupillary block; here, the angle is closed by a push from behind, which the hole in the iris does not correct.",
      "Pilocarpine is contraindicated: by contracting the ciliary muscle, it moves the lens forward and worsens the closure.",
      "Lens extraction is not indicated: the cause is drug-induced and reversible when topiramate is stopped.",
      "Correct: remove the cause, move the lens back with a cycloplegic and control IOP."
    ]
  },
  "C-014": {
    stem: "A 61-year-old woman, hyperopic at +3.00 D, clear lens, VA 6/6 (20/20) OU. Gonioscopy: iris in contact with the trabecular meshwork over 360°, with a few synechiae (adhesions); IOP 32 mmHg OU; normal optic nerves and visual fields. According to the EAGLE trial, which option offers the best long-term IOP control?",
    options: [
      "Laser iridotomy in both eyes, then drops as needed",
      "Clear lens extraction with an intraocular lens",
      "Long-term pilocarpine 2 % to keep the angle open",
      "Trabeculectomy right away to aim for a very low IOP"
    ],
    explain: "**What it is:** this patient has primary angle closure (PAC: iris applied against the filter, with synechiae and elevated IOP, nerve still healthy); in a short eye, the lens that thickens with age pushes the iris forward. **Why extraction:** in EAGLE (≥ 50 years, PAC with IOP ≥ 30 mmHg or PACG), replacing the clear lens with a thin implant gave better IOP control and better quality of life than laser iridotomy; at 3 years, operated patients were about 10 times more likely to be controlled without drops. **What to do:** discuss the surgery and its risks (short eye, endothelium to check with specular microscopy), then follow IOP, gonioscopy, OCT and field.",
    why: [
      "Laser iridotomy (a small hole in the iris that bypasses the pupil) remains possible, but it gave poorer control than lens extraction in EAGLE.",
      "Correct: in a patient ≥ 50 with PAC and IOP ≥ 30 mmHg, clear lens extraction outperforms iridotomy (EAGLE).",
      "Long-term pilocarpine (a drop that constricts the pupil) is poorly tolerated (headache, myopia) and does not address the cause, the thick lens.",
      "Trabeculectomy (a surgical fistula to a bleb under the conjunctiva) is risky in a short eye (aqueous misdirection, suprachoroidal hemorrhage) and is not the first choice when the nerve is healthy."
    ]
  },
  "C-015": {
    stem: "A 67-year-old woman in the ED with headache, vomiting and colored halos for 3 hours. OD: red eye, hazy cornea, non-reactive mid-dilated pupil, IOP 60 mmHg; OS: shallow anterior chamber, IOP 16 mmHg. No asthma or sulfa allergy, normal renal function. The ED physician has already ordered pilocarpine 2 % every 5 minutes. What is the best immediate management?",
    options: [
      "Continue pilocarpine 2 % every 5 minutes until the angle opens",
      "Timolol, brimonidine, dorzolamide and acetazolamide 500 mg",
      "Immediate laser iridotomy despite the edematous cornea",
      "Head CT before any ocular treatment"
    ],
    explain: "**What it is:** an acute angle-closure attack: the iris suddenly blocks the entire angle filter, IOP soars, the cornea swells (halos, blur) and the iris sphincter, deprived of blood, stops reacting (fixed mid-dilated pupil). **Why not pilocarpine first:** at 60 mmHg, this ischemic sphincter does not respond to pilocarpine (a drop that constricts the pupil); repeating doses does not open the angle and delays the real treatment. **What to do:** first lower IOP with timolol 0.5 % (beta-blocker), brimonidine (alpha-agonist) and dorzolamide (carbonic anhydrase inhibitor), which reduce aqueous production, plus acetazolamide 500 mg PO or IV; add prednisolone acetate 1 %; IV mannitol if IOP does not fall; pilocarpine 1–2 % once IOP has come down, then laser iridotomy in both eyes.",
    why: [
      "Trap: the iris sphincter, ischemic at an IOP of 60 mmHg, does not respond; pilocarpine is given once IOP has been lowered.",
      "Correct: reduce aqueous production through several pathways, then pilocarpine and laser iridotomy follow.",
      "Laser iridotomy (a small hole in the iris that bypasses the pupil) is the definitive treatment, but the edematous cornea hampers the laser; lower IOP first to clear the cornea.",
      "The attack mimics migraine or a neurological disorder, but the hazy cornea, fixed pupil and IOP of 60 mmHg make the diagnosis; delaying treatment threatens the nerve."
    ]
  },
  "C-016": {
    stem: "A 72-year-old hyperopic man presents with intense pain in the OS that began last night at the movies, with blurred vision and nausea. The diagram shows his OS anterior segment at the slit lamp. What is the most likely diagnosis?",
    options: [
      "Acute angle-closure attack",
      "Acute anterior uveitis with ocular hypertension",
      "Neovascular glaucoma from a vein occlusion",
      "Bacterial keratitis with a chamber reaction"
    ],
    explain: "**What the diagram shows:** a congested eye with redness around the limbus (ciliary flush), a cornea hazy from edema and an oval, mid-dilated pupil; the shallow chamber, not visible on this frontal view, is confirmed with a thin slit (Van Herick). **Why it is an attack:** the very high IOP overwhelms the corneal endothelial pump (hence the edema, halos and blur) and deprives the iris sphincter of blood (fixed pupil); the dim light of the movie theater put the pupil in mid-dilation, a position that favors angle block in a short eye. **What to do:** measure IOP, examine the fellow eye, lower IOP without delay (pressure-lowering drops and acetazolamide), then laser iridotomy in both eyes.",
    why: [
      "Correct: corneal edema, mid-dilated pupil, ciliary flush and pain after time in dim light, in a hyperope.",
      "Anterior uveitis (inflammation of the iris and ciliary body) rather gives a small pupil, cells and precipitates on the endothelium, with a chamber of normal depth.",
      "Neovascular glaucoma (an angle closed by abnormal vessels, after diabetes or a retinal vein occlusion) shows new vessels on the iris and sets in less abruptly.",
      "Bacterial keratitis (infection of the cornea) gives a white infiltrate with an ulcer that takes up fluorescein, often in a contact lens wearer."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "C-017": {
    stem: "One week after an acute angle-closure attack OD treated with drops, acetazolamide and then laser peripheral iridotomy (LPI), IOP OD is 14 mmHg. The OS is asymptomatic: IOP 15 mmHg, but on gonioscopy the iris touches the trabecular meshwork over 270°. What do you propose for the OS?",
    options: [
      "Simple observation, since the OS has never had an attack",
      "Long-term pilocarpine 2 % to keep the pupil small",
      "Preventive timolol 0.5 % to keep IOP low",
      "Prophylactic laser iridotomy of the OS without delay"
    ],
    explain: "**What it is:** the fellow eye of an attack almost always has the same anatomy: short eye, thick lens, narrow angle. **Why it matters:** without iridotomy, about half of fellow eyes have an attack within 5 years (AAO 2026), with the same risks for the nerve, cornea and iris. **What to do:** offer an LPI (a small laser hole in the peripheral iris so aqueous bypasses the pupil), then check that the opening is patent and measure IOP 30 minutes to 2 hours afterward, then follow both eyes with gonioscopy.",
    why: [
      "Waiting exposes the eye to an attack in about half of cases within 5 years; this risk is much higher than in a simple angle-closure suspect.",
      "Long-term pilocarpine (a drop that constricts the pupil) is poorly tolerated and does not protect reliably; it does not replace iridotomy.",
      "Timolol (a beta-blocker that reduces aqueous production) lowers IOP, but does not stop the iris from blocking the angle.",
      "Correct: prophylactic LPI of the fellow eye is part of the standard treatment of a pupillary-block attack."
    ]
  },
  "C-018": {
    stem: "A 4-month-old infant brought in by his parents: he tears a lot, shuts his eyes in light and rubs his eyes. The corneas look large and slightly bluish; with a penlight, you see curved lines deep in the cornea of the OD. Which diagnosis should you consider first?",
    options: [
      "Congenital nasolacrimal duct obstruction",
      "Neonatal Chlamydia conjunctivitis",
      "Neonatal herpetic keratitis",
      "Primary congenital glaucoma"
    ],
    explain: "**What it is:** primary congenital glaucoma comes from an angle that is malformed at birth: aqueous humor drains poorly and IOP rises. **Why these signs:** in infants, the wall of the eye is soft and stretches under pressure: the cornea enlarges and clouds (buphthalmos, \"ox eye\"), Descemet membrane (the deep layer of the cornea) breaks in curved lines (Haab striae), and corneal edema produces the triad of tearing, photophobia and blepharospasm (forced lid closure). **What to do:** urgent referral to pediatric ophthalmology for an examination under anesthesia, then surgery (goniotomy or trabeculotomy: surgical opening of the angle filter); drops are only a bridge, and never brimonidine under age 2 (profound somnolence, apnea).",
    why: [
      "Nasolacrimal duct obstruction gives tearing with sticky discharge, but a clear cornea of normal size, without photophobia.",
      "Chlamydia conjunctivitis (an infection transmitted at delivery, mostly in the first weeks) gives discharge and conjunctival redness, not an enlarged cornea with striae.",
      "Herpetic keratitis (infection of the cornea by herpes virus) gives lesions that take up fluorescein, without corneal enlargement.",
      "Correct: tearing, photophobia, blepharospasm, a large cloudy cornea and Haab striae."
    ]
  },
  "C-019": {
    stem: "A 45-year-old former hockey player, IOP 29 mmHg OD and 15 mmHg OS, with no other slit-lamp abnormality. The diagram shows gonioscopy of his OD. What is the most likely diagnosis?",
    options: [
      "Angle-recession glaucoma, a sequela of old trauma",
      "Neovascular glaucoma, with vessels crossing the spur",
      "Primary angle closure with anterior synechiae",
      "Iridocorneal endothelial syndrome with high synechiae"
    ],
    explain: "**What the diagram shows:** a wide-open angle with an abnormally wide, irregular ciliary body band and torn iris processes (fine strands of iris). **Why it matters:** a blow to the eye (e.g. a hockey puck or ball) can tear the ciliary muscle between its layers (angle recession) and damage the adjacent trabecular meshwork, which scars and filters less well; glaucoma can appear years later, on one side only, hence the IOP asymmetry. **What to do:** compare gonioscopy of both eyes, document the nerve (OCT, field), treat with drops then filtering surgery if they fail, and monitor IOP for life.",
    why: [
      "Correct: widened ciliary body band and torn iris processes, on one side, with elevated IOP on the same side.",
      "Neovascular glaucoma (abnormal vessels growing in the angle, often after diabetes or a vein occlusion) shows vessels crossing the scleral spur, absent here.",
      "In primary angle closure, the iris hides the angle structures; here the angle is wide open, without synechiae (adhesions).",
      "ICE syndrome (abnormal endothelium migrating over the angle and iris) gives synechiae that extend beyond Schwalbe line and a distorted iris, not a widened ciliary body band."
    ]
  },
  "C-020": {
    stem: "A 70-year-old woman, hyperopic at +5.00 D (short eye), who already had a patent laser iridotomy OD. Three days after uncomplicated cataract surgery OD: IOP 36 mmHg, anterior chamber uniformly flat centrally as well as peripherally, iridotomy still patent, moderate pain; ultrasound shows no choroidal elevation. Which mechanism best explains this picture?",
    options: [
      "Pupillary block: aqueous no longer passes between iris and IOL",
      "Suprachoroidal hemorrhage pushing the eye contents forward",
      "Aqueous misdirection, with aqueous accumulating in the vitreous",
      "Reactivated Posner-Schlossman hypertensive uveitis"
    ],
    explain: "**What it is:** in aqueous misdirection (malignant glaucoma), aqueous humor is diverted posteriorly into the vitreous instead of passing to the anterior chamber; the vitreous swells and pushes the IOL and iris forward. **Why this is the right mechanism:** the chamber is flat centrally AND peripherally with elevated IOP despite a patent iridotomy (which rules out pupillary block), and ultrasound shows no blood or fluid under the choroid (which rules out hemorrhage or choroidal effusion); the short eye is the typical setting. **What to do:** atropine (relaxes the ciliary muscle and moves the lens implant back) and pressure-lowering drops, never pilocarpine; in this pseudophakic eye (an eye with an IOL), open the anterior hyaloid (the membrane at the front of the vitreous) with the Nd:YAG laser to restore flow, or vitrectomy if that fails.",
    why: [
      "Pupillary block gives iris bombé with a chamber deeper centrally than peripherally; a patent iridotomy bypasses it.",
      "Suprachoroidal hemorrhage (sudden bleeding under the choroid) causes intense pain and dark choroidal elevations visible on fundus exam and ultrasound, absent here.",
      "Correct: uniformly flat chamber, elevated IOP, patent iridotomy and flat choroid = misdirection.",
      "Posner-Schlossman (recurrent attacks of very high IOP with little inflammation, open angle) leaves a chamber of normal depth."
    ]
  },
  "C-051": {
    stem: "A 74-year-old woman of Scandinavian origin seen for progressive vision loss OS. Before dilation, whitish flakes are noted at the pupillary margin; after dilation, the anterior lens capsule is photographed (photo). IOP 27 mmHg OS, 16 mmHg OD. What is the most likely diagnosis?",
    options: [
      "True exfoliation of the capsule, heat-related (glassblowers)",
      "Pseudoexfoliation syndrome (PXF) with probable secondary glaucoma",
      "Pigment dispersion syndrome with pigment deposited on the lens",
      "Congenital anterior polar cataract, unrelated to IOP"
    ],
    explain: "**What it is:** pseudoexfoliation (PXF) is an age-related disease in which whitish fibrillar material deposits on the lens capsule, the zonules (fibers that suspend the lens), the iris and the trabecular meshwork (the angle's filter). **Why it matters:** on the capsule, it forms a target (bull's-eye) — a central disc, a clear ring where the iris rubs, and a granular peripheral band often visible only after dilation — and it clogs the meshwork: it is a common cause of secondary open-angle glaucoma, often asymmetric as here. **What to do:** gonioscopy (irregular pigment, Sampaolesi line), disc exam, OCT and visual field, then note in the chart the zonular fragility for future cataract surgery.",
    why: [
      "True exfoliation is a splitting of the capsule into thin sheets after long exposure to infrared heat; it is rare and does not form a three-zone target.",
      "Correct: a target on the capsule, flakes at the pupillary margin, asymmetric IOP and typical age.",
      "Pigment dispersion mainly affects young myopes; pigment deposits at the zonule–posterior capsule junction (Scheie line), not as a whitish target on the anterior capsule.",
      "An anterior polar cataract is a small central opacity present from childhood; it has no peripheral band and does not explain an elevated IOP."
    ]
  },
  "C-052": {
    stem: "A 71-year-old man with unilateral PXF OS. IOP OS: 21 mmHg 4 months ago, 34 mmHg today; the angle is open on gonioscopy, with irregular trabecular pigment. Which mechanism best explains such a high and variable IOP?",
    options: [
      "Hypersecretion of aqueous humor by a stimulated ciliary body",
      "Elevated episcleral venous pressure from orbital stasis",
      "Angle closure from a lens pushed forward",
      "A trabecular meshwork obstructed by fibrillar material and pigment"
    ],
    explain: "**What it is:** PXF material, and the pigment released when the iris rubs on the rough capsule, accumulate in the trabecular meshwork and the wall of Schlemm canal, which increases resistance to aqueous outflow. **Why it matters:** compared with primary open-angle glaucoma (POAG), pseudoexfoliation glaucoma gives higher IOPs, fluctuations and spikes that a single clinic reading can miss, and faster progression. **What to do:** aim for a lower target IOP, follow more often (IOP, OCT, visual field) and think early of SLT (selective laser trabeculoplasty: a gentle laser applied to the filter), which often responds well in PXF.",
    why: [
      "Aqueous production is normal in PXF; it is outflow that is impeded.",
      "Episcleral venous pressure rises, for example, in a carotid-cavernous fistula (dilated episcleral vessels, proptosis), not in PXF.",
      "This is possible in PXF, because weak zonules let the lens move forward; but here, the angle is open on gonioscopy.",
      "Correct: trabecular obstruction by fibrillar material and pigment, with an open angle."
    ]
  },
  "C-053": {
    stem: "A 78-year-old woman with controlled pseudoexfoliation glaucoma, dense cataract with VA 6/30 (20/100). Her pupil dilates to only 5 mm, and the lens trembles slightly when she moves her eye (phacodonesis). Which surgical planning is most appropriate?",
    options: [
      "Pupil expander, capsular tension ring and an experienced surgeon",
      "Operate as a standard cataract, because PXF affects only the trabecular meshwork",
      "First perform a laser iridotomy so the pupil dilates better",
      "Postpone surgery until IOP is below 12 mmHg without drops"
    ],
    explain: "**What it is:** in PXF, fibrillar material stiffens the iris (small pupil) and weakens the zonules; phacodonesis reveals this zonular weakness. **Why it matters:** during phaco, the zonules can give way (dialysis, vitreous loss, dropped nucleus), and even after uneventful surgery, the capsular bag–IOL complex can dislocate years later (late in-the-bag IOL dislocation). **What to do:** enlarge the pupil (iris hooks or a pupil expansion ring), support the bag with a capsular tension ring (a flexible ring placed in the bag that distributes tension over all the zonules), have a backup plan, monitor IOP after surgery and warn the patient to come in if her vision drops suddenly.",
    why: [
      "Correct: anticipate the small pupil and zonular weakness before entering the eye.",
      "False: the material also deposits on the zonules and iris; ignoring phacodonesis risks zonular rupture during surgery.",
      "Iridotomy (a small laser hole in the peripheral iris) treats pupillary block; it does not enlarge a rigid pupil.",
      "IOP is already controlled; waiting does not strengthen zonules that weaken over time, and the dense cataract hampers glaucoma follow-up."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "C-054": {
    stem: "A 76-year-old man with pseudoexfoliation glaucoma OD: IOP 25 mmHg on two drops, early progression on the visual field, and he tolerates a third drop poorly. The diagram shows his OD gonioscopy. What is the best next step?",
    options: [
      "Laser iridotomy, because this pigment signals angle closure",
      "Pilocarpine 2 % QID, to better expose the pigmented meshwork",
      "SLT starting at lower energy, then an IOP check",
      "Laser cyclophotocoagulation, because SLT is ineffective here"
    ],
    explain: "**What the diagram shows:** the angle is open (scleral spur, the white landmark at the base of the filter, clearly visible), the trabecular meshwork is heavily pigmented and a wavy line of pigment runs anterior to Schwalbe line: this is the Sampaolesi line, typical of PXF. **Why it matters:** SLT (a gentle laser that stimulates remodeling of the meshwork) often lowers IOP well in PXF, but a heavily pigmented meshwork absorbs more energy, hence a risk of IOP spike and inflammation after the laser. **What to do:** start at lower energy and adjust according to the reaction (small bubbles), measure IOP within the following hour, then judge the effect after a few weeks.",
    why: [
      "The angle is open and the spur is visible: the pigment does not signal closure, and iridotomy (a laser hole in the iris) does not treat a block that does not exist.",
      "Pilocarpine (a drop that constricts the pupil) does not help the laser, adds to an already poorly tolerated regimen and promotes an even smaller pupil and posterior synechiae (iris stuck to the lens).",
      "Correct: SLT is effective in PXF, and energy is titrated down in a heavily pigmented angle.",
      "Cyclophotocoagulation (a laser that destroys part of the ciliary body, the aqueous \"factory\") is reserved for refractory glaucoma; SLT works well in PXF."
    ]
  },
  "C-055": {
    stem: "A 29-year-old man, myopic at −6.00 D, who sees halos and blurred vision after playing basketball; IOP 36 mmHg OD right after exercise, 19 mmHg at rest. The diagram shows his iris on retroillumination (light reflected back from the fundus). Which anatomical contact explains these findings?",
    options: [
      "The pupillary margin rubbing on fibrillar material on the capsule",
      "The iris root apposed to the trabecular meshwork at the periphery of the angle",
      "The concave posterior surface of the iris rubbing on the anterior zonules",
      "The anterior surface of the iris touching the central corneal endothelium"
    ],
    explain: "**What it is:** in pigment dispersion syndrome, typical of young myopic men, the midperipheral iris bows backward (reverse pupillary block: aqueous trapped in front pushes the iris back) and its pigment epithelium rubs against the zonular bundles. **Why it matters:** the rubbed areas lose their pigment and let light through as midperipheral spokes (transillumination defects); the released pigment deposits as a vertical spindle on the endothelium (Krukenberg spindle) and as a dense, homogeneous band in the trabecular meshwork, and exercise releases clouds of it that clog the filter and drive IOP up. **What to do:** baseline gonioscopy, OCT and visual field, regular follow-up (per Siddiqui 2003, about 10 % progress to glaucoma at 5 years and 15 % at 15 years) and examination of the peripheral retina, since these myopes have more lattice degeneration (thin areas of retina that can tear).",
    why: [
      "That is the mechanism of PXF, in an older person, with defects around the pupil rather than midperipheral spokes.",
      "That is the iridotrabecular contact of angle closure, in a hyperope with a shallow chamber; here, the iris is concave and the angle wide.",
      "Correct: concave iris against zonules = midperipheral radial defects and released pigment.",
      "The iris does not touch the central cornea; the Krukenberg spindle comes from floating pigment that aqueous convection currents deposit on the endothelium."
    ]
  },
  "C-056": {
    stem: "A 41-year-old myopic man with pigmentary glaucoma OD: IOP 27 mmHg on latanoprost and an early arcuate defect. The diagram shows his gonioscopy. He wants to avoid adding drops. Which option is most appropriate?",
    options: [
      "360° SLT at the usual energy, since the pigment guides the laser well",
      "SLT at reduced energy, sometimes over 180°, with an IOP check afterward",
      "Laser iridotomy to flatten the iris and prevent progression",
      "Pilocarpine 2 % QID to lift the iris off the zonules, with no further exam"
    ],
    explain: "**What it is:** SLT delivers energy that is absorbed by the pigment of the trabecular meshwork; in pigmentary glaucoma, the dense, homogeneous 360° band of pigment absorbs much more than usual. **Why it is a trap:** the usual energy can cause a marked, sometimes prolonged IOP spike and inflammation in an already damaged eye. **What to do:** start at lower energy (sometimes over 180° only), give an alpha-agonist (apraclonidine or brimonidine: a drop that slows aqueous production) before the laser, measure IOP within the following hour and judge the effect after a few weeks.",
    why: [
      "Trap: a heavily pigmented meshwork absorbs too much energy, hence a risk of a marked and prolonged IOP spike.",
      "Correct: the same laser, but energy titrated down and IOP monitored.",
      "Iridotomy flattens the concave iris, but no solid evidence shows that it prevents conversion or progression of pigmentary glaucoma.",
      "Pilocarpine reduces rubbing by constricting the pupil, but it makes the young myope more myopic and causes headaches, and it can promote retinal detachment: examine the peripheral retina under dilation first."
    ]
  },
  "C-057": {
    stem: "A 66-year-old man, myopic at −5.00 D, referred for \"normal-tension glaucoma\": cupping and field defects in both eyes, untreated IOP of 15 to 17 mmHg at each visit. He remembers halos after sports in his thirties. The photo shows his cornea at the slit lamp. What is the most accurate interpretation?",
    options: [
      "Typical normal-tension glaucoma: brain MRI right away",
      "Pseudoexfoliation glaucoma: look for deposits on the anterior capsule",
      "Old steroid-induced glaucoma: ask about drops he has received",
      "\"Burned-out\" pigmentary glaucoma: IOP formerly high, signs attenuated"
    ],
    explain: "**What the photo shows:** a fine vertical deposit of pigment on the central corneal endothelium, the Krukenberg spindle, a trace of old pigment dispersion. **Why it is a trap:** with age, the lens grows and pushes the iris forward, iris–zonule rubbing decreases, the meshwork partly clears and IOP normalizes; in this \"burned-out\" phase, the damage comes from past IOP spikes and mimics normal-tension glaucoma (NTG: glaucomatous damage with an always-normal IOP). **What to do:** before concluding NTG, perform gonioscopy (residual trabecular pigment), look for transillumination defects, then document progression to set a target IOP.",
    why: [
      "Trap: IOP is normal today, but the spindle and halos with exercise point to pigment dispersion; MRI is reserved for atypical features (pallor more marked than cupping, a defect respecting the vertical meridian).",
      "PXF can deposit pigment on the cornea, but it mainly gives a whitish target on the capsule and high IOPs; halos with exercise in a young myope point elsewhere.",
      "Steroid-induced glaucoma requires steroid exposure; it explains neither the pigment spindle nor the halos with exercise.",
      "Correct: signs of pigment dispersion and a normalized IOP = burned-out pigmentary glaucoma, not to be labeled NTG."
    ]
  },
  "C-058": {
    stem: "A 59-year-old man with poorly controlled type 2 diabetes, never treated for his retinopathy; VA 6/24 (20/80) and IOP 23 mmHg OS. The photo shows his iris at the slit lamp, before dilation. What is the finding and the next step?",
    options: [
      "Iris new vessels: gonioscopy and urgent referral to retina",
      "Normal vessels of a light-colored iris: no further testing required",
      "Hyperemia from anterior uveitis: topical steroid and recheck in 1 week",
      "Pseudoexfoliation deposits: look for a Sampaolesi line on gonioscopy"
    ],
    explain: "**What the photo shows:** fine, tortuous, irregular red vessels on the surface of the iris, up to the pupillary margin: these are iris new vessels (neovascularization of the iris, NVI, or rubeosis iridis). **Why it matters:** a retina starved of oxygen (here, untreated proliferative diabetic retinopathy) releases VEGF (a factor that makes abnormal vessels grow); these vessels reach the angle, where they clog and then close the filter: this is neovascular glaucoma. **What to do:** examine the iris before dilating (dilation hides the pupillary margin), perform gonioscopy to look for angle new vessels (NVA), examine the fundus and refer promptly to retina for an anti-VEGF injection (a drug injected into the vitreous that blocks VEGF) and panretinal photocoagulation (PRP: laser to the ischemic peripheral retina that reduces VEGF production).",
    why: [
      "Correct: rubeosis iridis in an untreated diabetic, to be confirmed on gonioscopy and treated promptly.",
      "Normal iris vessels are radial and buried in the stroma; these are fine, tortuous, superficial and near the pupil, hence abnormal.",
      "Anterior uveitis (inflammation of the iris and ciliary body) gives cells in the anterior chamber and redness around the limbus, not a network of new vessels on the iris.",
      "PXF gives whitish flakes at the pupillary margin and a target on the capsule, not red vessels on the iris."
    ]
  },
  "C-059": {
    stem: "A 72-year-old woman with an ischemic central retinal vein occlusion (CRVO: blockage of the main vein of the retina) OD 10 weeks ago; IOP 31 mmHg today. The diagram shows her OD gonioscopy. Which mechanism explains the IOP rise at this stage?",
    options: [
      "Peripheral synechiae closing the angle around its entire circumference",
      "A fibrovascular membrane covering a still-open angle",
      "Pupillary block caused by a pupil stuck to the lens",
      "Blood in Schlemm canal from elevated venous pressure"
    ],
    explain: "**What the diagram shows:** the angle is open, but fine vessels cross the scleral spur and arborize over the trabecular meshwork: these are angle new vessels (neovascularization of the angle, NVA), whereas normal angle vessels do not cross the spur. **Why it matters:** the ischemic retina releases VEGF; the new vessels are accompanied by a fibrovascular membrane (tissue made of vessels and scar) that lines the filter and blocks outflow while the angle is still open; the membrane then contracts and pulls the iris onto the meshwork (synechiae), closing the angle irreversibly, often about 3 months after an ischemic CRVO (\"90-day glaucoma\"). **What to do:** treat quickly during this open, still reversible stage: intravitreal anti-VEGF, panretinal photocoagulation and pressure-lowering drops.",
    why: [
      "That is the next, synechial stage: on the diagram, the angle is still open and no synechiae are seen.",
      "Correct: open-angle stage of neovascular glaucoma, still reversible.",
      "Pupillary block (iris stuck to the lens over 360°, bowing forward) would close the angle peripherally; here, the angle is open and the spur visible.",
      "Blood can reflux into Schlemm canal during gonioscopy when episcleral venous pressure is high; it forms a red band without branches and does not explain this IOP."
    ]
  },
  "C-060": {
    stem: "A 68-year-old man with an ischemic CRVO OS 3 months ago. Red, painful eye, cornea steamy from edema, IOP 46 mmHg, iris and angle new vessels, synechiae over 180°; VA 6/60 (20/200). What is the best initial management?",
    options: [
      "Pilocarpine 2 % to open the angle, then laser iridotomy",
      "Urgent trabeculectomy with mitomycin C, with no other treatment",
      "Anti-VEGF, pressure-lowering drops, atropine and steroid, then PRP",
      "Cyclophotocoagulation alone, since vision is already compromised"
    ],
    explain: "**What it is:** neovascular glaucoma, in which the ischemic retina, through VEGF, grows vessels that obstruct and then close the angle. **Why it matters:** the cause must be treated (intravitreal anti-VEGF, which makes new vessels regress within days, then panretinal photocoagulation for a lasting effect), IOP lowered (beta-blocker, carbonic anhydrase inhibitor, alpha-agonist, oral acetazolamide if needed) and the eye calmed (atropine, which relieves pain and stabilizes the blood–aqueous barrier, and a topical steroid); pilocarpine is contraindicated, because it increases inflammation and cannot reopen an angle sealed by synechiae. **What to do:** if IOP stays high, prefer a drainage tube (Ahmed, Baerveldt) to trabeculectomy, keep cyclophotocoagulation for eyes with low visual potential, and look for the cause: with no diabetes or obvious vein occlusion, think of ocular ischemic syndrome (reduced blood supply to the whole eye from carotid narrowing) and order a carotid Doppler.",
    why: [
      "Trap: pilocarpine worsens inflammation and does not reopen an angle closed by synechiae; there is no pupillary block to relieve.",
      "With active new vessels, trabeculectomy bleeds and often fails from scarring; VEGF is treated first, and a tube is generally preferred.",
      "Correct: treat the cause (anti-VEGF, PRP), the IOP and the inflammation at the same time.",
      "Cyclophotocoagulation (a laser that destroys part of the ciliary body) does not treat the ischemia: alone, it lets the new vessels progress; it is mainly reserved for painful eyes or those with low visual potential."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "C-061": {
    stem: "A 27-year-old man with severe allergic keratoconjunctivitis treated with prednisolone acetate 1 % QID for 4 weeks. IOP 33 mmHg OD, versus 15 mmHg before treatment; quiet anterior chamber, open angle. What is the most appropriate management?",
    options: [
      "Switch to loteprednol or reduce the steroid, and add a pressure-lowering drop",
      "Replace with difluprednate, a steroid that raises IOP less",
      "Continue the same steroid and plan a trabeculectomy soon",
      "Perform a laser iridotomy to prevent angle closure"
    ],
    explain: "**What it is:** a steroid response: in some people, the \"responders\" (more often with a personal or family history of POAG, high myopia, or in children), steroids alter the trabecular matrix and impede outflow, usually 2 to 6 weeks after starting the drops. **Why it matters:** the risk depends on potency and route: difluprednate and prednisolone acetate raise IOP more often than weaker steroids such as loteprednol or fluorometholone, and intravitreal depots or implants (triamcinolone, dexamethasone, fluocinolone) can cause prolonged rises. **What to do:** reduce or replace the steroid (a weaker one, or a steroid-sparing topical anti-allergic), add a pressure-lowering drop and follow IOP until it returns to normal; if it persists, SLT is an effective option and an accessible depot can be removed.",
    why: [
      "Correct: remove or soften the cause and lower IOP in the meantime.",
      "On the contrary, difluprednate is one of the steroids that raise IOP the most, often quickly.",
      "The rise is generally reversible when the steroid is withdrawn; surgery is reserved for refractory IOP or progressing damage.",
      "The angle is open: the mechanism is trabecular, with no pupillary block, and iridotomy does not help."
    ]
  },
  "C-062": {
    stem: "A 45-year-old man with chronic recurrent anterior uveitis (inflammation of the iris and ciliary body). The iris is stuck to the lens around the entire pupil (360° posterior synechiae); IOP 44 mmHg, chamber deep centrally but very shallow peripherally. The photo shows the eye at the slit lamp. Which treatment addresses the mechanism?",
    options: [
      "Pilocarpine 2 % to pull the iris centrally and open the angle",
      "A prostaglandin analog alone, as first line",
      "360° SLT to increase trabecular outflow",
      "Laser iridotomy or surgical iridectomy"
    ],
    explain: "**What the photo shows:** the iris bows forward (iris bombé): aqueous humor, produced behind the iris, can no longer pass through the pupil sealed to the lens (seclusio pupillae); it accumulates behind the iris and pushes it against the trabecular meshwork, which closes the angle. **Why it matters:** this is an inflammatory pupillary block; until a new pathway is created, drops alone fail and peripheral synechiae (iris sealed to the angle) set in. **What to do:** open a pathway with a laser iridotomy (often more than one, because they close in an inflamed eye) or a surgical iridectomy, which is more durable, while controlling inflammation (steroid, cycloplegic) and IOP (aqueous suppressants).",
    why: [
      "Pilocarpine worsens inflammation, promotes new synechiae and cannot relieve the pupillary block.",
      "Prostaglandin analogs (drops that increase uveoscleral outflow) are used cautiously in uveitis and do not relieve pupillary block.",
      "The angle is closed by the iris: the laser cannot reach the trabecular meshwork, and SLT works poorly in an inflamed eye.",
      "Correct: a new pathway through the iris relieves the block and flattens the iris."
    ]
  },
  "C-063": {
    stem: "A 32-year-old HLA-B27-positive man (a genetic marker linked to spondyloarthritis) with acute anterior uveitis: on day 1, anterior chamber cells 3+ and IOP 7 mmHg. After 10 days of prednisolone acetate 1 % (hourly, then QID): cells 0.5+ and IOP 30 mmHg; open angle, no synechiae. What is the most likely explanation?",
    options: [
      "A definite steroid response, requiring the steroid to be stopped at once",
      "The ciliary body resumes secretion while the trabecular meshwork is still affected",
      "Early iris bombé from posterior synechiae, despite an open angle",
      "IOP overestimated because of corneal edema, to be remeasured without treatment"
    ],
    explain: "**What it is:** during acute inflammation, the inflamed ciliary body produces less aqueous, which masks a trabecular meshwork clogged with cells and proteins, or itself inflamed (trabeculitis); as the eye settles, production returns before the filter recovers, and IOP rises. **Why it matters:** do not jump to a steroid response (more typical after 2 to 6 weeks) or stop the steroid abruptly, which would make the uveitis rebound; other uveitides raise IOP through viral trabeculitis (HSV, VZV, CMV) or in Posner-Schlossman syndrome (unilateral attacks of very high IOP with few cells). **What to do:** keep controlling the inflammation with a gradual taper, add an aqueous suppressant (beta-blocker, carbonic anhydrase inhibitor), avoid pilocarpine and recheck IOP closely; if it keeps rising after a few weeks, switch to a weaker steroid.",
    why: [
      "A steroid response remains possible, but it is less typical at 10 days; stopping abruptly makes the uveitis rebound, so taper gradually.",
      "Correct: ciliary secretion recovers before the filter, hence the IOP rise as the eye settles.",
      "Iris bombé requires a pupil sealed over 360° and closes the angle peripherally; here, the angle is open, without synechiae.",
      "Corneal edema tends to make Goldmann tonometry underestimate IOP, not overestimate it."
    ]
  },
  "C-064": {
    stem: "A 67-year-old woman, postoperative day 1 after a trabeculectomy (a fistula under a scleral flap that drains aqueous into a pocket under the conjunctiva, the bleb) with mitomycin C OD: IOP 3 mmHg, flat bleb, shallow anterior chamber (iris and cornea touching peripherally), blurred vision. The diagram shows fluorescein applied to the bleb. What is the most appropriate management?",
    options: [
      "Massage the globe through the lid to restart filtration",
      "Laser lysis of a flap suture to increase drainage",
      "Close the leak and protect the chamber (atropine, close follow-up)",
      "Start pilocarpine to pull the iris out of the angle"
    ],
    explain: "**What the diagram shows:** a positive Seidel test: concentrated fluorescein is diluted by a trickle of aqueous escaping from the bleb or the conjunctival wound. **Why it is a trap:** low IOP + shallow chamber means too much aqueous outflow (leak, overfiltration or choroidal effusion: detachment of the choroid by fluid); massaging or opening the flap would worsen the hypotony and could flatten the chamber, with a risk of lens–cornea touch, macular folds (hypotony maculopathy) and bleb failure. **What to do:** atropine to move the lens and iris back, an aqueous suppressant to reduce flow through the leak, a bandage contact lens or pressure patch, suturing if the leak persists or is large, and reformation of the chamber (viscoelastic) if there is lens–cornea touch.",
    why: [
      "Trap: massage pushes even more aqueous out; it is reserved for high IOP with a deep chamber.",
      "Suture lysis opens the flap to increase filtration: it is used when IOP is too high, not too low.",
      "Correct: close the leak and protect the anterior chamber.",
      "Pilocarpine moves the lens and iris forward and increases inflammation: it would make the chamber even shallower."
    ]
  },
  "C-065": {
    stem: "A 62-year-old man, postoperative day 8 after a trabeculectomy with mitomycin C: IOP 27 mmHg, deep anterior chamber, flat and limited bleb, negative Seidel test; on gonioscopy, the internal ostium of the fistula is clear. What is the best management?",
    options: [
      "Atropine and supine positioning to deepen the anterior chamber",
      "Immediate bleb needling with a subconjunctival antimetabolite injection",
      "Pilocarpine to restart outflow through the remaining meshwork",
      "Digital massage, then laser suture lysis or removal of a releasable suture"
    ],
    explain: "**What it is:** high IOP + deep chamber + flat bleb with a clear internal ostium means the scleral flap is too tight: not enough aqueous passes to the bleb. **Why it matters:** the surgeon deliberately tightens the flap to avoid early hypotony, then adjusts filtration during the first weeks, before scarring fixes the result (mitomycin extends this window). **What to do:** try digital massage through the lid, then cut a suture with the laser through a lens that compresses the conjunctiva (laser suture lysis) or pull a releasable suture; a few weeks later, a high, tense, vascularized bleb with high IOP rather suggests an encapsulated bleb, treated by needling (a needle slipped under the conjunctiva to open the fibrous capsule).",
    why: [
      "Atropine and supine positioning are for a shallow chamber; here, it is deep.",
      "Needling targets an encapsulated bleb, high and tense, which comes later; here, the bleb is flat and the cause is a flap that is too tight.",
      "Pilocarpine has no effect on the flap; it adds inflammation and miosis without addressing the cause.",
      "Correct: gradually open the flap to increase filtration."
    ]
  },
  "C-066": {
    stem: "A 70-year-old hyperopic woman, postoperative day 3 after a trabeculectomy OS: IOP 38 mmHg, anterior chamber uniformly flat centrally and peripherally, patent iridectomy, flat bleb, negative Seidel, moderate pain. B-scan shows no choroidal detachment. What is the most likely diagnosis?",
    options: [
      "Aqueous misdirection (malignant glaucoma)",
      "Delayed suprachoroidal hemorrhage",
      "Pupillary block from a non-functional iridectomy",
      "Overfiltration complicated by choroidal effusion"
    ],
    explain: "**What it is:** in aqueous misdirection (malignant glaucoma), aqueous humor flows posteriorly into the vitreous instead of toward the pupil; the vitreous swells and pushes the lens and iris forward. **Why it matters:** this gives high IOP with a chamber flat throughout despite a patent iridectomy, with no blood or fluid under the choroid on ultrasound, and the short hyperopic eye is a typical setting. **What to do:** cycloplegic (atropine, which pulls the lens back), aqueous suppressants and a hyperosmotic agent (mannitol, which dehydrates the vitreous), without pilocarpine, which makes it worse; if this fails, YAG laser to open the membrane at the front of the vitreous (anterior hyaloid) in a pseudophakic eye, or vitrectomy (surgery that removes the vitreous).",
    why: [
      "Correct: high IOP, uniformly flat chamber, patent iridectomy and flat choroid on ultrasound.",
      "Suprachoroidal hemorrhage (bleeding under the choroid) gives sudden, intense pain and dark dome-shaped choroidal elevations, clearly visible on ultrasound.",
      "Pupillary block bows the iris peripherally and leaves the central chamber deeper; it requires an occluded iridectomy, whereas here it is patent.",
      "Overfiltration and choroidal effusion give low IOP, not 38 mmHg, and ultrasound would show the choroidal detachment."
    ]
  },
  "C-067": {
    stem: "A 58-year-old man with refractory glaucoma who had a Baerveldt tube last week: the plate is fixed to the sclera between two rectus muscles, well behind the limbus, and the tube enters the anterior chamber. The surgeon tied an absorbable suture around the tube. Why?",
    options: [
      "To fix the tube to the sclera and keep it from backing out of the anterior chamber",
      "To block flow until a capsule forms around the plate",
      "To replace the flow-limiting valve, removed to avoid encapsulation",
      "To keep aqueous from reaching the neighboring suprachoroidal space"
    ],
    explain: "**What it is:** a glaucoma drainage device carries aqueous from the anterior chamber to a plate placed under Tenon capsule, near the equator of the globe; within a few weeks, a fibrous capsule forms around the plate and becomes the reservoir whose wall restricts and absorbs the flow. **Why it matters:** the Baerveldt has no valve, so without an obstruction all the aqueous would drain from day one (hypotony, flat chamber, choroidal effusion); hence the absorbable ligature, sometimes with a thread slipped into the tube lumen (ripcord) that is removed in clinic, whereas the Ahmed contains a valve that limits flow from the start (some surgeons also leave a ripcord in a PreserFlo or a XEN placed with an open conjunctival approach, to adjust filtration in clinic). **What to do:** expect IOP to stay high, on drops, until the ligature releases at around 4 to 6 weeks, and watch at follow-up for tube exposure (worn conjunctiva uncovering it, a portal of entry for infection) and tube–cornea touch (endothelial cell loss).",
    why: [
      "The plate is sutured to the sclera and the tube is covered with a patch graft (sclera, pericardium or cornea); the ligature does not serve as an anchor.",
      "Correct: the ligature prevents early hypotony with a non-valved tube.",
      "The Baerveldt never had a valve; the Ahmed has one, and a fibrous capsule forms around both plates.",
      "Aqueous goes to the plate under Tenon, not to the suprachoroidal space; the ligature controls flow in the tube."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "C-068": {
    stem: "A 66-year-old woman, trabeculectomy with mitomycin C 6 years ago; thin white (avascular) bleb. For 24 h: red eye, pain, discharge, VA dropped from 6/9 (20/30) to hand motions. Milky white bleb, hypopyon (a level of pus in the anterior chamber), dense vitreous cells. What is the diagnosis and management?",
    options: [
      "Blebitis: hourly topical antibiotic and recheck in 48 h",
      "Late non-infectious uveitis: intensive topical steroid and cycloplegic",
      "Bleb leak: bandage contact lens and IOP suppressants",
      "Endophthalmitis: urgent tap and intravitreal antibiotics"
    ],
    explain: "**What it is:** bleb-related endophthalmitis: bacteria cross a thin bleb, sometimes years after surgery, and infect the inside of the eye as far as the vitreous. **Why it matters:** it must be distinguished from blebitis (infection limited to the bleb, milky white surrounded by redness, with little chamber reaction and a clear vitreous); here, the hypopyon, inflamed vitreous and loss of vision indicate vitreous involvement, an emergency, because the organisms involved (streptococci, Haemophilus) destroy the retina quickly. **What to do:** the same day, vitreous tap for culture and intravitreal injection of vancomycin 1 mg/0.1 mL and ceftazidime 2.25 mg/0.1 mL (± vitrectomy), with intensive topical antibiotics; once the infection is controlled, repair the bleb if it leaks.",
    why: [
      "This treatment suits blebitis without vitreous involvement; here, the hypopyon and inflamed vitreous require immediate intravitreal treatment.",
      "Steroids alone would let the bacteria destroy the eye: thin bleb + red, painful eye = infection until proven otherwise.",
      "A bleb leak (positive Seidel test) can be the portal of entry, but on its own it causes neither hypopyon nor an inflamed vitreous.",
      "Correct: bleb-related endophthalmitis = intravitreal tap and antibiotic injection without delay."
    ]
  },

  // ---- data/quiz-photos.js ----
  "B-101": {
    stem: "Gritty sensation and fluctuating vision at the end of the day. After instilling fluorescein, the patient is asked to keep the eyes open without blinking (cobalt blue light). What do the dark lines that appear on the cornea represent?",
    options: [
      "Punctate epithelial erosions that do not take up the dye",
      "Tear film breakup, a sign of an unstable film",
      "Folds in Descemet membrane due to edema",
      "Herpetic dendrites seen as negative staining"
    ],
    explain: "The dark areas that appear in the fluorescein-stained film between two blinks are the places where the tear film has broken up. The interval between the last blink and the first dark spot is the tear breakup time: less than 10 seconds indicates an unstable film, common in dry eye.",
    why: [
      "False: punctate erosions take up fluorescein and appear as bright green dots, not dark lines.",
      "Correct: dark lines = areas without film; a short breakup time (less than 10 s) reflects an unstable film.",
      "False: Descemet folds are seen with a thin slit in an edematous stroma, not as lines that appear between two blinks.",
      "False: a herpetic dendrite is an epithelial ulcer that retains fluorescein (bright green), with terminal bulbs."
    ]
  },
  "B-102": {
    stem: "Intense pain, photophobia and vision loss for 36 hours. Here is the appearance of the eye under diffuse illumination. What is the most appropriate immediate management?",
    options: [
      "Corneal scraping for cultures, then fortified antibiotics alternating hourly",
      "A topical corticosteroid alone to limit scarring, then recheck in 48 hours",
      "Occlusive patch and lubricant, then recheck in 2 to 3 days",
      "An oral antiviral and follow-up in one week"
    ],
    explain: "The suppurative infiltrate is central, much larger than 2 mm, with a strong reaction: the 1-2-3 rule calls for cultures and then fortified antibiotics. Fortified drops are concentrated antibiotics compounded by the hospital pharmacy (for example vancomycin 25 mg/mL and tobramycin 14 mg/mL), given alternating hourly, day and night, for the first 24–48 hours. Pseudomonas, the leading cause in contact lens wearers, produces this necrotic appearance with mucopurulent exudate.",
    why: [
      "Correct: central infiltrate larger than 2 mm with a significant reaction; cultures first make it possible to adjust treatment later.",
      "False: a corticosteroid alone on an active infection worsens melting; even as an adjunct to an antibiotic, the SCUT trial showed no overall benefit.",
      "False: an occlusive patch is contraindicated in infectious keratitis and delays treatment.",
      "False: the dense, suppurative appearance points to a bacterium, not a virus; waiting a week threatens the eye."
    ]
  },
  "B-103": {
    stem: "Soft contact lens wearer; intense pain that persists despite a week of antibiotic drops. Slit lamp, diffuse illumination. Which diagnosis should this corneal appearance bring to mind first?",
    options: [
      "Pseudomonas bacterial keratitis",
      "Dendritic herpetic epithelial keratitis",
      "Acanthamoeba keratitis",
      "Subepithelial infiltrates of adenoviral keratoconjunctivitis"
    ],
    explain: "The paracentral stromal ring surrounding a clearer zone is the ring infiltrate typical of Acanthamoeba keratitis, an infection by a free-living ameba found in water, mainly in contact lens wearers. The diagnosis is confirmed by scraping (culture, PCR) or by confocal microscopy, as in this patient according to the source.",
    why: [
      "False: Pseudomonas can form an immune ring, but mainly a dense, suppurative abscess that progresses quickly; a ring in a minimally suppurative eye, despite antibiotics, points to the ameba.",
      "False: the herpetic dendrite is a branching epithelial ulcer with terminal bulbs, not a ring in the stroma.",
      "Correct: paracentral ring infiltrate, classic for the stromal stage of amebic keratitis.",
      "False: adenoviral infiltrates are multiple, small and round, just beneath the epithelium, after contagious conjunctivitis."
    ]
  },
  "B-104": {
    stem: "Patient on long-term topical corticosteroids after a corneal graft, with a red, watery eye. Here is the cornea after fluorescein, under cobalt blue light. What is the most likely diagnosis?",
    options: [
      "A healing corneal abrasion",
      "Zoster (VZV) pseudodendrites",
      "Early Acanthamoeba keratitis",
      "Herpes simplex (HSV) epithelial keratitis"
    ],
    explain: "A branching lesion whose base retains fluorescein, with swellings at the ends of the branches (terminal bulbs): this is a herpes simplex virus (HSV) dendritic ulcer, with broad branches; on corticosteroids, these dendrites can coalesce into a geographic ulcer. Treatment: an antiviral, for example valacyclovir 500 mg PO TID or acyclovir 400 mg PO 5 times daily for 7–10 days, and a careful reassessment of the corticosteroids (after a graft, do not stop them abruptly: risk of rejection).",
    why: [
      "False: a closing abrasion can leave a healing line, but without branches ending in terminal bulbs.",
      "False: zoster (varicella-zoster virus) pseudodendrites are elevated, stain poorly and have no terminal bulbs.",
      "False: the ameba can produce pseudodendrites early on, but not a frank, well-stained ulcer with terminal bulbs.",
      "Correct: a stained branching ulcer with terminal bulbs, promoted by topical corticosteroids."
    ]
  },
  "B-105": {
    stem: "A patient known to have advanced keratoconus, photographed while looking down. Which sign is illustrated?",
    options: [
      "Munson sign",
      "Rizzuti sign",
      "Fleischer ring",
      "Vogt striae"
    ],
    explain: "On downgaze, the cone pushes the lower lid, whose margin bulges into a V: this is Munson sign. It is a late sign of advanced keratoconus, worth recognizing but useless for early diagnosis, which relies on tomography.",
    why: [
      "Correct: lower lid margin bulged by the cone on downgaze.",
      "False: Rizzuti sign is a conical reflex on the nasal iris when the cornea is lit from the temporal side.",
      "False: the Fleischer ring is a brown iron deposit at the base of the cone, within the cornea.",
      "False: Vogt striae are fine lines in the deep stroma, seen at the slit lamp."
    ]
  },
  "B-106": {
    stem: "A patient followed for advanced keratoconus. At the slit lamp, under cobalt blue light, you see a thin dark-brown line encircling the base of the cone. What does this ring represent?",
    options: [
      "A copper deposit in peripheral Descemet (Kayser-Fleischer ring)",
      "A lipid deposit in the peripheral stroma (arcus senilis)",
      "An iron deposit in the basal epithelium at the base of the cone (Fleischer ring)",
      "Iris pigment deposited on the endothelium (Krukenberg spindle)"
    ],
    explain: "The Fleischer ring is an iron deposit in the basal epithelium that outlines the base of the cone; it is best seen under cobalt blue light, where it appears dark. The trap is the name: the Kayser-Fleischer ring of Wilson disease (copper overload) lies in Descemet, very close to the limbus, and is unrelated to keratoconus.",
    why: [
      "False: a classic trap; the Kayser-Fleischer ring (copper, Wilson disease) involves Descemet very close to the limbus.",
      "False: arcus senilis is grey-white, peripheral, separated from the limbus by a clear zone, unrelated to a cone.",
      "Correct: an epithelial iron deposit encircling the base of the cone.",
      "False: the Krukenberg spindle is a vertical band of pigment on the endothelium, in pigment dispersion."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "B-107": {
    stem: "Scheimpflug tomography (Pentacam, four-map display: axial curvature, anterior elevation, pachymetry, posterior elevation). Which reading is most accurate?",
    options: [
      "Regular with-the-rule astigmatism: symmetric vertical bowtie and normal pachymetry",
      "Inferior steepening, thinnest point decentered inferiorly and bulging on both elevations: keratoconus",
      "Crab claw and band-shaped thinning near the inferior limbus: pellucid marginal degeneration",
      "Central flattening after refractive surgery, with no posterior elevation abnormality"
    ],
    explain: "The axial curvature shows inferior paracentral steepening up to 56 D; the pachymetry, a thinnest point decentered inferotemporally, with a cornea thinner below than above; the anterior and posterior elevations, an inferior hot spot. This combination points to keratoconus (progressive corneal ectasia); posterior elevation and thinning at the thinnest point are markers recognized by the global consensus.",
    why: [
      "False: the map is not symmetric; the top is flat (about 38 D) and the bottom very steep.",
      "Correct: inferior steepening, decentered thinnest point and matching bulges on all four maps.",
      "False: the crab claw gives two lateral hot zones curving downward, with the thinnest band 1–2 mm from the inferior limbus; here, the thin zone is paracentral and the inferior periphery remains thick (blue-violet).",
      "False: a myopic ablation flattens the center (central cool zone), with no inferior hot spot or posterior bulge."
    ]
  },
  "B-108": {
    stem: "Blurred vision in the morning that improves during the day. Slit lamp, wide beam. What are the fine dots visible, and where are they located?",
    options: [
      "Punctate epithelial erosions, on the corneal surface",
      "Subepithelial infiltrates, in the anterior stroma",
      "Pseudoexfoliation deposits, on the lens capsule",
      "Guttae, on the posterior surface of the cornea (endothelium)"
    ],
    explain: "Guttae are excrescences of Descemet membrane produced by a diseased endothelium; they appear as fine dots on the posterior surface of the cornea, with a beaten-metal look when they coalesce. Central guttae and morning blur (edema that accumulates overnight, with the lids closed) suggest Fuchs endothelial dystrophy.",
    why: [
      "False: erosions are on the surface and show up mainly with fluorescein.",
      "False: subepithelial infiltrates are larger, grey-white, located just beneath the epithelium.",
      "False: pseudoexfoliation (a deposit of fibrillar material) is seen on the lens, behind the pupil, not in the cornea.",
      "Correct: endothelial guttae, a sign of Fuchs dystrophy."
    ]
  },
  "B-109": {
    stem: "A patient with an old penetrating keratoplasty (full-thickness corneal graft), blurred vision and photophobia for 2 days. Photo with sclerotic scatter. What is the most appropriate management?",
    options: [
      "Endothelial rejection: intensive topical corticosteroid starting today",
      "Herpetic epithelial keratitis: oral antiviral alone",
      "Late non-immune decompensation: simple observation",
      "Suture abscess: suture removal and antibiotic"
    ],
    explain: "The line of precipitates crossing the graft, with edema on the side already crossed, is a Khodadoust line: the front of lymphocytes destroying the donor endothelium. It is an emergency: intensive, frequent topical corticosteroid, sometimes supplemented by a systemic or periocular steroid. The RSVP reminder (redness, sensitivity to light, vision loss, pain) warrants a same-day visit.",
    why: [
      "Correct: Khodadoust line with precipitates at the front and edema behind; treat immediately to save the graft.",
      "False: no dendritic ulcer is visible; the involvement is endothelial, not epithelial.",
      "False: non-immune endothelial attrition is gradual, without a line of precipitates or inflammation.",
      "False: no localized white infiltrate around a suture is visible; the line crosses the graft."
    ]
  },
  "C-101": {
    stem: "A 71-year-old woman, fundus photographs of both eyes. What is the most likely diagnosis?",
    options: [
      "Old anterior ischemic optic neuropathy",
      "Bilateral optic disc edema",
      "Advanced glaucoma in both eyes",
      "Compressive optic atrophy"
    ],
    explain: "Both discs are almost entirely cupped, the rim has nearly disappeared and the vessels dive into the cup and reappear at its floor (bayoneting): this is advanced glaucoma, here open-angle according to the source. Deep cupping points to glaucoma; pallor more extensive than the cupping would prompt a search for another cause.",
    why: [
      "False: ischemic optic neuropathy (infarction of the optic nerve head) leaves pallor, often sectoral, without such deep cupping.",
      "False: disc edema gives blurred, elevated margins with obscured vessels, the opposite of cupping.",
      "Correct: near-total cupping, vanished rim, bayoneting vessels and peripapillary atrophy.",
      "False: compressive atrophy (a nerve compressed by a mass) mainly gives pallor, with little cupping."
    ]
  },
  "C-102": {
    stem: "Fundus photograph of the left eye of a patient followed for open-angle glaucoma. Which visual field defect is expected?",
    options: [
      "An inferior arcuate defect",
      "A superior arcuate defect",
      "A bitemporal hemianopia",
      "An isolated central scotoma"
    ],
    explain: "The disc shows an inferior notch of the rim, from which a band lacking the nerve fiber reflex extends temporally (a defect described by the source, clearer on OCT). The inferior retina sees the superior field: inferior damage to the disc therefore gives a superior arcuate defect, often with a nasal step. This patient's field did show a superior arcuate scotoma.",
    why: [
      "False: a common trap; the damage is inferior on the disc, so the defect is superior in the field.",
      "Correct: inferior notch → superior arcuate defect.",
      "False: bitemporal hemianopia comes from the chiasm and respects the vertical meridian.",
      "False: an isolated central scotoma points to the macula or the papillomacular bundle, not to an inferior notch."
    ]
  },
  "C-103": {
    stem: "A patient followed for normal-tension glaucoma, IOP considered at target for one year. Here is his disc at the follow-up visit. What is the most appropriate course of action?",
    options: [
      "Reassure: it is a photographic artifact with no clinical value",
      "Stop treatment since the IOP is normal",
      "Refer urgently for ischemic optic neuropathy",
      "Treat it as a sign of insufficient control: revisit the target and bring fields and OCT closer together"
    ],
    explain: "A flame-shaped disc hemorrhage is seen at the inferotemporal margin (bottom left). More common in normal-tension glaucoma, it is a risk factor for progression; the source describes it as a sign of insufficient IOP control. Document it, schedule visual fields and OCT more frequently, and consider lowering the target.",
    why: [
      "False: the hemorrhage is real and significant; it resorbs within a few weeks to a few months, hence the importance of recording it.",
      "False: in normal-tension glaucoma, lowering IOP slows progression (CNTGS), even when it is called normal.",
      "False: ischemic neuropathy gives acute disc edema, not a large chronic cup with an isolated hemorrhage.",
      "Correct: the disc hemorrhage signals a risk of progression; adjust the target and the monitoring."
    ]
  },
  "C-104": {
    stem: "A hyperopic patient woken by intense pain in the right eye, with headache, nausea and vision loss. What is the priority?",
    options: [
      "Measure IOP and lower it medically, then perform a laser iridotomy",
      "Dilate the pupil to better examine the fundus",
      "Prescribe a topical antibiotic for conjunctivitis",
      "Prescribe a topical corticosteroid alone and recheck in a week"
    ],
    explain: "A red right eye with a hazy cornea in a symptomatic hyperope: this is an acute angle-closure attack (IOP over 70 mmHg according to the source). Lower IOP medically (topical beta-blocker, alpha-agonist and carbonic anhydrase inhibitor, acetazolamide 500 mg PO or IV), add pilocarpine once IOP has come down, then perform a laser peripheral iridotomy (a small opening in the iris), in both eyes.",
    why: [
      "Correct: a sight-threatening emergency; medical lowering of IOP then iridotomy, and examination of the fellow eye.",
      "False: dilating the pupil can worsen or trigger angle closure.",
      "False: the hazy cornea, intense pain and nausea are not those of conjunctivitis.",
      "False: the steroid calms inflammation but does not lower IOP; waiting loses the optic nerve."
    ]
  },
  "C-105": {
    stem: "Dilated pupil, slit lamp. Which diagnosis does this appearance of the anterior lens capsule suggest?",
    options: [
      "Pigment dispersion syndrome",
      "Glaukomflecken after an angle-closure attack",
      "Pseudoexfoliation syndrome",
      "Congenital anterior polar cataract"
    ],
    explain: "A central disc with a scalloped edge, a clear zone, then material in the periphery: this is the typical target of pseudoexfoliation syndrome, an age-related deposit of fibrillar material (LOXL1 gene). It predisposes to secondary open-angle glaucoma, weak zonules and poor dilation during cataract surgery.",
    why: [
      "False: pigment dispersion deposits pigment (Krukenberg spindle, Scheie line), not a target-shaped deposit on the capsule.",
      "False: glaukomflecken (necrosis of the lens epithelium after an attack) are small scattered white spots, without a disc or ring.",
      "Correct: a target-shaped deposit on the anterior capsule, the key sign of pseudoexfoliation.",
      "False: anterior polar cataract is a small, well-defined central opacity, with no peripheral ring."
    ]
  },
  "C-106": {
    stem: "A 57-year-old man with poorly controlled type 2 diabetes, proliferative diabetic retinopathy, IOP 32 mmHg in the left eye (photo); open angle on gonioscopy with 360° new vessels. What is the treatment priority?",
    options: [
      "Topical pilocarpine to open the angle",
      "Selective laser trabeculoplasty (SLT)",
      "Laser peripheral iridotomy",
      "Treat the ischemia: panretinal photocoagulation ± intravitreal anti-VEGF"
    ],
    explain: "The fine vessels on the surface of the iris are new vessels (rubeosis iridis) caused by diabetic retinal ischemia; with the elevated IOP, this is neovascular glaucoma still at the open-angle stage. The priority is to remove the stimulus: panretinal photocoagulation (a laser that destroys the ischemic retina) with or without an intravitreal anti-VEGF injection (a drug that makes new vessels regress), in addition to pressure-lowering drops.",
    why: [
      "False: pilocarpine (a drop that constricts the pupil) increases inflammation and does not address the cause.",
      "False: SLT (a laser that stimulates the trabecular meshwork to improve outflow) has no effect on a fibrovascular membrane covering the angle.",
      "False: there is no pupillary block; the angle is open but invaded by new vessels.",
      "Correct: treating the ischemia makes the new vessels regress before the angle closes with synechiae."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "C-107": {
    stem: "One week after placement of an Ahmed drainage tube, the anterior chamber is flat and IOP is 7 mmHg. What does the photo taken through the pupil show?",
    options: [
      "A massive suprachoroidal hemorrhage",
      "Choroidal detachments touching centrally",
      "Iris bombé from pupillary block",
      "Aqueous misdirection (malignant glaucoma)"
    ],
    explain: "Two brownish domes meet behind the pupil, on either side of a vertical line of contact: these are serous \"kissing\" choroidal detachments (kissing choroidals), due to overfiltration through the tube (hypotony, flat chamber). Suprachoroidal hemorrhage is the main diagnosis to rule out: sudden pain and often elevated IOP. Here, the tube was ligated for fear of such a hemorrhage, and the detachments had resolved by the next day (source).",
    why: [
      "False: suprachoroidal hemorrhage (bleeding between choroid and sclera) typically gives sudden pain and elevated IOP, with dark red domes; here, IOP is low (7 mmHg).",
      "Correct: hypotony and a flat chamber after a tube, with choroidal detachments meeting centrally.",
      "False: in iris bombé, the iris pushes forward and IOP rises; there are no domes behind the pupil.",
      "False: in misdirection (aqueous diverted into the vitreous), the chamber is flat with normal or elevated IOP, without choroidal detachment."
    ]
  },
  "C-108": {
    stem: "A 34-year-old man referred for \"severe thinning of the temporal rim\". The RNFL OCT is normal in all quadrants. What is the most likely explanation?",
    options: [
      "Gray crescent: pigment at the temporal margin that mimics a thinned rim",
      "Early glaucoma with a falsely reassuring OCT",
      "Beta-zone peripapillary atrophy",
      "Tilted disc of high myopia"
    ],
    explain: "The slate-grey band at the temporal margin of the disc is a gray crescent: pigment in the peripheral disc tissue. If the true disc margin is traced outside the crescent, the temporal rim is healthy, as confirmed by the normal OCT (the source caption \"severe thinning of the temporal neuroretinal rim\" describes the misleading impression, not the diagnosis). More common in patients of African ancestry, it does not increase the risk of glaucoma according to the source: recognizing it avoids a false glaucoma-suspect diagnosis and unnecessary treatment.",
    why: [
      "Correct: a classic trap; the pigment suggests a thin rim when the neural tissue is present.",
      "False: a falsely normal OCT (green disease) exists, but here the pigment explains the whole appearance and the OCT is normal in all quadrants.",
      "False: peripapillary atrophy lies outside the disc margin and exposes white sclera or large choroidal vessels.",
      "False: the tilted disc of a myope is oval and oblique, with a white scleral crescent, not a grey band within the disc."
    ]
  },
  "C-109": {
    stem: "Retroillumination (transillumination) of the iris at the slit lamp. Which mechanism explains the visible abnormalities?",
    options: [
      "Deposition of fibrillar material that wears the pupillary margin",
      "Ischemia of the iris stroma during an angle-closure attack",
      "Rubbing of the concave iris against the lens zonules",
      "Congenital absence of pigment throughout the iris"
    ],
    explain: "The radial red slits arranged in a ring in the iris periphery are the transillumination defects of pigment dispersion syndrome. The iris, concave posteriorly, rubs against the zonules and loses its pigment epithelium; this pigment deposits on the cornea (Krukenberg spindle), the lens (Scheie line) and the trabecular meshwork. Typical profile: young myopic man; risk of glaucoma about 10 % at 5 years.",
    why: [
      "False: that is the mechanism of pseudoexfoliation, which gives \"moth-eaten\" peripupillary defects.",
      "False: ischemia from an attack gives sectoral atrophy, often with a distorted pupil and glaukomflecken.",
      "Correct: mechanical iris–zonule rubbing, hence radial midperipheral defects.",
      "False: ocular albinism gives diffuse transillumination of the whole iris, not radial slits in a ring."
    ]
  },
  "A-101": {
    stem: "Annotated Humphrey 24-2 (SITA Standard) visual field report in a 23-year-old subject. Which conclusion is correct?",
    options: [
      "Unreliable test, because false negatives are 0 %",
      "Early defect, because the PSD is 1.21 dB",
      "Generalized depression, because the fovea is 36 dB",
      "Reliable test and normal field"
    ],
    explain: "Reliability is good (fixation losses 1/13, false positives 1 %, false negatives 0 %); the GHT (glaucoma hemifield test) is within normal limits, VFI 100 %, MD +0.28 dB and PSD 1.21 dB, with no cluster of significant points on the probability maps. Always read reliability before the indices: false positives above 15 % make a test unreliable.",
    why: [
      "False: few false negatives is a good sign; a test becomes questionable mainly with more than 15 % false positives or many fixation losses.",
      "False: a PSD of 1.21 dB is normal; a localized defect raises it markedly.",
      "False: 36 dB at the fovea is normal sensitivity, and the MD is positive.",
      "Correct: good reliability indices, normal GHT, normal MD and PSD."
    ]
  },
  "A-102": {
    stem: "Humphrey visual field: grayscale (left) and pattern deviation map (right). Which defect is present?",
    options: [
      "Superior quadrantanopia respecting the vertical meridian",
      "Superior arcuate defect with a nasal step",
      "Central scotoma",
      "Generalized depression as in cataract"
    ],
    explain: "The black zone occupies mainly the superior hemifield, in an arc, and stops sharply at the horizontal meridian on the nasal side (the blind spot, on the right, marks the temporal side): this is a superior arcuate defect with a nasal step, typical of nerve fiber damage as in glaucoma. The pattern deviation map confirms a localized defect.",
    why: [
      "False: here, the black squares extend on both sides of the vertical meridian; a defect stopping sharply at that meridian would point to the chiasm or the posterior visual pathways.",
      "Correct: respect of the horizontal meridian and a nasal step = nerve fiber damage (glaucoma).",
      "False: the defect occupies the superior hemifield in an arc, not just the point of fixation.",
      "False: a cataract depresses total deviation but leaves pattern deviation almost normal; here, it is very abnormal superiorly."
    ]
  },
  "A-201": {
    stem: "A corneal graft patient has been using prednisolone acetate for several years. He complains of glare from headlights at night and difficulty reading. Here is the image obtained on retroillumination, with the pupil dilated. What is the most likely finding?",
    options: [
      "Cortical cataract with peripheral spokes",
      "Brunescent nuclear cataract",
      "Posterior subcapsular cataract",
      "Endothelial rejection with precipitates"
    ],
    explain: "A granular central plaque on the red reflex, in a patient on long-term steroids, is typical of a posterior subcapsular cataract. It causes glare and difficulty with near tasks; IOP should also be measured (steroid response).",
    why: [
      "Cortical spokes run from the periphery toward the center like the spokes of a wheel; here, it is a granular central plaque.",
      "A brunescent nucleus gives a diffuse yellow-brown tint and a myopic shift, not a granular plaque on the red reflex.",
      "Correct: posterior central plaque, long-term steroids, glare and difficulty at near.",
      "Rejection is seen on the cornea (precipitates, edema), not as a plaque on the lens red reflex."
    ]
  },
  "A-202": {
    stem: "A 74-year-old woman with Fuchs dystrophy (confluent guttae, blurred vision in the morning) says she has been reading without glasses for a year. Refraction shows a myopic shift and the nucleus is dark brown. Which statement is correct?",
    options: [
      "The more refractive nucleus explains the myopia; its hardness will increase phaco energy and endothelial risk",
      "The myopic shift indicates late keratoconus caused by Fuchs edema; topography is needed first",
      "Nuclear sclerosis has no refractive effect; a retinal cause for this myopic shift must be sought",
      "It is better to wait until the cataract is mature to combine phaco and graft in a single surgery"
    ],
    explain: "Nuclear sclerosis increases the refractive index of the nucleus: myopic shift and \"second sight\". A hard nucleus requires more ultrasound energy, which increases endothelial loss on an already fragile Fuchs cornea: assess the endothelium and plan early with the cornea service.",
    why: [
      "Correct: a nuclear myopic shift and an endothelial risk increased by a hard nucleus.",
      "Fuchs edema does not create keratoconus; the myopic shift is explained by the nucleus.",
      "False: a myopic shift is precisely the classic refractive effect of nuclear sclerosis.",
      "Waiting hardens the nucleus further, increases the energy needed and puts the endothelium at greater risk."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "A-203": {
    stem: "A patient followed for stable open-angle glaucoma reports 5 days of central vision loss and distorted lines in one eye. On dilated fundus exam, you see this. What is the most appropriate course of action?",
    options: [
      "AREDS2-type supplements and a recheck in 6 months",
      "A 24-2 visual field to document progression",
      "Adding a second topical pressure-lowering drop",
      "Referral to retina within a few days for anti-VEGF"
    ],
    explain: "A macular subretinal hemorrhage with recent metamorphopsia suggests neovascular AMD. Anti-VEGF injections must start promptly to limit loss of central vision.",
    why: [
      "Supplements do not treat an active neovascular form; waiting 6 months would cost central vision.",
      "The problem is macular, not glaucomatous; the field would also be skewed by the central lesion.",
      "IOP explains neither a macular hemorrhage nor metamorphopsia.",
      "Correct: probable neovascular AMD, prompt referral for anti-VEGF."
    ]
  },
  "A-204": {
    stem: "A highly hyperopic patient (about +12 D) is referred to glaucoma for a narrow angle. Ultrasound biometry shows a very short eye and the B-scan shows this. Which risk should be flagged to the surgeon before any intraocular surgery?",
    options: [
      "Massive posterior vitreous detachment during phaco",
      "Uveal effusion and angle closure (nanophthalmos)",
      "Endothelial decompensation from an oversized cornea",
      "Capsular rupture from abnormally taut zonules"
    ],
    explain: "A very short eye with a thick scleral wall suggests nanophthalmos. The thick sclera impedes venous and fluid drainage from the choroid: risk of uveal effusion, spontaneous or during surgery, and of angle closure from a relatively large lens in a small anterior segment.",
    why: [
      "Vitreous detachment is not the risk specific to a short eye with thick sclera.",
      "Correct: nanophthalmos, with a risk of uveal effusion and angle closure.",
      "Nanophthalmos is rather associated with a small cornea; a large cornea is not the issue.",
      "The characteristic risk is not zonular; it is uveal effusion and angle closure."
    ]
  },
  "A-205": {
    stem: "Four days after a trabeculectomy, IOP is 3 mmHg, the anterior chamber is shallow and the patient has little pain. The fundus is poorly seen; the B-scan shows this. What is the most likely diagnosis?",
    options: [
      "Serous choroidal detachments from hypotony",
      "Total V-shaped rhegmatogenous retinal detachment",
      "Posterior vitreous detachment with hemorrhage",
      "Suprachoroidal hemorrhage with a large clot"
    ],
    explain: "Thick, convex domes with anechoic content, almost touching centrally, are serous choroidal detachments. With low IOP and little pain after filtering surgery, hypotony (overfiltration or a leak) is the cause.",
    why: [
      "Correct: smooth domes with black content, in a setting of postoperative hypotony.",
      "Detached retina forms a membrane attached to the optic nerve, not thick fluid-filled domes.",
      "Detached vitreous is thin, very mobile and weakly reflective; it does not form convex domes.",
      "Hemorrhage gives echogenic content, sudden pain and a rather elevated IOP."
    ]
  },
  "A-206": {
    stem: "An 82-year-old patient with a white hypermature cataract presents with a red, painful eye. IOP 46 mmHg, edematous cornea, deep anterior chamber with floating whitish particles, open angle on gonioscopy, no keratic precipitates. What is the most likely diagnosis?",
    options: [
      "Phacomorphic glaucoma from an intumescent lens",
      "Acute primary angle-closure attack",
      "Phacolytic glaucoma from protein leakage",
      "Herpetic hypertensive anterior uveitis"
    ],
    explain: "In phacolytic glaucoma, proteins from the liquefied cortex leak through an intact capsule and the macrophages that engulf them clog the trabecular meshwork. The angle is open and the chamber deep, unlike phacomorphic glaucoma. Management: lower IOP, control inflammation, then extract the lens after a B-scan.",
    why: [
      "Trap: phacomorphic glaucoma closes the angle with a shallow chamber; here the angle is open and the chamber deep.",
      "A primary angle-closure attack requires a closed angle on gonioscopy.",
      "Correct: hypermature cataract, open angle, whitish particles in the anterior chamber.",
      "Herpetic uveitis often gives keratic precipitates and corneal involvement; it does not explain this picture."
    ]
  },
  "A-207": {
    stem: "A diabetic patient is referred for an IOP of 26 mmHg. The fundus shows this. Which combination best describes the finding and the management?",
    options: [
      "Advanced glaucomatous cupping; add a drop and repeat a visual field",
      "Disc edema; urgent brain imaging then lumbar puncture",
      "Optic disc drusen; reassure the patient and do autofluorescence",
      "Disc new vessels; retina promptly and gonioscopy"
    ],
    explain: "The network of fine vessels on the surface of the disc, with retinal hemorrhages, corresponds to neovascularization of the disc (NVD): proliferative diabetic retinopathy. PRP and/or anti-VEGF are needed promptly, along with gonioscopy to look for NVA, because the elevated IOP may signal early neovascular glaucoma.",
    why: [
      "The disc is covered with abnormal vessels, not cupped; the cause of the IOP must be found before adding drops.",
      "Disc edema blurs the margins with flame hemorrhages, without a neovascular network on the surface.",
      "Optic disc drusen are refractile yellowish bodies, without new vessels or scattered retinal hemorrhages.",
      "Correct: NVD (proliferative retinopathy), prompt treatment of the ischemia and a search for NVA."
    ]
  },
  "A-208": {
    stem: "A 58-year-old high myope has seen flashes and a shower of floaters for 2 days, then a shadow rising from the bottom of his field. VA 6/6. On fundus exam: bullous superior retinal detachment, macula still attached, horseshoe tear at 12 o'clock. What is the management?",
    options: [
      "Retina appointment in 1 to 2 weeks since VA is normal",
      "Call retina the same day for prompt repair",
      "Barrier laser in the office and recheck in a month",
      "Head-down positioning at home and recheck in a week"
    ],
    explain: "A macula-on rhegmatogenous detachment, especially a superior bullous one, can reach the macula within hours or days. This is the most urgent situation: call retina the same day to repair before central vision is lost.",
    why: [
      "Trap: normal VA means the macula is still attached, all the more reason to act fast.",
      "Correct: macula-on = same-day emergency.",
      "Barrier laser suits a tear without detachment or a very limited detachment, not a bullous detachment.",
      "No home positioning replaces repair; waiting a week puts the macula at risk."
    ]
  },
  "A-209": {
    stem: "Three years after cataract surgery, a patient with advanced glaucoma (residual central field) notices vision slowly clouding. The IOL is well centered. Here is the slit-lamp image. Which plan is most appropriate?",
    options: [
      "IOL exchange in the operating room as soon as possible",
      "Laser iridotomy to deepen the chamber",
      "YAG capsulotomy with prophylaxis and an IOP check",
      "Trabeculectomy first, capsular laser afterward"
    ],
    explain: "The grey-white plaques behind the IOL are posterior capsule opacification. Nd:YAG laser capsulotomy treats it but can raise IOP: in an advanced glaucoma patient, give an alpha-agonist as prophylaxis and remeasure IOP afterward.",
    why: [
      "The IOL is clear and centered; it is the capsule behind it that is opaque.",
      "The problem is not the angle; an iridotomy does not clear the visual axis.",
      "Correct: YAG, pressure-lowering prophylaxis and an IOP check.",
      "Nothing indicates uncontrolled IOP; filtering surgery does not treat capsular opacification."
    ]
  },
  "A-211": {
    stem: "A 76-year-old woman followed for primary open-angle glaucoma (POAG) suddenly and painlessly lost vision in one eye 2 hours ago. For 3 weeks, her jaw has hurt when she chews. Here is her fundus. What is the most appropriate course of action?",
    options: [
      "Ocular massage and paracentesis, then a retina appointment in a week",
      "ESR, CRP and steroids without delay, and immediate transfer to the ED (stroke workup)",
      "Outpatient fluorescein angiography before deciding on treatment",
      "Intravitreal anti-VEGF injection to prevent neovascular glaucoma"
    ],
    explain: "Pale, opaque retina of a CRAO, with a darker, more normally colored zone between the disc and the macula (probably the territory of a spared cilioretinal artery). Every acute CRAO goes immediately to the ED for a stroke workup; at age 50 or older, giant cell arteritis must be ruled out immediately (ESR, CRP), and jaw claudication warrants steroids without waiting for the biopsy.",
    why: [
      "Massage and paracentesis have no proven efficacy, and a one-week delay exposes the patient to a stroke and, if this is arteritis, to loss of the other eye.",
      "Correct: CRAO is a retinal stroke (immediate workup) and jaw claudication after age 50 requires treating arteritis without waiting.",
      "The diagnosis is clinical (retinal whitening); outpatient angiography delays the urgent workup without changing management.",
      "Anti-VEGF does not treat the arterial occlusion; neovascularization can occur later, but it is not today's priority."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "A-212": {
    stem: "A 70-year-old man with glaucoma had an ischemic CRVO 3 weeks ago (VA count fingers, definite RAPD, numerous cotton-wool spots). He is receiving anti-VEGF for macular edema. Which exam is most important at each visit during the first months?",
    options: [
      "A 24-2 visual field to follow glaucomatous progression",
      "Peripapillary RNFL OCT to measure fiber loss",
      "Fluorescein angiography repeated every month",
      "Gonioscopy and iris examination before dilation"
    ],
    explain: "After an ischemic CRVO, neovascular glaucoma typically occurs within the first 3 months (\"90-day glaucoma\"). Angle new vessels can appear before those at the pupillary margin: examine the iris BEFORE dilating and perform gonioscopy at every visit. Anti-VEGF can temporarily mask neovascularization, which reappears as its effect wears off.",
    why: [
      "The field is depressed by the retinal damage of the CRVO and does not detect angle neovascularization.",
      "The RNFL OCT is skewed by disc edema and then by atrophy; it does not show anterior segment new vessels.",
      "Angiography assesses nonperfusion, but it does not replace direct examination of the iris and angle, and it is not useful every month.",
      "Correct: undilated gonioscopy detects NVA, sometimes before NVI, and allows treatment (PRP, anti-VEGF) before the angle closes."
    ]
  },
  "A-213": {
    stem: "An adult has had a small pupil and mild ptosis on the same side for several months, without pain. These photos document his pupils in light and dark before a pharmacological test. Apraclonidine is instilled in both eyes. If he has Horner syndrome, what will be seen after 30 to 60 minutes?",
    options: [
      "The small pupil dilates and the anisocoria reverses",
      "Both pupils dilate equally and the anisocoria does not change",
      "The small pupil constricts further, increasing the anisocoria",
      "No change, because apraclonidine has no effect on the iris"
    ],
    explain: "In Horner syndrome, the iris deprived of sympathetic innervation becomes hypersensitive (denervation hypersensitivity). Apraclonidine, a weak alpha agonist with almost no effect on a normal pupil, then dilates the small pupil and lifts the lid: the anisocoria reverses. The test can be falsely negative in a very recent Horner, and an acute painful Horner requires urgent imaging without waiting for the test.",
    why: [
      "Correct: the denervated pupil responds to the weak alpha effect of apraclonidine; it dilates and the lid rises (Müller muscle).",
      "Equal dilation of both pupils rather corresponds to cocaine in physiologic anisocoria, not to apraclonidine in Horner.",
      "Increased constriction is not the expected response of a denervated pupil hypersensitive to an alpha agonist.",
      "Apraclonidine has little effect on a normal pupil, but it dilates the hypersensitive pupil of a Horner: that is the very principle of the test."
    ]
  },
  "A-214": {
    stem: "A 27-year-old woman has had headaches for a month and episodes in which her vision \"goes out\" for a few seconds when she bends over. VA 6/6 (20/20) in both eyes, normal BP. Here is the fundus of both eyes. What is the next step?",
    options: [
      "Lumbar puncture today to measure opening pressure",
      "High-dose prednisone for bilateral optic neuritis",
      "Same-day neuroimaging, then lumbar puncture",
      "Repeat visual field and OCT in 3 months, since VA is normal"
    ],
    explain: "Both discs are markedly swollen, with effaced margins and flame hemorrhages: this is bilateral disc edema, hence intracranial hypertension until proven otherwise. Same-day neuroimaging is done (MRI or CT with venography) to rule out a mass or cerebral venous thrombosis, then a lumbar puncture with opening pressure. Preserved VA is not reassuring.",
    why: [
      "The lumbar puncture comes AFTER imaging: if there is a mass, it can cause brain herniation.",
      "Optic neuritis gives painful vision loss, often in one eye, with an often normal disc; here VA is preserved and the edema is bilateral.",
      "Correct: bilateral disc edema requires urgent neuroimaging (mass, venous thrombosis) before the lumbar puncture.",
      "Normal VA is typical early on: waiting 3 months risks vision loss and misses a serious cause."
    ]
  },
  "A-215": {
    stem: "On a dilated fundus exam at a glaucoma follow-up, you discover this pigmented choroidal lesion, which is not described in previous notes. The patient has no symptoms. What is the most appropriate course of action?",
    options: [
      "Baseline photo and recheck in a year, as for a nevus",
      "In-clinic laser of the lesion to prevent growth",
      "Reassure: surface pigment indicates an old, stable lesion",
      "Prompt referral to ocular oncology (ultrasound, OCT, photos)"
    ],
    explain: "The photo shows a large grey-green lesion covered with clumps of orange pigment (lipofuscin). According to the mnemonic \"To Find Small Ocular Melanoma Using Helpful Hints Daily\", the risk factors are: thickness > 2 mm, subretinal fluid, symptoms, orange pigment, margin 3 mm or less from the disc, ultrasound hollowness, absence of halo and absence of drusen. Such a lesion is referred promptly to ocular oncology.",
    why: [
      "A simple annual check suits a small flat nevus without risk factors, not a large lesion covered with orange pigment.",
      "A pigmented lesion is not treated with laser in clinic: diagnosis and treatment belong to ocular oncology.",
      "It is the reverse: drusen indicate an old lesion, whereas orange pigment (lipofuscin) is a risk factor for melanoma.",
      "Correct: large size and orange pigment are worrying signs; ultrasound (thickness, acoustic hollowness) and OCT (fluid) refine the risk."
    ]
  },
  "A-216": {
    stem: "A patient followed for recurrent anterior uveitis has the pupil shown below. If these adhesions extended around the entire circumference of the pupil, which glaucomatous complication would you fear most?",
    options: [
      "Iris bombé and angle closure from pupillary block",
      "Pigmentary glaucoma from iris rubbing against the zonules",
      "Angle-recession glaucoma, as after trauma",
      "Pseudoexfoliation glaucoma from fibrillar material deposits"
    ],
    explain: "The pupil is irregular and scalloped: the iris remains stuck to the lens by posterior synechiae. If they go all the way around (seclusio pupillae), aqueous produced behind the iris can no longer pass: the iris bows forward and closes the angle (iris bombé), which is treated with laser iridotomy or iridectomy. A cycloplegic in the acute phase prevents these synechiae, and the steroid response is also monitored.",
    why: [
      "Correct: seclusio pupillae traps aqueous behind the iris, which bows forward and closes the angle; a pathway must be created (iridotomy or iridectomy).",
      "Pigment dispersion affects young myopes with a concave iris; it is unrelated to inflammatory synechiae.",
      "Angle recession is a sequela of blunt trauma, not of uveitis.",
      "Pseudoexfoliation is an age-related disease, with deposits on the lens, unrelated to posterior synechiae."
    ]
  },
  "A-217": {
    stem: "A 42-year-old man who had endothelial keratoplasty (DMEK) 4 months ago uses prednisolone acetate 1 % and an inhaled corticosteroid for his asthma. For 10 days, he has seen straight lines as wavy in one eye. Macular OCT shows a blister of fluid under the neurosensory retina, with no membrane or hole. What is the best management?",
    options: [
      "Stop all steroids immediately, including those for the graft",
      "Cautiously reduce the steroids with the prescribers and follow the OCT",
      "Double the prednisolone, because this is inflammatory macular edema",
      "Immediate laser to the leakage point, without prior angiography"
    ],
    explain: "Fluid under the macular neurosensory retina in a patient on corticosteroids = central serous chorioretinopathy (CSCR) until proven otherwise. Take an inventory of all steroid sources (drops, inhalers, creams, nasal sprays, injections), reduce with the prescribers whatever can be reduced without risk of rejection, and refer to retina if the fluid persists. Trap: stopping a graft's steroid abruptly.",
    why: [
      "Stopping prednisolone abruptly exposes the graft to rejection: the reduction is planned with the cornea team.",
      "Correct: CSCR is promoted by steroids by any route; reduce what can be safely reduced, and most cases resolve spontaneously.",
      "The fluid is UNDER the retina (CSCR), not within it (cystoid macular edema); increasing the steroid would make things worse.",
      "Laser treatment of CSCR is discussed by retina after angiography, especially if fluid persists; it is not done up front."
    ]
  },
  "A-218": {
    stem: "A 69-year-old man followed for early POAG says he has been bumping into things on his left side for 2 months. Here is his new Goldmann visual field (one plot per eye). What is the most accurate interpretation?",
    options: [
      "Rapid glaucoma progression: the target IOP must be lowered",
      "Lens or lid artifact: simply repeat the test",
      "Right retrochiasmal lesion: order brain imaging",
      "Chiasmal compression by a pituitary tumor: MRI of the sella"
    ],
    explain: "Both plots show loss of the left half of the field, with isopters stopping sharply at the vertical meridian: this is a left homonymous hemianopia, due to a lesion of the right visual pathways behind the chiasm (the source describes an occipital stroke). Brain imaging is needed, the treating physician should be notified, and the SAAQ driving standard should be checked.",
    why: [
      "Glaucoma respects the HORIZONTAL meridian; loss of the same half in both eyes, bounded by the vertical meridian, is not glaucomatous.",
      "A lens artifact gives a peripheral ring and ptosis a superior defect, not a clean hemianopia in both eyes.",
      "Correct: left half lost in both eyes, bounded by the vertical meridian = left homonymous hemianopia, hence a right retrochiasmal lesion.",
      "A chiasmal lesion typically gives a bitemporal hemianopia (outer halves of both fields), not loss of the same half."
    ]
  },
  "B-201": {
    stem: "Seen for a glasses renewal: vision 6/6 in both eyes, never any pain. A parent has a similar cornea. Here is his cornea. What is the most likely diagnosis?",
    options: [
      "Lattice dystrophy type 1",
      "Macular dystrophy",
      "Granular dystrophy type 1",
      "Infectious crystalline keratopathy"
    ],
    explain: "Discrete white \"breadcrumb\" opacities in the central cornea, clear stroma between them, dominant inheritance and preserved vision: granular dystrophy type 1 (TGFBI gene). Its deposits are hyaline (Masson trichrome).",
    why: [
      "Lattice: fine branching lines and painful erosions, not rounded granules.",
      "Macular: diffuse haze out to the limbus between ill-defined spots, early vision loss, recessive.",
      "Correct: discrete granules, clear intervals, dominant family history.",
      "Crystalline infection: branching crystals in a graft on steroids, unilateral, not familial."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "B-202": {
    stem: "Slowly decreasing vision in both eyes in an adult; a parent had a corneal transplant. Here is one of the eyes. Which complication is most typical of this dystrophy?",
    options: [
      "Recurrent epithelial erosions",
      "Glaucoma from angle synechiae",
      "Spontaneous corneal perforation",
      "Deep stromal neovascularization"
    ],
    explain: "Refractile branching lines of amyloid: lattice dystrophy type 1 (TGFBI). Deposits beneath the epithelium undo its anchoring: painful recurrent erosions are common, often early in life.",
    why: [
      "Correct: superficial amyloid weakens the epithelial anchoring.",
      "Synechiae and glaucoma: posterior polymorphous dystrophy or ICE syndrome, not lattice.",
      "Stromal dystrophies do not thin the cornea enough to perforate spontaneously.",
      "A dystrophy is not accompanied by vessels; vessels point to a scar."
    ]
  },
  "B-203": {
    stem: "Vision 6/24 in both eyes and photophobia since adolescence. The parents, first cousins, have normal corneas. Central pachymetry: 470 µm. Here is the cornea. Which combination best describes this dystrophy?",
    options: [
      "TGFBI, hyaline deposits, red with Masson trichrome",
      "TGFBI, amyloid, birefringence with Congo red",
      "TCF4 gene, guttae, dominant inheritance",
      "CHST6, mucopolysaccharides, Alcian blue positive"
    ],
    explain: "Ill-defined spots on a diffuse stromal haze (which reaches the limbus in this dystrophy), a thin cornea, early low vision, unaffected consanguineous parents: macular dystrophy, autosomal recessive (CHST6 gene). The mucopolysaccharides (glycosaminoglycans) take up Alcian blue: \"Marilyn Monroe Always\".",
    why: [
      "Granular: clear stroma between the granules, dominant, normal corneal thickness.",
      "Lattice: branching lines and erosions, dominant inheritance.",
      "Fuchs: guttae and a cornea thickened by edema after age 50, not a thin cornea in a young adult.",
      "Correct: recessive, haze out to the limbus, thin cornea, Alcian blue."
    ]
  },
  "B-204": {
    stem: "A 29-year-old LASIK candidate: stable myopia of −4.00 D, normal topography. At the slit lamp, a few small white snowflake opacities and two short lines in the anterior stroma, in both eyes. His father \"has spots on his corneas\". What is the best course of action?",
    options: [
      "LASIK allowed, since topography is normal",
      "No refractive surgery; TGFBI genetic testing",
      "PRK with mitomycin C rather than LASIK",
      "Preventive PTK, then LASIK in three months"
    ],
    explain: "Snowflake opacities and lines, bilateral and familial: Avellino dystrophy (granular type 2, TGFBI) must be ruled out. The trauma of LASIK makes the deposits proliferate at the flap interface and can cost a great deal of vision: confirm with genetic testing and advise against corneal refractive surgery.",
    why: [
      "Trap: topography does not detect a stromal dystrophy; LASIK worsens TGFBI deposits.",
      "Correct: confirm the mutation and avoid corneal refractive laser.",
      "Deposits can also recur after surface ablation; refractive surgery remains inadvisable.",
      "PTK removes deposits without changing the gene; the LASIK flap remains contraindicated."
    ]
  },
  "B-205": {
    stem: "Irritation and blurred vision in both eyes for months. No history of uveitis or eye surgery. Here is one of the eyes. Which blood workup is most relevant?",
    options: [
      "Lipid panel and fasting glucose",
      "Calcium, phosphorus, PTH and creatinine",
      "Ceruloplasmin and urinary copper",
      "Syphilis serology and antinuclear antibodies"
    ],
    explain: "A chalky white interpalpebral plaque with holes: band keratopathy (calcium in Bowman layer). Without an ocular cause (uveitis, phthisis, silicone oil), look for hypercalcemia or hyperphosphatemia: calcium, phosphorus, PTH and renal function. The source of this photo mentions hyperparathyroidism.",
    why: [
      "Lipids: a peripheral grey-white arc or a yellow deposit near vessels, not a chalky band.",
      "Correct: hyperparathyroidism or renal failure promote calcium deposition.",
      "Copper: a brown-green ring in peripheral Descemet (Wilson), not a white band.",
      "Useful for interstitial keratitis or a child with uveitis; here, an adult without uveitis."
    ]
  },
  "B-206": {
    stem: "Seen for an early cataract. Vision 6/9, no corneal symptoms. Here is the cornea, lit against the dilated pupil. Which medication do you look for first on the list?",
    options: [
      "Tamsulosin",
      "Topiramate",
      "Ethambutol",
      "Amiodarone"
    ],
    explain: "Fine golden-brown whorl lines in the epithelium: cornea verticillata. Amiodarone is the classic cause (also hydroxychloroquine, Fabry disease). It rarely affects vision and does not require stopping the drug; vision loss or a swollen disc would rather suggest an optic neuropathy.",
    why: [
      "Tamsulosin: intraoperative floppy iris syndrome, normal cornea.",
      "Topiramate: ciliochoroidal effusion and bilateral angle closure.",
      "Ethambutol: toxic optic neuropathy, normal cornea.",
      "Correct: whorl-like epithelial deposits, very common on amiodarone."
    ]
  },
  "B-207": {
    stem: "Treated for 6 days for a bacterial ulcer with hourly ciprofloxacin drops. The infiltrate is not enlarging and the pain is decreasing, but a chalky white plaque has appeared in the ulcer bed. Here is the eye, with fluorescein. What is the most likely explanation?",
    options: [
      "Drug precipitate in the ulcer",
      "Filamentous fungal superinfection",
      "Acute band keratopathy",
      "Infectious crystalline keratopathy"
    ],
    explain: "Frequent topical ciprofloxacin can precipitate as a superficial chalky white plaque in the epithelial defect; it delays closure without indicating worsening. If the infiltrate and reaction are not progressing, switch antibiotics; at the slightest doubt, reculture.",
    why: [
      "Correct: a drug deposit, with a stable infiltrate and decreasing pain.",
      "Fungus: a grey infiltrate with feathery edges, satellite lesions, progression despite the antibiotic.",
      "Calcific band usually forms over months, in Bowman layer between the lids, not in an ulcer bed on ciprofloxacin.",
      "Crystalline infection: branching crystals in the stroma, often under an intact epithelium, in a graft."
    ]
  },
  "B-208": {
    stem: "A 19-year-old student referred for \"bilateral Fleischer rings\". She has recent tremors and elevated liver enzymes. Normal topography. At the slit lamp: a brown-green ring at the corneal periphery, more marked superiorly and inferiorly. Where is the deposit and what is it made of?",
    options: [
      "Iron in the basal epithelium, around a cone",
      "Calcium in Bowman layer, between the lids",
      "Copper in peripheral Descemet membrane",
      "Lipids in the peripheral stroma, with a clear interval"
    ],
    explain: "A peripheral brown-green ring, tremors and liver involvement in a young woman: Kayser-Fleischer ring, copper in peripheral Descemet (Wilson disease). The Fleischer ring of keratoconus is epithelial iron around the cone, with abnormal topography. Order ceruloplasmin and urinary copper with internal medicine or hepatology.",
    why: [
      "Trap: that is the Fleischer ring of keratoconus; normal topography and the context rule it out.",
      "Calcium: a horizontal chalky white band, not a brown-green ring.",
      "Correct: Kayser-Fleischer ring, Wilson disease.",
      "Lipids: grey-white corneal arcus, with no liver or neurological involvement."
    ]
  },
  "B-211": {
    stem: "Intense itching that returns every spring, stringy mucus, atopic background, no contact lenses. Here is the everted upper lid. What is the diagnosis, and which corneal complication should be looked for at every visit?",
    options: [
      "Adenoviral conjunctivitis; look for subepithelial infiltrates",
      "Giant papillary conjunctivitis; look for amebic keratitis",
      "Vernal keratoconjunctivitis; look for a shield ulcer",
      "Chlamydial conjunctivitis; look for pannus and scarring"
    ],
    explain: "**What it is**: vernal keratoconjunctivitis is a severe chronic allergy in young atopic patients (mostly boys) that forms giant cobblestone papillae on the upper tarsus. **Why it matters**: toxic eosinophil proteins and the rubbing of the cobblestones create the shield ulcer of the superior cornea, which threatens vision. **What to do**: evert the lid and stain the cornea at every visit; shield ulcer = same-day treatment.",
    why: [
      "Viral follicles are small pale domes in the inferior fornix, not large cobblestones on the upper tarsus; and adenovirus does not return every spring.",
      "Contact lens papillae can look similar, but there is no lens; the seasonal, atopic context points to vernal disease.",
      "Correct: cobblestones (giant papillae) in a seasonal atopic patient; the shield ulcer, under the lid, is the emergency of vernal disease.",
      "Chlamydia gives chronic follicles, not itchy cobblestones that return every spring."
    ]
  },
  "B-212": {
    stem: "A 34-year-old nurse: red, watery right eye for 3 days, the left eye is starting. Gritty sensation, no real pain, VA 6/6 (20/20). Follicles in the inferior fornix, tender preauricular node, clear cornea. What is the most appropriate management?",
    options: [
      "Cold compresses, tears, hand hygiene, time off work as needed",
      "Moxifloxacin 0.5 % QID for 7 days to prevent bacterial superinfection",
      "Tobramycin-dexamethasone QID to shorten the infection and reduce redness",
      "Oral valacyclovir 1 g TID for 7 days, starting today"
    ],
    explain: "**What it is**: adenoviral keratoconjunctivitis, highly contagious (hands, instruments, tonometers) for about 2 weeks. **Why it matters**: 1–2 weeks later, subepithelial infiltrates can reduce vision; an ill-advised steroid creates dependence and rebound. **What to do**: supportive care, hygiene, disinfection of equipment; recheck if pain, photophobia or decreasing vision.",
    why: [
      "Correct: probable adenovirus; supportive treatment and prevention of transmission.",
      "The antibiotic has no effect on the virus and adds toxicity and cost without benefit.",
      "Without pseudomembranes or bothersome infiltrates, a steroid is not justified: it can prolong viral shedding, mask herpes and raise IOP.",
      "Valacyclovir targets herpes simplex or zoster; here, bilateral involvement with follicles in a healthcare setting: adenovirus."
    ]
  },
  "B-213": {
    stem: "Soft contact lenses worn for years: itching, morning mucus, lenses that move and become uncomfortable. Here is the everted upper lid. What is the best management?",
    options: [
      "Corneal scraping, cultures and hourly fortified drops day and night",
      "A strong topical steroid long term while keeping the same lenses",
      "Biopsy of the tarsal conjunctiva to rule out conjunctival lymphoma",
      "A break from lenses, then daily disposables and a mast cell stabilizer"
    ],
    explain: "**What it is**: giant papillary conjunctivitis is an allergic and mechanical reaction of the upper tarsus to contact lenses, an ocular prosthesis or an exposed suture. **Why it matters**: it causes contact lens intolerance and resembles vernal disease, but its cause can be removed. **What to do**: a break from lenses, daily disposable lenses or peroxide care, a mast cell stabilizer; a brief mild steroid only if severe, with IOP monitoring.",
    why: [
      "Nothing suggests infectious keratitis (no real pain or infiltrate); treat the tarsal reaction.",
      "A prolonged steroid risks IOP rise and cataract, without removing the cause (deposits on the lens).",
      "Giant papillae under contact lenses do not require a biopsy; biopsy is for an atypical or refractory unilateral lesion.",
      "Correct: remove the trigger (protein deposits, friction), replace lenses more often, add an antihistamine-stabilizer."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "B-214": {
    stem: "A 22-year-old student: red eye for 6 weeks despite two topical antibiotics. Prominent follicles, even on the superior conjunctiva, preauricular node, mild superior pannus. New partner 2 months ago. What is the best next step?",
    options: [
      "Switch to a fourth-generation fluoroquinolone and recheck in 2 weeks",
      "NAAT for Chlamydia, oral treatment, partners, STBBI screening",
      "A topical steroid for prolonged adenoviral infection, then a slow taper",
      "An antihistamine-stabilizer for chronic allergic conjunctivitis"
    ],
    explain: "**What it is**: Chlamydia trachomatis (genital serotypes D to K) causes chronic follicular conjunctivitis in young adults, often with a minimally symptomatic genital infection. **Why it matters**: drops alone fail; partners and other STBBIs (sexually transmitted and blood-borne infections) must be managed. **What to do**: conjunctival NAAT, doxycycline 100 mg BID × 7 days or azithromycin 1 g as a single dose, screening and reporting according to the Québec guide.",
    why: [
      "The trap: a third antibiotic drop treats neither the associated genital infection nor the partner.",
      "Correct: probable adult inclusion conjunctivitis; oral treatment, partners, reportable disease (MADO).",
      "Adenovirus resolves in 2–3 weeks; 6 weeks with pannus points to Chlamydia, and a steroid would mask the diagnosis.",
      "Allergy gives papillae and itching, not follicles with a node."
    ]
  },
  "B-215": {
    stem: "Slow vision loss, without pain or redness. Photo taken while the person looks down; the area does not take up fluorescein. What is the diagnosis and management?",
    options: [
      "PUK: urgent systemic workup and oral corticosteroids the same day",
      "Terrien: topography, optical correction, protection",
      "Mooren ulcer: conjunctival resection and immunosuppression",
      "Pellucid degeneration: urgent CXL before perforation"
    ],
    explain: "**What it is**: Terrien marginal degeneration is a slow, non-inflammatory peripheral thinning, often superior, with fine vessels and a lipid line at the central edge. **Why it matters**: it is not immunosuppressed like PUK; the risks are against-the-rule astigmatism and, rarely, perforation after blunt trauma. **What to do**: topography, glasses or a rigid or scleral lens, protection; lamellar graft if thinning is extreme.",
    why: [
      "PUK is painful and red, with an epithelial defect; here, a quiet eye and intact epithelium.",
      "Correct: superior thinning with a lipid line and fine vessels, intact epithelium, white eye.",
      "Mooren is very painful, with an epithelial defect and an overhanging edge: none of that here.",
      "Pellucid is inferior, without lipids or vessels; and CXL is never an emergency measured in hours."
    ]
  },
  "B-216": {
    stem: "A 58-year-old man with chronic blepharitis: irritation and mild photophobia for 4 days. Two oval white infiltrates at 4 and 8 o'clock, separated from the limbus by a band of clear cornea, small superficial epithelial defect, no thinning, quiet chamber. What is the most appropriate management?",
    options: [
      "Oral corticosteroids and an urgent rheumatology consultation",
      "Hourly fortified drops after scraping and cultures",
      "Cyanoacrylate glue and a bandage contact lens the same day",
      "Lid care and a short course of a mild topical steroid"
    ],
    explain: "**What it is**: marginal keratitis is an immune reaction to staphylococcal antigens from the lid margin; immune complexes deposit where the lid touches the cornea. **Why it matters**: the clear interval distinguishes it from PUK, which hugs the limbus and requires a systemic workup. **What to do**: warm compresses, lid margin cleaning, a mild steroid for a few days after ruling out infection; doxycycline for rosacea or recurrences.",
    why: [
      "Reserved for PUK, which hugs the limbus with stromal melting; here, a clear interval and no thinning.",
      "Small peripheral infiltrates, quiet chamber: no 1-2-3 criteria; recheck soon, but infection is not the leading diagnosis.",
      "Glue is for a descemetocele or perforation; there is no thinning.",
      "Correct: marginal keratitis; treat the lid margin and switch off the reaction, recheck in a few days."
    ]
  },
  "B-217": {
    stem: "Deep eye pain for a week that wakes the patient at night and radiates to the forehead. Here is the eye. What is the most appropriate management?",
    options: [
      "Scleritis: systemic workup and oral NSAIDs, rheumatology if they fail",
      "Episcleritis: chilled tears, recheck as needed in a month",
      "Pingueculitis: a mild topical steroid for a week and tears",
      "Bacterial conjunctivitis: topical antibiotic QID for 7 days"
    ],
    explain: "**What it is**: scleritis is inflammation of the sclera, often related to systemic disease (rheumatoid arthritis, vasculitis); diffuse, nodular, necrotizing and posterior forms. **Why it matters**: nocturnal pain, a violaceous hue and no blanching with phenylephrine distinguish it from episcleritis; the necrotizing form can perforate. **What to do**: systemic workup, oral NSAIDs if non-necrotizing, otherwise systemic corticosteroids and an immunosuppressant.",
    why: [
      "Correct: nodular scleritis (scleral nodule, deep vessels); non-necrotizing form, so oral NSAIDs first, with a systemic workup.",
      "Episcleritis blanches with phenylephrine and is not very painful; nocturnal pain that radiates points to scleritis.",
      "Pingueculitis is a yellowish conjunctival nodule, not very painful; here the nodule is scleral, deep and very painful.",
      "No discharge; an antibiotic would delay the diagnosis and the workup."
    ]
  },
  "B-218": {
    stem: "A 70-year-old woman with rheumatoid arthritis: PUK with an epithelial defect and thinning of one third of the thickness at 3 o'clock, without perforation. Rheumatology notified, oral prednisone started. Which of these measures should be avoided?",
    options: [
      "Oral doxycycline to curb collagenases",
      "Frequent preservative-free lubricants",
      "Topical ketorolac QID to relieve pain",
      "A protective shield, with no pressure on the eye"
    ],
    explain: "**What it is**: PUK melts the stroma through collagenases released around inflamed limbal vessels. **Why it matters**: topical NSAIDs can promote corneal melting; this is a trap when trying to relieve pain or an associated scleritis. **What to do**: systemic treatment with rheumatology, lubrication, doxycycline, protection; glue and a bandage contact lens for a descemetocele or small perforation.",
    why: [
      "Useful: inhibits the metalloproteinases that dissolve the stroma.",
      "Useful: protects the epithelium and dilutes mediators, without preservative toxicity.",
      "Correct, to be avoided: topical NSAIDs have been associated with corneal melts, especially on a diseased, thinned surface.",
      "Useful: protects a thinned globe from rubbing and blows."
    ]
  },
  "C-201": {
    stem: "A patient is referred to you for \"C/D 0.8 in one eye, asymmetric\". VA 6/6 in both eyes, IOP 15 mmHg, open angle, no RAPD. Here are both discs. What is the best course of action?",
    options: [
      "Start a prostaglandin analog given the C/D asymmetry",
      "Measure the discs, then obtain baseline OCT and field",
      "Urgent brain MRI to rule out chiasmal compression",
      "Reassure and discharge without follow-up, since IOP is normal"
    ],
    explain: "The C/D depends on disc size: a large disc has a large physiologic cup. Here, the asymmetry follows a difference in size; judge the rim, then document with OCT, field and photos.",
    why: [
      "Treating a C/D without judging disc size or function exposes the patient to needless lifelong treatment.",
      "Correct: one disc is much larger; its large cup surrounded by a regular rim may be physiologic (megalopapilla). An objective baseline will settle it.",
      "No red flags (normal VA, no RAPD, no rim pallor): MRI is not the first step.",
      "A normal IOP does not rule out glaucoma, and a megalopapilla can also become glaucomatous: a baseline is needed."
    ]
  },
  "C-202": {
    stem: "A patient has had poor vision in both eyes since childhood, slowly progressive; a parent has the same problem. VA 6/18 in both eyes, difficulty on the blue-yellow axis, IOP 14 mmHg. Here is one of the discs; the other is similar. What is the most likely diagnosis?",
    options: [
      "Bilateral normal-tension glaucoma",
      "Sequela of ischemic optic neuropathy",
      "Juvenile open-angle glaucoma",
      "Dominant optic atrophy (OPA1 gene)"
    ],
    explain: "Dominant optic atrophy first affects the papillomacular bundle, which enters on the temporal side: bilateral temporal pallor, moderately reduced VA, a blue-yellow defect, family history. Temporal cupping can suggest NTG, but the pallor and low VA give away the cause.",
    why: [
      "NTG spares VA and color vision until an advanced stage; here, the temporal pallor exceeds the cup.",
      "Ischemia is acute and often unilateral; it does not explain familial loss since childhood.",
      "Juvenile glaucoma comes with elevated IOP and a pink rim thinned at the poles.",
      "Correct: onset in childhood, dominant inheritance, a blue-yellow defect and temporal pallor."
    ]
  },
  "C-203": {
    stem: "A 44-year-old woman is referred as a \"glaucoma suspect\": C/D 0.7 in the right eye, IOP 16 mmHg, VA 6/12, red desaturation and a right RAPD. The remaining rim is pale. The 24-2 field shows a temporal defect that stops sharply at the vertical meridian. What is the next step?",
    options: [
      "Gadolinium-enhanced brain and orbit MRI, as a priority",
      "A prostaglandin analog and a recheck in 3 months",
      "A diurnal IOP curve to unmask spikes",
      "Repeat the 24-2 field in 6 months to confirm"
    ],
    explain: "A defect respecting the vertical meridian localizes the lesion to the chiasm or behind it. With low VA, an RAPD, age < 50 and a pale rim, this is compression until proven otherwise: gadolinium-enhanced MRI.",
    why: [
      "Correct: several red flags together (age, VA, RAPD, pallor > cupping, vertical defect).",
      "Treating as glaucoma would delay the diagnosis of a compressive lesion, often treatable.",
      "Useful for typical NTG, not in the face of neurological signs.",
      "Waiting 6 months lets a compression progress; the vertical defect requires imaging now."
    ]
  },
  "C-204": {
    stem: "A young patient, followed since early childhood for poor vision and nystagmus, has this fundus appearance in both eyes. IOP is normal and no workup has been done yet. What should be ordered?",
    options: [
      "A prostaglandin analog in both eyes, OCT in 1 year",
      "Lumbar puncture with opening pressure",
      "Brain MRI and a pituitary endocrine workup",
      "Electroretinogram alone, since the discs are normal"
    ],
    explain: "Optic nerve hypoplasia gives a small disc surrounded by a pale ring (double-ring sign). When bilateral, it requires an MRI and a hormonal workup: septo-optic dysplasia can be accompanied by dangerous pituitary deficiency (hypoglycemia, adrenal insufficiency).",
    why: [
      "This is not glaucoma: small discs without acquired cupping.",
      "Lumbar puncture is for papilledema; here the discs are small, not swollen.",
      "Correct: look for septo-optic dysplasia (absent septum pellucidum, pituitary) with bilateral hypoplasia.",
      "The discs are not normal: they are small, with a double contour."
    ]
  },
  "C-205": {
    stem: "A pseudophakic patient presents with repeated episodes of blurred vision in one eye. A few red blood cells are noted in the anterior chamber and IOP is 35 mmHg. Here is the infrared transillumination of the iris. What is the most likely diagnosis?",
    options: [
      "Uveitis-glaucoma-hyphema (UGH) syndrome",
      "Primary pigment dispersion syndrome",
      "Diabetic neovascular glaucoma",
      "Herpetic anterior uveitis with iris atrophy"
    ],
    explain: "UGH syndrome occurs when an IOL, often a single-piece lens in the sulcus or a decentered one, rubs the iris or ciliary body. UBM confirms the contact; definitive treatment is repositioning or exchanging the IOL.",
    why: [
      "Correct: transillumination defects that outline the IOL, microhyphemas, inflammation and IOP spikes.",
      "Primary dispersion affects young myopes, with peripheral radial defects, without hyphema or an IOL involved.",
      "Neovascular glaucoma also bleeds, but new vessels would be seen on the iris and in the angle.",
      "Herpes gives patchy or sectoral atrophy with KP, unrelated to the IOL."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "C-206": {
    stem: "A 19-year-old man is hit in the left eye by a hockey puck. Grade II hyphema, IOP 34 mmHg. Electrophoresis confirms sickle cell trait. Which medication should you avoid?",
    options: [
      "Timolol 0.5 % drops",
      "Prednisolone acetate 1 %",
      "Atropine 1 % drops",
      "Oral acetazolamide 500 mg"
    ],
    explain: "In sickle cell disease (even the trait), sickled red cells pass poorly through the trabecular meshwork and the nerve tolerates IOP poorly. CAIs (especially oral) and hyperosmotics are avoided, and the threshold for surgical washout is lower (IOP ≥ 24 mmHg for more than 24 h).",
    why: [
      "A topical beta-blocker: a safe first choice for lowering IOP in this setting.",
      "A topical steroid reduces inflammation: standard hyphema protocol.",
      "Cycloplegia relieves pain, immobilizes the iris and limits synechiae: standard protocol.",
      "Correct: it acidifies the aqueous and promotes sickling; the rigid cells clog the trabecular meshwork."
    ]
  },
  "C-207": {
    stem: "An 82-year-old woman, who has barely seen out of her right eye for years, presents with this red, painful eye. IOP 46 mmHg, white hypermature cataract, deep anterior chamber, open angle, numerous floating white particles and cells, no KP. What is the diagnosis?",
    options: [
      "Phacomorphic glaucoma from an intumescent lens",
      "Phacoantigenic uveitis after capsular rupture",
      "Phacolytic glaucoma from protein leakage",
      "Acute primary angle-closure attack"
    ],
    explain: "Phacolytic glaucoma is an open-angle glaucoma: proteins from a mature or hypermature cataract leak through an intact capsule and the macrophages that ingest them clog the trabecular meshwork. Control IOP and inflammation, then remove the lens promptly.",
    why: [
      "Phacomorphic glaucoma closes the angle with a flat chamber, which is not the case here.",
      "It follows rupture of the capsule and gives granulomatous uveitis with KP.",
      "Correct: an intact capsule that leaks, macrophages clogging an open angle; treatment: IOP, then extraction.",
      "Primary angle closure gives a shallow chamber and a closed angle, in both eyes."
    ]
  },
  "C-208": {
    stem: "One week after a vitrectomy with gas injection, a patient receives general anesthesia with nitrous oxide for another surgery. He wakes with intense eye pain; IOP 55 mmHg. Here is the eye at the slit lamp. Which mechanism best explains the situation?",
    options: [
      "Delayed suprachoroidal hemorrhage",
      "Expansion of the intraocular gas bubble",
      "Acute postoperative endophthalmitis",
      "Aqueous misdirection (ciliary block)"
    ],
    explain: "Intraocular gas (SF6, C3F8) expands at altitude or under nitrous oxide and can close the angle or occlude the central retinal artery. The patient wears a wristband, avoids flying and warns the anesthesiologist; treatment: pressure-lowering drugs, positioning, ± partial removal of the gas.",
    why: [
      "Possible after surgery, but the obvious trigger is nitrous oxide in a gas-filled eye.",
      "Correct: nitrous oxide enters the bubble faster than nitrogen leaves it; the bubble grows, pushes the iris forward and closes the angle.",
      "It gives pain and inflammation, but not this anesthesia-linked timeline; it still needs to be ruled out.",
      "Misdirection mainly follows filtering or cataract surgery; the gas better explains this picture."
    ]
  },
  "C-211": {
    stem: "A 42-year-old woman presents with blurred vision in the morning in one eye only. IOP is 30 mmHg on that side and normal on the other; the fellow eye is normal and there is no family history. Here is the iris of the affected eye. What is the most likely diagnosis?",
    options: [
      "Axenfeld-Rieger syndrome with iris hypoplasia",
      "Traumatic iridodialysis with angle recession",
      "ICE syndrome, essential iris atrophy form",
      "Posterior polymorphous dystrophy with adhesions"
    ],
    explain: "A middle-aged woman, one eye affected, no family history: an oval, displaced pupil, thinned stroma and iris holes (a large dark zone at upper left, small pigment-rimmed holes at lower right). This is essential iris atrophy, a variant of ICE syndrome; the morning blur reflects corneal edema. Look for hammered-silver endothelium and high synechiae, and confirm with specular microscopy.",
    why: [
      "Axenfeld-Rieger is congenital, bilateral and often familial, with posterior embryotoxon and strands to Schwalbe.",
      "Iridodialysis is a disinsertion of the iris root after blunt trauma; here, there is no trauma and the holes are in the stroma.",
      "Correct: unilateral, acquired, middle-aged woman, corectopia and iris holes.",
      "Posterior polymorphous dystrophy is bilateral and familial, with vesicles and bands at Descemet."
    ]
  },
  "C-212": {
    stem: "Routine exam in an asymptomatic adult: normal VA, normal IOP, normal discs. At the slit lamp, you notice this at the periphery of the cornea. What is the most appropriate course of action?",
    options: [
      "Gonioscopy: look for iris strands attached to this line",
      "Specular microscopy to confirm early ICE syndrome",
      "Laser peripheral iridotomy to prevent closure",
      "Blood lipid panel for early corneal arcus"
    ],
    explain: "The fine, sharp, curved grey-white line parallel to the limbus at the corneal periphery is a posterior embryotoxon: Schwalbe line (the peripheral edge of Descemet) thickened and displaced anteriorly, prominent enough to be seen without gonioscopy. On its own, it is common and benign. If iris strands attach to it (with corectopia, iris holes, dental or umbilical anomalies), this is the Axenfeld-Rieger spectrum, where the risk of glaucoma is high: gonioscopy settles it.",
    why: [
      "Correct: gonioscopy shows whether the embryotoxon is isolated (nothing to do) or whether iris strands reach it (Axenfeld-Rieger: IOP and discs to follow).",
      "ICE syndrome affects the endothelium of one eye (hammered silver, corectopia, edema); a prominent Schwalbe line is not one of its signs.",
      "Nothing indicates a narrow angle: the embryotoxon sits at Schwalbe line and does not close the angle.",
      "Corneal arcus is a hazy greyish band in the stroma, separated from the limbus by a clear zone; here, it is a fine, sharp line at the level of Descemet. A classic trap."
    ]
  },
  "C-213": {
    stem: "A 5-month-old infant has had tearing from the right eye for 2 months. His parents note that he shuts his eyes in bright light and rubs his eyes. The right cornea looks larger and slightly bluish compared with the left. What is the most appropriate course of action?",
    options: [
      "Lacrimal sac massage and recheck at 12 months if tearing persists",
      "Brimonidine drops to lower IOP while waiting for growth",
      "Trabeculectomy with mitomycin C as the first operation",
      "Prompt examination under anesthesia, then angle surgery if confirmed"
    ],
    explain: "Tearing + photophobia + a large, bluish cornea = primary congenital glaucoma until proven otherwise. Refer urgently for an examination under anesthesia (IOP, corneal diameter, gonioscopy, disc, refraction), most often followed by goniotomy or trabeculotomy. Drops serve only as a bridge.",
    why: [
      "Nasolacrimal duct obstruction gives tearing without photophobia, with a clear cornea of normal size; waiting allows amblyopia and neuropathy to set in.",
      "Brimonidine is contraindicated under age 2 (somnolence, hypotonia, apnea); and drops are only a bridge.",
      "In infants, trabeculectomy scars quickly and carries lifelong bleb risks; it is kept for failures of angle surgery.",
      "Correct: confirm under anesthesia, then open the angle (goniotomy or trabeculotomy)."
    ]
  },
  "C-214": {
    stem: "Intraoperative photo in a young patient with Sturge-Weber syndrome (facial port-wine stain in the V1 territory), who has ipsilateral glaucoma refractory to drops. Filtering surgery is under way. Which intraoperative complication must be anticipated above all?",
    options: [
      "Acute angle closure from pupillary block",
      "Suprachoroidal effusion or hemorrhage on entry",
      "Massive hyphema from rupture of angle new vessels",
      "Malignant glaucoma from anterior rotation of the ciliary body"
    ],
    explain: "The photo shows, under the opened conjunctiva, a dense network of dilated, tortuous episcleral vessels: episcleral venous pressure is elevated, and IOP cannot fall below it through the trabecular meshwork. With the choroidal hemangioma, the sudden drop in IOP on entering the eye can trigger choroidal effusion or suprachoroidal (expulsive) hemorrhage. Precautions: preoperative B-scan, gradual lowering of IOP, watertight closure.",
    why: [
      "Sturge-Weber glaucoma is open-angle (an abnormal angle or elevated venous pressure), not pupillary block.",
      "Correct: the choroidal hemangioma and elevated venous pressure predispose to effusion or hemorrhage on decompression.",
      "Angle new vessels are not part of the picture; the feared bleeding is choroidal.",
      "Malignant glaucoma occurs mainly in short eyes with closed angles; it is not the risk specific to Sturge-Weber."
    ]
  },
  "A-301": {
    stem: "Follow-up of a glaucoma suspect. On the fundus photograph, the arrow points to a finding at the disc margin. What is its main significance?",
    options: [
      "A congenital vascular anomaly, with no bearing on glaucoma",
      "A sign of disc edema that requires brain imaging",
      "A sign of active or progressing glaucomatous neuropathy",
      "An expected complication of prostaglandin drops"
    ],
    explain: "This is a disc hemorrhage (Drance hemorrhage): a small flame-shaped hemorrhage straddling the disc margin, in the nerve fiber layer. It signals active or progressing glaucoma, especially in normal-tension glaucoma, and often precedes a notch and a field defect at the same location. It resorbs within a few weeks to a few months: record it, photograph it, review the field and the target IOP.",
    why: [
      "False: an acquired hemorrhage at the disc margin is not a congenital variant; it must be recorded and followed.",
      "False: disc edema gives an elevated disc with blurred margins, often in both eyes; here the margin is sharp and the hemorrhage is isolated.",
      "Correct: a marker of progression; review the visual field, OCT and target IOP.",
      "False: prostaglandins cause redness, eyelash growth and pigmentation, not disc hemorrhage."
    ]
  },
  "A-302": {
    stem: "Routine gonioscopy in an asymptomatic patient, normal IOP. At the top of the mirror, look at the junction between the iris periphery and the angle wall. What is the most accurate interpretation?",
    options: [
      "Iris processes: a normal variant, with no treatment or special follow-up",
      "Peripheral anterior synechiae: plan a laser iridotomy",
      "Angle new vessels: arrange anti-VEGF and photocoagulation",
      "Angle recession: a sequela of contusion to follow for life"
    ],
    explain: "The fine, lacy brown strands that leave the iris periphery and climb the angle wall without hiding it are iris processes, a common normal variant. They let the structures behind them show through, unlike peripheral anterior synechiae, which are broad and opaque, hide the angle and persist on indentation.",
    why: [
      "Correct: fine and lacy, they do not prevent seeing the angle structures; no special management.",
      "False: a synechia is a broad, opaque adhesion that hides the spur and the trabecular meshwork and does not open on indentation. A classic error.",
      "False: new vessels are red, fine and branching, cross the spur and are often accompanied by vessels at the pupillary margin.",
      "False: recession shows an abnormally wide ciliary body band, often with torn iris processes, after trauma."
    ]
  },
  "A-303": {
    stem: "Consultation for \"suspected glaucoma\" after an abnormal visual field. Here are the Goldmann kinetic fields, one per eye. What is the most appropriate next step?",
    options: [
      "Start a prostaglandin and repeat the field in 3 months",
      "Perform gonioscopy to rule out angle closure",
      "Repeat a Humphrey 24-2, because Goldmann is unreliable",
      "Order brain imaging and a neurological assessment"
    ],
    explain: "Both fields lose the same (left) half and the defect stops sharply at the vertical meridian: this is a left homonymous hemianopia, hence a right retrochiasmal lesion (here, according to the source, an occipital stroke). Glaucoma respects the horizontal meridian, not the vertical one. Brain imaging and a neurological assessment are needed, not pressure-lowering treatment.",
    why: [
      "False: lowering IOP does not treat a brain lesion and delays the diagnosis of a stroke or tumor.",
      "False: gonioscopy is part of a glaucoma workup, but this homonymous defect is not glaucomatous.",
      "False: Goldmann is reliable for this type of defect; repeating delays the imaging.",
      "Correct: a homonymous defect respecting the vertical meridian localizes a retrochiasmal lesion."
    ]
  },
  "B-301": {
    stem: "A central corneal ulcer evolving over a few days. A colleague looks at the eye and states: \"With these small lesions around it, it's a fungus; let's start natamycin.\" What is the best response?",
    options: [
      "Agreed: satellite infiltrates are pathognomonic of fungal keratitis",
      "Not so fast: scrape for Gram stain and cultures before settling on treatment",
      "No need to scrape: cover bacteria and fungi right away without sampling",
      "Wait for confocal microscopy before any treatment or sampling"
    ],
    explain: "Satellite infiltrates (small foci separate from the main ulcer) classically suggest a fungus, but have also been described with bacteria (including Pseudomonas), Acanthamoeba and atypical mycobacteria. In this case, according to the source, it was a bacterial keratitis with Gram-negative bacilli, cultures negative. A central ulcer larger than 2 mm requires scraping for smears and cultures (bacterial and fungal) before settling on treatment.",
    why: [
      "False: a classic trap. Satellites are suggestive, not pathognomonic; here the source reports a bacterial keratitis.",
      "Correct: scraping (Gram stain, bacterial and fungal cultures) guides treatment; fortified drops are then started and adjusted.",
      "False: without samples, treatment cannot be adjusted if the ulcer worsens; the 1-2-3 rule requires cultures.",
      "False: confocal microscopy helps for Acanthamoeba or fungi, but is not available everywhere and must delay neither scraping nor treatment."
    ]
  },
});
Object.assign(G.OPH_EN.quiz, {
  "B-302": {
    stem: "History of herpetic epithelial keratitis treated several months ago. The eye is white and painless; fluorescein stains no lesion. Here is the corneal appearance at the slit lamp. What is the most appropriate management?",
    options: [
      "Reassure: inactive scars; prophylaxis if recurrences are frequent",
      "Valacyclovir 500 mg TID for 7 to 10 days for an epithelial recurrence",
      "Debridement of the lesions, then trifluridine 1 % nine times daily",
      "Prednisolone 1 % every 2 hours for active immune stromal keratitis"
    ],
    explain: "These branching greyish opacities, without fluorescein uptake in a quiet eye, are ghost dendrites: residual subepithelial infiltration and scarring where old dendritic ulcers were. This is not an active infection. Document, monitor and discuss oral prophylaxis (acyclovir 400 mg BID, HEDS) if recurrences are frequent.",
    why: [
      "Correct: an inactive scar; prophylaxis depends on the number of recurrences, not on the scar itself.",
      "False: an active dendrite takes up fluorescein (a branching ulcer with terminal bulbs); here nothing stains.",
      "False: debridement and trifluridine target an active epithelial ulcer; trifluridine is also toxic to the epithelium.",
      "False: immune stromal keratitis gives stromal edema and infiltrate with inflammation; here the eye is quiet."
    ]
  },
  "B-303": {
    stem: "Three months after DSAEK for Fuchs dystrophy. The eye bank had reported a positive Candida albicans culture from the donor rim, and preventive antifungal treatment was given. Here is the current appearance. What should be kept in mind?",
    options: [
      "Benign Kaye dots: continue routine graft follow-up",
      "Endothelial rejection: intensive topical corticosteroids alone",
      "An interface infection, resistant to drops: surgery may be needed",
      "A surface infection that heals within a few days of topical antifungal"
    ],
    explain: "The small creamy white spots at the periphery of the graft correspond, in this context, to Candida colonies in the interface between the DSAEK graft and the recipient cornea. This closed pocket is poorly reached by drops: according to the source, the infection resisted medical treatment, recurred after a repeat DSAEK and intracameral voriconazole, and only a penetrating keratoplasty eradicated it.",
    why: [
      "False: Kaye dots are fine epithelial dots in front of the sutures of a penetrating graft, without a deep white infiltrate.",
      "False: endothelial rejection gives precipitates on the graft, a rejection line and edema; steroids alone would worsen a fungal infection.",
      "Correct: the interface shields the fungus; a graft exchange or penetrating keratoplasty is sometimes necessary.",
      "False: the infection is deep, in the interface, not on the surface; it does not heal within a few days of drops."
    ]
  },
  "B-304": {
    stem: "A patient known to have keratoconus, already operated on. Here is the appearance of the cornea under diffuse illumination. Which statement about this treatment is correct?",
    options: [
      "These are phakic intraocular lenses placed in front of the iris",
      "These segments alone stabilize the disease, like cross-linking",
      "These are the sutures of a penetrating keratoplasty for advanced keratoconus",
      "These segments regularize the cornea without halting progression"
    ],
    explain: "Two intrastromal corneal ring segments are seen, implanted in the midperipheral stroma. They flatten and regularize the central cornea to reduce irregular astigmatism and improve vision or contact lens tolerance. They do not stabilize the disease: if the keratoconus progresses, corneal cross-linking (CXL) is added.",
    why: [
      "False: a phakic IOL is inside the eye, in front of or behind the iris, with a central optic and haptics; here the segments are within the cornea.",
      "False: only cross-linking (CXL) slows progression; the rings correct the shape.",
      "False: graft sutures are fine black radial threads around a graft; here there are two transparent arcs.",
      "Correct: a reshaping effect; CXL remains the stabilizing treatment."
    ]
  },
  "B-305": {
    stem: "A lesion at the junction of cornea and conjunctiva that has been growing for a few months; heavy sun exposure at work. Here is the appearance under diffuse illumination. Which diagnosis should be considered first?",
    options: [
      "Typical pterygium, to be monitored without biopsy",
      "Ocular surface squamous neoplasia",
      "Inflamed pinguecula (pingueculitis)",
      "Benign amelanotic conjunctival nevus"
    ],
    explain: "A greyish, elevated, gelatinous mass straddling the limbus, invading the cornea with an irregular front and tortuous feeder vessels: this is the appearance of ocular surface squamous neoplasia (OSSN), here a squamous cell carcinoma according to the source. The main risk factor is UV exposure (also HIV, HPV, immunosuppression). Management: referral to cornea or ocular oncology for excisional biopsy or topical treatment.",
    why: [
      "False: a pterygium is a fleshy triangle with a flat head that advances regularly; a gelatinous lesion with an irregular front requires ruling out a neoplasia.",
      "Correct: gelatinous appearance, feeder vessels and recent growth; biopsy will confirm.",
      "False: a pinguecula is a small yellowish deposit that stays on the conjunctiva without invading the cornea.",
      "False: a nevus is usually stable, often pigmented or cystic, and does not invade the cornea."
    ]
  },
  "B-306": {
    stem: "Aphakic, vitrectomized eye. One month after an intravitreal injection for macular edema, the cornea becomes edematous. The patient says he sees \"something white\" on waking. After a few minutes with the head tilted down, here is the image. What is the management?",
    options: [
      "Promptly remove the implant from the anterior chamber",
      "Reassure and recheck in a month, the edema will regress",
      "Prescribe sodium chloride 5 % and observe the edema",
      "Plan a DMEK right away without touching the implant"
    ],
    explain: "The white rod in the inferior anterior chamber is an intravitreal dexamethasone implant (Ozurdex) that has migrated forward, for lack of a capsular barrier in this aphakic eye. In contact with the endothelium, it sustains corneal edema that can become permanent: according to the source, it was removed urgently. Also according to the source, the manufacturer's labeling contraindicates it in aphakia and in the presence of an anterior chamber IOL without an intact posterior capsule.",
    why: [
      "Correct: prompt surgical removal to limit endothelial decompensation.",
      "False: waiting leaves the implant in contact with the endothelium and worsens the decompensation.",
      "False: hypertonic saline relieves epithelial edema, but does not treat the cause; the implant keeps damaging the endothelium.",
      "False: grafting without removing the implant would expose the new graft to the same damage; remove the cause first, then reassess."
    ]
  },
  "C-301": {
    stem: "Normal-tension glaucoma: IOP 12 to 20 mmHg on a diurnal curve, open angles, Raynaud disease. Here is the nerve fiber OCT. According to the CNTGS trial, which strategy is best supported if the disease progresses?",
    options: [
      "Aim for an IOP below 21 mmHg, the statistical threshold of normal",
      "No pressure-lowering treatment, since IOP is already normal",
      "Lower IOP by about 30 % below baseline",
      "Replace the drops with an oral calcium channel blocker"
    ],
    explain: "The OCT shows nerve fiber layer thinning in both eyes (average 74 µm on the right and 62 µm on the left). In NTG, IOP still matters: in CNTGS, a 30 % reduction in IOP reduced progression from about 35 % to 12 % (per-protocol analysis). Since many untreated patients do not progress, a stable patient can be observed, but documented progression justifies treatment.",
    why: [
      "False: IOP is already below 21 mmHg; the target is set as a percentage reduction from baseline.",
      "False: IOP contributes even when it is \"normal\"; CNTGS shows the benefit of lowering it in those who progress.",
      "Correct: this is the target of the CNTGS trial (Collaborative Normal-Tension Glaucoma Study).",
      "False: vascular factors are being studied, but no oral drug replaces IOP lowering, the only proven treatment."
    ]
  },
  "C-302": {
    stem: "Three months after a central retinal artery occlusion, IOP is rising. Here is the iris under diffuse illumination (the circle was drawn by the source). What is the most appropriate management?",
    options: [
      "Laser peripheral iridotomy to reopen the angle",
      "Selective laser trabeculoplasty as first-line treatment",
      "Pilocarpine 2 % to open the angle and a recheck in six months",
      "Gonioscopy, anti-VEGF and panretinal photocoagulation"
    ],
    explain: "The fine, lacy vessels on the surface of the iris, near the pupillary margin, are iris neovascularization. After a central retinal artery occlusion, the ischemic retina releases VEGF; according to the source, neovascularization and neovascular glaucoma appeared at about 3 months and were treated with intravitreal bevacizumab. Gonioscopy (angle new vessels), treatment of the ischemia (anti-VEGF, panretinal photocoagulation) and IOP control are needed.",
    why: [
      "False: neovascular closure is synechial (a fibrovascular membrane), not pupillary block; iridotomy does not open it.",
      "False: SLT is ineffective when the meshwork is covered with new vessels and can worsen inflammation.",
      "False: pilocarpine increases inflammation and congestion; it is avoided in neovascular glaucoma.",
      "Correct: assess the angle, block VEGF and treat the ischemia at its source."
    ]
  },
  "C-303": {
    stem: "Known pseudoexfoliation glaucoma, consultation for cataract. Here is the dilated pupil under diffuse illumination. Which finding most changes the surgical plan?",
    options: [
      "A dense nuclear cataract that will require more phaco energy",
      "A lens displaced downward by zonular weakness",
      "A persistent pupillary membrane that will hamper the capsulorhexis",
      "A posterior synechia that will prevent good dilation"
    ],
    explain: "The upper edge of the lens crosses the dilated pupil: the lens has slipped downward. According to the source, this is a spontaneous subluxation with superior zonular dehiscence and dialysis, the zonules being covered with white fibrillar material. Pseudoexfoliation weakens the zonules: plan a high-risk surgery (capsular support devices, or even extraction and fixation of an IOL outside the bag).",
    why: [
      "False: nuclear density matters, but the lens displacement is the finding that changes the technique and equipment.",
      "Correct: zonules ruptured superiorly; plan a tension ring, capsular hooks or another strategy.",
      "False: the arc crossing the pupil is the lens equator, not a membrane arising from the iris.",
      "False: the pupil is round, with no notch or visible adhesion between iris and lens."
    ]
  },
  "C-304": {
    stem: "Anterior uveitis with elevated IOP. Here is the corneal appearance under diffuse illumination. Which category of causes should these precipitates prompt you to look for first?",
    options: [
      "Granulomatous uveitides: sarcoidosis, tuberculosis, syphilis, herpes",
      "HLA-B27-related uveitides: spondyloarthritis, inflammatory bowel disease",
      "Posner-Schlossman syndrome, with no further workup needed",
      "A toxic reaction to preserved glaucoma drops"
    ],
    explain: "These numerous, rounded, yellowish keratic precipitates, larger than fine precipitates, are, according to the source, mutton-fat keratic precipitates. They indicate granulomatous uveitis: look for sarcoidosis, tuberculosis, syphilis, herpetic uveitis (HSV/VZV) or Vogt-Koyanagi-Harada. The workup guides treatment, because corticosteroids without adequate cover can worsen an infection.",
    why: [
      "Correct: mutton fat = granulomatous uveitis; a targeted workup before prolonged corticosteroids.",
      "False: HLA-B27 uveitis is typically acute, unilateral and highly inflammatory, with fine precipitates, fibrin or hypopyon.",
      "False: Posner-Schlossman gives a few fine precipitates with a very high IOP; here they are numerous and larger.",
      "False: drop toxicity affects the surface (punctate keratitis, conjunctiva), not the endothelium."
    ]
  },
  "C-305": {
    stem: "Two weeks after a MIGS procedure that was aborted partway through. Here is the eye in an external photograph. What is the main risk to watch for in the coming days?",
    options: [
      "Endophthalmitis, almost certain given this blood",
      "Hypotony from a leaking filtering bleb",
      "IOP rise and corneal blood staining",
      "Acanthamoeba keratitis related to the procedure"
    ],
    explain: "The dark red clot in the anterior chamber is a hyphema, here retracting two weeks after an iStent attempt aborted because of bleeding (according to the source). Red cells clog the trabecular meshwork and raise IOP; a prolonged elevated IOP with a lot of blood can stain the cornea (corneal blood staining). Monitor IOP, head elevated, cycloplegic and topical corticosteroid; surgical washout if IOP stays uncontrolled or if the cornea begins to stain.",
    why: [
      "False: blood is not a sign of infection; endophthalmitis gives increasing pain, hypopyon and vitritis.",
      "False: the iStent does not create a filtering bleb; it diverts aqueous into Schlemm canal.",
      "Correct: blood in the meshwork = elevated IOP; the cornea can stain if IOP stays high with a large hyphema.",
      "False: Acanthamoeba is mainly linked to contact lenses and water, not to intraocular surgery."
    ]
  },
  "C-306": {
    stem: "Postoperative day 1 after placement of a drainage tube for uncontrolled glaucoma. Here is the slit-lamp appearance under diffuse illumination. What is the most likely interpretation and management?",
    options: [
      "Acute endophthalmitis: immediate tap and intravitreal injections",
      "Fibrinous reaction: intensive topical steroid and close follow-up",
      "Organized hyphema: surgical washout of the anterior chamber",
      "Aqueous misdirection: cycloplegic and laser to the anterior vitreous"
    ],
    explain: "The web of whitish strands stretched in front of the pupil, the day after surgery, is a fibrinous reaction: postoperative inflammation lets fibrin into the anterior chamber. It responds to intensive topical corticosteroids (with a cycloplegic if needed). The trap: mistaking it for endophthalmitis, which is suspected instead with increasing pain, hypopyon, vitritis or sudden vision loss, and which requires a tap and intravitreal antibiotics.",
    why: [
      "False: a trap. On day 1, fibrin without hypopyon or vitritis points to inflammation; endophthalmitis remains to be ruled out if things worsen.",
      "Correct: a postoperative fibrinous reaction; recheck in 24 to 48 h to make sure it regresses.",
      "False: a hyphema is red, with a level or clot; fibrin is white and stringy.",
      "False: misdirection gives an anterior chamber flattened centrally as well as peripherally, with normal or elevated IOP; a white web in front of the pupil is not part of it."
    ]
  },
});
