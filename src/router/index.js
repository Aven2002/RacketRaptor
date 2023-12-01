import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      showFooter: true,
      showLogOutBtn: true,
    },
  },
  {
    path: "/RACKET",
    name: "racket",
    component: () => import("../views/RacketView.vue"),
    meta: {
      showFooter: true,
      showLogOutBtn: true,
    },
  },
  {
    path: "/SHUTTLECOCK",
    name: "shuttlecock",
    component: () => import("../views/ShuttlecockView.vue"),
    meta: {
      showFooter: true,
      showLogOutBtn: true,
    },
  },
  {
    path: "/SHOES",
    name: "shoes",
    component: () => import("../views/ShoesView.vue"),
    meta: {
      showFooter: true,
      showLogOutBtn: true,
    },
  },
  {
    path: "/ACCESORIES",
    name: "accessories",
    component: () => import("../views/AccessoriesView.vue"),
    meta: {
      showFooter: true,
      showLogOutBtn: true,
    },
  },
  {
    path: "/add-product",
    name: "AddProductView",
    component: () => import("../views/AddProductView.vue"),
    meta: {
      showFooter: true,
      showLogOutBtn: false,
    },
  },
  {
    path: "/edit-product",
    name: "EditProductView",
    component: () => import("../views/EditProductView.vue"),
    meta: {
      showFooter: true,
      showLogOutBtn: false,
    },
  },
  {
    path: "/delete-product",
    name: "DeleteProductView",
    component: () => import("../views/DeleteProductView.vue"),
    meta: {
      showFooter: true,
      showLogOutBtn: false,
    },
  },
  {
    path: "/log-in",
    name: "LogInView",
    component: () => import("../views/LogInView.vue"),
    meta: {
      showFooter: true,
      showLogOutBtn: false,
    },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
