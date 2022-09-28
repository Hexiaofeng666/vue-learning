<template>
<!-- 页脚部分 -->
    <div class="footer">
        <label for="">
            <input type="checkbox" v-model="selectedAll">
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
import { inject, computed } from 'vue'
import {useStore} from 'vuex'
    export default {
        name: 'footers',
        setup(props) {

            const store= useStore()
            // 订阅
            // const selectedAllTodo = inject('selectedAllTodo')
            // const todos = inject('todos')
            // const delFinishedTodos = inject('delFinishedTodos')

          const finishedCount=computed(()=>{
           return  store.getters.finishedCount
            })
            const delFinishedTodos =()=>{
                if(confirm('你确定要删除被选中的任务吗')){
                    store.dispatch('delFinishedTodos')
                }
            }
            
            const selectedAll=computed({
         get(){

          return store.getters.isChecked
          },
        set(){
           // 全选
              store.dispatch('selectedAllTodo',value)
            }

            })
        return {
        
            delFinishedTodos,
            // isChecked,
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