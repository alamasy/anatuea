import InputText from "@/app/components/InputText";
import Title from "@/app/components/Title";
import { attrFormPameran } from "@/app/lib/data";

export default function CreatePameranPage() {
	return (
		<>
			<Title>Form Pameran Baru</Title>
			<InputText dataAtrribut={attrFormPameran} />
		</>
	);
}
