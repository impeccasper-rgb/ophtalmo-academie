// EN overlay: cornea fiches (module B). See docs/PLATFORM.md (i18n) and docs/progress/translation-fiches-cornee.md.
// Deep-merged into G.OPH.fiches by id; arrays replace FR arrays wholesale (structural keys such as kind/at/phase are repeated).
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH_EN = G.OPH_EN || {};
G.OPH_EN.fiches = G.OPH_EN.fiches || {};

// c-bacterienne
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-bacterienne": {
  title: "Bacterial keratitis",
  oneLiner: "Painful red eye, white infiltrate under an epithelial defect, especially in a contact lens wearer: scrape, culture, treat hourly.",
  definition: "A stromal abscess from bacteria entering through an epithelial break. An emergency: it can perforate.",
  anatomy: { text: "An intact epithelium and the tear film (lysozyme, antibodies) block nearly all bacteria; classic exception: Neisseria gonorrhoeae penetrates it. The avascular stroma receives white blood cells via the tears and the limbus (corneoscleral junction); their enzymes can melt collagen." },
  causal: {
    title: "From epithelial break to perforation",
    steps: [
      { label: "Break in the epithelium", detail: "Lens worn overnight or in water, abrasion, severe dry eye or an anesthetic cornea: the barrier opens to bacteria.", kind: "cause" },
      { label: "Bacteria invade the stroma", detail: "Pseudomonas aeruginosa (contact lens wearers), staphylococci or streptococci adhere at the break; a contaminated lens and case act as a reservoir.", kind: "mecanisme" },
      { label: "Influx of white blood cells", detail: "Neutrophils arrive en masse: this is the white infiltrate. Their enzymes (collagenases) and bacterial toxins digest collagen.", kind: "mecanisme" },
      { label: "Ulcer and intraocular inflammation", detail: "The digested stroma excavates (ulcer); inflammation spreads to the anterior chamber: cells, sometimes a hypopyon (layered white blood cells at the bottom of the chamber, usually sterile).", kind: "lesion" },
      { label: "Perforation or scar", detail: "If melting continues, only Descemet remains (descemetocele), then the cornea perforates: risk of endophthalmitis (intraocular infection); otherwise, an opaque scar.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Prevention", detail: "Never sleep, swim or shower in lenses; replace the case often." },
      { at: 1, label: "Intensive antibiotics", detail: "Drops hourly, day and night, after cultures: kill the bacteria before the stroma melts." },
      { at: 4, label: "Glue, graft", detail: "Tissue adhesive or tectonic graft (a piece of donor cornea that plugs the hole); later, an optical graft if there is a central scar." }
    ]
  },
  risk: [
    "Contact lenses (number one risk factor): worn overnight, in water, poorly maintained case",
    "Corneal trauma or foreign body",
    "Diseased ocular surface: severe dry eye, poor lid closure, anesthetic cornea",
    "Corneal graft or surgery, loose sutures",
    "Topical steroids, diabetes, immunosuppression"
  ],
  presentation: [
    "Pain, redness, photophobia and decreased vision over a few hours to 1–2 days",
    "White-yellow stromal infiltrate under an epithelial defect that stains with fluorescein",
    "Anterior chamber cells, sometimes hypopyon"
  ],
  exam: {
    signs: [
      { sign: "Epithelial defect overlying a stromal infiltrate", why: "Indicates an infectious ulcer (a sterile infiltrate has little or no defect)." },
      { sign: "Rapid necrosis, mucopurulent discharge, “melted” appearance", why: "Suggests Pseudomonas, especially in a contact lens wearer." },
      { sign: "Thinning or positive Seidel test", why: "Seidel: concentrated fluorescein (dark orange), diluted by leaking aqueous, forms a bright green stream = perforation." }
    ],
    tests: [
      { test: "Corneal scraping (spatula under topical anesthesia): Gram stain and cultures (blood agar, chocolate agar; Sabouraud for fungi)", when: "1-2-3 rule (anterior chamber reaction ≥ 1+, infiltrate ≥ 2 mm, ≤ 3 mm from the center: one criterion is enough), atypical or non-responding ulcer", read: "The Gram stain guides you within hours (Gram-negative rods: think Pseudomonas); culture and sensitivities refine therapy in 24–72 h. Take samples before the antibiotic, without delaying it." },
      { test: "Culture of the lens, case and solution", when: "Contact lens wearer, in addition to scraping", read: "Often contaminated: interpret together with the scraping." }
    ]
  },
  ddx: [
    { dx: "Sterile contact lens infiltrates", clue: "Small, peripheral, little pain; resolve once lenses are stopped." },
    { dx: "Fungal keratitis", clue: "Vegetable-matter trauma, feathery borders, satellite lesions, slower course." },
    { dx: "Acanthamoeba keratitis (freshwater ameba)", clue: "Lenses + water, pain out of proportion, negative bacterial cultures." }
  ],
  redFlags: [
    "1-2-3 criterion or hypopyon: cultures and fortified drops the same day",
    "Thinning, descemetocele or positive Seidel: shield, no pressure, call your staff",
    "Worse after 48 h: resistant bacterium, fungus or ameba"
  ],
  cat: {
    algo: [
      { q: "Epithelial defect with stromal infiltrate?", yes: "Infectious: remove the lens, keep it for culture.", no: "Small infiltrate, no defect: probably sterile, recheck in 24–48 h.", yesGo: 1 },
      { q: "Perforation or descemetocele?", yes: "Rigid shield, no pressure; ophthalmology immediately.", no: "", noGo: 2 },
      { q: "1-2-3 criterion, atypical or chronic ulcer?", yes: "Cultures, hourly fortified drops; ophthalmology the same day.", no: "Moxifloxacin 0.5% hourly; recheck at 24 h.", yesGo: 3, noGo: 3 },
      { q: "Worse at 48 h, lenses + water, plants?", yes: "Think fungus or ameba: specific sampling.", no: "Continue until the epithelium closes." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Stop lenses; bring lens and case for culture",
          "Small peripheral ulcer: moxifloxacin 0.5% (fluoroquinolone) every 5–15 min for the 1st hour, then hourly day and night",
          "Threatening ulcer, after scraping: fortified drops (hospital pharmacy), vancomycin 25 mg/mL or cefazolin 50 mg/mL + tobramycin 14 mg/mL, alternating hourly for 24–48 h",
          "Cycloplegic (drop that relaxes the ciliary muscle: less pain), oral analgesic; no pressure patch and no steroid at the outset"
        ]
      },
      {
        phase: "chirurgie",
        items: ["Perforation: cyanoacrylate glue if ≤ 2–3 mm, otherwise tectonic graft"]
      },
      {
        phase: "suivi",
        items: ["See daily at first: pain, size of the infiltrate and the defect, anterior chamber", "Taper gradually according to response and culture"]
      },
      {
        phase: "escalade",
        items: [
          "No improvement at 48–72 h: reculture, biopsy; think fungus, ameba, Nocardia (atypical bacterium), mycobacteria",
          "Steroid: the specialist’s decision, after culture and response to antibiotics; never with fungus or Nocardia"
        ]
      }
    ],
    local: "Fortified drops come from hospital pharmacies: a threatening ulcer is sent the same day to the ophthalmology emergency service of a tertiary center (CHUM, HMR, MUHC, Jewish General Hospital, CHU de Québec)."
  },
  treatments: [
    { name: "Moxifloxacin 0.5% (4th-generation fluoroquinolone)", dose: "Moxifloxacin 0.5%, 1 drop hourly day and night at first.", pitfall: "Never a pressure patch.", how: "Commercial drops: inhibit DNA gyrase and topoisomerase IV, the enzymes that let the bacterium replicate its DNA.", why: "Small peripheral ulcer without severity criteria.", pros: "Available at retail pharmacies, broad spectrum, good penetration.", cons: "Rising resistance (MRSA: methicillin-resistant Staphylococcus aureus); less reliable alone for large ulcers.", cx: "Epithelial toxicity with prolonged use." },
    { name: "Fortified drops", dose: "Vancomycin (or cefazolin) + tobramycin, alternating hourly.", pitfall: "Drops through the night too; keep bottles refrigerated.", qc: "Made by hospital pharmacies: refer to a center.", how: "Injectable antibiotics diluted into highly concentrated drops by the hospital pharmacy: vancomycin or cefazolin (Gram +), tobramycin (Gram −, including Pseudomonas).", why: "Threatening ulcer (1-2-3 rule) or moxifloxacin failure.", pros: "Very high concentrations; vancomycin covers MRSA.", cons: "Compounded in hospital, must be refrigerated; drops overnight.", cx: "Epithelial toxicity, burning." },
    { name: "Cyanoacrylate glue, tectonic graft", dose: "Cyanoacrylate glue + bandage lens if the hole is ≤ 2–3 mm.", pitfall: "No pressure on a perforated eye.", how: "A drop of tissue adhesive placed on the hole after debriding the epithelium, then a bandage contact lens; if the hole is large, a piece of donor cornea is sutured in.", why: "Descemetocele or perforation.", pros: "Seals the globe quickly; the glue also inhibits bacteria.", cons: "Glue only for small holes; graft on an infected eye (“hot” graft): rejection and recurrence are common.", cx: "Glue dislodgement; rejection, glaucoma." }
  ],
  treatment: {
    first: [
      "**You (first line)**: remove the lens; moxifloxacin 0.5% hourly for a small peripheral ulcer.",
      "**Ophthalmologist**: scraping, cultures, hourly fortified drops."
    ],
    refer: ["Same day for any ulcer — it can perforate within days.", "Immediately if perforation or descemetocele — an open globe."],
    pitfall: ["Pressure patch in a lens wearer: favors Pseudomonas.", "Topical steroid before cultures: worsens the infection."],
    qc: ["Fortified drops come from hospital pharmacies: refer to a center."]
  },
  pearls: [
    { q: "When should you scrape and culture before treating?", a: "AAO PPP 2023: central, large or deep infiltrate, chronic, multiple, atypical, after corneal surgery or not responding. In practice: **1-2-3 rule**." },
    { q: "Do you add a steroid for a bacterial ulcer?", a: "Not at the outset. SCUT (Steroids for Corneal Ulcers Trial, 2012; steroid added after 48 h of antibiotic): no overall benefit, possible benefit for severe central ulcers treated early, avoid with Nocardia. **SCUT II (2026)**: moxifloxacin + difluprednate ± cross-linking (CXL: riboflavin + UV that stiffen the cornea), no benefit on vision or scarring." },
    { q: "Why no pressure patch in a contact lens wearer?", a: "A closed, warm, moist eye favors Pseudomonas and prevents hourly drops. In a contact lens wearer, **always cover Pseudomonas**." }
  ],
  mnemonic: { title: "1-2-3 rule", text: "Anterior chamber ≥ 1+, infiltrate ≥ 2 mm, ≤ 3 mm from center: one criterion means culture and fortified drops." },
  compare: {
    title: "Normal vs bacterial ulcer (fluorescein)",
    normal: { caption: "Intact epithelium: no fluorescein uptake." },
    patho: {
      caption: "Ulcer: green epithelial defect overlying a white infiltrate.",
      reveal: [
        "Green area = absent epithelium",
        "White infiltrate under the green area, in the stroma",
        "Measure the longest diameter and the distance from the center (1-2-3 rule)",
        "Look for hypopyon and thinning"
      ]
    }
  }
} });

// c-herpes
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-herpes": {
  title: "Herpetic keratitis (HSV) and herpes zoster ophthalmicus",
  oneLiner: "Dendrite with terminal bulbs and reduced corneal sensation: herpes; forehead rash with Hutchinson sign: zoster. Never a steroid without an antiviral.",
  definition: "HSV lies dormant in the trigeminal ganglion and reactivates in the cornea. Zoster is VZV reactivating in V1.",
  anatomy: { text: "The cornea is innervated by the ophthalmic nerve (V1, nasociliary branch): the virus travels down these nerves from the ganglion. These nerves also provide sensation and support healing; once destroyed, they leave an anesthetic cornea that heals poorly. The nasociliary nerve also supplies the tip of the nose. Zoster: forehead rash, with possible involvement of any part of the eye." },
  causal: {
    title: "From the ganglion to the cornea",
    steps: [
      { label: "Virus latent in the ganglion", detail: "After an often unnoticed primary infection, HSV-1 hides in the trigeminal ganglion; VZV does the same after chickenpox.", kind: "cause" },
      { label: "Viral reactivation", detail: "Immunosuppression, eye surgery or simply age (zoster) reactivate the virus, which travels down the nerves to the eye.", kind: "mecanisme" },
      { label: "Destruction of the epithelium", detail: "The virus kills epithelial cells: dendrite, or geographic ulcer (enlarged dendrite, often after a steroid).", kind: "lesion" },
      { label: "Deep immune reaction", detail: "The immune system attacks viral antigens left in the stroma (opacity, vessels), the endothelium (disciform edema) or the trabecular meshwork (raised pressure).", kind: "mecanisme" },
      { label: "Nerves destroyed, scarring", detail: "Each flare kills nerves and leaves scars: an anesthetic cornea that heals poorly (neurotrophic keratitis), decreased vision.", kind: "complication" }
    ],
    levers: [
      { at: 1, label: "Prophylaxis, vaccine", detail: "Long-term oral antiviral (HEDS, Herpetic Eye Disease Study: about 45% fewer recurrences); against zoster, Shingrix vaccine from age 50." },
      { at: 2, label: "Antiviral, debridement", detail: "Oral or topical antiviral and debridement (gentle scraping of the dendrite) stop viral replication." },
      { at: 3, label: "Steroid under antiviral cover", detail: "Calms the immune reaction; never alone, never on an active dendrite." },
      { at: 4, label: "Protect the surface", detail: "Lubricants, bandage contact lens, amniotic membrane (placental tissue that helps the epithelium), cenegermin (nerve growth factor)." }
    ]
  },
  risk: [
    "History of ocular herpes: recurrences are the rule",
    "Immunosuppression, atopy, eye surgery (laser, graft)",
    "Zoster: age ≥ 50, immunosuppression, unvaccinated"
  ],
  presentation: [
    "Red, watery, photophobic eye, unilateral, often recurrent",
    "Epithelial: dendrite that stains with fluorescein; stromal: opacity, edema, vessels, intact epithelium",
    "Endotheliitis: disciform edema with keratic precipitates (inflammatory deposits on the endothelium)",
    "Zoster: pain, then vesicles on the forehead and eyelid, on one side only; variable ocular involvement"
  ],
  exam: {
    signs: [
      { sign: "Dendrite with terminal bulbs", why: "Each branch of the ulcer ends in a swelling: the signature of HSV (the pseudodendrite of zoster or Acanthamoeba has none)." },
      { sign: "Reduced corneal sensation (twisted cotton wisp, before any anesthetic drop)", why: "Points to HSV or VZV and signals neurotrophic risk." },
      { sign: "Hutchinson sign (vesicles on the tip or side of the nose)", why: "Involvement of the nasociliary nerve, which also supplies the eye: high risk of ocular involvement." },
      { sign: "Uveitis with raised IOP, sectoral iris atrophy", why: "Uveitis usually lowers the pressure; if it rises, think herpetic trabeculitis (HSV, VZV or CMV: cytomegalovirus)." }
    ],
    tests: [
      { test: "PCR (viral DNA) on a scraping or aqueous humor", when: "Atypical picture, doubt with Acanthamoeba, hypertensive uveitis", read: "Confirms HSV, VZV or CMV; often negative in the immune stromal form." },
      { test: "Creatinine", when: "Before prolonged oral antiviral therapy or in the elderly", read: "Adjust the antiviral dose to renal function." }
    ]
  },
  ddx: [
    { dx: "Zoster pseudodendrite", clue: "Raised, no bulbs, stains poorly; rash in the V1 distribution." },
    { dx: "Acanthamoeba keratitis (freshwater ameba)", clue: "Lenses + water, severe pain, failure of antiviral therapy." },
    { dx: "Healing abrasion", clue: "Recent trauma; healing ridge without bulbs." }
  ],
  redFlags: [
    "Steroid prescribed without an antiviral or on a dendrite: geographic ulcer",
    "Melting stromal ulcer: superinfection, perforation",
    "Zoster with Hutchinson sign, decreased vision, raised IOP or ocular motor palsy: urgent exam"
  ],
  cat: {
    algo: [
      { q: "One-sided vesicular V1 rash?", yes: "Zoster: valacyclovir 1 g TID × 7 days, as soon as possible (< 72 h).", no: "", yesGo: 1, noGo: 1 },
      { q: "Dendrite with terminal bulbs or geographic ulcer?", yes: "Epithelial HSV: antiviral ± debridement; stop any steroid.", no: "", yesGo: 3, noGo: 2 },
      { q: "Stromal haze, disciform edema or precipitates?", yes: "Immune form: slow steroid under oral antiviral.", no: "Watch; review if redness or vision loss.", yesGo: 3 },
      { q: "Recurrences, stromal disease or graft?", yes: "Long-term oral prophylaxis (HEDS); zoster: discuss valacyclovir 1 year.", no: "Treat each episode." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Epithelial: acyclovir 400 mg PO 5×/day or valacyclovir 500 mg PO TID × 7–10 days, or trifluridine 1% 9×/day, for 14–21 days at most; cotton-tip debridement",
          "Immune stromal or endotheliitis: prednisolone acetate 1% tapered very slowly, always with an oral antiviral",
          "Zoster: valacyclovir 1 g TID × 7 days (or famciclovir 500 mg TID, or acyclovir 800 mg 5×/day), adjusted to renal function"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "Persistent defect: bandage contact lens, amniotic membrane, tarsorrhaphy (eyelids partially sutured closed)",
          "Central scar: graft once the eye has been quiet for months, under prophylaxis"
        ]
      },
      {
        phase: "suivi",
        items: [
          "Recheck in 1 week; on steroids, IOP at every visit",
          "Prophylaxis: acyclovir 400 mg BID or valacyclovir 500 mg once daily for recurrences, stromal form or graft"
        ]
      },
      {
        phase: "escalade",
        items: ["Anesthetic cornea with a persistent defect: cenegermin (Oxervate)", "Refractory hypertensive uveitis: aqueous humor PCR (look for CMV)"]
      }
    ],
    local: "Shingrix is recommended from age 50 by NACI (National Advisory Committee on Immunization); check whether it is publicly funded. Oxervate is approved by Health Canada for moderate or severe neurotrophic keratitis in adults: 1 drop 6×/day every 2 h for 8 weeks."
  },
  treatments: [
    { name: "Oral antivirals (acyclovir, valacyclovir)", dose: "Acyclovir 400 mg 5×/day or valacyclovir 500 mg TID; prevention: acyclovir 400 mg BID.", pitfall: "Adjust the dose to kidney function.", how: "Tablets activated by a viral enzyme (thymidine kinase), which then block viral DNA replication, only in infected cells.", why: "Epithelial keratitis, cover for steroids, prevention of recurrences, zoster.", pros: "No surface toxicity; effective prophylaxis (HEDS).", cons: "Dose must be adjusted to renal function; no effect on the immune reaction.", cx: "Nausea; confusion or renal injury with overdosing in the elderly." },
    { name: "Trifluridine 1% and debridement", dose: "Trifluridine 1%, 9 times a day ± debridement.", pitfall: "Toxic to the epithelium: 14–21 days at most.", how: "Antiviral drop 9 times a day, with gentle cotton-tip scraping of the dendrite to remove infected cells.", why: "Epithelial keratitis, alternative to tablets.", pros: "Acts directly on the cornea; debridement quickly lowers the viral load.", cons: "Toxic to the epithelium: 14–21 days at most.", cx: "Toxic punctate keratitis, punctal stenosis." },
    { name: "Topical steroid under antiviral cover", dose: "Prednisolone 1% under oral antiviral, tapered over weeks to months.", pitfall: "Never on an active dendrite; rebound if stopped fast.", how: "Prednisolone 1% drops tapered over weeks to months, always with an oral antiviral: calm the immune attack on viral antigens.", why: "Immune stromal keratitis, endotheliitis, uveitis; never on an active dendrite.", pros: "HEDS: faster resolution of stromal keratitis.", cons: "Does not kill the virus; rebound if stopped quickly.", cx: "Geographic ulcer without an antiviral, IOP rise, cataract." }
  ],
  treatment: {
    first: [
      "**You (first line)**: dendrite: acyclovir 400 mg 5×/day or valacyclovir 500 mg TID; zoster: valacyclovir 1 g TID × 7 days, ideally within 72 h of rash onset.",
      "**Ophthalmologist**: steroid under antiviral for stromal disease; prophylaxis (acyclovir 400 mg BID)."
    ],
    refer: ["Within 24 h for any herpetic keratitis — confirm the form and check IOP.", "Same day for zoster with a red eye, vision loss or Hutchinson sign."],
    pitfall: ["Prednisolone on a dendrite: geographic ulcer.", "Zoster seen after 72 h: still treat if vesicles are recent or the eye is involved.", "Trifluridine beyond 14–21 days: toxic to the epithelium."],
    qc: ["Shingrix recommended from age 50 (NACI); coverage depends on the provincial program."]
  },
  pearls: [
    { q: "Why test corneal sensation before the anesthetic?", a: "Reduced sensation points to HSV or VZV and signals neurotrophic keratitis; after the anesthetic, the test is worthless." },
    { q: "A steroid in herpes: yes or no?", a: "**No** on an active dendrite: the virus proliferates. **Yes** for the immune stromal form or endotheliitis, always under oral antiviral cover, with a slow taper (HEDS)." },
    { q: "What is the take-home from ZEDS?", a: "Valacyclovir 1 g once daily for 1 year after herpes zoster ophthalmicus: primary endpoint at 12 months not significant, but at 18 months **27% fewer** new or worsening eye disease events. The authors recommend adding it; individualize." }
  ],
  mnemonic: { title: "HSV: from the surface to the depths", text: "Epithelial = virus (antiviral alone); stromal or endotheliitis = inflammation (steroid under antiviral)." },
  compare: {
    title: "Normal vs herpetic dendrite (fluorescein)",
    normal: { caption: "Intact epithelium, no fluorescein uptake." },
    patho: {
      caption: "HSV dendrite: branching ulcer with terminal bulbs.",
      reveal: [
        "Branching linear ulcer",
        "Terminal bulbs at the ends of the branches",
        "Green base (absent cells), edges swollen with infected cells",
        "Zoster or Acanthamoeba pseudodendrite: no bulbs"
      ]
    }
  }
} });

