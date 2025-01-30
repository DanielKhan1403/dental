import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo.svg';
import { motion } from 'framer-motion';

export default function TransparentHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Функция плавного скролла
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        closeMenu();
    };

    return (
        <motion.header
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md text-white z-50"
        >
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Логотип */}
                <div className="text-2xl font-bold">
                    <a href="/" className="flex items-center gap-10">
                        <img src={logo} alt="Logo" className="h-15 w-20" />
                        <span className="italic text-lg">GO`ZAL SMILE</span>
                    </a>
                </div>

                {/* Навигация */}
                <nav className="hidden md:flex">
                    <ul className="flex gap-8">
                        <li>
                            <button onClick={() => scrollToSection('home')} className="hover:text-gray-400 font-poppins text-lg">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')} className="hover:text-gray-400 font-poppins text-lg">
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-400 font-poppins text-lg">
                                Contact
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('portfolio')} className="hover:text-gray-400 font-poppins text-lg">
                                Portfolio
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Кнопка мобильного меню */}
                <button className="md:hidden text-2xl" onClick={toggleMenu}>
                    {isMenuOpen ? 'X' : '☰'}
                </button>
            </div>

            {/* Мобильное меню */}
            {isMenuOpen && (
                <nav className="md:hidden bg-black bg-opacity-50 absolute w-full top-0 left-0 p-4">
                    <ul className="flex flex-col gap-6 items-center">
                        <li>
                            <button onClick={() => scrollToSection('home')} className="hover:text-gray-400 font-poppins text-lg">
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')} className="hover:text-gray-400 font-poppins text-lg">
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-400 font-poppins text-lg">
                                Contact
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('portfolio')} className="hover:text-gray-400 font-poppins text-lg">
                                Portfolio
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </motion.header>
    );
}
