# Couche « high-yield » interactive — cahier des charges

L’apprenant (R1, stages cornée 4 nov. et glaucome 9 nov. 2026) trouve le cours trop lourd en texte.
On ajoute une couche courte et interactive : l’essentiel, des mots troués, un jeu de triage et des indices
pour un jeu d’association. **Aucun fait nouveau** : tout doit être tiré du contenu déjà relu
(fiches, entrées du module A) et de `docs/FACTS.md`. Si une info n’y est pas, ne l’écris pas.

## Format (un fichier par agent)
```js
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};
G.OPH.hy = G.OPH.hy || {};
Object.assign(G.OPH.hy, {
  "c-bacterienne": {
    essentials: [  // 3 à 5 phrases, ≤ 18 mots chacune, le mot-clé en **gras**, une idée par phrase
      "Porteur de lentilles + infiltrat blanc = **kératite infectieuse** jusqu’à preuve du contraire."
    ],
    cloze: [       // 4 à 6 phrases à trou ; exactement UN trou [[réponse]] (1 à 3 mots) par phrase
      "Chez le porteur de lentilles, on couvre toujours le [[Pseudomonas]].",
      "La règle [[1-2-3]] guide la décision de cultiver."     // synonymes acceptés : [[réponse|synonyme]]
    ],
    triage: [      // 2 ou 3 mini-vignettes (≤ 25 mots) avec le bon délai
      { s: "Porteuse de lentilles, œil rouge douloureux, infiltrat central de 3 mm.", u: "urgent", why: "Kératite bactérienne probable : cultures et collyres renforcés le jour même." }
    ],
    cues: [        // 2 ou 3 indices très courts (≤ 8 mots) typiques de CE diagnostic, pour un jeu d’association
      "Infiltrat blanc dense + réaction de chambre"
    ]
  }
});
```
- `u` : `urgent` (le jour même / immédiat), `rapide` (jours à semaines), `routine`.
- Les phrases à trou doivent rester compréhensibles et le trou doit porter sur une notion high-yield
  (mot-clé, chiffre clé, nom de signe, examen, traitement), pas sur un mot vide. Varier : signe, mécanisme,
  examen, traitement, piège. La réponse doit être déductible par un bon apprenant, sans ambiguïté.
- Les indices `cues` ne doivent pas contenir le nom de la maladie.
- Français du Québec ; termes anglais entre parenthèses seulement si utile ; seul balisage : **gras** dans
  `essentials` (pas dans cloze/triage/cues). Apostrophe typographique ’ ou guillemets doubles.

## Validation
`cd /home/claude/ophtalmo && node tools/validate-hy.js data/<ton-fichier>.js` jusqu’à OK.
Sobriété : lire chaque source une fois ; écrire en 1–2 grandes éditions ; ne modifier aucun autre fichier.
Réponse finale courte : clés couvertes, nombre d’items, ligne du validateur.
