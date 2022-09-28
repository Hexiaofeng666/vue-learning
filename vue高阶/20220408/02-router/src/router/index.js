// 导入组件
// 1.定义路由组件
// 也可以从其他文件导入
// import Home from '../pages/Home.vue'
// import News from '../pages/News.vue'
// import Info from '../pages/Info.vue'
// import Main from '../pages/Main.vue'

// 路由懒加载
// 用到该路由后再做加载，用不到先不加载
const Home = () => import('../pages/Home.vue')
const News = () => import('../pages/News.vue')
const Info = () => import('../pages/Info.vue')
const Main = () => import('../pages/Main.vue')




/*  
    createWebHistory
    History路由模式
    路由路径前面没有#井号，它是h5新增的api，只能兼容ie10后的浏览器
    前面是 / 所以可能会导致变为get请求，然后就会导致页面显示异常
    ---------------------------
    createWebHashHistory,
    Hash路由模式
    路径前面有一个#，只会解析#后面的路径，不会进行数据请求
    
*/
import {
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router'

// 2.定义一些路由
// 每个路由都需要映射到一个组件
// 我们后面再讨论嵌套组件
const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: ()=>import('../pages/Home.vue')
    },
    {
        // 让它支持且可以传递参数
        path: '/news/:id',
        component: News
    },
    {
        path: '/info',
        component: Info
    },
    {
        path: '/main',
        component: Main
    },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
    // 设置全局选中后的class
    linkActiveClass:'current'
})

// 导出路由
export default router