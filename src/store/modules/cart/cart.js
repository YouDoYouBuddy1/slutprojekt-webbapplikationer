

const state = {
  
  cart: []

};



const mutations = {

  ADD_ITEM(state, payload){
    
    let newItem = payload;
    state.cart.push(newItem);
  },

  // REMOVE_ITEM (state, payload){

  // }

};


const actions = {
  
  addItem({commit}, payload){
      console.log("addProductToCart-call");
      
      
      console.log("state.cart: ",state.cart);
      
      console.log("payload: ", payload);
      
      const inCart = state.cart.find(item => item.id == payload._id);
      if(inCart){

        console.log("Is in cart: ", inCart);
        inCart.quantity +=1;
        inCart.sum = inCart.quantity * inCart.itemPrice

      }
      else{
        console.log("Not in cart");
        let newItem = {

          product: payload,
          title: payload.title,
          itemPrice: payload.price,
          id: payload._id,
          quantity: 1,
          sum: payload.price
        };
        commit('ADD_ITEM', newItem);
      }


      
  },

  removeItem({commit}, payload){
    const itemIn = state.cartItems.find( item => item._id == payload._id )
    console.log(itemIn);
    commit;
  }
    


};

const getters = {
  cartItems: state => state.cart,
};
const CartModule = {
  state,
  mutations,
  actions,
  getters, 
}

export default CartModule;