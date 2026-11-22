var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// QCM du module D (rétine) : 2–3 par fiche, niveau externe / R1. Même schéma que quiz-b / quiz-c (docs/SCHEMA.md §2).
G.OPH.quiz = (G.OPH.quiz || []).concat([
  {
    id: "D-001", module: "D", topic: "r-decollement", type: "cat", level: 1, trap: false,
    stem: "Homme myope de 62 ans : depuis ce matin, éclairs dans l’œil gauche et une dizaine de nouveaux corps flottants. Acuité 6/6, champ normal au doigt, fond d’œil non dilaté normal au bureau. Quelle conduite ?",
    figure: null,
    options: [
      "Rassurer : décollement du vitré bénin, revoir au besoin",
      "Examen dilaté par l’ophtalmologiste le jour même",
      "Revoir dans 6 semaines si les symptômes persistent",
      "IRM cérébrale pour éliminer une aura migraineuse"
    ],
    answer: 1,
    explain: "Une nuée de corps flottants nouveaux rend une déchirure probable. Elle est en périphérie, invisible sans dilatation : examen dilaté le jour même, laser si on la trouve.",
    deep: "**Ce que c’est :** probablement un décollement postérieur du vitré (DPV), mais une nuée de corps flottants nouveaux fait craindre une déchirure de la rétine. **Pourquoi pas rassurer :** la déchirure est en périphérie, invisible sans dilatation ; environ 14 % des patients avec éclairs ou corps flottants aigus en ont une, et une dizaine de nouveaux corps flottants augmente nettement ce risque (Hollands, JAMA 2009). **Quoi faire :** examen dilaté avec dépression sclérale le jour même ; une déchirure se traite au laser avant de devenir un décollement.",
    why: [
      "Piège : un fond d’œil non dilaté ne voit pas la périphérie, où naissent les déchirures.",
      "Exact : la nuée de corps flottants rend une déchirure probable ; elle se traite au laser si on la trouve tôt.",
      "Six semaines, c’est laisser une déchirure évoluer vers un décollement.",
      "Une aura touche les deux yeux et disparaît en 20–30 min ; elle n’explique pas des corps flottants."
    ]
  },
  {
    id: "D-002", module: "D", topic: "r-decollement", type: "physiopathologie", level: 1, trap: false,
    stem: "Une patiente décrit une ombre grise qui monte depuis le bas de son champ visuel droit depuis ce matin. Quelle partie de la rétine est décollée ?",
    figure: null,
    options: [
      "La rétine supérieure",
      "La rétine inférieure",
      "La macula seulement",
      "La rétine nasale"
    ],
    answer: 0,
    explain: "L’image est inversée sur la rétine : un rideau qui monte du bas du champ vient de la rétine supérieure. Ce décollement gagne vite la macula : le jour même.",
    deep: "**Règle :** l’image est inversée sur la rétine ; un déficit du champ inférieur correspond à la rétine supérieure. **Pourquoi c’est pressant :** un décollement supérieur gagne vite la macula, car le liquide descend avec la gravité. **Quoi faire :** ophtalmologiste de garde le jour même, avant que la vision centrale tombe.",
    why: [
      "Exact : champ inférieur = rétine supérieure ; c’est le décollement qui menace le plus vite la macula.",
      "La rétine inférieure décollée donnerait un rideau qui descend du haut du champ.",
      "Une atteinte de la macula seule donne une tache centrale, pas un rideau qui monte.",
      "La rétine nasale correspond au champ temporal, sur le côté."
    ]
  },
  {
    id: "D-003", module: "D", topic: "r-decollement", type: "cat", level: 2, trap: true,
    stem: "Homme opéré hier d’un décollement de rétine par vitrectomie avec une bulle de gaz. Il doit être opéré d’urgence pour une appendicite. Quel agent l’anesthésiste doit-il éviter ?",
    figure: null,
    options: [
      "Propofol",
      "Rocuronium",
      "Sévoflurane",
      "Protoxyde d’azote"
    ],
    answer: 3,
    explain: "Le protoxyde d’azote diffuse dans la bulle de gaz intraoculaire : elle gonfle, la PIO s’envole et l’artère centrale peut se fermer. Le signaler à l’anesthésiste.",
    deep: "**Le piège :** le protoxyde d’azote diffuse dans la bulle de gaz intraoculaire bien plus vite que l’azote n’en sort ; la bulle gonfle, la PIO monte brutalement et peut fermer l’artère centrale de la rétine. **Quoi faire :** signaler la bulle à l’anesthésiste ; pas de protoxyde d’azote tant qu’elle persiste, ni avion ni altitude.",
    why: [
      "Le propofol ne modifie pas le volume d’une bulle de gaz.",
      "Le rocuronium (curare) ne modifie pas le volume d’une bulle de gaz.",
      "Le sévoflurane n’entraîne pas l’expansion d’une bulle intraoculaire.",
      "Exact : le protoxyde d’azote fait gonfler la bulle, la PIO s’envole et l’œil peut perdre sa perfusion."
    ]
  },
  {
    id: "D-004", module: "D", topic: "r-oacr", type: "cat", level: 1, trap: false,
    stem: "Homme de 72 ans, hypertendu : perte de vision brutale et indolore de l’œil droit il y a 2 heures. DPAR droit, rétine pâle avec une tache rouge cerise. Tu le vois en clinique. Quelle conduite ?",
    figure: null,
    options: [
      "Massage oculaire et rendez-vous en ophtalmologie demain",
      "Aspirine, retour à domicile et IRM en externe",
      "Urgence immédiatement, comme un AVC ; VS et CRP",
      "Gouttes hypotensives et contrôle dans une semaine"
    ],
    answer: 2,
    explain: "Perte de vision brutale et indolore avec tache rouge cerise : OACR, un AVC de l’œil. Urgence : immédiatement (le jour même), comme un AVC ; VS, CRP et plaquettes dès 50 ans.",
    deep: "**Ce que c’est :** une occlusion de l’artère centrale de la rétine, c’est-à-dire un AVC de l’œil. **Pourquoi l’urgence :** le risque d’AVC cérébral est élevé dans les jours qui suivent ; le bilan (IRM de diffusion, carotides, rythme cardiaque, échographie) se fait immédiatement, et la thrombolyse se discute en centre de l’AVC si le début date de moins de 4,5 h. **Après 50 ans :** VS, CRP et plaquettes pour éliminer une artérite à cellules géantes.",
    why: [
      "Le massage n’a aucun bénéfice prouvé et le délai fait manquer le bilan d’AVC urgent.",
      "Un bilan en externe laisse passer la fenêtre où le risque d’AVC est le plus élevé.",
      "Exact : c’est un AVC ; urgence immédiate, comme un AVC, et artérite à éliminer.",
      "Les gouttes hypotensives n’ont pas montré de bénéfice et retardent le bilan."
    ]
  },
  {
    id: "D-005", module: "D", topic: "r-oacr", type: "physiopathologie", level: 2, trap: false,
    stem: "Dans une occlusion de l’artère centrale de la rétine, pourquoi la fovéa paraît-elle rouge cerise au milieu d’une rétine blanche ?",
    figure: null,
    options: [
      "La choroïde intacte se voit à travers la fovéa",
      "Une hémorragie sous-rétinienne se forme sous la fovéa",
      "Les cônes de la fovéa contiennent un pigment rouge",
      "L’artère ciliorétinienne se dilate pour compenser"
    ],
    answer: 0,
    explain: "La fovéa n’a pas de rétine interne à blanchir : nourrie par la choroïde, intacte, elle reste rouge au milieu d’une rétine pâle.",
    deep: "**Mécanisme :** l’artère centrale nourrit les couches internes de la rétine, qui blanchissent quand elles manquent d’oxygène. La fovéa n’a pas de couches internes : elle dépend de la choroïde, qui reste perfusée. On voit donc la choroïde rouge au centre d’une rétine pâle.",
    why: [
      "Exact : sans rétine interne à blanchir, la fovéa laisse voir la choroïde perfusée.",
      "Il n’y a pas de sang hors des vaisseaux : c’est un effet de contraste.",
      "La couleur ne vient pas des cônes mais de la choroïde sous-jacente.",
      "Une artère ciliorétinienne épargne une zone près de la papille ; elle n’explique pas la tache centrale."
    ]
  },
  {
    id: "D-006", module: "D", topic: "r-oacr", type: "cat", level: 2, trap: true,
    stem: "Femme de 78 ans : perte de vision brutale de l’œil gauche, céphalée temporale et douleur de la mâchoire en mâchant depuis 3 semaines. VS 85 mm/h, CRP élevée. La biopsie de l’artère temporale est prévue dans 5 jours. Quand commencer les corticostéroïdes ?",
    figure: null,
    options: [
      "Après le résultat de la biopsie",
      "Après une échographie des artères temporales",
      "Seulement si l’autre œil devient symptomatique",
      "Maintenant, sans attendre la biopsie"
    ],
    answer: 3,
    explain: "Artérite à cellules géantes probable avec atteinte visuelle : corticostéroïdes à haute dose maintenant. La biopsie reste valable si elle est faite dans les 2 semaines.",
    deep: "**Ce que c’est :** une artérite à cellules géantes probable (âge, céphalée, claudication de la mâchoire, VS et CRP élevées) avec atteinte de la vision. **Pourquoi maintenant :** l’autre œil peut être perdu en quelques jours ; la biopsie reste interprétable si elle est faite dans les 2 semaines suivant le début des corticostéroïdes. **Quoi faire :** corticostéroïdes à haute dose immédiatement, avec l’équipe (médecine interne ou rhumatologie).",
    why: [
      "Piège : attendre la biopsie expose l’autre œil à une perte définitive.",
      "L’imagerie peut aider au diagnostic, mais elle ne doit pas retarder le traitement.",
      "Quand l’autre œil devient symptomatique, il est souvent trop tard pour le sauver.",
      "Exact : on traite dès la suspicion ; la biopsie dans les 2 semaines reste valable."
    ]
  },
  {
    id: "D-007", module: "D", topic: "r-ovr", type: "diagnostic", level: 1, trap: false,
    stem: "Homme hypertendu de 70 ans : vision floue de l’œil gauche au réveil. Hémorragies en flammèches dans les quatre quadrants, veines dilatées et tortueuses, papille congestive. Quel est le diagnostic ?",
    figure: null,
    options: [
      "Occlusion de l’artère centrale de la rétine",
      "Rétinopathie diabétique non proliférante légère",
      "Occlusion de la veine centrale de la rétine",
      "Décollement postérieur du vitré"
    ],
    answer: 2,
    explain: "Hémorragies dans les quatre quadrants et veines tortueuses : occlusion de la veine centrale. Une branche reste dans un secteur limité par le raphé horizontal.",
    deep: "**Ce que c’est :** une occlusion de la veine centrale : le sang reflue dans tout le territoire veineux, d’où des hémorragies dans les quatre quadrants et des veines dilatées et tortueuses. Une occlusion de branche, elle, reste dans un secteur limité par le raphé horizontal. **Quoi faire :** ophtalmologie dans la semaine (OCT, angiographie), bilan TA, glycémie, lipides, FSC ; surveiller l’iris et l’angle chaque mois au début.",
    why: [
      "L’OACR donne une rétine blanche et une tache rouge cerise, avec peu ou pas d’hémorragies.",
      "Une rétinopathie diabétique légère montre quelques microanévrismes aux deux yeux, pas des hémorragies diffuses d’un œil.",
      "Exact : hémorragies des quatre quadrants et veines tortueuses = veine centrale.",
      "Le DPV donne des corps flottants et des éclairs, sans hémorragies rétiniennes diffuses."
    ]
  },
  {
    id: "D-008", module: "D", topic: "r-ovr", type: "cat", level: 2, trap: false,
    stem: "Femme de 74 ans, occlusion ischémique de la veine centrale de l’œil droit il y a 3 semaines (DPAR, nombreux nodules cotonneux). Quel suivi surveille la complication la plus redoutée ?",
    figure: null,
    options: [
      "Champ visuel tous les 6 mois",
      "Examen de l’iris et gonioscopie chaque mois",
      "IRM cérébrale de contrôle à 3 mois",
      "Échographie B et photos du fond d’œil à chaque visite"
    ],
    answer: 1,
    explain: "Après une occlusion ischémique de la veine centrale, la complication redoutée est le glaucome néovasculaire : iris non dilaté et gonioscopie chaque mois pendant 6 mois.",
    deep: "**La complication redoutée :** le glaucome néovasculaire. La rétine ischémique libère du VEGF ; des néovaisseaux poussent sur l’iris et dans l’angle, souvent dans les 3 premiers mois. **Quoi faire :** examen de l’iris non dilaté et gonioscopie chaque mois pendant 6 mois ; laser panrétinien (et anti-VEGF) dès l’apparition de néovaisseaux.",
    why: [
      "Le champ visuel ne détecte pas les néovaisseaux de l’iris, et 6 mois, c’est trop tard.",
      "Exact : on cherche la rubéose et les néovaisseaux de l’angle chaque mois au début.",
      "L’occlusion veineuse n’est pas un AVC ; l’IRM n’est pas le suivi.",
      "L’échographie sert si le fond d’œil est caché ; elle ne montre pas l’angle."
    ]
  },
  {
    id: "D-009", module: "D", topic: "r-diabete", type: "cat", level: 1, trap: false,
    stem: "Homme de 50 ans : diabète de type 2 diagnostiqué cette semaine, vision normale. Quand faire examiner sa rétine (Diabetes Canada) ?",
    figure: null,
    options: [
      "Dans 5 ans, puis chaque année",
      "Maintenant, puis aux 1–2 ans si aucune rétinopathie",
      "Seulement si sa vision baisse",
      "Maintenant, puis aux 5 ans si l’examen est normal"
    ],
    answer: 1,
    explain: "Type 2 : dépistage au diagnostic, car la rétinopathie peut déjà être là, puis aux 1–2 ans sans rétinopathie. Type 1 : chaque année dès 5 ans d’évolution.",
    deep: "**Règle :** dans le type 2, le diabète évolue souvent depuis des années au diagnostic ; une rétinopathie peut déjà être présente. Le dépistage se fait donc **au diagnostic**, par photographies rétiniennes ou fond d’œil dilaté, puis **aux 1–2 ans** s’il n’y a pas de rétinopathie (plus souvent s’il y en a). **Type 1 :** dépistage annuel dès 5 ans d’évolution, à partir de 15 ans.",
    why: [
      "Attendre 5 ans, c’est la règle du type 1, pas du type 2.",
      "Exact : au diagnostic, puis aux 1–2 ans sans rétinopathie.",
      "La rétinopathie, même proliférante, peut ne donner aucun symptôme.",
      "Cinq ans est un intervalle trop long : 1–2 ans sans rétinopathie."
    ]
  },
  {
    id: "D-010", module: "D", topic: "r-diabete", type: "cat", level: 2, trap: false,
    stem: "Femme de 34 ans, diabète de type 1 depuis 20 ans. Les photos de dépistage montrent des néovaisseaux sur la papille ; vision 6/6, aucun symptôme. Quelle conduite ?",
    figure: null,
    options: [
      "Contrôle des photos dans 1 an",
      "Intensifier l’insuline et revoir dans 3 mois",
      "Ophtalmologiste en quelques jours",
      "Aspirine pour prévenir l’hémorragie du vitré"
    ],
    answer: 2,
    explain: "Néovaisseaux sur la papille : forme proliférante, muette jusqu’à l’hémorragie. Ophtalmologiste en quelques jours pour laser panrétinien ou anti-VEGF.",
    deep: "**Ce que c’est :** une rétinopathie diabétique proliférante (néovaisseaux sur la papille), muette jusqu’à ce qu’elle saigne. **Pourquoi vite :** les néovaisseaux saignent dans le vitré et tirent la rétine ; le laser panrétinien ou les anti-VEGF les font régresser. **Glycémie :** à améliorer, mais une baisse très rapide de l’HbA1c peut aggraver transitoirement la rétinopathie : les yeux d’abord.",
    why: [
      "Un an, c’est l’intervalle d’un œil sans rétinopathie, pas d’une forme proliférante.",
      "Le contrôle glycémique aide à long terme ; il ne traite pas des néovaisseaux, et une baisse rapide peut aggraver.",
      "Exact : forme proliférante, traitement oculaire sans tarder.",
      "L’aspirine ne modifie ni l’évolution de la rétinopathie ni le risque d’hémorragie du vitré (Diabetes Canada)."
    ]
  },
  {
    id: "D-011", module: "D", topic: "r-dmla", type: "cat", level: 1, trap: false,
    stem: "Femme de 79 ans avec des drusens connus : depuis 4 jours, les lignes du carrelage ondulent devant son œil gauche. Acuité 6/12 à gauche. Quelle conduite ?",
    figure: null,
    options: [
      "Ophtalmologie en quelques jours : forme humide possible",
      "Rassurer : cataracte, revoir dans 6 mois",
      "Commencer l’AREDS2 et revoir dans 3 mois",
      "Grille d’Amsler à domicile, consulter si la tache grossit"
    ],
    answer: 0,
    explain: "Métamorphopsies nouvelles avec drusens : forme humide jusqu’à preuve du contraire. OCT et anti-VEGF en quelques jours ; plus on traite tôt, plus la vision est préservée.",
    deep: "**Ce que c’est :** des métamorphopsies nouvelles chez une patiente avec des drusens : néovaisseaux (forme humide) jusqu’à preuve du contraire. **Pourquoi vite :** le liquide et le sang sous la macula abîment les photorécepteurs ; plus les anti-VEGF commencent tôt, plus la vision est préservée. **Quoi faire :** ophtalmologie en quelques jours (OCT, angiographie, anti-VEGF).",
    why: [
      "Exact : métamorphopsies nouvelles = forme humide possible, OCT en quelques jours.",
      "La cataracte voile la vision ; elle ne fait pas onduler les lignes.",
      "L’AREDS2 ralentit la forme intermédiaire ; il ne traite pas des néovaisseaux actifs.",
      "L’Amsler sert à repérer le changement ; ici, le changement est déjà là."
    ]
  },
  {
    id: "D-012", module: "D", topic: "r-dmla", type: "cat", level: 2, trap: true,
    stem: "Homme de 70 ans, fumeur depuis 50 ans : gros drusens aux deux yeux (DMLA intermédiaire). Il demande quel supplément prendre. Que lui proposes-tu ?",
    figure: null,
    options: [
      "Aucun : les suppléments ne servent à rien",
      "Oméga-3 à haute dose seulement",
      "AREDS2 et arrêt du tabac",
      "La formule AREDS d’origine, avec bêtacarotène"
    ],
    answer: 2,
    explain: "Forme intermédiaire : AREDS2 et arrêt du tabac. La formule d’origine au bêtacarotène augmente le risque de cancer du poumon chez le fumeur.",
    deep: "**Ce que dit la preuve :** dans la forme intermédiaire, la formule AREDS ralentit l’évolution vers la forme avancée (environ 25 %). **Le piège :** la formule d’origine contenait du bêtacarotène, qui augmente le risque de cancer du poumon chez les fumeurs ; l’AREDS2 l’a remplacé par la lutéine et la zéaxanthine. **Quoi faire :** AREDS2 (vitamines C et E, lutéine, zéaxanthine, zinc, cuivre) et arrêt du tabac.",
    why: [
      "Faux dans la forme intermédiaire : la formule AREDS ralentit la progression.",
      "Les oméga-3 n’ont pas montré de bénéfice dans l’AREDS2.",
      "Exact : AREDS2 sans bêtacarotène, et cesser de fumer.",
      "Piège : le bêtacarotène augmente le risque de cancer du poumon chez le fumeur."
    ]
  },
  {
    id: "D-013", module: "D", topic: "r-hta", type: "cat", level: 1, trap: false,
    stem: "Homme de 45 ans à l’urgence : céphalée, vision floue, TA 232/138. Fond d’œil : papilles gonflées, nodules cotonneux, hémorragies en flammèches. Créatinine élevée. Quelle conduite ?",
    figure: null,
    options: [
      "Nifédipine sublinguale pour normaliser la TA en 30 min",
      "Hospitaliser, antihypertenseur IV, baisse graduelle de la TA",
      "Retour à domicile, nouvel antihypertenseur oral, suivi dans un mois",
      "IRM cérébrale d’abord, traiter la TA selon le résultat"
    ],
    answer: 1,
    explain: "Urgence hypertensive avec atteinte d’organes : hospitaliser, antihypertenseur IV, baisse graduelle (environ 10–15 % la 1re heure, pas plus de 25 % le 1er jour). Une chute brutale cause une ischémie.",
    deep: "**Ce que c’est :** une urgence hypertensive (TA très haute avec atteinte d’organes : rétinopathie sévère, rein). **Pourquoi graduellement :** les organes se sont adaptés à une pression haute ; une chute brutale peut causer une ischémie du cerveau, du rein ou du nerf optique. **Quoi faire :** hospitaliser, antihypertenseur IV titrable, baisse d’environ 10–15 % de la pression moyenne la 1re heure et pas plus de 25 % le 1er jour, puis relais oral.",
    why: [
      "Piège : la nifédipine sublinguale fait chuter la TA de façon imprévisible ; normaliser en 30 min est dangereux.",
      "Exact : urgence hypertensive, baisse contrôlée en milieu surveillé.",
      "Une atteinte d’organe ne se gère pas à domicile.",
      "L’imagerie suit les signes neurologiques ; elle ne doit pas retarder le traitement de la TA."
    ]
  },
  {
    id: "D-014", module: "D", topic: "r-hta", type: "diagnostic", level: 2, trap: false,
    stem: "Au fond d’œil d’une femme de 66 ans hypertendue, tu vois des artérioles fines et des croisements artère-veine pincés, sans hémorragie ni œdème papillaire. TA 150/92, aucun symptôme. Comment classer cette rétinopathie ?",
    figure: null,
    options: [
      "Sévère (maligne) : urgence hypertensive",
      "Modérée : chercher une atteinte d’organe aiguë",
      "Absente : variante normale",
      "Légère : HTA chronique à mieux contrôler"
    ],
    answer: 3,
    explain: "Artérioles fines et croisements pincés sans hémorragie ni papille gonflée : forme légère de Wong-Mitchell, signe d’HTA ancienne. On ajuste le traitement en externe.",
    deep: "**Classification de Wong et Mitchell :** légère = artérioles fines, croisements pincés, fils de cuivre ; modérée = hémorragies, microanévrismes, nodules cotonneux, exsudats ; sévère = forme modérée avec papille gonflée. **Ici :** forme légère, signe d’une HTA ancienne ; on ajuste le traitement en externe, sans baisse rapide.",
    why: [
      "Il faudrait une papille gonflée pour parler de forme sévère.",
      "Il faudrait des hémorragies, nodules cotonneux ou exsudats.",
      "Des croisements pincés sont des signes d’HTA chronique, pas une variante normale.",
      "Exact : forme légère ; mieux contrôler l’HTA en externe."
    ]
  },
  {
    id: "D-015", module: "D", topic: "r-dpv", type: "diagnostic", level: 1, trap: false,
    stem: "Femme de 63 ans : depuis hier, un anneau gris flotte devant l’œil droit et elle voit des éclairs brefs au coin de l’œil le soir. Vision 6/6, champ normal. Diagnostic le plus probable ?",
    figure: null,
    options: [
      "Aura migraineuse visuelle",
      "Décollement postérieur du vitré",
      "Occlusion de l’artère centrale de la rétine",
      "Uvéite antérieure aiguë"
    ],
    answer: 1,
    explain: "Anneau flottant (anneau de Weiss) et éclairs brefs d’un œil après 50 ans : décollement postérieur du vitré. Environ 1 sur 7 cache une déchirure : examen dilaté dans les 24 h.",
    deep: "**Ce que c’est :** le vitré, liquéfié avec l’âge, s’est détaché de la papille ; le tissu arraché autour d’elle flotte sous forme d’anneau (anneau de Weiss). Les éclairs viennent de la traction du vitré sur la rétine périphérique. **Quoi faire :** examen dilaté avec dépression sclérale dans les 24 h (le jour même si nuée de corps flottants, sang ou rideau) et consignes de retour.",
    why: [
      "L’aura touche les deux yeux et dessine des zigzags qui disparaissent en 20–30 min ; elle ne fait pas d’anneau flottant.",
      "Exact : anneau de Weiss et éclairs = DPV ; examen dilaté dans les 24 h.",
      "L’OACR fait perdre la vision brutalement, sans corps flottants ni éclairs.",
      "L’uvéite antérieure donne un œil rouge, douloureux et photophobe."
    ]
  },
  {
    id: "D-016", module: "D", topic: "r-dpv", type: "cat", level: 2, trap: false,
    stem: "Homme de 66 ans : examen dilaté le jour même pour des corps flottants, DPV sans déchirure. Quelle consigne lui donnes-tu en partant ?",
    figure: null,
    options: [
      "Aucun suivi : le DPV est toujours bénin",
      "Repos au lit, tête surélevée, pendant une semaine",
      "Gouttes anti-inflammatoires pour faire disparaître les corps flottants",
      "Revenir le jour même si les symptômes changent"
    ],
    answer: 3,
    explain: "Une déchirure peut apparaître dans les semaines suivant un DPV (environ 3 % en 6 semaines). Le patient doit revenir le jour même si les symptômes changent : nuée, éclairs persistants, rideau, baisse de vision.",
    deep: "**Pourquoi :** le vitré continue de tirer sur la rétine périphérique après le décollement ; une déchirure peut se former plus tard (Hollands, JAMA 2009 : 3,4 % dans les 6 semaines, risque plus élevé si de nouveaux corps flottants apparaissent). **Quoi faire :** consignes écrites, réexamen prévu selon l’ophtalmologiste.",
    why: [
      "Faux : une déchirure peut survenir dans les semaines qui suivent.",
      "Le repos au lit n’empêche pas une déchirure ; il n’est pas recommandé ici.",
      "Aucune goutte ne fait disparaître les corps flottants.",
      "Exact : consignes de retour claires, réexamen prévu."
    ]
  },
  {
    id: "D-017", module: "D", topic: "r-endophtalmie", type: "cat", level: 1, trap: false,
    stem: "Femme de 79 ans, injection d’anti-VEGF il y a 2 jours : œil droit rouge, douloureux, vision qui baisse. Tu vois un petit niveau blanc en bas de la chambre antérieure. Quelle conduite ?",
    figure: null,
    options: [
      "Gouttes antibiotiques et contrôle dans 48 h",
      "Ophtalmologiste le jour même",
      "Corticostéroïde topique et compresses froides",
      "Antibiotique oral et rendez-vous dans la semaine"
    ],
    answer: 1,
    explain: "Douleur, rougeur, baisse de vision et hypopyon quelques jours après une injection : endophtalmie. Ponction et antibiotiques intravitréens le jour même ; la rétine peut être perdue en quelques heures.",
    deep: "**Ce que c’est :** une infection du vitré, le plus souvent par des bactéries de la flore des paupières entrées par l’aiguille. **Pourquoi pas des gouttes ou des comprimés :** ils n’atteignent pas assez le vitré ; seuls les antibiotiques injectés dans le vitré (vancomycine 1 mg/0,1 mL et ceftazidime 2,25 mg/0,1 mL) traitent l’infection. **Quoi faire :** appeler l’ophtalmologiste de garde ou le chirurgien maintenant.",
    why: [
      "Les gouttes n’atteignent pas le vitré ; 48 h, c’est trop tard.",
      "Exact : endophtalmie, antibiotiques intravitréens le jour même.",
      "Un corticostéroïde seul masquerait une infection qui progresse.",
      "Un antibiotique oral pénètre mal dans le vitré ; une semaine, c’est trop tard."
    ]
  },
  {
    id: "D-018", module: "D", topic: "r-endophtalmie", type: "cat", level: 2, trap: true,
    stem: "Homme de 72 ans, cataracte il y a 6 jours : endophtalmie avec hypopyon ; il ne perçoit plus que la lumière. Selon l’Endophthalmitis Vitrectomy Study, quelle prise en charge ?",
    figure: null,
    options: [
      "Antibiotiques intraveineux seuls",
      "Ponction et injection, sans vitrectomie",
      "Gouttes antibiotiques fortifiées aux heures",
      "Vitrectomie immédiate et antibiotiques intravitréens"
    ],
    answer: 3,
    explain: "Dans l’EVS, quand la vision est réduite à la perception lumineuse, la vitrectomie immédiate triple les chances de retrouver 20/40 (33 % contre 11 %). Les antibiotiques IV n’ont rien ajouté.",
    deep: "**Ce que dit l’EVS (1995) :** 420 patients avec endophtalmie dans les 6 semaines suivant une cataracte. Vision « mouvements de la main » ou mieux : ponction et injection aussi efficaces que la vitrectomie. Perception lumineuse seulement : vitrectomie nettement meilleure (20/40 : 33 % contre 11 % ; perte sévère : 20 % contre 47 %). Antibiotiques IV : aucun bénéfice. **Le piège :** croire que la voie IV suffit.",
    why: [
      "Piège : dans l’EVS, les antibiotiques IV n’ont rien ajouté ; ils ne remplacent pas les injections.",
      "C’est la conduite si la vision est « mouvements de la main » ou mieux, pas à la perception lumineuse.",
      "Les gouttes fortifiées traitent une kératite, pas une infection du vitré.",
      "Exact : perception lumineuse seulement = vitrectomie immédiate."
    ]
  }
]);
