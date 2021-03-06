import Vue from "vue"
import Vuex from "vuex"
import Api from "@/api/api.js"
import User from "@/api/user.js"
import Products from '@/api/products.js'
import Orders from '@/api/orders.js'
import Cart from "./modules/cart/cart.js"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        product: [],
        user: [],
        token: "",
        orders: [],
        cart: []
    },
    
    mutations: {
        SAVE_USER(state, user) {
            state.user = user;
        },


        SAVE_PRODUCTS(state, products) {
            state.products = products;
        },

        
        SAVE_TOKEN(state, token) {
            state.token = token;
        },
        SAVE_PRODUCT(state, product) {
            state.product = product;
        },
        SAVE_ORDERS(state, orders) {
            state.orders = orders;
        },

  //ta bort finns i Cart modulen
        SAVE_PRODUCT_TO_CART(state, product) {
            state.cart.push(product);
        }
    },

    actions: {

      //Det här finns i Cart-modulen. Tar bort härifrån.
        addToCart({commit}, product) {
            commit("SAVE_PRODUCT_TO_CART", product);
        },
        async loadProducts({ commit }) {
            try {
                let result = await Api.get("products")
                commit("SAVE_PRODUCTS", result.data);
            }
            catch (error) {
                console.log(error.response);
            }
        },
        async login({ commit }, loginData) {
            try {

                let result = await User.login(loginData);
                commit("SAVE_TOKEN", result.data.token);
                console.log(result.data.token);
                commit("SAVE_USER", result.data.user);
                if (result) {
                    Api.defaults.headers.common['Authorization'] = "Bearer " + this.state.token;
                    Api.defaults.headers.common['Content-Type'] = 'application/json'
                }
            } catch (error) {
                alert("Registration failed: " + error.response.data.errors);
                console.log(error.response);
            }
        },
        async register(context, registration) {
            try {
                let result = await User.registerUser(registration);
                alert(result.data.message);
                console.log(result.status, result.data);

            } catch (error) {
                alert("Registration failed: " + error.response.data.errors);
                console.log(error.response);
            }
        },
        async getProduct({ commit }, id) {
            try {
                let result = await Products.getProduct(id);
                console.log(result.data);
                commit("SAVE_PRODUCT", result.data);
            } catch (error) {
                console.log(error.response);
            }
        },
        async createOrders({state}) {
            let itemsID = state.cart.map(product => product._id); 
            console.log("store-order itemsID" + itemsID);
            let order = { items: [] };
            order.items = itemsID;
            console.log(order);
            // let temp = {
			// 	items: ["A8kHboBk4fSQFPoZ", "A8kHboBk4fSQFPoZ"]
			// } 
            try {
                let res = await Orders.createOrders(order);
                console.log(res.data);
            } catch (e) {
                console.log(e.response);
            }
        },
        async getOrders({commit}) {
            try {
                let res = await Orders.getOrders();
                console.log(res.data);
                commit("SAVE_ORDERS", res.data)
            } catch (e) {
                console.log(e.response);
            }
        },
        async createProduct(context, newProduct) {
            try {
                let res = await Products.createProduct(newProduct);
                console.log(res.data);
                return res.data.product._id;

            } catch (error) {
                console.log(error.response);
                return "Failed to create product"
            }
        },
    },
    getters: {
        orderValue: state => {
            const sum = state.cart.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
            console.log(sum);
            return sum;
        },
        productItems: state => state.products,
        productItemFromId: (state) => (id) => {
          return state.products.find(product => product._id == id);
        }
        // {
        //     let cost = state.cart.map(price).reduce(sum);
        //     console.log(cost)
        //     return cost;
            
        // }
    },
    modules: {
      Cart,
    },
});
