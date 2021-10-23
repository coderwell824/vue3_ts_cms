import { App } from 'vue';
import { formatUTCString } from '@/utils/date-format'


export const registerProperties = (app: App):void => {

  app.config.globalProperties.$filters = {   //在全局上加载属性

  formatTime(value: string) {

    return formatUTCString(value);
  }

}
}
