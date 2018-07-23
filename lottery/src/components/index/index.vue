<template>
    <div>
    <div style="overflow:hidden">
        <div  :class="`swiper ${transxIndex>0?'transw':''}`" :style="{transform:`translateX(${transx}%)`}"> <img src="../../assets/img/banner.png"/><img src="../../assets/img/banner.png"/> </div>
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
           <div class="popular"><p class="popular-title">最受欢迎</p>
           <div class="roll_news">
              <ul :style={top} :class="{trans:activeIndex}">
                 <li v-for="item in news" >{{item}}</li>
              </ul>
           </div>
           </div>
           <ul>
              <router-link to="/dbc">
               <li>
                  <span class="dbc_icon"></span>
                  <i>双色球</i>
               </li>
               </router-link>
                <router-link to="/dlt">
               <li>
                  <span class="dlt_icon"></span>
                  <i>大乐透</i>
               </li>
               </router-link>
               <router-link to="/fc">
               <li>
                  <span class="fc_icon"></span>
                  <i>福彩3D</i>
               </li>
               </router-link>
               <router-link to="/plt">
               <li>
                  <span class="plt_icon"></span>
                  <i>排列3</i>
               </li>
               </router-link>
             <div style="clear:both"></div>
           </ul>
           <p class="domain-title"><span>大乐透</span>  <span style="color:#f00">奖池:{{jiangchi}}</span><span class="refresh"  @click="chose">换一注</span></p>
           <div class="letou-num">
               <p v-for="item in rotates" :class="item.rot==1?'rotate':''">{{item.count}}</p>
               <button @click="open7">2元购买</button>
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
              <router-link to="/dlt">
               <li>
                  <span class="dlt_icon"></span>
                  <i>大乐透</i>
               </li>
               </router-link>
               <router-link to="/fc">
               <li>
                  <span class="fc_icon"></span>
                  <i>福彩3D</i>
               </li>
               </router-link>
               <router-link to="/plt">
               <li>
                  <span class="plt_icon"></span>
                  <i>排列3</i>
               </li>
               </router-link>
               <router-link to="/plf">
               <li>
                  <span class="plf_icon"></span>
                  <i>排列五</i>
               </li>
               </router-link>
               <router-link to="/qxc">
               <li>
                  <span class="qxc_icon"></span>
                  <i>七星彩</i>
               </li>
               </router-link>
               <router-link to="/qlc">
               <li>
                  <span class="qlc_icon"></span>
                  <i>七乐彩</i>
               </li>
               </router-link>
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
               {count:'00',rot:1},
               {count:'00',rot:1}
           ],
           isLogin:false,
           activeIndex:0,
           news:['[大乐透]166***4900喜中100元','[大乐透]166***4900喜中200元','[大乐透]166***4900喜中300元','[大乐透]166***4900喜中100元'],
           //将最后一条追加最后，无缝滚动
           timer:'',
           jiangchi:'7.99亿',
           transxIndex:0 //轮播图
        }
    },
    created(){
       const that=this;
       this.chose();
       this.$nextTick(()=>{
           this.isLogin=this.$store.state.isLogin
       });
    },
    methods:{
        chose(){
            this.rotates.forEach((v,i)=>{
                v.rot=1;
                if(i<5){
                    v.count=config.randomJx(35);
                }else{
                    v.count=config.randomJx(12);
                }
                
                setTimeout(()=>{
                    v.rot=0;
                },500*(i+1))
            });
        },
        open7() {
        this.$confirm(`[大乐透]<br/> 第2018077期 <br/>共1注1倍，您需要支付${this.jiangchi}元`, '投注确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true,
          dangerouslyUseHTMLString: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '购买成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
    },
     computed: {
    top() {
      return - this.activeIndex * 50 + 'px';
    },
    transx(){
        return - this.transxIndex*100;
    }
  },
  mounted() {
    window.timer=setInterval(()=> {
        console.log('-----');
      if(this.activeIndex+1<this.news.length){
         this.activeIndex+=1;
      }else{
          this.activeIndex=0;
      }
    }, 2000);
    window.timers=setInterval(()=> {
      if(this.transxIndex+1<2){
         this.transxIndex+=1;
      }else{
          this.transxIndex=0;
      }
    }, 2000);
  },
  destroyed(){
      clearInterval(window.timer);
      clearInterval(window.timers);
  },
}
</script>
<style  >
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
   height:0.7rem;
   width:0.7rem;
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
.letou-num button{
    background:#cc2b2f;
    font-size:0.34rem;
    border:none;
    border-radius:3px;
    padding:0.1rem 0.2rem;
    float:right;
    color:#fff;
    margin-right:0.2rem;

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
.popular-title{
    font-weight:900;
}
.domain-title{
    background:#fff;
    line-height:0.6rem;
    font-size:0.4rem;
    padding:0.2rem;
    font-weight:900;
}
.domain-title span{
    font-weight:normal;
}
.menu{
    width:100%;
    height:78px;
    margin-bottom:0.4rem;
    background:#fff;
    padding:0.4rem 0 0.2rem 0;
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
.menu li span{
    width: 100%;
    height:35px;
    line-height:35px;
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
.popular{
    height:50px;
    padding:0 0.2rem;
}
.popular .popular-title{
    display:inline-block;
    width:40%;
    line-height:50px;
    font-size:0.4rem;
    color:#333;
}
.popular .roll_news{
    display:inline-block;
    float:right;
    overflow:hidden;
    height:50px;
    color:#666;
}
.roll_news li{
    height:50px;
    line-height:50px;
    width:100%;
    float:none;
}
.roll_news ul.trans{
 transition:0.5s;
}
.roll_news ul{ 
     position:relative;
}
.refresh{
    background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzZiYmMwMi04ZTUyLTRmYTAtYmExOS1hZjNkOGUyNzEwODYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzhBMUI4NjZDREREMTFFN0EwRTJEMTBDOEQxNTkxMkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzhBMUI4NjVDREREMTFFN0EwRTJEMTBDOEQxNTkxMkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODE1YTVkNC01MTNmLTQ5ZjAtYmM2Yi1mZDliOWFlZWRhOTQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmZDdhMjRmNi0wZmZlLTExN2ItOTdmMS1mNzUwYWMyMzU5NmYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6rDTeaAAACJUlEQVR42rSWTUgVURTHx6egJqFkG7+oUCxFEXmk5OcmalGhuBBqKzwXUujCFn5QaQW1qTYPqbblIoiCCAsiIzEqIQLJatXCjZB9uDBbiP4O/AcGGee9p/MO/Ji5d+65/7l3zpxzM2KxmJPAKqETTkA1FKp/Gb7AS3gC34MmyQgQaodxaHWSs7cwCm/8HkZ8+nJgAl5L5DfE4QwcgGzYC1Xqi2tMq3wmNEfgivbBMzgGa3ALbsKfBKspgEEYgFx4B6fhl9+KMj0iP+AoDCUh4mjMMDTI1+Z4Dnv8hNahDx5pG+ad1G1evovQCHe2+0afoFsDd2rm2wX/oEdB5RsMYdhHuG0xAFddobw0id1QMLRAnQldhCkoD1noL0zqviuij3cSLqRhVVO6tpnQETVM6FLIQp91PRzx5C6zyyGLLela6Bd1uxUz/w3x3+3MUhYusuUlysApCDlbXnbZVvTV3ccQt8zErnja3yJK744izwlZLO6WEBN6rMZZyA9ZzHLnmP1PmdFo1CLjuLbOPuCrkMWm4acbdSMS6YfadOQjV8jK7z0VLdvK4l3MWQL1QaXcquN7qIAZqNmBSI185+D8dkKrcEpih+ADXFOZTmQFGms+B1UmHnoHWDB421asHsB+Vcg26IUyvdSaXsjKfqkSsuXI+zqOWQK4C+dgJZXj1nVoSnLbZnVumPZ7mBXgaAHSrOzeoR+6assBcgFewFNPhvG1TQEGAPHrcU7QMQ2xAAAAAElFTkSuQmCC');
    background-repeat:no-repeat;
    background-size:0.3rem;
    padding-left:0.3rem;
    background-position:left center;
    float:right;
}
</style>