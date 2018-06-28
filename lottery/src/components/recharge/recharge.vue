<template>
  <div>
     <Headers title="充值" detail="充值记录" />
     <p class="pay_type">支付方式</p>
     <ul class="pay_list">
        <li>
            支付宝<img src="./img/nocheck.png" />
        </li>
        <li>
            微信<img src="./img/check.png" />
        </li>
        <li >
        <router-link to="/card" style="color:#00c000">
           <span style="font-size:0.6rem;vertical-align:bottom">+</span> 添加银行卡
        </router-link>
        </li>
     </ul>
     <div class="pay_count">
         <p>充值金额</p>
         <p>￥<input type="text" ></p>
         <p>单次最多充值10000.00元</p>
     </div>
     <p class="wenxintips">
        温馨提示：<br />
        1.充值完成后再次进入查看余额；<br />
        2.请在15分钟内完成支付。<br />
     </p>
     <p class="charge_btn"><button>确认充值</button></p>
  </div>
</template>
<script>
import Headers from '../common/NewHead'
export default{
    components:{
        Headers
    }
   
}
</script>
<style>
.charge_btn{
    margin-top:0.4rem;
    height:1rem;
    line-height:1rem;
    text-align:center;
}
.charge_btn button{
    width:7rem;
   background-image: linear-gradient(0deg, 
		#d20000 0%, 
		#ff2c2c 100%);
    color:#fff;
    font-size:0.4rem;
    border:none;
    height:1rem;
    border-radius:5px;
}
.wenxintips{
    margin:0.2rem;
    color:#999;
    font-size:0.35rem;
}
.pay_count{
    margin-top:0.2rem;
    background:#fff;
    padding:0 0.2rem;
}
.pay_count p:nth-of-type(1){
    line-height:0.8rem;
    font-size:0.38rem;
}
.pay_count p:nth-of-type(2){
    height:1.6rem;
    line-height:1.6rem;
    font-size:0.6rem;
}
.pay_count p:nth-of-type(3){
    line-height:0.8rem;
    font-size:0.35rem;
    color:#999;
}
.pay_count input{
    border:none;
}
.pay_list{
    background:#fff;
    padding:0 0.2rem;
    font-size:0.38rem;
}
.pay_list li{
    border-bottom:1px solid #ddd;
    padding-right:0.2rem;
    height:1.3rem;
    line-height:1.3rem;
}
.pay_list li img {
    width:0.4rem;
    float:right;
    margin-top:0.45rem;
}
.pay_type{
    margin-top:50px;
    line-height:0.8rem;
    padding-left:0.2rem;
    font-size:0.38rem;
    color:#333;
}
</style>