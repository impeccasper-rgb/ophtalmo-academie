#!/usr/bin/env python3
"""Generate data/cases-open.js (G.OPH.openCases + media mo-xx) from imgsrc3/catalog3.json.
Only images present in the catalogue (licence checked at build) are emitted.
Hotspots placed after viewing each image (percent of the WHOLE image)."""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
ROOT = sys.argv[1]
cat = {c["id"]: c for c in json.load(open(ROOT + "/imgsrc3/catalog3.json", encoding="utf-8"))}
T = lambda fr, en: {"fr": fr, "en": en}
H = lambda x, y, r, fr, en, dec=True: {"x": x, "y": y, "r": r, "decisive": dec, "label": T(fr, en)}

C = []  # (case, media)
def case(id_, topic, level, photo, q, options, answer, why, reveal, alt, hots):
    C.append((id_, topic, level, photo, q, options, answer, why, reveal, alt, hots))

# ───────── Fond d’œil / rétine (general) ─────────
case("oc-01", "general", 1, "IMG3-024",
 T("Fond d’œil gauche d’un étudiant sans plainte visuelle. Le petit croissant pigmenté au bord temporal de la papille est :", "Left fundus of a student with no visual complaint. The small pigmented crescent at the temporal edge of the disc is:"),
 [T("Une variante normale", "A normal variant"), T("Un nævus choroïdien suspect à photographier", "A suspicious choroidal naevus to photograph"), T("Un signe d’œdème papillaire", "A sign of optic disc oedema"), T("Une atrophie glaucomateuse", "Glaucomatous atrophy")], 0,
 [T("Juste : la description source le dit non pathologique. Le reste est normal : macula au centre, veines plus sombres et un peu plus larges que les artères.", "Correct: the source describes it as non-pathological. The rest is normal: macula in the centre, veins darker and slightly wider than arteries."),
  T("Un nævus est une lésion choroïdienne grise, à distance ou au contact de la papille; ce croissant épouse le bord du disque.", "A naevus is a grey choroidal lesion; this crescent hugs the disc margin."),
  T("L’œdème papillaire efface les bords et voile les vaisseaux; ici les bords sont nets.", "Disc oedema blurs the margins and obscures the vessels; here the margins are sharp."),
  T("L’atrophie glaucomateuse s’apprécie sur l’anneau neurorétinien et l’excavation, pas sur un liseré pigmenté.", "Glaucomatous damage is judged on the rim and cup, not on a pigmented rim edge.")],
 T("Fond d’œil normal : papille à bords nets, croissant pigmenté temporal physiologique, macula centrée.", "Normal fundus: sharp disc margins, physiological temporal pigment crescent, centred macula."),
 T("Fond d’œil gauche normal : papille à gauche de l’image, macula au centre.", "Normal left fundus: disc on the left of the image, macula in the centre."),
 [H(21, 52, 5, "Croissant pigmenté temporal (non pathologique)", "Temporal pigment crescent (non-pathological)"),
  H(16, 47, 7, "Papille à bords nets", "Optic disc with sharp margins", False),
  H(50, 50, 7, "Macula / fovéa", "Macula / fovea", False)])

case("oc-02", "general", 2, "IMG3-028",
 T("Céphalées matinales et éclipses visuelles. Fond d’œil. Que montre la papille?", "Morning headaches and transient visual obscurations. Fundus photo. What does the disc show?"),
 [T("Papille normale", "Normal disc"), T("Papille gonflée à bords flous, hémorragies autour : œdème papillaire", "Swollen disc with blurred margins and surrounding haemorrhages: disc oedema"), T("Excavation glaucomateuse", "Glaucomatous cupping"), T("Tache rouge cerise", "Cherry-red spot")], 1,
 [T("Les bords ne sont pas nets et les vaisseaux sont masqués au bord du disque.", "The margins are not sharp and vessels are obscured at the disc edge."),
  T("Juste : papille gonflée (source : papilloedème par hypertension intracrânienne). Le mot « papilloedème » est réservé à l’œdème par HTIC : examen neurologique et imagerie cérébrale en urgence.", "Correct: swollen disc (source: papilledema from raised intracranial pressure). “Papilledema” means disc oedema from raised ICP: urgent neurological exam and brain imaging."),
  T("L’excavation glaucomateuse creuse la papille; ici elle est surélevée.", "Glaucomatous cupping hollows the disc; here it is elevated."),
  T("La tache rouge cerise est maculaire (occlusion artérielle), pas papillaire.", "A cherry-red spot is macular (artery occlusion), not at the disc.")],
 T("Papille gonflée, bords effacés, hémorragies péripapillaires : papilloedème.", "Swollen disc, effaced margins, peripapillary haemorrhages: papilledema."),
 T("Papilloedème : papille gonflée à bords flous.", "Papilledema: swollen disc with blurred margins."),
 [H(47, 45, 13, "Papille gonflée, bords effacés", "Swollen disc, effaced margins"),
  H(61, 58, 7, "Hémorragies en flammèche péripapillaires", "Peripapillary flame haemorrhages", False)])

