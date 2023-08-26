import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
	return (
		<div className={styles.banner}>
			<Image src="/img/banner.jpg" alt="banner" fill={true} objectFit='cover'/>
			<div className={styles.bannerHeader}>
				<h1 className='text-3xl font-medium'>
					Vaccination Booking App
				</h1>
				<h3 className='text-base pt-[10px]'>
					Vaccination is an essential step in building resilience in your body against
					potential diseases that may pose a threat in the future. <br />
					Book your vaccination appointment now!
				</h3>
			</div>
		</div>
	)
}