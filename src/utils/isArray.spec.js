import isArray from "./isArray";

describe('utils', () => {
	test('should return true for array', () => {
		const res = isArray([]);

		expect(res).toBeTruthy();
	});

	test('should return false otherwise', () => {
		expect(isArray(undefined)).toBeFalsy();
		expect(isArray("asdf")).toBeFalsy();
		expect(isArray(5)).toBeFalsy();
	});
});
