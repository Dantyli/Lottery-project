import config from '../config/config'
const LOGIN='LOGIN'
const LOGOUT='LOGOUT'
const RECHARGE='RECHARGE'
const KTHREE='KTHREE'
export default{
    //登录操作
    [LOGIN](state){
        state.isLogin=true
    },
    [LOGOUT](state){
        state.isLogin=false
    },
    //充值记录
    [RECHARGE](state,{price,date,type}){
        let rec={}
        rec.price=price
        rec.time=date
        rec.type=type==1?'微信支付':'支付宝支付'
        state.chargelogs.unshift(rec)
        state.userinfo['yu']=price+state.userinfo['yu'];
    },
    //购买快三
    [KTHREE](state,{one,two,three,price}){
        state.kthree.one=one
        state.kthree.two=two
        state.kthree.three=three
        state.kthree.price=price
        let obj={}
        obj.date=config.date
        obj.price=price
        state.buylogs.unshift(obj);
    }

}