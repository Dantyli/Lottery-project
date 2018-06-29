<template>
    <div class="header">
       <span @click="backShop" class="goBack"><i class="el-icon-arrow-left" /></span>
       {{title}}
       <span @click="toggle" class="menu-right">...</span>
       <ul v-if="menus">
           <div class="menu_tri_icon"></div>
          <router-link to="/index"> <li class="menu_index_icon">首页</li></router-link>
          <router-link to="/recharge"> <li class="menu_charge_icon">充值</li></router-link>
          <router-link to="/person"> <li class="menu_user_icon">个人中心</li> </router-link>
          <router-link to="/choseHall"> <li class="menu_buy_icon">购彩大厅</li> </router-link>
           <router-link to="/openHall"><li class="menu_open_icon">开奖大厅</li></router-link>
       </ul>
    </div>
</template>
<script>
export default{
    props:['title'],
    data(){
        return{
            menus:false
        }
    },
    methods:{
        backShop(){
            window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
        },
        toggle(){
           this.menus=!this.menus  
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
.menu-right{
    display: inline-block;
    width: 1rem;
    height: 100%;
    float: right;
    margin-right: 0.2rem;
    font-size: 0.6rem;
    line-height: 40px;
}
.header ul{
    background:rgba(0,0,0,0.8);
    width:3rem;
    position:fixed;
    right:0.2rem;
    top:60px;
    padding:0.2rem;
}
.header ul li{
    height:1rem;
    font-size:0.35rem;
    line-height:1rem;
    background-size:0.5rem;
    background-repeat:no-repeat;
    background-position:left center;
    border-bottom:1px solid #fff;
    color:#fff;
}
.header .menu_tri_icon{
    position: absolute;
    top: -0.2rem;
    right: 0.2rem;
    height: 0.3rem;
    width: 0.3rem;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>