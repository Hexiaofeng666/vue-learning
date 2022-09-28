<script setup>

</script>

<template>
  <div>
    <h1>count值：{{$store.state.count}}</h1>
    <h1>title值：{{$store.state.moduleA.title}}</h1>
    <h1>msg值：{{$store.state.moduleA.msg}}</h1>
    <hr>


    <h1>name值：{{$store.state.moduleB.name}}</h1>
    <h1>age值：{{$store.state.moduleB.age}}</h1>

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
