import {
    createApp
} from 'vue'
import App from './App.vue'

// 导入路由对象，将路由对象挂载到app中
import router from './router/index'

createApp(App)
// 将路由挂载到app中
.use(router)
.mount('#app')