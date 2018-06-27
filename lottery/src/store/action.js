export default{
    login({commit,state}){
        //执行登录操作
        commit('LOGIN');
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