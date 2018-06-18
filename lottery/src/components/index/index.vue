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
               <li>
                  <span class="kuai3_icon"></span>
                  <i>快3</i>
               </li>
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
               <li>
                  <span class="kuai3_icon"></span>
                  <i>快3</i>
               </li>
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
       axios.get('../../../static/data.json').then(res=>{
           this.items=res.data.data.toplog;
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
@import './css/index.css'
</style>