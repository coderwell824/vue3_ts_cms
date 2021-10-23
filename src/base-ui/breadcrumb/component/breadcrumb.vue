<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <template v-for="item in breadCrumb" :key="item.name">
    <el-breadcrumb-item >{{item.name}}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent,defineProps,PropType } from "vue"
import {IBreadCrumb} from '../types';


export default defineComponent({

});
</script>

<script lang="ts" setup>
  defineProps({

    breadCrumb:{
      type:Array as PropType<IBreadCrumb[]>,
      default:()=>[]

    }
  })

</script>

<style scoped>

</style>
