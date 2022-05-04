const getters = {
	// Get stores filtered by a city
	getStores: (state) => {
		// Return all cities if state.city is null
		if (!state.city) {
			return state.stores;
		}

		// Filter by city if provided
		return state.stores.filter((s) => {
			const search = state.city.toLowerCase();
			const city = s.city.toLowerCase();
			const address = s.addressName.toLowerCase();

			return city.includes(search) || address.includes(search);
		});
	},
	getCities: (state) => {
		// Return all cities if state.city is null
		if (!state.city) {
			return state.cities;
		}

		// Filter by city if provided
		return state.cities.filter((c) => {
			return c.toLowerCase().includes(state.city.toLowerCase());
		});
	},
	// Get a store by uuid
	getStoreById: (state) => (id) => state.stores.find((s) => s.uuid === id)
};

export default getters;
