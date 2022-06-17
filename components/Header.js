import { useTranslation } from "next-i18next";

import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import LanguageMenu from "./Header/LanguageMenu";
import Navbar from "./Header/Navbar";

const Header = () => {
    const { t } = useTranslation("common");


    return (
        <div className="w-full bg-darkBlue fixed z-50">
            <div className="flex items-center w-full h-16 mx-auto my-0 bg-darkBlue">
                <BurgerMenu />
                <div className="xl:ml-24">
                    <h1 className="font-sans text-3xl font-semibold text-green">
                        Pursatly Ýöriş
                    </h1>
                </div>
                <div className="items-center justify-end flex-grow float-right w-1/2 text-white xl:flex xsm:hidden">
                    <Navbar />
                    <LanguageMenu />
                    <div className="w-0.5 h-10 bg-white mx-5"></div>

                    <div className="flex items-center ml-5 mr-24">
                        <Image src="/Icon.svg" width={20} height={20} alt="" />
                        <p className="ml-2">+99365039539</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
