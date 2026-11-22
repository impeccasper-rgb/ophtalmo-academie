# Agent « mécanismes » : cycle 10 (critique passe 3, points 3, 5, 7 et 8)

## Fait
- **(3) Mécanismes dessinés** : `src/figures-mech.js` contient `OPH.mech[id] = {steps:[{svg, label}]}` pour les 27 fiches, soit 4 ou 5 étapes chacune, 128 en tout.
  - L'apprenant avance au toucher (figure ou bouton) ; rien ne défile seul.
  - Couleurs : jetons cobalt, encre et papier ; le fluo est réservé à l'élément décisif de chaque étape. Le mode sombre fonctionne.
  - Libellés FR ≤ 10 mots, traduits en EN par `I18N.fx`.
  - Branchement : un seul crochet dans `views.js`, branche `comprendre`, qui retire aussi un point HY pour rester sous 120 mots.
  - Ordre de chargement : juste avant `views` (`tools/build.py`, `tools/build_web.py`).
- **(5) Écrans sans figure** : les 10 en ont maintenant une.
  - Nouveau type `Figures.mechcap`, ajouté à la liste de `tools/validate.js`.
  - Champs `toolFig` et `vocabFig` des capsules, avec un crochet `capFig` dans `views.js`.
  - Module A : PIO et pupille passent par `PHYSIO_SIM` (setter) ; l'AV passe par un enrobage de la simulation `acuity`.
- **(5) Micro-fiches** : textes resserrés dans 28 cartes (FR et EN). `card.nk` (2 ou 3 clés visibles) est en place sur 21 cartes.
  - Résultat : 16/42 cartes au-dessus de 1,5 écran (avant : 28), médiane 1,48.
- **(7) Corrections cliniques** : `c-brulure`, `g-gpao`, `g-crise` (encadré Québec) et `c-herpes` (72 h). Sources et points à valider : `docs/FACTS.md`, section E.
- **(8) Vignettes** : `cat.vignette` est rempli pour les 27 fiches en FR (dans les fiches), et en EN (bloc à la fin de `data-en/fiches-*.js`). `views.js` passe maintenant la vignette à `Tree.render`.

## Reste
- 16 micro-fiches restent au-dessus de 1,5 écran. Le carrousel photo prend à lui seul environ 520 px ; il faudrait une photo plus compacte (`core.js`, propriété de l'agent web).
- Chaîne causale « prédiction » (3 choix) : non faite.
