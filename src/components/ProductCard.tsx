import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';

export default function ProductCard(
	{imgSrc, header, onRatingChange, passedRating}:{imgSrc: string, header: string, onRatingChange:Function, passedRating: number}
	)
{
	const [rating, setRating] = useState(passedRating);
	useEffect(()=>{
		setRating(passedRating);
	},[passedRating]);
	return (
		<InteractiveCard contentName={header}>
			<div className='w-full h-[70%] relative rounded-t-lg'>
				<Image src={imgSrc} alt={header}
				className='object-cover rounded-t-lg'
				fill={true}/>
			</div>
			<div className='p-[16px]'>
				{header}
			</div>
			<Rating name="rating" value={rating} onChange={(e, newValue)=>{e.stopPropagation(); setRating(newValue || 0); onRatingChange(newValue)}}/>
		</InteractiveCard>
	)
}
