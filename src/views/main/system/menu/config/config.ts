
export const userSearchConfig = {
  formItems: [
    {
      field:"id",
      type:"input",
      label:"ID:",
      placeholder:"请输入ID"
    },
    {
      field:"name",
      type:"input",
      label:"用户名:",
      placeholder:"请输入用户名"
    },
    {
      field:"realName",
      type:"input",
      label:"真实姓名:",
      placeholder:"请输入真实姓名"
    },
    {
      field:"phoneNumber",
      type:"input",
      label:"电话号码:",
      placeholder:"请输入手机号码"
    },
    {
      field: "status",
      type:"select",
      label:"状态:",
      placeholder:"请选择状态",
      options:[
        {
          value:"1",
          label:"启用"
        },
        {
          value:"0",
          label:"禁用"
        },

      ]
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

export const menuContentConfig = {
  propList:[
    {
      prop:"name",
      label:"菜单名称",
      minWidth:"100"
    },
    {
      prop:"type",
      label:"类型",
      minWidth:"60"
    },
    {
      prop:"url",
      label:"菜单url",
      minWidth:"100"
    },
    {
      prop:"icon",
      label:"菜单icon",
      minWidth: "100",
    },
    {
      prop:"permission",
      label:"权限",
      minWidth: "100",

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
  showIndexColumn : false,
  showSelectColumn : false,
  title: "菜单列表",
  childrenProps: {
    rowKey: "id",
    treeProp: {
      children:"children"
    }
  },
  showFooter:false
}