// c-secheresse
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-secheresse": {
  title: "Dry eye disease and meibomian gland dysfunction",
  oneLiner: "Burning, gritty feeling, vision that fluctuates with blinking: look for an unstable tear film, plugged meibomian glands or a toxic drop.",
  definition: "An unstable tear film that irritates the surface. Most often, meibomian gland oil is the culprit.",
  anatomy: { text: "The tear film consists of an oil layer from the meibomian glands, which slows evaporation, resting on a muco-aqueous phase: water from the lacrimal gland mixed with mucus from the goblet cells, which makes the epithelium wettable. Blinking spreads the film and expresses oil from the glands." },
  causal: {
    title: "The vicious circle of dry eye",
    steps: [
      { label: "Disease drivers", detail: "Plugged meibomian glands (meibomian gland dysfunction, MGD), fewer tears (age, Sjögren syndrome: autoimmune disease of the glands), infrequent blinking at screens, toxic drops.", kind: "cause" },
      { label: "Evaporation, tears too salty", detail: "Without a good oil layer, water evaporates: the film breaks up between blinks and salts become concentrated.", kind: "mecanisme" },
      { label: "Surface inflammation", detail: "These salty tears injure the epithelium, which becomes inflamed; goblet cells die and the surface wets less well: vicious circle.", kind: "lesion" },
      { label: "Punctate keratitis, symptoms", detail: "Damaged cells take up fluorescein as small green dots (superficial punctate keratitis): burning, grittiness, fluctuating vision.", kind: "signe" },
      { label: "Dysregulated corneal nerves", detail: "Over time, pain can become out of proportion to the exam (neuropathic component).", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Treat the cause", detail: "Lid hygiene, stop preserved drops, screen breaks, treat Demodex (eyelash mite)." },
      { at: 1, label: "Artificial tears, plugs", detail: "Add water and dilute the salts; punctal plugs (small plugs in the tear drainage opening) keep tears on the eye." },
      { at: 2, label: "Anti-inflammatories", detail: "Cyclosporine or lifitegrast (drops that inhibit lymphocytes) or a soft steroid as a short course: break the inflammation that sustains the circle." }
    ]
  },
  risk: [
    "Age, female sex, menopause",
    "Screens (we blink less), dry air, contact lenses",
    "Drops containing benzalkonium chloride (BAK, a detergent preservative), especially for glaucoma",
    "Antihistamines, antidepressants, isotretinoin (for acne)",
    "Sjögren, rosacea, laser refractive surgery (LASIK)"
  ],
  presentation: [
    "Burning, grittiness, worse in the evening and at screens",
    "Vision that fluctuates and clears with blinking",
    "Paradoxical tearing: irritation triggers reflex tears"
  ],
  exam: {
    signs: [
      { sign: "Tear break-up time (TBUT) < 10 s", why: "Time between a blink and the first dry spot; measured without fluorescein (NIBUT), it is a TFOS DEWS III criterion (2025 international consensus)." },
      { sign: "Thick or absent oil on gland expression", why: "Confirms MGD, the most common cause." },
      { sign: "Location of the punctate keratitis", why: "Inferior: MGD, exposure, toxic drops; interpalpebral: aqueous deficiency." },
      { sign: "Cylindrical dandruff at the base of the lashes", why: "Indicates Demodex blepharitis, which has its own treatment." }
    ],
    tests: [
      { test: "OSDI-6 questionnaire (6 symptom questions)", when: "Any patient with complaints", read: "Score ≥ 4 = symptomatic; required before looking for a sign." },
      { test: "Fluorescein (cornea) and lissamine green (conjunctiva), stains for damaged cells", when: "Any symptomatic patient", read: "> 5 corneal spots or > 9 conjunctival spots = DEWS III sign; the location of the spots points to the cause." },
      { test: "Tear osmolarity (device that measures their salt concentration)", when: "If the device is available", read: "≥ 308 mOsm/L in one eye or inter-eye difference > 8 mOsm/L = DEWS III sign." },
      { test: "Schirmer without anesthesia (filter paper at the lid margin, 5 min)", when: "Suspected aqueous deficiency", read: "< 5 mm = severe deficiency: work up for Sjögren (anti-SSA/SSB antibodies) with the family physician." }
    ]
  },
  ddx: [
    { dx: "Allergic conjunctivitis", clue: "Itching predominates, atopic background." },
    { dx: "Neurotrophic keratitis (anesthetic cornea that heals poorly)", clue: "Little pain for a lot of staining." },
    { dx: "Ocular neuropathic pain", clue: "Severe pain, nearly normal surface; persists after an anesthetic drop." }
  ],
  redFlags: [
    "Dry mouth, joint pain: Sjögren (risk of lymphoma)",
    "Ulcer, thinning or white infiltrate: this is no longer simple dry eye",
    "Refractory unilateral blepharitis: rule out sebaceous carcinoma (eyelid cancer)"
  ],
  cat: {
    algo: [
      { q: "Symptoms (OSDI-6 ≥ 4) and one objective sign?", yes: "", no: "Think allergy, neuropathic pain or another cause.", yesGo: 1 },
      { q: "Blocked meibomian glands or Demodex?", yes: "Lid care; IPL if this fails.", no: "Aqueous deficiency: tears, plugs, Sjögren workup.", yesGo: 2, noGo: 2 },
      { q: "Still symptomatic after 1–2 months?", yes: "Add cyclosporine or lifitegrast; refer if severe.", no: "Continue and space out follow-up." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Preservative-free tears 4–6 times a day, gel at bedtime; screen breaks",
          "Plugged glands: warm compresses 5–10 min then lid massage, 1–2 times a day",
          "Inflammation: cyclosporine or lifitegrast; soft steroid for a few weeks; low-dose oral doxycycline (anti-inflammatory) if rosacea",
          "Demodex: tea tree oil cleanser; lotilaner (antiparasitic drops) approved in the US"
        ]
      },
      {
        phase: "laser",
        items: ["IPL (intense pulsed light: light flashes on the eyelid skin) for refractory glands"]
      },
      {
        phase: "chirurgie",
        items: ["Punctal plugs placed in the office for aqueous deficiency, once inflammation has settled"]
      },
      {
        phase: "suivi",
        items: ["Recheck at 1–3 months; step up if needed"]
      },
      {
        phase: "escalade",
        items: ["Severe: autologous serum (drops made from the patient’s blood), scleral lens (large rigid lens with a fluid reservoir)"]
      }
    ],
    local: "In Quebec, optometrists manage most dry eye and refer to ophthalmology for severe disease, Sjögren or treatment failure; IPL is mostly in private clinics; coverage of cyclosporine and lifitegrast varies by plan."
  },
  treatments: [
    { name: "Preservative-free artificial tears", dose: "1 drop 4–6 times a day, more as needed.", pitfall: "BAK-preserved bottle + frequent use = toxicity.", how: "Lubricating drops in single-dose vials or special bottles: add fluid and dilute salts; emulsions reinforce the oil layer.", why: "Any dry eye; first step.", pros: "Safe, over the counter, immediate relief.", cons: "Short-lived effect; BAK becomes toxic with frequent use.", cx: "Blurred vision with gels and ointments." },
    { name: "Lid hygiene, IPL", dose: "Warm compresses 5–10 min + massage, once or twice a day.", pitfall: "Stopping lid care = relapse.", qc: "IPL is mostly offered privately.", how: "Warm compresses and massage at home; in clinic, IPL or thermal pulsation (device that heats and compresses the lids): heat melts the solidified oil, pressure empties the glands.", why: "Meibomian gland dysfunction, the most common cause.", pros: "Treats the cause; IPL effect lasts months.", cons: "Requires consistency; IPL is costly.", cx: "Skin burn; eyes shielded during IPL." },
    { name: "Cyclosporine or lifitegrast", dose: "Cyclosporine 0.05–0.09% or lifitegrast 5%, 1 drop twice a day.", pitfall: "Works after several weeks: don’t stop too early.", qc: "Coverage varies by insurance plan.", how: "Prescription anti-inflammatory drops, twice a day: cyclosporine blocks T-cell activation, lifitegrast blocks their binding (LFA-1/ICAM-1).", why: "Inflammation persisting despite tears.", pros: "No IOP rise or cataract with long-term use, unlike steroids.", cons: "Effect only after several weeks; cost.", cx: "Burning on instillation; metallic taste (lifitegrast)." }
  ],
  treatment: {
    first: [
      "**You (first line)**: preservative-free tears 4–6×/day, warm compresses once or twice a day.",
      "**Ophthalmologist**: cyclosporine or lifitegrast, punctal plugs, IPL."
    ],
    refer: ["This week if ulcer, thinning or dry mouth (Sjögren) — the cornea is at risk.", "Otherwise routine follow-up — a chronic disease treated step by step."],
    pitfall: ["BAK-preserved tears more than 4×/day: toxic to the surface."],
    qc: ["Optometrists manage most cases; IPL is mostly private."]
  },
  pearls: [
    { q: "What are the TFOS DEWS III diagnostic criteria?", a: "OSDI-6 ≥ 4 plus one sign: NIBUT < 10 s, osmolarity ≥ 308 mOsm/L (or inter-eye difference > 8), > 5 corneal spots with fluorescein or > 9 conjunctival spots with lissamine green (stain for damaged cells). **No symptoms, no dry eye.**" },
    { q: "Why does the glaucoma patient on three drops have dry eyes?", a: "BAK, a detergent, kills goblet cells and sustains inflammation. Switch to preservative-free drops, fixed combinations or SLT (laser that lowers the pressure)." },
    { q: "Do you recommend omega-3s?", a: "Not routinely: the DREAM trial (NEJM 2018) showed **no difference** from placebo (olive oil)." }
  ],
  mnemonic: { title: "Vicious circle", text: "Instability → hyperosmolarity → inflammation → instability: break the circle at several points." },
  compare: {
    title: "Normal vs dry eye (fluorescein)",
    normal: { caption: "Continuous film, no fluorescein uptake." },
    patho: {
      caption: "Inferior punctate keratitis (MGD, exposure, toxic drops).",
      reveal: [
        "Fine green dots in the inferior third",
        "No ulcer or infiltrate",
        "More than 5 corneal spots = DEWS III sign",
        "Interpalpebral dots = aqueous deficiency; superior = contact lenses"
      ]
    }
  }
} });

// c-surface
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-surface": {
  title: "Conjunctivitis and ocular surface inflammation",
  oneLiner: "Red eye: read the conjunctiva first (texture, discharge, node, limbus), then always check the cornea with fluorescein.",
  definition: "Viral, bacterial, allergic or mechanical conjunctivitis. Usually benign, unless the cornea is involved.",
  anatomy: { text: "The palpebral (over the tarsus) and bulbar (over the sclera) conjunctiva contain lymphoid tissue, mast cells (allergy cells) and goblet cells (mucus). The limbus houses the stem cells of the corneal epithelium: limbal inflammation can therefore damage the cornea, as in vernal keratoconjunctivitis, superior limbic keratoconjunctivitis (SLK) and rosacea. Forms that involve the cornea: vernal, atopic, rosacea, gonococcal." },
  causal: {
    title: "From conjunctival insult to the cornea",
    steps: [
      { label: "Conjunctival insult", detail: "Virus (adenovirus), Chlamydia, allergen, rubbing lens or suture, diseased lid margin (rosacea, blepharitis).", kind: "cause" },
      { label: "Local immune response", detail: "Lymphocytes clustered into follicles (virus, Chlamydia, toxic drops); mast cells releasing histamine, eosinophils and papillae (allergy, friction).", kind: "mecanisme" },
      { label: "Conjunctival signs", detail: "Redness, tearing or mucus, itching (allergy) or grittiness (virus), preauricular node (virus, Chlamydia).", kind: "signe" },
      { label: "Limbal and corneal involvement", detail: "Subepithelial infiltrates (adenovirus), shield ulcer (toxic eosinophil proteins), marginal infiltrates and vessels (rosacea).", kind: "lesion" },
      { label: "Scarring and vision loss", detail: "Opacities, pannus, symblepharon (lid-to-globe adhesion), limbal stem cell deficiency; or steroid complications (glaucoma, cataract).", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Hygiene and removing the cause", detail: "Disinfected hands and equipment (adenovirus), lens holiday, suture removal, lid hygiene." },
      { at: 1, label: "Antihistamine, mast cell stabilizer, cyclosporine", detail: "Block histamine, keep mast cells from degranulating, inhibit T cells." },
      { at: 3, label: "Short monitored steroid", detail: "Puts out corneal inflammation (shield ulcer, bothersome infiltrates, membranes); check IOP at every visit." }
    ]
  },
  risk: [
    "Contact with a red eye (daycare, school, health care setting): adenovirus",
    "Atopy: vernal (young boy), atopic (adult)",
    "Contact lenses, prosthesis, exposed suture: giant papillary",
    "New sexual partner: Chlamydia, gonococcus",
    "Rosacea, meibomian gland dysfunction; thyroid disease (SLK)"
  ],
  presentation: [
    "Adenovirus: red watery eye, grittiness, second eye within a few days, follicles, node; pseudomembranes, then subepithelial infiltrates 1–2 weeks later",
    "Chlamydia (adult inclusion conjunctivitis): follicular, more than 3–4 weeks despite drops, superior pannus",
    "Vernal: atopic boy, itching in spring, ropy mucus, cobblestones on the upper tarsus, Horner-Trantas dots",
    "Atopic: adult with eyelid eczema, year-round, symblepharon; giant papillary: contact lenses, prosthesis, suture",
    "SLK: redness and staining of the superior conjunctiva, filaments; pingueculitis: inflamed yellowish nodule at the limbus",
    "Rosacea: telangiectatic lid margin, chalazia, marginal infiltrates, vessels and phlyctenules on the inferior cornea"
  ],
  exam: {
    signs: [
      { sign: "Follicles: pale domes, vessels around the base", why: "Lymphocyte aggregates: virus, Chlamydia, drop toxicity." },
      { sign: "Papillae: central vessel; giant papillae if larger than 1 mm (cobblestones)", why: "Nonspecific; giant: vernal, atopic or giant papillary." },
      { sign: "Type of discharge", why: "Watery: virus; ropy: allergy; mucopurulent: bacteria, Chlamydia; copious purulent within hours: gonococcus." },
      { sign: "Preauricular node (in front of the ear)", why: "Adenovirus, herpes, Chlamydia, gonococcus; absent in allergy." },
      { sign: "Limbus: Horner-Trantas dots, superior redness, pannus", why: "Horner-Trantas: vernal; superior redness: SLK; superior pannus: Chlamydia, inferior: rosacea." },
      { sign: "Cornea with fluorescein", why: "Infiltrate, shield ulcer or epithelial defect: this is no longer simple conjunctivitis." }
    ],
    tests: [
      { test: "Eversion of the upper lid", when: "Allergy, contact lenses, foreign body, superior staining", read: "Cobblestones, papillae, hidden foreign body." },
      { test: "NAAT (nucleic acid amplification test) on a conjunctival swab: Chlamydia, gonococcus", when: "Follicular for more than 3–4 weeks, newborn, copious purulence", read: "Positive: oral treatment, partners, screening for other STBBIs (sexually transmitted and blood-borne infections), public health reporting." },
      { test: "Gram stain and culture; TSH (thyroid workup) if SLK", when: "Hyperacute purulence; SLK", read: "Gram-negative diplococci: gonococcus; thyroid dysfunction is common in SLK." }
    ]
  },
  ddx: [
    { dx: "Keratitis (bacterial, herpetic, amebic)", clue: "Pain, photophobia, infiltrate with epithelial defect; contact lenses = keratitis until proven otherwise." },
    { dx: "Herpetic conjunctivitis (HSV)", clue: "Often unilateral, eyelid vesicles; look for a dendrite before any steroid." },
    { dx: "Anterior uveitis or scleritis", clue: "Perilimbal or deep redness, pain, no discharge." },
    { dx: "Ocular surface neoplasia or sebaceous carcinoma", clue: "Chronic refractory unilateral conjunctivitis in an older adult: biopsy." }
  ],
  redFlags: [
    "Pain, photophobia, reduced vision or infiltrate: keratitis, uveitis, scleritis",
    "Copious pus within hours: gonococcus, systemic ceftriaxone the same day",
    "Newborn, or shield ulcer: same-day treatment"
  ],
  cat: {
    algo: [
      { q: "Pain, photophobia, reduced vision or cornea involved?", yes: "Fluorescein; ophthalmology the same day.", no: "", noGo: 1 },
      { q: "Newborn, or copious pus within hours?", yes: "Gram, culture, NAAT; ceftriaxone if gonococcus; ophthalmology same day.", no: "", noGo: 2 },
      { q: "Follicles, preauricular node, contagious contacts?", yes: "Adenovirus: support, hygiene, no antibiotic.", no: "", yesGo: 3, noGo: 4 },
      { q: "Lasting more than 3–4 weeks?", yes: "NAAT for Chlamydia; treat partners.", no: "Resolves on its own in 1–3 weeks." },
      { q: "Itching and papillae?", yes: "Antihistamine–stabilizer; giant papillae: vernal, atopic, lenses.", no: "Rosacea, SLK, bacterial conjunctivitis?" }
    ],
    phases: [
      {
        phase: "observation",
        items: ["Adenovirus: cold compresses, tears, hand washing; contagious about 2 weeks"]
      },
      {
        phase: "medical",
        items: [
          "Allergy: olopatadine or ketotifen",
          "Vernal or atopic: topical cyclosporine or tacrolimus; short steroid course for flares",
          "Rosacea: lid hygiene, low-dose oral doxycycline (anti-inflammatory effect); child under 8 or pregnancy: oral erythromycin or azithromycin",
          "Chlamydia: doxycycline 100 mg BID × 7 days or azithromycin 1 g single dose; treat partners",
          "SLK: lubrication, bandage contact lens, dilute silver nitrate solution (never the stick)"
        ]
      },
      {
        phase: "chirurgie",
        items: ["Refractory shield ulcer: plaque debridement ± amniotic membrane; refractory SLK: conjunctival resection"]
      },
      {
        phase: "suivi",
        items: ["Any steroid: IOP at every visit, slow taper"]
      }
    ],
    local: "Chlamydia and gonococcus are notifiable diseases (MADO) in Quebec; the Québec STBBI guides from INESSS (Institut national d’excellence en santé et en services sociaux) govern treatment and partner management."
  },
  treatments: [
    { name: "Cold compresses and artificial tears", dose: "Cold compresses, chilled tears 4–6×/day.", pitfall: "Doesn’t shorten the viral infection.", how: "Cold constricts vessels; refrigerated tears rinse away viruses and allergens.", why: "Adenovirus, mild allergy.", pros: "No risk.", cons: "Does not shorten the viral infection.", cx: "None." },
    { name: "Antihistamine-mast cell stabilizer (olopatadine, ketotifen)", dose: "Olopatadine 0.1% or ketotifen 0.025%, 1 drop BID.", pitfall: "Not enough alone in severe vernal disease.", how: "Blocks the H1 receptor (itching) and slows mediator release (prevention).", why: "Allergy, vernal, atopic, giant papillary.", pros: "Well tolerated long term.", cons: "Not enough alone for severe vernal disease.", cx: "Burning." },
    { name: "Topical cyclosporine or tacrolimus", dose: "Topical cyclosporine or tacrolimus, specialist-prescribed.", pitfall: "Works over weeks.", qc: "Often compounded or specialist-prescribed.", how: "Block calcineurin, and therefore T-cell activation.", why: "Vernal, atopic, rosacea, SLK.", pros: "Steroid-sparing.", cons: "Effect over weeks; formulations sometimes compounded.", cx: "Burning; caution with herpes." },
    { name: "Short topical steroid (fluorometholone, prednisolone)", dose: "Fluorometholone 0.1% QID, short course.", pitfall: "Rule out epithelial herpes first.", how: "Puts out lymphocytic and eosinophilic inflammation.", why: "Shield ulcer, pseudomembranes, bothersome infiltrates.", pros: "Rapid effect.", cons: "Rebound on stopping (adenovirus); contraindicated with epithelial herpes.", cx: "IOP rise, cataract, superinfection." },
    { name: "Lid hygiene, doxycycline or azithromycin", dose: "Lid hygiene once or twice a day; low-dose doxycycline.", pitfall: "Doxycycline: not under 8 or in pregnancy.", qc: "Chlamydia, gonorrhea: reportable in Quebec.", how: "Warm compresses and cleaning of the lid margin (bacteria, Demodex); low-dose doxycycline is anti-collagenase.", why: "Rosacea, blepharokeratoconjunctivitis.", pros: "Treats the cause.", cons: "Doxycycline: not before age 8 or during pregnancy.", cx: "Photosensitivity, esophagitis." }
  ],
  treatment: {
    first: [
      "**You (first line)**: viral: cold compresses, tears, hygiene; allergic: olopatadine 0.1% BID.",
      "**Ophthalmologist**: short steroid, cyclosporine or tacrolimus for vernal and atopic disease."
    ],
    refer: ["Same day for pain, photophobia, vision loss, newborn or copious pus — cornea at risk.", "This week for vernal, atopic or more than 3–4 weeks."],
    pitfall: ["Fluorometholone or prednisolone without follow-up: raised IOP, worse herpes.", "Antibiotic for viral conjunctivitis: useless."],
    qc: ["Chlamydia and gonorrhea: reportable in Quebec."]
  },
  pearls: [
    { q: "Antibiotic or steroid for adenoviral conjunctivitis?", a: "Antibiotic: no. Steroid: only for pseudomembranes or subepithelial infiltrates that reduce vision; it can prolong viral shedding and cause a **rebound on stopping**: slow taper, IOP." },
    { q: "Known vernal disease with new pain and photophobia: what are you looking for?", a: "A **shield ulcer**: oval defect of the superior cornea, sometimes covered by a plaque of mucus and fibrin. Same day: steroid, cyclosporine or tacrolimus, plaque debridement if needed." },
    { q: "How do you tell a follicle from a papilla at the slit lamp?", a: "A follicle is a pale dome whose vessels **surround the base**; a papilla carries a **central vessel**. Follicles: virus, Chlamydia, toxicity; papillae: allergy, contact lenses, blepharitis, bacteria." }
  ],
  mnemonic: { title: "Reading order for a red eye", text: "Lids, everted conjunctiva, discharge, node, limbus, then cornea with fluorescein." },
  compare: {
    title: "Normal vs superior staining (SLK, vernal)",
    normal: { caption: "Intact epithelium: no fluorescein uptake." },
    patho: {
      caption: "Punctate keratitis of the superior cornea, under the lid.",
      reveal: [
        "Clustered green dots in the superior third, the area covered by the lid",
        "Think SLK (check the thyroid), vernal (cobblestones, risk of shield ulcer) or a tight contact lens",
        "Evert the upper lid: giant papillae, foreign body"
      ]
    }
  }
} });

