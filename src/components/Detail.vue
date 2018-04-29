<template>
  <div>
      <nav-bar title="详情"></nav-bar>
      <ul>
        <li v-for="n in $store.state.lives" :key="n.room_id">
          <div>
              <img :src="n.room_src" alt="">
          </div>
          <div>
                <p>{{n.room_name}}</p>
                <span class="fa fa-user"></span>
                <span>{{n.nickname}}</span><br> 
                <span class="fa fa-user-circle"></span>
                <span v-if="n.online<10000">{{n.online}}</span>
                <span v-else>{{(n.online/10000).toPrecision(3)}}万人</span>
          </div>

        </li>
      </ul>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    NavBar
  },
  data: function() {
    return {
      details: []
    };
  },
  // mounted: function() {
  //   axios
  //     .get("http://open.douyucdn.cn/api/RoomApi/live/1")
  //     .then(
  //       function(data) {
  //         // console.log(data);
  //         this.details = data.data.data;
  //         // console.log("-----");
  //         // console.log(this.details);
  //       }.bind(this)
  //     )
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }
  // mounted: function() {
  //   bus.$on(
  //     "detail",
  //     function(data) {
  //       this.viewName = data;
  //     }.bind(this)
  //   );
  // }
};
</script>
<style scoped>
div {
  /* background-color: blue; */
  width: 100%;
  /* height: 800px; */
}
ul {
  list-style: none;
 
}
li {
  display: flex;
}
img {
  width: 300px;
  height: 200px;
  margin-bottom: 1rem;
}
span{
  color: gray;
}
li>div:nth-of-type(2){
margin-left: 1rem;
}
li>div:nth-of-type(2)>p{
  position: relative;
  top: 2rem;
}
li>div:nth-of-type(2)>span{
  position: relative;
  top: 2rem;
  margin-bottom: 1rem;
}

</style>

