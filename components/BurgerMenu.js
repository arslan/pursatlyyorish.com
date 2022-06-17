import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

function BurgerMenu() {
    let styles = {
        bmBurgerButton: {
            position: "relative",
            width: "25px",
            height: "20px",
        },
        bmBurgerBars: {
            background: "#ffffff",
            height: "2px",
        },
        bmBurgerBarsHover: {
            background: "#a90000",
        },
        bmCrossButton: {
            height: "24px",
            width: "24px",
        },
        bmCross: {
            background: "#bdc3c7",
        },
        bmMenuWrap: {
            position: "fixed",
            height: "100%",
            left: "0",
            top: "0",
        },
        bmMenu: {
            background: "#344151",
            padding: "2.5em 1.5em 0",
            fontSize: "1.15em",
        },
        bmMorphShape: {
            fill: "#344151",
        },
        bmItemList: {
            color: "#ffffff",
            padding: "0.8em",
        },
        bmItem: {
            display: "block",
        },
        bmOverlay: {
            background: "rgba(0, 0, 0, 0.3)",
            left: "0",
            top: "0",
        },
    };

    const langs = [
        { lang: "en", name: "English", href: "/" },
        { lang: "ru", name: "Russian", href: "/" },
        { lang: "tk", name: "Turkmen", href: "/" },
    ];
    return (<div className="mx-8 xl:hidden">

        <Menu styles={styles}>
            {langs.map(({ lang, name, href }) => {
                return (
                    <Link key={name} href={href} locale={lang}>
                        <a className="block py-4">{name}</a>
                    </Link>
                );
            })}
        </Menu>
    </div>
    );
}

export default BurgerMenu;
