import { useTranslation } from "next-i18next";

function Hero() {
    const { t } = useTranslation("common");
    return (
        <div className="bg-[url('/background-hero.webp')] bg-fixed bg-cover h-[calc(60vh)] flex items-center">
            <div className="flex flex-col items-center my-12 max-w-7xl mx-auto">
                <h1 className="mb-4 text-4xl font-black text-center text-white transition-colors duration-200 ease-in-out w-fit hover:text-green">
                    PURSATLY ÝÖRIŞ
                </h1>
                <p className="text-center text-white xl:mx-72 xsm:mx-10">{t("common.heroDesc")}</p>
            </div>
        </div>
    );
}

export default Hero;
