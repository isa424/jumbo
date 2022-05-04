<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "App",
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions({fetchData: "fetchData"}),
  },
};
</script>

<style>
#app {
  font-family: Mindset, "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: #000;
}

a:hover {
  text-decoration: underline;
}
</style>
