<template>
  <div id="nav">
    <router-link to="/"><h1>32 bits</h1></router-link>

    <div class="links">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'Busqueda' }">Busqueda</router-link> |
      <router-link :to="{ name: 'Ventas' }">Ventas</router-link> |
      <router-link :to="{ name: 'Stock' }">Stock</router-link> |
      <router-link :to="{ name: 'Total' }">Total</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 5px;
  background-color: #0d3b66;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px #0d3b66;
  margin-bottom: 30px;
  color:#f95738;
  h1 {
    color: #f95738;
  }

  a {
    text-decoration: none;
    color: #f4d35e;
    transition: all 0.3s;
    &:hover {
      color: #ee964b;
    }
    &.router-link-exact-active {
      color: #f95738;
    }
  }
}
</style>