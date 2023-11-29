import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/RACKET",
    name: "racket",
    component: () => import("../views/RacketView.vue"),
  },
  {
    path: "/SHUTTLECOCK",
    name: "shuttlecock",
    component: () => import("../views/ShuttlecockView.vue"),
  },
  {
    path: "/SHOES",
    name: "shoes",
    component: () => import("../views/ShoesView.vue"),
  },
  {
    path: "/ACCESORIES",
    name: "accessories",
    component: () => import("../views/AccessoriesView.vue"),
  },
  {
    path: "/add-product",
    name: "AddProductView",
    component: () => import("../views/AddProductView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
