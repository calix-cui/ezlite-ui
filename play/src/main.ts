import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

// 部分注册 EZLite
import configEZLite from './configEZLite'
app.use(configEZLite)

// 全局注册 EZLite
// import EZLite from 'ezlite'
// app.use(EZLite as any)

// 部分注册 Ant Design
// import configAntD from './configAntD'
// app.use(configAntD)

// 全局注册 Ant Design
import AntD from 'ant-design-vue'
app.use(AntD)

app.use(createPinia())
app.use(router)

app.mount('#app')
