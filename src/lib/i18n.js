export const locales = ["ar", "en"];
export const defaultLocale = "ar";

export const problemLabels = {
  marketplace: { ar: "سوق خدمات", en: "Marketplace" },
  orders: { ar: "الطلبات", en: "Orders" },
  realtime_chat: { ar: "شات لحظي", en: "Realtime Chat" },
  roles_permissions: { ar: "أدوار وصلاحيات", en: "Roles/Permissions" },
  transit: { ar: "التنقل", en: "Transit" },
  tracking: { ar: "التتبع", en: "Tracking" },
  driver_flows: { ar: "تدفقات السائق", en: "Driver Flows" },
};

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      about: "عن المطور",
      status: "حالة الديمو",
      contact: "تواصل",
      studio: "استوديو المشاريع",
    },
    header: {
      title: "ملعب المنتجات",
      subtitle: "مطور فول ستاك حر (Flutter + Node)",
      cta: "احجز جلسة تعريفية",
    },
    footer: {
      description:
        "بورتفوليو تفاعلي لمطور فول ستاك بيركّز على التجربة قبل العرض.",
      note: "كل الديموهات تجريبية ومعزولة، والبيانات بتتصفّر دوريًا.",
    },
    home: {
      eyebrow: "بورتفوليو ديمو-أولًا لمطور فول ستاك حر",
      headline: "جرّب المنتج بنفسك قبل ما تشوفه لقطة شاشة.",
      body:
        "ده \"ملعب منتجات\" حقيقي: كل مشروع معمول كتجربة تفاعلية تقدر تدخلها وتفهم قيمتها بسرعة. Flutter + Node.js + MongoDB + Socket.io، مع بنية سهلة تتبدّل لاحقًا بأي باك-إند حقيقي.",
      primaryCta: "استكشف المشاريع",
      secondaryCta: "احجز تجربة سريعة",
      howTitle: "ازاي التجربة بتشتغل؟",
      steps: [
        {
          title: "اختار المشكلة",
          body: "فلتر سريع يوصلك للمشروعات المناسبة لنوع المنتج.",
        },
        {
          title: "جرّب الديمو",
          body: "شغّل تجربة فورية وتعرّف على تدفق المستخدم الحقيقي.",
        },
        {
          title: "جلسة مؤقتة",
          body: "بيانات معزولة بتتصفّر كل فترة عشان كل تجربة تبقى نظيفة.",
        },
      ],
      pickerTitle: "اختار المشكلة اللي عايز تحلها",
      pickerBody: "اختار مشكلة أو أكتر، وهعرضلك مشاريع مناسبة مع سبب الترشيح.",
      features: [
        {
          title: "مصمم للتجربة المباشرة",
          body: "كل مشروع فيه ديمو وتجربة جلسة مؤقتة عشان تحكم بسرعة.",
        },
        {
          title: "تحت الغطاء واضح",
          body: "صفحة مستقلة للمعمارية والقرارات التقنية.",
        },
        {
          title: "مختبر الـ API",
          body: "ارسال طلبات تجريبية وتشوف الرد فورًا بدون باك-إند حقيقي.",
        },
      ],
    },
    problemPicker: {
      clear: "تصفية جديدة",
      title: "المشاريع المقترحة",
      hintEmpty: "اختار مشكلة عشان نرشّح لك أفضل التجارب.",
      hintResults: "النتايج مرتبة حسب قوة التطابق.",
      badgeNone: "بدون فلترة",
      badgeCount: "عدد الفلاتر: {count}",
      empty: "مفيش مشروع مطابق تمامًا. جرّب تغيّر الفلاتر أو تشيل بعضها.",
      reason: "السبب: متوافق مع {tags}.",
    },
    projectsPage: {
      eyebrow: "قائمة المشاريع",
      title: "جرّب المشاريع حسب المشكلة اللي بتدور عليها",
      body: "فلتر بالوسوم المناسبة وشوف المشاريع اللي تقدملك تجربة حقيقية.",
    },
    projectsBrowser: {
      clear: "مسح الفلاتر",
      count: "عدد المشاريع: {count}",
      activeFilters: "الفلاتر النشطة: {filters}",
      noFilters: "اعرض كل المشاريع بدون فلترة.",
    },
    projectCard: {
      live: "ديمو مباشر",
      soon: "قريبًا",
      stack: "التقنيات:",
    },
    tabs: {
      overview: "نظرة عامة",
      demo: "الديمو",
      underTheHood: "تحت الغطاء",
      api: "مختبر الـ API",
    },
    projectPage: {
      eyebrow: "مشروع تفاعلي",
      liveCta: "جرّب الديمو المباشر",
      sessionCta: "إنشاء جلسة ديمو",
      storyTitle: "القصة في 3 نقاط",
      problem: "المشكلة",
      solution: "الحل",
      result: "النتيجة",
      highlights: "أبرز المميزات",
      techStack: "الحزمة التقنية",
      demoStatus: "حالة الديمو",
      demoLive: "الديمو متاح للتجربة الآن.",
      demoSoon: "الديمو قيد التجهيز حالياً.",
      architecture: "نظرة معمارية",
      decisions: "قرارات وتنفيذ",
      trustTitle: "ملاحظة الثقة",
      trustBody:
        "كل الديموهات معزولة عن بيانات حقيقية. مفيش مدفوعات أو رفع ملفات حقيقية، والبيانات بتتصفّر دوريًا عشان كل تجربة تبقى آمنة.",
      galleryTitle: "معرض الصور",
      demoPreviewTitle: "معاينة الديمو على الآيفون",
      demoPreviewBody:
        "لو عندك نسخة ويب من Flutter، هتظهر هنا داخل إطار هاتف.",
      demoPreviewEmpty: "ارفع رابط نسخة الويب عشان يظهر الديمو هنا.",
      demoPreviewOpen: "افتح الديمو الكامل",
      demoPreviewHint:
        "لو المعاينة مش ظاهرة بسبب الحماية، استخدم زر الفتح.",
    },
    session: {
      title: "مولّد جلسة الديمو",
      subtitle: "جلسة مؤقتة بصلاحيات مختلفة للعميل ومقدم الخدمة.",
      button: "إنشاء جلسة ديمو",
      loading: "جاري الإنشاء...",
      duration: "مدة الجلسة: 15 دقيقة",
      countdown: "العدّ التنازلي: {time}",
      error: "حصلت مشكلة أثناء إنشاء الجلسة. جرّب تاني.",
      token: "التوكن:",
      expiresAt: "تنتهي في:",
      expired: "الجلسة انتهت. اعمل جلسة جديدة عشان تكمل التجربة.",
      client: "حساب العميل",
      provider: "حساب مقدم الخدمة",
      email: "البريد:",
      password: "كلمة المرور:",
      empty: "اضغط \"إنشاء جلسة ديمو\" للحصول على بيانات دخول مؤقتة.",
    },
    apiPlayground: {
      empty: "مفيش نقاط نهاية متاحة حاليًا.",
      listTitle: "القوائم",
      baseUrl: "الـ Base URL",
      note: "الطلبات هنا وهمية في V1 ويتم تحويلها إلى /api/mock-api.",
      send: "إرسال طلب تجريبي",
      sending: "جارٍ الإرسال...",
      sampleBody: "عينة الطلب",
      response: "الاستجابة",
      placeholder: "// اضغط إرسال طلب تجريبي عشان تشوف الرد",
      error: "تعذر إرسال الطلب. جرّب مرة تانية.",
    },
    about: {
      eyebrow: "عن المطور",
      title: "مطور فول ستاك بيركّز على التجربة والمنتج",
      body:
        "شغلي الأساسي إني أحوّل الأفكار لتجارب واقعية تقدر تتجرب وتتقيم. بخبرة في Flutter للواجهات، وNode.js مع MongoDB للباك-إند، وبنية لحظية عبر Socket.io لتجارب شات وتتبع في الوقت الحقيقي.",
      skillsTitle: "المهارات الأساسية",
      skills: [
        "Flutter لتطبيقات موبايل سريعة ومستقرة.",
        "Node.js + Express لخدمات مرنة وقابلة للتوسع.",
        "MongoDB لتخزين بيانات مرن ومنظم.",
        "Socket.io لتجارب لحظية (شات، تتبع، إشعارات).",
      ],
      offerTitle: "اللي بقدمه",
      offers: [
        "بناء MVP بسرعة مع تجربة مستخدم محسوبة.",
        "تصميم معماريات بسيطة قابلة للنمو.",
        "تجهيز ديموهات قابلة للتجربة فورًا.",
        "تحسينات الأداء وتجربة المستخدم بعد الإطلاق.",
      ],
      styleTitle: "أسلوب الشغل",
      styleBody:
        "شغل منظم على مراحل: فهم المشكلة، تصميم التجربة، تنفيذ سريع، وتجربة مشتركة معك خطوة بخطوة.",
    },
    contact: {
      eyebrow: "جاهز للتجربة؟",
      title: "خلّينا نبدأ تجربة سريعة للمنتج",
      body: "ابعتلي التفاصيل الأساسية وأنا أرد عليك بخطة واضحة وتجربة ديمو مناسبة.",
      noteTitle: "ملاحظة سريعة",
      noteBody:
        "لو عندك منتج قائم بالفعل، ابعتلي رابط الديمو الحالي أو الـ APIs عشان نختصر الوقت ونبني تجربة أفضل.",
      placeholder: "بيانات تجريبية للاستبدال لاحقًا.",
      channels: {
        whatsapp: "واتساب",
        linkedin: "لينكدإن",
        email: "البريد",
      },
    },
    status: {
      eyebrow: "لوحة الحالة",
      title: "حالة أنظمة الديمو",
      body: "كل الأنظمة التجريبية شغالة بشكل مستقر في V1.",
      schedule: "إعادة ضبط البيانات كل 6 ساعات",
      statusLabel: "متاح",
      privacyTitle: "تنبيه الخصوصية",
      privacyBody:
        "البيانات داخل الديمو وهمية ومعزولة. أي تغييرات أو تجارب بتتم إعادة ضبطها تلقائيًا حسب جدول التصفير.",
    },
    studio: {
      eyebrow: "استوديو المشاريع",
      title: "أضف مشروع جديد بسهولة",
      body:
        "املأ الحقول وهنطلع لك JSON جاهز تضيفه في ملف البيانات.",
      noteTitle: "مهم في النسخة الحالية",
      noteBody:
        "الإضافة بتكون يدويًا في src/data/projects.js لأن مفيش قاعدة بيانات.",
    },
    common: {
      listSeparator: "، ",
      copy: "نسخ",
      copied: "تم النسخ",
      live: "مباشر",
      comingSoon: "قريبًا",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      status: "Demo Status",
      contact: "Contact",
      studio: "Project Studio",
    },
    header: {
      title: "Product Playground",
      subtitle: "Freelance Full-Stack (Flutter + Node)",
      cta: "Book an intro call",
    },
    footer: {
      description:
        "An interactive, demo-first portfolio focused on real product experience.",
      note: "All demos are isolated and reset on a regular schedule.",
    },
    home: {
      eyebrow: "Demo-first portfolio for a freelance full-stack developer",
      headline: "Try the product yourself before seeing screenshots.",
      body:
        "This is a real Product Playground: every project is an interactive experience you can try fast. Flutter + Node.js + MongoDB + Socket.io, with a structure ready to swap in a real backend later.",
      primaryCta: "Explore projects",
      secondaryCta: "Book a quick demo",
      howTitle: "How does the experience work?",
      steps: [
        {
          title: "Pick the problem",
          body: "Quick filters guide you to the right product type.",
        },
        {
          title: "Try the demo",
          body: "Launch a real flow and understand the user journey.",
        },
        {
          title: "Temporary session",
          body: "Isolated data that resets regularly to keep trials clean.",
        },
      ],
      pickerTitle: "Choose the problem you want to solve",
      pickerBody:
        "Select one or more problems and see recommended projects with reasons.",
      features: [
        {
          title: "Built for hands-on demo",
          body: "Every project includes a demo flow and a temporary session.",
        },
        {
          title: "Under the hood is clear",
          body: "Dedicated pages for architecture and technical decisions.",
        },
        {
          title: "API lab",
          body: "Send sample requests and see responses instantly in v1.",
        },
      ],
    },
    problemPicker: {
      clear: "Reset filters",
      title: "Recommended projects",
      hintEmpty: "Pick a problem to see recommendations.",
      hintResults: "Results are sorted by match strength.",
      badgeNone: "No filters",
      badgeCount: "Filters: {count}",
      empty: "No exact match. Try adjusting the filters.",
      reason: "Reason: matches {tags}.",
    },
    projectsPage: {
      eyebrow: "Projects list",
      title: "Try projects based on the problem you are solving",
      body: "Filter by the right tags to see demos that fit.",
    },
    projectsBrowser: {
      clear: "Clear filters",
      count: "Projects: {count}",
      activeFilters: "Active filters: {filters}",
      noFilters: "Showing all projects without filters.",
    },
    projectCard: {
      live: "Live demo",
      soon: "Coming soon",
      stack: "Stack:",
    },
    tabs: {
      overview: "Overview",
      demo: "Demo",
      underTheHood: "Under the Hood",
      api: "API Lab",
    },
    projectPage: {
      eyebrow: "Interactive project",
      liveCta: "Try live demo",
      sessionCta: "Create demo session",
      storyTitle: "Story in 3 points",
      problem: "Problem",
      solution: "Solution",
      result: "Result",
      highlights: "Highlights",
      techStack: "Tech stack",
      demoStatus: "Demo status",
      demoLive: "Demo is available now.",
      demoSoon: "Demo is being prepared.",
      architecture: "Architecture overview",
      decisions: "Decisions & implementation",
      trustTitle: "Trust note",
      trustBody:
        "All demos are isolated from real data. No real payments or uploads; data resets regularly for safety.",
      galleryTitle: "Project gallery",
      demoPreviewTitle: "iPhone demo preview",
      demoPreviewBody:
        "If you have a Flutter web build, it will appear here in an iPhone frame.",
      demoPreviewEmpty: "Add a web preview URL to show the demo here.",
      demoPreviewOpen: "Open full demo",
      demoPreviewHint: "If the preview is blocked, use the open button.",
    },
    session: {
      title: "Demo session generator",
      subtitle: "Temporary session with client and provider roles.",
      button: "Create demo session",
      loading: "Creating...",
      duration: "Session length: 15 minutes",
      countdown: "Countdown: {time}",
      error: "Failed to create the session. Try again.",
      token: "Token:",
      expiresAt: "Expires at:",
      expired: "Session expired. Create a new one to continue.",
      client: "Client account",
      provider: "Provider account",
      email: "Email:",
      password: "Password:",
      empty: "Click \"Create demo session\" to get temporary credentials.",
    },
    apiPlayground: {
      empty: "No endpoints available yet.",
      listTitle: "Endpoints",
      baseUrl: "Base URL",
      note: "Requests are mocked in v1 and routed to /api/mock-api.",
      send: "Send sample request",
      sending: "Sending...",
      sampleBody: "Sample body",
      response: "Response",
      placeholder: "// Click \"Send sample request\" to see the response",
      error: "Failed to send the request. Try again.",
    },
    about: {
      eyebrow: "About",
      title: "Full-stack developer focused on product experience",
      body:
        "My focus is turning ideas into real experiences you can try. I build Flutter interfaces, Node.js + MongoDB backends, and real-time systems with Socket.io.",
      skillsTitle: "Core skills",
      skills: [
        "Flutter for fast, stable mobile apps.",
        "Node.js + Express for scalable services.",
        "MongoDB for flexible, organized data.",
        "Socket.io for real-time flows (chat, tracking, alerts).",
      ],
      offerTitle: "What I offer",
      offers: [
        "Rapid MVP builds with focused UX.",
        "Simple architectures that scale.",
        "Demo-ready experiences you can try instantly.",
        "Performance and UX improvements after launch.",
      ],
      styleTitle: "Working style",
      styleBody:
        "Structured phases: understand the problem, design the experience, fast delivery, and hands-on collaboration.",
    },
    contact: {
      eyebrow: "Ready to try?",
      title: "Let’s start a quick product demo",
      body: "Send the basics and I’ll reply with a clear plan and demo flow.",
      noteTitle: "Quick note",
      noteBody:
        "If you already have a product, share the current demo link or APIs to speed things up.",
      placeholder: "Placeholder info to replace later.",
      channels: {
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        email: "Email",
      },
    },
    status: {
      eyebrow: "Status board",
      title: "Demo systems status",
      body: "All demo systems are stable in v1.",
      schedule: "Data reset every 6 hours",
      statusLabel: "Online",
      privacyTitle: "Privacy notice",
      privacyBody:
        "Demo data is fake and isolated. Any changes are reset automatically on schedule.",
    },
    studio: {
      eyebrow: "Project studio",
      title: "Add a new project easily",
      body:
        "Fill the fields and generate a ready JSON snippet for src/data/projects.js.",
      noteTitle: "Important in v1",
      noteBody:
        "Projects are added manually to src/data/projects.js because there is no database.",
    },
    common: {
      listSeparator: ", ",
      copy: "Copy",
      copied: "Copied",
      live: "Live",
      comingSoon: "Coming soon",
    },
  },
};

export function getStrings(locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale];
}

export function getProblemLabel(locale, key) {
  const entry = problemLabels[key];
  if (!entry) {
    return key;
  }
  return entry[locale] || entry[defaultLocale] || key;
}

export function getDir(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export async function getLocaleFromCookies(cookieStoreOrPromise) {
  const cookieStore =
    typeof cookieStoreOrPromise?.get === "function"
      ? cookieStoreOrPromise
      : await cookieStoreOrPromise;
  const value = cookieStore?.get?.("locale")?.value;
  if (locales.includes(value)) {
    return value;
  }
  return defaultLocale;
}
