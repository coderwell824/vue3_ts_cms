<template>
    <div class="search">
      <well-form v-bind="searchFormConfig" v-model="formData">

        <template #header>
          <h2 class="header">高级检索</h2>
        </template>

        <template #footer>
          <div class="footer">
            <el-button  icon="el-icon-refresh-right" size="small" @click="handleReset">重置</el-button>
            <el-button type="primary" icon="el-icon-search" size="small" @click="handleSearch">搜索</el-button>
          </div>
        </template>

      </well-form>
    </div>
</template>


<script lang="ts" setup>
import { ref,defineProps,defineEmits } from 'vue';
import WellForm from "@/base-ui/form";

 const props= defineProps({
   searchFormConfig:{
     type:Object,
      require:true
    }
  })

  const formItems=props.searchFormConfig?.formItems??[];
  const formOriginData:any={};

  for(const item of formItems){

    formOriginData[item.field]="";
  }

  //双向绑定的属性应该是由配置文件的field文件决定
  const formData=ref(formOriginData);

  const emit=defineEmits(["resetBtnClick","searchBtnClick"])


  //重置
  const handleReset=()=>{

     //逐个修改里面的属性
    for(const key in formOriginData){

      formData.value[`${key}`]=formOriginData[key];
    }

  emit("resetBtnClick");

  }

  const handleSearch=()=>{


    emit("searchBtnClick",formData.value);
  }



</script>

<style scoped lang="less">
.search {
  padding: 30px 30px 15px 30px;
}
.header{
  text-align: center;
  color:#409eff;
  display: block;
  margin: 10px auto;
}
.footer{
  text-align: right;
  margin-right: 35px;

}

</style>
