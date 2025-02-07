FROM node:alpine as build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install --frozen-lockfile

# Копируем весь код проекта
COPY . .

# Собираем фронтенд
RUN npm run build

# Используем Nginx для раздачи статических файлов
FROM nginx:latest

# Удаляем стандартный конфиг Nginx и копируем свой
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранные файлы Vite в Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
