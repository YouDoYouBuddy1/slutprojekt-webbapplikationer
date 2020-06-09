import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminArea from '../views/AdminArea.vue'
import Checkout from '../views/Checkout.vue'
import MyAccount from '../views/MyAccount.vue'
import Registration from '../views/Registration.vue'
import ApiTesting from '../views/ApiTesting.vue'
import ApiCrudTesting from '../views/ApiCrudTesting.vue'


// import StartPage from '../views/StartPage.vue'
import FramePage from '../views/product/FramePage.vue'
import ProductsTable from '../views/product/ProductsTable.vue'

import Test from '../views/product/Test.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/orders',
        name: 'OrdersTest',
        component: ApiCrudTesting
    },
    {
        path: '/',
        name: 'ApiTesting',
        component: ApiTesting
    },
    {
        path: '/AdminArea',
        name: 'AdminArea',
        component: AdminArea
    },
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
    path: '/FramePage',
    name: 'FramePage',
    component: FramePage
  },
  {
    path: '/ProductViewer',
    name: 'ProductViewer',
    component: ProductViewer
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/ProductsTable',
    name: 'ProductsTable',
    component: ProductsTable
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
