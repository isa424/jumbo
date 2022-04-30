import Vue from "vue";
import Vuex from "vuex";
import storeApi from "../api/api";
import { SET_CITIES, SET_STORES } from "./mutation-types";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cities: [],
    stores: []
  },
  getters: {
    // Get stores filtered by a city
    getStores: (state) => (city) => {
      if (!city) {
        return state.stores;
      }

      // Filter by city if provided
      return state.stores.filter((s) => s.city === city);
    },
    // Get a store by uuid
    getStoreById: (state) => (id) => state.stores.find((s) => s.uuid === id)
  },
  mutations: {
    [SET_CITIES]: (state, cities) => (state.cities = cities),
    [SET_STORES]: (state, stores) => (state.stores = stores)
  },
  actions: {
    fetchData: ({ commit }) => {
      storeApi
        .fetchData()
        .then((res) => {
          // Get unique city names
          const cities = res.data
            .map((d) => d.city)
            .filter((c, i, cities) => {
              return c && cities.indexOf(c) === i;
            });

          // Get store addresses
          const stores = res.data.map((d) => ({
            uuid: d.uuid,
            addressName: d.addressName
          }));

          // Set states
          commit(SET_CITIES, cities);
          commit(SET_STORES, stores);
        })
        .catch((err) => console.error(err));
    }
  }
});

export default store;
