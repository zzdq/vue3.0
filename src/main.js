import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css


const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.use(router)
app.mount('#app')
