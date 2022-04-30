<template>
  <div id="app">
    <Stores
      v-bind:cities="cities"
      v-bind:stores="stores"
      v-bind:show="show"
      v-bind:city="city"
      v-bind:setShow="setShow"
      v-bind:setCity="setCity"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { SET_CITY, SET_SHOW } from "./store/mutation-types";
import Stores from "./components/Stores";

export default {
  name: "App",
  components: {
    Stores,
  },
  computed: {
    ...mapState(["cities", "show", "city"]),
    ...mapGetters({ stores: "getStores" }),
  },
  methods: {
    ...mapMutations({ setShow: SET_SHOW, setCity: SET_CITY }),
    ...mapActions({ fetchData: "fetchData" }),
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
