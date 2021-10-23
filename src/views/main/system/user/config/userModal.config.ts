

export const userModalConfig = {

  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名:",
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名:",
      placeholder: "请输入真实姓名"
    },
    {
      field: "password",
      type: "password",
      label: "用户密码:",
      placeholder: "请输入密码",
      isHidden: false
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码:",
      placeholder: "请输入手机号码"
    },
    {
      field: "departmentId",
      type: "select",
      label: "部门:",
      placeholder: "请输入部门",
      isHidden: false,
      options: [

      ]
    },
    {
      field: "roleId",
      type: "select",
      label: "角色:",
      placeholder: "请输入角色",
      isHidden: false,
      options: [

      ]
    },
  ],

  colLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  },
  itemStyle: {},
  labelWidth: "80px"

}
