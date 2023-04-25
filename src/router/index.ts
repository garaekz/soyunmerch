import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/shop",
      name: "Shop",
      component: () => import("../views/ShopView.vue"),
    },
    {
      path: "/products/:slug",
      name: "Product",
      component: () => import("../views/ProductView.vue"),
    },
  ],
});

export default router;
