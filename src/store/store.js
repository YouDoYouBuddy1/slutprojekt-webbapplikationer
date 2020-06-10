import Vue from 'vue'
import Vuex from 'vuex'
import Api from "@/api/api.js";
import User from "@/api/user.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {_id: '', email: '', password: '', name: '', role: 'anonymous',
    adress: {street: 'test street', zip: '123 45', city: 'test city'}, 
    orderHistory: [{_id: 123, timeStamp: Date.parse('04 Dec 1995 00:12:00 GMT'), status: 'inProgress', items:[], orderValue: 999}]},

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
            console.log(result)
            commit("SAVE_TOKEN", result.data.token);
            commit("SAVE_USER", result.data.user);
        } catch (error) {
            alert("Registration failed: " + error.response.data.errors);
            console.log(error.response);
        }
    },
    async register({ commit }, registrationForm) {
      try {
          let result = await User.register(registrationForm);
          console.log(commit)
          console.log(result)
      } catch (error) {
          alert("Registration failed: " + error.response.data.errors);
          console.log(error.response);
      }
  },
    async loadProducts({ commit }) {
        try { let result = await Api.get("products")
           commit("SAVE_PRODUCTS", result.data);
            }
            catch(error){
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
  modules: {
  }
})
