<template>
	<div id="gallery">
        <div class="container">
		<router-link to="" class="product" v-for="product in products" :key="product._id">
			<img :src="require('@/assets/'+product.imgFile)" />
			<p>{{product.title}}</p>
		</router-link>
        </div>
	</div>
</template>
<script>
 import { mapState } from "vuex";
export default {

props: {

},
data() {
return {

}
},
methods: {

},
computed: {
...mapState(["products"])
}
}
</script>

<style scoped>
.container {
    width: 20vw;
    height: 20vh;
}
img {
    max-width: 100%;
}

#gallery {
    flex-wrap: wrap;
    margin-left: 10vw;
    margin-right: 10vw;
}
</style>