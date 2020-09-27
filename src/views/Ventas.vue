<template>
  <div>
    <h1>Ventas</h1>
    <hr />
    <div>
      <!-- PESTAÑAS  -->
      <b-tabs>
        <!-- PRIMERA PESTAÑA  -->
        <b-tab title="Agregar Ventas" class="agregarVentas" active>
          <h2>Agregar venta</h2>
          <div class="inputs">
            <label for>Nombre</label>
            <input v-model="nombre" placeholder="Nombre" list="titulos" />
            <hr />
            <label for>Código</label>
            <input
              v-model="autocompletado.codigo"
              disabled
              placeholder="Código"
            />
            <hr />
            <label for>Stock</label>
            <input v-model="stock" disabled placeholder="Stock" />
            <hr />
            <label for>Precio</label>
            <input
              v-model="autocompletado.precio"
              disabled
              placeholder="Precio"
            />
            <hr />

            <b-button
              type="submit"
              variant="primary"
              @click="descontar"
              :disabled="productoSinStock"
              >Comprar</b-button
            >
          </div>
        </b-tab>
        <!-- SEGUNDA PESTAÑA  -->
        <b-tab title="Stock Disponible">
          <div>
            <h2>Productos con Stock Disponible</h2>
            <b-table
              striped
              hover
              :items="productosConStock"
              :fields="fieldsTablas"
            >
            </b-table>
          </div>
        </b-tab>
      </b-tabs>
    </div>
    <!-- datalist para sugerir los nombres de los juegos en el input -->
    <datalist id="titulos">
      <option v-for="(nombre, i) in nombresProductosConStock" :key="i">
        {{ nombre }}
      </option>
    </datalist>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "ventas",
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    descontar() {
      this.$store.dispatch("descontar", this.nombre);
      {this.autocompletado.precio}this.$swal({
        position: "top-end",
        icon: "success",
        title: `Producto agregado: \n${this.nombre}\n(${this.autocompletado.codigo})`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.nombre = "";
    },
  },
  computed: {
    ...mapState(["productos", "fieldsTablas"]),
    ...mapGetters(["productosConStock", "nombresProductosConStock"]),
    productoSinStock() {
      return this.autocompletado.stock < 1;
    },
    autocompletado() {
      let juego = {
        codigo: "",
        stock: "",
        precio: "",
      };
      return (
        this.productos.find((juego) => juego.nombre == this.nombre) || juego
      );
    },
    stock() {
      return this.autocompletado.stock === 0
        ? "Producto sin stock disponible"
        : this.autocompletado.stock;
    },
  },
};
</script>

<style lang="scss" scoped>
.inputs {
  display: flex;
  flex-direction: column;
  width: 60%;
  position: relative;
  left: 50vw;
  transform: translateX(-50%);
}
</style>