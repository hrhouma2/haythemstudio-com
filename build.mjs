/**
 * Generates the static site for every locale.
 *
 *   node build.mjs
 *
 * Output (committed to the repository so that Vercel serves plain static files):
 *   /index.html              /privacy/       /privacy/<app>/
 *   /<locale>/index.html     /<locale>/privacy/   /<locale>/privacy/<app>/
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  DEFAULT_LOCALE,
  EMAIL,
  LOCALES,
  PUBLISHER,
  SITE_URL,
  apps,
  cardArt,
  localeMeta,
} from "./content/apps.mjs";
import { strings } from "./content/strings.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));

const path = (locale, rest = "/") => `${localeMeta[locale].base}${rest}`;

const fonts = (locale) =>
  locale === "ar"
    ? "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Figtree:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap"
    : "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap";

const alternates = (rest) =>
  [
    ...LOCALES.map(
      (loc) => `  <link rel="alternate" hreflang="${loc}" href="${SITE_URL}${path(loc, rest)}">`
    ),
    `  <link rel="alternate" hreflang="x-default" href="${SITE_URL}${path(DEFAULT_LOCALE, rest)}">`,
  ].join("\n");

const head = ({ locale, title, description, rest, ogTitle, ogDescription }) => `  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="theme-color" content="#070b0a">
  <link rel="canonical" href="${SITE_URL}${path(locale, rest)}">
${alternates(rest)}
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${ogTitle || title}">
  <meta property="og:description" content="${ogDescription || description}">
  <meta property="og:url" content="${SITE_URL}${path(locale, rest)}">
  <meta property="og:locale" content="${locale}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${fonts(locale)}" rel="stylesheet">
  <link rel="stylesheet" href="/assets/styles.css">`;

const langSwitch = (locale, rest) => `        <div class="lang-switch" role="group" aria-label="${strings[locale].nav.language}">
${LOCALES.map(
  (loc) =>
    `          <a href="${path(loc, rest)}" lang="${loc}" hreflang="${loc}"${
      loc === locale ? ' aria-current="true"' : ""
    } title="${localeMeta[loc].label}">${localeMeta[loc].short}</a>`
).join("\n")}
        </div>`;

const themeButton = (locale) => `        <button class="theme-toggle" type="button" data-theme-toggle aria-label="${strings[locale].nav.theme}">
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
          </svg>
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
          </svg>
        </button>`;

/** Sandwich button: only shown below the navigation breakpoint. */
const menuButton = (locale) => `        <button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="site-menu" aria-label="${strings[locale].nav.menu}" data-label-open="${strings[locale].nav.menu}" data-label-close="${strings[locale].nav.menuClose}">
          <span class="nav-bars" aria-hidden="true"><span></span><span></span><span></span></span>
        </button>`;

/** Monogram: the left stem is solid, the right one is built from three puzzle blocks. */
const brandLogo = `<span class="brand-logo" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="34" height="34">
            <defs>
              <linearGradient id="hsTile" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#102a21"/>
                <stop offset="1" stop-color="#050c0a"/>
              </linearGradient>
              <linearGradient id="hsStem" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#5ef0ae"/>
                <stop offset="1" stop-color="#2bb684"/>
              </linearGradient>
              <linearGradient id="hsBlocks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#4cc9f0"/>
                <stop offset=".52" stop-color="#3ddc97"/>
                <stop offset="1" stop-color="#f5c46b"/>
              </linearGradient>
              <radialGradient id="hsGlow" cx="24%" cy="10%" r="88%">
                <stop offset="0" stop-color="#3ddc97" stop-opacity=".38"/>
                <stop offset="1" stop-color="#3ddc97" stop-opacity="0"/>
              </radialGradient>
            </defs>
            <rect width="48" height="48" rx="13" fill="url(#hsTile)"/>
            <rect width="48" height="48" rx="13" fill="url(#hsGlow)"/>
            <path d="M5 35.5 43 12.5" stroke="#3ddc97" stroke-opacity=".16" stroke-width="1.6" stroke-linecap="round"/>
            <rect x="12" y="12" width="7" height="24" rx="3.5" fill="url(#hsStem)"/>
            <rect x="12" y="21.5" width="24" height="5" rx="2.5" fill="url(#hsStem)"/>
            <rect x="29" y="12" width="7" height="24" rx="3.5" fill="url(#hsBlocks)"/>
            <path class="logo-grooves" d="M29 19.6h7M29 28.4h7" stroke="#07120e" stroke-width="1.7"/>
            <rect x=".75" y=".75" width="46.5" height="46.5" rx="12.4" fill="none" stroke="#3ddc97" stroke-opacity=".3"/>
          </svg>
        </span>`;

