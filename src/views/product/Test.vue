<template>
  <div>
    <h1>Test</h1>
    <button @click="loadProducts">Knapp</button>
    
  </div>
</template>

<script>

export default {

  data(){
    return{
      allProducts:[],
      categories: []

    }
  },

  methods:{
    loadProducts(){
      return this.test();
      
    },

    async test(){
      console.log("calloing");
      this.allProducts = await this.$store.dispatch('loadProducts');
    }
    
  },

  watch:{
    testar:function(){
      console.log("All products");

    },
    categories(){

      console.log("categorues");
    }
    
  },

  
}
</script>