import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import banner1 from '../assets/banner.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner4.png';
import { useTranslation } from 'react-i18next';

const DentistryBannerSlider = () => {
    const { t } = useTranslation();
    const slides = [
        {
            id: 1,
            background: banner1,
            title: t('banner.slide1.title'),
            subtitle: t('banner.slide1.subtitle'),
            buttonText: t('banner.slide1.buttonText'),
            link: 'https://t.me/dr_azizov_komiljon',
        },
        {
            id: 2,
            background: banner2,
            title: t('banner.slide2.title'),
            subtitle: t('banner.slide2.subtitle'),
            buttonText: t('banner.slide2.buttonText'),
            link: 'https://t.me/dr_azizov_komiljon',
        },
        {
            id: 3,
            background: banner3,
            title: t('banner.slide3.title'),
            subtitle: t('banner.slide3.subtitle'),
            buttonText: t('banner.slide3.buttonText'),
            link: 'https://t.me/dr_azizov_komiljon',
        },
    ];


    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            className="w-full h-[100vh]"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div
                        className="relative w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${slide.background})`,
                            backgroundPosition: 'center 70%',
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-opacity-50"></div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 flex flex-col items-start justify-center h-full text-left px-8 space-y-6 md:px-16 lg:px-24"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg whitespace-pre-line">
                                {slide.title}
                            </h1>
                            {slide.subtitle && (
                                <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl drop-shadow-md whitespace-pre-line">
                                    {slide.subtitle}
                                </p>
                            )}
                            <button
                                onClick={() => window.open(slide.link, '_blank')} // Открытие в новом окне
                                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-xl cursor-pointer"
                            >
                                {slide.buttonText}
                            </button>
                        </motion.div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default DentistryBannerSlider;
