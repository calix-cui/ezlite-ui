// 部分引入
// import { Button, Calendar } from '@ezlite/components'
import { Button, Calendar } from 'ezlite'

import 'ezlite/es/style.css'

import type { App } from 'vue'

const components = [Button, Calendar]

const install = (app: App) => {
  components.forEach((component: any) => {
    app.use(component)
    // app.component(component.name, component)
  })
}

export default {
  install,
}
