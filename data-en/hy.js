// English overlay for the high-yield layer (G.OPH.hy). Keyed like data/hy-*.js; arrays replace the FR ones wholesale.
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH_EN = G.OPH_EN || {};
G.OPH_EN.hy = G.OPH_EN.hy || {};
Object.assign(G.OPH_EN.hy, {

  "b-bases": {
    essentials: [
      "First reflex: **triage** what threatens vision or the globe within the next few hours.",
      "**Ulcer** = epithelial defect + infiltrate with tissue loss: infectious until proven otherwise.",
      "The **topical steroid** is the most useful and the most dangerous tool in the clinic.",
      "Modern keratoplasty: **replace only the diseased layer** (PK, DALK, DSAEK or DMEK).",
      "At every visit: VA, IOP, slit lamp **before and after fluorescein**, drawing of the lesion."
    ],
    cloze: [
      "An ulcer so deep that only the bulging [[Descemet|Descemet membrane|Descemet's membrane]] still holds in the contents of the eye.",
      "The endothelium does not divide: every cell lost is lost [[permanently|for good|irreversibly]].",
      "Inflammatory cell deposits stuck to the endothelium are called [[KP|keratic precipitates|KPs]].",
      "Unlike topography, tomography sees the posterior surface and the [[thinnest|thinnest point]] point.",
      "An insensate cornea that heals poorly defines [[neurotrophic]] keratitis.",
      "Steroid is dangerous with a dendrite, fungus, uncontrolled ameba, uncovered bacterium or, even when covered, [[Nocardia]]."
    ],
    triage: [
      { s: "After trauma, concentrated fluorescein is diluted into a bright green stream under cobalt blue light.", u: "urgent", why: "Positive Seidel = laceration or perforation: same day; shield the globe, no pressure on the eye." },
      { s: "Epithelial defect that does not close despite a week of intensive lubrication.", u: "rapide", why: "Semi-urgent: escalate to a bandage contact lens or plugs, then amniotic membrane or tarsorrhaphy." },
      { s: "Stable chronic dry eye, referred by the optometrist for follow-up.", u: "routine", why: "Elective (weeks to months): tears, lid care, follow-up." }
    ],
    cues: [
      "Size, location, depth, fluorescein, anterior chamber",
      "Triage: urgent, semi-urgent or elective",
      "Treat the cause, protect the epithelium, control inflammation"
    ]
  },

  "c-secheresse": {
    essentials: [
      "Often not a lack of tears but poor-quality meibomian oil (**MGD**).",
      "DEWS III: **no symptoms, no dry eye**; OSDI-6 ≥ 4, then one objective sign.",
      "**Inferior** punctate keratitis: MGD, exposure or toxic drops; interpalpebral: aqueous deficiency.",
      "Dry eyes on glaucoma drops: **BAK** toxicity, switch to preservative-free drops."
    ],
    cloze: [
      "DEWS III criterion: non-invasive tear breakup time (NIBUT) under [[10 s|10 seconds|10]].",
      "Cylindrical dandruff at the base of the lashes points to [[Demodex]] blepharitis.",
      "An unanesthetized Schirmer under 5 mm prompts a workup for [[Sjögren|Sjogren|Sjögren syndrome|Sjogren syndrome]] syndrome.",
      "Punctal plugs go in once the [[inflammation]] has settled.",
      "Still symptomatic after 1–2 months of tears: add cyclosporine or [[lifitegrast]] drops.",
      "In the DREAM trial, [[omega-3|omega-3s|omega 3|fish oil]] supplements did no better than placebo."
    ],
    triage: [
      { s: "62-year-old woman: burning and grittiness worse with screens, vision that fluctuates with blinking, no infiltrate.", u: "routine", why: "Chronic dry eye, elective: preservative-free tears, lid care, recheck in 1–3 months." },
      { s: "Known dry eye, new white infiltrate with corneal thinning.", u: "urgent", why: "Infiltrate or thinning: no longer simple dry eye; same-day exam." },
      { s: "Glaucoma patient on three preserved drops: burning, inferior punctate keratitis.", u: "routine", why: "BAK toxicity: preservative-free drops, fixed combinations or SLT." }
    ],
    cues: [
      "Fluctuating vision that clears with blinking",
      "Thick oil on gland expression",
      "Burning and grittiness, worse in the evening with screens"
    ]
  },

  "c-surface": {
    essentials: [
      "Red eye: read the conjunctiva, but the **cornea with fluorescein** decides the urgency.",
      "**Follicle**: vessels around the base (virus, Chlamydia); **papilla**: central vessel (allergy, contact lenses).",
      "Adenovirus: **no antibiotic**; steroid only for pseudomembranes or vision-reducing infiltrates.",
      "Follicular for more than 3–4 weeks despite drops: think **Chlamydia**, treat partners."
    ],
    cloze: [
      "In vernal disease, [[Horner-Trantas|Horner Trantas|Trantas]] dots sit at the limbus.",
      "Vernal patient with new pain and photophobia: look for a [[shield]] ulcer.",
      "After adenoviral conjunctivitis, steroids carry a risk of [[rebound|rebound flare]] when stopped.",
      "Superior conjunctival injection with filaments (SLK): order a [[TSH]].",
      "Follicular for more than 3–4 weeks: swab for [[NAAT|PCR|nucleic acid amplification test]] (Chlamydia, gonococcus).",
      "Rosacea in a child under 8: azithromycin or erythromycin rather than [[doxycycline]]."
    ],
    triage: [
      { s: "10-year-old boy with vernal disease: new pain and photophobia, oval defect of the superior cornea.", u: "urgent", why: "Shield ulcer: steroid, cyclosporine or tacrolimus the same day, debride the plaque if needed." },
      { s: "Red, watery eye, grittiness, preauricular node, second eye involved within 3 days, clear cornea.", u: "routine", why: "Adenovirus: cold compresses, tears, hand hygiene, no antibiotic; contagious for about 2 weeks." },
      { s: "Copious pus appearing within hours in an adult with a new sexual partner.", u: "urgent", why: "Gonococcus: Gram stain, culture, NAAT, systemic ceftriaxone the same day; risk of perforation." }
    ],
    cues: [
      "Follicles, preauricular node, contagious contact",
      "Cobblestones on the upper tarsus, stringy mucus",
      "Itching front and center, papillae"
    ]
  },

  "c-erosion": {
    essentials: [
      "Sharp pain **on waking**, weeks after a fingernail scratch: poorly anchored epithelium that tears off.",
      "**Never topical anesthetic** at home: abuse blocks healing and can perforate.",
      "Recurrent erosion: **NaCl 5%** ointment at bedtime for 3–6 months.",
      "EBMD before cataract surgery: **polish first**, then repeat biometry on a stable cornea."
    ],
    cloze: [
      "Vertical linear staining superiorly: look for a [[foreign body|FB]] under the lid.",
      "In EBMD, elevated areas give [[negative]] fluorescein staining.",
      "The gray dots of EBMD are [[Cogan]] microcysts.",
      "Refractory erosions: oral doxycycline blocks [[MMP-9|MMP9|MMP|matrix metalloproteinase|metalloproteinase]], which dissolves the anchoring fibrils.",
      "Refractory central disease: excimer laser ablation of the surface, [[PTK|phototherapeutic keratectomy]].",
      "High-velocity metal projectile: CT scan, never [[MRI]]."
    ],
    triage: [
      { s: "Third episode of pain on waking since a scratch from a baby's fingernail; eye quiet between episodes.", u: "rapide", why: "Recurrent erosion, semi-urgent: NaCl 5% ointment at bedtime for 3–6 months; doxycycline or polishing if refractory." },
      { s: "Contact lens wearer, abrasion 48 h ago: increasing pain and a new white infiltrate.", u: "urgent", why: "Infectious keratitis until proven otherwise (Pseudomonas): cultures and treatment the same day." },
      { s: "60-year-old woman, map lines and gray dots without pain; cataract surgery planned.", u: "routine", why: "EBMD: polish first, then repeat biometry, otherwise wrong IOL power." }
    ],
    cues: [
      "Sharp pain on waking, when opening the eyes",
      "Map lines, gray dots, fingerprints",
      "Fingernail scratch a few weeks earlier"
    ]
  },

  "c-bacterienne": {
    essentials: [
      "Epithelial defect + stromal infiltrate: **infectious** until proven otherwise, especially with contact lenses.",
      "Scrape and culture **before the antibiotic**, but never delay it.",
      "**No steroid** at the outset (SCUT, SCUT II); never with Nocardia.",
      "**No pressure patch**: it favors Pseudomonas and prevents hourly drops."
    ],
    cloze: [
      "In a contact lens wearer, the antibiotic must always cover [[Pseudomonas]].",
      "Fortified drops: vancomycin 25 mg/mL (or cefazolin) alternating with [[tobramycin]] 14 mg/mL.",
      "Small peripheral ulcer without severity criteria: [[moxifloxacin|fluoroquinolone]] 0.5% hourly.",
      "In bacterial keratitis, the hypopyon is usually [[sterile]].",
      "Concentrated fluorescein diluted into a bright green stream: positive [[Seidel]] test (perforation).",
      "Perforation of 2–3 mm or less: [[glue|cyanoacrylate|cyanoacrylate glue|tissue glue]] and a bandage contact lens."
    ],
    triage: [
      { s: "Contact lens wearer, painful red eye, 3 mm central infiltrate under an epithelial defect.", u: "urgent", why: "1-2-3 rule met: scraping, cultures and fortified drops the same day." },
      { s: "Ulcer on moxifloxacin for 3 days: thinning and positive Seidel.", u: "urgent", why: "Perforation: rigid shield, no pressure on the eye, notify the attending; glue if ≤ 2–3 mm." },
      { s: "Old healed ulcer, stable central scar reducing vision; requesting a graft.", u: "routine", why: "Quiet eye: elective workup for an optical keratoplasty." }
    ],
    cues: [
      "Dense white infiltrate under an epithelial defect",
      "Rapid necrosis, mucopurulent discharge, contact lenses",
      "Onset within hours, contact lens wearer"
    ]
  },

  "c-atypiques": {
    essentials: [
      "Contact lenses + water + **pain out of proportion** = Acanthamoeba until proven otherwise.",
      "Ulcer not responding after **48–72 h** of antibiotics: stop steroids, revisit the diagnosis, resample.",
      "**Never steroid**: it suppresses the neutrophils that contain the fungus.",
      "MUTT I: **natamycin 5%** superior to voriconazole for filamentous fungi, especially Fusarium."
    ],
    cloze: [
      "Early on, the ameba tracks along corneal nerves: [[radial perineuritis|radial keratoneuritis|perineuritis]].",
      "The amebic pseudodendrite lacks [[terminal bulbs|end bulbs|bulbs]], unlike the herpetic dendrite.",
      "The only class active against amebic cysts: [[biguanides|biguanide|PHMB|chlorhexidine]].",
      "Ameba culture: non-nutrient agar overlaid with [[E. coli|E coli|Escherichia coli]].",
      "According to MUTT II, adding oral [[voriconazole]] provides no benefit.",
      "On smear, [[calcofluor white|calcofluor]] makes cysts and hyphae fluoresce."
    ],
    triage: [
      { s: "Contact lens wearer who swims in a lake: pain out of proportion, pseudodendrites, ring infiltrate.", u: "urgent", why: "Probable ameba: stop all steroids; deep scraping, specific cultures, PCR, then hourly biguanide." },
      { s: "Farmer scratched by a branch 10 days ago: gray infiltrate with feathery margins, satellites.", u: "urgent", why: "Filamentous fungus: scraping, Sabouraud, natamycin 5% hourly, no steroid." },
      { s: "Ulcer worsening after 72 h of fortified drops; bacterial cultures negative.", u: "urgent", why: "Failure at 48–72 h: think fungus or ameba; resample (PCR, confocal), stop steroids." }
    ],
    cues: [
      "Contact lens rinsed in tap water, severe pain",
      "Feathery margins and satellite lesions",
      "Antibiotic failure after 72 h"
    ]
  },

  "c-herpes": {
    essentials: [
      "Dendrite with **terminal bulbs** + decreased corneal sensation = herpes simplex.",
      "Epithelial (live virus): antiviral ± debridement; **steroid contraindicated** on an active dendrite.",
      "Immune stromal keratitis or endotheliitis: **steroid under oral antiviral cover**, tapered very slowly (HEDS).",
      "**Hutchinson** sign (vesicles on the nose tip): high risk of ocular zoster.",
      "Uveitis with **elevated IOP**: think herpetic trabeculitis (HSV, VZV or CMV)."
    ],
    cloze: [
      "A steroid prescribed on a dendrite produces a [[geographic]] ulcer.",
      "[[Decreased|Reduced|Diminished]] corneal sensation points to HSV or VZV and heralds neurotrophic keratitis.",
      "Epithelial HSV: acyclovir [[400 mg|400]] PO 5 times daily for 7–10 days.",
      "Herpes zoster ophthalmicus: valacyclovir [[1 g|1g|1000 mg]] TID × 7 days, ideally within 72 h.",
      "Valacyclovir 1 g daily for 1 year after herpes zoster ophthalmicus: the [[ZEDS]] trial, 27% less disease at 18 months.",
      "The Shingrix vaccine is recommended from age [[50|50 years]], even after an episode of shingles."
    ],
    triage: [
      { s: "Vesicles on the forehead and tip of the nose, decreased vision and elevated IOP.", u: "urgent", why: "Zoster with Hutchinson sign, decreased vision and elevated IOP: urgent exam, valacyclovir 1 g TID." },
      { s: "Known ocular herpes: new dendrite with terminal bulbs, vision preserved.", u: "rapide", why: "Recurrence of known herpes, semi-urgent: oral antiviral ± debridement; stop all steroids." },
      { s: "Known herpetic keratitis: melting stromal infiltrate, thinning.", u: "urgent", why: "Melting stromal ulcer: superinfection or perforation to worry about; cultures, same-day consult." }
    ],
    cues: [
      "Dendrite with terminal bulbs",
      "Decreased corneal sensation, unilateral recurrences",
      "Vesicles on the tip of the nose"
    ]
  },

  "c-peripherie": {
    essentials: [
      "**Clear interval** + blepharitis = marginal keratitis; crescent hugging the limbus = PUK.",
      "Melting cornea: **no topical NSAIDs**, which promote melting; oral doxycycline.",
      "**Phenylephrine 2.5%**: episcleritis blanches, scleritis (deep plexus) persists.",
      "Terrien: **painless white eye**, superior gutter lined with lipid, against-the-rule astigmatism."
    ],
    cloze: [
      "The most common systemic cause of PUK is [[rheumatoid arthritis|RA]].",
      "PUK workup: screen for vasculitis with [[ANCA]] testing.",
      "On B-scan, posterior scleritis gives the [[T]] sign.",
      "Bluish or white avascular scleral patch: [[necrotizing]] scleritis.",
      "Very painful peripheral ulcer with an overhanging edge, negative workup: [[Mooren]] ulcer.",
      "PUK perforation larger than 2–3 mm: [[tectonic]] graft."
    ],
    triage: [
      { s: "Rheumatoid arthritis: crescent of thinning hugging the limbus with an epithelial defect.", u: "urgent", why: "PUK: systemic workup, rheumatology and systemic corticosteroids the same day." },
      { s: "Deep pain that wakes the patient at night, tender globe, bluish scleral patch.", u: "urgent", why: "Necrotizing scleritis: systemic corticosteroids and an immunosuppressant; rheumatology contacted the same day." },
      { s: "Man with a painless white eye, superior gutter lined with lipid, slowly increasing astigmatism.", u: "routine", why: "Terrien, non-inflammatory: rigid or scleral lens; lamellar graft if thinning is extreme." }
    ],
    cues: [
      "Crescent of thinning hugging the limbus",
      "Violaceous redness that does not blanch",
      "Superior gutter lined with lipid, white eye"
    ]
  },

  "c-pterygion": {
    essentials: [
      "Pterygium: **nasal** wing (UV) crossing the limbus; a pinguecula does not.",
      "**Conjunctival autograft** after excision: far lower recurrence than bare sclera.",
      "Pterygium and cataract: **remove the pterygium first**, then repeat biometry.",
      "Pseudopterygium: after a burn or trauma; **a probe passes under the neck**."
    ],
    cloze: [
      "The brown iron line in front of the pterygium head is the [[Stocker]] line.",
      "A nasal pterygium induces [[with-the-rule|WTR|with the rule]] astigmatism: the vertical meridian is steeper.",
      "Recurrence or a fleshy lesion in a young patient: add [[mitomycin C|mitomycin|MMC]] or amniotic membrane.",
      "Lesion suspicious for OSSN: [[AS-OCT|anterior segment OCT|OCT]] or biopsy before any excision.",
      "OSSN: no-touch excision, clear margins and [[cryotherapy]] of the edges.",
      "New or enlarging conjunctival pigment: worry about [[melanoma]]."
    ],
    triage: [
      { s: "Outdoor worker: pink nasal wing extending 2 mm onto the cornea, mild irritation.", u: "routine", why: "Pterygium not threatening the visual axis: UV protection, tears, photo and measurement at follow-up." },
      { s: "70-year-old kidney transplant recipient: gelatinous limbal lesion with feeder vessels.", u: "rapide", why: "OSSN until proven otherwise: AS-OCT, biopsy and ocular oncology before any surgery." }
    ],
    cues: [
      "Pink nasal wing crossing the limbus",
      "Stocker line in front of the head",
      "Cumulative sun exposure, outdoor work"
    ]
  },

  "c-depots": {
    essentials: [
      "Faced with an opacity: **layer, color, context** lead to the deposit and the workup.",
      "**Arcus** before 50: lipid panel; unilateral arcus: carotid stenosis on the side without arcus.",
      "Chalky white band in Bowman = **calcium**; in a child, look for JIA.",
      "**Kayser-Fleischer**: copper in Descemet = Wilson; Fleischer: iron around the cone."
    ],
    cloze: [
      "Cornea verticillata: amiodarone, hydroxychloroquine or [[Fabry]] disease.",
      "Symptomatic band keratopathy: scraping, then chelation with [[EDTA|disodium EDTA]].",
      "Chalky white plaque in an ulcer treated hourly: [[ciprofloxacin|cipro]] precipitate.",
      "An early Kayser-Fleischer ring is sometimes visible only on [[gonioscopy]].",
      "Bilateral ghost vessels in the deep stroma: sequela of congenital [[syphilis]].",
      "Hyphema in a patient with [[sickle cell disease|sickle cell|sickle cell trait]]: fragile optic nerve even at moderate IOP."
    ],
    triage: [
      { s: "Graft recipient on steroids: branching white crystals in the graft, little redness.", u: "urgent", why: "Infectious crystalline keratopathy (viridans) until proven otherwise: cultures, intensive antibiotic." },
      { s: "38-year-old man: peripheral gray-white ring with a lucid interval, normal vision.", u: "routine", why: "Early arcus: lipid panel, letter to the family physician (familial hypercholesterolemia)." },
      { s: "Patient on amiodarone: golden-brown whorl lines below the pupil, normal vision.", u: "routine", why: "Cornea verticillata: reassure and document; vision rarely affected." }
    ],
    cues: [
      "Chalky white interpalpebral plaque with holes",
      "Golden-brown lines in an epithelial whorl",
      "Brown-green ring in peripheral Descemet"
    ]
  },

  "c-keratocone": {
    essentials: [
      "Young eye rubber, increasing irregular astigmatism: **tomography** is the reference test.",
      "Child: **CXL at diagnosis** (2nd global consensus, ESCRS 2025), without waiting for documented progression.",
      "Adult: CXL for **documented progression**, without delaying it to get the patient to stop rubbing.",
      "Standard epi-off CXL: stroma **≥ 400 µm** to protect the endothelium from UV.",
      "Abnormal tomography in a LASIK candidate: **surgery contraindicated** (risk of ectasia)."
    ],
    cloze: [
      "[[Vogt]] striae disappear when pressure is applied to the eye.",
      "[[Munson]] sign is a V-shaped lower lid on downgaze.",
      "The Fleischer ring is a deposit of [[iron]] around the base of the cone.",
      "On tomography, [[posterior]] elevation reveals early forms.",
      "Dresden protocol: 3 mW/cm² for [[30 min|30 minutes|30]].",
      "In keratoconus, [[DALK]] is preferred over PK: no endothelial rejection."
    ],
    triage: [
      { s: "14-year-old boy: keratoconus found on tomography, good vision with glasses.", u: "rapide", why: "Child: rapid progression; CXL at diagnosis, without waiting for progression." },
      { s: "Known keratoconus: sudden vision loss, white thickened cornea, negative Seidel.", u: "rapide", why: "Acute hydrops, semi-urgent (not a perforation): cycloplegic, NaCl 5%, steroid; resolves over a few months." },
      { s: "32-year-old woman: keratoconus stable on two tomographies, well corrected with rigid lenses.", u: "routine", why: "No progression: monitoring; no preventive epi-on CXL." }
    ],
    cues: [
      "Scissoring reflex on retinoscopy",
      "Inferior steepening, asymmetric bowtie",
      "Vogt striae and Munson sign"
    ]
  },

  "c-dystrophies": {
    essentials: [
      "**Bilateral, symmetric**, familial opacities without vessels or inflammation: dystrophy; localize the layer.",
      "Granular: discrete crumbs, clear stroma between; **macular**: haze to the limbus, thin cornea.",
      "Only **macular dystrophy is recessive** (CHST6); granular and lattice are dominant (TGFBI).",
      "**TGFBI** mutation or snowflake opacities: no LASIK, deposits proliferate at the interface."
    ],
    cloze: [
      "Lattice dystrophy: [[amyloid]] deposits that stain with Congo red.",
      "Macular dystrophy: mucopolysaccharides that stain with [[Alcian]] blue.",
      "Snowflake opacities in a LASIK candidate: think of [[Avellino]] dystrophy.",
      "Erosions from childhood and rapid recurrence after PTK: [[Reis-Bücklers|Reis-Bucklers|Reis Bücklers|Reis Bucklers]] dystrophy.",
      "Posterior polymorphous dystrophy can extend into the angle: do [[gonioscopy]] and measure IOP.",
      "Infant with cloudy corneas: rule out [[congenital glaucoma|primary congenital glaucoma|PCG]] before concluding CHED."
    ],
    triage: [
      { s: "LASIK candidate: a few snowflake stromal opacities in both eyes, normal vision.", u: "routine", why: "Rule out a TGFBI dystrophy (Avellino): genetic testing before any refractive surgery." },
      { s: "Unilateral stromal opacity with a red, painful eye and no family history.", u: "urgent", why: "Unilateral, red or painful: infection, not dystrophy; see the same day." }
    ],
    cues: [
      "White breadcrumbs, clear stroma between them",
      "Refractile branching lines in the central stroma",
      "Bilateral, symmetric, familial opacities without vessels"
    ]
  },

  "c-fuchs": {
    essentials: [
      "Blurred vision **on waking** that clears during the day: corneal edema from a failing endothelium.",
      "**Central guttae** with a beaten-metal appearance; peripheral only (Hassall-Henle): normal aging.",
      "Guttae + cataract: look for **subclinical edema** (Scheimpflug) before operating.",
      "**DMEK** as first choice: best vision, fast recovery, lowest rejection rate.",
      "Elevated IOP: lower it **without topical CAI**, which slows the endothelial pump."
    ],
    cloze: [
      "On specular microscopy, guttae appear as [[dark|black]] areas.",
      "Fuchs: expansion of CTG18.1 repeats in the [[TCF4]] gene.",
      "Triple procedure: aim for slight myopia, because DMEK induces a [[hyperopic]] shift.",
      "Mild epithelial edema: NaCl 5% and a [[hair dryer|hairdryer|blow dryer]] on waking.",
      "Detached DMEK graft: new bubble by reinjecting [[air|air or gas|gas]] (rebubbling).",
      "Endothelial keratoplasty in a complex eye (vitrectomized, tube, anterior chamber IOL): prefer [[DSAEK|DSEK]]."
    ],
    triage: [
      { s: "65-year-old woman: central guttae, mild morning blur, no significant cataract.", u: "routine", why: "Early Fuchs, elective: NaCl 5%, hair dryer; specular and pachymetry at follow-up." },
      { s: "Advanced Fuchs: ruptured bulla, pain and a new white infiltrate.", u: "urgent", why: "Infectious keratitis over a ruptured bulla: cultures and antibiotics the same day." },
      { s: "Central guttae and a bothersome cataract; surgery being considered.", u: "routine", why: "Elective workup: specular and Scheimpflug; any edema, even subclinical: triple procedure." }
    ],
    cues: [
      "Blurred vision on waking, clears during the day",
      "Beaten metal on specular reflection",
      "Central guttae, Descemet folds"
    ]
  },

  "c-greffe": {
    essentials: [
      "Rejection risk: **PK > DSAEK > DMEK**; DALK has no endothelial rejection.",
      "**Khodadoust line**: advancing KP with edematous graft behind it; endothelial rejection, the most serious.",
      "Infiltrate on the graft or near a suture: **culture before** increasing steroids.",
      "Rejection: **prednisolone 1% hourly** + cycloplegic; antiviral if history of herpes."
    ],
    cloze: [
      "Stromal rejection: subepithelial infiltrates confined to the graft, [[Krachmer]] spots.",
      "[[Epithelial]] rejection, the most benign, gives an elevated line that takes up fluorescein.",
      "Astigmatism after PK: cut the suture in the [[steepest|steep]] meridian first.",
      "Graft edematous from postoperative day 1, never clear: [[primary]] graft failure.",
      "Rejection is often [[reversible]] if treated early; failure often requires a regraft.",
      "Severe endothelial rejection: add sub-Tenon [[triamcinolone]] or oral prednisone."
    ],
    triage: [
      { s: "PK 8 months ago: red eye, photophobia and vision ↓ since stopping the drops.", u: "urgent", why: "RSVP: probable rejection; prednisolone 1% hourly and a cycloplegic the same day." },
      { s: "PK: loose suture surrounded by a white infiltrate with an epithelial defect.", u: "urgent", why: "Infection until proven otherwise: culture, antibiotics, suture removal." },
      { s: "DMEK 3 years ago: quiet eye, stable vision, 1 steroid drop daily.", u: "routine", why: "Routine follow-up: IOP at every visit; never let the patient stop the steroid on their own." }
    ],
    cues: [
      "Khodadoust line",
      "Krachmer spots, elevated epithelial line",
      "RSVP after stopping steroids"
    ]
  },

  "c-brulure": {
    essentials: [
      "Irrigate ≥ 30 min until **pH 7.0–7.5**, rechecked 5–10 min after stopping.",
      "**Alkalis** are worse: they saponify membranes and penetrate; acid coagulates and forms a barrier.",
      "Pitfall: a **white** eye (ischemic limbus) is often worse than a red eye.",
      "Steroid **≤ 10–14 days**, then a rapid taper: beyond that, it promotes melting."
    ],
    cloze: [
      "Lime and plaster: look for particles by double [[eversion|double eversion]] of the upper lid.",
      "The exception among acids: [[hydrofluoric|HF]] acid penetrates instead of forming a barrier.",
      "The [[Roper-Hall|Roper Hall]] classification combines corneal haze and limbal ischemia.",
      "Grades II–IV: doxycycline, oral ascorbate and early [[amniotic membrane|AMT|amniotic membrane transplant]].",
      "Limbal stem cell deficiency: limbal graft harvested from the fellow eye, such as [[CLAU|SLET]].",
      "Workplace burn: fill out the [[CNESST]] forms."
    ],
    triage: [
      { s: "Cement splashed into the eye 10 minutes ago.", u: "urgent", why: "Irrigate immediately (tap water if nothing else), before the history and acuity, until pH 7.0–7.5." },
      { s: "Alkali burn, already irrigated: white limbus over more than half, opaque cornea.", u: "urgent", why: "Grade IV: emergency ophthalmologist, intensive treatment, early amniotic membrane." },
      { s: "Irrigated burn, pH 7.2: clear cornea, no limbal ischemia.", u: "rapide", why: "Grade I: antibiotic, lubricants, cycloplegic; recheck in 1–2 days." }
    ],
    cues: [
      "White limbus without perfused vessels",
      "Particles under the lid, pH that climbs back up",
      "Porcelain-white cornea after a drain cleaner"
    ]
  },

  "c-bases": {
    essentials: [
      "Glaucoma is an **optic neuropathy**; IOP is its main modifiable risk factor.",
      "**IOP = (F − U)/C + Pv**: via the meshwork, IOP cannot fall below Pv.",
      "Classify: **open or closed** angle (gonioscopy), then primary or secondary glaucoma.",
      "**Structure-function**: inferior RNFL thinning = superior field defect; the two must agree.",
      "Before escalating, check **adherence**: \"progression\" may hide a bottle that was never opened."
    ],
    cloze: [
      "Episcleral venous pressure (Pv) is about [[8–10 mmHg|8 to 10 mmHg|8-10 mmHg|8–10|8-10]].",
      "Hodapp-Parrish-Anderson: an MD < [[−12 dB|-12 dB|−12|-12]] defines advanced stage.",
      "Only [[gonioscopy]] can tell whether the angle is open or closed.",
      "Pregnancy or breastfeeding: [[punctal occlusion|nasolacrimal occlusion]] after each drop to limit systemic absorption.",
      "Brimonidine is contraindicated under age [[2|2 years|two]] and with MAOIs.",
      "EMGT: each mmHg of lowering ≈ [[10 %|10|10%]] lower risk of progression."
    ],
    triage: [
      { s: "66-year-old man: IOP 24 mmHg, open angle, normal nerve, RNFL and field.", u: "routine", why: "Ocular hypertension: a risk factor, not yet a disease; estimate risk before treating." },
      { s: "Moderate POAG: MD from −7 to −10 dB in one year, reliable and comparable fields.", u: "rapide", why: "Fast progressor (≥ 2 dB/year): check adherence, confirm, then lower the target." },
      { s: "65-year-old woman: very painful red eye, halos, IOP 56 mmHg, closed angle.", u: "urgent", why: "Acute angle closure: drops and acetazolamide 500 mg PO or IV without delay, then laser iridotomy." }
    ],
    cues: [
      "Equation (F − U)/C + Pv",
      "MD, PSD, VFI and GHT indices",
      "Stepladder: drops, laser, then surgery"
    ]
  },

  "g-gpao": {
    essentials: [
      "**Painless** optic neuropathy: peripheral field goes silently, central vision last.",
      "**Gonioscopy** at diagnosis: open angle = scleral spur visible over 360°, no synechiae.",
      "The only proven lever is **IOP**: target ≈ 20–30% below baseline.",
      "**SLT** first line: 69.8% at target with no other treatment (LiGHT).",
      "Pallor > cupping, early VA ↓, vertical defect: red flag, **MRI**."
    ],
    cloze: [
      "Inferior fibers lost: the field defect is [[superior]].",
      "At baseline, ≈ [[3 fields|three fields|3|3 times|three times]] a year for 2 years identifies a fast progressor.",
      "On visual fields, false positives > [[15 %|15|15%]] make the test unreliable.",
      "Prostaglandin analogs increase [[uveoscleral]] outflow of aqueous.",
      "On PGAs, iris darkening is [[irreversible|permanent]]: warn the patient, especially if only one eye is treated.",
      "Avoid timolol in asthma or COPD: risk of [[bronchospasm]]."
    ],
    triage: [
      { s: "58-year-old woman referred for glaucoma: pallor more extensive than cupping, VA 6/12, defect respecting the vertical meridian.", u: "rapide", why: "Red flags: think compression (chiasm); prioritized MRI before treating as glaucoma." },
      { s: "POAG on a PGA, IOP at target, but MD falling 2.5 dB in one year on reliable fields.", u: "rapide", why: "Fast progressor: confirm, check adherence, then lower the target (SLT, MIGS or filtering surgery)." },
      { s: "72-year-old man, early POAG on latanoprost: IOP at target, stable OCT and field.", u: "routine", why: "Stable at target: OCT and field 1–2 times a year; reassess the target at each visit." }
    ],
    cues: [
      "IOP 26, normal gonioscopy, arcuate defect",
      "Nasal step found on screening, elevated IOP"
    ]
  },

  "g-hto": {
    essentials: [
      "**OHT**: IOP > 21, open angle, normal nerve and field; a risk, not a disease.",
      "**OHTS**: IOP −20% → 5-year conversion 4.4% vs 9.5%.",
      "**Thin cornea**: IOP is underestimated AND the risk of conversion rises.",
      "Do not treat every OHT: estimate the **risk** (age, IOP, cornea, C/D, PSD).",
      "Treat if IOP **≥ 30 mmHg**, only eye or high risk: target −20%."
    ],
    cloze: [
      "OHTS: a cornea ≤ 555 µm converts ≈ [[3 times|three times|3]] more often than a cornea > 588 µm.",
      "OHTS predictors: age, IOP, corneal thickness, vertical C/D and [[PSD]].",
      "A single reading is not enough: repeat [[tonometry]] at different times of day.",
      "In OHT, a [[disc hemorrhage|Drance hemorrhage|optic disc hemorrhage]] predicts conversion: tighten follow-up or treat.",
      "A field defect must be [[reproducible|repeatable]] (2–3 fields) before concluding glaucoma.",
      "IOP elevated on one side only: look for a [[secondary]] cause."
    ],
    triage: [
      { s: "72-year-old man: IOP 23 mmHg in both eyes, thick corneas, normal discs, OCT and field.", u: "routine", why: "Low-risk OHT: structured observation, OCT and field compared with baseline." },
      { s: "45-year-old woman: IOP 31 mmHg, 520 µm cornea, normal nerve, OCT and field.", u: "rapide", why: "IOP ≥ 30 mmHg, young, thin cornea: treatment generally offered (PGA or SLT, target ≈ 20% below baseline)." },
      { s: "OHT followed for 3 years: new disc hemorrhage and inferior RNFL thinning, field still normal.", u: "rapide", why: "Probable conversion: confirm, then tighten follow-up or treat." }
    ],
    cues: [
      "IOP > 21, normal nerve and field",
      "Estimated 5-year risk of conversion"
    ]
  },

  "g-gpn": {
    essentials: [
      "**NTG**: open-angle glaucomatous neuropathy, IOP always ≤ 21 mmHg; diagnosis of exclusion.",
      "Before calling it NTG, rule out \"**PACI**\": missed IOP, intermittent closure, compression, ischemia.",
      "**MRI** if < 50, pallor > cupping, VA or color vision ↓, vertical defect.",
      "**CNTGS**: IOP −30% → less progression (≈ 12% vs 35%, per protocol).",
      "Early **paracentral** defects missed by the 24-2: add a 10-2."
    ],
    cloze: [
      "A classic of NTG, the [[Drance]] disc hemorrhage signals active progression.",
      "Age ≥ 50 with headache or jaw claudication: ESR and CRP to rule out giant cell [[arteritis]].",
      "In the [[LoGTS]] trial, brimonidine produced less field progression than timolol.",
      "Progressing NTG: review [[nocturnal|nighttime]] hypotension with the treating physician and screen for sleep apnea.",
      "Routine [[gonioscopy]] rules out intermittent closure whose IOP spikes escape office readings.",
      "Many untreated NTG patients do not [[progress]]: a stable NTG far from fixation can be observed."
    ],
    triage: [
      { s: "42-year-old man: IOP 15 mmHg, pallor more extensive than cupping, decreased color vision.", u: "rapide", why: "Atypical for NTG (age < 50, pallor): prioritized MRI to rule out compression." },
      { s: "70-year-old woman with known NTG: new paracentral scotoma threatening fixation.", u: "rapide", why: "Fixation threatened: treat without waiting, target ≈ 30% below baseline." },
      { s: "66-year-old woman, early NTG: defect far from fixation, stable over several fields.", u: "routine", why: "Many NTG cases do not progress (CNTGS): observe and measure the rate, ≈ 3 fields a year." }
    ],
    cues: [
      "Drance hemorrhage, IOP always ≤ 21",
      "Migraine, Raynaud, nocturnal hypotension, paracentral scotoma"
    ]
  },

  "g-papille": {
    essentials: [
      "Large C/D ≠ diagnosis: **disc size** first.",
      "**Pallor** > cup: probable non-glaucomatous cause, MRI.",
      "Defect respecting the **vertical** meridian: chiasm, MRI.",
      "Age ≥ 50, acute loss, pale disc: **arteritic AION**, ESR, CRP.",
      "A large disc does not protect: the **neuroretinal rim** counts."
    ],
    cloze: [
      "A C/D of 0.7 can be normal in a [[large disc|large|big disc]] and suspicious in a small one.",
      "Cupping is read by contour, pallor by [[color]].",
      "On OCT, nasal macular loss respecting the vertical meridian points to the [[chiasm]].",
      "Optic disc drusen: lumpy disc with no cup, calcium visible on [[B-scan|ultrasound|B-scan ultrasonography]] and autofluorescence.",
      "Superior segmental optic nerve hypoplasia: think of a [[diabetic]] mother.",
      "In high myopia, the tilted disc makes OCT falsely [[abnormal|red|pathological]] (red disease)."
    ],
    triage: [
      { s: "Referred for C/D 0.7: large disc, regular pink rim, normal OCT and field, stable appearance.", u: "routine", why: "Probable physiologic cupping: document (photos, OCT), then spaced follow-up, no drops." },
      { s: "45-year-old man: pale, shallowly cupped disc, VA 6/12, RAPD, temporal defect respecting the vertical meridian.", u: "rapide", why: "Red flags for compression: prioritized gadolinium-enhanced MRI, neuro-ophthalmology." },
      { s: "77-year-old woman: headache, jaw claudication, recent acute vision loss, pale cupping.", u: "urgent", why: "Possible giant cell arteritis: ESR, CRP the same day; steroids without waiting for the biopsy." }
    ],
    cues: [
      "Pallor that exceeds the cup",
      "Large disc, regular pink rim, normal OCT",
      "Referred for \"large C/D\", asymptomatic"
    ]
  },

  "g-fermeture": {
    essentials: [
      "Gonioscopy: **PACS** (contact ≥ 180°), PAC (PAS or IOP ↑), PACG (neuropathy).",
      "**Dynamic gonioscopy** in a dark room, short beam: the pupil stays wide.",
      "**Indentation** opens an appositional angle, but not peripheral anterior synechiae (PAS).",
      "**EAGLE**: age ≥ 50, PAC with IOP ≥ 30 mmHg or PACG → lens extraction.",
      "Acute bilateral myopia on **topiramate**: effusion; no iridotomy, no pilocarpine."
    ],
    cloze: [
      "At the slit lamp, a Van Herick ≤ [[2|grade 2]] mandates gonioscopy.",
      "The most common closure mechanism is [[pupillary block]], the only one an iridotomy corrects.",
      "Angle still closed despite a patent LPI: think [[plateau iris]] and confirm on UBM.",
      "After an LPI, check [[patency]] of the opening and measure IOP 30 min to 2 h later.",
      "PACS: LPI is not routine (ZAP); it is a [[shared decision|shared decision-making]].",
      "[[Inuit]] populations of Nunavik have some of the highest rates of primary angle closure."
    ],
    triage: [
      { s: "60-year-old hyperopic woman: evening halos and headache that resolve with sleep; Van Herick 1.", u: "rapide", why: "Intermittent closure: prompt gonioscopy and treatment (LPI or lens extraction)." },
      { s: "55-year-old man, narrow angle on screening: contact ≥ 180°, IOP 17, no PAS or neuropathy.", u: "routine", why: "PACS: shared decision between LPI and observation; teach the warning symptoms." },
      { s: "40-year-old woman on topiramate: blurred vision in both eyes, acute myopia, closed angles, elevated IOP.", u: "urgent", why: "Ciliochoroidal effusion: stop topiramate with the prescriber, cycloplegic, steroid, pressure-lowering drops; neither LPI nor pilocarpine." }
    ],
    cues: [
      "Iridotrabecular contact ≥ 180° on gonioscopy",
      "Evening halos that resolve with sleep",
      "Van Herick 1 in a hyperopic Inuit woman"
    ]
  },

  "g-crise": {
    essentials: [
      "Painful red eye, halos, hazy cornea, fixed **mid-dilated pupil**, very high IOP.",
      "Lower IOP first: timolol, brimonidine, dorzolamide, **acetazolamide 500 mg**.",
      "**Pilocarpine** only once IOP is down (the sphincter is ischemic before).",
      "Pilocarpine **contraindicated** for a lens-induced cause, topiramate effusion or aqueous misdirection.",
      "**Bilateral LPI**: otherwise about half of fellow eyes have an attack within 5 years."
    ],
    cloze: [
      "IOP unchanged after 1 h of maximal therapy: IV [[mannitol]] and a call to the on-call ophthalmologist.",
      "Before acetazolamide, check for sulfa allergy, renal function, potassium and [[sickle cell disease|sickle cell]].",
      "Corneal [[indentation|compression]] pushes aqueous into the angle and can help break the attack.",
      "Headache and vomiting in the ED: measure the [[IOP|intraocular pressure|pressure]] before the head CT.",
      "Narrow chamber in the fellow eye too: a [[primary]] mechanism is likely.",
      "High IOP with keratic precipitates, an open angle and no mid-dilated pupil: think hypertensive [[uveitis|iritis|anterior uveitis]]."
    ],
    triage: [
      { s: "62-year-old woman in the ED: headache, vomiting, red right eye, hazy cornea, mid-dilated pupil.", u: "urgent", why: "Probable acute attack: measure IOP, drops and acetazolamide without delay, on-call ophthalmologist the same day." },
      { s: "Ongoing attack: IOP still 52 mmHg one hour after drops and acetazolamide.", u: "urgent", why: "Refractory: IV mannitol if heart and kidneys allow, indentation, urgent consult (paracentesis, laser, surgery)." },
      { s: "Right-eye attack broken, LPI done; left eye asymptomatic, narrow angle on gonioscopy.", u: "rapide", why: "About half of fellow eyes have an attack within 5 years without LPI: prophylactic iridotomy without delay." }
    ],
    cues: [
      "Fixed mid-dilated pupil, hazy cornea, IOP 55",
      "Colored halos, vomiting, rock-hard globe"
    ]
  },

  "g-pxf": {
    essentials: [
      "Whitish **target-pattern** deposits on the capsule, often seen only after dilation.",
      "**More aggressive** than POAG: high, fluctuating IOP, lower target.",
      "**Weak zonules** (phacodonesis, poor dilation): warn the cataract surgeon.",
      "Sudden vision loss years after cataract surgery: **in-the-bag IOL dislocation**.",
      "**SLT** often works, but an IOP spike is more likely: recheck IOP."
    ],
    cloze: [
      "Pigment anterior to Schwalbe line on gonioscopy: [[Sampaolesi]] line.",
      "Variants in the [[LOXL1]] gene promote the fibrillar material of pseudoexfoliation.",
      "Even before dilation, look for white flakes at the [[pupillary]] margin.",
      "Cataract with pseudoexfoliation: plan a [[capsular tension ring|CTR|tension ring]] and iris hooks.",
      "Pseudoexfoliation is a risk factor for progression in the [[EMGT]] trial.",
      "True exfoliation of the capsule: capsular delamination in [[glassblowers|glassblower|glass blowers]]."
    ],
    triage: [
      { s: "74-year-old man: target-pattern deposits, IOP 34 mmHg, inferior notch and a matching field defect.", u: "rapide", why: "Pseudoexfoliation glaucoma, aggressive: prompt referral, lower target and close follow-up." },
      { s: "70-year-old woman: flakes at the pupillary margin, IOP 18, normal nerve, OCT and field.", u: "routine", why: "Pseudoexfoliation without glaucoma: IOP, disc, OCT and field more often than an ordinary suspect." }
    ],
    cues: [
      "Whitish target-pattern deposits on the lens",
      "Sampaolesi line, pupil that dilates poorly",
      "Phacodonesis in an older patient, fluctuating IOP"
    ]
  },

  "g-pigmentaire": {
    essentials: [
      "Young myopic man: **Krukenberg** spindle, iris defects, heavily pigmented angle.",
      "**Reverse pupillary block**: the concave iris rubs the zonules and sheds pigment.",
      "Halos after **exercise** or dilation: IOP spike from a pigment shower.",
      "**Low-energy SLT**: heavily pigmented meshwork, risk of IOP spike.",
      "Before **pilocarpine**, a dilated fundus exam: detachment risk in myopes."
    ],
    cloze: [
      "Siddiqui 2003: pigment dispersion progresses to glaucoma in ≈ [[10 %|10|10%]] of patients at 5 years.",
      "Pigment line on the posterior capsule at the zonular insertion: [[Scheie]] line.",
      "Iridotomy flattens the concave iris, with no proven benefit on glaucoma [[progression]].",
      "With age, pigment release stops: the [[burnt-out|burned-out|inactive]] phase can mimic NTG.",
      "Trabecular pigment is dense and [[homogeneous|uniform]] over 360°, unlike that of PXF.",
      "Transillumination defects are radial and [[midperipheral|mid-peripheral]]."
    ],
    triage: [
      { s: "28-year-old myopic man: Krukenberg spindle and iris defects, IOP 19, normal nerve, OCT and field.", u: "routine", why: "Pigment dispersion without glaucoma: monitor IOP, OCT and field; report symptoms with exercise." },
      { s: "35-year-old man with known pigment dispersion: IOP 32, new cupping and an arcuate defect.", u: "rapide", why: "Established pigmentary glaucoma: refer to the ophthalmologist; PGA or low-energy SLT." }
    ],
    cues: [
      "Krukenberg spindle in a young myope",
      "Radial midperipheral transillumination defects",
      "Halos after running in a myope"
    ]
  },

  "g-neovasculaire": {
    essentials: [
      "Ischemic retina → **VEGF** → iris and angle new vessels that close the filter.",
      "\"**DCC**\" causes: diabetes, central retinal vein occlusion, carotid (ocular ischemic syndrome).",
      "Check iris and angle **before dilation**, which hides pupillary-margin new vessels.",
      "**Anti-VEGF** = rapid but temporary bridge; PRP treats the source.",
      "**No pilocarpine**: it inflames and does not open a fibrovascular angle."
    ],
    cloze: [
      "\"90-day glaucoma\": look for NVI and NVA at every visit after an ischemic [[CRVO|central retinal vein occlusion]].",
      "Angle new vessels cross the [[scleral spur|spur]] and arborize over the trabecular meshwork.",
      "Membrane traction at the pupillary margin: [[ectropion uveae|uveal ectropion]], a sign of advanced synechial stage.",
      "For comfort and inflammation, [[atropine]] and a steroid are preferred over pilocarpine.",
      "With no obvious retinal cause, a [[carotid]] Doppler looks for ocular ischemic syndrome.",
      "Useful visual potential: [[tube|drainage tube|tube shunt]] after anti-VEGF; otherwise, cyclophotocoagulation for comfort."
    ],
    triage: [
      { s: "58-year-old diabetic: painful eye, IOP 48, new vessels on the iris, edematous cornea.", u: "urgent", why: "Neovascular glaucoma: anti-VEGF, PRP and IOP lowering the same day, no pilocarpine." },
      { s: "70-year-old man: IOP 40, angle new vessels, fundus without retinopathy or occlusion.", u: "urgent", why: "No retinal cause: treat the same day and order a carotid Doppler (stroke risk)." }
    ],
    cues: [
      "Fine vessels crossing the scleral spur",
      "Very high IOP 3 months after a CRVO",
      "Ectropion uveae in a diabetic, high IOP"
    ]
  },

  "g-secondaires": {
    essentials: [
      "IOP ↑ on steroids, quiet eye, open angle: **steroid response**.",
      "Steroids less likely to raise IOP: **loteprednol**, fluorometholone; more likely: difluprednate, dexamethasone, prednisolone.",
      "As uveitis settles, the **ciliary body** resumes production: IOP ↑, not necessarily steroid-induced.",
      "**Iris bombé** (360° posterior synechiae): urgent iridotomy or iridectomy.",
      "**Never pilocarpine** in uveitis; aqueous suppressants as first line."
    ],
    cloze: [
      "Posner-Schlossman: unilateral attacks of very high IOP, little inflammation, often linked to [[CMV|cytomegalovirus]].",
      "Recurrent unilateral hypertensive uveitis: aqueous humor [[PCR]] (HSV, VZV, CMV), then targeted antiviral.",
      "[[Coin-shaped|coin|coin-like]] keratic precipitates: think CMV.",
      "In [[children|a child|kids]], the steroid response is more frequent, stronger and faster.",
      "High IOP in the first days after surgery: retained viscoelastic, too early for a [[steroid|steroid-induced]] response.",
      "[[SLT]] works well in steroid-induced glaucoma but is avoided in active uveitis."
    ],
    triage: [
      { s: "Chronic uveitis: flat peripheral chamber, iris bombé, 360° posterior synechiae, IOP 45.", u: "urgent", why: "Iris bombé: urgent iridotomy (often several) or surgical iridectomy." },
      { s: "Corneal graft recipient on prednisolone acetate for 4 weeks: IOP 28, quiet eye, open angle.", u: "rapide", why: "Probable steroid response: pressure-lowering drops and a steroid less likely to raise IOP (loteprednol), cautiously given the rejection risk." }
    ],
    cues: [
      "IOP rising on dexamethasone, quiet eye",
      "Coin-shaped precipitates, IOP 40",
      "Iris bombé from 360° posterior synechiae"
    ]
  },

  "g-cristallin": {
    essentials: [
      "Shallow chamber **in one eye only** + swollen cataract: phacomorphic.",
      "**Phacolytic**: hypermature cataract, white particles, deep chamber.",
      "**IOP first**; no pilocarpine for a lens cause.",
      "Hyphema + **sickle cell**: no CAIs or hyperosmotics; washout if IOP ≥ 24 mmHg > 24 h.",
      "**Angle recession**: late glaucoma possible; IOP checks for life."
    ],
    cloze: [
      "Pseudophakic eye with microhyphemas, IOP spikes and transillumination that outlines the IOL: [[UGH]] syndrome.",
      "Acetazolamide acidifies the aqueous and promotes [[sickling]] in sickle cell patients.",
      "Intraocular gas: no flying, high altitude or [[nitrous oxide|N2O]] until it has resorbed.",
      "After a hyphema, rebleeding occurs mostly between day 2 and day [[5|five]].",
      "Angle recession: widened [[ciliary body|ciliary]] band and torn iris processes, compared with the fellow eye.",
      "For hyphema in an at-risk patient, order a [[hemoglobin electrophoresis|electrophoresis]]."
    ],
    triage: [
      { s: "25-year-old man with sickle cell trait: traumatic hyphema, IOP 28 mmHg for 30 hours.", u: "urgent", why: "Sickle cell: IOP ≥ 24 mmHg for more than 24 h → surgical washout; avoid CAIs and hyperosmotics." },
      { s: "80-year-old woman: swollen white cataract, painful red eye, IOP 50, shallow chamber in that eye only.", u: "urgent", why: "Phacomorphic glaucoma: lower IOP without pilocarpine, then prompt lens extraction." },
      { s: "50-year-old man punched in the eye 20 years ago: angle recession, IOP 17, healthy nerve.", u: "routine", why: "Recession without glaucoma: IOP checks for life, since glaucoma can develop years later." }
    ],
    cues: [
      "Shallow chamber in one eye only, white cataract",
      "Repeated microhyphemas in a pseudophakic eye",
      "Widened ciliary band, torn iris processes"
    ]
  },

  "g-dev": {
    essentials: [
      "Infant: **tearing, photophobia, blepharospasm** = congenital glaucoma.",
      "Cornea **> 12 mm** before age 1: highly suspicious.",
      "**Brimonidine contraindicated under age 2** (CNS depression).",
      "Treatment: **angle surgery**; drops are a bridge.",
      "**ICE**: middle-aged woman, one eye, hammered-silver endothelium."
    ],
    cloze: [
      "Haab striae: [[horizontal|horizontal or concentric|concentric]] breaks in Descemet; forceps breaks are vertical or oblique.",
      "Aniridia without family history: screen for a [[Wilms]] tumor.",
      "Every suspicious infant needs a prompt [[examination under anesthesia|EUA|exam under anesthesia]].",
      "In children, glasses and patching for [[amblyopia]] matter as much as the IOP.",
      "An [[isolated]] posterior embryotoxon is common and benign; with iris strands, think Axenfeld-Rieger.",
      "Sturge-Weber: [[B-scan|ultrasound|B-scan ultrasonography]] before surgery, since the choroidal hemangioma predisposes to effusion."
    ],
    triage: [
      { s: "4-month-old infant: tearing, avoids light, squeezes the lids; large, bluish corneas.", u: "urgent", why: "Probable congenital glaucoma: urgent referral, call the on-call attending; examination under anesthesia." },
      { s: "2-month-old infant: isolated tearing, no photophobia, clear corneas of normal size.", u: "routine", why: "Probable congenital nasolacrimal duct obstruction, not glaucoma." }
    ],
    cues: [
      "Tearing, photophobia, blepharospasm in an infant",
      "Haab striae in an enlarged eye",
      "Hammered-silver endothelium, one side only"
    ]
  },

  "g-postop": {
    essentials: [
      "Read **IOP × chamber**: three combinations point to the diagnosis.",
      "**Low + shallow**: leak (positive Seidel), overfiltration or choroidal effusion.",
      "**High + shallow**: aqueous misdirection, suprachoroidal hemorrhage or pupillary block (occluded iridectomy).",
      "**High + deep**: tight flap, blocked ostium or encapsulated bleb.",
      "White bleb, painful red eye: **blebitis**, same day."
    ],
    cloze: [
      "On [[Seidel]] testing, a bright green stream over the bleb indicates a leak.",
      "Grade [[3|III|three]] flat chamber, lens touching the cornea: urgent reformation of the chamber.",
      "High IOP, flat chamber, patent iridectomy, no choroidal dome: [[aqueous misdirection|misdirection|malignant glaucoma]]; occluded iridectomy: pupillary block.",
      "Bleb-related endophthalmitis: intravitreal vancomycin 1 mg/0.1 mL and [[ceftazidime]] 2.25 mg/0.1 mL.",
      "A non-valved [[Baerveldt]] tube is ligated until the capsule forms.",
      "Vision ↓ with low IOP and choroidal folds on OCT: [[hypotony]] maculopathy."
    ],
    triage: [
      { s: "Trabeculectomy 3 years ago: red eye, pain, discharge, milky white bleb, hypopyon.", u: "urgent", why: "Bleb-related endophthalmitis: tap and intravitreal antibiotics the same day, ± vitrectomy." },
      { s: "Postoperative day 1 after trabeculectomy: IOP 4 mmHg, shallow chamber without lens–cornea touch, negative Seidel.", u: "rapide", why: "Overfiltration or effusion: fundus exam, atropine, close monitoring; reform if lens–cornea touch." },
      { s: "Week 1 after trabeculectomy: IOP 30 mmHg, deep chamber, flat bleb.", u: "rapide", why: "High + deep: gonioscopy, then massage, laser suture lysis or removal of a releasable suture." }
    ],
    cues: [
      "Bright green stream over the bleb",
      "Milky white bleb, red eye, hypopyon",
      "IOP 4, shallow chamber, day 1"
    ]
  },

  "phy-aqueuse": {
    essentials: [
      "Aqueous is actively secreted by the **non-pigmented epithelium** of the ciliary processes, ≈ 2.5 µL/min during the day.",
      "**IOP = (F − U) / C + Pv**: production, uveoscleral outflow, outflow facility, episcleral venous pressure.",
      "The **trabecular pathway** carries most of the outflow; its resistance increases in open-angle glaucoma.",
      "**Prostaglandins** increase the uveoscleral pathway (5–30% of outflow), which works day and night.",
      "Through the trabecular pathway, IOP cannot fall below Pv: **filtering surgery** bypasses it."
    ],
    cloze: [
      "Outflow resistance lies mainly in the [[juxtacanalicular]] trabecular meshwork.",
      "[[Timolol|Beta-blockers|beta-blocker]] lowers IOP little at night, because aqueous production is already low during sleep.",
      "[[Carbonic anhydrase]] inhibitors lower IOP by reducing aqueous production.",
      "Episcleral venous pressure (Pv) is about [[8–10 mmHg|8-10 mmHg|8 to 10 mmHg]].",
      "[[Pilocarpine]] increases trabecular outflow but reduces the uveoscleral pathway.",
      "In pigment dispersion, convection currents deposit pigment as a [[Krukenberg]] spindle."
    ],
    triage: [
      { s: "Colored halos, painful red eye, steamy cornea, IOP 56 mmHg, closed angle.", u: "urgent", why: "Acute angle-closure attack: aqueous can no longer exit, IOP must be lowered immediately." },
      { s: "Advanced glaucoma: very low IOP target not reached despite drops and SLT.", u: "rapide", why: "Through the trabecular pathway, IOP cannot fall below Pv: discuss filtering surgery." }
    ],
    cues: [
      "Ciliary processes and carbonic anhydrase",
      "Uveoscleral pathway: 5–30% of outflow",
      "Trabecular meshwork, then Schlemm canal"
    ]
  },

  "phy-pio": {
    essentials: [
      "Normal IOP **10–21 mmHg** (mean ≈ 15–16): 21 is a statistical limit, not a danger threshold.",
      "IOP is the only **modifiable risk factor** whose lowering slows glaucoma.",
      "24-hour variation: **2–6 mmHg**, more in glaucoma; the peak is often nocturnal or early morning.",
      "**Low corneal hysteresis** = increased risk of progression (key factor in AAO 2026).",
      "**Low blood pressure** = reduced optic nerve perfusion: a risk factor (AAO 2026)."
    ],
    cloze: [
      "IOP > 21 mmHg without optic nerve or visual field damage: [[ocular hypertension|OHT]].",
      "The Goldmann tonometer is calibrated for a cornea of about [[520 µm|520]].",
      "Ocular perfusion pressure ≈ [[blood|arterial]] pressure − IOP.",
      "On corticosteroids, [[steroid responders|responders]] develop an IOP rise, especially with drops.",
      "The [[supine|lying down|recumbent]] position raises IOP, because episcleral venous pressure increases.",
      "OHTS predictors: age, IOP, corneal thickness, vertical C/D and [[PSD]]."
    ],
    triage: [
      { s: "IOP 23 mmHg, 600 µm cornea, normal disc and visual field.", u: "routine", why: "At most ocular hypertension, probably overestimated: estimate overall risk (OHTS)." },
      { s: "IOP 2 mmHg after blunt trauma.", u: "urgent", why: "Post-traumatic hypotony: rule out an occult globe rupture or cyclodialysis." }
    ],
    cues: [
      "Only proven modifiable risk factor",
      "Statistical limit of 21 mmHg",
      "Rise in steroid responders"
    ]
  },

  "phy-film-lacrymal": {
    essentials: [
      "Components: meibomian **lipids** on the surface, muco-aqueous phase, glycocalyx that makes the cornea wettable.",
      "Normal **TBUT** > 10 s; a NIBUT < 10 s is a sign of dry eye.",
      "**Vicious circle**: instability → evaporation → hyperosmolarity → inflammation → an even less stable film.",
      "DEWS III: dry eye is **symptomatic**; screen with OSDI-6 ≥ 4, then at least one sign.",
      "**BAK** in drops worsens the ocular surface of glaucoma patients and skews VA, topography and fields."
    ],
    cloze: [
      "Osmolarity ≥ [[308 mOsm/L|308]] in one eye: a sign of dry eye according to DEWS III.",
      "Schirmer I without anesthesia < [[5 mm|5]] in 5 min: severe aqueous deficiency.",
      "The mucin MUC5AC is produced by [[goblet]] cells.",
      "Blinking drops sharply in front of a [[screen|computer screen]], hence end-of-day symptoms.",
      "An osmolarity difference > [[8 mOsm/L|8]] between the two eyes is a sign of dry eye.",
      "Glaucoma patient with a damaged surface: preservative-free drops, fixed combinations or [[SLT]]."
    ],
    triage: [
      { s: "Glaucoma patient on 3 drops: burning, fluctuating vision, inferior SPK.", u: "routine", why: "Surface disease worsened by BAK: preservative-free drops, fixed combinations, SLT." },
      { s: "End-of-day burning at the screen, TBUT 5 s, normal VA.", u: "routine", why: "Unstable film: reduced blinking at the screen increases evaporation." },
      { s: "Sudden vision loss, painful red eye and photophobia.", u: "urgent", why: "Not dry eye: rule out keratitis, uveitis or angle-closure attack the same day." }
    ],
    cues: [
      "Meibomian glands and goblet cells",
      "Osmolarity ≥ 308 mOsm/L",
      "Blinking 15–20 times per minute"
    ]
  },

  "phy-transparence": {
    essentials: [
      "Transparency: regular **collagen fibrils**, spaced less than one wavelength apart; scattering cancels out.",
      "**Deturgescence**: the endothelium pumps water back out (Na⁺/K⁺-ATPase) and keeps the stroma at ≈ 78% water.",
      "**Stromal edema**: thickened, grayish cornea, Descemet folds, moderate vision loss.",
      "**Epithelial edema**: microcysts, bullae, colored halos and marked vision loss.",
      "In an angle-closure attack, IOP > stromal **swelling pressure** (≈ 50–60 mmHg): steamy epithelium."
    ],
    cloze: [
      "Fuchs: vision worse on [[waking|awakening|morning]], improving over the day.",
      "[[Hypertonic]] saline drops or ointments draw water out of the epithelium.",
      "The cornea generally decompensates below [[400–500|400-500|400 to 500]] cells/mm².",
      "[[Endothelial]] keratoplasty (DMEK, DSAEK) replaces the cell layer that pumps water out of the stroma.",
      "A ruptured epithelial bulla causes the pain of [[bullous]] keratopathy.",
      "In a patient with a fragile endothelium, [[lowering IOP|lowering the IOP|lower IOP]] helps the cornea dehydrate."
    ],
    triage: [
      { s: "Corneal graft recipient: redness, photophobia, blurred vision and pain since yesterday.", u: "urgent", why: "RSVP: possible rejection (the graft endothelium is failing), same-day consultation." },
      { s: "Guttae, blurred vision on waking that improves during the day.", u: "routine", why: "Fuchs: specular microscopy and pachymetry; hypertonic saline, endothelial keratoplasty if bothersome." }
    ],
    cues: [
      "Regularly spaced fibrils of ≈ 30 nm",
      "Stroma at ≈ 78% water",
      "Swelling pressure ≈ 50–60 mmHg"
    ]
  },

  "phy-refraction": {
    essentials: [
      "**Cornea** ≈ 43 D (≈ 2/3 of total power); lens ≈ 20 D, variable with accommodation.",
      "**Hyperope** = short eye, shallow chamber: risk of angle closure with age.",
      "**High myope**: tilted disc and peripapillary atrophy, hence a falsely red OCT.",
      "The **pinhole** lets only central rays through: it reduces refractive blur.",
      "**Irregular astigmatism** (keratoconus, scar): poorly corrected by glasses, hence the rigid lens."
    ],
    cloze: [
      "A presbyope with a nuclear cataract can sometimes read again without glasses: [[second sight]].",
      "Presbyopia begins around age [[40–45|40-45|40 to 45]].",
      "Myopia is corrected with a [[concave|minus|negative]] lens.",
      "[[With-the-rule|WTR|with the rule]] astigmatism: vertical meridian steeper, common in the young.",
      "The average adult axial length is about [[23–24 mm|23-24 mm|23 to 24 mm]].",
      "Pigment dispersion mainly affects young [[myopes|myopic patients|myopic]]."
    ],
    triage: [
      { s: "VA 6/18 improving to 6/7.5 with pinhole.", u: "routine", why: "Mainly optical loss: refraction, or a rigid lens if the cornea is irregular." },
      { s: "65-year-old +4 D hyperope: Van Herick 1, normal IOP, no symptoms.", u: "routine", why: "Short eye at risk of closure: gonioscopy before dilating, then discuss LPI or lens extraction." },
      { s: "Sudden painless vision loss in one eye, VA 6/60 not improved with pinhole.", u: "urgent", why: "Non-optical cause: rule out retina or optic nerve (occlusion, detachment) the same day." }
    ],
    cues: [
      "≈ 43 corneal D out of ≈ 60 D",
      "Concave lens for an eye that is too long",
      "Near add around age 40–45"
    ]
  },

  "phy-pupille": {
    essentials: [
      "Each pretectal nucleus innervates **both Edinger-Westphal nuclei**: equal direct and consensual reflexes.",
      "**RAPD**: one optic nerve transmits less light; asymmetric damage is required.",
      "An RAPD **never causes anisocoria**: anisocoria points to an efferent or iris problem.",
      "Pupillary fibers run on the **surface of CN III**: an aneurysm compressing it dilates the pupil.",
      "**Three-neuron sympathetic** pathway (C8–T2 relay, superior cervical ganglion): damage gives a Horner syndrome."
    ],
    cloze: [
      "The parasympathetic pathway synapses in the [[ciliary]] ganglion.",
      "The second-order sympathetic neuron passes over the [[lung apex|pulmonary apex|apex of the lung]].",
      "Some ganglion cells detect light through [[melanopsin]].",
      "Pupillary fibers leave the visual pathway before the lateral geniculate body and reach the [[pretectal]] nuclei.",
      "Anisocoria greater in [[light|bright light]]: the larger pupil is the abnormal one.",
      "An RAPD points to the optic nerve or severely damaged retina, never to a [[cataract]] or refractive error."
    ],
    triage: [
      { s: "Left RAPD and a dense left cataract, cataract surgery planned.", u: "rapide", why: "Cataract does not cause an RAPD: look for optic neuropathy or retinal disease before operating." },
      { s: "Anisocoria of 0.5 mm, the same in dark and light, no ptosis.", u: "routine", why: "Physiologic anisocoria (≤ 1 mm, ≈ 20% of people)." },
      { s: "Small pupil and mild ptosis since yesterday, with neck pain.", u: "urgent", why: "Recent painful Horner: rule out carotid dissection with urgent imaging." }
    ],
    cues: [
      "Double crossing to Edinger-Westphal",
      "Relay in the ciliary ganglion",
      "Pretectal nuclei and melanopsin"
    ]
  },

  "ex-av": {
    essentials: [
      "**Visual acuity** is the vital sign of the eye: always measure it first.",
      "Improvement with **pinhole** = optical cause; otherwise, look at the macula, optic nerve or a dense opacity.",
      "Equivalents: 6/6 = 20/20 = **logMAR 0.0**; 6/12 = 20/40 = 0.3; 6/60 = 1.0.",
      "Glaucoma **spares VA** until an advanced stage: unexplained loss calls for another cause.",
      "**SAAQ** class 5: binocular VA ≥ 6/15 (20/50); heavy vehicles: 6/9."
    ],
    cloze: [
      "If VA is below 6/6, repeat the measurement with the [[pinhole|PH|pinhole occluder]].",
      "6/12 corresponds to 20/40, i.e. logMAR [[0.3|0,3]].",
      "No line read: CF, HM, then LP with [[projection|light projection]] in all 4 quadrants.",
      "For SAAQ class 5, binocular VA must be at least [[6/15|20/50]].",
      "VA loss since childhood, not improved with pinhole, with no visible opacity or lesion: [[amblyopia]].",
      "Measuring with [[reading|near|readers]] glasses rather than distance glasses gives a falsely low VA."
    ],
    triage: [
      { s: "Sudden vision loss, painful red eye, colored halos around lights.", u: "urgent", why: "Angle-closure attack, keratitis or uveitis: immediate assessment." },
      { s: "VA 6/9 on the chart, measured without the usual distance glasses.", u: "routine", why: "Probably falsely low: remeasure with the usual distance correction." },
      { s: "Known glaucoma patient: VA declining without explanation, stable IOP.", u: "rapide", why: "Glaucoma spares VA: look for another cause (macula, cataract) or involvement of fixation (10-2)." }
    ],
    cues: [
      "CF, HM, LP, NLP",
      "Chart at 6 m, one eye covered",
      "Notation 6/9 −2"
    ]
  },

  "ex-pupilles": {
    essentials: [
      "The **swinging flashlight test** is done before any dilation, patient fixating at distance, in a dim room.",
      "**RAPD**: both pupils dilate when the light swings to the affected eye.",
      "A cataract does **not cause a significant RAPD**: finding one means looking at the nerve or retina.",
      "Anisocoria greater **in the dark** → the small pupil is abnormal (Horner); in the light → the large one is abnormal.",
      "Large pupil from **CN III palsy** = aneurysm until proven otherwise, even without pain."
    ],
    cloze: [
      "[[Symmetric|Symmetrical]] bilateral glaucoma does not cause an RAPD, since the test compares the two eyes.",
      "Physiologic anisocoria is at most [[1 mm]] and stays about the same in dark and light.",
      "Oval, poorly reactive mid-dilated pupil, red eye and high IOP: acute [[angle closure|angle-closure attack|closure]].",
      "If one pupil is fixed, look for a [[reverse]] RAPD by watching only the mobile pupil.",
      "Lighting one eye longer or from a different angle creates a false [[RAPD|APD]].",
      "The RAPD is graded 1+ to 3+ or measured with [[neutral density]] filters."
    ],
    triage: [
      { s: "Sudden vision loss in one eye since this morning, with a definite RAPD.", u: "urgent", why: "An RAPD indicates optic nerve damage or a large area of retina: rule out occlusion, AION or detachment." },
      { s: "Large pupil poorly reactive to light, ptosis and diplopia, without pain.", u: "urgent", why: "CN III palsy: aneurysm until proven otherwise, vascular imaging the same day." },
      { s: "Painful red eye, oval poorly reactive mid-dilated pupil, IOP 52 mmHg.", u: "urgent", why: "Acute angle-closure attack (ischemic sphincter): lower IOP immediately." }
    ],
    cues: [
      "Swing back and forth, 2–3 s per eye",
      "Neutral density filters",
      "Alternating light, same intensity, same angle"
    ]
  },

  "ex-lampe": {
    essentials: [
      "Examine **from front to back**: lids, conjunctiva, cornea, anterior chamber, iris, lens, anterior vitreous.",
      "The **optic section** (thin slit at ≈ 45°) localizes the depth of a corneal lesion.",
      "**Guttae** are seen with specular reflection and retroillumination, not with diffuse illumination.",
      "**Van Herick ≤ 2** (≤ 1/4 of corneal thickness) mandates gonioscopy.",
      "**Rubeosis** (new vessels at the pupillary margin) indicates retinal ischemia: gonioscopy and fundus exam the same day."
    ],
    cloze: [
      "Anterior chamber cells are sought in a [[dark|darkened]] room, with a short beam at maximum intensity.",
      "A Krukenberg spindle, a vertical deposit on the endothelium, suggests [[pigment dispersion|pigment dispersion syndrome|PDS]].",
      "Whitish target-pattern deposits on the lens suggest [[pseudoexfoliation|PXF|pseudo-exfoliation]].",
      "Van Herick: thin slit at ≈ 60°, at the [[temporal]] limbus.",
      "A normal Van Herick does not rule out a narrow angle, for example in [[plateau]] iris.",
      "A hypopyon suggests severe keratitis or [[endophthalmitis]]."
    ],
    triage: [
      { s: "Diabetic: fine new vessels at the pupillary margin, seen before dilation.", u: "urgent", why: "Rubeosis = retinal ischemia: gonioscopy and fundus exam the same day." },
      { s: "Hypopyon, pain and vision loss a few days after cataract surgery.", u: "urgent", why: "Possible endophthalmitis: intravitreal tap and inject the same day." },
      { s: "Van Herick 2 on a routine exam, normal IOP, no symptoms.", u: "routine", why: "Possibly narrow angle: gonioscopy before any dilation." }
    ],
    cues: [
      "Optic section, parallelepiped, sclerotic scatter",
      "Systematic front-to-back exam",
      "Van Herick at the temporal limbus"
    ]
  },

  "ex-fluoresceine": {
    essentials: [
      "Read fluorescein under **cobalt blue** within 1–3 minutes, before stromal diffusion.",
      "**Dendrite** with terminal bulbs = herpes simplex; pseudodendrite without bulbs = zoster, Acanthamoeba.",
      "**Positive Seidel** (a stream diluting the dye) = wound or bleb leak.",
      "**Vertical linear staining** → foreign body under the upper lid: always evert it.",
      "**Inferior** SPK: dry eye, blepharitis, lagophthalmos or drop toxicity."
    ],
    cloze: [
      "[[Superior]] SPK mainly suggests contact lens wear.",
      "[[Lissamine]] green stains devitalized cells of the conjunctiva and lid margin.",
      "A dark area on a green background, or [[negative]] staining, indicates an elevation lifting the tear film.",
      "A [[geographic]] ulcer is an enlarged herpetic lesion, often on corticosteroids.",
      "Fluorescein stains [[soft]] contact lenses: remove them before the test.",
      "According to DEWS III, more than [[5 spots|5|five]] of corneal fluorescein staining is a sign of dry eye."
    ],
    triage: [
      { s: "After trabeculectomy: IOP 4 mmHg, shallow chamber, stream on Seidel testing.", u: "urgent", why: "Bleb leak: notify the glaucoma specialist the same day to prevent hypotony, flat chamber and infection." },
      { s: "Dark areas in map-like lines on a green background, without pain or redness.", u: "routine", why: "Negative staining: an elevation under the film, as in epithelial basement membrane dystrophy." },
      { s: "Contact lens wearer: painful red eye, 3 mm infiltrate near the center, chamber reaction.", u: "urgent", why: "Infectious keratitis (1-2-3 rule): cultures and fortified drops the same day." }
    ],
    cues: [
      "Stream under cobalt blue over a wound",
      "Terminal bulbs under cobalt blue",
      "Dark area on a green background"
    ]
  },

  "ex-tonometrie": {
    essentials: [
      "Goldmann: read when the **inner edges** of the mires touch; dial × 10 = mmHg.",
      "**Mires too thick** → overestimation; too thin → underestimation.",
      "Thin cornea, edema or **post-LASIK** → IOP underestimated; thick cornea → overestimated.",
      "**IOP elevated in one eye only**: look for a secondary cause (PXF, pigment dispersion, uveitis, recession, new vessels, corticosteroids).",
      "Record the **time and the device**: readings from different tonometers are not interchangeable."
    ],
    cloze: [
      "The Goldmann prism flattens a disc of [[3.06 mm|3,06 mm|3.06]].",
      "Astigmatism > 3 D: set the minus-cylinder axis at [[43°|43]] on the red mark.",
      "The [[iCare]] rebound tonometer is used without anesthesia, useful in children.",
      "Pressure on the lids, breath-holding or a tight tie cause IOP to be [[overestimated|overestimation|falsely high]].",
      "A very low IOP after trauma raises concern for an occult globe rupture or [[cyclodialysis|cyclodialysis cleft]].",
      "Glaucomatous damage with IOP always ≤ 21 mmHg: [[normal-tension|normal tension|normal-pressure|low-tension]] glaucoma."
    ],
    triage: [
      { s: "IOP read at 25 mmHg with thick mires; normal disc and visual field.", u: "routine", why: "Too much fluorescein overestimates IOP: remeasure with thin mires before concluding." },
      { s: "IOP 31 mmHg in one eye only, whitish target-pattern deposits on the lens.", u: "rapide", why: "Asymmetric IOP: a secondary cause, here pseudoexfoliation (aggressive glaucoma), to be assessed." },
      { s: "IOP 13 mmHg after LASIK, but an enlarging optic cup.", u: "rapide", why: "Thinned cornea = IOP underestimated: OCT, visual field and pre-surgery IOP." }
    ],
    cues: [
      "Two green semicircles touching",
      "Dial × 10 = mmHg",
      "Prism rotated to 43°"
    ]
  },

  "ex-gonioscopie": {
    essentials: [
      "Gonioscopy in a **dark room**, short beam off the pupil: light falsely opens the angle.",
      "Posterior → anterior order: \"**I Can't See Til Schwalbe**\" (iris, ciliary body band, spur, trabecular meshwork, Schwalbe).",
      "**Indentation** distinguishes apposition (the angle opens) from synechiae (PAS, which stay stuck).",
      "Iridotrabecular contact **≥ 180°** with normal IOP, no PAS and no neuropathy = PACS.",
      "**Angle new vessels** (crossing the spur) = early neovascular glaucoma: look for retinal ischemia urgently."
    ],
    cloze: [
      "The [[Sampaolesi]] line, pigment anterior to Schwalbe, suggests pseudoexfoliation.",
      "A widened ciliary body band and torn iris processes suggest [[angle recession|recession]].",
      "Shaffer 1: only [[Schwalbe|Schwalbe line|Schwalbe's line]] line is visible (≤ 10°).",
      "Start with the [[inferior]] quadrant, the widest and most pigmented.",
      "The mirror placed at 12 o'clock shows the [[6 o'clock|6]] angle.",
      "Iris bombé: ask the patient to look [[toward the mirror|into the mirror]] to see over the hill."
    ],
    triage: [
      { s: "Diabetic, IOP 26 mmHg: vessels crossing the spur and arborizing over the trabecular meshwork.", u: "urgent", why: "Angle new vessels: find and treat retinal ischemia urgently." },
      { s: "Iridotrabecular contact over 270°, normal IOP, no PAS or nerve damage.", u: "routine", why: "PACS: prophylactic LPI reduces the risk, but the risk is low; shared decision." },
      { s: "Widened, asymmetric ciliary body band, years after a punch; normal IOP.", u: "routine", why: "Angle recession: monitor IOP for life (glaucoma possible years later)." }
    ],
    cues: [
      "Indentation: the angle opens or stays stuck",
      "Schwalbe line at the corneal wedge",
      "Shaffer grade by quadrant"
    ]
  },

  "ex-pachymetrie": {
    essentials: [
      "Normal central corneal thickness: **≈ 540–550 µm**; periphery ≈ 650–700 µm.",
      "OHTS: CCT **≤ 555 µm** ≈ 3 times more conversion to glaucoma than > 588 µm.",
      "**No IOP correction formula** is validated: integrate CCT into the overall risk.",
      "CCT increasing or thicker than the fellow eye → **edema** (Fuchs, decompensation, rejection).",
      "Keratoconus: a displaced **thinnest point** that is thinning = progression that warrants CXL."
    ],
    cloze: [
      "An ultrasound probe that is not [[perpendicular]] or is decentered overestimates corneal thickness.",
      "A thin cornea causes IOP to be [[underestimated|underestimation|falsely low]] on Goldmann.",
      "After LASIK, the low CCT reflects the [[ablation]]: OHTS risk thresholds do not apply.",
      "The cornea is slightly thicker on [[waking|awakening|morning]], after a night with the lids closed.",
      "To follow keratoconus, compare measurements taken on the same [[device|instrument|machine]].",
    ],
    triage: [
      { s: "IOP 26 mmHg, CCT 610 µm, normal disc and visual field.", u: "routine", why: "Ocular hypertension partly artifactual: integrate CCT into the overall risk, without a formula." },
      { s: "Keratoconus: thinnest point from 470 to 445 µm in one year.", u: "rapide", why: "Progressive thinning = progression: discuss CXL without delay." },
      { s: "Glaucoma suspect who had LASIK, CCT 480 µm.", u: "routine", why: "Low CCT due to ablation: IOP underestimated, OHTS thresholds not applicable." }
    ],
    cues: [
      "Ultrasound probe perpendicular at the center",
      "≤ 555 µm: risk × 3 (OHTS)",
      "Average of several contact readings"
    ]
  },

  "ex-papille": {
    essentials: [
      "Describe the **disc size** first: a C/D of 0.7 can be normal on a large disc.",
      "**Vertical C/D > 0.6** or asymmetry ≥ 0.2 = suspicious disc, depending on disc size.",
      "A **Drance hemorrhage** (flame at the disc margin) indicates active disease at risk of progression.",
      "**Pallor > cupping** or a swollen disc → think of a non-glaucomatous cause and investigate.",
      "Define the cup by **contour** (bending of the vessels), not by pallor."
    ],
    cloze: [
      "The neuroretinal rim often follows the [[ISNT]] rule, which ranks its sectors from thickest to thinnest.",
      "Peripapillary atrophy of the [[beta|beta zone|β]] zone is associated with glaucoma; the alpha zone is common.",
      "With a 90 D lens, multiply the disc height by ≈ [[1.3|1,3]].",
      "The normal disc is ≈ [[1.5–2 mm|1.5-2 mm|1.5 to 2 mm]] in height.",
      "RNFL defects are best seen with [[red-free|green]] light.",
      "A [[documented]] change on photos or OCT is worth more than an isolated measurement."
    ],
    triage: [
      { s: "Glaucoma patient on follow-up: small flame hemorrhage at the inferotemporal disc margin.", u: "rapide", why: "Drance hemorrhage: active disease, review progression and the IOP target." },
      { s: "Pale neuroretinal rim with subtle cupping, progressive vision loss.", u: "rapide", why: "Pallor > cupping: non-glaucomatous cause (compression) to investigate, often with imaging." },
      { s: "Vertical C/D of 0.7 on a large disc, regular rim, normal OCT and field.", u: "routine", why: "C/D tracks disc size: probably physiologic, follow." }
    ],
    cues: [
      "Factor of 1.3 with the 90 D lens",
      "Inferotemporal rim notch",
      "Bayoneting vessels, beta-zone PPA"
    ]
  },

  "ex-oct": {
    essentials: [
      "AAO 2026 recommends **peripapillary RNFL and macular GCIPL**, at baseline and at follow-up.",
      "Check **scan quality** (signal, centering, segmentation) before reading the colors.",
      "Most common thinning: **inferotemporal**, which corresponds to a superior field defect.",
      "**Floor effect**: the RNFL no longer drops below ≈ 50–60 µm; then follow fields and GCIPL.",
      "**Red disease** = false positive (high myopia, tilted disc); green disease = false negative (edema, membrane)."
    ],
    cloze: [
      "The normal TSNIT curve has a [[double-hump|double hump|double-humped]] shape.",
      "An arc of GCIPL thinning stops at the [[horizontal]] raphe.",
      "Normal average adult RNFL is about [[90–100 µm|90-100 µm|90 to 100 µm]].",
      "An epiretinal membrane falsely thickens the measurement: this is [[green disease|a false negative|false negative]].",
      "For plateau iris, [[UBM]] is superior to anterior segment OCT.",
      "On AS-OCT, [[iridotrabecular]] contact can predict closure even if gonioscopy looks open."
    ],
    triage: [
      { s: "−9 D myope: RNFL OCT entirely red, normal visual field.", u: "routine", why: "Probable red disease: check segmentation, correlate with the field (10-2), follow over time." },
      { s: "Vision loss in one eye, hemorrhages in all 4 quadrants, thickened RNFL.", u: "rapide", why: "CRVO: retina promptly; the RNFL OCT of that eye is uninterpretable for months." },
      { s: "Advanced glaucoma: RNFL stable at 55 µm for 2 years, but the visual field is progressing.", u: "rapide", why: "Floor effect: the RNFL no longer declines; rely on the field and GCIPL." }
    ],
    cues: [
      "Double-hump TSNIT curve",
      "Floor effect around 50–60 µm",
      "Red disease in high myopia"
    ]
  },

  "ex-topographie": {
    essentials: [
      "**Placido**: curvature of the anterior surface only; warm = steep, cool = flat.",
      "**Tomography** adds anterior and posterior elevation and a pachymetry map (Scheimpflug or OCT).",
      "Keratoconus: **inferior steepening**, asymmetric bowtie with skewed axes, posterior elevation ↑.",
      "Documented **progression** is the main criterion for CXL; in children, CXL at diagnosis.",
      "**Forme fruste** (abnormal posterior elevation or BAD-D): LASIK contraindicated."
    ],
    cloze: [
      "Pellucid marginal degeneration: [[crab-claw|crab claw|kissing doves]] pattern with against-the-rule astigmatism.",
      "With-the-rule astigmatism: symmetric [[vertical]] bowtie.",
      "Rabinowitz: a central K > [[47.2 D|47.2|47,2 D]] raises suspicion of keratoconus.",
      "Recently worn contact lenses can create [[pseudokeratoconus|warpage|corneal warpage]].",
      "A dry tear film creates a false cone: repeat the map after [[lubrication|artificial tears]].",
      "Progression per Gomes 2015: at least [[2 criteria|two criteria|2]] among anterior steepening, posterior steepening and thinning."
    ],
    triage: [
      { s: "14-year-old adolescent: newly diagnosed keratoconus, no documented progression.", u: "rapide", why: "2nd global consensus (2025): CXL at diagnosis in children, without waiting for progression." },
      { s: "LASIK candidate: near-normal anterior topography, abnormal posterior elevation.", u: "routine", why: "Forme fruste: LASIK contraindicated (risk of ectasia)." },
      { s: "Rigid contact lens wearer: irregular map suggesting a cone.", u: "routine", why: "Possible lens-induced warpage: stop the lenses long enough, then repeat the map." }
    ],
    cues: [
      "Asymmetric bowtie with skewed axes",
      "Crab-claw pattern",
      "Warm = steep, cool = flat"
    ]
  },

  "ex-champs-visuels": {
    essentials: [
      "Read **reliability** first: false positives > 15% = unreliable test.",
      "Glaucoma respects the **horizontal meridian**; the chiasm and retrochiasmal pathways, the vertical.",
      "**Depressed TD, normal PD** = diffuse depression (cataract, small pupil), not a glaucomatous defect.",
      "Stages: early **MD > −6 dB**, moderate −6 to −12, advanced < −12 dB.",
      "Fast progressor ≥ −2 dB/year: about **3 fields a year** for 2 years (Chauhan)."
    ],
    cloze: [
      "The 24-2 has 54 points spaced [[6°|6 degrees]] apart.",
      "A superior arcuate defect corresponds to the [[inferior|inferotemporal]] pole of the disc.",
      "Do not mix SITA Standard and SITA Fast in a [[progression]] analysis.",
      "A first abnormal field must be confirmed because of the [[learning]] effect.",
      "SAAQ class 5: binocular field of at least [[100°|100 degrees]] along the horizontal meridian.",
      "Bitemporal defect = [[chiasm|chiasmal]] lesion → neuroimaging."
    ],
    triage: [
      { s: "Visual field with 25% false positives and an excellent MD.", u: "routine", why: "Unreliable test (\"trigger-happy\"): repeat it before concluding." },
      { s: "Reliable fields: MD falling by −2.5 dB per year.", u: "rapide", why: "Fast progressor (≥ −2 dB/year): review the target and treatment without delay." },
      { s: "Known glaucoma patient: new right homonymous defect respecting the vertical meridian.", u: "urgent", why: "Not glaucoma progression: stroke or mass, urgent brain imaging." }
    ],
    cues: [
      "MD, PSD, VFI and GHT",
      "Nasal step on the 24-2",
      "False positives > 15%"
    ]
  },

  "ex-speculaire": {
    essentials: [
      "Endothelial cell density: **≈ 3000–3500 cells/mm²** in young adults, ≈ 2500 around age 60–70.",
      "The cornea generally decompensates below **400–500 cells/mm²**.",
      "**Guttae** = dark areas in the mosaic: Fuchs dystrophy.",
      "**CV ↑ and hexagonality ↓** = stressed endothelium, sometimes before density falls.",
      "Angle-closure attacks, a tube too close to the cornea and **repeated intracameral implants** cause density to drop."
    ],
    cloze: [
      "Polymegathism is measured by the [[coefficient of variation|CV]] of cell size.",
      "Pleomorphism is expressed as the percentage of [[hexagonal cells|hexagons|hexagonality]].",
      "Age-related endothelial loss is about [[0.6 %|0.6|0,6 %]] per year.",
      "An [[edematous]] cornea makes imaging impossible, which does not mean it is normal.",
      "Guttae and a thick cornea: discuss [[combined|triple]] cataract + DMEK surgery rather than cataract surgery alone.",
      "A tube can damage the endothelium in the [[periphery]]: do not measure only the center."
    ],
    triage: [
      { s: "Confluent guttae, thick cornea, vision worse in the morning; cataract to be operated.", u: "routine", why: "Specular and pachymetry: discuss cataract + DMEK rather than cataract surgery alone." },
      { s: "A few weeks after a treated acute angle-closure attack, cornea clear again.", u: "routine", why: "Specular microscopy is useful: the attack causes endothelial cell loss." }
    ],
    cues: [
      "Endothelial cell density in cells/mm²",
      "Polymegathism and pleomorphism",
      "Coefficient of variation and % hexagonality"
    ]
  },

  "a5-cataracte-nucleaire": {
    essentials: [
      "With age, the nucleus compacts, yellows and hardens: this is **nuclear sclerosis**.",
      "Progressive myopic shift: the presbyope reads without glasses again, the **second sight**.",
      "We operate for **functional impairment**, not for the grade alone.",
      "Hard nucleus = more ultrasound = more **endothelial loss**: caution in a patient with Fuchs.",
      "**Lens extraction** is a true treatment for angle closure (EAGLE)."
    ],
    cloze: [
      "Nuclear density is judged with a thin, [[oblique]] slit, not with diffuse light.",
      "The standardized [[LOCS III|LOCS]] scale compares the lens with reference photos.",
      "A brunescent nucleus lowers total deviation but leaves [[pattern|PD|pattern deviation]] deviation normal.",
      "Rapid unexplained myopic shift: think hyperglycemia or anterior lens [[subluxation]].",
      "Guttae before phaco: order [[specular]] microscopy and pachymetry.",
      "EAGLE: lens extraction preferred for PAC with IOP ≥ [[30 mmHg|30]] or PACG, from age 50."
    ],
    triage: [
      { s: "75-year-old man: reading without glasses for months, amber nucleus, little bothered.", u: "routine", why: "Nuclear cataract: operate based on functional impairment, not on the grade." },
      { s: "Known nuclear cataract: sudden vision loss in one eye over 2 days.", u: "urgent", why: "Cataract reduces vision slowly: look for a retinal or optic nerve cause the same day." },
      { s: "Glaucoma patient with a brunescent nucleus: total deviation depressed everywhere, normal pattern deviation.", u: "routine", why: "Diffuse depression from cataract, not glaucoma progression." }
    ],
    cues: [
      "Yellow-brown nucleus on oblique slit",
      "Progressive myopic shift, dulled blues",
      "Hard nucleus: more ultrasound during phaco"
    ]
  },

  "a5-cataracte-corticale-scp": {
    essentials: [
      "Cortical: **white spokes** starting from the periphery, hidden behind the iris without dilation.",
      "**PSC**: granular central plaque in front of the posterior capsule; small but very disabling.",
      "PSC is the cataract of **corticosteroids**: graft and uveitis patients on long-term drops.",
      "**Retroillumination** through a dilated pupil silhouettes the opacities against the red reflex.",
      "Stable congenital **sutural** cataract: not an indication for surgery on its own."
    ],
    cloze: [
      "PSC is bothersome at near and in bright sunlight, because [[miosis]] forces light through the plaque.",
      "Complaints out of proportion to chart VA: measure VA with a [[glare test|glare|glare testing]].",
      "With PSC on steroids, also measure the [[IOP|intraocular pressure]].",
      "Sutural cataract forms a [[Y]]-shaped opacity along the embryonic sutures.",
      "To see a PSC at the slit lamp, focus [[behind the nucleus]]."
    ],
    triage: [
      { s: "35-year-old patient at 6/7.5 on the chart, unable to drive at night because of glare.", u: "routine", why: "Look for a small central PSC on retroillumination; surgery based on impairment." },
      { s: "Corneal graft recipient on long-term prednisolone: bothersome PSC, normal IOP.", u: "routine", why: "Steroid-induced PSC: surgery based on impairment, coordinated with the cornea team." },
      { s: "Y-shaped opacity found incidentally, VA 6/6, no symptoms.", u: "routine", why: "Stable congenital sutural cataract: no surgical indication." }
    ],
    cues: [
      "White spokes like those of a wheel",
      "Glistening granular plaque in the center",
      "Congenital Y-shaped opacity"
    ]
  },

  "a5-cataracte-mature": {
    essentials: [
      "**Mature** cataract: opaque edge to edge, no red reflex.",
      "**Morgagnian**: liquefied cortex, nucleus sunk to the bottom of the bag (hypermature stage).",
      "No fundus view: **B-scan mandatory** before surgery (detached retina, tumor).",
      "Intumescent lens closing the angle = **phacomorphic glaucoma**; proteins clogging the meshwork = phacolytic.",
      "In the OR, **trypan blue** stains the anterior capsule to complete the capsulorhexis."
    ],
    cloze: [
      "Vision at LP: test [[light projection|projection]] in all 4 quadrants and look for an RAPD.",
      "Open angle, deep chamber and white particles in the anterior chamber: [[phacolytic]] glaucoma.",
      "Swollen white cataract, chamber shallower than the fellow eye and closed angle: [[phacomorphic]] glaucoma.",
      "Optical biometry often fails: plan [[ultrasound|A-scan|ultrasonic]] biometry.",
      "A capsule under tension that tears as soon as it is opened: the [[Argentinian flag|Argentine flag]] sign."
    ],
    triage: [
      { s: "White cataract, no red reflex, good LP projection, normal IOP, open angle.", u: "rapide", why: "Surgery within a few weeks; B-scan and ultrasound biometry beforehand." },
      { s: "Swollen white cataract, shallow chamber compared with the fellow eye, closed angle, IOP 46 mmHg.", u: "urgent", why: "Phacomorphic glaucoma: lower IOP the same day, then prompt lens extraction." }
    ],
    cues: [
      "Leukocoria in an adult",
      "Brown nucleus sunk to the bottom of the bag",
      "No red reflex on retroillumination"
    ]
  },

  "a5-opacification-capsulaire": {
    essentials: [
      "Residual lens cells haze the **posterior capsule** behind the IOL.",
      "Retroillumination: gray haze, fibrosis or **Elschnig pearls** behind a clear, centered IOL.",
      "Before **YAG capsulotomy**, rule out macular edema on OCT.",
      "Glaucoma patient: **alpha-agonist** before or after the YAG, minimal energy, IOP rechecked within hours.",
      "After a YAG, return urgently for **flashes, floaters or a curtain** (retinal detachment)."
    ],
    cloze: [
      "An IOP spike after a YAG can wipe out what little field remains in [[advanced]] glaucoma.",
      "IOP spike prophylaxis: [[apraclonidine|brimonidine|alpha-agonist]] before or right after the laser.",
      "Rare YAG risks: [[cystoid]] macular edema, retinal detachment, IOL pitting.",
      "IOL exchange being considered: discuss it before the laser, since an [[intact]] capsule makes surgery easier.",
      "Before a YAG, an [[OCT|macular OCT]] rules out macular edema as the cause of vision loss."
    ],
    triage: [
      { s: "Pseudophakic for 3 years: progressive haze, Elschnig pearls, normal macular OCT.", u: "routine", why: "Posterior capsule opacification: YAG capsulotomy." },
      { s: "Two days after a YAG, high myope: flashes, floaters and a curtain.", u: "urgent", why: "Possible retinal detachment: dilated exam the same day." },
      { s: "Advanced glaucoma: YAG capsulotomy done this morning without prophylaxis.", u: "urgent", why: "Possible IOP spike: remeasure IOP within the next few hours." }
    ],
    cues: [
      "Elschnig pearls behind the IOL",
      "Haze that returns years later",
      "Clear IOL, gray haze behind it"
    ]
  },

  "a5-bscan": {
    essentials: [
      "**B-scan** shows the inside of the eye when the fundus cannot be seen (white cataract, hemorrhage, opaque cornea).",
      "The scan is named for the meridian examined, **opposite the probe**.",
      "**High gain** to see weak echoes; lower it to compare reflectivity.",
      "Detached retina: thick membrane **attached to the optic nerve**; detached vitreous: thin and very mobile.",
      "Possible open globe: **no contact ultrasound**."
    ],
    cloze: [
      "The probe is on the left of the screen; its [[marker]] corresponds to the top of the image.",
      "To see the 12 o'clock meridian, place the probe at [[6 o'clock|6]], with the patient looking up.",
      "Very short eye, high hyperopia and thick sclera: [[nanophthalmos]].",
      "On B-scan, clear fluid content is [[anechoic|echolucent]].",
      "Gain set too [[low]] makes a posterior vitreous detachment or mild hemorrhage disappear.",
      "[[Longitudinal]] scan: marker perpendicular to the limbus, one meridian from the posterior pole to the periphery."
    ],
    triage: [
      { s: "White cataract; on B-scan, a thick V-shaped membrane attached to the optic nerve.", u: "urgent", why: "Retinal detachment: refer to retina the same day." },
      { s: "Hypotony after trabeculectomy; on B-scan, thick domes not attached to the nerve, anechoic content.", u: "urgent", why: "Serous choroidal detachment: look for the cause and notify the glaucoma specialist the same day." },
      { s: "High hyperopia, very short eye with thick sclera on B-scan, cataract to be operated.", u: "routine", why: "Nanophthalmos: gonioscopy and warn the surgeon (uveal effusion, angle closure)." }
    ],
    cues: [
      "Probe on the closed lid, with gel",
      "Fan-shaped section through the globe",
      "Gain near maximum"
    ]
  },

  "a5-decollement-retine": {
    essentials: [
      "**Rhegmatogenous**: a tear lets vitreous fluid pass under the retina.",
      "Flashes, new floaters, then an advancing **curtain**, on the side opposite the detachment.",
      "**Shafer sign** (tobacco dust in the anterior vitreous): strongly associated with a tear.",
      "**Macula-on** = a true emergency: call retina the same day to save central vision.",
      "**Tractional**: fibrovascular membranes in diabetics pulling on the retina, without a tear."
    ],
    cloze: [
      "A superior detachment causes a shadow in the [[inferior|lower]] field.",
      "The typical tear is [[horseshoe|horseshoe-shaped|U-shaped]], often in the superior periphery.",
      "Because tears are peripheral, examine dilated with [[scleral depression|depression|indentation]].",
      "Miotics such as [[pilocarpine]] have been associated with tears and detachments.",
      "Macula-off: prognosis depends on the [[duration]] of the detachment.",
      "Tractional detachment: look for [[new vessels|neovascularization|neovessels]] on the iris and in the angle."
    ],
    triage: [
      { s: "High myope: flashes then a curtain since yesterday, VA 6/6, bullous superior detachment.", u: "urgent", why: "Macula-on: call retina the same day, central vision is at stake." },
      { s: "Macula-off detachment for 3 days, VA count fingers.", u: "urgent", why: "Also refer the same day; repair is done in the following days." },
      { s: "Flashes and new floaters for 2 days, pigment in the anterior vitreous.", u: "urgent", why: "Shafer sign: find the tear (dilated exam with depression) or refer without delay." }
    ],
    cues: [
      "Tobacco dust in the anterior vitreous",
      "Advancing curtain after flashes",
      "Horseshoe tear"
    ]
  },

  "a5-decollement-choroidien": {
    essentials: [
      "Choroidal detachment: **smooth brown domes**, firm, in the periphery, immobile with eye movement.",
      "**Serous**: low IOP, little pain, often after filtering surgery (overfiltration, leak).",
      "**Hemorrhagic**: sudden severe pain, high IOP, flat chamber, during or after surgery.",
      "On B-scan, the domes **do not attach to the optic nerve**, unlike detached retina.",
      "No **pilocarpine** in a chamber flattened by effusion: it worsens the forward shift."
    ],
    cloze: [
      "Domes touching centrally (kissing) or contact with the cornea: discuss [[drainage]].",
      "Effusion without surgery, pain and a [[T]] sign on B-scan: posterior scleritis.",
      "Drug-induced ciliochoroidal effusion: think of [[topiramate]].",
      "Serous effusion with hypotony: look for a leak with the [[Seidel]] test.",
      "Flat chamber with high IOP: suprachoroidal hemorrhage or aqueous [[misdirection|mal-direction]].",
      "Before draining the blood, one often waits for the clot to [[liquefy|liquefied|liquefaction]] (1 to 2 weeks)."
    ],
    triage: [
      { s: "After trabeculectomy: IOP 3 mmHg, brown domes in the periphery, little pain.", u: "urgent", why: "Serous effusion from hypotony: Seidel, cycloplegic, steroid and the glaucoma specialist the same day." },
      { s: "Sudden severe pain after surgery, IOP 45 mmHg, flat chamber.", u: "urgent", why: "Suprachoroidal hemorrhage: lower IOP, relieve pain and notify the surgeon urgently." }
    ],
    cues: [
      "Kissing brown domes",
      "Ora serrata visible without depression",
      "Postoperative hypotony and brown domes"
    ]
  },

  "a5-dmla": {
    essentials: [
      "Dry AMD: yellow **drusen** under the pigment epithelium, then geographic atrophy at the advanced stage.",
      "**Neovascular** form: hemorrhage or subretinal fluid, metamorphopsia; vision can drop within days.",
      "**Amsler grid**, one eye at a time: wavy lines or a missing central area.",
      "**Anti-VEGF** injections raise IOP after each injection: monitor in glaucoma patients.",
      "AMD distorts VA, the central field and **macular GCIPL**: do not conclude progression."
    ],
    cloze: [
      "[[AREDS2]] supplements target the intermediate stage or a fellow eye already at the advanced stage.",
      "[[Geographic]] atrophy reveals the large choroidal vessels in a pale, sharply demarcated area.",
      "Recent metamorphopsia: referral to retina within a few [[days]] for anti-VEGF.",
      "On the cornea, the povidone-[[iodine]] used for each injection irritates a fragile epithelium.",
      "Dry form: baseline OCT, Amsler at home and [[smoking]] cessation."
    ],
    triage: [
      { s: "Glaucoma patient: wavy door frame for 4 days, subretinal hemorrhage.", u: "rapide", why: "Neovascular AMD: retina within a few days for anti-VEGF." },
      { s: "A few small drusen, VA 6/6, no symptoms.", u: "routine", why: "Early form: no supplements; Amsler, smoking cessation and follow-up." },
      { s: "Glaucoma patient on anti-VEGF: IOP remains elevated between injections.", u: "rapide", why: "Sustained rise: note the injection dates and discuss with the retina specialist." }
    ],
    cues: [
      "Confluent drusen, sharply demarcated atrophy",
      "Subretinal hemorrhage after age 50"
    ]
  },

  "a5-retinopathie-diabetique": {
    essentials: [
      "Nonproliferative: **microaneurysms**, dot-blot hemorrhages, hard exudates, cotton-wool spots.",
      "**4-2-1** rule (severe form): hemorrhages in 4 quadrants, venous beading in 2, IRMA in 1; one criterion is enough.",
      "Proliferative: **NVD or NVE**, then vitreous hemorrhage and tractional detachment.",
      "Examine the **iris before dilating** and do gonioscopy if retinopathy is advanced or IOP is elevated.",
      "After **PRP**, the laser itself leaves peripheral field defects, not necessarily due to glaucoma."
    ],
    cloze: [
      "New vessels in the [[angle]] can appear before iris new vessels visible at the slit lamp.",
      "IRMA lie within the retina; new vessels lie on the [[surface]] and leak heavily.",
      "Before cataract surgery, first treat or stabilize diabetic [[macular edema|DME]].",
      "Ischemic retina releases [[VEGF]], which drives new vessel growth.",
      "Venous [[beading]] is a sign of severity in the nonproliferative form.",
      "On angiography, the [[nonperfused|non-perfused|unperfused]] periphery appears dark, with no capillaries."
    ],
    triage: [
      { s: "Diabetic: NVD and a small vitreous hemorrhage, angle without new vessels.", u: "rapide", why: "Proliferative retinopathy: retina within a few days for PRP and/or anti-VEGF." },
      { s: "Center-involving diabetic macular edema; cataract to be operated.", u: "rapide", why: "Retina for anti-VEGF; stabilize the edema before cataract surgery." },
      { s: "Diabetic, IOP 30 mmHg: angle new vessels on gonioscopy.", u: "urgent", why: "Early neovascular glaucoma: treat the ischemia (PRP, anti-VEGF) urgently." }
    ],
    cues: [
      "Venous beading and IRMA",
      "Fine vascular fronds on the disc",
      "Microaneurysms and dot hemorrhages"
    ]
  },

  "a5-occlusions-retiniennes": {
    essentials: [
      "**CRAO**: pale opaque retina, cherry-red spot, attenuated arterioles; it is a stroke of the eye.",
      "Acute CRAO: send **immediately** to the emergency department of a stroke center.",
      "CRAO at age 50 or older: rule out **giant cell arteritis** (ESR, CRP, platelets).",
      "**CRVO**: hemorrhages in all 4 quadrants, dilated tortuous veins, swollen disc.",
      "Ischemic CRVO: gonioscopy about monthly, risk of **90-day glaucoma**."
    ],
    cloze: [
      "A bright yellow embolus at an arteriolar bifurcation is a [[Hollenhorst]] plaque.",
      "A [[cilioretinal]] artery can spare central vision in a CRAO.",
      "Ischemic CRVO: PRP as soon as NVI or NVA appears, rather than [[prophylactically|prophylaxis|prophylactic]] (CVOS).",
      "BRVO occurs at an [[arteriovenous|AV|arterio-venous]] crossing, where the rigid arteriole compresses the vein.",
      "Glaucoma and [[elevated|high|raised]] IOP are risk factors for CRVO.",
      "After a CRVO, an RNFL OCT falsely thickened by edema is [[green disease|a false negative|false negative]]."
    ],
    triage: [
      { s: "72-year-old man: sudden black vision in one eye for 1 h, cherry-red spot.", u: "urgent", why: "CRAO. Emergency: immediately (the same day), like a stroke; rule out giant cell arteritis." },
      { s: "Hemorrhages in all 4 quadrants, VA 6/24, iris and angle without new vessels.", u: "rapide", why: "CRVO: ophthalmology within the week for macular edema; surveillance gonioscopy." },
      { s: "Hollenhorst plaque found incidentally, no symptoms.", u: "rapide", why: "Vascular warning sign: notify the family physician for a carotid workup." }
    ],
    cues: [
      "Macular cherry-red spot",
      "Blood and thunder in 4 quadrants",
      "Bright yellow embolus at a bifurcation"
    ]
  },

  "a5-retinopathie-hypertensive": {
    essentials: [
      "Chronic hypertension: **narrowed arterioles** and pathological arteriovenous crossings (AV nicking).",
      "Severe flare: **flame hemorrhages**, cotton-wool spots and hard exudates, sometimes in a star.",
      "Swollen disc + very high BP = **malignant hypertension**: an immediate medical emergency.",
      "BP is lowered **gradually**: a sudden drop can cause optic nerve or brain ischemia.",
      "Always **take the BP** in bilateral optic disc swelling."
    ],
    cloze: [
      "The normal artery/vein caliber ratio is about [[2/3|two thirds|two-thirds]].",
      "A cotton-wool spot is an [[infarct|infarction]] of the nerve fiber layer.",
      "Hypertension is the main risk factor for [[BRVO|branch retinal vein occlusion]].",
      "Hard exudate: bright yellow with sharp edges; cotton-wool spot: [[fluffy]] white with blurred edges.",
      "AAO 2026 adds [[low]] BP as a risk factor for glaucoma."
    ],
    triage: [
      { s: "Narrow arterioles and pathological crossings, BP 150/90, no symptoms.", u: "routine", why: "Chronic signs: record the BP in the chart and notify the family physician." },
      { s: "Headache, BP 230/130, swollen discs, flame hemorrhages.", u: "urgent", why: "Malignant hypertension: immediate transfer to the ED (BP lowered gradually)." },
      { s: "45-year-old man: cotton-wool spots and flame hemorrhages, but normal BP.", u: "rapide", why: "Look for another cause: diabetes, HIV, systemic disease." }
    ],
    cues: [
      "Vein pinched at the crossing, narrowed arterioles",
      "Markedly reduced artery/vein ratio",
      "Thin arterioles, flame hemorrhages, cotton-wool spots"
    ]
  },

  "a5-macula-chirurgicale": {
    essentials: [
      "**Epiretinal membrane**: cellophane sheen and folds; on OCT, a hyperreflective line that effaces the foveal pit.",
      "Full-thickness **macular hole**: defect through all layers on OCT; surgery, better if recent.",
      "**CSCR**: blister of clear fluid under the macula, promoted by steroids by any route.",
      "New **metamorphopsia**: Amsler grid, then macular OCT the same day if possible.",
      "Never **stop a graft patient's steroid abruptly** for CSCR: risk of rejection."
    ],
    cloze: [
      "On angiography, CSCR leaks in an ink-blot or [[smokestack|smoke-stack|chimney]] pattern.",
      "A [[lamellar]] hole keeps the outer layer intact and often remains stable.",
      "An epiretinal membrane thickens the macula and skews the OCT of the [[ganglion cells|GCIPL|ganglion cell layer]].",
      "Recent full-thickness hole: vitrectomy, [[gas|gas tamponade]] and positioning.",
      "CSCR: take an inventory of [[all corticosteroids|all steroids|corticosteroids]], including drops, creams, inhalers and nasal sprays."
    ],
    triage: [
      { s: "40-year-old man on topical prednisolone: wavy lines in one eye, fluid under the macula on OCT.", u: "rapide", why: "CSCR: cautiously reduce the steroid with the cornea team; retina if the fluid persists." },
      { s: "Full-thickness macular hole that appeared 3 weeks ago.", u: "rapide", why: "Retina within a few weeks: better results if the hole is recent." },
      { s: "Mildly bothersome epiretinal membrane, VA 6/9.", u: "routine", why: "Amsler and follow-up; surgery only if symptoms become significant." }
    ],
    cues: [
      "Cellophane sheen and folds around the fovea",
      "Smokestack leak on angiography",
      "Full-thickness foveal defect on OCT"
    ]
  },

  "a5-peripherie-vitre": {
    essentials: [
      "**Weiss ring** in front of the disc = proof of a posterior vitreous detachment.",
      "New flashes or floaters: **dilated exam** of the entire periphery without delay, with scleral depression.",
      "**Lattice**: bands of thinned retina parallel to the ora, crisscrossing white lines, pigment.",
      "**Retinoschisis**: smooth, transparent, immobile dome, often inferotemporal and bilateral.",
      "Before **pilocarpine** in a myope: dilated exam of the periphery (traction on the vitreous base)."
    ],
    cloze: [
      "[[Asteroid]] hyalosis: bright yellow-white particles in the vitreous, vision usually normal.",
      "Retinoschisis causes an [[absolute]] scotoma and does not move.",
      "The real danger of a PVD is the associated retinal [[tear|break]].",
      "Asteroid hyalosis interfering with imaging: rely more on the [[visual field]].",
      "Bright, sharp asteroids without pain or vision loss: nothing to do with vitreous inflammation, or [[vitritis]]."
    ],
    triage: [
      { s: "Flashes with an advancing curtain and vision loss.", u: "urgent", why: "Retinal detachment until proven otherwise: retina the same day." },
      { s: "New floaters for 2 days, Weiss ring, no curtain.", u: "urgent", why: "Recent PVD: dilated exam of the entire periphery without delay, looking for a tear." },
      { s: "Asymptomatic lattice found in a myope on a routine fundus exam.", u: "routine", why: "Surveillance and teaching of warning symptoms." }
    ],
    cues: [
      "Grayish ring floating in front of the disc",
      "Crisscrossing white lines parallel to the ora",
      "Bright suspended particles, normal vision"
    ]
  },

  "a5-inflammation-infection": {
    essentials: [
      "Anterior uveitis: painful red eye, photophobia, **cells and flare** in the anterior chamber.",
      "The **cycloplegic** relieves pain and prevents posterior synechiae; steroid after ruling out infection.",
      "**Endophthalmitis**: pain, vision loss, hypopyon, vitritis; tap and inject the same day.",
      "Milky white bleb + chamber cells = **bleb-related endophthalmitis**, even years later.",
      "360° synechiae → **iris bombé** and secondary angle closure: iridotomy or iridectomy."
    ],
    cloze: [
      "Endophthalmitis, intravitreal: [[vancomycin]] 1 mg/0.1 mL and ceftazidime 2.25 mg/0.1 mL.",
      "Toxoplasmosis: active focus at the edge of a scar, the \"headlight in the [[fog]]\".",
      "Unexpected [[CMV|cytomegalovirus]] retinitis calls for a search for immunosuppression (HIV).",
      "Acute retinal necrosis is caused by [[VZV|varicella-zoster virus|varicella-zoster]] or HSV.",
      "During inflammation, IOP is often [[low]]; it can rise on steroids.",
      "Think [[infection]] before giving a steroid alone for \"uveitis\"."
    ],
    triage: [
      { s: "Trabeculectomy 5 years ago: milky white bleb, chamber cells, red eye.", u: "urgent", why: "Bleb-related endophthalmitis: intravitreal tap and inject the same day." },
      { s: "Confluent white patches in the periphery advancing quickly, marked vitritis.", u: "urgent", why: "Acute retinal necrosis: urgent antivirals with retina." },
      { s: "Immunosuppressed patient: granular hemorrhagic white patches near the macula, little vitritis.", u: "rapide", why: "CMV retinitis: retina or uveitis promptly for an antiviral." }
    ],
    cues: [
      "Headlight in the fog",
      "Milky white bleb and hypopyon",
      "Granular white patches along the vessels"
    ]
  },

  "a5-papille-oedeme": {
    essentials: [
      "True edema: **obscured vessels** at the disc margin, hyperemia, flame hemorrhages, cotton-wool spots.",
      "Bilateral disc swelling: BP, then **neuroimaging the same day**, before the lumbar puncture.",
      "AION at age ≥ 50: if **arteritis** is suspected, steroids the same day, without waiting for the biopsy.",
      "**Optic disc drusen**: lumpy disc, crisp vessels; they mimic glaucoma on fields and OCT.",
      "A swollen disc is **never glaucomatous**."
    ],
    cloze: [
      "In intracranial hypertension, VA stays [[good|preserved|normal]] until an advanced stage.",
      "Neuroretinitis: swollen disc, then a macular star; common cause: [[Bartonella|Bartonella henselae|cat-scratch disease]].",
      "Nonarteritic AION typically causes an [[altitudinal]] field defect.",
      "Optic disc drusen are [[hyperechoic|hyperreflective]] on B-scan and persist at low gain.",
      "Papilledema: horizontal diplopia from a [[CN VI|sixth nerve|abducens]] palsy.",
      "Arteritic AION causes pale \"[[chalky|chalk]] white\" edema."
    ],
    triage: [
      { s: "28-year-old woman: headaches, transient visual obscurations, two swollen discs, VA 6/6.", u: "urgent", why: "Papilledema: BP, then neuroimaging the same day, before the lumbar puncture." },
      { s: "74-year-old man: sudden vision loss, chalky white disc, jaw claudication.", u: "urgent", why: "Arteritic AION: ESR, CRP, platelets and steroids the same day, to protect the other eye." },
      { s: "Lumpy disc with crisp vessels, drusen confirmed on autofluorescence, no symptoms.", u: "routine", why: "Pseudo-edema confirmed; beware, drusen mimic glaucoma on fields and OCT." }
    ],
    cues: [
      "Obscured vessels at the disc margin",
      "Enlarged blind spot, transient obscurations",
      "Lumpy disc with refractile bodies"
    ]
  },

  "a5-pupilles-neuro": {
    essentials: [
      "**Horner**: miosis and mild ptosis on the same side; anisocoria greater in the dark.",
      "**Apraclonidine**: in Horner, the small pupil dilates and the anisocoria reverses.",
      "Acute painful Horner = **carotid dissection** until proven otherwise: angiographic imaging the same day.",
      "**Homonymous hemianopia**: defect bounded by the vertical meridian, lesion behind the chiasm.",
      "Large pupil with ptosis or diplopia: **CN III palsy** from an aneurysm until proven otherwise."
    ],
    cloze: [
      "The apraclonidine test can be falsely [[negative]] in a very recent Horner.",
      "The more congruous the homonymous defects, the more [[posterior]] the lesion.",
      "New Horner in a child: think [[neuroblastoma]].",
      "Apraclonidine dilates the Horner pupil through [[denervation]] hypersensitivity.",
      "A complete hemianopia does not meet the [[SAAQ]] standard of 30° on each side of the vertical meridian.",
      "Neither Horner nor occipital hemianopia causes an [[RAPD|APD]]."
    ],
    triage: [
      { s: "Neck and face pain since yesterday; miosis and mild ptosis on the right.", u: "urgent", why: "Painful Horner: carotid dissection, CT angiography or MR angiography of head and neck the same day." },
      { s: "2-year-old child: recent small pupil and mild ptosis, without pain.", u: "rapide", why: "Painless Horner: prompt imaging of the entire sympathetic pathway (neuroblastoma in children)." },
      { s: "New left homonymous defect on visual field, normal VA.", u: "urgent", why: "New homonymous hemianopia: urgent brain imaging." }
    ],
    cues: [
      "Small pupil dilated by apraclonidine",
      "Miosis and mild ptosis on the same side",
      "Same half of the field lost in both eyes"
    ]
  },

  "a5-tumeurs-toxicite-trauma": {
    essentials: [
      "**Nevus**: slate gray, flat (< 2 mm), drusen or halo, no fluid or orange pigment.",
      "**Melanoma**: thickness > 2 mm, subretinal fluid, symptoms, orange pigment, acoustic hollowness.",
      "Always a **baseline photo**: without comparison, it is impossible to prove a nevus has not grown.",
      "**Hydroxychloroquine**: ≤ 5 mg/kg/day of real body weight; annual 10-2 and OCT after 5 years, earlier if high risk.",
      "After blunt trauma: look for **angle recession** on gonioscopy, then monitor IOP for life."
    ],
    cloze: [
      "Hydroxychloroquine toxicity shows first on OCT: [[parafoveal]] thinning of the outer layers.",
      "At a late stage, toxicity produces a [[bull's eye|bull's-eye|bulls eye]] maculopathy.",
      "In patients of Asian descent, add a [[24-2]] to the 10-2 (more peripheral involvement).",
      "Commotio retinae at the posterior pole is called [[Berlin]] edema.",
      "Melanoma risk factor: margin 3 mm or less from the [[disc|optic disc|optic nerve]].",
      "On ultrasound, [[acoustic]] hollowness points to a melanoma rather than a nevus."
    ],
    triage: [
      { s: "Pigmented choroidal lesion 3 mm thick, with subretinal fluid and orange pigment.", u: "rapide", why: "Several melanoma risk factors: ocular oncology promptly." },
      { s: "Flat 1 mm nevus with drusen, no fluid or orange pigment.", u: "routine", why: "Baseline photo, short-interval check, then annually if stable." },
      { s: "Patient on hydroxychloroquine for 6 years, no symptoms.", u: "routine", why: "Annual screening after 5 years: 10-2 field and macular OCT." }
    ],
    cues: [
      "Orange pigment and subretinal fluid",
      "Bull's-eye maculopathy",
      "Retinal whitening after blunt trauma"
    ]
  }

});
