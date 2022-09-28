<template>
  <!-- 头部 -->
  <div class="header">
    <input type="text" placeholder="请输入今天的任务清单，按回车键确认" @keyup.enter='postname' v-model="context" />
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      context:''
    };
  },
  created() {},
  computed: {},
  methods: {
    postname(){
      // console.log(this.context);
      this.$emit('additem',this.context)
    },
    
  },
};
</script>
<style scoped>
input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  outline: none;
}
input:focus {
  border-color: rgba(255, 0, 0, 0.8);
  box-shadow: 0 0 3px red;
}
</style>
