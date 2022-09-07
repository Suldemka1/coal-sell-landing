import styles from './footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {BsArrowUpCircleFill} from 'react-icons/bs'

const Footer = () => {

  return (
    <footer className={styles.footer}>

      <div className={styles.links}>
        <Link href={'https://vk.com'} >Ссылка на источник</Link>
        <Link href={'https://vk.com'} >Ссылка на источник</Link>
        <Link href={'https://vk.com'} >Ссылка на источник</Link>
        <Link href={'https://vk.com'} >Ссылка на источник</Link>
      </div>

      <div>
        <h4>Горячая линия: +73942257557</h4>
      </div>

      <div className={styles.meta}>
        <h3>Официальный интернет-ресурс</h3>
        <div className={styles.cit}>
          <Link href={'https://vk.com'}>
            <a style={{ gap: '10px' }}><Image src={'/logo.jpg'} width={20} height={20} />Сделано КП РТ ЦИТ РТ  2022</a>
          </Link>
        </div>
      </div>

      <div className={styles.linkToTop}>
        <Link href={'#top-section'} >< BsArrowUpCircleFill className={styles.svgArrow}/></Link>
      </div>
    </footer>
  )
}

export default Footer