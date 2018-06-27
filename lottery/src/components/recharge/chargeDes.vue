<template>
   <div>
      <Headers title="充值记录" detail="" />
      <div style="height:50px;"></div>
      <tempList :list="list" />
   </div>
</template>
<script>
import Headers from '../common/NewHead'
import tempList from '../common/tempList'
export default{
    components:{
        Headers,
        tempList
    },
    data(){
        return{
            list:[{type:'充值',time:'2018-06-25 15:45',price:4000.00},{type:'充值',time:'2018-06-25 15:45',price:4000.00}]
        }
    }
}
</script>