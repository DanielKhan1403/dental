// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import uz from './locales/uz.json';

// Инициализация i18next
i18n
    .use(initReactI18next)  // Подключаем интеграцию с React
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            uz: { translation: uz },
        },
        lng: 'en',  // Установите язык по умолчанию
        fallbackLng: 'en',  // Резервный язык, если перевод для текущего языка не найден
        interpolation: {
            escapeValue: false,  // Не нужно экранировать в React
        },
    });

export default i18n;
