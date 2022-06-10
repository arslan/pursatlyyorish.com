import { useTranslation } from "next-i18next";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import Form from "./Form";
const ContactSection = () => {
    const { t } = useTranslation("common")

    return (<>

        <div className="max-w-7xl mx-auto  py-20 relative">

            <h1 className="text-7xl text-[#fff] text-center font-bold">{t("common.contacts")}</h1>
            <div className="">
                <ContactInfo />

            </div>
            <div className="flex justify-between pb-24 flex-wrap">
                <div className="w-1/3 ">

                    <Form />
                </div>
                <div className="w-2/3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.104460991889!2d58.38682389460728!3d37.903098546057926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd9da80a5487%3A0x27964b35d7a8cba2!2z0JTQvtC8IDY4LCA2OCwgQXNoZ2FiYXQsIFR1cmttZW5pc3Rhbg!5e0!3m2!1sen!2suk!4v1654780512502!5m2!1sen!2suk" width="800" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </>
    )
}
export default ContactSection