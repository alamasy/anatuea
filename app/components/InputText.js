"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputText() {
	const [referensi, setReferensi] = useState("");
	const [venue, setVenue] = useState("");
	const [BL, setBL] = useState("");
	const [exhibitor, setExhibitor] = useState("");

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// read database
		const exhibition = { referensi, venue, BL, exhibitor };

		const res = await fetch(
			"http://localhost:3000/api/exhibition",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(exhibition),
			}
		);

		if (res.status == 201) {
			router.push("/exhibitions");
		}

		setReferensi("");
		setVenue("");
		setBL("");
		setExhibitor("");

		// router.refresh();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className=" h-3/4 border-2 rounded-md shadow-md flex flex-col gap-4 w-[80%] mx-auto p-4"
		>
			<div className="flex items-center">
				<label className="text-sm tracking-wide w-1/5">
					Referensi
				</label>
				<input
					type="text"
					className="border w-full text-sm py-1 px-3 italic"
					placeholder="Masukkan nama referensi pameran"
					value={referensi}
					onChange={(e) =>
						setReferensi(e.target.value)
					}
				/>
			</div>

			<div className="flex items-center">
				<label className="text-sm tracking-wide w-1/5">
					Venue
				</label>
				<input
					type="text"
					className="border w-full text-sm py-1 px-3 italic"
					placeholder="Masukkan nama venue"
					value={venue}
					onChange={(e) =>
						setVenue(e.target.value)
					}
				/>
			</div>
			<div className="flex items-center">
				<label className="text-sm tracking-wide w-1/5">
					No Bill of Lading
				</label>
				<input
					type="text"
					className="border w-full text-sm py-1 px-3 italic"
					placeholder="Masukkan nomor B/L"
					value={BL}
					onChange={(e) => setBL(e.target.value)}
				/>
			</div>
			<div className="flex items-center">
				<label className="text-sm tracking-wide w-1/5">
					Exhibitor
				</label>
				<input
					type="text"
					className="border w-full text-sm py-1 px-3 italic"
					placeholder="Masukkan nama Exhibitor"
					value={exhibitor}
					onChange={(e) =>
						setExhibitor(e.target.value)
					}
				/>
			</div>

			<button
				type="submit"
				className="w-min py-1 px-4 bg-indigo-400 rounded-md text-white hover:bg-indigo-300 transition-all"
			>
				Save
			</button>
		</form>
	);
}
