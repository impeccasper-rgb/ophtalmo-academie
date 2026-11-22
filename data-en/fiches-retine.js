// English overlay for module D (retina): fiches, high-yield layer, photos, quiz, "also recognize" list.
// Same keys as the French sources (data/fiches-retine.js, data/hy-retine.js, data/ext-retine.js, data/quiz-d.js); arrays replace the French ones.
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH_EN = G.OPH_EN || {};

G.OPH_EN.fiches = Object.assign(G.OPH_EN.fiches || {}, {
"r-decollement": {
 title: "Rhegmatogenous retinal detachment",
 oneLiner: "Flashes, floaters, then a curtain: a tear lets fluid under the retina; dilated exam the same day.",
 definition: "A retinal tear lets liquid vitreous pass underneath and lift the retina. Without surgery, vision is lost.",
 anatomy: { text: "The neurosensory retina is held to the pigment epithelium by an active pump, with no firm attachment except at the ora serrata and the disc. The vitreous, a gel firmly anchored at its base in the periphery, liquefies with age and then separates from the posterior retina: this is posterior vitreous detachment (PVD)." },
 causal: {
  title: "From a pulling vitreous to a curtain",
  steps: [
   { label: "Posterior vitreous detachment", detail: "With age or myopia, the gel liquefies and separates: flashes (traction) and floaters.", kind: "cause" },
   { label: "Traction: horseshoe tear", detail: "Where the vitreous adheres firmly (periphery, lattice), it tears off a flap of retina.", kind: "mecanisme" },
   { label: "Fluid under the retina", detail: "Liquid vitreous passes through the tear and separates the retina from the pigment epithelium.", kind: "mecanisme" },
   { label: "Curtain in the field", detail: "The detached area stops seeing: a shadow on the opposite side (superior detachment = inferior curtain).", kind: "signe" },
   { label: "Macula off", detail: "Central vision drops; the longer the macula is off, the less it recovers.", kind: "complication" }
  ],
  levers: [
   { at: 1, label: "Laser or cryotherapy", detail: "Around a tear without detachment: a scar welds the retina down, in the clinic." },
   { at: 2, label: "Reattachment surgery", detail: "Pneumatic retinopexy (gas bubble), scleral buckle or vitrectomy: close the tear and reattach the retina." },
   { at: 4, label: "Operate before the macula goes", detail: "Macula still on: surgery as soon as possible, to keep central vision." }
  ]
 },
 risk: [
  "Age 50–75 (the age of PVD); high myopia",
  "Cataract surgery, YAG laser capsulotomy",
  "Eye trauma",
  "Lattice degeneration; detachment in the other eye",
  "Family history, Stickler syndrome"
 ],
 presentation: [
  "Flashes of light (photopsia), mostly in dim light",
  "A shower of floaters: dots, cobweb, soot",
  "A curtain or shadow spreading across the visual field",
  "Blurred vision if the macula detaches; no pain, white eye"
 ],
 exam: {
  signs: [
   { sign: "Sector field loss on finger confrontation", why: "The curtain confirmed at the bedside; a superior detachment threatens the macula quickly." },
   { sign: "Pigment in the anterior vitreous (Shafer sign, “tobacco dust”)", why: "Strongly suggests a tear; its absence makes one less likely." },
   { sign: "Vitreous haemorrhage", why: "High probability of a tear; if the fundus is hidden, B-scan." },
   { sign: "Elevated, grey, folded, mobile retina; horseshoe tear", why: "Seen on indirect ophthalmoscopy with scleral depression (ophthalmologist)." },
   { sign: "RAPD if the detachment is large; IOP often slightly lower", why: "Gauges the extent; a low IOP rules nothing out." }
  ],
  tests: [
   { test: "Visual acuity and confrontation fields", when: "Every patient with flashes or floaters", read: "Subjective vision loss multiplies the risk of a tear (likelihood ratio ≈ 5)." },
   { test: "Dilated fundus exam with scleral depression", when: "Same day, by the ophthalmologist (or optometrist)", read: "The only exam that sees the periphery: tear, detachment, macular involvement." },
   { test: "B-scan ultrasound", when: "If vitreous haemorrhage or a dense cataract hides the fundus", read: "A mobile membrane attached to the disc = detached retina." },
   { test: "Macular OCT", when: "Before surgery", read: "Macula on or off: guides urgency and prognosis." }
  ]
 },
 ddx: [
  { dx: "PVD without a tear", clue: "Flashes and floaters with no pigment or blood, normal periphery; re-examine if symptoms change." },
  { dx: "Migraine aura", clue: "Shimmering zigzags in both eyes that spread and vanish within 20–30 min." },
  { dx: "Exudative (serous) detachment", clue: "Fluid that shifts with position, no tear; inflammation, tumour, malignant hypertension." },
  { dx: "Tractional detachment", clue: "Retina pulled by fibrovascular membranes (diabetes): concave, barely mobile." },
  { dx: "Retinoschisis", clue: "Splitting of the retina: dome-shaped, smooth, immobile, often inferotemporal in both eyes." }
 ],
 redFlags: [
  "Curtain, shadow or vision loss: on-call ophthalmologist the same day",
  "Shower of floaters, pigment or blood in the vitreous: a tear is likely",
  "New flashes in a myope or after cataract surgery: dilated exam within 24 h"
 ],
 cat: {
  vignette: "A 58-year-old myopic man, cataract surgery a year ago: flashes and a shower of floaters since yesterday, an inferior shadow this morning.",
  algo: [
   { q: "New flashes or floaters?", yes: "", yesGo: 1, no: "Another cause of vision loss: keep examining." },
   { q: "Curtain, shadow or vision loss?", yes: { t: "On-call ophthalmologist the same day.", urgent: true }, yesGo: 3, no: "", noGo: 2 },
   { q: "Shower of floaters or blurred vision?", yes: { t: "Tear likely: dilated exam the same day.", urgent: true }, yesGo: 3, no: "Probable PVD: dilated exam within 24 h." },
   { q: "Retina detached on dilated exam?", yes: "", yesGo: 4, no: "Tear: laser promptly; nothing: close follow-up." },
   { q: "Macula still on?", yes: { t: "Urgent surgery, as soon as possible.", urgent: true }, no: "Prompt surgery; central vision often incomplete." }
  ],
  phases: [
   { phase: "observation", items: ["PVD without a tear: explain the warning signs; follow-up as the ophthalmologist decides"] },
   { phase: "laser", items: ["Symptomatic horseshoe tear: laser (or cryotherapy) promptly"] },
   { phase: "chirurgie", items: ["Pneumatic retinopexy, scleral buckle or vitrectomy depending on the tear, age and lens status", "Gas bubble: prescribed head position; no flying, no altitude, no nitrous oxide while it lasts"] },
   { phase: "suivi", items: ["Examine the other eye; come back at once for new flashes, floaters or a curtain"] }
  ],
  local: "In Quebec, an optometrist can do the first dilated exam and refer to the on-call ophthalmologist. Surgery is done in a centre with a retina surgeon, sometimes after transfer."
 },
 treatments: [
  { name: "Laser or cryotherapy of the tear", how: "Burns around the tear: the scar welds the retina to the pigment epithelium.", why: "Symptomatic tear without detachment.", pros: "In the clinic, in a few minutes.", cons: "Does not reattach a retina that is already detached.", cx: "New tear elsewhere, epiretinal membrane.", refer: "Promptly after diagnosis.", pitfall: "Thinking the eye is cured: come back with new symptoms." },
  { name: "Pneumatic retinopexy", how: "A gas bubble is injected into the eye, plus laser or cryotherapy; the head is positioned so the bubble closes the tear.", why: "Detachment from a superior tear, in a patient able to position.", pros: "No operating room; better vision at 1 year than vitrectomy in the PIVOT trial.", cons: "Strict positioning for several days; more reoperations.", cx: "New tears, failure.", pitfall: "No flying, altitude or nitrous oxide while the bubble is there." },
  { name: "Scleral buckle", how: "A silicone band sutured onto the sclera pushes the wall against the tear.", why: "Young phakic patient, dialysis at the ora, inferior detachment.", pros: "Keeps the lens.", cons: "Myopic shift, discomfort.", cx: "Diplopia, extrusion, infection." },
  { name: "Vitrectomy with tamponade", how: "The pulling vitreous is removed, then the retina is reattached under gas or silicone oil.", why: "Complex detachment, pseudophakia, vitreous haemorrhage.", pros: "Deals with multiple or hidden tears.", cons: "Positioning; cataract in a phakic eye.", cx: "Cataract, raised IOP, proliferative vitreoretinopathy (PVR)." }
 ],
 pearls: [
  { q: "Why is a superior detachment more pressing?", a: "Fluid sinks with gravity and reaches the macula quickly. A curtain rising from the bottom of the field (superior retina detached) is therefore more urgent." },
  { q: "New floaters, normal undilated fundus: do you reassure?", a: "No. The tear is in the periphery, invisible without dilation. About 14% of patients with acute flashes or floaters have a tear (Hollands, JAMA 2009): dilated exam within 24 h." },
  { q: "What do you tell a patient with PVD and no tear?", a: "Come back the same day for a shower of floaters, persistent flashes, a curtain or vision loss: a tear can appear in the following weeks (≈ 3% within 6 weeks)." }
 ],
 mnemonic: { title: "Warning signs: “Flash, Shower, Curtain”", text: "**Flash** (the vitreous pulls), **Shower** of floaters (blood, pigment), **Curtain** (detachment): dilated exam, the same day as soon as there is a curtain." },
 treatment: {
  first: [
   "**You**: acuity, finger fields; ask about flashes, a shower of floaters, a curtain. No reassurance without a dilated exam.",
   "**Ophthalmologist**: dilated fundus exam; laser for a tear, surgery for a detachment."
  ],
  refer: "Refer to ophthalmology: the same day for a curtain, vision loss or a shower of floaters; otherwise within 24 h — a tear is treated with laser before detachment.",
  pitfall: [
   "**Undilated fundus** judged normal: the tear is in the periphery, invisible without dilation.",
   "**Nitrous oxide** during anaesthesia with a gas bubble in the eye: the bubble expands and IOP soars."
  ],
  qc: ["An optometrist can do the first dilated exam.", "Gas bubble: no flying, no altitude; warn the anaesthetist."]
 }
},
"r-oacr": {
 title: "Central retinal artery occlusion (CRAO)",
 oneLiner: "Sudden, painless loss of vision in one eye: a stroke of the eye; emergency at a stroke centre and rule out arteritis.",
 definition: "An embolus or arteritis blocks the artery that feeds the inner retina. It is a stroke of the eye: stroke work-up the same day.",
 anatomy: { text: "The central retinal artery, a branch of the ophthalmic artery (from the internal carotid), feeds the inner retinal layers; the choroid feeds the photoreceptors. The fovea has no inner retina: it depends on the choroid. Sometimes a cilioretinal artery from the choroidal circulation supplies part of the macula." },
 causal: {
  title: "From embolus to looming stroke",
  steps: [
   { label: "Embolus or arteritis", detail: "Carotid plaque, atrial fibrillation, a valve; over 50, giant cell arteritis (GCA).", kind: "cause" },
   { label: "Inner retina without oxygen", detail: "Ganglion cells die within hours; the oedematous retina turns white.", kind: "mecanisme" },
   { label: "Cherry-red spot", detail: "The fovea, with no inner retina, shows the red choroid in the middle of the white.", kind: "signe" },
   { label: "Same source, other targets", detail: "Silent brain infarcts are common; stroke risk is high in the following days and weeks.", kind: "complication" },
   { label: "GCA: the other eye at risk", detail: "Without corticosteroids, arteritis can strike the other eye within days.", kind: "complication" }
  ],
  levers: [
   { at: 0, label: "Urgent stroke work-up", detail: "Diffusion MRI, neck vessels, ECG and monitoring, echocardiography: find and treat the source." },
   { at: 4, label: "Corticosteroids for GCA", detail: "As soon as it is suspected (ESR, CRP and platelets drawn), without waiting for the biopsy: they protect the other eye." },
   { at: 3, label: "Secondary prevention", detail: "Antiplatelet or anticoagulant depending on the cause, statin, BP, smoking cessation: decided with the stroke team." },
   { at: 1, label: "Thrombolysis: under study", detail: "Two recent trials (alteplase, tenecteplase, under 4.5 h) showed no proven visual benefit: the stroke centre decides." }
  ]
 },
 risk: [
  "Age > 60, hypertension, diabetes, dyslipidaemia, smoking",
  "Carotid stenosis, atrial fibrillation, valve disease",
  "Over 50: temporal headache, jaw claudication, polymyalgia rheumatica (arteritis)",
  "Young: coagulopathy, vasculitis, drugs, dissection"
 ],
 presentation: [
  "Sudden, painless loss of vision in one eye (often counting fingers or worse)",
  "Sometimes preceded by amaurosis fugax (a transient veil)",
  "Over 50: headache, jaw pain when chewing, fever, weight loss",
  "White, quiet eye"
 ],
 exam: {
  signs: [
   { sign: "Marked RAPD", why: "Extensive retinal damage, confirmed at the bedside with no instrument." },
   { sign: "White, oedematous retina, cherry-red spot", why: "The classic sign, but it may be missing in the first hours." },
   { sign: "Bright embolus at a bifurcation (Hollenhorst plaque)", why: "Cholesterol embolus: think carotid." },
   { sign: "Thin arteries, segmented blood column (“boxcarring”)", why: "Flow has stopped in the arterioles." },
   { sign: "Pale, swollen disc, indurated temporal artery", why: "Suggests giant cell arteritis: urgent corticosteroids." }
  ],
  tests: [
   { test: "ESR, CRP, blood count (platelets)", when: "Immediately from age 50", read: "Raised: GCA likely; corticosteroids without waiting for the biopsy." },
   { test: "Diffusion-weighted brain MRI, carotid imaging", when: "In the ED, the same day", read: "Silent infarcts, carotid stenosis to treat." },
   { test: "ECG, cardiac monitoring, echocardiography", when: "During the stroke work-up", read: "Atrial fibrillation or another cardiac source of emboli." },
   { test: "Macular OCT, angiography", when: "By the ophthalmologist", read: "Thickened, hyperreflective inner retina; delayed arterial filling." }
  ]
 },
 ddx: [
  { dx: "Arteritic ischaemic optic neuropathy", clue: "Pale, swollen disc; GCA; the same corticosteroid emergency." },
  { dx: "Central retinal vein occlusion", clue: "Haemorrhages in all 4 quadrants, dilated veins; less abrupt loss." },
  { dx: "Retinal detachment", clue: "Flashes, floaters, curtain; elevated retina." },
  { dx: "Vitreous haemorrhage", clue: "Hidden fundus; diabetes or a tear." },
  { dx: "Amaurosis fugax", clue: "Transient loss over minutes: TIA work-up, just as urgent." }
 ],
 redFlags: [
  "Sudden painless vision loss = stroke: emergency at a stroke centre the same day",
  "Age 50 or over: ESR, CRP, platelets; corticosteroids as soon as GCA is suspected",
  "Resolved amaurosis fugax: as urgent as a TIA"
 ],
 cat: {
  vignette: "A 71-year-old hypertensive smoker: on waking, his right eye sees only hand motion. White eye, right RAPD, no pain.",
  algo: [
   { q: "Sudden, painless vision loss?", yes: "", yesGo: 1, no: "Pain, red eye: another emergency (angle closure, keratitis)." },
   { q: "White retina, cherry-red spot or RAPD?", yes: { t: "CRAO likely: stroke-centre emergency now.", urgent: true }, yesGo: 2, no: "On-call ophthalmologist the same day: find the cause." },
   { q: "Age 50 or over?", yes: "", yesGo: 3, no: "Young: embolic source, coagulopathy, vasculitis." },
   { q: "Headache, jaw, PMR or raised ESR/CRP?", yes: { t: "GCA: corticosteroids now; temporal biopsy within 2 weeks.", urgent: true }, no: "Stroke work-up: MRI, carotids, rhythm, echocardiography." }
  ],
  phases: [
   { phase: "medical", items: ["Stroke-centre emergency: diffusion MRI, carotids, ECG and monitoring, echocardiography", "Age 50 or over: ESR, CRP, platelets; if GCA is suspected, high-dose corticosteroids immediately", "IV thrombolysis: discussed by the stroke team if under 4.5 h; no proven visual benefit (THEIA 2025, TenCRAOS 2026)"] },
   { phase: "laser", items: ["Iris or retinal new vessels in the following weeks: panretinal laser, anti-VEGF"] },
   { phase: "suivi", items: ["Ophthalmology in the following weeks: look for iris rubeosis (neovascular glaucoma)", "Secondary prevention: antiplatelet or anticoagulant, statin, BP, smoking cessation"] }
  ],
  local: "In Quebec, send the patient to the ED of a hospital that treats stroke (neurology and MRI available), after calling ahead. Do not settle for an ophthalmology clinic appointment."
 },
 treatments: [
  { name: "Stroke work-up and management", how: "Brain and vascular imaging, search for arrhythmia and a cardiac source.", why: "Every non-arteritic CRAO: it is a stroke.", pros: "Prevents the brain stroke that often follows.", cons: "Does not restore vision.", cx: "None specific to the work-up.", refer: "Stroke-centre ED, the same day.", pitfall: "Sending the patient to an ophthalmology clinic the following week." },
  { name: "Corticosteroids for giant cell arteritis", how: "Calm the inflammation of the artery wall.", why: "Suspected GCA: age 50 or over, symptoms, raised ESR or CRP.", pros: "Protect the other eye and the brain.", cons: "Many adverse effects.", cx: "Hyperglycaemia, infection, osteoporosis, mood changes.", dose: "Prednisone 40–60 mg/day; often IV methylprednisolone 250–1000 mg/day for 3 days if vision is lost, per the team.", refer: "Without waiting for the biopsy (to be done within 2 weeks).", pitfall: "Waiting for the biopsy result before treating." },
  { name: "Intravenous thrombolysis", how: "Dissolves the clot (alteplase, tenecteplase).", why: "Discussed by the stroke team if under 4.5 h and no contraindication.", pros: "Same rationale as for brain stroke.", cons: "No proven visual benefit (THEIA 2025, TenCRAOS 2026).", cx: "Intracranial haemorrhage." },
  { name: "So-called conservative measures", how: "Ocular massage, paracentesis, IOP lowering, oxygen.", why: "Used historically.", pros: "Simple.", cons: "No proven benefit; must never delay transfer.", cx: "Paracentesis: infection, lens injury." }
 ],
 pearls: [
  { q: "Why does the fovea stay red?", a: "It has no inner retina: the intact choroid feeds it. So the red choroid shows through in the middle of a whitened retina." },
  { q: "What does a cilioretinal artery change?", a: "If it supplies the macula, part of central vision is spared and often recovers better." },
  { q: "Vision back after 10 minutes: do you reassure?", a: "No. Amaurosis fugax is a TIA of the eye: the same urgent work-up, plus ESR and CRP from age 50." }
 ],
 mnemonic: { title: "CRAO: “Stroke, ESR, steroids”", text: "**Stroke**: stroke-centre emergency; **ESR** (with CRP and platelets) from age 50; **steroids** without waiting if arteritis is suspected." },
 treatment: {
  first: [
   "**You, now**: acuity, RAPD, time of onset; from 50, ESR, CRP, platelets. Call the ED of a stroke centre.",
   "**Stroke team and ophthalmologist**: MRI, carotids, rhythm; corticosteroids if GCA."
  ],
  refer: "Refer: immediately, to the ED of a stroke centre (not an outpatient clinic) — it is a stroke, and brain-stroke risk peaks in the following days.",
  pitfall: [
   "**Ocular massage or paracentesis**: no proven benefit; they never delay transfer.",
   "**Corticosteroids postponed** until the biopsy when GCA is suspected: the other eye can be lost."
  ],
  qc: ["Call the ED before transfer; ambulance if onset is recent.", "Temporal biopsy within 2 weeks of starting corticosteroids."]
 }
},
"r-ovr": {
 title: "Retinal vein occlusions (central and branch)",
 oneLiner: "Painless vision loss and flame haemorrhages, in one sector (branch) or everywhere (central): treat the oedema, watch for new vessels.",
 definition: "A retinal vein becomes blocked: blood backs up, bleeds and swells the macula. We treat the oedema and watch for new vessels.",
 anatomy: { text: "The central retinal vein leaves through the disc beside the artery, in a shared sheath; further out, arterioles and venules cross under a shared adventitia. A stiff artery (hypertension, atherosclerosis) compresses the vein at these points. The temporal arcades drain the macula." },
 causal: {
  title: "From a pinched crossing to new vessels",
  steps: [
   { label: "Compression at the crossing", detail: "A stiff artery and the shared sheath pinch the vein (branch); for the central vein, at the lamina cribrosa.", kind: "cause" },
   { label: "Thrombus, venous backflow", detail: "Upstream, the vein dilates and twists; capillary pressure rises.", kind: "mecanisme" },
   { label: "Haemorrhages in the territory", detail: "Flames and blots: one sector bounded by the horizontal raphe (branch) or all 4 quadrants (central).", kind: "signe" },
   { label: "Macular oedema", detail: "Fluid builds up in the macula: the main cause of vision loss.", kind: "lesion" },
   { label: "Ischaemia, VEGF, new vessels", detail: "Non-perfused retina releases VEGF: iris new vessels (neovascular glaucoma) or retinal ones (vitreous haemorrhage).", kind: "complication" }
  ],
  levers: [
   { at: 3, label: "Intravitreal anti-VEGF", detail: "Bevacizumab, ranibizumab or aflibercept dry the oedema; repeated injections." },
   { at: 4, label: "Panretinal laser", detail: "Destroys the ischaemic retina that makes VEGF: the new vessels regress." },
   { at: 0, label: "Risk factors", detail: "BP, diabetes, lipids, IOP if glaucoma: protect the other eye and the rest of the body." }
  ]
 },
 risk: [
  "Age > 50",
  "Hypertension (the most common), diabetes, dyslipidaemia, smoking",
  "Glaucoma or ocular hypertension, especially for the central vein",
  "Young: coagulopathy, hyperviscosity, oestrogen contraception, vasculitis"
 ],
 presentation: [
  "Painless vision loss in one eye, often noticed on waking",
  "Branch: partial blur or a sector field defect; sometimes found by chance",
  "Central vein: more marked loss; RAPD in the ischaemic form",
  "Later: red, painful eye if neovascular glaucoma develops"
 ],
 exam: {
  signs: [
   { sign: "Flame and blot haemorrhages", why: "One sector bounded by the horizontal raphe = branch; all 4 quadrants = central vein." },
   { sign: "Dilated, tortuous veins", why: "Backflow upstream of the obstruction." },
   { sign: "Many cotton-wool spots, RAPD", why: "Ischaemic form: high risk of new vessels." },
   { sign: "IOP, vessels on the iris", why: "Glaucoma is often associated; rubeosis = neovascular glaucoma looming." }
  ],
  tests: [
   { test: "Macular OCT", when: "At diagnosis, then at every visit", read: "Thickening and cysts: guides injections." },
   { test: "Fluorescein angiography (or OCT angiography)", when: "By the ophthalmologist", read: "Non-perfused areas: risk of new vessels." },
   { test: "BP, glucose or HbA1c, lipid profile, CBC", when: "By the family physician, within the week", read: "Risk factors to treat; coagulation especially if young or bilateral." },
   { test: "Undilated iris exam and gonioscopy", when: "Monthly for 6 months if central vein", read: "Iris or angle new vessels: panretinal laser." }
  ]
 },
 ddx: [
  { dx: "Diabetic retinopathy", clue: "Both eyes, microaneurysms, exudates; not confined to one venous territory." },
  { dx: "Hypertensive retinopathy", clue: "Both eyes, cotton-wool spots; swollen disc in a hypertensive emergency." },
  { dx: "Ocular ischaemic syndrome", clue: "Tight carotid stenosis: dilated but barely tortuous veins, peripheral haemorrhages, pain." },
  { dx: "Hyperviscosity retinopathy", clue: "Both eyes; myeloma, leukaemia, polycythaemia: CBC, protein electrophoresis." }
 ],
 redFlags: [
  "Red, painful eye, high IOP, vessels on the iris: neovascular glaucoma, the same day",
  "Ischaemic central vein occlusion (RAPD, many cotton-wool spots): iris and angle monthly",
  "Occlusion in a young patient or both eyes: coagulation, hyperviscosity, vasculitis"
 ],
 cat: {
  vignette: "A 66-year-old woman with poorly controlled hypertension: blurred right eye on waking. Flame haemorrhages in the superotemporal sector.",
  algo: [
   { q: "Haemorrhages in all 4 quadrants?", yes: "Central retinal vein occlusion.", yesGo: 1, no: "Branch occlusion: one sector.", noGo: 2 },
   { q: "RAPD, many cotton-wool spots?", yes: "Ischaemic form: IOP, iris and angle monthly.", yesGo: 2, no: "Non-ischaemic: can worsen, close follow-up.", noGo: 2 },
   { q: "Thickened macula on OCT, low vision?", yes: "Intravitreal anti-VEGF, monthly at first.", yesGo: 3, no: "Observation; treat the risk factors.", noGo: 3 },
   { q: "New vessels: iris, angle, retina?", yes: { t: "Panretinal laser and anti-VEGF; same day if IOP high.", urgent: true }, no: "Follow-up; BP, glucose, lipids by the family physician." }
  ],
  phases: [
   { phase: "medical", items: ["Macular oedema: intravitreal anti-VEGF (bevacizumab, ranibizumab, aflibercept); dexamethasone implant second line", "Family physician: BP, glucose, lipids; IOP if glaucoma"] },
   { phase: "laser", items: ["Panretinal laser (sectoral for a branch) if new vessels", "Grid laser possible for branch oedema"] },
   { phase: "suivi", items: ["Central vein: undilated iris exam and gonioscopy monthly for 6 months", "Injections spaced out according to OCT"] }
  ],
  local: "In Quebec, intravitreal injections are given in ophthalmology clinics, often in series over months: keeping appointments matters a great deal. The family physician manages BP, diabetes and lipids."
 },
 treatments: [
  { name: "Intravitreal anti-VEGF", how: "Blocks VEGF: less leakage, the macular oedema shrinks.", why: "Macular oedema with vision loss; new vessels (as an adjunct).", pros: "Vision gains in the large trials.", cons: "Repeated injections for months.", cx: "Endophthalmitis (rare), transient IOP rise, retinal detachment.", dose: "Bevacizumab 1.25 mg (off-label), ranibizumab 0.5 mg or aflibercept 2 mg, monthly at first.", refer: "Macular oedema: within days to weeks.", pitfall: "Red, painful eye and falling vision a few days after an injection: endophthalmitis, call the same day." },
  { name: "Dexamethasone implant", how: "A slow-release corticosteroid placed in the vitreous.", why: "Oedema resistant to anti-VEGF, or monthly injections not feasible.", pros: "Effect lasting several months.", cons: "Cataract, IOP rise.", cx: "Steroid-induced glaucoma, cataract, endophthalmitis." },
  { name: "Panretinal laser", how: "Peripheral burns: the ischaemic retina makes less VEGF.", why: "New vessels on the iris, in the angle or on the retina.", pros: "Lasting effect.", cons: "Loss of peripheral field and night vision.", cx: "Transient macular oedema, pain." },
  { name: "Risk factor treatment", how: "BP, diabetes, lipids, smoking; IOP if glaucoma.", why: "Every vein occlusion.", pros: "Protects the other eye and the heart.", cons: "Does not unblock the vein.", cx: "Depends on the drugs." }
 ],
 pearls: [
  { q: "Why does a branch occlusion respect the horizontal raphe?", a: "The superior and inferior temporal veins each drain their own half of the retina without crossing the raphe. Blood therefore stays in the sector of the blocked vein." },
  { q: "What is “90-day glaucoma”?", a: "After an ischaemic central vein occlusion, iris new vessels can close the angle, often within the first 3 months: hence the monthly iris and angle exam." },
  { q: "What work-up do you ask the family physician for?", a: "BP, glucose or HbA1c, lipid profile, CBC. In a young patient or if both eyes are involved: coagulation, hyperviscosity, vasculitis." }
 ],
 treatment: {
  first: [
   "**You**: acuity, RAPD, IOP if possible, BP in the office; order glucose or HbA1c, lipids, CBC.",
   "**Ophthalmologist**: OCT, angiography; anti-VEGF for macular oedema; laser for new vessels."
  ],
  refer: "Refer to ophthalmology: within the week; the same day for a red, painful eye with high IOP (neovascular glaucoma) — macular oedema responds better when treated early.",
  pitfall: [
   "**Forgetting BP and glucose**: the occlusion signals a general vascular risk.",
   "**Stopping anti-VEGF** as soon as vision improves: the oedema often recurs."
  ],
  qc: ["The family physician does the vascular work-up; the ophthalmologist follows the eye.", "Injections in the clinic, often in series: plan transport and a companion."]
 }
}
});

