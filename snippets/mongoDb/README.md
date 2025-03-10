# Инструкция для MongoDB

Эта инструкция описывает порядок действий для загрузки, настройки и подключения к контейнеру MongoDB.

---

## 1. Загрузите контейнер

Нажмите кнопку **"Выбрать"** в данном окне для загрузки контейнера в ваш проект.

---

## 2. Настройте переменные окружения

Укажите параметры подключения для базы данных через переменные окружения. Ниже приведены основные переменные для MongoDB:

- **`MONGO_INITDB_ROOT_USERNAME`** — имя администратора базы данных (обязательно).
- **`MONGO_INITDB_ROOT_PASSWORD`** — пароль администратора базы данных (обязательно).
- **`MONGO_INITDB_DATABASE`** — имя создаваемой базы данных (по желанию, если требуется создать БД сразу).

---

## 3. Запустите контейнер

Запустите контейнер через интерфейс панели управления, указав необходимые настройки для сети и хранения данных (например, проброс портов и монтирование тома для сохранения данных).

```yaml
services: # (Оставьте этот блок только в первом контейнере, в последующих – подключайтесь к уже запущенному сервису)
  mongo:
    image: mongo:latest
    restart: unless-stopped
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin    # Имя администратора базы данных
      MONGO_INITDB_ROOT_PASSWORD: example  # Пароль администратора
      MONGO_INITDB_DATABASE: example       # Имя создаваемой базы данных (необязательно)
    volumes:
      - ./mongo_data:/data/db              # Сохранение данных БД на хосте
    ports:
      - "27017:27017"                      # Порт MongoDB (не рекомендуется открывать публичный доступ)

  # Опционально: сервис Mongo Express для удобного доступа к БД
  mongo-express:
    image: mongo-express:latest
    restart: unless-stopped
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: admin # Логин при входе в админ.панель
      MONGO_INITDB_ROOT_PASSWORD: example
      ME_CONFIG_MONGODB_ADMINPASSWORD: pass  # Пароль при входе в админ.панель
      ME_CONFIG_MONGODB_SERVER: mongo
    ports:
      - "8081:8081"                         # Доступ к Mongo Express по адресу, выданному платформой L1vestack
```
## 4. Подключитесь к базе данных
Используйте клиент  Mongo Express для подключения к базе данных.
Чтобы установить соединение, примените параметры, заданные в переменных окружения.