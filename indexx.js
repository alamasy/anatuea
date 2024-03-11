const { getExhibitions } = require("./contact");

function mainn() {
	const data = getExhibitions();

	return data;
}

console.log(mainn());
