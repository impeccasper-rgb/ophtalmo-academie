# Schéma des données — Classe interactive d'ophtalmologie (R1)

Application à une page (HTML/JS). Le contenu vit dans des fichiers `data/*.js` qui
s'enregistrent sur un objet global. **Chaque fichier doit commencer exactement par :**

```js
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};
```

puis ajouter son contenu (voir chaque section). Pas d'import, pas de `export`, pas de
dépendance. Uniquement des littéraux d'objets/tableaux/chaînes/nombres/booléens.
Chaînes entre guillemets doubles ou simples — attention aux apostrophes françaises :
utiliser l'apostrophe typographique `’` dans le texte (ex. « l’angle ») pour éviter de casser
les chaînes, ou des guillemets doubles.

Valider après écriture : `node tools/validate.js data/<fichier>.js` (doit afficher `OK`).

## Règles de rédaction (toutes les données)

- **Français québécois médical**, niveau R1. Terme anglais entre parenthèses à la première
  occurrence d’un concept clé : « angle iridocornéen (*iridocorneal angle*) » → écrire
  simplement `angle iridocornéen (iridocorneal angle)` (pas de markdown).
- Concis : puces courtes (≤ 25 mots), phrases simples. Une fiche se lit en 2–4 minutes
  (≈ 450–800 mots de texte visible).
- Mise en forme autorisée dans les chaînes : `**gras**` seulement (rendu par l’app). Rien d’autre.
- Pas d’emoji. Pas de lettres d’option (« A) ») ni de renvoi « l’option B » dans les quiz :
  l’ordre des choix est mélangé à l’affichage.
- **Exactitude** : n’utiliser que des faits standards et ceux de `docs/FACTS.md`. Ne jamais
  inventer de statistique, d’étude, de dose ou de disponibilité canadienne. En cas de doute,
  formuler qualitativement. Les doses doivent être des doses adultes usuelles.
- Unités : mmHg, µm, D (dioptries), mg, mL, %. Acuité en notation métrique **6/6 (20/20)**.
- Étiquettes d’urgence : `urgent` (menace la vision/le globe à court terme), `frequent`
  (vu chaque semaine en clinique), `highyield` (question classique d’examen/patron),
  `piege` (piège fréquent).

## Catalogue des figures (schémas pédagogiques rendus par l’app)

Un objet `figure` choisit un schéma SVG dessiné par l’app (jamais une photo). Types et
paramètres **exacts** :

| type | paramètres |
|---|---|
| `eye` | `highlight`: tableau d’ids d’anatomie (voir liste ci-dessous) |
| `cornea` | `highlight`: tableau parmi `film, epithelium, bowman, stroma, dua, descemet, endothelium` ; `edema`: `none`\|`stromal`\|`epithelial`\|`both` ; `guttae`: bool ; `scar`: bool |
| `gonio` | `grade`: 0–4 (Shaffer) ; `pas`: bool ; `pigment`: `light`\|`heavy`\|`sampaolesi` ; `nv`: bool ; `recession`: bool |
| `disc` | `cd`: 0.2–0.95 (C/D vertical) ; `notch`: `none`\|`inf`\|`sup` ; `heme`: bool ; `ppa`: bool ; `pallor`: bool |
| `vf` | `pattern` (ci-dessous) ; `eye`: `OD`\|`OS` ; `map`: `pd`\|`td`\|`gray` ; `md` (optionnel, nombre en dB affiché en légende au lieu du MD illustratif calculé) |
| `fluo` | `pattern`: `normal`\|`spk-inferior`\|`spk-interpalpebral`\|`spk-superior`\|`dendrite`\|`geographic`\|`pseudodendrite`\|`abrasion`\|`fb-tracking`\|`ulcer`\|`seidel`\|`negative` |
| `topo` | `pattern`: `normal`\|`wtr`\|`atr`\|`kc-inferior`\|`kc-central`\|`pmd` (carte de courbure axiale) |
| `oct` | `pattern`: `normal`\|`inf-thin`\|`sup-thin`\|`bi-arcuate`\|`diffuse`\|`red-disease`\|`green-disease` (RNFL péripapillaire : courbe TSNIT + secteurs) |
| `vanherick` | `grade`: 0–4 |
| `slit` | `pattern`: `normal`\|`hypopyon`\|`pxf`\|`krukenberg`\|`nvi`\|`tid`\|`aacc`\|`bleb`\|`kp` |

