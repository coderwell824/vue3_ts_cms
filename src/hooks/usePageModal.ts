import { ref } from 'vue';

type CallbackType = (item?: any) => void

export function usePageModal(newCb?: CallbackType, editCb?: CallbackType) {
  const pageModalRef = ref();

  const defaultInfo = ref({});

  const handleNewClick = () => {

    defaultInfo.value = {};
    pageModalRef.value.centerDialogVisible = true;

    newCb && newCb();
  }

  const handleEditClick = (item: any) => {


    pageModalRef.value.centerDialogVisible = true;
    defaultInfo.value = { ...item };
    editCb && editCb(item);


  }

  return {
    handleNewClick, handleEditClick, defaultInfo, pageModalRef
  }

}
