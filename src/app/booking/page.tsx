import LocationDateReserve from "@/components/LocationDateReserve"

export default function Booking() {
	return (
		<main className="w-[100%] flex flex-col items-center space-y-4 mt-[12vh]">
			<div className="text-xl font-medium">
				Booking
			</div>
			<div className="w-fit space-y-2">
				<LocationDateReserve/>
			</div>
			<button className="block rounded-md bg-orange-500 hover:bg-orange-600 px-3 py-2 shadow-sm text-white">
				Book
			</button>
		</main>
	)
}