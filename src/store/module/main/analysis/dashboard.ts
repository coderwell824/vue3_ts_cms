import { Module } from "vuex";
import { IRootState } from "../../../type";
import { IDashBoardState } from './types'
import { getAddressGoodsSale, getCategoryGoodsCount, getCategoryGoodsFavor, getCategoryGoodsSale } from '@/service/main/analysis/dashboard'

const dashBoardModule: Module<IDashBoardState, IRootState> = {
  namespaced: true,
  state: {
    categoryGoodsCount: [],
    categoryGoodsFavor: [],
    categoryGoodsSale: [],
    addressGoodsSale: []
  },
  mutations: {

    changeCategoryGoodsCount(state, data) {

      state.categoryGoodsCount = data;
    },
    changeCategoryGoodsFavor(state, data) {

      state.categoryGoodsFavor = data;
    },
    changeCategoryGoodsSale(state, data) {

      state.categoryGoodsSale = data;
    },
    changeAddressGoodsSale(state, data) {

      state.addressGoodsSale = data
    }


  },

  actions: {

    async getDashBoardDataAction({ commit }) {

      const categoryGoodsCountResult = await getCategoryGoodsCount();

      commit("changeCategoryGoodsCount", categoryGoodsCountResult.data);

      const categoryGoodsFavorResult = await getCategoryGoodsFavor();
      commit("changeCategoryGoodsFavor", categoryGoodsFavorResult.data);

      const categoryGoodsSaleResult = await getCategoryGoodsSale();
      commit("changeCategoryGoodsSale", categoryGoodsSaleResult.data);

      const addressGoodsSaleResult = await getAddressGoodsSale();
      commit("changeAddressGoodsSale", addressGoodsSaleResult.data);


    }


  }


}


export default dashBoardModule
