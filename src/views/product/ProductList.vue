<template>

  <div class="container" :products = "products">
    
    <Item v-bind:product="current_product"></Item>    

      <p>This is the product list page</p>

        
        <!-- <p :product="getNext"></p> -->
      
    
          
          <p>current_product: {{current_product}}</p>
          <p>titel: {{current_product.title}}</p>
          <p>size: {{size}}</p>
          

        <!-- <button class="btn btn-primary"  @click="getNext"> Next</button> -->
        
        <!-- <hr>        
        <p> whatching item:# {{counter}}</p>
        <hr> -->
        <!-- <Item v-bind:product="product"></Item> -->
        
        
        
     
    
    
  </div>
</template>

<script>
import Item from './Item.vue';
//import {mapGetters} from 'vuex';
import {mapState} from 'vuex';

export default {
  data(){
    
    return {
      counter: 0,
      current_product: {},
      current:{},
      test:{
        value:10,
        name:"ivan",
      },
      list: [],
      self: 'In ProductList: ',
      size: 0,
      temp:{},

    }

  },
  
  methods:{
    getItem($event){
      console.log($event);
      this.product = $event;
    },

    setSize($event){
      this.size = $event;
      console.log("setSize: "+this.size);
    },
    getNext(){
      console.log("getNext");
      this.counter +=1;
      this.counter = this.counter %  this.products.length;
      this.current_product = this.products[this.counter];
      console.log(this.self+ "getNext: ", this.current_product);
      

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
    ... mapState(['products'])
  },

watch:{
  products:function(){
    console.log(this.self + "watching: ", this.products);
    this.current_product = this.products[0];
    this.size = this.products.length;
  }
},

beforeCreate() {
  console.log("in ProductList.vue: beforeCreate(): calling store")
  
  this.$store.dispatch('loadProducts');

  console.log("In ProductList.vue:beforeCreate() "  +" 'this' is "+this.self );
  console.log("In ProductList.vue:beforeCreate(): and this.products is: " , this.products);
},

  created() {
    console.log(this.self+ " created(): lenght ", this.products.length);
},





beforeMount() {
  
  console.log(this.self + "before mount", this.products.length);
  
},


}
</script>
<style scoped>

</style>
