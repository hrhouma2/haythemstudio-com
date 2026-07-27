/**
 * Every string of the site, per locale.
 * Keys are shared by the home page and the privacy pages; see build.mjs.
 */

export const strings = {
  /* ------------------------------------------------------------------ EN */
  en: {
    colon: ": ",
    updated: "27 July 2026",
    home: {
      title: "Haythem Studio — Android apps by GNeurone AI",
      description:
        "Five offline Android applications published by GNeurone AI: puzzles, word search and a Qibla compass. No ads, no account, no in-app purchases.",
      ogDescription: "Five offline Android applications: no ads, no account, no in-app purchases.",
    },
    nav: {
      apps: "Applications",
      principles: "Principles",
      privacy: "Privacy",
      contact: "Contact",
      theme: "Switch theme",
      language: "Language",
    },
    hero: {
      badge: "Five applications on Google Play",
      line1: "No account.",
      line2: "No ads.",
      line3: "No compromise.",
      lede:
        "Haythem Studio builds Android games and utilities that run offline. Five applications published by GNeurone AI, with no data collection and no in-app purchases.",
      ctaPrimary: "Explore the applications",
      ctaSecondary: "Privacy policies",
      statApps: "Published applications",
      statTrackers: "Trackers or ads",
      statOffline: "Computed offline",
      chipCollect: "Zero collection",
      chipOffline: "Works without a network",
    },
    marquee: [
      "Offline",
      "No advertising",
      "No account",
      "No in-app purchase",
      "No tracker",
      "Published by GNeurone AI",
    ],
    catalogue: {
      eyebrow: "The catalogue",
      title: "Five applications, one promise",
      lede:
        "Every title is published under the GNeurone AI account and runs entirely on the device, with no network request.",
      cardLink: "Privacy",
    },
    principles: {
      eyebrow: "Principles",
      title: "What you will not find here",
      lede:
        "These rules are not configuration options: they are written into the code shipped on Google Play.",
      items: [
        {
          title: "No personal data",
          text:
            "Nothing is sent to GNeurone AI. Progress and preferences stay in the private space of the application, on your phone.",
        },
        {
          title: "No advertising",
          text: "No banner, no interstitial, no advertising identifier read, no ad network SDK embedded.",
        },
        {
          title: "No in-app purchase",
          text: "Every feature is available without paying. No subscription, no virtual currency, no paid unlock.",
        },
        {
          title: "Everything computed offline",
          text:
            "Qibla, prayer times, grids and levels are generated on the device. The applications stay usable in airplane mode.",
        },
      ],
    },
    contact: {
      title: "A question about your data?",
      lede: "GNeurone AI answers directly at the address declared on every privacy policy.",
      button: "Send an email",
    },
    footer: {
      rights: "© 2026 Haythem Studio · Publisher GNeurone AI",
      policies: "Privacy policies",
      updated: "Last updated",
    },
    tags: {
      lifestyle: "Lifestyle",
      words: "Words",
      puzzle: "Puzzle",
      collection: "Collection",
      minimal: "Minimal",
    },
    apps: {
      qibla: {
        tagline: "Qibla, prayer times and Hijri calendar",
        description:
          "Qibla direction computed along the great circle, prayer times derived from the position of the sun and a Hijri calendar — all without a single network request.",
      },
      motsmeles: {
        tagline: "Word search game",
        description:
          "Word search grids designed for the Arabic alphabet, with six themes and a fresh grid generated for every game.",
      },
      parking: {
        tagline: "Vehicle unblocking puzzle",
        description:
          "Sixty unblocking levels solved by computer before shipping: the optimal move count is known for each one.",
      },
      arcade: {
        tagline: "Collection of fifteen puzzles",
        description:
          "Fifteen classic puzzles gathered in a single application: bottle sort, 2048, sliding puzzle, Hanoi, snake and more.",
      },
      oneline: {
        tagline: "One-stroke drawing puzzle",
        description:
          "Forty-five shapes to draw in a single stroke, all verified as solvable before publication. No text, no language required.",
      },
    },
    privacy: {
      indexTitle: "Privacy policies — GNeurone AI",
      indexDescription:
        "Privacy policies of the Android applications published by GNeurone AI on Google Play.",
      indexHeading: "Privacy policies — GNeurone AI",
      indexMeta1: "Privacy policies",
      indexMeta2: "Android applications published by GNeurone AI on Google Play",
      indexIntro:
        "None of these applications collects personal data, creates an account, displays advertising or offers in-app purchases. Each page below details what is stored on the device and which permissions are requested.",
      tableApp: "Application",
      tableId: "Play identifier",
      backHome: "← Haythem Studio",
      backPolicies: "← All policies",
      pageTitle: (name) => `Privacy policy — ${name}`,
      pageDescription: (name, pkg) =>
        `Privacy policy of ${name} (${pkg}), published by GNeurone AI.`,
      heading: "Privacy policy",
      publisherLine: "Publisher: GNeurone AI",
      updatedLine: "Last updated",
      oneSentenceHeading: "In one sentence",
      oneSentence:
        "This application collects no personal data, creates no account and transmits nothing to any server belonging to us.",
      storedHeading: "What is stored on your phone",
      storedIntro: "The application saves locally, in its private space:",
      storedGame: [
        "your progress (levels solved, best scores, daily streak);",
        "your preferences (language, theme);",
        "your local hint balance, where applicable.",
      ],
      storedQibla: [
        "your preferences (language, calculation method for prayer times);",
        "the last location used for the Qibla and the prayer times, on the device only;",
        "the state of the prayer reminders you have enabled.",
      ],
      storedOutro:
        "This data never leaves the device. It disappears when you uninstall the application or clear its data.",
      locationHeading: "Location",
      locationIntro:
        "This application requests access to your approximate or precise location for one purpose only: to compute the direction of the Qibla and the prayer times for the place where you are. Both calculations are impossible without geographic coordinates.",
      locationBoxTitle: "What happens to your location",
      locationBoxItems: [
        "It is used <strong>on your device only</strong>, by a local calculation (great-circle route for the Qibla, solar position for the prayer times).",
        "It is kept in the local storage of the application so that it does not have to be requested every time you open it.",
        "It is <strong>transmitted to no server</strong>, neither to the developer nor to a third party.",
        "It is linked to no identifier that could recognise you.",
      ],
      locationOutro1:
        "The permission is not requested at first launch, but when the application actually needs it. You may refuse it: the application stays usable, the Hijri calendar and the 99 names work without a location.",
      locationOutro2:
        "You can revoke this permission at any time in the Android settings of your phone. Clearing the data of the application removes the last stored location.",
      notificationsHeading: "Notifications",
      notifications1:
        "If you enable prayer reminders, the application schedules local notifications at the time of each prayer. These notifications are computed and displayed on your device only: no server is contacted, and no notification content is sent to a third party.",
      notifications2:
        "You can disable these reminders in the Prayers tab, or revoke the notification permission in the Android settings.",
      adsHeading: "Advertising",
      adsText:
        "This application displays no advertising and embeds no advertising SDK. No advertising identifier is read, and no ad network receives any information about you.",
      purchasesHeading: "In-app purchases",
      purchasesText:
        "This application offers no in-app purchase and no subscription. All of its features are available without paying.",
      childrenHeading: "Children",
      childrenText:
        "This application is not primarily directed at children under thirteen and knowingly collects no data about them. If you believe a child has sent us data, write to us and we will delete it.",
      permissionsHeading: "Permissions requested",
      permissionCol: "Permission",
      reasonCol: "Why",
      noPermission: "No sensitive permission is requested.",
      locationReason:
        "Compute the Qibla direction and the prayer times for your location. The calculation is local; the position is never transmitted.",
      rightsHeading: "Your rights",
      rights1:
        "Since no personal data is collected by the publisher, there is nothing to consult, correct or delete on our side. You keep full control: clearing the data of the application in the Android settings removes everything it has stored.",
      rights2:
        "If you live in the European Union, the United Kingdom, California or Canada, the rights granted by your local legislation apply in full. Write to us with any question.",
      changesHeading: "Changes",
      changesText:
        "Any change to this policy will be published on this page, with an updated date. A significant change will be announced in the release notes of the application.",
      contactHeading: "Contact us",
      footerNote: (name) => `Privacy policy of ${name}, published by GNeurone AI.`,
    },
  },

  /* ------------------------------------------------------------------ FR */
  fr: {
    colon: " : ",
    updated: "27 juillet 2026",
    home: {
      title: "Haythem Studio — Applications Android par GNeurone AI",
      description:
        "Cinq applications Android hors ligne éditées par GNeurone AI : puzzles, mots mêlés et boussole Qibla. Sans publicité, sans compte, sans achat intégré.",
      ogDescription: "Cinq applications Android hors ligne : sans publicité, sans compte, sans achat intégré.",
    },
    nav: {
      apps: "Applications",
      principles: "Principes",
      privacy: "Confidentialité",
      contact: "Contact",
      theme: "Changer de thème",
      language: "Langue",
    },
    hero: {
      badge: "Cinq applications sur Google Play",
      line1: "Sans compte.",
      line2: "Sans publicité.",
      line3: "Sans compromis.",
      lede:
        "Haythem Studio conçoit des jeux et utilitaires Android qui fonctionnent hors ligne. Cinq applications publiées par GNeurone AI, sans collecte de données ni achat intégré.",
      ctaPrimary: "Découvrir les applications",
      ctaSecondary: "Politiques de confidentialité",
      statApps: "Applications publiées",
      statTrackers: "Traceur ou publicité",
      statOffline: "Calculé hors ligne",
      chipCollect: "Zéro collecte",
      chipOffline: "Fonctionne sans réseau",
    },
    marquee: [
      "Hors ligne",
      "Sans publicité",
      "Sans compte",
      "Sans achat intégré",
      "Sans traceur",
      "Édité par GNeurone AI",
    ],
    catalogue: {
      eyebrow: "Le catalogue",
      title: "Cinq applications, une même promesse",
      lede:
        "Chaque titre est publié sous le compte GNeurone AI et fonctionne intégralement sur l’appareil, sans requête réseau.",
      cardLink: "Confidentialité",
    },
    principles: {
      eyebrow: "Principes",
      title: "Ce que vous ne trouverez pas ici",
      lede:
        "Ces règles ne sont pas des options de configuration : elles sont inscrites dans le code livré sur Google Play.",
      items: [
        {
          title: "Aucune donnée personnelle",
          text:
            "Rien n’est envoyé à GNeurone AI. Progression et préférences restent dans l’espace privé de l’application, sur votre téléphone.",
        },
        {
          title: "Aucune publicité",
          text:
            "Pas de bannière, pas d’interstitiel, pas d’identifiant publicitaire lu, pas de kit de régie embarqué.",
        },
        {
          title: "Aucun achat intégré",
          text:
            "Toutes les fonctionnalités sont accessibles sans payer. Ni abonnement, ni monnaie virtuelle, ni déblocage payant.",
        },
        {
          title: "Tout est calculé hors ligne",
          text:
            "Qibla, horaires, grilles et niveaux sont générés sur l’appareil. Les applications restent utilisables en mode avion.",
        },
      ],
    },
    contact: {
      title: "Une question sur vos&nbsp;données&nbsp;?",
      lede: "GNeurone AI répond directement à l’adresse déclarée sur chaque politique de confidentialité.",
      button: "Écrire un e-mail",
    },
    footer: {
      rights: "© 2026 Haythem Studio · Éditeur GNeurone AI",
      policies: "Politiques de confidentialité",
      updated: "Dernière mise à jour",
    },
    tags: {
      lifestyle: "Lifestyle",
      words: "Mots",
      puzzle: "Puzzle",
      collection: "Collection",
      minimal: "Minimal",
    },
    apps: {
      qibla: {
        tagline: "Qibla, horaires de prière et calendrier hégirien",
        description:
          "Direction de la Qibla calculée par orthodromie, horaires de prière issus de la position du soleil et calendrier hégirien — le tout sans aucune requête réseau.",
      },
      motsmeles: {
        tagline: "Jeu de mots mêlés",
        description:
          "Grilles de mots mêlés conçues pour l’alphabet arabe, avec six thèmes et une grille générée à chaque partie.",
      },
      parking: {
        tagline: "Casse-tête de déblocage de véhicules",
        description:
          "Soixante niveaux de déblocage résolus par ordinateur avant livraison : le nombre de coups optimal est connu pour chacun.",
      },
      arcade: {
        tagline: "Collection de quinze casse-têtes",
        description:
          "Quinze casse-têtes classiques réunis dans une seule application : tri de flacons, 2048, taquin, Hanoï, serpent et plus.",
      },
      oneline: {
        tagline: "Puzzle de tracé en un seul trait",
        description:
          "Quarante-cinq figures à tracer d’un seul trait, toutes vérifiées comme résolubles avant publication. Aucun texte, aucune langue requise.",
      },
    },
    privacy: {
      indexTitle: "Politiques de confidentialité — GNeurone AI",
      indexDescription:
        "Politiques de confidentialité des applications Android publiées par GNeurone AI sur Google Play.",
      indexHeading: "Politiques de confidentialité — GNeurone AI",
      indexMeta1: "Politiques de confidentialité",
      indexMeta2: "Applications Android publiées par GNeurone AI sur Google Play",
      indexIntro:
        "Aucune de ces applications ne collecte de donnée personnelle, ne crée de compte, n’affiche de publicité ni ne propose d’achat intégré. Chaque page ci-dessous détaille ce qui est enregistré sur l’appareil et les autorisations demandées.",
      tableApp: "Application",
      tableId: "Identifiant Play",
      backHome: "← Haythem Studio",
      backPolicies: "← Toutes les politiques",
      pageTitle: (name) => `Politique de confidentialité — ${name}`,
      pageDescription: (name, pkg) =>
        `Politique de confidentialité de ${name} (${pkg}), éditée par GNeurone AI.`,
      heading: "Politique de confidentialité",
      publisherLine: "Éditeur : GNeurone AI",
      updatedLine: "Dernière mise à jour",
      oneSentenceHeading: "En une phrase",
      oneSentence:
        "Cette application ne collecte aucune donnée personnelle, ne crée aucun compte et ne transmet rien à un serveur qui nous appartiendrait.",
      storedHeading: "Ce qui est stocké sur votre téléphone",
      storedIntro: "L’application enregistre localement, dans son espace privé :",
      storedGame: [
        "votre progression (niveaux résolus, meilleurs scores, série de jours consécutifs) ;",
        "vos préférences (langue, thème) ;",
        "le solde d’indices locaux, le cas échéant.",
      ],
      storedQibla: [
        "vos préférences (langue, méthode de calcul des horaires) ;",
        "la dernière position utilisée pour la Qibla et les horaires, uniquement sur l’appareil ;",
        "l’état des rappels de prière que vous avez activés.",
      ],
      storedOutro:
        "Ces données ne quittent jamais l’appareil. Elles disparaissent si vous désinstallez l’application ou effacez ses données.",
      locationHeading: "Localisation",
      locationIntro:
        "Cette application demande l’accès à votre position approximative ou précise dans un seul but : calculer la direction de la Qibla et les horaires de prière pour l’endroit où vous vous trouvez. Ces deux calculs sont impossibles sans coordonnées géographiques.",
      locationBoxTitle: "Ce qui est fait de votre position",
      locationBoxItems: [
        "Elle est utilisée <strong>sur votre appareil uniquement</strong>, par un calcul local (orthodromie pour la Qibla, position du soleil pour les horaires).",
        "Elle est conservée dans la mémoire locale de l’application afin de ne pas avoir à la redemander à chaque ouverture.",
        "Elle <strong>n’est transmise à aucun serveur</strong>, ni au développeur, ni à un tiers.",
        "Elle n’est associée à aucun identifiant permettant de vous reconnaître.",
      ],
      locationOutro1:
        "L’autorisation n’est pas demandée au premier lancement, mais au moment où l’application en a besoin. Vous pouvez la refuser : l’application reste utilisable, le calendrier hégirien et les 99 noms fonctionnent sans position.",
      locationOutro2:
        "Vous pouvez révoquer cette autorisation à tout moment dans les réglages Android de votre téléphone. Effacer les données de l’application supprime la dernière position mémorisée.",
      notificationsHeading: "Notifications",
      notifications1:
        "Si vous activez les rappels de prière, l’application programme des notifications locales à l’heure de chaque prière. Ces notifications sont calculées et affichées uniquement sur votre appareil : aucun serveur n’est contacté, et aucun contenu de notification n’est transmis à un tiers.",
      notifications2:
        "Vous pouvez désactiver ces rappels dans l’onglet Prières, ou révoquer l’autorisation de notification dans les réglages Android.",
      adsHeading: "Publicité",
      adsText:
        "Cette application n’affiche aucune publicité et n’intègre aucun kit de développement publicitaire. Aucun identifiant publicitaire n’est lu, et aucune régie ne reçoit d’information vous concernant.",
      purchasesHeading: "Achats intégrés",
      purchasesText:
        "Cette application ne propose aucun achat intégré et aucun abonnement. Toutes ses fonctionnalités sont accessibles sans payer.",
      childrenHeading: "Enfants",
      childrenText:
        "Cette application n’est pas destinée en priorité aux enfants de moins de treize ans et ne collecte sciemment aucune donnée les concernant. Si vous pensez qu’un enfant nous a transmis des données, écrivez-nous et nous les supprimerons.",
      permissionsHeading: "Autorisations demandées",
      permissionCol: "Autorisation",
      reasonCol: "Pourquoi",
      noPermission: "Aucune autorisation sensible n’est demandée.",
      locationReason:
        "Calculer la direction de la Qibla et les horaires de prière pour votre position. Le calcul est local, la position n’est jamais transmise.",
      rightsHeading: "Vos droits",
      rights1:
        "Puisque aucune donnée personnelle n’est collectée par l’éditeur, il n’y a rien à consulter, corriger ou effacer de notre côté. Vous gardez le contrôle total : effacer les données de l’application depuis les réglages Android supprime tout ce qu’elle a enregistré.",
      rights2:
        "Si vous résidez dans l’Union européenne, au Royaume-Uni, en Californie ou au Canada, les droits que vous confère votre législation locale s’appliquent pleinement. Écrivez-nous pour toute question.",
      changesHeading: "Modifications",
      changesText:
        "Toute modification de cette politique sera publiée sur cette page, avec une date de mise à jour actualisée. Un changement important sera annoncé dans les notes de version de l’application.",
      contactHeading: "Nous contacter",
      footerNote: (name) => `Politique de confidentialité de ${name}, éditée par GNeurone AI.`,
    },
  },

  /* ------------------------------------------------------------------ AR */
  ar: {
    colon: ": ",
    updated: "٢٧ يوليو ٢٠٢٦",
    home: {
      title: "Haythem Studio — تطبيقات أندرويد من GNeurone AI",
      description:
        "خمسة تطبيقات أندرويد تعمل دون إنترنت، تنشرها GNeurone AI: ألعاب ألغاز، بحث عن الكلمات، وبوصلة القبلة. بلا إعلانات، بلا حساب، بلا شراء داخل التطبيق.",
      ogDescription: "خمسة تطبيقات أندرويد تعمل دون إنترنت: بلا إعلانات، بلا حساب، بلا شراء داخل التطبيق.",
    },
    nav: {
      apps: "التطبيقات",
      principles: "المبادئ",
      privacy: "الخصوصية",
      contact: "اتصل بنا",
      theme: "تغيير المظهر",
      language: "اللغة",
    },
    hero: {
      badge: "خمسة تطبيقات على Google Play",
      line1: "بلا حساب.",
      line2: "بلا إعلانات.",
      line3: "بلا مساومة.",
      lede:
        "يصمّم Haythem Studio ألعابًا وأدوات أندرويد تعمل دون إنترنت. خمسة تطبيقات تنشرها GNeurone AI، بلا جمع للبيانات وبلا شراء داخل التطبيق.",
      ctaPrimary: "استكشف التطبيقات",
      ctaSecondary: "سياسات الخصوصية",
      statApps: "تطبيقات منشورة",
      statTrackers: "متتبّع أو إعلان",
      statOffline: "يُحسب دون إنترنت",
      chipCollect: "صفر جمع للبيانات",
      chipOffline: "يعمل دون شبكة",
    },
    marquee: [
      "دون إنترنت",
      "بلا إعلانات",
      "بلا حساب",
      "بلا شراء داخل التطبيق",
      "بلا متتبّعات",
      "من نشر GNeurone AI",
    ],
    catalogue: {
      eyebrow: "القائمة",
      title: "خمسة تطبيقات، وعد واحد",
      lede: "كل تطبيق منشور تحت حساب GNeurone AI ويعمل بالكامل على الجهاز، دون أي طلب شبكي.",
      cardLink: "الخصوصية",
    },
    principles: {
      eyebrow: "المبادئ",
      title: "ما لن تجده هنا",
      lede: "هذه القواعد ليست خيارات في الإعدادات: إنها مكتوبة في الشيفرة المنشورة على Google Play.",
      items: [
        {
          title: "لا بيانات شخصية",
          text: "لا يُرسَل أي شيء إلى GNeurone AI. يبقى التقدّم والتفضيلات في المساحة الخاصة بالتطبيق على هاتفك.",
        },
        {
          title: "لا إعلانات",
          text: "لا لافتات، ولا إعلانات بينية، ولا قراءة لمعرّف إعلاني، ولا حزمة تطوير إعلانية مدمجة.",
        },
        {
          title: "لا شراء داخل التطبيق",
          text: "كل الميزات متاحة دون دفع. لا اشتراك، ولا عملة افتراضية، ولا فتح مدفوع.",
        },
        {
          title: "كل شيء يُحسب دون إنترنت",
          text: "القبلة والمواقيت والشبكات والمراحل تُولَّد على الجهاز. تبقى التطبيقات صالحة للاستعمال في وضع الطيران.",
        },
      ],
    },
    contact: {
      title: "سؤال عن بياناتك؟",
      lede: "تجيب GNeurone AI مباشرة على العنوان المذكور في كل سياسة خصوصية.",
      button: "أرسل بريدًا إلكترونيًا",
    },
    footer: {
      rights: "© 2026 Haythem Studio · الناشر GNeurone AI",
      policies: "سياسات الخصوصية",
      updated: "آخر تحديث",
    },
    tags: {
      lifestyle: "أسلوب حياة",
      words: "كلمات",
      puzzle: "ألغاز",
      collection: "مجموعة",
      minimal: "بسيط",
    },
    apps: {
      qibla: {
        tagline: "القبلة ومواقيت الصلاة والتقويم الهجري",
        description:
          "اتجاه القبلة محسوب بالدائرة العظمى، ومواقيت الصلاة مستخرجة من موضع الشمس، مع تقويم هجري — كل ذلك دون أي طلب شبكي.",
      },
      motsmeles: {
        tagline: "لعبة بحث عن الكلمات",
        description: "شبكات بحث عن الكلمات مصمَّمة للحروف العربية، بستة مواضيع وشبكة جديدة تُولَّد في كل جولة.",
      },
      parking: {
        tagline: "لغز إخراج السيارات",
        description: "ستون مرحلة تم حلّها بالحاسوب قبل النشر: عدد النقلات الأمثل معروف لكل مرحلة.",
      },
      arcade: {
        tagline: "مجموعة من خمسة عشر لغزًا",
        description:
          "خمسة عشر لغزًا كلاسيكيًا في تطبيق واحد: ترتيب القوارير، 2048، لعبة التزحلق، أبراج هانوي، الأفعى وغيرها.",
      },
      oneline: {
        tagline: "لغز الرسم بخط واحد",
        description:
          "خمسة وأربعون شكلًا تُرسم بخط واحد متصل، جميعها مُتحقَّق من قابلية حلّها قبل النشر. بلا نصوص، وبلا حاجة إلى لغة.",
      },
    },
    privacy: {
      indexTitle: "سياسات الخصوصية — GNeurone AI",
      indexDescription: "سياسات الخصوصية لتطبيقات أندرويد التي تنشرها GNeurone AI على Google Play.",
      indexHeading: "سياسات الخصوصية — GNeurone AI",
      indexMeta1: "سياسات الخصوصية",
      indexMeta2: "تطبيقات أندرويد منشورة من GNeurone AI على Google Play",
      indexIntro:
        "لا يجمع أي من هذه التطبيقات بيانات شخصية، ولا ينشئ حسابًا، ولا يعرض إعلانات، ولا يقدّم شراءً داخل التطبيق. توضّح كل صفحة أدناه ما يُحفظ على الجهاز والأذونات المطلوبة.",
      tableApp: "التطبيق",
      tableId: "معرّف Play",
      backHome: "→ Haythem Studio",
      backPolicies: "→ كل السياسات",
      pageTitle: (name) => `سياسة الخصوصية — ${name}`,
      pageDescription: (name, pkg) => `سياسة الخصوصية لتطبيق ${name} (${pkg})، من نشر GNeurone AI.`,
      heading: "سياسة الخصوصية",
      publisherLine: "الناشر: GNeurone AI",
      updatedLine: "آخر تحديث",
      oneSentenceHeading: "في جملة واحدة",
      oneSentence: "لا يجمع هذا التطبيق أي بيانات شخصية، ولا ينشئ أي حساب، ولا يرسل شيئًا إلى أي خادم يخصّنا.",
      storedHeading: "ما يُحفظ على هاتفك",
      storedIntro: "يحفظ التطبيق محليًا، في مساحته الخاصة:",
      storedGame: [
        "تقدّمك (المراحل المحلولة، أفضل النتائج، سلسلة الأيام المتتالية)؛",
        "تفضيلاتك (اللغة، المظهر)؛",
        "رصيد التلميحات المحلي، إن وُجد.",
      ],
      storedQibla: [
        "تفضيلاتك (اللغة، طريقة حساب المواقيت)؛",
        "آخر موقع استُخدم للقبلة والمواقيت، على الجهاز فقط؛",
        "حالة تذكيرات الصلاة التي فعّلتها.",
      ],
      storedOutro: "لا تغادر هذه البيانات الجهاز أبدًا. وتختفي إذا أزلت التطبيق أو مسحت بياناته.",
      locationHeading: "الموقع الجغرافي",
      locationIntro:
        "يطلب هذا التطبيق الوصول إلى موقعك التقريبي أو الدقيق لغرض واحد فقط: حساب اتجاه القبلة ومواقيت الصلاة للمكان الذي توجد فيه. هذان الحسابان مستحيلان دون إحداثيات جغرافية.",
      locationBoxTitle: "ماذا يحدث لموقعك",
      locationBoxItems: [
        "يُستعمل <strong>على جهازك فقط</strong>، عبر حساب محلي (الدائرة العظمى للقبلة، وموضع الشمس للمواقيت).",
        "يُحفظ في الذاكرة المحلية للتطبيق حتى لا يُطلب منك في كل مرة تفتحه.",
        "<strong>لا يُرسل إلى أي خادم</strong>، لا إلى المطوّر ولا إلى طرف ثالث.",
        "لا يُربط بأي معرّف يمكن أن يميّزك.",
      ],
      locationOutro1:
        "لا يُطلب الإذن عند أول تشغيل، بل عندما يحتاجه التطبيق فعلًا. ويمكنك رفضه: يبقى التطبيق صالحًا للاستعمال، ويعمل التقويم الهجري والأسماء التسعة والتسعون دون موقع.",
      locationOutro2:
        "يمكنك سحب هذا الإذن في أي وقت من إعدادات أندرويد في هاتفك. ومسح بيانات التطبيق يحذف آخر موقع محفوظ.",
      notificationsHeading: "الإشعارات",
      notifications1:
        "إذا فعّلت تذكيرات الصلاة، يبرمج التطبيق إشعارات محلية في وقت كل صلاة. تُحسب هذه الإشعارات وتُعرض على جهازك فقط: لا يُتصل بأي خادم، ولا يُرسل أي محتوى إشعار إلى طرف ثالث.",
      notifications2: "يمكنك تعطيل هذه التذكيرات من تبويب الصلوات، أو سحب إذن الإشعارات من إعدادات أندرويد.",
      adsHeading: "الإعلانات",
      adsText:
        "لا يعرض هذا التطبيق أي إعلان ولا يدمج أي حزمة تطوير إعلانية. لا تُقرأ أي معرّفات إعلانية، ولا تتلقى أي شبكة إعلانات معلومات عنك.",
      purchasesHeading: "المشتريات داخل التطبيق",
      purchasesText: "لا يقدّم هذا التطبيق أي شراء داخلي ولا أي اشتراك. كل ميزاته متاحة دون دفع.",
      childrenHeading: "الأطفال",
      childrenText:
        "هذا التطبيق ليس موجّهًا في المقام الأول للأطفال دون الثالثة عشرة، ولا يجمع عن علم أي بيانات تخصّهم. إذا كنت تعتقد أن طفلًا أرسل إلينا بيانات، فراسلنا وسنحذفها.",
      permissionsHeading: "الأذونات المطلوبة",
      permissionCol: "الإذن",
      reasonCol: "السبب",
      noPermission: "لا يُطلب أي إذن حسّاس.",
      locationReason: "حساب اتجاه القبلة ومواقيت الصلاة لموقعك. الحساب محلي، ولا يُرسل الموقع أبدًا.",
      rightsHeading: "حقوقك",
      rights1:
        "بما أن الناشر لا يجمع أي بيانات شخصية، فلا يوجد لدينا ما يُطلع عليه أو يُصحَّح أو يُحذف. تبقى السيطرة الكاملة لك: مسح بيانات التطبيق من إعدادات أندرويد يحذف كل ما سجّله.",
      rights2:
        "إذا كنت تقيم في الاتحاد الأوروبي أو المملكة المتحدة أو كاليفورنيا أو كندا، فإن الحقوق التي يمنحها لك تشريعك المحلي تنطبق بالكامل. راسلنا لأي سؤال.",
      changesHeading: "التعديلات",
      changesText:
        "سيُنشر أي تعديل على هذه السياسة في هذه الصفحة مع تاريخ محدَّث. وسيُعلَن أي تغيير مهم في ملاحظات إصدار التطبيق.",
      contactHeading: "اتصل بنا",
      footerNote: (name) => `سياسة الخصوصية لتطبيق ${name}، من نشر GNeurone AI.`,
    },
  },

  /* ------------------------------------------------------------------ ES */
  es: {
    colon: ": ",
    updated: "27 de julio de 2026",
    home: {
      title: "Haythem Studio — Aplicaciones Android de GNeurone AI",
      description:
        "Cinco aplicaciones Android sin conexión publicadas por GNeurone AI: rompecabezas, sopa de letras y brújula Qibla. Sin anuncios, sin cuenta, sin compras integradas.",
      ogDescription: "Cinco aplicaciones Android sin conexión: sin anuncios, sin cuenta, sin compras integradas.",
    },
    nav: {
      apps: "Aplicaciones",
      principles: "Principios",
      privacy: "Privacidad",
      contact: "Contacto",
      theme: "Cambiar de tema",
      language: "Idioma",
    },
    hero: {
      badge: "Cinco aplicaciones en Google Play",
      line1: "Sin cuenta.",
      line2: "Sin anuncios.",
      line3: "Sin concesiones.",
      lede:
        "Haythem Studio crea juegos y utilidades Android que funcionan sin conexión. Cinco aplicaciones publicadas por GNeurone AI, sin recogida de datos ni compras integradas.",
      ctaPrimary: "Descubrir las aplicaciones",
      ctaSecondary: "Políticas de privacidad",
      statApps: "Aplicaciones publicadas",
      statTrackers: "Rastreadores o anuncios",
      statOffline: "Calculado sin conexión",
      chipCollect: "Cero recogida de datos",
      chipOffline: "Funciona sin red",
    },
    marquee: [
      "Sin conexión",
      "Sin publicidad",
      "Sin cuenta",
      "Sin compras integradas",
      "Sin rastreadores",
      "Publicado por GNeurone AI",
    ],
    catalogue: {
      eyebrow: "El catálogo",
      title: "Cinco aplicaciones, una misma promesa",
      lede:
        "Cada título se publica bajo la cuenta de GNeurone AI y funciona íntegramente en el dispositivo, sin ninguna petición de red.",
      cardLink: "Privacidad",
    },
    principles: {
      eyebrow: "Principios",
      title: "Lo que no encontrará aquí",
      lede:
        "Estas reglas no son opciones de configuración: están escritas en el código publicado en Google Play.",
      items: [
        {
          title: "Ningún dato personal",
          text:
            "No se envía nada a GNeurone AI. El progreso y las preferencias permanecen en el espacio privado de la aplicación, en su teléfono.",
        },
        {
          title: "Ninguna publicidad",
          text:
            "Sin banners, sin intersticiales, sin lectura de identificadores publicitarios y sin SDK de publicidad integrado.",
        },
        {
          title: "Ninguna compra integrada",
          text:
            "Todas las funciones están disponibles sin pagar. Sin suscripción, sin moneda virtual y sin desbloqueos de pago.",
        },
        {
          title: "Todo se calcula sin conexión",
          text:
            "Qibla, horarios, cuadrículas y niveles se generan en el dispositivo. Las aplicaciones siguen siendo utilizables en modo avión.",
        },
      ],
    },
    contact: {
      title: "¿Alguna pregunta sobre sus datos?",
      lede: "GNeurone AI responde directamente en la dirección declarada en cada política de privacidad.",
      button: "Enviar un correo",
    },
    footer: {
      rights: "© 2026 Haythem Studio · Editor GNeurone AI",
      policies: "Políticas de privacidad",
      updated: "Última actualización",
    },
    tags: {
      lifestyle: "Estilo de vida",
      words: "Palabras",
      puzzle: "Rompecabezas",
      collection: "Colección",
      minimal: "Minimalista",
    },
    apps: {
      qibla: {
        tagline: "Qibla, horarios de oración y calendario hégira",
        description:
          "Dirección de la Qibla calculada por círculo máximo, horarios de oración obtenidos de la posición del sol y calendario hégira, todo ello sin una sola petición de red.",
      },
      motsmeles: {
        tagline: "Juego de sopa de letras",
        description:
          "Cuadrículas de sopa de letras diseñadas para el alfabeto árabe, con seis temas y una cuadrícula generada en cada partida.",
      },
      parking: {
        tagline: "Rompecabezas de desbloqueo de vehículos",
        description:
          "Sesenta niveles de desbloqueo resueltos por ordenador antes de su publicación: el número óptimo de movimientos se conoce para cada uno.",
      },
      arcade: {
        tagline: "Colección de quince rompecabezas",
        description:
          "Quince rompecabezas clásicos reunidos en una sola aplicación: clasificación de frascos, 2048, puzle deslizante, Hanói, serpiente y más.",
      },
      oneline: {
        tagline: "Rompecabezas de trazo único",
        description:
          "Cuarenta y cinco figuras que se dibujan de un solo trazo, todas verificadas como resolubles antes de su publicación. Sin texto y sin idioma necesario.",
      },
    },
    privacy: {
      indexTitle: "Políticas de privacidad — GNeurone AI",
      indexDescription:
        "Políticas de privacidad de las aplicaciones Android publicadas por GNeurone AI en Google Play.",
      indexHeading: "Políticas de privacidad — GNeurone AI",
      indexMeta1: "Políticas de privacidad",
      indexMeta2: "Aplicaciones Android publicadas por GNeurone AI en Google Play",
      indexIntro:
        "Ninguna de estas aplicaciones recoge datos personales, crea una cuenta, muestra publicidad ni ofrece compras integradas. Cada página siguiente detalla lo que se guarda en el dispositivo y qué permisos se solicitan.",
      tableApp: "Aplicación",
      tableId: "Identificador de Play",
      backHome: "← Haythem Studio",
      backPolicies: "← Todas las políticas",
      pageTitle: (name) => `Política de privacidad — ${name}`,
      pageDescription: (name, pkg) =>
        `Política de privacidad de ${name} (${pkg}), publicada por GNeurone AI.`,
      heading: "Política de privacidad",
      publisherLine: "Editor: GNeurone AI",
      updatedLine: "Última actualización",
      oneSentenceHeading: "En una frase",
      oneSentence:
        "Esta aplicación no recoge ningún dato personal, no crea ninguna cuenta y no transmite nada a ningún servidor que nos pertenezca.",
      storedHeading: "Lo que se guarda en su teléfono",
      storedIntro: "La aplicación guarda localmente, en su espacio privado:",
      storedGame: [
        "su progreso (niveles resueltos, mejores puntuaciones, racha de días consecutivos);",
        "sus preferencias (idioma, tema);",
        "su saldo local de pistas, si procede.",
      ],
      storedQibla: [
        "sus preferencias (idioma, método de cálculo de los horarios);",
        "la última posición utilizada para la Qibla y los horarios, únicamente en el dispositivo;",
        "el estado de los recordatorios de oración que haya activado.",
      ],
      storedOutro:
        "Estos datos nunca salen del dispositivo. Desaparecen si desinstala la aplicación o borra sus datos.",
      locationHeading: "Ubicación",
      locationIntro:
        "Esta aplicación solicita acceso a su ubicación aproximada o precisa con un único fin: calcular la dirección de la Qibla y los horarios de oración para el lugar en el que se encuentra. Ambos cálculos son imposibles sin coordenadas geográficas.",
      locationBoxTitle: "Qué se hace con su ubicación",
      locationBoxItems: [
        "Se utiliza <strong>únicamente en su dispositivo</strong>, mediante un cálculo local (círculo máximo para la Qibla, posición del sol para los horarios).",
        "Se conserva en la memoria local de la aplicación para no tener que pedirla cada vez que la abre.",
        "<strong>No se transmite a ningún servidor</strong>, ni al desarrollador ni a terceros.",
        "No se asocia a ningún identificador que permita reconocerle.",
      ],
      locationOutro1:
        "El permiso no se solicita en el primer inicio, sino cuando la aplicación lo necesita realmente. Puede rechazarlo: la aplicación sigue siendo utilizable, el calendario hégira y los 99 nombres funcionan sin ubicación.",
      locationOutro2:
        "Puede revocar este permiso en cualquier momento en los ajustes de Android de su teléfono. Borrar los datos de la aplicación elimina la última posición memorizada.",
      notificationsHeading: "Notificaciones",
      notifications1:
        "Si activa los recordatorios de oración, la aplicación programa notificaciones locales a la hora de cada oración. Estas notificaciones se calculan y se muestran únicamente en su dispositivo: no se contacta con ningún servidor y no se transmite ningún contenido a terceros.",
      notifications2:
        "Puede desactivar estos recordatorios en la pestaña Oraciones, o revocar el permiso de notificación en los ajustes de Android.",
      adsHeading: "Publicidad",
      adsText:
        "Esta aplicación no muestra publicidad y no integra ningún SDK publicitario. No se lee ningún identificador publicitario y ninguna red publicitaria recibe información sobre usted.",
      purchasesHeading: "Compras integradas",
      purchasesText:
        "Esta aplicación no ofrece ninguna compra integrada ni suscripción. Todas sus funciones están disponibles sin pagar.",
      childrenHeading: "Menores",
      childrenText:
        "Esta aplicación no está dirigida principalmente a menores de trece años y no recoge conscientemente ningún dato sobre ellos. Si cree que un menor nos ha enviado datos, escríbanos y los eliminaremos.",
      permissionsHeading: "Permisos solicitados",
      permissionCol: "Permiso",
      reasonCol: "Por qué",
      noPermission: "No se solicita ningún permiso sensible.",
      locationReason:
        "Calcular la dirección de la Qibla y los horarios de oración para su posición. El cálculo es local y la posición nunca se transmite.",
      rightsHeading: "Sus derechos",
      rights1:
        "Puesto que el editor no recoge ningún dato personal, no hay nada que consultar, corregir o eliminar por nuestra parte. Usted conserva el control total: borrar los datos de la aplicación desde los ajustes de Android elimina todo lo que haya guardado.",
      rights2:
        "Si reside en la Unión Europea, el Reino Unido, California o Canadá, los derechos que le otorga su legislación local se aplican plenamente. Escríbanos para cualquier consulta.",
      changesHeading: "Modificaciones",
      changesText:
        "Cualquier modificación de esta política se publicará en esta página, con una fecha de actualización. Un cambio importante se anunciará en las notas de versión de la aplicación.",
      contactHeading: "Contacto",
      footerNote: (name) => `Política de privacidad de ${name}, publicada por GNeurone AI.`,
    },
  },

  /* ------------------------------------------------------------------ PT */
  pt: {
    colon: ": ",
    updated: "27 de julho de 2026",
    home: {
      title: "Haythem Studio — Aplicações Android da GNeurone AI",
      description:
        "Cinco aplicações Android offline publicadas pela GNeurone AI: quebra-cabeças, caça-palavras e bússola Qibla. Sem anúncios, sem conta, sem compras no aplicativo.",
      ogDescription: "Cinco aplicações Android offline: sem anúncios, sem conta, sem compras no aplicativo.",
    },
    nav: {
      apps: "Aplicações",
      principles: "Princípios",
      privacy: "Privacidade",
      contact: "Contacto",
      theme: "Mudar de tema",
      language: "Idioma",
    },
    hero: {
      badge: "Cinco aplicações no Google Play",
      line1: "Sem conta.",
      line2: "Sem anúncios.",
      line3: "Sem concessões.",
      lede:
        "A Haythem Studio cria jogos e utilitários Android que funcionam offline. Cinco aplicações publicadas pela GNeurone AI, sem recolha de dados nem compras no aplicativo.",
      ctaPrimary: "Descobrir as aplicações",
      ctaSecondary: "Políticas de privacidade",
      statApps: "Aplicações publicadas",
      statTrackers: "Rastreadores ou anúncios",
      statOffline: "Calculado offline",
      chipCollect: "Zero recolha de dados",
      chipOffline: "Funciona sem rede",
    },
    marquee: [
      "Offline",
      "Sem publicidade",
      "Sem conta",
      "Sem compras no aplicativo",
      "Sem rastreadores",
      "Publicado pela GNeurone AI",
    ],
    catalogue: {
      eyebrow: "O catálogo",
      title: "Cinco aplicações, uma mesma promessa",
      lede:
        "Cada título é publicado sob a conta da GNeurone AI e funciona inteiramente no aparelho, sem qualquer pedido de rede.",
      cardLink: "Privacidade",
    },
    principles: {
      eyebrow: "Princípios",
      title: "O que não vai encontrar aqui",
      lede: "Estas regras não são opções de configuração: estão escritas no código publicado no Google Play.",
      items: [
        {
          title: "Nenhum dado pessoal",
          text:
            "Nada é enviado à GNeurone AI. O progresso e as preferências ficam no espaço privado da aplicação, no seu telemóvel.",
        },
        {
          title: "Nenhuma publicidade",
          text:
            "Sem banners, sem intersticiais, sem leitura de identificador publicitário e sem SDK de publicidade integrado.",
        },
        {
          title: "Nenhuma compra no aplicativo",
          text:
            "Todas as funcionalidades estão disponíveis sem pagar. Sem subscrição, sem moeda virtual e sem desbloqueio pago.",
        },
        {
          title: "Tudo é calculado offline",
          text:
            "Qibla, horários, grelhas e níveis são gerados no aparelho. As aplicações continuam utilizáveis em modo de voo.",
        },
      ],
    },
    contact: {
      title: "Alguma questão sobre os seus dados?",
      lede: "A GNeurone AI responde diretamente no endereço indicado em cada política de privacidade.",
      button: "Enviar um e-mail",
    },
    footer: {
      rights: "© 2026 Haythem Studio · Editora GNeurone AI",
      policies: "Políticas de privacidade",
      updated: "Última atualização",
    },
    tags: {
      lifestyle: "Estilo de vida",
      words: "Palavras",
      puzzle: "Quebra-cabeças",
      collection: "Coleção",
      minimal: "Minimalista",
    },
    apps: {
      qibla: {
        tagline: "Qibla, horários de oração e calendário hégira",
        description:
          "Direção da Qibla calculada pelo círculo máximo, horários de oração obtidos a partir da posição do sol e calendário hégira — tudo isto sem um único pedido de rede.",
      },
      motsmeles: {
        tagline: "Jogo de caça-palavras",
        description:
          "Grelhas de caça-palavras concebidas para o alfabeto árabe, com seis temas e uma grelha gerada em cada partida.",
      },
      parking: {
        tagline: "Quebra-cabeças de desbloqueio de veículos",
        description:
          "Sessenta níveis de desbloqueio resolvidos por computador antes da publicação: o número ótimo de movimentos é conhecido para cada um.",
      },
      arcade: {
        tagline: "Coleção de quinze quebra-cabeças",
        description:
          "Quinze quebra-cabeças clássicos reunidos numa única aplicação: separação de frascos, 2048, jogo deslizante, Hanói, cobra e muito mais.",
      },
      oneline: {
        tagline: "Quebra-cabeças de traço único",
        description:
          "Quarenta e cinco figuras para desenhar num só traço, todas verificadas como solucionáveis antes da publicação. Sem texto e sem necessidade de idioma.",
      },
    },
    privacy: {
      indexTitle: "Políticas de privacidade — GNeurone AI",
      indexDescription:
        "Políticas de privacidade das aplicações Android publicadas pela GNeurone AI no Google Play.",
      indexHeading: "Políticas de privacidade — GNeurone AI",
      indexMeta1: "Políticas de privacidade",
      indexMeta2: "Aplicações Android publicadas pela GNeurone AI no Google Play",
      indexIntro:
        "Nenhuma destas aplicações recolhe dados pessoais, cria uma conta, mostra publicidade ou oferece compras no aplicativo. Cada página abaixo detalha o que é guardado no aparelho e que permissões são pedidas.",
      tableApp: "Aplicação",
      tableId: "Identificador Play",
      backHome: "← Haythem Studio",
      backPolicies: "← Todas as políticas",
      pageTitle: (name) => `Política de privacidade — ${name}`,
      pageDescription: (name, pkg) =>
        `Política de privacidade de ${name} (${pkg}), publicada pela GNeurone AI.`,
      heading: "Política de privacidade",
      publisherLine: "Editora: GNeurone AI",
      updatedLine: "Última atualização",
      oneSentenceHeading: "Numa frase",
      oneSentence:
        "Esta aplicação não recolhe qualquer dado pessoal, não cria qualquer conta e não transmite nada para um servidor que nos pertença.",
      storedHeading: "O que é guardado no seu telemóvel",
      storedIntro: "A aplicação guarda localmente, no seu espaço privado:",
      storedGame: [
        "o seu progresso (níveis resolvidos, melhores pontuações, sequência de dias consecutivos);",
        "as suas preferências (idioma, tema);",
        "o seu saldo local de dicas, se aplicável.",
      ],
      storedQibla: [
        "as suas preferências (idioma, método de cálculo dos horários);",
        "a última posição utilizada para a Qibla e os horários, apenas no aparelho;",
        "o estado dos lembretes de oração que ativou.",
      ],
      storedOutro:
        "Estes dados nunca saem do aparelho. Desaparecem se desinstalar a aplicação ou apagar os seus dados.",
      locationHeading: "Localização",
      locationIntro:
        "Esta aplicação pede acesso à sua posição aproximada ou precisa com um único objetivo: calcular a direção da Qibla e os horários de oração para o local onde se encontra. Ambos os cálculos são impossíveis sem coordenadas geográficas.",
      locationBoxTitle: "O que é feito com a sua posição",
      locationBoxItems: [
        "É utilizada <strong>apenas no seu aparelho</strong>, através de um cálculo local (círculo máximo para a Qibla, posição do sol para os horários).",
        "É conservada na memória local da aplicação para não ter de ser pedida sempre que a abre.",
        "<strong>Não é transmitida a qualquer servidor</strong>, nem ao programador nem a terceiros.",
        "Não é associada a qualquer identificador que permita reconhecê-lo.",
      ],
      locationOutro1:
        "A permissão não é pedida no primeiro arranque, mas quando a aplicação realmente precisa dela. Pode recusá-la: a aplicação continua utilizável, o calendário hégira e os 99 nomes funcionam sem posição.",
      locationOutro2:
        "Pode revogar esta permissão a qualquer momento nas definições Android do seu telemóvel. Apagar os dados da aplicação remove a última posição memorizada.",
      notificationsHeading: "Notificações",
      notifications1:
        "Se ativar os lembretes de oração, a aplicação programa notificações locais à hora de cada oração. Estas notificações são calculadas e apresentadas apenas no seu aparelho: nenhum servidor é contactado e nenhum conteúdo é transmitido a terceiros.",
      notifications2:
        "Pode desativar estes lembretes no separador Orações, ou revogar a permissão de notificação nas definições Android.",
      adsHeading: "Publicidade",
      adsText:
        "Esta aplicação não mostra qualquer publicidade e não integra qualquer SDK publicitário. Nenhum identificador publicitário é lido e nenhuma rede de anúncios recebe informação sobre si.",
      purchasesHeading: "Compras no aplicativo",
      purchasesText:
        "Esta aplicação não oferece qualquer compra no aplicativo nem subscrição. Todas as suas funcionalidades estão disponíveis sem pagar.",
      childrenHeading: "Crianças",
      childrenText:
        "Esta aplicação não se destina prioritariamente a crianças com menos de treze anos e não recolhe conscientemente quaisquer dados a seu respeito. Se acredita que uma criança nos enviou dados, escreva-nos e iremos apagá-los.",
      permissionsHeading: "Permissões pedidas",
      permissionCol: "Permissão",
      reasonCol: "Porquê",
      noPermission: "Não é pedida qualquer permissão sensível.",
      locationReason:
        "Calcular a direção da Qibla e os horários de oração para a sua posição. O cálculo é local e a posição nunca é transmitida.",
      rightsHeading: "Os seus direitos",
      rights1:
        "Uma vez que a editora não recolhe qualquer dado pessoal, não há nada para consultar, corrigir ou apagar do nosso lado. Mantém o controlo total: apagar os dados da aplicação nas definições Android remove tudo o que foi registado.",
      rights2:
        "Se reside na União Europeia, no Reino Unido, na Califórnia ou no Canadá, os direitos conferidos pela sua legislação local aplicam-se plenamente. Escreva-nos para qualquer questão.",
      changesHeading: "Alterações",
      changesText:
        "Qualquer alteração a esta política será publicada nesta página, com uma data de atualização. Uma alteração importante será anunciada nas notas de versão da aplicação.",
      contactHeading: "Contacte-nos",
      footerNote: (name) => `Política de privacidade de ${name}, publicada pela GNeurone AI.`,
    },
  },
};
