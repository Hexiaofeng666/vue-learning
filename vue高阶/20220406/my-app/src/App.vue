<template>
  <div>
    <h1>备忘录</h1>
    <div class="container">
      <div class="wrap">
        <!-- 头部 -->
        <Header @additem="additem"></Header>
        <!-- 列表部分 -->
        <List :todos="todos" @delitem="delitem" @changemycheck='changemycheck'></List>
        <!-- 页脚部分 -->
        <Footer ref="myfooter" @changeallcheck="changeallcheck" @clearallitem='clearallitem' :checkall='checkall' @changemycheck='changemycheck'></Footer>
      </div>
    </div>
  </div>
</template>

<script>
// 1.导入组件(后缀名要加上)
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
// 2.定义且导出模块
export default {
  name: "app",
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "吃火锅",
          finished: false,
        },
        {
          id: 2,
          title: "聊天",
          finished: true,
        },
        {
          id: 3,
          title: "写代码",
          finished: true,
        },
        {
          id: 4,
          title: "更视频",
          finished: false,
        },
        {
          id: 5,
          title: "睡一觉",
          finished: false,
        },
      ],
      checkall:false
    };
  },
  methods: {
    // 添加一个选项
    additem(arr) {
      console.log(arr);
      let myarr = {
        id: this.todos.length,
        title: arr,
        finished: false,
      };
      this.todos.push(myarr);
    },
    // 删除的事件
    delitem(num) {
      // console.log(num);
      for (let i = num; i < this.todos.length; i++) {
        this.todos[i].id = this.todos[i].id - 1;
      }
      this.todos.splice(num - 1, 1);
      // console.log(this.todos);
    },
    // 全选、全不选
    changeallcheck(val) {
      this.todos.forEach((element) => {
        element.finished = val;
      });
    },
    // 清空已完成
    clearallitem(){
      // console.log(66);
      [...this.todos].forEach((element) => {
        if (element.finished == true) {
          this.delitem(element.id)
          // console.log(element.id);
        }
        
      });
      console.log( this.todos);
    },
    // 判断是否全选
    changemycheck(num){
      console.log(66);
      var count = 0;
      [...this.todos].forEach((element) => {
        if (num) {
          if (element.id==num) {
            element.finished = !element.finished
          }
          
        }
        if (element.finished == true) {
          // console.log(element);
          count++
        }
        
      });
      // console.log(this.todos);
      // for (let i = 0; i < this.todos.length; i++) {
      //   console.log(this.todos[i]);
      // }
      console.log(this.todos.length);
      if (count==this.todos.length&&this.todos.length!=0) {
        // console.log(true);
        // console.log(count);
        this.checkall = true
        console.log(this.checkall);
      }
      else{
        // console.log(false);
        this.checkall = false
        console.log(this.checkall);
      }
      this.$refs.myfooter.checkmeall(this.checkall)
      // console.log(this.$refs.myfooter);
    }
  },
  components: {
    Header,
    List,
    Footer,
  },
  watch: {
    
  },
};
</script>


<style >
/* scoped标记 该样式只应用于当前组件 */
h1 {
  text-align: center;
}
.container {
  width: 600px;
  margin: 0 auto;
}
.wrap {
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
}
button {
  display: inline-block;
  padding: 8px 10px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  color: white;
  background-color: orange;
  border: none;
}
</style>