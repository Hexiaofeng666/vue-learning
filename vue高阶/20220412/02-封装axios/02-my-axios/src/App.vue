<script setup>
import ajax from './api/index'
import { reactive } from 'vue'

const state = reactive({

})


function getReq(){
  // 发送一个 get 请求
  ajax('/getUser',{name: '友力'},'get')
  .then(res =>{
    // 处理成功后的代码
    console.log(res);
    state.getData = res.data
  })
  .catch(err => {
    // 处理错误信息
    console.log(err);
  })
  .then(()=>{
    // 请求结束，总是会被执行
  })
}

function postReq(){

  // 格式化参数，不然请求传参会请求失败
  const data = new URLSearchParams({name: '招燚'})
  // 加入内容
  data.append('obj', '幂')

  // 发送一个 post 请求
  ajax('/postUser', data,'post')
  .then(res =>{
    // 处理成功后的代码
    console.log(res);
    state.postData = res.data
  })
  .catch(err => {
    // 处理错误信息
    console.log(err);
  })
  .then(()=>{
    // 请求结束，总是会被执行
  })
}



</script>

<template>
<div>
  <p>{{ state.getData }}</p>
    <button @click='getReq'> 发送一个 get 请求 </button>
    <hr>
     <p>{{ state.postData }}</p>
    <button @click='postReq'> 发送一个 post 请求 </button>
    <hr>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
