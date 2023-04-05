// import { createRouter, createWebHashHistory } from 'vue-router' // hash
import { createRouter, createWebHistory } from 'vue-router' // 历史

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/login.vue')
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