Patterns `vf` — **nommés selon la localisation dans le CHAMP VISUEL** (pas sur la papille) :
`normal`, `sup-arcuate`, `inf-arcuate`, `sup-nasal-step`, `inf-nasal-step`,
`sup-paracentral`, `inf-paracentral`, `double-arcuate`, `generalized` (dépression diffuse,
ex. cataracte : TD atteint, PD normal), `temporal-wedge`, `bitemporal`, `homonymous-right`,
`homonymous-left`, `altitudinal-inf`, `altitudinal-sup`, `central`, `blind-spot`.
Rappel : un défaut arciforme **supérieur** du champ correspond à une atteinte **inférieure**
de la papille/RNFL.

`oct` : `inf-thin` = amincissement RNFL inférieur (donne un défaut de champ supérieur).
`red-disease` = faux positif (rouge sans maladie), `green-disease` = faux négatif.

Ids d’anatomie pour `eye.highlight` : `cornee, limbe, sclere, conjonctive, chambre-anterieure,
angle, trabeculum, schlemm, iris, pupille, corps-ciliaire, proces-ciliaires,
chambre-posterieure, zonules, cristallin, vitre, retine, macula, fovea, papille, nerf-optique,
choroide, ora-serrata, acr, vcr, arteres-ciliaires-post, arteres-ciliaires-ant,
veines-vortiqueuses, nerfs-ciliaires-longs, nerfs-ciliaires-courts, lame-criblee,
muscles-droits`.

## 1. Fiches de pathologie — `data/fiches-cornee.js`, `data/fiches-glaucome.js`

```js
G.OPH.fiches = (G.OPH.fiches || []).concat([ { ...fiche }, ... ]);
G.OPH.bonus = G.OPH.bonus || {};
G.OPH.bonus.B = [ { title, en, clue, action }, ... ];   // fiches-cornee.js : 6–8 « à reconnaître »
// fiches-glaucome.js : G.OPH.bonus.C = [ ... ] (6–8)
```

Objet fiche :

