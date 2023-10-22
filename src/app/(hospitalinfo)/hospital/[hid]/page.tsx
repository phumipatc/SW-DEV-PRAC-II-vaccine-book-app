import getHospital from '@/libs/getHospital';
import { Link } from '@mui/material';
import Image from 'next/image'

export default async function hospitalDetailPage({params}: {params: {hid: string}}) {
	const hospitalDetail = await getHospital(params.hid);
	return (
		<main className="text-center p-5">
			<h1 className="text-2xl font-medium">{hospitalDetail.data.name}</h1>
			<div className="flex flex-row my-5">
				<Image
					src={hospitalDetail.data.picture}
					alt="Hospital Picture"
					width={0} height={0} sizes="100vw"
					className="rounded-lg w-[30%] bg-black"
				/>
				<div className="text-left">
					<div className='text-xl mx-5 my-5'>Address: {hospitalDetail.data.address}, {hospitalDetail.data.district}, {hospitalDetail.data.province} {hospitalDetail.data.postalcode}</div>
					<div className='text-xl mx-5 my-5'>Tel: {hospitalDetail.data.tel}</div>
					<Link href={`/booking?id=${params.hid}&name=${hospitalDetail.data.name}`}>
						<button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm">
							Booking
						</button>
					</Link>
				</div>
			</div>
		</main>
	)
}