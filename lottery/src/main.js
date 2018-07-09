import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import './assets/css/style.css'
import './assets/js/flexible.js'
import router from './router'
import store from './store/index'
Vue.use(ElementUI);
store.commit('INIT');
new Vue({
  el: '#app',
  router,
  store,
  template:'<App />',
  components:{
    App
  },
  data:{
    eventHub:new Vue()
  }
})
//导航守卫
router.beforeEach((to,from,next)=>{
  if(to.path=='/person'||to.path=='/recharge'){
    if(store.state.isLogin){
      next()
    }else{
      router.push('/login')
    }
  }else{
    next()
  }
})
//自动登录
//let account=localStorage.getItem('account')
//if(account!==null){
  //  store.dispatch('login');
//}