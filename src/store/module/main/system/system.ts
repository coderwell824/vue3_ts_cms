import { Module } from "vuex";
import { IRootState } from "../../../type";
import { ISystemState } from "./type";
import { getPageListData, deletePageDataById, createPageData, editPageData } from '@/service/main/system/system';


const getPageUrlMap: any = {   //get请求地址的映射
  users: "/users/list",
  role: "/role/list",
  goods: "/goods/list",
  menu: "/menu/list",
  department: "/department/list"
}

const createPageUrlMap: any = {
  users: "/users",
  role: "/role"
}


const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    goodsList: [],
    goodsCount: 0,
    menuList: [],
    menuCount: 0,
    departmentList: [],
    departmentCount: 0
  },
  mutations: {

    changeusersList(state, usersList) {

      state.usersList = usersList;
    },

    changeusersCount(state, userCount) {

      state.usersCount = userCount;
    },

    changeroleList(state, roleList) {

      state.roleList = roleList;
    },

    changeroleCount(state, roleCount) {

      state.roleCount = roleCount;
    },

    changegoodsList(state, goodsList) {

      state.goodsList = goodsList;
    },
    changegoodsCount(state, goodsCount) {

      state.goodsCount = goodsCount;
    },

    changemenuList(state, menuList) {

      state.goodsList = menuList;
    },
    changemenuCount(state, menuCount) {

      state.goodsCount = menuCount;
    },

    changedepartmentList(state, departmentList) {

      state.departmentList = departmentList;
    },
    changedepartmentCount(state, departmentCount) {

      state.departmentCount = departmentCount;
    }

  },
  actions: {

    async getPageListAction({ commit }, payload: any) {

      //请求地址相同时用拼接,请求地址不同用map映射,通过key-value配置请求地址,通过key获取对应的请求地址

      const { pageName, queryInfo } = payload;

      const pageUrl = getPageUrlMap[pageName];



      //2.对页面发送请求

      const pageResult: any = await getPageListData(pageUrl, queryInfo);


      const { list, totalCount } = pageResult.data;

      commit(`change${pageName}List`, list);
      commit(`change${pageName}Count`, totalCount);

    },

    //删除数据
    async deletePageDataAction({ dispatch }, payload: any) {

      //1.获取pageName, id
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;

      //2.调用删除的网络请求
      await deletePageDataById(pageUrl);

      //3.重新请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })

    },

    //新建数据
    async createPageDataAction({ dispatch }, payload: any) {

      //1.创建数据的请求
      const { pageName, newData } = payload;

      const createPageUrl = createPageUrlMap[pageName];

      await createPageData(createPageUrl, newData);

      //2.重新请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    //修改数据
    async editPageDataAction({ dispatch }, payload: any) {

      //1.修改数据的请求
      const { pageName, editData, id } = payload;
      const pageUrl = `${pageName}/${id}`;


      await editPageData(pageUrl, editData);

      //2.重新请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }

  },
  getters: {

    pageListData(state) {
      return (pageName: string) => {

        return (state as any)[`${pageName}List`];
      }
    },

    pageListCount(state) {

      return (pageName: string) => {

        return (state as any)[`${pageName}Count`];

      }
    }
  }

}

export default systemModule;
