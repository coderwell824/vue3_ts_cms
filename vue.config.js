module.exports = {

  outputDir: './build',
  lintOnSave: false,

  devServer: {

    proxy: {

      "^/api": {
        target: "http://152.136.185.210:4000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  }



}
