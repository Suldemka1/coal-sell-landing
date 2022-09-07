import styles from './footer.module.scss'
import Link from 'next/link'

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
            <a>Сделано КП РТ &quot ЦИТ РТ &quot 2022</a>
          </Link>
        </div>
      </div>

      <div>
        <Link href={'#top-section'} >link to top</Link>
      </div>
    </footer>
  )
}

export default Footer