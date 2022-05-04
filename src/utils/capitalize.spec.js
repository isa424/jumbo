import capitalize from "./capitalize";

describe('utils', () => {
	test('should capitalize a string', () => {
		const res = capitalize("string");

		expect(res).toBe("String");
	});

	test('should return the same invalid value', () => {
		const res = capitalize(null);

		expect(res).toBeNull();
	});
});
