/* Investigations — contenu pédagogique bilingue natif (FR Québec / EN).
   Propriété : pédagogie clinique. Schéma : docs/PLATFORM.md.
   Logique : Observe → Réponds → Révèle. Niveaux : 1 externe, 2 externe motivé, 3 R1.
   Images : catalogue EyeRounds (OPH-xxx, voir invMediaRequests) ou schéma original (photo: null). */
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

G.OPH.inv = [
  /* ───────────────────────── I1 — Échographie B ───────────────────────── */
  {
    id: "bscan", n: "I1",
    title: { fr: "Échographie B", en: "B-scan ultrasound" },
    en_term: "B-scan ultrasonography",
    why: {
      fr: "Voir le segment postérieur quand on ne peut pas le regarder : cataracte blanche, hyphéma, hémorragie du vitré. Elle répond à trois questions : la rétine est-elle à plat? Y a-t-il une masse? Un corps étranger?",
      en: "Look at the posterior segment when you can’t see it: white cataract, hyphema, vitreous hemorrhage. It answers three questions: is the retina flat? Is there a mass? A foreign body?"
    },
    how: [
      { fr: "Paupières fermées, gel sur la sonde (≈ 10 MHz). Globe ouvert suspecté : on s’abstient (ou geste très doux par un expert).",
        en: "Closed lids, gel on the probe (~10 MHz). Suspected open globe: don’t scan (or a very gentle scan by an expert)." },
      { fr: "Gain élevé d’abord pour les échos faibles (hémorragie, décollement postérieur du vitré). Puis baisser le gain pour analyser une membrane épaisse ou une masse.",
        en: "Start with high gain to catch weak echoes (hemorrhage, posterior vitreous detachment). Then lower the gain to study a thick membrane or a mass." },
      { fr: "Coupes transverses (transverse) T12, T3, T6, T9 : le patient regarde vers le quadrant examiné, la sonde est posée du côté opposé, marqueur supérieur ou nasal.",
        en: "Transverse scans T12, T3, T6, T9: the patient looks toward the quadrant you want, the probe sits on the opposite side, marker superior or nasal." },
      { fr: "Coupe longitudinale de la macula (LMAC) : sonde en nasal, regard en temporal, marqueur vers la pupille. Le nerf optique apparaît sous la macula.",
        en: "Longitudinal macula scan (LMAC): probe nasal, gaze temporal, marker toward the pupil. The optic nerve shows up below the macula." },
      { fr: "Échographie dynamique (kinetic) : faire bouger l’œil puis l’arrêter. Observer la mobilité et les mouvements résiduels (after-movements) de toute membrane.",
        en: "Kinetic scanning: have the eye move, then stop. Watch the mobility and after-movements of any membrane." }
    ],
    normal: [
      { fr: "Vitré anéchogène (noir) à gain normal.", en: "Vitreous is echolucent (black) at normal gain." },
      { fr: "Paroi postérieure : une ligne concave, lisse et brillante (rétine, choroïde et sclère confondues).", en: "Posterior wall: one smooth, bright, concave line (retina, choroid and sclera blend together)." },
      { fr: "Ombre du nerf optique : bande sombre derrière le globe, le repère d’orientation.", en: "Optic nerve shadow: a dark band behind the globe — your orientation landmark." },
      { fr: "Graisse orbitaire très échogène (blanche) derrière la paroi.", en: "Orbital fat is highly reflective (white) behind the wall." },
      { fr: "La zone affichée est celle qui fait face à la sonde, de l’autre côté du globe.", en: "What you see is the area facing the probe, across the globe." }
    ],
    keys: [
      { fr: "Décollement de rétine (retinal detachment) : membrane épaisse, très brillante, fixée à la papille (en V ou en entonnoir).", en: "Retinal detachment: thick, very bright membrane tethered to the disc (V or funnel shape)." },
      { fr: "Décollement postérieur du vitré (DPV, posterior vitreous detachment) : membrane fine, peu réfléchissante, très mobile; surtout visible à gain élevé.", en: "Posterior vitreous detachment (PVD): thin, low-reflectivity, very mobile membrane; best seen at high gain." },
      { fr: "Décollement choroïdien (choroidal detachment) : dôme épais et lisse qui épargne la papille; contenu noir (séreux) ou échogène (hémorragique).", en: "Choroidal detachment: thick, smooth dome that spares the disc; black content (serous) or echogenic content (hemorrhagic)." },
      { fr: "Hémorragie du vitré : échos ponctués, mobiles, qui se déposent en bas avec le temps.", en: "Vitreous hemorrhage: mobile dot-like echoes that layer inferiorly over time." },
      { fr: "Masse : regarder la forme (dôme, champignon = mélanome choroïdien) et la réflectivité interne (A-scan).", en: "Mass: look at the shape (dome, mushroom = choroidal melanoma) and internal reflectivity (A-scan)." },
      { fr: "Corps étranger : écho très brillant avec ombre acoustique (shadowing) derrière.", en: "Foreign body: very bright echo with acoustic shadowing behind it." }
    ],
    pitfalls: [
      { fr: "Gain trop bas : on manque une hémorragie du vitré ou un DPV.", en: "Gain too low: you miss a vitreous hemorrhage or a PVD." },
      { fr: "Prendre un DPV épais (sang sur la hyaloïde) pour un décollement de rétine : vérifier l’insertion à la papille, la réflectivité et la mobilité.", en: "Calling a thick, blood-coated PVD a retinal detachment: check disc insertion, reflectivity and mobility." },
      { fr: "Appuyer sur un globe ouvert : risque d’expulsion du contenu intraoculaire.", en: "Pressing on an open globe: risk of extruding intraocular contents." },
      { fr: "Une seule coupe ne suffit pas : balayer les 4 quadrants puis la macula.", en: "One scan is never enough: sweep all 4 quadrants, then the macula." }
    ],
    tool: "bscan-probe",
    practice: ["p-bscan-1", "p-bscan-2", "p-bscan-3", "p-bscan-4", "p-bscan-5", "p-bscan-6", "p-bscan-7"]
  },

  /* ─────────────────────── I2 — Échographie A / biométrie ─────────────────────── */
  {
    id: "ascan", n: "I2",
    title: { fr: "Échographie A et biométrie", en: "A-scan and biometry" },
    en_term: "A-scan ultrasonography / biometry",
    why: {
      fr: "Mesurer la longueur axiale (axial length) pour calculer la puissance de la lentille intraoculaire (IOL) avant une chirurgie de cataracte. En mode diagnostique (A-scan standardisé), elle aide à caractériser une masse par sa réflectivité interne.",
      en: "Measure axial length to calculate intraocular lens (IOL) power before cataract surgery. In diagnostic mode (standardized A-scan), it helps characterize a mass by its internal reflectivity."
    },
    how: [
      { fr: "Biométrie optique (optical biometry) en premier. Échographie A si cataracte trop dense, mauvaise fixation ou opacité des milieux.",
        en: "Optical biometry first. Switch to A-scan if the cataract is too dense, fixation is poor or the media are opaque." },
      { fr: "Immersion de préférence : une coque remplie de liquide évite de comprimer la cornée. Par contact, la sonde touche la cornée.",
        en: "Immersion is preferred: a fluid-filled shell avoids compressing the cornea. With contact, the probe touches the cornea." },
      { fr: "Aligner sur l’axe visuel : le patient fixe la lumière de la sonde.",
        en: "Align on the visual axis: the patient fixates the probe’s light." },
      { fr: "Valider le tracé : pics nets de la cornée, du cristallin (antérieur, postérieur), de la rétine, puis de la sclère; le pic rétinien monte à la verticale.",
        en: "Check the trace: crisp spikes for cornea, lens (anterior, posterior), retina, then sclera; the retinal spike rises straight up." },
      { fr: "Répéter les mesures, vérifier qu’elles concordent et comparer avec l’autre œil.",
        en: "Repeat the measurements, make sure they agree, and compare with the fellow eye." },
      { fr: "Utiliser la bonne vitesse du son (velocity) : ≈ 1550 m/s pour un œil phaque, ≈ 1532 m/s pour un œil aphaque; corriger si pseudophaque ou huile de silicone.",
        en: "Use the right sound velocity: ~1550 m/s for a phakic eye, ~1532 m/s for an aphakic eye; adjust for pseudophakia or silicone oil." }
    ],
    normal: [
      { fr: "Longueur axiale de l’adulte ≈ 23–24 mm (souvent 22–25 mm).", en: "Adult axial length ~23–24 mm (usually 22–25 mm)." },
      { fr: "Profondeur de chambre antérieure ≈ 3 mm; cristallin ≈ 4–5 mm, plus épais avec l’âge.", en: "Anterior chamber depth ~3 mm; lens ~4–5 mm, thicker with age." },
      { fr: "Écart entre les deux yeux habituellement < 0,3 mm.", en: "Difference between the two eyes usually < 0.3 mm." },
      { fr: "Pic rétinien haut et abrupt, suivi du pic scléral puis d’échos décroissants (graisse orbitaire).", en: "Tall, steep retinal spike, followed by the scleral spike, then decreasing echoes (orbital fat)." }
    ],
    keys: [
      { fr: "1 mm d’erreur de longueur axiale ≈ 2,5–3 D d’erreur réfractive après la chirurgie.", en: "A 1 mm axial length error ≈ 2.5–3 D of postoperative refractive error." },
      { fr: "Compression cornéenne (contact) → longueur axiale trop courte → IOL trop puissante → surprise myopique.", en: "Corneal compression (contact) → axial length too short → IOL too strong → myopic surprise." },
      { fr: "Pic rétinien bas ou en escalier = faisceau oblique ou hors fovéa → refaire.", en: "Low or stair-stepped retinal spike = oblique beam or off the fovea → repeat." },
      { fr: "Staphylome postérieur (myopie forte) : il faut mesurer jusqu’à la fovéa (biométrie optique ou A-scan guidé par le B-scan).", en: "Posterior staphyloma (high myopia): you must measure to the fovea (optical biometry or B-scan–guided A-scan)." },
      { fr: "Huile de silicone : le son y est plus lent (≈ 980 m/s) → longueur surestimée si la vitesse n’est pas corrigée.", en: "Silicone oil: sound is slower (~980 m/s) → axial length overestimated if velocity isn’t corrected." },
      { fr: "A-scan standardisé : mélanome choroïdien = réflectivité interne faible à moyenne et régulière.", en: "Standardized A-scan: choroidal melanoma = low-to-medium, regular internal reflectivity." }
    ],
    pitfalls: [
      { fr: "Ne pas comparer avec l’autre œil : un écart > 0,3 mm sans anisométropie doit être revérifié.", en: "Not checking the fellow eye: a difference > 0.3 mm without anisometropia must be rechecked." },
      { fr: "Mesurer sur une membrane (DPV, décollement) ou sur la choroïde au lieu de la rétine.", en: "Measuring to a membrane (PVD, detachment) or the choroid instead of the retina." },
      { fr: "Oublier la kératométrie : 1 D d’erreur sur la cornée ≈ 1 D d’erreur finale.", en: "Forgetting keratometry: a 1 D corneal power error ≈ 1 D final error." },
      { fr: "Mauvaise vitesse (pseudophaque, huile) → longueur fausse.", en: "Wrong velocity (pseudophakic eye, oil) → wrong axial length." }
    ],
    tool: "ascan-sim",
    practice: ["p-ascan-1", "p-ascan-2", "p-ascan-3", "p-ascan-4", "p-ascan-5", "p-ascan-6", "p-ascan-7"]
  },

  /* ───────────────────────── I3 — OCT ───────────────────────── */
  {
    id: "oct", n: "I3",
    title: { fr: "OCT : macula, papille, segment antérieur", en: "OCT: macula, optic nerve, anterior segment" },
    en_term: "Optical coherence tomography (OCT)",
    why: {
      fr: "Une « coupe histologique » de la rétine en quelques secondes, sans contact. Elle mesure (épaisseur maculaire, couche des fibres nerveuses) et montre ce que le fond d’œil devine : liquide, traction, membrane, atrophie.",
      en: "An “optical biopsy” of the retina in seconds, without contact. It measures (macular thickness, nerve fiber layer) and shows what the fundus only hints at: fluid, traction, membranes, atrophy."
    },
    how: [
      { fr: "Patient qui fixe la cible, pupille dilatée si possible. Vérifier la qualité du signal (signal strength) avant d’interpréter.",
        en: "Patient fixating the target, dilated if possible. Check signal strength before you interpret anything." },
      { fr: "Macula : la coupe qui passe par la fovéa, puis la carte d’épaisseur ETDRS (cercles de 1, 3 et 6 mm).",
        en: "Macula: the scan through the fovea, then the ETDRS thickness map (1, 3 and 6 mm circles)." },
      { fr: "Lire la coupe de haut en bas : vitré et hyaloïde → surface (limitante interne) → couches internes → couches externes (zone ellipsoïde) → épithélium pigmentaire (EPR) et Bruch → choroïde.",
        en: "Read the scan top to bottom: vitreous and hyaloid → surface (internal limiting membrane) → inner layers → outer layers (ellipsoid zone) → retinal pigment epithelium (RPE) and Bruch → choroid." },
      { fr: "Papille : cercle de mesure de la couche des fibres nerveuses (RNFL). Chaque secteur est comparé à une base normative (vert, jaune, rouge) et à l’autre œil.",
        en: "Optic nerve: the retinal nerve fiber layer (RNFL) circle scan. Each sector is compared with a normative database (green, yellow, red) and with the fellow eye." },
      { fr: "Segment antérieur (AS-OCT) : angle iridocornéen, profondeur de chambre, épaisseur cornéenne, sans contact.",
        en: "Anterior segment (AS-OCT): iridocorneal angle, chamber depth, corneal thickness — no contact." },
      { fr: "Toujours confronter OCT, fond d’œil et champ visuel.",
        en: "Always match OCT with the fundus and the visual field." }
    ],
    normal: [
      { fr: "Dépression fovéolaire (foveal pit) nette; épaisseur centrale ≈ 250–300 µm selon l’appareil.", en: "Clear foveal pit; central thickness ~250–300 µm depending on the device." },
      { fr: "Bandes externes continues : limitante externe, zone ellipsoïde (ellipsoid zone), complexe EPR-Bruch.", en: "Continuous outer bands: external limiting membrane, ellipsoid zone, RPE–Bruch complex." },
      { fr: "Couches de fibres et plexiformes = hyperréflectives; couches nucléaires = hyporéflectives.", en: "Fiber and plexiform layers = hyperreflective; nuclear layers = hyporeflective." },
      { fr: "RNFL péripapillaire moyenne ≈ 90–100 µm chez l’adulte (varie selon l’âge et l’appareil).", en: "Average peripapillary RNFL ~90–100 µm in adults (varies with age and device)." },
      { fr: "RNFL plus épaisse en inférieur et en supérieur, plus mince en temporal.", en: "RNFL thickest inferiorly and superiorly, thinnest temporally." }
    ],
    keys: [
      { fr: "Liquide intrarétinien : espaces ronds hyporéflectifs dans la rétine (œdème maculaire).", en: "Intraretinal fluid: round hyporeflective spaces within the retina (macular edema)." },
      { fr: "Liquide sous-rétinien : espace noir entre la rétine neurosensorielle et l’EPR.", en: "Subretinal fluid: black space between the neurosensory retina and the RPE." },
      { fr: "Décollement de l’EPR (PED) : c’est la bande de l’EPR elle-même qui bombe en dôme.", en: "Pigment epithelial detachment (PED): the RPE band itself bulges as a dome." },
      { fr: "Membrane épirétinienne (epiretinal membrane) : ligne brillante en surface, creux fovéolaire effacé, rétine épaissie.", en: "Epiretinal membrane: bright line on the surface, flattened foveal pit, thickened retina." },
      { fr: "Traction vitréomaculaire (vitreomacular traction) : hyaloïde accrochée à la fovéa qui la soulève.", en: "Vitreomacular traction: hyaloid still stuck to the fovea, pulling it up." },
      { fr: "RNFL : secteur rouge (< 1 % des normaux) qui concorde avec une encoche papillaire et un défaut de champ.", en: "RNFL: a red sector (< 1% of normals) matching a disc notch and a field defect." }
    ],
    pitfalls: [
      { fr: "Signal faible ou erreur de segmentation → fausses valeurs (« red disease »).", en: "Weak signal or segmentation error → false values (“red disease”)." },
      { fr: "Myopie forte, papille inclinée : base normative inadaptée → faux rouge.", en: "High myopia, tilted disc: the normative database doesn’t fit → false red." },
      { fr: "Moyenne RNFL verte ≠ normal : un secteur peut être atteint (« green disease »).", en: "Green average RNFL ≠ normal: one sector can be damaged (“green disease”)." },
      { fr: "Effet plancher (floor effect) : au stade avancé, la RNFL ne baisse plus (≈ 50–60 µm); suivre le champ visuel.", en: "Floor effect: in advanced glaucoma the RNFL stops dropping (~50–60 µm); follow the visual field." }
    ],
    tool: "oct-layers",
    practice: ["p-oct-1", "p-oct-2", "p-oct-3", "p-oct-4", "p-oct-5", "p-oct-6", "p-oct-7", "p-oct-8", "p-oct-9"]
  },

  /* ───────────────────────── I4 — Gonioscopie ───────────────────────── */
  {
    id: "gonio", n: "I4",
    title: { fr: "Gonioscopie", en: "Gonioscopy" },
    en_term: "Gonioscopy",
    why: {
      fr: "Voir l’angle iridocornéen, invisible à la lampe à fente. C’est elle qui dit si un glaucome est à angle ouvert ou fermé : la première décision de classification.",
      en: "See the iridocorneal angle, which the slit lamp alone can’t show. It tells you whether glaucoma is open- or closed-angle — the first classification decision."
    },
    how: [
      { fr: "Pourquoi une lentille : la lumière de l’angle subit une réflexion totale interne (total internal reflection) à l’interface cornée-air. La lentille l’élimine.",
        en: "Why a lens: light from the angle undergoes total internal reflection at the cornea–air interface. The lens eliminates it." },
      { fr: "Pièce sombre, fente courte et fine, hors de la pupille : la lumière cause un myosis qui ouvre faussement l’angle.",
        en: "Dark room, short thin beam kept off the pupil: light causes miosis, which falsely opens the angle." },
      { fr: "Lentille à 4 miroirs (Posner, Zeiss) : sans gel, permet l’indentation. Goldmann 3 miroirs : gel, image stable. Le miroir montre l’angle opposé.",
        en: "4-mirror lens (Posner, Zeiss): no gel, allows indentation. Goldmann 3-mirror: gel, stable view. The mirror shows the opposite angle." },
      { fr: "Identifier les structures de postérieur vers antérieur : racine de l’iris, bande ciliaire, éperon scléral, trabéculum, ligne de Schwalbe (« I Can’t See Til Schwalbe »).",
        en: "Identify structures from posterior to anterior: iris root, ciliary body band, scleral spur, trabecular meshwork, Schwalbe’s line (“I Can’t See Til Schwalbe”)." },
      { fr: "Grader chaque quadrant (Shaffer) et noter pigmentation, synéchies et vaisseaux.",
        en: "Grade each quadrant (Shaffer) and note pigment, synechiae and vessels." },
      { fr: "Indentation (dynamic gonioscopy) : appuyer doucement. L’angle s’ouvre si la fermeture est appositionnelle; il reste fermé s’il y a des synéchies (PAS).",
        en: "Indentation (dynamic gonioscopy): press gently. The angle opens if closure is appositional; it stays shut if there are peripheral anterior synechiae (PAS)." }
    ],
    normal: [
      { fr: "Angle ouvert : éperon scléral (bande blanche) visible sur 360°.", en: "Open angle: scleral spur (white band) visible for 360°." },
      { fr: "Trabéculum pigmenté (partie fonctionnelle, postérieure), plus marqué en inférieur.", en: "Pigmented (posterior, functional) trabecular meshwork, most marked inferiorly." },
      { fr: "Shaffer 3–4 : 20–45°, éperon ou bande ciliaire visibles.", en: "Shaffer 3–4: 20–45°, spur or ciliary body band visible." },
      { fr: "Procès iriens fins (iris processes) : variante normale, en dentelle, ne cachent pas l’angle.", en: "Fine iris processes: a normal lacy variant that doesn’t hide the angle." }
    ],
    keys: [
      { fr: "Synéchies antérieures périphériques (PAS) : iris collé au-dessus de l’éperon, qui ne s’ouvre pas à l’indentation.", en: "Peripheral anterior synechiae (PAS): iris stuck above the spur, not opening with indentation." },
      { fr: "Contact appositionnel : l’angle fermé s’ouvre à l’indentation.", en: "Appositional contact: the closed angle opens with indentation." },
      { fr: "Récession de l’angle (angle recession) : bande ciliaire anormalement large après un trauma contusif → glaucome possible des années plus tard.", en: "Angle recession: abnormally wide ciliary body band after blunt trauma → glaucoma possible years later." },
      { fr: "Fente de cyclodialyse (cyclodialysis cleft) : bande blanche profonde (sclère) sous l’éperon → hypotonie.", en: "Cyclodialysis cleft: deep white band (bare sclera) below the spur → hypotony." },
      { fr: "Ligne de Sampaolesi : pigment en avant de la ligne de Schwalbe, classique en pseudoexfoliation.", en: "Sampaolesi line: pigment anterior to Schwalbe’s line, classic in pseudoexfoliation." },
      { fr: "Néovaisseaux de l’angle (NVA) : vaisseaux qui franchissent l’éperon scléral.", en: "Angle neovascularization (NVA): vessels crossing the scleral spur." }
    ],
    pitfalls: [
      { fr: "Trop de lumière dans la pupille → myosis → angle faussement ouvert.", en: "Too much light in the pupil → miosis → falsely open angle." },
      { fr: "Pression involontaire avec la lentille 4 miroirs → angle faussement ouvert.", en: "Inadvertent pressure with the 4-mirror lens → falsely open angle." },
      { fr: "Prendre une ligne de Schwalbe pigmentée (Sampaolesi) pour le trabéculum → angle surestimé. Le « coin cornéen » (corneal wedge) localise Schwalbe.", en: "Mistaking a pigmented Schwalbe’s line (Sampaolesi) for the meshwork → angle overestimated. The corneal wedge locates Schwalbe’s line." },
      { fr: "Oublier que le miroir montre l’angle opposé.", en: "Forgetting that the mirror shows the opposite angle." }
    ],
    tool: "gonio-grader",
    practice: ["p-gonio-1", "p-gonio-2", "p-gonio-3", "p-gonio-4", "p-gonio-5", "p-gonio-6", "p-gonio-7"]
  },

  /* ───────────────────────── I5 — Fond d’œil ───────────────────────── */
  {
    id: "fondoeil", n: "I5",
    title: { fr: "Fond d’œil", en: "Fundus examination" },
    en_term: "Fundus examination (ophthalmoscopy)",
    why: {
      fr: "Examiner la papille, les vaisseaux, la macula et la périphérie. C’est l’examen qui détecte les urgences : œdème papillaire, occlusion artérielle, décollement de rétine.",
      en: "Examine the optic disc, vessels, macula and periphery. This is the exam that catches emergencies: disc swelling, artery occlusion, retinal detachment."
    },
    how: [
      { fr: "Évaluer les pupilles (déficit pupillaire afférent relatif, DPAR) avant de dilater, puis dilater (tropicamide ± phényléphrine).",
        en: "Check the pupils (relative afferent pupillary defect, RAPD) before dilating, then dilate (tropicamide ± phenylephrine)." },
      { fr: "Ophtalmoscope direct (direct ophthalmoscope) : image droite, grossissement ≈ 15×, champ étroit (≈ 5°). Bon pour la papille, même sans dilatation.",
        en: "Direct ophthalmoscope: upright image, ~15× magnification, narrow field (~5°). Good for the disc, even undilated." },
      { fr: "Lentille de 90 D (ou 78 D) à la lampe à fente : pôle postérieur en stéréo; image inversée.",
        en: "90 D (or 78 D) lens at the slit lamp: stereoscopic posterior pole; inverted image." },
      { fr: "Ophtalmoscope indirect (binocular indirect ophthalmoscope) + lentille 20 D : grand champ, stéréo, périphérie jusqu’à l’ora avec indentation; image inversée haut-bas et gauche-droite.",
        en: "Binocular indirect ophthalmoscope + 20 D lens: wide field, stereo, periphery out to the ora with scleral depression; image flipped up–down and left–right." },
      { fr: "Lecture systématique, toujours dans le même ordre : reflet rouge (milieux) → papille (C/D, bord, couleur, contours) → vaisseaux → macula (reflet fovéolaire) → périphérie.",
        en: "Systematic read, always in the same order: red reflex (media) → disc (C/D, rim, color, margins) → vessels → macula (foveal reflex) → periphery." }
    ],
    normal: [
      { fr: "Papille rose-orangé, bords nets, rapport cup/disc (C/D) vertical ≈ 0,3 (varie avec la taille du disque).", en: "Pink-orange disc, sharp margins, vertical cup-to-disc ratio (C/D) ~0.3 (depends on disc size)." },
      { fr: "Bord neurorétinien plus épais en inférieur, puis en supérieur, nasal et temporal (ISNT).", en: "Neuroretinal rim thickest inferiorly, then superior, nasal, temporal (ISNT)." },
      { fr: "Rapport artère/veine ≈ 2/3; pulsations veineuses spontanées souvent présentes (leur absence seule n’est pas pathologique).", en: "Artery-to-vein ratio ~2:3; spontaneous venous pulsations often present (their absence alone isn’t abnormal)." },
      { fr: "Fovéa ≈ 2,5 diamètres papillaires en temporal de la papille, avec reflet fovéolaire.", en: "Fovea ~2.5 disc diameters temporal to the disc, with a foveal reflex." },
      { fr: "Reflets brillants de la limitante interne fréquents chez le jeune.", en: "Bright internal limiting membrane reflexes are common in young patients." }
    ],
    keys: [
      { fr: "Excavation glaucomateuse : C/D augmenté, encoche du bord (souvent inférotemporale), hémorragie papillaire.", en: "Glaucomatous cupping: enlarged C/D, rim notch (often inferotemporal), disc hemorrhage." },
      { fr: "Œdème papillaire (papilledema si hypertension intracrânienne) : bords effacés, vaisseaux masqués, hémorragies en flammèche.", en: "Optic disc swelling (papilledema when due to raised intracranial pressure): blurred margins, obscured vessels, flame hemorrhages." },
      { fr: "Occlusion de l’artère centrale de la rétine (OACR, CRAO) : rétine blanche + tache rouge cerise (cherry-red spot).", en: "Central retinal artery occlusion (CRAO): whitened retina + cherry-red spot." },
      { fr: "Occlusion de la veine centrale de la rétine (OVCR, CRVO) : hémorragies dans les 4 quadrants, veines dilatées et tortueuses.", en: "Central retinal vein occlusion (CRVO): hemorrhages in all 4 quadrants, dilated tortuous veins." },
      { fr: "Décollement de rétine : rétine grise, soulevée, ondulée; chercher la déchirure.", en: "Retinal detachment: gray, elevated, undulating retina; look for the break." },
      { fr: "Rétinopathie diabétique : microanévrismes, hémorragies, exsudats; néovaisseaux = forme proliférante.", en: "Diabetic retinopathy: microaneurysms, hemorrhages, exudates; new vessels = proliferative disease." }
    ],
    pitfalls: [
      { fr: "Direct sans dilatation : on voit la papille, pas la périphérie.", en: "Undilated direct ophthalmoscopy: you see the disc, not the periphery." },
      { fr: "Oublier l’inversion de l’image (90 D, indirect) → lésion mal localisée.", en: "Forgetting the image is inverted (90 D, indirect) → lesion mislocated." },
      { fr: "Juger l’excavation sur la pâleur plutôt que sur le contour (courbure des vaisseaux) → C/D sous-estimé.", en: "Judging the cup by pallor rather than contour (vessel bending) → C/D underestimated." },
      { fr: "Confondre pseudo-œdème (drusen papillaires, petite papille encombrée de l’hypermétrope) et vrai œdème.", en: "Confusing pseudo-swelling (disc drusen, crowded hyperopic disc) with true swelling." }
    ],
    tool: "fundus-explorer",
    practice: ["p-fondoeil-1", "p-fondoeil-2", "p-fondoeil-3", "p-fondoeil-4", "p-fondoeil-5", "p-fondoeil-6", "p-fondoeil-7", "p-fondoeil-8"]
  },

  /* ───────────────────────── I6 — Champ visuel Humphrey ───────────────────────── */
  {
    id: "cv", n: "I6",
    title: { fr: "Champ visuel automatisé (Humphrey)", en: "Automated visual field (Humphrey)" },
    en_term: "Standard automated perimetry (Humphrey)",
    why: {
      fr: "Mesurer la sensibilité lumineuse point par point. Il dépiste, classe et suit le glaucome, et localise une lésion des voies visuelles (nerf, chiasma, voies rétrochiasmatiques).",
      en: "Measure light sensitivity point by point. It detects, stages and follows glaucoma, and localizes lesions along the visual pathway (nerve, chiasm, retrochiasmal pathways)."
    },
    how: [
      { fr: "Choisir le programme : 24-2 SITA Standard (54 points); 10-2 si atteinte centrale (glaucome avancé, hydroxychloroquine).",
        en: "Choose the program: 24-2 SITA Standard (54 points); 10-2 for central disease (advanced glaucoma, hydroxychloroquine)." },
      { fr: "Un œil à la fois, bonne correction de près, patient confortable et informé.",
        en: "One eye at a time, proper near correction, a comfortable, well-briefed patient." },
      { fr: "Lire d’abord l’identité et la fiabilité : pertes de fixation, faux positifs, faux négatifs.",
        en: "Read identity and reliability first: fixation losses, false positives, false negatives." },
      { fr: "Puis les indices : MD (déficit moyen, mean deviation), PSD (déficit localisé, pattern standard deviation), VFI, GHT.",
        en: "Then the indices: MD (mean deviation), PSD (pattern standard deviation), VFI, GHT." },
      { fr: "Puis les cartes de probabilité : déviation totale (total deviation), puis déviation corrigée (pattern deviation). Chercher des grappes de points.",
        en: "Then the probability plots: total deviation, then pattern deviation. Look for clusters of points." },
      { fr: "Conclure : quel méridien est respecté? Concordance avec la papille et l’OCT? Confirmer sur un 2e test (effet d’apprentissage, learning effect).",
        en: "Conclude: which meridian is respected? Does it match the disc and OCT? Confirm on a second test (learning effect)." }
    ],
    normal: [
      { fr: "Tache aveugle (blind spot) ≈ 15° en temporal, juste sous le méridien horizontal.", en: "Blind spot ~15° temporal, just below the horizontal meridian." },
      { fr: "Fiable si pertes de fixation ≤ 20 % et faux positifs ≤ 15 %; faux négatifs > 33 % : prudence (souvent élevés si le champ est très atteint).", en: "Reliable if fixation losses ≤ 20% and false positives ≤ 15%; false negatives > 33%: be cautious (often high in badly damaged fields)." },
      { fr: "MD proche de 0 dB, PSD non significatif, GHT « Within Normal Limits ».", en: "MD near 0 dB, non-significant PSD, GHT “Within Normal Limits”." },
      { fr: "Sensibilité maximale au centre (fovéa ≈ 30–35 dB chez l’adulte).", en: "Highest sensitivity centrally (fovea ~30–35 dB in adults)." }
    ],
    keys: [
      { fr: "Glaucome : ressaut nasal (nasal step), scotome arciforme (arcuate), paracentral; respecte le méridien horizontal.", en: "Glaucoma: nasal step, arcuate scotoma, paracentral defect; respects the horizontal meridian." },
      { fr: "Chiasma : hémianopsie bitemporale, qui respecte le méridien vertical.", en: "Chiasm: bitemporal hemianopia, respecting the vertical meridian." },
      { fr: "Rétrochiasmatique : hémianopsie homonyme; plus elle est congruente, plus la lésion est postérieure.", en: "Retrochiasmal: homonymous hemianopia; the more congruous, the more posterior the lesion." },
      { fr: "Cataracte ou petite pupille : déviation totale abaissée partout, déviation corrigée presque normale.", en: "Cataract or small pupil: total deviation depressed everywhere, pattern deviation nearly normal." },
      { fr: "Stade (Hodapp-Parrish-Anderson) : MD > −6 dB débutant; −6 à −12 dB modéré; < −12 dB avancé.", en: "Stage (Hodapp-Parrish-Anderson): MD > −6 dB early; −6 to −12 dB moderate; < −12 dB advanced." },
      { fr: "Structure-fonction : défaut supérieur ↔ atteinte inférieure de la papille et de la RNFL.", en: "Structure–function: superior defect ↔ inferior disc and RNFL damage." }
    ],
    pitfalls: [
      { fr: "Interpréter un test non fiable : faux positifs élevés → sensibilités anormalement hautes, champ « trop beau ».", en: "Interpreting an unreliable test: high false positives → abnormally high sensitivities, a field that looks “too good”." },
      { fr: "Artéfact du verre correcteur (lens rim artifact) : anneau de déficit en périphérie.", en: "Lens rim artifact: a ring of defect in the periphery." },
      { fr: "Ptose ou sourcil bas : faux défaut supérieur.", en: "Ptosis or a low brow: false superior defect." },
      { fr: "Conclure sur un seul champ : effet d’apprentissage → toujours confirmer.", en: "Drawing conclusions from one field: learning effect → always confirm." }
    ],
    tool: "vf-reader",
    practice: ["p-cv-1", "p-cv-2", "p-cv-3", "p-cv-4", "p-cv-5", "p-cv-6", "p-cv-7", "p-cv-8"]
  }
];