G.OPH_EN.hy = Object.assign(G.OPH_EN.hy || {}, {
 "r-decollement": {
  essentials: [
   "New **flashes and floaters**: PVD until proven otherwise; about 14% have a tear.",
   "**Curtain** or vision loss: on-call ophthalmologist **the same day**.",
   "Only a **dilated fundus exam** with scleral depression sees the periphery, where tears arise.",
   "Tear without detachment: **laser** in the clinic; detachment: surgery before the **macula** comes off.",
   "Gas bubble in the eye: **no flying, no altitude, no nitrous oxide**."
  ],
  cloze: [
   "Brown pigment in the anterior vitreous ([[Shafer]] sign): a tear is likely.",
   "A superior retinal detachment gives a curtain in the [[inferior|lower]] field.",
   "Intraocular gas bubble: [[nitrous oxide|N2O]] is contraindicated during anaesthesia.",
   "Vitreous haemorrhage hiding the fundus: [[B-scan|ultrasound|B-scan ultrasound]] to see the retina.",
   "Macula still on: [[urgent|as soon as possible]] surgery, before central vision drops."
  ],
  triage: [
   { s: "A 60-year-old man: a few floaters and one flash since yesterday, normal vision and fields.", u: "rapide", why: "Probable PVD: dilated exam within 24 h and return advice (curtain, shower, vision loss)." },
   { s: "A 45-year-old myope: a shadow rising from the bottom of the right field since this morning, acuity 6/9.", u: "urgent", why: "Superior detachment, macula probably still on: on-call ophthalmologist the same day." },
   { s: "PVD without a tear diagnosed 3 weeks ago; floaters stable and less bothersome.", u: "routine", why: "Usual course: planned follow-up; come back if symptoms change." }
  ],
  cues: ["Flashes, shower of floaters, inferior curtain", "“Tobacco dust” pigment in the vitreous"]
 },
 "r-oacr": {
  essentials: [
   "**Sudden, painless** loss of vision in one eye: a **stroke of the eye** until proven otherwise.",
   "**Stroke-centre emergency** the same day: MRI, carotids, heart rhythm, echocardiography.",
   "From **age 50**: ESR, CRP, platelets; **corticosteroids** without waiting for the biopsy if GCA is suspected.",
   "White retina and **cherry-red spot**: the fovea is still fed by the choroid.",
   "Massage, paracentesis, thrombolysis: **no proven visual benefit**; do not delay the work-up."
  ],
  cloze: [
   "A bright cholesterol embolus at an arterial bifurcation: [[Hollenhorst]] plaque.",
   "The fovea stays red because it is fed by the [[choroid]].",
   "Transient loss of vision in one eye for a few minutes: amaurosis [[fugax]], the same work-up as a TIA.",
   "CRAO and jaw claudication at 75: think of [[giant cell]] arteritis.",
   "A [[cilioretinal]] artery can spare part of the macula."
  ],
  triage: [
   { s: "A 68-year-old man: painless loss of vision in the left eye 1 h ago, left RAPD.", u: "urgent", why: "Probable CRAO: stroke-centre emergency now; ESR, CRP, platelets." },
   { s: "A 79-year-old woman: sudden blur in the right eye, temporal headache, pain when chewing for 2 weeks.", u: "urgent", why: "Probable GCA: ESR, CRP, platelets and corticosteroids the same day." },
   { s: "A 66-year-old man: a black veil over the right eye for 5 minutes yesterday, normal vision today.", u: "urgent", why: "Amaurosis fugax = TIA: urgent work-up (carotids, rhythm) the same day." }
  ],
  cues: ["Sudden painless loss, RAPD, cherry-red spot", "Bright embolus at an arterial bifurcation"]
 },
 "r-ovr": {
  essentials: [
   "**Flame** haemorrhages: one sector = **branch**; 4 quadrants = **central vein**.",
   "Main cause of vision loss: **macular oedema**, treated with intravitreal **anti-VEGF**.",
   "**Ischaemic** form: new vessels, **neovascular glaucoma**; iris and angle monthly at first.",
   "Work-up: **BP**, glucose, lipids, CBC; **IOP** (glaucoma often associated).",
   "Young or both eyes involved: **coagulation**, hyperviscosity, vasculitis."
  ],
  cloze: [
   "The haemorrhages of a branch occlusion stop at the [[horizontal raphe|raphe]].",
   "After an ischaemic central vein occlusion, watch for [[neovascular]] glaucoma.",
   "First-line treatment of macular oedema is an intravitreal [[anti-VEGF|anti VEGF]] injection.",
   "A branch occlusion usually starts at an [[arteriovenous|artery-vein|AV]] crossing.",
   "The main systemic risk factor for vein occlusions is [[hypertension|high blood pressure]]."
  ],
  triage: [
   { s: "A 70-year-old woman: blurred right eye for 4 days, haemorrhages in one sector, acuity 6/18.", u: "rapide", why: "Branch occlusion with likely macular involvement: ophthalmology within the week, BP measured." },
   { s: "A 68-year-old man, central vein occlusion 2 months ago: red, painful eye, IOP 48 mmHg.", u: "urgent", why: "Neovascular glaucoma: ophthalmologist the same day." },
   { s: "A 57-year-old man: old branch haemorrhages found by chance, acuity 6/6, dry macula.", u: "routine", why: "Ophthalmology follow-up and risk factor control." }
  ],
  cues: ["Flames in one sector, raphe respected", "Haemorrhages in 4 quadrants, tortuous veins"]
 }
});

