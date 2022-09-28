<template>
<!-- 列表部分 -->
    <ul class="main">
        <Item 
        v-for="(todo, index) in $store.state.todos" 
        :key="todo.id" 
        :todo='todo'
        :index='index'
        > </Item>
    </ul>
</template>

<script>
import Item from './Item.vue'

// import { inject } from 'vue'

    export default {
        name: 'list',
        setup() {
            // const todos = inject('todos')
            // return {
            //     todos
            // }
        },
        props: {
        },
        components: {
           Item 
        }
    }
</script>

<style lang="scss" scoped>
.main {
    margin: 0;
    padding: 0;
    border: 1px solid #ddd;
    list-style: none;
    border-radius: 3px;
    margin-top: 15px;
}
.main li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    border-radius: 3px;
    padding-left: 10px;
    
}
</style>