import React from 'react';
import './App.css';
import BackgroundMainScreen from "./components/BackgroundMainScreen.jsx";
import DentistryTeamSection from "./components/DentistryTeamSection.jsx";
import TransparentHeader from "./components/Header.jsx";
import YandexMap from "./components/YandexMaps.jsx";
import Portfolio from "./components/Portfolio.jsx";
import ServicesSection from "./components/Services.jsx";

function App() {
    return (
        <div className="bg-gradient-to-br from-purple-600 to-blue-500 min-h-screen">
            <TransparentHeader/>

            <div id="home">
                <BackgroundMainScreen/>
            </div>
            <div id="about">
                <DentistryTeamSection/>
            </div>
            <div id="portfolio">
                <Portfolio/>
            </div>
            <div id="services">
                <ServicesSection/>
            </div>
            <div id='contact'>
                <YandexMap/>
            </div>
        </div>
    );
}

export default App;
