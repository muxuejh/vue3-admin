import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router, { setupRouter } from '@/router'

async function bootstrap() {
  const app = createApp(App)

  setupRouter(app)
  // app.use(router)
  await router.isReady() // 路由处理好后再挂载页面
  app.mount('#app')
}

bootstrap()
