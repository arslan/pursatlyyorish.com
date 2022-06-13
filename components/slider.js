// import React from "react";
import { useTranslation } from 'next-i18next';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import styles from '../styles/Home.module.css';

const Slider = () => {
  const { t } = useTranslation('common');
  let array = [
    '/sumsung.png',
    '/texasLogo.png',
    '/macron.png',
    '/intel.png',
    '/nxp.png',
    '/microChip.png',
  ];
  return (
    <div className="sm:pl-[50px] md:pl-[100px] lg:pl-[150px]">
      <div className={`${styles.sliderText} sm:w-4/5 xl:w-1/5 `}>
        <h1 className="">{t('partners.partners')}</h1>
        <p>{t('partners.desc')}</p>
        <div className={styles.sliderIcons}>
          <div className="swiper-button-prev">
            <div className={styles.prevIcon}>
              &lt;
              {/* <Image src="/prev.png" width={49} height={49} alt="prev" /> */}
            </div>
          </div>

          <div className="swiper-button-next">
            <div className={styles.nextIcon}>
              &gt;
              {/* <Image src="/next.png" width={49} height={49} alt="prev" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={30}
          breakpoints={{
            1000: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            500: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          spaceBetween={30}
          cssMode={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          keyboard={true}
          modules={[Navigation, Keyboard, Autoplay]}
          loop={true}
          autoplay={true}
          className="mySwiper"
        >
          {array.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <div className={styles.SliderItem}>
                  <img src={img} alt="as" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
