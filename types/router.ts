import 'vue-router'
import { IMenu } from './menu'

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    permissions?: string[] // 访问权限
    menu?: IMenu
  }
}
