import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '成功',
        type: 'success',
        data: {
          name: '张三',
          age: 18,
          avatar: '/images/bg.jpg'
        }
      }
    }
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '登录成功',
        type: 'success',
        data: {
          token: Random.string(10)
        }
      }
    }
  }
] as MockMethod[]
