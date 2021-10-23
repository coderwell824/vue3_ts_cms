/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>  //定义vue的实例对象
  export default component
}

declare let $store: any;