// c-erosion
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-erosion": {
  title: "Recurrent erosion, abrasion and epithelial basement membrane dystrophy",
  oneLiner: "Sharp pain on waking, on opening the eyes, weeks after a fingernail scratch: the poorly anchored epithelium tears off.",
  definition: "Abrasion: scratched epithelium. Recurrent erosion: poorly anchored epithelium that tears off on waking.",
  anatomy: { text: "The epithelium is riveted to its basement membrane by hemidesmosomes (molecular rivets), themselves anchored to the stroma through Bowman layer. After an abrasion, it covers the wound in 1 to 3 days, but these anchors take weeks to months to re-form. The cornea, the most densely innervated tissue in the body, is very painful when it loses its epithelium." },
  causal: {
    title: "From fragile anchoring to tearing on waking",
    steps: [
      { label: "Defective anchoring", detail: "Sharp abrasion (fingernail, paper, branch) that tears away the basement membrane, or EBMD that builds it poorly.", kind: "cause" },
      { label: "Immature anchors", detail: "Cells regrow resting on rather than attached to the surface; enzymes (matrix metalloproteinases, MMPs) dissolve the new anchors.", kind: "mecanisme" },
      { label: "Nighttime adhesion to the lid", detail: "At night the epithelium sticks to the eyelid; when the eyes open abruptly, it is torn off.", kind: "mecanisme" },
      { label: "Epithelial erosion", detail: "Lifted or detached flap, often in the inferior half: sharp pain, tearing, photophobia.", kind: "lesion" },
      { label: "Repeating cycle", detail: "The wound closes quickly, without solid anchoring: episodes recur, and each one opens the door to infection.", kind: "complication" }
    ],
    levers: [
      { at: 2, label: "Ointment at bedtime", detail: "An ointment (NaCl 5% or lubricant) prevents nighttime adhesion while the anchors re-form (3–6 months)." },
      { at: 1, label: "Doxycycline ± steroid", detail: "Oral doxycycline inhibits the MMPs that dissolve the anchors; a short topical steroid calms inflammation." },
      { at: 0, label: "Polishing, puncture, PTK", detail: "Remove the abnormal basement membrane (polishing; PTK: laser that ablates the surface) or create anchoring microscars (puncture)." },
      { at: 3, label: "Bandage contact lens", detail: "Soft lens worn continuously: a shield between the lid and the epithelium during healing." }
    ]
  },
  risk: [
    "Prior scratch by a fingernail (often a baby’s), paper, cardboard, branch",
    "EBMD: the most common corneal dystrophy, especially after age 40",
    "Diabetes, dry eye, meibomian gland dysfunction, prior corneal surgery"
  ],
  presentation: [
    "Sharp pain, tearing, photophobia on waking, when opening or rubbing the eyes",
    "Episode lasting a few minutes to a few days; eye nearly normal between episodes",
    "Abrasion: foreign body sensation, pain relieved in clinic by the anesthetic",
    "EBMD: often asymptomatic; otherwise fluctuating vision (irregular surface)"
  ],
  exam: {
    signs: [
      { sign: "Map lines, gray dots (Cogan microcysts), fingerprint lines", why: "Indicate EBMD; best seen on retroillumination (lighting by the fundus reflex)." },
      { sign: "Negative staining with fluorescein", why: "Dark spots where the surface is elevated: EBMD, even without an erosion." },
      { sign: "Vertical linear staining superiorly", why: "Foreign body under the upper lid: eversion (flipping the lid) is mandatory." },
      { sign: "No infiltrate and no anterior chamber reaction", why: "An infiltrate (white cluster of cells in the stroma) or a hypopyon (pus in the anterior chamber) indicates infection." }
    ],
    tests: [
      { test: "Fluorescein under cobalt blue + eversion of the upper lid", when: "Any acute or recurrent pain", read: "Sharp-edged defect = abrasion; negative staining = EBMD; vertical lines = foreign body under the lid." },
      { test: "Repeat topography (curvature map)", when: "EBMD before cataract or refractive surgery", read: "Irregular astigmatism, unstable keratometry (K): treat the surface, then remeasure." }
    ]
  },
  ddx: [
    { dx: "Herpetic keratitis (HSV)", clue: "Branching ulcer (dendrite) with terminal bulbs, ↓ corneal sensation." },
    { dx: "Contact lens-related infectious keratitis", clue: "Infiltrate, anterior chamber reaction; pain out of proportion: think Acanthamoeba (ameba)." },
    { dx: "Corneal foreign body", clue: "Visible particle, rust ring; grinding." },
    { dx: "Exposure keratopathy", clue: "Lids that do not close fully at night (lagophthalmos), inferior punctate staining, no abrupt tearing." }
  ],
  redFlags: [
    "Infiltrate, hypopyon or worsening pain after 24–48 h: infectious keratitis",
    "Grinding or high-velocity projectile: rule out perforation (CT, no MRI)",
    "Contact lenses or plant matter: risk of Pseudomonas or fungus"
  ],
  cat: {
    algo: [
      { q: "Infiltrate, hypopyon or chamber reaction?", yes: "Infectious keratitis: ophthalmology the same day.", no: "Abrasion: evert, remove any foreign body.", noGo: 1 },
      { q: "High-velocity projectile (grinding, hammer)?", yes: "CT to exclude an intraocular foreign body; no MRI.", no: "", yesGo: 2, noGo: 2 },
      { q: "Contact lens wearer?", yes: "Fluoroquinolone, no patch, recheck at 24 h.", no: "Erythromycin ointment until healed.", yesGo: 3, noGo: 3 },
      { q: "Repeated attacks on waking, weeks later?", yes: "Recurrent erosion: 5% NaCl at bedtime for 3–6 months.", no: "Simple abrasion: heals in 1–3 days.", yesGo: 4 },
      { q: "Recurrences despite 2–3 months of prevention?", yes: "Refer: doxycycline, polishing, puncture or PTK.", no: "Continue, then taper slowly." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Topical antibiotic; cycloplegic (cyclopentolate, which relaxes the ciliary muscle) for painful spasm",
          "Oral analgesia; **never a topical anesthetic for home use**",
          "Bandage contact lens for severe pain (not if infected)",
          "Refractory: oral doxycycline ± soft steroid"
        ]
      },
      {
        phase: "chirurgie",
        items: ["Debridement ± diamond burr polishing of Bowman layer", "Anterior stromal puncture, outside the visual axis"]
      },
      {
        phase: "suivi",
        items: ["Recheck at 24–48 h if the abrasion is large, central or in a contact lens wearer"]
      },
      {
        phase: "escalade",
        items: ["PTK (excimer laser phototherapeutic keratectomy) for central involvement or failure"]
      }
    ],
    local: "In Quebec, many abrasions are seen in the ED, in primary care or by the optometrist; refer for an infiltrate, non-healing or repeated episodes. Work injury: CNESST forms."
  },
  treatments: [
    { name: "Abrasion: antibiotic, no patch", dose: "Erythromycin ointment QID until healed.", pitfall: "Lenses: fluoroquinolone, never a patch.", how: "Erythromycin ointment or antibiotic drop 4 times a day until healed; no pressure patch, which does not help healing.", why: "Prevent infection while the epithelium regrows.", pros: "Heals in 1–3 days if small.", cons: "Contact lenses: fluoroquinolone, never a patch.", cx: "Infection; recurrent erosion later." },
    { name: "NaCl 5% ointment at bedtime", dose: "5% NaCl ointment at bedtime, 3–6 months.", pitfall: "Recurs if stopped too soon.", how: "Hypertonic ointment at night for 3–6 months: it lubricates so the epithelium does not stick to the lid and draws water out of it so it adheres better.", why: "Recurrent erosion; high-risk abrasion (fingernail).", pros: "Inexpensive, often sufficient.", cons: "Recurrence if stopped too early.", cx: "Burning, blurred vision on waking." },
    { name: "Oral doxycycline ± steroid", dose: "Doxycycline 50 mg BID × 2 months ± mild steroid.", pitfall: "Not under age 8 or in pregnancy.", how: "Doxycycline 50 mg BID for 2 months, used here to block the MMP-9 that dissolves the anchors, ± soft steroid for 2–3 weeks.", why: "Refractory erosions.", pros: "Oral, inexpensive.", cons: "Takes a few weeks to work.", cx: "Photosensitivity, esophagitis; not in pregnancy or before age 8." },
    { name: "Diamond burr polishing", dose: "Diamond burr in clinic, under topical anesthesia.", pitfall: "EBMD before cataract: polish, then repeat biometry.", how: "In clinic, under topical anesthesia: the loose epithelium is removed and Bowman layer is polished; the new epithelium anchors onto a clean surface.", why: "Refractory erosions; EBMD that blurs vision or skews biometry (measurements used to choose the cataract lens).", pros: "Simple, can be done in the visual axis.", cons: "Pain for 2–3 days.", cx: "Infection, mild scarring haze." },
    { name: "Stromal puncture or PTK", dose: "Stromal puncture off-axis; PTK if central.", pitfall: "Leaves opacities; PTK is costly.", how: "Puncture: superficial needle pricks whose microscars anchor the epithelium. PTK: excimer laser that ablates a few microns of surface.", why: "Puncture: outside the visual axis; PTK: central involvement.", pros: "Puncture is quick; PTK gives a smooth surface.", cons: "Opacities; PTK is costly.", cx: "Haze, infection." }
  ],
  treatment: {
    first: [
      "**You (first line)**: erythromycin ointment QID; lens wearer: fluoroquinolone. Erosions: 5% NaCl at bedtime.",
      "**Ophthalmologist**: polishing, stromal puncture or PTK for recurrences."
    ],
    refer: [
      "Same day for infiltrate, hypopyon or high-velocity injury — infection or intraocular foreign body.",
      "Within 48 h if not healed — look for another cause."
    ],
    pitfall: ["Topical anesthetic sent home: ulcer, perforation.", "Pressure patch in a lens wearer: Pseudomonas."],
    qc: ["Work injury: CNESST forms."]
  },
  pearls: [
    { q: "Why does the erosion happen on waking?", a: "At night, the poorly anchored epithelium sticks to the lid and tears off when the eyes open abruptly. Hence ointment at bedtime and opening the eyes gently, after a lubricating drop." },
    { q: "Do you prescribe an anesthetic drop?", a: "**Never for home use**: abuse blocks healing and can cause ulceration and perforation. An oral analgesic, a cycloplegic and a bandage contact lens are enough." },
    { q: "EBMD and cataract: what is the trap?", a: "The irregular surface skews keratometry: wrong lens power or wrong toric (astigmatism) correction. Polish first, then redo biometry once the cornea is stable." }
  ],
  mnemonic: { title: "Abrasion: EVERSE", text: "Evert, record vision, exclude infiltrate and Seidel, no home anesthetic, no patch with lenses." },
  compare: {
    title: "Fluorescein: normal vs EBMD",
    normal: { caption: "Uniform film, no dark area and no dye uptake." },
    patho: {
      caption: "EBMD: negative staining, dark lines and dots where the surface is elevated.",
      reveal: [
        "Dark wavy lines: basement membrane folds (map, fingerprint)",
        "Dark dots: Cogan microcysts",
        "No staining defect between episodes",
        "An abrasion would instead show a green area with sharp edges"
      ]
    }
  }
} });

