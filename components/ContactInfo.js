
import { useTranslation } from "next-i18next"
import Image from "next/image"

const ContactInfo = () => {
    const { t } = useTranslation("common")
    return (
        <>
            <div className="min-w-[100%] flex my-10 text-white flex-wrap w-full justify-evenly">
                <div className="sm:w-1/2 flex flex-col items-center   md:w-1/3">

                    <Image src='/phone.svg' width={100} height={100} alt='' />
                    <p className="pt-4 text-lg">{t("contacts.phone")}&nbsp;+993 65039539</p>
                </div>
                <div className=" sm:w-1/2  flex flex-col items-center md:border-x-2 sm:border-l-2 sm:border-x-0 border-[#0BC469] md:w-1/3 ">

                    <Image src='/address.svg' width={100} height={100} alt='' />
                    <p className="pt-4 text-lg px-20 text-center">{t("contacts.adres")}</p>
                </div>
                <div className= " sm:w-1/2  sm:mt-10 lg:mt-0   flex flex-col items-center  md:w-1/3 ">

                    <Image src='/mail.svg' width={100} height={100} alt='' />
                    <p className="pt-4 text-lg">info@pursatlyyorish.com</p>
                    <p className="p2-4 text-lg">sales@pursatlyyorish.com</p>
                </div>
            </div>
        </>)
}
export default ContactInfo