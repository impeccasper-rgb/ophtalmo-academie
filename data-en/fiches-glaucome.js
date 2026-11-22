var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH_EN = G.OPH_EN || {};

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-gpao": {
 "title": "Primary open-angle glaucoma",
 "oneLiner": "Chronic, painless optic neuropathy with an open angle: the disc cups and peripheral field is lost silently.",
 "definition": "A chronic optic neuropathy, mainly from IOP too high for the nerve. The field is lost painlessly.",
 "anatomy": {
  "text": "Aqueous humor, made by the ciliary processes, leaves mainly through the trabecular meshwork (the angle's filter) and Schlemm's canal, and partly between the ciliary muscle fibers (uveoscleral outflow); IOP reflects this balance. Retinal ganglion cell axons leave the eye through the lamina cribrosa, a vulnerable collagen sieve."
 },
 "causal": {
  "title": "From a clogged filter to field loss",
  "steps": [
   {
    "label": "Stiffened trabecular meshwork",
    "detail": "With age and genetics, the filter layer adjacent to Schlemm's canal clogs: aqueous drains less well.",
    "kind": "cause"
   },
   {
    "label": "IOP too high for this nerve",
    "detail": "Production continues, outflow slows: pressure exceeds what the nerve can tolerate.",
    "kind": "mecanisme"
   },
   {
    "label": "Compressed lamina cribrosa",
    "detail": "Pushed backward, it pinches the axons and reduces their blood supply.",
    "kind": "mecanisme"
   },
   {
    "label": "Cupped disc, thinned RNFL",
    "detail": "Ganglion cells die: the cup enlarges and the retinal nerve fiber layer (RNFL) thins, inferotemporally first.",
    "kind": "lesion"
   },
   {
    "label": "Arcuate field defects",
    "detail": "Inferior fibers lost = superior defect; central vision goes last, hence the late diagnosis.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 0,
    "label": "SLT and MIGS",
    "detail": "SLT (selective laser trabeculoplasty: gentle laser applied to the trabecular meshwork) and MIGS (minimally invasive glaucoma surgery: micro-implants placed in the filter) reopen the trabecular pathway."
   },
   {
    "at": 1,
    "label": "Drops",
    "detail": "Prostaglandin analogues (PGAs) open the uveoscleral pathway; beta-blockers, carbonic anhydrase inhibitors (CAIs) and brimonidine ↓ aqueous production."
   },
   {
    "at": 1,
    "label": "Filtering surgery",
    "detail": "Trabeculectomy (surgical fistula into a pocket under the conjunctiva: the bleb), PreserFlo (microtube into that pocket) or a glaucoma drainage tube create a new outflow route."
   }
  ]
 },
 "risk": [
  "Age > 40; African ancestry (earlier, more aggressive disease)",
  "Affected first-degree relative; myopia",
  "Elevated IOP (the only proven modifiable factor)",
  "Thin cornea; low corneal hysteresis (cornea that dampens poorly)",
  "AAO 2026: larger C/D (cup-to-disc ratio), disc hemorrhage, high PSD (localized field defect), low blood pressure"
 ],
 "presentation": [
  "No symptoms until an advanced stage; found on screening",
  "IOP often > 21 mmHg, open angle",
  "Cupping or disc asymmetry; nasal step (defect stopping sharply at the horizontal meridian) or arcuate scotoma"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Vertical C/D ↑ or asymmetry ≥ 0.2",
    "why": "Depends on disc size: large disc = large normal cup."
   },
   {
    "sign": "Notch or disc hemorrhage (Drance)",
    "why": "Focal loss, often inferotemporal; the hemorrhage signals active progression."
   },
   {
    "sign": "Pallor matching the cup",
    "why": "Pallor larger than the cup: compression or ischemia."
   }
  ],
  "tests": [
   {
    "test": "Gonioscopy (mirrored lens that shows the angle)",
    "when": "At diagnosis",
    "read": "Scleral spur visible over 360°, no synechiae: open angle; look for dense pigment, recession or neovessels (secondary glaucoma)."
   },
   {
    "test": "Pachymetry (corneal thickness)",
    "when": "At baseline",
    "read": "Thin cornea: Goldmann underestimates IOP; risk ↑."
   },
   {
    "test": "OCT (optical coherence tomography: cross-sectional imaging): RNFL + macular ganglion cells",
    "when": "Baseline and follow-up",
    "read": "Concordant focal thinning; floor ≈ 50–60 µm when advanced."
   },
   {
    "test": "Humphrey visual field 24-2 ± 10-2",
    "when": "Baseline, then ≈ 3 per year for 2 years (clustered fields)",
    "read": "False positives > 15% = unreliable; loss ≥ 2 dB/year = fast progressor."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Normal-tension glaucoma",
   "clue": "IOP always ≤ 21 mmHg."
  },
  {
   "dx": "Chronic angle closure",
   "clue": "Iris apposed to the trabecular meshwork on gonioscopy."
  },
  {
   "dx": "Secondary open-angle glaucoma",
   "clue": "Pseudoexfoliation (whitish deposits on the lens), pigment, steroids, trauma, uveitis."
  },
  {
   "dx": "Compressive optic neuropathy",
   "clue": "Pallor > cupping, VA and color vision ↓."
  },
  {
   "dx": "Large disc with physiologic cupping",
   "clue": "Even, symmetric and stable neuroretinal rim; normal OCT and field."
  }
 ],
 "redFlags": [
  "Pallor > cupping or early VA ↓: MRI",
  "Defect respecting the vertical meridian (chiasm)",
  "Loss ≥ 2 dB/year despite IOP at target"
 ],
 "cat": {
  "algo": [
   {
    "q": "Open angle, no secondary cause?",
    "yes": "Workup: IOP, pachymetry, gonioscopy, OCT, visual field.",
    "no": "Closure or secondary cause: treat the cause.",
    "yesGo": 1
   },
   {
    "q": "Disc, OCT and field concordant?",
    "yes": "Glaucoma: aim for IOP 20–30% below baseline.",
    "no": "Glaucoma suspect: estimate the risk (OHT topic).",
    "yesGo": 2
   },
   {
    "q": "Target met (prostaglandin or SLT laser)?",
    "yes": "Regular follow-up: OCT and visual field.",
    "no": "Check adherence, then add a drop or SLT.",
    "yesGo": 3
   },
   {
    "q": "Progression despite the target IOP?",
    "yes": "Lower the target; surgery (MIGS, trabeculectomy).",
    "no": "Continue; reassess the target at every visit."
   }
  ],
  "phases": [
   {
    "phase": "observation",
    "items": [
     "Baseline workup (see mnemonic) before any treatment"
    ]
   },
   {
    "phase": "medical",
    "items": [
     "PGA at bedtime; if it barely lowers IOP, switch rather than add; otherwise add a class",
     "1 drop, 5 min between drugs, press the inner corner (punctal occlusion), especially in pregnancy or breastfeeding"
    ]
   },
   {
    "phase": "laser",
    "items": [
     "SLT first-line or as an adjunct"
    ]
   },
   {
    "phase": "chirurgie",
    "items": [
     "MIGS (often combined with cataract surgery); trabeculectomy with mitomycin C (antifibrotic) or tube if advanced"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "Clustered fields if new or unstable; otherwise OCT and field 1–2 times per year"
    ]
   },
   {
    "phase": "escalade",
    "items": [
     "Cyclophotocoagulation (laser destroying part of the ciliary body) after failures"
    ]
   }
  ],
  "local": "Québec: an equipped optometrist may treat suspected or early glaucoma but must then refer to an ophthalmologist (O-7, r. 11.1). SAAQ class 5: binocular VA ≥ 6/15 (20/50) and binocular field ≥ 100° horizontally (≥ 30° on each side), 10° above and 20° below fixation; if a defect is present, a signed binocular field is required (Esterman or Goldmann III/4e)."
 },
 "treatments": [
  {
   "name": "PGAs: latanoprost, bimatoprost, travoprost",
   "how": "Bedtime drop that relaxes the ciliary muscle matrix: ↑ uveoscleral outflow; Vyzulta (latanoprostene bunod, approved by Health Canada) also acts on the trabecular meshwork.",
   "why": "Usual first drop.",
   "pros": "Largest IOP reduction, once daily.",
   "cons": "Cosmetic effects, especially if only one eye is treated; caution with uveitis or herpes.",
   "cx": "Hyperemia, long lashes, iris darkening (irreversible), orbital fat atrophy, macular edema, herpetic reactivation.",
   "dose": "Latanoprost 0.005%: 1 drop at bedtime (bimatoprost 0.01%, travoprost 0.004%).",
   "refer": "Refer if IOP is off target or there is progression.",
   "pitfall": "Irreversible iris darkening: warn, especially if only one eye is treated.",
   "qc": "Quebec: an equipped optometrist may start drops (suspect or early glaucoma), then must refer (O-7, r. 11.1)."
  },
  {
   "name": "Timolol, CAIs, brimonidine",
   "how": "Drops 1–3 times daily that ↓ aqueous production (beta blockade, enzyme inhibition); brimonidine also ↑ uveoscleral outflow.",
   "why": "Add-on to a PGA or alternative.",
   "pros": "Fixed combinations.",
   "cons": "Adherence ↓.",
   "cx": "Timolol: bronchospasm (asthma, COPD), bradycardia, AV block; CAIs: stinging, bitter taste (sulfonamide); brimonidine: allergy, drowsiness, contraindicated under age 2.",
   "dose": "Timolol 0.5% BID; dorzolamide 2% TID; brimonidine 0.2% BID–TID.",
   "refer": "Add-on to a PGA or alternative; not urgent.",
   "pitfall": "Timolol is contraindicated in asthma, severe COPD or AV block."
  },
  {
   "name": "SLT (selective laser trabeculoplasty)",
   "how": "In-office laser through a lens: gentle spots on the pigmented trabecular meshwork; biological remodeling ↑ outflow.",
   "why": "First-line or adjunct.",
   "pros": "Drop-free, repeatable.",
   "cons": "Effect wears off.",
   "cx": "IOP spike, mild inflammation.",
   "dose": "360°, ≈ 100 non-overlapping spots, in clinic.",
   "refer": "First line or add-on (LiGHT); not urgent.",
   "pitfall": "The effect wanes over time: repeatable, keep measuring IOP."
  },
  {
   "name": "Surgery: MIGS, trabeculectomy, PreserFlo, tube",
   "how": "In the OR. MIGS: micro-implant in the trabecular meshwork; trabeculectomy: fistula under a scleral flap into the bleb; tube: drain connected to a plate.",
   "why": "Progression or target not reached.",
   "pros": "Trabeculectomy: lowest IOP; MIGS: safe.",
   "cons": "MIGS: modest reduction.",
   "cx": "Hypotony, leak, bleb infection.",
   "dose": "MIGS with cataract surgery; trabeculectomy with MMC or tube if advanced.",
   "refer": "Progression or target missed despite drops and laser.",
   "pitfall": "Bleb: a red, painful eye is infection until proven otherwise."
  }
 ],
 "pearls": [
  {
   "q": "What target IOP?",
   "a": "Individualized by stage, the IOP at which damage occurred, rate of progression, life expectancy and risk factors: starting point ≈ 20–30% below baseline, lower if advanced, revised at every visit. EMGT trial: each mmHg of reduction ≈ 10% less risk of progression."
  },
  {
   "q": "SLT or drops first?",
   "a": "Either (AAO 2026). LiGHT trial at 6 years: 69.8% of SLT eyes at target with no other treatment; progression 19.6% vs 26.8%."
  },
  {
   "q": "Target reached but the field is progressing?",
   "a": "Confirm (clustered fields, OCT), check adherence, then lower the target."
  }
 ],
 "mnemonic": {
  "title": "Baseline workup: 3 measurements, 2 views of the nerve",
  "text": "**Measure**: IOP (several times), pachymetry (thin cornea = IOP underestimated), gonioscopy (open angle?). **See the nerve**: disc + OCT (structure), 24-2 visual field (function)."
 },
 "compare": {
  "title": "Normal disc vs POAG",
  "normal": {
   "caption": "C/D 0.3, even rim (ISNT rule)."
  },
  "patho": {
   "caption": "C/D 0.8, inferior notch and disc hemorrhage.",
   "reveal": [
    "Vertical C/D 0.8",
    "Inferotemporal notch of the neuroretinal rim",
    "Flame hemorrhage at the rim (Drance)",
    "Peripapillary atrophy, beta zone",
    "Expected defect: superior arcuate field defect"
   ]
  }
 },
 "sources": [
  "AAO PPP Primary Open-Angle Glaucoma (Gedde SJ et al., Ophthalmology, online Feb 9, 2026)",
  "LiGHT 6 years (Gazzard G et al., Ophthalmology 2023)",
  "EMGT (Heijl A et al., Arch Ophthalmol 2002)",
  "COS 2009: Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)",
  "Chauhan BC et al., Br J Ophthalmol 2008 (visual field frequency)"
 ],
 "treatment": {
  "first": [
   "**You**: spot the suspicious disc and family history; refer.",
   "**Ophthalmologist**: latanoprost 0.005% at bedtime or SLT; then add-on, MIGS or surgery."
  ],
  "refer": "Refer to ophthalmology: within a few weeks — suspicious disc, IOP > 21 mmHg or family history of glaucoma.",
  "pitfall": [
   "**Timolol**: contraindicated in asthma, severe COPD or AV block, even as a drop.",
   "**Latanoprost**: irreversible iris darkening; warn if only one eye is treated."
  ],
  "qc": "Quebec: an equipped optometrist may start drops (suspect or early glaucoma), then must refer (O-7, r. 11.1)."
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-crise": {
 "title": "Acute angle-closure crisis",
 "oneLiner": "Painful red eye, halos, hazy cornea, fixed mid-dilated pupil and very high IOP: lower the IOP now, then iridotomy in both eyes.",
 "definition": "The iris suddenly closes the whole angle: IOP rises very high within hours. It is an emergency.",
 "anatomy": {
  "text": "Aqueous flows from the posterior to the anterior chamber through the pupil, then leaves through the trabecular meshwork (the angle's filter). In a short eye with a thick lens, the iris rubs against the lens; in mid-dilation, this contact hinders flow the most (pupillary block). The corneal endothelium pumps water out of the cornea; a very high IOP overwhelms this pump."
 },
 "causal": {
  "title": "From trigger to rock-hard eye",
  "steps": [
   {
    "label": "Predisposed eye and trigger",
    "detail": "Short eye, thick lens; dim light, stress or a dilating medication put the pupil in mid-dilation.",
    "kind": "cause"
   },
   {
    "label": "Complete pupillary block",
    "detail": "Aqueous no longer passes between iris and lens: pressure builds behind the iris, which bows forward.",
    "kind": "mecanisme"
   },
   {
    "label": "Angle closed over 360°",
    "detail": "The peripheral iris presses against the trabecular meshwork: nothing drains, while production continues.",
    "kind": "mecanisme"
   },
   {
    "label": "Very high IOP, red eye",
    "detail": "Edematous cornea (pump overwhelmed: halos, blur), ischemic iris sphincter (fixed pupil), pain and vomiting.",
    "kind": "signe"
   },
   {
    "label": "Damage within hours",
    "detail": "Peripheral anterior synechiae (PAS: iris stuck to the angle), endothelial loss, iris atrophy, optic neuropathy.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 3,
    "label": "Drops, acetazolamide, mannitol",
    "detail": "Drops and acetazolamide ↓ aqueous production; IV mannitol dehydrates the vitreous, which moves the lens back."
   },
   {
    "at": 2,
    "label": "Indentation and pilocarpine",
    "detail": "Pressing on the cornea forces aqueous into the angle; pilocarpine (a miotic) pulls the iris out of the angle, once IOP has come down."
   },
   {
    "at": 1,
    "label": "Iridotomy (LPI)",
    "detail": "Small laser hole in the peripheral iris: aqueous bypasses the pupil; definitive treatment of the block."
   },
   {
    "at": 0,
    "label": "Lens extraction",
    "detail": "Removes the thick lens: eliminates the anatomic cause."
   }
  ]
 },
 "risk": [
  "Female, age > 50, hyperopia, short eye",
  "Inuit (Nunavik) or East Asian ancestry",
  "Known narrow angle or family history of angle closure",
  "Dim light, stress; dilating drops, anticholinergic or sympathomimetic medications (antihistamines, tricyclics, decongestants)"
 ],
 "presentation": [
  "Sudden, severe eye pain and vision loss, in one eye",
  "Colored halos around lights",
  "Headache, nausea, vomiting (mimics a migraine)",
  "Red eye, globe hard to palpation"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Very high IOP (often > 40 mmHg)",
    "why": "Confirms the crisis; measure it in any painful red eye with headache."
   },
   {
    "sign": "Corneal epithelial edema (ground-glass appearance)",
    "why": "IOP exceeds the endothelial pump: explains halos and blur."
   },
   {
    "sign": "Mid-dilated, poorly reactive pupil",
    "why": "Ischemic sphincter; distinguishes the crisis from uveitis (small pupil)."
   },
   {
    "sign": "Shallow anterior chamber, also in the fellow eye",
    "why": "Shallow fellow eye = primary mechanism; deep fellow eye = look for a secondary cause."
   }
  ],
  "tests": [
   {
    "test": "Tonometry (Goldmann, or Tono-Pen, a handheld tonometer, if the cornea is edematous)",
    "when": "Immediately",
    "read": "Very high IOP; recheck 30–60 min after treatment."
   },
   {
    "test": "Gonioscopy (mirrored lens that shows the angle) of both eyes",
    "when": "As soon as the cornea allows; fellow eye right away",
    "read": "Closed angle; indentation distinguishes appositional closure from PAS and can reopen the angle."
   },
   {
    "test": "Specular microscopy, OCT and visual field",
    "when": "After the crisis",
    "read": "Endothelial cell density often ↓; document the optic nerve."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Neovascular glaucoma",
   "clue": "Neovessels on the iris, diabetes or vein occlusion; fellow eye open."
  },
  {
   "dx": "Hypertensive uveitis (herpes; Posner-Schlossman: IOP spikes with few cells)",
   "clue": "Keratic precipitates, cells; open angle; pupil not mid-dilated."
  },
  {
   "dx": "Phacomorphic glaucoma",
   "clue": "Intumescent cataract; chamber much shallower than the fellow eye."
  },
  {
   "dx": "Topiramate- or sulfonamide-induced effusion",
   "clue": "Bilateral, acute myopia; neither iridotomy nor pilocarpine."
  },
  {
   "dx": "Migraine, cluster headache",
   "clue": "Normal IOP, clear cornea."
  }
 ],
 "redFlags": [
  "Attack = immediate call; if IOP unchanged at 1 h: mannitol, on advice",
  "Bilateral crisis: think drug-induced effusion (topiramate)",
  "Before acetazolamide or mannitol: sulfa allergy, kidney, heart, sickle cell"
 ],
 "cat": {
  "algo": [
   {
    "q": "Painful red eye, very high IOP, mid-dilated pupil?",
    "yes": {
     "t": "Call the on-call ophthalmologist now; drops and acetazolamide.",
     "urgent": true
    },
    "no": "Other painful red eye (uveitis, keratitis, neovascular).",
    "yesGo": 1
   },
   {
    "q": "Bilateral, acute myopia or topiramate?",
    "yes": "Effusion: stop the drug, cycloplegic, steroid; no LPI, no pilocarpine.",
    "no": "",
    "noGo": 2
   },
   {
    "q": "Swollen cataract or subluxated lens?",
    "yes": "No pilocarpine: lower IOP, then remove the lens.",
    "no": "Probable primary pupillary block.",
    "noGo": 3
   },
   {
    "q": "IOP falling after 30–60 min?",
    "yes": "Pilocarpine 1–2%, then LPI in both eyes.",
    "no": {
     "t": "IV mannitol, indentation; ophthalmologist at the bedside.",
     "urgent": true
    },
    "yesGo": 4
   },
   {
    "q": "Angle closed despite a patent LPI?",
    "yes": "Plateau iris or lens: UBM, iridoplasty or extraction.",
    "no": "Follow-up: IOP, gonioscopy, optic nerve, endothelium."
   }
  ],
  "phases": [
   {
    "phase": "medical",
    "items": [
     "Without delay: timolol 0.5%, brimonidine or apraclonidine, dorzolamide (1 drop of each)",
     "Acetazolamide 500 mg PO or IV (check sulfa allergy, kidneys, potassium, sickle cell disease)",
     "Prednisolone acetate 1%; analgesic, antiemetic; IV mannitol 1–2 g/kg if refractory",
     "Pilocarpine 1–2% only once IOP has come down"
    ]
   },
   {
    "phase": "laser",
    "items": [
     "LPI of the affected eye as soon as the cornea is clear, and of the fellow eye",
     "Confirm the opening is patent and measure IOP 30 min to 2 h afterward"
    ]
   },
   {
    "phase": "chirurgie",
    "items": [
     "Surgical iridectomy if laser is not possible; lens extraction if there is a lens component or IOP is uncontrolled"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "Gonioscopy after LPI; drops if PAS or residual IOP elevation; discuss lens extraction"
    ]
   }
  ],
  "local": "In Québec, these patients often present first to the ED for headache and vomiting, or to the optometrist: start treatment and refer the same day to the on-call ophthalmologist. The Canadian optometric guideline describes the same sequence, up to bilateral LPI."
 },
 "treatments": [
  {
   "name": "IOP-lowering drops and steroid",
   "how": "Timolol (beta-blocker), dorzolamide (CAI) and brimonidine ↓ aqueous production; prednisolone 1% settles the inflammation.",
   "why": "First step in any crisis.",
   "pros": "Immediate.",
   "cons": "Limited effect if IOP is extreme.",
   "cx": "Timolol: bronchospasm, bradycardia.",
   "dose": "Timolol 0.5%, brimonidine 0.2%, dorzolamide 2%: 1 drop of each; prednisolone acetate 1%.",
   "refer": "At diagnosis; on-call ophthalmologist the same day.",
   "pitfall": "Timolol: check for asthma, COPD, bradycardia before the drop.",
   "qc": "Quebec: often seen first in the ER: start treatment, then refer the same day."
  },
  {
   "name": "Acetazolamide and mannitol",
   "how": "Acetazolamide (PO, or IV if vomiting): inhibits ciliary body carbonic anhydrase. IV mannitol: dehydrates the vitreous, the lens moves back.",
   "why": "Confirmed crisis; mannitol if refractory.",
   "pros": "Rapid, powerful reduction.",
   "cons": "Systemic contraindications.",
   "cx": "Paresthesias, hypokalemia; mannitol: volume overload, heart or renal failure.",
   "dose": "Acetazolamide 500 mg PO or IV; mannitol 20% 1–2 g/kg IV if refractory.",
   "refer": "Confirmed attack; mannitol if IOP unchanged after 1 h.",
   "pitfall": "Check sulfa, kidney, potassium, sickle cell; mannitol: heart, kidney."
  },
  {
   "name": "Pilocarpine 1–2% and indentation",
   "how": "Miotic drop that pulls the iris out of the angle; indentation (pressure on the cornea) pushes aqueous into the angle.",
   "why": "Once IOP has come down.",
   "pros": "Can break the attack before laser.",
   "cons": "Ineffective if the sphincter is ischemic; contraindicated if lens-induced or effusion.",
   "cx": "Headache, myopia, anterior lens shift.",
   "dose": "Pilocarpine 1–2%: 1 drop, once IOP is lowered.",
   "refer": "Pupillary block, after IOP has come down.",
   "pitfall": "Never for a lens cause, effusion (topiramate) or misdirection."
  },
  {
   "name": "Laser iridotomy (LPI) of both eyes",
   "how": "In-office YAG laser: small hole in the peripheral iris; aqueous bypasses the pupil and the iris flattens.",
   "why": "Definitive treatment of the block; prophylaxis for the fellow eye.",
   "pros": "Quick.",
   "cons": "Difficult if the cornea is edematous.",
   "cx": "IOP spike, bleeding, dysphotopsias.",
   "dose": "YAG laser to both eyes, in clinic.",
   "refer": "As soon as the cornea clears.",
   "pitfall": "Do not forget the fellow eye: prophylactic LPI."
  },
  {
   "name": "Lens extraction",
   "how": "Cataract surgery: a thin IOL replaces the thick lens, which opens the angle.",
   "why": "Cataract, lens component, IOP uncontrolled after LPI.",
   "pros": "Corrects the anatomic cause.",
   "cons": "Riskier in an inflamed eye.",
   "cx": "Corneal edema, posterior capsule rupture.",
   "dose": "Phacoemulsification with IOL.",
   "refer": "Cataract, lens component, or IOP uncontrolled after LPI.",
   "pitfall": "Inflamed eye: quiet it first if possible."
  }
 ],
 "pearls": [
  {
   "q": "Why pilocarpine only after IOP has come down?",
   "a": "The ischemic sphincter does not respond while IOP is very high. And if the lens is the cause (intumescent, subluxated) or in an effusion, pilocarpine moves the lens forward and worsens the closure."
  },
  {
   "q": "What do you do for the fellow eye?",
   "a": "Gonioscopy and prophylactic LPI: about half of fellow eyes have an attack within 5 years without LPI (AAO 2026)."
  },
  {
   "q": "Headache and vomiting in the ED: the trap?",
   "a": "The crisis mimics a migraine or a GI problem: look at the cornea and pupil, measure IOP before the head CT."
  }
 ],
 "mnemonic": {
  "title": "Crisis: \"Lower, Constrict, Laser\"",
  "text": "**Lower** the IOP (drops, acetazolamide ± mannitol), **Constrict** the pupil with pilocarpine once IOP is down, **Laser** the iris (LPI) in **both** eyes."
 },
 "compare": {
  "title": "Normal anterior segment vs acute crisis",
  "normal": {
   "caption": "Clear cornea, deep chamber, round reactive pupil."
  },
  "patho": {
   "caption": "Acute crisis: congested eye, ground-glass cornea, mid-dilated pupil.",
   "reveal": [
    "Corneal epithelial edema (ground-glass appearance)",
    "Mid-dilated, oval, nonreactive pupil",
    "Ciliary flush around the limbus",
    "Shallow chamber: not visible face-on, confirm with a thin slit beam (Van Herick)"
   ]
  }
 },
 "sources": [
  "AAO PPP Primary Angle Closure Disease (Gedde SJ, Chopra V, Vinod K et al., Ophthalmology, online Feb 9, 2026)",
  "Canadian optometric POAG guideline (MacIver S et al., Can J Optom 2017;79 Suppl 1)",
  "COS 2009: Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)"
 ],
 "treatment": {
  "first": [
   "**You, now**: timolol 0.5%, brimonidine 0.2%, dorzolamide 2% (1 drop of each); acetazolamide 500 mg PO or IV; dimenhydrinate (Gravol) 50 mg IV or PO, or ondansetron 4 mg IV.",
   "**Ophthalmologist**: pilocarpine once IOP is lowered, mannitol if refractory, then LPI in both eyes."
  ],
  "refer": "Refer to ophthalmology: immediately (on-call ophthalmologist) — the nerve and cornea are damaged within hours.",
  "pitfall": [
   "**Pilocarpine**: useless before IOP falls; never for a lens cause or topiramate.",
   "**Acetazolamide**: check sulfa allergy, kidney, potassium, sickle cell."
  ],
  "qc": ["Often seen first in the ER for headache and vomiting: look at the eye.", "Call the on-call ophthalmologist before any transfer; start the drops on site.", "Acetazolamide 250 mg PO: available everywhere. The IV form has a single Canadian supplier (shortage announced May–July 2026, Drug Shortages Canada report 282580): if it runs out, give it PO."]
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-fermeture": {
 "title": "Primary angle closure (PACS, PAC, PACG)",
 "oneLiner": "The peripheral iris blocks the angle's filter: detect it on gonioscopy, classify as PACS, PAC or PACG, then open the angle according to risk.",
 "definition": "The iris blocks the filter of a short eye. Stages: contact (PACS), IOP or synechiae (PAC), nerve damage (PACG).",
 "anatomy": {
  "text": "The iridocorneal angle contains the trabecular meshwork; on gonioscopy (examination of the angle with a mirrored lens), you see from posterior to anterior: iris root, ciliary body band, scleral spur, trabecular meshwork, Schwalbe's line. Aqueous passes from the posterior to the anterior chamber by sliding between iris and lens; a short eye with a thick lens has a narrow angle."
 },
 "causal": {
  "title": "From pupillary block to neuropathy",
  "steps": [
   {
    "label": "Short eye, thick lens",
    "detail": "Short eye and a lens that thickens with age: the iris ends up very close to the trabecular meshwork.",
    "kind": "cause"
   },
   {
    "label": "Relative pupillary block",
    "detail": "Aqueous passes poorly between iris and lens; pressure builds behind the iris, which bows forward.",
    "kind": "mecanisme"
   },
   {
    "label": "Iridotrabecular contact",
    "detail": "The iris rests on the trabecular meshwork, especially in dim light: aqueous no longer drains at that spot.",
    "kind": "mecanisme"
   },
   {
    "label": "Peripheral anterior synechiae",
    "detail": "Repeated contact glues the iris to the trabecular meshwork (PAS: permanent adhesions).",
    "kind": "lesion"
   },
   {
    "label": "Elevated IOP, slow or sudden",
    "detail": "Progressive, silent closure, or sudden (acute crisis).",
    "kind": "signe"
   },
   {
    "label": "Neuropathy (PACG)",
    "detail": "The optic nerve cups, often more severely than in open-angle disease.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 1,
    "label": "Laser iridotomy (LPI)",
    "detail": "Small hole made with the YAG laser in the peripheral iris: aqueous bypasses the pupil, the iris flattens and the angle opens."
   },
   {
    "at": 0,
    "label": "Lens extraction",
    "detail": "Replacing the thick lens with a thin IOL frees the angle (EAGLE trial)."
   },
   {
    "at": 4,
    "label": "IOP-lowering drops",
    "detail": "Lower residual IOP, without reopening a synechial angle."
   }
  ]
 },
 "risk": [
  "Inuit (Nunavik) or East Asian ancestry; female; age > 50",
  "Hyperopia, short axial length, small cornea (AAO 2026)",
  "Shallow anterior chamber, thick lens",
  "Family history of angle closure",
  "Dilating medications (anticholinergics, sympathomimetics); topiramate and sulfonamides (effusion)"
 ],
 "presentation": [
  "Often asymptomatic: narrow angle found on examination",
  "In the evening: blurred vision, halos and headache that resolve with sleep (intermittent closure)",
  "Chronic elevated IOP with adhesions; then cupping and field defects"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Van Herick ≤ 2 (peripheral chamber ≤ 1/4 of corneal thickness)",
    "why": "Quick slit-lamp estimate of the angle; ≤ 2 mandates gonioscopy."
   },
   {
    "sign": "Convex iris, bowed forward",
    "why": "Suggests pupillary block, correctable with iridotomy."
   },
   {
    "sign": "Flat iris with deep central chamber",
    "why": "Suggests plateau iris: the angle may remain closed after iridotomy."
   },
   {
    "sign": "Glaukomflecken, sectoral iris atrophy",
    "why": "Scars of a past acute crisis."
   }
  ],
  "tests": [
   {
    "test": "Dynamic gonioscopy in a dark room, small beam",
    "when": "Any narrow angle; cornerstone of diagnosis and follow-up (AAO 2026)",
    "read": "Pigmented trabecular meshwork hidden over ≥ 180° = contact; indentation opens appositional closure, not PAS. Record the Shaffer grade and extent of PAS (in clock hours) by quadrant."
   },
   {
    "test": "AS-OCT (anterior segment OCT) or UBM (high-frequency ultrasound)",
    "when": "Equivocal angle; UBM if plateau iris is suspected",
    "read": "Contact on AS-OCT despite an open angle on gonioscopy: risk of closure; UBM shows the ciliary processes."
   },
   {
    "test": "RNFL OCT and visual field",
    "when": "At diagnosis",
    "read": "Neuropathy = PACG; otherwise PACS or PAC."
   },
   {
    "test": "Specular microscopy (endothelial cell count)",
    "when": "After a crisis, before surgery",
    "read": "Density often ↓ after a crisis or in PACG."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Plateau iris",
   "clue": "Flat iris, deep central chamber; angle closed despite a patent iridotomy."
  },
  {
   "dx": "Lens-induced closure (phacomorphic)",
   "clue": "Intumescent cataract; chamber shallower than the fellow eye."
  },
  {
   "dx": "Ciliochoroidal effusion (topiramate, sulfonamides)",
   "clue": "Bilateral, acute myopia; neither iridotomy nor pilocarpine."
  },
  {
   "dx": "Secondary angle closure",
   "clue": "Neovessels, posterior synechiae (uveitis), abnormal iris on one side."
  }
 ],
 "redFlags": [
  "Recurrent evening halos and headache: intermittent closure, treat promptly",
  "Bilateral acute myopia on topiramate: effusion, no iridotomy",
  "Angle still closed despite a patent iridotomy"
 ],
 "cat": {
  "algo": [
   {
    "q": "Van Herick ≤ 2 or narrow angle suspected?",
    "yes": "Dynamic gonioscopy in a dark room.",
    "no": "Routine follow-up.",
    "yesGo": 1
   },
   {
    "q": "Iridotrabecular contact ≥ 180°?",
    "yes": "Primary angle closure: stage it.",
    "no": "Open angle; reassess with age.",
    "yesGo": 2
   },
   {
    "q": "Raised IOP, PAS or neuropathy?",
    "yes": "PAC or PACG: treat.",
    "no": "PACS: shared decision (LPI or observation).",
    "yesGo": 3
   },
   {
    "q": "Age ≥ 50: PAC ≥ 30 mmHg, PACG or cataract?",
    "yes": "Lens extraction, even if clear (EAGLE).",
    "no": "Laser iridotomy.",
    "noGo": 4
   },
   {
    "q": "Angle closed despite a patent iridotomy?",
    "yes": "Plateau iris or lens: UBM, iridoplasty or extraction.",
    "no": "Follow-up: gonioscopy, IOP, OCT; drops as needed."
   }
  ],
  "phases": [
   {
    "phase": "observation",
    "items": [
     "Low-risk PACS: observation and periodic gonioscopy; teach the warning symptoms"
    ]
   },
   {
    "phase": "medical",
    "items": [
     "Drops for residual IOP elevation after the angle is opened"
    ]
   },
   {
    "phase": "laser",
    "items": [
     "Iridotomy: confirm patency and check IOP 30 min to 2 h afterward",
     "Iridoplasty if plateau iris"
    ]
   },
   {
    "phase": "chirurgie",
    "items": [
     "Lens extraction, even if clear (PAC with elevated IOP, PACG)",
     "Advanced PACG: phaco + goniosynechialysis (surgical release of PAS) or filtering surgery"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "Gonioscopy, IOP, OCT and field: the angle narrows again as the lens grows"
    ]
   }
  ],
  "local": "The Inuit populations of Nunavik have among the highest rates of primary angle closure in the world: routine gonioscopy in these patients. An optometrist who sees a narrow angle refers to an ophthalmologist."
 },
 "treatments": [
  {
   "name": "Laser peripheral iridotomy (LPI)",
   "how": "In-office laser: after pilocarpine (to stretch the iris) and apraclonidine (against the IOP spike), the YAG laser makes a small hole in the peripheral iris; aqueous flows through it and the iris flattens.",
   "why": "Pupillary block: PAC, fellow eye after a crisis, PACS chosen by shared decision.",
   "pros": "Quick; prevents a crisis.",
   "cons": "No effect on plateau iris or lens-induced closure.",
   "cx": "IOP spike, bleeding, dysphotopsias (mostly transient), zonular damage.",
   "dose": "YAG laser in clinic, after pilocarpine 1–2% and apraclonidine.",
   "refer": "PAC, fellow eye of an attack, PACS by shared decision.",
   "pitfall": "An LPI does not open plateau iris: repeat gonioscopy afterwards.",
   "qc": "Quebec: routine gonioscopy in Inuit patients (Nunavik), who are at high risk."
  },
  {
   "name": "Lens extraction (phacoemulsification)",
   "how": "Cataract surgery, even on a clear lens: a thin IOL replaces the thick lens and the angle opens.",
   "why": "≥ 50 years with PAC and IOP ≥ 30 mmHg or PACG (EAGLE); cataract; plateau iris.",
   "pros": "EAGLE: better IOP control and quality of life than LPI; 10 times more likely to be drop-free at 3 years.",
   "cons": "More difficult in a short eye.",
   "cx": "Posterior capsule rupture, corneal edema, aqueous misdirection (aqueous diverted into the vitreous, rare).",
   "dose": "Phacoemulsification with IOL, even on a clear lens.",
   "refer": "Age ≥ 50 with PAC at IOP ≥ 30 mmHg or PACG (EAGLE); cataract.",
   "pitfall": "Short eye: harder surgery, risk of aqueous misdirection."
  },
  {
   "name": "Laser iridoplasty",
   "how": "In-office laser: large, gentle burns on the far peripheral iris, which contracts and frees the angle.",
   "why": "Plateau iris, angle closed despite iridotomy.",
   "pros": "Quick, incisionless.",
   "cons": "Effect sometimes temporary.",
   "cx": "Inflammation, iris atrophy.",
   "dose": "Thermal (argon) laser: large, gentle burns on the far-peripheral iris.",
   "refer": "Plateau iris or angle closed despite a patent LPI.",
   "pitfall": "Effect sometimes temporary: follow with gonioscopy."
  },
  {
   "name": "Drops and glaucoma surgery",
   "how": "IOP-lowering drops; otherwise trabeculectomy (fistula into a bleb under the conjunctiva) or goniosynechialysis.",
   "why": "Persistent elevated IOP or PACG.",
   "pros": "Controls residual IOP.",
   "cons": "Drops do not reopen the angle.",
   "cx": "Aqueous misdirection, suprachoroidal hemorrhage, hypotony.",
   "dose": "IOP-lowering drops (PGA, timolol); trabeculectomy or goniosynechialysis if needed.",
   "refer": "Persistent high IOP or PACG after the angle is opened.",
   "pitfall": "Drops do not reopen the angle: do not delay the LPI."
  }
 ],
 "pearls": [
  {
   "q": "What are the mechanisms of angle closure?",
   "a": "Iris (pupillary block, the most common), ciliary body (plateau iris), lens (thick or intumescent) and posterior push (effusion, aqueous misdirection). Iridotomy only corrects pupillary block."
  },
  {
   "q": "Do you do an iridotomy for every PACS?",
   "a": "No. ZAP: LPI roughly halves the risk, but the incidence is very low; shared decision based on access to care, family history and dilating medications (AAO 2026)."
  },
  {
   "q": "Acute myopia and bilateral closed angles on topiramate: LPI?",
   "a": "No: ciliochoroidal effusion pushes iris and lens forward. Stop the topiramate with the prescriber, cycloplegic, steroid and IOP-lowering agents; never pilocarpine."
  }
 ],
 "mnemonic": {
  "title": "Angle: \"I Can't See Til Schwalbe\"",
  "text": "From posterior to anterior: **I**ris (root), **C**iliary (body band), **S**cleral (spur), **T**rabecular meshwork, **S**chwalbe. Shaffer 4 = ciliary body band visible; 1 = Schwalbe's line only."
 },
 "compare": {
  "title": "Open angle vs closed angle",
  "normal": {
   "caption": "Shaffer 4: all structures visible down to the ciliary body band."
  },
  "patho": {
   "caption": "Shaffer 1 with peripheral anterior synechiae.",
   "reveal": [
    "Only Schwalbe's line (± nonpigmented anterior trabecular meshwork) visible",
    "Pigmented trabecular meshwork and spur hidden by the iris",
    "PAS: indentation does not release them",
    "PAC stage if the nerve is healthy"
   ]
  }
 },
 "sources": [
  "AAO PPP Primary Angle Closure Disease (Gedde SJ, Chopra V, Vinod K et al., Ophthalmology, online Feb 9, 2026)",
  "EAGLE (Azuara-Blanco A et al., Lancet 2016)",
  "ZAP (He M et al., Lancet 2019)",
  "ISGEO classification (Foster PJ et al., Br J Ophthalmol 2002)"
 ],
 "treatment": {
  "first": [
   "**You**: spot the shallow chamber (Van Herick) and at-risk drugs; refer.",
   "**Ophthalmologist**: gonioscopy, then laser iridotomy or lens extraction."
  ],
  "refer": "Refer to ophthalmology: within a few weeks — suspected narrow angle; immediately if a painful red eye with halos.",
  "pitfall": [
   "**Anticholinergic or mydriatic** with a narrow angle: can trigger an attack.",
   "**Topiramate**: acute bilateral myopia = effusion; no iridotomy."
  ],
  "qc": "Quebec: routine gonioscopy in Inuit patients (Nunavik), who are at high risk."
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-hto": {
 "title": "Ocular hypertension and glaucoma suspect",
 "oneLiner": "IOP > 21 mmHg or a suspicious disc without proven neuropathy: estimate the risk of conversion, then observe or treat.",
 "definition": "OHT: IOP > 21 mmHg, normal nerve and field. Suspect: one doubtful finding without proven neuropathy.",
 "anatomy": {
  "text": "Normal IOP ranges from 10 to 21 mmHg (mean ≈ 15–16) and varies by 2 to 6 mmHg over 24 h; it reflects the balance between aqueous production and outflow. The Goldmann tonometer flattens the cornea: a thick cornea resists and leads to overestimating IOP, a thin cornea to underestimating it. A large disc normally has a large cup."
 },
 "causal": {
  "title": "A risk, not yet a disease",
  "steps": [
   {
    "label": "Slightly reduced outflow",
    "detail": "The trabecular meshwork (the angle's filter) lets a little less aqueous through: IOP exceeds 21 mmHg, with no damage so far.",
    "kind": "cause"
   },
   {
    "label": "Nerve still healthy",
    "detail": "Each nerve tolerates pressure differently: many patients with OHT will never develop glaucoma.",
    "kind": "mecanisme"
   },
   {
    "label": "Vulnerability factors",
    "detail": "Thin cornea, age, large cup, high PSD: each factor raises the probability that the nerve gives way.",
    "kind": "mecanisme"
   },
   {
    "label": "First fibers lost",
    "detail": "Nerve fiber layer (RNFL) thinning on OCT or a disc hemorrhage, often before any field defect.",
    "kind": "lesion"
   },
   {
    "label": "Conversion to glaucoma",
    "detail": "Reproducible field defect or confirmed structural loss: about 9.5% of untreated patients at 5 years in OHTS.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 1,
    "label": "Lower IOP by about 20%",
    "detail": "Drops (OHTS: 5-year conversion 4.4% vs 9.5%) or SLT (gentle laser on the trabecular meshwork)."
   },
   {
    "at": 3,
    "label": "OCT and field monitoring",
    "detail": "Does not stop the disease, but detects conversion before functional loss."
   }
  ]
 },
 "risk": [
  "Older age",
  "Higher IOP",
  "Thin cornea: ≤ 555 µm ≈ 3 times more conversion than > 588 µm (OHTS)",
  "Larger vertical C/D (cup-to-disc ratio)",
  "Higher PSD (early localized field defect)",
  "Family history, African ancestry, disc hemorrhage, low corneal hysteresis"
 ],
 "presentation": [
  "Asymptomatic; found on screening, often by the optometrist",
  "IOP > 21 mmHg on several occasions, open angle",
  "Or suspicious disc, borderline OCT, questionable non-reproducible field"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Healthy disc despite elevated IOP",
    "why": "Defines OHT; a notch or a hemorrhage changes the diagnosis."
   },
   {
    "sign": "Large disc with proportional cupping",
    "why": "Physiologic cupping: even, symmetric neuroretinal rim."
   },
   {
    "sign": "Disc hemorrhage",
    "why": "Predicts conversion: tighten follow-up or treat."
   },
   {
    "sign": "No secondary signs",
    "why": "Pseudoexfoliation (whitish deposits on the lens), pigment, uveitis or steroids change management."
   }
  ],
  "tests": [
   {
    "test": "Repeated tonometry at different times of day",
    "when": "Before concluding",
    "read": "A single measurement is not enough; avoid lid squeezing, breath-holding, thick mires (overestimation)."
   },
   {
    "test": "Pachymetry (central corneal thickness)",
    "when": "In every suspect",
    "read": "Thin: risk ↑ and IOP underestimated; no mechanical correction formula."
   },
   {
    "test": "Gonioscopy (mirrored lens that shows the angle)",
    "when": "At baseline",
    "read": "Confirms an open angle; rules out closure or a secondary cause."
   },
   {
    "test": "RNFL + macular OCT and 24-2 field",
    "when": "Baseline reference, then at follow-up",
    "read": "A defect must be reproducible (2–3 fields) before concluding."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Early glaucoma",
   "clue": "Reproducible field defect or concordant RNFL thinning."
  },
  {
   "dx": "Measurement artifact",
   "clue": "Thick cornea, squeezed lids, mires too thick."
  },
  {
   "dx": "Secondary OHT",
   "clue": "Steroids, uveitis, pseudoexfoliation, pigment dispersion, trauma."
  },
  {
   "dx": "Primary angle closure",
   "clue": "Iris–trabecular contact on gonioscopy."
  },
  {
   "dx": "Tilted myopic disc",
   "clue": "Falsely abnormal OCT (red disease), stable appearance."
  }
 ],
 "redFlags": [
  "Very high IOP (≥ 30 mmHg): treatment generally offered",
  "Disc hemorrhage or new RNFL thinning: conversion likely",
  "Unilateral elevated IOP: look for a secondary cause"
 ],
 "cat": {
  "algo": [
   {
    "q": "Confirmed IOP > 21 or suspicious disc?",
    "yes": "Full workup.",
    "no": "Routine screening.",
    "yesGo": 1
   },
   {
    "q": "Open angle, no secondary cause?",
    "yes": "Primary OHT or suspect.",
    "no": "Treat the cause (closure, steroid, uveitis).",
    "yesGo": 2
   },
   {
    "q": "Proven neuropathy (OCT, reproducible field)?",
    "yes": "Glaucoma: see the POAG fiche.",
    "no": "Estimate 5-year risk (OHTS-EGPS calculator).",
    "noGo": 3
   },
   {
    "q": "High risk, only eye, or IOP ≥ 30 mmHg?",
    "yes": "Treat if long life expectancy: PGA or SLT, target −20%.",
    "no": "Observe: regular OCT and fields; reassess the risk."
   }
  ],
  "phases": [
   {
    "phase": "observation",
    "items": [
     "Baseline reference workup: repeated IOPs, pachymetry, gonioscopy, photos, OCT, field",
     "Low risk: observation, less frequent visits"
    ]
   },
   {
    "phase": "medical",
    "items": [
     "If treating: prostaglandin analogue (PGA) at bedtime, target ≈ 20% below baseline"
    ]
   },
   {
    "phase": "laser",
    "items": [
     "SLT: drop-free alternative"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "Compare every OCT and field with the baseline; repeat an abnormal field",
     "Reassess the risk at every visit"
    ]
   }
  ],
  "local": "In Québec, an equipped optometrist may treat suspected glaucoma, but must then refer to an ophthalmologist for medical follow-up (O-7, r. 11.1); many OHT patients are followed under co-management. Without a field defect or VA loss, OHT does not affect the driver's licence (SAAQ)."
 },
 "treatments": [
  {
   "name": "Structured observation",
   "how": "No medication: periodic visits with IOP, OCT and field compared with baseline.",
   "why": "Low risk (thick cornea, moderate IOP, healthy disc).",
   "pros": "Avoids side effects and costs; most OHT patients do not convert.",
   "cons": "Requires reliable follow-up.",
   "cx": "Missed conversion if lost to follow-up.",
   "dose": "Visits every ≈ 6–24 months depending on risk: IOP, OCT, fields.",
   "refer": "Refer if new RNFL thinning, disc hemorrhage or field defect.",
   "pitfall": "Lost to follow-up = missed conversion: book the next visit.",
   "qc": "Quebec: often co-managed by optometrist and ophthalmologist."
  },
  {
   "name": "Prostaglandin analogue (PGA)",
   "how": "Bedtime drop that relaxes the ciliary muscle matrix and opens the uveoscleral pathway.",
   "why": "High risk or patient preference.",
   "pros": "1 drop a day, few systemic effects.",
   "cons": "Long-term treatment for a modest risk.",
   "cx": "Hyperemia, long lashes, iris darkening, orbital fat atrophy.",
   "dose": "Latanoprost 0.005%: 1 drop at bedtime.",
   "refer": "High risk or patient preference; not urgent.",
   "pitfall": "Do not treat a low risk for life: calculate it first."
  },
  {
   "name": "SLT (selective laser trabeculoplasty)",
   "how": "In-office laser through a lens: gentle spots on the pigmented trabecular meshwork that stimulate its remodeling and ↑ outflow.",
   "why": "Alternative to drops, especially when adherence is difficult.",
   "pros": "No drops; repeatable.",
   "cons": "Effect wanes.",
   "cx": "Transient IOP spike, mild inflammation.",
   "dose": "360°, ≈ 100 spots, in clinic.",
   "refer": "Alternative to drops, especially if adherence is hard.",
   "pitfall": "The effect wanes: keep measuring IOP."
  }
 ],
 "pearls": [
  {
   "q": "Why measure the cornea in OHT?",
   "a": "A thin cornea leads to underestimating IOP AND is an independent risk factor (OHTS: ≤ 555 µm ≈ 3 times more conversion than > 588 µm)."
  },
  {
   "q": "What did OHTS show?",
   "a": "In OHT patients at 24–32 mmHg, lowering IOP by about 20% reduced 5-year conversion from 9.5% to 4.4%. So most untreated patients do not convert."
  },
  {
   "q": "Do you treat every OHT patient?",
   "a": "No: estimate the risk (age, IOP, cornea, C/D, PSD) and life expectancy, then shared decision. Young, thin cornea and high IOP: lean toward treating."
  }
 ],
 "mnemonic": {
  "title": "OHTS predictors: \"APTCP\"",
  "text": "**A**ge, **P**ressure (IOP), **T**hin cornea, **C**/D (vertical), **P**SD: the more there are, the more you lean toward treatment."
 },
 "compare": {
  "title": "Normal OCT vs suspect who converts",
  "normal": {
   "caption": "Peripapillary RNFL within normal limits (green), double-hump TSNIT curve."
  },
  "patho": {
   "caption": "Inferior RNFL thinning before any field defect.",
   "reveal": [
    "Inferior sectors in red",
    "TSNIT curve below normal inferiorly",
    "Expected field defect: superior",
    "Confirm on a 2nd test before concluding"
   ]
  }
 },
 "sources": [
  "OHTS (Kass MA et al., Arch Ophthalmol 2002)",
  "OHTS: predictors of conversion (Gordon MO et al., Arch Ophthalmol 2002)",
  "OHTS-EGPS: validated prediction model (Ophthalmology 2007)",
  "Canadian optometric POAG guideline (MacIver S et al., Can J Optom 2017;79 Suppl 1)",
  "COS 2009: Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)"
 ],
 "treatment": {
  "first": [
   "**You**: explain \"a risk, not a disease\"; make sure follow-up happens.",
   "**Ophthalmologist**: OHTS-EGPS risk; observe, or latanoprost 0.005% at bedtime or SLT."
  ],
  "refer": "Refer to ophthalmology or optometry: regular follow-up — confirmed IOP > 21 mmHg; within a few weeks if ≥ 30 mmHg.",
  "pitfall": [
   "**Lifelong drops** for a low risk: calculate the risk first.",
   "**Cancelled follow-up**: conversion goes unnoticed."
  ],
  "qc": "Quebec: often co-managed by optometrist and ophthalmologist."
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-papille": {
 "title": "The deceptive disc: glaucomatous cupping and its mimics",
 "oneLiner": "A high C/D is not a diagnosis: measure the disc, read the rim, look for the pallor that mandates an MRI.",
 "definition": "Glaucoma hollows the rim at the poles, which stays pink. Large discs, compression or ischemia mimic it.",
 "anatomy": {
  "text": "The optic disc measures ≈ 1.5–2 mm, but its size varies widely while the axonal rim occupies a fairly similar area: large disc = large physiologic cup, small disc = almost no cup. The neuroretinal rim is normally thickest inferiorly, then superiorly, nasally and temporally (ISNT rule, imperfect). Macular fibers enter on the temporal side: hereditary, toxic or compressive damage makes them pale first."
 },
 "causal": {
  "title": "From the nerve to the disc",
  "steps": [
   {
    "label": "Axons injured",
    "detail": "IOP and a fragile lamina cribrosa (glaucoma), or compression, ischemia, a gene, a toxin, a congenital anomaly.",
    "kind": "cause"
   },
   {
    "label": "Glaucoma: loss at the poles",
    "detail": "Axons disappear mainly superiorly and inferiorly, without marked gliosis: the cup enlarges, the remaining rim stays pink.",
    "kind": "mecanisme"
   },
   {
    "label": "Other cause: pallor",
    "detail": "Compression, ischemia or heredity leave gliosis: the rim turns pale before it cups.",
    "kind": "mecanisme"
   },
   {
    "label": "Disc signs",
    "detail": "Notch, baring of circumlinear vessel, bayoneting, Drance hemorrhage, beta-zone peripapillary atrophy (PPA), RNFL defects.",
    "kind": "lesion"
   },
   {
    "label": "Concordant field defect",
    "detail": "Glaucoma: respects the horizontal meridian. Chiasm: vertical meridian. Optic nerve: central or cecocentral scotoma.",
    "kind": "signe"
   },
   {
    "label": "Serious cause missed",
    "detail": "Tumor, arteritis or progressing glaucoma, if you rely on the C/D alone.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 3,
    "label": "Disc size first",
    "detail": "A C/D of 0.7 can be normal in a large disc and suspicious in a small one."
   },
   {
    "at": 2,
    "label": "MRI if red flag",
    "detail": "Pallor > cupping, VA or color vision ↓, vertical defect: imaging before any glaucoma treatment."
   },
   {
    "at": 5,
    "label": "Serial OCT + fields",
    "detail": "An objective baseline followed by documented change is more decisive than an isolated measurement."
   }
  ]
 },
 "risk": [
  "Large disc (more common in people of African ancestry) or small disc (hyperope)",
  "High myopia: tilted disc, PPA, falsely red OCT",
  "Past acute vision loss (ischemia, arteritis)",
  "Family with poor vision since childhood; maternal diabetes",
  "Ethambutol, vitamin B12 deficiency"
 ],
 "presentation": [
  "Referred for \"high C/D\", often asymptomatic",
  "Glaucoma: pink rim thinned at the poles, VA and color vision preserved for a long time",
  "Compressive or hereditary mimic: VA or color vision ↓, relative afferent pupillary defect (RAPD), pallor",
  "Congenital mimic: stable appearance, nonprogressive field defect",
  "Rapid progression or asymmetry not explained by IOP"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Disc size (first)",
    "why": "Beam height adjusted to the disc × lens factor (approximate, depending on the manufacturer: ≈ 1.1 with a 78 D, ≈ 1.3 with a 90 D): small < ≈ 1.5 mm, large > ≈ 2 mm. Expected C/D follows size."
   },
   {
    "sign": "Rim: thickness (ISNT) and color",
    "why": "Notch or thinning at the poles = glaucoma; pale rim = nonglaucomatous cause likely."
   },
   {
    "sign": "Cupping or pallor?",
    "why": "Contour (bending of small vessels) versus color; pallor extending beyond the cup is a red flag."
   },
   {
    "sign": "Vessels, hemorrhage, PPA",
    "why": "Bayoneting and bared vessels follow the cup; Drance hemorrhage = risk factor for progression (AAO 2026); optociliary shunt vessels = chronic impairment of venous outflow."
   },
   {
    "sign": "VA, color vision, RAPD",
    "why": "Spared for a long time by glaucoma; early involvement points to the nerve."
   }
  ],
  "tests": [
   {
    "test": "RNFL OCT and macular ganglion cell layer (GCL)",
    "when": "Every suspect, at baseline and follow-up (AAO 2026)",
    "read": "Concordant inferotemporal or superotemporal loss = glaucoma; nasal macular loss respecting the vertical meridian = chiasm."
   },
   {
    "test": "24-2 and 10-2 fields",
    "when": "At baseline (Canadian guideline), then serially",
    "read": "Horizontal meridian = glaucoma; vertical = chiasm or visual pathways → MRI."
   },
   {
    "test": "Brain and orbit MRI with gadolinium",
    "when": "Red flag",
    "read": "Pituitary adenoma, meningioma, aneurysm."
   },
   {
    "test": "ESR, CRP, platelets",
    "when": "≥ 50 years with arteritis symptoms or past acute vision loss",
    "read": "Giant cell arteritis: steroids without waiting for the biopsy."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Large physiologic cup, megalopapilla",
   "clue": "Large disc, even pink rim (ISNT), normal OCT and field, stable. Can also become glaucomatous."
  },
  {
   "dx": "Tilted myopic disc",
   "clue": "Oblique oval disc, crescent of PPA, superotemporal defects that cross the vertical meridian."
  },
  {
   "dx": "Optic nerve hypoplasia",
   "clue": "Small disc with a double-ring sign; superior segmental form (diabetic mother): stable inferior defect. Bilateral: MRI and pituitary workup."
  },
  {
   "dx": "Compressive or dominant optic atrophy",
   "clue": "Pallor > cupping. Compressive: vertical defect, band atrophy. Dominant optic atrophy: bilateral temporal pallor, young, family history."
  },
  {
   "dx": "Post-AION sequela",
   "clue": "Nonarteritic: sectoral pallor, rarely cupping. Arteritic: pale cupping that mimics glaucoma."
  },
  {
   "dx": "Optic disc drusen",
   "clue": "Lumpy disc without a cup, pseudoedema, slowly progressive defects; calcium on B-scan and autofluorescence."
  }
 ],
 "redFlags": [
  "Age < 50, VA or color vision ↓, unexplained RAPD",
  "Pallor > cupping, or a defect respecting the vertical meridian",
  "≥ 50 years with arteritis symptoms: ESR, CRP the same day"
 ],
 "cat": {
  "algo": [
   {
    "q": "Cup in proportion to disc size?",
    "yes": "Large disc, normal rim: probable mimic.",
    "no": "Cup too large: glaucoma suspect.",
    "yesGo": 1,
    "noGo": 1
   },
   {
    "q": "Any red flag?",
    "yes": "MRI ± ESR, CRP (same day if arteritis).",
    "no": "Glaucoma workup: IOP, pachymetry, gonioscopy.",
    "noGo": 2
   },
   {
    "q": "OCT and field concordant?",
    "yes": "Glaucoma: target IOP.",
    "no": "Repeat; look for an artifact or another cause.",
    "yesGo": 3,
    "noGo": 3
   },
   {
    "q": "Documented change on follow-up?",
    "yes": "Treat or intensify.",
    "no": "Stable: spaced follow-up; no drops for a mimic."
   }
  ],
  "phases": [
   {
    "phase": "observation",
    "items": [
     "Baseline photos and OCT: comparison over time is often decisive"
    ]
   },
   {
    "phase": "medical",
    "items": [
     "Drops only if glaucoma is confirmed: target ≈ 20–30% below baseline IOP"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "OCT and field together (AAO 2026); record every disc hemorrhage"
    ]
   },
   {
    "phase": "escalade",
    "items": [
     "Red flag: prioritized MRI, neuro-ophthalmology; suspected arteritis: steroids the same day"
    ]
   }
  ],
  "local": "In Québec, many \"high C/D\" referrals come from optometry; the optometrist may treat suspected or early glaucoma but must refer to an ophthalmologist for follow-up (Regulation O-7, r. 11.1). On the MRI requisition, name the red flag."
 },
 "treatments": [
  {
   "name": "Serial OCT and fields",
   "how": "RNFL and GCL OCT; 24-2 and 10-2 perimetry.",
   "why": "Any suspicious disc: baseline, then change.",
   "pros": "Objective; the shape of the defect localizes the lesion.",
   "cons": "Normative databases poorly suited to atypical discs.",
   "cx": "Error if you treat the printout without looking at the disc.",
   "dose": "RNFL and GCL OCT; 24-2 and 10-2 fields, serially.",
   "refer": "Any suspicious disc: baseline, then compare.",
   "pitfall": "Do not treat the printout: an atypical disc falls outside the normative database."
  },
  {
   "name": "MRI and arteritis workup",
   "how": "MRI with gadolinium; ESR, CRP, platelets, temporal artery biopsy.",
   "why": "Red flag, or pale cupping after acute vision loss.",
   "pros": "Finds treatable causes; protects the other eye.",
   "cons": "Delays; low yield without a red flag.",
   "cx": "Gadolinium and renal function; high-dose steroids.",
   "dose": "MRI with gadolinium; ESR, CRP, platelets ± temporal artery biopsy.",
   "refer": "Red flag: prompt MRI; suspected arteritis: same day.",
   "pitfall": "No drops before compression has been excluded.",
   "qc": "Quebec: name the red flag on the MRI request to get it prioritized."
  },
  {
   "name": "IOP-lowering treatment",
   "how": "Drops, SLT or surgery depending on stage.",
   "why": "Confirmed glaucoma, even in a megalopapilla or a tilted disc.",
   "pros": "Slows the loss.",
   "cons": "Useless in a mimic.",
   "cx": "Lifelong side effects (see POAG, NTG).",
   "dose": "Latanoprost 0.005% at bedtime, SLT or surgery depending on stage.",
   "refer": "Confirmed glaucoma, even in a megalopapilla or a tilted disc.",
   "pitfall": "Useless in a stable mimic: lifelong side effects."
  }
 ],
 "pearls": [
  {
   "q": "Is a C/D of 0.7 abnormal?",
   "a": "It depends on the disc: in a large disc, 0.7 with an even pink rim can be normal; in a small disc, 0.5 can already be glaucomatous."
  },
  {
   "q": "How do you tell cupping from pallor?",
   "a": "Cupping is read from the contour, pallor from the color: pallor more extensive than the cup points to compression or ischemia."
  },
  {
   "q": "What kind of cupping should make you think of arteritis?",
   "a": "Pale cupping after acute vision loss at age 50 or older: arteritic AION often leaves cupping, nonarteritic rarely does."
  }
 ],
 "mnemonic": {
  "title": "The 5 Rs of the disc",
  "text": "**R**ing (size) → **R**im (ISNT, color) → **R**NFL → **R**egion of PPA → **R**ed (hemorrhages)."
 },
 "compare": {
  "title": "Large disc: physiologic or glaucomatous?",
  "normal": {
   "caption": "Congenital anomaly (large disc, left), normal fellow disc on the right."
  },
  "patho": {
   "caption": "Megalopapilla with severe glaucoma.",
   "reveal": [
    "Very large disc, almost entirely pale and cupped",
    "Neuroretinal rim reduced to a thin sliver near where the vessels emerge",
    "Vessels kinked at the edge of the cup (bayoneting)",
    "Disc size is not protective: the rim is what counts"
   ]
  }
 },
 "sources": [
  "AAO PPP Primary Open-Angle Glaucoma (Gedde SJ et al., Ophthalmology, online Feb 9, 2026)",
  "COS 2009: Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)",
  "Canadian optometric POAG guideline (MacIver S, MacDonald M, Prokopich CL, Can J Optom 2017;79 Suppl 1)",
  "Greenfield DS et al. The cupped disc: who needs neuroimaging? (Ophthalmology 1998)",
  "Trobe JD et al. Nonglaucomatous excavation of the optic disc (Arch Ophthalmol 1980)"
 ],
 "treatment": {
  "first": [
   "**You**: VA, color vision, RAPD; note disc size and rim color.",
   "**Ophthalmologist**: serial OCT and fields; MRI if red flag; treat confirmed glaucoma."
  ],
  "refer": "Refer to ophthalmology: within a few weeks — large C/D; same day if age ≥ 50 with headache or jaw claudication.",
  "pitfall": [
   "**IOP-lowering drops** on a pale disc: compression missed (MRI first)."
  ],
  "qc": "Quebec: name the red flag on the MRI request to get it prioritized."
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-pxf": {
 "title": "Pseudoexfoliation glaucoma",
 "oneLiner": "Older patient, whitish target-pattern deposits on the lens after dilation, high and fluctuating IOP: aggressive glaucoma and a high-risk cataract.",
 "definition": "Age-related whitish material clogs the meshwork. A more aggressive glaucoma than POAG.",
 "anatomy": {
  "text": "The lens is suspended by the zonules, fibers attached to the ciliary body. With each pupil movement, the pigmented posterior surface of the iris slides over the anterior lens capsule. Aqueous carries whatever floats in the anterior chamber to the trabecular meshwork."
 },
 "causal": {
  "title": "From flakes to a clogged filter",
  "steps": [
   {
    "label": "Age and genetic background",
    "detail": "Variants of the LOXL1 gene (an enzyme that assembles elastin) favor production of abnormal fibrillar material, mainly after age 60.",
    "kind": "cause"
   },
   {
    "label": "Deposits on capsule and zonules",
    "detail": "The material is deposited in a target pattern on the anterior capsule and weakens the zonules.",
    "kind": "lesion"
   },
   {
    "label": "Iris–lens friction",
    "detail": "The iris rubs on these rough deposits: it loses pigment at the pupillary margin and dilates poorly.",
    "kind": "mecanisme"
   },
   {
    "label": "Clogged trabecular meshwork",
    "detail": "Material and pigment lodge in the filter and damage it: aqueous outflow drops.",
    "kind": "mecanisme"
   },
   {
    "label": "High, fluctuating IOP",
    "detail": "Pressure often higher than in primary glaucoma, with large swings: faster progression.",
    "kind": "signe"
   },
   {
    "label": "Zonules and cataract at risk",
    "detail": "Weak zonules: trembling lens (phacodonesis), surgical complications, IOL dislocation years later.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 3,
    "label": "SLT",
    "detail": "Gentle laser on the trabecular meshwork (already heavily pigmented, so response is often good): ↑ outflow."
   },
   {
    "at": 4,
    "label": "Drops",
    "detail": "Prostaglandin analogue (bypasses the filter via the uveoscleral pathway) and aqueous suppressants."
   },
   {
    "at": 3,
    "label": "Filtering surgery",
    "detail": "Trabeculectomy or tube: create an outflow route that bypasses the clogged filter."
   }
  ]
 },
 "risk": [
  "Age > 60 (rare before 50)",
  "Nordic (Scandinavian) ancestry, but found everywhere",
  "LOXL1 gene variants, family history",
  "One eye affected at first; the other eye may follow"
 ],
 "presentation": [
  "Asymptomatic; often found on dilation or at a cataract assessment",
  "Asymmetric involvement, sometimes only one eye",
  "Elevated IOP, sometimes > 30 mmHg, with fluctuations",
  "Pupil that dilates poorly; cataract common"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Target-pattern deposits on the anterior capsule",
    "why": "Central disc, clear zone where the iris rubs, then a peripheral granular zone: diagnostic, often visible only after dilation."
   },
   {
    "sign": "White flakes at the pupillary margin",
    "why": "Visible before dilation; a valuable clinical clue."
   },
   {
    "sign": "Transillumination defects around the pupil",
    "why": "Pigment loss from friction; distinguishes them from the mid-peripheral slits of pigment dispersion."
   },
   {
    "sign": "Poor dilation, phacodonesis (trembling lens)",
    "why": "Sign of zonular weakness: warn the cataract surgeon."
   }
  ],
  "tests": [
   {
    "test": "Dilated examination",
    "when": "In every older patient, especially if IOP is asymmetric",
    "read": "Look for the target-pattern deposits and lens stability."
   },
   {
    "test": "Gonioscopy (mirrored lens that shows the angle)",
    "when": "At diagnosis",
    "read": "Patchy trabecular pigment, Sampaolesi line (pigment anterior to Schwalbe's line); angle sometimes narrow."
   },
   {
    "test": "IOP at several times of day, OCT, visual field",
    "when": "At baseline and close follow-up",
    "read": "Fluctuations and faster progression than in primary glaucoma."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Primary open-angle glaucoma",
   "clue": "No capsular deposits, even with dilation."
  },
  {
   "dx": "Pigment dispersion",
   "clue": "Young myope, Krukenberg spindle (vertical pigment on the cornea), mid-peripheral transillumination slits."
  },
  {
   "dx": "True exfoliation of the lens capsule",
   "clue": "Splitting of the capsule in glassblowers (infrared heat)."
  },
  {
   "dx": "Angle closure",
   "clue": "Also possible in PXF: loose zonules, lens moves forward; gonioscopy settles it."
  }
 ],
 "redFlags": [
  "Very high IOP or large fluctuations: treat and follow closely",
  "Phacodonesis or subluxation: high-risk cataract surgery",
  "Sudden vision loss years after cataract surgery: in-the-bag IOL dislocation"
 ],
 "cat": {
  "algo": [
   {
    "q": "Capsular deposits or flakes at the pupil margin?",
    "yes": "Pseudoexfoliation: examine the other eye.",
    "no": "Another open-angle glaucoma.",
    "yesGo": 1
   },
   {
    "q": "Neuropathy (disc, OCT, field)?",
    "yes": "PXF glaucoma: lower target.",
    "no": "No glaucoma: close IOP follow-up.",
    "yesGo": 2,
    "noGo": 4
   },
   {
    "q": "Open, visible angle?",
    "yes": "SLT or prostaglandin analogue.",
    "no": "Associated closure: iridotomy or lens extraction.",
    "yesGo": 3,
    "noGo": 3
   },
   {
    "q": "Progression or target not met?",
    "yes": "Add a class, then trabeculectomy or tube.",
    "no": "Close follow-up.",
    "yesGo": 4,
    "noGo": 4
   },
   {
    "q": "Cataract to operate?",
    "yes": "Weak zonules: capsular tension ring, hooks.",
    "no": "Reassess at every visit."
   }
  ],
  "phases": [
   {
    "phase": "observation",
    "items": [
     "Syndrome without glaucoma: IOP, disc, OCT and field more often than an ordinary suspect"
    ]
   },
   {
    "phase": "medical",
    "items": [
     "Prostaglandin analogue (PGA), then combinations; often several classes"
    ]
   },
   {
    "phase": "laser",
    "items": [
     "SLT (often good response); reduced energy if the trabecular meshwork is heavily pigmented, check IOP afterward"
    ]
   },
   {
    "phase": "chirurgie",
    "items": [
     "Trabeculectomy with mitomycin C (antifibrotic) or tube if progressing",
     "Cataract: surgeon forewarned, small pupil, fragile zonules"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "Close visits; check IOL centration after cataract surgery, lifelong"
    ]
   }
  ],
  "local": "Common in older people, especially of Northern European ancestry. Given its aggressiveness, refer promptly to an ophthalmologist (O-7, r. 11.1: outside of suspected, early or steroid-induced glaucoma, the optometrist must obtain a physician's consent to treat)."
 },
 "treatments": [
  {
   "name": "IOP-lowering drops",
   "how": "Daily drops: prostaglandin analogue (↑ uveoscleral outflow), then beta-blocker, carbonic anhydrase inhibitor or brimonidine (↓ production).",
   "why": "First-line, often in combination.",
   "pros": "Simple, no procedure.",
   "cons": "Control fluctuations less well; several classes often needed.",
   "cx": "Depending on class (hyperemia, bronchospasm, allergy).",
   "dose": "Latanoprost 0.005% at bedtime; add timolol 0.5% BID or dorzolamide 2% as needed.",
   "refer": "Refer promptly: aggressive glaucoma, fluctuating IOP.",
   "pitfall": "A normal clinic IOP can hide spikes: close follow-up.",
   "qc": "Quebec: outside suspect, early or steroid-induced glaucoma, an optometrist treats only with a physician's consent (O-7)."
  },
  {
   "name": "SLT (selective laser trabeculoplasty)",
   "how": "In-office laser through a lens: gentle spots on the trabecular meshwork, which remodels and lets aqueous out more easily.",
   "why": "First-line or adjunct; pigmented trabecular meshwork = good target.",
   "pros": "Initial response often good; drop-free.",
   "cons": "Effect sometimes less durable.",
   "cx": "IOP spike (more likely if heavily pigmented), inflammation.",
   "dose": "360° SLT in clinic.",
   "refer": "First line or add-on.",
   "pitfall": "IOP spike more likely if heavily pigmented: check IOP afterwards."
  },
  {
   "name": "Filtering surgery (trabeculectomy, tube)",
   "how": "In the OR: trabeculectomy (fistula under a scleral flap into a bleb under the conjunctiva) or a tube connected to a plate.",
   "why": "Progression or uncontrolled IOP.",
   "pros": "Bypasses the clogged filter; low IOP.",
   "cons": "Intensive follow-up.",
   "cx": "Hypotony, leak, bleb infection.",
   "dose": "Trabeculectomy with MMC or tube, in the OR.",
   "refer": "Progression or uncontrolled IOP.",
   "pitfall": "Intensive postoperative follow-up (post-op fiche)."
  },
  {
   "name": "Adapted cataract surgery",
   "how": "Phacoemulsification with tools for weak zonules: capsular tension ring (a ring that stretches the bag), iris or capsular hooks.",
   "why": "Cataract (common); also opens the angle if narrow.",
   "pros": "Improves vision; often lowers IOP slightly.",
   "cons": "Small pupil, more difficult surgery.",
   "cx": "Zonular dialysis, vitreous loss, postoperative IOP spike, capsular contraction, late in-the-bag IOL dislocation.",
   "dose": "Phacoemulsification with capsular tension ring and hooks as needed.",
   "refer": "Cataract (common); also opens a narrow angle.",
   "pitfall": "Weak zonules: warn the surgeon, risk of vitreous loss."
  }
 ],
 "pearls": [
  {
   "q": "Why dilate this patient?",
   "a": "The central disc and peripheral zone of deposits are often invisible without dilation; you also note poor dilation and phacodonesis, valuable for the surgeon."
  },
  {
   "q": "How does this glaucoma differ from POAG?",
   "a": "Higher, more fluctuating IOP, faster progression and poorer response to drops: lower target, tighter follow-up, earlier surgery. Pseudoexfoliation is a progression factor in EMGT."
  },
  {
   "q": "What late risk after cataract surgery?",
   "a": "The zonules keep weakening: the IOL can dislocate in its bag years later. Any sudden vision loss in a pseudophakic PXF patient: check the IOL position."
  }
 ],
 "mnemonic": {
  "title": "PXF: the 5 Ps",
  "text": "**P**owder in a target pattern on the lens, **P**upil that dilates poorly, **P**igment in the trabecular meshwork (Sampaolesi), **P**ressure high and fluctuating, **P**hacodonesis."
 },
 "compare": {
  "title": "Normal lens vs pseudoexfoliation",
  "normal": {
   "caption": "Smooth anterior capsule, well-dilated pupil."
  },
  "patho": {
   "caption": "Whitish target-pattern deposits on the anterior capsule.",
   "reveal": [
    "Central disc of material",
    "Clear intermediate zone (iris rubbing)",
    "Peripheral granular zone",
    "Flakes at the pupillary margin"
   ]
  }
 },
 "sources": [
  "Ritch R, Schlötzer-Schrehardt U. Exfoliation syndrome (Surv Ophthalmol 2001)",
  "Thorleifsson G et al. LOXL1 variants and exfoliation glaucoma (Science 2007)",
  "EMGT: factors for progression (Leske MC et al., Arch Ophthalmol 2003)",
  "AAO PPP Primary Open-Angle Glaucoma (Gedde SJ et al., Ophthalmology, online Feb 9, 2026)"
 ],
 "treatment": {
  "first": [
   "**You**: refer; write \"pseudoexfoliation\" for the cataract surgeon.",
   "**Ophthalmologist**: latanoprost 0.005% at bedtime or SLT, lower target; earlier surgery."
  ],
  "refer": "Refer to ophthalmology: within a few weeks — whitish deposits on the lens; same day if sudden vision loss after cataract surgery (endophthalmitis, detachment, dislocated IOL with high IOP).",
  "pitfall": [
   "**Cataract surgery** without planning for weak zonules: vitreous loss.",
   "**SLT**: IOP spike more likely; recheck afterwards."
  ],
  "qc": "Quebec: outside suspect, early or steroid-induced glaucoma, an optometrist treats only with a physician's consent (O-7)."
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-pigmentaire": {
 "title": "Pigment dispersion and pigmentary glaucoma",
 "oneLiner": "Young myopic man, Krukenberg spindle, mid-peripheral transillumination slits and a heavily pigmented angle: IOP spikes with exercise.",
 "definition": "The bowed iris rubs the zonules and sheds pigment. The pigment clogs the meshwork.",
 "anatomy": {
  "text": "The posterior surface of the iris is lined with a heavily pigmented epithelium; just behind it lie the zonules, the fibers that hold the lens. In myopes, the anterior chamber is deep and the iris can take on a concave shape. Aqueous circulates in a loop in the anterior chamber and ends up at the trabecular meshwork."
 },
 "causal": {
  "title": "From iris rubbing to a saturated filter",
  "steps": [
   {
    "label": "Concave iris in a myope",
    "detail": "Deep chamber, large and floppy iris that bows backward.",
    "kind": "cause"
   },
   {
    "label": "Reverse pupillary block",
    "detail": "Blinking and accommodation push aqueous in front of the iris; pressure there becomes higher and presses the iris against the zonules.",
    "kind": "mecanisme"
   },
   {
    "label": "Pigment rubbed off",
    "detail": "The zonules rub the iris epithelium: radial mid-peripheral transillumination slits.",
    "kind": "lesion"
   },
   {
    "label": "Pigment dispersed",
    "detail": "Aqueous currents deposit pigment on the endothelium as a vertical spindle (Krukenberg) and as a dense band in the angle.",
    "kind": "signe"
   },
   {
    "label": "Overloaded trabecular meshwork",
    "detail": "The filter cells, saturated with pigment, are damaged: IOP rises, with spikes on exercise or dilation.",
    "kind": "mecanisme"
   },
   {
    "label": "Glaucoma, then burnt-out phase",
    "detail": "Nerve damage; with age, pigment release stops and IOP may normalize.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 4,
    "label": "Drops and SLT",
    "detail": "The prostaglandin analogue bypasses the saturated filter; SLT (gentle laser, low energy) restores outflow."
   },
   {
    "at": 1,
    "label": "Pilocarpine, iridotomy",
    "detail": "Pilocarpine constricts the pupil and stretches the iris; iridotomy (small laser hole in the iris) equalizes the pressures and flattens the iris. No proven benefit on the glaucoma."
   },
   {
    "at": 5,
    "label": "Filtering surgery",
    "detail": "Trabeculectomy or tube if progressing despite drops and laser."
   }
  ]
 },
 "risk": [
  "Adult aged 20 to 40; glaucoma develops more often in men",
  "Myopia; deep anterior chamber",
  "European ancestry, family history",
  "Vigorous physical exertion (running, basketball): triggers IOP spikes",
  "Conversion to glaucoma: ≈ 10% at 5 years, 15% at 15 years (Siddiqui 2003)"
 ],
 "presentation": [
  "Often asymptomatic; found on a routine exam",
  "Blurred vision and halos after exercise or dilation (pigment shower with an IOP spike)",
  "Bilateral, often asymmetric involvement; fluctuating IOP"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Krukenberg spindle",
    "why": "Vertical pigment on the central endothelium; not very specific alone, suggestive together with the iris slits."
   },
   {
    "sign": "Radial mid-peripheral transillumination slits",
    "why": "Imprint of zonular rubbing; in PXF, the defects are rather around the pupil."
   },
   {
    "sign": "Concave iris, deep chamber",
    "why": "The configuration behind reverse pupillary block."
   },
   {
    "sign": "Dense, homogeneous band of pigment over 360° of the angle",
    "why": "Uniform pigment, unlike the patchy pigment of PXF."
   },
   {
    "sign": "Line of pigment on the posterior capsule (Scheie line)",
    "why": "Pigment deposited where the zonules insert on the lens, seen with dilation: supports the diagnosis."
   }
  ],
  "tests": [
   {
    "test": "Gonioscopy (mirrored lens that shows the angle)",
    "when": "At diagnosis",
    "read": "Wide angle, concave iris, very dark, homogeneous trabecular pigment."
   },
   {
    "test": "Iris retroillumination",
    "when": "At the slit lamp, undilated pupil",
    "read": "Bright radial slits in the mid-periphery."
   },
   {
    "test": "IOP after exercise or after dilation",
    "when": "If symptoms with exercise",
    "read": "A spike confirms the role of the pigment shower."
   },
   {
    "test": "Dilated fundus exam (peripheral retina)",
    "when": "Before any pilocarpine",
    "read": "Myope: look for lattice and tears, at risk of detachment."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Pseudoexfoliation",
   "clue": "Older patient, target-pattern deposits, defects around the pupil, patchy pigment."
  },
  {
   "dx": "Normal-tension glaucoma",
   "clue": "Burnt-out phase: normal IOP but dense pigment and a history of high IOP."
  },
  {
   "dx": "Pigmented or herpetic uveitis",
   "clue": "Cells, keratic precipitates, sectoral iris atrophy."
  },
  {
   "dx": "IOL chafing the iris (UGH syndrome: uveitis-glaucoma-hyphema)",
   "clue": "Pseudophakic, IOL in the sulcus; uveitis, hyphema, glaucoma."
  }
 ],
 "redFlags": [
  "Symptomatic IOP spikes with exercise",
  "Flashes or floaters (myope): retinal detachment",
  "Unilateral dispersion: look for a secondary cause (IOL, trauma, tumor)"
 ],
 "cat": {
  "algo": [
   {
    "q": "Krukenberg, radial defects and heavily pigmented angle?",
    "yes": "Pigment dispersion.",
    "no": "Other pigment source (PXF, IOL, uveitis).",
    "yesGo": 1
   },
   {
    "q": "Neuropathy (disc, OCT, field)?",
    "yes": "Pigmentary glaucoma: target IOP.",
    "no": "No glaucoma: monitor IOP and nerve.",
    "yesGo": 2
   },
   {
    "q": "Open angle, laser candidate?",
    "yes": "Low-energy SLT or prostaglandin analogue.",
    "no": "Prostaglandin analogue.",
    "yesGo": 3,
    "noGo": 3
   },
   {
    "q": "Progression despite everything?",
    "yes": "Trabeculectomy or tube; young myope: risk of hypotony maculopathy.",
    "no": "Follow-up; space out once burnt out."
   }
  ],
  "phases": [
   {
    "phase": "observation",
    "items": [
     "Syndrome without glaucoma: regular IOP, OCT and field; report symptoms with exercise"
    ]
   },
   {
    "phase": "medical",
    "items": [
     "Prostaglandin analogue (PGA) first-line; add a class as needed"
    ]
   },
   {
    "phase": "laser",
    "items": [
     "Low-energy SLT (heavily pigmented trabecular meshwork), check IOP afterward",
     "Iridotomy: flattens the iris, but no proven benefit on the glaucoma; not routine"
    ]
   },
   {
    "phase": "chirurgie",
    "items": [
     "Trabeculectomy with mitomycin C (antifibrotic) or tube if progressing"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "Bilateral and long-lasting; IOP may normalize after age 50 (burnt-out phase)"
    ]
   }
  ],
  "local": "In Québec, pigment dispersion without neuropathy is often followed in optometry as a glaucoma suspect; once pigmentary glaucoma is established, refer to an ophthalmologist for medical follow-up (O-7, r. 11.1)."
 },
 "treatments": [
  {
   "name": "Prostaglandin analogue (PGA)",
   "how": "Bedtime drop that relaxes the ciliary muscle matrix: aqueous leaves via the uveoscleral pathway, bypassing the saturated filter.",
   "why": "First-line.",
   "pros": "Effective, once daily.",
   "cons": "Lifelong treatment in a young patient.",
   "cx": "Hyperemia, long lashes, iris darkening, orbital fat atrophy.",
   "dose": "Latanoprost 0.005%: 1 drop at bedtime.",
   "refer": "Established pigmentary glaucoma: followed by the ophthalmologist.",
   "pitfall": "Lifelong treatment in a young patient: support adherence.",
   "qc": "Quebec: dispersion without neuropathy is often followed in optometry (glaucoma suspect)."
  },
  {
   "name": "Low-energy SLT",
   "how": "In-office laser through a lens: gentle spots on the trabecular meshwork, which remodels; reduced energy, sometimes over only half the angle, because the pigment absorbs a lot.",
   "why": "Alternative or add-on to drops.",
   "pros": "Initial response often good.",
   "cons": "Effect wanes.",
   "cx": "Marked IOP spike if energy too high.",
   "dose": "Reduced-energy SLT, sometimes over 180° only.",
   "refer": "Alternative or add-on to drops.",
   "pitfall": "Too much energy = marked IOP spike: check IOP afterwards."
  },
  {
   "name": "Pilocarpine",
   "how": "Miotic drop: constricts the pupil, stretches the iris and pulls it away from the zonules, which reduces pigment release.",
   "why": "Rarely; selected cases.",
   "pros": "Acts on the mechanism.",
   "cons": "Induced myopia, blurred vision, headache: poorly tolerated in the young.",
   "cx": "Retinal detachment in a myope with lattice.",
   "dose": "Pilocarpine drops, selected cases only.",
   "refer": "Rarely; the ophthalmologist decides.",
   "pitfall": "Dilated fundus exam first: retinal detachment in myopes."
  },
  {
   "name": "Laser iridotomy (LPI)",
   "how": "YAG laser: small hole in the peripheral iris; pressures equalize and the concave iris flattens.",
   "why": "Debated in young patients with a very concave iris; not routine.",
   "pros": "Corrects the concavity.",
   "cons": "No proven benefit on glaucoma progression.",
   "cx": "Dysphotopsias, IOP spike, bleeding.",
   "dose": "YAG laser: small hole in the peripheral iris.",
   "refer": "Discussed if the iris is very concave; not routine.",
   "pitfall": "No proven benefit on glaucoma progression."
  }
 ],
 "pearls": [
  {
   "q": "What is the mechanism of dispersion?",
   "a": "Reverse pupillary block: aqueous pushed in front of the iris presses it backward against the zonules, which rub off its pigment. Hence the radial mid-peripheral slits."
  },
  {
   "q": "Why low-energy SLT?",
   "a": "The heavily pigmented trabecular meshwork absorbs more energy: risk of a marked IOP spike. Reduce the energy and check IOP afterward."
  },
  {
   "q": "Cupping with normal IOP in a 60-year-old man with dense trabecular pigment?",
   "a": "Think burnt-out pigmentary glaucoma: IOP has normalized, but the nerve was damaged earlier. It can mimic normal-tension glaucoma."
  }
 ],
 "mnemonic": {
  "title": "Pigment in 3 places",
  "text": "**Cornea**: Krukenberg spindle. **Iris**: radial mid-peripheral slits. **Angle**: dense, homogeneous black band over 360°."
 },
 "compare": {
  "title": "Normal cornea vs Krukenberg spindle",
  "normal": {
   "caption": "Clear endothelium, no pigment."
  },
  "patho": {
   "caption": "Vertical spindle of pigment on the central endothelium.",
   "reveal": [
    "Brownish vertical band in the center of the cornea",
    "Deposit on the endothelium, not in the stroma",
    "Look for the transillumination slits",
    "Gonioscopy: dense, homogeneous pigment"
   ]
  }
 },
 "sources": [
  "Siddiqui Y et al. Risk of pigmentary glaucoma after pigment dispersion (Am J Ophthalmol 2003)",
  "Campbell DG. Pigmentary dispersion and glaucoma: a new theory (Arch Ophthalmol 1979)",
  "Michelessi M, Lindsley K. Peripheral iridotomy for pigmentary glaucoma (Cochrane Database Syst Rev 2016)"
 ],
 "treatment": {
  "first": [
   "**You**: ask about flashes and floaters (myope); refer.",
   "**Ophthalmologist**: latanoprost 0.005% at bedtime or low-energy SLT."
  ],
  "refer": "Refer to ophthalmology: within a few weeks — Krukenberg spindle or halos with exercise; same day if flashes or a curtain.",
  "pitfall": [
   "**Pilocarpine**: dilated fundus exam first (detachment in myopes).",
   "**Full-energy SLT**: marked IOP spike."
  ],
  "qc": "Quebec: dispersion without neuropathy is often followed in optometry (glaucoma suspect)."
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-neovasculaire": {
 "title": "Neovascular glaucoma",
 "oneLiner": "Ischemic retina (vein occlusion, diabetes, carotid), neovessels on the iris and in the angle, very high IOP: urgent anti-VEGF and panretinal photocoagulation.",
 "definition": "An ischemic retina releases VEGF. New vessels close the angle and IOP rises.",
 "anatomy": {
  "text": "The inner retina is supplied by the central retinal artery and drained by the central retinal vein; if this network becomes occluded or depleted, the retina becomes ischemic. VEGF diffuses into the vitreous and then the aqueous, reaching the iris and angle. Normally, no vessel crosses the scleral spur to branch over the trabecular meshwork."
 },
 "causal": {
  "title": "From ischemic retina to closed angle",
  "steps": [
   {
    "label": "Ischemic retina",
    "detail": "Ischemic central retinal vein occlusion (CRVO), proliferative diabetic retinopathy or carotid stenosis (ocular ischemic syndrome): the retina lacks oxygen.",
    "kind": "cause"
   },
   {
    "label": "VEGF release",
    "detail": "The distressed retina secretes VEGF, which reaches the anterior segment through the vitreous and aqueous.",
    "kind": "mecanisme"
   },
   {
    "label": "Iris and angle neovessels",
    "detail": "Fine vessels first at the pupillary margin (NVI), then in the angle (NVA), crossing the scleral spur.",
    "kind": "signe"
   },
   {
    "label": "Open-angle stage",
    "detail": "An invisible fibrovascular membrane covers the trabecular meshwork: the angle is still open, but aqueous no longer drains.",
    "kind": "mecanisme"
   },
   {
    "label": "Synechial closure",
    "detail": "The membrane contracts and pulls the iris over the angle (synechiae): zipper-like closure, ectropion uveae, very high IOP.",
    "kind": "lesion"
   },
   {
    "label": "Painful eye, vision lost",
    "detail": "Corneal edema, hyphema, rapid optic neuropathy; often within 3 months of a CRVO (\"90-day glaucoma\").",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 1,
    "label": "Intravitreal anti-VEGF",
    "detail": "Injection into the vitreous of an antibody that neutralizes VEGF: neovessels regress within days, but the effect is temporary."
   },
   {
    "at": 0,
    "label": "Panretinal photocoagulation (PRP)",
    "detail": "Laser that destroys the ischemic peripheral retina: durably removes the source of VEGF."
   },
   {
    "at": 4,
    "label": "IOP lowering and tube",
    "detail": "Drops that ↓ production, then a glaucoma drainage tube (bypasses the closed angle) or cyclophotocoagulation (laser that destroys part of the ciliary body)."
   }
  ]
 },
 "risk": [
  "Ischemic CRVO (leading cause, along with diabetes)",
  "Proliferative diabetic retinopathy, especially if poorly controlled",
  "Ocular ischemic syndrome: severe carotid stenosis",
  "Diabetes, hypertension, advanced age",
  "Less often: central retinal artery occlusion, chronic retinal detachment, intraocular tumor"
 ],
 "presentation": [
  "Pain, redness, blurred vision or halos; vision often already reduced by the retinal disease",
  "Early stage asymptomatic: neovessels found on careful examination of the iris",
  "Very high IOP, corneal edema, sometimes hyphema"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Neovessels at the pupillary margin (NVI)",
    "why": "Usual first site; examine the iris BEFORE dilation, which hides them."
   },
   {
    "sign": "Vessels crossing the spur and branching over the trabecular meshwork (NVA)",
    "why": "Always pathologic; normal angle vessels do not branch over the filter."
   },
   {
    "sign": "Ectropion uveae (iris pigment everted at the pupillary margin)",
    "why": "Traction from the contracting membrane: advanced synechial stage."
   },
   {
    "sign": "Fundus: diffuse hemorrhages, retinal neovessels",
    "why": "Identifies the cause: CRVO, diabetic retinopathy, carotid ischemia."
   }
  ],
  "tests": [
   {
    "test": "Gonioscopy (mirrored lens that shows the angle) before dilation",
    "when": "Ischemic CRVO or proliferative retinopathy, at every visit in the first months",
    "read": "NVA, then extent of synechiae (staging)."
   },
   {
    "test": "Dilated fundus exam, fluorescein angiography",
    "when": "At diagnosis",
    "read": "Extent of retinal nonperfusion."
   },
   {
    "test": "B-scan ultrasound",
    "when": "Fundus not visible",
    "read": "Rules out retinal detachment or tumor."
   },
   {
    "test": "Carotid Doppler, HbA1c, blood pressure",
    "when": "No obvious retinal cause; systemic workup in all",
    "read": "Carotid stenosis = ocular ischemic syndrome, stroke risk."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Acute primary angle-closure crisis",
   "clue": "No neovessels; fellow eye with a narrow angle."
  },
  {
   "dx": "Hypertensive uveitis",
   "clue": "Keratic precipitates, cells; dilated normal radial iris vessels, without fine branching."
  },
  {
   "dx": "Fuchs heterochromic uveitis",
   "clue": "Fine angle vessels without synechiae, heterochromia, no retinal ischemia."
  },
  {
   "dx": "Ghost cell glaucoma",
   "clue": "After vitreous hemorrhage: khaki cells in the chamber, open angle without neovessels."
  }
 ],
 "redFlags": [
  "Ischemic CRVO: look for NVI and NVA at every visit in the first 3 months",
  "Very high IOP and pain: same-day management",
  "Diabetic fellow eye: examine and treat the retinopathy"
 ],
 "cat": {
  "algo": [
   {
    "q": "Iris or angle neovessels?",
    "yes": "Look for the ischemic cause.",
    "no": "Ischemic CRVO, proliferative retinopathy: regular undilated gonioscopy.",
    "yesGo": 1
   },
   {
    "q": "Obvious retinal cause (diabetes, CRVO)?",
    "yes": "Coordinate retina and family physician (glucose, blood pressure).",
    "no": "Ocular ischemic syndrome: carotid Doppler (stroke risk).",
    "yesGo": 2,
    "noGo": 2
   },
   {
    "q": "Raised IOP?",
    "yes": "NVG: anti-VEGF, PRP and IOP lowering the same day.",
    "no": "Neovessels only: prompt anti-VEGF and PRP to save the angle.",
    "yesGo": 3
   },
   {
    "q": "Angle closed by extensive synechiae?",
    "yes": "Drops will not suffice.",
    "no": "Angle still open: PRP and drops.",
    "yesGo": 4
   },
   {
    "q": "Useful visual potential?",
    "yes": "Tube after anti-VEGF (less bleeding).",
    "no": "Cyclophotocoagulation, atropine and steroid for comfort."
   }
  ],
  "phases": [
   {
    "phase": "medical",
    "items": [
     "Intravitreal anti-VEGF as early as possible (bridge to PRP)",
     "Drops that ↓ production (timolol, dorzolamide, brimonidine) ± oral acetazolamide; no pilocarpine",
     "Atropine 1% and prednisolone acetate 1%: comfort and inflammation"
    ]
   },
   {
    "phase": "laser",
    "items": [
     "Complete PRP as soon as possible; cryotherapy or laser in the OR if media are hazy"
    ]
   },
   {
    "phase": "chirurgie",
    "items": [
     "Glaucoma drainage tube (Ahmed or Baerveldt), ideally after anti-VEGF; trabeculectomy less favorable (scarring)"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "Regression of neovessels, gonioscopy, IOP, fellow eye; repeat anti-VEGF as needed"
    ]
   },
   {
    "phase": "escalade",
    "items": [
     "Cyclophotocoagulation if visual potential is poor or the tube fails; blind painful eye: comfort first"
    ]
   }
  ],
  "local": "In Québec, injections and PRP are done in retina clinics and tubes in hospital centers: refer the same day and coordinate retina and glaucoma. Diabetic retinopathy screening, often done by optometrists, remains the best prevention."
 },
 "treatments": [
  {
   "name": "Intravitreal anti-VEGF (bevacizumab, ranibizumab, aflibercept)",
   "how": "In-office injection of an antibody into the vitreous: it neutralizes VEGF and the neovessels regress within days.",
   "why": "At diagnosis; before surgery (less bleeding).",
   "pros": "Rapid effect.",
   "cons": "Temporary: does not replace PRP.",
   "cx": "Endophthalmitis (rare), IOP spike.",
   "dose": "Bevacizumab 1.25 mg/0.05 mL intravitreal (or ranibizumab 0.5 mg, aflibercept 2 mg).",
   "refer": "At diagnosis: refer to retina the same day.",
   "pitfall": "Temporary effect: does not replace PRP.",
   "qc": "Quebec: injections and PRP in retina clinics; tubes in hospital centres."
  },
  {
   "name": "Panretinal photocoagulation (PRP)",
   "how": "In-office laser through a lens: hundreds of spots destroy the ischemic retina, which stops producing VEGF.",
   "why": "Definitive treatment.",
   "pros": "Durable effect.",
   "cons": "Works over a few weeks; clear media required.",
   "cx": "Peripheral field and night vision ↓, worsened macular edema.",
   "dose": "Laser in clinic: ≈ 1200–1600 spots over 1–3 sessions.",
   "refer": "Definitive treatment, as soon as the media allow.",
   "pitfall": "Works over weeks: cover with anti-VEGF meanwhile."
  },
  {
   "name": "Glaucoma drainage tube (Ahmed, Baerveldt)",
   "how": "In the OR: tube placed in the chamber (or via the pars plana) and connected to a plate on the sclera; aqueous bypasses the closed angle.",
   "why": "Uncontrolled IOP with visual potential.",
   "pros": "Resists scarring better than trabeculectomy.",
   "cons": "Inflamed, fragile eye.",
   "cx": "Hyphema, hypotony, tube occlusion, exposure.",
   "dose": "Ahmed or Baerveldt, in the OR, after anti-VEGF.",
   "refer": "Uncontrolled IOP with visual potential.",
   "pitfall": "Inflamed, fragile eye: risk of hyphema and tube blockage."
  },
  {
   "name": "Cyclophotocoagulation",
   "how": "Laser applied through the sclera that destroys part of the ciliary body: less aqueous produced.",
   "why": "Poor visual potential or tube failure.",
   "pros": "Quick, incisionless.",
   "cons": "Effect hard to titrate.",
   "cx": "Hypotony, phthisis (shrinking eye), vision loss.",
   "dose": "Transscleral diode laser cyclophotocoagulation.",
   "refer": "Poor visual potential or failed tube.",
   "pitfall": "Hard to titrate: risk of hypotony and phthisis."
  }
 ],
 "pearls": [
  {
   "q": "Anti-VEGF or PRP?",
   "a": "Both: anti-VEGF makes the neovessels regress within days but temporarily; PRP durably removes the source of VEGF. Anti-VEGF is the bridge, PRP the definitive treatment."
  },
  {
   "q": "Why no pilocarpine?",
   "a": "It increases inflammation and vascular permeability, promotes synechiae and cannot open an angle closed by a fibrovascular membrane. Atropine and steroid are preferred."
  },
  {
   "q": "When should you look for neovessels after a CRVO?",
   "a": "Especially in the first 3 months of an ischemic occlusion (\"90-day glaucoma\"): iris exam before dilation and gonioscopy at every visit; PRP as soon as they appear (CVOS), rather than routine prophylaxis."
  }
 ],
 "mnemonic": {
  "title": "Causes \"DCC\", treatment \"IBLD\"",
  "text": "Causes: **D**iabetes (proliferative retinopathy), **C**RVO (central vein occlusion), **C**arotid (ocular ischemic syndrome). Treatment: **I**nject (anti-VEGF), **B**urn (PRP), **L**ower (IOP), **D**rain (tube)."
 },
 "compare": {
  "title": "Normal angle vs angle neovessels",
  "normal": {
   "caption": "Open angle, no vessels on the trabecular meshwork."
  },
  "patho": {
   "caption": "Fine vessels crossing the spur: open-angle stage.",
   "reveal": [
    "Fine, arborizing vessels crossing the scleral spur",
    "Branching over the trabecular meshwork",
    "Angle still open: PRP can still save it",
    "Look for NVI at the pupillary margin"
   ]
  }
 },
 "sources": [
  "Central Vein Occlusion Study (CVOS Group, Ophthalmology 1995)",
  "Hayreh SS. Neovascular glaucoma (Prog Retin Eye Res 2007)",
  "Ahmed Baerveldt Comparison Study (Budenz DL et al., Ophthalmology 2011)",
  "AAO PPP Retinal Vein Occlusions (Flaxel CJ et al., Ophthalmology 2020)"
 ],
 "treatment": {
  "first": [
   "**You**: glucose, blood pressure; with no retinal cause, carotid Doppler.",
   "**Ophthalmologist**: bevacizumab 1.25 mg intravitreal, PRP, IOP lowering; tube or cyclophotocoagulation."
  ],
  "refer": "Refer to ophthalmology: same day — the angle closes within days to weeks.",
  "pitfall": [
   "**Pilocarpine**: contraindicated (inflammation, synechiae).",
   "**Anti-VEGF alone**: temporary effect; PRP is still essential."
  ],
  "qc": "Quebec: injections and PRP in retina clinics; tubes in hospital centres."
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-gpn": {
 "title": "Normal-tension glaucoma",
 "oneLiner": "Glaucomatous neuropathy with IOP always ≤ 21 mmHg: a diagnosis of exclusion, disc hemorrhages and early paracentral defects.",
 "definition": "Open-angle glaucoma with IOP always ≤ 21 mmHg. It is a diagnosis of exclusion.",
 "anatomy": {
  "text": "The optic nerve head is supplied by the short posterior ciliary arteries; its blood flow depends on perfusion pressure (blood pressure minus IOP) and on vascular autoregulation. The axons pass through the lamina cribrosa, a collagen sieve that is more fragile in some individuals, in whom they are damaged even at a normal IOP."
 },
 "causal": {
  "title": "A fragile nerve at normal pressure",
  "steps": [
   {
    "label": "Vulnerable nerve",
    "detail": "Fragile lamina cribrosa, impaired vascular autoregulation and, according to one hypothesis, low cerebrospinal fluid pressure behind the lamina: the nerve does not tolerate an IOP that is nonetheless normal.",
    "kind": "cause"
   },
   {
    "label": "Insufficient perfusion",
    "detail": "Nocturnal hypotension, sleep apnea or vasospasm (migraine, Raynaud) reduce blood supply to the nerve, especially at night.",
    "kind": "mecanisme"
   },
   {
    "label": "Stress on the lamina cribrosa",
    "detail": "Even an IOP of 15 mmHg deforms a weak lamina: axonal transport is blocked.",
    "kind": "mecanisme"
   },
   {
    "label": "Hemorrhages, focal notches",
    "detail": "Disc hemorrhages are common; fiber loss is often focal, at the inferotemporal pole of the disc, which serves the macula.",
    "kind": "lesion"
   },
   {
    "label": "Early paracentral defects",
    "detail": "Scotomas a few degrees from fixation: reading is threatened earlier than in classic glaucoma.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 2,
    "label": "Lower IOP by 30%",
    "detail": "Even from a normal value, a 30% reduction slows progression (CNTGS: ≈ 12% vs 35%)."
   },
   {
    "at": 1,
    "label": "Correct perfusion",
    "detail": "Review bedtime antihypertensives with the family physician, screen for sleep apnea; limited evidence of efficacy."
   }
  ]
 },
 "risk": [
  "Female, older age, Japanese or East Asian ancestry",
  "Migraine, Raynaud phenomenon (vasospasm)",
  "Low blood pressure, especially at night",
  "Obstructive sleep apnea",
  "Family history, myopia",
  "Thin cornea: true IOP underestimated"
 ],
 "presentation": [
  "Asymptomatic; suspicious cupping found with a normal IOP",
  "Disc hemorrhages more common than in high-pressure glaucoma",
  "Paracentral field defects, close to fixation, often early",
  "Focal notch, peripapillary atrophy (depigmented zone around the disc)"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Disc hemorrhage (Drance)",
    "why": "Classic in NTG; signals active progression."
   },
   {
    "sign": "Focal notch of the neuroretinal rim",
    "why": "Concordant with a paracentral defect in the opposite hemifield (inferior notch → superior defect)."
   },
   {
    "sign": "Pallor proportional to the cup",
    "why": "Pallor > cupping, VA or color vision ↓: think compression or ischemia, not NTG."
   },
   {
    "sign": "Open angle",
    "why": "Rules out intermittent closure whose IOP spikes escape measurement."
   }
  ],
  "tests": [
   {
    "test": "IOP curve (several hours) and pachymetry (corneal thickness)",
    "when": "Before concluding the IOP is normal",
    "read": "Uncovers a missed elevated IOP; thin cornea = IOP underestimated."
   },
   {
    "test": "Gonioscopy (mirrored lens that shows the angle)",
    "when": "Routine",
    "read": "Iris–trabecular contact or adhesions = intermittent closure, not NTG."
   },
   {
    "test": "24-2 and 10-2 fields",
    "when": "At baseline and follow-up",
    "read": "The 10-2 (central 10°) reveals paracentral defects that the 24-2 grid, with its 6° spacing, can miss."
   },
   {
    "test": "Brain and orbit MRI; ESR and CRP",
    "when": "Atypical sign; ESR/CRP if ≥ 50 years with headache or jaw claudication",
    "read": "Looks for compression (meningioma, pituitary adenoma) or giant cell arteritis."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Open-angle glaucoma with missed IOP",
   "clue": "Nocturnal spikes or thin cornea; the IOP curve settles it."
  },
  {
   "dx": "Intermittent angle closure",
   "clue": "Narrow angle, iris–trabecular adhesions on gonioscopy."
  },
  {
   "dx": "\"Burnt-out\" pigmentary glaucoma",
   "clue": "Dense trabecular pigment, Krukenberg spindle (vertical pigment on the cornea); IOP formerly elevated."
  },
  {
   "dx": "Compressive optic neuropathy",
   "clue": "Pallor > cupping, defect respecting the vertical meridian."
  },
  {
   "dx": "Old optic nerve ischemia (arteritis, hemorrhagic shock)",
   "clue": "Past acute event; stable damage, sectoral pallor."
  }
 ],
 "redFlags": [
  "Age < 50, pallor > cupping, VA or color vision ↓: MRI",
  "Defect respecting the vertical meridian (chiasm)",
  "≥ 50 years with headache or jaw claudication: ESR, CRP (arteritis)"
 ],
 "cat": {
  "algo": [
   {
    "q": "IOP truly ≤ 21 (curve, cornea)?",
    "yes": "",
    "no": "Classic open-angle glaucoma (POAG fiche).",
    "yesGo": 1
   },
   {
    "q": "Open angle, no secondary cause?",
    "yes": "",
    "no": "Closure or secondary glaucoma: other fiche.",
    "yesGo": 2
   },
   {
    "q": "Atypical sign (< 50, pallor, VA ↓, vertical defect)?",
    "yes": "MRI ± ESR, CRP; if normal, NTG.",
    "no": "Probable NTG.",
    "yesGo": 3,
    "noGo": 3
   },
   {
    "q": "Threatened fixation or documented progression?",
    "yes": "Treat: target ≈ 30% below baseline.",
    "no": "Observe: ≈ 3 fields a year to measure the rate."
   }
  ],
  "phases": [
   {
    "phase": "observation",
    "items": [
     "Rule out the mimics: IOP curve, gonioscopy, pachymetry, MRI if atypical",
     "Measure the rate: many untreated NTG patients do not progress (CNTGS)"
    ]
   },
   {
    "phase": "medical",
    "items": [
     "Prostaglandin analogue (PGA) at bedtime; brimonidine as an option (LoGTS)",
     "Nocturnal hypotension and apnea: review with the family physician (24-h blood pressure monitoring if progressing)"
    ]
   },
   {
    "phase": "laser",
    "items": [
     "SLT (gentle laser on the trabecular meshwork): smaller absolute reduction when baseline IOP is low"
    ]
   },
   {
    "phase": "chirurgie",
    "items": [
     "Progression despite everything: trabeculectomy with mitomycin C (antifibrotic), the most likely to achieve a very low IOP"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "24-2 and 10-2, RNFL and macular OCT; record every disc hemorrhage"
    ]
   }
  ],
  "local": "In Québec, an optometrist may start treatment for early glaucoma but must refer to an ophthalmologist (O-7, r. 11.1); NTG warrants a medical assessment to rule out mimics. Prioritize MRI for atypical cases, given access delays."
 },
 "treatments": [
  {
   "name": "Prostaglandin analogue (PGA)",
   "how": "Bedtime drop that relaxes the ciliary muscle matrix: ↑ uveoscleral outflow, even when IOP is already normal.",
   "why": "First-line once the decision to treat is made.",
   "pros": "1 drop a day; effective at night.",
   "cons": "Hard to reach −30% if baseline IOP is low.",
   "cx": "Hyperemia, long lashes, iris darkening, orbital fat atrophy.",
   "dose": "Latanoprost 0.005%: 1 drop at bedtime.",
   "refer": "Threatened fixation or documented progression.",
   "pitfall": "IOP already low: −30% is hard; check adherence before escalating."
  },
  {
   "name": "Brimonidine",
   "how": "Drop 2–3 times daily (alpha-2 agonist): ↓ aqueous production and ↑ uveoscleral outflow; neuroprotection suggested in the laboratory.",
   "why": "Option in NTG: less field progression than with timolol in LoGTS, at comparable IOP.",
   "pros": "The only drop trial suggesting an effect beyond IOP.",
   "cons": "Many dropouts due to allergy: result debated.",
   "cx": "Follicular conjunctivitis, dry mouth, drowsiness; contraindicated under age 2.",
   "dose": "Brimonidine 0.2% BID (LoGTS dose).",
   "refer": "Option if a PGA is insufficient or poorly tolerated.",
   "pitfall": "Follicular allergy is common; contraindicated under age 2."
  },
  {
   "name": "Systemic factors",
   "how": "Not an ocular treatment: ask the family physician to review bedtime antihypertensives; screen for and treat sleep apnea.",
   "why": "Progressing NTG with nocturnal hypotension or apnea.",
   "pros": "No risk to the eye.",
   "cons": "Limited evidence.",
   "cx": "Cardiovascular risk if a treatment is changed without the physician.",
   "dose": "Review bedtime antihypertensives with the family physician; screen for sleep apnea.",
   "refer": "NTG progressing with nocturnal hypotension or apnea.",
   "pitfall": "Never change an antihypertensive without the family physician."
  },
  {
   "name": "SLT or trabeculectomy",
   "how": "SLT: in-office laser on the trabecular meshwork. Trabeculectomy: in the OR, fistula under a scleral flap into a bleb under the conjunctiva.",
   "why": "Progression despite drops.",
   "pros": "Trabeculectomy: lowest IOP.",
   "cons": "SLT modest if IOP is low; surgery carries risk.",
   "cx": "Hypotony, leak, bleb infection, cataract.",
   "dose": "SLT in clinic; trabeculectomy with MMC in the OR.",
   "refer": "Progression despite drops: glaucoma specialist.",
   "pitfall": "SLT does little when baseline IOP is low."
  }
 ],
 "pearls": [
  {
   "q": "What do you rule out before calling it NTG?",
   "a": "A missed elevated IOP (curve, thin cornea), intermittent closure (gonioscopy), a secondary cause, then a nonglaucomatous neuropathy (MRI if atypical, ESR/CRP if arteritis is possible)."
  },
  {
   "q": "What did the CNTGS show?",
   "a": "A 30% reduction slows progression (≈ 12% vs 35%, per protocol), but many untreated patients do not progress: a stable NTG far from fixation can be observed."
  },
  {
   "q": "Why a 10-2 field?",
   "a": "NTG affects the paracentral region early; the 24-2 grid can miss these small defects close to fixation."
  }
 ],
 "mnemonic": {
  "title": "Before calling it NTG: \"PACI\"",
  "text": "Rule out missed **P**ressure (IOP), **A**ngle closing intermittently, **C**ompression (MRI), old **I**schemia (arteritis, shock)."
 },
 "compare": {
  "title": "Normal field vs NTG",
  "normal": {
   "caption": "Normal 24-2 field: no depressed area on pattern deviation (PD)."
  },
  "patho": {
   "caption": "Superior paracentral scotoma, close to fixation.",
   "reveal": [
    "Points depressed a few degrees above fixation",
    "Respects the horizontal meridian",
    "Expected damage: inferior disc and RNFL",
    "Define it further with a 10-2"
   ]
  }
 },
 "sources": [
  "CNTGS (Collaborative Normal-Tension Glaucoma Study Group, Am J Ophthalmol 1998)",
  "LoGTS (Krupin T et al., Am J Ophthalmol 2011)",
  "AAO PPP Primary Open-Angle Glaucoma (Gedde SJ et al., Ophthalmology, online Feb 9, 2026)",
  "COS 2009: Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)"
 ],
 "treatment": {
  "first": [
   "**You**: look for nocturnal hypotension and sleep apnea; discuss with the family physician.",
   "**Ophthalmologist**: exclude mimics (MRI if atypical), then latanoprost 0.005% at bedtime, target −30%."
  ],
  "refer": "Refer to ophthalmology: within a few weeks — cupping with normal IOP; same day if age ≥ 50 with headache or jaw claudication.",
  "pitfall": [
   "**Bedtime antihypertensive**: do not change it without the family physician.",
   "**NTG label** on a pale disc: compression missed without MRI."
  ]
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-secondaires": {
 "title": "Steroid-induced and uveitic glaucoma",
 "oneLiner": "IOP rising on steroids or during uveitis: identify the mechanism, adjust the steroid, treat the inflammation, avoid pilocarpine.",
 "definition": "IOP rises on a corticosteroid (responder). Or from the inflammation of uveitis.",
 "anatomy": {
  "text": "Trabecular meshwork cells (the angle's filter) clean and renew their matrix to let aqueous through; steroids alter this function. The ciliary body produces aqueous: severe inflammation shuts it down (production ↓), hence an IOP that is sometimes low in active uveitis. The inflamed iris can stick to the lens (posterior synechiae) or to the angle."
 },
 "causal": {
  "title": "Steroids, inflammation and the angle's filter",
  "steps": [
   {
    "label": "Steroid or uveitis",
    "detail": "Steroid in a responder, or intraocular inflammation (herpes, cytomegalovirus or CMV, juvenile arthritis, sarcoidosis…).",
    "kind": "cause"
   },
   {
    "label": "Filter altered or inflamed",
    "detail": "Steroids cause matrix to accumulate in the trabecular meshwork; uveitis clogs it (cells, proteins) or inflames it directly (trabeculitis).",
    "kind": "mecanisme"
   },
   {
    "label": "Synechiae",
    "detail": "The iris sticks to the angle (anterior synechiae) or to the lens (posterior synechiae); stuck to the lens over 360°, it bows forward and closes the angle (iris bombé).",
    "kind": "lesion"
   },
   {
    "label": "Ciliary body waking up",
    "detail": "As the inflammation settles, aqueous production resumes while the filter remains damaged: IOP rises.",
    "kind": "mecanisme"
   },
   {
    "label": "Elevated IOP",
    "detail": "Often a few weeks after starting a steroid, sooner with a potent or injected agent.",
    "kind": "signe"
   },
   {
    "label": "Glaucomatous neuropathy",
    "detail": "Cupping and field defects if the elevation persists.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 0,
    "label": "Adjust the steroid",
    "detail": "Taper, switch to a less IOP-raising steroid (loteprednol, fluorometholone) or an immunosuppressant; remove a depot if possible."
   },
   {
    "at": 1,
    "label": "Treat the inflammation and its cause",
    "detail": "Adequate steroid with IOP monitoring, antiviral if herpes or CMV: the filter clears."
   },
   {
    "at": 2,
    "label": "Iridotomy or iridectomy",
    "detail": "Laser hole or surgical opening in the iris: aqueous passes behind the bombé iris and the angle opens."
   },
   {
    "at": 4,
    "label": "Drops, SLT, tube",
    "detail": "Drops that ↓ production; SLT (gentle laser on the trabecular meshwork) effective for steroid-induced glaucoma; tube if uveitic and refractory."
   }
  ]
 },
 "risk": [
  "POAG or family history of glaucoma; previous steroid response",
  "Children (more frequent and stronger response), high myopia, type 1 diabetes",
  "Potent, injected or implanted steroid (triamcinolone, fluocinolone especially)",
  "Recurrent anterior uveitis: herpes simplex or zoster (HSV, VZV), CMV, Posner-Schlossman, Fuchs uveitis",
  "Chronic uveitis with synechiae: juvenile idiopathic arthritis, sarcoidosis"
 ],
 "presentation": [
  "Steroid-induced: asymptomatic; elevated IOP at follow-up of a patient on drops (surgery, graft, allergy, uveitis)",
  "Hypertensive uveitis: red eye, photophobia, pain, blur, elevated IOP",
  "Posner-Schlossman: unilateral attacks of very high IOP, little inflammation, halos"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Keratic precipitates (KP: clumps of inflammatory cells on the endothelium)",
    "why": "Prove uveitis; their appearance is a clue: diffuse stellate (Fuchs), coin-shaped (CMV), mutton-fat (granulomatous)."
   },
   {
    "sign": "Sectoral iris atrophy or heterochromia",
    "why": "Atrophy: herpes (VZV, HSV); paler iris: Fuchs uveitis."
   },
   {
    "sign": "Posterior synechiae, iris bombé (flat peripheral chamber)",
    "why": "A closure mechanism that requires an urgent iridotomy."
   }
  ],
  "tests": [
   {
    "test": "Tonometry on steroids",
    "when": "A few weeks after starting, then at every visit",
    "read": "Rise with a quiet eye and open angle = steroid response likely; ≈ 1/3 of the population responds moderately and ≈ 5% strongly (Armaly, Becker), more so in POAG."
   },
   {
    "test": "Gonioscopy (mirrored lens that shows the angle)",
    "when": "Any hypertensive uveitis",
    "read": "Debris, peripheral anterior synechiae (PAS) or neovessels."
   },
   {
    "test": "Anterior chamber tap (PCR for HSV, VZV, CMV)",
    "when": "Recurrent unilateral hypertensive uveitis",
    "read": "Virus identified = targeted antiviral."
   },
   {
    "test": "Uveitis workup, OCT and field",
    "when": "Recurrent, granulomatous or bilateral uveitis",
    "read": "Systemic cause (sarcoidosis, tuberculosis before immunosuppression); neuropathy."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Unmasked primary glaucoma",
   "clue": "IOP remains elevated for weeks after stopping the steroid."
  },
  {
   "dx": "Early postoperative rise",
   "clue": "First days after surgery (retained viscoelastic): too early for a steroid response."
  },
  {
   "dx": "Acute primary angle-closure crisis",
   "clue": "Mid-dilated pupil, narrow fellow angle, no precipitates."
  },
  {
   "dx": "Neovascular glaucoma",
   "clue": "Iris or angle neovessels, ischemic retinal cause."
  }
 ],
 "redFlags": [
  "Child on steroids: strong, rapid response, measure IOP",
  "Iris bombé: urgent iridotomy or iridectomy",
  "Recurrent unilateral hypertensive uveitis: think herpes or CMV, don't just increase the steroid"
 ],
 "cat": {
  "algo": [
   {
    "q": "High IOP on steroid, quiet eye, open angle?",
    "yes": "Steroid response: reduce or switch the steroid.",
    "no": "Look for inflammation, synechiae, neovessels.",
    "yesGo": 1,
    "noGo": 2
   },
   {
    "q": "Steroid depot or implant to blame?",
    "yes": "Remove the depot if possible; otherwise filtering surgery.",
    "no": "IOP drops; SLT if uncontrolled."
   },
   {
    "q": "Active uveitis (cells, KP)?",
    "yes": "Control inflammation (antiviral if HSV, CMV) + aqueous suppressants.",
    "no": "Post-uveitic: drops, then laser or surgery.",
    "yesGo": 3,
    "noGo": 3
   },
   {
    "q": "Iris bombé?",
    "yes": {
     "t": "Emergency: multiple iridotomies or surgical iridectomy.",
     "urgent": true
    },
    "no": "Gonioscopy: extent of synechiae.",
    "noGo": 4
   },
   {
    "q": "IOP uncontrolled on drops?",
    "yes": "Tube under anti-inflammatory cover.",
    "no": "Close IOP follow-up."
   }
  ],
  "phases": [
   {
    "phase": "medical",
    "items": [
     "Adjust the steroid (see treatments); immunosuppressant with the uveitis specialist",
     "Drops that ↓ production ± acetazolamide; prostaglandin analogue with caution in active uveitis; never pilocarpine"
    ]
   },
   {
    "phase": "laser",
    "items": [
     "SLT for steroid-induced glaucoma; avoid if inflammation is active",
     "Iridotomy for iris bombé (may close)"
    ]
   },
   {
    "phase": "chirurgie",
    "items": [
     "Removal of a sub-Tenon triamcinolone depot; if refractory, tube (often Ahmed) or trabeculectomy with mitomycin C"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "IOP at every visit on steroids; anticipate a rise as the uveitis settles"
    ]
   }
  ],
  "local": "In Québec, an equipped optometrist may treat steroid-induced glaucoma, but must then refer to an ophthalmologist for medical follow-up (O-7, r. 11.1). Complex uveitis: shared follow-up with uveitis and rheumatology clinics."
 },
 "treatments": [
  {
   "name": "Modify or stop the steroid",
   "how": "Taper, space out or switch to a less IOP-raising steroid (loteprednol, fluorometholone) or to a nonsteroidal anti-inflammatory; the trabecular meshwork recovers within a few weeks if intact.",
   "why": "Steroid response.",
   "pros": "Treats the cause.",
   "cons": "Impossible if the steroid is essential or if it is an implant.",
   "cx": "Inflammatory rebound, graft rejection.",
   "dose": "Switch to loteprednol 0.5% or fluorometholone 0.1%, or taper; NSAID if possible.",
   "refer": "Steroid response; recovery in weeks if the meshwork is intact.",
   "pitfall": "Do not stop an essential steroid abruptly (uveitis, graft): rebound.",
   "qc": "Quebec: an equipped optometrist may treat steroid-induced glaucoma, then must refer (O-7)."
  },
  {
   "name": "Drops that ↓ aqueous production",
   "how": "Timolol, dorzolamide, brimonidine; oral acetazolamide as needed.",
   "why": "First line in both glaucomas.",
   "pros": "Do not worsen inflammation.",
   "cons": "Prostaglandin analogue with caution (inflammation, herpes).",
   "cx": "Timolol: bronchospasm; brimonidine: allergy.",
   "dose": "Timolol 0.5% BID, dorzolamide 2% TID; acetazolamide 250 mg PO QID if needed.",
   "refer": "First line in both glaucomas.",
   "pitfall": "PGA with caution in active uveitis or herpes."
  },
  {
   "name": "SLT (selective laser trabeculoplasty)",
   "how": "Gentle in-office laser on the trabecular meshwork, which remodels and lets aqueous out more easily.",
   "why": "Uncontrolled steroid-induced glaucoma.",
   "pros": "Works well in steroid-induced glaucoma.",
   "cons": "Avoid in active uveitis.",
   "cx": "Inflammation, IOP spike.",
   "dose": "360° SLT in clinic.",
   "refer": "Uncontrolled steroid-induced glaucoma.",
   "pitfall": "Avoid in active uveitis."
  },
  {
   "name": "Iridotomy or iridectomy",
   "how": "YAG laser that makes a small hole in the iris, or surgical excision of a piece of iris: aqueous bypasses the blocked pupil.",
   "why": "Iris bombé.",
   "pros": "Restores outflow immediately.",
   "cons": "The iridotomy often closes in an inflamed eye.",
   "cx": "Bleeding, inflammation.",
   "dose": "YAG laser (often several openings) or surgical iridectomy.",
   "refer": "Iris bombé: same-day emergency.",
   "pitfall": "Often closes in an inflamed eye: check patency."
  },
  {
   "name": "Surgery (depot removal, tube, trabeculectomy)",
   "how": "In the OR: excise a steroid depot; tube connected to a plate under the conjunctiva; or trabeculectomy with mitomycin C.",
   "why": "Uncontrolled IOP.",
   "pros": "The tube holds up better against inflammation.",
   "cons": "Trabeculectomy: failure more frequent.",
   "cx": "Hypotony, tube exposure, endothelial cell loss.",
   "dose": "Depot removal, tube (Ahmed, Baerveldt) or trabeculectomy with MMC.",
   "refer": "IOP uncontrolled despite drops and laser.",
   "pitfall": "Operate on a quiet eye, under anti-inflammatory cover."
  }
 ],
 "pearls": [
  {
   "q": "Why does IOP rise as the uveitis settles?",
   "a": "The inflammation had shut down the ciliary body (production ↓). As it heals, it produces again while the filter remains damaged: IOP rises. Don't jump too quickly to a steroid response."
  },
  {
   "q": "Which steroids raise IOP the most?",
   "a": "Difluprednate, dexamethasone and prednisolone acetate more; loteprednol and fluorometholone less. Intravitreal injections and implants (triamcinolone, fluocinolone) carry the most lasting risk."
  },
  {
   "q": "Recurrent unilateral hypertensive uveitis with few cells?",
   "a": "Think viral trabeculitis (HSV, VZV, CMV) or Posner-Schlossman, often linked to CMV: aqueous humor PCR, targeted antiviral, steroid and drops that ↓ production, no pilocarpine."
  }
 ],
 "mnemonic": {
  "title": "Uveitic mechanisms: \"TIPS\"",
  "text": "**T**rabeculitis (inflamed filter), **I**ris bombé (posterior synechiae), **P**AS (anterior synechiae), **S**teroids (steroid response). Plus: ciliary body recovery as the uveitis settles."
 },
 "compare": {
  "title": "Normal cornea vs keratic precipitates",
  "normal": {
   "caption": "Clear endothelium, quiet chamber."
  },
  "patho": {
   "caption": "Precipitates on the endothelium: anterior uveitis.",
   "reveal": [
    "Whitish clumps on the endothelium, often in an inferior triangle (Arlt)",
    "Diffuse stellate: Fuchs; coin-shaped: CMV; mutton-fat: granulomatous",
    "Look for cells and flare",
    "Elevated IOP = hypertensive uveitis"
   ]
  }
 },
 "sources": [
  "Jones R, Rhee DJ. Corticosteroid-induced ocular hypertension and glaucoma (Curr Opin Ophthalmol 2006)",
  "Armaly MF (Arch Ophthalmol 1963) and Becker B (Invest Ophthalmol 1965): steroid response",
  "Siddique SS et al. Glaucoma and uveitis (Surv Ophthalmol 2013)",
  "Regulation respecting the medications an optometrist may administer or prescribe (O-7, r. 11.1, Québec 2018)"
 ],
 "treatment": {
  "first": [
   "**You**: ask about every steroid (drops, inhaled, cream, injection); IOP if used long term.",
   "**Ophthalmologist**: loteprednol or taper; timolol 0.5% BID, dorzolamide 2%; SLT, surgery."
  ],
  "refer": "Refer to ophthalmology: this week — high IOP on a steroid; immediately if a painful red eye.",
  "pitfall": [
   "**Prolonged topical steroid** without IOP checks: silent steroid glaucoma.",
   "**Pilocarpine**: never in uveitis."
  ],
  "qc": "Quebec: an equipped optometrist may treat steroid-induced glaucoma, then must refer (O-7)."
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-cristallin": {
 "title": "Lens-related, IOL-related and traumatic glaucomas",
 "oneLiner": "Elevated IOP with advanced cataract, an IOL or trauma: find the mechanism (closed or open angle), lower the IOP, treat the cause.",
 "definition": "The lens, an IOL or trauma raises IOP. Lower IOP, then treat the cause.",
 "anatomy": {
  "text": "The lens is suspended behind the iris by the zonules, fibers attached to the ciliary body; it thickens throughout life and pushes the iris forward. Its capsule holds in proteins which, once released, clog the trabecular meshwork or trigger inflammation. The ciliary body is vulnerable to trauma: a tear between its longitudinal and circular fibers produces angle recession."
 },
 "causal": {
  "title": "Lens, IOL, trauma: IOP rises",
  "steps": [
   {
    "label": "Lens, IOL or trauma",
    "detail": "Intumescent or hypermature cataract, weak zonules (PXF, Marfan, trauma), malpositioned IOL, blood or gas.",
    "kind": "cause"
   },
   {
    "label": "Angle pushed shut",
    "detail": "Swollen or displaced lens, or expanding gas: the iris is pushed forward or the pupil is blocked.",
    "kind": "mecanisme"
   },
   {
    "label": "Angle open, clogged",
    "detail": "Proteins and macrophages, lens fragments, red blood cells, pigment from a chafing IOL obstruct the trabecular meshwork.",
    "kind": "mecanisme"
   },
   {
    "label": "Scarred angle",
    "detail": "After blunt trauma, the injured trabecular meshwork scars: glaucoma years later.",
    "kind": "lesion"
   },
   {
    "label": "Elevated IOP",
    "detail": "Often unilateral; abrupt (closure, hyphema) or insidious (recession, aphakia).",
    "kind": "signe"
   },
   {
    "label": "Nerve, cornea damaged",
    "detail": "Optic neuropathy, corneal blood staining, endothelial cell loss; nerve more vulnerable in sickle cell disease.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 1,
    "label": "Relieve the block",
    "detail": "LPI if pupillary block, cycloplegic to move an anteriorly displaced lens back, partial gas removal."
   },
   {
    "at": 0,
    "label": "Remove the cause",
    "detail": "Lens extraction, washout of fragments or blood, IOL repositioning or exchange."
   },
   {
    "at": 2,
    "label": "IOP drops, steroid",
    "detail": "Aqueous suppressants, topical steroid; sickle cell disease: avoid CAIs (especially oral) and hyperosmotics."
   },
   {
    "at": 3,
    "label": "Lifelong follow-up",
    "detail": "Gonioscopy after any blunt trauma; lifelong IOP checks if recession or childhood aphakia."
   }
  ]
 },
 "risk": [
  "Neglected mature or hypermature cataract",
  "Weak zonules: PXF, Marfan, homocystinuria, trauma",
  "Single-piece IOL in the sulcus, anterior chamber IOL or decentered IOL",
  "Blunt trauma; sickle cell disease or trait; anticoagulants",
  "Congenital cataract surgery in childhood",
  "Intraocular gas after vitrectomy, then air travel, altitude or nitrous oxide"
 ],
 "presentation": [
  "Phacomorphic glaucoma: swollen white cataract, shallow chamber in that eye only",
  "Phacolytic glaucoma: hypermature cataract, deep chamber, floating white particles, no KP",
  "UGH syndrome: episodic blurred vision, microhyphemas, IOP spikes in a pseudophakic patient",
  "Hyphema: layered blood at the bottom of the chamber",
  "Angle recession or aphakic glaucoma: white eye, IOP rising years later",
  "Gas: pain, elevated IOP after vitrectomy, sometimes after air travel, altitude or nitrous oxide"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Chamber compared with the other eye",
    "why": "Shallow on one side only = lens-related cause; narrow in both eyes = primary angle closure."
   },
   {
    "sign": "Gonioscopy",
    "why": "Closed = push or block; open = obstruction; widened ciliary body band and torn iris processes = recession (compare with the other eye)."
   },
   {
    "sign": "Particles, cells, KP",
    "why": "Phacolytic: particles without KP; granulomatous KP after capsule rupture = phacoantigenic uveitis."
   },
   {
    "sign": "Phacodonesis, vitreous in the chamber",
    "why": "Ruptured zonules: trembling lens or IOL."
   },
   {
    "sign": "Iris transillumination",
    "why": "Defects matching the shape of the IOL = chafing (UGH)."
   },
   {
    "sign": "Hyphema grade",
    "why": "Microhyphema (suspended red cells), I < 1/3, II 1/3–1/2, III > 1/2, IV total."
   }
  ],
  "tests": [
   {
    "test": "UBM (high-frequency ultrasound) or AS-OCT",
    "when": "UGH, subluxation, secondary angle closure",
    "read": "IOL against the iris or ciliary body, displaced lens, effusion."
   },
   {
    "test": "B-scan ultrasound",
    "when": "Fundus not visible (white cataract, hyphema)",
    "read": "Retinal detachment, tumor, posteriorly dislocated lens, foreign body."
   },
   {
    "test": "Hemoglobin electrophoresis",
    "when": "Hyphema, at-risk ancestry or unknown status",
    "read": "Sickle cell trait or disease: lower threshold for intervention."
   },
   {
    "test": "Delayed gonioscopy",
    "when": "A few weeks after a hyphema",
    "read": "Recession, cyclodialysis, synechiae: baseline for follow-up."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Primary angle-closure crisis",
   "clue": "Fellow eye also narrow, lens not intumescent; LPI resolves the block."
  },
  {
   "dx": "Phacoantigenic uveitis",
   "clue": "After capsule rupture (trauma, surgery): granulomatous uveitis with KP."
  },
  {
   "dx": "Neovascular glaucoma",
   "clue": "Iris and angle neovessels, ischemic retinopathy."
  },
  {
   "dx": "Ghost cell glaucoma",
   "clue": "After vitreous hemorrhage: khaki cells in the chamber, open angle."
  },
  {
   "dx": "Aqueous misdirection",
   "clue": "After surgery: chamber shallow centrally and peripherally despite a patent LPI."
  }
 ],
 "redFlags": [
  "Lens or IOL dislocated into the anterior chamber: endothelial contact, block → prompt surgery",
  "Hyphema and sickle cell disease: IOP ≥ 24 mmHg for more than 24 h → surgical washout",
  "Pain after vitrectomy with gas: check IOP immediately"
 ],
 "cat": {
  "algo": [
   {
    "q": "Closed angle (flat chamber, gonioscopy)?",
    "yes": "LPI if block, cycloplegic if lens forward, then surgery.",
    "no": "Open angle: find what is clogging it.",
    "noGo": 1
   },
   {
    "q": "Recent trauma with blood?",
    "yes": "Hyphema protocol; screen for sickle cell.",
    "no": "",
    "noGo": 2
   },
   {
    "q": "Hypermature cataract, particles, deep chamber?",
    "yes": "Phacolytic: lower IOP, steroid, prompt extraction.",
    "no": "",
    "noGo": 3
   },
   {
    "q": "Pseudophakic, microhyphemas, transillumination?",
    "yes": "UGH: UBM, reposition or exchange the IOL.",
    "no": "",
    "noGo": 4
   },
   {
    "q": "Gas in the eye?",
    "yes": "IOP drops, positioning, ± partial gas removal.",
    "no": "Gonioscopy: recession from old trauma?"
   }
  ],
  "phases": [
   {
    "phase": "medical",
    "items": [
     "Beta-blocker, alpha-agonist; CAI except in sickle cell disease; acetazolamide 500 mg PO or IV mannitol if refractory (avoid in sickle cell disease)",
     "Prednisolone 1% and cycloplegic; no pilocarpine if lens-related cause"
    ]
   },
   {
    "phase": "laser",
    "items": [
     "LPI if pupillary block"
    ]
   },
   {
    "phase": "chirurgie",
    "items": [
     "Lens extraction as soon as possible; retina team if dislocated posteriorly",
     "Washout: fragments, persistent hyphema; UGH: IOL repositioned or exchanged"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "Hyphema: near-daily exams in the first days; recession and aphakia: lifelong IOP checks",
     "Hyphema: watch for rebleeding (especially days 2–5), early corneal blood staining or a total hyphema."
    ]
   },
   {
    "phase": "escalade",
    "items": [
     "Uncontrolled IOP or blood staining: washout; refractory glaucoma: tube (Ahmed, Baerveldt)"
    ]
   }
  ],
  "local": "In Montréal, order hemoglobin electrophoresis for any hyphema in patients of Haitian, African, Caribbean, Mediterranean, Middle Eastern or Indian origin, before choosing IOP-lowering agents."
 },
 "treatments": [
  {
   "name": "Lens extraction",
   "how": "Phacoemulsification or extracapsular extraction.",
   "why": "Phacomorphic, phacolytic, subluxated or dislocated lens.",
   "pros": "Treats the cause.",
   "cons": "Fragile capsule, weak zonules, edematous cornea.",
   "cx": "Capsule rupture, nucleus in the vitreous, endothelial cell loss.",
   "dose": "Phacoemulsification or extracapsular extraction.",
   "refer": "Phacomorphic or phacolytic: prompt surgery, after IOP lowering.",
   "pitfall": "Fragile capsule, weak zonules: experienced surgeon."
  },
  {
   "name": "IOP-lowering and anti-inflammatory agents",
   "how": "Aqueous suppressants; prednisolone 1%, cycloplegic.",
   "why": "Always first.",
   "pros": "Quick, in clinic.",
   "cons": "Buy time without treating the cause.",
   "cx": "CAIs, hyperosmotics: sickling; acetazolamide: sulfonamides, potassium, kidneys.",
   "dose": "Timolol 0.5%, brimonidine 0.2%; prednisolone acetate 1% QID, cycloplegic.",
   "refer": "Always first; same-day referral.",
   "pitfall": "Sickle cell: avoid CAIs and hyperosmotics (sickling)."
  },
  {
   "name": "IOL repositioning or exchange",
   "how": "IOL replaced in the bag, optic capture, fixation, or a model designed for the sulcus.",
   "why": "UGH, migrated IOL.",
   "pros": "The only definitive treatment of chafing.",
   "cons": "Complex surgery.",
   "cx": "Hemorrhage, retinal detachment, macular edema.",
   "dose": "IOL put back in the bag, captured, fixated or exchanged.",
   "refer": "UGH or migrated IOL: anterior segment surgeon.",
   "pitfall": "Complex surgery: risk of hemorrhage and retinal detachment."
  },
  {
   "name": "Hyphema protocol",
   "how": "Head of bed at 30–45°, shield, reduced activity, atropine, prednisolone 1%; no NSAIDs or aspirin.",
   "why": "Every traumatic hyphema.",
   "pros": "Comfort, less inflammation.",
   "cons": "Limited evidence for each measure.",
   "cx": "Rebleed, IOP, blood staining.",
   "dose": "Head of bed at 30–45°, shield, atropine 1%, prednisolone acetate 1%.",
   "refer": "Any traumatic hyphema: close follow-up in the first days.",
   "pitfall": "No NSAIDs or aspirin; sickle cell: IOP ≥ 24 mmHg for over 24 h = washout.",
   "qc": "Montreal: hemoglobin electrophoresis if Haitian, African, Caribbean, Mediterranean, Middle Eastern or Indian origin."
  },
  {
   "name": "Glaucoma drainage tube",
   "how": "Ahmed or Baerveldt.",
   "why": "Refractory recession or aphakic glaucoma.",
   "pros": "Durable control.",
   "cons": "In recession, SLT is of little benefit and miotics can act paradoxically.",
   "cx": "Hypotony, tube erosion, corneal decompensation.",
   "dose": "Ahmed or Baerveldt, in the OR.",
   "refer": "Angle recession or refractory aphakic glaucoma.",
   "pitfall": "Recession: SLT works poorly, miotics sometimes paradoxical."
  }
 ],
 "pearls": [
  {
   "q": "How do you tell phacomorphic glaucoma from primary angle closure?",
   "a": "Phacomorphic: shallow chamber on one side only, swollen cataract, deeper fellow eye. LPI does not fix the cause: remove the lens once IOP has come down."
  },
  {
   "q": "Why avoid acetazolamide with hyphema and sickle cell disease?",
   "a": "It acidifies the aqueous and promotes sickling: the rigid red cells clog the trabecular meshwork. Hyperosmotics are also avoided and surgery is done earlier."
  },
  {
   "q": "What do you tell a patient with gas in the eye?",
   "a": "No air travel, altitude or nitrous oxide until the gas has resorbed (several weeks; longer for C3F8 than for SF6): the bubble would expand and IOP would rise abruptly."
  }
 ],
 "mnemonic": {
  "title": "Swollen, leaking, in pieces, displaced",
  "text": "**Swollen**: phacomorphic; **leaking**: phacolytic; **in pieces**: particles; **displaced**: dislocation."
 },
 "compare": {
  "title": "Normal angle vs angle recession",
  "normal": {
   "caption": "Open angle: ciliary body band of usual width, iris processes intact."
  },
  "patho": {
   "caption": "Recession after blunt trauma.",
   "reveal": [
    "Abnormally wide ciliary body band",
    "Torn iris processes",
    "Recessed iris root",
    "Compare with the other eye: asymmetry gives away the recession"
   ]
  }
 },
 "sources": [
  "AAO PPP Primary Angle Closure Disease (Gedde SJ, Chopra V, Vinod K et al., Ophthalmology, online Feb 9, 2026)",
  "COS 2009: Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)",
  "AAO Basic and Clinical Science Course, Section 10: Glaucoma",
  "EyeRounds (University of Iowa): Uveitis-glaucoma-hyphema syndrome and Aphakic glaucoma cases"
 ],
 "treatment": {
  "first": [
   "**You**: hyphema: head of bed at 30–45°, shield, no NSAIDs or aspirin.",
   "**Ophthalmologist**: lower IOP, prednisolone acetate 1%, cycloplegic; remove or reposition the cause."
  ],
  "refer": "Refer to ophthalmology: same day — trauma with blood, white cataract with a painful eye, or a dislocated lens; immediately if pain after vitrectomy with gas.",
  "pitfall": [
   "**Acetazolamide** in sickle cell: sickling in the hyphema.",
   "**Pilocarpine**: never for a lens cause."
  ],
  "qc": "Montreal: hemoglobin electrophoresis if Haitian, African, Caribbean, Mediterranean, Middle Eastern or Indian origin."
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-dev": {
 "title": "Childhood glaucomas, developmental anomalies and ICE syndrome",
 "oneLiner": "Infant with tearing, light avoidance and squeezed lids, large or hazy cornea: congenital glaucoma until proven otherwise.",
 "definition": "An angle malformed from birth, or an ICE membrane in adults. Before age 3, IOP stretches the whole eye.",
 "anatomy": {
  "text": "The angle forms during fetal life from the neural crest, which gives rise to the trabecular meshwork (spongy filter), Schwalbe's line (the edge of Descemet's membrane) and the iris stroma. Arrested development leaves an immature trabecular meshwork or iris strands stretched up to Schwalbe's line."
 },
 "causal": {
  "title": "From the abnormal angle to the damaged eye",
  "steps": [
   {
    "label": "Malformed or covered angle",
    "detail": "Trabeculodysgenesis (primary congenital glaucoma), Axenfeld-Rieger strands, ICE membrane or high episcleral venous pressure (Sturge-Weber).",
    "kind": "cause"
   },
   {
    "label": "Elevated IOP",
    "detail": "Aqueous humor drains poorly: pressure rises.",
    "kind": "mecanisme"
   },
   {
    "label": "Elastic globe stretched",
    "detail": "Before about age 3: enlarged eye (buphthalmos), large cornea, axial myopia.",
    "kind": "lesion"
   },
   {
    "label": "Ruptured Descemet's, edematous cornea",
    "detail": "Water enters through the breaks (Haab striae): hazy cornea, tearing, photophobia.",
    "kind": "signe"
   },
   {
    "label": "Amblyopia, optic neuropathy",
    "detail": "A hazy cornea and myopia prevent the brain from learning to see; the disc cups.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 0,
    "label": "Angle surgery",
    "detail": "Goniotomy or trabeculotomy: opens the immature filter; mainstay of treatment for primary congenital glaucoma."
   },
   {
    "at": 1,
    "label": "Drops as a bridge",
    "detail": "Lower IOP and clear the cornea while awaiting surgery; rarely sufficient alone."
   },
   {
    "at": 4,
    "label": "Glasses and patching",
    "detail": "Correct the refractive error and treat amblyopia (patch the good eye): as important as IOP for the final vision."
   }
  ]
 },
 "risk": [
  "Family history, consanguinity (primary form often recessive; CYP1B1 gene)",
  "Parent with Axenfeld-Rieger or aniridia (dominant inheritance)",
  "Facial port-wine stain in the V1 (ophthalmic nerve) territory, especially on the upper lid",
  "Congenital cataract surgery",
  "ICE syndrome: middle-aged woman, one eye, no family history"
 ],
 "presentation": [
  "Infant triad: epiphora (tearing), photophobia, blepharospasm (squeezed lids)",
  "\"Big, beautiful\" eye, large or bluish cornea; often bilateral",
  "Juvenile open-angle glaucoma (later in childhood): silent, no enlargement of the eye",
  "Sturge-Weber: glaucoma on the side of the port-wine stain, early (abnormal angle) or late (episcleral venous pressure)",
  "ICE syndrome: blurred vision in the morning (corneal edema), distorted pupil, unilateral elevated IOP",
  "Cornea that suddenly turns hazy: rupture of Descemet's membrane"
 ],
 "exam": {
  "signs": [
   {
    "sign": "Increased corneal diameter",
    "why": "≈ 10 mm at birth; more than 12 mm before age 1 is highly suspicious. Compare both eyes."
   },
   {
    "sign": "Haab striae",
    "why": "Breaks in Descemet's membrane, horizontal or concentric to the limbus; forceps breaks are vertical or oblique."
   },
   {
    "sign": "Posterior embryotoxon with iris strands",
    "why": "Alone (prominent, anteriorly displaced Schwalbe's line): common and benign. With strands, corectopia, polycoria, dental or umbilical anomalies: Axenfeld-Rieger."
   },
   {
    "sign": "Hammered-silver endothelium, high synechiae",
    "why": "ICE syndrome, unilateral: synechiae often beyond Schwalbe's line, corectopia, iris holes and nodules."
   },
   {
    "sign": "Iris processes or synechiae?",
    "why": "Iris processes: fine, lacy, angle visible (normal variant). Synechiae: broad, tented, hide the trabecular meshwork."
   },
   {
    "sign": "Dilated episcleral vessels, \"tomato ketchup\" fundus",
    "why": "Sturge-Weber: elevated episcleral venous pressure and choroidal hemangioma (risk of effusion during surgery)."
   }
  ],
  "tests": [
   {
    "test": "Examination under anesthesia (EUA)",
    "when": "Every suspected infant, without delay",
    "read": "IOP (altered by anesthetics), corneal diameter, gonioscopy, refraction, disc; surgery often in the same session."
   },
   {
    "test": "Retinoscopy (objective refraction)",
    "when": "At diagnosis and follow-up",
    "read": "Increasing myopia: the eye is elongating, IOP poorly controlled."
   },
   {
    "test": "Gonioscopy",
    "when": "Any anterior segment anomaly",
    "read": "Congenital: high iris insertion. ICE: synechiae beyond Schwalbe's line. Aniridia: iris stump."
   },
   {
    "test": "Specular microscopy",
    "when": "Adult: unilateral edema or corectopia",
    "read": "ICE cells: large, dark, with a light central spot."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Congenital nasolacrimal duct obstruction",
   "clue": "Tearing without photophobia; clear cornea of normal size."
  },
  {
   "dx": "Megalocornea",
   "clue": "Large but clear cornea, no striae; normal IOP and disc."
  },
  {
   "dx": "Birth trauma (forceps) striae",
   "clue": "Vertical or oblique, unilateral; normal corneal diameter."
  },
  {
   "dx": "Other hazy corneas in the newborn",
   "clue": "Peters anomaly (central opacity, iridocorneal adhesions), congenital endothelial dystrophy, mucopolysaccharidoses."
  },
  {
   "dx": "Posterior polymorphous dystrophy (vs ICE)",
   "clue": "Bilateral, familial; vesicles and \"railroad track\" bands at Descemet's."
  },
  {
   "dx": "Axenfeld-Rieger (vs ICE)",
   "clue": "Bilateral, congenital, familial; embryotoxon, dental or umbilical signs."
  }
 ],
 "redFlags": [
  "Infant with tearing and photophobia, or a large or hazy cornea: urgent referral",
  "Aniridia without family history: screen for Wilms tumor (kidney)",
  "V1 port-wine stain: IOP and discs from birth, then regularly"
 ],
 "cat": {
  "algo": [
   {
    "q": "Infant or young child?",
    "yes": "",
    "no": "",
    "yesGo": 1,
    "noGo": 4
   },
   {
    "q": "Triad, large or cloudy cornea?",
    "yes": "Refer within 24 h: examination under anesthesia; bridging drops.",
    "no": "Tearing, clear cornea: probable nasolacrimal duct obstruction.",
    "yesGo": 2
   },
   {
    "q": "Cornea clear enough to see the angle?",
    "yes": "Goniotomy or trabeculotomy.",
    "no": "External trabeculotomy.",
    "yesGo": 3,
    "noGo": 3
   },
   {
    "q": "Angle surgery failed?",
    "yes": "Repeat, tube, trabeculectomy with MMC or cyclophotocoagulation.",
    "no": "Follow-up: IOP, diameter, refraction, amblyopia."
   },
   {
    "q": "Adult: edema, corectopia, one-sided synechiae?",
    "yes": "ICE: specular microscopy, drops, tube if failure; DSAEK or DMEK for edema.",
    "no": "Consider Axenfeld-Rieger, posterior polymorphous dystrophy or juvenile glaucoma."
   }
  ],
  "phases": [
   {
    "phase": "medical",
    "items": [
     "As a bridge: dorzolamide, prostaglandin analogue; timolol 0.25% only with great caution (apnoea, bradycardia in infants), on the ophthalmologist’s decision",
     "**Brimonidine contraindicated under age 2** (drowsiness, hypotonia, apnea)"
    ]
   },
   {
    "phase": "chirurgie",
    "items": [
     "Primary congenital: goniotomy or trabeculotomy first-line",
     "Failures, Axenfeld-Rieger, aniridia: tube or trabeculectomy with MMC; cyclophotocoagulation if refractory",
     "Sturge-Weber: B-scan beforehand, gradual IOP lowering in the OR",
     "ICE: trabecular laser ineffective, tube often needed; endothelial keratoplasty for the edema"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "Glasses and patching for amblyopia",
     "**Lifelong** follow-up; in infants, cupping can reverse if IOP is controlled"
    ]
   }
  ],
  "local": "In Québec: tertiary pediatric centers (e.g. CHU Sainte-Justine, Montreal Children's Hospital, CHU de Québec); if you suspect it, call the on-call attending."
 },
 "treatments": [
  {
   "name": "Goniotomy",
   "how": "Under a gonioscopy lens, a blade incises the immature trabecular meshwork over about one third of the angle.",
   "why": "Primary congenital, clear cornea.",
   "pros": "No conjunctival scarring; repeatable.",
   "cons": "The angle must be visible.",
   "cx": "Hyphema, iris or lens injury.",
   "dose": "Under a gonioscopy lens: incision of the meshwork over ≈ 1/3 of the angle.",
   "refer": "Primary congenital with a clear cornea: tertiary pediatric centre, promptly.",
   "pitfall": "The angle must be visible: impossible if the cornea is cloudy.",
   "qc": "Quebec: CHU Sainte-Justine, Montreal Children's Hospital, CHU de Québec; call the on-call attending."
  },
  {
   "name": "Trabeculotomy",
   "how": "From the outside, a probe, or a 360° suture, passed into Schlemm's canal tears its inner wall and the trabecular meshwork.",
   "why": "Primary congenital, even with a hazy cornea.",
   "pros": "Feasible despite edema; 360° in one session.",
   "cons": "Canal sometimes cannot be found.",
   "cx": "Transient hyphema, false passage.",
   "dose": "Probe or 360° suture passed into Schlemm's canal.",
   "refer": "Primary congenital, even with a cloudy cornea.",
   "pitfall": "Canal sometimes not found: false passage possible."
  },
  {
   "name": "Drops as a bridge",
   "how": "Reduce aqueous humor production or increase its outflow.",
   "why": "Before surgery or as an adjunct.",
   "pros": "Clear the cornea for the EUA.",
   "cons": "Rarely sufficient alone.",
   "cx": "Timolol: apnea, bradycardia, bronchospasm; brimonidine: central nervous system depression.",
   "dose": "Timolol 0.25% BID, dorzolamide 2% TID, as a bridge before surgery.",
   "refer": "Before surgery or as an adjunct.",
   "pitfall": "Brimonidine contraindicated under age 2 (CNS depression); timolol: apnoea and bradycardia in infants, avoid or use with great caution."
  },
  {
   "name": "Drainage tube or trabeculectomy",
   "how": "Divert aqueous under the conjunctiva (tube and plate, or scleral flap).",
   "why": "Failed angle surgery, secondary glaucomas, ICE.",
   "pros": "Large IOP reduction.",
   "cons": "Vigorous scarring in children.",
   "cx": "Hypotony, infection, tube occlusion (ICE), effusion (Sturge-Weber).",
   "dose": "Tube and plate, or trabeculectomy with MMC.",
   "refer": "Failed angle surgery, secondary glaucomas, ICE.",
   "pitfall": "Vigorous healing in children: more frequent failure."
  }
 ],
 "pearls": [
  {
   "q": "How do you tell Haab striae from birth trauma striae?",
   "a": "Haab: horizontal or concentric to the limbus, in an enlarged eye. Forceps: vertical or oblique, unilateral, normal corneal diameter."
  },
  {
   "q": "Why no brimonidine in infants?",
   "a": "It crosses the blood-brain barrier: drowsiness, hypotonia, apnea, bradycardia. Contraindicated under age 2; caution in small, low-weight children."
  },
  {
   "q": "Unilateral corneal edema and distorted pupil in a 45-year-old woman?",
   "a": "ICE syndrome first: unilateral, acquired, nonfamilial. Posterior polymorphous dystrophy and Axenfeld-Rieger: bilateral, congenital, familial. Specular microscopy settles it."
  }
 ],
 "mnemonic": {
  "title": "ICE: 3 variants",
  "text": "**I**ris nevus (Cogan-Reese: nodules); **C**handler (corneal edema); **E**ssential iris atrophy (holes, corectopia)."
 },
 "compare": {
  "title": "Normal angle vs peripheral anterior synechiae",
  "normal": {
   "caption": "Open angle: ciliary body band, spur, trabecular meshwork and Schwalbe's line visible."
  },
  "patho": {
   "caption": "Peripheral anterior synechiae: the iris adheres and hides the trabecular meshwork.",
   "reveal": [
    "Broad, tented adhesions hiding the trabecular meshwork",
    "In ICE, they often extend beyond Schwalbe's line",
    "They do not open with indentation",
    "Iris processes, by contrast, are fine and leave the angle visible"
   ]
  }
 },
 "sources": [
  "World Glaucoma Association. Childhood Glaucoma, Consensus Series 9 (Weinreb RN, Grajewski A, Papadopoulos M, Grigg J, Freedman S, eds. Kugler 2013)",
  "American Academy of Ophthalmology. Basic and Clinical Science Course, Section 10: Glaucoma",
  "Shields MB. Progressive essential iris atrophy, Chandler's syndrome, and the iris nevus (Cogan-Reese) syndrome: a spectrum of disease (Surv Ophthalmol 1979)"
 ],
 "treatment": {
  "first": [
   "**You**: infant with tearing and photophobia: compare corneal size and clarity.",
   "**Ophthalmologist**: examination under anesthesia, angle surgery; bridging drops; timolol 0.25% only with great caution (apnoea, bradycardia in infants)."
  ],
  "refer": "Refer to ophthalmology: within 24 h — infant with the triad or a large or cloudy cornea.",
  "pitfall": [
   "**Brimonidine**: contraindicated under age 2 (CNS depression).",
   "**Tearing** blamed on the tear duct without looking at the cornea."
  ],
  "qc": "Quebec: CHU Sainte-Justine, Montreal Children's Hospital, CHU de Québec; call the on-call attending."
 }
}
});

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"g-postop": {
 "title": "The postoperative patient: trabeculectomy, tubes, MIGS",
 "oneLiner": "After filtering surgery, read IOP × chamber depth, look for a leak (Seidel) and never miss a bleb infection.",
 "definition": "Surgery opens an exit for aqueous: bleb, tube or Schlemm's canal. Bleb infection is an emergency.",
 "anatomy": {
  "text": "In trabeculectomy, aqueous passes through a fistula created under a scleral flap, then collects under the conjunctiva where the vessels absorb it: this is the filtering bleb. Scarring is the main enemy; mitomycin C (MMC, an antifibrotic) slows it. MIGS stay within the natural pathway: IOP cannot go below episcleral venous pressure (≈ 8–10 mmHg)."
 },
 "causal": {
  "title": "Filtering just enough: flow, scarring, infection",
  "steps": [
   {
    "label": "New outflow route created",
    "detail": "The pathway bypasses the diseased trabecular meshwork: IOP drops as soon as aqueous flows.",
    "kind": "cause"
   },
   {
    "label": "Flow to be balanced",
    "detail": "Flap sutures, tube caliber and scarring set the flow; it is all decided in the first weeks.",
    "kind": "mecanisme"
   },
   {
    "label": "Too much flow: low IOP",
    "detail": "Overfiltration, leak or choroidal detachment (effusion): the chamber shallows.",
    "kind": "lesion"
   },
   {
    "label": "Too little flow: high IOP",
    "detail": "Tight flap, blocked fistula (clot, iris) or bleb encapsulated by fibrosis.",
    "kind": "lesion"
   },
   {
    "label": "Flat chamber with high IOP",
    "detail": "Rare and serious: aqueous diverted into the vitreous (aqueous misdirection), suprachoroidal hemorrhage or pupillary block.",
    "kind": "signe"
   },
   {
    "label": "Late complications",
    "detail": "Thin bleb that leaks or becomes infected (blebitis, endophthalmitis), hypotony maculopathy, exposed tube.",
    "kind": "complication"
   }
  ],
  "levers": [
   {
    "at": 1,
    "label": "Mitomycin C and 5-FU",
    "detail": "Antifibrotics applied in the OR (MMC) or injected under the conjunctiva afterward (5-FU, 5-fluorouracil): delay bleb fibrosis."
   },
   {
    "at": 3,
    "label": "Titrate in clinic",
    "detail": "Massage, laser suture lysis, removal of a releasable suture or the ripcord: ↑ flow; needling (needle under the conjunctiva) to free an encapsulated bleb."
   },
   {
    "at": 2,
    "label": "Slow the leak",
    "detail": "Atropine (moves the lens back, deepens the chamber), bandage contact lens or suturing the leak, viscoelastic to re-form the chamber."
   },
   {
    "at": 5,
    "label": "Urgent antibiotics",
    "detail": "Blebitis: intensive topical antibiotics; endophthalmitis: vitreous tap and intravitreal antibiotics the same day."
   }
  ]
 },
 "risk": [
  "Failure from fibrosis: young, African ancestry, previously operated conjunctiva, uveitis, neovascular glaucoma",
  "Hypotony: young myope, MMC, thin bleb",
  "Infection: thin, avascular, leaking or inferior bleb; blepharitis",
  "Suprachoroidal hemorrhage: age, anticoagulants, high myopia",
  "Aqueous misdirection: short eye, angle closure"
 ],
 "presentation": [
  "Functioning bleb: diffuse, low, moderately vascularized",
  "At-risk bleb: thin, avascular, cystic; encapsulated: firm dome, high IOP",
  "Warning signs: red eye, pain, discharge, vision ↓",
  "Exposed tube: risk of endophthalmitis, repair it"
 ],
 "exam": {
  "signs": [
   {
    "sign": "IOP and chamber depth",
    "why": "The axes of the differential (see mnemonic). Flat chamber: grade 1 peripheral iris–cornea, 2 pupillary margin–cornea, 3 lens–cornea (emergency)."
   },
   {
    "sign": "Seidel test (concentrated fluorescein on the bleb)",
    "why": "Concentrated (dark) dye diluted by leaking aqueous: bright green stream = leak; explains a low IOP, a portal of entry for infection."
   },
   {
    "sign": "Bleb appearance",
    "why": "Flat = low flow; milky white in a red eye = blebitis."
   },
   {
    "sign": "Choroidal domes on fundus exam",
    "why": "Smooth with low IOP = effusion; dark, painful with high IOP = hemorrhage."
   }
  ],
  "tests": [
   {
    "test": "Gonioscopy (mirrored lens that shows the angle)",
    "when": "High IOP, deep chamber",
    "read": "Fistula or tube blocked by iris, a clot or vitreous."
   },
   {
    "test": "B-scan ultrasound",
    "when": "Shallow chamber, poor fundus view",
    "read": "Distinguishes choroidal effusion from hemorrhage."
   },
   {
    "test": "Macular OCT",
    "when": "Vision ↓ with low IOP",
    "read": "Choroidal folds: hypotony maculopathy."
   }
  ]
 },
 "ddx": [
  {
   "dx": "Overfiltration",
   "clue": "Low IOP, shallow chamber, Seidel negative, elevated bleb."
  },
  {
   "dx": "Bleb leak",
   "clue": "Low IOP, Seidel positive, flat bleb."
  },
  {
   "dx": "Choroidal effusion",
   "clue": "Low IOP, smooth domes, little pain."
  },
  {
   "dx": "Aqueous misdirection or pupillary block",
   "clue": "High IOP, flat chamber; patent iridectomy = misdirection, blocked = pupillary block."
  },
  {
   "dx": "Suprachoroidal hemorrhage",
   "clue": "Sudden pain, high IOP, dark domes."
  },
  {
   "dx": "Tight flap or encapsulated bleb",
   "clue": "High IOP, deep chamber."
  }
 ],
 "redFlags": [
  "White bleb, red painful eye ± hypopyon: infection, immediate call",
  "Sudden pain, high IOP, flat chamber: suprachoroidal hemorrhage",
  "Lens touching the cornea: re-form the chamber urgently"
 ],
 "cat": {
  "algo": [
   {
    "q": "Signs of infection (white bleb, hypopyon, pain)?",
    "yes": {
     "t": "Ophthalmologist immediately: antibiotics; if endophthalmitis, tap and injection.",
     "urgent": true
    },
    "no": "Assess IOP and chamber.",
    "noGo": 1
   },
   {
    "q": "Low IOP?",
    "yes": "",
    "no": "",
    "yesGo": 2,
    "noGo": 3
   },
   {
    "q": "Shallow chamber (low IOP)?",
    "yes": "Seidel +: bandage lens, suture; Seidel −: atropine, observe.",
    "no": "Formed chamber: Seidel, watch the macula."
   },
   {
    "q": "High IOP and shallow chamber?",
    "yes": "Iridotomy if block; otherwise misdirection or suprachoroidal hemorrhage.",
    "no": "",
    "noGo": 4
   },
   {
    "q": "High IOP, deep chamber?",
    "yes": "Massage, suture lysis or ripcord removal; needling if encapsulated.",
    "no": "IOP at target: slow steroid taper."
   }
  ],
  "phases": [
   {
    "phase": "medical",
    "items": [
     "Antibiotic for the first weeks; intensive topical steroid, tapered slowly",
     "Atropine if the chamber is shallow"
    ]
   },
   {
    "phase": "laser",
    "items": [
     "Laser suture lysis; YAG laser if aqueous misdirection or blocked fistula"
    ]
   },
   {
    "phase": "chirurgie",
    "items": [
     "Needling, bleb revision, chamber re-formation, patch graft over an exposed tube"
    ]
   },
   {
    "phase": "suivi",
    "items": [
     "Day 1, week 1, then close follow-up in the first months; lifelong, inspect the bleb",
     "Painful red eye: be seen the same day",
     "Bleb-related endophthalmitis: tap + intravitreal vancomycin 1 mg/0.1 mL and ceftazidime 2.25 mg/0.1 mL ± vitrectomy, the same day.",
     "High IOP, shallow chamber: blocked iridectomy → iridotomy; patent → misdirection (atropine, YAG laser, vitrectomy); dark domes → suprachoroidal hemorrhage.",
     "High IOP, deep chamber: gonioscopy, massage, laser suture lysis or ripcord removal; encapsulated bleb: needling ± 5-FU; late rise on steroid: steroid response. Low IOP with a formed chamber: Seidel, watch the macula."
    ]
   },
   {
    "phase": "escalade",
    "items": [
     "Second surgery (often a tube), then cyclophotocoagulation"
    ]
   }
  ],
  "local": "In Québec, these surgeries are done mainly in hospital centers; RAMQ coverage of MIGS and implants should be checked."
 },
 "treatments": [
  {
   "name": "Trabeculectomy with mitomycin C",
   "how": "In the OR: a scleral flap is cut, a fistula is made under it into the chamber with a small iridectomy; aqueous forms a bleb under the conjunctiva. Adjustable sutures to titrate flow (massage, laser lysis).",
   "why": "Advanced glaucoma, low target IOP.",
   "pros": "Lowest IOP.",
   "cons": "Intensive follow-up; failure from fibrosis.",
   "cx": "Hypotony, leak, cataract, lifelong risk of bleb infection.",
   "dose": "In the OR, with mitomycin C; adjustable sutures in clinic (massage, laser lysis).",
   "refer": "Advanced glaucoma or low target IOP.",
   "pitfall": "Bleb infection possible for life: red, painful eye = same-day visit."
  },
  {
   "name": "PreserFlo MicroShunt and XEN",
   "how": "In the OR: soft microtube (PreserFlo ab externo with MMC; XEN ab interno or open conjunctiva) draining into a bleb; sometimes a ripcord (intraluminal suture), removed in clinic to ↑ flow.",
   "why": "Less invasive alternative to trabeculectomy.",
   "pros": "Quick recovery, less hypotony.",
   "cons": "IOP somewhat less low; needling common (XEN).",
   "cx": "Fibrosis, hypotony, exposure, bleb infection.",
   "dose": "Microtube to a bleb; ripcord sometimes removed in clinic.",
   "refer": "Less invasive alternative to trabeculectomy.",
   "pitfall": "Fibrosis: needling is common (XEN)."
  },
  {
   "name": "Tube: Ahmed or Baerveldt",
   "how": "In the OR: tube in the chamber connected to a plate on the sclera, where a capsule absorbs the aqueous. Ahmed: valved; Baerveldt: nonvalved, ligated (± ripcord) until the capsule forms.",
   "why": "Failed trabeculectomy, neovascular or uveitic glaucoma.",
   "pros": "Resists fibrosis; Baerveldt: lower IOP in the long term.",
   "cons": "Ahmed: hypertensive phase; Baerveldt: hypotony when it opens.",
   "cx": "Exposure, tube–cornea touch (endothelial cell loss), diplopia.",
   "dose": "Ahmed (valved) or Baerveldt (ligated until the capsule forms).",
   "refer": "Failed trabeculectomy, neovascular or uveitic glaucoma.",
   "pitfall": "Exposed tube or tube touching the cornea: refer promptly."
  },
  {
   "name": "MIGS: iStent, Hydrus, KDB",
   "how": "In the OR, often with cataract surgery, ab interno: micro-implant into Schlemm's canal (iStent, Hydrus) or excision of a strip of trabecular meshwork (KDB).",
   "why": "Mild to moderate glaucoma.",
   "pros": "Very safe, no bleb.",
   "cons": "Modest reduction (episcleral floor).",
   "cx": "Hyphema, IOP spike, blocked implant.",
   "dose": "iStent, Hydrus or KDB, often with cataract surgery.",
   "refer": "Mild to moderate glaucoma.",
   "pitfall": "Modest lowering: not for a very low target IOP.",
   "qc": "Quebec: mostly in hospital centres; RAMQ coverage of MIGS and implants to be checked."
  }
 ],
 "pearls": [
  {
   "q": "Day 1 post-trabeculectomy: IOP 4 mmHg, shallow chamber?",
   "a": "Seidel: positive = leak (lens, suture); negative = overfiltration or effusion (fundus exam, atropine). Re-form if the lens touches the cornea."
  },
  {
   "q": "IOP 30 mmHg, deep chamber, flat bleb at week 1?",
   "a": "Gonioscopy (blocked fistula?), then massage, laser suture lysis or removal of a releasable suture; later, needling ± 5-FU."
  },
  {
   "q": "Why ligate a Baerveldt? What is a ripcord?",
   "a": "Without a valve, it would filter with no resistance before the capsule forms: hypotony. It is ligated, sometimes with a ripcord; some surgeons also place one in a PreserFlo or an open-conjunctiva XEN, removed in clinic to titrate filtration."
  }
 ],
 "mnemonic": {
  "title": "IOP × chamber grid",
  "text": "**Low + shallow**: leak (Seidel), overfiltration, choroidal effusion. **High + shallow**: aqueous misdirection, suprachoroidal hemorrhage, pupillary block. **High + deep**: tight flap, blocked fistula, encapsulated bleb."
 },
 "compare": {
  "title": "Normal anterior segment vs filtering bleb",
  "normal": {
   "caption": "Flat superior conjunctiva, no bleb."
  },
  "patho": {
   "caption": "Superior filtering bleb after trabeculectomy.",
   "reveal": [
    "Conjunctival elevation under the upper lid",
    "Peripheral iridectomy at 12 o'clock, under the bleb",
    "Diffuse and moderately vascularized = functioning",
    "Thin, avascular, cystic = risk of leak and infection",
    "Low IOP: do a Seidel test"
   ]
  }
 },
 "sources": [
  "Tube Versus Trabeculectomy Study (Gedde SJ et al., Am J Ophthalmol 2012)",
  "Ahmed Baerveldt Comparison Study (Budenz DL et al., Ophthalmology 2011)",
  "MicroShunt vs trabeculectomy (Baker ND et al., Ophthalmology 2021)",
  "AAO PPP Primary Open-Angle Glaucoma (Gedde SJ et al., Ophthalmology, online Feb 9, 2026)"
 ],
 "treatment": {
  "first": [
   "**You**: recognize the bleb (under the upper lid); red or painful operated eye = call.",
   "**Ophthalmologist**: Seidel, IOP × chamber; intensive antibiotics, tap and injection if endophthalmitis."
  ],
  "refer": "Refer to ophthalmology: immediately — red, painful operated eye, white bleb or vision ↓.",
  "pitfall": [
   "**Treating \"conjunctivitis\"** in an operated eye: missed bleb infection."
  ],
  "qc": "Quebec: mostly in hospital centres; RAMQ coverage of MIGS and implants to be checked."
 }
}
});

