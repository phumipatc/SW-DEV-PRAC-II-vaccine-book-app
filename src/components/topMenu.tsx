import styles from './topMenu.module.css';
import Image from 'next/image';
import TopMenuItem from './topMenuItem';
import Link from 'next/link';
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function TopMenu () {
	const session = await getServerSession(authOptions);
	return (
		<div className={styles.menuContainer}>
			{
				session?
				<Link href="api/auth/signout">
					<div className='flex items-center absolute left-0 h-full px-2'>
						Sign-out of {session.user?.name}</div>
				</Link>
				:
				<Link href="api/auth/signin">
					<div className='flex items-center absolute left-0 h-full px-2'>
						Sign-in</div>
				</Link>
			}
			<TopMenuItem title='Booking' pageReg='/booking'/>
			<Link href='/'>
				<Image src={'/img/medical_chart.png'} className={styles.logoImg}
				alt='logo' width={0} height={0} sizes="100%"/>
			</Link>
		</div>
	)
}