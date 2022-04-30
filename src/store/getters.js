const getters = {
  // Get stores filtered by a city
  getStores: (state) => {
    // Return all cities if state.city is null
    if (!state.city) {
      return state.stores;
    }

    // Filter by city if provided
    return state.stores.filter((s) => s.city === state.city);
  },
  // Get a store by uuid
  getStoreById: (state) => (id) => state.stores.find((s) => s.uuid === id)
};

export default getters;
