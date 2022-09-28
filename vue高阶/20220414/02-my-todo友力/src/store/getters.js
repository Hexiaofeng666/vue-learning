export default {
    // 已经标记完成的数量 tode 数量

      // 计算属性
    finishedCount(state){
        return state.todos.reduce((total, todo)=>{
            return total + (todo.finished ? 1 : 0)
        }, 0)
    },

    isChecked(state,getters){

        return  getters.finishedCount== state.todos.length ? true :  false
        // get(){
        //     // 此处要加一个 .value
        //     return store.finishedCount.value == store.todos.length ? true :  false
        // } ,
        // set(value){
        //     // 全选了
        //     selectedAllTodo(value)
        // }
    }
}