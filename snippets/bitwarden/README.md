# Инструкция для настройки Bitwarden

Инструкция описывает порядок действий для загрузки, настройки и подключения к контейнеру Bitwarden (Bitwarden_RS).

---

## 1. Загрузите контейнер

Нажмите кнопку **"Выбрать"** в данном окне для загрузки контейнера в ваш проект.

---
## 2. Настройте переменные окружения

Укажите параметры для настройки Grafana через переменные окружения. Ниже приведены основные переменные:

- **`GF_SECURITY_ADMIN_PASSWORD`**  — пароль для пользователя admin (обязательно).
- **`SIGNUPS_ALLOWED`** — разрешить регистрацию новых пользователей (true или false).
- **`WEB_VAULT_ENABLED`** — включить веб-интерфейс (true или false).
- **`ADMIN_TOKEN`** — токен для доступа к админке (обязательно, замените на свой).
- **`DATABASE_URL`** — URL для подключения к внешней базе данных (опционально, по умолчанию используется SQLite).
- **`SMTP_HOST`** — хост SMTP-сервера для отправки писем (опционально).
- **`SMTP_PORT`** — порт SMTP-сервера (опционально).
- **`SMTP_USERNAME`** — имя пользователя SMTP (опционально).
- **`SMTP_PASSWORD`** — пароль SMTP (опционально).

---

## 3. Запустите контейнер

Запустите контейнер через интерфейс панели управления, указав необходимые настройки для сети и хранения данных (например, проброс портов и монтирование тома для сохранения данных).

```yaml
services: # (Оставьте этот блок только в первом контейнере, в последующих – подключайтесь к уже запущенному сервису)
  bitwarden:
    image: bitwardenrs/server:latest
    container_name: bitwarden
    restart: unless-stopped
    ports:
      - "8080:80"                              # Порт для доступа к веб-интерфейсу
    volumes:
      - ./bw-data:/data                        # Сохранение данных Bitwarden на хосте
    environment:
      SIGNUPS_ALLOWED: true                    # Разрешить регистрацию новых пользователей
      WEB_VAULT_ENABLED: true                  # Включить веб-интерфейс
      ADMIN_TOKEN: your_admin_token_here       # Токен для доступа к админке (замените на свой)
```

## 4. Подключитесь к Bitwarden
Откройте браузер и перейдите по адресу, выданному платформой L1vestack

Если регистрация разрешена **`(SIGNUPS_ALLOWED=true)`**, создайте новую учётную запись.

Войдите в систему, используя свои учётные данные.

## 5. Доступ к админке

Для доступа к админке перейдите по адресу: {АДРЕС_ВЫДАНЫЙ_ПЛАТФОРМОЙ}/admin
Введите токен, указанный в переменной окружения - **`ADMIN_TOKEN`**.

В админке вы сможете управлять пользователями, настройками и другими параметрами.

# 6. Настройка SMTP (опционально)

Если вы хотите настроить отправку писем (например, для подтверждения регистрации), добавьте следующие переменные окружения

```yaml
environment:
  SMTP_HOST: smtp.example.com                  # Хост SMTP-сервера
  SMTP_PORT: 587                               # Порт SMTP-сервера
  SMTP_USERNAME: your_email@example.com        # Имя пользователя SMTP
  SMTP_PASSWORD: your_email_password           # Пароль SMTP
  SMTP_FROM: your_email@example.com            # Адрес отправителя

```

# 7. Использование внешней базы данных (опционально)

Если вы хотите использовать внешнюю базу данных (например, PostgreSQL или MySQL), добавьте переменную окружения **`DATABASE_URL`**:
```yaml
environment:
  DATABASE_URL: postgresql://user:password@host:port/database_name
```