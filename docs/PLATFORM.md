# Plateforme web + iOS bilingue — contrat partagé (lire avant de coder)

> **Arbre de travail unique : /home/claude/ophtalmo-academie (dépôt git). Publier : `python3 tools/push.py "message"`.** /home/claude/ophtalmo est obsolète.

Produit existant : SPA vanilla JS (src/*.js, data/*.js, tools/build.py → dist/index.html pour l’artifact Claude).
Objectif : site web statique bilingue FR/EN (GitHub Pages) + app iOS (Capacitor) à partir du même code.
Public : externes motivés par l’ophtalmologie et R1. Gratuit, sans pub (licence images CC BY-NC-ND / EyeRounds).

## Propriété des fichiers (ne modifie QUE les tiens)
| Rôle | Fichiers |
|---|---|
| web | src/i18n.js, src/web.js, src/web.css, tools/build_web.py, site/ (généré), .github/workflows/pages.yml, edits UI text in src/core.js, src/views.js, src/learn.js, src/quiz.js |
| design/motion | src/styles.css, brand/ (logo SVG, palette, guide), videos/ |
| exercices interactifs | src/investigations.js, src/investigations.css |
| pédagogie clinique | data/investigations.js (contenu FR/EN), docs/PEDAGOGY-REVIEW.md, enrichissements data/hy-*.js |
| ressources visuelles bilingues | data/inv-media.js, docs/RIGHTS.md, data-en/*.js (traductions) |
| iOS | ios/ (projet Capacitor), capacitor.config.json, package.json, .github/workflows/ios.yml, docs/IOS.md |
| marché / acquisition | market/, launch/ |
| tests | tests/web/, docs/TEST-REPORT.md |
Sauvegarde ton avancement dans docs/progress/<role>.md (fait / reste / blocages) avant de rendre la main.

## i18n
- `I18N.lang` = 'fr' | 'en'. Choix : `?lang=en` dans l’URL > localStorage `oph-lang` > langue du navigateur > 'fr'.
- UI : `t('clé')` lit `I18N.dict[lang][clé]`, repli FR. Les clés vivent dans src/i18n.js.
- Contenu existant (FR) : traductions en surcouche dans `data-en/*.js`, chargées APRÈS les données FR :
  ```js
  var G = (typeof window !== 'undefined') ? window : globalThis;
  G.OPH_EN = G.OPH_EN || {};
  G.OPH_EN.quiz = Object.assign(G.OPH_EN.quiz || {}, { "<id>": { stem, options:[…], explain, why:[…] /* mêmes clés que la question FR */ } });
  G.OPH_EN.hy = Object.assign(G.OPH_EN.hy || {}, { "<key>": { essentials, cloze, triage, cues } });
  G.OPH_EN.fiches / cases / glossary / capsules / A … même principe (par id, champs partiels permis)
  ```
  Au démarrage en anglais, `I18N.applyContent()` fusionne en profondeur la surcouche dans `OPH` (par id ; tableaux remplacés).
  Ce qui n’est pas traduit reste en français avec un petit badge « FR ».
- Nouveau contenu (Investigations) : bilingue natif, champs `{fr:"…", en:"…"}`, lus avec `I18N.pick(v)` (renvoie v[lang] || v.fr || v si string).
- Changer de langue = enregistrer localStorage puis recharger la page.

## Section Investigations (nouvelle)
Routes : `#investigations` (hub) et `#inv-<id>` pour : `bscan`, `ascan`, `oct`, `gonio`, `fondoeil`, `cv`.
Logique pédagogique de chaque exercice : **Observe → Réponds → Révèle** (on montre l’image, l’étudiant répond, on révèle le signe décisif annoté).

