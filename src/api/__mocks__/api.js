const request = () => {
	return new Promise(res => {
		const response = {
			data: [
				{
					city: "Amsterdam",
					addressName: "Some address",
					uuid: "1",
					todayOpen: "08:00",
					todayClose: "22:00"
				}
			],
		};

		setTimeout(() => res(response), 0);
	});
};

export default request;
