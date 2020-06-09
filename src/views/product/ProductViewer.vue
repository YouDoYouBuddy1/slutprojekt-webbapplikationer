<template>

    <div class="container" v-bind:proudct="loadProduct()">
      
     
     
     <div class="header"><h1> Title: {{product.title}}</h1> </div>
 
        
        
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            

            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>

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
        <div class="footer"> <h1>footer</h1>:${{product.price}}</div>
        
      </div>

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

      maxNr:0,
      
      
    }
  },

  computed:{
   ... mapState(['products']),
   

  },
  
  methods: {
    loadProduct(){
      this.product = this.products[0];
      
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
  },

   created() {
    this.$store.dispatch('loadProducts');

    },

  
    
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
    grid-template-rows: .5fr 3fr 1fr;
    gap: 10px;
    grid-template-areas: 
      " header     shoppingChart "
       "carousel   carousel"
        "footer    footer";
  }

  .shoppingChart{
    border: 1px solid red;
    color: green;
    width: 70px;
    height: 40px;
    justify-self: end;
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
    border: 4px solid green;
  }

  .img{
    color:red;
  }


</style>