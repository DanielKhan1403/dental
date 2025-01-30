import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/portfolio/") // Укажите ваш API URL
            .then((response) => response.json())
            .then((data) => {
                setPortfolioItems(data);
            })
            .catch((error) => console.error("Error fetching portfolio:", error));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Наши работы
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="rounded-lg overflow-hidden shadow-lg bg-white p-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={item.images.length ? item.images[0].image : "/placeholder.jpg"}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold mt-4 text-gray-900">
                            {item.title}
                        </h2>
                        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
