import {createStore } from  'vuex'

import moduleB from './moduleB'

const moduleA = {
  state: {
    title:"最好的自己",
    msg:"星光不会留人，时间不负有心人"
  },
}
// 创建一个新的 store 实例
const store = createStore({
    //  全局共享的状态（数据）存放的地方
    state: {
        count: 1
    },
    // 同步提交数据的方法 ，也是唯一提交数据的方法
    mutations: {
        // 改方法是自定义的 
        //  该方法中又一个参数 state 全局状态
        // increment
      INCREMENT(state) {
        state.count++
      },
    //   deCrement
      DECREMENT(state){
          state.count--
      },
      ADD100(state,num){
        //   num 参数二是页面转递来的数据
        state.count +=num
      }
    },
    actions:{
        // 提交的操作
        increment(context) {
            //  context 可以的到 state 和对应的操作函数
            context.commit('INCREMENT')
          },
        //   deCrement
        deCrement({commit}){
            commit('DECREMENT')
          },
        add100({commit},num){
        setTimeout(()=>{
                commit('ADD100',num)
            },1000)
          }
    },

    modules:{
      moduleA,
      moduleB
    }
  })

//    导出 store对象
export default store