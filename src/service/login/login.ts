import wellRequest from "../index";
import { IAccount,IDataType,ILoginResult,UserInfo } from "./types";

enum LoginAPI{
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenus="/role/"
}

export const accountLoginRequest = (account:IAccount) => {

  return wellRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data:account
    })
}

export const requestUserInfoById = (id:number) => {

  return wellRequest.get<IDataType<UserInfo>>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading:false

  })
}

export const requestUserMenusByRoleId=(id: number) => {

  return wellRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading:false
  })
}
