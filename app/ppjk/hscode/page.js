import Link from "next/link";
import hscode from "../../db/hscode";
import { btki } from "@/app/lib/data";
import Title from "@/app/components/Title";

export default function HsCodePage() {
	return (
		<>
			<Title>HS Code Page</Title>
			<hr />
			<div className="overflow-scroll">
				{btki.map((item, idx) => (
					<div className="">
						<Link
							href={`hscode/${item.judul
								.split(" ")
								.join("-")
								.toLowerCase()}`}
							key={idx}
						>
							<p className="text-center font-bold uppercase text-lg">
								Bagian {idx + 1}
							</p>
							<p className="text-lg text-center">
								{
									item.deskripsiBagian
								}
							</p>

							<ul>
								{item.ikhtisar
									.length !==
								0
									? item.ikhtisar.map(
											(
												str,
												idx
											) => (
												<li
													className="text-justify mb-4"
													key={
														idx
													}
												>
													{
														str
													}
												</li>
											)
									  )
									: "Tidak ada catatan"}
							</ul>
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
