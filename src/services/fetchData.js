import { SET_CITIES, SET_STORES } from "../store/mutation-types";
import request from "../api/api";

const fetchData = ({ commit }) => {
  request({ url: "/stores", method: "get" })
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
        addressName: d.addressName,
        city: d.city
      }));

      // Set states
      commit(SET_CITIES, cities);
      commit(SET_STORES, stores);
    })
    .catch((err) => console.error(err));
};

export default fetchData;
