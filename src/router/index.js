import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import productos from '../views/productos.vue'
import redes from '../views/redes.vue'
import promos from '../views/promos.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: home, name: 'inicio'},
    {path: '/productos', component: productos, name: 'productos'},
    {path: '/redes', component: redes, name: 'redes'},
    {path: '/promos', component: promos, name: 'promos'}
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  props:true
})

export default router
