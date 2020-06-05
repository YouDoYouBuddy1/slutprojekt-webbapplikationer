<template>

  <div class="container" :products = "products">
    
    <Item v-bind:product="current_product"></Item>    

      <p>This is the product list page</p>
      <div class="container"> 
      <div class="header"><h1> Title: {{product.title}}</h1></div>
      <div class="sidebar">
        <span class="category">Category: {{product.category}}</span>
        <span class="longDesc">Long description{{product.longDesc}}</span>
        <span class="price">Price: {{product.price}}</span>
        
        
        </div>


      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            
  
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>


            <div class="carousel-inner">
              
              <div class="carousel-item active">
              
                <img src="../store/assets/hoodie-ash.png" class="d-block w-100" alt="b">
            </div>
              


            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        <div class="footer">Footer</div>
        
        </div>
        
        
        <!-- <p :product="getNext"></p> -->
      
    
          
          <p>current_product: {{current_product}}</p>
          <p>titel: {{current_product.title}}</p>
          <p>size: {{size}}</p>
          

<<<<<<< HEAD
 

        <button class="btn btn-primary"  @click="getNext"> Next</button>
=======
        <!-- <button class="btn btn-primary"  @click="getNext"> Next</button> -->
>>>>>>> afbd9b52... Lagt till mapp product för relaterade komponenter
        
        <!-- <hr>        
        <p> whatching item:# {{counter}}</p>
        <hr> -->
        <!-- <Item v-bind:product="product"></Item> -->
        
        
        
     
    
    
  </div>
</template>

<script>
<<<<<<< HEAD
// import ItemViews from './productItems/Item.vue';
import Item from './prduct_pres/Item.vue';
=======
import Item from './Item.vue';
>>>>>>> afbd9b52... Lagt till mapp product för relaterade komponenter
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
  
  data(){
    return{
      product:
        { 
          title:"Tricky",
          price: 799, 

          shortDesc:"Unisex",
          category:"board",
          longDesc:"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
          imgFile:"skateboard-generic.png",
          serial:"231874871397182",
          _id:"3xRRf0wWEzJCwCWo"
      }

    }

  },
  // components:{
  //   ItemViews: ItemViews
  // }


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
<<<<<<< HEAD


<style>



  
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
    background-color: #eee;
    border: none;
    margin: 50px;
    padding:20px;
    width: 1100px;
    height: 900px;
    
    border: 1px solid black;
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-template-rows: .5fr 3fr 1fr;
    gap: 10px;
    grid-template-areas: 
        " header ."
       " carousel sidebar"
      " footer sidebar";
  }


  .header{
    grid-area:header;
    border: 1px solid blue;
  }
  .carousel{
    grid-area: carousel;
    border: 1px solid black;
  }  




  .sidebar{
    grid-area: sidebar;

    display: grid;
    border: 1px solid black;

    row-gap: 10px;;
    
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
    border: 1px solid green;
  }

  .img{
    color:red;
  }
</style>

/**
* {"title":"Tricky","price":799,"shortDesc":"Unisex","category":"board","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"skateboard-generic.png","serial":"231874871397182","_id":"3xRRf0wWEzJCwCWo"}
* {"title":"Awesome","price":799,"shortDesc":"Unisex","category":"board","longDesc":"Axle crailtap fastplant dude regular footed helipop impossible. Wax Jimmy'Z half-flip transfer nollie launch ramp mongo egg plant. Pogo slap maxwell g-turn boneless risers blunt nose slide.","imgFile":"skateboard-generic.png","serial":"2384993841228443","_id":"4D9RGKs81r0vKKZa"}
*{"title":"Hoodie","price":699,"shortDesc":"Ash unisex","category":"clothes","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"hoodie-ash.png","serial":"898329843984982","_id":"J9tTPGIm0sV2DotK"}
*{"title":"Hoodie","price":699,"shortDesc":"Ocean unisex","category":"clothes","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"hoodie-ocean.png","serial":"173891297371277","_id":"LGDgkXooA44QAhTS"}
*{"title":"Hiphop","price":799,"shortDesc":"Unisex","category":"board","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"skateboard-generic.png","serial":"2834982384832822","_id":"W1tIrrpgRRy994QB"}
*{"title":"Rocket","price":299,"category":"wheels","shortDesc":"Hard","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"wheel-rocket.png","serial":"712387128788877","_id":"dLf4MfPDMHNfmCU6"}
*{"title":"Hoodie","price":699,"shortDesc":"Fire unisex","category":"clothes","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"hoodie-fire.png","serial":"9919312731273772","_id":"hhL9Y8L4yoLFucBS"}
*{"title":"Flipper","price":799,"shortDesc":"Unisex","category":"board","longDesc":"Axle crailtap fastplant dude regular footed helipop impossible. Wax Jimmy'Z half-flip transfer nollie launch ramp mongo egg plant. Pogo slap maxwell g-turn boneless risers blunt nose slide.","imgFile":"skateboard-generic.png","serial":"238498293848233","_id":"jcct4cjRhrEcR58A"}
*{"title":"Gretas Fury","price":999,"shortDesc":"Unisex","category":"board","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"skateboard-greta.png","serial":"127127838128877","_id":"kJ7dxMcWsfGvpRQF"}
*{"title":"Swag","price":799,"shortDesc":"Unisex","category":"board","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"skateboard-generic.png","serial":"172381278381237","_id":"lu21QpuYgzDiQlFp"}
*{"title":"Wave","price":249,"shortDesc":"Medium","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"wheel-wave.png","serial":"9919291231232312","_id":"xG5zhMsEJmn4Lt5H"}
*{"title":"Spinner","price":249,"shortDesc":"Soft","category":"wheels","longDesc":"Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ","imgFile":"wheel-spinner.png","serial":"239491299929222","_id":"xSrodX1yrPCORBdM"}
=======
<style scoped>

</style>
>>>>>>> dc935841... lagt till mapp product_pres (product presentation) med Vue-komponent för att visa enskilda produkter
