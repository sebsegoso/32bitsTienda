<template>
  <div>
    <div class="busqueda">
      <label for="producto">Busqueda por código o nombre :</label>
      <input name="producto" type="text" v-model="producto" autofocus />
    </div>
    <hr />
    <p>Cantidad total de juegos: {{ juegosTotales }}</p>
    <hr />
    <div v-if="inputVacio">
      <b-table
        striped
        hover
        :items="busquedaProducto"
        :fields="fieldsTablas"
      ></b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Busqueda",
  data() {
    return {
      producto: "",
    };
  },
  computed: {
    ...mapState(["productos", "fieldsTablas"]),
    ...mapGetters(["juegosTotales", "resultadoBusquedaProducto"]),
    busquedaProducto() {
      return this.resultadoBusquedaProducto(this.producto);
    },
    inputVacio() {
      return (
        this.resultadoBusquedaProducto.length > 0 && this.producto.trim() !== ""
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.busqueda {
  padding: 40px 0;
}
</style>