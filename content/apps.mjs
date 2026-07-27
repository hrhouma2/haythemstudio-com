export const SITE_URL = "https://haythemstudio.com";
export const EMAIL = "rehoumahaythem@gmail.com";
export const PUBLISHER = "GNeurone AI";

export const LOCALES = ["en", "fr", "ar", "es", "pt"];
export const DEFAULT_LOCALE = "en";

export const localeMeta = {
  en: { label: "English", short: "EN", dir: "ltr", base: "" },
  fr: { label: "Français", short: "FR", dir: "ltr", base: "/fr" },
  ar: { label: "العربية", short: "AR", dir: "rtl", base: "/ar" },
  es: { label: "Español", short: "ES", dir: "ltr", base: "/es" },
  pt: { label: "Português", short: "PT", dir: "ltr", base: "/pt" },
};

export const apps = [
  {
    slug: "qiblafr",
    key: "qibla",
    name: "Boussole Qibla",
    short: "Boussole Qibla",
    pkg: "com.haythemstudio.qiblafr",
    accent: "#f5c46b",
    featured: true,
    tag: "lifestyle",
    permissions: "location",
    storage: "qibla",
    extra: "qibla",
  },
  {
    slug: "motsmeles",
    key: "motsmeles",
    name: "صيد الكلمات — Word Hunt",
    short: "Word Hunt",
    pkg: "com.haythemstudio.motsmeles",
    accent: "#3ddc97",
    tag: "words",
    permissions: "none",
    storage: "game",
  },
  {
    slug: "parkingpuzzle",
    key: "parking",
    name: "Parking Puzzle",
    short: "Parking Puzzle",
    pkg: "com.haythemstudio.parkingpuzzle",
    accent: "#4cc9f0",
    tag: "puzzle",
    permissions: "none",
    storage: "game",
  },
  {
    slug: "arcadelab",
    key: "arcade",
    name: "Puzzle Arcade",
    short: "Puzzle Arcade",
    pkg: "com.haythemstudio.arcadelab",
    accent: "#3ddc97",
    tag: "collection",
    permissions: "none",
    storage: "game",
  },
  {
    slug: "onelinepuzzle",
    key: "oneline",
    name: "One Line Puzzle",
    short: "One Line Puzzle",
    pkg: "com.haythemstudio.onelinepuzzle",
    accent: "#4cc9f0",
    tag: "minimal",
    permissions: "none",
    storage: "game",
  },
];

