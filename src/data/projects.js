// Plug real demo URLs in demo.url and Flutter web builds in demo.webPreviewUrl.
const projects = [
  {
    slug: "usta",
    problems: ["marketplace", "orders", "realtime_chat", "roles_permissions"],
    stack: ["Flutter", "Node.js", "MongoDB", "Socket.io", "Redis"],
    demo: {
      status: "coming_soon",
      url: "",
      webPreviewUrl: "",
      note: {
        ar: "هيتم إضافة رابط الديمو الحقيقي مع الإطلاق.",
        en: "A real demo URL will be added here on launch.",
      },
    },
    images: [
      {
        src: "/projects/usta-1.svg",
        alt: {
          ar: "واجهة سوق الخدمات في USTA",
          en: "USTA marketplace overview",
        },
      },
      {
        src: "/projects/usta-2.svg",
        alt: {
          ar: "لوحة متابعة الطلب والدردشة",
          en: "Order tracking and chat preview",
        },
      },
    ],
    content: {
      ar: {
        title: "USTA",
        tagline:
          "سوق خدمات سريع يربط العميل بأفضل فني مع شات فوري للطلبات.",
        highlights: [
          "طلب الخدمة يتم في 3 خطوات سريعة.",
          "شات لحظي مرتبط بكل طلب لتأكيد التفاصيل.",
          "صلاحيات مرنة للأدوار (عميل/فني/أدمن).",
        ],
        story: {
          problem: "العميل محتاج فني موثوق بسرعة من غير مكالمات كتير.",
          solution: "منصة سوق خدمات واضحة التصنيفات مع طلب سريع وشات لحظي.",
          result: "تقليل وقت إنشاء الطلب وزيادة معدل إكمال الخدمة.",
        },
        architecture: {
          overview:
            "خدمات خفيفة ومنفصلة: الطلبات، الشات اللحظي، وإدارة الصلاحيات.",
          bullets: [
            "Socket.io لغرف محادثة مرتبطة بكل طلب.",
            "MongoDB لتخزين الطلبات والرسائل والصلاحيات.",
            "Redis لحالة التواجد والتحديثات اللحظية.",
          ],
        },
      },
      en: {
        title: "USTA",
        tagline:
          "A fast services marketplace connecting customers with the right technician and instant chat.",
        highlights: [
          "Service request flow in three quick steps.",
          "Real-time chat tied to each order for clear follow-up.",
          "Flexible permissions for client, provider, and admin roles.",
        ],
        story: {
          problem:
            "Customers need to find a trusted technician fast without endless calls.",
          solution:
            "A service marketplace with clear categories, fast ordering, and real-time chat.",
          result:
            "Faster order creation and higher completion through direct communication.",
        },
        architecture: {
          overview:
            "Lightweight services: orders, real-time chat, and centralized permissions.",
          bullets: [
            "Socket.io for chat rooms linked to orders.",
            "MongoDB collections for orders, messages, and permissions.",
            "Redis for presence and real-time state.",
          ],
        },
      },
    },
    apiPlayground: {
      baseUrl: "https://demo-api.example.com/usta",
      endpoints: [
        {
          key: "create_order",
          label: {
            ar: "إنشاء طلب خدمة",
            en: "Create service order",
          },
          method: "POST",
          path: "/orders",
          sampleBody: {
            ar: {
              service: "سباكة",
              city: "القاهرة",
              budget: 350,
              schedule: "مساء",
            },
            en: {
              service: "Plumbing",
              city: "Cairo",
              budget: 350,
              schedule: "Evening",
            },
          },
          mockResponse: {
            ok: true,
            data: {
              orderId: "ORD-1023",
              status: "pending",
              etaMinutes: 45,
            },
          },
        },
        {
          key: "open_chat",
          label: {
            ar: "فتح محادثة الطلب",
            en: "Open order chat",
          },
          method: "POST",
          path: "/chats/open",
          sampleBody: {
            ar: {
              orderId: "ORD-1023",
              message: "محتاج فني سباكة النهارده لو متاح.",
            },
            en: {
              orderId: "ORD-1023",
              message: "Need a technician today if available.",
            },
          },
          mockResponse: {
            ok: true,
            data: {
              chatId: "CHAT-880",
              channel: "order-1023",
              echoed: "Need a technician today if available.",
            },
          },
        },
        {
          key: "assign_provider",
          label: {
            ar: "تعيين الفني للطلب",
            en: "Assign provider to order",
          },
          method: "POST",
          path: "/orders/assign",
          sampleBody: {
            ar: {
              orderId: "ORD-1023",
              providerId: "PRO-55",
              etaMinutes: 35,
            },
            en: {
              orderId: "ORD-1023",
              providerId: "PRO-55",
              etaMinutes: 35,
            },
          },
          mockResponse: {
            ok: true,
            data: {
              orderId: "ORD-1023",
              status: "assigned",
              providerName: "Ahmed Salem",
            },
          },
        },
      ],
    },
  },
  {
    slug: "mikrolink",
    problems: ["transit", "tracking", "realtime_chat", "driver_flows"],
    stack: ["Flutter", "Node.js", "MongoDB", "Socket.io", "Maps SDK"],
    demo: {
      status: "live",
      url: "https://demo.example.com/mikrolink",
      webPreviewUrl: "/previews/mikrolink.html",
      note: {
        ar: "بدّل الرابط برابط الديمو الحقيقي عند الجاهزية.",
        en: "Replace with the real demo URL when ready.",
      },
    },
    images: [
      {
        src: "/projects/mikrolink-1.svg",
        alt: {
          ar: "لوحة عمليات MikroLink",
          en: "MikroLink operations board",
        },
      },
      {
        src: "/projects/mikrolink-2.svg",
        alt: {
          ar: "متابعة السائق والمسار",
          en: "Driver tracking and route view",
        },
      },
    ],
    content: {
      ar: {
        title: "MikroLink",
        tagline: "منصة تشغيل نقل ذكية لمتابعة الرحلات لحظة بلحظة.",
        highlights: [
          "لوحة عمليات مباشرة مع تحديث موقع السائق.",
          "مسار واضح ونقاط توقف مخططة.",
          "شات بين العميل والسائق مع تنبيهات فورية.",
        ],
        story: {
          problem:
            "فرق النقل محتاجة رؤية لحظية للمركبات وحالة الرحلة بدون متابعة يدوية.",
          solution:
            "تجربة تشغيل تربط السائق بلوحة ذكية مع رسائل مباشرة وتتبع لحظي.",
          result:
            "تحسين الالتزام بالمواعيد وتقليل المكالمات المتكررة.",
        },
        architecture: {
          overview:
            "خدمة رحلات متصلة بمحرك تتبع وقناة تحديثات مباشرة.",
          bullets: [
            "Socket.io لبث المواقع والرسائل في الوقت الحقيقي.",
            "سجل أحداث خفيف لتاريخ الرحلة.",
            "قواعد حالة للانتقال بين مراحل الرحلة.",
          ],
        },
      },
      en: {
        title: "MikroLink",
        tagline: "Smart transit operations platform for live trip tracking.",
        highlights: [
          "Live operations board with driver location updates.",
          "Clear route path with planned stops.",
          "Chat between shipper and driver with instant notifications.",
        ],
        story: {
          problem:
            "Transit teams need real-time visibility into vehicle locations and trip status.",
          solution:
            "An operations experience linking drivers to a smart dashboard with live messaging.",
          result:
            "Improved on-time performance and fewer manual follow-up calls.",
        },
        architecture: {
          overview:
            "Trip service connected to a tracking engine with a live driver updates channel.",
          bullets: [
            "Socket.io layer for live location and messaging streams.",
            "Lightweight event store to capture trip history.",
            "State rules for trip transitions (scheduled/in-progress/completed).",
          ],
        },
      },
    },
    apiPlayground: {
      baseUrl: "https://demo-api.example.com/mikrolink",
      endpoints: [
        {
          key: "create_trip",
          label: {
            ar: "إنشاء رحلة جديدة",
            en: "Create new trip",
          },
          method: "POST",
          path: "/trips",
          sampleBody: {
            ar: {
              route: "ميناء الأدبية - العاشر من رمضان",
              cargo: "أجهزة تبريد",
              driverId: "DRV-22",
            },
            en: {
              route: "Adabiya Port - 10th of Ramadan",
              cargo: "Cooling units",
              driverId: "DRV-22",
            },
          },
          mockResponse: {
            ok: true,
            data: {
              tripId: "TRP-557",
              status: "scheduled",
              startAt: "2025-02-03T09:30:00Z",
            },
          },
        },
        {
          key: "update_tracking",
          label: {
            ar: "تحديث موقع السائق",
            en: "Update driver location",
          },
          method: "POST",
          path: "/tracking/update",
          sampleBody: {
            ar: {
              driverId: "DRV-22",
              lat: 30.0499,
              lng: 31.2386,
              speedKmh: 68,
            },
            en: {
              driverId: "DRV-22",
              lat: 30.0499,
              lng: 31.2386,
              speedKmh: 68,
            },
          },
          mockResponse: {
            ok: true,
            data: {
              driverId: "DRV-22",
              status: "moving",
              lastUpdate: "2025-02-03T10:05:00Z",
            },
          },
        },
        {
          key: "customer_message",
          label: {
            ar: "رسالة تحديث العميل",
            en: "Customer update message",
          },
          method: "POST",
          path: "/messages",
          sampleBody: {
            ar: {
              tripId: "TRP-557",
              message: "وصلنا أول محطة ومكملين المسار.",
            },
            en: {
              tripId: "TRP-557",
              message: "We reached the stop and are continuing the route.",
            },
          },
          mockResponse: {
            ok: true,
            data: {
              messageId: "MSG-91",
              status: "sent",
            },
          },
        },
      ],
    },
  },
];

export default projects;
