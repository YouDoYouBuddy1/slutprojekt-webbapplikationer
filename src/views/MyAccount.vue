<template>
    <div>
        <img src="@/assets/icon-user-black.svg" alt="">
        <h2>{{currentUser.name}}</h2>
        <p>{{currentUser.email}}</p>

        <h3>Order history</h3>
        <div class = "orderHistoryContainer"
        v-for="(o, index) in currentUser.orderHistory"
        v-bind:key="index">
            <p>id: {{o._id}}</p>
            <p v-text="'ordered on: ' + o.timeStamp"></p>
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
    h2 {
        margin: 0.5rem;
    }
    img {
        max-width: 10vw;
        margin: 2rem;
    }
    p {
        margin: 0.5rem;
    }
</style>