<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref} from 'vue'

export default defineComponent({  //defineComponent用于兼容ts语法进行类型推导
  name: 'App',


});

</script>

<script lang="ts" setup>



</script>

<style lang="less">
    .app{
      width: 100%;
      height: 100%;
    }
</style>


