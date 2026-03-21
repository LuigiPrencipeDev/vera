import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from "@/modules/auth/routes"
import dashboardRoutes from "@/modules/dashboard/routes"
/* import officinaRoutes from "@/modules/officine/officine.routes" */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoutes,
    ...dashboardRoutes,
    /* ...officinaRoutes */
  ],
})

export default router
