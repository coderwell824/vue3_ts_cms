<template>
  <div class="base-echart">
    <div ref="echartRef" :style="{ width: width, height: height }"></div>
    <!-- 挂载的DOM元素需要有宽高 -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults } from 'vue';
import { EChartsOption } from 'echarts';
import useEchart from '../hooks/useEchart';

const echartRef = ref();

//ts中定义接收数据的类型
const props = withDefaults(defineProps<{
  width?: string,
  height?: string,
  options: EChartsOption
}>(),
  {
    width: "100%",
    height: "300px"
  })

onMounted(() => {

  const { setOptions } = useEchart(echartRef.value);
  setOptions(props.options);

})

</script>

<style scoped lang="less">
</style>
