<template>
   <div>
    <Headers title="提现" detail="提现记录" />
    <p v-if="add" class="addcard"><span>+</span>添加银行卡</p>
    <div v-else  class="ipcard"><img src="./img/nocheck.png">
       <p><span>中国建设银行</span><span>尾号7250</span></p>
    </div>
    <div class="pay_count">
         <p>提现金额</p>
         <p>￥<input type="text" ></p>
         <p>当天最多提现10000.00元</p>
     </div>
     <p class="wenxintips">
        温馨提示：<br />
        1.您的提现申请需要审核，如信息无错误，我们确保以
        最快的速度将资金提现至您的账户内，请及时查收；
     </p>
     <p class="charge_btn"><button>提交申请</button></p>
    </div>
</template>
<script>
import Headers from '../common/NewHead'
export default{
    components:{
        Headers
    },
    data(){
        return{
            add:true
        }
    }
}
</script>
<style>
.ipcard,.addcard{
    margin-top:60px;
    padding:0.2rem;
    background:#fff;
    font-size:0.35rem;
}
.ipcard img{
    height:1rem;
    vertical-align:bottom;
}
.ipcard p{
    display:inline-block;
    width:6rem;
}
.ipcard span{
    display:inline-block;
    line-height:0.5rem;
    width:100%;
}
.ipcard span:nth-of-type(1){
    color:#333;
    font-size:0.375rem;
}
.ipcard span:nth-of-type(2){
    color:#999;
    font-size:0.35rem;
}
.addcard{
    color:#00c000;
    line-height:1rem;
}
.addcard span{
    font-size:0.6rem;
    vertical-align:bottom;
}
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
</style>