<template>
  <div>
    <button @click.prevent="show = 'stores'">Show stores</button>
    <button @click.prevent="show = 'cities'">Show cities</button>
    <ul v-if="show === 'stores'">
      <li v-for="store in stores" :key="store.uuid">{{ store.addressName }}</li>
    </ul>
    <ul v-if="show === 'cities'">
      <li v-for="city in cities" :key="city">{{ city }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { SET_CITIES, SET_STORES } from "../store/mutation-types";
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      show: "",
      cities: [],
      stores: [],
    };
  },
  methods: {
    ...mapMutations({
      setCities: SET_CITIES,
      setStores: SET_STORES,
    }),
    ...mapActions({
      fetchData: "fetchData",
    }),
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

li {
  display: inline-block;
  background: #fdc513;
  margin: 5px;
}
</style>
