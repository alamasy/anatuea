import { capitalize } from "../lib/utils";
import Button from "./Button";
import "./table.css";

// const dataPameran = [
//     {
//         id: "1",
//         namaJob: "ini nama job",
//         namaPameran: "ini nama pameran",
//         exhibitor: "ini nama exhibitor",
//         isDone: false,
//     },
//     {
//         id: "2",
//         namaJob: "ini nama job",
//         namaPameran: "ini nama pameran",
//         exhibitor: "ini nama exhibitor",
//         isDone: false,
//     },
//     {
//         id: "3",
//         namaJob: "ini nama job",
//         namaPameran: "ini nama pameran",
//         exhibitor: "ini nama exhibitor",
//         isDone: false,
//     },
//     {
//         id: "4",
//         namaJob: "ini nama job",
//         namaPameran: "ini nama pameran",
//         exhibitor: "ini nama exhibitor",
//         isDone: false,
//     },
//     {
//         id: "5",
//         namaJob: "ini nama job",
//         namaPameran: "ini nama pameran",
//         exhibitor: "ini nama exhibitor",
//         isDone: false,
//     },
// ];

export default function Table({ pameran }) {
	return (
		<table>
			<thead>
				<tr>
					<th>No</th>
					<th>Nama Pameran</th>
					<th>Venue</th>
					<th>No BL</th>
					<th>Exhibitor</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{pameran.map((el, id) => (
					<tr key={id}>
						<td>{id + 1}</td>
						<td>{el.ref}</td>
						<td>{el.venue}</td>
						<td>{el.noBL}</td>
						<td>{el.exhibitor}</td>
						<td>
							{el.status
								? "Belum selesai"
								: "Selesai"}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
