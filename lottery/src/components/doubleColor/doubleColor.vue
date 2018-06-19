<template>
    <div style="height:100%">
        <Headers :title="title" />
        <div class="doubleColor">
        <ul>
           <li @click="check(index,1)" v-for="(item,index) in first" :class="item.active?'check':''">{{item.num}}</li>
            <div style="clear:both"></div>
        </ul>
         <ul>
            <li @click="check(index,2)" v-for="(item,index) in second" :class="item.active?'check':''">{{item.num}}</li>
            <div style="clear:both"></div>
        </ul>
        </div>
        <Acount :total="total" :acount="acount" />
    </div>
</template>
<script>
import Headers from '../common/Header'
import Acount from  '../common/Acount'
export default{
    data(){
        return{
            title:'双色球',
            total:0,
            acount:0,
            first:[{num:'01',active:false},{num:'02',active:false},{num:'03',active:false},
            {num:'04',active:false},{num:'05',active:false},{num:'06',active:false},{num:'07',active:false},
            {num:'08',active:false},{num:'09',active:false},{num:10,active:false},{num:11,active:false},
            {num:12,active:false},{num:13,active:false},{num:14,active:false}],
            second:[ {num:11,active:false} ,{num:12,active:false}, {num:13,active:false}, {num:14,active:false}
            , {num:15,active:false}, {num:16,active:false} ,{num:17,active:false} ,{num:18,active:false}]
        }
    },
    components:{
        Headers,
        Acount
    },
    methods:{
        check(i,type){
           switch (type){
               case 1:
               this.first[i].active=!this.first[i].active;
               break;
               case 2:
               this.second[i].active=!this.second[i].active;
               break;
           }
           let flen=this.first.filter(r=>{
              return r.active
           });
          let  slen=this.second.filter(r=>{
              return r.active
           })
           this.acount=flen.length+slen.length;
           this.total=this.acount*2;
        },
        clear(){
            this.first=this.first.map(r=>{
               let ar={}
               ar.num=r.num
               ar.active=false
                return ar
            })
            this.second=this.second.map(r=>{
                let ar={}//创建新对象，直接赋值报错
               ar.num=r.num
               ar.active=false
                return ar
            });
            this.total=0;
            this.acount=0;
        },
        sure(o,t){
            if(this.total==0){
                return
            }
            this.$store.dispatch('dbc',{num:o,price:t});
            this.$message({
                message:`购买成功,${o}注共${t}元`,
                type:'success',
                duration:'800'
            })
            this.clear();
        }
    },
    mounted(){
        this.$root.eventHub.$on('clear',this.clear);
        this.$root.eventHub.$on('sureBuy',this.sure)
    }
}
</script>
<style>
.doubleColor{
margin:55px 0;
background:rgb(243,243,243);
height:100%;
}
.doubleColor ul{
    border-top:1px solid #e2e2e2;
    padding:0 0.4rem;
}
.doubleColor ul:nth-of-type(1) li{
color:#f00;
}
.doubleColor ul:nth-of-type(1) li.check{
background-color:#f00;
color:#fff;
}
.doubleColor ul:nth-of-type(2) li.check{
background-color:#0e52a7;
color:#fff
}
.doubleColor li{
    diplay:inline-block;
    width:1rem;
    height:1rem;
    text-align:center;
    line-height:1rem;
    font-size:0.42rem;
    border:1px solid #e2e2e2;
    border-radius:50%;
    float:left;
    margin:0.2rem
}
</style>