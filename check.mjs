/**
 * Verifie que la generation a bien produit toutes les pages attendues.
 * La liste se deduit de content/apps.mjs : ajouter une application ou une
 * langue ne demande aucune modification ici ni dans le workflow.
 */

import { existsSync } from "node:fs";
import { LOCALES, apps, localeMeta } from "./content/apps.mjs";

const assets = [
  "assets/styles.css",
  "assets/main.js",
  "assets/jellyfish.js",
  "assets/favicon.svg",
  "sitemap.xml",
  "robots.txt",
];

const expected = [...assets];

for (const locale of LOCALES) {
  const { base } = localeMeta[locale];
  const dir = base ? `${base.slice(1)}/` : "";
  expected.push(`${dir}index.html`, `${dir}privacy/index.html`);
  for (const app of apps) expected.push(`${dir}privacy/${app.slug}/index.html`);
}

const missing = expected.filter((path) => !existsSync(path));

if (missing.length) {
  console.error(`::error::Pages manquantes : ${missing.join(", ")}`);
  process.exit(1);
}

console.log(`${expected.length} fichiers verifies pour ${LOCALES.length} langues et ${apps.length} applications.`);
