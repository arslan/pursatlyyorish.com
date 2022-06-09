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
                <h2 style={{ color: "#0BC469", marginBottom:"-6px" }}>Pursatly Ýöriş</h2>
                <div style={{ display: 'flex' }}>
                    <p style={{ width: '60%', paddingRight: '50px', paddingTop: '6px', lineHeight:"24px" }}>{t("footer.desc")}</p>
                    <div style={{ margin: "0 24px", width: '30%' }}><h3>{t("footer.salesDapartment")}</h3>
                        <button className={styles.footerButton}
                            type="button"
                            onClick={() => router.push("mailto:hi@sales@pursatlyyorish.com")}
                        >
                            sales@pursatlyyorish.com
                        </button></div>
                    <div style={{ display: 'flex', justifyItems: "center", justifyContent: "spaceBetween", padding: "12px", margin: '24px 0', width: '20%', }}>
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
            <div style={{ display: "flex", justifyContent: 'space-between', color: 'white', maxWidth: '80rem', margin: '0px auto ' }}>
                <div>
                    <p>©2020 Pursatly Yorish. All Rights Reserved. Privacy Policy.</p>
                </div>
                <div style={{ position: 'relative', width: '14rem', margin: "10px ", height: "2rem" }}>
                    <Link href="hillitilsimat.com">
                        <Image
                            src="/logoWhite.svg"
                            alt="Hilli tilsimat logo"
                            objectFit="contain"
                            layout="fill"
                            // width={200}
                            // height={200}
                            priority
                        /></Link>
                </div>
            </div>
        </div>
    </>

    )
}

export default Footer;