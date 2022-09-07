import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.orgname}>
        <Image alt='some.png' src={'/favicon.ico'} width={70} height={70} />
        <h1>Министерство топлива и энергетики</h1>
      </div>
    
      <menu className={styles.main_menu}>
        <li><Link href={'#map-section'} scroll={true}><a>Карта складов</a></Link></li>
        <li><Link href={'#contacts-section'} ><a>Контакты</a></Link></li>
        <li><Link href={'#partheners-section'} ><a>Партнеры</a></Link></li>
      </menu>

    </header>
  )

}

export default Header