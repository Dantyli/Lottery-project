<template>
    <div style="height:100%">
        <Headers title="大乐透" />
        <div class="doubleColor">
        <p class="dbc_index">第20180621期 19:40开奖</p>
        <p class="dbc_tips"><span class="shake">摇一摇机选</span>至少选择5个红球，2个蓝球</p>
        <ul>
           <li @click="check(index,1)" v-for="(item,index) in red" :class="item.active?'check':''">{{item.num}}</li>
            <div style="clear:both"></div>
        </ul>
         <ul>
            <li @click="check(index,2)" v-for="(item,index) in blue" :class="item.active?'check':''">{{item.num}}</li>
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
import Util from '../../config/util'
export default{
    data(){
        return{
            total:0,
            acount:0,
            red:[],
            blue:[],
             redarr:[],
             bluearr:[]
        }
    },
    created(){
        let red=[],blue=[];
        for(var i=1;i<36;i++){
            let obj={}
            obj.active=false;
            obj.num=Util.formatNum(i);
            red.push(obj)
        }
        for(var i=1;i<13;i++){
            let obj={}
            obj.active=false;
            obj.num=Util.formatNum(i);
            blue.push(obj)
        }
        this.red=red;
        this.blue=blue
        config.shakeAndRandom(this.randomSelect)
    },
    components:{
        Headers,
        Acount
    },
    methods:{
        check(i,type){
           switch (type){
               case 1:
               this.red[i].active=!this.red[i].active;
               break;
               case 2:
               this.blue[i].active=!this.blue[i].active;
               break;
           }
           this.redarr=this.red.filter(r=>{
              return r.active
           });
          this.bluearr=this.blue.filter(r=>{
              return r.active
           })
            this.acount=config.math(this.redarr.length,5)*config.math(this.bluearr.length,2)
            this.total=this.acount*2
        },
        clear(){
            this.red=this.red.map(r=>{
               let ar={}
               ar.num=r.num
               ar.active=false
                return ar
            })
            this.blue=this.blue.map(r=>{
                let ar={}//创建新对象，直接赋值报错
               ar.num=r.num
               ar.active=false
                return ar
            });
            this.total=0;
            this.redarr=[]
            this.bluearr=[]
            this.acount=0;
        },
        sure(){
            if(this.total==0){
                this.randomSelect();
                return
            }
            this.$store.dispatch('selectDlt',{red:this.redarr,blue:this.bluearr,zhu:this.acount,pric:this.total})
           this.$router.push({
               path:'confirm',
               query:{
                   type:'dlt'
               }
           });
        },
        randomSelect(){
            const x=5,y=2;
            this.clear();
            //红球
            let m=35
            let randomRed=config.random(m,x);
             for(var i = 0; i < randomRed.length; i++){
                let j = randomRed[i];
                this.red[j].active=true;
            }
            //蓝球
            const n=12;
            let randomBlue=config.random(n,y);
            for(var i=0;i<randomBlue.length;i++){
                let j=randomBlue[i];
                this.blue[j].active=true;
            }
            this.redarr=this.red.filter(r=>{
              return r.active
           });
          this.bluearr=this.blue.filter(r=>{
              return r.active
           })
            this.acount=config.math(this.redarr.length,5)*config.math(this.bluearr.length,2)
            this.total=this.acount*2
        }
    },
    mounted(){
        this.$root.eventHub.$on('dltClear',this.clear);
        this.$root.eventHub.$on('dltBuy',this.sure)
    },
    destroyed(){
        this.$root.eventHub.$off('dltClear');
        this.$root.eventHub.$off('dltBuy');
    }
}
</script>
<style>
@import '../doubleColor/css/doubleColor.css'

</style>