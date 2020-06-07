import Vue from "vue";
import Vuex from "vuex";
import Api from "@/api/api.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    save_products(state, products) {
      
      // console.log("In Vuex: saveProducts(" +'\n\n'+ 
      // "state: " + state +'\n\n' +
      // "products: " + products +")");


      state.products = products;
    },


  },
  actions: {
    
    loadProducts({ commit }) {

      console.log("In Vuex: loadProducts()");

      Api.get("products")
        .then((result) => {
          commit("save_products", result.data);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        } );
      }
  },
  getters : {

  },
  modules: {},
});