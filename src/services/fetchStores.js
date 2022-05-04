import request from "../api/api";

const fetchStores = async () => {
	try {
		const res = await request({url: '/stores', method: 'get'})

		const cities = res.data
			.map((d) => d.city)
			.filter((c, i, cities) => {
				return c && cities.indexOf(c) === i;
			});

		// Get store addresses
		const stores = res.data.map((d) => ({
			uuid: d.uuid,
			addressName: d.addressName.replace('Jumbo ', ''),
			city: d.city,
			hours: `${d.todayOpen} - ${d.todayClose}`
		}));

		return {cities, stores};
	} catch (err) {
		console.error(err);
	}
};

export default fetchStores;
