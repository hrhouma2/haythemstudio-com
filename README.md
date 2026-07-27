# haythemstudio.com

Site vitrine et politiques de confidentialité des applications Android **GNeurone AI**.
Cinq langues : anglais (langue principale), français, arabe, espagnol, portugais.

## Structure

| Chemin | Rôle |
|--------|------|
| `content/apps.mjs` | Données des applications, illustrations SVG, liste des langues |
| `content/strings.mjs` | Tous les textes, une entrée par langue |
| `build.mjs` | Génère les pages HTML de toutes les langues |
| `assets/` | CSS, JavaScript, logo (partagés par toutes les langues) |

Fichiers de marque :

| Fichier | Usage |
|---------|-------|
| `assets/logo-mark.svg` | Signe seul (tuile carrée), pour icônes et avatars |
| `assets/logo.svg` | Verrouillage horizontal signe + nom, pour presse et réseaux |
| `assets/favicon.svg` | Version simplifiée pour les onglets du navigateur |

Le signe est repris en SVG inline dans la navigation (`brandLogo` dans `build.mjs`) :
toute modification du dessin doit être reportée dans ces quatre endroits.

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
