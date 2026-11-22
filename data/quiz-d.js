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
    explain: "**Ce que c’est :** probablement un décollement postérieur du vitré (DPV), mais une nuée de corps flottants nouveaux fait craindre une déchirure de la rétine. **Pourquoi pas rassurer :** la déchirure est en périphérie, invisible sans dilatation ; environ 14 % des patients avec éclairs ou corps flottants aigus en ont une, et une dizaine de nouveaux corps flottants augmente nettement ce risque (Hollands, JAMA 2009). **Quoi faire :** examen dilaté avec dépression sclérale le jour même ; une déchirure se traite au laser avant de devenir un décollement.",
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
    explain: "**Règle :** l’image est inversée sur la rétine ; un déficit du champ inférieur correspond à la rétine supérieure. **Pourquoi c’est pressant :** un décollement supérieur gagne vite la macula, car le liquide descend avec la gravité. **Quoi faire :** ophtalmologiste de garde le jour même, avant que la vision centrale tombe.",
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
    explain: "**Le piège :** le protoxyde d’azote diffuse dans la bulle de gaz intraoculaire bien plus vite que l’azote n’en sort ; la bulle gonfle, la PIO monte brutalement et peut fermer l’artère centrale de la rétine. **Quoi faire :** signaler la bulle à l’anesthésiste ; pas de protoxyde d’azote tant qu’elle persiste, ni avion ni altitude.",
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
      "Urgence d’un centre de l’AVC maintenant ; VS et CRP",
      "Gouttes hypotensives et contrôle dans une semaine"
    ],
    answer: 2,
    explain: "**Ce que c’est :** une occlusion de l’artère centrale de la rétine, c’est-à-dire un AVC de l’œil. **Pourquoi l’urgence :** le risque d’AVC cérébral est élevé dans les jours qui suivent ; le bilan (IRM de diffusion, carotides, rythme cardiaque, échographie) se fait le jour même, et la thrombolyse se discute en centre de l’AVC si le début date de moins de 4,5 h. **Après 50 ans :** VS, CRP et plaquettes pour éliminer une artérite à cellules géantes.",
    why: [
      "Le massage n’a aucun bénéfice prouvé et le délai fait manquer le bilan d’AVC urgent.",
      "Un bilan en externe laisse passer la fenêtre où le risque d’AVC est le plus élevé.",
      "Exact : c’est un AVC ; bilan le jour même et artérite à éliminer.",
      "Les gouttes hypotensives n’ont pas montré de bénéfice et retardent le bilan."
    ]
  },
  {
    id: "D-005", module: "D", topic: "r-oacr", type: "physiopathologie", level: 2, trap: false,
    stem: "Dans une occlusion de l’artère centrale de la rétine, pourquoi la fovéa paraît-elle rouge cerise au milieu d’une rétine blanche ?",
    figure: null,
    options: [
      "La choroïde, intacte, se voit à travers une fovéa sans rétine interne",
      "Une hémorragie sous-rétinienne se forme sous la fovéa",
      "Les cônes de la fovéa contiennent un pigment rouge",
      "L’artère ciliorétinienne se dilate pour compenser"
    ],
    answer: 0,
    explain: "**Mécanisme :** l’artère centrale nourrit les couches internes de la rétine, qui blanchissent quand elles manquent d’oxygène. La fovéa n’a pas de couches internes : elle dépend de la choroïde, qui reste perfusée. On voit donc la choroïde rouge au centre d’une rétine pâle.",
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
    explain: "**Ce que c’est :** une artérite à cellules géantes probable (âge, céphalée, claudication de la mâchoire, VS et CRP élevées) avec atteinte de la vision. **Pourquoi maintenant :** l’autre œil peut être perdu en quelques jours ; la biopsie reste interprétable si elle est faite dans les 2 semaines suivant le début des corticostéroïdes. **Quoi faire :** corticostéroïdes à haute dose immédiatement, avec l’équipe (médecine interne ou rhumatologie).",
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
    explain: "**Ce que c’est :** une occlusion de la veine centrale : le sang reflue dans tout le territoire veineux, d’où des hémorragies dans les quatre quadrants et des veines dilatées et tortueuses. Une occlusion de branche, elle, reste dans un secteur limité par le raphé horizontal. **Quoi faire :** ophtalmologie dans la semaine (OCT, angiographie), bilan TA, glycémie, lipides, FSC ; surveiller l’iris et l’angle chaque mois au début.",
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
      "Échographie B à chaque visite"
    ],
    answer: 1,
    explain: "**La complication redoutée :** le glaucome néovasculaire. La rétine ischémique libère du VEGF ; des néovaisseaux poussent sur l’iris et dans l’angle, souvent dans les 3 premiers mois. **Quoi faire :** examen de l’iris non dilaté et gonioscopie chaque mois pendant 6 mois ; laser panrétinien (et anti-VEGF) dès l’apparition de néovaisseaux.",
    why: [
      "Le champ visuel ne détecte pas les néovaisseaux de l’iris, et 6 mois, c’est trop tard.",
      "Exact : on cherche la rubéose et les néovaisseaux de l’angle chaque mois au début.",
      "L’occlusion veineuse n’est pas un AVC ; l’IRM n’est pas le suivi.",
      "L’échographie sert si le fond d’œil est caché ; elle ne montre pas l’angle."
    ]
  }
]);