const nav = (locale, rest, { onHome = false } = {}) => {
  const t = strings[locale].nav;
  const home = path(locale, "/");
  const anchor = (id) => (onHome ? `#${id}` : `${home}#${id}`);
  return `  <nav class="site-nav">
    <div class="wrap">
      <a class="brand-mark" href="${home}" aria-label="Haythem Studio">
        ${brandLogo}
        <span class="brand-word">Haythem <span>Studio</span></span>
      </a>
      <div class="nav-right">
        <div class="nav-panel" id="site-menu">
          <ul class="nav-links">
            <li><a href="${anchor("apps")}">${t.apps}</a></li>
            <li><a href="${anchor("principes")}">${t.principles}</a></li>
            <li class="nav-key"><a href="${path(locale, "/privacy/")}">${t.privacy}</a></li>
            <li><a href="${anchor("contact")}">${t.contact}</a></li>
          </ul>
${langSwitch(locale, rest)}
        </div>
${themeButton(locale)}
${menuButton(locale)}
      </div>
    </div>
  </nav>`;
};

const page = ({ locale, title, description, rest, body, bodyClass = "", ogTitle, ogDescription }) => {
  const { dir } = localeMeta[locale];
  return `<!doctype html>
<html lang="${locale}" dir="${dir}" data-theme="dark">
<head>
${head({ locale, title, description, rest, ogTitle, ogDescription })}
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ""}>
  <div class="atmosphere" aria-hidden="true"></div>
  <div class="orb orb-a" aria-hidden="true"></div>
  <div class="orb orb-b" aria-hidden="true"></div>

${body}

  <script src="/assets/main.js" defer></script>
  ${body.includes("data-jellyfish") ? '<script src="/assets/jellyfish.js" defer></script>' : ""}
</body>
</html>
`;
};

const footer = (locale) => {
  const t = strings[locale];
  return `  <footer class="site-footer">
    <div class="wrap">
      <p>${t.footer.rights}</p>
      <p><a href="${path(locale, "/privacy/")}">${t.footer.policies}</a> · ${t.footer.updated}${t.colon}${t.updated}</p>
    </div>
  </footer>`;
};

const arrow = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const arrowSmall = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

const appCard = (locale, app, index) => {
  const t = strings[locale];
  const copy = t.apps[app.key];
  const classes = ["app-card", app.featured ? "featured" : "wide", "reveal"].join(" ");
  const delay = index ? ` data-delay="${Math.min(index, 4)}"` : "";
  return `          <a class="${classes}"${delay} href="${path(locale, `/privacy/${app.slug}/`)}" style="--card-accent:${app.accent}">
            <div class="card-art">
              ${cardArt[app.key]}
            </div>
            <div class="card-body">
              <h3>${app.name} <span class="tag">${t.tags[app.tag]}</span></h3>
              <p>${copy.description}</p>
            </div>
            <div class="card-foot">
              <span class="pkg">${app.pkg}</span>
              <span class="card-link">${t.catalogue.cardLink} ${arrowSmall}</span>
            </div>
          </a>`;
};

// Les chiffres du hero suivent le catalogue : ajouter une application suffit.
const appCount = apps.length;
const levelCount = apps.reduce((total, app) => total + (app.levels ?? 0), 0);

