<template>

    <div class="container" :product="loadProduct">
     <div class="shopping-box"><MiniCart/>
     <div class="button"><button @click="addToCart(products[counter])">KÖP</button></div>
     </div>
      
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="header"><h1> Title: {{products[counter].title}}</h1> </div>
                

                <img :src="require('@/assets/'+products[counter].imgFile)" class="d-block w-100" alt="b">
                </div>
                

            <a class="carousel-control-prev" @click="getPrev" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
              
            </a>
                          
            <a class="carousel-control-next" @click="getNext" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
              <hr>
              
            </a>  
            
          </div>
          <h1 class="footer">{{products[counter].price}} kr </h1>      
          
      

      </div>
      
      <hr>
      

      
      
      
  </div>
  
      
</template>

<script>

import MiniCart from '../cart/MiniCart.vue';

import {mapState} from 'vuex';



export default {
  name: 'ProductViewer',
  
  data(){
    
    return{
      counter: 0,
      
      product: [],
      temp: [],
      maxNr: 0,
      collection: [],
      
    }
  },

  computed:{
    ... mapState(['products']),
    // products(){
    //   return this.$store.state.products;
    // }
    getCollection( ){
      return this.$store.state.products;
       
    }
  },
  
  methods: {
    loadProduct(){
      // let products = this.$store.dispatch('loadProducts');
    
      // this.product = products[0];


      return this.product;    
    },

    getPrev(){
      
      this.counter -= 1;
      this.counter = (this.counter<0)? (this.products.length-1): this.counter;
      // this.product = this.products[this.counter];
      console.log("nr ", this.counter);
      // console.log(this.product.imgFile);
      
    },

    getNext(){  
      this.counter = (this.counter + 1) % (this.products.length);
      // console.log("nr ", this.counter);
      // console.log(this.products[this.counter]);
      // this.product = this.products[this.counter];
      // console.log(this.product.imgFile);
      
    },

    addToCart(event){
      console.log("adds to cart: ", event);

      this.$store.dispatch('addItem', this.products[this.counter]); 
      

    },
  },

  created(){
    this.$store.dispatch('loadProducts');
    this.collection = this.$store.state.products;
    
    
  },

  
  mounted() {
    // ... mapState(['products'])
    // this.product = this.products
    // this.$store.dispatch('loadProducts');
    // // this.product = products[0];
    console.log("Created: ", this.product)
    // console.log(this.$store.state.products);
    
    },
  
  components:{
      MiniCart,
    },
  


    

  

  
    
}
</script>
<style scoped>
.container{
  position: static;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 5fr 1fr;
  column-gap: 0px;
  
}

.carousel{
  
  width: 70%;
  margin-left: 25%;
  
}
.carousel-control-next-icon{
  
  color-adjust: green;
  
}

.sr-only{
  border:1px solid;
}
.carousel-inner{
  padding: 5%;
  place-content: center;
  
  
}
.carousel-item{
  position: static;
  
}

img{
  position: static;
  
}
.shopping-box{
  display:grid;
  width: 150px;
  height: 100px;
  margin-left: 0%;
  
}







</style>