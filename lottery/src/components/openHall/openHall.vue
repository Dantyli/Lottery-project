<template>
    <div>
        <Headers :title="title" />
        <ul class="openHall">
        <router-link to="/openDetail">
            <li>
                <p><span>双色球</span> <span>2018066期</span></p>
                <p><span>11</span><span>11</span><span>11</span><span>11</span></p>
                <p><span>2018-06-10</span> <span>奖池：1亿5千万</span></p>
                <i class="right_icon" /> 
            </li>
        </router-link>
             <li>
                <p><span>双色球</span> <span>2018066期</span></p>
                <p><span>11</span><span>11</span><span>11</span><span>11</span><span>11</span><span>11</span></p>
                <p><span>2018-06-10</span> <span>奖池：1亿5千万</span></p>
                <i class="right_icon" /> 
            </li>
             <li>
                <p><span>双色球</span> <span>2018066期</span></p>
                <p><span>11</span><span>11</span><span>11</span><span>11</span></p>
                <p><span>2018-06-10</span> <span>奖池：1亿5千万</span></p>
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
            title:'开奖大厅', 
        }
   },
   components:{
      Headers
   }
}
</script>
<style>
   .openHall{
       background:#fff;
       margin-top:50px;
       padding:0 0.2rem;
   }
   .openHall li{
       padding:0.2rem 0;
       border-bottom:1px solid #e2e2e2;
       position:relative;
   }
   .openHall li p:nth-of-type(1) span:nth-of-type(1){
     font-size:0.38rem;
     color:#333;
     line-height:0.8rem;
     display:inline-block;
   }
   .openHall li p:nth-of-type(1) span:nth-of-type(2){
     font-size:0.32rem;
     color:#999;
     line-height:0.8rem;
     display:inline-block;
   }
   .openHall li p:nth-of-type(3) span:nth-of-type(2){
     font-size:0.38rem;
     color:#333;
     line-height:0.8rem;
     display:inline-block;
   }
   .openHall li p:nth-of-type(3) span:nth-of-type(1){
     font-size:0.32rem;
     color:#999;
     line-height:0.8rem;
     display:inline-block;
   }
   .openHall li p:nth-of-type(2) span{
       display:inline-block;
       height:0.8rem;
       width:0.8rem;
       border-radius:50%;
       line-height:0.8rem;
       text-align:center;
       background:#cc2f2d;
       margin-right:0.2rem;
       color:#fff;
   }
   .openHall li p:nth-of-type(2) span:nth-of-type(5){
       background:#2483F9 !important;
   }
   .openHall li p:nth-of-type(2) span:nth-of-type(6){
       background:#2483F9 !important;
   }
</style>