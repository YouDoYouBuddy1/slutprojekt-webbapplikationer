<template>
  <div>
    
  </div>
</template>
<script>
export default {
  


  beforeCreate() {
    this.$store.dispatch('loadProducts');
  },
}
</script>