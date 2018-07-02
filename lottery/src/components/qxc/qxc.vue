<template>
   <div style="height:100%">
       <Headers title="七星彩" />
       <div class="fc  qxc" style="margin-top:50px">
         <p class="qxc_index">第20180622期，16:50开奖</p>
          <p class="tips"><span class="shake">摇一摇机选</span>选择<span>7</span>个号码，最高中奖<span>500</span>万元</p>
          <ul>
               <p>百万位</p>
               <li @click="check(1,index)" v-for="(item,index) in bwan" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
            <ul>
               <p>十万位</p>
               <li @click="check(2,index)" v-for="(item,index) in swan" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
          <ul>
               <p>万位</p>
               <li @click="check(3,index)" v-for="(item,index) in wan" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
           <ul>
               <p>千位</p>
               <li @click="check(4,index)" v-for="(item,index) in qian" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
          <ul>
               <p>百位</p>
               <li @click="check(5,index)" v-for="(item,index) in bai" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
            <ul>
               <p>十位</p>
                <li @click="check(6,index)" v-for="(item,index) in shi" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
            <ul>
               <p>个位</p>
                <li @click="check(7,index)" v-for="(item,index) in ge" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
       </div>
       <Acount :total="total" :acount="acount" />
   </div>
</template>
<script>
import Headers from '../common/Header'
import Acount from '../common/Acount'
import config from '../../config/config'
export default{
    data(){
        return{
            total:0,
            acount:0,
            tabs:[{name:'直选',status:1},{name:'组三',status:0},{name:'组六',status:0}],
             ge:[{num:0,active:false},{num:1,active:false},{num:2,active:false},{num:3,active:false},{num:4,active:false},
            {num:5,active:false},{num:6,active:false},{num:7,active:false},{num:8,active:false},{num:9,active:false}],
            shi:[{num:0,active:false},{num:1,active:false},{num:2,active:false},{num:3,active:false},{num:4,active:false},
            {num:5,active:false},{num:6,active:false},{num:7,active:false},{num:8,active:false},{num:9,active:false}],
            bai:[{num:0,active:false},{num:1,active:false},{num:2,active:false},{num:3,active:false},{num:4,active:false},
            {num:5,active:false},{num:6,active:false},{num:7,active:false},{num:8,active:false},{num:9,active:false}],
            qian:[{num:0,active:false},{num:1,active:false},{num:2,active:false},{num:3,active:false},{num:4,active:false},
            {num:5,active:false},{num:6,active:false},{num:7,active:false},{num:8,active:false},{num:9,active:false}],
            wan:[{num:0,active:false},{num:1,active:false},{num:2,active:false},{num:3,active:false},{num:4,active:false},
            {num:5,active:false},{num:6,active:false},{num:7,active:false},{num:8,active:false},{num:9,active:false}],
             bwan:[{num:0,active:false},{num:1,active:false},{num:2,active:false},{num:3,active:false},{num:4,active:false},
            {num:5,active:false},{num:6,active:false},{num:7,active:false},{num:8,active:false},{num:9,active:false}],
            swan:[{num:0,active:false},{num:1,active:false},{num:2,active:false},{num:3,active:false},{num:4,active:false},
            {num:5,active:false},{num:6,active:false},{num:7,active:false},{num:8,active:false},{num:9,active:false}],
            gearr:[],
            shiarr:[],
            baiarr:[],
            qianarr:[],
            wanarr:[],
             bwanarr:[],
            swanarr:[],
        }
    },
    components:{
        Headers,
        Acount
    },
    created(){
        this.$root.eventHub.$on('qxcClear',this.clear)
        this.$root.eventHub.$on('qxcBuy',this.sure)
        config.shakeAndRandom(this.randomSelect)
    },
    methods:{
        check(wei,index){
            switch(wei){
                case 1:
                this.bwan[index].active=!this.bwan[index].active;
                break;
                case 2:
                this.swan[index].active=!this.swan[index].active;
                break;
                case 3:
                this.wan[index].active=!this.wan[index].active;
                break;
                case 4:
                this.qian[index].active=!this.qian[index].active;
                break;
                case 5:
                this.bai[index].active=!this.bai[index].active;
                break;
                case 6:
                this.shi[index].active=!this.shi[index].active;
                break;
                case 7:
                this.ge[index].active=!this.ge[index].active;
                break;
            }
                this.shiarr=this.shi.filter(v=>{
                    return v.active
                })
                this.baiarr=this.bai.filter(v=>{
                    return v.active
                })
                this.gearr=this.ge.filter(v=>{
                    return v.active
                })
                 this.qianarr=this.qian.filter(v=>{
                    return v.active
                })
                 this.wanarr=this.wan.filter(v=>{
                    return v.active
                })
                 this.bwanarr=this.bwan.filter(v=>{
                    return v.active
                })
                 this.swanarr=this.swan.filter(v=>{
                    return v.active
                })
                    this.acount=config.math(this.baiarr.length,1)*config.math(this.shiarr.length,1)*config.math(this.gearr.length,1)*config.math(this.wanarr.length,1)*config.math(this.qianarr.length,1)*config.math(this.bwanarr.length,1)*config.math(this.swanarr.length,1)
            this.total=this.acount*2;
        },
        clear(){
            this.shi.map(v=>{
                v.active=false;
            });
             this.bai.map(v=>{
                v.active=false;
            });
             this.ge.map(v=>{
                v.active=false;
            });
             this.qian.map(v=>{
                v.active=false;
            });
             this.wan.map(v=>{
                v.active=false;
            });
            this.bwan.map(v=>{
                v.active=false;
            });
            this.swan.map(v=>{
                v.active=false;
            });
            this.total=0
            this.acount=0
            this.shiarr=[]
            this.baiarr=[]
            this.gearr=[]
            this.qianarr=[]
            this.wanarr=[]
            this.bwanarr=[]
            this.swanarr=[]
        },
        sure(){
            if(this.total==0){
                this.randomSelect();
                return;
            };
           this.$store.dispatch('selectQxc',{zhu:this.acount,pric:this.total,bwan:this.bwanarr.map(v=>{return v.num}),
           swan:this.swanarr.map(v=>{return v.num}),wan:this.wanarr.map(v=>{return v.num}),qian:this.qianarr.map(v=>{return v.num}),
           bai:this.baiarr.map(v=>{return v.num}),shi:this.shiarr.map(v=>{return v.num}),ge:this.gearr.map(v=>{return v.num})})
           this.$router.push({
               path:'/confirm',
               query:{
                   type:'qxc'
               }
           })
        },
        randomSelect(){
            this.clear()
            let bwan=config.random(10,1)
            let swan=config.random(10,1)
            let wan=config.random(10,1)
            let qian=config.random(10,1)
            let bai=config.random(10,1)
            let shi=config.random(10,1)
            let ge=config.random(10,1)
            this.bwan[--bwan].active=true
            this.swan[--swan].active=true
            this.wan[--wan].active=true
            this.qian[--qian].active=true
            this.bai[--bai].active=true
            this.shi[--shi].active=true
            this.ge[--ge].active=true
             this.shiarr=this.shi.filter(v=>{
                    return v.active
                })
                this.baiarr=this.bai.filter(v=>{
                    return v.active
                })
                this.gearr=this.ge.filter(v=>{
                    return v.active
                })
                 this.qianarr=this.qian.filter(v=>{
                    return v.active
                })
                 this.wanarr=this.wan.filter(v=>{
                    return v.active
                })
                 this.bwanarr=this.bwan.filter(v=>{
                    return v.active
                })
                 this.swanarr=this.swan.filter(v=>{
                    return v.active
                })
                    this.acount=config.math(this.baiarr.length,1)*config.math(this.shiarr.length,1)*config.math(this.gearr.length,1)*config.math(this.wanarr.length,1)*config.math(this.qianarr.length,1)*config.math(this.bwanarr.length,1)*config.math(this.swanarr.length,1)
            this.total=this.acount*2;
        }
    },
    destroyed(){
        this.$root.eventHub.$off('qxcClear');
        this.$root.eventHub.$off('qxcBuy');
    }
}
</script>
<style>
 .tips{
    padding:0.2rem;
    color:#999;
    font-size:0.35rem;
    text-align:right;
}
.tips span{
    color:#f00;
}
.qxc{
    margin-bottom:2.5rem;
}
.qxc ul{
    margin-top:0.2rem;
    padding-left:0.4rem;
    border-bottom:1px solid #e2e2e2;
}
.qxc ul p{
    height:0.6rem;
    line-height:0.6rem;
    color:#fff;
    background:rgb(1,195,185);
    width:1.5rem;
    font-size:0.38rem;
    padding-left:0.2rem;
    margin-left:-0.4rem;
}
.qxc ul li{
    display:inline-block;
    width:1rem;
    color:#ff6363;
    background:#fff;
    height:1rem;
    text-align:center;
    line-height:1rem;
    font-size:0.42rem;
    border:1px solid #ff6363;
    border-radius:50%;
    margin:0.2rem
}
.qxc ul li.active{
    background:#ff6363;
    color:#fff;
}
.qxc_index{
    height:1rem;
    line-height: 1rem;
    color: #999;
    font-size: 0.35rem;
    background: #fff;
    text-align: center;
}
</style>