<template>
  <div>
    <button @click.prevent="setShow('stores')">Show stores</button>
    <button @click.prevent="setShow('cities')">Show cities</button>
    <ul v-if="show === 'stores'">
      <li v-for="store in stores" :key="store.uuid">{{ store.addressName }}</li>
    </ul>
    <ul v-if="show === 'cities'">
      <li v-for="city in cities" :key="city">{{ city }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["stores", "cities", "show", "city", "setShow", "setCity"],
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
