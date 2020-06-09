<template >
  
  <div class="frame-page">
      <div class="logo-box">logo</div>
      <div class="header">header</div>
      <div class="sidemenu">
        <div class="product-catogory"><h1>category 1</h1></div>
        <div class="product-catogory"><h1>category 2</h1></div>
        <div class="product-catogory"><h1>category 3</h1></div>
        <div class="product-catogory"><h1>category 4</h1></div>
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
}


body{
  border: 1px solid red;
  background-color: #ddd;
  
}
.header{
  border:1px solid green;
}
.sidemenu{
  grid-area: sidemenu;
  align-content: center;
  border: 1px solid black;
  display: grid;

  grid-template-rows: 100px 100px 100px 100px;

  grid-template-areas: "product-category-title";
  
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
  column-gap:20px;
  border-radius: 20px;
  
  
   display: grid;
  

  grid-template-columns: 200px 600px;
  grid-template-rows: 100px auto 100px;

  grid-template-areas:
      "logo-box  header header"
      "sidemenu  item   ."
      "sidemenu  footer .";
      

}





</style>
