import { App } from 'vue'
import _ from 'lodash'
import { setupTailwindcss } from './tailwindcss'
import setupElementPlus from './elementui'
import setupPinia from './pinia'

export function setupPlugins(app: App) {
  autoRegisterComponent(app)
  setupTailwindcss()
  setupElementPlus(app)
  setupPinia(app)
}

/**
 * 自动注册全局组件
 * @param app
 */
function autoRegisterComponent(app: App) {
  const components = import.meta.glob('../components/from/*.vue', { eager: true })

  Object.entries(components).forEach(([key, module]) => {
    const name = key.split('/').pop()?.split('.').shift()
    app.component(_.camelCase(name), (module as any).default) // (module as any).default 组件的路径
  })
}
