import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 配置跨域
    proxy: {
      // 字符串简写写法
      '/api': 'http://capi.douyucdn.cn',
      
    }
  }
})
