import Form from "@/components/Form"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import getHospitals from "@/libs/getHospitals";

export default async function Booking() {
	const session = await getServerSession(authOptions);
	const hospitals = await getHospitals();
	if(!session || !session.user.token)	return null
	const profile = await getUserProfile(session.user.token)
	var createdAt = new Date(profile.data.createdAt)

	return (
		<main className="w-[100%] flex flex-col items-center space-y-4 mt-[12vh]">
			{
				session?
				<div className='font-semibold text-xl text-center'>
					User Profile
					<div className="text-left text-lg">
						<div>Name: {profile.data.name}</div>
						<div>Email: {profile.data.email}</div>
						<div>Tel.: {profile.data.tel}</div>
						<div>Member Since {createdAt.toString()}</div>
					</div>

				</div>
				:null
			}
			<div className="text-xl font-medium">
				Booking
			</div>
			<div className="w-fit space-y-2">
				<Form hospitals={hospitals}/>
			</div>
		</main>
	)
}