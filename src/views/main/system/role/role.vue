<template>
  <div class="role">
    <page-search :searchFormConfig="roleSearchConfig"></page-search>
    <page-content
      :ContentConfig="roleContentConfig"
      :pageName="pageName"
      @newBtnClick="handleNewClick"
      @editBtnClick="handleEditClick"
    ></page-content>
    <page-modal
      :modalConfig="roleModalConfig"
      :defaultInfo="defaultInfo"
      :pageName="pageName"
      ref="pageModalRef"
      :otherInfo="otherInfo"
    >
      <el-tree
        :data="menus"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        class="menu-tree"
        @check="handleCheckChange"
        ref="elTreeRef"
      />
    </page-modal>
  </div>
</template>

<script lang="ts" setup>
import pageContent from '@/base-ui/page-content';
import pageSearch from '@/base-ui/page-search';
import { roleContentConfig, roleSearchConfig } from './config/config';
import pageModal from '@/components/page-modal';
import { roleModalConfig } from './config/roleModalConfig';
import { usePageModal } from '@/hooks/usePageModal';
import { useStore } from 'vuex';
import { computed, ref, nextTick } from 'vue';
import { getMenuLeaveKeys } from '@/utils/map-menus';

const pageName = "role";

const elTreeRef: any = ref();

const editCallback = (item: any) => {

  const leaveKeys = getMenuLeaveKeys(item.menuList);

  nextTick(() => {

    elTreeRef.value?.setCheckedKeys(leaveKeys, false);
  })


}


const { pageModalRef, defaultInfo, handleNewClick, handleEditClick } = usePageModal(undefined, editCallback);

const store = useStore();
const menus = computed(() => store.state.allMenus);   //computed可以保证数据是响应式的

const defaultProps = {

  children: 'children',
  label: 'name'
}

const otherInfo = ref({});

const handleCheckChange = (data1: any, data2: any) => {

  const checkedKeys = data2.checkedKeys;
  const halfCheckedKeys = data2.halfCheckedKeys;
  const menuList = [...checkedKeys, ...halfCheckedKeys];
  otherInfo.value = { menuList };

}



</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
