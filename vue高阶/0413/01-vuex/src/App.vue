<script setup>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

import { useStore } from 'vuex'

// 获取到 store 对象
const store = useStore()

const add = ()=>{
  // console.log(store);
  // 虽然可以进行修改数据
  // 但是不要这么去做，因为组件如果比较多管理起来就会非常混乱
  // 而且还违背了单向数据流的模块
  // store.state.count++
  // 调用 mutations 中的修改方法，该方法是同步的
  // store.commit('INCREMENT')
  // 调用 actions 中的修改方法，该方法是异步的
  store.dispatch('increment')

}
function sub(){
  // store.commit('decrement')
  store.dispatch('decrement')
}

function add100(){
  // store.commit('ADD100', 100)
  store.dispatch('add100', 1000)
}
</script>

<template>
  
  <div>
    <button @click="add"> 增加 </button>
    <button @click="sub"> 减少 </button>
    <button @click="add100"> 增加 100 </button>
    <hr>
    <h1>首页中 count 值：{{ $store.state.count }}</h1>
    <hr>
    <Header></Header>
    <Main></Main>
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
