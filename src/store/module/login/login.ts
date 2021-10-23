import { Module } from "vuex"

import { ILoginState } from "./type"
import { IRootState } from "../../type"
import { IAccount, UserInfo } from "@/service/login/types";

import localCache from "@/utils/cache";
import { mapMenusToRoutes, mapMenusToPermissions } from "@/utils/map-menus"

import { accountLoginRequest, requestUserInfoById, requestUserMenusByRoleId } from "@/service/login/login";
import router from "@/router/index";



const loginModule: Module<ILoginState, IRootState> = {

  namespaced: true,

  state: {
    token: "",
    userInfo: {},
    userMenus: {},
    permissions: []

  },

  mutations: {

    //保存token
    changeToken(state, token: string) {

      state.token = token;
    },

    changeUserInfo(state, userInfo: UserInfo) {

      state.userInfo = userInfo;
    },

    changeUserMenus(state, userMenus: any) {

      state.userMenus = userMenus;

      //1.userMenus =>  routes  映射关系
      const routes = mapMenusToRoutes(userMenus);

      //2.将routes添加到 router.main.children

      routes.forEach((route) => {

        router.addRoute("main", route)    //添加路由
      })

      //获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus);

      state.permissions = permissions;


    },



  },

  actions: {

    async accountLoginAction({ commit, dispatch }, payload: IAccount) {

      //1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload);


      if (loginResult) {

        const { id, token } = loginResult.data;
        commit("changeToken", token);
        localCache.setCache("token", token);

        //发送初始化请求
        dispatch("getInitalDataAction", null, { root: true })  //调用根的action

        //2.请求用户信息

        const userResult = await requestUserInfoById(id);
        const userInfo = userResult.data;
        commit("changeUserInfo", userInfo);
        localCache.setCache("userInfo", userInfo);

        //3.请求用户菜单
        const userMenuResult = await requestUserMenusByRoleId(userInfo.role.id);
        const userMenus = userMenuResult.data;
        commit("changeUserMenus", userMenus);
        localCache.setCache("userMenus", userMenus);

        alert("登录成功!")

        //4.跳转到首页
        router.push("/main");

      } else {
        alert("登录失败");
      }
    },

    //重新加载vuex中的数据
    reLoadLogin({ commit, dispatch }) {

      const token = localCache.getCache("token");

      if (token) {
        commit("changeToken", token);
        dispatch("getInitalDataAction", null, { root: true });
      }

      const userInfo = localCache.getCache("userInfo");

      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }

      const userMenus = localCache.getCache("userMenus");

      if (userMenus) {
        commit("changeUserMenus", userMenus);
      }

    }




  },

  modules: {


  }

}

export default loginModule;
