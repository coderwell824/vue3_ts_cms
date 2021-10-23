<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFold"
    ></i>

    <div class="content">
      <nav-breadcrumb :breadCrumb="breadCrumb"></nav-breadcrumb>
      <div class="user-info">
        <div class="avatar">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            个人中心
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-s-custom">用户信息</el-dropdown-item>
              <el-dropdown-item icon="el-icon-menu">菜单管理</el-dropdown-item>
              <el-dropdown-item icon="el-icon-message-solid">消息中心</el-dropdown-item>
              <el-dropdown-item divided icon="el-icon-s-operation" @click="handleLogin">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineEmits, computed } from "vue"
import localCache from "@/utils/cache";
import { useRouter, useRoute } from "vue-router"
import NavBreadcrumb, { IBreadCrumb } from '@/base-ui/breadcrumb';
import { pathMapBreadCrumb } from '@/utils/map-menus';

export default defineComponent({

  name: "NavHeader",
  components: {
    NavBreadcrumb
  }

});
</script>

<script lang="ts" setup>
const router = useRouter();


const isFold = ref(false);
const emit = defineEmits(["foldChange"]);

const breadCrumb = computed(() => {  //重新计算

  const userMenus = localCache.getCache("userMenus");
  const route = useRoute();
  const currentPath = route.path;

  return pathMapBreadCrumb(userMenus, currentPath);
})




const handleFold = () => {

  isFold.value = !isFold.value;

  emit("foldChange", isFold.value);
}

const handleLogin = () => {
  localCache.removeCache("token");
  localCache.removeCache("userInfo");
  localCache.removeCache("userMenus");

  router.push("/login");
}


</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;

    .user-info {
      cursor: pointer;
      display: flex;
      align-items: center;

      .avatar {
        margin-right: 5px;
      }
    }
  }
}
</style>