```js
{
  id: "c-bacterienne",            // id imposé (voir liste des fiches)
  module: "B",                    // "B" cornée, "C" glaucome
  order: 1,                       // 1..10
  title: "Kératite bactérienne",
  en: "Bacterial keratitis",
  tags: ["urgent", "highyield"],  // sous-ensemble de urgent|frequent|highyield|piege
  oneLiner: "Phrase de triage ≤ 22 mots.",
  definition: "Définition vulgarisée en exactement 2 phrases.",
  anatomy: { text: "2–3 phrases : anatomie/physiologie normales impliquées.",
             figure: { type: "cornea", highlight: ["epithelium", "stroma"] } },   // figure optionnelle
  causal: {
    title: "Titre court du schéma causal",
    steps: [ { label: "≤ 6 mots", detail: "1–2 phrases", kind: "cause" } ],     // 4–7 étapes, ordre causal
                                    // kind ∈ cause | mecanisme | lesion | signe | complication
    levers: [ { at: 2, label: "Traitement", detail: "où/comment il coupe la chaîne" } ]  // 2–4 ; at = index 0-based d’une étape
  },
  risk: ["…"],                     // 3–7 facteurs de risque
  presentation: ["…"],             // 3–6 : symptômes + signes typiques
  exam: {
    signs: [ { sign: "…", why: "pourquoi c’est discriminant" } ],      // 3–6
    tests: [ { test: "…", when: "quand le demander", read: "interprétation" } ]  // 2–5
  },
  ddx: [ { dx: "…", clue: "élément qui distingue" } ],   // 3–6
  redFlags: ["…"],                 // 2–5
  cat: {
    algo: [ { q: "Question clinique ?", yes: "si oui →", no: "si non →" } ],   // 3–6 nœuds, dans l’ordre de décision
    phases: [ { phase: "observation", items: ["…"] } ],
        // phase ∈ observation | medical | laser | chirurgie | suivi | escalade (garder l’ordre ; omettre celles sans objet)
    local: "Particularité québécoise/canadienne ou variation locale (1–2 phrases)."
  },
  treatments: [ { name: "…", how: "mécanisme", why: "indication", pros: "avantages",
                  cons: "limites", cx: "complications" } ],    // 3–6
  pearls: [ { q: "Question qu’un patron pourrait poser ?", a: "Réponse 1–3 phrases." } ],  // exactement 3
  mnemonic: { title: "…", text: "…" },      // optionnel
  compare: {                                // optionnel mais recommandé (normal vs pathologique)
    title: "Normal vs …",
    normal: { figure: { type: "…" }, caption: "…" },
    patho:  { figure: { type: "…" }, caption: "…", reveal: ["anomalie à repérer 1", "anomalie 2"] }
  },
  sources: ["AAO PPP … (année)", "Essai X (Auteur, revue année)"]   // 2–5, uniquement des sources réelles de FACTS.md ou classiques
}
```

Objet bonus : `{ title: "Kératite neurotrophique", en: "Neurotrophic keratopathy", clue: "indice clinique clé (1 phrase)", action: "conduite immédiate (1 phrase)" }`.

### Liste des fiches (ids imposés)

Cornée (module B) :
1. `c-secheresse` — Sécheresse oculaire et dysfonction meibomienne
2. `c-bacterienne` — Kératite bactérienne
3. `c-atypiques` — Kératites amibienne et fongique
4. `c-herpes` — Kératite herpétique (HSV) et zona ophtalmique
5. `c-keratocone` — Kératocône
6. `c-fuchs` — Dystrophie endothéliale de Fuchs et œdème cornéen
7. `c-erosion` — Érosion récidivante, abrasion et dystrophie de la membrane basale
8. `c-pterygion` — Ptérygion et lésions de la surface (pinguécula, OSSN)
9. `c-greffe` — Greffe de cornée : rejet et complications (PK, DSAEK, DMEK)
10. `c-brulure` — Brûlure chimique

Glaucome (module C) :
1. `g-gpao` — Glaucome primaire à angle ouvert
2. `g-hto` — Hypertension oculaire et suspect de glaucome
3. `g-gpn` — Glaucome à pression normale
4. `g-fermeture` — Fermeture primaire de l’angle (PACS, PAC, PACG)
5. `g-crise` — Crise aiguë de fermeture de l’angle
6. `g-pxf` — Glaucome pseudo-exfoliatif
7. `g-pigmentaire` — Dispersion pigmentaire et glaucome pigmentaire
8. `g-neovasculaire` — Glaucome néovasculaire
9. `g-secondaires` — Glaucomes cortisonique et uvéitique
10. `g-postop` — Patient opéré : trabéculectomie, tubes, MIGS

## 2. QCM — `data/quiz-a.js`, `data/quiz-b.js`, `data/quiz-c.js`

```js
G.OPH.quiz = (G.OPH.quiz || []).concat([ { ...question }, ... ]);
```

