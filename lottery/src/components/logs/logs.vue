<template>
   <div>
   <Headers title="资金明细" detail="" />
   <div class="l_tabs">
      <p>2018年06月 <img src="./img/arow.png" /></p>
      <p @click="shows">分类 <img src="./img/arow.png" :class="tabs[1].active?'rotat':''" /></p>
   </div>
   <ul class="l_types" v-if="show">
      <li v-for="item in types">{{item}}</li>
   </ul>
   <div style="height:91px"></div>
   <tempList :list="list" />
   </div>
</template>
<script>
import Headers from '../common/NewHead'
import tempList from '../common/tempList'
export default{
    components:{
        Headers,
        tempList
    },
    data(){
        return{
            list:[{type:'充值',time:'2018-06-25 15:45',price:4000.00},{type:'充值',time:'2018-06-25 15:45',price:4000.00},{type:'提现',time:'2018-09-09',price:11}],
            tabs:[{active:false},{active:true}],
            types:['全部','购彩','充值','提现','账户返奖'],
            show:false
        }
    },
    methods:{
        shows(){
            this.show=!this.show
        }
    }
}
</script>
<style>
.l_types{
    position:fixed;
    top:91px;
    z-index:12;
    background:#fff;
    padding:0 0.2rem;
    width:100%;
}
.l_types li{
    height:1.2rem;
    line-height:1.2rem;
    border-bottom:1px solid #ddd;
    font-size:0.38rem;
}
.rotat{
    transform:rotate(180deg)
}
.l_tabs{
    position:fixed;
    top:50px;
    height:40px;
    line-height:40px;
    text-align:center;
    font-size:0.38rem;
    border-bottom:1px solid #ddd;
    background:#fff;
    width:100%;
}
.l_tabs p{
    width:49%;
    display:inline-block;
    float:left;
}
.l_tabs p:nth-of-type(1){
    border-right:1px solid #ddd;
}
.l_tabs p img{
    width:0.3rem;
    vertical-align:middle;
}
</style>