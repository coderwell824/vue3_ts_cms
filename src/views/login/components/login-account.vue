<template>
  <el-form :rules="rules" label-width="60px" :model="account" ref="formRef">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password" >
      <el-input show-password v-model="account.password"></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent,reactive,defineExpose,ref} from 'vue'
import {ElForm} from "element-plus"
import  {useStore} from "vuex"

import rules from "../config/account-config"
import localCache from "../../../utils/cache"

export default defineComponent({
  name: 'LoginAccount',rules,

})

</script>

<script lang="ts" setup>
const store=useStore();

let account = reactive({
    name: localCache.getCache("name")?? '',
    password: localCache.getCache("password")?? ''
})

const formRef=ref<InstanceType<typeof ElForm>>();

const accountLoginAction=(isRemindPassaword: boolean)=>{

  formRef.value?.validate((valid)=>{

      if(valid){

        //1.是否记住密码
        if(isRemindPassaword){

          //进行本地缓存
          localCache.setCache("name",account.name);
          localCache.setCache("password",account.password);
        }else{
          localCache.clearCache();
        }

        //2.进行登录验证
        store.dispatch("login/accountLoginAction",{...account}); //去指定module下的action中


      }
  })
}


defineExpose({
  accountLoginAction
})




</script>

<style scoped>
</style>
