import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";

// Настроим модальное окно для доступности
Modal.setAppElement("#root");

const Portfolio = ({ limit = null }) => {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/portfolio/") // Укажите ваш API URL
            .then((response) => response.json())
            .then((data) => {
                setPortfolioItems(data);
            })
            .catch((error) => console.error("Error fetching portfolio:", error));
    }, []);

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Ограничиваем количество отображаемых элементов, если передан limit
    const displayedItems = limit ? portfolioItems.slice(0, limit) : portfolioItems;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Наши работы
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="rounded-lg overflow-hidden shadow-lg bg-white p-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        {item.images.length > 0 ? (
                            <div className="flex overflow-x-auto space-x-4">
                                {item.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.image}
                                        alt={item.title}
                                        className="w-48 h-48 object-cover rounded-lg cursor-pointer"
                                        onClick={() => openModal(image.image)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <img
                                src="/placeholder.jpg"
                                alt={item.title}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        )}
                        <h2 className="text-xl font-semibold mt-4 text-gray-900">
                            {item.title}
                        </h2>
                        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Модальное окно для отображения изображений */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal-content"
                overlayClassName="modal-overlay"
                closeTimeoutMS={300} // Плавное закрытие
            >
                <div className="relative flex justify-center items-center">
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-full max-h-[90vh] object-contain"
                    />
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white font-bold bg-gray-800 p-2 rounded-full"
                    >
                        X
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Portfolio;
