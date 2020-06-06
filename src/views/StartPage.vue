<template>
  <div>
   
  <h1>Start Page</h1>
  
  <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="/">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="ProductList">Product List</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Unactive</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Unactive</a>
  </li>
  </ul>
  </div>
</template>
<script>
export default {

  data(){
    return{

    }
  }


}
</script>
<style scoped>
  .nav{
    margin:100x;
  }
</style>