case("oc-03", "general", 1, "IMG3-029",
 T("Baisse visuelle brutale et indolore d’un œil il y a 3 heures. Fond d’œil. Diagnostic?", "Sudden painless loss of vision in one eye 3 hours ago. Fundus. Diagnosis?"),
 [T("Occlusion de la veine centrale de la rétine", "Central retinal vein occlusion"), T("Occlusion de l’artère centrale de la rétine", "Central retinal artery occlusion"), T("DMLA exsudative", "Neovascular AMD"), T("Trou maculaire", "Macular hole")], 1,
 [T("L’OVCR donne des hémorragies dans les quatre quadrants et des veines dilatées, absentes ici.", "CRVO gives four-quadrant haemorrhages and dilated veins, absent here."),
  T("Juste : tache rouge cerise au centre d’une rétine pâle et œdémateuse. C’est un AVC de l’œil : filière AVC en urgence (imagerie, carotides, cœur) et recherche d’artérite à cellules géantes après 50 ans.", "Correct: cherry-red spot within a pale, swollen retina. This is an eye stroke: urgent stroke pathway (imaging, carotids, heart) and look for giant cell arteritis after 50."),
  T("La DMLA exsudative donne liquide, hémorragie ou exsudats maculaires, pas une rétine blanchie.", "Neovascular AMD gives macular fluid, blood or exudate, not a whitened retina."),
  T("Le trou maculaire n’entraîne ni blanchiment rétinien ni perte brutale aussi sévère.", "A macular hole causes no retinal whitening and no such abrupt severe loss.")],
 T("Tache rouge cerise sur rétine pâle et œdémateuse : occlusion de l’artère centrale de la rétine.", "Cherry-red spot on a pale, swollen retina: central retinal artery occlusion."),
 T("Tache rouge cerise et œdème rétinien.", "Cherry-red spot and retinal swelling."),
 [H(54, 56, 6, "Tache rouge cerise (fovéa)", "Cherry-red spot (fovea)"),
  H(35, 40, 9, "Rétine pâle et œdémateuse", "Pale, swollen retina", False)])

case("oc-04", "general", 2, "IMG3-030",
 T("Baisse visuelle d’un œil chez un hypertendu de 68 ans. (a) fond d’œil, (b) angiographie à la fluorescéine. Diagnostic?", "Visual loss in one eye in a 68-year-old with hypertension. (a) fundus, (b) fluorescein angiography. Diagnosis?"),
 [T("Rétinopathie diabétique non proliférante", "Non-proliferative diabetic retinopathy"), T("Occlusion de l’artère centrale", "Central retinal artery occlusion"), T("Occlusion de la veine centrale de la rétine", "Central retinal vein occlusion"), T("Rétinopathie de Valsalva", "Valsalva retinopathy")], 2,
 [T("La RD a des hémorragies plus éparses avec microanévrismes et exsudats, pas ce semis diffus autour de la papille.", "Diabetic retinopathy has scattered haemorrhages with microaneurysms and exudates, not this diffuse spread around the disc."),
  T("L’OACR blanchit la rétine sans hémorragies diffuses.", "CRAO whitens the retina without diffuse haemorrhages."),
  T("Juste : hémorragies intrarétiniennes dans tout le fond d’œil (a); en angiographie, ces hémorragies masquent la fluorescence choroïdienne (taches sombres, b). Surveiller la néovascularisation de l’iris (glaucome néovasculaire).", "Correct: intraretinal haemorrhages throughout the fundus (a); on angiography they block the choroidal fluorescence (dark spots, b). Watch for iris neovascularisation (neovascular glaucoma)."),
  T("La rétinopathie de Valsalva donne une hémorragie prérétinienne localisée, souvent maculaire.", "Valsalva retinopathy gives a localised, often macular, preretinal haemorrhage.")],
 T("Hémorragies intrarétiniennes diffuses; masquage de la fluorescence en angiographie : OVCR.", "Diffuse intraretinal haemorrhages; blocked fluorescence on angiography: CRVO."),
 T("OVCR : fond d’œil (a) et angiographie (b).", "CRVO: fundus (a) and angiography (b)."),
 [H(18, 35, 9, "Hémorragies intrarétiniennes diffuses", "Diffuse intraretinal haemorrhages"),
  H(36, 48, 6, "Papille", "Optic disc", False),
  H(70, 25, 8, "Taches sombres : fluorescence masquée par le sang", "Dark spots: fluorescence blocked by blood", False)])

case("oc-05", "general", 2, "IMG3-031",
 T("Diabète de type 1 depuis 20 ans, jamais examiné. Que faut-il voir sur et autour de la papille?", "Type 1 diabetes for 20 years, never examined. What should you see on and around the disc?"),
 [T("Des vaisseaux normaux", "Normal vessels"), T("Un lacis de néovaisseaux : rétinopathie diabétique proliférante", "A tuft of new vessels: proliferative diabetic retinopathy"), T("Un œdème papillaire", "Disc oedema"), T("Des collatérales optociliaires", "Optociliary shunt vessels")], 1,
 [T("Le réseau fin et anarchique qui couvre la papille n’existe pas normalement.", "The fine, disorganised network covering the disc is not normal."),
  T("Juste : néovaisseaux et tissu fibreux à la surface de la rétine (source NEI). Risque d’hémorragie du vitré et de décollement tractionnel : panphotocoagulation et/ou anti-VEGF rapidement.", "Correct: new vessels and fibrous tissue on the retinal surface (NEI source). Risk of vitreous haemorrhage and tractional detachment: prompt panretinal photocoagulation and/or anti-VEGF."),
  T("L’œdème papillaire gonfle le disque et efface ses bords sans créer de lacis vasculaire.", "Disc oedema swells the disc without a vascular tuft."),
  T("Les collatérales optociliaires sont quelques gros vaisseaux qui plongent au bord du disque, pas un réseau fin.", "Optociliary shunts are a few large vessels diving at the disc edge, not a fine network.")],
 T("Lacis de néovaisseaux sur et autour de la papille : RD proliférante.", "Tuft of new vessels on and around the disc: proliferative DR."),
 T("Rétinopathie diabétique proliférante (NEI).", "Proliferative diabetic retinopathy (NEI)."),
 [H(50, 44, 12, "Réseau de néovaisseaux sur la papille", "New-vessel network on the disc")])

