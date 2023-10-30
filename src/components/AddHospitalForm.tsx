import { dbConnect } from "@/db/dbConnect"
import Hospital from "@/db/models/Hospital"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default function AddHospitalForm() {
	const addHospital = async (addHospital: FormData) => {
		"use server"
		const name = addHospital.get("name")
		const address = addHospital.get("address")
		const district = addHospital.get("district")
		const province = addHospital.get("province")
		const postalcode = addHospital.get("postalcode")
		const tel = addHospital.get("tel")
		const picture = addHospital.get("picture")

		try {
			await dbConnect()
			const hospital = await Hospital.create({
				name,
				address,
				district,
				province,
				postalcode,
				tel,
				picture
			})
		} catch (error) {
			console.log(error)
		}
		revalidateTag("hospitals")
		redirect("/hospital")

	}

	return (
		<form action={addHospital} className="flex flex-col items-center justify-center w-full h-full
		bg-slate-100 rounded-lg space-y-2 px-10 py-5">
			<div className="text-xl text-gray-700">Add Hospital Form</div>
			<div className="flex items-center w-full my-2">
				<label className="w-1/4 block text-gray-700 pr-4" htmlFor="name">Hospital name</label>
				<input type="text" required id="name" name="name" placeholder="Hospital name"
				className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
				focus:outline-none focus:botder-blue-400"/>
			</div>
			<div className="flex items-center w-full my-2">
				<label className="w-1/4 block text-gray-700 pr-4" htmlFor="address">Address</label>
				<input type="text" required id="address" name="address" placeholder="Address"
				className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
				focus:outline-none focus:botder-blue-400"/>
			</div>
			<div className="flex items-center w-full my-2">
				<label className="w-1/4 block text-gray-700 pr-4" htmlFor="district">District</label>
				<input type="text" required id="district" name="district" placeholder="District"
				className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
				focus:outline-none focus:botder-blue-400"/>
			</div>
			<div className="flex items-center w-full my-2">
				<label className="w-1/4 block text-gray-700 pr-4" htmlFor="province">Province</label>
				<input type="text" required id="province" name="province" placeholder="Province"
				className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
				focus:outline-none focus:botder-blue-400"/>
			</div>
			<div className="flex items-center w-full my-2">
				<label className="w-1/4 block text-gray-700 pr-4" htmlFor="postalcode">Postal Code</label>
				<input type="text" required id="postalcode" name="postalcode" placeholder="Postal Code"
				className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
				focus:outline-none focus:botder-blue-400"/>
			</div>
			<div className="flex items-center w-full my-2">
				<label className="w-1/4 block text-gray-700 pr-4" htmlFor="tel">Tel.</label>
				<input type="text" required id="tel" name="tel" placeholder="Tel."
				className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
				focus:outline-none focus:botder-blue-400"/>
			</div>
			<div className="flex items-center w-full my-2">
				<label className="w-1/4 block text-gray-700 pr-4" htmlFor="picture">Picture</label>
				<input type="text" required id="picture" name="picture" placeholder="Picture"
				className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700
				focus:outline-none focus:botder-blue-400"/>
			</div>
			<div className="flex items-center w-full my-2">
				<button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
					Add
				</button>
			</div>
		</form>
	)
}