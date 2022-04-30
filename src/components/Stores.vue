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

export default {
  data() {
    return {
      show: "",
      cities: [],
      stores: [],
    };
  },
  mounted() {
    const url =
      "https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e";

    axios
      .get(url)
      .then((response) => {
        // Get unique city names
        this.cities = response.data
          .map((d) => d.city)
          .filter((c, i, cities) => cities.indexOf(c) === i);

        // Get store addresses
        this.stores = response.data.map((d) => ({
          uuid: d.uuid,
          addressName: d.addressName,
        }));
      })
      .catch((err) => console.error(err));
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
