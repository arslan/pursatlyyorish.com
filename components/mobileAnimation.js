
import { useTranslation } from 'next-i18next';
import Image from 'next/image'
import styles from "../styles/Home.module.css";

const MobileAnimation = ()=>{
    const { t } = useTranslation("common")
    return (  <div className={styles.animation + " sm:block md:hidden w-full px-2"}>
        <h1  className='text-[25px] font-semibold text-[#1C232D] mb-[60px]'>{t('common.products')}</h1>
    <div className={styles.animationImg}>
      <div>
        <Image src="/texas.png" layout="fill" alt="" />
        <div>
          <h3>Texas Instruments</h3>
          <p>{t('animeDesc.img1')} </p>
        </div>
      </div> 

    </div>
    <div  className={styles.animationImg}>
      <div>
        <Image src="/img2.jpg" layout="fill" alt="" />
        <div>
          <h3>Microchip</h3>
          <p>{t('animeDesc.img2')} </p>
        </div>
      </div> 
    </div>
    <div   className={styles.animationImg}>
      <div>
        <Image src="/img4.png" layout="fill" alt="" />
        <div>
          <h3>Micron</h3>
          <p>{t('animeDesc.img4')}. </p>
        </div>
      </div> 
    </div>
    <div  className={styles.animationImg} >
      <div>
        <Image src="/img3.jpg" layout="fill" alt="" />
        <div>
          <h3>Samsung</h3>
          <p>{t('animeDesc.img3')} </p>
        </div>
      </div> 
    </div>
    <div   className={styles.animationImg}>
      <div>
        <Image src="/img0.jpg" layout="fill" alt="" />
        <div>
          <h3>NXP</h3>
          <p>{t('animeDesc.img0')} </p>
        </div>
      </div> 
    </div>
  </div>)
}

export default MobileAnimation;