const homeBody = (locale) => {
  const t = strings[locale];
  const marquee = t.marquee.map((item) => `<span>${item}</span>`).join("");
  return `${nav(locale, "/", { onHome: true })}

  <header class="hero">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <span class="badge"><span class="dot" aria-hidden="true"></span> ${t.hero.badge}</span>
        <h1>
          <span class="line"><span>${t.hero.line1}</span></span>
          <span class="line"><span>${t.hero.line2}</span></span>
          <span class="line"><span class="gradient-text">${t.hero.line3}</span></span>
        </h1>
        <p class="hero-lede">${t.hero.lede}</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="#apps">${t.hero.ctaPrimary} ${arrow}</a>
          <a class="btn btn-ghost" href="${path(locale, "/privacy/")}">${t.hero.ctaSecondary}</a>
        </div>
        <div class="stats">
          <div class="stat">
            <div class="num" data-count="${appCount}">${appCount}</div>
            <div class="label">${t.hero.statApps}</div>
          </div>
          <div class="stat">
            <div class="num" data-count="${levelCount}" data-suffix="+">${levelCount}+</div>
            <div class="label">${t.hero.statLevels}</div>
          </div>
          <div class="stat">
            <div class="num" data-count="100" data-suffix="%">100%</div>
            <div class="label">${t.hero.statOffline}</div>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="floating-chip chip-1">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.4-3 8.2-7 9-4-.8-7-4.6-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>
          ${t.hero.chipCollect}
        </div>
        <div class="floating-chip chip-2">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>
          ${t.hero.chipOffline}
        </div>

        <div class="jellyfish-stage">
          <canvas data-jellyfish aria-hidden="true"></canvas>
          <div class="jellyfish-fallback" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  </header>

  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      ${marquee}
      ${marquee}
    </div>
  </div>

  <main>
    <section class="section" id="apps">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="eyebrow">${t.catalogue.eyebrow}</p>
          <h2>${t.catalogue.title}</h2>
          <p>${t.catalogue.lede}</p>
        </div>

        <div class="bento">
${apps.map((app, i) => appCard(locale, app, i)).join("\n\n")}
        </div>
      </div>
    </section>

    <section class="section" id="principes">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="eyebrow">${t.principles.eyebrow}</p>
          <h2>${t.principles.title}</h2>
          <p>${t.principles.lede}</p>
        </div>

        <div class="principles">
${t.principles.items
  .map(
    (item, i) => `          <div class="principle reveal"${i ? ` data-delay="${i}"` : ""}>
            <div class="ico">${principleIcons[i]}</div>
            <strong>${item.title}</strong>
            <p>${item.text}</p>
          </div>`
  )
  .join("\n")}
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="wrap">
        <div class="contact-band reveal">
          <div>
            <h2>${t.contact.title}</h2>
            <p>${t.contact.lede}</p>
            <p><a class="mail" href="mailto:${EMAIL}">${EMAIL}</a></p>
          </div>
          <a class="btn btn-primary" href="mailto:${EMAIL}">
            ${t.contact.button}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg>
          </a>
        </div>
      </div>
    </section>
  </main>

${footer(locale)}`;
};

const principleIcons = [
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.4-3 8.2-7 9-4-.8-7-4.6-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>`,
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>`,
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="11" width="17" height="10.5" rx="2.5"/><path d="M7.5 11V7a4.5 4.5 0 0 1 8.7-1.6"/></svg>`,
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="14" height="14" rx="2.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>`,
];

const privacyIndexBody = (locale) => {
  const t = strings[locale];
  const p = t.privacy;
  const rows = apps
    .map(
      (app) => `        <tr>
          <td>
            <a href="${path(locale, `/privacy/${app.slug}/`)}">${app.name}</a><br>
            <span class="meta">${t.apps[app.key].tagline}</span>
          </td>
          <td><code>${app.pkg}</code></td>
        </tr>`
    )
    .join("\n");

  return `${nav(locale, "/privacy/")}

  <div class="wrap narrow">
    <header class="privacy-header">
      <a class="back-link" href="${path(locale, "/")}">${p.backHome}</a>
      <h1>${p.indexHeading}</h1>
      <p class="meta">${p.indexMeta1}</p>
      <p class="meta">${p.indexMeta2}</p>
    </header>

    <p>${p.indexIntro}</p>

    <table class="app-table">
      <thead>
        <tr>
          <th>${p.tableApp}</th>
          <th>${p.tableId}</th>
        </tr>
      </thead>
      <tbody>
${rows}
      </tbody>
    </table>

    <h2>${p.contactHeading}</h2>
    <p>${PUBLISHER} — <a href="mailto:${EMAIL}">${EMAIL}</a></p>

    <footer class="site-footer">
      <div class="wrap">
        <p>${p.updatedLine}${t.colon}${t.updated}.</p>
      </div>
    </footer>
  </div>`;
};

