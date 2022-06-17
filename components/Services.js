import { useTranslation } from "next-i18next";
import Image from "next/image";

// Statically importing the images
import img_TI from "/public/partners-TI.png";
import img_MC from "/public/partners-MC.jpeg";
import img_NXP from "/public/partners-NXP.webp";
import img_MN from "/public/partners-MN.png";
import img_SG from "/public/partners-SG.jpeg";

function Services() {
    const { t } = useTranslation("common");

    const data = [
        { name: "Samsung", imageSource: img_SG, desc: "animeDesc.desc_SG" },
        { name: "Microchip", imageSource: img_MC, desc: "animeDesc.desc_MC" },
        {
            name: "Texas Instruments",
            imageSource: img_TI,
            desc: "animeDesc.desc_TI",
        },
        { name: "NXP", imageSource: img_NXP, desc: "animeDesc.desc_NXP" },
        { name: "Micron", imageSource: img_MN, desc: "animeDesc.desc_MN" },
    ];

    return (
        <section id="services" className="relative bg-[url('/background-partners.png')] bg-cover">
            <div className="absolute w-full h-full bg-gradient-to-b from-white via-white/25 to-white"></div>
            <div className="relative section-body mx-auto">
                <h2 className="">{t("common.servicesTitle")}</h2>
                <div className="flex flex-wrap my-10 justify-center">
                    {data.map(({ name, imageSource, desc }) => {
                        return (
                            <div
                                key={name}
                                className="shadow-md h-96 rounded-md w-72 lg:mr-6 mb-6 group hover:shadow-lg bg-white hover:shadow-darkBlue/25 transition-all hover:scale-110 duration-500 hover:z-10 overflow-clip"
                            >
                                <div className="flex w-full h-32 mx-auto bg-white">
                                    <Image
                                        src={imageSource}
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                                <p className="m-3 text-center">{t(desc)}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;