/** Illustrations shown inside the bento cards, one per application. */
export const cardArt = {
  qibla: `<svg viewBox="0 0 240 150" aria-hidden="true">
                <defs>
                  <radialGradient id="qg" cx="50%" cy="45%">
                    <stop offset="0%" stop-color="#f5c46b" stop-opacity="0.32"/>
                    <stop offset="100%" stop-color="#f5c46b" stop-opacity="0"/>
                  </radialGradient>
                </defs>
                <rect width="240" height="150" fill="url(#qg)"/>
                <g transform="translate(60 15)">
                  <circle cx="60" cy="60" r="56" fill="none" stroke="#f5c46b" stroke-opacity="0.3"/>
                  <circle cx="60" cy="60" r="42" fill="none" stroke="#f5c46b" stroke-opacity="0.18"/>
                  <g stroke="#f5c46b" stroke-opacity="0.5" stroke-linecap="round" stroke-width="2">
                    <path d="M60 6v10M60 104v10M6 60h10M104 60h10"/>
                  </g>
                  <g stroke="#f5c46b" stroke-opacity="0.25" stroke-linecap="round">
                    <path d="M22 22l6 6M98 22l-6 6M22 98l6-6M98 98l-6-6"/>
                  </g>
                  <g class="art-needle">
                    <path d="M60 18l10 40-10 9-10-9z" fill="#f5c46b"/>
                    <path d="M60 102l-10-35 10-9 10 9z" fill="#f5c46b" fill-opacity="0.28"/>
                  </g>
                  <rect x="52" y="52" width="16" height="16" rx="3" fill="#0a1210" stroke="#3ddc97" stroke-width="1.5"/>
                </g>
                <g fill="#f5c46b" fill-opacity="0.75" font-family="monospace" font-size="10">
                  <text x="14" y="30">FAJR 05:12</text>
                  <text x="14" y="50">DHUHR 12:48</text>
                  <text x="14" y="70">ASR 16:31</text>
                  <text x="14" y="90">MAGHRIB 19:57</text>
                  <text x="14" y="110">ISHA 21:22</text>
                </g>
              </svg>`,
  motsmeles: `<svg viewBox="0 0 240 130" aria-hidden="true">
                <g stroke="#3ddc97" stroke-opacity="0.2">
                  <rect x="30" y="12" width="180" height="106" rx="12"/>
                  <path d="M75 12v106M120 12v106M165 12v106M30 45h180M30 78h180"/>
                </g>
                <rect x="32" y="14" width="41" height="102" rx="10" fill="#3ddc97" fill-opacity="0.14"/>
                <g fill="#eafff6" font-size="15" text-anchor="middle" font-family="sans-serif">
                  <text x="52" y="34">ص</text><text x="97" y="34">ي</text><text x="142" y="34">د</text><text x="187" y="34">ك</text>
                  <text x="52" y="67">ا</text><text x="97" y="67">ل</text><text x="142" y="67">ك</text><text x="187" y="67">م</text>
                  <text x="52" y="100">م</text><text x="97" y="100">ا</text><text x="142" y="100">ت</text><text x="187" y="100">ه</text>
                </g>
              </svg>`,
  parking: `<svg viewBox="0 0 240 130" aria-hidden="true">
                <rect x="26" y="12" width="188" height="106" rx="12" fill="none" stroke="#4cc9f0" stroke-opacity="0.28"/>
                <rect class="art-slide" x="38" y="56" width="76" height="20" rx="8" fill="#ff6b6b"/>
                <rect x="38" y="22" width="22" height="26" rx="8" fill="#4cc9f0" fill-opacity="0.6"/>
                <rect x="70" y="22" width="56" height="18" rx="8" fill="#4cc9f0" fill-opacity="0.38"/>
                <rect x="168" y="30" width="20" height="52" rx="8" fill="#4cc9f0" fill-opacity="0.45"/>
                <rect x="50" y="86" width="62" height="18" rx="8" fill="#4cc9f0" fill-opacity="0.4"/>
                <rect x="128" y="86" width="22" height="20" rx="8" fill="#4cc9f0" fill-opacity="0.5"/>
                <path d="M214 56v20" stroke="#3ddc97" stroke-width="4" stroke-linecap="round"/>
              </svg>`,
  arcade: `<svg viewBox="0 0 240 130" aria-hidden="true">
                <g>
                  <rect class="art-blink" x="34" y="14" width="48" height="32" rx="10" fill="#3ddc97" fill-opacity="0.7"/>
                  <rect x="96" y="14" width="48" height="32" rx="10" fill="#4cc9f0" fill-opacity="0.45"/>
                  <rect class="art-blink-2" x="158" y="14" width="48" height="32" rx="10" fill="#f5c46b" fill-opacity="0.55"/>
                  <rect x="34" y="52" width="48" height="26" rx="10" fill="#f5c46b" fill-opacity="0.35"/>
                  <rect class="art-blink-3" x="96" y="52" width="48" height="26" rx="10" fill="#3ddc97" fill-opacity="0.55"/>
                  <rect x="158" y="52" width="48" height="26" rx="10" fill="#4cc9f0" fill-opacity="0.5"/>
                  <rect class="art-blink-2" x="34" y="84" width="48" height="32" rx="10" fill="#4cc9f0" fill-opacity="0.4"/>
                  <rect x="96" y="84" width="48" height="32" rx="10" fill="#f5c46b" fill-opacity="0.45"/>
                  <rect class="art-blink" x="158" y="84" width="48" height="32" rx="10" fill="#3ddc97" fill-opacity="0.65"/>
                </g>
                <text x="120" y="72" fill="#04120d" font-family="sans-serif" font-size="15" font-weight="700" text-anchor="middle">2048</text>
              </svg>`,
  oneline: `<svg viewBox="0 0 240 130" aria-hidden="true">
                <path class="art-stroke" d="M48 108L84 24l72 84H48l72-52 36 52" stroke="#4cc9f0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <g fill="#eafff6">
                  <circle cx="48" cy="108" r="6"/><circle cx="84" cy="24" r="6"/>
                  <circle cx="156" cy="108" r="6"/><circle cx="120" cy="56" r="6"/>
                </g>
              </svg>`,
};

