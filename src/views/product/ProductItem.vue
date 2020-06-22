<template>
  <div>
    
    <div class="item" v-if="productItem">
      <div class="go-back-to-list"><b> back-arrow</b></div>
      <div class="title"><b>title</b> {{productItem.title}}</div>
      <div class="image"><b>Image</b>: {{productItem.imgFile}}</div>
      <div class="longDesc"><b>Long Desc</b>: {{productItem.longDesc}}</div>
      <div class="price"><b>Price: {{productItem.price}}</b></div>
      <div class="add-to-cart-button"><b>Add To Cart-button</b></div>
      
      
      </div>
      <div v-else>Product not found</div>
    
  </div>
</template>
<script>
export default {
  name: 'ProductItem',
  props: ['id'],

  computed:{
    productItem(){
      return this.$store.getters.productItemFromId(this.id);
    }
  },
  created () {
    console.log('This.id: ', this.id, '\nLogging item: ', this.$store.getters.productItemFromId(this.id))
  }
  
}
</script>
<style lang="css">
.item{
  margin-left:300px;
  width: 500px;
  border: 1px solid;
}
</style>