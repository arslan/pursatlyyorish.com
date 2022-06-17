import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "../components/Header";
import { useTranslation } from "next-i18next";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/pagination";
import ContactSection from "../components/ContactSection";
// import Slider from "../components/Slider";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";

import dynamic from "next/dynamic";

const SliderNoSSR = dynamic(() => import("../components/Partners"), {
    ssr: false,
});

export default function Home() {
    const { t } = useTranslation("common");

    return (
        <div className="">
            <Head>
                <title>Pursatly Yorish</title>
                <meta
                    name="Pursatly Yorish's Website"
                    content="Electronics, Microchips, Computer Chips"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <SliderNoSSR />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});
