import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import _ from 'lodash'

export function setupPlugins(app: App) {
  setupTailwindcss()
  autoRegisterComponent(app)
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
