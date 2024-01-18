import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Homepage.vue'),
    alias: '/home'
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/DemoPage.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/Error.vue'),
    hidden: true
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
    hidden: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router