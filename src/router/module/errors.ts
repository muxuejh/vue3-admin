import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/error',
  name: 'error',
  component: () => import('../../layouts/error.vue'),
  meta: { title: '错误页面', icon: 'fas fa-baseball-ball', show: true },
  children: [
    {
      path: '404',
      name: 'error.404',
      component: () => import('../../views/errors/404.vue'),
      meta: { title: '404页面', show: true }
    },
    {
      path: '403',
      name: 'error.403',
      component: () => import('../../views/errors/403.vue'),
      meta: { title: '403页面', show: true }
    },
    {
      path: '500',
      name: 'error.500',
      component: () => import('../../views/errors/500.vue')
    }
  ]
} as RouteRecordRaw
