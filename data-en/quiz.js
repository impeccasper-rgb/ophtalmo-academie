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
