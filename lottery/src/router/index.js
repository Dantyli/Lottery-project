import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import login from '../components/login/login'
import index from '../components/index/index'
import choseHall from '../components/choseHall/choseHall'
import doubleColor from '../components/doubleColor/doubleColor'
import football from '../components/football/football'
import kThree from '../components/kThree/kThree'
import openHall from '../components/openHall/openHall'
import person from '../components/person/person'
import recharge from '../components/recharge/recharge'
import openDetail from '../components/openDetail/openDetail'
import logs from '../components/logs/logs'
import userInfo from '../components/person/userinfo'
Vue.use(Router)

const router= new Router({
  routes: [
    {
     path:'/',
     redirect:'/index',
    },
    {
      path:'/login',
      component:login,
      meta:{index:2}
    },
    {
      path:'/index',
      component:index,
      meta:{index:1}
    },
    {
      path:'/choseHall',
      component:choseHall,
      meta:{index:2}
    },
    {
      path:'/dbc',
      component:doubleColor,
      meta:{index:3}
    },
    {
      path:'/football',
      component:football
    },
    {
      path:'/kThree',
      component:kThree,
      meta:{index:3}
    },
    {
      path:'/openHall',
      component:openHall,
      meta:{index:2}
    },
    {
      path:'/openDetail',
      component:openDetail,
      meta:{index:3}
    },
    {
      path:'/person',
      component:person,
      meta:{index:2}
    },
    {
      path:'/recharge',
      component:recharge,
      meta:{index:2}
    },
    {
      path:'/log',
      component:logs,
      meta:{index:3}
    },
    {
      path:'/usi',
      component:userInfo,
      meta:{index:3}
    }
  ]
})
export default router;