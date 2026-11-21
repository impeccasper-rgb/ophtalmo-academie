var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

G.OPH.cases = (G.OPH.cases || []).concat([
  {
    id: "cas-a1",
    module: "A",
    title: "Excavation asymétrique : glaucome… ou pas ?",
    tags: ["piege", "highyield"],
    intro: "Un homme de 64 ans est dirigé par son optométriste pour une excavation papillaire (cupping : le creux central de la papille, estimé par le rapport cup/disc ou C/D) asymétrique, à 0,7 OD (œil droit) et 0,5 OS (œil gauche), avec des PIO (pressions intraoculaires) de 16 et 17 mmHg. La note conclut : « glaucome à pression normale probable (normal-tension glaucoma, GPN : atteinte glaucomateuse du nerf malgré une PIO normale), gouttes à débuter ? ». Depuis six mois, il se cogne aux cadres de porte des deux côtés, a du mal à changer de voie en voiture et se plaint de céphalées frontales sourdes. AV (acuité visuelle) corrigée : 6/9 (20/30) OD et 6/7,5 (20/25) OS ; le segment antérieur est normal.",
    steps: [
      {
        kind: "exams",
        prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)",
        pick: 3,
        options: [
          { label: "Pupilles (test de la lampe oscillante, swinging flashlight test) et vision des couleurs (planches d’Ishihara), avant de dilater", result: "DPAR (déficit pupillaire afférent relatif, RAPD) 1+ OD. Ishihara 9/14 OD et 13/14 OS ; un objet rouge paraît « délavé » dans les hémichamps temporaux des deux yeux.", value: 2, note: "Quoi : on balance la lumière d’un œil à l’autre ; si une pupille se dilate quand la lumière arrive sur son œil, ce nerf optique transmet moins de signal (DPAR). Les planches d’Ishihara (chiffres en points colorés) testent la vision des couleurs, très sensible à une atteinte du nerf. Pourquoi : DPAR = neuropathie asymétrique, et une dyschromatopsie avec une AV presque normale est atypique du glaucome → penser compression ou inflammation du nerf." },
          { label: "Pachymétrie cornéenne centrale", result: "552 µm OD et 548 µm OS.", value: 0, note: "La pachymétrie mesure l’épaisseur de la cornée (normale ≈ 540–550 µm) ; une cornée mince fait sous-estimer la PIO et augmente le risque glaucomateux. Utile pour interpréter la PIO, mais elle ne dit rien sur la nature de la neuropathie." },
          { label: "OCT : couche des fibres nerveuses péripapillaire (RNFL) et cellules ganglionnaires maculaires (GCIPL)", result: "RNFL aminci surtout en nasal et en temporal (atrophie « en nœud papillon », band atrophy), pôles relativement préservés. GCIPL aminci en **binasal**, avec une limite nette au méridien vertical.", value: 1, note: "L’OCT (tomographie par cohérence optique) mesure au micron l’épaisseur des axones autour de la papille (RNFL) et des cellules ganglionnaires dans la macula (GCIPL). Ce profil reflète la perte des fibres nasales qui croisent au chiasma → très évocateur d’une compression chiasmatique. Le glaucome amincit plutôt les pôles inférotemporal et supérotemporal. Utile, mais à interpréter avec le champ." },
          { label: "Fond d’œil dilaté à la lentille de 78 D : examen stéréoscopique (en relief) des papilles", result: "OD : C/D 0,7, mais le bord neurorétinien restant est **pâle** ; la pâleur s’étend au-delà de l’excavation, sans encoche ni hémorragie. OS : C/D 0,5 avec pâleur temporale discrète.", value: 2, note: "Le bord (anneau) neurorétinien est le tissu rose entre l’excavation et le bord du disque : ce sont les axones. En glaucome, l’anneau s’amincit mais ce qui reste garde sa couleur rosée. Une **pâleur > excavation** (la zone blanche dépasse le creux) signe une perte axonale d’une autre nature → compression, ischémie ou inflammation." },
          { label: "Courbe tensionnelle diurne (phasing) avant tout autre examen", result: "PIO de 14 à 18 mmHg au cours de la journée ; prochain rendez-vous dans 6 semaines.", value: -1, note: "Le phasing mesure la PIO plusieurs fois dans la journée pour chercher un pic. Ici, il renforce l’ancrage sur le glaucome et retarde de plusieurs semaines le diagnostic d’une lésion compressive." },
          { label: "Champ visuel automatisé Humphrey 24-2 SITA Standard aux deux yeux", result: "Défaut temporal dans chaque œil, plus dense en supérieur, qui **s’arrête net au méridien vertical**. MD −9,3 dB OD et −4,1 dB OS ; fiabilité bonne.", value: 2, note: "Le 24-2 teste 54 points dans les 24° centraux (SITA Standard : stratégie de seuil rapide et standardisée) ; le méridien vertical est la ligne verticale qui passe par le point fixé. Les fibres touchées par le glaucome suivent des arcs qui ne croisent pas le méridien horizontal (d’où le ressaut nasal, nasal step). Un défaut limité par le méridien **vertical** traduit une lésion au chiasma ou en arrière, là où les fibres nasales et temporales se séparent. Le MD (mean deviation, déficit moyen) résume en décibels l’ampleur globale de la perte." },
          { label: "Gonioscopie", result: "Angle ouvert grade 4 (Shaffer) sur 360°, pigmentation légère, aucune synéchie antérieure périphérique (PAS).", value: 1, note: "La gonioscopie (lentille à miroir posée sur la cornée) montre l’angle iridocornéen (iridocorneal angle), par où s’évacue l’humeur aqueuse ; grade 4 de Shaffer = angle largement ouvert, et les PAS sont des adhérences entre l’iris et l’angle. Elle fait partie du bilan de tout glaucome présumé (angle ouvert ou fermé ?), mais elle ne distingue pas une neuropathie glaucomateuse d’une neuropathie compressive." }
        ]
      },
      {
        kind: "info",
        text: "Synthèse : DPAR OD, dyschromatopsie, pâleur plus étendue que l’excavation, RNFL en nœud papillon et GCIPL aminci en binasal. Au champ visuel de l’OD (schéma en échelle de gris), le défaut occupe l’hémichamp temporal, prédomine en supérieur et s’arrête au méridien vertical ; l’OS montre le même patron, moins dense. Rappel : l’hémichamp temporal est vu par la rétine nasale, dont les fibres croisent au chiasma.",
        figure: { type: "vf", pattern: "bitemporal", eye: "OD", map: "gray", md: -9.3 }
      },
      {
        kind: "choice",
        prompt: "Quelle interprétation retiens-tu ?",
        options: [
          { label: "Glaucome à pression normale asymétrique avec défauts arciformes", correct: false, note: "Les défauts arciformes (en arc) suivent les faisceaux de fibres et respectent le méridien horizontal. Ils ne s’arrêtent pas au méridien vertical, et en glaucome la pâleur ne dépasse pas l’excavation." },
          { label: "Neuropathie optique ischémique antérieure non artéritique (NOIA-NA, NAION) OD", correct: false, note: "La NOIA-NA est un « infarctus » de la tête du nerf optique : perte visuelle brutale et indolore, papille œdémateuse, puis pâleur sectorielle et défaut altitudinal (moitié supérieure ou inférieure du champ). Elle est habituellement unilatérale, ni bitemporale ni progressive sur des mois." },
          { label: "Neuropathie optique compressive au niveau du chiasma optique", correct: true, note: "Le chiasma est le carrefour où les fibres des rétines nasales (qui voient le champ temporal) croisent vers le côté opposé. Une compression du chiasma touche ces fibres croisées → défaut bitemporal qui respecte le méridien vertical, pâleur et dyschromatopsie. La prédominance supérieure évoque une masse qui pousse par en dessous, comme l’hypophyse." },
          { label: "Lésion de la bandelette optique droite (optic tract)", correct: false, note: "La bandelette optique, juste après le chiasma, porte les fibres d’un même hémichamp des deux yeux. Sa lésion donne une hémianopsie **homonyme** (même côté dans les deux yeux, gauche ici), pas une perte des deux hémichamps temporaux." }
        ]
      },
      {
        kind: "choice",
        prompt: "Quelle est la prochaine étape ?",
        options: [
          { label: "Débuter du latanoprost 0,005 % au coucher (HS) pour un GPN et refaire un champ visuel dans 3 mois", correct: false, note: "Le latanoprost est une goutte (analogue des prostaglandines) qui abaisse la PIO. **Piège** classique : traiter l’excavation au lieu du patient. Les gouttes ne protègent pas d’une compression qui progresse, et le délai peut coûter de la vision." },
          { label: "Tomodensitométrie (TDM) cérébrale sans contraste dès aujourd’hui, plus rapide à obtenir qu’une IRM", correct: false, note: "La TDM (scanner aux rayons X) montre mal le chiasma et l’hypophyse sans contraste et peut manquer une lésion sellaire. On la réserve à l’urgence ou à une contre-indication à l’IRM, alors avec contraste." },
          { label: "Vitesse de sédimentation et protéine C réactive (CRP) pour éliminer une artérite à cellules géantes", correct: false, note: "L’artérite à cellules géantes (inflammation des artères chez la personne âgée) cause une perte visuelle brutale avec papille œdémateuse pâle, céphalée temporale et douleur à la mastication. Elle ne donne pas un défaut bitemporal progressif sur des mois." },
          { label: "Refaire le champ visuel et l’OCT dans 4 à 6 mois pour confirmer que le défaut est reproductible", correct: false, note: "Répéter un champ est utile s’il est peu fiable ou isolé. Ici, il est fiable et concorde avec la pâleur et le DPAR → agir maintenant ; attendre retarde le diagnostic d’une lésion compressive." },
          { label: "IRM cérébrale avec gadolinium centrée sur la selle turcique d’ici quelques jours, avec bilan hormonal hypophysaire", correct: true, note: "L’IRM (imagerie par résonance magnétique) avec gadolinium (produit de contraste) et des coupes fines centrées sur la selle turcique, la loge osseuse de l’hypophyse située sous le chiasma, montre le mieux cette région. Le bilan hormonal (prolactine, cortisol, thyroïde, hormones sexuelles…) dépiste un excès ou un déficit d’hormones → il oriente le traitement, car un prolactinome se traite d’abord par médicament, et un déficit en cortisol doit être corrigé avant toute chirurgie." }
        ]
      },
      {
        kind: "info",
        text: "Rebondissement : l’IRM, faite quatre jours plus tard, révèle la vraie cause de cette « excavation » : un **macroadénome hypophysaire** (tumeur bénigne de l’hypophyse de 1 cm ou plus) de 2,8 cm, avec extension suprasellaire (il sort de la selle vers le haut), qui soulève et comprime le chiasma par en dessous. Bilan hormonal : prolactine légèrement élevée, qui le reste après dilution de l’échantillon (on dilue pour éliminer l’effet crochet, hook effect : un taux énorme de prolactine peut saturer le dosage et paraître faussement presque normal) ; axe gonadotrope bas (testostérone basse faute de stimulation par l’hypophyse) ; cortisol et thyroïde normaux. À retenir : une compression lente peut, elle aussi, agrandir l’excavation ; ce sont la **pâleur du bord restant** et le défaut aligné sur le méridien vertical qui trahissent la cause non glaucomateuse."
      },
      {
        kind: "choice",
        prompt: "Que recommandes-tu ?",
        options: [
          { label: "Cabergoline (agoniste de la dopamine) en première intention pour faire fondre l’adénome, puis IRM de contrôle dans 3 mois", correct: false, note: "La cabergoline fait fondre les **prolactinomes** (adénomes qui sécrètent beaucoup de prolactine, avec des taux très élevés) : c’est alors le premier traitement, même avec une atteinte du champ visuel. Ici, la prolactine reste à peine élevée après dilution : c’est un effet de tige d’un adénome non fonctionnel, qui ne régressera pas sous cabergoline." },
          { label: "Chirurgie transsphénoïdale organisée rapidement avec la neurochirurgie et l’endocrinologie, après un champ visuel et un OCT de référence", correct: true, note: "La chirurgie transsphénoïdale retire l’adénome en passant par le nez et le sinus sphénoïdal, sans ouvrir le crâne. Adénome non fonctionnel (qui ne sécrète pas d’hormone) + atteinte visuelle → décompression chirurgicale en première ligne ; le champ et l’OCT de référence serviront à mesurer la récupération. La légère hausse de prolactine vient de l’effet de tige (stalk effect) : la masse comprime la tige hypophysaire et lève le frein de la dopamine sur la prolactine. En attendant l’opération, on lui enseigne les signes d’une **apoplexie hypophysaire** (pituitary apoplexy : saignement ou infarctus brutal dans l’adénome) : céphalée brutale, vomissements, vision double, chute de la vision → urgence le jour même (corticostéroïdes par voie intraveineuse, avis neurochirurgical)." },
          { label: "Radiothérapie stéréotaxique d’emblée, pour éviter les risques d’une chirurgie si près du chiasma", correct: false, note: "La radiothérapie stéréotaxique concentre des rayons sur la tumeur, mais son effet est lent : elle sert aux reliquats ou aux récidives. Elle ne décomprime pas le chiasma rapidement et peut elle-même léser les voies optiques." },
          { label: "Surveillance par IRM et champ visuel dans 6 mois, puisque l’adénome est bénin et que l’AV reste bonne", correct: false, note: "La surveillance convient à un microadénome (moins de 1 cm) découvert par hasard, sans atteinte visuelle. « Bénin » décrit la nature des cellules, pas l’effet sur le chiasma : un macroadénome qui comprime déjà le chiasma doit être décomprimé." }
        ]
      },
      {
        kind: "info",
        text: "Évolution : la chirurgie transsphénoïdale a lieu trois semaines plus tard et la pathologie confirme un adénome non fonctionnel. À 6 mois, l’AV OD est à 6/7,5 (20/25) et le défaut bitemporal a presque disparu, mais la papille OD garde une excavation de 0,7 et un bord pâle (schéma) : ce sont les cicatrices des axones perdus, qui ne repoussent pas. Un RNFL et un GCIPL encore assez épais avant l’opération annonçaient cette bonne récupération : des axones comprimés mais vivants peuvent recommencer à conduire le signal. Rebondissement : l’optométriste écrit : « Excavation toujours à 0,7 et PIO à 16 mmHg ; puisque l’excavation n’a pas régressé, faut-il maintenant traiter un glaucome ? »",
        figure: { type: "disc", cd: 0.7, notch: "none", heme: false, ppa: false, pallor: true }
      },
      {
        kind: "choice",
        prompt: "Que réponds-tu à l’optométriste ?",
        options: [
          { label: "Débuter du latanoprost au coucher : une excavation de 0,7 qui ne régresse pas après la chirurgie prouve un glaucome associé", correct: false, note: "**Piège** : l’excavation persistante est la trace des axones déjà perdus, pas la preuve d’une maladie active. Un glaucome surajouté exige ses propres preuves : progression documentée d’un défaut arciforme qui respecte le méridien horizontal, amincissement focal du bord. Sans elles, les gouttes n’apportent que des effets secondaires et des coûts." },
          { label: "Cesser le suivi ophtalmologique, puisque la tumeur est retirée et que la vision est presque revenue", correct: false, note: "Un adénome non fonctionnel peut repousser à partir d’un petit reliquat, parfois des années plus tard, et le premier signe est souvent un nouveau défaut du champ. On garde un suivi du champ et de l’OCT, coordonné avec l’IRM de surveillance de la neurochirurgie." },
          { label: "Trabéculoplastie sélective au laser (SLT) préventive, pour protéger les axones restants en abaissant la PIO", correct: false, note: "La SLT (laser de faible énergie appliqué sur le trabéculum) abaisse la PIO, ce qui protège le nerf dans un glaucome. Rien ici ne montre de glaucome, et abaisser une PIO déjà normale ne protège pas d’une compression qui récidiverait." },
          { label: "Pas de gouttes : excavation et pâleur sont des séquelles stables ; nouveau champ et OCT de référence, puis suivi conjoint avec la neurochirurgie (IRM de surveillance)", correct: true, note: "Chez l’adulte, une excavation creusée par une perte d’axones ne régresse pas après la décompression : elle témoigne du passé, pas d’une maladie active. Les examens d’avant l’opération ne servent plus de référence ; on en refait (champ 24-2, OCT RNFL et GCIPL) pour comparer la suite. Au suivi, le patron d’un nouveau défaut oriente : s’il respecte le méridien **vertical** (avec un GCIPL nasal qui s’amincit), on pense à une récidive → IRM ; s’il est arciforme et respecte le méridien **horizontal**, avec un amincissement focal du bord ou une hémorragie papillaire, on pense à un glaucome surajouté, qu’on traiterait alors." }
        ]
      }
    ],
    debrief: [
      "Une excavation n’est pas synonyme de glaucome : **pâleur > excavation**, dyschromatopsie, DPAR marqué ou AV abaissée doivent faire chercher une autre cause.",
      "Le glaucome respecte le méridien **horizontal** (les fibres arciformes ne le croisent pas) ; un défaut qui respecte le méridien **vertical** est neurologique (chiasma ou en arrière) jusqu’à preuve du contraire.",
      "Défaut bitemporal à prédominance supérieure = compression par en dessous (adénome hypophysaire) → IRM avec gadolinium et bilan hormonal (prolactine diluée : effet crochet), pas de gouttes ; enseigner les signes d’apoplexie (céphalée brutale, vision double, chute de la vision → urgence).",
      "Avant d’étiqueter un GPN, chercher les drapeaux rouges : jeune âge, AV basse, pâleur, défaut aligné sur le méridien vertical, progression malgré une PIO basse → imagerie.",
      "Après la décompression, excavation et pâleur persistent : ce sont des séquelles, pas un glaucome → nouvelle référence (champ + OCT) ; au suivi, un défaut aligné sur le méridien vertical fait penser à une récidive (IRM), un défaut arciforme aligné sur l’horizontal, à un glaucome."
    ]
  },
  {
    id: "cas-b1",
    module: "B",
    title: "Lentilles, piscine et ulcère qui fond",
    tags: ["urgent", "frequent", "highyield"],
    intro: "Une étudiante de 24 ans porte des lentilles souples mensuelles qu’elle garde souvent pour dormir ; elle s’est baignée avec ses lentilles il y a trois jours. Depuis 36 heures, son œil droit est rouge et très douloureux, avec photophobie (douleur à la lumière) et sécrétions jaunâtres ; elle a retiré sa lentille ce matin. AV (acuité visuelle) : 6/60 (20/200) OD (œil droit), sans amélioration au trou sténopéique (petit trou qui contourne les défauts optiques), et 6/6 (20/20) OS (œil gauche). Une tache blanche centrale est visible à l’œil nu sur la cornée droite.",
    steps: [
      {
        kind: "exams",
        prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)",
        pick: 3,
        options: [
          { label: "Microscopie confocale in vivo", result: "Nombreuses cellules inflammatoires dans le stroma antérieur ; ni kystes amibiens ni filaments fongiques.", value: 0, note: "Ce microscope spécial, offert dans les centres spécialisés, voit les cellules de la cornée vivante. Très utile si on soupçonne une amibe (Acanthamoeba) ou un champignon, ou si les cultures sont négatives ; il n’est pas nécessaire en première ligne devant un ulcère suppuratif typique." },
          { label: "Culture de la lentille, de son étui et de la solution d’entretien", result: "Étui encrassé, solution réutilisée plusieurs fois ; la culture de l’étui fera pousser le même germe que la cornée.", value: 1, note: "L’étui est souvent le réservoir du germe ; sa culture aide si les cultures cornéennes reviennent stériles. C’est un complément utile, qui ne remplace jamais le grattage de la cornée." },
          { label: "Lampe à fente avec fluorescéine : mesurer l’infiltrat et le défaut épithélial, évaluer la chambre antérieure", result: "Infiltrat stromal blanc et dense de 3,5 × 3 mm, à moins de 1 mm de l’axe visuel, entouré d’un stroma « en verre dépoli » ; défaut épithélial de 4 × 3,5 mm qui prend la fluorescéine ; réaction de chambre antérieure 2+ avec hypopyon de 1 mm ; sécrétions mucopurulentes.", value: 2, note: "La fluorescéine est un colorant qui devient vert vif là où l’épithélium manque (défaut épithélial). L’infiltrat est un amas de globules blancs dans le stroma ; la réaction de chambre antérieure (CA) correspond aux cellules inflammatoires qui flottent dans l’humeur aqueuse (cotée de 0 à 4+) ; l’hypopyon est un niveau de pus au bas de la CA. Règle **1-2-3** : réaction de CA ≥ 1+, infiltrat ≥ 2 mm, à 3 mm ou moins du centre → grattage pour cultures et gouttes fortifiées. Les trois critères sont présents ici." },
          { label: "Débuter la moxifloxacine et attendre 48 h avant de décider s’il faut des cultures", result: "À 48 h, l’infiltrat mesure 5 mm ; le grattage fait sous antibiotique revient stérile.", value: -1, note: "Les antibiotiques stérilisent la surface : les cultures prises après coup sont souvent négatives, juste au moment où l’on en a le plus besoin (ulcère qui s’aggrave). Selon la règle 1-2-3, on cultive avant la première goutte." },
          { label: "Mesure de la PIO (tonométrie)", result: "PIO de 18 mmHg au tonomètre portatif à embout jetable ; mesure difficile sur l’épithélium ulcéré.", value: 0, note: "La PIO (pression intraoculaire) peut monter quand la CA est très inflammée, mais ce n’est pas la priorité. On évite d’appuyer le cône réutilisable du Goldmann sur une cornée infectée ; on préfère un tonomètre à embout jetable." },
          { label: "Grattage cornéen sous anesthésie topique pour coloration de Gram et cultures, avant toute goutte antibiotique", result: "Gram : nombreux bacilles à Gram négatif. Cultures ensemencées sur gélose au sang, gélose chocolat et milieu de Sabouraud (pour les champignons) ; lecture à 24–48 h.", value: 2, note: "Après une goutte d’anesthésique, on gratte la base et les bords de l’ulcère avec une lame ou une spatule stérile. La coloration de Gram oriente en une heure (bactérie ronde ou en bâtonnet, Gram positif ou négatif) ; la culture identifie le germe et sa sensibilité aux antibiotiques (antibiogramme). On prélève **avant** la première goutte : l’antibiotique stérilise la surface et rend les cultures faussement négatives." },
          { label: "Échographie B (ultrasons) du segment postérieur", result: "Vitré anéchogène (clair), rétine à plat ; aucun signe d’endophtalmite.", value: 0, note: "L’échographie B permet de voir derrière une cornée opaque. Elle sert si le fond d’œil n’est pas visible et qu’on craint une endophtalmite (infection à l’intérieur de l’œil). Ici, le reflet du fond d’œil reste visible : elle apporte peu aujourd’hui." }
        ]
      },
      {
        kind: "choice",
        prompt: "Le Gram montre des bacilles à Gram négatif. Quel diagnostic retiens-tu ?",
        options: [
          { label: "Infiltrats stériles liés aux lentilles (ulcère périphérique de lentille, contact lens peripheral ulcer)", correct: false, note: "Réaction immunitaire, et non infection, aux toxines bactériennes : petits infiltrats périphériques, peu douloureux, épithélium presque intact, peu de réaction en CA. C’est un diagnostic d’exclusion : un infiltrat central de plus de 2 mm avec hypopyon est infectieux jusqu’à preuve du contraire." },
          { label: "Kératite bactérienne liée au port de lentilles, très probablement à Pseudomonas aeruginosa", correct: true, note: "La kératite bactérienne est une infection du stroma de la cornée par des bactéries entrées par une brèche de l’épithélium. Pseudomonas, un bacille à Gram négatif qui vit dans l’eau et dans les étuis, adhère aux lentilles ; ses enzymes (protéases) digèrent le stroma et peuvent perforer la cornée en quelques jours. Dormir avec ses lentilles est le principal facteur de risque ; l’eau (baignade, robinet) en est un autre. La culture et l’antibiogramme confirmeront le germe." },
          { label: "Kératite à Acanthamoeba, liée à la baignade avec lentilles", correct: false, note: "Amibe de l’eau du robinet ou de la piscine : douleur disproportionnée, infiltrats le long des nerfs (périnévrite), évolution lente sur des semaines. Un ulcère suppuratif en 36 h avec des bacilles au Gram oriente vers une bactérie ; une co-infection reste possible si l’évolution est atypique." },
          { label: "Kératite fongique filamenteuse (ex. Fusarium)", correct: false, note: "Infection par un champignon, souvent après un traumatisme végétal (branche) : infiltrat grisâtre à bords plumeux, lésions satellites, évolution plus lente. Le Gram ou la préparation au KOH (hydroxyde de potassium, qui dissout les cellules et laisse voir les champignons) montrerait des filaments (hyphes), pas des bacilles." },
          { label: "Kératite épithéliale herpétique (HSV)", correct: false, note: "Le virus herpès simplex (HSV) donne une ulcération en dendrite (ramifiée, avec des renflements terminaux) et une baisse de la sensibilité cornéenne, souvent avec des récidives antérieures. Il ne cause pas un infiltrat suppuratif dense avec hypopyon." }
        ]
      },
      {
        kind: "choice",
        prompt: "Quel traitement initial prescris-tu ?",
        options: [
          { label: "Moxifloxacine 0,5 % 4 fois par jour et pansement occlusif jusqu’à demain pour soulager la douleur", correct: false, note: "La moxifloxacine (fluoroquinolone de 4e génération) se donne aux heures dans une kératite, pas 4 fois par jour. Surtout, **jamais de pansement occlusif chez un porteur de lentilles** : l’œil fermé, chaud et humide favorise Pseudomonas et cache l’aggravation." },
          { label: "Gouttes combinées tobramycine-dexaméthasone 4 fois par jour pour traiter à la fois l’infection et l’inflammation", correct: false, note: "La dexaméthasone est un corticostéroïde : elle freine les défenses locales et la cicatrisation de l’épithélium avant que le germe soit contrôlé. Les combinaisons commerciales sont aussi trop peu concentrées pour un ulcère central." },
          { label: "Ciprofloxacine 750 mg par la bouche 2 fois par jour, sans gouttes, pour éviter leur toxicité sur l’épithélium", correct: false, note: "Les antibiotiques oraux n’atteignent pas une concentration suffisante dans la cornée. On les réserve à des situations particulières (atteinte de la sclère, perforation imminente), toujours en plus du traitement topique." },
          { label: "Gouttes fortifiées de vancomycine et de tobramycine en alternance aux heures jour et nuit, cycloplégique, arrêt des lentilles, sans pansement", correct: true, note: "Doses : vancomycine 25 mg/mL et tobramycine 14 mg/mL, en alternance aux heures jour et nuit, après une dose de charge (gouttes rapprochées la première heure) ; on revoit la patiente dans 24 h. Les gouttes fortifiées sont des antibiotiques beaucoup plus concentrés que les produits commerciaux, préparés par la pharmacie de l’hôpital ; au Québec, ces patients sont souvent dirigés vers l’urgence ophtalmologique d’un centre (CHUM, HMR, CUSM, Hôpital général juif, CHU de Québec…). La vancomycine couvre les Gram positifs et la tobramycine les Gram négatifs comme Pseudomonas, en attendant l’antibiogramme. Le cycloplégique (ex. cyclopentolate) paralyse le muscle ciliaire : moins de douleur par spasme et moins d’adhérences de l’iris (synéchies)." }
        ]
      },
      {
        kind: "choice",
        prompt: "À 72 h, la culture confirme un Pseudomonas sensible à la tobramycine et aux fluoroquinolones. La douleur diminue, l’infiltrat est mieux délimité et le défaut épithélial rétrécit. Un collègue propose d’ajouter un corticostéroïde topique « pour limiter la cicatrice ». Que réponds-tu ?",
        options: [
          { label: "Pas de stéroïde de routine : adapter l’antibiotique à l’antibiogramme, espacer les gouttes selon la réponse et réévaluer", correct: true, note: "L’antibiogramme permet de cesser la vancomycine, inutile contre ce Gram négatif, et de garder la tobramycine ou une fluoroquinolone. Pour le stéroïde, deux essais randomisés guident la décision. **SCUT** (2012) : le stéroïde topique ajouté n’apporte pas de bénéfice global ; bénéfice possible seulement si l’ulcère central est sévère et le stéroïde débuté tôt, et à éviter si Nocardia (bactérie filamenteuse). **SCUT II** (2026) : ajouter du difluprednate (corticostéroïde topique puissant), avec ou sans cross-linking (CXL : rigidification du collagène par riboflavine et UV-A), à la moxifloxacine n’a apporté aucun bénéfice sur l’AV ni sur la taille de la cicatrice à 6 et 12 mois (analyse possiblement sous-puissante à 12 mois). Donc pas de stéroïde systématique ; s’il est envisagé, c’est au cas par cas, par un cornéologue, une fois le germe identifié et contrôlé." },
          { label: "Ajouter de l’acétate de prednisolone 1 % 4 fois par jour dès maintenant : SCUT a démontré une meilleure acuité finale", correct: false, note: "Faux : SCUT n’a pas montré de bénéfice global ; le bénéfice possible ne concernait que certains sous-groupes (ulcère central sévère, début précoce). Le stéroïde ralentit aussi la fermeture de l’épithélium." },
          { label: "Ajouter du difluprednate et faire un cross-linking (PACK-CXL) pour accélérer la guérison", correct: false, note: "Le cross-linking (CXL) combine riboflavine (vitamine B2) et rayons UV-A pour rigidifier le collagène ; on l’a proposé contre les infections (PACK-CXL). SCUT II n’a montré aucun bénéfice de cette combinaison sur l’AV ou la cicatrice." },
          { label: "Cesser les antibiotiques dès maintenant, puisque l’épithélium se referme et que la douleur diminue", correct: false, note: "Un épithélium qui se referme ne signifie pas que les bactéries du stroma sont éradiquées. On espace les gouttes graduellement selon l’évolution ; un arrêt brutal à 72 h expose à une rechute." }
        ]
      },
      {
        kind: "info",
        text: "Rebondissement : au jour 6, la douleur a encore diminué, mais la base de l’ulcère s’est creusée. En fente fine (faisceau très étroit qui montre la cornée en coupe), il ne reste qu’environ 10 % d’épaisseur au fond de l’ulcère, avec une petite bulle transparente de 1,5 mm qui bombe vers l’avant : un **descémétocèle** (descemetocele). Le stroma a fondu jusqu’à la membrane de Descemet (membrane très mince, juste devant l’endothélium), qui est seule à retenir l’humeur aqueuse : la perforation est imminente. Le **test de Seidel** (Seidel test) est négatif : on applique de la fluorescéine concentrée (orange foncé) sur la zone ; si de l’humeur aqueuse fuyait, elle diluerait le colorant en un ruisseau vert vif (Seidel positif). Mécanisme : les protéases du germe et les enzymes des globules blancs (collagénases) continuent de digérer le stroma même quand l’infection est contrôlée. Le schéma rappelle les deux couches en jeu : le stroma qui fond et la membrane de Descemet qui bombe.",
        figure: { type: "cornea", highlight: ["stroma", "descemet"], edema: "none", guttae: false, scar: false }
      },
      {
        kind: "choice",
        prompt: "Quel plan proposes-tu ?",
        options: [
          { label: "Greffe de cornée transfixiante (PK, penetrating keratoplasty) optique immédiate pour remplacer la zone malade", correct: false, note: "Une greffe optique vise à rendre une cornée claire. Dans un œil encore enflammé et infecté, elle comporte un risque élevé de rejet, de récidive de l’infection et d’échec. On l’envisage plus tard, sur un œil calme, si la cicatrice limite la vision." },
          { label: "Corticostéroïde topique intensif pour freiner la fonte du stroma par les enzymes des globules blancs", correct: false, note: "Les stéroïdes ralentissent la cicatrisation de l’épithélium et du stroma et réduisent les défenses : sur une cornée qui fond, ils augmentent le risque de perforation." },
          { label: "Colle de cyanoacrylate sur la zone amincie et lentille pansement, en poursuivant l’antibiotique ; greffe tectonique si la colle échoue", correct: true, note: "La colle de cyanoacrylate (cyanoacrylate glue) est une colle médicale appliquée sur la zone amincie et asséchée : elle ferme le défaut et freine la fonte en bloquant l’arrivée des globules blancs. La lentille pansement (lentille souple thérapeutique) la garde en place et soulage. On poursuit l’antibiotique en réduisant les gouttes toxiques pour l’épithélium, et une coque protège l’œil. La colle convient aux petites zones (de l’ordre de 2–3 mm ou moins) ; au-delà, ou si elle échoue, on fait une greffe tectonique (tectonic graft), c’est-à-dire un greffon de cornée qui sert à fermer le globe, pas à rendre la vision." },
          { label: "Pansement compressif pour soutenir la cornée amincie, cycloplégique et contrôle dans une semaine", correct: false, note: "Le pansement est proscrit chez une porteuse de lentilles et masque une perforation ; un descémétocèle se suit aux 24–48 h, pas aux sept jours." }
        ]
      },
      {
        kind: "info",
        text: "Évolution : la colle tient cinq semaines, puis la zone se vascularise et cicatrise. À 4 mois, il reste une cicatrice dense et vascularisée tout près de l’axe visuel, avec un astigmatisme irrégulier : AV 6/30 (20/100) avec lunettes, mais 6/12 (20/40) avec une lentille rigide perméable aux gaz ou une lentille sclérale, qui masque l’irrégularité de la surface (mais pas l’opacité). Une greffe optique pourra être discutée plus tard, sur un œil calme. Enseignement : ne jamais dormir, se baigner ou se doucher avec des lentilles, ne jamais les rincer à l’eau du robinet, et remplacer l’étui régulièrement."
      }
    ],
    debrief: [
      "Lentilles + œil rouge douloureux + infiltrat = kératite infectieuse jusqu’à preuve du contraire ; Pseudomonas peut faire fondre la cornée en quelques jours → évaluation le jour même.",
      "Règle **1-2-3** (CA ≥ 1+, infiltrat ≥ 2 mm, à 3 mm ou moins du centre) → grattage pour Gram et cultures **avant** l’antibiotique, plus culture de la lentille et de l’étui.",
      "Traitement : vancomycine 25 mg/mL + tobramycine 14 mg/mL fortifiées en alternance aux heures, jour et nuit (pharmacie hospitalière), cycloplégique, jamais de pansement occlusif.",
      "Stéroïdes : pas de routine (SCUT : pas de bénéfice global ; SCUT II 2026 : difluprednate ± CXL sans bénéfice sur l’AV ni sur la cicatrice).",
      "Amincissement : fente fine et test de Seidel ; descémétocèle ou petite perforation → colle de cyanoacrylate + lentille pansement ; zone plus large → greffe tectonique ; greffe optique plus tard, sur un œil calme."
    ]
  },
  {
    id: "cas-b2",
    module: "B",
    title: "Herpès qui ne guérit pas : et si c’était l’eau du robinet ?",
    tags: ["piege", "highyield", "urgent"],
    intro: "Une graphiste de 29 ans porte des lentilles souples mensuelles qu’elle rince, comme leur étui, à l’eau du robinet ; elle se douche aussi avec ses lentilles. Depuis trois semaines, son œil gauche lui fait de plus en plus mal, surtout la nuit, alors qu’il n’est que modérément rouge ; elle a une photophobie (douleur à la lumière) et larmoie. Une clinique sans rendez-vous a diagnostiqué il y a 12 jours une kératite herpétique (infection de la cornée par le virus herpès simplex, HSV) et prescrit du valacyclovir 500 mg PO TID (par la bouche, 3 fois par jour), sans aucune amélioration. AV (acuité visuelle) : 6/15 (20/50) OS (œil gauche) et 6/6 (20/20) OD (œil droit).",
    steps: [
      {
        kind: "exams",
        prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)",
        pick: 3,
        options: [
          { label: "Sensibilité cornéenne (effleurer la cornée avec la pointe d’un coton ou un fil fin), avant toute goutte anesthésique", result: "Sensibilité conservée des deux côtés ; le contact déclenche une douleur vive à gauche.", value: 1, note: "L’herpès abîme les nerfs de la cornée et diminue souvent sa sensibilité. Une cornée très sensible et douloureuse rend l’herpès moins probable. Test rapide et utile, mais non spécifique." },
          { label: "Lampe à fente avec fluorescéine : épithélium, nerfs cornéens et chambre antérieure", result: "Épithélium irrégulier avec des lignes grisâtres surélevées, sans bulbes terminaux, qui se colorent peu (pseudodendrites) ; fines opacités blanches le long de plusieurs nerfs cornéens, en rayons du centre vers le limbe (**périnévrite radiaire**) ; stroma antérieur légèrement trouble ; faible réaction de chambre antérieure.", value: 2, note: "La fluorescéine est un colorant vert, sous lumière bleue, qui marque les zones où l’épithélium est abîmé. Une vraie dendrite herpétique est un ulcère ramifié avec des renflements au bout des branches (bulbes terminaux) ; une pseudodendrite est une ligne surélevée, sans bulbes, qui prend peu le colorant. La périnévrite radiaire (radial keratoneuritis), une inflammation le long des nerfs de la cornée, est très évocatrice d’Acanthamoeba et explique une douleur hors de proportion avec la rougeur." },
          { label: "Microscopie confocale in vivo", result: "Nombreuses petites structures rondes, très brillantes, à double paroi, dans l’épithélium et le stroma antérieur, parfois alignées en chaînettes : aspect typique de **kystes d’Acanthamoeba**.", value: 2, note: "Ce microscope spécial se pose sur la cornée anesthésiée et en montre les cellules vivantes, couche par couche, en quelques minutes et sans prélèvement. Il voit les kystes, la forme dormante et résistante de l’amibe. Offert dans les centres de cornée, sa lecture dépend de l’expérience de l’opérateur : un examen négatif n’exclut pas le diagnostic." },
          { label: "Augmenter l’antiviral à valacyclovir 1 g PO TID et revoir dans 2 semaines", result: "Deux semaines plus tard : douleur pire et infiltrat stromal qui s’étend.", value: -1, note: "Augmenter l’antiviral prolonge l’erreur diagnostique. Une « kératite herpétique » qui ne répond pas à un antiviral bien pris, chez une porteuse de lentilles, doit faire penser à Acanthamoeba ; chaque semaine perdue assombrit le pronostic." },
          { label: "Culture de l’étui et de la solution des lentilles", result: "Dépôt visqueux (biofilm) dans l’étui ; la culture retrouvera Acanthamoeba et des bactéries de l’eau.", value: 1, note: "L’étui sert de réservoir : les amibes s’y nourrissent des bactéries du biofilm. C’est une preuve d’appoint utile, qui ne remplace pas le prélèvement cornéen." },
          { label: "Ajouter de l’acétate de prednisolone 1 % 4 fois par jour (QID), comme pour une kératite stromale herpétique", result: "Soulagement apparent pendant quelques jours, puis douleur accrue et infiltrat plus dense.", value: -1, note: "La prednisolone est un corticostéroïde topique. Elle soulage un temps en freinant l’inflammation, mais elle affaiblit la défense locale contre l’amibe, masque l’évolution et retarde le diagnostic ; son usage avant le diagnostic est associé à de moins bons résultats. **Piège** classique." },
          { label: "Grattage (débridement) de l’épithélium atteint : PCR pour Acanthamoeba et HSV, culture amibienne, cultures bactériennes et fongiques", result: "PCR positive pour Acanthamoeba et négative pour HSV. La culture sur gélose non nutritive recouverte d’E. coli montrera, après quelques jours, des sillons tracés par les amibes dans la couche de bactéries.", value: 2, note: "La PCR (polymerase chain reaction) amplifie l’ADN du germe : elle est rapide et sensible. La culture amibienne utilise une gélose sans nutriments couverte de bactéries E. coli, que les amibes mangent en laissant des traces ; c’est plus lent. Le débridement retire aussi une partie des amibes de l’épithélium : il est à la fois diagnostique et thérapeutique." }
        ]
      },
      {
        kind: "info",
        text: "Synthèse : douleur hors de proportion avec la rougeur, pseudodendrites, périnévrite radiaire, kystes à double paroi à la microscopie confocale et PCR positive pour Acanthamoeba. Le schéma montre l’aspect à la fluorescéine : des lignes épithéliales grossières et surélevées, sans bulbes terminaux, qui se colorent moins qu’une vraie dendrite. Au stade précoce, la kératite amibienne est souvent prise pour un herpès.",
        figure: { type: "fluo", pattern: "pseudodendrite" }
      },
      {
        kind: "choice",
        prompt: "Quel diagnostic retiens-tu ?",
        options: [
          { label: "Kératite herpétique épithéliale résistante à l’antiviral", correct: false, note: "La résistance de l’HSV aux antiviraux existe, mais reste rare chez une personne immunocompétente. Ici, la PCR HSV est négative, la sensibilité est conservée et les lésions sont des pseudodendrites : l’échec du traitement vient d’une erreur de diagnostic." },
          { label: "Kératite fongique filamenteuse", correct: false, note: "Infection par un champignon, souvent après un traumatisme par un végétal : infiltrat grisâtre à bords plumeux et petites lésions satellites. La confocale montrerait de longs filaments ramifiés (hyphes), pas des kystes ronds." },
          { label: "Kératopathie toxique causée par les médicaments (medicamentosa)", correct: false, note: "L’usage prolongé de gouttes, surtout avec agent de conservation, peut abîmer l’épithélium et donner des pseudodendrites. Mais cette atteinte ne cause ni périnévrite radiaire ni kystes, et la patiente ne prend ici que des comprimés." },
          { label: "Kératite à Acanthamoeba, au stade épithélial et stromal antérieur", correct: true, note: "Acanthamoeba est un protozoaire (organisme fait d’une seule cellule) qui vit dans l’eau du robinet, les piscines et les spas. Il existe sous deux formes : le trophozoïte, actif, qui se nourrit et envahit la cornée, et le kyste, dormant et très résistant aux médicaments. La lentille rincée à l’eau du robinet lui sert de porte d’entrée ; douleur hors de proportion, pseudodendrites et périnévrite radiaire en sont les signes précoces." }
        ]
      },
      {
        kind: "choice",
        prompt: "Quel traitement initial proposes-tu ?",
        options: [
          { label: "Natamycine 5 % aux heures en cessant le valacyclovir, en attendant les cultures fongiques", correct: false, note: "La natamycine est l’antifongique de choix contre les champignons filamenteux (essai MUTT I) ; elle n’agit pas sur Acanthamoeba." },
          { label: "Cesser valacyclovir et lentilles ; biguanide (PHMB ou chlorhexidine 0,02 %) ± propamidine aux heures, puis diminution sur des mois ; cycloplégique", correct: true, note: "Les biguanides (PHMB, polyhexaméthylène biguanide, ou chlorhexidine, à 0,02 %) détruisent la membrane de l’amibe et sont les agents usuels efficaces contre les kystes (cysticides) : ils forment la base du traitement. On les donne aux heures jour et nuit les premiers jours, puis on diminue graduellement sur plusieurs mois, avec un suivi rapproché en centre de cornée. Les diamidines, comme la propamidine, s’ajoutent souvent, mais elles sont plus toxiques pour l’épithélium. Au Canada, ces gouttes sont des préparations magistrales (disponibilité à vérifier) ; le polihexanide 0,08 % (Akantior) est approuvé en Europe depuis 2024, en monothérapie. Le traitement dure des mois, car les kystes survivent longtemps et peuvent se réactiver. Le cycloplégique (goutte qui paralyse le muscle ciliaire, ex. cyclopentolate) soulage le spasme douloureux." },
          { label: "Moxifloxacine 0,5 % aux heures et pansement occlusif la nuit pour calmer la douleur", correct: false, note: "Les antibiotiques ne tuent pas l’amibe ; ils traitent au mieux une surinfection bactérienne. Et jamais de pansement occlusif chez une porteuse de lentilles : l’œil fermé, chaud et humide favorise les germes et cache l’aggravation." },
          { label: "Biguanide aux heures et acétate de prednisolone 1 % 4 fois par jour dès le départ pour limiter l’inflammation", correct: false, note: "En début de traitement, le stéroïde peut favoriser la prolifération de l’amibe et masque l’évolution. Certains cornéologues en ajoutent plus tard, pour une inflammation persistante, après plusieurs semaines de traitement amoebicide qu’on n’interrompt jamais : c’est une décision de spécialiste." }
        ]
      },
      {
        kind: "choice",
        prompt: "Au 3e jour, la patiente n’a presque pas dormi : la douleur reste intense malgré le cycloplégique. Que proposes-tu pour la soulager ?",
        options: [
          { label: "Prescrire des gouttes anesthésiques (tétracaïne) à utiliser au besoin à la maison, en petite quantité", correct: false, note: "L’anesthésique topique soulage quelques minutes, mais son usage répété empêche l’épithélium de guérir et peut faire fondre la cornée (kératopathie toxique aux anesthésiques). On ne le remet jamais au patient." },
          { label: "Remplacer la propamidine par un corticostéroïde topique, plus efficace contre la douleur", correct: false, note: "**Piège** : le stéroïde soulage, mais il affaiblit la défense contre l’amibe et prolonge la maladie. Il ne remplace jamais un agent amoebicide." },
          { label: "Anti-inflammatoire non stéroïdien (AINS) par la bouche, cycloplégique, compresses froides, analgésique plus fort quelques jours au besoin", correct: true, note: "La douleur vient surtout de l’inflammation autour des nerfs cornéens. Un AINS par la bouche pris régulièrement (ex. naproxène, en l’absence de contre-indication : ulcère d’estomac, insuffisance rénale, asthme aggravé par les AINS) la réduit sans nuire à la cornée, et le cycloplégique calme le spasme du muscle ciliaire. Le traitement amoebicide se poursuit sans changement. On réévalue la douleur à chaque visite : une douleur qui augmente peut signaler une progression." },
          { label: "Lentille pansement portée jour et nuit pour protéger la cornée et réduire la douleur au clignement", correct: false, note: "La lentille pansement (lentille souple thérapeutique) aide surtout à fermer un défaut épithélial non infecté. Sur une cornée infectée par un germe lié aux lentilles, elle peut gêner l’action des gouttes et entretenir l’infection ; elle ne traite pas cette douleur d’origine nerveuse." }
        ]
      },
      {
        kind: "info",
        text: "Rebondissement : à la 5e semaine, malgré un traitement bien pris, la douleur augmente de nouveau et l’AV baisse à 6/30 (20/100). Un **infiltrat stromal en anneau (ring infiltrate)** est apparu au centre : c’est une réaction immunitaire contre les antigènes de l’amibe, signe d’une atteinte stromale plus profonde. La sclère nasale est rouge violacé, nodulaire et très sensible au toucher : c’est une **sclérite**, une inflammation de la sclère (la coque blanche de l’œil)."
      },
      {
        kind: "choice",
        prompt: "Que fais-tu ?",
        options: [
          { label: "Poursuivre l’amoebicide et traiter la sclérite par voie générale (AINS oraux, immunosuppression en centre si sévère) ; greffe seulement si perforation", correct: true, note: "La sclérite amibienne est surtout immunitaire : l’amibe envahit rarement la sclère. On calme donc l’inflammation par voie générale tout en continuant de tuer l’amibe dans la cornée (biguanide ± diamidine), avec un suivi rapproché. Une greffe faite en phase active risque fort une récidive de l’infection dans le greffon : on la réserve à une perforation, et une greffe pour la vision se discute après des mois d’œil calme." },
          { label: "Greffe de cornée transfixiante (PK, penetrating keratoplasty : remplacement de toute l’épaisseur de la cornée) en urgence pour retirer l’infection", correct: false, note: "En phase active, des kystes peuvent persister au bord du greffon : risque élevé de récidive, de rejet et d’échec. La greffe thérapeutique est réservée aux perforations." },
          { label: "Cesser les gouttes amoebicides, probablement toxiques à ce stade, et revoir dans 2 semaines", correct: false, note: "La toxicité des gouttes existe, surtout avec la diamidine. Mais une douleur accrue avec un anneau stromal et une sclérite signe une maladie active : arrêter le traitement laisserait les amibes se multiplier." },
          { label: "Dexaméthasone 0,1 % topique aux heures, seule, pour calmer vite la sclérite et l’anneau", correct: false, note: "Un stéroïde topique traite mal une sclérite et, sans couverture amoebicide, il aggrave l’infection cornéenne." }
        ]
      },
      {
        kind: "info",
        text: "Évolution : sous AINS oraux, la sclérite se calme en trois semaines. Le traitement amoebicide est diminué très lentement et poursuivi plusieurs mois après la disparition des signes d’activité, parce que les kystes survivent longtemps. Il reste une cicatrice stromale paracentrale : AV 6/12 (20/40) avec une lentille rigide. L’étui contaminé est jeté, et la patiente sait désormais qu’une lentille ne doit jamais toucher l’eau du robinet, de la douche ou de la piscine."
      }
    ],
    debrief: [
      "Lentilles + eau (robinet, douche, piscine) + douleur hors de proportion avec la rougeur = Acanthamoeba jusqu’à preuve du contraire.",
      "Une « kératite herpétique » qui ne répond pas chez un porteur de lentilles → revoir le diagnostic : pseudodendrites et périnévrite radiaire au début, infiltrat en anneau plus tard.",
      "Diagnostic : microscopie confocale (kystes à double paroi) et grattage épithélial pour PCR et culture sur gélose non nutritive avec E. coli ; le débridement aide aussi à traiter.",
      "Traitement : biguanide (PHMB ou chlorhexidine 0,02 %, en préparation magistrale) ± diamidine, aux heures puis diminution sur des mois ; douleur : AINS oraux et cycloplégique, jamais d’anesthésique topique à la maison.",
      "**Piège** : un stéroïde topique avant le diagnostic, ou à la place de l’amoebicide, aggrave le pronostic ; une greffe faite en phase active récidive souvent."
    ]
  },
  {
    id: "cas-b3",
    module: "B",
    title: "Flou au réveil : cataracte ou cornée ?",
    tags: ["frequent", "highyield"],
    intro: "Une retraitée de 68 ans consulte pour une vision embrouillée au réveil à l’œil droit, qui s’éclaircit vers la fin de l’avant-midi ; depuis quelques mois, le flou dure plus longtemps et les phares l’éblouissent la nuit. Sa mère a eu une « greffe de cornée » vers 70 ans. Elle n’a jamais été opérée des yeux. AV (acuité visuelle) mesurée à 9 h : 6/15 (20/50) OD (œil droit) et 6/9 (20/30) OS (œil gauche).",
    steps: [
      {
        kind: "exams",
        prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)",
        pick: 3,
        options: [
          { label: "Lampe à fente : cornées en fente fine et en rétroillumination, cristallins", result: "Gouttelettes sombres (guttae) confluentes au centre de la face postérieure de la cornée, aspect de « métal martelé » (beaten metal), OD > OS. OD : stroma central épaissi et légèrement trouble, plis de la Descemet, sans bulles épithéliales. Cataracte nucléaire 2+ aux deux yeux.", value: 2, note: "Les guttae sont de petites excroissances de la membrane de Descemet produites par des cellules endothéliales malades ; en rétroillumination (lumière renvoyée par le fond d’œil), elles paraissent sombres. L’endothélium, une seule couche de cellules qui pompe l’eau hors de la cornée, ne se régénère pas. Quand il faiblit, le stroma se gorge d’eau (œdème stromal), puis l’épithélium forme des bulles (œdème épithélial) : ici, œdème stromal débutant OD." },
          { label: "Biométrie optique (longueur axiale, kératométrie)", result: "Longueur axiale 23,2 mm ; kératométrie régulière ; calcul de lentille possible.", value: 1, note: "La biométrie mesure la longueur de l’œil et la courbure de la cornée pour choisir la puissance de la lentille intraoculaire. Indispensable avant l’opération, elle ne tranche pas entre cataracte seule et chirurgie combinée ; l’œdème peut d’ailleurs fausser la kératométrie." },
          { label: "Débuter de l’acétate de prednisolone 1 % 4 fois par jour (QID) pour faire régresser l’œdème", result: "Après un mois : flou matinal inchangé et PIO montée à 27 mmHg.", value: -1, note: "Les corticostéroïdes traitent l’œdème inflammatoire (rejet de greffe, uvéite), pas une pompe endothéliale défaillante. Ici, ils n’apportent rien et exposent à une hausse de la PIO (réponse cortisonique) et à la progression de la cataracte." },
          { label: "Gonioscopie", result: "Angle ouvert grade 3–4 aux deux yeux.", value: 0, note: "La gonioscopie montre l’angle par où s’évacue l’humeur aqueuse. Rien ici ne suggère un problème d’angle, et elle n’explique pas le flou matinal." },
          { label: "Microscopie spéculaire", result: "OD : densité non mesurable au centre (zones noires confluentes) ; en paracentral, environ 900 cellules/mm², avec polymégathisme et pléomorphisme. OS : 1700 cellules/mm², quelques guttae.", value: 2, note: "Ce microscope photographie la mosaïque endothéliale et calcule la densité (≈ 2500 cellules/mm² vers 60–70 ans), la variation de taille des cellules (polymégathisme) et la perte de leur forme hexagonale (pléomorphisme). Les guttae y forment des zones noires. La cornée décompense en général sous 400–500 cellules/mm² ; une densité basse prédit un œdème après une chirurgie de cataracte." },
          { label: "Pachymétrie et tomographie cornéenne de Scheimpflug", result: "OD : épaisseur centrale 640 µm ; carte pachymétrique avec perte des isopaques réguliers, point le plus mince déplacé loin du centre et dépression focale de la face postérieure. OS : 575 µm, isopaques réguliers et concentriques.", value: 2, note: "La tomographie de Scheimpflug (ex. Pentacam) photographie la cornée en coupes et cartographie son épaisseur. Une cornée normale est plus mince au centre, avec des anneaux d’égale épaisseur (isopaques) réguliers. Trois signes trahissent un œdème encore invisible à la lampe (œdème subclinique) : isopaques irréguliers, point le plus mince déplacé, dépression de la face postérieure. Ils prédisent un risque élevé de décompensation après une chirurgie de cataracte seule." },
          { label: "OCT maculaire", result: "Macula normale aux deux yeux, sans membrane épirétinienne ni dégénérescence maculaire.", value: 1, note: "L’OCT (tomographie par cohérence optique) donne une coupe de la rétine. Il élimine une autre cause de baisse visuelle avant d’opérer : utile, mais non décisif ici." }
        ]
      },
      {
        kind: "info",
        text: "Synthèse : guttae confluentes, densité endothéliale effondrée au centre, cornée épaissie à 640 µm et trois signes tomographiques d’œdème OD (ces signes dépistent l’œdème même quand la lampe à fente ne le voit pas encore : on parle alors d’œdème subclinique) ; cataracte nucléaire aux deux yeux. Le flou du matin s’explique : paupières fermées la nuit, les larmes ne s’évaporent pas, deviennent moins salées et la cornée absorbe plus d’eau ; pendant la journée, l’évaporation la déshydrate et la vision s’éclaircit.",
        figure: { type: "cornea", highlight: ["descemet", "endothelium"], edema: "stromal", guttae: true, scar: false }
      },
      {
        kind: "choice",
        prompt: "Quel diagnostic retiens-tu ?",
        options: [
          { label: "Dystrophie endothéliale de Fuchs (Fuchs endothelial corneal dystrophy) avec œdème cornéen OD, et cataracte nucléaire", correct: true, note: "Maladie héréditaire, souvent liée à une expansion de répétitions CTG du gène TCF4 et plus fréquente chez la femme : les cellules endothéliales meurent prématurément et déposent des guttae. Quand la pompe ne suffit plus, la cornée se gorge d’eau : flou au réveil, puis bulles épithéliales douloureuses. L’histoire familiale appuie le diagnostic." },
          { label: "Syndrome irido-cornéo-endothélial (ICE) avec œdème cornéen, et cataracte nucléaire", correct: false, note: "Atteinte habituellement unilatérale chez la femme d’âge moyen : endothélium d’aspect « argent martelé », mais aussi atrophie de l’iris, pupille déformée et déplacée (corectopie) et synéchies dans l’angle. Ici, l’atteinte est bilatérale et familiale, avec un iris normal." },
          { label: "Sécheresse oculaire avec film lacrymal instable, et cataracte nucléaire", correct: false, note: "La vision fluctue aussi, mais elle est souvent pire en fin de journée ou à l’écran, avec sensation de sable ; ni guttae ni épaississement cornéen." },
          { label: "Cataracte nucléaire seule, qui explique à elle seule le flou et l’éblouissement", correct: false, note: "La cataracte cause un flou progressif et de l’éblouissement, mais pas un flou plus marqué au réveil qui s’améliore dans la journée : c’est la signature d’un œdème cornéen." }
        ]
      },
      {
        kind: "choice",
        prompt: "Quelle chirurgie recommandes-tu pour l’œil droit ?",
        options: [
          { label: "Chirurgie de cataracte seule, en protégeant l’endothélium, et greffe plus tard au besoin", correct: false, note: "Option raisonnable si la cornée est compensée : épaisseur normale, aucun signe tomographique, densité suffisante, comme à l’OS pour l’instant. À l’OD, le risque de décompensation après une phaco seule est élevé." },
          { label: "Greffe de cornée transfixiante (PK, penetrating keratoplasty : remplacement de toute l’épaisseur de la cornée)", correct: false, note: "La PK impose des points de suture, une récupération lente, de l’astigmatisme et le risque de rejet le plus élevé (PK > DSAEK > DMEK). On la réserve aux cicatrices du stroma ; dans le Fuchs, seul l’endothélium est malade." },
          { label: "Chirurgie combinée le même jour (« triple DMEK ») : phacoémulsification, lentille intraoculaire et DMEK", correct: true, note: "La phacoémulsification retire le cristallin opacifié par ultrasons et le remplace par une lentille intraoculaire. La DMEK (Descemet membrane endothelial keratoplasty) remplace seulement la couche malade : le chirurgien retire la Descemet de la patiente avec ses guttae (descemetorhexis), puis injecte un greffon très mince fait de la Descemet et de l’endothélium d’un donneur, qu’il déroule et plaque avec une bulle d’air ou de gaz. Avec un œdème confirmé à la tomographie, une densité basse et 640 µm d’épaisseur, une phaco seule risque de faire décompenser la cornée : on fait tout en un temps." },
          { label: "Solution saline hypertonique 5 % et sèche-cheveux tenu à bout de bras le matin, sans chirurgie", correct: false, note: "Ces mesures attirent l’eau hors de l’épithélium et aident au début, quand le flou ne dure qu’une heure. Elles ne traitent ni l’endothélium défaillant ni la cataracte, qui gênent déjà ses activités." }
        ]
      },
      {
        kind: "choice",
        prompt: "Pour la lentille intraoculaire, quelle cible réfractive choisis-tu ?",
        options: [
          { label: "L’emmétropie (0 D), puisque la DMEK ne modifie pas la réfraction", correct: false, note: "La DMEK modifie peu la réfraction, mais pas de zéro : même léger, le virage hypermétropique laisserait l’œil hypermétrope." },
          { label: "Une légère hypermétropie (+1 D), car le greffon ajoute de l’épaisseur et de la puissance", correct: false, note: "Le greffon DMEK est extrêmement mince et n’ajoute pas de puissance ; le décalage attendu va vers l’hypermétropie, donc on vise du côté myope." },
          { label: "Une myopie de −3 D à l’OD pour qu’elle lise sans lunettes", correct: false, note: "Cela créerait une grande différence de réfraction avec l’autre œil (anisométropie), mal tolérée, sauf projet de monovision discuté d’avance." },
          { label: "Une légère myopie (environ −0,5 à −1,0 D), car la DMEK entraîne un léger virage hypermétropique", correct: true, note: "En se dégonflant, la cornée change la courbure de sa face postérieure, ce qui diminue un peu sa puissance totale : l’œil devient légèrement plus hypermétrope que prévu au calcul. Ce virage est plus marqué après une DSAEK (Descemet stripping automated endothelial keratoplasty : greffon qui emporte aussi une fine couche de stroma du donneur), dont le greffon, plus épais en périphérie qu’au centre, agit comme une petite lentille divergente. Viser un peu myope compense ce décalage et évite une hypermétropie résiduelle gênante." }
        ]
      },
      {
        kind: "info",
        text: "Rebondissement : au jour 3 après la triple DMEK, elle voit moins bien qu’au jour 1 et la bulle d’air s’est résorbée. L’OCT du segment antérieur (AS-OCT, coupe de la cornée par la lumière) montre que le greffon s’est décollé de la face postérieure de la cornée sur environ 40 % de sa surface, y compris dans l’axe visuel ; le stroma est œdémateux au-dessus du décollement et clair ailleurs. C’est la complication la plus fréquente de la DMEK : le greffon tient grâce à la bulle puis à sa propre pompe, et il peut se décoller si la bulle disparaît trop tôt ou si la position sur le dos n’est pas respectée. Le schéma montre l’œdème du stroma au-dessus de la zone décollée ; il n’y a plus de guttae, car la Descemet malade a été retirée.",
        figure: { type: "cornea", highlight: ["descemet", "endothelium"], edema: "stromal", guttae: false, scar: false }
      },
      {
        kind: "choice",
        prompt: "Que proposes-tu ?",
        options: [
          { label: "Observation avec position sur le dos : les décollements se recollent toujours seuls", correct: false, note: "Un petit décollement périphérique, hors de l’axe visuel, peut être observé. Celui-ci est étendu et central : sans nouvelle bulle, le greffon risque d’échouer." },
          { label: "Rebubbling : réinjecter de l’air (ou du SF6) dans la chambre antérieure, position sur le dos, puis contrôle de la PIO", correct: true, note: "Le rebubbling (nouvelle bulle d’air, ou de SF6 : hexafluorure de soufre, un gaz qui se résorbe plus lentement que l’air) replaque le greffon ; il se fait sous anesthésie topique, à la lampe à fente ou en salle : la bulle pousse le greffon contre le stroma pendant que l’endothélium se remet à pomper. Un décollement étendu ou central se recolle rarement seul. On mesure la PIO dans les heures suivantes, car une grosse bulle peut bloquer la pupille ; une iridotomie inférieure faite pendant la chirurgie prévient ce bloc." },
          { label: "Nouvelle DMEK immédiate avec un autre greffon, puisque celui-ci s’est décollé", correct: false, note: "On tente d’abord le rebubbling, simple et souvent efficace. Une regreffe se discute si le greffon ne se recolle pas ou n’arrive pas à éclaircir la cornée (échec primaire)." },
          { label: "Acétate de prednisolone 1 % aux heures, car un œdème localisé du greffon signe un rejet", correct: false, note: "Le rejet survient plus tard (semaines à mois), avec rougeur, précipités sur l’endothélium et œdème. Ici, le problème est mécanique, pas immunitaire." }
        ]
      },
      {
        kind: "info",
        text: "Évolution : après le rebubbling, le greffon reste plaqué. À 1 mois, la cornée est claire (525 µm) et la réfraction est de −0,25 D pour une cible de −0,75 D, soit le léger virage hypermétropique attendu ; AV 6/7,5 (20/25). Elle garde des gouttes de stéroïde, diminuées lentement sur plusieurs mois pour prévenir le rejet, et connaît la consigne « RSVP » : Rougeur, Sensibilité à la lumière, Vision qui baisse, douleur (Pain) → consultation le jour même."
      }
    ],
    debrief: [
      "Flou au réveil qui s’améliore dans la journée + guttae = Fuchs avec œdème cornéen ; l’endothélium ne se régénère pas.",
      "Avant une cataracte chez un patient atteint de Fuchs : microscopie spéculaire, pachymétrie et tomographie de Scheimpflug ; isopaques irréguliers, point le plus mince déplacé et dépression postérieure = œdème subclinique.",
      "Œdème subclinique ou cornée épaissie → triple DMEK ; cornée compensée → cataracte seule possible, en protégeant l’endothélium.",
      "DMEK : greffon de Descemet et d’endothélium, rejet le plus faible (PK > DSAEK > DMEK), récupération rapide ; viser une légère myopie à cause du virage hypermétropique.",
      "Décollement du greffon = complication la plus fréquente → rebubbling ; surveiller la PIO après toute bulle et enseigner « RSVP »."
    ]
  },
  {
    id: "cas-b4",
    module: "B",
    title: "L’ado qui se frotte les yeux",
    tags: ["highyield", "frequent", "piege"],
    intro: "Un garçon de 15 ans, asthmatique et eczémateux (terrain atopique : tendance aux allergies), consulte avec sa mère parce que sa vision de loin baisse depuis un an malgré trois changements de lunettes en 18 mois. L’optométriste note un astigmatisme qui augmente vite à l’œil droit et des images dédoublées (« images fantômes »). Il se frotte les yeux plusieurs fois par jour à cause de démangeaisons, surtout au printemps. AV (acuité visuelle) avec lunettes : 6/12 (20/40) OD (œil droit) et 6/7,5 (20/25) OS (œil gauche).",
    steps: [
      {
        kind: "exams",
        prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)",
        pick: 3,
        options: [
          { label: "Topographie de courbure (disque de Placido, carte axiale)", result: "OD : cambrure inférieure, nœud papillon asymétrique aux axes déviés. OS : légère asymétrie inférieure.", value: 1, note: "La carte axiale montre la courbure de la face avant : les couleurs chaudes indiquent une zone cambrée. Évocatrice, mais elle ignore la face postérieure, où le kératocône commence souvent." },
          { label: "Tomographie cornéenne de Scheimpflug (élévations antérieure et postérieure, carte pachymétrique)", result: "OD : élévation postérieure nettement anormale, point le plus mince à 455 µm déplacé en inférotemporal, indice BAD-D très anormal, Kmax (cambrure maximale) 54 D. OS : élévation postérieure discrètement anormale, point le plus mince à 495 µm, BAD-D anormal.", value: 2, note: "La topographie ne mesure que la courbure de la face avant ; la tomographie mesure aussi la face arrière (élévation postérieure) et l’épaisseur en tout point. Le 2e consensus mondial (2025) reconnaît l’élévation postérieure et l’amincissement au point le plus mince comme marqueurs de la maladie. Le BAD-D (indice de Belin-Ambrósio) combine ces données pour dépister une ectasie, c’est-à-dire une cornée qui s’amincit et se déforme." },
          { label: "Nouvelle prescription de lunettes et contrôle dans un an", result: "Un an plus tard : Kmax 58 D, point le plus mince 420 µm, AV 6/24 (20/80) avec lunettes.", value: -1, note: "Chez l’enfant et l’adolescent, le kératocône progresse vite. Attendre fait perdre de l’épaisseur et de la vision qu’on ne récupère pas : le 2e consensus recommande de traiter dès le diagnostic à cet âge." },
          { label: "Microscopie spéculaire", result: "Endothélium normal : 3100 cellules/mm².", value: 0, note: "Le kératocône touche le stroma, pas l’endothélium : cet examen n’aide ni au diagnostic ni à la décision." },
          { label: "Lampe à fente et rétinoscopie", result: "OD : stries de Vogt, anneau de Fleischer partiel, amincissement paracentral inférieur ; reflet « en ciseaux » à la rétinoscopie. Conjonctive tarsienne : papilles (petites bosses inflammatoires) d’allergie aux deux yeux.", value: 2, note: "Les stries de Vogt sont de fines lignes verticales dans le stroma profond qui disparaissent quand on appuie doucement sur le globe ; l’anneau de Fleischer est un dépôt brun de fer à la base du cône, mieux vu en lumière bleu cobalt. La rétinoscopie (lecture du reflet lumineux de la pupille) montre un reflet qui se ferme comme des ciseaux. Les signes de Munson (paupière inférieure déformée en V au regard vers le bas) et de Rizzuti (reflet conique sur l’iris nasal) apparaissent plus tard. Les papilles confirment l’allergie qui pousse au frottement." },
          { label: "Pachymétrie ultrasonique au centre seulement", result: "Épaisseur centrale 495 µm OD.", value: 0, note: "Elle mesure un seul point au centre et manque le point le plus mince, souvent excentré vers le bas ; la carte pachymétrique de la tomographie est bien plus informative." }
        ]
      },
      {
        kind: "info",
        text: "Synthèse : cambrure inférieure asymétrique, élévation postérieure anormale, point le plus mince aminci et déplacé, stries de Vogt et anneau de Fleischer OD ; signes débutants à la tomographie OS. Le schéma montre la carte de courbure axiale de l’OD : une zone chaude (cambrée) en bas, avec un nœud papillon asymétrique aux axes déviés.",
        figure: { type: "topo", pattern: "kc-inferior" }
      },
      {
        kind: "choice",
        prompt: "Quel diagnostic retiens-tu ?",
        options: [
          { label: "Dégénérescence marginale pellucide (pellucid marginal degeneration)", correct: false, note: "Amincissement en bande à 1–2 mm du limbe inférieur, plutôt chez l’adulte, avec astigmatisme inverse et aspect topographique en « pince de crabe » (crab claw) ; l’épaisseur centrale reste normale." },
          { label: "Astigmatisme régulier direct d’évolution physiologique", correct: false, note: "Le nœud papillon serait symétrique et vertical, sans amincissement ni élévation postérieure anormale, et l’astigmatisme ne grimperait pas d’une prescription à l’autre." },
          { label: "Kératocône (keratoconus) bilatéral asymétrique, plus avancé à l’OD", correct: true, note: "Le kératocône est un amincissement progressif du stroma qui se bombe en cône et crée un astigmatisme irrégulier, que les lunettes corrigent mal. Il débute souvent à l’adolescence, est presque toujours bilatéral et asymétrique, et il est favorisé par le frottement des yeux, l’atopie et une prédisposition familiale." },
          { label: "Kératoglobe (cornée amincie et bombée dans son ensemble)", correct: false, note: "Amincissement diffus de toute la cornée, surtout en périphérie, avec une cornée globuleuse souvent présente dès l’enfance et un risque de rupture au moindre traumatisme." }
        ]
      },
      {
        kind: "choice",
        prompt: "Que recommandes-tu ?",
        options: [
          { label: "CXL (cross-linking du collagène cornéen) à l’OD dès maintenant, sans attendre une progression documentée ; cesser le frottement", correct: true, note: "La CXL rigidifie la cornée : on retire l’épithélium (epi-off), on instille de la riboflavine 0,1 % (vitamine B2), puis on irradie aux UV-A, ce qui crée des liens entre les fibres de collagène. Protocoles courants : Dresde (3 mW/cm² × 30 min) ou accéléré (9 mW/cm² × 10 min). Le 2e consensus mondial (2025) recommande la CXL chez l’enfant dès le diagnostic, parce que la maladie progresse vite à cet âge ; cesser de se frotter les yeux aide, mais ne doit jamais retarder la CXL. On planifie ensuite l’OS, qui montre déjà des signes tomographiques, et on traite l’allergie pour couper l’envie de se frotter. Au Québec, la CXL est offerte dans des centres spécialisés ; la couverture publique varie (à vérifier localement)." },
          { label: "Attendre une progression documentée sur deux tomographies à 6 mois d’intervalle avant toute CXL", correct: false, note: "Approche classique, encore utilisée chez l’adulte : progression = au moins deux critères parmi bombement de la face antérieure, bombement de la face postérieure et amincissement (consensus 2015). Chez l’enfant, le 2e consensus (2025) dit de traiter au diagnostic." },
          { label: "Lentilles rigides seulement, car la CXL est réservée aux adultes dont la cornée a fini de changer", correct: false, note: "Les lentilles corrigent la vision, mais n’arrêtent pas la progression. La CXL se fait chez l’enfant et l’adolescent, chez qui elle est même prioritaire." },
          { label: "Segments d’anneaux intracornéens (ICRS) à l’OD pour aplatir la cornée et stopper la maladie", correct: false, note: "Les segments d’anneaux intracornéens (petits arcs de plastique insérés dans le stroma) aplatissent et régularisent la cornée et peuvent améliorer la vision, mais ils n’arrêtent pas la progression." }
        ]
      },
      {
        kind: "info",
        text: "Rebondissement : la CXL de l’OD est faite et l’OD reste stable. La famille annule ensuite le rendez-vous de l’OS, et l’adolescent est perdu de vue. Il revient trois ans plus tard, à 18 ans, après une saison d’allergies où il s’est beaucoup frotté les yeux : depuis deux jours, l’œil gauche est soudainement flou, larmoyant et douloureux, la cornée est blanche et très épaissie au centre, avec des bulles épithéliales, et l’AV OS est à CD (compte les doigts) à 1 m. C’est un **hydrops cornéen aigu (acute corneal hydrops)** : la membrane de Descemet, étirée par le cône, s’est fissurée et l’humeur aqueuse inonde le stroma.",
        figure: { type: "cornea", highlight: ["stroma", "descemet"], edema: "both", guttae: false, scar: false }
      },
      {
        kind: "choice",
        prompt: "Comment prends-tu en charge cet hydrops ?",
        options: [
          { label: "Greffe de cornée transfixiante (PK, remplacement de toute l’épaisseur de la cornée) en urgence", correct: false, note: "Sur une cornée œdémateuse et enflammée, la greffe est plus risquée et souvent inutile : beaucoup d’yeux retrouvent une vision corrigeable en lentille après la résolution." },
          { label: "Traitement conservateur : salin hypertonique 5 %, cycloplégique, stéroïde topique, coque contre le frottement ; discuter une injection de gaz dans la chambre antérieure", correct: true, note: "Le stéroïde topique calme l’inflammation et améliore le confort ; la coque empêche le frottement. L’hydrops se résorbe seul en quelques semaines à quelques mois, quand l’endothélium recouvre la déchirure ; il laisse souvent une cicatrice. La solution hypertonique attire l’eau hors de l’épithélium ; le cycloplégique (goutte qui paralyse le muscle ciliaire) calme la douleur. Une injection intracamérulaire d’air ou de gaz (ex. SF6, C3F8) plaque la Descemet et raccourcit la durée de l’œdème." },
          { label: "CXL en urgence pour rigidifier la cornée, arrêter l’œdème et prévenir une récidive", correct: false, note: "La CXL n’est pas indiquée pendant un hydrops : la cornée est gorgée d’eau et la Descemet est rompue. Elle se discute plus tard si la maladie progresse." },
          { label: "Gouttes antibiotiques fortifiées aux heures, car une cornée blanche et douloureuse est infectée jusqu’à preuve du contraire", correct: false, note: "Cette cornée blanche n’est pas infectée : ni infiltrat ni pus. Sa blancheur vient de l’eau qui gorge le stroma (œdème), pas de globules blancs. On surveille toutefois une surinfection si des bulles épithéliales se rompent." }
        ]
      },
      {
        kind: "choice",
        prompt: "Trois mois plus tard, l’hydrops est résorbé. Il reste une cicatrice stromale paracentrale, hors de l’axe, et une cornée très irrégulière ; AV OS 6/60 (20/200) avec lunettes, 6/12 (20/40) au trou sténopéique (petit trou qui contourne les défauts optiques). Que proposes-tu pour réhabiliter la vision ?",
        options: [
          { label: "Greffe lamellaire antérieure profonde (DALK) d’emblée, pour remplacer le stroma déformé", correct: false, note: "La DALK (deep anterior lamellar keratoplasty) remplace le stroma en gardant la Descemet et l’endothélium du patient, d’où moins de rejet qu’une PK. Elle se discute si les lentilles échouent ou si une cicatrice centrale limite la vision ; ici, on essaie d’abord les lentilles." },
          { label: "Nouvelles lunettes avec une correction plus forte de l’astigmatisme mesuré", correct: false, note: "Les lunettes corrigent un astigmatisme régulier, pas une surface irrégulière : l’AV resterait basse." },
          { label: "Chirurgie réfractive au laser (PRK ou LASIK) pour régulariser la surface et l’astigmatisme", correct: false, note: "Contre-indiquée : la PRK (laser appliqué en surface, après retrait de l’épithélium) et le LASIK (laser sous un volet de cornée) retirent du stroma ; sur une cornée déjà amincie et fragile, cela aggrave l’ectasie." },
          { label: "Lentille sclérale (grande lentille rigide appuyée sur la sclère) ou lentille rigide perméable aux gaz", correct: true, note: "La lentille sclérale garde un réservoir de liquide devant la cornée. Une lentille rigide remplace la surface irrégulière par une surface optique lisse, et le liquide ou les larmes sous la lentille comblent les irrégularités. La lentille sclérale ne touche pas la cornée : elle est confortable sur un cône avancé ou cicatrisé. C’est l’étape à franchir avant toute greffe." }
        ]
      },
      {
        kind: "info",
        text: "Évolution : avec une lentille sclérale, l’AV OS atteint 6/9 (20/30). Les tomographies de suivi restent stables aux deux yeux ; une CXL de l’OS est discutée avec le cornéologue, selon l’épaisseur restante et la cicatrice. Il garde un traitement antiallergique (antihistaminique et stabilisateur des mastocytes en gouttes) pour ne plus se frotter les yeux. Comme le kératocône a une composante familiale, on propose une tomographie à ses frères et sœurs."
      }
    ],
    debrief: [
      "Astigmatisme qui augmente chez un adolescent atopique qui se frotte les yeux = kératocône jusqu’à preuve du contraire → tomographie (élévation postérieure, point le plus mince), pas seulement de nouvelles lunettes.",
      "2e consensus mondial (2025) : chez l’enfant, CXL dès le diagnostic sans attendre la progression ; chez l’adulte, CXL si progression topographique ou tomographique.",
      "Cesser le frottement et traiter l’allergie, mais ne jamais retarder la CXL ; protocoles de Dresde (3 mW/cm² × 30 min) ou accéléré (9 mW/cm² × 10 min). Le suivi des jeunes est crucial.",
      "Hydrops aigu = rupture de la Descemet → traitement conservateur ± gaz intracamérulaire ; ni greffe ni CXL en urgence.",
      "Réhabilitation : lentille rigide ou sclérale d’abord, greffe (souvent DALK) si échec ; jamais de chirurgie réfractive ablative sur un kératocône."
    ]
  },
  {
    id: "cas-c1",
    module: "C",
    title: "Halos après le cinéma",
    tags: ["urgent", "highyield"],
    intro: "Une femme de 62 ans, hypermétrope (+3,50 D aux deux yeux), arrive à l’urgence à 23 h : en sortant d’un film au cinéma, elle a ressenti une douleur intense à l’œil droit, puis une céphalée frontale, des nausées et des vomissements. Elle voit des halos colorés autour des lumières. Le médecin de l’urgence pensait d’abord à une migraine, mais l’œil droit est très rouge. AV (acuité visuelle) : 6/60 (20/200) OD (œil droit) et 6/7,5 (20/25) OS (œil gauche).",
    steps: [
      {
        kind: "exams",
        prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)",
        pick: 3,
        options: [
          { label: "Revue de la médication récente", result: "Aucun topiramate ; elle a pris hier un antihistaminique contre le rhume.", value: 1, note: "Les antihistaminiques, anticholinergiques et décongestionnants dilatent la pupille et peuvent déclencher une crise. Le topiramate cause plutôt une fermeture bilatérale par effusion ciliochoroïdienne (le corps ciliaire gonfle et pousse le cristallin vers l’avant) : on arrête alors le médicament et on donne un cycloplégique, sans pilocarpine ni iridotomie." },
          { label: "Lampe à fente des deux yeux, avec test de van Herick", result: "OD : œdème épithélial microkystique (cornée « en verre dépoli »), chambre antérieure très peu profonde au centre et en périphérie, pupille en semi-mydriase (5–6 mm) aréactive, rougeur en couronne autour du limbe. OS : chambre peu profonde, van Herick grade 1.", value: 2, note: "Le test de van Herick compare, avec une fente fine au limbe, la profondeur de la chambre antérieure périphérique à l’épaisseur de la cornée : grade 1 = moins d’un quart d’épaisseur cornéenne, donc angle étroit. L’œil adelphe (l’autre œil) partage la même anatomie à risque : indice clé d’une fermeture primaire. La pupille fixe en semi-mydriase signe un sphincter de l’iris ischémique." },
          { label: "Tomodensitométrie (TDM) cérébrale pour céphalée et vomissements", result: "Normale ; deux heures perdues et PIO toujours à 58 mmHg.", value: -1, note: "Céphalée + vomissements + œil rouge + halos = crise de fermeture de l’angle jusqu’à preuve du contraire, et mesurer la PIO prend une minute. L’imagerie retarde le traitement et peut coûter la vision." },
          { label: "Tonométrie aux deux yeux", result: "PIO 58 mmHg OD et 17 mmHg OS.", value: 2, note: "La tonométrie mesure la PIO (pression intraoculaire, normale 10–21 mmHg). Une PIO aussi haute écrase la circulation du nerf optique et peut boucher l’artère centrale de la rétine en quelques heures : c’est une urgence." },
          { label: "Biométrie (longueur axiale, profondeur de la chambre antérieure, épaisseur du cristallin)", result: "Longueur axiale 21,8 mm ; chambre antérieure 2,1 mm ; cristallin épais (5,1 mm) aux deux yeux.", value: 1, note: "L’AAO (2026) met de l’avant ces facteurs de risque biométriques : œil court, chambre peu profonde, cristallin épais. Utile pour planifier la suite, pas urgent ce soir." },
          { label: "Champ visuel automatisé", result: "Impossible à faire de façon fiable ce soir.", value: 0, note: "Aucun intérêt en phase aiguë." },
          { label: "Gonioscopie des deux yeux", result: "OD : angle fermé sur 360°, aucune structure visible, vue voilée par l’œdème ; l’indentation l’ouvre partiellement. OS : trabéculum pigmenté invisible sur 3 quadrants sans indentation, qui s’ouvre à l’indentation, sans synéchies.", value: 2, note: "La gonioscopie montre l’angle iridocornéen (iridocorneal angle), zone de drainage de l’humeur aqueuse. L’AAO (2026) recommande de la faire en pièce sombre avec un petit faisceau, pour ne pas contracter la pupille. L’indentation (appuyer avec un verre à 4 miroirs) distingue une apposition qui s’ouvre de synéchies antérieures périphériques (PAS : adhérences entre l’iris et l’angle) qui restent fermées." },
          { label: "Fond d’œil OD", result: "Vue floue à travers la cornée œdémateuse ; papille rosée, un peu œdémateuse.", value: 1, note: "Utile pour évaluer le nerf optique, mais la vue est limitée ce soir ; on le reprendra quand la cornée sera claire." }
        ]
      },
      {
        kind: "info",
        text: "Synthèse : PIO 58 mmHg, cornée œdémateuse, chambre antérieure très peu profonde, pupille fixe en semi-mydriase et angle fermé sur 360° à l’OD ; angle étroit à l’OS. Mécanisme : dans cet œil court et hypermétrope au cristallin épais, la pénombre du cinéma a dilaté la pupille. L’iris, collé au cristallin, bloque le passage de l’humeur aqueuse vers l’avant (bloc pupillaire) ; la pression accumulée derrière l’iris le pousse vers l’avant et il bouche le trabéculum.",
        figure: { type: "slit", pattern: "aacc" }
      },
      {
        kind: "choice",
        prompt: "Quel diagnostic retiens-tu ?",
        options: [
          { label: "Glaucome néovasculaire déclenché par une ischémie de la rétine", correct: false, note: "Des néovaisseaux poussent sur l’iris et dans l’angle après une ischémie de la rétine (diabète, occlusion veineuse) ; il n’y en a aucun ici." },
          { label: "Fermeture secondaire de l’angle par effusion ciliochoroïdienne au topiramate", correct: false, note: "Atteinte bilatérale avec myopisation brutale, chez un patient qui vient de commencer le topiramate ; ici, l’atteinte est unilatérale chez une hypermétrope, sans ce médicament." },
          { label: "Uvéite antérieure hypertensive (inflammation qui fait monter la PIO)", correct: false, note: "On verrait des cellules et des précipités sur l’endothélium, avec une chambre profonde et un angle ouvert à la gonioscopie." },
          { label: "Migraine avec aura visuelle (halos) et œil rouge réactionnel", correct: false, note: "La migraine ne donne ni œil rouge, ni cornée œdémateuse, ni PIO à 58 mmHg." },
          { label: "Crise aiguë de fermeture primaire de l’angle (acute primary angle closure) OD par bloc pupillaire", correct: true, note: "« Primaire » veut dire que la cause est l’anatomie de l’œil (œil court, cristallin épais), sans autre maladie ; le bloc pupillaire est le mécanisme le plus fréquent. Selon la classification internationale ISGEO (International Society of Geographical and Epidemiological Ophthalmology), sans atteinte du nerf on parle de PAC (primary angle closure) ; avec une neuropathie glaucomateuse, de PACG (glaucome par fermeture de l’angle)." }
        ]
      },
      {
        kind: "choice",
        prompt: "Quel traitement immédiat prescris-tu ?",
        options: [
          { label: "Pilocarpine 2 % aux 5 minutes d’emblée pour ouvrir l’angle, puis timolol et acétazolamide si la PIO ne baisse pas en une heure", correct: false, note: "À 58 mmHg, le sphincter ischémique ne répond pas ; les doses répétées peuvent pousser le cristallin vers l’avant et causer des effets cholinergiques (sueurs, crampes, bradycardie). Et attendre une heure avant de réduire la production d’humeur aqueuse fait perdre un temps précieux." },
          { label: "Iridotomie au laser immédiate ce soir, avant toute baisse de la PIO, pour lever le bloc à la source", correct: false, note: "La cornée œdémateuse et l’inflammation rendent le laser difficile et risqué : on baisse d’abord la PIO pour éclaircir la cornée, puis on fait le laser." },
          { label: "Baisse médicale par étapes : timolol, brimonidine et dorzolamide en gouttes, acétazolamide 500 mg, prednisolone 1 % ; pilocarpine seulement une fois la PIO abaissée", correct: true, note: "Schéma complet : timolol 0,5 %, brimonidine (ou apraclonidine) et dorzolamide en gouttes ; acétazolamide 500 mg par la bouche (PO) ou par voie intraveineuse (IV), après avoir vérifié l’allergie aux sulfamides, la fonction rénale, le potassium et l’absence de drépanocytose ; acétate de prednisolone 1 % ; PIO recontrôlée aux 30–60 min ; pilocarpine 1–2 % une fois la PIO abaissée ; mannitol IV 1–2 g/kg si la PIO résiste. On ferme d’abord le robinet : le timolol (bêtabloquant), la brimonidine (alpha-2 agoniste), le dorzolamide et l’acétazolamide (inhibiteurs de l’anhydrase carbonique) réduisent la production d’humeur aqueuse ; le stéroïde calme l’inflammation. La pilocarpine (myotique : elle contracte la pupille et tire l’iris loin de l’angle) n’agit qu’une fois la PIO abaissée, car un sphincter ischémique ne répond pas. Le mannitol IV déshydrate le vitré si rien ne suffit (prudence en insuffisance cardiaque ou rénale)." },
          { label: "Atropine 1 % pour reposer l’œil et soulager la douleur, avec timolol et acétazolamide 500 mg", correct: false, note: "L’atropine dilate la pupille et aggrave le bloc pupillaire d’une fermeture primaire. Elle sert dans d’autres glaucomes (néovasculaire, glaucome malin), pas ici." }
        ]
      },
      {
        kind: "choice",
        prompt: "Deux heures plus tard, la PIO OD est à 22 mmHg, la cornée s’éclaircit et la pupille réagit à la pilocarpine. Que planifies-tu ?",
        options: [
          { label: "Iridotomie périphérique au laser (LPI) aux deux yeux, l’OD dès que la cornée le permet ; PIO contrôlée après chaque laser", correct: true, note: "La LPI (laser peripheral iridotomy) perce un petit trou dans l’iris périphérique : l’humeur aqueuse contourne la pupille, l’iris s’aplatit et l’angle s’ouvre. L’œil adelphe a la même anatomie : environ la moitié des yeux adelphes font une crise en 5 ans sans LPI. On confirme que le trou est perméable (flux ou pigment visibles) et on mesure la PIO 30 min à 2 h après, car elle peut monter après le laser." },
          { label: "Iridotomie au laser à l’OD seulement, puisque l’OS a une PIO normale et n’a jamais fait de crise", correct: false, note: "Une PIO normale ne protège pas : l’OS a un angle étroit et le même risque anatomique de crise." },
          { label: "Pilocarpine 1 % à long terme aux deux yeux, sans laser, pour garder les pupilles petites la nuit", correct: false, note: "La pilocarpine chronique donne myopie, douleur au front et vision sombre, et elle ne règle pas le bloc pupillaire de façon fiable ; la LPI est le traitement de base." },
          { label: "Trabéculectomie à l’OD dans la semaine, pour éviter toute récidive de crise et les gouttes", correct: false, note: "Une chirurgie filtrante dans un œil enflammé à l’angle fermé comporte des risques élevés, et elle est inutile tant que le bloc pupillaire n’est pas traité." }
        ]
      },
      {
        kind: "info",
        text: "Rebondissement : six semaines plus tard, les deux LPI sont perméables (la lueur du fond d’œil passe par le trou), mais la PIO OD est à 26 mmHg. À la gonioscopie en pièce sombre, l’angle OD reste fermé par apposition sur trois quadrants. L’iris ne bombe plus vers l’avant (la LPI a levé le bloc pupillaire), mais sa racine reste plaquée contre le trabéculum, et la chambre demeure peu profonde au centre à cause du cristallin épais ; l’indentation fait apparaître un « double dos d’âne » (double hump sign). L’UBM (biomicroscopie ultrasonore : échographie à haute fréquence qui voit derrière l’iris) montre des procès ciliaires placés trop en avant, sans espace (sulcus) derrière l’iris, qui poussent la racine de l’iris contre le trabéculum : c’est un **iris plateau (plateau iris)**, associé ici à une composante cristallinienne (mécanisme mixte).",
        figure: { type: "gonio", grade: 0, pas: false, pigment: "light", nv: false, recession: false }
      },
      {
        kind: "choice",
        prompt: "Que proposes-tu maintenant ?",
        options: [
          { label: "Refaire une iridotomie plus grande, ou une deuxième, pour mieux égaliser les pressions de part et d’autre de l’iris", correct: false, note: "La LPI actuelle est perméable : l’agrandir ou en ajouter une ne change rien à un mécanisme qui ne vient plus de la pupille (le bloc pupillaire est déjà levé)." },
          { label: "Trabéculoplastie sélective au laser (SLT) pour faire baisser la PIO résiduelle", correct: false, note: "La SLT agit sur le trabéculum et exige un angle ouvert où on le voit ; ici, l’iris le recouvre." },
          { label: "Observation avec une goutte de timolol : la LPI est perméable, le mécanisme de la crise est réglé", correct: false, note: "Une apposition persistante finit par créer des synéchies (PAS) définitives, une hausse chronique de la PIO, puis un glaucome par fermeture de l’angle." },
          { label: "Extraction du cristallin (phacoémulsification avec lentille intraoculaire) ; iridoplastie au laser si la chirurgie doit attendre", correct: true, note: "Le problème n’est plus le bloc pupillaire, réglé par la LPI, mais un corps ciliaire placé en avant et un cristallin épais qui encombrent l’angle. Retirer le cristallin libère beaucoup d’espace et ouvre l’angle ; l’essai EAGLE a montré que l’extraction du cristallin clair fait mieux que la LPI chez les patients PAC avec PIO ≥ 30 mmHg ou PACG, de 50 ans et plus. L’iridoplastie (brûlures laser sur l’iris périphérique, qui le rétractent loin de l’angle) est une solution d’attente." }
        ]
      },
      {
        kind: "info",
        text: "Évolution : après la phacoémulsification OD, la chambre antérieure s’approfondit, l’angle s’ouvre et la PIO est à 15 mmHg sans gouttes ; AV 6/6 (20/20). Une microscopie spéculaire est faite, car une crise peut réduire la densité endothéliale. L’OS, qui montre aussi un iris plateau à l’UBM, est suivi par gonioscopie, et l’extraction de son cristallin est discutée à son tour. On enseigne les symptômes d’alarme : halos, douleur, rougeur, vision floue."
      }
    ],
    debrief: [
      "Céphalée, vomissements, œil rouge et halos chez un hypermétrope = crise de fermeture de l’angle : mesurer la PIO avant toute imagerie.",
      "Baisse médicale par étapes : timolol, brimonidine, dorzolamide, acétazolamide 500 mg (sulfamides, rein, potassium), stéroïde ; pilocarpine 1–2 % seulement quand la PIO a baissé ; mannitol si réfractaire.",
      "LPI aux **deux** yeux : environ la moitié des yeux adelphes font une crise en 5 ans sans LPI ; confirmer la perméabilité et mesurer la PIO 30 min à 2 h après.",
      "Angle encore fermé malgré une LPI perméable → penser iris plateau (UBM, double dos d’âne) ou composante cristallinienne → extraction du cristallin (EAGLE) ou iridoplastie.",
      "Gonioscopie dynamique en pièce sombre, petit faisceau : base du diagnostic et du suivi (AAO 2026)."
    ]
  },
  {
    id: "cas-c2",
    module: "C",
    title: "PIO à 26 et encoche inférieure",
    tags: ["frequent", "highyield"],
    intro: "Un homme de 58 ans d’origine haïtienne est dirigé par son optométriste pour une PIO (pression intraoculaire) de 26 mmHg OD (œil droit) et 24 mmHg OS (œil gauche), avec une excavation papillaire (rapport cup/disc vertical, C/D) de 0,75 OD et une encoche inférieure du bord neurorétinien. Il n’a aucun symptôme visuel et conduit tous les jours pour son travail. Son frère aîné est « presque aveugle d’un glaucome ». Il prend un antihypertenseur le soir. AV (acuité visuelle) : 6/6 (20/20) aux deux yeux.",
    steps: [
      {
        kind: "exams",
        prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)",
        pick: 3,
        options: [
          { label: "Pachymétrie cornéenne centrale", result: "512 µm OD et 515 µm OS.", value: 1, note: "La pachymétrie mesure l’épaisseur de la cornée. Une cornée mince fait sous-estimer la PIO au Goldmann et constitue un facteur de risque en soi (essai OHTS, Ocular Hypertension Treatment Study) ; on en tient compte sans corriger la PIO par une formule." },
          { label: "Débuter le timolol 0,5 % 2 fois par jour (BID) aujourd’hui et compléter le bilan plus tard", result: "PIO 20 mmHg au contrôle, mais aucun champ ni OCT de référence pour juger plus tard de la progression.", value: -1, note: "Traiter avant le bilan de base prive de point de comparaison. De plus, le timolol n’est pas la première ligne (AAO 2026 : SLT ou analogue des prostaglandines) et exige de vérifier l’asthme, la MPOC (maladie pulmonaire obstructive chronique) et la bradycardie." },
          { label: "Champ visuel Humphrey 24-2 SITA Standard", result: "OD : défaut arciforme supérieur avec ressaut nasal, respectant le méridien horizontal ; MD −4,5 dB, PSD élevé, GHT hors des limites normales. OS : normal. Fiabilité bonne (faux positifs 3 %).", value: 2, note: "Le 24-2 teste les 24° centraux. Un défaut arciforme supérieur (en arc au-dessus de la fixation) traduit une perte des fibres du pôle inférieur de la papille. MD (déficit moyen) > −6 dB = stade débutant (Hodapp-Parrish-Anderson) ; le PSD mesure les pertes localisées et le GHT compare les moitiés supérieure et inférieure. Plus de 15 % de faux positifs = test non fiable." },
          { label: "OCT : RNFL péripapillaire et cellules ganglionnaires maculaires (GCIPL)", result: "OD : amincissement de la RNFL inférotemporale, concordant avec l’encoche ; GCIPL aminci en inférieur. OS : dans les limites normales.", value: 2, note: "L’OCT mesure l’épaisseur des fibres nerveuses autour de la papille (RNFL) et des cellules ganglionnaires de la macula (GCIPL). L’AAO (2026) recommande les deux au départ et au suivi : OCT et champ combinés valent mieux que chacun seul. Atteinte inférieure à l’OCT + défaut supérieur au champ = concordance structure-fonction." },
          { label: "IRM cérébrale", result: "Normale.", value: 0, note: "L’IRM (imagerie par résonance magnétique) n’est pas indiquée : papille sans pâleur, défaut qui respecte le méridien horizontal et concorde avec l’OCT. On la réserve aux drapeaux rouges (pâleur > excavation, défaut aligné sur le méridien vertical, AV basse inexpliquée)." },
          { label: "Gonioscopie", result: "Angle ouvert grade 3–4 (Shaffer) sur 360°, pigmentation modérée, sans synéchies, récession ni néovaisseaux.", value: 2, note: "La gonioscopie (lentille à miroir posée sur la cornée) montre l’angle de drainage. Avant de parler d’angle ouvert, on élimine une fermeture de l’angle et les causes secondaires : pseudo-exfoliation, dispersion pigmentaire, récession traumatique, néovaisseaux. Le traitement en dépend." },
          { label: "Tension artérielle et horaire des antihypertenseurs", result: "TA 118/66 mmHg assis en clinique ; il prend son antihypertenseur au coucher.", value: 1, note: "L’AAO (2026) ajoute la tension artérielle basse (systolique ou diastolique) aux facteurs de risque : un nerf mal perfusé, surtout la nuit, souffre davantage. À discuter avec le médecin de famille, sans arrêter un traitement de son propre chef." }
        ]
      },
      {
        kind: "info",
        text: "Synthèse : angle ouvert sans cause secondaire, cornée mince, encoche inférieure de la papille, RNFL inférotemporale amincie et défaut arciforme supérieur concordant à l’OD ; OS sans atteinte, mais PIO à 24 mmHg. Le schéma montre le champ OD en déviation corrigée (pattern deviation, qui retire l’effet d’une baisse globale comme la cataracte) : un arc supérieur qui s’arrête au méridien horizontal, avec un ressaut nasal.",
        figure: { type: "vf", pattern: "sup-arcuate", eye: "OD", map: "pd", md: -4.5 }
      },
      {
        kind: "choice",
        prompt: "Quel diagnostic retiens-tu ?",
        options: [
          { label: "Hypertension oculaire aux deux yeux, sans glaucome, avec grande excavation physiologique", correct: false, note: "L’hypertension oculaire est une PIO élevée sans atteinte du nerf ni du champ. L’OD montre déjà une encoche, une RNFL amincie et un défaut concordant." },
          { label: "Glaucome primaire à angle ouvert (GPAO, primary open-angle glaucoma) débutant OD ; hypertension oculaire OS", correct: true, note: "Le GPAO est une neuropathie optique chronique : les axones meurent peu à peu, l’excavation s’élargit et le champ se perd, avec un angle ouvert et sans autre cause. Ici, atteintes structurelle et fonctionnelle concordantes à l’OD (MD −4,5 dB = débutant). À l’OS, PIO élevée sans atteinte = hypertension oculaire (ocular hypertension), à surveiller de près, car son risque est élevé. Origine africaine, antécédent familial au premier degré, cornée mince et PIO élevée sont des facteurs de risque majeurs." },
          { label: "Glaucome à pression normale OD avec hypertension oculaire OS", correct: false, note: "Le GPN donne une atteinte glaucomateuse avec une PIO toujours dans les normales ; ici, la PIO est à 26 mmHg, et la cornée mince la sous-estime même." },
          { label: "Glaucome pigmentaire (secondaire à une dispersion de pigment) OD", correct: false, note: "Souvent un homme jeune et myope, avec fuseau de Krukenberg (pigment sur l’endothélium), transillumination de l’iris en rayons et angle très pigmenté ; rien de cela ici." }
        ]
      },
      {
        kind: "choice",
        prompt: "Quel plan initial proposes-tu pour l’OD ?",
        options: [
          { label: "Cible universelle sous 21 mmHg pour tous les glaucomes, avec timolol 0,5 % 2 fois par jour en première intention", correct: false, note: "21 mmHg est une limite statistique de la population, pas une cible : celle-ci dépend de la PIO de base, du stade et des facteurs de risque. Le timolol n’est pas non plus le premier choix (SLT ou analogue des prostaglandines), et il exige de vérifier l’asthme, la MPOC et le rythme cardiaque." },
          { label: "Trabéculectomie d’emblée à l’OD, vu l’antécédent familial de cécité, la cornée mince et l’origine africaine", correct: false, note: "La chirurgie filtrante est réservée à l’atteinte avancée, à la progression malgré le traitement ou à l’échec des autres options ; pour un glaucome débutant, on commence par le laser ou les gouttes." },
          { label: "Observation sans traitement, avec champ visuel et OCT dans un an, puisqu’il n’a aucun symptôme visuel", correct: false, note: "Un GPAO avec atteinte confirmée se traite, même sans symptôme (le champ central reste longtemps intact) : chaque mmHg de baisse réduit le risque de progression d’environ 10 % (essai EMGT, Early Manifest Glaucoma Trial), et son profil de risque est élevé." },
          { label: "Cible d’environ 18–20 mmHg (20–30 % sous la base) ; trabéculoplastie sélective au laser (SLT) ou analogue des prostaglandines, en décision partagée", correct: true, note: "La PIO cible est la pression sous laquelle on pense freiner la progression : individualisée, avec un point de départ d’environ 20–30 % sous la PIO de base, plus bas si l’atteinte est avancée. La SLT (selective laser trabeculoplasty) applique un laser de faible énergie sur le trabéculum pigmenté pour stimuler l’évacuation de l’humeur aqueuse, sans brûler le tissu ; la cible est revue selon l’évolution. Dans l’essai LiGHT (Laser in Glaucoma and Ocular Hypertension) à 6 ans, 69,8 % des yeux traités par SLT restaient à la cible sans autre traitement, avec moins de progression (19,6 % vs 26,8 %) et environ 3 fois moins de trabéculectomies ; l’AAO (2026) appuie davantage la SLT en première intention." }
        ]
      },
      {
        kind: "info",
        text: "Rebondissement : la SLT est faite à l’OD. À 2 mois, la PIO OD est à 21 mmHg, au-dessus de la cible. Un collègue propose d’ajouter du timolol 0,5 % 2 fois par jour, peu coûteux. En révisant ses médicaments, le patient sort une pompe de salbutamol « qui n’est pas pour les yeux » : il fait de l’asthme depuis l’enfance. Il demande aussi : « Est-ce que je peux continuer à conduire ? »"
      },
      {
        kind: "choice",
        prompt: "Quel traitement ajoutes-tu ?",
        options: [
          { label: "Un analogue des prostaglandines (latanoprost 0,005 % le soir), en évitant tout bêtabloquant, même en gouttes", correct: true, note: "Les gouttes s’écoulent dans le nez par le canal lacrymal et passent dans le sang : un bêtabloquant topique comme le timolol peut déclencher un bronchospasme grave chez l’asthmatique (ou aggraver une MPOC, maladie pulmonaire obstructive chronique, une bradycardie, un bloc cardiaque). Le latanoprost augmente l’évacuation uvéosclérale de l’humeur aqueuse, en une goutte par jour. Effets à expliquer : rougeur, cils plus longs, iris qui fonce, fonte de la graisse autour de l’œil." },
          { label: "Timolol en gel une fois par jour : moins absorbé, donc sans danger", correct: false, note: "Le gel réduit l’absorption, mais pas assez chez un asthmatique : le risque de bronchospasme demeure." },
          { label: "Acétazolamide 250 mg par la bouche 4 fois par jour, à long terme", correct: false, note: "Ce comprimé (inhibiteur de l’anhydrase carbonique) cause fatigue, picotements, calculs rénaux et baisse du potassium ; on le réserve au court terme ou aux situations sans autre option." },
          { label: "Pilocarpine 2 % 4 fois par jour, pour augmenter l’évacuation par le trabéculum", correct: false, note: "Myotique ancien : quatre gouttes par jour, vision sombre, myopie, douleur au front ; rarement utilisé aujourd’hui dans le GPAO." }
        ]
      },
      {
        kind: "choice",
        prompt: "Que lui réponds-tu au sujet de la conduite (normes de la SAAQ, Société de l’assurance automobile du Québec) ?",
        options: [
          { label: "Il doit cesser de conduire : un glaucome confirmé entraîne une suspension automatique du permis par la SAAQ", correct: false, note: "Faux : aucune suspension automatique ; la décision repose sur l’AV et le champ binoculaires." },
          { label: "Le champ 24-2 de l’OD suffit pour le dossier de la SAAQ, puisque l’OS est normal et que l’AV est de 6/6", correct: false, note: "Le 24-2 teste les 24° centraux d’un seul œil ; la SAAQ demande un champ binoculaire étendu (Esterman ou Goldmann III/4e) pour vérifier l’étendue horizontale." },
          { label: "Pas de suspension automatique : on juge l’AV et le champ des deux yeux ensemble ; en cas d’anomalie du champ, la SAAQ exige un champ binoculaire signé", correct: true, note: "Un défaut d’un seul œil, l’autre étant normal, respecte habituellement les normes ; on lui explique et on documente. Le champ binoculaire demandé est un Esterman (test automatisé fait les deux yeux ouverts) ou une périmétrie de Goldmann (cible III/4e), qui mesurent le champ jusqu’en périphérie. Normes SAAQ, classe 5 : AV binoculaire ≥ 6/15 (20/50) et champ binoculaire continu de 10° au-dessus et 20° au-dessous de la fixation, d’au moins 100° à l’horizontale dont 30° de chaque côté du méridien vertical. On regarde les deux yeux ouverts, car un œil compense les défauts de l’autre. Le médecin peut recommander l’arrêt, ou une restriction comme la conduite de nuit, si le champ se détériore." },
          { label: "Il peut continuer à conduire, mais un glaucome impose une restriction automatique à la conduite de jour", correct: false, note: "Une restriction de nuit est possible selon le cas, mais elle n’a rien d’automatique." }
        ]
      },
      {
        kind: "info",
        text: "Évolution : sous latanoprost, la PIO OD est à 17 mmHg. L’OS est une hypertension oculaire à risque élevé (cornée mince, origine africaine, antécédent familial, glaucome à l’autre œil) : on la suit de près et on lui offre un traitement préventif en décision partagée (dans OHTS, traiter réduisait environ de moitié la conversion en glaucome à 5 ans : 4,4 % vs 9,5 %). Pour repérer tôt un progresseur rapide (perte ≥ 2 dB/an), on regroupe les champs au début (clustered fields : environ 3 par an pendant 2 ans), avec un OCT RNFL et GCIPL à chaque étape ; le schéma montre l’OCT de suivi, avec un amincissement inférieur stable. On recommande un examen à ses frères et sœurs et à ses enfants, et on avise son médecin de famille d’éviter une tension artérielle trop basse.",
        figure: { type: "oct", pattern: "inf-thin" }
      }
    ],
    debrief: [
      "PIO élevée + encoche inférieure + RNFL inférotemporale amincie + arciforme supérieur concordant = GPAO ; origine africaine et antécédent familial au premier degré augmentent le risque.",
      "Bilan de base avant de traiter : gonioscopie, pachymétrie, OCT RNFL **et** GCIPL, champ 24-2 (± 10-2) ; OCT et champ combinés valent mieux que chacun seul (AAO 2026).",
      "Cible individualisée : point de départ 20–30 % sous la PIO de base ; SLT en première intention de plus en plus appuyée (LiGHT 6 ans : 69,8 % à la cible sans gouttes ; AAO 2026).",
      "Toujours chercher asthme, MPOC et bradycardie avant un bêtabloquant topique ; analogue des prostaglandines en alternative.",
      "Conduite : pas de suspension automatique ; la SAAQ juge l’AV binoculaire (≥ 6/15) et le champ binoculaire (≥ 100° à l’horizontale), exigé en cas d’anomalie. Champs regroupés au début pour repérer les progresseurs rapides."
    ]
  },
  {
    id: "cas-c3",
    module: "C",
    title: "Œil rouge deux mois après une occlusion veineuse",
    tags: ["urgent", "highyield"],
    intro: "Un homme de 70 ans, diabétique de type 2 depuis 20 ans (HbA1c 9,1 % ; l’hémoglobine glyquée reflète la glycémie des trois derniers mois) et hypertendu, a eu il y a deux mois une occlusion de la veine centrale de la rétine (OVCR : caillot dans la veine qui draine la rétine) de forme ischémique (une grande partie de la rétine n’est plus irriguée) à l’œil droit ; il a manqué son rendez-vous de suivi. Depuis trois jours, son œil droit est rouge et très douloureux, avec céphalée et nausées. Au triage, la PIO (pression intraoculaire) OD (œil droit) est à 48 mmHg au tonomètre à rebond. AV (acuité visuelle) : 6/60 (20/200) OD et 6/9 (20/30) OS (œil gauche).",
    steps: [
      {
        kind: "exams",
        prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)",
        pick: 3,
        options: [
          { label: "Lampe à fente avant dilatation : bord pupillaire et surface de l’iris", result: "Fins vaisseaux irréguliers au bord de la pupille et sur l’iris (rubéose), ectropion de l’uvée (le pigment de l’iris se retourne vers l’avant au bord pupillaire), œdème cornéen microkystique, légère réaction de chambre antérieure.", value: 2, note: "La rubéose, ou néovaisseaux de l’iris (NVI), commence souvent au bord pupillaire : on l’examine **avant** de dilater, car la dilatation la cache. La rétine ischémique libère du VEGF (vascular endothelial growth factor), un signal qui fait pousser de nouveaux vaisseaux fragiles jusque dans l’angle." },
          { label: "HbA1c, tension artérielle et bilan lipidique", result: "HbA1c 9,1 % ; tension artérielle 168/94 mmHg ; cholestérol LDL élevé.", value: 1, note: "Contrôler les facteurs de risque vasculaires protège l’autre œil et le reste du corps ; à coordonner avec le médecin de famille. Utile, mais cela ne change pas le traitement urgent de l’œil." },
          { label: "Gonioscopie", result: "Néovaisseaux qui traversent l’éperon scléral et se ramifient sur le trabéculum sur 360° ; synéchies antérieures périphériques (PAS) sur un quadrant, angle encore ouvert ailleurs.", value: 2, note: "Les néovaisseaux de l’angle (NVA) franchissent l’éperon scléral, contrairement aux vaisseaux normaux. Ils forment d’abord une membrane fibrovasculaire qui bloque l’écoulement (stade à angle ouvert), puis se contractent et tirent l’iris sur l’angle (PAS : adhérences, stade à angle fermé). Un angle encore ouvert peut se libérer si les vaisseaux régressent vite." },
          { label: "Pilocarpine 2 % 4 fois par jour (QID) pour ouvrir l’angle, avant le bilan", result: "Douleur et inflammation accrues ; PIO inchangée.", value: -1, note: "La pilocarpine augmente l’inflammation et la perméabilité des vaisseaux de l’œil, et elle n’ouvre pas un angle bouché par une membrane ou des synéchies : à éviter dans le glaucome néovasculaire." },
          { label: "Angiographie à la fluorescéine", result: "Vastes zones de non-perfusion capillaire en périphérie ; fuite des néovaisseaux.", value: 1, note: "On injecte un colorant dans une veine du bras et on photographie la rétine : les zones sans circulation restent sombres. L’examen confirme l’ischémie et guide le laser, mais il n’est pas nécessaire pour débuter le traitement." },
          { label: "Fond d’œil dilaté et OCT maculaire", result: "OD : hémorragies rétiniennes dans les quatre quadrants en régression, nodules cotonneux, veines tortueuses ; œdème maculaire à l’OCT. OS : rétinopathie diabétique non proliférante modérée, sans œdème.", value: 2, note: "Le fond d’œil confirme la cause (OVCR ischémique) et l’OCT maculaire (tomographie par cohérence optique, qui donne une coupe de la rétine) mesure l’œdème ; on évalue aussi l’autre œil, lui aussi à risque à cause du diabète. Les nodules cotonneux sont de petites taches blanches de rétine ischémique." },
          { label: "Champ visuel automatisé", result: "Non fiable avec une AV à 6/60 et un œil douloureux.", value: 0, note: "Sans intérêt en phase aiguë." }
        ]
      },
      {
        kind: "info",
        text: "Synthèse : rubéose irienne, néovaisseaux de l’angle sur 360° avec début de synéchies et PIO à 48 mmHg, deux mois après une OVCR ischémique. Le schéma montre les néovaisseaux à la surface de l’iris et au bord pupillaire. Classiquement, ce glaucome survient environ trois mois après une OVCR ischémique (« glaucome des 100 jours ») : d’où l’importance du suivi rapproché.",
        figure: { type: "slit", pattern: "nvi" }
      },
      {
        kind: "choice",
        prompt: "Quel diagnostic retiens-tu ?",
        options: [
          { label: "Crise aiguë de fermeture primaire de l’angle déclenchée par la pénombre", correct: false, note: "Dans une fermeture primaire, l’iris est poussé contre l’angle par un bloc pupillaire, sans néovaisseaux, et la chambre est très peu profonde au centre." },
          { label: "Glaucome à cellules fantômes (ghost cell glaucoma) après une hémorragie du vitré", correct: false, note: "Après une hémorragie du vitré, des globules rouges dégénérés, de couleur kaki, bouchent le trabéculum ; pas de néovaisseaux." },
          { label: "Uvéite antérieure hypertensive (inflammation qui fait monter la PIO)", correct: false, note: "On verrait des cellules et des précipités dans une chambre profonde, sans vaisseaux qui franchissent l’éperon." },
          { label: "Glaucome néovasculaire (neovascular glaucoma) OD secondaire à l’OVCR ischémique, en voie de fermeture synéchiale", correct: true, note: "C’est un glaucome secondaire : la rétine privée d’oxygène sécrète du VEGF, des néovaisseaux envahissent l’iris et l’angle, puis bloquent l’écoulement de l’humeur aqueuse. Causes principales : rétinopathie diabétique proliférante, OVCR ischémique, syndrome ischémique oculaire (rétrécissement de la carotide)." }
        ]
      },
      {
        kind: "choice",
        prompt: "Quel traitement initial prescris-tu ?",
        options: [
          { label: "Anti-VEGF intravitréen aujourd’hui, gouttes et acétazolamide, atropine et prednisolone, puis photocoagulation panrétinienne (PRP)", correct: true, note: "Schéma : injection intravitréenne d’anti-VEGF, idéalement le jour même ; timolol, brimonidine et dorzolamide, avec acétazolamide 500 mg par la bouche en l’absence de contre-indication (allergie aux sulfamides, insuffisance rénale) ; atropine 1 % et acétate de prednisolone 1 % ; PRP dès que la cornée et les milieux le permettent. L’anti-VEGF (ex. bévacizumab, ranibizumab, aflibercept), injecté dans le vitré, bloque le VEGF : les néovaisseaux régressent en quelques jours, mais l’effet ne dure que quelques semaines. La PRP (panretinal photocoagulation) brûle au laser la rétine périphérique ischémique pour qu’elle cesse de produire du VEGF : c’est le traitement durable. Les gouttes réduisent la production d’humeur aqueuse ; l’atropine (cycloplégique) calme la douleur et stabilise la barrière entre le sang et l’humeur aqueuse, et le stéroïde réduit l’inflammation." },
          { label: "Pilocarpine 2 % 4 fois par jour pour ouvrir l’angle, avec timolol et acétazolamide pour la PIO", correct: false, note: "Elle augmente l’inflammation et n’ouvre pas un angle bloqué par une membrane fibrovasculaire : à éviter. Et sans anti-VEGF ni PRP, la cause (la rétine ischémique qui produit du VEGF) n’est pas traitée." },
          { label: "Trabéculectomie avec mitomycine C dans les 24 h, pour contrôler une PIO à 48 mmHg avant la PRP", correct: false, note: "Avec des néovaisseaux actifs, la chirurgie filtrante saigne et cicatrise trop (fibrose) : l’échec est fréquent. On fait d’abord régresser les vaisseaux." },
          { label: "Photocoagulation panrétinienne (PRP) seule cette semaine, sans anti-VEGF ni gouttes, car c’est le traitement durable", correct: false, note: "La PRP agit en plusieurs semaines, et la cornée œdémateuse gêne le laser ; une PIO à 48 mmHg et des néovaisseaux actifs exigent un effet immédiat." }
        ]
      },
      {
        kind: "info",
        text: "Rebondissement : quatre semaines plus tard, après l’anti-VEGF et une PRP complétée en deux séances, la rubéose a régressé. Mais la PIO OD reste à 38 mmHg sous traitement maximal (trois gouttes et acétazolamide). À la gonioscopie, l’iris est collé à l’angle sur 360° : les synéchies se sont refermées comme une fermeture éclair, même si les vaisseaux sont maintenant inactifs. L’AV est à 6/30 (20/100) et l’œdème maculaire diminue.",
        figure: { type: "gonio", grade: 0, pas: true, pigment: "light", nv: false, recession: false }
      },
      {
        kind: "choice",
        prompt: "Que proposes-tu ?",
        options: [
          { label: "Trabéculectomie avec mitomycine C, maintenant que les néovaisseaux ont régressé", correct: false, note: "Possible dans certains cas une fois les vaisseaux régressés, mais l’échec par cicatrisation est plus fréquent dans un œil néovasculaire : on préfère habituellement un tube." },
          { label: "Trabéculoplastie sélective au laser (SLT) sur 360° pour relancer l’écoulement", correct: false, note: "La SLT agit sur un trabéculum visible ; ici, l’iris le recouvre entièrement." },
          { label: "Cyclophotocoagulation au laser diode pour réduire la production d’humeur aqueuse", correct: false, note: "Ce laser détruit une partie du corps ciliaire pour réduire la production d’humeur aqueuse. On le réserve plutôt aux yeux à faible potentiel visuel ou à l’échec d’un tube, à cause des risques d’inflammation, de baisse visuelle et d’hypotonie ; cet œil voit encore 6/30." },
          { label: "Iridotomie au laser pour faire reculer l’iris collé sur l’angle", correct: false, note: "Il n’y a pas de bloc pupillaire : l’angle est fermé par des synéchies, que l’iridotomie ne décolle pas." },
          { label: "Implant de drainage (tube) de type Ahmed, en poursuivant les anti-VEGF et la PRP au besoin", correct: true, note: "L’Ahmed est un dispositif de drainage : un petit tube de silicone placé dans la chambre antérieure conduit l’humeur aqueuse vers une plaque cousue sur la sclère, sous la conjonctive, où elle est absorbée ; il contourne l’angle fermé. Sa valve limite la surfiltration au début et abaisse la PIO dès le premier jour. Dans le glaucome néovasculaire, on préfère en général un tube à la trabéculectomie, qui échoue plus souvent à cause de l’inflammation et de la cicatrisation." }
        ]
      },
      {
        kind: "info",
        text: "Évolution : un Ahmed est posé à l’OD et la PIO passe à 12 mmHg. Vers la 5e semaine, elle remonte à 24 mmHg : c’est la phase hypertensive, fréquente avec la valve d’Ahmed, quand une capsule fibreuse se forme autour de la plaque. Des gouttes la ramènent à 15 mmHg, et cette phase s’atténue souvent avec le temps. On surveille l’autre œil (rétinopathie diabétique) et on resserre le contrôle de la glycémie et de la tension avec le médecin de famille."
      }
    ],
    debrief: [
      "OVCR ischémique ou rétinopathie diabétique proliférante + œil rouge douloureux + PIO très élevée = glaucome néovasculaire ; examiner le bord pupillaire **avant** de dilater et faire une gonioscopie.",
      "Traiter la cause : anti-VEGF intravitréen (effet rapide mais temporaire) + PRP (effet durable) ; plus on agit tôt, plus on préserve un angle encore ouvert.",
      "Contrôler la PIO avec des inhibiteurs de la production d’humeur aqueuse ± acétazolamide ; atropine + stéroïde contre l’inflammation ; **pas de pilocarpine**.",
      "Fermeture synéchiale avec PIO non contrôlée → tube (Ahmed) plutôt que trabéculectomie ; cyclophotocoagulation si le potentiel visuel est faible.",
      "Revoir de près toute OVCR ischémique pendant les premiers mois (« glaucome des 100 jours ») : un rendez-vous manqué peut coûter l’œil."
    ]
  },
  {
    id: "cas-c4",
    module: "C",
    title: "Après la trabéculectomie : trop bas, trop haut, puis rouge",
    tags: ["urgent", "frequent", "highyield"],
    intro: "Une femme de 66 ans atteinte d’un GPAO (glaucome primaire à angle ouvert) avancé à l’OD (œil droit), qui progressait malgré trois gouttes, a eu hier une trabéculectomie avec mitomycine C (MMC) à cet œil. La trabéculectomie crée sous un volet de sclère une ouverture qui laisse l’humeur aqueuse s’écouler sous la conjonctive, où elle forme une bulle de filtration (bleb) ; la MMC, un antimétabolite appliqué sur la sclère pendant la chirurgie, freine la cicatrisation qui refermerait ce passage. Au jour 1, elle se sent bien et n’a pas de douleur. AV (acuité visuelle) : 6/30 (20/100) OD, contre 6/12 (20/40) avant l’opération ; PIO (pression intraoculaire) 4 mmHg OD et chambre antérieure peu profonde.",
    steps: [
      {
        kind: "exams",
        prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)",
        pick: 3,
        options: [
          { label: "Gonioscopie", result: "Peu réalisable : œil fraîchement opéré, chambre étroite ; orifice interne entrevu ouvert.", value: 0, note: "Peu utile aujourd’hui ; appuyer sur un œil hypotone et fraîchement opéré peut même aggraver la situation." },
          { label: "Test de Seidel sur la bulle et la plaie conjonctivale", result: "Négatif : la fluorescéine concentrée reste orange foncé, sans ruisseau vert qui s’écoule.", value: 2, note: "On applique une bandelette de fluorescéine concentrée (orange foncé) sur la bulle : si l’humeur aqueuse fuit, elle dilue le colorant, qui devient un ruisseau vert vif sous lumière bleue (Seidel positif). C’est le test clé devant une PIO basse après une chirurgie filtrante, car une fuite se traite autrement qu’une surfiltration." },
          { label: "Lampe à fente : bulle, profondeur de la chambre antérieure, iridectomie", result: "Bulle haute et diffuse ; chambre antérieure peu profonde, avec contact entre l’iris périphérique et la cornée mais sans contact entre le cristallin et la cornée ; iridectomie périphérique perméable ; légère réaction inflammatoire.", value: 2, note: "On gradue l’aplatissement de la chambre : iris périphérique contre la cornée (grade I), iris entier contre la cornée (grade II), cristallin contre la cornée (grade III, urgence pour l’endothélium et le cristallin). Une bulle haute avec une PIO basse évoque une surfiltration ; une bulle plate, une fuite ou une baisse de production d’humeur aqueuse. L’iridectomie, petit trou chirurgical dans l’iris périphérique, empêche l’iris de boucher l’orifice ; perméable, elle élimine un bloc pupillaire." },
          { label: "Massage digital de la bulle pour juger de la filtration", result: "La chambre antérieure s’aplatit davantage et la PIO tombe à 2 mmHg.", value: -1, note: "Le massage pousse l’humeur aqueuse dans la bulle : utile quand la bulle filtre trop peu, nuisible quand elle filtre déjà trop." },
          { label: "OCT maculaire", result: "Légers plis choriorétiniens au pôle postérieur.", value: 1, note: "L’OCT maculaire (tomographie par cohérence optique, qui donne une coupe de la rétine) montre si une PIO très basse plisse la rétine et la choroïde (maculopathie d’hypotonie), ce qui baisse la vision. Utile pour suivre l’hypotonie si elle persiste." },
          { label: "Fond d’œil dilaté ± échographie B", result: "Dômes lisses, brun orangé, en périphérie temporale et nasale, qui ne se touchent pas au centre ; à l’échographie B, contenu liquidien sans échos : décollements choroïdiens séreux.", value: 2, note: "La choroïde (couche vasculaire sous la rétine) se décolle quand la PIO est trop basse : du liquide s’accumule entre elle et la sclère. Si les dômes se touchent au centre (choroïdes qui « s’embrassent », kissing choroidals), il faut les drainer. Une hémorragie suprachoroïdienne donne plutôt une douleur intense, une PIO souvent élevée et des dômes sombres, pleins d’échos." }
        ]
      },
      {
        kind: "info",
        text: "Synthèse : PIO 4 mmHg, bulle haute et diffuse, Seidel négatif, iridectomie perméable, chambre antérieure de grade I sans contact cristallin-cornée et décollements choroïdiens séreux périphériques qui ne se touchent pas. Le schéma montre une bulle de filtration haute et diffuse au limbe supérieur.",
        figure: { type: "slit", pattern: "bleb" }
      },
      {
        kind: "choice",
        prompt: "Quel diagnostic retiens-tu ?",
        options: [
          { label: "Fuite de la bulle (bleb leak) par un trou de la conjonctive", correct: false, note: "Une fuite donne un Seidel positif, souvent avec une bulle plate ou peu formée ; ici, le Seidel est négatif et la bulle est haute." },
          { label: "Hémorragie suprachoroïdienne (saignement sous la choroïde)", correct: false, note: "Saignement brutal sous la choroïde : douleur intense, PIO souvent élevée, dômes sombres et pleins d’échos à l’échographie." },
          { label: "Surfiltration (overfiltration) par le volet scléral, avec décollements choroïdiens séreux secondaires", correct: true, note: "Le volet de sclère laisse sortir plus d’humeur aqueuse que l’œil n’en produit : la PIO baisse, la chambre s’aplatit et la choroïde se décolle sous l’effet de la basse pression. Le Seidel négatif et la bulle haute éliminent une fuite. C’est fréquent les premiers jours, surtout avec la MMC, et souvent transitoire." },
          { label: "Glaucome malin (aqueous misdirection), qui pousse le cristallin vers l’avant", correct: false, note: "L’humeur aqueuse est détournée vers l’arrière, dans le vitré, et pousse le cristallin et l’iris vers l’avant : chambre plate avec PIO normale ou **élevée** malgré une iridectomie perméable, sans décollement choroïdien." },
          { label: "Bloc pupillaire par une iridectomie bouchée (non perméable)", correct: false, note: "La PIO serait élevée et l’iris bombé vers l’avant ; ici, l’iridectomie est perméable et la PIO est basse." }
        ]
      },
      {
        kind: "choice",
        prompt: "Quelle conduite adoptes-tu aujourd’hui ?",
        options: [
          { label: "Massage de la bulle plusieurs fois par jour pour garder la filtration ouverte pendant la cicatrisation", correct: false, note: "Le massage augmente la filtration et aggrave l’hypotonie." },
          { label: "Atropine 1 %, antibiotique et stéroïde poursuivis, éviter efforts et poussées en retenant son souffle (Valsalva), revoir dans 24–48 h", correct: true, note: "L’atropine paralyse le muscle ciliaire : elle tire le cristallin vers l’arrière, approfondit la chambre et calme l’inflammation. La plupart des surfiltrations se corrigent en quelques jours, à mesure que le volet cicatrise. On intervient (gel viscoélastique injecté dans la chambre, drainage des choroïdes, resserrement du volet) seulement s’il y a contact cristallin-cornée, choroïdes qui se touchent ou hypotonie persistante avec maculopathie." },
          { label: "Reprise chirurgicale aujourd’hui pour resserrer le volet scléral par des points supplémentaires", correct: false, note: "Prématuré : sans contact cristallin-cornée ni choroïdes qui se touchent, la surfiltration se corrige souvent seule." },
          { label: "Ajouter du timolol 0,5 % 2 fois par jour pour réduire le débit et laisser le volet cicatriser", correct: false, note: "Réduire la production d’humeur aqueuse dans un œil déjà hypotone abaisse encore la PIO. Ces gouttes servent plutôt dans certaines fuites, pour ralentir le débit à travers la plaie." }
        ]
      },
      {
        kind: "info",
        text: "Rebondissement à la 3e semaine : sous acétate de prednisolone 4 fois par jour, la PIO OD est à 24 mmHg, la chambre antérieure est profonde et la bulle est plate et peu étendue. La gonioscopie montre un orifice interne (sclérostomie) bien ouvert, sans iris, sang ni fibrine. Le volet avait été fermé par deux points de nylon 10-0 (fil très fin) non amovibles. Une bulle encapsulée (kyste de Tenon : bulle haute en dôme, à paroi épaisse et vascularisée, qui ne laisse plus diffuser l’humeur aqueuse) serait une autre cause d’échec précoce, mais ici la bulle est plate."
      },
      {
        kind: "choice",
        prompt: "Que fais-tu ?",
        options: [
          { label: "Needling de la bulle à l’aiguille avec 5-fluorouracile, à la lampe à fente, pour libérer la filtration", correct: false, note: "Le needling (aiguille glissée sous la conjonctive pour ouvrir une capsule ou des adhérences, souvent avec un antimétabolite comme le 5-FU) traite une bulle encapsulée ou fibrosée. Ici, la bulle est plate parce que le volet est serré : on commence par le massage et la lyse de suture." },
          { label: "Reprendre ses trois gouttes, conclure à l’échec de la chirurgie et planifier un tube dans quelques mois", correct: false, note: "Trop tôt pour conclure : un geste simple au laser peut rétablir la filtration." },
          { label: "Cesser le stéroïde topique, qui fait monter la PIO (réponse cortisonique), et revoir dans 2 semaines", correct: false, note: "Au contraire, le stéroïde freine la cicatrisation qui menace la bulle : on le poursuit, parfois même plus souvent. Une réponse cortisonique (hausse de PIO causée par le stéroïde) reste possible plus tard, mais une bulle plate avec une sclérostomie ouverte pointe d’abord vers un volet trop serré." },
          { label: "Massage digital de la bulle à l’essai, puis lyse d’un point du volet au laser (laser suture lysis) si la bulle ne se relève pas", correct: true, note: "Sclérostomie ouverte + bulle plate = volet probablement trop serré. Le massage (pression douce sur la paupière inférieure pendant que la patiente regarde en haut) force l’humeur aqueuse sous le volet. La lyse de suture coupe au laser un point de nylon à travers la conjonctive, à l’aide d’un verre de compression (ex. Hoskins) : le volet s’ouvre un peu plus et la bulle se relève. La MMC prolonge la période où cette lyse reste efficace." }
        ]
      },
      {
        kind: "info",
        text: "Après la lyse d’un point, la bulle se relève et la PIO se stabilise à 11 mmHg sans gouttes. Rebondissement tardif : cinq ans plus tard, la bulle est devenue mince, pâle et kystique (avasculaire), un aspect fréquent après MMC. La patiente appelle un dimanche : depuis ce matin, son œil droit est rouge et collant, avec une gêne légère. À l’examen : bulle blanc laiteux entourée d’une conjonctive très injectée (« blanc sur rouge »), Seidel positif en un point de la bulle (schéma : la fluorescéine concentrée, orange foncé, est diluée par l’humeur aqueuse qui fuit en un ruisseau vert vif), réaction de chambre antérieure 1+, sans hypopyon ; AV 6/9 (20/30) comme avant ; vitré clair au fond d’œil et à l’échographie B.",
        figure: { type: "fluo", pattern: "seidel" }
      },
      {
        kind: "choice",
        prompt: "Quel diagnostic et quelle conduite retiens-tu ?",
        options: [
          { label: "Blébite (infection limitée à la bulle) : antibiotiques topiques intensifs aux heures, culture, revoir dans 12–24 h ; injection intravitréenne si le vitré se prend", correct: true, note: "Antibiotiques aux heures : fluoroquinolone de 4e génération ou gouttes fortifiées, après une culture de la surface ; ponction et injection intravitréenne au moindre signe d’atteinte du vitré. Dans la blébite, les bactéries infectent la bulle et parfois la chambre antérieure, sans atteindre le vitré ; un traitement topique intensif suffit souvent, à condition de revoir la patiente très vite. Une bulle mince, kystique ou qui fuit est le principal facteur de risque, même des années après la chirurgie. Drapeaux rouges d’une endophtalmite (infection à l’intérieur de l’œil) : baisse marquée de l’AV, hypopyon, cellules ou voile dans le vitré, douleur croissante. Une fois l’infection guérie, on répare la fuite (révision de la bulle), car une bulle mince qui fuit garde un risque d’infection." },
          { label: "Ponction vitréenne et injection intravitréenne immédiate de vancomycine 1 mg/0,1 mL et de ceftazidime 2,25 mg/0,1 mL", correct: false, note: "C’est le traitement urgent de l’endophtalmite liée à la bulle (± vitrectomie). Ici, le vitré est clair et l’AV inchangée : traitement topique intensif et réévaluation dans 12–24 h ; on injecte dès que le vitré est touché." },
          { label: "Conjonctivite bactérienne : antibiotique en gouttes 4 fois par jour et revoir dans une semaine", correct: false, note: "Œil rouge chez un porteur de bulle = infection de la bulle jusqu’à preuve du contraire ; un traitement faible et un suivi lent laissent évoluer vers l’endophtalmite." },
          { label: "Stéroïde topique seul aux 2 heures pour calmer l’inflammation de la bulle et de la chambre", correct: false, note: "Sans couverture antibiotique, le stéroïde affaiblit les défenses et favorise la progression de l’infection." }
        ]
      }
    ],
    debrief: [
      "PIO basse + chambre peu profonde après trabéculectomie : Seidel d’abord. Seidel négatif + bulle haute = surfiltration ; Seidel positif = fuite ; chercher les décollements choroïdiens (fond d’œil, échographie B).",
      "Chambre plate avec PIO **élevée** = bloc pupillaire, glaucome malin ou hémorragie suprachoroïdienne ; contact cristallin-cornée ou choroïdes qui se touchent = intervention urgente.",
      "Surfiltration : atropine, stéroïde, éviter Valsalva, suivi rapproché, jamais de massage. Bulle plate avec PIO qui monte et sclérostomie ouverte : massage puis lyse de suture au laser.",
      "Bulle haute en dôme à paroi épaisse = encapsulation → gouttes, puis needling ± antimétabolite.",
      "Bulle mince ou qui fuit = risque d’infection à vie : œil rouge, collant ou douloureux = consultation le jour même. Blébite → antibiotiques topiques intensifs ; vitré atteint, hypopyon ou baisse de l’AV = endophtalmite → vancomycine 1 mg/0,1 mL + ceftazidime 2,25 mg/0,1 mL intravitréennes en urgence."
    ]
  }
]);
