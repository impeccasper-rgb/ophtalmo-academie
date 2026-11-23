# « Demande à Ocelle » : serveur (Cloudflare Worker)

Le site envoie `{question, lang, passages[]}` au Worker. Les passages sont des extraits des pages d’Ocelle, trouvés dans le navigateur. Le Worker ajoute au besoin 2 ou 3 résumés PubMed (revues et lignes directrices des 10 dernières années), interroge le modèle d’IA choisi, puis renvoie `{answer, sources[]}`.

**Tant que `CHAT_ENDPOINT` est vide dans `src/chat.js`, rien de tout cela n’est publié** : pas de bouton, pas de fichier, pas de requête. Le site reste identique octet pour octet.

## Fichiers
| Fichier | Rôle |
|---|---|
| `chat-worker.js` | Le Worker : CORS, limite par IP, validation, PubMed, adaptateur d’IA (3 fournisseurs), invite système. |
| `wrangler.toml` | Configuration Cloudflare : fournisseur, origines permises, PubMed, limites. Ne contient aucune clé. |
| `test-worker.mjs` | Test hors ligne (aucun réseau, aucune clé) : `node server/test-worker.mjs` |

## Choisir le fournisseur d’IA
| `LLM_PROVIDER` | Clé | Coût | Remarque |
|---|---|---|---|
| **`workers-ai`** (recommandé pour démarrer gratuitement) | Aucune (liaison `AI`) | 10 000 « neurones » gratuits par jour, puis 0,011 $ US / 1 000 neurones avec le forfait Workers payant | Tout reste chez Cloudflare (même compte que le Worker). Modèle par défaut : `@cf/google/gemma-4-26b-a4b-it`. |
| `gemini` | `GEMINI_API_KEY` (Google AI Studio) | Offre gratuite avec quotas | **Avec l’offre gratuite, Google peut utiliser les contenus pour améliorer ses produits** (page de tarifs de l’API Gemini). La page Confidentialité le dit automatiquement si `CHAT_PROVIDER = 'gemini'`. Modèle par défaut : `gemini-3.1-flash-lite`. |
| `anthropic` | `ANTHROPIC_API_KEY` (console Anthropic) | Payant à l’usage | Fixer une limite de dépense dans la console. Modèle par défaut : `claude-haiku-5-5`. |

Les modèles se changent sans toucher au code avec `WORKERS_AI_MODEL`, `GEMINI_MODEL` ou `ANTHROPIC_MODEL` dans `[vars]`.

## Déployer, pas à pas
Il faut un compte Cloudflare gratuit et Node 18 ou plus récent. Aucune dépendance à installer : `npx` télécharge Wrangler.

1. `cd server`, puis `npx wrangler login` (une fenêtre de connexion Cloudflare s’ouvre).
2. Préparer le fournisseur choisi :
   - **Workers AI** : rien à faire, c’est la valeur par défaut de `wrangler.toml`.
   - **Gemini** : créer une clé sur https://aistudio.google.com, puis `npx wrangler secret put GEMINI_API_KEY` (coller la clé quand Wrangler la demande). Dans `wrangler.toml`, mettre `LLM_PROVIDER = "gemini"`.
   - **Anthropic** : créer une clé sur https://console.anthropic.com, puis `npx wrangler secret put ANTHROPIC_API_KEY`. Dans `wrangler.toml`, mettre `LLM_PROVIDER = "anthropic"`.

   La clé devient un secret du Worker. Elle n’est jamais écrite dans le dépôt.
3. Option PubMed : NCBI demande un nom d’outil (déjà réglé : `NCBI_TOOL = "ocelle-chat"`). Un courriel de contact est conseillé : mettre une adresse du projet, pas une adresse personnelle (`NCBI_EMAIL`). Au-delà de 3 requêtes par seconde, ajouter une clé NCBI avec `npx wrangler secret put NCBI_API_KEY`. `PUBMED = "off"` coupe PubMed.
4. `npx wrangler deploy`. Wrangler affiche l’URL, par exemple `https://ocelle-chat.<compte>.workers.dev`.
5. Vérifier que le Worker répond :
   ```bash
   curl https://ocelle-chat.<compte>.workers.dev/health
   # {"ok":true,"provider":"workers-ai","pubmed":true}
   curl -X POST https://ocelle-chat.<compte>.workers.dev/ -H 'Origin: https://ocelle.net' -H 'Content-Type: application/json' \
     -d '{"question":"Que faire devant une crise aiguë de fermeture de l’angle ?","lang":"fr","passages":[{"n":1,"route":"g-crise/decider","title":"Crise aiguë · Décider","text":"Timolol, brimonidine, dorzolamide ; acétazolamide.","topic":"Acute angle-closure crisis"}]}'
   ```
