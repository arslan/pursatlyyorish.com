import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { MdKeyboardArrowDown } from "react-icons/md";

function LanguageMenu() {
    const { t } = useTranslation("common");

    const languages = [
        { lang: "en", langName: "English" },
        { lang: "ru", langName: "Русский" },
        { lang: "tk", langName: "Türkmençe" },
    ];

    return (
        <div className="relative inline-block">
            <Menu>
                <Menu.Button className="flex items-center mx-5 text-white">
                    {t("lang")}
                    <MdKeyboardArrowDown className="ml-1" />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute flex flex-col p-2 rounded-md top-8 bg-darkBlue">
                        {languages.map(({ lang, langName }) => {
                            return (
                                <Menu.Item key={lang}>
                                    {({ active }) => (
                                        <Link locale={lang} href={"/" + lang}>
                                            <button className="items-center px-3 py-2 text-center rounded-md hover:bg-green">
                                                {langName}
                                            </button>
                                        </Link>
                                    )}
                                </Menu.Item>
                            );
                        })}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}

export default LanguageMenu;
