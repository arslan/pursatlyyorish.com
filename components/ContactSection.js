import { useTranslation } from "next-i18next";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import Form from "./Form";
import styles from "../styles/Home.module.css";


const ContactSection = () => {
    const { t } = useTranslation("common")

    return (<>

        <div className="max-w-7xl mx-auto  py-20 relative">

            <h1 className="text-7xl text-[#fff] text-center font-bold">{t("common.contacts")}</h1>
            <div className="px-12">
                <ContactInfo />

            </div>
            <div className={`${styles.contactFormMap} pb-24 px-12 flex`}>
            <div className={` ${styles.form} lg:w-1/3 flex-grow sm:m-4 md:mr-12`}>
                    <Form />
                </div>
                <div className={`${styles.map} md:w-2/3 sm:hidden lg:block`}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.104460991889!2d58.38682389460728!3d37.903098546057926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd9da80a5487%3A0x27964b35d7a8cba2!2z0JTQvtC8IDY4LCA2OCwgQXNoZ2FiYXQsIFR1cmttZW5pc3Rhbg!5e0!3m2!1sen!2suk!4v1654780512502!5m2!1sen!2suk" width='100%' height="100%" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </>
    )
}
export default ContactSection