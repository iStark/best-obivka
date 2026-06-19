# BestObivka

Монорепозиторий проекта BestObivka — мастерская по перетяжке мебели в Саратове и Энгельсе.

```
best-obivka/
├─ frontend/   React + Vite лендинг (деплой на GitHub Pages)
└─ backend/    Laravel 12 + MoonShine — админка управления сайтом (/admin)
```

## frontend/

Статический лендинг на React + Vite. Подробности — в [frontend/README.md](frontend/README.md).

```bash
cd frontend
npm install
npm run dev      # локальная разработка
npm run deploy   # сборка + публикация на GitHub Pages
```

## backend/

Laravel 12 с админ-панелью [MoonShine](https://getmoonshine.app). База данных — MariaDB (через Docker).

### Запуск

```bash
cd backend

# 1. Поднять базу данных (MariaDB в Docker)
docker compose up -d

# 2. Установить зависимости (если свежий клон)
composer install
cp .env.example .env        # при необходимости
php artisan key:generate    # при необходимости
php artisan migrate

# 3. Запустить сервер
php artisan serve
```

### Админка

Открывается по адресу **`/admin`** (например `http://127.0.0.1:8000/admin`).

Тестовый супер-админ (созданный при установке — **смените пароль для прода**):

- Логин: `admin@bestobivka.ru`
- Пароль: `password`

Создать нового пользователя: `php artisan moonshine:user`.

### База данных

`docker compose` поднимает MariaDB 11.4 на `127.0.0.1:3306`:

| Параметр | Значение     |
|----------|--------------|
| database | `bestobivka` |
| user     | `bestobivka` |
| password | `secret`     |
| root     | `root`       |

Данные хранятся в Docker-томе `bestobivka-db-data`.

## Дальнейшие шаги

Способ доставки контента из админки на сайт (runtime API или статический экспорт
в сборку фронтенда) ещё не выбран — определим при разработке ресурсов админки.
