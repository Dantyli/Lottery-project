export default{
    login({commit,state}){
        //执行登录操作
        commit('LOGIN');
    },
    logout({commit,state}){
        commit('LOGOUT')
    }
}