const ADD_FRIEND='ADD_FRIEND'
const SEND_MSG='SEND_MSG'
const LOGIN='LOGIN'
const RECHARGE='RECHARGE'
export default{
    //添加好友
    [ADD_FRIEND](state,name){
        state.friends.push(name);
        state.msgs[name]=[]
    },
    //发送消息
    [SEND_MSG](state,{msg,name}){
        let imsg={}
        imsg.flag=2
        imsg.msg=msg
        console.log(name,imsg)
        state.msgs[name].push(imsg)
    },
    //登录操作
    [LOGIN](state,{userName,logTime}){
        state.userinfo['username']=userName
        state.userinfo['logtime']=logTime
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
    }
}