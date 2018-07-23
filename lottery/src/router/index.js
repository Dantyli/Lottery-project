import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
//路由懒加载
const login = r => require.ensure([], () => r(require('../components/login/login')), 'login')
const index = r => require.ensure([], () => r(require('../components/index/index')), 'index')
const choseHall = r => require.ensure([], () => r(require('../components/choseHall/choseHall')), 'choseHall')
const doubleColor = r => require.ensure([], () => r(require('../components/doubleColor/doubleColor')), 'doubleColor')
const openHall = r => require.ensure([], () => r(require('../components/openHall/openHall')), 'openHall')
const person = r => require.ensure([], () => r(require('../components/person/person')), 'person')
const recharge = r => require.ensure([], () => r(require('../components/recharge/recharge')), 'recharge')
const openDetail = r => require.ensure([], () => r(require('../components/openDetail/openDetail')), 'openDetail')
const logs = r => require.ensure([], () => r(require('../components/logs/logs')), 'logs')
const userInfo = r => require.ensure([], () => r(require('../components/person/userinfo')), 'userInfo')
const dlt = r => require.ensure([], () => r(require('../components/dlt/dlt')), 'dlt')
const fc = r => require.ensure([], () => r(require('../components/fc/fc')), 'fc')
const plf = r => require.ensure([], () => r(require('../components/plf/plf')), 'plf')
const plt = r => require.ensure([], () => r(require('../components/plt/plt')), 'plt')
const qlc = r => require.ensure([], () => r(require('../components/qlc/qlc')), 'qlc')
const qxc = r => require.ensure([], () => r(require('../components/qxc/qxc')), 'qxc')
const register = r => require.ensure([], () => r(require('../components/login/register')), 'register')
const forget = r => require.ensure([], () => r(require('../components/login/forget')), 'forget')
const edit = r => require.ensure([], () => r(require('../components/login/edit')), 'edit')
const chargeDes = r => require.ensure([], () => r(require('../components/recharge/chargeDes')), 'chargeDes')
const tx = r => require.ensure([], () => r(require('../components/recharge/tix')), 'tx')
const txdes = r => require.ensure([], () => r(require('../components/recharge/tixdes')), 'txdes')
const card = r => require.ensure([], () => r(require('../components/person/card')), 'card')
const set = r => require.ensure([], () => r(require('../components/person/settings')), 'set')
const about = r => require.ensure([], () => r(require('../components/person/about')), 'about')
const confirm = r => require.ensure([], () => r(require('../components/confirm/confirm')), 'confirm')
const order = r => require.ensure([], () => r(require('../components/person/order')), 'order')

// import login from '../components/login/login'
// import index from '../components/index/index'
// import choseHall from '../components/choseHall/choseHall'
// import doubleColor from '../components/doubleColor/doubleColor'
// import openHall from '../components/openHall/openHall'
// import person from '../components/person/person'
// import recharge from '../components/recharge/recharge'
// import openDetail from '../components/openDetail/openDetail'
// import logs from '../components/logs/logs'
// import userInfo from '../components/person/userinfo'
// import dlt from '../components/dlt/dlt'
// import fc from '../components/fc/fc'
// import plf from '../components/plf/plf'
// import plt from '../components/plt/plt'
// import qlc from '../components/qlc/qlc'
// import qxc from '../components/qxc/qxc'
// import register from '../components/login/register'
// import forget from '../components/login/forget'
// import edit from '../components/login/edit'
// import chargeDes from '../components/recharge/chargeDes'
// import tx from '../components/recharge/tix'
// import txdes from '../components/recharge/tixDes'
// import card from '../components/person/card'
// import set from '../components/person/settings'
// import about from '../components/person/about'
// import confirm from '../components/confirm/confirm'
// import order from '../components/person/order'
Vue.use(Router)

const router= new Router({
  //mode:'history',
  routes: [
    {
     path:'*',//重定向首页
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
      meta:{index:3}
    },
    {
      path:'/chargeDes',
      component:chargeDes,
      meta:{index:4}
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
      path:'/edit',
      component:edit,
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
      meta:{index:3}
    },
    {
      path:'/order',
      component:order,
      meta:{index:3}
    },
    {
      path:'/txdes',
      component:txdes,
      meta:{index:4}
    },
    {
      path:'/confirm',
      component:confirm,
      meta:{index:4}
    }
  ]
})
export default router;