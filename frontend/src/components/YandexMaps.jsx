import React from 'react';
import { PhoneIcon } from '@heroicons/react/outline';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa'; // Импортируем иконки для Telegram и Instagram
import logo from '../assets/Logo.svg'
const YandexMap = () => {
    return (
        <div className="container mx-auto p-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Карта */}
                <div className="relative overflow-hidden rounded-lg shadow-xl bg-white">
                    <a
                        href="https://yandex.uz/maps/org/gozal_smile_dental_clinic/239007654046/?utm_medium=mapframe&utm_source=maps"
                        className="absolute top-0 left-0 text-sm text-gray-300 bg-white p-2 z-10"
                    >
                        Gozalsmile DentalClinic
                    </a>
                    <a
                        href="https://yandex.uz/maps/10335/tashkent/category/dental_clinic/184106132/?utm_medium=mapframe&utm_source=maps"
                        className="absolute top-8 left-0 text-sm text-gray-300 bg-white p-2 z-10"
                    >
                        Стоматологическая клиника в Ташкенте
                    </a>
                    <iframe
                        src="https://yandex.uz/map-widget/v1/org/gozal_smile_dental_clinic/239007654046/?ll=69.298862%2C41.320727&z=16"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        allowFullScreen=""
                        title="Yandex Map"
                        className="w-full h-[400px] md:h-[600px] rounded-lg shadow-lg"
                        style={{ border: 'none' }}
                    ></iframe>
                </div>

                {/* Контактная информация */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Контакты</h2>
                    <div className="flex items-center mb-6">
                        <img src={logo} alt="Logo" className="h-12 w-12 mr-4" />
                        <p className="text-lg text-gray-700">Ваш надежный партнер в стоматологии</p>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                        Ташкент, Мирзо-Улугбекский район, массив Ирригатор, 7
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Телефон: <a href="tel:+998 97 988 99 99" className="text-blue-500 hover:text-blue-700 font-semibold">+998 97 988 99 99</a>

                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Телефон: <a href="tel:+998 97 988 99 99" className="text-blue-500 hover:text-blue-700 font-semibold">+998 91 190 97 38</a>
                    </p>


                    <h2 className="text-3xl font-semibold mt-6 mb-4 text-gray-800">Социальные сети</h2>
                    <div className="text-lg text-gray-700 mb-4">
                        <p>Следите за новостями, акциями и эксклюзивными предложениями в наших социальных сетях!</p>
                    </div>
                    <div className="flex space-x-6 text-2xl text-gray-800">
                        {/* Телефонная иконка */}
                        <a href="tel:+998979889999" className="text-blue-500 hover:text-blue-700 transition-all duration-200">
                            <PhoneIcon className="h-8 w-8" />
                        </a>

                        {/* Телеграм иконка */}
                        <a href="https://t.me/dr_azizov_komiljon" className="text-blue-500 hover:text-blue-700 transition-all duration-200">
                            <FaTelegramPlane className="h-8 w-8" />
                        </a>

                        {/* Инстаграм иконка с мотивационным текстом */}
                        <a href="https://www.instagram.com/gozalsmiledentalclinic/" className="text-pink-500 hover:text-pink-700 transition-all duration-200">
                            <FaInstagram className="h-8 w-8" />
                        </a>
                    </div>
                    <div className="mt-4">
                        <p className="text-lg text-gray-700 font-semibold">
                            Подпишитесь на наш Instagram для эксклюзивных предложений и новостей!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YandexMap;
