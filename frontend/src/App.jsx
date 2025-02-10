// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // импортируем хук для перевода
import './App.css';
import BackgroundMainScreen from './components/BackgroundMainScreen';
import DentistryTeamSection from './components/DentistryTeamSection';
import TransparentHeader from './components/Header';
import YandexMap from './components/YandexMaps';
import Portfolio from './components/Portfolio';
import ServicesSection from './components/Services';
import PortfolioPage from './pages/PortfolioPage.jsx';
import Footer from './components/Footer.jsx';
import VideoGallery from './components/VideoGallery.jsx';

import './i18n';  // Импортируем конфигурацию i18next

function HomePage() {
    const navigate = useNavigate();
    const { t } = useTranslation(); // используем хук для перевода

    return (
        <>
            <div id="home">
                <BackgroundMainScreen />
            </div>
            <div id="about">
                <DentistryTeamSection />
            </div>
            <div id="portfolio">
                <div className="text-center">
                    <Portfolio limit={3} />
                    <button
                        className="mt-6 px-8 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                        onClick={() => navigate("/portfolio")}
                    >
                        {t('home.show_more')} {/* Локализованный текст */}
                    </button>
                </div>
            </div>
            <div id="services">
                <ServicesSection />
            </div>
            <div id="contact">
                <YandexMap />
            </div>
            <div id="video">
                <VideoGallery />
            </div>
            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <div>
                <TransparentHeader />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                </Routes>

            </div>
        </Router>
    );
}

export default App;
