import Link from "next/link";

export default function AddPameran() {
	return (
		<button className="border bg-indigo-500 hover:bg-indigo-400 py-2 w-1/6 rounded-md transition-all">
			<Link
				className="text-slate-100 font-bold block hover:text-slate-300"
				href={"/pameran/create"}>
				Buat baru
			</Link>
		</button>
	);
}
