const setDataFromQuery = function() {
	// When a user clicks on a city on cities page, they will be redirected to stores page with the city filtered
	if (!this.$route.query) {
		return;
	}

	const {city, show, page} = this.$route.query;

	this.setCity(city ? city : '');

	this.setShow(show ? show : 'stores');

	if (page) {
		this.setPage(parseInt(page));
	}
};

export default setDataFromQuery;
