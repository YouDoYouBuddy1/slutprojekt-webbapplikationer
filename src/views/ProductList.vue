<template>

  <div class="container">
  
      <p>This is the product list page</p>
       
      
      
      <div >
        
        <p>Items in stock: {{products.length}}</p>
        
          <p>product: {{product}}</p>
        

        <button class="btn btn-primary"  @click="getNext"> Next</button>
        
        <hr>        
        <p> whatching item:# {{counter}}</p>
        <hr>
        <Item v-bind:product= "product" ></Item>

        </div>
        
     
    
    
  </div>
</template>

<script>
import Item from './prduct_pres/Item.vue';
//import {mapGetters} from 'vuex';
import {mapState} from 'vuex';

export default {
  data(){
    
    return {
      counter: 0,
      product: {},
      current:{},
      test:{
        value:10,
        name:"ivan",
      },
      list: [],


    }

  },
  
  methods:{
    getNext(){
      
      this.counter +=1;
      this.counter = this.counter %  this.products.length;
      this.product = this.products[this.counter];
      console.log(this.product);

    },
    increase(){
      this.counter +=1;
      
    },
    getTest(){
      this.test={value:10, name: 'ivan'}
    }

  
  },

    components:{
      Item: Item,
  },
  computed:{

       ... mapState(['products'],
      
    )


  },

watch:{
  products:function(){
    console.log("watching: ", this.products);
    this.product = this.products[0];
  }
},


  created() {
    console.log(" create", this.products.length);
},


beforeCreate() {
  this.$store.dispatch('loadProducts');
  console.log("before create", this.products);
},


beforeMount() {
 
  console.log("before mount", this.products);
  
},


}
</script>
<style scoped>

</style>
