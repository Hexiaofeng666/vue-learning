<template>
<!-- 页脚部分 -->
    <div class="footer">
        <label for="">
            <input type="checkbox" v-model="selecteAll">
        </label>
        <span>
            <span> 已完成 {{ finishedCount }} 件 </span>
            / 
            <span> 总计 {{ $store.state.todos.length }} 件 </span>
        </span>
        <button @click="delFinishedTodos"> 清除已完成任务 </button>
    </div>
</template>

<script>

import { useStore } from 'vuex'

import { inject, computed } from 'vue'
    export default {
        name: 'footers',
        setup(props) {

            const store = useStore()

            // 订阅
            // const selectedAllTodo = inject('selectedAllTodo')
            // const todos = inject('todos')
            // const delFinishedTodos = inject('delFinishedTodos')

            const finishedCount = computed(()=> {
                return store.getters.finishedCount
            })

            const delFinishedTodos = ()=>{
                if(confirm('你确定删除所有被选中的任务吗？')){
                    store.dispatch('delFinishedTodos')
                }
            }


            const selecteAll = computed({
                get(){
                    return store.getters.isChecked
                },
                set(value){
                    // 全选
                    store.dispatch('selectedAllTodo', value)
                }
            })
            
            
        return {
            delFinishedTodos,
            selecteAll,
            finishedCount
        }
        }
    }
</script>

<style scoped>
.footer {
    height: 40px;
    line-height: 40px;
    padding-left: 5px;
    margin-top: 8px;
}
.footer > button {
    float: right;
    margin-top: 8px;
}
</style>