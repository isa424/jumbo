import mutations from "./mutations";
import { SET_CITIES, SET_CITY, SET_SHOW, SET_STORES } from "./mutation-types";

const setCity = mutations[SET_CITY];
const setShow = mutations[SET_SHOW];
const setStores = mutations[SET_STORES];
const setCities = mutations[SET_CITIES];

describe("mutations", () => {
	test(SET_SHOW, () => {
		const state = { show: "" };

		setShow(state, "stores");

		expect(state.show).toBe("stores");
	});

	test(SET_CITY, () => {
		const state = { city: "" };

		setCity(state, "Amsterdam");

		expect(state.city).toBe("Amsterdam");
	});

	test(SET_STORES, () => {
		const state = { stores: [] };
		const newStores = [
			{ uuid: "12345", addressName: "Some address", city: "Amsterdam" }
		];

		setStores(state, newStores);

		expect(state.stores).toEqual(newStores);
	});

	test(SET_CITIES, () => {
		const state = { cities: [] };
		const newCities = ["Amsterdam", "Eindhoven"];

		setCities(state, newCities);

		expect(state.cities).toEqual(newCities);
	});
});
