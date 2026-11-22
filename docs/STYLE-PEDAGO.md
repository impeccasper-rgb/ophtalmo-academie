# Ocelle — règles de densité et de pédagogie (obligatoires)

Public : externes motivés et R1. **Pas** le Collège des médecins ni l’examen de spécialité. On vise des connaissances solides et les points qui comptent, pas l’exhaustivité. Lecteur à attention courte : chaque écran doit se lire en moins d’une minute.

## 1. Une fiche = 4 écrans, pas une longue page
Voir → Comprendre → Décider → S’entraîner : **un écran par étape**, avec barre de progression (4 pastilles), boutons Précédent/Suivant, balayage sur téléphone. Jamais les 4 empilés.

## 2. Budgets de texte (niveau par défaut « Fondamentaux »)
| Écran | Contenu visible par défaut | Plafond |
|---|---|---|
| Voir | 1 image (ou comparaison normal/patho) + « En deux phrases » | ≤ 60 mots |
| Comprendre | 3–5 points essentiels (≤ 15 mots chacun) + 1 figure de mécanisme | ≤ 120 mots |
| Décider | drapeaux rouges (≤ 3) + **arbre décisionnel visuel** + bloc « Traitement » | ≤ 180 mots hors arbre |
| S’entraîner | 2–3 questions du patron + 1 mini-jeu | — |
Le reste passe dans « Pour aller plus loin » (replié) ou au niveau « Pratique clinique / Début de spécialisation ». Pas de paragraphe de plus de 3 lignes sur téléphone.

## 3. Figures avant le texte
- Tout algorithme = **arbre décisionnel visuel** (nœuds question → branches Oui/Non → actions), jamais un tableau. Questions ≤ 8 mots, actions ≤ 12 mots.
- Une notion visuelle (signe, couche, mécanisme) = figure ou image annotée, pas une liste.
- Un tableau seulement pour comparer ≥ 3 entités sur ≥ 3 critères, et ≤ 4 lignes visibles.

## 4. Interactivité utile seulement
- Interdit : animations qui défilent seules à un rythme imposé (ex. « lecture animée » à 1 s par étape). Toute progression est **pilotée par l’apprenant** (toucher pour avancer) ou statique.
- Une interaction doit faire produire une réponse ou révéler un signe. Sinon, la retirer.

## 5. Traitement : un peu plus étoffé, adapté au Québec
Bloc « Traitement » clair : 1re ligne (nom générique, posologie usuelle), quand référer / urgence, piège à éviter, particularité québécoise (RAMQ, disponibilité) seulement si utile. Format court, scannable.

## 6. Direction artistique
Identité v2 « Fluorescéine » (brand/BRAND.md) partout : surfaces d’étude calmes, fluo réservé au signe décisif, aux CTA et aux récompenses ; feutre pour révéler. Pas de murs de cartes identiques.

## 7. Contrôle (le critique applique ces chiffres)
Mots visibles par écran, ratio figures/écran, nombre de tableaux, interactions sans valeur, animations auto-rythmées, cohérence visuelle. Un écran qui dépasse un plafond = défaut à corriger, pas une remarque.

## 8. Modèle d'arbre décisionnel v2 (cycle 8)
Chaque nœud de `cat.algo` : `{ q, yes, no, yesGo?, noGo? }`.
- `yes` / `no` : texte de l'action (ou `{t, urgent:true}`), ≤ 12 mots ; peut être vide si la branche mène directement à une autre question.
- `yesGo` / `noGo` : index (0-based) de la question suivante sur cette branche, ou absent = fin de branche. Les DEUX branches peuvent continuer (arbre/graphe acyclique), ce qui corrige les erreurs de logique d'une chaîne à branche unique.
- Ancien `cont: 'yes'|'no'` = équivalent de `yesGo/noGo = i+1` sur cette branche (toujours supporté).
- Plus de feuille vide « Question suivante » : une flèche étiquetée suffit.

## 9. Bloc Traitement pour l'externe (cycle 8)
- `treatment.refer` au niveau de la fiche, formulé pour un externe/omnipraticien : « Référer en ophtalmologie : immédiatement / dans les 24 h / cette semaine / suivi régulier — parce que… ».
- `treatment.first` = ce que fait l'externe ou le médecin de première ligne (et ce que fera l'ophtalmologiste, séparé).
- `treatment.pitfall` nomme le médicament ou le geste en cause.
