<template>
  <div class="product-list">
    
    <div class="list" v-for="productItem in productItems" :key="productItem._id">
    <ProductListItem :productItem = "productItem" />
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import ProductListItem from './ProductListItem.vue'
export default {
  name: 'product-list',
props: {

},
data() {
return {

}
},
methods: {

},
computed: {
  ...mapGetters([
    'productItems'])
  },

  components: {
    ProductListItem
  }

}
</script>

<style  scoped>
  
.product-list{
  border: 1px solid;
  display: grid;
}

</style>