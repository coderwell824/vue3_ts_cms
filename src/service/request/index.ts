import axios from "axios"
import type { AxiosInstance, AxiosResponse } from "axios"   //从axios中取出对应的类型

import type { WellRequestInterceptors,WellRequestConfig} from "./type"

import { ElLoading, ILoadingInstance } from 'element-plus'

const isLoading = true;   //默认请求的loading状态

export default class WellRequest {

  instance: AxiosInstance
  interceptors?: WellRequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean

  constructor(config: WellRequestConfig) {

    this.instance = axios.create(config);   //通过不同的配置生成不同的实例对象

    this.interceptors = config.interceptors;

    this.showLoading = config.showLoading ?? isLoading;


    //实例对象上的请求拦截器

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    //实例对象上的响应拦截器

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )


    //所有实例对象上的请求拦截器

    this.instance.interceptors.request.use((config) => {

      //console.log("请求拦截成功!--所有实例对象上的");

      if (this.showLoading) {

        //显示loading动画
        this.loading = ElLoading.service({

          lock: true,   //是否使用蒙版
          text: "正在加载中...",
          background: "rgba(0,0,0,0.5)"

        })
      }

      return config;
    }, (err) => {

    //  console.log("请求拦截失败!--所有实例对象上的");
      return err;
    })

    //所有实例对象上的响应拦截器

    this.instance.interceptors.response.use((res) => {

      //console.log("响应拦截成功!--所有实例对象上的");


       this.loading?.close();  //将loading移除

      const data = res.data;

      // //处理请求成功后仍是失败的结果
      // if (!data.success) {

      //   console.log("请求失败,返回错误信息");
      // } else {

      //   return data;
      // }
      return data


    }, (err) => {

    //  console.log("响应拦截失败!--所有实例对象上的");

      //判断不同的HttpErrorCode显示不同的错误信息
      if (err.response.status === 404) {
        console.log("404错误")
      }

      return err;

    })
  }


  request<T=any>(config: WellRequestConfig<T>): Promise<T> {   //封装request请求

    return new Promise((resolve, reject) => {

      if (config.interceptors?.requestInterceptor) {  //单独请求的请求拦截器

        config = config.interceptors.requestInterceptor(config);
      }

      if (config.showLoading === false) {    //判断请求是否showLoading为false
        this.showLoading = config.showLoading
      }

      this.instance.request<any, T>(config)
        .then((res) => {

          if (config.interceptors?.responseInterceptor) { //单独请求的响应拦截器

            res = config.interceptors.responseInterceptor(res);

          }
          this.showLoading = isLoading;   //设置为初始化,不会影响下一个请求

          resolve(res);

        })
        .catch((err) => {

          this.showLoading = isLoading;
          reject(err);
          return err;
        })
    })
  }

  get<T>(config: WellRequestConfig<T>): Promise<T>{

    return this.request<T>({...config,method:"GET"})
  }

  post<T>(config: WellRequestConfig<T>): Promise<T>{

    return this.request<T>({...config,method:"POST"})
  }

  delete<T>(config: WellRequestConfig<T>): Promise<T>{

    return this.request<T>({...config,method:"DELETE"})
  }

  patch<T>(config: WellRequestConfig<T>): Promise<T>{

    return this.request<T>({...config,method:"PATCH"})
  }

}


