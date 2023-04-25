import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Shop',
    component: () => import('../views/ShopView.vue')
  }]
})

export default router