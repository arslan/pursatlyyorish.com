import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Link from 'next/link';

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
                <h3 className={t("lang")==="Turkmen"&&styles.h3Turkmen}>{t("common.aboutUS")}</h3>
                <h3 className={t("lang")==="Turkmen"&&styles.h3Turkmen}>{t("common.services")}</h3>
                <h3 className={t("lang")==="Turkmen"&&styles.h3Turkmen}>{t("common.contacts")}</h3>
                <div className={styles.lang}>
                    <h3 className={t("lang")==="Turkmen"&&styles.h3Turkmen} onClick={() => setLangOpen(!langOpen)}>{t("lang")}
                        <MdKeyboardArrowDown />

                    </h3>
                    {langOpen && <div className={styles.langs}>
                        <span className={t("lang")==="Русский"&&styles.ActiveLang} onClick={() => changeLang("Русский")}><Link href="/ru"  locale="ru"> Русский </Link></span>
                        <span className={t("lang")==="English"&&styles.ActiveLang} onClick={() => changeLang("English")}><Link href="/en" locale="en">English</Link></span>
                        <span className={t("lang")==="Turkmen"&&styles.ActiveLang} onClick={() => changeLang("Turkmen")}><Link href="/tk"  locale="tk">Turkmen</Link></span>
                    </div>}
                </div>
                <div className={styles.verticalLine}></div>
                <h3 className={t("lang")==="Turkmen"&&styles.h3Turkmen}><Image src="/Icon.svg" width={20} height={20} alt="" />&nbsp;+993 65039539</h3>
            </div>
        </div>
    )
}

export default Header;