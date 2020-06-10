import Api from './api.js'
// import Store from '../store/store.js'
export default {

    async getOrders() {
        return Api.get("orders");
    },
    async createOrders(order) {
       return Api.post("orders", order);
    }
}