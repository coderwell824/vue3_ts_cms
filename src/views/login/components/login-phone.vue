<template>
  <el-form :rules="rules" label-width="80px" :model="phone">
    <el-form-item label="手机号" prop="number">
      <el-input v-model="phone.number"></el-input>
    </el-form-item>

    <el-form-item label="验证码" prop="vrifyCode">
      <div class="get-code">
      <el-input v-model="phone.vrifyCode"></el-input>
      <el-button type="primary" size="mini" class="get-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent,reactive } from "vue"
import {useStore} from 'vuex';

import rules from "../config/phone-config"

export default defineComponent({

  name:"LoginPhone",rules

});
</script>

<script lang="ts" setup>
const store=useStore()

let phone = reactive({
    number: '',
    vrifyCode: ''
})

const phoneLoginAction=()=>{

    store.dispatch("/login/phoneLoginAction",{...phone});

}


</script>

<style scoped>
.get-code{
  display: flex;
}
.get-btn{
  margin-left:5px ;
}
</style>
