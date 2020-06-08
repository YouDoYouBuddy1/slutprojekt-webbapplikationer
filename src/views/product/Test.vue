<template>
  <div>
    <div ></div>
    <button @click="setItem">tryck</button>
    {{items[0]}}
    {{imgFile}}
    
  </div>
</template>

<script>
import {mapState} from 'vuex';


export default {
  data(){
    return{
      items: [],
      item: {},
      imgFile:'',
      counter:0,
      temp: {
        title: String,
        price: Number,
        imgFile: String,
      }
    }
  },
  methods:{

      setItem(){
        this.counter +=1;
        console.log(this.counter);
        this.items = this.products;
        this.item = this.items[0];
        this.imgFile = this.item.imgFile;
      }
  },
  computed:{
   ... mapState(['products']),

   ivan(){
     return 10;
   },
        

  },
  watch:{
    items: function(){
      
      console.log("watch", this.products);

    }
  },

  beforeCreate() {

    
    console.log("Before create: ", this.products);
    },

  created(){
    this.$store.dispatch('loadProducts');
    console.log("created: ", this.products);
    localStorage.setItem("prods:", this.products);
    localStorage.setItem("this: ", this);
    sessionStorage.setItem("this:", this);

    
  }


}
</script>