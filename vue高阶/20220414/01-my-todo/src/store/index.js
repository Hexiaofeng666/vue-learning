import {createStore} from 'vuex'

// 数据
import state from './state'
// 操作数据的方法
import mutations from './mutations'
import actions from './actions'
const store = createStore({
    state,
    mutations
})

export default store