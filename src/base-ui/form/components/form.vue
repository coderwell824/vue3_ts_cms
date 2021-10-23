<template>
  <div class="wellform">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <!-- 可以展开colLayout对象 -->
            <el-form-item :label="item.label" :style="itemStyle" v-if="!item.isHidden">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="FromData[`${item.field}`]"
                />
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%;"
                  v-model="FromData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </template>

              <template v-else-if="item.type = 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  :default-value="[new Date(2021, 9, 1), new Date(2021, 10, 1)]"
                  style="width: 100%;"
                  v-model="FromData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>


<script lang="ts" setup>
import { defineProps, PropType, computed, defineEmits, ref, watch } from "vue"
import { IFormItem } from "../types";

const props = defineProps({

  modelValue: {
    type: Object,
    require: true
  },

  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },

  labelWidth: {
    type: String,
    default: "100px"
  },

  itemStyle: {
    type: Object,
    default: () => ({ padding: "10px 40px" })
  },

  colLayout: {
    type: Object,
    default: () => ({
      xl: 8,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})

const emit = defineEmits(["update:modelValue"]);

// const userFromData:any=computed({

//   get:()=> props.modelValue,
//   set:(newValue)=>{
//     console.log("123");
//     emit("update:modelValue",newValue);
//   }
// })


// const handleValueChange=(value:any,field:string)=>{

//   emit("update:modelValue",{...props.modelValue,[field]:value})

// }

const FromData: any = ref({ ...props.modelValue });

watch(FromData, (newValue) => emit("update:modelValue", newValue), { deep: true })  //实现双向绑定



</script>

<style scoped lang="less">
</style>
