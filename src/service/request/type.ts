import type { AxiosRequestConfig, AxiosResponse} from "axios"

export interface WellRequestInterceptors<T=AxiosResponse> {

  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any

  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any

}

export interface WellRequestConfig<T=AxiosResponse> extends AxiosRequestConfig {   //扩展配置参数

  interceptors?: WellRequestInterceptors<T>
  showLoading?: boolean
}
