<template>
  <div>
    <h1>Total ventas</h1>
    <hr>
    <h2 v-if="noHayVentas">No hay ventas registradas, aun...</h2>
    <div v-else>
      <p>Juegos vendidos {{totalVentas.length}} | Dinero recaudado: $ {{dineroRecaudado}} </p>
      <b-table striped hover :items="totalVentas" :fields="fieldsTablas"></b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Total",
  computed: {
    ...mapState(["totalVentas" , "fieldsTablas"]),
    ...mapGetters(['dineroRecaudado'])
    ,
    noHayVentas(){
      return this.totalVentas.length == 0
    }
  },
};
</script>

<style>
</style>
