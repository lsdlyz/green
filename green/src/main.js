import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import "./element";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
import store from "./store";
Vue.config.productionTip = false;
//解决路由报错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
