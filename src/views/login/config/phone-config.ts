 const phoneRules = {
  number: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      pattern:/^[0-9]{11}$/,
      message:"手机号必须是11位",
      trigger: 'blur'
    }
  ],

  vrifyCode: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern:/^[a-z0-9]{3,}$/,
      message:"验证必须是3个以上字母或数字",
      trigger: 'blur',
    }
  ]
 }
export default phoneRules