// c-keratocone
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-keratocone": {
  title: "Keratoconus",
  oneLiner: "Young eye rubber with increasing irregular astigmatism: tomography, then cross-linking if it progresses, and right at diagnosis in children.",
  definition: "The cornea thins and bulges into a cone. It starts in adolescence and progresses mainly until 30.",
  anatomy: { text: "The strength of the cornea comes from the collagen lamellae of the stroma, linked by chemical bridges (cross-links). Its anterior surface provides about two thirds of the eye’s power (≈ 43 D): a small distortion blurs vision a lot. Normal central thickness ≈ 540–550 µm. Keratoconus signs: Munson (V-shaped lower lid on downgaze), Rizzuti (conical nasal light reflex), Fleischer (iron ring), Vogt (striae that vanish with pressure), scissor reflex and oil-droplet reflex." },
  causal: {
    title: "From soft stroma to cone",
    steps: [
      { label: "Predisposition and rubbing", detail: "Genetic predisposition, atopy (allergies that make patients rub); repeated eye rubbing is the modifiable factor.", kind: "cause" },
      { label: "Weakened stroma", detail: "Fewer links between collagen lamellae and more enzymes that degrade them: the stroma becomes soft.", kind: "mecanisme" },
      { label: "Thinning and bulging", detail: "Intraocular pressure pushes the weak zone forward: it thins and bulges into a cone, often inferior to the center.", kind: "lesion" },
      { label: "Irregular astigmatism", detail: "The optical surface becomes irregular: blurred, distorted vision, poorly corrected with glasses.", kind: "signe" },
      { label: "Scarring and hydrops", detail: "Bowman layer cracks (scars at the apex); if Descemet tears, aqueous floods the stroma: acute hydrops, white cornea.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Stop the rubbing", detail: "Treat the allergy, without ever delaying cross-linking." },
      { at: 1, label: "Cross-linking (CXL)", detail: "Corneal collagen cross-linking: riboflavin + UVA weld the fibers together; the stroma stiffens and progression stops." },
      { at: 3, label: "Visual rehabilitation", detail: "Glasses, rigid or scleral lenses, intracorneal ring segments (plastic arcs in the stroma): a regular optical surface." },
      { at: 4, label: "Graft", detail: "DALK (graft of the anterior layers, keeping the endothelium) or PK (full-thickness graft) for a central scar or contact lens intolerance." }
    ]
  },
  risk: ["Eye rubbing, atopy (allergies, eczema, asthma)", "Family history of keratoconus", "Down syndrome, Leber congenital amaurosis, Ehlers-Danlos"],
  presentation: [
    "Blurred, distorted vision, ghost images, halos at night",
    "Frequent glasses changes; increasing, oblique or irregular astigmatism",
    "Better with a pinhole or a rigid lens than with glasses",
    "Hydrops: sudden drop in vision, pain, white cornea; Seidel negative (not a perforation)"
  ],
  exam: {
    signs: [
      { sign: "Scissoring reflex on retinoscopy, oil droplet sign in the red reflex", why: "Early signs, before any slit-lamp sign." },
      { sign: "Vogt striae", why: "Fine vertical lines in the deep stroma that disappear when pressure is applied to the eye." },
      { sign: "Fleischer ring", why: "Iron deposited in the basal epithelium around the base of the cone; best seen under cobalt blue." },
      { sign: "Munson and Rizzuti signs", why: "Advanced stage: V-shaped lower lid on downgaze; conical light reflex on the nasal limbus when lit from the temporal side." }
    ],
    tests: [
      { test: "Corneal tomography (Scheimpflug camera that reconstructs both surfaces and the thickness)", when: "Suspicion, follow-up; before any refractive surgery", read: "Anterior and posterior elevation, thinnest point displaced and thinned, BAD-D index (combined score); posterior elevation reveals early forms." },
      { test: "Topography (curvature map of the anterior surface)", when: "Screening and follow-up", read: "Inferior steepening, asymmetric bowtie with skewed axes; increasing Kmax (maximum curvature): one of the signs of progression." }
    ]
  },
  ddx: [
    { dx: "Pellucid marginal degeneration", clue: "Band of inferior thinning 1–2 mm from the limbus; crab-claw topography, against-the-rule astigmatism; later age of onset." },
    { dx: "Post-refractive surgery ectasia", clue: "History of LASIK or PRK; same treatment (CXL)." },
    { dx: "Rigid lens-induced corneal warpage", clue: "Topography normalizes after a few weeks out of lenses; normal thickness." }
  ],
  redFlags: [
    "Sudden drop in vision with a white cornea: acute hydrops",
    "Child or adolescent: rapid progression, CXL at diagnosis",
    "Abnormal tomography in a LASIK candidate: surgery contraindicated (risk of ectasia)"
  ],
  cat: {
    algo: [
      { q: "Irregular astigmatism or a keratoconus sign?", yes: "Baseline tomography.", no: "Routine follow-up; tomography before refractive surgery.", yesGo: 1 },
      { q: "Child or adolescent?", yes: "CXL at diagnosis (2nd global consensus, ESCRS 2025).", no: "", yesGo: 3, noGo: 2 },
      { q: "Documented progression on tomography?", yes: "CXL, without waiting for rubbing to stop.", no: "Monitor with tomography; no preventive CXL.", yesGo: 3, noGo: 4 },
      { q: "Stroma ≥ 400 µm without epithelium?", yes: "Standard epi-off CXL.", no: "Adapted protocol in a specialized center.", yesGo: 4, noGo: 4 },
      { q: "Good enough vision with glasses?", yes: "Glasses.", no: "Rigid or scleral lenses; graft if scarred." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Stop eye rubbing; treat the allergy (antihistamine drops, cold compresses)",
          "Glasses if adequate; otherwise rigid gas permeable (RGP) or scleral lenses (large lenses resting on the sclera)"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "CXL: Dresden protocol (3 mW/cm² × 30 min) or accelerated (9 mW/cm² × 10 min), riboflavin 0.1% epi-off",
          "Intracorneal ring segments (ICRS) for contact lens intolerance, clear cornea and adequate thickness at the tunnel; they do not stop progression",
          "Graft: DALK preferred over PK if the endothelium is healthy"
        ]
      },
      {
        phase: "suivi",
        items: ["Tomography after CXL to confirm stabilization; CXL can be repeated", "Offer screening to siblings and children"]
      },
      {
        phase: "escalade",
        items: [
          "Acute hydrops: cycloplegic, NaCl 5% (hypertonic ointment that draws water out of the cornea), steroid, sometimes a gas bubble in the anterior chamber; resolves over a few months, graft later if scarred"
        ]
      }
    ],
    local: "In Quebec, CXL is offered in specialized centers (public coverage varies by centre); optometrists often detect keratoconus and fit the lenses. Epioxa (epi-on): FDA-approved in 2025."
  },
  treatments: [
    { name: "Corneal collagen cross-linking (CXL)", dose: "Riboflavin 0.1% + UVA, after epithelial removal.", pitfall: "Halts the disease; doesn’t restore lost vision.", qc: "Public coverage varies by centre.", how: "The epithelium is removed (epi-off), the stroma is soaked with riboflavin (vitamin B2) 0.1%, then exposed to UVA: excited riboflavin releases oxygen radicals that weld the collagen fibers together.", why: "Progressive keratoconus; children at diagnosis.", pros: "Halts progression in most cases; can be repeated.", cons: "Does not restore lost vision; pain for a few days; stroma ≥ 400 µm required to protect the endothelium from UV.", cx: "Infection, stromal haze (often transient), herpetic reactivation, rarely scarring." },
    { name: "Rigid and scleral lenses", dose: "Rigid gas-permeable or scleral lenses, fitted by the optometrist.", pitfall: "Don’t stop progression: keep following tomography.", how: "Tears, or the fluid in the scleral lens reservoir, fill in the irregularities: the smooth lens surface becomes the new optical surface.", why: "Inadequate vision with glasses.", pros: "Much better vision than glasses; no surgery.", cons: "Lengthy fitting, cost; does not stop progression.", cx: "Abrasion, infection, scar at the cone apex." },
    { name: "Corneal graft (DALK or PK)", dose: "DALK preferred; PK if Descemet is involved.", pitfall: "Recovery takes a year or more.", how: "DALK: diseased stroma removed down to Descemet and replaced, the patient’s endothelium preserved; PK: full thickness replaced, sutured.", why: "Central scar, contact lens intolerance.", pros: "Very good prognosis; DALK: no endothelial rejection, stronger globe.", cons: "Recovery over a year or more, astigmatism; DALK is technically difficult (conversion to PK if Descemet perforates).", cx: "PK: rejection, glaucoma, wound dehiscence with the slightest blow, lifelong." }
  ],
  treatment: {
    first: [
      "**You (first line)**: stop eye rubbing, treat allergy, order tomography.",
      "**Ophthalmologist**: cross-linking (riboflavin + UVA); rigid lenses, graft if scarred."
    ],
    refer: ["Within 24 h for sudden vision loss with a white cornea — acute hydrops; rule out infection and perforation.", "This week for a young patient who progresses — CXL halts the disease."],
    pitfall: ["LASIK with abnormal tomography: risk of ectasia."],
    qc: ["CXL: public coverage varies by center."]
  },
  pearls: [
    { q: "When do you do CXL?", a: "When there is progression: at least 2 of anterior steepening, posterior steepening, thinning (global consensus, Gomes et al., 2015); the 2nd global consensus (ESCRS 2025) recognizes posterior elevation and the thinnest point. **In children: at diagnosis.**" },
    { q: "Why DALK rather than PK in keratoconus?", a: "The disease affects the stroma, not the endothelium: DALK keeps the patient’s endothelium, so **no endothelial rejection**, less cell loss and a sturdier globe." },
    { q: "Dresden, accelerated, epi-on: what is the difference?", a: "Dresden (3 mW/cm² × 30 min) and accelerated (9 mW/cm² × 10 min) deliver the same total energy. Epi-on keeps the epithelium (less pain and infection) but lets less riboflavin and oxygen through; Epioxa (FDA 2025)." }
  ],
  mnemonic: { title: "Signs of keratoconus", text: "Munson, Rizzuti, Fleischer, Vogt: the four classic signs to recognize." },
  compare: {
    title: "Normal vs keratoconus (axial topography)",
    normal: { caption: "Regular, symmetric curvature." },
    patho: {
      caption: "Keratoconus: asymmetric inferior steepening.",
      reveal: ["Hot (steep) zone inferior to the center", "Asymmetric bowtie with skewed axes", "High Kmax: compare with previous maps to judge progression"]
    }
  }
} });

// c-fuchs
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-fuchs": {
  title: "Fuchs endothelial dystrophy and corneal edema",
  oneLiner: "Woman aged 50 or older, blurred vision on waking that clears during the day: the endothelium pumps poorly, the cornea swells.",
  definition: "An inherited loss of the endothelium, the cornea's pump. The cornea swells, first in the morning.",
  anatomy: { text: "The endothelium is a single layer of hexagonal cells that do not divide: ≈ 3000 cells/mm² in young adults, ≈ 2500 around age 60–70. Its pumps (Na⁺/K⁺-ATPase) move water out of the stroma: this deturgescence keeps the cornea clear, at ≈ 540 µm. It rests on Descemet membrane, which it produces; the cornea generally decompensates below 400–500 cells/mm²." },
  causal: {
    title: "When the endothelial pump fails",
    steps: [
      { label: "Genetic predisposition", detail: "Often a DNA repeat expansion (CTG18.1) in the TCF4 gene; dominant inheritance with incomplete penetrance.", kind: "cause" },
      { label: "Guttae, dying cells", detail: "Diseased cells deposit abnormal collagen on Descemet (the guttae, central at first), then die.", kind: "lesion" },
      { label: "Insufficient pump", detail: "The remaining cells stretch to fill the gaps, but water enters faster than it leaves.", kind: "mecanisme" },
      { label: "Stromal, then epithelial edema", detail: "Thickened, cloudy cornea, Descemet folds, then microcysts (tiny water pockets) and bullae: halos, pain if a bulla ruptures.", kind: "signe" },
      { label: "Subepithelial scar", detail: "After years, fibrosis (scar tissue) sets in: vision no longer fully recovers, even after a graft.", kind: "complication" }
    ],
    levers: [
      { at: 1, label: "DSO (research)", detail: "Remove only the central Descemet with guttae, without a graft (Descemet stripping only), ± a Rho kinase (ROCK) inhibitor drop: healthy peripheral cells migrate in. Experimental." },
      { at: 2, label: "Endothelial graft", detail: "DMEK (Descemet and endothelium only) or DSAEK (with a thin layer of stroma) replaces the failing pump." },
      { at: 3, label: "Lower the IOP", detail: "A raised intraocular pressure (IOP) pushes water into the cornea; lower it without topical CAIs (carbonic anhydrase inhibitors, such as dorzolamide), which inhibit the pump." },
      { at: 3, label: "NaCl 5%, hair dryer", detail: "Hypertonic saline and warm air on waking draw water out of the epithelium: relief, without repairing the pump." }
    ]
  },
  risk: [
    "Female sex; age: guttae from age 40–50, symptoms mostly after 50",
    "Family history (TCF4 gene)",
    "Decompensation precipitated by: cataract surgery, raised intraocular pressure (IOP), uveitis (intraocular inflammation), topical CAI (carbonic anhydrase inhibitor)"
  ],
  presentation: [
    "Long asymptomatic: guttae seen on a routine exam",
    "Blurred vision on waking that clears within a few hours",
    "Glare, halos, ↓ contrast",
    "Advanced: constant blur, pain if a bulla ruptures"
  ],
  exam: {
    signs: [
      { sign: "Central guttae: “beaten metal” on specular reflection (angled beam that makes the endothelium shine), dark dots on retroillumination (lighting by the fundus reflex)", why: "Key sign; guttae that are only peripheral (Hassall-Henle bodies) are part of normal aging." },
      { sign: "Descemet folds, thickened cornea", why: "Stromal edema: the pump can no longer keep up." },
      { sign: "Microcysts, epithelial bullae", why: "Epithelial edema: morning blur, halos, pain." },
      { sign: "Coexisting cataract", why: "Its surgery can decompensate the cornea: plan the two together." }
    ],
    tests: [
      { test: "Specular microscopy (magnified photo of the endothelium)", when: "Diagnosis, follow-up, before surgery", read: "↓ density (ECD), polymegethism (unequal sizes), pleomorphism (fewer hexagons), guttae = black areas." },
      { test: "Pachymetry (corneal thickness)", when: "Baseline and follow-up", read: "Increase over time, or thicker in the morning = edema; a single value is unreliable." },
      { test: "Scheimpflug tomography (thickness and elevation maps)", when: "Before cataract surgery if guttae", read: "Subclinical edema (invisible at the slit lamp): irregular isopachs (rings of equal thickness), decentered thinnest point, focal posterior surface depression → risk of decompensation." }
    ]
  },
  ddx: [
    { dx: "Pseudophakic bullous keratopathy (edema after cataract surgery)", clue: "Prior surgery, one eye only, no guttae in the fellow eye." },
    { dx: "Herpetic endotheliitis, uveitis", clue: "Keratic precipitates (KP: clusters of inflammatory cells on the endothelium), localized edema, unilateral, reversible." },
    { dx: "Angle-closure attack", clue: "Red, painful eye, very high IOP; the edema clears when it comes down." },
    { dx: "Iridocorneal endothelial (ICE) syndrome", clue: "Unilateral, “hammered silver” endothelium, distorted pupil, glaucoma." }
  ],
  redFlags: [
    "Unilateral or rapid edema without guttae: endotheliitis, IOP or a postoperative cause",
    "Ruptured bulla with a white infiltrate: infectious keratitis",
    "Guttae with planned cataract surgery: look for subclinical edema before operating"
  ],
  cat: {
    algo: [
      { q: "Central guttae in both eyes?", yes: "Fuchs: specular, pachymetry, Scheimpflug.", no: "Other edema: surgery, IOP, endotheliitis, ICE.", yesGo: 1 },
      { q: "Significant cataract?", yes: "", no: "", yesGo: 2, noGo: 3 },
      { q: "Any edema, even subclinical?", yes: "Phaco + DMEK in one surgery.", no: "Phaco alone, protecting the endothelium." },
      { q: "Symptoms despite 5% NaCl and hair dryer?", yes: "", no: "Medical treatment and follow-up.", yesGo: 4 },
      { q: "Stromal scar or complex eye?", yes: "PK if scarred; DSAEK if complex eye.", no: "DMEK." }
    ],
    phases: [
      {
        phase: "observation",
        items: ["Guttae without edema: annual follow-up (specular microscopy, pachymetry)"]
      },
      {
        phase: "medical",
        items: [
          "NaCl 5% drops 4 times a day, ointment at bedtime",
          "Hair dryer at arm’s length, warm air, for a few minutes on waking",
          "Raised IOP: lower it, without a topical CAI",
          "Painful bullae: soft bandage contact lens"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "DMEK; DSAEK if complex eye; PK if scarred",
          "Triple procedure: target slight myopia (≈ −0.5 to −1.0 D), because DMEK induces a hyperopic shift",
          "Research: DSO ± ROCK inhibitor"
        ]
      },
      {
        phase: "suivi",
        items: [
          "After DMEK: supine positioning for a few days (the bubble presses the graft in place), prolonged steroid, IOP; detached graft: air reinjection (rebubbling)"
        ]
      }
    ],
    local: "In Quebec, guttae are often found by the optometrist, who refers for edema, symptoms or cataract. Netarsudil (ROCK inhibitor, approved in the US): experimental use in Fuchs."
  },
  treatments: [
    { name: "NaCl 5% and hair dryer", dose: "5% NaCl drops QID or ointment at bedtime; hair dryer on waking.", pitfall: "Modest effect, mainly on the epithelium.", how: "Hypertonic saline drop or ointment that draws water osmotically from the epithelium into the tears; warm air from the dryer speeds evaporation on waking.", why: "Mild epithelial edema, awaiting a graft.", pros: "Simple, inexpensive.", cons: "Little effect on the stroma; modest benefit.", cx: "Burning, blurred vision (ointment)." },
    { name: "DMEK (Descemet membrane endothelial keratoplasty)", dose: "Descemet–endothelium graft held by an air bubble.", pitfall: "Lie face up for the first days.", how: "Surgery: the diseased Descemet is removed (descemetorhexis), a scroll of donor Descemet and endothelium (≈ 15 µm) is injected, then unrolled and pressed into place with an air or gas bubble.", why: "Symptomatic Fuchs: first choice.", pros: "Best vision, fast recovery, lowest rejection rate.", cons: "Demanding technique.", cx: "Detachment, primary graft failure, rejection, ↑ IOP (bubble, steroids), cataract." },
    { name: "DSAEK (Descemet stripping automated endothelial keratoplasty)", dose: "Thicker endothelial graft, easier to handle.", pitfall: "Slightly less sharp vision, hyperopic shift.", how: "Same principle, with a thin layer of posterior stroma cut by a microkeratome: a thicker graft, easier to handle.", why: "Complex eye.", pros: "More stable in the complex eye.", cons: "Slightly less sharp vision, larger hyperopic shift.", cx: "Detachment, rejection more frequent than after DMEK." },
    { name: "Penetrating keratoplasty (PK)", dose: "Full-thickness graft, sutured.", pitfall: "Wound fragile for life, astigmatism.", how: "A full-thickness disc of cornea is replaced and sutured in place.", why: "Stromal scar, failed endothelial grafts.", pros: "Replaces all layers.", cons: "Slow recovery, astigmatism, lifelong wound fragility.", cx: "Rejection (highest risk), loose sutures, infection, glaucoma." }
  ],
  treatment: {
    first: [
      "**You (first line)**: 5% NaCl drops QID or ointment at bedtime; hair dryer on waking.",
      "**Ophthalmologist**: endothelial graft (DMEK), sometimes with cataract surgery."
    ],
    refer: ["This week if edema blurs vision — discuss a graft.", "Routine follow-up for guttae without symptoms, and before any cataract surgery."],
    pitfall: ["Dorzolamide or brinzolamide drops: slow the endothelial pump."]
  },
  pearls: [
    { q: "Why is vision worse in the morning?", a: "With the lids closed, water no longer evaporates: the cornea becomes waterlogged overnight. During the day, evaporation dehydrates it and vision clears." },
    { q: "Guttae and cataract: what do you do?", a: "Specular microscopy and Scheimpflug beforehand. Morning or subclinical edema: triple procedure. Otherwise, endothelium-protective phaco (dispersive viscoelastic, a gel that coats the endothelium; little ultrasound energy) and warn the patient about the risk of decompensation." },
    { q: "Why DMEK rather than DSAEK?", a: "It replaces exactly the diseased tissue: better acuity, faster recovery and **less rejection** (PK > DSAEK > DMEK). DSAEK remains useful in the complex eye." }
  ],
  mnemonic: { title: "Four stages", text: "Guttae → stromal edema → epithelial edema → scar: the later the stage, the less a graft restores." },
  compare: {
    title: "Normal cornea vs decompensated Fuchs",
    normal: { caption: "Endothelium as a regular monolayer, thin, clear stroma." },
    patho: {
      caption: "Guttae, sparse and stretched cells, stromal and epithelial edema (schematic).",
      reveal: [
        "Guttae: excrescences of Descemet protruding toward the anterior chamber",
        "Fewer, larger endothelial cells (polymegethism)",
        "Thickened stroma, Descemet folds",
        "Microcysts and bullae in the epithelium",
        "Clinical correlation: blurred vision in the morning, glare"
      ]
    }
  }
} });

