import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";


const Footer = () => {
    const { t } = useTranslation('common')
    const router = useRouter();


    return (<>
        <div className={styles.footerLayout}>
            <div className={styles.footer}>
                <h2 
                className="text-[#0BC469] my-5 text-3xl font-bold"
                >Pursatly Ýöriş</h2>
                <div className="flex mb-6">
                    <p 
                    className="w-3/5 pr-12 pt-3 leading-6"
                    >{t("footer.desc")}</p>
                    <div 
                    className="my-6 w-1/3"
                    ><h3 className="font-bold">{t("footer.salesDapartment")}</h3>
                        <button className={styles.footerButton}
                            type="button"
                            onClick={() => router.push("mailto:hi@sales@pursatlyyorish.com")}
                        >
                            sales@pursatlyyorish.com
                        </button></div>
                    <div 
                    className="flex items-center justify-between p-6"
                    >
                        <Link href="https://www.facebook.com/">
                            <a className={styles.socialIcons}>
                                <FaFacebookSquare />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/">
                            <a className={styles.socialIcons}>

                                <FaInstagram />
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/" >
                            <a className={styles.socialIcons}>

                                <FaLinkedinIn />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div >

            </div>

        </div>
        <div style={{ background: 'black', }}>
            <div 
            className="flex justify-between text-[#fff] max-w-7xl mx-auto items-center"
            >

                <div>
                    <p>©2020 Pursatly Yorish. All Rights Reserved. Privacy Policy.</p>
                </div>
                <div style={{ position: 'relative', width: '14rem', margin: "10px ", height: "2rem" }}>
                    <Link href="https://hillitilsimat.com/">
                        <Image
                            src="/logoWhite.svg"
                            alt="Hilli tilsimat logo"
                            objectFit="contain"
                            layout="fill"
                            priority
                        /></Link>
                </div>
            </div>
        </div>
    </>

    )
}

export default Footer;