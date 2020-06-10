<template>
    <div class = "body">
        <img src="@/assets/sinus-logo.svg" alt="logo">

        <h2>Login</h2>
        <input type="text" placeholder="email" v-model="email">
        <input type="text" placeholder="password" v-model="password">
        <button v-on:click = "login">Login</button>
        <router-link to="Registration" class = "routerLink">
            <p>Don't have an account? Register one!</p>
        </router-link>
    </div>
</template>

<script>
export default {
    data: function() {return{
        email: "",
        password: ""
    }},
    methods: {
        async login() {
            let currentToken = this.$store.state.token
            await this.$store.dispatch("login", {email: this.email, password: this.password})
            if (currentToken != this.$store.state.token) {
                this.$router.push('MyAccount')
            }
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
    img {
        width: 10rem;
    }
    h2 {
        padding-bottom: 2rem;
    }
    input {
        padding: 0.5rem;
        margin: 0.5rem;
    }
    .routerLink {
        margin-top: 3rem;
    }
</style>