import data from "../components/data";

import Title from "../components/Title";

export default function GeneralCargo() {
	return (
		<main>
			<Title>General Cargo List</Title>
			{data.map((item, index) => (
				<div key={index}>
					Universitas: {item.universitas}
					Didirikan: {item.info.didirikan}
					Website: {item.info.website}
				</div>
			))}
		</main>
	);
}
