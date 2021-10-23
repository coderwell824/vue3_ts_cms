<template>

  <el-result title="404" sub-title="对不起,请求资源失败">
    <template #icon>
      <img src="~@/assets/img/404.jpg">
    </template>
    <template #extra>
      <el-button type="primary" size="medium" @click="handleReturn">返回首页</el-button>
    </template>
  </el-result>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import {useRouter} from "vue-router"

export default defineComponent({

  name:"notFound",

});
</script>

<script lang="ts" setup>

  const router=useRouter();
  const handleReturn=()=>{
      router.push("/main")
      }
</script>

<style scoped>

</style>
