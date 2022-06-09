import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

const Header = () => {
    const { t } = useTranslation("common")


    const [lang, setLang] = useState("Русский");
    const [langOpen, setLangOpen] = useState(false)

    const changeLang = (lang) => {
        setLangOpen(!langOpen);
        setLang(lang)
    }
    return (
        <div className={styles.header}>
            <div>
                <h1>Pursatly Ýöriş</h1>

            </div>
            <div>
                <h3>{t("common.aboutUS")}</h3>
                <h3>{t("common.services")}</h3>
                <h3>{t("common.contacts")}</h3>
                <div className={styles.lang}>
                    <h3 onClick={() => setLangOpen(!langOpen)}>{lang}
                        <MdKeyboardArrowDown />

                    </h3>
                    {langOpen && <div className={styles.langs}>
                        <span className={styles.ActiveLang} onClick={() => changeLang("Русский")}>Русский</span>
                        <span onClick={() => changeLang("English")}>English</span>
                        <span onClick={() => changeLang("Turkmen")}>Turkmen</span>
                    </div>}
                </div>
                <div className={styles.verticalLine}></div>
                <h3 className={styles.pnoneNumber}><Image src="/Icon.svg"
                    width={20} height={20}
                    // layout="fill"
                    alt="" className={styles.phone} />&nbsp; &nbsp;+993 65039539</h3>
            </div>
        </div>
    )
}

export default Header;