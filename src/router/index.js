import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from "../views/Catalog";
import Cart from "../views/Cart";
import Wishlist from "../views/Wishlist";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
