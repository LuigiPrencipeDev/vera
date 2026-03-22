import DashboardLayout from "./layout/DashboardLayout.vue";

export default [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/modules/dashboard/pages/Overview.vue"),
      },
      {
        path: "notifiche",
        name: "notifiche",
        component: () => import("@/modules/dashboard/pages/Notifiche.vue"),
      },
      {
        path: "agenda",
        name: "agenda",
        component: () => import("@/modules/dashboard/pages/Agenda.vue"),
      },

      {
        path: "officina",
        component: () => import("@/modules/officine/pages/ContainerOfficina.vue"),
        children: [
          {
            path: "", // ✅ CORRETTO
            name: "officina-home",
            component: () => import("@/modules/officine/pages/OfficinaHome.vue"),
          },
          {
            path: "calendario", // ✅ CORRETTO
            name: "officina-calendario",
            component: () =>
              import("@/modules/officine/pages/OfficinaCalendario.vue"),
          },
          {
            path: "lavorazione", // ✅ CORRETTO
            name: "officina-lavorazione",
            component: () =>
              import("@/modules/officine/pages/OfficinaLavorazione.vue"),
          },
        ],
      },
      {
        path: "note-spese",
        component: () => import("@/modules/noteSpese/pages/NoteSpeseContainer.vue"),
        children: [
           {
            path: "", // ✅ CORRETTO
            name: "note-spese-home",
            component: () => import("@/modules/noteSpese/pages/NoteSpeseHome.vue"),
          },
          /*{
            path: "calendario", // ✅ CORRETTO
            name: "officina-calendario",
            component: () =>
              import("@/modules/officine/pages/OfficinaCalendario.vue"),
          },
          {
            path: "lavorazione", // ✅ CORRETTO
            name: "officina-lavorazione",
            component: () =>
              import("@/modules/officine/pages/OfficinaLavorazione.vue"),
          }, */
        ],
      },
    ],
  },
];