G.OPH_EN.photos = G.OPH_EN.photos || {};
(function (P) {
 var add = function (key, o) { P[key] = P[key] || {}; Object.keys(o).forEach(function (id) { P[key][id] = Object.assign(P[key][id] || {}, o[id]); }); };
 add("r-decollement", {
  "IMG3-034": { caption: "Retinal detachment from a horseshoe tear (wide-field photo)", look: "Look for the missing piece of retina in the lower half.", reveal: ["Horseshoe tear at the bottom centre of the image: the retina has a horseshoe-shaped defect.", "Liquid vitreous passes through this tear and lifts the retina: a rhegmatogenous detachment (Greek rhegma, “tear”).", "Unnatural colours: wide-field scanning-laser photo."] },
  "OPH-287": { caption: "Rhegmatogenous retinal detachment, macula off", look: "Compare the retina on either side of the arrows.", reveal: ["Arrows: the edge of the detachment; on the macular side, the retina is elevated and duller.", "The macula lies in the detached zone: central vision affected, poorer recovery.", "Around the disc, the retina is still flat."] },
  "IMG3-005": { caption: "B-scan: detached retina, attached at the disc and the ora serrata", look: "Find the membrane in the globe and its attachment points.", reveal: ["An echogenic membrane in the vitreous cavity: detached retina.", "Attached behind at the disc (*) and in front at the ora serrata (arrows): this is what sets it apart from a vitreous detachment.", "Useful when vitreous haemorrhage or a cataract hides the fundus."] }
 });
 add("r-oacr", {
  "IMG3-029": { caption: "Central retinal artery occlusion: cherry-red spot", look: "Look at the colour of the retina around the macula, then its centre.", reveal: ["Cherry-red spot at the fovea: the intact choroid shows through a fovea with no inner retina.", "Pale, oedematous retina around it: inner layers deprived of oxygen.", "It is a stroke of the eye: stroke-centre emergency; ESR, CRP and platelets from age 50."] },
  "OPH-249": { caption: "Central artery occlusion: whitened retina, an area still red near the disc", look: "Compare the colour of the retina between the disc and the macula with the rest.", reveal: ["Yellow-white retina almost everywhere: ischaemia of the inner layers.", "Red area between the disc and the macula: still-perfused retina, suggesting a spared cilioretinal artery.", "If this area covers the fovea, part of central vision may be preserved."] },
  "OPH-274": { caption: "Giant cell arteritis: pale, swollen disc (ischaemic optic neuropathy)", look: "Look at the colour and margins of the disc.", reveal: ["Chalk-white, swollen disc with blurred margins: arteritic anterior ischaemic optic neuropathy.", "The same disease as arteritic CRAO: ESR, CRP, platelets and corticosteroids without waiting for the biopsy.", "Without treatment, the other eye is at risk in the following days."] }
 });
 add("r-ovr", {
  "IMG3-030": { caption: "Central retinal vein occlusion: fundus (a) and angiography (b)", look: "On image a, look at where the haemorrhages are.", reveal: ["Intraretinal haemorrhages in all four quadrants around a congested disc: central retinal vein occlusion.", "Image b (fluorescein angiography): the haemorrhages block the choroidal fluorescence (dark spots).", "Check the iris and angle monthly at first: risk of neovascular glaucoma if the form is ischaemic."] },
  "OPH-254": { caption: "Branch retinal vein occlusion: haemorrhages in one sector", look: "Find the upper edge of the haemorrhages.", reveal: ["Haemorrhages confined to the inferotemporal sector, between the disc and the periphery.", "The upper edge follows the horizontal raphe: the upper half is spared.", "The macula is threatened by oedema: OCT, then anti-VEGF if vision drops."] }
 });
})(G.OPH_EN.photos);

