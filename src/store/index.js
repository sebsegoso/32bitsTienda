import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 87,
        precio: 30000,
        color: "red",
        destacado: true
      },
      {
        codigo: "0002",
        nombre: "FIFA 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 25,
        precio: 15000,
        color: "green",
        destacado: true
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 94,
        precio: 35000,
        color: "yellow",
        destacado: false
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 0,
        precio: 10000,
        color: "blue",
        destacado: false
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 82,
        precio: 20000,
        color: "red",
        destacado: true
      }
    ],
    fieldsTablas: [{
      key: 'codigo',
      sortable: true
    }, {
      key: 'nombre',
      sortable: true
    }, {
      key: 'stock',
      sortable: true
    },
    {
      key: 'precio',
      sortable: true
    }],
    totalVentas: []
  },
  getters: {
    juegosTotales: (state) => {
      let total = 0
      state.productos.forEach(e => total += e.stock)
      return total
    },
    productosConStock: (state) => {
      return state.productos.filter((juego) => juego.stock > 0)
    },
    nombresProductosConStock: (state) => {
      let titulos = []
      state.productos.forEach(juego => titulos.push(juego.nombre))
      return titulos
    },
    resultadoBusquedaProducto: (state) => (producto) => {
      return state.productos.filter(
        (p) => p.codigo.includes(producto) || p.nombre.toUpperCase().includes(producto.toUpperCase())
      );
    },
  },
  mutations: {
    JUEGO_VENDIDO(state, payload) {
      state.productos = payload
    },
    AGREGAR_VENTA(state, payload) {
      state.totalVentas = payload
    }
  },
  actions: {
    descontar({ commit, state }, payload) {
      let registro;
      let juegosActualizados = state.productos.map(e => {
        if (e.nombre.toUpperCase() == payload.toUpperCase()) {
          e.stock--
          state.totalVentas.push(e)
          registro = e
        }
        return e
      })
      commit('JUEGO_VENDIDO', juegosActualizados)
      // dispatch('agregarVenta' , registro )
    },
    // agregarVenta({ commit, state }, payload) {
    //   let ventas = state.totalVentas
    //   ventas.push(payload)
    //   commit('AGREGAR_VENTA' , ventas)
    // }
  },
  modules: {
  }
})
