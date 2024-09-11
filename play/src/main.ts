import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import configAntD from './configAntD'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(configAntD)
app.use(createPinia())
app.use(router)

app.mount('#app')
