<template>
  <div>
    <table>
      

      
      <tr class="table-header" >
        
        <td>#</td>
        <td>Title</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>sum</td>
        <td>Edit</td>
        
        
      </tr>
      <!-- v-for -->
      <tr  v-for="(cartItem, n) in cartItems" :key="cartItem._id" @click="selectRow(n)">
        
      <td>{{n+1}}</td>

      <td >{{cartItem.title}} </td> 
      <td>${{cartItem.itemPrice}}</td> 
      <td>{{cartItem.quantity}}</td>
      <td >${{cartItem.sum}}</td>
      <td><button @click="remove(cartItem)">—</button><button @click="addToCart(cartItem)">+</button></td>
      
      
      </tr>

    </table>
    <hr>
    <div>
      <button @click="addToCart">köp</button>
      <hr>
      <button @click="remove">Ta bort</button>

    </div>
    
       
  </div>
</template>

<script>
// import {mapState} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  data(){
    return{
      temp: '',
      n: 0,
      product : {"title":"Hoodie","price":699,"shortDesc":"Ocean unisex","category":"clothes","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"hoodie-ocean.png","serial":"173891297371277","_id":"LGDgkXooA44QAhTS"},
      product2: {"title":"Spinner","price":249,"shortDesc":"Soft","category":"wheels","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"wheel-spinner.png","serial":"239491299929222","_id":"xSrodX1yrPCORBdM"},
    }
  },
  methods:{
    selectRow(event){
      // console.log("select row", this.cartItems[event]);
      console.log(event);
    },

    count(){
      console.log("hej");
    },
    addToCart(event){
      this.$store.dispatch('addItem', event);   
      console.log(this.getState);   
    },
    remove(event){
      //TODO: ändra i Store
      // console.log(this.cartItems[event])
      this.$store.dispatch('addItem', event);
      // this.$store.dispatch('addItem', this.cartItems[event]);
    }
  },

  computed:{
    ... mapGetters(['cartItems']),
    getState(){
      return this.$store.state;
    }
    
    
    
  },
  created(){
    
  }

  
}
// {"title":"Tricky","price":799,"shortDesc":"Unisex","category":"board","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"skateboard-generic.png","serial":"231874871397182","_id":"3xRRf0wWEzJCwCWo"}
// {"title":"Awesome","price":799,"shortDesc":"Unisex","category":"board","longDesc":"Axle crailtap fastplant dude regular footed helipop impossible. Wax Jimmy'Z half-flip transfer nollie launch ramp mongo egg plant. Pogo slap maxwell g-turn boneless risers blunt nose slide.","imgFile":"skateboard-generic.png","serial":"2384993841228443","_id":"4D9RGKs81r0vKKZa"}
// {"title":"Hoodie","price":699,"shortDesc":"Ash unisex","category":"clothes","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"hoodie-ash.png","serial":"898329843984982","_id":"J9tTPGIm0sV2DotK"}
// {"title":"Hoodie","price":699,"shortDesc":"Ocean unisex","category":"clothes","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"hoodie-ocean.png","serial":"173891297371277","_id":"LGDgkXooA44QAhTS"}
// {"title":"Hiphop","price":799,"shortDesc":"Unisex","category":"board","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"skateboard-generic.png","serial":"2834982384832822","_id":"W1tIrrpgRRy994QB"}
// {"title":"Rocket","price":299,"category":"wheels","shortDesc":"Hard","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"wheel-rocket.png","serial":"712387128788877","_id":"dLf4MfPDMHNfmCU6"}
// {"title":"Hoodie","price":699,"shortDesc":"Fire unisex","category":"clothes","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"hoodie-fire.png","serial":"9919312731273772","_id":"hhL9Y8L4yoLFucBS"}
// {"title":"Flipper","price":799,"shortDesc":"Unisex","category":"board","longDesc":"Axle crailtap fastplant dude regular footed helipop impossible. Wax Jimmy'Z half-flip transfer nollie launch ramp mongo egg plant. Pogo slap maxwell g-turn boneless risers blunt nose slide.","imgFile":"skateboard-generic.png","serial":"238498293848233","_id":"jcct4cjRhrEcR58A"}
// {"title":"Gretas Fury","price":999,"shortDesc":"Unisex","category":"board","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"skateboard-greta.png","serial":"127127838128877","_id":"kJ7dxMcWsfGvpRQF"}
// {"title":"Swag","price":799,"shortDesc":"Unisex","category":"board","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"skateboard-generic.png","serial":"172381278381237","_id":"lu21QpuYgzDiQlFp"}
// {"title":"Wave","price":249,"shortDesc":"Medium","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"wheel-wave.png","serial":"9919291231232312","_id":"xG5zhMsEJmn4Lt5H"}
// {"title":"Spinner","price":249,"shortDesc":"Soft","category":"wheels","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"wheel-spinner.png","serial":"239491299929222","_id":"xSrodX1yrPCORBdM"}
</script>
<style >
  table{
    margin-left:100px;
  }
</style>