```js
{
  id: "B-001",                 // préfixe module + numéro sur 3 chiffres, unique
  module: "B",
  topic: "c-bacterienne",      // B/C : id de fiche ; A : a-anatomie | a-physiologie | a-examen | a-imagerie
  type: "diagnostic",          // anatomie | physiopathologie | diagnostic | image | cat
  level: 1,                    // 1 = base R1, 2 = intermédiaire, 3 = avancé
  trap: false,                 // true = piège de patron (environ 15 % des questions)
  stem: "Vignette clinique courte + question.",
  figure: null,                // OBLIGATOIRE si type === "image" (objet du catalogue de figures)
  options: ["…", "…", "…", "…"],   // 4 choix (5 permis), plausibles, de longueur comparable
  answer: 0,                   // index 0-based de la bonne réponse
  explain: "Pourquoi c’est la bonne réponse (2–3 phrases).",
  why: ["…", "…", "…", "…"]    // une explication par choix, MÊME ORDRE que options ; pour la bonne réponse : courte confirmation
}
```

Répartir `answer` sur les positions 0–3 de façon équilibrée (l’app mélange aussi).
Difficulté progressive : ~40 % niveau 1, ~40 % niveau 2, ~20 % niveau 3.

## 3. Cas cliniques évolutifs — `data/cases.js`

```js
G.OPH.cases = (G.OPH.cases || []).concat([ { ...cas }, ... ]);
```

```js
{
  id: "cas-b1",
  module: "B",                    // A, B ou C
  title: "Titre court",
  tags: ["urgent"],
  intro: "Vignette initiale (3–5 phrases) : âge, contexte, symptômes, AV.",
  steps: [
    { kind: "exams", prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)", pick: 3,
      options: [ { label: "Examen", result: "Ce que tu trouves", value: 2, note: "pourquoi" } ] },
        // value : 2 = essentiel, 1 = utile, 0 = peu utile, -1 = nuisible ou retarde la prise en charge ; 5–8 options
    { kind: "choice", prompt: "Question (diagnostic, traitement, suite) ?",
      options: [ { label: "…", correct: true, note: "rétroaction" }, { label: "…", correct: false, note: "…" } ] },
        // exactement une option correct: true ; 3–5 options
    { kind: "info", text: "Évolution : …", figure: { type: "…" } }     // figure optionnelle
  ],
  debrief: ["Point clé 1", "Point clé 2", "Point clé 3"]   // 3–5
}
```

Chaque cas : 1 étape `exams`, au moins 3 étapes `choice`, au moins 1 étape `info` (rebondissement).

## 4. Module A — `data/module-a.js`

```js
G.OPH.A = {
  anatomy: { "cornee": { t: "Cornée", en: "Cornea", d: "1–3 phrases", c: "Perle clinique (1 phrase)" }, … },
     // une entrée par id d’anatomie (liste ci-dessus) — toutes obligatoires
  cornea:  { film: {t,en,d,c}, epithelium: {…}, bowman: {…}, stroma: {…}, dua: {…}, descemet: {…}, endothelium: {…} },
     // ajouter dans d : épaisseur approximative
  angle:   { "iris-racine": {…}, "bande-ciliaire": {…}, "eperon": {…}, "trab-pig": {…},
             "trab-nonpig": {…}, "schwalbe": {…}, "schlemm": {…} },
  disc:    { rim: {…}, cup: {…}, vessels: {…}, ppa: {…}, "lame-criblee": {…}, rnfl: {…} },
  annexes: { "glande-lacrymale": {…}, meibomius: {…}, caliciformes: {…}, "points-lacrymaux": {…},
             canalicules: {…}, "sac-lacrymal": {…}, "canal-lacrymonasal": {…} },
  physio: [ { id, title, en, intro, points: ["…"], numbers: [ { label, value } ], pearl } ],
     // ids dans cet ordre : aqueuse, pio, film-lacrymal, transparence, refraction, pupille
  exam:   [ { id, title, en, why, how: ["…"], normal: ["…"], patho: ["…"], pitfalls: ["…"], pearl } ],
     // ids dans cet ordre : av, pupilles, lampe, fluoresceine, tonometrie, gonioscopie,
     // pachymetrie, papille, oct, topographie, champs-visuels, speculaire
};
```

