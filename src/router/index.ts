import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/peoples',
      name: 'peoples',
      component: () => import('../pages/peoples.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../pages/favorites.vue')
    },
    {
      path: '/peoples/:id',
      name: 'peoples:id',
      component: () => import('../pages/peoples/:id.vue')
    }
  ]
})

export default router
