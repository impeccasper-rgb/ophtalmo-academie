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
},
"r-diabete": {
 title: "Diabetic retinopathy",
 oneLiner: "Often silent until advanced: screen at diagnosis (type 2) or from 5 years after onset (type 1), then refer by severity.",
 definition: "High glucose damages the small retinal vessels: they leak, close off, then trigger new vessels. It stays silent for a long time, hence screening.",
 anatomy: { text: "The inner retina is fed by watertight capillaries (the blood–retinal barrier); the macula, at the centre, provides fine vision. When capillaries close, the ischaemic retina releases VEGF (vascular endothelial growth factor), which makes vessels leak and grow fragile new ones." },
 causal: {
  title: "From damaged capillary to bleeding new vessel",
  steps: [
   { label: "Damaged capillaries", detail: "Pericyte loss, thickened basement membrane: microaneurysms, first haemorrhages.", kind: "cause" },
   { label: "Leakage: exudates, macular oedema", detail: "The barrier gives way: lipids (hard exudates) and fluid build up; at the centre, vision drops.", kind: "lesion" },
   { label: "Capillary closure, ischaemia", detail: "Cotton-wool spots, blot haemorrhages, venous beading, IRMA: severe non-proliferative disease.", kind: "mecanisme" },
   { label: "VEGF: new vessels", detail: "On the disc or retina (proliferative disease), on the iris (neovascular glaucoma).", kind: "lesion" },
   { label: "Haemorrhage, traction", detail: "New vessels bleed into the vitreous and pull on the retina: tractional detachment.", kind: "complication" }
  ],
  levers: [
   { at: 0, label: "Glucose and BP", detail: "HbA1c ≤ 7% in general and controlled BP slow onset and progression." },
   { at: 1, label: "Intravitreal anti-VEGF", detail: "First line for centre-involving macular oedema." },
   { at: 3, label: "Panretinal laser or anti-VEGF", detail: "Make the new vessels of proliferative disease regress." },
   { at: 4, label: "Vitrectomy", detail: "Non-clearing vitreous haemorrhage, tractional detachment." }
  ]
 },
 risk: ["Duration of diabetes (the strongest factor)", "High HbA1c, hypertension, dyslipidaemia", "Pregnancy, especially in type 1 diabetes", "Diabetic kidney disease", "Very rapid HbA1c drop: possible transient worsening"],
 presentation: ["No symptoms until an advanced stage", "Blurred or fluctuating vision: macular oedema", "A shower of floaters, a sudden veil: vitreous haemorrhage", "A curtain: tractional detachment"],
 exam: {
  signs: [
   { sign: "Microaneurysms, dot and blot haemorrhages", why: "First signs: non-proliferative disease." },
   { sign: "Hard exudates near the fovea, thickened retina", why: "Macular oedema: vision loss, to treat." },
   { sign: "Haemorrhages in 4 quadrants, venous beading, IRMA", why: "Severe non-proliferative disease (4-2-1 rule): high risk of new vessels." },
   { sign: "New vessels on the disc or elsewhere", why: "Proliferative disease: prompt referral." },
   { sign: "Iris rubeosis", why: "Neovascular glaucoma looming." }
  ],
  tests: [
   { test: "Retinal photographs or dilated fundus exam", when: "Type 2: at diagnosis; type 1: from 5 years after onset (from age 15)", read: "Severity grading: sets the next interval." },
   { test: "Macular OCT", when: "Vision loss or exudates near the centre", read: "Centre-involving oedema or not: guides anti-VEGF." },
   { test: "Fluorescein angiography", when: "By the ophthalmologist, as needed", read: "Non-perfused areas, subtle new vessels." },
   { test: "HbA1c, BP, lipid profile, kidney function", when: "At diabetes follow-up", read: "Modifiable drivers of progression." }
  ]
 },
 ddx: [
  { dx: "Hypertensive retinopathy", clue: "Thin arterioles, nipped crossings, cotton-wool spots; few microaneurysms." },
  { dx: "Retinal vein occlusion", clue: "One eye, one venous territory, tortuous veins." },
  { dx: "Radiation retinopathy", clue: "Prior radiotherapy to the head or eye." },
  { dx: "Ocular ischaemic syndrome", clue: "Carotid stenosis, mid-peripheral haemorrhages, one eye only." }
 ],
 redFlags: ["Shower of floaters or a sudden veil: vitreous haemorrhage, urgent ophthalmology", "New vessels, rubeosis or high IOP: ophthalmologist within days", "Pregnancy (pre-existing diabetes): eye exam in the first trimester"],
 cat: {
  vignette: "A 52-year-old man with type 2 diabetes for 12 years, HbA1c 9.5%, never seen in ophthalmology. Normal vision, no symptoms.",
  algo: [
   { q: "Veil, shower of floaters, curtain?", yes: { t: "Vitreous haemorrhage or detachment: urgent ophthalmology.", urgent: true }, no: "", noGo: 1 },
   { q: "No retinopathy at the last exam?", yes: "Type 1: every year; type 2: every 1–2 years.", no: "", noGo: 2 },
   { q: "New vessels or severe non-proliferative disease?", yes: { t: "Ophthalmologist within days: panretinal laser or anti-VEGF.", urgent: true }, no: "", noGo: 3 },
   { q: "Centre-involving macular oedema?", yes: "Ophthalmologist within a few weeks: anti-VEGF.", no: "Mild or moderate: exam every 6–12 months." }
  ],
  phases: [
   { phase: "observation", items: ["No retinopathy: type 1 every year; type 2 every 1–2 years (Diabetes Canada)", "Mild to moderate: exam every 6–12 months; severe: every 3–4 months"] },
   { phase: "medical", items: ["HbA1c ≤ 7% in general, BP, lipids; fenofibrate possible on top of a statin (type 2, established retinopathy)", "Centre-involving macular oedema: intravitreal anti-VEGF"] },
   { phase: "laser", items: ["Proliferative disease: panretinal laser (or anti-VEGF)", "Non-centre-involving oedema: focal laser possible"] },
   { phase: "chirurgie", items: ["Vitrectomy: persistent vitreous haemorrhage, tractional detachment"] }
  ],
  local: "In Quebec, optometrists often do the screening and refer to an ophthalmologist as soon as retinopathy threatens vision. The family physician checks that the exam is done and that the result comes back."
 },
 treatments: [
  { name: "Glucose and BP control", how: "Slows capillary damage.", why: "Every person with diabetes.", pros: "Prevents onset and progression.", cons: "Slow effect; a very rapid HbA1c drop can transiently worsen retinopathy.", cx: "Hypoglycaemia.", pitfall: "Intensifying without having advanced retinopathy examined." },
  { name: "Intravitreal anti-VEGF", how: "Blocks VEGF: less leakage, new vessels regress.", why: "Centre-involving macular oedema; proliferative disease (an alternative to laser).", pros: "Better vision than laser for central oedema.", cons: "Repeated injections.", cx: "Endophthalmitis (rare), transient IOP rise.", dose: "Bevacizumab 1.25 mg (off-label), ranibizumab 0.5 mg or aflibercept 2 mg, monthly at first." },
  { name: "Panretinal laser", how: "Peripheral burns: less ischaemic retina, so less VEGF.", why: "Proliferative disease, especially high-risk.", pros: "Lasting effect, few visits.", cons: "Loss of peripheral field, reduced night vision.", cx: "Macular oedema, pain." },
  { name: "Fenofibrate", how: "Mechanism poorly understood, independent of lipids.", why: "Type 2 diabetes with established retinopathy, on top of a statin.", pros: "Slows progression (Diabetes Canada, grade A).", cons: "Replaces neither the eye exam nor eye treatment.", cx: "Creatinine rise, myalgia." },
  { name: "Vitrectomy", how: "Removes blood from the vitreous and the pulling membranes.", why: "Persistent haemorrhage, tractional detachment.", pros: "Restores vision if the macula is healthy.", cons: "Operating-room surgery.", cx: "Cataract, retinal detachment, recurrent haemorrhage." }
 ],
 pearls: [
  { q: "Why screen a patient who sees well?", a: "Even proliferative disease can cause no symptoms. Treated in time, laser and anti-VEGF greatly reduce the risk of severe vision loss; found at the haemorrhage stage, the outlook is poorer." },
  { q: "What is the 4-2-1 rule?", a: "Severe non-proliferative disease: haemorrhages in all 4 quadrants, or venous beading in 2, or IRMA in 1. One criterion is enough: high risk of proliferative disease, refer promptly." },
  { q: "Pregnancy in a woman with type 1 diabetes: what about the eyes?", a: "An exam ideally before conception, then in the first trimester, as needed during pregnancy and within the year after delivery (Diabetes Canada): retinopathy can progress." }
 ],
 mnemonic: { title: "Severe disease: “4-2-1”", text: "Haemorrhages in **4** quadrants, venous beading in **2**, IRMA in **1**: one criterion is enough." },
 treatment: {
  first: [
   "**You**: check the date of the last eye exam and arrange it; aim for HbA1c, BP, lipids; make sure the result comes back to you.",
   "**Ophthalmologist**: grading, OCT; anti-VEGF for central oedema; panretinal laser or anti-VEGF for proliferative disease."
  ],
  refer: "Refer to ophthalmology: urgently for a sudden veil or floaters; within days for new vessels or severe disease; within a few weeks for macular oedema — treated in time, retinopathy rarely causes blindness.",
  pitfall: [
   "**Waiting for symptoms** before having the eyes examined: proliferative disease can be silent.",
   "**Rapid HbA1c drop** (intensified insulin, semaglutide) with advanced retinopathy: possible transient worsening, watch the eyes."
  ],
  qc: ["Screening is often done by the optometrist; the result must come back to the treating physician.", "Pregnancy: exam before conception or in the first trimester."]
 }
},
"r-dmla": {
 title: "Age-related macular degeneration (dry and neovascular)",
 oneLiner: "After 50, drusen then atrophy (dry) or new vessels (wet): any new distortion of straight lines calls for referral within days.",
 definition: "The macula ages: deposits (drusen) build up, then it wastes away (dry form) or new vessels leak into it (wet form). The wet form can be treated, provided you act fast.",
 anatomy: { text: "Beneath the photoreceptors, the pigment epithelium feeds them and recycles their waste; it rests on Bruch’s membrane, above the choroid. The macula, rich in cones, provides fine vision, reading and face recognition." },
 causal: {
  title: "From drusen to scar",
  steps: [
   { label: "Drusen under the epithelium", detail: "Lipid waste builds up under the pigment epithelium; large drusen = intermediate AMD.", kind: "cause" },
   { label: "Dry form: atrophy", detail: "The epithelium and cones disappear in patches (geographic atrophy): slow loss over years.", kind: "lesion" },
   { label: "Wet form: new vessels", detail: "Vessels from the choroid break through Bruch’s membrane.", kind: "mecanisme" },
   { label: "Fluid, blood: metamorphopsia", detail: "They leak and bleed under the macula: wavy lines, a central spot, over days or weeks.", kind: "signe" },
   { label: "Disciform scar", detail: "Without treatment, a fibrous scar destroys central vision.", kind: "complication" }
  ],
  levers: [
   { at: 0, label: "AREDS2 and smoking cessation", detail: "Intermediate AMD (or advanced in one eye): AREDS2 supplements; quitting smoking lowers the risk." },
   { at: 3, label: "Intravitreal anti-VEGF", detail: "Dries the new vessels; repeated injections, often for years." },
   { at: 3, label: "Amsler and prompt referral", detail: "Catch the wet form early: the sooner treatment starts, the more vision is kept." }
  ]
 },
 risk: ["Age > 50, especially > 75", "Smoking (the big modifiable factor)", "Family history, European ancestry", "Large drusen, pigment changes, advanced AMD in the other eye"],
 presentation: ["Wavy straight lines (metamorphopsia), a central spot", "Trouble reading and recognising faces; periphery preserved", "Dry: slow loss over years; wet: over days or weeks", "Often: drusen found in a patient with no symptoms"],
 exam: {
  signs: [
   { sign: "Yellowish drusen in the macula", why: "Large drusen or pigment changes = intermediate AMD: AREDS2." },
   { sign: "Sharply demarcated patches of atrophy", why: "Geographic atrophy: advanced dry AMD." },
   { sign: "Blood or fluid under the macula, grey-green elevation", why: "New vessels: wet AMD, to treat promptly." },
   { sign: "Distorted or missing lines on the Amsler grid", why: "A functional sign of wet AMD, usable at home." }
  ],
  tests: [
   { test: "Amsler grid, one eye at a time", when: "In the office, and regularly at home if intermediate AMD", read: "New wavy or missing lines: referral within days." },
   { test: "Macular OCT", when: "By the optometrist or ophthalmologist", read: "Fluid in or under the retina = active wet AMD." },
   { test: "Angiography (fluorescein, OCT angiography)", when: "By the ophthalmologist, for wet AMD", read: "Confirms and locates the new vessels." }
  ]
 },
 ddx: [
  { dx: "Central serous chorioretinopathy", clue: "Younger (30–50), corticosteroids, stress; serous elevation without drusen." },
  { dx: "Epiretinal membrane", clue: "Cellophane sheen, folds on OCT; slowly progressive metamorphopsia." },
  { dx: "Macular hole", clue: "A sharp central spot, a round hole on OCT." },
  { dx: "Diabetic macular oedema", clue: "Diabetes, exudates, microaneurysms." },
  { dx: "Hydroxychloroquine toxicity", clue: "Ring-shaped damage around the fovea, long-term treatment." }
 ],
 redFlags: ["New metamorphopsia or central spot: ophthalmology within days", "Blood under the macula on fundus exam: urgent referral", "Red, painful eye, falling vision after an injection: endophthalmitis, the same day"],
 cat: {
  vignette: "A 78-year-old former smoker: for 5 days, door frames have looked wavy to her left eye. Known drusen in both eyes.",
  algo: [
   { q: "New metamorphopsia or central spot?", yes: { t: "Possible wet AMD: ophthalmology within days.", urgent: true }, yesGo: 1, no: "", noGo: 2 },
   { q: "Fluid or blood on OCT?", yes: "Intravitreal anti-VEGF, monthly at first.", no: "Another cause: membrane, macular hole, central serous." },
   { q: "Large drusen or advanced AMD in one eye?", yes: "AREDS2, stop smoking, Amsler at home.", yesGo: 3, no: "Small drusen: no AREDS2; follow-up exam." },
   { q: "Geographic atrophy affecting vision?", yes: "Low-vision rehabilitation; newer treatments: Canadian availability to check.", no: "Follow-up; come back quickly if lines look wavy." }
  ],
  phases: [
   { phase: "observation", items: ["Early AMD: follow-up exam, Amsler, stop smoking", "Intermediate AMD: AREDS2, Amsler at home one eye at a time"] },
   { phase: "medical", items: ["Wet AMD: intravitreal anti-VEGF (bevacizumab, ranibizumab, aflibercept), monthly then spaced out according to OCT"] },
   { phase: "suivi", items: ["Low-vision rehabilitation if vision drops in both eyes", "Anti-VEGF: do not miss appointments"] }
  ],
  local: "In Quebec, anti-VEGF injections are given in ophthalmology clinics, often for years. If vision drops, refer to the public network’s low-vision rehabilitation services (CISSS or CIUSSS)."
 },
 treatments: [
  { name: "AREDS2 supplements", how: "Antioxidants and zinc slow progression to advanced AMD.", why: "Intermediate AMD, or advanced AMD in one eye.", pros: "Progression reduced by about 25% (AREDS).", cons: "No effect in early AMD; they do not prevent onset.", cx: "Digestive upset (zinc).", dose: "Vitamin C 500 mg, vitamin E 400 IU, lutein 10 mg, zeaxanthin 2 mg, zinc 80 mg, copper 2 mg daily.", pitfall: "The old beta-carotene formula in a smoker or ex-smoker: lung cancer risk." },
  { name: "Intravitreal anti-VEGF", how: "Blocks VEGF: the new vessels leak less and regress.", why: "Active wet AMD.", pros: "Stabilises vision in most, sometimes improves it.", cons: "Repeated injections, often for years.", cx: "Endophthalmitis (rare), transient IOP rise, pigment epithelial tear.", dose: "Bevacizumab 1.25 mg (off-label), ranibizumab 0.5 mg or aflibercept 2 mg; monthly at first.", refer: "As soon as wet AMD is suspected, within days." },
  { name: "Smoking cessation", how: "Reduces oxidative stress on the macula.", why: "Every patient who smokes.", pros: "The only big modifiable risk factor.", cons: "Hard; help often needed.", cx: "None." },
  { name: "Low-vision rehabilitation", how: "Magnifiers, lighting, electronic aids, training in eccentric viewing.", why: "Low vision in both eyes.", pros: "Preserves independence: reading, cooking, safety.", cons: "Does not restore vision.", cx: "None." }
 ],
 pearls: [
  { q: "Why does AREDS2 no longer contain beta-carotene?", a: "Beta-carotene raises the risk of lung cancer in smokers; AREDS2 replaced it with lutein and zeaxanthin." },
  { q: "Supplements for every patient with a few small drusen?", a: "No. AREDS showed no benefit in early AMD; supplements target intermediate AMD or advanced AMD in one eye." },
  { q: "How is the Amsler grid used?", a: "Reading glasses on, one eye covered, look at the central dot: new wavy, blurred or missing lines mean an eye visit within days." }
 ],
 treatment: {
  first: [
   "**You**: acuity, Amsler one eye at a time; stop smoking; AREDS2 only for intermediate AMD or advanced AMD in one eye.",
   "**Ophthalmologist**: OCT, angiography; anti-VEGF for wet AMD."
  ],
  refer: "Refer to ophthalmology: within days (under a week) for new metamorphopsia or a central spot; otherwise regular follow-up — treated early, wet AMD keeps more vision.",
  pitfall: [
   "**Beta-carotene** (old AREDS formula) in a smoker or ex-smoker: lung cancer.",
   "**Blaming a cataract** for recent vision loss with wavy lines: missed wet AMD."
  ],
  qc: ["Anti-VEGF in ophthalmology clinics, often for years.", "Low vision: public-network low-vision rehabilitation."]
 }
},
"r-hta": {
 title: "Hypertensive retinopathy",
 oneLiner: "Thin arterioles and nipped crossings when chronic; haemorrhages, cotton-wool spots and a swollen disc with very high BP: hypertensive emergency.",
 definition: "Blood pressure that is too high damages the retinal arterioles. A swollen disc with haemorrhages signals a hypertensive emergency.",
 anatomy: { text: "Retinal arterioles regulate themselves (autoregulation): they constrict when BP rises. They can be seen directly on fundus exam, a window on the microcirculation of the brain and kidney." },
 causal: {
  title: "From a tightening arteriole to a swelling disc",
  steps: [
   { label: "Vasoconstriction, sclerosis", detail: "Chronic high BP: narrowed arterioles, thickened walls (“copper wiring”), nipped artery–vein crossings.", kind: "cause" },
   { label: "The barrier gives way", detail: "A severe surge: the wall fails; flame haemorrhages, hard exudates.", kind: "mecanisme" },
   { label: "Micro-infarcts", detail: "Closed arterioles: cotton-wool spots (ischaemic nerve fibres).", kind: "lesion" },
   { label: "Swollen disc, macular star", detail: "Disc oedema and exudates in a star: malignant stage, organ damage.", kind: "signe" },
   { label: "Damage to other organs", detail: "The same process in the brain (encephalopathy, stroke), kidney and heart.", kind: "complication" }
  ],
  levers: [
   { at: 3, label: "Controlled BP lowering", detail: "In hospital, often IV: about 10–15% of mean arterial pressure in the first hour, no more than 25% on day 1." },
   { at: 0, label: "Long-term treatment", detail: "Systolic target < 130 mmHg if tolerated (Hypertension Canada 2025)." },
   { at: 4, label: "Look for other organ damage", detail: "Creatinine, urinalysis, ECG, troponin, brain imaging depending on symptoms." }
  ]
 },
 risk: ["Poorly controlled or untreated hypertension, medication not taken", "Secondary hypertension: kidney, hyperaldosteronism, phaeochromocytoma, coarctation", "Pre-eclampsia", "Cocaine, amphetamines"],
 presentation: ["Often no symptoms (chronic form)", "Emergency: blurred vision, headache, nausea, confusion", "Chest pain, dyspnoea, oliguria depending on the organs involved", "Found on fundus exam of a severely hypertensive patient"],
 exam: {
  signs: [
   { sign: "Thin arterioles, nipped crossings, copper wiring", why: "Chronic hypertension (mild Wong-Mitchell grade)." },
   { sign: "Flame haemorrhages, cotton-wool spots, exudates", why: "Moderate grade; with very high BP, look for an emergency." },
   { sign: "Swollen disc, macular star", why: "Severe (malignant) grade: hypertensive emergency." },
   { sign: "BP in both arms, neurological signs", why: "Encephalopathy, stroke, dissection: they change the lowering target." }
  ],
  tests: [
   { test: "Repeated BP, in both arms", when: "Immediately", read: "Above 180/110 with organ damage = hypertensive emergency." },
   { test: "Creatinine, electrolytes, urinalysis, CBC with smear", when: "In the ED", read: "Kidney damage, thrombotic microangiopathy." },
   { test: "ECG, troponin, brain imaging", when: "Depending on symptoms", read: "Cardiac or brain involvement." },
   { test: "Dilated fundus exam or photo", when: "By the ophthalmologist, as needed", read: "Grading; follow-up of regression." }
  ]
 },
 ddx: [
  { dx: "Papilloedema (raised intracranial pressure)", clue: "Both eyes, normal or mildly raised BP; headaches, brain imaging." },
  { dx: "Diabetic retinopathy", clue: "Many microaneurysms, known diabetes." },
  { dx: "Retinal vein occlusion", clue: "One eye, one venous territory." },
  { dx: "Neuroretinitis", clue: "One eye, macular star, often infectious (Bartonella)." }
 ],
 redFlags: ["Swollen disc or haemorrhages with very high BP: hypertensive emergency, to the ED now", "Headache, confusion, chest pain, oliguria: other organs involved", "Pregnancy, high BP and blurred vision: pre-eclampsia, obstetric emergency"],
 cat: {
  vignette: "A 45-year-old man in the ED: headache and blurred vision in both eyes. BP 230/140. Swollen discs, cotton-wool spots, flame haemorrhages.",
  algo: [
   { q: "BP 180/110 or higher?", yes: "", yesGo: 1, no: "Chronic hypertension: treat as an outpatient, fundus at follow-up." },
   { q: "Swollen disc, haemorrhages, cotton-wool spots?", yes: { t: "Hypertensive emergency: admit, controlled IV lowering.", urgent: true }, yesGo: 2, no: "", noGo: 3 },
   { q: "Stroke, dissection or pre-eclampsia?", yes: { t: "A target specific to each situation: specialised team.", urgent: true }, no: "About 10–15% of MAP in the first hour, ≤ 25% on day 1." },
   { q: "Other organ damage: brain, heart, kidney?", yes: { t: "Hypertensive emergency: admit, controlled lowering.", urgent: true }, no: "No damage: no rapid lowering; adjust oral treatment." }
  ],
  phases: [
   { phase: "medical", items: ["Hypertensive emergency: admission, titratable IV antihypertensive; about 10–15% of mean BP in the first hour, no more than 25% on day 1", "Then switch to oral; long term, systolic target < 130 mmHg if tolerated"] },
   { phase: "suivi", items: ["Follow-up fundus exam: haemorrhages and spots fade as BP comes down; arteriolar changes remain", "Look for secondary hypertension in the young or if resistant"] }
  ],
  local: "In Quebec, a hypertensive emergency is treated in the ED or intensive care (internal medicine); the ophthalmologist confirms and documents the fundus. Hypertension follow-up goes back to the family physician."
 },
 treatments: [
  { name: "Controlled BP lowering (hypertensive emergency)", how: "A titratable IV antihypertensive, in a monitored setting.", why: "Very high BP with organ damage, including severe retinopathy.", pros: "Stops organ damage.", cons: "Too fast, it can cause ischaemia (brain, kidney, optic nerve).", cx: "Hypotension, ischaemic stroke.", refer: "ED, the same day.", pitfall: "Normalising BP within minutes." },
  { name: "Long-term hypertension treatment", how: "Oral drugs and lifestyle, regular follow-up.", why: "Any hypertensive retinopathy.", pros: "Acute lesions regress; prevents stroke and retinal vascular occlusions.", cons: "Arteriolar changes remain.", cx: "Depends on the drugs.", dose: "Systolic target < 130 mmHg if tolerated (Hypertension Canada 2025)." },
  { name: "Secondary hypertension work-up", how: "Kidney, aldosterone and renin, metanephrines, coarctation depending on context.", why: "Young patient, resistant or malignant hypertension.", pros: "Sometimes a curable cause.", cons: "Many tests.", cx: "None specific to the work-up." }
 ],
 pearls: [
  { q: "What separates the chronic form from the emergency?", a: "Thin arterioles and nipped crossings = long-standing hypertension. Haemorrhages, cotton-wool spots and above all a swollen disc with very high BP = hypertensive emergency." },
  { q: "Why not normalise BP all at once?", a: "The organs have adapted to high pressure (shifted autoregulation): a sudden drop starves them of blood. Lower by about 10–15% in the first hour, no more than 25% on day 1." },
  { q: "Swollen discs, BP 240/130: MRI first?", a: "No: it is first a hypertensive emergency, so treat the BP; imaging follows the neurological signs. The picture can mimic raised intracranial pressure." }
 ],
 mnemonic: { title: "Wong-Mitchell: “Thin, Leak, Swollen”", text: "**Thin** (mild: thin arterioles, nipped crossings), **Leak** (moderate: haemorrhages, spots, exudates), **Swollen** (severe: swollen disc = emergency)." },
 treatment: {
  first: [
   "**You**: repeat BP, fundus; creatinine, urinalysis, ECG; to the ED for a swollen disc or haemorrhages with very high BP.",
   "**ED, internal medicine**: controlled IV lowering; **ophthalmologist**: confirm and follow the fundus."
  ],
  refer: "Refer: immediately to the ED for a swollen disc, haemorrhages or cotton-wool spots with BP ≥ 180/110 — this is organ damage; chronic hypertension without acute signs: family physician.",
  pitfall: [
   "**Short-acting nifedipine** (sublingual) or any abrupt drop: brain or optic nerve ischaemia.",
   "**Blaming a swollen disc on raised intracranial pressure** without measuring BP."
  ],
  qc: ["Hypertensive emergency: ED or intensive care; the ophthalmologist documents the fundus.", "Hypertension follow-up by the family physician."]
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
 },
 "r-diabete": {
  essentials: [
   "**Screen**: type 2 at diagnosis; type 1 from 5 years after onset (from age 15).",
   "No retinopathy: type 1 **every year**, type 2 **every 1–2 years** (Diabetes Canada).",
   "**New vessels** or severe disease (4-2-1 rule): ophthalmologist **within days**.",
   "Centre-involving macular oedema: **anti-VEGF**; proliferative disease: **panretinal laser** or anti-VEGF.",
   "HbA1c, **BP**, lipids; **pregnancy**: eye exam in the first trimester."
  ],
  cloze: [
   "Severe non-proliferative disease: haemorrhages in 4 quadrants, venous beading in 2, [[IRMA]] in 1.",
   "Proliferative disease is treated with [[panretinal|PRP]] laser or anti-VEGF.",
   "Type 2 diabetes without retinopathy: next eye exam in [[1–2 years|1-2 years|2 years]].",
   "Type 1 diabetes: first screening [[5 years|five years]] after diagnosis, from age 15.",
   "On top of a statin, [[fenofibrate]] can slow established retinopathy (type 2)."
  ],
  triage: [
   { s: "Type 2 diabetes for 15 years: a sudden veil and a shower of black dots in the right eye this morning.", u: "urgent", why: "Probable vitreous haemorrhage: urgent ophthalmology, B-scan if the fundus is hidden." },
   { s: "Screening photos: new vessels on the disc, vision 6/6, no symptoms.", u: "rapide", why: "Proliferative disease: ophthalmologist within days (panretinal laser or anti-VEGF)." },
   { s: "Type 2 diabetes for 3 years, no retinopathy at the last exam a year ago.", u: "routine", why: "Next screening in about 1 year (1–2 year interval)." }
  ],
  cues: ["Fan of new vessels on the disc", "Ring of hard exudates around the macula"]
 },
 "r-dmla": {
  essentials: [
   "New **metamorphopsia** after 50: wet AMD until proven otherwise, ophthalmology **within days**.",
   "Wet AMD: intravitreal **anti-VEGF**, repeated injections.",
   "**AREDS2**: intermediate AMD or advanced in one eye; useless in early AMD.",
   "**Smoking**: the big modifiable factor; no **beta-carotene** for smokers.",
   "**Amsler** one eye at a time, at home, if large drusen."
  ],
  cloze: [
   "Yellowish deposits under the pigment epithelium are called [[drusen]].",
   "Advanced dry AMD is called [[geographic]] atrophy.",
   "AREDS2 replaced beta-carotene with lutein and [[zeaxanthin]].",
   "Straight lines that look wavy are [[metamorphopsia]].",
   "The new vessels of wet AMD break through [[Bruch’s|Bruch's|Bruch]] membrane."
  ],
  triage: [
   { s: "An 80-year-old woman: for 3 days, wavy lines and a grey spot in the centre of the right eye.", u: "rapide", why: "Probable wet AMD: ophthalmology within days, anti-VEGF." },
   { s: "A 72-year-old man: a few small drusen on fundus exam, vision 6/6, no symptoms.", u: "routine", why: "Early AMD: no AREDS2; follow-up, stop smoking, Amsler." },
   { s: "A patient on anti-VEGF: red, painful eye, falling vision 3 days after the injection.", u: "urgent", why: "Possible endophthalmitis: ophthalmologist the same day." }
  ],
  cues: ["Wavy lines, central spot, over 50", "Yellowish drusen clustered in the macula"]
 },
 "r-hta": {
  essentials: [
   "Thin arterioles, **nipped crossings**: chronic hypertension, note it, not an emergency.",
   "**Haemorrhages, cotton-wool spots**: moderate grade; with very high BP, look for an emergency.",
   "**Swollen disc** and BP ≥ 180/110: **hypertensive emergency**, to the ED.",
   "**Controlled** lowering: about 10–15% in the first hour, no more than 25% on day 1.",
   "Young or resistant hypertension: look for **secondary hypertension**."
  ],
  cloze: [
   "White, fluffy retinal micro-infarcts are [[cotton-wool]] spots.",
   "Hard exudates radiating around the fovea form a [[macular star|star]].",
   "Retinopathy with a swollen disc and very high BP: [[hypertensive]] emergency.",
   "Avoid sublingual [[nifedipine]]: BP drops too fast.",
   "The three-grade classification (mild, moderate, severe) is Wong and [[Mitchell]]’s."
  ],
  triage: [
   { s: "A 48-year-old man: headache, blurred vision, BP 228/134, swollen discs.", u: "urgent", why: "Hypertensive emergency: ED now, controlled IV lowering." },
   { s: "A 64-year-old woman, treated hypertension: nipped crossings on fundus exam, normal vision, BP 142/88.", u: "routine", why: "Mild chronic retinopathy: adjust treatment, usual follow-up." },
   { s: "A woman 32 weeks pregnant: BP 168/112, headache, blurred vision.", u: "urgent", why: "Possible severe pre-eclampsia: obstetric emergency now." }
  ],
  cues: ["Swollen discs, macular star, BP 230/140", "Nipped artery–vein crossings, copper wiring"]
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
 add("r-diabete", {
  "IMG3-031": { caption: "Proliferative diabetic retinopathy: new vessels and fibrous tissue", look: "Look at the disc and what is growing on it.", reveal: ["A fan of fine new vessels on and around the disc: proliferative diabetic retinopathy.", "White patches on the retinal surface: scar tissue that accompanies the new vessels; it can pull on the retina.", "Risk of vitreous haemorrhage and tractional detachment: ophthalmologist within days (panretinal laser or anti-VEGF)."] },
  "IMG3-033": { caption: "Diabetic macular oedema: hard exudates around the macula", look: "Find the yellow deposits and where they sit relative to the centre.", reveal: ["Clusters of yellow hard exudates around the macula: lipids leaked from the capillaries.", "Diabetic macular oedema: OCT, then anti-VEGF if it involves the centre.", "“PRETREATMENT” label: photo taken before treatment."] },
  "IMG3-032": { caption: "Non-proliferative (“background”) diabetic retinopathy", look: "Look for small red dots between the vessels.", reveal: ["Scattered small red dots: microaneurysms and small haemorrhages.", "No visible new vessels: non-proliferative disease, follow-up by severity.", "Glucose and BP control slows progression."] }
 });
 add("r-dmla", {
  "OPH-265": { caption: "High-risk intermediate AMD: macular drusen", look: "Look at the yellow deposits in the centre of the image.", reveal: ["Many yellow drusen of various sizes clustered in the macula: intermediate AMD.", "Management: AREDS2, stop smoking, Amsler at home one eye at a time.", "New wavy lines: ophthalmology within days (wet AMD)."] },
  "OPH-264": { caption: "Early AMD: small drusen near the fovea", look: "Look for small yellow dots around the centre of the macula.", reveal: ["Scattered small drusen around the fovea: early AMD.", "No AREDS2 at this stage (no proven benefit); stop smoking and follow up."] }
 });
 add("r-hta", {
  "OPH-257": { caption: "Malignant hypertension in a 52-year-old man", look: "Look at the disc, then at the white and red spots around it.", reveal: ["Swollen disc with blurred margins: severe (malignant) grade, hypertensive emergency.", "Many white cotton-wool spots around the disc and along the arcades: micro-infarcts.", "Flame haemorrhages near the disc.", "Management: ED, controlled BP lowering, search for other organ damage."] },
  "OPH-256": { caption: "Hypertensive retinopathy: swollen disc, cotton-wool spots, exudates", look: "Compare the area between the disc and the fovea with the rest.", reveal: ["Hard exudates between the disc and the fovea: an early macular star.", "Cotton-wool spots and haemorrhages near the swollen disc.", "A 37-year-old man: look for secondary hypertension."] }
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
