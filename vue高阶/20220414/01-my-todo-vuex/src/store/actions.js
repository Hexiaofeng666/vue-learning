import {
    ADD_TODO,
    DEL_TODO_WITH_INDEX,
    SELECTED_ALL_TODO,
    DEL_FINISHED_TODOS
} from './mutations-type'

export default {
    // 添加一条数据
    addTodo({ commit }, todo) {
        commit(ADD_TODO, todo)
    },
    // 通过索引值来删除记录
    delTodoWithIndex({ commit }, index) {
        commit(DEL_TODO_WITH_INDEX, index)
    },
    // 全选和取消全选
    selectedAllTodo({ commit }, isChecked) {
        commit(SELECTED_ALL_TODO, isChecked)
    },
    // 清除已完成的 todo
    delFinishedTodos({ commit }) {
        commit(DEL_FINISHED_TODOS)
    }
}