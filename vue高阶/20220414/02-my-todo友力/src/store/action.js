import {
    ADD_TOD0,
    DEL_TODO_WITH_INDEX,
    SELECTED_ALL_TODo,
    DEL_FINISHED__TODos
} from './mutations-type'

export default {
    addTode({commit},todo){
        commit(ADD_TOD0,todo)
    },

    delTodoWithIndex({commit},index){
        commit(DEL_TODO_WITH_INDEX,index)
    },
    selectedAllTodo({commit},isChecked){
    commit( SELECTED_ALL_TODo,isChecked)
    },
    delFinishedTodos({commit}){
        commit( DEL_FINISHED__TODos)
    }
}