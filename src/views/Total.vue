<template>
  <div>
    <h1>Total ventas</h1>
    <hr>
    <h2 v-if="totalVentas.length == 0">No hay ventas registradas</h2>
    <b-table v-else striped hover :items="totalVentas" :fields="fieldsTablas"></b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Total",
  computed: {
    ...mapState(["totalVentas" , "fieldsTablas"]),
  },
};
</script>

<style>
</style>
