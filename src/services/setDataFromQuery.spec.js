import setDataFromQuery from "./setDataFromQuery";

describe('services', () => {
	test('sets correct stores data from query', () => {
		const component = {
			city: '',
			setCity(c) {
				this.city = c;
			},
			show: '',
			setShow(s) {
				this.show = s;
			},
			$route: {
				query: {
					city: 'Amsterdam',
					show: 'stores',
				},
			},
		};

		const fn = setDataFromQuery.bind(component);

		fn();

		expect(component.city).toBe('Amsterdam');
		expect(component.show).toBe('stores');
	});

	test('sets correct values by default for empty query', () => {
		const component = {
			city: '',
			setCity(c) {
				this.city = c;
			},
			show: '',
			setShow(s) {
				this.show = s;
			},
			$route: {
				query: {},
			},
		};

		const fn = setDataFromQuery.bind(component);

		fn();

		expect(component.city).toBe('');
		expect(component.show).toBe('stores');
	});
});
