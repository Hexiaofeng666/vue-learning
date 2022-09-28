import { createStore } from 'vuex'
// 数据
import state from './state'
// 操作数据的方法
import mutations from './mutations'

import actions from './actions'

import getters from './getters'

const store = createStore({
    state,
    mutations,
    actions,
    getters
})



export default store