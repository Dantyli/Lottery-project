<template>
    <div class="betResult">
       <div class="betResult_text">
        共<em class="betNum" >{{acount}}</em>注，
          <em class="betMoney" >{{total}}</em>元
       </div>
       <span class="grayBtn" @click="clearNum">清空</span> 
       <span class="redBtn" @click="confirm">确定</span>
        </div>
</template>
<script>
export default{
    props:['acount','total'],
    methods:{
       clearNum(){
           this.$root.eventHub.$emit('clear');
       },
       confirm(){
          this.$root.eventHub.$emit('sureBuy');
       }
    }
}
</script>
<style>
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
}
.betResult .redBtn {
    position: absolute;
    right: .3rem;
    top: .3rem;
}
</style>