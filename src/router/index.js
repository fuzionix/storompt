import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Homepage.vue'),
    redirect:'/demo',
    alias: '/home'
  },
  {
    path: '/demo',
    name: 'createDemo',
    component: () => import('../views/CreateDemo.vue')
  },
  {
    path: '/custom-demo',
    name: 'createCustomDemo',
    component: () => import('../views/CreateCustomDemo.vue')
  },
  {
    path: '/demo/:demoId',
    name: 'demo',
    component: () => import('../views/DemoPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/error/:name',
    name: 'error',
    component: () => import('../views/Error.vue'),
    hidden: true
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/error/page',
    hidden: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router