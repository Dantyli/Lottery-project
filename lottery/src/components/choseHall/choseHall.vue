<template>
<div>
    <Headers title="购彩大厅" />
    <ul class="choseHall">
    <router-link to="/dlt">
       <li class="dlt_icon">
          <div>
             <p>大乐透</p>
             <p>球迷最爱，返奖率高</p>
          </div>
          <i class="right_icon" />
       </li>
    </router-link>
    <router-link to="/dbc">
       <li class="dbc_icon">
          <div>
             <p>双色球</p>
             <p>奖金高达1600万</p>
          </div>
           <i class="right_icon" />
       </li>
    <router-link to="/fc">
       <li class="fc_icon">
          <div>
             <p>福彩3D</p>
             <p>2元中1500万</p>
          </div>
           <i class="right_icon" />
       </li>
     </router-link>
     <router-link to="/plt">
       <li class="plt_icon">
          <div>
             <p>排列3</p>
             <p>造福玩家</p>
          </div>
           <i class="right_icon" />
       </li>
       </router-link>
       <router-link to="/plf">
        <li class="plf_icon">
          <div >
             <p>排列5</p>
             <p>10分钟一期，来钱快</p>
          </div>
           <i class="right_icon" />
       </li>
       </router-link>
         <router-link to="/qlc">
        <li class="qlc_icon">
          <div >
             <p>七乐彩</p>
             <p>10分钟一期，来钱快</p>
          </div>
           <i class="right_icon" />
       </li>
       </router-link>
       </router-link>
         <router-link to="/qxc">
        <li class="qxc_icon">
          <div >
             <p>七星彩</p>
             <p>10分钟一期，来钱快</p>
          </div>
           <i class="right_icon" />
       </li>
       </router-link>
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
    components:{
        Headers
    }
}
</script>
<style>
.choseHall{
    margin-top:50px;
    padding:0 0.2rem;
    background:#fff;
    height:100%;
}
.choseHall li{
    height:1.5rem;
    background-size:1rem;
    background-position:left center;
    background-repeat:no-repeat;
    position:relative;
}
.choseHall div{
    margin-left:1.2rem;
    line-height:0.65rem;
    border-bottom:1px solid #e2e2e2;
}
.choseHall div p:nth-of-type(1){
font-size:0.38rem;
color:#333;
}
.choseHall div p:nth-of-type(2){
font-size:0.32rem;
color:#999;
}
</style>