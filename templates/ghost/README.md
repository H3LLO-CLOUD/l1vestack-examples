# Инструкция по подключению Ghost в платформу L1vestack

### 1. Загрузите конфигурацию  в редактор на платформе 

```bash
services:
  ghost:
    image: ghost:latest
    restart: unless-stopped
    environment:
      database__client: mysql
      database__connection__host: db
      database__connection__user: root
      database__connection__password: example
      database__connection__database: ghost
      url: http://localhost:2368 #требует замены
      NODE_ENV: production
    ports:
      - "2368:2368"
    volumes:
      - ./ghost_content:/var/lib/ghost/content

  db:
    image: mysql:9.2
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: example
      MYSQL_DATABASE: ghost
      MYSQL_USER: ghost
      MYSQL_PASSWORD: ghost
    ports:
      - "3306:3306"
    volumes:
      - ./mysql_data:/var/lib/mysql
```

### 2. При минимальной конфигурации (1 CPU, 4Гб RAM) Ghost разворачивается 2-3 минуты

![Image](https://github.com/user-attachments/assets/9ba0e3db-da5a-4ea3-a655-6b9ea7aa1544)


### 3 После появления порта правой панели 
![Image](https://github.com/user-attachments/assets/f7d10cbf-3769-46eb-a007-7b22fad18bdb)
#### скопируйте ссылку на 2368 и вставьте ее в url внутри контейнера  "ghost"
#### ПРИМЕР:
```
url: https://ghost.ace.correct.adore.bold.divine.app.l1vestack.ru
```
#### и перезапустите проект 