<template>
  <div id="app">
    <transition name="fade">
      <side-menu v-show="isShow"></side-menu>
</transition>
      <component :is="viewName"></component>
  </div>
</template>

<script>
// 导入需要使用的组件对象
import Home from "./components/Home";
import Detail from "./components/Detail";
import Classify from "./components/Classify";
import SideMenu from "./components/SideMenu";
import bus from "./bus";
export default {
  name: "App",
  //注册组件对象
  components: {
    Home,
    Detail,
    Classify,
    SideMenu
  },
  data: function() {
    return {
      viewName: "Home",
      isShow: false
    };
  },
  mounted: function() {
    bus.$on(
      "menu",
      function() {
        this.isShow = !this.isShow;
      }.bind(this)
    );
    bus.$on(
      "choose",
      function(data) {
        this.viewName = data;
        this.isShow = !this.isShow;
        console.log(data);
      }.bind(this)
    );
    bus.$on(
      "detail",
      function(data) {
        console.log(data);
        this.viewName = data;
        this.isShow = false;
        // console.log(data);
      }.bind(this)
    );
  }
};
</script>

<style scoped>
/* style添加scoped字段，说明这些样式仅对当前组件起作用;*/
.fade-enter {
  opacity: 0;
  transform: translateX(-50px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
  transform: translateX(50px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
</style>
