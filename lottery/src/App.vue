<template>
  <div id="app">
  <transition :name="transitionName">
          <router-view  />
  </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      transitionName:''
    }
  },
  watch:{
    '$route'(to,from){
      if(to.meta.index<from.meta.index){
        this.transitionName='slide-left';
      }else{
        this.transitionName='slide-right'
      }
    }
  }
}
</script>


