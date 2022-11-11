import { RouteLocationNormalized, Router } from 'vue-router'
import { storage } from '../utils'

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach((to, from) => {
      // console.log(to.meta)

      const token = storage.get('token')?.token

      if (this.isLogin(to, token) === false) return { name: 'login' }

      if (this.isGuest(to, token) === false) return from
    })
  }

  // 是否为游客
  private isGuest(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.guest || (route.meta.guest && !token))
  }

  private isLogin(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.auth || (route.meta.auth && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
