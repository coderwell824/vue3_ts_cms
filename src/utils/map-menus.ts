import { IBreadCrumb } from "@/base-ui/breadcrumb";
import { RouteRecordRaw } from "vue-router";
let firstMenu: any = [];
let isFirstMenu: boolean = true;

export const mapMenusToRoutes = (userMenus: any[]): Array<RouteRecordRaw> => {

  let routes: RouteRecordRaw[] = [];

  //1.先去加载默认所有的routes

  const allRoutes: RouteRecordRaw[] = [];

  const routeFiles = require.context("../router/main", true, /\.ts$/);  //

  routeFiles.keys().forEach((key) => {

    const route = require("../router/main" + key.slice(1));   //文件的路径拼接
    allRoutes.push(route.default);
  })


  //2.根据菜单获取需要添加的routes

  //userMenus:
  //type ===1 -> children
  //type ===2 -> url -> route

  //递归文件夹
  const recurseGetRoute = (menus: any[]) => {

    for (const menu of menus) {

      if (menu.type === 2) {

        const route = allRoutes?.find((route) => route.path === menu.url);

        if (route) routes?.push(route);

        if (isFirstMenu) {
          firstMenu = menu;
          isFirstMenu = false;
        }

      } else {

        recurseGetRoute(menu.children);
      }
    }

  }

  recurseGetRoute(userMenus);

  return routes;

}

//定位指定的二级菜单
export const pathMapToMenu = (userMenus: any[], currentPath: string, breadcrumbs?: IBreadCrumb[]): any => {

  for (const menu of userMenus) {

    if (menu.type === 1) {

      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);

      if (findMenu) {

        breadcrumbs?.push({ name: menu.name, path: menu.url });
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.url });
        return findMenu;

      }

    } else if (menu.type === 2 && menu.url === currentPath) {

      return menu;
    }
  }
}

//面包屑
export const pathMapBreadCrumb = (userMenus: any[], currentPath: string): any => {

  const breadcrumbs: IBreadCrumb[] = [];

  pathMapToMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

export const mapMenusToPermissions = (userMenus: any[]) => {

  const permissions: string[] = [];

  //获取三级菜单的权限
  const _recurseGetPermission = (menus: any[]) => {

    for (const menu of menus) {

      if (menu.type === 1 || menu.type === 2) {

        _recurseGetPermission(menu.children ?? []);
      } else if (menu.type === 3) {

        permissions.push(menu.permission)
      }
    }
  }

  _recurseGetPermission(userMenus);

  return permissions;

}

export const getMenuLeaveKeys = (menuList: any[]) => {

  const leaveKeys: number[] = [];

  const _recurseGetLeave = (menuList: any[]) => {

    for (const menu of menuList) {

      if (menu.children) {
        _recurseGetLeave(menu.children)
      } else {
        leaveKeys.push(menu.id);
      }
    }
  }

  _recurseGetLeave(menuList);

  return leaveKeys;

}


export {
  firstMenu
}




