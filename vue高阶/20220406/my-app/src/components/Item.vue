<template>
  <li
    @mouseenter="delShow(true)"
    @mouseleave="delShow(false)"
    :style="{ backgroundColor: bgColor }"
  >
    <label for="">
      <input type="checkbox" v-model="todo.finished" @click="check(todo.id)"/>
      <span>{{ todo.title }}</span>
    </label>
    <button v-show="isShowBtn" @click="delitem(todo.id)">删除</button>
  </li>
</template>
<script>
export default {
  name: "item",
  data() {
    return {
      isShowBtn: false,
      bgColor: "#fff",
    };
  },
  methods: {
    delShow(isShow) {
      this.isShowBtn = isShow;
      this.bgColor = isShow ? "#ddd" : "#fff";
    },
    // 点击删除按钮，触发事件
    delitem(num){
      this.$emit('delmyitem',num)
    },
    // 判断是否应该是全选状态
    check(num){
      this.$emit('mycheck',num)
    }
  },
  props: ["todo"],
  created() {},
  computed: {},
  
};
</script>

<style scoped>
span {
  margin-left: 5px;
}
button {
  float: right;
  margin-top: 2px;
  margin-inline-end: 10px;
  /* display: none; */
}
/* li:hover{
    background: red;
}
li:hover button{
    display: inherit;
} */
</style>
