<template>
  <nav>
      <span class="fa fa-bars" @click="menuHandle"></span>
      <span>{{title}}</span>
      <span class="fa fa-user"></span>
  </nav>
</template>

<script>
import bus from "../bus";
export default {
  name: "NavBar",
  props: ["title"],
  methods: {
    menuHandle: function() {
      // console.log("nav bar");
      // 触发事件
      bus.$emit("menu");
    }
  }
};
</script>
<style scoped>
nav {
  width: 100%;
  height: 4rem;
  background-color: rgb(38, 38, 38);
  color: white;
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  

}
span:nth-of-type(1) {
  margin-left: 3px;
  margin-top: 14px;
}
span:nth-of-type(3) {
  margin-right: 1rem;
  margin-top: 14px;
}
span:nth-of-type(2) {
  margin-right: 1rem;
  margin-top: 8px;
}
</style>

