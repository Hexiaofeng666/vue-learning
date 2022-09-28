<script setup>
import axios from "axios";
import { reactive } from "vue";

const state = reactive({});
function getReq() {
  // 发送一个get请求
  // axios
  //   .get("http://localhost:3030/getUser?name=MAX力")
  //   .then((res) => {
  //     // 处理成功后的代码
  //     console.log(res);
  //     state.getData = res.data;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  axios
    .get("/api/v1/live")
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
  // 格式化对象参数，不然请求传参会请求失败
  const data = new URLSearchParams({ name: "小张" });
  data.append("obj", "杨幂");
  // 发送一个post请求
  axios
    .post("http://localhost:3030/postUser", data)
    
    .then((res) => {
      // 处理成功后的代码
      console.log(res);
      state.postData = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function allReq() {
  // 格式化对象参数，不然请求传参会请求失败
  const data = new URLSearchParams({ name: "小张" });
  data.append("obj", "杨幂");
  // 发送一个post请求
  axios.all([
     axios.get("http://localhost:3030/getUser?name=MAX力"),
     axios.post("http://localhost:3030/postUser", data)
  ])
  
    .then((res) => {
      // 处理成功后的代码
      console.log(res);
      // state.allData = res[0].data;
      state.allData= []
      res.forEach(el => {
        state.allData.push(el.data)
      });
      // console.log(state.allData);
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<template>
  <div>
    {{ state.getData }}
    <br />
    <button @click="getReq">发送get</button>
    <hr />

    <br />
    {{ state.postData }}
    <br />
    <button @click="postReq">发送post</button>
    <hr />

    <br />
    {{ state.allData }}
    <br />
    <button @click="allReq">发送并发请求</button>
    <hr />
  </div>
</template>

<style>
</style>
