<template>
    <li
        @mouseenter="delShow(true)"
        @mouseleave="delShow(false)"
        :style="{backgroundColor: bgColor}"
    >
        <label for="">
            <input type="checkbox" v-model="todo.finished">
            <span> {{ todo.title }} </span>
        </label>
        <button v-show="isShowBtn" @click='delItem'> 删除 </button>
    </li>
</template>

<script>
    export default {
        name: 'item',
        props: {
            todo: Object,
            delTodoWithIndex: Function,
            index: [Number,String]
        },
        data() {
            return {
                isShowBtn: false,
                bgColor: '#fff'
            }
        },
        methods: {
            delShow(isShow){
                this.isShowBtn = isShow
                this.bgColor = isShow ? '#ddd' : '#fff'
            },
            // 删除数据的方法
            delItem(){
                console.log('当前索引值' + this.index);
                if(confirm('你确定要删除🐴？')){
                    this.delTodoWithIndex(this.index)
                }
                
            }
        },
    }
</script>

<style scoped>
span {
    margin-left: 10px;
}
button {
    float: right;
    margin-top: 6px;
    margin-inline-end: 10px;
}
</style>