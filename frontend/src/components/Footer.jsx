import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTelegram} from "react-icons/fa";
import image from '../assets/bottom-block.jpg';


export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative text-white"
        >
            {/* Фон */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/* Контент */}
            <div className="relative z-10  bg-opacity-50 px-6 py-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                    {/* Логотип и текст */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold italic">GO`ZAL SMILE</h2>
                        <p className="text-gray-300 mt-2">Сияйте с нами каждый день!</p>
                    </div>

                    {/* Социальные сети */}
                    <div className="flex space-x-6 text-xl">
                        <a href="https://t.me/dr_azizov_komiljon" className="hover:text-gray-400 transition"><FaTelegram /></a>
                        <a href="https://www.instagram.com/gozalsmiledentalclinic/" className="hover:text-gray-400 transition"><FaInstagram /></a>

                    </div>
                </div>

                {/* Линия */}
                <div className="border-t border-gray-500 my-6"></div>

                {/* Копирайт */}
                <p className="text-center text-gray-300">© 2025 GO`ZAL SMILE. Все права защищены. <br/> Powered by Khanseverov</p>
            </div>
        </motion.footer>
    );
}
