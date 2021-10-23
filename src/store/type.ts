import { ILoginState } from "./module/login/type"
import { ISystemState } from './module/main/system/type'

interface IRootState {
  allDepartments: any[],
  allRoles: any[],
  allMenus: any[]
}


interface IRootWithModule {
  login: ILoginState,
  system: ISystemState
}

type IStoreType = IRootState & IRootWithModule;


export {
  IRootState, IRootWithModule, IStoreType
}

