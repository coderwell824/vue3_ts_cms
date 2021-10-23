<template>
  <div class="page-table">

    <div class="header">
          <div class="title">{{title}}</div>
          <div class="handler">
            <slot name="headerHandler"></slot>
          </div>
    </div>
    <el-table
    :data="listData"
    border
    style="width: 100%"
    v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        width="55"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        width="80"
        align="center"
      ></el-table-column>

      <template v-for="user in propList" :key="user.prop">
        <el-table-column v-bind="user" align="center" show-overflow-tooltip>

          <template #default="scope">
            <slot :name="user.slotName" :row="scope.row">
              {{ scope.row[user.prop] }}
            </slot>
          </template>

        </el-table-column>
      </template>



    </el-table>

    <div class="footer" v-if="showFooter">
      <slot name="footer">

        <el-pagination
      v-model:currentPage="props.page.currentPage"
      :page-sizes="[10, 20, 30]"
      :page-size="props.page.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="listCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps,defineEmits} from 'vue';

const props:any=defineProps({
  listData: {
    type: Array,
    require: true
  },

  propList: {
    type: Array,
    require: true
  },

  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  title:{
    type:String,
    default:""
  },
  listCount:{
    type:Number,
    default:0
  },
  page:{
    type:Object,
    defalut:()=>({currentPage:0,pageSize:10})
  },
  childrenProps:{
    type:Object,
    default:()=>({})
  },
  showFooter:{
    type:Boolean,
    default:true
  }
})

const emit=defineEmits(["update:page"])

const handleSizeChange=(pageSize:number)=>{
  emit("update:page",{...props.page,pageSize});
}

const handleCurrentChange=(currentPage:number)=>{

  emit("update:page",{...props.page,currentPage})
}


</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
