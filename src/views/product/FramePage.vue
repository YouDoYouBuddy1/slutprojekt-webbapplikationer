<template >
  
  <div class="frame-page">
      <div class="nav">
        <router-link to="#">Category</router-link>  |
        <router-link to=#> Category </router-link>  |
        <router-link to="#" >Category</router-link> |
       <hr>
      </div>
      <div class="viewer">
      <ProductViewer></ProductViewer>
         </div>
      <div class="footer">footer</div>
       </div>
      

    
      


      
      
      
  
</template>
<script>
import ProductViewer from './ProductViewer.vue';

export default {
  
  computed:{
    
  },

  created() {
  },

  components:{
    ProductViewer,
  }
}
</script >
<style scoped>

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
  vertical-align: baseline;
  list-style: none;
}


body{
  border: 1px solid red;
  background-color: #ddd;
  
}
.nav{
  border:1px solid green;
  grid-area: nav;
  width: inherit;
}

.product-category-title{
  height: fit-content;
  border: 1px solid red;
}

.viewer{
  grid-area:item;
  height:fit-content;
  width: fit-content;
  
}

.footer{
  grid-area: footer;
  border: 1px solid red;
}


.frame-page{
  border: 1px solid red;
  column-gap:10px;
  border-radius: 10px;
  
  
   display: grid;
  

  grid-template-columns: 200px 600px;
  grid-template-rows: 70px auto 100px;

  grid-template-areas:
      "nav      nav"
      "item     item  "
      "footer   footer   ";
      

}





</style>
