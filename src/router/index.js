import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/busqueda',
    name: 'Busqueda',
    // route level code-splitting
    // this generates a separate chunk (busqueda.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "busqueda" */ '../views/Busqueda.vue')
  },
  {
    path: '/ventas',
    name: 'Ventas',
    // route level code-splitting
    // this generates a separate chunk (ventas.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ventas" */ '../views/Ventas.vue')
  },{
    path: '/total',
    name: 'Total',
    // route level code-splitting
    // this generates a separate chunk (total.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "total" */ '../views/Total.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
