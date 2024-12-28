import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CityTaxis from '../views/CityTaxis.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/city/:id',
    name: 'city-taxis',
    component: CityTaxis
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router