case("oc-06", "general", 2, "IMG3-033",
 T("Diabétique, vision centrale floue. Photo avant traitement. Les dépôts jaunes autour du centre sont :", "Diabetic patient with blurred central vision. Pre-treatment photo. The yellow deposits around the centre are:"),
 [T("Des drusen", "Drusen"), T("Des nodules cotonneux", "Cotton-wool spots"), T("Des exsudats lipidiques d’un œdème maculaire diabétique", "Lipid exudates of diabetic macular oedema"), T("Des cicatrices de laser", "Laser scars")], 2,
 [T("Les drusen sont des dépôts ronds sous l’EPR de la DMLA, sans contexte diabétique.", "Drusen are round sub-RPE deposits of AMD, not diabetic."),
  T("Les nodules cotonneux sont blancs, flous, en surface (ischémie des fibres), pas jaunes et nets.", "Cotton-wool spots are white, fluffy and superficial, not crisp and yellow."),
  T("Juste (source : œdème maculaire diabétique, NEI) : les exsudats marquent la fuite de liquide autour de la fovéa; l’OCT quantifie l’œdème, le traitement de première ligne est l’anti-VEGF intravitréen.", "Correct (source: diabetic macular oedema, NEI): exudates mark leakage around the fovea; OCT measures the oedema; first-line treatment is intravitreal anti-VEGF."),
  T("La photo est étiquetée « avant traitement » : il n’y a pas encore de laser.", "The photo is labelled “pretreatment”: no laser yet.")],
 T("Dépôts jaunes groupés autour du centre : exsudats d’un œdème maculaire diabétique.", "Yellow deposits clustered around the centre: exudates of diabetic macular oedema."),
 T("Œdème maculaire diabétique avant traitement (NEI).", "Diabetic macular oedema before treatment (NEI)."),
 [H(61, 43, 9, "Dépôts jaunes (exsudats)", "Yellow deposits (exudates)"),
  H(45, 69, 8, "Dépôts jaunes (exsudats)", "Yellow deposits (exudates)")])

case("oc-07", "general", 2, "IMG3-034",
 T("Éclairs, pluie de mouches volantes puis voile. Imagerie grand champ de la périphérie. Lésion?", "Flashes, a shower of floaters, then a curtain. Wide-field peripheral image. Lesion?"),
 [T("Déchirure en fer à cheval avec décollement de rétine", "Horseshoe tear with retinal detachment"), T("Trou maculaire", "Macular hole"), T("Rétinoschisis sénile", "Senile retinoschisis"), T("Palissade sans déchirure", "Lattice degeneration without a tear")], 0,
 [T("Juste : la rétine présente un défaut en fer à cheval (source). Décollement rhegmatogène : avis rétine urgent, surtout si la macula est encore à plat.", "Correct: the retina has a horseshoe-shaped defect (source). Rhegmatogenous detachment: urgent retina referral, especially if the macula is still on."),
  T("Un trou maculaire est central, pas en périphérie.", "A macular hole is central, not peripheral."),
  T("Le rétinoschisis est un clivage lisse, en dôme, sans déchirure en fer à cheval.", "Retinoschisis is a smooth dome-shaped split without a horseshoe tear."),
  T("La palissade est une zone amincie quadrillée; ici il y a une rupture en fer à cheval.", "Lattice is a thin, latticed area; here there is a horseshoe break.")],
 T("Défaut rétinien en fer à cheval en périphérie : décollement de rétine rhegmatogène.", "Peripheral horseshoe-shaped retinal defect: rhegmatogenous retinal detachment."),
 T("Décollement de rétine sur déchirure en fer à cheval (imagerie grand champ).", "Retinal detachment from a horseshoe tear (wide-field image)."),
 [H(46, 73, 9, "Défaut rétinien en fer à cheval", "Horseshoe-shaped retinal defect")])

case("oc-08", "general", 1, "IMG3-020",
 T("OCT maculaire de l’œil droit d’un homme de 24 ans. Interprétation?", "Macular OCT of the right eye of a 24-year-old man. Interpretation?"),
 [T("Macula normale", "Normal macula"), T("Œdème maculaire", "Macular oedema"), T("Trou maculaire", "Macular hole"), T("Décollement séreux rétinien", "Serous retinal detachment")], 0,
 [T("Juste : dépression fovéolaire régulière, couches bien alignées, carte d’épaisseur entièrement verte (5–95 %), indice de qualité « Good 84 ». Toujours vérifier la qualité avant d’interpréter.", "Correct: regular foveal pit, well-aligned layers, thickness map all green (5–95%), quality index “Good 84”. Always check quality before interpreting."),
  T("Pas d’épaississement ni d’espaces kystiques; tous les secteurs sont dans la norme.", "No thickening or cystic spaces; all sectors are within normal limits."),
  T("La dépression fovéolaire est intacte, sans interruption des couches.", "The foveal pit is intact with no break in the layers."),
  T("Aucun espace sombre entre la rétine et l’épithélium pigmentaire.", "No dark space between the retina and the pigment epithelium.")],
 T("Dépression fovéolaire normale, carte d’épaisseur verte : OCT maculaire normal.", "Normal foveal pit, green thickness map: normal macular OCT."),
 T("OCT spectral d’une macula saine (œil droit).", "Spectral-domain OCT of a healthy macula (right eye)."),
 [H(45, 19, 7, "Dépression fovéolaire normale", "Normal foveal pit"),
  H(42, 61, 9, "Carte d’épaisseur : secteurs verts (normaux)", "Thickness map: green (normal) sectors", False),
  H(54, 2, 4, "Indice de qualité « Good 84 »", "Quality index “Good 84”", False)])

