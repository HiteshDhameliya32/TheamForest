import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/routes.js'
import VueWriter from "vue-writer";
import { BootstrapVueNext } from 'bootstrap-vue-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import "@/assets/css/materialdesignicons.min.css";

import '@/assets/scss/style.scss'
import '@/assets/css/style.css'
import '@/assets/css/color/default.css'

createApp(App)
    .use(VueWriter)
    .use(BootstrapVueNext)
    .use(routes)
    .mount('#app')
