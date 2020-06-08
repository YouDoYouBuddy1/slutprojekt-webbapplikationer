<template>
  <div>
  

      <form action="">
          <label for="filterField">
            
            <select id="">
              <option value=""> Disable filters </option>
              <option value="Title">Title</option>
              <option value="Category">Category</option>
              <option value="Price">Price</option>
              
              
            </select>
          </label>
          
          <label for="filterQuery">
            Query:
            <input type="text" id="filterQuery" v-model="filterQuery">
          </label>

          <span>
            Choice:
            <label for="userStateActive">
              Yes:
              <input type="radio" v-bind:value="true" id="userStateActive" v-model="filterUserState" selectd>
            </label>

            <label for="userStateInactive">
              No:
              <input type="radio" v-bind:value="false" id="userStateInactive" v-model="filterUserState">
              
            </label>
          </span>
        </form>

  <!-- <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-secondary">Button 1</button>
  <button type="button" class="btn btn-secondary">Button 2</button>

  
  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown menu
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown link</a>
      
    </div>
    

    </div> -->
      
    
    

    
  

      <table class="temp">
      <tr class="table-header">
        <td>#</td>
        <td>Title</td>
        <td>Category</td>
        <td>Short Desc</td>
        <td>Price</td>
        <td>edit</td>
        <td>remove</td>
        <td>ID</td>
        <td>Long Desc</td>
      </tr>
      <tr v-for="(product, n) in products" :key="product._id" :counter="countRows(0)">
      <td>{{n+1}}</td>
      <td id="title">{{product.title}} </td> 
      <td id="category">{{product.category}} </td>

      <td id="shortDesc">{{product.shortDesc}} </td>
      <td>${{product.price}}</td> 
      <td>button</td>
      <td>button</td>
      <td>{{product._id}}</td>
      <td ><button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">text</button> </td>
      </tr>

    </table>
  </div>
</template>
<script>
import {mapState} from 'vuex';


export default {

  data(){
    return{
      counter:0,
    }
  },
  computed:{
   ... mapState(['products']),
   

  },
  methods:{
    countRows($val){
      return $val +1;
    }
  },

   beforeCreate() {

    this.$store.dispatch('loadProducts');

    },
}
</script>
<style >
  form{
    border: 1px solid;
    margin:20px;
    
  }

  .btn-group{
    color: inherit;


  }
  label{
    margin-top:5px;
    margin-left:10px;
  }
  table{
    border: 1px solid;
  }
  .table-header{
    background-color: #42b983;
;
  }
  .temp{
    margin: 10px;
    border: 1px solid;
    margin-left:14px;
  }
  td{
    border:1px solid;
    padding-left:20px;
    padding-right: 20px;
  }

</style>