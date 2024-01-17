import { createApp } from "vue/dist/vue.esm-bundler";
import router from './router'
import App from './App.vue'
import './style/index.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
