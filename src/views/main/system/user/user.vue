<template>
  <div class="user">
    <page-search
      :searchFormConfig="userSearchConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    />
    <div class="content">
      <page-content
        :ContentConfig="userContentConfig"
        :pageName="pageName"
        ref="pageContentRef"
        @newBtnClick="handleNewClick"
        @editBtnClick="handleEditClick"
      >
        <template #enable="scope">
          <el-button
            :type="scope.row.enable ? 'success' : 'danger'"
            plain
            size="mini"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>
      </page-content>
    </div>
    <div class="page-modal">
      <page-modal
        :modalConfig="modalConfigRef"
        ref="pageModalRef"
        :defaultInfo="defaultInfo"
        :pageName="pageName"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { userSearchConfig, userContentConfig } from './config/config'
import pageSearch from '@/base-ui/page-search';
import pageContent from '@/base-ui/page-content';
import { usePageSearch } from '@/hooks/usePageSearch';
import { usePageModal } from '@/hooks/usePageModal';
import pageModal from '@/components/page-modal';
import { userModalConfig } from './config/userModal.config';
import { useStore } from 'vuex';
import { computed } from 'vue';

const pageName = "users";

const newCallBack = () => {

  const passwordItem = userModalConfig.formItems.find((item) => item.field === "password");
  passwordItem!.isHidden = false;

  const departmentItem = userModalConfig.formItems.find((item) => item.field === "departmentId");
  departmentItem!.isHidden = false;

  const roleItem = userModalConfig.formItems.find((item) => item.field === "roleId");
  roleItem!.isHidden = false;
}

const editCallBack = () => {

  const passwordItem = userModalConfig.formItems.find((item) => item.field === "password");
  passwordItem!.isHidden = true;

  const departmentItem = userModalConfig.formItems.find((item) => item.field === "departmentId");
  departmentItem!.isHidden = true;

  const roleItem = userModalConfig.formItems.find((item) => item.field === "roleId");
  roleItem!.isHidden = true;
}

const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch();  //使用hook

//调用hook获取公共变量和函数
const { pageModalRef, defaultInfo, handleNewClick, handleEditClick } = usePageModal(newCallBack, editCallBack);

//动态添加部门和角色列表
const store = useStore();

//计算配置文件
const modalConfigRef = computed(() => {

  const departmentItem = userModalConfig.formItems.find((item) => item.field === "departmentId");

  departmentItem!.options = store.state.allDepartments.map((item: any) => {
    return {
      label: item.name, value: item.id
    }
  })

  const roleItem = userModalConfig.formItems.find((item) => item.field === "roleId");

  roleItem!.options = store.state.allRoles.map((item: any) => {
    return {
      label: item.name, value: item.id
    }
  })

  return userModalConfig;
})





</script>

<style scoped lang="less">
</style>
