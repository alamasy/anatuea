import Title from "../components/Title";

export default function KlasifikasiBarang() {
	// https://www.youtube.com/watch?v=68AXFfsIvTU&t=4037s
	return (
		<>
			<Title>Klasifikasi Barang</Title>
			<ul className="flex flex-col gap-2">
				<li>
					HS Code adalah sistem nama dan nomor
					kode berstandar International untuk
					klasifikasi barang yang diperdagangkan
				</li>
				<li>
					Tidak mungkin HS Code berbeda untuk
					barang yang sama.
				</li>
				<li>
					HS Code dikembangkan dibawah pengawasan{" "}
					<abbr
						className="font-bold no-underline"
						title="World Custom Organizations"
					>
						WCO
					</abbr>{" "}
					dan digunakan lebih dari 200 negara
					dunia.
				</li>
				<li>
					Rilisan dari WCO hanya 6 digit dengan 4
					digit pertama disebut pos (heading) dan
					dua digit terakhir subpos (subheading).
					Negara hanya boleh manambahkan HS Code
					tapi tidak boleh mangubah enam digit
					pertama.
				</li>

				<li>
					Kegunaan dari HS Code antara lain:
					penentuan tarif pabean, pengumpulan
					statistik perdagangan international,
					Rules of Origin, Free Trade Agreement
				</li>
				<li>
					Terdiri dari 21 bagian, 97 Bab (inc. Bab
					77), 1.222 pos, dan 5.383 subpos.
				</li>
				<li>
					Beberapa negara manambahkan Bab untuk
					kepentingan negaranya. Misal untuk
					Indonesia Bab 98 untuk industri otomotif
					dan Bab 99 untuk barang software
				</li>
			</ul>
		</>
	);
}
