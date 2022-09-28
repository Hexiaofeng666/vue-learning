<template>
  <div>
    <h1> 备忘录 </h1>
    <div class="container">
      <div class="wrap">
        <!-- 头部 -->
        <!-- 3. 使用组件 -->
        <Header />

        <!-- 列表部分 -->
        <List />
        
        <!-- 页脚部分 -->
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
// 1. 导入组件(后缀名要加上不然会报错)
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

// 导入
import { reactive, provide } from 'vue'

// 2. 定义且导出模块
export default {
  name: 'app',
  setup() {

    let todos = reactive([
        { id: 1, title: '陪友力吃火锅', finished: false },
        { id: 2, title: '陪甘泉聊天', finished: true },
        { id: 3, title: '陪小南写代码', finished: true },
        { id: 4, title: '更新 B 站视频', finished: false },
        { id: 5, title: '美美的睡一觉', finished: false },
      ])

      // 提供给子组件使用的方法
      // 添加一条记录的方法
    const addTodo = (todo)=>{
      console.log(todo);
      todo.id = todos.length + 1 + Math.random()
      // todo.id = todos.length + 1
      // 将最新数据加到后面去
      // this.todos.push(todo)
      // 将最新的数据加到前面去
      todos.unshift(todo)
      console.log(todos);
    }
    // 通过索引值来删除记录
    const delTodoWithIndex = (index)=>{
      todos.splice(index, 1)
    }
    // 全选和取消全选
    const selectedAllTodo = (isChecked)=>{
      todos.forEach((todo)=>{
        todo.finished = isChecked
      })
    }
    // 清除已完成的 todo
    const delFinishedTodos = ()=>{
      console.log(todos);
      // var arr = []
      [...todos].forEach((item,index)=>{
        // console.log(item);
        if (item.finished == true) {
          delitem(item.id)
        }
      })
     
      // console.log(todos.length);
      // for (let i = 0; i < todos.length; i++) {
      //   console.log(todos[i]);
      // }
      // todos = todos.filter((todo)=>{
      //   console.log(todo);
      //   // 为 true 的我们留着，为 false 的我们删除掉
      //   // !todo.finished 取反，为真的时候将其设置为假
      //   return !todo.finished
      // })
      // console.log(todos);
    }
   // 删除的事件
    const delitem=(num)=> {
      // console.log(num);
      for (let i = num; i < todos.length; i++) {
        todos[i].id = todos[i].id - 1;
      }
      todos.splice(num - 1, 1);
      // console.log(this.todos);
    }
    // 发布
    provide('todos', todos)
    provide('addTodo', addTodo)
    provide('delTodoWithIndex', delTodoWithIndex)
    provide('selectedAllTodo', selectedAllTodo)
    provide('delFinishedTodos', delFinishedTodos)
  },
  methods: {
    
  },
  components: {
    Header,
    List,
    Footer
  }
}
</script>


<style >
  /* <style scoped> */
  /* scoped 标记 该样式只应用于当前组件 */
h1 {
  text-align: center;
}
.container {
  width: 600px;
  margin: 0 auto;
}
.wrap {
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
}
button {
  display: inline-block;
  padding: 4px 10px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  color: white;
  background-color: orange;
  border: none;
}
</style>