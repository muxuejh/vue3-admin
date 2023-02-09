import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    show?: boolean // 路由是否在菜单中显示
    title?: string // 菜单标题
    icon?: string
    isClick?: boolean
  }
}
