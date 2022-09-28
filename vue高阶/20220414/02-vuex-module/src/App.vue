<script setup>
</script>
<template>
  <div>
    <h1> count 值： {{ $store.state.count }} </h1>
    <h1> title 值： {{ $store.state.moduleA.title }} </h1>
    <h1> msg 值： {{ $store.state.moduleA.msg }} </h1>
    <hr>
    <h1> name 值： {{ $store.state.moduleB.name }} </h1>
    <h1> say 值： {{ $store.state.moduleB.say }} </h1>
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
