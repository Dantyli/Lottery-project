<template>
    <div class="header">
       <span @click="backShop"><i class="el-icon-arrow-left" />{{title}}</span>
    </div>
</template>
<script>
export default{
    props:['title'],
    methods:{
        backShop(){
            window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
        }
    }
}
</script>
<style>
.header{
    height:50px;
    line-height:50px;
    font-size:16px;
    background:#cc2b2f;
    color:#fff;
    padding:0 10px;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:10;
}
.header i{font-size:20px;}
</style>