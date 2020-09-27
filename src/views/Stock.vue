<template>
  <div>
    <h1>Stock</h1>
    <p>Juegos totales: {{juegosTotales}}</p>
    <b-table striped hover :items="productos" :fields="fieldsTablas"></b-table>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Stock",
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(["productos" , 'fieldsTablas']),
    ...mapGetters(["juegosTotales"]),
  },
};
</script>

<style>
</style>