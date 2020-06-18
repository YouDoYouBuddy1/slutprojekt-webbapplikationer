import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminArea from '../views/AdminArea.vue'
import Checkout from '../views/Checkout.vue'
import MyAccount from '../views/MyAccount.vue'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'



import ProductViewer from '../views/product/ProductViewer.vue'
import Cart from '../views/cart/Cart.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/AdminArea',
    name: 'AdminArea',
    component: AdminArea
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/MyAccount',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },


  //Lagt till av Ivan efter branchat från develop efter merge
  {
    path: '/ProductViewer',
    name: 'ProductViewer',
    component: ProductViewer,
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
