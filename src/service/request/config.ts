//1.手动换不同的环境


//2.根据process.env.NODE_ENV来区分运行环境
//开发环境:  development
//生产环境: production
//测试环境: test

//1.区分不同环境来设置不同的环境变量

let BASE_URL = "";
let TIME_OUT = 10000;


if (process.env.NODE_ENV === "production") {

  //设置生产环境的环境变量
  BASE_URL = "http://152.136.185.210:5000";

} else if (process.env.NODE_ENV === "development") {

  //设置开发环境的环境变量
  BASE_URL = "http://152.136.185.210:5000";

} else {

  //设置测试环境的环境变量
  BASE_URL = "http://152.136.185.210:5000";
}

//2.导出环境变量

export {
  BASE_URL, TIME_OUT
}


//3.创建三个.env不同环境文件来配置