// Tree vignettes (cat.vignette): one short case shown above the decision tree
(function () {
  var V = {
    "g-gpao": "A 62-year-old Black man, no symptoms. IOP 26 and 27 mmHg, cup-to-disc 0.7 with an inferior notch on the right, open angle.",
    "g-hto": "A 55-year-old woman: IOP 25 mmHg in both eyes, three times. Normal discs, OCT and fields. Thin corneas (510 µm), open angle.",
    "g-gpn": "A 68-year-old woman with migraines and cold hands. IOP 15 mmHg; haemorrhage at the right disc margin, superior paracentral defect.",
    "g-fermeture": "A 64-year-old hyperopic woman, no symptoms. Van Herick grade 1, IOP 18 mmHg; meshwork hidden for 270° on gonioscopy.",
    "g-crise": "A 70-year-old hyperopic woman in the ER: headache and vomiting after the cinema. Red right eye, hazy cornea, fixed mid-dilated pupil.",
    "g-pxf": "A 74-year-old man of Scandinavian descent: whitish ring-shaped deposits on the lens after dilation. IOP 32 mmHg right, 18 left.",
    "g-pigmentaire": "A 32-year-old myopic man: blur and halos after jogging. Krukenberg spindle, radial iris defects, heavily pigmented angle.",
    "g-neovasculaire": "A 58-year-old with poorly followed diabetes. Painful left eye, counting fingers; IOP 48 mmHg, vessels at the pupil margin.",
    "g-secondaires": "A 12-year-old boy on dexamethasone drops for 2 months for allergy. Quiet eye, open angle, IOP 34 mmHg.",
    "g-postop": "A 70-year-old man, left trabeculectomy 3 years ago. Since yesterday: red, painful eye, milky white bleb, cells in the chamber.",
    "g-papille": "A 50-year-old man, slowly falling right vision. Cup-to-disc 0.5 but a pale rim; temporal field defect stopping at the vertical meridian.",
    "g-cristallin": "An 81-year-old woman, white cataract on the right for years. Red, painful eye for 2 days, shallow chamber, IOP 45 mmHg.",
    "g-dev": "A 4-month-old infant with tearing and light avoidance. The parents find the eyes ‘big and beautiful’. Large, slightly hazy corneas."
  };
  Object.keys(V).forEach(function (id) { var f = G.OPH_EN.fiches[id] = G.OPH_EN.fiches[id] || {}; f.cat = f.cat || {}; f.cat.vignette = V[id]; });
})();
