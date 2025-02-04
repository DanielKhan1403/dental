import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import {MainUrl} from "../../MainUrl.js";
// Настроим модальное окно для доступности
Modal.setAppElement("#root");

const Portfolio = ({ limit = null }) => {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        fetch(`${MainUrl}portfolio/`) // Укажите ваш API URL
            .then((response) => response.json())
            .then((data) => {
                setPortfolioItems(data);

                // Получаем уникальные категории
                const allCategories = new Set();
                data.forEach(item => {
                    item.categories.forEach(category => allCategories.add(category.name));
                });
                setCategories([...allCategories]);
            })
            .catch((error) => console.error("Ошибка при загрузке портфолио:", error));
    }, []);

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Фильтруем работы по выбранной категории
    const filteredItems = selectedCategory
        ? portfolioItems.filter(item => item.categories.some(category => category.name === selectedCategory))
        : portfolioItems;

    // Ограничиваем количество отображаемых элементов, если передан limit
    const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 drop-shadow-lg transition-transform transform hover:scale-105 font-serif mt-14">
                Галерея <span className="text-blue-500">"До / После"</span>
            </h1>


            {/* Фильтр по категориям */}
            <div className="flex flex-wrap justify-center mb-6 space-x-3">
                <button
                    className={`px-4 py-2 rounded-lg text-white ${!selectedCategory ? "bg-blue-700" : "bg-gray-500"} transition hover:bg-blue-800`}
                    onClick={() => setSelectedCategory(null)}
                >
                    Все
                </button>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-lg text-white ${selectedCategory === category ? "bg-blue-700" : "bg-gray-500"} transition hover:bg-blue-800`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Список работ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="rounded-lg overflow-hidden shadow-xl bg-white p-5 hover:shadow-2xl transition duration-300"
                        whileHover={{scale: 1.05}}
                    >
                        {item.images.length > 0 ? (
                            <div className="flex overflow-x-auto space-x-4">
                                {item.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.image}
                                        alt={item.title}
                                        className="w-48 h-48 object-cover rounded-lg cursor-pointer transition hover:opacity-80"
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
                        <h2 className="text-2xl font-bold font-serif mt-4 text-gray-900">
                            {item.title}
                        </h2>
                        {/* Вывод категорий */}
                        {item.categories && item.categories.length > 0 && (
                            <div className="flex flex-wrap mt-2">
                                {item.categories.map((category, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2 tracking-wide"
                                    >
                                        {category.name}
                                    </span>
                                ))}
                            </div>
                        )}
                        <p className="font-montserrat text-gray-700 text-sm mt-2">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Модальное окно для изображений */}
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
                        alt="Выбранное изображение"
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