### data/investigations.js (pédagogie)
```js
G.OPH.inv = [{
  id: 'bscan', n: 'I1', title: {fr, en}, en_term: 'B-scan ultrasonography',
  why: {fr, en},                // à quoi sert l’examen, 1–2 phrases
  how: [{fr, en}],              // comment on le fait / le lit (étapes courtes)
  normal: [{fr, en}], keys: [{fr, en}],   // repères normaux ; signes clés à reconnaître
  pitfalls: [{fr, en}],
  tool: 'ascan-sim' | 'vf-reader' | 'gonio-grader' | 'oct-layers' | 'bscan-probe' | 'fundus-explorer' | null,  // composant interactif (src/investigations.js)
  practice: ['<practice id>', …]   // ids définis dans data/inv-media.js OU ci-dessous
}];
G.OPH.invPractice = [{            // items de pratique écrits par la pédagogie
  id, inv: 'oct', media: '<media id>' ,   // image/svg décrit dans inv-media.js
  q: {fr, en}, options: [{fr, en}], answer: 0,
  why: [{fr, en}],                 // une explication par option (pourquoi juste / faux)
  reveal: {fr, en},                // le signe décisif, en une phrase
  level: 1|2|3                     // 1 externe, 2 externe motivé, 3 R1
}];
```
### data/inv-media.js (ressources visuelles)
```js
G.OPH.invMedia = { '<media id>': {
  kind: 'photo' | 'svg',
  photo: 'OPH-123',               // id du catalogue (droits connus, voir docs/RIGHTS.md)  OU
  svg: '<svg viewBox="0 0 400 300">…</svg>',   // schéma original (étiqueté « schéma »)
  alt: {fr, en},
  hotspots: [{ x: 42, y: 55, r: 8, label: {fr, en}, decisive: true }],  // % de la largeur/hauteur
  credit: {fr, en}
}};
```
### Composants (src/investigations.js)
`Inv.render(id)` page ; `Inv.practice(host, items)` moteur Observe→Réponds→Révèle (hotspots animés, « Je ne sais pas », confiance, enregistre via `Store.answer`-like dans `Store.p.inv`).
Outils interactifs : A-scan (pics cornée/cristallin/rétine/sclère, mesure de longueur axiale), sonde B-scan (orientation, fenêtres), champ visuel (lire fiabilité, MD/PSD, défaut), gonioscopie (grader Shaffer), couches OCT (étiqueter), fond d’œil (explorer).

## Build web
`python3 tools/build_web.py` → `site/` : index.html complet (doctype, meta, manifest, icônes), CSS/JS concaténés, `img/`, `sw.js` (hors ligne), `404.html`.
Inclut src : core, i18n, figures-a, figures-b, sims, quiz, learn, investigations, views, web ; css : styles, investigations, web ; data FR puis data-en.
Liens de campagne : `https://<pages>/?lang=fr#<route>` (ex. le cas vedette).

## Règles
- Aucune image médicale fabriquée présentée comme authentique : les schémas sont étiquetés « schéma ».
- Exactitude clinique : rien d’inventé ; en cas de doute, ne pas écrire ou signaler dans docs/progress.
- Sobriété en tokens : lis seulement ce qu’il te faut (node -e pour extraire une entrée), pas de relecture complète des gros fichiers.
- Recherches web : consigne tes sources dans market/SOURCES.md (date, URL, ce qui a été vu) pour éviter les doublons.

## Confidentialité et mesure d’audience (GoatCounter)
- Page `#confidentialite` (FR/EN, `src/privacy.js`) : liée au pied de page de l’accueil, au menu « Plus », au cas vedette et à Progression → Affichage ; présente aussi dans l’app iOS (même `site/`). Date d’entrée en vigueur : `PRIVACY_DATE` ; responsable : `PRIVACY_OFFICER` (courriel à fournir).
- **Activer la mesure d’audience** (le propriétaire crée lui-même le compte sur https://www.goatcounter.com, aucun compte n’est créé par les agents) :
  1. Créer le site GoatCounter, par ex. le code `ocelle` → tableau de bord `https://ocelle.goatcounter.com`.
  2. En haut de `src/privacy.js`, mettre `var GOATCOUNTER_CODE = 'ocelle';` (seul réglage ; vide = aucun script chargé, aucune requête).
  3. `python3 tools/build_web.py`, puis `python3 tools/push.py "Mesure d’audience activée"`.
  4. Option : `GOATCOUNTER_IN_NATIVE_APP = true` pour compter aussi dans l’app iOS (désactivé par défaut ; à déclarer alors dans la fiche de confidentialité App Store).
- Fonctionnement : charge `https://gc.zgo.at/count.js` (équivaut à `//gc.zgo.at/count.js`, en https explicite parce que l’app iOS sert la page en `capacitor://`) avec `data-goatcounter="https://<code>.goatcounter.com/count"` et `no_onload`. Chaque route SPA est comptée à la main (`hashchange`) : chemin = la route seule (`/c-herpes/voir`), plus `?lang=` s’il figure dans l’URL ; aucun autre paramètre, aucune donnée personnelle ; référent envoyé seulement à la première vue.
- Rien n’est compté si : `GOATCOUNTER_CODE` est vide ; Do Not Track ou Global Privacy Control est actif ; l’utilisateur a refusé (bouton dans Progression → Affichage et dans la page, `localStorage['oph-no-stats'] = '1'`) ; coquille native iOS sans le drapeau ; hors ligne (aucune tentative, échec silencieux du script).
- CSP (meta dans `index.html`, `CSP_POLICY` de `tools/build_web.py`) : tout en `'self'`, plus `gc.zgo.at` (script) et `*.goatcounter.com` (connect/img). Le service worker ne met jamais ces requêtes en cache (elles passent au réseau et échouent sans bruit hors ligne).
