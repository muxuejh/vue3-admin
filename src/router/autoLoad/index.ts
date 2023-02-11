import { RouteRecordRaw } from 'vue-router'
import util from '../../utils'
import getRoutes from './view'
import autoLoadModuleRoutes from './module'

let routes = [] as RouteRecordRaw[]
if (util.env.VITE_ROUTER_AUTOLOAD) {
  routes = getRoutes()
} else {
  routes = autoLoadModuleRoutes()
}

export default routes
