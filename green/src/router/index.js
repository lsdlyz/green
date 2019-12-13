import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/login/index";
import Home from "@/components/home/container";
import Admin from "@/components/admin";
import Element from "@/components/element";
import Instance from "@/components/instance";
import List from "@/components/list";
import Notfound from "@/components/404/index";

Vue.use(Router);

export const routes = [
  { path: "/", name: "login", component: Login },
  {
    path: "/home",
    name: "home",
    component: Home,
    redirect: "/admin/number",
    children: [
      {
        path: "/admin/number",
        name: "number",
        component: Admin.Number,
        meta: { role: 0, text: "数字" }
      }
    ]
  },
  {
    path: "/element/table",
    name: "table",
    component: Element.Container,
    meta: { role: 1, text: "表格" },
    redirect: "/element/table",
    children: [
      {
        path: "/element/table",
        name: "table",
        component: Element.Table,
        meta: { role: 1, text: "表格" }
      }
    ]
  },
  {
    path: "/instance/base64",
    name: "base64",
    component: Instance.Container,
    redirect: "/instance/base64",
    meta: { role: 2, text: "事例" },
    children: [
      {
        path: "/instance/base64",
        name: "base64",
        component: Instance.Base
      },
      {
        path: "/instance/compiler",
        name: "compiler",
        component: Instance.Compiler
      }
    ]
  },
  {
    path: "/list/order",
    name: "order",
    component: List.Container,
    redirect: "/list/order",
    meta: { role: 3, text: "订单" },
    children: [
      {
        path: "/list/order",
        name: "order",
        component: List.Order
      }
    ]
  },
  { path: "/404", name: "404", component: Notfound },
  { path: "*", redirect: "/404" }
];

export default new Router({
  routes
});
