import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Logo.svg";

export default function TransparentHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    // Открытие/закрытие меню
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Скролл поведение хедера
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Функция плавного скролла + переход на главную
    const scrollToSection = (id) => {
        if (location.pathname !== "/") {
            navigate("/"); // Переход на главную
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: "smooth" });
            }, 300);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: "smooth" });
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
                    <button onClick={() => navigate("/")} className="flex items-center gap-4">
                        <img src={logo} alt="Logo" className="h-15 w-20" />
                        <span className="italic text-lg">GO`ZAL SMILE</span>
                    </button>
                </div>

                {/* Навигация */}
                <nav className="hidden md:flex">
                    <ul className="flex gap-8">
                        {["home", "about", "portfolio", "contact"].map((id) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToSection(id)}
                                    className="hover:text-gray-400 font-poppins text-lg cursor-pointer"
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Кнопка мобильного меню */}
                <button className="md:hidden text-2xl" onClick={toggleMenu}>
                    {isMenuOpen ? "X" : "☰"}
                </button>
            </div>

            {/* Мобильное меню */}
            {isMenuOpen && (
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-black bg-opacity-50 absolute w-full top-0 left-0 p-4"
                >
                    <ul className="flex flex-col gap-6 items-center">
                        {["home", "about", "portfolio", "contact"].map((id) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToSection(id)}
                                    className="hover:text-gray-400 font-poppins text-lg cursor-pointer"
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </motion.nav>
            )}
        </motion.header>
    );
}