case("oc-09", "general", 2, "IMG3-021",
 T("Homme de 35 ans, vision floue et déformée d’un œil depuis une semaine. OCT (photo de l’écran). L’espace sombre en dôme est :", "35-year-old man, blurred and distorted vision in one eye for a week. OCT (photo of the screen). The dark dome-shaped space is:"),
 [T("Du liquide sous la rétine : décollement séreux de la choriorétinopathie séreuse centrale", "Fluid under the retina: serous detachment of central serous chorioretinopathy"), T("Un trou maculaire transfixiant", "A full-thickness macular hole"), T("Une membrane épirétinienne", "An epiretinal membrane"), T("Une atrophie de l’EPR", "RPE atrophy")], 0,
 [T("Juste (source : CRSC) : rétine neurosensorielle soulevée par un espace hyporéflectif au-dessus de l’EPR. Chercher une prise de corticoïdes; la plupart des épisodes régressent spontanément.", "Correct (source: CSC): neurosensory retina lifted by a hyporeflective space above the RPE. Ask about steroid use; most episodes resolve spontaneously."),
  T("Un trou interrompt toute l’épaisseur de la rétine; ici la rétine est continue au-dessus de l’espace.", "A hole breaks the full retinal thickness; here the retina is continuous over the space."),
  T("La membrane épirétinienne est une ligne brillante à la surface interne, pas un espace sous la rétine.", "An ERM is a bright line on the inner surface, not a space under the retina."),
  T("L’atrophie amincit l’EPR sans soulever la rétine.", "Atrophy thins the RPE without lifting the retina.")],
 T("Espace hyporéflectif en dôme sous la rétine neurosensorielle : décollement séreux (CRSC).", "Hyporeflective dome under the neurosensory retina: serous detachment (CSC)."),
 T("OCT : choriorétinopathie séreuse centrale.", "OCT: central serous chorioretinopathy."),
 [H(53, 57, 10, "Espace hyporéflectif sous la rétine", "Hyporeflective space under the retina")])

# ───────── Cornée ─────────
case("oc-10", "cornee", 1, "IMG3-035",
 T("Œil rouge et larmoyant depuis 2 jours; fluorescéine au bleu cobalt. Diagnostic?", "Red, watery eye for 2 days; fluorescein under cobalt blue. Diagnosis?"),
 [T("Abrasion cornéenne", "Corneal abrasion"), T("Kératite épithéliale herpétique (dendrite)", "Herpes simplex epithelial keratitis (dendrite)"), T("Kératite ponctuée superficielle", "Superficial punctate keratitis"), T("Kératite bactérienne", "Bacterial keratitis")], 1,
 [T("Une abrasion prend la fluorescéine en plage à bords nets, sans ramifications.", "An abrasion stains as a sharp-edged patch, without branches."),
  T("Juste : prise de fluorescéine ramifiée (dendritique). Antiviral; pas de corticoïde topique seul sur une kératite épithéliale active.", "Correct: branching (dendritic) fluorescein staining. Antiviral; no topical steroid alone on active epithelial keratitis."),
  T("La KPS donne des points fins dispersés, pas une ligne ramifiée.", "SPK gives fine scattered dots, not a branching line."),
  T("La kératite bactérienne forme un infiltrat blanc dense sous un défaut épithélial.", "Bacterial keratitis forms a dense white infiltrate under an epithelial defect.")],
 T("Ulcère épithélial ramifié coloré à la fluorescéine : dendrite herpétique.", "Branching epithelial ulcer stained with fluorescein: herpetic dendrite."),
 T("Aspect dendritique après fluorescéine.", "Dendritic pattern after fluorescein."),
 [H(52, 28, 11, "Ulcère ramifié coloré (dendrite)", "Branching stained ulcer (dendrite)")])

case("oc-11", "cornee", 3, "IMG3-036",
 T("Porteur de lentilles traité tardivement pour une kératite à Acanthamoeba. Que montre cette photo?", "Contact lens wearer treated late for Acanthamoeba keratitis. What does this photo show?"),
 [T("Un infiltrat stromal en anneau typique", "A typical stromal ring infiltrate"), T("Une fonte cornéenne avec vascularisation", "Corneal melting with vascularisation"), T("Une dendrite herpétique", "A herpetic dendrite"), T("Des guttae", "Guttae")], 1,
 [T("L’anneau est le signe classique, mais il n’est pas décrit sur cette image (source : fonte et vascularisation).", "The ring is the classic sign, but it is not described on this image (source: melting and vascularisation)."),
  T("Juste (source) : cornée opaque fondue et vascularisée, stade évolué. D’où l’intérêt d’y penser tôt devant une douleur disproportionnée chez un porteur de lentilles.", "Correct (source): opaque, melting, vascularised cornea, an advanced stage. Hence thinking of it early when pain is out of proportion in a lens wearer."),
  T("Une dendrite est une lésion épithéliale fine et ramifiée.", "A dendrite is a fine, branching epithelial lesion."),
  T("Les guttae sont des excroissances endothéliales de la dystrophie de Fuchs.", "Guttae are endothelial excrescences of Fuchs dystrophy.")],
 T("Kératite à Acanthamoeba évoluée : fonte cornéenne et vascularisation.", "Advanced Acanthamoeba keratitis: corneal melting and vascularisation."),
 T("Kératite à Acanthamoeba : cornée opaque, injection et vaisseaux au limbe.", "Acanthamoeba keratitis: opaque cornea, injection and vessels at the limbus."),
 [H(48, 52, 18, "Cornée opaque (fonte)", "Opaque cornea (melting)"),
  H(80, 30, 8, "Injection et vaisseaux au limbe", "Injection and vessels at the limbus", False)])

