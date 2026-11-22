# Module Neuro-ophtalmologie — brouillon mis en attente (2026-11-22)

Arrêté sur décision du propriétaire avant toute écriture de fiche. Rien n'est câblé (ni `src/`, ni `tools/build.py`, ni `imgsrc3/sources.json`).

## Plan prévu (7 fiches, préfixe `n-`)
1. Œdème papillaire / HTIC (imagerie le jour même, HTIC idiopathique)
2. Névrite optique (SEP, ONTT, drapeaux rouges des formes atypiques)
3. NOIA artéritique vs non artéritique (ACG : VS/CRP, stéroïdes le jour même)
4. Paralysie du III (pupille atteinte = anévrisme, angio-TDM le jour même), IV et VI en bref
5. Syndrome de Horner (dissection carotidienne si aigu et douloureux)
6. Défauts du champ visuel par localisation (figures SVG)
7. Pupille d'Adie / anisocorie

## Images déjà au dépôt, utilisables
| Sujet | Id | Licence | Remarque |
|---|---|---|---|
| Œdème papillaire bilatéral | OPH-219, OPH-220 | CC BY-NC-ND 3.0 (EyeRounds) | bonne qualité ; 220 = résolu |
| Œdème papillaire | IMG3-028 | CC BY 3.0 | 277 × 266 px seulement |
| NOIA artéritique (papille pâle gonflée) | OPH-274 | CC BY-NC-ND 3.0 | bonne qualité |
| NOIA non artéritique | OPH-221 | CC BY-NC-ND 3.0 | œdème discret, cliché voilé |
| Drusen papillaires | OPH-223 | CC BY-NC-ND 3.0 | pseudo-œdème |
| Avant apraclonidine (Horner) | OPH-282 | CC BY-NC-ND 3.0 | |
| Anisocorie physiologique | OPH-281 | CC BY-NC-ND 3.0 | |
| Anisocorie pharmacologique | IMG3-059 | CC BY-SA 3.0 | |
| Fond d'œil normal | IMG3-024, IMG3-025 | CC0 | névrite rétrobulbaire : papille normale |

## Candidats d'images libres repérés (NON ajoutés à `sources.json`, licence à relire au build)
Repérés par PubMed / PMC (légendes lues dans le texte intégral) ; aucune photo de visage retenue.
| Sujet | Article | Figure |
|---|---|---|
| Œdème papillaire sévère (Optos, deux yeux) | PMC7852283, J Med Case Rep 2021, doi:10.1186/s13256-020-02631-2 | Fig. 3 |
| Signes IRM d'HTIC (selle vide, sténose du sinus transverse, gaine du nerf distendue) | PMC6474063, J Med Case Rep 2019, doi:10.1186/s13256-019-2060-5 | Fig. 1 |
| NOIA artéritique « blanc crayeux » + œil adelphe normal | PMC11923488, Cureus 2025, doi:10.7759/cureus.79148 | Figure 1 |
| Anévrisme de la communicante postérieure (angio-IRM) | PMC10602709, Cureus 2023, doi:10.7759/cureus.46027 | Figure 1 |
| Dissection carotidienne (IRM, double lumière) | PMC6263518, Cureus 2018, doi:10.7759/cureus.3382 | Figure 2 |
| Macroadénome hypophysaire (Commons) | `File:Coronal section of non-functioning pituitary adenoma.jpg` | licence non vérifiée |

Non trouvé : IRM de névrite optique typique sous licence libre.

## Câblage à prévoir (calqué sur le module D)
`L.modules`, `ORDER`, `PREREQ` (src/core.js) ; `mod.X`, `modseg.X` (src/i18n.js) ; `HY.mod`, `COVER` (src/learn.js) ; `Views['module-x']`, `Views['express-x']` (src/views.js) ; `FICHE_IDS`, modules permis, clés photo (tools/validate.js) ; préfixe de clé (tools/validate-hy.js) ; ordres de build (tools/build.py, tools/build_web.py) ; routes (tests/run.py). Mécanismes : `OPH.mech[id] = { steps: [{ svg, label }] }` dans un fichier `src/figures-<module>.js`.