G.OPH_EN.quiz = G.OPH_EN.quiz || {};
Object.assign(G.OPH_EN.quiz, {
 "D-001": {
  stem: "A 62-year-old myopic man: since this morning, flashes in the left eye and about ten new floaters. Acuity 6/6, full fields to fingers, undilated fundus normal in the office. What do you do?",
  options: ["Reassure: benign vitreous detachment, follow up as needed", "Dilated exam by the ophthalmologist the same day", "Review in 6 weeks if symptoms persist", "Brain MRI to rule out a migraine aura"],
  explain: "A shower of new floaters makes a tear likely. It lies in the periphery, invisible without dilation: dilated exam the same day, laser if one is found.",
  deep: "**What it is:** probably a posterior vitreous detachment (PVD), but a shower of new floaters raises concern for a retinal tear. **Why not reassure:** the tear is in the periphery, invisible without dilation; about 14% of patients with acute flashes or floaters have one, and ten or so new floaters raises that risk sharply (Hollands, JAMA 2009). **What to do:** dilated exam with scleral depression the same day; a tear is treated with laser before it becomes a detachment.",
  why: ["Trap: an undilated fundus exam does not see the periphery, where tears arise.", "Correct: the shower of floaters makes a tear likely; it is treated with laser if found early.", "Six weeks lets a tear progress to a detachment.", "An aura affects both eyes and fades within 20–30 min; it does not explain floaters."]
 },
 "D-002": {
  stem: "A patient describes a grey shadow rising from the bottom of her right visual field since this morning. Which part of the retina is detached?",
  options: ["The superior retina", "The inferior retina", "The macula only", "The nasal retina"],
  explain: "The image is inverted on the retina: a curtain rising from the bottom of the field comes from the superior retina. This detachment reaches the macula fast: same day.",
  deep: "**Rule:** the image is inverted on the retina; an inferior field defect matches the superior retina. **Why it is pressing:** a superior detachment reaches the macula quickly, because fluid sinks with gravity. **What to do:** on-call ophthalmologist the same day, before central vision drops.",
  why: ["Correct: inferior field = superior retina; this detachment threatens the macula fastest.", "An inferior detachment would give a curtain coming down from the top of the field.", "Macular involvement alone gives a central spot, not a rising curtain.", "The nasal retina matches the temporal field, off to the side."]
 },
 "D-003": {
  stem: "A man operated on yesterday for retinal detachment, with vitrectomy and a gas bubble, needs emergency surgery for appendicitis. Which agent should the anaesthetist avoid?",
  options: ["Propofol", "Rocuronium", "Sevoflurane", "Nitrous oxide"],
  explain: "Nitrous oxide diffuses into the intraocular gas bubble: it expands, IOP soars and the central artery can close. Tell the anaesthetist.",
  deep: "**The trap:** nitrous oxide diffuses into the intraocular gas bubble much faster than nitrogen leaves it; the bubble expands, IOP rises sharply and can shut off the central retinal artery. **What to do:** tell the anaesthetist about the bubble; no nitrous oxide while it persists, and no flying or altitude.",
  why: ["Propofol does not change the volume of a gas bubble.", "Rocuronium (a neuromuscular blocker) does not change the volume of a gas bubble.", "Sevoflurane does not make an intraocular bubble expand.", "Correct: nitrous oxide expands the bubble, IOP soars and the eye can lose its perfusion."]
 },
 "D-004": {
  stem: "A 72-year-old hypertensive man: sudden, painless loss of vision in the right eye 2 hours ago. Right RAPD, pale retina with a cherry-red spot. You see him in clinic. What do you do?",
  options: ["Ocular massage and an ophthalmology appointment tomorrow", "Aspirin, home, and an outpatient MRI", "Stroke-centre ED now; ESR and CRP", "IOP-lowering drops and a check in one week"],
  explain: "Sudden, painless vision loss with a cherry-red spot: CRAO, a stroke of the eye. Same-day stroke work-up at a stroke centre; ESR, CRP and platelets from age 50.",
  deep: "**What it is:** central retinal artery occlusion, i.e., a stroke of the eye. **Why the urgency:** brain-stroke risk is high in the following days; the work-up (diffusion MRI, carotids, heart rhythm, echocardiography) is done the same day, and thrombolysis is discussed at a stroke centre if onset was under 4.5 h ago. **Over 50:** ESR, CRP and platelets to rule out giant cell arteritis.",
  why: ["Massage has no proven benefit and the delay misses the urgent stroke work-up.", "An outpatient work-up misses the window when stroke risk is highest.", "Correct: it is a stroke; same-day work-up and arteritis to rule out.", "IOP-lowering drops have shown no benefit and delay the work-up."]
 },
 "D-005": {
  stem: "In central retinal artery occlusion, why does the fovea look cherry red in the middle of a white retina?",
  options: ["The intact choroid shows through a fovea with no inner retina", "A subretinal haemorrhage forms under the fovea", "Foveal cones contain a red pigment", "The cilioretinal artery dilates to compensate"],
  explain: "The fovea has no inner retina to whiten: fed by the intact choroid, it stays red in the middle of a pale retina.",
  deep: "**Mechanism:** the central artery feeds the inner retinal layers, which turn white when deprived of oxygen. The fovea has no inner layers: it depends on the choroid, which stays perfused. So the red choroid shows at the centre of a pale retina.",
  why: ["Correct: with no inner retina to whiten, the fovea lets the perfused choroid show.", "There is no blood outside the vessels: it is a contrast effect.", "The colour comes not from the cones but from the underlying choroid.", "A cilioretinal artery spares an area near the disc; it does not explain the central spot."]
 },
 "D-006": {
  stem: "A 78-year-old woman: sudden loss of vision in the left eye, temporal headache and jaw pain when chewing for 3 weeks. ESR 85 mm/h, raised CRP. The temporal artery biopsy is booked in 5 days. When do you start corticosteroids?",
  options: ["After the biopsy result", "After a temporal artery ultrasound", "Only if the other eye becomes symptomatic", "Now, without waiting for the biopsy"],
  explain: "Probable giant cell arteritis with visual involvement: high-dose corticosteroids now. The biopsy stays valid if done within 2 weeks.",
  deep: "**What it is:** probable giant cell arteritis (age, headache, jaw claudication, raised ESR and CRP) with visual involvement. **Why now:** the other eye can be lost within days; the biopsy remains interpretable if done within 2 weeks of starting corticosteroids. **What to do:** high-dose corticosteroids immediately, with the team (internal medicine or rheumatology).",
  why: ["Trap: waiting for the biopsy exposes the other eye to permanent loss.", "Imaging can help the diagnosis, but must not delay treatment.", "By the time the other eye is symptomatic, it is often too late to save it.", "Correct: treat on suspicion; a biopsy within 2 weeks remains valid."]
 },
 "D-007": {
  stem: "A 70-year-old hypertensive man: blurred left eye on waking. Flame haemorrhages in all four quadrants, dilated and tortuous veins, a congested disc. What is the diagnosis?",
  options: ["Central retinal artery occlusion", "Mild non-proliferative diabetic retinopathy", "Central retinal vein occlusion", "Posterior vitreous detachment"],
  explain: "Haemorrhages in all four quadrants and tortuous veins: central retinal vein occlusion. A branch occlusion stays within a sector bounded by the horizontal raphe.",
  deep: "**What it is:** central retinal vein occlusion: blood backs up through the whole venous territory, hence haemorrhages in all four quadrants and dilated, tortuous veins. A branch occlusion stays within a sector bounded by the horizontal raphe. **What to do:** ophthalmology within the week (OCT, angiography), BP, glucose, lipids, CBC; check the iris and angle monthly at first.",
  why: ["CRAO gives a white retina and a cherry-red spot, with few or no haemorrhages.", "Mild diabetic retinopathy shows a few microaneurysms in both eyes, not diffuse haemorrhages in one eye.", "Correct: haemorrhages in all four quadrants and tortuous veins = central vein.", "PVD gives floaters and flashes, without diffuse retinal haemorrhages."]
 },
 "D-008": {
  stem: "A 74-year-old woman with an ischaemic central vein occlusion in the right eye 3 weeks ago (RAPD, many cotton-wool spots). Which follow-up watches for the most feared complication?",
  options: ["Visual field every 6 months", "Iris exam and gonioscopy every month", "Follow-up brain MRI at 3 months", "B-scan at every visit"],
  explain: "After an ischaemic central vein occlusion, the feared complication is neovascular glaucoma: undilated iris exam and gonioscopy monthly for 6 months.",
  deep: "**The feared complication:** neovascular glaucoma. The ischaemic retina releases VEGF; new vessels grow on the iris and in the angle, often within the first 3 months. **What to do:** undilated iris exam and gonioscopy every month for 6 months; panretinal laser (and anti-VEGF) as soon as new vessels appear.",
  why: ["The visual field does not detect iris new vessels, and 6 months is too late.", "Correct: look for rubeosis and angle new vessels every month at first.", "A vein occlusion is not a stroke; MRI is not the follow-up.", "Ultrasound helps when the fundus is hidden; it does not show the angle."]
 },
 "D-009": {
  stem: "A 50-year-old man: type 2 diabetes diagnosed this week, normal vision. When should his retina be examined (Diabetes Canada)?",
  options: ["In 5 years, then every year", "Now, then every 1–2 years if no retinopathy", "Only if his vision drops", "Now, then every 5 years if normal"],
  explain: "Type 2: screen at diagnosis, since retinopathy may already be there, then every 1–2 years without retinopathy. Type 1: every year from 5 years after onset.",
  deep: "**Rule:** in type 2, diabetes has often been present for years at diagnosis; retinopathy may already be there. Screening is therefore done **at diagnosis**, with retinal photographs or a dilated fundus exam, then **every 1–2 years** if there is no retinopathy (more often if there is). **Type 1:** yearly screening from 5 years after onset, from age 15.",
  why: ["Waiting 5 years is the type 1 rule, not type 2.", "Correct: at diagnosis, then every 1–2 years without retinopathy.", "Retinopathy, even proliferative, can cause no symptoms.", "Five years is too long: 1–2 years without retinopathy."]
 },
 "D-010": {
  stem: "A 34-year-old woman with type 1 diabetes for 20 years. Screening photos show new vessels on the disc; vision 6/6, no symptoms. What do you do?",
  options: ["Repeat photos in 1 year", "Intensify insulin and review in 3 months", "Ophthalmologist within days: panretinal laser or anti-VEGF", "Aspirin to prevent vitreous haemorrhage"],
  explain: "New vessels on the disc: proliferative disease, silent until it bleeds. Ophthalmologist within days for panretinal laser or anti-VEGF.",
  deep: "**What it is:** proliferative diabetic retinopathy (new vessels on the disc), silent until it bleeds. **Why quickly:** new vessels bleed into the vitreous and pull on the retina; panretinal laser or anti-VEGF makes them regress. **Glucose:** to improve, but a very rapid HbA1c drop can transiently worsen retinopathy: eyes first.",
  why: ["One year is the interval for an eye with no retinopathy, not proliferative disease.", "Glucose control helps in the long run; it does not treat new vessels, and a rapid drop can worsen them.", "Correct: proliferative disease, eye treatment without delay.", "Aspirin changes neither the course of retinopathy nor the risk of vitreous haemorrhage (Diabetes Canada)."]
 },
 "D-011": {
  stem: "A 79-year-old woman with known drusen: for 4 days, the tile lines have looked wavy to her left eye. Left acuity 6/12. What do you do?",
  options: ["Ophthalmology within days: possible wet form", "Reassure: cataract, review in 6 months", "Start AREDS2 and review in 3 months", "Amsler grid at home, come back if the spot grows"],
  explain: "New metamorphopsia with drusen: wet AMD until proven otherwise. OCT and anti-VEGF within days; the earlier treatment starts, the more vision is kept.",
  deep: "**What it is:** new metamorphopsia in a patient with drusen: new vessels (wet form) until proven otherwise. **Why quickly:** fluid and blood under the macula damage the photoreceptors; the earlier anti-VEGF starts, the more vision is preserved. **What to do:** ophthalmology within days (OCT, angiography, anti-VEGF).",
  why: ["Correct: new metamorphopsia = possible wet form, OCT within days.", "A cataract veils vision; it does not make lines wavy.", "AREDS2 slows the intermediate form; it does not treat active new vessels.", "The Amsler grid is for spotting a change; here, the change has already happened."]
 },
 "D-012": {
  stem: "A 70-year-old man who has smoked for 50 years: large drusen in both eyes (intermediate AMD). He asks which supplement to take. What do you suggest?",
  options: ["None: supplements are useless", "High-dose omega-3 only", "The AREDS2 formula, without beta-carotene, and quitting smoking", "The original AREDS formula, with beta-carotene"],
  explain: "Intermediate AMD: AREDS2 and stopping smoking. The original beta-carotene formula raises the risk of lung cancer in smokers.",
  deep: "**What the evidence says:** in intermediate AMD, the AREDS formula slows progression to advanced disease (about 25%). **The trap:** the original formula contained beta-carotene, which raises the risk of lung cancer in smokers; AREDS2 replaced it with lutein and zeaxanthin. **What to do:** AREDS2 (vitamins C and E, lutein, zeaxanthin, zinc, copper) and smoking cessation.",
  why: ["Wrong for the intermediate form: the AREDS formula slows progression.", "Omega-3 showed no benefit in AREDS2.", "Correct: AREDS2 without beta-carotene, and stop smoking.", "Trap: beta-carotene raises lung cancer risk in smokers."]
 },
 "D-013": {
  stem: "A 45-year-old man in the ED: headache, blurred vision, BP 232/138. Fundus: swollen discs, cotton-wool spots, flame haemorrhages. Raised creatinine. What do you do?",
  options: ["Sublingual nifedipine to normalise BP within 30 min", "Admit, IV antihypertensive, gradual BP lowering", "Home on a new oral antihypertensive, follow-up in a month", "Brain MRI first, then treat BP according to the result"],
  explain: "Hypertensive emergency with organ damage: admit, IV antihypertensive, gradual lowering (about 10–15% in the first hour, no more than 25% on day 1). A sudden drop causes ischaemia.",
  deep: "**What it is:** a hypertensive emergency (very high BP with organ damage: severe retinopathy, kidney). **Why gradually:** the organs have adapted to high pressure; a sudden drop can cause ischaemia of the brain, kidney or optic nerve. **What to do:** admit, titratable IV antihypertensive, lower mean pressure by about 10–15% in the first hour and no more than 25% on day 1, then switch to oral.",
  why: ["Trap: sublingual nifedipine drops BP unpredictably; normalising within 30 min is dangerous.", "Correct: hypertensive emergency, controlled lowering in a monitored setting.", "Organ damage is not managed at home.", "Imaging follows the neurological signs; it must not delay BP treatment."]
 },
 "D-014": {
  stem: "In the fundus of a 66-year-old hypertensive woman, you see thin arterioles and nipped artery–vein crossings, with no haemorrhage or disc swelling. BP 150/92, no symptoms. How do you grade this retinopathy?",
  options: ["Severe (malignant): hypertensive emergency", "Moderate: look for acute organ damage", "Absent: a normal variant", "Mild (Wong-Mitchell): chronic hypertension to control better"],
  explain: "Thin arterioles and nipped crossings without haemorrhage or a swollen disc: mild Wong-Mitchell retinopathy, a sign of long-standing hypertension. Adjust treatment as an outpatient.",
  deep: "**Wong and Mitchell classification:** mild = thin arterioles, nipped crossings, copper wiring; moderate = haemorrhages, microaneurysms, cotton-wool spots, exudates; severe = moderate signs plus a swollen disc. **Here:** mild disease, a sign of long-standing hypertension; adjust treatment as an outpatient, without rapid lowering.",
  why: ["A swollen disc would be needed to call it severe.", "Haemorrhages, cotton-wool spots or exudates would be needed.", "Nipped crossings are signs of chronic hypertension, not a normal variant.", "Correct: mild disease; control hypertension better as an outpatient."]
 }
});

