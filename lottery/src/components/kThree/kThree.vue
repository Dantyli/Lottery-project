<template>
<div style="height:100%">
   <Headers :title="title" />
    <div class="kThree">
    <ul>
        <li @click="check(index,1)" v-for="(item,index) in first" :class="item.active?'check':''">{{item.num}}</li>
        <div style="clear:both"></div>
    </ul>
        <ul>
        <li @click="check(index,2)" v-for="(item,index) in second" :class="item.active?'check':''">{{item.num}}</li>
        <div style="clear:both"></div>
    </ul>
     <ul>
        <li @click="check(index,3)" v-for="(item,index) in thrid" :class="item.active?'check':''">{{item.num}}</li>
        <div style="clear:both"></div>
    </ul>
    </div>
    <Acount :total="total" :acount="acount" />
</div>
</template>
<script>
import Headers from '../common/Header'
import Acount from '../common/Acount'
export default{
    data(){
      return{
          total:0,
          acount:0,
           first:[{num:'01',active:false},{num:'02',active:false},{num:'03',active:false},
            {num:'04',active:false},{num:'05',active:false},{num:'06',active:false},{num:'07',active:false},
            {num:'08',active:false},{num:'09',active:false},{num:10,active:false},{num:11,active:false},
            {num:12,active:false},{num:13,active:false},{num:14,active:false}],
            second:[ {num:11,active:false} ,{num:12,active:false}, {num:13,active:false}, {num:14,active:false}
            , {num:15,active:false}, {num:16,active:false} ,{num:17,active:false} ,{num:18,active:false}],
            thrid:[{num:'01',active:false},{num:'02',active:false},{num:'03',active:false},
            {num:'04',active:false},{num:'05',active:false},{num:'06',active:false}],
            one:'',
            two:'',
            three:'',
            title:'快3'
      }
    },
    components:{
        Headers,
        Acount
    },
    mounted(){
        this.$root.eventHub.$on('cleart',this.cleart);
        this.$root.eventHub.$on('subAcount',this.subAcount)
    },
    methods:{
        check(i,type){
            switch(type){
                case 1:
                this.first.map(v=>{
                    return v.active=false;
                })
                this.one=this.first[i].num
                this.$set(this.first[i],'active',true);
                break;
                case 2:
                this.second.map(v=>{
                    return v.active=false
                })
                this.two=this.second[i].num
                 this.$set(this.second[i],'active',true);
                break;
                case 3:
                this.thrid.map(v=>{
                    return v.active=false
                })
                this.three=this.thrid[i].num
                this.$set(this.thrid[i],'active',true);
                break;
            }
            let flen=this.first.filter(r=>{
              return r.active
            });
           let  slen=this.second.filter(r=>{
              return r.active
           });
           let tlen=this.thrid.filter(r=>{
               return r.active
           })
           if(flen.length+slen.length+tlen.length==3){
                this.acount=flen.length+slen.length+tlen.length;
                this.total=this.acount*3;
           }
        },
        cleart(){
             this.first.map(v=>{
                    return v.active=false;
                })
                this.second.map(v=>{
                    return v.active=false
                })
                this.thrid.map(v=>{
                    return v.active=false
                })
                this.acount=0;
                this.total=0;
        },
        subAcount(){
            const one=this.one;
            const two=this.two;
            const three=this.three;
            if(this.acount<3){
                this.$message('必须选购3注');
                return 
            }
            this.$message({
                'type':'success',
                message:`购买号码${one},${two},${three}`,
                duration:1500
            })
        }
    }
}
</script>
<style>
.kThree{
margin:55px 0;
background:rgb(243,243,243);
height:100%;
}
.kThree ul{
    border-top:1px solid #e2e2e2;
    padding:0 0.4rem;
}
.kThree ul:nth-of-type(1) li{
color:#f00;
}
.kThree ul:nth-of-type(2) li{
color:#0e52a7;
}

.kThree ul:nth-of-type(1) li.check{
background-color:#f00;
color:#fff;
}
.kThree ul:nth-of-type(2) li.check{
background-color:#0e52a7;
color:#fff
}
.kThree ul:nth-of-type(3) li{
    color:#333
}
.kThree ul:nth-of-type(3) li.check{
background-color:#ee0;
color:#fff
}
.kThree li{
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