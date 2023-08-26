import styles from './topMenu.module.css';
import Image from 'next/image';
import TopMenuItem from './topMenuItem';
import Link from 'next/link';

export default function TopMenu () {
	return (
		<div className={styles.menuContainer}>
			<TopMenuItem title='Booking' pageReg='/booking'/>
			<Link href='/'>
				<Image src={'/img/medical_chart.png'} className={styles.logoImg}
				alt='logo' width={0} height={0} sizes="100%"/>
			</Link>
		</div>
	)
}