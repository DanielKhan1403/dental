import { useTranslation } from 'react-i18next';
import React from 'react';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); // меняем язык
    };

    return (
        <div className="fixed top-4 right-4 flex gap-3 bg-white p-3 rounded-lg shadow-lg">
            <button
                onClick={() => changeLanguage('ru')}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition duration-300 hover:bg-blue-400 focus:outline-none"
            >
                RU
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md transition duration-300 hover:bg-green-400 focus:outline-none"
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage('uz')}
                className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-md transition duration-300 hover:bg-purple-400 focus:outline-none"
            >
                UZ
            </button>
        </div>
    );
}

export default LanguageSwitcher;
