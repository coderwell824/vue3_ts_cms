
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

export const goodsContentConfig = {
  propList:[
    {
      prop:"name",
      label:"商品名称",
      minWidth:"80"
    },
    {
      prop:"oldPrice",
      label:"原价格",
      minWidth: "80",
      slotName:"oldPrice"
    },
    {
      prop:"newPrice",
      label:"新价格",
      minWidth: "80",
      slotName: "newPrice"
    },
    {
      prop:"desc",
      label:"商品描述",
      minWidth: "100",
    },
    {
      prop:"status",
      label:"状态",
      minWidth: "80",
      slotName:"status"
    },
    {
      prop:"imgUrl",
      label:"商品图片",
      minWidth: "100",
      slotName:"image"
    },

    {
      prop:"inventoryCount",
      label:"库存",
      minWidth: "80",
    },
    {
      prop:"saleCount",
      label:"销量",
      minWidth: "80",
    },
    {
      prop:"favorCount",
      label:"收藏",
      minWidth: "80",
    },
    {
      prop:"address",
      label:"地址",
      minWidth: "80",
    },
    {
      prop:"createAt",
      label:"创建时间",
      minWidth: "200",
      slotName:"createAt"
    },
    {
      prop:"updateAt",
      label:"更新时间",
      minWidth: "200",
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
  title: "商品列表",
}
