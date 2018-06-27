import config from '../config/config'
const LOGIN='LOGIN'
const RECHARGE='RECHARGE'
const DBC='DBC'
const KTHREE='KTHREE'
export default{
    //登录操作
    [LOGIN](state){
        state.isLogin=true
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
    //购买双色球
    [DBC](state,{num,price}){
        state.dbc.num=num
        state.dbc.price=price
        let obj={}
        obj.price=price
        obj.date=config.date
        state.buylogs.unshift(obj)
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