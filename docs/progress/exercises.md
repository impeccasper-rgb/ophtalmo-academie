# Avancement — exercices interactifs (Investigations)

## Fait (2026-11-21)
- `src/investigations.js`, `src/investigations.css` : hub `#investigations`, pages `#inv-<id>`, moteur de pratique, 6 outils SVG (schémas étiquetés « schéma »).
- Fonctionne avec `data/investigations.js` + `data/inv-media.js` réels (44 items, 47 médias) ; fixture de secours interne utilisée seulement si `G.OPH.inv` est absent.
- Test Playwright (injection css/js dans dist/preview.html) : 390 / 1280 / 1280 sombre, sans erreur JS.

## Reste
- Intégration : ajouter `investigations` à `tools/build.py` et `tools/build_web.py` (rôle web) + lien dans la navigation (core.js, rôle web).

## Blocages / à vérifier
- voir la section « Points à vérifier » ci-dessous (complétée en fin de session).
