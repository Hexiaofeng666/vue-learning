<template>
<!-- 列表部分 -->
    <ul class="main">
        <Item 
        v-for="(todo, index) in todos" 
        :key="todo.id" 
        :todo='todo'
        :delTodoWithIndex='delTodoWithIndex'
        :index='index'
        > </Item>
    </ul>
</template>

<script>
import Item from './Item.vue'
    export default {
        name: 'list',
        props: {
            todos: Array,
            delTodoWithIndex: Function
        },
        components: {
           Item 
        }
    }
</script>

<style scoped>
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