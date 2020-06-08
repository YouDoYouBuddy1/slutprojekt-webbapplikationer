<template>
  
  <div id="app">
    <h1>App</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to=/FramePage>Products</router-link> |
      <router-link to="/Test">Test</router-link> |
      <router-link to="/ProductsTable">ProductsTable</router-link> 
    </div>
    
        <router-view />    
  </div>
  

</template>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
