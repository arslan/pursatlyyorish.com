import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Footer = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <>
      <div className='w-full inline-flex bg-[#344151] p-0'>
        <div className='max-w-7xl  2xl:mx-auto sm:self-start text-[#fff] sm:px-4 lg:px-12 2xl:px-0'>
          <h2 className="text-[#0BC469] my-5 text-3xl font-bold">
            Pursatly Ýöriş
          </h2>
          <div className="flex mb-6 justify-around items-center">
            <div className='sm:hidden lg:block'>

              <p className="w-3/5 pt-3 pr-12 leading-6 ">{t('footer.desc')}</p>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 my-6">
              <h3 className="font-bold ">{t('footer.salesDapartment')}</h3>
              <button
                className={styles.footerButton}
                type="button"
                onClick={() =>
                  router.push('mailto:hi@sales@pursatlyyorish.com')
                }
              >
                sales@pursatlyyorish.com
              </button>
            </div>
            <div className="flex items-center justify-around p-6 sm:ml-6">
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
              <Link href="https://www.linkedin.com/">
                <a className={styles.socialIcons}>
                  <FaLinkedinIn />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div style={{ background: 'black' }}>
        <div className="flex justify-between text-[#fff] max-w-7xl mx-auto items-center">
          <div>
            <p>©2022 Pursatly Yorish. All Rights Reserved. Privacy Policy.</p>
          </div>
          <div
            style={{
              position: 'relative',
              width: '10rem',
              margin: '10px ',
              height: '2rem',
            }}
          >
            <Link href="https://hillitilsimat.com.tm/" >
              <Image
                src="/hillitilsimat-logo.min.svg"
                alt="Hilli Tilsimat logo"
                objectFit="contain"
                layout="fill"
                priority
                className='cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
