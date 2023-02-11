import path from 'path'
import { AliasOptions } from 'vite'

const alias = {
  '@': path.resolve(__dirname, '../src'), // 设置 src 目录别名
  '#': path.resolve(__dirname, '../types')
} as AliasOptions

export default alias
