# 1. Используем официальное Node.js-окружение как базовый образ
FROM node:18-alpine AS build
  
  # 2. Устанавливаем рабочую директорию
WORKDIR /app
  
  # 3. Копируем package.json и package-lock.json (если есть)
COPY package.json package-lock.json* ./
  
  # 4. Устанавливаем зависимости
RUN npm install --frozen-lockfile
  
  # 5. Копируем исходный код приложения
COPY . .
  
  # 6. Собираем приложение
RUN npm run build
  
  # 7. Используем Nginx для раздачи статики
FROM nginx:alpine
  
  # 8. Копируем сборку React-приложения в Nginx
COPY --from=build /app/build /usr/share/nginx/html
  
  # 9. Копируем кастомный конфиг Nginx (если есть)
COPY nginx.conf /etc/nginx/conf.d/default.conf
  
  # 10. Открываем порт 80
EXPOSE 80
  
  # 11. Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]