<template>

  <div class="container">
    <table class="table">
      
      <tr class="table-header" >
        
        <td>#</td> 
        <td>Title</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>sum</td>
        
      </tr>
      
      
      <tr>
      <tr  v-for="(item, n) in order.items" :key="n">  
        <td>{{n+1}}</td>
        <td>{{item}}</td>

      </tr>
    </table>
    <hr>
    <div>
      <button @click="listProducts">KÖP</button>
      <hr>
      
    </div>
    
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Cart',

  data(){
    return{
      
      order: {},
      cart: {},
      productsInCart:[],
      temp: '',
      n: 0,
    }
  },

  methods:{

   findProducts(){
     console.log("Temp: ",this.productsInCart);
     this.productsInCart.forEach(item => {
       console.log("forEach: ", item);
     })
   },

    listProducts(){
      let items = this.$store.state.Cart.currentOrder.items;
      if(items){
        console.log("true)");
        this.productsInCart = this.$store.state.Cart.currentOrder.items;
        console.log("prods: ", this.productsInCart);
        //TODO hämta produktinfo och lista det i korgen
       
      }
      else{
        console.log("false");
      }
    }
   },

   put($x){
     console.log("puttar: ",$x);
   },



  watch:{

  },

  computed:{
    ... mapState(['Cart']),
    


  },

  created(){
    
    this.order = this.$store.state.Cart.currentOrder;
    this.currentUser = this.$store.state.user;
  },

  components:{}
}

</script>
<style scoped>


.table{
    border: 1px solid black;
    
  }


.table-header{
  background-color: green;

}
  

  .mini-cart{
    border: 1px solid black;
    height: 120px;
    width: 200px;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-template-rows: repeat(3,3fr);
    font-size: 85%;
  }
</style>