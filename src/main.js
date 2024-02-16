import './assets/main.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon } from 'oh-vue-icons'
import '@/includes/vueIcons'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ToastPlugin)
app.component('v-icon', OhVueIcon)
app.mount('#app')
