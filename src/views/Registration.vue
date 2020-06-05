<template>
    <div class = "body">
        <img src="@/assets/sinus-logo.svg" alt="logo">
        <div class = "innerBox">
            <h2>Register an account</h2>
            <div class = "nameAndEmailBox">
                <input type="text" placeholder="name" v-model="name">
                <input type="text" placeholder="email" v-model="email">
            </div>
            <div class = "passwordBox">
                <input type="text" placeholder="password" v-model="password">
                <input type="text" placeholder="password again" v-model="passwordRepeat">
            </div>
            <input type="text" placeholder="street" v-model="street">
            <input type="text" placeholder="zip code" v-model="zip">
            <input type="text" placeholder="city" v-model="city">
            <router-link to="MyAccount" class = "routerLink">
                <button v-on:click = "registerAccount">Register account</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){return{
        name: "",
        email: "",
        password: "",
        passwordRepeat: "",
        street: "",
        zip: "",
        city: ""
    }},
    methods: {
        registerAccount() {
            let newAccount = {name: this.name, email: this.email, password: this.password, street: this.street, zip: this.zip, city: this.city }
            this.$store.dispatch("registerAccount", newAccount)
        }
    }
}
</script>

<style scoped>
    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .innerBox {
        max-width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .innerTop {
        display: flex;
    }
    img {
        width: 10rem;
    }
    input {
        padding: 0.5rem;
        margin: 0.5rem;
    }

    h2 {
        padding-bottom: 2rem;
    }
    button {
        margin-top: 3rem;
        padding: 1.5rem;
        min-width: 20vw;
    }
    .routerLink {
        min-width: 100%;
    }
</style>