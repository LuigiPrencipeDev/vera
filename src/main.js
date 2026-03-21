import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"

// 👇 AG GRID
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

/* import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
 */
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")