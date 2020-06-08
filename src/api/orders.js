import Api from './api.js'
import Store from '../store/store.js'
export default {
    
    async getOrders() {
        try {
            const token = Store.state.token;

            const config = {
                headers: {
                Authorization: "Bearer "  + token
            } }

            let res = await Api.get("orders", config);
            console.log(res.data);
        } catch (e) {
            console.log(e.response);
        }
    },
    async postOrders(order) {
        try {
            const token = Store.state.token;
            
            let config = {
                headers: {
                    Authorization: "Bearer "  + token
                }
            }
            let res = await Api.post("orders", order, config);
            console.log(res.data);
        } catch (e) {
            console.log(e.response);
        }
    }
}