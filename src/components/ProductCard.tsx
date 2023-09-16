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
	// if(rating != passedRating){
	// 	setRating(passedRating);
	// }
	
	return (
		<InteractiveCard contentName={header}>
			<div className='w-full h-[65%] relative rounded-t-lg'>
				<Image src={imgSrc} alt={header}
				className='object-cover rounded-t-lg'
				fill={true}/>
			</div>
			<div className='p-[16px] h-[25%]'>
				{header}
			</div>
			<Rating
			name="rating"
			value={rating}
			onClick={(e)=>{e.stopPropagation();}}
			onChange={(e, newValue)=>{e.stopPropagation(); setRating(newValue||0); onRatingChange(newValue||0)}}
			/>
		</InteractiveCard>
	)
}
