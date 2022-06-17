import Image from "next/image";
import { useTranslation } from "next-i18next";

// Statically import the images
import chip_1 from "/public/microchip-1.png";
import chip_2 from "/public/microchip-2.png";
import chip_3 from "/public/microchip-3.png";

function About() {
    const { t } = useTranslation("common");
    return (
        <section id="about" className="relative bg-[url('/background-about.webp')] bg-cover">
        <div className="w-full h-full absolute bg-gradient-to-b from-white/0 to-white"></div>
            <div className="flex mx-auto xsm:flex-wrap md:flex-nowrap section-body z-10">
                <div className="z-10">
                    <h2>{t("aboutSection.title")}</h2>
                    <p>{t("aboutSection.desc1")}</p>
                    <p>{t("aboutSection.desc2")}</p>
                    <p>{t("aboutSection.desc3")}</p>
                </div>
                <div className="flex-shrink-0 xl:ml-10 z-10">
                    <h2>{t("aboutSection.important")}</h2>
                    <ul className="ml-4 list-disc">
                        <li>{t("aboutSection.item1")}</li>
                        <li>{t("aboutSection.item2")}</li>
                        <li>{t("aboutSection.item3")}</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-grow xsm:flex-wrap md:flex-nowrap max-w-7xl mx-auto">
                <Image src={chip_1} alt="chip" />
                <Image src={chip_2} alt="chip" />
                <Image src={chip_3} alt="chip" />
            </div>
        </section>
    );
}

export default About;
