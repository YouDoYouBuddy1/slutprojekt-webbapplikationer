<template>
<div>
    <div v-for="product in products"
    v-bind:key="product._id">
<p>{{product.title}}</p>

    </div>
    {{products}}
</div>
</template>

<script>

import { mapState } from 'vuex'

export default {
props: {

},
data() {
return {
data: []
}
},
methods: {

},
computed: {
 ... mapState(['products']) 
},
created() {
    this.$store.dispatch('loadProducts');
}
}
</script>

<style lang=
 scoped>

</style>