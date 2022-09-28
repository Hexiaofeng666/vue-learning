import { createStore } from 'vuex'


// 创建一个新的 store 实例
const store = createStore({
    // 在开发环境下开启严格模式，在生产环境中(发布环境)不开启
    strict: process.env.NODE_ENV !== 'production',
    // 全局共享的状态(数据)存放的地方
    state: {
        count: 1
    },
    // 同步提交状态(数据)的方法(唯一提交状态的方法)
    mutations: {
        // 修改数据的方法，该方法是自己定义的
        // 该方法中有一个参数是 state 全局状态
      INCREMENT (state) {
        state.count++
      },
      DECREMENT (state) {
        state.count--
      },
    //  参数二是页面中调用传递的数据
      ADD100 (state, num){
        //   同步中无法使用异步操作
        // setTimeout(()=>{
            state.count += num
        // },1000)
      }
    },
    // 提交操作
    actions: {
        increment (context) {
            // context 可以得到 state 和对应的操作函数
            console.log(context);
            context.commit('INCREMENT')
          },
        decrement ({commit}) {
            commit('DECREMENT')
          },
          add100 ({commit}, num){
            setTimeout(()=>{
                commit('ADD100', num)
            },1000)
          }
    }
  })




// 导出 store 对象
export default store
