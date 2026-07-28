# haythemstudio.com

Site vitrine et politiques de confidentialité des applications Android **GNeurone AI**.
Cinq langues : anglais (langue principale), français, arabe, espagnol, portugais.

## Structure

| Chemin | Rôle |
|--------|------|
| `content/apps.mjs` | Données des applications, illustrations SVG, liste des langues |
| `content/strings.mjs` | Tous les textes, une entrée par langue |
| `build.mjs` | Génère les pages HTML de toutes les langues |
| `check.mjs` | Vérifie que toutes les pages attendues ont été générées |
| `assets/` | CSS, JavaScript, logo (partagés par toutes les langues) |

## Ajouter une application

Le catalogue n'est jamais chiffré en dur dans les textes : le nombre
d'applications et le total de niveaux affichés dans le hero sont calculés à
partir de `content/apps.mjs`. Ajouter un titre ne demande donc aucune retouche
de copie.

1. Ajouter une entrée dans `apps` (`content/apps.mjs`). Le champ `levels` est
   facultatif : il alimente le compteur du hero, l'omettre pour une application
   sans niveaux dénombrables.
2. Ajouter l'illustration de la carte dans `cardArt`, sous la même clé `key`.
3. Ajouter le couple `tagline` / `description` dans les cinq langues de
   `content/strings.mjs`, et l'étiquette `tags` si la catégorie est nouvelle.
4. Régénérer avec `npm run check`.

L'étape 4 échoue en listant précisément ce qui manque tant qu'une clé n'est pas
renseignée ; les pages de confidentialité, le plan du site et le workflow
GitHub Actions suivent automatiquement.

Fichiers de marque :

| Fichier | Usage |
|---------|-------|
| `assets/logo-mark.svg` | Signe seul (tuile carrée), pour icônes et avatars |
| `assets/logo.svg` | Verrouillage horizontal signe + nom, pour presse et réseaux |
| `assets/favicon.svg` | Version simplifiée pour les onglets du navigateur |

Le signe est repris en SVG inline dans la navigation (`brandLogo` dans `build.mjs`) :
toute modification du dessin doit être reportée dans ces quatre endroits.

## La méduse du hero

`assets/jellyfish.js` dessine la méduse en WebGL brut, sans aucune bibliothèque
(≈ 17 ko, chargé uniquement sur les pages d'accueil).

Toutes les positions sont calculées dans le vertex shader à partir de coordonnées
`(u, v)` : les tampons sont envoyés une seule fois au démarrage et une image ne
coûte que sept appels de dessin, sans aucun calcul JavaScript par image.

Garde-fous :

| Situation | Comportement |
|-----------|--------------|
| Pas de WebGL | Le canvas reste vide, un halo CSS prend le relais |
| `prefers-reduced-motion` | Une seule image est rendue, sans boucle |
| Hero hors écran ou onglet caché | La boucle est arrêtée |
| Écran haute densité | Ratio de pixels plafonné à 2 |
| Thème clair | Bascule en tracé à l'encre (alpha classique) : l'additif est invisible sur fond clair |

Pages générées (à committer, Vercel sert du statique) :

- `/` et `/<langue>/` — accueil
- `/privacy/` et `/<langue>/privacy/` — index des politiques
- `/privacy/<app>/` et `/<langue>/privacy/<app>/` — politique de chaque application
- `sitemap.xml`, `robots.txt`

Les préfixes de langue sont `fr`, `ar`, `es`, `pt`. L’anglais est servi à la racine et
déclaré comme `x-default` dans les balises `hreflang`.

## Modifier un texte

1. Éditer `content/strings.mjs` (et `content/apps.mjs` pour une nouvelle application).
2. Régénérer :

```bash
node build.mjs
```

3. Committer les fichiers HTML régénérés. Le job `validate` de GitHub Actions relance
   la génération et échoue si le HTML committé ne correspond plus au contenu.

## Aperçu local

```bash
npm run dev
```

Puis ouvrir `http://localhost:3000` (ou `/fr/`, `/ar/`, `/es/`, `/pt/`).

## Déploiement (GitHub Actions → Vercel)

1. Créer un projet Vercel pointant sur ce dépôt (framework : **Other**). La commande
   de build et le dossier de sortie sont déjà fixés dans `vercel.json`.
2. Ajouter le domaine `haythemstudio.com` dans Vercel.
3. Dans le dépôt GitHub → **Settings → Secrets and variables → Actions**, créer :

| Secret | Où le trouver |
|--------|----------------|
| `VERCEL_TOKEN` | [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Fichier `.vercel/project.json` après `vercel link`, champ `orgId` |
| `VERCEL_PROJECT_ID` | Même fichier, champ `projectId` |

4. Premier lien local (une fois) :

```bash
npm i -g vercel
cd website   # ou racine du dépôt
vercel login
vercel link
```

5. Chaque push sur `main` lance la validation puis le déploiement production.

Le job `validate` tourne aussi sur les pull requests, sans déployer.

## URLs Play Console

Voir [`URL-PLAY-CONSOLE.txt`](./URL-PLAY-CONSOLE.txt).
