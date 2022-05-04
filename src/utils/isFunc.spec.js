import isFunc from "./isFunc";

describe('utils', () => {
	test('should return true for array', () => {
		const fn = () => console.log("is function");
		const res = isFunc(fn);

		expect(res).toBeTruthy();
	});

	test('should return false otherwise', () => {
		expect(isFunc(undefined)).toBeFalsy();
		expect(isFunc("asdf")).toBeFalsy();
		expect(isFunc(5)).toBeFalsy();
	});
});
