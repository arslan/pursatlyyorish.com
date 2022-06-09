import React, { useState } from "react";
import styles from "../styles/Home.module.css";
const Header = ()=>{

    const [lang,setLang] = useState("Русский");
    const [langOpen,setLangOpen] = useState(false)

    const changeLang = (lang)=>{
        setLangOpen(!langOpen);
        setLang(lang)
    }
    return(
        <div  className={styles.header}>
            <div>
                <h1>Pursatly Ýöriş</h1>

            </div>
            <div>
                <h3>О нас</h3>
                <h3>Услуги</h3>
                <h3>Контакты</h3>
                <div className={styles.lang}>
                    <h3 onClick={()=>setLangOpen(!langOpen)}>{lang}</h3>
                   {langOpen && <div className={styles.langs}>
                        <span className={styles.ActiveLang} onClick={()=>changeLang("Русский")}>Русский</span>
                        <span onClick={()=>changeLang("English")}>English</span>
                        <span onClick={()=>changeLang("Turkmen")}>Turkmen</span>
                    </div>}
                </div>
                <div className={styles.verticalLine}></div>
                <h3><img src="./Icon.svg"/>+993 65039539</h3>
            </div>
        </div>
    )
}

export default Header;