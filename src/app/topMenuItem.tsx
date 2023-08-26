import styles from './topMenuItem.module.css';
import Link from 'next/link';

export default function TopMenuItem (info: {title:string, pageReg:string}) {
	return (
		<Link className={styles.itemContainer} href={info.pageReg}>
			{info.title}
		</Link>
	)
}