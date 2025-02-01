import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutUs from "./AboutUs.jsx";

const DentistryTeamSection = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/team/") // Укажите ваш API URL
            .then((response) => response.json())
            .then((data) => {
                setTeam(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке команды:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
            <div className="w-full px-6 md:px-12 lg:px-24 py-16 bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl flex-grow">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
                    Наша команда специалистов
                </h2>
                <div className={`grid gap-8 ${team.length === 1 ? "grid-cols-1 place-items-center" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
                    {loading ? (
                        <p className="text-center text-white">Загрузка...</p>
                    ) : (
                        team.map((doctor, index) => (
                            <motion.div
                                key={doctor.id}
                                className="bg-white rounded-2xl shadow-lg p-6 text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={doctor.photo}
                                    alt={doctor.name}
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                                <p className="text-blue-600 text-sm font-medium mb-2">
                                    {doctor.specialization}
                                </p>
                                <p className="text-gray-600 text-sm">{doctor.description}</p>
                            </motion.div>
                        ))
                    )}
                </div>
                <div className="mt-17 flex justify-center w-full">
                    <AboutUs />
                </div>
            </div>
        </div>
    );
};

export default DentistryTeamSection;
