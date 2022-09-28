<template>
  <!-- 页脚部分 -->
  <div class="footer">
    <label for="">
      <input type="checkbox"  v-model="isChecked" />
    </label>
    <span>
      <span> 已完成 {{finishedCount}} 件 </span>
      /
      <span> 总计 {{todos.length}} 件 </span>
    </span>
    <button @click="delFinishedTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "footers",

  props: {
    selectedAllTodo: Function,
    todos:Array,
    delFinishedTodos:Function
  },
  methods: {
    // changechoose(str) {
    //   console.log(str);
    // },
  },
  computed:{
      finishedCount(){
          return this.todos.reduce((total,todo)=>{
              return total + (todo.finished ? 1 : 0)
            //   后面的0是total的默认值
          },0)
      },
      isChecked:{
          get(){
              console.log(this.finishedCount == this.todos.length);
              return this.finishedCount == this.todos.length
          },
          set(value){
            //   全选了
            console.log(value);
            this.selectedAllTodo(value)
          }
      }
  }
};
</script>

<style scoped>
.footer {
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
  margin-top: 8px;
}
.footer > button {
  float: right;
  margin-top: 8px;
}
</style>