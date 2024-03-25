# ФЛЕШ-КАРТЫ

### О Проекте

"Флеш-карты" это приложение-игра, похожая по своей функциональности на проект "Кто хочет стать миллионером".

Приложение позволяет:

- **зарегистрироваться** или **войти** в приложение;
- **поиграть** в игру;
- **заполнять** и **редактировать** профиль пользователя;
- гибко **хранить** как персональную, так и глобальную статистику;

### Стек технологий

- React
- Redux
- JavaScript (ES6)
- TypeScript
- Node.js
- Express
- PostgreSQL
- Sequelize

### ⚙️ Как запустить приложение локально

1. Загрузите и установите PostgreSQL с [официального сайта](https://www.postgresql.org/download/)

2. Откройте SQLShell и создайте базу данных:

```
CREATE DATABASE %db_name% OWNER %user_name%;
```

3. Склонируйте репозиторий:

```
git clone git@github.com:knight-artemis/Flash-Cards.git
```

4. Зайдите в папку client:

```
cd client
```

5. Установите зависимости используя команду:

```
npm install
```

5.1 Скопируйте файл .env.example, и переименуйте его в .env

5.2 Вернитесь в корневую папку проекта и перейдите в папку server:

```
cd..
```

```
cd server
```

5.3. Установите зависимости:

```
npm install
```

5.4 Скопируйте файл .env.example, и переименуйте его в .env

5.5 Измените DB_USER, USER_PASSWORD и DB_NAME используя данные п.2, например:

с

```
DB_USER=user_name
USER_PASSWORD=user_password
DB_NAME=db_name
```

на

```
DB_USER=test_user
USER_PASSWORD=123
DB_NAME=your_game_db
```


6. Инициализируйте базу данных:

```
npm run remig
```

7. Запустите backend сервер:

```
npm run dev
```

8. Перейдите в папку сlient:

```
cd..
```
```
cd client
```

9. Запустите клиентский сервер:

```
npm run dev
```
