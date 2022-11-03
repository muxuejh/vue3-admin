/**
 * 转换 env 环境变量类型
 * @param env
 */
import _ from 'lodash'

export function parseEnv(env: Record<string, any>): ViteEnv {
  const envs: any = _.cloneDeep(env)

  Object.entries(env).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') {
      envs[key] = value == 'true' ? true : false
    }

    // 如果是数字类型
    else if (/^\d+$/.test(value)) envs[key] = Number(value)
    else if (value == 'null') envs[key] = null
    else if (value == 'undefined') envs[key] = undefined
  })
  return envs
}
