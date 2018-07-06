<template>
   <div class="header">
       <span @click="backShop" class="goBack"><i class="el-icon-arrow-left" /></span>
       {{title}}
       <span @click="goDetail" class="des-right">{{detail}}</span>
   </div>
</template>
<script>
export default {
    props:['title','detail'],
    methods:{
         backShop(){
            window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
        },
        goDetail(){
            const rout=this.$route.path
            if(rout=='/tx'){
                 this.$router.push('/txdes')
            }else if(rout=='/recharge'){
                this.$router.push('/chargeDes')
            }
            
        }
    }
}
</script>
<style>
.header{
    height:50px;
    line-height:50px;
    font-size:16px;
    background-image: linear-gradient(0deg, 
		#d20000 0%, 
		#ff2c2c 100%);
    color:#fff;
    padding:0 0.2rem;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:10;
    text-align:center;
}
.goBack{float:left;width:1rem;text-align:left;}
.header i{font-size:20px;}
.des-right{
    display: inline-block;
    height: 100%;
    float: right;
    margin-right: 0.4rem;
    font-size: 0.38rem;
    line-height: 50px;
    width:1rem;
}
</style>