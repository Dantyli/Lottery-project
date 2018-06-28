<template>
    <div>
       <Headers title="设置" detail="" />
       <ul class="set-detail">
          <router-link to="/edit">
          <li>
              修改密码
               <i class="right_icon" />
          </li>
          </router-link>
          <router-link to="/about">
          <li>
              关于我们
               <i class="right_icon" />
          </li>
          </router-link>
       </ul>
       <p class="logout"><button @click="logout">退出登录</button></p>
    </div>
</template>
<script>
import Headers from '../common/NewHead'
export default{
    components:{
        Headers
    },
    methods:{
        logout(){
            this.$router.push('/index');
        }
    }
}
</script>
<style>
.set-detail{
    margin-top:50px;
    padding:0 0.2rem;
    background:#fff;
}
.set-detail li{
    height:1.3rem;
    line-height:1.3rem;
    border-bottom:1px solid #e2e2e2;
    position:relative;
    font-size:0.38rem;
}
.logout{
    margin-top:1rem;
    text-align:center;
    height:1rem;
    line-height:1rem;
}
.logout button{
    font-size:0.4rem;
    color:#fff;
    height:1rem;
    border-radius:5px;
    width:7rem;
    background:#ccc;
    border:none;
}
</style>