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
function login(data) {
  return http.request<LoginInterface>({
    url: 'login',
    method: 'post',
    data
  })
}

export default { info, login }
