import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Image from 'next/image';
import Header from '../components/header';
import styles from '../styles/Home.module.css';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Footer from '../components/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import About from '../components/About';

export default function Home() {
  const { t } = useTranslation('common');

  const [number, setNumber] = useState(0);
  const [currentNum, setCurrentNum] = useState(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pursatly Yorish</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div>
        <Hero />
        <About />

        {/* <div className={styles.animation}>
          <div
            onClick={() => {
              setNumber(1);
              setCurrentNum(1);
            }}
            className={
              number === 1
                ? styles.mainImg
                : styles.firstImg ||
                  (currentNum === 1 && styles.firstImg) ||
                  (currentNum === 2 && styles.secondImg) ||
                  (currentNum === 3 && styles.thirdImg) ||
                  (currentNum === 4 && styles.fourthImg)
            }
          >
            <div>
              <Image src="/texas.png" layout="fill" alt="" />
              <div>
                <h3>Texas Instruments</h3>
                <p>{t('animeDesc.img1')} </p>
              </div>
            </div>
            {number !== 1 && <div className={styles.backDrop}></div>}
          </div>
          <div
            onClick={() => {
              setNumber(2);
              setCurrentNum(2);
            }}
            className={
              number === 2
                ? styles.mainImg
                : styles.secondImg ||
                  (currentNum === 2 && styles.secondImg) ||
                  (currentNum === 1 && styles.firstImg) ||
                  (currentNum === 2 && styles.secondImg) ||
                  (currentNum === 3 && styles.thirdImg) ||
                  (currentNum === 4 && styles.fourthImg)
            }
          >
            <div>
              <Image src="/img2.jpg" layout="fill" alt="" />
              <div>
                <h3>Microchip</h3>
                <p>{t('animeDesc.img2')} </p>
              </div>
            </div>
            {number !== 2 && <div className={styles.backDrop}></div>}
          </div>
          <div
            onClick={() => {
              setNumber(3);
              setCurrentNum(3);
            }}
            className={
              number === 3
                ? styles.mainImg
                : styles.thirdImg ||
                  (currentNum === 1 && styles.firstImg) ||
                  (currentNum === 2 && styles.secondImg) ||
                  (currentNum === 3 && styles.thirdImg) ||
                  (currentNum === 4 && styles.fourthImg)
            }
          >
            <div>
              <Image src="/img4.png" layout="fill" alt="" />
              <div>
                <h3>Micron</h3>
                <p>{t('animeDesc.img4')}. </p>
              </div>
            </div>
            {number !== 3 && <div className={styles.backDrop}></div>}
          </div>
          <div
            onClick={() => {
              setNumber(4);
              setCurrentNum(4);
            }}
            className={
              number === 4
                ? styles.mainImg
                : styles.fourthImg ||
                  (currentNum === 1 && styles.firstImg) ||
                  (currentNum === 2 && styles.secondImg) ||
                  (currentNum === 3 && styles.thirdImg) ||
                  (currentNum === 4 && styles.fourthImg)
            }
          >
            <div>
              <Image src="/img3.jpg" layout="fill" alt="" />
              <div>
                <h3>Samsung</h3>
                <p>{t('animeDesc.img3')} </p>
              </div>
            </div>
            {number !== 4 && <div className={styles.backDrop}></div>}
          </div>
          <div
            onClick={() => {
              setNumber(0);
              setCurrentNum(number);
            }}
            className={
              (number === 0 && styles.mainImg) ||
              (currentNum === 1 && styles.firstImg) ||
              (currentNum === 2 && styles.secondImg) ||
              (currentNum === 3 && styles.thirdImg) ||
              (currentNum === 4 && styles.fourthImg)
            }
          >
            <div>
              <Image src="/img0.jpg" layout="fill" alt="" />
              <div>
                <h3>NXP</h3>
                <p>{t('animeDesc.img0')} </p>
              </div>
            </div>
            {number !== 0 && <div className={styles.backDrop}></div>}
          </div>
        </div> */}

        {/* <div className={styles.sliderSection}>
          <div>
            <div className={styles.sliderText}>
              <h1>Наши партнёры</h1>
              <p>
                Наша компания является официальном представителем и
                дистрибъютером мировых лидеров в области IT электроники и
                электротехники.{' '}
              </p>
              <div className={styles.sliderIcons}>
                <div className="swiper-button-prev">
                  <div className={styles.prevIcon}>
                    &lt;
                  </div>
                </div>

                <div className="swiper-button-next">
                  <div className={styles.nextIcon}>
                    &gt;
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slider}>
              <Swiper
                slidesPerView={3.5}
                spaceBetween={30}
                cssMode={true}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                  nextIcon: 'sa',
                }}
                keyboard={true}
                modules={[Navigation, Keyboard, Autoplay]}
                loop={true}
                autoplay={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  {' '}
                  <div className={styles.SliderItem}>
                    {' '}
                    <img src={'/sumsung.png'} alt="as" />{' '}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className={styles.SliderItem}>
                    {' '}
                    <img src={'/texas.png'} alt="as" />{' '}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className={styles.SliderItem}>
                    {' '}
                    <img src={'/macron.png'} alt="as" />{' '}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className={styles.SliderItem}>
                    {' '}
                    <img src={'/intel.png'} alt="as" />{' '}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className={styles.SliderItem}>
                    {' '}
                    <img src={'/nxp.png'} alt="as" />{' '}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className={styles.SliderItem}>
                    {' '}
                    <img src={'/microChip.png'} alt="as" />{' '}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div> */}

        <div className={styles.contact}>
          <div className={styles.ContactBgImg}></div>
          <div className={styles.ContactBgBlur}></div>
          <ContactSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
