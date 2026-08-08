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
      title: "Haythem Studio — Android games and tools that work offline",
      description:
        "Android games and tools by GNeurone AI: a parking puzzle, one-line drawing, arcade classics, an Arabic word search, a Qibla compass and more. They open in a second and keep working without a signal.",
      ogDescription: "Android apps that open in a second and keep working without a signal.",
    },
    nav: {
      apps: "Applications",
      principles: "Principles",
      privacy: "Privacy",
      contact: "Contact",
      theme: "Switch theme",
      language: "Language",
      menu: "Menu",
      menuClose: "Close the menu",
    },
    hero: {
      badge: "Live on Google Play",
      line1: "Games that",
      line2: "just work,",
      line3: "even offline.",
      lede:
        "Haythem Studio makes Android apps that open in a second and keep going without a signal. Puzzle games and everyday tools, published by GNeurone AI and fully unlocked from the first launch.",
      ctaPrimary: "Browse the apps",
      ctaSecondary: "Our privacy promise",
      statApps: "Apps on Google Play",
      statLevels: "Levels and puzzles",
      statOffline: "Computed on your phone",
      chipCollect: "Your data stays here",
      chipOffline: "Plays in airplane mode",
    },
    marquee: [
      "Opens instantly",
      "Plays offline",
      "Private by design",
      "Fully unlocked",
      "Arabic · French · English",
      "Published by GNeurone AI",
    ],
    catalogue: {
      eyebrow: "The catalogue",
      title: "Pick your next puzzle",
      lede:
        "Games and everyday companions, and the list keeps growing. Each one is published under the GNeurone AI account and runs entirely on your device.",
      cardLink: "Privacy",
    },
    principles: {
      eyebrow: "How they are built",
      title: "Made to stay on your phone",
      lede:
        "Commitments written into the code shipped on Google Play, not options buried in a settings screen.",
      items: [
        {
          title: "Everything stays with you",
          text:
            "Scores, settings and progress live in the private storage of the app. Nothing travels to GNeurone AI, so there is nothing to leak.",
        },
        {
          title: "Straight into the game",
          text:
            "Tap the icon and you are playing. Nothing interrupts a level, nothing loads between you and the next move.",
        },
        {
          title: "The whole app, right away",
          text:
            "Every level, every theme and every feature is unlocked from the first launch, on every device you install it on.",
        },
        {
          title: "Works in airplane mode",
          text:
            "Qibla direction, prayer times, grids and levels are computed on the device. A plane, a metro or a dead zone changes nothing.",
        },
      ],
    },
    contact: {
      title: "Talk to the studio",
      lede: "Bug reports, ideas and questions go straight to GNeurone AI, at the address published on every privacy policy.",
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
          "Point your phone and find the Qibla, computed along the great circle. Prayer times follow the sun at your exact position, and the Hijri calendar comes along — in the desert as on a plane.",
      },
      motsmeles: {
        tagline: "Word search game",
        description:
          "Word search grids built for the Arabic alphabet, with six themes and a brand-new grid every single game. You will never play the same board twice.",
      },
      parking: {
        tagline: "Vehicle unblocking puzzle",
        description:
          "Sixty levels of gridlock to untangle. Each one was solved by computer before shipping, so the optimal move count is known — beat it if you can.",
      },
      arcade: {
        tagline: "Collection of fifteen puzzles",
        description:
          "Fifteen classics in one app: bottle sort, 2048, sliding puzzle, Hanoi, snake and ten more. One icon on your home screen, an evening of games behind it.",
      },
      oneline: {
        tagline: "One-stroke drawing puzzle",
        description:
          "Forty-five shapes to draw without lifting your finger, each verified as solvable before publication. Not a word of text, so it plays in any language.",
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
      permissionReasons: {
        ACCESS_COARSE_LOCATION:
          "Compute the Qibla direction and the prayer times for your location. The calculation is local; the position is never transmitted.",
        ACCESS_FINE_LOCATION:
          "Compute the Qibla direction and the prayer times for your location. The calculation is local; the position is never transmitted.",
        POST_NOTIFICATIONS:
          "Display the prayer reminders you have enabled. The notification is built on the device; no server is contacted.",
        SCHEDULE_EXACT_ALARM:
          "Fire the reminder at the exact prayer time. Android only guarantees the minute with this permission; without it the reminder still arrives, but late.",
        RECEIVE_BOOT_COMPLETED:
          "Reprogram the reminders after the phone restarts. Android erases pending alarms on shutdown; without this they would silently stop.",
        VIBRATE:
          "Vibrate the phone at prayer time, if you chose that alert mode rather than sound.",
      },
      rightsHeading: "Your rights",
      rights1:
        "Since no personal data is collected by the publisher, there is nothing to consult, correct or delete on our side. You keep full control: clearing the data of the application in the Android settings removes everything it has stored.",
      rights2:
        "If you live in the European Union, the United Kingdom, California or Canada, the rights granted by your local legislation apply in full. Write to us with any question.",
      changesHeading: "Changes",
      changesText:
        "Any change to this policy will be published on this page, with an updated date. A significant change will be announced in the release notes of the application.",
      siteHeading: "About this website",
      siteText:
        "This website counts its page views with the tool built into our host, Vercel Web Analytics. No cookie, no persistent identifier, no advertising network. It tells us which pages are read, nothing about who reads them. The applications listed above are not concerned: they send nothing, to anyone.",
      contactHeading: "Contact us",
      footerNote: (name) => `Privacy policy of ${name}, published by GNeurone AI.`,
    },
  },

  /* ------------------------------------------------------------------ FR */
  fr: {
    colon: " : ",
    updated: "27 juillet 2026",
    home: {
      title: "Haythem Studio — Des jeux et outils Android qui marchent hors ligne",
      description:
        "Jeux et outils Android édités par GNeurone AI : casse-tête de parking, tracé en un trait, classiques d’arcade, mots mêlés arabes, boussole Qibla et d’autres encore. Ils s’ouvrent en une seconde et continuent sans réseau.",
      ogDescription: "Des applications Android qui s’ouvrent en une seconde et continuent sans réseau.",
    },
    nav: {
      apps: "Applications",
      principles: "Principes",
      privacy: "Confidentialité",
      contact: "Contact",
      theme: "Changer de thème",
      language: "Langue",
      menu: "Menu",
      menuClose: "Fermer le menu",
    },
    hero: {
      badge: "En ligne sur Google Play",
      line1: "Des jeux qui",
      line2: "fonctionnent",
      line3: "hors ligne.",
      lede:
        "Haythem Studio conçoit des applications Android qui s’ouvrent en une seconde et continuent sans réseau. Des casse-têtes et des outils du quotidien, édités par GNeurone AI et débloqués dès le premier lancement.",
      ctaPrimary: "Voir les applications",
      ctaSecondary: "Notre engagement",
      statApps: "Applications sur Google Play",
      statLevels: "Niveaux et casse-têtes",
      statOffline: "Calculé sur votre téléphone",
      chipCollect: "Vos données restent ici",
      chipOffline: "Jouable en mode avion",
    },
    marquee: [
      "Ouverture immédiate",
      "Jouable hors ligne",
      "Privé par conception",
      "Entièrement débloqué",
      "Arabe · Français · Anglais",
      "Édité par GNeurone AI",
    ],
    catalogue: {
      eyebrow: "Le catalogue",
      title: "Choisissez votre prochain casse-tête",
      lede:
        "Des jeux et des compagnons du quotidien, et la liste s’allonge. Chacun est publié sous le compte GNeurone AI et tourne intégralement sur votre appareil.",
      cardLink: "Confidentialité",
    },
    principles: {
      eyebrow: "Comment elles sont faites",
      title: "Conçues pour rester sur votre téléphone",
      lede:
        "Des engagements inscrits dans le code livré sur Google Play, et non des options enfouies dans un écran de réglages.",
      items: [
        {
          title: "Tout reste chez vous",
          text:
            "Scores, réglages et progression vivent dans l’espace privé de l’application. Rien ne part vers GNeurone AI, donc il n’y a rien à faire fuiter.",
        },
        {
          title: "Directement dans le jeu",
          text:
            "Vous touchez l’icône, vous jouez. Rien n’interrompt un niveau, rien ne se charge entre vous et le coup suivant.",
        },
        {
          title: "L’application entière, tout de suite",
          text:
            "Chaque niveau, chaque thème et chaque fonction est débloqué dès le premier lancement, sur tous vos appareils.",
        },
        {
          title: "Fonctionne en mode avion",
          text:
            "Direction de la Qibla, horaires, grilles et niveaux sont calculés sur l’appareil. Un avion, un métro ou une zone blanche n’y change rien.",
        },
      ],
    },
    contact: {
      title: "Écrire au studio",
      lede: "Signalements, idées et questions arrivent directement chez GNeurone AI, à l’adresse publiée sur chaque politique de confidentialité.",
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
          "Orientez le téléphone et trouvez la Qibla, calculée par orthodromie. Les horaires suivent le soleil à votre position exacte, avec le calendrier hégirien — dans le désert comme en avion.",
      },
      motsmeles: {
        tagline: "Jeu de mots mêlés",
        description:
          "Des grilles pensées pour l’alphabet arabe, six thèmes et une grille inédite à chaque partie. Vous ne rejouerez jamais deux fois la même.",
      },
      parking: {
        tagline: "Casse-tête de déblocage de véhicules",
        description:
          "Soixante embouteillages à démêler. Chacun a été résolu par ordinateur avant publication : le nombre de coups optimal est connu, à vous de l’égaler.",
      },
      arcade: {
        tagline: "Collection de quinze casse-têtes",
        description:
          "Quinze classiques dans une seule application : tri de flacons, 2048, taquin, Hanoï, serpent et dix autres. Une icône sur l’écran d’accueil, une soirée de jeu derrière.",
      },
      oneline: {
        tagline: "Puzzle de tracé en un seul trait",
        description:
          "Quarante-cinq figures à tracer sans lever le doigt, toutes vérifiées comme résolubles avant publication. Pas un mot de texte, donc jouable dans toutes les langues.",
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
      permissionReasons: {
        ACCESS_COARSE_LOCATION:
          "Calculer la direction de la Qibla et les horaires de prière pour votre position. Le calcul est local, la position n’est jamais transmise.",
        ACCESS_FINE_LOCATION:
          "Calculer la direction de la Qibla et les horaires de prière pour votre position. Le calcul est local, la position n’est jamais transmise.",
        POST_NOTIFICATIONS:
          "Afficher les rappels de prière que vous avez activés. La notification est construite sur l’appareil, aucun serveur n’est contacté.",
        SCHEDULE_EXACT_ALARM:
          "Déclencher le rappel à l’heure exacte de la prière. Android ne garantit la minute qu’avec cette autorisation ; sans elle le rappel arrive quand même, mais en retard.",
        RECEIVE_BOOT_COMPLETED:
          "Reprogrammer les rappels après le redémarrage du téléphone. Android efface les alarmes en attente à l’extinction ; sans cela, elles cesseraient en silence.",
        VIBRATE:
          "Faire vibrer le téléphone à l’heure de la prière, si vous avez choisi ce mode d’alerte plutôt que le son.",
      },
      rightsHeading: "Vos droits",
      rights1:
        "Puisque aucune donnée personnelle n’est collectée par l’éditeur, il n’y a rien à consulter, corriger ou effacer de notre côté. Vous gardez le contrôle total : effacer les données de l’application depuis les réglages Android supprime tout ce qu’elle a enregistré.",
      rights2:
        "Si vous résidez dans l’Union européenne, au Royaume-Uni, en Californie ou au Canada, les droits que vous confère votre législation locale s’appliquent pleinement. Écrivez-nous pour toute question.",
      changesHeading: "Modifications",
      changesText:
        "Toute modification de cette politique sera publiée sur cette page, avec une date de mise à jour actualisée. Un changement important sera annoncé dans les notes de version de l’application.",
      siteHeading: "À propos de ce site",
      siteText:
        "Ce site compte ses pages vues avec l’outil intégré à notre hébergeur, Vercel Web Analytics. Aucun cookie, aucun identifiant persistant, aucune régie publicitaire. Nous savons quelles pages sont lues, rien sur les personnes qui les lisent. Les applications listées ci-dessus ne sont pas concernées : elles n’envoient rien, à personne.",
      contactHeading: "Nous contacter",
      footerNote: (name) => `Politique de confidentialité de ${name}, éditée par GNeurone AI.`,
    },
  },

  /* ------------------------------------------------------------------ AR */
  ar: {
    colon: ": ",
    updated: "٢٧ يوليو ٢٠٢٦",
    home: {
      title: "Haythem Studio — ألعاب وأدوات أندرويد تعمل دون إنترنت",
      description:
        "ألعاب وأدوات أندرويد من GNeurone AI: لغز مواقف السيارات، الرسم بخط واحد، كلاسيكيات الأركيد، بحث عن الكلمات بالعربية، بوصلة القبلة وغيرها. تفتح في ثانية وتواصل العمل دون شبكة.",
      ogDescription: "تطبيقات أندرويد تفتح في ثانية وتواصل العمل دون شبكة.",
    },
    nav: {
      apps: "التطبيقات",
      principles: "المبادئ",
      privacy: "الخصوصية",
      contact: "اتصل بنا",
      theme: "تغيير المظهر",
      language: "اللغة",
      menu: "القائمة",
      menuClose: "إغلاق القائمة",
    },
    hero: {
      badge: "متاحة على Google Play",
      line1: "ألعاب وأدوات",
      line2: "تعمل ببساطة،",
      line3: "حتى دون إنترنت.",
      lede:
        "يصنع Haythem Studio تطبيقات أندرويد تفتح في ثانية وتواصل العمل دون شبكة. ألعاب ألغاز وأدوات يومية، تنشرها GNeurone AI ومفتوحة بالكامل منذ التشغيل الأول.",
      ctaPrimary: "تصفّح التطبيقات",
      ctaSecondary: "التزامنا بالخصوصية",
      statApps: "تطبيقات على Google Play",
      statLevels: "مرحلة ولغز",
      statOffline: "يُحسب على هاتفك",
      chipCollect: "بياناتك تبقى هنا",
      chipOffline: "يعمل في وضع الطيران",
    },
    marquee: [
      "يفتح فورًا",
      "يعمل دون إنترنت",
      "خاص بالتصميم",
      "مفتوح بالكامل",
      "العربية · الفرنسية · الإنجليزية",
      "من نشر GNeurone AI",
    ],
    catalogue: {
      eyebrow: "القائمة",
      title: "اختر لغزك التالي",
      lede: "ألعاب ورفاق للاستعمال اليومي، والقائمة تطول. كلها منشورة تحت حساب GNeurone AI وتعمل بالكامل على جهازك.",
      cardLink: "الخصوصية",
    },
    principles: {
      eyebrow: "كيف صُنعت",
      title: "مصمَّمة لتبقى على هاتفك",
      lede: "التزامات مكتوبة في الشيفرة المنشورة على Google Play، لا خيارات مدفونة في شاشة إعدادات.",
      items: [
        {
          title: "كل شيء يبقى عندك",
          text: "النتائج والإعدادات والتقدّم تعيش في المساحة الخاصة بالتطبيق. لا شيء يذهب إلى GNeurone AI، فلا شيء هناك ليُسرَّب.",
        },
        {
          title: "مباشرة إلى اللعب",
          text: "تلمس الأيقونة فتجد نفسك تلعب. لا شيء يقطع المرحلة، ولا شيء يُحمَّل بينك وبين النقلة التالية.",
        },
        {
          title: "التطبيق كاملًا، فورًا",
          text: "كل مرحلة وكل موضوع وكل ميزة مفتوحة منذ التشغيل الأول، على كل جهاز تثبّته عليه.",
        },
        {
          title: "يعمل في وضع الطيران",
          text: "اتجاه القبلة والمواقيت والشبكات والمراحل تُحسب على الجهاز. الطائرة أو المترو أو انقطاع التغطية لا يغيّر شيئًا.",
        },
      ],
    },
    contact: {
      title: "راسل الاستوديو",
      lede: "البلاغات والأفكار والأسئلة تصل مباشرة إلى GNeurone AI، على العنوان المنشور في كل سياسة خصوصية.",
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
          "وجّه هاتفك فتجد القبلة، محسوبة بالدائرة العظمى. المواقيت تتبع الشمس في موقعك بالضبط، ومعها التقويم الهجري — في الصحراء كما في الطائرة.",
      },
      motsmeles: {
        tagline: "لعبة بحث عن الكلمات",
        description: "شبكات مبنية للحروف العربية، بستة مواضيع وشبكة جديدة تمامًا في كل جولة. لن تلعب الشبكة نفسها مرتين.",
      },
      parking: {
        tagline: "لغز إخراج السيارات",
        description: "ستون ازدحامًا لتفكّه. كل مرحلة حُلَّت بالحاسوب قبل النشر، فعدد النقلات الأمثل معروف — حاول أن تبلغه.",
      },
      arcade: {
        tagline: "مجموعة من خمسة عشر لغزًا",
        description:
          "خمسة عشر كلاسيكيًا في تطبيق واحد: ترتيب القوارير، 2048، لعبة التزحلق، أبراج هانوي، الأفعى وعشرة غيرها. أيقونة واحدة على شاشتك، وسهرة كاملة خلفها.",
      },
      oneline: {
        tagline: "لغز الرسم بخط واحد",
        description:
          "خمسة وأربعون شكلًا تُرسم دون رفع إصبعك، جميعها مُتحقَّق من قابلية حلّها قبل النشر. بلا كلمة نص واحدة، فهي تُلعب بأي لغة.",
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
      permissionReasons: {
        ACCESS_COARSE_LOCATION: "حساب اتجاه القبلة ومواقيت الصلاة لموقعك. الحساب محلي، ولا يُرسل الموقع أبدًا.",
        ACCESS_FINE_LOCATION: "حساب اتجاه القبلة ومواقيت الصلاة لموقعك. الحساب محلي، ولا يُرسل الموقع أبدًا.",
        POST_NOTIFICATIONS:
          "عرض تنبيهات الصلاة التي فعّلتها. يُبنى التنبيه على الجهاز نفسه، ولا يُتصل بأي خادم.",
        SCHEDULE_EXACT_ALARM:
          "إطلاق التنبيه في وقت الصلاة بالضبط. لا يضمن أندرويد الدقيقة إلا بهذا الإذن؛ وبدونه يصل التنبيه لكن متأخرًا.",
        RECEIVE_BOOT_COMPLETED:
          "إعادة ضبط التنبيهات بعد إعادة تشغيل الهاتف. يمحو أندرويد المنبّهات المعلّقة عند الإطفاء، ولولا ذلك لتوقفت بصمت.",
        VIBRATE: "اهتزاز الهاتف عند وقت الصلاة، إن اخترت هذا النمط بدل الصوت.",
      },
      rightsHeading: "حقوقك",
      rights1:
        "بما أن الناشر لا يجمع أي بيانات شخصية، فلا يوجد لدينا ما يُطلع عليه أو يُصحَّح أو يُحذف. تبقى السيطرة الكاملة لك: مسح بيانات التطبيق من إعدادات أندرويد يحذف كل ما سجّله.",
      rights2:
        "إذا كنت تقيم في الاتحاد الأوروبي أو المملكة المتحدة أو كاليفورنيا أو كندا، فإن الحقوق التي يمنحها لك تشريعك المحلي تنطبق بالكامل. راسلنا لأي سؤال.",
      changesHeading: "التعديلات",
      changesText:
        "سيُنشر أي تعديل على هذه السياسة في هذه الصفحة مع تاريخ محدَّث. وسيُعلَن أي تغيير مهم في ملاحظات إصدار التطبيق.",
      siteHeading: "عن هذا الموقع",
      siteText:
        "يحصي هذا الموقع صفحاته المشاهَدة بأداة Vercel Web Analytics المدمجة في خدمة الاستضافة. لا ملفات تعريف ارتباط، ولا معرّف دائم، ولا شبكة إعلانات. نعرف أي الصفحات تُقرأ، ولا نعرف شيئًا عمّن يقرؤها. أما التطبيقات المذكورة أعلاه فغير معنية: فهي لا ترسل شيئًا إلى أي جهة.",
      contactHeading: "اتصل بنا",
      footerNote: (name) => `سياسة الخصوصية لتطبيق ${name}، من نشر GNeurone AI.`,
    },
  },

  /* ------------------------------------------------------------------ ES */
  es: {
    colon: ": ",
    updated: "27 de julio de 2026",
    home: {
      title: "Haythem Studio — Juegos y utilidades Android que funcionan sin conexión",
      description:
        "Juegos y utilidades Android de GNeurone AI: rompecabezas de aparcamiento, trazo único, clásicos de arcade, sopa de letras en árabe, brújula Qibla y más. Se abren en un segundo y siguen funcionando sin cobertura.",
      ogDescription: "Aplicaciones Android que se abren en un segundo y siguen funcionando sin cobertura.",
    },
    nav: {
      apps: "Aplicaciones",
      principles: "Principios",
      privacy: "Privacidad",
      contact: "Contacto",
      theme: "Cambiar de tema",
      language: "Idioma",
      menu: "Menú",
      menuClose: "Cerrar el menú",
    },
    hero: {
      badge: "Disponibles en Google Play",
      line1: "Juegos que",
      line2: "funcionan",
      line3: "sin conexión.",
      lede:
        "Haythem Studio crea aplicaciones Android que se abren en un segundo y siguen funcionando sin cobertura. Rompecabezas y utilidades del día a día, publicados por GNeurone AI y desbloqueados desde el primer arranque.",
      ctaPrimary: "Ver las aplicaciones",
      ctaSecondary: "Nuestro compromiso",
      statApps: "Aplicaciones en Google Play",
      statLevels: "Niveles y rompecabezas",
      statOffline: "Calculado en su teléfono",
      chipCollect: "Sus datos se quedan aquí",
      chipOffline: "Se juega en modo avión",
    },
    marquee: [
      "Apertura inmediata",
      "Se juega sin conexión",
      "Privado por diseño",
      "Todo desbloqueado",
      "Árabe · Francés · Inglés",
      "Publicado por GNeurone AI",
    ],
    catalogue: {
      eyebrow: "El catálogo",
      title: "Elija su próximo rompecabezas",
      lede:
        "Juegos y compañeros para el día a día, y la lista sigue creciendo. Cada uno se publica bajo la cuenta de GNeurone AI y funciona íntegramente en su dispositivo.",
      cardLink: "Privacidad",
    },
    principles: {
      eyebrow: "Cómo están hechas",
      title: "Pensadas para quedarse en su teléfono",
      lede:
        "Compromisos escritos en el código publicado en Google Play, no opciones enterradas en una pantalla de ajustes.",
      items: [
        {
          title: "Todo se queda con usted",
          text:
            "Puntuaciones, ajustes y progreso viven en el espacio privado de la aplicación. Nada viaja hasta GNeurone AI, así que no hay nada que filtrar.",
        },
        {
          title: "Directo al juego",
          text:
            "Toca el icono y ya está jugando. Nada interrumpe un nivel, nada se carga entre usted y el siguiente movimiento.",
        },
        {
          title: "La aplicación entera, de inmediato",
          text:
            "Cada nivel, cada tema y cada función está desbloqueado desde el primer arranque, en todos los dispositivos donde la instale.",
        },
        {
          title: "Funciona en modo avión",
          text:
            "Dirección de la Qibla, horarios, cuadrículas y niveles se calculan en el dispositivo. Un avión, un metro o una zona sin cobertura no cambian nada.",
        },
      ],
    },
    contact: {
      title: "Escribir al estudio",
      lede: "Errores, ideas y preguntas llegan directamente a GNeurone AI, a la dirección publicada en cada política de privacidad.",
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
          "Oriente el teléfono y encuentre la Qibla, calculada por círculo máximo. Los horarios siguen al sol en su posición exacta, con el calendario hégira incluido: en el desierto igual que en un avión.",
      },
      motsmeles: {
        tagline: "Juego de sopa de letras",
        description:
          "Cuadrículas construidas para el alfabeto árabe, con seis temas y una cuadrícula nueva en cada partida. Nunca jugará dos veces la misma.",
      },
      parking: {
        tagline: "Rompecabezas de desbloqueo de vehículos",
        description:
          "Sesenta atascos que desenredar. Cada uno fue resuelto por ordenador antes de publicarse, así que el número óptimo de movimientos se conoce: iguálelo si puede.",
      },
      arcade: {
        tagline: "Colección de quince rompecabezas",
        description:
          "Quince clásicos en una sola aplicación: clasificación de frascos, 2048, puzle deslizante, Hanói, serpiente y diez más. Un icono en la pantalla de inicio, una tarde de juego detrás.",
      },
      oneline: {
        tagline: "Rompecabezas de trazo único",
        description:
          "Cuarenta y cinco figuras que se dibujan sin levantar el dedo, todas verificadas como resolubles antes de publicarse. Ni una palabra de texto, así que se juega en cualquier idioma.",
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
      permissionReasons: {
        ACCESS_COARSE_LOCATION:
          "Calcular la dirección de la Qibla y los horarios de oración para su posición. El cálculo es local y la posición nunca se transmite.",
        ACCESS_FINE_LOCATION:
          "Calcular la dirección de la Qibla y los horarios de oración para su posición. El cálculo es local y la posición nunca se transmite.",
        POST_NOTIFICATIONS:
          "Mostrar los recordatorios de oración que haya activado. La notificación se construye en el dispositivo y no se contacta ningún servidor.",
        SCHEDULE_EXACT_ALARM:
          "Lanzar el recordatorio a la hora exacta de la oración. Android solo garantiza el minuto con este permiso; sin él el recordatorio llega igualmente, pero tarde.",
        RECEIVE_BOOT_COMPLETED:
          "Reprogramar los recordatorios tras reiniciar el teléfono. Android borra las alarmas pendientes al apagarse; sin esto se detendrían en silencio.",
        VIBRATE:
          "Hacer vibrar el teléfono a la hora de la oración, si eligió ese modo de aviso en lugar del sonido.",
      },
      rightsHeading: "Sus derechos",
      rights1:
        "Puesto que el editor no recoge ningún dato personal, no hay nada que consultar, corregir o eliminar por nuestra parte. Usted conserva el control total: borrar los datos de la aplicación desde los ajustes de Android elimina todo lo que haya guardado.",
      rights2:
        "Si reside en la Unión Europea, el Reino Unido, California o Canadá, los derechos que le otorga su legislación local se aplican plenamente. Escríbanos para cualquier consulta.",
      changesHeading: "Modificaciones",
      changesText:
        "Cualquier modificación de esta política se publicará en esta página, con una fecha de actualización. Un cambio importante se anunciará en las notas de versión de la aplicación.",
      siteHeading: "Sobre este sitio web",
      siteText:
        "Este sitio cuenta sus páginas vistas con la herramienta integrada de nuestro alojamiento, Vercel Web Analytics. Sin cookies, sin identificador persistente, sin red publicitaria. Sabemos qué páginas se leen, nada sobre quién las lee. Las aplicaciones listadas arriba no están afectadas: no envían nada, a nadie.",
      contactHeading: "Contacto",
      footerNote: (name) => `Política de privacidad de ${name}, publicada por GNeurone AI.`,
    },
  },

  /* ------------------------------------------------------------------ PT */
  pt: {
    colon: ": ",
    updated: "27 de julho de 2026",
    home: {
      title: "Haythem Studio — Jogos e utilitários Android que funcionam offline",
      description:
        "Jogos e utilitários Android da GNeurone AI: quebra-cabeças de estacionamento, traço único, clássicos de arcade, caça-palavras em árabe, bússola Qibla e mais. Abrem num segundo e continuam sem rede.",
      ogDescription: "Aplicações Android que abrem num segundo e continuam sem rede.",
    },
    nav: {
      apps: "Aplicações",
      principles: "Princípios",
      privacy: "Privacidade",
      contact: "Contacto",
      theme: "Mudar de tema",
      language: "Idioma",
      menu: "Menu",
      menuClose: "Fechar o menu",
    },
    hero: {
      badge: "Disponíveis no Google Play",
      line1: "Jogos que",
      line2: "funcionam,",
      line3: "até offline.",
      lede:
        "A Haythem Studio cria aplicações Android que abrem num segundo e continuam sem rede. Quebra-cabeças e utilitários do dia a dia, publicados pela GNeurone AI e desbloqueados desde o primeiro arranque.",
      ctaPrimary: "Ver as aplicações",
      ctaSecondary: "O nosso compromisso",
      statApps: "Aplicações no Google Play",
      statLevels: "Níveis e quebra-cabeças",
      statOffline: "Calculado no seu telemóvel",
      chipCollect: "Os seus dados ficam aqui",
      chipOffline: "Joga-se em modo de voo",
    },
    marquee: [
      "Abertura imediata",
      "Joga-se offline",
      "Privado por conceção",
      "Tudo desbloqueado",
      "Árabe · Francês · Inglês",
      "Publicado pela GNeurone AI",
    ],
    catalogue: {
      eyebrow: "O catálogo",
      title: "Escolha o seu próximo quebra-cabeças",
      lede:
        "Jogos e companheiros para o dia a dia, e a lista continua a crescer. Cada um é publicado sob a conta da GNeurone AI e funciona inteiramente no seu aparelho.",
      cardLink: "Privacidade",
    },
    principles: {
      eyebrow: "Como são feitas",
      title: "Feitas para ficar no seu telemóvel",
      lede: "Compromissos escritos no código publicado no Google Play, e não opções escondidas num ecrã de definições.",
      items: [
        {
          title: "Tudo fica consigo",
          text:
            "Pontuações, definições e progresso vivem no espaço privado da aplicação. Nada viaja até à GNeurone AI, por isso não há nada para vazar.",
        },
        {
          title: "Direto para o jogo",
          text:
            "Toca no ícone e já está a jogar. Nada interrompe um nível, nada carrega entre si e a jogada seguinte.",
        },
        {
          title: "A aplicação inteira, já",
          text:
            "Cada nível, cada tema e cada funcionalidade está desbloqueado desde o primeiro arranque, em todos os aparelhos onde a instalar.",
        },
        {
          title: "Funciona em modo de voo",
          text:
            "Direção da Qibla, horários, grelhas e níveis são calculados no aparelho. Um avião, um metro ou uma zona sem cobertura não mudam nada.",
        },
      ],
    },
    contact: {
      title: "Escrever ao estúdio",
      lede: "Relatos de erros, ideias e perguntas chegam diretamente à GNeurone AI, no endereço publicado em cada política de privacidade.",
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
          "Aponte o telemóvel e encontre a Qibla, calculada pelo círculo máximo. Os horários seguem o sol na sua posição exata, com o calendário hégira à mistura — no deserto tal como num avião.",
      },
      motsmeles: {
        tagline: "Jogo de caça-palavras",
        description:
          "Grelhas construídas para o alfabeto árabe, com seis temas e uma grelha inédita em cada partida. Nunca vai jogar duas vezes a mesma.",
      },
      parking: {
        tagline: "Quebra-cabeças de desbloqueio de veículos",
        description:
          "Sessenta engarrafamentos para desenredar. Cada um foi resolvido por computador antes da publicação, por isso o número ótimo de movimentos é conhecido: iguale-o se conseguir.",
      },
      arcade: {
        tagline: "Coleção de quinze quebra-cabeças",
        description:
          "Quinze clássicos numa única aplicação: separação de frascos, 2048, jogo deslizante, Hanói, cobra e mais dez. Um ícone no ecrã inicial, uma noite de jogo por trás.",
      },
      oneline: {
        tagline: "Quebra-cabeças de traço único",
        description:
          "Quarenta e cinco figuras para desenhar sem levantar o dedo, todas verificadas como solucionáveis antes da publicação. Nem uma palavra de texto, por isso joga-se em qualquer idioma.",
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
      permissionReasons: {
        ACCESS_COARSE_LOCATION:
          "Calcular a direção da Qibla e os horários de oração para a sua posição. O cálculo é local e a posição nunca é transmitida.",
        ACCESS_FINE_LOCATION:
          "Calcular a direção da Qibla e os horários de oração para a sua posição. O cálculo é local e a posição nunca é transmitida.",
        POST_NOTIFICATIONS:
          "Mostrar os lembretes de oração que ativou. A notificação é construída no aparelho e nenhum servidor é contactado.",
        SCHEDULE_EXACT_ALARM:
          "Disparar o lembrete à hora exata da oração. O Android só garante o minuto com esta permissão; sem ela o lembrete chega na mesma, mas atrasado.",
        RECEIVE_BOOT_COMPLETED:
          "Reprogramar os lembretes depois de reiniciar o telefone. O Android apaga os alarmes pendentes ao desligar; sem isto parariam em silêncio.",
        VIBRATE:
          "Fazer vibrar o telefone à hora da oração, se escolheu esse modo de aviso em vez do som.",
      },
      rightsHeading: "Os seus direitos",
      rights1:
        "Uma vez que a editora não recolhe qualquer dado pessoal, não há nada para consultar, corrigir ou apagar do nosso lado. Mantém o controlo total: apagar os dados da aplicação nas definições Android remove tudo o que foi registado.",
      rights2:
        "Se reside na União Europeia, no Reino Unido, na Califórnia ou no Canadá, os direitos conferidos pela sua legislação local aplicam-se plenamente. Escreva-nos para qualquer questão.",
      changesHeading: "Alterações",
      changesText:
        "Qualquer alteração a esta política será publicada nesta página, com uma data de atualização. Uma alteração importante será anunciada nas notas de versão da aplicação.",
      siteHeading: "Sobre este site",
      siteText:
        "Este site conta as suas páginas vistas com a ferramenta integrada do nosso alojamento, Vercel Web Analytics. Sem cookies, sem identificador persistente, sem rede publicitária. Sabemos que páginas são lidas, nada sobre quem as lê. As aplicações listadas acima não são abrangidas: não enviam nada, a ninguém.",
      contactHeading: "Contacte-nos",
      footerNote: (name) => `Política de privacidade de ${name}, publicada pela GNeurone AI.`,
    },
  },
};
