<template>
	<div>
		<br />
		<div>
			<button @click="postOrders">Send Order</button>
		</div>
		<br />
		<br />
		<div>
			<button @click="getOrders">Get Orders</button>
		</div>
	</div>
</template>
<script>
import Orders from "../api/orders.js";
export default {
	props: {},
	data() {
		return {
			order: {
                items: [
                    "Cakd7c2h59sdXQM5",
					"8ifIJosYse57WxGF",
					"fCcqj2LwpUKKCTpn"
				],
                orderValue: 666,
			}
		};
	},
	methods: {
        getOrders() {
            Orders.getOrders();
        },
		postOrders() {
			Orders.postOrders(this.order);
		}
	},
    computed: {},
    // created() {
    //     const waddafakk = this.$store.state.user;
    //     console.log(waddafakk);
	// }
};
</script>

<style lang=
 scoped>
</style>