import AddPameran from "../components/AddPameran";
import Table from "../components/Table";
import Title from "../components/Title";
import { pameran } from "../lib/data";

export default function Pameran() {
	return (
		<>
			<Title>Daftar Pameran</Title>
			<AddPameran />
			<Table pameran={pameran} />
		</>
	);
}
