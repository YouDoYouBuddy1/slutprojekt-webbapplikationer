import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminArea from '../views/AdminArea.vue'
import Checkout from '../views/Checkout.vue'
import MyAccount from '../views/MyAccount.vue'
import Registration from '../views/Registration.vue'
import ApiTesting from '../views/ApiTesting.vue'
import ApiCrudTesting from '../views/ApiCrudTesting.vue'
import FramePage from '../views/product/FramePage.vue'
import ProductsTable from '../views/product/ProductsTable.vue'
// import ProductViewer from '../views/product/ProductViewer.vue'
import ProductsView from '../views/ProductsView.vue'
import Cart from '../views/cart/Cart.vue'

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
        path: '/Registration',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/ProductViewer',
        name: 'ProductViewer',
        component: ProductsView
    },
    {
      path: '/ProductsTable',
      name: 'ProductsTable',
      component: ProductsTable,
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
