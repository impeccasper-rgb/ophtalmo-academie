// Couche high-yield — Module B (cornée) : capsule b-bases + 14 fiches.
// Tiré uniquement du contenu relu (fiches-cornee*.js, ext-cornee-*.js, capsules.js) et de docs/FACTS.md.
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};
G.OPH.hy = G.OPH.hy || {};
Object.assign(G.OPH.hy, {

  "b-bases": {
    essentials: [
      "Premier réflexe : **trier** ce qui menace la vision ou le globe dans les heures.",
      "**Ulcère** = défaut épithélial + infiltrat avec perte de tissu : infectieux jusqu’à preuve du contraire.",
      "Le **stéroïde topique** est l’outil le plus utile et le plus dangereux de la clinique.",
      "Greffe moderne : **ne remplacer que la couche malade** (PK, DALK, DSAEK ou DMEK).",
      "À chaque visite : AV, PIO, lampe **avant puis après fluorescéine**, dessin de la lésion."
    ],
    cloze: [
      "Ulcère si profond que seule la [[Descemet|membrane de Descemet]], qui bombe, retient encore le contenu de l’œil.",
      "L’endothélium ne se divise pas : chaque perte cellulaire est [[définitive|definitive|permanente|irréversible|irreversible]].",
      "Les dépôts de cellules inflammatoires collés à l’endothélium sont les [[KP|précipités kératiques|precipites keratiques]].",
      "Contrairement à la topographie, la tomographie voit la face postérieure et le point le plus [[mince|fin]].",
      "Une cornée insensible qui guérit mal définit la kératite [[neurotrophique]].",
      "Stéroïde dangereux : dendrite, champignon, amibe non contrôlée, bactérie non couverte ou, même couverte, [[Nocardia]]."
    ],
    triage: [
      { s: "Après un traumatisme, la fluorescéine concentrée se dilue en ruisseau vert brillant au bleu cobalt.", u: "urgent", why: "Seidel positif = plaie ou perforation : le jour même ; protéger le globe, aucune pression sur l’œil." },
      { s: "Défaut épithélial qui ne ferme pas malgré une semaine de lubrification intensive.", u: "rapide", why: "Semi-urgent : escalade vers lentille pansement ou bouchons, puis membrane amniotique ou tarsorraphie." },
      { s: "Sécheresse chronique stable, adressée par l’optométriste pour un suivi.", u: "routine", why: "Électif (semaines à mois) : larmes, soins des paupières, suivi." }
    ],
    cues: [
      "Taille, position, profondeur, fluorescéine, chambre antérieure",
      "Trier : urgent, semi-urgent ou électif",
      "Traiter la cause, protéger l’épithélium, contrôler l’inflammation"
    ]
  },

  "c-secheresse": {
    essentials: [
      "Souvent, pas un manque de larmes : une huile meibomienne de mauvaise qualité (**MGD**).",
      "DEWS III : **sans symptômes, pas de sécheresse** ; OSDI-6 ≥ 4 puis un signe objectif.",
      "Kératite ponctuée **inférieure** : MGD, exposition ou gouttes toxiques ; entre les paupières : manque d’eau.",
      "Yeux secs sous gouttes de glaucome : **BAK** toxique, passer aux gouttes sans agent de conservation."
    ],
    cloze: [
      "Critère DEWS III : temps de rupture sans fluorescéine (NIBUT) inférieur à [[10 s|10 secondes|10]].",
      "Des pellicules cylindriques à la base des cils signent une blépharite à [[Demodex]].",
      "Un Schirmer sans anesthésie sous 5 mm fait chercher un syndrome de [[Sjögren|Sjogren|Gougerot-Sjögren|Gougerot-Sjogren]].",
      "Les bouchons méatiques se posent une fois l’[[inflammation]] calmée.",
      "Encore symptomatique après 1–2 mois de larmes : ajouter des gouttes de cyclosporine ou de [[lifitégrast|lifitegrast]].",
      "Selon l’essai DREAM, les [[oméga-3|omega-3|omégas-3|omegas-3]] ne font pas mieux que le placebo."
    ],
    triage: [
      { s: "Femme de 62 ans : brûlure et sable pires aux écrans, vision qui fluctue au clignement, aucun infiltrat.", u: "routine", why: "Sécheresse chronique, élective : larmes sans agent de conservation, soins des paupières, revoir à 1–3 mois." },
      { s: "Sécheresse connue, nouvel infiltrat blanc avec amincissement de la cornée.", u: "urgent", why: "Infiltrat ou amincissement : ce n’est plus une simple sécheresse ; examen le jour même." },
      { s: "Glaucomateux sous trois gouttes avec agent de conservation : brûlure, kératite ponctuée inférieure.", u: "routine", why: "Toxicité du BAK : gouttes sans agent de conservation, combinaisons fixes ou SLT." }
    ],
    cues: [
      "Vision qui fluctue et s’éclaircit au clignement",
      "Huile épaisse à l’expression des glandes",
      "Brûlure et sable, pires le soir aux écrans"
    ]
  },

  "c-surface": {
    essentials: [
      "Œil rouge : lire la conjonctive, mais la **cornée à la fluorescéine** décide de l’urgence.",
      "**Follicule** : vaisseaux autour de la base (virus, Chlamydia) ; **papille** : vaisseau central (allergie, lentilles).",
      "Adénovirus : **pas d’antibiotique** ; stéroïde seulement si pseudomembranes ou infiltrats qui baissent la vision.",
      "Folliculaire depuis plus de 3–4 semaines malgré les gouttes : penser **Chlamydia**, traiter les partenaires."
    ],
    cloze: [
      "Dans la vernale, les points de [[Horner-Trantas|Horner Trantas|Trantas]] siègent au limbe.",
      "Vernal avec douleur et photophobie nouvelles : chercher un ulcère en [[bouclier]].",
      "Après une conjonctivite adénovirale, le stéroïde expose à un [[rebond]] à l’arrêt.",
      "Rougeur de la conjonctive supérieure avec filaments (KLS) : demander une [[TSH]].",
      "Folliculaire de plus de 3–4 semaines : écouvillon pour un [[TAAN|NAAT|PCR]] (Chlamydia, gonocoque).",
      "Rosacée chez l’enfant de moins de 8 ans : azithromycine ou érythromycine plutôt que [[doxycycline]]."
    ],
    triage: [
      { s: "Garçon vernal de 10 ans : douleur et photophobie nouvelles, défaut ovale de la cornée supérieure.", u: "urgent", why: "Ulcère en bouclier : stéroïde, cyclosporine ou tacrolimus le jour même, grattage de la plaque au besoin." },
      { s: "Œil rouge larmoyant, sable, ganglion préauriculaire, 2e œil atteint en 3 jours, cornée claire.", u: "routine", why: "Adénovirus : compresses froides, larmes, hygiène des mains, pas d’antibiotique ; contagieux environ 2 semaines." },
      { s: "Pus abondant apparu en quelques heures chez un adulte avec un nouveau partenaire sexuel.", u: "urgent", why: "Gonocoque : Gram, culture, TAAN, ceftriaxone systémique le jour même ; risque de perforation." }
    ],
    cues: [
      "Follicules, ganglion préauriculaire, contexte de contagion",
      "Pavés du tarse supérieur, mucus filant",
      "Démangeaison au premier plan, papilles"
    ]
  },

  "c-erosion": {
    essentials: [
      "Douleur vive **au réveil**, des semaines après une égratignure d’ongle : épithélium mal ancré qui s’arrache.",
      "**Jamais d’anesthésique topique** à la maison : l’abus bloque la guérison et peut perforer.",
      "Érosion récidivante : onguent **NaCl 5 %** au coucher pendant 3–6 mois.",
      "EBMD avant une cataracte : **polir d’abord**, puis refaire la biométrie sur une cornée stable."
    ],
    cloze: [
      "Stries verticales qui prennent la fluorescéine en haut : chercher un [[corps étranger|corps etranger]] sous la paupière.",
      "Dans l’EBMD, les zones surélevées donnent une coloration [[négative|negative]] à la fluorescéine.",
      "Les points gris de l’EBMD sont les microkystes de [[Cogan]].",
      "Érosions rebelles : la doxycycline orale bloque la [[MMP-9|MMP9|MMP|métalloprotéinase|metalloproteinase]] qui dissout les ancrages.",
      "Atteinte centrale rebelle : laser excimer qui vaporise la surface, la [[PTK|photokératectomie thérapeutique|photokeratectomie therapeutique]].",
      "Projection métallique à haute vélocité : tomodensitométrie, jamais d’[[IRM]]."
    ],
    triage: [
      { s: "Troisième crise de douleur au réveil depuis une égratignure d’ongle de bébé ; œil calme entre les crises.", u: "rapide", why: "Érosion récidivante, semi-urgente : onguent NaCl 5 % au coucher 3–6 mois ; doxycycline ou polissage si rebelle." },
      { s: "Porteur de lentilles, abrasion il y a 48 h : douleur croissante et nouvel infiltrat blanc.", u: "urgent", why: "Kératite infectieuse jusqu’à preuve du contraire (Pseudomonas) : cultures et traitement le jour même." },
      { s: "Femme de 60 ans, lignes en carte et points gris sans douleur ; cataracte prévue.", u: "routine", why: "EBMD : polir d’abord, puis refaire la biométrie, sinon mauvaise puissance de lentille." }
    ],
    cues: [
      "Douleur vive au réveil, en ouvrant les yeux",
      "Lignes en carte, points gris, empreintes digitales",
      "Égratignure d’ongle quelques semaines plus tôt"
    ]
  },

  "c-bacterienne": {
    essentials: [
      "Défaut épithélial + infiltrat stromal : **infectieux** jusqu’à preuve du contraire, surtout sous lentilles.",
      "Gratter et cultiver **avant l’antibiotique**, sans jamais retarder celui-ci.",
      "**Pas de stéroïde** au départ (SCUT, SCUT II) ; jamais si Nocardia.",
      "**Pas de pansement fermé** : il favorise Pseudomonas et empêche les gouttes aux heures."
    ],
    cloze: [
      "Chez le porteur de lentilles, l’antibiotique doit toujours couvrir [[Pseudomonas]].",
      "Fortifiés : vancomycine 25 mg/mL (ou céfazoline) en alternance avec la [[tobramycine|tobramycin]] 14 mg/mL.",
      "Petit ulcère périphérique sans critère de gravité : [[moxifloxacine|moxifloxacin|fluoroquinolone]] 0,5 % aux heures.",
      "Dans la kératite bactérienne, l’hypopyon est habituellement [[stérile|sterile]].",
      "Fluorescéine concentrée diluée en ruisseau vert brillant : test de [[Seidel]] positif (perforation).",
      "Perforation de 2–3 mm ou moins : [[colle|cyanoacrylate|colle cyanoacrylate|colle de cyanoacrylate]] et lentille pansement."
    ],
    triage: [
      { s: "Porteuse de lentilles, œil rouge douloureux, infiltrat central de 3 mm sous un défaut épithélial.", u: "urgent", why: "Règle 1-2-3 remplie : grattage, cultures et gouttes fortifiées le jour même." },
      { s: "Ulcère sous moxifloxacine depuis 3 jours : amincissement et Seidel positif.", u: "urgent", why: "Perforation : coquille rigide, aucune pression sur l’œil, aviser le patron ; colle si ≤ 2–3 mm." },
      { s: "Ancien ulcère guéri, cicatrice centrale stable qui baisse la vision ; demande de greffe.", u: "routine", why: "Œil calme : bilan électif pour une greffe optique." }
    ],
    cues: [
      "Infiltrat blanc dense sous un défaut épithélial",
      "Nécrose rapide, sécrétions visqueuses, lentilles",
      "Début en quelques heures, porteur de lentilles"
    ]
  },

  "c-atypiques": {
    essentials: [
      "Lentilles + eau + **douleur hors de proportion** = Acanthamoeba jusqu’à preuve du contraire.",
      "Ulcère sans réponse après **48–72 h** d’antibiotiques : arrêter les stéroïdes, reprendre le diagnostic, prélever.",
      "**Jamais de stéroïde** : il freine les neutrophiles qui contiennent le champignon.",
      "MUTT I : **natamycine 5 %** supérieure au voriconazole pour les filamenteux, surtout Fusarium."
    ],
    cloze: [
      "Au stade précoce, l’amibe longe les nerfs cornéens : c’est la [[périnévrite radiaire|perinevrite radiaire|kératonévrite radiaire|keratonevrite radiaire]].",
      "La pseudodendrite amibienne n’a pas de [[bulbes terminaux|bulbes|renflements terminaux|renflements]], contrairement à la dendrite herpétique.",
      "Seule classe active sur les kystes amibiens : les [[biguanides|biguanide|PHMB|chlorhexidine]].",
      "Culture de l’amibe : gélose non nutritive recouverte d’[[E. coli|E coli|Escherichia coli]].",
      "Selon MUTT II, le [[voriconazole]] oral ajouté n’apporte aucun bénéfice.",
      "Au frottis, le [[calcofluor blanc|calcofluor]] fait briller kystes et hyphes."
    ],
    triage: [
      { s: "Porteur de lentilles qui nage au lac : douleur hors de proportion, pseudodendrites, infiltrat en anneau.", u: "urgent", why: "Amibe probable : arrêter tout stéroïde ; grattage profond, cultures spécifiques, PCR, puis biguanide aux heures." },
      { s: "Agriculteur égratigné par une branche il y a 10 jours : infiltrat gris à bords plumeux, satellites.", u: "urgent", why: "Champignon filamenteux : grattage, Sabouraud, natamycine 5 % aux heures, aucun stéroïde." },
      { s: "Ulcère sous gouttes fortifiées depuis 72 h qui empire ; cultures bactériennes négatives.", u: "urgent", why: "Échec à 48–72 h : penser champignon ou amibe ; reprélever (PCR, confocale), arrêter les stéroïdes." }
    ],
    cues: [
      "Lentille rincée à l’eau, douleur énorme",
      "Bords plumeux et lésions satellites",
      "Échec des antibiotiques après 72 h"
    ]
  },

  "c-herpes": {
    essentials: [
      "Dendrite à **bulbes terminaux** + sensibilité cornéenne diminuée = herpès simplex.",
      "Épithéliale (virus vivant) : antiviral ± débridement ; **stéroïde contre-indiqué** sur une dendrite active.",
      "Stromale immune ou endothéliite : **stéroïde sous antiviral oral**, diminué très lentement (HEDS).",
      "Signe de **Hutchinson** (vésicules au bout du nez) : risque élevé d’atteinte oculaire du zona.",
      "Uvéite avec **PIO élevée** : penser trabéculite herpétique (HSV, VZV ou CMV)."
    ],
    cloze: [
      "Un stéroïde prescrit sur une dendrite donne un ulcère [[géographique|geographique]].",
      "Une sensibilité cornéenne [[diminuée|diminuee|réduite|reduite]] oriente vers HSV ou VZV et annonce une kératite neurotrophique.",
      "HSV épithélial : acyclovir [[400 mg|400]] PO 5 fois par jour pendant 7–10 jours.",
      "Zona ophtalmique : valacyclovir [[1 g|1g|1000 mg]] TID × 7 jours, idéalement dans les 72 h.",
      "Valacyclovir 1 g par jour pendant 1 an après zona ophtalmique : essai [[ZEDS]], 27 % moins d’atteinte à 18 mois.",
      "Le vaccin Shingrix est recommandé dès [[50 ans|50]], même après un épisode de zona."
    ],
    triage: [
      { s: "Vésicules du front et du bout du nez, baisse de vision et PIO élevée.", u: "urgent", why: "Zona avec Hutchinson, baisse de vision et PIO élevée : examen urgent, valacyclovir 1 g TID." },
      { s: "Herpès oculaire connu : nouvelle dendrite à bulbes terminaux, vision conservée.", u: "rapide", why: "Récidive d’herpès connu, semi-urgente : antiviral oral ± débridement ; arrêter tout stéroïde." },
      { s: "Kératite herpétique connue : infiltrat stromal qui fond, amincissement.", u: "urgent", why: "Ulcère stromal qui fond : surinfection ou perforation à craindre ; cultures, avis le jour même." }
    ],
    cues: [
      "Dendrite à bulbes terminaux",
      "Sensibilité cornéenne diminuée, récidives unilatérales",
      "Vésicules sur le bout du nez"
    ]
  },

  "c-peripherie": {
    essentials: [
      "**Intervalle clair** + blépharite = kératite marginale ; croissant collé au limbe = PUK.",
      "Cornée qui fond : **pas d’AINS topiques**, qui favorisent la fonte ; doxycycline orale.",
      "**Phényléphrine 2,5 %** : l’épisclérite blanchit, la sclérite (plexus profond) persiste.",
      "Terrien : **œil blanc indolore**, gouttière supérieure bordée de lipides, astigmatisme contre la règle."
    ],
    cloze: [
      "La cause systémique la plus fréquente de PUK est la [[polyarthrite rhumatoïde|polyarthrite rhumatoide|PR]].",
      "Bilan de PUK : on cherche une vasculite par le dosage des [[ANCA]].",
      "À l’échographie B, la sclérite postérieure donne le signe du [[T]].",
      "Plage sclérale bleutée ou blanche, avasculaire : sclérite [[nécrosante|necrosante]].",
      "Ulcère périphérique très douloureux à bord surplombant, bilan négatif : ulcère de [[Mooren]].",
      "Perforation de PUK de plus de 2–3 mm : greffe [[tectonique]]."
    ],
    triage: [
      { s: "Polyarthrite rhumatoïde : croissant d’amincissement collé au limbe avec défaut épithélial.", u: "urgent", why: "PUK : bilan systémique, rhumatologie et corticostéroïdes systémiques le jour même." },
      { s: "Douleur profonde qui réveille la nuit, globe sensible, plage sclérale bleutée.", u: "urgent", why: "Sclérite nécrosante : corticostéroïdes systémiques et immunosuppresseur ; rhumatologie contactée le jour même." },
      { s: "Homme, œil blanc indolore, gouttière supérieure bordée de lipides, astigmatisme qui augmente lentement.", u: "routine", why: "Terrien, non inflammatoire : lentille rigide ou sclérale ; greffe lamellaire si amincissement extrême." }
    ],
    cues: [
      "Croissant d’amincissement collé au limbe",
      "Rougeur violacée qui ne blanchit pas",
      "Gouttière supérieure bordée de lipides, œil blanc"
    ]
  },

  "c-pterygion": {
    essentials: [
      "Ptérygion : aile **nasale** (UV) qui franchit le limbe ; pas la pinguécula.",
      "**Autogreffe conjonctivale** après exérèse : récidive bien plus faible qu’avec la sclère nue.",
      "Ptérygion et cataracte : **enlever le ptérygion d’abord**, puis refaire la biométrie.",
      "Pseudoptérygion : après brûlure ou trauma ; **la sonde passe sous le col**."
    ],
    cloze: [
      "Le dépôt de fer brun devant la tête du ptérygion est la ligne de [[Stocker]].",
      "Le ptérygion nasal induit un astigmatisme [[direct|conforme|with-the-rule]] : méridien vertical plus cambré.",
      "Récidive ou lésion charnue chez un jeune : ajouter [[mitomycine C|mitomycine|MMC]] ou membrane amniotique.",
      "Lésion suspecte d’OSSN : [[AS-OCT|OCT du segment antérieur|OCT]] ou biopsie avant toute exérèse.",
      "OSSN : exérèse sans toucher, marges saines et [[cryothérapie|cryotherapie]] des bords.",
      "Pigment conjonctival nouveau ou qui grossit : craindre un [[mélanome|melanome]]."
    ],
    triage: [
      { s: "Travailleur extérieur : aile rosée nasale à 2 mm sur la cornée, irritation légère.", u: "routine", why: "Ptérygion sans menace pour l’axe : protection UV, larmes, photo et mesure au suivi." },
      { s: "Homme de 70 ans greffé rénal : lésion limbique gélatineuse avec vaisseaux nourriciers.", u: "rapide", why: "OSSN jusqu’à preuve du contraire : AS-OCT, biopsie et oncologie oculaire avant toute chirurgie." }
    ],
    cues: [
      "Aile rosée nasale qui franchit le limbe",
      "Ligne de Stocker devant la tête",
      "Soleil cumulatif, travail extérieur"
    ]
  },

  "c-depots": {
    essentials: [
      "Devant une opacité : **couche, couleur, contexte** mènent au dépôt et au bilan.",
      "**Arc** avant 50 ans : bilan lipidique ; arc unilatéral : sténose carotidienne du côté sans arc.",
      "Bande blanc crayeux dans la Bowman = **calcium** ; chez l’enfant, chercher l’AJI.",
      "**Kayser-Fleischer** : cuivre dans la Descemet = Wilson ; Fleischer : fer autour du cône."
    ],
    cloze: [
      "Cornée verticillée : amiodarone, hydroxychloroquine ou maladie de [[Fabry]].",
      "Kératopathie en bande gênante : grattage, puis chélation à l’[[EDTA|EDTA disodique]].",
      "Plaque blanche crayeuse dans un ulcère traité aux heures : précipité de [[ciprofloxacine|cipro|ciprofloxacin]].",
      "L’anneau de Kayser-Fleischer débutant se voit parfois seulement en [[gonioscopie]].",
      "Vaisseaux fantômes bilatéraux dans le stroma profond : séquelle de [[syphilis]] congénitale.",
      "Hyphéma chez un [[drépanocytaire|drepanocytaire]] : nerf optique fragile même à PIO modérée."
    ],
    triage: [
      { s: "Greffé sous stéroïde : cristaux blancs ramifiés dans le greffon, peu de rougeur.", u: "urgent", why: "Kératopathie cristalline infectieuse (viridans) jusqu’à preuve du contraire : cultures, antibiotique intensif." },
      { s: "Homme de 38 ans : anneau gris-blanc périphérique avec intervalle lucide, vision normale.", u: "routine", why: "Arc précoce : bilan lipidique, lettre au médecin de famille (hypercholestérolémie familiale)." },
      { s: "Patient sous amiodarone : lignes brun doré en tourbillon sous la pupille, vision normale.", u: "routine", why: "Cornée verticillée : rassurer et documenter ; vision rarement touchée." }
    ],
    cues: [
      "Plaque blanc crayeux entre les paupières, trouée",
      "Lignes brun doré en tourbillon épithélial",
      "Anneau brun-vert dans la Descemet périphérique"
    ]
  },

  "c-keratocone": {
    essentials: [
      "Jeune qui se frotte les yeux, astigmatisme irrégulier qui augmente : **tomographie** de référence.",
      "Enfant : **CXL dès le diagnostic** (consensus 2025), sans attendre de progression documentée.",
      "Adulte : CXL si **progression documentée**, sans la retarder pour faire cesser le frottement.",
      "CXL epi-off standard : stroma **≥ 400 µm** pour protéger l’endothélium des UV.",
      "Tomographie anormale chez un candidat au LASIK : **chirurgie contre-indiquée** (risque d’ectasie)."
    ],
    cloze: [
      "Les stries de [[Vogt]] disparaissent quand on appuie sur l’œil.",
      "Le signe de [[Munson]] est une paupière inférieure en V au regard en bas.",
      "L’anneau de Fleischer est un dépôt de [[fer]] autour de la base du cône.",
      "À la tomographie, l’élévation [[postérieure|posterieure]] révèle les formes débutantes.",
      "Protocole de Dresde : 3 mW/cm² pendant [[30 min|30 minutes|30]].",
      "Dans le kératocône, on préfère la [[DALK]] à la PK : pas de rejet endothélial."
    ],
    triage: [
      { s: "Garçon de 14 ans : kératocône découvert à la tomographie, vision correcte en lunettes.", u: "rapide", why: "Enfant : progression rapide ; CXL dès le diagnostic, sans attendre la progression." },
      { s: "Kératocône connu : baisse brutale de vision, cornée blanche et épaissie, Seidel négatif.", u: "rapide", why: "Hydrops aigu, semi-urgent (pas une perforation) : cycloplégique, NaCl 5 %, stéroïde ; résorption en quelques mois." },
      { s: "Femme de 32 ans : kératocône stable sur deux tomographies, bien corrigée en lentilles rigides.", u: "routine", why: "Pas de progression : surveillance ; pas de CXL epi-on préventive." }
    ],
    cues: [
      "Reflet en ciseaux à la rétinoscopie",
      "Cambrure inférieure, nœud papillon asymétrique",
      "Stries de Vogt et signe de Munson"
    ]
  },

  "c-dystrophies": {
    essentials: [
      "Opacités **bilatérales et symétriques**, sans vaisseaux ni inflammation, familiales : dystrophie ; situer la couche.",
      "Granulaire : miettes nettes, stroma clair entre elles ; **maculaire** : voile jusqu’au limbe, cornée mince.",
      "Seule la dystrophie **maculaire est récessive** (CHST6) ; granulaire et grillagée : dominantes (TGFBI).",
      "Mutation **TGFBI** ou opacités en flocons : pas de LASIK, les dépôts prolifèrent à l’interface."
    ],
    cloze: [
      "Dystrophie grillagée : dépôts d’[[amyloïde|amyloide]] colorés au rouge Congo.",
      "Dystrophie maculaire : mucopolysaccharides colorés au bleu [[Alcian]].",
      "Opacités en flocons chez un candidat au LASIK : penser à la dystrophie d’[[Avellino]].",
      "Érosions dès l’enfance et récidive rapide après PTK : dystrophie de [[Reis-Bücklers|Reis-Bucklers|Reis Bücklers|Reis Bucklers]].",
      "La dystrophie polymorphe postérieure peut gagner l’angle : faire une [[gonioscopie]] et mesurer la PIO.",
      "Nourrisson aux cornées troubles : exclure un [[glaucome congénital|glaucome congenital]] avant de conclure à une CHED."
    ],
    triage: [
      { s: "Candidat au LASIK : quelques opacités stromales en flocons aux deux yeux, vision normale.", u: "routine", why: "Exclure une dystrophie TGFBI (Avellino) : test génétique avant toute chirurgie réfractive." },
      { s: "Opacité stromale unilatérale avec œil rouge et douleur, sans histoire familiale.", u: "urgent", why: "Unilatérale, rouge ou douloureuse : infection, pas dystrophie ; à voir le jour même." }
    ],
    cues: [
      "Miettes de pain blanches, stroma clair entre elles",
      "Lignes ramifiées réfringentes dans le stroma central",
      "Opacités bilatérales symétriques, familiales, sans vaisseaux"
    ]
  },

  "c-fuchs": {
    essentials: [
      "Vision floue **au réveil** qui s’éclaircit en journée : œdème cornéen par endothélium défaillant.",
      "**Guttae centrales** en métal martelé ; seulement périphériques (Hassall-Henle) : vieillissement normal.",
      "Guttae + cataracte : chercher l’**œdème infraclinique** (Scheimpflug) avant d’opérer.",
      "**DMEK** en premier choix : meilleure vision, récupération rapide, rejet le plus rare.",
      "PIO élevée : la baisser **sans IAC topique**, qui freine la pompe endothéliale."
    ],
    cloze: [
      "En microscopie spéculaire, les guttae apparaissent comme des zones [[noires|noire|sombres]].",
      "Fuchs : expansion de répétitions CTG18.1 dans le gène [[TCF4]].",
      "Triple procédure : viser une légère myopie, car la DMEK induit un virage [[hypermétropique|hypermetropique]].",
      "Œdème épithélial léger : NaCl 5 % et [[séchoir|sechoir|séchoir à cheveux|sechoir a cheveux]] au réveil.",
      "Greffon de DMEK décollé : nouvelle bulle par réinjection d’[[air|air ou gaz|gaz]] (rebubbling).",
      "Greffe endothéliale dans un œil complexe (vitré retiré, tube, lentille de chambre antérieure) : préférer la [[DSAEK|DSEK]]."
    ],
    triage: [
      { s: "Femme de 65 ans : guttae centrales, flou matinal léger, pas de cataracte significative.", u: "routine", why: "Fuchs débutant, électif : NaCl 5 %, séchoir ; spéculaire et pachymétrie au suivi." },
      { s: "Fuchs avancé : bulle crevée, douleur et nouvel infiltrat blanc.", u: "urgent", why: "Kératite infectieuse sur bulle crevée : cultures et antibiotiques le jour même." },
      { s: "Guttae centrales et cataracte qui gêne ; chirurgie envisagée.", u: "routine", why: "Bilan électif : spéculaire et Scheimpflug ; œdème même infraclinique : triple procédure." }
    ],
    cues: [
      "Vision floue au réveil, s’éclaircit en journée",
      "Métal martelé en réflexion spéculaire",
      "Guttae centrales, plis de Descemet"
    ]
  },

  "c-greffe": {
    essentials: [
      "Risque de rejet : **PK > DSAEK > DMEK** ; la DALK n’a pas de rejet endothélial.",
      "**Ligne de Khodadoust** : KP qui avancent, greffon œdémateux derrière ; rejet endothélial, le plus grave.",
      "Infiltrat sur le greffon ou près d’une suture : **cultiver avant** de monter les stéroïdes.",
      "Rejet : **prednisolone 1 % aux heures** + cycloplégique ; antiviral si antécédent d’herpès."
    ],
    cloze: [
      "Rejet stromal : infiltrats sous-épithéliaux limités au greffon, les taches de [[Krachmer]].",
      "Le rejet [[épithélial|epithelial]], le plus bénin, donne une ligne surélevée qui prend la fluorescéine.",
      "Astigmatisme après PK : couper d’abord la suture du méridien le plus [[cambré|cambre]].",
      "Greffon œdémateux dès le lendemain, jamais clair : échec [[primaire|primitif]].",
      "Le rejet est souvent [[réversible|reversible]] s’il est traité tôt ; l’échec demande souvent une regreffe.",
      "Rejet endothélial sévère : ajouter de la [[triamcinolone]] sous-ténonienne ou de la prednisone orale."
    ],
    triage: [
      { s: "PK il y a 8 mois : œil rouge, photophobie et vision ↓ depuis l’arrêt des gouttes.", u: "urgent", why: "RSVP : rejet probable ; prednisolone 1 % aux heures et cycloplégique le jour même." },
      { s: "PK : suture lâche entourée d’un infiltrat blanc avec défaut épithélial.", u: "urgent", why: "Infection jusqu’à preuve du contraire : culture, antibiotiques, retrait de la suture." },
      { s: "DMEK il y a 3 ans : œil calme, vision stable, 1 goutte de stéroïde par jour.", u: "routine", why: "Suivi habituel : PIO à chaque visite ; ne jamais cesser le stéroïde seul." }
    ],
    cues: [
      "Ligne de Khodadoust",
      "Taches de Krachmer, ligne épithéliale surélevée",
      "RSVP après l’arrêt des stéroïdes"
    ]
  },

  "c-brulure": {
    essentials: [
      "Irrigation ≥ 30 min jusqu’à **pH 7,0–7,5**, recontrôlé 5–10 min après la fin.",
      "Les **bases** sont pires : elles saponifient les membranes et pénètrent ; l’acide coagule et fait barrière.",
      "Piège : un œil **blanc** (limbe ischémique) est souvent plus grave qu’un œil rouge.",
      "Stéroïde **≤ 10–14 jours** puis sevrage rapide : au-delà, il favorise la fonte."
    ],
    cloze: [
      "Chaux et plâtre : chercher les particules par double [[éversion|eversion]] de la paupière supérieure.",
      "Exception chez les acides : l’acide [[fluorhydrique|HF]] pénètre au lieu de faire barrière.",
      "La classification de [[Roper-Hall|Roper Hall]] combine opacité cornéenne et ischémie limbique.",
      "Grades II–IV : doxycycline, ascorbate oral et [[membrane amniotique]] précoce.",
      "Insuffisance limbique : greffe de limbe prélevé sur l’autre œil, comme la [[CLAU|SLET]].",
      "Brûlure au travail : remplir les formulaires de la [[CNESST]]."
    ],
    triage: [
      { s: "Ciment projeté dans l’œil il y a 10 minutes.", u: "urgent", why: "Irriguer immédiatement (eau du robinet si rien d’autre), avant l’histoire et l’acuité, jusqu’à pH 7,0–7,5." },
      { s: "Brûlure par une base, déjà irriguée : limbe blanc sur plus de la moitié, cornée opaque.", u: "urgent", why: "Grade IV : ophtalmologiste d’urgence, traitement intensif, membrane amniotique précoce." },
      { s: "Brûlure irriguée, pH 7,2 : cornée claire, aucune ischémie limbique.", u: "rapide", why: "Grade I : antibiotique, lubrifiants, cycloplégique ; revoir en 1–2 jours." }
    ],
    cues: [
      "Limbe blanc sans vaisseaux perfusés",
      "Particules sous la paupière, pH qui remonte",
      "Cornée blanche en porcelaine après un débouche-tuyaux"
    ]
  }

});
