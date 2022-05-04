<template>
  <div>
    Cities
  </div>
</template>

<script>
import isArray from "../utils/isArray";
import isFunc from "../utils/isFunc";

export default {
  props: {
    stores: {
      validator: isArray,
      required: true,
    },
    cities: {
      validator: isArray,
      required: true,
    },
    show: {
      default: "",
      type: String,
      required: false,
    },
    city: {
      default: "",
      type: String,
      required: false,
    },
    setShow: {
      validator: isFunc,
      required: true,
    },
    setCity: {
      validator: isFunc,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
