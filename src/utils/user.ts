import userApi, { ILoginData } from '../apis/userApi'
import { CacheEnum } from '../enum/cacheEnum'
import router from '../router'
import storage from './storage'
import userStore from '../store/userStore'

export async function login(values: ILoginData) {
  const {
    data: { token }
  } = await userApi.login(values)
  // localStorage.setItem('token', token)

  storage.set(CacheEnum.TOKEN_NAME, { token })
  const routeName = storage.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? 'home'
  router.replace({ name: routeName })
}

export function logout() {
  storage.remove(CacheEnum.TOKEN_NAME)
  router.push('/')
  userStore().info = null
}