G.OPH.invPractice = [
  /* ═════════════════════════ B-SCAN ═════════════════════════ */
  {
    id: "p-bscan-1", inv: "bscan", media: "m-bscan-1", level: 1,
    q: { fr: "Patiente âgée, cataracte blanche à l’œil droit. Le fond d’œil est invisible. Quel examen vérifie que la rétine est à plat avant la chirurgie?", en: "Elderly patient, white cataract in the right eye. You can’t see the fundus. Which test confirms the retina is flat before surgery?" },
    options: [
      { fr: "Angiographie à la fluorescéine", en: "Fluorescein angiography" },
      { fr: "Échographie B", en: "B-scan ultrasound" },
      { fr: "Champ visuel Humphrey", en: "Humphrey visual field" },
      { fr: "OCT maculaire", en: "Macular OCT" }
    ],
    answer: 1,
    why: [
      { fr: "L’angiographie exige de voir le fond d’œil; elle est aussi bloquée.", en: "Angiography needs a view of the fundus; it’s blocked too." },
      { fr: "Juste : les ultrasons traversent les milieux opaques. On cherche un décollement de rétine, une masse ou une hémorragie.", en: "Correct: ultrasound passes through opaque media. You’re looking for a detachment, a mass or a hemorrhage." },
      { fr: "Le champ visuel mesure la fonction, pas l’anatomie, et il est ininterprétable derrière une cataracte mature.", en: "A visual field measures function, not anatomy, and it’s uninterpretable behind a mature cataract." },
      { fr: "L’OCT utilise la lumière : une cataracte mature la bloque.", en: "OCT uses light: a mature cataract blocks it." }
    ],
    reveal: { fr: "Pupille blanche (cataracte mature) : la lumière ne passe pas, les ultrasons oui.", en: "White pupil (mature cataract): light can’t get through, ultrasound can." }
  },
  {
    id: "p-bscan-2", inv: "bscan", media: "m-bscan-2", level: 1,
    q: { fr: "Coupe longitudinale de la macula (L9, œil droit). Que représente la bande sombre qui part de la paroi postérieure, sous la macula?", en: "Longitudinal macula scan (L9, right eye). What is the dark band leaving the posterior wall below the macula?" },
    options: [
      { fr: "L’ombre du nerf optique", en: "The optic nerve shadow" },
      { fr: "Un décollement de rétine", en: "A retinal detachment" },
      { fr: "Du liquide sous-ténonien (signe du T)", en: "Sub-Tenon fluid (T-sign)" },
      { fr: "Un artéfact de réverbération", en: "A reverberation artifact" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : le nerf optique est hypoéchogène au milieu de la graisse orbitaire blanche. En coupe LMAC, il apparaît sous la macula.", en: "Correct: the optic nerve is hypoechoic within the white orbital fat. On an LMAC scan it sits below the macula." },
      { fr: "Un décollement de rétine est une membrane brillante dans le vitré, pas une bande sombre derrière le globe.", en: "A retinal detachment is a bright membrane in the vitreous, not a dark band behind the globe." },
      { fr: "Le signe du T (sclérite postérieure) est une bande noire le long de la sclère qui rejoint l’ombre du nerf. Ici, rien ne longe la paroi.", en: "The T-sign (posterior scleritis) is a black band along the sclera joining the nerve shadow. Nothing runs along the wall here." },
      { fr: "Une réverbération donne des échos répétés et parallèles, pas une bande sombre anatomique.", en: "Reverberation gives repeated parallel echoes, not an anatomic dark band." }
    ],
    reveal: { fr: "La bande hypoéchogène derrière la paroi, sous la macula, est l’ombre du nerf optique : le repère qui oriente chaque coupe.", en: "The hypoechoic band behind the wall, below the macula, is the optic nerve shadow — the landmark that orients every scan." }
  },
  {
    id: "p-bscan-3", inv: "bscan", media: "m-bscan-3g", level: 1,
    q: { fr: "Schéma : coupe longitudinale, gain élevé, chez un patient avec hémorragie du vitré au fond d’œil. Que conclure?", en: "Schematic: longitudinal scan at high gain in a patient with a vitreous hemorrhage on fundus exam. What do you conclude?" },
    options: [
      { fr: "Décollement de rétine", en: "Retinal detachment" },
      { fr: "Décollement choroïdien", en: "Choroidal detachment" },
      { fr: "Examen normal : ce ne sont que des artéfacts de gain", en: "Normal scan: these are just gain artifacts" },
      { fr: "Échos ponctués mobiles dans le vitré, rétine à plat : hémorragie du vitré sans décollement", en: "Mobile dot echoes in the vitreous, flat retina: vitreous hemorrhage without detachment" }
    ],
    answer: 3,
    why: [
      { fr: "Aucune membrane épaisse et brillante n’est fixée à la papille.", en: "No thick bright membrane is tethered to the disc." },
      { fr: "Aucun dôme épais et lisse ne soulève la paroi.", en: "No thick smooth dome lifts the wall." },
      { fr: "Les échos persistent et bougent avec l’œil : ce sont des structures réelles, pas du bruit.", en: "The echoes persist and move with the eye: they’re real, not noise." },
      { fr: "Juste : à gain élevé, le sang donne des échos ponctués de faible réflectivité, mobiles. Le but est de vérifier qu’aucune membrane n’est attachée à la papille.", en: "Correct: at high gain, blood gives low-reflectivity mobile dot echoes. The goal is to confirm no membrane is tethered to the disc." }
    ],
    reveal: { fr: "Échos ponctués mobiles dans un vitré par ailleurs vide, paroi postérieure à plat : hémorragie du vitré, rétine en place.", en: "Mobile dot echoes in an otherwise empty vitreous, flat posterior wall: vitreous hemorrhage, retina attached." }
  },
  {
    id: "p-bscan-4", inv: "bscan", media: "m-bscan-4", level: 2,
    q: { fr: "Fond d’œil (en haut) et échographie B (en bas) du même œil. Quel signe échographique oriente vers un décollement choroïdien plutôt qu’un décollement de rétine?", en: "Fundus (top) and B-scan (bottom) of the same eye. Which ultrasound sign points to a choroidal rather than a retinal detachment?" },
    options: [
      { fr: "Des échos ponctués libres dans le vitré", en: "Free dot-like echoes in the vitreous" },
      { fr: "Une membrane fine, très mobile, peu réfléchissante", en: "A thin, very mobile, low-reflectivity membrane" },
      { fr: "Un dôme épais et lisse qui ne rejoint pas la papille", en: "A thick, smooth dome that doesn’t reach the disc" },
      { fr: "Une membrane en V qui s’insère sur la papille", en: "A V-shaped membrane inserting at the disc" }
    ],
    answer: 2,
    why: [
      { fr: "Ce sont des échos d’hémorragie du vitré ou d’inflammation, sans membrane.", en: "Those are vitreous hemorrhage or inflammatory echoes, with no membrane." },
      { fr: "C’est l’aspect d’un décollement postérieur du vitré.", en: "That’s a posterior vitreous detachment." },
      { fr: "Juste : la choroïde reste ancrée autour du nerf optique et aux veines vortiqueuses, d’où des dômes convexes qui épargnent la papille. Ici, le contenu est hémorragique.", en: "Correct: the choroid stays anchored around the optic nerve and at the vortex veins, so it forms convex domes that spare the disc. Here the content is hemorrhagic." },
      { fr: "C’est l’aspect d’un décollement de rétine : la rétine reste attachée à la papille et à l’ora serrata.", en: "That’s a retinal detachment: the retina stays attached at the disc and the ora serrata." }
    ],
    reveal: { fr: "Dômes épais, lisses et convexes : c’est la choroïde qui est soulevée (décollement choroïdien hémorragique), pas la rétine.", en: "Thick, smooth, convex domes: the choroid is elevated (hemorrhagic choroidal detachment), not the retina." }
  },
  {
    id: "p-bscan-5", inv: "bscan", media: "m-bscan-5", level: 3,
    q: { fr: "Série d’échographies B d’un œil. Les dômes choroïdiens se rejoignent au centre du vitré. Comment nomme-t-on cette configuration et pourquoi inquiète-t-elle?", en: "A series of B-scans of one eye. The choroidal domes meet in the middle of the vitreous. What is this configuration called, and why is it worrying?" },
    options: [
      { fr: "Mélanome choroïdien en champignon : radiothérapie", en: "Mushroom-shaped choroidal melanoma: radiotherapy" },
      { fr: "Décollements choroïdiens « kissing » (appositionnels) : risque d’adhérence rétine-rétine; on discute un drainage chirurgical", en: "“Kissing” (appositional) choroidal detachments: risk of retina-to-retina adhesion; surgical drainage is considered" },
      { fr: "Décollement postérieur du vitré complet : simple surveillance", en: "Complete posterior vitreous detachment: observation only" },
      { fr: "Décollement de rétine en entonnoir fermé : prolifération vitréorétinienne", en: "Closed-funnel retinal detachment: proliferative vitreoretinopathy" }
    ],
    answer: 1,
    why: [
      { fr: "Un mélanome est une masse solide unique (dôme ou champignon), pas des dômes symétriques remplis de caillot.", en: "A melanoma is a single solid mass (dome or mushroom), not symmetric clot-filled domes." },
      { fr: "Juste : quand les dômes se touchent (« kissing »), les surfaces rétiniennes peuvent adhérer. Pour un décollement hémorragique, on attend souvent la liquéfaction du caillot, suivie à l’échographie, avant de drainer.", en: "Correct: when the domes touch (“kissing”), the retinal surfaces can stick together. For hemorrhagic detachments, drainage is often timed to clot liquefaction, followed by ultrasound." },
      { fr: "Un DPV est une membrane fine et mobile, sans contenu sous elle.", en: "A PVD is a thin, mobile membrane with nothing underneath it." },
      { fr: "Un décollement de rétine en entonnoir s’insère à la papille avec une membrane fine et brillante, pas deux dômes épais.", en: "A funnel retinal detachment inserts at the disc as a thin bright membrane, not two thick domes." }
    ],
    reveal: { fr: "Deux dômes choroïdiens épais qui se touchent au centre : décollement choroïdien hémorragique appositionnel (« kissing »).", en: "Two thick choroidal domes touching centrally: appositional (“kissing”) hemorrhagic choroidal detachment." }
  },
  {
    id: "p-bscan-6", inv: "bscan", media: "m-bscan-6", level: 2,
    q: { fr: "Schéma : membrane dans le vitré, en V, fixée à la papille, très brillante (pic de 100 % à l’A-scan), peu mobile. Diagnostic?", en: "Schematic: V-shaped membrane in the vitreous, tethered to the disc, very bright (100% spike on A-scan), minimally mobile. Diagnosis?" },
    options: [
      { fr: "Décollement de rétine", en: "Retinal detachment" },
      { fr: "Décollement postérieur du vitré", en: "Posterior vitreous detachment" },
      { fr: "Décollement choroïdien", en: "Choroidal detachment" },
      { fr: "Hémorragie du vitré", en: "Vitreous hemorrhage" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : la rétine décollée reste attachée à la papille et à l’ora serrata, d’où la forme en V; sa réflectivité est très élevée.", en: "Correct: detached retina stays attached at the disc and ora serrata, hence the V shape; its reflectivity is very high." },
      { fr: "Le DPV est fin, peu réfléchissant (pic < 100 %) et rebondit avec les mouvements, même s’il touche parfois la papille.", en: "A PVD is thin, low-reflectivity (spike < 100%) and bounces with eye movement, even if it sometimes touches the disc." },
      { fr: "Le décollement choroïdien forme des dômes épais qui épargnent la papille.", en: "A choroidal detachment forms thick domes that spare the disc." },
      { fr: "L’hémorragie du vitré donne des échos ponctués, sans membrane continue.", en: "Vitreous hemorrhage gives dot-like echoes, with no continuous membrane." }
    ],
    reveal: { fr: "Membrane brillante en V fixée à la papille = rétine décollée.", en: "Bright V-shaped membrane tethered to the disc = detached retina." }
  },
  {
    id: "p-bscan-7", inv: "bscan", media: "m-bscan-7", level: 3,
    q: { fr: "Échographie B d’un œil nanophtalme (très court). Le compas jaune mesure 2,38 mm. Qu’est-ce qui est mesuré?", en: "B-scan of a nanophthalmic (very short) eye. The yellow caliper reads 2.38 mm. What is being measured?" },
    options: [
      { fr: "La hauteur d’un mélanome choroïdien débutant", en: "The height of an early choroidal melanoma" },
      { fr: "Un décollement de rétine plan", en: "A shallow retinal detachment" },
      { fr: "L’élévation de la papille (œdème papillaire)", en: "Optic disc elevation (disc swelling)" },
      { fr: "L’épaisseur de la paroi postérieure (surtout la sclère), nettement augmentée", en: "Posterior wall thickness (mainly sclera), clearly increased" }
    ],
    answer: 3,
    why: [
      { fr: "Un mélanome est une masse focale en dôme, pas un épaississement diffus de toute la paroi.", en: "A melanoma is a focal dome-shaped mass, not diffuse thickening of the whole wall." },
      { fr: "Un décollement de rétine est une membrane séparée de la paroi par du liquide noir; ici la paroi est pleine.", en: "A retinal detachment is a membrane separated from the wall by black fluid; here the wall is solid." },
      { fr: "La mesure n’est pas sur la papille; l’œdème papillaire se voit comme une élévation focale à la tête du nerf.", en: "The caliper isn’t on the disc; disc swelling shows as a focal elevation at the nerve head." },
      { fr: "Juste : selon la source, la sclère mesure près de 2,4 mm dans un œil de ≈ 17 mm de long (la sclère postérieure normale fait ≈ 1 mm). Sclère épaisse + œil court = nanophtalmie : risque d’effusion uvéale et de fermeture de l’angle, chirurgie à risque.", en: "Correct: per the source, the sclera is almost 2.4 mm thick in an eye ~17 mm long (normal posterior sclera is ~1 mm). Thick sclera + short eye = nanophthalmos: risk of uveal effusion and angle closure; high-risk surgery." }
    ],
    reveal: { fr: "Paroi postérieure (sclère) épaissie à 2,38 mm dans un œil court : nanophtalmie.", en: "Posterior wall (sclera) thickened to 2.38 mm in a short eye: nanophthalmos." }
  },
  /* ═════════════════════════ A-SCAN / BIOMÉTRIE ═════════════════════════ */
  {
    id: "p-ascan-1", inv: "ascan", media: "m-ascan-1", level: 1,
    q: { fr: "A-scan d’un œil phaque, pics numérotés de 1 à 6. Lequel est la rétine?", en: "A-scan of a phakic eye, spikes numbered 1 to 6. Which one is the retina?" },
    options: [
      { fr: "Pic 5", en: "Spike 5" },
      { fr: "Pic 1", en: "Spike 1" },
      { fr: "Pic 4 : le premier pic haut après la longue ligne plate du vitré", en: "Spike 4: the first tall spike after the long flat vitreous line" },
      { fr: "Pic 3", en: "Spike 3" }
    ],
    answer: 2,
    why: [
      { fr: "Pic 5 = sclère, juste derrière la rétine, avant les échos décroissants de la graisse orbitaire.", en: "Spike 5 = sclera, right behind the retina, before the decaying orbital fat echoes." },
      { fr: "Pic 1 = cornée (souvent double : face antérieure et postérieure).", en: "Spike 1 = cornea (often double: front and back surfaces)." },
      { fr: "Juste : le vitré ne renvoie pas d’écho (ligne plate); la rétine est le premier pic abrupt qui suit.", en: "Correct: the vitreous returns no echo (flat line); the retina is the first steep spike after it." },
      { fr: "Pic 3 = capsule postérieure du cristallin, juste avant le vitré.", en: "Spike 3 = posterior lens capsule, just before the vitreous." }
    ],
    reveal: { fr: "Rétine = premier pic haut et vertical après le silence du vitré; la sclère suit, puis la graisse orbitaire.", en: "Retina = the first tall vertical spike after the silent vitreous; sclera follows, then orbital fat." }
  },
  {
    id: "p-ascan-2", inv: "ascan", media: "m-ascan-2", level: 1,
    q: { fr: "Cataracte blanche à l’œil droit. La biométrie optique ne donne aucune mesure. Pourquoi, et que faire?", en: "White cataract in the right eye. Optical biometry gives no reading. Why, and what next?" },
    options: [
      { fr: "L’œil est trop long pour l’appareil → changer de formule", en: "The eye is too long for the device → change formula" },
      { fr: "La lumière ne traverse pas la cataracte dense → échographie A, en immersion de préférence", en: "Light can’t cross the dense cataract → A-scan, ideally immersion" },
      { fr: "Utiliser la longueur axiale de l’autre œil", en: "Use the fellow eye’s axial length" },
      { fr: "La cornée est trop cambrée → refaire seulement la kératométrie", en: "The cornea is too steep → just repeat keratometry" }
    ],
    answer: 1,
    why: [
      { fr: "Rien n’indique un œil long; c’est l’opacité qui bloque le signal.", en: "Nothing suggests a long eye; the opacity blocks the signal." },
      { fr: "Juste : la biométrie optique repose sur la lumière; l’ultrason passe à travers une cataracte mature.", en: "Correct: optical biometry relies on light; ultrasound gets through a mature cataract." },
      { fr: "L’autre œil sert de contrôle, jamais de substitut : les deux yeux peuvent différer.", en: "The fellow eye is a check, never a substitute: the two eyes can differ." },
      { fr: "La kératométrie mesure la cornée; elle n’explique pas l’échec de la longueur axiale.", en: "Keratometry measures the cornea; it doesn’t explain the failed axial length." }
    ],
    reveal: { fr: "Cataracte blanche = lumière bloquée : la biométrie optique échoue, l’ultrason passe.", en: "White cataract = light blocked: optical biometry fails, ultrasound gets through." }
  },
  {
    id: "p-ascan-3", inv: "ascan", media: "m-ascan-3", level: 2,
    q: { fr: "Biométrie par contact : sur ce tracé, la chambre antérieure est plus courte qu’aux autres mesures. Quel effet sur la réfraction postopératoire?", en: "Contact biometry: on this trace, the anterior chamber is shorter than on the other readings. What happens to the postoperative refraction?" },
    options: [
      { fr: "Longueur axiale trop courte → IOL trop puissante → surprise myopique", en: "Axial length too short → IOL too strong → myopic surprise" },
      { fr: "Longueur axiale trop longue → IOL trop faible → surprise hypermétropique", en: "Axial length too long → IOL too weak → hyperopic surprise" },
      { fr: "Aucun effet si on répète la mesure 5 fois", en: "No effect if you repeat it 5 times" },
      { fr: "Seule la kératométrie est faussée", en: "Only keratometry is affected" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : la sonde enfonce la cornée (souvent 0,1 à 0,3 mm). Chaque millimètre perdu vaut ≈ 2,5–3 D.", en: "Correct: the probe indents the cornea (often 0.1–0.3 mm). Each millimetre lost is worth ~2.5–3 D." },
      { fr: "C’est l’inverse : la compression raccourcit l’œil mesuré.", en: "It’s the reverse: compression shortens the measured eye." },
      { fr: "Répéter avec la même compression reproduit la même erreur.", en: "Repeating with the same compression repeats the same error." },
      { fr: "La kératométrie se mesure à part, sans la sonde d’échographie.", en: "Keratometry is measured separately, without the ultrasound probe." }
    ],
    reveal: { fr: "Chambre antérieure raccourcie = cornée comprimée : la longueur axiale est sous-estimée.", en: "Shortened anterior chamber = compressed cornea: axial length is underestimated." }
  },
  {
    id: "p-ascan-4", inv: "ascan", media: "m-ascan-4", level: 2,
    q: { fr: "Deux mesures du même œil (tracés A et B). Laquelle accepter?", en: "Two readings of the same eye (traces A and B). Which one do you accept?" },
    options: [
      { fr: "B : pic rétinien bas, en escalier, mais longueur plus grande", en: "B: low, stair-stepped retinal spike, but a longer length" },
      { fr: "La moyenne des deux", en: "The average of the two" },
      { fr: "La plus courte, par prudence", en: "The shorter one, to be safe" },
      { fr: "A : pic rétinien haut, vertical, suivi d’un pic scléral distinct", en: "A: tall, vertical retinal spike followed by a distinct scleral spike" }
    ],
    answer: 3,
    why: [
      { fr: "Un pic bas en escalier = faisceau oblique ou hors fovéa (ex. sur le nerf optique) : mesure fausse.", en: "A low stair-stepped spike = oblique or off-fovea beam (e.g., on the optic nerve): unreliable." },
      { fr: "Moyenner une mauvaise mesure introduit l’erreur dans le calcul.", en: "Averaging in a bad reading puts its error into the calculation." },
      { fr: "On choisit sur la qualité du tracé, pas sur la valeur.", en: "Choose by trace quality, not by the number." },
      { fr: "Juste : un pic haut et vertical signifie un faisceau perpendiculaire, centré sur la fovéa.", en: "Correct: a tall vertical spike means a perpendicular beam centred on the fovea." }
    ],
    reveal: { fr: "On juge une mesure à la forme du pic rétinien : haut et vertical = faisceau perpendiculaire sur la fovéa.", en: "Judge a reading by the retinal spike: tall and vertical = perpendicular beam on the fovea." }
  },
  {
    id: "p-ascan-5", inv: "ascan", media: "m-ascan-5", level: 2,
    q: { fr: "Longueurs axiales : OD 23,42 mm, OG 24,31 mm. Réfraction semblable aux deux yeux. Que faire?", en: "Axial lengths: OD 23.42 mm, OS 24.31 mm. Similar refraction in both eyes. What now?" },
    options: [
      { fr: "Opérer d’abord l’œil le plus court", en: "Operate on the shorter eye first" },
      { fr: "Calculer les IOL avec ces valeurs", en: "Calculate the IOLs with these values" },
      { fr: "Refaire les mesures : écart > 0,3 mm non expliqué", en: "Repeat the measurements: unexplained difference > 0.3 mm" },
      { fr: "Utiliser la moyenne des deux yeux", en: "Use the average of both eyes" }
    ],
    answer: 2,
    why: [
      { fr: "L’ordre des chirurgies ne règle pas une erreur de mesure.", en: "Surgical order doesn’t fix a measurement error." },
      { fr: "0,89 mm d’écart ≈ 2 à 3 D d’erreur possible sur un œil.", en: "A 0.89 mm gap ≈ a possible 2–3 D error in one eye." },
      { fr: "Juste : un écart > 0,3 mm n’est attendu qu’en cas d’anisométropie. Vérifier alignement, compression, staphylome.", en: "Correct: a difference > 0.3 mm is expected only with anisometropia. Check alignment, compression, staphyloma." },
      { fr: "Chaque œil a sa propre mesure; la moyenne fausse les deux.", en: "Each eye gets its own measurement; averaging corrupts both." }
    ],
    reveal: { fr: "Écart interoculaire de 0,89 mm sans anisométropie = erreur de mesure probable jusqu’à preuve du contraire.", en: "A 0.89 mm interocular difference without anisometropia = measurement error until proven otherwise." }
  },
  {
    id: "p-ascan-6", inv: "ascan", media: "m-ascan-6", level: 3,
    q: { fr: "Œil rempli d’huile de silicone, avec cataracte. L’appareil calcule à 1550 m/s comme pour un œil phaque. Résultat?", en: "Silicone oil–filled eye with cataract. The device calculates at 1550 m/s as for a phakic eye. Result?" },
    options: [
      { fr: "Aucun effet", en: "No effect" },
      { fr: "Longueur axiale surestimée : corriger la vitesse ou préférer la biométrie optique", en: "Axial length overestimated: correct the velocity or prefer optical biometry" },
      { fr: "Mesure impossible : l’huile bloque les ultrasons", en: "No reading possible: oil blocks ultrasound" },
      { fr: "Longueur axiale sous-estimée", en: "Axial length underestimated" }
    ],
    answer: 1,
    why: [
      { fr: "La vitesse entre directement dans le calcul.", en: "Velocity is built right into the calculation." },
      { fr: "Juste : distance = vitesse × temps. Le son est plus lent dans l’huile (≈ 980 m/s), le temps s’allonge, donc la distance calculée aussi.", en: "Correct: distance = velocity × time. Sound is slower in oil (~980 m/s), the transit time lengthens, and so does the calculated distance." },
      { fr: "Le son traverse l’huile, lentement et atténué : la mesure est possible mais piégeuse.", en: "Sound does cross oil, slowly and attenuated: a reading is possible but tricky." },
      { fr: "C’est l’inverse : un son plus lent donne une longueur trop grande.", en: "It’s the reverse: slower sound gives a length that’s too long." }
    ],
    reveal: { fr: "Son lent dans l’huile = temps plus long = œil faussement long si la vitesse n’est pas corrigée.", en: "Slow sound in oil = longer transit = a falsely long eye if velocity isn’t corrected." }
  },
  {
    id: "p-ascan-7", inv: "ascan", media: "m-ascan-7", level: 3,
    q: { fr: "A-scan standardisé à travers une masse choroïdienne en dôme : échos internes faibles à moyens, réguliers, qui décroissent en profondeur. Quel diagnostic est le plus compatible?", en: "Standardized A-scan through a dome-shaped choroidal mass: low-to-medium, regular internal echoes that decrease with depth. Which diagnosis fits best?" },
    options: [
      { fr: "Mélanome choroïdien", en: "Choroidal melanoma" },
      { fr: "Hémangiome choroïdien circonscrit", en: "Circumscribed choroidal hemangioma" },
      { fr: "Métastase choroïdienne", en: "Choroidal metastasis" },
      { fr: "Décollement choroïdien séreux", en: "Serous choroidal detachment" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : le mélanome a une réflectivité interne faible à moyenne, régulière, avec une décroissance progressive (atténuation du son).", en: "Correct: melanoma shows low-to-medium, regular internal reflectivity with gradual decay (sound attenuation)." },
      { fr: "L’hémangiome a une réflectivité interne élevée.", en: "Hemangioma has high internal reflectivity." },
      { fr: "La métastase est plutôt moyenne à élevée et irrégulière.", en: "Metastasis tends to be medium-to-high and irregular." },
      { fr: "Un décollement séreux est vide d’échos sous la paroi soulevée.", en: "A serous detachment has no echoes beneath the elevated wall." }
    ],
    reveal: { fr: "Réflectivité faible à moyenne, régulière, décroissante dans une masse en dôme : profil du mélanome choroïdien.", en: "Low-to-medium, regular, decaying reflectivity in a dome-shaped mass: the choroidal melanoma profile." }
  },
  /* ═════════════════════════ OCT ═════════════════════════ */
  {
    id: "p-oct-1", inv: "oct", media: "m-oct-1", level: 1,
    q: { fr: "Schéma d’une coupe OCT maculaire normale. Quelle bande est le complexe EPR-membrane de Bruch?", en: "Schematic of a normal macular OCT scan. Which band is the RPE–Bruch membrane complex?" },
    options: [
      { fr: "La bande hyperréflective la plus interne", en: "The innermost hyperreflective band" },
      { fr: "La couche sombre épaisse au milieu de la rétine externe", en: "The thick dark layer in the outer retina" },
      { fr: "La fine bande brillante juste au-dessus de la plus profonde", en: "The thin bright band just above the deepest one" },
      { fr: "La bande hyperréflective la plus profonde, posée sur la choroïde", en: "The deepest hyperreflective band, resting on the choroid" }
    ],
    answer: 3,
    why: [
      { fr: "C’est la couche des fibres nerveuses (RNFL), en surface; elle s’épaissit vers la papille.", en: "That’s the nerve fiber layer (RNFL), on the surface; it thickens toward the disc." },
      { fr: "C’est la couche nucléaire externe (noyaux des photorécepteurs), hyporéflective.", en: "That’s the outer nuclear layer (photoreceptor nuclei), hyporeflective." },
      { fr: "C’est la zone ellipsoïde (segments internes des photorécepteurs). Sa rupture signe une atteinte des photorécepteurs.", en: "That’s the ellipsoid zone (photoreceptor inner segments). Its disruption means photoreceptor damage." },
      { fr: "Juste : l’EPR et Bruch forment la bande brillante la plus externe, juste au-dessus de la choroïde.", en: "Correct: the RPE and Bruch form the outermost bright band, just above the choroid." }
    ],
    reveal: { fr: "La bande brillante la plus profonde, sur la choroïde, est l’EPR-Bruch; la zone ellipsoïde est juste au-dessus.", en: "The deepest bright band, on the choroid, is RPE–Bruch; the ellipsoid zone sits just above it." }
  },
  {
    id: "p-oct-2", inv: "oct", media: "m-oct-2", level: 2,
    q: { fr: "Image infrarouge (à gauche) et coupe OCT verticale (à droite). Que montre la coupe?", en: "Infrared image (left) and vertical OCT scan (right). What does the scan show?" },
    options: [
      { fr: "Un décollement séreux rétinien", en: "A serous retinal detachment" },
      { fr: "Un trou maculaire de pleine épaisseur", en: "A full-thickness macular hole" },
      { fr: "Une traction vitréomaculaire avec œdème cystoïde", en: "Vitreomacular traction with cystoid edema" },
      { fr: "Une membrane épirétinienne", en: "An epiretinal membrane" }
    ],
    answer: 2,
    why: [
      { fr: "Le liquide sous-rétinien se trouve sous la rétine, sur l’EPR; ici, les espaces sont dans la rétine.", en: "Subretinal fluid sits under the retina, on the RPE; here the spaces are within the retina." },
      { fr: "Dans un trou de pleine épaisseur, la rétine est interrompue jusqu’à l’EPR. Ici, le toit fovéolaire est soulevé mais présent.", en: "In a full-thickness hole the retina is interrupted down to the RPE. Here the foveal roof is lifted but present." },
      { fr: "Juste : la hyaloïde postérieure, décollée de part et d’autre, reste accrochée à la fovéa et la soulève; des kystes se forment dans la rétine.", en: "Correct: the posterior hyaloid, detached on both sides, is still stuck to the fovea and lifts it; cysts form within the retina." },
      { fr: "Une membrane épirétinienne est une ligne collée à la surface, sans hyaloïde qui monte en arc dans le vitré.", en: "An epiretinal membrane is a line stuck to the surface, without a hyaloid arching up into the vitreous." }
    ],
    reveal: { fr: "Deux arcs de hyaloïde convergent sur la fovéa et la tirent vers le haut : traction vitréomaculaire, avec kystes intrarétiniens.", en: "Two hyaloid arcs converge on the fovea and pull it up: vitreomacular traction, with intraretinal cysts." }
  },
  {
    id: "p-oct-3", inv: "oct", media: "m-oct-3", level: 2,
    q: { fr: "Carte d’épaisseur ETDRS (sous-champ central 531 µm) et coupe OCT horizontale. Quelle anomalie explique l’épaississement?", en: "ETDRS thickness map (central subfield 531 µm) and horizontal OCT scan. What explains the thickening?" },
    options: [
      { fr: "Un trou maculaire", en: "A macular hole" },
      { fr: "Une membrane épirétinienne : surface plissée, creux fovéolaire effacé", en: "An epiretinal membrane: wrinkled surface, flattened foveal pit" },
      { fr: "Rien : artéfact de la carte", en: "Nothing: a map artifact" },
      { fr: "Un décollement séreux rétinien", en: "A serous retinal detachment" }
    ],
    answer: 1,
    why: [
      { fr: "Un trou est une perte de tissu au centre; la fovéa serait creusée, pas épaissie à 531 µm.", en: "A hole is tissue loss at the centre; the fovea would be dug out, not thickened to 531 µm." },
      { fr: "Juste : une membrane à la surface contracte la rétine, efface le creux fovéolaire et l’épaissit.", en: "Correct: a membrane on the surface contracts the retina, flattens the foveal pit and thickens it." },
      { fr: "La coupe confirme l’épaississement et la perte du creux : ce n’est pas un artéfact.", en: "The scan confirms the thickening and the lost pit: it’s not an artifact." },
      { fr: "Le liquide sous-rétinien serait un espace noir entre la rétine et l’EPR; il n’y en a pas.", en: "Subretinal fluid would be a black space between retina and RPE; there is none." }
    ],
    reveal: { fr: "Carte rouge-blanc centrée sur la fovéa (531 µm) et creux fovéolaire effacé sous une surface plissée : membrane épirétinienne.", en: "Red-white map centred on the fovea (531 µm) and a flattened pit under a wrinkled surface: epiretinal membrane." }
  },
  {
    id: "p-oct-4", inv: "oct", media: "m-oct-4", level: 1,
    q: { fr: "Patient diabétique. Coupe OCT maculaire oblique. Que sont les petits espaces sombres dans l’épaisseur de la rétine?", en: "Diabetic patient. Oblique macular OCT scan. What are the small dark spaces within the retina?" },
    options: [
      { fr: "Du liquide intrarétinien (œdème maculaire)", en: "Intraretinal fluid (macular edema)" },
      { fr: "Des vaisseaux choroïdiens", en: "Choroidal vessels" },
      { fr: "Du liquide sous-rétinien", en: "Subretinal fluid" },
      { fr: "Des drusen", en: "Drusen" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : espaces hyporéflectifs dans la rétine épaissie. Les points brillants avec ombre dessous sont des exsudats.", en: "Correct: hyporeflective spaces in a thickened retina. The bright dots casting shadows are exudates." },
      { fr: "Les vaisseaux choroïdiens sont sous l’EPR : ce sont les grands cercles sombres au bas de l’image.", en: "Choroidal vessels lie under the RPE: they’re the large dark circles at the bottom of the image." },
      { fr: "Le liquide sous-rétinien serait sous la rétine, directement sur l’EPR.", en: "Subretinal fluid would sit under the retina, directly on the RPE." },
      { fr: "Les drusen sont des soulèvements sous l’EPR, pas des espaces noirs dans la rétine.", en: "Drusen are elevations under the RPE, not black spaces in the retina." }
    ],
    reveal: { fr: "Espaces sombres dans l’épaisseur rétinienne, avec épaississement et exsudats : liquide intrarétinien d’œdème maculaire diabétique.", en: "Dark spaces within the retina, with thickening and exudates: intraretinal fluid of diabetic macular edema." }
  },
  {
    id: "p-oct-5", inv: "oct", media: "m-oct-5", level: 3,
    q: { fr: "Coupe OCT horizontale passant par la fovéa (panneau A). Que représente le soulèvement en dôme de la bande la plus externe?", en: "Horizontal OCT scan through the fovea (panel A). What is the dome-shaped elevation of the outermost band?" },
    options: [
      { fr: "Du liquide sous-rétinien de choriorétinopathie séreuse centrale", en: "Subretinal fluid from central serous chorioretinopathy" },
      { fr: "Un trou maculaire lamellaire", en: "A lamellar macular hole" },
      { fr: "Une membrane épirétinienne", en: "An epiretinal membrane" },
      { fr: "Un décollement de l’EPR drusénoïde", en: "A drusenoid pigment epithelial detachment" }
    ],
    answer: 3,
    why: [
      { fr: "Dans la CRSC, l’EPR reste en place : c’est la rétine neurosensorielle qui se soulève au-dessus d’un espace noir.", en: "In CSC the RPE stays put: the neurosensory retina lifts above a black space." },
      { fr: "Un trou lamellaire est une perte partielle des couches internes, pas un dôme de l’EPR.", en: "A lamellar hole is partial loss of inner layers, not an RPE dome." },
      { fr: "Une membrane épirétinienne est à la surface interne, à l’opposé de l’EPR.", en: "An epiretinal membrane is on the inner surface, opposite the RPE." },
      { fr: "Juste : c’est la bande de l’EPR elle-même qui bombe, remplie d’un matériel modérément réflectif (drusen confluents), dans un contexte de DMLA.", en: "Correct: the RPE band itself bulges, filled with moderately reflective material (confluent drusen), in the setting of AMD." }
    ],
    reveal: { fr: "C’est la ligne de l’EPR elle-même qui bombe, remplie d’un matériel modérément réflectif : décollement drusénoïde de l’EPR.", en: "The RPE line itself bulges, filled with moderately reflective material: drusenoid PED." }
  },
  {
    id: "p-oct-6", inv: "oct", media: "m-oct-6b", level: 3,
    q: { fr: "OCT papille et RNFL (Cirrus), deux yeux. Surfaces du disque 4,18 et 3,69 mm² (très grandes), C/D vertical 0,92 et 0,96. Grande papille physiologique ou glaucome?", en: "Optic disc and RNFL OCT (Cirrus), both eyes. Disc areas 4.18 and 3.69 mm² (very large), vertical C/D 0.92 and 0.96. Physiologic large disc or glaucoma?" },
    options: [
      { fr: "Ininterprétable : signal trop faible", en: "Uninterpretable: signal too weak" },
      { fr: "Normal, car le quadrant nasal OD est vert", en: "Normal, because the OD nasal quadrant is green" },
      { fr: "Glaucome sévère : RNFL moyenne 51 et 40 µm, rouge aux deux yeux", en: "Severe glaucoma: average RNFL 51 and 40 µm, red in both eyes" },
      { fr: "Mégalopapille physiologique : un grand disque a un grand C/D", en: "Physiologic megalopapilla: a large disc has a large C/D" }
    ],
    answer: 2,
    why: [
      { fr: "Signal 6/10 et 7/10 : acceptable pour interpréter.", en: "Signal 6/10 and 7/10: acceptable to interpret." },
      { fr: "Un seul secteur vert ne compense pas une moyenne et des quadrants rouges.", en: "One green sector doesn’t outweigh a red average and red quadrants." },
      { fr: "Juste : un grand disque peut avoir un grand C/D sans maladie, mais la RNFL tranche. Ici elle est effondrée, proche du plancher (≈ 50 µm) : suivre surtout le champ visuel.", en: "Correct: a large disc can have a large C/D without disease, but the RNFL decides. Here it has collapsed, near the floor (~50 µm): follow mainly the visual field." },
      { fr: "Le piège est réel, mais une mégalopapille physiologique garde une RNFL normale.", en: "The trap is real, but a physiologic megalopapilla keeps a normal RNFL." }
    ],
    reveal: { fr: "RNFL moyenne rouge aux deux yeux (51 et 40 µm) malgré de grands disques : ce n’est pas la taille du disque, c’est une perte de fibres.", en: "Red average RNFL in both eyes (51 and 40 µm) despite large discs: it’s not the disc size, it’s fibre loss." }
  },
  {
    id: "p-oct-7", inv: "oct", media: "m-oct-7", level: 3,
    q: { fr: "Rapport OCT papille et RNFL des deux yeux. RNFL moyenne OG : 91 µm (vert). Conclusion?", en: "Optic disc and RNFL OCT report, both eyes. Average RNFL OS: 91 µm (green). Conclusion?" },
    options: [
      { fr: "Atteinte de l’OD : C/D vertical 0,66", en: "OD is affected: vertical C/D 0.66" },
      { fr: "Atteinte inférotemporale de l’OG malgré une moyenne normale", en: "Inferotemporal damage in OS despite a normal average" },
      { fr: "Ininterprétable : les disques n’ont pas la même taille", en: "Uninterpretable: the discs differ in size" },
      { fr: "OG normal, puisque la moyenne est verte", en: "OS is normal, since the average is green" }
    ],
    answer: 1,
    why: [
      { fr: "OD : RNFL verte, carte de déviation sans défaut net; un C/D jaune isolé n’est pas une atteinte.", en: "OD: green RNFL, no clear defect on the deviation map; an isolated yellow C/D isn’t damage." },
      { fr: "Juste : carte de déviation OG rouge-jaune en inférotemporal, bord neurorétinien OG (pointillés) qui plonge dans le rouge en inférieur, C/D vertical 0,84 et symétrie 59 % en rouge.", en: "Correct: OS deviation map red-yellow inferotemporally, OS rim curve (dashed) diving into red inferiorly, vertical C/D 0.84 and symmetry 59% in red." },
      { fr: "1,71 vs 1,87 mm² : différence modeste, qui n’empêche pas l’interprétation.", en: "1.71 vs 1.87 mm²: a modest difference that doesn’t prevent interpretation." },
      { fr: "« Green disease » : la moyenne dilue un défaut focal.", en: "“Green disease”: the average dilutes a focal defect." }
    ],
    reveal: { fr: "Défaut focal : bande rouge inférotemporale sur la carte de déviation OG et bord inférieur effondré, alors que la moyenne reste verte.", en: "Focal defect: a red inferotemporal band on the OS deviation map and a collapsed inferior rim, while the average stays green." }
  },
  {
    id: "p-oct-8", inv: "oct", media: "m-oct-8", level: 2,
    q: { fr: "OCT du segment antérieur (AS-OCT) après une greffe endothéliale (DMEK). Que montrent les angles?", en: "Anterior segment OCT (AS-OCT) after endothelial keratoplasty (DMEK). What do the angles show?" },
    options: [
      { fr: "Angle fermé : l’iris touche la cornée périphérique des deux côtés", en: "Closed angle: the iris touches the peripheral cornea on both sides" },
      { fr: "Angle largement ouvert", en: "Wide-open angle" },
      { fr: "Chambre antérieure profonde, iris plat", en: "Deep anterior chamber, flat iris" },
      { fr: "On ne peut pas juger l’angle en OCT; seule la gonioscopie le permet", en: "You can’t assess the angle on OCT; only gonioscopy can" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : aucun récessus noir entre iris et cornée en périphérie. Après DMEK, la bulle d’air peut causer un bloc pupillaire.", en: "Correct: no black recess between iris and cornea peripherally. After DMEK, the air bubble can cause pupillary block." },
      { fr: "Un angle ouvert montrerait un récessus noir et l’éperon scléral dégagé.", en: "An open angle would show a black recess and a clear scleral spur." },
      { fr: "L’iris est bombé vers l’avant et la chambre est étroite en périphérie.", en: "The iris bows forward and the chamber is shallow peripherally." },
      { fr: "L’AS-OCT montre bien le contact iridocornéen, sans contact. La gonioscopie reste la référence pour distinguer apposition et synéchies.", en: "AS-OCT shows iridocorneal contact well, without touching the eye. Gonioscopy remains the reference to tell apposition from synechiae." }
    ],
    reveal: { fr: "Pas de récessus noir en périphérie : l’iris est accolé à la cornée des deux côtés, angle fermé.", en: "No black recess peripherally: the iris is against the cornea on both sides — closed angle." }
  },
  {
    id: "p-oct-9", inv: "oct", media: "m-oct-9g", level: 1,
    q: { fr: "Schéma de coupe OCT maculaire. Homme de 40 ans, vision floue et déformée d’un œil, sous corticoïdes. Où est le liquide?", en: "Macular OCT schematic. A 40-year-old man on steroids with blurred, distorted vision in one eye. Where is the fluid?" },
    options: [
      { fr: "Dans la rétine : liquide intrarétinien", en: "Within the retina: intraretinal fluid" },
      { fr: "Sous l’EPR : décollement de l’EPR", en: "Under the RPE: pigment epithelial detachment" },
      { fr: "Dans le vitré", en: "In the vitreous" },
      { fr: "Sous la rétine, au-dessus de l’EPR qui reste plat : liquide sous-rétinien", en: "Under the retina, above a flat RPE: subretinal fluid" }
    ],
    answer: 3,
    why: [
      { fr: "Le liquide intrarétinien forme des kystes dans l’épaisseur de la rétine.", en: "Intraretinal fluid forms cysts within the retina." },
      { fr: "Dans un DEP, c’est l’EPR lui-même qui bombe; ici il reste à plat.", en: "In a PED the RPE itself bulges; here it stays flat." },
      { fr: "Le vitré est au-dessus de la rétine; le liquide est sous elle.", en: "The vitreous is above the retina; this fluid is beneath it." },
      { fr: "Juste : dôme noir entre la rétine neurosensorielle et l’EPR. Profil typique de la choriorétinopathie séreuse centrale (homme jeune, corticoïdes, stress).", en: "Correct: a black dome between the neurosensory retina and the RPE. Typical of central serous chorioretinopathy (young man, steroids, stress)." }
    ],
    reveal: { fr: "Dôme noir sous la rétine, avec l’EPR à plat dessous : liquide sous-rétinien.", en: "A black dome under the retina, with a flat RPE beneath: subretinal fluid." }
  },
  /* ═════════════════════════ GONIOSCOPIE ═════════════════════════ */
  {
    id: "p-gonio-1", inv: "gonio", media: "m-gonio-1g", level: 2,
    q: { fr: "Schéma de gonioscopie chez un diabétique avec rétinopathie proliférante. Quelle anomalie?", en: "Gonioscopy schematic in a diabetic with proliferative retinopathy. What abnormality?" },
    options: [
      { fr: "Synéchies antérieures périphériques", en: "Peripheral anterior synechiae" },
      { fr: "Récession de l’angle", en: "Angle recession" },
      { fr: "Néovaisseaux de l’angle : fins vaisseaux qui franchissent l’éperon scléral", en: "Angle neovascularization: fine vessels crossing the scleral spur" },
      { fr: "Vaisseaux normaux de la racine de l’iris", en: "Normal iris root vessels" }
    ],
    answer: 2,
    why: [
      { fr: "Les synéchies sont de l’iris collé, pas des vaisseaux fins.", en: "Synechiae are adherent iris, not fine vessels." },
      { fr: "La récession élargit la bande ciliaire après un trauma.", en: "Recession widens the ciliary band after trauma." },
      { fr: "Juste : un vaisseau qui croise l’éperon vers le trabéculum est anormal. Sans traitement (panphotocoagulation, anti-VEGF), membrane fibrovasculaire puis glaucome néovasculaire à angle fermé.", en: "Correct: a vessel crossing the spur onto the meshwork is abnormal. Untreated (panretinal photocoagulation, anti-VEGF), a fibrovascular membrane forms, then closed-angle neovascular glaucoma." },
      { fr: "Les vaisseaux normaux restent radiaires dans la racine de l’iris ou la bande ciliaire, sans croiser l’éperon.", en: "Normal vessels stay radial in the iris root or ciliary band and don’t cross the spur." }
    ],
    reveal: { fr: "Fins vaisseaux qui croisent l’éperon scléral vers le trabéculum : néovaisseaux de l’angle.", en: "Fine vessels crossing the scleral spur onto the meshwork: angle neovascularization." }
  },
  {
    id: "p-gonio-2", inv: "gonio", media: "m-gonio-2", level: 1,
    q: { fr: "Schéma d’un angle ouvert. De postérieur vers antérieur, quel ordre est juste?", en: "Schematic of an open angle. From posterior to anterior, which order is right?" },
    options: [
      { fr: "Iris → éperon scléral → bande ciliaire → ligne de Schwalbe → trabéculum", en: "Iris → scleral spur → ciliary body band → Schwalbe’s line → trabecular meshwork" },
      { fr: "Racine de l’iris → bande ciliaire → éperon scléral → trabéculum → ligne de Schwalbe", en: "Iris root → ciliary body band → scleral spur → trabecular meshwork → Schwalbe’s line" },
      { fr: "Iris → trabéculum → éperon scléral → bande ciliaire → ligne de Schwalbe", en: "Iris → trabecular meshwork → scleral spur → ciliary body band → Schwalbe’s line" },
      { fr: "Iris → ligne de Schwalbe → trabéculum → éperon scléral → bande ciliaire", en: "Iris → Schwalbe’s line → trabecular meshwork → scleral spur → ciliary body band" }
    ],
    answer: 1,
    why: [
      { fr: "L’éperon (blanc) est entre la bande ciliaire et le trabéculum, pas avant la bande ciliaire.", en: "The (white) spur lies between the ciliary band and the meshwork, not before the ciliary band." },
      { fr: "Juste : « I Can’t See Til Schwalbe » — Iris, Ciliary body band, Scleral spur, Trabecular meshwork, Schwalbe.", en: "Correct: “I Can’t See Til Schwalbe” — Iris, Ciliary body band, Scleral spur, Trabecular meshwork, Schwalbe." },
      { fr: "Le trabéculum est en avant de l’éperon.", en: "The meshwork is anterior to the spur." },
      { fr: "C’est l’ordre inversé (antérieur vers postérieur).", en: "That’s the reverse order (anterior to posterior)." }
    ],
    reveal: { fr: "« I Can’t See Til Schwalbe » : la ligne de Schwalbe marque la fin de la cornée (Descemet), donc la limite antérieure de l’angle.", en: "“I Can’t See Til Schwalbe”: Schwalbe’s line marks the end of Descemet’s membrane — the anterior limit of the angle." }
  },
  {
    id: "p-gonio-3", inv: "gonio", media: "m-gonio-3", level: 2,
    q: { fr: "Sans indentation, seule la ligne de Schwalbe est visible. À l’indentation, l’angle s’ouvre et l’éperon scléral apparaît, sans adhérence. Conclusion?", en: "Without indentation, only Schwalbe’s line is visible. With indentation, the angle opens and the scleral spur appears, with no adhesions. Conclusion?" },
    options: [
      { fr: "Fermeture appositionnelle (Shaffer 1), sans synéchies", en: "Appositional closure (Shaffer 1), no synechiae" },
      { fr: "Récession de l’angle", en: "Angle recession" },
      { fr: "Fermeture synéchiale", en: "Synechial closure" },
      { fr: "Angle ouvert normal (Shaffer 4)", en: "Normal open angle (Shaffer 4)" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : un angle étroit qui s’ouvre à l’indentation = contact appositionnel. La conduite (iridotomie au laser ou non) dépend du contexte (ISGEO).", en: "Correct: a narrow angle that opens with indentation = appositional contact. Management (laser iridotomy or not) depends on the context (ISGEO)." },
      { fr: "La récession donne au contraire un angle très profond avec une bande ciliaire large.", en: "Recession gives the opposite: a very deep angle with a wide ciliary band." },
      { fr: "Des synéchies resteraient collées pendant l’indentation.", en: "Synechiae would stay stuck during indentation." },
      { fr: "On grade l’angle sans indentation : seule la ligne de Schwalbe visible n’est pas un angle ouvert.", en: "The angle is graded without indentation: seeing only Schwalbe’s line isn’t an open angle." }
    ],
    reveal: { fr: "L’angle qui s’ouvre à l’indentation = apposition, pas synéchie : c’est l’indentation qui fait la différence.", en: "An angle that opens with indentation = apposition, not synechiae — indentation makes the call." }
  },
  {
    id: "p-gonio-4", inv: "gonio", media: "m-gonio-4", level: 2,
    q: { fr: "Gonioscopie OD d’une jeune femme qui consulte pour une pupille déformée (corectopie). Que montre la flèche noire?", en: "Gonioscopy, right eye, of a young woman seen for a distorted pupil (corectopia). What does the black arrow show?" },
    options: [
      { fr: "Un procès irien normal", en: "A normal iris process" },
      { fr: "Un néovaisseau de l’angle", en: "Angle neovascularization" },
      { fr: "Une ligne de Sampaolesi", en: "A Sampaolesi line" },
      { fr: "Une synéchie antérieure périphérique haute (PAS)", en: "A high peripheral anterior synechia (PAS)" }
    ],
    answer: 3,
    why: [
      { fr: "Les procès iriens sont fins, en dentelle, et ne masquent pas l’angle.", en: "Iris processes are fine, lacy and don’t hide the angle." },
      { fr: "Les néovaisseaux sont des vaisseaux rouges ramifiés qui franchissent l’éperon.", en: "New vessels are branching red vessels crossing the spur." },
      { fr: "La ligne de Sampaolesi est une ligne de pigment ondulée, pas une adhérence de tissu irien.", en: "A Sampaolesi line is a wavy pigment line, not an adhesion of iris tissue." },
      { fr: "Juste : l’iris monte et adhère haut sur la paroi de l’angle. Avec une corectopie chez une jeune femme : syndrome iridocornéen endothélial (ICE). Les flèches blanches encadrent des procès ciliaires, visibles parce que l’iris est tiré.", en: "Correct: the iris climbs and sticks high on the angle wall. With corectopia in a young woman: iridocorneal endothelial (ICE) syndrome. The white arrows bracket ciliary processes, visible because the iris is pulled forward." }
    ],
    reveal: { fr: "L’iris est collé haut sur la paroi de l’angle (flèche noire) : synéchie antérieure périphérique; avec une corectopie, penser au syndrome ICE.", en: "The iris is stuck high on the angle wall (black arrow): a peripheral anterior synechia; with corectopia, think ICE syndrome." }
  },
  {
    id: "p-gonio-5", inv: "gonio", media: "m-gonio-5", level: 3,
    q: { fr: "Gonioscopie. Que désigne la pointe de flèche (ligne pigmentée ondulée)?", en: "Gonioscopy. What does the arrowhead point to (a wavy pigmented line)?" },
    options: [
      { fr: "Une synéchie antérieure périphérique", en: "A peripheral anterior synechia" },
      { fr: "La bande ciliaire", en: "The ciliary body band" },
      { fr: "Une ligne de Sampaolesi : pigment en avant de la ligne de Schwalbe", en: "A Sampaolesi line: pigment anterior to Schwalbe’s line" },
      { fr: "Le trabéculum pigmenté normal", en: "The normal pigmented trabecular meshwork" }
    ],
    answer: 2,
    why: [
      { fr: "Une synéchie est du tissu irien collé, pas une fine ligne de pigment.", en: "A synechia is adherent iris tissue, not a thin pigment line." },
      { fr: "La bande ciliaire est la structure la plus postérieure, juste devant la racine de l’iris.", en: "The ciliary body band is the most posterior structure, just in front of the iris root." },
      { fr: "Juste : pigment déposé en avant de la ligne de Schwalbe; classique en pseudoexfoliation.", en: "Correct: pigment deposited anterior to Schwalbe’s line; classic in pseudoexfoliation." },
      { fr: "Le trabéculum est en arrière de la ligne de Schwalbe. Le confondre avec Sampaolesi fait surestimer l’ouverture de l’angle.", en: "The meshwork is posterior to Schwalbe’s line. Confusing the two overestimates how open the angle is." }
    ],
    reveal: { fr: "Ligne de pigment ondulée en avant de Schwalbe : ligne de Sampaolesi, pensez pseudoexfoliation.", en: "A wavy pigment line anterior to Schwalbe: Sampaolesi line — think pseudoexfoliation." }
  },
  {
    id: "p-gonio-6", inv: "gonio", media: "m-gonio-6", level: 3,
    q: { fr: "Traumatisme contusif (balle de racquetball). Que montre la gonioscopie?", en: "Blunt trauma (racquetball). What does gonioscopy show?" },
    options: [
      { fr: "Un angle normal, très pigmenté", en: "A normal, heavily pigmented angle" },
      { fr: "Une récession de l’angle (bande ciliaire élargie) avec une fente de cyclodialyse (bande blanche)", en: "Angle recession (widened ciliary band) with a cyclodialysis cleft (white band)" },
      { fr: "Des synéchies antérieures périphériques post-traumatiques", en: "Post-traumatic peripheral anterior synechiae" },
      { fr: "Des néovaisseaux de l’angle", en: "Angle neovascularization" }
    ],
    answer: 1,
    why: [
      { fr: "Un angle normal a une bande ciliaire étroite et régulière, sans bande blanche profonde.", en: "A normal angle has a narrow, regular ciliary band and no deep white band." },
      { fr: "Juste : récession = déchirure entre les fibres longitudinales et circulaires du muscle ciliaire, d’où une bande ciliaire large (risque de glaucome des années plus tard, suivi à vie). La bande blanche = sclère exposée par une cyclodialyse.", en: "Correct: recession = a tear between the longitudinal and circular ciliary muscle fibres, hence a wide ciliary band (risk of glaucoma years later; lifelong follow-up). The white band = sclera bared by a cyclodialysis cleft." },
      { fr: "Ici l’angle est plus profond, pas fermé par l’iris.", en: "Here the angle is deeper, not closed by iris." },
      { fr: "Aucun vaisseau ne franchit l’éperon.", en: "No vessels cross the spur." }
    ],
    reveal: { fr: "Bande ciliaire anormalement large (récession) et bande blanche profonde (cyclodialyse) : l’angle a été déchiré par le traumatisme.", en: "An abnormally wide ciliary band (recession) and a deep white band (cyclodialysis): the angle was torn by the trauma." }
  },
  {
    id: "p-gonio-7", inv: "gonio", media: "m-gonio-7", level: 3,
    q: { fr: "Hypotonie (PIO 1–2 mmHg) après une chirurgie de cataracte. Gonioscopie de l’angle nasal : que montrent les flèches blanches?", en: "Hypotony (IOP 1–2 mmHg) after cataract surgery. Gonioscopy of the nasal angle: what do the white arrows show?" },
    options: [
      { fr: "Une fente de cyclodialyse : sclère blanche entre l’éperon et le corps ciliaire décollé", en: "A cyclodialysis cleft: white sclera between the spur and the detached ciliary body" },
      { fr: "Un embryotoxon postérieur (ligne de Schwalbe proéminente)", en: "Posterior embryotoxon (prominent Schwalbe’s line)" },
      { fr: "Une récession de l’angle simple", en: "Simple angle recession" },
      { fr: "Un trabéculum très pigmenté", en: "Heavily pigmented meshwork" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : le corps ciliaire est désinséré de l’éperon. L’humeur aqueuse fuit vers l’espace suprachoroïdien : hypotonie.", en: "Correct: the ciliary body is disinserted from the spur. Aqueous drains into the suprachoroidal space: hypotony." },
      { fr: "L’embryotoxon postérieur est une ligne blanche en avant du trabéculum, pas une fente profonde sous l’éperon.", en: "Posterior embryotoxon is a white line anterior to the meshwork, not a deep cleft below the spur." },
      { fr: "Dans une récession, le corps ciliaire reste attaché à l’éperon; on craint plutôt un glaucome tardif qu’une hypotonie.", en: "In recession the ciliary body stays attached to the spur; late glaucoma, not hypotony, is the concern." },
      { fr: "Le pigment est brun; ici la bande est blanche (sclère).", en: "Pigment is brown; this band is white (sclera)." }
    ],
    reveal: { fr: "Bande blanche profonde sous l’éperon + PIO à 1–2 mmHg : fente de cyclodialyse jusqu’à preuve du contraire.", en: "A deep white band below the spur + IOP of 1–2 mmHg: cyclodialysis cleft until proven otherwise." }
  },
  /* ═════════════════════════ FOND D’ŒIL ═════════════════════════ */
  {
    id: "p-fondoeil-1", inv: "fondoeil", media: "m-fondoeil-1", level: 1,
    q: { fr: "À l’ophtalmoscope indirect (lentille 20 D), vous voyez une déchirure en haut à droite de votre image. Où est-elle réellement?", en: "With the indirect ophthalmoscope (20 D lens), you see a tear at the top right of your view. Where is it really?" },
    options: [
      { fr: "Exactement là où vous la voyez", en: "Exactly where you see it" },
      { fr: "En bas, du même côté (inversion verticale seulement)", en: "Bottom, same side (vertical flip only)" },
      { fr: "En haut, du côté opposé (inversion horizontale seulement)", en: "Top, opposite side (horizontal flip only)" },
      { fr: "En bas et à gauche : l’image est inversée haut-bas et gauche-droite", en: "Bottom left: the image is flipped up–down and left–right" }
    ],
    answer: 3,
    why: [
      { fr: "Vrai seulement à l’ophtalmoscope direct (image droite).", en: "True only with the direct ophthalmoscope (upright image)." },
      { fr: "L’inversion est double, pas seulement verticale.", en: "The flip is in both axes, not just vertical." },
      { fr: "L’inversion est double, pas seulement horizontale.", en: "The flip is in both axes, not just horizontal." },
      { fr: "Juste : l’image aérienne est tournée de 180°. Astuce : dessinez la carte du fond d’œil à l’envers.", en: "Correct: the aerial image is rotated 180°. Tip: draw your fundus chart upside down." }
    ],
    reveal: { fr: "L’image de l’indirect (et de la 90 D) est tournée de 180° : haut ↔ bas et droite ↔ gauche.", en: "The indirect (and 90 D) image is rotated 180°: top ↔ bottom and right ↔ left." }
  },
  {
    id: "p-fondoeil-2", inv: "fondoeil", media: "m-fondoeil-2", level: 1,
    q: { fr: "Examen de routine chez un enfant. Reflets brillants le long des arcades et autour de la macula. Interprétation?", en: "Routine exam in a child. Bright reflexes along the arcades and around the macula. Interpretation?" },
    options: [
      { fr: "Œdème maculaire", en: "Macular edema" },
      { fr: "Nodules cotonneux", en: "Cotton-wool spots" },
      { fr: "Normal : reflets de la limitante interne, fréquents chez le jeune", en: "Normal: internal limiting membrane reflexes, common in the young" },
      { fr: "Exsudats durs", en: "Hard exudates" }
    ],
    answer: 2,
    why: [
      { fr: "L’œdème fait perdre le reflet fovéolaire; ici il est bien visible.", en: "Edema erases the foveal reflex; here it’s clearly visible." },
      { fr: "Les nodules cotonneux sont blancs, duveteux, petits et ne bougent pas avec la lumière.", en: "Cotton-wool spots are white, fluffy, small and don’t move with the light." },
      { fr: "Juste : ces reflets suivent les vaisseaux, bougent avec la lumière et s’estompent avec l’âge. Papille rose et nette, reflet fovéolaire présent.", en: "Correct: these reflexes follow the vessels, shift with the light and fade with age. Pink sharp disc, foveal reflex present." },
      { fr: "Les exsudats sont jaunes, à bords nets, fixes, souvent en couronne.", en: "Exudates are yellow, sharp-edged, fixed, often in a ring." }
    ],
    reveal: { fr: "Reflets brillants le long des vaisseaux chez un enfant, avec un reflet fovéolaire net : fond d’œil normal.", en: "Bright reflexes along the vessels in a child, with a crisp foveal reflex: normal fundus." }
  },
  {
    id: "p-fondoeil-3", inv: "fondoeil", media: "m-fondoeil-3b", level: 1,
    q: { fr: "Œil gauche d’un jeune patient avec glaucome aphaque. Estimez le C/D vertical.", en: "Left eye of a young patient with aphakic glaucoma. Estimate the vertical C/D." },
    options: [
      { fr: "Impossible sans OCT", en: "Impossible without OCT" },
      { fr: "≈ 0,9", en: "~0.9" },
      { fr: "≈ 0,3", en: "~0.3" },
      { fr: "≈ 0,5", en: "~0.5" }
    ],
    answer: 1,
    why: [
      { fr: "Le C/D s’estime cliniquement; l’OCT complète l’examen sans le remplacer.", en: "C/D is a clinical estimate; OCT complements the exam, it doesn’t replace it." },
      { fr: "Juste : l’excavation pâle occupe presque tout le disque; le bord neurorétinien n’est plus qu’un liseré.", en: "Correct: the pale cup fills almost the whole disc; the neuroretinal rim is just a sliver." },
      { fr: "0,3 correspond à une papille normale typique, avec un bord rose épais.", en: "0.3 is a typical normal disc, with a thick pink rim." },
      { fr: "À 0,5, le bord occuperait encore la moitié du rayon.", en: "At 0.5, the rim would still fill half the radius." }
    ],
    reveal: { fr: "Le bord rose a presque disparu : l’excavation remplit ≈ 90 % du diamètre vertical.", en: "The pink rim is almost gone: the cup fills ~90% of the vertical diameter." }
  },
  {
    id: "p-fondoeil-4", inv: "fondoeil", media: "m-fondoeil-4b", level: 2,
    q: { fr: "Papille en vue rapprochée, glaucome primaire à angle ouvert. Les gros vaisseaux émergent du côté nasal (à droite de l’image). Où le bord neurorétinien manque-t-il?", en: "Close-up of the optic disc, primary open-angle glaucoma. The large vessels emerge on the nasal side (right of the image). Where is the neuroretinal rim missing?" },
    options: [
      { fr: "En inférotemporal : encoche", en: "Inferotemporally: a notch" },
      { fr: "En nasal", en: "Nasally" },
      { fr: "Nulle part : bord régulier", en: "Nowhere: the rim is even" },
      { fr: "En supérieur seulement", en: "Superiorly only" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : l’excavation profonde atteint le rebord du disque en inférotemporal. Encoche inférieure → défaut de champ supérieur attendu.", en: "Correct: the deep cup reaches the disc edge inferotemporally. Inferior notch → expect a superior field defect." },
      { fr: "Le bord nasal est conservé; les gros vaisseaux émergent de ce côté.", en: "The nasal rim is preserved; the large vessels emerge on that side." },
      { fr: "La règle ISNT est rompue : le bord inférieur devrait être le plus épais.", en: "The ISNT rule is broken: the inferior rim should be the thickest." },
      { fr: "L’atteinte décrite et visible est inférotemporale.", en: "The described and visible damage is inferotemporal." }
    ],
    reveal: { fr: "En bas et du côté temporal (en bas à gauche de l’image), l’excavation touche le rebord du disque : encoche inférotemporale.", en: "Inferiorly and temporally (lower left of the image), the cup reaches the disc edge: inferotemporal notch." }
  },
  {
    id: "p-fondoeil-5", inv: "fondoeil", media: "m-fondoeil-5", level: 2,
    q: { fr: "Homme de 61 ans qui consulte pour de nouvelles mouches volantes. Fond d’œil ci-contre. Quelle est la priorité?", en: "A 61-year-old man presents with new floaters. Fundus shown. What’s the priority?" },
    options: [
      { fr: "Glaucome avancé : débuter des gouttes hypotensives", en: "Advanced glaucoma: start pressure-lowering drops" },
      { fr: "Drusen papillaires : rassurer et revoir dans un an", en: "Disc drusen: reassure and review in a year" },
      { fr: "Décollement postérieur du vitré simple : rassurer", en: "Simple posterior vitreous detachment: reassure" },
      { fr: "Œdème papillaire avec hémorragies : mesurer la TA et faire une imagerie cérébrale en urgence", en: "Disc swelling with hemorrhages: check blood pressure and get urgent brain imaging" }
    ],
    answer: 3,
    why: [
      { fr: "Le glaucome creuse et pâlit la papille; il ne la fait pas gonfler.", en: "Glaucoma cups and pales the disc; it doesn’t swell it." },
      { fr: "Les drusen donnent une papille bosselée et réfringente, sans vaisseaux masqués ni hémorragies abondantes.", en: "Drusen give a lumpy, refractile disc, without obscured vessels or abundant hemorrhages." },
      { fr: "Les mouches volantes évoquent un DPV, mais une papille gonflée ne s’ignore jamais.", en: "Floaters suggest a PVD, but a swollen disc is never ignored." },
      { fr: "Juste : papille soulevée, bords effacés, vaisseaux masqués, hémorragies péripapillaires. Hypertension intracrânienne jusqu’à preuve du contraire, mais une urgence hypertensive peut aussi le faire : TA d’abord. Ici, plusieurs causes s’additionnaient (urgence hypertensive, apnée du sommeil, intoxication au CO, méningite aseptique).", en: "Correct: elevated disc, blurred margins, obscured vessels, peripapillary hemorrhages. Raised intracranial pressure until proven otherwise — but a hypertensive emergency can do this too: check BP first. Here several causes added up (hypertensive emergency, sleep apnea, CO poisoning, aseptic meningitis)." }
    ],
    reveal: { fr: "Papille soulevée aux bords effacés, vaisseaux masqués, hémorragies péripapillaires : œdème papillaire — TA et imagerie en urgence.", en: "Elevated disc with blurred margins, obscured vessels, peripapillary hemorrhages: disc swelling — BP and urgent imaging." }
  },
  {
    id: "p-fondoeil-6", inv: "fondoeil", media: "m-fondoeil-6", level: 2,
    q: { fr: "Baisse de vision brutale et indolore de l’œil droit. Quel signe est décisif?", en: "Sudden painless vision loss in the right eye. Which sign is decisive?" },
    options: [
      { fr: "Papille gonflée : œdème papillaire", en: "Swollen disc: disc edema" },
      { fr: "Rétine soulevée et plissée : décollement de rétine", en: "Elevated folded retina: retinal detachment" },
      { fr: "Tache rouge cerise sur une rétine blanchâtre : occlusion de l’artère centrale de la rétine", en: "Cherry-red spot on a whitened retina: central retinal artery occlusion" },
      { fr: "Hémorragies dans les 4 quadrants : occlusion de la veine centrale", en: "Hemorrhages in all 4 quadrants: central vein occlusion" }
    ],
    answer: 2,
    why: [
      { fr: "La papille n’est pas soulevée.", en: "The disc isn’t elevated." },
      { fr: "La rétine est pâle mais à plat, sans plis ni bord de soulèvement.", en: "The retina is pale but flat, with no folds or detachment edge." },
      { fr: "Juste : la rétine interne ischémique blanchit; la fovéa, mince, laisse voir la choroïde rouge. Nodules cotonneux associés. C’est un AVC de l’œil : évaluation urgente en centre d’AVC et, après 50 ans, éliminer l’artérite à cellules géantes (VS, CRP).", en: "Correct: the ischemic inner retina turns white; the thin fovea lets the red choroid show through. Cotton-wool spots too. This is an eye stroke: urgent stroke-centre workup and, over 50, rule out giant cell arteritis (ESR, CRP)." },
      { fr: "Il y a peu d’hémorragies; les veines ne sont pas tortueuses.", en: "There are few hemorrhages; the veins aren’t tortuous." }
    ],
    reveal: { fr: "Fovéa rouge sombre au centre d’une rétine pâle et œdémateuse : tache rouge cerise = OACR, une urgence (AVC oculaire).", en: "Dark red fovea in a pale, edematous retina: cherry-red spot = CRAO, an emergency (eye stroke)." }
  },
  {
    id: "p-fondoeil-7", inv: "fondoeil", media: "m-fondoeil-7", level: 2,
    q: { fr: "Fond d’œil. Quel diagnostic?", en: "Fundus. What’s the diagnosis?" },
    options: [
      { fr: "Rétinopathie diabétique proliférante", en: "Proliferative diabetic retinopathy" },
      { fr: "Occlusion de la veine centrale de la rétine", en: "Central retinal vein occlusion" },
      { fr: "Occlusion de l’artère centrale de la rétine", en: "Central retinal artery occlusion" },
      { fr: "Rétinopathie hypertensive", en: "Hypertensive retinopathy" }
    ],
    answer: 1,
    why: [
      { fr: "La rétinopathie diabétique donne surtout microanévrismes et hémorragies ponctuées, pas des hémorragies qui irradient de la papille dans tous les quadrants.", en: "Diabetic retinopathy mostly gives microaneurysms and dot hemorrhages, not hemorrhages radiating from the disc into every quadrant." },
      { fr: "Juste : hémorragies en flammèche dans les 4 quadrants, veines dilatées et tortueuses, nodules cotonneux, papille gonflée (« blood and thunder »). Bilan : TA, glycémie, facteurs de risque vasculaires.", en: "Correct: flame hemorrhages in all 4 quadrants, dilated tortuous veins, cotton-wool spots, swollen disc (“blood and thunder”). Workup: BP, glucose, vascular risk factors." },
      { fr: "L’OACR donne une rétine blanche avec peu d’hémorragies.", en: "CRAO gives a white retina with few hemorrhages." },
      { fr: "La rétinopathie hypertensive est bilatérale, avec rétrécissement artériolaire et croisements pathologiques; des veines tortueuses avec hémorragies diffuses d’un seul œil évoquent l’OVCR.", en: "Hypertensive retinopathy is bilateral, with arteriolar narrowing and AV nicking; tortuous veins with diffuse hemorrhages in one eye point to CRVO." }
    ],
    reveal: { fr: "Hémorragies dans les 4 quadrants qui irradient de la papille, veines tortueuses et dilatées : OVCR.", en: "Hemorrhages in all 4 quadrants radiating from the disc, dilated tortuous veins: CRVO." }
  },
  {
    id: "p-fondoeil-8", inv: "fondoeil", media: "m-fondoeil-8", level: 3,
    q: { fr: "Montage grand champ, œil gauche. Que délimitent les flèches blanches?", en: "Wide-field montage, left eye. What do the white arrows outline?" },
    options: [
      { fr: "Le bord d’un décollement de rétine rhegmatogène qui englobe la macula (macula-off)", en: "The edge of a rhegmatogenous retinal detachment involving the macula (macula-off)" },
      { fr: "Un œdème maculaire", en: "Macular edema" },
      { fr: "Un décollement choroïdien", en: "A choroidal detachment" },
      { fr: "Un rétinoschisis", en: "A retinoschisis" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : la rétine temporale est soulevée, plus terne, et la fovéa est dedans. Macula-on = urgence maximale pour protéger la macula; macula-off = chirurgie rapide, le pronostic dépend de la durée.", en: "Correct: the temporal retina is elevated and duller, with the fovea inside it. Macula-on = top urgency to save the macula; macula-off = prompt surgery, prognosis depends on duration." },
      { fr: "L’œdème maculaire est central, sans bord de soulèvement qui part de la périphérie.", en: "Macular edema is central, with no detachment edge coming in from the periphery." },
      { fr: "Le décollement choroïdien forme des dômes brun-orangé lisses, souvent périphériques, sans ce bord net qui traverse le pôle postérieur.", en: "A choroidal detachment forms smooth orange-brown domes, usually peripheral, without this sharp edge crossing the posterior pole." },
      { fr: "Le rétinoschisis est lisse, convexe, immobile, typiquement inférotemporal en périphérie, et respecte en général la macula.", en: "Retinoschisis is smooth, convex, immobile, typically inferotemporal in the periphery, and usually spares the macula." }
    ],
    reveal: { fr: "Les flèches suivent la limite d’une rétine soulevée et terne qui englobe la fovéa : décollement de rétine macula-off.", en: "The arrows trace the border of an elevated, dull retina that includes the fovea: macula-off retinal detachment." }
  },
  /* ═════════════════════════ CHAMP VISUEL ═════════════════════════ */
  {
    id: "p-cv-1", inv: "cv", media: "m-cv-1", level: 1,
    q: { fr: "Champ visuel 24-2 de l’OD (moitié droite du rapport). Le test est-il fiable et normal?", en: "24-2 visual field of the right eye (right half of the printout). Is the test reliable and normal?" },
    options: [
      { fr: "Anormal : la tache noire en temporal est un scotome", en: "Abnormal: the black spot temporally is a scotoma" },
      { fr: "Anormal : PSD à 1,72 dB", en: "Abnormal: PSD 1.72 dB" },
      { fr: "Ininterprétable sans 10-2", en: "Uninterpretable without a 10-2" },
      { fr: "Fiable et normal", en: "Reliable and normal" }
    ],
    answer: 3,
    why: [
      { fr: "Tache noire à ≈ 15° en temporal, juste sous l’horizontale : c’est la tache aveugle physiologique.", en: "A black spot ~15° temporal, just below horizontal: that’s the physiologic blind spot." },
      { fr: "Un PSD de 1,72 dB sans valeur p n’est pas significatif.", en: "A PSD of 1.72 dB with no p value isn’t significant." },
      { fr: "Le 24-2 suffit ici; le 10-2 sert pour une atteinte centrale.", en: "The 24-2 is enough here; the 10-2 is for central disease." },
      { fr: "Juste : pertes de fixation 0/15, faux positifs 4 %, faux négatifs 2 %; GHT dans les limites normales, MD −0,18 dB, VFI 99 %.", en: "Correct: fixation losses 0/15, false positives 4%, false negatives 2%; GHT within normal limits, MD −0.18 dB, VFI 99%." }
    ],
    reveal: { fr: "Fiabilité excellente, GHT normal, MD ≈ 0 et seule la tache aveugle en temporal : champ normal.", en: "Excellent reliability, normal GHT, MD ≈ 0 and only the temporal blind spot: normal field." }
  },
  {
    id: "p-cv-2", inv: "cv", media: "m-cv-2", level: 2,
    q: { fr: "OG du même rapport : MD −16,93 dB (p < 0,5 %), PSD 11,32 dB, VFI 61 %. Quel stade selon Hodapp-Parrish-Anderson?", en: "Left eye on the same printout: MD −16.93 dB (p < 0.5%), PSD 11.32 dB, VFI 61%. What’s the Hodapp-Parrish-Anderson stage?" },
    options: [
      { fr: "Modéré", en: "Moderate" },
      { fr: "Impossible : test non fiable", en: "Impossible: unreliable test" },
      { fr: "Avancé : MD < −12 dB", en: "Advanced: MD < −12 dB" },
      { fr: "Débutant", en: "Early" }
    ],
    answer: 2,
    why: [
      { fr: "Modéré = MD entre −6 et −12 dB.", en: "Moderate = MD between −6 and −12 dB." },
      { fr: "Pertes de fixation 1/17, faux positifs 2 %, faux négatifs 0 % : test fiable.", en: "Fixation losses 1/17, false positives 2%, false negatives 0%: a reliable test." },
      { fr: "Juste : MD au-delà de −12 dB. Hodapp tient aussi compte du nombre de points atteints et de l’atteinte centrale; ici tout concorde, avec défauts arciformes supérieur et inférieur.", en: "Correct: MD beyond −12 dB. Hodapp also counts depressed points and central involvement; here everything agrees, with superior and inferior arcuate defects." },
      { fr: "Débutant = MD meilleur que −6 dB.", en: "Early = MD better than −6 dB." }
    ],
    reveal: { fr: "MD de −16,93 dB, au-delà de −12 dB, sur un test fiable : glaucome à un stade avancé.", en: "MD of −16.93 dB, beyond −12 dB, on a reliable test: advanced glaucoma." }
  },
  {
    id: "p-cv-3", inv: "cv", media: "m-cv-3g", level: 2,
    q: { fr: "Champ 24-2 de l’OD (schéma de déviation). Quel méridien le défaut respecte-t-il, et quelle partie de la papille est atteinte?", en: "24-2 field, right eye (deviation schematic). Which meridian does the defect respect, and which part of the disc is damaged?" },
    options: [
      { fr: "Aucun; baisse diffuse de cataracte", en: "None; diffuse cataract depression" },
      { fr: "Méridien horizontal; bord inférieur de la papille", en: "Horizontal meridian; inferior disc rim" },
      { fr: "Méridien vertical; chiasma", en: "Vertical meridian; chiasm" },
      { fr: "Méridien horizontal; bord supérieur de la papille", en: "Horizontal meridian; superior disc rim" }
    ],
    answer: 1,
    why: [
      { fr: "La cataracte donne une baisse diffuse, pas un arc localisé.", en: "Cataract gives a diffuse loss, not a localized arc." },
      { fr: "Juste : scotome arciforme supérieur qui s’arrête au méridien horizontal; les fibres arciformes ne croisent pas le raphé. Champ supérieur = rétine et papille inférieures.", en: "Correct: a superior arcuate scotoma stopping at the horizontal meridian; arcuate fibres don’t cross the raphe. Superior field = inferior retina and disc." },
      { fr: "Le défaut s’arrête sur l’horizontale, pas sur la verticale.", en: "The defect stops at the horizontal, not the vertical." },
      { fr: "C’est inversé : l’optique de l’œil inverse l’image; un défaut supérieur vient d’en bas.", en: "It’s reversed: the eye’s optics invert the image; a superior defect comes from below." }
    ],
    reveal: { fr: "Arc de points déprimés dans l’hémichamp supérieur, arrêté par le méridien horizontal : glaucome, fibres inférieures atteintes.", en: "An arc of depressed points in the superior hemifield, stopped by the horizontal meridian: glaucoma, inferior fibres damaged." }
  },
  {
    id: "p-cv-4", inv: "cv", media: "m-cv-4g", level: 1,
    q: { fr: "Champ 24-2 (schéma) : carte « parfaite ». Faux positifs 27 %, pertes de fixation 0/13, MD +3,4 dB, GHT « sensibilité anormalement élevée ». Interprétation?", en: "24-2 field (schematic): a “perfect” map. False positives 27%, fixation losses 0/13, MD +3.4 dB, GHT “abnormally high sensitivity”. Interpretation?" },
    options: [
      { fr: "Non fiable : trop de faux positifs, refaire le test", en: "Unreliable: too many false positives, repeat the test" },
      { fr: "Champ normal, excellent", en: "Normal, excellent field" },
      { fr: "Fiable : les pertes de fixation sont à 0", en: "Reliable: fixation losses are 0" },
      { fr: "Glaucome débutant", en: "Early glaucoma" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : faux positifs > 15 % = le patient répond sans stimulus. Le champ paraît trop beau (MD positif) et peut masquer un vrai défaut. Réexpliquer et refaire.", en: "Correct: false positives > 15% = the patient presses without a stimulus. The field looks too good (positive MD) and can hide a real defect. Re-instruct and repeat." },
      { fr: "Un champ « trop beau » avec MD positif est un signal d’alarme, pas un bon résultat.", en: "A field that looks “too good” with a positive MD is a red flag, not a good result." },
      { fr: "Une seule mesure de fiabilité correcte ne compense pas 27 % de faux positifs.", en: "One good reliability index doesn’t make up for 27% false positives." },
      { fr: "Aucun défaut localisé n’est visible; et le test n’est de toute façon pas interprétable.", en: "No localized defect is visible; and the test can’t be interpreted anyway." }
    ],
    reveal: { fr: "Faux positifs à 27 % et GHT « sensibilité anormalement élevée » : test non fiable, à refaire.", en: "False positives at 27% and GHT “abnormally high sensitivity”: unreliable test, repeat it." }
  },
  {
    id: "p-cv-5", inv: "cv", media: "m-cv-5", level: 2,
    q: { fr: "Champs visuels de Goldmann des deux yeux. Quel défaut, et où est la lésion?", en: "Goldmann visual fields of both eyes. What’s the defect, and where’s the lesion?" },
    options: [
      { fr: "Hémianopsie bitemporale : chiasma", en: "Bitemporal hemianopia: chiasm" },
      { fr: "Hémianopsie homonyme droite : lésion gauche", en: "Right homonymous hemianopia: left lesion" },
      { fr: "Défauts arciformes glaucomateux", en: "Glaucomatous arcuate defects" },
      { fr: "Hémianopsie homonyme gauche : lésion rétrochiasmatique droite", en: "Left homonymous hemianopia: right retrochiasmal lesion" }
    ],
    answer: 3,
    why: [
      { fr: "Bitemporale = chaque œil perd son côté temporal (gauche pour l’OG, droit pour l’OD).", en: "Bitemporal = each eye loses its temporal side (left for OS, right for OD)." },
      { fr: "C’est l’hémichamp droit qui est conservé, pas perdu.", en: "The right hemifield is preserved, not lost." },
      { fr: "Le glaucome respecte l’horizontale, pas la verticale.", en: "Glaucoma respects the horizontal, not the vertical." },
      { fr: "Juste : les deux yeux perdent l’hémichamp gauche, coupé net sur la verticale. Les voies visuelles droites portent le champ gauche. Ici, AVC occipital.", en: "Correct: both eyes lose the left hemifield, cut sharply at the vertical. The right visual pathways carry the left field. Here, an occipital stroke." }
    ],
    reveal: { fr: "Hémichamp gauche perdu aux deux yeux, coupé sur le méridien vertical : hémianopsie homonyme gauche, lésion rétrochiasmatique droite (ici occipitale).", en: "Left hemifield lost in both eyes, cut at the vertical meridian: left homonymous hemianopia, right retrochiasmal lesion (here occipital)." }
  },
  {
    id: "p-cv-6", inv: "cv", media: "m-cv-6", level: 1,
    q: { fr: "Schéma : chaque œil perd son hémichamp temporal. Où est la lésion?", en: "Schematic: each eye loses its temporal hemifield. Where’s the lesion?" },
    options: [
      { fr: "Lobe occipital", en: "Occipital lobe" },
      { fr: "Glaucome bilatéral", en: "Bilateral glaucoma" },
      { fr: "Chiasma optique (ex. adénome hypophysaire)", en: "Optic chiasm (e.g., pituitary adenoma)" },
      { fr: "Nerf optique droit", en: "Right optic nerve" }
    ],
    answer: 2,
    why: [
      { fr: "Une lésion occipitale donne une hémianopsie homonyme (même côté aux deux yeux).", en: "An occipital lesion gives a homonymous hemianopia (same side in both eyes)." },
      { fr: "Le glaucome respecte l’horizontale, pas la verticale.", en: "Glaucoma respects the horizontal, not the vertical." },
      { fr: "Juste : au chiasma croisent les fibres de la rétine nasale, qui voient le champ temporal.", en: "Correct: fibres from the nasal retina, which see the temporal field, cross at the chiasm." },
      { fr: "Un nerf optique atteint donne un défaut d’un seul œil.", en: "An optic nerve lesion gives a defect in one eye only." }
    ],
    reveal: { fr: "Deux hémichamps temporaux perdus, limités par le méridien vertical : fibres croisées touchées au chiasma.", en: "Both temporal hemifields lost, bounded by the vertical meridian: crossing fibres hit at the chiasm." }
  },
  {
    id: "p-cv-7", inv: "cv", media: "m-cv-7", level: 2,
    q: { fr: "Schéma : déviation totale abaissée partout, déviation corrigée presque normale, MD −5 dB, PSD non significatif. Cause la plus probable?", en: "Schematic: total deviation depressed everywhere, pattern deviation nearly normal, MD −5 dB, non-significant PSD. Most likely cause?" },
    options: [
      { fr: "Glaucome débutant", en: "Early glaucoma" },
      { fr: "Opacité des milieux (cataracte) ou petite pupille", en: "Media opacity (cataract) or small pupil" },
      { fr: "Hémianopsie homonyme", en: "Homonymous hemianopia" },
      { fr: "Test non fiable par excès de faux positifs", en: "Unreliable test from too many false positives" }
    ],
    answer: 1,
    why: [
      { fr: "Le glaucome laisse des grappes localisées sur la déviation corrigée, avec un PSD élevé.", en: "Glaucoma leaves localized clusters on pattern deviation, with a raised PSD." },
      { fr: "Juste : la déviation corrigée retire la baisse générale. S’il ne reste rien, la baisse est diffuse : cataracte, pupille étroite, mauvaise correction.", en: "Correct: pattern deviation removes the general depression. If nothing remains, the loss is diffuse: cataract, small pupil, wrong correction." },
      { fr: "Une hémianopsie respecte la verticale et reste visible sur la déviation corrigée.", en: "A hemianopia respects the vertical and stays visible on pattern deviation." },
      { fr: "Les faux positifs élevés donnent des sensibilités trop hautes, pas une baisse diffuse.", en: "High false positives give sensitivities that are too high, not a diffuse loss." }
    ],
    reveal: { fr: "La déviation corrigée efface tout : la baisse est diffuse, pas localisée — pensez milieux avant glaucome.", en: "Pattern deviation wipes it all out: the loss is diffuse, not localized — think media before glaucoma." }
  },
  {
    id: "p-cv-8", inv: "cv", media: "m-cv-8g", level: 2,
    q: { fr: "Champ 24-2 de l’OD (schéma). Perte de vision indolore au réveil chez un patient vasculaire de 65 ans. Quel défaut et quelle cause?", en: "24-2 field, right eye (schematic). Painless vision loss on waking in a 65-year-old vascular patient. Which defect, and what cause?" },
    options: [
      { fr: "Défaut altitudinal inférieur : neuropathie optique ischémique antérieure", en: "Inferior altitudinal defect: anterior ischemic optic neuropathy" },
      { fr: "Hémianopsie homonyme : AVC occipital", en: "Homonymous hemianopia: occipital stroke" },
      { fr: "Hémianopsie bitemporale : adénome hypophysaire", en: "Bitemporal hemianopia: pituitary adenoma" },
      { fr: "Scotome central : névrite optique", en: "Central scotoma: optic neuritis" }
    ],
    answer: 0,
    why: [
      { fr: "Juste : tout l’hémichamp inférieur est atteint et la limite suit le méridien horizontal : atteinte du nerf optique (NOIA, surtout non artéritique) ou occlusion artérielle de branche. Éliminer l’artérite à cellules géantes après 50 ans.", en: "Correct: the whole inferior hemifield is lost and the border follows the horizontal meridian: optic nerve damage (AION, mostly non-arteritic) or a branch artery occlusion. Rule out giant cell arteritis over 50." },
      { fr: "Une hémianopsie homonyme respecte le méridien vertical et touche les deux yeux.", en: "A homonymous hemianopia respects the vertical meridian and affects both eyes." },
      { fr: "La bitemporale respecte aussi le méridien vertical, aux deux yeux.", en: "A bitemporal defect also respects the vertical meridian, in both eyes." },
      { fr: "Un scotome central touche la fixation, pas tout un hémichamp.", en: "A central scotoma involves fixation, not a whole hemifield." }
    ],
    reveal: { fr: "Tout l’hémichamp inférieur perdu, bordé par le méridien horizontal : défaut altitudinal du nerf optique.", en: "The whole inferior hemifield lost, bordered by the horizontal meridian: an optic nerve altitudinal defect." }
  }
];

/* Demandes au rôle « ressources visuelles » (data/inv-media.js) : une entrée par media.
   photo = id du catalogue (droits : EyeRounds, voir docs/RIGHTS.md) ou null = schéma original étiqueté « schéma ».
   Positions en % (x = largeur, y = hauteur) : approximatives, à vérifier sur l’image. */
G.OPH.invMediaRequests = {
  /* B-scan */
  "m-bscan-1": { photo: "OPH-210", want: "Photo de face, cataracte mature blanche OD (à gauche de l’image, ≈ x 21 %, y 56 %). Hotspot décisif sur la pupille blanche. OG (à droite) sert de comparaison." },
  "m-bscan-2": { photo: null, want: "Schéma déjà fourni par le rôle visuels (svg) : coupe LMAC, ombre du nerf optique sous la macula. OPH-209 retiré (sans licence CC)." },
  "m-bscan-4": { photo: "OPH-289", want: "Fond d’œil (haut) + B-scan (bas) d’un décollement choroïdien hémorragique non appositionnel. Hotspot décisif : dôme lisse et convexe sur le B-scan bas-gauche (≈ x 17 %, y 75 %) et bas-droite (≈ x 68 %, y 75 %). Hotspot secondaire : soulèvement brun-orangé lisse sur la photo couleur (≈ x 19 %, y 30 %)." },
  "m-bscan-5": { photo: "OPH-194", want: "Mosaïque de 10 B-scans (décollements choroïdiens hémorragiques « kissing »). Hotspot décisif là où deux dômes se touchent au centre, p. ex. rangée 3 gauche (≈ x 23 %, y 48 %) ou rangée 2 gauche (≈ x 22 %, y 28 %). Choisir le panneau où le contact est le plus net." },
  "m-bscan-6": { photo: null, want: "SCHÉMA B-scan (étiqueté « schéma ») : globe en coupe, vitré noir, membrane épaisse très brillante en V fixée à la papille (pointe du V sur l’ombre du nerf) et vers l’ora des deux côtés. Petit encart A-scan : pic de 100 % sur la membrane. Hotspot décisif sur l’insertion papillaire. Option : 2e panneau comparatif (DPV fin, pic bas) affiché seulement après la révélation." },
  "m-bscan-7": { photo: "OPH-197", want: "B-scan de nanophtalmie. Hotspot décisif sur le compas jaune qui mesure la paroi postérieure à 2,38 mm (≈ x 40 %, y 46 %); hotspot secondaire sur la petite cavité vitréenne (≈ x 25 %, y 45 %) pour montrer l’œil court." },
  /* A-scan — aucun tracé authentique au catalogue : schémas */
  "m-ascan-1": { photo: null, want: "SCHÉMA A-scan d’œil phaque (axe horizontal = profondeur) : pics numérotés 1 cornée (double), 2 capsule antérieure, 3 capsule postérieure, ligne plate (vitré), 4 rétine (haut, vertical), 5 sclère, 6 échos décroissants de la graisse orbitaire. Étiquettes masquées avant la réponse; hotspot décisif sur le pic 4 et sur la ligne plate du vitré." },
  "m-ascan-2": { photo: "OPH-210", want: "Même photo que m-bscan-1 (cataracte mature OD). Hotspot décisif sur la pupille blanche (≈ x 21 %, y 56 %), légende : « lumière bloquée → biométrie optique impossible »." },
  "m-ascan-3": { photo: null, want: "SCHÉMA : deux tracés A-scan superposés du même œil; le tracé « contact » a une chambre antérieure (distance pic cornéen–capsule antérieure) visiblement plus courte que le tracé « immersion ». Petit dessin de sonde qui enfonce la cornée. Hotspot décisif sur la chambre antérieure raccourcie." },
  "m-ascan-4": { photo: null, want: "SCHÉMA : tracé 1 (en haut) = pic rétinien haut et vertical, puis pic scléral distinct, puis échos orbitaires décroissants; tracé 2 (en bas) = pic rétinien bas, en escalier, fusionné avec la sclère. Hotspot décisif sur le pic rétinien de chaque tracé." },
  "m-ascan-5": { photo: null, want: "SCHÉMA/TABLEAU de biométrie : OD 23,42 mm, OG 24,31 mm, réfraction semblable aux deux yeux. Hotspot décisif sur l’écart de 0,89 mm (> 0,3 mm)." },
  "m-ascan-6": { photo: null, want: "SCHÉMA : œil en coupe avec la cavité vitréenne remplie d’huile de silicone (teinte distincte) et encart « vitesse 1550 m/s réglée vs ≈ 980 m/s dans l’huile ». Formule distance = vitesse × temps. Hotspot décisif sur la cavité vitréenne." },
  "m-ascan-7": { photo: null, want: "SCHÉMA A-scan standardisé à travers une masse choroïdienne en dôme : pic initial élevé à la surface de la masse, puis échos internes faibles à moyens, réguliers, qui décroissent en profondeur; pic scléral. Petit B-scan en encart (dôme). Hotspot décisif sur les échos internes." },
  /* OCT */
  "m-oct-1": { photo: null, want: "SCHÉMA de coupe OCT maculaire normale avec dépression fovéolaire : RNFL, plexiformes, nucléaires, limitante externe, zone ellipsoïde, EPR-Bruch, choroïde. Étiquettes masquées avant la réponse (utilisable aussi par l’outil oct-layers). Hotspot décisif sur la bande EPR-Bruch; secondaire sur la zone ellipsoïde." },
  "m-oct-2": { photo: "OPH-011", want: "IR + OCT vertical de traction vitréomaculaire. Hotspot décisif sur le point d’attache de la hyaloïde sur la fovéa soulevée (≈ x 70 %, y 46 %). Secondaires : arcs de hyaloïde dans le vitré (≈ x 62 %, y 20 % et ≈ x 73 %, y 15 %), kystes intrarétiniens sous la fovéa (≈ x 69 %, y 62 %)." },
  "m-oct-3": { photo: "OPH-268", want: "Carte ETDRS + coupe OCT d’une membrane épirétinienne. Hotspot décisif sur la coupe (en bas à droite) : surface plissée et creux fovéolaire effacé (≈ x 72 %, y 87 %). Secondaires : valeur 531 µm du sous-champ central (≈ x 65 %, y 34 %), carte rouge-blanc centrée (≈ x 21 %, y 50 %)." },
  "m-oct-4": { photo: "OPH-262", want: "IR + OCT oblique d’œdème maculaire diabétique. Hotspot décisif sur les espaces hyporéflectifs intrarétiniens de la zone épaissie (≈ x 59 %, y 31 %). Secondaires : points hyperréflectifs avec ombre (exsudats) (≈ x 48 %, y 25 % et ≈ x 65 %, y 25 %), gros vaisseaux choroïdiens sombres sous l’EPR (≈ x 70 %, y 50 %) pour le distracteur." },
  "m-oct-5": { photo: "OPH-266", want: "Deux coupes OCT (A horizontale, B oblique) d’un décollement drusénoïde de l’EPR. Hotspot décisif sur le dôme de la bande EPR du panneau A (≈ x 73 %, y 19 %); secondaire sur les drusen jaunâtres de l’image IR (≈ x 20 %, y 25 %)." },
  "m-oct-7": { photo: "OPH-134", want: "Rapport Cirrus ONH/RNFL OU. Hotspot décisif sur la bande rouge-jaune inférotemporale de la carte de déviation OG (≈ x 91 %, y 83 %). Secondaires : RNFL moyenne OG 91 µm verte (≈ x 66 %, y 19 %), symétrie 59 % (≈ x 60 %, y 24 %), C/D vertical OG 0,84 (≈ x 66 %, y 44 %), courbe du bord OG en pointillés qui plonge en INF (≈ x 60 %, y 86 %)." },
  "m-oct-8": { photo: "OPH-147", want: "AS-OCT : fermeture de l’angle après DMEK. Hotspots décisifs aux deux angles où l’iris touche la cornée périphérique (≈ x 14 %, y 85 % et ≈ x 87 %, y 83 %); secondaire sur l’iris bombé vers l’avant (≈ x 30 %, y 65 %)." },
  /* Gonioscopie */
  "m-gonio-2": { photo: null, want: "SCHÉMA d’angle ouvert vu en gonioscopie (et en coupe) : racine de l’iris, bande ciliaire, éperon scléral (blanc), trabéculum (pigmenté en postérieur), ligne de Schwalbe. Étiquettes masquées avant la réponse (réutilisable par gonio-grader). Hotspots sur chaque structure, l’éperon en décisif." },
  "m-gonio-3": { photo: null, want: "SCHÉMA en deux temps : (1) sans indentation, iris convexe, seule la ligne de Schwalbe visible; (2) avec indentation, l’iris recule et l’éperon scléral apparaît, sans adhérence. Hotspot décisif sur l’éperon dévoilé au panneau 2." },
  "m-gonio-4": { photo: "OPH-180", want: "Gonioscopie OD, syndrome ICE. Hotspot décisif à la pointe de la flèche noire = synéchie antérieure périphérique haute (≈ x 38 %, y 61 %). Secondaires : les deux flèches blanches qui encadrent les procès ciliaires visibles (≈ x 37 %, y 32 % et ≈ x 57 %, y 70 %)." },
  "m-gonio-5": { photo: "OPH-156", want: "Gonioscopie, ligne de Sampaolesi. Hotspot décisif à la pointe de flèche blanche (≈ x 59 %, y 33 %); secondaire sur la bande trabéculaire pigmentée, juste en dessous (≈ x 45 %, y 42 %)." },
  "m-gonio-6": { photo: "OPH-172", want: "Gonioscopie après trauma de racquetball : récession de l’angle + fente de cyclodialyse (source : page EyeRounds angle recession/cyclodialysis). Hotspot décisif sur la large bande ciliaire brune (≈ x 55 %, y 58 %) et sur la bande blanche de cyclodialyse (≈ x 58 %, y 76 %). Positions à vérifier visuellement." },
  "m-gonio-7": { photo: "OPH-174", want: "Deux vues gonioscopiques de l’angle nasal, hypotonie post-cataracte. Hotspot décisif sur les flèches blanches du panneau droit qui montrent la fente de cyclodialyse (≈ x 82 %, y 59 %, 69 %, 80 %)." },
  /* Fond d’œil */
  "m-fondoeil-1": { photo: null, want: "SCHÉMA : à gauche, fond d’œil réel avec une déchirure en fer à cheval en bas à gauche; à droite, image vue à l’ophtalmoscope indirect, tournée de 180° (déchirure en haut à droite). Flèches de correspondance. Hotspot décisif sur la vraie position." },
  "m-fondoeil-2": { photo: "OPH-003", want: "Fond d’œil normal d’enfant (OD). Hotspot décisif sur les reflets de la limitante interne le long de l’arcade temporale supérieure (≈ x 55 %, y 17 %) et autour de la macula (≈ x 45 %, y 40 %); secondaires : fovéa avec reflet (≈ x 49 %, y 51 %), papille rose nette (≈ x 79 %, y 50 %)." },
  "m-fondoeil-5": { photo: "OPH-219", want: "Deux photos (fig. 1 du cas EyeRounds) : œdème papillaire marqué avec hémorragies péripapillaires. Hotspots décisifs sur la papille gonflée aux bords effacés de chaque photo (≈ x 24 %, y 42 % et ≈ x 74 %, y 42 %); secondaire sur les hémorragies en flammèche (≈ x 30 %, y 30 %)." },
  "m-fondoeil-6": { photo: "OPH-250", want: "OACR OD : rétine blanchâtre, tache rouge cerise, nodules cotonneux. Hotspot décisif sur la fovéa rouge (≈ x 52 %, y 54 %); secondaires sur un nodule cotonneux de l’arcade supérieure (≈ x 68 %, y 27 %) et la rétine pâle péripapillaire (≈ x 75 %, y 45 %)." },
  "m-fondoeil-7": { photo: "OPH-252", want: "OVCR : hémorragies dans les 4 quadrants, veines tortueuses, nodules cotonneux, papille gonflée. Hotspot décisif sur la papille entourée d’hémorragies (≈ x 28 %, y 42 %); secondaires : veine dilatée et tortueuse (≈ x 45 %, y 15 %), hémorragies en périphérie temporale (≈ x 75 %, y 45 %), nodule cotonneux (≈ x 28 %, y 25 %)." },
  "m-fondoeil-8": { photo: "OPH-287", want: "Montage grand champ OG, décollement de rétine rhegmatogène macula-off. Hotspots sur les flèches blanches qui suivent le bord du décollement (≈ x 63 %, y 15 %; x 50 %, y 33 %; x 47 %, y 69 %); hotspot décisif sur la fovéa incluse dans la zone décollée (≈ x 55 %, y 53 %)." },
  /* Champ visuel */
  "m-cv-1": { photo: "OPH-302", want: "Rapport HFA 24-2 : OS à gauche, OD à droite (se fier aux en-têtes imprimés; la légende du catalogue inverse gauche/droite). Pour cet item, cibler la moitié OD. Hotspot décisif sur le bloc de fiabilité OD (≈ x 57 %, y 13 %) et GHT/MD OD (≈ x 94 %, y 66 %); secondaire sur la tache aveugle de l’échelle de gris OD (≈ x 91 %, y 36 %)." },
  "m-cv-2": { photo: "OPH-302", want: "Même rapport, moitié OS (gauche). Hotspot décisif sur MD −16,93 dB (≈ x 44 %, y 67 %); secondaires : fiabilité OS (≈ x 9 %, y 13 %), déviation corrigée OS avec défauts arciformes (≈ x 25 %, y 83 %)." },
  "m-cv-5": { photo: "OPH-283", want: "Goldmann des deux yeux, hémianopsie homonyme gauche (AVC occipital). Hotspot décisif sur la limite verticale de chaque champ (≈ x 26 %, y 50 % et ≈ x 76 %, y 50 %)." },
  "m-cv-6": { photo: null, want: "SCHÉMA : deux cercles de champ visuel (OG à gauche, OD à droite, vus par le patient) avec hémichamps temporaux noirs, limite sur le méridien vertical; petit schéma des voies optiques avec le chiasma marqué. Hotspot décisif sur le chiasma." },
  "m-cv-7": { photo: null, want: "SCHÉMA de cartes de probabilité HFA : déviation totale avec symboles de baisse partout, déviation corrigée presque vide; MD −5 dB, PSD non significatif. Hotspot décisif sur la déviation corrigée « propre »." },
  /* Remplacements cycle 2 (images sans licence CC retirées) et nouveaux items */
  "m-bscan-3g": { photo: null, want: "Fourni par la pédagogie dans G.OPH.invMedia : générateur bscan:vh:long:85 (hotspots par défaut)." },
  "m-oct-6b": { photo: "OPH-308", want: "Fourni dans G.OPH.invMedia (hotspots placés). Rapport Cirrus ONH/RNFL OU, mégalopapille et glaucome sévère (CC)." },
  "m-oct-9g": { photo: null, want: "Fourni dans G.OPH.invMedia : générateur oct:srf." },
  "m-gonio-1g": { photo: null, want: "Fourni dans G.OPH.invMedia : générateur gonio:nv." },
  "m-fondoeil-3b": { photo: "OPH-307", want: "Fourni dans G.OPH.invMedia (hotspot placé). Papille OG C/D 0,9, glaucome aphaque (CC)." },
  "m-fondoeil-4b": { photo: "OPH-136", want: "Fourni dans G.OPH.invMedia (hotspots placés). Papille en vue rapprochée, encoche inférotemporale (CC)." },
  "m-cv-3g": { photo: null, want: "Fourni dans G.OPH.invMedia : générateur vf:arcuate." },
  "m-cv-4g": { photo: null, want: "Fourni dans G.OPH.invMedia : générateur vf:fp." },
  "m-cv-8g": { photo: null, want: "Fourni dans G.OPH.invMedia : générateur vf:altitudinal." }
};

/* Médias propres à la pédagogie (nouveaux ids seulement) : fusion sans écraser data/inv-media.js, quel que soit l’ordre de chargement. */
G.OPH.invMedia = Object.assign(G.OPH.invMedia || {}, {
 "m-bscan-3g": {
  "kind": "gen",
  "gen": "bscan:vh:long:85",
  "alt": {
   "fr": "Schéma d’échographie B, coupe longitudinale à gain élevé : échos ponctués dans le vitré, rétine à plat.",
   "en": "B-scan schematic, longitudinal scan at high gain: dot echoes in the vitreous, flat retina."
  }
 },
 "m-oct-9g": {
  "kind": "gen",
  "gen": "oct:srf",
  "alt": {
   "fr": "Schéma OCT : liquide sous-rétinien entre la rétine et l’EPR, qui reste plat.",
   "en": "OCT schematic: subretinal fluid between the retina and a flat RPE."
  }
 },
 "m-gonio-1g": {
  "kind": "gen",
  "gen": "gonio:nv",
  "alt": {
   "fr": "Schéma de gonioscopie : fins vaisseaux qui croisent l’éperon scléral vers le trabéculum.",
   "en": "Gonioscopy schematic: fine vessels crossing the scleral spur onto the meshwork."
  }
 },
 "m-cv-3g": {
  "kind": "gen",
  "gen": "vf:arcuate",
  "alt": {
   "fr": "Schéma de champ 24-2 (OD) : scotome arciforme supérieur qui respecte le méridien horizontal.",
   "en": "24-2 field schematic (OD): superior arcuate scotoma respecting the horizontal meridian."
  }
 },
 "m-cv-4g": {
  "kind": "gen",
  "gen": "vf:fp",
  "alt": {
   "fr": "Schéma de champ 24-2 (OD) sans aucun point déprimé : champ « trop beau » d’un test à faux positifs élevés.",
   "en": "24-2 field schematic (OD) with no depressed points: a “too good” field from a test with high false positives."
  },
  "hotspots": [
   {
    "x": 50,
    "y": 50,
    "r": 30,
    "decisive": true,
    "label": {
     "fr": "Aucun point déprimé : champ trop « parfait »",
     "en": "No depressed points: a field that’s too “perfect”"
    }
   }
  ]
 },
 "m-cv-8g": {
  "kind": "gen",
  "gen": "vf:altitudinal",
  "alt": {
   "fr": "Schéma de champ 24-2 (OD) : défaut altitudinal inférieur limité par le méridien horizontal.",
   "en": "24-2 field schematic (OD): inferior altitudinal defect bounded by the horizontal meridian."
  }
 },
 "m-oct-6b": {
  "kind": "photo",
  "photo": "OPH-308",
  "alt": {
   "fr": "Rapport Cirrus ONH/RNFL des deux yeux : mégalopapille et glaucome sévère, RNFL moyenne 51 et 40 µm.",
   "en": "Cirrus ONH/RNFL report, both eyes: megalopapilla and severe glaucoma, average RNFL 51 and 40 µm."
  },
  "hotspots": [
   {
    "x": 56,
    "y": 13,
    "r": 3,
    "decisive": true,
    "label": {
     "fr": "RNFL moyenne OD 51 µm (rouge)",
     "en": "Average RNFL OD 51 µm (red)"
    }
   },
   {
    "x": 66,
    "y": 13,
    "r": 3,
    "decisive": true,
    "label": {
     "fr": "RNFL moyenne OS 40 µm (rouge)",
     "en": "Average RNFL OS 40 µm (red)"
    }
   },
   {
    "x": 61,
    "y": 21,
    "r": 3,
    "label": {
     "fr": "Surface du disque 4,18 et 3,69 mm² : très grands disques",
     "en": "Disc area 4.18 and 3.69 mm²: very large discs"
    }
   },
   {
    "x": 61,
    "y": 26,
    "r": 3,
    "label": {
     "fr": "C/D vertical 0,92 et 0,96",
     "en": "Vertical C/D 0.92 and 0.96"
    }
   },
   {
    "x": 54,
    "y": 4,
    "r": 3,
    "label": {
     "fr": "Qualité du signal 6/10 et 7/10",
     "en": "Signal strength 6/10 and 7/10"
    }
   }
  ]
 },
 "m-fondoeil-3b": {
  "kind": "photo",
  "photo": "OPH-307",
  "alt": {
   "fr": "Rétinophotographie de l’œil gauche : papille pâle et excavée, C/D ≈ 0,9 (glaucome aphaque).",
   "en": "Left eye fundus photo: pale cupped disc, C/D ~0.9 (aphakic glaucoma)."
  },
  "hotspots": [
   {
    "x": 26,
    "y": 40,
    "r": 8,
    "decisive": true,
    "label": {
     "fr": "Excavation qui remplit presque tout le disque",
     "en": "Cup filling almost the whole disc"
    }
   }
  ]
 },
 "m-fondoeil-4b": {
  "kind": "photo",
  "photo": "OPH-136",
  "alt": {
   "fr": "Papille en vue rapprochée : excavation profonde (lame criblée visible) et encoche inférotemporale.",
   "en": "Close-up of the disc: deep cup (lamina cribrosa visible) and inferotemporal notch."
  },
  "hotspots": [
   {
    "x": 27,
    "y": 70,
    "r": 10,
    "decisive": true,
    "label": {
     "fr": "Encoche : l’excavation atteint le rebord en inférotemporal",
     "en": "Notch: the cup reaches the edge inferotemporally"
    }
   },
   {
    "x": 63,
    "y": 45,
    "r": 8,
    "label": {
     "fr": "Vaisseaux qui émergent côté nasal",
     "en": "Vessels emerging on the nasal side"
    }
   },
   {
    "x": 45,
    "y": 45,
    "r": 10,
    "label": {
     "fr": "Lame criblée visible au fond de l’excavation",
     "en": "Lamina cribrosa visible at the cup floor"
    }
   }
  ]
 }
});
