import type { App } from 'vue'
import Calendar from './Calendar.vue'

Calendar.install = (app: App) => {
  app.component((Calendar as any).name, Calendar)
}

export default Calendar
