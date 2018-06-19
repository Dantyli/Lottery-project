export default{
    login({commit,state},{name,time}){
        //执行登录操作
        commit('LOGIN',{userName:name,logTime:time});
    },
    charge({commit,state},{price,date,type}){
        //充值操作
        commit('RECHARGE',{price:price,date:date,type:type})
    },
    kthree({commit,state},{one,two,three,price}){
        commit('KTHREE',{one:one,two:two,three:three,price:price})
    },
   dbc({commit,state},{num,price}){
       commit('DBC',{num:num,price:price})
   }
}