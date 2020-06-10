<template>
	<div>
		<!-- Prints all product.title from mapState / store products -->
		<div v-for="prod in products" v-bind:key="prod._id">
			<p>{{ prod.title }}</p>
		</div>

		<!-- Get and display product from data -> id -->
		<br />
		<button @click="getProduct(id)">Gets product</button>
        <img v-if="show" :src="require('@/assets/' + product.imgFile)">
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
        <div>
			<button @click="orderValue">Order Value</button>
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

export default {
	data() {
		return {
            show: false,
			id: "A8kHboBk4fSQFPoZ",
			registration: {
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
        orderValue() {
          let whaaa = this.$store.getters.orderValue;
          console.log(whaaa);
        },
		alterEmail() {
			this.registration.email += "K";
			console.log(this.registration.email);
		},
		login() {
			this.$store.dispatch("login", {
				email: this.registration.email,
				password: this.registration.password
			});
			// ALTERNATIVELY: .dispatch("login", object)   object == 'loginData' , see above
		},
		register() {
			this.$store.dispatch("register", this.registration);
		},
		getProduct(id) {
            this.$store.dispatch("getProduct", id);
            this.show = true;
		}
	},
	computed: {
		...mapState(["products"]),
		...mapState(["user"]),
		...mapState(["product"])
	},
	created() {
		this.$store.dispatch("loadProducts");
	}
};
</script>

<style lang="scoped"></style>
