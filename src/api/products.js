import Api from './api'

export default {
    createProduct(newProduct) {
        return Api.post("products", newProduct);
    },
    updateProduct(id, changes) {
        console.log(id);
        console.log(changes);
        return Api.patch("products/" + id, changes);
    },
    getProduct(id) {
        // return Api.get(`products/${id}`);
        return Api.get("products/" + id);
    }
}