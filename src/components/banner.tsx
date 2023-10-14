'use client'

import styles from './banner.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function Banner() {
	const bannerSource = ["/img/banner0.jpg", "/img/banner1.jpg", "/img/banner2.jpg", "/img/banner3.jpg"]
	const [bannerIndex, setBannerIndex] = useState(0);
	const {data: session} = useSession();
	console.log(session?.user.token);
	return (
		<div className={styles.banner} onClick={()=>setBannerIndex((bannerIndex+1)%bannerSource.length)}>
			<Image src={bannerSource[bannerIndex]} alt="banner" fill={true} objectFit='cover'/>
			<div className={styles.bannerHeader}>
				<h1 className='text-3xl font-medium'>
					Vaccination Booking App
				</h1>
				<h3 className='text-base pt-[10px]'>
					Vaccination is an essential step in building resilience in your body against
					potential diseases that may pose a threat in the future. <br />
					Book your vaccination appointment now!
				</h3>
				{
					session?
					<div className='z-30 absolute top-0 right-10 font-semibold text-xl'>
						Hello {session.user?.name}
					</div>
					:null
				}
			</div>
			<button
				className='relative top-[65vh] left-[90vw] z-20 bg-[#FFFFFF] hover:bg-[#474647] hover:text-white text-black rounded-lg px-[20px] py-[10px] mt-[20px]'
				onClick={(e)=>{e.stopPropagation(); window.location.href='/hospital'}}
				>
					Hospital List
				</button>
		</div>
	)
}