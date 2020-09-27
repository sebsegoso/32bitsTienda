<template>
  <div>
    <b-table striped hover :items="productos" :fields="fieldsTablas"></b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Stock",
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(["productos" , 'fieldsTablas']),
  },
};
</script>

<style>
</style>