# Шаг 1: Сборка React-приложения
FROM node:18-alpine AS build

WORKDIR /app

# Копируем файлы package.json и package-lock.json из папки word-mood-app в рабочую директорию
COPY word-mood-app/package*.json ./

# Установка всех зависимостей, включая devDependencies
RUN npm ci

# Копируем все остальные файлы проекта из папки word-mood-app в рабочую директорию
COPY word-mood-app/ ./

# Собираем React-приложение
RUN npm run build

# Шаг 2: Запуск собранного приложения с помощью Nginx
FROM nginx:alpine

# Копируем собранные файлы из /app/dist контейнера сборки в директорию, где nginx будет раздавать статические файлы
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
