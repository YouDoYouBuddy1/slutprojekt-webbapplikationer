<template>

  <div>
    <Item v-bind:product= "product" ></Item>
       <!-- <p>This is the product list page</p>
       
      
      
      <div >
        
        <p>Items in stock: {{products.length}}</p>
        
          <p>product: {{product}}</p>
        

        <button class="btn btn-primary"  @click="getNext"> Next</button>
        
        <hr>        
        <p> whatching item:# {{counter}}</p>
        <hr>
        <Item v-bind:product= "product" ></Item>

        </div> -->
         
     
    
    
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
      product: {},
      current:{},
      test:{
        value:10,
        name:"ivan",
      },
      list: [],
      self: 'In ProductList: ',

    }

  },
  
  methods:{
    getNext(){
      
      this.counter +=1;
      this.counter = this.counter %  this.products.length;
      this.product = this.products[this.counter];
      console.log(this.self+ "getNext: ", this.product);

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
    console.log(this.self + "watching: ", this.products);
    this.product = this.products[0];
  }
},

beforeCreate() {
  console.log("in ProductList.vue: beforeCreate()")
  this.$store.dispatch('loadProducts');
  console.log("In ProductList.vue: ---beforeCreate()"  +" 'this' is "+this.self , this.products);
},

  created() {
    console.log(this.self+ " created(): ", this.products.length);
},





beforeMount() {
  
  console.log(this.self + "before mount", this.products);
  
},


}
</script>
<style scoped>


</style>
