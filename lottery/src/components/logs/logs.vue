<template>
    <div class="log">
        <Headers :title="title" />
        <p class="l_tabs">
        <span :class="type==index?'active':''" v-for="(item,index) in tabs" @click="change(index)">{{item}}</span>
        </p>
        <div style="margin-top:80px;position:relative">
        <recordLog :list="list" />
        </div>
    </div>
</template>
<script>
import Headers from '../common/Header'
import recordLog from '../common/recordLog'
export default{
    data(){
        return{
            title:'我的彩票',
            type:0,
            list:[{date:'2018-01-01',price:12},{date:'2018-01-01',price:12},{date:'2018-01-01',price:12},{date:'2018-01-01',price:12}
            ,{date:'2018-01-01',price:12}],
            tabs:['全部彩票','等待开奖','中奖纪录'],
            all:[[{date:'2018-01-01',price:12},{date:'2018-01-01',price:12},{date:'2018-01-01',price:12},{date:'2018-01-01',price:12}
            ,{date:'2018-01-01',price:12}],[{date:'2018-02-02',price:12},{date:'2018-02-02',price:12},{date:'2018-02-02',price:12},{date:'2018-02-02',price:12}
            ,{date:'2018-02-02',price:12}],[{date:'2018-03-03',price:12},{date:'2018-03-03',price:12},{date:'2018-01-01',price:12},{date:'2018-01-01',price:12}
            ,{date:'2018-01-01',price:12}]]

        }
    },
    components:{
        Headers,
        recordLog
    },
    methods:{
        change(i){
            this.list=this.all[i];
            this.type=i;
        }
    }
}
</script>
<style>
.l_tabs{
    position:fixed;
    top:50px;
    width:100%;
    height:0.8rem;
    line-height:0.8rem;
}
.l_tabs span{
    width:33%;
    display:inline-block;
    text-align:center;
}
.l_tabs span.active{
    color:#f00;
}
</style>