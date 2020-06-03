<template>
    <div>
        <h2>Register an account</h2>
        <input type="text" placeholder="name" v-model="name">
        <input type="text" placeholder="email" v-model="email">
        <input type="text" placeholder="password" v-model="password">
        <input type="text" placeholder="street" v-model="street">
        <input type="text" placeholder="zip code" v-model="zip">
        <input type="text" placeholder="city" v-model="city">
        <router-link to="MyAccount">
            <button v-on:click = "registerAccount">Register account</button>
        </router-link>
    </div>
</template>

<script>
export default {
    data: function(){return{
        name: "",
        email: "",
        password: "",
        street: "",
        zip: "",
        city: ""
    }},
    methods: {
        registerAccount() {
            let acc = {name: this.name, email: this.email, password: this.password, street: this.street, zip: this.zip, city: this.city }
            this.$store.dispatch("registerAccount", acc)
        }
    }
}
</script>

<style scoped>

</style>