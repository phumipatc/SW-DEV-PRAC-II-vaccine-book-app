'use client'

import { useReducer, useState } from "react";
import ProductCard from "./ProductCard";
import styles from './CardPanel.module.css'
import { List } from "@mui/material";

export default function CardPanel() {
	const [ratingList, setRatingList] = useState<string[]>([]); // ['chula', 'rajavithi', 'thammasat'

	const ratingReducer = (ratingMap: Map<string, number>, action: {type:string, hospitalName: string, rating: number}) => {
		if (action.type == 'add')
			ratingMap.set(action.hospitalName, action.rating);
		else if (action.type == 'remove')
			ratingMap.delete(action.hospitalName);
		setRatingList(Array.from(ratingMap.keys()));
		return ratingMap;
	}
	// ratingList is List of hospital name
	const [ratingMap, dispatchRating] = useReducer(ratingReducer, new Map<string, number>());

	return (
		<div>
			<div className='flex flex-row flex-wrap justify-center mt-[20px] space-x-[20px]'>
				<ProductCard
				header='Chulalongkorn Hospital'
				imgSrc='/img/chula.jpg'
				onRatingChange={(rating:number) => dispatchRating({type: 'add', hospitalName: 'chula', rating: rating})}
				passedRating={ratingList.findIndex((hospitalName)=>hospitalName=='chula') != -1 ? ratingMap.get('chula') || 0 : 0}
				/>
				<ProductCard
				header='Rajavithi Hospital'
				imgSrc='/img/rajavithi.jpg'
				onRatingChange={(rating:number) => dispatchRating({type: 'add', hospitalName: 'rajavithi', rating: rating})}
				passedRating={ratingList.findIndex((hospitalName)=>hospitalName=='rajavithi') != -1 ? ratingMap.get('rajavithi') || 0 : 0}
				/>
				<ProductCard
				header='Thammasat University Hospital'
				imgSrc='/img/thammasat.jpg'
				onRatingChange={(rating:number) => dispatchRating({type: 'add', hospitalName: 'thammasat', rating: rating})}
				passedRating={ratingList.findIndex((hospitalName)=>hospitalName=='thammasat') != -1 ? ratingMap.get('thammasat') || 0 : 0}
				/>
			</div>
			<div>
				{/* show all hospital rating here */}
				<List>
					{ratingList.map((hospitalName, index) => {
						return (
							<div key={index} onClick={()=>dispatchRating({type: 'remove', hospitalName: hospitalName, rating: 0}) }>
								{hospitalName} : {ratingMap.get(hospitalName)}
							</div>
						)
					})}
				</List>
			</div>
		</div>
	)
}