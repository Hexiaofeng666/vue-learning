## vue-cli
```
vue-cli是vue官方提供的vue脚手架工具，能够创建、测试、构建、调试vue项目

```
### 首先全局安装vue脚手架
>npm install -g @vue/cli

vue create '项目名字'

也可以通过vue可视化工具创建项目

vue ui
 
运行 ： npm run serve

### vue2和vue3自动化构建工具(打包工具)的区别是什么？？
```
vue2用的是webpack
vue3用的是vite

关于路由：vue3路由必须安装最新版本4
vue3新增了一些api

vue2和vue3的原理是一样的。

```


### 数据双向绑定的原理是什么？
```
采用数据劫持者结合发布者，--订阅者模式，vue2通过object.defineProperty原生api来劫持各个属性的getter和setter方法，在数据变动的时候发送给订阅者，触发响应的监听回调。
但是升级到vue3之后，就不用object.defineProperty监听劫持，改为proxy代理。使用proxy代理进行重构。proxy代理的有点，他要比原先的object.defineProperty监听观察的类型更加丰富

```

### 虚拟DOM的原理是什么？？？
```
虚拟DOM实际上呢还是一个js对象，是对真实DOM的抽象的一个表达，他们可以对比新DOm树和老DOM树，如果发现差异，就将数据的变化的变化更新到真正的DOM里面
```

### 组件之间的通信？？？
```
1.父组件传递给子组件的值使用props属性
2.子组件传递给父组件可以使用$emit触发
3.兄弟之间的组件可以使用bus(公共事件)
4.vuex(状态管理)，该属性也是实现组件之间的传值，他们可以将数据统一管理，需要的时候从中心仓库取出即可。

```

### v-model的原理是什么？？？ @input
```
1.v-bind:绑定响应式数据
2.触发input事件并传递数据
```