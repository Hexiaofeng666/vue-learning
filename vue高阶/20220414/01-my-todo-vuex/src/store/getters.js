export default {
    // 获取已经标记完成的 todo 数量
    finishedCount(state){
        return state.todos.reduce((total, todo)=>{
            return total + (todo.finished ? 1 : 0)
        }, 0)
    },
    isChecked(state, getters){
        return getters.finishedCount == state.todos.length ? true :  false
    }
}