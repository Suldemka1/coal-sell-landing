import Image from 'next/image'
import Link from 'next/link'
import styles from './contacts.module.scss'

const Contacts = () => {


  return (
    <>
      <h2>Контактные данные</h2>
      <div className={styles.contacts}>

        <div className={styles.phones}>
          <div className={styles.phone}>
            <p className={styles.destination}>Горячая линия</p>
            <p className={styles.number}>+7-(39422)-5-75-57</p>
          </div>
          <div className={styles.phone}>
            <p className={styles.destination}>Горячая линия</p>
            <p className={styles.number}>+7-(39422)-5-75-57</p>
          </div>
          <div className={styles.phone}>
            <p className={styles.destination}>Горячая линия</p>
            <p className={styles.number}>+7-(39422)-5-75-57</p>
          </div>
          <div className={styles.phone}>
            <p className={styles.destination}>Горячая линия</p>
            <p className={styles.number}>+7-(39422)-5-75-57</p>
          </div>
        </div>


        <div className={styles.social}>
          <div className={styles.card}>
            <Link href={'https://vk.com'} >
              <Image src={'/favicon.ico'} width={175} height={126} />
            </Link>
          </div>
          <div className={styles.card}>
            <Link href={'https://vk.com'} >
              <Image src={'/favicon.ico'} width={175} height={126} />
            </Link>
          </div>
          <div className={styles.card}>
            <Link href={'https://vk.com'} >
              <Image src={'/favicon.ico'} width={175} height={126} />
            </Link>
          </div>
          <div className={styles.card}>
            <Link href={'https://vk.com'} >
              <Image src={'/favicon.ico'} width={175} height={126} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts