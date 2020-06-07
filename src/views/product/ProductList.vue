<template>
  <div>
     <div :items="products" :func="test(products)">
      <!-- <p>{{products}}</p>
      <h1>{{products.length}}</h1> -->

      <h1>template</h1>
     </div>

  </div>
  
      
</template>

<script>

import {mapState} from 'vuex';

export default {
  name: 'container',
  data(){
    
    return{
      items: [],
      first: true,
      second: false,
    }
  },

  computed:{
    ... mapState(['products'])
  },
  
  methods: {
    test($event){
      console.log("test(): ");
      console.log("first: "+this.first);
      console.log("second: "+this.second);

      console.log("In test-function: event = ", $event);
      console.log("This = ", this);
      console.log(this.items);
      this.first = !this.first;
      this.secont = !this.second;
    }
  },
 
  

    beforeCreate() {
    // console.log("in ProductList.vue: beforeCreate(): calling store");
    // console.log(this);
  
    console.log("in beforeCreated(): ", this);
    this.$store.dispatch('loadProducts');
    console.log(" In beforeCreate(): ", this.products);
    
    },

  created() {
    console.log(this.self + "in created ", this.products);
    // console.log(this.self+ " created(): lenght ", this.products.length);
  },

  beforeMount() {
    console.log(this.self + "beforeMount(); ", this.products);
  },
  mounted() {
    console.log("in mounted: ", this.products);
    console.log("in mounted: ", this.items);
    // this.imgFile = this.products[this.counter].imgFile
    
    
  },
}
</script>
