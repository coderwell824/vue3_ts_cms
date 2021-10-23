export const depContentConfig = {
  propList: [
    {
      prop: "name",
      label: "部门名称",
      minWidth: "100"
    },
    {
      prop: "leader",
      label: "部门领导",
      minWidth: "100"
    },
    {
      prop: "parentId",
      label: "上级部门",
      minWidth: "180"
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "300",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "300",
      slotName: "updateAt"
    },
    {
      prop: "",
      label: "操作",
      minWidth: "160",
      slotName: "operation"
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: "部门列表",
}
