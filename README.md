# BestObivka

Редизайн лендинга мастерской по перетяжке мебели в Саратове и Энгельсе.

## Команды

```bash
npm install
npm run dev
npm run build
npm run lint
```

Локальная разработка запускается через Vite. После запуска сайт доступен по адресу, который выводит `npm run dev`.

## Структура

- `src/data/content.js` - тексты, цены, ссылки, FAQ, портфолио и контакты.
- `src/components/` - переиспользуемые UI-компоненты: кнопки, шапка, FAQ, before/after.
- `src/sections/` - секции лендинга.
- `src/hooks/` - GSAP-анимации, Marquiz и hash-навигация.
- `src/styles/site.css` - визуальная система страницы.
- `public/images/` - локальные ассеты, скачанные с текущего сайта BestObivka.

## Примечания

Проект использует React, Vite, GSAP и lucide-react. Vite зафиксирован на ветке 6, чтобы сборка работала на Node 18 и при этом `npm audit` оставался чистым.
