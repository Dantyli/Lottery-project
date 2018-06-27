<template>
   <div style="height:100%">
       <Headers title="排列五" />
       <div class="fc" style="margin-top:50px">
          <p class="fc_index">第20180621期，21:40开奖</p>
          <p class="tips"><span class="shake">摇一摇机选</span>选择<span>3</span>个号码，中奖<span>1000</span>元</p>
            <ul>
               <p>万位</p>
               <li @click="check(1,index)" v-for="(item,index) in wan" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
           <ul>
               <p>千位</p>
               <li @click="check(2,index)" v-for="(item,index) in qian" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
          <ul>
               <p>百位</p>
               <li @click="check(3,index)" v-for="(item,index) in bai" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
            <ul>
               <p>十位</p>
                <li @click="check(4,index)" v-for="(item,index) in shi" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
            <ul>
               <p>个位</p>
                <li @click="check(5,index)" v-for="(item,index) in ge" :class="item.active?'active':''">{{item.num}}</li>
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
            gearr:[],
            shiarr:[],
            baiarr:[],
            qianarr:[],
            wanarr:[]
            
        }
    },
    components:{
        Headers,
        Acount
    },
    created(){
        this.$root.eventHub.$on('plfClear',this.clear)
        this.$root.eventHub.$on('plfBuy',this.sure)
        config.shakeAndRandom(this.randomSelect)
    },
    methods:{
           check(wei,index){
            switch(wei){
                case 1:
                this.wan[index].active=!this.wan[index].active;
                break;
                case 2:
                this.qian[index].active=!this.qian[index].active;
                break;
                case 3:
                this.bai[index].active=!this.bai[index].active;
                break;
                case 4:
                this.shi[index].active=!this.shi[index].active;
                break;
                case 5:
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
                 this.acount=config.math(this.baiarr.length,1)*config.math(this.shiarr.length,1)*config.math(this.gearr.length,1)*config.math(this.wanarr.length,1)*config.math(this.qianarr.length,1)
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
            this.total=0
            this.acount=0
            this.shiarr=[]
            this.baiarr=[]
            this.gearr=[]
            this.qianarr=[]
            this.wanarr=[]
        },
        sure(){
            if(this.total==0){
                this.randomSelect();
                return;
            }
            alert('pailie5')
        },
        randomSelect(){
            this.clear()
           let numberArr=config.randomFromZero(10,5);
           this.wan[numberArr[0]].active=true
           this.qian[numberArr[1]].active=true
           this.bai[numberArr[2]].active=true
           this.shi[numberArr[3]].active=true
           this.ge[numberArr[4]].active=true
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
                this.acount=config.math(this.baiarr.length,1)*config.math(this.shiarr.length,1)*config.math(this.gearr.length,1)*config.math(this.wanarr.length,1)*config.math(this.qianarr.length,1)
                this.total=this.acount*2;
        }
    },
    destroyed(){
        this.$root.eventHub.$off('plfClear');
        this.$root.eventHub.$off('plfBuy');
    }
}
</script>
<style>
@import '../fc/css/fc.css'
</style>