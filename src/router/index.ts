import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewArrivals from "../views/NewArrivals.vue";
import Du_Exclusive from "../views/Du_Exclusive.vue";
import DressPage from "../views/DressPage.vue";
import ClothingPage from "../views/ClothingPage.vue";
import SalePage from "../views/SalePage.vue";
import AccessoriesPage from "../views/AccessoriesPage.vue";
import ShoesPage from "../views/ShoesPage.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/arrivals-page",
    name: "arrivals-page",
    component: NewArrivals,
  },
  {
    path: "/exclusive-page",
    name: "exclusive-page",
    component: Du_Exclusive,
  },
  {
    path: "/clothing-page",
    name: "clothing-page",
    component: ClothingPage,
  },
  {
    path: "/dresses-page",
    name: "dresses-page",
    component: DressPage,
  },
  {
    path: "/sale-page",
    name: " sale-page",
    component: SalePage,
  },
  {
    path: "/accessories-page",
    name: "accessories-page",
    component: AccessoriesPage,
  },
  {
    path: "/shoes-page",
    name: "shoes-page",
    component: ShoesPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
