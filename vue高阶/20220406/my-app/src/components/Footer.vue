<template>
  <!-- 页脚部分 -->
  <div class="footer">
    <label for="">
      <input type="checkbox" v-model="checkall" @click="changeall"/>
    </label>
    <span>
      <span>已完成 0 件</span>
      /
      <span>总计 5 件</span>
    </span>
    <button @click="clearall">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkall: false,
    };
  },
  created() {},
  computed: {
    checkmyall(){
      console.log(this.checkall);
      return this.checkall
    }
  },
  methods: {
      // 清空
    clearall(){
        // console.log(55);
        this.$emit("clearallitem");
        this.$emit('changemycheck')
    },
    changeall(){
      // console.log(this.checkall);
      this.$emit("changeallcheck", !this.checkall);
    },
    checkmeall(str){
      // console.log(str + '6666666');
      this.checkall = !str
    }
  },
  watch: {
    //全选、全不选
    // checkall() {
    //   // console.log(this.checkall);
    //   this.$emit("changeallcheck", this.checkall);
    // },
    
  },
  props:['checkall']
};
</script>
<style  scoped>
.footer {
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
  margin-top: 7px;
}
.footer > button {
  float: right;
  margin-top: 8px;
}
</style>
