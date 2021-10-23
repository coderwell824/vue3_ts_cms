<template>
  <div class="page-modal">
    <el-dialog v-model="centerDialogVisible" title="新建用户" width="30%" center destroy-on-close>
      <well-form v-bind="modalConfig" v-model="formData"></well-form>

      <slot></slot>

      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
          <el-button @click="centerDialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>


<script lang="ts" setup>
import { ref, defineProps, defineExpose, watch } from 'vue';
import wellForm from '@/base-ui/form';
import { useStore } from 'vuex';

const centerDialogVisible = ref(false);

const props: any = defineProps({
  modalConfig: {
    type: Object,
    require: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    require: true
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  }
})

const formData = ref<any>({});

//实时监视数据的变化
watch(() => props.defaultInfo, (newValue) => {

  for (const item of props.modalConfig.formItems) {

    formData.value[`${item.field}`] = newValue[`${item.field}`];
  }

})

//确定操作
const store = useStore();
const handleConfirmClick = () => {

  centerDialogVisible.value = false;
  if (Object.keys(props.defaultInfo).length) {
    //编辑操作

    store.dispatch("system/editPageDataAction", {

      pageName: props.pageName,
      editData: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    })

  } else {
    //新建操作

    store.dispatch("system/createPageDataAction", {

      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo },

    })

  }


}






defineExpose({
  centerDialogVisible
})

</script>

<style scoped>
</style>
