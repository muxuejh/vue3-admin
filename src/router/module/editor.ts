import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('../../layouts/editor.vue'),
  meta: { title: '编辑器', icon: 'fas fa-baseball-ball', show: true },
  children: [
    {
      name: 'markdown',
      path: 'markdown',
      component: () => import('../../views/editor/markdown.vue'),
      meta: { title: '404页面', show: true }
    },
    {
      name: 'base',
      path: 'base',
      component: () => import('../../views/editor/base.vue')
    }
  ]
} as RouteRecordRaw
