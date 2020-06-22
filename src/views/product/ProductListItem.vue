<template>
  <div>
    <div class="list-item">
    <router-link :to=" '/products/' + productItem._id"><div class="title">{{productItem.title}}</div></router-link>
    
    <div class="longDesc">{{productItem.longDesc}}</div>
    
    <div class="small-img">small-Image</div>
    <div class="price">price: {{productItem.price}}</div>
    <div class="add-to-cart">Add To Cart</div>
    
  </div>
  </div>
</template>
<script>
export default {
  name: 'ProductListItem',
  props: ['productItem'],
  
}
</script>
<style scoped type="scss">
  .list-item{
  width: 60%;
  height: 250px;
  margin: 20px;
  display: grid;
  border:1px solid black;
  
  
  
  grid-template-columns: [a] 15% [b] 30% [c] 30% [d] 15%;
  grid-template-rows: 20% 60% 20%;
  column-gap: 0px;
  column-rule-color: #fff;
  background-color: #eee;
  
  grid-template-areas:
    " title   .       .           small-img"
    "longDesc longDesc longDesc   small-img"
    "price    add-to-cart . .";
  
  
}

.title{
  grid-area: title;
  border: 1px solid black;
}

  .longDesc{
    border: 1px solid black;
    grid-area: longDesc
  
}
.small-img{
  border: 1px solid black;
  grid-area: small-img;
}
.add-to-cart{
  border: 1px solid;
}
.price{
  border: 1px solid black;
  grid-area: price;
}



</style>