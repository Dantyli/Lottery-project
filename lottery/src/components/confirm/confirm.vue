<template>
    <div style="height:100%">
       <Headers title="确认投注" />
       <div class="confirm">
          <div style="height:50px"></div>
          <ul class="confirm-opt">
             <li @click="ziXaun">+自选一注</li>
             <li @click="jiXuan">+机选</li>
             <li @click="clearList">清空列表</li>
          </ul>
          <div class="confirm-list" v-if="items.length>0">
            <img src="./img/top.png" />
            <ul>
                <li v-for="item in items">
                   <i class="delete_icon" @click="dele(item.id)" />
                   <p>{{item.number}} </p>
                   <p>{{item.type==1?'普通投注':item.type==2?'组三':'组六'}}
                    共{{item.zhu}}注{{item.pric}}元</p>
                </li>
            </ul>
            <p class="xiy">我已阅读并同意《用户服务协议》</p>
          </div>
          <h2 v-else style="text-align:center">
            there is nothing!
          </h2>
          
       </div>
       <div class="confirm_btm">
          <div>
             <span class="tzz">投注站</span><p>追 <input type="text" @input="chage" v-model="qi" /> 期<span style="color:#ddd;margin:0 0.1rem;">|</span>投 <input @input="chage" type="text" v-model="bei" /> 倍</p>
          </div>
          <div>
             <p>{{zhu}}<span>注</span>{{qi}}<span>期</span>{{bei}}<span>倍</span> 共{{total}}元</p><button>下一步</button>
          </div>
       </div>
    </div>
</template>
<script>
    import Headers from '../common/Header'
    import config  from '../../config/config'
    import util from '../../config/util'
    export default{
        data(){
            return{
               items:[],
               qi:1,
               bei:1,
               zhu:'',
               total:0,
               type:''
            }
        },
        components:{
            Headers
        },
        created(){
            this.type=this.$route.query.type
            this.init()
        },
        methods:{
           init(){
               let zhus=0;
               this.items=this.$store.state[this.type].det;
               this.$store.state[this.type].det.forEach(v=>{
                   zhus+=v.zhu;
               });
               this.zhu=zhus;
               this.total=this.zhu*this.qi*2*this.bei
               console.log(this.items)
           },
           ziXaun(){
               switch(this.type){
                   case 'dlt':
                   this.$router.push('/dlt');
                   break;
                    case 'dbc':
                   this.$router.push('/dbc');
                   break;
                    case 'fc':
                   this.$router.push('/fc');
                   break;
                    case 'plt':
                   this.$router.push('/plt');
                   break;
                    case 'plf':
                   this.$router.push('/plf');
                   break;
                    case 'qxc':
                   this.$router.push('/qxc');
                   break;
                    case 'qlc':
                   this.$router.push('/qlc');
                   break;
               }
           },
           clearList(){
               switch(this.type){
                   case 'dlt':
                   this.$store.dispatch('clearDlt');
                   break;
                    case 'dbc':
                  this.$store.dispatch('clearDbc');
                   break;
                    case 'fc':
                  this.$store.dispatch('clearFc');
                   break;
                    case 'plt':
                   this.$store.dispatch('clearPlt');
                   break;
                    case 'plf':
                  this.$store.dispatch('clearPlf');
                   break;
                    case 'qxc':
                  this.$store.dispatch('clearQxc');
                   break;
                    case 'qlc':
                   this.$store.dispatch('clearQlc');
                   break;
               }
               this.init();
           },
           jiXuan(){
               switch(this.type){
                   case 'dlt':
                   let red=config.random(35,5);
                   let blue=config.random(12,2);
                   let ored=red.map(v=>{
                       let obj={}
                       obj.num=util.formatNum(v)
                       return obj;
                   });
                   let oblue=blue.map(v=>{
                       let obj={}
                       obj.num=util.formatNum(v)
                       return obj;
                   })
                   this.$store.dispatch('selectDlt',{red:ored,blue:oblue,zhu:1,pric:2});
                   break;
                   case 'dbc':
                    let reds=config.random(33,6);
                   let blues=config.random(16,1);
                   let oreds=reds.map(v=>{
                       let obj={}
                       obj.num=util.formatNum(v)
                       return obj;
                   });
                   let oblues=blues.map(v=>{
                       let obj={}
                       obj.num=util.formatNum(v)
                       return obj;
                   })
                   this.$store.dispatch('selectDbc',{red:oreds,blue:oblues,zhu:1,pric:2});
                   break;
                   case 'fc':
                   let numberArr = config.randomFromZero(10, 3);
                    this.$store.dispatch('selectFc',{type:1,zhu:1,pric:2,
                    ge:[numberArr[0]],shi:[numberArr[1]],bai:[numberArr[2]]});
                    break;
                     case 'plt':
                   let numberAr = config.randomFromZero(10, 3);
                    this.$store.dispatch('selectPlt',{type:1,zhu:1,pric:2,
                    ge:[numberAr[0]],shi:[numberAr[1]],bai:[numberAr[2]]});
                    break;
                    case 'plf':
                   let numberA = config.randomFromZero(10,5);
                    this.$store.dispatch('selectPlf',{type:1,zhu:1,pric:2,
                    ge:[numberA[0]],shi:[numberA[1]],bai:[numberA[2]],qian:[numberA[3]],wan:[numberA[4]]});
                    break;
                    case 'qxc':
                     this.$store.dispatch('selectQxc',{pric:2,zhu:1,bwan:[config.random(10,1)],swan:[config.random(10,1)],
                     wan:[config.random(10,1)],qian:[config.random(10,1)],bai:[config.random(10,1)],shi:[config.random(10,1)],
                     ge:[config.random(10,1)]});
                     break;
                     case 'qlc':
                     let nums=[]
                     for(let i=0;i<7;i++){
                         nums.push(config.random(10,1));
                     }
                     this.$store.dispatch('selectQlc',{pric:2,zhu:1,nums:nums})
               }
                this.init();
           },
           dele(i){
               switch(this.type){
                   case 'dlt':
                   this.$store.dispatch('delDlt',{id:i});
                   break;
                   case 'dbc':
                   this.$store.dispatch('delDbc',{id:i});
                   break;
                    case 'fc':
                   this.$store.dispatch('delFc',{id:i});
                   break;
                    case 'plt':
                   this.$store.dispatch('delPlt',{id:i});
                   break;
                    case 'plf':
                   this.$store.dispatch('delPlf',{id:i});
                   break;
                    case 'qxc':
                   this.$store.dispatch('delQxc',{id:i});
                   break;
                    case 'qlc':
                   this.$store.dispatch('delQlc',{id:i});
                   break;
               }
               this.init();
           },
           chage(){
               this.init()
           }
        }
    }
