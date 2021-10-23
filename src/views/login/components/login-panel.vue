<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>

      <el-tabs type="border-card" stretch v-model="currentTab" style="border-radius: 5px;">
     <el-tab-pane name="current">
      <template #label>
        <span><i class="el-icon-user-solid"></i>账号登录</span>
      </template>
      <login-account ref="accountRef"/>
    </el-tab-pane>
     <el-tab-pane name="phone">
      <template #label>
    <span>
  <i class="el-icon-mobile-phone"></i>
        手机登录</span>
      </template>
      <login-phone ref="phoneRef" />
    </el-tab-pane>
      <div class="account-control">
    <el-checkbox v-model="isRemindPassaword">记住密码</el-checkbox>
    <el-link type="primary">忘记密码</el-link>
  </div>

  <el-button type="primary" class="login-btn" @click="hanleLoginClick">立即登录</el-button>
  </el-tabs>



  </div>
</template>

<script lang="ts">

import { defineComponent,ref } from "vue";
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";
import {useStore} from "vuex"

export default defineComponent({

  name:"LoginPanel",
  components:{
    LoginAccount,LoginPhone
  }

});
</script>

<script lang="ts" setup>

  const isRemindPassaword=ref(true);
  const currentTab=ref("current");

  const accountRef = ref<any>();  //获取account组件对象
  const phoneRef=ref<any>();      //获取phone组件对象

  const hanleLoginClick=()=>{

    if(currentTab.value==="current"){

      accountRef.value?.accountLoginAction(isRemindPassaword.value);

    }else{

      phoneRef.value?.phoneLoginAction()

    }

  }


</script>


<style scoped lang="less">
  .login-panel{
    margin-bottom: 450px;
    margin-right: -1100px;
    width: 350px;
    height: 180px;

    .title{
      text-align: center;
      color: #fff;
    }
    .account-control{
      display: flex;
      justify-content: space-between;
    }
    .login-btn{
      margin-top: 5px;
      width: 100%;
    }

  }
</style>
