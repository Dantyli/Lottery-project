<template>
   <div>
      <Headers title="关于我们" detail="" />
      <div style="height:50px"></div>
      <div class="a_logo">
         <img src="./img/logo.png"/>
         <p>快买彩</p>
      </div>
      <ul class="kefu">
         <li><span>联系客服</span> <a style="color:#00f000" href="tel:010-62169777">010-62169777</a></li>
         <li><span>咨询时间</span> <span style="color:#999">每日早08:00至20:00</span></li>
      </ul>
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
.kefu{
    margin-top:0.2rem;
    padding:0 0.2rem;
    background:#fff;
}
.kefu li{
    height:1rem;
    line-height:1rem;
    font-size:0.38rem;
    color:#333;
}
.a_logo{
    background:#fff;
    padding:0.8rem 0;
    text-align:center;
}
.a_logo img{
    width:2.2rem;
}
.a_logo p{
    line-height:1rem;
    font-size:0.4rem;
    color:#333;
}
</style>