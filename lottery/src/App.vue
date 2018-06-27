<template>
  <div id="app">
  <transition :name="isHistory?'slide-right':'slide-left'">
          <router-view  />
  </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      isHistory:true
    }
  },
  watch:{
    '$route'(to,from){
      if(to.meta.index<from.meta.index){
        this.isHistory=false;
      }else{
        this.isHistory=true;
      }
    }
  }
}
</script>


