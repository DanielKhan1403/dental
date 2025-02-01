import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/services/") // Укажите ваш API URL
            .then((response) => response.json())
            .then((data) => {
                setServices(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке услуг:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
            <div className="w-full max-w-6xl text-center">
                <h2 className="text-4xl font-bold text-white mb-12">Наши услуги</h2>
                {loading ? (
                    <p className="text-white text-lg">Загрузка...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="bg-white rounded-2xl shadow-xl p-6 text-center flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={service.image || "/placeholder.jpg"}
                                    alt={service.title}
                                    className="w-40 h-40 object-cover rounded-lg mb-4 shadow-lg transform transition-transform duration-300 hover:scale-110"
                                />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-500 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 transition-opacity duration-300">{service.description}</p>
                                {service.price && (
                                    <p className="mt-4 text-lg font-bold text-blue-500">
                                        {service.price} ₽
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServicesSection;
