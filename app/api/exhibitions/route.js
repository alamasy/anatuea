import { getExhibitions } from "@/app/db/fetchDB";
import { NextResponse } from "next/server";

export async function GET() {
	const exhibitions = getExhibitions();

	return NextResponse.json({
		nama: "alam",
	});
}
