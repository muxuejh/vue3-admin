import path from 'path'
import { AliasOptions } from 'vite'

// 设置 src 目录别名
const alias = { '@': path.resolve(__dirname, '../src') } as AliasOptions

export default alias
