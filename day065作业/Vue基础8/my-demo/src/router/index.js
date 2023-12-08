import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/", //路径
    name: "home", //路由的名字
    // 同步加载路由
    component: HomeView, //组件
  },
  {
    path: "/about", //路径
    name: "about", //路由的名字
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 异步加载路由
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"), //组件
  },
  {
    path: "/login", //路径
    name: "Login", //路由的名字
    component: () => import("../views/LoginView.vue"), //组件
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
