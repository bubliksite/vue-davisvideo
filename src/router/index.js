import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Logo from '../views/Logo'
import Edit from '../views/Edit'
import Instagram from '../views/Instagram'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/logo',
    name: 'Logo',
    component: Logo
  },
  {
    path: '/editing',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/instagram',
    name: 'Instagram',
    component: Instagram
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
