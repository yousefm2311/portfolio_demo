
export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problemTags: string[]; // filters
  stack: string[];
  highlights: string[];
  demo?: {
    status: "coming_soon" | "live";
    url?: string; // later: https://demo.yoursite.com/usta
    note?: string; // “بيئة تجريبية...”
  };
};

export const projects: Project[] = [
  {
    slug: "usta",
    title: "USTA",
    tagline: "منصة تربط العميل بالحرفي + شات لحظي وإدارة طلبات",
    problemTags: ["Marketplace", "Realtime Chat", "Orders"],
    stack: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
    highlights: [
      "تسجيل/صلاحيات",
      "طلبات + حالات",
      "شات لحظي",
    ],
    demo: { status: "coming_soon", note: "بيئة تجريبية — البيانات تُمسح دوريًا" },
  },
  {
    slug: "mikrolink",
    title: "MikroLink",
    tagline: "تطبيق مواصلات: رحلات + تتبع مباشر + شات",
    problemTags: ["Tracking", "Realtime Chat", "Transit"],
    stack: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
    highlights: ["Live tracking", "Realtime chat", "Trip flows"],
    demo: { status: "coming_soon", note: "Demo قريبًا" },
  },
];