/** Slides of the phone mockup in the hero. */
export const phoneSlides = [
  {
    key: "motsmeles",
    svg: `<svg viewBox="0 0 120 120" width="150" height="150" fill="none" aria-hidden="true">
                <g stroke="#3ddc97" stroke-opacity="0.25">
                  <rect x="12" y="12" width="96" height="96" rx="10"/>
                  <path d="M36 12v96M60 12v96M84 12v96M12 36h96M12 60h96M12 84h96"/>
                </g>
                <rect x="14" y="14" width="22" height="92" rx="9" fill="#3ddc97" fill-opacity="0.16"/>
                <g fill="#eafff6" font-family="sans-serif" font-size="13" text-anchor="middle">
                  <text x="24" y="30">ك</text><text x="48" y="30">م</text><text x="72" y="30">ش</text><text x="96" y="30">د</text>
                  <text x="24" y="54">ل</text><text x="48" y="54">ر</text><text x="72" y="54">ن</text><text x="96" y="54">ه</text>
                  <text x="24" y="78">م</text><text x="48" y="78">ب</text><text x="72" y="78">ع</text><text x="96" y="78">ت</text>
                  <text x="24" y="102">ة</text><text x="48" y="102">ي</text><text x="72" y="102">ف</text><text x="96" y="102">س</text>
                </g>
              </svg>`,
  },
  {
    key: "parking",
    svg: `<svg viewBox="0 0 120 120" width="150" height="150" fill="none" aria-hidden="true">
                <rect x="12" y="12" width="96" height="96" rx="10" stroke="#4cc9f0" stroke-opacity="0.3"/>
                <rect class="art-slide" x="20" y="52" width="44" height="16" rx="6" fill="#ff6b6b"/>
                <rect x="20" y="20" width="16" height="26" rx="6" fill="#4cc9f0" fill-opacity="0.65"/>
                <rect x="46" y="20" width="34" height="14" rx="6" fill="#4cc9f0" fill-opacity="0.4"/>
                <rect x="86" y="30" width="14" height="40" rx="6" fill="#4cc9f0" fill-opacity="0.5"/>
                <rect x="28" y="76" width="40" height="14" rx="6" fill="#4cc9f0" fill-opacity="0.45"/>
                <path d="M108 52v16" stroke="#3ddc97" stroke-width="3" stroke-linecap="round"/>
              </svg>`,
  },
  {
    key: "qibla",
    svg: `<svg viewBox="0 0 120 120" width="150" height="150" fill="none" aria-hidden="true">
                <circle cx="60" cy="60" r="46" stroke="#f5c46b" stroke-opacity="0.35"/>
                <circle cx="60" cy="60" r="34" stroke="#f5c46b" stroke-opacity="0.2"/>
                <g stroke="#f5c46b" stroke-opacity="0.55" stroke-linecap="round">
                  <path d="M60 14v8M60 98v8M14 60h8M98 60h8"/>
                </g>
                <g class="art-needle">
                  <path d="M60 24l9 34-9 8-9-8z" fill="#f5c46b"/>
                  <path d="M60 96l-9-30 9-8 9 8z" fill="#f5c46b" fill-opacity="0.3"/>
                </g>
                <rect x="53" y="53" width="14" height="14" rx="3" fill="#0d1413" stroke="#3ddc97"/>
              </svg>`,
  },
  {
    key: "arcade",
    svg: `<svg viewBox="0 0 120 120" width="150" height="150" fill="none" aria-hidden="true">
                <g>
                  <rect class="art-blink" x="14" y="14" width="28" height="28" rx="8" fill="#3ddc97" fill-opacity="0.75"/>
                  <rect x="46" y="14" width="28" height="28" rx="8" fill="#4cc9f0" fill-opacity="0.5"/>
                  <rect class="art-blink-2" x="78" y="14" width="28" height="28" rx="8" fill="#f5c46b" fill-opacity="0.6"/>
                  <rect x="14" y="46" width="28" height="28" rx="8" fill="#f5c46b" fill-opacity="0.4"/>
                  <rect class="art-blink-3" x="46" y="46" width="28" height="28" rx="8" fill="#3ddc97" fill-opacity="0.6"/>
                  <rect x="78" y="46" width="28" height="28" rx="8" fill="#4cc9f0" fill-opacity="0.55"/>
                  <rect class="art-blink-2" x="14" y="78" width="28" height="28" rx="8" fill="#4cc9f0" fill-opacity="0.45"/>
                  <rect x="46" y="78" width="28" height="28" rx="8" fill="#f5c46b" fill-opacity="0.5"/>
                  <rect class="art-blink" x="78" y="78" width="28" height="28" rx="8" fill="#3ddc97" fill-opacity="0.7"/>
                </g>
              </svg>`,
  },
  {
    key: "oneline",
    svg: `<svg viewBox="0 0 120 120" width="150" height="150" fill="none" aria-hidden="true">
                <path class="art-stroke" d="M24 92L60 24l36 68H24l36-40 36 40" stroke="#3ddc97" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <g fill="#eafff6">
                  <circle cx="24" cy="92" r="4.5"/><circle cx="60" cy="24" r="4.5"/>
                  <circle cx="96" cy="92" r="4.5"/><circle cx="60" cy="52" r="4.5"/>
                </g>
              </svg>`,
  },
];
