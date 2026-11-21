# Extension de la classe (≥ +30 %) — cahier des charges commun

La classe existe déjà (20 fiches, 130 QCM, 9 cas, module A en 4 sections, 189 photos OPH-001…191).
On ajoute un 2e catalogue de 200 photos (OPH-192…391) et on étend le contenu :
+7 fiches, +1 section du module A (A5), ~+60 QCM, +3 cas.

À lire d’abord : `docs/SCHEMA.md` (formats exacts, catalogue des figures schématiques, règles
d’écriture), `docs/FACTS.md` (faits vérifiés : ne jamais les contredire, ne rien inventer),
puis survoler UNE fiche existante (ex. `data/fiches-glaucome.js`, g-pxf) pour le ton et la longueur.

## Règles pédagogiques (exigence explicite de l’apprenant, non négociable)
- Ne jamais brûler d’étape : définir chaque maladie, signe, examen ou traitement en mots simples
  à sa première mention (« ce que c’est → pourquoi c’est important → quoi faire »).
- Niveau « complet » (bon externe → R1), pas de mots-clés isolés.
- Français du Québec, terme anglais entre parenthèses à la première occurrence.
- Recommandations canadiennes/québécoises d’abord, puis AAO ; aucune statistique, essai, dose ou
  disponibilité canadienne inventée (« disponibilité canadienne à vérifier » si doute).
- Seul balisage permis : **gras**. Pas d’emoji ni de HTML. Utiliser l’apostrophe typographique ’
  ou des chaînes entre guillemets doubles pour éviter les erreurs de syntaxe.

## Le 2e catalogue d’images
- Index : `imgsrc2/catalog2.json` (champs : id, title, caption = légende source, dossier = cas source,
  src, license, page_url, module A/B/C, fw/fh). Images : `imgsrc2/web/OPH-xxx.jpg`.
  Planches-contact étiquetées (20 images/planche) : `imgsrc2/sheets/sheet-000.jpg` … `sheet-180.jpg`
  (sheet-000 = OPH-192…211, sheet-020 = OPH-212…231, etc.). Regarder la planche d’abord, puis
  ouvrir en grand seulement les images que tu utilises et dont tu décris un détail.
- Ancien catalogue : `imgsrc/catalog.json`, images `dist/img/OPH-xxx.jpg` (OPH-001…191).
- Les photos sont affichées INTACTES (licence CC BY-NC-ND ou usage pédagogique EyeRounds) :
  on ne dessine rien dessus ; les trouvailles sont du texte à côté (`reveal`).
- Décrire seulement ce qui est réellement visible ou écrit dans la légende/le dossier source.
  Pas de latéralité, d’âge ou de sexe inventés pour le patient de la photo. En cas de doute de
  position, rester général ou citer la légende (« selon la source »).

## Photos (galeries) — format
Chaque fichier qui ajoute des photos les fusionne SANS écraser :
```js
G.OPH.photos = G.OPH.photos || {};
(function (add) { Object.keys(add).forEach(function (k) { G.OPH.photos[k] = (G.OPH.photos[k] || []).concat(add[k]); }); })({
  "c-dystrophies": [ { id: "OPH-344", caption: "≤ 15 mots", look: "Ce qu’il faut regarder (1 phrase)", reveal: ["2 à 4 trouvailles visibles"] } ]
});
```
1 à 6 photos par clé. Clés permises : id de fiche, `a5-<id>` (entrées A5), clés existantes
(`a-papille`, `a-tonometrie`, `a-pachymetrie`, `a-gonioscopie`, `a-champs-visuels`, `bonus-B`, `bonus-C`…).

## Nouvelles fiches (format = SCHEMA.md section 1, inchangé)
Fichiers séparés ; même en-tête que les fichiers existants :
```js
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};
G.OPH.fiches = (G.OPH.fiches || []).concat([ … ]);
```
Ids : cornée `c-surface`, `c-peripherie`, `c-depots`, `c-dystrophies` ; glaucome `g-papille`,
`g-cristallin`, `g-dev`. Champ `order` libre (l’app impose son ordre). `compare` peut utiliser
des photos (`{ type: "photo", id: "OPH-xxx" }`) ou des figures du catalogue. ≈ 900–1150 mots visibles.

## Section A5 du module A — « Rétine, nerf optique et cristallin : reconnaître au premier coup d’œil »
But : le R1 en clinique de cornée/glaucome voit ces trouvailles (au fond d’œil dilaté, à l’OCT, au
B-scan, en évaluant une cataracte) et doit savoir quoi en faire. Format d’une entrée :
```js
G.OPH.A = G.OPH.A || {};
G.OPH.A.recog = (G.OPH.A.recog || []).concat([
  { id: "cataracte-nucleaire", order: 1, group: "cristallin",   // cristallin | echo | retine | nerf | neuro
    title: "Sclérose nucléaire et cataracte nucléaire", en: "Nuclear sclerosis / nuclear cataract",
    urgency: "routine",                                         // urgent | rapide | routine
    what: "2 phrases vulgarisées : ce que c’est.",
    look: ["3–5 signes à reconnaître (où regarder, avec quel éclairage)"],
    why: "Pourquoi le R1 de cornée/glaucome doit le connaître (lien concret : biométrie, angle, Fuchs, PXF…).",
    action: ["2–4 conduites : quoi faire, quand référer, délai"],
    pitfalls: ["1–3 pièges"],
    pearl: { q: "Question du patron", a: "Réponse" } }
]);
```
Photos de l’entrée : clé `a5-<id>`.

## QCM (format = SCHEMA.md section 2, inchangé)
Module A : topic `a-retine` ; modules B/C : topic = id de fiche (nouvelles ou existantes).
4 options de longueur comparable (la bonne n’est pas systématiquement la plus longue), positions de
réponse équilibrées, `why[]` une entrée par option dans le même ordre, ≥ 1/3 de questions `image`
(photo `{ type: "photo", id }` dont rien de visible ne trahit la réponse, ou figure schématique).
Pendant la question l’app cache la légende ; après la réponse elle montre titre + légende source.
```js
G.OPH.quiz = (G.OPH.quiz || []).concat([ … ]);
```

## Cas (format = SCHEMA.md, inchangé) : `G.OPH.cases = (G.OPH.cases || []).concat([ … ]);`
Mélanger la position de la bonne réponse dans chaque étape `choice` (l’app ne mélange pas les
options des cas) et l’ordre des examens ; la bonne option ne doit pas être plus longue que les autres.

## Glossaire (termes nouveaux seulement, ≤ 30 mots, clé = terme exact utilisé dans le texte)
```js
G.OPH.glossary = G.OPH.glossary || {};
Object.assign(G.OPH.glossary, { "kératopathie en bande": "Dépôt de calcium…" });
```

## Validation et sobriété
`cd /home/claude/ophtalmo && node tools/validate.js --partial <tes fichiers>` jusqu’à OK.
Sobriété : lire SCHEMA/FACTS une fois, ne pas relire inutilement, écrire en 1–3 grandes éditions.
Ne modifier AUCUN autre fichier que les tiens. Réponse finale courte : ce qui est écrit, faits incertains,
ligne du validateur.
