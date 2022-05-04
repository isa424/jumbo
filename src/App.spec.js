/**
 * @jest-environment jsdom
 */
import {fireEvent, render, waitFor} from '@testing-library/vue';
import '@testing-library/jest-dom';
import App from "./App.vue";
import store from './store/store';
import router from './router';

// Mock the service to avoid a real network request
jest.mock('./services/fetchStores');

/**
 * Mock function returns the data below, thus we should look for the following city, address name and hours
{
	cities: ["Amsterdam"],
	stores: [
		{city: "Amsterdam", addressName: "Some address", uuid: "1", hours: "08:00 - 22:00"},
	],
}
 */
describe('App.vue', () => {
	test('should render', async () => {
		const options = {
			store,
			routes: router
		};

		const screen = render(App, options);

		// Await fetching data from mock API and display all the stores
		await waitFor(() => {
			expect(screen.getByText(/Amsterdam/gi)).toBeInTheDocument()
			expect(screen.getByText(/Some address/gi)).toBeInTheDocument();
			expect(screen.getByText("08:00 - 22:00")).toBeInTheDocument();
		});

		// Click on "Show Cities" button to show cities list
		const button = screen.getByTestId('show_cities');

		await fireEvent.click(button);

		await waitFor(() => {
			expect(router.currentRoute.path).toBe('/');
			expect(router.currentRoute.query).toStrictEqual({show: 'cities', page: '1'});

			expect(screen.getByText(/Amsterdam/gi)).toBeInTheDocument()
			// Using queryByText instead of getByText which will throw error as it should return null
			expect(screen.queryByText(/Some address/gi)).not.toBeInTheDocument();
			expect(screen.queryByText("08:00 - 22:00")).not.toBeInTheDocument();
		});

		// Click on a city to show a filtered list of stores in that city
		const link = screen.getByTestId('id_Amsterdam');

		await fireEvent.click(link);

		await waitFor(() => {
			expect(router.currentRoute.path).toBe('/');
			expect(router.currentRoute.query).toStrictEqual({show: 'stores', city: 'Amsterdam', page: '1'});

			expect(screen.getByText(/Amsterdam/gi)).toBeInTheDocument()
			expect(screen.getByText(/Some address/gi)).toBeInTheDocument();
			expect(screen.getByText("08:00 - 22:00")).toBeInTheDocument();
		});

		// Search for a non-existing city to see an empty page
		const input = screen.getByTestId('search');

		await fireEvent.change(input, {target: {value: "Eindhoven"}});

		await waitFor(() => {
			expect(router.currentRoute.path).toBe('/');
			expect(router.currentRoute.query).toStrictEqual({show: 'stores', city: 'Eindhoven', page: '1'});

			expect(screen.queryByText(/Amsterdam/gi)).not.toBeInTheDocument()
			expect(screen.queryByText(/Some address/gi)).not.toBeInTheDocument();
			expect(screen.queryByText("08:00 - 22:00")).not.toBeInTheDocument();
			expect(screen.getByTestId(/empty/gi)).toBeInTheDocument();
		});
	});
});
