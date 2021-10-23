import axios from "axios";

//5.axios的配置选项(全局)
axios.defaults.baseURL = "http://httpbin.org";  //配置请求基本路径
axios.defaults.timeout = 2000;   //配置超时时间
axios.defaults.headers = {};    //配置请求头

//1.get请求,携带参数
axios.get("/get", {

  params: {
    name: "cs",
    age:18
  },

  timeout:1000,   //局部配置
  headers: {},


}).then((res) => {
  console.log(res);
})

//2.post请求,携带参数
axios.post("/post", {
  data: {
    name: "css",
    age:18
  }
}).then((res) => {
  console.log(res);
})

//3.axios.all -> 多个请求,数据一起返回
axios.all([
  axios.get("/get",{params:{name:"css",age:18}}),
  axios.post("/post",{data:{name:"css",age:18}})
]).then((res) => {
  console.log(res);
})


//4.axios的拦截器

//1.拦截请求
//fn1:  请求发送成功会执行的函数   fn2: 请求发送失败会执行的函数
axios.interceptors.request.use((config) => {


  //1.给请求添加token

  console.log("请求成功的拦截");
  return config;  //修改并返回配置

}, (err) => {

  console.log("请求发送错误!");
  return err
})

//2.拦截响应
//fn1:  数据响应成功会执行的函数   fn2: 数据响应失败会执行的函数
axios.interceptors.response.use((res) => {

  console.log("响应成功的拦截");
    return res;
}, (err) => {

  console.log("服务器响应失败!");
  return err;

})




