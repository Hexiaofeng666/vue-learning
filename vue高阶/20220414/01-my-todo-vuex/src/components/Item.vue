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

import { useStore } from 'vuex'

import { inject, ref } from 'vue'

    export default {
        name: 'item',
        props: {
            todo: Object,
            index: [Number,String]
        },
        setup(props) {

            const store = useStore()

            // 订阅删除的方法
            // const delTodoWithIndex = inject('delTodoWithIndex')


            let isShowBtn = ref(false)
            let bgColor = ref('#fff')

            const delShow = (isShow) =>{
                isShowBtn.value = isShow
                bgColor.value = isShow ? '#ddd' : '#fff'
            }
            // 删除数据的方法
            const delItem = ()=>{
                console.log('当前索引值' + props.index);
                if(confirm('你确定要删除🐴？')){
                    // delTodoWithIndex(props.index)
                    // delTodoWithIndex
                    store.dispatch('delTodoWithIndex', props.index)
                }
                
            }

            return {
                isShowBtn,
                bgColor,
                delShow,
                delItem
            }
        },
        methods: {
            
        },
    }
</script>

<style lang="scss" scoped>
span {
    margin-left: 10px;
}
button {
    float: right;
    margin-top: 6px;
    margin-inline-end: 10px;
}
</style>