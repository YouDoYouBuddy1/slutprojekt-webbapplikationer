<template>

    <div class="container" : >
      
      {{products}}
     
     
     <div class="header"><h1> Title: {{product.title}}</h1> </div>
 
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img :src="require('@/assets/'+product.imgFile)" class="d-block w-100" alt="b">
                </div>
              

            <a class="carousel-control-prev" @click="getPrev" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>

            <a class="carousel-control-next" @click="getNext" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            
            
          </div>
       
      </div>
      <div class="footer"> <h1>ProuView-footer</h1>:${{product.price}}</div>
      <div class="cart">CART</div>
      <div class="button"><button @click="addToCart(product)">KÖP</button></div>
  </div>
  
      
</template>

<script>



import {mapState} from 'vuex';



export default {
  name: 'ProductViewer',
  
  data(){
    
    return{
      counter: 0,
      product: {},
      temp: [],

      maxNr:0,
      
      
    }
  },

  computed:{
   ... mapState(['products']),

  },
  
  methods: {
    loadProduct(){
      let products = this.$store.dispatch('loadProducts');
      this.product = products[0];

      return this.product;
    
    },
    getPrev(){
      
      this.counter -= 1;
      this.counter = (this.counter<0)? (this.products.length-1): this.counter;
      this.product = this.products[this.counter];
      console.log("nr ", this.counter);
      console.log(this.product.imgFile);
      
    },
    getNext(){
      
      this.counter = (this.counter + 1) % (this.products.length);
      console.log("nr ", this.counter);
      console.log(this.products[this.counter]);
      this.product = this.products[this.counter];
      console.log(this.product.imgFile);
      
    },

    addToCart(event){
      console.log(event);
      this.$store.dispatch('addItem', this.product); 
      this.loadItems();

    },


    async loadItems(){

      console.log("calloing");
      let result = await this.$store.dispatch('loadProducts');
      console.log("Async: ", result);
    }



  },

  
   created() {
    //  this.$store.dispatch('loadProducts');

    },

  mounted(){
    this.loadItems();

  }

  
    
}
</script>
<style scoped>



  * {
    
    padding:0;
    margin:0;
   border: 1px solid black;
  }
  body{
    border: 1px solid black;
    width: fit-content;
    padding: 100px;
  }


  .container{
    border-radius: 20px;
    background-color: #eee;
    border: none;
    
    padding:10px;
    
    
    
    border: 1px solid black;
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-template-rows: .5fr 3fr .5fr;
    gap: 10px;
    grid-template-areas: 
      " header     shoppingChart "
       "carousel   carousel"
        "footer    button";
  }

  .shoppingChart{
    border: 1px solid red;
    color: green;
    width: 70px;
    height: 40px;
    justify-self: end;
  }

  .buy-button{
    grid-area: button;
    background-color: #fff;
  }

  .header{
    grid-area:header;
    border: 1px solid blue;
  }
  .carousel{
    grid-area: carousel;
    border: 1px solid black;
  }  

  img{
    height: 660px;
    width: 940px;
  }





  .carousel-indicators{
    border: 1px solid red;
  }

  carousel-item{
    
    height: fit-content;
    width: fit-content;
    
  }
  .footer{
    grid-area: footer;
    height: fit-content;
    border: 8px solid green;
  }

  .img{
    color:red;
  }


</style>