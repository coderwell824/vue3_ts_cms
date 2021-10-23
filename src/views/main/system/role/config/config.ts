
export const roleSearchConfig = {
  formItems: [
    {
      field:"name",
      type:"input",
      label:"角色名称:",
      placeholder:"请输入角色名称"
    },
    {
      field:"intro",
      type:"input",
      label:"权限:",
      placeholder:"请输入权限"
    },
    {
      field:"createTime",
      type:"datepicker",
      label:"创建时间:",
      otherOptions:{
        startPlaceholder:"开始时间",
        endPlaceholder:"结束时间",
        type:"daterange"
      }
    },
  ],


}

export const roleContentConfig = {
  propList:[
    {
      prop:"name",
      label:"角色名",
      minWidth:"100"
    },
    {
      prop:"intro",
      label:"权限介绍",
      minWidth:"100"
    },
    {
      prop:"createAt",
      label:"创建时间",
      minWidth: "300",
      slotName:"createAt"
    },
    {
      prop:"updateAt",
      label:"更新时间",
      minWidth: "300",
      slotName:"updateAt"
  },
  {
    prop: "",
    label: "操作",
    minWidth: "160",
    slotName:"operation"
  }
  ],
  showIndexColumn : true,
  showSelectColumn : true,
  title: "角色列表",
}
