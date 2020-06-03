<template>
    <div>
        <h2>{{currentUser.name}}</h2>
        <h3>{{currentUser.email}}</h3>
    </div>
</template>

<script>
export default {
    data: function(){return{
        currentUser: this.$store.state.currentUser
    }}
}
</script>

<style scoped>

</style>