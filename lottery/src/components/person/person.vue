<template>
   <div>
       <Headers title="个人中心" />
       <div class="infos">
          <div>
           <img src="https://avatars3.githubusercontent.com/u/25030274?s=460&v=4">
           <p>
               <span>李大大</span>
               <span>已认证</span>
           </p>
           </div>
       </div>
       <ul class="my_acount">
           <li>
               <p>63340</p>
               <p>可用余额</p>
           </li>
           <span></span>
            <li>
               <p>63340</p>
               <p>可提现余额</p>
           </li>
           <span class="hline"></span>
            <li>
               <p>63340</p>
               <p>中奖金额</p>
           </li>
           <div style="clear:both"></div>
       </ul>
       <div class="ad">
           <div>
            <router-link to="/recharge">
             <img src='./img/charge.png' />
             <div>
             <p style="font-size:0.42rem">充值</p>
             <p>满1000送50</p>
             </div>
              </router-link>
           </div>
       
        
            <div>
            <router-link to="/tx">
             <img src='./img/tixian.png' />
             <div>
             <p style="font-size:0.42rem">提现</p>
             <p>快速到账服务</p>
             </div>
              </router-link>
           </div>
       
           <p style="clear:both"></p>
       </div>
       <ul class="info-detail">
        <router-link to="/order">
           <li>
              <img src="./img/money.png" />投注记录
              <i class="right_icon" />
           </li>
        </router-link>
       <router-link to="/log">
           <li>
              <img src="./img/money.png" />资金明细
              <i class="right_icon" />
           </li>
        </router-link>
        <router-link to="/usi">
           <li>
              <img src="./img/indentify.png" />
              实名认证
              <span class="gren">已认证</span>
              <i class="right_icon" />
           </li>
        </router-link>
        </ul>
        <ul class="info-detail">
        <router-link to="/card">
           <li>
             <img src="./img/ipcard.png" />
              银行卡
              <span class="redd">未绑定</span>
              <i class="right_icon" />
           </li>
        </router-link>
        <router-link to="/set">
            <li>
              <img src="./img/settings.png" />
              设置
              <i class="right_icon" />
           </li>
        </router-link>
       </ul>
       <ul class="info-detail">
           <li>
              <img src="./img/direction.png" />
              新手上路
              <i class="right_icon" />
           </li>
       </ul>
   </div>
</template>
<script>
import Headers from '../common/Header'
export default{
    data(){
        return{
            
        }
    },
    created(){
        this.$nextTick(()=>{
           
        }) 
    },
    components:{
        Headers
    }
}
</script>
<style>
  .ad{
      margin:0.2rem 0.4rem;
  }
  .ad>div{
      display:inline-block;
      border-radius:5px;
      width:48%;
      color:#fff;
      padding:0.4rem 0;
  }
  .ad>div:nth-of-type(1){
      float:left;
      background-image: linear-gradient(0deg, 
		#ff9732 0%, 
		#fa7d44 40%, 
		#f46255 80%);
	box-shadow: 0px 2px 4px 0px 
		rgba(35, 24, 21, 0.2);
  }
  .ad>div:nth-of-type(2){
      float:right;
      background-image: linear-gradient(0deg, 
		#f9d90a 0%, 
		#faae00 77%);
	box-shadow: 0px 2px 4px 0px 
		rgba(35, 24, 21, 0.2);
  }
  .ad div img{width:0.8rem;margin:0 0.2rem;}
  .ad div div{
      line-height:0.5rem;
      display:inline-block;
      width:2rem;
      color:#fff;
  }
   .my_acount{
       background:#fff;
       margin:0 0.4rem;
       padding:0.2rem 0;
       border-bottom-left-radius:10px;
       border-bottom-right-radius:10px;
   }
   .my_acount li{
       display:inline-block;
       width:33%;
       float:left;
       text-align:center;
       line-height:0.6rem;
   }
   .my_acount p:nth-of-type(1){
       color:#333;
       font-size:0.38rem;
   }
   .my_acount p:nth-of-type(2){
       color:#999;
       font-size:0.32rem;
   }
   .my_acount span{
       display:inline-block;
       height:0.8rem;
       border-left:1px solid #ddd;
       vertical-align:middle;
       float:left;
   }
    .info-detail{
        margin-top:0.4rem;
        padding:0 0.2rem;
        background:#fff;
    }
    .info-detail li{
        height:1.3rem;
        line-height:1.3rem;
        border-bottom:1px solid #e2e2e2;
        position:relative;
        font-size:0.38rem;
    }
    .info-detail li img{
        width:0.5rem;
        vertical-align:middle;
        margin-right:0.2rem;
    }
    .gren,.redd{
       position:absolute;
       right:0.8rem;
    }
    .gren{color:#00f000;}
    .redd{color:#f00;}
    .infos{
        margin-top:50px;
       background-image: linear-gradient(0deg, 
		#ff4949 0%, 
		#cc2b2f 100%);
        height:1.5rem;
    }
    .infos div{
        height:100%;
        padding:0.25rem 0.2rem;
        margin:0 0.4rem ;
        background:#fff;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
    }
    .infos img{
        height:1rem;
        width:1rem;
        border-radius:50%;
        vertical-align:bottom;
        margin-right:0.2rem;
    }
    .infos p{
        width:4rem;
        display:inline-block;
    }
    .infos p span{
        display:inline-block;
        width:100%;
        color:#fff;
    }
    .infos p span:nth-of-type(1){
         font-size:0.4rem;
         color:#333;
    }
    .infos p span:nth-of-type(2){
         font-size:0.32rem;
         background:#f00;
         width:1rem;
         border-radius:10px;
         padding:0 0.2rem;

    }
</style>