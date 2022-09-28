<template>
  <div>
    <h1>这个是首页</h1>
  </div>
</template>

<script>
import { onMounted, onActivated, onDeactivated } from "vue";
import {
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from "vue-router";
export default {
  setup() {
    
    beforeRouteUpdate((to, from) => {
      //   更新
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
      // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
    });
    beforeRouteLeave((to, from) => {
      //   离开
      // 在导航离开渲染该组件的对应路由时调用
      // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
    });
    // document.title = "首页";
    onMounted(() => {
      console.log("onMounted");
    });
    onActivated(() => {
      console.log("onActivated");
    });
    onDeactivated(() => {
      console.log("onDeactivated");
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>