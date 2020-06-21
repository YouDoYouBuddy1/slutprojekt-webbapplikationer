<template>
  <div>

  </div>
</template>
<script>
export default {
  
  data(){
    return{
      data: {}
    }
  },

  created(){
    this.data = this.$store.products;
    console.log(this.data);
  }
}
</script>