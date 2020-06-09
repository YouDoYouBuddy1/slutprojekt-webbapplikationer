<template>
	<div>
		<!-- Prints all product.title from mapState / store products -->
		<div v-for="product in products" v-bind:key="product._id">
			<p>{{ product.title }}</p>
		</div>

		<!-- Get and display product from data -> id -->
		<br />
		<button @click="getProduct(id)">Gets product</button>
		<div>{{ product }}</div>
		<br />
		<br />
		<!-- alters components -> registerForm -> user.email 
		so we can register another user-->
		<div>
			<button @click="alterEmail">change email</button>
		</div>
		<br />
		<br />
		<!-- button sends registrationForm to api -->
		<div>
			<button @click="register">Register new User</button>
		</div>
		<br />
		<br />
		<!-- Login -->
		<h2>Login test</h2>
		<p>
			<button @click="login">Click me to login</button>
		</p>
		<router-link to="orders">
			<button>Go to Orders</button>
		</router-link>
		<br />
		<!-- User returned from login request -->
		<p>{{ user }}</p>
		<br />
		<br />
	</div>
</template>

<script>
import { mapState } from "vuex";
import User from "../api/user.js";
import Products from "../api/products.js";

export default {
	data() {
		return {
			loginResult: Boolean,
			id: "IiBMLhNHfaoPaaN1",
			product: [],
			registrationForm: {
				email: "Secondtest",
				password: "Ptest",
				repeatPassword: "Ptest",
				name: "Ntest",
				adress: {
					street: "Stest",
					city: "Ctest",
					zip: "Ztest"
				}
			},
			loginData: {
				email: "Etest",
				password: "Epassword"
			}
		};
	},
	methods: {
		alterEmail() {
			this.registrationForm.email += "K";
			console.log(this.registrationForm.email);
		},
		login() {
			this.$store.dispatch("login", {
				email: this.registrationForm.email,
				password: this.registrationForm.password
			});
			// ALTERNATIVELY: .dispatch("login", object)   object == 'loginData' , see above
		},
		register() {
			User.register(this.registrationForm);
		},
		async getProduct(id) {
			let res = await Products.getProduct(id);
			// product.data innehåller array av products
			this.product = res.data;
        },
        // goToOrders(){
        //     this.$router.push('/orders');
        // }
	},
	computed: {
        ...mapState(["products"]),
		...mapState(["user"])
	},
	created() {
        this.$store.dispatch("loadProducts");
	}
};
</script>

<style lang="scoped"></style>
