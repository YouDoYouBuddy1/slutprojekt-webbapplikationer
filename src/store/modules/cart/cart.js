

const state = {
  
  currentOrder: {},
  created: false,

  
};



const mutations = {

  ADD_ITEM(state, payload){

    state.currentOrder = payload;
    state.created = true;
  },


};


const actions = {
  

  addItem({commit}, payload){
    
    
    let order = (state.created)? state.currentOrder: actions.createNewOrder();
    console.log("order created: ", order);
    
    actions.addToOrder(order, payload);
    console.log("payload: ", payload)
    
    commit('ADD_ITEM', order);

    console.log("TheOrder: ", order);
  },


 createNewOrder(){

    let order = {
      _id: 123,
      timeStamp: '',
      status: 'inProcess',
      items: [],
      orderValue:0,
    };
    

    console.log("CreateNewOrder(): ", order);
    
    return order;
  },

  addToOrder(order, payload){
    console.log("adding payload ", payload);
    console.log("to order: ", order);
    order.items.push(payload._id);
    order.orderValue += payload.price;


  },




  removeItem({commit}, payload){
    const itemIn = state.cartItems.find( item => item._id == payload._id )
    console.log(itemIn);
    commit;
  },

  getOrder(){
    console.log("returning: ", state.currentOrder);
    return state.currentOrder;
  }
};

const getters = {

  order: state => state.currentOrder,
  created: state => state.created,
  itemsIncart: state => state.currentOrder.items.length,  
};

const CartModule = {
  state,
  mutations,
  actions,
  getters, 
}

export default CartModule;