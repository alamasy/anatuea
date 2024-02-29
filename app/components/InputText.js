export default function InputText({ dataAtrribut }) {
	return (
		<form className=" h-3/4 border-2 rounded-md shadow-md flex flex-col gap-4 w-[80%] mx-auto p-4">
			{dataAtrribut.map((attr) => (
				<div
					className="flex items-center"
					key={attr.id}>
					<label className="text-sm tracking-wide w-1/5">
						{attr.label}
					</label>
					<input
						className="border w-full text-sm py-1 px-3 italic"
						type="text"
						placeholder={attr.placeholder}
					/>
				</div>
			))}

			<button className="w-min py-1 px-4 bg-indigo-400 rounded-md text-white hover:bg-indigo-300 transition-all">
				Save
			</button>
		</form>
	);
}
