import { useTranslation } from "next-i18next";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
    const { t } = useTranslation("common");
    const router = useRouter();

    return (
        <>
            <div className="w-full inline-flex bg-darkBlue p-0">
                <div className="max-w-7xl  mx-auto sm:self-start text-white px-12 2xl:px-0">
                    <h2 className="text-green my-5 text-3xl font-bold">
                        Pursatly Ýöriş
                    </h2>
                    <div className="flex mb-6 lg:justify-around lg:items-center">
                        <div className="sm:hidden lg:block">
                            <p className="w-3/5 pt-3 pr-12 leading-6 ">
                                {t("footer.desc")}
                            </p>
                        </div>
                        <div className="lg:w-1/3">
                            <h3 className="font-bold ">
                                {t("footer.salesDapartment")}
                            </h3>
                            <Link href="mailto:sales@pursatlyyorish.com">
                                sales@pursatlyyorish.com
                            </Link>
                        </div>
                        <div className="flex items-center lg:justify-around lg:p-6 sm:ml-8">
                            <Link href="https://www.facebook.com/">
                                <a className="mr-2">
                                    <FaFacebookSquare />
                                </a>
                            </Link>
                            <Link href="https://www.instagram.com/">
                                <a className="mr-2">
                                    <FaInstagram />
                                </a>
                            </Link>
                            <Link href="https://www.linkedin.com/">
                                <a className="">
                                    <FaLinkedinIn />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="bg-black">
                <div className="flex sm:flex-col lg:flex-row sm:text-xs text-white max-w-7xl px-12 xl:px-0 mx-auto items-center">
                    <div className="mt-2 lg:my-2 lg:w-96">
                        <p>©2022 Pursatly Yorish. All Rights Reserved.</p>
                    </div>
                    <div className="lg:flex lg:justify-end lg:w-full lg:items-center text-center">
                        <p className="mt-2 lg:mt-0 lg:mr-4">Developed by:</p>
                        <div className="relative w-32 mb-2 lg:mb-0 h-6">
                            <Link href="https://hillitilsimat.com.tm/">
                                <Image
                                    src="/hillitilsimat-logo.min.svg"
                                    alt="Hilli Tilsimat logo"
                                    objectFit="contain"
                                    layout="fill"
                                    priority
                                    className="cursor-pointer"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
