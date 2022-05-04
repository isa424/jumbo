const capitalize = (value) => {
	if (!value) {
		return value;
	}

	return value[0].toUpperCase() + value.slice(1);
};

export default capitalize;
