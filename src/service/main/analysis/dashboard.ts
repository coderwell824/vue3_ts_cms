import { IDataType } from '@/service/login/types';
import wellRequest from '../../index';

enum DashBoardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale"
};


export const getCategoryGoodsCount = () => {

  return wellRequest.get<IDataType>({
    url: DashBoardAPI.categoryGoodsCount,
  })

}
export const getCategoryGoodsSale = () => {

  return wellRequest.get<IDataType>({
    url: DashBoardAPI.categoryGoodsSale,
  })

}
export const getCategoryGoodsFavor = () => {

  return wellRequest.get<IDataType>({
    url: DashBoardAPI.categoryGoodsFavor,
  })

}
export const getAddressGoodsSale = () => {

  return wellRequest.get<IDataType>({
    url: DashBoardAPI.addressGoodsSale,
  })

}


