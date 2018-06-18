<template>
   <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="ruleForm">
    <h2 style="text-align:center">登录</h2>
    <el-form-item label="账号" prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked">记住密码</el-checkbox>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import config from '../../config/config'
export default{
   data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
       var validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输账号'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          account: '',
        },
        rules2: {
          account: [
            { validator: validateAccount, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        },
        checked:true
      };
    },
    methods: {
      submitForm(formName) {
        let that=this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              type:'success',
              message:'登录成功',
              duration:1000
            })
            const account=this.ruleForm2.account
            const time=new Date().getTime()
            this.$store.dispatch('login',{name:account,time:time});
            if(this.checked){
                localStorage.setItem('account',this.ruleForm2.account)
            }else{
                sessionStorage.setItem('account',this.ruleForm2.account)
            }
            setTimeout(()=>{
              this.$router.push('/index')
            },1500)
          } else {
            return false;
          }
        });
      }
    },
    created(){
      this.pass=''
      this.account=''
    }
}
</script>
<style>
.ruleForm{
  padding:20px;
}
 h2{
    font-size:20px;
    color:#333;
  }
  .el-form-item__content{
    text-align:center;
  }
</style>