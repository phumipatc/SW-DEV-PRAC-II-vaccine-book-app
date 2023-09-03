import Image from 'next/image'
import styles from './page.module.css'
import ProductCard from '@/components/ProductCard'
import Banner from '@/components/banner'

export default function Home() {
  return (
    <main>
      <Banner />
      <div className={styles.allProductCard}>
        <ProductCard
          header='Chulalongkorn Hospital'
          imgSrc='/img/chula.jpg'
        />
        <ProductCard
          header='Rajavithi Hospital'
          imgSrc='/img/rajavithi.jpg'
        />
        <ProductCard
          header='Thammasat University Hospital'
          imgSrc='/img/thammasat.jpg'
        />
      </div>
    </main>
  )
}
