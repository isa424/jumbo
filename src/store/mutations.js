import {SET_CITIES, SET_SHOW, SET_STORES, SET_CITY, CLEAR_FILTER} from "./mutation-types";

const mutations = {
  [SET_CITIES]: (state, cities) => (state.cities = cities),
  [SET_STORES]: (state, stores) => (state.stores = stores),
  [SET_SHOW]: (state, show) => (state.show = show),
  [SET_CITY]: (state, city) => (state.city = city),
  [CLEAR_FILTER]: (state) => state.city = "",
};

export default mutations;
