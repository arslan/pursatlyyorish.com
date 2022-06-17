import { useTranslation } from "next-i18next";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import Form from "./Form";

const ContactSection = () => {
    const { t } = useTranslation("common");

    return (
        <section id="contacts" className="relative  bg-[url('/background-contacts.png')] bg-cover">
            <div className="bg-gradient-to-b from-white via-white/75 to-darkBlue absolute w-full h-full"></div>
            <div className="w-full section-body h-full mx-auto flex flex-col">
                <h1 className="mt-10 text-4xl text-center font-bold mb-12 z-10">
                    {t("common.contacts")}
                </h1>
                <div className="lg:px-12 z-10 mb-12 flex">
                    <ContactInfo />
                </div>
                <div className="pb-24 flex z-10">
                    <div className="lg:w-1/3">
                        <Form />
                    </div>
                    <div className="md:w-2/3 sm:hidden h-[28rem] lg:block z-10 my-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.104460991889!2d58.38682389460728!3d37.903098546057926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd9da80a5487%3A0x27964b35d7a8cba2!2z0JTQvtC8IDY4LCA2OCwgQXNoZ2FiYXQsIFR1cmttZW5pc3Rhbg!5e0!3m2!1sen!2suk!4v1654780512502!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ContactSection;
