import Vue from 'vue'
import Vuex from 'vuex'


import axios from 'axios'

Vue.use(Vuex);


export default  new Vuex.Store({
    // state存共享数据
    state:{     
        lives:[],
        name:'LOL'
    },
    mutations:{
        detail:function(state,data){
            state.name  = data;
            console.log(data);
        },
        getData:function(state,data){
            state.lives=data
        }

    },
    actions: {
        getData: function (context) {
            axios.get('  http://open.douyucdn.cn/api/RoomApi/live/'+ context.state.name).then(function (data) {
                console.log(context.state.name)
                context.commit("getData", data.data.data)
            }.bind(this)).catch(function (error) {

            });
        }
    }

})