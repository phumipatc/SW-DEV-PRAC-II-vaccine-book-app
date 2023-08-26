import Image from 'next/image'
import styles from './page.module.css'
import VaccineCard from '@/components/vaccineCard'
import Banner from '@/components/banner'

export default function Home() {
  return (
    <main>
      <Banner />
      <div className={styles.allVaccineCard}>
        <VaccineCard
          header='Chulalongkorn Hospital'
          imgSrc='/img/chula.jpg'
        />
        <VaccineCard
          header='Rajavithi Hospital'
          imgSrc='/img/rajavithi.jpg'
        />
        <VaccineCard
          header='Thammasat University Hospital'
          imgSrc='/img/thammasat.jpg'
        />
      </div>
    </main>
  )
}