case("oc-12", "cornee", 2, "IMG3-039",
 T("Jeune adulte, astigmatisme qui augmente. Topographie de l’œil gauche (courbure à gauche, épaisseur à droite). Interprétation?", "Young adult with increasing astigmatism. Left-eye topography (curvature left, thickness right). Interpretation?"),
 [T("Astigmatisme régulier, cornée saine", "Regular astigmatism, healthy cornea"), T("Kératocône : bombement inférieur et amincissement", "Keratoconus: inferior steepening and thinning"), T("Cornée après chirurgie réfractive myopique", "Cornea after myopic refractive surgery"), T("Dystrophie de Fuchs", "Fuchs dystrophy")], 1,
 [T("Un astigmatisme régulier donne un « nœud papillon » symétrique, pas un point chaud inférieur à 54,6 D.", "Regular astigmatism gives a symmetrical bow-tie, not an inferior hot spot at 54.6 D."),
  T("Juste (source : kératocône stade II) : courbure maximale inférieure (54,6 D) et point le plus mince à 421 µm. Arrêter le frottement; discuter un cross-linking si progression.", "Correct (source: stage II keratoconus): maximum inferior curvature (54.6 D) and thinnest point 421 µm. Stop eye rubbing; consider cross-linking if progressing."),
  T("Après chirurgie myopique, le centre est aplati (bleu), pas bombé.", "After myopic surgery the centre is flattened (blue), not steep."),
  T("Fuchs épaissit la cornée (œdème), il ne crée pas de cône.", "Fuchs thickens the cornea (oedema); it does not create a cone.")],
 T("Bombement inférieur (54,6 D) et amincissement (421 µm) : kératocône.", "Inferior steepening (54.6 D) and thinning (421 µm): keratoconus."),
 T("Topographie : kératocône stade II, œil gauche.", "Topography: stage II keratoconus, left eye."),
 [H(29, 68, 7, "Courbure maximale inférieure 54,6 D", "Inferior maximum curvature 54.6 D"),
  H(81, 58, 6, "Point le plus mince 421 µm", "Thinnest point 421 µm")])

case("oc-13", "cornee", 1, "IMG3-041",
 T("Travailleur extérieur, lésion conjonctivale qui avance sur la cornée et gêne la vision. Diagnostic?", "Outdoor worker, a conjunctival growth advancing onto the cornea and affecting vision. Diagnosis?"),
 [T("Pinguécula", "Pinguecula"), T("Ptérygion qui atteint l’axe visuel", "Pterygium reaching the visual axis"), T("Arc sénile", "Arcus senilis"), T("Pannus trachomateux", "Trachomatous pannus")], 1,
 [T("La pinguécula reste sur la conjonctive, sans franchir le limbe.", "A pinguecula stays on the conjunctiva without crossing the limbus."),
  T("Juste : aile fibrovasculaire qui franchit le limbe; ici sévère, jusqu’à la pupille (source). Exérèse avec autogreffe conjonctivale, protection UV.", "Correct: a fibrovascular wing crossing the limbus; here severe, reaching the pupil (source). Excision with conjunctival autograft, UV protection."),
  T("L’arc sénile est un anneau blanc périphérique, séparé du limbe par une zone claire.", "Arcus is a white peripheral ring separated from the limbus by a clear zone."),
  T("Le pannus trachomateux envahit la cornée par le haut, avec cicatrices tarsiennes.", "Trachomatous pannus invades from above, with tarsal scarring.")],
 T("Aile fibrovasculaire conjonctivale qui franchit le limbe jusqu’à la pupille : ptérygion sévère.", "Fibrovascular conjunctival wing crossing the limbus to the pupil: severe pterygium."),
 T("Ptérygion sévère atteignant la pupille.", "Severe pterygium reaching the pupil."),
 [H(51, 38, 7, "Tête du ptérygion sur l’aire pupillaire", "Pterygium head over the pupil"),
  H(30, 50, 9, "Aile fibrovasculaire qui franchit le limbe", "Fibrovascular wing crossing the limbus", False)])

case("oc-14", "cornee", 2, "IMG3-043",
 T("Plaque cornéenne blanchâtre et granuleuse chez un patient avec maladie oculaire chronique. Diagnostic le plus probable?", "Whitish, granular corneal plaque in a patient with chronic eye disease. Most likely diagnosis?"),
 [T("Kératopathie en bandelette (calcique)", "Band keratopathy (calcific)"), T("Cataracte blanche", "White cataract"), T("Dystrophie granulaire", "Granular dystrophy"), T("Leucome cicatriciel", "Corneal scar")], 0,
 [T("Juste (nom du fichier source) : dépôt de calcium sous-épithélial, plaque granuleuse percée de petits trous. Chercher une uvéite chronique ou une hypercalcémie; traitement par EDTA.", "Correct (source file name): subepithelial calcium, a granular plaque with small holes. Look for chronic uveitis or hypercalcaemia; treated with EDTA chelation."),
  T("La fente lumineuse montre que l’opacité est dans la cornée, en avant de l’iris.", "The slit beam shows the opacity is in the cornea, in front of the iris."),
  T("La dystrophie granulaire donne des opacités stromales discrètes en « miettes », bilatérales, sans plaque.", "Granular dystrophy gives discrete crumb-like stromal opacities, bilateral, not a plaque."),
  T("Un leucome est une cicatrice stromale homogène, pas granuleuse et trouée.", "A scar is homogeneous stromal opacity, not granular with holes.")],
 T("Plaque blanchâtre granuleuse de la cornée : kératopathie en bandelette.", "Granular whitish corneal plaque: band keratopathy."),
 T("Kératopathie en bandelette, œil gauche.", "Band keratopathy, left eye."),
 [H(47, 45, 17, "Plaque blanchâtre granuleuse cornéenne", "Granular whitish corneal plaque")])

