import { App } from 'vue'
import * as components from './components'
import version from './version';

export { version };

export * from './components'

export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    const component = (components as { [key: string]: any })[key]
    if (component.install) {
      app.use(component)
    }
  })

  return app
}

export default {
  version: '1.0.0',
  install,
}
