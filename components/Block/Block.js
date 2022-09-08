import Image from "next/image";
import styles from './block.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Block = () => {
  const images = [
    { url: "/coal.png" },
    { url: "/coal.png" },
    { url: "/coal.png" },
  ];

  return (
    <div className={styles.block}>
      {/* <div className={styles.imageblock}>
        <Image alt='some.png' src={'/coal.png'} layout='fill' className={styles.image} />
      </div> */}

      <Carousel>
        <div>
          <Image src={"/coal.png"} alt="image1" width={900} height={500} />
          <p className="legend">Продажа угля</p>
        </div>
        <div>
          <Image src={"/coal.png"} alt="image2" width={900} height={500} />
          <p className="legend">Продажа угля</p>
        </div>
        <div>
          <Image src={"/coal.png"} alt="image3" width={900} height={500} />
          <p className="legend">Продажа угля</p>
        </div>
        <div>
          <Image src={"/coal.png"} alt="image4" width={900} height={500} />
          <p className="legend">Продажа угля</p>
        </div>
        <div>
          <Image src={"/coal.png"} alt="image5" width={900} height={500} />
          <p className="legend">Продажа угля</p>
        </div>
      </Carousel>



      <div className={styles.content}>
        <div className={styles.title}>
          <h3>Заголовок</h3>
        </div>
        <div className={styles.body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Block