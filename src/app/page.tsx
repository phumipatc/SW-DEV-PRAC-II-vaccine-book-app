import Image from 'next/image'
import styles from './page.module.css'
import VaccineCard from '@/components/vaccineCard'
import Banner from '@/components/banner'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.allVaccineCard}>
        <VaccineCard />
      </div>
    </main>
  )
}
