/* Cas en images — Observe → Réponds → Révèle (bilingue natif FR Québec / EN).
   Propriété : pédagogie clinique. Même schéma d’item que G.OPH.invPractice (+ topic, featured).
   Images : uniquement des photos EyeRounds sous licence CC BY-NC-ND 3.0 (docs/RIGHTS.md), affichées entières;
   hotspots en % de la largeur/hauteur de l’image ENTIÈRE (calque séparé, aucun recadrage).
   Les prémisses cliniques des questions sont des mises en situation; les signes à l’image viennent de la photo et de sa légende source. */
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

G.OPH.imageCases = [
  /* ═════════════════════════ CORNÉE ═════════════════════════ */
  {
    id: "ic-c01", topic: "cornee", media: "mi-c01", level: 1,
    q: { fr: "Œil rouge, larmoiement, vision un peu floue. Lésion épithéliale fine et ramifiée au centre de la cornée. Diagnostic le plus probable?", en: "Red eye, tearing, slightly blurred vision. A fine, branching epithelial lesion in the central cornea. Most likely diagnosis?" },
    options: [
      { fr: "Kératite à Acanthamoeba", en: "Acanthamoeba keratitis" },
      { fr: "Kératite bactérienne", en: "Bacterial keratitis" },
      { fr: "Kératite herpétique (HSV)", en: "Herpes simplex keratitis" },
      { fr: "Abrasion cornéenne", en: "Corneal abrasion" }
    ],
    answer: 2,
    why: [
      { fr: "L’Acanthamoeba donne plutôt une douleur disproportionnée et, plus tard, un infiltrat stromal en anneau; elle peut imiter l’HSV au début.", en: "Acanthamoeba gives disproportionate pain and later a stromal ring infiltrate; it can mimic HSV early on." },
      { fr: "La kératite bactérienne forme un infiltrat stromal blanc, dense, sous un défaut épithélial.", en: "Bacterial keratitis forms a dense white stromal infiltrate under an epithelial defect." },
      { fr: "Juste : ulcère linéaire ramifié; à la fluorescéine, chercher les bulbes terminaux. Antiviral topique ou oral; pas de corticoïde topique seul sur une kératite épithéliale active.", en: "Correct: a branching linear ulcer; with fluorescein, look for terminal bulbs. Topical or oral antiviral; no topical steroid alone on active epithelial keratitis." },
      { fr: "Une abrasion est une perte d’épithélium à bords nets, souvent après un traumatisme, sans ramifications.", en: "An abrasion is a sharp-edged epithelial loss, often after trauma, with no branches." }
    ],
    reveal: { fr: "Lésion épithéliale fine et ramifiée : dendrite herpétique.", en: "Fine, branching epithelial lesion: herpetic dendrite." }
  },
  {
    id: "ic-c02", topic: "cornee", media: "mi-c02", level: 3,
    q: { fr: "Zona ophtalmique récent, œil gauche. Lésions épithéliales colorées. En quoi diffèrent-elles d’une dendrite à HSV?", en: "Recent herpes zoster ophthalmicus, left eye. Stained epithelial lesions. How do they differ from an HSV dendrite?" },
    options: [
      { fr: "Infiltrat suppuré dense avec hypopyon", en: "Dense suppurative infiltrate with hypopyon" },
      { fr: "Surélevées, sans bulbes terminaux", en: "Raised, without terminal bulbs" },
      { fr: "Ulcères creusés avec bulbes terminaux", en: "Excavated ulcers with terminal bulbs" },
      { fr: "Infiltrat stromal en anneau immunitaire", en: "An immune ring infiltrate in the stroma" }
    ],
    answer: 1,
    why: [
      { fr: "C’est un tableau de kératite bactérienne.", en: "That’s a bacterial keratitis picture." },
      { fr: "Juste : les pseudodendrites du VZV sont des plaques épithéliales surélevées, « en tête de méduse », sans bulbes terminaux.", en: "Correct: VZV pseudodendrites are raised, medusa-like epithelial plaques without terminal bulbs." },
      { fr: "C’est la description de la vraie dendrite à HSV.", en: "That describes a true HSV dendrite." },
      { fr: "Un anneau stromal évoque l’Acanthamoeba ou une réaction immunitaire (HSV stromal).", en: "A stromal ring suggests Acanthamoeba or an immune reaction (stromal HSV)." }
    ],
    reveal: { fr: "Plaques épithéliales ramifiées et surélevées, sans bulbes terminaux, après un zona : pseudodendrites.", en: "Raised branching epithelial plaques without terminal bulbs after zoster: pseudodendrites." }
  },
  {
    id: "ic-c03", topic: "cornee", media: "mi-c03", level: 1, featured: true,
    q: { fr: "Porteur de lentilles de contact. Douleur intense, œil très rouge depuis 24 h. Que faire?", en: "Contact lens wearer. Severe pain, very red eye for 24 hours. What do you do?" },
    options: [
      { fr: "Ulcère bactérien : cultures, fortifiés en urgence", en: "Bacterial ulcer: cultures, urgent fortified drops" },
      { fr: "Conjonctivite : antibiotique aux 6 h, revoir dans une semaine", en: "Conjunctivitis: antibiotic every 6 hours, review in a week" },
      { fr: "Corticoïde topique pour calmer l’inflammation", en: "Topical steroid to settle the inflammation" },
      { fr: "Pansement occlusif 24 h", en: "Pressure patch for 24 hours" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : retirer les lentilles, gratter pour cultures, puis antibiotiques fortifiés. Chez le porteur de lentilles, penser Pseudomonas. Les gouttes fortifiées viennent des pharmacies hospitalières : référence urgente en ophtalmologie.", en: "Correct: remove the lenses, scrape for cultures, then fortified antibiotics. In contact lens wearers, think Pseudomonas. Fortified drops come from hospital pharmacies: urgent ophthalmology referral." },
      { fr: "Un infiltrat cornéen dense n’est pas une conjonctivite; un délai d’une semaine peut mener à la perforation.", en: "A dense corneal infiltrate isn’t conjunctivitis; a one-week delay can lead to perforation." },
      { fr: "Pas de corticoïde avant les cultures et une réponse aux antibiotiques.", en: "No steroid before cultures and a response to antibiotics." },
      { fr: "Jamais de pansement occlusif chez un porteur de lentilles : il favorise le Pseudomonas.", en: "Never patch a contact lens wearer: it favours Pseudomonas." }
    ],
    reveal: { fr: "Infiltrat stromal central, dense et suppuré, dans un œil très injecté : ulcère bactérien (Pseudomonas chez le porteur de lentilles).", en: "Dense, suppurative central stromal infiltrate in a very injected eye: bacterial ulcer (Pseudomonas in a lens wearer)." }
  },
  {
    id: "ic-c04", topic: "cornee", media: "mi-c04", level: 2,
    q: { fr: "Porteuse de lentilles qui se baigne avec. Douleur très intense, disproportionnée par rapport à l’examen. Quel signe voyez-vous et quel germe suspecter?", en: "Contact lens wearer who swims in her lenses. Very severe pain, out of proportion to the exam. What sign do you see, and which organism do you suspect?" },
    options: [
      { fr: "Lésions satellites à bords plumeux : kératite fongique", en: "Feathery edges with satellite lesions: fungal keratitis" },
      { fr: "Ulcère neurotrophique", en: "Neurotrophic ulcer" },
      { fr: "Abrasion simple", en: "Simple abrasion" },
      { fr: "Infiltrat stromal en anneau : Acanthamoeba", en: "Stromal ring infiltrate: Acanthamoeba" }
    ],
    answer: 3,
    why: [
      { fr: "Le champignon filamenteux donne des bords plumeux et des lésions satellites, souvent après un traumatisme végétal.", en: "Filamentous fungi give feathery edges and satellite lesions, often after plant trauma." },
      { fr: "L’ulcère neurotrophique est peu douloureux (cornée insensible).", en: "A neurotrophic ulcer is barely painful (insensitive cornea)." },
      { fr: "Une abrasion n’a pas d’infiltrat stromal.", en: "An abrasion has no stromal infiltrate." },
      { fr: "Juste : eau + lentilles + douleur disproportionnée = Acanthamoeba. Souvent prise pour un HSV au début. Diagnostic : culture, microscopie confocale; traitement long (biguanides, ex. PHMB, chlorhexidine).", en: "Correct: water + lenses + disproportionate pain = Acanthamoeba. Often mistaken for HSV early. Diagnosis: culture, confocal microscopy; long treatment (biguanides, e.g., PHMB, chlorhexidine)." }
    ],
    reveal: { fr: "Anneau blanchâtre paracentral dans le stroma : infiltrat en anneau de l’Acanthamoeba.", en: "Whitish paracentral ring in the stroma: Acanthamoeba ring infiltrate." }
  },
  {
    id: "ic-c05", topic: "cornee", media: "mi-c05", level: 2,
    q: { fr: "Vision floue le matin qui s’améliore en journée. Que montre la fente lumineuse sur l’endothélium?", en: "Blurred vision in the morning that clears during the day. What does the slit beam show on the endothelium?" },
    options: [
      { fr: "Un fuseau de Krukenberg (pigment)", en: "A Krukenberg spindle (pigment)" },
      { fr: "Une cornée verticillée", en: "Cornea verticillata" },
      { fr: "Des guttae : dystrophie endothéliale de Fuchs", en: "Guttae: Fuchs endothelial dystrophy" },
      { fr: "Des précipités rétrocornéens d’uvéite antérieure", en: "Keratic precipitates from anterior uveitis" }
    ],
    answer: 2,
    why: [
      { fr: "Le fuseau de Krukenberg est une bande verticale de pigment brun (dispersion pigmentaire).", en: "A Krukenberg spindle is a vertical band of brown pigment (pigment dispersion)." },
      { fr: "La cornée verticillée est épithéliale, en tourbillon (amiodarone, Fabry).", en: "Cornea verticillata is epithelial and whorl-shaped (amiodarone, Fabry)." },
      { fr: "Juste : excroissances de la Descemet, aspect de « métal martelé ». Le matin, la cornée est plus œdémateuse (paupières fermées, moins d’évaporation). Traitement : salin hypertonique, puis greffe endothéliale (DMEK).", en: "Correct: Descemet excrescences, a “beaten-metal” look. Corneas are more edematous in the morning (lids closed, less evaporation). Treatment: hypertonic saline, then endothelial keratoplasty (DMEK)." },
      { fr: "Les précipités sont des amas de cellules inflammatoires, souvent en bas, avec cellules en chambre antérieure.", en: "Keratic precipitates are clumps of inflammatory cells, often inferior, with anterior chamber cells." }
    ],
    reveal: { fr: "Fines excroissances sur l’endothélium, dans le reflet de la fente : guttae de Fuchs.", en: "Fine excrescences on the endothelium, within the slit reflex: Fuchs guttae." }
  },
  {
    id: "ic-c06", topic: "cornee", media: "mi-c06", level: 2,
    q: { fr: "Jeune patient, myopie et astigmatisme qui augmentent vite. Fines stries parallèles dans le stroma profond. Diagnostic?", en: "Young patient, rapidly increasing myopia and astigmatism. Fine parallel striae in the deep stroma. Diagnosis?" },
    options: [
      { fr: "Plis de Descemet postopératoires", en: "Postoperative Descemet folds" },
      { fr: "Kératocône (stries de Vogt)", en: "Keratoconus (Vogt striae)" },
      { fr: "Glaucome congénital (stries de Haab)", en: "Congenital glaucoma (Haab striae)" },
      { fr: "Dystrophie grillagée (TGFBI)", en: "Lattice corneal dystrophy (TGFBI)" }
    ],
    answer: 1,
    why: [
      { fr: "Aucun contexte chirurgical; les plis sont irréguliers, pas des stries fines parallèles.", en: "No surgical context; folds are irregular, not fine parallel striae." },
      { fr: "Juste : stries fines et parallèles du stroma postérieur (classiquement verticales, obliques sur cette photo), qui s’effacent à une légère pression sur le globe. Autres signes : anneau de Fleischer, amincissement, signe de Munson. Le cross-linking freine la progression.", en: "Correct: fine parallel posterior stromal striae (classically vertical, oblique in this photo) that fade with gentle pressure on the globe. Other signs: Fleischer ring, thinning, Munson sign. Cross-linking slows progression." },
      { fr: "Les stries de Haab sont horizontales ou curvilignes (ruptures de la Descemet) chez l’enfant au gros œil.", en: "Haab striae are horizontal or curvilinear (Descemet breaks) in a child with an enlarged eye." },
      { fr: "La dystrophie grillagée donne des lignes réfringentes ramifiées, surtout dans le stroma antérieur.", en: "Lattice dystrophy gives branching refractile lines, mostly in the anterior stroma." }
    ],
    reveal: { fr: "Lignes fines et parallèles dans le stroma profond : stries de Vogt du kératocône.", en: "Fine parallel lines in the deep stroma: keratoconus Vogt striae." }
  },
  {
    id: "ic-c07", topic: "cornee", media: "mi-c07", level: 2,
    q: { fr: "Kératocône connu. Baisse de vision brutale avec cornée blanche et douloureuse. Que s’est-il passé?", en: "Known keratoconus. Sudden vision loss with a white, painful cornea. What happened?" },
    options: [
      { fr: "Hydrops aigu (rupture de la Descemet)", en: "Acute hydrops (Descemet break)" },
      { fr: "Kératite infectieuse", en: "Infectious keratitis" },
      { fr: "Brûlure chimique", en: "Chemical burn" },
      { fr: "Dystrophie de Fuchs décompensée, œdème diffus", en: "Decompensated Fuchs dystrophy with diffuse edema" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : l’humeur aqueuse entre dans le stroma par la déchirure. Résorption en semaines à mois, souvent avec cicatrice. Salin hypertonique, cycloplégie; gaz intracamérulaire possible.", en: "Correct: aqueous enters the stroma through the tear. Resolves over weeks to months, often with scarring. Hypertonic saline, cycloplegia; intracameral gas is an option." },
      { fr: "Une infection montre un infiltrat blanc dense sous un défaut épithélial, pas un œdème bleuté diffus.", en: "Infection shows a dense white infiltrate under an epithelial defect, not diffuse bluish edema." },
      { fr: "Pas d’exposition chimique; l’œdème est centré sur le cône.", en: "No chemical exposure; the edema is centred on the cone." },
      { fr: "Fuchs est bilatéral et progressif, pas brutal chez un jeune kératocône.", en: "Fuchs is bilateral and gradual, not sudden in a young keratoconus patient." }
    ],
    reveal: { fr: "Opacité œdémateuse blanc-bleu au sommet du cône : hydrops aigu.", en: "White-blue edematous opacity at the apex of the cone: acute hydrops." }
  },
  {
    id: "ic-c08", topic: "cornee", media: "mi-c08", level: 1,
    q: { fr: "Tissu conjonctival en forme d’aile qui avance sur la cornée. Diagnostic, et quand opérer?", en: "Wing-shaped conjunctival tissue growing onto the cornea. Diagnosis, and when to operate?" },
    options: [
      { fr: "Pinguécula : jamais d’intervention", en: "Pinguecula: never any surgery" },
      { fr: "Carcinome épidermoïde : énucléation", en: "Squamous cell carcinoma: enucleation" },
      { fr: "Hémorragie sous-conjonctivale : rassurer", en: "Subconjunctival hemorrhage: reassure" },
      { fr: "Ptérygion : chirurgie s’il menace l’axe visuel", en: "Pterygium: surgery if near the visual axis" }
    ],
    answer: 3,
    why: [
      { fr: "La pinguécula ne franchit pas le limbe.", en: "A pinguecula doesn’t cross the limbus." },
      { fr: "Le carcinome de surface est gélatineux ou leucoplasique, avec vaisseaux nourriciers : biopsie, pas énucléation d’emblée.", en: "Surface carcinoma is gelatinous or leukoplakic with feeder vessels: biopsy, not upfront enucleation." },
      { fr: "Une hémorragie est une nappe rouge plane, pas un tissu en relief qui envahit la cornée.", en: "A hemorrhage is a flat red patch, not raised tissue invading the cornea." },
      { fr: "Juste : tissu fibrovasculaire qui franchit le limbe, lié aux UV. Opérer s’il menace l’axe visuel, induit de l’astigmatisme ou gêne beaucoup; exérèse avec autogreffe conjonctivale pour limiter la récidive.", en: "Correct: fibrovascular tissue crossing the limbus, linked to UV. Operate if it threatens the visual axis, induces astigmatism or is very bothersome; excision with conjunctival autograft limits recurrence." }
    ],
    reveal: { fr: "Tissu fibrovasculaire triangulaire dont la tête franchit le limbe et atteint le bord pupillaire : ptérygion.", en: "Triangular fibrovascular tissue whose head crosses the limbus and reaches the pupil edge: pterygium." }
  },
  {
    id: "ic-c09", topic: "cornee", media: "mi-c09", level: 1,
    q: { fr: "Éclaboussure d’un produit alcalin (soude) il y a 10 minutes. Première chose à faire?", en: "Splash of an alkali (lye) 10 minutes ago. First thing to do?" },
    options: [
      { fr: "Neutraliser avec une solution acide", en: "Neutralize with an acid solution" },
      { fr: "Antibiotique topique, revoir demain", en: "Topical antibiotic, see tomorrow" },
      { fr: "Irriguer abondamment jusqu’à pH neutre", en: "Irrigate copiously to a neutral pH" },
      { fr: "Mesurer l’acuité visuelle avant tout", en: "Check visual acuity first" }
    ],
    answer: 2,
    why: [
      { fr: "Jamais de neutralisation : la réaction chimique aggrave la brûlure.", en: "Never neutralize: the chemical reaction worsens the burn." },
      { fr: "Retarder l’irrigation laisse l’alcali détruire le limbe et l’endothélium.", en: "Delaying irrigation lets the alkali destroy the limbus and endothelium." },
      { fr: "Juste : chaque minute compte, l’alcali pénètre vite. Irriguer (soluté, plusieurs litres), retourner les paupières, vérifier le pH. L’ischémie limbique prédit le pronostic. Au travail : documents CNESST.", en: "Correct: every minute counts; alkali penetrates fast. Irrigate (saline, several litres), evert the lids, check pH. Limbal ischemia predicts the outcome." },
      { fr: "La brûlure chimique est l’exception : on irrigue avant l’acuité.", en: "Chemical burns are the exception: irrigate before checking acuity." }
    ],
    reveal: { fr: "Cornée opaque après une brûlure alcaline : on irrigue d’abord, on évalue ensuite.", en: "Opaque cornea after an alkali burn: irrigate first, assess after." }
  },
  {
    id: "ic-c10", topic: "cornee", media: "mi-c10", level: 3,
    q: { fr: "Greffe de cornée. Baisse de vision, œil rouge. Que représente la ligne blanchâtre qui traverse l’endothélium?", en: "Corneal graft. Decreased vision, red eye. What is the whitish line crossing the endothelium?" },
    options: [
      { fr: "Fil de suture lâche", en: "Loose suture" },
      { fr: "Ligne de Khodadoust : rejet endothélial", en: "Khodadoust line: endothelial rejection" },
      { fr: "Abcès bactérien du greffon", en: "Bacterial graft abscess" },
      { fr: "Décompensation endothéliale tardive sans inflammation", en: "Late endothelial failure without inflammation" }
    ],
    answer: 1,
    why: [
      { fr: "Un fil lâche est superficiel et peut attirer le mucus, mais ne trace pas de ligne endothéliale.", en: "A loose suture is superficial and can collect mucus, but doesn’t draw an endothelial line." },
      { fr: "Juste : front de précipités qui progresse sur l’endothélium du greffon; la cornée est œdémateuse derrière. Corticoïdes topiques intensifs en urgence.", en: "Correct: a front of precipitates advancing across the graft endothelium; the cornea is edematous behind it. Urgent intensive topical steroids." },
      { fr: "Un abcès est un infiltrat stromal focal, pas une ligne qui avance sur l’endothélium.", en: "An abscess is a focal stromal infiltrate, not a line advancing across the endothelium." },
      { fr: "La décompensation tardive donne un œdème diffus, sans ligne de précipités ni œil rouge.", en: "Late failure gives diffuse edema, with no precipitate line and no red eye." }
    ],
    reveal: { fr: "Ligne de précipités à la limite d’une zone œdémateuse, en diffusion sclérale : ligne de Khodadoust.", en: "A line of precipitates at the edge of an edematous zone, on sclerotic scatter: Khodadoust line." }
  },
  {
    id: "ic-c11", topic: "cornee", media: "mi-c11", level: 1,
    q: { fr: "Coup d’ongle dans l’œil, douleur et photophobie. Fluorescéine au bleu cobalt. Que montre la zone verte?", en: "Fingernail to the eye, pain and photophobia. Fluorescein under cobalt blue. What does the green area show?" },
    options: [
      { fr: "Une perte d’épithélium : abrasion cornéenne", en: "Epithelial loss: corneal abrasion" },
      { fr: "Un ulcère infectieux", en: "An infectious ulcer" },
      { fr: "Une fuite d’humeur aqueuse (Seidel +)", en: "An aqueous leak (Seidel +)" },
      { fr: "Une dendrite herpétique", en: "A herpetic dendrite" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : la fluorescéine colore là où l’épithélium manque. Antibiotique topique; pas de pansement chez le porteur de lentilles; jamais d’anesthésique à domicile.", en: "Correct: fluorescein stains where epithelium is missing. Topical antibiotic; no patch in lens wearers; never send home with anesthetic drops." },
      { fr: "Un ulcère infectieux aurait un infiltrat blanc dans le stroma sous la zone verte.", en: "An infectious ulcer would show a white stromal infiltrate under the green area." },
      { fr: "Le Seidel montre un ruisseau sombre qui dilue la fluorescéine; ici, la zone est stable et bien limitée.", en: "Seidel shows a dark stream diluting the fluorescein; here the area is stable and well defined." },
      { fr: "Une dendrite est ramifiée avec des bulbes terminaux, pas une plage arrondie.", en: "A dendrite branches with terminal bulbs; it isn’t a rounded patch." }
    ],
    reveal: { fr: "Plage verte bien limitée, sans infiltrat blanc dessous : abrasion épithéliale.", en: "Well-defined green patch, no white infiltrate beneath: epithelial abrasion." }
  },
  {
    id: "ic-c12", topic: "cornee", media: "mi-c12", level: 2,
    q: { fr: "Deux semaines après une conjonctivite virale, la vision est floue. Que sont ces petites opacités rondes et multiples?", en: "Two weeks after viral conjunctivitis, vision is blurred. What are these multiple small round opacities?" },
    options: [
      { fr: "Abcès bactériens multiples, satellites d’un ulcère", en: "Multiple bacterial abscesses around an ulcer" },
      { fr: "Kératite ponctuée de Thygeson", en: "Thygeson superficial punctate keratitis" },
      { fr: "Guttae", en: "Guttae" },
      { fr: "Infiltrats sous-épithéliaux de l’adénovirus", en: "Adenoviral subepithelial infiltrates" }
    ],
    answer: 3,
    why: [
      { fr: "Des abcès seraient douloureux, suppurés, avec défaut épithélial.", en: "Abscesses would be painful and suppurative, with an epithelial defect." },
      { fr: "Thygeson : lésions épithéliales grises, sans conjonctivite associée.", en: "Thygeson: grey epithelial lesions, without associated conjunctivitis." },
      { fr: "Les guttae sont sur l’endothélium, pas sous l’épithélium.", en: "Guttae lie on the endothelium, not under the epithelium." },
      { fr: "Juste : réaction immunitaire après une kératoconjonctivite à adénovirus; peut durer des mois. Corticoïde topique seulement si la vision est touchée (rebond, sevrage lent).", en: "Correct: an immune reaction after adenoviral keratoconjunctivitis; can last months. Topical steroid only if vision is affected (rebound; slow taper)." }
    ],
    reveal: { fr: "Multiples opacités rondes sous-épithéliales dans l’axe visuel : infiltrats de l’adénovirus.", en: "Multiple round subepithelial opacities in the visual axis: adenoviral infiltrates." }
  },
  /* ═════════════════════════ GLAUCOME ═════════════════════════ */
  {
    id: "ic-g01", topic: "glaucome", media: "mi-g01", level: 1,
    q: { fr: "Douleur intense à l’œil droit, céphalée, nausées, baisse de vision. Diagnostic et geste urgent?", en: "Severe right eye pain, headache, nausea, decreased vision. Diagnosis and urgent step?" },
    options: [
      { fr: "Migraine : analgésique et suivi", en: "Migraine: analgesic and follow-up" },
      { fr: "Uvéite antérieure : dilater la pupille et corticoïde topique", en: "Anterior uveitis: dilate the pupil and start topical steroid" },
      { fr: "Fermeture aiguë de l’angle : PIO, laser des deux yeux", en: "Acute angle closure: lower IOP, laser both eyes" },
      { fr: "Conjonctivite : antibiotique topique", en: "Conjunctivitis: topical antibiotic" }
    ],
    answer: 2,
    why: [
      { fr: "Céphalée et nausées trompent : manquer une crise de fermeture coûte le nerf optique.", en: "Headache and nausea mislead: missing an angle-closure attack costs the optic nerve." },
      { fr: "Dilater un angle fermé l’aggrave; l’uvéite donne plutôt une petite pupille.", en: "Dilating a closed angle makes it worse; uveitis tends to give a small pupil." },
      { fr: "Juste : œil rouge, cornée trouble (œdème), pupille en semi-mydriase, chambre étroite. PIO à 70+ mmHg dans ce cas. Bêtabloquant, alpha-agoniste, IAC topiques + acétazolamide; pilocarpine une fois la PIO abaissée; iridotomie bilatérale.", en: "Correct: red eye, hazy cornea (edema), mid-dilated pupil, shallow chamber. IOP 70+ mmHg in this case. Topical beta-blocker, alpha-agonist, CAI + acetazolamide; pilocarpine once IOP is down; bilateral iridotomy." },
      { fr: "La conjonctivite ne cause ni douleur intense ni baisse de vision ni cornée trouble.", en: "Conjunctivitis causes no severe pain, vision loss or corneal haze." }
    ],
    reveal: { fr: "Œil droit rouge à la cornée trouble, œil gauche calme : fermeture aiguë de l’angle.", en: "Red right eye with a hazy cornea, quiet left eye: acute angle closure." }
  },
  {
    id: "ic-g02", topic: "glaucome", media: "mi-g02", level: 3,
    q: { fr: "Petites taches gris-blanc sous la capsule antérieure du cristallin, iris atrophique par secteur. Qu’indiquent-elles?", en: "Small grey-white spots under the anterior lens capsule, sectoral iris atrophy. What do they indicate?" },
    options: [
      { fr: "Une cataracte sous-capsulaire postérieure cortisonique", en: "Steroid-induced posterior subcapsular cataract" },
      { fr: "Une ancienne crise de fermeture de l’angle", en: "A past angle-closure attack" },
      { fr: "Une cataracte corticale débutante", en: "Early cortical cataract" },
      { fr: "Une pseudoexfoliation", en: "Pseudoexfoliation" }
    ],
    answer: 1,
    why: [
      { fr: "La cataracte cortisonique est postérieure.", en: "Steroid cataract is posterior." },
      { fr: "Juste : nécrose de l’épithélium cristallinien sous une PIO très élevée. Avec l’atrophie irienne et la pupille fixe en semi-mydriase : triade de Vogt.", en: "Correct: lens epithelial necrosis from very high IOP. With iris atrophy and a fixed mid-dilated pupil: Vogt’s triad." },
      { fr: "La cataracte corticale forme des rayons en périphérie, pas des taches sous-capsulaires antérieures.", en: "Cortical cataract forms peripheral spokes, not anterior subcapsular flecks." },
      { fr: "La pseudoexfoliation dépose un matériel blanc en cible sur la capsule, pas sous elle.", en: "Pseudoexfoliation deposits white material in a target pattern on the capsule, not beneath it." }
    ],
    reveal: { fr: "Taches blanches sous la capsule antérieure et atrophie irienne : cicatrices d’une crise de fermeture de l’angle.", en: "White flecks under the anterior capsule and iris atrophy: scars of an angle-closure attack." }
  },
  {
    id: "ic-g03", topic: "glaucome", media: "mi-g03", level: 2,
    q: { fr: "Patient âgé, examen à la lampe à fente. Que voyez-vous sur le rebord pupillaire?", en: "Elderly patient, slit-lamp exam. What do you see on the pupil margin?" },
    options: [
      { fr: "Matériel pseudoexfoliatif", en: "Pseudoexfoliative material" },
      { fr: "Pigment de dispersion pigmentaire", en: "Pigment from pigment dispersion" },
      { fr: "Synéchies postérieures d’uvéite", en: "Posterior synechiae from uveitis" },
      { fr: "Nodules de Koeppe (uvéite granulomateuse)", en: "Koeppe nodules (granulomatous uveitis)" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : flocons blanc-gris (« pellicules »). Glaucome pseudoexfoliatif : PIO élevée, progression rapide. Zonules faibles : chirurgie de cataracte à risque. Ligne de Sampaolesi en gonioscopie.", en: "Correct: grey-white “dandruff” flakes. Pseudoexfoliation glaucoma: high IOP, fast progression. Weak zonules: higher-risk cataract surgery. Sampaolesi line on gonioscopy." },
      { fr: "Le pigment est brun et se voit chez le jeune myope (fuseau de Krukenberg, défauts de transillumination).", en: "Pigment is brown and seen in young myopes (Krukenberg spindle, transillumination defects)." },
      { fr: "Les synéchies collent l’iris au cristallin et déforment la pupille; ce ne sont pas des flocons.", en: "Synechiae glue the iris to the lens and distort the pupil; they aren’t flakes." },
      { fr: "Les nodules de Koeppe sont des amas inflammatoires translucides au bord pupillaire, dans une uvéite granulomateuse.", en: "Koeppe nodules are translucent inflammatory clumps at the pupil edge in granulomatous uveitis." }
    ],
    reveal: { fr: "Flocons blancs le long du rebord pupillaire : pseudoexfoliation.", en: "White flakes along the pupil margin: pseudoexfoliation." }
  },
  {
    id: "ic-g04", topic: "glaucome", media: "mi-g04", level: 2,
    q: { fr: "Rétro-illumination de l’iris (lumière renvoyée par le fond d’œil). Que montrent les fentes rouges radiaires en périphérie?", en: "Iris retroillumination (light reflected from the fundus). What do the radial red slits in the periphery show?" },
    options: [
      { fr: "Néovaisseaux iriens (rubéose)", en: "Iris rubeosis (new vessels)" },
      { fr: "Iridotomies au laser multiples", en: "Several laser iridotomies" },
      { fr: "Albinisme oculaire (transillumination diffuse)", en: "Ocular albinism (diffuse transillumination)" },
      { fr: "Dispersion pigmentaire", en: "Pigment dispersion" }
    ],
    answer: 3,
    why: [
      { fr: "Les néovaisseaux sont des vaisseaux à la surface de l’iris, visibles en lumière directe.", en: "New vessels lie on the iris surface and are seen in direct light." },
      { fr: "Une iridotomie est un trou unique, rond, en périphérie supérieure ou temporale.", en: "An iridotomy is a single round hole, superior or temporal." },
      { fr: "L’albinisme donne une transillumination diffuse de tout l’iris.", en: "Albinism gives diffuse transillumination of the whole iris." },
      { fr: "Juste : l’iris concave frotte contre les zonules et perd son pigment par fentes radiaires. Typique du jeune adulte myope; pigment sur l’endothélium (Krukenberg) et dans le trabéculum; risque de glaucome pigmentaire.", en: "Correct: a concave iris rubs on the zonules and loses pigment in radial slits. Typical of young myopic adults; pigment on the endothelium (Krukenberg) and in the meshwork; risk of pigmentary glaucoma." }
    ],
    reveal: { fr: "Fentes radiaires de transillumination en périphérie de l’iris : dispersion pigmentaire.", en: "Radial slit-like transillumination defects in the iris periphery: pigment dispersion." }
  },
  {
    id: "ic-g05", topic: "glaucome", media: "mi-g05", level: 3,
    q: { fr: "Pupille dilatée. Fine ligne pigmentée en périphérie du cristallin. Nom et contexte?", en: "Dilated pupil. A fine pigmented line at the lens periphery. Name and setting?" },
    options: [
      { fr: "Anneau de Fleischer : kératocône", en: "Fleischer ring: keratoconus" },
      { fr: "Anneau de Kayser-Fleischer : maladie de Wilson", en: "Kayser-Fleischer ring: Wilson disease" },
      { fr: "Ligne de Scheie : dispersion pigmentaire", en: "Scheie stripe: pigment dispersion" },
      { fr: "Ligne de Sampaolesi : pseudoexfoliation", en: "Sampaolesi line: pseudoexfoliation" }
    ],
    answer: 2,
    why: [
      { fr: "L’anneau de Fleischer est du fer dans l’épithélium cornéen, à la base du cône.", en: "The Fleischer ring is iron in the corneal epithelium at the base of the cone." },
      { fr: "L’anneau de Kayser-Fleischer est du cuivre sur la Descemet périphérique.", en: "The Kayser-Fleischer ring is copper on peripheral Descemet’s membrane." },
      { fr: "Juste : pigment déposé sur la capsule postérieure, à l’insertion des zonules. Visible seulement pupille dilatée.", en: "Correct: pigment deposited on the posterior capsule at the zonular insertion. Only seen through a dilated pupil." },
      { fr: "La ligne de Sampaolesi est dans l’angle, en avant de la ligne de Schwalbe (gonioscopie).", en: "The Sampaolesi line is in the angle, anterior to Schwalbe’s line (gonioscopy)." }
    ],
    reveal: { fr: "Ligne pigmentée en périphérie du cristallin, pupille dilatée : ligne de Scheie de la dispersion pigmentaire.", en: "A pigmented line at the lens periphery, pupil dilated: the Scheie stripe of pigment dispersion." }
  },
  {
    id: "ic-g06", topic: "glaucome", media: "mi-g06", level: 2,
    q: { fr: "Œil droit, après une occlusion de l’artère centrale de la rétine. Que montre la zone encerclée?", en: "Right eye after a central retinal artery occlusion. What does the circled area show?" },
    options: [
      { fr: "Hyphéma", en: "Hyphema" },
      { fr: "Néovaisseaux iriens (rubéose)", en: "Iris new vessels (rubeosis)" },
      { fr: "Vaisseaux iriens normaux, radiaires dans le stroma", en: "Normal radial iris vessels within the stroma" },
      { fr: "Nodules de Koeppe", en: "Koeppe nodules" }
    ],
    answer: 1,
    why: [
      { fr: "L’hyphéma est du sang déposé en bas de la chambre antérieure.", en: "Hyphema is blood layered at the bottom of the anterior chamber." },
      { fr: "Juste : la rétine ischémique libère du VEGF. Gonioscopie (néovaisseaux de l’angle), panphotocoagulation et anti-VEGF. Causes : rétinopathie diabétique proliférante, OVCR ischémique, OACR, syndrome d’ischémie oculaire.", en: "Correct: ischemic retina releases VEGF. Gonioscopy (angle new vessels), panretinal photocoagulation and anti-VEGF. Causes: proliferative diabetic retinopathy, ischemic CRVO, CRAO, ocular ischemic syndrome." },
      { fr: "Les vaisseaux normaux sont radiaires et enfouis dans le stroma, pas en dentelle à la surface du bord pupillaire.", en: "Normal vessels are radial and buried in the stroma, not lacy on the surface at the pupil margin." },
      { fr: "Les nodules de Koeppe sont des amas blanchâtres, pas des vaisseaux.", en: "Koeppe nodules are whitish clumps, not vessels." }
    ],
    reveal: { fr: "Fins vaisseaux en dentelle sur l’iris, près du bord pupillaire : néovascularisation irienne.", en: "Fine lacy vessels on the iris near the pupil margin: iris neovascularization." }
  },
  {
    id: "ic-g07", topic: "glaucome", media: "mi-g07", level: 1,
    q: { fr: "Jeune patient aux cornées anormalement grandes des deux côtés. Quelle cause éliminer en premier?", en: "Young patient with abnormally large corneas in both eyes. Which cause must be ruled out first?" },
    options: [
      { fr: "Glaucome congénital (buphtalmie)", en: "Congenital glaucoma (buphthalmos)" },
      { fr: "Obstruction congénitale du canal lacrymonasal", en: "Congenital nasolacrimal duct obstruction" },
      { fr: "Myopie forte isolée", en: "Isolated high myopia" },
      { fr: "Exophtalmie thyroïdienne", en: "Thyroid exophthalmos" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : avant 3 ans, la PIO élevée distend la cornée et le globe. Cornée > 12 mm la 1re année = suspect. Larmoiement, photophobie, blépharospasme; examen sous anesthésie, chirurgie de l’angle.", en: "Correct: before age 3, high IOP stretches the cornea and globe. Cornea > 12 mm in the first year = suspicious. Tearing, photophobia, blepharospasm; exam under anesthesia, angle surgery." },
      { fr: "L’obstruction lacrymale fait larmoyer, mais sans grande cornée ni photophobie.", en: "Duct obstruction causes tearing, but without large corneas or photophobia." },
      { fr: "La myopie allonge l’œil sans agrandir la cornée.", en: "Myopia lengthens the eye without enlarging the cornea." },
      { fr: "L’exophtalmie pousse le globe en avant; la cornée garde sa taille.", en: "Exophthalmos pushes the globe forward; the cornea keeps its size." }
    ],
    reveal: { fr: "Cornées grandes aux deux yeux : buphtalmie, glaucome congénital jusqu’à preuve du contraire.", en: "Large corneas in both eyes: buphthalmos — congenital glaucoma until proven otherwise." }
  },
  {
    id: "ic-g08", topic: "glaucome", media: "mi-g08", level: 3,
    q: { fr: "Glaucome congénital. Fines lignes à double contour dans la cornée profonde. Comment s’appellent-elles?", en: "Congenital glaucoma. Fine double-contoured lines in the deep cornea. What are they called?" },
    options: [
      { fr: "Stries de Vogt (kératocône)", en: "Vogt striae (keratoconus)" },
      { fr: "Lignes de dystrophie grillagée", en: "Lattice dystrophy lines" },
      { fr: "Rayures de lentilles de contact", en: "Contact lens scratches" },
      { fr: "Stries de Haab", en: "Haab striae" }
    ],
    answer: 3,
    why: [
      { fr: "Les stries de Vogt (kératocône) sont verticales et s’effacent à la pression.", en: "Vogt striae (keratoconus) are vertical and fade with pressure." },
      { fr: "La dystrophie grillagée donne des lignes ramifiées dans le stroma antérieur.", en: "Lattice dystrophy gives branching lines in the anterior stroma." },
      { fr: "Des rayures seraient épithéliales et prendraient la fluorescéine.", en: "Scratches would be epithelial and take up fluorescein." },
      { fr: "Juste : la cornée distendue par la PIO fissure la Descemet. Les stries persistent même une fois la PIO contrôlée.", en: "Correct: the cornea stretched by IOP splits Descemet’s membrane. The striae persist even after IOP is controlled." }
    ],
    reveal: { fr: "Lignes curvilignes à double contour dans la cornée profonde : stries de Haab.", en: "Double-contoured curvilinear lines in the deep cornea: Haab striae." }
  },
  {
    id: "ic-g09", topic: "glaucome", media: "mi-g09", level: 3,
    q: { fr: "Uvéite chronique avec synéchies postérieures. À la fente, l’iris bombe vers la cornée. Mécanisme et traitement?", en: "Chronic uveitis with posterior synechiae. On the slit beam, the iris bows toward the cornea. Mechanism and treatment?" },
    options: [
      { fr: "Glaucome malin : cycloplégie et vitrectomie", en: "Malignant glaucoma: cycloplegia and vitrectomy" },
      { fr: "Glaucome néovasculaire : anti-VEGF", en: "Neovascular glaucoma: anti-VEGF" },
      { fr: "Bloc pupillaire : iridotomie", en: "Pupillary block: iridotomy" },
      { fr: "Iris plateau : iridoplastie", en: "Plateau iris: iridoplasty" }
    ],
    answer: 2,
    why: [
      { fr: "Le glaucome malin aplatit toute la chambre, centre compris, sans iris bombé.", en: "Malignant glaucoma flattens the whole chamber, centre included, without iris bombé." },
      { fr: "Aucun néovaisseau n’est décrit; le mécanisme ici est mécanique.", en: "No new vessels are described; the mechanism here is mechanical." },
      { fr: "Juste : les synéchies empêchent l’humeur aqueuse de passer par la pupille; elle pousse l’iris en avant et ferme l’angle. L’iridotomie rétablit le passage; traiter aussi l’inflammation.", en: "Correct: synechiae stop aqueous passing through the pupil; it pushes the iris forward and closes the angle. An iridotomy restores flow; treat the inflammation too." },
      { fr: "L’iris plateau a un iris central plat; la chambre centrale est normale.", en: "Plateau iris has a flat central iris; the central chamber is normal." }
    ],
    reveal: { fr: "Le faisceau de la fente montre un iris convexe presque collé à la cornée : iris bombé par bloc pupillaire.", en: "The slit beam shows a convex iris almost touching the cornea: iris bombé from pupillary block." }
  },
  {
    id: "ic-g10", topic: "glaucome", media: "mi-g10", level: 2,
    q: { fr: "Patient suivi pour glaucome à pression normale (œil droit). Que montre le bord inférotemporal de la papille?", en: "Patient followed for normal-tension glaucoma (right eye). What does the inferotemporal disc margin show?" },
    options: [
      { fr: "Un vaisseau de shunt optociliaire", en: "An optociliary shunt vessel" },
      { fr: "Une hémorragie papillaire", en: "A disc hemorrhage" },
      { fr: "Un néovaisseau sur la papille", en: "A new vessel on the disc" },
      { fr: "Un œdème papillaire débutant", en: "Early disc swelling" }
    ],
    answer: 1,
    why: [
      { fr: "Un vaisseau optociliaire est un vaisseau en boucle sur la papille, sans saignement.", en: "An optociliary vessel is a looping vessel on the disc, with no bleeding." },
      { fr: "Juste : petite hémorragie en flammèche qui croise le bord du disque, souvent inférotemporale. Elle disparaît en quelques semaines et précède souvent un défaut des fibres. Plus fréquente dans le glaucome à pression normale.", en: "Correct: a small flame hemorrhage crossing the disc margin, often inferotemporal. It clears in weeks and often precedes a nerve fibre defect. More common in normal-tension glaucoma." },
      { fr: "Un néovaisseau est un lacis de fins vaisseaux sur la papille (rétinopathie proliférante).", en: "A new vessel is a net of fine vessels on the disc (proliferative retinopathy)." },
      { fr: "L’œdème brouille tout le contour du disque; ici le bord est net et l’excavation large.", en: "Swelling blurs the whole disc outline; here the margin is sharp and the cup is large." }
    ],
    reveal: { fr: "Strie rouge au bord inférotemporal d’une papille excavée : hémorragie papillaire, signe de progression.", en: "A red streak at the inferotemporal margin of a cupped disc: disc hemorrhage, a sign of progression." }
  },
  /* ═════════════════════════ OPHTALMOLOGIE GÉNÉRALE ═════════════════════════ */
  {
    id: "ic-x01", topic: "general", media: "mi-x01", level: 1,
    q: { fr: "Nappe rouge vif, bien limitée, sous la conjonctive. Aucune douleur, vision normale, pas de traumatisme. Conduite?", en: "Bright red, well-defined patch under the conjunctiva. No pain, normal vision, no trauma. Management?" },
    options: [
      { fr: "Hémorragie sous-conjonctivale : rassurer, TA", en: "Subconjunctival hemorrhage: reassure, check BP" },
      { fr: "Sclérite : AINS oraux, bilan", en: "Scleritis: oral NSAIDs, workup" },
      { fr: "Conjonctivite bactérienne : antibiotique", en: "Bacterial conjunctivitis: antibiotic" },
      { fr: "Fermeture de l’angle : PIO en urgence", en: "Angle closure: urgent IOP" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : bénin, résorption en 1 à 3 semaines. Récidives : TA, anticoagulants, bilan de coagulation. Après un traumatisme avec hémorragie bulleuse sur 360°, éliminer un globe ouvert.", en: "Correct: benign, clears in 1–3 weeks. Recurrences: blood pressure, anticoagulants, coagulation workup. After trauma with 360° bullous hemorrhage, rule out an open globe." },
      { fr: "La sclérite est très douloureuse, avec vaisseaux profonds violacés.", en: "Scleritis is very painful, with deep violaceous vessels." },
      { fr: "Pas de sécrétions; le sang n’est pas une hyperhémie.", en: "No discharge; blood isn’t hyperemia." },
      { fr: "Pas de douleur ni de baisse de vision; la cornée est claire.", en: "No pain or vision loss; the cornea is clear." }
    ],
    reveal: { fr: "Sang plat, bien limité, sous la conjonctive bulbaire : hémorragie sous-conjonctivale.", en: "Flat, well-defined blood under the bulbar conjunctiva: subconjunctival hemorrhage." }
  },
  {
    id: "ic-x02", topic: "general", media: "mi-x02", level: 1,
    q: { fr: "Après un traumatisme contusif. Que voyez-vous en bas de la chambre antérieure, et que faut-il vérifier?", en: "After blunt trauma. What do you see at the bottom of the anterior chamber, and what must you check?" },
    options: [
      { fr: "Un hypopyon : antibiotiques intravitréens", en: "A hypopyon: intravitreal antibiotics" },
      { fr: "Une hémorragie sous-conjonctivale", en: "A subconjunctival hemorrhage" },
      { fr: "Une rubéose irienne", en: "Iris rubeosis" },
      { fr: "Un hyphéma : éliminer un globe ouvert", en: "A hyphema: rule out an open globe" }
    ],
    answer: 3,
    why: [
      { fr: "L’hypopyon est blanc-jaune (pus), pas rouge.", en: "A hypopyon is white-yellow (pus), not red." },
      { fr: "Le sang est dans la chambre antérieure, derrière la cornée, pas sous la conjonctive.", en: "The blood is in the anterior chamber behind the cornea, not under the conjunctiva." },
      { fr: "La rubéose est faite de vaisseaux sur l’iris, pas d’un niveau de sang.", en: "Rubeosis is vessels on the iris, not a blood level." },
      { fr: "Juste : sang déposé dans le bas de la chambre. Tête surélevée, repos, cycloplégique et corticoïde topiques, suivi de la PIO. Drépanocytose : risque de PIO élevée; éviter l’acétazolamide.", en: "Correct: blood layered in the bottom of the chamber. Head up, rest, topical cycloplegic and steroid, IOP follow-up. Sickle cell: high IOP risk; avoid acetazolamide." }
    ],
    reveal: { fr: "Croissant rouge déposé dans le bas de la chambre antérieure : hyphéma.", en: "A red crescent layered at the bottom of the anterior chamber: hyphema." }
  },
  {
    id: "ic-x03", topic: "general", media: "mi-x03", level: 2,
    q: { fr: "Antécédent de trabéculectomie. Œil très rouge et douloureux, vision effondrée. La paupière est soulevée. Que montre le bas de la chambre antérieure, et quelle est l’urgence?", en: "History of trabeculectomy. Very red, painful eye, vision crashed. The lid is lifted. What does the bottom of the anterior chamber show, and what’s the emergency?" },
    options: [
      { fr: "Une cataracte blanche intumescente", en: "A white, intumescent cataract" },
      { fr: "Une conjonctivite : antibiotique topique seul", en: "Conjunctivitis: topical antibiotic alone" },
      { fr: "Hypopyon : endophtalmie", en: "Hypopyon: endophthalmitis" },
      { fr: "Un hyphéma postopératoire déposé", en: "A layered postoperative hyphema" }
    ],
    answer: 2,
    why: [
      { fr: "La cataracte est derrière la pupille; un hypopyon forme un niveau horizontal dans la chambre.", en: "Cataract sits behind the pupil; a hypopyon forms a horizontal level in the chamber." },
      { fr: "Douleur, baisse de vision et hypopyon : jamais une simple conjonctivite.", en: "Pain, vision loss and hypopyon: never just conjunctivitis." },
      { fr: "Juste : niveau de pus dans la chambre antérieure. Une bulle de filtration est une porte d’entrée, même des années après. Ponction de vitré et d’humeur aqueuse, antibiotiques intravitréens; vitrectomie selon la vision.", en: "Correct: a pus level in the anterior chamber. A filtering bleb is a portal of entry, even years later. Vitreous and aqueous taps, intravitreal antibiotics; vitrectomy depending on vision." },
      { fr: "L’hyphéma est rouge; ici le niveau est blanc-jaune.", en: "A hyphema is red; this level is white-yellow." }
    ],
    reveal: { fr: "Niveau blanc-jaune en bas de la chambre antérieure dans un œil injecté et chémotique : hypopyon, endophtalmie.", en: "White-yellow level at the bottom of the anterior chamber in an injected, chemotic eye: hypopyon, endophthalmitis." }
  },
  {
    id: "ic-x04", topic: "general", media: "mi-x04", level: 2,
    q: { fr: "Douleur profonde, sourde, qui réveille la nuit. Vaisseaux engorgés et nodule sous le limbe. Diagnostic et bilan?", en: "Deep, boring pain that wakes the patient at night. Engorged vessels and a nodule below the limbus. Diagnosis and workup?" },
    options: [
      { fr: "Conjonctivite virale", en: "Viral conjunctivitis" },
      { fr: "Sclérite nodulaire : bilan systémique", en: "Nodular scleritis: systemic workup" },
      { fr: "Épisclérite : larmes artificielles et AINS topiques", en: "Episcleritis: artificial tears and topical NSAIDs" },
      { fr: "Pinguécula enflammée", en: "Inflamed pinguecula" }
    ],
    answer: 1,
    why: [
      { fr: "La conjonctivite donne des sécrétions et une hyperhémie superficielle, sans douleur profonde.", en: "Conjunctivitis gives discharge and superficial hyperemia, without deep pain." },
      { fr: "Juste : douleur intense, vaisseaux profonds qui ne blanchissent pas à la phényléphrine 2,5 %. Bilan systémique (PR, vascularites à ANCA); AINS oraux, parfois immunosuppression.", en: "Correct: severe pain, deep vessels that don’t blanch with 2.5% phenylephrine. Systemic workup (RA, ANCA vasculitis); oral NSAIDs, sometimes immunosuppression." },
      { fr: "L’épisclérite est peu douloureuse et ses vaisseaux blanchissent à la phényléphrine.", en: "Episcleritis is mildly painful and its vessels blanch with phenylephrine." },
      { fr: "La pinguécula est un dépôt jaunâtre au limbe, nasal ou temporal, pas un nodule douloureux.", en: "A pinguecula is a yellowish limbal deposit, nasal or temporal, not a painful nodule." }
    ],
    reveal: { fr: "Vaisseaux sclérais profonds engorgés autour d’un nodule sous le limbe : sclérite nodulaire.", en: "Engorged deep scleral vessels around a nodule below the limbus: nodular scleritis." }
  },
  {
    id: "ic-x05", topic: "general", media: "mi-x05", level: 1,
    q: { fr: "Œil rouge, larmoiement, sensation de sable. Petites élévations rondes et pâles sur la conjonctive palpébrale inférieure. Comment les nomme-t-on, et qu’orientent-elles?", en: "Red eye, tearing, gritty feeling. Small pale round elevations on the lower palpebral conjunctiva. What are they called, and what do they suggest?" },
    options: [
      { fr: "Follicules : virus ou Chlamydia", en: "Follicles: virus or Chlamydia" },
      { fr: "Papilles : allergie ou lentilles", en: "Papillae: allergy or contact lenses" },
      { fr: "Concrétions conjonctivales", en: "Conjunctival concretions" },
      { fr: "Membranes", en: "Membranes" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : amas lymphoïdes pâles, vaisseaux en périphérie du dôme. Adénovirus : très contagieux (hygiène des mains, éviction selon le milieu). Follicules chroniques chez le jeune adulte : penser Chlamydia.", en: "Correct: pale lymphoid clumps with vessels around the dome. Adenovirus is very contagious (hand hygiene). Chronic follicles in a young adult: think Chlamydia." },
      { fr: "Les papilles ont un vaisseau central et donnent un aspect en pavés (allergie, lentilles).", en: "Papillae have a central vessel and a cobblestone look (allergy, lenses)." },
      { fr: "Les concrétions sont de petits dépôts jaunes durs, sans inflammation.", en: "Concretions are small hard yellow deposits without inflammation." },
      { fr: "Une membrane est une couche blanchâtre qui recouvre la conjonctive, pas des grains.", en: "A membrane is a whitish sheet over the conjunctiva, not grains." }
    ],
    reveal: { fr: "Grains ronds, pâles, au centre avasculaire, sur la conjonctive palpébrale : follicules.", en: "Round, pale grains with an avascular centre on the palpebral conjunctiva: follicles." }
  },
  {
    id: "ic-x06", topic: "general", media: "mi-x06", level: 2,
    q: { fr: "Éruption vésiculaire et croûteuse d’un seul côté du front et du nez, œil rouge. Diagnostic et conduite?", en: "One-sided vesicular, crusted rash on the forehead and nose, red eye. Diagnosis and management?" },
    options: [
      { fr: "Impétigo : antibiotique topique", en: "Impetigo: topical antibiotic" },
      { fr: "Cellulite préseptale : antibiotique oral seul", en: "Preseptal cellulitis: oral antibiotic only" },
      { fr: "Dermatite de contact : corticoïde topique", en: "Contact dermatitis: topical steroid" },
      { fr: "Zona ophtalmique : antiviral oral", en: "Zoster ophthalmicus: oral antiviral" }
    ],
    answer: 3,
    why: [
      { fr: "L’impétigo donne des croûtes mélicériques, sans topographie d’un dermatome.", en: "Impetigo gives honey-coloured crusts, not in a dermatome." },
      { fr: "La cellulite donne une paupière rouge et enflée, sans vésicules.", en: "Cellulitis gives a red swollen lid, without vesicles." },
      { fr: "Un corticoïde seul sur un zona est une erreur.", en: "A steroid alone on zoster is a mistake." },
      { fr: "Juste : réactivation du VZV dans le territoire ophtalmique (V1); antiviral idéalement dans les 72 h. Atteinte du bout du nez (signe de Hutchinson) : risque oculaire accru. Chercher kératite, uvéite, PIO élevée. Vaccin recombinant dès 50 ans.", en: "Correct: VZV reactivation in the ophthalmic (V1) territory; antiviral ideally within 72 h. Nose-tip involvement (Hutchinson sign): higher ocular risk. Look for keratitis, uveitis, raised IOP. Recombinant vaccine from age 50." }
    ],
    reveal: { fr: "Vésicules et croûtes sur base érythémateuse, d’un seul côté, dans le territoire V1 : zona ophtalmique.", en: "One-sided vesicles and crusts on a red base in the V1 territory: herpes zoster ophthalmicus." }
  },
  {
    id: "ic-x07", topic: "general", media: "mi-x07", level: 3,
    q: { fr: "Perte de vision brutale et indolore. Rétine blanchâtre, sauf une zone de couleur normale entre la papille et la macula. Pourquoi cette zone est-elle épargnée?", en: "Sudden painless vision loss. Whitened retina, except a normally coloured zone between the disc and the macula. Why is that zone spared?" },
    options: [
      { fr: "La macula est toujours épargnée", en: "The macula is always spared" },
      { fr: "Un œdème papillaire qui s’étend", en: "Spreading disc swelling" },
      { fr: "Une artère ciliorétinienne la perfuse", en: "A cilioretinal artery supplies it" },
      { fr: "C’est une hémorragie", en: "It’s a hemorrhage" }
    ],
    answer: 2,
    why: [
      { fr: "Sans artère ciliorétinienne, la macula blanchit autour d’une tache rouge cerise.", en: "Without a cilioretinal artery, the macula whitens around a cherry-red spot." },
      { fr: "La papille n’est pas gonflée; la zone épargnée suit un territoire artériel.", en: "The disc isn’t swollen; the spared zone follows an arterial territory." },
      { fr: "Juste : l’artère ciliorétinienne vient des artères ciliaires postérieures, pas de l’artère centrale. Elle peut préserver la vision centrale. Comme toute OACR : AVC oculaire, bilan urgent; après 50 ans, éliminer l’artérite à cellules géantes.", en: "Correct: the cilioretinal artery comes from the posterior ciliary arteries, not the central artery. It can preserve central vision. Like any CRAO: an eye stroke, urgent workup; over 50, rule out giant cell arteritis." },
      { fr: "Une hémorragie est rouge foncé et masque les vaisseaux; ici la rétine a sa couleur normale.", en: "A hemorrhage is dark red and hides the vessels; here the retina has its normal colour." }
    ],
    reveal: { fr: "Langue de rétine normale entre la papille et la macula dans une rétine blanche : territoire d’une artère ciliorétinienne.", en: "A tongue of normal retina between the disc and macula in a white retina: a cilioretinal artery territory." }
  },
  {
    id: "ic-x08", topic: "general", media: "mi-x08", level: 2,
    q: { fr: "Montage du fond d’œil gauche. Hémorragies dans un seul secteur. Diagnostic?", en: "Left fundus montage. Hemorrhages in one sector only. Diagnosis?" },
    options: [
      { fr: "Décollement de rétine", en: "Retinal detachment" },
      { fr: "Occlusion de branche veineuse", en: "Branch retinal vein occlusion" },
      { fr: "Occlusion de la veine centrale de la rétine", en: "Central retinal vein occlusion" },
      { fr: "Rétinopathie diabétique non proliférante", en: "Nonproliferative diabetic retinopathy" }
    ],
    answer: 1,
    why: [
      { fr: "Le décollement donne une rétine grise soulevée, pas des hémorragies en flammèche.", en: "A detachment gives grey elevated retina, not flame hemorrhages." },
      { fr: "Juste : hémorragies limitées au territoire d’une veine, souvent en aval d’un croisement artérioveineux (HTA). Surveiller l’œdème maculaire et la néovascularisation.", en: "Correct: hemorrhages confined to one vein’s territory, often downstream of an arteriovenous crossing (hypertension). Watch for macular edema and neovascularization." },
      { fr: "L’OVCR touche les 4 quadrants à partir de la papille.", en: "CRVO involves all 4 quadrants from the disc." },
      { fr: "La rétinopathie diabétique est diffuse et bilatérale, faite surtout de microanévrismes et d’hémorragies ponctuées.", en: "Diabetic retinopathy is diffuse and bilateral, mostly microaneurysms and dot hemorrhages." }
    ],
    reveal: { fr: "Hémorragies groupées dans le secteur temporal inférieur, rétine supérieure épargnée : occlusion de branche veineuse.", en: "Hemorrhages clustered in the inferotemporal sector, superior retina spared: branch retinal vein occlusion." }
  },
  {
    id: "ic-x09", topic: "general", media: "mi-x09", level: 2,
    q: { fr: "Patient diabétique. Que voit-on sur et autour de la papille?", en: "Diabetic patient. What do you see on and around the disc?" },
    options: [
      { fr: "Néovaisseaux papillaires", en: "Neovascularization of the disc" },
      { fr: "Hémorragie papillaire", en: "Disc hemorrhage" },
      { fr: "Œdème papillaire", en: "Disc swelling" },
      { fr: "Vaisseaux optociliaires", en: "Optociliary shunt vessels" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : lacis de fins vaisseaux anarchiques sur la papille ou à moins d’un diamètre papillaire. Risque d’hémorragie du vitré : panphotocoagulation et/ou anti-VEGF rapidement.", en: "Correct: a net of fine, disorganized vessels on the disc or within one disc diameter. Risk of vitreous hemorrhage: prompt panretinal photocoagulation and/or anti-VEGF." },
      { fr: "L’hémorragie papillaire est une strie en flammèche au bord du disque, pas un lacis.", en: "A disc hemorrhage is a flame streak at the disc margin, not a net." },
      { fr: "L’œdème brouille les bords; il n’explique pas les vaisseaux anormaux.", en: "Swelling blurs the margins; it doesn’t explain abnormal vessels." },
      { fr: "Les vaisseaux optociliaires sont quelques gros vaisseaux en boucle, pas un lacis fin.", en: "Optociliary vessels are a few large looping vessels, not a fine net." }
    ],
    reveal: { fr: "Fines boucles vasculaires sur la papille, avec hémorragies rétiniennes autour : néovaisseaux papillaires.", en: "Fine vascular loops on the disc, with retinal hemorrhages around: disc neovascularization." }
  },
  {
    id: "ic-x10", topic: "general", media: "mi-x10", level: 3,
    q: { fr: "Plus de 70 ans, céphalée temporale, claudication de la mâchoire, perte de vision brutale. Papille ci-contre. Conduite?", en: "Over 70, temporal headache, jaw claudication, sudden vision loss. Disc shown. Management?" },
    options: [
      { fr: "NOIA non artéritique : aspirine et suivi", en: "Non-arteritic AION: aspirin and follow-up" },
      { fr: "Névrite optique : IRM non urgente", en: "Optic neuritis: non-urgent MRI" },
      { fr: "Œdème papillaire : ponction lombaire d’abord", en: "Papilledema: lumbar puncture first" },
      { fr: "NOIA artéritique : corticoïdes le jour même", en: "Arteritic AION: same-day steroids" }
    ],
    answer: 3,
    why: [
      { fr: "La NOIA non artéritique donne plutôt un œdème hyperhémique sur petite papille, sans symptômes systémiques.", en: "Non-arteritic AION gives hyperemic swelling on a small crowded disc, without systemic symptoms." },
      { fr: "La névrite optique touche le jeune, avec douleur aux mouvements oculaires; papille souvent normale.", en: "Optic neuritis affects the young, with pain on eye movement; the disc is often normal." },
      { fr: "L’œdème papillaire de l’HTIC est bilatéral et ne cause pas de perte brutale de l’acuité au début.", en: "Papilledema from raised ICP is bilateral and doesn’t cause sudden acuity loss early on." },
      { fr: "Juste : œdème papillaire pâle, crayeux. Artérite à cellules géantes : risque d’atteinte de l’autre œil en jours. Ne pas attendre la biopsie pour traiter.", en: "Correct: pale, chalky disc swelling. Giant cell arteritis: the other eye can go within days. Don’t wait for the biopsy to treat." }
    ],
    reveal: { fr: "Papille gonflée et d’un blanc crayeux : œdème pâle de la NOIA artéritique (artérite à cellules géantes).", en: "Swollen, chalky-white disc: pallid edema of arteritic AION (giant cell arteritis)." }
  },
  {
    id: "ic-x11", topic: "general", media: "mi-x11", level: 3,
    q: { fr: "Anisocorie. Colonne de gauche : lumière de la pièce; colonne de droite : après quelques secondes dans le noir. Quelle pupille est anormale?", en: "Anisocoria. Left column: room light; right column: after a few seconds in the dark. Which pupil is abnormal?" },
    options: [
      { fr: "Aucune : anisocorie physiologique", en: "Neither: physiologic anisocoria" },
      { fr: "La plus grande : pupille d’Adie", en: "The larger one: Adie pupil" },
      { fr: "La plus petite : Horner probable", en: "The smaller one: probable Horner" },
      { fr: "La plus grande : paralysie du III", en: "The larger one: third nerve palsy" }
    ],
    answer: 2,
    why: [
      { fr: "L’anisocorie physiologique garde le même écart à la lumière et dans le noir.", en: "Physiologic anisocoria keeps the same difference in light and dark." },
      { fr: "Adie : grosse pupille qui réagit mal à la lumière; l’écart augmente à la lumière.", en: "Adie: a large pupil reacting poorly to light; the difference grows in light." },
      { fr: "Juste : anisocorie plus grande dans le noir = la petite pupille est anormale (voie sympathique). Confirmer à l’apraclonidine (inversion de l’anisocorie) ou à la cocaïne; Horner aigu douloureux : penser dissection carotidienne.", en: "Correct: anisocoria larger in the dark = the small pupil is abnormal (sympathetic pathway). Confirm with apraclonidine (reversal) or cocaine; acute painful Horner: think carotid dissection." },
      { fr: "Une grosse pupille anormale (III, Adie) donne une anisocorie plus grande à la lumière.", en: "An abnormal large pupil (CN III, Adie) gives anisocoria greater in light." }
    ],
    reveal: { fr: "Dans le noir, la pupille droite se dilate, la gauche reste petite : l’écart augmente dans le noir, la petite pupille est anormale.", en: "In the dark, the right pupil dilates and the left stays small: the gap grows in the dark, so the small pupil is abnormal." }
  },
  {
    id: "ic-x12", topic: "general", media: "mi-x12", level: 3,
    q: { fr: "Anisocorie légère. Photos à la lumière, dans le noir, puis après un collyre de cocaïne. Conclusion?", en: "Mild anisocoria. Photos in light, in the dark, then after cocaine drops. Conclusion?" },
    options: [
      { fr: "Mydriase médicamenteuse", en: "Drug-induced mydriasis" },
      { fr: "Anisocorie physiologique", en: "Physiologic anisocoria" },
      { fr: "Syndrome de Horner", en: "Horner syndrome" },
      { fr: "Pupille d’Adie", en: "Adie pupil" }
    ],
    answer: 1,
    why: [
      { fr: "Une mydriase pharmacologique ne répond pas à la lumière et l’écart ne serait pas symétrique après cocaïne.", en: "Pharmacologic mydriasis doesn’t react to light, and the gap wouldn’t be symmetric after cocaine." },
      { fr: "Juste : la cocaïne bloque la recapture de la noradrénaline; une pupille ne se dilate que si la voie sympathique est intacte. Les deux se dilatent : pas de Horner.", en: "Correct: cocaine blocks norepinephrine reuptake; a pupil dilates only if its sympathetic pathway is intact. Both dilate: no Horner." },
      { fr: "Dans un Horner, la petite pupille se dilate mal à la cocaïne et l’anisocorie augmente.", en: "In Horner syndrome, the small pupil dilates poorly with cocaine and the anisocoria increases." },
      { fr: "Adie : grosse pupille peu réactive, hypersensible à la pilocarpine diluée.", en: "Adie: a large, poorly reactive pupil, supersensitive to dilute pilocarpine." }
    ],
    reveal: { fr: "Après cocaïne, les deux pupilles se dilatent : voie sympathique intacte des deux côtés.", en: "After cocaine, both pupils dilate: sympathetic pathway intact on both sides." }
  },
  {
    id: "ic-x13", topic: "general", media: "mi-x13", level: 3,
    q: { fr: "Lésion choroïdienne pigmentée au pôle postérieur, avec des dépôts orange en surface. Conduite?", en: "Pigmented choroidal lesion at the posterior pole, with orange deposits on its surface. Management?" },
    options: [
      { fr: "Mélanome suspect : oncologie oculaire", en: "Suspected melanoma: ocular oncology" },
      { fr: "Nævus typique : photo dans un an", en: "Typical nevus: photo in a year" },
      { fr: "Hypertrophie congénitale de l’EPR : aucun suivi", en: "Congenital RPE hypertrophy: no follow-up" },
      { fr: "Hémorragie sous-rétinienne : observer", en: "Subretinal hemorrhage: observe" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : le pigment orange (lipofuscine) est un facteur de risque. Autres : épaisseur > 2 mm, liquide sous-rétinien, symptômes, marge près de la papille, creux acoustique à l’échographie (moyen mnémotechnique TFSOM).", en: "Correct: orange pigment (lipofuscin) is a risk factor. Others: thickness > 2 mm, subretinal fluid, symptoms, margin near the disc, acoustic hollowness on ultrasound (TFSOM mnemonic)." },
      { fr: "Un nævus typique est plat, < 2 mm, souvent avec drusen, sans pigment orange.", en: "A typical nevus is flat, < 2 mm, often with drusen, without orange pigment." },
      { fr: "L’HCEPR est plate, noire, bien limitée, avec lacunes dépigmentées et halo.", en: "CHRPE is flat, black and well defined, with depigmented lacunae and a halo." },
      { fr: "Une hémorragie est rouge sombre et évolue; elle n’a pas de pigment orange en surface.", en: "A hemorrhage is dark red and changes over time; it has no surface orange pigment." }
    ],
    reveal: { fr: "Grande lésion choroïdienne pigmentée avec amas de pigment orange : signe de risque de mélanome.", en: "Large pigmented choroidal lesion with clumps of orange pigment: a melanoma risk sign." }
  }
];

/* Médias : photos EyeRounds CC BY-NC-ND 3.0 uniquement, image entière, hotspots placés à la main (grille sur l’image). */
G.OPH.imageCasesMedia = {
  "mi-c01": { kind: "photo", photo: "OPH-057", alt: { fr: "Lampe à fente : dendrite épithéliale herpétique au centre de la cornée.", en: "Slit lamp: herpetic epithelial dendrite in the central cornea." },
    hotspots: [{ x: 52, y: 56, r: 7, decisive: true, label: { fr: "Lésion épithéliale fine et ramifiée (dendrite)", en: "Fine branching epithelial lesion (dendrite)" } }] },
  "mi-c02": { kind: "photo", photo: "OPH-064", alt: { fr: "Lampe à fente, œil gauche : pseudodendrites du zona colorées.", en: "Slit lamp, left eye: stained zoster pseudodendrites." },
    hotspots: [{ x: 57, y: 58, r: 16, decisive: true, label: { fr: "Plaques ramifiées surélevées, sans bulbes terminaux", en: "Raised branching plaques, no terminal bulbs" } }] },
  "mi-c03": { kind: "photo", photo: "OPH-070", alt: { fr: "Ulcère cornéen à Pseudomonas chez un porteur de lentilles : infiltrat central dense et injection marquée.", en: "Pseudomonas corneal ulcer in a contact lens wearer: dense central infiltrate and marked injection." },
    hotspots: [{ x: 50, y: 50, r: 17, decisive: true, label: { fr: "Infiltrat stromal dense et suppuré", en: "Dense suppurative stromal infiltrate" } }, { x: 22, y: 50, r: 7, label: { fr: "Injection conjonctivale et ciliaire intense", en: "Intense conjunctival and ciliary injection" } }] },
  "mi-c04": { kind: "photo", photo: "OPH-067", alt: { fr: "Kératite à Acanthamoeba : infiltrat stromal en anneau.", en: "Acanthamoeba keratitis: stromal ring infiltrate." },
    hotspots: [{ x: 52, y: 45, r: 15, decisive: true, label: { fr: "Infiltrat stromal en anneau", en: "Stromal ring infiltrate" } }] },
  "mi-c05": { kind: "photo", photo: "OPH-049", alt: { fr: "Fente lumineuse sur la cornée : guttae de la dystrophie de Fuchs sur l’endothélium.", en: "Slit beam on the cornea: Fuchs guttae on the endothelium." },
    hotspots: [{ x: 52, y: 42, r: 14, decisive: true, label: { fr: "Guttae : endothélium en « métal martelé »", en: "Guttae: “beaten-metal” endothelium" } }] },
  "mi-c06": { kind: "photo", photo: "OPH-040", alt: { fr: "Kératocône : stries de Vogt, fines lignes parallèles (obliques sur cette photo) du stroma profond.", en: "Keratoconus: Vogt striae, fine parallel lines (oblique in this photo) in the deep stroma." },
    hotspots: [{ x: 56, y: 56, r: 10, decisive: true, label: { fr: "Stries parallèles du stroma profond (Vogt)", en: "Parallel deep stromal striae (Vogt)" } }] },
  "mi-c07": { kind: "photo", photo: "OPH-043", alt: { fr: "Vue oblique : hydrops cornéen aigu, œdème apical marqué.", en: "Oblique view: acute corneal hydrops with marked apical edema." },
    hotspots: [{ x: 47, y: 45, r: 14, decisive: true, label: { fr: "Œdème stromal au sommet du cône", en: "Stromal edema at the cone apex" } }] },
  "mi-c08": { kind: "photo", photo: "OPH-073", alt: { fr: "Ptérygion qui franchit le limbe et atteint le bord pupillaire.", en: "Pterygium crossing the limbus and reaching the pupil edge." },
    hotspots: [{ x: 43, y: 57, r: 7, decisive: true, label: { fr: "Tête du ptérygion sur la cornée, près de l’axe visuel", en: "Pterygium head on the cornea, near the visual axis" } }, { x: 70, y: 60, r: 10, label: { fr: "Corps fibrovasculaire conjonctival", en: "Fibrovascular conjunctival body" } }] },
  "mi-c09": { kind: "photo", photo: "OPH-086", alt: { fr: "Brûlure chimique alcaline : cornée opaque.", en: "Alkali chemical burn: opaque cornea." },
    hotspots: [{ x: 45, y: 55, r: 14, decisive: true, label: { fr: "Cornée opaque : brûlure alcaline", en: "Opaque cornea: alkali burn" } }] },
  "mi-c10": { kind: "photo", photo: "OPH-104", alt: { fr: "Diffusion sclérale : ligne de Khodadoust (précipités au front du rejet endothélial).", en: "Sclerotic scatter: Khodadoust line (precipitates at the front of endothelial rejection)." },
    hotspots: [{ x: 66, y: 46, r: 8, decisive: true, label: { fr: "Ligne de précipités qui avance sur l’endothélium", en: "Line of precipitates advancing across the endothelium" } }] },
  "mi-c11": { kind: "photo", photo: "OPH-030", alt: { fr: "Fluorescéine au bleu cobalt : abrasion cornéenne centrale.", en: "Fluorescein under cobalt blue: central corneal abrasion." },
    hotspots: [{ x: 52, y: 48, r: 11, decisive: true, label: { fr: "Zone verte : épithélium absent", en: "Green area: missing epithelium" } }] },
  "mi-c12": { kind: "photo", photo: "OPH-075", alt: { fr: "Infiltrats sous-épithéliaux multiples dans l’axe visuel après kératoconjonctivite à adénovirus.", en: "Multiple subepithelial infiltrates in the visual axis after adenoviral keratoconjunctivitis." },
    hotspots: [{ x: 45, y: 55, r: 18, decisive: true, label: { fr: "Opacités rondes sous-épithéliales multiples", en: "Multiple round subepithelial opacities" } }] },
  "mi-g01": { kind: "photo", photo: "OPH-140", alt: { fr: "Fermeture aiguë de l’angle : œil droit rouge à cornée trouble; œil gauche calme.", en: "Acute angle closure: red right eye with hazy cornea; quiet left eye." },
    hotspots: [{ x: 20, y: 45, r: 8, decisive: true, label: { fr: "OD : œil rouge, cornée trouble", en: "OD: red eye, hazy cornea" } }, { x: 81, y: 45, r: 8, label: { fr: "OG : œil calme, cornée claire (comparaison)", en: "OS: quiet eye, clear cornea (comparison)" } }] },
  "mi-g02": { kind: "photo", photo: "OPH-143", alt: { fr: "Glaukomflecken sous la capsule antérieure et atrophie irienne.", en: "Glaukomflecken under the anterior capsule and iris atrophy." },
    hotspots: [{ x: 60, y: 50, r: 12, decisive: true, label: { fr: "Taches blanches sous-capsulaires antérieures", en: "White anterior subcapsular flecks" } }, { x: 85, y: 65, r: 8, label: { fr: "Atrophie irienne", en: "Iris atrophy" } }] },
  "mi-g03": { kind: "photo", photo: "OPH-154", alt: { fr: "Matériel pseudoexfoliatif sur le rebord pupillaire.", en: "Pseudoexfoliative material on the pupil margin." },
    hotspots: [{ x: 37, y: 40, r: 8, decisive: true, label: { fr: "Flocons blancs sur le rebord pupillaire", en: "White flakes on the pupil margin" } }] },
  "mi-g04": { kind: "photo", photo: "OPH-157", alt: { fr: "Rétro-illumination : défauts de transillumination radiaires de l’iris (dispersion pigmentaire).", en: "Retroillumination: radial iris transillumination defects (pigment dispersion)." },
    hotspots: [{ x: 22, y: 55, r: 10, decisive: true, label: { fr: "Fentes radiaires de transillumination", en: "Radial transillumination slits" } }, { x: 85, y: 45, r: 9, label: { fr: "Même aspect du côté opposé", en: "Same pattern on the opposite side" } }] },
  "mi-g05": { kind: "photo", photo: "OPH-160", alt: { fr: "Ligne de Scheie : pigment en périphérie du cristallin, pupille dilatée.", en: "Scheie stripe: pigment at the lens periphery, pupil dilated." },
    hotspots: [{ x: 42, y: 45, r: 10, decisive: true, label: { fr: "Ligne pigmentée en périphérie du cristallin", en: "Pigmented line at the lens periphery" } }] },
  "mi-g06": { kind: "photo", photo: "OPH-319", alt: { fr: "Néovascularisation irienne (œil droit) après une OACR : vaisseaux fins en dentelle près du bord pupillaire (cercle sur la photo).", en: "Iris neovascularization (right eye) after CRAO: fine lacy vessels near the pupil margin (circle on the photo)." },
    hotspots: [{ x: 55, y: 48, r: 15, decisive: true, label: { fr: "Vaisseaux en dentelle à la surface de l’iris", en: "Lacy vessels on the iris surface" } }] },
  "mi-g07": { kind: "photo", photo: "OPH-167", alt: { fr: "Buphtalmie bilatérale : cornées agrandies.", en: "Bilateral buphthalmos: enlarged corneas." },
    hotspots: [{ x: 36, y: 48, r: 6, decisive: true, label: { fr: "Cornée agrandie (OD)", en: "Enlarged cornea (OD)" } }, { x: 69, y: 48, r: 6, decisive: true, label: { fr: "Cornée agrandie (OG)", en: "Enlarged cornea (OS)" } }] },
  "mi-g08": { kind: "photo", photo: "OPH-170", alt: { fr: "Stries de Haab de l’œil droit.", en: "Haab striae, right eye." },
    hotspots: [{ x: 42, y: 50, r: 18, decisive: true, label: { fr: "Lignes curvilignes à double contour (Descemet)", en: "Double-contoured curvilinear lines (Descemet)" } }] },
  "mi-g09": { kind: "photo", photo: "OPH-148", alt: { fr: "Fente lumineuse : iris bombé, convexe, presque au contact de la cornée.", en: "Slit beam: iris bombé, convex, almost touching the cornea." },
    hotspots: [{ x: 47, y: 35, r: 8, decisive: true, label: { fr: "Iris convexe presque collé à la cornée", en: "Convex iris almost against the cornea" } }] },
  "mi-g10": { kind: "photo", photo: "OPH-137", alt: { fr: "Papille droite excavée avec hémorragie papillaire inférotemporale (glaucome à pression normale).", en: "Cupped right disc with an inferotemporal disc hemorrhage (normal-tension glaucoma)." },
    hotspots: [{ x: 47, y: 55, r: 4, decisive: true, label: { fr: "Hémorragie en flammèche au bord inférotemporal", en: "Flame hemorrhage at the inferotemporal margin" } }] },
  "mi-x01": { kind: "photo", photo: "OPH-005", alt: { fr: "Hémorragie sous-conjonctivale étendue.", en: "Extensive subconjunctival hemorrhage." },
    hotspots: [{ x: 50, y: 50, r: 15, decisive: true, label: { fr: "Sang plat sous la conjonctive", en: "Flat blood under the conjunctiva" } }] },
  "mi-x02": { kind: "photo", photo: "OPH-346", alt: { fr: "Hyphéma traumatique : sang déposé dans le bas de la chambre antérieure.", en: "Traumatic hyphema: blood layered at the bottom of the anterior chamber." },
    hotspots: [{ x: 50, y: 72, r: 8, decisive: true, label: { fr: "Niveau de sang dans la chambre antérieure", en: "Blood level in the anterior chamber" } }] },
  "mi-x03": { kind: "photo", photo: "OPH-198", alt: { fr: "Endophtalmie après trabéculectomie : injection, chémosis, hypopyon.", en: "Endophthalmitis after trabeculectomy: injection, chemosis, hypopyon." },
    hotspots: [{ x: 47, y: 55, r: 8, decisive: true, label: { fr: "Hypopyon : niveau blanc-jaune", en: "Hypopyon: white-yellow level" } }, { x: 40, y: 39, r: 7, label: { fr: "Conjonctive supérieure (zone de la bulle) très inflammatoire", en: "Superior conjunctiva (bleb area) markedly inflamed" } }] },
  "mi-x04": { kind: "photo", photo: "OPH-375", alt: { fr: "Sclérite antérieure nodulaire : vaisseaux sclérais engorgés et nodule sous le limbe.", en: "Nodular anterior scleritis: engorged scleral vessels and a nodule below the limbus." },
    hotspots: [{ x: 55, y: 65, r: 12, decisive: true, label: { fr: "Nodule scléral et vaisseaux profonds engorgés", en: "Scleral nodule and engorged deep vessels" } }] },
  "mi-x05": { kind: "photo", photo: "OPH-341", alt: { fr: "Conjonctivite folliculaire : follicules de la conjonctive palpébrale inférieure.", en: "Follicular conjunctivitis: follicles on the lower palpebral conjunctiva." },
    hotspots: [{ x: 50, y: 50, r: 15, decisive: true, label: { fr: "Follicules (grains pâles)", en: "Follicles (pale grains)" } }] },
  "mi-x06": { kind: "photo", photo: "OPH-369", alt: { fr: "Zona ophtalmique : vésicules et croûtes sur base érythémateuse.", en: "Herpes zoster ophthalmicus: vesicles and crusts on a red base." },
    hotspots: [{ x: 15, y: 45, r: 12, decisive: true, label: { fr: "Vésicules et croûtes dans le territoire V1", en: "Vesicles and crusts in the V1 territory" } }, { x: 55, y: 50, r: 9, label: { fr: "Œil rouge avec sécrétions", en: "Red eye with discharge" } }] },
  "mi-x07": { kind: "photo", photo: "OPH-249", alt: { fr: "OACR : rétine blanchâtre avec zone épargnée entre la papille et la macula (artère ciliorétinienne).", en: "CRAO: whitened retina with a spared zone between disc and macula (cilioretinal artery)." },
    hotspots: [{ x: 40, y: 60, r: 14, decisive: true, label: { fr: "Rétine épargnée : territoire ciliorétinien", en: "Spared retina: cilioretinal territory" } }, { x: 30, y: 25, r: 10, label: { fr: "Rétine blanchâtre ischémique", en: "Whitened ischemic retina" } }, { x: 66, y: 55, r: 6, label: { fr: "Papille", en: "Disc" } }] },
  "mi-x08": { kind: "photo", photo: "OPH-254", alt: { fr: "Montage, œil gauche : occlusion de branche veineuse temporale inférieure.", en: "Montage, left eye: inferotemporal branch retinal vein occlusion." },
    hotspots: [{ x: 55, y: 55, r: 22, decisive: true, label: { fr: "Hémorragies limitées au secteur temporal inférieur", en: "Hemorrhages confined to the inferotemporal sector" } }, { x: 25, y: 30, r: 5, label: { fr: "Papille", en: "Disc" } }] },
  "mi-x09": { kind: "photo", photo: "OPH-259", alt: { fr: "Rétinopathie diabétique proliférante : néovaisseaux papillaires.", en: "Proliferative diabetic retinopathy: disc neovascularization." },
    hotspots: [{ x: 13, y: 37, r: 7, decisive: true, label: { fr: "Néovaisseaux sur la papille", en: "New vessels on the disc" } }] },
  "mi-x10": { kind: "photo", photo: "OPH-274", alt: { fr: "NOIA artéritique : papille gonflée et pâle.", en: "Arteritic AION: swollen, pale disc." },
    hotspots: [{ x: 48, y: 62, r: 8, decisive: true, label: { fr: "Œdème papillaire pâle, crayeux", en: "Pale, chalky disc swelling" } }] },
  "mi-x11": { kind: "photo", photo: "OPH-282", alt: { fr: "Photos avant apraclonidine : à la lumière (gauche) et dans le noir (droite); la pupille gauche du patient reste petite dans le noir.", en: "Pre-apraclonidine photos: light (left) and dark (right); the patient’s left pupil stays small in the dark." },
    hotspots: [{ x: 90, y: 10, r: 4, decisive: true, label: { fr: "Noir : pupille gauche du patient, petite", en: "Dark: patient’s left pupil, small" } }, { x: 78, y: 10, r: 4, label: { fr: "Noir : pupille droite, bien dilatée", en: "Dark: right pupil, well dilated" } }] },
  "mi-x12": { kind: "photo", photo: "OPH-281", alt: { fr: "Anisocorie physiologique : à la lumière, dans le noir, puis après cocaïne.", en: "Physiologic anisocoria: in light, in the dark, then after cocaine." },
    hotspots: [{ x: 21, y: 83, r: 5, decisive: true, label: { fr: "Après cocaïne : pupille droite dilatée", en: "After cocaine: right pupil dilated" } }, { x: 80, y: 83, r: 5, decisive: true, label: { fr: "Après cocaïne : pupille gauche dilatée", en: "After cocaine: left pupil dilated" } }] },
  "mi-x13": { kind: "photo", photo: "OPH-286", alt: { fr: "Mélanome choroïdien avec pigment orange en surface.", en: "Choroidal melanoma with orange surface pigment." },
    hotspots: [{ x: 38, y: 48, r: 15, decisive: true, label: { fr: "Lésion pigmentée avec pigment orange", en: "Pigmented lesion with orange pigment" } }, { x: 80, y: 80, r: 5, label: { fr: "Papille", en: "Disc" } }] }
};
