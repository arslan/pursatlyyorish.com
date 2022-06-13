import styles from '../styles/Home.module.css';
import { useTranslation } from 'next-i18next';

function Hero() {
  const { t } = useTranslation('common');
  return (
    <div className={styles.main + ' sm:w-full sm:h-full pb-32'}>
      <h1>PURSATLY ÝÖRIŞ</h1>
      <p>{t('common.heroDesc')}</p>
    </div>
  );
}

export default Hero;