G.OPH_EN.bonus = Object.assign(G.OPH_EN.bonus || {}, {
 D: [
  { title: "Macular hole", en: "Macular hole", clue: "An older person, often a woman: central blur and distorted lines in one eye; a round hole at the fovea, confirmed on OCT.", action: "Refer to retina within a few weeks: vitrectomy with a gas bubble and positioning." },
  { title: "Epiretinal membrane", en: "Epiretinal membrane", clue: "Slowly progressive metamorphopsia, a cellophane sheen on the macula, retinal folds on OCT.", action: "Observation if bother is mild; vitrectomy with membrane peeling if vision drops." },
  { title: "Vitreous haemorrhage", en: "Vitreous haemorrhage", clue: "A shower of floaters or a sudden veil, hidden fundus: proliferative diabetes, a tear, vein occlusion, trauma.", action: "B-scan the same day to rule out retinal detachment; urgent ophthalmology." },
  { title: "Cytomegalovirus retinitis", en: "Cytomegalovirus retinitis", clue: "Immunocompromised patient (HIV with low CD4, transplant): white necrotic, haemorrhagic patches along the vessels.", action: "Systemic antiviral (ganciclovir, valganciclovir), sometimes intravitreal, with infectious diseases." },
  { title: "Choroidal melanoma", en: "Choroidal melanoma", clue: "A raised pigmented lesion larger than a naevus, with subretinal fluid, orange pigment or symptoms.", action: "Refer to ocular oncology: ultrasound, photos; eye-sparing treatment (brachytherapy) or enucleation." },
  { title: "Roth spots", en: "Roth spots", clue: "White-centred retinal haemorrhages: endocarditis, leukaemia, severe anaemia.", action: "Look for the systemic cause: blood cultures, blood count, cardiac exam." }
 ]
});
