import Image from 'next/image'
import styles from './partheners.module.scss'
import {AiOutlineMail, AiFillPhone} from 'react-icons/ai'

const Partheners = () => {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Image src={'/favicon.ico'} layout='fill' className={styles.image} />
        </div>

        <div className={styles.content}>
          <div className={styles.meta}>
            <h4>Название компании</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className={styles.footer}>
            <div className={styles.contacts}>
              <div className={styles.phone}> <AiOutlineMail /> +7-(39422)-7-5775</div>
              <div className={styles.email}> <AiFillPhone /> someemail@mail.com</div>
            </div>
            <div className={styles.social}>
              <Image src={'/favicon.ico'} width={30} height={30} />
              <Image src={'/favicon.ico'} width={30} height={30} />
              <Image src={'/favicon.ico'} width={30} height={30} />
              <Image src={'/favicon.ico'} width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partheners