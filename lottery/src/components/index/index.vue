<template>
    <div>
       <h2 class="domain-title">www.dantyli.com</h2>
       <div class="marquee">
            <ul class="content">
            <li v-for="item in items">用户{{item.mobile}}赚到{{item.price}}元</li>
            </ul>
		</div>
       <div class="menu">
            <ul>
            <router-link to='/openHall'>
                <li>
                    <span class="winning_icon"></span>
                    <span>开奖</span>
                </li>
            </router-link>
            <router-link to='/choseHall'>
                <li>
                    <span class="buy_lottery_icon"></span>
                    <span>购彩</span>
                </li>
            </router-link>
            <router-link to='/recharge'>
                <li>
                    <span class="charge_icon"></span>
                    <span>充值</span>
                </li>
            </router-link >
            <router-link to='/person'>
                <li>
                    <span class="help_icon"></span>
                    <span>{{isLogin?'个人中心':'登录'}}</span>
                </li>
            </router-link>
            <div style="clear:both"></div>
            </ul>
       </div>
       <div class="most-popular">
           <p class="domain-title">最受欢迎</p>
           <ul>
              <router-link to="/dbc">
               <li>
                  <span class="dbc_icon"></span>
                  <i>双色球</i>
               </li>
               </router-link>
               <li>
                  <span class="letou_icon"></span>
                  <i>大乐透</i>
               </li>
               <li>
                  <span class="fucai_icon"></span>
                  <i>福彩</i>
               </li>
               <router-link to="/kThree">
               <li>
                  <span class="kuai3_icon"></span>
                  <i>快3</i>
               </li>
               </router-link>
             <div style="clear:both"></div>
           </ul>
           <p class="domain-title">大乐透<span style="float:right;border:1px solid #eee;" @click="chose">换一注</span></p>
           <div class="letou-num">
               <p v-for="item in rotates" :class="item.rot==1?'rotate':''">{{item.count}}</p>
               <div style="clear:both"></div>
           </div>
       </div>
       <ul class="populars">
          <p class="domain-title">热门彩种</p>
            <router-link to="/dbc">
           <li>
                  <span class="dbc_icon"></span>
                  <i>双色球</i>
               </li>
              </router-link>
               <li>
                  <span class="letou_icon"></span>
                  <i>大乐透</i>
               </li>
               <li>
                  <span class="fucai_icon"></span>
                  <i>福彩</i>
               </li>
               <router-link to="/kThree">
               <li>
                  <span class="kuai3_icon"></span>
                  <i>快3</i>
               </li>
               </router-link>
               <li>
                  <span class="football_icon"></span>
                  <i>竞彩足球</i>
               </li>
               <li>
                  <span class="qxc_icon"></span>
                  <i>七星彩</i>
               </li>
             <div style="clear:both"></div>
       </ul>
    </div>
