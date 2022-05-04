const payload = {
	cities: ["Amsterdam"],
	stores: [
		{city: "Amsterdam", addressName: "Some address", uuid: "1", hours: "08:00 - 22:00"},
	],
};

const fetchStores = () => {
	return new Promise((res) => {
		setTimeout(() => {
			res(payload);
		}, 0);
	});
}

export default fetchStores;
