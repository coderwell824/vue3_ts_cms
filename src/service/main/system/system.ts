import { IDataType } from '@/service/login/types'
import wellRequest from '../../index'

export const getPageListData = (url: string, queryInfo: any) => {

  return wellRequest.post<IDataType>({
    url,
    data: queryInfo,
    showLoading: false
  })
}

export const deletePageDataById = (url: string) => {

  return wellRequest.delete<IDataType>({
    url
  })
}

export const createPageData = (url: string, newData: any) => {

  return wellRequest.post<IDataType>({
    url,
    data: newData
  })

}

export const editPageData = (url: string, editData: any) => {

  return wellRequest.patch<IDataType>({
    url,
    data: editData
  })

}
