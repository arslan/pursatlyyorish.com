import Link from "next/link";
import { useTranslation } from "next-i18next";

function Navbar() {
    const { t } = useTranslation("common");
    const navigations = [
        { name: "common.aboutUS", href: "#about" },
        { name: "common.servicesTitle", href: "#services" },
        { name: "common.partners", href: "#partners" },
        { name: "common.contacts", href: "#contacts" },
    ];

    return (
        <div className="flex">
            {navigations.map(({ name, href }) => {
                return (
                    <div key={name} className="mx-5 hover:text-green">
                        <Link href={href}>{t(name)}</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Navbar;
