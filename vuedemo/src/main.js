// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 导入Vue
import Vue from 'vue'

// 导入自定义组件App.vue,后缀vue可以省略
import App from './App'

// import router from './router'


// import、export是ES6的默认导入（默认从node_moduled找模块），导出

// 配置生产环境无提示
Vue.config.productionTip = false

/* eslint-disable no-new */

// 创建vue实例
new Vue({
  // el:实例对象的html中标签
  el: '#app',
  // router,
  // 局部注册实例中用到的组件
  components: { App },
  // 定义实例的视图模版
  template: '<App/>'
})
// main.js是项目的入口js文件，第一个要执行的文件