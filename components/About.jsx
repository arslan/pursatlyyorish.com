import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useTranslation } from 'next-i18next';

function About() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.about + 'flex flex-col m-8'}>
      <div>
        <h3 className="mb-4 text-3xl font-bold">{t('aboutSection.title')}</h3>
        <div className="mb-4">
          <p>{t('aboutSection.desc1')}</p>
          <p>{t('aboutSection.desc2')}</p>
          <p>{t('aboutSection.desc3')}</p>
        </div>
        <div className={styles.AboutImges + 'flex flex-col my-4'}>
          <div>
            <Image
              src="/glass-greenhouse (1).png"
              width={418}
              height={335}
              alt=""
            />
          </div>
          <div>
            <Image src="/Frame 3183495.png" width={417} height={323} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-3xl font-bold">
          {t('aboutSection.important')}
        </h3>
        <div className="mb-4">
          <p>- {t('aboutSection.item1')}</p>
          <p>- {t('aboutSection.item2')}</p>
          <p>- {t('aboutSection.item3')}</p>
        </div>
        <div className={styles.secondImg}>
          <Image src="/Frame 2.png" width={417} height={395} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
