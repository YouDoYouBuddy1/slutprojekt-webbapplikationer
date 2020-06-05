<template>
  <div class="Item" product="product">
    <p>title: {{product.title}}</p>
    <p> Category: {{product.category}}</p>
    <p>short description: {{product.shortDesc}}</p>
    <p> Long description: {{product.longDesc}}</p>
    <p>Price: {{product.price}}</p>
    <p>image: {{product.imgFile}}</p>

    <p>searchPath: {{pathToFile}}</p>
    
        
    <p></p>




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
              
                <img src="../../store/assets/hoodie-ash.png" class="d-block w-100" alt="b">
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


  },

data(){
    
    return{
      current_product:{},
      fileName: this.product.imgFile,
      pathToFile: ''
    }

  },
  methods:{

  },
  created(){
    // console.log("created: ",this.products[0].title);

    this.fileName = this.product.imgFile;
    
    
  },
  watch: {
    fileName() {
      this.pathToFile = '../../store/assets/' + this.fileName;
    }
  }
}
</script>

<style>

</style>
