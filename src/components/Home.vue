<template>
  <div>
      <nav-bar title="首页"></nav-bar>
          
      <ul>
          <li v-for="l in lives" :key="l.room_id">
              <img :src="l.room_src" alt="">
              <span>{{l.room_name}}</span>
              <span class="fa fa-user-o" v-if="l.online<10000">{{l.online}}</span>
              <span v-else>{{(l.online/10000).toPrecision(3)}}万人</span>
              <p>
                  <span class="fa fa-caret-square-o-right"></span>
                  <span>{{l.room_name}}</span>
              </p>
        </li>
    </ul>
       
  </div>
</template>

<script>
import NavBar from "./NavBar";
import axios from "axios";
export default {
  name: "Home",
  components: {
    NavBar
  },
  data: function() {
    return {
      lives: []
    };
  },
  mounted: function() {
    axios
      .get("http://open.douyucdn.cn/api/RoomApi/live?offset=0&limit=30")
      .then(
        function(data) {
        //   console.log(data);
          this.lives = data.data.data;
        //   console.log("-----");
        //   console.log(this.lives);
        }.bind(this)
      )
      .catch(function(error) {
        // console.log(error);
      });
  }
};
</script>
<style scoped>
ul{
    list-style: none;
    padding: 0;
    margin-top: 60px
}
img{
    width: 220px;
    border-radius: 10px;
}
li{
    width:250px;
    height: 135px;
    float: left; 
    position: relative;
    margin: 5px;
    margin-left: 6vw;
}
li>p{
    margin: 0;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
}
li>span{
    font-size: 8px;
    color: white;
}
li>span:nth-of-type(1){
    position: absolute;
    left: 5px;
    bottom: 30px;
}
li>span:nth-of-type(2){
    position: absolute;
    right: 36px;
    bottom: 30px;
}
li>p>span{
    margin-right: 5px;
}
</style>

