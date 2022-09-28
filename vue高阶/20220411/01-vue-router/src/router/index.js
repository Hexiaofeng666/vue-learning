// 导入组件
// 1. 定义路由组件.
// 也可以从其他文件导入
// import Home from '../pages/Home.vue'
// import News from '../pages/News.vue'
// import Info from '../pages/Info.vue'
// import Main from '../pages/Main.vue'

// 路由的懒加载
// 用到该路由后再做加载，用不到先不加载
const Home = () => import('../pages/Home.vue')
const News = () => import('../pages/News.vue')
const Info = () => import('../pages/Info.vue')
const Main = () => import('../pages/Main.vue')
const NewsDetail = () => import('../pages/NewsDetail.vue')
/*
    createWebHistory: 
    History 路由模式
    路由路径前面没有 # 井号，它是 h5 新增的 api,只能兼容 ie10 后的 ie 浏览器
    前面是 / 所以可能会导致变为 get 请求，然后就会导致页面显示异常
    --------------------------------

    createWebHashHistory: 
    Hash 路由模式
    路径前面会有一个 # 井号，只会解析 # 号后面的路径，不会进行数据请求


*/ 
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    // 路由重定向
    { path: '/', redirect: '/home' },
    { 
      path: '/home', 
      component: () => import('../pages/Home.vue') ,
      meta:{title:'首页',keepAlive:true},
      beforeEnter: (to, from) => {
        // 路由独享守卫
        // reject the navigation 返回 false 以取消导航
        // return false
      },
    },
    { path: '/news/:id', component: News ,meta:{title:'新闻'}},
    { path: '/info', component: Info ,meta:{title:'信息'}},
    { 
     path: '/main',
     component: Main ,
     meta:{title:'我的',keepAlive:false},
    //  children用来配置子路由，配置路由嵌套用的
    children:[
      {path:'/main',redirect:'/main/msg'},
      {path:'msg',component:() => import('../pages/MainMsg.vue'),meta:{title:'我的消息'} },
      {path:'order',component:() => import('../pages/MainOrder.vue'),meta:{title:'我的订单'} }
    ]
    },
    { path:'/newsdetail', component:NewsDetail,meta:{title:'新闻详情'}},
  ]

  // 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
    // 设置全局选中后的 class
    linkActiveClass: 'current'
  })


// -------------路由守卫--------------------
router.beforeEach((to, from, next) => {
  console.log('从哪里来' + from);
  console.log('到哪里去' +to);

  document.title = to.meta.title
  // 开门放行
  next()
})
// ----------全局解析守卫--------------------
router.beforeResolve(async to => {
  if (to.meta.requiresCamera) {
    try {
      await askForCameraPermission()
    } catch (error) {
      if (error instanceof NotAllowedError) {
        // ... 处理错误，然后取消导航
        return false
      } else {
        // 意料之外的错误，取消导航并把错误传给全局处理器
        throw error
      }
    }
  }
})
// -------------------后置守卫--------------
router.afterEach((to, from) => {
  // sendToAnalytics(to.fullPath)

  // 进入组件之后设置标题
  document.title = to.meta.title
})







//  导出路由
export default router