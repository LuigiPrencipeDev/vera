export default [
  {
    path: "/officina",
    name: "officina",
    component: () => import("./pages/OfficinaHome.vue"),
    children: [
      {
        path: "calendario",
        name: "officina-calendario",
        component: () => import("./pages/OfficinaCalendario.vue")
      },
      {
        path: "lavorazione",
        name: "officina-lavorazione",
        component: () => import("./pages/OfficinaLavorazione.vue")
      }
    ]
  }
]