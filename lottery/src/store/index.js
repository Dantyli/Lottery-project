import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import state from './state'
Vue.use(Vuex)
const store=new Vuex.Store({
    //内存数据状态
    state,
   //与mutation通讯，可以异步操作
    actions,
    //唯一拥有更改内存数据的接口，此操作为同步
    mutations
})
export default store
