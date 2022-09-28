<template>
  <div>
    <h1> 备忘录 </h1>
    <div class="container">
      <div class="wrap">
        <!-- 头部 -->
        <!-- 3. 使用组件 -->
        <Header @addTodo='addTodo'></Header>

        <!-- 列表部分 -->
        <List
          :todos = 'todos'
          :delTodoWithIndex='delTodoWithIndex'
        ></List>
        
        <!-- 页脚部分 -->
        <Footer :selectedAllTodo='selectedAllTodo' :todos='todos' :delFinishedTodos='delFinishedTodos'></Footer>
      </div>
    </div>
  </div>
</template>

<script>
// 1. 导入组件(后缀名要加上不然会报错)
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'


// 2. 定义且导出模块
export default {
  name: 'app',
  data() {
    return {
      todos: [
        { id: 1, title: '陪友力吃火锅', finished: false },
        { id: 2, title: '陪甘泉聊天', finished: true },
        { id: 3, title: '陪小南写代码', finished: true },
        { id: 4, title: '更新 B 站视频', finished: false },
        { id: 5, title: '美美的睡一觉', finished: false },
      ]
    }
  },
  components: {
    Header,
    List,
    Footer
  },
  methods: {
    // 添加一条记录的方法
    addTodo(todo){
      console.log(todo);
      todo.id = this.todos.length + 1
      // 加到后面
      // this.todos.push(todo)
      // 加到前面
      this.todos.unshift(todo)
    },
    // 通过索引值删除记录
    delTodoWithIndex(index){
      this.todos.splice(index,1)
    },
    // 全选和取消全选
    selectedAllTodo(isChecked){
      this.todos.forEach((todo)=>{
        todo.finished = isChecked
      })
    },
    // 清除已完成的todo
    delFinishedTodos(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.finished
      })
    }
  },
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