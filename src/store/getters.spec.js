import getters from './getters';

const {getStoreById, getStores, getCities} = getters;

describe('getters', () => {
	test('getStores returns all stores', () => {
		const state = {
			city: '',
			stores: [
				{city: "Amsterdam", addressName: "Some address", uuid: "1"},
			],
		};

		const stores = getStores(state);

		expect(stores).toStrictEqual(state.stores);
	});

	test('getStores returns filtered stores', () => {
		const state = {
			city: 'ams',
			stores: [
				{city: "Amsterdam", addressName: "Some address", uuid: "1"},
			],
		};

		const stores = getStores(state);

		expect(stores).toStrictEqual(state.stores);
	});

	test('getStores returns empty array', () => {
		const state = {
			city: 'Eindhoven',
			stores: [
				{city: "Amsterdam", addressName: "Some address", uuid: "1"},
			],
		};

		const stores = getStores(state);

		expect(stores).toStrictEqual([]);
	});

	test('getCities returns all cities', () => {
		const state = {
			city: '',
			cities: ['Amsterdam'],
		};

		const cities = getCities(state);

		expect(cities).toStrictEqual(state.cities);
	});

	test('getStores returns filtered cities', () => {
		const state = {
			city: 'ams',
			cities: ['Amsterdam'],
		};

		const cities = getCities(state);

		expect(cities).toStrictEqual(state.cities);
	});

	test('getStores returns empty array', () => {
		const state = {
			city: 'Eindhoven',
			cities: ['Amsterdam'],
		};

		const cities = getCities(state);

		expect(cities).toStrictEqual([]);
	});

	test('getStoreById returns a single store', () => {
		const state = {
			stores: [
				{city: "Amsterdam", addressName: "Some address", uuid: "1"},
			],
		};

		const store = getStoreById(state)('1');

		expect(store).toStrictEqual(state.stores[0]);
	});

	test('getStoreById returns null', () => {
		const state = {
			stores: [],
		};

		const store = getStoreById(state)('1');

		expect(store).toStrictEqual(undefined);
	});
});
