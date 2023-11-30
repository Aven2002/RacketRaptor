import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { showFooter: true },
  },
  {
    path: "/RACKET",
    name: "racket",
    component: () => import("../views/RacketView.vue"),
    meta: { showFooter: true },
  },
  {
    path: "/SHUTTLECOCK",
    name: "shuttlecock",
    component: () => import("../views/ShuttlecockView.vue"),
    meta: { showFooter: true },
  },
  {
    path: "/SHOES",
    name: "shoes",
    component: () => import("../views/ShoesView.vue"),
    meta: { showFooter: true },
  },
  {
    path: "/ACCESORIES",
    name: "accessories",
    component: () => import("../views/AccessoriesView.vue"),
    meta: { showFooter: true },
  },
  {
    path: "/add-product",
    name: "AddProductView",
    component: () => import("../views/AddProductView.vue"),
    meta: { showFooter: false },
  },
  {
    path: "/edit-product",
    name: "EditProductView",
    component: () => import("../views/EditProductView.vue"),
    meta: { showFooter: false },
  },
  {
    path: "/delete-product",
    name: "DeleteProductView",
    component: () => import("../views/DeleteProductView.vue"),
    meta: { showFooter: false },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