// c-atypiques
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-atypiques": {
  title: "Acanthamoeba and fungal keratitis",
  oneLiner: "Ulcer that does not heal on antibiotics: think ameba (contact lenses + water, severe pain) or fungus (branch, feathery borders). Never a steroid.",
  definition: "Ameba (Acanthamoeba) or fungal keratitis. Slow, resistant, often mistaken for herpes.",
  anatomy: { text: "These organisms do not penetrate a healthy epithelium: they exploit a microlesion (contact lens, branch, soil). The corneal nerves run from the limbus toward the center in the stroma; the ameba follows them, hence the extreme pain. Fungal filaments can penetrate Descemet." },
  causal: {
    title: "From microlesion to refractory ulcer",
    steps: [
      { label: "Contamination of a microlesion", detail: "Ameba: lens rinsed with tap water or worn in the shower, pool or lake. Fungus: scratch from a branch or soil, or a cornea weakened by steroids (Candida, a yeast).", kind: "cause" },
      { label: "Slow, resistant organism", detail: "The ameba transforms into a double-walled cyst that few drugs penetrate; fungal filaments (hyphae) grow slowly in the stroma.", kind: "mecanisme" },
      { label: "Nerve or deep invasion", detail: "The ameba tracks along corneal nerves (radial keratoneuritis), hence pain out of proportion; hyphae extend toward Descemet and the anterior chamber.", kind: "lesion" },
      { label: "Atypical-looking infiltrate", detail: "Ameba: pseudodendrites (raised epithelial lines) then ring infiltrate. Fungus: dry gray-white infiltrate with feathery margins, satellite lesions, hypopyon.", kind: "signe" },
      { label: "Diagnostic delay, perforation", detail: "Mistaken for herpes or bacteria, often treated with steroids, the organism progresses: melting, perforation, graft often needed.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Prevention", detail: "No water on lenses or in the case; protective eyewear for farm work." },
      { at: 1, label: "Early specific treatment", detail: "Biguanide (antiseptic active against cysts) ± diamidine (propamidine) for the ameba; natamycin 5% (antifungal) for filamentous fungi." },
      { at: 4, label: "Think of it early, graft if needed", detail: "No response after 48–72 h of antibiotic: stop steroids and sample (special cultures, PCR); graft if perforated." }
    ]
  },
  risk: [
    "Contact lenses + water (tap, shower, pool, hot tub, lake), poorly maintained case, orthokeratology (overnight rigid lenses): ameba",
    "Vegetable-matter trauma (branch, wood) or soil, farm work: filamentous fungus",
    "Prolonged topical steroids, diseased surface, graft: Candida",
    "Diabetes, immunosuppression"
  ],
  presentation: [
    "Ameba: severe pain out of proportion, photophobia, course over weeks",
    "Fungus: less abrupt onset, over days to weeks",
    "Infiltrate that does not respond, or worsens, on antibiotics or antiviral"
  ],
  exam: {
    signs: [
      { sign: "Radial keratoneuritis (fine infiltrates along the nerves, from the limbus toward the center)", why: "Highly suggestive of early Acanthamoeba." },
      { sign: "Pseudodendrites without terminal bulbs", why: "Raised epithelial lines that stain poorly; a true herpetic dendrite has swellings at the ends of its branches." },
      { sign: "Ring infiltrate", why: "Later ameba (also fungus or anesthetic abuse): a sign of diagnostic delay." },
      { sign: "Feathery borders, satellite lesions, endothelial plaque (deposit behind the cornea)", why: "Profile of a filamentous fungus (Fusarium, Aspergillus), which can penetrate Descemet." }
    ],
    tests: [
      { test: "Deep scraping: smears (Gram, Giemsa, calcofluor white) and cultures (Sabouraud; non-nutrient agar overlaid with E. coli for the ameba)", when: "As soon as the picture is atypical, before treatment", read: "Calcofluor makes cysts and hyphae fluoresce; cultures are slow, keep them for several weeks." },
      { test: "PCR (amplification of the organism’s DNA)", when: "On a scraping or the lens, if available", read: "Fast and sensitive; a negative result does not rule it out." },
      { test: "Confocal microscopy (microscope that images the cornea cell by cell)", when: "Specialized centers; noninvasive exam", read: "Round double-walled amebic cysts or branching hyphae; operator-dependent." }
    ]
  },
  ddx: [
    { dx: "Herpetic keratitis (HSV)", clue: "True dendrite with terminal bulbs, reduced sensation; responds to antiviral." },
    { dx: "Bacterial keratitis", clue: "Onset within hours, pus, response to antibiotics within 48 h." },
    { dx: "Topical anesthetic abuse keratopathy", clue: "Repeated anesthetic drops, stromal ring, negative cultures." }
  ],
  redFlags: [
    "Contact lens wearer with extreme pain and few signs: ameba until proven otherwise",
    "Ulcer not responding after 48–72 h of antibiotics: revisit the diagnosis and sample",
    "Endothelial plaque, hypopyon, limbal or scleral involvement: risk of endophthalmitis and perforation"
  ],
  cat: {
    algo: [
      { q: "Atypical setting or ulcer not responding?", yes: "Stop steroids; scraping, specific cultures, PCR.", no: "Treat as bacterial, recheck in 24–48 h.", yesGo: 1 },
      { q: "Cysts or an ameba picture (lenses + water)?", yes: "Biguanide ± diamidine hourly, over months.", no: "", yesGo: 3, noGo: 2 },
      { q: "Hyphae, feathery edges or satellites?", yes: "Natamycin 5% if filamentous; amphotericin B or voriconazole if yeast.", no: "Resistant bacterium, Nocardia, mycobacteria, herpes?", yesGo: 3 },
      { q: "Deep progression or perforation?", yes: "Therapeutic graft; consider intrastromal voriconazole.", no: "Continue, close follow-up." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Stop contact lenses and steroids; cycloplegic and oral analgesic",
          "Ameba: biguanide ± propamidine hourly day and night, then tapered over months",
          "Filamentous fungus: natamycin 5% hourly; repeated epithelial debridement to aid penetration; oral voriconazole adds no benefit (MUTT II)"
        ]
      },
      {
        phase: "chirurgie",
        items: ["Therapeutic graft (penetrating keratoplasty: full-thickness replacement) for perforation or progression"]
      },
      {
        phase: "suivi",
        items: ["See every 1–3 days at first; treat for a few weeks (fungus) to several months (ameba), otherwise recurrence"]
      },
      {
        phase: "escalade",
        items: [
          "Failure: corneal biopsy if cultures are negative; intrastromal or intracameral voriconazole (fungus), graft; refer to a cornea center",
          "Ameba: steroid only by the specialist, after weeks of anti-amebic therapy (scleritis, severe inflammation)"
        ]
      }
    ],
    local: "In Canada, PHMB, chlorhexidine and propamidine are compounded by hospital pharmacies; Akantior (polihexanide 0.08%, approved in Europe in 2024) and natamycin: often obtained through the hospital pharmacy. Confocal microscopy and PCR: only in some academic centers."
  },
  treatments: [
    { name: "Biguanide ± diamidine (ameba)", dose: "PHMB or chlorhexidine 0.02% hourly ± propamidine, over months.", pitfall: "Often mistaken for herpes early on.", qc: "Compounded by hospital pharmacies.", how: "Antiseptic drops compounded by the pharmacy (PHMB or chlorhexidine 0.02%), hourly day and night at first, often with propamidine: the biguanide breaches the ameba’s membrane and penetrates the cyst wall.", why: "Any Acanthamoeba keratitis, as soon as suspicion is strong.", pros: "The only class active against cysts; polihexanide 0.08% validated as monotherapy in Europe.", cons: "Several months of treatment; compounded preparations.", cx: "Epithelial toxicity, delayed healing." },
    { name: "Natamycin 5% (filamentous fungus)", dose: "Natamycin 5%, 1 drop hourly.", pitfall: "Penetrates poorly: deep disease needs another option.", qc: "Often obtained through the hospital pharmacy.", how: "Antifungal suspension drops, hourly: binds ergosterol (a component of the fungal membrane) and blocks growth.", why: "Fusarium or Aspergillus: first choice.", pros: "MUTT I: better vision and fewer perforations than voriconazole, especially for Fusarium.", cons: "Poor deep penetration.", cx: "Irritation, white deposits." },
    { name: "Voriconazole", dose: "Voriconazole 1% hourly; intrastromal if deep.", pitfall: "Inferior to natamycin for Fusarium (MUTT I).", how: "Azole antifungal as 1% drops, as an intrastromal or anterior chamber injection, or as tablets: prevents the fungus from making ergosterol.", why: "Yeasts (Candida), deep infection or natamycin failure.", pros: "Good penetration, broad spectrum.", cons: "Inferior to natamycin for Fusarium (MUTT I); oral adds no benefit (MUTT II).", cx: "Oral: transient visual disturbances, liver injury." }
  ],
  treatment: {
    first: [
      "**You (first line)**: remove the lens, no steroid, refer the same day.",
      "**Ophthalmologist**: specific sampling; biguanide (ameba) or natamycin 5% (fungus)."
    ],
    refer: ["Same day — specific treatment, often in a cornea center."],
    pitfall: ["Prednisolone or any steroid: makes a fungus flare.", "Topical anesthetic for ameba pain: never."],
    qc: ["Biguanides are compounded by hospital pharmacies."]
  },
  pearls: [
    { q: "Why is the ameba often mistaken for herpes?", a: "It produces pseudodendrites and resists antibiotics. Clues: contact lens wearer exposed to water, **pain out of proportion**, radial keratoneuritis, no terminal bulbs, failure of antiviral therapy." },
    { q: "Why never a steroid in fungal keratitis?", a: "The steroid suppresses the neutrophils that contain the fungus: hyphae spread into the anterior chamber. An ulcer that worsens on steroids: think **fungus, ameba or herpes**." },
    { q: "What do the MUTT trials say?", a: "MUTT I: **natamycin 5% superior to voriconazole 1%** for filamentous keratitis, especially Fusarium. MUTT II: adding oral voriconazole provides **no benefit**." }
  ],
  mnemonic: { title: "Clues to the atypical ulcer", text: "Ameba = lens + water + severe pain. Fungus = plant matter + feathery edges + satellites." },
  compare: {
    title: "Normal vs amebic pseudodendrite (fluorescein)",
    normal: { caption: "Intact epithelium, no fluorescein uptake." },
    patho: {
      caption: "Acanthamoeba pseudodendrite: irregular lines without terminal bulbs.",
      reveal: [
        "Coarse, raised epithelial lines",
        "No terminal bulbs (≠ herpetic dendrite)",
        "Faint, irregular fluorescein uptake",
        "Look for radial keratoneuritis and a stromal ring"
      ]
    }
  }
} });

// c-brulure
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-brulure": {
  title: "Chemical burn",
  oneLiner: "Chemical in the eye: irrigate immediately, before the history and exam, until pH 7.0–7.5; alkalis are the worst.",
  definition: "A burn from an alkali or an acid. Alkalis penetrate and kill the limbus: irrigate immediately.",
  anatomy: { text: "The limbus houses the stem cells that renew the corneal epithelium; it acts as a barrier against the conjunctiva and is nourished by the limbal vascular arcades. The conjunctiva also lines the inside of the lids and forms fornices where particles hide. An alkali can reach the anterior chamber within seconds to minutes. After a severe burn: an opaque, vascularized cornea." },
  causal: {
    title: "From splash to vascularized cornea",
    steps: [
      { label: "Contact with an alkali or an acid", detail: "Alkalis: caustic soda (lye: drain cleaner), ammonia, lime, plaster, cement, airbag; acids: battery (sulfuric), hydrofluoric.", kind: "cause" },
      { label: "Penetration depending on the agent", detail: "An alkali saponifies (dissolves) cell membranes and penetrates; an acid coagulates surface proteins, which form a barrier, except hydrofluoric acid.", kind: "mecanisme" },
      { label: "Limbal ischemia, epithelium destroyed", detail: "Limbal vessels thrombosed (white limbus), stem cells dead, epithelium sloughed.", kind: "lesion" },
      { label: "Inflammation, stromal melt", detail: "Neutrophils release collagenases (enzymes that digest collagen), especially after the first week: ulcer, perforation.", kind: "complication" },
      { label: "Limbal stem cell deficiency", detail: "The conjunctiva and its vessels cover the cornea (conjunctivalization); persistent defects, symblepharon (lid stuck to the globe).", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Immediate irrigation", detail: "Dilute and remove the agent as fast as possible, until neutral pH, removing particles: every second counts." },
      { at: 2, label: "Early amniotic membrane", detail: "Inner layer of the placenta placed on the surface: helps the epithelium regrow and calms inflammation (grades II–IV)." },
      { at: 3, label: "Steroid, doxycycline, ascorbate", detail: "The steroid suppresses inflammation in the first 10–14 days; doxycycline inhibits collagenases; ascorbate (vitamin C) helps rebuild collagen." },
      { at: 4, label: "Limbal graft", detail: "Stem cells taken from the other eye (CLAU, SLET) or from a donor (KLAL) to rebuild a stable corneal epithelium." }
    ]
  },
  risk: [
    "Work: construction (cement, lime, plaster), industry, laboratory, agriculture",
    "Home: drain cleaner, oven cleaner, bleach, pool chemicals",
    "Car battery, airbag; assault by splashing",
    "No protective eyewear"
  ],
  presentation: [
    "Severe pain, photophobia, tearing, tightly closed lids (blepharospasm)",
    "Variable ↓ vision: hazy cornea, or even “porcelain” white",
    "Pitfall: a white eye (ischemic limbus) is often more serious than a red eye"
  ],
  exam: {
    signs: [
      { sign: "Limbal ischemia: white limbus without perfused vessels, in clock hours", why: "Main prognostic factor for limbal stem cell deficiency." },
      { sign: "Corneal and conjunctival epithelial defect with fluorescein", why: "Pitfall: a total defect, with no sharp edge, goes unnoticed." },
      { sign: "Opacity: iris details sharp, hazy or not visible", why: "Together with ischemia, the basis of the Roper-Hall classification." },
      { sign: "Particles after double eversion of the upper lid", why: "Lime and plaster keep releasing alkali." }
    ],
    tests: [
      { test: "pH paper in the inferior fornix", when: "On arrival without delaying irrigation, then 5–10 min after it ends", read: "Target 7.0–7.5; otherwise resume irrigation and look for particles." },
      { test: "Roper-Hall (or Dua) classification", when: "After irrigation", read: "I: clear cornea, no ischemia; II: iris visible, ischemia < 1/3 of the limbus; III: iris hazy, 1/3 to 1/2; IV: opaque cornea, > 1/2. Dua (I–VI): clock hours of limbus and % of conjunctiva involved; name the scale, the numbers differ." },
      { test: "Identification of the agent", when: "During irrigation", read: "Label, safety data sheet (SDS), Centre antipoison du Québec (poison control): alkali, acid, hydrofluoric." }
    ]
  },
  ddx: [
    { dx: "Thermal burn", clue: "Heat (curling iron, molten metal); usually superficial injury." },
    { dx: "Actinic keratitis (UV: welding, snow)", clue: "Pain 6–12 h after exposure, punctate staining in both eyes, no chemical." },
    { dx: "Associated penetrating injury", clue: "Positive Seidel (aqueous leak), flat chamber, distorted pupil: protect the globe." }
  ],
  redFlags: [
    "White limbus or hazy cornea (Roper-Hall II–IV): ophthalmology immediately",
    "pH that rises again: particles retained in the fornices",
    "Non-healing defect, thinning, raised intraocular pressure (IOP)"
  ],
  cat: {
    algo: [
      { q: "Chemical exposure?", yes: "Irrigate at once, before history and acuity.", no: "Assess as a painful red eye.", yesGo: 1 },
      { q: "pH 7.0–7.5, 5–10 min after irrigation?", yes: "Exam: acuity, fluorescein, limbus, IOP, eversion.", no: "Irrigate more, remove particles, then examine.", yesGo: 2, noGo: 2 },
      { q: "White limbus or hazy cornea (Roper-Hall ≥ II)?", yes: "Ophthalmology immediately: steroid, doxycycline, amniotic membrane.", no: "Grade I: antibiotic, lubricants; recheck in 1–2 days.", yesGo: 3 },
      { q: "Epithelium closed by day 10–14?", yes: "Taper the steroid as inflammation settles; watch IOP.", no: "Persistent defect: cut the steroid; amniotic membrane, ± tarsorrhaphy." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "**Irrigate first**: ≥ 30 min and several liters, topical anesthetic, lid speculum or irrigating lens",
          "Double eversion, removal of particles with a moistened cotton tip, sweeping of the fornices",
          "Preservative-free antibiotic, cycloplegic, IOP control",
          "Grades II–IV: steroid ≤ 10–14 days, doxycycline, ascorbate; topical citrate (compounded, depending on the centre)"
        ]
      },
      {
        phase: "chirurgie",
        items: ["Early amniotic membrane; symblepharon prevention (glass rod, ring); glue or tectonic (reinforcing) graft if melting"]
      },
      {
        phase: "suivi",
        items: ["Daily at first; watch for melt (weeks 2–3), IOP, symblepharon"]
      },
      {
        phase: "escalade",
        items: ["Limbal stem cell deficiency: limbal graft, then corneal graft; keratoprosthesis (artificial cornea) after repeated failures"]
      }
    ],
    local: "In Quebec, a work-related burn requires CNESST forms; the Centre antipoison du Québec (poison control) helps identify the agent and its toxicity."
  },
  treatments: [
    { name: "Copious irrigation", dose: "0.9% saline or Ringer’s lactate ≥ 30 min, to pH 7.0–7.5.", pitfall: "Recheck pH 5–10 min after stopping.", qc: "At work: CNESST forms; Québec Poison Control Centre.", how: "Rinsing with IV solution (NaCl 0.9% or Ringer lactate) via tubing, irrigating lens or under a lid speculum, ≥ 30 min, lids everted, until pH 7.0–7.5: dilutes and washes away the agent.", why: "Any burn, on site then in the ED.", pros: "The single most effective step.", cons: "Uncomfortable.", cx: "Chemosis (conjunctival edema)." },
    { name: "Short topical steroid", dose: "Prednisolone 1%, QID to hourly, ≤ 10–14 days.", pitfall: "Prolonged, it promotes melting.", how: "Prednisolone acetate 1% (from 4 times a day to hourly) for 10–14 days at most, then a rapid taper: suppresses neutrophils and inflammation.", why: "Grades II–IV.", pros: "Less inflammation and neovascularization.", cons: "Prolonged use promotes melting.", cx: "Melt, perforation, ↑ IOP." },
    { name: "Oral doxycycline and ascorbate", dose: "Doxycycline 100 mg BID + vitamin C 1–2 g/day.", pitfall: "Doxycycline: not in pregnancy or under age 8.", how: "Doxycycline 100 mg BID: inhibits collagenases; vitamin C 1–2 g/day: needed for collagen synthesis, depleted in the aqueous after an alkali burn.", why: "Grades II–IV, persistent defect.", pros: "Oral, inexpensive.", cons: "Doxycycline: not in pregnancy or before age 8.", cx: "Photosensitivity; kidney stones (vitamin C)." },
    { name: "Amniotic membrane", dose: "Early amniotic membrane, glued, sutured or ring-mounted.", pitfall: "Doesn’t replace stem cells.", how: "Inner layer of a donor placenta, glued, sutured or mounted on a ring: an anti-inflammatory biological dressing.", why: "Grades II–IV, early; persistent defect.", pros: "Faster closure, less pain.", cons: "Does not replace the stem cells.", cx: "Infection, displacement." },
    { name: "Limbal stem cell transplantation", dose: "CLAU, SLET or KLAL depending on the other eye.", pitfall: "KLAL: systemic immunosuppression.", how: "Supply of healthy limbus: CLAU (conjunctival limbal autograft from the other eye), SLET (small limbal fragments on amniotic membrane) or KLAL (keratolimbal allograft from a donor).", why: "Chronic limbal stem cell deficiency.", pros: "Stable surface, then a corneal graft becomes possible.", cons: "CLAU, SLET: healthy fellow eye required; KLAL: immunosuppression.", cx: "Rejection, failure, injury to the donor eye." }
  ],
  treatment: {
    first: [
      "**You (first line)**: irrigate with 0.9% saline ≥ 30 min to pH 7.0–7.5, lids everted.",
      "**Ophthalmologist**: short steroid, doxycycline + vitamin C, amniotic membrane."
    ],
    refer: ["Immediately if white limbus, hazy cornea (Roper-Hall ≥ II) or rising pH — sight-threatening.", "Within 24 h for any alkali burn, even mild."],
    pitfall: ["Waiting for acuity or the product name before irrigating: minutes lost.", "Prednisolone beyond 10–14 days: corneal melting."],
    qc: ["At work: CNESST; Québec Poison Control Centre for the product."]
  },
  pearls: [
    { q: "What do you do first?", a: "**I irrigate**, before the history, acuity and exam; only the pH paper may come first. At least 30 min, until pH 7.0–7.5 rechecked 5–10 min later, with double eversion." },
    { q: "Why is an alkali worse than an acid?", a: "An alkali saponifies membranes and penetrates into the anterior chamber; an acid coagulates surface proteins, which form a barrier. Exception: hydrofluoric acid penetrates." },
    { q: "Why limit the steroid to 10–14 days?", a: "It suppresses inflammation early on, then blocks collagen repair when collagenase activity peaks: risk of melt and perforation." }
  ],
  mnemonic: { title: "Dilute before you describe", text: "Irrigate, then pH, then examine. The whitest eye is often the worst." },
  compare: {
    title: "Normal cornea vs alkali burn sequelae",
    normal: { caption: "Intact epithelium, thin, transparent stroma." },
    patho: {
      caption: "Alkali that penetrated (schematic): edematous stroma, ruptured Bowman layer, anterior scar.",
      reveal: [
        "White scar in the anterior stroma: a ruptured Bowman layer does not regenerate",
        "Thickened, hazy stroma: iris hazy or not visible (grades III–IV)",
        "Descemet folds: the endothelium was also injured",
        "Not shown in the schematic: ischemic white limbus, epithelial defect, IOP, particles"
      ]
    }
  }
} });

