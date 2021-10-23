<template>
  <div class="department">
    <page-content :pageName="pageName" :ContentConfig="depContentConfig"></page-content>
  </div>
</template>

<script lang="ts" setup>
import pageContent from '@/base-ui/page-content';
import { depContentConfig } from './config/depContentConfig';

const pageName = "department";

</script>

<style scoped>
</style>
