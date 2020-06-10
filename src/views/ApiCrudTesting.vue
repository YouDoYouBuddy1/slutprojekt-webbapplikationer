<template>
	<div>
		<br />
		<div>
			<button @click="getOrders">Get Orders</button>
		</div>
		<br />
		<br />
		<div>
			<button @click="createOrders">Create Order</button>
		</div>
		<br />
		<br />
		<div>
			<button @click="createProduct">Create Product</button>
		</div>
		<br />
		<br />
		<div>
			<button @click="updateProduct">Update product</button>
		</div>
	</div>
</template>
<script>
import Products from "../api/products.js";
export default {
	props: {},
	data() {
		return {
			id: "A8kHboBk4fSQFPoZ",
			newProduct: {
				// _id: '39y7gbbZk1u4ABnv',
				title: "Programmer Hell",
				price: 666,
				shortDesc: "Non Binary Gender Approved",
				longDesc:
					"Ski-bi dibby dib yo  da dub dub Yo da dub dub Ski-bi dibby dib yo da dub dub Yo da dub dub Im the Scatman",
				imgFile: "memme-troll.png"
			},
			order: {
				items: ["A8kHboBk4fSQFPoZ", "A8kHboBk4fSQFPoZ"]
				// orderValue: 666
			}
		};
	},
	methods: {
		async updateProduct() {
			try {
				let result = await Products.updateProduct(
					this.id,
					this.newProduct
				);
				console.log(result.data);
			} catch (error) {
				console.log(error.response);
			}
		},
		async createProduct() {
			let answerResult = await this.$store.dispatch(
				"createProduct",
				this.newProduct
			);
			if (answerResult) {
				alert("Product _ID: " + answerResult);
				console.log(answerResult);
			} else {
				alert("Failure");
			}
		},
		getOrders() {
			this.$store.dispatch("getOrders");
		},
		createOrders() {
			this.$store.dispatch("createOrders", this.order);
		}
	},
	computed: {}
};
</script>

<style lang=
 scoped>
</style>