import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/error',
  name: 'error',
  component: () => import('../../layouts/admin.vue'),
  meta: { auth: true, menu: { title: '错误页面', icon: 'fas fa-baseball-ball' } },
  children: [
    {
      path: '404',
      name: 'error.404',
      component: () => import('../../views/errors/404.vue'),
      meta: { menu: { title: '404页面' } }
    },
    {
      path: '403',
      name: 'error.403',
      component: () => import('../../views/errors/403.vue'),
      meta: { menu: { title: '403页面' } }
    },
    {
      path: '500',
      name: 'error.500',
      component: () => import('../../views/errors/500.vue'),
      meta: { menu: { title: '500页面' } }
    }
  ]
} as RouteRecordRaw
