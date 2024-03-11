const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const dataExhibitions = [];

console.log("ini harusnya pertama");
rl.question("Masukkan nama pameran: ", (name) => {
	rl.question("Masukkan nama venue: ", (venue) => {
		const exhibition = {};
		exhibition.name = name;
		exhibition.venue = venue;

		dataExhibitions.push(exhibition);

		console.log(dataExhibitions);
		rl.close();
	});
});
