# haythemstudio.com

Site vitrine et politiques de confidentialité des applications Android **GNeurone AI**.

## Contenu

- `/` — page d’accueil Haythem Studio
- `/privacy/` — index des politiques
- `/privacy/<app>/` — politique de chaque application

## Déploiement (GitHub Actions → Vercel)

1. Créer un projet Vercel pointant sur ce dépôt (framework : **Other**, sortie = racine).
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

Pour un aperçu sans déployer, le job `validate` tourne aussi sur les pull requests.

## URLs Play Console

Voir [`URL-PLAY-CONSOLE.txt`](./URL-PLAY-CONSOLE.txt).

## Aperçu local

```bash
npx --yes serve .
```

Puis ouvrir `http://localhost:3000`.
