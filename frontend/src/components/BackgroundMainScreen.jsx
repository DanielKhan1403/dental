import React from 'react';
import 'animate.css';


import DentistryBannerSlider from "./DentistryBannerSlider.jsx";


export const BackgroundMainScreen = () => {
    return (


        <div className="bg-gradient-to-r from-gray-100 via-black-300 to-gray-500 h-screen animate-gradient flex items-center justify-center flex-col relative">

            <DentistryBannerSlider/>


        </div>
    );
};

export default BackgroundMainScreen;
