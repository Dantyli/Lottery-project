export default{
    login({commit,state},{name,time}){
        //执行登录操作
        commit('LOGIN',{userName:name,logTime:time});
    },
    charge({commit,state},{price,date,type}){
        //充值操作
        commit('RECHARGE',{price:price,date:date,type:type})
    }
}