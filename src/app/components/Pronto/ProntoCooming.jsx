'use client'
import Image from 'next/image'
import styles from '../../page.module.css'

export default function Coming() {
    return (
        <>

        <div className={styles.center}>

        <Image
          src="/img/slogan.png"
          alt="Next.js Logo"
          width={500}
          height={500}
          priority
        />
        <Image
          src="/img/pronto.jpg"
          alt="Next.js Logo"
          width={500}
          height={500}
          priority
        />
        </div>
       
        </>
      
    );
}
