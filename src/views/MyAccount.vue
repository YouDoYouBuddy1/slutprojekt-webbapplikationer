<template>
    <div class = "body">
        <router-link to="ProductList" class = "routerLink">
            <button>To product page</button>
        </router-link>

        <img src="@/assets/icon-user-black.svg" alt="">
        <h2>{{currentUser.name}}</h2>
        <p>{{currentUser.email}}</p>

        <h3>Order history</h3>
        <div class = "orderHistoryContainer"
        v-for="(o, index) in currentUser.orderHistory"
        v-bind:key="index">
            <p>id: {{o._id}}</p>
            <p v-text="'ordered ' + Math.floor((Date.now() - o.timeStamp) / 3600000) + ' hours ago'"></p>
            <p>status: {{o.status}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){return{
        currentUser: this.$store.state.user
    }},
    methods: {
    }
}
</script>

<style scoped>
    .body {
        margin: 0 auto;
    }
    h2 {
        margin: 0.5rem;
    }
    img {
        max-width: 8vw;
        margin: 2rem;
    }
    p {
        margin: 0.5rem;
    }
    .routerLink {
        position: absolute;
        top: 3rem;
        left: 3rem;
    }
    button {
        padding: 1rem;
        color: black;
        background: white;
        border-color: black;
        border-style: solid;
        border-radius: 4%;
    }
</style>