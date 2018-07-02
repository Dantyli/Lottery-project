<template>
   <div style="height:100%">
       <Headers title="福彩3D" />
       <p class="fc_tab">
           <span @click="tab(index)" v-for="(item,index) in tabs" :class="item.status==1?'active':''">{{item.name}}</span>
           <div style="clear:left"></div>
       </p>
       <p class="fc_index">第20180621期，21:40开奖</p>
       <div class="fc" v-if="tabs[0].status==1">
          <p class="tips"><span class="shake">摇一摇机选</span>选择<span>3</span>个号码，中奖<span>1000</span>元</p>
           <ul>
               <p>百位</p>
               <li @click="check(1,1,index)" v-for="(item,index) in bai" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
            <ul>
               <p>十位</p>
                <li @click="check(1,2,index)" v-for="(item,index) in shi" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
            <ul>
               <p>个位</p>
                <li @click="check(1,3,index)" v-for="(item,index) in ge" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
       </div>
       <div class="fc" v-else-if="tabs[1].status==1">
          <p class="tips"><span class="shake">摇一摇机选</span>至少选择<span>2</span>个号码，中奖<span>320</span>元</p>
           <ul>
               <p>选号</p>
                <li @click="check(2,0,index)"  v-for="(item,index) in san" :class="item.active?'active':''">{{item.num}}</li>
           </ul>
       </div>
        <div class="fc" v-else-if="tabs[2].status==1">
          <p class="tips"><span class="shake">摇一摇机选</span>至少选择<span>3</span>个号码，中奖<span>160</span>元</p>
           <ul>
               <p>选号</p>
               <li @click="check(3,0,index)" v-for="(item,index) in liu" :class="item.active?'active':''">{{item.num}}</li>
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
            san:[{num:0,active:false},{num:1,active:false},{num:2,active:false},{num:3,active:false},{num:4,active:false},
            {num:5,active:false},{num:6,active:false},{num:7,active:false},{num:8,active:false},{num:9,active:false}],
            liu:[{num:0,active:false},{num:1,active:false},{num:2,active:false},{num:3,active:false},{num:4,active:false},
            {num:5,active:false},{num:6,active:false},{num:7,active:false},{num:8,active:false},{num:9,active:false}],
            gearr:[],
            shiarr:[],
            baiarr:[],
            sanarr:[],
            liuarr:[]
        }
    },
    components:{
        Headers,
        Acount
    },
    created(){
        this.$root.eventHub.$on('fcClear',this.clear);
        this.$root.eventHub.$on('fcBuy',this.sure);
        config.shakeAndRandom(this.randomSelect)
    },
    methods:{
        check(type,wei=0,index){
            switch(type){
                case 1:
                if(wei==1){
                   this.bai[index].active=!this.bai[index].active;
                };
                 if(wei==2){
                   this.shi[index].active=!this.shi[index].active;
                };
                 if(wei==3){
                   this.ge[index].active=!this.ge[index].active;
                };
                this.shiarr=this.shi.filter(v=>{
                    return v.active
                })
                this.baiarr=this.bai.filter(v=>{
                    return v.active
                })
                this.gearr=this.ge.filter(v=>{
                    return v.active
                })
                this.acount=config.math(this.baiarr.length,1)*config.math(this.shiarr.length,1)*config.math(this.gearr.length,1)
                break;
                case 2:
                this.san[index].active=!this.san[index].active;
                this.sanarr=this.san.filter(v=>{
                    return v.active
                });
                this.acount=config.math(this.sanarr.length,2)*2;
                break;
                 case 3:
                this.liu[index].active=!this.liu[index].active;
                this.liuarr=this.liu.filter(v=>{
                    return v.active
                });
                this.acount=config.math(this.liuarr.length,3);
                break;
            }
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
             this.san.map(v=>{
                v.active=false;
            });
             this.liu.map(v=>{
                v.active=false;
            });
            this.total=0
            this.acount=0
            this.shiarr=[]
            this.baiarr=[]
            this.gearr=[]
            this.sanarr=[]
            this.liuarr=[]
        },
        sure(){
            if(this.total==0){
                this.randomSelect();
                return;
            }
            if(this.tabs[0].status==1){
                this.$store.dispatch('selectFc',{type:1,zhu:this.acount,pric:this.total,
               ge:this.gearr.map(v=>{return v.num}),shi:this.shiarr.map(v=>{return v.num}),bai:this.baiarr.map(v=>{return v.num})})
               
            }else if(this.tabs[1].status==1){
                   this.$store.dispatch('selectFc',{type:2,zhu:this.acount,pric:this.total,
               ge:this.sanarr.map(v=>{return v.num})})
            }else{
                this.$store.dispatch('selectFc',{type:3,zhu:this.acount,pric:this.total,
               ge:this.liuarr.map(v=>{return v.num})})
            }
             this.$router.push({
                    path:'/confirm',
                    query:{
                        type:'fc'
                    }
                })
        },
        tab(i){
            this.tabs.map(v=>{
                return v.status=0;
            })
            this.clear()
            this.tabs[i].status=1;
        },
        //机选
        randomSelect(){
            this.clear();
            if(this.tabs[0].status==1){
                let numberArr = config.randomFromZero(10, 3);
               this.bai[numberArr[0]].active=true
               this.shi[numberArr[1]].active=true
               this.ge[numberArr[2]].active=true
                this.shiarr=this.shi.filter(v=>{
                    return v.active
                })
                this.baiarr=this.bai.filter(v=>{
                    return v.active
                })
                this.gearr=this.ge.filter(v=>{
                    return v.active
                })
                this.acount=config.math(this.baiarr.length,1)*config.math(this.shiarr.length,1)*config.math(this.gearr.length,1)
            }else if(this.tabs[1].status==1){
                let numberArr = config.randomFromZero(10, 2);
                for(var i=0;i<numberArr.length;i++){
                      this.san[numberArr[i]].active=true
                }
                 this.sanarr=this.san.filter(v=>{
                    return v.active
                });
                this.acount=config.math(this.sanarr.length,2)*2;
            }else{
                let numberArr = config.randomFromZero(10, 3);
                for(var i=0;i<numberArr.length;i++){
                this.liu[numberArr[i]].active=true;
                }
                this.liuarr=this.liu.filter(v=>{
                    return v.active
                });
                this.acount=config.math(this.liuarr.length,3);
            }
           this.total=this.acount*2;
        }
    },
    destroyed(){
        this.$root.eventHub.$off('fcClear');
        this.$root.eventHub.$off('fcBuy');
    }
}
</script>
<style>
@import './css/fc.css'
</style>