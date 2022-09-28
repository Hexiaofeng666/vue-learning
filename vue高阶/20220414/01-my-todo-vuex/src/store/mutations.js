
import {
    ADD_TODO,
    DEL_TODO_WITH_INDEX,
    SELECTED_ALL_TODO,
    DEL_FINISHED_TODOS
} from './mutations-type'
export default {
    // 提供给子组件使用的方法
    // 添加一条记录的方法
    // [ADD_TODO](todo)
    // 等价于 add_todo(todo)
    // ADD_TODO(todo)
    [ADD_TODO](state, todo) {
        console.log(todo);
        todo.id = state.todos.length + 1 + Math.random()
        // 将最新数据加到后面去
        // this.todos.push(todo)
        // 将最新的数据加到前面去
        state.todos.unshift(todo)
    },
    // 通过索引值来删除记录
    [DEL_TODO_WITH_INDEX](state, index) {
        state.todos.splice(index, 1)
    },
    // 全选和取消全选
    [SELECTED_ALL_TODO](state, isChecked) {
        // console.log(isChecked);
        state.todos.forEach((todo) => {
            todo.finished = isChecked
        })
    },
    // 清除已完成的 todo
    [DEL_FINISHED_TODOS](state) {
        // 直接重新赋值内容，这时的数据是不具备响应式的
        // 因为直接赋值的数据没有通过 reactive
        // todos = todos.filter((todo)=>{
        // 为 true 的我们留着，为 false 的我们删除掉
        // !todo.finished 取反，为真的时候将其设置为假
        //   return !todo.finished
        // })
        // 通过 for 循环通过 splice 解决此问题
        console.log(state.todos);


        // 第一个被删除掉之后，第二个的索引值会变成 0，会导致第二个删除不掉
        // for(let i = 0; i < todos.length; i++){
        //   if(todos[i].finished){
        //     todos.splice(i, 1)
        //   }
        // }

        for (let i = state.todos.length - 1; i >= 0; i--) {
            if (state.todos[i].finished) {
                state.todos.splice(i, 1)
            }
        }

    }
}






