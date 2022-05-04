<template>
  <div
    v-show="totalPages > 0"
    class="pagination"
  >
    <div class="navigation_button">
      <router-link
        :to="`/?page=${1}&show=${show}&city=${city}`"
      >
        <button
          id="prev"
          class="btn"
          :disabled="page === 1"
        >
          First
        </button>
      </router-link>
    </div>

    <div
      v-show="page > 2"
      class="navigation_button"
    >
      <router-link
        :to="`/?page=${page - 2}&show=${show}&city=${city}`"
      >
        <button
          class="btn"
        >
          {{ page - 2 }}
        </button>
      </router-link>
    </div>

    <div
      v-show="page > 1"
      class="navigation_button"
    >
      <router-link
        :to="`/?page=${page - 1}&show=${show}&city=${city}`"
      >
        <button
          class="btn"
        >
          {{ page - 1 }}
        </button>
      </router-link>
    </div>

    <div class="navigation_button">
      <router-link
        :to="`/?page=${page}&show=${show}&city=${city}`"
      >
        <button
          id="current"
          class="btn"
        >
          {{ page }}
        </button>
      </router-link>
    </div>

    <div
      v-show="page < totalPages"
      class="navigation_button"
    >
      <router-link
        :to="`/?page=${page + 1}&show=${show}&city=${city}`"
      >
        <button
          class="btn"
        >
          {{ page + 1 }}
        </button>
      </router-link>
    </div>

    <div
      v-show="page + 1 < totalPages"
      class="navigation_button"
    >
      <router-link
        :to="`/?page=${page + 2}&show=${show}&city=${city}`"
      >
        <button
          class="btn"
        >
          {{ page + 2 }}
        </button>
      </router-link>
    </div>

    <div class="navigation_button">
      <router-link
        :to="`/?page=${totalPages}&show=${show}&city=${city}`"
      >
        <button
          id="next"
          class="btn"
          :disabled="page === totalPages"
        >
          Last
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumboPagination",
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    show: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    navigate: {
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;

  .btn {
    font-family: Mindset, serif;
  }

  .btn:not(#prev):not(#next) {
    padding: 0;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;

    &#current {
      background: #fdc513;
      color: white;
      border-color: #fdc513;
    }
  }
}
</style>
