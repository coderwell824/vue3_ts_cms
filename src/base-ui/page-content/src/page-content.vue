<template>
  <div class="page-content">
    <page-table
      :listData="dataList"
      v-bind="ContentConfig"
      :listCount="listCount"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button size="medium" type="primary" round v-if="isCreate" @click="handleNewClick">新建用户</el-button>
      </template>

      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>

      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>

      <template #operation="scope">
        <el-button
          size="mini"
          type="text"
          icon="el-icon-edit"
          v-if="isUpdate"
          @click="handleEditClick(scope.row)"
        >编辑</el-button>
        <el-button
          size="mini"
          type="text"
          icon="el-icon-delete"
          v-if="isDelete"
          @click="handleDeleteClick(scope.row)"
        >删除</el-button>
      </template>

      <!-- 动态插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </page-table>
  </div>
</template>

<script lang="ts" setup>

import { getCurrentInstance, defineProps, computed, defineExpose, ref, watch, defineEmits } from "vue";
import pageTable from '@/base-ui/table';
import { useStore } from '@/store';
import { usePermission } from '@/hooks/usePermission';

const emit = defineEmits(["newBtnClick", "editBtnClick"])

const instance = getCurrentInstance();
const $filters = instance!.appContext.config.globalProperties.$filters;

const pageInfo = ref({ currentPage: 1, pageSize: 10 });

const props = defineProps({

  ContentConfig: {
    type: Object,
    require: true
  },

  pageName: {
    type: String,
    require: true
  }
})


const store = useStore();

const pageName: any = props.pageName;

//获取操作的权限
const isCreate = usePermission(pageName, "create");
const isUpdate = usePermission(pageName, "update");
const isDelete = usePermission(pageName, "delete");
const isQuery = usePermission(pageName, "query");

//获取数据
const getPageData = (queryInfo: any = {}) => {

  if (!isQuery) return;

  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })

}

getPageData();

defineExpose({ getPageData });

const dataList = computed(() => store.getters["system/pageListData"](props.pageName));
const listCount = computed(() => store.getters["system/pageListCount"](props.pageName));

watch(pageInfo, () => getPageData());

//获取动态插槽
const otherPropSlots = props.ContentConfig?.propList.filter((item: any) => {

  if (item.slotName === "createAt" || item.slotName === "updateAt" || item.slotName === "operation") return false;
  return true;
})

//删除操作
const handleDeleteClick = (item: any) => {


  store.dispatch("system/deletePageDataAction", {
    pageName: props.pageName,
    id: item.id
  })

}

//新建操作
const handleNewClick = () => {

  emit("newBtnClick");
}

//编辑操作
const handleEditClick = (item: any) => {

  emit("editBtnClick", item);
}


</script>


<style scoped lang="less">
.page-content {
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  border-top: 20px solid #f5f5f5;
}
</style>
