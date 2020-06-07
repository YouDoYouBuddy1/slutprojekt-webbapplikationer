<template>
  <div class="container" :product="product" :ver="enterPoroduct(product)">
    
    prod: {{product.imgFile}}
    
    <!-- <div v-bind:imgFile="setPath(product.imgFile)"> -->
      <div>
      <p>image: {{product.imgFile}}</p>
    <!-- <p>title: {{product.title}}</p>
    <p> Category: {{product.category}}</p>
    <p>short description: {{product.shortDesc}}</p>
    <p>Long description: {{product.longDesc}}</p>
    <p>Price: {{product.price}}</p>
    
    
  <hr>
    <p>searchPath: {{pathToImg}}</p>
    <p>imgFile: {{imgFile}}</p>
    <p></p>
        
    <p></p> -->
    </div>



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
              
                <img :src="require('@/assets/'+imgFile)" class="d-block w-100" alt="b">
                
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
        <div class="footer">Price :${{product.price}}</div>
      </div>
      
  </div>
  
  
</template>

<script>

export default {
  props:{

    product: {

      // title: String,
      // price: Number,
      // shortDesc: String,
      // category: String,
      // longDesc: String,
      // imgFile: String,
      // serial: String,
      // _id: String
    },
    counter: Number,


  },

data(){
    
    return{
      self: 'In Item.vue: ',
      imgFile: this.product.imgFile,
      pathToImg: '',
      updatedFile: '',
      
      testName: 'hoodie-ash.png',
      current: {}
    }

  },
  methods:{

    enterPoroduct($event){
      console.log("Enter product: ", $event)
    },

    setProduct($event){
      console.log($event);
    },
    setPath($event){
      
      console.log(this.self + "setPath(): $event is = ", $event);
      this.imgFile = $event;
      
    },
    getNext(){
      this.counter +=1;
      console.log(this.self+" getNext()", this.counter);
    },
    getPrev(){
      this.counter -=1;
      console.log(this.self+" getPrev()", this.counter);
      
    }
    
  },
  created(){
    // console.log("created: ",this.product.title);

    // this.imgFile= this.product.imgFile;
    // this.pathToImg = "../../" + this.product.imgFile;
    
    console.log("In Item.vue: created(): this.product.pathToImg is ", this.product.pathToImg);
    
    
  },
  watch: {
    imgFile() {
      
      console.log(this.self + " wath: imgFile(). ")
      this.pathToImg = "../../store/assets/" + this.imgFile;
    },
    current() {
      console.log("wathing: ", this.current);

    }

  },
  updated() {
    console.log("updated: "+this.pathToImg)  
  },


  
}
</script>

<style>
/* 


  
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
  } */


</style>
