import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IRootState, IStoreType } from "./type";
import login from "./module/login/login";
import system from './module/main/system/system';
import dashboard from './module/main/analysis/dashboard'
import { getPageListData } from '@/service/main/system/system';

const store = createStore<IRootState>({

  state: {
    allDepartments: [],
    allRoles: [],
    allMenus: []
  },

  mutations: {
    changeAllDepartment(state, allDepartment) {
      state.allDepartments = allDepartment;
    },

    changeAllRoles(state, allRoles) {
      state.allRoles = allRoles;
    },
    changeAllMenus(state, menuList) {
      state.allMenus = menuList;
    }
  },

  actions: {

    async getInitalDataAction({ commit }) {

      //1.请求部门和角色数据

      const departmentResult = await getPageListData("/department/list", { offset: 0, size: 100 });

      const { list: departmentList } = departmentResult.data;
      commit("changeAllDepartment", departmentList);


      const roleResult = await getPageListData("/role/list", { offset: 0, size: 100 });
      const { list: roleList } = roleResult.data;

      commit("changeAllRoles", roleList);

      //2.请求菜单数据
      const menuResult = await getPageListData("/menu/list", {});
      const { list: menuList } = menuResult.data;
      commit("changeAllMenus", menuList);



    }

  },

  modules: {
    login, system, dashboard
  }

})
export default store;

export const setupStore = () => {

  store.dispatch("login/reLoadLogin");
}

export function useStore(): Store<IStoreType> {

  return useVuexStore();
}