</template>
<script>
import axios from 'axios'
import config from '../../config/config'
export default {
    data(){
        return{
           rotates:[
               {count:'00',rot:1},
               {count:'00',rot:1},
               {count:'00',rot:1},
               {count:'00',rot:1},
               {count:'00',rot:1},
               {count:'00',rot:1}
           ],
           date:'',
           isLogin:false,
           items:[{"mobile":"166****4900","arid":"1","uid":"80","price":"36.70","createtime":"2018-06-14 10:24"},{"mobile":"186****0399","arid":"1","uid":"2","price":"21.48","createtime":"2018-06-14 10:26"},{"mobile":"133****98151","arid":"1","uid":"34","price":"27.04","createtime":"2018-06-14 10:53"},{"mobile":"139****5750","arid":"1","uid":"15","price":"76.41","createtime":"2018-06-14 11:02"},{"mobile":"183****5867","arid":"1","uid":"16","price":"84.94","createtime":"2018-06-14 11:04"},{"mobile":"138****5563","arid":"1","uid":"1","price":"88.27","createtime":"2018-06-14 11:17"},{"mobile":"183****6825","arid":"1","uid":"131","price":"21.75","createtime":"2018-06-14 11:37"},{"mobile":"176****1019","arid":"1","uid":"14","price":"30.58","createtime":"2018-06-14 11:50"}]
        }
    },
    created(){
        const that=this;
       this.chose();
       this.$nextTick(()=>{
           this.isLogin=this.$store.state.isLogin
       })
    },
    methods:{
        chose(){
            this.rotates.forEach((v,i)=>{
                v.rot=1;
                v.count=config.randomJx();
                setTimeout(()=>{
                    v.rot=0;
                },500*(i+1))
            });
        }
    }
}
</script>
<style>
.most-popular{
    background:#fff;
    margin-bottom:.4rem;
}
.populars{
    background:#fff;
    width:100%;
}
.populars li span{width: 100%;
    height:50px;
    line-height:50px;
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50px;}
.populars li i{
    font-style:normal;
    line-height:0.8rem;
    font-size:0.38rem;
}
.populars li{float:left;width:25%;text-align:center;}
.letou-num{
   height:1rem;
}
.letou-num p{
   height:0.8rem;
   width:0.8rem;
   line-height:0.8rem;
   border-radius:50%;
   background:#cc2b2f;
   display:inline-block;
   float:left;
   color:#fff;
   font-size:0.35rem;
   margin-left:0.2rem;
   text-align:center;
}
.letou-num p:nth-last-of-type(1){
    background: #2483F9;
}
.letou-num p:nth-last-of-type(2){
    background: #2483F9;
}
.most-popular ul{
    width:100%;
    border-bottom:1px solid #e2e2e2;
}
.most-popular li span{width: 100%;
    height:50px;
    line-height:50px;
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50px;
}
.most-popular li i{
    font-style:normal;
    line-height:0.8rem;
    font-size:0.38rem;
}
.most-popular li{
    float:left;width:25%;
    text-align:center;
}
.domain-title{
    background:#fff;
    line-height:0.6rem;
    font-size:0.38rem;
    padding:0.2rem;
}
.menu{
    width:100%;
    height:78px;
    margin-bottom:0.4rem;
    background:#fff;
    padding:0.2rem 0;
}
.menu ul{
    width:100%;
    height:78px;
    font-size:0.38rem;
    transition: .3s linear;
}
.menu li{
    width:25%;
    text-align:center;
    display:inline-block;
    float:left;
}
.menu li span{width: 100%;
    height:39px;
    line-height:39px;
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px;
}
.rotate {
    animation-name: num;
	animation-duration: 0.2s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	-webkit-animation-name: num;
	-webkit-animation-duration: 0.2s;
	-webkit-animation-timing-function: linear;
	-webkit-animation-iteration-count: infinite;
	-moz-animation-name: num;
	-moz-animation-duration: 0.2s;
	-moz-animation-timing-function: linear;
	-moz-animation-iteration-count: infinite;
}
@-webkit-keyframes num {
0% {
-webkit-transform:rotate(0deg);
}
50% {
-webkit-transform:rotate(180deg)
}
100% {
-webkit-transform:rotate(360deg)
}
}
@-moz-keyframes num {
0% {
-moz-transform:rotate(0deg);
}
50% {
-moz-transform:rotate(180deg)
}
100% {
-moz-transform:rotate(360deg)
}
}
@keyframes num {
0% {
transform:rotate(0deg);
}
50% {
transform:rotate(180deg)
}
100% {
transform:rotate(360deg)
}
}
.fix{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(78px);
}
@keyframes kf-marque-animation {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
@-webkit-keyframes kf-marque-animation {
   0% {
       -webkit-transform: translateX(0);
   }
   100% {
       -webkit-transform: translateX(-100%);
   }
}
.marquee {
    background: linear-gradient(0deg,#9600e4,#6b31ef);
    width: 100%;
    border: none;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
    position: relative;
    font-size: 0.38rem;
}

.marquee .content {
    display: inline-block;
    position: relative;
    padding-right: 0px;
    animation: kf-marque-animation 18s linear  infinite;
    -webkit-animation: kf-marque-animation 18s linear  infinite;
    white-space: nowrap;
}

.marquee .content li {
    display: inline-block;
    color: #fff;
    border-radius: 17px;
    padding: 0 8px;
    margin-left: 5px;
}
</style>