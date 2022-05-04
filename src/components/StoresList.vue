<template>
  <ul v-if="show === 'stores'">
    <li v-show="filteredStores.length === 0">
      <JumboEmpty />
    </li>
    <li
      v-for="store in filteredStores"
      :key="store.uuid"
    >
      <div class="card store">
        <div class="text">
          <div class="title">
            {{ store.addressName }}
          </div>
          <div class="subtitle">
            <div>
              <IconLocation />
            </div>
            <span class="location">{{ store.city ? store.city : "-" }}</span>
            <div>
              <IconClock />
            </div>
            <span class="hours">{{ store.hours }}</span>
          </div>
        </div>
        <div class="action">
          <div class="chevron">
            <IconChevron />
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import isArray from "../utils/isArray";
import IconChevron from "./icons/IconChevron";
import IconClock from "./icons/IconClock";
import IconLocation from "./icons/IconLocation";
import JumboEmpty from "./JumboEmpty";

export default {
  name: "StoresList",
  components: {
    JumboEmpty,
    IconLocation, IconClock, IconChevron
  },
  props: {
    show: {
      type: String,
      required: true,
    },
    filteredStores: {
      validator: isArray,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
</style>
