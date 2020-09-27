<template>
  <div>
      <h1>32 bits</h1>
      <h2>Juegos de PC y consolas!</h2>
      <hr>
      <div class="enlaces">
        <router-link :to="{name: 'Busqueda'}" class="enlace">Búsqueda</router-link>
        <router-link :to="{name: 'Ventas'}" class="enlace">Ventas</router-link>
        <router-link :to="{name: 'Stock'}" class="enlace">Stock</router-link>
        <router-link :to="{name: 'Total'}" class="enlace">Total</router-link>
        
      </div>
      <p>(Haz click sobre la página que deseas visitar)</p>
  </div>
</template>

<script>
export default {
name: 'Inicio'
}
</script>

<style lang="scss">
.enlaces{
  display: flex;
  flex-wrap: wrap;

  .enlace{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 200px;
    border: 1px solid #666;
    transition: all .4s ease;
      font-size: 50px;
      text-decoration: none;
      // color: #2c3e50;
    &:hover{
      background-color: #ccc;
      // color: #42b983;
    }
  }
}
</style>