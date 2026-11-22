# Ocelle : critique sévère

> **État actuel : passe 6 (re-contrôle), module D 8 / 10, site entier 8 / 10.** Plus bas, dans l'ordre : passe 5 (module D 7 / 10, site 8 / 10), passe 4 (8 / 10), passe 3 (7 / 10), passage 2 (6 / 10), puis passage 1 (4 / 10), conservés comme historique.

## Passe 6 (re-contrôle des correctifs de la passe 5) : 22 novembre 2026

Arbre testé : `main` @ 2af659f (commits b583731 et 2af659f), site reconstruit. Même méthode : 390 × 844, FR, niveau « Essentiel », 220 écrans remesurés.

**Tests** :
- `tests/run.py` : 0 problème.
- `node tools/validate.js` : OK.
- `tests/web/test_site.py --quick` : 85 contrôles, 2 échecs. Ce sont les mêmes que depuis le cycle 9 : images hors ligne non mises en cache, sur `g-gpao` et `reviser`.

### P6.1 Notes

| Périmètre | Note | Passe 5 |
|---|---|---|
| **Module D** | **8 / 10** | 7 |
| **Site entier** | **8 / 10** | 8 |

Le module D gagne un point : les 3 défauts cliniques sont corrigés, aucun autocollant ne recouvre plus le texte (0/52), et l'A5 est reliée aux fiches D. Le site reste à 8 : les restes de B, C et A ne bougent pas.

### P6.2 Statut des MUST-FIX de la passe 5

Le contact du responsable de la confidentialité est un choix délibéré du propriétaire : il est exclu de la liste.

| # | Défaut (passe 5) | Statut | Preuve |
|---|---|---|---|
| 1 | Délai OACR incohérent | **Corrigé**, avec un reste | Définition, drapeaux, essentiels, arbre, Quand référer, A5 et explication du QCM disent « urgence : immédiatement, comme un AVC ». Reste : l'explication d'option de D-004 dit « bilan le jour même », et le libellé « immédiatement (le jour même) » garde une parenthèse ambiguë. |
| 2 | Arbres `r-decollement` et `r-diabete` | **Corrigé** | `#r-decollement/decider` pose « Rideau, ombre ou baisse de vision ? » en Q1. `#r-diabete/decider` demande « Déjà examiné ? » ; Non → « Examen maintenant ». |
| 3 | Corticostéroïdes de l'ACG non sourcés | **Corrigé** | Perte visuelle : méthylprednisolone IV 250–1000 mg/j jusqu'à 3 jours, puis prednisone 40–60 mg/j. Sans perte visuelle : prednisone d'emblée. Source : EULAR 2018. Biopsie dans les 2 semaines. |
| 4 | Autocollant sur le nom du signe | **Corrigé** | Chevauchement mesuré : 0/52 photos (14 en passe 5). |
| 5 | Confidentialité | **Hors périmètre** | Le contact reste un placeholder (choix du propriétaire). La mention « compatible RGPD » a été retirée. |
| 6 | A5 et D incohérents, non reliés | **Corrigé** | Les 7 entrées A5 concernées renvoient vers leur fiche D. `#a-retine/retinopathie-hypertensive` est passée en « Urgent ». Reste mineur : la pastille de `#a-retine/occlusions-retiniennes` dit « le jour même » alors que le texte dit « immédiatement » pour l'OACR. |
| 7 | QCM D biaisés par la longueur | **Corrigé** | La bonne réponse est la plus longue dans 4/18 cas (11 en passe 5). |
| 8 | « À vérifier » visible | **Corrigé** | 35 → 0 (seule reste la tournure légitime « sert à vérifier »). |
| 9 | Budgets | **Partiel** | En D : `#r-ovr/voir` fait 61 mots (80 en passe 5) ; définitions de plus de 3 lignes 4 → 0 ; paragraphes longs sur Décider 10 → 5 (`r-oacr`, `r-ovr`, `r-diabete` ×2, `r-endophtalmie`). Hors D, rien ne change : vignettes de B et C sur 4–5 lignes (31 paragraphes longs), paire normal/pathologique en B et C, 17/42 micro-fiches A au-dessus de 1,5 écran. |

### P6.3 MUST-FIX restants
1. **Budgets de D** : `#r-ovr/voir` à 60 mots au plus ; 5 paragraphes de 4 lignes sur Décider (`#r-oacr/decider`, `#r-ovr/decider`, `#r-diabete/decider`, `#r-endophtalmie/decider`).
   - Fichier : `data/fiches-retine.js`.
2. **Reste du délai OACR** : explication d'option de D-004 ; retirer la parenthèse « (le jour même) ».
   - Fichiers : `data/quiz-d.js`, `data/fiches-retine.js`, `data/hy-retine.js`, `data/ext-a5-b.js`.
3. **Restes de B, C et A** (inchangés depuis la passe 5) : vignettes sur 3 lignes au plus, paire normal/pathologique à retirer en B et C, 17 micro-fiches A trop longues.
   - Fichiers : `data/fiches-*.js`, `src/views.js`, `data/module-a.js`.

Fichiers de la passe 6 (dossier de travail du critique) : `measure6.py`, `m6-part*.csv`, et les sorties de `overlap5.py`, `a5d.py` et `clin5.py`.

---

## Passe 5 (module D Rétine, audits, confidentialité) : 22 novembre 2026

