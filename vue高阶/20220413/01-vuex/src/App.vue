<template>
  <div>
    <button @click="add">增加</button>
    <button @click="reduce">减少</button>
    <button @click="add100">增加100</button>
    <h1>首页中count值:{{ $store.state.count }}</h1>
    <hr />
    <Header></Header>
    <Main> </Main>
    <hr />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

import { useStore } from "vuex";
// 获取store对象
const store = useStore();
const add = () => {
  // console.log(store);
  // 虽然可以进行修改数据
  // 但是不要这么去做，因为组件如果比较多管理起来就会非常混乱
  // 而且还违背了单向数据流的模块
  // store.state.count ++

  // 同步调用mutations中的修改方法，该方法是同步的
  // store.commit("increment");

  // 调用actions中的修改方法，该方法是异步的
  store.dispatch('increment')
};
const reduce = () => {
  // store.commit("decrement");

   store.dispatch('decrement')
};
function add100() {
  // store.commit('ADD100',100)
  store.dispatch('add100',100)
}
</script>


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
