import Head from 'next/head'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Image from 'next/image'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
import { useTranslation } from "next-i18next";
<<<<<<< HEAD
import { useState } from 'react';
=======
import Footer from '../components/footer';
>>>>>>> origin/dev/jaha


export default function Home() {
  const { t } = useTranslation("common");

  const [number,setNumber] = useState(0);
  const [currentNum, setCurrentNum] = useState(1)

  return (
    <div className={styles.container}>
      <Head>
        <title>Pursatly Yorish</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div >
        <div className={styles.main}>
          <h1>PURSATLY ÝÖRIŞ</h1>
          <p>
            {t("common.heroDesc")}
          </p>
        </div>

        <div className={styles.about}>
          <div>
            <h3>{t("aboutSection.title")}</h3>
            <p>
              {t("aboutSection.desc1")}
            </p>
            <p>
              {t("aboutSection.desc2")}
            </p>
            <p>
              {t("aboutSection.desc3")}
            </p>
            <Image
              src="/glass-greenhouse (1).png"
              width={906}
              height={456}
              alt=""
            />
          </div>
          <div>
            <h3>{t("aboutSection.important")}</h3>
            <p>
              - {t("aboutSection.item1")}
            </p>
            <p>
              - {t("aboutSection.item2")}
            </p>
            <p>
              - {t("aboutSection.item3")}
            </p>
            <div className={styles.secondImg}>
              <Image
                src="/Frame 2.png"
                width={487}
                height={418}
                alt=""
              />
            </div>

          </div>
        </div>

        <div className={styles.animation}>
          <div onClick={()=>{setNumber(1);setCurrentNum(1)}} className={number===1 ? styles.mainImg : styles.firstImg || currentNum===1 && styles.firstImg || currentNum===2 && styles.secondImg || currentNum===3 && styles.thirdImg || currentNum===4 && styles.fourthImg}>
            <div>
              <Image src="/img1.png" layout="fill" alt=""/>
              <div>
                <h3>Microchip</h3>
                <p>Лорем ипсум долор сит амет, ин еос мелиус бонорум молестиае,
                  еос ан деленити цонституам. Ад хомеро сцрипторем усу. </p>
              </div>
            </div>
            {number!==1 && <div className={styles.backDrop}></div>}

          </div>
          <div onClick={()=>{setNumber(2);setCurrentNum(2)}} className={number===2 ? styles.mainImg :styles.secondImg || currentNum===2 && styles.secondImg || currentNum===1 && styles.firstImg || currentNum===2 && styles.secondImg || currentNum===3 && styles.thirdImg || currentNum===4 && styles.fourthImg}>
            <div>
              <Image src="/img2.png" layout="fill" alt=""/>
              <div>
                <h3>Microchip</h3>
                <p>Лорем ипсум долор сит амет, ин еос мелиус бонорум молестиае,
                  еос ан деленити цонституам. Ад хомеро сцрипторем усу. </p>
              </div>
            </div>
            {number !==2 && <div className={styles.backDrop}></div>}
          </div>
          <div onClick={()=>{setNumber(3);setCurrentNum(3)}} className={number===3 ? styles.mainImg : styles.thirdImg || currentNum===1 && styles.firstImg || currentNum===2 && styles.secondImg || currentNum===3 && styles.thirdImg || currentNum===4 && styles.fourthImg}>
            <div>
              <Image src="/img3.png" layout="fill" alt=""/>
              <div>
                <h3>Microchip</h3>
                <p>Лорем ипсум долор сит амет, ин еос мелиус бонорум молестиае,
                  еос ан деленити цонституам. Ад хомеро сцрипторем усу. </p>
              </div>
            </div>
           {number!==3 && <div className={styles.backDrop}></div>}
          </div>
          <div onClick={()=>{setNumber(4);setCurrentNum(4)}} className={number===4 ? styles.mainImg : styles.fourthImg || currentNum===1 && styles.firstImg || currentNum===2 && styles.secondImg || currentNum===3 && styles.thirdImg || currentNum===4 && styles.fourthImg}>
            <div>
              <Image src="/img4.png" layout="fill" alt=""/>
              <div>
                <h3>Microchip</h3>
                <p>Лорем ипсум долор сит амет, ин еос мелиус бонорум молестиае,
                  еос ан деленити цонституам. Ад хомеро сцрипторем усу. </p>
              </div>
            </div>
            {number!==4 && <div className={styles.backDrop}></div>}
          </div>
          <div onClick={()=>{setNumber(0);setCurrentNum(number)}} className={number===0 && styles.mainImg || currentNum===1 && styles.firstImg || currentNum===2 && styles.secondImg || currentNum===3 && styles.thirdImg || currentNum===4 && styles.fourthImg}>
            <div>
              <Image src="/img0.png" layout="fill" alt=""/>
              <div>
                <h3>Microchip</h3>
                <p>Лорем ипсум долор сит амет, ин еос мелиус бонорум молестиае,
                  еос ан деленити цонституам. Ад хомеро сцрипторем усу. </p>
              </div>
            </div>
            {number!==0 &&<div className={styles.backDrop}></div>}
          </div>
        </div>

<<<<<<< HEAD
        <div className={styles.slider}>

        </div>

        <div className={styles.contact}>

        </div>
=======

        
>>>>>>> origin/dev/jaha
      </div>





      <Footer />
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});