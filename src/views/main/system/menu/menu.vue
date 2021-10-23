<template>
  <div class="menu">
    <page-search></page-search>
    <page-content :ContentConfig="menuContentConfig"></page-content>
  </div>
</template>


<script lang="ts" setup>
  import {menuContentConfig} from './config/config';
  import pageContent from '@/base-ui/page-content';
  import PageSearch from '@/base-ui/page-search';

  const pageName="menu";

</script>

<style scoped>

</style>
