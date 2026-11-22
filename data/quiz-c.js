var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// Module C — Glaucome : 20 QCM (C-001 à C-020) — g-gpao, g-hto, g-gpn, g-fermeture, g-crise, g-bonus

G.OPH.quiz = (G.OPH.quiz || []).concat([
  { id: "C-001", module: "C", topic: "g-gpao", type: "image", level: 1, trap: false,
    stem: "Homme de 58 ans, PIO 24 mmHg OD, angle ouvert à la gonioscopie. Le schéma montre l’OCT de la couche des fibres nerveuses rétiniennes (retinal nerve fiber layer, RNFL) péripapillaire de l’OD, avec la courbe TSNIT et les secteurs. Quel défaut du champ visuel est le plus compatible avec cette atteinte ?",
    figure: { type: "oct", pattern: "inf-thin" },
    options: [
      "Défaut arciforme inférieur ou ressaut nasal inférieur",
      "Hémianopsie bitemporale respectant le méridien vertical",
      "Élargissement isolé de la tache aveugle",
      "Défaut arciforme supérieur ou ressaut nasal supérieur"
    ],
    answer: 3,
    explain: "La RNFL inférieure est amincie. L’image est inversée sur la rétine : les fibres inférieures voient le champ supérieur. Défaut arciforme ou ressaut nasal supérieur, limité par le méridien horizontal.",
    deep: "**Ce que montre l’OCT (tomographie par cohérence optique : imagerie en coupe) :** la RNFL (les axones des cellules ganglionnaires qui convergent vers la papille) est amincie au pôle inférieur, le site le plus souvent touché en premier dans le glaucome (surtout en inférotemporal). **Pourquoi :** l’image est inversée sur la rétine, donc les fibres inférieures portent l’information de l’hémichamp supérieur, et elles s’arrêtent au raphé horizontal. **Conséquence :** on attend un défaut arciforme supérieur ou un ressaut nasal supérieur (nasal step : marche d’escalier au bord nasal du champ, le long du méridien horizontal) ; on vérifie toujours que structure (OCT, papille) et fonction (champ) concordent.",
    why: [
      "C’est l’inverse : un défaut inférieur du champ vient d’une atteinte supérieure de la papille ou de la RNFL.",
      "Une hémianopsie bitemporale (perte des deux champs temporaux) vient d’une compression du chiasma, pas d’une perte de RNFL inférieure d’un seul œil.",
      "La tache aveugle (projection de la papille dans le champ) s’élargit surtout avec un œdème papillaire (papille gonflée) ou une atteinte autour du disque, pas avec un amincissement focal inférieur.",
      "Exact : RNFL inférieure amincie → défaut du champ supérieur qui respecte le méridien horizontal."
    ] },
  { id: "C-002", module: "C", topic: "g-gpao", type: "cat", level: 1, trap: false,
    stem: "Femme de 63 ans, asthmatique, dirigée par son optométriste. Diagnostic de glaucome primaire à angle ouvert (GPAO ; primary open-angle glaucoma) débutant à l’OD : PIO 26 mmHg, encoche inférieure de la papille, ressaut nasal supérieur au champ visuel, angle ouvert à la gonioscopie. Elle préfère éviter les gouttes quotidiennes. Selon le Preferred Practice Pattern (PPP) GPAO de l’AAO publié en 2026, quelle est la meilleure première option ?",
    figure: null,
    options: [
      "Trabéculoplastie sélective au laser (SLT) en première intention",
      "Timolol 0,5 %, peu coûteux et bien toléré à la surface oculaire",
      "Trabéculectomie d’emblée pour éviter toute médication à long terme",
      "Observation sans traitement jusqu’à une progression documentée"
    ],
    answer: 0,
    explain: "Le PPP 2026 de l’AAO appuie la SLT en première intention : efficace, sans gouttes quotidiennes ni effets systémiques. Le timolol est à éviter chez une asthmatique.",
    deep: "**Rappel :** le GPAO est une atteinte lente et indolore du nerf optique, avec un angle de drainage ouvert, souvent liée à une PIO trop haute pour ce nerf. **Ce que c’est :** la SLT (selective laser trabeculoplasty) est un laser doux fait en clinique, à travers une lentille, sur le trabéculum (le filtre de l’angle) ; il déclenche un remodelage du filtre, dont la couche collée au canal de Schlemm (tissu juxtacanaliculaire) est le principal site de résistance à l’écoulement dans le GPAO. **Pourquoi en premier :** le PPP 2026 appuie plus fortement la SLT en première intention grâce à l’essai LiGHT (SLT vs gouttes en première intention) : à 6 ans, 69,8 % des yeux traités par SLT étaient à la cible sans autre traitement, avec moins de progression (19,6 % vs 26,8 %) et environ 3 fois moins de trabéculectomies. **Quoi faire :** fixer une PIO cible individualisée (point de départ ≈ 20–30 % sous la PIO de base), faire la SLT, puis contrôler la PIO et suivre OCT et champ visuel.",
    why: [
      "Exact : efficace, sans gouttes quotidiennes ni effets systémiques, idéale chez cette asthmatique.",
      "Le timolol (bêtabloquant en gouttes qui réduit la production d’humeur aqueuse) passe dans la circulation et peut déclencher un bronchospasme (fermeture brutale des bronches) : il est contre-indiqué en cas d’asthme.",
      "La trabéculectomie (chirurgie qui crée une fistule vers une poche sous la conjonctive, la bulle) comporte plus de risques ; on la réserve à l’échec du laser et des gouttes ou à une atteinte avancée.",
      "Un glaucome avec atteinte de la papille et du champ se traite : dans l’EMGT (Early Manifest Glaucoma Trial, essai sur le glaucome débutant), le traitement a réduit la progression (45 % vs 62 %)."
    ] },
  { id: "C-003", module: "C", topic: "g-gpao", type: "image", level: 2, trap: true,
    stem: "Homme de 74 ans, GPAO stable depuis 6 ans (PIO 14–15 mmHg sous latanoprost). Il se plaint d’éblouissement la nuit et son AV est passée de 6/7,5 (20/25) à 6/15 (20/50) ; le MD (mean deviation) du champ 24-2 a baissé de 3 dB en un an. Le schéma montre la carte de déviation totale (total deviation) de l’OD ; la carte de déviation corrigée (pattern deviation) est inchangée par rapport aux examens antérieurs. Quelle est l’interprétation la plus juste ?",
    figure: { type: "vf", pattern: "generalized", eye: "OD", map: "td" },
    options: [
      "Progression glaucomateuse rapide : ajouter un deuxième médicament",
      "Atteinte neurologique diffuse : demander une IRM cérébrale",
      "Dépression diffuse due à la cataracte : pas de progression démontrée",
      "Examen non fiable : refaire le champ avec la stratégie SITA Fast"
    ],
    answer: 2,
    explain: "La cataracte assombrit tout le champ : la déviation totale et le MD baissent, la déviation corrigée ne bouge pas. Tant que celle-ci est stable, aucune progression du glaucome n’est démontrée.",
    deep: "**Ce que montrent les cartes :** le MD résume le déficit global du champ ; la déviation totale (TD) compare chaque point à la normale pour l’âge, alors que la déviation corrigée (PD) retire d’abord la baisse générale pour ne garder que les défauts localisés. **Pourquoi c’est important :** une opacité des milieux comme la cataracte assombrit tout le champ de façon uniforme : TD et MD s’aggravent, mais la PD reste stable, ce qui n’est pas une progression glaucomateuse (celle-ci crée ou creuse des défauts localisés). **Quoi faire :** confirmer la stabilité à l’OCT et à la papille, diriger vers la chirurgie de cataracte, puis refaire un champ de référence après l’opération.",
    why: [
      "Piège : le MD baisse par dépression diffuse, sans nouveau défaut localisé ; ajouter une goutte n’est pas justifié.",
      "Une atteinte neurologique donne des défauts localisés qui respectent le méridien vertical, pas une dépression uniforme avec une PD stable.",
      "Exact : TD abaissée et PD stable = effet de la cataracte, concordant avec l’éblouissement et la baisse d’AV.",
      "Rien n’indique un manque de fiabilité (faux positifs, pertes de fixation) ; passer à SITA Fast (stratégie plus courte mais moins précise) empêcherait aussi l’analyse de progression par rapport aux examens antérieurs."
    ] },
  { id: "C-004", module: "C", topic: "g-gpao", type: "cat", level: 2, trap: false,
    stem: "Homme de 71 ans, GPAO avancé aux deux yeux, AV 6/7,5 (20/25) à chaque œil. Le schéma montre la carte de déviation corrigée du champ 24-2 de son OD ; l’OS montre un défaut semblable mais moins étendu. Il demande s’il peut continuer à conduire sa voiture (permis de classe 5). Quelle est la conduite la plus appropriée ?",
    figure: { type: "vf", pattern: "double-arcuate", eye: "OD", map: "pd" },
    options: [
      "Lui dire de cesser de conduire : un glaucome avancé suspend d’office le permis",
      "Faire un champ binoculaire (Esterman) et le comparer aux normes de la SAAQ",
      "Le rassurer : avec une AV de 6/7,5 aux deux yeux, il satisfait aux normes",
      "Se fier au champ 24-2 de chaque œil, suffisant pour remplir le rapport SAAQ"
    ],
    answer: 1,
    explain: "Le 24-2 teste un œil à la fois, sur 24° seulement. La SAAQ juge un champ binoculaire : au moins 100° à l’horizontale. Les deux yeux ensemble peuvent combler leurs trous : on fait un Esterman.",
    deep: "**Ce que c’est :** pour la classe 5, la SAAQ exige une AV binoculaire ≥ 6/15 (20/50) et un champ binoculaire continu d’au moins 100° sur le méridien horizontal (dont ≥ 30° de chaque côté du méridien vertical), 10° au-dessus et 20° au-dessous de la fixation. **Pourquoi :** le 24-2 teste un œil à la fois et seulement les 24° centraux ; les deux yeux ensemble peuvent combler les trous de l’un et de l’autre, d’où l’exigence d’un champ binoculaire signé dès qu’un défaut existe (Esterman : test de dépistage fait les deux yeux ouverts, ou Goldmann III/4e). **Quoi faire :** demander l’Esterman, remplir le rapport et conseiller le patient ; le glaucome n’entraîne pas de suspension automatique, mais une restriction (ex. conduite de nuit) ou une recommandation d’arrêt reste possible.",
    why: [
      "Faux : il n’y a pas de suspension automatique ; tout dépend de l’AV et du champ binoculaire mesurés.",
      "Exact : seul un champ binoculaire permet de vérifier le seuil de 100° horizontal et les limites au-dessus et au-dessous de la fixation.",
      "L’AV ne suffit pas : un glaucome avancé peut laisser une bonne vision centrale avec un champ trop étroit pour conduire.",
      "Le 24-2 monoculaire ne couvre que les 24° centraux d’un œil ; la SAAQ exige un champ binoculaire signé (Esterman ou Goldmann III/4e)."
    ] },
  { id: "C-005", module: "C", topic: "g-hto", type: "physiopathologie", level: 2, trap: false,
    stem: "Homme de 61 ans : PIO de 27 mmHg aux deux yeux à trois visites, angles ouverts, papilles normales, champ visuel 24-2 et OCT normaux. La pachymétrie (mesure de l’épaisseur centrale de la cornée ; pachymetry) donne 520 µm aux deux yeux. Pourquoi ce résultat est-il important ?",
    figure: null,
    options: [
      "Le Goldmann surestime sa PIO : la vraie est probablement normale",
      "Le Goldmann sous-estime sa PIO, et une cornée mince augmente le risque",
      "Elle n’a d’importance qu’après une chirurgie réfractive au laser (LASIK)",
      "Il faut corriger sa PIO par une formule fixe et traiter selon ce chiffre"
    ],
    answer: 1,
    explain: "Le Goldmann suppose une cornée d’épaisseur moyenne. Une cornée mince s’aplatit plus facilement : la PIO lue est trop basse. Dans OHTS, une cornée mince est aussi un facteur de risque de conversion en glaucome.",
    deep: "**Ce que c’est :** la cornée centrale mesure en moyenne 540–550 µm ; le tonomètre de Goldmann aplatit la cornée en supposant une épaisseur moyenne. **Pourquoi c’est important :** une cornée mince s’aplatit plus facilement, donc la PIO lue est plus basse que la vraie ; de plus, dans l’Ocular Hypertension Treatment Study (OHTS), une cornée ≤ 555 µm comportait environ 3 fois plus de risque de conversion en glaucome qu’une cornée > 588 µm. **Quoi faire :** ne pas appliquer de formule de correction mécaniquement, mais intégrer la cornée mince au risque global ; chez cet hypertendu oculaire (ocular hypertension : PIO élevée sans atteinte du nerf), on propose un traitement, qui a réduit la conversion à 5 ans de 9,5 % à 4,4 % dans l’OHTS.",
    why: [
      "C’est l’inverse : une cornée épaisse fait surestimer la PIO, une cornée mince la fait sous-estimer.",
      "Exact : la vraie PIO est probablement plus haute que 27 mmHg et le risque de conversion est plus élevé (OHTS).",
      "Le LASIK amincit la cornée et fait sous-estimer la PIO, mais une cornée naturellement mince compte aussi, comme l’a montré l’OHTS.",
      "Les formules de correction sont imprécises, car la rigidité de la cornée varie d’une personne à l’autre ; on intègre plutôt l’épaisseur au risque global."
    ] },
  { id: "C-006", module: "C", topic: "g-hto", type: "image", level: 2, trap: false,
    stem: "Femme de 34 ans, myope de −8,00 D, dirigée pour « glaucome » à cause d’un OCT fait chez son optométriste. PIO 15 mmHg aux deux yeux, angles ouverts, papilles inclinées (tilted discs) entourées d’atrophie péripapillaire, champ visuel 24-2 normal et fiable. Le schéma montre son OCT de la couche des fibres nerveuses rétiniennes (RNFL). Quelle est la conduite la plus appropriée ?",
    figure: { type: "oct", pattern: "red-disease" },
    options: [
      "Reconnaître un probable faux positif et établir une base de suivi",
      "Confirmer un glaucome débutant et prescrire un analogue des prostaglandines",
      "Proposer une SLT d’emblée, car la myopie forte est un facteur de risque",
      "Répéter l’OCT dans une semaine : un 2e résultat rouge confirmera le glaucome"
    ],
    answer: 0,
    explain: "La base normative de l’OCT contient peu de myopes forts. Papille inclinée et atrophie péripapillaire faussent la mesure : du rouge sans maladie. Avec une PIO et un champ normaux, on établit une base et on suit la tendance.",
    deep: "**Ce que montre l’OCT :** des secteurs en rouge, c’est-à-dire une RNFL plus mince que la base de données normative de l’appareil. **Pourquoi il faut s’en méfier :** cette base contient peu de myopes forts ; une papille inclinée (disque ovale et oblique, fréquent chez le myope fort), l’atrophie péripapillaire (zone pâle où la rétine et l’épithélium pigmentaire sont amincis autour du disque) ou une erreur de segmentation donnent du rouge sans maladie : c’est le « red disease », un faux positif. **Quoi faire :** sans concordance avec la papille et le champ visuel, on ne pose pas le diagnostic ; on documente une base (photos, OCT RNFL et maculaire, champ) et on juge sur l’évolution dans le temps.",
    why: [
      "Exact : discordance entre structure et fonction chez une myope forte ; on suit la tendance plutôt que d’étiqueter.",
      "Le diagnostic de glaucome exige une neuropathie optique cohérente (papille, champ visuel), pas un code de couleur isolé ; un analogue des prostaglandines (goutte du soir qui augmente l’écoulement) serait prématuré.",
      "La myopie augmente le risque, mais sans neuropathie démontrée ni PIO élevée, la SLT (laser appliqué sur le filtre de l’angle) n’est pas indiquée.",
      "Répéter l’examen reproduira le même artefact ; c’est une perte documentée dans le temps, pas la couleur, qui compte."
    ] },
  { id: "C-007", module: "C", topic: "g-hto", type: "cat", level: 1, trap: false,
    stem: "Une optométriste de Laval t’appelle : elle suit une femme de 56 ans avec un glaucome suspect (glaucoma suspect ; PIO 25 mmHg, papilles douteuses, champ visuel normal) et a commencé du latanoprost il y a 2 mois ; la PIO est maintenant de 18 mmHg. Selon la réglementation québécoise qui encadre la prescription de ces gouttes par les optométristes (Règlement O-7, r. 11.1), quelle est la suite attendue ?",
    figure: null,
    options: [
      "Elle peut suivre seule la patiente à long terme, puisque la PIO est contrôlée",
      "Elle aurait dû diriger la patiente avant de commencer la moindre goutte",
      "Elle doit cesser le latanoprost, car seul un médecin peut le prescrire",
      "Elle doit diriger la patiente vers un ophtalmologiste pour le suivi médical"
    ],
    answer: 3,
    explain: "Au Québec, l’optométriste équipé peut amorcer les gouttes pour un glaucome suspect, débutant ou cortisonique. Le règlement l’oblige ensuite à diriger le patient vers un ophtalmologiste pour le suivi médical.",
    deep: "**Ce que c’est :** au Québec, l’optométriste qui possède les instruments requis peut amorcer un traitement antiglaucomateux pour un glaucome suspect (élément douteux, sans preuve d’atteinte du nerf), un glaucome débutant ou un glaucome cortisonique (causé par les corticostéroïdes). **Pourquoi :** le règlement l’oblige ensuite à diriger le patient vers un ophtalmologiste pour le suivi médical, puis à se conformer au plan de celui-ci ; pour les autres glaucomes, il lui faut le consentement d’un médecin, et il doit diriger le patient si la réponse est inadéquate. **Quoi faire :** accepter la demande de consultation, faire le bilan complet (gonioscopie, pachymétrie, OCT, champ visuel) et convenir d’un plan de suivi partagé clair.",
    why: [
      "Le règlement exige une orientation vers l’ophtalmologiste pour le suivi médical, même si la PIO est bien contrôlée.",
      "Faux : pour un glaucome suspect ou débutant, l’optométriste équipé peut amorcer le traitement avant d’orienter.",
      "Faux : le latanoprost (analogue des prostaglandines, goutte du soir qui augmente l’écoulement) fait partie des antiglaucomateux permis dans ces situations.",
      "Exact : traitement possible au départ, puis orientation obligatoire vers l’ophtalmologiste pour le suivi médical."
    ] },
  { id: "C-008", module: "C", topic: "g-gpn", type: "image", level: 2, trap: false,
    stem: "Femme de 66 ans, PIO entre 13 et 16 mmHg sans traitement, angles ouverts à la gonioscopie. Le schéma montre sa papille OS : encoche inférieure et petite hémorragie au bord du disque. Tu retiens un glaucome à pression normale. Quels éléments cherches-tu à l’histoire ?",
    figure: { type: "disc", cd: 0.7, notch: "inf", heme: true, ppa: false, pallor: false },
    options: [
      "Tabagisme, alcool et carence en vitamine B12",
      "Diabète ancien, hypertension artérielle sévère et dyslipidémie",
      "Migraine, Raynaud, hypotension nocturne, apnée du sommeil",
      "Port de lentilles, baignade et frottement des yeux"
    ],
    answer: 2,
    explain: "Dans le glaucome à pression normale, on cherche un terrain vasculaire : migraine, phénomène de Raynaud, hypotension artérielle (surtout nocturne) et apnée du sommeil. L’hémorragie papillaire signale une atteinte active.",
    why: [
      "Tabac, alcool et carences évoquent une neuropathie optique toxique ou carentielle : papille pâle plutôt que creusée.",
      "Ce sont les facteurs des rétinopathies et des occlusions vasculaires ; le profil du glaucome à pression normale est plutôt vasospastique et hypotensif.",
      "Exact : terrain vasospastique et pression artérielle basse, surtout la nuit.",
      "Ce sont des facteurs de kératite et de kératocône, sans lien avec le nerf optique."
    ] },
  { id: "C-009", module: "C", topic: "g-gpn", type: "image", level: 2, trap: false,
    stem: "Femme de 64 ans suivie pour un glaucome à pression normale (GPN ; normal-tension glaucoma) débutant : PIO de 14 mmHg, encoche inférotemporale de la papille OD. Le schéma montre la carte de déviation corrigée (pattern deviation) de son champ visuel 24-2 de l’OD. Quel examen précisera le mieux cette atteinte et son évolution ?",
    figure: { type: "vf", pattern: "sup-paracentral", eye: "OD", map: "pd" },
    options: [
      "Un champ visuel 10-2, qui teste finement les 10° centraux",
      "Un champ cinétique de Goldmann centré sur la périphérie lointaine",
      "Un champ binoculaire d’Esterman, comme pour le permis de conduire",
      "Une IRM cérébrale pour exclure une atteinte du chiasma optique"
    ],
    answer: 0,
    explain: "Scotome paracentral supérieur, tout près de la fixation. La grille 24-2 n’a que quelques points dans cette zone : le 10-2 la teste finement et permet de suivre une atteinte qui menace la vision centrale.",
    deep: "**Ce que montre le champ :** un scotome paracentral supérieur, c’est-à-dire des points déprimés à quelques degrés au-dessus du point de fixation, qui respectent le méridien horizontal ; il concorde avec l’encoche inférotemporale (perte focale du bord de la papille). **Pourquoi c’est important :** le GPN (glaucome où le nerf se creuse alors que la PIO reste ≤ 21 mmHg) touche souvent tôt la région proche de la fixation, et la grille du 24-2, aux points espacés de 6°, ne place que quelques points dans cette zone : elle peut sous-estimer le défaut. **Quoi faire :** ajouter un champ 10-2 (grille serrée sur les 10° centraux) au départ et au suivi, avec l’OCT de la RNFL et des cellules ganglionnaires maculaires ; un défaut qui menace la fixation pousse à traiter sans attendre.",
    why: [
      "Exact : le 10-2 cartographie les défauts paracentraux que la grille 24-2 peut manquer ou sous-estimer.",
      "Le Goldmann cinétique (cible lumineuse déplacée de la périphérie vers le centre) sert surtout aux champs très rétrécis ; il mesure mal un petit défaut proche de la fixation.",
      "L’Esterman (champ de dépistage fait les deux yeux ouverts) évalue l’aptitude à conduire, pas un petit défaut central d’un seul œil.",
      "Une atteinte du chiasma (croisement des nerfs optiques) respecte le méridien vertical ; ce défaut, concordant avec l’encoche, respecte le méridien horizontal, typique du glaucome."
    ] },
  { id: "C-010", module: "C", topic: "g-gpn", type: "diagnostic", level: 3, trap: true,
    stem: "Femme de 69 ans d’origine vietnamienne, hypermétrope de +3,50 D, sans symptôme. Papille OD excavée (C/D 0,8) avec un défaut arciforme concordant au champ visuel ; PIO de 16 à 19 mmHg à trois visites de jour ; cornée de 548 µm. Un collègue propose de conclure à un glaucome à pression normale et de commencer des gouttes. Quel examen est indispensable avant de retenir ce diagnostic ?",
    figure: null,
    options: [
      "IRM cérébrale et orbitaire pour exclure une compression du nerf",
      "Vitesse de sédimentation et CRP pour exclure une artérite temporale",
      "Gonioscopie pour exclure une fermeture de l’angle intermittente",
      "Mesure ambulatoire de la tension artérielle sur 24 heures"
    ],
    answer: 2,
    explain: "Le glaucome à pression normale est un diagnostic d’exclusion. Hypermétrope d’origine est-asiatique : profil de fermeture de l’angle. Un angle qui se ferme par moments donne des pics de PIO invisibles en clinique : gonioscopie d’abord.",
    deep: "**Ce que c’est :** le GPN (nerf qui se creuse avec une PIO toujours ≤ 21 mmHg) est un diagnostic d’exclusion : on élimine d’abord une PIO élevée manquée, une fermeture de l’angle et une atteinte non glaucomateuse du nerf. **Pourquoi la gonioscopie :** cette femme hypermétrope (œil court) d’origine est-asiatique a le profil de la fermeture primaire de l’angle ; si l’iris bouche le filtre par intermittence, souvent le soir en pénombre, la PIO monte entre les visites et paraît normale en clinique, ce qui imite un GPN. La gonioscopie (examen de l’angle avec une lentille à miroir, en pièce sombre et petit faisceau) montre alors un contact entre l’iris et le trabéculum ou des synéchies (adhérences). **Quoi faire :** faire la gonioscopie chez tout patient étiqueté GPN ; si l’angle est étroit, le traitement change (iridotomie au laser ou extraction du cristallin) au lieu de simples gouttes.",
    why: [
      "L’IRM se demande devant un signe atypique (âge < 50 ans, pâleur plus marquée que l’excavation, baisse d’AV ou des couleurs, défaut respectant le méridien vertical) ; rien de tel ici.",
      "La VS et la CRP (marqueurs d’inflammation) cherchent une artérite à cellules géantes chez un patient ≥ 50 ans avec céphalée ou douleur à la mastication ; elles ne remplacent pas l’examen de l’angle.",
      "Exact : piège classique ; un angle qui se ferme par intermittence donne des pics de PIO invisibles en clinique et change tout le traitement.",
      "L’hypotension nocturne (baisse de la tension artérielle la nuit) peut aggraver un GPN, mais on la cherche une fois le diagnostic établi ; elle n’exclut pas une fermeture de l’angle."
    ] },
  { id: "C-011", module: "C", topic: "g-fermeture", type: "anatomie", level: 1, trap: false,
    stem: "Pendant ta première gonioscopie (examen de l’angle iridocornéen avec une lentille à miroir ; gonioscopy), ton patron te demande quelle structure se trouve juste en arrière du trabéculum pigmenté et sert de repère : si on la voit sur 360°, tout le filtre fonctionnel est découvert. Que réponds-tu ?",
    figure: null,
    options: [
      "La ligne de Schwalbe, fin de la membrane de Descemet",
      "Le trabéculum non pigmenté, partie antérieure du filtre",
      "L’éperon scléral, saillie blanchâtre de la sclère",
      "La bande ciliaire, partie visible du corps ciliaire"
    ],
    answer: 2,
    explain: "De l’arrière vers l’avant : racine de l’iris, bande ciliaire, éperon scléral, trabéculum, ligne de Schwalbe. L’éperon marque la limite arrière du trabéculum : s’il est visible, le filtre est découvert.",
    deep: "**Ce que c’est :** de l’arrière vers l’avant, on voit la racine de l’iris, la bande ciliaire, l’éperon scléral, le trabéculum (pigmenté en arrière, la partie qui filtre le plus ; non pigmenté en avant) et la ligne de Schwalbe : « I Can’t See Til Schwalbe ». **Pourquoi c’est important :** l’éperon scléral marque la limite arrière du trabéculum ; s’il est visible, le filtre situé juste devant lui n’est pas caché par l’iris. **Quoi faire :** chercher l’éperon dans les 4 quadrants ; s’il est caché sur au moins 180°, on parle de contact iridotrabéculaire (iris appliqué contre le filtre), base du diagnostic de la fermeture primaire de l’angle.",
    why: [
      "La ligne de Schwalbe est la structure la plus antérieure ; si elle est seule visible, l’angle est très étroit (Shaffer 1, sur une échelle de 0 = fermé à 4 = grand ouvert).",
      "Le trabéculum non pigmenté est devant le trabéculum pigmenté ; le voir ne garantit pas que la partie filtrante, plus en arrière, soit découverte.",
      "Exact : l’éperon scléral visible sur 360° confirme que l’angle est ouvert.",
      "La bande ciliaire est encore plus en arrière, derrière l’éperon ; on la voit seulement dans un angle grand ouvert (Shaffer 4)."
    ] },
  { id: "C-012", module: "C", topic: "g-fermeture", type: "image", level: 2, trap: false,
    stem: "Homme de 62 ans originaire du Nunavik, dirigé à Montréal pour des angles étroits. PIO 27 mmHg OD ; papille OD saine (C/D 0,3), OCT de la RNFL et champ visuel normaux ; cristallin clair. Le schéma montre la gonioscopie de son OD après indentation (pression de la lentille sur la cornée). Quelle conduite est la plus juste pour l’OD ?",
    figure: { type: "gonio", grade: 1, pas: true, pigment: "light", nv: false, recession: false },
    options: [
      "Observer sans traitement, gonioscopie dans un an",
      "Iridotomie au laser, gouttes au besoin",
      "Analogue des prostaglandines seul, sans geste sur l’angle",
      "Trabéculectomie d’emblée vu la PIO à 27 mmHg"
    ],
    answer: 1,
    explain: "L’iris reste collé malgré l’indentation : synéchies. Synéchies et PIO élevée avec un nerf sain = fermeture primaire de l’angle. On lève d’abord le bloc pupillaire par l’iridotomie, puis des gouttes si la PIO reste haute.",
    deep: "**Ce que montre le schéma :** seule la ligne de Schwalbe (au mieux avec le trabéculum antérieur, non pigmenté) est visible (Shaffer 1) ; le trabéculum pigmenté et l’éperon sont cachés et l’iris reste collé au filtre malgré l’indentation : ce sont des synéchies antérieures périphériques (PAS). **Le stade :** PAS et PIO élevée avec un nerf sain = fermeture primaire de l’angle (PAC) selon l’ISGEO et le PPP de l’AAO. **Quoi faire :** ouvrir l’angle ; ici l’iridotomie au laser (LPI) en premier, car la PIO est < 30 mmHg et il n’y a pas de neuropathie (critères d’EAGLE pour l’extraction du cristallin clair non remplis) ; gouttes si la PIO reste élevée ; suivre gonioscopie, OCT et champ. Les Inuits du Nunavik ont parmi les plus hauts taux de fermeture primaire au monde.",
    why: [
      "Faux : PAS et PIO élevée dépassent le stade de simple suspect (PACS) ; observer laisse l’angle se fermer.",
      "Exact : PAC à PIO < 30 mmHg sans neuropathie : LPI d’abord, gouttes au besoin.",
      "Faux : les gouttes baissent la PIO mais ne rouvrent pas l’angle, qui continue de se fermer.",
      "Faux : la chirurgie filtrante vient après l’échec de l’ouverture de l’angle et des gouttes."
    ] },
  { id: "C-013", module: "C", topic: "g-fermeture", type: "cat", level: 3, trap: false,
    stem: "Femme de 34 ans, habituellement emmétrope, qui a commencé du topiramate pour des migraines il y a 10 jours. Depuis hier, vision floue aux deux yeux et douleur sourde. AV 6/30 (20/100) OU, qui remonte à 6/7,5 (20/25) avec −4,00 D ; PIO 44 mmHg OD et 42 mmHg OS ; chambres antérieures très étroites au centre comme en périphérie. Quelle est la meilleure conduite ?",
    figure: null,
    options: [
      "Iridotomie au laser des deux yeux le jour même",
      "Pilocarpine 2 % QID pour tirer l’iris hors de l’angle",
      "Extraction du cristallin clair des deux yeux en urgence",
      "Cesser le topiramate, cycloplégique, stéroïde et hypotenseurs"
    ],
    answer: 3,
    explain: "Myopie aiguë et angles fermés aux deux yeux sous topiramate : effusion ciliochoroïdienne, sans bloc pupillaire. L’iridotomie est inutile et la pilocarpine aggrave. On cesse le médicament et on donne un cycloplégique.",
    deep: "**Ce que c’est :** le topiramate (comme certains sulfamidés) peut provoquer une effusion ciliochoroïdienne : du liquide s’accumule autour du corps ciliaire, qui bascule vers l’avant et pousse cristallin et iris contre l’angle, aux deux yeux, avec une myopie aiguë. **Pourquoi c’est différent :** il n’y a pas de bloc pupillaire (passage de l’aqueuse gêné entre iris et cristallin), donc l’iridotomie au laser (petit trou dans l’iris) n’ouvre pas l’angle, et la pilocarpine (goutte qui contracte la pupille et le muscle ciliaire) avance encore le cristallin et aggrave la fermeture. **Quoi faire :** cesser le topiramate avec le prescripteur, cycloplégique (goutte qui relâche le muscle ciliaire et fait reculer le cristallin), stéroïde topique et gouttes hypotensives ; l’état s’améliore habituellement en quelques jours après l’arrêt.",
    why: [
      "L’iridotomie traite le bloc pupillaire ; ici, l’angle est fermé par une poussée venue de l’arrière, que le trou dans l’iris ne corrige pas.",
      "La pilocarpine est contre-indiquée : en contractant le muscle ciliaire, elle avance le cristallin et aggrave la fermeture.",
      "L’extraction du cristallin n’est pas indiquée : la cause est médicamenteuse et réversible à l’arrêt du topiramate.",
      "Exact : arrêter la cause, faire reculer le cristallin avec un cycloplégique et contrôler la PIO."
    ] },
  { id: "C-014", module: "C", topic: "g-fermeture", type: "cat", level: 3, trap: false,
    stem: "Femme de 61 ans, hypermétrope de +3,00 D, cristallin clair, AV 6/6 (20/20) OU. Gonioscopie : iris en contact avec le trabéculum sur 360°, avec quelques synéchies (adhérences) ; PIO 32 mmHg OU ; nerfs optiques et champs visuels normaux. Selon l’essai EAGLE, quelle option offre le meilleur contrôle de la PIO à long terme ?",
    figure: null,
    options: [
      "Iridotomie au laser des deux yeux, puis gouttes au besoin",
      "Extraction du cristallin clair avec implant intraoculaire",
      "Pilocarpine 2 % au long cours pour garder l’angle ouvert",
      "Trabéculectomie d’emblée pour viser une PIO très basse"
    ],
    answer: 1,
    explain: "EAGLE : à 50 ans ou plus, avec une fermeture primaire et une PIO de 30 mmHg ou plus, extraire le cristallin clair contrôle mieux la PIO que l’iridotomie. Le cristallin est la cause anatomique.",
    deep: "**Ce que c’est :** cette patiente a une fermeture primaire de l’angle (PAC : iris appliqué contre le filtre, avec synéchies et PIO élevée, nerf encore sain) ; dans un œil court, le cristallin qui épaissit avec l’âge pousse l’iris vers l’avant. **Pourquoi l’extraction :** dans EAGLE (≥ 50 ans, PAC avec PIO ≥ 30 mmHg ou PACG), remplacer le cristallin clair par un implant mince a donné un meilleur contrôle de la PIO et une meilleure qualité de vie que l’iridotomie au laser ; à 3 ans, leur PIO était un peu plus basse (−1,18 mmHg) et l’option était plus coût-efficace. **Quoi faire :** discuter la chirurgie et ses risques (œil court, endothélium à vérifier par microscopie spéculaire), puis suivre PIO, gonioscopie, OCT et champ.",
    why: [
      "L’iridotomie au laser (petit trou dans l’iris qui court-circuite la pupille) reste possible, mais elle a donné un contrôle moins bon que l’extraction du cristallin dans EAGLE.",
      "Exact : chez un patient ≥ 50 ans avec PAC à PIO ≥ 30 mmHg, l’extraction du cristallin clair surpasse l’iridotomie (EAGLE).",
      "La pilocarpine (goutte qui contracte la pupille) au long cours est mal tolérée (céphalée, myopie) et ne règle pas la cause, le cristallin épais.",
      "La trabéculectomie (fistule chirurgicale vers une bulle sous la conjonctive) est risquée sur œil court (aqueuse détournée vers l’arrière, hémorragie sous la choroïde) et n’est pas le premier choix quand le nerf est sain."
    ] },
  { id: "C-015", module: "C", topic: "g-crise", type: "cat", level: 2, trap: true,
    stem: "Femme de 67 ans à l’urgence pour céphalée, vomissements et halos colorés depuis 3 heures. OD : œil rouge, cornée dépolie, pupille mi-dilatée aréactive, PIO 60 mmHg ; OS : chambre antérieure étroite, PIO 16 mmHg. Pas d’asthme ni d’allergie aux sulfamidés, fonction rénale normale. Le médecin de l’urgence a déjà prescrit de la pilocarpine 2 % aux 5 minutes. Quelle est la meilleure conduite immédiate ?",
    figure: null,
    options: [
      "Continuer la pilocarpine 2 % aux 5 minutes jusqu’à l’ouverture",
      "Timolol, brimonidine, dorzolamide et acétazolamide 500 mg",
      "Iridotomie au laser immédiate malgré la cornée œdémateuse",
      "Tomodensitométrie cérébrale avant tout traitement oculaire"
    ],
    answer: 1,
    explain: "À 60 mmHg, le sphincter de l’iris est ischémique : la pilocarpine n’agit pas encore. On baisse d’abord la PIO (timolol, brimonidine, dorzolamide, acétazolamide) ; la pilocarpine et l’iridotomie viennent après.",
    deep: "**Ce que c’est :** une crise aiguë de fermeture de l’angle : l’iris bloque d’un coup tout le filtre de l’angle, la PIO grimpe, la cornée gonfle (halos, flou) et le sphincter de l’iris, privé de sang, ne réagit plus (pupille mi-dilatée fixe). **Pourquoi pas la pilocarpine d’emblée :** à 60 mmHg, ce sphincter ischémique ne répond pas à la pilocarpine (goutte qui contracte la pupille) ; répéter les doses n’ouvre pas l’angle et retarde le vrai traitement. **Quoi faire :** baisser d’abord la PIO avec timolol 0,5 % (bêtabloquant), brimonidine (alpha-agoniste) et dorzolamide (inhibiteur de l’anhydrase carbonique), qui réduisent la production d’humeur aqueuse, plus acétazolamide 500 mg PO ou IV ; ajouter de l’acétate de prednisolone 1 % ; mannitol IV si la PIO ne baisse pas ; pilocarpine 1–2 % une fois la PIO abaissée, puis iridotomie au laser des deux yeux.",
    why: [
      "Piège : le sphincter de l’iris, ischémique à une PIO de 60 mmHg, ne répond pas ; la pilocarpine se donne une fois la PIO abaissée.",
      "Exact : on réduit la production d’aqueuse par plusieurs voies, puis viennent la pilocarpine et l’iridotomie au laser.",
      "L’iridotomie au laser (petit trou dans l’iris qui court-circuite la pupille) est le traitement définitif, mais la cornée œdémateuse gêne le laser ; on baisse d’abord la PIO pour éclaircir la cornée.",
      "La crise imite une migraine ou un trouble neurologique, mais la cornée trouble, la pupille fixe et la PIO à 60 mmHg font le diagnostic ; retarder le traitement menace le nerf."
    ] },
  { id: "C-016", module: "C", topic: "g-crise", type: "image", level: 1, trap: false,
    stem: "Homme de 72 ans, hypermétrope, qui consulte à l’urgence pour une douleur intense à l’OS apparue hier soir au cinéma, avec vision floue et nausées. Le schéma montre son segment antérieur OS à la lampe à fente. Tu es l’externe : que fais-tu en premier ?",
    figure: { type: "slit", pattern: "aacc" },
    options: [
      "Hypotenseurs et acétazolamide, puis appel immédiat en ophtalmologie",
      "Dilater la pupille pour bien voir le fond d’œil",
      "Pilocarpine 2 % seule, puis revoir le patient demain",
      "Stéroïde topique et rendez-vous en clinique cette semaine"
    ],
    answer: 0,
    explain: "Œil rouge, cornée dépolie, pupille mi-dilatée ovale : crise aiguë de fermeture de l’angle. On baisse la PIO tout de suite et on appelle l’ophtalmologiste. Dilater aggraverait la fermeture.",
    deep: "**Ce que montre le schéma :** un œil congestif avec une rougeur autour du limbe (rougeur ciliaire), une cornée dépolie par l’œdème et une pupille mi-dilatée, ovale : une crise aiguë de fermeture de l’angle chez un hypermétrope, déclenchée par la pénombre. **Quoi faire :** mesurer la PIO, puis sans délai timolol, brimonidine et dorzolamide (1 goutte de chaque) et acétazolamide 500 mg PO ou IV, et appeler l’ophtalmologiste de garde immédiatement : le nerf et la cornée s’abîment en quelques heures. La pilocarpine vient seulement après la baisse de PIO ; l’iridotomie au laser des deux yeux suit.",
    why: [
      "Exact : baisser la PIO tout de suite et faire venir l’ophtalmologiste ; chaque heure compte.",
      "Faux : dilater la pupille aggrave le bloc pupillaire et ferme davantage l’angle.",
      "Faux : tant que la PIO est très haute, le sphincter ischémique ne répond pas à la pilocarpine, et attendre au lendemain laisse le nerf s’abîmer.",
      "Faux : le stéroïde calme l’inflammation mais ne baisse pas la PIO ; une crise ne peut pas attendre une semaine."
    ] },
  { id: "C-017", module: "C", topic: "g-crise", type: "cat", level: 1, trap: false,
    stem: "Une semaine après une crise aiguë de fermeture de l’angle OD traitée par gouttes, acétazolamide puis iridotomie au laser (laser peripheral iridotomy, LPI), la PIO OD est de 14 mmHg. L’OS est asymptomatique : PIO 15 mmHg, mais à la gonioscopie l’iris touche le trabéculum sur 270°. Que proposes-tu pour l’OS ?",
    figure: null,
    options: [
      "Observation simple, puisque l’OS n’a jamais fait de crise",
      "Pilocarpine 2 % au long cours pour garder la pupille petite",
      "Timolol 0,5 % préventif pour garder la PIO basse",
      "Iridotomie au laser prophylactique de l’OS sans tarder"
    ],
    answer: 3,
    explain: "L’œil adelphe a la même anatomie. Sans iridotomie, environ la moitié de ces yeux font une crise dans les 5 ans : iridotomie prophylactique sans tarder.",
    deep: "**Ce que c’est :** l’œil adelphe (l’autre œil) d’une crise a presque toujours la même anatomie : œil court, cristallin épais, angle étroit. **Pourquoi c’est important :** sans iridotomie, environ la moitié des yeux adelphes font une crise dans les 5 ans (AAO, Preferred Practice Pattern), avec les mêmes risques pour le nerf, la cornée et l’iris. **Quoi faire :** proposer une LPI (petit trou percé au laser dans l’iris périphérique pour que l’aqueuse contourne la pupille), vérifier ensuite que le trou est perméable et mesurer la PIO 30 minutes à 2 heures après, puis suivre les deux yeux par gonioscopie.",
    why: [
      "Attendre expose à une crise dans environ la moitié des cas en 5 ans ; ce risque est bien plus élevé que chez un simple suspect de fermeture.",
      "La pilocarpine (goutte qui contracte la pupille) au long cours est mal tolérée et ne protège pas de façon fiable ; elle ne remplace pas l’iridotomie.",
      "Le timolol (bêtabloquant qui réduit la production d’aqueuse) baisse la PIO, mais n’empêche pas l’iris de bloquer l’angle.",
      "Exact : la LPI prophylactique de l’œil adelphe fait partie du traitement standard d’une crise par bloc pupillaire."
    ] },
  { id: "C-018", module: "C", topic: "g-bonus", type: "diagnostic", level: 1, trap: false,
    stem: "Nourrisson de 4 mois amené par ses parents : il larmoie beaucoup, ferme les yeux à la lumière et se frotte les yeux. Les cornées paraissent grandes et un peu bleutées ; à la lampe portative, tu vois des lignes courbes dans la profondeur de la cornée de l’OD. Quel diagnostic dois-tu évoquer d’abord ?",
    figure: null,
    options: [
      "Obstruction congénitale du canal lacrymonasal",
      "Conjonctivite néonatale à Chlamydia",
      "Kératite herpétique néonatale",
      "Glaucome congénital primaire"
    ],
    answer: 3,
    explain: "Larmoiement, photophobie et blépharospasme chez un nourrisson, avec une cornée grande et trouble : glaucome congénital. Les lignes courbes sont des stries de Haab, des ruptures de la Descemet étirée par la pression.",
    deep: "**Ce que c’est :** le glaucome congénital primaire vient d’un angle mal formé à la naissance : l’humeur aqueuse sort mal et la PIO monte. **Pourquoi ces signes :** chez le nourrisson, la paroi de l’œil est souple et s’étire sous la pression : la cornée grandit et se trouble (buphtalmie, « œil de bœuf »), la membrane de Descemet (couche profonde de la cornée) se déchire en lignes courbes (stries de Haab), et l’œdème cornéen donne la triade larmoiement, photophobie et blépharospasme (fermeture forcée des paupières). **Quoi faire :** diriger en urgence vers l’ophtalmologie pédiatrique pour un examen sous anesthésie, puis chirurgie (goniotomie ou trabéculotomie : ouverture chirurgicale du filtre de l’angle) ; les gouttes ne sont qu’un pont, et jamais de brimonidine avant 2 ans (somnolence profonde, apnées).",
    why: [
      "L’obstruction du canal lacrymonasal donne un larmoiement avec écoulement collant, mais une cornée claire, de taille normale, sans photophobie.",
      "La conjonctivite à Chlamydia (infection transmise à l’accouchement, surtout les premières semaines) donne un écoulement et une rougeur des conjonctives, pas une cornée agrandie avec stries.",
      "La kératite herpétique (infection de la cornée par le virus herpès) donne des lésions qui prennent la fluorescéine, sans agrandissement de la cornée.",
      "Exact : larmoiement, photophobie, blépharospasme, grande cornée trouble et stries de Haab."
    ] },
  { id: "C-019", module: "C", topic: "g-bonus", type: "image", level: 2, trap: false,
    stem: "Homme de 45 ans, ancien joueur de hockey, PIO 29 mmHg OD et 15 mmHg OS, sans autre anomalie à la lampe à fente. Le schéma montre la gonioscopie de son OD. Quel est le diagnostic le plus probable ?",
    figure: { type: "gonio", grade: 4, pas: false, pigment: "light", nv: false, recession: true },
    options: [
      "Glaucome par récession de l’angle, séquelle d’un ancien trauma",
      "Glaucome néovasculaire, avec vaisseaux qui franchissent l’éperon",
      "Fermeture primaire de l’angle avec synéchies antérieures",
      "Syndrome irido-cornéo-endothélial avec synéchies hautes"
    ],
    answer: 0,
    explain: "Bande ciliaire anormalement large et procès iriens déchirés, d’un seul côté, après un coup à l’œil : récession de l’angle. Le trabéculum voisin cicatrise et la PIO peut monter des années plus tard.",
    deep: "**Ce que montre le schéma :** un angle grand ouvert avec une bande ciliaire anormalement large et irrégulière et des procès iriens (fins filaments de l’iris) déchirés. **Pourquoi c’est important :** un coup à l’œil (ex. rondelle ou balle de hockey) peut déchirer le muscle ciliaire entre ses couches (récession de l’angle, angle recession) et abîmer le trabéculum voisin, qui cicatrise et filtre moins bien ; le glaucome peut apparaître des années plus tard, d’un seul côté, d’où l’asymétrie de PIO. **Quoi faire :** comparer la gonioscopie des deux yeux, documenter le nerf (OCT, champ), traiter par gouttes puis chirurgie filtrante si échec, et suivre la PIO à vie.",
    why: [
      "Exact : bande ciliaire élargie et procès iriens déchirés, d’un seul côté, avec une PIO élevée du même côté.",
      "Le glaucome néovasculaire (vaisseaux anormaux qui poussent dans l’angle, souvent après un diabète ou une occlusion veineuse) montre des vaisseaux qui franchissent l’éperon scléral, absents ici.",
      "Dans la fermeture primaire, l’iris cache les structures de l’angle ; ici l’angle est grand ouvert, sans synéchies (adhérences).",
      "Le syndrome ICE (endothélium anormal qui migre sur l’angle et l’iris) donne des synéchies qui dépassent la ligne de Schwalbe et un iris déformé, pas une bande ciliaire élargie."
    ] },
  { id: "C-020", module: "C", topic: "g-bonus", type: "physiopathologie", level: 3, trap: false,
    stem: "Femme de 42 ans, angles étroits traités par iridotomie au laser aux deux yeux. Trois mois plus tard : iridotomies bien perméables, chambre antérieure profonde au centre, iris plat, mais l’angle reste fermé à la gonioscopie. À l’indentation, l’iris dessine une double bosse. Quel mécanisme explique cet angle fermé ?",
    figure: null,
    options: [
      "Un bloc pupillaire qui persiste malgré une iridotomie perméable",
      "Une mal-direction de l’aqueuse vers le vitré",
      "Des procès ciliaires antérieurs sous l’iris périphérique",
      "Un cristallin gonflé qui avance et ferme tout l’angle"
    ],
    answer: 2,
    explain: "Angle fermé malgré une iridotomie perméable, chambre centrale profonde, iris plat : iris plateau. Des procès ciliaires placés trop en avant soutiennent l’iris périphérique contre le trabéculum. L’UBM le confirme.",
    why: [
      "Une iridotomie perméable lève le bloc pupillaire ; si l’angle reste fermé, le mécanisme est ailleurs.",
      "Dans la mal-direction, la chambre est plate au centre comme en périphérie, après une chirurgie.",
      "Exact : iris plateau ; la double bosse à l’indentation trahit les procès ciliaires sous l’iris.",
      "Un cristallin gonflé rétrécit aussi la chambre centrale ; ici elle est profonde."
    ] }
]);

