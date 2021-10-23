import {ref} from "vue"

export const usePageSearch = () => {

  const pageContentRef = ref<any>();

  const handleResetClick=()=>{

    pageContentRef.value?.getPageData();
  }

  const handleSearchClick=(queryinfo:any)=>{

    pageContentRef.value?.getPageData(queryinfo);
  }

  return { pageContentRef, handleResetClick, handleSearchClick };
}