# ───────── Glaucome ─────────
case("oc-15", "glaucome", 2, "IMG3-052",
 T("Homme myope de 30 ans, PIO 26 mmHg. Dépôt vertical sur la face postérieure de la cornée. Nom et contexte?", "30-year-old myopic man, IOP 26 mmHg. Vertical deposit on the back of the cornea. Name and context?"),
 [T("Précipités rétrocornéens granulomateux (uvéite)", "Granulomatous keratic precipitates (uveitis)"), T("Fuseau de Krukenberg : dispersion pigmentaire", "Krukenberg spindle: pigment dispersion"), T("Guttae de Fuchs", "Fuchs guttae"), T("Ligne de Hudson-Stähli", "Hudson-Stähli line")], 1,
 [T("Les précipités sont des amas blanchâtres « en graisse de mouton », souvent en triangle inférieur.", "KPs are whitish “mutton-fat” clumps, often in an inferior triangle."),
  T("Juste : cellules pigmentées de l’iris déposées en fuseau vertical sur l’endothélium (source). Chercher défects de transillumination irienne et trabéculum très pigmenté en gonioscopie.", "Correct: pigmented iris cells deposited as a vertical spindle on the endothelium (source). Look for iris transillumination defects and a heavily pigmented meshwork on gonioscopy."),
  T("Les guttae sont des excroissances de la Descemet (aspect métal martelé), pas un fuseau pigmenté.", "Guttae are Descemet excrescences (beaten metal), not a pigmented spindle."),
  T("La ligne de Hudson-Stähli est un dépôt de fer épithélial horizontal, au tiers inférieur.", "The Hudson-Stähli line is a horizontal epithelial iron line in the lower third.")],
 T("Fuseau pigmenté vertical sur l’endothélium : Krukenberg (syndrome de dispersion pigmentaire).", "Vertical pigmented spindle on the endothelium: Krukenberg (pigment dispersion syndrome)."),
 T("Fuseau de Krukenberg.", "Krukenberg spindle."),
 [H(25, 55, 9, "Fuseau pigmenté vertical (Krukenberg)", "Vertical pigment spindle (Krukenberg)")])

case("oc-16", "glaucome", 1, "IMG3-053",
 T("Douleur brutale de l’œil droit, vision trouble, halos, nausées. PIO OD 42 mmHg. Diagnostic?", "Sudden right eye pain, blurred vision, haloes, nausea. Right IOP 42 mmHg. Diagnosis?"),
 [T("Conjonctivite", "Conjunctivitis"), T("Uvéite antérieure aiguë", "Acute anterior uveitis"), T("Crise aiguë de fermeture de l’angle", "Acute angle-closure crisis"), T("Glaucome néovasculaire", "Neovascular glaucoma")], 2,
 [T("Une conjonctivite ne donne ni PIO à 42 ni pupille aréactive.", "Conjunctivitis gives neither an IOP of 42 nor an unreactive pupil."),
  T("L’uvéite donne plutôt une pupille en myosis et une PIO souvent normale ou basse.", "Uveitis tends to give a small pupil and an often normal or low IOP."),
  T("Juste : œil rouge, pupille en semi-mydriase aréactive (source), PIO 42. Baisser la PIO en urgence puis iridotomie laser des deux yeux.", "Correct: red eye, mid-dilated unreactive pupil (source), IOP 42. Lower the IOP urgently, then laser iridotomy in both eyes."),
  T("Le glaucome néovasculaire suppose des néovaisseaux de l’iris sur une rétine ischémique.", "Neovascular glaucoma requires iris new vessels from an ischaemic retina.")],
 T("Œil droit rouge, pupille en semi-mydriase aréactive, PIO 42 : crise de fermeture de l’angle.", "Red right eye, mid-dilated unreactive pupil, IOP 42: acute angle closure."),
 T("Crise de fermeture de l’angle de l’œil droit (à gauche sur la photo).", "Acute angle closure of the right eye (on the left of the photo)."),
 [H(20, 47, 7, "Pupille en semi-mydriase aréactive (œil droit)", "Mid-dilated unreactive pupil (right eye)"),
  H(31, 57, 6, "Œil rouge", "Red eye", False)])

