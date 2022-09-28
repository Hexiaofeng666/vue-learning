<template>
  <!-- 头部 -->
  <div class="header">
    <input
      type="text"
      v-model="title"
      placeholder="请输入今天的任务清单，按回车键确认"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script setup>
import { inject, ref } from "vue";

import { useStore } from 'vuex'
const store = useStore()

// 订阅添加的方法
// const addTodo = inject("addTodo");

// 定义属性和方法
let title = ref("");
const addItem = () => {
//   console.log(this.title);
  // 1. 取出输入框内容 .trim()去掉首尾空格
  const content = title.value.trim();
  // 2. 判断用户输入的内容是否为空
  if (!content) {
    alert("输入的内容不能为空，请输入内容");
    return;
  }
  // 3. 生成要保存的数据对象
  const todo = {
    title: content,
    finished: false,
  };
  // 4. 添加，将对象传递到父组件
  // this.$emit('addTodo',todo)
  // addTodo(todo);
  store.dispatch('addTodo', todo)

  // 5. 清空输入框
  title.value = "";
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