// c-pterygion
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-pterygion": {
  title: "Pterygium and ocular surface lesions (pinguecula, OSSN)",
  oneLiner: "Pinkish wing advancing from the nasal side onto the cornea after years of sun; atypical: think neoplasia.",
  definition: "A wing-shaped fold of conjunctiva growing onto the cornea, nasally (UV). Rule out a surface neoplasia.",
  anatomy: { text: "The conjunctiva, a vascularized mucous membrane covering the sclera, stops at the limbus, home to the stem cells of the corneal epithelium. The limbus acts as a barrier: it keeps the conjunctiva and its vessels from invading the cornea, which must remain transparent. The cornea focuses light coming from the temporal side onto the nasal limbus, hence the typical location. A pinguecula is a yellowish bump that stays on the conjunctiva; OSSN is an epithelial cancer that can mimic a pterygium." },
  causal: {
    title: "From sun to fibrovascular wing",
    steps: [
      { label: "UV, wind, dust", detail: "Outdoor work, childhood in a sunny climate; light is concentrated on the nasal limbus.", kind: "cause" },
      { label: "Damaged limbus, open barrier", detail: "UV damages the stem cells and activates enzymes (metalloproteinases) that dissolve the limbal barrier.", kind: "mecanisme" },
      { label: "Fibrovascular proliferation", detail: "Fibroblasts (fibrous tissue cells) and vessels advance onto the cornea, destroying Bowman layer.", kind: "lesion" },
      { label: "Astigmatism, irritation", detail: "The cornea flattens horizontally: with-the-rule astigmatism (steeper vertical meridian), often irregular; redness, grittiness.", kind: "signe" },
      { label: "Visual axis involved, recurrence", detail: "↓ vision if the pupil is covered; after simple excision, it often grows back, more aggressively.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "UV protection", detail: "Wraparound sunglasses and a hat: less fuel for the disease, fewer recurrences." },
      { at: 3, label: "Tears, short steroid", detail: "Lubricate and calm an inflamed pterygium, without making it regress." },
      { at: 2, label: "Excision + autograft", detail: "The tissue is removed and the sclera covered with a graft of healthy conjunctiva that contains limbus: the barrier is restored." },
      { at: 2, label: "Mitomycin C", detail: "Antimitotic (slows cell division) applied during surgery: fewer fibroblasts, less recurrence." }
    ]
  },
  risk: [
    "Cumulative sun exposure: outdoor work, water sports, skiing",
    "Childhood near the equator or in a sunny climate; wind, dust",
    "OSSN: older age, fair skin, immunosuppression (HIV, organ transplant), human papillomavirus (HPV)"
  ],
  presentation: [
    "Pinkish triangular mass at the nasal limbus, sometimes temporal or on both sides",
    "Redness, grittiness, especially during inflammatory flares",
    "Blurred vision (astigmatism, then visual axis involvement)",
    "Cosmetic concern; rarely, double vision from restricted eye movement"
  ],
  exam: {
    signs: [
      { sign: "Head on the cornea, neck at the limbus, body on the sclera; Stocker line in front of the head", why: "The Stocker line (brown iron deposit in the epithelium) indicates a slow, long-standing lesion." },
      { sign: "A probe cannot pass under the neck", why: "True pterygium; if it passes: pseudopterygium (cicatricial fold attached by its head only)." },
      { sign: "Gelatinous, leukoplakic (white plaque) or papillomatous (cauliflower-like) appearance, feeder vessels (supplying the lesion), atypical location", why: "Suggests OSSN: imaging and biopsy before any routine surgery." }
    ],
    tests: [
      { test: "Topography and keratometry (curvature measurement, K)", when: "Before cataract or refractive surgery", read: "Irregular with-the-rule astigmatism: biometry skewed; remove the pterygium, remeasure once the cornea is stable." },
      { test: "Anterior segment OCT (AS-OCT: cross-sectional imaging)", when: "Suspicious lesion", read: "OSSN: thickened, hyperreflective epithelium, abrupt transition; pterygium: thin epithelium over thick tissue." },
      { test: "Biopsy", when: "Atypical or pigmented lesion, immunosuppression", read: "Dysplasia, carcinoma or melanoma: guides treatment." }
    ]
  },
  ddx: [
    { dx: "Pinguecula", clue: "Yellowish, does not cross the limbus; pingueculitis if it becomes inflamed." },
    { dx: "Pseudopterygium", clue: "After a burn, trauma or PUK (peripheral ulcerative keratitis); any meridian; the probe passes under the neck." },
    { dx: "OSSN", clue: "Gelatinous, leukoplakic or papillomatous, feeder vessels; older or immunosuppressed patient." },
    { dx: "Conjunctival melanoma, primary acquired melanosis (PAM: flat acquired pigmentation)", clue: "New or enlarging pigment, nodule: photo and biopsy." }
  ],
  redFlags: [
    "Gelatinous, leukoplakic or papillomatous lesion, or feeder vessels: OSSN until proven otherwise",
    "New or enlarging pigment: possible melanoma",
    "Atypical location, young immunosuppressed patient, rapid recurrence"
  ],
  cat: {
    algo: [
      { q: "Lesion crossing the limbus onto the cornea?", yes: "", no: "Confined to the conjunctiva: pinguecula; UV protection.", yesGo: 1 },
      { q: "Gelatinous, leukoplakia, feeder vessels or pigment?", yes: "Possible OSSN or melanoma: biopsy, ocular oncology.", no: "Pterygium: measure corneal invasion.", noGo: 2 },
      { q: "Axis threatened, astigmatism, symptoms or planned cataract?", yes: "Excision + conjunctival autograft.", no: "Lubricants, UV protection, photos at follow-up.", yesGo: 3 },
      { q: "Recurrence, or fleshy lesion in a young patient?", yes: "Add mitomycin C or amniotic membrane.", no: "Autograft alone." }
    ],
    phases: [
      {
        phase: "observation",
        items: ["Photo and measurement of encroachment (mm) at each visit"]
      },
      {
        phase: "medical",
        items: [
          "Wraparound glasses, hat; preservative-free tears",
          "Flare: soft steroid (fluorometholone) for a few days, intraocular pressure (IOP) monitored",
          "OSSN: topical chemotherapy drops (interferon alfa-2b, 5-fluorouracil, mitomycin C)"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "Excision + conjunctival autograft, fibrin glue or sutures; ± mitomycin C or amniotic membrane",
          "OSSN: “no-touch” excision (without handling the tumor) with clear margins + cryotherapy of the edges"
        ]
      },
      {
        phase: "suivi",
        items: ["Steroid for a few weeks after excision, IOP; recurrence mainly in the first year; OSSN: prolonged follow-up"]
      }
    ],
    local: "In Quebec, pterygium is less common than in tropical areas; it is seen mainly in outdoor workers and in patients who grew up in a sunny climate. Topical interferon and 5-fluorouracil: hospital-pharmacy compounded preparations."
  },
  treatments: [
    { name: "Conservative treatment", dose: "UV-blocking glasses, tears; mild steroid for a few days in flares.", pitfall: "Doesn’t make the lesion regress.", how: "UV protection, artificial tears and, during flares, a soft steroid for a few days: protect and calm the surface.", why: "Small pterygium, pinguecula, inflammatory flare.", pros: "No surgery.", cons: "Does not make the lesion regress.", cx: "Steroid: ↑ IOP." },
    { name: "Excision + conjunctival autograft", dose: "Excision + conjunctival autograft, glued or sutured.", pitfall: "Bare sclera alone: far more recurrences.", how: "Surgery: the head is dissected, the fibrovascular tissue removed, then the bare sclera is covered with a thin graft of conjunctiva harvested from under the upper lid, glued or sutured.", why: "Threatened axis, astigmatism, irritation, restriction, before cataract surgery, cosmesis.", pros: "Much lower recurrence than bare sclera (excision without coverage); glue: shorter surgery, less discomfort.", cons: "Longer; donor site.", cx: "Recurrence, granuloma, dellen (corneal depression from poor wetting)." },
    { name: "Mitomycin C or amniotic membrane", dose: "Intraoperative mitomycin C or amniotic membrane.", pitfall: "Mitomycin: toxic if overdosed.", how: "Mitomycin C applied to the sclera for a few minutes with a sponge; amniotic membrane (inner layer of the placenta) placed over the area, anti-inflammatory.", why: "Recurrence, large lesion, conjunctiva to be spared for future glaucoma surgery.", pros: "Less recurrence.", cons: "Mitomycin: toxic if the dose is excessive.", cx: "Scleral melt, delayed healing." },
    { name: "Treatment of OSSN", dose: "Topical chemotherapy courses, or no-touch excision + cryotherapy.", qc: "Interferon, 5-FU: compounded preparations.", how: "Chemotherapy drops in cycles, or no-touch excision with clear margins and cryotherapy (freezing) of the edges.", why: "Confirmed or highly suspected OSSN.", pros: "Drops treat the entire surface.", cons: "Prolonged follow-up, recurrences.", cx: "Surface toxicity; limbal stem cell deficiency after extensive excision." }
  ],
  treatment: {
    first: [
      "**You (first line)**: UV-blocking glasses, tears; fluorometholone for a few days in flares.",
      "**Ophthalmologist**: excision with conjunctival autograft; biopsy if atypical."
    ],
    refer: ["This week if gelatinous, white, pigmented or fast-growing — possible cancer.", "Otherwise routine follow-up; sooner if the visual axis is threatened."],
    pitfall: ["Bare-sclera excision without graft: frequent recurrence."]
  },
  pearls: [
    { q: "Pterygium or pseudopterygium?", a: "A pseudopterygium follows an insult (burn, trauma, peripheral ulcer), occurs in any meridian and adheres only by its head: the probe passes under the neck. The true, UV-related one is nasal and adherent throughout." },
    { q: "Pterygium and cataract: in what order?", a: "The pterygium skews keratometry (irregular astigmatism): wrong lens, especially a toric one (which corrects astigmatism). Remove it first, then redo biometry on a stable cornea." },
    { q: "When do you suspect OSSN?", a: "Older or immunosuppressed patient, gelatinous, leukoplakic or papillomatous lesion, feeder vessels, atypical location. AS-OCT or biopsy before excision; every surgical specimen goes to pathology." }
  ],
  mnemonic: { title: "Head, neck, body", text: "Head on the cornea, neck at the limbus, body on the sclera. Pinguecula: no head." },
  compare: {
    title: "Topography: normal vs pterygium",
    normal: { caption: "Regular, nearly spherical curvature." },
    patho: {
      caption: "Induced with-the-rule astigmatism (schematic): flattened horizontal meridian.",
      reveal: [
        "Vertical bowtie: steeper vertical meridian",
        "In reality often asymmetric, with localized flattening in front of the head",
        "Keratometry skewed: redo biometry after excision",
        "Astigmatism often decreases after surgery"
      ]
    }
  }
} });

// c-peripherie
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-peripherie": {
  title: "Peripheral ulcerative keratitis, Terrien and scleritis",
  oneLiner: "Thinning peripheral cornea: lucid interval and blepharitis = marginal keratitis; crescent hugging the limbus with an epithelial defect = PUK, urgent systemic workup.",
  definition: "Diseases of the cornea near the limbus. Inflammatory (PUK, Mooren) or degenerative (Terrien).",
  anatomy: { text: "The peripheral cornea is nourished by the limbal vascular arcades: complement and immune complexes (antibodies bound to their target) deposit there, and inflammatory cells release collagenases that dissolve the stroma. The sclera shares the same collagen and the same vessels: PUK and scleritis often go together. Scleritis is often associated; dellen is a mechanical cause." },
  causal: {
    title: "From systemic disease to perforation",
    steps: [
      { label: "Autoimmune disease or vasculitis", detail: "Rheumatoid arthritis (the most common), granulomatosis with polyangiitis (GPA), lupus, relapsing polychondritis; sometimes no cause (Mooren).", kind: "cause" },
      { label: "Immune complexes at the limbus", detail: "Deposited in the limbal vessels, they activate complement and attract neutrophils.", kind: "mecanisme" },
      { label: "Collagenases dissolving the stroma", detail: "Neutrophils and keratocytes release metalloproteinases (MMPs): the stroma melts under an epithelial defect.", kind: "mecanisme" },
      { label: "Crescent ulcer hugging the limbus", detail: "With no lucid interval, it spreads around the limbus and toward the center.", kind: "lesion" },
      { label: "Descemetocele and perforation", detail: "Without systemic treatment, the melt reaches Descemet and then perforates; the vasculitis can involve the kidneys and lungs.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Systemic immunosuppression", detail: "Oral or IV corticosteroids, then an immunosuppressant chosen with rheumatology: treats the source." },
      { at: 2, label: "Inhibit the collagenases", detail: "Oral doxycycline, preservative-free lubrication; avoid topical NSAIDs (nonsteroidal anti-inflammatory drugs), which promote melting." },
      { at: 4, label: "Glue, tectonic graft", detail: "Cyanoacrylate glue + bandage contact lens for a small perforation; tectonic lamellar or penetrating graft otherwise." }
    ]
  },
  risk: [
    "Long-standing or poorly controlled rheumatoid arthritis",
    "ANCA-associated vasculitis (GPA), lupus, relapsing polychondritis",
    "Blepharitis and rosacea: marginal keratitis",
    "Elevated lesion at the limbus (chemosis, pterygium, bleb): dellen",
    "Recent eye surgery; prolonged topical NSAIDs",
    "Terrien: unknown cause, more common in men, often bilateral"
  ],
  presentation: [
    "Marginal keratitis: moderate irritation, white infiltrates at about 2, 4, 8 or 10 o’clock with a lucid interval, blepharitis",
    "PUK: pain, redness, photophobia; crescent of thinning and epithelial defect hugging the limbus",
    "Terrien: painless, white eye, vision slowly declining from astigmatism",
    "Scleritis: deep pain that wakes the patient at night, tender globe, violaceous redness",
    "Episcleritis: sectoral redness, mild discomfort, normal vision"
  ],
  exam: {
    signs: [
      { sign: "Lucid interval between the infiltrate and the limbus", why: "Present in marginal keratitis; absent in PUK, which hugs the limbus." },
      { sign: "Epithelial defect and crescent-shaped thinning", why: "Active melt of PUK; estimate the thickness lost at each visit." },
      { sign: "Gutter with a lipid line, intact epithelium", why: "Terrien: noninflammatory, often superior, against-the-rule astigmatism." },
      { sign: "Dry depression next to an elevated lesion", why: "Dellen: rehydrates with lubrication or removal of the lesion." },
      { sign: "Blanching on the phenylephrine test", why: "Phenylephrine 2.5% blanches the superficial vessels (episcleritis), not the deep plexus (scleritis)." },
      { sign: "Bluish or white avascular patches of sclera", why: "Necrotizing scleritis or scleromalacia perforans." }
    ],
    tests: [
      { test: "Systemic workup: complete blood count (CBC), creatinine, urinalysis, ESR and CRP (inflammation), rheumatoid factor and anti-CCP (rheumatoid arthritis), ANCA (vasculitis), ANA (lupus), syphilis, chest X-ray", when: "PUK, scleritis, presumed Mooren; tuberculosis and hepatitis before immunosuppression", read: "Underlying disease, renal or pulmonary involvement." },
      { test: "Scraping and cultures", when: "Infiltrate, immunosuppressed patient", read: "Rule out infection before intensifying steroids." },
      { test: "Anterior segment OCT (AS-OCT), pachymetry, topography", when: "Monitoring of thinning", read: "Residual thickness; astigmatism." },
      { test: "B-scan ultrasonography", when: "Scleral pain, mildly red eye, decreased vision", read: "Fluid under Tenon capsule, along the optic nerve (T-sign): posterior scleritis." }
    ]
  },
  ddx: [
    { dx: "Peripheral infectious keratitis", clue: "Dense infiltrate, discharge; positive cultures." },
    { dx: "Mooren ulcer", clue: "Very painful, overhanging edge; negative systemic workup." },
    { dx: "Pellucid marginal degeneration", clue: "Inferior thinning without vessels or lipid." },
    { dx: "Arcus senilis", clue: "Lipid ring with a lucid interval, no thinning." },
    { dx: "Episcleritis", clue: "Superficial vessels that blanch with phenylephrine; little pain." }
  ],
  redFlags: [
    "Defect and thinning against the limbus: PUK, same-day rheumatology",
    "Night pain, violaceous redness that doesn’t blanch, white patch: scleritis",
    "Descemetocele or positive Seidel: shield, no pressure, call your staff"
  ],
  cat: {
    algo: [
      { q: "Limbal crescent with defect and thinning?", yes: "PUK: workup, rheumatology and ophthalmology the same day.", no: "", yesGo: 1, noGo: 2 },
      { q: "Descemetocele or perforation?", yes: "Shield; glue if ≤ 2–3 mm, else tectonic graft.", no: "Systemic steroids; negative workup and overhanging ulcer: Mooren." },
      { q: "Clear interval, blepharitis, little thinning?", yes: "Marginal keratitis: lid care + short mild steroid.", no: "", noGo: 3 },
      { q: "White painless eye, lipid-lined gutter?", yes: "Terrien: topography, optical correction, follow-up.", no: "", noGo: 4 },
      { q: "Deep redness that doesn’t blanch?", yes: "Scleritis: oral NSAIDs; necrotizing: immunosuppression.", no: "Episcleritis: chilled tears ± short oral NSAID." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Marginal keratitis: lid hygiene, soft steroid for a few days",
          "PUK, necrotizing scleritis: systemic corticosteroids, then an immunosuppressant (rheumatology)",
          "Preservative-free lubricants, oral doxycycline; no topical NSAIDs",
          "Non-necrotizing scleritis: oral NSAIDs first"
        ]
      },
      {
        phase: "chirurgie",
        items: ["Cyanoacrylate glue + bandage contact lens; tectonic graft for a large hole", "Terrien: rigid or scleral lens; lamellar graft for extreme thinning"]
      },
      {
        phase: "suivi",
        items: ["PUK: see every 1–3 days at first, then space out; IOP and cataract on steroids"]
      },
      {
        phase: "escalade",
        items: ["Progression on prednisone: cyclophosphamide or rituximab, per rheumatology"]
      }
    ],
    local: "In Quebec, PUK and necrotizing scleritis warrant same-day contact with the center’s rheumatology or internal medicine service; biologics are prescribed by rheumatology."
  },
  treatments: [
    { name: "Lid hygiene + short topical steroid", dose: "Lid hygiene + mild steroid for 1–2 weeks.", pitfall: "Rule out infection first.", how: "Cleaning the lid margin reduces the antigen load; the steroid puts out the reaction.", why: "Marginal keratitis.", pros: "Resolves within a few days.", cons: "Recurrences; rule out infection first.", cx: "IOP rise, superinfection." },
    { name: "Systemic corticosteroids and immunosuppressants", dose: "Oral prednisone, then an immunosuppressant chosen by rheumatology.", qc: "Biologics prescribed by rheumatology.", how: "Suppress the vasculitis at its source: prompt prednisone, then methotrexate, mycophenolate, cyclophosphamide or rituximab.", why: "PUK, necrotizing scleritis, Mooren, NSAID-resistant scleritis.", pros: "Saves the eye, sometimes the patient’s life.", cons: "Choice and monitoring by rheumatology.", cx: "Infections, diabetes, osteoporosis, cytopenias." },
    { name: "Oral doxycycline and lubrication", dose: "Doxycycline 100 mg BID + preservative-free lubricants.", pitfall: "Adjunct only.", how: "Doxycycline: inhibits metalloproteinases; preservative-free lubricants: protect the epithelium.", why: "PUK, corneal melt, rosacea.", pros: "Oral, inexpensive.", cons: "Adjunct only; not before age 8 or in pregnancy.", cx: "Photosensitivity, esophagitis." },
    { name: "Oral NSAIDs", dose: "Oral NSAID (ibuprofen, naproxen) at anti-inflammatory dose.", pitfall: "No topical NSAIDs on a thinned cornea.", how: "Block cyclooxygenase (prostaglandins).", why: "Diffuse or nodular scleritis, persistent episcleritis.", pros: "Often sufficient.", cons: "Insufficient if necrotizing; avoid topical NSAIDs on a thinned cornea.", cx: "Gastric ulcer, renal injury." },
    { name: "Cyanoacrylate glue, bandage contact lens, tectonic graft", dose: "Glue if the hole is ≤ 2–3 mm, else tectonic graft.", pitfall: "Melts again if the disease is active.", how: "The glue plugs the hole and inhibits neutrophils; the graft replaces the melted tissue.", why: "Descemetocele, perforation ≤ 2–3 mm (glue) or larger (graft).", pros: "Seals the globe quickly.", cons: "Re-melting if the disease is active.", cx: "Glue dislodgement, rejection." }
  ],
  treatment: {
    first: [
      "**You (first line)**: marginal keratitis: lid hygiene; scleritis: oral ibuprofen or naproxen.",
      "**Ophthalmologist**: mild steroid, systemic steroids with rheumatology, glue if perforated."
    ],
    refer: ["Same day for a thinning crescent, painful scleritis or white patch — PUK or necrosis.", "Immediately for descemetocele or positive Seidel — open globe."],
    pitfall: ["Ketorolac or another topical NSAID on a thinned cornea: melting."],
    qc: ["PUK and necrotizing scleritis: center rheumatology the same day."]
  },
  pearls: [
    { q: "Marginal keratitis or PUK: which sign do you look at first?", a: "The **lucid interval**: a clear band between the infiltrate and the limbus in marginal keratitis. PUK, hugging the limbus, excavates the stroma and calls for an **urgent systemic workup**." },
    { q: "Why does PUK in rheumatoid arthritis worry the internist as much as you?", a: "It often signals active **systemic vasculitis**: in a classic series (Foster, 1984), mortality was high on conventional treatment, much lower on cytotoxic immunosuppression." },
    { q: "How does the phenylephrine test distinguish episcleritis from scleritis?", a: "**Phenylephrine 2.5%** constricts the superficial vessels within 10–15 minutes: episcleritis blanches, scleritis (deep plexus) persists." }
  ],
  mnemonic: { title: "Terrien, the quiet “T”", text: "Terrien: quiet (white eye), superior, a lipid-lined gutter, against-the-rule astigmatism." },
  compare: {
    title: "Normal vs Terrien (cornea in profile)",
    normal: { caption: "Normal cornea in profile: regular curve, uniform thickness." },
    patho: {
      caption: "Terrien degeneration in profile.",
      reveal: [
        "At the superior edge, the corneal curve becomes irregular and opaque: thinned zone",
        "White-yellowish deposit at the leading edge of the lesion: lipid line",
        "White eye, no redness: noninflammatory disease",
        "Intact epithelium and pannus over the thinned zone"
      ]
    }
  }
} });

