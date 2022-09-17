## 创建项目

1. yarn create vite
2. 输入项目名
3. 选择 vue
4. 选择 typescript
5. 进入项目中 yarn 安装依赖
6. yarn dev 启动

## 优化路由定义

router > index.ts

```ts
export function setupRouter(app: App) {
  app.use(router)
}

export default router
```

main.ts

```ts
import router, { setupRouter } from './router'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  await router.isReady() // 路由处理好后再挂载页面
  app.mount('#app')
}

bootstrap()
```
