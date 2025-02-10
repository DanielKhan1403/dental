import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "../assets/Logo.svg";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function TransparentHeader() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (id) => {
        if (location.pathname !== "/") {
            navigate("/");
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
            className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md text-white z-50 shadow-md"
        >
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="text-2xl font-bold">
                    <button onClick={() => navigate("/")} className="flex items-center gap-4">
                        <img src={logo} alt="Logo" className="h-15 w-20 rounded-lg shadow-sm" />
                        <span className="italic text-lg tracking-wide">{t("header.logo")}</span>
                    </button>
                </div>

                <nav className="hidden md:flex">
                    <ul className="flex gap-8">
                        {["home", "about", "portfolio", "contact", "video"].map((id) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToSection(id)}
                                    className="hover:text-gray-300 font-poppins text-lg cursor-pointer transition-colors duration-300"
                                >
                                    {t(`header.${id}`)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button className="md:hidden text-2xl transition-transform duration-300 transform hover:scale-110" onClick={toggleMenu}>
                    {isMenuOpen ? t("header.close") : t("header.menu")}
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 w-2/3 h-screen bg-gray-900 bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center gap-6 z-50 shadow-xl"
                    >
                        <button
                            className="absolute top-5 right-5 text-2xl text-white transition-transform duration-300 transform hover:scale-110"
                            onClick={closeMenu}
                        >
                            {t("header.close")}
                        </button>
                        {["home", "about", "portfolio", "contact", "video"].map((id) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className="text-white text-2xl font-semibold italic hover:text-gray-400 transition-colors duration-300"
                            >
                                {t(`header.${id}`)}
                            </button>
                        ))}
                        <LanguageSwitcher />
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}