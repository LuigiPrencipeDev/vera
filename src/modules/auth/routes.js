import AuthLayout from "../../layouts/AuthLayout.vue"
import Login from "./pages/Login.vue"

export default [
  {
    path: "/",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "login",
        component: Login
      }
    ]
  }
]