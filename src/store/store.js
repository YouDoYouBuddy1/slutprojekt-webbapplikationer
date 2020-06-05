import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {_id: 'aaabbbccc', email: 'testmail@mailservice.com', password: '$$$hashed password$$$', name: 'Test Testson', role: 'admin',
    adress: {street: 'test street', zip: '123 45', city: 'test city'}, 
    orderHistory: [{_id: 123, timeStamp: Date.now(), status: 'inProgress', items:[], orderValue: 999}]}
  },
  mutations: {
    SET_CURRENT_USER(state, account) {
      state.currentUser = account
    }
  },
  actions: {
    registerAccount({ commit }, account)
    {
      commit("SET_CURRENT_USER", account)
    }
  },
  modules: {
  }
})
