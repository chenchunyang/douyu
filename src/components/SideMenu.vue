<template>
  <div>
      <ul>
           
                <li v-for="(item,index) in content" :key="index" @click="choooseHandle(item.type)">{{item.name}}
                    <span class="fa fa-chevron-right"></span>
                </li>
          
      </ul>
  </div>
</template>

<script>
// import Home from "./Home";
// import Detail from "./Detail";
// import Classify from "./Classify";
import bus from "../bus";
export default {
  name: "SideMenu",
  //     components:{
  //     Home,
  //     Detail,
  //     Classify,
  //   },
  data: function() {
    return {
      content: [
        { name: "首页",type:"Home" },
        { name: "分类",type:"Classify" },
        { name: "推荐",type:"Detail" },
       
      ]
    };
  },
  methods: {
   choooseHandle: function(type) {
    //   console.log("nav bar");
      // 触发事件

      bus.$emit('choose',type);
    }
  }
};
</script>
<style scoped>
ul {
  width: 300px;
  height: 600px;
  background-color: rgb(38, 38, 38);
  color: white;
  list-style: none;
  padding: 0;
  position: absolute;
  top: 3rem;
  border-top: 1px solid white;
  margin: 0;
}
li {
  border-bottom: 1px solid white;
  line-height: 3rem;
  display: flex;
  justify-content: space-between;
}
li>span{
    position: relative;
    top:1rem;
    right: 2rem;
}
div {
  position: relative;
  z-index: 10;
}

</style>

