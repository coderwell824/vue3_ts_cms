import * as echart from 'echarts';

const useEchart = (el: HTMLElement) => {

  const echartInstance = echart.init(el);
  const setOptions = (options: echart.EChartsOption) => {

    echartInstance.setOption(options);
  }

  const setResize = () => {

    echartInstance.resize();
  }


  window.addEventListener("resize", () => {
    echartInstance.resize();
  })

  return {
    echartInstance, setOptions, setResize
  }
}


export default useEchart
