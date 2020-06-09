import Vue from "vue"
import Vuex from "vuex"
import Api from "@/api/api.js"
import User from "@/api/user.js"

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        products: [],
        user: [],
        token: ""
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
        }
    },
    actions: {

        async login({ commit }, loginData) {
            try {
                let result = await User.login(loginData);
                commit("SAVE_TOKEN", result.data.token);
                console.log(result.data.token);
                commit("SAVE_USER", result.data.user);
            } catch (error) {
                alert("Registration failed: " + error.response.data.errors);
                console.log(error.response);
            }
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

        // Är non-synchronous okej - när - varför ?
        // loadProducts({ commit }) {
        //     Api.get("products")
        //         .then((result) => {
        //             commit("SAVE_PRODUCTS", result.data);
        //         })
        //         .catch((error) => {
        //             throw new Error(`API ${error}`);
        //         });
        // },
    },
    getters: {},
    modules: {},
});