## 5. Liens d’images authentiques — `data/images.js`

```js
G.OPH.images = {
  "c-bacterienne": [ { title: "Titre de la page", site: "EyeRounds (University of Iowa)",
                       url: "https://…", look: "Ce qu’il faut repérer (1 phrase)", license: "si connue" } ],
  …
};
```

Clés : chaque id de fiche + `a-lampe, a-fluoresceine, a-gonioscopie, a-papille, a-oct,
a-topographie, a-champs-visuels, a-speculaire`. 1–3 liens par clé, **URL vérifiées**.

## 6. Photos authentiques (banque de l’apprenant) — `data/photos.js`

Index : `imgsrc/catalog.json` (191 images EyeRounds / University of Iowa, CC BY-NC-ND 3.0 ;
champs `id` OPH-xxx, `title`, `caption` = légende source anglaise, `page_url`, `kind`).
Planches-contacts : `imgsrc/sheets/sheet-01.jpg` … `sheet-12.jpg` (16 vignettes chacune, dans
l’ordre des ids) ; image individuelle : `imgsrc/web/OPH-xxx.jpg`.

Type de figure supplémentaire utilisable partout : `{ type: "photo", id: "OPH-070" }`.

Règles de licence (ND = pas d’œuvre dérivée) : l’app affiche l’image **intacte** (pas de
cercles dessinés dessus, pas de recadrage, crédits et filigranes visibles). Les anomalies sont
« révélées » par une liste de texte À CÔTÉ de l’image (`reveal`), avec la position décrite en mots
(« en bas à gauche », « à 4 h », « au centre de la cornée »).

```js
G.OPH.photos = {
  "c-keratocone": [
    { id: "OPH-039", caption: "Légende française précise (≤ 15 mots)",
      look: "Consigne d’observation (1 phrase) sans donner la réponse",
      reveal: ["Trouvaille 1 et sa position", "Trouvaille 2"] }
  ],
  …
};
G.OPH.photoPairs = [   // seulement si les deux examens sont RÉELLEMENT comparables (même modalité/éclairage)
  { key: "c-bacterienne", normal: "OPH-001", patho: "OPH-072", note: "Pourquoi la comparaison est valable" }
];
```
Clés permises : ids de fiche, `b-bases`, `c-bases`, `bonus-B`, `bonus-C`, `a-anatomie`,
`a-physiologie`, et `a-<id d’examen>` (`a-av, a-pupilles, a-lampe, a-fluoresceine, a-tonometrie,
a-gonioscopie, a-pachymetrie, a-papille, a-oct, a-topographie, a-champs-visuels, a-speculaire`).

## 7. Capsules « Fondations » et glossaire — `data/capsules.js`

```js
G.OPH.capsules = (G.OPH.capsules || []).concat([ {
  id: "b-bases",                 // ou "c-bases"
  module: "B",                   // ou "C"
  title: "Les bases de la clinique de cornée",
  en: "Cornea clinic essentials",
  intro: "2–3 phrases",
  sections: [ { title: "…", text: "paragraphe ≤ 110 mots", bullets: ["…"],
                figure: { …catalogue… },   // optionnel
                photo: "OPH-001" } ],      // optionnel
                                           // 5–8 sections, du plus simple au plus complexe
  toolbox: [ { name: "…", en: "…", what: "ce que c’est concrètement", how: "comment ça agit",
               when: "quand on l’utilise", cx: "risques/limites" } ],     // 10–18 outils
  vocab: [ { term: "…", def: "définition en 1 phrase" } ]                   // 15–30 termes
} ]);
G.OPH.glossary = Object.assign(G.OPH.glossary || {}, {
  "SLT": "Trabéculoplastie sélective au laser : …",   // terme EXACT tel qu’il apparaît dans les textes
  …
});
```
