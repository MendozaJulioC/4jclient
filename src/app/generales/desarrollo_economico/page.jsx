
import Image from 'next/image'
import styles from '../../page.module.css'

export default function Page() {
    return (
        <>

        <div className={styles.center}>
        Desarrollo
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
        <div className={styles.center}>
       
        </div>
        </>
      
    );
}


