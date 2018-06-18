<template>
  <div>
     <Headers :title="title" />
     <div class="recharge">
         <p class="re-tabs"><span :class="{active:chose}" @click="tab">立即充值</span><span @click="tab" :class="chose?'':'active'">充值记录</span></p>
         <div style="clear:both"></div>
     </div>
       <ul class="pay-type" v-if="chose">
             <li @click="pay(1)">
                 <p>微信充值</p>
                 <p>微信充值，快捷方便</p>
                 <i class="right_icon" />
             </li>
             <li @click="pay(2)">
                <p>支付宝充值</p>
                <p>支付宝充值有红包</p>
                <i class="right_icon" />
             </li>
         </ul>
         <ul v-else>
             <p v-if="listlogs.length==0" style="text-align:center;font-size:0.4rem;line-height:1rem">暂无充值记录</p>
             <div v-else class="chargelog">
                 <li v-for="item in listlogs">{{item.time}}使用{{item.type}}充值{{item.price}}元</li>
             </div>
         </ul>
  </div>
</template>
<script>
import Headers from '../common/Header'
import config from '../../config/config'
export default{
    data(){
        return{
            title:'账户充值',
            chose:true,
            listlogs:[]
        }
    },
    components:{
        Headers
    },
    created(){
        const that=this
        this.$nextTick(()=>{
            that.listlogs=that.$store.state.chargelogs
        })
    },
    methods:{
        tab(){
            this.chose=!this.chose
        },
        pay(i){
           this.$store.dispatch('charge',{price:10,date:config.date,type:i});
           this.$message('充值成功');
        }
    }
}
</script>
<style>
.pay-type{
padding:0 0.2rem;
background:#fff;
margin-top:0.2rem;
}
.pay-type li{
border-bottom:1px solid #e2e2e2;
position:relative;
padding:0.2rem 0;
}
.pay-type li p{line-height:0.6rem}
.pay-type li p:nth-of-type(1){
    color:#333;
    font-size:0.38rem;
}
.pay-type li p:nth-of-type(2){
    color:#666;
    font-size:0.35rem;
}
.recharge{
    margin-top:50px;
    background:#fff;
}
.re-tabs{
    font-size:0.38rem;
}
.chargelog{
    margin-top: 0.2rem;
}
.chargelog li{
    padding-left:0.2rem; 
   font-size: 0.38rem;
   background: #fff;
   height: 1rem;
   line-height: 1rem;
   border-bottom: 1px solid #e2e2e2;
}
.re-tabs span{
    display:inline-block;
    width:49%;
    float:left;
    height:0.8rem;
    line-height:0.8rem;
    text-align:center;
}
.re-tabs .active{
    color:#f00;
}
.re-tabs span:nth-of-type(1){
   border-right:1px solid #e2e2e2;
}

</style>