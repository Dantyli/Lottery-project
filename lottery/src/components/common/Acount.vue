<template>

        <div class="bot-acount">
            <button @click="clearNum">清空</button>
            共{{acount}}注，{{total}}元
            <button @click="confirm">确定</button>
        </div>
</template>
<script>
export default{
    props:['acount','total'],
    methods:{
       clearNum(){
           const rout=this.$route
           switch(rout.path){
               case '/dbc':
               this.$root.eventHub.$emit('ssqClear');
               break;
               case '/dlt':
               this.$root.eventHub.$emit('dltClear');
               break;
               case '/fc':
               this.$root.eventHub.$emit('fcClear');
               break;
               case '/plt':
               this.$root.eventHub.$emit('pltClear');
               break;
               case '/plf':
               this.$root.eventHub.$emit('plfClear');
               break;
               case '/qlc':
               this.$root.eventHub.$emit('qlcClear');
               break;
               case '/qxc':
               this.$root.eventHub.$emit('qxcClear');
               break;
           }
           
       },
       confirm(){
           const rout=this.$route
           if(!this.$store.state.isLogin){
               this.$router.push('login');
           }
           switch(rout.path){
               case '/dbc':
               this.$root.eventHub.$emit('ssqBuy');
               break;
                case '/dlt':
               this.$root.eventHub.$emit('dltBuy');
               break;
               case '/fc':
               this.$root.eventHub.$emit('fcBuy');
               break;
               case '/plt':
               this.$root.eventHub.$emit('pltBuy');
               break;
                case '/plf':
               this.$root.eventHub.$emit('plfBuy');
               break;
                case '/qxc':
               this.$root.eventHub.$emit('qxcBuy');
               break;
                case '/qlc':
               this.$root.eventHub.$emit('qlcBuy');
               break;
           }
          
       }
    }
}
</script>
<style>
.bot-acount{
    display: block;
    line-height:1.8rem;
    height:1.8rem;
    background: #2e3235;
    color: #fff;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 0.42rem;
    z-index: 100;
}
.bot-acount button{
    height:1rem;
    line-height:1rem;
    border:none;
    border-radius:5px;
    padding:0 0.38rem;
    line-height:0.8rem;
    margin:0.4rem 0.2rem;
    color:#fff;
    font-size:0.42rem;
}
.bot-acount button:nth-of-type(1){
    float:left;
    background-color: #363a3d;
    border: 1px solid #454a4e;
}
.bot-acount button:nth-of-type(2){
    float:right;
    background-color: #b01e35;
    border: 1px solid #c0415f;
}
.betResult {
    display: block;
    line-height: 2rem;
    background: #2e3235;
    color: #fff;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 0.4rem;
    z-index: 100;
    
}
.betResult_text {
    margin: 0 0.6rem;
    white-space: nowrap;
    overflow: hidden;

}
.betResult .grayBtn {
    position: absolute;
    left: .4rem;
    top: .3rem;
    font-style:normal;
}
.betResult .redBtn {
    position: absolute;
    right: .3rem;
    top: .3rem;
    font-style:normal;
}
</style>