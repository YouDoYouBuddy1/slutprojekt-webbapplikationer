<template>

  <div>
    
    <table>
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
      <button @click="addToCart">KÖÖP</button>
      <hr>
      <button @click="remove">Ta bort</button>
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
    selectRow(event){
      // console.log("select row", this.cartItems[event]);
      console.log(event);
    },



    
    addToCart(){
      let order = this.$store.state.Cart.currentOrder;
      let prod = this.$store.state;
      console.log("state: ", prod);
      console.log(order);
      console.log("User: ", this.currentUser);
      this.showProducts();
      

    },


    showProducts() {
      console.log(this.$store.state.products);
    },



    remove(event){
      //TODO: ändra i Store
      // console.log(this.cartItems[event])
      this.$store.dispatch('addItem', event);
      // this.$store.dispatch('addItem', this.cartItems[event]);
    },
    
    
    
  
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
  components:{

  }

}

</script>
<style >
  table{
    margin-left:100px;
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