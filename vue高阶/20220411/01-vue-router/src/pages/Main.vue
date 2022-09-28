<template>
    <div>
        <h1> 这个是我的 </h1>
        <input type="text" name="" id="">
        <div class="content">
            <router-link to="/main/order">我的订单</router-link>
            &nbsp;
            <router-link to="/main/msg">我的消息</router-link>
        </div>
        
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    setup () {
        // document.title = "我的";

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>