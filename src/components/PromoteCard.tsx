'use client'

import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

export default function PromoteCard() {
	const [videoStatus, setVideoStatus] = useState(true);
	return (
		<div className='w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row'>
			<VideoPlayer videoStatus={videoStatus} videoPath='/vid/getvaccine.mp4'/>
			<div className='m-5'>
				Get your vaccine today.
				<button className="block rounded-md bg-sky-600 hover:bg-indigo-600 my-3 px-10 py-2 text-white shadow-sm" onClick={()=>setVideoStatus(!videoStatus)}>
					{videoStatus?'Pause':'Play'}
				</button>
			</div>
		</div>
	)
}