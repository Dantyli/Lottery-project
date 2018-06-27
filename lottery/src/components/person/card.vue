<template>
    <div>
        <Headers title="我的银行卡" detail="" />
        <div class="userinfo">
            <p>
              <label>开户姓名</label>
              <input type="text" placeholder="请输入开户姓名"/>
            </p>
            <p>
              <label>所属银行</label>
              <input type="text" placeholder="请输入开户行名称"/>
            </p>
             <p>
              <label>储蓄卡号</label>
              <input type="text" placeholder="请输入银行卡号"/>
            </p>
        </div>
        <p class="charge_btn"><button>确认提交</button></p>
        <p class="wenxintips">
       温馨提示：<br />
        1.用户需先实名认证才能绑定银行卡，持卡人需与实名
        的真实姓名一致；<br />
        2.绑定银行卡是用于资金提现，请仔细核对您的信息是
        否正确，只支持储蓄卡提现；<br />
        3.银行卡信息可以多次更改，但只能绑定一个银行卡。
        </p>
        
    </div>
</template>
<script>
import Headers from '../common/NewHead'
export default {
    components:{
        Headers
    }
}
</script>
<style>
.userinfo{
    margin-top:80px;
    padding:0 0.4rem;
}
.userinfo p{
  height:1rem;
  line-height:1rem;
  color:#333;
  font-size:0.42rem;
  margin-bottom:0.4rem;
  font-family: SimHei;
}
.userinfo input {
    height:0.8rem;
    border-radius:5px;
    border:1px solid #ccc;
    margin-left:0.2rem;
    width:6rem;
    padding-left:0.2rem;
}
.charge_btn{
    margin-top:0.4rem;
    height:1rem;
    line-height:1rem;
    text-align:center;
}
.charge_btn button{
    width:7rem;
   background-image: linear-gradient(0deg, 
		#d20000 0%, 
		#ff2c2c 100%);
    color:#fff;
    font-size:0.4rem;
    border:none;
    height:1rem;
    border-radius:5px;
}
.wenxintips{
    margin:0.2rem;
    color:#999;
    font-size:0.35rem;
}
</style>

