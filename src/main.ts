import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store,{setupStore} from './store'

import ElementPlus from "element-plus"
import zhCn from "element-plus/es/locale/lang/zh-cn"

import "element-plus/dist/index.css"
import "normalize.css"  //重置样式
import "./assets/css/index.less"
import {globalRegister} from '@/global'

const app=createApp(App);
app.use(store)
setupStore();
globalRegister(app);

app.use(ElementPlus, {   //国际化
  locale:zhCn
})
app.use(router).mount('#app');






