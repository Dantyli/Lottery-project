import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import login from '../components/login/login'
import index from '../components/index/index'
import choseHall from '../components/choseHall/choseHall'
import doubleColor from '../components/doubleColor/doubleColor'
import openHall from '../components/openHall/openHall'
import person from '../components/person/person'
import recharge from '../components/recharge/recharge'
import openDetail from '../components/openDetail/openDetail'
import logs from '../components/logs/logs'
import userInfo from '../components/person/userinfo'
import dlt from '../components/dlt/dlt'
import fc from '../components/fc/fc'
import plf from '../components/plf/plf'
import plt from '../components/plt/plt'
import qlc from '../components/qlc/qlc'
import qxc from '../components/qxc/qxc'
import register from '../components/login/register'
import forget from '../components/login/forget'
import chargeDes from '../components/recharge/chargeDes'
import tx from '../components/recharge/tix'
import txdes from '../components/recharge/tixDes'
import card from '../components/person/card'
import set from '../components/person/settings'
import about from '../components/person/about'
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
      path:'/dlt',
      component:dlt,
      meta:{index:3}
    },
    {
      path:'/fc',
      component:fc,
      meta:{index:3}
    },
    {
      path:'/plf',
      component:plf,
      meta:{index:3}
    },
    {
      path:'/plt',
      component:plt,
      meta:{index:3}
    },
    {
      path:'/qlc',
      component:qlc,
      meta:{index:3}
    },
    {
      path:'/qxc',
      component:qxc,
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
      path:'/chargeDes',
      component:chargeDes,
      meta:{index:3}
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
    },
    {
      path:'/card',
      component:card,
      meta:{index:3}
    },
    {
      path:'/set',
      component:set,
      meta:{index:3}
    },
    {
      path:'/about',
      component:about,
      meta:{index:4}
    },
    {
      path:'/register',
      component:register,
      meta:{index:3}
    },
    {
      path:'/forget',
      component:forget,
      meta:{index:3}
    },
    {
      path:'/tx',
      component:tx,
      meta:{index:2}
    },
    {
      path:'/txdes',
      component:txdes,
      meta:{index:2}
    }
  ]
})
export default router;