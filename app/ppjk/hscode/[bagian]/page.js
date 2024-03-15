export default function BabPage() {
	return <div>BabPage</div>;
}

// import Bab from "@/app/components/Bab";
// import { btki, pos } from "@/app/lib/data";
// import Link from "next/link";

// export default function BagianPage({ params }) {
// 	return (
// 		<div>
// 			<h1>
// 				{params.bagian
// 					.toUpperCase()
// 					.split("-")
// 					.join(" ")}
// 			</h1>
// 			<hr />
// 			<div>
// 				// Menu
// 				{btki.map((bagian, idx) => {
// 					const { babs } = bagian;
// 					console.log(babs);
// 					return (
// 						<Link
// 							key={idx}
// 							href={babs[idx].judul
// 								.split(" ")
// 								.join("-")
// 								.toLowerCase()}
// 						>
// 							<p>{babs[idx].judul}</p>
// 							<p>
// 								{
// 									babs[
// 										idx
// 									]
// 										.deskripsiBab
// 								}
// 							</p>
// 							<p>
// 								{
// 									babs[
// 										idx
// 									]
// 										.ikhtisarBab
// 								}
// 							</p>
// 						</Link>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// }
