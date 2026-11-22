var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};
G.OPH.hy = G.OPH.hy || {};
Object.assign(G.OPH.hy, {
  "c-bases": {
    essentials: [
      "Le glaucome est une **neuropathie optique** ; la PIO, son principal facteur modifiable.",
      "**PIO = (F − U)/C + Pv** : par le trabéculum, impossible de descendre sous Pv.",
      "Classer : angle **ouvert ou fermé** (gonioscopie), puis glaucome primaire ou secondaire.",
      "**Structure-fonction** : amincissement RNFL inférieur = défaut de champ supérieur ; les deux doivent concorder.",
      "Avant d’escalader, vérifier l’**observance** : une « progression » peut cacher un flacon jamais ouvert."
    ],
    cloze: [
      "La pression veineuse épisclérale (Pv) vaut environ [[8–10 mmHg|8 à 10 mmHg|8-10 mmHg|8–10|8-10]].",
      "Hodapp-Parrish-Anderson : un MD < [[−12 dB|-12 dB|−12|-12]] définit le stade avancé.",
      "Seule la [[gonioscopie]] permet de dire si l’angle est ouvert ou fermé.",
      "Grossesse ou allaitement : [[occlusion ponctuelle]] après chaque goutte pour limiter le passage systémique.",
      "La brimonidine est contre-indiquée avant [[2 ans|deux ans|2]] et avec les IMAO.",
      "EMGT : chaque mmHg de baisse ≈ [[10 %|10|10%]] de risque de progression en moins."
    ],
    triage: [
      { s: "Homme de 66 ans : PIO 24 mmHg, angle ouvert, nerf, RNFL et champ normaux.", u: "routine", why: "Hypertension oculaire : facteur de risque, pas encore une maladie ; estimer le risque avant de traiter." },
      { s: "GPAO modéré : MD passé de −7 à −10 dB en un an, champs fiables et comparables.", u: "rapide", why: "Progresseur rapide (≥ 2 dB/an) : vérifier l’observance, confirmer, puis abaisser la cible." },
      { s: "Femme de 65 ans : œil rouge très douloureux, halos, PIO 56 mmHg, angle fermé.", u: "urgent", why: "Fermeture aiguë : gouttes et acétazolamide 500 mg PO ou IV sans délai, puis iridotomie au laser." }
    ],
    cues: [
      "Équation (F − U)/C + Pv",
      "Indices MD, PSD, VFI et GHT",
      "Escalier : gouttes, laser, puis chirurgie"
    ]
  },

  "g-gpao": {
    essentials: [
      "Neuropathie optique **indolore** : le champ périphérique part en silence, le central en dernier.",
      "**Gonioscopie** au diagnostic : angle ouvert = éperon scléral visible sur 360°, sans synéchies.",
      "Seul levier prouvé, la **PIO** : cible ≈ 20–30 % sous la base.",
      "**SLT** en première intention : 69,8 % à la cible sans autre traitement (LiGHT).",
      "Pâleur > excavation, AV ↓ précoce, défaut vertical : drapeau rouge, **IRM**."
    ],
    cloze: [
      "Fibres inférieures perdues : le défaut de champ est [[supérieur]].",
      "Au départ, ≈ [[3 champs|trois champs|3|3 fois|trois fois]] par an pendant 2 ans repèrent un progresseur rapide.",
      "Au champ visuel, des faux positifs > [[15 %|15|15%]] rendent le test non fiable.",
      "Les analogues des prostaglandines augmentent la sortie [[uvéosclérale]] de l’aqueuse.",
      "Sous PGA, l’assombrissement de l’iris est [[irréversible]] : prévenir, surtout si un seul œil est traité.",
      "Timolol à éviter en cas d’asthme ou de MPOC : risque de [[bronchospasme]]."
    ],
    triage: [
      { s: "Femme de 58 ans dirigée pour glaucome : pâleur plus étendue que l’excavation, AV 6/12, défaut respectant le méridien vertical.", u: "rapide", why: "Drapeaux rouges : penser compression (chiasma) ; IRM priorisée avant de traiter un glaucome." },
      { s: "GPAO sous PGA, PIO à la cible, mais MD qui chute de 2,5 dB en un an sur des champs fiables.", u: "rapide", why: "Progresseur rapide : confirmer, vérifier l’observance, puis abaisser la cible (SLT, MIGS ou chirurgie filtrante)." },
      { s: "Homme de 72 ans, GPAO débutant sous latanoprost : PIO à la cible, OCT et champ stables.", u: "routine", why: "Stable à la cible : OCT et champ 1–2 fois par an ; réévaluer la cible à chaque visite." }
    ],
    cues: [
      "PIO 26, gonioscopie normale, défaut arciforme",
      "Ressaut nasal découvert au dépistage, PIO élevée"
    ]
  },

  "g-hto": {
    essentials: [
      "**HTO** : PIO > 21, angle ouvert, nerf et champ normaux ; un risque, pas une maladie.",
      "**OHTS** : PIO −20 % → conversion à 5 ans 4,4 % vs 9,5 %.",
      "**Cornée mince** : la PIO est sous-estimée ET le risque de conversion augmente.",
      "Ne pas traiter tout HTO : estimer le **risque** (âge, PIO, cornée, C/D, PSD).",
      "Traiter si PIO **≥ 30 mmHg**, œil unique ou risque élevé : cible −20 %."
    ],
    cloze: [
      "OHTS : une cornée ≤ 555 µm convertit ≈ [[3 fois|trois fois|3]] plus qu’une cornée > 588 µm.",
      "Prédicteurs OHTS : âge, PIO, épaisseur cornéenne, C/D vertical et [[PSD]].",
      "Une seule mesure ne suffit pas : répéter la [[tonométrie]] à différentes heures.",
      "Chez un HTO, une [[hémorragie papillaire|hémorragie de Drance]] prédit la conversion : resserrer le suivi ou traiter.",
      "Un défaut de champ doit être [[reproductible]] (2–3 champs) avant de conclure au glaucome.",
      "PIO élevée d’un seul côté : chercher une cause [[secondaire]]."
    ],
    triage: [
      { s: "Homme de 72 ans : PIO 23 mmHg aux deux yeux, cornées épaisses, papilles, OCT et champ normaux.", u: "routine", why: "HTO à faible risque : observation structurée, OCT et champ comparés à la référence." },
      { s: "Femme de 45 ans : PIO 31 mmHg, cornée de 520 µm, nerf, OCT et champ normaux.", u: "rapide", why: "PIO ≥ 30 mmHg, jeune, cornée mince : traitement généralement offert (PGA ou SLT, cible ≈ 20 % sous la base)." },
      { s: "HTO suivi depuis 3 ans : nouvelle hémorragie papillaire et amincissement RNFL inférieur, champ encore normal.", u: "rapide", why: "Conversion probable : confirmer, puis resserrer le suivi ou traiter." }
    ],
    cues: [
      "PIO > 21, nerf et champ normaux",
      "Risque de conversion estimé à 5 ans"
    ]
  },

  "g-gpn": {
    essentials: [
      "**GPN** : neuropathie glaucomateuse à angle ouvert, PIO toujours ≤ 21 mmHg ; diagnostic d’exclusion.",
      "Avant de dire GPN, éliminer « **PACI** » : PIO manquée, angle intermittent, compression, ischémie.",
      "**IRM** si < 50 ans, pâleur > excavation, AV ou couleurs ↓, défaut vertical.",
      "**CNTGS** : PIO −30 % → moins de progression (≈ 12 % vs 35 %, per protocole).",
      "Défauts **paracentraux** précoces, manqués par le 24-2 : ajouter un 10-2."
    ],
    cloze: [
      "Classique du GPN, l’hémorragie papillaire de [[Drance]] signale une progression active.",
      "≥ 50 ans avec céphalée ou claudication de la mâchoire : VS et CRP pour exclure une [[artérite]] à cellules géantes.",
      "Dans l’essai [[LoGTS]], la brimonidine a donné moins de progression du champ que le timolol.",
      "GPN qui progresse : revoir l’hypotension [[nocturne]] avec le médecin traitant et dépister l’apnée du sommeil.",
      "Une [[gonioscopie]] systématique exclut une fermeture intermittente dont les pics de PIO échappent aux mesures.",
      "Bien des GPN non traités ne [[progressent]] pas : on peut observer un GPN stable, loin de la fixation."
    ],
    triage: [
      { s: "Homme de 42 ans : PIO 15 mmHg, pâleur plus étendue que l’excavation, couleurs diminuées.", u: "rapide", why: "Atypique pour un GPN (âge < 50 ans, pâleur) : IRM priorisée pour exclure une compression." },
      { s: "Femme de 70 ans, GPN connu : nouveau scotome paracentral qui menace la fixation.", u: "rapide", why: "Fixation menacée : traiter sans attendre, cible ≈ 30 % sous la base." },
      { s: "Femme de 66 ans, GPN débutant : défaut loin de la fixation, stable sur plusieurs champs.", u: "routine", why: "Bien des GPN ne progressent pas (CNTGS) : observer et mesurer le rythme, ≈ 3 champs par an." }
    ],
    cues: [
      "Hémorragie de Drance, PIO toujours ≤ 21",
      "Migraine, Raynaud, hypotension nocturne, scotome paracentral"
    ]
  },

  "g-papille": {
    essentials: [
      "C/D élevé ≠ diagnostic : d’abord la **taille du disque**.",
      "**Pâleur** > creux : cause non glaucomateuse probable, IRM.",
      "Défaut respectant le méridien **vertical** : chiasma, IRM.",
      "≥ 50 ans, perte aiguë, papille pâle : **NOIA artéritique**, VS, CRP.",
      "Grande papille ne protège pas : l’**anneau neurorétinien** compte."
    ],
    cloze: [
      "Un C/D de 0,7 peut être normal dans un [[grand disque|grand]] et suspect dans un petit.",
      "L’excavation se lit au relief, la pâleur à la [[couleur]].",
      "À l’OCT, une perte maculaire nasale qui respecte le méridien vertical oriente vers le [[chiasma]].",
      "Drusen papillaires : papille bosselée sans creux, calcium visible à l’[[échographie B|écho B|échographie]] et en autofluorescence.",
      "Hypoplasie segmentaire supérieure du nerf optique : penser à une mère [[diabétique]].",
      "Chez le myope fort, la papille inclinée rend l’OCT faussement [[anormal|rouge|pathologique]] (red disease)."
    ],
    triage: [
      { s: "Dirigé pour C/D 0,7 : grand disque, anneau rose régulier, OCT et champ normaux, aspect stable.", u: "routine", why: "Excavation physiologique probable : documenter (photos, OCT), puis suivi espacé, sans gouttes." },
      { s: "Homme de 45 ans : papille pâle peu creusée, AV 6/12, DPAR, défaut temporal respectant le méridien vertical.", u: "rapide", why: "Drapeaux rouges d’une compression : IRM avec gadolinium priorisée, neuro-ophtalmologie." },
      { s: "Femme de 77 ans : céphalée, claudication de la mâchoire, perte visuelle aiguë récente, excavation pâle.", u: "urgent", why: "Artérite à cellules géantes possible : VS, CRP le jour même ; stéroïdes sans attendre la biopsie." }
    ],
    cues: [
      "Pâleur qui déborde le creux",
      "Grand disque, anneau rose régulier, OCT normal",
      "Dirigé pour « C/D élevé », sans symptôme"
    ]
  },

  "g-fermeture": {
    essentials: [
      "Gonioscopie : **PACS** (contact ≥ 180°), PAC (PAS ou PIO ↑), PACG (neuropathie).",
      "**Gonioscopie dynamique** en pièce sombre, petit faisceau : la pupille reste large.",
      "L’**indentation** ouvre une apposition, mais pas les synéchies antérieures périphériques (PAS).",
      "**EAGLE** : ≥ 50 ans, PAC à PIO ≥ 30 mmHg ou PACG → extraire le cristallin.",
      "Myopie aiguë bilatérale sous **topiramate** : effusion ; ni iridotomie ni pilocarpine."
    ],
    cloze: [
      "À la lampe à fente, un Van Herick ≤ [[2|grade 2]] impose une gonioscopie.",
      "Le mécanisme de fermeture le plus fréquent est le [[bloc pupillaire]], le seul que corrige l’iridotomie.",
      "Angle encore fermé malgré une LPI perméable : penser [[iris plateau]] et confirmer à l’UBM.",
      "Après une LPI, vérifier la [[perméabilité]] du trou et mesurer la PIO 30 min à 2 h plus tard.",
      "PACS : la LPI n’est pas systématique (ZAP) ; on prend une [[décision partagée]].",
      "Les populations [[inuites|inuit|inuits|inuite]] du Nunavik ont parmi les plus hauts taux de fermeture primaire."
    ],
    triage: [
      { s: "Femme de 60 ans, hypermétrope : halos et céphalée le soir qui cèdent au sommeil ; Van Herick 1.", u: "rapide", why: "Fermetures intermittentes : gonioscopie et traitement rapides (LPI ou extraction du cristallin)." },
      { s: "Homme de 55 ans, angle étroit au dépistage : contact ≥ 180°, PIO 17, sans PAS ni neuropathie.", u: "routine", why: "PACS : décision partagée entre LPI et observation ; enseigner les symptômes d’alarme." },
      { s: "Femme de 40 ans sous topiramate : vision floue des deux yeux, myopie aiguë, angles fermés, PIO élevée.", u: "urgent", why: "Effusion ciliochoroïdienne : cesser le topiramate avec le prescripteur, cycloplégique, stéroïde, hypotenseurs ; ni LPI ni pilocarpine." }
    ],
    cues: [
      "Contact iridotrabéculaire ≥ 180° à la gonioscopie",
      "Halos le soir qui cèdent au sommeil",
      "Van Herick 1 chez une Inuite hypermétrope"
    ]
  },

  "g-crise": {
    essentials: [
      "Œil rouge douloureux, halos, cornée dépolie, **pupille mi-dilatée** fixe, PIO très haute.",
      "Baisser la PIO d’abord : timolol, brimonidine, dorzolamide, **acétazolamide 500 mg**.",
      "**Pilocarpine** seulement après la baisse de PIO (sphincter ischémique avant).",
      "Pilocarpine **contre-indiquée** si cause cristallinienne, effusion au topiramate ou mal-direction.",
      "**LPI bilatérale** : sinon ≈ la moitié des adelphes font une crise en 5 ans."
    ],
    cloze: [
      "PIO inchangée après 1 h de traitement maximal : [[mannitol]] IV et appel à l’ophtalmologiste de garde.",
      "Avant l’acétazolamide, vérifier allergie aux sulfamides, fonction rénale, potassium et [[drépanocytose]].",
      "L’[[indentation]] de la cornée chasse l’aqueuse vers l’angle et peut aider à rompre la crise.",
      "Céphalée et vomissements à l’urgence : mesurer la [[PIO|pression intraoculaire|pression]] avant le scan cérébral.",
      "Chambre étroite aussi dans l’œil adelphe : mécanisme [[primaire]] probable.",
      "PIO haute avec précipités cornéens, angle ouvert et pupille non mi-dilatée : penser à une [[uvéite|iritis|uvéite antérieure]] hypertensive."
    ],
    triage: [
      { s: "Femme de 62 ans à l’urgence : céphalée, vomissements, œil droit rouge, cornée dépolie, pupille mi-dilatée.", u: "urgent", why: "Crise aiguë probable : mesurer la PIO, gouttes et acétazolamide sans délai, ophtalmologiste de garde le jour même." },
      { s: "Crise en cours : PIO toujours à 52 mmHg une heure après gouttes et acétazolamide.", u: "urgent", why: "Réfractaire : mannitol IV si cœur et reins le permettent, indentation, avis urgent (paracentèse, laser, chirurgie)." },
      { s: "Crise de l’œil droit rompue, LPI faite ; œil gauche asymptomatique, angle étroit à la gonioscopie.", u: "rapide", why: "Environ la moitié des yeux adelphes font une crise en 5 ans sans LPI : iridotomie prophylactique sans tarder." }
    ],
    cues: [
      "Pupille mi-dilatée fixe, cornée dépolie, PIO 55",
      "Halos colorés, vomissements, globe dur"
    ]
  },

  "g-pxf": {
    essentials: [
      "Dépôts blanchâtres **en cible** sur la capsule, souvent visibles après dilatation seulement.",
      "**Plus agressif** que le GPAO : PIO haute et fluctuante, cible plus basse.",
      "**Zonules fragiles** (phacodonésis, mauvaise dilatation) : prévenir le chirurgien de cataracte.",
      "Vision ↓ brusque des années après la cataracte : **implant luxé** dans son sac.",
      "**SLT** souvent efficace, mais pic de PIO plus probable : contrôler après."
    ],
    cloze: [
      "Pigment en avant de la ligne de Schwalbe à la gonioscopie : ligne de [[Sampaolesi]].",
      "Des variants du gène [[LOXL1]] favorisent le matériel fibrillaire de la pseudo-exfoliation.",
      "Avant même la dilatation, chercher des flocons blancs au bord [[pupillaire]].",
      "Cataracte avec pseudo-exfoliation : prévoir un [[anneau de tension]] capsulaire et des crochets.",
      "La pseudo-exfoliation est un facteur de progression dans l’essai [[EMGT]].",
      "Vraie exfoliation capsulaire : clivage de la capsule chez les [[souffleurs de verre|souffleur de verre]]."
    ],
    triage: [
      { s: "Homme de 74 ans : dépôts en cible, PIO 34 mmHg, encoche inférieure et défaut de champ concordant.", u: "rapide", why: "Glaucome pseudo-exfoliatif, agressif : orienter rapidement, cible plus basse et suivi serré." },
      { s: "Femme de 70 ans : flocons au bord pupillaire, PIO 18, nerf, OCT et champ normaux.", u: "routine", why: "Pseudo-exfoliation sans glaucome : PIO, papille, OCT et champ plus souvent qu’un suspect ordinaire." }
    ],
    cues: [
      "Dépôts blanchâtres en cible sur le cristallin",
      "Ligne de Sampaolesi, pupille qui dilate mal",
      "Phacodonésis chez un patient âgé, PIO fluctuante"
    ]
  },

  "g-pigmentaire": {
    essentials: [
      "Jeune homme myope : fuseau de **Krukenberg**, fentes iriennes et angle très pigmenté.",
      "**Bloc pupillaire inversé** : l’iris concave frotte les zonules et perd son pigment.",
      "Halos après un **effort** ou une dilatation : pic de PIO par pluie de pigment.",
      "**SLT à énergie basse** : trabéculum très pigmenté, risque de pic de PIO.",
      "Avant la **pilocarpine**, fond d’œil dilaté : risque de décollement chez le myope."
    ],
    cloze: [
      "Siddiqui 2003 : la dispersion pigmentaire évolue en glaucome chez ≈ [[10 %|10|10%]] des patients à 5 ans.",
      "Ligne de pigment sur la capsule postérieure, à l’attache des zonules : ligne de [[Scheie]].",
      "L’iridotomie aplatit l’iris concave, sans bénéfice démontré sur la [[progression]] du glaucome.",
      "Avec l’âge, la libération de pigment cesse : la phase [[éteinte]] peut imiter un GPN.",
      "Le pigment trabéculaire est dense et [[homogène|uniforme]] sur 360°, contrairement à celui de la PXF.",
      "Les fentes de transillumination sont radiaires et [[médio-périphériques|médiopériphériques|en médio-périphérie]]."
    ],
    triage: [
      { s: "Homme de 28 ans, myope : Krukenberg et fentes iriennes, PIO 19, nerf, OCT et champ normaux.", u: "routine", why: "Dispersion sans glaucome : surveiller PIO, OCT et champ ; signaler les symptômes à l’effort." },
      { s: "Homme de 35 ans, dispersion pigmentaire connue : PIO 32, nouvelle excavation et défaut arciforme.", u: "rapide", why: "Glaucome pigmentaire établi : diriger vers l’ophtalmologiste ; PGA ou SLT à énergie basse." }
    ],
    cues: [
      "Fuseau de Krukenberg chez un jeune myope",
      "Fentes radiaires de transillumination médio-périphériques",
      "Halos après la course chez un myope"
    ]
  },

  "g-neovasculaire": {
    essentials: [
      "Rétine ischémique → **VEGF** → néovaisseaux de l’iris et de l’angle, qui ferment le filtre.",
      "Causes « **DOC** » : diabète, occlusion de la veine centrale, carotide (syndrome ischémique oculaire).",
      "Iris et angle **avant la dilatation**, qui masque les néovaisseaux du bord pupillaire.",
      "**Anti-VEGF** = pont rapide mais temporaire ; la PRP traite la source.",
      "**Pas de pilocarpine** : elle enflamme et n’ouvre pas un angle fibrovasculaire."
    ],
    cloze: [
      "« Glaucome des 90 jours » : chercher NVI et NVA à chaque visite après une [[OVCR|occlusion de la veine centrale]] ischémique.",
      "Les néovaisseaux de l’angle franchissent l’[[éperon scléral|éperon]] et se ramifient sur le trabéculum.",
      "Traction de la membrane au bord pupillaire : [[ectropion uvéal]], signe de stade synéchial avancé.",
      "Pour le confort et l’inflammation, on préfère l’[[atropine]] et un stéroïde à la pilocarpine.",
      "Sans cause rétinienne évidente, un Doppler [[carotidien]] cherche un syndrome ischémique oculaire.",
      "Potentiel visuel utile : [[tube|tube de drainage]] après anti-VEGF ; sinon, cyclophotocoagulation pour le confort."
    ],
    triage: [
      { s: "Diabétique de 58 ans : œil douloureux, PIO 48, néovaisseaux sur l’iris, cornée œdémateuse.", u: "urgent", why: "Glaucome néovasculaire : anti-VEGF, PRP et baisse de PIO le jour même, sans pilocarpine." },
      { s: "Homme de 70 ans : PIO 40, néovaisseaux de l’angle, fond d’œil sans rétinopathie ni occlusion.", u: "urgent", why: "Sans cause rétinienne : traiter le jour même et demander un Doppler carotidien (risque d’AVC)." }
    ],
    cues: [
      "Vaisseaux fins qui franchissent l’éperon scléral",
      "PIO très haute 3 mois après une OVCR",
      "Ectropion uvéal chez un diabétique, PIO haute"
    ]
  },

  "g-secondaires": {
    essentials: [
      "PIO ↑ sous stéroïde, œil calme, angle ouvert : **réponse cortisonique**.",
      "Stéroïdes moins hypertensifs : **loteprednol**, fluorométholone ; plus hypertensifs : difluprednate, dexaméthasone, prednisolone.",
      "Uvéite qui se calme : le **corps ciliaire** reproduit ; PIO ↑ pas forcément cortisonique.",
      "**Iris bombé** (synéchies postérieures sur 360°) : iridotomie ou iridectomie en urgence.",
      "**Jamais de pilocarpine** en uvéite ; gouttes qui ↓ la production en première ligne."
    ],
    cloze: [
      "Posner-Schlossman : crises unilatérales de PIO très haute, peu d’inflammation, souvent liées au [[CMV|cytomégalovirus]].",
      "Uvéite hypertensive unilatérale récidivante : [[PCR]] de l’humeur aqueuse (HSV, VZV, CMV), puis antiviral ciblé.",
      "Précipités cornéens en [[pièce de monnaie|pièces de monnaie]] : penser CMV.",
      "Chez l’[[enfant]], la réponse cortisonique est plus fréquente, plus forte et plus rapide.",
      "PIO haute les premiers jours après chirurgie : viscoélastique retenu, trop tôt pour une réponse [[cortisonique]].",
      "La [[SLT]] fonctionne bien dans le glaucome cortisonique, mais s’évite en uvéite active."
    ],
    triage: [
      { s: "Uvéite chronique : chambre périphérique plate, iris bombé, synéchies postérieures sur 360°, PIO 45.", u: "urgent", why: "Iris bombé : iridotomie (souvent plusieurs) ou iridectomie chirurgicale en urgence." },
      { s: "Greffé de cornée sous prednisolone acétate depuis 4 semaines : PIO 28, œil calme, angle ouvert.", u: "rapide", why: "Réponse cortisonique probable : gouttes hypotensives et stéroïde moins hypertensif (loteprednol), avec prudence vu le risque de rejet." }
    ],
    cues: [
      "PIO qui monte sous dexaméthasone, œil calme",
      "Précipités en pièce de monnaie, PIO 40",
      "Iris bombé sur synéchies postérieures 360°"
    ]
  },

  "g-cristallin": {
    essentials: [
      "Chambre plate **d’un seul côté** + cataracte gonflée : phacomorphique.",
      "**Phacolytique** : cataracte hypermûre, particules blanches, chambre profonde.",
      "**PIO d’abord** ; pas de pilocarpine si cause cristallinienne.",
      "Hyphéma + **drépanocytose** : ni IAC ni hyperosmotique ; lavage si PIO ≥ 24 mmHg > 24 h.",
      "**Récession de l’angle** : glaucome tardif possible ; PIO à vie."
    ],
    cloze: [
      "Pseudophaque avec microhyphémas, pics de PIO et transillumination qui épouse l’implant : syndrome [[UGH]].",
      "L’acétazolamide acidifie l’aqueuse et favorise la [[falciformation]] chez le drépanocytaire.",
      "Gaz intraoculaire : pas d’avion, d’altitude ni de [[protoxyde d’azote]] avant sa résorption.",
      "Après un hyphéma, le resaignement survient surtout entre le 2e et le [[5e jour|5e|cinquième jour]].",
      "Récession de l’angle : bande [[ciliaire]] élargie et procès iriens déchirés, à comparer à l’autre œil.",
      "Devant un hyphéma chez un patient à risque, demander l’[[électrophorèse de l’hémoglobine|électrophorèse]]."
    ],
    triage: [
      { s: "Homme de 25 ans, trait drépanocytaire : hyphéma traumatique, PIO 28 mmHg depuis 30 heures.", u: "urgent", why: "Drépanocytose : PIO ≥ 24 mmHg plus de 24 h → lavage chirurgical ; éviter IAC et hyperosmotiques." },
      { s: "Femme de 80 ans : cataracte blanche gonflée, œil rouge douloureux, PIO 50, chambre plate de ce seul œil.", u: "urgent", why: "Glaucome phacomorphique : baisser la PIO sans pilocarpine, puis extraction rapide du cristallin." },
      { s: "Homme de 50 ans, coup de poing à l’œil il y a 20 ans : récession de l’angle, PIO 17, nerf sain.", u: "routine", why: "Récession sans glaucome : PIO à vie, car le glaucome peut survenir des années plus tard." }
    ],
    cues: [
      "Chambre plate d’un seul côté, cataracte blanche",
      "Microhyphémas répétés chez un pseudophaque",
      "Bande ciliaire élargie, procès iriens déchirés"
    ]
  },

  "g-dev": {
    essentials: [
      "Nourrisson : **larmoiement, photophobie, blépharospasme** = glaucome congénital.",
      "Cornée **> 12 mm** avant 1 an : très suspect.",
      "**Brimonidine contre-indiquée avant 2 ans** (dépression du SNC).",
      "Traitement : **chirurgie de l’angle** ; les gouttes servent de pont.",
      "**ICE** : femme d’âge moyen, un seul œil, endothélium en argent martelé."
    ],
    cloze: [
      "Stries de Haab : ruptures de la Descemet [[horizontales|horizontales ou concentriques|concentriques]] ; celles des forceps sont verticales ou obliques.",
      "Aniridie sans histoire familiale : dépister une tumeur de [[Wilms]].",
      "Tout nourrisson suspect doit avoir sans tarder un [[examen sous anesthésie|EUA]].",
      "Chez l’enfant, lunettes et occlusion contre l’[[amblyopie]] comptent autant que la PIO.",
      "Un embryotoxon postérieur [[isolé|seul]] est fréquent et bénin ; avec brides iriennes, penser Axenfeld-Rieger.",
      "Sturge-Weber : [[échographie B|écho B|échographie]] avant la chirurgie, l’hémangiome choroïdien exposant à l’effusion."
    ],
    triage: [
      { s: "Nourrisson de 4 mois : larmoie, fuit la lumière, serre les paupières ; cornées larges et bleutées.", u: "urgent", why: "Glaucome congénital probable : référence urgente, appeler le patron de garde ; examen sous anesthésie." },
      { s: "Nourrisson de 2 mois : larmoiement isolé, sans photophobie, cornées claires de taille normale.", u: "routine", why: "Obstruction congénitale du canal lacrymonasal probable, pas un glaucome." }
    ],
    cues: [
      "Larmoiement, photophobie, blépharospasme chez un nourrisson",
      "Stries de Haab dans un œil agrandi",
      "Endothélium en argent martelé, d’un seul côté"
    ]
  },

  "g-postop": {
    essentials: [
      "Lire **PIO × chambre** : trois combinaisons orientent le diagnostic.",
      "**Basse + étroite** : fuite (Seidel positif), surfiltration ou effusion choroïdienne.",
      "**Haute + étroite** : mal-direction, hémorragie suprachoroïdienne ou bloc pupillaire (iridectomie bouchée).",
      "**Haute + profonde** : volet serré, fistule bouchée ou bulle encapsulée.",
      "Bulle blanche, œil rouge douloureux : **infection de bulle**, le jour même."
    ],
    cloze: [
      "Au test de [[Seidel]], un ruisseau vert vif sur la bulle signe une fuite.",
      "Chambre plate de grade [[3|III|trois]], cristallin contre cornée : reformer la chambre en urgence.",
      "PIO haute, chambre plate, iridectomie perméable, sans dôme choroïdien : [[mal-direction|mal direction|glaucome malin]] ; iridectomie bouchée : bloc pupillaire.",
      "Endophtalmie de bulle : vancomycine 1 mg/0,1 mL et [[ceftazidime]] 2,25 mg/0,1 mL intravitréennes.",
      "On ligature un tube de [[Baerveldt]], sans valve, jusqu’à la formation de la capsule.",
      "Vision ↓ avec PIO basse et plis choroïdiens à l’OCT : maculopathie d’[[hypotonie]]."
    ],
    triage: [
      { s: "Trabéculectomie il y a 3 ans : œil rouge, douleur, écoulement, bulle blanc laiteux, hypopyon.", u: "urgent", why: "Endophtalmie liée à la bulle : ponction et antibiotiques intravitréens le jour même, ± vitrectomie." },
      { s: "Jour 1 post-trabéculectomie : PIO 4 mmHg, chambre étroite sans contact cristallin–cornée, Seidel négatif.", u: "rapide", why: "Surfiltration ou effusion : fond d’œil, atropine, surveillance rapprochée ; reformer si contact cristallin–cornée." },
      { s: "Semaine 1 post-trabéculectomie : PIO 30 mmHg, chambre profonde, bulle plate.", u: "rapide", why: "Haute + profonde : gonioscopie, puis massage, lyse de sutures au laser ou retrait d’une suture relâchable." }
    ],
    cues: [
      "Ruisseau vert vif sur la bulle",
      "Bulle blanc laiteux, œil rouge, hypopyon",
      "PIO 4, chambre étroite, jour 1"
    ]
  }
});
