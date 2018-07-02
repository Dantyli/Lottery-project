<template>
   <div>
       <Headers title="登录" />
       <div class="login">
           <p class="loginType"><span :class="isCode?'active':''" @click="toggle(0)">验证码登录</span><i></i><span @click="toggle(1)"  :class="isCode?'':'active'">密码登录</span></p>
           <div class="logincode" v-if="isCode">
              <p> <input type="text" placeholder="手机号码" /></p>
              <p><input type="text" placeholder="验证码" /><span >获取验证码</span></p>
           </div>
           <div class="loginpwd" v-else>
              <p> <input type="text" placeholder="手机号码" /></p>
              <p><input :type="psw?'password':'text'" v-model="passwd" placeholder="密码" /><span @click="pswd" class="pimg"><img v-if="psw" src="./img/psw.png" /><img v-else src="./img/text.png" /></span></p>
              <p><router-link to="/forget">忘记密码？</router-link></p>
           </div>
           <button class="loginto" @click="logIn">登录</button>
           <router-link to="/register"><button class="zhuce">注册</button></router-link>
       </div>
   </div>
</template>
<script>
import Headers from '../common/Header'
export default{
  data(){
    return{
        isCode:true,
        psw:true,
        passwd:''
    }
  },
  components:{
    Headers
  },
  methods:{
    toggle(i){
     i>0?this.isCode=false:this.isCode=true;
    },
    logIn(){
      this.$store.dispatch('login');
      this.$router.push('/index');
    },
    pswd(){
      this.psw=!this.psw
    }
  }
}
</script>
<style>
.login{
  text-align:center;
  margin-top:50px;
  background:#fff;
  height:100%;
}
.pimg{
  position:absolute;
  margin-left:-0.8rem;
  margin-top:0.3rem;
}
.pimg img{
  width:0.6rem;
}
.loginType{
  line-height:1rem;
  height:1rem;
 padding:1rem 0;
}
.loginType span{
  width:3rem;
  text-align:center;
  font-size:0.4rem;
  color:#999;
  display:inline-block;
}
.loginType span.active{
  color:#d20000;
  border-bottom:1px solid #d20000;
}
.loginType i{
  border-right:1px solid #999;
  display:inline-block;
  margin: 0.2rem 0.3rem;
  height: 0.6rem;
  vertical-align: middle;
}
.login input{
  width:7rem;
  height:1rem;
  line-height:1rem;
  border:1px solid #999;
  border-radius:5px;
  text-indent:1em;
  font-size:0.38rem;
}
.login button{
  height:1rem;
  margin-bottom:0.5rem;
  width:7rem;
  line-height:1rem;
  border-radius:5px;
  border:none;
  font-size:0.4rem;
}
.login .loginto{
background:#d20000;
color:#fff;
}
.login .zhuce{
  background:#fff;
  border:1px solid #d20000;
  color:#d20000;
}
.logincode p:nth-of-type(2){
  margin:0.5rem 0;
}
.loginpwd p:nth-of-type(2){
  margin-top:0.5rem ;
}
.loginpwd p:nth-of-type(3){
  margin:0.3rem 0 ;
}
.loginpwd a{
  margin: 0rem 0 0rem 5rem;
  color:#999;
}
.logincode p:nth-of-type(2) span{
  height:1rem;
  width:2rem;
  display:inline-block;
  margin-left:-2rem;
  font-size:0.35rem;
}
</style>