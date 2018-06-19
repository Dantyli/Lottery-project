<template>
<div>
    <Headers :title="title" />
    <ul class="choseHall">
       <li class="football_icon">
          <div>
             <p>竞彩足球</p>
             <p>球迷最爱，返奖率高</p>
          </div>
          <i class="right_icon" />
       </li>
       <li class="letou_icon">
          <div>
             <p>大乐透</p>
             <p>奖金高达1600万</p>
          </div>
           <i class="right_icon" />
       </li>
         <router-link to="/dbc">
       <li class="dbc_icon">
          <div>
             <p>双色球</p>
             <p>2元中1500万</p>
          </div>
           <i class="right_icon" />
       </li>
       </router-link>
       <li class="fucai_icon">
          <div>
             <p>福彩</p>
             <p>造福玩家</p>
          </div>
           <i class="right_icon" />
       </li>
       <router-link to="/kThree">
        <li class="kuai3_icon">
          <div >
             <p>快3</p>
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
            title:'购彩大厅'
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