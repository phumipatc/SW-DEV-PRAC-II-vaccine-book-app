import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
import HospitalCatalog from "@/components/hospitalCatalog";
import getHospitals from "@/libs/getHospitals"
import getUserProfile from "@/libs/getUserProfile";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export default async function hospital() {
	const hospitals = getHospitals();
	const session = await getServerSession(authOptions);
	const profile = session ? await getUserProfile(session.user.token) : null;
	return (
		<main className="text-center p-5">
			<h1 className="text-4xl font-bold my-5">Hospitals</h1>
			<Suspense fallback={<p>Loading...<LinearProgress/></p>} >
				<HospitalCatalog hospitalRawJson={hospitals}/>
				{
					(profile?.data.role == "admin")?
					<AddHospitalForm/>
					:null
				}
			</Suspense>
		</main>
	)
}