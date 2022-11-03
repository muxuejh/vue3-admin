import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '成功',
        data: {
          name: '张三'
        }
      }
    }
  }
] as MockMethod[]