Arbre testé : `main` @ 9513fc0, site reconstruit (`python3 tools/build_web.py`). Même barème et même méthode que la passe 4 :
- 390 × 844, FR, niveau « Essentiel », stockage vierge, requêtes externes bloquées.
- **220 écrans mesurés**, dont les **32 écrans du module D** et la page `#confidentialite`.
- Équité de Voir simulée sur **52 photos** (toucher au hasard sur 10 000 points, toucher au centre, 3 touchers avec l'indice).
- Les 8 mécanismes de D parcourus étape par étape.
- Surcouche anglaise de D vérifiée sur les 32 écrans.
- Relecture clinique des 8 fiches D contre `docs/FACTS.md` §G.
- QCM : 148 items mesurés.

**Tests** : `tests/run.py` → 0 problème. `node tools/validate.js` → OK. `tests/web/test_site.py --quick` → 85 contrôles, **2 échecs**. Ces deux échecs sont les mêmes que depuis le cycle 9 : images hors ligne non mises en cache, sur `g-gpao` et `reviser`. L'équipe les tient pour connus ; ils sont sans lien avec cette critique, qui ne touche pas au code.

### P5.1 Notes

| Périmètre | Note | Passe 4 |
|---|---|---|
| **Module D (Rétine)** | **7 / 10** | — |
| **Site entier** | **8 / 10** | 8 |

**Module D : ce qui est bon**
- **Budgets** : tenus sur 31 des 32 écrans.
- **Comprendre** : un seul pas-à-pas dessiné, sans paire normal/pathologique. Il fait 1,28–1,33 écran, mieux que B et C.
- **Voir** : équitable. Un toucher au hasard réussit 3,0–5,8 % du temps ; le centre rate sauf si le signe est central, et il faut alors le nommer (1 chance sur 3). Aucune fuite par le titre.
- **Surcouche anglaise** : propre (0 mot français résiduel).
- **Contenu clinique** : juste et sourcé pour l'essentiel :
  - Hollands : 14 % de déchirures.
  - Diabetes Canada : type 2 au diagnostic, puis aux 1–2 ans.
  - AREDS2 sans bêtacarotène.
  - EVS : vitrectomie si perception lumineuse seulement ; doses intravitréennes.
  - AHA : baisse de la TAM de 10–15 % la 1re heure.
  - THEIA et TenCRAOS : aucun bénéfice prouvé de la thrombolyse.

**Pourquoi pas plus** :
1. Les délais de l'OACR sont incohérents.
2. Deux arbres ont une faille de logique.
3. Les doses de corticostéroïdes pour l'ACG ne sont pas sourcées.
4. Le module D double l'A5, avec des délais contradictoires.

**Site entier** : les MUST-FIX de la passe 4 sont réglés en grande partie. Mais deux régressions transversales apparaissent : l'autocollant cache le nom du signe sur **14 des 52** photos, et la page de confidentialité affiche un **courriel provisoire**.

### P5.2 Mesures

| Écran | Modules | n | Mots médiane (min–max) | Plafond | Hors plafond | Figures (méd.) | Hauteur (écrans) méd. (max) | Paragraphes > 3 lignes |
|---|---|---|---|---|---|---|---|---|
| Voir | B + C | 27 | 45 (40–58) | 60 | 0 | 1 | 1.29 (1.55) | 0 |
| Voir | D | 8 | 54 (48–80) | 60 | 1 | 1 | 1.32 (1.45) | 4 |
| Comprendre | B + C | 27 | 76 (61–96) | 120 | 0 | 3 | 1.51 (1.57) | 1 |
| Comprendre | D | 8 | 77 (68–83) | 120 | 0 | 1 | 1.30 (1.33) | 1 |
| Décider (hors arbre) | B + C | 27 | 106 (87–175) | 180 | 0 | 0 | 1.88 (2.26) | 31 |
| Décider (hors arbre) | D | 8 | 146 (137–162) | 180 | 0 | 0 | 2.05 (2.10) | 10 |
| S’entraîner | B + C | 27 | 66 (59–77) | ≈200 | 0 | 0 | 1.18 (1.28) | 0 |
| S’entraîner | D | 8 | 69 (63–77) | ≈200 | 0 | 0 | 1.18 (1.22) | 0 |
| Investigations | — | 6 | 167 (141–198) | ≈200 | 0 | 2 | 2.80 (2.88) | 3 |
| Module A : micro-fiches | — | 42 | 79 (11–149) | ≈200 | 0 | 1 | 1.48 (1.96) | 7 |
| Capsules : cartes | — | 17 | 74 (61–90) | ≈200 | 0 | 1 | 1.26 (2.18) | 16 |

Points saillants :
- **Voir** : `#r-ovr/voir` fait 80 mots (plafond 60). « En deux phrases » dépasse 3 lignes sur 4 fiches D sur 8 : `r-ovr`, `r-diabete`, `r-dmla`, `r-endophtalmie`.
- **Décider (D)** : 137–162 mots hors arbre, 2,0–2,1 écrans ; vignettes de 4 à 5 lignes.
- **Arbres** : questions ≤ 8 mots, actions ≤ 12 mots ✓.
- **`#confidentialite`** : 414 mots, 3 écrans, 7 paragraphes de plus de 3 lignes.
- **Global** : 0 animation auto-rythmée, 0 tableau visible, 0 erreur JavaScript sur les 220 écrans.

### P5.3 Statut des MUST-FIX de la passe 4

| # | Défaut | Statut | Preuve |
|---|---|---|---|
| 1 | Un seul composant pour le mécanisme | **Partiel** | La chaîne de texte est supprimée : un seul « Étape suivante » sur 35/35 fiches ✓. Mais B et C gardent la paire normal/pathologique et « Révéler les anomalies » (3 figures, 1,40–1,57 écran), alors que D s'en passe (1,28–1,33). Les deux modules divergent. |
| 2 | Récompense pleine après l'indice | **Corrigé** | `#g-crise/voir` : « Trouvé avec l'indice », sans autocollant. |
| 3 | Biais des choix Voir | **Corrigé** | La bonne réponse est la plus longue dans 8/32 cas (25 %). Fuites par le titre : 0/32. |
| 4 | Texte interne (« selon la source ») | **Corrigé** | Il ne reste que « Photo de gauche (OD) », légitime sur une image double. |
| 5 | Sources et précision clinique | **Corrigé** | Pénurie d'acétazolamide sourcée (Pénuries de produits de santé). Kératocône : « 2e consensus mondial, ESCRS 2025 ». Avertissement timolol chez le nourrisson (apnée, bradycardie) rétabli. `c-brulure` : « cornée voilée (Roper-Hall ≥ II) ». |
| 6 | Vignettes ≤ 25 mots | **Partiel** | 35/35 font ≤ 25 mots, mais elles tiennent encore sur 4–5 lignes : 31 paragraphes longs sur Décider en B et C, 10 en D. |
| 7 | Micro-fiches A | **Non corrigé** | 16/42 dépassent encore 1,5 écran (maximum 1,96, `#a-retine/pupilles-neuro`). |

### P5.4 Module D : revue clinique (niveau externe, contre FACTS §G)

| Fiche | Verdict | À corriger |
|---|---|---|
| `r-dpv` | Juste | — |
| `r-decollement` | Juste, **arbre faux** | Q1 « Éclairs ou corps flottants nouveaux ? » → Non → « autre cause de baisse de vision ». Un décollement qui se présente par un **rideau sans éclairs** (fréquent chez le patient âgé ou dans le décollement inférieur) sort donc du parcours. Il faut poser la question du rideau ou de la baisse de vision **en premier**. |
| `r-oacr` | Juste sur le fond, **délais incohérents** | Le délai varie selon l'endroit : « le jour même » (définition, 1er drapeau, essentiel n° 2, explication du QCM D-004, carte A5), « maintenant » (arbre), « immédiatement » (Quand référer, FACTS). Pour un équivalent d'AVC, « le jour même » est un déclassement : écrire « **maintenant** » partout. |
| `r-oacr` (ACG) | **Non sourcé** | « Prednisone 40–60 mg/j ; souvent méthylprednisolone IV 250–1000 mg/j × 3 j si perte visuelle, selon l'équipe ». La fourchette correspond à EULAR 2018, mais FACTS la classe « de mémoire, non relue ». Or dans l'OACR, la perte visuelle est acquise par définition : le bolus IV de méthylprednisolone (BSR 2020 : 500 mg–1 g/j jusqu'à 3 j) devrait être présenté **en premier**, avec la source. Biopsie dans les 2 semaines ✓. L'échographie des temporales (EULAR 2023) n'est pas mentionnée. |
| `r-ovr` | Juste | « Dans la semaine », et le jour même si glaucome néovasculaire ✓. Iris et angle chaque mois ✓. Voir fait 80 mots. |
| `r-diabete` | Juste, **arbre incomplet** | Q2 « Aucune rétinopathie au dernier examen ? » suppose un examen antérieur. Le patient de la vignette n'a **jamais** été examiné : aucun chemin ne mène à « examen maintenant ». « Règle 4-2-1 » apparaît au niveau Essentiel sans explication. |
| `r-hta` | Juste | Seuil 180/110 (AHA 2024) ; −10–15 % la 1re heure, ≤ 25 % le 1er jour ; pas de baisse rapide sans atteinte d'organe ; piège de la nifédipine ✓. |
| `r-dmla` | Juste | AREDS2 (doses exactes), « moins d'une semaine » ✓. Mais « disponibilité canadienne à vérifier » s'affiche à l'apprenant (voir N4). |
| `r-endophtalmie` | Juste | EVS, vancomycine 1 mg et ceftazidime 2,25 mg, pas d'antibiotique en goutte « en attendant », appel le jour même ✓. La boucle de Voir entoure toute la cornée plutôt que le niveau d'hypopyon. |

### P5.5 Nouveaux défauts

- **N1. L'autocollant cache le nom du signe** sur **14/52** photos. C'est toujours la variante « Dans le mille ! », la plus large. Routes : `#r-dpv/voir`, `#r-hta/voir`, `#c-keratocone/voir`, `#c-fuchs/voir`, `#c-brulure/voir`, `#g-gpn/voir`, `#g-crise/voir`, `#g-pxf/voir`, `#g-papille/voir`, `#g-neovasculaire/voir`, `#g-fermeture/voir`, `#a-retine/bscan`, `#a-retine/decollement-retine`, `#a-retine/decollement-choroidien`. Exemple : « Le signe qui compte : Papi… ». C'est une régression : le cycle 9 avait placé l'autocollant hors du texte.
- **N2. Le module D double l'A5, avec des délais contradictoires et sans lien entre eux.**
  - `#a-retine/occlusions-retiniennes` (« Urgent : le jour même ») regroupe OACR et OVR, alors que D3 dit « immédiatement » et D4 « dans la semaine ».
  - `#a-retine/retinopathie-hypertensive` est étiquetée « Rapide : jours à semaines », alors que D6 envoie à l'urgence **immédiatement**.
  - Les fiches A5 qui ont un équivalent D ne contiennent aucun lien vers lui (0 lien `#r-*`).
- **N3. QCM du module D biaisés par la longueur** : la bonne réponse est la plus longue dans **11/18** cas (61 % ; B et C sont à 23–31 %). Items : D-002, D-003, D-005, D-008, D-009, D-010, D-012, D-014, D-016, D-017, D-018.
- **N4. Texte de rédaction visible** : **35** « … à vérifier » dans des champs lus par l'apprenant, surtout les cartes « Au Québec » et les capsules. Exemples : « disponibilité canadienne à vérifier », « gratuité à vérifier », « remboursement à vérifier ».
- **N5. `#confidentialite`.**
  - Le responsable de la protection des renseignements personnels s'affiche « Ocelle — **[courriel à confirmer · email to be confirmed]** », placeholder bilingue compris. La Loi 25 exige de publier le titre et les **coordonnées** de ce responsable.
  - « Pour une question, écris au responsable ci-dessous » ne mène donc nulle part. Les signalements d'erreur restent eux aussi stockés localement : l'apprenant n'a **aucun canal** pour joindre l'équipe.
  - Le sélecteur « Permise / Refusée » commande une mesure d'audience déclarée « inactive » : c'est une interaction sans effet (barème §4).
  - L'en-tête affiche « Compatible RGPD » sans justification.
- **N6. Anglais** : l'étiquette de vignette s'affiche « **Case :** », avec l'espace française avant le deux-points, sur les 35 écrans Décider en anglais.

**QCM de B et C après l'audit : pas de régression.** Les explications font 29–31 mots en médiane (≤ 39). Le détail (`deep`, 60–130 mots) est replié sous « Pour aller plus loin ». Les explications par option restent visibles : 67–78 mots en médiane, soit environ 120 mots visibles après une réponse. C'est acceptable, à surveiller.

### P5.6 Direction artistique
- Le module D est la partie la plus cohérente du site : mécanismes en cobalt, encre et fluo ; hub à photos réelles ; boucles bien placées sur la déchirure, la tache rouge cerise et la papille œdémateuse.
- L'autocollant qui déborde (N1) abîme précisément le geste signature.
- Restes hors charte : encadrés « High yield » (menthe) et « Le signe qui compte » (vert pâle) ; badge « High yield » en anglais.

### P5.7 MUST-FIX restants (classés)

1. **Délai unique « maintenant » pour l'OACR** : `#r-oacr/voir`, `#r-oacr/comprendre`, `#r-oacr/decider`, QCM D-004, et `#a-retine/occlusions-retiniennes`. Étendre `tools/check-delays.js` aux définitions, aux essentiels et aux QCM.
   - Fichiers : `data/fiches-retine.js`, `data/hy-retine.js`, `data/quiz-d.js`, `data/ext-a5-b.js`, `tools/check-delays.js`.
2. **Arbres de D** : rideau en 1re question (`#r-decollement/decider`) ; chemin « jamais examiné → examen maintenant » (`#r-diabete/decider`).
   - Fichier : `data/fiches-retine.js` (`cat.algo`).
3. **Corticostéroïdes pour l'ACG** (`#r-oacr/decider`) : citer EULAR 2018 et BSR 2020 ; bolus IV de méthylprednisolone en premier quand la vision est perdue ; retirer la mention « de mémoire » de FACTS.
   - Fichiers : `data/fiches-retine.js`, `docs/FACTS.md` §G.
4. **Autocollant sur le texte** (14/52 photos, liste en N1).
   - Fichiers : `src/motion.js`, `src/core.js` (`voirReveal`), `src/web.css`.
5. **Confidentialité** (`#confidentialite`) : vraie adresse de contact ; retirer le sélecteur tant que la mesure est inactive.
   - Fichier : `src/privacy.js`.
6. **A5 et D cohérents et reliés** : `#a-retine/occlusions-retiniennes`, `#a-retine/retinopathie-hypertensive`, `#a-retine/dmla`, `#a-retine/retinopathie-diabetique`, `#a-retine/decollement-retine`. Aligner les délais et ajouter un lien « Fiche complète : D… ».
   - Fichiers : `data/ext-a5-a.js`, `data/ext-a5-b.js`, `src/views.js` (entrées A5).
7. **QCM D sans biais de longueur** (11/18).
   - Fichiers : `data/quiz-d.js` ; ajouter le contrôle à `tools/validate.js`.
8. **« À vérifier » visible** (35 occurrences) : vérifier, ou retirer.
   - Fichiers : `data/fiches-cornee*.js`, `data/capsules.js`, `data/cases.js`, `data/ext-cornee-a.js`, `data/fiches-retine.js`.
9. **Budgets restants** :
   - `#r-ovr/voir` : 80 mots.
   - Définitions de plus de 3 lignes : `r-ovr`, `r-diabete`, `r-dmla`, `r-endophtalmie`.
   - Vignettes encore sur 4–5 lignes.
   - 16 micro-fiches A au-dessus de 1,5 écran.
   - Paire normal/pathologique de B et C à retirer, pour s'aligner sur D.
   - Fichiers : `data/fiches-retine.js`, `data/fiches-*.js`, `data/module-a.js`, `src/views.js`.

**SHOULD-FIX** :
- Étiquette « Case : » en anglais (`src/tree.js`).
- Les 2 échecs hors ligne connus de `test_site` (`site/sw.js`, mise en cache des images).
- Échographie des temporales dans `r-oacr`.
- Boucle de l'hypopyon (`data/voir-hotspots.js`).

### Annexe P5. Mesures par écran (220 écrans)

<details><summary>220 écrans</summary>

| Écran | Mots visibles | dont SVG | Mots 1er écran | Contenu à (px) | Figures | Hauteur (écrans) | Paragr. > 3 lignes | Verdict |
|---|---|---|---|---|---|---|---|---|
| `#c-secheresse/voir` | 55 | 0 | 40 | 224 | 1 | 1.43 | 0 | OK |
| `#c-secheresse/comprendre` | 79 | 1 | 42 | 224 | 3 | 1.57 | 0 | OK |
| `#c-secheresse/decider` | 144 | 0 | 86 | 224 | 0 | 1.9 | 1 | paragraphe > 3 lignes |
| `#c-secheresse/entrainer` | 68 | 0 | 77 | 224 | 0 | 1.23 | 0 | OK |
| `#c-bacterienne/voir` | 44 | 0 | 51 | 207 | 1 | 1.27 | 0 | OK |
| `#c-bacterienne/comprendre` | 71 | 1 | 41 | 207 | 3 | 1.49 | 0 | OK |
| `#c-bacterienne/decider` | 153 | 0 | 85 | 207 | 0 | 1.92 | 1 | paragraphe > 3 lignes |
| `#c-bacterienne/entrainer` | 71 | 0 | 77 | 207 | 0 | 1.16 | 0 | OK |
| `#c-atypiques/voir` | 43 | 0 | 52 | 207 | 1 | 1.2 | 0 | OK |
| `#c-atypiques/comprendre` | 75 | 1 | 43 | 207 | 3 | 1.55 | 0 | OK |
| `#c-atypiques/decider` | 152 | 0 | 100 | 207 | 0 | 1.91 | 1 | paragraphe > 3 lignes |
| `#c-atypiques/entrainer` | 67 | 0 | 75 | 207 | 0 | 1.2 | 0 | OK |
| `#c-herpes/voir` | 51 | 0 | 58 | 204 | 1 | 1.29 | 0 | OK |
| `#c-herpes/comprendre` | 72 | 3 | 46 | 204 | 3 | 1.52 | 0 | OK |
| `#c-herpes/decider` | 190 | 0 | 86 | 204 | 0 | 2.05 | 2 | paragraphe > 3 lignes |
| `#c-herpes/entrainer` | 64 | 0 | 74 | 204 | 0 | 1.19 | 0 | OK |
| `#c-keratocone/voir` | 45 | 0 | 51 | 207 | 1 | 1.28 | 0 | OK |
| `#c-keratocone/comprendre` | 130 | 34 | 102 | 207 | 3 | 1.53 | 0 | OK |
| `#c-keratocone/decider` | 145 | 0 | 80 | 207 | 0 | 1.88 | 1 | paragraphe > 3 lignes |
| `#c-keratocone/entrainer` | 65 | 0 | 70 | 207 | 0 | 1.14 | 0 | OK |
| `#c-fuchs/voir` | 45 | 0 | 53 | 224 | 1 | 1.23 | 0 | OK |
| `#c-fuchs/comprendre` | 105 | 37 | 80 | 224 | 3 | 1.54 | 0 | OK |
| `#c-fuchs/decider` | 127 | 0 | 81 | 224 | 0 | 1.66 | 1 | paragraphe > 3 lignes |
| `#c-fuchs/entrainer` | 65 | 0 | 76 | 224 | 0 | 1.19 | 0 | OK |
| `#c-erosion/voir` | 41 | 0 | 51 | 224 | 1 | 1.36 | 0 | OK |
| `#c-erosion/comprendre` | 77 | 1 | 45 | 224 | 3 | 1.54 | 0 | OK |
| `#c-erosion/decider` | 152 | 0 | 93 | 224 | 0 | 1.91 | 1 | paragraphe > 3 lignes |
| `#c-erosion/entrainer` | 62 | 0 | 75 | 224 | 0 | 1.11 | 0 | OK |
| `#c-pterygion/voir` | 46 | 0 | 55 | 224 | 1 | 1.3 | 0 | OK |
| `#c-pterygion/comprendre` | 124 | 34 | 98 | 224 | 3 | 1.52 | 0 | OK |
| `#c-pterygion/decider` | 131 | 0 | 86 | 224 | 0 | 1.78 | 1 | paragraphe > 3 lignes |
| `#c-pterygion/entrainer` | 59 | 0 | 71 | 224 | 0 | 1.19 | 0 | OK |
| `#c-greffe/voir` | 47 | 0 | 57 | 224 | 1 | 1.3 | 0 | OK |
| `#c-greffe/comprendre` | 76 | 0 | 44 | 224 | 3 | 1.49 | 0 | OK |
| `#c-greffe/decider` | 154 | 0 | 91 | 224 | 0 | 1.81 | 1 | paragraphe > 3 lignes |
| `#c-greffe/entrainer` | 64 | 0 | 77 | 224 | 0 | 1.11 | 0 | OK |
| `#c-brulure/voir` | 58 | 0 | 45 | 207 | 1 | 1.43 | 0 | OK |
| `#c-brulure/comprendre` | 118 | 37 | 92 | 207 | 3 | 1.46 | 0 | OK |
| `#c-brulure/decider` | 155 | 0 | 78 | 207 | 0 | 1.92 | 1 | paragraphe > 3 lignes |
| `#c-brulure/entrainer` | 64 | 0 | 70 | 207 | 0 | 1.12 | 0 | OK |
| `#c-dystrophies/voir` | 55 | 0 | 38 | 207 | 1 | 1.43 | 0 | OK |
| `#c-dystrophies/comprendre` | 90 | 1 | 67 | 207 | 3 | 1.52 | 0 | OK |
| `#c-dystrophies/decider` | 132 | 0 | 78 | 207 | 0 | 1.7 | 1 | paragraphe > 3 lignes |
| `#c-dystrophies/entrainer` | 69 | 0 | 75 | 207 | 0 | 1.23 | 0 | OK |
| `#c-depots/voir` | 42 | 0 | 50 | 224 | 1 | 1.3 | 0 | OK |
| `#c-depots/comprendre` | 90 | 0 | 60 | 224 | 3 | 1.51 | 0 | OK |
| `#c-depots/decider` | 145 | 0 | 89 | 224 | 0 | 1.78 | 1 | paragraphe > 3 lignes |
| `#c-depots/entrainer` | 69 | 0 | 80 | 224 | 0 | 1.18 | 0 | OK |
| `#c-surface/voir` | 43 | 0 | 55 | 224 | 1 | 1.27 | 0 | OK |
| `#c-surface/comprendre` | 79 | 0 | 43 | 224 | 3 | 1.57 | 0 | OK |
| `#c-surface/decider` | 152 | 0 | 87 | 224 | 0 | 2 | 1 | paragraphe > 3 lignes |
| `#c-surface/entrainer` | 70 | 0 | 81 | 224 | 0 | 1.25 | 0 | OK |
| `#c-peripherie/voir` | 42 | 0 | 33 | 224 | 1 | 1.43 | 0 | OK |
| `#c-peripherie/comprendre` | 83 | 0 | 58 | 224 | 3 | 1.51 | 0 | OK |
| `#c-peripherie/decider` | 151 | 0 | 88 | 224 | 0 | 1.9 | 1 | paragraphe > 3 lignes |
| `#c-peripherie/entrainer` | 77 | 0 | 87 | 224 | 0 | 1.28 | 0 | OK |
| `#g-gpao/voir` | 48 | 0 | 54 | 207 | 1 | 1.29 | 0 | OK |
| `#g-gpao/comprendre` | 84 | 7 | 54 | 207 | 3 | 1.52 | 0 | OK |
| `#g-gpao/decider` | 149 | 0 | 87 | 207 | 0 | 1.79 | 1 | paragraphe > 3 lignes |
| `#g-gpao/entrainer` | 60 | 0 | 69 | 207 | 0 | 1.15 | 0 | OK |
| `#g-hto/voir` | 42 | 0 | 53 | 204 | 1 | 1.22 | 0 | OK |
| `#g-hto/comprendre` | 131 | 55 | 115 | 204 | 3 | 1.47 | 0 | OK |
| `#g-hto/decider` | 144 | 0 | 83 | 204 | 0 | 1.85 | 1 | paragraphe > 3 lignes |
| `#g-hto/entrainer` | 59 | 0 | 69 | 204 | 0 | 1.09 | 0 | OK |
| `#g-gpn/voir` | 43 | 0 | 47 | 207 | 1 | 1.3 | 0 | OK |
| `#g-gpn/comprendre` | 99 | 27 | 68 | 207 | 3 | 1.52 | 0 | OK |
| `#g-gpn/decider` | 147 | 0 | 81 | 207 | 0 | 1.76 | 1 | paragraphe > 3 lignes |
| `#g-gpn/entrainer` | 59 | 0 | 67 | 207 | 0 | 1.17 | 0 | OK |
| `#g-fermeture/voir` | 46 | 0 | 34 | 224 | 1 | 1.45 | 0 | OK |
| `#g-fermeture/comprendre` | 112 | 40 | 96 | 224 | 3 | 1.49 | 0 | OK |
| `#g-fermeture/decider` | 148 | 0 | 85 | 224 | 0 | 1.9 | 1 | paragraphe > 3 lignes |
| `#g-fermeture/entrainer` | 69 | 0 | 80 | 224 | 0 | 1.2 | 0 | OK |
| `#g-crise/voir` | 46 | 0 | 57 | 207 | 1 | 1.13 | 0 | OK |
| `#g-crise/comprendre` | 71 | 1 | 55 | 207 | 3 | 1.5 | 0 | OK |
| `#g-crise/decider` | 219 | 0 | 85 | 207 | 0 | 2.26 | 3 | paragraphe > 3 lignes |
| `#g-crise/entrainer` | 66 | 0 | 76 | 207 | 0 | 1.14 | 0 | OK |
| `#g-pxf/voir` | 44 | 0 | 51 | 207 | 1 | 1.27 | 0 | OK |
| `#g-pxf/comprendre` | 73 | 1 | 53 | 207 | 3 | 1.5 | 0 | OK |
| `#g-pxf/decider` | 175 | 0 | 90 | 207 | 0 | 1.97 | 1 | paragraphe > 3 lignes |
| `#g-pxf/entrainer` | 63 | 0 | 69 | 207 | 0 | 1.17 | 0 | OK |
| `#g-pigmentaire/voir` | 43 | 0 | 47 | 224 | 1 | 1.3 | 0 | OK |
| `#g-pigmentaire/comprendre` | 79 | 1 | 46 | 224 | 3 | 1.49 | 0 | OK |
| `#g-pigmentaire/decider` | 146 | 0 | 81 | 224 | 0 | 1.81 | 1 | paragraphe > 3 lignes |
| `#g-pigmentaire/entrainer` | 73 | 0 | 82 | 224 | 0 | 1.14 | 0 | OK |
| `#g-neovasculaire/voir` | 43 | 0 | 50 | 207 | 1 | 1.24 | 0 | OK |
| `#g-neovasculaire/comprendre` | 115 | 37 | 92 | 207 | 3 | 1.49 | 0 | OK |
| `#g-neovasculaire/decider` | 143 | 0 | 87 | 207 | 0 | 1.79 | 1 | paragraphe > 3 lignes |
| `#g-neovasculaire/entrainer` | 60 | 0 | 66 | 207 | 0 | 1.18 | 0 | OK |
| `#g-secondaires/voir` | 40 | 0 | 49 | 207 | 1 | 1.18 | 0 | OK |
| `#g-secondaires/comprendre` | 71 | 1 | 51 | 207 | 3 | 1.52 | 1 | paragraphe > 3 lignes |
| `#g-secondaires/decider` | 150 | 0 | 88 | 207 | 0 | 1.88 | 1 | paragraphe > 3 lignes |
| `#g-secondaires/entrainer` | 70 | 0 | 78 | 207 | 0 | 1.23 | 0 | OK |
| `#g-postop/voir` | 45 | 0 | 55 | 204 | 1 | 1.28 | 0 | OK |
| `#g-postop/comprendre` | 68 | 1 | 54 | 204 | 3 | 1.47 | 0 | OK |
| `#g-postop/decider` | 145 | 0 | 85 | 204 | 0 | 1.84 | 1 | paragraphe > 3 lignes |
| `#g-postop/entrainer` | 72 | 0 | 81 | 204 | 0 | 1.16 | 0 | OK |
| `#g-papille/voir` | 44 | 0 | 57 | 224 | 1 | 1.19 | 0 | OK |
| `#g-papille/comprendre` | 74 | 1 | 61 | 224 | 3 | 1.46 | 0 | OK |
| `#g-papille/decider` | 151 | 0 | 86 | 224 | 0 | 1.83 | 1 | paragraphe > 3 lignes |
| `#g-papille/entrainer` | 64 | 0 | 77 | 224 | 0 | 1.23 | 0 | OK |
| `#g-cristallin/voir` | 55 | 0 | 45 | 224 | 1 | 1.55 | 0 | OK |
| `#g-cristallin/comprendre` | 99 | 37 | 93 | 224 | 3 | 1.43 | 0 | OK |
| `#g-cristallin/decider` | 164 | 0 | 92 | 224 | 0 | 1.99 | 1 | paragraphe > 3 lignes |
| `#g-cristallin/entrainer` | 73 | 0 | 86 | 224 | 0 | 1.25 | 0 | OK |
| `#g-dev/voir` | 48 | 0 | 57 | 224 | 1 | 1.4 | 0 | OK |
| `#g-dev/comprendre` | 98 | 37 | 91 | 224 | 3 | 1.4 | 0 | OK |
| `#g-dev/decider` | 176 | 0 | 94 | 224 | 0 | 1.96 | 2 | paragraphe > 3 lignes |
| `#g-dev/entrainer` | 76 | 0 | 89 | 224 | 0 | 1.24 | 0 | OK |
| `#r-dpv/voir` | 50 | 0 | 58 | 224 | 1 | 1.33 | 0 | OK |
| `#r-dpv/comprendre` | 83 | 1 | 82 | 224 | 1 | 1.32 | 0 | OK |
| `#r-dpv/decider` | 188 | 0 | 93 | 224 | 0 | 2.06 | 1 | paragraphe > 3 lignes |
| `#r-dpv/entrainer` | 66 | 0 | 77 | 224 | 0 | 1.2 | 0 | OK |
| `#r-decollement/voir` | 54 | 0 | 36 | 207 | 1 | 1.45 | 0 | OK |
| `#r-decollement/comprendre` | 89 | 6 | 92 | 207 | 1 | 1.33 | 0 | OK |
| `#r-decollement/decider` | 200 | 0 | 98 | 207 | 0 | 1.98 | 1 | paragraphe > 3 lignes |
| `#r-decollement/entrainer` | 71 | 0 | 79 | 207 | 0 | 1.22 | 0 | OK |
| `#r-oacr/voir` | 58 | 0 | 66 | 204 | 1 | 1.3 | 0 | OK |
| `#r-oacr/comprendre` | 87 | 6 | 94 | 204 | 1 | 1.3 | 0 | OK |
| `#r-oacr/decider` | 195 | 0 | 94 | 204 | 0 | 2.01 | 1 | paragraphe > 3 lignes |
| `#r-oacr/entrainer` | 63 | 0 | 74 | 204 | 0 | 1.17 | 0 | OK |
| `#r-ovr/voir` | 80 | 0 | 60 | 207 | 1 | 1.43 | 1 | > 60 mots; paragraphe > 3 lignes |
| `#r-ovr/comprendre` | 76 | 6 | 79 | 207 | 1 | 1.3 | 0 | OK |
| `#r-ovr/decider` | 187 | 0 | 91 | 207 | 0 | 2.01 | 1 | paragraphe > 3 lignes |
| `#r-ovr/entrainer` | 69 | 0 | 76 | 207 | 0 | 1.16 | 0 | OK |
| `#r-diabete/voir` | 52 | 0 | 55 | 207 | 1 | 1.31 | 1 | paragraphe > 3 lignes |
| `#r-diabete/comprendre` | 80 | 2 | 82 | 207 | 1 | 1.28 | 0 | OK |
| `#r-diabete/decider` | 204 | 0 | 83 | 207 | 0 | 2.1 | 2 | paragraphe > 3 lignes |
| `#r-diabete/entrainer` | 70 | 0 | 76 | 207 | 0 | 1.12 | 0 | OK |
| `#r-hta/voir` | 48 | 0 | 51 | 207 | 1 | 1.29 | 0 | OK |
| `#r-hta/comprendre` | 83 | 6 | 85 | 207 | 1 | 1.28 | 0 | OK |
| `#r-hta/decider` | 187 | 0 | 82 | 207 | 0 | 2.09 | 1 | paragraphe > 3 lignes |
| `#r-hta/entrainer` | 69 | 0 | 75 | 207 | 0 | 1.16 | 0 | OK |
| `#r-dmla/voir` | 57 | 0 | 62 | 207 | 1 | 1.34 | 1 | paragraphe > 3 lignes |
| `#r-dmla/comprendre` | 78 | 9 | 81 | 207 | 1 | 1.3 | 1 | paragraphe > 3 lignes |
| `#r-dmla/decider` | 185 | 0 | 85 | 207 | 0 | 2.1 | 1 | paragraphe > 3 lignes |
| `#r-dmla/entrainer` | 67 | 0 | 75 | 207 | 0 | 1.2 | 0 | OK |
| `#r-endophtalmie/voir` | 54 | 0 | 64 | 204 | 1 | 1.28 | 1 | paragraphe > 3 lignes |
| `#r-endophtalmie/comprendre` | 69 | 1 | 73 | 204 | 1 | 1.3 | 0 | OK |
| `#r-endophtalmie/decider` | 180 | 0 | 88 | 204 | 0 | 2.04 | 2 | paragraphe > 3 lignes |
| `#r-endophtalmie/entrainer` | 77 | 0 | 86 | 204 | 0 | 1.19 | 0 | OK |
| `#inv-bscan` | 200 | 2 | 54 | 61 | 2 | 2.87 | 2 | 2.87 écrans |
| `#inv-ascan` | 169 | 28 | 79 | 61 | 2 | 2.48 | 0 | OK |
| `#inv-oct` | 167 | 6 | 66 | 61 | 2 | 2.38 | 0 | OK |
| `#inv-gonio` | 176 | 2 | 52 | 61 | 2 | 2.88 | 0 | 2.88 écrans |
| `#inv-fondoeil` | 189 | 32 | 44 | 61 | 2 | 2.82 | 1 | 2.82 écrans |
| `#inv-cv` | 182 | 3 | 62 | 61 | 2 | 2.78 | 0 | 2.78 écrans |
| `#a-anatomie` | 73 | 0 | 63 | 61 | 0 | 1.35 | 0 | OK |
| `#a-anatomie/globe` | 127 | 62 | 138 | 202 | 1 | 1.19 | 1 | OK |
| `#a-anatomie/cornee` | 60 | 18 | 72 | 202 | 1 | 1 | 1 | OK |
| `#a-anatomie/angle` | 93 | 47 | 102 | 202 | 2 | 1.13 | 1 | OK |
| `#a-anatomie/papille` | 22 | 3 | 35 | 202 | 1 | 1 | 0 | OK |
| `#a-anatomie/annexes` | 30 | 19 | 43 | 224 | 1 | 1 | 0 | OK |
| `#a-anatomie/photos` | 23 | 0 | 32 | 202 | 1 | 1 | 0 | OK |
| `#a-physiologie` | 75 | 0 | 60 | 61 | 0 | 1.45 | 0 | OK |
| `#a-physiologie/aqueuse` | 144 | 14 | 123 | 202 | 1 | 1.52 | 0 | > 1,5 écran |
| `#a-physiologie/pio` | 108 | 17 | 119 | 202 | 1 | 1.23 | 0 | OK |
| `#a-physiologie/film-lacrymal` | 91 | 0 | 82 | 202 | 1 | 1.39 | 0 | OK |
| `#a-physiologie/transparence` | 151 | 18 | 103 | 202 | 1 | 1.76 | 0 | > 1,5 écran |
| `#a-physiologie/refraction` | 118 | 0 | 102 | 202 | 1 | 1.4 | 0 | OK |
| `#a-physiologie/pupille` | 105 | 12 | 113 | 202 | 1 | 1.26 | 1 | OK |
| `#a-examen` | 73 | 0 | 45 | 61 | 0 | 1.61 | 0 | OK |
| `#a-examen/av` | 136 | 23 | 112 | 202 | 1 | 1.51 | 1 | > 1,5 écran |
| `#a-examen/pupilles` | 96 | 6 | 78 | 202 | 1 | 1.44 | 0 | OK |
| `#a-examen/lampe` | 118 | 21 | 111 | 202 | 1 | 1.43 | 0 | OK |
| `#a-examen/fluoresceine` | 96 | 0 | 73 | 224 | 1 | 1.57 | 0 | > 1,5 écran |
| `#a-examen/tonometrie` | 96 | 0 | 78 | 202 | 1 | 1.48 | 0 | OK |
| `#a-examen/gonioscopie` | 118 | 19 | 102 | 202 | 1 | 1.5 | 0 | OK |
| `#a-examen/pachymetrie` | 96 | 0 | 82 | 202 | 1 | 1.4 | 0 | OK |
| `#a-examen/papille` | 155 | 42 | 108 | 202 | 3 | 1.71 | 0 | > 1,5 écran |
| `#a-imagerie` | 65 | 0 | 51 | 61 | 0 | 1.4 | 0 | OK |
| `#a-imagerie/structure` | 138 | 42 | 97 | 202 | 3 | 1.46 | 1 | OK |
| `#a-imagerie/oct` | 121 | 27 | 113 | 224 | 1 | 1.41 | 0 | OK |
| `#a-imagerie/topographie` | 110 | 17 | 97 | 202 | 2 | 1.5 | 0 | OK |
| `#a-imagerie/champs-visuels` | 179 | 30 | 158 | 202 | 3 | 1.5 | 0 | OK |
| `#a-imagerie/speculaire` | 81 | 0 | 74 | 202 | 1 | 1.35 | 0 | OK |
| `#a-retine` | 237 | 0 | 60 | 61 | 0 | 3.29 | 0 | > 200 mots; 3.29 écrans |
| `#a-retine/cataracte-nucleaire` | 70 | 0 | 63 | 202 | 1 | 1.49 | 0 | OK |
| `#a-retine/cataracte-corticale-scp` | 68 | 0 | 55 | 224 | 1 | 1.53 | 0 | > 1,5 écran |
| `#a-retine/cataracte-mature` | 99 | 0 | 91 | 257 | 1 | 1.47 | 1 | OK |
| `#a-retine/opacification-capsulaire` | 76 | 0 | 61 | 202 | 1 | 1.46 | 0 | OK |
| `#a-retine/bscan` | 78 | 0 | 75 | 224 | 1 | 1.41 | 0 | OK |
| `#a-retine/decollement-retine` | 74 | 0 | 57 | 224 | 1 | 1.54 | 0 | > 1,5 écran |
| `#a-retine/decollement-choroidien` | 67 | 0 | 56 | 224 | 1 | 1.53 | 0 | > 1,5 écran |
| `#a-retine/dmla` | 73 | 0 | 60 | 257 | 1 | 1.57 | 0 | > 1,5 écran |
| `#a-retine/retinopathie-diabetique` | 62 | 0 | 53 | 257 | 1 | 1.57 | 0 | > 1,5 écran |
| `#a-retine/occlusions-retiniennes` | 67 | 0 | 55 | 224 | 1 | 1.54 | 0 | > 1,5 écran |
| `#a-retine/retinopathie-hypertensive` | 68 | 0 | 55 | 257 | 1 | 1.61 | 0 | > 1,5 écran |
| `#a-retine/macula-chirurgicale` | 81 | 0 | 52 | 257 | 1 | 1.81 | 0 | > 1,5 écran |
| `#a-retine/peripherie-vitre` | 70 | 0 | 58 | 257 | 1 | 1.58 | 0 | > 1,5 écran |
| `#a-retine/inflammation-infection` | 71 | 0 | 70 | 224 | 1 | 1.47 | 0 | OK |
| `#a-retine/papille-oedeme` | 73 | 0 | 78 | 224 | 1 | 1.4 | 0 | OK |
| `#a-retine/pupilles-neuro` | 72 | 0 | 35 | 257 | 1 | 1.96 | 0 | > 1,5 écran |
| `#a-retine/tumeurs-toxicite-trauma` | 63 | 0 | 44 | 257 | 1 | 1.61 | 0 | > 1,5 écran |
| `#b-bases` | 62 | 0 | 80 | 212 | 1 | 1.29 | 1 | OK |
| `#b-bases/2` | 133 | 62 | 151 | 212 | 1 | 1.18 | 1 | OK |
| `#b-bases/3` | 108 | 18 | 67 | 234 | 2 | 1.51 | 1 | > 1,5 écran |
| `#b-bases/4` | 82 | 12 | 98 | 212 | 1 | 1.12 | 1 | OK |
| `#b-bases/5` | 61 | 0 | 74 | 212 | 1 | 1.15 | 1 | OK |
| `#b-bases/6` | 103 | 18 | 62 | 212 | 2 | 1.51 | 1 | > 1,5 écran |
| `#b-bases/7` | 92 | 18 | 105 | 212 | 1 | 1.1 | 1 | OK |
| `#b-bases/8` | 91 | 4 | 83 | 212 | 1 | 1.49 | 0 | OK |
| `#b-bases/9` | 100 | 18 | 82 | 212 | 1 | 2.02 | 2 | > 1,5 écran |
| `#c-bases` | 63 | 0 | 78 | 212 | 1 | 1.26 | 1 | OK |
| `#c-bases/2` | 134 | 62 | 151 | 212 | 1 | 1.18 | 1 | OK |
| `#c-bases/3` | 90 | 18 | 108 | 234 | 1 | 1.09 | 1 | OK |
| `#c-bases/4` | 79 | 0 | 95 | 212 | 1 | 1.13 | 1 | OK |
| `#c-bases/5` | 86 | 0 | 40 | 212 | 2 | 1.53 | 1 | > 1,5 écran |
| `#c-bases/6` | 88 | 18 | 101 | 212 | 1 | 1.08 | 1 | OK |
| `#c-bases/7` | 93 | 4 | 84 | 212 | 1 | 1.51 | 0 | > 1,5 écran |
| `#c-bases/8` | 78 | 3 | 54 | 212 | 1 | 2.18 | 1 | > 1,5 écran |
| `#accueil` | 144 | 0 | 71 | 61 | 3 | 2.64 | 1 | 2.64 écrans |
| `#apprendre` | 367 | 0 | 72 | 61 | 0 | 5.26 | 0 | > 200 mots; 5.26 écrans |
| `#reviser` | 73 | 0 | 51 | 61 | 3 | 1.63 | 0 | OK |
| `#investigations` | 108 | 19 | 48 | 61 | 6 | 2.79 | 0 | 2.79 écrans |
| `#module-a` | 107 | 0 | 68 | 61 | 0 | 1.65 | 1 | OK |
| `#module-b` | 154 | 0 | 41 | 61 | 14 | 5.37 | 0 | 5.37 écrans |
| `#module-c` | 144 | 0 | 39 | 61 | 13 | 4.94 | 0 | 4.94 écrans |
| `#module-d` | 78 | 0 | 32 | 61 | 8 | 3.11 | 0 | 3.11 écrans |
| `#cas` | 201 | 70 | 129 | 61 | 1 | 1.66 | 1 | OK |
| `#confidentialite` | 414 | 0 | 132 | 61 | 0 | 3.02 | 7 | > 200 mots; 3.02 écrans |

</details>

Fichiers de la passe 5 (dossier de travail du critique) :
- `measure5.py`, `metrics5-final.csv`
- `voir5.py`, `voircov5.json`, `leak5.py`, `overlap5.py`, `loop5.py`
- `check5.py`, `en5.py`, `a5d.py`, `clin5.txt`
- `shots5/`

---

## Passe 4 (cycle 10) : 21 novembre 2026

Arbre testé : `main` @ 9e0d9ef (commits 9b2451c, 7568ac0 et 9e0d9ef), site reconstruit. Même barème et même méthode que la passe 3 :
- 390 × 844, FR, niveau « Essentiel », stockage vierge, requêtes externes bloquées.
- **186 écrans mesurés**.
- **Équité de Voir simulée sur les 44 photos** avec la fonction de l'application (`OPH.voirZoneAt`, tolérance de 3 %) : toucher au hasard (grille de 10 000 points), toucher au centre, et 3 touchers au hasard en profitant de l'indice.
- 8 fiches relues cliniquement, dont les 4 corrigées.

### P4.1 Note : 8 / 10 (passes précédentes : 7, 6, 4)

**Ce qui est réglé**
- **Voir** :
  - Un toucher au hasard ne réussit plus que 3 à 16 % du temps (médiane ≈ 10 %) ; c'était jusqu'à 53 % en passe 3.
  - Un toucher au **centre** rate sur toutes les photos dont le signe n'est pas central. Quand le signe est central (21 entrées), il faut ensuite le **nommer** parmi 3 choix, soit 33 % de réussite au hasard.
  - Les signes diffus sont devenus des questions à 3 choix rédigés.
- **Boucle** : elle est tracée autour du signe et reste dans le cadre (`#g-gpao/voir`). Le « Bien vu » en double a disparu.
- **Comprendre** : un **mécanisme dessiné** sur 27/27 fiches, dans la palette (cobalt, encre, feutre fluo).
- **Figures** : il n'y a plus aucun écran de micro-fiche ou de carte sans figure (0/59, contre 10 en passe 3).
- **Héros de l'accueil** : photo de 160 px, crédit derrière une icône « i ».
- **`#reviser`** : une vraie grille, en cobalt, encre et fluo.
- **Arbres** : une vignette clinique sur 27/27.
- **Corrections cliniques** : les 4 sont faites.

**Pourquoi pas 9**
1. **Comprendre a deux boutons « suivant » pour le même mécanisme, sur les 27 fiches.** L'un fait avancer la figure (« Étape suivante »), l'autre la chaîne de texte (« Maillon suivant »). Ils ne sont pas synchronisés et leurs contenus diffèrent.
2. **La récompense pleine est donnée même après l'indice.**
3. **Les choix rédigés ont des biais** : la bonne réponse est souvent la plus longue, et le titre de la fiche la trahit parfois.
4. **Du texte interne « selon la source » subsiste** dans les listes de trouvailles.

### P4.2 Synthèse des mesures (passe 4)

Pour Comprendre, la colonne « Hors plafond » compte les étiquettes SVG ; hors étiquettes, les 27 écrans font 73–103 mots, sous les 120.

| Écran | n | Mots médiane (min–max) | Plafond | Hors plafond | Figures visibles médiane | Écrans à 0 figure | 1re figure (px, médiane) | Hauteur (écrans) médiane (max) | Mots au 1er écran (méd.) | Tableaux visibles | Arbre | Animations auto-rythmées |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Voir | 27 | 45 (40–57) | 60 | 0 | 1 | 0 | 209 | 1.3 (1.6) | 51 | 0 | 0/27 | 0 |
| Comprendre | 27 | 93 (78–142) | 120 | 6 | 3 | 0 | 236 | 1.6 (1.7) | 53 | 0 | 0/27 | 0 |
| Décider (hors arbre) | 27 | 106 (87–156) | 180 | 0 | 0 | 27 | — | 1.9 (2.2) | 91 | 0 | 27/27 | 0 |
| S’entraîner | 27 | 66 (59–77) | ≈200 (1 min) | 0 | 0 | 27 | — | 1.2 (1.3) | 76 | 0 | 0/27 | 0 |
| Investigations | 6 | 178 (167–200) | ≈200 (1 min) | 0 | 2 | 0 | 282 | 2.8 (2.9) | 57 | 0 | 0/6 | 0 |
| Module A : listes | 5 | 73 (65–237) | ≈200 (1 min) | 1 | 0 | 5 | — | 1.4 (3.3) | 60 | 0 | 0/5 | 0 |
| Module A : micro-fiches | 42 | 88 (22–179) | ≈200 (1 min) | 0 | 1 | 0 | 226 | 1.5 (2.0) | 77 | 0 | 0/42 | 0 |
| Capsules : cartes | 17 | 90 (61–134) | ≈200 (1 min) | 0 | 1 | 0 | 213 | 1.3 (2.1) | 83 | 0 | 0/17 | 0 |
| Hubs + accueil | 7 | 144 (71–318) | ≈200 (1 min) | 2 | 3 | 2 | 480 | 2.8 (5.4) | 49 | 0 | 0/7 | 0 |
| Accueil | 1 | 134 (134–134) | ≈200 (1 min) | 0 | 3 | 0 | 100 | 2.4 (2.4) | 71 | 0 | 0/1 | 0 |

Points saillants :
- Une fiche fait 344–410 mots au total.
- Comprendre passe de 1,24–1,43 à **1,53–1,7 écran**, à cause de la 3e figure.
- Décider fait 1,68–2,2 écrans.
- Paragraphes de plus de 3 lignes sur Décider : **29**, dont 27 sont les vignettes de 4 à 5 lignes (`#g-crise/decider` en a deux).
- Micro-fiches A au-dessus de 1,5 écran : 16/42 (maximum 1,96, `#a-retine/pupilles-neuro`).
- 0 animation auto-rythmée, 0 tableau visible, 0 erreur JavaScript.

### P4.3 Statut des MUST-FIX de la passe 3

| # (passe 3) | Défaut | Statut | Preuve |
|---|---|---|---|
| 1 | Récompense à mériter | **Corrigé en grande partie** | 1er toucher au hasard : 3–16 %. Toucher au centre : 0 % sur les photos à signe non central, 33 % (avec le nom à choisir) sur les centrales. Signes diffus en 3 choix. Reste : la récompense après l'indice (N2) et les biais des choix (N3). |
| 2 | Repli à 3 options écrit à la main | **Corrigé** | 27 entrées ont des `choices` rédigés ; le validateur interdit « source », « légende » et « photo de gauche » dans les choix. Le texte interne reste ailleurs (N4). |
| 3 | Mécanisme dessiné, chaîne en prédiction | **Partiel** | Mécanisme dessiné sur 27/27 ✓. Mais l'avancée se fait toujours au toucher, sans prédiction, et l'ancienne chaîne de texte reste en double (N1). |
| 4 | Héros de l'accueil | **Corrigé** | Photo de 160 px, crédit derrière « i », autocollant à côté de l'image. |
| 5 | Écrans sans figure, micro-fiches longues | **Corrigé en grande partie** | 0 écran sans figure. Micro-fiches au-dessus de 1,5 écran : 29 → 16 sur 42. Au-dessus de 120 mots : `a-imagerie/champs-visuels` 149, `a-physiologie/transparence` 133, `a-physiologie/aqueuse` 130, `a-physiologie/refraction` 129, `a-examen/av` 122. |
| 6 | Rendu de la boucle | **Corrigé** | Boucle autour du signe et dans le cadre ; un seul message de verdict. |
| 7 | Précision clinique (4 fiches) | **Corrigé**, avec des restes | `c-brulure` : « Roper-Hall ≥ II » dans le drapeau et dans l'arbre ✓. `g-gpao` : bilan explicite ✓. `g-crise` : vraie carte Québec ✓. `c-herpes` : « < 72 h » et piège « vu après 72 h » ✓. Restes : voir N5. |
| 8 | Vignettes des arbres | **Corrigé** | 27/27. Mais trop longues (N6). |
| 9 | `#reviser` en grille dans la palette | **Corrigé** | Grille de 2 colonnes sur téléphone, cobalt, encre et fluo. |

### P4.4 Nouveaux défauts

- **N1. Deux boutons « suivant » pour un seul mécanisme** (les 27 `#<fiche>/comprendre`).
  - **Constat** : la figure avance avec « Étape suivante → » (4 ou 5 étapes). Juste en dessous, la chaîne de texte avance avec « Maillon suivant (2/5) » et « Tout afficher ». Les deux ne sont **pas synchronisées** : après les 5 étapes de la figure, la chaîne est toujours au maillon 1.
  - **Contenus différents** : `g-crise` (figure 1 « Pupille mi-dilatée : l'iris frotte sur un cristallin épais » ; chaîne 1 « Œil prédisposé et déclencheur ») ; `g-pigmentaire` (4 étapes dans la figure, 6 maillons dans la chaîne).
  - **Correction** : un seul composant, dont les étapes reprennent `causal.steps` ; supprimer la chaîne de texte. Supprimer aussi la paire normal/pathologique (œil vu de face) quand le mécanisme existe, ce qui ramène Comprendre sous 1,4 écran.
- **N2. Récompense pleine après l'indice.**
  - **Constat** : après 2 échecs, un cercle d'indice apparaît. Toucher son centre donne **« Dans le mille ! »** (vérifié sur `#g-crise/voir`), le même autocollant qu'une trouvaille du premier coup.
  - **Simulation** : sur les 16 photos à toucher simple, 3 touchers au hasard avec l'indice réussissent **34 à 54 %** du temps (`#g-crise`, `#g-neovasculaire` 54 % ; `#c-depots`, `#g-pigmentaire` 53 %).
  - **Correction** : après l'indice, un verdict neutre « Trouvé avec l'indice », sans autocollant et sans compter comme réussite.
- **N3. Biais des choix rédigés.**
  - La bonne réponse est la plus longue dans **15/27** cas (56 %, pour 33 % attendus). Le projet avait déjà corrigé ce biais dans les QCM.
  - Le **titre de la fiche** contient la bonne réponse dans 5 cas :

    | Route | Bonne réponse | Titre |
    |---|---|---|
    | `#c-fuchs/voir` | « Guttae endothéliales » | « Dystrophie endothéliale… » |
    | `#c-surface/voir` | « Follicules conjonctivaux » | « Conjonctivites… » |
    | `#g-pxf/voir` | « Disque central de pseudoexfoliation » | « Glaucome pseudo-exfoliatif » |
    | `#g-cristallin/voir` | « Cristallin blanc opaque » | « …liés au cristallin » |
    | `#a-retine/cataracte-corticale-scp` | « Plaque sous-capsulaire postérieure » | « …sous-capsulaire postérieure » |

  - Cas limite : `#c-keratocone/voir` (« Cornée bombée en cône »).
- **N4. Texte interne encore visible.**
  - **Constat** : il reste environ 42 occurrences de « Selon la source : … », « selon la légende source », « La source parle d'une membrane… » et « Photo de gauche (OD selon la légende) ». Elles sont dans les listes `reveal`, affichées dans « Autres trouvailles », par exemple sur `#a-retine/macula-chirurgicale`.
  - **Répartition** : `data/ext-photos.js` 14, `data/ext-a5-b.js` 9, `data/ext-glaucome-a.js` 5, `data/ext-cornee-b.js` 4, `data/photos.js` 3, `data/ext-cornee-a.js` 3, `data/ext-a5-a.js` 2, `data/ext-glaucome-b.js` 2.
  - Le commit 7568ac0 n'a nettoyé que les légendes.
- **N5. Sources et précision clinique.**
  - `g-crise`, carte Québec : « la forme IV peut manquer (pénurie canadienne 2026) ». C'est une affirmation datée **sans source** : la sourcer (Santé Canada, pénuries de médicaments) ou la retirer.
  - `c-keratocone` : « CXL dès le diagnostic (consensus 2025) ». À citer : le consensus de référence connu date de 2015.
  - `g-dev` : un pont au timolol 0,25 % chez le nourrisson **sans l'avertissement apnée / bradycardie**, qui figurait pourtant en passe 1.
  - `c-brulure` : la carte « Quand référer » dit « cornée opaque », alors que le grade II correspond à une cornée « voilée ». Harmoniser avec le drapeau.
- **N6. Vignettes trop longues.** Elles font 4 à 5 lignes sur téléphone sur les 27 écrans Décider (règle : 3 lignes au plus). Viser 25 mots.

### P4.5 Revue clinique (8 fiches, niveau externe)

Fiches relues : `c-brulure`, `g-gpao`, `g-crise`, `c-herpes` (les 4 corrigées), puis `c-atypiques`, `g-hto`, `c-keratocone` et `g-dev`.

**Juste et utile :**
- Irrigation de 30 min au moins jusqu'à pH 7,0–7,5 ; Roper-Hall ≥ II → ophtalmologie immédiatement.
- Bilan GPAO (PIO, pachymétrie, gonioscopie, OCT, champ) ; cible 20–30 %.
- Crise : appel immédiat, doses justes, antiémétique ; carte Québec utile (appeler avant le transfert, amorcer les gouttes).
- Zona < 72 h et piège « après 72 h ».
- Atypiques : aucun stéroïde, retrait de la lentille, le jour même ; biguanides en préparation magistrale.
- HTO : calculateur OHTS-EGPS, cible −20 %.
- Kératocône : arrêt du frottement, CXL si progression, hydrops = immédiat.
- Glaucome congénital : dans les 24 h ; CHU Sainte-Justine, Hôpital de Montréal pour enfants, CHU de Québec.

**À corriger** : voir N5.

### P4.6 Direction artistique
- **Cohérente.** Les schémas de mécanisme, le héros, la grille Réviser et la boucle au feutre reprennent tous la palette cobalt, encre et fluo. C'est la meilleure cohérence depuis le début.
- **Restes hors charte** : les encadrés « High yield » (menthe, `--teal-wash`) et « Le signe qui compte » (vert pâle) ; le badge « High yield » en anglais.
- La double commande de Comprendre (N1) brouille l'écran le mieux dessiné.

### P4.7 MUST-FIX restants (classés)

1. **Un seul composant pour le mécanisme** : les 27 `#<fiche>/comprendre`. Supprimer la chaîne de texte ou la synchroniser, aligner les étapes sur `causal.steps`, retirer la paire normal/pathologique en double.
   - Fichiers : `src/views.js` (branche `comprendre`), `src/figures-mech.js`, `data/fiches-*.js` (`causal`).
2. **Pas de récompense pleine après l'indice** : `#g-crise/voir`, `#g-neovasculaire/voir`, `#c-depots/voir`, `#g-pigmentaire/voir` et les 16 photos à toucher simple.
   - Fichier : `src/core.js` (`voirTap`, `voirReveal`).
3. **Choix sans biais** : longueur (15/27) et fuite par le titre (`#c-fuchs/voir`, `#c-surface/voir`, `#g-pxf/voir`, `#g-cristallin/voir`, `#a-retine/cataracte-corticale-scp`, et `#c-keratocone/voir`). Ajouter ces deux contrôles au validateur.
   - Fichiers : `data/voir-hotspots.js`, `tools/validate.js`.
4. **Texte interne dans les trouvailles** : environ 42 occurrences, par exemple sur `#a-retine/macula-chirurgicale`. Étendre le validateur aux champs `reveal`.
   - Fichiers : la liste de N4, `tools/validate.js`.
5. **Sources et précision clinique** : pénurie de 2026 (`#g-crise/decider`), consensus 2025 (`#c-keratocone/decider`), avertissement timolol chez le nourrisson (`#g-dev/decider`), « opaque » contre « voilée » (`#c-brulure/decider`).
   - Fichiers : `data/fiches-glaucome.js`, `data/fiches-cornee*.js`, `data/ext-*.js`.
6. **Vignettes de 25 mots au plus** (27 `#<fiche>/decider`).
   - Fichiers : `data/fiches-*.js` (`cat.vignette`).
7. **Micro-fiches A** : 16/42 au-dessus de 1,5 écran ; 5 au-dessus de 120 mots (liste en P4.3).
   - Fichier : `data/module-a.js`.

### Annexe P4. Mesures par écran (passe 4 : 186 écrans)

<details><summary>186 écrans</summary>

| Écran | Mots visibles | dont étiquettes SVG | Mots 1er écran | Contenu commence à (px) | Figures | Hauteur (écrans) | Paragraphes > 3 lignes | Verdict |
|---|---|---|---|---|---|---|---|---|
| `#c-secheresse/voir` | 56 | 0 | 41 | 224 | 1 | 1.43 | 0 | OK |
| `#c-secheresse/comprendre` | 90 | 1 | 42 | 224 | 3 | 1.7 | 0 | OK |
| `#c-secheresse/decider` | 153 | 0 | 95 | 224 | 0 | 1.93 | 1 | paragraphe > 3 lignes |
| `#c-secheresse/entrainer` | 68 | 0 | 77 | 224 | 0 | 1.23 | 0 | OK |
| `#c-bacterienne/voir` | 44 | 0 | 51 | 207 | 1 | 1.27 | 0 | OK |
| `#c-bacterienne/comprendre` | 81 | 1 | 41 | 207 | 3 | 1.62 | 0 | OK |
| `#c-bacterienne/decider` | 157 | 0 | 88 | 207 | 0 | 1.95 | 1 | paragraphe > 3 lignes |
| `#c-bacterienne/entrainer` | 71 | 0 | 77 | 207 | 0 | 1.16 | 0 | OK |
| `#c-atypiques/voir` | 43 | 0 | 52 | 207 | 1 | 1.2 | 0 | OK |
| `#c-atypiques/comprendre` | 85 | 1 | 43 | 207 | 3 | 1.68 | 0 | OK |
| `#c-atypiques/decider` | 155 | 0 | 103 | 207 | 0 | 1.93 | 1 | paragraphe > 3 lignes |
| `#c-atypiques/entrainer` | 67 | 0 | 75 | 207 | 0 | 1.2 | 0 | OK |
| `#c-herpes/voir` | 51 | 0 | 58 | 204 | 1 | 1.29 | 0 | OK |
| `#c-herpes/comprendre` | 84 | 3 | 48 | 204 | 3 | 1.65 | 0 | OK |
| `#c-herpes/decider` | 195 | 0 | 90 | 204 | 0 | 2.07 | 2 | paragraphe > 3 lignes |
| `#c-herpes/entrainer` | 64 | 0 | 74 | 204 | 0 | 1.19 | 0 | OK |
| `#c-keratocone/voir` | 45 | 0 | 51 | 207 | 1 | 1.28 | 0 | OK |
| `#c-keratocone/comprendre` | 137 | 34 | 90 | 207 | 3 | 1.66 | 0 | OK |
| `#c-keratocone/decider` | 146 | 0 | 87 | 207 | 0 | 1.88 | 1 | paragraphe > 3 lignes |
| `#c-keratocone/entrainer` | 65 | 0 | 70 | 207 | 0 | 1.14 | 0 | OK |
| `#c-fuchs/voir` | 45 | 0 | 53 | 224 | 1 | 1.23 | 0 | OK |
| `#c-fuchs/comprendre` | 114 | 37 | 79 | 224 | 3 | 1.67 | 0 | OK |
| `#c-fuchs/decider` | 135 | 0 | 89 | 224 | 0 | 1.68 | 1 | paragraphe > 3 lignes |
| `#c-fuchs/entrainer` | 65 | 0 | 76 | 224 | 0 | 1.19 | 0 | OK |
| `#c-erosion/voir` | 41 | 0 | 51 | 224 | 1 | 1.36 | 0 | OK |
| `#c-erosion/comprendre` | 86 | 1 | 45 | 224 | 3 | 1.67 | 0 | OK |
| `#c-erosion/decider` | 156 | 0 | 97 | 224 | 0 | 1.91 | 1 | paragraphe > 3 lignes |
| `#c-erosion/entrainer` | 62 | 0 | 75 | 224 | 0 | 1.11 | 0 | OK |
| `#c-pterygion/voir` | 46 | 0 | 55 | 224 | 1 | 1.3 | 0 | OK |
| `#c-pterygion/comprendre` | 134 | 34 | 98 | 224 | 3 | 1.65 | 0 | OK |
| `#c-pterygion/decider` | 135 | 0 | 90 | 224 | 0 | 1.8 | 1 | paragraphe > 3 lignes |
| `#c-pterygion/entrainer` | 59 | 0 | 71 | 224 | 0 | 1.19 | 0 | OK |
| `#c-greffe/voir` | 47 | 0 | 57 | 224 | 1 | 1.3 | 0 | OK |
| `#c-greffe/comprendre` | 86 | 0 | 44 | 224 | 3 | 1.62 | 0 | OK |
| `#c-greffe/decider` | 159 | 0 | 96 | 224 | 0 | 1.84 | 1 | paragraphe > 3 lignes |
| `#c-greffe/entrainer` | 64 | 0 | 77 | 224 | 0 | 1.11 | 0 | OK |
| `#c-brulure/voir` | 57 | 0 | 44 | 207 | 1 | 1.43 | 0 | OK |
| `#c-brulure/comprendre` | 132 | 37 | 84 | 207 | 3 | 1.59 | 0 | OK |
| `#c-brulure/decider` | 157 | 0 | 82 | 207 | 0 | 1.92 | 1 | paragraphe > 3 lignes |
| `#c-brulure/entrainer` | 64 | 0 | 70 | 207 | 0 | 1.12 | 0 | OK |
| `#c-dystrophies/voir` | 55 | 0 | 38 | 207 | 1 | 1.43 | 0 | OK |
| `#c-dystrophies/comprendre` | 99 | 1 | 53 | 207 | 3 | 1.65 | 0 | OK |
| `#c-dystrophies/decider` | 138 | 0 | 84 | 207 | 0 | 1.72 | 1 | paragraphe > 3 lignes |
| `#c-dystrophies/entrainer` | 69 | 0 | 75 | 207 | 0 | 1.23 | 0 | OK |
| `#c-depots/voir` | 42 | 0 | 50 | 224 | 1 | 1.3 | 0 | OK |
| `#c-depots/comprendre` | 101 | 0 | 57 | 224 | 3 | 1.64 | 0 | OK |
| `#c-depots/decider` | 154 | 0 | 98 | 224 | 0 | 1.8 | 1 | paragraphe > 3 lignes |
| `#c-depots/entrainer` | 69 | 0 | 80 | 224 | 0 | 1.18 | 0 | OK |
| `#c-surface/voir` | 43 | 0 | 55 | 224 | 1 | 1.27 | 0 | OK |
| `#c-surface/comprendre` | 90 | 0 | 43 | 224 | 3 | 1.7 | 0 | OK |
| `#c-surface/decider` | 159 | 0 | 94 | 224 | 0 | 2.03 | 1 | paragraphe > 3 lignes |
| `#c-surface/entrainer` | 70 | 0 | 81 | 224 | 0 | 1.25 | 0 | OK |
| `#c-peripherie/voir` | 42 | 0 | 33 | 224 | 1 | 1.43 | 0 | OK |
| `#c-peripherie/comprendre` | 94 | 0 | 55 | 224 | 3 | 1.64 | 0 | OK |
| `#c-peripherie/decider` | 158 | 0 | 94 | 224 | 0 | 1.93 | 1 | paragraphe > 3 lignes |
| `#c-peripherie/entrainer` | 77 | 0 | 87 | 224 | 0 | 1.28 | 0 | OK |
| `#g-gpao/voir` | 48 | 0 | 54 | 207 | 1 | 1.29 | 0 | OK |
| `#g-gpao/comprendre` | 93 | 7 | 53 | 207 | 3 | 1.65 | 0 | OK |
| `#g-gpao/decider` | 156 | 0 | 94 | 207 | 0 | 1.82 | 1 | paragraphe > 3 lignes |
| `#g-gpao/entrainer` | 60 | 0 | 69 | 207 | 0 | 1.15 | 0 | OK |
| `#g-hto/voir` | 42 | 0 | 53 | 204 | 1 | 1.22 | 0 | OK |
| `#g-hto/comprendre` | 142 | 55 | 102 | 204 | 3 | 1.6 | 0 | OK |
| `#g-hto/decider` | 148 | 0 | 87 | 204 | 0 | 1.87 | 1 | paragraphe > 3 lignes |
| `#g-hto/entrainer` | 59 | 0 | 69 | 204 | 0 | 1.09 | 0 | OK |
| `#g-gpn/voir` | 43 | 0 | 47 | 207 | 1 | 1.3 | 0 | OK |
| `#g-gpn/comprendre` | 108 | 27 | 67 | 207 | 3 | 1.65 | 0 | OK |
| `#g-gpn/decider` | 153 | 0 | 85 | 207 | 0 | 1.78 | 1 | paragraphe > 3 lignes |
| `#g-gpn/entrainer` | 59 | 0 | 67 | 207 | 0 | 1.17 | 0 | OK |
| `#g-fermeture/voir` | 46 | 0 | 34 | 224 | 1 | 1.45 | 0 | OK |
| `#g-fermeture/comprendre` | 123 | 40 | 87 | 224 | 3 | 1.61 | 0 | OK |
| `#g-fermeture/decider` | 152 | 0 | 88 | 224 | 0 | 1.93 | 1 | paragraphe > 3 lignes |
| `#g-fermeture/entrainer` | 69 | 0 | 80 | 224 | 0 | 1.2 | 0 | OK |
| `#g-crise/voir` | 46 | 0 | 57 | 207 | 1 | 1.13 | 0 | OK |
| `#g-crise/comprendre` | 82 | 1 | 46 | 207 | 3 | 1.63 | 0 | OK |
| `#g-crise/decider` | 207 | 0 | 92 | 207 | 0 | 2.2 | 2 | paragraphe > 3 lignes |
| `#g-crise/entrainer` | 66 | 0 | 76 | 207 | 0 | 1.14 | 0 | OK |
| `#g-pxf/voir` | 44 | 0 | 51 | 207 | 1 | 1.27 | 0 | OK |
| `#g-pxf/comprendre` | 84 | 1 | 42 | 207 | 3 | 1.63 | 0 | OK |
| `#g-pxf/decider` | 178 | 0 | 92 | 207 | 0 | 1.99 | 1 | paragraphe > 3 lignes |
| `#g-pxf/entrainer` | 63 | 0 | 69 | 207 | 0 | 1.17 | 0 | OK |
| `#g-pigmentaire/voir` | 43 | 0 | 47 | 224 | 1 | 1.3 | 0 | OK |
| `#g-pigmentaire/comprendre` | 91 | 1 | 48 | 224 | 3 | 1.62 | 0 | OK |
| `#g-pigmentaire/decider` | 151 | 0 | 86 | 224 | 0 | 1.84 | 1 | paragraphe > 3 lignes |
| `#g-pigmentaire/entrainer` | 73 | 0 | 82 | 224 | 0 | 1.14 | 0 | OK |
| `#g-neovasculaire/voir` | 43 | 0 | 50 | 207 | 1 | 1.24 | 0 | OK |
| `#g-neovasculaire/comprendre` | 124 | 37 | 83 | 207 | 3 | 1.62 | 0 | OK |
| `#g-neovasculaire/decider` | 149 | 0 | 91 | 207 | 0 | 1.82 | 1 | paragraphe > 3 lignes |
| `#g-neovasculaire/entrainer` | 60 | 0 | 66 | 207 | 0 | 1.18 | 0 | OK |
| `#g-secondaires/voir` | 40 | 0 | 49 | 207 | 1 | 1.18 | 0 | OK |
| `#g-secondaires/comprendre` | 81 | 1 | 44 | 207 | 3 | 1.65 | 1 | paragraphe > 3 lignes |
| `#g-secondaires/decider` | 153 | 0 | 90 | 207 | 0 | 1.91 | 1 | paragraphe > 3 lignes |
| `#g-secondaires/entrainer` | 70 | 0 | 78 | 207 | 0 | 1.23 | 0 | OK |
| `#g-postop/voir` | 45 | 0 | 55 | 204 | 1 | 1.28 | 0 | OK |
| `#g-postop/comprendre` | 78 | 1 | 46 | 204 | 3 | 1.6 | 0 | OK |
| `#g-postop/decider` | 150 | 0 | 90 | 204 | 0 | 1.86 | 1 | paragraphe > 3 lignes |
| `#g-postop/entrainer` | 72 | 0 | 81 | 204 | 0 | 1.16 | 0 | OK |
| `#g-papille/voir` | 44 | 0 | 57 | 224 | 1 | 1.19 | 0 | OK |
| `#g-papille/comprendre` | 83 | 1 | 60 | 224 | 3 | 1.58 | 0 | OK |
| `#g-papille/decider` | 157 | 0 | 91 | 224 | 0 | 1.85 | 1 | paragraphe > 3 lignes |
| `#g-papille/entrainer` | 64 | 0 | 77 | 224 | 0 | 1.23 | 0 | OK |
| `#g-cristallin/voir` | 55 | 0 | 45 | 224 | 1 | 1.55 | 0 | OK |
| `#g-cristallin/comprendre` | 110 | 37 | 86 | 224 | 3 | 1.56 | 0 | OK |
| `#g-cristallin/decider` | 167 | 0 | 95 | 224 | 0 | 2.01 | 1 | paragraphe > 3 lignes |
| `#g-cristallin/entrainer` | 73 | 0 | 86 | 224 | 0 | 1.25 | 0 | OK |
| `#g-dev/voir` | 48 | 0 | 57 | 224 | 1 | 1.4 | 0 | OK |
| `#g-dev/comprendre` | 110 | 37 | 87 | 224 | 3 | 1.53 | 0 | OK |
| `#g-dev/decider` | 171 | 0 | 97 | 224 | 0 | 1.93 | 1 | paragraphe > 3 lignes |
| `#g-dev/entrainer` | 76 | 0 | 89 | 224 | 0 | 1.24 | 0 | OK |
| `#inv-bscan` | 200 | 2 | 54 | 61 | 2 | 2.87 | 2 | 2.87 écrans |
| `#inv-ascan` | 169 | 28 | 79 | 61 | 2 | 2.48 | 0 | OK |
| `#inv-oct` | 167 | 6 | 66 | 61 | 2 | 2.38 | 0 | OK |
| `#inv-gonio` | 176 | 2 | 52 | 61 | 2 | 2.88 | 0 | 2.88 écrans |
| `#inv-fondoeil` | 189 | 32 | 44 | 61 | 2 | 2.82 | 1 | 2.82 écrans |
| `#inv-cv` | 181 | 3 | 61 | 61 | 2 | 2.78 | 0 | 2.78 écrans |
| `#a-anatomie` | 73 | 0 | 63 | 61 | 0 | 1.35 | 0 | OK |
| `#a-anatomie/globe` | 127 | 62 | 138 | 202 | 1 | 1.19 | 1 | OK |
| `#a-anatomie/cornee` | 60 | 18 | 72 | 202 | 1 | 1 | 1 | OK |
| `#a-anatomie/angle` | 93 | 47 | 102 | 202 | 2 | 1.13 | 1 | OK |
| `#a-anatomie/papille` | 22 | 3 | 35 | 202 | 1 | 1 | 0 | OK |
| `#a-anatomie/annexes` | 30 | 19 | 43 | 224 | 1 | 1 | 0 | OK |
| `#a-anatomie/photos` | 23 | 0 | 32 | 202 | 1 | 1 | 0 | OK |
| `#a-physiologie` | 75 | 0 | 60 | 61 | 0 | 1.45 | 0 | OK |
| `#a-physiologie/aqueuse` | 144 | 14 | 123 | 202 | 1 | 1.52 | 0 | > 1,5 écran |
| `#a-physiologie/pio` | 108 | 17 | 119 | 202 | 1 | 1.23 | 0 | OK |
| `#a-physiologie/film-lacrymal` | 91 | 0 | 82 | 202 | 1 | 1.39 | 0 | OK |
| `#a-physiologie/transparence` | 151 | 18 | 103 | 202 | 1 | 1.76 | 0 | > 1,5 écran |
| `#a-physiologie/refraction` | 129 | 0 | 110 | 202 | 1 | 1.46 | 0 | OK |
| `#a-physiologie/pupille` | 105 | 12 | 113 | 202 | 1 | 1.26 | 1 | OK |
| `#a-examen` | 73 | 0 | 45 | 61 | 0 | 1.61 | 0 | OK |
| `#a-examen/av` | 145 | 23 | 112 | 202 | 1 | 1.58 | 1 | > 1,5 écran |
| `#a-examen/pupilles` | 96 | 6 | 78 | 202 | 1 | 1.44 | 0 | OK |
| `#a-examen/lampe` | 118 | 21 | 111 | 202 | 1 | 1.43 | 0 | OK |
| `#a-examen/fluoresceine` | 96 | 0 | 73 | 224 | 1 | 1.57 | 0 | > 1,5 écran |
| `#a-examen/tonometrie` | 96 | 0 | 78 | 202 | 1 | 1.48 | 0 | OK |
| `#a-examen/gonioscopie` | 118 | 19 | 102 | 202 | 1 | 1.5 | 0 | OK |
| `#a-examen/pachymetrie` | 96 | 0 | 82 | 202 | 1 | 1.4 | 0 | OK |
| `#a-examen/papille` | 155 | 42 | 108 | 202 | 3 | 1.71 | 0 | > 1,5 écran |
| `#a-imagerie` | 65 | 0 | 51 | 61 | 0 | 1.4 | 0 | OK |
| `#a-imagerie/structure` | 138 | 42 | 97 | 202 | 3 | 1.46 | 1 | OK |
| `#a-imagerie/oct` | 128 | 27 | 120 | 224 | 1 | 1.45 | 0 | OK |
| `#a-imagerie/topographie` | 110 | 17 | 97 | 202 | 2 | 1.5 | 0 | OK |
| `#a-imagerie/champs-visuels` | 179 | 30 | 158 | 202 | 3 | 1.5 | 0 | OK |
| `#a-imagerie/speculaire` | 86 | 0 | 76 | 202 | 1 | 1.42 | 0 | OK |
| `#a-retine` | 237 | 0 | 60 | 61 | 0 | 3.29 | 0 | > 200 mots; 3.29 écrans |
| `#a-retine/cataracte-nucleaire` | 70 | 0 | 63 | 202 | 1 | 1.49 | 0 | OK |
| `#a-retine/cataracte-corticale-scp` | 68 | 0 | 55 | 224 | 1 | 1.53 | 0 | > 1,5 écran |
| `#a-retine/cataracte-mature` | 99 | 0 | 91 | 257 | 1 | 1.47 | 1 | OK |
| `#a-retine/opacification-capsulaire` | 76 | 0 | 61 | 202 | 1 | 1.46 | 0 | OK |
| `#a-retine/bscan` | 78 | 0 | 75 | 224 | 1 | 1.41 | 0 | OK |
| `#a-retine/decollement-retine` | 74 | 0 | 57 | 224 | 1 | 1.54 | 0 | > 1,5 écran |
| `#a-retine/decollement-choroidien` | 67 | 0 | 56 | 224 | 1 | 1.53 | 0 | > 1,5 écran |
| `#a-retine/dmla` | 73 | 0 | 60 | 257 | 1 | 1.57 | 0 | > 1,5 écran |
| `#a-retine/retinopathie-diabetique` | 62 | 0 | 53 | 257 | 1 | 1.57 | 0 | > 1,5 écran |
| `#a-retine/occlusions-retiniennes` | 67 | 0 | 55 | 224 | 1 | 1.54 | 0 | > 1,5 écran |
| `#a-retine/retinopathie-hypertensive` | 68 | 0 | 55 | 257 | 1 | 1.61 | 0 | > 1,5 écran |
| `#a-retine/macula-chirurgicale` | 78 | 0 | 49 | 257 | 1 | 1.81 | 0 | > 1,5 écran |
| `#a-retine/peripherie-vitre` | 70 | 0 | 58 | 257 | 1 | 1.58 | 0 | > 1,5 écran |
| `#a-retine/inflammation-infection` | 71 | 0 | 70 | 224 | 1 | 1.47 | 0 | OK |
| `#a-retine/papille-oedeme` | 73 | 0 | 78 | 224 | 1 | 1.4 | 0 | OK |
| `#a-retine/pupilles-neuro` | 71 | 0 | 34 | 257 | 1 | 1.96 | 0 | > 1,5 écran |
| `#a-retine/tumeurs-toxicite-trauma` | 63 | 0 | 44 | 257 | 1 | 1.61 | 0 | > 1,5 écran |
| `#b-bases` | 62 | 0 | 80 | 212 | 1 | 1.29 | 1 | OK |
| `#b-bases/2` | 133 | 62 | 151 | 212 | 1 | 1.18 | 1 | OK |
| `#b-bases/3` | 108 | 18 | 67 | 234 | 2 | 1.51 | 1 | > 1,5 écran |
| `#b-bases/4` | 82 | 12 | 98 | 212 | 1 | 1.12 | 1 | OK |
| `#b-bases/5` | 61 | 0 | 74 | 212 | 1 | 1.15 | 1 | OK |
| `#b-bases/6` | 103 | 18 | 62 | 212 | 2 | 1.51 | 1 | > 1,5 écran |
| `#b-bases/7` | 92 | 18 | 105 | 212 | 1 | 1.1 | 1 | OK |
| `#b-bases/8` | 91 | 4 | 83 | 212 | 1 | 1.49 | 0 | OK |
| `#b-bases/9` | 93 | 18 | 79 | 212 | 1 | 1.94 | 1 | > 1,5 écran |
| `#c-bases` | 63 | 0 | 78 | 212 | 1 | 1.26 | 1 | OK |
| `#c-bases/2` | 134 | 62 | 151 | 212 | 1 | 1.18 | 1 | OK |
| `#c-bases/3` | 90 | 18 | 108 | 234 | 1 | 1.09 | 1 | OK |
| `#c-bases/4` | 79 | 0 | 95 | 212 | 1 | 1.13 | 1 | OK |
| `#c-bases/5` | 86 | 0 | 40 | 212 | 2 | 1.53 | 1 | > 1,5 écran |
| `#c-bases/6` | 88 | 18 | 101 | 212 | 1 | 1.08 | 1 | OK |
| `#c-bases/7` | 93 | 4 | 84 | 212 | 1 | 1.51 | 0 | > 1,5 écran |
| `#c-bases/8` | 76 | 3 | 54 | 212 | 1 | 2.13 | 1 | > 1,5 écran |
| `#accueil` | 134 | 0 | 71 | 61 | 3 | 2.36 | 1 | OK |
| `#apprendre` | 318 | 0 | 72 | 61 | 0 | 4.42 | 0 | > 200 mots; 4.42 écrans |
| `#reviser` | 71 | 0 | 49 | 61 | 3 | 1.59 | 0 | OK |
| `#investigations` | 108 | 19 | 48 | 61 | 6 | 2.79 | 0 | 2.79 écrans |
| `#module-a` | 107 | 0 | 68 | 61 | 0 | 1.65 | 1 | OK |
| `#module-b` | 154 | 0 | 41 | 61 | 14 | 5.37 | 0 | 5.37 écrans |
| `#module-c` | 144 | 0 | 39 | 61 | 13 | 4.94 | 0 | 4.94 écrans |
| `#cas` | 201 | 70 | 129 | 61 | 1 | 1.66 | 1 | OK |

</details>

Fichiers de la passe 4 (dossier de travail du critique) :
- `measure4.py`, `metrics4-final.csv`
- `voir4.py`, `voircov4.json` (équité de Voir)
- `leak4.py` (fuites par le titre)
- `mech4.py`, `loop4.py`, `clin4.txt`
- `shots4/`

---

## Passe 3 (cycle 9) : 21 novembre 2026

Arbre testé : `main` @ ac13f46, site reconstruit. Même méthode et même barème que la passe 2 :
- 390 × 844, FR, niveau « Essentiel », stockage vierge, requêtes externes bloquées.
- **186 écrans mesurés** : 108 écrans de fiche, 6 Investigations, 5 listes et 42 micro-fiches A, 17 cartes de capsule, 8 hubs.
- 20 captures ; 44 photos Voir testées une à une (coordonnées des zones, toucher simulé, couverture d'un toucher au hasard).
- 10 fiches relues cliniquement (arbre, drapeaux, bloc Traitement).

### P3.1 Note : 7 / 10 (passe 2 : 6 ; passe 1 : 4)

**Le gain du cycle 9 : la boucle est enfin réelle.**
- « Touche le signe » fonctionne sur 42 des 44 photos (27 fiches et 15 micro-fiches A5). Une erreur affiche « pas ici ». Au 2e échec, une zone d'indice apparaît ; au 3e, la réponse est révélée sans récompense.
- Les budgets de texte sont tenus partout :

  | Écran | Mots | Plafond |
  |---|---|---|
  | Voir | 40–51 | 60 |
  | Comprendre (hors étiquettes SVG) | 70–103 | 120 |
  | Décider (hors arbre) | 87–131 | 180 |

- Aucun paragraphe de plus de 3 lignes sur Voir ; puces « essentiel » ≤ 15 mots.
- Comprendre tient en 1,24–1,43 écran.
- Aucune animation auto-rythmée : le TBUT ne démarre plus seul.

**Pourquoi pas 8 :**
1. **La récompense se gagne sans regarder.** Un toucher au **centre** de la photo donne « Bien vu ! » sur **25 des 42** photos, dont 12 des 14 fiches cornée. Sur `c-secheresse`, un toucher au hasard réussit 53 % du temps (vérifié : un toucher en bas à gauche obtient « Exact ! »).
2. **Comprendre ne dessine toujours aucun mécanisme** (0/27). La chaîne reste du texte qu'on dévoile.
3. **Les finitions régressent par endroits** : options de repli incohérentes, héros de l'accueil illisible, palette de Réviser hors charte.

### P3.2 Synthèse des mesures (passe 3)

Pour Comprendre, la colonne « Hors plafond » compte les étiquettes SVG des schémas ; hors étiquettes, les 27 écrans sont ≤ 120 mots.

| Écran | n | Mots médiane (min–max) | Plafond | Hors plafond | Figures visibles médiane | Écrans à 0 figure | 1re figure (px, médiane) | Hauteur (écrans) médiane (max) | Mots au 1er écran (méd.) | Tableaux visibles | Arbre | Animations auto-rythmées |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Voir | 27 | 44 (40–51) | 60 | 0 | 1 | 0 | 209 | 1.3 (1.4) | 52 | 0 | 0/27 | 0 |
| Comprendre | 27 | 94 (73–141) | 120 | 6 | 2 | 0 | 236 | 1.4 (1.4) | 88 | 0 | 0/27 | 0 |
| Décider (hors arbre) | 27 | 106 (87–131) | 180 | 0 | 0 | 27 | — | 1.8 (1.9) | 79 | 0 | 27/27 | 0 |
| S’entraîner | 27 | 66 (59–77) | ≈200 (1 min) | 0 | 0 | 27 | — | 1.2 (1.3) | 76 | 0 | 0/27 | 0 |
| Investigations | 6 | 178 (167–200) | ≈200 (1 min) | 0 | 2 | 0 | 282 | 2.8 (2.9) | 57 | 0 | 0/6 | 0 |
| Module A : listes | 5 | 73 (65–237) | ≈200 (1 min) | 1 | 0 | 5 | — | 1.4 (3.3) | 60 | 0 | 0/5 | 0 |
| Module A : micro-fiches | 42 | 102 (22–205) | ≈200 (1 min) | 1 | 1 | 3 | 226 | 1.6 (2.1) | 83 | 0 | 0/42 | 0 |
| Capsules : cartes | 17 | 79 (57–134) | ≈200 (1 min) | 0 | 1 | 7 | 213 | 1.2 (1.6) | 75 | 0 | 0/17 | 0 |
| Hubs + accueil | 7 | 144 (103–318) | ≈200 (1 min) | 2 | 1 | 3 | 467 | 2.8 (5.4) | 63 | 0 | 0/7 | 0 |
| Accueil | 1 | 141 (141–141) | ≈200 (1 min) | 0 | 2 | 0 | — | 2.3 (2.3) | 81 | 0 | 0/1 | 0 |

### P3.3 Statut des MUST-FIX de la passe 2

| # (passe 2) | Défaut | Statut | Preuve |
|---|---|---|---|
| 1 | Boucle Observe → Réponds → Révèle factice | **Partiel** | Boucle réelle sur 42/44 photos, avec feutre et autocollant seulement si c'est juste ✓. Mais elle est gagnable (P3.4-N1), et le repli à 3 options est incohérent (N2). |
| 2 | Comprendre : mécanisme, 1er écran utile | **Partiel** | Paire normal/pathologique côte à côte, 1er écran utile (88 mots en médiane) ✓. Mais la figure montre toujours un **signe** ; aucun schéma de mécanisme (0/27). La chaîne se dévoile au toucher, sans prédiction. |
| 3 | Cohérence des délais de référence | **Corrigé** | `g-crise` : « Crise = appel immédiat ; si PIO inchangée à 1 h : mannitol, sur avis ». Les drapeaux, l'arbre et « Quand référer » concordent sur les 10 fiches relues (outil `tools/check-delays.js`). |
| 4 | Dépassements restants | **Corrigé en grande partie** | Voir au-dessus de 60 mots : 14 → 0/27. Paragraphes de plus de 3 lignes : 27 → 0/27. Puces de plus de 15 mots : 4 → 0. Micro-fiches au-dessus de 200 mots (hors étiquettes) : 2 → 0. **Reste** : 10 écrans sans figure, la même liste qu'en passe 2. |
| 5 | Murs et hubs | **Partiel** | Corrigés : `#cas` (bande « Cas en images », vignettes, 201 mots, 1,7 écran) et la bannière Module C (photos de papille). Restent : `#b-bases/8` (17 pastilles, 0 figure) et `#reviser` (toujours une liste verticale de 8 cartes, voir N5). |

SHOULD-FIX de la passe 2 :
- **Corrigés** :
  - « Je suis prêt à répondre » retiré (la pratique s'ouvre sur les options).
  - Schéma OCT de pratique redessiné.
  - TBUT sans démarrage automatique.
  - « J'ai terminé cette section » retiré ; un seul bouton fluo sur S'entraîner.
- **Non corrigés** :
  - Arbres sans vignette clinique : `src/tree.js` lit `f.cat.vignette`, mais **0/27** fiches en ont une.
  - Chaîne causale sans prédiction.
  - Cartes du patron sans auto-évaluation.

### P3.4 Nouveaux défauts

- **N1. Récompense gagnable par réflexe.**
  - **Couverture d'un toucher au hasard** (tolérance du code : `max(r × 1,3 ; 6 %)`) :

    | Route | Couverture |
    |---|---|
    | `#c-secheresse/voir` | 53 % |
    | `#a-retine/papille-oedeme` | 38 % |
    | `#g-cristallin/voir` | 34 % |
    | `#c-dystrophies/voir` | 29 % |
    | `#c-brulure/voir` | 28 % |
    | `#c-atypiques/voir` | 26 % |
    | `#a-retine/decollement-choroidien` | 25 % |
    | `#c-bacterienne/voir` | 24 % |
    | `#c-depots/voir` | 24 % |

    Médiane : 11 %.
  - **Toucher au centre** : réussi sur 25/42 photos.
  - Les signes **diffus** (KPS diffuse, cornée opaque, cristallin) ne peuvent pas être une cible à toucher.
- **N2. Le repli à 3 options recycle des légendes.**
  - **Où** : `#a-retine/macula-chirurgicale` et `#a-retine/pupilles-neuro`.
  - **Constat** : les options sont des légendes d'autres photos, avec du texte interne : « La source parle d'une membrane « trace » (très légère) », « Photo de gauche (OD selon la légende) », et des « dômes gris-jaunâtres en périphérie » pour une photo de pupilles. La légende de `#g-papille/voir` contient aussi « (selon la source) ».
- **N3. Rendu de la boucle.**
  - `#c-secheresse/voir` : la boucle sort de l'image et elle est coupée.
  - `#g-gpao/voir` : le trait fluo passe **sur** le rebord inférieur, c'est-à-dire sur le signe qu'il désigne.
  - Le message est doublé : titre « Bien vu », puis autocollant « Bien vu ! ».
- **N4. Le héros de l'accueil a régressé** (`#accueil`). La carte photo inclinée est réduite à environ 60 px d'image. Le crédit (« Imrankabirhossain · CC BY-SA 4.0 · Wikimedia Commons · annotation superposée ») prend plus de place que la photo, et l'autocollant « dendrite ! » recouvre l'image. Le visuel signature n'est plus lisible.
- **N5. Réviser n'est pas « en tuiles »** (`#reviser`). C'est la même liste verticale de 8 cartes, avec des pictogrammes pastel rouge, orange, violet et menthe, **hors palette** v2 (cobalt, fluo, sémantiques).
- **N6. En-tête presque unifié.** Le contenu commence à 202–257 px. Mais sur les micro-fiches A, la pastille « Niveau » reste seule sur sa ligne. Le bouton Suivant fluo reprend le titre complet de l'entrée suivante, sur 4 lignes (`#a-retine/macula-chirurgicale`).
- **N7. Les micro-fiches débordent encore.** 29 des 42 dépassent 1,5 écran (médiane 1,61 ; maximum 2,14 sur `#a-retine/pupilles-neuro`). 9 dépassent 120 mots, dont `a-imagerie/champs-visuels` (205, étiquettes comprises), `a-physiologie/transparence` (181) et `a-examen/papille` (176).

### P3.5 Revue clinique (10 fiches, niveau externe)

Fiches relues : `c-bacterienne`, `c-herpes`, `c-brulure`, `c-surface`, `c-erosion`, `g-crise`, `g-gpao`, `g-fermeture`, `g-neovasculaire`, `g-papille`.

**Juste et utile à l'externe :**
- Irrigation au NaCl 0,9 % pendant au moins 30 min jusqu'à pH 7,0–7,5.
- Érythromycine en onguent 4×/j ; fluoroquinolone sans pansement chez le porteur de lentilles ; TDM et non IRM après une projection.
- Moxifloxacine 0,5 % aux heures ; « le jour même pour tout ulcère ».
- Acyclovir 400 mg 5×/j ou valacyclovir 500 mg 3×/j ; zona : valacyclovir 1 g 3×/j × 7 j.
- Crise aiguë : timolol, brimonidine, dorzolamide, acétazolamide 500 mg, antiémétique, et appel immédiat.
- Olopatadine 0,1 % ; ceftriaxone si gonocoque ; MADO.
- EAGLE (≥ 50 ans, PAC ≥ 30 mmHg ou PACG).
- Bévacizumab 1,25 mg ; Doppler carotidien en l'absence de cause rétinienne.
- Encadrés Québec utiles : CNESST, Centre antipoison, O-7, gonioscopie chez les patients inuits (Nunavik), pharmacies d'hôpital pour les gouttes fortifiées.
- Le seuil PACS (contact ≥ 180°) est utilisé de façon cohérente.

**À corriger :**
- `c-brulure` : l'arbre (Q3 « grade II–IV : ophtalmologie immédiatement ») contredit le drapeau rouge (« grades III–IV »).
- `g-gpao` : le nœud 1 donne « Bilan de base (4 P + G) » sans explication, et l'arbre reste écrit pour l'ophtalmologiste.
- `g-crise` : la carte « Au Québec » n'a aucun contenu québécois.
- `c-herpes` : la fenêtre de 72 h pour l'antiviral du zona n'est pas dite.

### P3.6 Direction artistique
- **Mieux** : la boucle au feutre et l'autocollant vivent enfin dans le parcours principal ; Comprendre est compact ; `#cas` et le hub Investigations ont des images.
- **Moins bien** :
  - Le héros de l'accueil est écrasé (N4).
  - Réviser introduit une palette pastel hors charte (N5).
  - Les encadrés « High yield » (menthe, `--teal-wash`) et « Le signe qui compte » (vert pâle) restent hors palette.
  - Le badge « High yield » est toujours en anglais.

  L'ensemble reste reconnaissable comme « Fluorescéine », mais la discipline de palette se relâche hors des fiches.

### P3.7 MUST-FIX restants (classés)

1. **Rendre la récompense méritée.**
   - Routes : `#c-secheresse/voir`, `#g-cristallin/voir`, `#c-dystrophies/voir`, `#c-brulure/voir`, `#a-retine/papille-oedeme`, et les 25 photos où le toucher au centre suffit.
   - Correction : tolérance = `r` ; couverture ≤ 10 % vérifiée par test ; signes diffus en `skip` ; photos dont le signe n'est pas central, ou un 2e geste (nommer le signe).
   - Fichiers : `data/voir-hotspots.js`, `src/core.js` (`Photo.voirTap`), `tests/run.py`.
2. **Repli à 3 options écrit à la main.**
   - Routes : `#a-retine/macula-chirurgicale`, `#a-retine/pupilles-neuro` ; légende de `#g-papille/voir`.
   - Correction : un champ `choices` par entrée, avec 2 sosies plausibles ; le validateur interdit « source », « légende » et « photo de gauche ».
   - Fichiers : `data/voir-hotspots.js`, `src/core.js` (`voirCard`), `data/photos.js`, `tools/validate.js`.
3. **Un mécanisme dessiné dans Comprendre**, en commençant par `#g-crise`, `#g-gpao`, `#c-herpes`, `#c-bacterienne`, `#c-fuchs` et `#g-pigmentaire`. La chaîne doit devenir une prédiction (« maillon suivant ? », 3 choix).
   - Fichiers : `src/views.js` (branche `comprendre`), `src/figures-a.js`, `src/figures-b.js`, `data/fiches-*.js` (`causal`).
4. **Héros de l'accueil** (`#accueil`) : image d'au moins 140 px, crédit derrière une icône ⓘ, autocollant à côté du signe.
   - Fichiers : `src/views.js` (accueil), `src/web.css`.
5. **Écrans sans figure et micro-fiches trop longues** :
   - Sans figure : `#a-physiologie/pio`, `#a-physiologie/pupille`, `#a-examen/av`, `#b-bases/4`, `/7`, `/8`, `/9`, `#c-bases/6`, `/7`, `/8`.
   - Trop longues : 29 micro-fiches A sur 42 au-dessus de 1,5 écran.
   - Fichiers : `data/module-a.js`, `data/capsules.js`.
6. **Rendu de la boucle** : `#c-secheresse/voir` (boucle coupée) et `#g-gpao/voir` (trait sur le signe) ; supprimer le titre « Bien vu » en double.
   - Fichiers : `src/motion.js`, `src/core.js` (`voirReveal`), `src/web.css`.
7. **Précision clinique** :
   - `#c-brulure/decider` : grades.
   - `#g-gpao/decider` : « 4 P + G ».
   - `#g-crise/decider` : carte Québec.
   - `#c-herpes/decider` : fenêtre de 72 h.
   - Fichiers : `data/fiches-cornee*.js`, `data/ext-cornee-*.js`, `data/fiches-glaucome.js`.
8. **Vignettes cliniques des arbres** (0/27) : remplir `cat.vignette`.
   - Fichiers : `data/fiches-*.js`.
9. **`#reviser`** : une vraie grille, dans la palette v2.
   - Fichiers : `src/views.js`, `src/web.css`.

### Annexe P3. Mesures par écran (passe 3 : 186 écrans)

<details><summary>186 écrans</summary>

| Écran | Mots visibles | dont étiquettes SVG | Mots 1er écran | Contenu commence à (px) | Figures | Hauteur (écrans) | Verdict |
|---|---|---|---|---|---|---|---|
| `#c-secheresse/voir` | 47 | 0 | 53 | 224 | 1 | 1.23 | OK |
| `#c-secheresse/comprendre` | 92 | 0 | 69 | 224 | 2 | 1.43 | OK |
| `#c-secheresse/decider` | 122 | 0 | 76 | 224 | 0 | 1.79 | OK |
| `#c-secheresse/entrainer` | 68 | 0 | 77 | 224 | 0 | 1.23 | OK |
| `#c-bacterienne/voir` | 44 | 0 | 51 | 207 | 1 | 1.27 | OK |
| `#c-bacterienne/comprendre` | 82 | 0 | 71 | 207 | 2 | 1.36 | OK |
| `#c-bacterienne/decider` | 128 | 0 | 76 | 207 | 0 | 1.81 | OK |
| `#c-bacterienne/entrainer` | 71 | 0 | 77 | 207 | 0 | 1.16 | OK |
| `#c-atypiques/voir` | 43 | 0 | 52 | 207 | 1 | 1.2 | OK |
| `#c-atypiques/comprendre` | 85 | 0 | 77 | 207 | 2 | 1.41 | OK |
| `#c-atypiques/decider` | 128 | 0 | 79 | 207 | 0 | 1.8 | OK |
| `#c-atypiques/entrainer` | 67 | 0 | 75 | 207 | 0 | 1.2 | OK |
| `#c-herpes/voir` | 51 | 0 | 58 | 204 | 1 | 1.29 | OK |
| `#c-herpes/comprendre` | 84 | 0 | 76 | 204 | 2 | 1.38 | OK |
| `#c-herpes/decider` | 144 | 0 | 83 | 204 | 0 | 1.84 | OK |
| `#c-herpes/entrainer` | 64 | 0 | 74 | 204 | 0 | 1.19 | OK |
| `#c-keratocone/voir` | 45 | 0 | 51 | 207 | 1 | 1.28 | OK |
| `#c-keratocone/comprendre` | 137 | 34 | 127 | 207 | 2 | 1.37 | OK |
| `#c-keratocone/decider` | 118 | 0 | 74 | 207 | 0 | 1.74 | OK |
| `#c-keratocone/entrainer` | 65 | 0 | 70 | 207 | 0 | 1.14 | OK |
| `#c-fuchs/voir` | 45 | 0 | 53 | 224 | 1 | 1.23 | OK |
| `#c-fuchs/comprendre` | 115 | 36 | 110 | 224 | 2 | 1.38 | OK |
| `#c-fuchs/decider` | 108 | 0 | 85 | 224 | 0 | 1.55 | OK |
| `#c-fuchs/entrainer` | 65 | 0 | 76 | 224 | 0 | 1.19 | OK |
| `#c-erosion/voir` | 41 | 0 | 51 | 224 | 1 | 1.36 | OK |
| `#c-erosion/comprendre` | 89 | 0 | 74 | 224 | 2 | 1.41 | OK |
| `#c-erosion/decider` | 126 | 0 | 82 | 224 | 0 | 1.8 | OK |
| `#c-erosion/entrainer` | 62 | 0 | 75 | 224 | 0 | 1.11 | OK |
| `#c-pterygion/voir` | 46 | 0 | 55 | 224 | 1 | 1.3 | OK |
| `#c-pterygion/comprendre` | 133 | 34 | 130 | 224 | 2 | 1.36 | OK |
| `#c-pterygion/decider` | 109 | 0 | 78 | 224 | 0 | 1.67 | OK |
| `#c-pterygion/entrainer` | 59 | 0 | 71 | 224 | 0 | 1.19 | OK |
| `#c-greffe/voir` | 47 | 0 | 57 | 224 | 1 | 1.3 | OK |
| `#c-greffe/comprendre` | 87 | 0 | 86 | 224 | 2 | 1.36 | OK |
| `#c-greffe/decider` | 129 | 0 | 83 | 224 | 0 | 1.7 | OK |
| `#c-greffe/entrainer` | 64 | 0 | 77 | 224 | 0 | 1.11 | OK |
| `#c-brulure/voir` | 45 | 0 | 52 | 207 | 1 | 1.23 | OK |
| `#c-brulure/comprendre` | 129 | 36 | 131 | 207 | 2 | 1.3 | OK |
| `#c-brulure/decider` | 130 | 0 | 69 | 207 | 0 | 1.81 | OK |
| `#c-brulure/entrainer` | 64 | 0 | 70 | 207 | 0 | 1.12 | OK |
| `#c-dystrophies/voir` | 45 | 0 | 47 | 207 | 1 | 1.23 | OK |
| `#c-dystrophies/comprendre` | 100 | 0 | 88 | 207 | 2 | 1.38 | OK |
| `#c-dystrophies/decider` | 110 | 0 | 71 | 207 | 0 | 1.59 | OK |
| `#c-dystrophies/entrainer` | 69 | 0 | 75 | 207 | 0 | 1.23 | OK |
| `#c-depots/voir` | 42 | 0 | 50 | 224 | 1 | 1.3 | OK |
| `#c-depots/comprendre` | 99 | 0 | 95 | 224 | 2 | 1.38 | OK |
| `#c-depots/decider` | 124 | 0 | 87 | 224 | 0 | 1.67 | OK |
| `#c-depots/entrainer` | 69 | 0 | 80 | 224 | 0 | 1.18 | OK |
| `#c-surface/voir` | 43 | 0 | 55 | 224 | 1 | 1.27 | OK |
| `#c-surface/comprendre` | 94 | 0 | 74 | 224 | 2 | 1.43 | OK |
| `#c-surface/decider` | 132 | 0 | 82 | 224 | 0 | 1.89 | OK |
| `#c-surface/entrainer` | 70 | 0 | 81 | 224 | 0 | 1.25 | OK |
| `#c-peripherie/voir` | 42 | 0 | 33 | 224 | 1 | 1.43 | OK |
| `#c-peripherie/comprendre` | 97 | 0 | 90 | 224 | 2 | 1.38 | OK |
| `#c-peripherie/decider` | 130 | 0 | 81 | 224 | 0 | 1.79 | OK |
| `#c-peripherie/entrainer` | 77 | 0 | 87 | 224 | 0 | 1.28 | OK |
| `#g-gpao/voir` | 48 | 0 | 54 | 207 | 1 | 1.29 | OK |
| `#g-gpao/comprendre` | 91 | 6 | 84 | 207 | 2 | 1.36 | OK |
| `#g-gpao/decider` | 127 | 0 | 77 | 207 | 0 | 1.68 | OK |
| `#g-gpao/entrainer` | 60 | 0 | 69 | 207 | 0 | 1.15 | OK |
| `#g-hto/voir` | 42 | 0 | 53 | 204 | 1 | 1.22 | OK |
| `#g-hto/comprendre` | 141 | 54 | 147 | 204 | 2 | 1.31 | OK |
| `#g-hto/decider` | 120 | 0 | 74 | 204 | 0 | 1.74 | OK |
| `#g-hto/entrainer` | 59 | 0 | 69 | 204 | 0 | 1.09 | OK |
| `#g-gpn/voir` | 43 | 0 | 47 | 207 | 1 | 1.3 | OK |
| `#g-gpn/comprendre` | 106 | 24 | 99 | 207 | 2 | 1.39 | OK |
| `#g-gpn/decider` | 126 | 0 | 73 | 207 | 0 | 1.65 | OK |
| `#g-gpn/entrainer` | 59 | 0 | 67 | 207 | 0 | 1.17 | OK |
| `#g-fermeture/voir` | 46 | 0 | 34 | 224 | 1 | 1.45 | OK |
| `#g-fermeture/comprendre` | 123 | 39 | 117 | 224 | 2 | 1.32 | OK |
| `#g-fermeture/decider` | 126 | 0 | 78 | 224 | 0 | 1.79 | OK |
| `#g-fermeture/entrainer` | 69 | 0 | 80 | 224 | 0 | 1.2 | OK |
| `#g-crise/voir` | 46 | 0 | 57 | 207 | 1 | 1.13 | OK |
| `#g-crise/comprendre` | 79 | 0 | 75 | 207 | 2 | 1.36 | OK |
| `#g-crise/decider` | 154 | 0 | 96 | 207 | 0 | 1.86 | OK |
| `#g-crise/entrainer` | 66 | 0 | 76 | 207 | 0 | 1.14 | OK |
| `#g-pxf/voir` | 44 | 0 | 51 | 207 | 1 | 1.27 | OK |
| `#g-pxf/comprendre` | 83 | 0 | 73 | 207 | 2 | 1.34 | OK |
| `#g-pxf/decider` | 151 | 0 | 77 | 207 | 0 | 1.86 | OK |
| `#g-pxf/entrainer` | 63 | 0 | 69 | 207 | 0 | 1.17 | OK |
| `#g-pigmentaire/voir` | 43 | 0 | 47 | 224 | 1 | 1.3 | OK |
| `#g-pigmentaire/comprendre` | 90 | 0 | 83 | 224 | 2 | 1.33 | OK |
| `#g-pigmentaire/decider` | 124 | 0 | 79 | 224 | 0 | 1.7 | OK |
| `#g-pigmentaire/entrainer` | 73 | 0 | 82 | 224 | 0 | 1.14 | OK |
| `#g-neovasculaire/voir` | 43 | 0 | 50 | 207 | 1 | 1.24 | OK |
| `#g-neovasculaire/comprendre` | 122 | 37 | 114 | 207 | 2 | 1.33 | OK |
| `#g-neovasculaire/decider` | 121 | 0 | 85 | 207 | 0 | 1.68 | OK |
| `#g-neovasculaire/entrainer` | 60 | 0 | 66 | 207 | 0 | 1.18 | OK |
| `#g-secondaires/voir` | 40 | 0 | 49 | 207 | 1 | 1.18 | OK |
| `#g-secondaires/comprendre` | 79 | 0 | 72 | 207 | 2 | 1.39 | OK |
| `#g-secondaires/decider` | 128 | 0 | 80 | 207 | 0 | 1.77 | OK |
| `#g-secondaires/entrainer` | 70 | 0 | 78 | 207 | 0 | 1.23 | OK |
| `#g-postop/voir` | 45 | 0 | 55 | 204 | 1 | 1.28 | OK |
| `#g-postop/comprendre` | 73 | 0 | 78 | 204 | 2 | 1.3 | OK |
| `#g-postop/decider` | 122 | 0 | 78 | 204 | 0 | 1.73 | OK |
| `#g-postop/entrainer` | 72 | 0 | 81 | 204 | 0 | 1.16 | OK |
| `#g-papille/voir` | 44 | 0 | 57 | 224 | 1 | 1.19 | OK |
| `#g-papille/comprendre` | 81 | 0 | 90 | 224 | 2 | 1.29 | OK |
| `#g-papille/decider` | 129 | 0 | 80 | 224 | 0 | 1.72 | OK |
| `#g-papille/entrainer` | 64 | 0 | 77 | 224 | 0 | 1.23 | OK |
| `#g-cristallin/voir` | 44 | 0 | 53 | 224 | 1 | 1.35 | OK |
| `#g-cristallin/comprendre` | 110 | 36 | 119 | 224 | 2 | 1.3 | OK |
| `#g-cristallin/decider` | 139 | 0 | 82 | 224 | 0 | 1.88 | OK |
| `#g-cristallin/entrainer` | 73 | 0 | 86 | 224 | 0 | 1.25 | OK |
| `#g-dev/voir` | 48 | 0 | 57 | 224 | 1 | 1.4 | OK |
| `#g-dev/comprendre` | 106 | 36 | 115 | 224 | 2 | 1.24 | OK |
| `#g-dev/decider` | 143 | 0 | 88 | 224 | 0 | 1.79 | OK |
| `#g-dev/entrainer` | 76 | 0 | 89 | 224 | 0 | 1.24 | OK |
| `#inv-bscan` | 200 | 2 | 54 | 61 | 2 | 2.87 | 2.87 écrans |
| `#inv-ascan` | 169 | 28 | 79 | 61 | 2 | 2.48 | OK |
| `#inv-oct` | 167 | 6 | 66 | 61 | 2 | 2.38 | OK |
| `#inv-gonio` | 176 | 2 | 52 | 61 | 2 | 2.88 | 2.88 écrans |
| `#inv-fondoeil` | 189 | 32 | 44 | 61 | 2 | 2.82 | 2.82 écrans |
| `#inv-cv` | 181 | 3 | 61 | 61 | 2 | 2.78 | 2.78 écrans |
| `#a-anatomie` | 73 | 0 | 63 | 61 | 0 | 1.35 | OK |
| `#a-anatomie/globe` | 127 | 62 | 138 | 202 | 1 | 1.19 | OK |
| `#a-anatomie/cornee` | 60 | 18 | 72 | 202 | 1 | 1 | OK |
| `#a-anatomie/angle` | 93 | 47 | 102 | 202 | 2 | 1.13 | OK |
| `#a-anatomie/papille` | 22 | 3 | 35 | 202 | 1 | 1 | OK |
| `#a-anatomie/annexes` | 30 | 19 | 43 | 224 | 1 | 1 | OK |
| `#a-anatomie/photos` | 82 | 0 | 82 | 202 | 1 | 1.34 | OK |
| `#a-physiologie` | 75 | 0 | 60 | 61 | 0 | 1.45 | OK |
| `#a-physiologie/aqueuse` | 170 | 14 | 127 | 202 | 1 | 1.69 | > 1,5 écran |
| `#a-physiologie/pio` | 78 | 0 | 89 | 202 | 0 | 1 | 0 figure |
| `#a-physiologie/film-lacrymal` | 114 | 0 | 89 | 202 | 1 | 1.51 | > 1,5 écran |
| `#a-physiologie/transparence` | 181 | 18 | 103 | 202 | 1 | 1.89 | > 1,5 écran |
| `#a-physiologie/refraction` | 129 | 0 | 110 | 202 | 1 | 1.46 | OK |
| `#a-physiologie/pupille` | 81 | 0 | 93 | 202 | 0 | 1 | 0 figure |
| `#a-examen` | 73 | 0 | 45 | 61 | 0 | 1.61 | OK |
| `#a-examen/av` | 111 | 0 | 116 | 202 | 0 | 1.25 | 0 figure |
| `#a-examen/pupilles` | 123 | 6 | 87 | 202 | 1 | 1.6 | > 1,5 écran |
| `#a-examen/lampe` | 118 | 21 | 111 | 202 | 1 | 1.43 | OK |
| `#a-examen/fluoresceine` | 108 | 0 | 73 | 224 | 1 | 1.61 | > 1,5 écran |
| `#a-examen/tonometrie` | 124 | 0 | 91 | 202 | 1 | 1.64 | > 1,5 écran |
| `#a-examen/gonioscopie` | 129 | 19 | 102 | 202 | 1 | 1.59 | > 1,5 écran |
| `#a-examen/pachymetrie` | 139 | 0 | 77 | 202 | 1 | 1.72 | > 1,5 écran |
| `#a-examen/papille` | 176 | 42 | 108 | 202 | 3 | 1.87 | > 1,5 écran |
| `#a-imagerie` | 65 | 0 | 51 | 61 | 0 | 1.4 | OK |
| `#a-imagerie/structure` | 138 | 42 | 97 | 202 | 3 | 1.46 | OK |
| `#a-imagerie/oct` | 147 | 27 | 123 | 224 | 1 | 1.51 | > 1,5 écran |
| `#a-imagerie/topographie` | 131 | 17 | 97 | 202 | 2 | 1.63 | > 1,5 écran |
| `#a-imagerie/champs-visuels` | 205 | 30 | 167 | 202 | 3 | 1.65 | > 1,5 écran |
| `#a-imagerie/speculaire` | 106 | 0 | 84 | 202 | 1 | 1.51 | > 1,5 écran |
| `#a-retine` | 237 | 0 | 60 | 61 | 0 | 3.29 | > 200 mots; 3.29 écrans |
| `#a-retine/cataracte-nucleaire` | 98 | 0 | 71 | 202 | 1 | 1.65 | > 1,5 écran |
| `#a-retine/cataracte-corticale-scp` | 97 | 0 | 64 | 224 | 1 | 1.66 | > 1,5 écran |
| `#a-retine/cataracte-mature` | 99 | 0 | 91 | 257 | 1 | 1.47 | OK |
| `#a-retine/opacification-capsulaire` | 100 | 0 | 70 | 202 | 1 | 1.56 | > 1,5 écran |
| `#a-retine/bscan` | 103 | 0 | 80 | 224 | 1 | 1.55 | > 1,5 écran |
| `#a-retine/decollement-retine` | 98 | 0 | 65 | 224 | 1 | 1.7 | > 1,5 écran |
| `#a-retine/decollement-choroidien` | 101 | 0 | 65 | 224 | 1 | 1.72 | > 1,5 écran |
| `#a-retine/dmla` | 99 | 0 | 73 | 257 | 1 | 1.73 | > 1,5 écran |
| `#a-retine/retinopathie-diabetique` | 96 | 0 | 60 | 257 | 1 | 1.73 | > 1,5 écran |
| `#a-retine/occlusions-retiniennes` | 93 | 0 | 64 | 224 | 1 | 1.69 | > 1,5 écran |
| `#a-retine/retinopathie-hypertensive` | 97 | 0 | 62 | 257 | 1 | 1.76 | > 1,5 écran |
| `#a-retine/macula-chirurgicale` | 130 | 0 | 60 | 257 | 1 | 2.03 | > 1,5 écran |
| `#a-retine/peripherie-vitre` | 95 | 0 | 67 | 257 | 1 | 1.68 | > 1,5 écran |
| `#a-retine/inflammation-infection` | 92 | 0 | 72 | 224 | 1 | 1.63 | > 1,5 écran |
| `#a-retine/papille-oedeme` | 100 | 0 | 86 | 224 | 1 | 1.55 | > 1,5 écran |
| `#a-retine/pupilles-neuro` | 135 | 0 | 45 | 257 | 1 | 2.14 | > 1,5 écran |
| `#a-retine/tumeurs-toxicite-trauma` | 100 | 0 | 44 | 257 | 1 | 1.8 | > 1,5 écran |
| `#b-bases` | 109 | 0 | 80 | 212 | 1 | 1.61 | > 1,5 écran |
| `#b-bases/2` | 133 | 62 | 151 | 212 | 1 | 1.18 | OK |
| `#b-bases/3` | 108 | 18 | 67 | 234 | 2 | 1.51 | > 1,5 écran |
| `#b-bases/4` | 57 | 0 | 73 | 212 | 0 | 1 | 0 figure |
| `#b-bases/5` | 61 | 0 | 74 | 212 | 1 | 1.15 | OK |
| `#b-bases/6` | 103 | 18 | 62 | 212 | 2 | 1.51 | > 1,5 écran |
| `#b-bases/7` | 62 | 0 | 75 | 212 | 0 | 1 | 0 figure |
| `#b-bases/8` | 70 | 0 | 86 | 212 | 0 | 1.14 | 0 figure |
| `#b-bases/9` | 59 | 0 | 65 | 212 | 0 | 1.61 | 0 figure; > 1,5 écran |
| `#c-bases` | 102 | 0 | 76 | 212 | 1 | 1.58 | > 1,5 écran |
| `#c-bases/2` | 134 | 62 | 151 | 212 | 1 | 1.18 | OK |
| `#c-bases/3` | 90 | 18 | 108 | 234 | 1 | 1.09 | OK |
| `#c-bases/4` | 79 | 0 | 95 | 212 | 1 | 1.13 | OK |
| `#c-bases/5` | 86 | 0 | 40 | 212 | 2 | 1.53 | > 1,5 écran |
| `#c-bases/6` | 58 | 0 | 71 | 212 | 0 | 1 | 0 figure |
| `#c-bases/7` | 75 | 0 | 91 | 212 | 0 | 1.16 | 0 figure |
| `#c-bases/8` | 65 | 0 | 69 | 212 | 0 | 1.63 | 0 figure; > 1,5 écran |
| `#accueil` | 141 | 0 | 81 | 61 | 2 | 2.33 | OK |
| `#apprendre` | 318 | 0 | 72 | 61 | 0 | 4.42 | > 200 mots; 4.42 écrans |
| `#reviser` | 103 | 0 | 63 | 61 | 0 | 1.78 | OK |
| `#investigations` | 108 | 19 | 48 | 61 | 6 | 2.79 | 2.79 écrans |
| `#module-a` | 107 | 0 | 68 | 61 | 0 | 1.65 | OK |
| `#module-b` | 154 | 0 | 41 | 61 | 14 | 5.37 | 5.37 écrans |
| `#module-c` | 144 | 0 | 39 | 61 | 13 | 4.94 | 4.94 écrans |
| `#cas` | 201 | 70 | 129 | 61 | 1 | 1.66 | OK |

</details>

Fichiers de la passe 3 (dossier de travail du critique) : `measure3.py`, `routes2.json`, `metrics3-final.csv`, `voir3.py` et `voircov.json` (couverture des zones), `loop3.py`, `clin3.txt`, `shots3/`.

---


## Passage 2 (cycle 8) : 21 novembre 2026

Arbre testé : `main` @ 0ab4df6, qui inclut a1c3285, c297ea6 et 5e63ee1. Même méthode qu'au passage 1 : 390 × 844, FR, niveau par défaut (« Essentiel »), stockage vierge, requêtes externes bloquées, même script `measure.py` (routes mises à jour).

**186 écrans mesurés** :

| Groupe | Écrans |
|---|---|
| Fiches | 27 × 4 étapes |
| Investigations | 6 pages |
| Module A | 5 listes et **42 micro-fiches** (`#a-<section>/<entrée>`) |
| Capsules | **17 cartes** (`#b-bases`, `#b-bases/2…9`, `#c-bases`, `#c-bases/2…8`) |
| Hubs | accueil, Apprendre, Réviser, hub Investigations, Module A, Module B, Module C, Cas |

24 captures ont été prises. Les arbres ont été parcourus chemin par chemin (8 parcours sur 5 fiches). Les niveaux 1, 2 et 3 ont été mesurés.

### P2.1 Note : 6 / 10 (passage 1 : 4 / 10)

**Ce que le cycle 8 a vraiment corrigé**

Les défauts de densité et de structure sont réglés :
- **En-tête de fiche** : le contenu commence à 211 px sur 108/108 écrans (avant : 469–639).
- **Décider** : 1,8–1,9 écran ; 87–132 mots hors arbre (avant : 124–196).
- **Arbre** : en mode pas à pas, une seule carte-question s'affiche.
- **Investigations** : l'outil est en tête ; 136–193 mots ; la première figure arrive à 245–533 px (avant : environ 500 mots, figure au 3e écran).
- **Module A** : 5 595 mots sur une page deviennent une liste et 42 micro-fiches de 108 mots (médiane).
- **Capsules** : découpées en 17 cartes de 57–134 mots.
- **Niveau 2** : il n'ouvre plus rien tout seul.
- **Arbres** : les 5 erreurs de logique sont corrigées.
- **Bloc Traitement** : il est enfin écrit pour l'externe.
- **Fuites de réponse** : celles de `inv-gonio` et du QCM de `g-crise` sont supprimées.
- **Lecture totale** : une fiche fait maintenant 355–412 mots (médiane 377), contre 431–554 avant.

**Pourquoi seulement 6**

1. **La boucle signature « Observe. Réponds. Révèle. » reste factice** sur les 27 photos de fiche et les 42 micro-fiches A.
   - On demande « Réponds dans ta tête ». « Révéler » affiche ensuite un autocollant **« Exact ! » ou « Bien vu ! » alors que l'apprenant n'a rien répondu**.
   - Toujours aucune boucle au feutre sur la photo, même pour des drusen discrets où elle serait indispensable.
   - Une récompense donnée pour rien dévalue toutes les autres.
2. **La « figure de mécanisme » de Comprendre est une figure de signe.** C'est la comparaison œil normal / œil malade, déjà vue sur Voir. Le mécanisme reste une chaîne de boîtes de texte. Le premier écran de Comprendre ne montre qu'un schéma « normal » (24–33 mots visibles, aucune information).
3. **Il reste des dépassements de plafond** (voir P2.3), un **message de référence contradictoire** dans `g-crise`, et des hubs non retouchés (Cas, accueil, Réviser).

### P2.2 Mesures : synthèse (passage 2)

Pour Comprendre, le compte inclut les étiquettes SVG des deux schémas (24–54 mots sur 11 fiches). Hors étiquettes, Comprendre fait 90–127 mots.

| Écran | n | Mots médiane (min–max) | Plafond | Hors plafond | Figures visibles médiane | Écrans à 0 figure | 1re figure (px, médiane) | Hauteur (écrans) médiane (max) | Mots au 1er écran (méd.) | Tableaux visibles | Arbre | Animations auto-rythmées |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Voir | 27 | 61 (54–70) | 60 | 14 | 1 | 0 | 212 | 1.4 (1.6) | 67 | 0 | 0/27 | 0 |
| Comprendre | 27 | 115 (90–166) | 120 | 11 | 2 | 0 | 243 | 2.1 (2.4) | 30 | 0 | 0/27 | 0 |
| Décider (hors arbre) | 27 | 106 (87–132) | 180 | 0 | 0 | 27 | — | 1.8 (1.9) | 79 | 0 | 27/27 | 0 |
| S’entraîner | 27 | 70 (63–81) | ≈200 (1 min) | 0 | 0 | 27 | — | 1.3 (1.4) | 77 | 0 | 0/27 | 0 |
| Investigations | 6 | 165 (136–193) | ≈200 (1 min) | 0 | 2 | 0 | 282 | 2.4 (2.6) | 57 | 0 | 0/6 | 0 |
| Module A : listes | 5 | 73 (65–237) | ≈200 (1 min) | 1 | 0 | 5 | — | 1.4 (3.3) | 60 | 0 | 0/5 | 0 |
| Module A : micro-fiches | 42 | 108 (22–227) | ≈200 (1 min) | 2 | 1 | 3 | 198 | 1.8 (3.4) | 72 | 0 | 0/42 | 1 |
| Capsules : cartes | 17 | 79 (57–134) | ≈200 (1 min) | 0 | 1 | 7 | 212 | 1.2 (2.3) | 75 | 0 | 0/17 | 0 |
| Hubs + accueil | 7 | 150 (103–498) | ≈200 (1 min) | 2 | 0 | 4 | 454 | 4.2 (5.4) | 63 | 0 | 0/7 | 0 |
| Accueil | 1 | 232 (232–232) | ≈200 (1 min) | 1 | 4 | 0 | — | 3.9 (3.9) | 71 | 0 | 0/1 | 0 |

Points saillants :
- Animations auto-rythmées : 0 sur le texte. `#a-physiologie/film-lacrymal` change seul (693 mutations en 4 s) : le chrono du TBUT démarre avant le premier clignement (S-12, non corrigé).
- Tableaux visibles par défaut : 0 sur 186. Au niveau 2, Décider replie 3 tableaux (signes, examens, diagnostic différentiel).
- Niveaux, mots visibles sur Décider :

  | Fiche | Niv. 1 | Niv. 2 | Niv. 3 |
  |---|---|---|---|
  | `c-herpes` | 144 | 159 | 165 |
  | `g-crise` | 155 | 170 | 176 |

  Avant, le niveau 2 montait à 595–699 mots. Le niveau 3 ajoute maintenant 6 à 20 mots : il est distinct, mais à peine.
- Arbre : question ≤ 8 mots ✓, action ≤ 11 mots ✓. Aucune feuille de remplissage (« Question suivante ») dans les 27 arbres ✓. La vue d'ensemble de `g-crise` mesure 1 040 px (1,2 écran) ; elle est optionnelle.

### P2.3 Statut des 12 MUST-FIX du passage 1

| # | Défaut | Statut | Preuve (mesure ou capture) |
|---|---|---|---|
| MF-1 | Module A, capsules, aperçus : murs de texte | **Corrigé en grande partie** | Listes A : 65–237 mots. Micro-fiches : 22–227 (médiane 108). Cartes de capsule : 57–134. `module-b` : 1 319 → 160 mots. Reste : 2 micro-fiches > 200 mots (`a-physiologie/transparence` 227, `a-imagerie/champs-visuels` 213 et 3,4 écrans) ; 10 écrans sans figure (`a-physiologie/pio`, `a-physiologie/pupille`, `a-examen/av`, `b-bases/4`, `/7`, `/8`, `/9`, `c-bases/6`, `/7`, `/8`) ; 38 micro-fiches et cartes sur 59 dépassent 1,5 écran (la promesse « un écran » n'est pas tenue, médiane 1,8). |
| MF-2 | Investigations : texte d'abord | **Corrigé** | 136–193 mots ; 1re figure à 245–533 px ; 2,2–2,6 écrans ; textes en pastilles repliables. Reste : schéma OCT de pratique grossier et touche « Je suis prêt à répondre » (S-8, S-9). |
| MF-3 | Comprendre sans figure de mécanisme | **Partiel** | 2 figures sur 27/27 écrans. Mais ce sont les schémas normal/pathologique (signe, pas mécanisme), empilés à pleine largeur : le 1er écran ne montre que le schéma normal. Comprendre passe à 2,1–2,4 écrans (avant : 1,6). Hors étiquettes SVG, 2 écrans dépassent 120 mots (`c-pterygion` 127, `c-dystrophies` 127). |
| MF-4 | En-tête de fiche à 55–76 % de l'écran | **Corrigé** | Contenu à 211 px sur 108/108. Le sélecteur de niveau est devenu une pastille « Niveau : Essentiel » qui ouvre le choix sur place. Nouveau défaut mineur : titres coupés (« …zona ophtal… », « …liée à l'âge (D… »). |
| MF-5 | Décider : 3–4 écrans, arbre en échelle | **Corrigé** | 1,8–1,9 écran ; 108–155 mots arbre compris ; pas à pas par défaut, avec pastilles, chemin parcouru, « Fin du parcours » et « Voir tout l'arbre ». L'arbre n'a toujours pas de vignette clinique, donc pas de bonne réponse (S-10). |
| MF-6 | Erreurs de logique des arbres | **Corrigé** | Parcours vérifiés : `c-herpes` (zona → dendrite → HEDS ; HSV sans zona → Q2), `g-dev` (Q1 « Nourrisson ou jeune enfant ? »), `g-secondaires` (Non en Q1 → Q3), `g-neovasculaire` (la cause est demandée en Q2), `g-crise` (Q1 Oui → « Appeler l'ophtalmologiste de garde maintenant »). Reste : `g-gpao` garde « Bilan de base (4 P + G) » sans explication. |
| MF-7 | Bloc Traitement calibré spécialiste | **Corrigé**, avec un défaut résiduel | « Quand référer » est maintenant au niveau de la fiche, avec un délai et une raison (« Le jour même pour tout ulcère — il peut perforer en quelques jours », « immédiatement (ophtalmologiste de garde) »). `c-surface` est corrigé. Les pièges nomment le médicament. Défaut résiduel, voir P2.4-N3 : le 1er drapeau rouge de `g-crise` contredit « immédiatement ». |
| MF-8 | Voir : pas de Réponds, pas de feutre, réponse écrite | **Partiel, avec une régression** | La légende est masquée jusqu'à la révélation ✓ et « Observe » apparaît sous la photo ✓. Mais il n'y a toujours ni réponse produite, ni boucle au feutre sur la photo. L'autocollant « Exact ! » ou « Bien vu ! » s'affiche sans réponse (P2.4-N1). |
| MF-9 | Le niveau 2 recrée le mur | **Corrigé** | Rien ne s'ouvre automatiquement ; niveau 2 à +15 mots ; niveaux renommés Essentiel, Approfondi, R1, avec les sous-titres « Externe : première lecture » et « Externe en stage ». |
| MF-10 | Réponses données avant la question | **Corrigé** | Le schéma de pratique de `inv-gonio` n'a plus d'étiquettes avant la révélation. Le QCM 1 de `g-crise` demande : « Tu es l'externe : que fais-tu en premier ? » |
| MF-11 | Murs de cartes, vignettes vides, hubs sans image | **Partiel** | Le hub Investigations a une vignette schématique par examen ✓. Aucune vignette vide dans Apprendre, `a-retine` ou `module-c`, vérifié après défilement ✓. *Correction du passage 1* : les carrés gris de B7–C12 étaient au moins en partie un **artefact de ma capture pleine page**, car les images à chargement différé ne se chargent pas sans défilement (B10 avait 6 photos). Non corrigé : `#reviser` (8 cartes identiques), `#cas` (498 mots, 0 figure, 8 paragraphes de plus de 3 lignes), bannière « Module C » toujours posée sur une impression d'OCT avec le texte qui se chevauche. Nouveau mur : `#b-bases/8` (P2.4-N6). |
| MF-12 | Petits dépassements | **Partiel** | Voir au-dessus de 60 mots : 24 → **14/27** (61–70 : `g-gpao` 70, `g-postop` 69, `g-gpn` 66, `g-neovasculaire` 66, `g-crise` 65, `g-pigmentaire` 65, `g-secondaires` 64, `g-fermeture` 63, `g-pxf` 63, `c-herpes` 62, `c-brulure` 62, `c-secheresse` 61, `c-greffe` 61, `g-hto` 61). « En deux phrases » de plus de 3 lignes : toujours **27/27**. Puces « essentiel » de plus de 15 mots : toujours `c-secheresse` 18, `c-erosion` 16, `c-pterygion` 16, `c-dystrophies` 16. |

Bilan : 6 corrigés, 1 corrigé en grande partie, 5 partiels, dont 1 avec régression. Aucun non corrigé.

### P2.4 Nouveaux problèmes introduits par le cycle 8

- **N1. Récompense pour rien.**
  - **Où** : les 27 `#<fiche>/voir` et les micro-fiches A à photo (vu sur `c-herpes`, `g-crise`, `a-retine/dmla`).
  - **Constat** : « Quel est le signe décisif ? Réponds dans ta tête, puis révèle. » La révélation affiche l'autocollant fluo « Exact ! » ou « Bien vu ! », alors qu'aucune réponse n'a été donnée. `BRAND.md` §6.3 réserve cet autocollant à la bonne réponse. Sur `c-herpes`, l'autocollant cache en plus la fin de la légende (« (bleu cobalt) »).
  - **Correction** : « Touche le signe » sur la photo (zones déjà au format `hotspots`), puis boucle au feutre sur le signe et autocollant **seulement si le toucher tombe dans la zone**. Sinon, un gribouillis et la boucle sur la bonne zone. Sans zone définie, un neutre « Voici le signe » sans autocollant.
  - **Responsables** : design/motion (`src/motion.js`), web (`Photo.carousel` dans `src/core.js`), visuels (zones des photos de fiche et de A5).
- **N2. Le premier écran de Comprendre est vide de sens.**
  - **Constat** : le schéma « Normal » à pleine largeur (environ 350 × 330 px) occupe le 1er écran. Sur `c-herpes`, c'est un disque bleu uni ; sur `g-crise`, un œil normal de face. Le schéma pathologique est en bas ; l'essentiel et le mécanisme passent au 2e écran.
  - **Correction** : normal et pathologique côte à côte à 50 % (ou un curseur avant/après) en ≤ 220 px de haut. Puis remplacer, fiche par fiche, la paire de signes par un vrai schéma de mécanisme dont les zones s'allument avec les maillons de la chaîne (angle et bloc pupillaire pour `g-crise` ; ganglion → V1 → cornée pour `c-herpes`).
  - **Responsables** : web (`src/views.js`, branche `comprendre`), visuels (`src/figures-*.js`).
- **N3. Message de référence contradictoire dans `g-crise`.**
  - **Constat** : le 1er drapeau rouge, en tête de Décider, dit « PIO inchangée après 1 h de traitement maximal : mannitol, appeler l'ophtalmologiste de garde ». Le nœud 1 de l'arbre et « Quand référer » disent « immédiatement ». L'externe lit d'abord le drapeau et peut attendre une heure.
  - **Correction** : « Crise = appel immédiat ; si PIO inchangée à 1 h : mannitol (sur avis) ». Vérifier la cohérence drapeaux / arbre / référence sur les 27 fiches (script : le délai de `treatment.refer` ne doit jamais être plus court que celui d'un drapeau).
  - **Responsable** : pédagogie (`data/fiches-glaucome.js`).
- **N4. Trois modèles de navigation et d'en-tête.**
  - **Constat** :
    - La fiche a 4 pastilles nommées, et la pastille de niveau sur la ligne du surtitre.
    - La micro-fiche A a un surtitre souligné « A3 · EXAMEN OPHTALMOLOGIQUE 1 / 8 », la pastille de niveau **seule sur sa ligne** (une rangée perdue), puis 8 à 17 points qui répètent le « 1 / 8 ».
    - La carte de capsule a « 8 / 9 » et 9 points.
    - Les titres longs sont coupés par une ellipse, ce qui fait perdre l'acronyme (« DMLA », « zona ophtalmique »).
  - **Correction** : un seul composant d'en-tête (surtitre, compteur et niveau sur une ligne ; titre sur 2 lignes maximum à 20 px, sans ellipse ; points seulement si 9 éléments ou moins).
  - **Responsable** : web (`src/views.js`, en-têtes des fiches, des entrées A et des cartes).
- **N5. Les micro-fiches ne tiennent pas en un écran.**
  - **Constat** : médiane de 1,8 écran ; 38 micro-fiches et cartes sur 59 dépassent 1,5 écran ; `a-imagerie/champs-visuels` en fait 3,4 (213 mots, 3 figures) et `a-physiologie/transparence` 2,5 (227 mots). `a-examen/av` s'ouvre sur un convertisseur d'acuité, sans image d'échelle ni de trou sténopéique.
  - **Correction** : plafond de 120 mots par micro-fiche, une figure en tête, et le reste dans le niveau 2.
  - **Responsable** : pédagogie (`data/module-a.js`).
- **N6. Un nouveau mur de cartes identiques : `#b-bases/8` « La boîte à outils thérapeutique ».**
  - **Constat** : 17 repliés identiques, chacun avec sa traduction anglaise en italique (« Artificial tears… », « Topical corticosteroids »). 0 figure, 2,2 écrans. C'est une fuite d'anglais en FR, et c'est contraire au barème §6.
  - **Correction** : 5 familles (lubrifier, anti-infectieux, anti-inflammatoires, protéger ou réparer, chirurgie), une icône ou photo par famille, l'anglais masqué en FR. Même traitement pour `c-bases/7`.
  - **Responsables** : pédagogie (`data/capsules.js`), web.
- **N7. « 4 écrans d'une minute » reste une promesse non tenue.**
  - **Constat** : la promesse s'affiche sur `#module-b`. Comprendre fait 2,1–2,4 écrans, Décider 1,8–1,9.
  - **Correction** : tenir la promesse (N2, N5) ou la retirer.
- **N8. Navigation « Cas » ambiguë.**
  - **Constat** : l'onglet **Cas** mène aux 12 cas évolutifs, alors que les **70 cas en images** sont au bas du hub *Examens*. Un externe qui cherche « des cas » ne trouvera pas les 70.
  - **Correction** : regrouper les deux sous l'onglet Cas, avec deux entrées visuelles.
  - **Responsable** : web (`src/core.js`, `tabHtml`, vue `cas`).

### P2.5 MUST-FIX restants (passage 2), classés

1. **Boucle « Observe → Réponds → Révèle » réelle sur les photos de fiche et de A5** (N1 + reste de MF-8). Toucher le signe, boucle au feutre sur la photo, autocollant seulement si la réponse est juste ; supprimer « Réponds dans ta tête ». *Mesure : 0/27 fiches et 0 micro-fiche A5 sur 17 avec une boucle sur la photo ; 27/27 récompensent sans réponse.* Responsables : design/motion, web, visuels.
2. **Comprendre : un vrai mécanisme, et un 1er écran utile** (N2 + reste de MF-3). Figures côte à côte en ≤ 220 px, puis un schéma de mécanisme relié à la chaîne. Ramener `c-pterygion` et `c-dystrophies` à 120 mots au plus. *Mesure : 0/27 figures de mécanisme ; 2,1–2,4 écrans ; 24–33 mots utiles au 1er écran.*
3. **Cohérence des délais de référence** (N3). Corriger `g-crise`, puis vérifier automatiquement drapeaux, arbre et `treatment.refer` sur les 27 fiches.
4. **Dépassements restants** (MF-12 et MF-1 partiels) :
   - Voir au-dessus de 60 mots : 14/27 (liste en P2.3).
   - « En deux phrases » de plus de 3 lignes : 27/27 (viser ≤ 25 mots).
   - Puces de plus de 15 mots : 4.
   - Micro-fiches A au-dessus de 200 mots : 2.
   - Micro-fiches et cartes sans figure : 10.
   - Responsable : pédagogie (`data/fiches-*.js`, `data/hy-cornee.js`, `data/module-a.js`, `data/capsules.js`).
5. **Murs et hubs non retouchés** (reste de MF-11, N6) :
   - `#b-bases/8` et `#c-bases/7` (boîtes à outils).
   - `#reviser` (8 cartes identiques).
   - `#cas` (498 mots, 0 figure).
   - Bannière Module C sur une impression d'OCT.
   - Responsables : design, pédagogie.

### P2.6 SHOULD-FIX du passage 1 : où en est-on ?
- **Corrigés** :
  - S-1 (sélecteur de niveau cassé) : remplacé par la pastille.
  - S-2 (« ≈ 1 min » dans l'en-tête de fiche) : retiré (voir N7 pour `module-b`).
  - S-6 (deux repliés du même nom) : Décider n'a plus aucun replié au niveau 1.
  - S-3 (sous-titres de niveau anglais sur l'accueil) : corrigé.
- **Non corrigés** :
  - S-4 et S-5 : 3 boutons fluo sur S'entraîner, et « J'ai terminé cette section » toujours là, y compris en fin de liste A5.
  - S-8 : « Je suis prêt à répondre » sans saisie.
  - S-9 : schéma OCT de pratique en disque noir.
  - S-10 : arbre sans vignette clinique.
  - S-12 : chrono du TBUT automatique.
  - S-13 : cartes du patron sans auto-évaluation.
  - S-15 : accueil sur 3,9 écrans, inchangé.
  - Badge « High yield » en anglais, et encadrés menthe (`--teal-wash`, hors palette v2).
  - Style hétérogène de « Quand référer » : les fiches glaucome commencent par « Référer en ophtalmologie : », pas les fiches cornée.
  - Carte « Au Québec » de `g-crise` sans contenu québécois (« souvent vu d'abord à l'urgence… »).
  - Formulations télégraphiques nées de la compression, par exemple `a-retine/dmla` : « Métamorphopsie récente : rétine en quelques jours (anti-VEGF) ».

### P2.7 Revue visuelle (passage 2)
- **Hiérarchie** : nettement meilleure. Sur Voir, la photo est le premier objet vu et la consigne « Observe » est juste dessous. Sur Décider, la carte-question marine avec Oui/Non est le point focal : c'est bien.
- **Monotonie** : Décider n'est plus un empilement de boîtes. Elle subsiste sur Apprendre (34 rangées), sur les listes A (17 rangées sur `a-retine`, beaucoup de vignettes orange de fond d'œil presque identiques), sur `b-bases/8` et sur Réviser.
- **Direction artistique** : l'habillage est cohérent, et l'autocollant fait son entrée dans le parcours principal. Mais il est mal employé (N1) et le feutre manque toujours. Les encadrés « High yield » (menthe) et « Le signe qui compte » (vert pâle) restent hors palette. Le hub Investigations, avec ses vignettes schématiques, est désormais la page la plus « Fluorescéine » après l'accueil.
- **Un externe resterait-il ?** Oui, plus volontiers. Une fiche se fait en 4 écrans courts, le module A se picore, Investigations commence par l'outil. Ce qui manque pour qu'il revienne, c'est le plaisir de **trouver** le signe lui-même ; aujourd'hui, l'application le lui montre et le félicite d'avoir regardé.

### Annexe P2. Mesures par écran (passage 2 : 186 écrans, 390 × 844, FR, niveau 1)

<details><summary>186 écrans</summary>

| Écran | Mots visibles | dont étiquettes SVG | Mots hors arbre | Mots 1er écran | Contenu commence à (px) | Figures | 1re figure (px) | Contrôles | Hauteur (écrans) | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|
| `#c-secheresse/voir` | 61 | 0 | — | 67 | 211 | 1 | 212 | 12 | 1.3 | > 60 mots; paragraphe > 3 lignes |
| `#c-secheresse/comprendre` | 116 | 0 | — | 23 | 211 | 2 | 243 | 7 | 2.38 | OK |
| `#c-secheresse/decider` | 122 | 0 | 102 | 76 | 211 | 0 | — | 8 | 1.79 | OK |
| `#c-secheresse/entrainer` | 72 | 0 | — | 77 | 211 | 0 | — | 7 | 1.3 | OK |
| `#c-bacterienne/voir` | 56 | 0 | — | 59 | 211 | 1 | 212 | 12 | 1.36 | paragraphe > 3 lignes |
| `#c-bacterienne/comprendre` | 102 | 0 | — | 20 | 211 | 2 | 243 | 7 | 2.3 | OK |
| `#c-bacterienne/decider` | 128 | 0 | 109 | 76 | 211 | 0 | — | 12 | 1.83 | OK |
| `#c-bacterienne/entrainer` | 75 | 0 | — | 77 | 211 | 0 | — | 7 | 1.25 | OK |
| `#c-atypiques/voir` | 58 | 0 | — | 63 | 211 | 1 | 212 | 11 | 1.33 | paragraphe > 3 lignes |
| `#c-atypiques/comprendre` | 104 | 0 | — | 22 | 211 | 2 | 243 | 7 | 2.38 | OK |
| `#c-atypiques/decider` | 128 | 0 | 106 | 77 | 211 | 0 | — | 8 | 1.82 | OK |
| `#c-atypiques/entrainer` | 71 | 0 | — | 75 | 211 | 0 | — | 7 | 1.28 | OK |
| `#c-herpes/voir` | 62 | 0 | — | 69 | 211 | 1 | 212 | 15 | 1.42 | > 60 mots; paragraphe > 3 lignes |
| `#c-herpes/comprendre` | 103 | 0 | — | 24 | 211 | 2 | 243 | 7 | 2.33 | OK |
| `#c-herpes/decider` | 144 | 0 | 124 | 83 | 211 | 0 | — | 10 | 1.86 | OK |
| `#c-herpes/entrainer` | 68 | 0 | — | 78 | 211 | 0 | — | 7 | 1.28 | OK |
| `#c-keratocone/voir` | 60 | 0 | — | 62 | 211 | 1 | 212 | 12 | 1.41 | paragraphe > 3 lignes |
| `#c-keratocone/comprendre` | 151 | 34 | — | 55 | 211 | 4 | 243 | 7 | 2.23 | OK |
| `#c-keratocone/decider` | 118 | 0 | 97 | 74 | 211 | 0 | — | 11 | 1.76 | OK |
| `#c-keratocone/entrainer` | 69 | 0 | — | 70 | 211 | 0 | — | 7 | 1.22 | OK |
| `#c-fuchs/voir` | 60 | 0 | — | 68 | 211 | 1 | 212 | 14 | 1.3 | paragraphe > 3 lignes |
| `#c-fuchs/comprendre` | 141 | 36 | — | 75 | 211 | 2 | 243 | 7 | 2.05 | OK |
| `#c-fuchs/decider` | 108 | 0 | 88 | 86 | 211 | 0 | — | 9 | 1.55 | OK |
| `#c-fuchs/entrainer` | 69 | 0 | — | 80 | 211 | 0 | — | 7 | 1.26 | OK |
| `#c-erosion/voir` | 54 | 0 | — | 64 | 211 | 1 | 212 | 12 | 1.44 | paragraphe > 3 lignes |
| `#c-erosion/comprendre` | 120 | 0 | — | 30 | 211 | 2 | 243 | 7 | 2.35 | OK |
| `#c-erosion/decider` | 126 | 0 | 105 | 82 | 211 | 0 | — | 8 | 1.8 | OK |
| `#c-erosion/entrainer` | 66 | 0 | — | 79 | 211 | 0 | — | 7 | 1.18 | OK |
| `#c-pterygion/voir` | 60 | 0 | — | 68 | 211 | 1 | 212 | 12 | 1.38 | paragraphe > 3 lignes |
| `#c-pterygion/comprendre` | 161 | 34 | — | 62 | 211 | 4 | 243 | 7 | 2.28 | > 120 mots (hors étiquettes) |
| `#c-pterygion/decider` | 109 | 0 | 87 | 78 | 211 | 0 | — | 7 | 1.67 | OK |
| `#c-pterygion/entrainer` | 63 | 0 | — | 75 | 211 | 0 | — | 7 | 1.26 | OK |
| `#c-greffe/voir` | 61 | 0 | — | 71 | 211 | 1 | 212 | 16 | 1.38 | > 60 mots; paragraphe > 3 lignes |
| `#c-greffe/comprendre` | 105 | 0 | — | 33 | 211 | 2 | 243 | 7 | 2.06 | OK |
| `#c-greffe/decider` | 129 | 0 | 107 | 83 | 211 | 0 | — | 11 | 1.7 | OK |
| `#c-greffe/entrainer` | 68 | 0 | — | 81 | 211 | 0 | — | 7 | 1.18 | OK |
| `#c-brulure/voir` | 62 | 0 | — | 65 | 211 | 1 | 212 | 10 | 1.33 | > 60 mots; paragraphe > 3 lignes |
| `#c-brulure/comprendre` | 152 | 36 | — | 73 | 211 | 2 | 243 | 7 | 1.96 | OK |
| `#c-brulure/decider` | 130 | 0 | 114 | 69 | 211 | 0 | — | 8 | 1.83 | OK |
| `#c-brulure/entrainer` | 68 | 0 | — | 74 | 211 | 0 | — | 7 | 1.2 | OK |
| `#c-dystrophies/voir` | 57 | 0 | — | 59 | 211 | 1 | 212 | 12 | 1.36 | paragraphe > 3 lignes |
| `#c-dystrophies/comprendre` | 127 | 0 | — | 28 | 211 | 2 | 243 | 7 | 2.21 | > 120 mots (hors étiquettes) |
| `#c-dystrophies/decider` | 110 | 0 | 90 | 71 | 211 | 0 | — | 11 | 1.61 | OK |
| `#c-dystrophies/entrainer` | 73 | 0 | — | 75 | 211 | 0 | — | 7 | 1.32 | OK |
| `#c-depots/voir` | 59 | 0 | — | 67 | 211 | 1 | 212 | 12 | 1.38 | paragraphe > 3 lignes |
| `#c-depots/comprendre` | 112 | 0 | — | 28 | 211 | 2 | 243 | 7 | 2.07 | OK |
| `#c-depots/decider` | 124 | 0 | 102 | 87 | 211 | 0 | — | 10 | 1.67 | OK |
| `#c-depots/entrainer` | 73 | 0 | — | 80 | 211 | 0 | — | 7 | 1.25 | OK |
| `#c-surface/voir` | 54 | 0 | — | 62 | 211 | 1 | 212 | 12 | 1.32 | paragraphe > 3 lignes |
| `#c-surface/comprendre` | 115 | 0 | — | 25 | 211 | 2 | 243 | 7 | 2.36 | OK |
| `#c-surface/decider` | 132 | 0 | 109 | 82 | 211 | 0 | — | 10 | 1.89 | OK |
| `#c-surface/entrainer` | 74 | 0 | — | 81 | 211 | 0 | — | 7 | 1.32 | OK |
| `#c-peripherie/voir` | 58 | 0 | — | 33 | 211 | 1 | 212 | 14 | 1.54 | paragraphe > 3 lignes |
| `#c-peripherie/comprendre` | 111 | 0 | — | 30 | 211 | 2 | 243 | 7 | 2.09 | OK |
| `#c-peripherie/decider` | 130 | 0 | 109 | 81 | 211 | 0 | — | 10 | 1.79 | OK |
| `#c-peripherie/entrainer` | 81 | 0 | — | 87 | 211 | 0 | — | 7 | 1.35 | OK |
| `#g-gpao/voir` | 70 | 0 | — | 75 | 211 | 1 | 212 | 12 | 1.44 | > 60 mots; paragraphe > 3 lignes |
| `#g-gpao/comprendre` | 110 | 6 | — | 26 | 211 | 2 | 243 | 7 | 2.32 | OK |
| `#g-gpao/decider` | 127 | 0 | 108 | 77 | 211 | 0 | — | 8 | 1.7 | OK |
| `#g-gpao/entrainer` | 64 | 0 | — | 73 | 211 | 0 | — | 7 | 1.24 | OK |
| `#g-hto/voir` | 61 | 0 | — | 68 | 211 | 1 | 212 | 8 | 1.32 | > 60 mots; paragraphe > 3 lignes |
| `#g-hto/comprendre` | 166 | 54 | — | 83 | 211 | 2 | 243 | 7 | 2.04 | OK |
| `#g-hto/decider` | 120 | 0 | 100 | 74 | 211 | 0 | — | 9 | 1.76 | OK |
| `#g-hto/entrainer` | 63 | 0 | — | 73 | 211 | 0 | — | 7 | 1.18 | OK |
| `#g-gpn/voir` | 66 | 0 | — | 70 | 211 | 1 | 212 | 13 | 1.43 | > 60 mots; paragraphe > 3 lignes |
| `#g-gpn/comprendre` | 129 | 24 | — | 43 | 211 | 2 | 243 | 7 | 2.37 | OK |
| `#g-gpn/decider` | 126 | 0 | 107 | 73 | 211 | 0 | — | 8 | 1.67 | OK |
| `#g-gpn/entrainer` | 63 | 0 | — | 71 | 211 | 0 | — | 7 | 1.26 | OK |
| `#g-fermeture/voir` | 63 | 0 | — | 34 | 211 | 1 | 212 | 14 | 1.56 | > 60 mots; paragraphe > 3 lignes |
| `#g-fermeture/comprendre` | 145 | 39 | — | 80 | 211 | 2 | 243 | 7 | 1.93 | OK |
| `#g-fermeture/decider` | 126 | 0 | 104 | 78 | 211 | 0 | — | 8 | 1.79 | OK |
| `#g-fermeture/entrainer` | 73 | 0 | — | 84 | 211 | 0 | — | 7 | 1.26 | OK |
| `#g-crise/voir` | 65 | 0 | — | 76 | 211 | 1 | 212 | 12 | 1.23 | > 60 mots; paragraphe > 3 lignes |
| `#g-crise/comprendre` | 100 | 0 | — | 33 | 211 | 2 | 243 | 7 | 2.09 | OK |
| `#g-crise/decider` | 155 | 0 | 132 | 97 | 211 | 0 | — | 7 | 1.91 | OK |
| `#g-crise/entrainer` | 70 | 0 | — | 76 | 211 | 0 | — | 7 | 1.22 | OK |
| `#g-pxf/voir` | 63 | 0 | — | 65 | 211 | 1 | 212 | 17 | 1.37 | > 60 mots; paragraphe > 3 lignes |
| `#g-pxf/comprendre` | 103 | 0 | — | 28 | 211 | 2 | 243 | 7 | 2.04 | OK |
| `#g-pxf/decider` | 151 | 0 | 129 | 77 | 211 | 0 | — | 8 | 1.88 | OK |
| `#g-pxf/entrainer` | 67 | 0 | — | 73 | 211 | 0 | — | 7 | 1.26 | OK |
| `#g-pigmentaire/voir` | 65 | 0 | — | 68 | 211 | 1 | 212 | 13 | 1.4 | > 60 mots; paragraphe > 3 lignes |
| `#g-pigmentaire/comprendre` | 107 | 0 | — | 28 | 211 | 2 | 243 | 7 | 2.01 | OK |
| `#g-pigmentaire/decider` | 124 | 0 | 103 | 79 | 211 | 0 | — | 8 | 1.7 | OK |
| `#g-pigmentaire/entrainer` | 77 | 0 | — | 86 | 211 | 0 | — | 7 | 1.2 | OK |
| `#g-neovasculaire/voir` | 66 | 0 | — | 68 | 211 | 1 | 212 | 15 | 1.39 | > 60 mots; paragraphe > 3 lignes |
| `#g-neovasculaire/comprendre` | 144 | 37 | — | 73 | 211 | 2 | 243 | 7 | 1.96 | OK |
| `#g-neovasculaire/decider` | 121 | 0 | 100 | 85 | 211 | 0 | — | 10 | 1.7 | OK |
| `#g-neovasculaire/entrainer` | 64 | 0 | — | 70 | 211 | 0 | — | 7 | 1.26 | OK |
| `#g-secondaires/voir` | 64 | 0 | — | 69 | 211 | 1 | 212 | 14 | 1.33 | > 60 mots; paragraphe > 3 lignes |
| `#g-secondaires/comprendre` | 94 | 0 | — | 25 | 211 | 2 | 243 | 7 | 2.09 | OK |
| `#g-secondaires/decider` | 128 | 0 | 105 | 80 | 211 | 0 | — | 11 | 1.79 | OK |
| `#g-secondaires/entrainer` | 74 | 0 | — | 78 | 211 | 0 | — | 7 | 1.32 | OK |
| `#g-postop/voir` | 69 | 0 | — | 71 | 211 | 1 | 212 | 15 | 1.44 | > 60 mots; paragraphe > 3 lignes |
| `#g-postop/comprendre` | 90 | 0 | — | 28 | 211 | 2 | 243 | 7 | 2.01 | OK |
| `#g-postop/decider` | 123 | 0 | 102 | 79 | 211 | 0 | — | 10 | 1.75 | OK |
| `#g-postop/entrainer` | 76 | 0 | — | 81 | 211 | 0 | — | 7 | 1.25 | OK |
| `#g-papille/voir` | 56 | 0 | — | 69 | 211 | 1 | 212 | 14 | 1.26 | paragraphe > 3 lignes |
| `#g-papille/comprendre` | 102 | 0 | — | 39 | 211 | 2 | 243 | 7 | 2 | OK |
| `#g-papille/decider` | 129 | 0 | 108 | 80 | 211 | 0 | — | 9 | 1.72 | OK |
| `#g-papille/entrainer` | 68 | 0 | — | 77 | 211 | 0 | — | 7 | 1.3 | OK |
| `#g-cristallin/voir` | 58 | 0 | — | 67 | 211 | 1 | 212 | 13 | 1.43 | paragraphe > 3 lignes |
| `#g-cristallin/comprendre` | 131 | 36 | — | 78 | 211 | 2 | 243 | 7 | 1.9 | OK |
| `#g-cristallin/decider` | 131 | 0 | 111 | 82 | 211 | 0 | — | 10 | 1.85 | OK |
| `#g-cristallin/entrainer` | 77 | 0 | — | 86 | 211 | 0 | — | 7 | 1.32 | OK |
| `#g-dev/voir` | 59 | 0 | — | 67 | 211 | 1 | 212 | 14 | 1.48 | paragraphe > 3 lignes |
| `#g-dev/comprendre` | 130 | 36 | — | 81 | 211 | 2 | 243 | 7 | 1.87 | OK |
| `#g-dev/decider` | 143 | 0 | 124 | 88 | 211 | 0 | — | 10 | 1.79 | OK |
| `#g-dev/entrainer` | 80 | 0 | — | 89 | 211 | 0 | — | 7 | 1.3 | OK |
| `#inv-bscan` | 193 | 2 | — | 54 | 61 | 2 | 403 | 18 | 2.6 | 2.6 écrans |
| `#inv-ascan` | 165 | 28 | — | 79 | 61 | 2 | 291 | 15 | 2.21 | OK |
| `#inv-oct` | 156 | 23 | — | 66 | 61 | 2 | 273 | 31 | 2.18 | OK |
| `#inv-gonio` | 136 | 2 | — | 52 | 61 | 2 | 245 | 18 | 2.41 | OK |
| `#inv-fondoeil` | 166 | 32 | — | 44 | 61 | 2 | 245 | 34 | 2.5 | OK |
| `#inv-cv` | 165 | 3 | — | 61 | 61 | 2 | 533 | 15 | 2.48 | OK |
| `#a-anatomie` | 73 | 0 | — | 63 | 61 | 0 | — | 3 | 1.35 | OK |
| `#a-anatomie/globe` | 137 | 62 | — | 131 | 197 | 1 | 496 | 36 | 1.38 | OK |
| `#a-anatomie/cornee` | 70 | 18 | — | 82 | 197 | 1 | 354 | 9 | 1 | OK |
| `#a-anatomie/angle` | 103 | 47 | — | 99 | 197 | 2 | 313 | 14 | 1.36 | OK |
| `#a-anatomie/papille` | 32 | 3 | — | 45 | 197 | 1 | 269 | 8 | 1.17 | OK |
| `#a-anatomie/annexes` | 40 | 19 | — | 53 | 197 | 1 | 198 | 8 | 1 | OK |
| `#a-anatomie/photos` | 22 | 0 | — | 31 | 197 | 1 | 198 | 7 | 1.03 | OK |
| `#a-physiologie` | 75 | 0 | — | 60 | 61 | 0 | — | 3 | 1.45 | OK |
| `#a-physiologie/aqueuse` | 185 | 14 | — | 78 | 197 | 1 | 198 | 23 | 2.22 | OK |
| `#a-physiologie/pio` | 87 | 0 | — | 98 | 197 | 0 | — | 4 | 1.1 | 0 figure |
| `#a-physiologie/film-lacrymal` | 153 | 0 | — | 81 | 197 | 1 | 198 | 7 | 2.07 | contenu qui change seul |
| `#a-physiologie/transparence` | 227 | 18 | — | 86 | 197 | 1 | 198 | 17 | 2.46 | > 200 mots |
| `#a-physiologie/refraction` | 138 | 0 | — | 99 | 197 | 1 | 198 | 5 | 1.7 | OK |
| `#a-physiologie/pupille` | 92 | 0 | — | 104 | 197 | 0 | — | 4 | 1.13 | 0 figure |
| `#a-examen` | 73 | 0 | — | 45 | 61 | 0 | — | 3 | 1.61 | OK |
| `#a-examen/av` | 119 | 0 | — | 107 | 197 | 0 | — | 4 | 1.39 | 0 figure |
| `#a-examen/pupilles` | 165 | 6 | — | 90 | 197 | 1 | 198 | 10 | 1.94 | OK |
| `#a-examen/lampe` | 166 | 21 | — | 88 | 197 | 2 | 198 | 20 | 2.37 | OK |
| `#a-examen/fluoresceine` | 118 | 0 | — | 49 | 197 | 1 | 453 | 18 | 1.98 | OK |
| `#a-examen/tonometrie` | 131 | 0 | — | 52 | 197 | 1 | 198 | 10 | 1.98 | OK |
| `#a-examen/gonioscopie` | 137 | 19 | — | 90 | 197 | 1 | 198 | 15 | 1.77 | OK |
| `#a-examen/pachymetrie` | 100 | 0 | — | 76 | 197 | 1 | 198 | 7 | 1.5 | OK |
| `#a-examen/papille` | 185 | 42 | — | 49 | 197 | 3 | 492 | 19 | 2.9 | 2.9 écrans |
| `#a-imagerie` | 65 | 0 | — | 51 | 61 | 0 | — | 3 | 1.4 | OK |
| `#a-imagerie/structure` | 138 | 42 | — | 75 | 197 | 3 | 607 | 13 | 2.45 | OK |
| `#a-imagerie/oct` | 156 | 27 | — | 106 | 197 | 1 | 346 | 16 | 1.81 | OK |
| `#a-imagerie/topographie` | 140 | 17 | — | 78 | 197 | 2 | 382 | 13 | 1.94 | OK |
| `#a-imagerie/champs-visuels` | 213 | 30 | — | 54 | 197 | 3 | 585 | 26 | 3.44 | 3.44 écrans |
| `#a-imagerie/speculaire` | 115 | 0 | — | 67 | 197 | 1 | 198 | 7 | 1.83 | OK |
| `#a-retine` | 237 | 0 | — | 60 | 61 | 0 | — | 3 | 3.29 | > 200 mots; 3.29 écrans |
| `#a-retine/cataracte-nucleaire` | 108 | 0 | — | 61 | 197 | 1 | 198 | 12 | 1.81 | OK |
| `#a-retine/cataracte-corticale-scp` | 105 | 0 | — | 64 | 197 | 1 | 198 | 13 | 1.8 | OK |
| `#a-retine/cataracte-mature` | 106 | 0 | — | 91 | 230 | 1 | 231 | 14 | 1.61 | OK |
| `#a-retine/opacification-capsulaire` | 108 | 0 | — | 70 | 197 | 1 | 198 | 10 | 1.74 | OK |
| `#a-retine/bscan` | 109 | 0 | — | 80 | 197 | 1 | 198 | 5 | 1.68 | OK |
| `#a-retine/decollement-retine` | 107 | 0 | — | 65 | 197 | 1 | 198 | 11 | 1.86 | OK |
| `#a-retine/decollement-choroidien` | 111 | 0 | — | 65 | 197 | 1 | 198 | 15 | 1.87 | OK |
| `#a-retine/dmla` | 106 | 0 | — | 73 | 230 | 1 | 231 | 13 | 1.89 | OK |
| `#a-retine/retinopathie-diabetique` | 106 | 0 | — | 60 | 230 | 1 | 231 | 20 | 1.88 | OK |
| `#a-retine/occlusions-retiniennes` | 101 | 0 | — | 64 | 197 | 1 | 198 | 15 | 1.86 | OK |
| `#a-retine/retinopathie-hypertensive` | 106 | 0 | — | 62 | 230 | 1 | 231 | 11 | 1.92 | OK |
| `#a-retine/macula-chirurgicale` | 108 | 0 | — | 62 | 230 | 1 | 231 | 15 | 1.88 | OK |
| `#a-retine/peripherie-vitre` | 104 | 0 | — | 67 | 230 | 1 | 231 | 11 | 1.83 | OK |
| `#a-retine/inflammation-infection` | 101 | 0 | — | 72 | 197 | 1 | 198 | 16 | 1.78 | OK |
| `#a-retine/papille-oedeme` | 109 | 0 | — | 86 | 197 | 1 | 198 | 15 | 1.68 | OK |
| `#a-retine/pupilles-neuro` | 106 | 0 | — | 44 | 230 | 1 | 231 | 10 | 2.02 | OK |
| `#a-retine/tumeurs-toxicite-trauma` | 110 | 0 | — | 66 | 230 | 1 | 231 | 15 | 1.94 | OK |
| `#b-bases` | 60 | 0 | — | 78 | 211 | 1 | 212 | 12 | 1.29 | OK |
| `#b-bases/2` | 133 | 62 | — | 151 | 211 | 1 | 212 | 2 | 1.18 | OK |
| `#b-bases/3` | 108 | 18 | — | 127 | 211 | 2 | 212 | 4 | 1.49 | OK |
| `#b-bases/4` | 57 | 0 | — | 73 | 211 | 0 | — | 1 | 1 | 0 figure |
| `#b-bases/5` | 61 | 0 | — | 74 | 211 | 1 | 212 | 2 | 1.15 | OK |
| `#b-bases/6` | 103 | 18 | — | 62 | 211 | 2 | 212 | 10 | 1.51 | OK |
| `#b-bases/7` | 62 | 0 | — | 75 | 211 | 0 | — | 2 | 1 | 0 figure |
| `#b-bases/8` | 125 | 0 | — | 90 | 211 | 0 | — | 19 | 2.19 | 0 figure |
| `#b-bases/9` | 59 | 0 | — | 65 | 211 | 0 | — | 12 | 1.6 | 0 figure |
| `#c-bases` | 61 | 0 | — | 76 | 211 | 1 | 212 | 10 | 1.25 | OK |
| `#c-bases/2` | 134 | 62 | — | 151 | 211 | 1 | 212 | 6 | 1.18 | OK |
| `#c-bases/3` | 90 | 18 | — | 108 | 211 | 1 | 212 | 5 | 1.07 | OK |
| `#c-bases/4` | 79 | 0 | — | 95 | 211 | 1 | 212 | 8 | 1.13 | OK |
| `#c-bases/5` | 86 | 0 | — | 40 | 211 | 2 | 212 | 7 | 1.53 | OK |
| `#c-bases/6` | 58 | 0 | — | 71 | 211 | 0 | — | 1 | 1 | 0 figure |
| `#c-bases/7` | 130 | 0 | — | 69 | 211 | 0 | — | 18 | 2.26 | 0 figure |
| `#c-bases/8` | 69 | 0 | — | 69 | 211 | 0 | — | 12 | 1.73 | 0 figure |
| `#accueil` | 232 | 0 | — | 71 | 61 | 4 | -77 | 3 | 3.89 | > 200 mots; 3.89 écrans |
| `#apprendre` | 318 | 0 | — | 72 | 61 | 0 | — | 3 | 4.42 | > 200 mots; 4.42 écrans |
| `#reviser` | 103 | 0 | — | 63 | 61 | 0 | — | 4 | 1.78 | OK |
| `#investigations` | 108 | 19 | — | 48 | 61 | 6 | 314 | 0 | 2.79 | 2.79 écrans |
| `#module-a` | 107 | 0 | — | 68 | 61 | 0 | — | 1 | 1.65 | OK |
| `#module-b` | 160 | 0 | — | 47 | 61 | 14 | 480 | 3 | 5.37 | 5.37 écrans |
| `#module-c` | 150 | 0 | — | 45 | 61 | 13 | 454 | 3 | 4.94 | 4.94 écrans |
| `#cas` | 498 | 0 | — | 106 | 61 | 0 | — | 0 | 4.23 | > 200 mots; 4.23 écrans |

</details>

Fichiers du passage 2 (dossier de travail du critique) : `measure2.py`, `routes2.json`, `metrics2-final.csv`, `shots2/`, `interact2.py`, `interact3.py`.

---

# Passage 1 (cycle 7) : historique


Date : 21 novembre 2026. Arbre testé : `main` @ 607aa41, construit avec `python3 tools/build_web.py`, servi en local, Chromium (Playwright), 390 × 844, FR, niveau par défaut « Fondamentaux », stockage vierge, requêtes externes bloquées.
Référence : `docs/STYLE-PEDAGO.md` (barème obligatoire) et `brand/BRAND.md`. Un écran qui dépasse un plafond est un défaut, pas une remarque.
Mesures : 127 écrans (27 fiches × 4 étapes, 6 pages Investigations, 5 pages du module A, accueil, Apprendre, Réviser, hub Investigations, Module B, Cas, capsules B0 et C0). Les mots sont comptés dans le DOM rendu (texte visible, navigation et repliés exclus). Les figures comptées sont les `img`, `svg` ≥ 120 × 80 et `canvas` visibles. Les minuteries sont instrumentées (`setTimeout`/`setInterval`) et les mutations du contenu sont observées pendant 4 s sans aucune action.

## Note globale : 4 / 10

Le cycle 7 a corrigé la **structure** des fiches, mais pas la **manière d'enseigner**. Ocelle se vend avec « Apprends à voir le signe qui compte », et pourtant on y apprend surtout en lisant.

- **Ce qui est réglé** (les plaintes du propriétaire) :
  - Les 4 étapes ne sont plus empilées.
  - Les algorithmes des fiches sont des arbres (27/27).
  - Aucune animation ne rythme le contenu à la place de l'apprenant (0 minuterie de contenu sur 127 écrans).
  - Aucun tableau n'est visible par défaut sur les 108 écrans de fiche.
  - Comprendre tient ses 120 mots sur 27/27 écrans.
- **Ce qui ne l'est pas** :
  1. **L'image disparaît après l'étape 1.** 81 des 108 écrans de fiche n'ont **aucune** figure : Comprendre 0/27, Décider 0/27, S'entraîner 0/27. Les schémas normal/pathologique et d'anatomie existent pourtant pour les 27 fiches. Ils dorment dans « Pour aller plus loin ».
  2. **La moitié de l'application n'a pas été touchée par le barème.**
     - Module A : 518 à 5 595 mots par page, 6 à 48 écrans de défilement.
     - Capsules B0/C0 : environ 1 100 mots et 10 écrans chacune.
     - Investigations : environ 500 mots de texte avant la première figure, qui n'arrive qu'au 3e écran.
     - Module B : 1 319 mots et 13,5 écrans.
  3. **L'écran de fiche est mangé par l'en-tête.** Sur les 108 écrans, le contenu commence entre 469 et 639 px (médiane 546 px, soit 65 % de la hauteur). Sur Voir, on aperçoit à peine le haut de la photo. La légende et le bouton « Révéler » sont hors écran.
  4. **Décider se lit en deux minutes, pas en une.**
     - Il occupe 3,3 à 4,3 écrans et compte 208 à 328 mots, arbre compris.
     - L'arbre est une échelle verticale de 923 à 1 581 px.
     - Plusieurs arbres contiennent des **erreurs de logique clinique** créées par la structure « en tamis ».
  5. **La signature de marque manque sur le chemin principal.** Sur les photos des fiches, « Révéler » affiche une liste de texte, sans boucle au feutre ni autocollant. La légende donne déjà le diagnostic avant même la révélation. Le feutre n'existe que dans Investigations et dans les cas.
  6. **Le niveau 2 recrée exactement ce dont le propriétaire se plaignait.** Ce niveau s'appelle « Pratique clinique », sous-titré « Clinical clerkship », c'est-à-dire le niveau même de l'externe. Décider y monte à 595–699 mots, 6,7–8 écrans et 3 tableaux en enfilade. Le niveau 3 est identique au niveau 2.
  7. **Le bloc Traitement n'est pas écrit pour un externe.**
     - « Quand référer » est rédigé du point de vue du spécialiste et rattaché à chaque traitement.
     - Il est parfois incohérent : pour la conjonctivite, on lit « Au-delà de quelques jours : suivi de la PIO ».
     - Les pièges sont détachés du médicament qu'ils concernent.

Un externe motivé finira une fiche. Il ne reviendra pas pour le module A, et il ne lira pas les 500 mots qui précèdent l'outil OCT. Ce sont pourtant les meilleures parties : outils et cas en images.

## 1. Mesures : synthèse

Les budgets « ≈ 200 (1 min) » appliquent la règle générale du barème : chaque écran doit se lire en moins d'une minute.

| Écran | n | Mots médiane (min–max) | Plafond | Hors plafond | Figures visibles médiane | Écrans à 0 figure | 1re figure (px, médiane) | Hauteur (écrans) médiane (max) | Mots au 1er écran (méd.) | Tableaux visibles | Arbre | Animations auto-rythmées |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Voir | 27 | 66 (57–76) | 60 | 24 | 1 | 0 | 546 | 1.8 (2.0) | 32 | 0 | 0/27 | 0 |
| Comprendre | 27 | 81 (65–91) | 120 | 0 | 0 | 27 | — | 1.6 (1.6) | 73 | 0 | 0/27 | 0 |
| Décider (hors arbre) | 27 | 154 (124–196) | 180 | 4 | 0 | 27 | — | 3.8 (4.3) | 56 | 0 | 27/27 | 0 |
| S’entraîner | 27 | 74 (67–85) | ≈200 (1 min) | 0 | 0 | 27 | — | 1.7 (1.9) | 56 | 0 | 0/27 | 0 |
| Investigations | 6 | 496 (469–556) | ≈200 (1 min) | 6 | 2 | 0 | 2211 | 4.5 (4.9) | 139 | 0 | 0/6 | 0 |
| Module A | 5 | 1939 (518–5595) | ≈200 (1 min) | 5 | 14 | 0 | 1994 | 21.0 (48.3) | 82 | 0 | 0/5 | 1 |
| Capsules B0/C0 | 2 | 1075 (1021–1130) | ≈200 (1 min) | 2 | 6.5 | 0 | 1131 | 10.2 (10.6) | 115 | 0 | 0/2 | 0 |
| Hubs + accueil | 5 | 458 (103–1319) | ≈200 (1 min) | 4 | 0 | 4 | 754 | 4.2 (13.5) | 106 | 1 | 0/5 | 0 |
| Accueil | 1 | 231 (231–231) | ≈200 (1 min) | 1 | 4 | 0 | — | 3.9 (3.9) | 71 | 0 | 0/1 | 0 |

Points saillants :
- **Voir** : 24/27 écrans dépassent 60 mots rendus (57–76).
  - Ce dépassement vient de la légende (≈ 12 mots) et de la ligne de crédit (≈ 10 mots) ajoutées aux deux phrases (27–43 mots).
  - L'image commence à 469–639 px (médiane 546). Une fois retirée la barre d'onglets (64 px), il reste 140 à 310 px visibles de la photo au premier écran.
  - « En deux phrases » tient sur 5 à 7 lignes sur téléphone : **27/27 dépassent la règle des 3 lignes**.
- **Comprendre** : 65–91 mots ✓. En revanche, **27/27 n'ont pas de figure de mécanisme** ✗.
  - Puces « essentiel » de plus de 15 mots : `c-secheresse` (18), `c-erosion` (16), `c-pterygion` (16), `c-dystrophies` (16).
- **Décider** : hors arbre, 124–196 mots.
  - Hors plafond : `g-fermeture` 186, `g-crise` 193, `g-secondaires` 196, `g-cristallin` 182.
  - Avec l'arbre : 208–328 mots (médiane 238). Arbre : 923–1 581 px. Bloc Traitement : 546–1 020 px. Aucune figure.
  - Questions ≤ 8 mots ✓, actions ≤ 12 mots ✓ (maximum 12 sur `g-crise`), drapeaux ≤ 3 ✓.
- **S'entraîner** : 67–85 mots, 3 questions du patron + mini-QCM ✓. Aucune image : même le QCM à schéma est replié derrière « Commencer ».
- **Investigations** : 469–556 mots, 4,3–4,9 écrans, première figure à 2 153–2 379 px (3e écran) sur les 6 pages.
- **Module A** :

  | Page | Mots | Écrans |
  |---|---|---|
  | `a-anatomie` | 518 | 6,1 |
  | `a-physiologie` | 1 747 | 16,2 |
  | `a-imagerie` | 1 939 | 21 |
  | `a-examen` | 3 227 | 31,3 |
  | `a-retine` | 5 595 | 48,3 (environ 28 min de lecture sur une seule page) |

- **Capsules** : `b-bases` 1 130 mots et 10,6 écrans ; `c-bases` 1 021 mots et 9,8 écrans.
- **Hubs** :
  - `module-b` : 1 319 mots, 13,5 écrans.
  - `apprendre` : 458 mots, 5,4 écrans, 0 figure ≥ 80 px.
  - `cas` : 498 mots, 0 figure.
  - hub `investigations` : 303 mots, 0 image.
- **Animations auto-rythmées** : 0 ✓. La lecture animée à 1 s par étape a disparu, et le mode « Pas à pas » de l'arbre est piloté par l'apprenant.
  - Seule exception mesurée : `a-physiologie` (597 mutations en 4 s sans action). Ce sont des simulations `requestAnimationFrame` (particules d'humeur aqueuse, chrono du TBUT qui démarre avant que l'apprenant ait cligné). Ce n'est pas du texte rythmé, mais voir SHOULD-FIX.
  - Le seul `setInterval` (lampe oscillante, 2,6 s) est déclenché par l'apprenant.

Fichiers : CSV complet (127 lignes, 44 colonnes) dans le dossier de travail du critique, `metrics-final.csv` ; tableau par écran en annexe A.

## 2. MUST-FIX (classés par gravité)

Chaque ligne donne l'écran, la mesure, le plafond, la correction et le responsable.

### MF-1. Module A, capsules et aperçus de module : des murs de texte
- **Écrans** :
  - `#a-retine` : 5 595 mots, 48 écrans, 84 paragraphes de plus de 3 lignes.
  - `#a-examen` : 3 227 mots, 31 écrans, 53 paragraphes longs.
  - `#a-imagerie` : 1 939 mots, 21 écrans.
  - `#a-physiologie` : 1 747 mots, 16 écrans.
  - `#a-anatomie` : 518 mots, 6 écrans.
  - `#b-bases` : 1 130 mots, 10,6 écrans, paragraphes jusqu'à 12 lignes.
  - `#c-bases` : 1 021 mots, 9,8 écrans.
  - `#module-b` : 1 319 mots, 13,5 écrans.
- **Plafond** : un écran = moins d'une minute (≈ 200 mots) ; 4 écrans par notion ; pas de paragraphe de plus de 3 lignes.
- **Constat** : ces pages ignorent entièrement le barème. On y trouve des répétitions : sur `a-examen`, « SAAQ classe 5 » apparaît 3 fois, et l'équivalence 6/12 = 20/40 = logMAR 0,3 est donnée deux fois en 2 écrans. On y trouve aussi « Tout afficher sur cette page ». La première figure de `a-examen` arrive au 7e écran.
- **Correction** :
  1. Découper chaque section (A3.1 Acuité, A3.2 Pupilles, A4.x OCT…) en micro-fiche « Voir / Comprendre / Faire » d'un écran chacune, avec les mêmes plafonds que les fiches.
  2. Mettre la simulation ou la figure en tête de chaque micro-fiche.
  3. Supprimer « Tout afficher » et les doublons entre « L'essentiel » et les listes Normal/Pathologique.
  4. Réduire les capsules B0/C0 à 5 cartes : triage, vocabulaire en image, familles, examens, principes de traitement. Chaque carte doit avoir une figure et compter 120 mots au plus.
  5. Ramener `module-b` à une carte par fiche de 12 mots au plus (le résumé en une ligne passe dans la fiche).
- **Responsables** :
  - Pédagogie : `data/module-a.js`, `data/ext-a5-a.js`, `data/ext-a5-b.js`, `data/hy-module-a.js`, `data/capsules.js`.
  - Web : moteur des sections A et des capsules dans `src/views.js` / `src/learn.js`.

### MF-2. Investigations : texte d'abord, figure au 3e écran
- **Écrans** : `#inv-bscan` (556 mots, 1re figure à 2 379 px), `#inv-ascan` (504 mots, 2 156 px), `#inv-oct` (488 mots, 2 249 px), `#inv-gonio` (511 mots, 2 153 px), `#inv-fondoeil` (484 mots, 2 174 px), `#inv-cv` (469 mots, 2 342 px). Toutes ces pages font 4,3 à 4,9 écrans.
- **Plafond** : figures avant le texte ; 1 minute par écran.
- **Constat** : l'ordre est À quoi ça sert → Comment faire et lire (6 étapes numérotées) → Repères normaux → Signes clés → Pièges, puis l'outil, puis la pratique. On retrouve la monotonie liste/liste/liste dont le propriétaire se plaint.
- **Correction** :
  1. Inverser l'ordre : une image réelle annotée (boucle au feutre) en tête avec une phrase « À quoi ça sert ».
  2. Puis l'outil (Couches OCT, Grader l'angle…).
  3. Puis « Observe, réponds, révèle ».
  4. Mettre « Comment lire », « Repères », « Signes », « Pièges » en 4 onglets ou cartes à balayer de 60 mots au plus chacun, sous la pratique.
- **Responsables** : exercices interactifs (`src/investigations.js`, fonction `render`) ; pédagogie (`data/investigations.js`).

### MF-3. Comprendre n'a pas de figure de mécanisme (27/27)
- **Écrans** : les 27 `#<fiche>/comprendre`.
- **Mesure** : 0 figure. Le barème exige « 1 figure de mécanisme ».
- **Constat** : le « mécanisme » est une pile de boîtes de texte qu'on déroule (« Maillon suivant (2/5) »). Or les 27 fiches ont `compare` (schéma normal/pathologique) et `anatomy.figure`, cachés dans « Pour aller plus loin » de Voir. `g-crise` en offre un exemple parlant : le bloc pupillaire, l'iris bombé et l'angle fermé sont la figure idéale, et le schéma de gonioscopie existe déjà dans `src/figures-*.js`.
- **Correction** :
  1. Afficher `f.compare` (normal à gauche, pathologique à droite) en tête de Comprendre.
  2. Relier chaque maillon de la chaîne à une zone du schéma : toucher le maillon met la zone en surbrillance.
  3. Garder la chaîne en 5 étiquettes courtes sous la figure.
- **Responsables** : web (`src/views.js`, `ficheView`, branche `comprendre`) ; ressources visuelles pour les zones de surbrillance (`src/figures-a.js`, `src/figures-b.js`).

### MF-4. L'en-tête de fiche occupe 55 à 76 % du premier écran (108/108)
- **Écrans** : tous les écrans de fiche. Le contenu commence entre 469 et 639 px, médiane 546. Le pire est `c-erosion` et `g-dev` : 639 px sur Voir, 607 sur les autres étapes.
- **Plafond implicite** : Voir = « 1 image ». L'image doit être au-dessus de la ligne de flottaison, avec sa question.
- **Constat** : l'en-tête empile le fil d'Ariane, le surtitre, un H1 de 2 à 4 lignes à environ 40 px, le sous-titre anglais, les étiquettes, « Niveau de lecture », un sélecteur de niveau à 3 boutons qui casse sur 2 rangées (avec une case vide) et les 4 pastilles. Le tout est répété sur les 4 étapes. Sur Voir, il ne reste que 24 à 48 mots visibles au premier écran ; la légende et « Révéler les trouvailles » sont toujours sous la ligne de flottaison.
- **Correction** :
  - Une barre compacte collante : titre sur une ligne (≤ 22 px, coupé avec ellipse) et pastilles.
  - Fil d'Ariane masqué sous 600 px.
  - Sous-titre anglais masqué en mode FR (ou seulement sur Voir).
  - Sélecteur de niveau retiré de la fiche (il existe déjà dans Apprendre et dans les réglages).
  - Étiquettes réduites à une seule (Urgent ou Fréquent).
  - Cible : contenu à 200 px au plus sur 390 × 844.
- **Responsables** : web/design (`src/views.js`, en-tête de `ficheView` ; `src/styles.css` `.fiche-head`, `.depth-row`, `.fsteps`).

### MF-5. Décider : 3 à 4 écrans, et un arbre en échelle qui ne se voit pas d'un coup d'œil
- **Écrans** : les 27 `#<fiche>/decider`. Hauteur 3,3–4,3 écrans. Mots hors arbre au-dessus de 180 : `g-secondaires` 196, `g-crise` 193, `g-fermeture` 186, `g-cristallin` 182. Total avec arbre : 208–328 mots.
- **Constat** :
  - En vue d'ensemble (par défaut), l'arbre est une colonne de boîtes marine suivies de deux boîtes Oui/Non. Il mesure 923 à 1 581 px : on ne voit jamais sa forme.
  - Des feuilles ne sont que du remplissage : « Question suivante. » deux fois dans `c-herpes`, trois fois dans `c-depots`, deux fois dans `g-postop`. S'y ajoutent « Couche suivante », « Continuer », etc.
  - Le bloc Traitement (546–1 020 px) vient ensuite.
  - « Lisible en moins d'une minute » est impossible.
- **Correction** :
  1. Mettre « Pas à pas » par défaut : une question par carte, le chemin parcouru en fil d'Ariane fluo et une mini-carte de l'arbre (nœuds en points) en haut. Le tout tient sur un écran.
  2. Supprimer toute feuille sans action.
  3. Placer le bloc Traitement dans une 5e pastille « Traiter », ou sur une carte qu'on fait glisser.
  4. Réécrire les 4 fiches hors plafond.
- **Responsables** : exercices interactifs (`src/tree.js`, `src/tree.css`) ; web pour la découpe (`src/views.js`) ; pédagogie pour les 4 fiches (`data/fiches-glaucome.js`).

### MF-6. Erreurs de logique clinique dans les arbres (structure « en tamis »)
`cont` impose une chaîne où une seule branche continue. Les actions suivantes deviennent ainsi inatteignables, ou atteignables par le mauvais chemin :
- `c-herpes` : la prophylaxie HEDS (Q4) n'est atteignable **que** si « Éruption V1 = Oui » (zona). Les chemins HSV épithélial et stromal finissent en Q1 et Q2. La prophylaxie HSV est donc rattachée au zona.
- `g-dev` : après une chirurgie de l'angle réussie chez un nourrisson (Q4 = Non), l'arbre demande « Adulte : œdème, corectopie… ? » (Q5, syndrome ICE).
- `g-secondaires` : « Dépôt ou implant de stéroïde en cause ? » (Q4) n'est atteint que si Q1 « PIO élevée sous stéroïde » vaut Non.
- `g-neovasculaire` : la cause (rétine ou carotide, avec le Doppler carotidien et le risque d'AVC) n'est demandée qu'en Q5, et seulement si le potentiel visuel est utile. L'œil sans potentiel ne reçoit jamais le bilan systémique.
- `c-keratocone` : l'enfant traité par CXL (Q2 = Oui) n'atteint jamais la réhabilitation visuelle (Q5 : lunettes ou lentilles).
- `g-crise` : pour un externe, la seule action qui compte, « appeler l'ophtalmologiste de garde **maintenant** », n'apparaît qu'en Q4-Non (crise réfractaire).
- **Correction** :
  1. Permettre un vrai branchement (`yes: {go: k}`, `no: {go: j}`) dans `src/tree.js`.
  2. Faire relire les 27 arbres par un clinicien, chemin par chemin : chaque chemin doit finir sur une action, et aucune action essentielle ne doit dépendre d'une branche sans rapport.
  3. Mettre l'appel à l'ophtalmologiste au nœud 1 des fiches urgentes.
- **Responsables** : pédagogie (`data/fiches-cornee.js`, `data/fiches-cornee-2.js`, `data/fiches-glaucome.js`, `cat.algo`) ; exercices interactifs (`src/tree.js`).

### MF-7. Bloc Traitement : mal assemblé et mal calibré pour l'externe
- **Écrans** : les 27 `#<fiche>/decider`.
- **Constat** : « Quand référer » est rattaché à chaque traitement et écrit du point de vue du spécialiste.
  - Point de vue du spécialiste :
    - `g-dev` : « Goniotomie : … centre pédiatrique tertiaire ».
    - `g-postop` : « Tube : échec de trabéculectomie… ».
    - `g-fermeture` : critères LPI et EAGLE.
    - `g-gpao` : « PGA : Référer si PIO hors cible… ».
  - Incohérent :
    - `c-surface` (conjonctivites) : « Quand référer : Au-delà de quelques jours : suivi de la PIO ». C'est le piège des stéroïdes, rangé au mauvais endroit.
  - Trop vague :
    - `c-herpes` : « Toujours sous suivi ophtalmologique ».
    - `c-depots` : « Bande gênante : ophtalmologie ».
  - Urgence sous-estimée :
    - `g-crise` : « ophtalmologiste de garde **le jour même** » pour une crise aiguë. Il faut écrire « immédiatement ».
  - Dans les fiches cornée, les pièges perdent leur sujet :
    - `c-herpes` : « Toxique pour l'épithélium : au plus 14–21 jours ». Quel produit ?
    - `c-dystrophies` : « Ne retire pas les opacités. Les dépôts reviennent. Technique exigeante. »
  - En « 1re ligne » de `g-crise`, on trouve « Iridotomie au laser » et « Phacoémulsification ».
- **Plafond** (barème §5) : 1re ligne (nom générique, posologie), quand référer ou urgence, piège, particularité québécoise.
- **Correction** : écrire au niveau de la fiche une carte « Externe ».
  1. **Ce que tu fais** (urgence ou clinique) : générique et posologie.
  2. **Appelle l'ophtalmo** : immédiat, moins de 24 h ou en semaines, avec le critère.
  3. **Ne fais jamais** : une ligne qui nomme le médicament.
  4. **Au Québec** : seulement si utile.

  Les options du spécialiste (LPI, phaco, DMEK, tube, etc.) passent au niveau 2. Dans `txBlock`, préfixer chaque piège du nom du traitement quand il vient de `treatments[]`.
- **Responsables** : pédagogie (`data/fiches-*.js`, champ `treatment`) ; web (`src/views.js`, `txBlock`).

### MF-8. Voir : pas de « Réponds », pas de feutre, et la réponse est écrite avant la révélation
- **Écrans** : les 27 `#<fiche>/voir`.
- **Constat** :
  - La légende nomme le diagnostic au-dessus du bouton (« Kératite épithéliale herpétique (HSV) : ulcère ramifié… », « Crise aiguë… à l'œil droit : rougeur et cornée trouble »).
  - « Révéler les trouvailles » affiche une pile de 4 blocs ou plus sur fond fluo (environ 70 mots), sans boucle au feutre ni autocollant sur la photo.
  - Le geste signature de l'identité v2 (`BRAND.md` §1.3 et §6.1) est absent du parcours principal ; il ne vit que dans Investigations et les cas.
  - La méthode « Observe. Réponds. Révèle. » n'est pas appliquée à l'étape qui porte le nom « Voir ».
- **Correction** :
  1. Masquer la légende jusqu'à la réponse.
  2. Demander « Touche le signe » sur la photo (zone sensible), puis tracer la boucle au feutre et poser l'autocollant (« dendrite ! »).
  3. Afficher en une ligne le signe décisif et garder le reste dans « plus loin ».
  4. Réutiliser `Motion` (`src/motion.js`) et le format `hotspots` de `data/inv-media.js`.
- **Responsables** : design/motion (`src/motion.js`) ; web (`Photo.carousel` dans `src/core.js`) ; ressources visuelles pour les zones des photos de fiche (`data/photos.js`, `data/ext-photos.js`).

### MF-9. Le niveau 2 (« Pratique clinique », celui de l'externe) recrée le mur texte/tableau
- **Écrans** : `#c-herpes/decider` (595 mots, 6,7 écrans, 3 tableaux) ; `#g-crise/decider` (699 mots, 8,0 écrans, 3 tableaux) ; `#g-gpao/voir` (306 mots, 4,1 écrans) ; `#c-herpes/comprendre` (196 mots, 2,6 écrans).
- **Constat** : `moreBlock` ouvre tous les « Pour aller plus loin » dès `depth >= 2`. Décider redevient texte → tableau Signes → tableau Examens → tableau Diagnostic différentiel → phases. Le niveau 3 donne **exactement** les mêmes chiffres que le niveau 2 : il ne sert à rien. Sur l'accueil, le niveau 1 est sous-titré « Preclinical », alors que le public est externe et R1.
- **Correction** :
  - Ne jamais ouvrir automatiquement les repliés.
  - Le niveau 2 ajoute **une** carte par étape (≤ 80 mots) : les signes deviennent des vignettes photo, le diagnostic différentiel devient des paires « sosies » photo contre photo, sans tableau.
  - Le niveau 3 ajoute quelque chose de mesurable, ou disparaît.
  - Renommer les niveaux selon le public (« Externe », « R1 »).
- **Responsables** : web (`src/views.js`, `moreBlock`, `txBlock` ; `src/learn.js`, `DEPTHS`) ; pédagogie.

### MF-10. Réponses données avant la question
- **Écrans** :
  - `#inv-gonio`, pratique 1/7 : « De postérieur vers antérieur, quel ordre est juste ? ». Le schéma imprime toutes les structures dans l'ordre (« Ligne de Schwalbe · Schwalbe's line », « Trabéculum pigmenté », « Éperon scléral », « Bande ciliaire », « Racine de l'iris ») sous la mention « Légende masquée jusqu'à ta réponse ».
  - `#g-crise/entrainer`, mini-QCM 1/4 : on demande le diagnostic (« Crise aiguë de fermeture de l'angle ») sur la fiche dont c'est le titre en 40 px.
- **Correction** :
  - Le SVG de pratique ne porte aucune étiquette ; les étiquettes passent dans la couche de révélation.
  - Vérifier automatiquement chaque item : aucun mot de la bonne option ne doit apparaître dans le texte rendu du média.
  - Les QCM de fiche testent la conduite (étape suivante, piège, délai), pas le diagnostic de la fiche.
- **Responsables** : exercices interactifs (`data/inv-media.js`, rendu `svgNamed` dans `src/investigations.js`) ; pédagogie (`data/quiz-*.js`, items `topic`).

### MF-11. Murs de cartes identiques, vignettes vides, hubs sans image
- **Écrans** :
  - `#apprendre` : 5,4 écrans et plus de 30 rangées identiques. Les vignettes de B7–B14 et C1–C12 sont des carrés gris vides (environ 20 sur 27 fiches).
  - `#reviser` : 8 cartes identiques avec la même tuile d'icône cobalt, et aucune image, même pour « Jeu d'images · 208 images ».
  - Hub `#investigations` : 6 cartes de texte identiques, 0 image, dans la section consacrée à la lecture d'images.
  - `#cas` : 498 mots, 0 figure.
  - La bannière « Module C » pose le titre fluo sur une impression d'OCT RNFL : collision de texte, illisible.
- **Plafond** (barème §6) : « Pas de murs de cartes identiques ».
- **Correction** :
  - Une photo réelle par fiche dans Apprendre : le catalogue a 390 images.
  - Réviser : un rang « Séance du jour » en héros, puis des jeux en grille 2 × N avec un aperçu visuel propre à chaque jeu.
  - Hub Investigations : une vignette d'examen par carte.
  - Bannière C : une photo de papille, pas une impression.
- **Responsables** : design (`src/views.js`, vues `apprendre`, `reviser`, hub Investigations ; `src/styles.css`) ; ressources visuelles (choix des vignettes).

### MF-12. Petits dépassements de plafond (défauts au sens du barème §7)
- Voir : 24/27 au-dessus de 60 mots rendus. La correction de MF-8 (légende masquée, crédit derrière une icône ⓘ) suffit à les ramener sous 60.
- « En deux phrases » de plus de 3 lignes sur téléphone : 27/27. Les définitions font 27–43 mots, `g-gpao` 43. Viser 25 mots au plus.
- Puces « essentiel » de plus de 15 mots : `c-secheresse` 18, `c-erosion` 16, `c-pterygion` 16, `c-dystrophies` 16.
- Responsable : pédagogie (`data/fiches-*.js` `definition`, `data/hy-cornee.js`).

## 3. SHOULD-FIX

1. **Le sélecteur de niveau casse à 390 px** : 2 rangées, une case vide, sur les 108 écrans de fiche. MF-4 le retire de la fiche ; sinon, mettre les libellés sur 2 lignes. (`src/styles.css` `.depth-seg`)
2. **Fausses promesses de durée** : « ≈ 1 min à ce niveau » sur chaque fiche, et « Chaque fiche se lit en 1 minutes » (faute d'accord) sur `#module-b`. Une fiche fait 431 à 554 mots rendus (médiane 461) sur 4 écrans, soit 2,5 à 3 min de lecture, plus les interactions. Calculer la durée sur le texte rendu. (`readMinAt`, `src/views.js` ; `mod.lead`, `src/i18n.js`)
3. **Fuites d'anglais en FR** : badge « High yield » ; sous-titres des niveaux « Preclinical / Clinical clerkship / Beginning residency » sur l'accueil ; sous-titre anglais sous chaque H1 ; étiquettes bilingues gravées dans les schémas (« cornée · cornea », « Normal macular OCT »).
4. **Fluo galvaudé** : `#…/entrainer` porte 3 boutons fluo (Commencer le mini-quiz, J'ai terminé cette section, fiche suivante). « Maillon suivant » en fluo concurrence « Décider → ». La révélation de Voir empile 4 blocs sur fond fluo. `BRAND.md` réserve le fluo au signe décisif, au CTA principal et aux récompenses.
5. **« J'ai terminé cette section »** : une auto-déclaration sans valeur. Marquer la fiche terminée quand le mini-QCM est fini.
6. **Deux repliés portent le même nom** sur Décider : « Pour aller plus loin : détails des traitements » et « Pour aller plus loin ». Les fusionner.
7. **Soulignés du glossaire** : 16 termes soulignés en pointillé sur `#c-herpes/decider`, 73 sur `#a-examen`. Ne souligner que la première occurrence par écran.
8. **« Je suis prêt à répondre »** (pratique Investigations et cas en images) : une touche de plus sans aucune saisie. La remplacer par « touche le signe sur l'image » avant les options : c'est une vraie réponse.
9. **Schéma OCT de pratique grossier** (disque noir qui traverse 5 bandes, couche nucléaire externe non épaissie à la fovéa). Le redessiner dans le style de l'outil « Couches OCT », qui est bon. (`data/inv-media.js`)
10. **L'arbre « Pas à pas » n'a pas de cas** : on répond Oui/Non sans bonne réponse. Ajouter une vignette d'une ligne (« F 68 ans, PIO 58, pupille mi-dilatée ») et un verdict à la fin du chemin.
11. **Schéma de coupe de l'œil illisible à 390 px** (`#b-bases`, étiquettes d'environ 5 px). Afficher moins d'étiquettes, ou les révéler au toucher.
12. **Simulations `requestAnimationFrame` permanentes** (`#a-physiologie`) : le chrono du TBUT tourne avant le premier clignement, et les particules tournent hors écran. Démarrer au premier geste et mettre en pause hors du champ de vue (`IntersectionObserver`). (`src/sims.js`)
13. **Cartes du patron** : elles se retournent sans engagement. Ajouter « Je savais / Je ne savais pas » relié au rappel espacé.
14. **Comprendre** : « Maillon suivant » ne fait que dévoiler du texte, et les leviers aussi (voir §4). En faire une prédiction : « Quel est le maillon suivant ? » parmi 3 choix, et « Où agit l'acétazolamide ? » en touchant le maillon.
15. **Accueil** : 3,9 écrans, dont 3 cartes de niveau très textuelles en 2e position. Choisir le niveau en un toucher, puis le replier.

## 4. Interactions : inventaire et valeur

Barème §4 : une interaction doit faire produire une réponse ou révéler un signe. Sinon, on la retire.

| Interaction (attribut) | Où | Produit une réponse ? | Révèle un signe ? | Verdict |
|---|---|---|---|---|
| QCM avec niveau de confiance (`data-o`, `data-u`) | S'entraîner, Réviser, cas | **Oui** | après coup | Garder ; c'est le cœur. Mais il est caché derrière « Commencer » et donne parfois la réponse (MF-10) |
| Triage « Urgent ou pas ? » (`data-u`) | Réviser, capsules | **Oui** | — | Garder |
| Pratique Observe → Réponds → Révèle (`data-ip` + options) | Investigations, cas en images | Oui (options) | **Oui**, boucle au feutre | Garder ; retirer la touche « Je suis prêt » sans saisie (S-8) |
| Outils Étiqueter / Défi : grader (`data-ly`, `data-grade`, `data-mode`) | `inv-oct`, `inv-gonio` | **Oui** | Oui | Excellent ; à remonter en tête de page (MF-2) |
| Mode Explorer des outils (`data-layer`, `data-bd`, `data-var`) | Investigations | Non | Oui (couche, structure) | Acceptable |
| Arbre « Pas à pas » (`data-tyn`, `data-tnext`) | Décider | Oui/Non, mais **sans bonne réponse** | Non | Ajouter une vignette (S-10) |
| Arbre Vue d'ensemble / Recommencer (`data-tmode`, `data-trestart`) | Décider | Non | Non | Utilitaire |
| « Révéler les trouvailles » (`data-act`, `data-target`) | Voir, capsules, A | Non | **Non** : affiche du texte, sans marquer la photo ; légende déjà explicite | **À refaire** (MF-8) |
| Révéler les anomalies du schéma (`data-cmpreveal`) | caché dans « plus loin » | Non | texte | Déplacer vers Comprendre (MF-3) |
| « Maillon suivant / Tout afficher » (`data-causal`) | Comprendre | Non | Non : dévoile une boîte de texte | **Sans valeur en l'état** (S-14) |
| Leviers de traitement (`data-lever`) | Comprendre | Non | Non : affiche un encadré de texte | En faire une question (S-14) |
| Cartes du patron (`data-pearl`) | S'entraîner | Rappel mental, sans engagement | — | Ajouter auto-évaluation (S-13) |
| Cartes mémoire (`data-flip`), mots troués | Réviser, A | Oui (mots troués) / rappel | — | Garder |
| Carrousel photo (`data-car-go`, `data-car-step`) | Voir | Non | Non | Navigation ; acceptable |
| Agrandir (lightbox) | partout | Non | Non | Utilitaire |
| Glossaire (`data-gt`) | partout | Non | Non | Utile, mais trop dense (S-7) |
| Sélecteur de niveau (`data-act="depth"`) | 108 écrans de fiche | Non | Non | **Retirer de la fiche** (MF-4) |
| « J'ai terminé cette section » | S'entraîner, capsules | Non | Non | **Retirer** (S-5) |
| Simulations : lampe oscillante, TBUT, aqueux, curseurs (`input:range`, `select`) | A2, A3 | Parfois (« Valider ma lecture » de la tonométrie : oui) | Oui | Garder ; démarrer au geste (S-12) |

## 5. Calibrage du contenu (6 écrans examinés)

| Écran | Calibré externe / R1 ? | Problèmes |
|---|---|---|
| `#c-herpes/decider` | Doses justes et utiles (acyclovir 400 mg 5×/j, valacyclovir 500 mg 3×/j, prophylaxie 400 mg 2×/j, zona 1 g 3×/j × 7 j) | « Quand référer : Toujours sous suivi ophtalmologique » ne dit rien à l'externe. Il faudrait : « dendrite → ophtalmo < 24 h ; jamais de stéroïde ; zona V1 avec œil rouge, baisse de vision ou Hutchinson → ophtalmo le jour même ». Pièges orphelins ; arbre faux (MF-6) ; pas d'encadré Québec. |
| `#g-crise/decider` | Trop **spécialiste** au niveau 1 | La « 1re ligne » inclut LPI YAG et phaco. Les actions de l'externe (appel immédiat, timolol, apraclonidine ou brimonidine, acétazolamide 500 mg en l'absence de contre-indication, décubitus, antiémétique) sont dispersées. « Le jour même » est trop faible. Arbre de 1 581 px, 328 mots. |
| `#g-gpao/decider` | Niveau R1 ophtalmo, pas externe | Le jargon arrive sans explication au nœud 1 (« Bilan de base (4 P + G) »). On demande « Cible atteinte sous PGA ou SLT ? » sans avoir dit de commencer un PGA ou la SLT. Bon encadré Québec (O-7, optométriste qui amorce puis dirige). Il manque le rôle de l'externe (dépister, référer en non urgent) et la couverture RAMQ des gouttes génériques. |
| `#c-bacterienne/decider` | Bon, pratique | « Critère 1-2-3 » apparaît dans l'arbre sans être défini au niveau 1. Moxifloxacine aux heures, grattage avant antibiotique, pas de pansement chez le porteur de lentilles : tout cela est juste et utile à l'externe. |
| `#inv-oct` | Contenu de R1, pas de l'externe pressé | Effet plancher à 50–60 µm, « red/green disease », ETDRS 1/3/6 mm : juste, mais 488 mots avant l'outil. Il manque « quand demander une OCT et que regarder en 10 s sur le rapport », la question pratique de l'externe. |
| `#a-examen` | Contenu **le plus utile à l'externe** (AV, DPAR, fluorescéine, SAAQ) | Noyé dans 31 écrans et 3 227 mots, avec des doublons. C'est la page qui mériterait le plus la forme en cartes et simulations. |

En résumé, les fiches glaucome et les arbres sont écrits pour un R1 d'ophtalmologie, ou au-delà : ripcord, needling, iridoplastie, voriconazole intrastromal, EAGLE au niveau « Fondamentaux ». Ce que l'externe doit faire aux urgences ou en médecine familiale est sous-représenté. Le barème place le niveau 1 « Fondamentaux » pour l'externe : il faut donc déplacer le contenu du spécialiste vers le niveau 2.

## 6. Revue visuelle (19 écrans capturés)

Écrans capturés :
- 3 fiches × 4 étapes : `c-herpes`, `g-gpao`, `c-bacterienne`.
- `inv-oct`, `inv-gonio`, l'accueil, Apprendre, Réviser, le hub Investigations, `module-b`, `cas`, `b-bases`, `a-examen`, `a-retine`.
- La révélation de Voir, l'arbre (vue d'ensemble et pas à pas), le bloc Traitement, Comprendre ouvert, les pratiques Investigations, et 2 écrans en mode sombre.

- **Hiérarchie** : le H1 en Bricolage 40 px est beau sur l'accueil, mais sur une fiche il écrase tout. Le premier élément vu n'est jamais le signe, toujours le titre. Les en-têtes de section (« Algorithme », « Traitements ») ont la même graisse que les nœuds de l'arbre, si bien que rien ne guide l'œil vers la décision.
- **Monotonie** : sur les fiches, ce n'est plus texte/tableau mais **carte bordée / carte bordée / carte bordée**. Décider aligne l'encadré rouge des drapeaux, plus de 10 boîtes d'arbre, puis 4 cartes Traitement à bordure de couleur et 2 repliés. Investigations aligne 5 encadrés de listes. Apprendre et Réviser sont des listes de cartes identiques.
- **Densité** : acceptable sur Voir, Comprendre et S'entraîner, une fois l'en-tête retiré. Excessive sur Décider. Inacceptable sur le module A, les capsules et Investigations.
- **Direction artistique** :
  - L'habillage (barre cobalt, onglet fluo incliné, boutons fluo à ombre dure, Bricolage et Atkinson) est fidèle à v2.
  - Le héros de l'accueil (photo inclinée, boucle au feutre, autocollant « dendrite ! ») est la seule page qui *ressemble* vraiment à « Fluorescéine ».
  - Dans les fiches, la marque se réduit à des boutons ; les surfaces d'étude, elles, sont de génériques cartes blanches à bordure.
  - Le vert menthe des encadrés « High yield » (`--teal-wash`, absent de la palette v2) et le violet de « Pièges » sont des reliquats v1.
  - Aucune boucle au feutre sur les 27 photos de fiche.
- **Plaisir et motivation** : les vrais moments de plaisir sont la pratique Investigations, le mode « Pas à pas » et le QCM. Tous sont repoussés au 3e ou 4e écran, ou derrière un bouton. La fiche commence par 546 px de titre.
- **Un externe resterait-il ?** Pour une fiche, oui, une fois. Pour le module A (31 à 48 écrans), non. Pour Investigations, il ira peut-être directement à la pratique, s'il la trouve.

## 7. Ce qui est vraiment bon (bref)

- Fiches en 4 écrans : pastilles, Précédent/Suivant, balayage (`touchstart` et `touchend`). Plus aucune page empilée.
- 0 animation qui rythme le contenu sur 127 écrans. Les arbres sont pilotés par l'apprenant.
- 27/27 algorithmes en arbre : questions de 8 mots au plus, actions de 12 au plus, badge « Urgent » automatique.
- 0 tableau visible par défaut sur 108 écrans de fiche ; Comprendre tient ses 120 mots sur 27/27.
- Outils Investigations (Couches OCT avec Étiqueter et Trouver le liquide, Grader l'angle) et le format Observe → Réponds → Révèle avec boucle au feutre : la meilleure pédagogie de l'application.
- Doses usuelles présentes, encadrés Québec pertinents (O-7, SAAQ), mode sombre cohérent, accessibilité soignée (arbre en liste ordonnée, `aria-live`).

## Annexe A. Mesures par écran (390 × 844, FR, niveau 1)

« Contenu commence à » est la position verticale du corps de l'étape. « Mots 1er écran » compte les mots visibles avant 844 px, hors navigation.

<details><summary>127 écrans</summary>

| Écran | Mots visibles | Mots hors arbre | Mots arbre | Mots 1er écran | Contenu commence à (px) | Figures | 1re figure (px) | Tableaux visibles (total) | Contrôles | Hauteur (écrans) | Arbre | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `#c-secheresse/voir` | 66 | — | — | 33 | 573 | 1 | 574 | 0 (0) | 11 | 1.74 | — | > 60 mots; en-tête 573 px |
| `#c-secheresse/comprendre` | 86 | — | — | 82 | 541 | 0 | — | 0 (0) | 3 | 1.59 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-secheresse/decider` | 208 | 138 | 65 | 59 | 541 | 0 | — | 0 (3) | 7 | 3.3 | oui | en-tête 541 px; 3.3 écrans |
| `#c-secheresse/entrainer` | 76 | — | — | 60 | 541 | 0 | — | 0 (0) | 7 | 1.8 | — | en-tête 541 px |
| `#c-bacterienne/voir` | 60 | — | — | 39 | 469 | 1 | 470 | 0 (0) | 10 | 1.67 | — | en-tête 469 px |
| `#c-bacterienne/comprendre` | 71 | — | — | 69 | 437 | 0 | — | 0 (0) | 3 | 1.41 | — | 0 figure de mécanisme; en-tête 437 px |
| `#c-bacterienne/decider` | 225 | 131 | 89 | 56 | 437 | 0 | — | 0 (3) | 9 | 3.56 | oui | en-tête 437 px; 3.56 écrans |
| `#c-bacterienne/entrainer` | 79 | — | — | 61 | 437 | 0 | — | 0 (0) | 7 | 1.62 | — | en-tête 437 px |
| `#c-atypiques/voir` | 63 | — | — | 39 | 507 | 1 | 508 | 0 (0) | 10 | 1.68 | — | > 60 mots; en-tête 507 px |
| `#c-atypiques/comprendre` | 74 | — | — | 68 | 475 | 0 | — | 0 (0) | 3 | 1.51 | — | 0 figure de mécanisme; en-tête 475 px |
| `#c-atypiques/decider` | 226 | 134 | 87 | 66 | 475 | 0 | — | 0 (3) | 6 | 3.65 | oui | en-tête 475 px; 3.65 écrans |
| `#c-atypiques/entrainer` | 75 | — | — | 56 | 475 | 0 | — | 0 (0) | 7 | 1.7 | — | en-tête 475 px |
| `#c-herpes/voir` | 69 | — | — | 24 | 573 | 1 | 574 | 0 (0) | 14 | 1.82 | — | > 60 mots; en-tête 573 px |
| `#c-herpes/comprendre` | 84 | — | — | 71 | 541 | 0 | — | 0 (0) | 3 | 1.63 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-herpes/decider` | 214 | 129 | 80 | 57 | 541 | 0 | — | 0 (3) | 8 | 3.47 | oui | en-tête 541 px; 3.47 écrans |
| `#c-herpes/entrainer` | 72 | — | — | 56 | 541 | 0 | — | 0 (0) | 7 | 1.78 | — | en-tête 541 px |
| `#c-keratocone/voir` | 67 | — | — | 37 | 469 | 1 | 470 | 0 (0) | 11 | 1.69 | — | > 60 mots; en-tête 469 px |
| `#c-keratocone/comprendre` | 85 | — | — | 74 | 437 | 0 | — | 0 (0) | 3 | 1.53 | — | 0 figure de mécanisme; en-tête 437 px |
| `#c-keratocone/decider` | 238 | 141 | 92 | 54 | 437 | 0 | — | 0 (3) | 9 | 3.8 | oui | en-tête 437 px; 3.8 écrans |
| `#c-keratocone/entrainer` | 73 | — | — | 53 | 437 | 0 | — | 0 (0) | 7 | 1.6 | — | en-tête 437 px |
| `#c-fuchs/voir` | 68 | — | — | 36 | 573 | 1 | 574 | 0 (0) | 12 | 1.74 | — | > 60 mots; en-tête 573 px |
| `#c-fuchs/comprendre` | 80 | — | — | 70 | 541 | 0 | — | 0 (0) | 3 | 1.63 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-fuchs/decider` | 225 | 146 | 74 | 56 | 541 | 0 | — | 0 (3) | 11 | 3.62 | oui | en-tête 541 px; 3.62 écrans |
| `#c-fuchs/entrainer` | 73 | — | — | 55 | 541 | 0 | — | 0 (0) | 7 | 1.76 | — | en-tête 541 px |
| `#c-erosion/voir` | 64 | — | — | 30 | 639 | 1 | 640 | 0 (0) | 12 | 1.95 | — | > 60 mots; en-tête 639 px |
| `#c-erosion/comprendre` | 81 | — | — | 72 | 607 | 0 | — | 0 (0) | 3 | 1.64 | — | 0 figure de mécanisme; en-tête 607 px |
| `#c-erosion/decider` | 245 | 157 | 83 | 57 | 607 | 0 | — | 0 (3) | 8 | 3.82 | oui | en-tête 607 px; 3.82 écrans |
| `#c-erosion/entrainer` | 70 | — | — | 51 | 607 | 0 | — | 0 (0) | 7 | 1.76 | — | en-tête 607 px |
| `#c-pterygion/voir` | 67 | — | — | 35 | 573 | 1 | 574 | 0 (0) | 11 | 1.81 | — | > 60 mots; en-tête 573 px |
| `#c-pterygion/comprendre` | 77 | — | — | 73 | 541 | 0 | — | 0 (0) | 3 | 1.59 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-pterygion/decider` | 220 | 131 | 84 | 57 | 541 | 0 | — | 0 (3) | 9 | 3.73 | oui | en-tête 541 px; 3.73 écrans |
| `#c-pterygion/entrainer` | 67 | — | — | 53 | 541 | 0 | — | 0 (0) | 7 | 1.76 | — | en-tête 541 px |
| `#c-greffe/voir` | 66 | — | — | 39 | 573 | 1 | 574 | 0 (0) | 15 | 1.84 | — | > 60 mots; en-tête 573 px |
| `#c-greffe/comprendre` | 76 | — | — | 81 | 541 | 0 | — | 0 (0) | 3 | 1.53 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-greffe/decider` | 236 | 139 | 92 | 60 | 541 | 0 | — | 0 (3) | 11 | 3.66 | oui | en-tête 541 px; 3.66 écrans |
| `#c-greffe/entrainer` | 72 | — | — | 60 | 541 | 0 | — | 0 (0) | 7 | 1.68 | — | en-tête 541 px |
| `#c-brulure/voir` | 66 | — | — | 42 | 469 | 1 | 470 | 0 (0) | 9 | 1.64 | — | > 60 mots; en-tête 469 px |
| `#c-brulure/comprendre` | 82 | — | — | 78 | 437 | 0 | — | 0 (0) | 3 | 1.38 | — | 0 figure de mécanisme; en-tête 437 px |
| `#c-brulure/decider` | 260 | 166 | 89 | 52 | 437 | 0 | — | 0 (3) | 8 | 3.78 | oui | en-tête 437 px; 3.78 écrans |
| `#c-brulure/entrainer` | 72 | — | — | 61 | 437 | 0 | — | 0 (0) | 7 | 1.58 | — | en-tête 437 px |
| `#c-dystrophies/voir` | 62 | — | — | 26 | 507 | 1 | 508 | 0 (0) | 11 | 1.71 | — | > 60 mots; en-tête 507 px |
| `#c-dystrophies/comprendre` | 83 | — | — | 72 | 475 | 0 | — | 0 (0) | 3 | 1.54 | — | 0 figure de mécanisme; en-tête 475 px |
| `#c-dystrophies/decider` | 228 | 124 | 99 | 51 | 475 | 0 | — | 0 (3) | 16 | 3.8 | oui | en-tête 475 px; 3.8 écrans |
| `#c-dystrophies/entrainer` | 77 | — | — | 53 | 475 | 0 | — | 0 (0) | 7 | 1.74 | — | en-tête 475 px |
| `#c-depots/voir` | 64 | — | — | 33 | 573 | 1 | 574 | 0 (0) | 11 | 1.84 | — | > 60 mots; en-tête 573 px |
| `#c-depots/comprendre` | 74 | — | — | 72 | 541 | 0 | — | 0 (0) | 3 | 1.53 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-depots/decider` | 228 | 134 | 89 | 59 | 541 | 0 | — | 0 (3) | 11 | 3.88 | oui | en-tête 541 px; 3.88 écrans |
| `#c-depots/entrainer` | 77 | — | — | 56 | 541 | 0 | — | 0 (0) | 7 | 1.75 | — | en-tête 541 px |
| `#c-surface/voir` | 64 | — | — | 31 | 573 | 1 | 574 | 0 (0) | 11 | 1.78 | — | > 60 mots; en-tête 573 px |
| `#c-surface/comprendre` | 83 | — | — | 77 | 541 | 0 | — | 0 (0) | 3 | 1.59 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-surface/decider` | 236 | 162 | 69 | 57 | 541 | 0 | — | 0 (3) | 12 | 3.87 | oui | en-tête 541 px; 3.87 écrans |
| `#c-surface/entrainer` | 78 | — | — | 57 | 541 | 0 | — | 0 (0) | 7 | 1.82 | — | en-tête 541 px |
| `#c-peripherie/voir` | 65 | — | — | 24 | 573 | 1 | 574 | 0 (0) | 13 | 1.98 | — | > 60 mots; en-tête 573 px |
| `#c-peripherie/comprendre` | 72 | — | — | 69 | 541 | 0 | — | 0 (0) | 3 | 1.53 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-peripherie/decider` | 268 | 159 | 104 | 60 | 541 | 0 | — | 0 (3) | 12 | 4.19 | oui | en-tête 541 px; 4.19 écrans |
| `#c-peripherie/entrainer` | 85 | — | — | 57 | 541 | 0 | — | 0 (0) | 7 | 1.85 | — | en-tête 541 px |
| `#g-gpao/voir` | 76 | — | — | 32 | 507 | 1 | 508 | 0 (0) | 11 | 1.8 | — | > 60 mots; en-tête 507 px |
| `#g-gpao/comprendre` | 83 | — | — | 77 | 475 | 0 | — | 0 (0) | 3 | 1.52 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-gpao/decider` | 258 | 160 | 93 | 51 | 475 | 0 | — | 0 (3) | 8 | 3.59 | oui | en-tête 475 px; 3.59 écrans |
| `#g-gpao/entrainer` | 68 | — | — | 55 | 475 | 0 | — | 0 (0) | 7 | 1.66 | — | en-tête 475 px |
| `#g-hto/voir` | 67 | — | — | 21 | 545 | 1 | 546 | 0 (0) | 7 | 1.72 | — | > 60 mots; en-tête 545 px |
| `#g-hto/comprendre` | 88 | — | — | 84 | 513 | 0 | — | 0 (0) | 3 | 1.54 | — | 0 figure de mécanisme; en-tête 513 px |
| `#g-hto/decider` | 222 | 128 | 89 | 51 | 513 | 0 | — | 0 (3) | 12 | 3.56 | oui | en-tête 513 px; 3.56 écrans |
| `#g-hto/entrainer` | 67 | — | — | 52 | 513 | 0 | — | 0 (0) | 7 | 1.65 | — | en-tête 513 px |
| `#g-gpn/voir` | 69 | — | — | 30 | 507 | 1 | 508 | 0 (0) | 12 | 1.78 | — | > 60 mots; en-tête 507 px |
| `#g-gpn/comprendre` | 81 | — | — | 75 | 475 | 0 | — | 0 (0) | 3 | 1.55 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-gpn/decider` | 216 | 137 | 74 | 55 | 475 | 0 | — | 0 (3) | 6 | 3.52 | oui | en-tête 475 px; 3.52 écrans |
| `#g-gpn/entrainer` | 67 | — | — | 52 | 475 | 0 | — | 0 (0) | 7 | 1.68 | — | en-tête 475 px |
| `#g-fermeture/voir` | 68 | — | — | 21 | 545 | 1 | 546 | 0 (0) | 11 | 1.95 | — | > 60 mots; en-tête 545 px |
| `#g-fermeture/comprendre` | 83 | — | — | 79 | 513 | 0 | — | 0 (0) | 3 | 1.57 | — | 0 figure de mécanisme; en-tête 513 px |
| `#g-fermeture/decider` | 291 | 186 | 100 | 52 | 513 | 0 | — | 0 (3) | 15 | 4.18 | oui | > 180 mots; en-tête 513 px; 4.18 écrans |
| `#g-fermeture/entrainer` | 77 | — | — | 55 | 513 | 0 | — | 0 (0) | 7 | 1.73 | — | en-tête 513 px |
| `#g-crise/voir` | 71 | — | — | 48 | 507 | 1 | 508 | 0 (0) | 11 | 1.59 | — | > 60 mots; en-tête 507 px |
| `#g-crise/comprendre` | 81 | — | — | 76 | 475 | 0 | — | 0 (0) | 3 | 1.55 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-crise/decider` | 328 | 193 | 130 | 52 | 475 | 0 | — | 0 (3) | 14 | 4.34 | oui | > 180 mots; en-tête 475 px; 4.34 écrans |
| `#g-crise/entrainer` | 74 | — | — | 61 | 475 | 0 | — | 0 (0) | 7 | 1.65 | — | en-tête 475 px |
| `#g-pxf/voir` | 66 | — | — | 28 | 507 | 1 | 508 | 0 (0) | 16 | 1.72 | — | > 60 mots; en-tête 507 px |
| `#g-pxf/comprendre` | 83 | — | — | 74 | 475 | 0 | — | 0 (0) | 3 | 1.52 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-pxf/decider` | 273 | 165 | 103 | 54 | 475 | 0 | — | 0 (3) | 11 | 4 | oui | en-tête 475 px; 4 écrans |
| `#g-pxf/entrainer` | 71 | — | — | 54 | 475 | 0 | — | 0 (0) | 7 | 1.68 | — | en-tête 475 px |
| `#g-pigmentaire/voir` | 67 | — | — | 21 | 573 | 1 | 574 | 0 (0) | 12 | 1.84 | — | > 60 mots; en-tête 573 px |
| `#g-pigmentaire/comprendre` | 91 | — | — | 73 | 541 | 0 | — | 0 (0) | 3 | 1.57 | — | 0 figure de mécanisme; en-tête 541 px |
| `#g-pigmentaire/decider` | 248 | 144 | 99 | 51 | 541 | 0 | — | 0 (3) | 12 | 3.91 | oui | en-tête 541 px; 3.91 écrans |
| `#g-pigmentaire/entrainer` | 81 | — | — | 53 | 541 | 0 | — | 0 (0) | 7 | 1.7 | — | en-tête 541 px |
| `#g-neovasculaire/voir` | 69 | — | — | 36 | 507 | 1 | 508 | 0 (0) | 14 | 1.75 | — | > 60 mots; en-tête 507 px |
| `#g-neovasculaire/comprendre` | 85 | — | — | 76 | 475 | 0 | — | 0 (0) | 3 | 1.55 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-neovasculaire/decider` | 280 | 159 | 116 | 59 | 475 | 0 | — | 0 (3) | 12 | 4.13 | oui | en-tête 475 px; 4.13 écrans |
| `#g-neovasculaire/entrainer` | 68 | — | — | 51 | 475 | 0 | — | 0 (0) | 7 | 1.68 | — | en-tête 475 px |
| `#g-secondaires/voir` | 67 | — | — | 40 | 507 | 1 | 508 | 0 (0) | 12 | 1.69 | — | > 60 mots; en-tête 507 px |
| `#g-secondaires/comprendre` | 80 | — | — | 62 | 475 | 0 | — | 0 (0) | 3 | 1.58 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-secondaires/decider` | 311 | 196 | 110 | 54 | 475 | 0 | — | 0 (3) | 11 | 4.23 | oui | > 180 mots; en-tête 475 px; 4.23 écrans |
| `#g-secondaires/entrainer` | 78 | — | — | 56 | 475 | 0 | — | 0 (0) | 7 | 1.74 | — | en-tête 475 px |
| `#g-postop/voir` | 69 | — | — | 30 | 573 | 1 | 574 | 0 (0) | 14 | 1.87 | — | > 60 mots; en-tête 573 px |
| `#g-postop/comprendre` | 73 | — | — | 60 | 541 | 0 | — | 0 (0) | 3 | 1.57 | — | 0 figure de mécanisme; en-tête 541 px |
| `#g-postop/decider` | 259 | 169 | 85 | 56 | 541 | 0 | — | 0 (3) | 14 | 3.67 | oui | en-tête 541 px; 3.67 écrans |
| `#g-postop/entrainer` | 80 | — | — | 60 | 541 | 0 | — | 0 (0) | 7 | 1.75 | — | en-tête 541 px |
| `#g-papille/voir` | 59 | — | — | 45 | 583 | 1 | 584 | 0 (0) | 13 | 1.71 | — | en-tête 583 px |
| `#g-papille/comprendre` | 65 | — | — | 67 | 551 | 0 | — | 0 (0) | 3 | 1.53 | — | 0 figure de mécanisme; en-tête 551 px |
| `#g-papille/decider` | 238 | 154 | 79 | 55 | 551 | 0 | — | 0 (3) | 11 | 3.61 | oui | en-tête 551 px; 3.61 écrans |
| `#g-papille/entrainer` | 72 | — | — | 54 | 551 | 0 | — | 0 (0) | 7 | 1.81 | — | en-tête 551 px |
| `#g-cristallin/voir` | 57 | — | — | 24 | 545 | 1 | 546 | 0 (0) | 12 | 1.8 | — | en-tête 545 px |
| `#g-cristallin/comprendre` | 72 | — | — | 71 | 513 | 0 | — | 0 (0) | 3 | 1.54 | — | 0 figure de mécanisme; en-tête 513 px |
| `#g-cristallin/decider` | 280 | 182 | 93 | 60 | 513 | 0 | — | 0 (3) | 10 | 4.35 | oui | > 180 mots; en-tête 513 px; 4.35 écrans |
| `#g-cristallin/entrainer` | 81 | — | — | 59 | 513 | 0 | — | 0 (0) | 7 | 1.79 | — | en-tête 513 px |
| `#g-dev/voir` | 62 | — | — | 29 | 639 | 1 | 640 | 0 (0) | 13 | 1.99 | — | > 60 mots; en-tête 639 px |
| `#g-dev/comprendre` | 70 | — | — | 61 | 607 | 0 | — | 0 (0) | 3 | 1.59 | — | 0 figure de mécanisme; en-tête 607 px |
| `#g-dev/decider` | 277 | 166 | 106 | 61 | 607 | 0 | — | 0 (3) | 18 | 4.22 | oui | en-tête 607 px; 4.22 écrans |
| `#g-dev/entrainer` | 84 | — | — | 57 | 607 | 0 | — | 0 (0) | 7 | 1.88 | — | en-tête 607 px |
| `#inv-bscan` | 556 | — | — | 140 | — | 2 | 2379 | 0 (0) | 13 | 4.87 | — | 4.87 écrans; ≈ 3 min de lecture; 1re figure à l’écran 3 |
| `#inv-ascan` | 504 | — | — | 139 | — | 2 | 2156 | 0 (0) | 10 | 4.3 | — | 4.3 écrans; ≈ 3 min de lecture; 1re figure à l’écran 3 |
| `#inv-oct` | 488 | — | — | 139 | — | 2 | 2249 | 0 (0) | 26 | 4.45 | — | 4.45 écrans; ≈ 2 min de lecture; 1re figure à l’écran 3 |
| `#inv-gonio` | 511 | — | — | 133 | — | 2 | 2153 | 0 (0) | 13 | 4.55 | — | 4.55 écrans; ≈ 3 min de lecture; 1re figure à l’écran 3 |
| `#inv-fondoeil` | 484 | — | — | 130 | — | 2 | 2174 | 0 (0) | 29 | 4.67 | — | 4.67 écrans; ≈ 2 min de lecture; 1re figure à l’écran 3 |
| `#inv-cv` | 469 | — | — | 139 | — | 2 | 2342 | 0 (0) | 10 | 4.5 | — | 4.5 écrans; ≈ 2 min de lecture; 1re figure à l’écran 3 |
| `#a-anatomie` | 518 | — | — | 111 | — | 8 | 664 | 0 (0) | 77 | 6.13 | — | 6.13 écrans; ≈ 3 min de lecture |
| `#a-physiologie` | 1747 | — | — | 50 | — | 4 | 2183 | 0 (0) | 61 | 16.2 | — | 16.2 écrans; ≈ 9 min de lecture; 1re figure à l’écran 3 |
| `#a-examen` | 3227 | — | — | 82 | — | 15 | 5188 | 0 (0) | 173 | 31.34 | — | 31.34 écrans; ≈ 16 min de lecture; 1re figure à l’écran 7 |
| `#a-imagerie` | 1939 | — | — | 72 | — | 14 | 1201 | 0 (0) | 113 | 20.99 | — | 20.99 écrans; ≈ 10 min de lecture; 1re figure à l’écran 2 |
| `#a-retine` | 5595 | — | — | 95 | — | 17 | 1994 | 0 (0) | 237 | 48.31 | — | 48.31 écrans; ≈ 28 min de lecture; 1re figure à l’écran 3 |
| `#accueil` | 231 | — | — | 71 | — | 4 | -77 | 0 (0) | 3 | 3.89 | — | 3.89 écrans; ≈ 1 min de lecture |
| `#apprendre` | 458 | — | — | 75 | — | 0 | — | 0 (0) | 3 | 5.39 | — | 5.39 écrans; ≈ 2 min de lecture |
| `#reviser` | 103 | — | — | 63 | — | 0 | — | 0 (0) | 4 | 1.78 | — | OK |
| `#investigations` | 303 | — | — | 119 | — | 0 | — | 0 (0) | 0 | 2.94 | — | 2.94 écrans; ≈ 2 min de lecture |
| `#module-b` | 1319 | — | — | 122 | — | 14 | 754 | 1 (1) | 2 | 13.51 | — | 13.51 écrans; ≈ 7 min de lecture |
| `#b-bases` | 1130 | — | — | 126 | — | 7 | 1131 | 0 (1) | 51 | 10.58 | — | 10.58 écrans; ≈ 6 min de lecture; 1re figure à l’écran 2 |
| `#c-bases` | 1021 | — | — | 105 | — | 6 | 1131 | 0 (1) | 56 | 9.84 | — | 9.84 écrans; ≈ 5 min de lecture; 1re figure à l’écran 2 |
| `#cas` | 498 | — | — | 106 | — | 0 | — | 0 (0) | 0 | 4.23 | — | 4.23 écrans; ≈ 2 min de lecture |

</details>

## Annexe B. Méthode et limites
- Scripts : `measure.py` (mesures), `shots.py` (captures), `interact.py` (niveaux 2–3, interactions), `bullets.py` et `refer.py` (puces et blocs Traitement), `algos.py` (arbres). Ils sont dans le dossier de travail du critique, avec `metrics-final.csv` et les captures (`shots/`).
- Le compte de mots inclut les libellés visibles du corps de l'étape (crédits, titres de repliés, boutons). Il exclut la navigation (fil d'Ariane, pastilles, Précédent/Suivant, sélecteur de niveau), les repliés fermés et le texte réservé aux lecteurs d'écran.
- Les mutations sont observées pendant 4 s, à partir de 1,5 s après le chargement. Une animation lancée plus tard par une action n'est pas couverte : c'est conforme au barème, qui vise ce qui avance *seul*.
- Je n'ai pas modifié les fichiers du produit.
