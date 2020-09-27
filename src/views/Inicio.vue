<template>
  <section>
    <h1>32 bits</h1>
    <h2>Juegos de PC y consolas!</h2>
    <hr />
    <div class="enlaces">
      <router-link :to="{ name: 'Busqueda' }" class="enlace"
        >Búsqueda</router-link
      >
      <router-link :to="{ name: 'Ventas' }" class="enlace">Ventas</router-link>
      <router-link :to="{ name: 'Stock' }" class="enlace">Stock</router-link>
      <router-link :to="{ name: 'Total' }" class="enlace">Total</router-link>
    </div>
    <p>(Haz click sobre la vista que deseas visitar)</p>
  </section>
</template>

<script>
export default {
  name: "Inicio",
};
</script>

<style lang="scss">
.enlaces {
  display: flex;
  flex-wrap: wrap;

  .enlace {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 200px;
    border: 1px solid #666;
    transition: all 0.4s ease;
    font-size: 50px;
    text-decoration: none;
    background-color: #0d3b66;
    color: #faf0ca;
    &:hover{
      color: #0d3b66 ;
    }
    &:hover:nth-child(1) {
      background-color: #faf0ca;
      // color: #42b983;
    }&:hover:nth-child(2) {
      background-color: #f4d35e;
      // color: #42b983;
    }&:hover:nth-child(3) {
      background-color: #ee964b;
      // color: #42b983;
    }&:hover:nth-child(4) {
      background-color: #f95738;
      // color: #42b983;
    }
  }
}
</style>