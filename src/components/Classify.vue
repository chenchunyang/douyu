<template>
  <div>
      <nav-bar title="分类"></nav-bar>
      <ul>
      <li v-for="m in  room" :key="m.room_id" @click="detailHandle(m.short_name)">  
              <img :src="m.game_src" alt="">
              <p>{{m.game_name}}</p> 
      </li>
     </ul>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import bus from "../bus";
import axios from "axios";
export default {
  name: "Classify",
  components: {
    NavBar
  },
  data: function() {
    return {
      room: [] ,
     
    };
  },
  methods:{
    detailHandle: function(e) {
      //   console.log("nav bar");
      // 触发事件
      // console.log('------')
     
      bus.$emit("detail",'Detail');
      this.$store.commit('detail',e);
      this.$store.dispatch('getData');
    }
  },
  mounted: function() {
    axios
      .get("http://open.douyucdn.cn/api/RoomApi/game")
      .then(
        function(data) {
          console.log(data);
          this.room = data.data.data;

          // console.log("-----");
          // console.log(this.room);
        }.bind(this)
      )
      .catch(function(error) {
        // console.log(error);
      });
  }
};
</script>
<style scoped>
img {
  width: 155.7px;
  height: 155.7px;
  border-radius: 50%;
}
ul {
  list-style: none;
  padding: 0;
  overflow: hidden;
  margin: 0;
}
li {
  float: left;
  padding: 17px;
  border-bottom: 1px solid gray;
 
}
li:nth-of-type(3n+2){
    padding-left: 4vw;
    border-left: 1px solid gray;

}
li:nth-of-type(3n+3){
    padding-left: 4vw;
    border-left: 1px solid gray;

}


li > p {
  margin: 0;
  position: relative;
  left: 3rem;
}
</style>

