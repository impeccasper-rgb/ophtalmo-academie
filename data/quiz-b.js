var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// Module B — Cornée : 36 QCM (B-001 à B-036)
G.OPH.quiz = (G.OPH.quiz || []).concat([
  { id: "B-001", module: "B", topic: "c-secheresse", type: "diagnostic", level: 1, trap: false,
    stem: "Femme de 58 ans, brûlure oculaire et vision qui fluctue à l’écran; score OSDI-6 de 7. Selon TFOS DEWS III (2025), lequel de ces résultats suffit, à lui seul, pour confirmer une sécheresse oculaire (dry eye disease)?",
    figure: null,
    options: [
      "Schirmer I sans anesthésie à 8 mm en 5 minutes",
      "Osmolarité de 302 mOsm/L à l’OD et de 298 mOsm/L à l’OS",
      "Temps de rupture non invasif (NIBUT) de 6 secondes",
      "Quatre points de fluorescéine sur la cornée"
    ],
    answer: 2,
    explain: "DEWS III : des symptômes (OSDI-6 ≥ 4) et un seul signe. Le NIBUT sous 10 s en est un. Ici, l’osmolarité (sous 308) et la coloration (5 points ou moins) restent sous les seuils ; le Schirmer n’est pas un critère.",
    deep: "**Ce que c’est** : selon TFOS DEWS III, la sécheresse oculaire est une maladie **symptomatique** où le film lacrymal perd son équilibre (instabilité, hyperosmolarité, inflammation). **Pourquoi c’est important** : le diagnostic exige des symptômes (OSDI-6 ≥ 4) **et un seul signe** parmi : NIBUT < 10 s, osmolarité ≥ 308 mOsm/L dans un œil ou écart > 8 mOsm/L entre les yeux, > 5 points de fluorescéine cornéens, > 9 points conjonctivaux au vert de lissamine (colorant des cellules abîmées) ou coloration du bord palpébral. **Quoi faire** : ici, le NIBUT de 6 s confirme le diagnostic; on cherche ensuite les moteurs (glandes de Meibomius, déficit aqueux, gouttes toxiques).",
    why: [
      "Le Schirmer (bandelette de papier glissée sous la paupière qui mesure les larmes produites en 5 minutes) ne fait pas partie des signes de DEWS III; moins de 5 mm signerait un déficit aqueux sévère.",
      "L’osmolarité mesure la concentration des larmes : il faut ≥ 308 mOsm/L dans un œil ou un écart > 8 mOsm/L entre les yeux; ici, les deux valeurs sont sous le seuil et l’écart n’est que de 4.",
      "Exact : un NIBUT (temps avant que le film se brise, mesuré sans colorant) < 10 s suffit chez une patiente symptomatique.",
      "La fluorescéine colore les cellules de surface abîmées; le seuil est de plus de 5 points cornéens, donc 4 points ne suffisent pas."
    ] },
  { id: "B-002", module: "B", topic: "c-secheresse", type: "image", level: 2, trap: false,
    stem: "Femme de 71 ans, blépharoplastie supérieure il y a 6 mois, sensation de sable surtout au réveil. Ce schéma à la fluorescéine sous lumière bleu cobalt montre la distribution des lésions épithéliales de sa cornée. Quel mécanisme explique le mieux cette distribution?",
    figure: { type: "fluo", pattern: "spk-inferior" },
    options: [
      "Exposition nocturne par fermeture incomplète des paupières (lagophtalmie)",
      "Kératoconjonctivite limbique supérieure associée à une dysthyroïdie",
      "Déficit aqueux sévère d’un syndrome de Sjögren débutant",
      "Corps étranger logé sous la paupière supérieure qui frotte la cornée"
    ],
    answer: 0,
    explain: "La distribution des points oriente vers la cause. Tiers inférieur et symptômes au réveil, après une blépharoplastie : la paupière ferme mal la nuit (lagophtalmie) et la cornée inférieure s’assèche.",
    deep: "**Ce que c’est** : la kératite ponctuée superficielle (superficial punctate keratitis) est faite de petits points d’épithélium abîmé qui prennent la fluorescéine; ici, ils occupent le tiers inférieur. **Pourquoi c’est important** : la topographie des points oriente vers la cause (inférieure = dysfonction meibomienne, exposition ou toxicité des gouttes; interpalpébrale = déficit aqueux; supérieure = lentilles ou kératoconjonctivite limbique supérieure), et des symptômes pires au réveil après une blépharoplastie (chirurgie esthétique des paupières) pointent vers une lagophtalmie, des paupières qui ne ferment plus complètement la nuit. **Quoi faire** : onguent lubrifiant au coucher, larmes sans agent de conservation le jour, et évaluer la fermeture palpébrale (correction si sévère).",
    why: [
      "Exact : atteinte inférieure et symptômes au réveil concordent avec la lagophtalmie.",
      "La kératoconjonctivite limbique supérieure (inflammation de la conjonctive du haut de l’œil, souvent liée à la thyroïde) colore la partie **supérieure**.",
      "Le syndrome de Sjögren (maladie auto-immune qui assèche les glandes lacrymales et salivaires) donne un déficit aqueux avec coloration surtout **interpalpébrale** et des symptômes pires en fin de journée, sans lien avec la chirurgie.",
      "Un corps étranger collé sous la paupière supérieure laisse des stries **verticales** dans la moitié supérieure de la cornée, à chaque clignement."
    ] },
  { id: "B-003", module: "B", topic: "c-secheresse", type: "cat", level: 1, trap: false,
    stem: "Homme de 52 ans avec rosacée oculaire : yeux qui brûlent, bords palpébraux épaissis, orifices meibomiens bouchés et sécrétions en pâte dentifrice ; quelques points de fluorescéine dans le tiers inférieur de la cornée. Que proposes-tu en première ligne ?",
    figure: null,
    options: [
      "Bouchons méatiques d’emblée, pour garder les larmes sur l’œil",
      "Larmes avec agent de conservation (BAK), 8 fois par jour",
      "Cortisone topique au long cours pour calmer les paupières",
      "Compresses chaudes et larmes sans agent de conservation"
    ],
    answer: 3,
    explain: "Dysfonction meibomienne : l’huile est figée dans les glandes. La chaleur la fluidifie ; les larmes sans agent de conservation soulagent la surface. Un agent de conservation plus de 4 fois par jour est toxique pour l’épithélium.",
    why: [
      "Les bouchons sont une étape de l’ophtalmologiste, pas la première ligne ; on traite d’abord les paupières.",
      "Plus de 4 fois par jour, un agent de conservation comme le BAK abîme la surface oculaire.",
      "Un stéroïde prolongé expose à la cataracte et à une hausse de la PIO ; ce n’est pas un traitement de fond.",
      "Exact : chaleur pour les glandes, larmes sans agent de conservation pour la surface."
    ] },
  { id: "B-004", module: "B", topic: "c-bacterienne", type: "image", level: 1, trap: false,
    stem: "Homme de 24 ans, porteur de lentilles souples qu’il garde la nuit, douleur et photophobie depuis 2 jours; AV 6/30. Infiltrat blanc de 3 mm situé à 2 mm du centre, réaction de chambre antérieure 2+. Ce schéma à la fluorescéine sous lumière bleu cobalt montre l’aspect de la lésion. Quelle est la conduite appropriée?",
    figure: { type: "fluo", pattern: "ulcer" },
    options: [
      "Moxifloxacine 0,5 % quatre fois par jour, arrêt des lentilles et revoir dans une semaine",
      "Grattage pour frottis et cultures, puis gouttes fortifiées en alternance aux heures",
      "Tobramycine-dexaméthasone d’emblée pour limiter la cicatrice",
      "Retrait des lentilles, larmes artificielles sans agent de conservation, revoir au besoin"
    ],
    answer: 1,
    explain: "Règle 1-2-3 : réaction de chambre ≥ 1+, infiltrat ≥ 2 mm, à ≤ 3 mm du centre. Ici, tout est rempli : on gratte (frottis, cultures), puis gouttes fortifiées en alternance aux heures.",
    deep: "**Ce que c’est** : un infiltrat blanc avec ulcère qui prend la fluorescéine et réaction de chambre antérieure chez un porteur de lentilles est une kératite bactérienne (bacterial keratitis) jusqu’à preuve du contraire. **Pourquoi c’est important** : la règle **1-2-3** (réaction ≥ 1+, infiltrat ≥ 2 mm, à ≤ 3 mm du centre) repère l’ulcère qui menace la vision, et elle est remplie ici. **Quoi faire** : grattage pour frottis et cultures (avec lentilles et étui), puis gouttes fortifiées (antibiotiques concentrés préparés sur mesure) : vancomycine 25 mg/mL ou céfazoline 50 mg/mL contre les gram positifs et tobramycine 14 mg/mL contre les gram négatifs, dont Pseudomonas (bactérie agressive typique des porteurs de lentilles), en alternance aux heures, jour et nuit, pendant 24 à 48 h, avec suivi quotidien.",
    why: [
      "La moxifloxacine (antibiotique de la famille des fluoroquinolones) est utile, mais 4 fois par jour et un suivi à une semaine sont insuffisants pour cet ulcère.",
      "Exact : la règle 1-2-3 est remplie.",
      "La tobramycine-dexaméthasone associe un antibiotique et une cortisone; la cortisone d’emblée, avant le contrôle de l’infection, est à éviter (essai SCUT, étude randomisée sur la cortisone dans la kératite bactérienne : pas de bénéfice global).",
      "Retirer les lentilles est nécessaire, mais un infiltrat avec réaction de chambre antérieure exige un antibiotique intensif, pas seulement des larmes."
    ] },
  { id: "B-005", module: "B", topic: "c-bacterienne", type: "cat", level: 1, trap: false,
    stem: "Tu accompagnes un patron en clinique externe, hors centre hospitalier. Un homme de 60 ans a un ulcère central de 4 mm avec hypopyon. Quelle est la meilleure conduite?",
    figure: null,
    options: [
      "Prélever si possible, débuter la moxifloxacine aux heures et diriger le jour même vers un centre",
      "Prescrire vancomycine et tobramycine fortifiées à la pharmacie du quartier et revoir le patient dans une semaine",
      "Ne donner aucun antibiotique avant le résultat des cultures, pour ne pas fausser l’identification du germe",
      "Débuter une cortisone topique en attendant une place en centre, afin de limiter la fonte stromale"
    ],
    answer: 0,
    explain: "Ulcère central avec hypopyon : kératite sévère. On traite tout de suite (moxifloxacine aux heures) et on envoie le jour même vers un centre : les gouttes fortifiées viennent des pharmacies d’hôpital.",
    deep: "**Ce que c’est** : un ulcère central avec hypopyon (dépôt de globules blancs au bas de la chambre antérieure) est une kératite bactérienne sévère. **Pourquoi c’est important** : elle exige des gouttes fortifiées (antibiotiques concentrés préparés sur mesure) et un suivi quotidien; au Québec, ces gouttes viennent des pharmacies hospitalières, d’où le transfert vers l’urgence ophtalmologique d’un centre (CHUM, HMR, CUSM, Hôpital général juif, CHU de Québec…). **Quoi faire** : prélever si possible, débuter sans attendre une fluoroquinolone de 4e génération (antibiotique à large spectre, comme la moxifloxacine 0,5 %) aux heures, avec dose de charge (une goutte aux 5–15 min la 1re heure), et diriger le jour même.",
    why: [
      "Exact : traitement immédiat et transfert le jour même vers un centre qui prépare les fortifiés.",
      "Les gouttes fortifiées se préparent en pharmacie hospitalière, et un suivi à une semaine est dangereux pour un ulcère sévère.",
      "On prélève avant de traiter, mais on ne retarde jamais l’antibiotique en attendant les cultures : l’ulcère peut progresser et perforer.",
      "La cortisone topique, avant le contrôle de l’infection, peut aggraver la fonte (destruction du stroma); l’essai SCUT, une étude randomisée sur la cortisone dans la kératite bactérienne, ne montre pas de bénéfice global."
    ] },
  { id: "B-006", module: "B", topic: "c-bacterienne", type: "physiopathologie", level: 2, trap: false,
    stem: "Homme de 23 ans qui dort avec ses lentilles souples et rince l’étui à l’eau du robinet; ulcère avec sécrétions mucopurulentes qui s’étend rapidement, 36 h après le début de la douleur. Pourquoi le port de lentilles la nuit mène-t-il à ce type de kératite, souvent due à Pseudomonas aeruginosa?",
    figure: null,
    options: [
      "La lentille baisse la sensibilité cornéenne, ce qui retarde la consultation jusqu’à la perforation",
      "Une allergie aux solutions détruit la couche de Bowman, ce qui expose le stroma aux bactéries",
      "Les bactéries arrivent par la circulation sanguine et se fixent dans le stroma avasculaire",
      "L’hypoxie fissure l’épithélium, où adhèrent les bactéries du biofilm de la lentille et de l’étui"
    ],
    answer: 3,
    explain: "La nuit, la lentille prive la cornée d’oxygène : l’épithélium se fissure et les bactéries du biofilm de la lentille et de l’étui s’y fixent. Pseudomonas digère ensuite le stroma en quelques heures.",
    deep: "**Ce que c’est** : la nuit, la lentille réduit l’oxygène qui atteint la cornée; l’épithélium hypoxique s’amincit et se fissure, et les bactéries du biofilm (couche gluante de microbes sur la lentille et l’étui) y adhèrent. **Pourquoi c’est important** : Pseudomonas sécrète des protéases (enzymes qui digèrent les protéines) qui détruisent le stroma, de sorte que l’ulcère peut s’étendre très vite, parfois jusqu’à la perforation. **Quoi faire** : cultures (lentilles et étui compris), antibiotique intensif couvrant Pseudomonas (fortifiés ou fluoroquinolone aux heures), et enseignement : jamais d’eau du robinet, ne pas dormir avec ses lentilles.",
    why: [
      "Les lentilles peuvent réduire un peu la sensibilité, mais le mécanisme principal est l’hypoxie avec adhérence bactérienne.",
      "Les réactions aux solutions donnent plutôt une kératite toxique ou une conjonctivite papillaire géante (grosses papilles sous la paupière), pas une destruction de Bowman.",
      "La kératite bactérienne vient de la surface, pas du sang : la cornée est avasculaire.",
      "Exact : hypoxie, brèche épithéliale et biofilm."
    ] },
  { id: "B-007", module: "B", topic: "c-bacterienne", type: "cat", level: 3, trap: false,
    stem: "Homme de 50 ans, kératite bactérienne centrale à culture positive, en amélioration sous moxifloxacine 0,5 % après 72 h. Un collègue propose d’ajouter du difluprednate (cortisone topique puissante) et une réticulation du collagène cornéen (corneal cross-linking, CXL) pour réduire la cicatrice. Que montrent les essais SCUT et SCUT II?",
    figure: null,
    options: [
      "SCUT : net bénéfice global de la cortisone topique sur l’AV finale, pour tous les ulcères",
      "SCUT II : la CXL ajoutée a nettement réduit la taille de la cicatrice à 12 mois",
      "SCUT II : aucun bénéfice du difluprednate, avec ou sans CXL, sur l’AV ou la cicatrice",
      "SCUT : cortisone particulièrement utile quand le germe isolé est Nocardia"
    ],
    answer: 2,
    explain: "SCUT II : ajouter du difluprednate, avec ou sans CXL, à la moxifloxacine n’a amélioré ni l’acuité ni la cicatrice. SCUT : pas de bénéfice global de la cortisone ; à éviter si Nocardia.",
    deep: "**Ce que c’est** : SCUT (2012) et SCUT II (2026) sont des essais randomisés qui ont testé, dans la kératite bactérienne, l’ajout d’une cortisone topique à l’antibiotique, et dans SCUT II l’ajout d’une CXL (riboflavine activée par les UVA qui rigidifie le collagène). **Pourquoi c’est important** : SCUT II n’a montré **aucun bénéfice** du difluprednate 0,05 %, seul ou avec CXL, sur l’AV et la cicatrice à 6 et 12 mois (analyse possiblement sous-puissante à 12 mois), et SCUT n’avait pas montré de bénéfice global, sauf peut-être pour un ulcère central sévère traité tôt. **Quoi faire** : l’antibiotique reste le traitement; une cortisone ne se discute qu’une fois l’infection contrôlée, et jamais si Nocardia.",
    why: [
      "SCUT n’a pas montré de bénéfice global; un effet possible se limitait aux ulcères centraux sévères traités tôt.",
      "Dans SCUT II, la CXL ajoutée n’a ni réduit la cicatrice ni amélioré l’AV.",
      "Exact : résultat principal de SCUT II.",
      "C’est l’inverse : Nocardia (bactérie filamenteuse rare, souvent après un traumatisme souillé de terre) est justement le cas où SCUT déconseille la cortisone."
    ] },
  { id: "B-008", module: "B", topic: "c-atypiques", type: "cat", level: 2, trap: true,
    stem: "Femme de 29 ans, lentilles souples rincées à l’eau du robinet, se baigne avec ses lentilles. Douleur intense depuis 3 semaines malgré un antiviral topique prescrit pour une « kératite herpétique ». Lampe à fente : épithélium irrégulier discret et infiltrats linéaires le long des nerfs cornéens; la douleur paraît hors de proportion avec l’examen. Quelle est la conduite la plus appropriée maintenant?",
    figure: null,
    options: [
      "Ajouter de l’acyclovir oral et revoir dans une semaine",
      "Grattage pour culture et PCR, puis biguanide en préparation magistrale",
      "Fluoroquinolone aux heures et pansement compressif pour 24 h",
      "Anesthésique topique pour la douleur, puis larmes artificielles aux heures"
    ],
    answer: 1,
    explain: "Lentilles et eau, douleur hors de proportion, infiltrats le long des nerfs : Acanthamoeba, souvent prise pour un herpès. On gratte (culture, PCR), puis biguanide en préparation magistrale.",
    deep: "**Ce que c’est** : Acanthamoeba est une amibe de l’eau (robinet, piscine, lac) qui infecte la cornée surtout chez les porteurs de lentilles; des infiltrats le long des nerfs (kératonévrite ou périnévrite radiaire, radial keratoneuritis) sont typiques. **Pourquoi c’est important** : une douleur **hors de proportion** avec l’examen est le signal d’alarme, et le diagnostic est souvent retardé parce qu’on la prend d’abord pour un herpès. **Quoi faire** : grattage pour culture et PCR (test qui détecte l’ADN du germe), ± microscopie confocale (microscope qui montre les kystes dans la cornée sans biopsie), biguanides (antiseptiques comme le PHMB ou la chlorhexidine) en préparation magistrale, et ne jamais prescrire d’anesthésique topique pour la douleur.",
    why: [
      "Les infiltrats le long des nerfs et la douleur disproportionnée chez une porteuse de lentilles orientent vers l’amibe, pas vers un herpès résistant.",
      "Exact : lentilles + eau, douleur disproportionnée et kératonévrite radiaire = Acanthamoeba; prélever puis débuter un biguanide.",
      "Le pansement est contre-indiqué chez une porteuse de lentilles, et la fluoroquinolone ne traite pas l’amibe.",
      "Jamais d’anesthésique topique à domicile : il retarde la guérison et peut mener à la perforation."
    ] },
  { id: "B-009", module: "B", topic: "c-atypiques", type: "cat", level: 2, trap: false,
    stem: "Agriculteur de 54 ans de la Montérégie, égratigné à l’œil par une branche il y a 10 jours. Une clinique sans rendez-vous lui a prescrit de la tobramycine-dexaméthasone (antibiotique et cortisone). Infiltrat grisâtre à bords plumeux (feathery edges) entouré de petites lésions satellites. Quelle est la conduite la plus appropriée?",
    figure: null,
    options: [
      "Poursuivre la cortisone pour limiter la cicatrice et ajouter du voriconazole oral",
      "Remplacer par du voriconazole 1 % topique, supérieur à la natamycine pour Fusarium",
      "Doubler la fréquence de la tobramycine-dexaméthasone et revoir dans une semaine",
      "Cesser la cortisone, gratter pour cultures fongiques et débuter la natamycine 5 %"
    ],
    answer: 3,
    explain: "Traumatisme végétal, bords plumeux, lésions satellites : kératite fongique. La cortisone laisse le champignon pénétrer : on la cesse, on gratte, puis natamycine 5 % (supérieure au voriconazole pour Fusarium, essai MUTT I).",
    deep: "**Ce que c’est** : un traumatisme végétal suivi d’un infiltrat à bords plumeux avec lésions satellites évoque une kératite fongique filamenteuse (fungal keratitis), souvent à Fusarium. **Pourquoi c’est important** : la cortisone affaiblit la défense immunitaire locale et laisse le champignon pousser plus profondément; il faut la **cesser**. **Quoi faire** : grattage pour frottis et cultures fongiques, puis natamycine 5 % (antifongique topique), qui a fait mieux que le voriconazole 1 % dans l’essai randomisé MUTT I, surtout pour Fusarium; MUTT II n’a montré aucun bénéfice du voriconazole oral ajouté.",
    why: [
      "La cortisone aggrave la kératite fongique, et le voriconazole oral (antifongique de la famille des azolés) ajouté n’a pas montré de bénéfice dans MUTT II.",
      "MUTT I a montré l’inverse : la natamycine fait mieux que le voriconazole topique, surtout pour Fusarium.",
      "Augmenter la cortisone accélère la progression du champignon et retarde le bon traitement.",
      "Exact : arrêt de la cortisone, prélèvements, puis natamycine."
    ] },
  { id: "B-010", module: "B", topic: "c-atypiques", type: "cat", level: 3, trap: false,
    stem: "La PCR d’un grattage cornéen confirme une kératite à Acanthamoeba chez une porteuse de lentilles de 31 ans. Quel traitement topique de première intention est approprié, et comment l’obtient-on habituellement au Canada?",
    figure: null,
    options: [
      "Biguanide (PHMB 0,02 % ou chlorhexidine 0,02 %), ± propamidine, en préparation magistrale",
      "Natamycine 5 % commerciale aux heures, l’antifongique de référence en kératite atypique",
      "Moxifloxacine 0,5 % aux heures, puisque l’amibe est sensible aux fluoroquinolones",
      "Acyclovir oral 400 mg 5 fois par jour pendant 10 jours, puis dose préventive"
    ],
    answer: 0,
    explain: "Les biguanides (PHMB ou chlorhexidine 0,02 %) tuent l’amibe et ses kystes. Au Canada, ils sont faits en pharmacie, en préparation magistrale, parfois avec de la propamidine.",
    deep: "**Ce que c’est** : les biguanides (PHMB, ou polyhexaméthylène biguanide, et chlorhexidine) sont des antiseptiques qui tuent la forme active de l’amibe et ses kystes, une forme dormante très résistante. **Pourquoi c’est important** : au Canada, ils sont faits en pharmacie (préparations magistrales), parfois avec de la propamidine (autre antiseptique actif contre l’amibe); le polihexanide 0,08 % (Akantior) a été approuvé par la Commission européenne en 2024 en monothérapie. **Quoi faire** : traitement intensif puis prolongé, souvent sur plusieurs mois, avec suivi rapproché en centre de cornée et contrôle de la douleur sans anesthésique topique.",
    why: [
      "Exact : biguanide en préparation magistrale, ± propamidine.",
      "La natamycine est un antifongique, utile contre les champignons filamenteux; elle ne traite pas l’amibe.",
      "Les fluoroquinolones sont des antibiotiques; elles ne tuent pas Acanthamoeba, encore moins ses kystes.",
      "L’acyclovir est un antiviral contre l’herpès; c’est souvent le traitement donné à tort quand on confond Acanthamoeba avec l’HSV."
    ] },
  { id: "B-011", module: "B", topic: "c-herpes", type: "image", level: 1, trap: false,
    stem: "Homme de 45 ans, œil rouge, larmoiement et vision un peu brouillée depuis 3 jours; il fait souvent des feux sauvages. Ce schéma à la fluorescéine sous lumière bleu cobalt montre sa lésion épithéliale. Un médecin de l’urgence lui a prescrit de la prednisolone en gouttes. Quelle est la conduite appropriée?",
    figure: { type: "fluo", pattern: "dendrite" },
    options: [
      "Poursuivre la prednisolone et ajouter un antiviral oral pour bloquer la réplication",
      "Cesser la prednisolone; acyclovir 400 mg PO 5×/j ou valacyclovir 500 mg PO TID",
      "Moxifloxacine aux heures, car une ulcération linéaire signe d’abord une bactérie",
      "Larmes artificielles seules et revoir dans un mois, car la lésion guérit d’elle-même"
    ],
    answer: 1,
    explain: "Dendrite avec bulbes terminaux : kératite épithéliale à HSV, le virus se réplique. La cortisone seule l’aggrave (ulcère géographique). On la cesse et on donne un antiviral oral à dose de traitement.",
    deep: "**Ce que c’est** : la dendrite est un ulcère épithélial ramifié, avec des renflements au bout des branches (bulbes terminaux, terminal bulbs), qui prend la fluorescéine; c’est la kératite épithéliale à HSV (herpes simplex virus), donc une réplication virale active. **Pourquoi c’est important** : la cortisone stimule la réplication et peut transformer la dendrite en ulcère géographique (large ulcère aux bords festonnés), d’où le danger de la prednisolone ici. **Quoi faire** : cesser la cortisone et donner un antiviral 7 à 10 jours (acyclovir 400 mg PO 5×/j ou valacyclovir 500 mg PO TID; ou trifluridine 1 % en gouttes 9×/j, toxique pour l’épithélium si prolongée), ± débridement (retrait doux de l’épithélium infecté), puis vérifier la sensibilité cornéenne, souvent diminuée après des récidives.",
    why: [
      "La cortisone est contre-indiquée dans l’atteinte épithéliale active : même avec un antiviral, elle favorise l’ulcère géographique.",
      "Exact : arrêt de la cortisone et antiviral à dose de traitement, 7 à 10 jours.",
      "Une ulcération ramifiée avec bulbes terminaux est virale; un antibiotique comme la moxifloxacine ne traite pas l’HSV.",
      "Certaines dendrites guérissent seules, mais l’antiviral accélère la guérison et limite l’extension; on traite dès le diagnostic."
    ] },
  { id: "B-012", module: "B", topic: "c-herpes", type: "image", level: 2, trap: true,
    stem: "Femme de 74 ans, éruption vésiculaire douloureuse du front et du bout du nez depuis 2 jours. Ce schéma à la fluorescéine sous lumière bleu cobalt montre sa lésion épithéliale. Quelle interprétation et quelle conduite sont exactes?",
    figure: { type: "fluo", pattern: "pseudodendrite" },
    options: [
      "Dendrite à HSV : trifluridine topique seule, sans antiviral oral",
      "Pseudodendrite du zona : acyclovir 400 mg PO 5 fois par jour × 7 jours",
      "Pseudodendrite du zona : valacyclovir 1 g TID × 7 jours d’emblée",
      "Kératite amibienne : biguanide en préparation magistrale aux heures"
    ],
    answer: 2,
    explain: "Vésicules du front et du bout du nez : zona ophtalmique. Sa pseudodendrite est une plaque surélevée, sans bulbes terminaux, qui prend peu la fluorescéine. Le zona exige une dose plus forte que l’HSV : valacyclovir 1 g TID.",
    deep: "**Ce que c’est** : le zona ophtalmique (herpes zoster ophthalmicus) est la réactivation du virus varicelle-zona dans V1; sa pseudodendrite est une plaque surélevée de cellules gonflées, sans ulcération ni bulbes terminaux, qui prend peu la fluorescéine. **Pourquoi c’est important** : des vésicules au bout du nez (signe de Hutchinson, territoire du nerf nasociliaire qui innerve aussi l’œil) annoncent une atteinte oculaire, et confondre la pseudodendrite avec une dendrite à HSV mène au mauvais traitement. **Quoi faire** : valacyclovir 1 g TID × 7 jours (ou acyclovir 800 mg 5×/j, le double de la dose de l’herpès simplex), idéalement dans les 72 h et ajusté à la fonction rénale, examen complet (kératite, uvéite ou inflammation intraoculaire, PIO) et rappel du vaccin recombinant (Shingrix), recommandé dès 50 ans par le CCNI (Comité consultatif national de l’immunisation).",
    why: [
      "La dendrite à HSV est ulcérée, avec bulbes terminaux, et prend bien la fluorescéine; ici, l’éruption et l’aspect de la lésion pointent vers le zona.",
      "Le diagnostic est juste, mais 400 mg 5 fois par jour est la dose de l’herpès simplex; le zona exige une dose plus forte (acyclovir 800 mg 5×/j ou valacyclovir 1 g TID).",
      "Exact : pseudodendrite du zona, antiviral oral à forte dose.",
      "La kératite amibienne (infection par une amibe de l’eau, traitée par des antiseptiques comme les biguanides) survient surtout chez le porteur de lentilles exposé à l’eau, sans éruption cutanée."
    ] },
  { id: "B-013", module: "B", topic: "c-herpes", type: "physiopathologie", level: 2, trap: false,
    stem: "Femme de 41 ans, antécédent de kératite herpétique épithéliale. Depuis une semaine, vision brouillée : opacité blanchâtre du stroma avec œdème, épithélium intact (aucune prise de fluorescéine), sans ulcère. Pourquoi traite-t-on cette atteinte avec une cortisone topique, alors qu’on l’évite dans la dendrite?",
    figure: null,
    options: [
      "Surtout une réaction immunitaire contre des antigènes viraux, sans réplication active notable",
      "Le virus se réplique surtout dans le stroma, et la cortisone le détruit directement à cet endroit",
      "La cortisone remplace l’antiviral, devenu inutile une fois que l’épithélium est bien fermé",
      "La cortisone régénère les nerfs cornéens détruits par les récidives herpétiques antérieures"
    ],
    answer: 0,
    explain: "La dendrite est une infection active de l’épithélium. La kératite stromale à épithélium intact est surtout une réaction immunitaire : la cortisone topique la calme, toujours sous couverture antivirale.",
    deep: "**Ce que c’est** : la kératite stromale immune (immune stromal keratitis) à HSV est une inflammation du stroma déclenchée par des antigènes viraux restés dans la cornée, alors que la dendrite est une infection active de l’épithélium. **Pourquoi c’est important** : l’essai HEDS (Herpetic Eye Disease Study) a montré que la cortisone topique, donnée avec un antiviral, accélère la résolution de l’atteinte stromale; sans antiviral, elle peut réveiller une infection épithéliale. **Quoi faire** : acétate de prednisolone 1 % avec diminution lente, sous couverture antivirale orale (par exemple acyclovir 400 mg BID ou valacyclovir 500 mg DIE), et surveiller la PIO, car la cortisone peut faire monter la pression de l’œil.",
    why: [
      "Exact : mécanisme immunitaire, d’où la cortisone, toujours avec un antiviral.",
      "La cortisone ne tue pas le virus; elle calme l’inflammation et peut même favoriser la réplication si on omet l’antiviral.",
      "On garde un antiviral oral pendant toute la cortisone : sans lui, une récidive épithéliale (dendrite) peut survenir.",
      "La cortisone ne régénère pas les nerfs; la perte de sensibilité après des récidives mène plutôt à la kératopathie neurotrophique (cornée insensible qui cicatrise mal)."
    ] },
  { id: "B-014", module: "B", topic: "c-herpes", type: "cat", level: 3, trap: false,
    stem: "Homme de 66 ans, zona ophtalmique (herpes zoster ophthalmicus) avec kératite, traité par valacyclovir 1 g TID pendant 7 jours. Il demande s’il doit continuer un antiviral à long terme. Que montre l’essai ZEDS (Zoster Eye Disease Study, 2025)?",
    figure: null,
    options: [
      "Bénéfice significatif dès 12 mois sur le critère principal, avec valacyclovir 1 g TID",
      "Critère principal non significatif à 12 mois, mais moins de maladie oculaire à 18 mois",
      "Aucun effet sur les poussées ni sur la douleur neuropathique, d’où l’abandon de la suppression",
      "Acyclovir 400 mg BID pendant 12 mois réduit d’environ 45 % les récidives de zona oculaire"
    ],
    answer: 1,
    explain: "ZEDS : valacyclovir 1 g par jour pendant 1 an après un zona ophtalmique. Critère principal non significatif à 12 mois, mais moins de maladie oculaire nouvelle ou aggravée à 18 mois. Décision individualisée.",
    deep: "**Ce que c’est** : ZEDS a comparé le valacyclovir **1 g par jour pendant 1 an** à un placebo après un zona ophtalmique. **Pourquoi c’est important** : le critère principal à 12 mois n’était pas significatif (HR 0,77; p = 0,09), mais à 18 mois il y avait 27 % moins de maladie oculaire nouvelle ou aggravée (HR 0,73; p = 0,03), moins de poussées multiples et moins de médicaments contre la douleur neuropathique (douleur des nerfs qui persiste après le zona). **Quoi faire** : les auteurs recommandent d’ajouter cette suppression; on l’individualise selon la fonction rénale et l’observance.",
    why: [
      "Le critère principal à 12 mois n’a pas atteint la signification (p = 0,09), et la dose étudiée était 1 g une fois par jour, pas TID.",
      "Exact : résultats de ZEDS à 12 et à 18 mois.",
      "C’est l’inverse : moins de poussées multiples et moins de médicaments contre la douleur neuropathique dans le groupe valacyclovir.",
      "Ce chiffre vient de HEDS (Herpetic Eye Disease Study) et concerne l’herpès simplex (HSV), pas le zona."
    ] },
  { id: "B-015", module: "B", topic: "c-keratocone", type: "image", level: 1, trap: false,
    stem: "Adolescent de 16 ans, eczéma et allergies saisonnières, qui se frotte souvent les yeux et ne porte pas de lentilles. Sa myopie et son astigmatisme augmentent à chaque visite et son AV corrigée baisse. Ce schéma de topographie montre sa carte de courbure axiale. Quelle est la meilleure prochaine étape?",
    figure: { type: "topo", pattern: "kc-inferior" },
    options: [
      "Lentilles rigides et suivi annuel, sans autre examen ni carte",
      "LASIK pour corriger la myopie et l’astigmatisme",
      "Antihistaminique topique seul et revoir dans un an",
      "Tomographie et orientation rapide vers un crosslinking"
    ],
    answer: 3,
    explain: "Cambrure inférieure et nœud papillon asymétrique chez un jeune atopique qui se frotte les yeux : kératocône qui progresse. On confirme par tomographie et on oriente vite vers la réticulation (CXL).",
    deep: "**Ce que c’est** : le kératocône est un amincissement progressif de la cornée qui se bombe en cône, habituellement sous le centre; sur la carte de courbure axiale (couleurs chaudes = zone plus cambrée), on voit une cambrure inférieure avec un nœud papillon asymétrique aux axes déviés. **Pourquoi c’est important** : jeune âge, frottement des yeux, atopie et astigmatisme croissant avec perte d’AV corrigée sont typiques, et un diagnostic précoce permet de stabiliser la cornée avant une perte visuelle importante. **Quoi faire** : tomographie (Scheimpflug : élévations antérieure et postérieure, carte pachymétrique, point le plus mince), arrêt du frottement et orientation sans délai vers la réticulation du collagène (CXL).",
    why: [
      "Les lentilles améliorent la vision mais n’arrêtent pas la progression; un jeune qui progresse a besoin d’une tomographie et d’un CXL.",
      "La chirurgie réfractive est contre-indiquée : elle aggrave l’ectasie.",
      "Traiter l’allergie aide à cesser le frottement, mais ne suffit pas devant une progression.",
      "Exact : jeune atopique, cambrure inférieure qui progresse : tomographie et crosslinking sans délai."
    ] },
  { id: "B-016", module: "B", topic: "c-keratocone", type: "cat", level: 2, trap: true,
    stem: "Garçon de 14 ans, kératocône nouvellement diagnostiqué à l’OD (topographie et tomographie typiques), AV corrigée 6/9. Sa mère préfère attendre : « Il va d’abord arrêter de se frotter les yeux, puis on verra dans un an s’il progresse. » Selon le 2e consensus mondial sur le kératocône (2025), quelle est la meilleure recommandation?",
    figure: null,
    options: [
      "Attendre 6 à 12 mois pour documenter la progression avant toute réticulation",
      "Prescrire des suppléments de vitamine D et réévaluer à la visite annuelle",
      "Proposer la réticulation (CXL) dès maintenant, tout en cessant le frottement",
      "Faire une CXL epi-on prophylactique de l’œil gauche, même sans kératocône"
    ],
    answer: 2,
    explain: "Chez l’enfant, le kératocône progresse vite. Le 2e consensus mondial (2025) recommande la réticulation dès le diagnostic, sans attendre une progression documentée. Cesser le frottement reste nécessaire, mais ne remplace pas la CXL.",
    deep: "**Ce que c’est** : la réticulation du collagène (corneal cross-linking, CXL) combine riboflavine et rayons UVA pour créer des liens entre les fibres de collagène et rigidifier la cornée, ce qui freine la progression. **Pourquoi c’est important** : chez l’enfant, le kératocône progresse souvent vite; le 2e consensus mondial (2025) recommande la CXL **dès le diagnostic, sans attendre une progression documentée**, et précise qu’il faut cesser de se frotter les yeux sans **jamais retarder la CXL** pour autant. **Quoi faire** : diriger vers un centre qui offre la CXL (protocole de Dresde 3 mW/cm² × 30 min ou accéléré 9 mW/cm² × 10 min); au Québec, l’accès et la couverture publique varient et doivent être vérifiés localement.",
    why: [
      "Attendre la progression est justement l’approche à éviter chez l’enfant : le consensus de 2025 recommande la CXL dès le diagnostic.",
      "Les suppléments (vitamine D, etc.) ne sont qu’un appoint selon le consensus; ils ne remplacent ni ne retardent la CXL.",
      "Exact : CXL sans délai, et arrêt du frottement en parallèle.",
      "Le consensus déconseille la CXL epi-on (faite sans retirer l’épithélium) prophylactique sans progression, encore plus sur un œil sans kératocône."
    ] },
  { id: "B-017", module: "B", topic: "c-keratocone", type: "anatomie", level: 1, trap: false,
    stem: "Femme de 27 ans avec kératocône. À la lampe à fente, en lumière bleu cobalt, un anneau brun-vert entoure partiellement la base du cône. Que représente cet anneau et où se trouve-t-il?",
    figure: null,
    options: [
      "Du cuivre déposé dans la membrane de Descemet en périphérie",
      "Du fer déposé dans les couches basales de l’épithélium",
      "Des plis du stroma postérieur qui s’effacent à la pression",
      "Une cicatrice de la couche de Bowman après un hydrops"
    ],
    answer: 1,
    explain: "L’anneau de Fleischer est un dépôt de fer dans l’épithélium basal, à la base du cône, mieux vu en lumière bleu cobalt. À ne pas confondre avec l’anneau de Kayser-Fleischer : cuivre dans la Descemet, près du limbe.",
    deep: "**Ce que c’est** : l’anneau de Fleischer est un dépôt de **fer** dans l’épithélium basal, autour de la base du cône, mieux vu en lumière bleu cobalt. **Pourquoi c’est important** : c’est un signe classique du kératocône à la lampe à fente, avec les stries de Vogt (fines lignes verticales du stroma postérieur qui disparaissent quand on appuie doucement sur l’œil); à l’extérieur, on cherche le signe de Munson (paupière inférieure en V au regard vers le bas) et le signe de Rizzuti (reflet lumineux conique près du limbe nasal quand on éclaire du côté temporal). **Quoi faire** : documenter ces signes, puis confirmer et suivre la maladie par topographie et tomographie.",
    why: [
      "Le cuivre dans la Descemet périphérique forme l’anneau de Kayser-Fleischer de la maladie de Wilson (maladie génétique où le cuivre s’accumule dans le foie et le cerveau).",
      "Exact : anneau de Fleischer, fer dans l’épithélium basal.",
      "Ce sont les stries de Vogt, autre signe du kératocône; ce sont des lignes, pas un anneau coloré.",
      "Les cicatrices de Bowman sont des opacités blanchâtres; l’hydrops aigu (rupture de la Descemet) laisse plutôt une cicatrice stromale centrale."
    ] },
  { id: "B-018", module: "B", topic: "c-keratocone", type: "physiopathologie", level: 2, trap: false,
    stem: "Homme de 23 ans avec kératocône avancé et syndrome de Down, qui se frotte beaucoup les yeux. Brusquement, baisse de vision et larmoiement à l’OD : opacité laiteuse et épaississement de la cornée centrale, sans infiltrat ni sécrétions, chambre antérieure de profondeur normale. Quel mécanisme explique ce tableau?",
    figure: null,
    options: [
      "Une déchirure de la Descemet laisse l’humeur aqueuse imbiber le stroma",
      "Une infection bactérienne profonde fait fondre le stroma au sommet du cône",
      "Une perforation complète laisse l’humeur aqueuse s’écouler hors de l’œil",
      "Une dystrophie de Fuchs associée décompense brutalement l’endothélium central"
    ],
    answer: 0,
    explain: "Hydrops aigu : la Descemet étirée se déchire et l’aqueuse imbibe le stroma, qui blanchit en quelques heures. Ce n’est ni une infection ni une perforation : pas d’infiltrat, chambre de profondeur normale.",
    deep: "**Ce que c’est** : l’hydrops aigu (acute corneal hydrops) survient quand la membrane de Descemet, étirée au sommet du cône, se déchire; l’humeur aqueuse entre dans le stroma, qui gonfle et blanchit en quelques heures. **Pourquoi c’est important** : c’est spectaculaire, mais ce n’est pas une perforation (le test de Seidel, où la fluorescéine concentrée révèle une fuite d’humeur aqueuse, est négatif), et l’œdème régresse habituellement en quelques semaines à quelques mois en laissant une cicatrice. **Quoi faire** : traitement conservateur (solution salée hypertonique 5 %, cycloplégique contre la douleur, ± cortisone topique, protection contre le frottement), injection de gaz dans la chambre antérieure à discuter en centre pour accélérer la résorption, puis lentille ou greffe selon la cicatrice.",
    why: [
      "Exact : rupture de la Descemet et imbibition du stroma (hydrops).",
      "Une infection donnerait un infiltrat, une réaction de chambre antérieure et souvent des sécrétions, absents ici.",
      "Une perforation donnerait une chambre antérieure étroite et un Seidel positif (fuite visible à la fluorescéine); dans l’hydrops, la cornée reste étanche.",
      "La dystrophie de Fuchs (perte progressive des cellules endothéliales, surtout après 50 ans) donne un œdème graduel avec guttae, pas une opacité brutale chez un jeune."
    ] },
  { id: "B-019", module: "B", topic: "c-fuchs", type: "image", level: 1, trap: false,
    stem: "Femme de 67 ans, sans chirurgie oculaire antérieure, vision brouillée avec halos au réveil qui s’éclaircit en fin de journée; sa mère a eu une greffe de cornée. Ce schéma en coupe de la cornée montre ce que l’on voit dans ses couches profondes à la lampe à fente. Quel traitement proposer en premier?",
    figure: { type: "cornea", highlight: ["descemet","endothelium"], edema: "stromal", guttae: true, scar: false },
    options: [
      "Prednisolone 1 % 4×/j pendant un mois entier",
      "Greffe transfixiante (PK) d’emblée",
      "NaCl 5 %, puis DMEK si la gêne persiste",
      "Lentille rigide pour lisser la surface"
    ],
    answer: 2,
    explain: "Guttae, œdème pire au réveil, mère greffée : dystrophie de Fuchs. On commence par le NaCl 5 %, qui retire de l’eau de la cornée ; quand la vision gêne, la greffe endothéliale (DMEK) remplace la couche malade.",
    deep: "**Ce que c’est** : la dystrophie de Fuchs est une maladie héréditaire où l’endothélium (monocouche de cellules qui pompe l’eau hors de la cornée) se raréfie et dépose sur la Descemet des excroissances, les guttae, qui apparaissent comme des gouttelettes sombres. **Pourquoi c’est important** : quand il reste trop peu de cellules (en général moins de 400–500 cellules/mm²), la pompe ne suffit plus et le stroma gonfle, surtout au réveil; la microscopie spéculaire montre les guttae comme des zones noires et la pachymétrie suit l’épaississement. **Quoi faire** : solution salée hypertonique 5 % au début, puis greffe endothéliale (DMEK, qui remplace seulement la Descemet et l’endothélium) quand la vision devient limitante.",
    why: [
      "Il n’y a pas d’inflammation : un stéroïde n’aide pas la pompe endothéliale et expose à une PIO élevée.",
      "La PK est réservée aux cicatrices du stroma; la greffe endothéliale (DMEK) rend une meilleure vision plus vite.",
      "Exact : guttae et œdème pires au réveil (Fuchs) : NaCl 5 % d’abord, DMEK quand la vision devient limitante.",
      "Une lentille rigide ne corrige pas un œdème endothélial et est mal tolérée sur une cornée œdémateuse."
    ] },
  { id: "B-020", module: "B", topic: "c-fuchs", type: "physiopathologie", level: 2, trap: false,
    stem: "Une patiente atteinte de dystrophie de Fuchs demande pourquoi sa vision est plus brouillée au réveil et s’améliore au cours de l’après-midi. Quelle explication est exacte?",
    figure: null,
    options: [
      "La nuit, la pression intraoculaire monte et pousse l’eau dans la cornée",
      "La nuit, les guttae se gonflent d’eau puis se vident pendant la journée",
      "Le jour, la lumière stimule les pompes endothéliales qui se reposent la nuit",
      "Paupières fermées, les larmes ne s’évaporent plus : la cornée garde plus d’eau"
    ],
    answer: 3,
    explain: "Le jour, l’évaporation des larmes attire l’eau hors de la cornée. Paupières fermées, elle cesse : une pompe endothéliale déjà faible ne suffit plus. L’œdème est maximal au réveil, puis diminue.",
    deep: "**Ce que c’est** : la cornée reste claire grâce à la pompe endothéliale (Na⁺/K⁺-ATPase) et à l’évaporation du film lacrymal, qui rend les larmes légèrement hypertoniques et attire l’eau hors de la cornée. **Pourquoi c’est important** : paupières fermées la nuit, l’évaporation cesse; une pompe déjà déficiente ne suffit plus, si bien que l’œdème est maximal au réveil puis diminue à mesure que le film s’évapore. **Quoi faire** : solution salée hypertonique (NaCl 5 %) en gouttes ou en onguent, ou air tiède d’un séchoir tenu à bout de bras le matin; des symptômes matinaux qui durent de plus en plus longtemps orientent vers la greffe endothéliale.",
    why: [
      "La PIO varie un peu la nuit, mais ce n’est pas la cause de l’œdème matinal de Fuchs (une PIO très élevée peut toutefois aggraver un œdème).",
      "Les guttae sont des excroissances de la Descemet; elles ne se remplissent pas d’eau.",
      "La pompe endothéliale fonctionne jour et nuit; ce qui change, c’est l’évaporation du film.",
      "Exact : sans évaporation la nuit, l’œdème s’accumule."
    ] },
  { id: "B-021", module: "B", topic: "c-fuchs", type: "cat", level: 3, trap: true,
    stem: "Homme de 70 ans avec dystrophie de Fuchs symptomatique (œdème matinal) et cataracte. On planifie une chirurgie combinée : phacoémulsification et DMEK (greffe endothéliale de la membrane de Descemet). Comment choisir la cible réfractive de la lentille intraoculaire?",
    figure: null,
    options: [
      "Viser l’emmétropie, car la DMEK ne modifie pas la réfraction",
      "Viser une légère myopie, car la DMEK induit un déplacement hypermétropique",
      "Viser une légère hypermétropie, car la DMEK rend la cornée plus cambrée",
      "Viser une forte myopie, pour lire sans lunettes après la greffe"
    ],
    answer: 1,
    explain: "Après une DMEK, la cornée désenflée déplace la réfraction vers l’hypermétropie. On vise donc une légère myopie avec l’implant, pour finir près de l’emmétropie.",
    deep: "**Ce que c’est** : après une DMEK, la cornée désenflée change surtout la courbure de sa face postérieure, ce qui produit un déplacement hypermétropique (hyperopic shift) de la réfraction. **Pourquoi c’est important** : viser l’emmétropie laisse souvent le patient légèrement hypermétrope et insatisfait; de plus, la kératométrie mesurée sur une cornée œdémateuse est moins fiable. **Quoi faire** : viser une légère myopie lors d’une chirurgie combinée, selon la cible habituelle de l’équipe de cornée du centre.",
    why: [
      "Piège : la DMEK modifie la réfraction, avec un déplacement hypermétropique.",
      "Exact : cible légèrement myopique pour compenser le déplacement hypermétropique.",
      "Le déplacement attendu est hypermétropique; viser l’hypermétropie l’aggraverait.",
      "Une forte myopie volontaire créerait une anisométropie (grande différence de réfraction entre les deux yeux, mal tolérée); ce n’est pas la stratégie standard."
    ] },
  { id: "B-022", module: "B", topic: "c-erosion", type: "image", level: 1, trap: true,
    stem: "Homme de 32 ans, porteur de lentilles souples, douleur et larmoiement depuis ce matin après avoir dormi avec ses lentilles. Pas d’infiltrat ni de réaction de chambre antérieure. Ce schéma à la fluorescéine sous lumière bleu cobalt montre la lésion. Quelle conduite est la plus appropriée?",
    figure: { type: "fluo", pattern: "abrasion" },
    options: [
      "Fluoroquinolone topique sans pansement, arrêt des lentilles et revoir dans 24 h",
      "Pansement occlusif 24 h avec onguent antibiotique, puis reprise des lentilles",
      "Tétracaïne prescrite pour la douleur et larmes artificielles au besoin",
      "Tobramycine-dexaméthasone quatre fois par jour pour calmer l’inflammation"
    ],
    answer: 0,
    explain: "Chez un porteur de lentilles, une abrasion est une porte d’entrée pour Pseudomonas. Pas de pansement occlusif, qui favorise l’infection : fluoroquinolone topique, arrêt des lentilles et contrôle en 24 h.",
    deep: "**Ce que c’est** : une abrasion cornéenne (corneal abrasion) est une perte d’épithélium qui prend la fluorescéine; chez un porteur de lentilles, c’est une porte d’entrée pour Pseudomonas, bactérie qui peut détruire la cornée en 24 à 48 h. **Pourquoi c’est important** : un pansement occlusif crée un milieu chaud, humide et pauvre en oxygène qui favorise cette infection, et un anesthésique topique utilisé à répétition bloque la guérison épithéliale et peut faire fondre la cornée. **Quoi faire** : fluoroquinolone topique (couvre Pseudomonas), **jamais de pansement**, aucune lentille jusqu’à guérison complète, analgésie orale ± cycloplégique (goutte qui relâche le muscle ciliaire et soulage la douleur), et revoir dans 24 h.",
    why: [
      "Exact : couverture contre Pseudomonas, pas de pansement, suivi en 24 h.",
      "Piège classique : le pansement favorise l’infection à Pseudomonas chez le porteur de lentilles, et la reprise des lentilles doit attendre la guérison.",
      "On ne prescrit jamais d’anesthésique topique (tétracaïne) : l’usage répété retarde la cicatrisation et peut mener à une kératopathie toxique grave.",
      "La cortisone ralentit la cicatrisation et favorise l’infection; une abrasion n’en a pas besoin."
    ] },
  { id: "B-023", module: "B", topic: "c-erosion", type: "cat", level: 1, trap: false,
    stem: "Femme de 35 ans réveillée plusieurs fois ce mois-ci par une douleur aiguë à l’ouverture des yeux, avec larmoiement pendant quelques heures. Il y a 4 mois, son bébé lui a égratigné la cornée avec un ongle. Ce matin : petite zone d’épithélium irrégulier qui prend la fluorescéine dans le tiers inférieur. Quelle prévention proposer après l’épisode aigu?",
    figure: null,
    options: [
      "Acyclovir oral 400 mg 2×/j pendant un an",
      "Bouchons méatiques et larmes sans agent de conservation",
      "Anesthésique topique à garder à la maison pour les crises",
      "Onguent NaCl 5 % au coucher pendant 3 à 6 mois"
    ],
    answer: 3,
    explain: "Douleur au réveil, des mois après une égratignure d’ongle : érosion récidivante. La nuit, la paupière colle à un épithélium mal ancré et l’arrache. L’onguent hypertonique au coucher, 3 à 6 mois, laisse l’ancrage se refaire.",
    deep: "**Ce que c’est** : dans l’érosion cornéenne récidivante (recurrent corneal erosion), l’épithélium adhère mal à sa membrane basale après un traumatisme tranchant (ongle, papier, branche) ou une dystrophie de la membrane basale; la nuit, la paupière colle à l’épithélium et l’arrache à l’ouverture des yeux. **Pourquoi c’est important** : l’histoire typique (douleur au réveil, égratignure par un ongle des semaines ou des mois avant) fait le diagnostic, même si l’examen est presque normal plus tard dans la journée. **Quoi faire** : onguent lubrifiant au coucher pendant plusieurs mois (souvent hypertonique, NaCl 5 %), traiter l’épisode aigu comme une abrasion, puis, si les récidives persistent, lentille pansement, ponction stromale antérieure, débridement ou photokératectomie thérapeutique (PTK, laser qui lisse la surface).",
    why: [
      "L’acyclovir prévient l’herpès; ici, c’est l’ancrage de l’épithélium qui est en cause.",
      "Les bouchons traitent un manque d’eau; ils ne règlent pas l’arrachement au réveil.",
      "Jamais d’anesthésique à domicile : l’abus bloque la guérison et peut causer ulcère et perforation.",
      "Exact : érosion récidivante après une égratignure d’ongle : l’onguent hypertonique au coucher évite que la paupière arrache l’épithélium."
    ] },
  { id: "B-024", module: "B", topic: "c-erosion", type: "image", level: 2, trap: true,
    stem: "Femme de 66 ans adressée pour une chirurgie de cataracte; la kératométrie varie d’une mesure à l’autre et la topographie montre un astigmatisme irrégulier. Ce schéma à la fluorescéine sous lumière bleu cobalt montre l’aspect de sa surface cornéenne. Que faire avant la biométrie définitive?",
    figure: { type: "fluo", pattern: "negative" },
    options: [
      "Prendre la biométrie actuelle et implanter une lentille torique pour l’astigmatisme",
      "Prescrire une cortisone topique deux semaines pour lisser l’épithélium",
      "Traiter la surface (kératectomie superficielle), puis remesurer une fois stable",
      "Abandonner la phacoémulsification au profit d’une greffe de cornée transfixiante"
    ],
    answer: 2,
    explain: "Des zones sombres qui ne retiennent pas la fluorescéine (coloration négative) signent une dystrophie de la membrane basale. Cette surface irrégulière fausse la kératométrie : on traite la surface, puis on remesure.",
    deep: "**Ce que c’est** : la dystrophie de la membrane basale épithéliale (epithelial basement membrane dystrophy, EBMD, ou map-dot-fingerprint) soulève l’épithélium par endroits; ces zones surélevées ne retiennent pas la fluorescéine et paraissent sombres (coloration négative, negative staining). **Pourquoi c’est important** : cette surface irrégulière fausse la kératométrie et la topographie, donc le calcul de la puissance et de l’axe de la lentille, surtout torique, avec un risque de surprise réfractive. **Quoi faire** : traiter d’abord la surface (débridement ou kératectomie superficielle ± PTK), attendre quelques semaines la stabilisation, puis refaire biométrie et topographie avant de choisir la lentille.",
    why: [
      "Piège : sur une surface irrégulière, l’astigmatisme mesuré est faux, et une lentille torique serait mal calculée et mal orientée.",
      "La cortisone ne corrige pas une membrane basale anormale; c’est le retrait de l’épithélium anormal qui régularise la surface.",
      "Exact : la surface d’abord, les mesures ensuite.",
      "La greffe transfixiante (remplacement de toute l’épaisseur de la cornée) est disproportionnée pour une atteinte superficielle qui se traite simplement."
    ] },
  { id: "B-025", module: "B", topic: "c-pterygion", type: "cat", level: 1, trap: false,
    stem: "Homme de 48 ans, pêcheur aux Îles-de-la-Madeleine, avec une lésion charnue triangulaire de la conjonctive nasale dont la pointe s’avance de 2 mm sur la cornée. Il demande s’il doit être opéré. Quelle réponse est la plus juste?",
    figure: null,
    options: [
      "Oui, tout de suite : exérèse simple en laissant la sclère nue",
      "Pas encore : protection UV; opérer s’il approche l’axe visuel",
      "Non : ces lésions régressent seules après 50 ans",
      "Oui : chimiothérapie topique, comme pour une néoplasie"
    ],
    answer: 1,
    explain: "Ptérygion de 2 mm, loin de l’axe visuel : protection contre les UV, larmes et suivi. On opère s’il approche l’axe, induit un astigmatisme ou gêne ; l’exérèse simple à sclère nue récidive souvent.",
    deep: "**Ce que c’est** : le ptérygion est une prolifération fibrovasculaire triangulaire de la conjonctive, presque toujours nasale, qui **franchit le limbe** et avance sur la cornée; il est lié aux ultraviolets (travail à l’extérieur, réflexion sur l’eau). **Pourquoi c’est important** : il peut induire un astigmatisme et menacer l’axe visuel, alors que la pinguécula (petite élévation jaunâtre de la conjonctive, de même cause) reste sur la conjonctive. **Quoi faire** : protection UV (lunettes de soleil, chapeau), larmes artificielles si irritation, et chirurgie s’il avance vers l’axe visuel, induit un astigmatisme, limite les mouvements de l’œil ou gêne beaucoup.",
    why: [
      "La sclère nue récidive souvent, et une pointe de 2 mm sans gêne ne justifie pas encore la chirurgie.",
      "Exact : ptérygion de 2 mm sans atteinte de l’axe : protection UV, larmes et suivi; exérèse avec autogreffe s’il progresse, induit un astigmatisme ou gêne.",
      "Le ptérygion peut progresser, surtout si l’exposition aux UV continue.",
      "La chimiothérapie topique traite une néoplasie de surface (OSSN), pas un ptérygion typique."
    ] },
  { id: "B-026", module: "B", topic: "c-pterygion", type: "cat", level: 2, trap: false,
    stem: "Femme de 52 ans avec un ptérygion nasal qui avance de 4 mm sur la cornée, approche l’axe visuel et induit un astigmatisme croissant. Quelle technique chirurgicale réduit le mieux le risque de récidive?",
    figure: null,
    options: [
      "Exérèse en laissant la sclère à nu (bare sclera), sans autre geste",
      "Photokératectomie thérapeutique au laser sur la tête du ptérygion",
      "Cautérisation des vaisseaux nourriciers sans exérèse de la lésion",
      "Exérèse avec autogreffe de conjonctive saine, collée ou suturée"
    ],
    answer: 3,
    explain: "L’exérèse simple, sclère à nu, récidive souvent. Recouvrir la sclère d’une autogreffe de conjonctive saine, collée ou suturée, est la technique qui réduit le mieux ce risque.",
    deep: "**Ce que c’est** : l’autogreffe conjonctivale consiste à recouvrir la sclère dénudée avec un lambeau de conjonctive saine prélevé chez le patient, habituellement en supérieur. **Pourquoi c’est important** : l’exérèse seule avec sclère à nu récidive souvent, parfois de façon plus agressive que la lésion initiale; l’autogreffe, ± mitomycine C (médicament qui freine la cicatrisation fibreuse), réduit nettement ce risque. **Quoi faire** : opérer quand le ptérygion menace l’axe visuel, induit un astigmatisme ou gêne beaucoup, puis protéger contre les UV et traiter l’inflammation postopératoire.",
    why: [
      "La sclère à nu seule récidive souvent; on ne la fait plus sans greffe ni adjuvant.",
      "La PTK (laser qui lisse la surface de la cornée) ne retire pas le tissu fibrovasculaire de la conjonctive et ne prévient pas la récidive.",
      "Cautériser les vaisseaux sans exciser la lésion ne la fait pas régresser et ne corrige pas l’astigmatisme.",
      "Exact : exérèse avec autogreffe conjonctivale."
    ] },
  { id: "B-027", module: "B", topic: "c-pterygion", type: "diagnostic", level: 3, trap: false,
    stem: "Homme de 63 ans, greffé rénal sous immunosuppresseurs, avec une lésion du limbe temporal gélatineuse, blanchâtre en surface, parcourue de gros vaisseaux nourriciers, qui a grossi en 3 mois. Quelle conduite est la plus appropriée?",
    figure: null,
    options: [
      "Suspecter une néoplasie de surface (OSSN) : OCT haute résolution et biopsie en centre",
      "Ptérygion atypique : larmes artificielles et revoir dans un an pour juger de la croissance",
      "Pinguéculite : cortisone topique en cure courte, puis protection contre les ultraviolets",
      "Conjonctivite virale nodulaire : compresses froides et larmes, résolution en 2 semaines"
    ],
    answer: 0,
    explain: "Lésion gélatineuse du limbe, vaisseaux nourriciers, croissance rapide, patient immunosupprimé : néoplasie de la surface oculaire (OSSN) jusqu’à preuve du contraire. Il faut une confirmation en centre, pas une surveillance.",
    deep: "**Ce que c’est** : la néoplasie squameuse de la surface oculaire (ocular surface squamous neoplasia, OSSN) regroupe la dysplasie et le carcinome de l’épithélium de la conjonctive et de la cornée; elle est gélatineuse, papillomateuse ou blanchâtre (leucoplasie), avec des vaisseaux nourriciers. **Pourquoi c’est important** : une localisation atypique (temporale ou hors de la fente palpébrale), une croissance rapide et une immunosuppression (greffe, VIH) sont des drapeaux rouges qui la distinguent du ptérygion. **Quoi faire** : orienter en centre de cornée pour une OCT de surface haute résolution (épithélium épaissi et hyperréflectif) et une confirmation par biopsie ou exérèse complète avec cryothérapie, ou une chimiothérapie en gouttes selon le cas.",
    why: [
      "Exact : drapeaux rouges d’OSSN, il faut une confirmation tissulaire.",
      "Un ptérygion est nasal et triangulaire dans la fente palpébrale; attendre un an devant ces drapeaux rouges retarde le diagnostic d’un cancer.",
      "La pinguéculite (inflammation d’une pinguécula) est une petite élévation jaunâtre qui ne grossit pas vite; la cortisone masquerait une tumeur.",
      "Une conjonctivite virale donne un œil rouge diffus avec écoulement, pas une masse vascularisée du limbe qui grossit sur 3 mois."
    ] },
  { id: "B-028", module: "B", topic: "c-greffe", type: "image", level: 1, trap: false,
    stem: "Homme de 44 ans, greffe transfixiante (penetrating keratoplasty, PK) pour kératocône il y a 3 ans; il a cessé ses gouttes de cortisone il y a 2 mois. Depuis 2 jours : rougeur, photophobie et vision plus floue. Ce schéma à la lampe à fente montre ce que l’on voit sur la face postérieure de la greffe. Quelle est la conduite?",
    figure: { type: "slit", pattern: "kp" },
    options: [
      "Larmes artificielles et revoir au rendez-vous habituel dans 3 mois",
      "Antiviral oral seul, car toute rougeur après une greffe est herpétique",
      "Cortisone topique intensive (prednisolone 1 % aux heures) le jour même",
      "Nouvelle greffe transfixiante en urgence avant la fin de la semaine"
    ],
    answer: 2,
    explain: "Précipités kératiques sur une greffe, après l’arrêt des gouttes : rejet endothélial. Chaque épisode détruit des cellules qui ne se régénèrent pas. Cortisone topique intensive le jour même.",
    deep: "**Ce que c’est** : le rejet endothélial (endothelial rejection) est une attaque immunitaire contre l’endothélium du donneur; il se manifeste par des précipités kératiques (amas de globules blancs collés sur l’endothélium), parfois alignés en ligne de Khodadoust, et par un œdème de la greffe. **Pourquoi c’est important** : chaque épisode détruit des cellules endothéliales qui ne se régénèrent pas, et un rejet traité tard mène à l’échec de la greffe; les symptômes **RSVP** (Rougeur, Sensibilité à la lumière, Vision diminuée, Pain ou douleur) exigent une consultation le jour même. **Quoi faire** : acétate de prednisolone 1 % aux heures ± cortisone périoculaire ou orale selon la sévérité, contrôle de la PIO, puis diminution très lente; on rappelle au patient de ne jamais cesser ses gouttes sans avis.",
    why: [
      "Un rejet non traité détruit l’endothélium du greffon; les symptômes RSVP exigent un traitement le jour même.",
      "L’herpès peut causer une rougeur après une greffe, surtout si elle a été faite pour une kératite herpétique; ici, des précipités kératiques après l’arrêt de la cortisone orientent vers un rejet.",
      "Exact : rejet endothélial, cortisone intensive le jour même.",
      "Un rejet pris tôt répond souvent à la cortisone; on ne regreffe que si la greffe reste décompensée malgré le traitement."
    ] },
  { id: "B-029", module: "B", topic: "c-greffe", type: "anatomie", level: 1, trap: false,
    stem: "Pendant une DMEK (Descemet membrane endothelial keratoplasty) pour dystrophie de Fuchs, le chirurgien déroule dans la chambre antérieure un greffon qui s’enroule spontanément comme un rouleau. Quelles couches ce greffon contient-il?",
    figure: null,
    options: [
      "Toute l’épaisseur de la cornée, de l’épithélium à l’endothélium",
      "L’épithélium, la couche de Bowman et le stroma antérieur",
      "Le stroma postérieur, la membrane de Descemet et l’endothélium",
      "Seulement la membrane de Descemet et l’endothélium"
    ],
    answer: 3,
    explain: "La DMEK ne greffe que la membrane de Descemet et l’endothélium ; la Descemet, élastique, s’enroule. La DSAEK ajoute une mince couche de stroma ; la greffe transfixiante remplace toute l’épaisseur.",
    deep: "**Ce que c’est** : la DMEK remplace uniquement la membrane de Descemet (10–15 µm chez l’adulte, élastique, d’où le rouleau) et l’endothélium malade; la DSAEK (Descemet stripping automated endothelial keratoplasty) y ajoute une mince couche de stroma postérieur, et la PK remplace toute l’épaisseur. **Pourquoi c’est important** : moins on greffe de tissu, plus la récupération visuelle est rapide et plus le risque de rejet est bas (ordre PK > DSAEK > DMEK), au prix d’une chirurgie plus délicate. **Quoi faire** : après une DMEK, le patient reste couché sur le dos pour que la bulle d’air ou de gaz plaque le greffon contre le stroma, et on surveille un décollement qui peut exiger une nouvelle injection d’air (rebubbling).",
    why: [
      "Toute l’épaisseur correspond à la greffe transfixiante (PK).",
      "Ces couches antérieures correspondent à une greffe lamellaire antérieure, utilisée quand l’endothélium est sain.",
      "Le stroma postérieur en plus correspond à la DSAEK, dont le greffon plus épais ne s’enroule pas.",
      "Exact : Descemet et endothélium seulement."
    ] },
  { id: "B-030", module: "B", topic: "c-greffe", type: "diagnostic", level: 3, trap: false,
    stem: "Femme de 72 ans, DMEK pour Fuchs il y a 7 jours. La cornée s’est éclaircie en haut, mais un œdème stromal persiste dans le tiers inférieur; la bulle d’air s’est résorbée. Pas de précipités kératiques ni de réaction inflammatoire importante. L’OCT du segment antérieur montre un espace liquide entre le greffon et le stroma en inférieur. Quel est le diagnostic et la suite?",
    figure: null,
    options: [
      "Rejet endothélial précoce : prednisolone 1 % aux heures et revoir dans une semaine",
      "Décollement partiel du greffon : nouvelle injection d’air ou de gaz (rebubbling)",
      "Échec primaire du greffon : nouvelle DMEK immédiate avec un autre donneur",
      "Kératite herpétique réactivée : valacyclovir oral et arrêt de la cortisone"
    ],
    answer: 1,
    explain: "Œdème localisé, œil calme et espace liquide sous le greffon à l’OCT : décollement partiel, la complication précoce la plus fréquente de la DMEK. On réinjecte une bulle d’air ou de gaz pour le recoller.",
    deep: "**Ce que c’est** : après une DMEK, le greffon tient au stroma grâce à la bulle d’air ou de gaz des premiers jours; s’il se décolle en partie, la zone non accolée n’a plus de pompe endothéliale et reste œdémateuse, et l’OCT du segment antérieur (imagerie en coupe de l’avant de l’œil) montre l’espace entre greffon et stroma. **Pourquoi c’est important** : c’est la complication la plus fréquente de la DMEK; un petit décollement peut se recoller seul, mais un décollement étendu ou qui progresse compromet le greffon. **Quoi faire** : nouvelle injection d’air ou de gaz dans la chambre antérieure (rebubbling), position couchée sur le dos, puis vérifier l’accolement; un rejet, lui, donnerait des précipités kératiques.",
    why: [
      "Le rejet est rare la première semaine et donnerait des précipités kératiques avec inflammation; l’OCT montre ici une cause mécanique.",
      "Exact : décollement partiel, on recolle le greffon avec une bulle.",
      "L’échec primaire (greffon qui ne s’éclaircit jamais) donne un œdème diffus dès le départ; ici, la cornée s’éclaircit là où le greffon est accolé.",
      "Une kératite herpétique donnerait une dendrite ou une inflammation, absentes ici, et l’arrêt de la cortisone exposerait au rejet."
    ] },
  { id: "B-031", module: "B", topic: "c-brulure", type: "cat", level: 1, trap: true,
    stem: "Ouvrier de 38 ans qui a reçu du mortier frais (chaux) dans l’œil droit sur un chantier il y a 15 minutes; il arrive à l’urgence en se tenant l’œil. Quelle est la première action?",
    figure: null,
    options: [
      "Instiller un anesthésique et irriguer immédiatement jusqu’à un pH de 7,0–7,5",
      "Mesurer l’AV de chaque œil avant de toucher à l’œil, pour le dossier médicolégal",
      "Neutraliser l’alcali avec une solution acide pour revenir plus vite au pH neutre",
      "Faire l’examen complet à la lampe à fente pour coter la sévérité avant de traiter"
    ],
    answer: 0,
    explain: "Brûlure chimique : l’irrigation passe avant tout, même avant l’acuité. Le produit pénètre tant qu’il reste sur l’œil. On irrigue jusqu’à un pH de 7,0–7,5 et on ne neutralise jamais avec un acide.",
    deep: "**Ce que c’est** : une brûlure chimique, surtout par un alcali comme la chaux du mortier ou du béton, est l’urgence où chaque minute compte, car le produit continue de pénétrer tant qu’il reste sur l’œil. **Pourquoi c’est important** : l’irrigation passe avant tout, y compris avant l’AV et l’examen, et on ne neutralise jamais avec un acide (la réaction dégage de la chaleur et aggrave la brûlure). **Quoi faire** : anesthésique topique, irrigation abondante (au moins 30 minutes ou plusieurs litres) avec éversion des paupières et retrait des particules, jusqu’à un pH de 7,0–7,5 recontrôlé 5–10 minutes après l’arrêt; ensuite seulement l’AV, l’examen et la cotation, sans oublier les documents CNESST pour un accident de travail.",
    why: [
      "Exact : irriguer d’abord, mesurer ensuite.",
      "Piège classique : l’AV peut attendre; chaque minute sans irrigation laisse le produit pénétrer plus loin.",
      "On ne neutralise jamais avec un acide : la réaction dégage de la chaleur et ajoute une brûlure; on irrigue avec une solution neutre.",
      "La cotation se fait après l’irrigation; examiner d’abord retarde le geste qui sauve l’œil."
    ] },
  { id: "B-032", module: "B", topic: "c-brulure", type: "physiopathologie", level: 2, trap: false,
    stem: "Deux travailleurs consultent pour une brûlure chimique : l’un a reçu de l’acide sulfurique (batterie d’auto), l’autre de l’hydroxyde de sodium (nettoyant à four). Pourquoi la brûlure par l’alcali est-elle habituellement plus grave?",
    figure: null,
    options: [
      "L’alcali est toujours plus concentré que les acides vendus au grand public",
      "L’alcali coagule les protéines de surface, ce qui retient le produit dans l’épithélium",
      "L’alcali saponifie les lipides des membranes et pénètre rapidement en profondeur",
      "L’alcali dégage une forte chaleur au contact des larmes, qui brûle surtout l’épithélium"
    ],
    answer: 2,
    explain: "L’alcali saponifie les lipides des membranes et traverse la cornée jusqu’à la chambre antérieure. L’acide coagule les protéines de surface, ce qui forme une barrière et limite sa pénétration.",
    deep: "**Ce que c’est** : l’alcali dissout les lipides des membranes cellulaires (saponification) et cause une nécrose de liquéfaction qui le laisse traverser la cornée jusqu’à la chambre antérieure, l’iris, le cristallin et le trabéculum. **Pourquoi c’est important** : l’acide, lui, coagule les protéines de surface, ce qui forme une barrière qui limite sa pénétration (exception : l’acide fluorhydrique, qui pénètre comme un alcali); l’alcali menace donc davantage le limbe, la transparence et la PIO. **Quoi faire** : même conduite immédiate pour tous les produits (irrigation jusqu’au pH neutre), mais on anticipe avec l’alcali une ischémie limbique, une hausse de PIO et une fonte stromale.",
    why: [
      "La gravité vient du mécanisme d’action, pas seulement de la concentration : à concentration égale, l’alcali pénètre plus.",
      "C’est le mécanisme de l’acide : la coagulation des protéines forme une barrière qui limite la pénétration.",
      "Exact : saponification et nécrose de liquéfaction.",
      "La chaleur n’est pas le mécanisme principal; c’est la destruction chimique des membranes qui permet la pénétration profonde."
    ] },
  { id: "B-033", module: "B", topic: "c-brulure", type: "anatomie", level: 2, trap: false,
    stem: "Après 40 minutes d’irrigation, le pH d’un œil brûlé par un alcali est à 7,2. Vous notez une zone blanche et sans vaisseaux au limbe sur 4 heures d’horloge. Pourquoi cette ischémie limbique est-elle le facteur pronostique clé?",
    figure: null,
    options: [
      "Le limbe contient les glandes qui produisent la couche lipidique des larmes",
      "Le limbe contient l’endothélium, seule couche qui pompe l’eau hors de la cornée",
      "Le limbe contient les cellules caliciformes qui sécrètent le mucus des larmes",
      "Le limbe abrite les cellules souches qui renouvellent l’épithélium cornéen"
    ],
    answer: 3,
    explain: "Un limbe blanc, sans vaisseaux, est ischémique : ses cellules souches sont menacées. Sans elles, l’épithélium cornéen ne se renouvelle plus. Plus l’ischémie est étendue, plus le pronostic est mauvais.",
    deep: "**Ce que c’est** : les cellules souches de l’épithélium cornéen vivent au limbe, dans les palissades de Vogt; une zone blanche sans vaisseaux signifie que ce limbe est ischémique et que ses cellules souches sont menacées. **Pourquoi c’est important** : plus l’ischémie limbique est étendue (classifications de Roper-Hall et de Dua), plus le risque d’insuffisance en cellules souches limbiques (limbal stem cell deficiency) est élevé : la conjonctive envahit alors la cornée, qui devient vascularisée et opaque, avec un défaut épithélial persistant. **Quoi faire** : cortisone topique intensive ≤ 10–14 jours puis sevrage rapide (risque de fonte), ascorbate oral 1–2 g/j, doxycycline 100 mg BID, cycloplégique, antibiotique topique sans agent de conservation, et membrane amniotique précoce dès le grade II.",
    why: [
      "Les glandes de Meibomius, qui produisent la couche lipidique, sont dans les paupières, pas au limbe.",
      "L’endothélium tapisse la face postérieure de toute la cornée; il n’est pas propre au limbe.",
      "Les cellules caliciformes (cellules du mucus) sont dans la conjonctive, surtout dans les culs-de-sac; leur perte aggrave la sécheresse après une brûlure, mais ne fait pas le pronostic cornéen.",
      "Exact : cellules souches limbiques des palissades de Vogt."
    ] },
  { id: "B-034", module: "B", topic: "c-bonus", type: "cat", level: 2, trap: false,
    stem: "Homme de 69 ans, zona ophtalmique il y a un an. Défaut épithélial central aux bords lisses et enroulés depuis 4 semaines, sans infiltrat, malgré des larmes sans agent de conservation; la sensibilité cornéenne est abolie. Quelle option est appropriée à ce stade?",
    figure: null,
    options: [
      "Cénégermine 0,002 % (Oxervate), 1 goutte 6 fois par jour aux 2 h pendant 8 semaines",
      "Tétracaïne en gouttes au besoin pour soulager l’inconfort pendant la cicatrisation",
      "Prednisolone 1 % aux heures pour accélérer la fermeture du défaut épithélial",
      "Moxifloxacine aux heures jour et nuit, puis gouttes fortifiées si aucune réponse"
    ],
    answer: 0,
    explain: "Sensibilité abolie et défaut épithélial persistant aux bords enroulés : kératopathie neurotrophique modérée. La cénégermine est approuvée à ce stade. Jamais d’anesthésique topique répété : il empêche la cicatrisation.",
    deep: "**Ce que c’est** : la kératopathie neurotrophique (neurotrophic keratopathy) survient quand les nerfs cornéens (V1) sont détruits, par exemple après un zona ou un herpès; sans ces nerfs, l’épithélium cicatrise mal, d’où un défaut épithélial persistant aux bords lisses et enroulés (stade modéré), qui peut évoluer vers un ulcère, une fonte et une perforation (stade sévère). **Pourquoi c’est important** : la cénégermine (Oxervate, facteur de croissance nerveux humain recombinant) est approuvée par Santé Canada pour la forme **modérée ou sévère chez l’adulte**, à raison de 1 goutte 6 fois par jour aux 2 h pendant 8 semaines. **Quoi faire** : cesser les gouttes toxiques, lubrifier sans agent de conservation, discuter de la cénégermine avec l’équipe de cornée, et envisager une membrane amniotique ou une tarsorraphie (fermeture partielle des paupières) si le défaut persiste.",
    why: [
      "Exact : indication approuvée (défaut épithélial persistant, forme modérée) et posologie.",
      "Un anesthésique topique répété est toxique pour l’épithélium et aggraverait le défaut; ce patient n’a d’ailleurs plus de sensibilité.",
      "La cortisone intensive ralentit la cicatrisation épithéliale et augmente le risque de fonte; elle ne traite pas la kératopathie neurotrophique.",
      "Sans infiltrat, il n’y a pas d’infection à traiter de façon intensive; un antibiotique préventif peu fréquent suffit au besoin."
    ] },
  { id: "B-035", module: "B", topic: "c-bonus", type: "diagnostic", level: 2, trap: false,
    stem: "Femme de 66 ans avec polyarthrite rhumatoïde. Œil rouge très douloureux, ulcère périphérique en croissant collé au limbe avec amincissement stromal marqué, et sclérite adjacente. Quel diagnostic et quelle conduite sont les plus appropriés?",
    figure: null,
    options: [
      "Kératite marginale staphylococcique : hygiène palpébrale et cortisone topique faible",
      "PUK (kératite ulcérative périphérique) : bilan systémique, immunosuppression urgente",
      "Dégénérescence marginale de Terrien : observation et correction de l’astigmatisme",
      "Ulcère de Mooren : aucun bilan, puisqu’aucune maladie générale n’y est associée"
    ],
    answer: 1,
    explain: "Ulcère périphérique en croissant, très douloureux, avec sclérite et polyarthrite rhumatoïde : kératite ulcérative périphérique. Elle peut perforer et signale une vasculite active : bilan et immunosuppression systémique urgente.",
    deep: "**Ce que c’est** : la kératite ulcérative périphérique (peripheral ulcerative keratitis, PUK) est une fonte inflammatoire du stroma périphérique, en croissant au contact du limbe, souvent associée à une vasculite systémique (polyarthrite rhumatoïde, granulomatose avec polyangéite). **Pourquoi c’est important** : elle peut perforer et signale parfois une vasculite active qui menace la vie; à l’inverse, la kératite marginale (réaction immunitaire aux toxines des staphylocoques d’une blépharite) laisse une zone claire entre l’infiltrat et le limbe, avec peu d’amincissement. **Quoi faire** : bilan systémique (dont les ANCA, anticorps des vasculites, et le facteur rhumatoïde), immunosuppression systémique urgente avec la rhumatologie, protection de la surface et suivi rapproché du risque de perforation.",
    why: [
      "La kératite marginale laisse un intervalle clair avec le limbe, avec peu d’amincissement et sans sclérite; ici, l’amincissement et la sclérite orientent vers une PUK.",
      "Exact : PUK associée à la polyarthrite rhumatoïde, traitement systémique.",
      "La dégénérescence de Terrien (amincissement marginal lent, peu inflammatoire et peu douloureux) ne donne pas un œil rouge douloureux avec sclérite.",
      "L’ulcère de Mooren (fonte périphérique douloureuse sans maladie générale) est un diagnostic d’exclusion; avec une polyarthrite, on cherche une PUK systémique."
    ] },
  { id: "B-036", module: "B", topic: "c-bonus", type: "image", level: 3, trap: false,
    stem: "Homme de 46 ans, astigmatisme élevé et croissant, inverse (against-the-rule) à la réfraction, sans frottement oculaire ni atopie. Ce schéma de topographie montre sa carte de courbure axiale. Quel diagnostic, et quelle trouvaille à la lampe à fente ou à la pachymétrie le confirme?",
    figure: { type: "topo", pattern: "pmd" },
    options: [
      "Kératocône à cambrure inférieure; amincissement maximal au sommet du cône",
      "Astigmatisme inverse régulier; épaisseur cornéenne normale partout",
      "Dégénérescence marginale pellucide; amincissement en bande près du limbe inférieur",
      "Dégénérescence marginale de Terrien; amincissement supérieur avec dépôts lipidiques"
    ],
    answer: 2,
    explain: "Carte en « pince de crabe » et astigmatisme inverse : dégénérescence marginale pellucide. L’amincissement forme une bande près du limbe inférieur, sous la zone qui bombe ; dans le kératocône, il est au sommet du cône.",
    deep: "**Ce que c’est** : la dégénérescence marginale pellucide (pellucid marginal degeneration) est une ectasie (cornée amincie qui se déforme) où l’amincissement forme une bande inférieure à 1–2 mm du limbe; la cornée bombe juste au-dessus, d’où l’image en « pince de crabe » (crab claw) avec astigmatisme inverse sur la carte axiale. **Pourquoi c’est important** : dans le kératocône, l’amincissement maximal coïncide avec le sommet du cône, plus central, alors qu’ici la zone la plus bombée est au-dessus de la zone la plus mince; la tomographie (carte pachymétrique) fait la distinction, et toute ectasie contre-indique la chirurgie réfractive au laser. **Quoi faire** : confirmer par tomographie, corriger par lunettes ou lentilles (souvent sclérales), et discuter de la CXL en centre spécialisé si l’ectasie progresse.",
    why: [
      "Dans le kératocône, l’amincissement le plus marqué coïncide avec le sommet du cône, et la carte montre un nœud papillon asymétrique plutôt qu’une pince de crabe.",
      "Un astigmatisme inverse régulier donne un nœud papillon horizontal symétrique, sans amincissement.",
      "Exact : pince de crabe, astigmatisme inverse et amincissement en bande inférieure.",
      "La dégénérescence de Terrien (amincissement marginal lent, peu inflammatoire) est habituellement supérieure, avec une ligne de lipides au front de l’amincissement."
    ] }
]);
