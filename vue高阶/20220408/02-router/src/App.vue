<template>
    <div>
      <div id="nav">
        <!-- 
          使用router-link组件进行导航，通过to来指定要跳转的地址
        router-link最终会被渲染成一个带有href的a标签 
        router-link-active为被选中之后添加的class可以给其设置样式
        active-class="current"可以自己设置想要选中后的class名
        replace:用来设置没有浏览记录，左上角的箭头点击可以测试
        -->
        <router-link to="/home" active-class="current" replace> 首页 </router-link>
        <router-link to="/info" active-class="current" replace> 信息 </router-link>
        <router-link :to="'/news/' + newsId" active-class="current" replace> 新闻 </router-link>
        <router-link to="/main" active-class="current" replace> 我的 </router-link>
        <hr>
        <!-- a标签的点击会刷新网页 -->
        <a href="/home"> 首页</a>
        <a href="/info"> 信息</a>
        <a href="/news"> 新闻</a>
        <a href="/main"> 我的</a>
        <hr>
        <button @click="btnClickGoToPage('/home')">首页</button>
        <button @click="btnClickGoToPage('/info')">信息</button>
        <button @click="btnClickGoToPage('/news')">新闻</button>
        <button @click="btnClickGoToPage('/main')">我的</button>
      </div>
      <!-- 路由出口 -->
      <!-- 将路由匹配到的组件渲染到这里 -->
      <router-view></router-view>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import router from './router/index.js'
let newsId = ref('666')
const btnClickGoToPage = (value)=>{
  console.log(value);
  // 通过js跳转到指定位置
  router.push(value)
}
</script>
<style lang="scss" scoped>
  // .router-link-active{
  //   color: red;
  // }
  .current{
    color: red;
  }
</style>
