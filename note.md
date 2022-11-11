# 存在的问题

- 使用 @ 别名报错且没有提示，但能正常使用

- 引入 '@vee-validate/i18n/dist/locale/zh_CN.json' 报错但能正常使用

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

## 设置 src 别名

1. 安装插件
   ```shell
    yarn add -D path
    yarn add -D @types/node // 类型支持
   ```
2. 在 vite.config.ts 中配置

   ```ts
   import path from 'path'

   export default defineConfig({
     ...
     // 设置别名
     resolve: {
       alias: { '@': path.resolve(__dirname, 'src') }
     }
   })
   ```

之后就可以使用 @ 代表 src 目录了

## 自动注册路由

import.meta.glob 批量引入文件（可用于自动注册路由，不用手动的生明路由和组件的映射关系）
Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块

```js
const modules = import.meta.glob('./src/*.js')
```

以上将会被转译为下面的样子：

```js
// vite 生成的代码
const modules = {
  './src/foo.js': () => import('./src/foo.js'),
  './src/bar.js': () => import('./src/bar.js')
}
```

匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。

## 第三方库的类型支持

yarn add lodash 安装 lodash 之后没有提示 还使用 yarn add -D @types/lodash 命令安装，就会有提示，其他库应该也是如此

## 表单验证