case("oc-17", "glaucome", 2, "IMG3-055",
 T("Patient suivi pour glaucome à angle ouvert. Papille. Stade?", "Patient followed for open-angle glaucoma. Optic disc. Stage?"),
 [T("Papille normale", "Normal disc"), T("Glaucome avancé : excavation pâle très large, anneau très mince", "Advanced glaucoma: very large pale cup, very thin rim"), T("Œdème papillaire", "Disc oedema"), T("Neuropathie optique ischémique aiguë", "Acute ischaemic optic neuropathy")], 1,
 [T("Une papille normale garde un anneau rose épais (règle ISNT).", "A normal disc keeps a thick pink rim (ISNT rule)."),
  T("Juste (source : glaucome avancé) : l’excavation occupe presque tout le disque; les vaisseaux se coudent au bord. Champ visuel attendu très atteint.", "Correct (source: advanced glaucoma): the cup fills almost the whole disc; vessels bend at its edge. Expect a severely damaged field."),
  T("L’œdème surélève la papille et efface ses bords.", "Oedema elevates the disc and blurs its margins."),
  T("La NOIA aiguë donne un œdème papillaire, pas une excavation.", "Acute AION gives disc swelling, not cupping.")],
 T("Excavation pâle presque totale, anneau très mince : glaucome avancé.", "Almost total pale cup, very thin rim: advanced glaucoma."),
 T("Papille d’un glaucome avancé.", "Optic disc in advanced glaucoma."),
 [H(46, 48, 15, "Excavation pâle très large", "Very large pale cup"),
  H(63, 31, 6, "Vaisseau coudé au bord de l’excavation", "Vessel bending at the cup edge", False)])

case("oc-18", "glaucome", 3, "IMG3-056",
 T("Vue au verre de gonioscopie de l’angle d’un homme de 25 ans; du pigment est visible dans l’angle. Si le trabéculum était densément pigmenté sur 360° chez un jeune myope, que chercher?", "Gonioscopy lens view of the angle of a 25-year-old man; pigment is visible in the angle. If the meshwork were densely pigmented over 360° in a young myope, what would you look for?"),
 [T("Une pseudo-exfoliation", "Pseudoexfoliation"), T("Un syndrome de dispersion pigmentaire", "Pigment dispersion syndrome"), T("Des néovaisseaux de l’angle", "Angle new vessels"), T("Une fermeture de l’angle", "Angle closure")], 1,
 [T("La pseudo-exfoliation touche surtout après 60 ans, avec matériel blanc sur la capsule.", "Pseudoexfoliation mostly affects people over 60, with white material on the capsule."),
  T("Juste : jeune myope + trabéculum très pigmenté = dispersion pigmentaire; chercher le fuseau de Krukenberg et les défects de transillumination de l’iris.", "Correct: young myope + heavily pigmented meshwork = pigment dispersion; look for a Krukenberg spindle and iris transillumination defects."),
  T("Les néovaisseaux de l’angle sont de fins vaisseaux rouges qui traversent l’éperon, pas du pigment.", "Angle new vessels are fine red vessels crossing the spur, not pigment."),
  T("Le pigment ne dit rien en soi de la largeur de l’angle : il faut identifier les structures visibles.", "Pigment says nothing by itself about angle width: you must identify the visible structures.")],
 T("Pigment dans l’angle : chez un jeune myope, penser dispersion pigmentaire.", "Pigment in the angle: in a young myope, think pigment dispersion."),
 T("Gonioscopie : angle d’un homme de 25 ans avec du pigment visible.", "Gonioscopy: angle of a 25-year-old man with visible pigment."),
 [H(40, 12, 9, "Bande pigmentée dans l’angle", "Pigmented band in the angle")])

# ───────── Général ─────────
case("oc-19", "general", 2, "IMG3-058",
 T("Fièvre, paupières rouges et très tuméfiées. Quel signe distingue une cellulite orbitaire d’une cellulite préseptale?", "Fever, red and very swollen eyelids. Which sign distinguishes orbital from preseptal cellulitis?"),
 [T("L’œdème palpébral", "Eyelid swelling"), T("La rougeur de la peau", "Skin redness"), T("Douleur aux mouvements oculaires, ophtalmoplégie, exophtalmie ou baisse visuelle", "Pain on eye movement, ophthalmoplegia, proptosis or reduced vision"), T("La fièvre", "Fever")], 2,
 [T("L’œdème palpébral existe dans les deux formes.", "Eyelid swelling occurs in both."),
  T("La rougeur est commune aux deux.", "Redness is common to both."),
  T("Juste : ces signes traduisent l’atteinte en arrière du septum. Scanner des orbites et des sinus, antibiotiques intraveineux, avis ORL/ophtalmo.", "Correct: these signs mean disease behind the septum. CT of orbits and sinuses, IV antibiotics, ENT/ophthalmology review."),
  T("La fièvre peut accompagner les deux formes.", "Fever can accompany both.")],
 T("Paupières tuméfiées et érythémateuses; rechercher les signes orbitaires (motilité, exophtalmie, vision).", "Swollen, red eyelids; check for orbital signs (motility, proptosis, vision)."),
 T("Cellulite orbitaire.", "Orbital cellulitis."),
 [H(22, 45, 12, "Paupières tuméfiées et érythémateuses", "Swollen, red eyelids")])