</script>
<style>
  .tzz{
      color:#666;
      border:1px solid #ddd;
      display:inline-block;
      height:0.6rem;
      padding:0 0.2rem;
      line-height:0.6rem;
      border-radius:3px;
  }
    .confirm_btm{
        background:#fff;
        position:fixed;
        bottom:0;
        left:0;
        z-index:10;
        width:100%;
    }
    .confirm_btm div{
        height:1rem;
        line-height:1rem;
        padding-left:0.2rem;
    }
    .confirm_btm div:nth-of-type(1){
        border-bottom:1px dashed #ddd;
        padding-right:0.2rem;
    }
    .confirm_btm div:nth-of-type(1) p{
        display:inline-block;
        font-size:0.38rem;
        color:#333;
        float:right;
    }
    .confirm_btm div:nth-of-type(1) input{
        border:1px solid #999;
        border-radius:3px;
        height:0.6rem;
        text-align:center;
        color:#333;
        width:1.5rem;
    }
    .confirm_btm div:nth-of-type(2){
        color:#d20000;
        font-size:0.38rem;
    }
     .confirm_btm div:nth-of-type(2) span{
         color:#333;
     }
     .confirm_btm div:nth-of-type(2) p{
         display:inline-block;
         width:75%;
     }
     .confirm_btm div:nth-of-type(2) button{
         width:25%;
         background:#d20000;
         color:#fff;
         height:1rem;
         border:none;
     }
    .xiy{
        text-align:center;
        color:#999;
        line-height:0.8rem;
    }
     .delete_icon{
	display: block;
    width: 0.7rem;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url('./img/delete.png') 0.15rem center no-repeat;
    background-size: 0.45rem;
}
     .confirm-list ul{
         padding:0 0.2rem;
     }
     .confirm-list ul li{
         position:relative;
         padding:0.2rem;
         padding-left:0.7rem;
         border-bottom:1px dashed #ddd;
         background:#fff;
     }
     .confirm-list ul li p:nth-of-type(1){
         color:#d20000;
         font-size:0.38rem;
     }
     .confirm-list ul li p:nth-of-type(2){
         color:#666;
         font-size:0.32rem;
     }
    .confirm-opt{
        padding:0.2rem 0.4rem;
    }
    .confirm-opt li{
        background:#fff;
        height:0.8rem;
        line-height:0.8rem;
        text-align:center;
        width:31%;
        display:inline-block;
        color:#333;
        font-size:0.35rem;
    }
    .confirm-opt li:nth-of-type(2){
        margin:0 2%;
    }
    .confirm-list{
        padding:0 0.4rem;
        margin-bottom:2.2rem;
    }
    .confirm-list>img{
        width:100%;
    }
</style>