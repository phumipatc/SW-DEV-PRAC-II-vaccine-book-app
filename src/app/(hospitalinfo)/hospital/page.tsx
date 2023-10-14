import HospitalCatalog from "@/components/hospitalCatalog";
import getHospitals from "@/libs/getHospitals"
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function hospital() {
	const hospitals = getHospitals();
	return (
		<main className="text-center p-5">
			<h1 className="text-4xl font-bold my-5">Hospitals</h1>
			<Suspense fallback={<p>Loading...<LinearProgress/></p>}>
				<HospitalCatalog hospitalRawJson={hospitals}/>
			</Suspense>
		</main>
	)
}