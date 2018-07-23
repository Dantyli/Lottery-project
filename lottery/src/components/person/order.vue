<template>
    <div>
        <Headers title="投注记录" />
        <div class="order-tab">
            <p @click="handleClick(0)" :class="tabs[0]?'active':''"><span>全部彩票</span></p>
            <p @click="handleClick(1)" :class="tabs[1]?'active':''"><span>等待开奖</span></p>
            <p  @click="handleClick(2)" :class="tabs[2]?'active':''"><span>中奖记录</span></p>
            <div style="clear:both"></div>
        </div>
        <tempList :list="list" />
    </div>
</template>
<script>
import Headers from '../common/NewHead.vue'
import tempList from '../common/tempList'
export default{
    data(){
        return{
             list:[],
             tabs:[],
             lists:[[{type:'111',time:'2018-06-25 15:45',price:4000.00}],
             [{type:'222',time:'2018-06-25 15:45',price:4000.00}],[{type:'333',time:'2018-06-25 15:45',price:4000.00}]]
        }
    },
    methods:{
        handleClick(i){
            const defaultTabs=[false,false,false];
            this.tabs=[...defaultTabs]
            this.tabs[i]=true
            this.list=this.lists[i]
        }
    },
    created(){
        this.handleClick(0);
    },
    components:{
        Headers,
        tempList
    }
}
</script>
<style>
.order-tab{
    margin-top:55px;
    margin-bottom:5px;
    height:0.8rem;
    line-height:0.8rem;
    text-align:center;
    background:#fff;
}
.order-tab p{
    display:inline-block;
    width:33%;
    color:#333;
    font-size:0.35rem;
    float:left;
}
.order-tab p span{
    display:inline-block;
}
.order-tab .active span{
    color:#d20000;
    border-bottom:1px solid #d20000;
}
</style>