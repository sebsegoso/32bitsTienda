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
  color: #1e1b18;
  background-color: #faf0ca;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #0a2463;

    &.router-link-exact-active {
      font-weight: 900;
      color: #3e92cc;
    }
  }
}

</style>
