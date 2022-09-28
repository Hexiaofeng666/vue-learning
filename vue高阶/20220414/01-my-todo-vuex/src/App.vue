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

<script setup>
// 1. 导入组件(后缀名要加上不然会报错)
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
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