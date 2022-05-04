<template>
  <ul v-if="show === 'cities'">
    <li v-show="filteredCities.length === 0">
      <JumboEmpty />
    </li>
    <li
      v-for="c in filteredCities"
      :key="c"
    >
      <router-link
        :data-testid="'id_' + c"
        :to="{path: '/', query: {city: c, show: 'stores', page: 1}}"
      >
        <div class="card city">
          <div class="text">
            <div class="title">
              {{ c }}
            </div>
          </div>
          <div class="action">
            <div class="chevron">
              <IconChevron />
            </div>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import IconChevron from "./icons/IconChevron";
import isArray from "../utils/isArray";
import JumboEmpty from "./JumboEmpty";

export default {
  name: "CitiesList",
  components: {
    JumboEmpty,
    IconChevron,
  },
  props: {
    show: {
      type: String,
      required: true,
    },
    filteredCities: {
      validator: isArray,
      required: true,
    },
  },
}
</script>

<style scoped>
</style>
