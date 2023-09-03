import Image from 'next/image'
import InteractiveCard from './InteractiveCard';

export default function ProductCard(
	info:{
		header: string;
		imgSrc: string;
		}
	)
{
	return (
		<InteractiveCard contentName={info.header}>
			<div className='w-full h-[70%] relative rounded-t-lg'>
				<Image src={info.imgSrc} alt={info.header}
				className='object-cover rounded-t-lg'
				fill={true}/>
			</div>
			<div className='p-[16px]'>
				{info.header}
			</div>
		</InteractiveCard>
	)
}
