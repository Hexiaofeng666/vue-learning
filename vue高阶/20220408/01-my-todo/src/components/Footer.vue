<template>
  <!-- 页脚部分 -->
  <div class="footer">
    <label for="">
      <input type="checkbox" v-model="isChecked" />
    </label>
    <span>
      <span> 已完成 {{ finishedCount }} 件 </span>
      /
      <span> 总计 {{ todos.length }} 件 </span>
    </span>
    <button @click="delFinishedTodos">清除已完成任务</button>
  </div>
</template>

<script>
import { inject, computed } from "vue";

export default {
  name: "footer",
  setup(props) {
    // 订阅
    const todos = inject("todos");
    const selectedAllTodo = inject("selectedAllTodo");
    const delFinishedTodos = inject("delFinishedTodos");

    let finishedCount = computed(() => {
      return todos.reduce((total, todo) => {
        return total + (todo.finished ? 1 : 0);
      }, 0);
    });
    let isChecked = computed({
      get() {
        console.log(finishedCount.value);
        return finishedCount.value == todos.length ? true : false;
      },
      set(value) {
        // 全选了
        selectedAllTodo(value);
      },
    });
    return {
      finishedCount,
      isChecked,
      todos,
      delFinishedTodos,
    };
  },
  methods: {},
};
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