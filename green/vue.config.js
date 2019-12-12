const path = require("path");
const http = require("http");
// const keepAliveAgent = new http.Agent({ keepAlive: true });
// const apiMocker = require("wepack-api-mocker");
// const isProd = prosces.env.NODE_ENV === "production";

module.exports = {
  //   pages: {
  //     index: "src/main.js",
  //     light_version: {
  //       entry: "src/light-version/main.js",
  //       template: "public/index.html",
  //       filennane: "light-version/index.html"
  //     }
  //   },
  lintOnSave: false,
  //   css: {
  //     loaderOptions: {
  //       sass: {
  //         data: `@import "~@/styles/variables.sass";`
  //       }
  //     }
  //   },
  chainWebpack: config => {
    // config.resolve.alias.set(
    //     "jx-element-ui",
    //     path.resolve(_driname,"src")
    // )
  },
  devServer: {
    port: 8091,
    before(app) {}
    // proxy: {
    //   "/api": {
    //     target: "需要跨域的地址",
    //     agent:keepAliveAgent,//后端接口的包括事项
    //   }
    // }
  }
};
