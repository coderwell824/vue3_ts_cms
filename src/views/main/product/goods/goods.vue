<template>
  <div class="goods">
    <page-search/>
    <page-content :pageName="pageName"  :ContentConfig="goodsContentConfig">

      <template #image="scope">
       <el-image
      style="width: 60px; height: 60px"
      :src="scope.row.imgUrl"
      :preview-src-list="[scope.row.imgUrl]"
    >
       </el-image>
    </template>

    <template #status="scope">
        <el-button
          :type="scope.row.status ? 'success' : 'danger'"
          plain
          size="mini"
        >{{ scope.row.enable ? '售完' : '在售' }}</el-button>
      </template>

    <template #oldPrice="scope">
       <span>￥{{scope.row.oldPrice}}</span>
      </template>

    <template #newPrice="scope">
       <span>￥{{scope.row.newPrice}}</span>
      </template>


    </page-content>
  </div>

</template>


<script lang="ts" setup>
  import pageSearch from '@/base-ui/page-search';
  import pageContent from '@/base-ui/page-content';
  import {goodsContentConfig} from './config/config';

  const pageName="goods";

</script>

<style scoped>

</style>
