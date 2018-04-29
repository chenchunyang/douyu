// main.js是项目的入口js文件

// import、export是ES6的模块化解决方案;
// import导入模块；默认从node_modules找模块;

// 导入Vue
import Vue from 'vue';

// 导入自定义组件App.vue，后缀vue可以省略
import App from './App';

import store from './store/index'

// 配置生产环境无提示
Vue.config.productionTip = false


// 创建vue实例
new Vue({
  // el:实例对象的html中标签
  el: '#app',
  store,
  // 局部注册实例中用到的组件
  components: { App },
  //定义实例的视图模板
  template: '<App />'
})




