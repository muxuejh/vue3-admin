/**
 * 自动注册路由
 */

import { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.glob('../layouts/*.vue', { eager: true }) // vite 提供的 api,获取 layouts 下的全部 vue 文件
// console.log(layouts)
const views = import.meta.glob('../views/**/*.vue', { eager: true }) // ** 表示可以获得子目录
// console.log(views)

// 获取布局路由
function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file, module]) => {
    // console.log(file, module)
    const route = getRouteByModule(file, module as any)
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}

// 获取布局路由的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  // console.log(layoutRoute)
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    // console.log(file)
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      // console.log(file)
      const route = getRouteByModule(file, module as any)
      // console.log(route)
      routes.push(route)
    }
  })
  return routes
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
  // console.log(file, module)
  // console.log(file.split('/').pop()?.split('.')[0])
  // console.log(file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i)?.groups?.name)
  // console.log(file.replace(/.+layouts\/|\.vue/gi, ''))
  // 上面三种方法有同样的效果

  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    path: `/${name}`,
    name: name.replace('/', '.'),
    component: module.default
  } as RouteRecordRaw

  // console.log('@module', module.default)

  // return route
  // 如果页面中有定义路由就合并
  return Object.assign(route, module.default?.route)
}

export default getRoutes()
