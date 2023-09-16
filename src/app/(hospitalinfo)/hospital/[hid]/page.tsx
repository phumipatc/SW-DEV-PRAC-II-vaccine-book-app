import Image from 'next/image'

export default function hospitalDetailPage({params}: {params: {hid: string}}) {
	const mockHospital = new Map()
	mockHospital.set('001', {name:"Chulalongkorn Hospital", shortName:"chula", img:"/img/chula.jpg"})
	mockHospital.set('002', {name:"Rajavithi Hospital", shortName:"rajavithi", img:"/img/rajavithi.jpg"})
	mockHospital.set('003', {name:"Thammasat University Hospital", shortName:"thammasat", img:"/img/thammasat.jpg"})
	return (
		<main className="text-center p-5">
			<h1 className="text-2xl font-medium">hospital ID: {params.hid}</h1>
			<div className="flex flex-row my-5">
				<Image
					src={mockHospital.get(params.hid).img}
					alt={mockHospital.get(params.hid).name}
					width={0} height={0} sizes="100vw"
					className="rounded-lg w-[30%] bg-black"
				/>
				<div className='text-xl mx-5 my-5'>{(mockHospital.get(params.hid)).name}</div>
			</div>
		</main>
	)
}