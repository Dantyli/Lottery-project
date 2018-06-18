<template>
 <transition name="slide">
    <ul class="recordLog">
       <li v-for="item in list">
         于{{item.date}}支付了{{item.price}}元
       </li>
    </ul>
    </transition>
</template>
<script>
    export default{
        props:['list']
    }
</script>
<style>
   .recordLog{
       width:100%;
       padding:0.2rem;
       background:#fff;
   }
   .recordLog li{
       height:1.3rem;
       line-height:1.3rem;
       border-bottom:1px solid #e2e2e2;
       font-size:.38rem;
   }
</style>