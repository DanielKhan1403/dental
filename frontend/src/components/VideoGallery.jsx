import { useState, useEffect } from "react";
import axios from "axios";
import {MainUrl} from "../../MainUrl.js";

const VideoGallery = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        // Загрузка видео с сервера
        axios
            .get(`${MainUrl}video/`)
            .then((response) => {
                setVideos(response.data);
            })
            .catch((error) => console.error("Ошибка при загрузке видео:", error));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Видеогалерея</h1>

            {/* Список видео */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="group relative rounded-lg overflow-hidden shadow-xl bg-white p-4 transform transition-all hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={video.thumbnail || "/placeholder.jpg"}
                            alt={video.title}
                            className="w-full h-48 object-cover rounded-lg group-hover:opacity-75 transition-opacity"
                            onClick={() => setSelectedVideo(video)}
                        />
                        <h2 className="text-xl font-bold mt-4 text-gray-900">{video.title}</h2>
                        <p className="text-sm text-gray-600 mt-2">{video.description}</p>
                    </div>
                ))}
            </div>

            {/* Модальное окно для воспроизведения видео */}
            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedVideo(null)}>
                    <div className="bg-white p-8 rounded-lg max-w-4xl w-full">
                        <video
                            controls
                            className="w-full h-auto rounded-lg"
                            src={selectedVideo.video_file}
                        >
                            Ваш браузер не поддерживает воспроизведение видео.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoGallery;
