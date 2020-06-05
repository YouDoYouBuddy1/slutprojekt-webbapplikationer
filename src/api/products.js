import Api from './api'

export default {


    getProduct(id) {
        return Api.get(`products/${id}`);
    }
}