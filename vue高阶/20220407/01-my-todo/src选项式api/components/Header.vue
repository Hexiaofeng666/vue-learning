<template>
  <!-- 头部 -->
  <div class="header">
    <input
      type="text"
      placeholder="请输入今天的任务清单，按回车键确认"
      @keyup.enter="addItem"
      v-model="title"
      
    />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
        tltle:''
    };
  },
  
  methods: {
      addItem(){
          console.log(this.tltle);
          // 1.取出输入框内容 .trim()去掉收尾空格
          const title = this.title.trim()
          // 2.判断用户输入的内容是否为空
          if(!title){
            alert('空！')
            return
          }
          // 3.生成要保存的对象
          const todo = {
            title,
            finished:false
          }
          // 4.添加，将对象传递到父组件
          this.$emit('addTodo',todo)
          // 5.清空输入框
          this.title = ''
      }
  },
};
</script>

<style scoped>
input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  outline: none;
}
input:focus {
  border-color: rgba(255, 0, 0, 0.8);
  box-shadow: 0 0 5px red;
}
</style>