// c-depots
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-depots": {
  title: "Corneal opacities, deposits and degenerations",
  oneLiner: "Facing an opacity: which layer, which color, which context? These three questions lead to the deposit, the workup and the treatment.",
  definition: "Degeneration: an acquired change. Deposit: a substance from elsewhere, with its own layer and color.",
  anatomy: { text: "Each layer retains its own deposits: epithelium (whorl-like drug deposits, iron lines), Bowman (calcium), stroma (lipid, blood, scars), peripheral Descemet (copper). The normal cornea has no vessels: the lipid in lipid keratopathy leaks from abnormal vessels growing in from the limbus (corneal arcus, by contrast, forms without vessels). To localize the layer: thin slit beam and retroillumination (lighting by the reflex from the iris or fundus). Layer + color + context: chalky white in Bowman = calcium (band); gray-white peripheral ring = lipid (arcus); yellow at vessel tips = lipid keratopathy; golden brown whorl = drug or Fabry, Descemet ring = copper (Wilson), around a foreign body = rust; diffuse red-brown to green = blood; crystals in a graft = infection. Peripheral brown ring with liver or nervous system involvement: Wilson disease." },
  causal: {
    title: "From context to visible deposit",
    steps: [
      { label: "Local or systemic context", detail: "Age, inflammation, drug, trauma, metabolic disease.", kind: "cause" },
      { label: "Excess or broken barrier", detail: "Blood level too high, or a leaky barrier (endothelium, epithelium, vessels).", kind: "mecanisme" },
      { label: "Colored deposit in one layer", detail: "Chalky white (calcium), gray-white or yellow (lipid), golden brown (iron, copper, drug), red-brown to green (blood).", kind: "lesion" },
      { label: "Often no symptoms", detail: "In the visual axis: glare, blur; elevated surface: irritation.", kind: "signe" },
      { label: "Clue to a disease to treat", detail: "Hypercalcemia, dyslipidemia, Wilson disease, infection, drug toxicity.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Treat the cause", detail: "Control the uveitis, correct the calcium or lipids, review the drug, treat Wilson disease." },
      { at: 1, label: "Close the vessels, lower the IOP", detail: "Laser or diathermy of the feeder vessels (lipid); IOP control and washout of the hyphema (blood)." },
      { at: 2, label: "Remove the deposit", detail: "EDTA chelation (calcium), burr (rust), PTK (haze, residual calcium), graft for deep opacity." }
    ]
  },
  risk: [
    "Advanced age: arcus, benign degenerations",
    "Chronic uveitis (especially juvenile idiopathic arthritis, JIA, in children), phthisical (shrunken) eye",
    "Corneal neovascularization: HSV (herpes simplex), zoster, trauma, contact lenses",
    "Drugs and agents: amiodarone, hydroxychloroquine, topical ciprofloxacin; intraocular silicone oil",
    "Hyperparathyroidism, renal failure, familial dyslipidemia, Wilson and Fabry diseases",
    "Hyphema with raised IOP, metallic foreign body, PRK (photorefractive keratectomy), graft on steroids"
  ],
  presentation: [
    "Usually an incidental finding, normal vision",
    "Irritation: calcium lifting the epithelium, rust ring",
    "Blur, glare if the opacity is central",
    "Systemic clue: tremor, liver disease (Wilson), burning pain in the extremities (Fabry), arthritis (JIA)"
  ],
  exam: {
    signs: [
      { sign: "Corneal arcus: gray-white ring in the peripheral stroma, separated from the limbus by a clear band (lucid interval)", why: "Lipid; unremarkable after age 50; before that: lipid panel; unilateral: carotid disease on the side without the arcus." },
      { sign: "Band keratopathy: chalky white interpalpebral plaque in Bowman layer, starting at 3 and 9 o’clock, with holes", why: "Calcium (holes = where nerves pass through); uveitis, phthisis, silicone oil, chronic corneal edema, hypercalcemia, renal failure." },
      { sign: "Cornea verticillata: golden-brown whorl-like lines in the epithelium, below the pupil", why: "Amiodarone, hydroxychloroquine, Fabry disease; vision rarely affected." },
      { sign: "Brown-green or golden ring in peripheral Descemet, superior and inferior first", why: "Kayser-Fleischer ring (copper): Wilson disease; sometimes seen only on gonioscopy." },
      { sign: "Yellow deposit with feathery edges at the end of stromal vessels", why: "Lipid keratopathy: leakage from abnormal vessels." },
      { sign: "Branching white crystals in a graft, little redness", why: "Infectious crystalline keratopathy: viridans streptococci under a biofilm; culture it." }
    ],
    tests: [
      { test: "Slit lamp: thin slit beam, retroillumination, gonioscopy", when: "Any opacity", read: "Layer; ghost lines and ghost vessels; early Kayser-Fleischer." },
      { test: "Targeted blood work, with the primary care physician", when: "Arcus before age 50; band keratopathy without an ocular cause; Kayser-Fleischer", read: "Lipids; calcium, phosphate, PTH (parathyroid hormone), creatinine; ceruloplasmin and 24-h urine copper." },
      { test: "Medication list", when: "Epithelial whorl, plaque in an ulcer", read: "Amiodarone, hydroxychloroquine, ciprofloxacin; otherwise think Fabry (alpha-galactosidase A)." },
      { test: "Culture (deep scraping or biopsy); syphilis serology", when: "Crystals on a graft; ghost vessels", read: "Viridans most often. Positive treponemal test: past or active syphilis (nontreponemal test for activity); tuberculosis depending on context; hearing loss or vertigo: Cogan syndrome (vasculitis of the eye and inner ear)." }
    ]
  },
  ddx: [
    { dx: "Corneal blood staining", clue: "Red-brown to green stroma after a prolonged hyphema (blood in the anterior chamber), raised IOP; clears from the periphery toward the center." },
    { dx: "Ciprofloxacin deposits", clue: "Chalky white plaque in the bed of an ulcer treated hourly." },
    { dx: "Rust ring", clue: "Brown halo around a ferrous foreign body, formed within hours." },
    { dx: "Haze after PRK (photorefractive keratectomy)", clue: "Reticular subepithelial haze in the treated zone, weeks or months after the laser." },
    { dx: "Interstitial keratitis scar", clue: "Deep stromal opacity, ghost (empty) vessels; bilateral: congenital syphilis; unilateral: mostly HSV." }
  ],
  redFlags: [
    "Crystals or plaque on a graft under steroid: infection until proven otherwise",
    "Hyphema with raised IOP: blood staining; sickle cell: fragile optic nerve",
    "Band in a child: JIA uveitis, often a white eye"
  ],
  cat: {
    algo: [
      { q: "Redness, pain, infiltrate or crystals on a graft?", yes: "Infection: cultures, ophthalmology the same day.", no: "", noGo: 1 },
      { q: "Chalky white band in Bowman?", yes: "Calcium: calcium–phosphate workup, PTH; EDTA if bothersome.", no: "", noGo: 2 },
      { q: "Gray-white peripheral ring?", yes: "Arcus: lipid panel if under 50.", no: "", noGo: 3 },
      { q: "Golden brown?", yes: "Whorl: drug, Fabry; Descemet: Wilson; rust: remove.", no: "", noGo: 4 },
      { q: "Stromal deposit with vessels or blood?", yes: "Lipid: close the vessels; blood: IOP, washout.", no: "Dystrophy, haze or scar?" }
    ],
    phases: [
      {
        phase: "observation",
        items: ["Arcus, cornea verticillata: reassure, document"]
      },
      {
        phase: "medical",
        items: [
          "Lubricants; bandage contact lens if the band is irritating",
          "Topical steroid: haze, active interstitial keratitis",
          "Crystalline infection: intensive antibiotic guided by culture, steroid reduced cautiously"
        ]
      },
      {
        phase: "laser",
        items: ["PTK ± mitomycin C; laser or diathermy of the feeder vessels"]
      },
      {
        phase: "chirurgie",
        items: [
          "Band: epithelial debridement then disodium EDTA",
          "Hyphema: washout for persistently raised IOP or early blood staining",
          "Deep central opacity: DALK or PK"
        ]
      },
      {
        phase: "suivi",
        items: ["Band: recurs if the cause persists; Wilson: the ring fades on treatment"]
      }
    ],
    local: "In Quebec, optometrists often refer these opacities; systemic workup with the family physician. Disodium EDTA: hospital-pharmacy preparation."
  },
  treatments: [
    { name: "EDTA chelation", dose: "Disodium EDTA on a sponge, after epithelial scraping.", pitfall: "Recurs if the cause persists.", qc: "Hospital-prepared.", how: "After epithelial debridement, a sponge soaked in disodium EDTA (chelator) dissolves the calcium.", why: "Symptomatic band keratopathy.", pros: "Effective, done in a procedure room.", cons: "Recurs if the cause persists.", cx: "Delayed healing, infection." },
    { name: "Rust ring removal", dose: "Needle, then rotating burr, under topical anesthesia.", pitfall: "Deep residue: review rather than dig.", how: "Under topical anesthesia: needle, then a low-speed rotary burr.", why: "Oxidized iron irritates and delays healing.", pros: "Rapid relief.", cons: "Deep or central rust: remove most of it; the residue often surfaces and is removed at close follow-up.", cx: "Perforation (rare), scar." },
    { name: "Vessel closure", dose: "Argon laser, fine-needle diathermy or anti-VEGF (off-label).", pitfall: "Slow, variable effect.", how: "Argon laser or fine-needle diathermy of the feeder vessel; anti-VEGF (blocks vessel growth) as drops or subconjunctival injection, off-label.", why: "Progressive lipid keratopathy.", pros: "Can make the lipid regress.", cons: "Slow, variable.", cx: "Stromal hemorrhage, thinning." },
    { name: "PTK ± mitomycin C", dose: "Excimer laser ± mitomycin C against haze.", pitfall: "Superficial only.", how: "Excimer laser that smooths the surface; mitomycin C slows the return of haze.", why: "Persistent haze, residual calcium.", pros: "Avoids a graft.", cons: "Superficial only.", cx: "Delayed healing, recurrence." }
  ],
  treatment: {
    first: [
      "**You (first line)**: remove a superficial foreign body; blood tests by color (lipids, calcium, copper).",
      "**Ophthalmologist**: rust ring removal, EDTA for calcium, vessel closure."
    ],
    refer: ["Same day for crystals or infiltrate on a graft — infection.", "This week for a rust ring or a bothersome calcium band — office procedure."],
    pitfall: ["Digging out deep rust with a needle: risk of perforation."]
  },
  pearls: [
    { q: "Corneal arcus in a 38-year-old man: what do you do?", a: "Think familial hypercholesterolemia: lipid panel, letter to the family physician. Unilateral arcus: carotid stenosis on the side **without** the arcus." },
    { q: "Kayser-Fleischer or Fleischer: what is the difference?", a: "**Kayser-Fleischer**: copper in peripheral Descemet, Wilson disease. **Fleischer**: epithelial iron around the cone. Other iron lines: Hudson-Stähli (inferior third, age), Stocker (pterygium), Ferry (filtering bleb)." },
    { q: "White plaque in an ulcer on ciprofloxacin: getting worse?", a: "Often a drug precipitate, which delays closure. Stable infiltrate and reaction: switch antibiotics; if in any doubt, reculture." }
  ],
  mnemonic: { title: "Layer + color + context", text: "Chalky white = calcium; gray ring = lipid; golden brown = iron, copper or drug." },
  compare: {
    title: "Normal cornea vs band keratopathy",
    normal: { caption: "Normal cornea: transparent, sharp iris detail." },
    patho: {
      caption: "Band keratopathy in hyperparathyroidism.",
      reveal: [
        "Horizontal white-gray band in the inferior half of the cornea, in front of the pupil",
        "Clear superior cornea, in the area covered by the lid",
        "Granular texture of the band, with small clearer areas",
        "No visible infiltrate or ulcer: chronic deposit, not an infection"
      ]
    }
  }
} });

