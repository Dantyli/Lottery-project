export default{
    login({commit,state}){
        //执行登录操作
        commit('LOGIN');
    },
    logout({commit,state}){
        commit('LOGOUT')
    },
    selectDlt({commit,state},dltObj){
        commit('DLT',dltObj)
    },
    clearDlt({commit,state}){
        commit('CDLT')
    },
    delDlt({commit,state},id){
        commit('DELDLT',id)
    },
    selectDbc({commit,state},dbcObj){
        commit('DBC',dbcObj)
    },
    clearDbc({commit,state}){
        commit('CDBC')
    },
    delDbc({commit,state},id){
        commit('DELDBC',id);
    }

}