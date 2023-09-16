'use client'

import { useReducer, useState } from "react";
import ProductCard from "./ProductCard";
import { List } from "@mui/material";
import { mock } from "node:test";
import Link from "next/link";

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

	const mockProductCard = [{hid:"001", name:"Chulalongkorn Hospital", shortName:"chula", img:"/img/chula.jpg"},
		{hid:"002", name:"Rajavithi Hospital", shortName:"rajavithi", img:"/img/rajavithi.jpg"},
		{hid:"003", name:"Thammasat University Hospital", shortName:"thammasat", img:"/img/thammasat.jpg"}]

	return (
		<div>
			<div className='flex flex-row flex-wrap justify-center mt-[20px] space-x-[20px]'>
				{
					mockProductCard.map((info) => (
						<Link href={`/hospital/${info.hid}`} key={info.hid} passHref={true} className="w-1/5">
							<ProductCard
							header={info.name}
							imgSrc={info.img}
							onRatingChange={(rating:number) => dispatchRating({type: 'add', hospitalName: info.shortName, rating: rating})}
							passedRating={ratingList.findIndex((hospitalName)=>hospitalName==info.shortName) != -1 ? ratingMap.get(info.shortName) || 0 : 0}
							/>
						</Link>
						)
					)
				}
			</div>
			<div className="flex flex-col justify-center items-center mt-[20px] border-[3px] border-black rounded-lg p-[20px] bg-[#474647] text-white">
				{/* show all hospital rating here */}
				{/* white gray bg */}
				<p className="text-4xl">
					{ratingList.length} hospital(s) rated
				</p>
				<List>
					{ratingList.map((hospitalName, index) => {
						return (
							// button border
							<div
							className="border-[2px] p-2 bg-[#101010] hover:bg-[#FFFFFF] hover:text-black cursor-pointer"
							key={index}
							onClick={()=>dispatchRating({type: 'remove', hospitalName: hospitalName, rating: 0}) }>
								{hospitalName} : {ratingMap.get(hospitalName)}
							</div>
						)
					})}
				</List>
			</div>
		</div>
	)
}