import styles from './vaccineCard.module.css'
import Image from 'next/image'

export default function VaccineCard(
	info:{
		header: string;
		imgSrc: string;
		}
	)
{
	return (
		<div className='w-1/4 h-[300px] rounded-lg shadow-lg bg-gray-300 hover:w-1/3'>
			<div className='w-full h-[70%] relative rounded-t-lg'>
				<Image src={info.imgSrc} alt={info.header}
				className='object-cover rounded-t-lg'
				fill={true}/>
			</div>
			<div className='p-[16px]'>
				{info.header}
			</div>
		</div>
	)
}
