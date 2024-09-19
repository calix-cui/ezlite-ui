import type { App } from 'vue'
import Button from './Button.vue'

Button.install = (app: App) => {
  app.component((Button as any).name, Button)
}

export default Button
