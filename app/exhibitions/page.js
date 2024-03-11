import AddPameran from "../components/AddPameran";
import Title from "../components/Title";
import exhibitions from "../db/exhibitions";

export default function Pameran() {
	return (
		<>
			<Title>Daftar Pameran</Title>
			<AddPameran />
			{exhibitions.map((exh, idx) => (
				<div
					className="bg-slate-50 w-10/12 rounded-md shadow-md p-6 flex gap-3"
					key={idx}
				>
					<div className="div">
						<p>Referensi</p>
						<p>Venue</p>
						<p>Bill of Lading</p>
						<p>Exhibitor</p>
						<p>Status</p>
					</div>
					<div>
						<p>: {exh.referensi}</p>
						<p>: {exh.venue}</p>
						<p>: {exh.BL}</p>
						<p>: {exh.exhibitor}</p>
						<p>
							:{" "}
							{exh.status
								? "Selesai"
								: "Belum Selesai"}
						</p>
					</div>
				</div>
			))}
		</>
	);
}
