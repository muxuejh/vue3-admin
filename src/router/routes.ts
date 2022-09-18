import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  }
] as RouteRecordRaw[] // 断言会有更好的类型提示

export default routes
