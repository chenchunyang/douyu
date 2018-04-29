

<template>
  <div id="app">
   <!-- <h2>哈哈哈</h2>
    <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <side-menu v-show="isShow"></side-menu>
    <component :is="viewName"></component>
  </div>
</template>

<script>
import Home from "./components/Home";
import Classify from "./components/Classify";
import SideMenu from "./components/SideMenu";
import Detail from "./components/Detail";

import bus from './bus';

export default {
  name: 'App',
  components:{
    Home,
    Classify,
    SideMenu,
    Detail
  },
  data:function(){
    return{
      viewName:'Home',
      isShow :false
    }
  },
  mounted:function(){
    // 监听menu事件
    bus.$on('menu',function(){
      // 把isShow取反，控制侧边栏的显隐
      this.isShow = !this.isShow;
    }.bind(this))
  }
}
</script>



<style scoped>
/* App.vue 是根组件 */

/* style添加scoped字段，说明这些样式仅对当前组件起作用; */
h2{
  color: red;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
