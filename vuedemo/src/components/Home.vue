<template>
  <div>
      <nav-bar title="首页"></nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar';
import axios from './axios';
    export default {
        name:'Home',
        components:{
            NavBar
        },
        data:function(){
            return{
                lives:[]
            }
        },
        mounted:function(){
            axios.get('http://open.douyucdn.cn/api/RoomApi/live?offset=0&limit=30').then(function(data){
                console.log(data)
                this.lives = data.data.data;
            }.bind(this)).catch(function(error){

            })
        }
    }
</script>

<style scoped>

</style>
