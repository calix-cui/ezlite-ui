import { Menu, MenuItem, Button, Divider, Dropdown, Calendar } from 'ant-design-vue'

import type { App } from 'vue'

const components = [Menu, Button, Divider, Dropdown, Calendar]

const install = (app: App) => {
  components.forEach((component: any) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
