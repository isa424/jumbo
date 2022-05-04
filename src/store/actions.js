import fetchStores from "../services/fetchStores";
import {SET_CITIES, SET_STORES} from "./mutation-types";

const actions = {
	fetchData: ({commit}) => {
		fetchStores()
			.then(data => {
				commit(SET_CITIES, data.cities);
				commit(SET_STORES, data.stores);
			});
	},
};

export default actions;
