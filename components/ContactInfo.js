
import { useTranslation } from "next-i18next"
import Image from "next/image"

const ContactInfo = () => {
    const { t } = useTranslation("common")
    return (
        <>
            <div className="flex my-10 text-white">
                <div className="flex flex-col items-center w-1/3">

                    <Image src='/phone.svg' width={100} height={100} alt='' />
                    <p className="pt-4 text-lg">{t("contacts.phone")}&nbsp;+993 65039539</p>
                </div>
                <div className="flex flex-col items-center border-x-2 border-[#0BC469] w-1/3 ">

                    <Image src='/address.svg' width={100} height={100} alt='' />
                    <p className="pt-4 text-lg px-20 text-center">{t("contacts.adres")}</p>
                </div>
                <div className="flex flex-col items-center  w-1/3 ">

                    <Image src='/mail.svg' width={100} height={100} alt='' />
                    <p className="pt-4 text-lg">info@pursatlyyorish.com</p>
                    <p className="p2-4 text-lg">sales@pursatlyyorish.com</p>
                </div>
            </div>
        </>)
}
export default ContactInfo