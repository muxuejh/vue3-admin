import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('../../layouts/admin.vue'),
  meta: { auth: true, menu: { title: '编辑器', icon: 'fas fa-baseball-ball' } },
  children: [
    {
      name: 'markdown',
      path: 'markdown',
      component: () => import('../../views/editor/markdown.vue'),
      meta: { menu: { title: 'markdown' } }
    },
    {
      name: 'base',
      path: 'base',
      component: () => import('../../views/editor/base.vue')
    }
  ]
} as RouteRecordRaw
