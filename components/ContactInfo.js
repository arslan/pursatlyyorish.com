import { useTranslation } from "next-i18next";
import Image from "next/image";

const ContactInfo = () => {
    const { t } = useTranslation("common");

    const data = [
        {
            title: "contacts.phoneTitle",
            iconSrc: "/phone.svg",
            desc: "+993 65 03-95-39",
        },
        {
            title: "contacts.addressTitle",
            iconSrc: "/address.svg",
            desc: "contacts.address",
        },
        {
            title: "contacts.emailTitle",
            iconSrc: "/mail.svg",
            desc: "info@pursatlyyorish.com",
            descAdd: "sales@pursatlyyorish.com",
        },
    ];

    return (
        <div className="flex sm:flex-col mx-auto items-start lg:flex-row justify-center">
            {data.map(({ title, iconSrc, desc, descAdd }) => {
                return (
                    <div
                        key={title}
                        className="flex flex-col items-center text-center mb-8"
                    >
                        <div className="w-52">
                            <Image
                                src={iconSrc}
                                alt="title"
                                width={50}
                                height={50}
                            />
                            <h3 className="text-xl font-bold my-3">
                                {t(title)}
                            </h3>
                            <p>{t(desc)}</p>
                            <p>{t(descAdd)}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default ContactInfo;
