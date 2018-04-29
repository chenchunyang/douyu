<template>
   <nav>
       <span class="fa fa-bars" @click="menuHandle"></span>
       <span>{{title}}</span>
       <span class="fa fa-user"></span>
   </nav>
</template>

<script>
import bus from '../bus';
    export default {
        name:'NavBar',
        props:['title'],
        methods:{
            menuHandle:function(){
                console.log('nav bar');
                // 触发事件
                bus.$emit('menu');
            }
        }
    }
</script>

<style scoped>

</style>
