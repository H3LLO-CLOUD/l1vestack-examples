## L1vestack examples

## Подробная инструкции по созданию собственного Docker-образа

### 🛠️ Шаг 1: Подготовка Dockerfile

#### В вашем проекте создайте `Dockerfile`, который будет описывать, как собирать ваш образ.  
#### Пример простого `Dockerfile`:

```dockerfile
# Базовый образ
FROM node:18-alpine  

# Рабочая директория внутри контейнера
WORKDIR /app  

# Копируем файлы проекта
COPY . .  

# Устанавливаем зависимости
RUN npm install  

# Открываем порт
EXPOSE 3000  

# Команда запуска приложения
CMD ["npm", "start"]
```

### 🚀 Шаг 2: Сборка Docker-образа
#### Выполните команду для сборки Docker-образа:

```bash
docker build -t ghcr.io/{ВАШ_ЛОГИН_НА_GITHUB}/{ИМЯ_ОБРАЗА}:latest .
```
### 🔹 Пояснение:
- #### `{ВАШ_ЛОГИН_НА_GITHUB}` — замените на свой логин GitHub.
- #### `{ИМЯ_ОБРАЗА}` — любое удобное имя для вашего образа.
- #### `latest` — тег, который можно изменить на любой другой (например, `v1.0`).


### ✅ Шаг 3: Проверка работы образа
#### После успешной сборки можно запустить контейнер и проверить его работу:

```bash
docker run -d -p 80:80 --name example-app-container ghcr.io/{ВАШ_ЛОГИН_НА_GITHUB}/{ИМЯ_ОБРАЗА}:latest

```
### 🔹 Что делает эта команда?
- ####  -d — запускает контейнер в фоновом режиме.
- #### -p 80:80 — пробрасывает порт 80 контейнера на порт 80 хоста.
- #### --name example-app-container — задает контейнеру удобное имя.

### 🔑 Шаг 4: Авторизация в GitHub Container Registry
####  Перед загрузкой образа в GitHub Container Registry (GHCR) необходимо авторизоваться:
```bash
docker login ghcr.io
```
### 🔹 Данные для входа:
- ####  Логин: Ваш логин GitHub
- ####  Пароль: Токен GitHub с разрешением на запись в пакеты
### 💡 Важно:
#### При создании токена в настройках GitHub обязательно включите разрешение "write:packages".
#### ✅ Убедитесь, что флажок «Запись пакетов» включен, как на скриншоте:
_________________________________________________________________________________________
Be sure to select the checkbox: record packages as in the screen

![Image](https://github.com/user-attachments/assets/bdef16c0-76c3-4c24-8e3e-4002461043f3)

_________________________________________________________________________________________


### 📤 Шаг 5: Загрузка образа в GitHub Container Registry
#### После успешного входа в GHCR можно загрузить образ:
```bash
docker push ghcr.io/{Your login by githab}/{your name}:latest
```
### 🔹 Пояснение:
- #### Эта команда отправляет ваш образ в GitHub Container Registry.
- #### После загрузки его можно использовать на других серверах или поделиться с командой.

### 🎉 Готово!
#### Теперь ваш образ доступен в GitHub Container Registry!
#### Вы можете использовать его для развертывания или автоматизации.

### Приятного использования! 🚀✨
