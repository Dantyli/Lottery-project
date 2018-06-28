<template>
   <div>
   <Headers title="资金明细" detail="" />
   <div class="l_tabs">
      <p @click="shows(1)">2018年06月 <img src="./img/arow.png" :class="tabs[0].active?'rotat':''" /></p>
      <p @click="shows(2)">分类 <img src="./img/arow.png" :class="tabs[1].active?'rotat':''" /></p>
   </div>
   <ul class="l_types" v-if="tabs[1].active">
      <li v-for="(item,index) in types" :class="item.act?'active':''" @click="select(index)">{{item.name}}</li>
   </ul>
   <ul class="l_types" v-if="tabs[0].active">
      <li v-for="item in types" :class="item.act?'active':''">2018-07-01</li>
   </ul>
   <div style="height:91px"></div>
   <tempList :list="list" />
   <div class="mask" v-if="tabs[0].active||tabs[1].active" @click="hide"></div>
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
            tabs:[{active:false},{active:false}],
            types:[{name:'全部',act:true},{name:'购彩',act:false},{name:'充值',act:false},{name:'提现',act:false}
            ,{name:'账户返奖',act:false}]
        }
    },
    methods:{
        shows(i){
            if(i==1){
                this.tabs[1].active=false
                this.tabs[0].active=!this.tabs[0].active
            }else{
                this.tabs[0].active=false
                this.tabs[1].active=!this.tabs[1].active
            }
        },
        hide(){
            this.tabs[0].active=false
            this.tabs[1].active=false
        },
        select(i){
            this.types.forEach(v=>{
                v.act=false;
            })
            this.types[i].act=true;
            this.hide();
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
.l_types li.active{
    color:#f00;
}
.l_tabs{
    position:fixed;
    z-index:5;
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