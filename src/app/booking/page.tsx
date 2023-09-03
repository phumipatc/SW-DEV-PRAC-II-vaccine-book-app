import Form from "@/components/Form"

export default function Booking() {
	return (
		<main className="w-[100%] flex flex-col items-center space-y-4 mt-[12vh]">
			<div className="text-xl font-medium">
				Booking
			</div>
			<div className="w-fit space-y-2">
				<Form/>
			</div>
			<button className="block ring-inset ring-2 ring-orange-300 rounded-md bg-orange-500 hover:bg-orange-600 px-3 py-2 shadow-sm text-white">
				Book
			</button>
		</main>
	)
}