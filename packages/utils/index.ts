export default () => {
  console.log('我是 @ezlite/utils 包')
}

import { App, Plugin } from 'vue'
type SFCWithInstall<T> = T & Plugin

export const mountInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    app.component((component as any).name, component as SFCWithInstall<T>)
  };

  return component as SFCWithInstall<T>
}
