<template>
    <div>
        <h1>新闻详情</h1>
        <!-- 在DOM元素中直接获取路由传递过来的参数 -->
        <p>{{$route.query.name}}</p>
        <p>{{$route.query.age}}</p>
        <p>{{$route.query.sex}}</p>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
export default {
   setup() {
    //    document.title = "详情";
       console.log(useRoute().query);
      return {

      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style lang="scss" scoped>

</style>
