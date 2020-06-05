<template>
  <div>
    <div v-for="product in products" v-bind:key="product._id">
      <p>{{ product.title }}</p>
    </div>
    <button @click="addUser">ADDUSER</button>
    <h1>And Now .. !</h1>
    <div>
      {{ product }}
    </div>
    <button @click="setProduct(id)"> Gets product</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import User from "../api/user.js";
import Products from "../api/products.js";
export default {
  props: {},
  // components: {
  //     userApi
  // },
  data() {
    return {
      id: "IiBMLhNHfaoPaaN1",
      product: [],
      user: {
        email: "Etest",
        password: "Ptest",
        repeatPassword: "Ptest",
        name: "Ntest",
        adress: {
          street: "Stest",
          city: "Ctest",
          zip: "Ztest",
        },
      },
    };
  },
  methods: {
    addUser() {
      console.log("Hello from addUSer method");
      User.register(this.user);
    },
    // product.data innehåller objectet product men som array av alla as
     async getProduct(id) {
    let product = await Products.getProduct(id);
    this.product = product.data; }
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.$store.dispatch("loadProducts");
  },
};
</script>

<style lang="scoped"></style>
