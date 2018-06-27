<template>
   <div>
    <Headers title="提现记录" detail="" />
    <div style="margin-top:50px">
       <tempList :list="list" />
    </div>
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
            list:[{type:'提现',time:'2018-06-25 15:45',price:4000.00},{type:'提现',time:'2018-06-25 15:45',price:4000.00}]
        }
    }
}
</script>