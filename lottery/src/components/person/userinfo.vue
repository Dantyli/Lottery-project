<template>
    <div>
        <Headers :title="title" />
        <div class="userinfo">
            <p >用户名：{{username}}</p>
            <p>登录时间：{{time}}</p>
      </div>
    </div>
</template>
<script>
import Headers from '../common/Header'
export default {
    data(){
        return{
            username:'',
            time:'',
            title:'个人信息'
        }
    },
    created(){
        console.log(this.$store.state.userinfo)
        this.username=this.$store.state.userinfo.username
        this.time=this.$store.state.userinfo['logtime']
    },
    components:{
        Headers
    }
}
</script>
<style>
.userinfo{
    margin-top: 50px;
}
.userinfo p{
    height: 45px;
    line-height: 45px;
    font-size: 0.38rem;
}
</style>

