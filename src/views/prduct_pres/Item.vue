<template>
  <div class="Item">

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
        <div class="footer">Price: {{product.price}}</div>
      </div>
  </div>
  
  
</template>

<script>
export default {
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
}
</script>

<style>

</style>