const privacyAppBody = (locale, app) => {
  const t = strings[locale];
  const p = t.privacy;
  const rest = `/privacy/${app.slug}/`;
  const storage = app.storage === "qibla" ? p.storedQibla : p.storedGame;

  const extra =
    app.extra === "qibla"
      ? `
    <h2>${p.locationHeading}</h2>
    <p>${p.locationIntro}</p>
    <div class="box">
      <h3>${p.locationBoxTitle}</h3>
      <ul>
${p.locationBoxItems.map((item) => `        <li>${item}</li>`).join("\n")}
      </ul>
    </div>
    <p>${p.locationOutro1}</p>
    <p>${p.locationOutro2}</p>

    <h2>${p.notificationsHeading}</h2>
    <p>${p.notifications1}</p>
    <p>${p.notifications2}</p>
`
      : "";

  const permissionRows =
    app.permissions === "location"
      ? `      <tr><td><code>ACCESS_COARSE_LOCATION</code></td><td>${p.locationReason}</td></tr>
      <tr><td><code>ACCESS_FINE_LOCATION</code></td><td>${p.locationReason}</td></tr>`
      : `      <tr><td colspan="2">${p.noPermission}</td></tr>`;

  return `${nav(locale, rest)}

  <div class="wrap narrow">
    <header class="privacy-header">
      <a class="back-link" href="${path(locale, "/privacy/")}">${p.backPolicies}</a>
      <h1>${p.heading}</h1>
      <p class="meta">${app.name} &nbsp;·&nbsp; <code>${app.pkg}</code></p>
      <p class="meta">${p.publisherLine} &nbsp;·&nbsp; ${p.updatedLine}${t.colon}${t.updated}</p>
    </header>

    <h2>${p.oneSentenceHeading}</h2>
    <p>${p.oneSentence}</p>

    <h2>${p.storedHeading}</h2>
    <p>${p.storedIntro}</p>
    <ul>
${storage.map((item) => `      <li>${item}</li>`).join("\n")}
    </ul>
    <p>${p.storedOutro}</p>
${extra}
    <h2>${p.adsHeading}</h2>
    <p>${p.adsText}</p>

    <h2>${p.purchasesHeading}</h2>
    <p>${p.purchasesText}</p>

    <h2>${p.childrenHeading}</h2>
    <p>${p.childrenText}</p>

    <h2>${p.permissionsHeading}</h2>
    <table class="app-table">
      <tr><th>${p.permissionCol}</th><th>${p.reasonCol}</th></tr>
${permissionRows}
    </table>

    <h2>${p.rightsHeading}</h2>
    <p>${p.rights1}</p>
    <p>${p.rights2}</p>

    <h2>${p.changesHeading}</h2>
    <p>${p.changesText}</p>

    <h2>${p.contactHeading}</h2>
    <p>${PUBLISHER} — <a href="mailto:${EMAIL}">${EMAIL}</a></p>

    <footer class="site-footer">
      <div class="wrap">
        <p>${p.footerNote(app.name)} ${p.updatedLine}${t.colon}${t.updated}.</p>
      </div>
    </footer>
  </div>`;
};

const write = async (relativePath, html) => {
  const target = join(ROOT, relativePath);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
  return relativePath;
};

const outPath = (locale, rest) => `${localeMeta[locale].base}${rest}index.html`.replace(/^\//, "");

/**
 * Une application ajoutee dans content/apps.mjs a besoin d'une illustration et
 * d'un texte par langue. Sans ce controle, l'oubli passe en "undefined" dans la
 * page generee.
 */
const checkContent = () => {
  const gaps = [];

  for (const app of apps) {
    if (!cardArt[app.key]) gaps.push(`cardArt.${app.key} (illustration de la carte)`);
    for (const locale of LOCALES) {
      const t = strings[locale];
      if (!t.apps[app.key]?.description) gaps.push(`strings.${locale}.apps.${app.key}.description`);
      if (!t.tags[app.tag]) gaps.push(`strings.${locale}.tags.${app.tag}`);
    }
  }

  if (gaps.length) {
    console.error(`Contenu manquant :\n  - ${[...new Set(gaps)].join("\n  - ")}`);
    process.exit(1);
  }
};

const run = async () => {
  checkContent();
  const written = [];

  for (const locale of LOCALES) {
    const t = strings[locale];

    written.push(
      await write(
        outPath(locale, "/"),
        page({
          locale,
          title: t.home.title,
          description: t.home.description,
          ogDescription: t.home.ogDescription,
          rest: "/",
          body: homeBody(locale),
        })
      )
    );

    written.push(
      await write(
        outPath(locale, "/privacy/"),
        page({
          locale,
          title: t.privacy.indexTitle,
          description: t.privacy.indexDescription,
          rest: "/privacy/",
          bodyClass: "privacy-body",
          body: privacyIndexBody(locale),
        })
      )
    );

    for (const app of apps) {
      const rest = `/privacy/${app.slug}/`;
      written.push(
        await write(
          outPath(locale, rest),
          page({
            locale,
            title: t.privacy.pageTitle(app.name),
            description: t.privacy.pageDescription(app.name, app.pkg),
            rest,
            bodyClass: "privacy-body",
            body: privacyAppBody(locale, app),
          })
        )
      );
    }
  }

  await write("sitemap.xml", sitemap());
  written.push("sitemap.xml");

  await write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  written.push("robots.txt");

  console.log(`${written.length} files generated for ${LOCALES.length} locales.`);
};

const sitemap = () => {
  const paths = ["/", "/privacy/", ...apps.map((app) => `/privacy/${app.slug}/`)];
  const urls = paths
    .flatMap((rest) =>
      LOCALES.map(
        (locale) => `  <url>
    <loc>${SITE_URL}${path(locale, rest)}</loc>
${LOCALES.map(
  (alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${SITE_URL}${path(alt, rest)}"/>`
).join("\n")}
  </url>`
      )
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
