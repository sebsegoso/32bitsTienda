<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'Busqueda' }">Busqueda</router-link> |
      <router-link :to="{ name: 'Ventas' }">Ventas</router-link> |
      <router-link :to="{ name: 'Stock' }">Stock</router-link> |
      <router-link :to="{ name: 'Total' }">Total</router-link>
    </div>
    <hr />
    <transition name="transicion">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      font-weight: 900;
      color: #42b983;
    }
  }
}

</style>
