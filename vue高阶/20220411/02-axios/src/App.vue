<script setup>
import axios from "axios";
import { reactive } from "vue";

const state = reactive({});
function getReq() {
  // 发送一个get请求
  axios
    .get("http://localhost:3030/getUser?name=MAX力")
    .then((res) => {
      // 处理成功后的代码
      console.log(res);
      state.getData = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
function postReq() {
  // 发送一个post请求
  // axios
  //   .post("http://localhost:3030/postUser",{
  //     name:'小张'
  //   })
  //   .then((res) => {
  //     // 处理成功后的代码
  //     console.log(res);
  //     // state.getData = res.data;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  axios.post('http://localhost:3030/postUser', {
    firstName: 'Fred',
    lastName: 'Flintstone',
    name:'小张'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
</script>

<template>
  <div>
    {{ state.getData }}
    <button @click="getReq">发送get</button>
    <button @click="postReq">发送post</button>
    <hr />
  </div>
</template>

<style>
</style>
