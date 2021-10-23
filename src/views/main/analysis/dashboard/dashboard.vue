<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <well-card title="分类商品数量(饼图)">
          <pie-echart></pie-echart>
        </well-card>
      </el-col>

      <el-col :span="10">
        <well-card title="不同城市商品销量"></well-card>
      </el-col>

      <el-col :span="7">
        <well-card title="分类商品数量(玫瑰图)"></well-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <well-card title="分类商品的销量"></well-card>
      </el-col>

      <el-col :span="12">
        <well-card title="分类商品的收藏"></well-card>
      </el-col>
    </el-row>
  </div>
</template>


<script lang="ts" setup>
import { useStore } from 'vuex';
import wellCard from '@/base-ui/card';
import pieEchart from '@/components/page-echarts';

const store = useStore();
store.dispatch("dashboard/getDashBoardDataAction");

</script>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}
</style>
