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
        component: () =>
          import("@/modules/officine/pages/ContainerOfficina.vue"),
        children: [
          {
            path: "", // ✅ CORRETTO
            name: "officina-home",
            component: () =>
              import("@/modules/officine/pages/OfficinaHome.vue"),
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
        path: "dipendenti",
        /* component: () => import("@/modules/noteSpese/pages/NoteSpeseContainer.vue"), */
        children: [
          {
            path: "", // ✅ CORRETTO
            name: "dipendenti",
            /* component: () => import("@/modules/noteSpese/pages/NoteSpeseHome.vue"), */
          },
          {
            path: "nuovo-dipendente", // ✅ CORRETTO
            name: "nuovo-dipendente",
            /* component: () => import("@/modules/noteSpese/pages/NoteSpeseHome.vue"), */
          },
          {
            path: "timbratore", // ✅ CORRETTO
            name: "timbratore",
            /* component: () => import("@/modules/noteSpese/pages/NoteSpeseApp.vue"), */
          },
          {
            path: "presenze", // ✅ CORRETTO
            name: "presenze",
            /* component: () => import("@/modules/noteSpese/pages/NoteSpeseApp.vue"), */
          },
          {
            path: "calendario-ferie-permessi", // ✅ CORRETTO
            name: "calendario-ferie-permessi",
            /* component: () => import("@/modules/noteSpese/pages/NoteSpeseApp.vue"), */
          },
          {
            path: "note-spese", // ✅ CORRETTO
            name: "note-spese",
            /* component: () => import("@/modules/noteSpese/pages/NoteSpeseApp.vue"), */
          },
          /*{
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
