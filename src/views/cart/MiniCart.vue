<template>
    <div class="mini-cart">
      
          <p>Antal produkter</p><p>{{countItems}}</p>
          <p>Summa </p><p>{{orderValue}} kr </p>
          <p>Checkout</p> <p @click="showOrder">Visa korg</p>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data(){
    return {
      order:{},
      
      nrOfItems:0,

    } 
  },
  methods:{
    showOrder(){
      console.log(this.$store.getters.created);
      if(this.$store.getters.created){
        console.log("true");
      }
      else{console.log("false");}
    }
  },
  computed:{

    ... mapState(['Cart']),

    orderUpdate(){
      return this.$store.state.Cart.currentOrder;

    },
    orderValue(){
      
      return this.$store.getters.order.orderValue;

    },

    countItems(){
      if(this.$store.getters.created){
        return this.$store.getters.order.items.length;
      }
      else return 0;
    }
  },

  watch:{
    order(){
      this.order = this.$store.state.Cart.currentOrder;
    }
  },

  created(){
      this.order = this.$store.state.Cart.currentOrder;  
    }
    
}
</script>
<style>

.mini-cart{
    padding: 5px;
    
    
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-template-rows: repeat(3,3fr);
    font-size: 85%;
    box-shadow: 1px 1px;
    border-radius: 10%;
  }
  
</style>