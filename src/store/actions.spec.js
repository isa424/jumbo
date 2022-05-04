import {SET_CITIES, SET_STORES} from "./mutation-types";
import actions from './actions';

jest.mock('../services/fetchStores');

describe("actions", () => {
	let count;

	beforeEach(() => {
		count = 0;
	});

	it("fetchData", (done) => {
		// mock commit
		const commit = (type, payload) => {
			count++;
			expect([SET_CITIES, SET_STORES]).toContain(type);

			if (type === SET_CITIES) {
				expect(payload).toStrictEqual(['Amsterdam']);
			}

			if (type === SET_STORES) {
				expect(payload).toStrictEqual([
					{city: "Amsterdam", addressName: "Some address", uuid: "1", hours: "08:00 - 22:00"},
				]);
			}

			// Commit is called twice
			if (count === 2) {
				done();
			}
		};

		actions.fetchData({commit});
	});
});
