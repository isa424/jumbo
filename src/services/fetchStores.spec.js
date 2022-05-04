import fetchStores from "./fetchStores";

jest.mock('../api/api');

describe('services', () => {
	test('should fetch an array of cities and stores', async () => {
		const {cities, stores} = await fetchStores();

		expect(cities).toStrictEqual(['Amsterdam']);
		expect(stores).toStrictEqual([{city: 'Amsterdam', addressName: 'Some address', uuid: '1', hours: '08:00 - 22:00'}])
	});
});
