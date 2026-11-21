var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH_EN = G.OPH_EN || {};

G.OPH_EN.capsules = Object.assign(G.OPH_EN.capsules || {}, {
"b-bases": {
 "title": "Cornea clinic essentials",
 "intro": "Before the fiches, here is a map of the territory: what you see in cornea clinic, the words to describe a cornea at the slit lamp, the major disease families, the tests and the treatment tools. Each concept is first stated in plain words, then refined. The module's fiches assume everything here is known.",
 "sections": [
  {
   "title": "What we do in cornea clinic",
   "text": "Cornea clinic deals with the ocular surface: cornea, conjunctiva, limbus, lids and tear film. You see three kinds of patients: acute infections or inflammation, chronic diseases that are followed (dry eye, keratoconus, Fuchs, graft patients) and patients preparing for surgery. The first reflex is triage: what threatens vision or the integrity of the globe in the coming hours or days? A cornea that is infected or thinning cannot wait; a cornea that is slowly clouding can wait for an elective appointment.",
   "bullets": [
    "**Typical complaints**: painful red eye, decreased vision, photophobia, foreign body sensation, tearing, fluctuating vision, halos.",
    "**Urgent (same day)**: infiltrate or ulcer (especially in a contact lens wearer), laceration or positive Seidel (aqueous humor leak), graft rejection, rapid thinning; **chemical burn: irrigate immediately**, before any examination.",
    "**Semi-urgent (a few days)**: epithelial defect that won't close, recurrence of known herpes, acute hydrops in keratoconus, recurrent erosion.",
    "**Elective (weeks to months)**: chronic dry eye, Fuchs, pterygium, keratoconus to document (sooner in children), workup before keratoplasty or cataract surgery.",
    "**Graft patient with RSVP** (Redness, Sensitivity to light, Vision ↓, Pain): seen the same day.",
    "**At every visit**: VA (± pinhole), IOP, slit lamp before and then after fluorescein, drawing of the lesion (size in mm, location, depth)."
   ],
   "figure": {
    "type": "eye",
    "highlight": [
     "cornee",
     "limbe",
     "conjonctive",
     "chambre-anterieure"
    ]
   }
  },
  {
   "title": "Reading a cornea at the slit lamp: the vocabulary",
   "text": "Describing a cornea means saying **which layer** is involved and **how**. The epithelium, the surface \"skin\", protects against microbes; where it is missing, the area takes up fluorescein. Beneath it, the stroma makes up the transparent thickness: a white spot forming in it is made of white blood cells or scar. Posteriorly, the endothelium pumps water out; if it fails, the cornea swells and turns gray. Always record the size (mm), location (central or peripheral, at what clock hour), depth, fluorescein uptake and anterior chamber reaction.",
   "bullets": [
    "**Epithelial defect**: area without epithelium, green with fluorescein under cobalt blue light.",
    "**Infiltrate**: white-gray opacity in the stroma = inflammatory cells; sterile or infectious.",
    "**Ulcer**: epithelial defect + infiltrate, with tissue loss; infectious until proven otherwise.",
    "**Scar**: stable white opacity, with no surrounding edema or inflammation; **leukoma** if dense and white.",
    "**Neovascularization**: vessels from the limbus invading the cornea; chronic insult (contact lenses, herpes, burn).",
    "**Edema**: thickened, grayish cornea; epithelial (microcysts, bullae) or stromal, with **Descemet folds** (striae at the back of the stroma).",
    "**KP** (keratic precipitates): deposits of inflammatory cells stuck to the endothelium = inflammation inside the eye.",
    "**Hypopyon**: white layer of white blood cells at the bottom of the anterior chamber; intense inflammation, possible severe infection.",
    "**Thinning**: stroma less thick in the slit beam; **descemetocele** if only Descemet's membrane is still holding (impending perforation).",
    "**Seidel**: concentrated fluorescein (dark orange) is diluted by leaking aqueous humor, producing a bright green stream under cobalt blue = wound leak or perforation."
   ],
   "figure": {
    "type": "cornea",
    "highlight": [
     "epithelium",
     "stroma",
     "descemet",
     "endothelium"
    ],
    "edema": "none",
    "guttae": false,
    "scar": false
   },
   "photo": "OPH-001"
  },
  {
   "title": "The families of corneal disease",
   "text": "Almost all corneal diseases fall into a few large families. Classifying first helps ask the right question: is the surface poorly nourished? is there a microbe? is the immune system attacking? is the cornea too weak, opaque, swollen or injured? A single cornea can combine several families: herpes (infection) leaves an anesthetic cornea (surface), which ulcerates, then scars, and eventually needs a graft.",
   "bullets": [
    "**Surface and tear film**: insufficient or unstable tears (dry eye, meibomian gland dysfunction or MGD, exposure); neurotrophic keratitis = anesthetic cornea that heals poorly.",
    "**Infections** (infectious keratitis): bacteria, viruses (herpes simplex or HSV, zoster), fungi, Acanthamoeba (a water-borne ameba); contact lenses are the major risk factor.",
    "**Immune inflammation**: the immune system damages the cornea without an active microbe (herpetic stromal keratitis, marginal infiltrates, PUK or peripheral ulcerative keratitis of systemic diseases, graft rejection).",
    "**Ectasias**: a cornea too weak that thins and bulges (keratoconus, pellucid marginal degeneration, ectasia after refractive surgery).",
    "**Dystrophies**: hereditary, bilateral, noninflammatory, specific to one layer (EBMD or epithelial basement membrane dystrophy, stromal dystrophies, Fuchs for the endothelium).",
    "**Degenerations**: acquired wear related to age, sun or inflammation, often asymmetric (pinguecula, pterygium, band keratopathy).",
    "**Endothelium**: the internal pump fails and the cornea becomes waterlogged (Fuchs, pseudophakic bullous keratopathy, graft failure).",
    "**Trauma and burns**: abrasion, foreign body, recurrent erosion, open globe laceration, chemical burn (alkalis penetrate deeper than acids).",
    "**Surface tumors**: OSSN (ocular surface squamous neoplasia), a gelatinous or white limbal lesion not to be confused with a pterygium."
   ]
  },
  {
   "title": "Ancillary tests: which question each one answers",
   "text": "Each test answers a specific question: choosing it means knowing what you are looking for. Fluorescein shows where the epithelium is missing; lissamine green stains damaged cells of the conjunctiva and cornea. Corneal scraping with cultures identifies the microbe, ideally before antibiotics. Topography measures the shape of the front surface; tomography measures both surfaces and the thickness everywhere. Specular microscopy counts endothelial cells; confocal microscopy shows cells and some microbes in the living cornea. AS-OCT gives a cross-section of the anterior segment.",
   "bullets": [
    "**Fluorescein** (cobalt blue light): epithelial defect, punctate keratitis, dendrite, Seidel, TBUT (tear breakup time, normal > 10 s).",
    "**Scraping + cultures**: ulcer per the 1-2-3 rule (anterior chamber reaction ≥ 1+, infiltrate ≥ 2 mm or ≤ 3 mm from the center: one criterion is enough), atypical or refractory.",
    "**Smears and media**: Gram stain; blood agar, chocolate agar, Sabouraud (fungi); non-nutrient agar with an E. coli overlay for Acanthamoeba; PCR depending on the context.",
    "**Topography** (Placido) vs **tomography** (Scheimpflug, e.g. Pentacam): tomography also sees the posterior surface and the thinnest point, markers of ectasia.",
    "**Pachymetry**: corneal thickness (≈ 540–550 µm centrally); tracks edema (Fuchs), thinning (ectasia) and helps interpret IOP.",
    "**Specular microscopy**: endothelial cell density (cells/mm²), cell size and shape, guttae (dark areas); before surgery, in Fuchs, after keratoplasty.",
    "**Confocal microscopy**: Acanthamoeba cysts, fungal hyphae, corneal nerves; useful when cultures are negative.",
    "**AS-OCT** (anterior segment OCT): depth of an opacity, epithelial thickness, DMEK graft attachment, iridocorneal angle.",
    "**Corneal sensation** (cotton wisp): decreased after herpes, zoster, diabetes or surgery → neurotrophic keratitis."
   ],
   "figure": {
    "type": "topo",
    "pattern": "kc-inferior"
   },
   "photo": "OPH-117"
  },
  {
   "title": "Treatment principles",
   "text": "Four rules guide almost every treatment. One: **treat the cause** (microbe, lid, contact lens, misdirected lash, exposure). Two: **protect the epithelium** and let it heal, because it blocks microbial entry and stromal melting; lubricate, stop toxic drops, cover or close the eye as needed. Three: **control inflammation**, which leaves scars and vessels, without feeding an infection. Four: **prevent complications** (perforation, glaucoma, central scar). The topical corticosteroid is both the most useful and the most dangerous tool in the clinic.",
   "bullets": [
    "**Steroid dangerous**: unexplained epithelial defect, fungal keratitis, uncontrolled Acanthamoeba, epithelial herpes (dendrite), uncovered bacteria or Nocardia.",
    "**Steroid useful**: herpetic stromal keratitis (under antiviral cover), graft rejection, chemical burn (≤ 10–14 days), immune inflammation; always with monitoring.",
    "**Bacterial keratitis**: adjunctive steroid with no overall benefit (SCUT and SCUT II trials); possible benefit in a severe central ulcer, on an effective antibiotic; never with Nocardia.",
    "**Every course of steroids must be monitored**: IOP (steroid response), cataract, delayed healing; no steroid without a slit-lamp exam.",
    "**Drop toxicity**: preservative (benzalkonium chloride) and overly frequent instillation damage the epithelium; prefer \"preservative-free\".",
    "**Escalation if the epithelium won't close**: intensive lubrication → bandage contact lens or plugs → amniotic membrane or tarsorrhaphy → glue or graft if perforated."
   ],
   "photo": "OPH-072"
  },
  {
   "title": "Corneal transplants explained",
   "text": "A corneal transplant (keratoplasty) replaces the diseased part with tissue from a deceased donor, prepared by an eye bank. The modern rule: **replace only the diseased layer**. If the full thickness is involved, a penetrating keratoplasty (PK) is done. If the front is diseased (keratoconus, scar) but the endothelium is healthy, the patient's own is kept (DALK): no endothelial rejection is possible. If only the endothelium fails (Fuchs, postsurgical edema), only the back is grafted (DSAEK or DMEK), pressed against the cornea by an air or gas bubble.",
   "bullets": [
    "**PK** (penetrating keratoplasty): full thickness, sutured; slow recovery, astigmatism, wound fragile for life, highest rejection risk.",
    "**DALK** (deep anterior lamellar keratoplasty): epithelium and stroma removed down to Descemet's membrane (\"big bubble\" technique); the patient's endothelium remains.",
    "**DSAEK** (Descemet stripping automated endothelial keratoplasty): endothelium + Descemet + a thin layer of stroma; easier to handle.",
    "**DMEK** (Descemet membrane endothelial keratoplasty): endothelium + Descemet only, a scroll-forming film; best vision, less rejection, but more detachments (rebubbling).",
    "**Rejection**: PK > DSAEK > DMEK (qualitative order); a graft patient with RSVP is seen the same day and receives intensive steroids.",
    "**Rejection ≠ failure**: rejection is an immune attack, often reversible if treated early; failure is a graft that no longer works, often needing a regraft."
   ],
   "figure": {
    "type": "cornea",
    "highlight": [
     "descemet",
     "endothelium"
    ],
    "edema": "stromal",
    "guttae": true,
    "scar": false
   },
   "photo": "OPH-101"
  },
  {
   "title": "Québec specifics",
   "text": "In Québec, severe corneal disease is often managed in tertiary centers. Fortified drops, concentrated antibiotics, are compounded by hospital pharmacies: a severe keratitis is therefore frequently referred to a center's ophthalmology emergency (CHUM, HMR, MUHC, Jewish General Hospital, CHU de Québec). Optometrists see many first visits (red eye, contact lenses, dry eye, foreign body) and refer to an ophthalmologist what is beyond their scope. A good referral specifies VA, size and location of the lesion, contact lens wear and drops already started.",
   "bullets": [
    "**CNESST**: workplace injury (chemical burn, foreign body) → CNESST forms to complete.",
    "**CXL**: offered in specialized centers; public coverage variable, check locally.",
    "**Oxervate** (cenegermin 0.002%): approved by Health Canada for moderate or severe neurotrophic keratitis in adults.",
    "**Anti-amebic agents**: compounded preparations (PHMB 0.02%, chlorhexidine 0.02%, ± propamidine); polihexanide 0.08% (Europe): Canadian availability to be confirmed.",
    "**Recent US products** (lotilaner, perfluorohexyloctane, nasal varenicline, epi-on CXL Epioxa): Canadian availability to be confirmed.",
    "**Zoster**: recombinant vaccine (Shingrix) recommended by NACI from age 50, including after an episode of zoster."
   ]
  }
 ],
 "toolbox": [
  {
   "name": "Artificial tears (preserved or preservative-free)",
   "en": "Artificial tears (preserved or preservative-free)",
   "what": "Over-the-counter lubricating drops (carboxymethylcellulose, hyaluronate…), in a multidose bottle with preservative or in unit doses or special preservative-free bottles.",
   "how": "Replace and stabilize the tear film, dilute inflammatory mediators and smooth the optical surface.",
   "when": "Foundation of any dry eye or punctate keratitis treatment; preserved if ≤ 4 times a day, preservative-free beyond that or if the surface is fragile.",
   "cx": "The preservative (benzalkonium chloride) damages the epithelium with frequent use; transient blurred vision; does not treat the cause."
  },
  {
   "name": "Lubricating ointment",
   "en": "Lubricating ointment",
   "what": "Ophthalmic ointment (petrolatum, mineral oil) with no active ingredient, applied in the inferior fornix.",
   "how": "Forms a thick, long-lasting layer that protects the cornea for hours, especially at night.",
   "when": "At bedtime for dry eye, exposure (lagophthalmos = lids that close poorly, facial palsy) and recurrent erosion.",
   "cx": "Very blurred vision, so mainly at bedtime; interferes with adherence of a contact lens or glue."
  },
  {
   "name": "NaCl 5% (hypertonic drops and ointment)",
   "en": "Hypertonic saline 5%",
   "what": "Solution or ointment saltier than tears.",
   "how": "Draws water out of the epithelium by osmosis: reduces epithelial edema and helps the epithelium adhere better.",
   "when": "Fuchs epithelial edema (worse in the morning); recurrent erosion (ointment at bedtime for 3–6 months).",
   "cx": "Stinging; superficial effect only: does not correct a decompensated endothelium."
  },
  {
   "name": "Warm compresses and lid hygiene",
   "en": "Warm compresses and lid hygiene",
   "what": "Heat on the closed lids for a few minutes, massage toward the lid margin, then cleaning of the lashes (wipes, tea tree oil products if Demodex).",
   "how": "Heat liquefies thickened meibum, massage empties the glands, cleaning reduces bacteria, scurf and Demodex.",
   "when": "Meibomian gland dysfunction (MGD), blepharitis, chalazion; maintenance treatment for almost all evaporative dry eye.",
   "cx": "Effective only if done daily, long term; skin burn if too hot; tea tree oil irritates if poorly diluted."
  },
  {
   "name": "Topical antibiotics: fluoroquinolones and fortified drops",
   "en": "Topical antibiotics: fluoroquinolones and fortified drops",
   "what": "Commercial 4th-generation fluoroquinolone (moxifloxacin 0.5%) or fortified drops compounded by the hospital pharmacy (vancomycin 25 mg/mL + tobramycin 14 mg/mL).",
   "how": "Kill bacteria in the stroma; high frequency (loading dose, then hourly day and night) maintains an adequate concentration.",
   "when": "Bacterial keratitis: fluoroquinolone alone if small and peripheral; fortified if 1-2-3 rule, central ulcer or failure; prophylaxis for an epithelial defect.",
   "cx": "Epithelial toxicity (especially fortified drops), resistance, delayed healing; scraping and cultures before starting if the ulcer is significant."
  },
  {
   "name": "Antivirals (oral and topical trifluridine)",
   "en": "Antivirals (oral, topical trifluridine)",
   "what": "Acyclovir, valacyclovir or famciclovir tablets; trifluridine 1% drops.",
   "how": "Block viral DNA replication of herpes simplex virus (HSV) and varicella-zoster virus (VZV); do not eliminate latent virus in the ganglion.",
   "when": "Epithelial HSV (acyclovir 400 mg 5 times/day or valacyclovir 500 mg TID, 7–10 days); herpes zoster ophthalmicus (valacyclovir 1 g TID × 7 days); prophylaxis; cover during steroid use.",
   "cx": "Adjust for renal function; trifluridine is toxic to the epithelium (duration ≤ 14–21 days)."
  },
  {
   "name": "Antifungals (natamycin, voriconazole)",
   "en": "Antifungals",
   "what": "Natamycin 5% suspension; voriconazole 1% drops compounded by the pharmacy (sometimes also oral).",
   "how": "Natamycin (a polyene) binds to ergosterol in the fungal membrane and blocks its growth; voriconazole (an azole) blocks the synthesis of this ergosterol; slow stromal penetration.",
   "when": "Fungal keratitis: natamycin first for filamentous fungi, especially Fusarium (MUTT I); voriconazole for yeasts or as an adjunct.",
   "cx": "Treatment for weeks to months, surface toxicity; added oral voriconazole without benefit (MUTT II); no steroid; therapeutic keratoplasty if progressing."
  },
  {
   "name": "Anti-amebic agents (biguanides, diamidines)",
   "en": "Anti-amoebic agents (biguanides, diamidines)",
   "what": "Biguanide drops (PHMB 0.02%, chlorhexidine 0.02%) ± a diamidine (propamidine), as compounded preparations in Canada.",
   "how": "Biguanides destroy the membrane of the active ameba (trophozoite) and of the resistant cyst; diamidines complement their action.",
   "when": "Acanthamoeba keratitis (contact lens wearer, water exposure, pain out of proportion, ring infiltrate), for months.",
   "cx": "Epithelial toxicity, very long treatment, recurrences; polihexanide 0.08% approved in Europe: Canadian availability to be confirmed."
  },
  {
   "name": "Topical corticosteroids",
   "en": "Topical corticosteroids",
   "what": "Anti-inflammatory drops of variable potency: strong (prednisolone acetate 1%, difluprednate 0.05%, dexamethasone 0.1%) or weaker (fluorometholone, loteprednol).",
   "how": "Block the inflammatory cascade: less scarring, neovascularization and immune destruction.",
   "when": "Herpetic stromal keratitis (under antiviral cover), graft rejection, chemical burn (short course), uveitis, severe surface inflammation.",
   "cx": "Steroid-induced ocular hypertension, cataract, worsened infection (epithelial HSV, fungus, ameba), stromal melt; never without a slit-lamp exam."
  },
  {
   "name": "Cyclosporine and lifitegrast",
   "en": "Cyclosporine and lifitegrast",
   "what": "Immunomodulatory drops for chronic use, usually twice a day.",
   "how": "Dampen activation of ocular surface T lymphocytes (cyclosporine: calcineurin; lifitegrast: LFA-1/ICAM-1 interaction).",
   "when": "Dry eye with an inflammatory component that persists despite tears; some severe allergic keratoconjunctivitis.",
   "cx": "Burning on instillation, slow effect (weeks to months); lifitegrast: metallic taste (dysgeusia); not in the presence of active infection."
  },
  {
   "name": "Cycloplegics",
   "en": "Cycloplegics",
   "what": "Drops that dilate the pupil and paralyze accommodation (cyclopentolate 1%, homatropine 5%, atropine 1%).",
   "how": "Block muscarinic receptors of the iris sphincter and ciliary muscle: relieve painful ciliary spasm and pull the iris away from the lens.",
   "when": "Keratitis or ulcer with an anterior chamber reaction, very painful abrasion, chemical burn, uveitis (prevent posterior synechiae).",
   "cx": "Blurred near vision, photophobia; risk of closing a narrow angle; anticholinergic effects in children and the elderly."
  },
  {
   "name": "Bandage contact lens",
   "en": "Bandage contact lens",
   "what": "Soft contact lens, highly oxygen-permeable, with no optical correction, fitted by the physician.",
   "how": "Protects the regrowing epithelium from lid friction and relieves pain.",
   "when": "Large abrasion, recurrent erosion, persistent epithelial defect, small leak (Seidel), over glue, after debridement or PRK (surface refractive laser).",
   "cx": "Infection (prophylactic antibiotic and close follow-up mandatory), loss or displacement; avoid with uncontrolled active infection."
  },
  {
   "name": "Punctal plugs",
   "en": "Punctal plugs",
   "what": "Small plugs (silicone or absorbable) inserted into the lacrimal puncta of the lids.",
   "how": "Block tear drainage toward the nose: tears and drops stay longer on the eye.",
   "when": "Aqueous-deficient dry eye despite artificial tears; epithelial defect related to dry eye.",
   "cx": "Tearing (epiphora), migration, irritation, canaliculitis; caution with active surface inflammation (the mediators stay on the eye)."
  },
  {
   "name": "Cyanoacrylate glue",
   "en": "Cyanoacrylate tissue adhesive",
   "what": "Surgical glue applied as a small drop on extreme thinning or a small perforation (≤ 2–3 mm), then covered with a bandage contact lens.",
   "how": "Immediately restores the watertightness of the globe and slows stromal melting by blocking the influx of inflammatory cells.",
   "when": "Descemetocele or small perforation (controlled infection, PUK, neurotrophic keratitis), while awaiting healing or a graft.",
   "cx": "Discomfort (lens mandatory), glue dislodgement, neovascularization; insufficient for a large perforation (tectonic graft)."
  },
  {
   "name": "Amniotic membrane",
   "en": "Amniotic membrane",
   "what": "Inner layer of the placenta (screened donor, processed tissue), sutured or glued onto the eye, or mounted on a ring inserted like a large contact lens.",
   "how": "Anti-inflammatory and antiscarring biologic dressing that helps the epithelium regrow.",
   "when": "Grade II–IV chemical burn (early), persistent epithelial defect, neurotrophic keratitis, after excision of pterygium or OSSN.",
   "cx": "Discomfort, dissolves within days to weeks (sometimes needs repeating); blurred vision while in place."
  },
  {
   "name": "CXL (corneal collagen cross-linking)",
   "en": "Corneal cross-linking",
   "what": "Riboflavin (vitamin B2) drops on the cornea, then ultraviolet A exposure; epi-off (epithelium removed) or epi-on.",
   "how": "Creates new bonds between the stromal collagen fibers: the cornea stiffens and stops bulging.",
   "when": "Progressing keratoconus or ectasia; in children from diagnosis (2025 consensus); Dresden protocol (3 mW/cm² × 30 min) or accelerated (9 mW/cm² × 10 min).",
   "cx": "Pain and risk of infection in the first days (epi-off), stromal haze, herpetic reactivation; stroma < 400 µm without epithelium: adapted protocol (protect the endothelium from UV); stabilizes the cone without reversing it."
  },
  {
   "name": "Corneal transplant (cross-reference)",
   "en": "Keratoplasty",
   "what": "Replacement of the diseased layer with donor tissue: PK, DALK, DSAEK or DMEK (see the section on transplants).",
   "how": "Restores transparency, shape or watertightness depending on the layer replaced.",
   "when": "Central scar, advanced contact lens–intolerant keratoconus, endothelial decompensation (Fuchs), perforation (tectonic graft), refractory infection (therapeutic graft).",
   "cx": "Rejection, failure, glaucoma, infection, astigmatism; topical steroids for months and lifelong follow-up."
  },
  {
   "name": "Tarsorrhaphy",
   "en": "Tarsorrhaphy",
   "what": "Partial or complete closure of the lids: temporary (suture, glue, botulinum toxin in the levator) or permanent (surgical).",
   "how": "Reduces exposure and evaporation: the cornea stays covered and moist, the epithelium can heal.",
   "when": "Exposure (facial palsy, lagophthalmos), neurotrophic keratitis, persistent epithelial defect despite other measures.",
   "cx": "Cosmetic appearance, reduced visual field, harder corneal examination; reopened once the surface has healed."
  }
 ],
 "vocab": [
  {
   "term": "Corneal epithelium",
   "def": "Surface layer (≈ 50 µm) renewed in about 7 days; it is the barrier against microbes."
  },
  {
   "term": "Bowman layer",
   "def": "Acellular layer beneath the epithelium (8–12 µm) that does not regenerate: a lesion reaching it leaves a scar."
  },
  {
   "term": "Stroma",
   "def": "About 90% of corneal thickness, made of highly ordered collagen that stays transparent as long as it is minimally hydrated."
  },
  {
   "term": "Descemet membrane",
   "def": "Basement membrane of the endothelium (10–15 µm in adults); it is what is grafted, with the endothelium, in DMEK."
  },
  {
   "term": "Endothelium",
   "def": "Monolayer of cells that pump water out of the stroma; they do not divide, so every loss is permanent."
  },
  {
   "term": "Limbus",
   "def": "Corneoscleral junction where the stem cells that renew the corneal epithelium live."
  },
  {
   "term": "Keratitis",
   "def": "Inflammation of the cornea, infectious or not; it is called an ulcer when there is tissue loss."
  },
  {
   "term": "Superficial punctate keratitis",
   "def": "Small dots of damaged epithelium that take up fluorescein; their distribution points to the cause (dry eye, exposure, toxicity)."
  },
  {
   "term": "Dendrite",
   "def": "Branching epithelial ulcer with terminal bulbs, the signature of herpes simplex."
  },
  {
   "term": "Pseudodendrite",
   "def": "Raised branching lesion, without terminal bulbs, that stains poorly with fluorescein; typical of zoster, also seen with Acanthamoeba."
  },
  {
   "term": "Anterior chamber reaction",
   "def": "Cells and protein (flare) visible in the aqueous humor with a narrow beam, graded 0 to 4+: a measure of intraocular inflammation."
  },
  {
   "term": "Descemetocele",
   "def": "Ulcer so deep that only the bulging Descemet membrane holds in the contents of the eye: impending perforation."
  },
  {
   "term": "Stromal melt",
   "def": "Rapid dissolution of the stroma by enzymes (collagenases) released during infection or inflammation; can lead to perforation."
  },
  {
   "term": "Neurotrophic keratitis",
   "def": "Cornea that has lost sensation (herpes, zoster, diabetes, surgery) and heals poorly: persistent epithelial defects, then an often painless ulcer."
  },
  {
   "term": "Lagophthalmos",
   "def": "Incomplete lid closure, a cause of exposure keratopathy, especially in the inferior third of the cornea."
  },
  {
   "term": "Guttae",
   "def": "Excrescences of Descemet's membrane produced by a diseased endothelium; dark areas on specular microscopy, the sign of Fuchs dystrophy."
  },
  {
   "term": "Bullous keratopathy",
   "def": "Chronic corneal edema with painful epithelial bullae when the endothelium no longer pumps (advanced Fuchs, after cataract surgery)."
  },
  {
   "term": "Ectasia",
   "def": "Progressive thinning of the cornea, which bulges forward (keratoconus, pellucid marginal degeneration, post-LASIK ectasia)."
  },
  {
   "term": "Hydrops",
   "def": "Tear in Descemet's membrane in advanced keratoconus: water suddenly floods the stroma, which becomes white and thick."
  },
  {
   "term": "Dystrophy",
   "def": "Hereditary, bilateral, symmetric and noninflammatory disease of a specific corneal layer."
  },
  {
   "term": "Degeneration",
   "def": "Acquired change (age, sun, inflammation), often asymmetric and peripheral."
  },
  {
   "term": "Pterygium",
   "def": "Triangular fold of vascularized conjunctiva invading the cornea, often nasally, promoted by UV exposure."
  },
  {
   "term": "OSSN",
   "def": "Ocular surface squamous neoplasia: gelatinous, white or highly vascularized limbal lesion, ranging from dysplasia to carcinoma."
  },
  {
   "term": "PUK",
   "def": "Peripheral ulcerative keratitis: crescent-shaped ulcer with thinning near the limbus, often the presenting sign of a systemic disease (rheumatoid arthritis, vasculitis)."
  },
  {
   "term": "Limbal stem cell deficiency",
   "def": "Loss of limbal stem cells (burn, contact lenses, surgeries): conjunctiva covers the cornea, which remains opaque and unstable."
  },
  {
   "term": "Khodadoust line",
   "def": "Line of keratic precipitates advancing across the endothelium of a graft during endothelial rejection."
  },
  {
   "term": "Preservative",
   "def": "Agent (often benzalkonium chloride) that prevents contamination of multidose bottles but irritates the epithelium over time."
  },
  {
   "term": "1-2-3 rule",
   "def": "Anterior chamber reaction ≥ 1+, infiltrate ≥ 2 mm or ≤ 3 mm from the center: scraping, cultures and fortified drops."
  }
 ]
}
});
