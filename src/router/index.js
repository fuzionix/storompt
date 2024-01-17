import { createRouter, createWebHashHistory } from 'vue-router'

const Home = { 
  template: '<div>Home</div>' 
}
const Demo = { 
  template: '<div>Demo</div>' 
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    alias: '/home'
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router