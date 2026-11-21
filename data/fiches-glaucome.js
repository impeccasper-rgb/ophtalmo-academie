var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

G.OPH.fiches = (G.OPH.fiches || []).concat([
{
  id: "g-gpao",
  module: "C",
  order: 1,
  title: "Glaucome primaire à angle ouvert",
  en: "Primary open-angle glaucoma (POAG)",
  tags: ["frequent", "highyield"],
  oneLiner: "Neuropathie optique chronique, indolore, à angle ouvert : la papille se creuse et le champ périphérique se perd en silence.",
  definition: "Le glaucome primaire à angle ouvert est une maladie chronique où les fibres du nerf optique meurent lentement, surtout parce que la pression intraoculaire (PIO) est trop haute pour ce nerf, alors que l’angle de drainage paraît normal. La vision périphérique part en premier, sans douleur, d’où l’importance du dépistage.",
  anatomy: {
    text: "L’humeur aqueuse (aqueous humor), fabriquée par les procès ciliaires, sort surtout par le trabéculum (trabecular meshwork : filtre de l’angle) et le canal de Schlemm, et en partie entre les fibres du muscle ciliaire (voie uvéosclérale, uveoscleral outflow) ; la PIO reflète cet équilibre. Les axones des cellules ganglionnaires (retinal ganglion cells) quittent l’œil par la lame criblée (lamina cribrosa), tamis de collagène vulnérable.",
    figure: { type: "eye", highlight: ["proces-ciliaires", "trabeculum", "schlemm", "lame-criblee", "papille"] }
  },
  causal: {
    title: "Du filtre encrassé à la perte de champ",
    steps: [
      { label: "Trabéculum rigidifié", detail: "Avec l’âge et la génétique, la couche du filtre collée au Schlemm s’encrasse : l’aqueuse sort moins bien.", kind: "cause" },
      { label: "PIO trop haute pour ce nerf", detail: "La production continue, la sortie freine : la pression dépasse la tolérance du nerf.", kind: "mecanisme" },
      { label: "Lame criblée comprimée", detail: "Refoulée vers l’arrière, elle pince les axones et réduit leur irrigation.", kind: "mecanisme" },
      { label: "Papille excavée, RNFL aminci", detail: "Les cellules ganglionnaires meurent : l’excavation s’agrandit et la couche des fibres nerveuses rétiniennes (retinal nerve fiber layer, RNFL) s’amincit, d’abord en inférotemporal.", kind: "lesion" },
      { label: "Défauts arciformes du champ", detail: "Fibres inférieures perdues = défaut supérieur ; la vision centrale part en dernier, d’où le diagnostic tardif.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "SLT et MIGS", detail: "La SLT (trabéculoplastie sélective au laser : laser doux appliqué sur le trabéculum) et les MIGS (chirurgies microinvasives du glaucome : micro-implants posés dans le filtre) rouvrent la voie trabéculaire." },
      { at: 1, label: "Gouttes", detail: "Les analogues des prostaglandines (PGA) ouvrent la voie uvéosclérale ; bêtabloquant, inhibiteur de l’anhydrase carbonique (IAC) et brimonidine ↓ la production d’aqueuse." },
      { at: 1, label: "Chirurgie filtrante", detail: "Trabéculectomie (fistule chirurgicale vers une poche sous la conjonctive : la bulle), PreserFlo (microtube vers cette poche) ou tube de drainage créent une nouvelle sortie." }
    ]
  },
  risk: [
    "Âge > 40 ans ; ascendance africaine (atteinte plus précoce et agressive)",
    "Parent du premier degré atteint ; myopie",
    "PIO élevée (seul facteur modifiable prouvé)",
    "Cornée mince ; hystérésis cornéenne basse (cornée qui amortit mal)",
    "AAO 2026 : C/D (excavation/disque) plus grand, hémorragie papillaire, PSD élevé (défaut localisé du champ), tension artérielle basse"
  ],
  presentation: [
    "Aucun symptôme avant un stade avancé ; découverte au dépistage",
    "PIO souvent > 21 mmHg, angle ouvert",
    "Excavation ou asymétrie papillaire ; ressaut nasal (défaut arrêté net au méridien horizontal) ou scotome arciforme"
  ],
  exam: {
    signs: [
      { sign: "C/D vertical ↑ ou asymétrie ≥ 0,2", why: "Selon la taille du disque : grande papille = grande excavation normale." },
      { sign: "Encoche ou hémorragie papillaire (Drance)", why: "Perte focale, souvent inférotemporale ; l’hémorragie signale une progression active." },
      { sign: "Pâleur égale à l’excavation", why: "Pâleur plus grande que le creux : compression ou ischémie." }
    ],
    tests: [
      { test: "Gonioscopie (lentille à miroir qui montre l’angle)", when: "Au diagnostic", read: "Éperon scléral visible sur 360°, sans synéchies : angle ouvert ; chercher pigment dense, récession ou néovaisseaux (glaucome secondaire)." },
      { test: "Pachymétrie (épaisseur cornéenne)", when: "Au départ", read: "Cornée mince : Goldmann sous-estime la PIO ; risque ↑." },
      { test: "OCT (tomographie par cohérence optique : imagerie en coupe) : RNFL + cellules ganglionnaires maculaires", when: "Départ et suivi", read: "Amincissement focal concordant ; plancher ≈ 50–60 µm si avancé." },
      { test: "Champ visuel Humphrey 24-2 ± 10-2", when: "Départ, puis ≈ 3 par an pendant 2 ans (champs groupés)", read: "Faux positifs > 15 % = non fiable ; perte ≥ 2 dB/an = progresseur rapide." }
    ]
  },
  ddx: [
    { dx: "Glaucome à pression normale", clue: "PIO toujours ≤ 21 mmHg." },
    { dx: "Fermeture chronique de l’angle", clue: "Iris collé au trabéculum à la gonioscopie." },
    { dx: "Glaucome secondaire à angle ouvert", clue: "Pseudo-exfoliation (dépôts blanchâtres sur le cristallin), pigment, cortisone, trauma, uvéite." },
    { dx: "Neuropathie compressive", clue: "Pâleur > excavation, AV et couleurs ↓." },
    { dx: "Grande papille à excavation physiologique", clue: "Bord neurorétinien régulier, symétrique et stable ; OCT et champ normaux." }
  ],
  redFlags: [
    "Pâleur > excavation ou AV ↓ précoce : IRM",
    "Défaut respectant le méridien vertical (chiasma)",
    "Perte ≥ 2 dB/an malgré une PIO à la cible"
  ],
  cat: {
    algo: [
      { q: "Angle ouvert, sans cause secondaire ?", yes: "Bilan de base.", no: "Traiter la fermeture ou la cause." },
      { q: "Papille, OCT et champ concordants ?", yes: "Glaucome : cible ≈ 20–30 % sous la base.", no: "Suspect : estimer le risque." },
      { q: "Cible atteinte (SLT ou PGA) ?", yes: "Suivi OCT et champ.", no: "Vérifier l’observance ; produit inefficace : le remplacer ; efficace mais insuffisant : ajouter une classe ou une SLT." },
      { q: "Progression malgré la cible atteinte ou un traitement maximal toléré ?", yes: "Abaisser la cible ; MIGS si léger–modéré, chirurgie filtrante si avancé ou cible basse.", no: "Poursuivre ; réévaluer la cible à chaque visite." }
    ],
    phases: [
      { phase: "observation", items: ["Bilan de départ (voir mnémo) avant tout traitement"] },
      { phase: "medical", items: ["PGA le soir ; s’il baisse peu la PIO, le remplacer plutôt qu’ajouter ; sinon ajouter une classe", "1 goutte, 5 min entre produits, presser le coin interne (occlusion ponctuelle), surtout si grossesse ou allaitement"] },
      { phase: "laser", items: ["SLT d’emblée ou en appoint"] },
      { phase: "chirurgie", items: ["MIGS (souvent avec la cataracte) ; trabéculectomie avec mitomycine C (anticicatrisant) ou tube si avancé"] },
      { phase: "suivi", items: ["Champs groupés si nouveau ou instable ; sinon OCT et champ 1–2 fois par an"] },
      { phase: "escalade", items: ["Cyclophotocoagulation (laser détruisant une partie du corps ciliaire) si échecs"] }
    ],
    local: "Québec : l’optométriste équipé peut traiter un glaucome suspect ou débutant puis doit diriger vers l’ophtalmologiste (O-7, r. 11.1). SAAQ classe 5 : AV binoculaire ≥ 6/15 (20/50) et champ binoculaire ≥ 100° à l’horizontale (≥ 30° de chaque côté), 10° au-dessus et 20° au-dessous de la fixation ; si défaut, champ binoculaire signé exigé (Esterman ou Goldmann III/4e)."
  },
  treatments: [
    { name: "PGA : latanoprost, bimatoprost, travoprost", how: "Goutte le soir qui relâche la matrice du muscle ciliaire : ↑ sortie uvéosclérale ; Vyzulta (latanoprostène bunod, approuvé par Santé Canada) agit aussi sur le trabéculum.", why: "Première goutte habituelle.", pros: "Baisse la plus forte, 1 fois par jour.", cons: "Effets esthétiques, surtout si un seul œil est traité ; prudence si uvéite ou herpès.", cx: "Rougeur, cils longs, iris foncé (irréversible), fonte graisseuse orbitaire, œdème maculaire, réactivation herpétique." },
    { name: "Timolol, IAC, brimonidine", how: "Gouttes 1–3 fois par jour qui ↓ la production d’aqueuse (blocage bêta, inhibition enzymatique) ; la brimonidine ↑ aussi l’uvéosclérale.", why: "Ajout au PGA ou alternative.", pros: "Combinaisons fixes.", cons: "Observance ↓.", cx: "Timolol : bronchospasme (asthme, MPOC), bradycardie, bloc AV ; IAC : brûlure, goût amer (sulfamide) ; brimonidine : allergie, somnolence, contre-indiquée avant 2 ans." },
    { name: "SLT (trabéculoplastie sélective au laser)", how: "Laser en clinique, à travers une lentille : impacts doux sur le trabéculum pigmenté ; le remodelage biologique ↑ la sortie.", why: "Première intention ou appoint.", pros: "Sans gouttes, répétable.", cons: "Effet qui s’estompe.", cx: "Pic de PIO, inflammation légère." },
    { name: "Chirurgie : MIGS, trabéculectomie, PreserFlo, tube", how: "Au bloc. MIGS : micro-implant dans le trabéculum ; trabéculectomie : fistule sous un volet scléral vers la bulle ; tube : drain relié à une plaque.", why: "Progression ou cible non atteinte.", pros: "Trabéculectomie : PIO la plus basse ; MIGS : sécuritaires.", cons: "MIGS : baisse modeste.", cx: "Hypotonie, fuite, infection de la bulle." }
  ],
  pearls: [
    { q: "Quelle PIO cible ?", a: "Individualisée selon le stade, la PIO à laquelle le dommage est survenu, la vitesse de progression, l’espérance de vie et les facteurs de risque : point de départ ≈ 20–30 % sous la base, plus basse si avancé, révisée à chaque visite. Essai EMGT : chaque mmHg de baisse ≈ 10 % moins de risque de progression." },
    { q: "SLT ou gouttes en premier ?", a: "Les deux (AAO 2026). Essai LiGHT à 6 ans : 69,8 % des yeux SLT à la cible sans autre traitement ; progression 19,6 % vs 26,8 %." },
    { q: "Cible atteinte mais le champ progresse ?", a: "Confirmer (champs groupés, OCT), vérifier l’observance, puis baisser la cible." }
  ],
  mnemonic: { title: "Bilan de base : 4 P + G", text: "**P**IO répétée, **P**achymétrie, **P**apille (photo + OCT), **P**érimétrie (24-2 ± 10-2), + **G**onioscopie." },
  compare: {
    title: "Papille normale vs GPAO",
    normal: { figure: { type: "disc", cd: 0.3, notch: "none", heme: false, ppa: false, pallor: false }, caption: "C/D 0,3, bord neurorétinien régulier (règle ISNT : inférieur ≥ supérieur ≥ nasal ≥ temporal)." },
    patho: { figure: { type: "disc", cd: 0.8, notch: "inf", heme: true, ppa: true, pallor: false }, caption: "C/D 0,8, encoche inférieure et hémorragie papillaire.", reveal: ["C/D vertical 0,8", "Encoche inférotemporale du bord neurorétinien", "Hémorragie en flammèche au bord (Drance)", "Atrophie péripapillaire zone bêta", "Défaut attendu : arciforme supérieur du champ"] }
  },
  sources: [
    "AAO PPP Primary Open-Angle Glaucoma (Gedde SJ et al., Ophthalmology, en ligne 9 févr. 2026)",
    "LiGHT 6 ans (Gazzard G et al., Ophthalmology 2023)",
    "EMGT (Heijl A et al., Arch Ophthalmol 2002)",
    "COS 2009 : Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)",
    "Chauhan BC et al., Br J Ophthalmol 2008 (fréquence des champs visuels)"
  ]
},
{
  id: "g-hto",
  module: "C",
  order: 2,
  title: "Hypertension oculaire et suspect de glaucome",
  en: "Ocular hypertension and glaucoma suspect",
  tags: ["frequent", "highyield"],
  oneLiner: "PIO > 21 mmHg ou papille douteuse sans neuropathie démontrée : estimer le risque de conversion, puis observer ou traiter.",
  definition: "L’hypertension oculaire (HTO) est une pression intraoculaire (PIO) au-dessus de 21 mmHg avec un angle ouvert, un nerf optique et un champ visuel normaux. Le suspect de glaucome présente un élément douteux (PIO, papille, OCT ou champ) sans preuve de neuropathie, et on estime son risque de devenir glaucomateux.",
  anatomy: {
    text: "La PIO normale va de 10 à 21 mmHg (moyenne ≈ 15–16) et varie de 2 à 6 mmHg sur 24 h ; elle reflète l’équilibre entre production et sortie de l’aqueuse. Le tonomètre de Goldmann aplatit la cornée : une cornée épaisse résiste et fait surestimer la PIO, une cornée mince la fait sous-estimer. Une grande papille a normalement une grande excavation.",
    figure: { type: "eye", highlight: ["cornee", "trabeculum", "schlemm", "papille"] }
  },
  causal: {
    title: "Un risque, pas encore une maladie",
    steps: [
      { label: "Sortie un peu freinée", detail: "Le trabéculum (filtre de l’angle) laisse passer un peu moins d’aqueuse : la PIO dépasse 21 mmHg, sans dommage pour l’instant.", kind: "cause" },
      { label: "Nerf encore sain", detail: "Chaque nerf tolère la pression différemment : beaucoup de patients en HTO ne développeront jamais de glaucome.", kind: "mecanisme" },
      { label: "Facteurs de vulnérabilité", detail: "Cornée mince, âge, grande excavation, PSD élevé : chaque facteur augmente la probabilité que le nerf cède.", kind: "mecanisme" },
      { label: "Premières fibres perdues", detail: "Amincissement des fibres nerveuses (RNFL) à l’OCT ou hémorragie papillaire, souvent avant tout défaut au champ.", kind: "lesion" },
      { label: "Conversion en glaucome", detail: "Défaut de champ reproductible ou perte structurelle confirmée : environ 9,5 % des non-traités à 5 ans dans OHTS.", kind: "complication" }
    ],
    levers: [
      { at: 1, label: "Baisser la PIO d’environ 20 %", detail: "Gouttes (OHTS : conversion à 5 ans 4,4 % vs 9,5 %) ou SLT (laser doux sur le trabéculum)." },
      { at: 3, label: "Surveillance OCT et champ", detail: "Ne bloque pas la maladie, mais détecte la conversion avant une perte fonctionnelle." }
    ]
  },
  risk: [
    "Âge plus avancé",
    "PIO plus élevée",
    "Cornée mince : ≤ 555 µm ≈ 3 fois plus de conversion que > 588 µm (OHTS)",
    "C/D vertical (rapport excavation/disque) plus grand",
    "PSD plus élevé (défaut localisé débutant au champ)",
    "Antécédents familiaux, ascendance africaine, hémorragie papillaire, hystérésis cornéenne basse"
  ],
  presentation: [
    "Asymptomatique ; découverte au dépistage, souvent par l’optométriste",
    "PIO > 21 mmHg à plusieurs reprises, angle ouvert",
    "Ou papille suspecte, OCT limite, champ douteux non reproductible"
  ],
  exam: {
    signs: [
      { sign: "Papille saine malgré PIO élevée", why: "Définit l’HTO ; une encoche ou une hémorragie change le diagnostic." },
      { sign: "Grande papille à excavation proportionnelle", why: "Excavation physiologique : bord neurorétinien régulier et symétrique." },
      { sign: "Hémorragie papillaire", why: "Prédit la conversion : resserrer le suivi ou traiter." },
      { sign: "Absence de signe secondaire", why: "Pseudo-exfoliation (dépôts blanchâtres sur le cristallin), pigment, uvéite ou cortisone changent la prise en charge." }
    ],
    tests: [
      { test: "Tonométrie répétée à différentes heures", when: "Avant de conclure", read: "Une seule mesure ne suffit pas ; éviter paupière pressée, apnée, mires épaisses (surestimation)." },
      { test: "Pachymétrie (épaisseur cornéenne centrale)", when: "Chez tout suspect", read: "Mince : risque ↑ et PIO sous-estimée ; pas de formule de correction mécanique." },
      { test: "Gonioscopie (lentille à miroir qui montre l’angle)", when: "Au départ", read: "Confirme l’angle ouvert ; exclut fermeture ou cause secondaire." },
      { test: "OCT RNFL + maculaire et champ 24-2", when: "Référence au départ, puis au suivi", read: "Un défaut doit être reproductible (2–3 champs) avant de conclure." }
    ]
  },
  ddx: [
    { dx: "Glaucome débutant", clue: "Défaut de champ reproductible ou amincissement RNFL concordant." },
    { dx: "Artefact de mesure", clue: "Cornée épaisse, paupières serrées, mires trop épaisses." },
    { dx: "HTO secondaire", clue: "Cortisone, uvéite, pseudo-exfoliation, dispersion pigmentaire, trauma." },
    { dx: "Fermeture primaire de l’angle", clue: "Contact iris–trabéculum à la gonioscopie." },
    { dx: "Papille myope inclinée", clue: "OCT faussement anormal (red disease), aspect stable." }
  ],
  redFlags: [
    "PIO très élevée (≥ 30 mmHg) : traitement généralement offert",
    "Hémorragie papillaire ou nouvel amincissement RNFL : conversion probable",
    "PIO élevée d’un seul côté : chercher une cause secondaire"
  ],
  cat: {
    algo: [
      { q: "PIO > 21 mmHg confirmée, ou papille suspecte ?", yes: "Bilan complet.", no: "Dépistage habituel." },
      { q: "Angle ouvert, sans cause secondaire ?", yes: "HTO primaire ou suspect.", no: "Traiter la cause (fermeture, cortisone, uvéite)." },
      { q: "Neuropathie démontrée (OCT, champ reproductible) ?", yes: "Glaucome : fiche GPAO.", no: "Estimer le risque à 5 ans (calculateur OHTS-EGPS, issu de deux grands essais sur l’HTO)." },
      { q: "Risque estimé élevé, longue espérance de vie, œil unique ou PIO ≥ 30 mmHg ?", yes: "Traiter : cible ≈ 20 % sous la base (PGA ou SLT).", no: "Observer avec OCT et champ réguliers ; réévaluer le risque." }
    ],
    phases: [
      { phase: "observation", items: ["Bilan de référence : PIO répétées, pachymétrie, gonioscopie, photos, OCT, champ", "Risque faible : observation, contrôles plus espacés"] },
      { phase: "medical", items: ["Si traitement : analogue des prostaglandines (PGA) le soir, cible ≈ 20 % sous la base"] },
      { phase: "laser", items: ["SLT : alternative sans gouttes"] },
      { phase: "suivi", items: ["Comparer chaque OCT et champ à la référence ; répéter un champ anormal", "Réévaluer le risque à chaque visite"] }
    ],
    local: "Au Québec, l’optométriste outillé peut traiter un glaucome suspect, puis doit diriger vers l’ophtalmologiste pour le suivi médical (O-7, r. 11.1) ; beaucoup d’HTO sont suivies en cogestion. Sans défaut de champ ni baisse d’AV, l’HTO n’affecte pas le permis (SAAQ)."
  },
  treatments: [
    { name: "Observation structurée", how: "Aucun médicament : visites périodiques avec PIO, OCT et champ comparés à la référence.", why: "Risque faible (cornée épaisse, PIO modérée, papille saine).", pros: "Évite effets secondaires et coûts ; la plupart des HTO ne convertissent pas.", cons: "Exige un suivi fiable.", cx: "Conversion manquée si perdu au suivi." },
    { name: "Analogue des prostaglandines (PGA)", how: "Goutte le soir qui relâche la matrice du muscle ciliaire et ouvre la voie uvéosclérale.", why: "Risque élevé ou préférence du patient.", pros: "1 goutte par jour, peu d’effets systémiques.", cons: "Traitement prolongé pour un risque modeste.", cx: "Rougeur, cils longs, iris foncé, fonte graisseuse orbitaire." },
    { name: "SLT (trabéculoplastie sélective au laser)", how: "Laser en clinique, à travers une lentille : impacts doux sur le trabéculum pigmenté qui stimulent son remodelage et ↑ la sortie.", why: "Alternative aux gouttes, surtout si observance difficile.", pros: "Aucune goutte ; répétable.", cons: "Effet qui s’atténue.", cx: "Pic de PIO transitoire, inflammation légère." }
  ],
  pearls: [
    { q: "Pourquoi mesurer la cornée d’un HTO ?", a: "Une cornée mince fait sous-estimer la PIO ET est un facteur de risque indépendant (OHTS : ≤ 555 µm ≈ 3 fois plus de conversion que > 588 µm)." },
    { q: "Que montre OHTS ?", a: "Chez des HTO à 24–32 mmHg, baisser la PIO d’environ 20 % fait passer la conversion à 5 ans de 9,5 % à 4,4 %. La majorité des non-traités ne convertit donc pas." },
    { q: "Traites-tu tous les HTO ?", a: "Non : on estime le risque (âge, PIO, cornée, C/D, PSD) et l’espérance de vie, puis décision partagée. Jeune, cornée mince et PIO haute : plutôt traiter." }
  ],
  mnemonic: { title: "Prédicteurs OHTS : « APÉCP »", text: "**Â**ge, **P**IO, **É**paisseur cornéenne mince, **C**/D vertical, **P**SD : plus il y en a, plus on penche vers le traitement." },
  compare: {
    title: "OCT normal vs suspect qui convertit",
    normal: { figure: { type: "oct", pattern: "normal" }, caption: "RNFL péripapillaire dans les limites (vert), courbe TSNIT en double bosse." },
    patho: { figure: { type: "oct", pattern: "inf-thin" }, caption: "Amincissement RNFL inférieur avant tout défaut au champ.", reveal: ["Secteurs inférieurs en rouge", "Courbe TSNIT sous la normale en inférieur", "Défaut de champ attendu : supérieur", "Confirmer sur un 2e examen avant de conclure"] }
  },
  sources: [
    "OHTS (Kass MA et al., Arch Ophthalmol 2002)",
    "OHTS : prédicteurs de conversion (Gordon MO et al., Arch Ophthalmol 2002)",
    "OHTS-EGPS : modèle de prédiction validé (Ophthalmology 2007)",
    "Guide optométrique canadien GPAO (MacIver S et al., Can J Optom 2017;79 Suppl 1)",
    "COS 2009 : Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)"
  ]
},
{
  id: "g-gpn",
  module: "C",
  order: 3,
  title: "Glaucome à pression normale",
  en: "Normal-tension glaucoma (NTG)",
  tags: ["highyield", "piege"],
  oneLiner: "Neuropathie glaucomateuse avec PIO toujours ≤ 21 mmHg : diagnostic d’exclusion, hémorragies papillaires et défauts paracentraux précoces.",
  definition: "Le glaucome à pression normale (GPN) est un glaucome à angle ouvert où le nerf optique se creuse et le champ visuel se perd alors que la pression intraoculaire (PIO) mesurée reste toujours dans la normale (≤ 21 mmHg). C’est un diagnostic d’exclusion : on élimine d’abord une PIO élevée manquée, une fermeture d’angle intermittente et une atteinte non glaucomateuse du nerf.",
  anatomy: {
    text: "La tête du nerf optique est irriguée par les artères ciliaires postérieures courtes ; son débit dépend de la pression de perfusion (tension artérielle moins PIO) et d’une autorégulation vasculaire. Les axones passent par la lame criblée (lamina cribrosa), tamis de collagène plus fragile chez certains sujets, chez qui ils s’abîment même à une PIO normale.",
    figure: { type: "eye", highlight: ["papille", "lame-criblee", "arteres-ciliaires-post", "nerf-optique"] }
  },
  causal: {
    title: "Un nerf fragile à pression normale",
    steps: [
      { label: "Nerf vulnérable", detail: "Lame criblée fragile, autorégulation vasculaire déficiente et, selon une hypothèse, pression du liquide céphalorachidien basse derrière la lame : le nerf ne tolère pas une PIO pourtant normale.", kind: "cause" },
      { label: "Perfusion insuffisante", detail: "Hypotension nocturne, apnée du sommeil ou vasospasme (migraine, Raynaud) réduisent l’apport sanguin au nerf, surtout la nuit.", kind: "mecanisme" },
      { label: "Stress à la lame criblée", detail: "Même une PIO de 15 mmHg déforme une lame faible : le transport dans les axones se bloque.", kind: "mecanisme" },
      { label: "Hémorragies, encoches focales", detail: "Les hémorragies papillaires sont fréquentes ; la perte de fibres est souvent focale, au pôle inférotemporal de la papille, qui dessert la macula.", kind: "lesion" },
      { label: "Défauts paracentraux précoces", detail: "Scotomes à quelques degrés du point de fixation : la lecture est menacée plus tôt qu’en glaucome classique.", kind: "complication" }
    ],
    levers: [
      { at: 2, label: "Baisser la PIO de 30 %", detail: "Même partie d’une valeur normale, une baisse de 30 % réduit la progression (CNTGS : ≈ 12 % vs 35 %)." },
      { at: 1, label: "Corriger la perfusion", detail: "Revoir avec le médecin traitant les antihypertenseurs pris au coucher, dépister l’apnée du sommeil ; preuves d’efficacité limitées." }
    ]
  },
  risk: [
    "Femme, âge avancé, ascendance japonaise ou est-asiatique",
    "Migraine, phénomène de Raynaud (vasospasme)",
    "Hypotension artérielle, surtout nocturne",
    "Apnée obstructive du sommeil",
    "Antécédents familiaux, myopie",
    "Cornée mince : vraie PIO sous-estimée"
  ],
  presentation: [
    "Asymptomatique ; excavation suspecte découverte avec une PIO normale",
    "Hémorragies papillaires plus fréquentes qu’en glaucome à PIO élevée",
    "Défauts de champ paracentraux, proches de la fixation, souvent tôt",
    "Encoche focale, atrophie péripapillaire (zone dépigmentée autour de la papille)"
  ],
  exam: {
    signs: [
      { sign: "Hémorragie papillaire (Drance)", why: "Classique du GPN ; signale une progression active." },
      { sign: "Encoche focale du bord neurorétinien", why: "Concordante avec un défaut paracentral dans l’hémichamp opposé (encoche inférieure → défaut supérieur)." },
      { sign: "Pâleur proportionnelle à l’excavation", why: "Pâleur > excavation, AV ou couleurs ↓ : penser compression ou ischémie, pas GPN." },
      { sign: "Angle ouvert", why: "Exclut une fermeture intermittente dont les pics de PIO échappent aux mesures." }
    ],
    tests: [
      { test: "Courbe de PIO (plusieurs heures) et pachymétrie (épaisseur cornéenne)", when: "Avant de conclure à une PIO normale", read: "Débusque une PIO élevée manquée ; cornée mince = PIO sous-estimée." },
      { test: "Gonioscopie (lentille à miroir qui montre l’angle)", when: "Systématique", read: "Contact iris–trabéculum ou adhérences = fermeture intermittente, pas GPN." },
      { test: "Champ 24-2 et 10-2", when: "Au départ et au suivi", read: "Le 10-2 (10° centraux) révèle des défauts paracentraux que la grille 24-2, aux mailles de 6°, peut manquer." },
      { test: "IRM cérébrale et orbitaire ; VS et CRP", when: "Signe atypique ; VS/CRP si ≥ 50 ans avec céphalée ou claudication de la mâchoire", read: "Cherche une compression (méningiome, adénome hypophysaire) ou une artérite à cellules géantes." }
    ]
  },
  ddx: [
    { dx: "Glaucome à angle ouvert avec PIO manquée", clue: "Pics nocturnes ou cornée mince ; la courbe de PIO tranche." },
    { dx: "Fermeture d’angle intermittente", clue: "Angle étroit, adhérences iris–trabéculum à la gonioscopie." },
    { dx: "Glaucome pigmentaire « éteint »", clue: "Pigment trabéculaire dense, fuseau de Krukenberg (pigment vertical sur la cornée) ; PIO jadis élevée." },
    { dx: "Neuropathie compressive", clue: "Pâleur > excavation, défaut respectant le méridien vertical." },
    { dx: "Ancienne ischémie du nerf (artérite, choc hémorragique)", clue: "Événement aigu passé ; atteinte stable, pâleur sectorielle." }
  ],
  redFlags: [
    "Âge < 50 ans, pâleur > excavation, AV ou couleurs ↓ : IRM",
    "Défaut respectant le méridien vertical (chiasma)",
    "≥ 50 ans avec céphalée ou claudication de la mâchoire : VS, CRP (artérite)",
    "Défaut paracentral qui menace la fixation : traiter sans attendre"
  ],
  cat: {
    algo: [
      { q: "PIO réellement ≤ 21 mmHg (courbe, cornée) ?", yes: "Poursuivre l’exclusion.", no: "Glaucome à angle ouvert classique." },
      { q: "Angle ouvert, sans cause secondaire ?", yes: "Continuer.", no: "Fermeture d’angle ou glaucome secondaire." },
      { q: "Signe atypique (âge < 50 ans, pâleur > excavation, AV ↓, défaut vertical) ?", yes: "IRM ± VS/CRP.", no: "GPN probable." },
      { q: "Fixation menacée ou progression documentée ?", yes: "Traiter : cible ≈ 30 % sous la base.", no: "Observer : ≈ 3 champs par an pour mesurer le rythme." }
    ],
    phases: [
      { phase: "observation", items: ["Exclure les imitateurs : courbe de PIO, gonioscopie, pachymétrie, IRM si atypique", "Mesurer le rythme : bien des GPN non traités ne progressent pas (CNTGS)"] },
      { phase: "medical", items: ["Analogue des prostaglandines (PGA) le soir ; brimonidine en option (LoGTS)", "Hypotension nocturne et apnée : à revoir avec le médecin traitant (tension artérielle sur 24 h si progression)"] },
      { phase: "laser", items: ["SLT (laser doux sur le trabéculum) : baisse absolue plus faible quand la PIO de départ est basse"] },
      { phase: "chirurgie", items: ["Progression malgré tout : trabéculectomie avec mitomycine C (anticicatrisant), la plus apte à obtenir une PIO très basse"] },
      { phase: "suivi", items: ["24-2 et 10-2, OCT RNFL et maculaire ; noter chaque hémorragie papillaire"] }
    ],
    local: "Au Québec, l’optométriste peut amorcer le traitement d’un glaucome débutant, mais doit diriger vers l’ophtalmologiste (O-7, r. 11.1) ; le GPN justifie une évaluation médicale pour exclure les imitateurs. Prioriser l’IRM pour les cas atypiques, vu les délais d’accès."
  },
  treatments: [
    { name: "Analogue des prostaglandines (PGA)", how: "Goutte le soir qui relâche la matrice du muscle ciliaire : ↑ sortie uvéosclérale, même quand la PIO est déjà normale.", why: "Première intention quand on décide de traiter.", pros: "1 goutte par jour ; efficace la nuit.", cons: "Difficile d’atteindre −30 % si la PIO de départ est basse.", cx: "Rougeur, cils longs, iris foncé, fonte graisseuse orbitaire." },
    { name: "Brimonidine", how: "Goutte 2–3 fois par jour (agoniste alpha-2) : ↓ production d’aqueuse et ↑ voie uvéosclérale ; neuroprotection suggérée en laboratoire.", why: "Option dans le GPN : moins de progression du champ qu’avec le timolol dans LoGTS, à PIO comparable.", pros: "Seul essai de gouttes suggérant un effet au-delà de la PIO.", cons: "Nombreux abandons pour allergie : résultat débattu.", cx: "Conjonctivite folliculaire, bouche sèche, somnolence ; contre-indiquée avant 2 ans." },
    { name: "Facteurs systémiques", how: "Pas un traitement oculaire : demander au médecin traitant de revoir les antihypertenseurs pris au coucher ; dépister et traiter l’apnée du sommeil.", why: "GPN qui progresse avec hypotension nocturne ou apnée.", pros: "Aucun risque pour l’œil.", cons: "Preuves limitées.", cx: "Risque cardiovasculaire si on modifie un traitement sans le médecin." },
    { name: "SLT ou trabéculectomie", how: "SLT : laser en clinique sur le trabéculum. Trabéculectomie : au bloc, fistule sous un volet de sclère vers une bulle sous la conjonctive.", why: "Progression malgré les gouttes.", pros: "Trabéculectomie : PIO la plus basse.", cons: "SLT modeste si PIO basse ; chirurgie risquée.", cx: "Hypotonie, fuite, infection de la bulle, cataracte." }
  ],
  pearls: [
    { q: "Qu’élimines-tu avant de dire GPN ?", a: "Une PIO élevée manquée (courbe, cornée mince), une fermeture intermittente (gonioscopie), une cause secondaire, puis une neuropathie non glaucomateuse (IRM si atypique, VS/CRP si artérite possible)." },
    { q: "Que montre la CNTGS ?", a: "Une baisse de 30 % réduit la progression (≈ 12 % vs 35 %, per protocole), mais bien des non-traités ne progressent pas : on peut observer un GPN stable, loin de la fixation." },
    { q: "Pourquoi un champ 10-2 ?", a: "Le GPN touche tôt la région paracentrale ; la grille 24-2 peut manquer ces petits défauts proches de la fixation." }
  ],
  mnemonic: { title: "Avant de dire GPN : « PACI »", text: "Éliminer **P**IO manquée, **A**ngle qui se ferme par intermittence, **C**ompression (IRM), **I**schémie ancienne (artérite, choc)." },
  compare: {
    title: "Champ normal vs GPN",
    normal: { figure: { type: "vf", pattern: "normal", eye: "OD", map: "pd" }, caption: "Champ 24-2 normal : aucune zone déprimée en déviation corrigée (PD)." },
    patho: { figure: { type: "vf", pattern: "sup-paracentral", eye: "OD", map: "pd" }, caption: "Scotome paracentral supérieur, près de la fixation.", reveal: ["Points déprimés quelques degrés au-dessus de la fixation", "Respecte le méridien horizontal", "Atteinte attendue : papille et RNFL inférieurs", "Préciser avec un 10-2"] }
  },
  sources: [
    "CNTGS (Collaborative Normal-Tension Glaucoma Study Group, Am J Ophthalmol 1998)",
    "LoGTS (Krupin T et al., Am J Ophthalmol 2011)",
    "AAO PPP Primary Open-Angle Glaucoma (Gedde SJ et al., Ophthalmology, en ligne 9 févr. 2026)",
    "COS 2009 : Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)"
  ]
},
{
  id: "g-fermeture",
  module: "C",
  order: 4,
  title: "Fermeture primaire de l’angle (PACS, PAC, PACG)",
  en: "Primary angle-closure disease (PACD)",
  tags: ["frequent", "highyield"],
  oneLiner: "L’iris périphérique bloque le filtre de l’angle : dépister à la gonioscopie, classer PACS, PAC ou PACG, puis ouvrir l’angle selon le risque.",
  definition: "Dans la fermeture primaire de l’angle, l’iris périphérique vient s’appliquer contre le trabéculum (le filtre de l’angle) et empêche l’humeur aqueuse de sortir, sur un œil prédisposé (petit œil, cristallin épais). On la classe en trois stades : contact sans dommage (PACS), contact avec pression élevée ou adhérences (PAC), puis atteinte du nerf optique (PACG).",
  anatomy: {
    text: "L’angle iridocornéen (iridocorneal angle) contient le trabéculum ; à la gonioscopie (examen de l’angle avec une lentille à miroir), on voit de l’arrière vers l’avant : racine de l’iris, bande ciliaire, éperon scléral, trabéculum, ligne de Schwalbe. L’aqueuse passe de la chambre postérieure à l’antérieure en glissant entre iris et cristallin ; un œil court au cristallin épais a un angle étroit.",
    figure: { type: "eye", highlight: ["angle", "trabeculum", "iris", "pupille", "cristallin", "chambre-posterieure"] }
  },
  causal: {
    title: "Du bloc pupillaire à la neuropathie",
    steps: [
      { label: "Œil court, cristallin épais", detail: "Œil court et cristallin qui épaissit avec l’âge : l’iris se retrouve tout près du trabéculum.", kind: "cause" },
      { label: "Bloc pupillaire relatif", detail: "L’aqueuse passe mal entre iris et cristallin ; la pression monte derrière l’iris, qui bombe vers l’avant.", kind: "mecanisme" },
      { label: "Contact iridotrabéculaire", detail: "L’iris s’applique sur le trabéculum, surtout en pénombre : l’aqueuse ne sort plus à cet endroit.", kind: "mecanisme" },
      { label: "Synéchies antérieures périphériques", detail: "Le contact répété colle l’iris au trabéculum (PAS, peripheral anterior synechiae : adhérences permanentes).", kind: "lesion" },
      { label: "PIO élevée, lente ou brutale", detail: "Fermeture progressive et silencieuse, ou soudaine (crise aiguë).", kind: "signe" },
      { label: "Neuropathie (PACG)", detail: "Le nerf optique se creuse, souvent plus sévèrement qu’à angle ouvert.", kind: "complication" }
    ],
    levers: [
      { at: 1, label: "Iridotomie au laser (LPI)", detail: "Petit trou percé au laser YAG dans l’iris périphérique : l’aqueuse court-circuite la pupille, l’iris s’aplatit et l’angle s’ouvre." },
      { at: 0, label: "Extraction du cristallin", detail: "Remplacer le cristallin épais par un implant mince libère l’angle (essai EAGLE)." },
      { at: 4, label: "Gouttes hypotensives", detail: "Baissent la PIO résiduelle, sans rouvrir un angle collé." }
    ]
  },
  risk: [
    "Origine inuite (Nunavik) ou est-asiatique ; femme ; âge > 50 ans",
    "Hypermétropie, longueur axiale courte, petite cornée (AAO 2026)",
    "Chambre antérieure peu profonde, cristallin épais",
    "Antécédents familiaux de fermeture",
    "Médicaments qui dilatent (anticholinergiques, sympathomimétiques) ; topiramate et sulfamidés (effusion)"
  ],
  presentation: [
    "Souvent asymptomatique : angle étroit découvert à l’examen",
    "Le soir : vision embrouillée, halos et céphalée qui cèdent au sommeil (fermetures intermittentes)",
    "PIO élevée chronique avec adhérences ; puis excavation et défauts de champ"
  ],
  exam: {
    signs: [
      { sign: "Van Herick ≤ 2 (chambre périphérique ≤ 1/4 de l’épaisseur cornéenne)", why: "Estimation rapide de l’angle à la lampe à fente ; ≤ 2 impose une gonioscopie." },
      { sign: "Iris convexe, bombé vers l’avant", why: "Évoque un bloc pupillaire, corrigeable par iridotomie." },
      { sign: "Iris plat avec chambre centrale profonde", why: "Évoque un iris plateau : l’angle peut rester fermé après iridotomie." },
      { sign: "Taches de Vogt (glaukomflecken), atrophie irienne sectorielle", why: "Cicatrices d’une crise aiguë passée." }
    ],
    tests: [
      { test: "Gonioscopie dynamique en pièce sombre, petit faisceau", when: "Tout angle étroit ; base du diagnostic et du suivi (AAO 2026)", read: "Trabéculum pigmenté caché sur ≥ 180° = contact ; l’indentation ouvre une apposition, pas les PAS. Noter par quadrant le grade de Shaffer et l’étendue des PAS (en heures)." },
      { test: "AS-OCT (OCT du segment antérieur) ou UBM (échographie haute fréquence)", when: "Angle douteux ; UBM si iris plateau suspecté", read: "Contact à l’AS-OCT malgré une gonioscopie ouverte : risque de fermeture ; l’UBM montre les procès ciliaires." },
      { test: "OCT RNFL et champ visuel", when: "Au diagnostic", read: "Neuropathie = PACG ; sinon PACS ou PAC." },
      { test: "Microscopie spéculaire (comptage des cellules endothéliales)", when: "Après une crise, avant chirurgie", read: "Densité souvent ↓ après crise ou PACG." }
    ]
  },
  ddx: [
    { dx: "Iris plateau", clue: "Iris plat, chambre centrale profonde ; angle fermé malgré iridotomie perméable." },
    { dx: "Fermeture par le cristallin (phacomorphique)", clue: "Cataracte gonflée ; chambre plus étroite que l’œil adelphe." },
    { dx: "Effusion ciliochoroïdienne (topiramate, sulfamidés)", clue: "Bilatérale, myopie aiguë ; ni iridotomie ni pilocarpine." },
    { dx: "Fermeture secondaire", clue: "Néovaisseaux, synéchies postérieures (uvéite), iris anormal d’un seul côté." }
  ],
  redFlags: [
    "Halos et céphalée récurrents le soir : fermetures intermittentes, traiter vite",
    "Myopie aiguë bilatérale sous topiramate : effusion, pas d’iridotomie",
    "Angle encore fermé malgré une iridotomie perméable"
  ],
  cat: {
    algo: [
      { q: "Van Herick ≤ 2 ou angle étroit suspecté ?", yes: "Gonioscopie dynamique en pièce sombre.", no: "Suivi habituel." },
      { q: "Contact iridotrabéculaire ≥ 180° ?", yes: "Fermeture primaire : classer.", no: "Angle ouvert ; réévaluer avec l’âge." },
      { q: "PIO élevée, PAS ou neuropathie ?", yes: "PAC ou PACG : traiter.", no: "PACS : décision partagée (LPI ou observation)." },
      { q: "≥ 50 ans et PAC à PIO ≥ 30 mmHg, PACG ou cataracte ?", yes: "Extraction du cristallin, même clair (EAGLE).", no: "Iridotomie, puis gouttes au besoin." },
      { q: "Angle encore fermé après iridotomie perméable ?", yes: "Iris plateau ou cristallin : UBM, iridoplastie ou extraction.", no: "Suivi : gonioscopie, PIO, OCT, champ." }
    ],
    phases: [
      { phase: "observation", items: ["PACS à faible risque : observation et gonioscopie périodique ; enseigner les symptômes d’alarme"] },
      { phase: "medical", items: ["Gouttes pour la PIO résiduelle après ouverture de l’angle"] },
      { phase: "laser", items: ["Iridotomie : vérifier sa perméabilité et la PIO 30 min à 2 h après", "Iridoplastie si iris plateau"] },
      { phase: "chirurgie", items: ["Extraction du cristallin, même clair (PAC à PIO élevée, PACG)", "PACG avancé : phaco + goniosynéchialyse (décollement chirurgical des PAS) ou chirurgie filtrante"] },
      { phase: "suivi", items: ["Gonioscopie, PIO, OCT et champ : l’angle se referme à mesure que le cristallin grossit"] }
    ],
    local: "Les populations inuites du Nunavik ont parmi les plus hauts taux de fermeture primaire au monde : gonioscopie systématique chez ces patients. L’optométriste qui voit un angle étroit dirige vers l’ophtalmologiste."
  },
  treatments: [
    { name: "Iridotomie périphérique au laser (LPI)", how: "Laser en clinique : après pilocarpine (iris tendu) et apraclonidine (contre le pic de PIO), le laser YAG perce un petit trou dans l’iris périphérique ; l’aqueuse y passe et l’iris s’aplatit.", why: "Bloc pupillaire : PAC, œil adelphe d’une crise, PACS choisi en décision partagée.", pros: "Rapide ; prévient la crise.", cons: "Sans effet sur iris plateau ou cristallin.", cx: "Pic de PIO, saignement, dysphotopsies (surtout transitoires), atteinte zonulaire." },
    { name: "Extraction du cristallin (phacoémulsification)", how: "Chirurgie de la cataracte, même sur cristallin clair : un implant mince remplace le cristallin épais et l’angle s’ouvre.", why: "≥ 50 ans avec PAC à PIO ≥ 30 mmHg ou PACG (EAGLE) ; cataracte ; iris plateau.", pros: "EAGLE : meilleur contrôle de la PIO et qualité de vie que la LPI ; 10 fois plus de chances d’être sans gouttes à 3 ans.", cons: "Plus difficile sur œil court.", cx: "Rupture capsulaire, œdème cornéen, mal-direction (aqueuse détournée vers le vitré, rare)." },
    { name: "Iridoplastie au laser", how: "Laser en clinique : brûlures larges et douces sur l’iris très périphérique, qui se contracte et libère l’angle.", why: "Iris plateau, angle fermé malgré iridotomie.", pros: "Rapide, sans incision.", cons: "Effet parfois temporaire.", cx: "Inflammation, atrophie irienne." },
    { name: "Gouttes et chirurgie de glaucome", how: "Gouttes hypotensives ; sinon trabéculectomie (fistule vers une bulle sous la conjonctive) ou goniosynéchialyse.", why: "PIO élevée persistante ou PACG.", pros: "Contrôle la PIO résiduelle.", cons: "Les gouttes ne rouvrent pas l’angle.", cx: "Mal-direction, hémorragie suprachoroïdienne, hypotonie." }
  ],
  pearls: [
    { q: "Quels sont les mécanismes de fermeture ?", a: "Iris (bloc pupillaire, le plus fréquent), corps ciliaire (iris plateau), cristallin (épais ou gonflé) et poussée postérieure (effusion, mal-direction). L’iridotomie ne corrige que le bloc pupillaire." },
    { q: "Fais-tu une iridotomie à tout PACS ?", a: "Non. ZAP : la LPI réduit d’environ moitié le risque, mais l’incidence est très faible ; décision partagée selon l’accès aux soins, les antécédents familiaux et les médicaments dilatateurs (AAO 2026)." },
    { q: "Myopie aiguë et angles fermés des deux côtés sous topiramate : LPI ?", a: "Non : l’effusion ciliochoroïdienne pousse iris et cristallin vers l’avant. Cesser le topiramate avec le prescripteur, cycloplégique, stéroïde et hypotenseurs ; jamais de pilocarpine." }
  ],
  mnemonic: { title: "Angle : « I Can’t See Til Schwalbe »", text: "De l’arrière vers l’avant : **I**ris (racine), **C**iliaire (bande), **S**cléral (éperon), **T**rabéculum, **S**chwalbe. Shaffer 4 = bande ciliaire visible ; 1 = Schwalbe seulement." },
  compare: {
    title: "Angle ouvert vs angle fermé",
    normal: { figure: { type: "gonio", grade: 4, pas: false, pigment: "light", nv: false, recession: false }, caption: "Shaffer 4 : toutes les structures visibles jusqu’à la bande ciliaire." },
    patho: { figure: { type: "gonio", grade: 1, pas: true, pigment: "light", nv: false, recession: false }, caption: "Shaffer 1 avec synéchies antérieures périphériques.", reveal: ["Ligne de Schwalbe (± trabéculum antérieur, non pigmenté) seule visible", "Trabéculum pigmenté et éperon cachés par l’iris", "PAS : l’indentation ne les décolle pas", "Stade PAC si le nerf est sain"] }
  },
  sources: [
    "AAO PPP Primary Angle Closure Disease (Gedde SJ, Chopra V, Vinod K et al., Ophthalmology, en ligne 9 févr. 2026)",
    "EAGLE (Azuara-Blanco A et al., Lancet 2016)",
    "ZAP (He M et al., Lancet 2019)",
    "Classification ISGEO (Foster PJ et al., Br J Ophthalmol 2002)"
  ]
},
{
  id: "g-crise",
  module: "C",
  order: 5,
  title: "Crise aiguë de fermeture de l’angle",
  en: "Acute angle-closure crisis",
  tags: ["urgent", "highyield", "piege"],
  oneLiner: "Œil rouge douloureux, halos, cornée trouble, pupille mi-dilatée fixe et PIO très haute : baisser la PIO maintenant, puis iridotomie des deux yeux.",
  definition: "La crise aiguë de fermeture de l’angle survient quand l’iris bloque soudainement et complètement le filtre de l’angle : l’humeur aqueuse ne sort plus et la pression intraoculaire (PIO) monte très haut en quelques heures. C’est une urgence : le nerf optique, la cornée et l’iris peuvent être abîmés de façon permanente.",
  anatomy: {
    text: "L’aqueuse passe de la chambre postérieure à l’antérieure par la pupille, puis sort par le trabéculum (filtre de l’angle). Sur un œil court au cristallin épais, l’iris frotte contre le cristallin ; en mi-dilatation, ce contact gêne le plus le passage (bloc pupillaire). L’endothélium cornéen pompe l’eau hors de la cornée ; une PIO très haute dépasse cette pompe.",
    figure: { type: "eye", highlight: ["angle", "iris", "pupille", "cristallin", "chambre-posterieure", "cornee"] }
  },
  causal: {
    title: "Du déclencheur à l’œil dur",
    steps: [
      { label: "Œil prédisposé et déclencheur", detail: "Œil court, cristallin épais ; la pénombre, le stress ou un médicament dilatateur mettent la pupille en mi-dilatation.", kind: "cause" },
      { label: "Bloc pupillaire complet", detail: "L’aqueuse ne passe plus entre iris et cristallin : la pression monte derrière l’iris, qui bombe vers l’avant.", kind: "mecanisme" },
      { label: "Angle fermé sur 360°", detail: "L’iris périphérique se plaque sur le trabéculum : plus rien ne sort, alors que la production continue.", kind: "mecanisme" },
      { label: "PIO très élevée, œil rouge", detail: "Cornée œdémateuse (pompe dépassée : halos, flou), sphincter irien ischémique (pupille fixe), douleur et vomissements.", kind: "signe" },
      { label: "Dommages en quelques heures", detail: "Synéchies antérieures périphériques (PAS : iris collé à l’angle), perte endothéliale, atrophie irienne, neuropathie optique.", kind: "complication" }
    ],
    levers: [
      { at: 3, label: "Gouttes, acétazolamide, mannitol", detail: "Les gouttes et l’acétazolamide ↓ la production d’aqueuse ; le mannitol IV déshydrate le vitré, ce qui recule le cristallin." },
      { at: 2, label: "Indentation et pilocarpine", detail: "Appuyer sur la cornée chasse l’aqueuse vers l’angle ; la pilocarpine (myotique) tire l’iris hors de l’angle, une fois la PIO abaissée." },
      { at: 1, label: "Iridotomie (LPI)", detail: "Petit trou percé au laser dans l’iris périphérique : l’aqueuse contourne la pupille ; traitement définitif du bloc." },
      { at: 0, label: "Extraction du cristallin", detail: "Retire le cristallin épais : supprime la cause anatomique." }
    ]
  },
  risk: [
    "Femme, âge > 50 ans, hypermétropie, œil court",
    "Origine inuite (Nunavik) ou est-asiatique",
    "Angle étroit connu ou antécédents familiaux de fermeture",
    "Pénombre, stress ; gouttes dilatatrices, médicaments anticholinergiques ou sympathomimétiques (antihistaminiques, tricycliques, décongestionnants)"
  ],
  presentation: [
    "Douleur oculaire intense et baisse de vision brutales, d’un seul œil",
    "Halos colorés autour des lumières",
    "Céphalée, nausées, vomissements (imite une migraine)",
    "Œil rouge, globe dur au toucher"
  ],
  exam: {
    signs: [
      { sign: "PIO très élevée (souvent > 40 mmHg)", why: "Confirme la crise ; mesurer à tout œil rouge douloureux avec céphalée." },
      { sign: "Œdème épithélial cornéen (aspect dépoli)", why: "La PIO dépasse la pompe endothéliale : explique halos et flou." },
      { sign: "Pupille mi-dilatée, peu réactive", why: "Sphincter ischémique ; distingue la crise d’une uvéite (pupille petite)." },
      { sign: "Chambre antérieure étroite, aussi dans l’œil adelphe", why: "Œil adelphe étroit = mécanisme primaire ; adelphe profond = chercher une cause secondaire." }
    ],
    tests: [
      { test: "Tonométrie (Goldmann, ou Tono-Pen, tonomètre portatif, si cornée œdémateuse)", when: "Immédiatement", read: "PIO très haute ; recontrôler 30–60 min après le traitement." },
      { test: "Gonioscopie (lentille à miroir qui montre l’angle) des deux yeux", when: "Dès que la cornée le permet ; œil adelphe d’emblée", read: "Angle fermé ; l’indentation distingue apposition et PAS et peut rouvrir l’angle." },
      { test: "Microscopie spéculaire, OCT et champ visuel", when: "Après la crise", read: "Densité endothéliale souvent ↓ ; documenter le nerf optique." }
    ]
  },
  ddx: [
    { dx: "Glaucome néovasculaire", clue: "Néovaisseaux sur l’iris, diabète ou occlusion veineuse ; œil adelphe ouvert." },
    { dx: "Uvéite hypertensive (herpès ; Posner-Schlossman : crises de PIO avec peu de cellules)", clue: "Précipités cornéens, cellules ; angle ouvert ; pupille non mi-dilatée." },
    { dx: "Glaucome phacomorphique", clue: "Cataracte gonflée ; chambre bien plus étroite que l’œil adelphe." },
    { dx: "Effusion au topiramate ou aux sulfamidés", clue: "Bilatérale, myopie aiguë ; ni iridotomie ni pilocarpine." },
    { dx: "Migraine, céphalée en grappe", clue: "PIO normale, cornée claire." }
  ],
  redFlags: [
    "PIO inchangée après 1 h de traitement maximal : mannitol, appeler l’ophtalmologiste de garde",
    "Crise bilatérale : penser effusion médicamenteuse (topiramate)",
    "Contre-indications à l’acétazolamide (allergie sulfa, insuffisance rénale, drépanocytose) ou au mannitol (insuffisance cardiaque ou rénale)"
  ],
  cat: {
    algo: [
      { q: "Œil rouge douloureux, PIO très haute, chambre étroite, pupille mi-dilatée ?", yes: "Crise : gouttes hypotensives et acétazolamide sans délai.", no: "Autre œil rouge douloureux (uvéite, kératite, glaucome néovasculaire)." },
      { q: "Atteinte bilatérale, myopie aiguë ou topiramate ?", yes: "Effusion : cesser le médicament, cycloplégique, stéroïde, hypotenseurs ; ni LPI ni pilocarpine.", no: "Examiner le cristallin." },
      { q: "Cataracte gonflée ou cristallin subluxé (chambre bien plus étroite que l’adelphe) ?", yes: "Pas de pilocarpine : baisser la PIO, puis extraction du cristallin rapide.", no: "Bloc pupillaire primaire probable." },
      { q: "PIO en baisse 30–60 min après gouttes et acétazolamide ?", yes: "Pilocarpine 1–2 %, puis LPI des deux yeux dès que la cornée s’éclaircit.", no: "Mannitol IV, indentation ; avis urgent (paracentèse, laser, chirurgie)." },
      { q: "Angle encore fermé après LPI perméable ?", yes: "Iris plateau ou cristallin : UBM, iridoplastie ou extraction.", no: "Suivi : PIO, gonioscopie, nerf optique, endothélium." }
    ],
    phases: [
      { phase: "medical", items: ["Sans délai : timolol 0,5 %, brimonidine ou apraclonidine, dorzolamide (1 goutte de chacun)", "Acétazolamide 500 mg PO ou IV (vérifier allergie sulfa, rein, potassium, drépanocytose)", "Acétate de prednisolone 1 % ; analgésique, antiémétique ; mannitol IV 1–2 g/kg si réfractaire", "Pilocarpine 1–2 % seulement après baisse de la PIO"] },
      { phase: "laser", items: ["LPI de l’œil atteint dès que la cornée est claire, et de l’œil adelphe", "Vérifier que le trou est perméable et mesurer la PIO 30 min à 2 h après"] },
      { phase: "chirurgie", items: ["Iridectomie chirurgicale si laser impossible ; extraction du cristallin si composante cristallinienne ou PIO non contrôlée"] },
      { phase: "suivi", items: ["Gonioscopie après LPI ; gouttes si PAS ou PIO résiduelle ; discuter l’extraction du cristallin"] }
    ],
    local: "Au Québec, ces patients consultent souvent d’abord l’urgence pour céphalée et vomissements, ou l’optométriste : amorcer le traitement et diriger le jour même vers l’ophtalmologiste de garde. Le guide optométrique canadien décrit la même séquence, jusqu’à la LPI bilatérale."
  },
  treatments: [
    { name: "Gouttes hypotensives et stéroïde", how: "Timolol (bêtabloquant), dorzolamide (IAC) et brimonidine ↓ la production d’aqueuse ; prednisolone 1 % calme l’inflammation.", why: "Première étape de toute crise.", pros: "Immédiat.", cons: "Effet limité si PIO extrême.", cx: "Timolol : bronchospasme, bradycardie." },
    { name: "Acétazolamide et mannitol", how: "Acétazolamide (PO, ou IV si vomissements) : inhibe l’anhydrase carbonique du corps ciliaire. Mannitol IV : déshydrate le vitré, le cristallin recule.", why: "Crise avérée ; mannitol si réfractaire.", pros: "Baisse rapide et puissante.", cons: "Contre-indications systémiques.", cx: "Paresthésies, hypokaliémie ; mannitol : surcharge, insuffisance cardiaque ou rénale." },
    { name: "Pilocarpine 1–2 % et indentation", how: "Goutte myotique qui tire l’iris hors de l’angle ; l’indentation (pression sur la cornée) pousse l’aqueuse vers l’angle.", why: "Une fois la PIO abaissée.", pros: "Peut rompre la crise avant le laser.", cons: "Inefficace si sphincter ischémique ; contre-indiquée si cause cristallinienne ou effusion.", cx: "Céphalée, myopie, avancée du cristallin." },
    { name: "Iridotomie au laser (LPI) des deux yeux", how: "Laser YAG en clinique : petit trou dans l’iris périphérique ; l’aqueuse contourne la pupille et l’iris s’aplatit.", why: "Traitement définitif du bloc ; prévention pour l’œil adelphe.", pros: "Rapide.", cons: "Difficile si cornée œdémateuse.", cx: "Pic de PIO, saignement, dysphotopsies." },
    { name: "Extraction du cristallin", how: "Chirurgie de la cataracte : implant mince à la place du cristallin épais, ce qui ouvre l’angle.", why: "Cataracte, composante cristallinienne, PIO non contrôlée après LPI.", pros: "Corrige la cause anatomique.", cons: "Plus risquée sur œil inflammé.", cx: "Œdème cornéen, rupture capsulaire." }
  ],
  pearls: [
    { q: "Pourquoi la pilocarpine seulement après la baisse de PIO ?", a: "Le sphincter ischémique ne répond pas tant que la PIO est très haute. Et si le cristallin est en cause (gonflé, subluxé) ou en cas d’effusion, la pilocarpine avance le cristallin et aggrave la fermeture." },
    { q: "Que fais-tu pour l’œil adelphe ?", a: "Gonioscopie et LPI prophylactique : environ la moitié des yeux adelphes font une crise en 5 ans sans LPI (AAO 2026)." },
    { q: "Céphalée et vomissements à l’urgence : piège ?", a: "La crise imite une migraine ou un problème digestif : regarder la cornée et la pupille, mesurer la PIO avant le scan cérébral." }
  ],
  mnemonic: { title: "Crise : « Baisser, Myosis, Percer »", text: "**Baisser** la PIO (gouttes, acétazolamide ± mannitol), **Myosis** à la pilocarpine une fois la PIO abaissée, **Percer** l’iris (LPI) des **deux** yeux." },
  compare: {
    title: "Segment antérieur normal vs crise aiguë",
    normal: { figure: { type: "slit", pattern: "normal" }, caption: "Cornée claire, chambre profonde, pupille ronde réactive." },
    patho: { figure: { type: "slit", pattern: "aacc" }, caption: "Crise aiguë : œil congestif, cornée dépolie, pupille mi-dilatée.", reveal: ["Œdème épithélial cornéen (aspect dépoli)", "Pupille mi-dilatée, ovale, aréactive", "Rougeur ciliaire autour du limbe", "Chambre étroite : invisible de face, à confirmer en fente fine (Van Herick)"] }
  },
  sources: [
    "AAO PPP Primary Angle Closure Disease (Gedde SJ, Chopra V, Vinod K et al., Ophthalmology, en ligne 9 févr. 2026)",
    "Guide optométrique canadien GPAO (MacIver S et al., Can J Optom 2017;79 Suppl 1)",
    "COS 2009 : Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)"
  ]
},
{
  id: "g-pxf",
  module: "C",
  order: 6,
  title: "Glaucome pseudo-exfoliatif",
  en: "Pseudoexfoliation (exfoliation) glaucoma",
  tags: ["frequent", "highyield"],
  oneLiner: "Patient âgé, dépôts blanchâtres en cible sur le cristallin après dilatation, PIO haute et fluctuante : glaucome agressif et cataracte à risque.",
  definition: "La pseudo-exfoliation (pseudoexfoliation syndrome) est une maladie liée à l’âge où un matériel fibrillaire anormal, semblable à des flocons de pellicule, se dépose sur le cristallin, les zonules, l’iris et le trabéculum (le filtre de l’angle). Quand ce matériel et le pigment bouchent le filtre, la pression monte et le nerf optique s’abîme : c’est le glaucome pseudo-exfoliatif, plus agressif que le glaucome primaire.",
  anatomy: {
    text: "Le cristallin est suspendu par les zonules, fibres attachées au corps ciliaire. À chaque mouvement de la pupille, la face postérieure pigmentée de l’iris glisse sur la capsule antérieure du cristallin. L’aqueuse transporte ce qui flotte dans la chambre antérieure jusqu’au trabéculum.",
    figure: { type: "eye", highlight: ["cristallin", "zonules", "iris", "pupille", "trabeculum"] }
  },
  causal: {
    title: "Des flocons au filtre bouché",
    steps: [
      { label: "Âge et terrain génétique", detail: "Des variants du gène LOXL1 (enzyme qui assemble l’élastine) favorisent la production d’un matériel fibrillaire anormal, après 60 ans surtout.", kind: "cause" },
      { label: "Dépôts sur capsule et zonules", detail: "Le matériel se dépose en cible sur la capsule antérieure et fragilise les zonules.", kind: "lesion" },
      { label: "Frottement iris–cristallin", detail: "L’iris frotte sur ces dépôts rugueux : il perd son pigment au bord pupillaire et dilate mal.", kind: "mecanisme" },
      { label: "Trabéculum encombré", detail: "Matériel et pigment se logent dans le filtre et l’abîment : la sortie de l’aqueuse chute.", kind: "mecanisme" },
      { label: "PIO haute et fluctuante", detail: "Pression souvent plus élevée qu’en glaucome primaire, avec de grandes variations : progression plus rapide.", kind: "signe" },
      { label: "Zonules et cataracte à risque", detail: "Zonules faibles : cristallin qui tremble (phacodonésis), complications en chirurgie, implant qui se luxe des années plus tard.", kind: "complication" }
    ],
    levers: [
      { at: 3, label: "SLT", detail: "Laser doux sur le trabéculum (déjà très pigmenté, donc réponse souvent bonne) : ↑ la sortie." },
      { at: 4, label: "Gouttes", detail: "Analogue des prostaglandines (contourne le filtre par la voie uvéosclérale) et suppresseurs de production." },
      { at: 3, label: "Chirurgie filtrante", detail: "Trabéculectomie ou tube : créent une sortie qui court-circuite le filtre encombré." }
    ]
  },
  risk: [
    "Âge > 60 ans (rare avant 50)",
    "Ascendance nordique (scandinave), mais présente partout",
    "Variants du gène LOXL1, antécédents familiaux",
    "Atteinte d’un seul œil au début ; l’autre œil peut suivre"
  ],
  presentation: [
    "Asymptomatique ; souvent découvert à la dilatation ou à l’évaluation de cataracte",
    "Atteinte asymétrique, parfois d’un seul œil",
    "PIO élevée, parfois > 30 mmHg, avec fluctuations",
    "Pupille qui dilate mal ; cataracte fréquente"
  ],
  exam: {
    signs: [
      { sign: "Dépôts en cible sur la capsule antérieure", why: "Disque central, zone claire où frotte l’iris, puis zone granuleuse périphérique : diagnostique, souvent visible seulement après dilatation." },
      { sign: "Flocons blancs au bord pupillaire", why: "Visibles avant dilatation ; indice précieux en clinique." },
      { sign: "Défauts de transillumination autour de la pupille", why: "Perte de pigment par frottement ; les distingue des fentes médio-périphériques de la dispersion pigmentaire." },
      { sign: "Mauvaise dilatation, phacodonésis (tremblement du cristallin)", why: "Signe de faiblesse zonulaire : prévenir le chirurgien de cataracte." }
    ],
    tests: [
      { test: "Examen sous dilatation", when: "Chez tout patient âgé, surtout si PIO asymétrique", read: "Recherche les dépôts en cible et la stabilité du cristallin." },
      { test: "Gonioscopie (lentille à miroir qui montre l’angle)", when: "Au diagnostic", read: "Pigment trabéculaire irrégulier, ligne de Sampaolesi (pigment en avant de la ligne de Schwalbe) ; angle parfois étroit." },
      { test: "PIO à plusieurs moments, OCT, champ visuel", when: "Au départ et au suivi rapproché", read: "Fluctuations et progression plus rapide qu’en glaucome primaire." }
    ]
  },
  ddx: [
    { dx: "Glaucome primaire à angle ouvert", clue: "Aucun dépôt capsulaire, même sous dilatation." },
    { dx: "Dispersion pigmentaire", clue: "Jeune myope, fuseau de Krukenberg (pigment vertical sur la cornée), fentes de transillumination médio-périphériques." },
    { dx: "Vraie exfoliation capsulaire", clue: "Clivage de la capsule chez les souffleurs de verre (chaleur infrarouge)." },
    { dx: "Fermeture de l’angle", clue: "Possible aussi en PXF : zonules lâches, cristallin qui avance ; la gonioscopie tranche." }
  ],
  redFlags: [
    "PIO très élevée ou grandes fluctuations : traiter et suivre de près",
    "Phacodonésis ou subluxation : chirurgie de cataracte à haut risque",
    "Baisse de vision soudaine des années après la cataracte : implant luxé dans son sac"
  ],
  cat: {
    algo: [
      { q: "Dépôts capsulaires ou flocons au bord pupillaire ?", yes: "Pseudo-exfoliation : examiner l’autre œil.", no: "Autre glaucome à angle ouvert." },
      { q: "Neuropathie (papille, OCT, champ) ?", yes: "Glaucome pseudo-exfoliatif : traiter, cible plus basse.", no: "Syndrome sans glaucome : PIO et nerf suivis de près ; traiter plus tôt une PIO élevée." },
      { q: "Angle ouvert et visible ?", yes: "SLT ou analogue des prostaglandines.", no: "Fermeture associée : iridotomie ou extraction du cristallin." },
      { q: "Progression ou cible non atteinte ?", yes: "Ajouter une classe, puis trabéculectomie ou tube.", no: "Suivi rapproché." },
      { q: "Cataracte à opérer ?", yes: "Prévoir zonules faibles : anneau de tension capsulaire, crochets.", no: "Réévaluer à chaque visite." }
    ],
    phases: [
      { phase: "observation", items: ["Syndrome sans glaucome : PIO, papille, OCT et champ plus souvent qu’un suspect ordinaire"] },
      { phase: "medical", items: ["Analogue des prostaglandines (PGA), puis combinaisons ; souvent plusieurs classes"] },
      { phase: "laser", items: ["SLT (souvent bonne réponse) ; énergie réduite si trabéculum très pigmenté, PIO contrôlée après"] },
      { phase: "chirurgie", items: ["Trabéculectomie avec mitomycine C (anticicatrisant) ou tube si progression", "Cataracte : chirurgien averti, pupille petite, zonules fragiles"] },
      { phase: "suivi", items: ["Visites rapprochées ; vérifier le centrage de l’implant après cataracte, à vie"] }
    ],
    local: "Fréquente chez les personnes âgées, surtout d’ascendance nord-européenne. Vu son agressivité, orienter rapidement vers l’ophtalmologiste (O-7, r. 11.1 : hors glaucome suspect, débutant ou cortisonique, l’optométriste doit obtenir le consentement d’un médecin pour traiter)."
  },
  treatments: [
    { name: "Gouttes hypotensives", how: "Gouttes quotidiennes : analogue des prostaglandines (↑ sortie uvéosclérale) puis bêtabloquant, inhibiteur de l’anhydrase carbonique ou brimonidine (↓ production).", why: "Première intention, souvent en combinaison.", pros: "Simples, sans intervention.", cons: "Contrôlent moins bien les fluctuations ; plusieurs classes souvent nécessaires.", cx: "Selon la classe (rougeur, bronchospasme, allergie)." },
    { name: "SLT (trabéculoplastie sélective au laser)", how: "Laser en clinique à travers une lentille : impacts doux sur le trabéculum, qui se remodèle et laisse mieux sortir l’aqueuse.", why: "Première intention ou appoint ; trabéculum pigmenté = bonne cible.", pros: "Réponse initiale souvent bonne ; sans gouttes.", cons: "Effet parfois moins durable.", cx: "Pic de PIO (plus probable si très pigmenté), inflammation." },
    { name: "Chirurgie filtrante (trabéculectomie, tube)", how: "Au bloc : trabéculectomie (fistule sous un volet de sclère vers une bulle sous la conjonctive) ou tube relié à une plaque.", why: "Progression ou PIO non contrôlée.", pros: "Contourne le filtre encombré ; PIO basse.", cons: "Suivi intensif.", cx: "Hypotonie, fuite, infection de la bulle." },
    { name: "Chirurgie de cataracte adaptée", how: "Phacoémulsification avec outils pour zonules faibles : anneau de tension capsulaire (anneau qui tend le sac), crochets iriens ou capsulaires.", why: "Cataracte (fréquente) ; ouvre aussi l’angle si étroit.", pros: "Améliore la vision ; baisse souvent un peu la PIO.", cons: "Pupille petite, chirurgie plus difficile.", cx: "Rupture zonulaire, issue de vitré, pic de PIO postopératoire, contraction du sac, luxation tardive de l’implant dans son sac." }
  ],
  pearls: [
    { q: "Pourquoi dilater ce patient ?", a: "Le disque central et la zone périphérique des dépôts sont souvent invisibles sans dilatation ; on note aussi la mauvaise dilatation et la phacodonésis, précieuses pour le chirurgien." },
    { q: "En quoi ce glaucome diffère-t-il du GPAO ?", a: "PIO plus haute, plus fluctuante, progression plus rapide et réponse moindre aux gouttes : cible plus basse, suivi plus serré, chirurgie plus tôt. La pseudo-exfoliation est un facteur de progression dans EMGT." },
    { q: "Quel risque tardif après la cataracte ?", a: "Les zonules continuent de faiblir : l’implant peut se luxer dans son sac des années plus tard. Toute baisse de vision brusque chez un pseudophaque PXF : vérifier la position de l’implant." }
  ],
  mnemonic: { title: "PXF : les 5 P", text: "**P**oudre en cible sur le cristallin, **P**upille qui dilate mal, **P**igment trabéculaire (Sampaolesi), **P**ression haute et fluctuante, **P**hacodonésis." },
  compare: {
    title: "Cristallin normal vs pseudo-exfoliation",
    normal: { figure: { type: "slit", pattern: "normal" }, caption: "Capsule antérieure lisse, pupille bien dilatée." },
    patho: { figure: { type: "slit", pattern: "pxf" }, caption: "Dépôts blanchâtres en cible sur la capsule antérieure.", reveal: ["Disque central de matériel", "Zone claire intermédiaire (frottement de l’iris)", "Zone granuleuse périphérique", "Flocons au bord pupillaire"] }
  },
  sources: [
    "Ritch R, Schlötzer-Schrehardt U. Exfoliation syndrome (Surv Ophthalmol 2001)",
    "Thorleifsson G et al. Variants LOXL1 et glaucome exfoliatif (Science 2007)",
    "EMGT : facteurs de progression (Leske MC et al., Arch Ophthalmol 2003)",
    "AAO PPP Primary Open-Angle Glaucoma (Gedde SJ et al., Ophthalmology, en ligne 9 févr. 2026)"
  ]
},
{
  id: "g-pigmentaire",
  module: "C",
  order: 7,
  title: "Dispersion pigmentaire et glaucome pigmentaire",
  en: "Pigment dispersion syndrome and pigmentary glaucoma",
  tags: ["highyield", "piege"],
  oneLiner: "Jeune homme myope, fuseau de Krukenberg, fentes de transillumination médio-périphériques et angle très pigmenté : pics de PIO à l’effort.",
  definition: "Dans la dispersion pigmentaire, l’iris, creusé vers l’arrière, frotte contre les zonules du cristallin et libère son pigment, qui se dépose sur la cornée, le cristallin et le trabéculum (le filtre de l’angle). Si le filtre surchargé laisse monter la pression et que le nerf optique s’abîme, on parle de glaucome pigmentaire.",
  anatomy: {
    text: "La face postérieure de l’iris est tapissée d’un épithélium très pigmenté ; juste derrière se trouvent les zonules, fibres qui retiennent le cristallin. Chez le myope, la chambre antérieure est profonde et l’iris peut prendre une forme concave. L’aqueuse circule en boucle dans la chambre antérieure et finit au trabéculum.",
    figure: { type: "eye", highlight: ["iris", "zonules", "cristallin", "trabeculum", "cornee"] }
  },
  causal: {
    title: "Du frottement de l’iris au filtre saturé",
    steps: [
      { label: "Iris concave chez le myope", detail: "Chambre profonde, iris large et souple qui se creuse vers l’arrière.", kind: "cause" },
      { label: "Bloc pupillaire inversé", detail: "Clignement et accommodation poussent l’aqueuse devant l’iris ; la pression y devient plus haute et plaque l’iris contre les zonules.", kind: "mecanisme" },
      { label: "Pigment arraché", detail: "Les zonules frottent l’épithélium irien : fentes radiaires de transillumination en médio-périphérie.", kind: "lesion" },
      { label: "Pigment dispersé", detail: "Le courant de l’aqueuse dépose le pigment sur l’endothélium en fuseau vertical (Krukenberg) et en bande dense dans l’angle.", kind: "signe" },
      { label: "Trabéculum surchargé", detail: "Les cellules du filtre, saturées de pigment, s’abîment : la PIO monte, avec des pics à l’effort ou à la dilatation.", kind: "mecanisme" },
      { label: "Glaucome, puis phase éteinte", detail: "Atteinte du nerf ; avec l’âge, la libération de pigment cesse et la PIO peut se normaliser.", kind: "complication" }
    ],
    levers: [
      { at: 4, label: "Gouttes et SLT", detail: "L’analogue des prostaglandines contourne le filtre saturé ; la SLT (laser doux, énergie basse) relance l’écoulement." },
      { at: 1, label: "Pilocarpine, iridotomie", detail: "La pilocarpine resserre la pupille et tend l’iris ; l’iridotomie (petit trou au laser dans l’iris) égalise les pressions et aplatit l’iris. Bénéfice sur le glaucome non démontré." },
      { at: 5, label: "Chirurgie filtrante", detail: "Trabéculectomie ou tube si progression malgré gouttes et laser." }
    ]
  },
  risk: [
    "Adulte de 20 à 40 ans ; le glaucome survient plus souvent chez l’homme",
    "Myopie ; chambre antérieure profonde",
    "Ascendance européenne, antécédents familiaux",
    "Effort physique vigoureux (course, basketball) : déclenche des pics de PIO",
    "Conversion en glaucome : ≈ 10 % à 5 ans, 15 % à 15 ans (Siddiqui 2003)"
  ],
  presentation: [
    "Souvent asymptomatique ; découverte par un examen de routine",
    "Vision floue et halos après un effort ou une dilatation (pluie de pigment avec pic de PIO)",
    "Atteinte bilatérale, souvent asymétrique ; PIO fluctuante"
  ],
  exam: {
    signs: [
      { sign: "Fuseau de Krukenberg", why: "Pigment vertical sur l’endothélium central ; peu spécifique seul, évocateur avec les fentes iriennes." },
      { sign: "Fentes radiaires de transillumination médio-périphériques", why: "Empreinte du frottement zonulaire ; en PXF, les défauts sont plutôt autour de la pupille." },
      { sign: "Iris concave, chambre profonde", why: "Configuration à l’origine du bloc pupillaire inversé." },
      { sign: "Bande de pigment dense et homogène sur 360° de l’angle", why: "Pigment uniforme, contrairement au pigment irrégulier de la PXF." },
      { sign: "Ligne de pigment sur la capsule postérieure (ligne de Scheie)", why: "Pigment déposé là où les zonules s’attachent au cristallin, vu sous dilatation : appuie le diagnostic." }
    ],
    tests: [
      { test: "Gonioscopie (lentille à miroir qui montre l’angle)", when: "Au diagnostic", read: "Angle large, iris concave, pigment trabéculaire très foncé et homogène." },
      { test: "Rétro-illumination de l’iris", when: "À la lampe à fente, pupille non dilatée", read: "Fentes radiaires lumineuses en médio-périphérie." },
      { test: "PIO après effort ou après dilatation", when: "Si symptômes à l’effort", read: "Un pic confirme le rôle de la pluie de pigment." },
      { test: "Fond d’œil dilaté (rétine périphérique)", when: "Avant toute pilocarpine", read: "Myope : chercher palissades et déchirures, à risque de décollement." }
    ]
  },
  ddx: [
    { dx: "Pseudo-exfoliation", clue: "Patient âgé, dépôts en cible, défauts autour de la pupille, pigment irrégulier." },
    { dx: "Glaucome à pression normale", clue: "Phase éteinte : PIO normale mais pigment dense et antécédents de PIO haute." },
    { dx: "Uvéite pigmentée ou herpétique", clue: "Cellules, précipités cornéens, atrophie irienne sectorielle." },
    { dx: "Implant frottant l’iris (syndrome UGH : uvéite-glaucome-hyphéma)", clue: "Pseudophaque, implant dans le sulcus ; uvéite, hyphéma, glaucome." }
  ],
  redFlags: [
    "Pics de PIO symptomatiques à l’effort",
    "Éclairs ou corps flottants (myope) : décollement de rétine",
    "Dispersion d’un seul côté : chercher une cause secondaire (implant, trauma, tumeur)"
  ],
  cat: {
    algo: [
      { q: "Krukenberg, fentes radiaires et pigment dense dans l’angle ?", yes: "Dispersion pigmentaire.", no: "Autre source de pigment (PXF, implant, uvéite)." },
      { q: "Neuropathie (papille, OCT, champ) ?", yes: "Glaucome pigmentaire : PIO cible.", no: "Syndrome sans glaucome : surveiller PIO et nerf." },
      { q: "Angle ouvert, candidat au laser ?", yes: "SLT à énergie basse ou analogue des prostaglandines.", no: "Gouttes." },
      { q: "Pilocarpine envisagée ?", yes: "Fond d’œil dilaté d’abord ; mal tolérée chez le jeune.", no: "Poursuivre gouttes et laser." },
      { q: "Progression malgré tout ?", yes: "Trabéculectomie ou tube (jeune myope : risque de maculopathie d’hypotonie, plis maculaires si PIO trop basse).", no: "Suivi ; espacer si phase éteinte." }
    ],
    phases: [
      { phase: "observation", items: ["Syndrome sans glaucome : PIO, OCT et champ réguliers ; signaler les symptômes à l’effort"] },
      { phase: "medical", items: ["Analogue des prostaglandines (PGA) en première intention ; ajouter une classe au besoin"] },
      { phase: "laser", items: ["SLT à énergie basse (trabéculum très pigmenté), PIO contrôlée après", "Iridotomie : aplatit l’iris, mais bénéfice sur le glaucome non prouvé ; pas systématique"] },
      { phase: "chirurgie", items: ["Trabéculectomie avec mitomycine C (anticicatrisant) ou tube si progression"] },
      { phase: "suivi", items: ["Bilatéral et durable ; la PIO peut se normaliser après 50 ans (phase éteinte)"] }
    ],
    local: "Au Québec, la dispersion pigmentaire sans neuropathie est souvent suivie en optométrie comme glaucome suspect ; dès qu’un glaucome pigmentaire est établi, diriger vers l’ophtalmologiste pour le suivi médical (O-7, r. 11.1)."
  },
  treatments: [
    { name: "Analogue des prostaglandines (PGA)", how: "Goutte le soir qui relâche la matrice du muscle ciliaire : l’aqueuse sort par la voie uvéosclérale, sans passer par le filtre saturé.", why: "Première intention.", pros: "Efficace, 1 fois par jour.", cons: "Traitement à vie chez un jeune.", cx: "Rougeur, cils longs, iris foncé, fonte graisseuse orbitaire." },
    { name: "SLT à énergie basse", how: "Laser en clinique à travers une lentille : impacts doux sur le trabéculum, qui se remodèle ; énergie réduite, parfois sur la moitié de l’angle seulement, car le pigment absorbe beaucoup.", why: "Alternative ou ajout aux gouttes.", pros: "Réponse initiale souvent bonne.", cons: "Effet qui s’atténue.", cx: "Pic de PIO marqué si énergie trop forte." },
    { name: "Pilocarpine", how: "Goutte myotique : resserre la pupille, tend l’iris et l’éloigne des zonules, ce qui réduit la libération de pigment.", why: "Rarement ; cas choisis.", pros: "Agit sur le mécanisme.", cons: "Myopie induite, vision trouble, céphalée : mal tolérée chez le jeune.", cx: "Décollement de rétine chez le myope à palissades." },
    { name: "Iridotomie au laser (LPI)", how: "Laser YAG : petit trou dans l’iris périphérique ; les pressions s’égalisent et l’iris concave s’aplatit.", why: "Discutée chez le jeune avec iris très concave ; pas systématique.", pros: "Corrige la concavité.", cons: "Aucun bénéfice démontré sur la progression du glaucome.", cx: "Dysphotopsies, pic de PIO, saignement." }
  ],
  pearls: [
    { q: "Quel est le mécanisme de la dispersion ?", a: "Bloc pupillaire inversé : l’aqueuse poussée devant l’iris le plaque vers l’arrière, contre les zonules, qui en arrachent le pigment. D’où les fentes radiaires médio-périphériques." },
    { q: "Pourquoi une SLT à énergie basse ?", a: "Le trabéculum très pigmenté absorbe plus l’énergie : risque de pic de PIO marqué. On réduit l’énergie et on contrôle la PIO après." },
    { q: "Excavation à PIO normale chez un homme de 60 ans au pigment trabéculaire dense ?", a: "Penser au glaucome pigmentaire éteint : la PIO s’est normalisée, mais le nerf a été abîmé plus tôt. Il peut imiter un glaucome à pression normale." }
  ],
  mnemonic: { title: "Pigment à 3 endroits", text: "**Cornée** : fuseau de Krukenberg. **Iris** : fentes radiaires médio-périphériques. **Angle** : bande noire dense et homogène sur 360°." },
  compare: {
    title: "Cornée normale vs fuseau de Krukenberg",
    normal: { figure: { type: "slit", pattern: "normal" }, caption: "Endothélium clair, sans pigment." },
    patho: { figure: { type: "slit", pattern: "krukenberg" }, caption: "Fuseau vertical de pigment sur l’endothélium central.", reveal: ["Bande verticale brunâtre au centre de la cornée", "Dépôt sur l’endothélium, pas dans le stroma", "Chercher les fentes de transillumination", "Gonioscopie : pigment dense et homogène"] }
  },
  sources: [
    "Siddiqui Y et al. Risque de glaucome pigmentaire après dispersion pigmentaire (Am J Ophthalmol 2003)",
    "Campbell DG. Pigmentary dispersion and glaucoma: a new theory (Arch Ophthalmol 1979)",
    "Michelessi M, Lindsley K. Peripheral iridotomy for pigmentary glaucoma (Cochrane Database Syst Rev 2016)"
  ]
},
{
  id: "g-neovasculaire",
  module: "C",
  order: 8,
  title: "Glaucome néovasculaire",
  en: "Neovascular glaucoma (NVG)",
  tags: ["urgent", "highyield"],
  oneLiner: "Rétine ischémique (occlusion veineuse, diabète, carotide), néovaisseaux sur l’iris et dans l’angle, PIO très haute : anti-VEGF et panphotocoagulation en urgence.",
  definition: "Le glaucome néovasculaire survient quand une rétine privée d’oxygène sécrète un facteur de croissance des vaisseaux (VEGF, vascular endothelial growth factor) qui fait pousser de nouveaux vaisseaux anormaux sur l’iris et dans l’angle. Ces vaisseaux et leur membrane fibreuse bouchent puis ferment le filtre de l’angle, et la pression monte très haut, souvent dans un œil qui voit déjà mal.",
  anatomy: {
    text: "La rétine interne est nourrie par l’artère centrale de la rétine et drainée par la veine centrale ; si ce réseau se bouche ou s’appauvrit, la rétine devient ischémique. Le VEGF diffuse dans le vitré puis dans l’aqueuse jusqu’à l’iris et l’angle. Normalement, aucun vaisseau ne franchit l’éperon scléral pour se ramifier sur le trabéculum.",
    figure: { type: "eye", highlight: ["retine", "acr", "vcr", "iris", "angle", "trabeculum"] }
  },
  causal: {
    title: "De la rétine ischémique à l’angle fermé",
    steps: [
      { label: "Rétine ischémique", detail: "Occlusion de la veine centrale de la rétine (OVCR) ischémique, rétinopathie diabétique proliférante ou sténose carotidienne (syndrome ischémique oculaire) : la rétine manque d’oxygène.", kind: "cause" },
      { label: "Libération de VEGF", detail: "La rétine en souffrance sécrète du VEGF, qui gagne le segment antérieur par le vitré et l’aqueuse.", kind: "mecanisme" },
      { label: "Néovaisseaux iris et angle", detail: "Fins vaisseaux d’abord au bord pupillaire (NVI), puis dans l’angle (NVA), qui franchissent l’éperon scléral.", kind: "signe" },
      { label: "Stade à angle ouvert", detail: "Une membrane fibrovasculaire invisible recouvre le trabéculum : angle encore ouvert, mais l’aqueuse ne sort plus.", kind: "mecanisme" },
      { label: "Fermeture synéchiale", detail: "La membrane se contracte et tire l’iris sur l’angle (synéchies) : fermeture en fermeture éclair, ectropion uvéal, PIO très haute.", kind: "lesion" },
      { label: "Œil douloureux, vision perdue", detail: "Œdème cornéen, hyphéma, neuropathie optique rapide ; souvent dans les 3 mois d’une OVCR (« glaucome des 90 jours »).", kind: "complication" }
    ],
    levers: [
      { at: 1, label: "Anti-VEGF intravitréen", detail: "Injection dans le vitré d’un anticorps qui neutralise le VEGF : les néovaisseaux régressent en quelques jours, mais l’effet est temporaire." },
      { at: 0, label: "Panphotocoagulation rétinienne (PRP)", detail: "Laser qui détruit la rétine périphérique ischémique : supprime durablement la source de VEGF." },
      { at: 4, label: "Baisse de PIO et tube", detail: "Gouttes qui ↓ la production, puis tube de drainage (court-circuite l’angle fermé) ou cyclophotocoagulation (laser qui détruit une partie du corps ciliaire)." }
    ]
  },
  risk: [
    "OVCR ischémique (première cause avec le diabète)",
    "Rétinopathie diabétique proliférante, surtout mal contrôlée",
    "Syndrome ischémique oculaire : sténose carotidienne sévère",
    "Diabète, hypertension artérielle, âge avancé",
    "Plus rarement : occlusion de l’artère centrale, décollement de rétine chronique, tumeur intraoculaire"
  ],
  presentation: [
    "Douleur, rougeur, vision floue ou halos ; vision souvent déjà réduite par la maladie rétinienne",
    "Stade précoce asymptomatique : néovaisseaux découverts à l’examen soigneux de l’iris",
    "PIO très élevée, œdème cornéen, parfois hyphéma"
  ],
  exam: {
    signs: [
      { sign: "Néovaisseaux au bord pupillaire (NVI)", why: "Premier site habituel ; examiner l’iris AVANT la dilatation, qui les masque." },
      { sign: "Vaisseaux qui franchissent l’éperon et se ramifient sur le trabéculum (NVA)", why: "Toujours pathologiques ; les vaisseaux normaux de l’angle ne se ramifient pas sur le filtre." },
      { sign: "Ectropion uvéal (pigment irien retourné au bord pupillaire)", why: "Traction de la membrane qui se contracte : stade synéchial avancé." },
      { sign: "Fond d’œil : hémorragies diffuses, néovaisseaux rétiniens", why: "Identifie la cause : OVCR, rétinopathie diabétique, ischémie carotidienne." }
    ],
    tests: [
      { test: "Gonioscopie (lentille à miroir qui montre l’angle) avant dilatation", when: "OVCR ischémique ou rétinopathie proliférante, à chaque visite les premiers mois", read: "NVA, puis étendue des synéchies (stade)." },
      { test: "Fond d’œil dilaté, angiographie à la fluorescéine", when: "Au diagnostic", read: "Étendue de la non-perfusion rétinienne." },
      { test: "Échographie B", when: "Fond d’œil non visible", read: "Exclut décollement de rétine ou tumeur." },
      { test: "Doppler carotidien, HbA1c, tension artérielle", when: "Sans cause rétinienne évidente ; bilan systémique chez tous", read: "Sténose carotidienne = syndrome ischémique oculaire, risque d’AVC." }
    ]
  },
  ddx: [
    { dx: "Crise aiguë de fermeture primaire", clue: "Pas de néovaisseaux ; œil adelphe à angle étroit." },
    { dx: "Uvéite hypertensive", clue: "Précipités cornéens, cellules ; vaisseaux iriens normaux dilatés, radiaires, sans ramification fine." },
    { dx: "Uvéite hétérochromique de Fuchs", clue: "Fins vaisseaux de l’angle sans synéchies, hétérochromie, aucune ischémie rétinienne." },
    { dx: "Glaucome à cellules fantômes (ghost cells)", clue: "Après hémorragie du vitré : cellules kaki dans la chambre, angle ouvert sans néovaisseaux." }
  ],
  redFlags: [
    "OVCR ischémique : chercher NVI et NVA à chaque visite les 3 premiers mois",
    "PIO très élevée et douleur : prise en charge le jour même",
    "Œil adelphe diabétique : examiner et traiter la rétinopathie"
  ],
  cat: {
    algo: [
      { q: "Néovaisseaux de l’iris ou de l’angle ?", yes: "Néovascularisation : trouver la cause ischémique.", no: "Si OVCR ischémique ou rétinopathie proliférante : gonioscopie non dilatée régulière." },
      { q: "PIO élevée ?", yes: "Glaucome néovasculaire : anti-VEGF, PRP et baisse de PIO en urgence.", no: "Néovaisseaux sans glaucome : anti-VEGF et PRP rapides pour sauver l’angle." },
      { q: "Angle fermé par synéchies sur une grande partie ?", yes: "Les gouttes ne suffiront pas : prévoir un tube.", no: "Stade à angle ouvert : la PRP peut encore préserver l’angle." },
      { q: "Potentiel visuel utile ?", yes: "Tube après anti-VEGF (moins de saignement).", no: "Cyclophotocoagulation, atropine et stéroïde pour le confort." },
      { q: "Cause rétinienne évidente ?", yes: "Coordonner rétine et médecin traitant (glycémie, tension).", no: "Syndrome ischémique oculaire : Doppler carotidien (risque d’AVC)." }
    ],
    phases: [
      { phase: "medical", items: ["Anti-VEGF intravitréen le plus tôt possible (pont vers la PRP)", "Gouttes qui ↓ la production (timolol, dorzolamide, brimonidine) ± acétazolamide oral ; pas de pilocarpine", "Atropine 1 % et acétate de prednisolone 1 % : confort et inflammation"] },
      { phase: "laser", items: ["PRP complète dès que possible ; cryothérapie ou laser au bloc si milieux troubles"] },
      { phase: "chirurgie", items: ["Tube de drainage (Ahmed ou Baerveldt), idéalement après anti-VEGF ; trabéculectomie moins favorable (cicatrisation)"] },
      { phase: "suivi", items: ["Régression des néovaisseaux, gonioscopie, PIO, œil adelphe ; anti-VEGF répété au besoin"] },
      { phase: "escalade", items: ["Cyclophotocoagulation si potentiel visuel faible ou échec du tube ; œil aveugle douloureux : confort d’abord"] }
    ],
    local: "Au Québec, les injections et la PRP se font en clinique de rétine et les tubes en centre hospitalier : diriger le jour même et coordonner rétine et glaucome. Le dépistage de la rétinopathie diabétique, souvent fait par l’optométriste, reste la meilleure prévention."
  },
  treatments: [
    { name: "Anti-VEGF intravitréen (bévacizumab, ranibizumab, aflibercept)", how: "Injection en clinique d’un anticorps dans le vitré : il neutralise le VEGF et les néovaisseaux régressent en quelques jours.", why: "Dès le diagnostic ; avant une chirurgie (moins de saignement).", pros: "Effet rapide.", cons: "Temporaire : ne remplace pas la PRP.", cx: "Endophtalmite (rare), pic de PIO." },
    { name: "Panphotocoagulation rétinienne (PRP)", how: "Laser en clinique à travers une lentille : des centaines d’impacts détruisent la rétine ischémique, qui cesse de produire du VEGF.", why: "Traitement de fond.", pros: "Effet durable.", cons: "Agit en quelques semaines ; milieux clairs requis.", cx: "Champ périphérique et vision nocturne ↓, œdème maculaire aggravé." },
    { name: "Tube de drainage (Ahmed, Baerveldt)", how: "Au bloc : tube placé dans la chambre (ou par la pars plana) et relié à une plaque sur la sclère ; l’aqueuse court-circuite l’angle fermé.", why: "PIO non contrôlée avec potentiel visuel.", pros: "Résiste mieux à la cicatrisation que la trabéculectomie.", cons: "Œil inflammé et fragile.", cx: "Hyphéma, hypotonie, tube bouché, exposition." },
    { name: "Cyclophotocoagulation", how: "Laser appliqué à travers la sclère qui détruit une partie du corps ciliaire : moins d’aqueuse produite.", why: "Potentiel visuel faible ou échec du tube.", pros: "Rapide, sans incision.", cons: "Effet difficile à doser.", cx: "Hypotonie, phtisie (œil qui s’atrophie), baisse de vision." }
  ],
  pearls: [
    { q: "Anti-VEGF ou PRP ?", a: "Les deux : l’anti-VEGF fait régresser les néovaisseaux en quelques jours mais temporairement ; la PRP enlève durablement la source de VEGF. L’anti-VEGF est un pont, la PRP le traitement de fond." },
    { q: "Pourquoi pas de pilocarpine ?", a: "Elle augmente l’inflammation et la perméabilité vasculaire, favorise les synéchies et ne peut pas ouvrir un angle fermé par une membrane fibrovasculaire. On préfère atropine et stéroïde." },
    { q: "Quand chercher des néovaisseaux après une OVCR ?", a: "Surtout les 3 premiers mois d’une occlusion ischémique (« glaucome des 90 jours ») : examen de l’iris avant dilatation et gonioscopie à chaque visite ; PRP dès leur apparition (CVOS), plutôt qu’en prévention systématique." }
  ],
  mnemonic: { title: "Causes « DOC », traitement « IBBD »", text: "Causes : **D**iabète (rétinopathie proliférante), **O**cclusion veineuse centrale, **C**arotide (syndrome ischémique oculaire). Traitement : **I**njecter (anti-VEGF), **B**rûler (PRP), **B**aisser (PIO), **D**rainer (tube)." },
  compare: {
    title: "Angle normal vs néovaisseaux de l’angle",
    normal: { figure: { type: "gonio", grade: 4, pas: false, pigment: "light", nv: false, recession: false }, caption: "Angle ouvert, aucun vaisseau sur le trabéculum." },
    patho: { figure: { type: "gonio", grade: 3, pas: false, pigment: "light", nv: true, recession: false }, caption: "Fins vaisseaux qui franchissent l’éperon : stade à angle ouvert.", reveal: ["Vaisseaux fins, arborisés, qui croisent l’éperon scléral", "Ramification sur le trabéculum", "Angle encore ouvert : la PRP peut encore le sauver", "Chercher les NVI au bord pupillaire"] }
  },
  sources: [
    "Central Vein Occlusion Study (CVOS Group, Ophthalmology 1995)",
    "Hayreh SS. Neovascular glaucoma (Prog Retin Eye Res 2007)",
    "Ahmed Baerveldt Comparison Study (Budenz DL et al., Ophthalmology 2011)",
    "AAO PPP Retinal Vein Occlusions (Flaxel CJ et al., Ophthalmology 2020)"
  ]
},
{
  id: "g-secondaires",
  module: "C",
  order: 9,
  title: "Glaucomes cortisonique et uvéitique",
  en: "Steroid-induced and uveitic glaucoma",
  tags: ["frequent", "highyield", "piege"],
  oneLiner: "PIO qui monte sous cortisone ou pendant une uvéite : identifier le mécanisme, ajuster le stéroïde, traiter l’inflammation, éviter la pilocarpine.",
  definition: "Le glaucome cortisonique est une hausse de pression intraoculaire (PIO) provoquée par un corticostéroïde (gouttes, injection, implant, plus rarement inhalé ou oral) chez une personne sensible, appelée répondeur. Le glaucome uvéitique est une hausse de PIO causée par l’inflammation intraoculaire (uvéite), qui enflamme ou bouche le filtre de l’angle ou colle l’iris, et dont le traitement par cortisone peut aussi faire monter la pression.",
  anatomy: {
    text: "Les cellules du trabéculum (filtre de l’angle) nettoient et renouvellent leur matrice pour laisser passer l’aqueuse ; la cortisone modifie ce fonctionnement. Le corps ciliaire produit l’aqueuse : une inflammation forte le met au repos (production ↓), d’où une PIO parfois basse en uvéite active. L’iris inflammé peut se coller au cristallin (synéchies postérieures) ou à l’angle.",
    figure: { type: "eye", highlight: ["trabeculum", "corps-ciliaire", "iris", "pupille", "chambre-anterieure", "cristallin"] }
  },
  causal: {
    title: "Cortisone, inflammation et filtre de l’angle",
    steps: [
      { label: "Cortisone ou uvéite", detail: "Stéroïde chez un répondeur, ou inflammation intraoculaire (herpès, cytomégalovirus ou CMV, arthrite juvénile, sarcoïdose…).", kind: "cause" },
      { label: "Filtre modifié ou enflammé", detail: "La cortisone fait accumuler de la matrice dans le trabéculum ; l’uvéite le bouche (cellules, protéines) ou l’enflamme directement (trabéculite).", kind: "mecanisme" },
      { label: "Synéchies", detail: "L’iris se colle à l’angle (synéchies antérieures) ou au cristallin (synéchies postérieures) ; collé au cristallin sur 360°, il bombe vers l’avant et ferme l’angle (iris bombé).", kind: "lesion" },
      { label: "Corps ciliaire qui se réveille", detail: "Quand l’inflammation se calme, la production d’aqueuse reprend alors que le filtre reste abîmé : la PIO monte.", kind: "mecanisme" },
      { label: "PIO élevée", detail: "Souvent quelques semaines après le début d’un stéroïde, plus vite avec un produit puissant ou injecté.", kind: "signe" },
      { label: "Neuropathie glaucomateuse", detail: "Excavation et défauts du champ si la hausse dure.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Ajuster le stéroïde", detail: "Réduire, remplacer par un stéroïde moins hypertensif (loteprednol, fluorométholone) ou un immunosuppresseur ; retirer un dépôt si possible." },
      { at: 1, label: "Traiter l’inflammation et sa cause", detail: "Stéroïde adéquat sous surveillance de la PIO, antiviral si herpès ou CMV : le filtre s’assainit." },
      { at: 2, label: "Iridotomie ou iridectomie", detail: "Trou au laser ou ouverture chirurgicale dans l’iris : l’aqueuse passe derrière l’iris bombé et l’angle s’ouvre." },
      { at: 4, label: "Gouttes, SLT, tube", detail: "Gouttes qui ↓ la production ; SLT (laser doux sur le trabéculum) efficace pour le cortisonique ; tube si uvéitique réfractaire." }
    ]
  },
  risk: [
    "GPAO ou antécédents familiaux de glaucome ; réponse antérieure aux stéroïdes",
    "Enfants (réponse plus fréquente et plus forte), myopie forte, diabète de type 1",
    "Stéroïde puissant, injecté ou en implant (triamcinolone, fluocinolone surtout)",
    "Uvéite antérieure récidivante : herpès simplex ou zona (HSV, VZV), CMV, Posner-Schlossman, uvéite de Fuchs",
    "Uvéite chronique avec synéchies : arthrite juvénile idiopathique, sarcoïdose"
  ],
  presentation: [
    "Cortisonique : asymptomatique ; PIO élevée au suivi d’un patient sous gouttes (chirurgie, greffe, allergie, uvéite)",
    "Uvéite hypertensive : œil rouge, photophobie, douleur, flou, PIO élevée",
    "Posner-Schlossman : crises unilatérales de PIO très haute, peu d’inflammation, halos"
  ],
  exam: {
    signs: [
      { sign: "Précipités cornéens (KP : amas de cellules inflammatoires sur l’endothélium)", why: "Prouvent l’uvéite ; leur aspect oriente : étoilés diffus (Fuchs), en pièce de monnaie (CMV), en graisse de mouton (granulomateuse)." },
      { sign: "Atrophie irienne sectorielle ou hétérochromie", why: "Atrophie : herpès (VZV, HSV) ; iris plus pâle : uvéite de Fuchs." },
      { sign: "Synéchies postérieures, iris bombé (chambre périphérique plate)", why: "Mécanisme de fermeture qui exige une iridotomie urgente." }
    ],
    tests: [
      { test: "Tonométrie sous stéroïde", when: "Quelques semaines après le début, puis à chaque visite", read: "Hausse avec œil calme et angle ouvert = réponse cortisonique probable ; ≈ 1/3 de la population répond modérément et ≈ 5 % fortement (Armaly, Becker), davantage en cas de GPAO." },
      { test: "Gonioscopie (lentille à miroir qui montre l’angle)", when: "Toute uvéite hypertensive", read: "Débris, synéchies antérieures (PAS) ou néovaisseaux." },
      { test: "Ponction de chambre antérieure (PCR HSV, VZV, CMV)", when: "Uvéite hypertensive unilatérale récidivante", read: "Virus identifié = antiviral ciblé." },
      { test: "Bilan de l’uvéite, OCT et champ", when: "Uvéite récidivante, granulomateuse ou bilatérale", read: "Cause systémique (sarcoïdose, tuberculose avant immunosuppression) ; neuropathie." }
    ]
  },
  ddx: [
    { dx: "Glaucome primaire démasqué", clue: "La PIO reste élevée des semaines après l’arrêt du stéroïde." },
    { dx: "Hausse postopératoire précoce", clue: "Premiers jours après chirurgie (viscoélastique retenu) : trop tôt pour une réponse cortisonique." },
    { dx: "Crise aiguë de fermeture primaire", clue: "Pupille mi-dilatée, angle adelphe étroit, pas de précipités." },
    { dx: "Glaucome néovasculaire", clue: "Néovaisseaux de l’iris ou de l’angle, cause ischémique rétinienne." }
  ],
  redFlags: [
    "Enfant sous stéroïde : réponse forte et rapide, mesurer la PIO",
    "Iris bombé : iridotomie ou iridectomie en urgence",
    "Uvéite hypertensive unilatérale récidivante : penser herpès ou CMV, ne pas seulement augmenter le stéroïde"
  ],
  cat: {
    algo: [
      { q: "PIO élevée sous stéroïde, œil calme, angle ouvert ?", yes: "Réponse cortisonique : réduire, changer ou cesser le stéroïde, gouttes hypotensives.", no: "Chercher inflammation, synéchies, néovaisseaux." },
      { q: "Uvéite active (cellules, précipités) ?", yes: "Contrôler l’inflammation (stéroïde adéquat, antiviral si herpès ou CMV) + gouttes qui ↓ la production.", no: "Glaucome post-uvéitique : gouttes, puis laser ou chirurgie." },
      { q: "Iris bombé ?", yes: "Urgence : iridotomie (souvent plusieurs) ou iridectomie chirurgicale.", no: "Gonioscopie : étendue des synéchies antérieures." },
      { q: "Dépôt ou implant de stéroïde en cause ?", yes: "Retirer le dépôt si possible ; sinon chirurgie filtrante.", no: "Poursuivre l’ajustement." },
      { q: "PIO non contrôlée par les gouttes ?", yes: "Cortisonique : SLT ; uvéitique : tube, sous couverture anti-inflammatoire.", no: "Suivi rapproché de la PIO." }
    ],
    phases: [
      { phase: "medical", items: ["Ajuster le stéroïde (voir traitements) ; immunosuppresseur avec l’uvéitologue", "Gouttes qui ↓ la production ± acétazolamide ; analogue des prostaglandines avec prudence en uvéite active ; jamais de pilocarpine"] },
      { phase: "laser", items: ["SLT pour le glaucome cortisonique ; éviter si inflammation active", "Iridotomie pour iris bombé (peut se refermer)"] },
      { phase: "chirurgie", items: ["Retrait d’un dépôt de triamcinolone sous-ténonien ; si réfractaire, tube (souvent Ahmed) ou trabéculectomie avec mitomycine C"] },
      { phase: "suivi", items: ["PIO à chaque visite sous stéroïde ; prévoir une hausse quand l’uvéite se calme"] }
    ],
    local: "Au Québec, l’optométriste outillé peut traiter un glaucome cortisonique, puis doit diriger vers l’ophtalmologiste pour le suivi médical (O-7, r. 11.1). Uvéites complexes : suivi conjoint avec les cliniques d’uvéite et de rhumatologie."
  },
  treatments: [
    { name: "Modifier ou cesser le stéroïde", how: "Réduire, espacer ou passer à un stéroïde moins hypertensif (loteprednol, fluorométholone) ou à un anti-inflammatoire non stéroïdien ; le trabéculum récupère en quelques semaines s’il est intact.", why: "Réponse cortisonique.", pros: "Traite la cause.", cons: "Impossible si le stéroïde est indispensable ou s’il s’agit d’un implant.", cx: "Rebond inflammatoire, rejet de greffe." },
    { name: "Gouttes qui ↓ la production d’aqueuse", how: "Timolol, dorzolamide, brimonidine ; acétazolamide oral au besoin.", why: "Première ligne dans les deux glaucomes.", pros: "N’aggravent pas l’inflammation.", cons: "Analogue des prostaglandines avec prudence (inflammation, herpès).", cx: "Timolol : bronchospasme ; brimonidine : allergie." },
    { name: "SLT (trabéculoplastie sélective au laser)", how: "Laser doux en clinique sur le trabéculum, qui se remodèle et laisse mieux sortir l’aqueuse.", why: "Glaucome cortisonique non contrôlé.", pros: "Fonctionne bien dans le cortisonique.", cons: "À éviter en uvéite active.", cx: "Inflammation, pic de PIO." },
    { name: "Iridotomie ou iridectomie", how: "Laser YAG qui perce un petit trou dans l’iris, ou ablation chirurgicale d’un fragment d’iris : l’aqueuse contourne la pupille bloquée.", why: "Iris bombé.", pros: "Rétablit l’écoulement immédiatement.", cons: "L’iridotomie se referme souvent dans un œil inflammé.", cx: "Saignement, inflammation." },
    { name: "Chirurgie (retrait de dépôt, tube, trabéculectomie)", how: "Au bloc : exciser un dépôt de stéroïde ; tube relié à une plaque sous la conjonctive ; ou trabéculectomie avec mitomycine C.", why: "PIO non contrôlée.", pros: "Le tube résiste mieux à l’inflammation.", cons: "Trabéculectomie : échec plus fréquent.", cx: "Hypotonie, exposition du tube, perte endothéliale." }
  ],
  pearls: [
    { q: "Pourquoi la PIO monte-t-elle quand l’uvéite se calme ?", a: "L’inflammation avait mis le corps ciliaire au repos (production ↓). En guérissant, il produit de nouveau alors que le filtre reste abîmé : la PIO monte. Ne pas conclure trop vite à une réponse cortisonique." },
    { q: "Quels stéroïdes font le plus monter la PIO ?", a: "Difluprednate, dexaméthasone et prednisolone acétate davantage ; loteprednol et fluorométholone moins. Les injections et implants intravitréens (triamcinolone, fluocinolone) exposent au risque le plus durable." },
    { q: "Uvéite hypertensive unilatérale récidivante avec peu de cellules ?", a: "Penser trabéculite virale (HSV, VZV, CMV) ou Posner-Schlossman, souvent liée au CMV : PCR de l’humeur aqueuse, antiviral ciblé, stéroïde et gouttes qui ↓ la production, sans pilocarpine." }
  ],
  mnemonic: { title: "Mécanismes uvéitiques : « TIPS »", text: "**T**rabéculite (filtre enflammé), **I**ris bombé (synéchies postérieures), **P**AS (synéchies antérieures), **S**téroïdes (réponse cortisonique). Plus : reprise du corps ciliaire quand l’uvéite se calme." },
  compare: {
    title: "Cornée normale vs précipités cornéens",
    normal: { figure: { type: "slit", pattern: "normal" }, caption: "Endothélium clair, chambre calme." },
    patho: { figure: { type: "slit", pattern: "kp" }, caption: "Précipités sur l’endothélium : uvéite antérieure.", reveal: ["Amas blanchâtres sur l’endothélium, souvent en triangle inférieur (Arlt)", "Étoilés diffus : Fuchs ; en pièce de monnaie : CMV ; en graisse de mouton : granulomateuse", "Chercher cellules et flare", "PIO élevée = uvéite hypertensive"] }
  },
  sources: [
    "Jones R, Rhee DJ. Corticosteroid-induced ocular hypertension and glaucoma (Curr Opin Ophthalmol 2006)",
    "Armaly MF (Arch Ophthalmol 1963) et Becker B (Invest Ophthalmol 1965) : réponse cortisonique",
    "Siddique SS et al. Glaucoma and uveitis (Surv Ophthalmol 2013)",
    "Règlement sur les médicaments qu’un optométriste peut administrer ou prescrire (O-7, r. 11.1, Québec 2018)"
  ]
},
{
  id: "g-postop",
  module: "C",
  order: 10,
  title: "Patient opéré : trabéculectomie, tubes, MIGS",
  en: "The operated glaucoma patient: trabeculectomy, tubes, MIGS",
  tags: ["urgent", "frequent", "highyield"],
  oneLiner: "Après chirurgie filtrante, lire PIO × profondeur de chambre, chercher une fuite (Seidel) et ne jamais manquer une infection de bulle.",
  definition: "Les chirurgies du glaucome créent une nouvelle sortie pour l’humeur aqueuse : vers une poche sous la conjonctive appelée bulle (trabéculectomie, PreserFlo, XEN), vers une plaque fixée sur la sclère (tubes) ou vers le canal de Schlemm (MIGS, chirurgies microinvasives). En clinique, on distingue l’évolution normale des complications, dont certaines, comme l’infection de la bulle, menacent la vision en quelques heures.",
  anatomy: {
    text: "Dans la trabéculectomie, l’aqueuse passe par une fistule creusée sous un volet de sclère, puis s’accumule sous la conjonctive où les vaisseaux la résorbent : c’est la bulle de filtration. La cicatrisation est l’ennemi principal ; la mitomycine C (MMC, anticicatrisant) la freine. Les MIGS restent dans la voie naturelle : la PIO ne peut y descendre sous la pression veineuse épisclérale (≈ 8–10 mmHg).",
    figure: { type: "eye", highlight: ["conjonctive", "sclere", "chambre-anterieure", "trabeculum", "schlemm", "choroide"] }
  },
  causal: {
    title: "Filtrer juste assez : débit, cicatrice, infection",
    steps: [
      { label: "Nouvelle sortie créée", detail: "La voie contourne le trabéculum malade : la PIO baisse dès que l’aqueuse s’écoule.", kind: "cause" },
      { label: "Débit à équilibrer", detail: "Sutures du volet, calibre du tube et cicatrisation règlent le débit ; tout se joue les premières semaines.", kind: "mecanisme" },
      { label: "Trop de débit : PIO basse", detail: "Surfiltration, fuite ou décollement choroïdien (effusion) : la chambre s’aplatit.", kind: "lesion" },
      { label: "Pas assez de débit : PIO haute", detail: "Volet serré, fistule bouchée (caillot, iris) ou bulle encapsulée par la fibrose.", kind: "lesion" },
      { label: "Chambre plate avec PIO haute", detail: "Rare et grave : aqueuse détournée vers le vitré (mal-direction), hémorragie suprachoroïdienne ou bloc pupillaire.", kind: "signe" },
      { label: "Complications tardives", detail: "Bulle mince qui fuit ou s’infecte (blébite, endophtalmite), maculopathie d’hypotonie, tube exposé.", kind: "complication" }
    ],
    levers: [
      { at: 1, label: "Mitomycine C et 5-FU", detail: "Anticicatrisants appliqués au bloc (MMC) ou injectés sous la conjonctive ensuite (5-FU, 5-fluorouracile) : retardent la fibrose de la bulle." },
      { at: 3, label: "Titrer en clinique", detail: "Massage, lyse de sutures au laser, retrait d’une suture relâchable ou du ripcord : ↑ le débit ; needling (aiguille sous la conjonctive) pour libérer une bulle encapsulée." },
      { at: 2, label: "Freiner la fuite", detail: "Atropine (recule le cristallin, approfondit la chambre), lentille pansement ou suture de la fuite, viscoélastique pour reformer la chambre." },
      { at: 5, label: "Antibiotiques en urgence", detail: "Blébite : antibiotiques topiques intensifs ; endophtalmite : ponction du vitré et antibiotiques intravitréens le jour même." }
    ]
  },
  risk: [
    "Échec par fibrose : jeune, ascendance africaine, conjonctive déjà opérée, uvéite, glaucome néovasculaire",
    "Hypotonie : jeune myope, MMC, bulle mince",
    "Infection : bulle mince, avasculaire, qui fuit ou inférieure ; blépharite",
    "Hémorragie suprachoroïdienne : âge, anticoagulants, myopie forte",
    "Mal-direction : œil court, fermeture de l’angle"
  ],
  presentation: [
    "Bulle fonctionnelle : diffuse, peu surélevée, modérément vascularisée",
    "Bulle à risque : mince, avasculaire, kystique ; encapsulée : dôme ferme, PIO haute",
    "Alarme : œil rouge, douleur, écoulement, vision ↓"
  ],
  exam: {
    signs: [
      { sign: "PIO et profondeur de la chambre", why: "Axes du différentiel (voir mnémo). Chambre plate : grade 1 iris périphérique–cornée, 2 bord pupillaire–cornée, 3 cristallin–cornée (urgence)." },
      { sign: "Test de Seidel (fluorescéine concentrée sur la bulle)", why: "Colorant concentré (sombre) dilué par l’aqueuse qui fuit : ruisseau vert vif = fuite ; explique une PIO basse, porte d’entrée d’infection." },
      { sign: "Aspect de la bulle", why: "Plate = débit faible ; blanc laiteux dans un œil rouge = blébite." },
      { sign: "Dômes choroïdiens au fond d’œil", why: "Lisses avec PIO basse = effusion ; sombres, douloureux avec PIO haute = hémorragie." }
    ],
    tests: [
      { test: "Gonioscopie (lentille à miroir qui montre l’angle)", when: "PIO haute, chambre profonde", read: "Fistule ou tube bouché par l’iris, un caillot ou du vitré." },
      { test: "Échographie B", when: "Chambre étroite, fond d’œil mal visible", read: "Distingue effusion et hémorragie choroïdiennes." },
      { test: "OCT maculaire", when: "Vision ↓ avec PIO basse", read: "Plis choroïdiens : maculopathie d’hypotonie." }
    ]
  },
  ddx: [
    { dx: "Surfiltration", clue: "PIO basse, chambre étroite, Seidel négatif, bulle haute." },
    { dx: "Fuite de bulle", clue: "PIO basse, Seidel positif, bulle plate." },
    { dx: "Effusion choroïdienne", clue: "PIO basse, dômes lisses, peu de douleur." },
    { dx: "Mal-direction ou bloc pupillaire", clue: "PIO haute, chambre plate ; iridectomie perméable = mal-direction, bouchée = bloc." },
    { dx: "Hémorragie suprachoroïdienne", clue: "Douleur brutale, PIO haute, dômes sombres." },
    { dx: "Volet serré ou bulle encapsulée", clue: "PIO haute, chambre profonde." }
  ],
  redFlags: [
    "Bulle blanche, œil rouge et douloureux ± hypopyon : infection, le jour même",
    "Douleur brutale, PIO haute, chambre plate : hémorragie suprachoroïdienne",
    "Cristallin qui touche la cornée : reformer la chambre en urgence",
    "Tube exposé : risque d’endophtalmite, réparer"
  ],
  cat: {
    algo: [
      { q: "Signes d’infection (bulle blanche, hypopyon, douleur) ?", yes: "Blébite : antibiotiques topiques intensifs ; endophtalmite : ponction + vancomycine 1 mg/0,1 mL et ceftazidime 2,25 mg/0,1 mL intravitréennes ± vitrectomie, le jour même.", no: "Évaluer PIO et chambre." },
      { q: "PIO basse, chambre étroite ?", yes: "Seidel positif : lentille pansement, suture ; négatif : atropine, surveiller ; reformer si contact cristallin–cornée.", no: "Question suivante." },
      { q: "PIO haute, chambre étroite ?", yes: "Iridectomie bouchée : iridotomie ; perméable : mal-direction (atropine, laser YAG, vitrectomie) ; dômes sombres : hémorragie.", no: "Question suivante." },
      { q: "PIO haute, chambre profonde ?", yes: "Gonioscopie, massage, lyse de sutures au laser ou retrait du ripcord ; bulle encapsulée : needling ± 5-FU ; hausse tardive sous stéroïde : penser réponse cortisonique.", no: "PIO à la cible : sevrage lent du stéroïde ; PIO basse et chambre formée : Seidel, surveiller la macula." }
    ],
    phases: [
      { phase: "medical", items: ["Antibiotique les premières semaines ; stéroïde topique intensif, sevré lentement", "Atropine si chambre étroite"] },
      { phase: "laser", items: ["Lyse de sutures au laser ; laser YAG si mal-direction ou fistule bouchée"] },
      { phase: "chirurgie", items: ["Needling, révision de bulle, reformation de chambre, recouvrement d’un tube exposé"] },
      { phase: "suivi", items: ["Jour 1, semaine 1, puis rapproché les premiers mois ; à vie, inspecter la bulle", "Œil rouge douloureux : consulter le jour même"] },
      { phase: "escalade", items: ["Seconde chirurgie (souvent tube), puis cyclophotocoagulation"] }
    ],
    local: "Au Québec, ces chirurgies se font surtout en centre hospitalier ; couverture RAMQ des MIGS et des implants à vérifier."
  },
  treatments: [
    { name: "Trabéculectomie avec mitomycine C", how: "Au bloc : volet taillé dans la sclère, fistule sous ce volet vers la chambre et petite iridectomie ; l’aqueuse forme une bulle sous la conjonctive. Sutures ajustables pour titrer le débit (massage, lyse au laser).", why: "Glaucome avancé, PIO cible basse.", pros: "PIO la plus basse.", cons: "Suivi intensif ; échec par fibrose.", cx: "Hypotonie, fuite, cataracte, infection de bulle à vie." },
    { name: "PreserFlo MicroShunt et XEN", how: "Au bloc : microtube souple (PreserFlo par l’extérieur avec MMC ; XEN par l’intérieur ou à conjonctive ouverte) qui draine vers une bulle ; parfois un ripcord (fil intraluminal), retiré en clinique pour ↑ le débit.", why: "Alternative moins invasive à la trabéculectomie.", pros: "Récupération rapide, moins d’hypotonie.", cons: "PIO un peu moins basse ; needling fréquent (XEN).", cx: "Fibrose, hypotonie, exposition, infection de bulle." },
    { name: "Tube : Ahmed ou Baerveldt", how: "Au bloc : tube dans la chambre relié à une plaque sur la sclère, où une capsule résorbe l’aqueuse. Ahmed : valve ; Baerveldt : sans valve, ligaturé (± ripcord) jusqu’à la formation de la capsule.", why: "Échec de trabéculectomie, glaucome néovasculaire ou uvéitique.", pros: "Résiste à la fibrose ; Baerveldt : PIO plus basse à long terme.", cons: "Ahmed : phase hypertensive ; Baerveldt : hypotonie à l’ouverture.", cx: "Exposition, contact tube–cornée (perte endothéliale), diplopie." },
    { name: "MIGS : iStent, Hydrus, KDB", how: "Au bloc, souvent avec la cataracte, par l’intérieur : micro-implant vers le canal de Schlemm (iStent, Hydrus) ou excision d’une bande de trabéculum (KDB).", why: "Glaucome léger à modéré.", pros: "Très sécuritaires, sans bulle.", cons: "Baisse modeste (plancher épiscléral).", cx: "Hyphéma, pic de PIO, implant bouché." }
  ],
  pearls: [
    { q: "Jour 1 post-trabéculectomie : PIO 4 mmHg, chambre étroite ?", a: "Seidel : positif = fuite (lentille, suture) ; négatif = surfiltration ou effusion (fond d’œil, atropine). Reformer si le cristallin touche la cornée." },
    { q: "PIO 30 mmHg, chambre profonde, bulle plate à la semaine 1 ?", a: "Gonioscopie (fistule bouchée ?), puis massage, lyse de sutures au laser ou retrait d’une suture relâchable ; plus tard, needling ± 5-FU." },
    { q: "Pourquoi ligaturer un Baerveldt ? Qu’est-ce qu’un ripcord ?", a: "Sans valve, il filtrerait sans résistance avant que la capsule se forme : hypotonie. On le ligature, parfois avec un ripcord ; certains en posent aussi dans un PreserFlo ou un XEN à conjonctive ouverte, retiré en clinique pour titrer la filtration." }
  ],
  mnemonic: { title: "Grille PIO × chambre", text: "**Basse + étroite** : fuite (Seidel), surfiltration, effusion choroïdienne. **Haute + étroite** : mal-direction, hémorragie suprachoroïdienne, bloc pupillaire. **Haute + profonde** : volet serré, fistule bouchée, bulle encapsulée." },
  compare: {
    title: "Segment antérieur normal vs bulle de filtration",
    normal: { figure: { type: "slit", pattern: "normal" }, caption: "Conjonctive supérieure plate, aucune bulle." },
    patho: { figure: { type: "slit", pattern: "bleb" }, caption: "Bulle de filtration supérieure après trabéculectomie.", reveal: ["Soulèvement conjonctival sous la paupière supérieure", "Iridectomie périphérique à 12 h, sous la bulle", "Diffuse et modérément vascularisée = fonctionnelle", "Mince, avasculaire, kystique = risque de fuite et d’infection", "PIO basse : faire un Seidel"] }
  },
  sources: [
    "Tube Versus Trabeculectomy Study (Gedde SJ et al., Am J Ophthalmol 2012)",
    "Ahmed Baerveldt Comparison Study (Budenz DL et al., Ophthalmology 2011)",
    "MicroShunt vs trabéculectomie (Baker ND et al., Ophthalmology 2021)",
    "AAO PPP Primary Open-Angle Glaucoma (Gedde SJ et al., Ophthalmology, en ligne 9 févr. 2026)"
  ]
}
]);

G.OPH.bonus = G.OPH.bonus || {};
G.OPH.bonus.C = [
  { title: "Glaucome congénital primaire", en: "Primary congenital glaucoma", clue: "Nourrisson avec la triade épiphora, photophobie et blépharospasme, cornée trouble et agrandie (buphtalmie), stries de Haab (ruptures de la membrane de Descemet).", action: "Urgence chirurgicale : examen sous anesthésie puis goniotomie ou trabéculotomie (ouverture chirurgicale du trabéculum) ; les gouttes ne sont qu’un pont, jamais de brimonidine avant 2 ans." },
  { title: "Récession de l’angle", en: "Angle-recession glaucoma", clue: "Ancien coup à l’œil, bande ciliaire élargie et irrégulière à la gonioscopie, procès iriens déchirés, unilatéral ; le glaucome peut apparaître des années plus tard.", action: "Gonioscopie comparative des deux yeux et suivi de la PIO à vie ; gouttes, puis chirurgie filtrante si échec." },
  { title: "Iris plateau", en: "Plateau iris", clue: "Chambre centrale profonde, iris plat, angle qui reste fermé malgré une iridotomie perméable ; double bosse à l’indentation.", action: "UBM (échographie haute fréquence) pour voir les procès ciliaires antérieurs, puis iridoplastie (laser qui rétracte l’iris périphérique), pilocarpine faible ou extraction du cristallin." },
  { title: "Mal-direction de l’aqueuse (glaucome malin)", en: "Aqueous misdirection (malignant glaucoma)", clue: "Après une chirurgie, souvent sur œil court : chambre plate au centre ET en périphérie, PIO élevée (parfois normale) malgré une iridotomie perméable, sans soulèvement choroïdien.", action: "Atropine et hypotenseurs, jamais de pilocarpine, puis ouverture de la hyaloïde antérieure au laser Nd:YAG chez le pseudophaque ou vitrectomie." },
  { title: "Syndrome irido-cornéo-endothélial (ICE)", en: "Iridocorneal endothelial syndrome", clue: "Femme d’âge moyen, un seul œil : endothélium martelé, pupille déplacée (corectopie), trous iriens, synéchies qui dépassent la ligne de Schwalbe.", action: "Microscopie spéculaire (cellules ICE) et contrôle de la PIO ; un tube est souvent nécessaire, greffe endothéliale si œdème cornéen." },
  { title: "Syndrome de Posner-Schlossman", en: "Glaucomatocyclitic crisis", clue: "Crises unilatérales récidivantes de PIO très haute avec peu de cellules, quelques précipités fins et un angle ouvert.", action: "Stéroïde topique et hypotenseurs sans pilocarpine ; ponction de chambre antérieure avec PCR CMV si récidives." },
  { title: "Glaucomes phacolytique et phacomorphique", en: "Phacolytic and phacomorphic glaucoma", clue: "Cataracte hypermûre qui laisse fuir ses protéines dans un angle ouvert (phacolytique) ou cataracte gonflée qui ferme l’angle, chambre asymétrique (phacomorphique).", action: "Baisser la PIO et calmer l’inflammation, puis extraire le cristallin rapidement." },
  { title: "Pression veineuse épisclérale élevée", en: "Elevated episcleral venous pressure", clue: "Vaisseaux épiscléraux dilatés et tortueux, sang dans le canal de Schlemm : Sturge-Weber (angiome facial) ou fistule carotido-caverneuse (souffle, proptose, chémosis).", action: "Imagerie vasculaire si fistule suspectée ; préférer les gouttes qui ↓ la production ; chirurgie filtrante à risque d’effusion ou d’hémorragie choroïdienne." }
];
