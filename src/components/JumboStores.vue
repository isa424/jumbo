<template>
  <div :key="$route.query.city + $route.query.show">
    <JumboHeader />

    <div class="page">
      <div class="left-side">
        <div class="filters">
          <div>
            <span>Filter results</span>
          </div>

          <div>
            <!-- Fix query params -->
            <router-link
              :to="{path: '/', query: {show: show}}"
            >
              Clear filters
            </router-link>
          </div>
        </div>

        <div>
          <router-link
            data-testid="show_stores"
            :to="{path: '/', query: {show: 'stores', page: 1}}"
          >
            <button
              class="btn"
            >
              Show Stores
            </button>
          </router-link>
        </div>

        <div>
          <router-link
            data-testid="show_cities"
            :to="{path: '/', query: {show: 'cities', page: 1}}"
          >
            <button
              class="btn"
            >
              Show Cities
            </button>
          </router-link>
        </div>

        <div>
          <input
            data-testid="search"
            type="text"
            placeholder="Search for address or city..."
            :value="city"
            @change="search"
          >
        </div>

        <div class="stats">
          <div>
            <div class="count">
              {{ totalCount > 99 ? '99+' : totalCount }}
            </div>
          </div>
          <div>{{ show }} found as a search result</div>
        </div>
      </div>

      <div class="right-side">
        <!-- Stores -->
        <StoresList
          :show="show"
          :filtered-stores="filteredStores"
        />

        <!-- Cities -->
        <CitiesList
          :show="show"
          :filtered-cities="filteredCities"
        />

        <JumboPagination
          :page="page"
          :total-pages="totalPages"
          :navigate="navigate"
          :city="city"
          :show="show"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import {SET_CITY, SET_SHOW} from "../store/mutation-types";
import JumboPagination from "./JumboPagination";
import JumboHeader from "./JumboHeader";
import StoresList from "./StoresList";
import CitiesList from "./CitiesList";
import setDataFromQuery from "../services/setDataFromQuery";

export default {
  components: {
    CitiesList,
    StoresList,
    JumboHeader,
    JumboPagination,
  },
  data: () => {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapState({show: "show", city: "city",}),
    ...mapGetters({stores: "getStores", cities: "getCities"}),
    totalCount: function () {
      return this.show === 'stores' ? this.stores.length : this.cities.length;
    },
    totalStorePages: function () {
      const perPage = 20;

      return Math.ceil(this.stores.length / perPage);
    },
    totalCityPages: function () {
      const perPage = 20;

      return Math.ceil(this.cities.length / perPage);
    },
    totalPages: function () {
      return this.show === 'stores' ? this.totalStorePages : this.totalCityPages;
    },
    filteredCities: function () {
      return this.cities.slice((this.page - 1) * 20, this.page * 20);
    },
    filteredStores: function () {
      return this.stores.slice((this.page - 1) * 20, this.page * 20);
    },
  },
  updated: setDataFromQuery,
  mounted: setDataFromQuery,
  methods: {
    ...mapMutations({setShow: SET_SHOW, setCity: SET_CITY}),
    ...mapActions({fetchData: "fetchData"}),
    navigate: function(newPage) {
      const query = this.$route.query ? this.$route.query : {};

      query.page = newPage;

      const url = '/?' + Object.getOwnPropertyNames(query).map(k => `${k}=${query[k]}`).join('&');
      console.log(url);
      console.log(this.$route.fullPath);

      this.$router.push(url).catch((err) => {
        console.error(err);
      });
    },
    setPage: function (newPage) {
      this.page = newPage;
    },
    clearFilter: function () {
      this.$router.push("/");
    },
    search: function (e) {
      this.$router.push(`?show=${this.show}&city=${e.target.value}&page=1`);
    }
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
}

.left-side {
  display: flex;
  //flex-grow: 1;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
  gap: 10px;

  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-weight: 600;
    }
  }

  & > div {
    display: flex;
    width: 100%;
    //flex-grow: 1;
    //justify-content: end;

    button {
      font-family: Mindset, serif;
      width: 100%;
    }

    input {
      font-family: Mindset, serif;
      width: 100%;
      border-radius: 23px;
      padding: 10px 20px;
      color: #000;
      background: #fff;
      border: 2px solid #c8c8c8;
      transition: border-color .15s;
    }
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 10px;

    .count {
      font-weight: 400;
      line-height: 1.5;
      border-radius: 100%;
      background: #fdc513;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 42px;
      width: 42px;
    }
  }
}

.right-side {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 550px;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
}

</style>
