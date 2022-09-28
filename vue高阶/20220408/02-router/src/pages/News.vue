<template>
  <div>
    <h1>这是新闻</h1>
    <h2>新闻的id是: {{ $route.params.id }}</h2>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    // route 是一个当前的局部配置对象，可以用来操作路由，接受参数等
    // router 是全局路由配置对象
    const route = useRoute();
    console.log(route.params.id);
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
