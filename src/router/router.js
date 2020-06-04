import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminArea from '../views/AdminArea.vue'
import Checkout from '../views/Checkout.vue'
import MyAccount from '../views/MyAccount.vue'
import ProductList from '../views/ProductList.vue'
import Registration from '../views/Registration.vue'


// import StartPage from '../views/StartPage.vue'
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
    path: '/ProductList',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
