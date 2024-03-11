const fs = require("node:fs");

export function capitalize(str) {
	return str.toUpperCase();
}

export const getExhibitions = async () => {
	fs.readFile("../db/exhibitions.json", "utf8", (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		return JSON.parse(data);
	});
};