6. Allumer l’assistant sur le site :
   - Dans `src/chat.js` : `var CHAT_ENDPOINT = 'https://ocelle-chat.<compte>.workers.dev/';` et `var CHAT_PROVIDER = '<le fournisseur>';`. Si `PUBMED = "off"`, mettre aussi `CHAT_PUBMED = false`. Ces deux réglages servent au texte de la page Confidentialité.
   - Dans `src/privacy.js` : changer `PRIVACY_DATE`, puisque la politique change.
   - Lancer `python3 tools/build_web.py`, puis les tests, puis `python3 tools/push.py "Demande à Ocelle activée"`.

   Node doit être disponible au moment de la construction : il produit l’index `chat-index-*.json`. GitHub Actions l’a déjà.

## Éteindre
- **Site** : remettre `CHAT_ENDPOINT = ''`, reconstruire et publier. Le bouton et tous les fichiers disparaissent.
- **Serveur, en urgence** : mettre `ALLOWED_ORIGINS = ""` puis `npx wrangler deploy` (toutes les requêtes sont refusées), ou supprimer le Worker avec `npx wrangler delete`.

## Sécurité et Loi 25
- **CORS** : seules les origines de `ALLOWED_ORIGINS` sont acceptées (ocelle.net, www.ocelle.net, impeccasper-rgb.github.io). Pour l’app iOS, ajouter `capacitor://localhost` et mettre `CHAT_IN_NATIVE_APP = true` dans `src/chat.js`. C’est désactivé par défaut ; il faudrait alors le déclarer dans la fiche de confidentialité de l’App Store.
- **Limites** : 6 questions par minute et par IP, partagées sur tout le réseau Cloudflare (liaison `RATE_LIMITER`). Le Worker ajoute aussi une limite en mémoire de 6 par minute et 60 par jour (`RATE_PER_MINUTE`, `RATE_PER_DAY`), et le site a un compteur de 15 questions par jour et par appareil. La clé de limite est un condensé SHA-256 salé de l’IP, gardé en mémoire seulement ; changer le sel avec `npx wrangler secret put RATE_SALT`.
- **Journalisation** : le code n’écrit jamais le texte des questions. En cas d’erreur, le journal ne contient qu’une catégorie (`gemini-429`, `workers-ai-empty`…). `[observability] enabled = false` désactive les journaux Workers. Ne pas activer Logpush pour ce Worker.
- **Données transmises** : la question et les extraits d’Ocelle vont au fournisseur d’IA. Pour une question en anglais, des mots-clés de la question vont à NCBI ; pour une question en français, c’est le sujet anglais de la fiche trouvée. Aucun identifiant, aucun témoin. Vérifier les conditions d’usage des données de chaque fournisseur au moment du déploiement : elles changent.
- **Invite système** (dans `chat-worker.js`, fonction `systemPrompt`) : public d’externes et de résidents, 150 mots au plus, dans la langue de l’utilisateur. Le modèle cite seulement les sources fournies ([1], [2]…) et dit « je ne sais pas » quand elles ne couvrent pas la question. Il refuse les conseils sur un patient précis et renvoie vers un clinicien. Il ne donne aucune dose qui ne figure pas dans un passage d’Ocelle, et termine par une ligne d’avertissement éducatif. Le serveur retire les URL et les numéros de source inexistants, et garantit la ligne d’avertissement.

## Essai local (sans déployer)
```bash
node server/test-worker.mjs                                   # adaptateurs et PubMed simulés, aucune clé
cd server && npx wrangler dev                                 # Worker local sur http://127.0.0.1:8787 (Workers AI passe par le compte)
# site local branché sur ce Worker, construit à part (site/ n’est pas touché) :
OCELLE_CHAT_ENDPOINT=http://127.0.0.1:8787/ python3 tools/build_web.py --out /tmp/site-chat
# puis ajouter http://127.0.0.1:8000 à ALLOWED_ORIGINS (wrangler dev --var ALLOWED_ORIGINS:http://127.0.0.1:8000) et servir /tmp/site-chat sur ce port
```
Le test du navigateur avec un faux serveur : `python3 tests/web/test_site.py --no-build --only chat`. Il construit sa propre variante dans le dossier de sortie des tests.
