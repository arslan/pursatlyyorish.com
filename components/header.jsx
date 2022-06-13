import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const { t } = useTranslation('common');

  const [lang, setLang] = useState('Русский');
  const [langOpen, setLangOpen] = useState(false);

  const changeLang = (lang) => {
    setLangOpen(!langOpen);
    setLang(lang);
  };
  return (
    <div className={styles.headHeader}>
      <div className={styles.header}>
        <div className="lg:hidden">
          <BurgerMenu />
        </div>

        <div>
          <h1>Pursatly Ýöriş</h1>
        </div>
        <div className={styles.headerItems}>
          <Link href="#heroSection">
            <h3 className={t('lang') === 'Turkmen' && styles.h3Turkmen}>
              {t('common.services')}
            </h3>
          </Link>
          <Link href="#aboutSection">
            <h3 className={t('lang') === 'Turkmen' && styles.h3Turkmen}>
              {t('common.aboutUS')}
            </h3>
          </Link>
          <Link href="#contactSection">
            <h3 className={t('lang') === 'Turkmen' && styles.h3Turkmen}>
              {t('common.contacts')}
            </h3>
          </Link>
          <div className={styles.lang}>
            <h3
              className={t('lang') === 'Turkmen' && styles.h3Turkmen}
              onClick={() => setLangOpen(!langOpen)}
            >
              {t('lang')}
              <MdKeyboardArrowDown />
            </h3>
            {langOpen && (
              <div className={styles.langs}>
                <span
                  className={t('lang') === 'Русский' && styles.ActiveLang}
                  onClick={() => changeLang('Русский')}
                >
                  <Link href="/ru" locale="ru">
                    {' '}
                    Русский{' '}
                  </Link>
                </span>
                <span
                  className={t('lang') === 'English' && styles.ActiveLang}
                  onClick={() => changeLang('English')}
                >
                  <Link href="/en" locale="en">
                    English
                  </Link>
                </span>
                <span
                  className={t('lang') === 'Turkmen' && styles.ActiveLang}
                  onClick={() => changeLang('Turkmen')}
                >
                  <Link href="/tk" locale="tk">
                    Turkmen
                  </Link>
                </span>
              </div>
            )}
          </div>
          <div className={styles.verticalLine}></div>

          <h3 className={t('lang') === 'Turkmen' && styles.h3Turkmen}>
            <Image src="/Icon.svg" width={20} height={20} alt="" />
            &nbsp;+99365039539
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
