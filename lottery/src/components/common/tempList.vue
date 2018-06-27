<template>
    <ul class="templist">
         <li v-for="item in list">
           <p>{{item.type}}</p>
           <p>{{item.time}}</p>
           <span>+{{item.price}}</span>
         </li>
      </ul>
</template>
<script>
export default{
    props:['list']
}
</script>
<style>
.templist{
    background:#fff;
    padding:0 0.2rem;
}
.templist li{
    padding:0.1rem 0;
    line-height:0.6rem;
    font-size:0.38rem;
    border-bottom:1px solid #ddd;
    position:relative;
}
.templist li p:nth-of-type(1){
    color:#333;
    font-size:0.4rem;
}
.templist li p:nth-of-type(2){
    color:#999;
}
.templist li span{
    position:absolute;
    right:0.2rem;
    top:0.5rem;
    color:#000;
}
</style>