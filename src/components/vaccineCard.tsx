import styles from './vaccineCard.module.css'

export default function VaccineCard() {
	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				{/*example Vaccine Name */}
				Dengue vaccine
			</div>
			<div className={styles.cardBody}>
				{/* give some information about */}
				<p>
					A new dengue vaccine is approved for use in children aged 9–16 years with
					laboratory-confirmed previous dengue virus infection and living in areas
					where dengue is endemic (occurs frequently or continuously).
				</p>
			</div>
		</div>
	)
}
