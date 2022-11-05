import { http } from '../plugins/axios'

export interface User {
  name: string
}
function info() {
  return http.request<User>({
    url: 'info'
  })
}

interface LoginInterface {
  token: string
}
function login() {
  return http.request<LoginInterface>({
    url: 'login'
  })
}

export default { info, login }
