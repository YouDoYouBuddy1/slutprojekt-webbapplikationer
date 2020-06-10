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
            <label for="yes">
              Yes:
              <input type="radio" v-bind:value="true" id="yes"  selectd>
            </label>
            <label for="no">
              No:
              <input type="radio" v-bind:value="false" id="no" >
            </label>
          </span>
        </form>

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