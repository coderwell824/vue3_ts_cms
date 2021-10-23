<template>
  <div class="home">

    <el-container class="main-content">
      <el-aside :width="isCollapse? '50px':'210px'">
        <nav-menu :collapse="isCollapse" />
        </el-aside>
      <el-container class="page">
        <el-header class="page-header">

          <nav-header @foldChange="handleFoldChange"></nav-header>
          </el-header>
        <el-main class="page-content">
          <div class="page-info">
         <router-view></router-view>
         </div>
          </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue"
import  NavMenu from "@/components/nav-menu"
import  NavHeader from "@/components/nav-header"

export default defineComponent({

  name:" ",
  components:{
    NavMenu,NavHeader
  }

});
</script>

<script lang="ts" setup>

  const isCollapse=ref(false);

  const handleFoldChange=(isFold: boolean)=>{

      isCollapse.value=isFold;

  }

</script>

<style lang="less" scoped>
.home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
  background: #f0f2f5;
  .page-info{
    background-color: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
  }

</style>
