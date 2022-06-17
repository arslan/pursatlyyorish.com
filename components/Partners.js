// import React from "react";
import { useTranslation } from "next-i18next";
import { Autoplay, Keyboard, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";

// Statically import the images

import logoMN from "/public/logo-MN.png";
import logoMC from "/public/logo-MC.png";
import logoINT from "/public/logo-INT.png";
import logoNXP from "/public/logo-NXP.png";
import logoSG from "/public/logo-SG.png";
import logoTI from "/public/logo-TI.png";

const Partners = () => {
    const { t } = useTranslation("common");
    const logos = [logoMN, logoMC, logoINT, logoNXP, logoSG, logoTI];
    return (
        <div id="partners" className="section-body max-w-7xl w-full mx-auto mt-0 flex justify-between items-center sm:flex-col lg:flex-row lg:my-24">
            <div className="sm:px-12 w-96">
                <h2 className="">
                    {t("partners.partners")}
                </h2>
                <p className="text-base text-grey mb-10">
                    {t("partners.desc")}
                </p>
                <div className="flex">
                    <div className="swiper-button-prev flex rotate-180 mr-6 cursor-pointer">
                        <Image
                            src="/slider-icon.svg"
                            alt=""
                            width={50}
                            height={50}
                        />
                    </div>

                    <div className="swiper-button-next flex cursor-pointer">
                        <Image
                            src="/slider-icon.svg"
                            alt=""
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
            <div className="lg:max-w-xl xl:max-w-4xl sm:w-full">
                <Swiper
                    breakpoints={{
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },

                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                        320: {
                            slidesPerView: 1.5,
                            spaceBetween: 30,
                        },
                    }}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    keyboard={true}
                    modules={[Navigation, Keyboard, Autoplay]}
                    loop={true}
                    autoplay={true}
                    className=""
                >
                    {logos.map((img, i) => {
                        return (
                            <SwiperSlide key={i + img} className="my-10">
                                <div className="shadow-lg rounded-md w-48 transition-all hover:scale-110">
                                    <Image src={img} alt="" />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Partners;
