<template>
    <div style="height:100%">
        <Headers title="七乐彩" />
        <div class="qlc">
        <p class="dbc_index">第20180621期 19:40开奖</p>
        <p class="dbc_tips"><span class="shake" style="color:#999">摇一摇机选</span>选择<span>7</span>个号，最高中奖<span>500</span>万元</p>
        <ul>
           <li @click="check(index)" v-for="(item,index) in first" :class="item.active?'check':''">{{item.num}}</li>
            <div style="clear:both"></div>
        </ul>
        </div>
        <Acount :total="total" :acount="acount" />
    </div>
</template>
<script>
import Headers from '../common/Header'
import Acount from  '../common/Acount'
import config from '../../config/config'
export default{
    data(){
        return{
            total:0,
            acount:0,
            first:[{num:'1',active:false},{num:'2',active:false},{num:'3',active:false},
            {num:'4',active:false},{num:'5',active:false},{num:'6',active:false},{num:'7',active:false},
            {num:'8',active:false},{num:'9',active:false},{num:10,active:false},{num:11,active:false},
            {num:12,active:false},{num:13,active:false},{num:14,active:false},{num:'15',active:false},{num:'16',active:false},{num:'17',active:false},
            {num:18,active:false},{num:19,active:false},{num:20,active:false},{num:21,active:false},
            {num:22,active:false},{num:23,active:false},{num:24,active:false},{num:25,active:false},
            {num:26,active:false},{num:27,active:false},{num:28,active:false},{num:29,active:false},{num:30,active:false}],
            farr:[]
        }
    },
    components:{
        Headers,
        Acount
    },
    methods:{
        check(i){
            this.first[i].active=!this.first[i].active;
           this.farr=this.first.filter(r=>{
              return r.active
           });
           this.acount=config.math(this.farr.length,7);
           this.total=this.acount*2;
        },
        clear(){
            this.first=this.first.map(r=>{
               let ar={}
               ar.num=r.num
               ar.active=false
                return ar
            })
            this.total=0;
            this.acount=0;
        },
        sure(){
            if(this.total==0){
                this.randomSelect();
                return
            }
            this.$store.dispatch('selectQlc',{pric:this.total,zhu:this.acount,nums:this.farr.map(v=>{return v.num})})
            this.$router.push({
                path:'/confirm',
                query:{
                    type:'qlc'
                }
            })
        },
        randomSelect(){
            this.clear()
            let numberArr = config.randomFromZero(30, 7);
            for(var i=0;i<numberArr.length;i++){
            this.first[numberArr[i]].active=true;
            }
             this.farr=this.first.filter(r=>{
              return r.active
           });
           this.acount=config.math(this.farr.length,7);
           this.total=this.acount*2;
        }
    },
    mounted(){
        this.$root.eventHub.$on('qlcClear',this.clear);
        this.$root.eventHub.$on('qlcBuy',this.sure)
        config.shakeAndRandom(this.randomSelect)
    },
    destroyed(){
        this.$root.eventHub.$off('qlcClear');
        this.$root.eventHub.$off('qlcBuy');
    }
}
</script>
<style>
.qlc{
    margin:55px 0;
    background:rgb(243,243,243);
    height:100%;
    }
     .qlc ul{
         text-align:center;
     }
    .qlc li{
        display:inline-block;
        width:1rem;
        height:1rem;
        text-align:center;
        line-height:1rem;
        color:#F95A04;
        font-size:0.42rem;
        border:1px solid #F95A04;
        border-radius:50%;
        margin:0.2rem
    }
    .qlc li.check{
        background:#F95A04;
        color:#fff;
    }
    .qlc .dbc_tips{
        color:#999;
        font-size:0.35rem;
        text-align:right;
        padding:0.3rem 0.2rem;
    }
    .qlc .dbc_tips span{
        color:#f00;
    }
.dbc_index {
    height:1rem;
    line-height: 1rem;
    color: #999;
    font-size: 0.35rem;
    background: #fff;
    text-align: center;
}

</style>