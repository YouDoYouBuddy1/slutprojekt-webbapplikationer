<template>
   <div class="container">
       <!-- possibly make <Item /> render inside v-for router-link with @click - router/productInfo -->
      <Item
         v-for="product in products"
         v-bind:product="product"
         v-bind:key="product._id"
      ></Item>
   </div>
</template>

<script>
import Item from "./Item.vue";
import { mapState } from "vuex";

export default {
   components: {
      Item: Item,
   },
   data() {
      return {
      };
   },

   methods: {
      // förstår inte get/set nedan (vad gör $event, när anropas getItem)
      getItem($event) {
         console.log($event);
         this.product = $event;
      },
      setSize($event) {
         this.size = $event;
         console.log("setSize: " + this.size);
      },
      getNext() {
         console.log("getNext");
         this.counter += 1;
         this.counter = this.counter % this.products.length;
         this.current_product = this.products[this.counter];
         console.log(this.self + "getNext: ", this.current_product);
      },
      increase() {
         this.counter += 1;
      },
      getTest() {
         this.test = { value: 10, name: "ivan" };
      },
   },
   computed: {
      ...mapState(["products"]),
   },
   watch: {
      products: function() {
         console.log(this.self + "watching: ", this.products);
         this.current_product = this.products[0];
         this.size = this.products.length;
      },
   },
   beforeCreate() {
      console.log("in ProductList.vue: beforeCreate(): calling store");

      this.$store.dispatch("loadProducts");

      console.log(
         "In ProductList.vue:beforeCreate() " + " 'this' is " + this.self
      );
      console.log(
         "In ProductList.vue:beforeCreate(): and this.products is: ",
         this.products
      );
   },

   created() {
      console.log(this.self + " created(): lenght ", this.products.length);
   },

   beforeMount() {
      console.log(this.self + "before mount", this.products.length);
   },
};
</script>
<style scoped>
</style>
