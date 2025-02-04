
import React from 'react';
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <div className="">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="max-w-2xl bg-white rounded-2xl shadow-lg p-8 text-gray-900"
            >
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-4xl font-bold text-center text-transparent bg-clip-text "
                >
                    Почему Go’zal Smile – лучшая стоматология в Ташкенте?
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-4 text-lg text-gray-700 text-center"
                >
                    Go’zal Smile – это передовые технологии, профессионализм и высокий уровень сервиса. Мы заботимся о вашей улыбке!
                </motion.p>

                <div className="mt-6 space-y-4">
                    {[
                        "Опытные специалисты с многолетним стажем",
                        "Современное оборудование для безболезненного лечения",
                        "Полный спектр стоматологических услуг",
                        "Строгие стандарты стерильности и безопасности",
                        "Гибкие цены и удобные варианты оплаты",
                        "Уютная и комфортная атмосфера для пациентов",
                    ].map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                            className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-md"
                        >
                            <span className="text-blue-500 text-xl">✔</span>
                            <span className="text-gray-800">{text}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-8 flex justify-center"
                >
                    <a
                        href="tel:+998XX-XXX-XX-XX"
                        className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                    >
                        Записаться на прием
                    </a>
                </motion.div>
            </motion.div>

        </div>

    );
};

export default AboutUs;
