<template>
   <div>
       <Headers title="修改密码" />
       <div class="register" style="padding-top:0.5rem">
              <p> <input type="text" placeholder="手机号码" /></p>
              <p><input type="text" placeholder="验证码" /><span class="getCode">获取验证码</span></p>
              <p><input :type="psw?'password':'text'" placeholder="设置密码" /><span @click="pswd" class="pimg"><img v-if="psw" src="./img/psw.png" /><img v-else src="./img/text.png" /></span></p>
            <button class="zhuce">提交</button>
       </div>
   </div>
</template>
<script>
import Headers from '../common/Header'
export default{
  data(){
    return{
        psw:true
    }
  },
  components:{
    Headers
  },
  methods:{
      pswd(){
          this.psw=!this.psw
      }
  }
}
</script>
<style>
.pimg{
  position:absolute;
  margin-left:-0.8rem;
  margin-top:0.3rem;
}
.pimg img{
  width:0.6rem;
}
.register{
  text-align:center;
  margin-top:50px;
  background:#fff;
  height:100%;
}

.register input{
  width:7rem;
  height:1rem;
  line-height:1rem;
  border:1px solid #999;
  border-radius:5px;
  text-indent:1em;
  font-size:0.38rem;
}
.register button{
  height:1rem;
  margin-bottom:0.5rem;
  width:7rem;
  line-height:1rem;
  border-radius:5px;
  border:none;
  font-size:0.4rem;
}
.register .loginto{
background:#fff;
  border:1px solid #d20000;
  color:#d20000;
}
.register .zhuce{
    background:#d20000;
color:#fff;
}
.register p{
    margin:0.5rem 0;
}
.getCode{
    height:1rem;
  width:2rem;
  display:inline-block;
  margin-left:-2rem;
  font-size:0.35rem;
}
.wel-title{
    font-size:0.5rem;
    line-height:1rem;
}
</style>