case("oc-20", "general", 2, "IMG3-059",
 T("Pupille droite plus large, peu réactive, sans ptosis ni diplopie, chez un patient qui a manipulé des collyres. Quel test oriente vers une cause pharmacologique?", "Larger, poorly reactive right pupil, no ptosis or diplopia, in a patient who handled eye drops. Which test points to a pharmacological cause?"),
 [T("Pas de constriction après pilocarpine 1 %", "No constriction after pilocarpine 1%"), T("Constriction après pilocarpine diluée 0,1 %", "Constriction after dilute pilocarpine 0.1%"), T("Dilatation après apraclonidine", "Dilation after apraclonidine"), T("Test à la cocaïne", "Cocaine test")], 0,
 [T("Juste : ici, tropicamide instillé dans l’œil droit (source). Un blocage pharmacologique empêche la constriction même à la pilocarpine 1 %, alors qu’une paralysie du III répond.", "Correct: here, tropicamide was instilled in the right eye (source). Pharmacological blockade prevents constriction even with pilocarpine 1%, whereas a third-nerve palsy responds."),
  T("La constriction à la pilocarpine diluée évoque une pupille d’Adie (hypersensibilité de dénervation).", "Constriction to dilute pilocarpine suggests an Adie pupil (denervation hypersensitivity)."),
  T("L’apraclonidine teste le syndrome de Horner (petite pupille).", "Apraclonidine tests Horner syndrome (small pupil)."),
  T("La cocaïne teste aussi le Horner, pas une mydriase.", "Cocaine also tests Horner, not a dilated pupil.")],
 T("Anisocorie par mydriase pharmacologique (tropicamide dans l’œil droit).", "Anisocoria from pharmacological mydriasis (tropicamide in the right eye)."),
 T("Anisocorie : pupille droite (à gauche sur la photo) plus large.", "Anisocoria: right pupil (on the left of the photo) larger."),
 [H(27, 58, 7, "Pupille droite plus large (à gauche sur la photo)", "Larger right pupil (left of the photo)"),
  H(75, 52, 6, "Pupille gauche", "Left pupil", False)])

case("oc-21", "general", 1, "IMG3-060",
 T("Coup de balle dans l’œil. Que montre la chambre antérieure?", "Hit in the eye by a ball. What does the anterior chamber show?"),
 [T("Hypopyon", "Hypopyon"), T("Hyphéma", "Hyphema"), T("Hémorragie sous-conjonctivale", "Subconjunctival haemorrhage"), T("Iridodialyse", "Iridodialysis")], 1,
 [T("L’hypopyon est un niveau blanc de pus (infection, inflammation).", "Hypopyon is a white level of pus (infection, inflammation)."),
  T("Juste : sang dans la moitié de la chambre antérieure (source). Mesurer la PIO, repos tête surélevée, coque, éviter AINS/anticoagulants; dépister la drépanocytose.", "Correct: blood filling half of the anterior chamber (source). Check IOP, rest with head raised, shield, avoid NSAIDs/anticoagulants; screen for sickle cell disease."),
  T("L’hémorragie sous-conjonctivale est en dehors du globe, sur la sclère.", "Subconjunctival haemorrhage is outside the globe, over the sclera."),
  T("L’iridodialyse est une désinsertion de la racine de l’iris (pupille en « D »).", "Iridodialysis is a disinsertion of the iris root (D-shaped pupil).")],
 T("Sang occupant la moitié de la chambre antérieure : hyphéma.", "Blood filling half the anterior chamber: hyphema."),
 T("Hyphéma occupant la moitié de la chambre antérieure.", "Hyphema occupying half of the anterior chamber."),
 [H(55, 60, 14, "Sang dans la chambre antérieure", "Blood in the anterior chamber")])

try:
    extra = __import__("cases_open_pmc")  # optional second batch (PMC figures), same tuple format
    C.extend(extra.CASES)
except ImportError:
    pass

cases, media, skipped = [], {}, []
for (id_, topic, level, photo, q, options, answer, why, reveal, alt, hots) in C:
    e = cat.get(photo)
    if not e:
        skipped.append(id_ + ":" + photo); continue
    mid = "mo-" + id_.split("-")[1]
    src = "Wikimedia Commons" if e["source"] == "commons" else (e.get("article") or "PubMed Central")
    media[mid] = {"kind": "photo", "photo": photo, "alt": alt, "hotspots": hots,
                  "credit": T(f"Image : {e['author']} — {e['license']} ({src}). Redimensionnée; annotations : ophtalmo app.",
                              f"Image: {e['author']} — {e['license']} ({src}). Resized; annotations: ophtalmo app."),
                  "license": e["license"], "source": e["page_url"]}
    assert len(options) == 4 and len(why) == 4 and 0 <= answer < 4, id_
    cases.append({"id": id_, "topic": topic, "media": mid, "level": level, "q": q, "options": options,
                  "answer": answer, "why": why, "reveal": reveal, "open": True})

js = ("/* Cas en images — images LIBRES (imgsrc3 : CC0, domaine public, CC BY, CC BY-SA). Généré par le rôle ressources visuelles.\n"
      "   Même schéma que G.OPH.imageCases; médias mo-xx fusionnés dans G.OPH.invMedia (photo: 'IMG3-xxx', crédit auteur + licence).\n"
      "   Hotspots en % de l’image ENTIÈRE, placés après visualisation; aucun signe affirmé au-delà de ce que montrent l’image et sa description source.\n"
      "   Les prémisses cliniques des questions sont des mises en situation. */\n"
      "var G = (typeof window !== 'undefined') ? window : globalThis;\nG.OPH = G.OPH || {};\n"
      "G.OPH.openCases = " + json.dumps(cases, ensure_ascii=False, indent=1) + ";\n"
      "G.OPH.invMedia = Object.assign(G.OPH.invMedia || {}, " + json.dumps(media, ensure_ascii=False, indent=1) + ");\n"
      "/* Affichage dans #cas-images : ajout aux cas existants (sans doublon). */\n"
      "(function () { var ic = G.OPH.imageCases = G.OPH.imageCases || []; var have = {}; ic.forEach(function (c) { have[c.id] = 1; });\n"
      "  G.OPH.openCases.forEach(function (c) { if (!have[c.id]) ic.push(c); }); })();\n")
open(ROOT + "/data/cases-open.js", "w", encoding="utf-8").write(js)
print(len(cases), "cases;", "skipped (image not in catalogue):", skipped)