// c-dystrophies
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-dystrophies": {
  title: "Corneal dystrophies",
  oneLiner: "Bilateral, symmetric opacities, without vessels or inflammation, often familial: think dystrophy, localize the layer, then protect the surface.",
  definition: "Inherited: an abnormal substance builds up in one corneal layer. Both eyes, without inflammation.",
  anatomy: { text: "The cornea has five classic layers: epithelium (≈ 50 µm, self-renewing), Bowman layer (8–12 µm, does not regenerate), stroma (≈ 90% of the thickness, highly ordered collagen), Descemet and endothelium (a pump that does not divide). Any deposit that disrupts this order scatters light. The IC3D classification (International Committee for Classification of Corneal Dystrophies) sorts dystrophies by layer and by gene; it groups Reis-Bücklers, granular and lattice under the TGFBI gene. Stain mnemonic: “Marilyn Monroe Always Gets Her Men in LA City” (Macular – Mucopolysaccharides – Alcian; Granular – Hyaline – Masson; Lattice – Amyloid – Congo)." },
  causal: {
    title: "From gene to opacity",
    steps: [
      { label: "Inherited mutation", detail: "Often dominant (50% risk per child): TGFBI for Reis-Bücklers, granular and lattice; CHST6, recessive, for macular.", kind: "cause" },
      { label: "Abnormal substance accumulating", detail: "Hyaline (granular), amyloid (lattice), mucopolysaccharides (macular), over years.", kind: "mecanisme" },
      { label: "Bilateral opacities without vessels", detail: "Shape, depth and clarity of the stroma between them point to the type.", kind: "lesion" },
      { label: "Weakened epithelial anchoring", detail: "Deposits under the epithelium undo its anchoring: painful recurrent erosions.", kind: "mecanisme" },
      { label: "Glare, decreased vision", detail: "Opacities in the visual axis or a surface that has become irregular.", kind: "signe" },
      { label: "Recurrence after surgery", detail: "Deposits often recur in the graft or after PTK (excimer laser phototherapeutic keratectomy).", kind: "complication" }
    ],
    levers: [
      { at: 3, label: "Surface care", detail: "Lubricants, NaCl 5% ointment at bedtime, bandage contact lens during episodes: as for recurrent erosion." },
      { at: 4, label: "PTK", detail: "The excimer laser ablates superficial opacities (Bowman, anterior stroma) and smooths the surface; can be repeated." },
      { at: 4, label: "DALK or PK", detail: "Deep opacities: deep anterior lamellar keratoplasty (DALK) if the endothelium is healthy, full-thickness penetrating keratoplasty (PK) otherwise." },
      { at: 0, label: "Genetic counseling", detail: "Gene testing, examination of family members and, with a TGFBI mutation, no LASIK (refractive laser under a corneal flap)." }
    ]
  },
  risk: [
    "Family history of opacities or corneal grafts",
    "Known TGFBI mutation (autosomal dominant)",
    "Consanguineous parents: macular dystrophy (recessive)",
    "Corneal trauma or LASIK: flares of TGFBI dystrophies"
  ],
  presentation: [
    "Often an incidental finding at the optometrist’s, vision preserved",
    "Sharp pain on waking from recurrent erosions (Reis-Bücklers, lattice), sometimes from childhood",
    "Glare, slow decline in vision; low vision early in macular dystrophy",
    "Both eyes, symmetric; white eye between episodes"
  ],
  exam: {
    signs: [
      { sign: "Granular dystrophy type 1: sharply demarcated white “breadcrumb” opacities in the central anterior stroma, clear stroma between them", why: "Sharp borders and clear intervening stroma: not macular; periphery spared." },
      { sign: "Granular type 2, or Avellino dystrophy: flakes or stars, with a few lines", why: "LASIK makes the deposits proliferate at the flap interface." },
      { sign: "Lattice dystrophy type 1: fine, branching, refractile (glistening) lines in the central stroma", why: "Amyloid; best seen on retroillumination (fundus reflex); frequent erosions." },
      { sign: "Macular dystrophy: diffuse stromal haze out to the limbus, ill-defined gray spots, thin cornea", why: "Recessive; involves the full width and thickness, including the endothelium." },
      { sign: "Reis-Bücklers dystrophy: reticular gray opacities at the level of Bowman layer", why: "Erosions from childhood; rapid recurrence after PTK or graft." },
      { sign: "Posterior polymorphous corneal dystrophy (PPCD): vesicles, bands with parallel edges or plaques on Descemet", why: "Often asymptomatic; can extend into the angle: synechiae, glaucoma." }
    ],
    tests: [
      { test: "Slit lamp: thin slit beam, then retroillumination", when: "Any bilateral opacity", read: "Thin slit = depth; retroillumination = lines, vesicles." },
      { test: "Pachymetry, specular microscopy, gonioscopy", when: "Macular, PPCD, before a graft", read: "Thin cornea: macular; dark vesicles on specular: PPCD; synechiae: glaucoma risk." },
      { test: "Genetic testing (TGFBI and other genes)", when: "Diagnostic doubt, family, request for refractive surgery", read: "Confirms the type and inheritance; TGFBI mutation = no LASIK." }
    ]
  },
  ddx: [
    { dx: "Reminders: epithelial basement membrane dystrophy (EBMD) and Fuchs", clue: "EBMD: maps, dots, fingerprints in the epithelium (see Recurrent erosion fiche). Fuchs: guttae and edema after age 50 (see Fuchs fiche)." },
    { dx: "Degenerations and deposits", clue: "Acquired, asymmetric or peripheral, with a context: age, uveitis, drug." },
    { dx: "Scar from infection, trauma or interstitial keratitis", clue: "Unilateral, history of red eye, vessels." },
    { dx: "Infectious crystalline keratopathy", clue: "Branching crystals in a graft on steroids." },
    { dx: "Haab striae (congenital glaucoma)", clue: "Curvilinear breaks in Descemet, large cornea, ↑ IOP; PPCD bands have parallel edges." },
    { dx: "Schnyder dystrophy", clue: "Cholesterol crystals and early arcus: lipid panel." }
  ],
  redFlags: [
    "Unilateral, red or painful opacity: infection, not dystrophy",
    "Stromal opacities before LASIK or PRK: rule out a TGFBI dystrophy",
    "Infant with cloudy corneas: rule out congenital glaucoma"
  ],
  cat: {
    algo: [
      { q: "Unilateral, red or painful opacity?", yes: "Not a dystrophy: infection or inflammation, ophthalmology.", no: "", noGo: 1 },
      { q: "Bilateral, symmetric, avascular, familial?", yes: "", no: "Degeneration, deposit or scar.", yesGo: 2 },
      { q: "Epithelium only (maps, dots, fingerprints)?", yes: "EBMD: see Recurrent erosion.", no: "", noGo: 3 },
      { q: "Opacities in Bowman or the stroma?", yes: "No LASIK (TGFBI test); PTK if superficial, graft if deep.", no: "", noGo: 4 },
      { q: "Guttae or Descemet lesions?", yes: "Guttae: Fuchs; vesicles or bands: PPCD (IOP).", no: "Reconsider: acquired deposit?" }
    ],
    phases: [
      {
        phase: "observation",
        items: ["Functional vision: annual follow-up, photos, examination of family members"]
      },
      {
        phase: "medical",
        items: ["Erosions: lubricants, NaCl 5% ointment at bedtime, bandage contact lens", "PPCD with ↑ IOP: treat the glaucoma"]
      },
      {
        phase: "laser",
        items: ["PTK: superficial opacities; can be repeated; possible hyperopic shift"]
      },
      {
        phase: "chirurgie",
        items: ["DALK if the endothelium is healthy; PK if the full thickness or the endothelium is involved; DMEK or DSAEK for endothelial edema"]
      },
      {
        phase: "suivi",
        items: ["Recurrence in the graft: rapid (Reis-Bücklers), frequent (granular, lattice), less common (macular)"]
      }
    ],
    local: "In Quebec, the optometrist often finds these opacities; refer for ↓ vision, erosions or planned refractive surgery. Genetic testing: through medical genetics, depending on local access."
  },
  treatments: [
    { name: "Surface care", dose: "5% NaCl ointment at bedtime; bandage lens in flares.", pitfall: "Doesn’t remove the opacities.", how: "Lubricants, NaCl 5% ointment at bedtime, soft bandage contact lens during episodes.", why: "Recurrent erosions.", pros: "Simple, low risk.", cons: "Does not remove the opacities.", cx: "Infection under the lens." },
    { name: "PTK (phototherapeutic keratectomy)", dose: "Excimer laser for Bowman or anterior stroma.", pitfall: "The deposits come back.", how: "Excimer laser that ablates and smooths the surface.", why: "Bowman or anterior stromal opacities; refractory erosions.", pros: "No graft, can be repeated.", cons: "Useless for deep disease; deposits recur.", cx: "Hyperopic shift, haze, infection." },
    { name: "DALK (deep anterior lamellar keratoplasty)", dose: "Lamellar graft if the endothelium is healthy.", pitfall: "Technically demanding.", how: "Deep anterior lamellar graft: replaces epithelium and stroma, keeps the patient’s Descemet and endothelium.", why: "Stromal dystrophy, healthy endothelium.", pros: "No endothelial rejection, stronger globe.", cons: "Demanding technique.", cx: "Descemet perforation (conversion to PK), recurrence." },
    { name: "Penetrating keratoplasty (PK)", dose: "Full-thickness graft if the endothelium is diseased.", pitfall: "Slow recovery, astigmatism.", how: "Replacement of a full-thickness disc of cornea, sutured.", why: "Full-thickness involvement or diseased endothelium.", pros: "Replaces all layers.", cons: "Slow recovery, astigmatism.", cx: "Rejection, glaucoma, recurrence in the graft." }
  ],
  treatment: {
    first: [
      "**You (first line)**: erosions: 5% NaCl ointment at bedtime; avoid refractive surgery.",
      "**Ophthalmologist**: PTK for superficial opacities; DALK or PK if deep."
    ],
    refer: ["Routine ophthalmology follow-up — sooner if vision ↓, repeated erosions or planned LASIK."],
    pitfall: ["LASIK or PRK with a TGFBI dystrophy: deposits proliferate.", "PTK: deposits come back over time."]
  },
  pearls: [
    { q: "How do you tell granular, lattice and macular apart?", a: "Granular: discrete breadcrumbs, clear stroma between them. Lattice: branching lines, erosions. Macular: haze out to the limbus, thin cornea, **recessive** (the other two are dominant)." },
    { q: "A few flake-like opacities in a LASIK candidate: what do you do?", a: "Think Avellino dystrophy: TGFBI testing before any refractive surgery. LASIK makes the deposits proliferate at the interface and can ruin vision." },
    { q: "Posterior polymorphous dystrophy or ICE syndrome?", a: "PPCD: bilateral, inherited, often silent. ICE (iridocorneal endothelial syndrome): unilateral, acquired, distorted iris. Both can cause synechiae and glaucoma: gonioscopy and IOP." }
  ],
  mnemonic: { title: "Stains for the stromal dystrophies", text: "Macular: mucopolysaccharides, Alcian blue. Granular: hyaline, Masson. Lattice: amyloid, Congo red." },
  compare: {
    title: "Normal cornea vs granular dystrophy",
    normal: { caption: "Transparent cornea, no deposit." },
    patho: {
      caption: "Granular dystrophy: breadcrumb opacities (EyeRounds).",
      reveal: [
        "Sharply demarcated white-gray opacities, as grains or small rings, in front of the pupil",
        "Some lesions aligned in streaks in the inferior half",
        "Clear cornea between the opacities",
        "Lesions clustered in the central cornea; no vessels"
      ]
    }
  }
} });

// c-greffe
G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, { "c-greffe": {
  title: "Corneal graft: rejection and complications (PK, DSAEK, DMEK)",
  oneLiner: "Corneal graft patient with a red eye, photophobia, ↓ vision or pain: rejection until proven otherwise, intensive steroids the same day.",
  definition: "A graft replaces the diseased cornea, whole or one layer. Rejection treated early is often reversible.",
  anatomy: { text: "The cornea has immune privilege: no blood or lymphatic vessels, and an anterior chamber that dampens immunity; neovascularization (abnormal vessels growing in from the limbus) causes this privilege to be lost. Depending on the diseased layer, the graft replaces the full thickness (PK, penetrating keratoplasty), the stroma only while keeping the patient’s endothelium (DALK, deep anterior lamellar keratoplasty), or the endothelium and Descemet, with a thin layer of stroma (DSAEK) or without (DMEK). Rejection remains a major cause of graft failure." },
  causal: {
    title: "From foreign graft to failure",
    steps: [
      { label: "Donor antigens", detail: "Foreign HLA antigens (cell identity markers): the more tissue grafted, the more targets.", kind: "cause" },
      { label: "Immune privilege lost", detail: "Neovascularization, inflammation, loose sutures, herpes or stopping steroids let lymphocytes in.", kind: "mecanisme" },
      { label: "Attack on one layer of the graft", detail: "Epithelium, stroma or endothelium; endothelial rejection is the most serious.", kind: "lesion" },
      { label: "RSVP symptoms", detail: "Redness, sensitivity to light, ↓ vision, pain; sometimes no symptoms.", kind: "signe" },
      { label: "Endothelial death, failure", detail: "Destroyed cells do not regrow: permanent edema, a regraft is needed.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Graft less tissue", detail: "DALK (no foreign endothelium, so no endothelial rejection) or DMEK (lowest rejection rate) when the disease allows." },
      { at: 1, label: "Prevention", detail: "Topical steroid on a slow taper then maintenance, oral antiviral if herpes, removal of loose sutures." },
      { at: 2, label: "Intensive steroids", detail: "Prednisolone 1% hourly at the first signs: stops the attack before the endothelium is destroyed." },
      { at: 4, label: "Regraft", detail: "If edema persists: a new graft, at a higher risk of rejection." }
    ]
  },
  risk: [
    "Deep corneal neovascularization in several quadrants",
    "Prior rejection or failure; large or decentered graft",
    "Inflammation: uveitis, herpes (HSV), chemical burn; young age",
    "Anterior chamber lens, glaucoma tube, synechiae (iris-cornea adhesions)",
    "Loose sutures; stopping steroids too quickly"
  ],
  presentation: [
    "Mostly in the first year, but possible years later (PK)",
    "RSVP, or found without symptoms at a routine exam",
    "Triggers: stopping steroids, loose suture, infection, surgery"
  ],
  exam: {
    signs: [
      { sign: "Elevated epithelial rejection line that stains with fluorescein", why: "Epithelial rejection, the most benign." },
      { sign: "Subepithelial infiltrates (Krachmer spots) on the graft", why: "Stromal rejection; looks like adenovirus, but confined to the graft." },
      { sign: "Keratic precipitates (KP: clusters of inflammatory cells on the endothelium), Khodadoust line", why: "Endothelial rejection: the KP line advances and leaves an edematous graft behind it." },
      { sign: "Graft edema, clear recipient cornea", why: "Involvement confined to the graft: rejection rather than uveitis or raised IOP (intraocular pressure)." },
      { sign: "Loose, broken or infiltrate-surrounded sutures", why: "Trigger rejection and abscess: remove them, after culture if there is an infiltrate." }
    ],
    tests: [
      { test: "Fluorescein and Seidel test (concentrated fluorescein diluted by leaking aqueous = bright green stream)", when: "Any unscheduled visit", read: "Defect + infiltrate = infection; positive Seidel = leaking wound." },
      { test: "Pachymetry (corneal thickness)", when: "Rejection, monitoring of treatment", read: "↑ thickness = edema; a decrease confirms response." },
      { test: "Topography (curvature map)", when: "Astigmatism after PK", read: "Cut the suture in the steepest meridian first." },
      { test: "Anterior segment OCT", when: "Hazy cornea after DMEK", read: "Detached graft: air reinjection." }
    ]
  },
  ddx: [
    { dx: "Infectious keratitis", clue: "Infiltrate + epithelial defect, often at a suture: culture before increasing steroids." },
    { dx: "Herpes in the graft", clue: "Dendrite or endotheliitis, history of HSV." },
    { dx: "Late endothelial failure", clue: "Slow edema, without inflammation or KP." },
    { dx: "Steroid-induced glaucoma (↑ IOP on steroids)", clue: "Epithelial edema, raised IOP, no KP." },
    { dx: "Primary graft failure", clue: "Graft edematous from postoperative day 1, never clear: nonfunctional donor endothelium." }
  ],
  redFlags: [
    "RSVP in a grafted patient: same-day exam",
    "Infiltrate on the graft: culture before adjusting steroids",
    "Trauma to a PK, raised IOP or detached DMEK graft"
  ],
  cat: {
    algo: [
      { q: "Graft with redness, photophobia, vision ↓ or pain?", yes: "Ophthalmologist the same day.", no: "Routine follow-up; drops taken every day.", yesGo: 1 },
      { q: "Infiltrate or defect, especially near a suture?", yes: "Infection: cultures, antibiotics, suture removal.", no: "", noGo: 2 },
      { q: "Line, infiltrates, KP or graft edema?", yes: "Rejection: prednisolone 1% hourly + cycloplegic.", no: "IOP, herpes, loose suture, dry eye?", yesGo: 3 },
      { q: "Severe endothelial rejection or high risk?", yes: "Add periocular or oral steroid.", no: "", yesGo: 4, noGo: 4 },
      { q: "Graft still edematous after a few weeks?", yes: "Failure: regraft (often DMEK or DSAEK).", no: "Slow taper, then maintenance dose." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Rejection: prednisolone acetate 1% hourly (or difluprednate 0.05%), then slow taper",
          "Cycloplegic (cyclopentolate: rests the ciliary muscle)",
          "Severe: sub-Tenon triamcinolone (under Tenon capsule, the envelope of the globe) or oral prednisone",
          "History of herpes: valacyclovir 500 mg PO TID or acyclovir 400 mg PO 5 times/day, then prophylaxis"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "Removal of loose sutures; selective topography-guided removal",
          "Air reinjection (rebubbling); repair of a dehisced wound; regraft; keratoprosthesis (artificial cornea) after repeated failures"
        ]
      },
      {
        phase: "suivi",
        items: ["Steroid tapered over months, often 1 drop a day long term; IOP at every visit; protective eyewear after PK"]
      },
      {
        phase: "escalade",
        items: ["High risk: systemic immunosuppression (cyclosporine, mycophenolate) with internal medicine"]
      }
    ],
    local: "In Quebec, grafts come from post-mortem tissue donation, with the consent of the person or their family; a graft patient must be able to be seen the same day for any RSVP symptom."
  },
  treatments: [
    { name: "Intensive topical steroids", dose: "Prednisolone 1% hourly, then slow taper.", pitfall: "Rule out infection before increasing.", how: "Prednisolone acetate 1% drops hourly (± ointment at night), then a slow taper: they block the lymphocyte attack on the graft.", why: "Any rejection, at the first signs.", pros: "Often reversible if treated early.", cons: "Rule out infection first.", cx: "↑ IOP, cataract, herpes reactivation, infection." },
    { name: "Periocular or oral steroids", dose: "Sub-Tenon triamcinolone or a short course of oral prednisone.", pitfall: "An injection can’t be removed.", how: "Sub-Tenon triamcinolone injection, or a short course of oral prednisone, in addition to drops.", why: "Severe endothelial rejection, high risk, poor adherence.", pros: "More potent and sustained effect.", cons: "The injection cannot be removed.", cx: "Prolonged ↑ IOP; blood glucose, mood, stomach." },
    { name: "Suture removal (PK)", dose: "Removal at the slit lamp, under topical anesthesia.", pitfall: "Too early: the wound can open.", how: "At the slit lamp, under topical anesthesia: the suture is cut with a fine needle and removed with forceps.", why: "Loose or broken suture; astigmatism (steepest meridian).", pros: "Less astigmatism and fewer rejection triggers.", cons: "Too early: the wound opens.", cx: "Infection, rejection, leak." },
    { name: "Air reinjection (rebubbling)", dose: "New air or SF6 bubble, patient lying face up.", pitfall: "Sometimes needs repeating.", how: "A new air or gas bubble (SF6, which lasts longer) injected into the anterior chamber to reattach the graft; patient positioned supine.", why: "Centrally detached DMEK or DSAEK graft.", pros: "Simple, often effective.", cons: "Sometimes needs repeating.", cx: "↑ IOP (bubble causing pupillary block), endothelial cell loss." }
  ],
  treatment: {
    first: [
      "**You (first line)**: check the steroid drops are being used; never stop them.",
      "**Ophthalmologist**: prednisolone 1% hourly for rejection; cultures if infiltrate."
    ],
    refer: ["Same day for any graft patient with RSVP — rejection treated early is reversible.", "Immediately after a blow to a PK — the wound can open."],
    pitfall: ["Raising prednisolone on an uncultured infiltrate: masked infection."],
    qc: ["Grafts come from tissue donation after death."]
  },
  pearls: [
    { q: "Rank the grafts by rejection risk.", a: "PK > DSAEK > DMEK: more foreign tissue, more risk. DALK keeps the recipient’s endothelium: **no endothelial rejection**, but epithelial or stromal rejection is still possible." },
    { q: "What do you tell a graft patient?", a: "**RSVP** = be seen the same day. Never stop steroids on your own and wear protective eyewear: a PK remains vulnerable to trauma for life." },
    { q: "Khodadoust line: what do you do?", a: "Endothelial rejection (advancing KP line, edema behind it): prednisolone 1% hourly, cycloplegic, ± periocular or oral steroid, antiviral if herpes." }
  ],
  mnemonic: { title: "RSVP", text: "Redness, Sensitivity to light, Vision ↓, Pain: grafted patient seen the same day." },
  compare: {
    title: "Anterior segment: normal vs endothelial rejection",
    normal: { caption: "White eye, clear cornea." },
    patho: {
      caption: "Endothelial rejection (schematic): injected eye and keratic precipitates.",
      reveal: [
        "Redness around the limbus (ciliary flush)",
        "Keratic precipitates (KP) in the inferior half",
        "Look for: Khodadoust line and edema confined to the graft",
        "The peripheral recipient cornea stays clear"
      ]
    }
  }
} });

// Tree vignettes (cat.vignette): one short case shown above the decision tree
(function () {
  var V = {
    "c-secheresse": "A 58-year-old woman: burning eyes by evening, worse on screens. Thick lid margins, unstable tears, inferior fluorescein dots.",
    "c-bacterienne": "A 24-year-old man who sleeps in his contact lenses. Red, painful eye since yesterday; 3 mm white infiltrate under an epithelial defect.",
    "c-atypiques": "A 31-year-old woman who rinses her lenses in tap water. Severe pain for 3 weeks despite moxifloxacin; ring infiltrate.",
    "c-herpes": "A 45-year-old man with a red, watery left eye. Branching lesion with terminal bulbs on fluorescein, reduced corneal sensation, no rash.",
    "c-keratocone": "An allergic 15-year-old boy who rubs his eyes. His astigmatism changes at every visit. Topography: inferior steepening.",
    "c-fuchs": "A 68-year-old woman: blurred vision in the morning, better by afternoon, halos. Central guttae in both eyes, thick cornea.",
    "c-erosion": "A 40-year-old man woken by sharp right-eye pain, the third time this month. Scratched by a fingernail 6 months ago.",
    "c-pterygion": "A 52-year-old roofer with an irritated right eye. Pink triangular nasal membrane 3 mm onto the cornea; new astigmatism.",
    "c-greffe": "A 62-year-old woman, corneal graft 14 months ago, steroid drops stopped. Redness, photophobia and falling vision for 3 days.",
    "c-brulure": "A 35-year-old man: drain cleaner in the left eye 10 minutes ago. He arrives at the ED in severe pain, without rinsing.",
    "c-dystrophies": "A 34-year-old woman with glare in both eyes; her mother had a graft. Symmetric white stromal opacities, no vessels, quiet eye.",
    "c-depots": "A 28-year-old man followed for tremor and abnormal liver tests. Golden-brown ring at the periphery of both corneas.",
    "c-surface": "A 22-year-old student: red, watery right eye, then the other. Her roommate too. Follicles, preauricular node, normal vision.",
    "c-peripherie": "A 66-year-old woman with rheumatoid arthritis. Very painful right eye; crescent ulcer hugging the limbus, thinned stroma."
  };
  Object.keys(V).forEach(function (id) { var f = G.OPH_EN.fiches[id] = G.OPH_EN.fiches[id] || {}; f.cat = f.cat || {}; f.cat.vignette = V[id]; });
})();
