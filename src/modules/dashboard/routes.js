import DashboardLayout from "./layout/DashboardLayout.vue"
import Overview from "./pages/Overview.vue"

export default [
{
  path: "/dashboard",
  component: DashboardLayout,
  children: [
    {
      path: "",
      name: "overview",
      component: Overview
    }
  ]
}
]